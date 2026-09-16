import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../styles/product-details.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-content">
          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <p className="details-description">
            {product.description}
          </p>

          <h2>
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <button
            type="button"
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <Link to="/products" className="back-link">
            ← Back to Products
          </Link>
        </div>
      </div>

      {showToast && (
        <div className="cart-toast">
          Added to Cart ✓
        </div>
      )}
    </main>
  );
}
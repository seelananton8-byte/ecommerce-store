import "../styles/products.css";

export default function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h2>{product.title}</h2>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <button
            type="button"
            onClick={() => onViewDetails(product.id)}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
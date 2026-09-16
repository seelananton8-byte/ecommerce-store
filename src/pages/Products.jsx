import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

export default function Products() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <main className="products-page">
      <div className="products-container">
        <section className="products-header">
          <p className="products-label">OUR PRODUCTS</p>

          <h1>Shop Our Products</h1>

          <p>
            Explore our collection of quality products at affordable prices.
          </p>
        </section>

        <section className="product-filters">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </section>

        {filteredProducts.length > 0 ? (
          <section className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </section>
        ) : (
          <div className="no-products">
            <h2>No Products Found</h2>
            <p>Try another search or category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
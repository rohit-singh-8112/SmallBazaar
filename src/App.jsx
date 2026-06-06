import { useState, useEffect } from "react";
import Header from "./Component/layout/Header";
import Footer from "./Component/layout/Footer";
import "./App.css";
import image from "./image.jpg";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.slice(0, 8));
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <img src={image} alt="Online Shopping" className="hero-image" />
        <div className="hero-overlay">
          <h2>Welcome to Small Bazaar</h2>
          <p>Discover amazing products at unbeatable prices</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="promo-item">
          <span className="promo-icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders above $50</p>
        </div>
        <div className="promo-item">
          <span className="promo-icon">💳</span>
          <h3>Easy Payments</h3>
          <p>Multiple payment options</p>
        </div>
        <div className="promo-item">
          <span className="promo-icon">↩️</span>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className="promo-item">
          <span className="promo-icon">🏆</span>
          <h3>Best Quality</h3>
          <p>Premium products only</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <a href="#" className="view-all">View All →</a>
        </div>

        {loading && (
          <div className="loading">
            <p>Loading products...</p>
            <div className="spinner"></div>
          </div>
        )}

        {error && (
          <div className="error">
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="no-products">
            <p>No products available</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <button className="wishlist-btn">❤️</button>
                </div>
                <div className="product-info">
                  <h3 title={product.title}>{product.title}</h3>
                  <p className="category">{product.category}</p>
                  <p className="rating">⭐ {product.rating?.rate || 4.5}/5</p>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <span className="category-icon">📱</span>
            <p>Electronics</p>
          </div>
          <div className="category-card">
            <span className="category-icon">👕</span>
            <p>Fashion</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🏠</span>
            <p>Home & Kitchen</p>
          </div>
          <div className="category-card">
            <span className="category-icon">📚</span>
            <p>Books</p>
          </div>
          <div className="category-card">
            <span className="category-icon">⚽</span>
            <p>Sports</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🎮</span>
            <p>Gaming</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;

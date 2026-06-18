import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const Blog = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Latest Blog Posts</h1>

          <div className="blog-card">
            <h3>Top Shopping Trends 2026</h3>
            <p>Discover the latest trends in online shopping.</p>
          </div>

          <div className="blog-card">
            <h3>How To Choose Quality Products</h3>
            <p>Tips for buying products online safely.</p>
          </div>
          <h1>Shopping Tips & Blogs</h1>

          <div className="blog-card">
            <h3>Top Products Trending This Month</h3>
            <p>Explore the most popular items chosen by our customers.</p>
          </div>

          <div className="blog-card">
            <h3>How To Shop Smart Online</h3>
            <p>Tips to save money and choose quality products.</p>
          </div>
        </main>

      <Footer />
    </>
  )
}

export default Blog
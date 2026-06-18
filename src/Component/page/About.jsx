import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"
import '../style/Pages.css'
import logo from '../../../public/SmallBazaar1.png'




const About = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <div className="about-header">
            <img src={logo} alt="logo" className="about-logo" />

            <div>
              <h1>About Small Bazaar</h1>
              <p className="tagline">
                Smart Shopping, Better Prices, Trusted Service.
              </p>
            </div>
          </div>

          <section>
            <h2>Who We Are</h2>

            <p>
              RC Small Bazaar is a modern online shopping platform dedicated to
              providing customers with quality products at affordable prices.
              We aim to make online shopping simple, secure, and enjoyable for
              everyone.
            </p>

            <p>
              From everyday essentials to trending products, we carefully select
              items that offer great value and customer satisfaction. Our goal is
              to create a marketplace where customers can shop confidently and
              conveniently.
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>

            <p>
              Our mission is to deliver high-quality products, excellent customer
              service, and a seamless shopping experience while maintaining
              affordability and trust.
            </p>
          </section>

          <section>
            <h2>Our Vision</h2>

            <p>
              To become a trusted online shopping destination recognized for
              reliability, innovation, and customer satisfaction across India.
            </p>
          </section>

          <section>
            <h2>Why Choose RC Small Bazaar?</h2>

            <div className="features">
              <div className="feature-card">
                <h3>Quality Products</h3>
                <p>Carefully selected products from trusted suppliers.</p>
              </div>

              <div className="feature-card">
                <h3>Affordable Pricing</h3>
                <p>Competitive prices without compromising quality.</p>
              </div>

              <div className="feature-card">
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping services.</p>
              </div>

              <div className="feature-card">
                <h3>Secure Shopping</h3>
                <p>Safe payments and protected customer information.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Our Commitment</h2>

            <p>
              At RC Small Bazaar, customer satisfaction is at the heart of
              everything we do. We continuously improve our services and product
              offerings to ensure every customer enjoys a smooth shopping
              experience from browsing to delivery.
            </p>
          </section>
        </main>

      <Footer />
    </>
  )
}

export default About
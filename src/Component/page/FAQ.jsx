import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const FAQ = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Frequently Asked Questions</h1>

          <div className="faq-item">
            <h3>How long does delivery take?</h3>
            <p>Usually 3-7 business days.</p>
          </div>

          <div className="faq-item">
            <h3>Can I return products?</h3>
            <p>Yes, within 7 days of delivery.</p>
          </div>
          <h1>Frequently Asked Questions</h1>

          <div className="faq">
            <h3>How can I place an order?</h3>
            <p>Add products to cart and proceed to checkout.</p>

            <h3>What payment methods are accepted?</h3>
            <p>UPI, Debit Card, Credit Card and Cash on Delivery.</p>

            <h3>Can I cancel my order?</h3>
            <p>Yes, before the order is shipped.</p>
          </div>
        </main>

      <Footer />
    </>
  )
}

export default FAQ
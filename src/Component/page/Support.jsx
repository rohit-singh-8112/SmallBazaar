import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const Support = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Customer Support</h1>

          <p>
            Need help with an order, payment, or delivery?
            Our support team is available to assist you.
          </p>

          <button className="support-btn">
            Contact Support
          </button>
        </main>

      <Footer />
    </>
  )
}

export default Support
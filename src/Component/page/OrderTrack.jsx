import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const OrderTrack = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Track Your Order</h1>

          <input
            type="text"
            placeholder="Enter Order ID"
            className="track-input"
          />

          <button className="track-btn">
            Track Order
          </button>
        </main>

      <Footer />
    </>
  )
}

export default OrderTrack
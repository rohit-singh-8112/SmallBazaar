import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const Shipping = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Shipping Information</h1>
          <ul>
            <li>Orders processed within 24 hours.</li>
            <li>Delivery time: 3–7 business days.</li>
            <li>Free shipping on selected orders.</li>
            <li>Tracking details sent after dispatch.</li>
          </ul>
        </main>


      <Footer />
    </>
  )
}

export default Shipping
import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const Return = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Returns & Refunds</h1>

          <p>
            Customers can request a return within 7 days of delivery.
            Products must be unused and in original packaging.
          </p>
        </main>

      <Footer />
    </>
  )
}

export default Return
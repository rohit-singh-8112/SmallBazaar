import CartHeader from "../layout/CartHeader"
import Footer from "../layout/Footer"

const submitHadler = () =>{
  alert('your request is successfully placed.');
}

const Contact = () => {
  return (
    <>
      <CartHeader />
        <main className="page-container">
          <h1>Contact Us</h1>

          <p>Email: chauhanrc7878@gmail.com</p>
          <p>Phone: +91 8112467938</p>
          <p>Business Hours: Monday - Saturday (9:00 AM - 7:00 PM)</p>

          <form className="contact-form" onSubmit={submitHadler}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </main>

      <Footer />
    </>
  )
}

export default Contact
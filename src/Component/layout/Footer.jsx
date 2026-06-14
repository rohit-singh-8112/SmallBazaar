
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Small Bazaar is your one-stop shop for quality products at great prices.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: chauhanrc7878@gmail.com</p>
          <p>Phone: +91 8112467938</p>
          <p>Address: 740,Shree Ram Niwash, katkari pada rabale navi mumbai (400708)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Small Bazaar. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
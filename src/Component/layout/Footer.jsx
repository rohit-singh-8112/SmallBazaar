import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareGithub   } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


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
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/Shipping">Shipping Info</Link></li>
            <li><Link to="/Return">Returns</Link></li>
            <li><Link to="/OrderTrack">Track Order</Link></li>
            <li><Link to="/Support">Support</Link></li>
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
          <a href="https://www.facebook.com/profile.php?id=100025564327447" target="_blank"> <FontAwesomeIcon icon={faSquareFacebook} /> </a>
          <a href="https://x.com/RohitChauhy0y" target="_blank"> <FontAwesomeIcon icon={faSquareTwitter} /> </a>
          <a href="https://www.instagram.com/rsingh8112/" target="_blank"> <FontAwesomeIcon icon={faSquareInstagram} /> </a>
          <a href="https://github.com/rohit-singh-8112" target="_blank"> <FontAwesomeIcon icon={faSquareGithub} /> </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
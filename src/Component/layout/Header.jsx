import { Link } from "react-router-dom"
import '../style/Header.css';
import logo from '../../assets/logo.jpg'; 
import { Boxes } from 'lucide-react';
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";

const Header = () => {
  const {cart} = useContext(ThemeContext);
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src={logo} alt="Small Bazaar Logo" className="logo" />
            <h1 className="brand-name">Small Bazaar</h1>
          </div>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="header-icons">
            <div className="icon-item">
              <span className="icon">
                <Boxes />
              </span>
              <span className="label">
                <select className="select">
                  <option value="en">CATEGORIES</option>
                  <option value="women's clothing">Women Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men Clothing</option>
                </select>
              </span>
            </div>
            <div className="icon-item">
              <span className="icon">🛒</span>
              <span className="badge" >{cart.length}</span>
              <span className="label">Cart</span>
            </div>
            <div className="icon-item">
              <span className="icon">👤</span>
              <span className="label"><Link to="/LoginSignUp">Account</Link></span>
            </div>
          </div>
        </div>
      </header>
     
    </>
  );
};

export default Header;


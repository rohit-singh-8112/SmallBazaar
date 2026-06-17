

import { Link, useNavigate } from "react-router-dom"
import '../style/Header.css';
import logo from '../../assets/logo.jpg';
// import { Contact } from 'lucide-react'; 
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";



const CartHeader = () => {

    const {cart} = useContext(ThemeContext);
    const loginUser = JSON.parse(localStorage.getItem('loginUser') || "null");
    const navigate = useNavigate();
  
    const logout = ()=>{
        if(loginUser){
        const result = confirm('Are you sure to logout');
        if(result){
            localStorage.removeItem("loginUser");
            navigate("/");
        }
        }
    };



  return (
   <>
   <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src={logo} alt="Small Bazaar Logo" className="logo" />
            <h1 className="brand-name">Small Bazaar</h1>
          </div>
          
          <div className="header-icons">
            
            <div className="icon-item">
              <Link to="/" >
                <span className="icon about">🏠︎</span>
                <span className="label">Home</span>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/Contact" >
                <span className="icon contact"> ☏</span>
                <span className="label">Contact</span>
              </Link>
            </div>

            <div className="icon-item">
              <Link to="/Cart" >
                <span className="icon">🛒</span>
                <span className="badge" >{cart.length}</span>
                <span className="label">Cart</span>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/LoginSignUp">
                <span className="icon">👤</span>
                <span className="label">{!loginUser ? "Account" :(<span onClick={logout}>Logout</span>)}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
   
   </>
  )
}

export default CartHeader
import { Link, useNavigate } from "react-router-dom"
import '../style/Header.css';
import logo from '../../assets/logo.jpg'; 
import { Boxes } from 'lucide-react';
import { useContext, useRef } from "react";
import ThemeContext from "../../store/ThemeContext";
// import axios from "axios";

const Header = () => {

  const {cart, setCategory, allProducts, setFilteredProducts, showPopup} = useContext(ThemeContext);
  const loginUser = JSON.parse(localStorage.getItem('loginUser') || "null");
  const navigate = useNavigate();
  const inputValue = useRef();
  // const [search, setSearch] = useState("");
 
  const searchHandler =async()=>{
    const searchval = inputValue.current.value.toLowerCase();
    if ( searchval == ""){
      navigate("/")
    }else{
      // const controller = new AbortController;
      // try{
      //   const res = await axios.get(`https://dummyjson.com/products/search?q=${searchval}`, { signal: controller.signal })
      //   setFilteredProducts(res.data.products);
      // }catch(error){
      //   console.log(error.massage);
      // }
      setFilteredProducts(allProducts.filter(
        (product)=>{
          const title = product.title || "";
          const brand = product.brand || "";
          const category = product.category || "";
          const description = product.description || "";
          return(
          title.toLowerCase().includes(searchval) ||
          brand.toLowerCase().includes(searchval) ||
          category.toLowerCase().includes(searchval)||
          description.toLowerCase().includes(searchval)
          )
        }
      ));
      navigate("/Search");
    }  
  };

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
          {showPopup && (<div className="cart-popup">✅ Product Added To Cart</div>)}
          <div className="logo-section">
            <img src={logo} alt="Small Bazaar Logo" className="logo" />
            <h1 className="brand-name">Small Bazaar</h1>
          </div>
          <div className="search-bar">
            <input 
              ref={inputValue}
              type="text" 
              placeholder="Search products..." 
              className="search-input"
              onKeyDown={(e)=> {if(e.key =='Enter') searchHandler()}}
            />
            <button className="search-btn" onClick={searchHandler} >Search  </button>
          </div>
          <div className="header-icons">
            <div className="icon-item">
              <span className="icon"><Boxes/></span>
              <span className="label">
                <select className="select"
                  onChange={(e)=> setCategory(e.target.value)}
                >
                  <option value="">CATEGORIES</option>
                  <option value="beauty">Beauty</option>
                  <option value="mobile-accessories">Mobile Accessories</option>
                  <option value="groceries">Groceries</option>
                  <option value="mens-shirts">Men Clothing</option>
                </select>
              </span>
            </div>
            <div className="icon-item">
              <Link to="/Cart" >
                <span className="icon">🛒</span>
                <span className="badge" >{cart.length}</span>
                <span className="iconCart">🛒</span>
                <span className="label labelCart">Cart</span>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/LoginSignUp">
                <span className="icon">👤</span>
                <span className="label">{!loginUser ? "Account " :(<span onClick={logout}>Logout</span>)}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
     
    </>
  );
};

export default Header;


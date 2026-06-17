import { useContext} from "react"
import ThemeContext from '../../store/ThemeContext'
import Footer from '../layout/Footer'
import CartProduct from "../Product/CartProduct"
import CartHeader from "../layout/CartHeader"
import { useNavigate } from "react-router-dom"
// import axios from "axios"




const Cart = () => {
    const {cart, loginUser, setCart, allProducts, loding} = useContext(ThemeContext);
    // const [cartData, setCartData] = useState([]);
    // const [loding, setLoding] = useState(true);
    const navigate = useNavigate();

    // useEffect(()=>{
    //     const controller = new AbortController();
    //     const fetchData = async()=>{
    //         try{
    //           setLoding(true);
    //             const response = await axios.get(`https://dummyjson.com/products?limit=0`, { signal: controller.signal });
    //             setCartData(response.data.products);
    //         }
    //         catch(error){
    //             console.log(error.message);
    //         }
    //         finally{
    //           setLoding(false);
    //         }
    //     }
    //         fetchData();
    //     return () => controller.abort();
    // },[]);

    const cartItem =cart
    .map(id=>
        allProducts.find(item=>String(item.id) === String(id) )
    )
    .filter(Boolean);
    const itemsPrice = cartItem.reduce((total, item) => total + item.price, 0);
  
    const deliveryFee = cart.length != 0 ? (itemsPrice <= 399 ? 99 : 0 ) : (0) ;
    const totalAmount = itemsPrice + deliveryFee;
    const buyNowHandler =()=>{
        if (!loginUser){
            const result = confirm("Please login first. Do you want to login?");
            if(result){
            navigate("/LoginSignUp");
            }
        }else if(cart.length == 0){
            alert("Please add some item in your cart");
        }else{
            const result = prompt("Enter your Address");
            if(result){
                alert("Your oredr Successfully Placed");
                localStorage.removeItem('cartId');
                setCart(JSON.parse(localStorage.getItem('cartId')) || []);
            }
        }
    }

    const removeAllHandler = () =>{
        localStorage.removeItem('cartId');
        setCart(JSON.parse(localStorage.getItem('cartId')) || []);

    }
    


  return (
    <>
        <CartHeader />
        <br />
        <h1 className="cart-title">Hello</h1>
        <h3 className="cart-title">Your Total Items is {cart.length}.</h3>
        <br /><hr />
        {!loding ? (
            <>
                <div className="cartContainer  ">
                    {cart.length > 0 ? (
                        <div className=".cartItemContainer">
                            {cartItem.map((item)=>(<CartProduct key={item.id} id={item.id} image={item.images} brandName={item.brand} title={item.title} price={item.price} />))}     
                        </div>
                    ):(
                        <h1 className="cart-title">No Items in your cart</h1>
                    )}
                    
                    <div className="cartPriceContainer">
                        <div className="cart-summary">
                            <h1>cart summary</h1>
                            <div className="CartPriceList">
                                <div className="cart-items-price"> 
                                    <h4>Price:</h4>
                                    <h4 className="last-pad">Delivery:</h4>
                                    <h4>Total :</h4>
                                </div>
                                <div  className="total-cost">
                                    <h4>{Math.round(itemsPrice)}</h4>
                                    <h4 className="last-pad">{deliveryFee}</h4>
                                    <hr />
                                    <h4> ₹{Math.round(totalAmount)}</h4>
                                    <hr />
                                </div>
                            </div>
                                <button className="buy-now-cart" onClick={buyNowHandler}>buy now</button>
                                <button className="remove-all-cart" onClick={removeAllHandler}>Remove All</button>
                        </div>
                    </div>
                </div>
            
            </>
        ):(
            <>
                <div>Loding ....</div>
            </>
        )}
        
        <Footer />

    </>
  )
}

export default Cart
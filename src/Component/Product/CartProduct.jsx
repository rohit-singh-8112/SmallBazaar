import { Link } from "react-router-dom"
import { useContext } from "react"
import ThemeContext from "../../store/ThemeContext"


const CartProduct = ({image, brandName, title, price, id }) => {
    const {removeCartHandler} = useContext(ThemeContext);
    const removeHandler = (id) =>{
       removeCartHandler(id);
    }

  return (
    <>
        <div className="remove-cart-container" >   
            <div className="imageContainer">
                <img className="cartImage" src={image} alt={title} />
            </div>
            <div className="cartDetails moreDetailsContainer">
                <h3>{brandName}</h3>
                <h1>{title}</h1>
                <h4>₹{price}</h4>
                <Link to={`/ProductDetails/${id}`}><button className="moreDetails cartMore "> More Details </button></Link>
            </div>
            <div className="remove-from-cart" onClick={()=>removeHandler(id)}> X </div>
        </div>
    </>
  )
}

export default CartProduct
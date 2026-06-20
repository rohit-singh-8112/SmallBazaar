import { Link } from "react-router-dom"
import { useContext } from "react"
import ThemeContext from "../../store/ThemeContext"


const CartProduct = ({image, brandName, title, price, id }) => {
    const {removeCartHandler, qtyItem, setQtyItem} = useContext(ThemeContext);
    const removeHandler = (id) =>{
       removeCartHandler(id);
    }
    const currentId = qtyItem.find(item=> String(item.id) === String(id));
    const increase =(id)=>{
        setQtyItem((itemPrevous)=>
            itemPrevous.map((item)=> String(item.id) === String(id) ? {...item, qty: item.qty+1} : item)
        )
    }
    const decrease =(id)=>{
        setQtyItem((itemPrevious)=>
            itemPrevious.map((item)=>String(item.id)===String(id) ? {...item, qty: (item.qty>1 ? item.qty-1:1)}:item )
        )
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
                <div className="quentityContainer">
                    <button onClick={()=>decrease(id)}>-</button>
                    <p>{currentId ? currentId.qty : 1 }</p>
                    <button onClick={()=>increase(id)}>+</button>
                </div>
            </div>
            <div className="remove-from-cart" onClick={()=>removeHandler(id)}> X </div>
        </div>
    </>
  )
}

export default CartProduct
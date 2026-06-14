
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import { Link } from "react-router-dom";

const ProductCard = ({image, rating, brand, product,price, id}) => {
  const {addCartHandler} = useContext(ThemeContext)
  const addToCart=()=>{
    addCartHandler(id);
  };
    
  return (
    <>
      <div className="container" >
        <div className="itemContainer" >
          {/* <div className="imageContainer" > */}
            <img className="image"  src={image} alt={product} />
          {/* </div> */}
          <div className="detailsContainer" >
            <p className="rating" >✵✵{rating}</p>
            <h3>{brand}</h3>
            <h2>{product}</h2>
            {/* <p className="discripction">{discripction}</p> */}
            <span>₹{price}</span> 
          </div>
        </div>
        <div className="buttonContainer" >
        <button className="moreDetails"  > <Link to={`/ProductDetails/${id}`}>More Details</Link> </button>
        <button className="addToCart" onClick={addToCart} >Add to Cart</button>
        </div>
      </div>
    
    </>
  )
}

export default ProductCard
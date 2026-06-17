import { useParams } from "react-router-dom"
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import ProductCard from "../Product/ProductCard";
import { useNavigate } from "react-router-dom";



const ProductDetails = () => {
    const {id} = useParams();
    const { allProducts, addCartHandler, loginUser } = useContext(ThemeContext);
    const navigate = useNavigate();
    const details = allProducts.find(item => String(item.id) === String(id));

    if (!details) {
        return (
            <>
                <Header />
                <div>loading ...</div>
                <Footer />
            </>
        );
    }
    const addToCart=()=>{
    addCartHandler(id);
  };

  const similarProducts = allProducts.filter( 
    item =>
        item.category === details?.category &&
        item.id !== details?.id
  );
    const buyNowHandler =()=>{
        if (!loginUser){
            const result = confirm("Please login first. Do you want to login?");
            if(result){
            navigate("/LoginSignUp");
            }
        }else{
            const result = prompt("Enter your Address");
            if(result){
                alert("Your oredr Successfully Placed");
            }
        }
    }

  


  return (
    <>
        <Header />
        {/* <div>ProductDetails {id}</div> */}
        <div className="moreProductsContainer">
            <div >
                <img className="detailsImage" src={details.images} alt={details.title} />
            </div>
            <div className="moreDetailsContainer">
                <span className="rating">✵✵{details.rating}</span>
                <h3>{details.brand}</h3>
                <h1>{details.title}</h1>
                <h2>₹ {details.price}</h2>
                <p>Discription: {details.description}</p>
                <h4>{details.warrantyInformation}</h4>
                
                <div className="buttonContainer" >
                    <button className="addToCart" onClick={addToCart} >Add to Cart</button>
                    <button className="moreDetails" onClick={buyNowHandler} >Buy now</button>
                </div>
            </div>
        </div>
        
            <br /><hr /> <br />
            <h1 className="similar">Similar Products</h1>
            <br /><hr />
        
        
        <div className="productContainer">
                {similarProducts.map((item)=>(<ProductCard key={item.id} id={item.id} image={item.images}  rating={item.rating} brand={item.brand} product={item.title} price={item.price}  />))}
            </div>

        <Footer />
    </>
  )
}

export default ProductDetails
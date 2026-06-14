import { useParams } from "react-router-dom"
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import ProductCard from "../Product/ProductCard";



const ProductDetails = () => {
    const {id} = useParams();
    const { products, addCartHandler } = useContext(ThemeContext);

    const details = products.find(item => String(item.id) === String(id));

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

  const similarProducts = products.filter( 
    item =>
        item.category === details?.category &&
        item.id !== details?.id
  );

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
                    <button className="moreDetails" >Buy now</button>
                </div>
            </div>
        </div>
        
            <hr /> <br />
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
// import { Link } from "react-router-dom"
import Header from "../layout/Header"
import ProductCard from "../Product/ProductCard"

import { useState, useContext } from "react";
import Footer from "../layout/Footer";
import ThemeContext from "../../store/ThemeContext";

const Home = () => {
    const {products, loding} = useContext(ThemeContext);
    const [currentPage, setCurrentPage] = useState(1);


    const productsPerPage = 8;

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = products.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const pageButton = [];
    for(let i=0; i<totalPages; i++){
        pageButton.push(
            <button key={i+1} onClick={()=>setCurrentPage(i+1)} className={currentPage === i + 1 ? "active" : ""} >{i+1}</button>

        ) 
       
    };

  return (
  
  
  <>
    <Header />
    {loding ? (
             <span>Loading...</span>       
    ):(<>
            <div className="productContainer">
                {currentProducts.map((item)=>(<ProductCard key={item.id} id={item.id} image={item.images}  rating={item.rating} brand={item.brand} product={item.title} price={item.price}  />))}
            </div>
            <div className="pagination">
                <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage === 1} >Prev</button>
                {pageButton}
                
                <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage === totalPages } >Next</button>
            </div>
        </>
    )}
    <Footer />


   
</>
  )
}

export default Home
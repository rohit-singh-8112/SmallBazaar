import Footer from "../layout/Footer"
import Header from "../layout/Header"
import ProductCard from "../Product/ProductCard"
import { useContext, useState } from "react"
import ThemeContext from "../../store/ThemeContext"




const Search = () => {
  const {filteredProducts, category} = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  let currentProducts = [];
  let totalPages = 0;
  let pageButton = [];
  
  const categoryFilteredProducts = filteredProducts.filter((product)=>
    category === "" ? true : product.category === category 
  );

  if(filteredProducts.length > 0){
    const productsPerPage = 8;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    currentProducts = categoryFilteredProducts.slice(firstIndex, lastIndex);
    totalPages = Math.ceil(categoryFilteredProducts.length / productsPerPage);
    
      for(let i=0; i<totalPages; i++){
          pageButton.push(
              <button key={i+1} onClick={()=>setCurrentPage(i+1)} className={currentPage === i + 1 ? "active" : ""} >{i+1}</button>
          ) 
      };
  }
  

  return (
    <>
      <Header />
        <h1 className="search-result">Search result</h1>
        <p className="items-found">Items Found:{categoryFilteredProducts.length} </p>
        <hr />
        {filteredProducts.length > 0 ?(
          <>
            <div className="productContainer">
              {currentProducts.map((item)=>(<ProductCard key={item.id} id={item.id} image={item.images}  rating={item.rating} brand={item.brand} product={item.title} price={item.price}  />))}
            </div>
            <div className="pagination">
              <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage === 1} >Prev</button>
                {pageButton}    
              <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage === totalPages } >Next</button>
            </div>
        </>
        ):(
          <div>
            product not found
          </div>
        )}
        

      <Footer />
    </>
  )
}

export default Search
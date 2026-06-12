// import { Link } from "react-router-dom"
import Header from "../layout/Header"
import ProductCard from "../Product/ProductCard"
import axios from 'axios';
import { useEffect, useState } from "react";
import Footer from "../layout/Footer";

const Home = () => {

    const [data, setData] = useState([]);
    const [loding, setloding] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

 

useEffect(()=>{
    const controller = new AbortController();
    const fetchData = async() =>{
        try{
            setloding(true);
            const responce =await axios.get('https://dummyjson.com/products',{
                signal:controller.signal
            })
            setData(responce.data.products)

        }
        catch(error){
                console.log(error.massage);
        }
        finally{
            setloding(false);
        }
    };
    fetchData();
},[]);

    const productsPerPage = 8;

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = data.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(data.length / productsPerPage);

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
                
                <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage === totalPages} >Next</button>
            </div>
        </>
    )}
    <Footer />


   
</>
  )
}

export default Home
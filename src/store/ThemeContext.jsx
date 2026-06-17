import {createContext, useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const ThemeContext = createContext ();

export const ThemeProvider = ({children}) => {
    const [cart, setCart] = useState(()=>JSON.parse(localStorage.getItem('cartId')) || []);
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loding, setloding] = useState(true);
    const loginUser = JSON.parse(localStorage.getItem('loginUser') || "null");
    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("");


    useEffect(()=>{
       localStorage.setItem('cartId',JSON.stringify(cart));
    },[cart]);
   
    const addCartHandler=(id)=>{
       if(!loginUser){
        const result = confirm("Please login first. Do you want to login?");
        if(result){
          navigate("/LoginSignUp");
        }
       }else{
          setCart((cart) =>[...cart, id]);
       } 
    }


    const removeCartHandler=(id)=>{
      if(!loginUser){
        const result = confirm("Please login first. Do you want to login?");
        if(result){
          navigate("/LoginSignUp");
        }
       }else{
          const remainingItems = cart.filter(cartid=> cartid !== id);
          setCart(remainingItems);
       } 
    }
    
    useEffect(()=>{
        const controller = new AbortController();
        const fetchData = async()=>{
            try{
              setloding(true);
                const response = await axios.get(`https://dummyjson.com/products?limit=40`, { signal: controller.signal });
                setProducts(response.data.products);
            }
            catch(error){
                console.log(error.message);
            }
            finally{
              setloding(false);
            }
        }
            fetchData();
        return () => controller.abort();
    },[]);

    useEffect(()=>{
      const controller = new AbortController;
      const fetch = async() =>{
        try{
          setloding(true);
            const res = await axios.get('https://dummyjson.com/products?limit=0', {signal:controller.signal});
            const data = res.data.products;
            setAllProducts(data);
          }catch(error){
            console.log(error.massage);
          }
          finally{
            setloding(false);
          }
      }
      fetch();
      return () => controller.abort();

    },[])

    
  return (
    <ThemeContext.Provider value={{addCartHandler, cart, products, loding, removeCartHandler, loginUser, setCart, filteredProducts, setFilteredProducts, allProducts, category, setCategory}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
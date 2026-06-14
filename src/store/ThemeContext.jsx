import {createContext, useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const ThemeContext = createContext ();

export const ThemeProvider = ({children}) => {
    const [cart, setCart] = useState(()=>JSON.parse(localStorage.getItem('cartId')) || []);
    const [products, setProducts] = useState([]);
    const [loding, setloding] = useState(true);
    const loginUser = JSON.parse(localStorage.getItem('loginUser') || "null");
    const navigate = useNavigate();


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
    
    useEffect(()=>{
        const controller = new AbortController();
        const fetchData = async()=>{
            try{
              setloding(true);
                const response = await axios.get(`https://dummyjson.com/products/`, { signal: controller.signal });
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

    
  return (
    <ThemeContext.Provider value={{addCartHandler, cart, products, loding}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
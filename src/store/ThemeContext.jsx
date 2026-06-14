import {createContext, useState, useEffect} from 'react'
import axios from "axios";



const ThemeContext = createContext ();



export const ThemeProvider = ({children}) => {
    const [cart, setCart] = useState(()=>JSON.parse(localStorage.getItem('cartId')) || []);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
       localStorage.setItem('cartId',JSON.stringify(cart));
    },[cart]);

    const addCartHandler=(id)=>{
        setCart((cart) =>[...cart, id]);
    }
    
    useEffect(()=>{
        const controller = new AbortController();
        const fetchData = async()=>{
            try{
                const response = await axios.get(`https://dummyjson.com/products/`, { signal: controller.signal });
                setProducts(response.data.products);
            }
            catch(error){
                console.log(error.message);
            }
        }
       
            fetchData();
    
        return () => controller.abort();
    },[]);
    
  return (
    <ThemeContext.Provider value={{addCartHandler, cart, products}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
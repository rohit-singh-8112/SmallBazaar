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
    const [showPopup, setShowPopup] = useState(false);
    const [qtyItem, setQtyItem] = useState(()=> JSON.parse(localStorage.getItem('qtyItem')) || []);
    // const [itemQuentity, setItemQuentity] = useState((1));


    useEffect(()=>{
       localStorage.setItem('cartId',JSON.stringify(cart));
    },[cart]);

    useEffect(() => {
      localStorage.setItem("qtyItem", JSON.stringify(qtyItem));
    }, [qtyItem]);
   
    const addCartHandler = (id, itemQitemQuentity) => {
       if(!loginUser){
        const result = confirm("Please login first. Do you want to login?");
        if(result){
          navigate("/LoginSignUp");
        }
       }else if(!cart.includes(id)){
          setCart((cart) =>[...cart, id]);
          setShowPopup(true);
          clearTimeout();
          setTimeout(()=>{
            setShowPopup(false)
          },200)
       }
      setQtyItem((itemPrev)=>{
        const existItem = itemPrev.find((item) => String(item.id) === String(id));
        if(existItem){

          setShowPopup(true);
          clearTimeout();
          setTimeout(()=>{
            setShowPopup(false)
          },200)

          return itemPrev.map((item)=>
            String(item.id) === String(id) 
            ?{...item, qty:item.qty + itemQitemQuentity}: item
          );
          
        }else{
          return[...itemPrev, {id, qty: itemQitemQuentity}];
        }
        
      })
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
          setQtyItem((itemPrevious)=>
            itemPrevious.filter(item=> String(item.id) !== String(id)))
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
    <ThemeContext.Provider value={{addCartHandler, cart, products, loding, removeCartHandler, loginUser, setCart, filteredProducts, setFilteredProducts, allProducts, category, setCategory, showPopup, qtyItem, setQtyItem}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
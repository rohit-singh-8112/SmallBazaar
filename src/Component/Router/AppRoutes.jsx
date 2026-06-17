import{Routes, Route} from 'react-router-dom'
import Home from '../page/Home'
import LoginSignUp from '../page/LoginSignUp'
import ProductDetails from '../page/ProductDetails'
import Cart from '../page/Cart'
import About from '../page/About'
import Contact from '../page/Contact'
import Search from '../page/Search'
import Shipping from '../page/Shipping'
import Return from '../page/Return'
import OrderTrack from '../page/OrderTrack'
import Support from '../page/Support'
import FAQ from '../page/FAQ'
import Blog from '../page/Blog'





const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignUp" element={<LoginSignUp />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Shipping" element={< Shipping />} />
        <Route path="/Return" element={< Return />} />
        <Route path="/OrderTrack" element={< OrderTrack />} />
        <Route path="/Support" element={< Support />} />
        <Route path="/FAQ" element={< FAQ />} />
        <Route path="/Blog" element={< Blog />} />      
    </Routes>
  )
}

export default AppRoutes
import{Routes, Route} from 'react-router-dom'
import Home from '../page/Home'
import LoginSignUp from '../page/LoginSignUp'
import ProductDetails from '../page/ProductDetails'



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignUp" element={<LoginSignUp />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        
    </Routes>
  )
}

export default AppRoutes
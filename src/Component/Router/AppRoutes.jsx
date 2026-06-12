import{Routes, Route} from 'react-router-dom'
import Home from '../page/Home'
import LoginSignUp from '../page/LoginSignUp'



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignUp" element={<LoginSignUp />} />
        
    </Routes>
  )
}

export default AppRoutes
import { useContext } from "react"
import ThemeContext from '../../store/ThemeContext'
import Footer from '../layout/Footer'



const Cart = () => {
    const {cart} = useContext(ThemeContext);
  return (
    <>
        <div>
            {cart}
        </div>
        <Footer />

    </>
  )
}

export default Cart
import { useShoppingCart } from "../../../context/ShoppingCartContext"
import CartItem from "./CartItem"

 

const CarItems = () => {

    const {cartItems} = useShoppingCart()
  return (
    <>
    {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
    ))}
      
    </>
  )
}

export default CarItems

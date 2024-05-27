import CartItem from "./CartItem"
import { useAppSelector } from "../../../redux/hooks";

 

const CarItems = () => {

    // const {cartItems} = useShoppingCart()
    const {cartItems} = useAppSelector(state=>state.cartSlice);
  return (
    <>
    {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
    ))}
      
    </>
  )
}

export default CarItems


import formatNumber from "../../../utils/Format"
import { useAppSelector } from "../../../redux/hooks";


const CartTotalSection = () => {
  // const { dataItems, cartItems} = useShoppingCart();
  const {dataItems,cartItems} = useAppSelector(state=>state.cartSlice);

  const totalAmount = cartItems.reduce((total, item) => {
    const foundItem = dataItems.find((myItem) => myItem.id === item.id);
    return total + (foundItem?.price || 0) * item.quantity;
  }, 0);
    
  return (
    <div className="d-flex justify-content-between fw-bold">
          <h4>Total:</h4>
          <h4>{formatNumber(totalAmount)}</h4>
    </div>
  )
}

export default CartTotalSection

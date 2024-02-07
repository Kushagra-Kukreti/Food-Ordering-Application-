import { useShoppingCart } from "../../context/ShoppingCartContext";
import "../css/ButtonGroup.css"
type ButtonGroupProp ={
    id:number
}
const ButtonGroup = ({id}: ButtonGroupProp) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart();

    const quantity = getItemQuantity(id);
  return (
    <>
      {quantity === 0 ? (
          <div onClick={(e) => {e.stopPropagation(); increaseCartQuantity(id);}} className="cart-btn btn btn-danger w-100">+ Add to Cart</div>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-center m-2 buttongroup-container">
              <div className="add-btn btn btn-sm btn-danger" onClick={(e) => {e.stopPropagation(); increaseCartQuantity(id);}}>+</div>
              <div className="d-flex align-items-baseline item-quantity ">
                <span><h3>{quantity}</h3></span> in Cart
              </div>
              <div className="btn btn-sm btn-danger subt-btn" onClick={(e) => {e.stopPropagation(); decreaseCartQuantity(id);}}>-</div>
              <div className="btn btn-sm btn-danger remove-btn" onClick={(e) => {e.stopPropagation(); removeFromCart(id);}}>Remove</div>
            </div>
          </>
        )}
    </>
  )
}

export default ButtonGroup

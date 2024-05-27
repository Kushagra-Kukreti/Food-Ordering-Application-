
import { useEffect, useState } from "react";
import { ButtonGroupProp } from "../../constants";
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "../css/ButtonGroup.css"

const ButtonGroup = ({id}: ButtonGroupProp) => {
    // const {
    //     getItemQuantity,
    //     increaseCartQuantity,
    //     decreaseCartQuantity,
    //     removeFromCart,
    //   } = useShoppingCart();
    const dispatch = useAppDispatch();
    const[quantity,setQuantity] = useState(0)
    const {cartItems} = useAppSelector(state=>state.cartSlice);
 
    useEffect(()=>{
      setQuantity(cartItems.find(item => item.id === id)?.quantity || 0)
      console.log("Quantity is ::::",quantity);
    },[cartItems])
     
  return (
    <>
      {quantity === 0 ? (
          <div onClick={(e) => {e.stopPropagation(); dispatch(increaseCartQuantity(id));}} className="cart-btn btn btn-danger w-100">+ Add to Cart</div>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-center m-0 p-0 buttongroup-container">
              <div className="add-btn btn btn-sm btn-danger m-0" onClick={(e) => {e.stopPropagation(); dispatch(increaseCartQuantity(id));}}>+</div>
              <div className="d-flex align-items-baseline item-quantity ">
                <span><h3>{quantity}</h3></span> in Cart
              </div>
              <div className="btn btn-sm btn-danger subt-btn m-0" onClick={(e) => {e.stopPropagation(); dispatch(decreaseCartQuantity(id));}}>-</div>
              <div className="btn btn-sm btn-danger remove-btn m-0" onClick={(e) => {e.stopPropagation(); dispatch(removeFromCart(id));}}>Remove</div>
            </div>
          </>
        )}
    </>
  )
}

export default ButtonGroup

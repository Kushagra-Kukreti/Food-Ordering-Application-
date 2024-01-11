
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatNumber from '../utils/Format'
import  {data}  from '../data/items'
import { dataProp } from "./CartItem";

const ShoppingCartItem = () => {

    const {isOpen,closeCart,cartItems}= useShoppingCart()

    const totalAmount =  cartItems.reduce((total,item)=>{
       
    const itemInfo  = data.find((i:dataProp)=>i.id === item.id)

    return total+(itemInfo?.price||0)*item.quantity

    }
    ,0)
    
  return (

    <div
      className={`${"offcanvas offcanvas-end"} ${isOpen=== true?"show":""}`}
      tabIndex={-1}
      data-bs-scroll="true"
      id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"

    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample" 
          aria-controls="offcanvasExample"
          onClick={()=>closeCart()}
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body vstack gap-3">
        {cartItems.map(item=> <CartItem id={item.id} quantity = {item.quantity}/>)}
        <div className='d-flex justify-content-between fw-bold'><h4>Total:</h4> <h4>{formatNumber(totalAmount)}</h4></div>
      </div>
    </div>
  );
  };

export default ShoppingCartItem;

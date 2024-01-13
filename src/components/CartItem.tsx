
import { useEffect, useState } from 'react'
import { dataItem, useShoppingCart } from '../context/ShoppingCartContext'
import formatNumber from '../utils/Format'
type cartItemProp = {
    id:number
    quantity:number
}

export type dataProp = {
  id:number,
  name:string,
  price:number,
  imgUrl:string,
  rating:number,
  category:string
}

const CartItem = ({id,quantity}:cartItemProp) => {

    const {removeFromCart} = useShoppingCart()
    const [itemInfo,setItemInfo] = useState<dataItem>();
    const {dataItems} = useShoppingCart()
  
    useEffect (()=>{
         
        const matchedItem = dataItems.find((i:dataItem) => i.id === id);
        setItemInfo(matchedItem)
     
    },[id,dataItems])
   

   if(itemInfo == null)
   return null;
 
  return (
    <div className='hstack gap-2'>
      
      <img src={itemInfo?.imgUrl} style={{height:"4rem",width:"7rem", objectFit:"cover"}}/>
      
      <div className='vstack gap-1'>
      <span>{itemInfo?.name}  <span className='text-muted'>x{quantity}</span></span> 
      <div className='text-muted'>{formatNumber(itemInfo?.price)}</div>
      </div>

      <div>{formatNumber(itemInfo?.price*quantity)}</div>
      <button style={{border:"none", backgroundColor:"transparent" , color:"red"}} onClick={()=>removeFromCart(itemInfo?.id)}>&times;</button>

      
    </div>
  )
}

export default CartItem

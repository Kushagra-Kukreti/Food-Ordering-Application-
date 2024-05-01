
import { useEffect, useState } from 'react';
import { useShoppingCart } from '../../../context/ShoppingCartContext';
import formatNumber from '../../../utils/Format';
import "../css/CartItem.css"
import { CartItemProps, dataItem } from '../../../constants';


const CartItem = ({ id, quantity }:CartItemProps) => {
    
    const { removeFromCart, dataItems } = useShoppingCart();
    const [itemInfo, setItemInfo] = useState<dataItem>();

    useEffect(() => {
        const matchedItem = dataItems.find((i: dataItem) => i.id === id);
        setItemInfo(matchedItem);
    }, [id, dataItems]);

    if (itemInfo == null) return null;

    return (
        <div className='cart-item hstack gap-2'>
            <img src={itemInfo?.imgUrl} alt={itemInfo?.name} className='itemImage'/>
            <div className=' vstack gap-1'>
                <span>
                    {itemInfo?.name} <span className='text-muted'>x{quantity}</span>
                </span>
                <div className='text-muted'>{formatNumber(itemInfo?.price)}</div>
            </div>
            <div>{formatNumber(itemInfo?.price * quantity)}</div>
            <button className='remove-button' onClick={() => removeFromCart(itemInfo?.id)}>
                &times;
            </button>
        </div>
    );
};

export default CartItem;

import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "../../../redux/hooks";
import formatNumber from "../../../utils/Format"
import { useAppSelector } from "../../../redux/hooks";

// import { emptyCart } from "../../../redux/cartSlice";
import { useEffect, useState } from "react";
// import {rzp1} from "../../../utils/"
const CheckoutButton = () => {
  const {dataItems,cartItems} = useAppSelector(state=>state.cartSlice);
    // const {emptyCart} = useShoppingCart()
    const dispatch = useAppDispatch();
    const {logout} =  useAuth0();

    const [amount,setAmount] = useState(0);

    useEffect(()=>{
      const totalAmount = cartItems.reduce((total, item) => {
        const foundItem = dataItems.find((myItem) => myItem.id === item.id);
        return total + (foundItem?.price || 0) * item.quantity;
      }, 0);
      setAmount(totalAmount);
    },[cartItems])
    useEffect(()=>{
      console.log("Amount is::",formatNumber(amount))
    },[amount])
    
      var options = {
        "key": "rzp_test_HDuSp1fJXd51X8", // Enter the Key ID generated from the Dashboard
        "amount": `${amount*70*100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Pizza Shop", //your business name
        "description": "Pizza Shop Transaction",
        "image": "https://example.com/your_logo",
        
        "handler": function (response){
            alert("Payment Done....");
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            "name": "Customer Name", //your customer's name
            "email": "customerEmail@example.com", 
            "contact": "CustomerPhone"  //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert("Payment Fail");    
        alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    
    
    
      const handlePayment = (e)=>{
        rzp1.open();
        e.preventDefault();
      };
    

   
  return (
    <button
          className="btn btn-secondary checkout-btn"
          id="rzp-button1"
          onClick={(e)=>handlePayment(e)}
          // onClick={() => {
          //   logout({ logoutParams: { returnTo: window.location.origin } });
          //   localStorage.removeItem("authentication");
          //   localStorage.removeItem("name");
          //   dispatch(emptyCart());
          // }}
        >
          PAY NOW 
    </button>
     
  )
}

export default CheckoutButton

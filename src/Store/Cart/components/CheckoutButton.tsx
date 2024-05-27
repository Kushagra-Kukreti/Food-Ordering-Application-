import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "../../../redux/hooks";
import { emptyCart } from "../../../redux/cartSlice";

const CheckoutButton = () => {

    // const {emptyCart} = useShoppingCart()
    const dispatch = useAppDispatch();
    const {logout} =  useAuth0()
  return (
    <div
          className="btn btn-secondary checkout-btn"
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
            localStorage.removeItem("authentication");
            localStorage.removeItem("name");
            dispatch(emptyCart());
          }}
        >
          CHECKOUT
    </div>
  )
}

export default CheckoutButton

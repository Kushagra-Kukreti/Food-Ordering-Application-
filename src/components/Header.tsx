
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Header = () => {

   const {openCart,cartQuantity}=useShoppingCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-fluid container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink style={{textDecoration:"none"}} to={"/"}><h2 style={{color:"red",fontWeight:"bold"}}><span style={{color:"black"}}>Food</span>Junction</h2></NavLink>
          </div>
          
         

           {cartQuantity>0?
          <button  onClick={()=>openCart()}  style={{height:"3rem", width:"3rem" ,position:"relative"}}className="btn btn-outline-primary pb-2 pt-1 rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-bag-fill "
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg>
            <div 
            className="bg-danger rounded-circle"
            style={
                {   
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"white",
                    right:"0",
                    bottom:"0",
                    position:"absolute",
                    height:"1.5rem",
                    width:"1.5rem",
                    transform:"translate(19%,34%)",
                }
            }
            >{cartQuantity}</div>
          </button>:""} 
          
        </div>
      </nav>
    </>
  );
};

export default Header;

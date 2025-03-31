// import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const AuthenticationButtons = () => {
    // const { loginWithRedirect, logout} = useAuth0();
    const navigate = useNavigate();
  return (
    <>
    {localStorage.getItem("authentication") ? (
            <button
              className="btn btn-sm btn-danger fw-bold"
              onClick={() => {
                 navigate("/auth/login")
                // logout({ logoutParams: { returnTo: window.location.origin } });
                localStorage.removeItem("authentication");
                localStorage.removeItem("name");
              }}
            >
              Log Out
            </button>
          ) : (
            <button 
            className="btn btn-sm btn-primary fw-bold" 
            // onClick={() => loginWithRedirect()}
            onClick={()=>navigate("/auth/login")}
            >
              Log In
            </button>
    )}
      
    </>
  )
}

export default AuthenticationButtons

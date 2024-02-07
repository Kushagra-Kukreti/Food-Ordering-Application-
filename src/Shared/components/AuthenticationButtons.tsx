import { useAuth0 } from "@auth0/auth0-react";
const AuthenticationButtons = () => {
    const { loginWithRedirect, logout} = useAuth0();
  return (
    <>
    {localStorage.getItem("authentication") ? (
            <button
              className="btn btn-sm btn-danger fw-bold"
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
                localStorage.removeItem("authentication");
                localStorage.removeItem("name");
              }}
            >
              Log Out
            </button>
          ) : (
            <button className="btn btn-sm btn-primary fw-bold" onClick={() => loginWithRedirect()}>
              Log In
            </button>
    )}
      
    </>
  )
}

export default AuthenticationButtons

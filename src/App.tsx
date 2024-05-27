import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Shared/components/Header";
import Home from "./Home/pages/Home";
import Store from "./Store/pages/Store";
// import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Product from "./Product/pages/Product";
import ShoppingCartItem from "./Store/Cart/components/ShoppingCartItem";
import Login from "./Login/pages/Login";
import LoginComponent from "./Login/components/LoginComponent";
import SignUpComponent from "./SignUp/components/SignUpComponent";

function App() {

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
    {(currentPath!== "/auth/login" && currentPath!== "/auth/signup")? <Header />:""}
      <div className="container">
        <Routes>
        <Route path="/auth" element = {<Login/>}>
        <Route path="login" element={<LoginComponent/>} />
        <Route path="signup" element={<SignUpComponent/>} />  
        </Route>
        
        <Route path="/login" element={<Login/>} />
          <Route path="/store" element={<Store />} />
          <Route path="/product" element={<Product />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <ShoppingCartItem />
    </>
  );
}

export default App;

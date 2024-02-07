import { Route, Routes } from "react-router-dom"
import Header from "./Shared/components/Header"
import Home from "./Home/pages/Home"
import Store from "./Store/pages/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Product from "./Product/pages/Product"

function App() {

  return (
    <ShoppingCartProvider>
    <Header/>
    <div className="container">
     <Routes>
      <Route path="/store" element={<Store/>}/>  
      <Route path="/product" element={<Product/>}/>  
      <Route path="/*" element={<Home />}/>
      </Routes>
     
    </div>
    </ShoppingCartProvider>
  )
}

export default App

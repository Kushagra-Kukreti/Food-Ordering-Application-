import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Store from "./pages/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Product from "./pages/Product"

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

import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Product from "./pages/Product"

function App() {

  return (
    <ShoppingCartProvider>
    <Header/>
    <div className="container">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<Store/>}/>  
      <Route path="/product" element={<Product/>}/>  
      </Routes>
    </div>
    </ShoppingCartProvider>
  )
}

export default App

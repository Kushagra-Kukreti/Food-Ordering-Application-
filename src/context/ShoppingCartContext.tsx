
// provider 
//context 
//use krte h uss context ko 

import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import ShoppingCartItem from "../components/ShoppingCartItem"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { fetchData } from "../data/items"
import { filterType } from "../pages/Store"


type ShoppingCartProviderProps={
    children:ReactNode
}

export type dataItem = {
  id:number
  name:string
  price:number
  imgUrl:string
  rating:number 
  category:string 
}

type ShoppingCartProps = {
  cartQuantity:number
  getItemQuantity:(id:number) =>number
  increaseCartQuantity:(id:number)=>void
  decreaseCartQuantity:(id:number)=>void
  removeFromCart:(id:number)=>void
  cartItems:CartItem[]
  dataItems:dataItem[]
  emptyCart:()=>void
  appliedFilters:filterType[]
  setAppliedFilters:React.Dispatch<React.SetStateAction<filterType[]>>
  removeFromSelectedFilters:(title:string)=>void
}

type CartItem = {
  id:number,
  quantity:number
}
const ShoppingCartContext = createContext({} as ShoppingCartProps)

export function useShoppingCart(){
  return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider ({children}:ShoppingCartProviderProps){
  const[cartItems,setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
  const[dataItems,setDataItems] = useState([])
  const [appliedFilters,setAppliedFilters] = useState<filterType[]>([])
  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  } 
  
  function emptyCart(){
    setCartItems([])
  }
  useEffect(()=>{
    fetchData().then((fetchedData) => {
      setDataItems(()=>fetchedData)
     });
     
  },[])
  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  function removeFromSelectedFilters(title:string){
    const newFilters = appliedFilters.filter((filter)=>filter.t !== title); 
    setAppliedFilters(newFilters)
  }

  //total in cart
  const cartQuantity = cartItems.reduce((quantity,item)=> item.quantity+quantity,0)


  return (
    <ShoppingCartContext.Provider value={{

        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        dataItems,
        cartQuantity,
        emptyCart,
        appliedFilters,
        setAppliedFilters,
        removeFromSelectedFilters,

      }}>
        {children}
        <ShoppingCartItem/>
    </ShoppingCartContext.Provider>
  )
}
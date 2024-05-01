

import { createContext, useContext, useEffect, useState } from "react"
import ShoppingCartItem from "../Store/Cart/components/ShoppingCartItem"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { fetchData } from "../data/items"
import { CartItem, dataItem, filterType, ShoppingCartProps, ShoppingCartProviderProps } from "../constants"

const ShoppingCartContext = createContext({} as ShoppingCartProps)

export function useShoppingCart(){
  return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider ({children}:ShoppingCartProviderProps){
  const[cartItems,setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
  const[dataItems,setDataItems] = useLocalStorage<dataItem[]>("dataItems",[])
  const[storeItems,setStoreItems] = useState<dataItem[]>(dataItems)
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
        storeItems,
        setStoreItems

      }}>
        {children}
        <ShoppingCartItem/>
    </ShoppingCartContext.Provider>
  )
}
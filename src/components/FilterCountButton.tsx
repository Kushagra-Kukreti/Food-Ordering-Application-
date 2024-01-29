import { useShoppingCart } from "../context/ShoppingCartContext"


const FilterCountButton = () => {
    const {appliedFilters} = useShoppingCart()
  return (
    <div key={ "Filters"}>
    <div
      style={{
        outline:"none",
        border:"0.15rem solid lightgrey",
        padding:"0.2rem",
        borderRadius:"0.5rem",
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
      }}
    >
     Filters
     {appliedFilters.length>0 &&
     <span style={{borderRadius:"5em",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"red",width:"1.5em",marginLeft:"0.5em"}}>{appliedFilters.length}</span>}
    </div>
  </div>
  )
}

export default FilterCountButton

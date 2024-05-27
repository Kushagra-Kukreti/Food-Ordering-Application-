import { dataItem } from "../../../constants";
import { useAppSelector } from "../../../redux/hooks";
import StoreItem from "./StoreItem";


type StoreItemsProp ={
    search:string
}
const StoreItems = ({search}:StoreItemsProp) => {

    // const { storeItems } = useShoppingCart();
    const { storeItems } = useAppSelector(state=>state.cartSlice);
  return (
    <>
    {storeItems && storeItems
          .filter((i: dataItem) => {
            return search.toLowerCase() === " "
              ? i
              : i.name?.toLowerCase().startsWith(search.toLowerCase());
          })
          .map((item: dataItem, index: number) => (
            <div key={index} className="store-item">
              
                <StoreItem
                  key={index}
                  rating={item.rating}
                  id={item.id}
                  url={item.imgUrl}
                  price={item.price}
                  title={item.name}
                  category={item.category}
                />
              
            </div>
          ))}
      
    </>
  )
}

export default StoreItems

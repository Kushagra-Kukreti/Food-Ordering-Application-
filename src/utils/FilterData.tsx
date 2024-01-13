import { dataItem} from "../context/ShoppingCartContext";
import { filterType } from "../pages/Store";

 export const filterData = (storeItems:dataItem[],appliedFilters:filterType[],dataItems:dataItem[],setStoreItems:React.Dispatch<React.SetStateAction<dataItem[]>>,title:string,val:string)=>{

  let sortedData:dataItem[] = [];
  if (title === "Category") {
     sortedData = dataItems.filter((currItem: dataItem) => val === currItem.category);
   } else if (title === "Price" || title === "Rating") {
     sortedData = sortData(storeItems,dataItems, title, val,appliedFilters);
   }
   setStoreItems(sortedData);
}


 const sortData =
    (storeItems:dataItem[],dataItems: dataItem[], sortBy: string, sortOrder: string,appliedFilters:filterType[]) => {
        
      
      let data:dataItem[] = []

     const isPresent =  appliedFilters.find((currItem)=>currItem.t === "Category")
      
     data = (isPresent)?storeItems:dataItems
       

      return data.slice().sort((a: dataItem, b: dataItem) => {
        if (sortBy === "Price") {
          return sortOrder === "High to Low" ? b.price - a.price : a.price - b.price;
        } else if (sortBy === "Rating") {
          return sortOrder === "High to Low" ? b.rating - a.rating : a.rating - b.rating;
        }
        return 0;
      });


    }
  
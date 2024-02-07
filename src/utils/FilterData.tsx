import { dataItem} from "../context/ShoppingCartContext";
import { filterType } from "../Store/pages/Store";

 export const filterData = (appliedFilters:filterType[],dataItems:dataItem[],storeItems:dataItem[])=>{ 

   
  if(appliedFilters.length>0){
    console.log("Applied filters are:",appliedFilters)
   const newData =  appliedFilters.map((filter)=>{
      const temp = ()=>{
        let sortedData;
        if (filter.t === "Category") {
          sortedData = dataItems.filter((currItem: dataItem) => filter.v === currItem.category);
          console.log(sortedData)
        } else if (filter.t === "Price" || filter.t === "Rating") {
          console.log(storeItems)
          sortedData = sortData(storeItems, filter.t, filter.v);
        }
        return sortedData;
          
      }

      return temp();
    })

    return newData.flat() as dataItem[];
    
  }
  
    return dataItems;

}


 const sortData =
    (storeItems:dataItem[], sortBy: string, sortOrder: string) => {
        
      
      const data = storeItems

      return data.slice().sort((a: dataItem, b: dataItem) => {
        
        if (sortBy === "Price") {
          return sortOrder === "High to Low" ? b.price - a.price : a.price - b.price;
        } else if (sortBy === "Rating") {
          return sortOrder === "High to Low" ? b.rating - a.rating : a.rating - b.rating;
        }
        return 0;
      });


    }
  
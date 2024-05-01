import axios from "axios";


type Product ={
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  // Add other properties if they exist in the response data
}
const items = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log("Response is::",response.data)
  return response.data; 
};

export const fetchData = async () => {
  const data = await items();
  console.log("Data is:::",data)
  const alteredData = data.map(((currItem:Product)=>{
      
    return {
      id:currItem.id,
      name:currItem.title,
      price:currItem.price,
      imgUrl:currItem.image,
      rating:currItem.rating.rate,
      category:currItem.category,
      ratingCount:currItem.rating.count
    }
  }))
  return alteredData;
};
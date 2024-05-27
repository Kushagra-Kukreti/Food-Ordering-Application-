import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterData } from "../../utils/FilterData";
import "../Store/css/Store.css";
import StoreHeader from "../Store/components/StoreHeader";
import StoreItems from "../Store/components/StoreItems";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dataItem } from "../../constants";
import { setDataItems, setStoreItems } from "../../redux/cartSlice";
import { fetchData } from "../../data/items";



const Store: React.FC = () => {
  const [search, setSearch] = useState("");
  // const { dataItems, appliedFilters, setStoreItems, storeItems } = useShoppingCart();
  const { dataItems, appliedFilters, storeItems } =  useAppSelector(state=>state.cartSlice);
  const [categories, setCategories] = useState<string[]>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const auth = useAppSelector((state)=>state.authSlice.auth)


  useEffect(()=>{
    fetchData().then((fetchedData) => {
      dispatch(setDataItems(fetchedData))
     });
     
  },[])

  useEffect(() => {
    const newData = filterData(appliedFilters, dataItems, storeItems);
    dispatch(setStoreItems(newData));
  }, [appliedFilters]);

  useEffect(() => {
    console.log("Data Items initialised")
    dispatch(setStoreItems(dataItems));
    console.log("Store items from store::",storeItems);
    console.log("Data items::",dataItems);
    const categoriesSet = new Set<string>();
    dataItems.forEach((item: dataItem) => {
      categoriesSet.add(item.category);
    });
    console.log("Categories List initialised")
    setCategories(Array.from(categoriesSet));

    return () => {
      console.log("Store unmounted")
      dispatch(setStoreItems([])); 
      setCategories([]);
    };
  }, [dataItems]);

  if (!auth) {
    navigate("/");
  }

  return (
    <>
      <StoreHeader setSearch ={setSearch} categories ={categories ||[]}/>
      <div className="store-items">
         <StoreItems search ={search}/>
      </div>
    </>
  );
};

export default Store;

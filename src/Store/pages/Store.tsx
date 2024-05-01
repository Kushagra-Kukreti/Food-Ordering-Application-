import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { filterData } from "../../utils/FilterData";
import "../Store/css/Store.css";
import StoreHeader from "../Store/components/StoreHeader";
import StoreItems from "../Store/components/StoreItems";
import { useAppSelector } from "../../redux/hooks";
import { dataItem } from "../../constants";



const Store: React.FC = () => {
  const [search, setSearch] = useState("");
  const { dataItems, appliedFilters, setStoreItems, storeItems } = useShoppingCart();
  const [categories, setCategories] = useState<string[]>();
  const navigate = useNavigate();

  const auth = useAppSelector((state)=>state.authSlice.auth)

  useEffect(() => {
    const newData = filterData(appliedFilters, dataItems, storeItems);
    setStoreItems(newData);
  }, [appliedFilters]);

  useEffect(() => {
    console.log("Data Items initialised")
    setStoreItems(dataItems);
    const categoriesSet = new Set<string>();
    dataItems.forEach((item: dataItem) => {
      categoriesSet.add(item.category);
    });
    console.log("Categories List initialised")
    setCategories(Array.from(categoriesSet));

    return () => {
      console.log("Store unmounted")
      setStoreItems([]);
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

import Skeleton from "@mui/material/Skeleton";
import { Suspense, useEffect } from "react";
import Category from "../components/Category";
import "../css/Home.css";
import {  useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const Home= () => {
  const categories = [
    {
      type: "Dining",
      desc: "Dining is a multisensory experience that transcends mere sustenance",
      imgUrl: "/imgs/dining.jpg",
    },
    {
      type: "Delivery",
      desc: "Dining is a multisensory experience that transcends mere sustenance",
      imgUrl: "/imgs/delivery.jpg",
    },
    {
      type: "NightLife",
      desc: "Dining is a multisensory experience that transcends mere sustenance",
      imgUrl: "/imgs/nightlife.jpg",
    },
  ];


  const navigate = useNavigate();

 const auth =useAppSelector((state)=>state.authSlice.auth);

useEffect(()=>{
  if (!auth) {
    navigate("/auth/login");
    
   
   // <Suspense fallback={<Skeleton className="home-skeleton" variant="rectangular" animation="wave" />}>
   //   <BeforeAuthentication />
   // </Suspense>
 
}

},[])
  

  return (
    <div className="home-container">
      {categories.map((item, index) => (
        <Suspense fallback={<Skeleton className="category-skeleton" variant="rectangular" animation="wave" />}>
          <Category item={item} index={index} />
        </Suspense>
      ))}
    </div>
  );
};

export default Home;

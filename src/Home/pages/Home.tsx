import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from "@mui/material/Skeleton";
import React, { Suspense } from "react";
import BeforeAuthentication from "../components/BeforeAuthentication";
import Category from "../components/Category";
import "../css/Home.css";
import { setAuthStatus } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Home: React.FC = () => {
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

  const { isAuthenticated } = useAuth0();
 const dispatch =  useAppDispatch();
 const auth =useAppSelector((state)=>state.authSlice.auth);

  if (isAuthenticated) {
    dispatch(setAuthStatus(isAuthenticated)); 
  }

  if (!auth) {
    return (
      <Suspense fallback={<Skeleton className="home-skeleton" variant="rectangular" animation="wave" />}>
        <BeforeAuthentication />
      </Suspense>
    );
  }

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

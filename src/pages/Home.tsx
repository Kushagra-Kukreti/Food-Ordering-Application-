import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const categories = [
    {
      type:"Dining",
      desc:"Dining is a multisensory experience that transcends mere sustenance",
      imgUrl:"/imgs/dining.jpg"
    },
    {
      type:"Delivery",
      desc:"Dining is a multisensory experience that transcends mere sustenance",
      imgUrl:"/imgs/delivery.jpg"
    },
    {
      type:"NightLife",
      desc:"Dining is a multisensory experience that transcends mere sustenance",
      imgUrl:"/imgs/nightlife.jpg"
    }
  ]




   const navigate =  useNavigate();

   const { isAuthenticated} = useAuth0();

   if(!isAuthenticated){
      return <img style={{marginTop:"1.5rem",height:"80vh",width:"100%",objectFit:"cover"}} src="/imgs/landing-page.jpg"/>
   }
  return (
    <div style={{
      display:"flex",
      gap:"3rem",
      justifyContent:"center",alignItems:"center",
      marginTop:"5%",

    }}>
    {categories.map(item=>
    <button onClick={()=> navigate("/store")} className="card" style={{ 
      width:"20rem",
      border:"0.1rem solid orange"
    }}>
    <img  style={{
      height:"10rem",
      objectFit:"cover"
    }} src={item.imgUrl} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">{item.type}</h5>
      <p className="card-text">
        {item.desc}
      </p>
    </div>
  </button>
      )}
      
    </div>
  );
};

export default Home;

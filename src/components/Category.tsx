
import { useNavigate } from "react-router-dom";
 
type ItemType = {
    type:string 
    desc:string 
    imgUrl:string
}

type CategoryProp = {
    item:ItemType
    index:number
}
const Category = ({item,index}:CategoryProp) => {
    const navigate = useNavigate();
  return (
    <button
         key={index}
          onClick={() => navigate("/store")}
          className="card"
          style={{
            width: "20rem",
            border: "0.1rem solid orange",
          }}
        >
          <img
            style={{
              height: "10rem",
              objectFit: "cover",
            }}
            src={item.imgUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.type}</h5>
            <p className="card-text">{item.desc}</p>
          </div>
        </button>
  )
}

export default Category

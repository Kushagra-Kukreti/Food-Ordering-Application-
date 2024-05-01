import formatNumber from "../../../utils/Format"
import RatingBadge from "./RatingBadge"


type DetailsSectionProp ={
    price: number;
    title: string;
    rating: number;
}
const DetailsSection = ({price,rating,title}:DetailsSectionProp) => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-baseline m-2">
          <h4 className="card-text">
            {title.slice(0,15)}{" "}
           <RatingBadge rating ={rating}/>
          </h4>
          <h5 className="card-text text-muted">{formatNumber(price)}</h5>
        </div>
  )
}

export default DetailsSection

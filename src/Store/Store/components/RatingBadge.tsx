import StarIcon from "./StarIcon"


type RatingBadgeProp ={
    rating:number
}
const RatingBadge = ({rating}:RatingBadgeProp) => {
  return (
    <span className="badge badge-primary rating-badge">
    {rating}
    <StarIcon/>
  </span>
  )
}

export default RatingBadge

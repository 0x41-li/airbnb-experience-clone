import star from "../assets/icons/star.png";

export default function Card(props) {
  let badge;

  if (props.openSpots === 0) {
    badge = "SOLD OUT";
  } else if (props.location === "Online") {
    badge = "ONLINE";
  }

  return (
    <div className="card">
      <div className="card__cover-img">
        <img src={"/assets/images/" + props.coverImg} alt="" />
        {badge && <span className="card__badge">{badge}</span>}
      </div>
      <div className="card__exp-rating-info">
        <img src={star} alt="" />
        <span className="card__rating">{props.stats.rating}</span>
        <span className="card__nbr-of-ppl-rated gray">
          ({props.stats.reviewCount})
        </span>
        <span className="card__circle-icon"></span>
        <span className="card__location gray">{props.location}</span>
      </div>
      <div className="card__info">
        <p className="card__title">{props.title}</p>
        <p className="card__price">
          <span className="bold">From ${props.price} </span>/ person
        </p>
      </div>
    </div>
  );
}

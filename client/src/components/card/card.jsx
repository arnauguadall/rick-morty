/* eslint-disable */
import "./card.css";
import { ReactComponent as Star } from "../../assets/svg/star.svg";

const Card = ({ character }) => {
  const { name, status, image, species, location } = character;

  return (
    <div className="card__direction__row">
      <div className="card__img__width">
        <img src={image} alt={`${name} character`} />
      </div>

      <div className="card__info__column">
        <div className="card__svg__fav">
          <Star style={{ width: "44px", height: "44px" }} />
        </div>
        <h2>{name}</h2>

        <div className="card__status__align">
          <span className={`card__status__${status}`} /> {status} - {species}
        </div>
        <div className="card__status__align">Location: {location.name}</div>

        <div>See detail</div>
      </div>
    </div>
  );
};

export default Card;

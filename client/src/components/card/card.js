import { useNavigate } from "react-router-dom";
import "./card.css";
import { ReactComponent as Star } from "../../assets/svg/star.svg";

/**
 * Card component
 * It renders the card with the character info and when it is clicked it redirects to the character detail page
 * It also shows if the user has click this character before as favorite
 * @param {*} character 
 * @returns 
 */
const Card = ({ character }) => {
  const navigate = useNavigate();
  const { id, name, image, fav } = character;

  const handleOpenDetail = () => {
    return navigate(`/character/${id}`);
  };

  const favStyle = fav ? "#D5D803" : "#FFFFFF";

  return (
    <div className="card__direction__row" onClick={handleOpenDetail}>
      <div className="card__img__width">
        <img src={image} alt={`${name} character`} />
      </div>

      <div className="card__info__column">
        <div className="card__svg__fav">
          <Star style={{ width: "44px", height: "44px", fill: favStyle }} />
        </div>
        <h2>{name}</h2>
        <div className="card__status__align">Click to see more details!</div>
      </div>
    </div>
  );
};

export default Card;

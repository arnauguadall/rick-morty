import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Star } from "../../assets/svg/star.svg";

import "./characterDetail.css";

const CharacterDetail = () => {
  let { id } = useParams();
  const [character, setCharacter] = useState({});

  const { name, status, image, species, location, episode } = character;

  useEffect(() => {
    if (id) {
      fetch(`/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fav = character.fav ? "#D5D803" : "#FFFFFF";

  return id ? (
    <div className="characterDetail__position">
      <div className="characterDetail__direction__row">
        <div className="characterDetail__img__width">
          <img src={image} alt={`${name} character`} />
        </div>
        <div className="characterDetail__info__column">
          <h2>{name}</h2>

          <div className="characterDetail__row__align">
            <span className={`characterDetail__status__${status}`} /> {status} -{" "}
            {species}
          </div>
          <div className="characterDetail__row__align">
            Origin: {origin?.name || "Unknown"}
          </div>
          <div className="characterDetail__row__align">
            Location: {location?.name || "Unknown"}
          </div>

          <div className="characterDetail__row__align">
            Seen in {episode?.length} episodes
          </div>
        </div>
        <div className="characterDetail__planet__column">
          <div className="characterDetail__svg__fav">
            <Star style={{ width: "44px", height: "44px", fill: fav }} />
          </div>

          <div className="characterDetail__row__align">
            {" "}
            Click the star to save to favs
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default CharacterDetail;

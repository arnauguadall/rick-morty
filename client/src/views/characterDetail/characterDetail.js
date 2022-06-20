import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleCharacterFav } from "../../redux/charactersSlice.js";

import { ReactComponent as Star } from "../../assets/svg/star.svg";

import "./characterDetail.css";

const CharacterDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);
  const { loading, error, charactersList } = characters;

  const { name, status, image, species, location, episode, fav } =
    charactersList[id];

  const handleFav = () => {
    dispatch(handleCharacterFav(id));
  };

  console.log(charactersList[id]);

  const favStyle = fav ? "#D5D803" : "#FFFFFF";

  return id ? (
    <div className="characterDetail__position">
      <div className="characterDetail__direction__row">
        <div className="characterDetail__img__width">
          <img src={image} alt={`${name} character`} />
        </div>
        <div className="characterDetail__info__column">
          <h2>{name}</h2>

          <div className="characterDetail__row__align">
            <span className={`characterDetail__status__${status}`} />
            {status} - {species}
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
          <div className="characterDetail__svg__fav" onClick={handleFav}>
            <Star style={{ width: "44px", height: "44px", fill: favStyle }} />
          </div>

          <div className="characterDetail__row__align">
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

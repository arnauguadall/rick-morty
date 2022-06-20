import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice.js";

import Card from "../../components/card/card.js";

import "./characterList.css";

const CharacterList = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);
  const { loading, error, charactersList } = characters;

  useEffect(() => {
    if (!charactersList) {
      dispatch(fetchCharacters());
    }
  }, [dispatch]);

  return (
    <>
      {error ?? null}
      <div className="characterList__layout_wrap">
        {charactersList
          ? Object.keys(charactersList).map((character) => (
              <Card
                key={charactersList[character].name}
                character={charactersList[character]}
              />
            ))
          : loading}
      </div>
    </>
  );
};

export default CharacterList;

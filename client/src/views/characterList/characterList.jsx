import { useState } from "react";

import Card from "../../components/card/card.jsx";

import './characterList.css';

const CharacterList = () => {
  const [list, setList] = useState({});

  useState(() => {
    fetch("/characters")
      .then((response) => response.json())
      .then((characters) => {
        setList(characters);
      });
  }, [list]);

  return (
    <div className="characterList__layout_wrap">
      {list
        ? Object.keys(list).map((character) => (
            <Card key={list[character].name} character={list[character]} />
          ))
        : "loading"}
    </div>
  );
};

export default CharacterList;

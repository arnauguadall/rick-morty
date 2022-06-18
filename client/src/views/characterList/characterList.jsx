import { useState } from "react";

import Card from "../../components/card/card.jsx";

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
    <div>
      {list
        ? Object.keys(list).map((character) => (
            <Card key={list[character].name} character={list[character]} />
          ))
        : "loading"}
    </div>
  );
};

export default CharacterList;

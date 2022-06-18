import { useState } from "react";

import Card from "../../components/card/card.jsx";

const CharacterList = () => {
  const [list, setList] = useState({});

  useState(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
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

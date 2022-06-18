import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  let { id } = useParams();
  console.log(id);
  return <h1>CharacterDetail {id}</h1>;
};

export default CharacterDetail;

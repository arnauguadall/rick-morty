import { useNavigate } from "react-router-dom";

import pic from "../../assets/images/404.png";

import "./noPage404.css";

const NoPage404 = () => {
  const navigate = useNavigate();

  const handleOpenDetail = () => {
    return navigate(`/`);
  };

  return (
    <div className="noPage404__style">
      <div onClick={handleOpenDetail}>
        <img src={pic} alt="404 page" />
      </div>
    </div>
  );
};

export default NoPage404;

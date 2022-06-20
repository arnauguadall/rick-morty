import { useNavigate } from "react-router-dom";

import pic from "../../assets/images/404.png";

import "./noPage404.css";

/**
 * NoPage404 component
 * It renders the 404 page
 * @returns {JSX.Element}
 */
const NoPage404 = () => {
  const navigate = useNavigate();

  const handleHomeRedirection = () => {
    return navigate(`/`);
  };

  return (
    <div className="noPage404__style" onClick={handleHomeRedirection}>
      <img src={pic} alt="404 page" />
    </div>
  );
};

export default NoPage404;

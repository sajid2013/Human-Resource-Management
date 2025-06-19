import "./UserCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const UserCard = ({type}) => {
  return (
    <div className="card-main">
      <div className="card-content">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }}/>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,125</h1>
      <h2 className="text-sm font-medium capitalize text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;

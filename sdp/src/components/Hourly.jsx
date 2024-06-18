import { Link } from "react-router-dom";
import "../App.css";

const ThisMonth = () => {
  return (
    <div className="card-2">
      <div className="insideCard-1">
        <h3>Know Hour wise uses</h3>
        <Link to={"/hour-data"}>
          <button>Click here</button>
        </Link>
      </div>
    </div>
  );
};

export default ThisMonth;

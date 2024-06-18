import { Link } from "react-router-dom";
import "../App.css";

const ThisYear = () => {
  return (
    <div className="card-2">
      <div className="insideCard-1">
        <h3>Know Day wise uses</h3>
        <Link to={"/daily-data"}>
          <button>Click here</button>
        </Link>
      </div>
    </div>
  );
};

export default ThisYear;

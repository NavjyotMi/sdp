import "../App.css";

const ConsumptionToday = () => {
  return (
    <div className="card-1">
      <div className="insideCard">
        <h3>Consumption last hour</h3>
        <div>
          Current <span>1.25 kWh</span>
        </div>
        <div>
          Voltage <span>0.83 kWh</span>
        </div>
      </div>
    </div>
  );
};

export default ConsumptionToday;

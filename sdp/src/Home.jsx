import ConsumptionMonth from "./components/ConsumptionMonth";
import ConsumptionToday from "./components/ConsumptionToday";
import ThisMonth from "./components/Hourly";
import ThisYear from "./components/Monthly";
import "./App.css";
const Home = () => {
  return (
    <>
      <h1>Hello, Dear User</h1>

      <h3>Know your Energy consumption</h3>
      <div className="consumptionDetail">
        <ConsumptionToday />
        <ConsumptionMonth />
      </div>
      <h3>Want to know More </h3>
      <div className="consumptionDetail">
        <ThisMonth />
        <ThisYear />
      </div>
    </>
  );
};

export default Home;

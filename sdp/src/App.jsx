import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Day from "./pages/Day";
import Hour from "./pages/Hour";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hour-data" element={<Hour />} />
          <Route path="/daily-data" element={<Day />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";

import Chart from "chart.js/auto";
// import { Line } from "react-Chart.js-2";
import { Line } from "react-chartjs-2";
const labels = [
  0, 1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];
const data1 = {
  labels: labels,
  datasets: [
    {
      label: "Hour wise current data (Amps)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        2.1, 1.3, 3.2, 2.4, 4.1, 5.7, 7.2, 12.5, 15.8, 18.4, 16.7, 13.1, 10.5,
        8.6, 6.2, 5.4, 7.8, 4.3, 3.7, 2.9, 1.6, 2.3, 1.1, 2.6,
      ],
    },
  ],
};

const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Hour wise voltage data(kWh)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        0.23, 0.15, 0.38, 0.21, 0.47, 0.52, 0.74, 1.28, 1.53, 1.87, 1.61, 1.34,
        1.02, 0.89, 0.65, 0.58, 0.71, 0.42, 0.35, 0.27, 0.18, 0.25, 0.12, 0.29,
      ],
    },
  ],
};

const Hour = () => {
  return (
    <div className="page">
      <h1>This graph represents the Hourly data uses</h1>
      <div className="graph">
        <h4>Hourly current consumption</h4>
        <Line data={data1} />
        <h4>Hourly Voltage consumption</h4>
        <Line data={data2} />
      </div>
    </div>
  );
};

export default Hour;

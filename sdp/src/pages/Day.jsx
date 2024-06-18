import React from "react";
import Chart from "chart.js/auto";
// import { Line } from "react-Chart.js-2";
import { Line } from "react-chartjs-2";
const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const data1 = {
  labels: labels,
  datasets: [
    {
      label: "Day Wise current data(Amps)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        10.3, 12.7, 8.2, 9.4, 13.1, 11.8, 10.1, 15.9, 7.5, 10.2, 14.6, 8.9, 9.1,
        6.8, 11.3, 10.1, 15.9, 7.5,
      ],
    },
  ],
};
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Day wise voltage data(kWh)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        116.03, 123.69, 112.7, 111.7, 112.98, 123.74, 114.88, 118.5, 116.72,
        124.42, 123.95, 111.92, 114.48, 119.5, 119.26, 119.59, 115.54, 110.54,
      ],
    },
  ],
};
const Day = () => {
  return (
    <div className="page">
      <h1>This graph represents the Day data uses</h1>

      <div className="graph">
        <h4>Current Data</h4>
        <Line data={data1} />
        <h4>Voltage Data</h4>
        <Line data={data2} />
      </div>
    </div>
  );
};

export default Day;

// Day 1	15.2
// Day 2	17.8
// Day 3	12.5
// Day 4	14.1
// Day 5	18.7
// Day 6	16.3
// Day 7	13.9
// Day 8	20.1
// Day 9	11.4
// Day 10	15.6
// Day 11	19.2
// Day 12	12.8
// Day 13	14.4
// Day 14	10.7	6.8
// Day 15	16.1	11.3
// Day 16	18.5	13.7
// Day 17	14.9	9.6
// Day 18	12.2	8.4

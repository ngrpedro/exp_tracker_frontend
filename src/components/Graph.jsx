import { ArcElement, Chart } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const config = {
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 5,
      },
    ],
  },
  options: {
    cutout: 175,
  },
};

const Graph = () => {
  return (
    <div className="relative">
      <Doughnut {...config}></Doughnut>
      <div className="absolute top-[43%] left-[43%]">
        <h1 className="font-semibold">Total</h1>
        <span className="font-semibold text-cyan-900">R$ 999</span>
      </div>
    </div>
  );
};

export default Graph;

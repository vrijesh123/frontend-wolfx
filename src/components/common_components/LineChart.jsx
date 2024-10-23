"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register required components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Enables the gradient fill
);

const LineChart = () => {
  // Data for the chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Time Line",
        data: [30, 25, 40, 60, 80, 50, 30, 85, 40, 20, 50, 60], // Your data here
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(75, 192, 192, 0.4)"); // Start color for gradient
          gradient.addColorStop(1, "rgba(75, 192, 192, 0)"); // End color (transparent)

          return gradient;
        },
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        fill: true, // Enables background gradient fill
        tension: 0.4, // Creates the smooth curve effect
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true, // Removes grid lines on the x-axis
          color: "#D9D9FF40",
          opacity: 0.5,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Removes grid lines on the y-axis
          color: "#D9D9FF40",
          opacity: 0.5,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        maxHeight: "500px",
        width: "100%",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

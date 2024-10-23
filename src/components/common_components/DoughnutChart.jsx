"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the chart
  const data = {
    labels: ["Active", "Trial", "Expired"], // Labels for the legend
    datasets: [
      {
        data: [60, 15, 15], // Data values (e.g., percentages or counts)
        backgroundColor: ["#52FF00", "#FFE500", "#FF0000"], // Colors for each segment
        hoverBackgroundColor: ["#52FF00", "#FFE500", "#FF0000"], // Hover colors
        borderColor: "#1d1d1d", // To match the background
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    cutout: "60%", // Creates the doughnut style with a larger center cutout
  };

  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        width: "fit-content",
      }}
    >
      <h3 style={{ color: "#ffffff" }}>Subscription Status Breakdown</h3>
      <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
        <div style={{ width: "180px" }}>
          <Doughnut data={data} options={options} />
        </div>
        <div style={{ marginTop: "20px" }}>
          {/* Custom Legend */}
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "12px" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#52FF00",
                  width: "8px",
                  borderRadius: "100%",
                  height: "8px",
                  borderRadius: "100%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
              ></span>
              Active
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#FFE500",
                  width: "8px",
                  borderRadius: "100%",
                  height: "8px",
                  borderRadius: "100%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
              ></span>
              Trial
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#FF0000",
                  width: "8px",
                  borderRadius: "100%",
                  height: "8px",
                  borderRadius: "100%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
              ></span>
              Expired
            </li>
          </ul>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "400",
              color: "#fff",
              margin: "0",
              lineHeight: "40px",
            }}
          >
            90
          </h1>
          <p style={{ color: "#ffffff" }}>Total Subscriptions</p>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;

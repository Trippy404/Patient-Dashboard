import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function BloodPressureChart({ history }) {
  if (!history) return null;

  const months = history.map((h) => h.month);
  const systolic = history.map((h) => h.blood_pressure?.systolic?.value);
  const diastolic = history.map((h) => h.blood_pressure?.diastolic?.value);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#c47eff",
        borderWidth: 3,
        tension: 0.3,
        pointBackgroundColor: "#c47eff",
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#6fd6ff",
        borderWidth: 3,
        tension: 0.3,
        pointBackgroundColor: "#6fd6ff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: { y: { suggestedMin: 60, suggestedMax: 160 } },
  };

  return (
    <div className="chart-box">
      <h3>Blood Pressure</h3>
      <Line data={data} options={options} />
    </div>
  );
}

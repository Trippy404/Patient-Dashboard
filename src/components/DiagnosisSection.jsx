import React from "react";
import BloodPressureChart from "./BloodPressureChart";

export default function DiagnosisSection({ history }) {
  if (!history) return <p>Loading diagnosis history...</p>;

  const latest = history[history.length - 1];
  return (
    <section className="diagnosis">
      <h2>Diagnosis History</h2>

      <BloodPressureChart history={history} />

      <div className="vitals">
        <div className="vital-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="Respiratory" />
          <div>
            <p className="vital-label">Respiratory Rate</p>
            <p className="vital-value">{latest.respiratory_rate?.value} bpm</p>
            <p className="vital-status">Normal</p>
          </div>
        </div>

        <div className="vital-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1687/1687692.png" alt="Temperature" />
          <div>
            <p className="vital-label">Temperature</p>
            <p className="vital-value">{latest.temperature?.value}°F</p>
            <p className="vital-status">Normal</p>
          </div>
        </div>

        <div className="vital-card">
          <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="Heart" />
          <div>
            <p className="vital-label">Heart Rate</p>
            <p className="vital-value">{latest.heart_rate?.value} bpm</p>
            <p className="vital-status">Lower than Average</p>
          </div>
        </div>
      </div>
    </section>
  );
}

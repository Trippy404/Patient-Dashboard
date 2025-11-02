import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export default function Sidebar({ onSelectPatient }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid data format");

        setPatients(data);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="sidebar">
      <h2>Patients List</h2>
      {patients.map((p, index) => (
        <div key={index} className="patient" onClick={() => onSelectPatient(p)}>
          <img src={p.profile_picture} alt={p.name} />
          <div>
            <h4>{p.name}</h4>
            <p>{p.gender} | {p.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

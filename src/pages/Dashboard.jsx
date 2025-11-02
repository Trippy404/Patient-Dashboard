import React, { useEffect, useState } from "react";
import { fetchPatientData, samplePatient } from "../services/api";
import PatientCard from "../components/PatientCard";
import BPChart from "../components/BPChart";

export default function Dashboard() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchPatientData();
        if (mounted) {
          if (data) setPatient(data);
          else setPatient(samplePatient());
        }
      } catch (err) {
        console.error(err);
        if (mounted) setPatient(samplePatient());
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  return (
    <div className="dashboard">
      <div className="top-row">
        <div style={{ flex: 2 }}>
          <PatientCard patient={patient} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="card vitals-card">
            <h3>Latest Vitals</h3>
            {!patient && <p className="muted">Loading…</p>}
            {patient && (
              <ul>
                <li><strong>Blood Pressure:</strong> {patient.latestBP ?? (patient.bpHistory && patient.bpHistory.length ? `${patient.bpHistory.at(-1).systolic ?? "—"}/${patient.bpHistory.at(-1).diastolic ?? "—"}` : "—")}</li>
                <li><strong>Heart Rate:</strong> {patient.latestHR ?? "—"}</li>
                <li><strong>Last Visit:</strong> {patient.lastVisit ?? "—"}</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div>
        <BPChart series={patient?.bpHistory ?? []} />
      </div>
      <div className="muted small" style={{ marginTop: 8 }}>
        Data fetched from `https://fedskillstest.coalitiontechnologies.workers.dev`. Only Jessica Taylor is displayed per instructions.
      </div>
    </div>
  );
}

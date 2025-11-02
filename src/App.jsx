import { useState } from "react"
import Sidebar from "./components/Sidebar"
import DiagnosisSection from "./components/DiagnosisSection"
import PatientProfile from "./components/PatientProfile";
import "./styles/dashboard.css"



export default function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="app-layout">
      <Sidebar onSelectPatient={setSelectedPatient} />
      <DiagnosisSection history={selectedPatient?.diagnosis_history} />
      <PatientProfile patient={selectedPatient} />
    </div>
  );
}

import React from "react";

export default function PatientProfile({ patient }) {
  if (!patient) return <p>Loading profile...</p>;

  return (
    <aside className="profile-card">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="profile-photo"
      />
      <h2>{patient.name}</h2>
      <p className="dob"><strong>Date Of Birth:</strong> {patient.date_of_birth}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Contact:</strong> {patient.phone_number}</p>
      <p><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
      <p><strong>Insurance:</strong> {patient.insurance_type}</p>
      <button className="info-btn">Show All Information</button>
    </aside>
  );
}

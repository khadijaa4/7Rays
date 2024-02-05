import React from "react";

// This is the fake data array for now
const fakePatientsData = [
  {
    id: "1",
    name: "Alice Smith",
    age: 68,
    exams: [
      {
        id: "e1",
        date: "2024-01-20",
        findings: "No signs of pneumonia",
        imageUrl: "url-to-xray-image",
      },
      // ... other exams
    ],
  },
  // ... other patients
];

const PatientsPage = () => {
  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {fakePatientsData.map((patient) => (
          <li key={patient.id}>
            <h2>
              {patient.name} (Age: {patient.age})
            </h2>
            {patient.exams.map((exam) => (
              <div key={exam.id}>
                <p>Date: {exam.date}</p>
                <p>Findings: {exam.findings}</p>
                {/* will later replace this with an actual image */}
                <p>Image URL: {exam.imageUrl}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsPage;

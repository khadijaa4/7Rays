import React, { useState } from "react";


//TODO: Replace with actual data from the server via API call
//TODO: Add pagination to handle large number of patients
//TODO: Add sorting and filtering options
//TODO: Add error handling for failed API calls
//TODO: Add loading state while fetching data
//TODO: Add a way to display details of a single exam
//TODO: Add a way to display details of a single patient
//TODO: Add a way to display details of a single image
//TODO: Add a way to display details of a single finding
// Placeholder data to simulate fetched data
const patientsData = [
  {
    patientId: "COVID-19-AR-16406504",
    exams: [
      {
        examId: "Exam-2",
        image: "path-to-image",
        findings:
          "Lung volumes remain low but there appears to have been clearing since prior radiograph",
        brixiaScore: "1,2,3,4",
        age: 39,
        sex: "M",
        bmi: 33.5,
        zipCode: "722",
      },
      // ...other exams
    ],
  },
  // ...other patients
];

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Assuming only one patient's details are displayed per page
  const patient = patientsData[0];

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Patient Details</h1>
        <h2 className="text-xl">Patient ID: {patient.patientId}</h2>
        <p className="mb-6">Number of Exams: {patient.exams.length}</p>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Exam ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Key Findings</th>
              <th className="px-4 py-2">Brixia Score</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Sex</th>
              <th className="px-4 py-2">BMI</th>
              <th className="px-4 py-2">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {patient.exams.map((exam, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{exam.examId}</td>
                <td className="px-4 py-2">
                  <img src={exam.image} alt="X-Ray" className="w-16 h-16" />
                </td>
                <td className="px-4 py-2">{exam.findings}</td>
                <td className="px-4 py-2">{exam.brixiaScore}</td>
                <td className="px-4 py-2">{exam.age}</td>
                <td className="px-4 py-2">{exam.sex}</td>
                <td className="px-4 py-2">{exam.bmi}</td>
                <td className="px-4 py-2">{exam.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsPage;

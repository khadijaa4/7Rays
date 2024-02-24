// src/mockPatientsData.js
const mockPatientsData = [
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
      // Add more mock exams as needed
    ],
  },
  // Add more mock patients as needed
];

export default mockPatientsData;

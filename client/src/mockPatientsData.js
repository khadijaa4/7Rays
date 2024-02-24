// src/mockPatientsData.js
const mockPatientsData = [
  {
    patientId: "COVID-19-AR-16406504",
    exams: [
      {
        examId: "Exam-1",
        image: "/images/exam1.jpg",
        findings: "Lung volumes remain low but there appears to have been clearing since prior radiograph",
        brixiaScore: "1,2,3,4",
        age: 39,
        sex: "M",
        bmi: 33.5,
        zipCode: "722",
      },
      {
        examId: "Exam-2",
        image: "/images/exam2.jpg",
        findings: "No significant change in lung opacities since previous examination.",
        brixiaScore: "2,2,1,3",
        age: 39,
        sex: "M",
        bmi: 34.0,
        zipCode: "722",
      },
      {
        examId: "Exam-3",
        image: "/images/exam3.jpg",
        findings: "Progression of opacities within the right middle lobe.",
        brixiaScore: "3,3,2,1",
        age: 39,
        sex: "M",
        bmi: 33.0,
        zipCode: "722",
      },
      {
        examId: "Exam-4",
        image: "/images/exam4.jpg",
        findings: "New consolidation in the lower lobes, possible pleural effusion.",
        brixiaScore: "4,4,2,2",
        age: 39,
        sex: "M",
        bmi: 32.5,
        zipCode: "722",
      },
      {
        examId: "Exam-5",
        image: "/images/exam5.jpg",
        findings: "Decreased consolidation in the upper lobes, stable pleural effusion.",
        brixiaScore: "1,1,4,3",
        age: 39,
        sex: "M",
        bmi: 33.8,
        zipCode: "722",
      }
      // Add additional exams as necessary
    ],
  },
  // Add additional patients as necessary
];

export default mockPatientsData;

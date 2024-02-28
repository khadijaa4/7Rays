import React, { Component } from 'react';
import './ExamPage.css'; 

class ExamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: {
        patientID: '123456',
        age: 30,
        sex: 'Male',
        BMI: 25,
        zipCode: '12345',
        _id: '7890',
        xRayImageLink: 'http://example.com/image.jpg',
        date: '2024-02-25',
        keyFindings: 'No significant findings.'
      }
    };
  }

  render() {
    const { exam } = this.state;

    return (
      <div className="exam-container">
        <div className="patient-info">
          <h2>Patient Info</h2>
          <p>Patient ID: {exam.patientID}</p>
          <p>Age: {exam.age}</p>
          <p>Sex: {exam.sex}</p>
          <p>BMI: {exam.BMI}</p>
          <p>Zip Code: {exam.zipCode}</p>
        </div>
        <div className="exam-info">
          <h2>Exam Info</h2>
          <p>Exam ID: {exam._id}</p>
          <p>Image URL: <a href={exam.xRayImageLink} target="_blank" rel="noopener noreferrer">{exam.xRayImageLink}</a></p>
          <p>Date: {exam.date}</p>
          <p>Key Findings: {exam.keyFindings}</p>
        </div>
      </div>
    );
  }
}

export default ExamPage;

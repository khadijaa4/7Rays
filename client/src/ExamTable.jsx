import React from 'react';

const data = [
    { patient_id: "Anom", exam_id: "Exam-1", image: "", key_findings: "so cool",
    brixia_score: "345", age: 19, sex: "Male", bmi: "28", zip_code: 80923},
]

function ExamTable(){
        return (
            <div>  <table>
            <tr>
                <th>Patient ID</th>
                <th>Exam ID</th>
                <th>Image</th>
                <th>Key Findings</th>
                <th>Brixia Score</th>
                <th>Age</th>
                <th>Sex</th>
                <th>BMI</th>
                <th>Zip Code</th>
                
            </tr>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.patient_id}</td>
                        <td>{val.exam_id}</td>
                        <td>{val.image}</td>
                        <td>{val.key_findings}</td>
                        <td>{val.brixia_score}</td>
                        <td>{val.age}</td>
                        <td>{val.sex}</td>
                        <td>{val.bmi}</td>
                        <td>{val.zip_code}</td>
                    </tr>
                )
                })}
        </table></div>
          
        ); 
    
}

export default ExamTable;
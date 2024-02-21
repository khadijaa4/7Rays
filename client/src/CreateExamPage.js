import React, { useState } from 'react';

const CreateExamPage = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        patientId: '',
        age: '',
        sex: '',
        bmi: '',
        zipCode: '',
        examId: '',
        imageUrl: '',
        date: '',
        keyFindings: '',
        brixiaScore: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Handle add exam
    const handleAddExam = (e) => {
        e.preventDefault();
        // Here you would typically send the formData to the backend to add the exam
        console.log('Adding Exam with form data: ', formData);
        // Optionally reset the form here if needed
        setFormData({
            patientId: '',
            age: '',
            sex: '',
            bmi: '',
            zipCode: '',
            examId: '',
            imageUrl: '',
            date: '',
            keyFindings: '',
            brixiaScore: ''
        });
    };
   
    // Handle random exam generation
    const handleRandomExam = () => {
        // Implement the logic to generate random exam data
    };
        // Set form values
    const setFormValues = (values) => {
        setFormData({ ...formData, ...values });
    };
    
        // Handle cancel button click
    const handleCancel = () => {
        setFormValues({
            patientId: '',
            age: '',
            sex: '',
            bmi: '',
            zipCode: '',
            examId: '',
            imageUrl: '',
            date: '',
            keyFindings: '',
            brixiaScore: ''
        });
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Create Exam</h1>
            <form onSubmit={handleAddExam} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Patient Info Section */}
                <div className="md:col-span-1">
                    <h2 className="text-xl font-semibold mb-3">Patient Info</h2>
                    <div className="mb-4">
                        <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">Patient ID</label>
                        <input
                            type="text"
                            name="patientId"
                            id="patientId"
                            value={formData.patientId}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Other patient info fields */}
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
                        <input
                            type="text"
                            name="sex"
                            id="sex"
                            value={formData.sex}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                        <input
                            type="text"
                            name="bmi"
                            id="bmi"
                            value={formData.bmi}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZipCode</label>
                        <input
                            type="text"
                            name="zipCode"
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>

                {/* Exam Info Section */}
                <div className="md:col-span-1">
                    <h2 className="text-xl font-semibold mb-3">Exam Info</h2>
                    <div className="mb-4">
                        <label htmlFor="examId" className="block text-sm font-medium text-gray-700">Exam ID</label>
                        <input
                            type="text"
                            name="examId"
                            id="examId"
                            value={formData.examId}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="keyFindings" className="block text-sm font-medium text-gray-700">Key Findings</label>
                        <textarea
                            name="keyFindings"
                            value={formData.keyFindings}
                            onChange={handleInputChange}
                            rows="3"
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="brixiaScore" className="block text-sm font-medium text-gray-700">Brixia Score (separated by comma)</label>
                        <input
                            type="text"
                            name="brixiaScore"
                            value={formData.brixiaScore}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="md:col-span-2 flex justify-between">
                    <button
                        type="button"
                        onClick={handleAddExam}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Exam
                    </button>

                    <button
                        type="button"
                        onClick={handleRandomExam}
                        className="bg-blue-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Random Exam
                    </button>

                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateExamPage;

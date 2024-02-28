import React, { useState } from 'react';
import useExamsData, {fetchData} from './useExamsData';

  // Initial form data
  const initialFormData = {
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
};


const CreateExamPage = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);

    // simple front-end validation
    const validateForm = () => {
                let tempErrors = {};
                if (!formData.patientId.trim()) tempErrors.patientId = 'Patient ID is required';
                if (!formData.age || formData.age <= 0) tempErrors.age = 'Valid age is required';
                if (!formData.sex.trim()) tempErrors.sex = 'Sex is required';
                if (!formData.bmi || formData.bmi <= 0) tempErrors.bmi = 'Valid BMI is required';
                if (!formData.zipCode.trim()) tempErrors.zipCode = 'Zip code is required';
                if (!formData.examId.trim()) tempErrors.examId = 'Exam ID is required';
                if (!formData.imageUrl.trim()) tempErrors.imageUrl = 'Image URL is required';
                if (!formData.date.trim()) tempErrors.date = 'Date is required';
                if (!formData.keyFindings.trim()) tempErrors.keyFindings = 'Key findings are required';
                if (!formData.brixiaScore.trim()) tempErrors.brixiaScore = 'Brixia score is required';
                setErrors(tempErrors);
                return Object.keys(tempErrors).length === 0; // Returns true if no errors
            };

            // Handle input change

            const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value });
            };

            // Handle add exam
            const handleAddExam = async (e) => {
                e.preventDefault();
                setIsLoading(true);
                setMessage(null);
                
                // Here add form validation before sending the request
                const isValid = validateForm();
                if (!isValid) {
                    setMessage('Please fix the errors in the form before submitting');
                    setIsLoading(false);
                    return; // Exit early if the form is invalid
                } 

                // If the form is valid send the request to the server
                try {
                    const response = await fetch('http://localhost:9000/exams', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    //const data = await response.json();
                    setMessage('Exam added successfully');
                    //fetchData();
                    setFormData(initialFormData);
                } catch (error) {
                    // Log and display any error messages
                    setMessage(`Error: ${error.message || 'There was an error adding the exam'}`);
                    console.error('There was an error adding the exam:', error);
                    setError(error);
                } finally {
                    // Reset loading state
                    setIsLoading(false);
                }
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
                setFormData(initialFormData);
                setMessage(null);
            };

            return (
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4 text-center">Create Exam</h1>
                    {message && <div>{message}</div>}
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
                                {/* Display error message if the patientId field has an error */}
                                {errors.patientId && <p className="text-red-500" text-xs mt-1>{errors.patientId}</p>}
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
                                {/* Display error message if the age field has an error*/}
                                {errors.age && <p className="text-red-500" text-xs mt-1>{errors.age}</p>}
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
                                {/* Display error message*/}
                                {errors.sex && <p className="text-red-500" text-xs mt-1>{errors.sex}</p>}
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
                                {/* Display error message if the bmi field has an error */}
                                {errors.bmi && <p className="text-red-500" text-xs mt-1>{errors.bmi}</p>}
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
                                {/* Display error message if the zipCode field has an error */}
                                {errors.zipCode && <p className="text-red-500" text-xs mt-1>{errors.zipCode}</p>}
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
                                {/* Display error message if the examId field has an error */}
                                {errors.examId && <p className="text-red-500" text-xs mt-1>{errors.examId}</p>}
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
                                {/* Display error message if the imageUrl field has an error */}
                                {errors.imageUrl && <p className="text-red-500" text-xs mt-1>{errors.imageUrl}</p>}
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
                                {/* Display error message if the date field has an error */}
                                {errors.date && <p className="text-red-500" text-xs mt-1>{errors.date}</p>}
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
                                {/* Display error message if the keyFindings field has an error */}
                                {errors.keyFindings && <p className="text-red-500" text-xs mt-1>{errors.keyFindings}</p>}
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
                            {/* Display error message if the brixiaScore field has an error */}
                            {errors.brixiaScore && <p className="text-red-500" text-xs mt-1>{errors.brixiaScore}</p>}
                        </div>

                        {/* Buttons Section */}
                        <div className="md:col-span-2 flex justify-between">
                            <button
                                type="submit"
                                onClick={handleAddExam}
                                disabled={isLoading}
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

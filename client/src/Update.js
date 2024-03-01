import React, { useState } from 'react';
import useExamsData, {fetchData} from './useExamsData';

  // Initial form data
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const pid = params.get('pid');
  const eid = params.get('eid');
  console.log(pid);
  console.log(eid);

  const initialFormData = {
    PATIENT_ID: pid,
    AGE: '',
    SEX: '',
    LATEST_BMI: '',
    zipCode: '',
    examId: '',
    imageUrl: '',
    date: '',
    keyFindings: '',
    brixiaScore: ''
};


const UpdatePage = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);



    // simple front-end validation
    const validateForm = () => {
                let tempErrors = {};
                if (!formData.PATIENT_ID.trim()) tempErrors.PATIENT_ID = 'Patient ID is required';
                if (!formData.AGE|| formData.AGE<= 0) tempErrors.AGE= 'Valid AGEis required';
                if (!formData.SEX.trim()) tempErrors.SEX = 'SEX is required';
                if (!formData.LATEST_BMI || formData.LATEST_BMI <= 0) tempErrors.LATEST_BMI = 'Valid BMI is required';
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

            // Handle updating exam
            const handleUpdateExam = async () => {
                //fetch the data and put it in the input boxes 

            };
            

                // Set form values
                //not sure what this does from Joe's Code
            const setFormValues = (values) => {
                setFormData({ ...formData, ...values });
            };
            
            // Handle cancel button click
            const handleCancel = () => {
                //send back to admin page information is set the same 
            };

            return (
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4 text-center">Update Exam</h1>
                    {message && <div>{message}</div>}
                    <form onSubmit={handleUpdateExam} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Patient Info Section */}
                        <div className="md:col-span-1">
                            <h2 className="text-xl font-semibold mb-3">Patient Info</h2>
                            <div className="mb-4">
                                <label htmlFor="PATIENT_ID" className="block text-sm font-medium text-gray-700">Patient ID</label>
                                <input
                                    type="text"
                                    name="PATIENT_ID"
                                    id="PATIENT_ID"
                                    value={formData.PATIENT_ID}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    required
                                />
                                {/* Display error message if the PATIENT_ID field has an error */}
                                {errors.PATIENT_ID && <p className="text-red-500" text-xs mt-1>{errors.PATIENT_ID}</p>}
                            </div>

                            {/* Other patient info fields */}
                            <div className="mb-4">
                                <label htmlFor="AGE" className="block text-sm font-medium text-gray-700">Age</label>
                                <input
                                    type="number"
                                    name="AGE"
                                    id="AGE"
                                    value={formData.AGE}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    required
                                />
                                {/* Display error message if the age field has an error*/}
                                {errors.AGE&& <p className="text-red-500" text-xs mt-1>{errors.AGE}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="SEX" className="block text-sm font-medium text-gray-700">Sex</label>
                                <input
                                    type="text"
                                    name="SEX"
                                    id="SEX"
                                    value={formData.SEX}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    required
                                />
                                {/* Display error message*/}
                                {errors.SEX && <p className="text-red-500" text-xs mt-1>{errors.SEX}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="LATEST_BMI" className="block text-sm font-medium text-gray-700">BMI</label>
                                <input
                                    type="text"
                                    name="LATEST_BMI"
                                    id="LATEST_BMI"
                                    value={formData.LATEST_BMI}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    required
                                />
                                {/* Display error message if the bmi field has an error */}
                                {errors.LATEST_BMI && <p className="text-red-500" text-xs mt-1>{errors.LATEST_BMI}</p>}
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
                                onClick={handleUpdateExam}
                                disabled={isLoading}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Update Exam
                            </button>

                            <a href= "/admin">
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            </a>
                        </div>
                    </form>
                </div>
            );
        };

        export default UpdatePage;

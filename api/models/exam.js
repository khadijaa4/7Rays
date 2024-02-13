// Defines an exam model
// Specifies the structure of an exam document in the MondoDB database
// Integrate the exam model with the exam controller

const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    PATIENT_ID: String,
    AGE: Number,
    SEX: String,
    ZIP: Number,
    LATEST_BMI: Number,
    LATEST_WEIGHT: Number,
    png_filename: String,
    exam_Id: String,
    ICU_Admit: String,
    ICU_admits: Number,
    MORTALITY: String
});

module.exports = mongoose.model('Exam', examSchema);

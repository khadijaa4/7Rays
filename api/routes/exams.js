// For defining routes/endpoints for exams
// Uses Express.js Router to define these routes
// Specifies the controller methods for each route

const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam-controller');

// Get all exams
router.get('/', examController.getExams);

// Get a single exam by ID
router.get('/:PATIENT_ID', examController.getExamById);

// Create a new exam
router.post('/', examController.postExam);

// Delete an exam by ID
router.delete('/:PATIENT_ID', examController.deleteExamById);

// Update an exam by ID
router.patch('/:id', examController.patchExamById);

module.exports = router;
// For defining routes/endpoints for exams
// Uses Express.js Router to define these routes
// Specifies the controller methods for each route

const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam-controller');

// Get all exams
router.get('/exams', examController.getExams);

// Get a single exam by ID
router.get('/exams/:id', examController.getExamById);

// Create a new exam
router.post('/exams', examController.postExam);

// Delete an exam by ID
router.delete('/exams/:id', examController.deleteExamById);

// Update an exam by ID
router.patch('/exams/:id', examController.patchExamById);

module.exports = router;
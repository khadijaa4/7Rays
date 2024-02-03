const Exam = require('../models/exam');

// Retrieves all exams from the database
const getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieves a single exam from the database by its ID
const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (exam == null) {
      return res.status(404).json({ message: 'Cannot find exam'});
    }
    res.json(exam);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Cannot find exam' });
    }
    return res.status(500).json({ message: err.message});
  }
};

// Creates an exam in the database
const postExam = async (req, res) => {
  const exam = new Exam({
    // Fill in exam data from req.body | Waiting to know data structure
  });
  try {
    const newExam = await exam.save();
    res.status(201).json(newExam);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ message: err.message });
    } else {
    res.status(500).json({ message: err.message });
    }
  }
};

// Deletes an exam from the database by its ID
const deleteExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (exam == null) {
      return res.status(404).json({ message: 'Cannot find exam' });
    }
    await exam.remove();
    res.json({ message: 'Exam deleted' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Cannot find exam' });
    }
    return res.status(500).json({ message: err.message });
  }
};

// Updates an exam in the database by its ID
const patchExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (exam == null) {
      return res.status(404).json({ message: 'Cannot find exam' });
    }
    // update exam data from req.body | Waiting to know data structure
    const updatedExam = await exam.save();
    res.json(updatedExam);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Cannot find exam' });
    }
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getExams,
  getExamById,
  postExam,
  deleteExamById,
  patchExamById,
};
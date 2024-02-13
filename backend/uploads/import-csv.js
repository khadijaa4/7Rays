import fs from 'fs';
import csv from 'csv-parser';
import mongoose from 'mongoose';
import Exam from './models/exam'; // Import your Mongoose model
import { PORT, ATLAS_URI } from './config';

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', async () => {
    console.log('Connected to MongoDB Atlas');

    try {
        // Read and parse CSV file
        fs.createReadStream('./uploads/data.csv')
            .pipe(csv())
            .on('data', async (row) => {
                try {
                    // Create a new document from each row of the CSV file
                    const newExam = new Exam({
                        PATIENT_ID: row.PATIENT_ID,
                        AGE: parseInt(row.AGE),
                        SEX: row.SEX,
                        ZIP: parseInt(row.ZIP),
                        LATEST_BMI: parseFloat(row.LATEST_BMI),
                        LATEST_WEIGHT: parseFloat(row.LATEST_WEIGHT),
                        png_filename: row.png_filename,
                        exam_Id: row.exam_Id,
                        ICU_Admit: row.ICU_Admit,
                        ICU_admits: parseInt(row.ICU_admits),
                        MORTALITY: row.MORTALITY
                    });

                    // Save the new document to the database
                    await newExam.save();
                } catch (err) {
                    console.error('Error saving document:', err);
                }
            })
            .on('end', () => {
                console.log('CSV data successfully imported into MongoDB');
                mongoose.disconnect(); // Disconnect from MongoDB after importing data
            });
    } catch (err) {
        console.error('Error importing CSV data:', err);
    }
});

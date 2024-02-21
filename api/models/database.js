// import express from 'express';
const { PORT, ATLAS_URI} = require ('../config');
const mongoose = require ("mongoose");
// import Exam from './models/exam';

//const app = express();

//these lines may not be needed. not setting up the database everytime you make a connection 
// app.get('/', (request, response) =>{
//     console.log(request);
//     return response.status(200).send('7 Rays Database');
// }); { useNewUrlParser: true, useUnifiedTopology: true }


const database = mongoose.connect(ATLAS_URI)
    .then(() => {
        console.log('App is connected to the database');
        // app.listen(PORT, () => {
        //     console.log(`App is listening to port: ${PORT}`);
        // });
    })
    .catch((error) => {
        console.error(error);
    });

const dbConnection = database.connection;

module.exports = {dbConnection};
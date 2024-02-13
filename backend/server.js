
import express from 'express';
import { PORT, ATLAS_URI} from './config';
import mongoose from 'mongoose';
import Exam from './models/exam';


const app = express();

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(200).send('7 Rays Database');
});


mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App is connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });

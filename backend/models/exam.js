import mongoose from "mongoose";

const examSchema = mongoose.Schema({
   PATIENT_ID:{
    type: String,
    required: true,
   },
   AGE:{
    type: Number, 
    required: true,
   },
   SEX:{
    type: String,
    required: true,
   },
   ZIP:{
    type: Number,
    required: true,
   },
   LATEST_BMI:{
    type: Number,
    required: true,
   },
   LATEST_WEIGHT:{
    type: Number,
    required: true,
   },
   png_filename:{
    type: String,
    required: true,
   },
   exam_Id:{
    type: String,
    required: true,
   },
   ICU_Admit:{
    type: String,
    required: true,
   },
   ICU_admits:{
    type:Number,
    required: true,

   },
   MORTALITY:{
    type: String,
    required: true,
   },
});

export default mongoose.model('Exam', examSchema);
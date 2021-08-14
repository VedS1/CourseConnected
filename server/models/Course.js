const mongoose = require ("mongoose");

const CourseSchema = new mongoose.Schema({
   title: {
       type: String,
       required: false,
   },
   subject: {
       type: String,
       required: false,
   },
   author: {
       type: String,
       required: false,
   },
   description: {
       type: String,
       required: false,
   },
   level: {
       type: Number,
       required: false,
   },
   dateOfCreate: {
       type: String,
       required: false,
   },
   unit: {
       type: Array, Object,
       required: false,
   }

});




const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
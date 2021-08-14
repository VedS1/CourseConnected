const mongoose = require ("mongoose");

const CourseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
   title: {
       type: String,
       required: true,
   },
   subject: {
       type: String,
       required: true,
   },
   author: {
       type: String,
       required: true,
   },
   description: {
       type: String,
       required: true,
   },
   level: {
       type: Number,
       required: true,
   },
   dateOfCreate: {
       type: String,
       required: true,
   },
   unit: {
       type: Array, Object,
       required: true,
   }

});




const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
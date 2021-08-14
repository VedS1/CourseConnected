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


courseDb = mongoose.createConnection("mongodb+srv://EduDefault:OnlyLetters@eduapp.zoxor.mongodb.net/course?retryWrites=true&w=majority", {useNewUrlParser:true});

const Course = courseDb.model("Course", CourseSchema);
module.exports = Course;

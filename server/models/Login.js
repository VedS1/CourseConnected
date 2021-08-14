const mongoose = require ("mongoose");

const CourseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: false,
    },
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

});




const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
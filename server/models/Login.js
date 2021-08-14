const mongoose = require ("mongoose");

const LoginSchema = new mongoose.Schema({
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
    unit: {
        type: Object,
        required: false,
    },

});




const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
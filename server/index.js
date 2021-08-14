const express = require("express");
const moongose = require ("mongoose");
const app = express();


const CourseModel = require("./models/Course");


app.use(express.json());

moongose.connect("mongodb+srv://EduDefault:OnlyLetters@eduapp.zoxor.mongodb.net/course?retryWrites=true&w=majority", {useNewUrlParser:true});


app.get("/", async (req, res)=>{
    const course = new CourseModel({userName: "FirstUsername", password: "FirstPassword"});
    try
    {
        await course.save();
        res.send("inserted data");

    }catch(err){
        console.log(err);
    }
}); 


app.listen(3001, ()=> {
    console.log('Server up and running on 3001');
});
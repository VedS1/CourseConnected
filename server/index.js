const express = require("express");
const moongose = require ("mongoose");
const cors = require('cors');
const app = express();


const CourseModel = require("./models/Course");


app.use(express.json());
app.use(cors());

moongose.connect("mongodb+srv://EduDefault:OnlyLetters@eduapp.zoxor.mongodb.net/course?retryWrites=true&w=majority", {useNewUrlParser:true});


app.post("/insert", async (req, res)=>{ // fetching data from frontend
    const title = req.body.title; 
    const subject = req.body. subject; 
    const  author = req.body.author;
    const  description = req.body.description;
    const  level = req.body. level;
    const dateOfCreate =  req.body.dateOfCreate;
    const unit = req.body.unit;
    const course = new CourseModel({title: title, subject: subject, author: author, description:description, level: level, dateOfCreate:dateOfCreate, unit: unit});
    try
    {
        await course.save();
        res.send("inserted data");

    }catch(err){
        console.log(err);
    }
}); 

app.get("/read", async (req, res)=>{//reading from database
   CourseModel.find({}/*looking in database*/, (err, result) => {
       if(err){
        res.send(err)
       }
       res.send(result);
   })
});

app.put("/update", async (req, res)=>{ // fetching data from frontend
    const newTitle = req.body.newTitle; 
    const id = req.body.id;
 //  const subject = req.body. subject; 
 //  const  author = req.body.author;
 //  const  description = req.body.description;
 //  const  level = req.body. level;
 //  const dateOfCreate =  req.body.dateOfCreate;
 //  const unit = req.body.unit;
    console.log("step 1");
    try
    {
        await CourseModel.findById(id, (err, newDBAddition)=>{
            if(err)
            {
                console.log(err);
            }
            newDBAddition.title = newTitle;
            newDBAddition.save();
            res.send("worked")
        });

    }catch(err){
        console.log(err);
    }
}); 

app.listen(3001, ()=> {
    console.log('Server up and running on 3001');
});
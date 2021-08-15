const express = require("express");
const moongose = require ("mongoose");
const cors = require('cors');
const app = express();


const CourseModel = require("./models/Course");
const UserModel = require("./models/User")


//CourseModel.find().sort({"rating": -1});
app.get('/popular', async (req, res)=>{
    CourseModel.find().sort({"rating": -1}).limit(20).exec(function (err, member) {
        res.send(member);
      })

})


app.use(express.json());
app.use(cors());

app.post('/courseData', async (req, res) =>{
    const _id = req.body._id;
    CourseModel.findById(_id, (err, result)=>{
        res.send(result); 
    })
})

app.post('/bookmark', async (req, res) =>{
    const _id = req.body._id;
    UserModel.findById(_id, (err, result)=>{
        res.send(result);       
    })
})

app.post('/register', async (req, res) =>{//authenticating and fetching user login from frontend
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    UserModel.find({email: email}, (err, result) =>{
        if(result==0)
        {
            res.send(true)
        }
        else{
            res.send(false)
        }
    });
    const user = new UserModel({username: username, password: password, email: email});
    try
    {
        await user.save();
        res.send("registered user");
    }catch(err){
        console.log(err);
    }
});

app.get("/login", async (req, res) =>{  //check if an account exists
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    console.log(password)
    UserModel.find({email: email, password: password}, (err, result)=>{
        if(err){
            res.send(err);
        }
        if(result){
        res.send(result);}
        else{
            res.send("Wrong information")
        }
    })
})


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
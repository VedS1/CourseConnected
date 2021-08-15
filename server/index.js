const express = require("express");
const moongose = require ("mongoose");
const cors = require('cors');
const app = express();


const CourseModel = require("./models/Course");
const UserModel = require("./models/User");

app.use(express.json());    
app.use(cors());





var popularLimit = 20;

app.post("/unitAdd", async (req, res)=>{
    const _id = req.body._id;
    const newUnit = req.body.unit;
    try
    {
        await CourseModel.findById(_id, (err, newUnit)=>{
        newUnit.unit = newUnit;
        newUnit.save();
        });
    }catch(err){
        //console.log(err); 
    }
})


app.put("/rStatus", async (req, res)=>{ // fetching data from frontend

    const newRating = req.body.rating;
    const newRates = req.body.rates;
    const _id = req.body._id;
    try
    {
        await CourseModel.findById(_id, (err, newRatedCourse)=>{
        newRatedCourse.rates = newRates;
        newRatedCourse.rating = newRating;
        newRatedCourse.save();
        });
    }catch(err){
        //console.log(err); 
    }
})

app.put("/cStatus", async (req, res)=>{ // fetching data from frontend

    const newCreated = req.body.created;
    const _id = req.body._id;
    try
    {
        await UserModel.findById(_id, (err, newCreatedUser)=>{
        newCreatedUser.created = newCreated;
        newCreatedUser.save();
        });
    }catch(err){
        //console.log(err); 
    }
})

app.put("/bStatus", async (req, res)=>{ // fetching data from frontend

    const newBookmarked = req.body.bookmarked;
    const _id = req.body._id;
    console.log(_id);
    try
    {
        await UserModel.findById(_id, (err, newBookmarkedUser)=>{
        newBookmarkedUser.bookmarked = newBookmarked;
        newBookmarkedUser.save();
        console.log(newBookmarkedUser.bookmarked);
        });
    }catch(err){
        //console.log(err); 
    }
})


app.post("/login", async (req, res) =>{  //check if an account exists
    const email = req.body.email;
    const password = req.body.password;
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




app.get('/fullDB', async (req, res)=>{
    CourseModel.find().exec(function(err, member){
        res.send(member);
    });
})



//CourseModel.find().sort({"rating": -1});
app.get('/popular', async (req, res)=>{
    CourseModel.find().sort({"rating": -1}).limit(popularLimit).exec(function (err, member) {
        res.send(member);
      })

})



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
    }
});



app.post("/insert", async (req, res)=>{ // fetching data from frontend
    const imgURL = req.body.imgURL;
    const title = req.body.title; 
    const subject = req.body. subject; 
    const  author = req.body.author;
    const  description = req.body.description;
    const  level = req.body. level;
    const dateOfCreate =  req.body.dateOfCreate;
    const unit = req.body.unit;
    const course = new CourseModel({title: title, subject: subject, author: author, description:description, level: level, dateOfCreate:dateOfCreate, unit: unit, imgURL:imgURL});
    try
    {
        await course.save();
        res.send(course._id);

    }catch(err){
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
    try
    {
        await CourseModel.findById(id, (err, newDBAddition)=>{
            if(err)
            {
//console.log(err);
            }
            newDBAddition.title = newTitle;
            newDBAddition.save();
            res.send("worked")
        });

    }catch(err){
       // console.log(err);
    }
}); 

app.listen(3001, ()=> {
  //  console.log('Server up and running on 3001');
});
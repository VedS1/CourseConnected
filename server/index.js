const express = require("express");
const moongose = require ("mongoose");
const app = express();


const LoginModel = require("./models/Login");


app.use(express.json());

moongose.connect("mongodb+srv://EduDefault:OnlyLetters@eduapp.zoxor.mongodb.net/login?retryWrites=true&w=majority", {useNewUrlParser:true});


app.get("/", async (req, res)=>{
    const login = new LoginModel({userName: "FirstUsername", password: "FirstPassword"});
    try
    {
        await login.save();
        res.send("inserted data");

    }catch(err){
        console.log(err);
    }
}); 


app.listen(3001, ()=> {
    console.log('Server up and running on 3001');
});
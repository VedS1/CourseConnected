   const mongoose = require ("mongoose");
   const UserSchema = new mongoose.Schema({
   username: {
       type: String,
       required: false,
   },
   password: {
       type: String,
       required: false,
   },
   email: {
       type: String,
       required: false,
   },
   bookmarked:{
       type: Array, Number,
       required: false,
   },
   created:{
       type: Array, Number, 
       required: false,
   },
   key:{
       type: Number,
       required:false,
   }
   });

   userDb = mongoose.createConnection("mongodb+srv://EduDefault:OnlyLetters@eduapp.zoxor.mongodb.net/User?retryWrites=true&w=majority", {useNewUrlParser:true});


   const User = userDb.model("User", UserSchema);
   module.exports = User;

const mongoose=require('mongoose');
const dotenv=require("dotenv")
dotenv.config().parsed

mongoose.connect(process.env.DB_URL,{  useNewUrlParser: "true",
  useUnifiedTopology: "true"})
.then(()=>{
    console.log("database in started");
})
.catch((e)=>{
    console.log(e);
})
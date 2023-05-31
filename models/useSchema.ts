
// const mongoose=require('mongoose')

// const userSchema=mongoose.Schema({
//     profile:{
//         type:String,
//     },
//     firstname:{
//         type:String
       
//     },
//     lastname:{
//         type:String
        
//     },
//     email:{
//         type:String
       
//     },
//     phone:{
//         type:String
        
//     },
//     gender:{
//         type:String
        
//     }
    
// })


// const user= mongoose.model('User',userSchema)


// module.exports =user

import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  profile: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  gender: string;
  
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  profile: {
    type: String,
    required:true,
        trim:true
  },
  firstname: {
    type: String,
    required:true,
        trim:true
  },
  lastname: {
    type: String,
    required:true,
    trim:true
  },
  email: {
    type: String,
    required:true,
    trim:true
  },
  phone: {
    type: String,
    requied:true,
    trim:true
  }
},{
        timestamps:true
      
});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export { User, IUser };

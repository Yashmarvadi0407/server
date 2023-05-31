"use strict";
// const mongoose=require('mongoose')
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.default.Schema({
    profile: {
        type: String,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        requied: true,
        trim: true
    }
}, {
    timestamps: true
});
var User = mongoose_1.default.model('User', userSchema);
exports.User = User;

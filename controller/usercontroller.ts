// const user = require("../models/useSchema");
// const User = require("../models/useSchema");

// //post user data
// async function adduser(req, res) {
//   const user = new User(req.body);
//   await user.save();
//   res.send(user);
// }

// async function updateuser(req, res) {
//   try {
//     //console.log("body",req.body);
//     const _id = req.body;
//     console.log(_id);
//     const updatedata = await User.findByIdAndUpdate(_id, req.body);
//     //    await updatebike.save()
//     //console.log(updatebike)
//     res.status(200).send(updatedata);
//     console.log("updated");
//     //    console.log(updatebike);
//   } catch (e) {
//     res.status(400).send({ meassge: " id is not match" });
//   }
// }

// async function deleteuser(req, res) {
//   try {
//     console.log(req.body);
//     const _id = req.body;
//     console.log(_id);
//     const deletedata = await User.findByIdAndDelete(_id);
//     //    await updatebike.save()
//     //console.log(updatebike)
//     res.status(200).send(deletedata);
//     //    console.log(updatebike);
//   } catch (e) {
//     res.status(400).send({ meassge: " id is not match" });
//   }
// }

// //delete all user
// async function deletealluser(req, res) {
//   try {
//     console.log(req.body);
//     const _id = req.body;
//     console.log(_id);
//     const deletedata = await User.deleteMany();
//     //    await updatebike.save()
//     //console.log(updatebike)
//     res.status(200).send(deletedata);
//     //    console.log(updatebike);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// }

// //get all user data
// async function getuseralldata(req, res) {
//   try {
//     // let {page,limit}=req.query;
//     let page = +req.query.page;
//     let limit = +req.query.limit;
   
//     // console.log(req.query);
//     // console.log(page,limit);
//     if (!page) page = 0;
//     if (!limit) limit = 10;
//     // const skip = (page) * 10;
//     const skip = page * limit

//     const userdata = await User.find().skip(skip).limit(limit);
//     // const count=userdata.length;
//     // console.log(count);
//     const count = await User.count()
//     console.log(count);
//     res.status(200).json({ limit: limit, page: page, user: userdata ,count});
    
//     //   res.send(userdata.length)
//   } catch (e) {
//     res.status(500).send(e);
//     res.send(e);
//   }
// }

// module.exports = {
//   adduser,
//   updateuser,
//   deleteuser,
//   deletealluser,
//   getuseralldata,
// };


import { Request, Response } from "express";
import { IUser, User } from "../models/useSchema";
import  validator=require("validator")

// Post user data
async function addUser(req: Request, res: Response | any ): Promise<void> {
  const user: IUser = new User(req.body);
  const fname: string = req.body.firstname;
  const lname:string=req.body.lastname;
  const email: string = req.body.email;
  const phone1: string = req.body.phone;
  const profile:string=req.body.profile
  console.log("phone",phone1);

  if (!fname) return res.status(400).send({ "message": "Enter User first name" });

  if (!lname) return res.status(400).send({ "message": "Enter User last name" });

  // if (isNaN("")) return res.status(400).send({ "message": "Enter User last name" });

  if (!email)  return res.status(400).send({ "message": "Enter User email" });

  if (!profile)  return res.status(400).send({ "message": "Enter User profile" });

  if (!phone1) return res.status(400).send({ "message": "Enter User phone number" });

  if (!validator.isEmail(email)) return res.status(400).send({ "message": "Enter valid email" });

 

  if (!validator.isLength(phone1, 6, 10)) return res.status(400).send({ "message": "Enter valid Phone number" });

  if (isNaN(Number(phone1))) return res.status(400).send({ "message": "Enter Numeric phone data .." });

  if (!validator.isMobilePhone(phone1)) return res.status(400).send({ "message": "Enter valid phone number" })
   const findemail = await User.findOne({ email });
   if (findemail){
   console.log("findemail",findemail);
   return res.status(404).send({ message: "Email Already Exist!!" });}
   
   const phone=req.body.phone
   const findphone = await User.findOne({ phone });
   if (findphone){
    console.log("fingphone",findphone);
   return res.status(404).send({ message: "Phone Number Already Exist!!" });}

    try {
       await user.save()
        return res.status(201).send(user);
     }
     catch(e){
        return res.status(500).send({"message":"this is internal server error"})
       }
   
   }

async function updateUser(req: Request, res: Response | any): Promise<void> {
  try {
    const _id: string = req.body._id;
    const updatedData = await User.findByIdAndUpdate(_id, req.body);
   return res.status(200).send(updatedData);
    // console.log("updated");
  } catch (e) {
   return res.status(400).send({ message: "id is not a match" });
  }
}

async function deleteUser(req: Request, res: Response| any): Promise<void> {
  try {
    const _id: string = req.body._id;
    const deletedData = await User.findByIdAndDelete(_id);
    const data=await User.find()
   return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send({ message: "id is not a match" });
  }
}

// Delete all users
async function deleteAllUsers(req: Request, res: Response | any): Promise<void> {
  try {
    const deletedData = await User.deleteMany();
    return res.status(200).send(deletedData);
  } catch (e) {
    return res.status(400).send(e);
  }
}

// Get all user data
 async function getAllUserData(req: Request, res: Response| any): Promise<void> {
   try {
     let page: number = +req.query.page;
     let limit: number = +req.query.limit;

     if (!page) page = 0;
     if (!limit) limit = 10;

     const skip = page * limit;

     const userData = await User.find().skip(skip).limit(limit);
     const count = await User.countDocuments();

    return res.status(200).json({ limit, page, user: userData, count });
   } catch (e) {
    return res.status(500).send(e);
   }
 }

export {
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getAllUserData
 
};

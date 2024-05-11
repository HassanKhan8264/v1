import { Request, Response } from 'express';
// const userModel = require("./../../models/schema");
// const mongoose = require("mongoose");
// const { ObjectId } = require("mongoose").Types;
// const db = require("./../../db");
import { model } from "../../models/userSchema";
import db from './../../db'
import mongoose, { ObjectId } from "mongoose";
// import {Request, Response} from 'express'
export class UserCtrl {

     public createUser = async (req:Request, res:Response) => {
        console.log("API is working");
        try {
            const { name, email, phone, password, data } = req.body;
            const userData = new model({
                name,
                email,
                phone,
                password,
                data
           
            });
            await userData.save();
            res
                .status(201)
                .json({ message: "User created successfully", user: userData });
        } catch (err) {
            console.error(err);
            if (err.name === "ValidationError") {
                res
                    .status(400)
                    .json({ error: "Validation Error", message: err.message });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    };

}
// let UserCtrl = (function () {

//   const getAll = async (req, res) => {
//     console.log("getting...");
//     try {
//       userModel
//         .find()
//         .then((users) => {
//           console.log(users);
//           res.json( users);
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({ error: "Internal Server Error" });
//         });
//     } catch (err) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   const getUser = async (req, res) => {
//     let id = req.params.id;
//     console.log("getting...");
//     try {
//       userModel
//         .findOne({ _id: id })
//         .then((user) => {
//           console.log("got it", user);
//           res.json(user);
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({ error: "Internal Server Error" });
//         });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   const updateUser = async (req, res) => {
//     const userId = req.params.id;
//     const { username, password } = req.body;
//     console.log("finding...");
//     try {
//       userModel
//         .findById(userId)
//         .then(async (userFound) => {
//           console.log(userFound);
//           if (!userFound) {
//             return res.status(404).json({ error: "User not found" });
//           }
//           userFound.username = username;
//           userFound.password = password;
//           await userFound.save();
//           console.log("user updated successfully");
//           return res.status(200).json({ message: "User updated successfully" });
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({ error: "Internal Server Error" });
//         });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   const deleteOne = async (req, res) => {
//     let id = req.params.id;
//     console.log("deleting...");
//     try {
//       userModel
//         .findOneAndDelete({ _id: id })
//         .then(async (userFound) => {
//           console.log(userFound);
//           if (!userFound) {
//             return res.status(404).json({ error: "User not found" });
//           }
//           console.log("user updated successfully");
//           return res.status(200).json({ mes: "Delete Success" });
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({ error: "Internal Server Error" });
//         });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   const deleteAll = async (req, res) => {
//     console.log("deleting...");
//     try {
//       let allusers = await userModel.deleteMany({});
//       if (allusers.deletedCount === 0) {
//         return res
//           .status(400)
//           .json({ error: "No users found in the database" });
//       }
//       console.log("deleted");
//       res.status(200).json({ message: "Deleted all users" });
//     } catch (err) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   return {
//     createUser,
//     deleteAll,
//     getAll,
//     getUser,
//     updateUser,
//     deleteOne,
//   };
// })();

// module.exports = UserCtrl;

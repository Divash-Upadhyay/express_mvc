const express=require("express")

const User= require("../models/user.model");
const crudController = require("./crud.controller");
const app= express();


app.post("",crudController(User).post);

// app.post("", async (req, res) => {
//     try {
//       const students = await Student.create(req.body);
  
//       return res.send(students);
//     } catch (err) {
//       return res.status(500).send(err.message);
//     }
//   });
  
  app.get("", async (req, res) => {
    try {
      const students = await Student.find().lean().exec();
  
      return res.send(students);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  module.exports=app;       
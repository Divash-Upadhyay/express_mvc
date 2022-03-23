const express = require("express");

// const Student= require("./models/student.model")
// const Batch= require("./models/batch.model")
// const Evaluation= require("./models/evaluation.model")
// const submission=require("./models/submission.model")

const app = express();
app.use(express.json());


const usersController= require("./controllers/user.controller")

app.use("/users",usersController);



module.exports =app;
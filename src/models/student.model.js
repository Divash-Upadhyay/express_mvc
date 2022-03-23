const mongoose=require("mongoose");




const studentSchema = new mongoose.Schema(
    {
      roll_id: { type: Number, require: true },
      curentbatch: { type: String, require: true },
      
    },
    {
        versionKey: false,
        timestamps:true,
    },
  );
  
  module.exports = mongoose.model("student", studentSchema);
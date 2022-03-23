const mongoose=require("mongoose");

const batchSchema = new mongoose.Schema(
    {
      
      batch_name: { type: String, require: true },
      
    },
    {
        versionKey: false,
        timestamps:true,
    },
  );
  
  // make user model
  module.exports = mongoose.model("batch", batchSchema);
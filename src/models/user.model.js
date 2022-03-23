const mongoose=require("mongoose");

const userSchema = new mongoose.Schema(
    {
      id: { type: Number, require: true },
      first_name: { type: String, require: true },
      last_name: { type: String, require: true },
      genders: { type: String, require: true, default: "male" },
      DOB: { type: String, require: true },
    },
    {
        versionKey: false,
        timestamps:true,
    },
  );
  
  // make user model
  const User = mongoose.model("user", userSchema);
  
  module.exports=User
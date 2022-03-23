const mongoose=require("mongoose");


const evaluationSchema = new mongoose.Schema(
    {
      dateofevaluation: { type: String, require: true },
      instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  // make user model
  module.exports = mongoose.model("evaluation", evaluationSchema);
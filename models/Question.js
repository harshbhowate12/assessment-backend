import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

const Question = mongoose.model("Question", questionSchema);
export default Question;
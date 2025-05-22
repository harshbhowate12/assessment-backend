import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  answers: [
    {
      questionId: Number,
      selectedOption: String,
    },
  ],
  submittedAt: { type: Date, default: Date.now },
});

const Response = mongoose.model("Response", responseSchema);
export default Response;
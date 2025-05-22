import express from "express";
import Response from "../models/Response.js";
import Question from "../models/Question.js";

const router = express.Router();

// GET all users who submitted the assessment
router.get("/responses", async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch responses" });
  }
});

// GET a user's answers and score
router.get("/score/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await Response.findOne({ userId });
    if (!response) return res.status(404).json({ error: "Response not found" });

    const questions = await Question.find();
    let score = 0;

    response.answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question && question.correctAnswer === answer.selectedOption) {
        score++;
      }
    });

    res.json({ userId, answers: response.answers, score });
  } catch (err) {
    res.status(500).json({ error: "Failed to calculate score" });
  }
});

export default router;
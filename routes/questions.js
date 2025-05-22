import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// GET all questions (limit to 10)
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().limit(10);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

export default router;
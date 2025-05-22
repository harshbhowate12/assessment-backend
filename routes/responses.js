import express from "express";
import Response from "../models/Response.js";

const router = express.Router();

// POST submit assessment response
router.post("/submit", async (req, res) => {
  const { userId, answers } = req.body;

  try {
    const existing = await Response.findOne({ userId });
    if (existing) {
      return res.status(400).json({ error: "User has already submitted the assessment." });
    }

    const newResponse = new Response({ userId, answers });
    await newResponse.save();

    res.status(201).json({ message: "Assessment submitted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Submission failed." });
  }
});

export default router;

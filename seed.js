import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js"; // Adjust path if needed

dotenv.config();

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 4,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Charles Dickens"],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
    correctAnswer: "Oxygen",
  },
  {
    id: 6,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "Russia"],
    correctAnswer: "Brazil",
  },
  {
    id: 7,
    question: "What is the currency of Japan?",
    options: ["Dollar", "Euro", "Yen", "Peso"],
    correctAnswer: "Yen",
  },
  {
    id: 8,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: 9,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    id: 10,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Question.deleteMany({}); // Clear existing questions
    await Question.insertMany(questions);
    console.log("Questions seeded");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error(err);
  });

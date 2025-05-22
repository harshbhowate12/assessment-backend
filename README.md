# Assessment Application - Backend

This is the **Backend** for the Assessment Application built using **Node.js**, **Express**, and **MongoDB**. It serves APIs to fetch questions and submit responses.

## 🚀 Live Deployment

🌐 Backend deployed on: [Render Link Here](https://your-backend.onrender.com)

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- Body-parser

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js and MongoDB installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assessment-backend.git
   cd assessment-backend

2. Install dependencies:

   npm install


3. Create a .env file:

   MONGODB_URI=your_mongodb_connection_string
   PORT=5001   

4. Start the Server

   npm start   

## API Endpoints
- GET /api/questions
Returns a list of questions.

- POST /api/responses/submit
Submits user's answers.
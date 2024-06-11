const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyA7BYYHTk7DOxI-k4KD-5wNDvL8qtqvkc0");

const cors = require("cors");
const app = express();
const port = 5100;

app.use(cors());


app.use(cors());

app.use(express.json());

app.post("/generate", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = (req.body.prompt)

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text)

  res.json({ text });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

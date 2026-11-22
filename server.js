import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get("/hello", (req, res) => {
  res.send("Hello from Backend!");
});

app.get("/api/data", (req, res) => {
  res.json([{
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  },
{
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  },
  {
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  },
  {
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  },
{
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  },
{
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  },
{
    course: "Full Stack",
    lesson: 9,
    topics: ["Node.js", "Express"]
  }]);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});

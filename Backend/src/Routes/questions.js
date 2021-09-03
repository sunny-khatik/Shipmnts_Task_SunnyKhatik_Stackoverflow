const route = require("express").Router();
const Models = require("../Models");
const auth = require("../Middleware");

route.post("/create", async (req, res) => {
  try {
    const question = new Models.Questions(req.body);
    await question.save();
    res.status(201).json({
      message: "Question Created Successfully!!",
    });
  } catch (error) {
    console.log("Error from POST /questions/create");
    console.log(error);
    res.status(400).json({ error });
  }
});

route.patch("/edit", async (req, res) => {
  try {
    const question = await Models.Questions.findById(req.body.question_id);
    question.title = req.body.title;
    question.body = req.body.body;
    question.tags = req.body.tags;
    await question.save();
    res.status(200).json({
      message: "Question Updated Successfully!!",
    });
  } catch (error) {
    console.log("Error from PATCH /questions/edit");
    console.log(error);
    res.status(400).json({ error });
  }
});

route.get("/all", async (req, res) => {
  try {
    const questions = await Models.Questions.find({});
    const returnQuestions = [];
    for (let i = 0; i < questions.length; i++) {
      const title = questions[i].title;
      const user = await Models.Users.findById(questions[i].user_id);
      const username = user.username;
      returnQuestions.push({
        title,
        username,
        question_id: questions[i]._id,
      });
    }
    res.status(200).json({
      questions: returnQuestions,
    });
  } catch (error) {
    console.log("Error from GET /questions/all");
    console.log(error);
    res.status(400).json({ error });
  }
});

route.get("/question/:id", async (req, res) => {
  try {
    const question = await Models.Questions.findById(req.params.id);
    res.status(200).json({
      question,
    });
  } catch (error) {
    console.log("Error from GET /questions/question/id");
    console.log(error);
    res.status(400).json({ error });
  }
});

route.post("/answer/add", async (req, res) => {
  try {
    const question = await Models.Questions.findById(req.body.question_id);
    const user_id = req.body.user_id;
    const answer = req.body.answer;
    question.answers.push({
      user_id,
      answer,
    });
    await question.save();
    res.status(200).json({
      message: "Answer added successfully!!",
    });
  } catch (error) {
    console.log("Error from GET /questions/answer/add");
    console.log(error);
    res.status(400).json({ error });
  }
});

route.post("/answer/accept", async (req, res) => {
  try {
    const question = await Models.Questions.findById(req.body.question_id);
    const answers = question.answers;
    for (let i = 0; i < answers.length; i++) {
      const answer_id = answers[i]._id.toString();
      if (answer_id === req.body.answer_id) {
        answers[i].isAccepted = true;
      }
    }
    question.answers = answers;
    await question.save();
    res.status(200).json({
      message: "Answer accepted!!",
    });
  } catch (error) {
    console.log("Error from POST /questions/answer/add");
    console.log(error);
    res.status(400).json({ error });
  }
});

module.exports = route;

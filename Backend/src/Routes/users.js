const route = require("express").Router();
const Models = require("../Models");
const jwt = require("jsonwebtoken");

route.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    let user = await Models.Users.findOne({ username });
    if (!user) {
      user = new Models.Users(req.body);
    }
    const token = jwt.sign({ _id: user._id.toString() }, "adksjkd");
    user.token = token;
    await user.save();
    res.status(200).json({
      message: "You are succesfully logged in",
      token,
      username,
      user_id: user._id,
    });
  } catch (error) {
    console.log("Error from '/users/login");
    console.log(error);
    res.status(500).json({ error });
  }
});

module.exports = route;

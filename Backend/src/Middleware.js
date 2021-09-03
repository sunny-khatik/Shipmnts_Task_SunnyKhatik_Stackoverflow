const jwt = require("jsonwebtoken");
const Models = require("./Models");

const auth = async (req, res, next) => {
  try {
    const token = req.header("AuthToken");
    const decoded = jwt.verify(token, "adksjkd");
    const user = await Models.Users.findOne({ _id: decoded._id, token: token });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate." });
  }
};

module.exports = auth;

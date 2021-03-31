const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
var ValidationError = mongoose.Error.ValidationError;
var ValidatorError = mongoose.Error.ValidatorError;

module.exports = async function (res, body, user) {
  const validPassword = await bcrypt.compare(body.password, user.password);
  const jwtToken = jwt.sign(
    { user: body.username },
    process.env.JWT_TOKEN_KEY,
    { expiresIn: "10h" }
  );
  if (validPassword) {
    res.status(200).json({ db_id: user.db_id, jwtToken: jwtToken });
  } else {
    res
      .status(400)
      .json({ messages: ["Password Not Valid!"], fields: ["password"] });
  }
};
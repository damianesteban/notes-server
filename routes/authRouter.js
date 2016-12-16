const express = require('express');
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/authorization", (req, res) => {
  let user = req.body;
  if (user.username === "valid_user" && user.password === "password") {
    let token = jwt.sign(user, "super_secret_key", {
      expiresIn: 60 
    });
    res.status(200).send({ username: user.username, token: token });
  } else {
    res.status(401).send({ message: 'Authentication failed.' });
  }
});

module.exports = authRouter
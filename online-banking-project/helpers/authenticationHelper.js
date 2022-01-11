const jwt = require("jsonwebtoken");

/**
 * Generates the token
 * @param {*} user
 * @returns
 */

exports.generateToken = (user) => {
  return jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
};

//there is also a callback option making it async for when many tokens have to be given at the same time

exports.deleteToken = (user) => {
  return jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1s",
  });
};

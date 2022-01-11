const { body, validationResult } = require("express-validator");

module.exports.userValidation = [
  body("PIN").isLength({ min: 4, max: 4 }),
  function (req, res, next) {
    // console.log("jaj");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ title: "Validation errors PIN", error: errors });
    }
    next();
  },
];

const express = require("express");
const passport = require("passport");
const controller = require("../controllers/userController");
const { userValidator, sanitizeUser } = require("../middleware/userValidation");

const router = express.Router();

router.post("/register", userValidator, sanitizeUser, controller.registerUser);
router.post("/login", controller.login);
router.get("/logout", controller.logout);

router.use(passport.authenticate("jwt", { session: false }));

router.post("/transaction", controller.transaction);
router.get("/history", controller.transactionHistory);
router.post("/balance", controller.accountBalance);
router.patch("/update", controller.updateUser);
router.delete("/delete", controller.deleteUser);

module.exports = router;

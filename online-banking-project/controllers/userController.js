const bcrypt = require("bcrypt");
const User = require("./../models/User");
const authenticationHelper = require("./../helpers/authenticationHelper");
const balanceMath = require("./../helpers/balanceMath");

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User();

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = hashedPassword;
    user.PIN = req.body.PIN;

    await user.save();

    return res.status(200).json({ message: "User Created" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong creating the user", error });
  }
};
exports.login = async (req, res) => {
  // const jwt = authenticationHelper.generateToken();
  const user = await User.findOne({ email: req.body.email, PIN: req.body.PIN });

  if (user == null) {
    return res
      .status(404)
      .json({ message: "User with that email and/or PIN was not found" });
  }

  try {
    var checkPassword = await bcrypt.compare(req.body.password, user.password);

    if (checkPassword) {
      //password is matching
      //Generate JWT token here
      const token = authenticationHelper.generateToken(user);

      return res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        })
        .json({ message: "login successful!", token });
    } else {
      return res.status(400).json({ message: "Passwords not matching" });
    }
  } catch (error) {
    console.log("the error ", error);
    return res.status(400).json({ message: "General error upon signing in." });
  }
};

exports.accountBalance = async (req, res) => {
  const { body } = req;

  try {
    //verify first
    const balanceToUpdate = await User.findByIdAndUpdate(
      req.user._id,
      {
        // email: body.email,
        accountBalance: balanceMath.balanceCalculator(
          req.user,
          body.accountBalance
        ),
      },
      { new: true }
    );

    if (!balanceToUpdate)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      message: "Your new account balance is:",
      balanceToUpdate,
    });
  } catch (error) {
    return res.status(400).json({ message: "Error happened" });
  }
};

exports.updateUser = async (req, res) => {
  const { body } = req;

  try {
    //verify first
    const userToUpdate = await User.findByIdAndUpdate(
      req.user._id,
      {
        email: body.email,
      },
      { new: true }
    );

    if (!userToUpdate)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      message: "Your updated account is:",
      userToUpdate,
    });
  } catch (error) {
    return res.status(400).json({ message: "Update Error happened" });
  }
};

exports.deleteUser = async (req, res) => {
  const { body } = req;

  try {
    //verify first
    const userToUpdate = await User.findByIdAndDelete(req.user._id);

    if (!userToUpdate)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      message: "Your account is deleted",
    });
  } catch (error) {
    return res.status(400).json({ message: "Delete Error happened" });
  }
};

exports.logout = async (req, res) => {
  console.log("llaallo");
  try {
    const user = await User.findById(
      req.body.user._id

      // { new: true }
    );

    res.clearCookie("jwt");

    //const timeOutToken = authenticationHelper.deleteToken(user);
    console.log(timeOutToken);
    //return res.status(200).json({ token: timeOutToken });
  } catch {
    res
      .status(400)
      .json({ error: "Logout did not work, please logout again." });
  }
};

const { PinEncryptor } = require("pin-encryptor");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const Transaction = require("./../models/Transaction");
const authenticationHelper = require("./../helpers/authenticationHelper");
const balanceMath = require("./../helpers/balanceMath");
const accountNumberHelper = require("./../helpers/accountNumberHelper");
const transactionsMath = require("./../helpers/transactionsMath");

exports.registerUser = async (req, res) => {
  console.log("hello");
  /*  console.log(req.body.PIN); */

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const PIN = req.body.PIN;
    // console.log(PIN);
    const formattedPIN = await PinEncryptor.format2(PIN.toString());
    const hashedPIN = await bcrypt.hash(formattedPIN, 10);
    /* console.log(p, p.length); */
    const accountNum = await accountNumberHelper.accountNumCreator();
    console.log(accountNum);

    const user = await new User();

    user.lastname = req.body.lastname;
    user.firstname = req.body.firstname;
    user.email = req.body.email;
    user.password = hashedPassword;
    user.PIN = hashedPIN;
    user.accountNumber = accountNum;

    await user.save();
    return res.status(200).json({ message: "User Created", user });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Something went wrong creating the user", error });
  }
};
exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user == null) {
    return res
      .status(404)
      .json({ message: "User with that email and/or PIN was not found" });
  }

  try {
    let checkPassword = await bcrypt.compare(req.body.password, user.password);
    let checkPIN = await bcrypt.compare(
      PinEncryptor.format2(req.body.PIN.toString()),
      user.PIN
    );

    if (checkPassword && checkPIN) {
      const token = authenticationHelper.generateToken(user);

      return res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        })
        .json({ message: "login successful!", token, user });
    } else {
      return res
        .status(400)
        .json({ message: "Passwords and/or PIN not matching" });
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
          body.changeAccountBalance
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
  try {
    res.clearCookie("jwt").json({ message: "you are logged out now!" });
  } catch {
    res
      .status(400)
      .json({ error: "Logout did not work, please logout again." });
  }
};

exports.transaction = async (req, res) => {
  const { body } = req;

  try {
    const recipient = await User.findOne({ accountNumber: body.accountNumber });

    if (recipient == null) {
      res.status(400).json({
        message:
          "User with this account number does not exist, please try again.",
      });
    }

    await recipient.updateOne({
      accountBalance: transactionsMath.transactionRecipientBalance(
        recipient,
        Number(body.transmittedValue)
      ),
    });

    // const recipient = await User.findOneAndUpdate(body.accountNumber, {
    //   accountBalance: transactionsMath.transactionRecipientBalance(
    //     req.user,
    //     body.transmittedValue
    //   ),
    // });

    const sender = await User.findByIdAndUpdate(req.user._id, {
      accountBalance: transactionsMath.transactionSenderBalance(
        req.user,
        body.transmittedValue
      ),
    }); //.populate("firstname lastname");

    const transaction = await Transaction.create({
      transmittedValue: body.transmittedValue,
      recipient: recipient._id,
      sender: req.user._id,
    });
    console.log(req.user._id);
    res.status(200).json({
      message: "Transaction completed!",
      transaction,
      sender,
      recipient,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Transaction not possible" });
  }
};

exports.transactionHistory = async (req, res) => {
  try {
    const historyAsRecipient = await Transaction.find({ recipient: req.user._id }).populate({ path: "sender", select: "firstname lastname accountNumber" });
    const historyAsSender = await Transaction.find({ sender: req.user._id}).populate({ path: "recipient", select: "firstname lastname accountNumber" });
    const transactions = historyAsRecipient.concat(historyAsSender);

    const sortedTransactions = transactions.sort((a, b) => {
      if (a.createdOn < b.createdOn ){
        return 1;
      }

      return -1;
    });

    res.status(200).json(sortedTransactions);
  } catch (err) {
    res.status(400).json({
      Error: "Transaction history not accessible, please contact us.",
      err,
    });
  }
};

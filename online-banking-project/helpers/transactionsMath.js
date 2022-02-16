const { json } = require("express/lib/response");

//* transaction function that does not accept to transfer more money than available in the account of the sender

exports.transactionSenderBalance = (user, transmittedValue) => {
  let result;
  // transmittedValue = Number;

  user.accountBalance < transmittedValue || transmittedValue <= 0
    ? (result = user.accountBalance)
    : (result = user.accountBalance -= transmittedValue);
  return result;
};

exports.transactionRecipientBalance = (user, transmittedValue) => {
  const balance = (user.accountBalance += transmittedValue);
  return balance;
};

//* write a helper that prevents negative numbers for the transaction of the sender
// * also prevent from going negative

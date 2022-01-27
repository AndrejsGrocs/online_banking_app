exports.transactionSenderBalance = (user, transmittedValue) => {
  const balance = (user.accountBalance -= transmittedValue);
  return balance;
};

exports.transactionRecipientBalance = (user, transmittedValue) => {
  const balance = (user.accountBalance += transmittedValue);
  return balance;
};

//* write a helper that prevents negative numbers for the transaction of the sender
// * also prevent from going negative

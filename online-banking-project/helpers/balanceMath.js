exports.balanceCalculator = (user, accountBalance) => {
  const balance = (user.accountBalance += accountBalance);
  return balance;
};

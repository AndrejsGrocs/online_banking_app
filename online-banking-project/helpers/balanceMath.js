exports.balanceCalculator = (user, changeAccountBalance) => {
  const balance = (user.accountBalance += changeAccountBalance);
  return balance;
};

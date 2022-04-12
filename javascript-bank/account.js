/* exported Account */

function Account(number, holder, startingBalance) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
  this.deposit(startingBalance);
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }
  this.transactions.push(new Transaction('deposit', amount));
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }
  this.transactions.push(new Transaction('withdrawal', amount));
  return true;
};

Account.prototype.getBalance = function () {
  if (!this.transactions.length) {
    return 0;
  }
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  this.balance = balance;
  return this.balance;
};

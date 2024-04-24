const bankAccount = {
  _balance: 1000,

  get formattedBalance() {
    return `$${this._balance}`;
  },

  set balance(newBalance) {
    this._balance = newBalance;
  },

  transfer(targetAccount, amount) {
    if (amount <= 0 || amount > this._balance) {
      console.log('Invalid transfer amount');
      return;
    }
    this._balance -= amount;
    targetAccount._balance += amount; // Use the balance setter directly
    console.log(`Transferred $${amount} to target account.`);
  },
};

// Create two separate instances of bankAccount

const myAccount = Object.create(bankAccount);
const friendAccount = Object.create(bankAccount);

module.exports = {
  myAccount,
  friendAccount
}

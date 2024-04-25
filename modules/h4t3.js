const bankAccount = {
  _balance: 1000,

  get formattedBalance() {
    return `$${this._balance}`;
  },

  set balance(newBalance) {
    this._balance = newBalance;
  },

  transfer(sourceAccount, targetAccount, amount) {
    if (amount <= 0 || amount > sourceAccount._balance) {
      console.log('Invalid transfer amount or insufficient funds');
      return;
    }
    sourceAccount._balance -= amount;
    targetAccount._balance += amount;
    console.log(
      `Transferred $${amount} from ${sourceAccount.name} to ${targetAccount.name}.`,
    );
  },
};

// Create two separate instances of bankAccount

const myAccount = Object.create(bankAccount);
myAccount.name = "My Account"
const friendAccount = Object.create(bankAccount);
friendAccount.name = "Friend Account"

module.exports = {
  bankAccount,
  myAccount,
  friendAccount,
};

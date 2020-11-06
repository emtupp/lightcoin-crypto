class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
};

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

};

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

};

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
};




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected


const user1 = new Account('user1');

t1 = new Withdrawal(50.25, user1);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, user1);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, user1);
t3.commit();
console.log('Transaction 3:', t3)

console.log('user1 balance:', user1.balance);

// FEATURES:
// Allow multiple accounts to be created
// Each account can have many transactions
// Allow withdrawals and deposits into accounts
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
// Allow us to retrieve the current balance of the account at any time
// Don't allow withdrawals that exceed the remaining balance of the account

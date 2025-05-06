{
  // Access Modifier

  class BankAccount {
    public readonly id: number; // readonly use --> etar value change kora jabe na. You cann't write its value.
    public name: string;
    protected _balance: number; // making it private, so it can't be accessed outside the class.
    // _balance ->> conventionally used for private properties
    // Using protected instead of private to use balance in child class // _balance

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // accessing the balance insiding the class using methode
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    private getBalance() {
      return `Balance: ${this._balance}`;
    }
    getHiddenBalance() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    // Using protected instead of private to use balance in child class // _balance

    test() {
      this._balance; // accessing the balance insiding the class using methode
    }
  }
  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
  //   goribManusherAccount.balance = 0; // access modifier

  goribManusherAccount.addDeposit(20);
  //   const myBalance = goribManusherAccount.getBalance();
  const myBalance = goribManusherAccount.getHiddenBalance();
  console.log(myBalance);

  // here we cant access the private method getBalance() outside the class
  // to access the private method we need to create a public method inside the class and call it from there.
}

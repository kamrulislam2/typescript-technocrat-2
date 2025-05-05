{
  // Getter and Setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // accessing the balance insiding the class using methode
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // We will use setter instead of this method
    set balance(amount: number) {
      this._balance = this.balance + amount;
    }

    // getBalance() {
    //   return `Balance: ${this._balance}`;
    // }

    // We will use getter instead of this method
    get balance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance; // accessing the balance insiding the class using methode
    }
  }
  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 50);
  // goribManusherAccount.balance = 0; // access modifier

  // goribManusherAccount.addDeposit(20); // Function call korte hocche // for depositing money
  // const myBalance = goribManusherAccount.getBalance(); // Function call korte hocche // for getting balance
  const myBalance = goribManusherAccount.balance; // using getter for getting balance like a property
  goribManusherAccount.balance = 80;
  console.log(myBalance);
}

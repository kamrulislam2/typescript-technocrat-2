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

    set balance(amount: number) {
      this._balance = this.balance + amount;
    }

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

  const myBalance = goribManusherAccount.balance;
  goribManusherAccount.balance = 80;
  console.log(myBalance);
}

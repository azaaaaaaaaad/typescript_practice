{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

//   class studentAccount extends BankAccount {
//     test(){
//         this.getBalance()
//     }
//   }


  const goribManuserAccount = new BankAccount(111, "x", 20);
  //   goribManuserAccount.balance = 3000;
  goribManuserAccount.addDeposit(3000);
  const myBalance = goribManuserAccount.getBalance()
  console.log(myBalance);

  //
}

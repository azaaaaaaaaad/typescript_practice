{
  // getter & setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter
    get balance() {
      return this._balance;
    }


    // setter

    set deposit (amount : number){
        this._balance = this._balance + amount
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManuserAccount = new BankAccount(111, "x", 50);
  //   goribManuserAccount.balance = 0;
  //   goribManuserAccount.addDeposit(3000); //need to call function
  //   const myBalance = goribManuserAccount.getBalance(); //need to call function

  goribManuserAccount.deposit = 100
  const myBalance = goribManuserAccount.balance;
  console.log(myBalance);

  //
}

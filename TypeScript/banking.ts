// Banking application 
interface BankAccount{
	AccountNo : number;
	AccountHolderName : string;
	Balance : number;
	BalanceCheck : () => void;
	Deposit : (amount : number) => void;
	Withdraw :(amount : number) => void;
	
}

class Transaction implements BankAccount{
	AccountNo : number;
	AccountHolderName : string;
	Balance : number;
	constructor(accno:number,name:string,bal:number){
		this.AccountNo=accno;
		this.AccountHolderName=name;
		this.Balance=bal;
	}
	 BalanceCheck() : void{
		 if(this.Balance<0){
			 console.log('Insufficient Balance Please Deposit')
		 }
		 else{
		console.log('The Balance is :'+this.Balance)
		 }
	}
	 Deposit( amount : number): void{
		this.Balance+=amount;
		console.log('Amount of '+amount+' Deposited Successfully');
		console.log('The Balance is :'+this.Balance)
		
	}
	 Withdraw(amount  :number): void{
		 if (amount>this.Balance){
			 console.log('Not Enough Balance')
		 }
		 else{
		this.Balance-=amount;
		console.log('Amount of '+amount+' withdrawn Successfully');
		console.log('The Balance is :'+this.Balance)
		 }
		
	}
}
let t1 =  new Transaction(1001,'Vishal Singh',0);
t1.BalanceCheck();
t1.Deposit(5000);
t1.Withdraw(3000);
t1.Withdraw(2500);
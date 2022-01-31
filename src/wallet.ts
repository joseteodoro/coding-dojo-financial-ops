type MessagensProps = {
    type: string,
    owner?: string,
    balance?: number,
    value?: number   
} 


export default class Wallet{
    balance: number 
    operations: any[]
    constructor({ balance=0 }:MessagensProps){
        this.balance = balance 
        this.operations = []
        
    }


    static sumOps (messages:MessagensProps[]): (type: string) => number {
        return (type : String) => {
            const creditOperation =  messages.filter((oper)=> oper.type === type)
            return  creditOperation.reduce((acc, oper) => {
            return acc + (oper.value || 0)
            },0)
        }
    }
    
    static  sumCredit(messages:MessagensProps[]):number{
        const creditOperation:MessagensProps[] =  messages.filter((oper)=> oper.type === "credit")
        return  creditOperation.reduce((acc, oper) => {
           return acc + (oper.value || 0)
       },0)
       
    }
    
    static of(messages:MessagensProps[]): Wallet {
        let wallet : Wallet = {balance:0, operations:[]};
        if (messages[0].type === "create") {
            wallet =  new Wallet(messages[0]) 
        }

        const curriedFunction = Wallet.sumOps(messages);
        const [credits, debits] = ["credit", "debit"].map(curriedFunction);
        wallet.balance = wallet.balance + credits - debits;
        return wallet
  }
}
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
    
    static  sumCredit(messages:MessagensProps[]):number{
        const creditOperation:MessagensProps[] =  messages.filter((oper)=> oper.type === "credit")
        return  creditOperation.reduce((acc, oper) => {
           return acc + (oper.value || 0)
       },0)
       
    }
    
    static of(messages:MessagensProps[]): Wallet {
        let wallet : Wallet = {balance:0, operations:[]};
        
       messages.forEach((message)=> {
            if (message.type === "create") {
                wallet =  new Wallet(message ) 
            }
            if (message.type === "credit"){
            wallet.balance += Wallet.sumCredit(messages)
            }
            if (message.type === "debit"){
                wallet.balance -= Wallet.sumCredit(messages)
            }
       })     
        return wallet 
            
  }
}
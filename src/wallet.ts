type MessagensProps = {
    type: string,
    owner?: string,
    balance?: number,
    value?: number,    
} 

export default class Wallet{
    balance: number 
    operations: any[]
    constructor({ balance=0 }:MessagensProps){
        this.balance = balance 
        this.operations = []
        
    }
    //static create(){}
    
    static of(messages:MessagensProps[]): Wallet {
       
       if (messages[0].type === "create") {
          return new Wallet({...messages[0]})
          
       } 
       return {balance:0, operations:[]}
    }
}
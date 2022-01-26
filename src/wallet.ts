type MessagensProps = {
    type: string,
    owner: string,
    balance: number,
} 

export default class Wallet{
    balance: number 
    constructor({type, owner, balance }:MessagensProps){
        this.balance = balance 
        
    }
    
    static of(messages:MessagensProps[]): Wallet{
       
       if (messages[0].type === "create") {
          return new Wallet({balance:0, ...messages[0]})
          
       } 
       return null
    }
}
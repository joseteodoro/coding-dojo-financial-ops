const trx = [
    {"type": "credit", "value": 1000 },
    {"type": "debit", "value": 100 },
    {"type": "credit", "value": 100 },
    {"type": "debit", "value": 950 }
]

const sumCredit = (messages) => {
    return (type) => {
        const creditOperation =  messages.filter((oper)=> oper.type === type)
        return  creditOperation.reduce((acc, oper) => {
        return acc + (oper.value || 0)
        },0)
    }
}

const curriedFunction = sumCredit(trx)
const [credits, debits] = ["credit", "debit"].map(curriedFunction)
console.log({ credits, debits })
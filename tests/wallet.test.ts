import { expect } from 'chai';
import Wallet from '../src/wallet';
//import * as someBalanceSample from './some-balance-wallet.json';
//import * as noBalanceSample from './no-balance-wallet.json';

describe('wallet test suite', () => {
    describe("give a non existent wallet", () => {
        it('simple wallet creation should return balance zero', () => {
            const messages = [
                {type: "create", owner: "Mr. Banana"}
            ]
            const wallet: Wallet = Wallet.of(messages);
            expect(wallet.balance).to.be.equal(0);
        });
        it('wallet creation with initial balance should return non zero balance', () => {
            const messages = [
                {type: "create", owner: "Mr. Banana", balance: 1000}
            ]
            const wallet: Wallet = Wallet.of(messages);
            expect(wallet.balance).to.be.equal(1000);
            expect(wallet.operations).to.be.deep.equal([]);
            // expect(wallet.operations).to.be.deep.equal([{createdAt: "1341234981934", type: "credit", value: 1000}, ...]);
        });
    })
    describe("give an existent wallet", () => {
        it('credit a single operation should increase balance', () => {
            
        });
        it('credit more than one operation should increase balance', () => {

        });
        it('debit a single operation should decrease balance', () => {

        });
        it('debit more than one operation should decrease balance', () => {

        });
        it('debit operation without funds should failed and log the error, with no changes on balance', () => {

        });
        it('debit operations without funds should failed and log the error, with no changes on balance', () => {

        });
    })
    describe("given a lot of operations, should works properly", () => {
        it('create, credit and debit operations affects the balance', () => {
            const messages = [
                {type: "create", owner: "Mr. Banana", balance: 1000},
                {type: "credit", value: 100},
                {type: "debit", value: 100},
                {type: "credit", value: 100},
                {type: "debit", value: 100},
                {type: "credit", value: 100},
                {type: "credit", value: 100},
            ]
            const wallet: Wallet = Wallet.of(messages);
            expect(wallet.balance).to.be.equal(1200);
            expect(wallet.operations).to.be.deep.equal([
                {type: "credit", value: 1000},
                {type: "credit", value: 100},
                {type: "debit", value: 100},
                {type: "credit", value: 100},
                {type: "debit", value: 100},
                {type: "credit", value: 100},
                {type: "credit", value: 100},
            ]);
        });
        // it('should works properly with some balance', () => {
        //     const wallet: Wallet = Wallet.of(someBalanceSample.trx);
        //     expect(wallet.balance).to.be.equal(someBalanceSample.finalBalance);
        // });
        // it('should works properly with no balance', () => {
        //     const wallet: Wallet = Wallet.of(noBalanceSample.trx);
        //     expect(wallet.balance).to.be.equal(noBalanceSample.finalBalance);
        // });
        it('should work properly with credit',()=>{           
            const messages = [
                {type: "create", owner: "Mr. Banana", balance: 1000},
                {type: "credit", value: 100},               
            ]

            const wallet: Wallet = Wallet.of(messages);
            expect(wallet.balance).to.be.equal(1100);           
            
        })
    })
});
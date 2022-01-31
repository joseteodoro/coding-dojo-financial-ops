import { expect } from 'chai';
import Wallet from '../src/wallet';

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
});
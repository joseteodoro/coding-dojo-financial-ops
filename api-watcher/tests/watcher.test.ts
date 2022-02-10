import { expect } from 'chai'
import * as watcher from '../src/watcher'

describe('watcher test suite', () => {
    it('does nothing with an empty list', async () => {
        const results = await watcher.evaluateAll([])
        expect(results).to.be.deep.equal([])
    })

    it('return 404 for inexistant url and 200 for a valid url', async () => {
        const results = await watcher.evaluateAll(['https://stackoverflow.com/non-existent', 'http://google.com'])
        expect(results).to.be.deep.equal([{status: 404}, {status: 200}])
    })
    it('return dns error when hit an unreacheable server', async () => {
        const results = await watcher.evaluateAll(['https://hajskhdfkjashdjkfahsd.com', 'http://google.com'])
        expect(results).to.be.deep.equal([{status: undefined, error: 'Could not resolve host'}, {status: 200}])
    })
})
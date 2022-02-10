import { expect } from 'chai'
import * as watcher from '../src/watcher'

describe('watcher test suite', () => {
    it('does nothing with an empty list', async () => {
        const results = await watcher.evaluateAll([])
        expect(results).to.be.deep.equal([])
    })

    it('return 404 for inexistant url and 200 for a valid url', async () => {
        const results = await watcher.evaluateAll(['https://stackoverflow.com/non-existent', 'http://google.com'])
        expect(results).to.be.deep.equal([404, 200])
    })
})
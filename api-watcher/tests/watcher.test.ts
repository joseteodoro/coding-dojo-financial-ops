import { expect } from 'chai'
import * as watcher from '../src/watcher'

describe('watcher test suite', () => {
    it('does nothing with an empty list', () => {
        const results = watcher.evaluateAll([])
        expect(results).to.be.deep.equal([])
    })

    it('return 404 for inexistant url', () => {
        const results = watcher.evaluateAll(['http://lskc8093rnw3.com'])
        expect(results).to.be.deep.equal([404])
    })
})
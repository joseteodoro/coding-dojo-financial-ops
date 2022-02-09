import { expect } from 'chai'
import * as watcher from '../src/watcher'

describe('watcher test suite', () => {
    it('does nothing with an empty list', () => {
        const results = watcher.evaluateAll([])
        expect(results).to.be.deep.equal([])
    })
})
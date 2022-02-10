import { expect } from 'chai'
import * as fileLoader   from '../src/loader'


describe('Listagem de diretórios.', () => {
    it('Listar diretório vazio', async () => {
        const result = await fileLoader.load('./tests/sample/empyt')
        expect(result).to.be.deep.equal([])
    })

    it('Listar diretório válido', async () => {
        const result = await fileLoader.load('./tests/sample/valid')
        expect(result).to.be.deep.equal([{}])
    })
})
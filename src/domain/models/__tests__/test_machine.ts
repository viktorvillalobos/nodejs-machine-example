import { Machine } from '../../models/machine'


describe('Test Machine Model', () => {
    const id: number = null
    const name = "CustomMachine"
    const price = 100
    const markup = 0.25
    const machine = new Machine(id, name, price, markup)

    it('Machine is created', () => {
        expect(machine.name).toEqual(name)
        expect(machine.price).toEqual(price)
        expect(machine.markup).toEqual(markup)
    })

    it('Full price is correct', () => {
        expect(machine.fullPrice()).toEqual(price * markup)
    })
})
class Machine {
    id: number = null
    name: string
    price: number = 0
    markup: number = 0

    constructor(id: number = null, name: string, price: number, markup: number) {
        this.id = id
        this.name = name
        this.price = price
        this.markup = markup
    }

    fullPrice (): number  {
        return this.price * this.markup
    }
}

export {
    Machine
}
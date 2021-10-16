class Machine {
    name: string
    price: number = 0
    markup: number = 0

    constructor(name: string, price: number, markup: number) {
        this.name = name
        this.price = price
        this.markup = markup
    }

    FullPrice (): number  {
        return this.price * this.markup
    }
}

export {
    Machine
}
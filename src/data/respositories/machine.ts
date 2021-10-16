import { Machine } from '../../domain/models/machine'

interface IMachineRepository {
    getAll(): Machine[]
    add(machine: Machine): Machine
}


class InMemoryRepository implements IMachineRepository {
    table: Machine[]

    constructor(initialData: Machine[] = []) {
        this.table = initialData
    }

    getAll (): Machine[] {
        return this.table
    }

    add(machine: Machine): Machine {
        this.table.push(machine)
        return machine
    }
}

export {
    IMachineRepository,
    InMemoryRepository
}
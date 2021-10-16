import {IMachineRepository, InMemoryRepository} from '../../data/respositories/machine'
import { Machine } from '../models/machine'

class MachineService {
    repository: IMachineRepository

    constructor(repository: IMachineRepository) {
        this.repository = repository
    }

    getAll (): Machine[] {
        return this.repository.getAll()
    }

    add (machine: Machine): Machine {
        this.repository.add(machine)
        return machine
    }
}

export {
    MachineService
}
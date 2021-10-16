import {IMachineRepository, InMemoryRepository} from '../../data/respositories/machine'
import { Machine } from '../models/machine'

class MachineService {
    repository: IMachineRepository

    constructor(repository: IMachineRepository) {
        this.repository = repository
    }

    async getAll (): Promise<Machine[]> {
        return this.repository.getAll()
    }

    async add (machine: Machine): Promise<Machine> {
        await this.repository.add(machine)
        return machine
    }
}

export {
    MachineService
}
import { Machine } from "../../models/machine"
import { InMemoryRepository } from "../../../data/respositories/machine"
import { MachineService } from "../machines"


describe('Machines Services', () => {
    it('MachineService.getAll should return a list of Machines from InMemory providers', () => {
        const initialData = [
            new Machine("Excavators", 100, 0.25),
            new Machine("Bulldozers", 100, 0.25),
        ]
        const repository = new InMemoryRepository(initialData)
        const machineService = new MachineService(repository)
        const response = machineService.getAll()

        expect(response).toEqual(repository.getAll())
    })

    it('MachineService add a new Machine', () => {
        const repository = new InMemoryRepository()
        const service = new MachineService(repository)

        const baseResponse = service.getAll()

        expect(baseResponse).toEqual([])

        const newMachine = new Machine("NewMachine", 10.0, 0.25)
        service.add(newMachine)

        expect(service.getAll().length).toEqual(1)
    })

})
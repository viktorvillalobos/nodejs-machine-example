import { Machine } from "../../models/machine"
import { InMemoryRepository } from "../../../data/respositories/machine"
import { MachineService } from "../machines"


describe('Machines Services', () => {
    it('MachineService.getAll should return a list of Machines from InMemory providers', async () => {
        const initialData = [
            new Machine(1, "Excavators", 100, 0.25),
            new Machine(2, "Bulldozers", 100, 0.25),
        ]
        const repository = new InMemoryRepository(initialData)
        const machineService = new MachineService(repository)
        const serviceResponse = await machineService.getAll()

        const repositoryResponse = await repository.getAll()
        expect(serviceResponse).toEqual(repositoryResponse)
    })

    it('MachineService add a new Machine', async () => {
        const repository = new InMemoryRepository()
        const service = new MachineService(repository)

        const baseResponse = await service.getAll()

        expect(baseResponse).toEqual([])

        const newMachine = new Machine(3, "NewMachine", 10.0, 0.25)
        await service.add(newMachine)
        const expectedResponse = await service.getAll()
        expect(expectedResponse.length).toEqual(1)
    })

})
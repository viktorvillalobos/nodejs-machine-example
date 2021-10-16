import { Machine } from '../../../domain/models/machine'
import { InMemoryRepository } from "../machine"


describe('Test InMemoryMachine Repository', () => {
    it('getAll returns initial data', async () => {
        const initialData = [
            new Machine(1, "Backhoe", 100, 0.20),
            new Machine(2, "Graders", 120, 0.30)
        ]
        const repository = new InMemoryRepository(initialData)
        const response = await repository.getAll()

        expect(response).toEqual(initialData)
    })

    it('getAll returns an empty list when there arent initialData', async () => {
        const repository = new InMemoryRepository()
        const response = await repository.getAll()

        expect(response).toEqual([])
    })

    it('add sucessfully add a machine to the InMemoryTable', async () => {
        const repository = new InMemoryRepository()
        const response = await repository.getAll()

        // Now the table should be empty
        expect(response).toEqual([])

        // We add a new record
        const newMachine = new Machine(3, "Backhoe", 100, 0.20)
        await repository.add(newMachine)

        expect(response).toEqual([newMachine])
    })
})
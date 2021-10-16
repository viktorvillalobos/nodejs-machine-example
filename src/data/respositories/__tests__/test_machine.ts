import { Machine } from '../../../domain/models/machine'
import { InMemoryRepository } from "../machine"


describe('Test InMemoryMachine Repository', () => {
    it('getAll returns initial data', () => {
        const initialData = [
            new Machine("Backhoe", 100, 0.20),
            new Machine("Graders", 120, 0.30)
        ]
        const repository = new InMemoryRepository(initialData)
        const response = repository.getAll()

        expect(response).toEqual(initialData)
    })

    it('getAll returns an empty list when there arent initialData', () => {
        const repository = new InMemoryRepository()
        const response = repository.getAll()

        expect(response).toEqual([])
    })

    it('add sucessfully add a machine to the InMemoryTable', () => {
        const repository = new InMemoryRepository()
        const response = repository.getAll()

        // Now the table should be empty
        expect(response).toEqual([])

        // We add a new record
        const newMachine = new Machine("Backhoe", 100, 0.20)
        repository.add(newMachine)
    
        expect(response).toEqual([newMachine])
    })
})
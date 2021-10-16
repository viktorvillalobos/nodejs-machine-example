import express from "express"
import { MachineService } from "../domain/services/machines"
import { InMemoryRepository, PostgreSQLRepository } from "../data/respositories/machine"
import { Machine } from "../domain/models/machine"


const createNewHttpServer = (pool: any): express.Application => {
    const app = express()

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/inmemory/machines", async (req, res) => {
    // Some demo data to the InMemory DB
    const initialData = [
        new Machine(1, "Backhoe", 100, 0.20),
        new Machine(2, "Graders", 120, 0.30)
    ]

    const repository = new InMemoryRepository(initialData)
    const service = new MachineService(repository)
    const response = await service.getAll()

    res.json(response)
    })


    app.post("/inmemory/machines", async (req, res) => {
    const repository = new InMemoryRepository()
    const service = new MachineService(repository)

    const machine = new Machine(
        null,
        req.body.name,
        parseFloat(req.body.price),
        parseFloat(req.body.markup)
    )

    const response = await service.add(machine)

    res.json(response)
    })


    app.get("/postgres/machines", async (req, res) => {
    const repository = new PostgreSQLRepository(pool)
    const machineService = new MachineService(repository)
    const response = await machineService.getAll()
    res.json(response)
    })


    app.post("/postgres/machines", async (req, res) => {
    const repository = new PostgreSQLRepository(pool)
    const machineService = new MachineService(repository)

    const machine = new Machine(
        null,
        req.body.name,
        parseFloat(req.body.price),
        parseFloat(req.body.markup)
    )

    const responseMachine = await machineService.add(machine)

    res.json(responseMachine)
    })

    return app
}

export {
    createNewHttpServer
}
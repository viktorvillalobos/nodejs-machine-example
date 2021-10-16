import express from "express"
import { Pool } from "pg"
import { MachineService } from "./domain/services/machines"
import { InMemoryRepository, PostgreSQLRepository } from "./data/respositories/machine";
import { Machine } from "./domain/models/machine";

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const pool = new Pool({
  user: 'postgres',
  host: "db",
  database: 'machines',
  password: 'thisisademo',
  port: 5432
})

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

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Rendalo APP Running at http://localhost:${port}`)
})
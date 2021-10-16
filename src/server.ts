import express from "express";
import { MachineService } from "./domain/services/machines"
import { InMemoryRepository } from "./data/respositories/machine";
import { Machine } from "./domain/models/machine";

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/machines", (req, res) => {
  const repository = new InMemoryRepository()
  const machineService = new MachineService(repository)
  res.json(machineService.getAll())
})


app.post("/machines", (req, res) => {
  const repository = new InMemoryRepository()
  const machineService = new MachineService(repository)

  const machine = new Machine(req.body.name, parseFloat(req.body.price), parseFloat(req.body.markup))
  const responseMachine = machineService.add(machine)

  res.json(responseMachine)
})


app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Rendalo APP Running at http://localhost:${port}`)
})
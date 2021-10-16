/* tslint:disable:max-classes-per-file */
import { Machine } from '../../domain/models/machine'
import {Pool} from 'pg'

interface IMachineRepository {
    getAll(): Promise<Machine[]>
    add(machine: Machine): Promise<Machine>
}


class InMemoryRepository implements IMachineRepository {
    table: Machine[]

    constructor(initialData: Machine[] = []) {
        this.table = initialData
    }

    async getAll (): Promise<Machine[]> {
        return this.table
    }

    async add(machine: Machine): Promise<Machine> {
        this.table.push(machine)
        return machine
    }
}


class PostgreSQLRepository implements IMachineRepository {
    pool: Pool

    constructor(pool: Pool) {
        this.pool = pool
    }

    async getAll(): Promise<Machine[]> {
        const query = 'SELECT * FROM machines ORDER BY id ASC'

        try {
            const { rows } = await this.pool.query(query)
            return rows.map(row => new Machine(row.id, row.name, row.price, row.markup))
        } catch (e) {
            // This should raise a custom Exception
            throw e
        }
    }

    async add(machine: Machine): Promise<Machine> {
        const query = 'INSERT INTO machines(name, price, markup) VALUES($1, $2, $3) RETURNING *'
        const values = [machine.name, machine.price, machine.markup]

        try {
            const { rows } = await this.pool.query(query, values)
            return new Machine(rows[0].id, rows[0].name, rows[0].price, rows[0].markup)
        } catch (e) {
            // This should raise a custom Exception
            throw e
        }
    }
}

export {
    IMachineRepository,
    InMemoryRepository,
    PostgreSQLRepository
}
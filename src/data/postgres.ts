import { Pool } from "pg"

const createNewPostgreSQLPool = (): Pool => {
    const pool = new Pool({
        user: 'postgres',
        host: "db",
        database: 'machines',
        password: 'thisisademo',
        port: 5432
    })

    return pool
}

export {
    createNewPostgreSQLPool
}
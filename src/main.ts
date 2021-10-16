import { createNewHttpServer } from './presentation/httpserver'
import { createNewPostgreSQLPool } from './data/postgres'

const port = 3000

const pool = createNewPostgreSQLPool()
const app = createNewHttpServer(pool)

// This should use a Logger instad of console.log

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Rendalo APP Running at http://localhost:${port}`)
})
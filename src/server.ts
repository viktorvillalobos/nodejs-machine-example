import { createNewHttpServer } from './presentation/httpserver'
import { createNewPostgreSQLPool } from './data/postgres'

const port = 3000

const pool = createNewPostgreSQLPool()
const app = createNewHttpServer(pool)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Rendalo APP Running at http://localhost:${port}`)
})
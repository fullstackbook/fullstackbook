# Next.js API Routes

https://github.com/travisluong/fullstackbook-todo-nextjs

## Database

```js title="db/index.js"
import { Client } from 'pg'
const connectionString = process.env.DB_URL

const db = new Client({
  connectionString
})
db.connect()

export default db
```

## API

```js title="pages/api/todos/index.js"
import db from "../../../db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await db.query('INSERT INTO todos (name, completed) VALUES ($1, $2) RETURNING *', [req.body.name, req.body.completed])
    res.send(result.rows[0])
  } else {
    if (req.query.completed) {
      const result = await db.query('SELECT * FROM todos WHERE completed = $1', [req.query.completed])
      res.send(result.rows)
    } else {
      const result = await db.query('SELECT * FROM todos')
      res.send(result.rows)
    }
  }
}
```

```js title="pages/api/todos/[id].js"
import db from "../../../db";

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const result = await db.query('UPDATE todos SET name = $1, completed = $2 WHERE id = $3 RETURNING *', [req.body.name, req.body.completed, req.query.id])
    if (result.rows.length === 0) {
      res.status(404).send('todo not found')
      return
    }
    res.send(result.rows)
  } else if (req.method === 'DELETE') {
    await db.query('DELETE FROM todos WHERE id = $1', [req.query.id])
    res.status(200).send()
  } else {
    const result = await db.query('SELECT * FROM todos WHERE id = $1', [req.query.id])
    if (result.rows.length === 0) {
      res.status(404).send('todo not found')
      return
    }
    res.send(result.rows)
  }
}
```

## Config

```text title=".env.example"
NEXT_PUBLIC_API_URL=/api
DB_URL=postgres://user:password@host:5432/dbname
```
# Express To Do API

https://github.com/travisluong/fullstackbook-todo-express

## Command Line

```txt title="Terminal"
createdb fullstackbook-todo-express
npm init
npm install --save express nodemon cors
node app.js
npm run dev
```

## App

```js title="app.js"
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(cors())

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:@localhost:5432/fullstackbook-todo-express')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/todos', async (req, res) => {
  const result = await db.one('INSERT INTO todos (name, completed) VALUES (${name}, ${completed}) RETURNING *', req.body)
  res.send(result)
})

app.get('/todos', async (req, res) => {
  if (req.query.completed) {
    const result = await db.query('SELECT * FROM todos WHERE completed = $1', [req.query.completed])
    res.send(result)
  } else {
    const result = await db.query('SELECT * FROM todos')
    res.send(result)
  }
})

app.get('/todos/:id', async (req, res) => {
  const result = await db.oneOrNone('SELECT * FROM todos WHERE id = $1', [req.params.id])
  if (!result) {
    res.status(404).send("todo not found")
    return
  }
  res.send(result)
})

app.put('/todos/:id', async (req, res) => {
  const result = await db.oneOrNone('SELECT * FROM todos WHERE id = $1', [req.params.id])
  if (!result) {
    res.status(404).send("todo not found")
    return
  }
  const result2 = await db.one('UPDATE todos SET name = $1, completed = $2 WHERE id = $3 RETURNING *', [req.body.name, req.body.completed, req.params.id])
  res.send(result2)
})

app.delete('/todos/:id', async (req, res) => {
  await db.none('DELETE FROM todos WHERE id = $1', [req.params.id])
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Database

```sql title="schema.sql"
create table todos (
  id bigserial primary key,
  name text,
  completed boolean not null default false
);
```

## Packages

```json title="package.json"
{
  "name": "fullstackbook-todo-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "nodemon": "^2.0.19",
    "pg-promise": "^10.12.0"
  }
}
```
# Express To Do API

- GitHub: https://github.com/travisluong/fullstackbook-todo-express

## Command Line

```txt title="Terminal"
createdb fullstackbook-todo-express
npm init
npm install --save express cors pg
npm install --save-dev nodemon dotenv
node app.js
npm run dev
```

## App

```js title="app.js"
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const { Client } = require("pg");

app.use(bodyParser.json());
app.use(cors());

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/todos", async (req, res) => {
  const result = await client.query(
    "INSERT INTO todos (name, completed) VALUES ($1, $2) RETURNING *",
    [req.body.name, req.body.completed]
  );
  res.send(result.rows);
});

app.get("/todos", async (req, res) => {
  if (req.query.completed) {
    const result = await client.query(
      "SELECT * FROM todos WHERE completed = $1",
      [req.query.completed]
    );
    res.send(result.rows);
  } else {
    const result = await client.query("SELECT * FROM todos");
    res.send(result.rows);
  }
});

app.get("/todos/:id", async (req, res) => {
  const result = await client.query("SELECT * FROM todos WHERE id = $1", [
    req.params.id,
  ]);
  if (!result) {
    res.status(404).send("todo not found");
    return;
  }
  res.send(result.rows);
});

app.put("/todos/:id", async (req, res) => {
  const result = await client.query("SELECT * FROM todos WHERE id = $1", [
    req.params.id,
  ]);
  if (!result) {
    res.status(404).send("todo not found");
    return;
  }
  const result2 = await client.query(
    "UPDATE todos SET name = $1, completed = $2 WHERE id = $3 RETURNING *",
    [req.body.name, req.body.completed, req.params.id]
  );
  res.send(result2.rows);
});

app.delete("/todos/:id", async (req, res) => {
  await client.query("DELETE FROM todos WHERE id = $1", [req.params.id]);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
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
    "pg": "^8.8.0"
  },
  "devDependencies": {
    "dotenv": "^16.0.3",
    "nodemon": "^2.0.20"
  }
}
```

## Environment Variables

```txt title=".env.example"
DB_USER=postgres
DB_HOST=localhost
DB_NAME=fullstackbook-todo-express
DB_PASSWORD=
DB_PORT=5432
```

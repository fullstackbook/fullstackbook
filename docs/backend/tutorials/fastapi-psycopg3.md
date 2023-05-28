# FastAPI psycopg3 API

- GitHub: https://github.com/travisluong/fullstackbook-fastapi-psycopg3

## Command Line

```bash title="Terminal"
python -m venv venv
. venv/bin/activate # mac and linux
. venv/Scripts/activate # windows
pip install fastapi
pip install "uvicorn[standard]"
pip install psycopg
pip install psycopg_pool
psql -U postgres -c "create database fastapi_psycopg3"
psql -U postgres -d fastapi_psycopg3 -f v1_create_todos_table.sql

```

## Routers

```python title="app/routers/todos_v1.py"
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from psycopg.rows import class_row

from app.db import get_conn

router = APIRouter(prefix="/v1/todos")


class ToDo(BaseModel):
    id: int | None
    name: str
    completed: bool


@router.post("")
def create_todo(todo: ToDo):
    with get_conn() as conn:
        conn.execute(
            "insert into todos (name, completed) values (%s, %s)",
            [todo.name, todo.completed],
        )


@router.get("")
def get_todos():
    with get_conn() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:
        records = cur.execute("select * from todos").fetchall()
        return records


@router.get("/{id}")
def get_todo(id: int):
    with get_conn() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:
        record = cur.execute("select * from todos where id=%s", [id]).fetchone()
        if not record:
            raise HTTPException(404)
        return record


@router.put("/{id}")
def update_todo(id: int, todo: ToDo):
    with get_conn() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:
        record = cur.execute(
            "update todos set name=%s, completed=%s where id=%s returning *",
            [todo.name, todo.completed, id],
        ).fetchone()
        return record


@router.delete("/{id}")
def delete_todo(id: int):
    with get_conn() as conn:
        conn.execute("delete from todos where id=%s", [id])

```

```python title="app/routers/todos_v2.py"
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from psycopg.rows import class_row

from app.db import get_pool

router = APIRouter(prefix="/v2/todos")

pool = get_pool()


class ToDo(BaseModel):
    id: int | None
    name: str
    completed: bool


@router.post("")
def create_todo(todo: ToDo):
    with pool.connection() as conn:
        conn.execute(
            "insert into todos (name, completed) values (%s, %s)",
            [todo.name, todo.completed],
        )


@router.get("")
def get_todos():
    with pool.connection() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:
        records = cur.execute("select * from todos").fetchall()
        return records


@router.get("/{id}")
def get_todo(id: int):
    with pool.connection() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:
        record = cur.execute("select * from todos where id=%s", [id]).fetchone()
        if not record:
            raise HTTPException(404)
        return record


@router.put("/{id}")
def update_todo(id: int, todo: ToDo):
    with pool.connection() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:
        record = cur.execute(
            "update todos set name=%s, completed=%s where id=%s returning *",
            [todo.name, todo.completed, id],
        ).fetchone()
        return record


@router.delete("/{id}")
def delete_todo(id: int):
    with pool.connection() as conn:
        conn.execute("delete from todos where id=%s", [id])

```

```python title="app/routers/todos_v3.py"
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from psycopg.rows import class_row

from app.db import get_async_pool

router = APIRouter(prefix="/v3/todos")

pool = get_async_pool()


class ToDo(BaseModel):
    id: int | None
    name: str
    completed: bool


@router.post("")
async def create_todo(todo: ToDo):
    async with pool.connection() as conn:
        await conn.execute(
            "insert into todos (name, completed) values (%s, %s)",
            [todo.name, todo.completed],
        )


@router.get("")
async def get_todos():
    async with pool.connection() as conn, conn.cursor(
        row_factory=class_row(ToDo)
    ) as cur:
        await cur.execute("select * from todos")
        records = await cur.fetchall()
        return records


@router.get("/{id}")
async def get_todo(id: int):
    async with pool.connection() as conn, conn.cursor(
        row_factory=class_row(ToDo)
    ) as cur:
        await cur.execute("select * from todos where id=%s", [id])
        record = await cur.fetchone()
        if not record:
            raise HTTPException(404)
        return record


@router.put("/{id}")
async def update_todo(id: int, todo: ToDo):
    async with pool.connection() as conn, conn.cursor(
        row_factory=class_row(ToDo)
    ) as cur:
        await cur.execute(
            "update todos set name=%s, completed=%s where id=%s returning *",
            [todo.name, todo.completed, id],
        )
        record = await cur.fetchone()
        return record


@router.delete("/{id}")
async def delete_todo(id: int):
    async with pool.connection() as conn:
        await conn.execute("delete from todos where id=%s", [id])

```

## Config

```python title="app/config.py"
from functools import lru_cache

from pydantic import BaseSettings


class Settings(BaseSettings):
    db_user: str
    db_password: str
    db_host: str
    db_port: str
    db_name: str

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()

```

## DB

```python title="app/db.py"
from functools import lru_cache

import psycopg
from psycopg_pool import ConnectionPool, AsyncConnectionPool

from app.config import get_settings

settings = get_settings()

conninfo = f"user={settings.db_user} password={settings.db_password} host={settings.db_host} port={settings.db_port} dbname={settings.db_name}"


def get_conn():
    return psycopg.connect(conninfo=conninfo)


@lru_cache()
def get_pool():
    return ConnectionPool(conninfo=conninfo)


@lru_cache()
def get_async_pool():
    return AsyncConnectionPool(conninfo=conninfo)

```

## Main

```python title="app/main.py"
import asyncio
from fastapi import FastAPI

from app.routers import todos_v1, todos_v2, todos_v3
from app.db import get_pool, get_async_pool

app = FastAPI()

pool = get_pool()
async_pool = get_async_pool()

app.include_router(todos_v1.router)
app.include_router(todos_v2.router)
app.include_router(todos_v3.router)


async def check_connections():
    while True:
        await asyncio.sleep(600)
        print("check connections")
        pool.check()


async def check_async_connections():
    while True:
        await asyncio.sleep(600)
        print("check async connections")
        await async_pool.check()


@app.on_event("startup")
def startup():
    asyncio.create_task(check_connections())
    asyncio.create_task(check_async_connections())


@app.get("/")
def read_root():
    return {"Hello": "World"}

```

## Env

```sh title=".env"
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5433
DB_NAME=fastapi_psycopg3
```

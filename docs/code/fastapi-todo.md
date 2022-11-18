# FastAPI To Do API

- https://github.com/travisluong/fullstackbook-todo-fastapi
- [Full Stack FastAPI + NextJS JWT Authentication Tutorial](https://youtu.be/InzrcSk_9YU)
- [Full Stack FastAPI + VanillaJS Tutorial](https://youtu.be/p9YTVAq472E)
- [Full Stack FastAPI + NuxtJS Tutorial](https://youtu.be/J9EbxoJGwbI)
- [Full Stack FastAPI + Next.js Tutorial](https://youtu.be/HJ314MNcCck)

## Command Line

```bash title="Terminal"
mkdir fullstackbook-todo-fastapi
cd fullstackbook-todo-fastapi
python3 -m venv venv
. venv/bin/activate
pip install fastapi "uvicorn[standard]" alembic psycopg2 pytest requests
pip freeze > requirements.txt
uvicorn main:app --reload
createdb fullstackbook-todo-fastapi
psql fullstackbook-todo-fastapi
alembic init alembic
alembic revision -m "create todos table"
alembic upgrade head
alembic downgrade -1
```

## Configuration

```txt title=".env.example"
DATABASE_HOST=localhost
DATABASE_NAME=fullstackbook-todo-fastapi
DATABASE_USER=postgres
DATABASE_PASSWORD=
DATABASE_PORT=5432
APP_NAME="Full Stack Book To Do"
```

```python title="config.py"
from pydantic import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Awesome API"

    class Config:
        env_file = ".env"
```

## Entry Point / CORS / Exception Handler

```python title="main.py"
from functools import lru_cache
from typing import Union

from fastapi import FastAPI, Depends
from fastapi.responses import PlainTextResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.middleware.cors import CORSMiddleware

from routers import todos

import config

app = FastAPI()
app.include_router(todos.router)


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    print(f"{repr(exc)}")
    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)

@lru_cache()
def get_settings():
    return config.Settings()


@app.get("/")
def read_root(settings: config.Settings = Depends(get_settings)):
    print(settings.app_name)
    return "Hello World"


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

## Database Migrations

```python title="alembic/env.py"
import os
from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context
from dotenv import load_dotenv

load_dotenv()

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

config.set_main_option('sqlalchemy.url', f"postgresql://{os.environ['DATABASE_USER']}:@{os.environ['DATABASE_HOST']}/{os.environ['DATABASE_NAME']}")

# Interpret the config file for Python logging.
# This line sets up loggers basically.
fileConfig(config.config_file_name)

# add your model's MetaData object here
# for 'autogenerate' support
# from myapp import mymodel
# target_metadata = mymodel.Base.metadata
target_metadata = None

# other values from the config, defined by the needs of env.py,
# can be acquired:
# my_important_option = config.get_main_option("my_important_option")
# ... etc.


def run_migrations_offline():
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.

    """
    connectable = engine_from_config(
        config.get_section(config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
```

```python title="alembic/versions/049c5ab5051e_create_todos_table.py"
"""create todos table

Revision ID: 049c5ab5051e
Revises: 
Create Date: 2022-07-27 16:52:56.499567

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '049c5ab5051e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.execute("""
        create table todos (
            id bigserial primary key,
            name text,
            completed boolean not null default false
        );
    """)


def downgrade():
    op.execute("drop table todos;")
```

## Schemas

```python title="schemas.py"
from pydantic import BaseModel

class ToDoRequest(BaseModel):
    name: str
    completed: bool

class ToDoResponse(BaseModel):
    name: str
    completed: bool
    id: int

    class Config:
        orm_mode = True
```

## ORM

```python title="database.py"
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

SQLALCHEMY_DATABASE_URL = f"postgresql://{os.environ['DATABASE_USER']}:@{os.environ['DATABASE_HOST']}/{os.environ['DATABASE_NAME']}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

```python title="models.py"
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base


class ToDo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    completed = Column(Boolean, default=False)
```

```python title="crud.py"
from sqlalchemy.orm import Session
import models, schemas

def create_todo(db: Session, todo: schemas.ToDoRequest):
    db_todo = models.ToDo(name=todo.name, completed=todo.completed)
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def read_todos(db: Session, completed: bool):
    if completed is None:
        return db.query(models.ToDo).all()
    else:
        return db.query(models.ToDo).filter(models.ToDo.completed == completed).all()

def read_todo(db: Session, id: int):
    return db.query(models.ToDo).filter(models.ToDo.id == id).first()

def update_todo(db: Session, id: int, todo: schemas.ToDoRequest):
    db_todo = db.query(models.ToDo).filter(models.ToDo.id == id).first()
    if db_todo is None:
        return None
    db.query(models.ToDo).filter(models.ToDo.id == id).update({'name': todo.name, 'completed': todo.completed})
    db.commit()
    db.refresh(db_todo)
    return db_todo

def delete_todo(db: Session, id: int):
    db_todo = db.query(models.ToDo).filter(models.ToDo.id == id).first()
    if db_todo is None:
        return None
    db.query(models.ToDo).filter(models.ToDo.id == id).delete()
    db.commit()
    return True
```

## Routers

```python title="routers/todos.py"
from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status
import schemas
import crud
from database import SessionLocal

router = APIRouter(
    prefix="/todos"
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("", status_code=status.HTTP_201_CREATED)
def create_todo(todo: schemas.ToDoRequest, db: Session = Depends(get_db)):
    todo = crud.create_todo(db, todo)
    return todo

@router.get("", response_model=List[schemas.ToDoResponse])
def get_todos(completed: bool = None, db: Session = Depends(get_db)):
    todos = crud.read_todos(db, completed)
    return todos

@router.get("/{id}")
def get_todo_by_id(id: int, db: Session = Depends(get_db)):
    todo = crud.read_todo(db, id)
    if todo is None:
        raise HTTPException(status_code=404, detail="to do not found")
    return todo

@router.put("/{id}")
def update_todo(id: int, todo: schemas.ToDoRequest, db: Session = Depends(get_db)):
    todo = crud.update_todo(db, id, todo)
    if todo is None:
        raise HTTPException(status_code=404, detail="to do not found")
    return todo

@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_todo(id: int, db: Session = Depends(get_db)):
    res = crud.delete_todo(db, id)
    if res is None:
        raise HTTPException(status_code=404, detail="to do not found")
```

## Testing

```python title="test_main.py"
from fastapi.testclient import TestClient

from main import app
from routers import todos


client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == "Hello World"
```
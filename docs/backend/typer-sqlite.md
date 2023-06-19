# Typer and SQLite

- GitHub: https://github.com/travisluong/fullstackbook-typer-sqlite
- YouTube: https://youtu.be/a7gJRJLb53Y

## Command Line

```bash title="Terminal"
python -m venv venv
. venv/Scripts/activate # windows
. venv/bin/activate # mac and linux
pip install "typer[all]"
python db.py
python main.py todos create "foo"
python main.py todos read
python main.py todos update-name "bar"
python main.py todos toggle 1
python main.py todos delete 1
```

## Main

```python title="main.py"
import typer
from commands import todos

app = typer.Typer(
    no_args_is_help=True, context_settings={"help_option_names": ["-h", "--help"]}
)
app.add_typer(todos.app, name="todos")

if __name__ == "__main__":
    app()

```

## DB

```python title="db.py"
import sqlite3

con = sqlite3.connect("tutorial.db")

```

## Commands

```python title="commands/todos.py"
import typer
import db

app = typer.Typer()

con = db.con


@app.command()
def create(name: str):
    con.execute("insert into todos (name, completed) values (?, ?)", (name, False))
    con.commit()


@app.command()
def read():
    cur = con.cursor()
    res = cur.execute("select * from todos")
    rows = res.fetchall()
    for row in rows:
        print(row)


@app.command()
def update_name(id: int, name: str):
    con.execute("update todos set name = ? where id = ?", (name, id))
    con.commit()


@app.command()
def toggle(id: int):
    cur = con.cursor()
    res = cur.execute("select * from todos where id = ?", (id,))
    row = res.fetchone()
    completed = row[2]
    toggled = 0 if completed == 1 else 1
    cur.execute("update todos set completed = ? where id = ?", (toggled, id))
    con.commit()


@app.command()
def delete(id: int):
    con.execute("delete from todos where id = ?", (id,))
    con.commit()


```

## SQL

```sql title="sql/v1_create_todos_table.sql"
create table todos (
    id integer primary key autoincrement,
    name text,
    completed boolean
);
```
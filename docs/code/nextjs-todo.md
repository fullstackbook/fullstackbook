# Next.js To Do UI

- GitHub: https://github.com/travisluong/fullstackbook-todo-nextjs
- YouTube: [Full Stack NestJS + Next.js Tutorial](https://youtu.be/9jUh0Y2A3X4)
- YouTube: [Full Stack Spring Boot + Next.js Tutorial](https://youtu.be/Z_4Tqmv8Oa4)
- YouTube: [Full Stack FastAPI + Next.js Tutorial](https://youtu.be/HJ314MNcCck)

## Command Line

```bash title="Terminal"
npx create-next-app@latest
npm run dev
```

## Configuration

```txt title=".env.example"
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Pages

```jsx title="pages/index.js"
import Head from 'next/head'
import Layout from '../components/layout';
import ToDoList from '../components/todo-list';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack Book To Do</title>
        <meta name="description" content="Full Stack Book To Do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ToDoList />
      </Layout>
    </div>
  )
}
```

## Components

```jsx title="components/layout.js"
import styles from '../styles/layout.module.css'

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>To Do</h1>
      {props.children}
    </div>
  )
}
```

```jsx title="components/todo-list.js"
import styles from '../styles/todo-list.module.css'
import { useState, useEffect, useCallback, useRef } from 'react'
import { debounce } from 'lodash'
import ToDo from './todo'

export default function ToDoList() {
  const [todos, setTodos] = useState(null)
  const [mainInput, setMainInput] = useState('')
  const [filter, setFilter] = useState()
  const didFetchRef = useRef(false)

  useEffect(() => {
    if (didFetchRef.current === false) {
      didFetchRef.current = true
      fetchTodos()
    }
  }, [])

  async function fetchTodos(completed) {
    let path = '/todos'
    if (completed !== undefined) {
      path = `/todos?completed=${completed}`
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)
    const json = await res.json()
    setTodos(json)
  }

  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 500), [])

  function handleToDoChange(e, id) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const copy = [...todos]
    const idx = todos.findIndex((todo) => todo.id === id)
    const changedToDo = {
      ...todos[idx],
      [name]: value
    }
    copy[idx] = changedToDo
    debouncedUpdateTodo(changedToDo)
    setTodos(copy)
  }

  async function updateTodo(todo) {
    const data = {
      name: todo.name,
      completed: todo.completed
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async function addToDo(name) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/todos/`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        completed: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      const json = await res.json();
      const copy = [...todos, json]
      setTodos(copy)
    }
  }

  async function handleDeleteToDo(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      const idx = todos.findIndex((todo) => todo.id === id)
      const copy = [...todos]
      copy.splice(idx, 1)
      setTodos(copy)
    }
  }

  function handleMainInputChange(e) {
    setMainInput(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (mainInput.length > 0) {
        addToDo(mainInput)
        setMainInput('')
      }
    }
  }

  function handleFilterChange(value) {
    setFilter(value)
    fetchTodos(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainInputContainer}>
        <input className={styles.mainInput} placeholder="What needs to be done?" value={mainInput} onChange={(e) => handleMainInputChange(e)} onKeyDown={handleKeyDown}></input>
      </div>
      {!todos && (
        <div>Loading...</div>
      )}
      {todos && (
        <div>
          {todos.map((todo) => {
            return (
              <ToDo todo={todo} onDelete={handleDeleteToDo} onChange={handleToDoChange} />
            )
          })}
        </div>
      )}
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${filter === undefined && styles.filterActive}`} onClick={() => handleFilterChange()}>All</button>
        <button className={`${styles.filterBtn} ${filter === false && styles.filterActive}`} onClick={() => handleFilterChange(false)}>Active</button>
        <button className={`${styles.filterBtn} ${filter === true && styles.filterActive}`} onClick={() => handleFilterChange(true)}>Completed</button>
      </div>
    </div>
  )
}
```

```jsx title="components/todo.js"
import Image from 'next/image'
import styles from '../styles/todo.module.css'

export default function ToDo(props) {
  const { todo, onChange, onDelete } = props;
  return (
    <div className={styles.toDoRow} key={todo.id}>
      <input className={styles.toDoCheckbox} name="completed" type="checkbox" checked={todo.completed} value={todo.completed} onChange={(e) => onChange(e, todo.id)}></input>
      <input className={styles.todoInput} autoComplete='off' name="name" type="text" value={todo.name} onChange={(e) => onChange(e, todo.id)}></input>
      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}><Image src="/material-symbols_delete-outline-sharp.svg" width="24px" height="24px" /></button>
    </div>
  )
}
```

## Styles

```css title="styles/layout.module.css"
.layout {
    width: 300px;
    margin: 20px;
}

.title {
    text-align: center;
    font-size: 24px;
    margin: 10px;
}
```

```css title="styles/todo-list.module.css"
.container {
  width: 300px;
  border: 1px solid black;
}

.mainInputContainer {
  width: 100%;
  margin: 20px 0;
}

.mainInput {
  padding: 5px;
  border: 1px solid black;
  margin: auto;
  display: block;
  width: 260px;
  height: 40px;
}

.filters {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  border-top: 1px solid black;
}

.filterBtn {
  background: none;
  border: none;
  cursor: pointer;
}

.filterActive {
  text-decoration: underline;
}
```

```css title="styles/todo.module.css"
.todoInput {
    padding: 5px;
    border: 1px solid black;
    width: 194px;
    height: 40px;
    margin: 5px;
}

.toDoRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 20px;
}

.deleteBtn {
    background: none;
    border: 0;
    cursor: pointer;
}
```

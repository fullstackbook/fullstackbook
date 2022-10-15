# React To Do UI

https://github.com/travisluong/fullstackbook-todo-react

## Command Line

```bash title="Terminal"
npx create-react-app
```

## Components

```jsx title="App.js"
import Layout from './components/Layout';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <Layout>
        <ToDoList />
      </Layout>
    </div>
  );
}

export default App;
```

```jsx title="src/components/Layout.js"
export default function Layout(props) {
  return (
    <div className="layout">
      <h1 className="title">To Do</h1>
      {props.children}
    </div>
  )
}
```

```jsx title="src/components/ToDoList.js"
import { useState, useEffect, useCallback, useRef } from 'react'
import { debounce } from 'lodash'
import ToDo from './ToDo'

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
    const res = await fetch(process.env.REACT_APP_API_URL + path)
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
    const res = await fetch(process.env.REACT_APP_API_URL + `/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async function addToDo(name) {
    const res = await fetch(process.env.REACT_APP_API_URL + `/todos`, {
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
    const res = await fetch(process.env.REACT_APP_API_URL + `/todos/${id}`, {
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
    <div className="container">
      <div className="mainInputContainer">
        <input className="mainInput" placeholder="What needs to be done?" value={mainInput} onChange={(e) => handleMainInputChange(e)} onKeyDown={handleKeyDown}></input>
      </div>
      {!todos && (
        <div>Loading...</div>
      )}
      {todos && (
        <div>
          {todos.map((todo) => {
            return (
              <ToDo key={todo.id} todo={todo} onDelete={handleDeleteToDo} onChange={handleToDoChange} />
            )
          })}
        </div>
      )}
      <div className="filters">
        <button className={`filterBtn ${filter === undefined && 'filterActive'}`} onClick={() => handleFilterChange()}>All</button>
        <button className={`filterBtn ${filter === false && 'filterActive'}`} onClick={() => handleFilterChange(false)}>Active</button>
        <button className={`filterBtn ${filter === true && 'filterActive'}`} onClick={() => handleFilterChange(true)}>Completed</button>
      </div>
    </div>
  )
}
```

```jsx title="src/components/ToDo.js"
export default function ToDo(props) {
  const { todo, onChange, onDelete } = props;
  return (
    <div className="toDoRow" key={todo.id}>
      <input className="toDoCheckbox" name="completed" type="checkbox" checked={todo.completed} value={todo.completed} onChange={(e) => onChange(e, todo.id)}></input>
      <input className="todoInput" autoComplete='off' name="name" type="text" value={todo.name} onChange={(e) => onChange(e, todo.id)}></input>
      <button className="deleteBtn" onClick={() => onDelete(todo.id)}><img src="/material-symbols_delete-outline-sharp.svg" width="24px" height="24px" /></button>
    </div>
  )
}
```

## CSS

```css title="index.css"
.layout {
  width: 300px;
  margin: 20px;
}

.container {
  width: 300px;
  border: 1px solid black;
}

.title {
  text-align: center;
  font-size: 24px;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
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

.todoInput {
  padding: 5px;
  border: 1px solid black;
  width: 194px;
  height: 40px;
  margin: 5px;
}

.todoRow {
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

## Configuration

```txt title=".env.example"
REACT_APP_API_URL=http://localhost:8000
```
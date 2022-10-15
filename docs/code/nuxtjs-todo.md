# NuxtJS To Do UI

https://github.com/travisluong/fullstackbook-todo-nuxtjs

## Command Line

```bash title="Terminal"
npx create-nuxt-app 
```

## Configuration

```txt title=".env.example"
API_URL=http://localhost:8000
```

```js title="nuxt.config.js"
export default {
  publicRuntimeConfig: {
    apiURL: process.env.API_URL
  }
}
```

## Pages

```html title="pages/index.vue"
<template>
  <Layout>
    <ToDoList />
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import ToDoList from "../components/ToDoList.vue";
export default {
  name: "IndexPage",
  components: { Layout, ToDoList }
}
</script>
```

## Components

```html title="components/Layout.vue"
<template>
  <div class="layout">
    <h1 class="title">To Do</h1>
    <slot></slot>
  </div>
</template>

<style>
.layout {
  width: 300px;
  margin: 20px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
```

```html title="components/ToDoList.vue"
<template>
  <div class="container">
    <div class="mainInputContainer">
      <input class="mainInput" placeholder="What needs to be done?" v-model="newTodoText"
        @keyup.enter="handleAddToDo" />
    </div>
    <p class="m20" v-if="$fetchState.pending">Fetching todos...</p>
    <p class="m20" v-else-if="$fetchState.error">An error occurred</p>
    <div v-else>
      <div class="toDoRow" v-for="todo of todos">
        <ToDo :todo="todo" @onChange="handleChange" @onDelete="handleDelete" />
      </div>
    </div>
    <div class="filters">
      <button class="filterBtn" :class="{ filterActive: filter === undefined }"
        @click="handleFilterChange()">All</button>
      <button class="filterBtn" :class="{ filterActive: filter === false }"
        @click="handleFilterChange(false)">Active</button>
      <button class="filterBtn" :class="{ filterActive: filter === true }"
        @click="handleFilterChange(true)">Completed</button>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import ToDo from './ToDo.vue'

export default {
  data: () => ({
    todos: [],
    newTodoText: '',
    filter: undefined
  }),
  async fetch() {
    let path = 'todos'
    if (this.filter !== undefined) {
      path += `?completed=${this.filter}`
    }
    this.todos = await fetch(`${this.$config.apiURL}/${path}`)
      .then(res => res.json());
  },
  methods: {
    async handleAddToDo() {
      const todo = { name: this.newTodoText, completed: false };
      const res = await fetch(`${this.$config.apiURL}/todos`, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await res.json();
      this.todos.push(json);
      this.newTodoText = ''
    },
    handleChange: debounce(async function (todo) {
      await fetch(`${this.$config.apiURL}/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }, 500),
    async handleDelete(todo) {
      await fetch(`${this.$config.apiURL}/todos/${todo.id}`, {
        method: "DELETE"
      });
      const idx = this.todos.findIndex((t) => t.id === todo.id)
      const copy = [...this.todos]
      copy.splice(idx, 1)
      this.todos = copy
    },
    handleFilterChange(value) {
      this.filter = value
      this.$fetch()
    }
  },
  components: { ToDo }
}
</script>

<style>
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

.m20 {
  margin: 20px;
}
</style>

```

```html title="components/ToDo.vue"
<template>
  <div class="todoRow">
    <input type="checkbox" v-model="todo.completed" @click="$emit('onChange', todo)" />
    <input class="todoInput" v-model="todo.name" @input="$emit('onChange', todo)" />
    <button class="deleteBtn" @click="$emit('onDelete', todo)"><img
        src="material-symbols_delete-outline-sharp.svg" /></button>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style>
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
</style>
```
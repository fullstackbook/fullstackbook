"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[115],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=o.createContext({}),l=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},d=function(n){var e=l(n.components);return o.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return t?o.createElement(f,i(i({ref:e},d),{},{components:t})):o.createElement(f,i({ref:e},d))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9177:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const r={},i="React",s={unversionedId:"projects/todo/frontend/react",id:"projects/todo/frontend/react",title:"React",description:"https://github.com/travisluong/fullstackbook-todo-react",source:"@site/docs/projects/todo/frontend/react.md",sourceDirName:"projects/todo/frontend",slug:"/projects/todo/frontend/react",permalink:"/docs/projects/todo/frontend/react",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/projects/todo/frontend/react.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"NuxtJS",permalink:"/docs/projects/todo/frontend/nuxtjs"},next:{title:"VanillaJS",permalink:"/docs/projects/todo/frontend/vanillajs"}},c={},l=[{value:"Command Line",id:"command-line",level:2},{value:"Components",id:"components",level:2},{value:"CSS",id:"css",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:l};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/travisluong/fullstackbook-todo-react"},"https://github.com/travisluong/fullstackbook-todo-react")),(0,a.kt)("h2",{id:"command-line"},"Command Line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"npx create-react-app\n")),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},"import Layout from './components/Layout';\nimport './App.css';\nimport ToDoList from './components/ToDoList';\n\nfunction App() {\n  return (\n    <div>\n      <Layout>\n        <ToDoList />\n      </Layout>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/Layout.js"',title:'"src/components/Layout.js"'},'export default function Layout(props) {\n  return (\n    <div className="layout">\n      <h1 className="title">To Do</h1>\n      {props.children}\n    </div>\n  )\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/ToDoList.js"',title:'"src/components/ToDoList.js"'},"import { useState, useEffect, useCallback, useRef } from 'react'\nimport { debounce } from 'lodash'\nimport ToDo from './ToDo'\n\nexport default function ToDoList() {\n  const [todos, setTodos] = useState(null)\n  const [mainInput, setMainInput] = useState('')\n  const [filter, setFilter] = useState()\n  const didFetchRef = useRef(false)\n\n  useEffect(() => {\n    if (didFetchRef.current === false) {\n      didFetchRef.current = true\n      fetchTodos()\n    }\n  }, [])\n\n  async function fetchTodos(completed) {\n    let path = '/todos'\n    if (completed !== undefined) {\n      path = `/todos?completed=${completed}`\n    }\n    const res = await fetch(process.env.REACT_APP_API_URL + path)\n    const json = await res.json()\n    setTodos(json)\n  }\n\n  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 500), [])\n\n  function handleToDoChange(e, id) {\n    const target = e.target\n    const value = target.type === 'checkbox' ? target.checked : target.value\n    const name = target.name\n    const copy = [...todos]\n    const idx = todos.findIndex((todo) => todo.id === id)\n    const changedToDo = {\n      ...todos[idx],\n      [name]: value\n    }\n    copy[idx] = changedToDo\n    debouncedUpdateTodo(changedToDo)\n    setTodos(copy)\n  }\n\n  async function updateTodo(todo) {\n    const data = {\n      name: todo.name,\n      completed: todo.completed\n    }\n    const res = await fetch(process.env.REACT_APP_API_URL + `/todos/${todo.id}`, {\n      method: 'PUT',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n  }\n\n  async function addToDo(name) {\n    const res = await fetch(process.env.REACT_APP_API_URL + `/todos`, {\n      method: 'POST',\n      body: JSON.stringify({\n        name: name,\n        completed: false\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n    if (res.ok) {\n      const json = await res.json();\n      const copy = [...todos, json]\n      setTodos(copy)\n    }\n  }\n\n  async function handleDeleteToDo(id) {\n    const res = await fetch(process.env.REACT_APP_API_URL + `/todos/${id}`, {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n    if (res.ok) {\n      const idx = todos.findIndex((todo) => todo.id === id)\n      const copy = [...todos]\n      copy.splice(idx, 1)\n      setTodos(copy)\n    }\n  }\n\n  function handleMainInputChange(e) {\n    setMainInput(e.target.value)\n  }\n\n  function handleKeyDown(e) {\n    if (e.key === 'Enter') {\n      if (mainInput.length > 0) {\n        addToDo(mainInput)\n        setMainInput('')\n      }\n    }\n  }\n\n  function handleFilterChange(value) {\n    setFilter(value)\n    fetchTodos(value)\n  }\n\n  return (\n    <div className=\"container\">\n      <div className=\"mainInputContainer\">\n        <input className=\"mainInput\" placeholder=\"What needs to be done?\" value={mainInput} onChange={(e) => handleMainInputChange(e)} onKeyDown={handleKeyDown}></input>\n      </div>\n      {!todos && (\n        <div>Loading...</div>\n      )}\n      {todos && (\n        <div>\n          {todos.map((todo) => {\n            return (\n              <ToDo key={todo.id} todo={todo} onDelete={handleDeleteToDo} onChange={handleToDoChange} />\n            )\n          })}\n        </div>\n      )}\n      <div className=\"filters\">\n        <button className={`filterBtn ${filter === undefined && 'filterActive'}`} onClick={() => handleFilterChange()}>All</button>\n        <button className={`filterBtn ${filter === false && 'filterActive'}`} onClick={() => handleFilterChange(false)}>Active</button>\n        <button className={`filterBtn ${filter === true && 'filterActive'}`} onClick={() => handleFilterChange(true)}>Completed</button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/ToDo.js"',title:'"src/components/ToDo.js"'},'export default function ToDo(props) {\n  const { todo, onChange, onDelete } = props;\n  return (\n    <div className="toDoRow" key={todo.id}>\n      <input className="toDoCheckbox" name="completed" type="checkbox" checked={todo.completed} value={todo.completed} onChange={(e) => onChange(e, todo.id)}></input>\n      <input className="todoInput" autoComplete=\'off\' name="name" type="text" value={todo.name} onChange={(e) => onChange(e, todo.id)}></input>\n      <button className="deleteBtn" onClick={() => onDelete(todo.id)}><img src="/material-symbols_delete-outline-sharp.svg" width="24px" height="24px" /></button>\n    </div>\n  )\n}\n')),(0,a.kt)("h2",{id:"css"},"CSS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="index.css"',title:'"index.css"'},".layout {\n  width: 300px;\n  margin: 20px;\n}\n\n.container {\n  width: 300px;\n  border: 1px solid black;\n}\n\n.title {\n  text-align: center;\n  font-size: 24px;\n  margin: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.mainInputContainer {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.mainInput {\n  padding: 5px;\n  border: 1px solid black;\n  margin: auto;\n  display: block;\n  width: 260px;\n  height: 40px;\n}\n\n.filters {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  margin-top: 20px;\n  border-top: 1px solid black;\n}\n\n.filterBtn {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.filterActive {\n  text-decoration: underline;\n}\n\n.todoInput {\n  padding: 5px;\n  border: 1px solid black;\n  width: 194px;\n  height: 40px;\n  margin: 5px;\n}\n\n.todoRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 5px 20px;\n}\n\n.deleteBtn {\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".env.example"',title:'".env.example"'},"REACT_APP_API_URL=http://localhost:8000\n")))}p.isMDXComponent=!0}}]);
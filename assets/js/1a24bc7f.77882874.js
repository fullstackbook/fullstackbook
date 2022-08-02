"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[473],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var o=t(7294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,s=function(n,e){if(null==n)return{};var t,o,s={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var i=o.createContext({}),d=function(n){var e=o.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=d(n.components);return o.createElement(i.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,s=n.mdxType,a=n.originalType,i=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=d(t),m=s,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(f,r(r({ref:e},c),{},{components:t})):o.createElement(f,r({ref:e},c))}));function m(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l.mdxType="string"==typeof n?n:s,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4338:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(7462),s=(t(7294),t(3905));const a={},r="Next.js",l={unversionedId:"projects/todo/frontend/nextjs",id:"projects/todo/frontend/nextjs",title:"Next.js",description:"https://github.com/travisluong/fullstackbook-todo-nextjs",source:"@site/docs/projects/todo/frontend/nextjs.md",sourceDirName:"projects/todo/frontend",slug:"/projects/todo/frontend/nextjs",permalink:"/docs/projects/todo/frontend/nextjs",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/projects/todo/frontend/nextjs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring Boot",permalink:"/docs/projects/todo/backend/springboot"},next:{title:"NuxtJS",permalink:"/docs/projects/todo/frontend/nuxtjs"}},i={},d=[{value:"Pages",id:"pages",level:2},{value:"Components",id:"components",level:2},{value:"Styles",id:"styles",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:d};function p(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nextjs"},"Next.js"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/travisluong/fullstackbook-todo-nextjs"},"https://github.com/travisluong/fullstackbook-todo-nextjs")),(0,s.kt)("h2",{id:"pages"},"Pages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/index.js"',title:'"pages/index.js"'},'import Head from \'next/head\'\nimport Layout from \'../components/layout\';\nimport ToDoList from \'../components/todo-list\';\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>Full Stack Book To Do</title>\n        <meta name="description" content="Full Stack Book To Do" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      <Layout>\n        <ToDoList />\n      </Layout>\n    </div>\n  )\n}\n')),(0,s.kt)("h2",{id:"components"},"Components"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/layout.js"',title:'"components/layout.js"'},"import styles from '../styles/layout.module.css'\n\nexport default function Layout(props) {\n  return (\n    <div className={styles.layout}>\n      <h1 className={styles.title}>To Do</h1>\n      {props.children}\n    </div>\n  )\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/todo-list.js"',title:'"components/todo-list.js"'},"import styles from '../styles/todo-list.module.css'\nimport { useState, useEffect, useCallback } from 'react'\nimport { debounce } from 'lodash'\nimport ToDo from './todo'\n\nexport default function ToDoList() {\n  const [todos, setTodos] = useState(null)\n  const [mainInput, setMainInput] = useState('')\n  const [filter, setFilter] = useState()\n\n  useEffect(() => {\n    fetchTodos()\n  }, [])\n\n  async function fetchTodos(completed) {\n    let path = '/todos'\n    if (completed !== undefined) {\n      path = `/todos?completed=${completed}`\n    }\n    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)\n    const json = await res.json()\n    setTodos(json)\n  }\n\n  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 500), [])\n\n  function handleToDoChange(e, id) {\n    const target = e.target\n    const value = target.type === 'checkbox' ? target.checked : target.value\n    const name = target.name\n    const copy = [...todos]\n    const idx = todos.findIndex((todo) => todo.id === id)\n    const changedToDo = {\n      ...todos[idx],\n      [name]: value\n    }\n    copy[idx] = changedToDo\n    debouncedUpdateTodo(changedToDo)\n    setTodos(copy)\n  }\n\n  async function updateTodo(todo) {\n    const data = {\n      name: todo.name,\n      completed: todo.completed\n    }\n    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/todos/${todo.id}`, {\n      method: 'PUT',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n  }\n\n  async function addToDo(name) {\n    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/todos/`, {\n      method: 'POST',\n      body: JSON.stringify({\n        name: name,\n        completed: false\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n    if (res.ok) {\n      const json = await res.json();\n      const copy = [...todos, json]\n      setTodos(copy)\n    }\n  }\n\n  async function handleDeleteToDo(id) {\n    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/todos/${id}`, {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    })\n    if (res.ok) {\n      const idx = todos.findIndex((todo) => todo.id === id)\n      const copy = [...todos]\n      copy.splice(idx, 1)\n      setTodos(copy)\n    }\n  }\n\n  function handleMainInputChange(e) {\n    setMainInput(e.target.value)\n  }\n\n  function handleKeyDown(e) {\n    if (e.key === 'Enter') {\n      if (mainInput.length > 0) {\n        addToDo(mainInput)\n        setMainInput('')\n      }\n    }\n  }\n\n  function handleFilterChange(value) {\n    setFilter(value)\n    fetchTodos(value)\n  }\n\n  return (\n    <div className={styles.container}>\n      <div className={styles.mainInputContainer}>\n        <input className={styles.mainInput} placeholder=\"What needs to be done?\" value={mainInput} onChange={(e) => handleMainInputChange(e)} onKeyDown={handleKeyDown}></input>\n      </div>\n      {!todos && (\n        <div>Loading...</div>\n      )}\n      {todos && (\n        <div>\n          {todos.map((todo) => {\n            return (\n              <ToDo todo={todo} onDelete={handleDeleteToDo} onChange={handleToDoChange} />\n            )\n          })}\n        </div>\n      )}\n      <div className={styles.filters}>\n        <button className={`${styles.filterBtn} ${filter === undefined && styles.filterActive}`} onClick={() => handleFilterChange()}>All</button>\n        <button className={`${styles.filterBtn} ${filter === false && styles.filterActive}`} onClick={() => handleFilterChange(false)}>Active</button>\n        <button className={`${styles.filterBtn} ${filter === true && styles.filterActive}`} onClick={() => handleFilterChange(true)}>Completed</button>\n      </div>\n    </div>\n  )\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/todo.js"',title:'"components/todo.js"'},'import Image from \'next/image\'\nimport styles from \'../styles/todo.module.css\'\n\nexport default function ToDo(props) {\n  const { todo, onChange, onDelete } = props;\n  return (\n    <div className={styles.toDoRow} key={todo.id}>\n      <input className={styles.toDoCheckbox} name="completed" type="checkbox" checked={todo.completed} value={todo.completed} onChange={(e) => onChange(e, todo.id)}></input>\n      <input className={styles.todoInput} autoComplete=\'off\' name="name" type="text" value={todo.name} onChange={(e) => onChange(e, todo.id)}></input>\n      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}><Image src="/material-symbols_delete-outline-sharp.svg" width="24px" height="24px" /></button>\n    </div>\n  )\n}\n')),(0,s.kt)("h2",{id:"styles"},"Styles"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/layout.module.css"',title:'"styles/layout.module.css"'},".layout {\n    width: 300px;\n    margin: 20px;\n}\n\n.title {\n    text-align: center;\n    font-size: 24px;\n    margin: 10px;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/todo-list.module.css"',title:'"styles/todo-list.module.css"'},".container {\n  width: 300px;\n  border: 1px solid black;\n}\n\n.mainInputContainer {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.mainInput {\n  padding: 5px;\n  border: 1px solid black;\n  margin: auto;\n  display: block;\n  width: 260px;\n  height: 40px;\n}\n\n.filters {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  margin-top: 20px;\n  border-top: 1px solid black;\n}\n\n.filterBtn {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.filterActive {\n  text-decoration: underline;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/todo.module.css"',title:'"styles/todo.module.css"'},".todoInput {\n    padding: 5px;\n    border: 1px solid black;\n    width: 194px;\n    height: 40px;\n    margin: 5px;\n}\n\n.toDoRow {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 5px 20px;\n}\n\n.deleteBtn {\n    background: none;\n    border: 0;\n    cursor: pointer;\n}\n")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".env.example"',title:'".env.example"'},"NEXT_PUBLIC_API_URL=http://localhost:8000\n")))}p.isMDXComponent=!0}}]);
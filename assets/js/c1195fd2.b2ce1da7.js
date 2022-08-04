"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[642],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=o.createContext({}),s=function(t){var e=o.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(r,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(f,d(d({ref:e},c),{},{components:n})):o.createElement(f,d({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,d=new Array(i);d[0]=m;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:a,d[1]=l;for(var s=2;s<i;s++)d[s]=n[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3179:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={},d="VanillaJS",l={unversionedId:"projects/todo/frontend/vanillajs",id:"projects/todo/frontend/vanillajs",title:"VanillaJS",description:"https://github.com/travisluong/fullstackbook-todo-vanillajs",source:"@site/docs/projects/todo/frontend/vanillajs.md",sourceDirName:"projects/todo/frontend",slug:"/projects/todo/frontend/vanillajs",permalink:"/docs/projects/todo/frontend/vanillajs",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/projects/todo/frontend/vanillajs.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"NuxtJS",permalink:"/docs/projects/todo/frontend/nuxtjs"}},r={},s=[{value:"HTML",id:"html",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"CSS",id:"css",level:2}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vanillajs"},"VanillaJS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/travisluong/fullstackbook-todo-vanillajs"},"https://github.com/travisluong/fullstackbook-todo-vanillajs")),(0,a.kt)("h2",{id:"html"},"HTML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Full Stack Book To Do</title>\n  <link rel="stylesheet" href="style.css">\n  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"><\/script>\n  <script src="app.js"><\/script>\n</head>\n<body>\n  <div class="layout">\n    <h1 class="title">To Do</h1>\n    <div class="container">\n      <div class="mainInputContainer">\n        <input class="mainInput" placeholder="What needs to be done?" />\n      </div>\n      <div class="toDoContainer">\n      </div>\n      <div class="filters">\n        <button class="filterBtn all">All</button>\n        <button class="filterBtn active">Active</button>\n        <button class="filterBtn completed">Completed</button>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},'function FullStackBookToDo() {\n  const td = {}\n  td.API_URL = "http://localhost:8000";\n  td.elements = {}\n\n  this.init = async function () {\n    document.addEventListener("DOMContentLoaded", async function () {\n      td.getElements()\n      await td.fetchToDos()\n      await td.renderToDos()\n      td.bindEvents()\n    });\n  }\n\n  td.getElements = function () {\n    td.elements.toDoContainer = document.querySelector(".toDoContainer")\n    td.elements.addToDoBtn = document.querySelector(".addToDoBtn")\n    td.elements.deleteBtn = document.querySelector(".deleteBtn")\n    td.elements.checkboxes = document.querySelectorAll(".toDoCheckbox")\n    td.elements.mainInput = document.querySelector(".mainInput")\n    td.elements.allFilter = document.querySelector(".filterBtn.all")\n    td.elements.activeFilter = document.querySelector(".filterBtn.active")\n    td.elements.completedFilter = document.querySelector(".filterBtn.completed")\n  }\n\n  td.fetchToDos = async function (completed) {\n    let path = "todos"\n    if (completed !== undefined) {\n      path += `?completed=${completed}`\n    }\n    const todos = await fetch(`${td.API_URL}/${path}`).then((res) => res.json());\n    td.todos = todos\n  }\n\n  td.renderToDos = async function () {\n    td.elements.toDoContainer.innerHTML = "";\n    td.todos.forEach((todo) => {\n      const div = document.createElement("div")\n      div.className = "todoRow"\n\n      const checkbox = document.createElement("input")\n      checkbox.type = "checkbox"\n      checkbox.className = "toDoCheckbox"\n      checkbox.dataset.id = todo.id\n      checkbox.checked = todo.completed ? "checked" : ""\n\n      const input = document.createElement("input")\n      input.type = "text"\n      input.value = todo.name\n      input.className = "todoInput"\n      input.dataset.id = todo.id\n\n      const btn = document.createElement("button")\n      btn.className = "deleteBtn"\n      btn.dataset.id = todo.id\n      const img = document.createElement("img")\n      img.src = "/material-symbols_delete-outline-sharp.svg"\n      btn.appendChild(img)\n\n      div.appendChild(checkbox)\n      div.appendChild(input)\n      div.appendChild(btn)\n      td.elements.toDoContainer.appendChild(div)\n    })\n  }\n\n  td.bindEvents = function () {\n    document.addEventListener("click", function (event) {\n      if (event.target.className === "toDoCheckbox") {\n        td.handleClick(event.target.dataset.id)\n      }\n\n      if (event.target.className === "deleteBtn") {\n        console.log("del");\n        td.handleDelete(event.target.dataset.id)\n      }\n    })\n\n    document.addEventListener("input", function (event) {\n      if (event.target.className === "toDoInput") {\n        console.log(event.target.value)\n        td.handleChange(event.target.dataset.id, event.target.value)\n      }\n    })\n\n    td.elements.mainInput.addEventListener("keypress", function (event) {\n      if (event.key === "Enter") {\n        td.addToDo(event.target.value)\n      }\n    })\n\n    td.elements.allFilter.addEventListener("click", async function (event) {\n      await td.fetchToDos()\n      td.elements.allFilter.classList.add("filterActive")\n      td.elements.activeFilter.classList.remove("filterActive")\n      td.elements.completedFilter.classList.remove("filterActive")\n      td.renderToDos()\n    })\n\n    td.elements.activeFilter.addEventListener("click", async function (event) {\n      await td.fetchToDos(false)\n      td.elements.allFilter.classList.remove("filterActive")\n      td.elements.activeFilter.classList.add("filterActive")\n      td.elements.completedFilter.classList.remove("filterActive")\n      td.renderToDos()\n    })\n\n    td.elements.completedFilter.addEventListener("click", async function (event) {\n      await td.fetchToDos(true)\n      td.elements.allFilter.classList.remove("filterActive")\n      td.elements.activeFilter.classList.remove("filterActive")\n      td.elements.completedFilter.classList.add("filterActive")\n      td.renderToDos()\n    })\n  }\n\n  td.handleClick = async function (id) {\n    const idx = td.todos.findIndex((t) => t.id === parseInt(id))\n    td.todos[idx].completed = !td.todos[idx].completed\n    console.log(td.todos[idx])\n    await fetch(`${td.API_URL}/todos/${id}`, {\n      method: "PUT",\n      body: JSON.stringify(td.todos[idx]),\n      headers: {\n        \'Content-Type\': \'application/json\'\n      }\n    }).then((res) => res.json())\n  }\n\n  td.handleChange = _.debounce(async function (id, value) {\n    const idx = td.todos.findIndex((t) => t.id === parseInt(id))\n    td.todos[idx].name = value\n    await fetch(`${td.API_URL}/todos/${id}`, {\n      method: "PUT",\n      body: JSON.stringify(td.todos[idx]),\n      headers: {\n        \'Content-Type\': \'application/json\'\n      }\n    }).then((res) => res.json())\n  }, 500)\n\n  td.addToDo = async function (name) {\n    const data = { name: name, completed: false }\n    await fetch(`${td.API_URL}/todos`, {\n      method: "POST",\n      body: JSON.stringify(data),\n      headers: {\n        \'Content-Type\': \'application/json\'\n      }\n    })\n    td.todos.push(data)\n    td.renderToDos()\n    td.elements.mainInput.value = ""\n  }\n\n  td.handleDelete = async function (id) {\n    await fetch(`${td.API_URL}/todos/${id}`, {\n      method: "DELETE"\n    })\n    const idx = td.todos.findIndex((t) => t.id === parseInt(id))\n    td.todos.splice(idx, 1)\n  }\n}\n\nconst app = new FullStackBookToDo()\napp.init()\n')),(0,a.kt)("h2",{id:"css"},"CSS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".layout {\n  width: 300px;\n  margin: 20px;\n}\n\n.container {\n  width: 300px;\n  border: 1px solid black;\n}\n\n.title {\n  text-align: center;\n  font-size: 24px;\n  margin: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.mainInputContainer {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.mainInput {\n  padding: 5px;\n  border: 1px solid black;\n  margin: auto;\n  display: block;\n  width: 260px;\n  height: 40px;\n}\n\n.filters {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  margin-top: 20px;\n  border-top: 1px solid black;\n}\n\n.filterBtn {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.filterActive {\n  text-decoration: underline;\n}\n\n.todoInput {\n  padding: 5px;\n  border: 1px solid black;\n  width: 194px;\n  height: 40px;\n  margin: 5px;\n}\n\n.todoRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 5px 20px;\n}\n\n.deleteBtn {\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[6124],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=o.createContext({}),s=function(t){var e=o.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(r,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(f,l(l({ref:e},c),{},{components:n})):o.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var r in e)hasOwnProperty.call(e,r)&&(d[r]=e[r]);d.originalType=t,d.mdxType="string"==typeof t?t:a,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4275:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={},l="VanillaJS To Do UI",d={unversionedId:"frontend/vanillajs-todo",id:"frontend/vanillajs-todo",title:"VanillaJS To Do UI",description:"- GitHub//github.com/travisluong/fullstackbook-todo-vanillajs",source:"@site/docs/frontend/vanillajs-todo.md",sourceDirName:"frontend",slug:"/frontend/vanillajs-todo",permalink:"/fullstackbook/frontend/vanillajs-todo",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/frontend/vanillajs-todo.md",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"UI Component Libraries",permalink:"/fullstackbook/frontend/ui-component-libraries"}},r={},s=[{value:"HTML",id:"html",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"CSS",id:"css",level:2}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vanillajs-to-do-ui"},"VanillaJS To Do UI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-todo-vanillajs"},"https://github.com/travisluong/fullstackbook-todo-vanillajs")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/NYaYoBAY4ME"},"Full Stack NestJS + VanillaJS Tutorial")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/p9YTVAq472E"},"Full Stack FastAPI + VanillaJS Tutorial")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/cLu0bbW8rPE"},"Full Stack Spring Boot + VanillaJS Tutorial"))),(0,a.kt)("h2",{id:"html"},"HTML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Full Stack Book To Do</title>\n  <link rel="stylesheet" href="style.css">\n  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"><\/script>\n  <script src="app.js"><\/script>\n</head>\n<body>\n  <div class="layout">\n    <h1 class="title">To Do</h1>\n    <div class="container">\n      <div class="mainInputContainer">\n        <input class="mainInput" placeholder="What needs to be done?" />\n      </div>\n      <div class="toDoContainer">\n      </div>\n      <div class="filters">\n        <button class="filterBtn all">All</button>\n        <button class="filterBtn active">Active</button>\n        <button class="filterBtn completed">Completed</button>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},'function FullStackBookToDo() {\n  const td = {}\n  td.API_URL = "http://localhost:8000";\n  td.elements = {}\n\n  this.init = async function () {\n    document.addEventListener("DOMContentLoaded", async function () {\n      td.getElements()\n      await td.fetchToDos()\n      await td.renderToDos()\n      td.bindEvents()\n    });\n  }\n\n  td.getElements = function () {\n    td.elements.toDoContainer = document.querySelector(".toDoContainer")\n    td.elements.addToDoBtn = document.querySelector(".addToDoBtn")\n    td.elements.deleteBtn = document.querySelector(".deleteBtn")\n    td.elements.checkboxes = document.querySelectorAll(".toDoCheckbox")\n    td.elements.mainInput = document.querySelector(".mainInput")\n    td.elements.allFilter = document.querySelector(".filterBtn.all")\n    td.elements.activeFilter = document.querySelector(".filterBtn.active")\n    td.elements.completedFilter = document.querySelector(".filterBtn.completed")\n  }\n\n  td.fetchToDos = async function (completed) {\n    let path = "todos"\n    if (completed !== undefined) {\n      path += `?completed=${completed}`\n    }\n    const todos = await fetch(`${td.API_URL}/${path}`).then((res) => res.json());\n    td.todos = todos\n  }\n\n  td.renderToDos = async function () {\n    td.elements.toDoContainer.innerHTML = "";\n    td.todos.forEach((todo) => {\n      const div = document.createElement("div")\n      div.className = "todoRow"\n\n      const checkbox = document.createElement("input")\n      checkbox.type = "checkbox"\n      checkbox.className = "toDoCheckbox"\n      checkbox.dataset.id = todo.id\n      checkbox.checked = todo.completed ? "checked" : ""\n\n      const input = document.createElement("input")\n      input.type = "text"\n      input.value = todo.name\n      input.className = "todoInput"\n      input.dataset.id = todo.id\n\n      const btn = document.createElement("button")\n      btn.className = "deleteBtn"\n      btn.dataset.id = todo.id\n      const img = document.createElement("img")\n      img.className = "deleteImg"\n      img.dataset.id = todo.id\n      img.src = "/material-symbols_delete-outline-sharp.svg"\n      btn.appendChild(img)\n\n      div.appendChild(checkbox)\n      div.appendChild(input)\n      div.appendChild(btn)\n      td.elements.toDoContainer.appendChild(div)\n    })\n  }\n\n  td.bindEvents = function () {\n    document.addEventListener("click", function (event) {\n      if (event.target.className === "toDoCheckbox") {\n        td.handleClick(event.target.dataset.id)\n      }\n\n      if (event.target.className === "deleteImg") {\n        td.handleDelete(event.target.dataset.id)\n      }\n    })\n\n    document.addEventListener("input", function (event) {\n      if (event.target.className === "toDoInput") {\n        td.handleChange(event.target.dataset.id, event.target.value)\n      }\n    })\n\n    td.elements.mainInput.addEventListener("keypress", function (event) {\n      if (event.key === "Enter") {\n        td.addToDo(event.target.value)\n      }\n    })\n\n    td.elements.allFilter.addEventListener("click", async function (event) {\n      await td.fetchToDos()\n      td.elements.allFilter.classList.add("filterActive")\n      td.elements.activeFilter.classList.remove("filterActive")\n      td.elements.completedFilter.classList.remove("filterActive")\n      td.renderToDos()\n    })\n\n    td.elements.activeFilter.addEventListener("click", async function (event) {\n      await td.fetchToDos(false)\n      td.elements.allFilter.classList.remove("filterActive")\n      td.elements.activeFilter.classList.add("filterActive")\n      td.elements.completedFilter.classList.remove("filterActive")\n      td.renderToDos()\n    })\n\n    td.elements.completedFilter.addEventListener("click", async function (event) {\n      await td.fetchToDos(true)\n      td.elements.allFilter.classList.remove("filterActive")\n      td.elements.activeFilter.classList.remove("filterActive")\n      td.elements.completedFilter.classList.add("filterActive")\n      td.renderToDos()\n    })\n  }\n\n  td.handleClick = async function (id) {\n    const idx = td.todos.findIndex((t) => t.id === parseInt(id))\n    td.todos[idx].completed = !td.todos[idx].completed\n    await fetch(`${td.API_URL}/todos/${id}`, {\n      method: "PUT",\n      body: JSON.stringify(td.todos[idx]),\n      headers: {\n        \'Content-Type\': \'application/json\'\n      }\n    }).then((res) => res.json())\n  }\n\n  td.handleChange = _.debounce(async function (id, value) {\n    const idx = td.todos.findIndex((t) => t.id === parseInt(id))\n    td.todos[idx].name = value\n    await fetch(`${td.API_URL}/todos/${id}`, {\n      method: "PUT",\n      body: JSON.stringify(td.todos[idx]),\n      headers: {\n        \'Content-Type\': \'application/json\'\n      }\n    }).then((res) => res.json())\n  }, 500)\n\n  td.addToDo = async function (name) {\n    const data = { name: name, completed: false }\n    const res = await fetch(`${td.API_URL}/todos`, {\n      method: "POST",\n      body: JSON.stringify(data),\n      headers: {\n        \'Content-Type\': \'application/json\'\n      }\n    })\n    const json = await res.json()\n    td.todos.push(json)\n    td.renderToDos()\n    td.elements.mainInput.value = ""\n  }\n\n  td.handleDelete = async function (id) {\n    await fetch(`${td.API_URL}/todos/${id}`, {\n      method: "DELETE"\n    })\n    const idx = td.todos.findIndex((t) => t.id === parseInt(id))\n    td.todos.splice(idx, 1)\n    td.renderToDos()\n  }\n}\n\nconst app = new FullStackBookToDo()\napp.init()\n')),(0,a.kt)("h2",{id:"css"},"CSS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".layout {\n  width: 300px;\n  margin: 20px;\n}\n\n.container {\n  width: 300px;\n  border: 1px solid black;\n}\n\n.title {\n  text-align: center;\n  font-size: 24px;\n  margin: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.mainInputContainer {\n  width: 100%;\n  margin: 20px 0;\n}\n\n.mainInput {\n  padding: 5px;\n  border: 1px solid black;\n  margin: auto;\n  display: block;\n  width: 260px;\n  height: 40px;\n}\n\n.filters {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  margin-top: 20px;\n  border-top: 1px solid black;\n}\n\n.filterBtn {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.filterActive {\n  text-decoration: underline;\n}\n\n.todoInput {\n  padding: 5px;\n  border: 1px solid black;\n  width: 194px;\n  height: 40px;\n  margin: 5px;\n}\n\n.todoRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 5px 20px;\n}\n\n.deleteBtn {\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n")))}p.isMDXComponent=!0}}]);
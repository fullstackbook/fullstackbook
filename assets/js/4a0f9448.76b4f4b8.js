"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={},a="Express To Do API",p={unversionedId:"code/express-todo",id:"code/express-todo",title:"Express To Do API",description:"- GitHub//github.com/travisluong/fullstackbook-todo-express",source:"@site/docs/code/express-todo.md",sourceDirName:"code",slug:"/code/express-todo",permalink:"/docs/code/express-todo",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/code/express-todo.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"Code",permalink:"/docs/code/"},next:{title:"FastAPI JWT API",permalink:"/docs/code/fastapi-jwt"}},l={},i=[{value:"Command Line",id:"command-line",level:2},{value:"App",id:"app",level:2},{value:"Database",id:"database",level:2},{value:"Packages",id:"packages",level:2}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"express-to-do-api"},"Express To Do API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-todo-express"},"https://github.com/travisluong/fullstackbook-todo-express"))),(0,o.kt)("h2",{id:"command-line"},"Command Line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Terminal"',title:'"Terminal"'},"createdb fullstackbook-todo-express\nnpm init\nnpm install --save express nodemon cors\nnode app.js\nnpm run dev\n")),(0,o.kt)("h2",{id:"app"},"App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},"const express = require('express')\nconst bodyParser = require('body-parser')\nvar cors = require('cors')\nconst app = express()\nconst port = 8000\n\napp.use(bodyParser.json())\napp.use(cors())\n\nconst pgp = require('pg-promise')(/* options */)\nconst db = pgp('postgres://postgres:@localhost:5432/fullstackbook-todo-express')\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.post('/todos', async (req, res) => {\n  const result = await db.one('INSERT INTO todos (name, completed) VALUES (${name}, ${completed}) RETURNING *', req.body)\n  res.send(result)\n})\n\napp.get('/todos', async (req, res) => {\n  if (req.query.completed) {\n    const result = await db.query('SELECT * FROM todos WHERE completed = $1', [req.query.completed])\n    res.send(result)\n  } else {\n    const result = await db.query('SELECT * FROM todos')\n    res.send(result)\n  }\n})\n\napp.get('/todos/:id', async (req, res) => {\n  const result = await db.oneOrNone('SELECT * FROM todos WHERE id = $1', [req.params.id])\n  if (!result) {\n    res.status(404).send(\"todo not found\")\n    return\n  }\n  res.send(result)\n})\n\napp.put('/todos/:id', async (req, res) => {\n  const result = await db.oneOrNone('SELECT * FROM todos WHERE id = $1', [req.params.id])\n  if (!result) {\n    res.status(404).send(\"todo not found\")\n    return\n  }\n  const result2 = await db.one('UPDATE todos SET name = $1, completed = $2 WHERE id = $3 RETURNING *', [req.body.name, req.body.completed, req.params.id])\n  res.send(result2)\n})\n\napp.delete('/todos/:id', async (req, res) => {\n  await db.none('DELETE FROM todos WHERE id = $1', [req.params.id])\n  res.sendStatus(200)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n")),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="schema.sql"',title:'"schema.sql"'},"create table todos (\n  id bigserial primary key,\n  name text,\n  completed boolean not null default false\n);\n")),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "fullstackbook-todo-express",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "dev": "nodemon app.js"\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "cors": "^2.8.5",\n    "express": "^4.18.1",\n    "nodemon": "^2.0.19",\n    "pg-promise": "^10.12.0"\n  }\n}\n')))}d.isMDXComponent=!0}}]);
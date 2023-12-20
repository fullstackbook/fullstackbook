"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[5685],{3905:(n,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>m});var t=o(7294);function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function s(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function c(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},s=Object.keys(n);for(t=0;t<s.length;t++)o=s[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var p=t.createContext({}),i=function(n){var e=t.useContext(p),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},l=function(n){var e=i(n.components);return t.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var o=n.components,r=n.mdxType,s=n.originalType,p=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),u=i(o),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return o?t.createElement(f,a(a({ref:e},l),{},{components:o})):t.createElement(f,a({ref:e},l))}));function m(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=o.length,a=new Array(s);a[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var i=2;i<s;i++)a[i]=o[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4031:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var t=o(7462),r=(o(7294),o(3905));const s={},a="FastAPI psycopg3 API",c={unversionedId:"backend/fastapi-psycopg3",id:"backend/fastapi-psycopg3",title:"FastAPI psycopg3 API",description:"- GitHub//github.com/travisluong/fullstackbook-fastapi-psycopg3",source:"@site/docs/backend/fastapi-psycopg3.md",sourceDirName:"backend",slug:"/backend/fastapi-psycopg3",permalink:"/backend/fastapi-psycopg3",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/fastapi-psycopg3.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"FastAPI JWT API",permalink:"/backend/fastapi-jwt"},next:{title:"FastAPI Redis",permalink:"/backend/fastapi-redis"}},p={},i=[{value:"Command Line",id:"command-line",level:2},{value:"Routers",id:"routers",level:2},{value:"Config",id:"config",level:2},{value:"DB",id:"db",level:2},{value:"Main",id:"main",level:2},{value:"Env",id:"env",level:2},{value:"References",id:"references",level:2}],l={toc:i};function d(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,t.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fastapi-psycopg3-api"},"FastAPI psycopg3 API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-fastapi-psycopg3"},"https://github.com/travisluong/fullstackbook-fastapi-psycopg3")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/Ep6XExNOPSc"},"https://youtu.be/Ep6XExNOPSc"))),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},'python -m venv venv\n. venv/bin/activate # mac and linux\n. venv/Scripts/activate # windows\npip install fastapi\npip install "uvicorn[standard]"\npip install psycopg\npip install psycopg_pool\npsql -U postgres -c "create database fastapi_psycopg3"\npsql -U postgres -d fastapi_psycopg3 -f v1_create_todos_table.sql\n\n')),(0,r.kt)("h2",{id:"routers"},"Routers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app/routers/todos_v1.py"',title:'"app/routers/todos_v1.py"'},'from fastapi import APIRouter, HTTPException\nfrom pydantic import BaseModel\nfrom psycopg.rows import class_row\n\nfrom app.db import get_conn\n\nrouter = APIRouter(prefix="/v1/todos")\n\n\nclass ToDo(BaseModel):\n    id: int | None\n    name: str\n    completed: bool\n\n\n@router.post("")\ndef create_todo(todo: ToDo):\n    with get_conn() as conn:\n        conn.execute(\n            "insert into todos (name, completed) values (%s, %s)",\n            [todo.name, todo.completed],\n        )\n\n\n@router.get("")\ndef get_todos():\n    with get_conn() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:\n        records = cur.execute("select * from todos").fetchall()\n        return records\n\n\n@router.get("/{id}")\ndef get_todo(id: int):\n    with get_conn() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:\n        record = cur.execute("select * from todos where id=%s", [id]).fetchone()\n        if not record:\n            raise HTTPException(404)\n        return record\n\n\n@router.put("/{id}")\ndef update_todo(id: int, todo: ToDo):\n    with get_conn() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:\n        record = cur.execute(\n            "update todos set name=%s, completed=%s where id=%s returning *",\n            [todo.name, todo.completed, id],\n        ).fetchone()\n        return record\n\n\n@router.delete("/{id}")\ndef delete_todo(id: int):\n    with get_conn() as conn:\n        conn.execute("delete from todos where id=%s", [id])\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app/routers/todos_v2.py"',title:'"app/routers/todos_v2.py"'},'from fastapi import APIRouter, HTTPException\nfrom pydantic import BaseModel\nfrom psycopg.rows import class_row\n\nfrom app.db import get_pool\n\nrouter = APIRouter(prefix="/v2/todos")\n\npool = get_pool()\n\n\nclass ToDo(BaseModel):\n    id: int | None\n    name: str\n    completed: bool\n\n\n@router.post("")\ndef create_todo(todo: ToDo):\n    with pool.connection() as conn:\n        conn.execute(\n            "insert into todos (name, completed) values (%s, %s)",\n            [todo.name, todo.completed],\n        )\n\n\n@router.get("")\ndef get_todos():\n    with pool.connection() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:\n        records = cur.execute("select * from todos").fetchall()\n        return records\n\n\n@router.get("/{id}")\ndef get_todo(id: int):\n    with pool.connection() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:\n        record = cur.execute("select * from todos where id=%s", [id]).fetchone()\n        if not record:\n            raise HTTPException(404)\n        return record\n\n\n@router.put("/{id}")\ndef update_todo(id: int, todo: ToDo):\n    with pool.connection() as conn, conn.cursor(row_factory=class_row(ToDo)) as cur:\n        record = cur.execute(\n            "update todos set name=%s, completed=%s where id=%s returning *",\n            [todo.name, todo.completed, id],\n        ).fetchone()\n        return record\n\n\n@router.delete("/{id}")\ndef delete_todo(id: int):\n    with pool.connection() as conn:\n        conn.execute("delete from todos where id=%s", [id])\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app/routers/todos_v3.py"',title:'"app/routers/todos_v3.py"'},'from fastapi import APIRouter, HTTPException\nfrom pydantic import BaseModel\nfrom psycopg.rows import class_row\n\nfrom app.db import get_async_pool\n\nrouter = APIRouter(prefix="/v3/todos")\n\npool = get_async_pool()\n\n\nclass ToDo(BaseModel):\n    id: int | None\n    name: str\n    completed: bool\n\n\n@router.post("")\nasync def create_todo(todo: ToDo):\n    async with pool.connection() as conn:\n        await conn.execute(\n            "insert into todos (name, completed) values (%s, %s)",\n            [todo.name, todo.completed],\n        )\n\n\n@router.get("")\nasync def get_todos():\n    async with pool.connection() as conn, conn.cursor(\n        row_factory=class_row(ToDo)\n    ) as cur:\n        await cur.execute("select * from todos")\n        records = await cur.fetchall()\n        return records\n\n\n@router.get("/{id}")\nasync def get_todo(id: int):\n    async with pool.connection() as conn, conn.cursor(\n        row_factory=class_row(ToDo)\n    ) as cur:\n        await cur.execute("select * from todos where id=%s", [id])\n        record = await cur.fetchone()\n        if not record:\n            raise HTTPException(404)\n        return record\n\n\n@router.put("/{id}")\nasync def update_todo(id: int, todo: ToDo):\n    async with pool.connection() as conn, conn.cursor(\n        row_factory=class_row(ToDo)\n    ) as cur:\n        await cur.execute(\n            "update todos set name=%s, completed=%s where id=%s returning *",\n            [todo.name, todo.completed, id],\n        )\n        record = await cur.fetchone()\n        return record\n\n\n@router.delete("/{id}")\nasync def delete_todo(id: int):\n    async with pool.connection() as conn:\n        await conn.execute("delete from todos where id=%s", [id])\n\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app/config.py"',title:'"app/config.py"'},'from functools import lru_cache\n\nfrom pydantic import BaseSettings\n\n# uncomment to see psycopg.pool logs\n# import logging\n# logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")\n# logging.getLogger("psycopg.pool").setLevel(logging.INFO)\n\n\nclass Settings(BaseSettings):\n    db_user: str\n    db_password: str\n    db_host: str\n    db_port: str\n    db_name: str\n\n    class Config:\n        env_file = ".env"\n\n\n@lru_cache()\ndef get_settings():\n    return Settings()\n\n')),(0,r.kt)("h2",{id:"db"},"DB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app/db.py"',title:'"app/db.py"'},'from functools import lru_cache\n\nimport psycopg\nfrom psycopg_pool import ConnectionPool, AsyncConnectionPool\n\nfrom app.config import get_settings\n\nsettings = get_settings()\n\nconninfo = f"user={settings.db_user} password={settings.db_password} host={settings.db_host} port={settings.db_port} dbname={settings.db_name}"\n\n\ndef get_conn():\n    return psycopg.connect(conninfo=conninfo)\n\n\n@lru_cache()\ndef get_pool():\n    return ConnectionPool(conninfo=conninfo)\n\n\n@lru_cache()\ndef get_async_pool():\n    return AsyncConnectionPool(conninfo=conninfo)\n\n')),(0,r.kt)("h2",{id:"main"},"Main"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app/main.py"',title:'"app/main.py"'},'import asyncio\nfrom fastapi import FastAPI\n\nfrom app.routers import todos_v1, todos_v2, todos_v3\nfrom app.db import get_pool, get_async_pool\n\napp = FastAPI()\n\npool = get_pool()\nasync_pool = get_async_pool()\n\napp.include_router(todos_v1.router)\napp.include_router(todos_v2.router)\napp.include_router(todos_v3.router)\n\n\nasync def check_connections():\n    while True:\n        await asyncio.sleep(600)\n        print("check connections")\n        pool.check()\n\n\nasync def check_async_connections():\n    while True:\n        await asyncio.sleep(600)\n        print("check async connections")\n        await async_pool.check()\n\n\n@app.on_event("startup")\ndef startup():\n    asyncio.create_task(check_connections())\n    asyncio.create_task(check_async_connections())\n\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}\n\n')),(0,r.kt)("h2",{id:"env"},"Env"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title=".env"',title:'".env"'},"DB_USER=postgres\nDB_PASSWORD=postgres\nDB_HOST=localhost\nDB_PORT=5432\nDB_NAME=fastapi_psycopg3\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.psycopg.org/psycopg3/"},"https://www.psycopg.org/psycopg3/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.psycopg.org/psycopg3/docs/"},"https://www.psycopg.org/psycopg3/docs/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/psycopg/psycopg/issues/395"},"https://github.com/psycopg/psycopg/issues/395"))))}d.isMDXComponent=!0}}]);
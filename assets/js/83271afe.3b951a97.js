"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[9390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={},r="FastAPI To Do API",s={unversionedId:"backend/fastapi-todo",id:"backend/fastapi-todo",title:"FastAPI To Do API",description:"- GitHub//github.com/travisluong/fullstackbook-todo-fastapi",source:"@site/docs/backend/fastapi-todo.md",sourceDirName:"backend",slug:"/backend/fastapi-todo",permalink:"/fullstackbook/backend/fastapi-todo",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/fastapi-todo.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"FastAPI Redis",permalink:"/fullstackbook/backend/fastapi-redis"},next:{title:"Microservice Architecture",permalink:"/fullstackbook/backend/microservice"}},l={},d=[{value:"Command Line",id:"command-line",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Entry Point / CORS / Exception Handler",id:"entry-point--cors--exception-handler",level:2},{value:"Database Migrations",id:"database-migrations",level:2},{value:"Schemas",id:"schemas",level:2},{value:"ORM",id:"orm",level:2},{value:"Routers",id:"routers",level:2},{value:"Testing",id:"testing",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fastapi-to-do-api"},"FastAPI To Do API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-todo-fastapi"},"https://github.com/travisluong/fullstackbook-todo-fastapi")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/InzrcSk_9YU"},"Full Stack FastAPI + NextJS JWT Authentication Tutorial")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/p9YTVAq472E"},"Full Stack FastAPI + VanillaJS Tutorial")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/J9EbxoJGwbI"},"Full Stack FastAPI + NuxtJS Tutorial")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/HJ314MNcCck"},"Full Stack FastAPI + Next.js Tutorial"))),(0,a.kt)("h2",{id:"command-line"},"Command Line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},'mkdir fullstackbook-todo-fastapi\ncd fullstackbook-todo-fastapi\npython3 -m venv venv\n. venv/bin/activate\npip install fastapi "uvicorn[standard]" alembic psycopg2 pytest requests\npip freeze > requirements.txt\nuvicorn main:app --reload\ncreatedb fullstackbook-todo-fastapi\npsql fullstackbook-todo-fastapi\nalembic init alembic\nalembic revision -m "create todos table"\nalembic upgrade head\nalembic downgrade -1\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".env.example"',title:'".env.example"'},'DATABASE_HOST=localhost\nDATABASE_NAME=fullstackbook-todo-fastapi\nDATABASE_USER=postgres\nDATABASE_PASSWORD=\nDATABASE_PORT=5432\nAPP_NAME="Full Stack Book To Do"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="config.py"',title:'"config.py"'},'from pydantic import BaseSettings\n\n\nclass Settings(BaseSettings):\n    app_name: str = "Awesome API"\n\n    class Config:\n        env_file = ".env"\n')),(0,a.kt)("h2",{id:"entry-point--cors--exception-handler"},"Entry Point / CORS / Exception Handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'from functools import lru_cache\nfrom typing import Union\n\nfrom fastapi import FastAPI, Depends\nfrom fastapi.responses import PlainTextResponse\nfrom starlette.exceptions import HTTPException as StarletteHTTPException\nfrom fastapi.middleware.cors import CORSMiddleware\n\nfrom routers import todos\n\nimport config\n\napp = FastAPI()\napp.include_router(todos.router)\n\n\norigins = [\n    "http://localhost:3000",\n]\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=origins,\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)\n\n\n@app.exception_handler(StarletteHTTPException)\nasync def http_exception_handler(request, exc):\n    print(f"{repr(exc)}")\n    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)\n\n@lru_cache()\ndef get_settings():\n    return config.Settings()\n\n\n@app.get("/")\ndef read_root(settings: config.Settings = Depends(get_settings)):\n    print(settings.app_name)\n    return "Hello World"\n\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int, q: Union[str, None] = None):\n    return {"item_id": item_id, "q": q}\n')),(0,a.kt)("h2",{id:"database-migrations"},"Database Migrations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="alembic/env.py"',title:'"alembic/env.py"'},'import os\nfrom logging.config import fileConfig\n\nfrom sqlalchemy import engine_from_config\nfrom sqlalchemy import pool\n\nfrom alembic import context\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\n# this is the Alembic Config object, which provides\n# access to the values within the .ini file in use.\nconfig = context.config\n\nconfig.set_main_option(\'sqlalchemy.url\', f"postgresql://{os.environ[\'DATABASE_USER\']}:@{os.environ[\'DATABASE_HOST\']}/{os.environ[\'DATABASE_NAME\']}")\n\n# Interpret the config file for Python logging.\n# This line sets up loggers basically.\nfileConfig(config.config_file_name)\n\n# add your model\'s MetaData object here\n# for \'autogenerate\' support\n# from myapp import mymodel\n# target_metadata = mymodel.Base.metadata\ntarget_metadata = None\n\n# other values from the config, defined by the needs of env.py,\n# can be acquired:\n# my_important_option = config.get_main_option("my_important_option")\n# ... etc.\n\n\ndef run_migrations_offline():\n    """Run migrations in \'offline\' mode.\n\n    This configures the context with just a URL\n    and not an Engine, though an Engine is acceptable\n    here as well.  By skipping the Engine creation\n    we don\'t even need a DBAPI to be available.\n\n    Calls to context.execute() here emit the given string to the\n    script output.\n\n    """\n    url = config.get_main_option("sqlalchemy.url")\n    context.configure(\n        url=url,\n        target_metadata=target_metadata,\n        literal_binds=True,\n        dialect_opts={"paramstyle": "named"},\n    )\n\n    with context.begin_transaction():\n        context.run_migrations()\n\n\ndef run_migrations_online():\n    """Run migrations in \'online\' mode.\n\n    In this scenario we need to create an Engine\n    and associate a connection with the context.\n\n    """\n    connectable = engine_from_config(\n        config.get_section(config.config_ini_section),\n        prefix="sqlalchemy.",\n        poolclass=pool.NullPool,\n    )\n\n    with connectable.connect() as connection:\n        context.configure(\n            connection=connection, target_metadata=target_metadata\n        )\n\n        with context.begin_transaction():\n            context.run_migrations()\n\n\nif context.is_offline_mode():\n    run_migrations_offline()\nelse:\n    run_migrations_online()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="alembic/versions/049c5ab5051e_create_todos_table.py"',title:'"alembic/versions/049c5ab5051e_create_todos_table.py"'},'"""create todos table\n\nRevision ID: 049c5ab5051e\nRevises: \nCreate Date: 2022-07-27 16:52:56.499567\n\n"""\nfrom alembic import op\nimport sqlalchemy as sa\n\n\n# revision identifiers, used by Alembic.\nrevision = \'049c5ab5051e\'\ndown_revision = None\nbranch_labels = None\ndepends_on = None\n\n\ndef upgrade():\n    op.execute("""\n        create table todos (\n            id bigserial primary key,\n            name text,\n            completed boolean not null default false\n        );\n    """)\n\n\ndef downgrade():\n    op.execute("drop table todos;")\n')),(0,a.kt)("h2",{id:"schemas"},"Schemas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="schemas.py"',title:'"schemas.py"'},"from pydantic import BaseModel\n\nclass ToDoRequest(BaseModel):\n    name: str\n    completed: bool\n\nclass ToDoResponse(BaseModel):\n    name: str\n    completed: bool\n    id: int\n\n    class Config:\n        orm_mode = True\n")),(0,a.kt)("h2",{id:"orm"},"ORM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="database.py"',title:'"database.py"'},"import os\nfrom sqlalchemy import create_engine\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\nSQLALCHEMY_DATABASE_URL = f\"postgresql://{os.environ['DATABASE_USER']}:@{os.environ['DATABASE_HOST']}/{os.environ['DATABASE_NAME']}\"\n\nengine = create_engine(\n    SQLALCHEMY_DATABASE_URL\n)\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\n\nBase = declarative_base()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="models.py"',title:'"models.py"'},'from sqlalchemy import Boolean, Column, ForeignKey, Integer, String\nfrom sqlalchemy.orm import relationship\n\nfrom database import Base\n\n\nclass ToDo(Base):\n    __tablename__ = "todos"\n\n    id = Column(Integer, primary_key=True, index=True)\n    name = Column(String)\n    completed = Column(Boolean, default=False)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="crud.py"',title:'"crud.py"'},"from sqlalchemy.orm import Session\nimport models, schemas\n\ndef create_todo(db: Session, todo: schemas.ToDoRequest):\n    db_todo = models.ToDo(name=todo.name, completed=todo.completed)\n    db.add(db_todo)\n    db.commit()\n    db.refresh(db_todo)\n    return db_todo\n\ndef read_todos(db: Session, completed: bool):\n    if completed is None:\n        return db.query(models.ToDo).all()\n    else:\n        return db.query(models.ToDo).filter(models.ToDo.completed == completed).all()\n\ndef read_todo(db: Session, id: int):\n    return db.query(models.ToDo).filter(models.ToDo.id == id).first()\n\ndef update_todo(db: Session, id: int, todo: schemas.ToDoRequest):\n    db_todo = db.query(models.ToDo).filter(models.ToDo.id == id).first()\n    if db_todo is None:\n        return None\n    db.query(models.ToDo).filter(models.ToDo.id == id).update({'name': todo.name, 'completed': todo.completed})\n    db.commit()\n    db.refresh(db_todo)\n    return db_todo\n\ndef delete_todo(db: Session, id: int):\n    db_todo = db.query(models.ToDo).filter(models.ToDo.id == id).first()\n    if db_todo is None:\n        return None\n    db.query(models.ToDo).filter(models.ToDo.id == id).delete()\n    db.commit()\n    return True\n")),(0,a.kt)("h2",{id:"routers"},"Routers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="routers/todos.py"',title:'"routers/todos.py"'},'from typing import List\nfrom sqlalchemy.orm import Session\nfrom fastapi import APIRouter, Depends, HTTPException, status\nimport schemas\nimport crud\nfrom database import SessionLocal\n\nrouter = APIRouter(\n    prefix="/todos"\n)\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@router.post("", status_code=status.HTTP_201_CREATED)\ndef create_todo(todo: schemas.ToDoRequest, db: Session = Depends(get_db)):\n    todo = crud.create_todo(db, todo)\n    return todo\n\n@router.get("", response_model=List[schemas.ToDoResponse])\ndef get_todos(completed: bool = None, db: Session = Depends(get_db)):\n    todos = crud.read_todos(db, completed)\n    return todos\n\n@router.get("/{id}")\ndef get_todo_by_id(id: int, db: Session = Depends(get_db)):\n    todo = crud.read_todo(db, id)\n    if todo is None:\n        raise HTTPException(status_code=404, detail="to do not found")\n    return todo\n\n@router.put("/{id}")\ndef update_todo(id: int, todo: schemas.ToDoRequest, db: Session = Depends(get_db)):\n    todo = crud.update_todo(db, id, todo)\n    if todo is None:\n        raise HTTPException(status_code=404, detail="to do not found")\n    return todo\n\n@router.delete("/{id}", status_code=status.HTTP_200_OK)\ndef delete_todo(id: int, db: Session = Depends(get_db)):\n    res = crud.delete_todo(db, id)\n    if res is None:\n        raise HTTPException(status_code=404, detail="to do not found")\n')),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="test_main.py"',title:'"test_main.py"'},'from fastapi.testclient import TestClient\n\nfrom main import app\nfrom routers import todos\n\n\nclient = TestClient(app)\n\n\ndef test_read_main():\n    response = client.get("/")\n    assert response.status_code == 200\n    assert response.json() == "Hello World"\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[525],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const r={},i="FastAPI",s={unversionedId:"projects/todo/backend/fastapi",id:"projects/todo/backend/fastapi",title:"FastAPI",description:"https://github.com/travisluong/fullstackbook-todo-fastapi",source:"@site/docs/projects/todo/backend/fastapi.md",sourceDirName:"projects/todo/backend",slug:"/projects/todo/backend/fastapi",permalink:"/docs/projects/todo/backend/fastapi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/todo/backend/fastapi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"To Do App",permalink:"/docs/projects/todo/"},next:{title:"NestJS",permalink:"/docs/projects/todo/backend/nestjs"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Entry Point / CORS / Exception Handler",id:"entry-point--cors--exception-handler",level:2},{value:"Routers",id:"routers",level:2},{value:"Schemas",id:"schemas",level:2},{value:"ORM",id:"orm",level:2},{value:"Database Migrations",id:"database-migrations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Testing",id:"testing",level:2}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fastapi"},"FastAPI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/travisluong/fullstackbook-todo-fastapi"},"https://github.com/travisluong/fullstackbook-todo-fastapi")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},'mkdir fullstackbook-todo-fastapi\ncd fullstackbook-todo-fastapi\npython3 -m venv venv\n. venv/bin/activate\npip install fastapi "uvicorn[standard]" alembic psycopg2 pytest requests\npip freeze > requirements.txt\nuvicorn main:app --reload\ncreatedb fullstackbook-todo-fastapi\npsql fullstackbook-todo-fastapi\nalembic init alembic\nalembic revision -m "create todos table"\nalembic upgrade head\nalembic downgrade -1\n')),(0,a.kt)("h2",{id:"entry-point--cors--exception-handler"},"Entry Point / CORS / Exception Handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'from functools import lru_cache\nfrom typing import Union\n\nfrom fastapi import FastAPI, Depends\nfrom fastapi.responses import PlainTextResponse\nfrom starlette.exceptions import HTTPException as StarletteHTTPException\nfrom fastapi.middleware.cors import CORSMiddleware\n\nfrom routers import todos\n\nimport config\n\napp = FastAPI()\napp.include_router(todos.router)\n\n\norigins = [\n    "http://localhost:3000",\n]\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=origins,\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)\n\n\n@app.exception_handler(StarletteHTTPException)\nasync def http_exception_handler(request, exc):\n    print(f"{repr(exc)}")\n    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)\n\n@lru_cache()\ndef get_settings():\n    return config.Settings()\n\n\n@app.get("/")\ndef read_root(settings: config.Settings = Depends(get_settings)):\n    print(settings.app_name)\n    return "Hello World"\n\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int, q: Union[str, None] = None):\n    return {"item_id": item_id, "q": q}\n')),(0,a.kt)("h2",{id:"routers"},"Routers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="routers/todos.py"',title:'"routers/todos.py"'},'from typing import List\nfrom sqlalchemy.orm import Session\nfrom fastapi import APIRouter, Depends, HTTPException, status\nimport schemas\nimport crud\nfrom database import SessionLocal, engine\n\nrouter = APIRouter(\n    prefix="/todos"\n)\n\n# Dependency\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@router.post("/", status_code=status.HTTP_201_CREATED)\ndef create_todo(todo: schemas.ToDoRequest, db: Session = Depends(get_db)):\n    todo = crud.create_todo(db, todo)\n    return todo\n\n@router.get("/", response_model=List[schemas.ToDoResponse])\ndef get_todos(completed: bool, db: Session = Depends(get_db)):\n    todos = crud.read_todos(db, completed)\n    return todos\n\n@router.get("/{id}")\ndef get_todo_by_id(id: int, db: Session = Depends(get_db)):\n    todo = crud.read_todo(db, id)\n    if todo is None:\n        raise HTTPException(status_code=404, detail="to do not found")\n    return todo\n\n@router.put("/{id}")\ndef update_todo(id: int, todo: schemas.ToDoRequest, db: Session = Depends(get_db)):\n    todo = crud.update_todo(db, id, todo)\n    if todo is None:\n        raise HTTPException(status_code=404, detail="to do not found")\n    return todo\n\n@router.delete("/{id}", status_code=status.HTTP_200_OK)\ndef delete_todo(id: int, db: Session = Depends(get_db)):\n    res = crud.delete_todo(db, id)\n    if res is None:\n        raise HTTPException(status_code=404, detail="to do not found")\n')),(0,a.kt)("h2",{id:"schemas"},"Schemas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="schemas.py"',title:'"schemas.py"'},"from pydantic import BaseModel\n\nclass ToDoRequest(BaseModel):\n    name: str\n    completed: bool\n\nclass ToDoResponse(BaseModel):\n    name: str\n    completed: bool\n    id: int\n\n    class Config:\n        orm_mode = True\n")),(0,a.kt)("h2",{id:"orm"},"ORM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="models.py"',title:'"models.py"'},'from sqlalchemy import Boolean, Column, ForeignKey, Integer, String\nfrom sqlalchemy.orm import relationship\n\nfrom database import Base\n\n\nclass ToDo(Base):\n    __tablename__ = "todos"\n\n    id = Column(Integer, primary_key=True, index=True)\n    name = Column(String)\n    completed = Column(Boolean, default=False)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="crud.py"',title:'"crud.py"'},"from sqlalchemy.orm import Session\nimport models, schemas\n\ndef create_todo(db: Session, todo: schemas.ToDoRequest):\n    db_todo = models.ToDo(name=todo.name, completed=todo.completed)\n    db.add(db_todo)\n    db.commit()\n    db.refresh(db_todo)\n    return db_todo\n\ndef read_todos(db: Session, completed: bool):\n    if completed is None:\n        return db.query(models.ToDo).all()\n    else:\n        return db.query(models.ToDo).filter(models.ToDo.completed == completed).all()\n\ndef read_todo(db: Session, id: int):\n    return db.query(models.ToDo).filter(models.ToDo.id == id).first()\n\ndef update_todo(db: Session, id: int, todo: schemas.ToDoRequest):\n    db_todo = db.query(models.ToDo).filter(models.ToDo.id == id).first()\n    if db_todo is None:\n        return None\n    db.query(models.ToDo).filter(models.ToDo.id == id).update({'name': todo.name, 'completed': todo.completed})\n    db.commit()\n    db.refresh(db_todo)\n    return db_todo\n\ndef delete_todo(db: Session, id: int):\n    db_todo = db.query(models.ToDo).filter(models.ToDo.id == id).first()\n    if db_todo is None:\n        return None\n    db.query(models.ToDo).filter(models.ToDo.id == id).delete()\n    db.commit()\n    return True\n")),(0,a.kt)("h2",{id:"database-migrations"},"Database Migrations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="alembic/env.py"',title:'"alembic/env.py"'},'import os\nfrom logging.config import fileConfig\n\nfrom sqlalchemy import engine_from_config\nfrom sqlalchemy import pool\n\nfrom alembic import context\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\n# this is the Alembic Config object, which provides\n# access to the values within the .ini file in use.\nconfig = context.config\n\nconfig.set_main_option(\'sqlalchemy.url\', f"postgresql://{os.environ[\'DATABASE_USER\']}:@{os.environ[\'DATABASE_HOST\']}/{os.environ[\'DATABASE_NAME\']}")\n\n# Interpret the config file for Python logging.\n# This line sets up loggers basically.\nfileConfig(config.config_file_name)\n\n# add your model\'s MetaData object here\n# for \'autogenerate\' support\n# from myapp import mymodel\n# target_metadata = mymodel.Base.metadata\ntarget_metadata = None\n\n# other values from the config, defined by the needs of env.py,\n# can be acquired:\n# my_important_option = config.get_main_option("my_important_option")\n# ... etc.\n\n\ndef run_migrations_offline():\n    """Run migrations in \'offline\' mode.\n\n    This configures the context with just a URL\n    and not an Engine, though an Engine is acceptable\n    here as well.  By skipping the Engine creation\n    we don\'t even need a DBAPI to be available.\n\n    Calls to context.execute() here emit the given string to the\n    script output.\n\n    """\n    url = config.get_main_option("sqlalchemy.url")\n    context.configure(\n        url=url,\n        target_metadata=target_metadata,\n        literal_binds=True,\n        dialect_opts={"paramstyle": "named"},\n    )\n\n    with context.begin_transaction():\n        context.run_migrations()\n\n\ndef run_migrations_online():\n    """Run migrations in \'online\' mode.\n\n    In this scenario we need to create an Engine\n    and associate a connection with the context.\n\n    """\n    connectable = engine_from_config(\n        config.get_section(config.config_ini_section),\n        prefix="sqlalchemy.",\n        poolclass=pool.NullPool,\n    )\n\n    with connectable.connect() as connection:\n        context.configure(\n            connection=connection, target_metadata=target_metadata\n        )\n\n        with context.begin_transaction():\n            context.run_migrations()\n\n\nif context.is_offline_mode():\n    run_migrations_offline()\nelse:\n    run_migrations_online()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="alembic/versions/049c5ab5051e_create_todos_table.py"',title:'"alembic/versions/049c5ab5051e_create_todos_table.py"'},'"""create todos table\n\nRevision ID: 049c5ab5051e\nRevises: \nCreate Date: 2022-07-27 16:52:56.499567\n\n"""\nfrom alembic import op\nimport sqlalchemy as sa\n\n\n# revision identifiers, used by Alembic.\nrevision = \'049c5ab5051e\'\ndown_revision = None\nbranch_labels = None\ndepends_on = None\n\n\ndef upgrade():\n    op.execute("""\n        create table todos (\n            id bigserial primary key,\n            name text\n        );\n    """)\n\n\ndef downgrade():\n    op.execute("drop table todos;")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="alembic/versions/394a16f4c2da_add_completed_to_todos.py"',title:'"alembic/versions/394a16f4c2da_add_completed_to_todos.py"'},'"""add completed to todos\n\nRevision ID: 394a16f4c2da\nRevises: 049c5ab5051e\nCreate Date: 2022-07-29 21:58:58.112832\n\n"""\nfrom alembic import op\nimport sqlalchemy as sa\n\n\n# revision identifiers, used by Alembic.\nrevision = \'394a16f4c2da\'\ndown_revision = \'049c5ab5051e\'\nbranch_labels = None\ndepends_on = None\n\n\ndef upgrade():\n    op.execute("alter table todos add column completed boolean not null default false")\n\n\ndef downgrade():\n    op.execute("alter table todos drop column completed")\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".env.example"',title:'".env.example"'},'DATABASE_HOST=localhost\nDATABASE_NAME=fullstackbook-todo-fastapi\nDATABASE_USER=postgres\nDATABASE_PASSWORD=\nDATABASE_PORT=5432\nAPP_NAME="Full Stack Book To Do"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="config.py"',title:'"config.py"'},'from pydantic import BaseSettings\n\n\nclass Settings(BaseSettings):\n    app_name: str = "Awesome API"\n\n    class Config:\n        env_file = ".env"\n')),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="test_main.py"',title:'"test_main.py"'},'from fastapi.testclient import TestClient\n\nfrom main import app\nfrom routers import todos\n\n\nclient = TestClient(app)\n\n\ndef test_read_main():\n    response = client.get("/")\n    assert response.status_code == 200\n    assert response.json() == "Hello World"\n')))}p.isMDXComponent=!0}}]);
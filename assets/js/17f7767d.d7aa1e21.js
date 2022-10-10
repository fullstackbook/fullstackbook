"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[5453],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),p=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),u=r,g=m["".concat(a,".").concat(u)]||m[u]||d[u]||s;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9001:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const s={},i="To Do NestJS",l={unversionedId:"projects/todo/backend/nestjs",id:"projects/todo/backend/nestjs",title:"To Do NestJS",description:"https://github.com/travisluong/fullstackbook-todo-nestjs",source:"@site/docs/projects/todo/backend/nestjs.md",sourceDirName:"projects/todo/backend",slug:"/projects/todo/backend/nestjs",permalink:"/docs/projects/todo/backend/nestjs",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/projects/todo/backend/nestjs.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"To Do FastAPI",permalink:"/docs/projects/todo/backend/fastapi"},next:{title:"To Do Next.js API Routes",permalink:"/docs/projects/todo/backend/nextjs"}},a={},p=[{value:"Command Line",id:"command-line",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Entry Point / CORS",id:"entry-point--cors",level:2},{value:"Exception Handler",id:"exception-handler",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"App Resource",id:"app-resource",level:2},{value:"Controller",id:"controller",level:3},{value:"Module",id:"module",level:3},{value:"Service",id:"service",level:3},{value:"To Do Resource",id:"to-do-resource",level:2},{value:"DTO",id:"dto",level:3},{value:"Entities",id:"entities",level:3},{value:"Controller",id:"controller-1",level:3},{value:"Module",id:"module-1",level:3},{value:"Service",id:"service-1",level:3},{value:"Test",id:"test",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"to-do-nestjs"},"To Do NestJS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/travisluong/fullstackbook-todo-nestjs"},"https://github.com/travisluong/fullstackbook-todo-nestjs")),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"npm i -g @nestjs/cli\nnest new fullstackbook-todo-nestjs\nnpm install --save @nestjs/config @nestjs/typeorm typeorm pg\nnpm run start:dev\ncreatedb fullstackbook-todo-nestjs\nnpx typeorm migration:create create-todos-table\nnpm run typeorm migration:run\nnpm run typeorm migration:revert\nnest g resource todo\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".env.example"',title:'".env.example"'},'DATABASE_HOST=localhost\nDATABASE_NAME=fullstackbook-todo-nestjs\nDATABASE_USER=postgres\nDATABASE_PASSWORD=\nDATABASE_PORT=5432\nAPP_NAME="Full Stack Book To Do"\n')),(0,r.kt)("h2",{id:"entry-point--cors"},"Entry Point / CORS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.ts"',title:'"src/main.ts"'},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { HttpExceptionFilter } from './http-exception.filter';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.enableCors();\n  app.useGlobalFilters(new HttpExceptionFilter());\n  await app.listen(8000);\n}\nbootstrap();\n")),(0,r.kt)("h2",{id:"exception-handler"},"Exception Handler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/http-exception.filter.ts"',title:'"src/http-exception.filter.ts"'},"import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';\nimport { Request, Response } from 'express';\n\n@Catch(HttpException)\nexport class HttpExceptionFilter implements ExceptionFilter {\n  private readonly logger = new Logger(HttpExceptionFilter.name);\n\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    const request = ctx.getRequest<Request>();\n    const status = exception.getStatus();\n    const res = exception.getResponse();\n    this.logger.error(res);\n    response\n      .status(status)\n      .json({\n        statusCode: status,\n        timestamp: new Date().toISOString(),\n        path: request.url,\n        message: res['message']\n      });\n  }\n}\n")),(0,r.kt)("h2",{id:"database-migration"},"Database Migration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n  "typeorm": "typeorm-ts-node-commonjs -d src/data-source.ts"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/data-source.ts"',title:'"src/data-source.ts"'},'import "reflect-metadata"\nimport { DataSource } from "typeorm"\nimport \'dotenv/config\'\n\nexport const AppDataSource = new DataSource({\n  type: "postgres",\n  host: process.env.DATABASE_HOST,\n  port: +process.env.DATABASE_PORT,\n  username: process.env.DATABASE_USER,\n  password: process.env.DATABASE_PASSWORD,\n  database: process.env.DATABASE_NAME,\n  synchronize: false,\n  logging: false,\n  entities: [],\n  migrations: ["./src/migration/*.ts"],\n  subscribers: [],\n})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/migration/1659141868030-create-todos-table.ts"',title:'"src/migration/1659141868030-create-todos-table.ts"'},'import { MigrationInterface, QueryRunner } from "typeorm"\n\nexport class createTodosTable1659141868030 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        queryRunner.query(`\n        create table todos (\n            id bigserial primary key,\n            name text,\n            completed boolean not null default false\n        );\n        `);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        queryRunner.query(`drop table todos;`)\n    }\n\n}\n')),(0,r.kt)("h2",{id:"app-resource"},"App Resource"),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.controller.spec.ts"',title:'"src/app.controller.spec.ts"'},"import { ConfigService } from '@nestjs/config';\nimport { Test, TestingModule } from '@nestjs/testing';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\n\ndescribe('AppController', () => {\n  let appController: AppController;\n\n  beforeEach(async () => {\n    const app: TestingModule = await Test.createTestingModule({\n      controllers: [AppController],\n      providers: [AppService, ConfigService],\n    }).compile();\n\n    appController = app.get<AppController>(AppController);\n  });\n\n  describe('root', () => {\n    it('should return \"Hello World\"', () => {\n      expect(appController.getHello()).toBe('Hello World');\n    });\n  });\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"import { Controller, Get } from '@nestjs/common';\nimport { AppService } from './app.service';\n\n@Controller()\nexport class AppController {\n  constructor(private readonly appService: AppService) {}\n\n  @Get()\n  getHello(): string {\n    return this.appService.getHello();\n  }\n}\n")),(0,r.kt)("h3",{id:"module"},"Module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { ConfigModule, ConfigService } from '@nestjs/config';\nimport { TodoModule } from './todo/todo.module';\nimport { Todo } from './todo/entities/todo.entity';\n\n\n@Module({\n  imports: [TypeOrmModule.forRootAsync({\n    imports: [ConfigModule],\n    useFactory: (configService: ConfigService) => ({\n      type: 'postgres',\n      host: configService.get('DATABASE_HOST'),\n      port: +configService.get('DATABASE_PORT'),\n      username: configService.get('DATABASE_USER'),\n      password: configService.get('DATABASE_PASSWORD'),\n      database: configService.get('DATABASE_NAME'),\n      entities: [Todo],\n      synchronize: true,\n    }),\n    inject: [ConfigService]\n  }), TodoModule, ConfigModule.forRoot({ envFilePath: ['.env'] })],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule { }\n")),(0,r.kt)("h3",{id:"service"},"Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.service.ts"',title:'"src/app.service.ts"'},"import { Injectable } from '@nestjs/common';\nimport { ConfigService } from '@nestjs/config';\nimport { Logger } from '@nestjs/common';\n\n@Injectable()\nexport class AppService {\n  private readonly logger = new Logger(AppService.name);\n\n  constructor(private configService: ConfigService) { }\n\n  getHello(): string {\n    this.logger.log(this.configService.get('APP_NAME'));\n    return 'Hello World';\n  }\n}\n")),(0,r.kt)("h2",{id:"to-do-resource"},"To Do Resource"),(0,r.kt)("h3",{id:"dto"},"DTO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/dto/create-todo.dto.ts"',title:'"src/todo/dto/create-todo.dto.ts"'},"export class CreateTodoDto {\n    name: string;\n    completed: boolean;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/dto/update-todo.dto.ts"',title:'"src/todo/dto/update-todo.dto.ts"'},"import { PartialType } from '@nestjs/mapped-types';\nimport { CreateTodoDto } from './create-todo.dto';\n\nexport class UpdateTodoDto extends PartialType(CreateTodoDto) {}\n")),(0,r.kt)("h3",{id:"entities"},"Entities"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/entities/todo.entity.ts"',title:'"src/todo/entities/todo.entity.ts"'},'import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"\n\n@Entity("todos")\nexport class Todo {\n    @PrimaryGeneratedColumn()\n    id: number\n\n    @Column()\n    name: string\n\n    @Column({ default: false })\n    completed: boolean\n}\n')),(0,r.kt)("h3",{id:"controller-1"},"Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/todo.controller.spec.ts"',title:'"src/todo/todo.controller.spec.ts"'},"import { Test, TestingModule } from '@nestjs/testing';\nimport { getRepositoryToken } from '@nestjs/typeorm';\nimport { Todo } from './entities/todo.entity';\nimport { TodoController } from './todo.controller';\nimport { TodoService } from './todo.service';\n\ndescribe('TodoController', () => {\n  let controller: TodoController;\n  let mockTodo: Todo = new Todo();\n  let todoService: TodoService;\n\n  beforeEach(async () => {\n    const module: TestingModule = await Test.createTestingModule({\n      controllers: [TodoController],\n      providers: [TodoService, {\n        provide: getRepositoryToken(Todo),\n        useValue: {\n          save: jest.fn().mockResolvedValue(mockTodo),\n          find: jest.fn().mockResolvedValue([mockTodo])\n        }\n      }],\n    }).compile();\n\n    controller = module.get<TodoController>(TodoController);\n    todoService = module.get<TodoService>(TodoService);\n  });\n\n  it('should be defined', () => {\n    expect(controller).toBeDefined();\n  });\n\n  describe('findAll', () => {\n    it('should return array of todos', async () => {\n      const result = [\n        {\n          \"id\": 1,\n          \"name\": \"write full stack book\",\n          \"completed\": false\n        }\n      ];\n      jest.spyOn(todoService, 'findAll').mockImplementation(() => Promise.resolve(result));\n      expect(await controller.findAll()).toBe(result);\n    })\n  })\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/todo.controller.ts"',title:'"src/todo/todo.controller.ts"'},"import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';\nimport { TodoService } from './todo.service';\nimport { CreateTodoDto } from './dto/create-todo.dto';\nimport { UpdateTodoDto } from './dto/update-todo.dto';\n\n@Controller('todos')\nexport class TodoController {\n  constructor(private readonly todoService: TodoService) { }\n\n  @Post()\n  create(@Body() createTodoDto: CreateTodoDto) {\n    return this.todoService.create(createTodoDto);\n  }\n\n  @Get()\n  findAll(@Query('completed') completed?: boolean) {\n    return this.todoService.findAll(completed);\n  }\n\n  @Get(':id')\n  findOne(@Param('id') id: string) {\n    return this.todoService.findOne(+id);\n  }\n\n  @Put(':id')\n  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {\n    return this.todoService.update(+id, updateTodoDto);\n  }\n\n  @Delete(':id')\n  remove(@Param('id') id: string) {\n    return this.todoService.remove(+id);\n  }\n}\n")),(0,r.kt)("h3",{id:"module-1"},"Module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/todo.module.ts"',title:'"src/todo/todo.module.ts"'},"import { Module } from '@nestjs/common';\nimport { TodoService } from './todo.service';\nimport { TodoController } from './todo.controller';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { Todo } from './entities/todo.entity';\n\n@Module({\n  imports: [TypeOrmModule.forFeature([Todo])],\n  controllers: [TodoController],\n  providers: [TodoService]\n})\nexport class TodoModule { }\n")),(0,r.kt)("h3",{id:"service-1"},"Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/todo.service.spec.ts"',title:'"src/todo/todo.service.spec.ts"'},"import { Test, TestingModule } from '@nestjs/testing';\nimport { getRepositoryToken } from '@nestjs/typeorm';\nimport { Todo } from './entities/todo.entity';\nimport { TodoService } from './todo.service';\n\ndescribe('TodoService', () => {\n  let service: TodoService;\n  let mockTodo: Todo = new Todo();\n\n  beforeEach(async () => {\n    const module: TestingModule = await Test.createTestingModule({\n      providers: [TodoService, {\n        provide: getRepositoryToken(Todo),\n        useValue: {\n          save: jest.fn().mockResolvedValue(mockTodo),\n          find: jest.fn().mockResolvedValue([mockTodo])\n        }\n      }],\n    }).compile();\n\n    service = module.get<TodoService>(TodoService);\n  });\n\n  it('should be defined', () => {\n    expect(service).toBeDefined();\n  });\n\n  describe('findAll', () => {\n    it('should return array of todos', async () => {\n      const todos = await service.findAll();\n      expect(todos).toStrictEqual([mockTodo]);\n    })\n  })\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/todo/todo.service.ts"',title:'"src/todo/todo.service.ts"'},"import { Injectable, NotFoundException } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { ILike, Repository } from 'typeorm';\nimport { CreateTodoDto } from './dto/create-todo.dto';\nimport { UpdateTodoDto } from './dto/update-todo.dto';\nimport { Todo } from './entities/todo.entity';\n\n@Injectable()\nexport class TodoService {\n  constructor(\n    @InjectRepository(Todo)\n    private todoRepository: Repository<Todo>,\n  ) { }\n\n  create(createTodoDto: CreateTodoDto) {\n    return this.todoRepository.save(createTodoDto)\n  }\n\n  findAll(completed?: boolean) {\n    if (!completed) {\n      return this.todoRepository.find();\n    } else {\n      return this.todoRepository.findBy({ completed });\n    }\n  }\n\n  findOne(id: number) {\n    return this.todoRepository.findOneBy({ id });\n  }\n\n  async update(id: number, updateTodoDto: UpdateTodoDto) {\n    const todo = await this.todoRepository.findOneBy({ id });\n    if (!todo) {\n      throw new NotFoundException(\"to do not found\");\n    }\n    todo.name = updateTodoDto.name;\n    todo.completed = updateTodoDto.completed;\n    return this.todoRepository.save(todo);\n  }\n\n  remove(id: number) {\n    this.todoRepository.delete(id);\n  }\n}\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="test/app.e2e-spec.ts"',title:'"test/app.e2e-spec.ts"'},"import { Test, TestingModule } from '@nestjs/testing';\nimport { INestApplication } from '@nestjs/common';\nimport * as request from 'supertest';\nimport { AppModule } from './../src/app.module';\n\ndescribe('AppController (e2e)', () => {\n  let app: INestApplication;\n\n  beforeEach(async () => {\n    const moduleFixture: TestingModule = await Test.createTestingModule({\n      imports: [AppModule],\n    }).compile();\n\n    app = moduleFixture.createNestApplication();\n    await app.init();\n  });\n\n  it('/ (GET)', () => {\n    return request(app.getHttpServer())\n      .get('/')\n      .expect(200)\n      .expect('Hello World');\n  });\n});\n")))}d.isMDXComponent=!0}}]);
# NestJS

https://github.com/travisluong/fullstackbook-todo-nestjs

## Installation

```bash title="Terminal"
npm i -g @nestjs/cli
nest new fullstackbook-todo-nestjs
npm run start:dev
nest g resource todos
createdb fullstackbook-todo-nestjs
npm install --save @nestjs/typeorm typeorm pg
```

## Configuration

```txt title=".env.example"
DATABASE_HOST=localhost
DATABASE_NAME=fullstackbook-todo-nestjs
DATABASE_USER=postgres
DATABASE_PASSWORD=
DATABASE_PORT=5432
APP_NAME="Full Stack Book To Do"
```

## Database Migration

```json title="package.json"
"scripts": {
  "typeorm": "typeorm-ts-node-commonjs -d src/data-source.ts"
}
```

```bash title="Terminal"
npx typeorm migration:create create-todos-table
npx typeorm migration:create add-completed-to-todos
npm run typeorm migration:run
npm run typeorm migration:revert
```

```ts title="src/data-source.ts"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./todo/entities/todo.entity"
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [Todo],
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
})
```

```ts title="src/migration/1659141868030-create-todos-table.ts"
import { MigrationInterface, QueryRunner } from "typeorm"

export class createTodosTable1659141868030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table todos (
            id bigserial primary key,
            name text
        );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table todos;`)
    }

}
```

```ts title="src/migration/1659143656931-add-completed-to-todos.ts"
import { MigrationInterface, QueryRunner } from "typeorm"

export class addCompletedToTodos1659143656931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`alter table todos add column completed boolean not null default false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`alter table todos drop column completed`);
    }

}
```

## Entry Point / CORS / Exception Handler

```ts title="src/main.ts"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(8000);
}
bootstrap();
```

```ts title="src/http-exception.filter.ts"
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const res = exception.getResponse();
    this.logger.error(res);
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: res['message']
      });
  }
}
```

## App Resource

### Controller

```ts title="src/app.controller.spec.ts"
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ConfigService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World"', () => {
      expect(appController.getHello()).toBe('Hello World');
    });
  });
});
```

```ts title="src/app.controller.ts"
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

### Module

```ts title="src/app.module.ts"
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';


@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: +configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [Todo],
      synchronize: true,
    }),
    inject: [ConfigService]
  }), TodoModule, ConfigModule.forRoot({ envFilePath: ['.env'] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
```

### Service

```ts title="src/app.service.ts"
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private configService: ConfigService) { }

  getHello(): string {
    this.logger.log(this.configService.get('APP_NAME'));
    return 'Hello World';
  }
}
```

## To Do Resource

### DTO

```ts title="src/todo/dto/create-todo.dto.ts"
export class CreateTodoDto {
    name: string;
    completed: boolean;
}
```

```ts title="src/todo/dto/update-todo.dto.ts"
import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
```

### Entities

```ts title="src/todo/entities/todo.entity.ts"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("todos")
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ default: false })
    completed: boolean
}
```

### Controller

```ts title="src/todo/todo.controller.spec.ts"
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let controller: TodoController;
  let mockTodo: Todo = new Todo();
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService, {
        provide: getRepositoryToken(Todo),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTodo),
          find: jest.fn().mockResolvedValue([mockTodo])
        }
      }],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of todos', async () => {
      const result = [
        {
          "id": 1,
          "name": "write full stack book",
          "completed": false
        }
      ];
      jest.spyOn(todoService, 'findAll').mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toBe(result);
    })
  })
});
```

```ts title="src/todo/todo.controller.ts"
import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Query('completed') completed?: boolean) {
    return this.todoService.findAll(completed);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
```

### Module

```ts title="src/todo/todo.module.ts"
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule { }
```

### Service

```ts title="src/todo/todo.service.spec.ts"
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let mockTodo: Todo = new Todo();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService, {
        provide: getRepositoryToken(Todo),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTodo),
          find: jest.fn().mockResolvedValue([mockTodo])
        }
      }],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of todos', async () => {
      const todos = await service.findAll();
      expect(todos).toStrictEqual([mockTodo]);
    })
  })
});
```

```ts title="src/todo/todo.service.ts"
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto)
  }

  findAll(completed?: boolean) {
    if (!completed) {
      return this.todoRepository.find();
    } else {
      return this.todoRepository.findBy({ completed });
    }
  }

  findOne(id: number) {
    return this.todoRepository.findOneBy({ id });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException("to do not found");
    }
    todo.name = updateTodoDto.name;
    todo.completed = updateTodoDto.completed;
    return this.todoRepository.save(todo);
  }

  remove(id: number) {
    this.todoRepository.delete(id);
  }
}
```

## Test

```ts title="test/app.e2e-spec.ts"
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World');
  });
});
```

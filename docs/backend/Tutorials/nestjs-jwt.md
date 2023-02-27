# NestJS JWT API

- GitHub: https://github.com/travisluong/fullstackbook-nestjs-jwt
- YouTube: [Full Stack NestJS + NextJS JWT Authentication](https://youtu.be/Hbj_Wdqk3MM)

## Command Line

```bash title="Terminal"
npm i -g @nestjs/cli
nest new fullstackbook-nestjs-jwt
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
nest g module auth
nest g service auth
nest g module users
nest g service users
createdb fullstackbook-nestjs-jwt
npm i --save @nestjs/config @nestjs/typeorm typeorm pg
npx typeorm migration:create src/migration/create-users-table
npx typeorm migration:create src/migration/create-roles-table
npx typeorm migration:create src/migration/create-users-to-roles-table
npx typeorm migration:create src/migration/insert-roles
npm run typeorm migration:run
npm run typeorm migration:revert
npm i bcrypt
npm i -D @types/bcrypt
```

## Auth

```typescript title="src/auth/auth.module.ts"
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
```

```typescript title="src/auth/auth.service.spec.ts"
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from 'src/database.providers';
import { userProviders } from 'src/users/users.providers';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, JwtService, ...userProviders, ...databaseProviders],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

```typescript title="src/auth/auth.service.ts"
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (!isMatch) {
        return null;
      }
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signup(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      throw new HttpException('Username taken', HttpStatus.BAD_REQUEST);
    }
    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = await this.usersService.create(username, hash);
    return {
      id: newUser.id
    };
  }
}
```

```typescript title="src/auth/constants.ts"
export const jwtConstants = {
  secret: 'secretKey',
};
```

```typescript title="src/auth/jwt-auth.guard.ts"
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }

```

```typescript title="src/auth/jwt.strategy.ts"
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```

```typescript title="src/auth/local-auth.guard.ts"
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { }
```

```typescript title="src/auth/local.strategy.ts"
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

```typescript title="src/auth/role.entity.ts"
import { ERole } from "src/auth/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "enum",
    enum: ERole
  })
  name: string
}
```

```typescript title="src/auth/role.enum.ts"
export enum ERole {
  User = 'user',
  Admin = 'admin',
  Moderator = 'moderator',
}
```

```typescript title="src/auth/roles.decorator.ts"
import { SetMetadata } from '@nestjs/common';
import { ERole } from './role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ERole[]) => SetMetadata(ROLES_KEY, roles);
```

```typescript title="src/auth/roles.guard.ts"
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';
import { ERole } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UsersService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    const dbUser = await this.userService.findOne(user.username);

    return requiredRoles.some((role) => dbUser.roles?.some((r) => r.name == role));
  }
}
```

```typescript title="src/auth/signup.dto.ts"
export class SignUpDto {
  username: string;
  password: string;
}
```

## Migration

```typescript title="src/migration/1670117706569-create-users-table.ts"
import { MigrationInterface, QueryRunner } from "typeorm"

export class createUsersTable1670117706569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table users (
            id serial primary key,
            username text not null,
            password text
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table users;`)
    }

}

```

```typescript title="src/migration/1670117718357-create-roles-table.ts"
import { MigrationInterface, QueryRunner } from "typeorm"

export class createRolesTable1670117718357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table roles (
            id serial primary key,
            name text not null unique
        );        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table roles;`)
    }

}

```

```typescript title="src/migration/1670117726211-create-users-to-roles-table.ts"
import { MigrationInterface, QueryRunner } from "typeorm"

export class createUsersToRolesTable1670117726211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table users_to_roles (
            user_id int references users (id),
            role_id int references roles (id)
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table users_to_roles;`)
    }

}

```

```typescript title="src/migration/1670117734416-insert-roles.ts"
import { MigrationInterface, QueryRunner } from "typeorm"

export class insertRoles1670117734416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        insert into roles (name) values ('user');
        insert into roles (name) values ('moderator');
        insert into roles (name) values ('admin');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

```

## Users

```typescript title="src/users/user.dto.ts"
export class UserDto {
  id: number;
  username: string;
}
```

```typescript title="src/users/user.entity.ts"
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../auth/role.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @ManyToMany(() => Role)
  @JoinTable({
    name: "users_to_roles",
    joinColumn: {
      name: "user_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "role_id",
      referencedColumnName: "id"
    }
  })
  roles: Role[]
}
```

```typescript title="src/users/users.module.ts"
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { userProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
})
export class UsersModule { }
```

```typescript title="src/users/users.providers.ts"
import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
```

```typescript title="src/users/users.service.spec.ts"
import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from 'src/database.providers';
import { userProviders } from './users.providers';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, ...userProviders, ...databaseProviders],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```

```typescript title="src/users/users.service.ts"
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from '../auth/role.entity';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_REPOSITORY')
  private userRepository: Repository<User>,
  ) { }

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { username }, relations: { roles: true } });
    return user;
  }

  async getProfile(username: string): Promise<UserDto | undefined> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      return undefined;
    }
    const userDto = new UserDto();
    userDto.id = user.id;
    userDto.username = user.username;
    return userDto;
  }

  async create(username: string, password: string): Promise<User | undefined> {
    const user = new User();
    user.username = username;
    user.password = password;
    const role = new Role();
    role.id = 1;
    user.roles = [role];
    await this.userRepository.save(user);
    return user;
  }
}
```

## Src

```typescript title="src/app.controller.spec.ts"
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { databaseProviders } from './database.providers';
import { userProviders } from './users/users.providers';
import { UsersService } from './users/users.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UsersService, ...userProviders, ...databaseProviders, AuthService, JwtService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

```

```typescript title="src/app.controller.ts"
import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { ERole } from './auth/role.enum';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';
import { SignUpDto } from './auth/signup.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService, private userService: UsersService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/signin')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('api/auth/signup')
  async signup(@Body() signUpDto: SignUpDto) {
    return this.authService.signup(signUpDto.username, signUpDto.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/test/profile')
  async getProfile(@Request() req) {
    const user = await this.userService.getProfile(req.user.username);
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ERole.Admin)
  @Get('api/test/user')
  getProtected() {
    return "protected data";
  }
}
```

```typescript title="src/app.module.ts"
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

```

```typescript title="src/app.service.ts"
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

```

```typescript title="src/data-source-migration.ts"
import "reflect-metadata"
import { DataSource } from "typeorm"
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
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
})
```

```typescript title="src/data-source.ts"
import "reflect-metadata"
import { DataSource } from "typeorm"
import 'dotenv/config'
import { join } from "path"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  subscribers: [],
})
```

```typescript title="src/database.module.ts"
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule { }
```

```typescript title="src/database.providers.ts"
import { AppDataSource } from './data-source';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
```

```typescript title="src/main.ts"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

```

## Test

```typescript title="test/app.e2e-spec.ts"
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
      .expect('Hello World!');
  });
});

```

```typescript title="test/jest-e2e.json"
{
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/../src/$1"
  }
}
```

## Root

```typescript title=".env.example"
DATABASE_HOST=localhost
DATABASE_NAME=fullstackbook-nestjs-jwt
DATABASE_USER=postgres
DATABASE_PASSWORD=
DATABASE_PORT=5432
APP_NAME="Full Stack Book JWT"
```

```typescript title="package.json"
{
  "name": "fullstackbook-nestjs-jwt",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "typeorm": "typeorm-ts-node-commonjs -d src/data-source-migration.ts"
  },
  "dependencies": {
    "@nestjs/common": "^9.0.0",
    "@nestjs/config": "^2.2.0",
    "@nestjs/core": "^9.0.0",
    "@nestjs/jwt": "^9.0.0",
    "@nestjs/passport": "^9.0.0",
    "@nestjs/platform-express": "^9.0.0",
    "@nestjs/typeorm": "^9.0.1",
    "bcrypt": "^5.1.0",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "pg": "^8.8.0",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0",
    "typeorm": "^0.3.11"
  },
  "devDependencies": {
    "@nestjs/cli": "^9.0.0",
    "@nestjs/schematics": "^9.0.0",
    "@nestjs/testing": "^9.0.0",
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.13",
    "@types/jest": "28.1.8",
    "@types/node": "^16.0.0",
    "@types/passport-jwt": "^3.0.7",
    "@types/passport-local": "^1.0.34",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "28.1.3",
    "prettier": "^2.3.2",
    "source-map-support": "^0.5.20",
    "supertest": "^6.1.3",
    "ts-jest": "28.0.8",
    "ts-loader": "^9.2.3",
    "ts-node": "^10.0.0",
    "tsconfig-paths": "4.1.0",
    "typescript": "^4.7.4"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node",
    "moduleNameMapper": {
      "^src/(.*)$": "<rootDir>/$1"
    }
  }
}
```

## Reference

- https://docs.nestjs.com/security/authentication
- https://docs.nestjs.com/security/authorization
- https://docs.nestjs.com/security/encryption-and-hashing
- https://stackoverflow.com/questions/63865678/nestjs-test-suite-failed-to-run-cannot-find-module-src-article-article-entity
- https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module
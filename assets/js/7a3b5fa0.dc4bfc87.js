"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[6135],{3905:(o,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>g});var n=e(7294);function r(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}function a(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,n)}return e}function i(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}function s(o,t){if(null==o)return{};var e,n,r=function(o,t){if(null==o)return{};var e,n,r={},a=Object.keys(o);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||(r[e]=o[e]);return r}(o,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(o,e)&&(r[e]=o[e])}return r}var l=n.createContext({}),p=function(o){var t=n.useContext(l),e=t;return o&&(e="function"==typeof o?o(t):i(i({},t),o)),e},c=function(o){var t=p(o.components);return n.createElement(l.Provider,{value:t},o.children)},m={inlineCode:"code",wrapper:function(o){var t=o.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(o,t){var e=o.components,r=o.mdxType,a=o.originalType,l=o.parentName,c=s(o,["components","mdxType","originalType","parentName"]),u=p(e),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return e?n.createElement(d,i(i({ref:t},c),{},{components:e})):n.createElement(d,i({ref:t},c))}));function g(o,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof o||r){var a=e.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=o,s.mdxType="string"==typeof o?o:r,i[1]=s;for(var p=2;p<a;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},7909:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=e(7462),r=(e(7294),e(3905));const a={},i="Spring Boot To Do API",s={unversionedId:"backend/tutorials/springboot-todo",id:"backend/tutorials/springboot-todo",title:"Spring Boot To Do API",description:"- GitHub//github.com/travisluong/fullstackbook-todo-springboot",source:"@site/docs/backend/tutorials/springboot-todo.md",sourceDirName:"backend/tutorials",slug:"/backend/tutorials/springboot-todo",permalink:"/backend/tutorials/springboot-todo",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/tutorials/springboot-todo.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Spring Boot JWT API",permalink:"/backend/tutorials/springboot-jwt"},next:{title:"12 Factor App",permalink:"/backend/factor-app"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Entry Point / CORS",id:"entry-point--cors",level:2},{value:"Database Migrations",id:"database-migrations",level:2},{value:"DTO",id:"dto",level:2},{value:"ORM",id:"orm",level:2},{value:"Service",id:"service",level:2},{value:"Controller",id:"controller",level:2},{value:"Exception Handler",id:"exception-handler",level:2},{value:"Testing",id:"testing",level:2}],c={toc:p};function m(o){let{components:t,...e}=o;return(0,r.kt)("wrapper",(0,n.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spring-boot-to-do-api"},"Spring Boot To Do API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-todo-springboot"},"https://github.com/travisluong/fullstackbook-todo-springboot")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/p7Z1BVmskdU"},"Full Stack Spring Boot + React Tutorial")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/cLu0bbW8rPE"},"Full Stack Spring Boot + VanillaJS Tutorial")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/Y48nKiOSMbY"},"Full Stack Spring Boot + NuxtJS Tutorial")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/Z_4Tqmv8Oa4"},"Full Stack Spring Boot + Next.js Tutorial"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Options to initialize a Spring Boot project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the Spring Initializr at ",(0,r.kt)("a",{parentName:"li",href:"https://start.spring.io/"},"https://start.spring.io/"),"."),(0,r.kt)("li",{parentName:"ul"},"Use IntelliJ Ultimate Edition which has Spring Initializr built in."),(0,r.kt)("li",{parentName:"ul"},"Use the VSCode Extension. ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr"},"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr"))),(0,r.kt)("p",null,"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lombok"),(0,r.kt)("li",{parentName:"ul"},"Spring Web"),(0,r.kt)("li",{parentName:"ul"},"Spring Data JPA"),(0,r.kt)("li",{parentName:"ul"},"Flyway Migration"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL Driver")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="src/main/resources/application.properties"',title:'"src/main/resources/application.properties"'},"spring.application.name=${APP_NAME:Full Stack Book To Do}\nspring.datasource.url=${DB_URL:jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot}\nspring.datasource.username=${DB_USER:postgres}\nspring.datasource.password=${DB_PASSWORD:}\nserver.port=8000\n")),(0,r.kt)("h2",{id:"entry-point--cors"},"Entry Point / CORS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/FullstackbookTodoSpringbootApplication.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/FullstackbookTodoSpringbootApplication.java"'},'package com.example.fullstackbooktodospringboot;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.servlet.config.annotation.CorsRegistry;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@SpringBootApplication\npublic class FullstackbookTodoSpringbootApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(FullstackbookTodoSpringbootApplication.class, args);\n    }\n\n    @Bean\n    public WebMvcConfigurer corsConfigurer() {\n        return new WebMvcConfigurer() {\n            @Override\n            public void addCorsMappings(CorsRegistry registry) {\n                registry.addMapping("/**").allowedMethods("GET", "PUT", "POST", "DELETE").allowedOrigins("http://localhost:3000");\n            }\n        };\n    }\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/controller/AppController.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/controller/AppController.java"'},'package com.example.fullstackbooktodospringboot.controller;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class AppController {\n    Logger logger = LoggerFactory.getLogger(AppController.class);\n\n    @Value("${spring.application.name}")\n    private String name;\n\n    @GetMapping("/")\n    public String getRoot() {\n        logger.info(name);\n        return "Hello World";\n    }\n}\n')),(0,r.kt)("h2",{id:"database-migrations"},"Database Migrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"./mvnw -Dflyway.user=postgres -Dflyway.url=jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot flyway:migrate\n./mvnw -Dflyway.user=postgres -Dflyway.url=jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot flyway:clean\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="src/main/resources/db/migration/V1__create_todos_table.sql"',title:'"src/main/resources/db/migration/V1__create_todos_table.sql"'},"create table todos (\n  id bigserial primary key,\n  name text\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="src/main/resources/db/migration/V2__add_completed_to_todos.sql"',title:'"src/main/resources/db/migration/V2__add_completed_to_todos.sql"'},"alter table todos add column completed boolean not null default false;\n")),(0,r.kt)("h2",{id:"dto"},"DTO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/dto/CreateToDoDto.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/dto/CreateToDoDto.java"'},"package com.example.fullstackbooktodospringboot.dto;\n\nimport lombok.Data;\n\n@Data\npublic class CreateToDoDto {\n    private String name;\n    private Boolean completed;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/dto/ErrorDto.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/dto/ErrorDto.java"'},"package com.example.fullstackbooktodospringboot.dto;\n\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\n\n@Data\n@AllArgsConstructor\npublic class ErrorDto {\n    private String msg;\n}\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoDto.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoDto.java"'},"package com.example.fullstackbooktodospringboot.dto;\n\nimport com.example.fullstackbooktodospringboot.model.ToDo;\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\n\n@Data\n@AllArgsConstructor\npublic class ToDoDto {\n    private Long id;\n    private String name;\n    private Boolean completed;\n\n    public ToDoDto(ToDo entity) {\n        this.id = entity.getId();\n        this.name = entity.getName();\n        this.completed = entity.getCompleted();\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/dto/UpdateToDoDto.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/dto/UpdateToDoDto.java"'},"package com.example.fullstackbooktodospringboot.dto;\n\nimport lombok.Data;\n\n@Data\npublic class UpdateToDoDto {\n    private String name;\n    private Boolean completed;\n}\n")),(0,r.kt)("h2",{id:"orm"},"ORM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/model/ToDo.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/model/ToDo.java"'},'package com.example.fullstackbooktodospringboot.model;\n\nimport lombok.Data;\n\nimport javax.persistence.*;\n\n@Entity\n@Data\n@Table(name = "todos")\npublic class ToDo {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column\n    private String name;\n\n    @Column\n    private Boolean completed;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"'},"package com.example.fullstackbooktodospringboot.repository;\n\nimport com.example.fullstackbooktodospringboot.model.ToDo;\nimport org.springframework.data.jpa.repository.JpaRepository;\n\nimport java.util.List;\n\npublic interface ToDoRepository extends JpaRepository<ToDo, Long> {\n    List<ToDo> findByCompleted(Boolean completed);\n}\n")),(0,r.kt)("h2",{id:"service"},"Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/service/ToDoService.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/service/ToDoService.java"'},'package com.example.fullstackbooktodospringboot.service;\n\nimport com.example.fullstackbooktodospringboot.dto.CreateToDoDto;\nimport com.example.fullstackbooktodospringboot.dto.ToDoDto;\nimport com.example.fullstackbooktodospringboot.dto.UpdateToDoDto;\nimport com.example.fullstackbooktodospringboot.exception.ToDoException;\nimport com.example.fullstackbooktodospringboot.model.ToDo;\nimport com.example.fullstackbooktodospringboot.repository.ToDoRepository;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.server.ResponseStatusException;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Service\npublic class ToDoService {\n    private ToDoRepository toDoRepository;\n\n    public ToDoService (ToDoRepository toDoRepository) {\n        this.toDoRepository = toDoRepository;\n    }\n\n    public ToDoDto createTodo(CreateToDoDto createToDoDTO) {\n        ToDo newToDo = new ToDo();\n        newToDo.setName(createToDoDTO.getName());\n        newToDo.setCompleted(createToDoDTO.getCompleted());\n        ToDo toDo = toDoRepository.save(newToDo);\n        return new ToDoDto(toDo);\n    }\n\n    public List<ToDoDto> getToDos() {\n        List<ToDo> toDos = toDoRepository.findAll();\n        return toDos.stream().map(entity -> new ToDoDto(entity)).toList();\n    }\n\n    public List<ToDoDto> getToDos(Boolean completed) {\n        List<ToDo> toDos = toDoRepository.findByCompleted(completed);\n        return toDos.stream().map(entity -> new ToDoDto(entity)).toList();\n    }\n\n    public ToDoDto getToDoById(Long id) {\n        Optional<ToDo> toDo = toDoRepository.findById(id);\n        if (toDo.isPresent()) {\n            return new ToDoDto(toDo.get());\n        } else {\n            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "getToDoById - to do not found");\n        }\n    }\n\n    public ToDoDto updateToDo(Long id, UpdateToDoDto updateToDo) {\n        Optional<ToDo> toDo = toDoRepository.findById(id);\n        if (toDo.isPresent()) {\n            toDo.get().setName(updateToDo.getName());\n            toDo.get().setCompleted(updateToDo.getCompleted());\n            toDoRepository.save(toDo.get());\n            return new ToDoDto(toDo.get());\n        } else {\n            throw new ToDoException(404, "updateToDo - to do not found");\n        }\n    }\n\n    public void deleteToDo(Long id) {\n        Optional<ToDo> toDo = toDoRepository.findById(id);\n        if (toDo.isPresent()) {\n            toDoRepository.delete(toDo.get());\n        } else {\n            throw new RuntimeException("deleteToDo - to do not found");\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"controller"},"Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/controller/ToDoController.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/controller/ToDoController.java"'},'package com.example.fullstackbooktodospringboot.controller;\n\nimport com.example.fullstackbooktodospringboot.dto.CreateToDoDto;\nimport com.example.fullstackbooktodospringboot.dto.ToDoDto;\nimport com.example.fullstackbooktodospringboot.dto.UpdateToDoDto;\nimport com.example.fullstackbooktodospringboot.service.ToDoService;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping("/todos")\npublic class ToDoController {\n    private ToDoService toDoService;\n\n    public ToDoController (ToDoService toDoService) {\n        this.toDoService = toDoService;\n    }\n\n    @PostMapping("")\n    public ResponseEntity<ToDoDto> createToDo(@RequestBody CreateToDoDto newToDo) {\n        ToDoDto toDoDTO = toDoService.createTodo(newToDo);\n        return new ResponseEntity<>(toDoDTO, HttpStatus.CREATED);\n    }\n\n    @GetMapping("")\n    public List<ToDoDto> getToDos(@RequestParam Optional<Boolean> completed) {\n        if (completed.isPresent()) {\n            return toDoService.getToDos(completed.get());\n        }\n        return toDoService.getToDos();\n    }\n\n    @GetMapping("/{id}")\n    public ToDoDto getToDoById(@PathVariable Long id) {\n        return toDoService.getToDoById(id);\n    }\n\n    @PutMapping("/{id}")\n    public ToDoDto updateToDo(@PathVariable Long id, @RequestBody UpdateToDoDto updateToDo) {\n        return toDoService.updateToDo(id, updateToDo);\n    }\n\n    @DeleteMapping("/{id}")\n    public ResponseEntity deleteToDo(@PathVariable Long id) {\n        toDoService.deleteToDo(id);\n        return new ResponseEntity<>(HttpStatus.OK);\n    }\n}\n\n')),(0,r.kt)("h2",{id:"exception-handler"},"Exception Handler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/exception/GlobalControllerExceptionHandler.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/exception/GlobalControllerExceptionHandler.java"'},'package com.example.fullstackbooktodospringboot.exception;\n\nimport com.example.fullstackbooktodospringboot.dto.ErrorDto;\nimport lombok.extern.log4j.Log4j2;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.ControllerAdvice;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@ControllerAdvice(annotations = RestController.class)\n@Log4j2\nclass GlobalControllerExceptionHandler {\n    @ExceptionHandler(ResponseStatusException.class)\n    public ResponseEntity<ErrorDto> handleResponseStatusException(ResponseStatusException ex) {\n        log.error("response status exception", ex);\n        ErrorDto errorDto = new ErrorDto(ex.getMessage());\n        return new ResponseEntity<>(errorDto, ex.getStatus());\n    }\n\n    @ExceptionHandler(ToDoException.class)\n    public ResponseEntity<ErrorDto> handleToDoException(ToDoException ex) {\n        log.error("todo custom exception", ex);\n        ErrorDto errorDto = new ErrorDto(ex.getMessage());\n        HttpStatus httpStatus = HttpStatus.resolve(ex.getStatus());\n        return new ResponseEntity<>(errorDto, httpStatus);\n    }\n\n    @ExceptionHandler(RuntimeException.class)\n    public ResponseEntity<ErrorDto> handleRuntimeException(RuntimeException ex) {\n        log.error("internal server error", ex);\n        ErrorDto errorDto = new ErrorDto("internal server error");\n        return new ResponseEntity<>(errorDto, HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/exception/ToDoException.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/exception/ToDoException.java"'},"package com.example.fullstackbooktodospringboot.exception;\n\npublic class ToDoException extends RuntimeException {\n    private int status;\n\n    public ToDoException(int status, String message) {\n        super(message);\n        this.status = status;\n    }\n\n    public int getStatus() {\n        return status;\n    }\n}\n")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/test/java/com/example/fullstackbooktodospringboot/controller/AppControllerTest.java"',title:'"src/test/java/com/example/fullstackbooktodospringboot/controller/AppControllerTest.java"'},'package com.example.fullstackbooktodospringboot.controller;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\nimport static org.hamcrest.CoreMatchers.containsString;\n\n@SpringBootTest\n@AutoConfigureMockMvc\npublic class AppControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    public void getRoot() throws Exception {\n        mockMvc.perform(get("/"))\n                .andExpect(status().isOk()).andExpect(content().string(containsString("Hello World")));\n    }\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/test/java/com/example/fullstackbooktodospringboot/controller/ToDoControllerTest.java"',title:'"src/test/java/com/example/fullstackbooktodospringboot/controller/ToDoControllerTest.java"'},'package com.example.fullstackbooktodospringboot.controller;\n\nimport com.example.fullstackbooktodospringboot.dto.ToDoDto;\nimport com.example.fullstackbooktodospringboot.service.ToDoService;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nimport static org.hamcrest.Matchers.hasSize;\nimport static org.hamcrest.Matchers.is;\nimport static org.mockito.Mockito.when;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\n\n@SpringBootTest\n@AutoConfigureMockMvc\npublic class ToDoControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private ToDoService toDoService;\n\n    @Test\n    public void getToDosShouldReturnTodos() throws Exception {\n        List<ToDoDto> todos = new ArrayList<>();\n        ToDoDto todoDto = new ToDoDto(1L, "write unit tests", false);\n        todos.add(todoDto);\n        when(toDoService.getToDos()).thenReturn(todos);\n        mockMvc.perform(get("/todos"))\n                .andExpect(status().isOk())\n                .andExpect(jsonPath("$", hasSize(1)))\n                .andExpect(jsonPath("$[0].name", is(todoDto.getName())));\n    }\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/test/java/com/example/fullstackbooktodospringboot/service/ToDoServiceTest.java"',title:'"src/test/java/com/example/fullstackbooktodospringboot/service/ToDoServiceTest.java"'},'package com.example.fullstackbooktodospringboot.service;\n\nimport com.example.fullstackbooktodospringboot.dto.ToDoDto;\nimport com.example.fullstackbooktodospringboot.model.ToDo;\nimport com.example.fullstackbooktodospringboot.repository.ToDoRepository;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nimport static org.mockito.Mockito.when;\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@SpringBootTest\n@AutoConfigureMockMvc\npublic class ToDoServiceTest {\n\n    @Autowired\n    private ToDoService toDoService;\n\n    @MockBean\n    private ToDoRepository toDoRepository;\n\n    @Test\n    public void getToDosShouldReturnTodos() throws Exception {\n        List<ToDo> todos = new ArrayList<>();\n        ToDo todo = new ToDo();\n        todo.setId(1L);\n        todo.setName("write unit tests");\n        todo.setCompleted(false);\n        todos.add(todo);\n        when(toDoRepository.findAll()).thenReturn(todos);\n        List<ToDoDto> todoDtoList = toDoService.getToDos();\n        assertThat(todoDtoList).hasSize(1);\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);
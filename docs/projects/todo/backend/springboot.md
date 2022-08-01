# Spring Boot

https://github.com/travisluong/fullstackbook-todo-springboot

## Installation

Options to initialize a Spring Boot project:

- Use the Spring Initializr at https://start.spring.io/.
- Use IntelliJ Ultimate Edition which has Spring Initializr built in.
- Use the VSCode Extension. https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr

Dependencies:
- Lombok
- Spring Web
- Spring Data JPA
- Liquibase Migration
- PostgreSQL Driver

## Entry Point / CORS

In order to receive traffic from other domains on the browser, we will have to include the URL in the CORS configuration.

```java title="src/main/java/com/example/fullstackbooktodospringboot/FullstackbookTodoSpringbootApplication.java"
package com.example.fullstackbooktodospringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FullstackbookTodoSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(FullstackbookTodoSpringbootApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods("GET", "PUT", "POST", "DELETE").allowedOrigins("http://localhost:3000");
            }
        };
    }

}
```

## Controller

We start with a simple Hello World. And as a sanity check, we will log out a configuration value, the name of the application.

```java title="src/main/java/com/example/fullstackbooktodospringboot/controller/AppController.java"
package com.example.fullstackbooktodospringboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {
    Logger logger = LoggerFactory.getLogger(AppController.class);

    @Value("${spring.application.name}")
    private String name;

    @GetMapping("/")
    public String getRoot() {
        logger.info(name);
        return "Hello World";
    }
}
```

:::note
LoggerFactory is one way to set up logging.

`@Value` annotation reads the configuration values from `application.properties` and provides it to the controller.
:::

The controller is the entry point of our API, where we capture HTTP requests and send them off to our services for processing.

```java title="src/main/java/com/example/fullstackbooktodospringboot/controller/ToDoController.java"
package com.example.fullstackbooktodospringboot.controller;

import com.example.fullstackbooktodospringboot.dto.CreateToDoDto;
import com.example.fullstackbooktodospringboot.dto.ToDoDto;
import com.example.fullstackbooktodospringboot.dto.UpdateToDoDto;
import com.example.fullstackbooktodospringboot.service.ToDoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos")
public class ToDoController {
    private ToDoService toDoService;

    public ToDoController (ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @PostMapping("")
    public ResponseEntity<ToDoDto> createToDo(@RequestBody CreateToDoDto newToDo) {
        ToDoDto toDoDTO = toDoService.createTodo(newToDo);
        return new ResponseEntity<>(toDoDTO, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<ToDoDto> getToDos(@RequestParam Optional<Boolean> completed) {
        if (completed.isPresent()) {
            return toDoService.getToDos(completed.get());
        }
        return toDoService.getToDos();
    }

    @GetMapping("/{id}")
    public ToDoDto getToDoById(@PathVariable Long id) {
        return toDoService.getToDoById(id);
    }

    @PutMapping("/{id}")
    public ToDoDto updateToDo(@PathVariable Long id, @RequestBody UpdateToDoDto updateToDo) {
        return toDoService.updateToDo(id, updateToDo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteToDo(@PathVariable Long id) {
        toDoService.deleteToDo(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

```

:::note
The ToDoService is injected into this controller via constructor injection.

`@RestController` is provided by the Spring Web Dependency.

`@RequestMapping` scopes all endpoints to the base "/todos" path.

`@RequestParam` reads the query string parameter. ?completed=`{boolean}`.

`@RequestBody` reads the JSON payload and maps it to the Data Transfer Object (DTO).

`@PathVariable` reads the path parameter /todos/`{id}`.
:::

## Request/Response

Data Transfer Objects (DTO), are used for defining request and response object structure. Sometimes they are passed around the code for other reasons, but mostly used for requests and responses.

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/CreateToDoDto.java"
package com.example.fullstackbooktodospringboot.dto;

import lombok.Data;

@Data
public class CreateToDoDto {
    private String name;
    private Boolean completed;
}
```

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/ErrorDto.java"
package com.example.fullstackbooktodospringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorDto {
    private String msg;
}

```

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoDto.java"
package com.example.fullstackbooktodospringboot.dto;

import com.example.fullstackbooktodospringboot.model.ToDo;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ToDoDto {
    private Long id;
    private String name;
    private Boolean completed;

    public ToDoDto(ToDo entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.completed = entity.getCompleted();
    }
}
```

:::note
The constructor allows us to map an entity to the DTO. Another way to do this is to create a mapper class or using a mapping library like MapStruct.

For simplicity, we will use a constructor.
:::

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/UpdateToDoDto.java"
package com.example.fullstackbooktodospringboot.dto;

import lombok.Data;

@Data
public class UpdateToDoDto {
    private String name;
    private Boolean completed;
}
```

:::note
We leverage Lombok's `@Data` and `@AllArgsConstructor` to reduce much of the boilerplate.
:::


## Service

Service is the layer between Controller and Repository. It is where the business logic lives. In a typical flow, requests are sent to the service from the controller, the service processes the request by making necessary API calls or database queries, constructing a response in the form of a Data Transfer Object (DTO), and sending it back to the controller.

```java title="src/main/java/com/example/fullstackbooktodospringboot/service/ToDoService.java"
package com.example.fullstackbooktodospringboot.service;

import com.example.fullstackbooktodospringboot.dto.CreateToDoDto;
import com.example.fullstackbooktodospringboot.dto.ToDoDto;
import com.example.fullstackbooktodospringboot.dto.UpdateToDoDto;
import com.example.fullstackbooktodospringboot.exception.ToDoException;
import com.example.fullstackbooktodospringboot.model.ToDo;
import com.example.fullstackbooktodospringboot.repository.ToDoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {
    private ToDoRepository toDoRepository;

    public ToDoService (ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public ToDoDto createTodo(CreateToDoDto createToDoDTO) {
        ToDo newToDo = new ToDo();
        newToDo.setName(createToDoDTO.getName());
        newToDo.setCompleted(createToDoDTO.getCompleted());
        ToDo toDo = toDoRepository.save(newToDo);
        return new ToDoDto(toDo);
    }

    public List<ToDoDto> getToDos() {
        List<ToDo> toDos = toDoRepository.findAll();
        return toDos.stream().map(entity -> new ToDoDto(entity)).toList();
    }

    public List<ToDoDto> getToDos(Boolean completed) {
        List<ToDo> toDos = toDoRepository.findByCompleted(completed);
        return toDos.stream().map(entity -> new ToDoDto(entity)).toList();
    }

    public ToDoDto getToDoById(Long id) {
        Optional<ToDo> toDo = toDoRepository.findById(id);
        if (toDo.isPresent()) {
            return new ToDoDto(toDo.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "getToDoById - to do not found");
        }
    }

    public ToDoDto updateToDo(Long id, UpdateToDoDto updateToDo) {
        Optional<ToDo> toDo = toDoRepository.findById(id);
        if (toDo.isPresent()) {
            toDo.get().setName(updateToDo.getName());
            toDo.get().setCompleted(updateToDo.getCompleted());
            toDoRepository.save(toDo.get());
            return new ToDoDto(toDo.get());
        } else {
            throw new ToDoException(404, "updateToDo - to do not found");
        }
    }

    public void deleteToDo(Long id) {
        Optional<ToDo> toDo = toDoRepository.findById(id);
        if (toDo.isPresent()) {
            toDoRepository.delete(toDo.get());
        } else {
            throw new RuntimeException("deleteToDo - to do not found");
        }
    }
}
```

:::note
The `@Service` annotation is functionally the same as `@Component` in that they are both included in Spring's component scan and used to declare an injectable object. The only difference is in the semantic meaning of service and component. Service indicates a place that holds business logic, while component is more generic.

The response DTOs, also considered Plain Old Java Objects (POJOs), are converted into JSON under the hood, by a library called Jackson. Using DTOs gives us flexibility in constructing our JSON API.
:::

:::caution
Three different types of exceptions were used in this example to demonstrate how to handle multiple exception types. In a real project, you'll probably want to pick one style and stick to it.

There are multiple schools of thought as to the best way to handle exceptions. Some prefer to not include HTTP exceptions in the service layer. And others think it is ok since it keeps thing much simpler.
:::

:::tip
If all you're doing is building a REST API, then it's probably fine to throw the ResponseStatusException at the service layer.
:::

## ORM

JPA stands for Java Persistence API, a Java specification. Hibernate is an ORM, and an implementation of JPA. ORM stands for Object Relational Mapping.

This provides a way for us to map database tables to objects and interact with our database using methods provided by the ORM.

```java title="src/main/java/com/example/fullstackbooktodospringboot/model/ToDo.java"
package com.example.fullstackbooktodospringboot.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "todos")
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Boolean completed;
}
```

:::note
The `@Entity` annotation is provided by Spring Data JPA. It declares the model.

The `@Data` annotation is provided by Lombok, and gives us free getters and setters, reducing much boilerplate java code.

The `@Id` annotation and `GeneratedValue` annotation declares the auto-increment primary key.

The `@Column` annotation declares a database field mapping.
:::

```java title="src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"
package com.example.fullstackbooktodospringboot.repository;

import com.example.fullstackbooktodospringboot.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    List<ToDo> findByCompleted(Boolean completed);
}
```

:::note
The JpaRepository class is provided by Spring Data JPA. Note `Jpa<ToDo, Long>`, ToDo is the model we defined above. Long is the type of the primary key id. With this declaration, we now have a way to interact with the database. See https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html.
:::


## Database Migrations

Most real world projects will use migrations to make incremental schema changes to the database.

```xml title="src/main/resources/db/changelog/changelog.xml"
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:pro="http://www.liquibase.org/xml/ns/pro"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.4.xsd
      http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-4.5.xsd">
    <includeAll path="db/changelog/*.sql" />
</databaseChangeLog>
```

```sql title="src/main/resources/db/changelog/changelog-1.0.sql"
--liquibase formatted sql

--changeset fullstackbook:1
create table todos (
  id bigserial primary key,
  name text
);
```

```sql title="src/main/resources/db/changelog/changelog-2.0.sql"
--liquibase formatted sql

--changeset fullstackbook:2
alter table todos add column completed boolean not null default false;
```

:::note
Migrations are run automatically when you start the server.

Liquibase supports writing the migrations in an xml format. It has some advantages like rollbacks and being database agnostic, but in order to keep things simple, we opted for raw sql.
:::

:::tip
Do not use automatic schema generation since that is also only used in development.

It is best to keep development and production as similar as possible, so it is good to start with a production grade migration tool and database.
:::

## Configuration

Spring Boot provides a mechanism to configure your app. For example, in `application.properties`, we define our application name, database credentials, the database migration config file, and the port to listen on.

```txt title="src/main/resources/application.properties"
spring.application.name=${APP_NAME:Full Stack Book To Do}
spring.datasource.url=${DB_URL:jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot}
spring.datasource.username=${DB_USER:postgres}
spring.datasource.password=${DB_PASSWORD:}
spring.liquibase.change-log=classpath:db/changelog/changelog.xml
server.port=8000
```

:::note
The format of configuration is:

`foo.bar=${ENV_VARIABLE_NAME:default value}`

For example:
The `spring.application.name` configuration has a default value of `Full Stack Book To Do`, but can be overridden by the `APP_NAME` environment variable.
:::

:::note
In IntelliJ, the environment variables can be changed by clicking on the "green hammer" icon -> Edit Configurations -> Environment -> Environment Variables.

In VSCode, the environment variables can be changed by using a `.env` file. The file name and path can be changed by going to Run and Debug -> "cog" icon to open `launch.json`.
:::

:::caution
Do not check in production secrets, such as api keys and db credentials, into the git repository. Those should be loaded in as environment variables.
:::



## Exception Handling

```java title="src/main/java/com/example/fullstackbooktodospringboot/exception/GlobalControllerExceptionHandler.java"
package com.example.fullstackbooktodospringboot.exception;

import com.example.fullstackbooktodospringboot.dto.ErrorDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@ControllerAdvice(annotations = RestController.class)
@Log4j2
class GlobalControllerExceptionHandler {
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorDto> handleResponseStatusException(ResponseStatusException ex) {
        log.error("response status exception", ex);
        ErrorDto errorDto = new ErrorDto(ex.getMessage());
        return new ResponseEntity<>(errorDto, ex.getStatus());
    }

    @ExceptionHandler(ToDoException.class)
    public ResponseEntity<ErrorDto> handleToDoException(ToDoException ex) {
        log.error("todo custom exception", ex);
        ErrorDto errorDto = new ErrorDto(ex.getMessage());
        HttpStatus httpStatus = HttpStatus.resolve(ex.getStatus());
        return new ResponseEntity<>(errorDto, httpStatus);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorDto> handleRuntimeException(RuntimeException ex) {
        log.error("internal server error", ex);
        ErrorDto errorDto = new ErrorDto("internal server error");
        return new ResponseEntity<>(errorDto, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

:::note
The `@ControllerAdvice` annotation in the code above declares a global exception handler for the RestController class.

The `@ExceptionHandler` annotation is used to declare a handler for each type of exception we want to provide custom handling logic for. For example, logging and returning custom responses.

The `@Log4j2` annotation is provided by lombok and a shorthand for creating a logger object made available to the class as `log`.
:::

```java title="src/main/java/com/example/fullstackbooktodospringboot/exception/ToDoException.java"
package com.example.fullstackbooktodospringboot.exception;

public class ToDoException extends RuntimeException {
    private int status;

    public ToDoException(int status, String message) {
        super(message);
        this.status = status;
    }

    public int getStatus() {
        return status;
    }
}
```

:::note
A custom exception is probably useful if you have specific exception handling requirements.
:::

## Testing

Spring Boot provides support for unit testing with MockMvc and MockBean.

```java title="src/test/java/com/example/fullstackbooktodospringboot/controller/AppControllerTest.java"
package com.example.fullstackbooktodospringboot.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.CoreMatchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc
public class AppControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getRoot() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("Hello World")));
    }

}
```

:::note
In the AppControllerTest, we are making a request to the root endpoint and checking the content of the response.

We are using the `@Autowired` annotation to inject MockMvc, so that we can perform the request.

`@Test` declares a unit test.
:::

```java title="src/test/java/com/example/fullstackbooktodospringboot/controller/ToDoControllerTest.java"
package com.example.fullstackbooktodospringboot.controller;

import com.example.fullstackbooktodospringboot.dto.ToDoDto;
import com.example.fullstackbooktodospringboot.service.ToDoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ToDoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ToDoService toDoService;

    @Test
    public void getToDosShouldReturnTodos() throws Exception {
        List<ToDoDto> todos = new ArrayList<>();
        ToDoDto todoDto = new ToDoDto(1L, "write unit tests", false);
        todos.add(todoDto);
        when(toDoService.getToDos()).thenReturn(todos);
        mockMvc.perform(get("/todos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].name", is(todoDto.getName())));
    }
}

```

:::note
We are mocking out the `toDoService.getToDos()` method and providing our own return value. This allows us to test the controller in isolation.
:::

```java title="src/test/java/com/example/fullstackbooktodospringboot/service/ToDoServiceTest.java"
package com.example.fullstackbooktodospringboot.service;

import com.example.fullstackbooktodospringboot.dto.ToDoDto;
import com.example.fullstackbooktodospringboot.model.ToDo;
import com.example.fullstackbooktodospringboot.repository.ToDoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
public class ToDoServiceTest {

    @Autowired
    private ToDoService toDoService;

    @MockBean
    private ToDoRepository toDoRepository;

    @Test
    public void getToDosShouldReturnTodos() throws Exception {
        List<ToDo> todos = new ArrayList<>();
        ToDo todo = new ToDo();
        todo.setId(1L);
        todo.setName("write unit tests");
        todo.setCompleted(false);
        todos.add(todo);
        when(toDoRepository.findAll()).thenReturn(todos);
        List<ToDoDto> todoDtoList = toDoService.getToDos();
        assertThat(todoDtoList).hasSize(1);
    }
}

```

:::note
In ToDoServiceTest, we are the `@MockBean` annotation to mock out the `toDoRepository.findAll()` method, so that we can test the service in isolation.
:::
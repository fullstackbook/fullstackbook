# To Do Spring Boot

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
- Flyway Migration
- PostgreSQL Driver

## Configuration

```txt title="src/main/resources/application.properties"
spring.application.name=${APP_NAME:Full Stack Book To Do}
spring.datasource.url=${DB_URL:jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot}
spring.datasource.username=${DB_USER:postgres}
spring.datasource.password=${DB_PASSWORD:}
server.port=8000
```

## Entry Point / CORS

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

## Database Migrations

```bash title="Terminal"
./mvnw -Dflyway.user=postgres -Dflyway.url=jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot flyway:migrate
./mvnw -Dflyway.user=postgres -Dflyway.url=jdbc:postgresql://localhost:5432/fullstackbook-todo-springboot flyway:clean
```

```sql title="src/main/resources/db/migration/V1__create_todos_table.sql"
create table todos (
  id bigserial primary key,
  name text
);
```

```sql title="src/main/resources/db/migration/V2__add_completed_to_todos.sql"
alter table todos add column completed boolean not null default false;
```

## DTO

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

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/UpdateToDoDto.java"
package com.example.fullstackbooktodospringboot.dto;

import lombok.Data;

@Data
public class UpdateToDoDto {
    private String name;
    private Boolean completed;
}
```

## ORM

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

```java title="src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"
package com.example.fullstackbooktodospringboot.repository;

import com.example.fullstackbooktodospringboot.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    List<ToDo> findByCompleted(Boolean completed);
}
```

## Service

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

## Controller

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

## Exception Handler

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

## Testing

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

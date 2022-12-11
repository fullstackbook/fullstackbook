# Spring Data JPA Projections

- GitHub: https://github.com/travisluong/fullstackbook-todo-springboot/tree/spring-data-jpa-projections
- YouTube: https://youtu.be/nsie-yRaLaU

## Controller

```java title="src/main/java/com/example/fullstackbooktodospringboot/controller/ToDoController.java"
package com.example.fullstackbooktodospringboot.controller;

import com.example.fullstackbooktodospringboot.dto.CreateToDoDto;
import com.example.fullstackbooktodospringboot.dto.ToDoDto;
import com.example.fullstackbooktodospringboot.dto.ToDoNameDto;
import com.example.fullstackbooktodospringboot.dto.UpdateToDoDto;
import com.example.fullstackbooktodospringboot.projection.ToDoView;
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

    // ...

    @GetMapping("/testInterfaceProjection")
    public List<ToDoView> testInterfaceProjection() {
        return toDoService.getAllToDoViews();
    }

    @GetMapping("/testClassBasedProjection")
    public List<ToDoNameDto> testClassBasedProjection(@RequestParam String name) {
        return toDoService.getNamesByName(name);
    }

    @GetMapping("/testClassBasedProjectionWithJpqlQuery")
    public List<ToDoNameDto> testClassBasedProjectionWithJpqlQuery() {
        return toDoService.getAllToDoNameDtos();
    }

    @GetMapping("/testDynamicProjection")
    public List<ToDoNameDto> testDynamicProjection(@RequestParam String name) {
        return toDoService.findAllNamesByName(name);
    }

    @GetMapping("/testDynamicProjection2")
    public List<ToDoIdDto> testDynamicProjection2(@RequestParam String name) {
        return toDoService.findAllIdsByName(name);
    }

    // ...
}

```

## DTO

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoNameDto.java"
package com.example.fullstackbooktodospringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ToDoNameDto {
    private String name;
}

```

```java title="src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoIdDto.java"
package com.example.fullstackbooktodospringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ToDoIdDto {
    private Long id;
}

```

## Interface

```java title="src/main/java/com/example/fullstackbooktodospringboot/projection/ToDoView.java"
package com.example.fullstackbooktodospringboot.projection;

public interface ToDoView {
    String getName();
}

```

## Service

```java title="src/main/java/com/example/fullstackbooktodospringboot/service/ToDoService.java"
package com.example.fullstackbooktodospringboot.service;

import com.example.fullstackbooktodospringboot.dto.*;
import com.example.fullstackbooktodospringboot.exception.ToDoException;
import com.example.fullstackbooktodospringboot.model.ToDo;
import com.example.fullstackbooktodospringboot.projection.ToDoView;
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

    // ...

    public List<ToDoView> getAllToDoViews() {
        return toDoRepository.findAllNames();
    }

    public List<ToDoNameDto> getNamesByName(String name) {
        return toDoRepository.findByName(name);
    }

    public List<ToDoNameDto> getAllToDoNameDtos() {
        return toDoRepository.getAllNames();
    }

    public List<ToDoNameDto> findAllNamesByName(String name) {
        return toDoRepository.findAllByName(name, ToDoNameDto.class);
    }

    public List<ToDoIdDto> findAllIdsByName(String name) {
        return toDoRepository.findAllByName(name, ToDoIdDto.class);
    }

    // ...
}

```

## Repository

```java title="src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"
package com.example.fullstackbooktodospringboot.repository;

import com.example.fullstackbooktodospringboot.dto.ToDoNameDto;
import com.example.fullstackbooktodospringboot.model.ToDo;
import com.example.fullstackbooktodospringboot.projection.ToDoView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    List<ToDo> findByCompleted(Boolean completed);

    // interface projection with native query
    @Query(value = "select name from todos", nativeQuery = true)
    List<ToDoView> findAllNames();

    // class based projection
    List<ToDoNameDto> findByName(String name);

    // class based projection with jpql expression
    // note: class based projection does not work with native query
    @Query(value = "select new com.example.fullstackbooktodospringboot.dto.ToDoNameDto(t.name) from ToDo t")
    List<ToDoNameDto> getAllNames();

    // dynamic projection
    <T> List<T> findAllByName(String name, Class<T> type);
}

```

## Properties

``` title="src/main/resources/application.properties"
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```
# Cucumber Rest Assured

- GitHub: https://github.com/travisluong/fullstackbook-cucumber-rest-assured
- YouTube: https://youtu.be/ZORSQY1zuTQ

## Setup

- In IntelliJ, click on File > New Project > Maven > Create from archetype. 
- Add the archetype group id, artifact id, and version from docs. See https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java.
- Create the new project.
- Add rest assured and jackson as dependencies.

## POM

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>fullstackbook-cucumber-rest-assured</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.cucumber</groupId>
                <artifactId>cucumber-bom</artifactId>
                <version>7.12.1</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>org.junit</groupId>
                <artifactId>junit-bom</artifactId>
                <version>5.9.3</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <dependencies>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-java</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-junit-platform-engine</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.junit.platform</groupId>
            <artifactId>junit-platform-suite</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>io.rest-assured</groupId>
            <artifactId>rest-assured</artifactId>
            <version>5.3.0</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.14.2</version>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <encoding>UTF-8</encoding>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.1.0</version>
            </plugin>
        </plugins>
    </build>
</project>

```

## Step Definitions

```java
package org.example;

import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.*;
import static io.restassured.http.ContentType.JSON;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class ToDoStepDefinitions {
    @Given("I have created a to do")
    public void i_have_created_a_to_do() {
        get("http://localhost:8000/v1/todos/3").then().body("name", equalTo("foo"));
    }
    @When("I update the to do")
    public void i_update_the_to_do() {
        Map<String, Object> jsonAsMap = new HashMap<>();
        jsonAsMap.put("name", "bar");
        jsonAsMap.put("completed", true);

        given().
                contentType(JSON).
                body(jsonAsMap).
                when().
                put("http://localhost:8000/v1/todos/3").
                then().
                statusCode(200);
    }
    @Then("The To Do should be updated")
    public void the_to_do_should_be_updated() {
        get("http://localhost:8000/v1/todos/3").then().body("name", equalTo("bar"));
    }
    @After()
    public void cleanup() {
        Map<String, Object> jsonAsMap = new HashMap<>();
        jsonAsMap.put("name", "foo");
        jsonAsMap.put("completed", true);

        given().
                contentType(JSON).
                body(jsonAsMap).
                when().
                put("http://localhost:8000/v1/todos/3").
                then().
                statusCode(200);
    }
}

```

## Feature

```
Feature: To Do

  Scenario: To Do
    Given I have created a to do
    When I update the to do
    Then The To Do should be updated
```

## Reference

- https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java
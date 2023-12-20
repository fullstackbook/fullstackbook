"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[3180],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return t?r.createElement(b,c(c({ref:n},s),{},{components:t})):r.createElement(b,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},9651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},c="Cucumber Rest Assured",u={unversionedId:"backend/cucumber-rest",id:"backend/cucumber-rest",title:"Cucumber Rest Assured",description:"- GitHub//github.com/travisluong/fullstackbook-cucumber-rest-assured",source:"@site/docs/backend/cucumber-rest.md",sourceDirName:"backend",slug:"/backend/cucumber-rest",permalink:"/fullstackbook/backend/cucumber-rest",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/cucumber-rest.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"CAP Theorem",permalink:"/fullstackbook/backend/cap-theorem"},next:{title:"Express To Do API",permalink:"/fullstackbook/backend/express-todo"}},i={},p=[{value:"Setup",id:"setup",level:2},{value:"POM",id:"pom",level:2},{value:"Step Definitions",id:"step-definitions",level:2},{value:"Feature",id:"feature",level:2},{value:"Reference",id:"reference",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cucumber-rest-assured"},"Cucumber Rest Assured"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-cucumber-rest-assured"},"https://github.com/travisluong/fullstackbook-cucumber-rest-assured")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/ZORSQY1zuTQ"},"https://youtu.be/ZORSQY1zuTQ"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In IntelliJ, click on File > New Project > Maven > Create from archetype. "),(0,a.kt)("li",{parentName:"ul"},"Add the archetype group id, artifact id, and version from docs. See ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java"},"https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java"),"."),(0,a.kt)("li",{parentName:"ul"},"Create the new project."),(0,a.kt)("li",{parentName:"ul"},"Add rest assured and jackson as dependencies.")),(0,a.kt)("h2",{id:"pom"},"POM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.example</groupId>\n    <artifactId>fullstackbook-cucumber-rest-assured</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    </properties>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.cucumber</groupId>\n                <artifactId>cucumber-bom</artifactId>\n                <version>7.12.1</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n            <dependency>\n                <groupId>org.junit</groupId>\n                <artifactId>junit-bom</artifactId>\n                <version>5.9.3</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.cucumber</groupId>\n            <artifactId>cucumber-java</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>io.cucumber</groupId>\n            <artifactId>cucumber-junit-platform-engine</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>org.junit.platform</groupId>\n            <artifactId>junit-platform-suite</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>io.rest-assured</groupId>\n            <artifactId>rest-assured</artifactId>\n            <version>5.3.0</version>\n            <scope>test</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>com.fasterxml.jackson.core</groupId>\n            <artifactId>jackson-databind</artifactId>\n            <version>2.14.2</version>\n        </dependency>\n\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.11.0</version>\n                <configuration>\n                    <encoding>UTF-8</encoding>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-surefire-plugin</artifactId>\n                <version>3.1.0</version>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n\n')),(0,a.kt)("h2",{id:"step-definitions"},"Step Definitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport io.cucumber.java.After;\nimport io.cucumber.java.en.Given;\nimport io.cucumber.java.en.Then;\nimport io.cucumber.java.en.When;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport static io.restassured.RestAssured.*;\nimport static io.restassured.http.ContentType.JSON;\nimport static io.restassured.matcher.RestAssuredMatchers.*;\nimport static org.hamcrest.Matchers.*;\n\npublic class ToDoStepDefinitions {\n    @Given("I have created a to do")\n    public void i_have_created_a_to_do() {\n        get("http://localhost:8000/v1/todos/3").then().body("name", equalTo("foo"));\n    }\n    @When("I update the to do")\n    public void i_update_the_to_do() {\n        Map<String, Object> jsonAsMap = new HashMap<>();\n        jsonAsMap.put("name", "bar");\n        jsonAsMap.put("completed", true);\n\n        given().\n                contentType(JSON).\n                body(jsonAsMap).\n                when().\n                put("http://localhost:8000/v1/todos/3").\n                then().\n                statusCode(200);\n    }\n    @Then("The To Do should be updated")\n    public void the_to_do_should_be_updated() {\n        get("http://localhost:8000/v1/todos/3").then().body("name", equalTo("bar"));\n    }\n    @After()\n    public void cleanup() {\n        Map<String, Object> jsonAsMap = new HashMap<>();\n        jsonAsMap.put("name", "foo");\n        jsonAsMap.put("completed", true);\n\n        given().\n                contentType(JSON).\n                body(jsonAsMap).\n                when().\n                put("http://localhost:8000/v1/todos/3").\n                then().\n                statusCode(200);\n    }\n}\n\n')),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Feature: To Do\n\n  Scenario: To Do\n    Given I have created a to do\n    When I update the to do\n    Then The To Do should be updated\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java"},"https://cucumber.io/docs/guides/10-minute-tutorial/?lang=java"))))}d.isMDXComponent=!0}}]);
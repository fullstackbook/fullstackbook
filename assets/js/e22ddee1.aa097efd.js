"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[7102],{3905:(o,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>d});var n=e(7294);function r(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}function a(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,n)}return e}function i(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}function l(o,t){if(null==o)return{};var e,n,r=function(o,t){if(null==o)return{};var e,n,r={},a=Object.keys(o);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||(r[e]=o[e]);return r}(o,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(o,e)&&(r[e]=o[e])}return r}var s=n.createContext({}),p=function(o){var t=n.useContext(s),e=t;return o&&(e="function"==typeof o?o(t):i(i({},t),o)),e},c=function(o){var t=p(o.components);return n.createElement(s.Provider,{value:t},o.children)},m={inlineCode:"code",wrapper:function(o){var t=o.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(o,t){var e=o.components,r=o.mdxType,a=o.originalType,s=o.parentName,c=l(o,["components","mdxType","originalType","parentName"]),u=p(e),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return e?n.createElement(g,i(i({ref:t},c),{},{components:e})):n.createElement(g,i({ref:t},c))}));function d(o,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof o||r){var a=e.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=o,l.mdxType="string"==typeof o?o:r,i[1]=l;for(var p=2;p<a;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6436:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=e(7462),r=(e(7294),e(3905));const a={},i="Spring Data JPA Projections",l={unversionedId:"backend/tutorials/spring-data-jpa-projections",id:"backend/tutorials/spring-data-jpa-projections",title:"Spring Data JPA Projections",description:"- GitHub//github.com/travisluong/fullstackbook-todo-springboot/tree/spring-data-jpa-projections",source:"@site/docs/backend/tutorials/spring-data-jpa-projections.md",sourceDirName:"backend/tutorials",slug:"/backend/tutorials/spring-data-jpa-projections",permalink:"/backend/tutorials/spring-data-jpa-projections",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/tutorials/spring-data-jpa-projections.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Python PostgreSQL Job Queue",permalink:"/backend/tutorials/python-postgresql-job-queue"},next:{title:"Spring Boot JWT API",permalink:"/backend/tutorials/springboot-jwt"}},s={},p=[{value:"Controller",id:"controller",level:2},{value:"DTO",id:"dto",level:2},{value:"Interface",id:"interface",level:2},{value:"Service",id:"service",level:2},{value:"Repository",id:"repository",level:2},{value:"Properties",id:"properties",level:2}],c={toc:p};function m(o){let{components:t,...e}=o;return(0,r.kt)("wrapper",(0,n.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spring-data-jpa-projections"},"Spring Data JPA Projections"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-todo-springboot/tree/spring-data-jpa-projections"},"https://github.com/travisluong/fullstackbook-todo-springboot/tree/spring-data-jpa-projections")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/nsie-yRaLaU"},"https://youtu.be/nsie-yRaLaU"))),(0,r.kt)("h2",{id:"controller"},"Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/controller/ToDoController.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/controller/ToDoController.java"'},'package com.example.fullstackbooktodospringboot.controller;\n\nimport com.example.fullstackbooktodospringboot.dto.CreateToDoDto;\nimport com.example.fullstackbooktodospringboot.dto.ToDoDto;\nimport com.example.fullstackbooktodospringboot.dto.ToDoNameDto;\nimport com.example.fullstackbooktodospringboot.dto.UpdateToDoDto;\nimport com.example.fullstackbooktodospringboot.projection.ToDoView;\nimport com.example.fullstackbooktodospringboot.service.ToDoService;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping("/todos")\npublic class ToDoController {\n    private ToDoService toDoService;\n\n    public ToDoController (ToDoService toDoService) {\n        this.toDoService = toDoService;\n    }\n\n    // ...\n\n    @GetMapping("/testInterfaceProjection")\n    public List<ToDoView> testInterfaceProjection() {\n        return toDoService.getAllToDoViews();\n    }\n\n    @GetMapping("/testClassBasedProjection")\n    public List<ToDoNameDto> testClassBasedProjection(@RequestParam String name) {\n        return toDoService.getNamesByName(name);\n    }\n\n    @GetMapping("/testClassBasedProjectionWithJpqlQuery")\n    public List<ToDoNameDto> testClassBasedProjectionWithJpqlQuery() {\n        return toDoService.getAllToDoNameDtos();\n    }\n\n    @GetMapping("/testDynamicProjection")\n    public List<ToDoNameDto> testDynamicProjection(@RequestParam String name) {\n        return toDoService.findAllNamesByName(name);\n    }\n\n    @GetMapping("/testDynamicProjection2")\n    public List<ToDoIdDto> testDynamicProjection2(@RequestParam String name) {\n        return toDoService.findAllIdsByName(name);\n    }\n\n    // ...\n}\n\n')),(0,r.kt)("h2",{id:"dto"},"DTO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoNameDto.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoNameDto.java"'},"package com.example.fullstackbooktodospringboot.dto;\n\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\n\n@Data\n@AllArgsConstructor\npublic class ToDoNameDto {\n    private String name;\n}\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoIdDto.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/dto/ToDoIdDto.java"'},"package com.example.fullstackbooktodospringboot.dto;\n\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\n\n@Data\n@AllArgsConstructor\npublic class ToDoIdDto {\n    private Long id;\n}\n\n")),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/projection/ToDoView.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/projection/ToDoView.java"'},"package com.example.fullstackbooktodospringboot.projection;\n\npublic interface ToDoView {\n    String getName();\n}\n\n")),(0,r.kt)("h2",{id:"service"},"Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/service/ToDoService.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/service/ToDoService.java"'},"package com.example.fullstackbooktodospringboot.service;\n\nimport com.example.fullstackbooktodospringboot.dto.*;\nimport com.example.fullstackbooktodospringboot.exception.ToDoException;\nimport com.example.fullstackbooktodospringboot.model.ToDo;\nimport com.example.fullstackbooktodospringboot.projection.ToDoView;\nimport com.example.fullstackbooktodospringboot.repository.ToDoRepository;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.server.ResponseStatusException;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Service\npublic class ToDoService {\n    private ToDoRepository toDoRepository;\n\n    public ToDoService (ToDoRepository toDoRepository) {\n        this.toDoRepository = toDoRepository;\n    }\n\n    // ...\n\n    public List<ToDoView> getAllToDoViews() {\n        return toDoRepository.findAllNames();\n    }\n\n    public List<ToDoNameDto> getNamesByName(String name) {\n        return toDoRepository.findByName(name);\n    }\n\n    public List<ToDoNameDto> getAllToDoNameDtos() {\n        return toDoRepository.getAllNames();\n    }\n\n    public List<ToDoNameDto> findAllNamesByName(String name) {\n        return toDoRepository.findAllByName(name, ToDoNameDto.class);\n    }\n\n    public List<ToDoIdDto> findAllIdsByName(String name) {\n        return toDoRepository.findAllByName(name, ToDoIdDto.class);\n    }\n\n    // ...\n}\n\n")),(0,r.kt)("h2",{id:"repository"},"Repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"',title:'"src/main/java/com/example/fullstackbooktodospringboot/repository/ToDoRepository.java"'},'package com.example.fullstackbooktodospringboot.repository;\n\nimport com.example.fullstackbooktodospringboot.dto.ToDoNameDto;\nimport com.example.fullstackbooktodospringboot.model.ToDo;\nimport com.example.fullstackbooktodospringboot.projection.ToDoView;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\n\nimport java.util.List;\n\npublic interface ToDoRepository extends JpaRepository<ToDo, Long> {\n    List<ToDo> findByCompleted(Boolean completed);\n\n    // interface projection with native query\n    @Query(value = "select name from todos", nativeQuery = true)\n    List<ToDoView> findAllNames();\n\n    // class based projection\n    List<ToDoNameDto> findByName(String name);\n\n    // class based projection with jpql expression\n    // note: class based projection does not work with native query\n    @Query(value = "select new com.example.fullstackbooktodospringboot.dto.ToDoNameDto(t.name) from ToDo t")\n    List<ToDoNameDto> getAllNames();\n\n    // dynamic projection\n    <T> List<T> findAllByName(String name, Class<T> type);\n}\n\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title="src/main/resources/application.properties"'},"spring.jpa.show-sql=true\nspring.jpa.properties.hibernate.format_sql=true\n")))}m.isMDXComponent=!0}}]);
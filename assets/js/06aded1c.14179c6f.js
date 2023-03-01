"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Object-Relational Mapping (ORM)",l={unversionedId:"backend/topics/object-relational-mapping",id:"backend/topics/object-relational-mapping",title:"Object-Relational Mapping (ORM)",description:"Object-Relational Mapping (ORM) is a programming technique that allows developers to interact with a database using objects instead of writing SQL queries directly. ORMs are software tools that help automate the process of mapping database tables to programming objects, and vice versa. This means that developers can focus on writing code using objects and classes, instead of dealing with the complexities of SQL queries.",source:"@site/docs/backend/topics/object-relational-mapping.md",sourceDirName:"backend/topics",slug:"/backend/topics/object-relational-mapping",permalink:"/backend/topics/object-relational-mapping",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/object-relational-mapping.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"NoSQL",permalink:"/backend/topics/nosql"},next:{title:"Processes",permalink:"/backend/topics/processes"}},s={},p=[],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-relational-mapping-orm"},"Object-Relational Mapping (ORM)"),(0,r.kt)("p",null,"Object-Relational Mapping (ORM) is a programming technique that allows developers to interact with a database using objects instead of writing SQL queries directly. ORMs are software tools that help automate the process of mapping database tables to programming objects, and vice versa. This means that developers can focus on writing code using objects and classes, instead of dealing with the complexities of SQL queries."),(0,r.kt)("p",null,"ORMs provide a high-level interface to the database, allowing developers to write database queries using programming language constructs such as methods and properties. ORMs also provide features such as automatic data validation, query optimization, and transaction management."),(0,r.kt)("p",null,"Some popular ORMs include Hibernate for Java, SQLAlchemy for Python, and ActiveRecord for Ruby on Rails."),(0,r.kt)("p",null,"Hibernate is a popular ORM framework for Java that provides an easy-to-use interface for interacting with relational databases. Hibernate supports a wide range of databases and provides features such as automatic schema generation, query optimization, and caching."),(0,r.kt)("p",null,"SQLAlchemy is a popular ORM for Python that provides a flexible and powerful interface for working with relational databases. SQLAlchemy supports a variety of databases and provides features such as query generation, database schema generation, and transaction management."),(0,r.kt)("p",null,"ActiveRecord is a built-in ORM for Ruby on Rails that provides a simple and intuitive interface for working with databases. ActiveRecord provides features such as automatic database schema generation, associations between models, and transaction management."),(0,r.kt)("p",null,"ORMs can greatly simplify the process of working with databases, especially for developers who are not familiar with SQL. By providing a high-level interface to the database, ORMs allow developers to focus on writing application code, while the ORM handles the complexities of interacting with the database. However, ORMs are not always the best choice for every project, and some developers prefer to work with SQL directly."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"ORM Libraries"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequelize, TypeORM, Prisma")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLAlchemy, Django ORM, Peewee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java"),(0,r.kt)("td",{parentName:"tr",align:null},"Hibernate, MyBatis, Spring Data JPA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C#"),(0,r.kt)("td",{parentName:"tr",align:null},"Entity Framework, Dapper, NHibernate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"ODB, SOCI, Qt SQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PHP"),(0,r.kt)("td",{parentName:"tr",align:null},"Laravel Eloquent, Doctrine, Propel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"SQLite, LMDB, Tokyo Cabinet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null},"GORM, XORM, Ent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rust"),(0,r.kt)("td",{parentName:"tr",align:null},"Diesel, sqlx, prisma")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,r.kt)("td",{parentName:"tr",align:null},"ActiveRecord, Sequel, ROM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scala"),(0,r.kt)("td",{parentName:"tr",align:null},"Slick, Anorm, Quill")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Elixir"),(0,r.kt)("td",{parentName:"tr",align:null},"Ecto, moebius, postgrex")))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[1785],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},s="NoSQL",i={unversionedId:"backend/topics/nosql",id:"backend/topics/nosql",title:"NoSQL",description:"NoSQL (Not Only SQL) is a type of database that does not use the traditional relational model that SQL (Structured Query Language) databases use. Instead, NoSQL databases store data in a variety of ways, such as key-value pairs, document-based or graph-based models.",source:"@site/docs/backend/topics/nosql.md",sourceDirName:"backend/topics",slug:"/backend/topics/nosql",permalink:"/backend/topics/nosql",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/nosql.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"MVC",permalink:"/backend/topics/mvc"},next:{title:"Object-Relational Mapping (ORM)",permalink:"/backend/topics/object-relational-mapping"}},l={},c=[],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nosql"},"NoSQL"),(0,r.kt)("p",null,"NoSQL (Not Only SQL) is a type of database that does not use the traditional relational model that SQL (Structured Query Language) databases use. Instead, NoSQL databases store data in a variety of ways, such as key-value pairs, document-based or graph-based models."),(0,r.kt)("p",null,"The advantages of NoSQL databases are that they can handle large volumes of unstructured or semi-structured data and can scale horizontally across multiple servers easily. They also provide a flexible data model that allows for faster and more agile development of applications."),(0,r.kt)("p",null,"There are different types of NoSQL databases, each with its own strengths and weaknesses."),(0,r.kt)("p",null,"Document-based databases store data as JSON, BSON, or XML documents. Examples include MongoDB, Couchbase, and CouchDB."),(0,r.kt)("p",null,"Key-value databases store data as a key-value pair, with the key being a unique identifier and the value being the data itself. Examples include Redis, Riak, and Memcached."),(0,r.kt)("p",null,"Column-family databases, also known as wide-column stores, store data as columns rather than rows. Examples include Cassandra and HBase."),(0,r.kt)("p",null,"Graph-based databases store data as nodes and edges, making them useful for managing relationships between data. Examples include Neo4j and OrientDB."),(0,r.kt)("p",null,"NoSQL databases are often used in big data and real-time web applications where speed and scalability are crucial. However, they may not be the best fit for every application, and it's important to consider the specific requirements of your project before choosing a database solution."))}u.isMDXComponent=!0}}]);
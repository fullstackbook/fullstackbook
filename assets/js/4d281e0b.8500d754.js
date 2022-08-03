"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,d=m["".concat(o,".").concat(y)]||m[y]||c[y]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Java Cheat Sheet",s={unversionedId:"cheatsheets/java",id:"cheatsheets/java",title:"Java Cheat Sheet",description:"Array",source:"@site/docs/cheatsheets/java.md",sourceDirName:"cheatsheets",slug:"/cheatsheets/java",permalink:"/docs/cheatsheets/java",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/cheatsheets/java.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VanillaJS",permalink:"/docs/projects/todo/frontend/vanillajs"},next:{title:"JavaScript Cheat Sheet",permalink:"/docs/cheatsheets/javascript"}},o={},p=[{value:"Array",id:"array",level:2},{value:"String",id:"string",level:2},{value:"HashMap",id:"hashmap",level:2},{value:"HashSet",id:"hashset",level:2},{value:"ArrayList",id:"arraylist",level:2},{value:"Heap",id:"heap",level:2},{value:"Queue",id:"queue",level:2},{value:"Stack",id:"stack",level:2},{value:"Linked List",id:"linked-list",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-cheat-sheet"},"Java Cheat Sheet"),(0,r.kt)("h2",{id:"array"},"Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int[] a = new int[10];\nint[] a = new int[]{1, 2, 3};\nint[] a = {1, 2, 3};\nint[][] a = new int[10][20];\nint[][] a = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n\nArrays.sort(a);\n\nfor (int i = 0; i < a.length; i++) {\n  System.out.println(a[i]);\n}\n\nfor (int x : a) {\n  System.out.println(x);\n}\n")),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String s = new String("foo");\nString s = "foo";\nchar[] a = s.toCharArray();\n\nfor (char c : a) {\n    System.out.println(c);\n}\n\nfor (int i = 0; i < s.length(); i++) {\n    System.out.println(s.charAt(i));\n}\n')),(0,r.kt)("h2",{id:"hashmap"},"HashMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.HashMap;\n\nHashMap<String, String> map = new HashMap<>();\nmap.put(k, v);\nmap.getOrDefault(k, v);\nmap.remove(k);\nmap.size();\n\nfor (Map.Entry<String, String> entry : map.entrySet()) {\n    System.out.println(entry.getKey() + " " + entry.getValue());\n}\n\nfor (String key : map.keySet()) {\n    System.out.println(key);\n}\n\nfor (String value : map.values()) {\n    System.out.println(value);\n}\n')),(0,r.kt)("h2",{id:"hashset"},"HashSet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.HashSet;\n\nHashSet<String> set = new HashSet<>();\nset.add(x);\nset.remove(x);\nset.contains(x);\nset.size();\n\nfor (String x : set) {\n    System.out.println(x);\n}\n")),(0,r.kt)("h2",{id:"arraylist"},"ArrayList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.ArrayList;\nimport java.util.List;\nimport java.util.Collections;\n\nArrayList<Integer> a = new ArrayList<>();\nList<Integer> a = new ArrayList<>();\na.add(x);\na.set(i, x);\na.remove(i);\na.clear();\na.size();\n\nfor (int i = 0; i < a.size(); i++) {\n    System.out.println(a.get(i));\n}\n\nfor (Integer x : a) {\n    System.out.println(x);\n}\n\nCollections.sort(a);\nCollections.sort(a, Collections.reverseOrder());\n")),(0,r.kt)("h2",{id:"heap"},"Heap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.HashMap;\nimport java.util.Map;\nimport java.util.PriorityQueue;\n\nPriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // max heap\nPriorityQueue<Integer> pq = new PriorityQueue<>(); // min heap\npq.add(x);\npq.peek();\npq.poll();\npq.size();\n\nPriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue()); // min heap\nPriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue()); // max heap\nMap<Integer, Integer> map = new HashMap<>();\nmap.put(k, v);\npq.addAll(map.entrySet());\n\nfor(Map.Entry<Integer, Integer> entry: map.entrySet()) {\n  pq.add(entry);\n}\n\nMap.Entry<Integer, Integer> entry = pq.poll();\n")),(0,r.kt)("h2",{id:"queue"},"Queue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.LinkedList;\nimport java.util.Queue;\n\nQueue<Integer> q = new LinkedList<>();\nq.add(x);\nq.peek();\nq.poll();\nq.size();\nq.isEmpty();\n")),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.Stack;\n\nStack<Integer> st = new Stack<>();\nst.push(x);\nst.peek();\nst.pop();\nst.size();\nst.isEmpty();\n")),(0,r.kt)("h2",{id:"linked-list"},"Linked List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.LinkedList;\n\nLinkedList<Integer> list = new LinkedList<>();\nlist.add(x);\nlist.set(i, x);\nlist.remove(i);\nlist.clear();\nlist.size();\n\nfor (int i = 0; i < list.size(); i++) {\n    System.out.println(list.get(i));\n}\n\nfor (int x : list) {\n    System.out.println(x);\n}\n")))}c.isMDXComponent=!0}}]);
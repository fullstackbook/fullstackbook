"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[9897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,y=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},s="Java Cheat Sheet",o={unversionedId:"cheatsheets/java",id:"cheatsheets/java",title:"Java Cheat Sheet",description:"Array",source:"@site/docs/cheatsheets/java.md",sourceDirName:"cheatsheets",slug:"/cheatsheets/java",permalink:"/fullstackbook/cheatsheets/java",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/cheatsheets/java.md",tags:[],version:"current",frontMatter:{},sidebar:"cheatsheetSidebar",previous:{title:"Git Cheat Sheet",permalink:"/fullstackbook/cheatsheets/git"},next:{title:"JavaScript Cheat Sheet",permalink:"/fullstackbook/cheatsheets/javascript"}},l={},p=[{value:"Array",id:"array",level:2},{value:"String",id:"string",level:2},{value:"HashMap",id:"hashmap",level:2},{value:"HashSet",id:"hashset",level:2},{value:"ArrayList",id:"arraylist",level:2},{value:"Heap",id:"heap",level:2},{value:"Queue",id:"queue",level:2},{value:"Stack",id:"stack",level:2},{value:"Linked List",id:"linked-list",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-cheat-sheet"},"Java Cheat Sheet"),(0,r.kt)("h2",{id:"array"},"Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// create\nint[] a = {1, 2, 3};\nint[] a2 = new int[10];\nint[] a3 = new int[]{1, 2, 3};\n\n// insert\na[0] = 1;\n\n// access\nint x = a[0];\n\n// loop\nfor (int i = 0; i < a.length; i++) {\n    System.out.println(a[i]);\n}\n\nfor (int n : a) {\n    System.out.println(n);\n}\n\n// sort\nArrays.sort(a);\n\n// min\nint min = Arrays.stream(a).min().getAsInt();\n\n// max\nint max = Arrays.stream(a).max().getAsInt();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// create 2d array\nint[][] a = new int[3][3];\nint[][] a2 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n")),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// create\nString s = "foo";\nString s2 = new String("foo");\n\n// access\ns.charAt(0); // index\n\n// size\ns.length();\n\n// loop\nchar[] a = s.toCharArray();\nfor (char c : a) {\n    System.out.println(c);\n}\n\nfor (int i = 0; i < s.length(); i++) {\n    System.out.println(s.charAt(i));\n}\n')),(0,r.kt)("h2",{id:"hashmap"},"HashMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// import\nimport java.util.HashMap;\n\n// create\nHashMap<String, String> map = new HashMap<>();\n\n// insert\nmap.put("foo", "bar");\n\n// access\nmap.get("foo");\nmap.getOrDefault("foo", "bar");\nmap.containsKey("foo");\n\n// size\nmap.size();\n\n// loop\nfor (Map.Entry<String, String> entry : map.entrySet()) {\n    System.out.println(entry.getKey() + " " + entry.getValue());\n}\n\nfor (String key : map.keySet()) {\n    System.out.println(key);\n}\n\nfor (String value : map.values()) {\n    System.out.println(value);\n}\n\n// remove\nmap.remove("foo");\n')),(0,r.kt)("h2",{id:"hashset"},"HashSet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// import\nimport java.util.HashSet;\n\n// create\nHashSet<String> set = new HashSet<>();\n\n// insert\nset.add("foo");\n\n// access\nset.contains("foo");\n\n// size\nset.size();\n\n//loop\nfor (String x : set) {\n    System.out.println(x);\n}\n\n// remove\nset.remove("foo");\n\n// hashset with array list as key\nHashSet<List<Integer>> set = new HashSet<>();\nset.add(Arrays.asList(1,2));\nset.contains(Arrays.asList(1,2));\n')),(0,r.kt)("h2",{id:"arraylist"},"ArrayList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// import\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Collections;\n\n// create\nList<Integer> arr = new ArrayList<>();\nArrayList<Integer> arr2 = new ArrayList<>();\n\n// insert\narr.add(1);\n\n// update\narr.set(0, 1); // index, element\n\n// size\narr.size();\n\n// loop\nfor (int i = 0; i < arr.size(); i++) {\n    System.out.println(arr.get(i));\n}\n\nfor (Integer x : arr) {\n    System.out.println(x);\n}\n\n// sort\nCollections.sort(arr);\nCollections.sort(arr, Collections.reverseOrder());\nCollections.sort(arr, (a, b) -> a - b);\n\n// remove\narr.remove(0); // index or object\narr.clear();\n\n// min\nCollections.min(arr);\n\n// max\nCollections.max(arr);\n")),(0,r.kt)("h2",{id:"heap"},"Heap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// import\nimport java.util.PriorityQueue;\n\n// create min heap\nPriorityQueue<Integer> pq = new PriorityQueue<>();\n\n// create max heap\nPriorityQueue<Integer> pqMax = new PriorityQueue<>(Collections.reverseOrder());\n\n// insert\npq.add(1);\n\n// access\npq.peek();\n\n// access and remove\npq.poll();\n\n// size\npq.size();\n\n// loop\nfor (Integer x : pq) {\n    System.out.println(x);\n}\n\n// remove\npq.remove(1); // object\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// heap with pair\n\n// create min heap\nPriorityQueue<Pair<Integer,Integer>> pq = new PriorityQueue<>((a,b) -> a.getValue() - b.getValue());\n\n// create max heap\nPriorityQueue<Pair<Integer,Integer>> pq = new PriorityQueue<>((a,b) -> b.getValue() - a.getValue());\n\n// insert\npq.add(new Pair(1, 2));\n\n// access\nPair<Integer, Integer> pair = pq.peek();\npair.getKey();\npair.getValue();\n\n// access and remove\nPair<Integer, Integer> pair2 = pq.poll();\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// heap with map entry\n\n// import\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.PriorityQueue;\n\n// create min heap\nPriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());\n\n// create max heap\nPriorityQueue<Map.Entry<Integer, Integer>> pqMax = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());\n\n// insert\nMap<Integer, Integer> map = new HashMap<>();\n\nmap.put(1, 1);\n\npq.addAll(map.entrySet());\n\nfor (Map.Entry<Integer, Integer> entry: map.entrySet()) {\n  pq.add(entry);\n}\n\n// access\nMap.Entry<Integer, Integer> entry = pq.peek();\nentry.getKey();\nentry.getValue();\n\n// access and remove\nMap.Entry<Integer, Integer> entry2 = pq.poll();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// heap with int array\n\nPriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);\npq.add(new int[]{1, 2});\nint[] arr = pq.poll();\n")),(0,r.kt)("h2",{id:"queue"},"Queue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// import\nimport java.util.LinkedList;\nimport java.util.Queue;\n\n// create\nQueue<Integer> q = new LinkedList<>();\n\n// insert\nq.add(1);\n\n// access\nq.peek();\n\n// access and remove\nq.poll();\n\n// size\nq.size();\n\n// is empty\nq.isEmpty();\n")),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// import\nimport java.util.Stack;\n\n// create\nStack<Integer> st = new Stack<>();\n\n// insert\nst.push(1); // item\n\n// access\nst.peek();\n\n// access and remove\nst.pop();\n\n// size\nst.size();\n\n// is empty\nst.isEmpty();\n")),(0,r.kt)("h2",{id:"linked-list"},"Linked List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.LinkedList;\n\n// create\nLinkedList<Integer> list = new LinkedList<>();\n\n// insert\nlist.add(1); // element\n\n// access\nlist.get(0); // index\n\n// update\nlist.set(0, 1); // index, element\n\n// size\nlist.size();\n\n// loop\nfor (int i = 0; i < list.size(); i++) {\n    System.out.println(list.get(i));\n}\n\nfor (int x : list) {\n    System.out.println(x);\n}\n\n// remove\nlist.remove(0); // index or object\n\n// remove all\nlist.clear();\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[9585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?s.createElement(f,r(r({ref:t},c),{},{components:n})):s.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=n(7462),a=(n(7294),n(3905));const o={},r="Next.js JWT UI",l={unversionedId:"frontend/nextjs-jwt",id:"frontend/nextjs-jwt",title:"Next.js JWT UI",description:"- GitHub//github.com/travisluong/fullstackbook-jwt-nextjs",source:"@site/docs/frontend/nextjs-jwt.md",sourceDirName:"frontend",slug:"/frontend/nextjs-jwt",permalink:"/frontend/nextjs-jwt",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/frontend/nextjs-jwt.md",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"Mock Data",permalink:"/frontend/mock-data"},next:{title:"Next.js To Do UI",permalink:"/frontend/nextjs-todo"}},i={},u=[{value:"Components",id:"components",level:2},{value:"Pages",id:"pages",level:2},{value:"Styles",id:"styles",level:2},{value:"Config",id:"config",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nextjs-jwt-ui"},"Next.js JWT UI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-jwt-nextjs"},"https://github.com/travisluong/fullstackbook-jwt-nextjs")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/InzrcSk_9YU"},"Full Stack FastAPI + NextJS JWT Authentication Tutorial")),(0,a.kt)("li",{parentName:"ul"},"YouTube: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/kj6wRnXQDKI"},"Full Stack Spring Boot + NextJS JWT Authentication Tutorial"))),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/layout-authenticated.js"',title:'"components/layout-authenticated.js"'},'import { useRouter } from \'next/router\'\nimport { useState, useEffect } from \'react\'\nimport styles from \'../styles/layout.module.css\'\n\nexport default function LayoutAuthenticated(props) {\n  const [profile, setProfile] = useState()\n  const router = useRouter()\n\n  useEffect(() => {\n    fetchProfile()\n  }, [])\n\n  async function fetchProfile() {\n    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test/profile`, {\n      headers: {\n        "Content-Type": "application/json",\n        "Authorization": "Bearer " + localStorage.getItem("token")\n      }\n    })\n    if (res.ok) {\n      const json = await res.json()\n      setProfile(json)\n    } else {\n      router.push("/signin")\n    }\n  }\n\n  function logout() {\n    localStorage.removeItem("token")\n    router.push("/")\n  }\n\n  return (\n    <div className={styles.layout}>\n      <div className={styles.nav}>\n        <p>Signed in as: {profile && profile.username}</p>\n        <p><button onClick={logout}>Log out</button></p>\n      </div>\n      {props.children}\n    </div>\n  )\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/layout.js"',title:'"components/layout.js"'},"import styles from '../styles/layout.module.css'\n\nexport default function Layout(props) {\n  return (\n    <div className={styles.layout}>\n      {props.children}\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"pages"},"Pages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/index.js"',title:'"pages/index.js"'},'import Head from \'next/head\'\nimport Link from \'next/link\'\n\nimport Layout from \'../components/layout\'\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>Full Stack Book JWT</title>\n        <meta name="description" content="Full Stack Book JWT" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <Layout>\n        <h1>Home</h1>\n        <p><Link href="/signup">Sign Up</Link></p>\n        <p><Link href="/signin">Sign In</Link></p>\n      </Layout>\n    </div>\n  )\n}\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/signin.js"',title:'"pages/signin.js"'},'import { useRouter } from "next/router"\nimport { useState } from "react"\nimport Layout from "../components/layout"\nimport styles from "../styles/styles.module.css"\n\nexport default function SignIn() {\n  const router = useRouter()\n\n  const [state, setState] = useState({\n    username: "",\n    password: ""\n  })\n\n  function handleChange(e) {\n    const copy = { ...state }\n    copy[e.target.name] = e.target.value\n    setState(copy)\n  }\n\n  async function handleSubmit() {\n    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {\n      method: "POST",\n      body: JSON.stringify(state),\n      headers: {\n        "Content-Type": "application/json"\n      }\n    })\n    if (res.ok) {\n      const json = await res.json()\n      localStorage.setItem("token", json.token)\n      router.push("/user")\n    } else {\n      alert("Bad credentials")\n    }\n  }\n\n  return (\n    <Layout>\n      <div className={styles.container}>\n        <h1 className={styles.title}>Sign In</h1>\n        <div className={styles.form}>\n          <input className={styles.input} type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} />\n          <input className={styles.input} type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />\n          <button className={styles.btn} onClick={handleSubmit}>Submit</button>\n        </div>\n      </div>\n    </Layout>\n  )\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/signup.js"',title:'"pages/signup.js"'},'import { useRouter } from "next/router"\nimport { useState } from "react"\nimport Layout from "../components/layout"\nimport styles from "../styles/styles.module.css"\n\nexport default function SignUp() {\n  const router = useRouter()\n\n  const [state, setState] = useState({\n    username: "",\n    email: "",\n    password: ""\n  })\n\n  function handleChange(e) {\n    const copy = { ...state }\n    copy[e.target.name] = e.target.value\n    setState(copy)\n  }\n\n  async function handleSubmit() {\n    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {\n      method: "POST",\n      body: JSON.stringify(state),\n      headers: {\n        "Content-Type": "application/json"\n      }\n    })\n    if (res.ok) {\n      alert("user registered success")\n      router.push("/signin")\n    }\n  }\n\n  return (\n    <Layout>\n      <div className={styles.container}>\n        <h1 className={styles.title}>Sign Up</h1>\n        <div className={styles.form}>\n          <input className={styles.input} type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} />\n          <input className={styles.input} type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} />\n          <input className={styles.input} type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />\n          <button className={styles.btn} onClick={handleSubmit}>Submit</button>\n        </div>\n      </div>\n    </Layout>\n  )\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/user.js"',title:'"pages/user.js"'},'import { useRouter } from "next/router"\nimport { useEffect, useState } from "react"\nimport LayoutAuthenticated from "../components/layout-authenticated"\nimport styles from "../styles/styles.module.css"\n\nexport default function User() {\n  const [content, setContent] = useState(null)\n  const router = useRouter()\n\n  useEffect(() => {\n    fetchContent()\n  }, [])\n\n\n  async function fetchContent() {\n    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test/user`, {\n      headers: {\n        "Content-Type": "application/json",\n        "Authorization": "Bearer " + localStorage.getItem("token")\n      }\n    })\n    if (res.ok) {\n      const text = await res.text()\n      setContent(text)\n    }\n  }\n\n  return (\n    <LayoutAuthenticated>\n      <div className={styles.container}>\n        <h1 className={styles.title}>User</h1>\n        {content && (\n          <p>{content}</p>\n        )}\n      </div>\n    </LayoutAuthenticated>\n  )\n}\n')),(0,a.kt)("h2",{id:"styles"},"Styles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/globals.css"',title:'"styles/globals.css"'},"* {\n  margin: 0;\n  padding: 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/layout.module.css"',title:'"styles/layout.module.css"'},".layout {\n  width: 300px;\n  margin: 20px;\n  border: 1px solid black;\n  padding: 20px;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/styles.module.css"',title:'"styles/styles.module.css"'},".container {\n  height: 400px;\n}\n\n.title {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.input {\n  height: 30px;\n  border: 1px solid black;\n  margin: 10px 0;\n  padding: 10px;\n}\n\n.btn {\n  padding: 20px;\n  margin: 20px 0;\n  width: 100px;\n  align-self: center;\n}\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".env.example"',title:'".env.example"'},"NEXT_PUBLIC_API_URL=http://localhost:8080\n")))}p.isMDXComponent=!0}}]);
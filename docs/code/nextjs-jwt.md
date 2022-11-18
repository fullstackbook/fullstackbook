# Next.js JWT API

- https://github.com/travisluong/fullstackbook-jwt-nextjs
- [Full Stack FastAPI + NextJS JWT Authentication Tutorial](https://youtu.be/InzrcSk_9YU)
- [Full Stack Spring Boot + NextJS JWT Authentication Tutorial](https://youtu.be/kj6wRnXQDKI)

## Components

```jsx title="components/layout-authenticated.js"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/layout.module.css'

export default function LayoutAuthenticated(props) {
  const [profile, setProfile] = useState()
  const router = useRouter()

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test/profile`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (res.ok) {
      const json = await res.json()
      setProfile(json)
    } else {
      router.push("/signin")
    }
  }

  function logout() {
    localStorage.removeItem("token")
    router.push("/")
  }

  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <p>Signed in as: {profile && profile.username}</p>
        <p><button onClick={logout}>Log out</button></p>
      </div>
      {props.children}
    </div>
  )
}
```

```jsx title="components/layout.js"
import styles from '../styles/layout.module.css'

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      {props.children}
    </div>
  )
}
```

## Pages

```jsx title="pages/index.js"
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack Book JWT</title>
        <meta name="description" content="Full Stack Book JWT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Home</h1>
        <p><Link href="/signup">Sign Up</Link></p>
        <p><Link href="/signin">Sign In</Link></p>
      </Layout>
    </div>
  )
}

```

```jsx title="pages/signin.js"
import { useRouter } from "next/router"
import { useState } from "react"
import Layout from "../components/layout"
import styles from "../styles/styles.module.css"

export default function SignIn() {
  const router = useRouter()

  const [state, setState] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    const copy = { ...state }
    copy[e.target.name] = e.target.value
    setState(copy)
  }

  async function handleSubmit() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (res.ok) {
      const json = await res.json()
      localStorage.setItem("token", json.token)
      router.push("/user")
    } else {
      alert("Bad credentials")
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign In</h1>
        <div className={styles.form}>
          <input className={styles.input} type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} />
          <input className={styles.input} type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          <button className={styles.btn} onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Layout>
  )
}
```

```jsx title="pages/signup.js"
import { useRouter } from "next/router"
import { useState } from "react"
import Layout from "../components/layout"
import styles from "../styles/styles.module.css"

export default function SignUp() {
  const router = useRouter()

  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    const copy = { ...state }
    copy[e.target.name] = e.target.value
    setState(copy)
  }

  async function handleSubmit() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (res.ok) {
      alert("user registered success")
      router.push("/signin")
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.form}>
          <input className={styles.input} type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} />
          <input className={styles.input} type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} />
          <input className={styles.input} type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          <button className={styles.btn} onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Layout>
  )
}
```

```jsx title="pages/user.js"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LayoutAuthenticated from "../components/layout-authenticated"
import styles from "../styles/styles.module.css"

export default function User() {
  const [content, setContent] = useState(null)
  const router = useRouter()

  useEffect(() => {
    fetchContent()
  }, [])


  async function fetchContent() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test/user`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (res.ok) {
      const text = await res.text()
      setContent(text)
    }
  }

  return (
    <LayoutAuthenticated>
      <div className={styles.container}>
        <h1 className={styles.title}>User</h1>
        {content && (
          <p>{content}</p>
        )}
      </div>
    </LayoutAuthenticated>
  )
}
```

## Styles

```css title="styles/globals.css"
* {
  margin: 0;
  padding: 0;
}
```

```css title="styles/layout.module.css"
.layout {
  width: 300px;
  margin: 20px;
  border: 1px solid black;
  padding: 20px;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: right;
}
```

```css title="styles/styles.module.css"
.container {
  height: 400px;
}

.title {
  text-align: center;
  margin: 20px 0;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input {
  height: 30px;
  border: 1px solid black;
  margin: 10px 0;
  padding: 10px;
}

.btn {
  padding: 20px;
  margin: 20px 0;
  width: 100px;
  align-self: center;
}
```

## Config

```txt title=".env.example"
NEXT_PUBLIC_API_URL=http://localhost:8080
```
# JavaScript Cheat Sheet

## Array

```js
let a = [1, 2, 3]
a.filter((x) => x === 3)
a.forEach((x) => console.log(x))
a.indexOf(x)
a.join(",")
a.map((x) => x * 2)
a.pop()
a.push(x)
a.reverse()
a.sort((a, b) => a - b)
a.sort()

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}
```

## String

```js
let s = "foo"

for (let i = 0; i < s.length; i++) {
  console.log(s[i])
}

let s = "foo,bar"
s.split(",")

let a = ["foo", "bar"]
a.join(",")
```

## Object

```js
let obj = {}
let obj = {"foo": "bar"}
obj[k] = v
obj.k
obj.hasOwnProperty(k)
k in obj
!(k in obj)
delete obj[k]
```

## Set

```js
let s = new Set()
s.add(x)
s.delete(x)
s.has(x)
s.size
```

# JavaScript Cheat Sheet

## Array

```js
// create
var a = [1, 2, 3]

// insert
a.push(1)
a.unshift(1)

// access
a[0] // index

// update
a[0] = 1 // index, value

// access and remove
a.pop()
a.shift()

// size
a.length

// loop
for (var i = 0; i < a.length; i++) {
  console.log(a[i])
}

a.forEach((x) => console.log(x))

// sort
a.sort((a, b) => a - b)
a.sort()

// remove
a.splice(0, 1) // start, deleteCount

// remove and insert
a.splice(0, 1, 2, 3) // start, deleteCount, item1, item2, itemN

// filter
a.filter((x) => x === 1)

// search
a.indexOf(1)
a.find((x) => x === 1)
a.findIndex((x) => x === 1)

// join
a.join(",")

// map
a.map((x) => x * 2)

// reverse
a.reverse()

// min
Math.min(a)

// max
Math.max(a)
```

## String

```js
// create
var s = "foo"

// size
s.length

// loop
for (var i = 0; i < s.length; i++) {
  console.log(s[i])
}

// split
var s = "foo,bar"
s.split(",")
```

## Object

```js
// create
var obj = {}
var obj = {"foo": "bar"}

// insert
obj["foo"] = "bar"

// access
obj["foo"]
obj.foo
obj.hasOwnProperty("foo")
"foo" in obj
!("foo" in obj)

// size
Object.keys(obj).length

// loop
for (var k in obj) {
  console.log(obj[k])
}

for (var [k, v] of Object.entries(obj)) {
  console.log(k, v)
}

Object.entries(obj).forEach(([k,v]) => console.log(k,v))

// remove
delete obj["foo"]
```

## Set

```js
// create
var s = new Set()

// insert
s.add("foo")

// access
s.has("foo")

// size
s.size

// loop
s.forEach((x) => console.log(x))

// remove
s.delete("foo")
```

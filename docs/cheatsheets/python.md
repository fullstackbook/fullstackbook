# Python Cheat Sheet

## List

```python
# create
a = [1,2,3]

# insert
a.append(1)
a.insert(0, 1) # index, value

# access
a[0] # index

# update
a[0] = 1 # index, value

# size
len(a)

# loop
for x in a:
  print(x)

for i in range(len(a)):
  print(a[i])

for i, x in enumerate(a):
  print(i, x)

# sort
a.sort()
a.sort(reverse=True)
a.sort(key=lambda x: -x)

# remove
a.pop()
a.pop(0) # index
a.remove(1) # value

# copy
a.copy()

# count elements
a.count(1) # value

# reverse
a.reverse()

# min
min(a)

# max
max(a)
```

## String

```python
# create
s = "foo"

# loop
for c in s:
  print(c)

for i in range(len(s)):
  print(s[i])

# split
s = "foo,bar"
s.split(",")

# join
a = ["foo", "bar"]
",".join(a)
```

## Dictionary

```python
# create
d = {}
d = {"foo": "bar"}
d = dict(foo="bar")

# insert
d["foo"] = "bar"

# access
d.get("foo", "bar") # key, value
d.get("foo")
"foo" in d
"foo" not in d
d.items()
d.keys()
d.values()

# access and remove
d.popitem()

# loop
for k in d:
  print(d[k])

for k, v in d.items():
  print(k, v)

for k in d.keys():
  print(d[k])

for v in d.values():
  print(v)

# remove
del d["foo"]
```

```python
# defaultdict

# import
from collections import defaultdict

d = defaultdict(list)
d["foo"].append(1)

d = defaultdict(int)
d["foo"] += 1
```

```python
# Counter

# import
from collections import Counter

# count characters
s = "foo"
d = Counter(s)

# count words
a = ["foo", "bar", "baz"]
d = Counter(a)
```

## Set

```python
# create
s = set()
s = {"foo", "bar", "baz"}
s = set(["foo", "bar", "baz"])

# insert
s.add("foo")

# access
"foo" in s
"foo" not in s

# access and remove
s.pop()

# loop
for x in s:
  print(x)

# remove
s.remove("foo")

# set with tuple as key
s.add((1,2))
(1,2) in s
(1,2) not in s

```

## Heap

```python
# import
import heapq
```

```python
# min heap

# create
h = [1, 2, 3]
heapq.heapify(h)

# insert
heapq.heappush(h, 4)

# access
h[0]

# access and remove
heapq.heappop(h)
```

```python
# max heap

# create
h = [1, 2, 3]
h = [x * -1 for x in h]
heapq.heapify(h)

# insert
heapq.heappush(h, 4 * -1)

# access
h[0]

# access and remove
-heapq.heappop(h)
```

```python
# min heap with tuple

# create
h = [(1, "foo"), (2, "bar"), (3, "baz")]
heapq.heapify(h)

# insert
heapq.heappush(h, (4, "qux"))

# access
h[0]

# access and remove
heapq.heappop(h)
```

```python
# max heap with tuple

# create
h = [(1, "foo"), (2, "bar"), (3, "baz")]
h = [(x * -1, item) for x, item in h]
heapq.heapify(h)

# insert
heapq.heappush(h, (4 * -1, "qux"))

# access
h[0]

# access and remove
heapq.heappop(h)
```

```python
# nlargest
heapq.nlargest(1, h) # k, h

# nsmallest
heapq.nsmallest(1, h) # k, h
```

## Deque

```python
# import
from collections import deque

# create
q = deque()
q = deque([1, 2, 3])

# insert
q.append(1)
q.appendleft(1)
q.insert(0, 1) # index, value

# access
q[0] # index

# access and remove
q.pop()
q.popleft()

# size
len(q)

# remove
q.remove(1) # value

# count elements
q.count(1) # value

# find index
q.index(1) # value

# reverse
q.reverse()
```

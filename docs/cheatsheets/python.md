# Python Cheat Sheet

## List

```python
a = [1,2,3]
a.append(x)
a.copy()
a.count(x)
a.insert(i, x)
a.pop()
a.remove(x)
a.reverse()
a.sort()

for x in a:
  print(x)

for i in range(len(a)):
  print(a[i])

for i, x in enumerate(a):
  print(i, x)
```

## String

```python
s = "foo"

for c in s:
  print(c)

for i in range(len(s)):
  print(s[i])

s = "foo,bar"
s.split(",")

a = ["foo", "bar"]
",".join(arr)
```

## Dictionary

```python
d = {}
d = {"foo":1,"bar":2,"baz":3}
d = dict(foo=1, bar=2, baz=3)

d.get(k, v)
d.get(k)
d.items()
d.keys() 
d.popitem()
d.values()

d[k] = v
k in d
k not in d
del d[k]

from collections import defaultdict
d = defaultdict(list)
d = defaultdict(int)

for k in d:
  print(d[k])

for k, v in d.items():
  print(k, v)
```

## Set

```python
s = {1, 2, 3}
s = set([1, 2, 3])

s.add(x)
s.remove(x)

x in s
x not in s

for x in s:
  print(x)
```

## Heap

```python
import heapq

# min heap
h = [5, 7, 9, 1, 3]
heapq.heapify(h)
heapq.heappush(h, x)
heapq.heappop(h)

# max heap
h = [5, 7, 9, 1, 3]
h = [x * -1 for x in h]
heapq.heapify(h)
heapq.heappush(h, x * -1)
-heapq.heappop(h)

# min heap with tuple
h = []
heapq.heappush(h, (1, x))
heappop(h)

heapq.nlargest(k, h)
heapq.nsmallest(k, h)
```

## Deque

```python
from collections import deque

q = deque([1, 2, 3])
q.append(x)
q.appendleft(x)
q.count(x)
q.index(x)
q.insert(i, x)
q.pop()
q.popleft()
q.remove(x)
q.reverse()
```

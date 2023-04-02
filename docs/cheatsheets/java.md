# Java Cheat Sheet

## Array

```java
// create
int[] a = {1, 2, 3};
int[] a2 = new int[10];
int[] a3 = new int[]{1, 2, 3};

// insert
a[0] = 1;

// access
int x = a[0];

// loop
for (int i = 0; i < a.length; i++) {
    System.out.println(a[i]);
}

for (int n : a) {
    System.out.println(n);
}

// sort
Arrays.sort(a);

// min
int min = Arrays.stream(a).min().getAsInt();

// max
int max = Arrays.stream(a).max().getAsInt();
```

```java
// create 2d array
int[][] a = new int[3][3];
int[][] a2 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

## String

```java
// create
String s = "foo";
String s2 = new String("foo");

// access
s.charAt(0); // index

// size
s.length();

// loop
char[] a = s.toCharArray();
for (char c : a) {
    System.out.println(c);
}

for (int i = 0; i < s.length(); i++) {
    System.out.println(s.charAt(i));
}
```

## HashMap

```java
// import
import java.util.HashMap;

// create
HashMap<String, String> map = new HashMap<>();

// insert
map.put("foo", "bar");

// access
map.get("foo");
map.getOrDefault("foo", "bar");

// size
map.size();

// loop
for (Map.Entry<String, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}

for (String key : map.keySet()) {
    System.out.println(key);
}

for (String value : map.values()) {
    System.out.println(value);
}

// remove
map.remove("foo");
```

## HashSet

```java
// import
import java.util.HashSet;

// create
HashSet<String> set = new HashSet<>();

// insert
set.add("foo");

// access
set.contains("foo");

// size
set.size();

//loop
for (String x : set) {
    System.out.println(x);
}

// remove
set.remove("foo");
```

## ArrayList

```java
// import
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

// create
List<Integer> arr = new ArrayList<>();
ArrayList<Integer> arr2 = new ArrayList<>();

// insert
arr.add(1);

// update
arr.set(0, 1); // index, element

// size
arr.size();

// loop
for (int i = 0; i < arr.size(); i++) {
    System.out.println(arr.get(i));
}

for (Integer x : arr) {
    System.out.println(x);
}

// sort
Collections.sort(arr);
Collections.sort(arr, Collections.reverseOrder());
Collections.sort(arr, (a, b) -> a - b);

// remove
arr.remove(0); // index or object
arr.clear();

// min
Collections.min(arr);

// max
Collections.max(arr);
```

## Heap

```java
// import
import java.util.PriorityQueue;

// create min heap
PriorityQueue<Integer> pq = new PriorityQueue<>();

// create max heap
PriorityQueue<Integer> pqMax = new PriorityQueue<>(Collections.reverseOrder());

// insert
pq.add(1);

// access
pq.peek();

// access and remove
pq.poll();

// size
pq.size();

// loop
for (Integer x : pq) {
    System.out.println(x);
}

// remove
pq.remove(1); // object
```

```java
// heap with pair

// create min heap
PriorityQueue<Pair<Integer,Integer>> pq = new PriorityQueue<>((a,b) -> a.getValue() - b.getValue());

// create max heap
PriorityQueue<Pair<Integer,Integer>> pq = new PriorityQueue<>((a,b) -> b.getValue() - a.getValue());

// insert
pq.add(new Pair(1, 2));

// access
Pair<Integer, Integer> pair = pq.peek();
pair.getKey();
pair.getValue();

// access and remove
Pair<Integer, Integer> pair2 = pq.poll();

```

```java
// heap with map entry

// import
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

// create min heap
PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());

// create max heap
PriorityQueue<Map.Entry<Integer, Integer>> pqMax = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());

// insert
Map<Integer, Integer> map = new HashMap<>();

map.put(1, 1);

pq.addAll(map.entrySet());

for (Map.Entry<Integer, Integer> entry: map.entrySet()) {
  pq.add(entry);
}

// access
Map.Entry<Integer, Integer> entry = pq.peek();
entry.getKey();
entry.getValue();

// access and remove
Map.Entry<Integer, Integer> entry2 = pq.poll();
```

```java
// heap with int array

PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
pq.add(new int[]{1, 2});
int[] arr = pq.poll();
```

## Queue

```java
// import
import java.util.LinkedList;
import java.util.Queue;

// create
Queue<Integer> q = new LinkedList<>();

// insert
q.add(1);

// access
q.peek();

// access and remove
q.poll();

// size
q.size();

// is empty
q.isEmpty();
```

## Stack

```java
// import
import java.util.Stack;

// create
Stack<Integer> st = new Stack<>();

// insert
st.push(1); // item

// access
st.peek();

// access and remove
st.pop();

// size
st.size();

// is empty
st.isEmpty();
```

## Linked List

```java
import java.util.LinkedList;

// create
LinkedList<Integer> list = new LinkedList<>();

// insert
list.add(1); // element

// access
list.get(0); // index

// update
list.set(0, 1); // index, element

// size
list.size();

// loop
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

for (int x : list) {
    System.out.println(x);
}

// remove
list.remove(0); // index or object

// remove all
list.clear();
```

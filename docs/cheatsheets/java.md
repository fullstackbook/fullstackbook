# Java Cheat Sheet

## Array

```java
int[] a = new int[10];
int[] a = new int[]{1, 2, 3};
int[] a = {1, 2, 3};

Arrays.sort(a);

for (int i = 0; i < a.length; i++) {
  System.out.println(a[i]);
}

for (int x : a) {
  System.out.println(x);
}

int[][] a = new int[10][20];
int[][] a = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

for (int i = 0; i < a.length; i++) {
    for (int j = 0; j < a[i].length; j++) {
        System.out.println(a[i][j]);
    }
}
```

## String

```java
String s = new String("foo");
String s = "foo";
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
import java.util.HashMap;

HashMap<String, String> map = new HashMap<>();
map.put(k, v);
map.getOrDefault(k, v);
map.remove(k);
map.size();

for (Map.Entry<String, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}

for (String key : map.keySet()) {
    System.out.println(key);
}

for (String value : map.values()) {
    System.out.println(value);
}
```

## HashSet

```java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();
set.add(x);
set.remove(x);
set.contains(x);
set.size();

for (String x : set) {
    System.out.println(x);
}
```

## ArrayList

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

ArrayList<Integer> a = new ArrayList<>();
List<Integer> a = new ArrayList<>();
a.add(x);
a.set(i, x);
a.remove(i);
a.clear();
a.size();

for (int i = 0; i < a.size(); i++) {
    System.out.println(a.get(i));
}

for (Integer x : a) {
    System.out.println(x);
}

Collections.sort(a);
Collections.sort(a, Collections.reverseOrder());
```

## Heap

```java
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // max heap
PriorityQueue<Integer> pq = new PriorityQueue<>(); // min heap
pq.add(x);
pq.peek();
pq.poll();
pq.size();

PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue()); // min heap
PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue()); // max heap
Map<Integer, Integer> map = new HashMap<>();
map.put(k, v);
pq.addAll(map.entrySet());

for(Map.Entry<Integer, Integer> entry: map.entrySet()) {
  pq.add(entry);
}

Map.Entry<Integer, Integer> entry = pq.poll();
```

## Queue

```java
import java.util.LinkedList;
import java.util.Queue;

Queue<Integer> q = new LinkedList<>();
q.add(x);
q.peek();
q.poll();
q.size();
q.isEmpty();
```

## Stack

```java
import java.util.Stack;

Stack<Integer> st = new Stack<>();
st.push(x);
st.peek();
st.pop();
st.size();
st.isEmpty();
```

## Linked List

```java
import java.util.LinkedList;

LinkedList<Integer> list = new LinkedList<>();
list.add(x);
list.set(i, x);
list.remove(i);
list.clear();
list.size();

for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

for (int x : list) {
    System.out.println(x);
}
```

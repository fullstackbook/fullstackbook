# Java Cheat Sheet

## Array

```java
int[] arr = new int[10];
int[] arr = new int[10][20];
int[] arr = new int[]{1, 2, 3};
int[] arr = {1, 2, 3};
int[] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

for (int i = 0; i < arr.length; i++) {
  System.out.println(arr[i]);
}

for (int i : arr) {
  System.out.println(i);
}
```

## String

```java
String str = new String("foo");
String str = "foo";
str.length();
char[] chArr = str.toCharArray();

for (char c : chArr) {
    System.out.println(c);
}

for (int i = 0; i < str.length(); i++) {
    System.out.println(str.charAt(i));
}
```

## HashMap

```java
import java.util.HashMap;

HashMap<String, String> map = new HashMap<>();
map.put("foo", "bar");
map.put("baz", "qux");
map.getOrDefault("foo", "baz");
map.remove("foo");
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

Time Complexity​:
- Access: O(1)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)

## HashSet

```java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();
set.add("foo");
set.remove("foo");
set.contains("foo");
set.size();

for (String s : set) {
    System.out.println(s);
}
```

Time Complexity:​
- Access: O(1)
- Search: O(1)
- Insert: O(1)
- Remove: O(1)

## ArrayList

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

ArrayList<Integer> list = new ArrayList<>();
List<Integer> list = new ArrayList<>();
list.add(1);
list.set(0, 100);
list.remove(0);
list.clear();
list.size();

for (int i = 0; i < list.size(); i++) { 
    System.out.println(list.get(i)); 
} 

for (Integer i : list) { 
    System.out.println(i); 
}

Collections.sort(list);
Collections.sort(list, Collections.reverseOrder());
```

Time Complexity:​
- Access: O(1)
- Search: O(n)
- Insert: O(1) (at the back of the ArrayList)
- Remove: O(n)

## Heap

```java
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // max heap
PriorityQueue<Integer> pq = new PriorityQueue<>(); // min heap
pq.add(1);
pq.peek();
pq.poll();
pq.size();

PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue()); // min heap
PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue()); // max heap
Map<Integer, Integer> map = new HashMap<>();
map.put(1, 1);
map.put(2, 2);
pq.addAll(map.entrySet());

for(Map.Entry<Integer, Integer> entry: map.entrySet()) {
  pq.add(entry);
}

Map.Entry<Integer, Integer> entry = pq.poll();
```

Time Complexity:​
- Access Max / Min: O(1)
- Insert: O(log(n))
- Remove Max / Min: O(log(n))

## Queue

```java
import java.util.LinkedList;
import java.util.Queue;

Queue<Integer> q = new LinkedList<>();
q.add(10);
q.peek();
q.poll();
q.size();
q.isEmpty();
```

Time Complexity:​
- Access: O(n)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)

## Stack

```java
import java.util.Stack;

Stack<Integer> st = new Stack<>();
st.push(10);
st.peek();
st.pop();
st.size();
st.isEmpty();
```

Time Complexity​:
- Access: O(n)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)

## Linked List

```java
import java.util.LinkedList;

LinkedList<Integer> list = new LinkedList<>();
list.add(1);
list.set(0, 100);
list.remove(0);
list.clear();
list.size();

for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

for (int i : list) {
    System.out.println(i);
}
```

Time Complexity​:
- Access: O(n)
- Search: O(n)
- Insert: O(1)
- Remove: O(1)

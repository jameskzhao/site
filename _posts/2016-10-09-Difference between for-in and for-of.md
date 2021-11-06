---
layout: post
title: Difference between for-in and for-of in JS
tags: [JavaScript]
---
The most basic type of iteration in JavaScript is the for loop. 

```js
const array = [1,2,3];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}
//Result: 1,2,3
```

In addition to the standard for loop, there are `for...in` loop and `for...of` loop as well. 

### The for...in statement

`for...in` is a method for iterating over "enumerable" properties of an object. If a property is enumerable, we can use for..in loop to access it. 

```js
const obj = {a:1, b:2, c:3};
for (const i in obj){
    console.log(obj[i]);
}
//Result: 1,2,3
```
#### for...in and Objects
`for...in` method provides us the most straight forward way to loop over object keys as they don't have access to forEach method as arrays do.

#### for...in and Arrays (and Strings)

The "key" values in an arary, and each character in a string, are the numerical indexes. These indexes are enumerable properties. Like object keys we can use `for...in` to loop over all the values in an array as well.

```js
const array = ['a','b','c','d'];
for (const index in array){
    console.log(index);
    console.log(array[index]);
}
// Result: 0,1,2,3
// a,b,c,d

const str = 'abcdefg';
for (const char in str){
    console.log(char);
    console.log(str[char]);
}
// Result: 0,1,2,3,4,5,6
// a,b,c,d,e,f,g
```

Do not use for...in loop with arrays when index order is important. It's not guaranteed that the iteration happens in sequence.

### The for...of Statement

for...of is a method introduced in ES2015. It is used for iterating over iterable collections. This method won't work with object because objects are not iterable.

```js

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (const key of obj) {
    console.log( obj[key] )
}
// error: Uncaught TypeError: obj is not iterable
```

#### for...of and Arrays (and Strings)

The for...of method works well with arrays and strings as both of them are iterable. It is a more reliable way of looping them in sequence.

```js
const array = ['a', 'b', 'c', 'd'];
for (const item of array) {
    console.log(item)
}
// Result: a, b, c, d

const string = 'Ire Aderinokun';
for (const character of string) {
    console.log(character)
}
// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n

```

In conclusion, we should use for...in with objects and for...of with arrays and strings. To better memorize this rule, we just need to remember that 'o' and 'o' dosn't work together.
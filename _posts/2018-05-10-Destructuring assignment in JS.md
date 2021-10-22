---
layout: post
title: Destructuring assignment in JS
tags: [JavaScript, Tricks]
---

JavaScript allows you to extract the information that is most relevant for you. With destructurnig syntax, you can unpack values from arrays, or properties from objects into designed variables.

Check out the documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js

let book = {
    title: "I am a title",
    author: "John Doe",
    tags: ["js", "computer", "web development"]
};

let {title, author, tags} = book;

console.log(title); // I am a title
console.log(author); // John Doe
console.log(tags); // ["js", "computer", "web development"]

```

```js
let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); //[30,40,50]
console.log(a); //10
console.log(b); //20

```

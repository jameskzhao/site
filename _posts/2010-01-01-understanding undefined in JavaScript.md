---
layout: post
title: Understanding 'undefined' in JavaScript
tags: [JavaScript, undefined]
---

undefined is not the same as a 'not defined error'

- The 'not defined' error occurs when a variable is not declared at all

- undefined is a special value when a variable is declared but there is no value assigned. undefined is not a string

```js

var a;

console.log(a);

if(a === undefined){
  
  console.log('a is undefined!')

}

```

### Never set a value to undefined

It will be impossible to tell if your variable was never set a value, or you set a value initially and then decided to set it as undefined.

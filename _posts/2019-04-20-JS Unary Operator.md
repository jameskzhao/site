---
layout: post
title: JS Unary Operator
tags: [JavaScript, Unary, Operator]
---
Unary operators are the simplest operators in JavaScript. A unary operator works on one oprand. This means that there is an operator followed by just one value - or operand - that then produces a result from the operation.

### delete

The `delete` operator with remove a property from an object. When using `delete` with an array, it will only delete the value, without changing the lenght of the array.

```js
// Here is an example of deleting a property from an object
let person = {
    name:'James',
    age:20,
    male:true
}

delete person.age; // {name:'James', male:true}
delete person['male'] // {name:'James'}


// Here is an example of deleting an element from an array

let a = [1,2,3];
delete a[0];
console.log(a); // [undefined,2,3]
```

### typeof

The `typeof` operator will evaluate and return a string of the type of the variable.

```js

let a = 1;
let b = 'James';
let c = true;

typeof a; //'number'
typeof b; //'string'
typeof c; //'boolean'

```

### void

`void` operator evaluate an expression and returns `undefined` value. `void` is often used with hyperlinks like javascript:void(0) to return undefined when user clicks. This will prevent page from reloading.

```js

function a(){
    return 1;
}
a(); //1
void a(); //undefined

```

### unary plus(+)

`unary plus(+)` will attempt to convert the value next to it to a number. This only works with string with only numbers, and boolean values. For other string it will return NaN

```js

let myStr = '123';
console.log(myStr+1); //1231
console.log(+myStr+1); //124

let myBool = false;
console.log(+myBool); //0

let myName = 'James';
console.log(+myName); //NaN
```

### unary negation(-)

`unary negation(-)` will first convert the value next to it to a number, and then negates it.

```js

let price = '12.45';
console.log(-price); // -12.45

```

### Increment / Decrement operators

Both increment and decrement operators have 2 versions: prefix and postfix. With prefix version, the value of the variable is changed before the statement is evaluated.

```js

let a = 8;
++a; //9
let c = a++;
console.log(c); //9
console.log(a); //10

```

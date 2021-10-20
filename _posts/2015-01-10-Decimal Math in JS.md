---
layout: post
title: Decimal Math in JS
tags: JavaScript
---

One of the big headaches of JS particularly for new learners, is the fact that it doesn't do decimal math as expected.

If you are calculating the sum of several float values in JavaScript, you will not get what you expected. For example,

```js
let a = 0.1;
let b = 0.2;
console.log(a+b);
// you will get 0.30000000000000004
```

In another real world example, let's suppose you have a product with price $20.30, a customer with $40.60 wants to place an order with 2 of the products.

```js
var price = 20.30;
var money = 60.90;
var paymentRequired = price*3;

//paymentRequired would be 60.900000000000006

if(paymentRequired<=money){
  console.log('we have enough money to place an order');
}else{
  console.log('we do not have enough money to place an order');
}
// we don't have enough money 

```

In JavaScript, all numbers are IEEE754 floating point numbers. Due to the binary nature of the encoding, some decimal numbers cannot be represented with perfect accuracy. 

Lots of developers suggest using `toFixed()` function after we get the result. In the example above, we can do something like this:

```js
var paymentRequired = (price*3).toFixed(2);
// we get 60.90 this time, yay!
```

You have to be extra careful though. The function `toFixed()` doesn't return a number, instead it returns a string. If you'd like to use the number and do other calculations you will run into problems.

```js
var subTotal = paymentRequired + 10.20;
console.log(subTotal);
// we won't get what we expect this time. subTotal is now a string of '60.9010.2'
```

If you decide to use `toFixed()`, remember to always parse it into a number using `parseFloat()` function. 

```js
var paymentRequired = parseFloat((price*3).toFixed(2));
var subTotal = paymentRequired + 10.20;
console.log(subTotal);
// we get 71.1 this time!
```

---
layout: post
title: How to sort an array in JS
tags: [JavaScript, Array]
---

By default, JavaScript sorts an array by dictionary order(numbers first, followed by letters in alphabetical order)

```js
[4,3,2,1].sort();
// we get [1,2,3,4] as expected

[3,'a',4,'z'].sort();
// we get [3,4,'a','z']

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

```

We can pass in a function variable to define our own sorting algorithm.

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
// if return a negative number, the first parameter of the function will be sorted to a lower index in the array
console.log(numbers);

// can also do this way:
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5]
```

If we want to sort an array of objects by property value, we can define our sorting function as following:

```js
const list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

list.sort((a, b) => (a.color > b.color) ? 1 : -1)
// we sort array of objects by their color attribute in alphabetical order

```

If we want to sort an array with month names, we'll need a helper array so we can compare them according to their month values

```js

var allMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var month = ['March', 'May', 'January'];
month.sort(function(a, b){
  return allMonths.indexOf(a)>allMonths.indexOf(b);
})

```

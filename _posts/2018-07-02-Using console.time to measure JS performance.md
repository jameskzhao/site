---
layout: post
title: Using console.time to measure JS performance
tags: [JavaScript, Performance]
---

Let's face it: Every developer has to deal with performance issues. How to measure performance in the first place?

In JavaScript, you can simply use console.time as a testing tool. Here is an example of how to use it:

```js
console.time("test");
function myFunc(x){
    if(x === 0 || x === 1){
        return 1;
    }else if(x < 0){
        return false;
    }
    return x * myFunc(x-1);
}
console.log(myFunc(10));
console.timeEnd("test");
```

First you insert your `console.time()` code into where you want to start measuring. The method will start a timer with the name parameter you pass in. In our case, we used 'test' as timer name.

At the end of the code block where you'd like to stop the timer, use `console.timeEnd()` method and pass in the exact same timer name. You will be able to see the test result in the browser console.

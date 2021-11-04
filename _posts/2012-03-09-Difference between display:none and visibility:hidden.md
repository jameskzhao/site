---
layout: post
title: Difference between visibility:hidden and display:none
tags: [HTML, CSS]
---

## Display

Both `visibility:hidden` and `display:none` will hide the element. `visibility:hidden` will still take up the space in the layout, whereas `display:none` removes the element completely. It doesn't take up any space, but the html code for it is still visible in the source file.

```html
<!-- This displays a white space on page-->
<input class="form-control" type="text" style="visibility:hidden">

<!-- This displays absolute nothing on page-->
<input class="form-control" type="text" style="display:none;">
```

## Form submit

Form input with `display:none` will not submitted. Instead you should use `visibility:hidden` and `position:absolute` combined so that the input is hidden and doesn't take up the empty space.

Fields that are "disabled" will be ignored and not submitted to server, so never set the input as disabled if you need its data.

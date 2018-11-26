# REACT-LOADING-TEXT

Coded for a small personnal project, I put the component on npm. Don't hesitate to fork and do what you want with it!

[example]: https://github.com/rdhox/react-loading-text/assets/react-loading-text.gif "example react-loading-text"

![alt text][example]

## How to install:

```
npm i react-loading-text
```

## How to use

```javascript
import React from "react";
import LoadingEffect from "react-loading-text";

const Text = () => {
  return (
    <LoadingEffect
      style={{
        default: [
          16,
          1,
          "white",
          2,
          0.5,
          "linear",
          () => alert("Loading finished!")
        ]
      }}
    >
      <p>Hello World!</p>
    </LoadingEffect>
  );
};
```

The `LoadingEffect` (name it like you want) component take a `style` object props. It can have 4 keys that correspond at the screen width:

- default > 1200px
- md > 992px
- sm > 768px
- xs <= 768px

Those keys are `Array` that have 6 elements, in order:

- lineheight: same that css, the height of one line
- numberline: the number of lines you want to make appears
- color
- delay: delay before the animation start, in second.
- duration: duration for one line to appear, in second.
- timing: like css, ease, linear, ease-in, ease-out, ease-in-out.
- callback : a function call when animation end.

Like that you can have responsive animations depending on how your text behave.

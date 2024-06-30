

# Animated landing page

- background image with overlay filter and gradient
- animated jumbotron navigation
- article section

This tutorial is splitted into three main sections

In the first section we will set our background image on which we are going to apply overlay filter. This will decrease brightnes of the image and it will enable us to place text on it and ensure correct contrast and readability of the text.

The second section is dedicated to our "jumbotron" navigation

Last section ... will be in since with currently selected


## Background image

We want our backgound image to be below our content. In order to do that will add follwing code in the html

```html
<body>
    <main class="content">
      <!-- content will be here -->
    </main>
</body>
```

- create contenta class
- container class 

```css
.content:before {
    position: fixed;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    
    display: block;
    width: 100vw;
    height: 100vh;

    background-image: url('./img/rhino.jpg');
    background-color: black;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
}

.content:after {
    position: fixed;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    
    display: block;
    width: 100vw;
    height: 100vh;

    background: linear-gradient(
        var(--gradient-color-first),
        var(--gradient-color-second)
    );
}

.content {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 0;
}
```

Before pseudo element

 `display:block` - `width: 100vw` and `height: 100vh` ensure that element will occupy whole screen
 - `background-size: 100% 100%` resizes the background image to cover the entire element.
 And we also set element with class `content` to be as big as the user screen resolution. In other words element will occupy whole screen.


After pseudo element

The `after` pseudo element will have similar initial setup setup as `:before`.
Now the interesting part, we will create nice subtle gradient over our grayscaled image.

We will use linear gradient starting from black color at the top to the our specified color at the bottom of the image.

```css
:root {
    --text-primary: white;
    --gradient-color-first: rgba(0, 0, 0, 0.7);
    --gradient-color-second: rgba(0, 204, 255, 0.7);
}
```

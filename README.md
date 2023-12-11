# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

- [Mobile](./screenshots/screenshot-mobile.png)
- [Desktop](./screenshots/screenshot-desktop.png)

### Links

- Solution URL: [GitHub](https://github.com/foolishbundle/sunnyside-agency-landing-page)
- Live Site URL: [Live Site](https://sunnyside-agency-landing-page-ebon-seven.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Development environment
- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - JS library


### What I learned

On this challenges I learned a lot of flexbox and how to maintain layout when change size, and learned how to use SASS.

Here some code of mine:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

```scss
&__list {
  @include abstracts.list-reset();

  display: flex;
  align-items: center;
}

&__item {
  a {
    @include abstracts.anchor-reset();

    display: block;
    padding-block: 0.75em;
    padding-inline: 1.5em;
  }
}
```

```ts
const enablePopupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();

  const element = document.querySelector<HTMLElement>('.navigation--popup')!;
  const isEnabled = element.classList.contains('navigation--enabled');

  if (!isEnabled) {
    element.classList.add('navigation--enabled');
  } else {
    element.classList.remove('navigation--enabled');
  }
}
```

### Continued development

The performance is kinda bad like 75%, it seems a lot todo to make it 100%! 

### Useful resources

- [SAAS Documentation](https://sass-lang.com/guide/) - SASS documentation it's greet way to explore about pre-processing CSS.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - The GOAT.

## Author

- Frontend Mentor - [@foolishbundle](https://www.frontendmentor.io/profile/foolishbundle)
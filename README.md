# scrolltrack
A button that tracks your scroll progress. Inspired by TechCrunch's progress button. Uses [ProgressBar.js](https://github.com/kimmobrunfeldt/progressbar.js).

## Demo
Checkout demo [here](https://iamnotaturtle.github.io/scrolltrack/)

![Scroll Track Demo](./scroll-track.gif)

## Usage
```html
<ScrollTrack
    progressColor="blue"
    @progress="handleProgress">
  <slot name="content">
    X
  </slot>
</ScrollTrack>
```

## Project setup
```
yarn install
yarn serve
```

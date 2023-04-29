## Component Description

The `ComponentB` is a Vue.js component that displays a computed message based on a prop passed to it. It accepts a `message` property as a prop, and displays a message that is computed based on that prop.

## Props

- `message` (required): A string value that represents the message to be displayed in the paragraph tag.

## Computed Property

- `composedMessage`: A computed property that returns a string which is computed by concatenating "Your message is: " with the value of the `message` prop.

## Example Usage

```html
<template>
  <div>
    <ComponentB message="Hello World!"/>
  </div>
</template>

<script>
import ComponentB from './ComponentB.vue'

export default {
  name: 'App',
  components: {
    ComponentB
  }
}
</script>
```

In the example above, the `ComponentB` is imported and then used in the template. It is passed a message prop of "Hello World!". The component will render a div with a paragraph tag that displays the computed message "Your message is: Hello World!".

# Storybook Embed

<iframe src="http://localhost:6006/?path=/docs/components-componentb--docs" width="800" height="400" />
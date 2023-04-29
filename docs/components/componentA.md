## Component Description

The `ComponentA` is a Vue.js component that displays a slot and an optional message. It accepts an optional `message` property as a prop, and can be styled using SCSS.

## Props

- `message` (optional): A string value that represents the message to be displayed in the paragraph tag.

## Example Usage

```html
<template>
  <div>
    <ComponentA message="Hello World!">
      <h2>Slot content</h2>
      <p>Some text here...</p>
    </ComponentA>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'

export default {
  name: 'App',
  components: {
    ComponentA
  }
}
</script>
```

In the example above, the `ComponentA` is imported and then used in the template. It is passed a message prop and some slot content. The component will render a div with a grey background and black text, and display the slot content along with the message "Hello World!" in a paragraph tag. The styling for the component is defined in a SCSS style block.

# Storybook Embed

<iframe src="http://localhost:6006/?path=/docs/components-componenta--docs" width="800" height="400" />
<center>
<h1>🛕 Vue Component Template</h1>
<h2>Vue3 + Vite + TypeScript + Vitest + Vitepress + Storybook + ESLint + Prettier</h2>
</center>


Basic Vue3 component library template.

   ⚒️ [Vite](https://vitejs.dev/) bundler

   🧱 [TypeScript](https://www.typescriptlang.org/) support

   🧪 Fast test with [Vitest](https://vitest.dev/) and [Vue Test Utils](https://test-utils.vuejs.org/)

   📚 [VitePress](https://vitepress.dev/) documentation framework (coming soon)

   📃 [Storybook](https://storybook.js.org/) playground (coming soon)

# Getting Started

## Usage

```
// Clone the template
git clone https://github.com/longo-andrea/vue-component-template#readme

// Install dependencies
pnpm i
```

## Configuration

After have clonet this template, update with your info:

- [ ] Properties: `author`, `name` in `package.json`
- [ ] Update package `name` in `vite.config.ts`
- [ ] Update `LICENCE.md`
- [ ] Clean up the `README.md`

# Examples

Develop your on components, then in the client application.

```
// Install the libray
pnpm i vue-component-template (use your package name here)
```

Apply your global styles, in `main.ts`:
```main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'vue-component-template/index.css' // <- Global styling

createApp(App).mount('#app')

```

Then import components when needed:

```App.vue
<script setup lang="ts">
import { ComponentA } from 'vue-component-template';

// ... your custom login
</script>

...
```
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: {
        'index': './src/index.ts',
        'components/componentA/ComponentA':
          './src/components/componentA/ComponentA.vue',
        'components/componentB/ComponentB':
          './src/components/componentB/ComponentB.vue',
        'utils/add/add': './src/utils/add/add.ts',
        'utils/multiply/multiply': './src/utils/multiply/multiply.ts',
        'styles/index': './src/styles/index.scss',
      },
      name: 'vue-component-template',
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

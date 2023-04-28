import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        'components/componentA/ComponentA': './src/components/componentA/ComponentA.vue',
        'components/componentB/ComponentB': './src/components/componentB/ComponentB.vue',
        'styles/index': './src/styles/index.scss'
      },
      name: 'vue-component-template',
      formats: ['es']
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

const viteConfig = defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
})

export default viteConfig

import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    cssInjectedByJsPlugin({
      injectCodeFunction: (cssCode) => {
        // shadowRoot内に埋め込むCSSコードを取得
        ;(window as any)._getDateRangeDialogCssCode = () => cssCode
      },
    }),
    // visualizer({
    //   filename: 'dist/stats.html',
    // }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
      fileName: (format) => `data-range-dialog.js`,
    },
  },
})

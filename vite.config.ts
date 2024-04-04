import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import fs from 'fs'

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
    {
      name: 'build-preview-html',
      apply: 'build',
      closeBundle() {
        try {
          // index.html の '/src/main.tsx' を './data-range-dialog.js' に置換して dist/index.html に出力
          const srcData = fs.readFileSync('index.html', 'utf-8')
          const distData = srcData.replace(
            /\/src\/main.tsx/g,
            './data-range-dialog.js'
          )
          fs.writeFileSync('dist/index.html', distData)
          console.log('dist/index.html を作成')
        } catch (e) {
          console.error('dist/index.html の作成に失敗', e)
        }
      },
    },
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

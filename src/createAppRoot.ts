const isDevelopment = import.meta.env.MODE === 'development'
let appRoot: HTMLDivElement | null = null

/**
 * shadowRootを作成して、スタイルを埋め込み、コンポーネントを描画する要素を返す
 * 開発モードでは普通の要素を返す
 */
export function createAppRoot(): HTMLDivElement {
  if (appRoot) return appRoot

  appRoot = document.createElement('div')

  // 開発
  if (isDevelopment) {
    document.body.appendChild(appRoot)
    return appRoot
  }

  // 本番
  const root = document.createElement('date-range-dialog')
  const shadowRoot = root.attachShadow({ mode: 'open' })

  // _getDateRangeDialogCssCode は vite.config.ts にてcssを取得する  を定義
  const style = document.createElement('style')
  const cssCode = (window as any)._getDateRangeDialogCssCode() as string
  style.textContent = cssCode

  shadowRoot.appendChild(style)
  shadowRoot.appendChild(appRoot)
  document.body.appendChild(root)

  return appRoot
}

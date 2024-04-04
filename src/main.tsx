import { render } from 'preact'
import { App } from './App'
import { cdate } from 'cdate'
import { createAppRoot } from './createAppRoot'
import { registerRangeSpan } from './registerRangeSpan'
import './global.css'

// range表示に便利なカスタム要素を登録
registerRangeSpan()

/**
 * @preserve
 * dateRangeDialog を表示する
 * @example
 * ```js
 * dateRangeDialog({
 *  min: '2021-01-01',
 *  max: '2024-04-01',
 *  defaultRange: ['2024-03-01', '2024-03-15'],
 *  menu: ['今日', '昨日', '今週', '先週', '今月', '先月'],
 *  onSubmit: (start, end) => {
 *   console.log(start, end)
 *  }
 * })
 * ```
 */
function dateRangeDialog(props: Parameters<typeof App>[0]) {
  const appRoot = createAppRoot()
  render(<App {...props} />, appRoot)
}

export { dateRangeDialog, cdate }

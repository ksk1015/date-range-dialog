import { cdate } from 'cdate'

/**
 * カスタム要素 <span is="range-span"> を登録
 * ```html
 * <span
 *  is="range-span"
 *  range="2023-04-01,2023-05-01"
 *  format="YYYY年M月D日"
 *  separator=" 〜 "
 *  empty="未選択"
 * ></span>
 * ```
 */
export function registerRangeSpan() {
  if (customElements.get('range-span')) return

  class RangeSpan extends HTMLSpanElement {
    static get observedAttributes() {
      return ['range', 'format', 'separator', 'empty']
    }

    set range(value: string) {
      this.setAttribute('range', value ? `${value}` : '')
    }
    get range() {
      return this.getAttribute('range') || ''
    }

    set format(value: string) {
      this.setAttribute('format', value)
    }
    get format() {
      return this.getAttribute('format') || ''
    }

    set separator(value: string) {
      this.setAttribute('separator', value)
    }
    get separator() {
      return this.getAttribute('separator') || ''
    }

    set empty(value: string) {
      this.setAttribute('empty', value)
    }
    get empty() {
      return this.getAttribute('empty') || ''
    }

    render() {
      const range = this.range.split(',')
      const format = this.format || 'YYYY-MM-DD'
      const separator = this.separator || ' - '
      const empty = this.empty || '-'
      this.textContent =
        range && range.length === 2
          ? cdate(range[0]).format(format) +
            separator +
            cdate(range[1]).format(format)
          : empty
    }
    connectedCallback() {
      this.render()
    }
    attributeChangedCallback() {
      this.render()
    }
  }

  customElements.define('range-span', RangeSpan, { extends: 'span' })
}

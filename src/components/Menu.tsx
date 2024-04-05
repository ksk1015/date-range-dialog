import { useRef } from 'preact/hooks'
import type { MenuItem } from '../menuItems'
import styles from './Menu.module.css'
import type { RefObject } from 'preact'

type Props = {
  menuItems: MenuItem[]
  selectedMenu: string
  pressedMenu: string
  onSelect?: (menu: string, range?: [] | [string] | [string, string]) => void
  scrollToActiveRef: RefObject<(behavior?: ScrollBehavior) => void> // type Ref だとエラーになる。。。
}

export function Menu({
  menuItems,
  pressedMenu,
  onSelect = () => {},
  scrollToActiveRef,
}: Props) {
  // 押下状態ボタンへスクロール
  // 親から実行できるようpropからのrefにセット
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollToActive = (behavior?: ScrollBehavior) => {
    const target = scrollerRef.current?.querySelector(
      `button[aria-label="${pressedMenu}"]`
    )
    target?.scrollIntoView({ block: 'center', behavior })
  }
  scrollToActiveRef.current = scrollToActive

  return (
    <div
      class={styles.menu}
      ref={scrollerRef}
      onKeyDown={(e) => {
        // 上下キーでフォーカス移動
        const focused = e.currentTarget.querySelector('button:focus')
        if (!focused) return
        const next = {
          ArrowUp: focused.previousElementSibling,
          ArrowDown: focused.nextElementSibling,
        }[e.key]
        if (next instanceof HTMLButtonElement) {
          e.preventDefault()
          next.focus()
        }
      }}
    >
      <button
        type="button"
        aria-label={'カスタム'}
        aria-pressed={pressedMenu === 'カスタム'}
        tabIndex={pressedMenu === 'カスタム' ? 0 : -1}
        onClick={() => onSelect('カスタム')}
      >
        カスタム
      </button>
      {menuItems.map(({ label, range }) => {
        return (
          <button
            type="button"
            tabIndex={-1}
            aria-label={label}
            aria-pressed={pressedMenu === label}
            tabindex={pressedMenu === label ? 0 : -1}
            disabled={range === undefined}
            onClick={() => {
              onSelect(label, range)
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

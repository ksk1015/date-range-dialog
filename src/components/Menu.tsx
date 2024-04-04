import { useEffect, useRef } from 'preact/hooks'
import type { MenuItem } from '../menuItems'
import styles from './Menu.module.css'

type Props = {
  menuItems: MenuItem[]
  selectedMenu: string
  pressedMenu: string
  intoVisble: boolean // 表示時かどうか
  onSelect?: (menu: string, range?: [] | [string] | [string, string]) => void
}

export function Menu({
  menuItems,
  selectedMenu,
  pressedMenu,
  intoVisble,
  onSelect = () => {},
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollToPressed = (behavior?: ScrollBehavior) => {
    const target = scrollerRef.current?.querySelector(
      `button[aria-label="${pressedMenu}"]`
    )
    target?.scrollIntoView({ block: 'center', behavior })
  }

  // 表示時にスクロール
  useEffect(() => {
    if (intoVisble) {
      requestAnimationFrame(() => scrollToPressed())
    }
  }, [intoVisble])

  // カレンダー選択時（selectedMenuが空）にスクロール
  useEffect(() => {
    if (selectedMenu === '') {
      scrollToPressed()
    }
  }, [selectedMenu, pressedMenu])

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

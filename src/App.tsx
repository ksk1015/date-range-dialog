import { useRef, useState, useEffect } from 'preact/hooks'
import { cdate } from 'cdate'
import { createMenuItem, type MenuItemConfig } from './menuItems'
import { Calenders } from './components/Calenders'
import { Menu } from './components/Menu'
import styles from './App.module.css'

type Props = {
  today?: string
  min?: string
  max?: string
  defaultRange?: [string, string]
  menu?: (MenuItemConfig | string)[]
  defaultSelectedMenu?: string
  onSubmit?: (start: string, end: string) => void // 未選択の場合はstart, endは空文字
  onCancel?: () => void
}

export function App({
  today = cdate().format('YYYY-MM-DD'),
  min,
  max,
  defaultRange,
  menu,
  defaultSelectedMenu = '',
  onSubmit = () => {},
  onCancel = () => {},
}: Props) {
  // 選択中の日付範囲: [], [YYYY-MM-DD], [YYYY-MM-DD, YYYY-MM-DD]
  const [range, setRange] = useState<[] | [string] | [string, string]>(
    defaultRange || []
  )

  // 選択中のメニュー
  const [selectedMenu, setSelectedMenu] = useState(defaultSelectedMenu)

  // 引数のメニュー設定からメニューアイテムを生成
  const menuItems = menu?.map((item) =>
    createMenuItem(item, { today, min, max })
  )
  // 押下状態のメニュー（カレンダー選択時でもメニューの範囲と一致すれば押下状態に）
  const pressedMenu =
    selectedMenu ||
    menuItems?.find((item) => `${item.range}` === `${range}`)?.label ||
    'カスタム'

  // dialogRefがnullかdialog.openがfalseの場合は
  // diaolog.showModal を呼ぶときのレンダリング
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogWillOpen = !dialogRef.current || !dialogRef.current.open
  if (dialogWillOpen) {
    setRange(defaultRange || [])
    setSelectedMenu(defaultSelectedMenu)
  }
  useEffect(() => {
    if (dialogWillOpen) {
      dialogRef.current?.showModal()
    }
  })

  // 適用
  const handleSubmit = () => {
    dialogRef.current?.close()

    // 1つしか選択されてない場合は start と end に同じ値を入れる
    // 未選択の場合は空文字
    const start = range[0] || ''
    const end = range[1] || start
    onSubmit(start, end)
  }

  // キャンセル
  const handleCancel = () => {
    dialogRef.current?.close()
    onCancel()
  }

  return (
    <dialog
      ref={dialogRef}
      class={styles.dialog}
      onCancel={handleCancel}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          handleCancel()
        }
      }}
    >
      <form method="dialog">
        <div class={styles.app} data-has-menu={menuItems ? true : null}>
          {menuItems && (
            <div class={styles.appMenu}>
              <Menu
                menuItems={menuItems}
                selectedMenu={selectedMenu}
                pressedMenu={pressedMenu}
                intoVisble={dialogWillOpen}
                onSelect={(menu, range) => {
                  setSelectedMenu(menu)
                  if (range) {
                    setRange(range)
                  }
                }}
              />
            </div>
          )}
          <div class={styles.appCalendar}>
            <Calenders
              min={min}
              max={max}
              today={today}
              range={range}
              selectedMenu={selectedMenu}
              intoVisble={dialogWillOpen}
              onSelect={(range) => {
                setRange(range)
                setSelectedMenu('')
              }}
            />
          </div>
          <div class={styles.appFooter}>
            <div class={styles.currentRange}>
              <span data-active={!!range.length || null}>
                {formatRange(range)}
              </span>
              <button
                type="button"
                disabled={range.length === 0}
                onClick={() => {
                  setRange([])
                }}
              >
                ×クリア
              </button>
            </div>
            <div class={styles.submit}>
              <button
                class={styles.applyButton}
                type="button"
                onClick={handleSubmit}
              >
                適 用
              </button>
              <button
                class={styles.cancelButton}
                type="button"
                onClick={handleCancel}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </form>
    </dialog>
  )
}

/** range を `YYYY年M月D日 - YYYY年M月D日` な形式に変換  */
function formatRange(range: string[] | null | undefined) {
  if (!range || range.length === 0) return '未選択'
  const from = cdate(range[0]).format('YYYY年M月D日')
  const to = range[1] ? cdate(range[1]).format(' - YYYY年M月D日') : ''
  return from + to
}

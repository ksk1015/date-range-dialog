import { useEffect, useRef } from 'preact/hooks'
import { cdate } from 'cdate'
import styles from './Calenders.module.css'

type Props = {
  today: string // YYYY-MM-DD
  min?: string // YYYY-MM-DD
  max?: string // YYYY-MM-DD
  range: [] | [string] | [string, string]
  selectedMenu: string // 選択されてるメニューラベル（メニュー変更による自動スクロールで使用）
  intoVisble: boolean // 表示時かどうか
  onSelect?: (range: [] | [string] | [string, string]) => void
}

/**
 * カレンダーUI
 */
export function Calenders({
  today,
  min = today,
  max = today,
  range,
  selectedMenu,
  intoVisble,
  onSelect = () => {},
}: Props) {
  // 選択範囲（または今日）へスクロール
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollToRange = (behavior?: ScrollBehavior) => {
    const target = scrollerRef.current?.querySelector(
      range[0] ? `button[data-date="${range[0]}"]` : 'button[data-today="true"]'
    )
    target?.scrollIntoView({ block: 'center', behavior })
  }
  // 表示時にスクロール
  useEffect(() => {
    if (intoVisble) {
      requestAnimationFrame(() => scrollToRange())
    }
  }, [intoVisble])
  // メニュー変更時にスクロール
  useEffect(() => {
    if (selectedMenu) {
      scrollToRange('smooth')
    }
  }, [selectedMenu])

  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement
    const clickedDate = target.dataset.date
    if (!clickedDate) return
    switch (range.length) {
      case 0: // 日付が選択されていない場合は開始日に
        onSelect([clickedDate])
        break
      case 1: // 日付が1つ選択されている場合は
        // 開始日より前なら開始日に、後なら終了日に
        if (clickedDate < range[0]) {
          onSelect([clickedDate])
        } else {
          onSelect([range[0], clickedDate])
        }
        break
      default: // 日付が2つ選択されている場合は開始日に
        onSelect([clickedDate])
    }
  }

  // 日付ボタンの生成
  // todo: レンダリング最適化
  // 重さの原因は処理ではなくたくさんの要素の描画なのでバーチャルスクロールにすると良いはず
  const items = []
  const calendarStart = cdate(min).startOf('month')
  const calendarEnd = cdate(max).endOf('month')
  for (let d = calendarStart; d < calendarEnd; d = d.add(1, 'day')) {
    if (d.get('date') === 1) {
      items.push(<div key={d.format('YYYY-MM')}>{d.format('YYYY年M月')}</div>)
    }
    const dateStr = d.format('YYYY-MM-DD')
    const isStart = dateStr === range[0]
    const isEnd = dateStr === range[1]
    const pressed = isStart || isEnd
    items.push(
      <button
        key={dateStr}
        type="button"
        data-date={dateStr}
        data-weekday={d.get('day')}
        data-today={dateStr === today}
        aria-label={d.format('YYYY年M月D日')}
        disabled={dateStr < min || dateStr > max}
        aria-pressed={pressed}
        data-start={isStart}
        data-end={isEnd}
        tabindex={pressed ? 0 : -1}
      >
        <span>{d.get('date')}</span>
      </button>
    )
  }

  return (
    <div class={styles.calenders}>
      <div class={styles.header}>
        <div>日</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div>土</div>
      </div>
      <div class={styles.scroll} ref={scrollerRef}>
        <div
          class={styles.body}
          onClick={handleClick}
          onKeyDown={(e) => {
            // 矢印キー操作
            const focused =
              e.currentTarget.querySelector<HTMLElement>(':focus[data-date]')
            if (!focused) return
            const diff = {
              ArrowRight: 1, // 次の日
              ArrowLeft: -1, // 前の日
              ArrowDown: 7, // 1週間後の日
              ArrowUp: -7, // 1週間前の日
            }[e.key]
            if (diff === undefined) return
            const date = cdate(focused.dataset.date)
              .add(diff, 'day')
              .format('YYYY-MM-DD')
            const next = e.currentTarget.querySelector<HTMLElement>(
              `button[data-date="${date}"]:not([disabled])`
            )
            if (next) {
              e.preventDefault()
              next.focus()
            }
          }}
        >
          {items}
        </div>
      </div>
    </div>
  )
}

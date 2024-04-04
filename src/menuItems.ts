import { cdate } from 'cdate'

type CDate = cdate.CDate

/** cDateの引数として扱える日付な型 */
export type Datey = string | number | Date | CDate

/** メニューアイテムを作るための設定 */
export type MenuItemConfig = {
  label: string
  range: ((today: CDate) => [Datey, Datey]) | [Datey, Datey]
}

/** メニューアイテムの型 */
export type MenuItem = {
  label: string
  range: [string, string] | undefined
}

/**
 * DateyをCDateに変換する
 * cdate関数はcdateオブジェクトも引数にできるっぽいが型定義上は不可だったので関数を作成
 */
function dateyToCDate(datey: Datey): CDate {
  return cdate(
    typeof datey === 'object' && 'toDate' in datey ? datey.toDate() : datey
  )
}

/**
 * プリセットメニュー設定
 */
const presetMenuConfigs: MenuItemConfig[] = [
  {
    label: '今日',
    range: (today) => [today, today],
  },
  {
    label: '昨日',
    range: (today) => [today.add(-1, 'day'), today.add(-1, 'day')],
  },
  {
    label: '今週',
    range: (today) => [today.startOf('week'), today],
  },
  {
    label: '今週（日曜〜本日）',
    range: (today) => [today.startOf('week'), today],
  },
  {
    label: '今週（月曜〜本日）',
    range: (today) => [today.startOf('week').add(1, 'day'), today],
  },
  {
    label: '今週（土曜〜本日）',
    range: (today) => [today.startOf('week').add(-1, 'day'), today],
  },
  {
    label: '先週',
    range: (today) => [
      today.add(-1, 'week').startOf('week'),
      today.add(-1, 'week').endOf('week'),
    ],
  },
  {
    label: '今月',
    range: (today) => [today.startOf('month'), today],
  },
  {
    label: '先月',
    range: (today) => [
      today.add(-1, 'month').startOf('month'),
      today.add(-1, 'month').endOf('month'),
    ],
  },
  {
    label: '半年',
    range: (today) => [today.add(-6, 'month').startOf('month'), today],
  },
  {
    label: '今年',
    range: (today) => [today.startOf('year'), today],
  },
  {
    label: '昨年',
    range: (today) => [
      today.add(-1, 'year').startOf('year'),
      today.add(-1, 'year').endOf('year'),
    ],
  },
  {
    label: '過去7日間',
    range: (today) => [today.add(-7, 'day'), today.add(-1, 'day')],
  },
  {
    label: '過去28日間',
    range: (today) => [today.add(-28, 'day'), today.add(-1, 'day')],
  },
  {
    label: '過去30日間',
    range: (today) => [today.add(-30, 'day'), today.add(-1, 'day')],
  },
  {
    label: '過去90日間',
    range: (today) => [today.add(-90, 'day'), today.add(-1, 'day')],
  },
  {
    label: '過去12ヶ月',
    range: (today) => [today.add(-12, 'month'), today.add(-1, 'day')],
  },
]

/**
 * メニュー設定のrangeから実際のrangeを計算する
 */
function calcMenuItemRange(
  range: MenuItemConfig['range'],
  cond: {
    today: Datey
    min?: Datey
    max?: Datey
  }
): [string, string] | undefined {
  const today = dateyToCDate(cond.today)

  const [from, to] = (
    typeof range === 'function' ? range(today) : [...range]
  ).map(dateyToCDate)

  const min = cond.min ? dateyToCDate(cond.min) : from
  const max = cond.max ? dateyToCDate(cond.max) : to

  // from, to が min, max の範囲外でなければ undefined を返す
  if (from > max || to < min) {
    return undefined
  }
  return [
    (from < min ? min : from).format('YYYY-MM-DD'),
    (to > max ? max : to).format('YYYY-MM-DD'),
  ]
}

/**
 * MenuItemConfigまたばプリセット名からMenuItemを作成する
 */
export function createMenuItem(
  config: MenuItemConfig | string,
  cond: {
    today: Datey
    min?: Datey
    max?: Datey
  }
): MenuItem {
  const label = typeof config === 'string' ? config : config.label
  const configRange =
    typeof config === 'string'
      ? presetMenuConfigs.find((item) => item.label === config)?.range
      : config.range

  const range = configRange ? calcMenuItemRange(configRange, cond) : undefined

  return {
    label,
    range,
  }
}

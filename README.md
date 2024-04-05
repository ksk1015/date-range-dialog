# Date Range Dialog

日付範囲を指定するダイアログを表示するライブラリです。

## 使い方

ビルドすると `dist/date-range-dialog.js` が生成されます。

```html
<button id="date-range-button">
  範囲:
  <span
    is="range-span"
    id="date-range-text"
    range="2024-03-01,2024-03-14"
    format="YYYY年M月D日"
    separator=" 〜 "
    empty="未選択"
  ></span>
</button>
<input type="hidden" name="date-range-start" id="date-range-start" value="2024-03-01" />
<input type="hidden" name="date-range-end" id="date-range-end" value="2024-03-14" />
<script type="module">
  import { dateRangeDialog, cdate } from '/path-to/date-range-dialog.js'

  // jQueryなら
  $('#date-range-button').on('click', () => {
    const start = $('#date-range-start').val()
    const end = $('#date-range-end').val()
    const range = start && end ? [start, end] : undefined
    dateRangeDialog({
      min: '2021-01-01',
      defaultRange: range,
      menu: ['今日', '昨日', '今週', '先週', '今月', '先月'],
      onSubmit: (start, end) => {
        $('#date-range-start').val(start)
        $('#date-range-end').val(end)
        $('#date-range-text').attr('range', start ? `${start},${end}` : '')
      },
    })
  })
```

以下、関数の詳細です

```javascript
// ライブラリを読み込む、cdate という日付操作ライブラリも読み込み可能です
import { dateRangeDialog, cdate } from '/path-to/date-range-dialog.js'

dateRangeDialog({
  min: '2021-01-01', // 最小日付 省略すると今日
  max: '2024-01-01', // 最大日付 省略すると今日
  defaultRange: ['2024-03-01', '2024-03-15'], // デフォルトの日付範囲

  // メニューの項目
  // today（cdateオブジェクト）を引数にした開始日と終了日を返す関数、または直接日付範囲
  // 文字列指定だけで利用できるプリセットのメニューがあります
  menu: [
    {
      label: '昨日',
      range: (today) => [today.add(-1, 'day'), today.add(-1, 'day')],
    },
    {
      label: '先週',
      range: (today) => {
        const lastWeek = today.add(-1, 'week')
        return [lastWeek.startOf('week'), lastWeek.endOf('week')]
      },
    },
    {
      label: '東京五輪',
      range: ['2021-07-23', '2021-08-08'],
    },
    // プリセットのメニュー
    // 今日,昨日
    // 今週,今週（日曜〜本日）,今週（月曜〜本日）,今週（土曜〜本日）,先週
    // 今月,先月,半年,今年,昨年
    // 過去7日間,過去28日間,過去30日間,過去90日間,過去12ヶ月,
    '今日',
    '過去12ヶ月',
  ],

  // 適用ボタンが押されたときのコールバック
  // 第一引数に開始日、第二引数に終了日、未選択の場合は空文字になる
  onSubmit: (start, end) => {
    console.log('onSubmit', start, end)
  },

  // キャンセルボタンが押されたときのコールバック
  // が、必要ないと思います
  onCancel: () => {
    console.log('onCancel')
  },
})
```

## range-span

日付範囲を表示しやすくするためのカスタムコンポーネントが勝手に使えるようになります

```html
<span
  is="range-span"
  range="2024-03-01,2024-03-14"
  format="YYYY年M月D日"
  separator=" 〜 "
  empty="未選択"
></span>

<!-- 結果 -->
<span>2024年3月1日 〜 2024年3月14日</span>
```

```javascript
// 以下のように range-span rangeを設定できます
const rangeSpan = document.querySelector('#range-span')
dateRangeDialog({
  onSubmit: (start, end) => {
    rangeSpan.range = start ? `${start},${end}` : ''
  },
})
```

## 開発

### 使用ライブラリ

- vite: ビルドツール
- TypeScript: 静的型付け
- preact: React のサブセットで、軽量なのでなので利用
- cdate: momentjs のインターフェイスに近い小さい日付操作ライブラリ

### コマンド

```bash
# インストール
npm install

# 開発サーバー
npm run dev

# テスト
npm run test

# ビルド
npm run build

# ビルド成果物の確認用サーバー起動
npm run preview
```

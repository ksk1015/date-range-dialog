(function(){"use strict";(o=>{window._getDateRangeDialogCssCode=()=>o})('._calenders_62d2a_1{width:100%;height:100%;font-size:12px;display:grid;grid-template-rows:auto 1fr}._header_62d2a_9{position:relative;padding:.6em var(--scroll-width) .6em 0;background-image:linear-gradient(#eee,#eee);background-repeat:no-repeat;background-size:calc(100% - var(--scroll-width) - 10px) 1px;background-position:5px bottom;display:grid;grid-template-columns:repeat(7,1fr)}._header_62d2a_9>div{display:grid;place-content:center}._scroll_62d2a_24{overflow-y:auto}._scroll_62d2a_24::-webkit-scrollbar{width:var(--scroll-width)}._scroll_62d2a_24::-webkit-scrollbar-track{background:var(--scroll-bg-color)}._scroll_62d2a_24::-webkit-scrollbar-thumb{background:var(--scroll-thumb-color);border-radius:var(--scroll-radius)}._body_62d2a_38{padding:1.2em 0;line-height:1;display:grid;grid-template-columns:repeat(7,1fr)}._body_62d2a_38>div{grid-column:1 / span 3;padding:0 .5em;color:#888;font-size:11px;display:flex;align-items:center}._body_62d2a_38>button{--bg-color: transparent;--bg-width: 100%;--bg-position-x: 0%;--disc-color: transparent --text-color: #000;font-size:100%;border:none;padding:1px 2px;background-color:transparent;background-image:linear-gradient(var(--bg-color),var(--bg-color));background-position:var(--bg-position-x) 50%;background-size:var(--bg-width) calc(100% - 2px);background-repeat:no-repeat;color:var(--text-color);cursor:pointer;outline:none}._body_62d2a_38>button>span{position:relative;display:grid;place-content:center;aspect-ratio:1;border-radius:50%;background-color:var(--disc-color);pointer-events:none}._body_62d2a_38>button[data-weekday="0"]{grid-column-start:1}._body_62d2a_38>button[data-weekday="1"]{grid-column-start:2}._body_62d2a_38>button[data-weekday="2"]{grid-column-start:3}._body_62d2a_38>button[data-weekday="3"]{grid-column-start:4}._body_62d2a_38>button[data-weekday="4"]{grid-column-start:5}._body_62d2a_38>button[data-weekday="5"]{grid-column-start:6}._body_62d2a_38>button[data-weekday="6"]{grid-column-start:7}._body_62d2a_38>button:disabled{--text-color: #ccc;cursor:default}._body_62d2a_38>button[data-today=true]>span{outline:1px solid #666;outline-offset:1px}._body_62d2a_38>button:is(:hover,:focus):not(:disabled,[aria-pressed=true]){--disc-color: #c6dafa}._body_62d2a_38>button[aria-pressed=true]{--disc-color: #1a73e8;--text-color: #fff}:has([data-end=true]) :is(._body_62d2a_38>button):is([data-start=true],[data-start=true]~button):not([data-end=true]~button){--bg-color: #e7f0fe}._body_62d2a_38>button[data-start=true]:not([data-end=true]){--bg-width: 50%;--bg-position-x: 100%}._body_62d2a_38>button[data-end=true]:not([data-start=true]){--bg-width: 50%}._body_62d2a_38>button[data-start=true][data-end=true]{border-radius:30%}:has([data-start=true]):not(:has([data-end=true])):has(button:not(:disabled):hover) :is(._body_62d2a_38>button):is([data-start=true],[data-start=true]~button):not(:hover~button){--bg-color: #f5f5f5}:has([data-start=true]):not(:has([data-end=true])):has(button:not(:disabled):hover) :is(._body_62d2a_38>button):hover{--bg-width: 50%}._menu_nbnxk_1{font-size:13px;padding:.3em 0;max-height:100%;display:grid;overflow-y:scroll;overflow-y:auto}._menu_nbnxk_1::-webkit-scrollbar{width:var(--scroll-width)}._menu_nbnxk_1::-webkit-scrollbar-track{background:var(--scroll-bg-color)}._menu_nbnxk_1::-webkit-scrollbar-thumb{background:var(--scroll-thumb-color);border-radius:var(--scroll-radius)}._menu_nbnxk_1>button{padding:.6em 1.2em;display:flex;align-items:flex-start;font-size:100%;border:none;background:none;cursor:pointer}._menu_nbnxk_1>button:where(:hover,:focus){background-color:#f5f5f5}._menu_nbnxk_1>button[aria-pressed=true]{background-color:#e7f0fe;color:#1a73e8}._dialog_sglud_1{border:none;padding:0;background:none;filter:drop-shadow(0 0 3px rgba(0,0,0,.1))}._app_sglud_8{--menu-width: 0px;--calender-width: 280px;--height: 400px;--template: "calendar" var(--height) "footer" auto / var(--calender-width);display:grid;grid-template:var(--template);background:#fff;border:1px solid #eee;border-radius:var(--radius)}._app_sglud_8[data-has-menu]{--menu-width: 200px;--calender-width: 260px;--template: "menu calendar" var(--height) "footer footer" auto / var(--menu-width) var(--calender-width)}._appMenu_sglud_27{grid-area:menu;border-right:1px solid #eee}._appCalendar_sglud_32{grid-area:calendar}._appFooter_sglud_36{grid-area:footer;border-top:1px solid #eee;padding:1em}._openButton_sglud_42{border:none;padding:0 10px;height:30px;display:flex;align-items:center;gap:.4em;border-radius:var(--radius);background:#fff;cursor:pointer;font-size:100%}._openButton_sglud_42:after{content:"";flex-shrink:0;display:block;background:currentColor;aspect-ratio:2 / 1.73;margin-top:.1em;width:auto;height:.6em;clip-path:polygon(0 0,100% 0,50% 100%)}._currentRange_sglud_68{font-size:90%;display:flex;flex-wrap:wrap;align-items:baseline;justify-content:center;gap:.3em 0}._currentRange_sglud_68>span{font-weight:700}._currentRange_sglud_68>span[data-active]{color:var(--color-main)}._currentRange_sglud_68>button{border:none;padding:0 .3em;border-radius:var(--radius);background:none;cursor:pointer;font-size:80%}._currentRange_sglud_68>button:disabled{display:none}._currentRange_sglud_68>button:where(:hover,:focus){background-color:#f5f5f5}._submit_sglud_98{margin-top:.6em;display:flex;flex-direction:row-reverse;align-items:center;justify-content:center;gap:1em}._applyButton_sglud_107{border:1px solid currentColor;padding:.2em 1em;width:8rem;border-radius:var(--radius);background:none;font-size:100%;font-weight:700}._applyButton_sglud_107:not(:disabled):where(:hover,:focus){background-color:var(--color-gray-light)}._cancelButton_sglud_122{border:1px solid currentColor;padding:.2em 1em;width:8rem;border-radius:var(--radius);background:none;font-size:100%}._cancelButton_sglud_122:where(:hover,:focus){background-color:var(--color-gray-light)}:root,:host{--color-main: #3d64cb;--color-main-light: #e7f0fe;--color-ink: #333;--color-ink-light: #888;--color-gray: #888;--color-gray-light: #f5f5f5;--radius: 4px;--scroll-width: 6px;--scroll-radius: 4px;--scroll-bg-color: var(--color-gray-light);--scroll-thumb-color: #aaa;--font-size-base: 14px;--line-height-base: 1.5;font-size:var(--font-size-base);line-height:var(--line-height-base);color:var(--color-ink);width:fit-content}:root *,:root *:before,:root *:after,:host *,:host *:before,:host *:after{box-sizing:border-box}:root button:not(:disabled),:host button:not(:disabled){cursor:pointer}:root :where(:focus-visible),:host :where(:focus-visible){outline:2px solid var(--focus-color, Highlight)}')})();
var nt, b, Ut, z, yt, zt, ct, B = {}, Nt = [], ee = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, dt = Array.isArray;
function A(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Pt(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ne(t, e, n) {
  var r, o, s, a = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? o = e[s] : a[s] = e[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? nt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      a[s] === void 0 && (a[s] = t.defaultProps[s]);
  return j(t, a, r, o, null);
}
function j(t, e, n, r, o) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Ut, __i: -1, __u: 0 };
  return o == null && b.vnode != null && b.vnode(s), s;
}
function rt(t) {
  return t.children;
}
function J(t, e) {
  this.props = t, this.context = e;
}
function P(t, e) {
  if (e == null)
    return t.__ ? P(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? P(t) : null;
}
function Rt(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rt(t);
  }
}
function vt(t) {
  (!t.__d && (t.__d = !0) && z.push(t) && !Q.__r++ || yt !== b.debounceRendering) && ((yt = b.debounceRendering) || zt)(Q);
}
function Q() {
  var t, e, n, r, o, s, a, c, i;
  for (z.sort(ct); t = z.shift(); )
    t.__d && (e = z.length, r = void 0, s = (o = (n = t).__v).__e, c = [], i = [], (a = n.__P) && ((r = A({}, o)).__v = o.__v + 1, b.vnode && b.vnode(r), ft(a, r, o, n.__n, a.ownerSVGElement !== void 0, 32 & o.__u ? [s] : null, c, s ?? P(o), !!(32 & o.__u), i), r.__v = o.__v, r.__.__k[r.__i] = r, Bt(c, r, i), r.__e != s && Rt(r)), z.length > e && z.sort(ct));
  Q.__r = 0;
}
function Lt(t, e, n, r, o, s, a, c, i, u, f) {
  var _, d, l, h, M, m = r && r.__k || Nt, g = e.length;
  for (n.__d = i, re(n, e, m), i = n.__d, _ = 0; _ < g; _++)
    (l = n.__k[_]) != null && typeof l != "boolean" && typeof l != "function" && (d = l.__i === -1 ? B : m[l.__i] || B, l.__i = _, ft(t, l, d, o, s, a, c, i, u, f), h = l.__e, l.ref && d.ref != l.ref && (d.ref && ht(d.ref, null, l), f.push(l.ref, l.__c || h, l)), M == null && h != null && (M = h), 65536 & l.__u || d.__k === l.__k ? (h || d.__e != i || (i = P(d)), i = It(l, i, t)) : typeof l.type == "function" && l.__d !== void 0 ? i = l.__d : h && (i = h.nextSibling), l.__d = void 0, l.__u &= -196609);
  n.__d = i, n.__e = M;
}
function re(t, e, n) {
  var r, o, s, a, c, i = e.length, u = n.length, f = u, _ = 0;
  for (t.__k = [], r = 0; r < i; r++)
    a = r + _, (o = t.__k[r] = (o = e[r]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? j(null, o, null, null, null) : dt(o) ? j(rt, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? j(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = t, o.__b = t.__b + 1, c = oe(o, n, a, f), o.__i = c, s = null, c !== -1 && (f--, (s = n[c]) && (s.__u |= 131072)), s == null || s.__v === null ? (c == -1 && _--, typeof o.type != "function" && (o.__u |= 65536)) : c !== a && (c === a + 1 ? _++ : c > a ? f > i - a ? _ += c - a : _-- : c < a ? c == a - 1 && (_ = c - a) : _ = 0, c !== r + _ && (o.__u |= 65536))) : (s = n[a]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == t.__d && (t.__d = P(s)), it(s, s, !1), n[a] = null, f--);
  if (f)
    for (r = 0; r < u; r++)
      (s = n[r]) != null && !(131072 & s.__u) && (s.__e == t.__d && (t.__d = P(s)), it(s, s));
}
function It(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++)
      r[o] && (r[o].__ = t, e = It(r[o], e, n));
    return e;
  }
  t.__e != e && (n.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function oe(t, e, n, r) {
  var o = t.key, s = t.type, a = n - 1, c = n + 1, i = e[n];
  if (i === null || i && o == i.key && s === i.type && !(131072 & i.__u))
    return n;
  if (r > (i != null && !(131072 & i.__u) ? 1 : 0))
    for (; a >= 0 || c < e.length; ) {
      if (a >= 0) {
        if ((i = e[a]) && !(131072 & i.__u) && o == i.key && s === i.type)
          return a;
        a--;
      }
      if (c < e.length) {
        if ((i = e[c]) && !(131072 & i.__u) && o == i.key && s === i.type)
          return c;
        c++;
      }
    }
  return -1;
}
function bt(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ee.test(e) ? n : n + "px";
}
function W(t, e, n, r, o) {
  var s;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || bt(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || bt(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r ? n.u = r.u : (n.u = Date.now(), t.addEventListener(e, s ? wt : Mt, s)) : t.removeEventListener(e, s ? wt : Mt, s);
    else {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Mt(t) {
  if (this.l) {
    var e = this.l[t.type + !1];
    if (t.t) {
      if (t.t <= e.u)
        return;
    } else
      t.t = Date.now();
    return e(b.event ? b.event(t) : t);
  }
}
function wt(t) {
  if (this.l)
    return this.l[t.type + !0](b.event ? b.event(t) : t);
}
function ft(t, e, n, r, o, s, a, c, i, u) {
  var f, _, d, l, h, M, m, g, D, S, O, v, p, w, Y, k = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & n.__u && (i = !!(32 & n.__u), s = [c = e.__e = n.__e]), (f = b.__b) && f(e);
  t:
    if (typeof k == "function")
      try {
        if (g = e.props, D = (f = k.contextType) && r[f.__c], S = f ? D ? D.props.value : f.__ : r, n.__c ? m = (_ = e.__c = n.__c).__ = _.__E : ("prototype" in k && k.prototype.render ? e.__c = _ = new k(g, S) : (e.__c = _ = new J(g, S), _.constructor = k, _.render = _e), D && D.sub(_), _.props = g, _.state || (_.state = {}), _.context = S, _.__n = r, d = _.__d = !0, _.__h = [], _._sb = []), _.__s == null && (_.__s = _.state), k.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = A({}, _.__s)), A(_.__s, k.getDerivedStateFromProps(g, _.__s))), l = _.props, h = _.state, _.__v = e, d)
          k.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (k.getDerivedStateFromProps == null && g !== l && _.componentWillReceiveProps != null && _.componentWillReceiveProps(g, S), !_.__e && (_.shouldComponentUpdate != null && _.shouldComponentUpdate(g, _.__s, S) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (_.props = g, _.state = _.__s, _.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(U) {
              U && (U.__ = e);
            }), O = 0; O < _._sb.length; O++)
              _.__h.push(_._sb[O]);
            _._sb = [], _.__h.length && a.push(_);
            break t;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(g, _.__s, S), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(l, h, M);
          });
        }
        if (_.context = S, _.props = g, _.__P = t, _.__e = !1, v = b.__r, p = 0, "prototype" in k && k.prototype.render) {
          for (_.state = _.__s, _.__d = !1, v && v(e), f = _.render(_.props, _.state, _.context), w = 0; w < _._sb.length; w++)
            _.__h.push(_._sb[w]);
          _._sb = [];
        } else
          do
            _.__d = !1, v && v(e), f = _.render(_.props, _.state, _.context), _.state = _.__s;
          while (_.__d && ++p < 25);
        _.state = _.__s, _.getChildContext != null && (r = A(A({}, r), _.getChildContext())), d || _.getSnapshotBeforeUpdate == null || (M = _.getSnapshotBeforeUpdate(l, h)), Lt(t, dt(Y = f != null && f.type === rt && f.key == null ? f.props.children : f) ? Y : [Y], e, n, r, o, s, a, c, i, u), _.base = e.__e, e.__u &= -161, _.__h.length && a.push(_), m && (_.__E = _.__ = null);
      } catch (U) {
        e.__v = null, i || s != null ? (e.__e = c, e.__u |= i ? 160 : 32, s[s.indexOf(c)] = null) : (e.__e = n.__e, e.__k = n.__k), b.__e(U, e, n);
      }
    else
      s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = se(n.__e, e, n, r, o, s, a, i, u);
  (f = b.diffed) && f(e);
}
function Bt(t, e, n) {
  e.__d = void 0;
  for (var r = 0; r < n.length; r++)
    ht(n[r], n[++r], n[++r]);
  b.__c && b.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(s) {
        s.call(o);
      });
    } catch (s) {
      b.__e(s, o.__v);
    }
  });
}
function se(t, e, n, r, o, s, a, c, i) {
  var u, f, _, d, l, h, M, m = n.props, g = e.props, D = e.type;
  if (D === "svg" && (o = !0), s != null) {
    for (u = 0; u < s.length; u++)
      if ((l = s[u]) && "setAttribute" in l == !!D && (D ? l.localName === D : l.nodeType === 3)) {
        t = l, s[u] = null;
        break;
      }
  }
  if (t == null) {
    if (D === null)
      return document.createTextNode(g);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", D) : document.createElement(D, g.is && g), s = null, c = !1;
  }
  if (D === null)
    m === g || c && t.data === g || (t.data = g);
  else {
    if (s = s && nt.call(t.childNodes), m = n.props || B, !c && s != null)
      for (m = {}, u = 0; u < t.attributes.length; u++)
        m[(l = t.attributes[u]).name] = l.value;
    for (u in m)
      l = m[u], u == "children" || (u == "dangerouslySetInnerHTML" ? _ = l : u === "key" || u in g || W(t, u, null, l, o));
    for (u in g)
      l = g[u], u == "children" ? d = l : u == "dangerouslySetInnerHTML" ? f = l : u == "value" ? h = l : u == "checked" ? M = l : u === "key" || c && typeof l != "function" || m[u] === l || W(t, u, l, m[u], o);
    if (f)
      c || _ && (f.__html === _.__html || f.__html === t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (_ && (t.innerHTML = ""), Lt(t, dt(d) ? d : [d], e, n, r, o && D !== "foreignObject", s, a, s ? s[0] : n.__k && P(n, 0), c, i), s != null)
      for (u = s.length; u--; )
        s[u] != null && Pt(s[u]);
    c || (u = "value", h !== void 0 && (h !== t[u] || D === "progress" && !h || D === "option" && h !== m[u]) && W(t, u, h, m[u], !1), u = "checked", M !== void 0 && M !== t[u] && W(t, u, M, m[u], !1));
  }
  return t;
}
function ht(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    b.__e(r, n);
  }
}
function it(t, e, n) {
  var r, o;
  if (b.unmount && b.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || ht(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        b.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (o = 0; o < r.length; o++)
      r[o] && it(r[o], e, n || typeof t.type != "function");
  n || t.__e == null || Pt(t.__e), t.__ = t.__e = t.__d = void 0;
}
function _e(t, e, n) {
  return this.constructor(t, n);
}
function ae(t, e, n) {
  var r, o, s, a;
  b.__ && b.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], a = [], ft(e, t = (!r && n || e).__k = ne(rt, null, [t]), o || B, B, e.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : e.firstChild ? nt.call(e.childNodes) : null, s, !r && n ? n : o ? o.__e : e.firstChild, r, a), Bt(s, t, a);
}
nt = Nt.slice, b = { __e: function(t, e, n, r) {
  for (var o, s, a; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(t)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ut = 0, J.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = A({}, this.state), typeof t == "function" && (t = t(A({}, n), this.props)), t && A(n, t), t != null && this.__v && (e && this._sb.push(e), vt(this));
}, J.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), vt(this));
}, J.prototype.render = rt, z = [], zt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ct = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Q.__r = 0;
var Z, T, ot, Dt, tt = 0, Zt = [], X = [], C = b, kt = C.__b, Tt = C.__r, Ct = C.diffed, St = C.__c, Yt = C.unmount, xt = C.__;
function pt(t, e) {
  C.__h && C.__h(T, t, tt || e), tt = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: X }), n.__[t];
}
function Ot(t) {
  return tt = 1, ce(qt, t);
}
function ce(t, e, n) {
  var r = pt(Z++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : qt(void 0, e), function(c) {
    var i = r.__N ? r.__N[0] : r.__[0], u = r.t(i, c);
    i !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
    var o = function(c, i, u) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (f.every(function(d) {
        return !d.__N;
      }))
        return !s || s.call(this, c, i, u);
      var _ = !1;
      return f.forEach(function(d) {
        if (d.__N) {
          var l = d.__[0];
          d.__ = d.__N, d.__N = void 0, l !== d.__[0] && (_ = !0);
        }
      }), !(!_ && r.__c.props === c) && (!s || s.call(this, c, i, u));
    };
    T.u = !0;
    var s = T.shouldComponentUpdate, a = T.componentWillUpdate;
    T.componentWillUpdate = function(c, i, u) {
      if (this.__e) {
        var f = s;
        s = void 0, o(c, i, u), s = f;
      }
      a && a.call(this, c, i, u);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function ie(t, e) {
  var n = pt(Z++, 3);
  !C.__s && Wt(n.__H, e) && (n.__ = t, n.i = e, T.__H.__h.push(n));
}
function I(t) {
  return tt = 5, ue(function() {
    return { current: t };
  }, []);
}
function ue(t, e) {
  var n = pt(Z++, 7);
  return Wt(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function le() {
  for (var t; t = Zt.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(G), t.__H.__h.forEach(ut), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], C.__e(e, t.__v);
      }
}
C.__b = function(t) {
  T = null, kt && kt(t);
}, C.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), xt && xt(t, e);
}, C.__r = function(t) {
  Tt && Tt(t), Z = 0;
  var e = (T = t.__c).__H;
  e && (ot === T ? (e.__h = [], T.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = X, n.__N = n.i = void 0;
  })) : (e.__h.forEach(G), e.__h.forEach(ut), e.__h = [], Z = 0)), ot = T;
}, C.diffed = function(t) {
  Ct && Ct(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Zt.push(e) !== 1 && Dt === C.requestAnimationFrame || ((Dt = C.requestAnimationFrame) || de)(le)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== X && (n.__ = n.__V), n.i = void 0, n.__V = X;
  })), ot = T = null;
}, C.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(G), n.__h = n.__h.filter(function(r) {
        return !r.__ || ut(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], C.__e(r, n.__v);
    }
  }), St && St(t, e);
}, C.unmount = function(t) {
  Yt && Yt(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      G(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && C.__e(e, n.__v));
};
var Ht = typeof requestAnimationFrame == "function";
function de(t) {
  var e, n = function() {
    clearTimeout(r), Ht && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  Ht && (e = requestAnimationFrame(n));
}
function G(t) {
  var e = T, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), T = e;
}
function ut(t) {
  var e = T;
  t.__c = t.__(), T = e;
}
function Wt(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function qt(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const fe = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], he = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], pe = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], me = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], ge = {
  // "%a": the locale's abbreviated weekday name
  "%a": (t) => fe[t.getDay()],
  // "%A": the locale's full weekday name
  "%A": (t) => he[t.getDay()],
  // "%b": the locale's abbreviated month name
  "%b": (t) => pe[t.getMonth()],
  // "%B": the locale's full month name
  "%B": (t) => me[t.getMonth()],
  // "%p": the locale's equivalent of either `AM` or `PM`
  "%p": (t) => t.getHours() < 12 ? "AM" : "PM",
  // "%r": the locale's representation of 12-hour clock time using AM/PM notation
  // 3:04:05 AM
  "%r": "%-I:%M:%S %p",
  // "%x": the locale's appropriate date representation
  // 1/2/22
  "%x": "%-m/%-d/%y",
  // "%X": the locale's appropriate time representation
  // 3:04:05 AM
  "%X": "%-I:%M:%S %p"
}, R = {
  year: "y",
  month: "M",
  week: "w",
  date: "D",
  day: "d",
  hour: "h",
  minute: "m",
  second: "s",
  millisecond: "ms"
};
Object.keys(R).forEach((t) => {
  const e = t + "s", n = R[t];
  n && (R[e] = R[n] = n);
});
const N = (t) => R[t || "ms"] || R[String(t).toLowerCase()], Vt = {
  h: 36e5,
  m: 6e4,
  s: 1e3,
  ms: 1
}, x = {
  y: (t) => t.getFullYear(),
  M: (t) => t.getMonth(),
  D: (t) => t.getDate(),
  d: (t) => t.getDay(),
  h: (t) => t.getHours(),
  m: (t) => t.getMinutes(),
  s: (t) => t.getSeconds(),
  ms: (t) => t.getMilliseconds(),
  TZO: (t) => t.getTimezoneOffset(),
  T: (t) => t.getTime()
}, ye = () => {
  const t = (p) => (w) => ("0" + p(w)).substr(-2), e = (p) => (w) => (" " + p(w)).substr(-2), n = (p) => (w) => ("00" + p(w)).substr(-3), r = (p) => (w) => {
    let Y = p(w);
    if (0 <= Y && Y <= 9999)
      return ("000" + Y).substr(-4);
    let k = "+";
    return Y < 0 && (k = "-", Y = -Y), k + ("00000" + Y).substr(-6);
  }, o = x.y, s = x.M, a = x.D, c = x.d, i = x.h, u = x.m, f = x.s, _ = x.ms, d = x.T, l = x.TZO, h = (p) => Math.floor(o(p) / 100), M = (p) => (i(p) + 11) % 12 + 1, m = (p) => s(p) + 1, g = (p) => o(p) % 100, D = (p) => p < 10 ? "0" + p : p, S = (p, w) => (Y) => {
    let k = -l(Y);
    const U = k < 0;
    U && (k = -k);
    const Kt = Math.floor(k / 60), Qt = Math.floor(k % 60), te = w ? p + D(Math.floor(k % 1 * 60)) : "";
    return (U ? "-" : "+") + D(Kt) + p + D(Qt) + te;
  }, O = {
    // "%c": the locale's appropriate date and time representation
    "%c": "%a %b %e %T %Y",
    // "%C": the century as a decimal number
    "%-C": h,
    "%C": t(h),
    // "%d": the day of the month as a decimal number
    "%-d": a,
    "%d": t(a),
    // "%D": the date in the format `%m/%d/%y`
    "%D": "%m/%d/%y",
    // "%e": the day of month as a decimal number
    "%e": e(a),
    // "%F": the date in the format `%Y-%m-%d`
    "%F": "%Y-%m-%d",
    // "%H": the hour (24-hour clock) as a decimal number
    "%-H": i,
    "%H": t(i),
    // "%I": the hour (12-hour clock) as a decimal number
    "%-I": M,
    "%I": t(M),
    // "%k": the hour (24-hour clock) as a decimal number
    "%k": e(i),
    // "%l": the hour (12-hour clock) as a decimal number
    "%l": e(M),
    // "%L": the millisecond as a decimal number
    "%-L": n(_),
    "%L": n(_),
    // "%m": the month as a decimal number
    "%-m": m,
    "%m": t(m),
    // "%M": the minute as a decimal number
    "%-M": u,
    "%M": t(u),
    "%P": (p) => i(p) < 12 ? "am" : "pm",
    // "%R": the time in the format `%H:%M`
    "%R": "%H:%M",
    // "%s": the number of seconds since the Epoch, UTC
    "%s": (p) => Math.floor(d(p) / 1e3),
    // "%S": the second as a decimal number
    "%-S": f,
    "%S": t(f),
    // "%T": the time in the format `%H:%M:%S`
    "%T": "%H:%M:%S",
    // "%y": the year without century as a decimal number
    "%-y": g,
    "%y": t(g),
    // "%Y": the year with century as a decimal number
    "%-Y": o,
    "%Y": r(o),
    // "%u": the weekday (Monday as the first day of the week) as a decimal number
    "%u": (p) => (c(p) + 6) % 7 + 1,
    // "%v": the date in the format `%e-%b-%Y`
    "%v": "%e-%b-%Y",
    // "%w": the weekday (Sunday as the first day of the week) as a decimal number
    "%w": c,
    // "%z": the offset from UTC in the format `+HHMM` or `-HHMM`
    "%::z": S(":", !0),
    "%:z": S(":"),
    "%z": S(""),
    // "%%": a literal `%` character
    "%%": () => "%",
    // "%n": a newline character
    "%n": () => `
`,
    // "%t": a tab character
    "%t": () => "	"
    // ==== NOT IMPLEMENTED HANDLERS BELOW ====
    // "%G": the ISO 8601 year with century as a decimal number
    // "%g": the ISO 8601 year without century as a decimal number
    // "%j": the day of the year as a decimal number
    // "%U": the week number of the year (Sunday as the first day of the week)
    // "%V": the week number of the year (Monday as the first day of the week)
    // "%W": the week number of the year (Monday as the first day of the week)
    // "%Z": the time zone name
  }, v = (p, w) => {
    w.split("").forEach((Y) => O[p + Y] = O["%" + Y]);
  };
  return v("%E", "cCxXyY"), v("%O", "deHImMSuUVwWy"), O;
}, ve = x.d, be = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], st = ["th", "st", "nd", "rd"], Me = (t) => t + (st[t] || t > 20 && st[t % 10] || st[0]), we = x.T, De = {
  YY: "%y",
  YYYY: "%Y",
  M: "%-m",
  MM: "%m",
  MMM: "%b",
  MMMM: "%B",
  D: "%-d",
  Do: (t) => Me(t.getDate()),
  DD: "%d",
  d: "%w",
  dd: (t) => be[ve(t)],
  ddd: "%a",
  dddd: "%A",
  H: "%-H",
  HH: "%H",
  h: "%-I",
  hh: "%I",
  m: "%-M",
  mm: "%M",
  s: "%-S",
  ss: "%S",
  SSS: "%L",
  Z: "%:z",
  ZZ: "%z",
  A: "%p",
  a: "%P",
  X: "%s",
  x: we
  // Unix Millisecond Timestamp
}, mt = (t) => {
  let e = {};
  return (n) => e[n] || (e[n] = t(n));
}, ke = (t) => {
  const e = (o, s, a) => {
    let c;
    const i = (f) => {
      const _ = f.getTimezoneOffset(), d = new Date(
        +f - _ * 6e4
        /* d.MINUTE */
      );
      if (c || (c = new Intl.DateTimeFormat(t, o)), a) {
        const h = c.formatToParts(d).find((M) => M.type === a);
        return h && h.value;
      }
      const l = c.format(d);
      if (l)
        return l.replace(/\s+UTC$/, "");
    };
    if (!s)
      return i;
    const u = {};
    return (f) => {
      const _ = s(f);
      return u[_] || (u[_] = i(f));
    };
  }, n = (o) => o.getDay(), r = (o) => o.getMonth();
  return {
    "%a": e(H.a, n),
    "%A": e(H.A, n),
    "%b": e(H.b, r),
    "%B": e(H.B, r),
    "%c": e(H.c),
    "%p": e(H.p, (o) => o.getHours(), "dayPeriod"),
    "%r": e(H.r),
    "%x": e(H.x),
    "%X": e(H.X)
  };
}, Te = () => {
  const t = "2-digit", e = "medium", n = "numeric", r = "short", o = "long", s = {
    a: { weekday: r },
    A: { weekday: o },
    b: { month: r },
    B: { month: o },
    c: { weekday: r, year: n, month: r, day: n, hour: t, minute: t, second: t },
    p: { hour: n, hour12: !0 },
    r: { timeStyle: e, hour12: !0 },
    x: { dateStyle: r },
    X: { timeStyle: e }
    // hour12: default
  };
  return Object.keys(s).forEach((a) => s[a].timeZone = "UTC"), s;
}, H = Te(), Ce = mt(ke), Se = (t, e) => t && e ? (n) => t(n) || e(n) : t || e, Ye = (t) => t && ((e) => t[e]), xe = /%(?:[EO]\w|[0_#^-]?[1-9]?\w|::?z|[%+])/g, Oe = () => {
  let t = ["\\[(.*?)\\]", "[A-Za-z]o"];
  const e = (n) => String.fromCharCode(n + 65) + "+";
  for (let n = 0; n < 26; n++)
    t.push(e(n), e(n + 32));
  return new RegExp(t.join("|"), "g");
}, He = Oe(), $e = {
  // default specifiers for .text() .strftime() with milliseconds
  ISO: "%Y-%m-%dT%H:%M:%S.%L%:z",
  // default specifiers for .format() without milliseconds
  undef: "YYYY-MM-DDTHH:mm:ssZ",
  // Invalid Date
  NaN: /* @__PURE__ */ new Date(NaN) + ""
}, jt = (t) => {
  const e = (o, s) => {
    let a = t(o);
    if (typeof a == "string") {
      const c = t(a);
      c != null && (a = c);
    }
    return typeof a == "function" ? a(s) : a == null ? o : r(a, s);
  }, n = {}, r = (o, s) => o.replace(xe, (a) => e(a, s));
  return n.strftime = (o, s) => isNaN(+s) ? e("NaN", s) : o == null ? e("ISO", s) : r(o, s), n.format = (o, s) => isNaN(+s) ? e("NaN", s) : (o == null && (o = String(t("undef"))), o.replace(He, (a, c) => c || e(a, s))), n.handler = (o) => jt(Se(Ye(o), t)), n;
}, Jt = jt().handler($e).handler(ge).handler(De).handler(ye());
Jt.strftime;
const _t = (t) => t && t.tx || Jt, Ee = (t) => class extends t {
  /**
   * updates strftime option with the given locale
   */
  handler(n) {
    const r = this.inherit(), { x: o } = r;
    return o.tx = _t(o).handler(n), r;
  }
  /**
   * returns a text with "YYYY-MM-DD" formatting style
   */
  format(n) {
    return _t(this.x).format(n, this.ro());
  }
  /**
   * returns a text with "%y/%m/%d formatting style
   */
  text(n) {
    return _t(this.x).strftime(n, this.ro());
  }
  locale(n) {
    return this.handler(Ce(n));
  }
}, $t = (t, e) => {
  const n = t.getFullYear(), r = t.getMonth(), o = t.getDate(), s = new Date(n, r, 1), a = +s, c = n * 12 + r + e;
  s.setFullYear(Math.floor(c / 12));
  const i = c % 12;
  s.setMonth(i);
  const u = Math.round(
    (+s - a) / 864e5
    /* d.DAY */
  );
  et(t, u);
  const f = t.getDate();
  i !== t.getMonth() && o > f && et(t, -f);
}, et = (t, e) => {
  const n = t.getTimezoneOffset();
  t.setTime(
    +t + e * 864e5
    /* d.DAY */
  );
  const r = t.getTimezoneOffset();
  n !== r && t.setTime(
    +t + (r - n) * 6e4
    /* d.MINUTE */
  );
}, E = (t, e, n) => {
  if (!e)
    return;
  const r = N(n), o = Vt[r];
  if (o) {
    t.setTime(+t + e * o);
    return;
  }
  switch (r) {
    case "y":
      return $t(t, e * 12);
    case "M":
      return $t(t, e);
    case "w":
      return et(t, e * 7);
    case "D":
    case "d":
      return et(t, e);
  }
}, Et = (t) => {
  lt(t), E(t, 1 - t.getDate(), "day");
}, lt = (t) => {
  const e = t.getTimezoneOffset();
  Xt(
    t,
    864e5
    /* d.DAY */
  );
  const n = t.getTimezoneOffset();
  e !== n && t.setTime(
    +t + (n - e) * 6e4
    /* d.MINUTE */
  );
}, Xt = (t, e) => {
  const n = t.getTimezoneOffset() * 6e4;
  t.setTime(Math.floor((+t - n) / e) * e + n);
}, Ft = (t, e) => {
  const n = N(e), r = Vt[n];
  if (r)
    return Xt(t, r);
  switch (n) {
    case "y":
      return Et(t), E(
        t,
        -t.getMonth(),
        "M"
        /* Unit.month */
      );
    case "M":
      return Et(t);
    case "w":
      return lt(t), E(
        t,
        -t.getDay(),
        "d"
        /* Unit.day */
      );
    case "D":
    case "d":
      return lt(t);
  }
}, Fe = (t) => class extends t {
  /**
   * getter
   */
  get(n) {
    const r = x[N(n)];
    if (r)
      return r(this.ro());
  }
  /**
   * setter
   */
  set(n, r) {
    n = N(n);
    const o = x[n];
    if (!o)
      return this;
    const s = this.rw();
    return E(s, r - o(s), n), this.create(s);
  }
  /**
   * returns a new CDate object manipulated
   */
  startOf(n) {
    if (n = N(n), !n)
      return this;
    const r = this.rw();
    return Ft(r, n), this.create(r);
  }
  /**
   * returns a new CDate object manipulated
   */
  endOf(n) {
    if (n = N(n), !n)
      return this;
    const r = this.rw();
    return Ft(r, n), E(r, 1, n), E(r, -1), this.create(r);
  }
  /**
   * returns a new CDate object manipulated
   */
  add(n, r) {
    if (r = N(r), !r)
      return this;
    const o = this.rw();
    return E(o, n, r), this.create(o);
  }
  /**
   * returns a new CDate object manipulated
   */
  next(n) {
    return this.add(1, n);
  }
  /**
   * returns a new CDate object manipulated
   */
  prev(n) {
    return this.add(-1, n);
  }
}, Ae = (t) => String(t).toLowerCase().substr(0, 2), Ue = { su: 0, mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6 }, ze = (t, e) => {
  const n = t.formatToParts(e), r = {};
  n.forEach((u) => r[u.type] = u.value);
  const o = Ue[Ae(r.weekday)];
  let s = (7 + e.getUTCDay() - o) % 7;
  s > 3 && (s -= 7);
  const a = e.getUTCHours() - r.hour % 24, c = e.getUTCMinutes() - r.minute, i = e.getUTCSeconds() - r.second;
  return -((s * 24 + a) * 60 + c + i / 60);
}, Ne = mt((t) => {
  let e = {}, n = 0, r;
  return (o) => {
    const s = Math.floor(
      o / 9e5
      /* d.MINUTE15 */
    );
    let a = e && e[s];
    if (a != null)
      return a;
    n++ > 96 && (e = {}, n = 0);
    const c = new Date(o);
    if (!r) {
      const i = "numeric";
      r = new Intl.DateTimeFormat("en-US", { timeZone: t, hour12: !1, weekday: "short", hour: i, minute: i, second: i });
    }
    return a = ze(r, c), a == null && (a = -c.getTimezoneOffset()), e[s] = a, a;
  };
});
class gt {
  constructor(e) {
    this.dt = new Date(e);
  }
  valueOf() {
    return +this.dt;
  }
  setTime(e) {
    return this.dt.setTime(e);
  }
  getTimezoneOffset() {
    return 0;
  }
  getMilliseconds() {
    return this.dt.getUTCMilliseconds();
  }
  getSeconds() {
    return this.dt.getUTCSeconds();
  }
  getMinutes() {
    return this.dt.getUTCMinutes();
  }
  getHours() {
    return this.dt.getUTCHours();
  }
  getDay() {
    return this.dt.getUTCDay();
  }
  getDate() {
    return this.dt.getUTCDate();
  }
  getMonth() {
    return this.dt.getUTCMonth();
  }
  getFullYear() {
    return this.dt.getUTCFullYear();
  }
  getTime() {
    return +this;
  }
}
class At extends gt {
  constructor(e, n) {
    const r = n(e);
    super(
      e + r * 6e4
      /* d.MINUTE */
    ), this.t = e, this.tzf = n, this.tzo = r;
  }
  valueOf() {
    return this.t;
  }
  setTime(e) {
    const n = this.tzo = this.tzf(e);
    return this.dt.setTime(
      +e + n * 6e4
      /* d.MINUTE */
    ), this.t = e;
  }
  getTimezoneOffset() {
    return -this.tzo;
  }
}
const Pe = (t) => class extends t {
  utc(n) {
    const r = this.inherit();
    return r.x.rw = (o) => new gt(+o), n ? at(this, r) : r;
  }
  /**
   * "+0900", "+09:00", "GMT+09:00", "Z", "UTC",...
   */
  utcOffset(n, r) {
    if (n == null)
      return 0 - K(this.ro());
    const o = this.inherit();
    return o.x.rw = (s) => new At(+s, Re(n)), r ? at(this, o) : o;
  }
  /**
   * "Asia/Tokyo", "America/New_York",...
   */
  tz(n, r) {
    const o = this.inherit();
    return o.x.rw = (s) => new At(+s, Ne(n)), r ? at(this, o, !0) : o;
  }
}, at = (t, e, n) => {
  const r = t.ro(), o = e.rw();
  return Gt(r, o, n), e.create(o);
}, Gt = (t, e, n) => {
  const r = K(t), o = K(e);
  if (r === o || (E(
    e,
    o - r,
    "m"
    /* Unit.minute */
  ), !n))
    return;
  const s = K(e);
  o !== s && E(
    e,
    s - o,
    "m"
    /* Unit.minute */
  );
}, K = x.TZO, Re = mt((t) => {
  if (typeof t == "number")
    -16 < t && t < 16 && (t *= 60);
  else {
    const e = String(t).match(/(?:^|GMT)?(?:([+-])([01]?\d):?(\d[05])|$)|(UTC|Z)$/);
    if (!e)
      return;
    t = +e[2] * 60 + +e[3] | 0, e[1] === "-" && (t = 0 - t);
  }
  return (e) => t;
});
class Le {
  /**
   * the constructor
   */
  constructor(e, n) {
    this.t = e, typeof e != "number" && (this.d = e), this.x = n || /* @__PURE__ */ Object.create({ cdate: {} });
  }
  /**
   * cdate function factory
   */
  cdateFn() {
    return Ie(this);
  }
  /**
   * returns a read-write version of DateLike for manipulation
   */
  rw() {
    const e = +this.t, n = this.x.rw;
    return n ? n(e) : new Date(e);
  }
  /**
   * returns a read-only version of DateLike for displaying
   */
  ro() {
    return this.d || (this.d = this.rw());
  }
  /**
   * returns milliseconds since the epoch
   */
  valueOf() {
    return +this.ro();
  }
  /**
   * returns a bare Date object
   */
  toDate() {
    return /* @__PURE__ */ new Date(+this);
  }
  /**
   * returns a JSON representation of Date
   */
  toJSON() {
    return this.toDate().toJSON();
  }
  /**
   * returns an instance including the plugin
   */
  plugin(e) {
    const n = this.constructor, r = e(n) || n;
    return new r(this.t, this.x);
  }
  /**
   * creates another CDate object with the DateLike given
   */
  create(e) {
    return new this.constructor(e, this.x);
  }
  /**
   * clones the CDate object
   */
  inherit() {
    const e = this.create(+this);
    return e.x = Object.create(e.x), e;
  }
}
const Ie = (t) => (e) => (e == null ? e = /* @__PURE__ */ new Date() : typeof e == "string" && (e = +Be(e, t.x.rw)), t.create(+e)), Be = (t, e) => {
  const n = (
    // ISO 8601
    t.match(/^(\d{4}|[-+]\d{4,6})(?:(-)(\d{2})(?:-(\d{2})(?:T((\d{2}):(\d{2})(?::(\d{2})(\.\d+)?)?))?)?)?$/) || // Loose format
    t.match(/^(\d{4}|[-+]\d{4,6})(?:([-/])(\d+)(?:\2(\d+)(?:\s+((\d+):(\d+)(?::(\d+)(\.\d+)?)?))?)?)?$/)
  );
  if (!n)
    return new Date(t);
  const r = +n[1] || 0, o = +n[3] - 1 || 0, s = +n[4] || 1, a = +n[6] || 0, c = +n[7] || 0, i = +n[8] || 0, u = +n[9] * 1e3 || 0, f = 0 <= r && r < 100 ? 100 : 0;
  if (e) {
    const _ = new Date(Date.UTC(r + f, o, s, a, c, i, u));
    f && _.setUTCFullYear(r);
    const d = new gt(+_), l = e(+_);
    return Gt(d, l, !0), l;
  } else {
    const _ = new Date(r + f, o, s, a, c, i, u);
    return f && _.setFullYear(r), _;
  }
}, F = new Le(0, null).plugin(Ee).plugin(Fe).plugin(Pe).cdateFn();
function q(t) {
  return F(typeof t == "object" && "toDate" in t ? t.toDate() : t);
}
const Ze = [{
  label: "今日",
  range: (t) => [t, t]
}, {
  label: "昨日",
  range: (t) => [t.add(-1, "day"), t.add(-1, "day")]
}, {
  label: "今週",
  range: (t) => [t.startOf("week"), t]
}, {
  label: "今週（日曜〜本日）",
  range: (t) => [t.startOf("week"), t]
}, {
  label: "今週（月曜〜本日）",
  range: (t) => [t.startOf("week").add(1, "day"), t]
}, {
  label: "今週（土曜〜本日）",
  range: (t) => [t.startOf("week").add(-1, "day"), t]
}, {
  label: "先週",
  range: (t) => [t.add(-1, "week").startOf("week"), t.add(-1, "week").endOf("week")]
}, {
  label: "今月",
  range: (t) => [t.startOf("month"), t]
}, {
  label: "先月",
  range: (t) => [t.add(-1, "month").startOf("month"), t.add(-1, "month").endOf("month")]
}, {
  label: "半年",
  range: (t) => [t.add(-6, "month").startOf("month"), t]
}, {
  label: "今年",
  range: (t) => [t.startOf("year"), t]
}, {
  label: "昨年",
  range: (t) => [t.add(-1, "year").startOf("year"), t.add(-1, "year").endOf("year")]
}, {
  label: "過去7日間",
  range: (t) => [t.add(-7, "day"), t.add(-1, "day")]
}, {
  label: "過去28日間",
  range: (t) => [t.add(-28, "day"), t.add(-1, "day")]
}, {
  label: "過去30日間",
  range: (t) => [t.add(-30, "day"), t.add(-1, "day")]
}, {
  label: "過去90日間",
  range: (t) => [t.add(-90, "day"), t.add(-1, "day")]
}, {
  label: "過去12ヶ月",
  range: (t) => [t.add(-12, "month"), t.add(-1, "day")]
}];
function We(t, e) {
  const n = q(e.today), [r, o] = (typeof t == "function" ? t(n) : [...t]).map(q), s = e.min ? q(e.min) : r, a = e.max ? q(e.max) : o;
  if (!(r > a || o < s))
    return [(r < s ? s : r).format("YYYY-MM-DD"), (o > a ? a : o).format("YYYY-MM-DD")];
}
function qe(t, e) {
  var s;
  const n = typeof t == "string" ? t : t.label, r = typeof t == "string" ? (s = Ze.find((a) => a.label === t)) == null ? void 0 : s.range : t.range, o = r ? We(r, e) : void 0;
  return {
    label: n,
    range: o
  };
}
const Ve = "_calenders_62d2a_1", je = "_header_62d2a_9", Je = "_scroll_62d2a_24", Xe = "_body_62d2a_38", V = {
  calenders: Ve,
  header: je,
  scroll: Je,
  body: Xe
};
var Ge = 0;
function y(t, e, n, r, o, s) {
  var a, c, i = {};
  for (c in e)
    c == "ref" ? a = e[c] : i[c] = e[c];
  var u = { type: t, props: i, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ge, __i: -1, __u: 0, __source: o, __self: s };
  if (typeof t == "function" && (a = t.defaultProps))
    for (c in a)
      i[c] === void 0 && (i[c] = a[c]);
  return b.vnode && b.vnode(u), u;
}
function Ke({
  today: t,
  min: e = t,
  max: n = t,
  range: r,
  onSelect: o = () => {
  },
  scrollToActiveRef: s
}) {
  const a = [], c = F(e).startOf("month"), i = F(n).endOf("month");
  for (let d = c; d < i; d = d.add(1, "day")) {
    d.get("date") === 1 && a.push(y("div", {
      children: d.format("YYYY年M月")
    }, d.format("YYYY-MM")));
    const l = d.format("YYYY-MM-DD"), h = l === r[0], M = l === r[1], m = h || M;
    a.push(y("button", {
      type: "button",
      "data-date": l,
      "data-weekday": d.get("day"),
      "data-today": l === t,
      "aria-label": d.format("YYYY年M月D日"),
      disabled: l < e || l > n,
      "aria-pressed": m,
      "data-start": h,
      "data-end": M,
      tabindex: m ? 0 : -1,
      children: y("span", {
        children: d.get("date")
      })
    }, l));
  }
  const u = (d) => {
    const h = d.target.dataset.date;
    if (h)
      switch (r.length) {
        case 0:
          o([h]);
          break;
        case 1:
          h < r[0] ? o([h]) : o([r[0], h]);
          break;
        default:
          o([h]);
      }
  }, f = I(null), _ = (d) => {
    var h;
    const l = (h = f.current) == null ? void 0 : h.querySelector(r[0] ? `button[data-date="${r[0]}"]` : 'button[data-today="true"]');
    l == null || l.scrollIntoView({
      block: "center",
      behavior: d
    });
  };
  return s.current = _, y("div", {
    class: V.calenders,
    children: [y("div", {
      class: V.header,
      children: [y("div", {
        children: "日"
      }), y("div", {
        children: "月"
      }), y("div", {
        children: "火"
      }), y("div", {
        children: "水"
      }), y("div", {
        children: "木"
      }), y("div", {
        children: "金"
      }), y("div", {
        children: "土"
      })]
    }), y("div", {
      class: V.scroll,
      ref: f,
      children: y("div", {
        class: V.body,
        onClick: u,
        onKeyDown: (d) => {
          const l = d.currentTarget.querySelector(":focus[data-date]");
          if (!l)
            return;
          const h = {
            ArrowRight: 1,
            // 次の日
            ArrowLeft: -1,
            // 前の日
            ArrowDown: 7,
            // 1週間後の日
            ArrowUp: -7
            // 1週間前の日
          }[d.key];
          if (h === void 0)
            return;
          const M = F(l.dataset.date).add(h, "day").format("YYYY-MM-DD"), m = d.currentTarget.querySelector(`button[data-date="${M}"]:not([disabled])`);
          m && (d.preventDefault(), m.focus());
        },
        children: a
      })
    })]
  });
}
const Qe = "_menu_nbnxk_1", tn = {
  menu: Qe
};
function en({
  menuItems: t,
  pressedMenu: e,
  onSelect: n = () => {
  },
  scrollToActiveRef: r
}) {
  const o = I(null), s = (a) => {
    var i;
    const c = (i = o.current) == null ? void 0 : i.querySelector(`button[aria-label="${e}"]`);
    c == null || c.scrollIntoView({
      block: "center",
      behavior: a
    });
  };
  return r.current = s, y("div", {
    class: tn.menu,
    ref: o,
    onKeyDown: (a) => {
      const c = a.currentTarget.querySelector("button:focus");
      if (!c)
        return;
      const i = {
        ArrowUp: c.previousElementSibling,
        ArrowDown: c.nextElementSibling
      }[a.key];
      i instanceof HTMLButtonElement && (a.preventDefault(), i.focus());
    },
    children: [y("button", {
      type: "button",
      "aria-label": "カスタム",
      "aria-pressed": e === "カスタム",
      tabIndex: e === "カスタム" ? 0 : -1,
      onClick: () => n("カスタム"),
      children: "カスタム"
    }), t.map(({
      label: a,
      range: c
    }) => y("button", {
      type: "button",
      tabIndex: -1,
      "aria-label": a,
      "aria-pressed": e === a,
      tabindex: e === a ? 0 : -1,
      disabled: c === void 0,
      onClick: () => {
        n(a, c);
      },
      children: a
    }))]
  });
}
const nn = "_dialog_sglud_1", rn = "_app_sglud_8", on = "_appMenu_sglud_27", sn = "_appCalendar_sglud_32", _n = "_appFooter_sglud_36", an = "_openButton_sglud_42", cn = "_currentRange_sglud_68", un = "_submit_sglud_98", ln = "_applyButton_sglud_107", dn = "_cancelButton_sglud_122", $ = {
  dialog: nn,
  app: rn,
  appMenu: on,
  appCalendar: sn,
  appFooter: _n,
  openButton: an,
  currentRange: cn,
  submit: un,
  applyButton: ln,
  cancelButton: dn
};
function fn({
  today: t = F().format("YYYY-MM-DD"),
  min: e,
  max: n,
  defaultRange: r,
  menu: o,
  defaultSelectedMenu: s = "",
  onSubmit: a = () => {
  },
  onCancel: c = () => {
  }
}) {
  var O;
  const [i, u] = Ot(r || []), [f, _] = Ot(s), d = o == null ? void 0 : o.map((v) => qe(v, {
    today: t,
    min: e,
    max: n
  })), l = f || ((O = d == null ? void 0 : d.find((v) => `${v.range}` == `${i}`)) == null ? void 0 : O.label) || "カスタム", h = I(null), M = !h.current || !h.current.open, m = I(null), g = I(null);
  M && (u(r || []), _(s)), ie(() => {
    var v, p, w;
    M && ((v = h.current) == null || v.showModal(), (p = m.current) == null || p.call(m), (w = g.current) == null || w.call(g));
  });
  const D = () => {
    var w;
    (w = h.current) == null || w.close();
    const v = i[0] || "", p = i[1] || v;
    a(v, p);
  }, S = () => {
    var v;
    (v = h.current) == null || v.close(), c();
  };
  return y("dialog", {
    ref: h,
    class: $.dialog,
    onCancel: S,
    onClick: (v) => {
      v.target === h.current && S();
    },
    children: y("form", {
      method: "dialog",
      children: y("div", {
        class: $.app,
        "data-has-menu": d ? !0 : null,
        children: [d && y("div", {
          class: $.appMenu,
          children: y(en, {
            menuItems: d,
            selectedMenu: f,
            pressedMenu: l,
            scrollToActiveRef: g,
            onSelect: (v, p) => {
              _(v), p && u(p), requestAnimationFrame(() => {
                var w;
                return (w = m.current) == null ? void 0 : w.call(m, "smooth");
              });
            }
          })
        }), y("div", {
          class: $.appCalendar,
          children: y(Ke, {
            min: e,
            max: n,
            today: t,
            range: i,
            scrollToActiveRef: m,
            onSelect: (v) => {
              u(v), _(""), requestAnimationFrame(() => {
                var p;
                return (p = g.current) == null ? void 0 : p.call(g, "smooth");
              });
            }
          })
        }), y("div", {
          class: $.appFooter,
          children: [y("div", {
            class: $.currentRange,
            children: [y("span", {
              "data-active": !!i.length || null,
              children: hn(i)
            }), y("button", {
              type: "button",
              disabled: i.length === 0,
              onClick: () => {
                u([]);
              },
              children: "×クリア"
            })]
          }), y("div", {
            class: $.submit,
            children: [y("button", {
              class: $.applyButton,
              type: "button",
              onClick: D,
              children: "適 用"
            }), y("button", {
              class: $.cancelButton,
              type: "button",
              onClick: S,
              children: "キャンセル"
            })]
          })]
        })]
      })
    })
  });
}
function hn(t) {
  if (!t || t.length === 0)
    return "未選択";
  const e = F(t[0]).format("YYYY年M月D日"), n = t[1] ? F(t[1]).format(" - YYYY年M月D日") : "";
  return e + n;
}
let L = null;
function pn() {
  if (L)
    return L;
  L = document.createElement("div");
  const t = document.createElement("date-range-dialog"), e = t.attachShadow({
    mode: "open"
  }), n = document.createElement("style"), r = window._getDateRangeDialogCssCode();
  return n.textContent = r, e.appendChild(n), e.appendChild(L), document.body.appendChild(t), L;
}
function mn() {
  if (customElements.get("range-span"))
    return;
  class t extends HTMLSpanElement {
    static get observedAttributes() {
      return ["range", "format", "separator", "empty"];
    }
    set range(n) {
      this.setAttribute("range", n ? `${n}` : "");
    }
    get range() {
      return this.getAttribute("range") || "";
    }
    set format(n) {
      this.setAttribute("format", n);
    }
    get format() {
      return this.getAttribute("format") || "";
    }
    set separator(n) {
      this.setAttribute("separator", n);
    }
    get separator() {
      return this.getAttribute("separator") || "";
    }
    set empty(n) {
      this.setAttribute("empty", n);
    }
    get empty() {
      return this.getAttribute("empty") || "";
    }
    render() {
      const n = this.range.split(","), r = this.format || "YYYY-MM-DD", o = this.separator || " - ", s = this.empty || "-";
      this.textContent = n && n.length === 2 ? F(n[0]).format(r) + o + F(n[1]).format(r) : s;
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  }
  customElements.define("range-span", t, {
    extends: "span"
  });
}
mn();
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
function bn(t) {
  const e = pn();
  ae(y(fn, {
    ...t
  }), e);
}
export {
  F as cdate,
  bn as dateRangeDialog
};

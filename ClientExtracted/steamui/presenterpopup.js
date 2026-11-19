import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Bn as t,
  Ga as n,
  Ia as r,
  Jr as i,
  Ka as a,
  Ki as o,
  Li as s,
  Ma as c,
  Pn as l,
  Qa as u,
  St as d,
  Un as f,
  _t as p,
  da as m,
  eo as h,
  f as g,
  fi as ee,
  ft as _,
  ii as te,
  o as ne,
  pa as v,
  pn as y,
  rt as b,
  wt as x,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  M as S,
  Xs as C,
  ad as w,
  n as re,
  o as T,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as E } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import {
  Qr as ie,
  br as ae,
  ur as D,
  vn as oe,
  yr as se,
} from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import {
  At as ce,
  Pt as le,
  a as ue,
  f as de,
  n as fe,
  p as pe,
  vt as me,
  wt as he,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { Nn as ge, wn as _e } from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { Z as ve } from "./chunk~cbbb6ae37c.js?contenthash=B4MrjhKD";
import { t as ye } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { l as be } from "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { t as O } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { Q as xe, Y as Se, c as Ce } from "./library.js?contenthash=CVZWwsCP";
import {
  a as we,
  s as Te,
  u as Ee,
} from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import { s as De } from "./chunk~b980797e15.js?contenthash=DrhO3T5K";
import {
  c as Oe,
  n as k,
  o as ke,
  s as Ae,
  t as je,
  u as A,
} from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { l as Me, t as Ne } from "./chunk~a7c5e71e12.js?contenthash=DtWBhhpP";
import {
  A as Pe,
  B as Fe,
  C as Ie,
  E as Le,
  F as Re,
  H as ze,
  I as Be,
  K as Ve,
  L as He,
  N as Ue,
  O as We,
  P as Ge,
  R as Ke,
  T as qe,
  _ as Je,
  a as Ye,
  b as Xe,
  c as Ze,
  d as Qe,
  g as $e,
  h as et,
  i as tt,
  k as nt,
  l as rt,
  m as it,
  n as at,
  o as ot,
  p as st,
  r as ct,
  s as lt,
  t as ut,
  v as dt,
  w as ft,
  y as pt,
  z as mt,
} from "./chunk~af1574091f.js?contenthash=Dpj-LM_5";
var j = e(h());
function ht(e, n) {
  return n
    ? t.COMMUNITY_CDN_URL + `economy/emoticonlarge/` + e
    : t.COMMUNITY_CDN_URL + `economy/emoticon/` + e;
}
var gt = 50,
  _t = 604800,
  M = class e {
    constructor() {
      n(this);
    }
    m_bEmoticonListRequested = !1;
    m_bInitialized = !1;
    m_rtMostRecentEmoticon = void 0;
    static sm_EmoticonRegex = RegExp(`ː([a-zA-Z0-9_\\-]+)ː`, `g`);
    static sm_UnvalidatedEmoticonRegex = RegExp(
      `(?:ː|:)([a-zA-Z0-9_\\-]+)(?:ː|:)`,
      `g`,
    );
    m_rgEmoticons = [];
    m_setEmoticonOwned = new Set();
    m_rgFlairs = [];
    m_rgRecentEmoticons = void 0;
    m_rgStickers = [];
    m_rgRecentStickers = void 0;
    m_rgEffects = [];
    m_rtLastStickerOrEffect = -(2 ** 53 - 1);
    m_emoticonTrackerCallback = null;
    m_stickerTrackerCallback = null;
    static GetEmoticonURL(e, t) {
      return ht(e, t);
    }
    static GetEmoticonReplaceRegex() {
      return e.sm_EmoticonRegex;
    }
    static GetUnvalidatedEmoticonReplaceRegex() {
      return e.sm_UnvalidatedEmoticonRegex;
    }
    static BEmoticonFilterMatch(e, t) {
      return `:${e.name_normalized || e.name}:`.indexOf(t.toLowerCase()) !== -1;
    }
    static FilterEmoticons(t, n) {
      return !n || n === `:`
        ? t
        : t.filter((t) => e.BEmoticonFilterMatch(t, n));
    }
    static BStickerFilterMatch(e, t) {
      return e.name.toLowerCase().indexOf(t.toLowerCase()) > -1;
    }
    static FilterStickers(t, n) {
      return n ? t.filter((t) => e.BStickerFilterMatch(t, n)) : t;
    }
    SearchEmoticons(e, t = 25, n = !0) {
      this.UpdateEmoticonList();
      function r(e) {
        return e.name_normalized || e.name;
      }
      e = e.toLocaleLowerCase();
      let i = this.recent_emoticons.filter((t) => !e || r(t).startsWith(e)),
        a = this.recent_emoticons.filter((t) => !n && r(t).indexOf(e) !== -1),
        o = this.m_rgEmoticons.filter((t) => !e || r(t).startsWith(e)),
        s = this.m_rgEmoticons.filter((t) => !n && r(t).indexOf(e) !== -1),
        c = new Set(),
        l = [];
      function u(e, n, i) {
        return l.length >= t
          ? !1
          : (c.has(e) || (c.add(e), l.push({ name: r(e), recent: n, new: i })),
            !0);
      }
      function d(e, t, n) {
        for (let r of e) if (!u(r, t, n(r))) break;
      }
      return (
        d(i, !0, (e) => !(e.last_used || !e.time_received)),
        d(o, !1, () => !1),
        d(a, !0, (e) => !(e.last_used || !e.time_received)),
        d(s, !1, () => !1),
        l
      );
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    async BAwaitInitialized() {
      return (
        this.m_bInitialized ||
          (this.UpdateEmoticonList(), await u(() => this.m_bInitialized)),
        this.m_bInitialized
      );
    }
    GetTimeReceivedNewestEmoticon() {
      return (this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon);
    }
    GetTimeReceivedForStickerOrEffect() {
      return this.m_rtLastStickerOrEffect;
    }
    UpdateEmoticonList() {
      this.m_bInitialized || this.RequestEmoticonList();
    }
    get emoticon_list() {
      return (this.UpdateEmoticonList(), this.m_rgEmoticons);
    }
    BHasEmoticon(e) {
      return this.m_setEmoticonOwned.has(e);
    }
    get flair_list() {
      return (this.UpdateEmoticonList(), this.m_rgFlairs);
    }
    GetStickerList() {
      return this.m_rgStickers;
    }
    GetEffectList() {
      return this.m_rgEffects;
    }
    GetFlairListByGroupID(e) {
      return this.m_rgFlairs.filter((t) => t.flairGroupID === e);
    }
    get recent_emoticons() {
      return this.m_rgRecentEmoticons ?? this.BuildRecentEmoticonList();
    }
    get recent_stickers() {
      return this.m_rgRecentStickers ?? this.BuildRecentStickerList();
    }
    SetEmoticonTrackerCallback(e) {
      this.m_emoticonTrackerCallback = e;
    }
    SetStickerTrackerCallback(e) {
      this.m_stickerTrackerCallback = e;
    }
    TrackEmoticonUsage(e, t) {
      if (!this.m_bInitialized) return;
      this.m_emoticonTrackerCallback && this.m_emoticonTrackerCallback(e, t);
      let n = new Map(),
        r = /\[emoticon\]([^[]*)/g,
        i;
      for (; (i = r.exec(e));) {
        let e = n.get(i[1]) || 0;
        n.set(i[1], e + 1);
      }
      let a = !1;
      if (n.size) {
        if (this.m_rgRecentEmoticons !== void 0)
          for (let e of this.m_rgRecentEmoticons) {
            let r = n.get(e.name);
            r !== void 0 &&
              ((e.last_used = t),
              (e.use_count = (e.use_count ?? 0) + r),
              n.delete(e.name),
              e.time_received && ((a = !0), delete e.time_received));
          }
        if (n.size)
          for (let e of this.m_rgEmoticons) {
            let r = n.get(e.name);
            r !== void 0 &&
              ((e.last_used = t),
              (e.use_count = (e.use_count ?? 0) + r),
              delete e.time_received,
              this.m_rgRecentEmoticons !== void 0 &&
                this.m_rgRecentEmoticons.push(e));
          }
        if (
          this.m_rgRecentEmoticons !== void 0 &&
          (this.BuildRecentEmoticonList(), a)
        ) {
          this.m_rtMostRecentEmoticon = void 0;
          for (let e of this.m_rgRecentEmoticons)
            !e.last_used &&
              e.time_received &&
              (!this.m_rtMostRecentEmoticon ||
                e.time_received > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = e.time_received);
        }
      }
    }
    TrackStickerUsage(e, t) {
      if (!this.m_bInitialized) return;
      this.m_stickerTrackerCallback && this.m_stickerTrackerCallback(e, t);
      let n = this.m_rgStickers.find(({ name: t }) => t === e);
      n &&
        ((n.last_used = t),
        (n.use_count = (n.use_count ?? 0) + 1),
        delete n.time_received,
        this.BuildRecentStickerList());
    }
    RequestEmoticonList() {
      !this.m_bEmoticonListRequested &&
        this.BTransportReady() &&
        ((this.m_bEmoticonListRequested = !0),
        this.RequestEmoticonListInternal());
    }
    BuildRecentEmoticonList() {
      return (
        (this.m_rgRecentEmoticons = this.BuildRecentList(this.m_rgEmoticons)),
        this.m_rgRecentEmoticons
      );
    }
    BuildRecentStickerList() {
      return (
        (this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers)),
        this.m_rgRecentStickers
      );
    }
    BuildRecentList(e) {
      let t = this.GetServerTime() - _t,
        n = e.filter(({ last_used: e, time_received: n }) => e || (n && n > t));
      return (
        n.sort(
          (e, t) =>
            (t.last_used || t.time_received || 0) -
            (e.last_used || e.time_received || 0),
        ),
        n.slice(0, gt)
      );
    }
    OnEmoticonListReceived(e) {
      ((this.m_rgFlairs = []),
        (this.m_rgEmoticons = []),
        (this.m_rgRecentEmoticons = void 0),
        (this.m_rtMostRecentEmoticon = void 0));
      let t = this.GetServerTime() - _t;
      for (let n of e) {
        let e = n.name;
        if (e.startsWith(`^`)) {
          let t = e.match(new RegExp(/:(.*):/)),
            n = e.match(new RegExp(/\^(.*)\^/));
          t && n && this.m_rgFlairs.push({ name: t[1], flairGroupID: n[1] });
        } else {
          let e = n.time_received;
          (!n.last_used && e && e > t
            ? (!this.m_rtMostRecentEmoticon ||
                e > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = e)
            : delete n.time_received,
            this.m_rgEmoticons.push(n));
        }
      }
      ((this.m_setEmoticonOwned = new Set(
        this.m_rgEmoticons.map((e) => e.name_normalized || e.name),
      )),
        (this.m_bInitialized = !0),
        (this.m_bEmoticonListRequested = !1));
    }
  };
(y([a], M.prototype, `m_bInitialized`, void 0),
  y([a], M.prototype, `m_rtMostRecentEmoticon`, void 0),
  y([a], M.prototype, `m_rtLastStickerOrEffect`, void 0),
  y([r], M.prototype, `TrackEmoticonUsage`, null));
var vt = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              j.createElement(
                `span`,
                {
                  "data-copytext": ``,
                  "data-copystyle": `merge-adjacent`,
                  "bbcode-text": e,
                },
                e,
              ),
            )
          : this.reactNodes.push(e));
    }
    AppendNode(e) {
      this.reactNodes.push(e);
    }
    GetElements() {
      return this.reactNodes;
    }
  },
  yt = class {
    m_decoratedAccumulator;
    constructor(e) {
      (ee(e, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = e));
    }
    AppendText(e, t = !1) {
      this.m_decoratedAccumulator.AppendText(e, t);
    }
    AppendNode(e) {
      this.m_decoratedAccumulator.AppendNode(e);
    }
    GetElements() {
      return this.m_decoratedAccumulator.GetElements();
    }
  },
  bt = class extends yt {
    constructor(e) {
      super(e);
    }
    AppendText(e) {
      let t = e,
        n = [];
      for (
        let e = t.indexOf(`
`);
        e !== -1;
        e = t.indexOf(`
`)
      )
        (n.push(t.substr(0, e)),
          n.push(j.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  xt = class extends Ve {
    m_renderingLanguage;
    constructor(e, t, n) {
      (super(e, t ?? (() => new vt())),
        (this.m_renderingLanguage = typeof n == `string` ? o(n) : n));
    }
    UpdateOverrideLanguage(e) {
      this.m_renderingLanguage = e;
    }
    ParseBBCode(e, t, n = !0) {
      let r = 0,
        i = this.Parse(
          e,
          (e, n, ...i) =>
            j.createElement(
              e,
              {
                ...n,
                context: t,
                language: this.m_renderingLanguage,
                key: `bbnode_${r++}`,
              },
              ...i,
            ),
          n,
        );
      return i.length > 1
        ? j.createElement(j.Fragment, null, ...i)
        : i.length == 1
          ? i[0]
          : null;
    }
  },
  N = ye();
function St(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, N.jsx)(j.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t.map((e) => (e ? e.toString() : ``)).filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    j.Children.count(r) == 1)
  ) {
    let e = j.Children.only(r);
    return j.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, N.jsx)(j.Fragment, { children: r })
  );
}
function Ct(e) {
  let t = e.cloneContents(),
    n = ``,
    r = ``,
    i = !1,
    a = (t.querySelector(`[data-activechat=true]`) || t).querySelectorAll(
      `[data-copytext]`,
    ),
    o = Array.from(a).map((e) => e.getAttribute(`data-copystyle`) || `msg`);
  for (let e = 0; e < a.length; ++e) {
    let t = a[e],
      s = o[e];
    if (e + 1 < a.length && ne(t, a[e + 1])) continue;
    let c = t.tagName.toLowerCase(),
      l = s.includes(`block`),
      u = s.includes(`timestamp`),
      d = s.includes(`server`),
      f = s.includes(`invite`),
      p = s.includes(`emote`),
      m = s.includes(`no-prefix`),
      h = s.includes(`no-suffix`),
      g = s.includes(`allow-embedded-newlines`),
      ee = s.includes(`block-continue`),
      _ = s.includes(`merge-adjacent`),
      te = s.includes(`force-display`),
      v = s.includes(`prepend-innertext`),
      y = s.includes(`append-innertext`),
      b = s.includes(`prepend-newline`),
      x = s.includes(`append-newline`),
      S = s.includes(`speaker`);
    if (!te) {
      let e = c.match(/img|iframe/) != null,
        n = t.querySelector(`img,iframe`) != null;
      if (!t.innerText && !e && !n) continue;
    }
    (_ &&
      (e > 0 && o[e - 1].includes(`merge-adjacent`) && (m = !0),
      e + 1 < o.length && o[e + 1].includes(`merge-adjacent`) && (h = !0)),
      S && (i = !0));
    let C = ``;
    !u && !S && !d && !f && !p
      ? (i && (C += `	`),
        r.includes(`msg`) && l && (b = !0),
        r.includes(`block`) && !ee && (b = !0))
      : (n.length != 0 &&
          (C += `
`),
        (d || f) && (C += `		`));
    let w = t.getAttribute(`data-copytext`) ?? ``;
    (w.length == 0
      ? (w = t.innerText)
      : v && t.innerText.length > 0
        ? (w = `${t.innerText}${
            s.includes(`-with-newline`)
              ? `
`
              : ` `
          }${w}`)
        : y &&
          t.innerText.length > 0 &&
          (w += `${
            s.includes(`-with-newline`)
              ? `
`
              : ` `
          }${t.innerText}`),
      w.length != 0 &&
        (b &&
          (n += `
`),
        m || (n += C),
        (n += g
          ? w
          : w.replace(
              /\n/g,
              `
` + C,
            )),
        h ||
          (n += `
`),
        x &&
          (n += `
`)),
      (r = s));
  }
  if (n.length != 0) return n;
}
function wt(e) {
  let t = Ct(e);
  t != null && g(t);
}
function Tt(e) {
  let t = document.createRange();
  (t.selectNode(e), wt(t));
}
var Et = `pvP8JT4e7EA-`,
  Dt = `FcUxYTJ41iw-`,
  Ot = `CVH0kQ-5qJ4-`,
  kt = `-OdMBhmRPrM-`,
  At = `ht2q6zu-Yn8-`,
  jt = `kzKCSSWaRZ4-`,
  Mt = `KRQYA30hbUE-`,
  Nt = `_1zsmA-mI3cU-`,
  Pt = `_4X5-n9MaD8g-`;
function Ft(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var It = `_6Ymd3Ej4NCU-`,
  Lt = `nnMTzvpAu6Y-`,
  Rt = `plDm7MqblvA-`,
  zt = `_0SYoz2hcxOY-`,
  Bt = `_6gRC1q99lWw-`,
  Vt = `a1l1nhz8GFU-`,
  Ht = `wfpm6FahiQY-`,
  Ut = `G30RxXBSXck-`,
  Wt = `Mw7bdt52AuY-`,
  Gt = `_0ZS8IEfJKto-`,
  Kt = `R-BER3-p7c8-`,
  qt = `nCS2TzxRijY-`,
  P = class extends j.Component {
    constructor(e) {
      (super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 }));
    }
    render() {
      let { config: e } = this.props,
        { activeIndex: t } = this.state,
        n = e[t],
        r = n ? n.renderContent() : null,
        i = e.length > 1,
        a = i
          ? ({ detail: { button: t } }) => {
              t === me.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === me.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, N.jsxs)(S, {
        className: It,
        onButtonDown: a,
        children: [i && (0, N.jsx)(Jt, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, N.jsx)(
          Xt,
          {
            active: n,
            onClick: () => this.setState({ activeIndex: t }),
            children: e(n),
          },
          t,
        );
      });
    }
  };
function Jt(e) {
  return (0, N.jsx)(S, {
    className: Lt,
    "flow-children": `row`,
    children: e.children,
  });
}
function Yt(e) {
  return (0, N.jsx)(`div`, { className: Vt, children: e.children });
}
function Xt(e) {
  let { active: t, children: n, onClick: r } = e;
  return (0, N.jsx)(S, {
    className: E(Rt, t && `f-iRFuUHuSo-`),
    focusClassName: zt,
    onActivate: r,
    children: (0, N.jsx)(`div`, {
      className: E(Bt, t && `f-iRFuUHuSo-`),
      children: n,
    }),
  });
}
function Zt(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, N.jsx)(
        S,
        {
          className: Ut,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: zt,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, N.jsx)(S, { "flow-children": `grid`, className: Ht, children: o })
  );
}
function Qt(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(Yt, {
        children: (0, N.jsx)(en, {
          title: t,
          children: (0, N.jsx)(Zt, { ...a }),
        }),
      }),
      (0, N.jsx)(tn, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function $t(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsxs)(Yt, {
        children: [
          i && (0, N.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, N.jsx)(en, { title: e, children: (0, N.jsx)(Zt, { ...t }) }, e),
          ),
        ],
      }),
      (0, N.jsx)(tn, { value: n, onChange: t }),
    ],
  });
}
function en(e) {
  return (0, N.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, N.jsx)(`div`, { className: Wt, children: e.title }),
      (0, N.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function tn(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, N.jsx)(`div`, {
    className: Gt,
    children: (0, N.jsx)(oe, {
      type: `text`,
      placeholder: p(`#AddonPicker_Search`),
      className: Kt,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function F(e) {
  let { className: t, ...n } = e;
  return (0, N.jsx)(`div`, { className: E(t, qt), ...n });
}
var nn = `EYdF9T-t7r0-`,
  rn = `GlOJIpYSKE4-`,
  an = `JQFjcVsL4SA-`,
  on = `MHuFPh5V6r4-`,
  sn = `Gwiqr5pL1cE-`,
  cn = `w0e9THby0ZM-`,
  ln = `_4q--1VsTk5U-`,
  un = `_669DaDTMhYs-`,
  dn = `dohGHt1ixUc-`,
  fn = `C9qi0C7EUeo-`,
  pn = `_3XkAznD5HIU-`,
  mn = `VoTYjMrv1JU-`,
  I = `iiVnY9Z6ikk-`,
  hn = `KB63E0Y-xPo-`,
  gn = `_7tqUEqEzFXI-`;
function _n(e) {
  let { emoticon: t, large: n } = e,
    [r, i] = ce(),
    [a, o] = j.useState(null),
    s = `:${t}:`,
    c = ht(t, n);
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(St, {
        text: s,
        style: `merge-adjacent`,
        children: (0, N.jsx)(`img`, {
          ...i,
          src: c,
          className: E(an, n ? on : void 0),
          "data-emoticon": t,
          alt: t,
          ref: o,
        }),
      }),
      r && a && (0, N.jsx)(vn, { target: a, emoticon: t }),
    ],
  });
}
function vn(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = yn(n);
  return (0, N.jsx)(bn, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, N.jsx)(_n, { emoticon: n, large: !0 }),
  });
}
function yn(e) {
  return O({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let n = `${t.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(t.LANGUAGE)}&origin=${self.origin}`,
        r = await fetch(n);
      if (r.status != 200)
        throw `Error fetching emoticon: ${r.status} ${r.statusText}`;
      return await r.json();
    },
  });
}
var bn = ({ target: e, title: t, subtitle: n, children: r }) =>
    (0, N.jsxs)(he, {
      target: e,
      style: { zIndex: 1700 },
      className: ln,
      children: [
        r,
        (0, N.jsxs)(`div`, {
          className: un,
          children: [
            (0, N.jsx)(`div`, {
              className: dn,
              children: t || (0, N.jsx)(`span`, { children: `\xA0` }),
            }),
            (0, N.jsx)(`div`, {
              className: fn,
              children: n || (0, N.jsx)(`span`, { children: `\xA0` }),
            }),
          ],
        }),
      ],
    }),
  xn = 1e3;
function L(e) {
  return e.recent_emoticons;
}
function Sn(e) {
  return e.recent_stickers;
}
function Cn(e) {
  return L(e).length + Sn(e).length > 0;
}
function wn(e) {
  let [t, n] = (0, j.useState)(e.is_initialized);
  return (
    (0, j.useEffect)(() => {
      if (!e.is_initialized) {
        e.UpdateEmoticonList();
        let t = u(
          () => e.is_initialized,
          () => n(e.is_initialized),
        );
        return () => t();
      }
      return () => {};
    }, [e]),
    t
  );
}
var Tn = w((e) => {
    let {
      emoticonStore: t,
      roomEffectSettings: n,
      strFlairGroupID: r,
      onEmoticonSelected: i,
      onRoomEffectSelected: a,
      onStickerSelected: o,
    } = e;
    wn(t);
    let s = [];
    return (
      Cn(t) &&
        s.push({
          renderTab: (e) =>
            (0, N.jsx)(`span`, {
              title: p(`#AddonPicker_RecentlyUsed`),
              className: E(I, hn, e && void 0),
              children: (0, N.jsx)(Vn, {}),
            }),
          renderContent: () =>
            (0, N.jsx)(On, {
              store: t,
              onEmoticonSelect: (e) => i(e.name),
              onStickerSelect: (e) => o(e.name),
              flairGroupID: r,
            }),
        }),
      (0, N.jsx)(T, {
        children: (0, N.jsx)(P, {
          config: [
            ...s,
            {
              renderTab: (e) =>
                (0, N.jsx)(`span`, {
                  title: p(`#AddonPicker_Emoticons`),
                  className: E(I, e && void 0),
                  children: (0, N.jsx)(W, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(kn, {
                  store: t,
                  onItemSelect: (e) => i(e.name),
                  flairGroupID: r,
                }),
            },
            {
              renderTab: (e) =>
                (0, N.jsx)(`span`, {
                  title: p(`#AddonPicker_Stickers`),
                  className: E(I, e && void 0),
                  children: (0, N.jsx)(Ln, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(An, { store: t, onItemSelect: (e) => o(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, N.jsx)(`span`, {
                  title: p(`#AddonPicker_RoomEffects`),
                  className: E(I, e && void 0),
                  children: (0, N.jsx)(Bn, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(jn, {
                  store: t,
                  effectSettings: n,
                  onItemSelect: (e) => a(e.name),
                }),
            },
          ],
        }),
      })
    );
  }),
  R = class extends j.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = u(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      let {
          emoticonStore: e,
          onEmoticonSelected: t,
          onStickerSelected: n,
          strFlairGroupID: r,
        } = this.props,
        i = [];
      return (
        Cn(e) &&
          i.push({
            renderTab: (e) =>
              (0, N.jsx)(`span`, {
                title: p(`#AddonPicker_RecentlyUsed`),
                className: E(I, hn, e && void 0),
                children: (0, N.jsx)(Vn, {}),
              }),
            renderContent: () =>
              (0, N.jsx)(On, {
                store: e,
                onEmoticonSelect: (e) => t(e.name),
                onStickerSelect: (e) => n(e.name),
                flairGroupID: r,
              }),
          }),
        (0, N.jsx)(T, {
          children: (0, N.jsx)(P, {
            config: [
              ...i,
              {
                renderTab: (e) =>
                  (0, N.jsx)(`span`, {
                    title: p(`#AddonPicker_Emoticons`),
                    className: E(I, e && void 0),
                    children: (0, N.jsx)(W, {}),
                  }),
                renderContent: () =>
                  (0, N.jsx)(kn, {
                    store: e,
                    onItemSelect: (e) => t(e.name),
                    flairGroupID: r,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, N.jsx)(`span`, {
                    title: p(`#AddonPicker_Stickers`),
                    className: E(I, e && void 0),
                    children: (0, N.jsx)(Ln, {}),
                  }),
                renderContent: () =>
                  (0, N.jsx)(An, { store: e, onItemSelect: (e) => n(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
R = y([w], R);
var En = class extends j.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = u(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, N.jsx)(T, {
        children: (0, N.jsx)(P, {
          config: [
            {
              renderTab: () =>
                (0, N.jsx)(`span`, {
                  title: p(`#AddonPicker_Emoticons`),
                  className: I,
                  children: (0, N.jsx)(W, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(B, {
                  store: this.props.emoticonStore,
                  onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  Dn = class extends j.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = u(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, N.jsx)(T, {
        children: (0, N.jsx)(P, {
          config: [
            {
              renderTab: () =>
                (0, N.jsx)(`span`, {
                  title: p(`#AddonPicker_Emoticons`),
                  className: I,
                  children: (0, N.jsx)(W, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(V, {
                  store: this.props.emoticonStore,
                  onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  On = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        L(e) &&
          i.push({
            title: p(`#AddonPicker_RecentEmoticons`),
            items: M.FilterEmoticons(L(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, N.jsx)(H, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, N.jsx)(F, {
                children: r
                  ? p(`#AddonPicker_NoResults`)
                  : p(`#AddonPicker_NoRecent`, p(`#AddonPicker_Emoticons`)),
              }),
          }),
        Sn(e).length &&
          i.push({
            title: p(`#AddonPicker_RecentStickers`),
            items: M.FilterStickers(Sn(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, N.jsx)(U, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, N.jsx)(F, {
                children: r
                  ? p(`#AddonPicker_NoResults`)
                  : p(`#AddonPicker_NoRecent`, p(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, N.jsx)($t, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  kn = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = M.FilterEmoticons(i, r).slice(0, xn);
      return (0, N.jsx)(Qt, {
        title: p(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, N.jsx)(H, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, N.jsx)(F, { children: p(`#AddonPicker_NoResults`) })
            : (0, N.jsx)(z, {}),
      });
    }
  };
function z() {
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(F, {
        children: p(`#AddonPicker_NoneOwned`, p(`#AddonPicker_Emoticons`)),
      }),
      (0, N.jsx)(F, {
        children: x(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, N.jsx)(D, {
            href: `${c.STORE_BASE_URL}points/shop/c/emoticons`,
            children: p(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, N.jsx)(D, {
            href: `${c.COMMUNITY_BASE_URL}market`,
            children: p(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var An = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = M.FilterStickers(e.GetStickerList(), n);
      return (0, N.jsx)(Qt, {
        title: p(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, N.jsx)(U, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, N.jsx)(F, { children: p(`#AddonPicker_NoResults`) })
            : (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(F, {
                    children: p(
                      `#AddonPicker_NoneOwned`,
                      p(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, N.jsx)(F, {
                    children: x(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, N.jsx)(D, {
                        href: `${c.STORE_BASE_URL}points/shop/c/stickers`,
                        children: p(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  jn = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, N.jsx)(Qt, {
        title: p(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, N.jsx)(Nn, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, N.jsx)(F, { children: p(`#AddonPicker_NoResults`) })
            : (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(F, {
                    children: p(
                      `#AddonPicker_NoneOwned`,
                      p(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, N.jsx)(F, {
                    children: x(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, N.jsx)(D, {
                        href: `${c.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: p(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  B = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        L(e).length &&
          i.push({
            title: p(`#AddonPicker_RecentEmoticons`),
            items: M.FilterEmoticons(L(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, N.jsx)(H, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, N.jsx)(F, {
                children: r
                  ? p(`#AddonPicker_NoResults`)
                  : p(`#AddonPicker_NoRecent`, p(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, N.jsx)($t, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: p(`#AddonPicker_AllEmoticons`),
              items: M.FilterStickers(e.emoticon_list, r).slice(0, xn),
              onItemSelect: t,
              renderItem: (e) => (0, N.jsx)(H, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, N.jsx)(F, { children: p(`#AddonPicker_NoResults`) })
                  : (0, N.jsx)(z, {}),
            },
          ],
        })
      );
    }
  };
B = y([w], B);
var V = class extends j.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, N.jsx)($t, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: p(`#ChatEntryButton_Flair`),
          items: M.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, N.jsx)(H, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, N.jsx)(F, { children: p(`#AddonPicker_NoResults`) })
              : (0, N.jsx)(z, {}),
        },
      ],
    });
  }
};
V = y([w], V);
var H = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, N.jsxs)(`div`, {
      className: gn,
      children: [
        (0, N.jsx)(_n, { emoticon: t.name, large: n }),
        r && (0, N.jsx)(Fn, {}),
      ],
    });
  },
  U = class extends j.Component {
    state = { showHover: !1 };
    m_ref = j.createRef();
    render() {
      let { sticker: e, className: t, ...n } = this.props,
        r = Ft(c.COMMUNITY_CDN_URL, e.name);
      return (0, N.jsxs)(`div`, {
        ref: this.m_ref,
        className: E(t, sn),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...n,
        children: [
          (0, N.jsx)(`img`, { style: { width: `100%` }, src: r }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, N.jsx)(Mn, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  Mn = w((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = Ne(r, {});
    return (0, N.jsx)(bn, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, N.jsx)(`img`, {
        src: Ft(c.COMMUNITY_CDN_URL, n),
        className: pn,
      }),
    });
  }),
  Nn = class extends j.Component {
    state = { showHover: !1 };
    m_ref = j.createRef();
    render() {
      let { effect: e, roomEffectSettings: t, className: n, ...r } = this.props,
        i = t[e.name];
      return (0, N.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: E(n, cn),
        ...r,
        children: [
          i.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, N.jsx)(Pn, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: t,
            }),
        ],
      });
    }
  },
  Pn = w((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      a = i[n],
      [o] = Ne(r, {});
    return (0, N.jsx)(bn, {
      target: t,
      title: n,
      subtitle: o?.GetName(),
      children: (0, N.jsx)(`div`, {
        className: mn,
        children: a.renderEffectIcon(),
      }),
    });
  });
function Fn() {
  return (0, N.jsx)(`div`, {
    className: nn,
    children: (0, N.jsx)(`div`, { className: rn }),
  });
}
function In(e) {
  return l()
    ? (0, N.jsxs)(`svg`, {
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ...e,
        children: [
          (0, N.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M21 29H22.1875V31H19L21 29Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M29 22.1875V21L31 19V22.1875H29Z`,
            fill: `currentColor`,
          }),
        ],
      })
    : (0, N.jsx)(`svg`, {
        viewBox: `0 0 59 59`,
        width: `32`,
        ...e,
        children: (0, N.jsx)(`switch`, {
          children: (0, N.jsx)(`g`, {
            children: (0, N.jsx)(`path`, {
              d: `M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z`,
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              fill: `#fff`,
            }),
          }),
        }),
      });
}
function Ln(e) {
  return (0, N.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function Rn(e) {
  return l()
    ? (0, N.jsx)(`svg`, {
        width: `36`,
        height: `36`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ...e,
        children: (0, N.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z`,
          fill: `currentColor`,
        }),
      })
    : (0, N.jsx)(`svg`, {
        viewBox: `0 -8 60 60`,
        width: `32`,
        ...e,
        children: (0, N.jsx)(`path`, {
          d: `M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `#fff`,
        }),
      });
}
function W(e) {
  return (0, N.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, N.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function zn(e) {
  return l()
    ? (0, N.jsxs)(`svg`, {
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ...e,
        children: [
          (0, N.jsx)(`path`, {
            d: `M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z`,
            fill: `currentColor`,
          }),
          (0, N.jsx)(`path`, {
            d: `M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z`,
            fill: `currentColor`,
          }),
        ],
      })
    : (0, N.jsx)(`svg`, {
        viewBox: `0 0 60 38`,
        width: `32`,
        ...e,
        children: (0, N.jsx)(`path`, {
          d: `M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `#fff`,
        }),
      });
}
function Bn(e) {
  return (0, N.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function Vn(e) {
  let { className: t, ...n } = e;
  return (0, N.jsx)(`svg`, {
    className: E(`SVGIcon_Button SVGIcon_Clock`, t),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...n,
    children: (0, N.jsx)(`path`, {
      d: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var Hn = 1576780700,
  G = class extends j.Component {
    OnEmoticonClick(e) {
      let {
          emoticonStore: t,
          strFlairGroupID: n,
          SetUIDisplayPref: r,
          contextOptions: i,
          bShowChatAddons: a,
        } = this.props,
        {
          roomEffectSettings: o,
          onRoomEffectSelected: s,
          onStickerSelected: c,
        } = this.props,
        l = null;
      if (
        ((l =
          a && o && s && c
            ? (0, N.jsx)(Tn, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, N.jsx)(Dn, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, N.jsx)(En, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        re(
          l,
          e,
          i || {
            bOverlapHorizontal: !0,
            bPreferPopLeft: !0,
            bPreferPopTop: !0,
          },
        ),
        this.BHaveUnseenEmoticons() && r)
      ) {
        let e = this.GetNewestIndicatorTime();
        ((!e || e < Hn) && (e = Hn), r(`rtLastAckedNewEmoticons`, e));
      }
    }
    GetNewestIndicatorTime() {
      let e = this.props.emoticonStore,
        t = -(2 ** 53 - 1),
        n = e.GetTimeReceivedNewestEmoticon();
      n && (t = n);
      let r = e.GetTimeReceivedForStickerOrEffect();
      return ((t = Math.max(r, t)), t > -(2 ** 53 - 1) ? t : void 0);
    }
    BHaveUnseenEmoticons() {
      let { rtLastAckedNewEmoticons: e } = this.props,
        t = this.GetNewestIndicatorTime();
      return !e || e < Hn || (t && (!e || e < t));
    }
    render() {
      let { disabled: e, className: t, ttip: n, useImg: r } = this.props,
        i = [t],
        a = !1;
      return (
        e ? i.push(`disabled`) : this.BHaveUnseenEmoticons() && (a = !0),
        n && i.push(`ttip`),
        r
          ? (0, N.jsx)(S, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: p(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, N.jsx)(ue, {
                toolTipContent: n,
                children: (0, N.jsx)(`img`, {
                  src: this.props.useImg,
                  className: E(...i),
                  title: this.props.title || p(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (i.push(jt, Nt),
            (0, N.jsx)(pe, {
              className: E(...i),
              onOKActionDescription: p(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || p(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, N.jsxs)(ue, {
                toolTipContent: n,
                children: [
                  this.props.buttonIcon || (0, N.jsx)(Me, {}),
                  a && (0, N.jsx)(Fn, {}),
                ],
              }),
            }))
      );
    }
  };
(y([i], G.prototype, `OnEmoticonClick`, null), (G = y([w], G)));
var Un = G;
function Wn(e) {
  return !(
    (!je(e.sPoster) && !k(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !k(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !k(e.sURL)))
  );
}
var K = class e {
    m_bUserHasVolumePreference = !1;
    m_flVolumePreference = 0;
    BUserHasVolumePreference() {
      return this.m_bUserHasVolumePreference;
    }
    SetVolumePreference(e) {
      ((this.m_flVolumePreference = e), (this.m_bUserHasVolumePreference = !0));
    }
    GetVolumePreference() {
      return this.m_flVolumePreference;
    }
    BVolumePreferenceMuted() {
      return this.m_flVolumePreference < 0.001;
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
  },
  Gn = (0, j.forwardRef)(function (e, n) {
    let {
        video: r,
        bAutoPlay: i,
        bControls: a,
        bLoop: o,
        bMuted: s,
        className: c,
        mediaScale: l,
        flAspectRatio: u,
        onClick: d,
        altText: f,
      } = e,
      p = (0, j.useMemo)(
        () =>
          !!r.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [r.rgVideoTracks],
      ),
      [m, h] = j.useState(!1),
      g = Kn();
    if (!r.rgVideoSources || !r.rgVideoSources.length) return null;
    let ee = Wn(r),
      _;
    (!ee || (p && t.EUNIVERSE == 1)) && (_ = `anonymous`);
    let te = s || (i && K.Get().BVolumePreferenceMuted()),
      ne = r.sPoster ? qn(r.sPoster, g) : ``;
    return (0, N.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: i,
      muted: te,
      playsInline: !0,
      controls: a,
      poster: ne,
      loop: o,
      crossOrigin: _,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        m && K.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          r = K.Get().BUserHasVolumePreference();
        if ((h(!0), n)) {
          if (!r && !i) {
            let e = t.muted ? 0 : t.volume;
            K.Get().SetVolumePreference(e);
          } else
            r &&
              ((t.volume = K.Get().GetVolumePreference()),
              (t.muted = K.Get().BVolumePreferenceMuted()));
        }
      },
      ref: n,
      className: c,
      onClick: d,
      "aria-label": f,
      style: {
        width: l && l >= 1 && l < 100 ? `${l}%` : void 0,
        aspectRatio: u || void 0,
      },
      children: [
        (0, N.jsx)(Jn, {
          rgVideoSources: r.rgVideoSources,
          strCacheBreakOrigin: g,
        }),
        (0, N.jsx)(Yn, {
          rgVideoTracks: r.rgVideoTracks,
          strCacheBreakOrigin: g,
        }),
      ],
    });
  });
function Kn() {
  let e = window.location.href,
    n = [
      t.STORE_BASE_URL,
      t.COMMUNITY_BASE_URL,
      t.PARTNER_BASE_URL,
      t.HELP_BASE_URL,
      t.STATS_BASE_URL,
      t.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (n) return n;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function qn(e, t) {
  if (e) {
    if (je(e)) return e;
    try {
      let n = new URL(e);
      return (
        (n.search = (n.search ? n.search + `&` : `?`) + `origin=` + t),
        n.toString()
      );
    } catch {
      return e;
    }
  }
}
function Jn(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, N.jsx)(`source`, { src: qn(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function Yn(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, N.jsx)(
          Xn,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function Xn(e) {
  let { track: n, rgVideoTracks: r, strCacheBreakOrigin: i } = e,
    a = n.eLanguage;
  if (t.EREALM == v.k_ESteamRealmChina) {
    if (_.IsELanguageValidInRealm(a, v.k_ESteamRealmChina))
      a = _.GetELanguageFallback(a);
    else if (a === 6) {
      if (r.find((e) => _.GetELanguageFallback(e.eLanguage) === a)) return null;
    } else return null;
  } else if (!_.IsELanguageValidInRealm(a, v.k_ESteamRealmGlobal)) return null;
  return (0, N.jsx)(`track`, {
    src: qn(n.sURL, i),
    kind: n.sKind,
    default: n.bDefault,
    srcLang: s(a),
    label: d(a),
  });
}
var Zn = e(Se());
function q(e) {
  let t = Z(e, `poster`);
  t &&= A(t);
  let n = [];
  {
    let t = Z(e, `mp4`);
    t && n.push({ sURL: A(t), sFormat: `video/mp4` });
    let r = Z(e, `webm`);
    r && n.push({ sURL: A(r), sFormat: `video/webm` });
  }
  let r = o(c.LANGUAGE),
    i = r != 0,
    a = [];
  for (let t = 0; t < 32; t++) {
    let n = Z(e, `sub_` + s(t));
    n &&
      a.push({
        sURL: A(n),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: i && t == r,
      });
    let o = Z(e, `cap_` + s(t));
    o &&
      a.push({
        sURL: A(o),
        eLanguage: t,
        sKind: `captions`,
        bDefault: i && t == r,
      });
  }
  return { sPoster: t, rgVideoSources: n, rgVideoTracks: a };
}
function Qn(e) {
  let t = q(e.args);
  return (0, N.jsx)(Gn, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function $n(e) {
  let t = q(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: A(n), sFormat: `video/webm` });
  let r = Z(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = Z(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = Z(e.args, `loop`);
  return (0, N.jsx)(Gn, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var er = `m6bojdeQzBM-`,
  tr = `KNKcwZZR0so-`,
  nr = `OACV7AX319w-`,
  rr = `D7GTf0-swcc-`,
  ir = `L7AE1SvWgtA-`,
  ar = `_7iMZXddr1CI-`,
  or = `sNG-BnwzjYs-`,
  sr = `maYcJlnc0JU-`,
  cr = `akuZJwBr6xc-`,
  lr = `ZfFIRgkpA2M-`,
  ur = { Box: er, Preview: tr, Type: void 0 };
function dr(e) {
  return (0, N.jsx)(`img`, {
    className: tr,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function fr(e) {
  return (0, N.jsx)(`div`, { className: ir, children: e.children });
}
function pr(e) {
  return (0, N.jsx)(`div`, { className: ar, children: e.children });
}
function mr(e) {
  return (0, N.jsx)(`div`, { className: nr, children: e.children });
}
function hr(e) {
  return (0, N.jsx)(`span`, { className: cr, children: e.children });
}
function gr(e) {
  return (0, N.jsx)(`div`, { className: rr, children: e.children });
}
function _r(e) {
  return (0, N.jsx)(`span`, { className: lr, children: e.children });
}
function vr(e) {
  return (0, N.jsx)(`div`, { className: or, children: e.children });
}
function yr(e) {
  return (0, N.jsx)(`div`, { className: sr, children: e.children });
}
var br = {
  countrycodes: {
    countries: {
      AF: `Afghanistan`,
      AX: `Aland Islands`,
      AL: `Albania`,
      DZ: `Algeria`,
      AS: `American Samoa`,
      AD: `Andorra`,
      AO: `Angola`,
      AI: `Anguilla`,
      AQ: `Antarctica`,
      AG: `Antigua and Barbuda`,
      AR: `Argentina`,
      AM: `Armenia`,
      AW: `Aruba`,
      AU: `Australia`,
      AT: `Austria`,
      AZ: `Azerbaijan`,
      BS: `Bahamas`,
      BH: `Bahrain`,
      BD: `Bangladesh`,
      BB: `Barbados`,
      BY: `Belarus`,
      BE: `Belgium`,
      BZ: `Belize`,
      BJ: `Benin`,
      BM: `Bermuda`,
      BT: `Bhutan`,
      BO: `Bolivia`,
      BA: `Bosnia and Herzegovina`,
      BW: `Botswana`,
      BV: `Bouvet Island`,
      BR: `Brazil`,
      IO: `British Indian Ocean Territory`,
      BN: `Brunei Darussalam`,
      BG: `Bulgaria`,
      BF: `Burkina Faso`,
      BI: `Burundi`,
      KH: `Cambodia`,
      CM: `Cameroon`,
      CA: `Canada`,
      CV: `Cabo Verde`,
      KY: `Cayman Islands`,
      CF: `Central African Republic`,
      TD: `Chad`,
      CL: `Chile`,
      CN: `China`,
      XC: `China`,
      CX: `Christmas Island`,
      CC: `Cocos (Keeling) Islands`,
      CO: `Colombia`,
      KM: `Comoros`,
      CG: `Congo`,
      CD: `Congo, the Democratic Republic of the`,
      CK: `Cook Islands`,
      CR: `Costa Rica`,
      CI: `Cote d'Ivoire`,
      HR: `Croatia`,
      CY: `Cyprus`,
      CZ: `Czech Republic`,
      DK: `Denmark`,
      DJ: `Djibouti`,
      DM: `Dominica`,
      DO: `Dominican Republic`,
      EC: `Ecuador`,
      EG: `Egypt`,
      SV: `El Salvador`,
      GQ: `Equatorial Guinea`,
      ER: `Eritrea`,
      EE: `Estonia`,
      ET: `Ethiopia`,
      FK: `Falkland Islands (Malvinas)`,
      FO: `Faroe Islands`,
      FJ: `Fiji`,
      FI: `Finland`,
      FR: `France`,
      GF: `French Guiana`,
      PF: `French Polynesia`,
      TF: `French Southern Territories`,
      GA: `Gabon`,
      GM: `Gambia`,
      GE: `Georgia`,
      DE: `Germany`,
      GH: `Ghana`,
      GI: `Gibraltar`,
      GR: `Greece`,
      GL: `Greenland`,
      GD: `Grenada`,
      GP: `Guadeloupe`,
      GU: `Guam`,
      GT: `Guatemala`,
      GN: `Guinea`,
      GW: `Guinea-Bissau`,
      GG: `Guernsey`,
      GY: `Guyana`,
      HT: `Haiti`,
      HM: `Heard and Mc Donald Islands`,
      VA: `Holy See(Vatican City State)`,
      HN: `Honduras`,
      HK: `Hong Kong`,
      HU: `Hungary`,
      IS: `Iceland`,
      IN: `India`,
      ID: `Indonesia`,
      IQ: `Iraq`,
      IE: `Ireland`,
      IM: `Isle of Man`,
      IL: `Israel`,
      IT: `Italy`,
      JM: `Jamaica`,
      JP: `Japan`,
      JE: `Jersey`,
      JO: `Jordan`,
      KZ: `Kazakhstan`,
      KE: `Kenya`,
      KI: `Kiribati`,
      KR: `Korea, Republic of`,
      KW: `Kuwait`,
      KG: `Kyrgyzstan`,
      LA: `Lao People's Democratic Republic`,
      LV: `Latvia`,
      LB: `Lebanon`,
      LS: `Lesotho`,
      LR: `Liberia`,
      LI: `Liechtenstein`,
      LT: `Lithuania`,
      LU: `Luxembourg`,
      LY: `Libya`,
      MO: `Macau`,
      MK: `North Macedonia, Republic of`,
      MG: `Madagascar`,
      MW: `Malawi`,
      MY: `Malaysia`,
      MV: `Maldives`,
      ML: `Mali`,
      MT: `Malta`,
      MH: `Marshall Islands`,
      MQ: `Martinique`,
      MR: `Mauritania`,
      MU: `Mauritius`,
      YT: `Mayotte`,
      MX: `Mexico`,
      FM: `Micronesia, Federated States of`,
      MD: `Moldova, Republic of`,
      MC: `Monaco`,
      MN: `Mongolia`,
      ME: `Montenegro`,
      MS: `Montserrat`,
      MA: `Morocco`,
      MZ: `Mozambique`,
      MM: `Myanmar`,
      NA: `Namibia`,
      NR: `Nauru`,
      NP: `Nepal`,
      NL: `Netherlands`,
      AN: `Netherlands Antilles`,
      NC: `New Caledonia`,
      NZ: `New Zealand`,
      NI: `Nicaragua`,
      NE: `Niger`,
      NG: `Nigeria`,
      NU: `Niue`,
      NF: `Norfolk Island`,
      MP: `Northern Mariana Islands`,
      NO: `Norway`,
      OM: `Oman`,
      PK: `Pakistan`,
      PW: `Palau`,
      PS: `Palestinian Territory, Occupied`,
      PA: `Panama`,
      PG: `Papua New Guinea`,
      PY: `Paraguay`,
      PE: `Peru`,
      PH: `Philippines`,
      PN: `Pitcairn`,
      PL: `Poland`,
      PT: `Portugal`,
      PR: `Puerto Rico`,
      QA: `Qatar`,
      RE: `Reunion`,
      RO: `Romania`,
      RU: `Russian Federation`,
      RW: `Rwanda`,
      SH: `Saint Helena`,
      KN: `Saint Kitts and Nevis`,
      LC: `Saint Lucia`,
      PM: `Saint Pierre and Miquelon`,
      VC: `Saint Vincent and the Grenadines`,
      WS: `Samoa`,
      SM: `San Marino`,
      ST: `Sao Tome and Principe`,
      SA: `Saudi Arabia`,
      SN: `Senegal`,
      RS: `Serbia`,
      SC: `Seychelles`,
      SL: `Sierra Leone`,
      SG: `Singapore`,
      SK: `Slovakia`,
      SI: `Slovenia`,
      SB: `Solomon Islands`,
      SO: `Somalia`,
      ZA: `South Africa`,
      GS: `South Georgia and the South Sandwich Islands`,
      ES: `Spain`,
      LK: `Sri Lanka`,
      SD: `Sudan`,
      SR: `Suriname`,
      SJ: `Svalbard and Jan Mayen`,
      SY: `Syria`,
      SZ: `Eswatini`,
      SE: `Sweden`,
      CH: `Switzerland`,
      TW: `Taiwan`,
      TJ: `Tajikistan`,
      TZ: `Tanzania, United Republic of`,
      TH: `Thailand`,
      TL: `Timor-Leste`,
      TG: `Togo`,
      TK: `Tokelau`,
      TO: `Tonga`,
      TT: `Trinidad and Tobago`,
      TN: `Tunisia`,
      TR: `Turkey`,
      TM: `Turkmenistan`,
      TC: `Turks and Caicos Islands`,
      TV: `Tuvalu`,
      UG: `Uganda`,
      UA: `Ukraine`,
      AE: `United Arab Emirates`,
      GB: `United Kingdom`,
      US: `United States`,
      UM: `United States Minor Outlying Islands`,
      UY: `Uruguay`,
      UZ: `Uzbekistan`,
      VU: `Vanuatu`,
      VE: `Venezuela`,
      VN: `Viet Nam`,
      VG: `Virgin Islands, British`,
      VI: `Virgin Islands, U.S.`,
      WF: `Wallis and Futuna`,
      EH: `Western Sahara`,
      YE: `Yemen`,
      ZM: `Zambia`,
      ZW: `Zimbabwe`,
    },
    eucountries: {
      AT: `Austria`,
      BE: `Belgium`,
      BG: `Bulgaria`,
      HR: `Croatia`,
      CY: `Cyprus`,
      CZ: `Czech Republic`,
      DK: `Denmark`,
      EE: `Estonia`,
      FI: `Finland`,
      FR: `France`,
      DE: `Germany`,
      GR: `Greece`,
      HU: `Hungary`,
      IE: `Ireland`,
      IT: `Italy`,
      LV: `Latvia`,
      LT: `Lithuania`,
      LU: `Luxembourg`,
      MT: `Malta`,
      NL: `Netherlands`,
      PL: `Poland`,
      PT: `Portugal`,
      RO: `Romania`,
      SK: `Slovakia`,
      SI: `Slovenia`,
      ES: `Spain`,
      SE: `Sweden`,
      GB: `United Kingdom`,
    },
    eeacountries: { NO: `Norway`, IS: `Iceland`, LI: `Liechtenstein` },
    usstates: {
      AL: `Alabama`,
      AK: `Alaska`,
      AS: `American Samoa`,
      AZ: `Arizona`,
      AR: `Arkansas`,
      CA: `California`,
      CO: `Colorado`,
      CT: `Connecticut`,
      DE: `Delaware`,
      DC: `District of Columbia`,
      FM: `Federated States of Micronesia`,
      FL: `Florida`,
      GA: `Georgia`,
      GU: `Guam`,
      HI: `Hawaii`,
      ID: `Idaho`,
      IL: `Illinois`,
      IN: `Indiana`,
      IA: `Iowa`,
      KS: `Kansas`,
      KY: `Kentucky`,
      LA: `Louisiana`,
      ME: `Maine`,
      MH: `Marshall Islands`,
      MD: `Maryland`,
      MA: `Massachusetts`,
      MI: `Michigan`,
      MN: `Minnesota`,
      MS: `Mississippi`,
      MO: `Missouri`,
      MT: `Montana`,
      NE: `Nebraska`,
      NV: `Nevada`,
      NH: `New Hampshire`,
      NJ: `New Jersey`,
      NM: `New Mexico`,
      NY: `New York`,
      NC: `North Carolina`,
      ND: `North Dakota`,
      MP: `Northern Mariana Islands`,
      OH: `Ohio`,
      OK: `Oklahoma`,
      OR: `Oregon`,
      PW: `Palau`,
      PA: `Pennsylvania`,
      PR: `Puerto Rico`,
      RI: `Rhode Island`,
      SC: `South Carolina`,
      SD: `South Dakota`,
      TN: `Tennessee`,
      TX: `Texas`,
      UT: `Utah`,
      VT: `Vermont`,
      VI: `U.S. Virgin Islands`,
      VA: `Virginia`,
      WA: `Washington`,
      WV: `West Virginia`,
      WI: `Wisconsin`,
      WY: `Wyoming`,
      AA: `Armed Forces Americas`,
      AE: `Armed Forces`,
      AP: `Armed Forces Pacific`,
    },
  },
}.countrycodes;
function xr(e, t) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !0;
    case 2:
      return !1;
    default:
      switch (t) {
        case `youtube`:
          return e.third_party_content?.youtube;
        case `vimeo`:
          return e.third_party_content?.vimeo;
        case `sketchfab`:
          return e.third_party_content?.sketchfab;
        case `generic`:
          return !1;
      }
  }
}
function Sr(e) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function Cr(e, t, n, r) {
  if (m(r)) return { version: 1, preference_state: 0 };
  if (t) {
    let t = (await Ee.GetCookiePreferences(e, {}))
      .Body()
      .toObject().preferences;
    if (t && t.version !== void 0 && t.version != 0) return t;
  }
  try {
    let e = we(Te);
    if (e) {
      let t = JSON.parse(e);
      if (t && t.version !== void 0 && t.version != 0) return t;
    }
  } catch {}
  return n in br.eucountries || n in br.eeacountries || n === `CH`
    ? { version: 1, preference_state: 4 }
    : { version: 1, preference_state: 0 };
}
function wr(e) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => Cr(e, f.logged_in, t.COUNTRY, t.EREALM),
  };
}
function Tr() {
  let e = Ce();
  return O(wr(e));
}
function Er(e) {
  let { data: t } = Tr();
  return t ? xr(t, e) : void 0;
}
function Dr() {
  let { data: e } = Tr();
  return e ? !Sr(e) : void 0;
}
var Or = 20,
  kr = /^.*youtube[^v]+v=(.{11}).*/,
  Ar = /^.*youtu\.be\/(.{11}).*/,
  jr = /^.*youtube.*\/embed\/(.{11}).*/,
  Mr = /^.*[?&]t=([^&]+)(?:&|$)/,
  Nr = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function Pr(e) {
  return (
    e?.length < Or ? void 0 : kr.exec(e) || Ar.exec(e) || jr.exec(e)
  )?.[1];
}
function Fr(e) {
  return Mr.exec(e)?.[1];
}
function Ir(e) {
  let t = Nr.exec(e);
  if (!(t?.[1] || t?.[2] || t?.[3] || t?.[4])) return;
  if (t?.[4]) return parseInt(t?.[4]);
  let n = 0;
  return (
    t?.[1] && (n += 3600 * parseInt(t[1])),
    t?.[2] && (n += 60 * parseInt(t[2])),
    t?.[3] && (n += parseInt(t[3])),
    n
  );
}
function Lr(e) {
  let t = Pr(e);
  if (!t) return;
  let n = Fr(e);
  return { strVideoID: t, nStartSeconds: n ? Ir(n) : void 0 };
}
function Rr(e) {
  let t = be(e, e.options);
  return (0, N.jsx)(`span`, { ref: t, style: { fontSize: 0 } });
}
var zr = j.forwardRef(function (e, t) {
    let { onLeave: n, onEnter: r, options: i, ...a } = e,
      o = be(e, e.options),
      s = b(o, t);
    return (0, N.jsx)(`div`, { ref: s, ...a });
  }),
  Br = 0,
  J = [];
function Vr(e) {
  if (Br == 2) e && e();
  else {
    if (Br == 0) {
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      (t.parentNode?.insertBefore(e, t), (window.onYouTubeIframeAPIReady = Ur));
    }
    e && (J.includes(e) || J.push(e));
  }
}
function Hr(e) {
  te(J, e);
}
function Ur() {
  Br = 2;
  for (let e of J) e();
  J = [];
}
var Y = class e extends j.Component {
  m_strPlayerID = ``;
  m_player = null;
  m_playerContainer = null;
  m_bPlayerReady = !1;
  static s_nPlayerIndex = 0;
  constructor(t) {
    (super(t),
      (this.m_strPlayerID = `YoutubePlayer_` + e.s_nPlayerIndex++),
      (this.state = { bYoutubeLoaded: !1 }));
  }
  componentWillUnmount() {
    (this.DestroyPlayer(), Hr(this.OnYoutubeScriptsReady));
  }
  shouldComponentUpdate(e, t) {
    if (!this.m_player) return !1;
    let n = this.props;
    return n.autoplay != e.autoplay ||
      n.controls != e.controls ||
      n.showInfo != e.showInfo ||
      n.video != e.video
      ? (this.CreatePlayer(e), !1)
      : ((n.width != e.width || n.height != e.height) &&
          this.m_bPlayerReady &&
          e.width &&
          e.height &&
          this.m_player.setSize(e.width, e.height),
        n.forcePause != e.forcePause);
  }
  componentDidUpdate(e) {
    e.forcePause != this.props.forcePause && this.ApplyForcePause();
  }
  ApplyForcePause() {
    this.m_player &&
      this.m_bPlayerReady &&
      (this.props.forcePause
        ? typeof this.m_player.pauseVideo == `function` &&
          this.m_player.pauseVideo()
        : typeof this.m_player.playVideo == `function` &&
          this.m_player.playVideo());
  }
  DestroyPlayer() {
    if (this.m_player)
      try {
        (this.m_player.stopVideo && this.m_player.stopVideo(),
          this.m_player.destroy && this.m_player.destroy());
      } catch {
      } finally {
        this.m_player = null;
      }
  }
  BindPlayerContainer(e) {
    e &&
      this.m_playerContainer != e &&
      ((this.m_playerContainer = e),
      this.DestroyPlayer(),
      Vr(this.OnYoutubeScriptsReady));
  }
  OnYoutubeScriptsReady() {
    this.CreatePlayer(this.props);
  }
  CreatePlayer(e) {
    if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
    let t = e.autoplay === !1 ? 0 : 1,
      n = +(e.showInfo === !0),
      r = +(e.controls === !0),
      i = +(e.showFullscreenBtn === !0),
      a = +(e.playsInline === !0),
      o = {
        width: e.width === void 0 ? void 0 : String(e.width),
        height: e.height === void 0 ? void 0 : String(e.height),
        videoId: e.video,
        host: `https://www.youtube-nocookie.com`,
        playerVars: {
          autoplay: t,
          showinfo: n,
          autohide: 1,
          fs: i,
          modestbranding: 1,
          rel: 0,
          playsinline: a,
          iv_load_policy: 3,
          controls: r,
          start: e.startSeconds,
        },
        events: {
          onReady: this.OnPlayerReady,
          onStateChange: this.OnPlayerStateChange,
          onError: this.OnError,
        },
      },
      s = this.m_playerContainer.firstElementChild;
    ((this.m_bPlayerReady = !1), (this.m_player = new YT.Player(s, o)));
  }
  OnPlayerReady(e) {
    if (
      ((this.m_bPlayerReady = !0),
      this.props.onVideoInfoChanged && this.m_player)
    ) {
      let e = this.m_player.getVideoData(),
        t = { strAuthor: ``, strTitle: ``, strVideoID: `` };
      (e.author && (t.strAuthor = e.author),
        e.title && (t.strTitle = e.title),
        e.video_id && (t.strVideoID = e.video_id),
        this.props.onVideoInfoChanged(t));
    }
    (this.props.width &&
      this.props.height &&
      this.m_player?.setSize(this.props.width, this.props.height),
      this.props.forcePause
        ? this.ApplyForcePause()
        : this.props.autoplay && this.m_player?.playVideo(),
      this.props.onPlayerReady && this.props.onPlayerReady());
  }
  OnPlayerStateChange(e) {
    switch (e.data) {
      case YT.PlayerState.UNSTARTED:
        break;
      case YT.PlayerState.BUFFERING:
        this.props.onBuffering && this.props.onBuffering();
        break;
      case YT.PlayerState.PLAYING:
        this.props.onPlaying && this.props.onPlaying();
        break;
      case YT.PlayerState.PAUSED:
        this.props.onPaused && this.props.onPaused();
        break;
      case YT.PlayerState.ENDED:
        this.props.onMovieEnd && this.props.onMovieEnd();
    }
  }
  OnError(e) {
    (console.log(`Youtube: Playback failed`, e),
      this.props.onError && this.props.onError(e));
  }
  OnPlayerLeftView() {
    this.props.autopause &&
      this.m_player &&
      this.m_bPlayerReady &&
      this.m_player.pauseVideo();
  }
  PlayVideo(e) {
    this.m_player &&
      this.m_bPlayerReady &&
      (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
  }
  render() {
    return (0, N.jsx)(Wr, {
      video: this.props.video,
      children: (0, N.jsx)(
        zr,
        {
          onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
          ref: this.BindPlayerContainer,
          className: E(`YoutubePlayer`, this.props.classnames),
          children: (0, N.jsx)(xe, { className: `YoutubePlayerThrobber` }),
        },
        this.m_strPlayerID,
      ),
    });
  }
};
(y([i], Y.prototype, `BindPlayerContainer`, null),
  y([i], Y.prototype, `OnYoutubeScriptsReady`, null),
  y([i], Y.prototype, `CreatePlayer`, null),
  y([i], Y.prototype, `OnPlayerReady`, null),
  y([i], Y.prototype, `OnPlayerStateChange`, null),
  y([i], Y.prototype, `OnError`, null),
  y([i], Y.prototype, `OnPlayerLeftView`, null),
  y([i], Y.prototype, `PlayVideo`, null));
function Wr(e) {
  let { video: t, children: n } = e;
  return Er(`youtube`)
    ? n
    : (0, N.jsx)(`a`, {
        href: `https://www.youtube.com/watch?v=${t}`,
        children: p(`#EventCalendar_WatchYouTubeVideo`),
      });
}
function Gr(e) {
  let t = new URLSearchParams({
    autoplay: e.autoplay ? `1` : `0`,
    controls: e.controls ? `1` : `0`,
    fs: e.showFullscreenBtn ? `1` : `0`,
    playsinline: e.playsInline ? `1` : `0`,
    rel: `0`,
    iv_load_policy: `3`,
    modestbranding: `1`,
    enablejsapi: `1`,
  });
  return (
    e.startSeconds && t.set(`start`, String(e.startSeconds)),
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(e.video)}?${t.toString()}`
  );
}
function Kr(e) {
  let { video: t, autopause: n, className: r } = e,
    i = j.useRef(null),
    a = j.useRef(null),
    o = j.useRef(void 0),
    s = j.useCallback(() => {
      typeof i.current?.pauseVideo == `function` && i.current.pauseVideo();
    }, []),
    c = j.useCallback((e) => {
      o.current = e.isIntersecting;
    }, []),
    l = be({ onLeave: n ? s : void 0, onIntersectionChange: c }),
    u = b(a, l);
  return (
    j.useEffect(() => {
      let e = () => {
          o.current === !1 && s();
        },
        t = () => {
          a.current &&
            (i.current = new YT.Player(a.current, { events: { onReady: e } }));
        };
      return (
        n && Vr(t),
        () => {
          (Hr(t), (i.current = null));
        }
      );
    }, [n, s]),
    (0, N.jsx)(`iframe`, {
      ref: u,
      className: r,
      src: Gr(e),
      title: t,
      allow: `autoplay; encrypted-media; picture-in-picture; web-share`,
      allowFullScreen: !0,
      frameBorder: 0,
    })
  );
}
function X(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function qr(e) {
  let n =
      t.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    r = await fetch(n, { credentials: `include` });
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  return await r.json();
}
function Jr(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function Yr(e, t = !0) {
  return {
    queryKey: Jr(e),
    queryFn: async () => {
      let t = await qr({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: X(n.title), description: X(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Xr(e, t = !0) {
  return O(Yr(e, t));
}
function Zr(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function Qr(e) {
  return {
    queryKey: Zr(e),
    queryFn: async () => {
      let t = await qr({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: X(n.title),
        description: X(n.description),
        type: X(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function $r(e) {
  return O(Qr(e));
}
var ei = `brm0OeRsTm4-`,
  ti = `pcxkPBR3wVQ-`,
  ni = `Mamx1lJ2lKQ-`,
  ri = `MCiiNDFcgvA-`,
  ii = `wDoQNUlMcwk-`,
  ai = `AiYAf8NbQ-E-`,
  oi = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function si(e) {
  return e == `full` ? ni : E(ti, e == `leftthumb` ? ii : ai);
}
function ci(e) {
  let {
      videoID: n,
      bShowVideoImmediately: r,
      bAutoPlay: i,
      nStartSeconds: a,
      align: o = `full`,
    } = e,
    [s, c] = (0, j.useState)(!r),
    { data: l, isSuccess: u } = Xr(n, s);
  if (s) {
    let e = l?.title ?? p(`#Loading`),
      t = l?.views ?? `0`,
      r = l?.description ?? ``,
      i = () => c(!1);
    return (0, N.jsxs)(`div`, {
      className: ur.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, N.jsx)(dr, {
          strURL: `https://img.youtube.com/vi/` + n + `/0.jpg`,
        }),
        (0, N.jsxs)(fr, {
          children: [
            (0, N.jsx)(pr, {
              children: p(`#EventEditor_YouTubeVideoTitle`, e),
            }),
            (0, N.jsx)(vr, {
              children: p(`#EventEditor_YouTubeVideoViews`, De(Number(t))),
            }),
            (0, N.jsxs)(yr, {
              children: [u && r, !u && (0, N.jsx)(xe, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, N.jsx)(Wr, {
    video: n,
    children: (0, N.jsxs)(`div`, {
      className: E(ei, si(o)),
      id: n,
      children: [
        (0, N.jsx)(`img`, {
          className: ri,
          alt: ``,
          src:
            t.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, N.jsx)(Kr, {
          video: n,
          autoplay: i ?? !1,
          startSeconds: a,
          controls: !0,
          playsInline: !0,
          autopause: !0,
          showFullscreenBtn: !0,
        }),
      ],
    }),
  });
}
function li(e, n) {
  if (t.EREALM === v.k_ESteamRealmChina) return null;
  let r = Lr(e);
  return r?.strVideoID === void 0
    ? _e(e, n?.event)
    : (0, N.jsx)(ci, {
        videoID: r.strVideoID,
        nStartSeconds: r.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function ui() {
  return t.EREALM === v.k_ESteamRealmChina;
}
function di(e) {
  if (ui()) return null;
  let t = Z(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, N.jsx)(ci, {
        videoID: t,
        align: n,
        bShowVideoImmediately: !0,
      });
    }
  }
  return (0, N.jsx)(j.Fragment, {});
}
function fi(e) {
  if (ui() || t.COUNTRY.toLocaleUpperCase() == `CN`) return $n(e);
  let n = Z(e.args, `youtubeid`),
    r = Z(e.args, `size`),
    i = Z(e.args, `seconds`);
  return (0, N.jsx)(ci, {
    videoID: n,
    nStartSeconds: i ? Number.parseInt(i) : void 0,
    align: r,
    bShowVideoImmediately: !0,
  });
}
var pi = new Map([
    [`b`, { Constructor: gi, autocloses: !1 }],
    [`i`, { Constructor: _i, autocloses: !1 }],
    [`h1`, { Constructor: Si, autocloses: !1, skipFollowingNewline: !0 }],
    [`h2`, { Constructor: Ci, autocloses: !1, skipFollowingNewline: !0 }],
    [`h3`, { Constructor: wi, autocloses: !1, skipFollowingNewline: !0 }],
    [`h4`, { Constructor: Ti, autocloses: !1, skipFollowingNewline: !0 }],
    [`h5`, { Constructor: Ei, autocloses: !1, skipFollowingNewline: !0 }],
    [`center`, { Constructor: Di, autocloses: !1 }],
    [
      `smalltext`,
      { Constructor: Oi, autocloses: !1, skipFollowingNewline: !0 },
    ],
    [`u`, { Constructor: vi, autocloses: !1 }],
    [`strike`, { Constructor: yi, autocloses: !1 }],
    [`spoiler`, { Constructor: ki, autocloses: !1 }],
    [`hr`, { Constructor: Ai, autocloses: !1 }],
    [`noparse`, { Constructor: Wi, autocloses: !1 }],
    [`url`, { Constructor: Ni, autocloses: !1 }],
    [`quote`, { Constructor: Li, autocloses: !1 }],
    [`pullquote`, { Constructor: Ri, autocloses: !1 }],
    [`code`, { Constructor: zi, autocloses: !1 }],
    [`c`, { Constructor: Bi, autocloses: !1 }],
    [`list`, { Constructor: Vi, autocloses: !1, skipInternalNewline: !0 }],
    [`olist`, { Constructor: Hi, autocloses: !1, skipInternalNewline: !0 }],
    [`*`, { Constructor: Ui, autocloses: !0, skipInternalNewline: !0 }],
    [`table`, { Constructor: Gi, autocloses: !1, skipInternalNewline: !0 }],
    [
      `tr`,
      {
        Constructor: qi,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `th`,
      {
        Constructor: Yi,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `td`,
      {
        Constructor: Xi,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `expand`,
      {
        Constructor: Qi,
        autocloses: !1,
        skipInternalNewline: !0,
        allowWrapTextForCopying: !0,
      },
    ],
    [`calendarevent`, { Constructor: $i, autocloses: !0 }],
    [`doclink`, { Constructor: Pi, autocloses: !1 }],
    [`color`, { Constructor: ji, autocloses: !1 }],
    [`bgcolor`, { Constructor: Mi, autocloses: !1 }],
    [`p`, { Constructor: bi, autocloses: !1, skipFollowingNewline: !0 }],
  ]),
  mi = new Map([
    [`looping_media`, { Constructor: Qn, autocloses: !1 }],
    [`video`, { Constructor: $n, autocloses: !1 }],
    [`youtubeorvideo`, { Constructor: fi, autocloses: !1 }],
    [`previewyoutube`, { Constructor: di, autocloses: !1 }],
  ]);
function Z(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function hi(e, t) {
  return (n) => e({ ...n, className: t });
}
function gi(e) {
  return (0, N.jsx)(`b`, { className: at, children: e.children });
}
function _i(e) {
  return (0, N.jsx)(`i`, {
    className: E(Ie, `BB_Italic`),
    children: e.children,
  });
}
function vi(e) {
  return (0, N.jsx)(`u`, { className: Fe, children: e.children });
}
function yi(e) {
  return (0, N.jsx)(`s`, { className: Be, children: e.children });
}
function bi(e) {
  return (0, N.jsxs)(`p`, {
    className: nt,
    children: [e.children, (0, N.jsx)(`wbr`, {})],
  });
}
function xi(e) {
  return (0, N.jsxs)(`div`, {
    className: nt,
    role: `paragraph`,
    children: [e.children, (0, N.jsx)(`wbr`, {})],
  });
}
function Q(e, t, n) {
  let r = Z(t.args, `id`);
  return (
    (r ||= Z(t.args)),
    r &&
      typeof r == `string` &&
      r.length > 0 &&
      r[0] === `#` &&
      (r = r.substring(1)),
    (0, N.jsx)(e, {
      id: r || void 0,
      className: E(n, t.className),
      children: t.children,
    })
  );
}
function Si(e) {
  return Q(`h1`, e, E($e, `BB_Header1`));
}
function Ci(e) {
  return Q(`h2`, e, E(Je, `BB_Header2`));
}
function wi(e) {
  return Q(`h3`, e, E(dt, `BB_Header3`));
}
function Ti(e) {
  return Q(`h4`, e, E(pt, `BB_Header4`));
}
function Ei(e) {
  return Q(`h5`, e, E(Xe, `BB_Header5`));
}
function Di(e) {
  let t = Z(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, N.jsx)(`span`, {
      id: t || void 0,
      className: E(Ye, `BB_Center`),
      children: e.children,
    })
  );
}
function Oi(e) {
  return Q(`div`, e, E(Ue, `BB_SmallText`));
}
function ki(e) {
  let [t, n] = j.useState(!1),
    r = j.useCallback(() => {
      n(!t);
    }, [t]);
  return (0, N.jsx)(S, {
    className: E(Ge, t && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: r,
    onOKActionDescription: p(
      t ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, N.jsx)(`span`, { className: Re, children: e.children }),
  });
}
function Ai(e) {
  return (0, N.jsx)(`hr`, { className: et });
}
function ji(e) {
  let t = Z(e.args);
  return (0, N.jsx)(`span`, { style: { color: t }, children: e.children });
}
function Mi(e) {
  let t = Z(e.args);
  return (0, N.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function Ni(e) {
  let t = ze(Z(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && Oe(n) && (t = ze(n));
  }
  let n = Z(e.args, `style`) == `button` ? ft : void 0,
    r = n && Z(e.args, `buttoncolor`),
    i = Z(e.args, `id`);
  return (
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    t === void 0 && !i
      ? e.children || ``
      : t === void 0 || (typeof t == `string` && t.length > 0 && t[0] == `#`)
        ? (0, N.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, N.jsx)(Fi, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function Pi(e) {
  let t = Z(e.args),
    n = Z(e.args, `style`) == `button` ? ft : void 0,
    r = n && Z(e.args, `buttoncolor`);
  return (0, N.jsx)(Fi, {
    className: n,
    style: { backgroundColor: r },
    href: `${c.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var Fi = (e) => {
  let { href: t, ...n } = e,
    r = ge(t ?? ``),
    i;
  se(r)
    ? ((r = (c.IN_CLIENT ? `steam://openurl_external/` : ``) + ae(r)),
      (i = `noopener nofollow`))
    : (r = Ae(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? ke(t)
      : void 0;
  return (0, N.jsx)(fe, {
    toolTipContent: a,
    direction: `top`,
    children: (0, N.jsx)(de, { ...n, href: r, rel: i, children: e.children }),
  });
};
function Ii(e) {
  return (0, N.jsx)(`a`, {
    className: Ze,
    href: Z(e.args),
    children: e.children,
  });
}
function Li(e) {
  let t = Z(e.args, `author`);
  return (0, N.jsxs)(`blockquote`, {
    className: E(ut, e.className),
    children: [
      !!t &&
        (0, N.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            p(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, N.jsx)(`b`, { children: t + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function Ri(e) {
  return (0, N.jsx)(`div`, { className: Pe, children: e.children });
}
function zi(e) {
  return (0, N.jsx)(`code`, { className: lt, children: e.children });
}
function Bi(e) {
  return (0, N.jsx)(`code`, { className: ot, children: e.children });
}
function Vi(e) {
  return (0, N.jsx)(`ul`, {
    className: E(qe, `bullets`),
    children: e.children,
  });
}
function Hi(e) {
  return (0, N.jsx)(`ol`, { className: We, children: e.children });
}
function Ui(e) {
  let t = Z(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, N.jsx)(`li`, { className: Le, id: t || void 0, children: e.children })
  );
}
function Wi(e) {
  return e.children;
}
function Gi(e) {
  let t = Z(e.args, `noborder`),
    n = Z(e.args, `equalcells`),
    r = Z(e.args, `colwidth`);
  return (0, N.jsxs)(`table`, {
    className: E(He, `BB_Table`, t && `b20E2IrghSY-`, n && `zJnyxE63CCk-`),
    children: [
      r &&
        (0, N.jsx)(`colgroup`, {
          children: r.split(`,`).map((e, t) => (0, N.jsx)(Ki, { width: e }, t)),
        }),
      (0, N.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function Ki(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, N.jsx)(`col`, { style: n })
  );
}
function qi(e) {
  return (0, N.jsx)(`tr`, {
    className: E(mt, `BB_TableRow`),
    children: e.children,
  });
}
function Ji(e, t) {
  let n = Z(t.args, `width`),
    r = Z(t.args, `colspan`),
    i = Z(t.args, `rowspan`),
    a = {};
  return (
    r && parseInt(r) > 1 && (a.colSpan = parseInt(r)),
    i && parseInt(i) > 1 && (a.rowSpan = parseInt(i)),
    (0, N.jsx)(e, {
      className: E(Ke, e == `td` && `BB_TableData`),
      ...a,
      style: n ? { width: n } : void 0,
      children: t.children,
    })
  );
}
function Yi(e) {
  return Ji(`th`, e);
}
function Xi(e) {
  return Ji(`td`, e);
}
function Zi(e, t, n, r) {
  switch (e) {
    case `details`:
      return {
        collapsed: `#Bbcode_Expand_Details_Collapsed`,
        expanded: `#Bbcode_Expand_Details_Expanded`,
        style: void 0,
      };
    case `spoiler`:
      return {
        collapsed: `#Bbcode_Expand_Spoiler_Collapsed`,
        expanded: `#Bbcode_Expand_Spoiler_Expanded`,
        style: void 0,
      };
    case `title`:
      return {
        collapsed: t || n || `#Bbcode_Expand_ShowMore_Collapsed`,
        expanded: t || r || `#Bbcode_Expand_ShowMore_Expanded`,
        style: it,
      };
    default:
    case `showmore`:
      return {
        collapsed: `#Bbcode_Expand_ShowMore_Collapsed`,
        expanded: `#Bbcode_Expand_ShowMore_Expanded`,
        style: void 0,
      };
  }
}
function Qi(e) {
  let t = !!Z(e.args, `expanded`),
    [n, r] = j.useState(t),
    i = Z(e.args, `title`),
    a = Z(e.args, `collapsed_str`),
    o = Z(e.args, `expanded_str`),
    s = Zi(Z(e.args, `type`), i, a, o);
  return (0, N.jsxs)(`div`, {
    className: E({
      [Qe]: !0,
      [s.style ?? ``]: s.style != null,
      [void 0]: n,
      [void 0]: !n,
      BBCodeExpanded: n,
      BBCodeCollapsed: !n,
    }),
    children: [
      (0, N.jsxs)(`div`, {
        className: st,
        onClick: () => r(!n),
        children: [
          p(n ? s.expanded : s.collapsed),
          (0, N.jsx)(`div`, {
            className: rt,
            children: (0, N.jsx)(C, { angle: n ? 180 : 0 }),
          }),
        ],
      }),
      n &&
        (0, N.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function $i(e) {
  let t = Z(e.args, `title`),
    n = Z(e.args, `start`) ?? Z(e.args, `datetime`),
    r = Z(e.args, `end`) ?? Z(e.args, `datetime`),
    i = Z(e.args, `body`) ?? null,
    a = Z(e.args, `location`) ?? null,
    o = Z(e.args, `id`) ?? ``,
    s = new Date(n),
    c = `${s.getUTCFullYear()}${(`0` + (s.getUTCMonth() + 1)).slice(-2)}${(`0` + s.getUTCDate()).slice(-2)}T${(`0` + s.getUTCHours()).slice(-2)}${(`0` + s.getUTCMinutes()).slice(-2)}00Z`,
    l = new Date(r),
    u = `${l.getUTCFullYear()}${(`0` + (l.getUTCMonth() + 1)).slice(-2)}${(`0` + l.getUTCDate()).slice(-2)}T${(`0` + l.getUTCHours()).slice(-2)}${(`0` + l.getUTCMinutes()).slice(-2)}00Z`,
    d;
  try {
    let e = `BEGIN:VCALENDAR\r
`;
    ((e += `VERSION:2.0\r
`),
      (e += `BEGIN:VEVENT\r
`),
      (e += `DTSTART:${c}\r\n`),
      (e += `DTEND:${u}\r\n`),
      (e += `SUMMARY:${t.replace(
        `
`,
        `\\n`,
      )}\r\n`),
      i &&
        (e += `DESCRIPTION:${i.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      a &&
        (e += `LOCATION:${a.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      (e += `END:VEVENT\r
`),
      (e += `END:VCALENDAR\r
`),
      (d = `data:text/calendar;charset=utf-8;base64,${Zn.fromByteArray(new TextEncoder().encode(e))}`));
  } catch (e) {
    console.error(e);
  }
  let f = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  ((f += `&text=${encodeURI(t)}`),
    (f += `&details=${encodeURI(i)}`),
    (f += `&dates=${encodeURI(c + `/` + u)}`));
  let p = (e) => {
    if (`ReactNativeWebView` in window) {
      let n = window.ReactNativeWebView,
        r = {
          event_name: `addcalendarevent`,
          tsStart: s.getTime(),
          tsEnd: l.getTime(),
          strTitle: t,
          strNotes: i,
          strLocation: a,
        };
      (n.postMessage(JSON.stringify(r)), e.preventDefault());
    }
  };
  return (0, N.jsxs)(`div`, {
    className: E(`SaleSectionCalendarEventContainer`, ct),
    id: o,
    children: [
      d &&
        (0, N.jsx)(`a`, {
          className: E(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, N.jsx)(`a`, {
        className: E(`SaleSectionCalendarEventLink`, tt),
        href: f,
        children: `Google`,
      }),
      d &&
        (0, N.jsx)(`a`, {
          className: E(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function ea(e) {
  return new bt(new vt());
}
function ta() {
  return new Map([...Array.from(pi.entries())]);
}
function na(e) {
  let { text: n, languageOverride: r } = e,
    [i] = (0, j.useState)(new xt(ta(), ea, r ?? t.LANGUAGE));
  return (0, N.jsx)(N.Fragment, { children: i.ParseBBCode(n, {}) });
}
var ra = `L3HaktJsWWA-`,
  ia = `YebKQISqLCs-`,
  aa = `Ct9yU89TArw-`,
  oa = `_7-cDUja4KeQ-`,
  sa = `PBXxHejQZTU-`,
  ca = `JX6irDhLeng-`,
  la = w((e) => {
    let n = ve(e.photo, o(t.LANGUAGE)),
      r = n ? (typeof n == `string` ? n : n[1]) : void 0,
      i = !!e.title,
      a = !!e.company;
    return (0, N.jsxs)(`div`, {
      className: aa,
      onMouseLeave: e.fnClose,
      children: [
        (0, N.jsxs)(`div`, {
          className: oa,
          children: [
            e.photo && (0, N.jsx)(`img`, { src: r }),
            (0, N.jsxs)(`div`, {
              className: sa,
              children: [
                (0, N.jsx)(`div`, { children: e.name }),
                (i || a) &&
                  (0, N.jsxs)(`div`, {
                    children: [
                      i &&
                        (0, N.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      i && a && (0, N.jsx)(`span`, { children: `, ` }),
                      a && (0, N.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, N.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, N.jsx)(na, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  $ = class e extends j.Component {
    static sm_embeddedElements = new ie(`presenter-hover-source-elements`);
    m_refAnchor = j.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      le() ||
        (this.m_fnHidePopup &&
          (this.m_fnHidePopup(),
          (this.m_fnHidePopup = null),
          window.removeEventListener(`scroll`, this.OnScroll)));
    }
    componentWillUnmount() {
      this.ClosePopup();
    }
    OnScroll() {
      Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
        this.ClosePopup();
    }
    OnHover(t) {
      let n = this.m_refAnchor.current;
      if (!n) return;
      let r = {
          direction: `right`,
          bEnablePointerEvents: !0,
          style: { maxWidth: 640, minHeight: n.clientHeight },
          target: n,
        },
        i = `presenter-hover-` + Math.floor(Math.random() * 1e8);
      ((this.m_fnHidePopup = () =>
        e.sm_embeddedElements.HideElement(n.ownerDocument, i)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        e.sm_embeddedElements.ShowElementDelayed(
          n.ownerDocument,
          150,
          (0, N.jsx)(he, {
            ...r,
            children: (0, N.jsx)(la, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, N.jsx)(`div`, {
        className: ca,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(y([i], $.prototype, `ClosePopup`, null),
  y([i], $.prototype, `OnScroll`, null),
  y([i], $.prototype, `OnHover`, null),
  y([i], $.prototype, `OnLeave`, null));
function ua(e) {
  let {
      photo: n,
      name: r,
      title: i,
      company: a,
      hidePhotoInCompactView: s,
    } = e,
    c = ve(n, o(t.LANGUAGE)),
    l = c && !s ? (typeof c == `string` ? c : c[1]) : null,
    u = !!i,
    d = !!a;
  return (0, N.jsx)(`div`, {
    className: ra,
    children: (0, N.jsx)($, {
      ...e,
      children: (0, N.jsx)(`div`, {
        className: ia,
        children: (0, N.jsxs)(`div`, {
          className: oa,
          children: [
            !!l && (0, N.jsx)(`img`, { src: l }),
            (0, N.jsxs)(`div`, {
              className: sa,
              children: [
                (0, N.jsx)(`div`, { children: r }),
                (u || d) &&
                  (0, N.jsxs)(`div`, {
                    children: [
                      u &&
                        (0, N.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: i,
                        }),
                      u && d && (0, N.jsx)(`span`, { children: `, ` }),
                      d && (0, N.jsx)(`span`, { children: a }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
export {
  Nn as $,
  Rr as A,
  _r as B,
  Ii as C,
  li as D,
  oi as E,
  Er as F,
  q as G,
  pr as H,
  mr as I,
  Rn as J,
  $n as K,
  hr as L,
  Lr as M,
  Ir as N,
  $r as O,
  Dr as P,
  R as Q,
  ur as R,
  Ni as S,
  fi as T,
  dr as U,
  gr as V,
  Qn as W,
  H as X,
  zn as Y,
  Fn as Z,
  xi as _,
  yt as _t,
  pi as a,
  Mt as at,
  yi as b,
  M as bt,
  Z as c,
  Et as ct,
  wi as d,
  Pt as dt,
  U as et,
  _i as f,
  At as ft,
  Hi as g,
  xt as gt,
  Wi as h,
  Ct as ht,
  hi as i,
  Ft as it,
  zr as j,
  Y as k,
  Si as l,
  jt as lt,
  Ui as m,
  St as mt,
  $ as n,
  In as nt,
  gi as o,
  kt as ot,
  Vi as p,
  Tt as pt,
  Un as q,
  ua as r,
  _n as rt,
  mi as s,
  Ot as st,
  la as t,
  Mn as tt,
  Ci as u,
  Dt as ut,
  Li as v,
  vt,
  di as w,
  vi as x,
  ki as y,
  bt as yt,
  fr as z,
};

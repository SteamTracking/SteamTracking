/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r, st as i } from "./libraries.js";
import { i as a } from "./clanimagemodels.js";
import { t as o } from "./basicbbcodeparser.js";
import {
  Cx as s,
  Gn as c,
  Hb as l,
  Hr as u,
  Mb as d,
  Nl as f,
  Rx as p,
  Sc as m,
  mS as h,
  yt as g,
} from "./main.js";
var _ = e(t()),
  v = n();
function y(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, v.jsx)(_.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t
            .map((e) => (e ? e.toString() : ``))
            .filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    _.Children.count(r) == 1)
  ) {
    let e = _.Children.only(r);
    return _.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, v.jsx)(_.Fragment, { children: r })
  );
}
var b = `EYdF9T-t7r0-`,
  x = `GlOJIpYSKE4-`,
  S = `JQFjcVsL4SA-`,
  C = `MHuFPh5V6r4-`,
  w = `Gwiqr5pL1cE-`,
  T = `w0e9THby0ZM-`,
  E = `_4q--1VsTk5U-`,
  D = `_669DaDTMhYs-`,
  O = `dohGHt1ixUc-`,
  k = `C9qi0C7EUeo-`,
  A = `_3XkAznD5HIU-`,
  j = `VoTYjMrv1JU-`,
  M = `iiVnY9Z6ikk-`,
  N = `KB63E0Y-xPo-`,
  P = `_7tqUEqEzFXI-`;
function F(e) {
  let { emoticon: t, large: n } = e,
    [r, i] = f(),
    [a, o] = _.useState(null),
    s = `:${t}:`,
    c = g(t, n);
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsx)(y, {
        text: s,
        style: `merge-adjacent`,
        children: (0, v.jsx)(`img`, {
          ...i,
          src: c,
          className: m(S, n ? C : void 0),
          "data-emoticon": t,
          alt: t,
          ref: o,
        }),
      }),
      r && a && (0, v.jsx)(I, { target: a, emoticon: t }),
    ],
  });
}
function I(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = L(n);
  return (0, v.jsx)(R, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, v.jsx)(F, { emoticon: n, large: !0 }),
  });
}
function L(e) {
  return i({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let t = `${l.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(l.LANGUAGE)}&origin=${self.origin}`,
        n = await fetch(t);
      if (n.status != 200)
        throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
      return await n.json();
    },
  });
}
var R = ({ target: e, title: t, subtitle: n, children: r }) =>
    (0, v.jsxs)(u, {
      target: e,
      style: { zIndex: 1700 },
      className: E,
      children: [
        r,
        (0, v.jsxs)(`div`, {
          className: D,
          children: [
            (0, v.jsx)(`div`, {
              className: O,
              children: t || (0, v.jsx)(`span`, { children: `\xA0` }),
            }),
            (0, v.jsx)(`div`, {
              className: k,
              children: n || (0, v.jsx)(`span`, { children: `\xA0` }),
            }),
          ],
        }),
      ],
    }),
  z = `L3HaktJsWWA-`,
  B = `YebKQISqLCs-`,
  V = `Ct9yU89TArw-`,
  H = `_7-cDUja4KeQ-`,
  U = `PBXxHejQZTU-`,
  W = `JX6irDhLeng-`,
  G = r((e) => {
    let t = a(e.photo, h(l.LANGUAGE)),
      n = t ? (typeof t == `string` ? t : t[1]) : void 0,
      r = !!e.title,
      i = !!e.company;
    return (0, v.jsxs)(`div`, {
      className: V,
      onMouseLeave: e.fnClose,
      children: [
        (0, v.jsxs)(`div`, {
          className: H,
          children: [
            e.photo && (0, v.jsx)(`img`, { src: n }),
            (0, v.jsxs)(`div`, {
              className: U,
              children: [
                (0, v.jsx)(`div`, { children: e.name }),
                (r || i) &&
                  (0, v.jsxs)(`div`, {
                    children: [
                      r &&
                        (0, v.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      r && i && (0, v.jsx)(`span`, { children: `, ` }),
                      i && (0, v.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, v.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, v.jsx)(o, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  K = class e extends _.Component {
    static sm_embeddedElements = new c(`presenter-hover-source-elements`);
    m_refAnchor = _.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      s() ||
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
      (this.m_fnHidePopup = () =>
        e.sm_embeddedElements.HideElement(n.ownerDocument, i)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        e.sm_embeddedElements.ShowElementDelayed(
          n.ownerDocument,
          150,
          (0, v.jsx)(u, {
            ...r,
            children: (0, v.jsx)(G, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        );
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, v.jsx)(`div`, {
        className: W,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
d([p], K.prototype, `ClosePopup`, null),
  d([p], K.prototype, `OnScroll`, null),
  d([p], K.prototype, `OnHover`, null),
  d([p], K.prototype, `OnLeave`, null);
function q(e) {
  let {
      photo: t,
      name: n,
      title: r,
      company: i,
      hidePhotoInCompactView: o,
    } = e,
    s = a(t, h(l.LANGUAGE)),
    c = s && !o ? (typeof s == `string` ? s : s[1]) : null,
    u = !!r,
    d = !!i;
  return (0, v.jsx)(`div`, {
    className: z,
    children: (0, v.jsx)(K, {
      ...e,
      children: (0, v.jsx)(`div`, {
        className: B,
        children: (0, v.jsxs)(`div`, {
          className: H,
          children: [
            !!c && (0, v.jsx)(`img`, { src: c }),
            (0, v.jsxs)(`div`, {
              className: U,
              children: [
                (0, v.jsx)(`div`, { children: n }),
                (u || d) &&
                  (0, v.jsxs)(`div`, {
                    children: [
                      u &&
                        (0, v.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: r,
                        }),
                      u && d && (0, v.jsx)(`span`, { children: `, ` }),
                      d && (0, v.jsx)(`span`, { children: i }),
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
  R as a,
  j as c,
  b as d,
  M as f,
  F as i,
  P as l,
  A as m,
  K as n,
  N as o,
  w as p,
  q as r,
  T as s,
  G as t,
  x as u,
};

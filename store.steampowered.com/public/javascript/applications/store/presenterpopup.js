/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  ft as n,
  it as r,
  l as i,
  st as a,
} from "./chunk~01cfc309bf.js";
import { kt as o } from "./chunk~6b8ddcaac8.js";
import { i as s } from "./chunk~4c761eb6f4.js";
import { t as c } from "./chunk~eefd71512b.js";
import { c as l, n as u, t as d } from "./chunk~6cf3fe3e07.js";
import {
  Bc as f,
  Br as p,
  Dr as m,
  Gr as h,
  Hc as ee,
  Jn as g,
  Jy as _,
  Kc as v,
  Lb as y,
  Ll as te,
  Or as ne,
  Ox as re,
  Qx as ie,
  Rc as ae,
  So as oe,
  TS as b,
  Uc as se,
  Ux as x,
  Wc as ce,
  Wy as S,
  Zy as le,
  _t as ue,
  cx as C,
  hS as w,
  jc as de,
  ol as fe,
  qb as T,
  vt as pe,
  wc as E,
  yS as D,
  zc as me,
} from "./main.js";
var O = e(t(), 1),
  k = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              O.createElement(
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
  he = class {
    m_decoratedAccumulator;
    constructor(e) {
      (ie(e, `decorated accumulator cannot be null`),
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
  A = class extends he {
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
          n.push(O.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  ge = class {
    m_fnAccumulatorFactory;
    m_dictComponents;
    constructor(e, t) {
      ((this.m_dictComponents =
        e instanceof Map ? e : new Map(Object.entries(e))),
        (this.m_fnAccumulatorFactory = t));
    }
    Parse(e, t, n = !0) {
      let r = _e(e || ``, n);
      return this.Parse_BuildElements(r, t);
    }
    Parse_BuildElements(e, t) {
      let n = this.m_fnAccumulatorFactory(void 0),
        r = [],
        i = () => (r.length < 1 ? void 0 : r[r.length - 1]),
        a = this.m_dictComponents,
        o = (e) => !!(e.tag && a.get(e.tag)?.autocloses),
        s = !1,
        c = !0,
        l = (e, r) => {
          let i = r.text.toLowerCase();
          if (e && e.node.tag === i && a.get(e.node.tag)) {
            let r = a.get(e.node.tag),
              i = {
                tagname: e.node.tag,
                args: e.node.args,
                rawargs: e.node.rawargs,
              },
              o = t(r.Constructor, i, ...n.GetElements());
            ((n = e.accumulator),
              Array.isArray(o)
                ? o.forEach((e) => n.AppendNode(e))
                : n.AppendNode(o),
              (s = !!r.skipFollowingNewline),
              (c = e.bWrapTextForCopying));
          } else if (e) {
            let t = e.accumulator;
            (t.AppendText(`[` + e.node.text + `]`, !1),
              n.GetElements().forEach((e) => t.AppendNode(e)),
              t.AppendText(`[/` + r.text + `]`, !1),
              (n = t),
              (c = e.bWrapTextForCopying));
          }
        };
      for (
        e.forEach((e, t) => {
          if (e.type == 1) {
            let t = s ? e.text.replace(/^[\t\r ]*\n/g, ``) : e.text;
            (n.AppendText(t, c), (s = !1));
          } else if (e.type == 2) {
            let t = a.get(e.tag);
            if (!t) n.AppendText(`[` + e.text + `]`, r.length == 0);
            else {
              let o = i();
              if (o !== void 0) {
                let t = a.get(o.node.tag);
                t && t.autocloses && e.tag === o.node.tag && l(r.pop(), o.node);
              }
              (r.push({ accumulator: n, node: e, bWrapTextForCopying: c }),
                (n = this.m_fnAccumulatorFactory(e)),
                (s = !!t.skipInternalNewline),
                (c = t.allowWrapTextForCopying ?? !1));
            }
          } else if (e.type == 3) {
            let t = e.text.toLowerCase();
            for (; i() && i().node.tag !== t && o(i().node);) {
              let e = r.pop();
              l(e, e.node);
            }
            if (i()?.node.tag == t) {
              let t = r.pop();
              l(t, e);
            } else n.AppendText(`[/` + e.text + `]`, r.length == 0);
          }
        });
        r.length > 0;
      ) {
        let e = r.pop();
        l(e, e.node);
      }
      return n.GetElements();
    }
  };
function j(e, t, n = 0) {
  let { type: r, text: i = `` } = t;
  if (r == 2) {
    let t = i.indexOf(`=`),
      n = i.indexOf(` `);
    n != -1 && (t == -1 || n < t) && (t = n);
    let a,
      o,
      s = ``;
    (t > 0
      ? ((a = i.substr(0, t).toLocaleLowerCase()),
        (s = i.substr(t)),
        (o = ve(s)))
      : ((o = {}), (a = i.toLocaleLowerCase())),
      e.push({ type: r, text: i, tag: a, args: o, rawargs: s }));
  } else r != 0 && e.push({ type: r, text: i });
  return { type: n, text: `` };
}
function M(e) {
  let t = ``;
  return (
    e.type == 3 ? (t = `[/`) : e.type == 2 && (t = `[`),
    { type: 1, text: t + (e.text ?? ``) }
  );
}
function _e(e, t) {
  let n = [],
    r = { type: 0, text: `` },
    i = !1,
    a = !1,
    o = !1;
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    switch (r.type) {
      case 0:
        c == `[`
          ? ((r.type = 2), (a = !0))
          : ((r.type = 1), c == `\\` && t ? (i = !i) : (r.text += c));
        break;
      case 2:
      case 3:
        if (c == `/` && a) ((r.type = 3), (r.text = ``), (a = !1));
        else if (c == `[` && !i) ((r = j(n, M(r), 2)), (a = !0));
        else if (c == `]` && !i) {
          let e = r.type == 2 && r.text?.toLocaleLowerCase() == `noparse`,
            t = r.type == 3 && r.text?.toLocaleLowerCase() == `noparse`;
          (a || (o && !t)
            ? ((r = M(r)), (r.text += c))
            : e
              ? (o = !0)
              : t && (o = !1),
            (r = j(n, r)),
            (a = !1));
        } else
          c == `\\` && t
            ? ((r.text += c), (i = !i), (a = !1))
            : ((r.text += c), (i = !1), (a = !1));
        break;
      case 1:
        c == `[` && !i
          ? ((r = j(n, r, 2)), (a = !0))
          : c == `\\` && t
            ? (i && (r.text += c), (i = !i))
            : ((r.text += c), (i = !1));
    }
  }
  return (
    r.type != 0 &&
      (r.type == 2 || r.type == 3
        ? n.push(M(r))
        : n.push({ type: r.type, text: r.text ?? `` })),
    n
  );
}
function ve(e) {
  if (!e || e.length < 1) return {};
  let t = {},
    n = ``,
    r = ``,
    i = 0,
    a = 0;
  e[0] == `=` && (i = 2);
  let o = !1;
  for (a++; a < e.length; a++) {
    let s = e[a],
      c = !0,
      l = !1;
    switch (i) {
      case 0:
        if (s == `=`) return {};
        if (s == ` `) continue;
        i = 1;
        break;
      case 1:
        (s != `=` && s != ` `) ||
          o ||
          (s == ` ` ? ((i = 0), (l = !0)) : (i = 2), (c = !1));
        break;
      case 2:
        s == ` `
          ? ((i = 0), (c = !1), (l = !0))
          : s == `"`
            ? ((i = 4), (c = !1))
            : (i = 3);
        break;
      case 3:
      case 4:
        ((s == ` ` && i != 4 && !o) || (s == `"` && i == 4 && !o)) &&
          ((i = 0), (c = !1), (l = !0));
    }
    if (c) {
      if (s == `\\` && !o) o = !0;
      else if (((o = !1), i == 1)) n += s;
      else if (i == 3 || i == 4) r += s;
      else throw Error(`Not expecting to accumulate buffer in state ` + i);
    }
    l && ((t[n] = r), (n = ``), (r = ``));
  }
  return (i != 0 && (t[n] = r), t);
}
var ye = class extends ge {
  m_renderingLanguage;
  constructor(e, t, n) {
    (super(e, t ?? (() => new k())),
      (this.m_renderingLanguage = typeof n == `string` ? D(n) : n));
  }
  UpdateOverrideLanguage(e) {
    this.m_renderingLanguage = e;
  }
  ParseBBCode(e, t, n = !0) {
    let r = 0,
      i = this.Parse(
        e,
        (e, n, ...i) =>
          O.createElement(
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
      ? O.createElement(O.Fragment, null, ...i)
      : i.length == 1
        ? i[0]
        : null;
  }
};
function N(e) {
  if (!e) return e;
  let t = e.trim(),
    n = t
      .replace(/^[\u0000-\u0020]+/, ``)
      .replace(/[\t\n\r]/g, ``)
      .toLowerCase();
  return n.startsWith(`javascript:`) ||
    n.startsWith(`data:`) ||
    n.startsWith(`vbscript:`)
    ? ``
    : t;
}
var P = n(),
  be = `DGBHQeifcPs-`,
  xe = `dYxCj-H04rc-`,
  Se = `JHqvAwJwrJY-`,
  Ce = `B6fjudO6zcI-`,
  we = `CO-1c2JJaiA-`,
  Te = `bUyTklHzOxI-`,
  Ee = `BfhKYW6TTzA-`,
  De = `cy-zo5afOio-`,
  Oe = `SOW8GvMXTHk-`,
  ke = `x9MpgTrN4Ww-`,
  Ae = `i1AHn-0vXik-`,
  je = `_2TfKaaLCT2o-`,
  Me = `LIXVgsnL-4M-`,
  Ne = `K-jxiBASh0s-`,
  Pe = `-eZXYCqUwL8-`,
  Fe = `gK4c0jTYof8-`,
  Ie = `HEUr5N26q0w-`,
  Le = `_1fCwA2q2sU4-`,
  Re = `_9zPcl3a3vcw-`,
  ze = `SA3Jp-lZuK8-`,
  Be = `-zMHRhhepPU-`,
  Ve = `oJ15Z0k4q2M-`,
  He = `sOsaxzBzN2Q-`,
  Ue = `nqnnf2IPKes-`,
  We = `-CpmJ6WkwpQ-`,
  Ge = `WuW68UdAsvI-`,
  Ke = `NKJXBcarNSw-`,
  qe = `v27si2jXkow-`,
  Je = `_6yveHYc0OtM-`,
  Ye = `wf2m1NyifjE-`,
  Xe = `YBHm3uck7ds-`,
  Ze = `lnrpYhOnF4E-`,
  F = `oNRva9jZn5I-`,
  Qe = `TMyoK8naM1k-`,
  $e = `_94faQspIw2E-`,
  et = `C-B3bdlHS0I-`;
function tt(e) {
  return !(
    (!me(e.sPoster) && !f(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !f(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !f(e.sURL)))
  );
}
var I = class e {
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
  L = (0, O.forwardRef)(function (e, t) {
    let {
        video: n,
        bAutoPlay: r,
        bControls: i,
        bLoop: a,
        bMuted: o,
        className: s,
        mediaScale: c,
        flAspectRatio: l,
        onClick: u,
        altText: d,
      } = e,
      f = (0, O.useMemo)(
        () =>
          !!n.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [n.rgVideoTracks],
      ),
      [p, m] = O.useState(!1),
      h = nt();
    if (!n.rgVideoSources || !n.rgVideoSources.length) return null;
    let ee = tt(n),
      g;
    (!ee || (f && T.EUNIVERSE == 1)) && (g = `anonymous`);
    let _ = o || (r && I.Get().BVolumePreferenceMuted()),
      v = n.sPoster ? R(n.sPoster, h) : ``;
    return (0, P.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: r,
      muted: _,
      playsInline: !0,
      controls: i,
      poster: v,
      loop: a,
      crossOrigin: g,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        p && I.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          i = I.Get().BUserHasVolumePreference();
        if ((m(!0), n)) {
          if (!i && !r) {
            let e = t.muted ? 0 : t.volume;
            I.Get().SetVolumePreference(e);
          } else
            i &&
              ((t.volume = I.Get().GetVolumePreference()),
              (t.muted = I.Get().BVolumePreferenceMuted()));
        }
      },
      ref: t,
      className: s,
      onClick: u,
      "aria-label": d,
      style: {
        width: c && c >= 1 && c < 100 ? `${c}%` : void 0,
        aspectRatio: l || void 0,
      },
      children: [
        (0, P.jsx)(rt, {
          rgVideoSources: n.rgVideoSources,
          strCacheBreakOrigin: h,
        }),
        (0, P.jsx)(it, {
          rgVideoTracks: n.rgVideoTracks,
          strCacheBreakOrigin: h,
        }),
      ],
    });
  });
function nt() {
  let e = window.location.href,
    t = [
      T.STORE_BASE_URL,
      T.COMMUNITY_BASE_URL,
      T.PARTNER_BASE_URL,
      T.HELP_BASE_URL,
      T.STATS_BASE_URL,
      T.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (t) return t;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function R(e, t) {
  if (e) {
    if (me(e)) return e;
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
function rt(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, P.jsx)(`source`, { src: R(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function it(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, P.jsx)(
          at,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function at(e) {
  let { track: t, rgVideoTracks: n, strCacheBreakOrigin: r } = e,
    i = t.eLanguage;
  if (T.EREALM == b.k_ESteamRealmChina) {
    if (S.IsELanguageValidInRealm(i, b.k_ESteamRealmChina))
      i = S.GetELanguageFallback(i);
    else if (i === 6) {
      if (n.find((e) => S.GetELanguageFallback(e.eLanguage) === i)) return null;
    } else return null;
  } else if (!S.IsELanguageValidInRealm(i, b.k_ESteamRealmGlobal)) return null;
  return (0, P.jsx)(`track`, {
    src: R(t.sURL, r),
    kind: t.sKind,
    default: t.bDefault,
    srcLang: w(i),
    label: le(i),
  });
}
var ot = e(r());
function z(e) {
  let t = X(e, `poster`);
  t &&= v(t);
  let n = [];
  {
    let t = X(e, `mp4`);
    t && n.push({ sURL: v(t), sFormat: `video/mp4` });
    let r = X(e, `webm`);
    r && n.push({ sURL: v(r), sFormat: `video/webm` });
  }
  let r = D(C.LANGUAGE),
    i = r != 0,
    a = [];
  for (let t = 0; t < 32; t++) {
    let n = X(e, `sub_` + w(t));
    n &&
      a.push({
        sURL: v(n),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: i && t == r,
      });
    let o = X(e, `cap_` + w(t));
    o &&
      a.push({
        sURL: v(o),
        eLanguage: t,
        sKind: `captions`,
        bDefault: i && t == r,
      });
  }
  return { sPoster: t, rgVideoSources: n, rgVideoTracks: a };
}
function st(e) {
  let t = z(e.args);
  return (0, P.jsx)(L, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function B(e) {
  let t = z(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: v(n), sFormat: `video/webm` });
  let r = X(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = X(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = X(e.args, `loop`);
  return (0, P.jsx)(L, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var ct = `m6bojdeQzBM-`,
  V = `KNKcwZZR0so-`,
  lt = `OACV7AX319w-`,
  ut = `D7GTf0-swcc-`,
  dt = `oknukvR2bfs-`,
  ft = `Kvlx6JWGlW4-`,
  pt = `L7AE1SvWgtA-`,
  mt = `_7iMZXddr1CI-`,
  ht = `sNG-BnwzjYs-`,
  gt = `maYcJlnc0JU-`,
  _t = `akuZJwBr6xc-`,
  vt = `ZfFIRgkpA2M-`,
  H = { Box: ct, Preview: V, Type: void 0 };
function U(e) {
  return (0, P.jsx)(`img`, {
    className: V,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function W(e) {
  return (0, P.jsx)(`div`, { className: pt, children: e.children });
}
function G(e) {
  return (0, P.jsx)(`div`, { className: mt, children: e.children });
}
function yt(e) {
  return (0, P.jsx)(`div`, { className: lt, children: e.children });
}
function bt(e) {
  return (0, P.jsx)(`span`, { className: _t, children: e.children });
}
function xt(e) {
  return (0, P.jsx)(`div`, { className: ut, children: e.children });
}
function St(e) {
  return (0, P.jsx)(`span`, { className: vt, children: e.children });
}
function K(e) {
  return (0, P.jsx)(`div`, { className: ht, children: e.children });
}
function Ct(e) {
  return (0, P.jsx)(`div`, { className: gt, children: e.children });
}
function q(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function J(e) {
  let t =
      T.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return await n.json();
}
function wt(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function Tt(e, t = !0) {
  return {
    queryKey: wt(e),
    queryFn: async () => {
      let t = await J({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: q(n.title), description: q(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Et(e, t = !0) {
  return a(Tt(e, t));
}
function Dt(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function Ot(e) {
  return {
    queryKey: Dt(e),
    queryFn: async () => {
      let t = await J({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: q(n.title),
        description: q(n.description),
        type: q(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function kt(e) {
  return a(Ot(e));
}
var At = `brm0OeRsTm4-`,
  jt = `pcxkPBR3wVQ-`,
  Mt = `Mamx1lJ2lKQ-`,
  Nt = `MCiiNDFcgvA-`,
  Pt = `wDoQNUlMcwk-`,
  Ft = `AiYAf8NbQ-E-`,
  It = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function Lt(e) {
  return e == `full` ? Mt : E(jt, e == `leftthumb` ? Pt : Ft);
}
function Y(e) {
  let {
      videoID: t,
      bShowVideoImmediately: n,
      bAutoPlay: r,
      nStartSeconds: i,
      align: a = `full`,
    } = e,
    [o, s] = (0, O.useState)(!n),
    { data: l, isSuccess: f } = Et(t, o);
  if (o) {
    let e = l?.title ?? _(`#Loading`),
      n = l?.views ?? `0`,
      r = l?.description ?? ``,
      i = () => s(!1);
    return (0, P.jsxs)(`div`, {
      className: H.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, P.jsx)(U, { strURL: `https://img.youtube.com/vi/` + t + `/0.jpg` }),
        (0, P.jsxs)(W, {
          children: [
            (0, P.jsx)(G, { children: _(`#EventEditor_YouTubeVideoTitle`, e) }),
            (0, P.jsx)(K, {
              children: _(`#EventEditor_YouTubeVideoViews`, pe(Number(n))),
            }),
            (0, P.jsxs)(Ct, {
              children: [f && r, !f && (0, P.jsx)(c, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, P.jsx)(d, {
    video: t,
    children: (0, P.jsxs)(`div`, {
      className: E(At, Lt(a)),
      id: t,
      children: [
        (0, P.jsx)(`img`, {
          className: Nt,
          alt: ``,
          src:
            T.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, P.jsx)(u, {
          video: t,
          autoplay: r ?? !1,
          startSeconds: i,
          controls: !0,
          playsInline: !0,
          autopause: !0,
          showFullscreenBtn: !0,
        }),
      ],
    }),
  });
}
function Rt(e, t) {
  if (T.EREALM === b.k_ESteamRealmChina) return null;
  let n = l(e);
  return n?.strVideoID === void 0
    ? o(e, t?.event)
    : (0, P.jsx)(Y, {
        videoID: n.strVideoID,
        nStartSeconds: n.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function zt() {
  return T.EREALM === b.k_ESteamRealmChina;
}
function Bt(e) {
  if (zt()) return null;
  let t = X(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, P.jsx)(Y, { videoID: t, align: n, bShowVideoImmediately: !0 });
    }
  }
  return (0, P.jsx)(O.Fragment, {});
}
function Vt(e) {
  if (zt() || T.COUNTRY.toLocaleUpperCase() == `CN`) return B(e);
  let t = X(e.args, `youtubeid`),
    n = X(e.args, `size`),
    r = X(e.args, `seconds`);
  return (0, P.jsx)(Y, {
    videoID: t,
    nStartSeconds: r ? Number.parseInt(r) : void 0,
    align: n,
    bShowVideoImmediately: !0,
  });
}
var Ht = new Map([
  [`b`, { Constructor: Wt, autocloses: !1 }],
  [`i`, { Constructor: Gt, autocloses: !1 }],
  [`h1`, { Constructor: Xt, autocloses: !1, skipFollowingNewline: !0 }],
  [`h2`, { Constructor: Zt, autocloses: !1, skipFollowingNewline: !0 }],
  [`h3`, { Constructor: Qt, autocloses: !1, skipFollowingNewline: !0 }],
  [`h4`, { Constructor: $t, autocloses: !1, skipFollowingNewline: !0 }],
  [`h5`, { Constructor: en, autocloses: !1, skipFollowingNewline: !0 }],
  [`center`, { Constructor: tn, autocloses: !1 }],
  [`smalltext`, { Constructor: nn, autocloses: !1, skipFollowingNewline: !0 }],
  [`u`, { Constructor: Kt, autocloses: !1 }],
  [`strike`, { Constructor: qt, autocloses: !1 }],
  [`spoiler`, { Constructor: rn, autocloses: !1 }],
  [`hr`, { Constructor: an, autocloses: !1 }],
  [`noparse`, { Constructor: _n, autocloses: !1 }],
  [`url`, { Constructor: cn, autocloses: !1 }],
  [`quote`, { Constructor: un, autocloses: !1 }],
  [`pullquote`, { Constructor: dn, autocloses: !1 }],
  [`code`, { Constructor: fn, autocloses: !1 }],
  [`c`, { Constructor: pn, autocloses: !1 }],
  [`list`, { Constructor: mn, autocloses: !1, skipInternalNewline: !0 }],
  [`olist`, { Constructor: hn, autocloses: !1, skipInternalNewline: !0 }],
  [`*`, { Constructor: gn, autocloses: !0, skipInternalNewline: !0 }],
  [`table`, { Constructor: vn, autocloses: !1, skipInternalNewline: !0 }],
  [
    `tr`,
    {
      Constructor: bn,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `th`,
    {
      Constructor: Sn,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `td`,
    {
      Constructor: Cn,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `expand`,
    {
      Constructor: Tn,
      autocloses: !1,
      skipInternalNewline: !0,
      allowWrapTextForCopying: !0,
    },
  ],
  [`calendarevent`, { Constructor: En, autocloses: !0 }],
  [`doclink`, { Constructor: ln, autocloses: !1 }],
  [`color`, { Constructor: on, autocloses: !1 }],
  [`bgcolor`, { Constructor: sn, autocloses: !1 }],
  [`p`, { Constructor: Jt, autocloses: !1, skipFollowingNewline: !0 }],
]);
function X(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function Ut(e, t) {
  return (n) => e({ ...n, className: t });
}
function Wt(e) {
  return (0, P.jsx)(`b`, { className: be, children: e.children });
}
function Gt(e) {
  return (0, P.jsx)(`i`, {
    className: E(xe, `BB_Italic`),
    children: e.children,
  });
}
function Kt(e) {
  return (0, P.jsx)(`u`, { className: Ne, children: e.children });
}
function qt(e) {
  return (0, P.jsx)(`s`, { className: Pe, children: e.children });
}
function Jt(e) {
  return (0, P.jsxs)(`p`, {
    className: Se,
    children: [e.children, (0, P.jsx)(`wbr`, {})],
  });
}
function Yt(e) {
  return (0, P.jsxs)(`div`, {
    className: Se,
    role: `paragraph`,
    children: [e.children, (0, P.jsx)(`wbr`, {})],
  });
}
function Z(e, t, n) {
  let r = X(t.args, `id`);
  return (
    (r ||= X(t.args)),
    r &&
      typeof r == `string` &&
      r.length > 0 &&
      r[0] === `#` &&
      (r = r.substring(1)),
    (0, P.jsx)(e, {
      id: r || void 0,
      className: E(n, t.className),
      children: t.children,
    })
  );
}
function Xt(e) {
  return Z(`h1`, e, E(Ee, `BB_Header1`));
}
function Zt(e) {
  return Z(`h2`, e, E(De, `BB_Header2`));
}
function Qt(e) {
  return Z(`h3`, e, E(Oe, `BB_Header3`));
}
function $t(e) {
  return Z(`h4`, e, E(ke, `BB_Header4`));
}
function en(e) {
  return Z(`h5`, e, E(Ae, `BB_Header5`));
}
function tn(e) {
  let t = X(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, P.jsx)(`span`, {
      id: t || void 0,
      className: E(je, `BB_Center`),
      children: e.children,
    })
  );
}
function nn(e) {
  return Z(`div`, e, E(Me, `BB_SmallText`));
}
function rn(e) {
  let [t, n] = O.useState(!1),
    r = O.useCallback(() => {
      n(!t);
    }, [t]);
  return (0, P.jsx)(de, {
    className: E(Fe, t && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: r,
    onOKActionDescription: _(
      t ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, P.jsx)(`span`, { className: Ie, children: e.children }),
  });
}
function an(e) {
  return (0, P.jsx)(`hr`, { className: We });
}
function on(e) {
  let t = X(e.args);
  return (0, P.jsx)(`span`, { style: { color: t }, children: e.children });
}
function sn(e) {
  let t = X(e.args);
  return (0, P.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function cn(e) {
  let t = N(X(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && ce(n) && (t = N(n));
  }
  let n = X(e.args, `style`) == `button` ? F : void 0,
    r = n && X(e.args, `buttoncolor`),
    i = X(e.args, `id`);
  return (
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    t === void 0 && !i
      ? e.children || ``
      : t === void 0 || (typeof t == `string` && t.length > 0 && t[0] == `#`)
        ? (0, P.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, P.jsx)(Q, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function ln(e) {
  let t = X(e.args),
    n = X(e.args, `style`) == `button` ? F : void 0,
    r = n && X(e.args, `buttoncolor`);
  return (0, P.jsx)(Q, {
    className: n,
    style: { backgroundColor: r },
    href: `${C.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var Q = (e) => {
  let { href: t, ...n } = e,
    r = ae(t ?? ``),
    i;
  m(r)
    ? ((r = (C.IN_CLIENT ? `steam://openurl_external/` : ``) + ne(r)),
      (i = `noopener nofollow`))
    : (r = se(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? ee(t)
      : void 0;
  return (0, P.jsx)(p, {
    toolTipContent: a,
    direction: `top`,
    children: (0, P.jsx)(fe, { ...n, href: r, rel: i, children: e.children }),
  });
};
function un(e) {
  let t = X(e.args, `author`);
  return (0, P.jsxs)(`blockquote`, {
    className: E(Le, e.className),
    children: [
      !!t &&
        (0, P.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            _(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, P.jsx)(`b`, { children: t + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function dn(e) {
  return (0, P.jsx)(`div`, { className: Re, children: e.children });
}
function fn(e) {
  return (0, P.jsx)(`code`, { className: Be, children: e.children });
}
function pn(e) {
  return (0, P.jsx)(`code`, { className: ze, children: e.children });
}
function mn(e) {
  return (0, P.jsx)(`ul`, {
    className: E(Ve, `bullets`),
    children: e.children,
  });
}
function hn(e) {
  return (0, P.jsx)(`ol`, { className: He, children: e.children });
}
function gn(e) {
  let t = X(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, P.jsx)(`li`, { className: Ue, id: t || void 0, children: e.children })
  );
}
function _n(e) {
  return e.children;
}
function vn(e) {
  let t = X(e.args, `noborder`),
    n = X(e.args, `equalcells`),
    r = X(e.args, `colwidth`);
  return (0, P.jsxs)(`table`, {
    className: E(Ge, `BB_Table`, t && `b20E2IrghSY-`, n && `zJnyxE63CCk-`),
    children: [
      r &&
        (0, P.jsx)(`colgroup`, {
          children: r.split(`,`).map((e, t) => (0, P.jsx)(yn, { width: e }, t)),
        }),
      (0, P.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function yn(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, P.jsx)(`col`, { style: n })
  );
}
function bn(e) {
  return (0, P.jsx)(`tr`, {
    className: E(Ke, `BB_TableRow`),
    children: e.children,
  });
}
function xn(e, t) {
  let n = X(t.args, `width`),
    r = X(t.args, `colspan`),
    i = X(t.args, `rowspan`),
    a = {};
  return (
    r && parseInt(r) > 1 && (a.colSpan = parseInt(r)),
    i && parseInt(i) > 1 && (a.rowSpan = parseInt(i)),
    (0, P.jsx)(e, {
      className: E(qe, e == `td` && `BB_TableData`),
      ...a,
      style: n ? { width: n } : void 0,
      children: t.children,
    })
  );
}
function Sn(e) {
  return xn(`th`, e);
}
function Cn(e) {
  return xn(`td`, e);
}
function wn(e, t, n, r) {
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
        style: Ze,
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
function Tn(e) {
  let t = !!X(e.args, `expanded`),
    [n, r] = O.useState(t),
    i = X(e.args, `title`),
    a = X(e.args, `collapsed_str`),
    o = X(e.args, `expanded_str`),
    s = wn(X(e.args, `type`), i, a, o);
  return (0, P.jsxs)(`div`, {
    className: E({
      [Je]: !0,
      [s.style ?? ``]: s.style != null,
      [void 0]: n,
      [void 0]: !n,
      BBCodeExpanded: n,
      BBCodeCollapsed: !n,
    }),
    children: [
      (0, P.jsxs)(`div`, {
        className: Ye,
        onClick: () => r(!n),
        children: [
          _(n ? s.expanded : s.collapsed),
          (0, P.jsx)(`div`, {
            className: Xe,
            children: (0, P.jsx)(oe, { angle: n ? 180 : 0 }),
          }),
        ],
      }),
      n &&
        (0, P.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function En(e) {
  let t = X(e.args, `title`),
    n = X(e.args, `start`) ?? X(e.args, `datetime`),
    r = X(e.args, `end`) ?? X(e.args, `datetime`),
    i = X(e.args, `body`) ?? null,
    a = X(e.args, `location`) ?? null,
    o = X(e.args, `id`) ?? ``,
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
      (d = `data:text/calendar;charset=utf-8;base64,${ot.fromByteArray(new TextEncoder().encode(e))}`));
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
  return (0, P.jsxs)(`div`, {
    className: E(`SaleSectionCalendarEventContainer`, $e),
    id: o,
    children: [
      d &&
        (0, P.jsx)(`a`, {
          className: E(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, P.jsx)(`a`, {
        className: E(`SaleSectionCalendarEventLink`, et),
        href: f,
        children: `Google`,
      }),
      d &&
        (0, P.jsx)(`a`, {
          className: E(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function Dn(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, P.jsx)(O.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t.map((e) => (e ? e.toString() : ``)).filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    O.Children.count(r) == 1)
  ) {
    let e = O.Children.only(r);
    return O.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, P.jsx)(O.Fragment, { children: r })
  );
}
var On = `EYdF9T-t7r0-`,
  kn = `GlOJIpYSKE4-`,
  An = `JQFjcVsL4SA-`,
  jn = `MHuFPh5V6r4-`,
  Mn = `Gwiqr5pL1cE-`,
  Nn = `w0e9THby0ZM-`,
  Pn = `_4q--1VsTk5U-`,
  Fn = `_669DaDTMhYs-`,
  In = `dohGHt1ixUc-`,
  Ln = `C9qi0C7EUeo-`,
  Rn = `_3XkAznD5HIU-`,
  zn = `VoTYjMrv1JU-`,
  Bn = `iiVnY9Z6ikk-`,
  Vn = `KB63E0Y-xPo-`,
  Hn = `_7tqUEqEzFXI-`;
function Un(e) {
  let { emoticon: t, large: n } = e,
    [r, i] = te(),
    [a, o] = O.useState(null),
    s = `:${t}:`,
    c = ue(t, n);
  return (0, P.jsxs)(P.Fragment, {
    children: [
      (0, P.jsx)(Dn, {
        text: s,
        style: `merge-adjacent`,
        children: (0, P.jsx)(`img`, {
          ...i,
          src: c,
          className: E(An, n ? jn : void 0),
          "data-emoticon": t,
          alt: t,
          ref: o,
        }),
      }),
      r && a && (0, P.jsx)(Wn, { target: a, emoticon: t }),
    ],
  });
}
function Wn(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = Gn(n);
  return (0, P.jsx)(Kn, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, P.jsx)(Un, { emoticon: n, large: !0 }),
  });
}
function Gn(e) {
  return a({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let t = `${T.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(T.LANGUAGE)}&origin=${self.origin}`,
        n = await fetch(t);
      if (n.status != 200)
        throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
      return await n.json();
    },
  });
}
var Kn = ({ target: e, title: t, subtitle: n, children: r }) =>
  (0, P.jsxs)(h, {
    target: e,
    style: { zIndex: 1700 },
    className: Pn,
    children: [
      r,
      (0, P.jsxs)(`div`, {
        className: Fn,
        children: [
          (0, P.jsx)(`div`, {
            className: In,
            children: t || (0, P.jsx)(`span`, { children: `\xA0` }),
          }),
          (0, P.jsx)(`div`, {
            className: Ln,
            children: n || (0, P.jsx)(`span`, { children: `\xA0` }),
          }),
        ],
      }),
    ],
  });
function qn(e) {
  return new A(new k());
}
function Jn() {
  return new Map([...Array.from(Ht.entries())]);
}
function Yn(e) {
  let { text: t, languageOverride: n } = e,
    [r] = (0, O.useState)(new ye(Jn(), qn, n ?? T.LANGUAGE));
  return (0, P.jsx)(P.Fragment, { children: r.ParseBBCode(t, {}) });
}
var Xn = `L3HaktJsWWA-`,
  Zn = `YebKQISqLCs-`,
  Qn = `Ct9yU89TArw-`,
  $n = `_7-cDUja4KeQ-`,
  er = `PBXxHejQZTU-`,
  tr = `JX6irDhLeng-`,
  nr = i((e) => {
    let t = s(e.photo, D(T.LANGUAGE)),
      n = t ? (typeof t == `string` ? t : t[1]) : void 0,
      r = !!e.title,
      i = !!e.company;
    return (0, P.jsxs)(`div`, {
      className: Qn,
      onMouseLeave: e.fnClose,
      children: [
        (0, P.jsxs)(`div`, {
          className: $n,
          children: [
            e.photo && (0, P.jsx)(`img`, { src: n }),
            (0, P.jsxs)(`div`, {
              className: er,
              children: [
                (0, P.jsx)(`div`, { children: e.name }),
                (r || i) &&
                  (0, P.jsxs)(`div`, {
                    children: [
                      r &&
                        (0, P.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      r && i && (0, P.jsx)(`span`, { children: `, ` }),
                      i && (0, P.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, P.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, P.jsx)(Yn, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  $ = class e extends O.Component {
    static sm_embeddedElements = new g(`presenter-hover-source-elements`);
    m_refAnchor = O.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      re() ||
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
          (0, P.jsx)(h, {
            ...r,
            children: (0, P.jsx)(nr, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, P.jsx)(`div`, {
        className: tr,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(y([x], $.prototype, `ClosePopup`, null),
  y([x], $.prototype, `OnScroll`, null),
  y([x], $.prototype, `OnHover`, null),
  y([x], $.prototype, `OnLeave`, null));
function rr(e) {
  let {
      photo: t,
      name: n,
      title: r,
      company: i,
      hidePhotoInCompactView: a,
    } = e,
    o = s(t, D(T.LANGUAGE)),
    c = o && !a ? (typeof o == `string` ? o : o[1]) : null,
    l = !!r,
    u = !!i;
  return (0, P.jsx)(`div`, {
    className: Xn,
    children: (0, P.jsx)($, {
      ...e,
      children: (0, P.jsx)(`div`, {
        className: Zn,
        children: (0, P.jsxs)(`div`, {
          className: $n,
          children: [
            !!c && (0, P.jsx)(`img`, { src: c }),
            (0, P.jsxs)(`div`, {
              className: er,
              children: [
                (0, P.jsx)(`div`, { children: n }),
                (l || u) &&
                  (0, P.jsxs)(`div`, {
                    children: [
                      l &&
                        (0, P.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: r,
                        }),
                      l && u && (0, P.jsx)(`span`, { children: `, ` }),
                      u && (0, P.jsx)(`span`, { children: i }),
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
  ye as $,
  It as A,
  U as B,
  mn as C,
  un as D,
  Yt as E,
  H as F,
  z as G,
  ft as H,
  W as I,
  Te as J,
  B as K,
  St as L,
  kt as M,
  yt as N,
  Bt as O,
  bt as P,
  N as Q,
  xt as R,
  Q as S,
  hn as T,
  dt as U,
  K as V,
  st as W,
  we as X,
  Qe as Y,
  Ce as Z,
  Ht as _,
  Un as a,
  Zt as b,
  Nn as c,
  kn as d,
  he as et,
  On as f,
  Ut as g,
  Rn as h,
  Yn as i,
  Rt as j,
  Vt as k,
  zn as l,
  Mn as m,
  $ as n,
  A as nt,
  Kn as o,
  Bn as p,
  L as q,
  rr as r,
  Vn as s,
  nr as t,
  k as tt,
  Hn as u,
  X as v,
  gn as w,
  Qt as x,
  Xt as y,
  G as z,
};

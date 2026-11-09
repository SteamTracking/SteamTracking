/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, it as r, st as i } from "./libraries.js";
import { t as a } from "./throbber.js";
import { t as o } from "./linkfilter.js";
import { c as s, n as c, t as l } from "./youtubeplayer.js";
import {
  Bc as u,
  Hb as d,
  Hc as f,
  Ic as p,
  Ky as m,
  Lc as h,
  Lr as g,
  Rc as _,
  Sc as v,
  Tr as ee,
  Uy as y,
  Vc as te,
  Wc as b,
  bS as x,
  bo as ne,
  bt as re,
  kc as ie,
  mS as ae,
  nl as oe,
  qx as se,
  rx as S,
  uS as C,
  wr as ce,
  zy as w,
} from "./main.js";
var T = e(t(), 1),
  E = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              T.createElement(
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
  D = class {
    m_decoratedAccumulator;
    constructor(e) {
      (se(e, `decorated accumulator cannot be null`),
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
  le = class extends D {
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
          n.push(T.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  ue = class {
    m_fnAccumulatorFactory;
    m_dictComponents;
    constructor(e, t) {
      ((this.m_dictComponents =
        e instanceof Map ? e : new Map(Object.entries(e))),
        (this.m_fnAccumulatorFactory = t));
    }
    Parse(e, t, n = !0) {
      let r = de(e || ``, n);
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
function O(e, t, n = 0) {
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
        (o = fe(s)))
      : ((o = {}), (a = i.toLocaleLowerCase())),
      e.push({ type: r, text: i, tag: a, args: o, rawargs: s }));
  } else r != 0 && e.push({ type: r, text: i });
  return { type: n, text: `` };
}
function k(e) {
  let t = ``;
  return (
    e.type == 3 ? (t = `[/`) : e.type == 2 && (t = `[`),
    { type: 1, text: t + (e.text ?? ``) }
  );
}
function de(e, t) {
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
        else if (c == `[` && !i) ((r = O(n, k(r), 2)), (a = !0));
        else if (c == `]` && !i) {
          let e = r.type == 2 && r.text?.toLocaleLowerCase() == `noparse`,
            t = r.type == 3 && r.text?.toLocaleLowerCase() == `noparse`;
          (a || (o && !t)
            ? ((r = k(r)), (r.text += c))
            : e
              ? (o = !0)
              : t && (o = !1),
            (r = O(n, r)),
            (a = !1));
        } else
          c == `\\` && t
            ? ((r.text += c), (i = !i), (a = !1))
            : ((r.text += c), (i = !1), (a = !1));
        break;
      case 1:
        c == `[` && !i
          ? ((r = O(n, r, 2)), (a = !0))
          : c == `\\` && t
            ? (i && (r.text += c), (i = !i))
            : ((r.text += c), (i = !1));
    }
  }
  return (
    r.type != 0 &&
      (r.type == 2 || r.type == 3
        ? n.push(k(r))
        : n.push({ type: r.type, text: r.text ?? `` })),
    n
  );
}
function fe(e) {
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
var A = class extends ue {
  m_renderingLanguage;
  constructor(e, t, n) {
    (super(e, t ?? (() => new E())),
      (this.m_renderingLanguage = typeof n == `string` ? ae(n) : n));
  }
  UpdateOverrideLanguage(e) {
    this.m_renderingLanguage = e;
  }
  ParseBBCode(e, t, n = !0) {
    let r = 0,
      i = this.Parse(
        e,
        (e, n, ...i) =>
          T.createElement(
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
      ? T.createElement(T.Fragment, null, ...i)
      : i.length == 1
        ? i[0]
        : null;
  }
};
function j(e) {
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
var M = n(),
  pe = `DGBHQeifcPs-`,
  me = `dYxCj-H04rc-`,
  N = `JHqvAwJwrJY-`,
  he = `B6fjudO6zcI-`,
  ge = `CO-1c2JJaiA-`,
  _e = `bUyTklHzOxI-`,
  ve = `BfhKYW6TTzA-`,
  ye = `cy-zo5afOio-`,
  be = `SOW8GvMXTHk-`,
  xe = `x9MpgTrN4Ww-`,
  Se = `i1AHn-0vXik-`,
  Ce = `_2TfKaaLCT2o-`,
  we = `LIXVgsnL-4M-`,
  Te = `K-jxiBASh0s-`,
  Ee = `-eZXYCqUwL8-`,
  De = `gK4c0jTYof8-`,
  Oe = `HEUr5N26q0w-`,
  ke = `_1fCwA2q2sU4-`,
  Ae = `_9zPcl3a3vcw-`,
  je = `SA3Jp-lZuK8-`,
  Me = `-zMHRhhepPU-`,
  Ne = `oJ15Z0k4q2M-`,
  Pe = `sOsaxzBzN2Q-`,
  Fe = `nqnnf2IPKes-`,
  Ie = `-CpmJ6WkwpQ-`,
  Le = `WuW68UdAsvI-`,
  Re = `NKJXBcarNSw-`,
  ze = `v27si2jXkow-`,
  Be = `_6yveHYc0OtM-`,
  Ve = `wf2m1NyifjE-`,
  He = `YBHm3uck7ds-`,
  Ue = `lnrpYhOnF4E-`,
  We = `oNRva9jZn5I-`,
  Ge = `TMyoK8naM1k-`,
  Ke = `_94faQspIw2E-`,
  qe = `C-B3bdlHS0I-`;
function Je(e) {
  return !(
    (!h(e.sPoster) && !_(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !_(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !_(e.sURL)))
  );
}
var P = class e {
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
  F = (0, T.forwardRef)(function (e, t) {
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
        altText: f,
      } = e,
      p = (0, T.useMemo)(
        () =>
          !!n.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [n.rgVideoTracks],
      ),
      [m, h] = T.useState(!1),
      g = Ye();
    if (!n.rgVideoSources || !n.rgVideoSources.length) return null;
    let _ = Je(n),
      v;
    (!_ || (p && d.EUNIVERSE == 1)) && (v = `anonymous`);
    let ee = o || (r && P.Get().BVolumePreferenceMuted()),
      y = n.sPoster ? I(n.sPoster, g) : ``;
    return (0, M.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: r,
      muted: ee,
      playsInline: !0,
      controls: i,
      poster: y,
      loop: a,
      crossOrigin: v,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        m && P.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          i = P.Get().BUserHasVolumePreference();
        if ((h(!0), n)) {
          if (!i && !r) {
            let e = t.muted ? 0 : t.volume;
            P.Get().SetVolumePreference(e);
          } else
            i &&
              ((t.volume = P.Get().GetVolumePreference()),
              (t.muted = P.Get().BVolumePreferenceMuted()));
        }
      },
      ref: t,
      className: s,
      onClick: u,
      "aria-label": f,
      style: {
        width: c && c >= 1 && c < 100 ? `${c}%` : void 0,
        aspectRatio: l || void 0,
      },
      children: [
        (0, M.jsx)(Xe, {
          rgVideoSources: n.rgVideoSources,
          strCacheBreakOrigin: g,
        }),
        (0, M.jsx)(Ze, {
          rgVideoTracks: n.rgVideoTracks,
          strCacheBreakOrigin: g,
        }),
      ],
    });
  });
function Ye() {
  let e = window.location.href,
    t = [
      d.STORE_BASE_URL,
      d.COMMUNITY_BASE_URL,
      d.PARTNER_BASE_URL,
      d.HELP_BASE_URL,
      d.STATS_BASE_URL,
      d.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (t) return t;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function I(e, t) {
  if (e) {
    if (h(e)) return e;
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
function Xe(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, M.jsx)(`source`, { src: I(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function Ze(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, M.jsx)(
          Qe,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function Qe(e) {
  let { track: t, rgVideoTracks: n, strCacheBreakOrigin: r } = e,
    i = t.eLanguage;
  if (d.EREALM == x.k_ESteamRealmChina) {
    if (w.IsELanguageValidInRealm(i, x.k_ESteamRealmChina))
      i = w.GetELanguageFallback(i);
    else if (i === 6) {
      if (n.find((e) => w.GetELanguageFallback(e.eLanguage) === i)) return null;
    } else return null;
  } else if (!w.IsELanguageValidInRealm(i, x.k_ESteamRealmGlobal)) return null;
  return (0, M.jsx)(`track`, {
    src: I(t.sURL, r),
    kind: t.sKind,
    default: t.bDefault,
    srcLang: C(i),
    label: m(i),
  });
}
var $e = e(r());
function L(e) {
  let t = X(e, `poster`);
  t &&= b(t);
  let n = [];
  {
    let t = X(e, `mp4`);
    t && n.push({ sURL: b(t), sFormat: `video/mp4` });
    let r = X(e, `webm`);
    r && n.push({ sURL: b(r), sFormat: `video/webm` });
  }
  let r = ae(S.LANGUAGE),
    i = r != 0,
    a = [];
  for (let t = 0; t < 32; t++) {
    let n = X(e, `sub_` + C(t));
    n &&
      a.push({
        sURL: b(n),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: i && t == r,
      });
    let o = X(e, `cap_` + C(t));
    o &&
      a.push({
        sURL: b(o),
        eLanguage: t,
        sKind: `captions`,
        bDefault: i && t == r,
      });
  }
  return { sPoster: t, rgVideoSources: n, rgVideoTracks: a };
}
function et(e) {
  let t = L(e.args);
  return (0, M.jsx)(F, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function R(e) {
  let t = L(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: b(n), sFormat: `video/webm` });
  let r = X(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = X(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = X(e.args, `loop`);
  return (0, M.jsx)(F, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var tt = `m6bojdeQzBM-`,
  z = `KNKcwZZR0so-`,
  nt = `OACV7AX319w-`,
  rt = `D7GTf0-swcc-`,
  it = `oknukvR2bfs-`,
  at = `Kvlx6JWGlW4-`,
  ot = `L7AE1SvWgtA-`,
  st = `_7iMZXddr1CI-`,
  ct = `sNG-BnwzjYs-`,
  lt = `maYcJlnc0JU-`,
  ut = `akuZJwBr6xc-`,
  dt = `ZfFIRgkpA2M-`,
  B = { Box: tt, Preview: z, Type: void 0 };
function V(e) {
  return (0, M.jsx)(`img`, {
    className: z,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function H(e) {
  return (0, M.jsx)(`div`, { className: ot, children: e.children });
}
function U(e) {
  return (0, M.jsx)(`div`, { className: st, children: e.children });
}
function ft(e) {
  return (0, M.jsx)(`div`, { className: nt, children: e.children });
}
function pt(e) {
  return (0, M.jsx)(`span`, { className: ut, children: e.children });
}
function mt(e) {
  return (0, M.jsx)(`div`, { className: rt, children: e.children });
}
function ht(e) {
  return (0, M.jsx)(`span`, { className: dt, children: e.children });
}
function W(e) {
  return (0, M.jsx)(`div`, { className: ct, children: e.children });
}
function gt(e) {
  return (0, M.jsx)(`div`, { className: lt, children: e.children });
}
function G(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function K(e) {
  let t =
      d.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return await n.json();
}
function _t(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function vt(e, t = !0) {
  return {
    queryKey: _t(e),
    queryFn: async () => {
      let t = await K({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: G(n.title), description: G(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function yt(e, t = !0) {
  return i(vt(e, t));
}
function bt(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function xt(e) {
  return {
    queryKey: bt(e),
    queryFn: async () => {
      let t = await K({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: G(n.title),
        description: G(n.description),
        type: G(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function St(e) {
  return i(xt(e));
}
var Ct = `brm0OeRsTm4-`,
  wt = `pcxkPBR3wVQ-`,
  Tt = `Mamx1lJ2lKQ-`,
  Et = `MCiiNDFcgvA-`,
  Dt = `wDoQNUlMcwk-`,
  Ot = `AiYAf8NbQ-E-`,
  kt = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function At(e) {
  return e == `full` ? Tt : v(wt, e == `leftthumb` ? Dt : Ot);
}
function q(e) {
  let {
      videoID: t,
      bShowVideoImmediately: n,
      bAutoPlay: r,
      nStartSeconds: i,
      align: o = `full`,
    } = e,
    [s, u] = (0, T.useState)(!n),
    { data: f, isSuccess: p } = yt(t, s);
  if (s) {
    let e = f?.title ?? y(`#Loading`),
      n = f?.views ?? `0`,
      r = f?.description ?? ``,
      i = () => u(!1);
    return (0, M.jsxs)(`div`, {
      className: B.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, M.jsx)(V, { strURL: `https://img.youtube.com/vi/` + t + `/0.jpg` }),
        (0, M.jsxs)(H, {
          children: [
            (0, M.jsx)(U, { children: y(`#EventEditor_YouTubeVideoTitle`, e) }),
            (0, M.jsx)(W, {
              children: y(`#EventEditor_YouTubeVideoViews`, re(Number(n))),
            }),
            (0, M.jsxs)(gt, {
              children: [p && r, !p && (0, M.jsx)(a, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, M.jsx)(l, {
    video: t,
    children: (0, M.jsxs)(`div`, {
      className: v(Ct, At(o)),
      id: t,
      children: [
        (0, M.jsx)(`img`, {
          className: Et,
          alt: ``,
          src:
            d.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, M.jsx)(c, {
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
function jt(e, t) {
  if (d.EREALM === x.k_ESteamRealmChina) return null;
  let n = s(e);
  return n?.strVideoID === void 0
    ? o(e, t?.event)
    : (0, M.jsx)(q, {
        videoID: n.strVideoID,
        nStartSeconds: n.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function J() {
  return d.EREALM === x.k_ESteamRealmChina;
}
function Mt(e) {
  if (J()) return null;
  let t = X(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, M.jsx)(q, { videoID: t, align: n, bShowVideoImmediately: !0 });
    }
  }
  return (0, M.jsx)(T.Fragment, {});
}
function Nt(e) {
  if (J() || d.COUNTRY.toLocaleUpperCase() == `CN`) return R(e);
  let t = X(e.args, `youtubeid`),
    n = X(e.args, `size`),
    r = X(e.args, `seconds`);
  return (0, M.jsx)(q, {
    videoID: t,
    nStartSeconds: r ? Number.parseInt(r) : void 0,
    align: n,
    bShowVideoImmediately: !0,
  });
}
var Y = new Map([
  [`b`, { Constructor: Ft, autocloses: !1 }],
  [`i`, { Constructor: It, autocloses: !1 }],
  [`h1`, { Constructor: Vt, autocloses: !1, skipFollowingNewline: !0 }],
  [`h2`, { Constructor: Ht, autocloses: !1, skipFollowingNewline: !0 }],
  [`h3`, { Constructor: Ut, autocloses: !1, skipFollowingNewline: !0 }],
  [`h4`, { Constructor: Wt, autocloses: !1, skipFollowingNewline: !0 }],
  [`h5`, { Constructor: Gt, autocloses: !1, skipFollowingNewline: !0 }],
  [`center`, { Constructor: Kt, autocloses: !1 }],
  [`smalltext`, { Constructor: qt, autocloses: !1, skipFollowingNewline: !0 }],
  [`u`, { Constructor: Lt, autocloses: !1 }],
  [`strike`, { Constructor: Rt, autocloses: !1 }],
  [`spoiler`, { Constructor: Jt, autocloses: !1 }],
  [`hr`, { Constructor: Yt, autocloses: !1 }],
  [`noparse`, { Constructor: sn, autocloses: !1 }],
  [`url`, { Constructor: Qt, autocloses: !1 }],
  [`quote`, { Constructor: en, autocloses: !1 }],
  [`pullquote`, { Constructor: tn, autocloses: !1 }],
  [`code`, { Constructor: nn, autocloses: !1 }],
  [`c`, { Constructor: rn, autocloses: !1 }],
  [`list`, { Constructor: an, autocloses: !1, skipInternalNewline: !0 }],
  [`olist`, { Constructor: on, autocloses: !1, skipInternalNewline: !0 }],
  [`*`, { Constructor: $, autocloses: !0, skipInternalNewline: !0 }],
  [`table`, { Constructor: cn, autocloses: !1, skipInternalNewline: !0 }],
  [
    `tr`,
    {
      Constructor: un,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `th`,
    {
      Constructor: fn,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `td`,
    {
      Constructor: pn,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `expand`,
    {
      Constructor: hn,
      autocloses: !1,
      skipInternalNewline: !0,
      allowWrapTextForCopying: !0,
    },
  ],
  [`calendarevent`, { Constructor: gn, autocloses: !0 }],
  [`doclink`, { Constructor: $t, autocloses: !1 }],
  [`color`, { Constructor: Xt, autocloses: !1 }],
  [`bgcolor`, { Constructor: Zt, autocloses: !1 }],
  [`p`, { Constructor: zt, autocloses: !1, skipFollowingNewline: !0 }],
]);
function X(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function Pt(e, t) {
  return (n) => e({ ...n, className: t });
}
function Ft(e) {
  return (0, M.jsx)(`b`, { className: pe, children: e.children });
}
function It(e) {
  return (0, M.jsx)(`i`, {
    className: v(me, `BB_Italic`),
    children: e.children,
  });
}
function Lt(e) {
  return (0, M.jsx)(`u`, { className: Te, children: e.children });
}
function Rt(e) {
  return (0, M.jsx)(`s`, { className: Ee, children: e.children });
}
function zt(e) {
  return (0, M.jsxs)(`p`, {
    className: N,
    children: [e.children, (0, M.jsx)(`wbr`, {})],
  });
}
function Bt(e) {
  return (0, M.jsxs)(`div`, {
    className: N,
    role: `paragraph`,
    children: [e.children, (0, M.jsx)(`wbr`, {})],
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
    (0, M.jsx)(e, {
      id: r || void 0,
      className: v(n, t.className),
      children: t.children,
    })
  );
}
function Vt(e) {
  return Z(`h1`, e, v(ve, `BB_Header1`));
}
function Ht(e) {
  return Z(`h2`, e, v(ye, `BB_Header2`));
}
function Ut(e) {
  return Z(`h3`, e, v(be, `BB_Header3`));
}
function Wt(e) {
  return Z(`h4`, e, v(xe, `BB_Header4`));
}
function Gt(e) {
  return Z(`h5`, e, v(Se, `BB_Header5`));
}
function Kt(e) {
  let t = X(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, M.jsx)(`span`, {
      id: t || void 0,
      className: v(Ce, `BB_Center`),
      children: e.children,
    })
  );
}
function qt(e) {
  return Z(`div`, e, v(we, `BB_SmallText`));
}
function Jt(e) {
  let [t, n] = T.useState(!1),
    r = T.useCallback(() => {
      n(!t);
    }, [t]);
  return (0, M.jsx)(ie, {
    className: v(De, t && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: r,
    onOKActionDescription: y(
      t ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, M.jsx)(`span`, { className: Oe, children: e.children }),
  });
}
function Yt(e) {
  return (0, M.jsx)(`hr`, { className: Ie });
}
function Xt(e) {
  let t = X(e.args);
  return (0, M.jsx)(`span`, { style: { color: t }, children: e.children });
}
function Zt(e) {
  let t = X(e.args);
  return (0, M.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function Qt(e) {
  let t = j(X(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && f(n) && (t = j(n));
  }
  let n = X(e.args, `style`) == `button` ? We : void 0,
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
        ? (0, M.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, M.jsx)(Q, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function $t(e) {
  let t = X(e.args),
    n = X(e.args, `style`) == `button` ? We : void 0,
    r = n && X(e.args, `buttoncolor`);
  return (0, M.jsx)(Q, {
    className: n,
    style: { backgroundColor: r },
    href: `${S.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var Q = (e) => {
  let { href: t, ...n } = e,
    r = p(t ?? ``),
    i;
  ce(r)
    ? ((r = (S.IN_CLIENT ? `steam://openurl_external/` : ``) + ee(r)),
      (i = `noopener nofollow`))
    : (r = te(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? u(t)
      : void 0;
  return (0, M.jsx)(g, {
    toolTipContent: a,
    direction: `top`,
    children: (0, M.jsx)(oe, { ...n, href: r, rel: i, children: e.children }),
  });
};
function en(e) {
  let t = X(e.args, `author`);
  return (0, M.jsxs)(`blockquote`, {
    className: v(ke, e.className),
    children: [
      !!t &&
        (0, M.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            y(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, M.jsx)(`b`, { children: t + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function tn(e) {
  return (0, M.jsx)(`div`, { className: Ae, children: e.children });
}
function nn(e) {
  return (0, M.jsx)(`code`, { className: Me, children: e.children });
}
function rn(e) {
  return (0, M.jsx)(`code`, { className: je, children: e.children });
}
function an(e) {
  return (0, M.jsx)(`ul`, {
    className: v(Ne, `bullets`),
    children: e.children,
  });
}
function on(e) {
  return (0, M.jsx)(`ol`, { className: Pe, children: e.children });
}
function $(e) {
  let t = X(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, M.jsx)(`li`, { className: Fe, id: t || void 0, children: e.children })
  );
}
function sn(e) {
  return e.children;
}
function cn(e) {
  let t = X(e.args, `noborder`),
    n = X(e.args, `equalcells`),
    r = X(e.args, `colwidth`);
  return (0, M.jsxs)(`table`, {
    className: v(Le, `BB_Table`, t && `b20E2IrghSY-`, n && `zJnyxE63CCk-`),
    children: [
      r &&
        (0, M.jsx)(`colgroup`, {
          children: r.split(`,`).map((e, t) => (0, M.jsx)(ln, { width: e }, t)),
        }),
      (0, M.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function ln(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, M.jsx)(`col`, { style: n })
  );
}
function un(e) {
  return (0, M.jsx)(`tr`, {
    className: v(Re, `BB_TableRow`),
    children: e.children,
  });
}
function dn(e, t) {
  let n = X(t.args, `width`),
    r = X(t.args, `colspan`),
    i = X(t.args, `rowspan`),
    a = {};
  return (
    r && parseInt(r) > 1 && (a.colSpan = parseInt(r)),
    i && parseInt(i) > 1 && (a.rowSpan = parseInt(i)),
    (0, M.jsx)(e, {
      className: v(ze, e == `td` && `BB_TableData`),
      ...a,
      style: n ? { width: n } : void 0,
      children: t.children,
    })
  );
}
function fn(e) {
  return dn(`th`, e);
}
function pn(e) {
  return dn(`td`, e);
}
function mn(e, t, n, r) {
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
        style: Ue,
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
function hn(e) {
  let t = !!X(e.args, `expanded`),
    [n, r] = T.useState(t),
    i = X(e.args, `title`),
    a = X(e.args, `collapsed_str`),
    o = X(e.args, `expanded_str`),
    s = mn(X(e.args, `type`), i, a, o);
  return (0, M.jsxs)(`div`, {
    className: v({
      [Be]: !0,
      [s.style ?? ``]: s.style != null,
      [void 0]: n,
      [void 0]: !n,
      BBCodeExpanded: n,
      BBCodeCollapsed: !n,
    }),
    children: [
      (0, M.jsxs)(`div`, {
        className: Ve,
        onClick: () => r(!n),
        children: [
          y(n ? s.expanded : s.collapsed),
          (0, M.jsx)(`div`, {
            className: He,
            children: (0, M.jsx)(ne, { angle: n ? 180 : 0 }),
          }),
        ],
      }),
      n &&
        (0, M.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function gn(e) {
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
      (d = `data:text/calendar;charset=utf-8;base64,${$e.fromByteArray(new TextEncoder().encode(e))}`));
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
  return (0, M.jsxs)(`div`, {
    className: v(`SaleSectionCalendarEventContainer`, Ke),
    id: o,
    children: [
      d &&
        (0, M.jsx)(`a`, {
          className: v(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, M.jsx)(`a`, {
        className: v(`SaleSectionCalendarEventLink`, qe),
        href: f,
        children: `Google`,
      }),
      d &&
        (0, M.jsx)(`a`, {
          className: v(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function _n(e) {
  return new le(new E());
}
function vn() {
  return new Map([...Array.from(Y.entries())]);
}
function yn(e) {
  let { text: t, languageOverride: n } = e,
    [r] = (0, T.useState)(new A(vn(), _n, n ?? d.LANGUAGE));
  return (0, M.jsx)(M.Fragment, { children: r.ParseBBCode(t, {}) });
}
export {
  et as A,
  D as B,
  ht as C,
  W as D,
  V as E,
  Ge as F,
  le as H,
  ge as I,
  he as L,
  R as M,
  F as N,
  at as O,
  _e as P,
  j as R,
  H as S,
  U as T,
  E as V,
  jt as _,
  Vt as a,
  pt as b,
  Q as c,
  on as d,
  Bt as f,
  kt as g,
  Nt as h,
  X as i,
  L as j,
  it as k,
  an as l,
  Mt as m,
  Pt as n,
  Ht as o,
  en as p,
  Y as r,
  Ut as s,
  yn as t,
  $ as u,
  St as v,
  mt as w,
  B as x,
  ft as y,
  A as z,
};

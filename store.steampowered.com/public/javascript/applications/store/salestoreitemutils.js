/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Lt as n,
  dt as r,
  ft as i,
  kt as a,
  st as o,
} from "./chunk~01cfc309bf.js";
import {
  Co as s,
  Eo as c,
  Fs as l,
  Io as u,
  No as d,
  Oo as f,
  To as p,
  Ts as m,
  bo as h,
  ja as g,
  oo as _,
  qa as v,
  so as y,
  wo as b,
} from "./chunk~6b8ddcaac8.js";
import { n as x } from "./chunk~5adf866415.js";
import { t as S } from "./chunk~034b02d99f.js";
import {
  $x as ee,
  Eb as C,
  Ec as w,
  Jy as te,
  Kb as T,
  Lb as E,
  Pv as D,
  Wb as O,
  ex as ne,
  gv as k,
  kv as A,
  qb as re,
  sn as ie,
  uv as j,
  vc as ae,
  wc as M,
} from "./main.js";
var N = e(n(), 1),
  P = i();
function oe(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = Q(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, P.jsx)(Z, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let c = ``;
  switch (n) {
    case `main`:
      c = d;
      break;
    default:
      c = p;
  }
  if (o === void 0 || !s)
    return (0, P.jsx)(`div`, { className: M(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = F(o, n === `header`);
  return (0, P.jsx)(`div`, {
    className: M(c, `CapsuleImageCtn`, i),
    children: (0, P.jsx)(x, {
      lazyLoad: !0,
      srcs: l,
      className: M(y),
      alt: s.name,
    }),
  });
}
function F(e, t) {
  let n = [];
  return (e && L(n, e, t), n.filter((e) => !!e));
}
function I(e, t) {
  return {
    strStoreVerticalURL: w(e, `hero_capsule`),
    strLibraryVerticalURL: w(e, `library_capsule`),
  };
}
function L(e, t, n) {
  let r = w(t, `header_2x`) ?? w(t, `header`),
    i = w(t, `main_capsule_2x`) ?? w(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var R = `K2BGbCx37Cg-`,
  z = `wnVw5QEjvtw-`;
function B(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !O() && !t ? null : (0, P.jsx)(V, { ...e });
}
function V(e) {
  let { className: t, id: n } = e,
    [r, i] = ie(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = z),
    (0, P.jsx)(`div`, {
      className: M(R, o, t),
      children: (0, P.jsx)(S, { id: n, eHWCompat: a }),
    })
  );
}
async function H() {
  let e = ne(`broadcast_available_for_page`, `application_config`);
  if (q(e)) {
    let t = new Set();
    return (
      e.filtered.forEach((e) => {
        e.appid && t.add(e.appid);
      }),
      Array.from(t)
    );
  }
  return [];
}
var U = class {
  constructor() {
    a(this);
  }
  accountid;
  steamid;
  appid;
  hub_popular;
  popular;
  relay_broadcast_id;
  rowversion;
  thumbnail_http_address;
  nAppIDVOD;
  title = void 0;
  viewer_count = void 0;
  whitelist_rank;
  gamedata_subtitle = void 0;
  store_title;
  left_panel;
  right_panel;
  snr;
  broadcast_chat_visibility;
  default_selection_priority = 0;
  current_selection_priority = 0;
};
(E([t], U.prototype, `title`, void 0),
  E([t], U.prototype, `viewer_count`, void 0),
  E([t], U.prototype, `gamedata_subtitle`, void 0),
  E([t], U.prototype, `current_selection_priority`, void 0));
var W = `primary`,
  G = `featured`,
  K = `default_featured`,
  se = `general`,
  ce = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function le(e) {
  switch (e) {
    case W:
      return 3;
    case G:
      return 2;
    case K:
      return 1;
    case se:
    default:
      return 0;
  }
}
function q(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function ue() {
  return o(J());
}
function de(e) {
  let { data: t } = ue(),
    [n, i] = (0, N.useState)(!1),
    a = r(),
    o = j();
  return (
    (0, N.useEffect)(() => {
      if (!e || e.length == 0 || !t) return i(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => a.fetchQuery(k(o, { appid: e }))),
        );
        i(
          n.some(
            (e) =>
              (e && e.appid && t.has(e.appid)) ||
              (e?.related_items?.parent_appid &&
                t.has(e.related_items.parent_appid)),
          ),
        );
      })();
    }, [e, o, a, t]),
    n
  );
}
function J() {
  return {
    queryKey: fe(),
    queryFn: async () => {
      let e = await H();
      return new Set(e);
    },
  };
}
function fe() {
  return [`BroadcastApps`];
}
var pe = `hRwhHwwKlgI-`;
function Y() {
  return (0, P.jsx)(`div`, {
    className: pe,
    children: te(`#home_page_live_broadcast`),
  });
}
var me = N.createContext(void 0),
  X = N.createContext(void 0);
function he(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = l(),
    { data: a } = g(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    c = de(t),
    u = N.useContext(me),
    d = N.useContext(X),
    f = u && d ? u(d, t) : void 0,
    p = o && !n,
    m = s && !n && !f?.bReplacesWishlistBanner,
    h = !n && r;
  return (0, P.jsxs)(`div`, {
    className: M(_, `CapsuleDecorators`, f && `HasReasonBanner`),
    children: [
      f &&
        (0, P.jsx)(`span`, {
          className: M(`LCYi5cxHqgI-`, f.strClassName),
          children: f.strLabel,
        }),
      p &&
        (0, P.jsxs)(`span`, {
          className: M(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, P.jsx)(`img`, {
              src: T(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: C.Localize(`#Sale_InLibrary`),
            }),
            C.Localize(`#Sale_InLibrary`),
          ],
        }),
      m &&
        (0, P.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, P.jsx)(ae, { className: `ppO76q5Y-Zg-` }),
            C.Localize(`#Sale_OnWishlist`),
          ],
        }),
      h && !p && !s && (0, P.jsx)(ge, { appids: t }),
      c && (0, P.jsx)(Y, {}),
    ],
  });
}
function ge(e) {
  let { appids: t } = e;
  return _e(t)
    ? (0, P.jsx)(`span`, {
        className: M(v, h),
        children: C.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function _e(e) {
  let [t, n] = (0, N.useState)(!1),
    i = r(),
    a = j();
  return (
    (0, N.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => i.fetchQuery(k(a, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, a, i]),
    t
  );
}
function Z(e) {
  let {
      id: t,
      bPreferLibrary: n,
      bPreferAssetWithoutOverride: r,
      bNoShadow: i,
    } = e,
    a = i ? u : ``,
    { storeItemDefaultInfo: o, storeItemAsset: l } = Q(t, `vertical`, r),
    [d, p] = N.useState(0);
  if (!o || !l) return (0, P.jsx)(`div`, { className: c });
  let { strStoreVerticalURL: h, strLibraryVerticalURL: g } = I(l, o);
  if (h && (!n || !g))
    return (0, P.jsxs)(`div`, {
      className: M(c, `HeroCapsuleImageContainer`),
      children: [
        (0, P.jsx)(`img`, { src: h, className: y, alt: o.name }),
        o.type == 4 &&
          (0, P.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${re.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (g)
    return (0, P.jsxs)(`div`, {
      className: M(f, m, n ? b : ``, a),
      children: [
        (0, P.jsx)(`div`, {
          className: s,
          style: { backgroundImage: `url(${g})` },
        }),
        (0, P.jsx)(`img`, { src: g, className: y, alt: o.name }),
      ],
    });
  let _ = F(l, !0),
    v = _.length - 1,
    S = (e) => {
      let t = _.indexOf(e);
      t >= v && t < _.length - 1 && p(t + 1);
    };
  if (d < _.length) {
    let e = _[d];
    return (0, P.jsxs)(`div`, {
      className: M(f, a),
      children: [
        (0, P.jsx)(`div`, {
          className: s,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, P.jsx)(x, {
          lazyLoad: !0,
          srcs: _,
          className: y,
          alt: o.name,
          onImageError: S,
        }),
      ],
    });
  }
  return (0, P.jsx)(`div`, { className: c });
}
function Q(e, t, n = !1) {
  let { data: r } = D(e),
    { data: i } = A(e, n),
    a = $(r, i, t),
    { data: o } = D(a),
    { data: s } = A(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function $(e, t, n) {
  if (
    e &&
    e.included_appids?.length == 1 &&
    !ve(t, n) &&
    e.item_type &&
    [1, 2].includes(e.item_type)
  )
    return { appid: e.included_appids[0] };
}
function ve(e, t) {
  if (!e) return !1;
  switch (t) {
    case `header`:
      return !!e.header;
    case `main`:
      return !!e.main_capsule;
    case `vertical`:
    case `library`:
      return !!e.hero_capsule || !!e.library_capsule;
    default:
      return (ee(t, `Unhandled imageType: ${t}`), !1);
  }
}
export {
  Y as a,
  ce as c,
  B as d,
  F as f,
  X as i,
  U as l,
  Z as n,
  J as o,
  oe as p,
  he as r,
  le as s,
  $ as t,
  q as u,
};

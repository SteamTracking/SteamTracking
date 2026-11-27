/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  Ot as n,
  dt as r,
  kt as i,
  ot as a,
  ut as o,
} from "./chunk~01cfc309bf.js";
import {
  $a as s,
  Ao as c,
  Eo as l,
  Ho as u,
  Mo as d,
  Po as f,
  fo as p,
  jo as m,
  js as h,
  ko as g,
  po as _,
  zo as v,
} from "./chunk~6b8ddcaac8.js";
import { C as y } from "./chunk~4eed35ad1f.js";
import { n as b } from "./chunk~5adf866415.js";
import { t as x } from "./chunk~034b02d99f.js";
import {
  Ev as S,
  Ib as C,
  Ic as w,
  Oc as T,
  Pc as E,
  Wv as D,
  an as O,
  bv as k,
  ex as ee,
  ib as te,
  mn as ne,
  nx as re,
  qb as A,
  rx as ie,
  uS as ae,
  ux as oe,
  zv as j,
} from "./main.js";
var M = e(t(), 1),
  N = r();
function se(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = Q(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, N.jsx)(Z, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let c = ``;
  switch (n) {
    case `main`:
      c = v;
      break;
    default:
      c = m;
  }
  if (o === void 0 || !s)
    return (0, N.jsx)(`div`, { className: E(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = P(o, n === `header`);
  return (0, N.jsx)(`div`, {
    className: E(c, `CapsuleImageCtn`, i),
    children: (0, N.jsx)(b, {
      lazyLoad: !0,
      srcs: l,
      className: E(_),
      alt: s.name,
    }),
  });
}
function P(e, t) {
  let n = [];
  return (e && I(n, e, t), n.filter((e) => !!e));
}
function F(e, t) {
  return {
    strStoreVerticalURL: w(e, `hero_capsule`),
    strLibraryVerticalURL: w(e, `library_capsule`),
  };
}
function I(e, t, n) {
  let r = w(t, `header_2x`) ?? w(t, `header`),
    i = w(t, `main_capsule_2x`) ?? w(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var L = `K2BGbCx37Cg-`,
  R = `wnVw5QEjvtw-`;
function z(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !ee() && !t ? null : (0, N.jsx)(B, { ...e });
}
function B(e) {
  let { className: t, id: n } = e,
    [r, i] = ne(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = R),
    (0, N.jsx)(`div`, {
      className: E(L, o, t),
      children: (0, N.jsx)(x, { id: n, eHWCompat: a }),
    })
  );
}
async function V() {
  let e = oe(`broadcast_available_for_page`, `application_config`);
  if (K(e)) {
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
var H = class {
  constructor() {
    n(this);
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
(A([i], H.prototype, `title`, void 0),
  A([i], H.prototype, `viewer_count`, void 0),
  A([i], H.prototype, `gamedata_subtitle`, void 0),
  A([i], H.prototype, `current_selection_priority`, void 0));
var U = `primary`,
  W = `featured`,
  G = `default_featured`,
  ce = `general`,
  le = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function ue(e) {
  switch (e) {
    case U:
      return 3;
    case W:
      return 2;
    case G:
      return 1;
    case ce:
    default:
      return 0;
  }
}
function K(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function de() {
  return a(q());
}
function fe(e) {
  let { data: t } = de(),
    [n, r] = (0, M.useState)(!1),
    i = o(),
    a = k();
  return (
    (0, M.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(S(a, { appid: e }))),
        );
        r(
          n.some(
            (e) =>
              (e && e.appid && t.has(e.appid)) ||
              (e?.related_items?.parent_appid &&
                t.has(e.related_items.parent_appid)),
          ),
        );
      })();
    }, [e, a, i, t]),
    n
  );
}
function q() {
  return {
    queryKey: pe(),
    queryFn: async () => {
      let e = await V();
      return new Set(e);
    },
  };
}
function pe() {
  return [`BroadcastApps`];
}
var J = `hRwhHwwKlgI-`;
function Y() {
  return (0, N.jsx)(`div`, {
    className: J,
    children: te(`#home_page_live_broadcast`),
  });
}
var me = M.createContext(void 0),
  X = M.createContext(void 0);
function he(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = y(),
    { data: a } = O(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    c = fe(t),
    l = M.useContext(me),
    u = M.useContext(X),
    d = l && u ? l(u, t) : void 0,
    f = o && !n,
    m = s && !n && !d?.bReplacesWishlistBanner,
    h = !n && r;
  return (0, N.jsxs)(`div`, {
    className: E(p, `CapsuleDecorators`, d && `HasReasonBanner`),
    children: [
      d &&
        (0, N.jsx)(`span`, {
          className: E(`LCYi5cxHqgI-`, d.strClassName),
          children: d.strLabel,
        }),
      f &&
        (0, N.jsxs)(`span`, {
          className: E(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, N.jsx)(`img`, {
              src: re(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: C.Localize(`#Sale_InLibrary`),
            }),
            C.Localize(`#Sale_InLibrary`),
          ],
        }),
      m &&
        (0, N.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, N.jsx)(T, { className: `ppO76q5Y-Zg-` }),
            C.Localize(`#Sale_OnWishlist`),
          ],
        }),
      h && !f && !s && (0, N.jsx)(ge, { appids: t }),
      c && (0, N.jsx)(Y, {}),
    ],
  });
}
function ge(e) {
  let { appids: t } = e;
  return _e(t)
    ? (0, N.jsx)(`span`, {
        className: E(s, l),
        children: C.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function _e(e) {
  let [t, n] = (0, M.useState)(!1),
    r = o(),
    i = k();
  return (
    (0, M.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(S(i, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, i, r]),
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
    { storeItemDefaultInfo: o, storeItemAsset: s } = Q(t, `vertical`, r),
    [l, p] = M.useState(0);
  if (!o || !s) return (0, N.jsx)(`div`, { className: d });
  let { strStoreVerticalURL: m, strLibraryVerticalURL: v } = F(s, o);
  if (m && (!n || !v))
    return (0, N.jsxs)(`div`, {
      className: E(d, `HeroCapsuleImageContainer`),
      children: [
        (0, N.jsx)(`img`, { src: m, className: _, alt: o.name }),
        o.type == 4 &&
          (0, N.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${ie.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (v)
    return (0, N.jsxs)(`div`, {
      className: E(f, h, n ? c : ``, a),
      children: [
        (0, N.jsx)(`div`, {
          className: g,
          style: { backgroundImage: `url(${v})` },
        }),
        (0, N.jsx)(`img`, { src: v, className: _, alt: o.name }),
      ],
    });
  let y = P(s, !0),
    x = y.length - 1,
    S = (e) => {
      let t = y.indexOf(e);
      t >= x && t < y.length - 1 && p(t + 1);
    };
  if (l < y.length) {
    let e = y[l];
    return (0, N.jsxs)(`div`, {
      className: E(f, a),
      children: [
        (0, N.jsx)(`div`, {
          className: g,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, N.jsx)(b, {
          lazyLoad: !0,
          srcs: y,
          className: _,
          alt: o.name,
          onImageError: S,
        }),
      ],
    });
  }
  return (0, N.jsx)(`div`, { className: d });
}
function Q(e, t, n = !1) {
  let { data: r } = D(e),
    { data: i } = j(e, n),
    a = $(r, i, t),
    { data: o } = D(a),
    { data: s } = j(a, n),
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
      return (ae(t, `Unhandled imageType: ${t}`), !1);
  }
}
export {
  Y as a,
  le as c,
  z as d,
  P as f,
  X as i,
  H as l,
  Z as n,
  q as o,
  se as p,
  he as r,
  ue as s,
  $ as t,
  K as u,
};

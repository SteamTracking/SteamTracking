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
  Ao as s,
  Bo as c,
  Do as l,
  Lo as u,
  Mo as d,
  Oo as f,
  Za as p,
  do as m,
  ko as h,
  ks as ee,
  uo as g,
  wo as _,
} from "./chunk~6b8ddcaac8.js";
import { C as v } from "./chunk~4eed35ad1f.js";
import { n as y } from "./chunk~5adf866415.js";
import { t as b } from "./chunk~034b02d99f.js";
import {
  Ev as x,
  Ib as S,
  Ic as C,
  Oc as w,
  Pc as T,
  Wv as E,
  an as D,
  bv as O,
  ex as te,
  ib as ne,
  mn as re,
  nx as k,
  qb as A,
  rx as ie,
  uS as ae,
  ux as oe,
  zv as j,
} from "./main.js";
var M = e(t(), 1),
  N = r();
function P(e) {
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
      c = u;
      break;
    default:
      c = h;
  }
  if (o === void 0 || !s)
    return (0, N.jsx)(`div`, { className: T(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = F(o, n === `header`);
  return (0, N.jsx)(`div`, {
    className: T(c, `CapsuleImageCtn`, i),
    children: (0, N.jsx)(y, {
      lazyLoad: !0,
      srcs: l,
      className: T(m),
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
    strStoreVerticalURL: C(e, `hero_capsule`),
    strLibraryVerticalURL: C(e, `library_capsule`),
  };
}
function L(e, t, n) {
  let r = C(t, `header_2x`) ?? C(t, `header`),
    i = C(t, `main_capsule_2x`) ?? C(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var R = `K2BGbCx37Cg-`,
  z = `wnVw5QEjvtw-`;
function B(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !te() && !t ? null : (0, N.jsx)(V, { ...e });
}
function V(e) {
  let { className: t, id: n } = e,
    [r, i] = re(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = z),
    (0, N.jsx)(`div`, {
      className: T(R, o, t),
      children: (0, N.jsx)(b, { id: n, eHWCompat: a }),
    })
  );
}
async function H() {
  let e = oe(`broadcast_available_for_page`, `application_config`);
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
(A([i], U.prototype, `title`, void 0),
  A([i], U.prototype, `viewer_count`, void 0),
  A([i], U.prototype, `gamedata_subtitle`, void 0),
  A([i], U.prototype, `current_selection_priority`, void 0));
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
  return a(J());
}
function de(e) {
  let { data: t } = ue(),
    [n, r] = (0, M.useState)(!1),
    i = o(),
    a = O();
  return (
    (0, M.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(x(a, { appid: e }))),
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
  return (0, N.jsx)(`div`, {
    className: pe,
    children: ne(`#home_page_live_broadcast`),
  });
}
var me = M.createContext(void 0),
  X = M.createContext(void 0);
function he(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = v(),
    { data: a } = D(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    c = de(t),
    l = M.useContext(me),
    u = M.useContext(X),
    d = l && u ? l(u, t) : void 0,
    f = o && !n,
    p = s && !n && !d?.bReplacesWishlistBanner,
    m = !n && r;
  return (0, N.jsxs)(`div`, {
    className: T(g, `CapsuleDecorators`, d && `HasReasonBanner`),
    children: [
      d &&
        (0, N.jsx)(`span`, {
          className: T(`LCYi5cxHqgI-`, d.strClassName),
          children: d.strLabel,
        }),
      f &&
        (0, N.jsxs)(`span`, {
          className: T(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, N.jsx)(`img`, {
              src: k(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: S.Localize(`#Sale_InLibrary`),
            }),
            S.Localize(`#Sale_InLibrary`),
          ],
        }),
      p &&
        (0, N.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, N.jsx)(w, { className: `ppO76q5Y-Zg-` }),
            S.Localize(`#Sale_OnWishlist`),
          ],
        }),
      m && !f && !s && (0, N.jsx)(ge, { appids: t }),
      c && (0, N.jsx)(Y, {}),
    ],
  });
}
function ge(e) {
  let { appids: t } = e;
  return _e(t)
    ? (0, N.jsx)(`span`, {
        className: T(p, _),
        children: S.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function _e(e) {
  let [t, n] = (0, M.useState)(!1),
    r = o(),
    i = O();
  return (
    (0, M.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(x(i, { appid: e }))),
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
    a = i ? c : ``,
    { storeItemDefaultInfo: o, storeItemAsset: u } = Q(t, `vertical`, r),
    [p, h] = M.useState(0);
  if (!o || !u) return (0, N.jsx)(`div`, { className: s });
  let { strStoreVerticalURL: g, strLibraryVerticalURL: _ } = I(u, o);
  if (g && (!n || !_))
    return (0, N.jsxs)(`div`, {
      className: T(s, `HeroCapsuleImageContainer`),
      children: [
        (0, N.jsx)(`img`, { src: g, className: m, alt: o.name }),
        o.type == 4 &&
          (0, N.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${ie.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (_)
    return (0, N.jsxs)(`div`, {
      className: T(d, ee, n ? f : ``, a),
      children: [
        (0, N.jsx)(`div`, {
          className: l,
          style: { backgroundImage: `url(${_})` },
        }),
        (0, N.jsx)(`img`, { src: _, className: m, alt: o.name }),
      ],
    });
  let v = F(u, !0),
    b = v.length - 1,
    x = (e) => {
      let t = v.indexOf(e);
      t >= b && t < v.length - 1 && h(t + 1);
    };
  if (p < v.length) {
    let e = v[p];
    return (0, N.jsxs)(`div`, {
      className: T(d, a),
      children: [
        (0, N.jsx)(`div`, {
          className: l,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, N.jsx)(y, {
          lazyLoad: !0,
          srcs: v,
          className: m,
          alt: o.name,
          onImageError: x,
        }),
      ],
    });
  }
  return (0, N.jsx)(`div`, { className: s });
}
function Q(e, t, n = !1) {
  let { data: r } = E(e),
    { data: i } = j(e, n),
    a = $(r, i, t),
    { data: o } = E(a),
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
  ce as c,
  B as d,
  F as f,
  X as i,
  U as l,
  Z as n,
  J as o,
  P as p,
  he as r,
  le as s,
  $ as t,
  q as u,
};

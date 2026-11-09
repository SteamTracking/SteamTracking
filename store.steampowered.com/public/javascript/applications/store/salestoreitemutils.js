/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  Lt as n,
  dt as r,
  ft as i,
  kt as a,
  st as o,
} from "./libraries.js";
import {
  $t as s,
  Ar as c,
  Bt as l,
  En as u,
  _n as d,
  en as f,
  gn as p,
  kn as ee,
  kt as m,
  pn as h,
  rt as g,
  vn as _,
  xn as v,
  yn as y,
  yr as b,
} from "./saletags.js";
import { t as x } from "./storeurl.js";
import { n as S } from "./image.js";
import { t as te } from "./platforms.js";
import {
  Au as ne,
  Hb as C,
  Jx as w,
  Mb as T,
  Nc as E,
  Sc as D,
  Uy as O,
  Vb as re,
  Vc as ie,
  Yb as ae,
  av as k,
  cn as oe,
  dv as A,
  gc as se,
  kv as j,
  qx as M,
  wc as N,
  wv as P,
  xb as F,
  zb as I,
} from "./main.js";
var L = e(n(), 1),
  R = i();
function z(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = $(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, R.jsx)(Q, {
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
      c = _;
  }
  if (o === void 0 || !s)
    return (0, R.jsx)(`div`, { className: D(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = B(o, n === `header`);
  return (0, R.jsx)(`div`, {
    className: D(c, `CapsuleImageCtn`, i),
    children: (0, R.jsx)(S, {
      lazyLoad: !0,
      srcs: l,
      className: D(f),
      alt: s.name,
    }),
  });
}
function B(e, t) {
  let n = [];
  return e && H(n, e, t), n.filter((e) => !!e);
}
function V(e, t) {
  return {
    strStoreVerticalURL: N(e, `hero_capsule`),
    strLibraryVerticalURL: N(e, `library_capsule`),
  };
}
function H(e, t, n) {
  let r = N(t, `header_2x`) ?? N(t, `header`),
    i = N(t, `main_capsule_2x`) ?? N(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var U = `K2BGbCx37Cg-`,
  W = `wnVw5QEjvtw-`;
function G(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !I() && !t ? null : (0, R.jsx)(K, { ...e });
}
function K(e) {
  let { className: t, id: n } = e,
    [r, i] = oe(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = W),
    (0, R.jsx)(`div`, {
      className: D(U, o, t),
      children: (0, R.jsx)(te, { id: n, eHWCompat: a }),
    })
  );
}
function ce(e) {
  return (0, L.useMemo)(() => q(e), [e?.id, e?.type]);
}
function le(e, t) {
  return (0, L.useMemo)(() => pe(e, t), [e, t]);
}
function ue(e, t) {
  return (0, L.useMemo)(() => fe(e, t), [e, t]);
}
function q(e) {
  if (e && e.id) {
    if (!e.type) return { appid: e.id };
    switch (e.type) {
      case `sub`:
        return { packageid: e.id };
      case `bundle`:
        return { bundleid: e.id };
      default:
        return { appid: e.id };
    }
  }
}
function de(e) {
  if (`appid` in e) return { id: e.appid, type: `game` };
  if (`packageid` in e) return { id: e.packageid, type: `sub` };
  if (`bundleid` in e) return { id: e.bundleid, type: `bundle` };
}
function fe(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function pe(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
async function me() {
  let e = ae(`broadcast_available_for_page`, `application_config`);
  if (Y(e)) {
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
var J = class {
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
T([t], J.prototype, `title`, void 0),
  T([t], J.prototype, `viewer_count`, void 0),
  T([t], J.prototype, `gamedata_subtitle`, void 0),
  T([t], J.prototype, `current_selection_priority`, void 0);
var he = `primary`,
  ge = `featured`,
  _e = `default_featured`,
  ve = `general`,
  ye = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function be(e) {
  switch (e) {
    case he:
      return 3;
    case ge:
      return 2;
    case _e:
      return 1;
    case ve:
    default:
      return 0;
  }
}
function Y(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function xe() {
  return o(Ce());
}
function Se(e) {
  let { data: t } = xe(),
    [n, i] = (0, L.useState)(!1),
    a = r(),
    o = k();
  return (
    (0, L.useEffect)(() => {
      if (!e || e.length == 0 || !t) return i(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => a.fetchQuery(A(o, { appid: e }))),
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
function Ce() {
  return {
    queryKey: we(),
    queryFn: async () => {
      let e = await me();
      return new Set(e);
    },
  };
}
function we() {
  return [`BroadcastApps`];
}
var Te = `hRwhHwwKlgI-`;
function X() {
  return (0, R.jsx)(`div`, {
    className: Te,
    children: O(`#home_page_live_broadcast`),
  });
}
function Z(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = c(),
    { data: a } = m(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    l = t.length > 0 && t.every((e) => a && a.has(e)),
    u = Se(t),
    d = o && !n,
    f = l && !n,
    p = !n && r;
  return (0, R.jsxs)(`div`, {
    className: D(s, `CapsuleDecorators`),
    children: [
      d &&
        (0, R.jsxs)(`span`, {
          className: D(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, R.jsx)(`img`, {
              src: re(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: F.Localize(`#Sale_InLibrary`),
            }),
            F.Localize(`#Sale_InLibrary`),
          ],
        }),
      f &&
        (0, R.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, R.jsx)(se, { className: `ppO76q5Y-Zg-` }),
            F.Localize(`#Sale_OnWishlist`),
          ],
        }),
      p && !d && !f && (0, R.jsx)(Ee, { appids: t }),
      u && (0, R.jsx)(X, {}),
    ],
  });
}
function Ee(e) {
  let { appids: t } = e;
  return De(t)
    ? (0, R.jsx)(`span`, {
        className: D(l, h),
        children: F.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function De(e) {
  let [t, n] = (0, L.useState)(!1),
    i = r(),
    a = k();
  return (
    (0, L.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => i.fetchQuery(A(a, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, a, i]),
    t
  );
}
function Oe(e, t, n, r, i, a) {
  if (!n) return;
  if (!g(e.item_type)) {
    M(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let o = E(`${x(e, r)}${i ? `?${i}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = ne(e) || window;
      a ? a(e) : o.startsWith(`steam://`) || (t.location.href = ie(o));
    },
    onOKActionDescription: F.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function Q(e) {
  let {
      id: t,
      bPreferLibrary: n,
      bPreferAssetWithoutOverride: r,
      bNoShadow: i,
    } = e,
    a = i ? ee : ``,
    { storeItemDefaultInfo: o, storeItemAsset: s } = $(t, `vertical`, r),
    [c, l] = L.useState(0);
  if (!o || !s) return (0, R.jsx)(`div`, { className: y });
  let { strStoreVerticalURL: u, strLibraryVerticalURL: m } = V(s, o);
  if (u && (!n || !m))
    return (0, R.jsxs)(`div`, {
      className: D(y, `HeroCapsuleImageContainer`),
      children: [
        (0, R.jsx)(`img`, { src: u, className: f, alt: o.name }),
        o.type == 4 &&
          (0, R.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${C.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (m)
    return (0, R.jsxs)(`div`, {
      className: D(v, b, n ? d : ``, a),
      children: [
        (0, R.jsx)(`div`, {
          className: p,
          style: { backgroundImage: `url(${m})` },
        }),
        (0, R.jsx)(`img`, { src: m, className: f, alt: o.name }),
      ],
    });
  let h = B(s, !0),
    g = h.length - 1,
    _ = (e) => {
      let t = h.indexOf(e);
      t >= g && t < h.length - 1 && l(t + 1);
    };
  if (c < h.length) {
    let e = h[c];
    return (0, R.jsxs)(`div`, {
      className: D(v, a),
      children: [
        (0, R.jsx)(`div`, {
          className: p,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, R.jsx)(S, {
          lazyLoad: !0,
          srcs: h,
          className: f,
          alt: o.name,
          onImageError: _,
        }),
      ],
    });
  }
  return (0, R.jsx)(`div`, { className: y });
}
function $(e, t, n = !1) {
  let { data: r } = j(e),
    { data: i } = P(e, n),
    a;
  r &&
    r.included_appids?.length == 1 &&
    !ke(i, t) &&
    r.item_type &&
    [1, 2].includes(r.item_type) &&
    (a = { appid: r.included_appids[0] });
  let { data: o } = j(a),
    { data: s } = P(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function ke(e, t) {
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
      return w(t, `Unhandled imageType: ${t}`), !1;
  }
}
export {
  be as a,
  Y as c,
  le as d,
  ce as f,
  z as h,
  X as i,
  q as l,
  G as m,
  Oe as n,
  ye as o,
  ue as p,
  Z as r,
  J as s,
  Q as t,
  de as u,
};

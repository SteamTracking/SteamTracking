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
  Gi as s,
  Wi as c,
  Wt as l,
  _a as u,
  ba as d,
  bo as f,
  ca as p,
  fa as m,
  ia as h,
  ji as g,
  la as _,
  lo as ee,
  sa as v,
  ua as y,
  vi as b,
} from "./chunk~6b8ddcaac8.js";
import { t as te } from "./chunk~4c13037b22.js";
import { n as x } from "./chunk~5adf866415.js";
import { t as S } from "./chunk~034b02d99f.js";
import {
  $x as ne,
  Eb as C,
  Ec as w,
  Fc as re,
  Fu as T,
  Jy as E,
  Kb as D,
  Lb as O,
  Pv as k,
  Qx as ie,
  Uc as ae,
  Wb as oe,
  ex as se,
  gv as A,
  kv as j,
  qb as ce,
  sn as le,
  uv as M,
  vc as N,
  wc as P,
} from "./main.js";
var F = e(n(), 1),
  I = i();
function L(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: c } = Q(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, I.jsx)(Z, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let l = ``;
  switch (n) {
    case `main`:
      l = u;
      break;
    default:
      l = _;
  }
  if (o === void 0 || !c)
    return (0, I.jsx)(`div`, { className: P(l, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let d = R(o, n === `header`);
  return (0, I.jsx)(`div`, {
    className: P(l, `CapsuleImageCtn`, i),
    children: (0, I.jsx)(x, {
      lazyLoad: !0,
      srcs: d,
      className: P(s),
      alt: c.name,
    }),
  });
}
function R(e, t) {
  let n = [];
  return (e && B(n, e, t), n.filter((e) => !!e));
}
function z(e, t) {
  return {
    strStoreVerticalURL: w(e, `hero_capsule`),
    strLibraryVerticalURL: w(e, `library_capsule`),
  };
}
function B(e, t, n) {
  let r = w(t, `header_2x`) ?? w(t, `header`),
    i = w(t, `main_capsule_2x`) ?? w(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var V = `K2BGbCx37Cg-`,
  H = `wnVw5QEjvtw-`;
function U(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !oe() && !t ? null : (0, I.jsx)(W, { ...e });
}
function W(e) {
  let { className: t, id: n } = e,
    [r, i] = le(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = H),
    (0, I.jsx)(`div`, {
      className: P(V, o, t),
      children: (0, I.jsx)(S, { id: n, eHWCompat: a }),
    })
  );
}
function ue(e) {
  return (0, F.useMemo)(() => G(e), [e?.id, e?.type]);
}
function de(e, t) {
  return (0, F.useMemo)(() => he(e, t), [e, t]);
}
function fe(e, t) {
  return (0, F.useMemo)(() => me(e, t), [e, t]);
}
function G(e) {
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
function pe(e) {
  if (`appid` in e) return { id: e.appid, type: `game` };
  if (`packageid` in e) return { id: e.packageid, type: `sub` };
  if (`bundleid` in e) return { id: e.bundleid, type: `bundle` };
}
function me(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function he(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
async function ge() {
  let e = se(`broadcast_available_for_page`, `application_config`);
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
var K = class {
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
(O([t], K.prototype, `title`, void 0),
  O([t], K.prototype, `viewer_count`, void 0),
  O([t], K.prototype, `gamedata_subtitle`, void 0),
  O([t], K.prototype, `current_selection_priority`, void 0));
var _e = `primary`,
  ve = `featured`,
  ye = `default_featured`,
  be = `general`,
  xe = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function Se(e) {
  switch (e) {
    case _e:
      return 3;
    case ve:
      return 2;
    case ye:
      return 1;
    case be:
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
function Ce() {
  return o(J());
}
function we(e) {
  let { data: t } = Ce(),
    [n, i] = (0, F.useState)(!1),
    a = r(),
    o = M();
  return (
    (0, F.useEffect)(() => {
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
function J() {
  return {
    queryKey: Te(),
    queryFn: async () => {
      let e = await ge();
      return new Set(e);
    },
  };
}
function Te() {
  return [`BroadcastApps`];
}
var Ee = `hRwhHwwKlgI-`;
function Y() {
  return (0, I.jsx)(`div`, {
    className: Ee,
    children: E(`#home_page_live_broadcast`),
  });
}
function X(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = f(),
    { data: a } = b(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    l = we(t),
    u = o && !n,
    d = s && !n,
    p = !n && r;
  return (0, I.jsxs)(`div`, {
    className: P(c, `CapsuleDecorators`),
    children: [
      u &&
        (0, I.jsxs)(`span`, {
          className: P(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, I.jsx)(`img`, {
              src: D(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: C.Localize(`#Sale_InLibrary`),
            }),
            C.Localize(`#Sale_InLibrary`),
          ],
        }),
      d &&
        (0, I.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, I.jsx)(N, { className: `ppO76q5Y-Zg-` }),
            C.Localize(`#Sale_OnWishlist`),
          ],
        }),
      p && !u && !d && (0, I.jsx)(De, { appids: t }),
      l && (0, I.jsx)(Y, {}),
    ],
  });
}
function De(e) {
  let { appids: t } = e;
  return Oe(t)
    ? (0, I.jsx)(`span`, {
        className: P(g, h),
        children: C.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function Oe(e) {
  let [t, n] = (0, F.useState)(!1),
    i = r(),
    a = M();
  return (
    (0, F.useEffect)(() => {
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
function ke(e, t, n, r, i, a) {
  if (!n) return;
  if (!l(e.item_type)) {
    ie(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let o = re(`${te(e, r)}${i ? `?${i}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = T(e) || window;
      a ? a(e) : o.startsWith(`steam://`) || (t.location.href = ae(o));
    },
    onOKActionDescription: C.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function Z(e) {
  let {
      id: t,
      bPreferLibrary: n,
      bPreferAssetWithoutOverride: r,
      bNoShadow: i,
    } = e,
    a = i ? d : ``,
    { storeItemDefaultInfo: o, storeItemAsset: c } = Q(t, `vertical`, r),
    [l, u] = F.useState(0);
  if (!o || !c) return (0, I.jsx)(`div`, { className: y });
  let { strStoreVerticalURL: f, strLibraryVerticalURL: h } = z(c, o);
  if (f && (!n || !h))
    return (0, I.jsxs)(`div`, {
      className: P(y, `HeroCapsuleImageContainer`),
      children: [
        (0, I.jsx)(`img`, { src: f, className: s, alt: o.name }),
        o.type == 4 &&
          (0, I.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${ce.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (h)
    return (0, I.jsxs)(`div`, {
      className: P(m, ee, n ? p : ``, a),
      children: [
        (0, I.jsx)(`div`, {
          className: v,
          style: { backgroundImage: `url(${h})` },
        }),
        (0, I.jsx)(`img`, { src: h, className: s, alt: o.name }),
      ],
    });
  let g = R(c, !0),
    _ = g.length - 1,
    b = (e) => {
      let t = g.indexOf(e);
      t >= _ && t < g.length - 1 && u(t + 1);
    };
  if (l < g.length) {
    let e = g[l];
    return (0, I.jsxs)(`div`, {
      className: P(m, a),
      children: [
        (0, I.jsx)(`div`, {
          className: v,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, I.jsx)(x, {
          lazyLoad: !0,
          srcs: g,
          className: s,
          alt: o.name,
          onImageError: b,
        }),
      ],
    });
  }
  return (0, I.jsx)(`div`, { className: y });
}
function Q(e, t, n = !1) {
  let { data: r } = k(e),
    { data: i } = j(e, n),
    a = $(r, i, t),
    { data: o } = k(a),
    { data: s } = j(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function $(e, t, n) {
  if (
    e &&
    e.included_appids?.length == 1 &&
    !Ae(t, n) &&
    e.item_type &&
    [1, 2].includes(e.item_type)
  )
    return { appid: e.included_appids[0] };
}
function Ae(e, t) {
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
      return (ne(t, `Unhandled imageType: ${t}`), !1);
  }
}
export {
  R as _,
  Y as a,
  xe as c,
  G as d,
  pe as f,
  U as g,
  fe as h,
  X as i,
  K as l,
  ue as m,
  Z as n,
  J as o,
  de as p,
  ke as r,
  Se as s,
  $ as t,
  q as u,
  L as v,
};

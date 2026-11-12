/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, K as n, ot as r, w as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~eefd71512b.js";
import { u as o } from "./chunk~739842ca30.js";
import { Md as s, Mu as c, ef as l, im as u, si as d } from "./main.js";
var f = e(t(), 1),
  p = r(),
  m = f.createContext({
    AddImpression: () => {
      console.log(`Impression Tracking not enabled`);
    },
    BIsValid: () => !1,
  });
function h() {
  return f.useContext(m);
}
function g(e) {
  let { appID: t, feature: n, depth: r, children: i } = e,
    a = d(n, r),
    o = h(),
    [l, u] = f.useState(void 0),
    p = f.useCallback(
      (e) => {
        e.isIntersecting &&
          u((e) => (e?.appID == t && e?.snr == a ? e : { appID: t, snr: a }));
      },
      [t, a],
    );
  (0, f.useEffect)(() => {
    l && l.appID != null && o.AddImpression(l.appID, l.snr);
  }, [o, l]);
  let m = c(p),
    g = t && (!l || (l.appID != t && l.snr != a)),
    _ = s(i.props.ref, g ? m : void 0);
  return f.cloneElement(i, { ref: _ });
}
var _ = `minigamev2/itemdefs`,
  v = `appid`,
  y = `editor`;
function b() {
  return (typeof self < `u` ? self.origin + `/` : ``) === u.STORE_BASE_URL
    ? u.STORE_BASE_URL
    : u.COMMUNITY_BASE_URL;
}
async function x(e, t) {
  if (!e) return [];
  let n = new URLSearchParams({ [v]: String(e), l: u.LANGUAGE });
  t && n.set(y, `1`);
  let r = `${b()}${_}?${n}`,
    i = await fetch(r, { credentials: t ? `include` : `same-origin` });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  if (a?.success == 1 && a.item_definitions) return a.item_definitions;
  throw Error(
    `Community item definitions for app ` + e + ` answered ` + a?.success,
  );
}
function S(e, t) {
  return [`MinigameCommunityItemDefs`, e, !!t];
}
function C(e, t) {
  return { queryKey: S(e, t), queryFn: () => x(e, t), enabled: !!e, retry: !1 };
}
function w(e, t) {
  let { data: r } = n(C(e, t));
  return r;
}
function T(e, t, n) {
  let r = w(e, n);
  return (0, f.useMemo)(
    () => r?.find((r) => (n || r.active) && r.appid == e && r.item_type == t),
    [r, e, t, n],
  );
}
function E(e) {
  let {
    appid: t,
    item_image_small: n,
    item_image_large: r,
    item_movie_mp4: i,
    item_movie_webm: a,
    item_title: o,
  } = e;
  if (i && a) {
    let r = `${u.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n}`,
      o = `${u.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a}`,
      s = `${u.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${i}`;
    return (0, p.jsx)(p.Fragment, {
      children: (0, p.jsxs)(`video`, {
        muted: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        poster: r,
        playsInline: !0,
        className: e.videoClassName,
        children: [
          (0, p.jsx)(`source`, { src: o, type: `video/webm` }),
          !u.IN_CLIENT && (0, p.jsx)(`source`, { src: s, type: `video/mp4` }),
        ],
      }),
    });
  }
  {
    let i = `${u.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n || r}`;
    return (0, p.jsx)(`img`, { className: e.className, src: i, alt: o });
  }
}
function D(e) {
  let { appid: t, community_item_type: n, bForEdit: r } = e,
    i = T(t, n, r),
    s =
      i && !i.active
        ? (0, p.jsx)(`div`, {
            className: o,
            children: l(`#Sale_Section_RewardShelf_ItemInActiveWarning`),
          })
        : void 0;
  return i
    ? (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(E, { ...i }), s] })
    : (0, p.jsx)(a, { size: `small`, string: l(`#Loading`) });
}
function O(e) {
  let { section: t, rewardDef: n, language: r } = e,
    a = T(n.appid ?? 0, n.community_item_type ?? 0),
    [o] = i(() => [!!t.rewards?.show_reward_item_name]),
    s;
  switch (n.community_class) {
    case 14:
    case 15:
      s = `${u.COMMUNITY_BASE_URL}my/edit/avatar`;
      break;
    case 1:
      s = `${u.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
      break;
    case 3:
    case 8:
      s = `${u.COMMUNITY_BASE_URL}my/edit/background`;
      break;
    case 13:
      s = `${u.COMMUNITY_BASE_URL}my/edit/miniprofile`;
      break;
    case 11:
      s = `${u.COMMUNITY_BASE_URL}chat`;
  }
  return (0, p.jsxs)(`a`, {
    href: s,
    children: [
      (0, p.jsx)(D, {
        appid: n.appid ?? 0,
        community_item_type: n.community_item_type ?? 0,
      }),
      !!o && (0, p.jsx)(`span`, { children: a?.item_name }),
    ],
  });
}
export { g as a, T as i, O as n, h as o, D as r, E as t };

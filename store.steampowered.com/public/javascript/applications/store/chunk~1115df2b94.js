/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { Eo as r, yt as i } from "./chunk~6b8ddcaac8.js";
import { t as a } from "./chunk~6bf4d41b04.js";
import { a as o, i as s } from "./chunk~2f085f1384.js";
import { t as c } from "./chunk~f4c928a27a.js";
import { t as l } from "./chunk~4e9767668d.js";
import { r as u } from "./chunk~38061b7abb.js";
import { t as d } from "./chunk~4dd1695ad6.js";
import {
  Ec as f,
  Ju as p,
  Pv as m,
  Ql as h,
  Wb as g,
  Xc as _,
  Zl as v,
  kv as y,
  ol as b,
  pt as x,
  qb as S,
  wc as C,
  yS as w,
} from "./main.js";
var T = n();
function E(e) {
  return g()
    ? (0, T.jsx)(c, { ...e })
    : s()
      ? (0, T.jsx)(c, { ...e, bShowReviewSummary: !0 })
      : (0, T.jsx)(l, { ...e });
}
var D = `eNekHvzmFIU-`,
  O = `ByLDUFOvSAw-`,
  k = `pRJkF9pz-wk-`,
  A = `Szw0O0yQQ6s-`,
  j = `QRE8EAd1KB0-`,
  M = `tkQ8DuOjbEQ-`,
  N = `zxJrq-uqOps-`,
  P = `otwjBnZkTxs-`,
  F = `_5AqboO3d9Og-`,
  I = `qNtqagKFy8w-`,
  L = `NKeeNIZXM0E-`,
  R = `lI4Ua914eqo-`,
  z = `S-bqOgtMzmg-`,
  B = e(t(), 1);
function V(e) {
  let { appid: t, strUrlOverride: n } = e,
    i = r(t),
    { data: a } = m(i);
  return (
    (0, B.useEffect)(() => {
      if (a) {
        let e = `${S.STORE_BASE_URL}${a.store_url_path}`.replace(
          `/app/`,
          n ?? `/verified/`,
        );
        e != window.location.href && window.history.replaceState({}, ``, e);
      }
    }, [a, n]),
    !a || !i
      ? null
      : (0, T.jsx)(x, {
          method: `verifiedprogram`,
          children: (0, T.jsx)(_, { children: (0, T.jsx)(U, { id: i }) }),
        })
  );
}
function H(e) {
  let { id: t } = e,
    { data: n } = m(t),
    r = `${S.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
  return (0, T.jsxs)(T.Fragment, {
    children: [
      (0, T.jsx)(`div`, {
        className: j,
        children: i.LocalizeReact(
          `#VerifiedProgram_DeckTitle`,
          n?.name,
          (0, T.jsxs)(`span`, {
            className: M,
            children: [
              (0, T.jsx)(`img`, {
                src: r,
                alt: i.Localize(`#VerifiedProgram_DeckAlt`),
              }),
              i.Localize(`#VerifiedProgram_DeckTitle_Verified`),
            ],
          }),
        ),
      }),
      (0, T.jsx)(`div`, {
        className: N,
        children: i.LocalizeReact(
          `#VerifiedProgram_DeckSubTitle`,
          (0, T.jsx)(b, {
            className: O,
            href: `${S.STORE_BASE_URL}greatondeck`,
            children: i.Localize(`#VerifiedProgram_GreatOnDeck`),
          }),
        ),
      }),
    ],
  });
}
function U(e) {
  let { id: t } = e;
  return (0, T.jsxs)(`div`, {
    className: D,
    children: [
      (0, T.jsx)(W, { id: t }),
      (0, T.jsxs)(`div`, {
        className: C(`page_content`),
        children: [
          (0, T.jsx)(H, { id: t }),
          (0, T.jsx)(q, { id: t }),
          (0, T.jsx)(G, { id: t }),
          (0, T.jsx)(K, {}),
        ],
      }),
    ],
  });
}
function W(e) {
  let { id: t } = e,
    { data: n } = y(t);
  if (!n) return null;
  let r = f(n, `library_hero_2x`) ?? f(n, `library_hero`);
  return (0, T.jsxs)(T.Fragment, {
    children: [
      (0, T.jsx)(`div`, {
        className: k,
        children: (0, T.jsx)(`img`, { src: r, alt: `` }),
      }),
      (0, T.jsx)(`div`, {
        className: A,
        children: (0, T.jsx)(`img`, { src: r, alt: `` }),
      }),
    ],
  });
}
function G(e) {
  let { id: t } = e;
  return (0, T.jsx)(`div`, {
    className: L,
    children: (0, T.jsx)(E, {
      id: `appid` in t ? t.appid : 0,
      type: `game`,
      bShowDeckCompatibilityDialog: !1,
      bShowDemoButton: !0,
      bAutoFocus: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function K(e) {
  let t = p(`${S.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`, `banner`);
  return (0, T.jsx)(b, {
    href: t,
    className: C(R),
    children: (0, T.jsx)(J, {}),
  });
}
function q(e) {
  let { id: t } = e,
    { data: n } = m(t),
    r = h(t);
  if (!r) return null;
  let a = `${S.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
    { rgDashTrailers: o, rgHlsTrailers: s } = v(r);
  return (0, T.jsxs)(`div`, {
    className: P,
    children: [
      (0, T.jsxs)(`div`, {
        className: C(I),
        children: [
          (0, T.jsx)(d, {
            children: (0, T.jsx)(`div`, {
              className: z,
              children: (0, T.jsx)(u, {
                dashManifests: o,
                hlsManifest: s[0],
                screenshot: r.screenshot_full ?? r.screenshot_medium ?? ``,
                altText: n?.name ?? ``,
                muteWhenAutoplayBlocked: !0,
              }),
            }),
          }),
          (0, T.jsx)(`img`, {
            src: a,
            alt: i.Localize(`#VerifiedProgram_DeckDeviceAlt`),
          }),
        ],
      }),
      (0, T.jsx)(`div`, {
        className: F,
        children: i.Localize(`#VerifiedProgram_DeckDisclaimer`),
      }),
    ],
  });
}
function J(e) {
  let t = o(),
    n = w(S.LANGUAGE);
  return (0, T.jsx)(a, {
    language: n,
    strAltText: i.Localize(`#VerifiedProgram_DeckShopBannerAlt`),
    strImageToken: t
      ? `{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg`
      : `{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg`,
  });
}
function Y(e) {
  let {
    match: {
      params: { appid: t },
    },
  } = e;
  return (0, T.jsx)(V, { appid: Number.parseInt(t) });
}
export { Y as default };

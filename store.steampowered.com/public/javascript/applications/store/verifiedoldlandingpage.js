/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { V as r } from "./storelink.js";
import { t as i } from "./clanimage.js";
import { a, i as o } from "./ostype.js";
import { t as s } from "./salepreviewwidgets.js";
import { t as c } from "./saleitemlibrarywidget.js";
import { r as l } from "./saletechredirectsignin.js";
import { r as u } from "./trailertitlebar.js";
import { t as d } from "./trailerstate.js";
import {
  Hb as f,
  Jc as p,
  Jl as m,
  Sc as h,
  Uu as g,
  ht as _,
  kv as v,
  mS as y,
  nl as b,
  ql as x,
  wc as S,
  wv as C,
  zb as w,
} from "./main.js";
var T = n();
function E(e) {
  return w()
    ? (0, T.jsx)(s, { ...e })
    : o()
      ? (0, T.jsx)(s, { ...e, bShowReviewSummary: !0 })
      : (0, T.jsx)(c, { ...e });
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
    { data: a } = v(i);
  return (
    (0, B.useEffect)(() => {
      if (a) {
        let e = `${f.STORE_BASE_URL}${a.store_url_path}`.replace(
          `/app/`,
          n ?? `/verified/`,
        );
        e != window.location.href && window.history.replaceState({}, ``, e);
      }
    }, [a, n]),
    !a || !i
      ? null
      : (0, T.jsx)(_, {
          method: `verifiedprogram`,
          children: (0, T.jsx)(p, { children: (0, T.jsx)(U, { id: i }) }),
        })
  );
}
function H(e) {
  let { id: t } = e,
    { data: n } = v(t),
    r = `${f.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
  return (0, T.jsxs)(T.Fragment, {
    children: [
      (0, T.jsx)(`div`, {
        className: j,
        children: l.LocalizeReact(
          `#VerifiedProgram_DeckTitle`,
          n?.name,
          (0, T.jsxs)(`span`, {
            className: M,
            children: [
              (0, T.jsx)(`img`, {
                src: r,
                alt: l.Localize(`#VerifiedProgram_DeckAlt`),
              }),
              l.Localize(`#VerifiedProgram_DeckTitle_Verified`),
            ],
          }),
        ),
      }),
      (0, T.jsx)(`div`, {
        className: N,
        children: l.LocalizeReact(
          `#VerifiedProgram_DeckSubTitle`,
          (0, T.jsx)(b, {
            className: O,
            href: `${f.STORE_BASE_URL}greatondeck`,
            children: l.Localize(`#VerifiedProgram_GreatOnDeck`),
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
        className: h(`page_content`),
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
    { data: n } = C(t);
  if (!n) return null;
  let r = S(n, `library_hero_2x`) ?? S(n, `library_hero`);
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
  let t = g(`${f.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`, `banner`);
  return (0, T.jsx)(b, {
    href: t,
    className: h(R),
    children: (0, T.jsx)(J, {}),
  });
}
function q(e) {
  let { id: t } = e,
    { data: n } = v(t),
    r = m(t);
  if (!r) return null;
  let i = `${f.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
    { rgDashTrailers: a, rgHlsTrailers: o } = x(r);
  return (0, T.jsxs)(`div`, {
    className: P,
    children: [
      (0, T.jsxs)(`div`, {
        className: h(I),
        children: [
          (0, T.jsx)(d, {
            children: (0, T.jsx)(`div`, {
              className: z,
              children: (0, T.jsx)(u, {
                dashManifests: a,
                hlsManifest: o[0],
                screenshot: r.screenshot_full ?? r.screenshot_medium ?? ``,
                altText: n?.name ?? ``,
                muteWhenAutoplayBlocked: !0,
              }),
            }),
          }),
          (0, T.jsx)(`img`, {
            src: i,
            alt: l.Localize(`#VerifiedProgram_DeckDeviceAlt`),
          }),
        ],
      }),
      (0, T.jsx)(`div`, {
        className: F,
        children: l.Localize(`#VerifiedProgram_DeckDisclaimer`),
      }),
    ],
  });
}
function J(e) {
  let t = a(),
    n = y(f.LANGUAGE);
  return (0, T.jsx)(i, {
    language: n,
    strAltText: l.Localize(`#VerifiedProgram_DeckShopBannerAlt`),
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

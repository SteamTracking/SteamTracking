/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { Cb as r, Hb as i, Sb as a, Sc as o } from "./main.js";
function s(e) {
  let { appid: t, profileUrl: n, dlc: r } = e,
    a = n
      ? `${n}/achievements/${t}`
      : `${i.COMMUNITY_BASE_URL}achievements/${t}`;
  return r === void 0 ? a : `${a}?dlc=${r}`;
}
function c(e) {
  return s(e);
}
var l = e(t(), 1),
  u = `CK7wluN09Eo-`,
  d = `dc7pWlMQLmU-`,
  f = `gKxbRyrbiIU-`,
  p = {};
(p.arabic = () =>
  a(() => import(`./achievements_arabic.js`), [], import.meta.url)),
  (p.brazilian = () =>
    a(() => import(`./achievements_brazilian.js`), [], import.meta.url)),
  (p.bulgarian = () =>
    a(() => import(`./achievements_bulgarian.js`), [], import.meta.url)),
  (p.czech = () =>
    a(() => import(`./achievements_czech.js`), [], import.meta.url)),
  (p.danish = () =>
    a(() => import(`./achievements_danish.js`), [], import.meta.url)),
  (p.dutch = () =>
    a(() => import(`./achievements_dutch.js`), [], import.meta.url)),
  (p.english = () =>
    a(() => import(`./achievements_english.js`), [], import.meta.url)),
  (p.finnish = () =>
    a(() => import(`./achievements_finnish.js`), [], import.meta.url)),
  (p.french = () =>
    a(() => import(`./achievements_french.js`), [], import.meta.url)),
  (p.german = () =>
    a(() => import(`./achievements_german.js`), [], import.meta.url)),
  (p.greek = () =>
    a(() => import(`./achievements_greek.js`), [], import.meta.url)),
  (p.hungarian = () =>
    a(() => import(`./achievements_hungarian.js`), [], import.meta.url)),
  (p.indonesian = () =>
    a(() => import(`./achievements_indonesian.js`), [], import.meta.url)),
  (p.italian = () =>
    a(() => import(`./achievements_italian.js`), [], import.meta.url)),
  (p.japanese = () =>
    a(() => import(`./achievements_japanese.js`), [], import.meta.url)),
  (p.koreana = () =>
    a(() => import(`./achievements_koreana.js`), [], import.meta.url)),
  (p.latam = () =>
    a(() => import(`./achievements_latam.js`), [], import.meta.url)),
  (p.malay = () =>
    a(() => import(`./achievements_malay.js`), [], import.meta.url)),
  (p.norwegian = () =>
    a(() => import(`./achievements_norwegian.js`), [], import.meta.url)),
  (p.polish = () =>
    a(() => import(`./achievements_polish.js`), [], import.meta.url)),
  (p.portuguese = () =>
    a(() => import(`./achievements_portuguese.js`), [], import.meta.url)),
  (p.romanian = () =>
    a(() => import(`./achievements_romanian.js`), [], import.meta.url)),
  (p.russian = () =>
    a(() => import(`./achievements_russian.js`), [], import.meta.url)),
  (p.sc_schinese = () =>
    a(() => import(`./achievements_sc_schinese.js`), [], import.meta.url)),
  (p.schinese = () =>
    a(() => import(`./achievements_schinese.js`), [], import.meta.url)),
  (p.spanish = () =>
    a(() => import(`./achievements_spanish.js`), [], import.meta.url)),
  (p.swedish = () =>
    a(() => import(`./achievements_swedish.js`), [], import.meta.url)),
  (p.tchinese = () =>
    a(() => import(`./achievements_tchinese.js`), [], import.meta.url)),
  (p.thai = () =>
    a(() => import(`./achievements_thai.js`), [], import.meta.url)),
  (p.turkish = () =>
    a(() => import(`./achievements_turkish.js`), [], import.meta.url)),
  (p.ukrainian = () =>
    a(() => import(`./achievements_ukrainian.js`), [], import.meta.url)),
  (p.vietnamese = () =>
    a(() => import(`./achievements_vietnamese.js`), [], import.meta.url));
async function m(e) {
  if (p[e]) return await p[e]();
}
var h = r(m);
function g(e) {
  return e !== void 0 && e < 10;
}
var _ = n();
function v(e) {
  if (e !== void 0) return { "--icon-size": e == `fill` ? `100%` : `${e}px` };
}
function y(e) {
  let {
      imgURL: t,
      glow: n,
      pauseAnimation: r,
      hidden: i,
      alt: a,
      hideNativeTooltip: s = !1,
      className: c,
      size: p,
      ...m
    } = e,
    [h, g] = l.useState(!1),
    y = l.useCallback((e) => {
      e &&
        (e.complete
          ? g(!0)
          : (e.onload = () => {
              g(!0);
            }));
    }, []),
    b = n && (i || h),
    x = v(p);
  return (0, _.jsxs)(`div`, {
    className: o(d, c, r && `QitWOKeXzIo-`),
    style: x,
    ...m,
    children: [
      b &&
        (0, _.jsx)(`div`, {
          className: `pZot2CAG0rQ-`,
          children: (0, _.jsx)(`div`, {
            className: `tzerkVxSWek-`,
            children: (0, _.jsx)(`div`, { className: `rl2nPtOHt2k-` }),
          }),
        }),
      i
        ? (0, _.jsx)(`div`, {
            className: o(f, b && `HTU-WDYrxMw-`),
            children: `?`,
          })
        : (0, _.jsx)(`img`, {
            ref: y,
            className: o(u, b && `HTU-WDYrxMw-`),
            src: t == `` ? void 0 : t,
            loading: `lazy`,
            alt: a,
            title: s ? void 0 : a,
          }),
    ],
  });
}
function b(e) {
  let {
      achievement: t,
      globalUnlockPercentage: n,
      unlocked: r,
      forceVisible: i = !1,
      hidden: a,
      ...o
    } = e,
    s = a ?? (!r && !i && t.hidden),
    c = (r ? t.icon_achieved : t.icon_unachieved) ?? ``,
    l = r && g(n),
    u = s ? h.Localize(`#AchievementSpoilerName`) : (t.name ?? ` `);
  return (0, _.jsx)(y, { hidden: s, imgURL: c, glow: l, alt: u, ...o });
}
export { c as i, y as n, h as r, b as t };

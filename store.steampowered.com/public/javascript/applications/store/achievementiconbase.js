/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { Cb as r, Cc as i, Ub as a, wb as o } from "./main.js";
function s(e) {
  let { appid: t, profileUrl: n, dlc: r } = e,
    i = n
      ? `${n}/achievements/${t}`
      : `${a.COMMUNITY_BASE_URL}achievements/${t}`;
  return r === void 0 ? i : `${i}?dlc=${r}`;
}
function c(e) {
  return s(e);
}
var l = e(t(), 1),
  u = `CK7wluN09Eo-`,
  d = `dc7pWlMQLmU-`,
  f = `gKxbRyrbiIU-`,
  p = {};
((p.arabic = () =>
  r(() => import(`./achievements_arabic.js`), [], import.meta.url)),
  (p.brazilian = () =>
    r(() => import(`./achievements_brazilian.js`), [], import.meta.url)),
  (p.bulgarian = () =>
    r(() => import(`./achievements_bulgarian.js`), [], import.meta.url)),
  (p.czech = () =>
    r(() => import(`./achievements_czech.js`), [], import.meta.url)),
  (p.danish = () =>
    r(() => import(`./achievements_danish.js`), [], import.meta.url)),
  (p.dutch = () =>
    r(() => import(`./achievements_dutch.js`), [], import.meta.url)),
  (p.english = () =>
    r(() => import(`./achievements_english.js`), [], import.meta.url)),
  (p.finnish = () =>
    r(() => import(`./achievements_finnish.js`), [], import.meta.url)),
  (p.french = () =>
    r(() => import(`./achievements_french.js`), [], import.meta.url)),
  (p.german = () =>
    r(() => import(`./achievements_german.js`), [], import.meta.url)),
  (p.greek = () =>
    r(() => import(`./achievements_greek.js`), [], import.meta.url)),
  (p.hungarian = () =>
    r(() => import(`./achievements_hungarian.js`), [], import.meta.url)),
  (p.indonesian = () =>
    r(() => import(`./achievements_indonesian.js`), [], import.meta.url)),
  (p.italian = () =>
    r(() => import(`./achievements_italian.js`), [], import.meta.url)),
  (p.japanese = () =>
    r(() => import(`./achievements_japanese.js`), [], import.meta.url)),
  (p.koreana = () =>
    r(() => import(`./achievements_koreana.js`), [], import.meta.url)),
  (p.latam = () =>
    r(() => import(`./achievements_latam.js`), [], import.meta.url)),
  (p.malay = () =>
    r(() => import(`./achievements_malay.js`), [], import.meta.url)),
  (p.norwegian = () =>
    r(() => import(`./achievements_norwegian.js`), [], import.meta.url)),
  (p.polish = () =>
    r(() => import(`./achievements_polish.js`), [], import.meta.url)),
  (p.portuguese = () =>
    r(() => import(`./achievements_portuguese.js`), [], import.meta.url)),
  (p.romanian = () =>
    r(() => import(`./achievements_romanian.js`), [], import.meta.url)),
  (p.russian = () =>
    r(() => import(`./achievements_russian.js`), [], import.meta.url)),
  (p.sc_schinese = () =>
    r(() => import(`./achievements_sc_schinese.js`), [], import.meta.url)),
  (p.schinese = () =>
    r(() => import(`./achievements_schinese.js`), [], import.meta.url)),
  (p.spanish = () =>
    r(() => import(`./achievements_spanish.js`), [], import.meta.url)),
  (p.swedish = () =>
    r(() => import(`./achievements_swedish.js`), [], import.meta.url)),
  (p.tchinese = () =>
    r(() => import(`./achievements_tchinese.js`), [], import.meta.url)),
  (p.thai = () =>
    r(() => import(`./achievements_thai.js`), [], import.meta.url)),
  (p.turkish = () =>
    r(() => import(`./achievements_turkish.js`), [], import.meta.url)),
  (p.ukrainian = () =>
    r(() => import(`./achievements_ukrainian.js`), [], import.meta.url)),
  (p.vietnamese = () =>
    r(() => import(`./achievements_vietnamese.js`), [], import.meta.url)));
async function m(e) {
  if (p[e]) return await p[e]();
}
var h = o(m);
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
      hidden: a,
      alt: o,
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
    b = n && (a || h),
    x = v(p);
  return (0, _.jsxs)(`div`, {
    className: i(d, c, r && `QitWOKeXzIo-`),
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
      a
        ? (0, _.jsx)(`div`, {
            className: i(f, b && `HTU-WDYrxMw-`),
            children: `?`,
          })
        : (0, _.jsx)(`img`, {
            ref: y,
            className: i(u, b && `HTU-WDYrxMw-`),
            src: t == `` ? void 0 : t,
            loading: `lazy`,
            alt: o,
            title: s ? void 0 : o,
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

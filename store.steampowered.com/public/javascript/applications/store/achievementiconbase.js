/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { Db as r, Ob as i, qb as a, wc as o } from "./main.js";
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
  r(() => import(`./chunk~9465be5be3.js`), [], import.meta.url)),
  (p.brazilian = () =>
    r(() => import(`./chunk~2027cf6ba7.js`), [], import.meta.url)),
  (p.bulgarian = () =>
    r(() => import(`./chunk~68086bdbd2.js`), [], import.meta.url)),
  (p.czech = () =>
    r(() => import(`./chunk~395548bcfb.js`), [], import.meta.url)),
  (p.danish = () =>
    r(() => import(`./chunk~f5cd104b90.js`), [], import.meta.url)),
  (p.dutch = () =>
    r(() => import(`./chunk~b9b23c4881.js`), [], import.meta.url)),
  (p.english = () =>
    r(() => import(`./chunk~30012300b3.js`), [], import.meta.url)),
  (p.finnish = () =>
    r(() => import(`./chunk~85dbf37835.js`), [], import.meta.url)),
  (p.french = () =>
    r(() => import(`./chunk~7310bd1e9f.js`), [], import.meta.url)),
  (p.german = () =>
    r(() => import(`./chunk~faafba15c1.js`), [], import.meta.url)),
  (p.greek = () =>
    r(() => import(`./chunk~3344aa5ba1.js`), [], import.meta.url)),
  (p.hungarian = () =>
    r(() => import(`./chunk~e4e799e129.js`), [], import.meta.url)),
  (p.indonesian = () =>
    r(() => import(`./chunk~2c42a49fc3.js`), [], import.meta.url)),
  (p.italian = () =>
    r(() => import(`./chunk~c4e900cbd8.js`), [], import.meta.url)),
  (p.japanese = () =>
    r(() => import(`./chunk~4d9917879e.js`), [], import.meta.url)),
  (p.koreana = () =>
    r(() => import(`./chunk~87dcf8f3e0.js`), [], import.meta.url)),
  (p.latam = () =>
    r(() => import(`./chunk~b2f33036b0.js`), [], import.meta.url)),
  (p.malay = () =>
    r(() => import(`./chunk~1af5cd205c.js`), [], import.meta.url)),
  (p.norwegian = () =>
    r(() => import(`./chunk~621e94d76e.js`), [], import.meta.url)),
  (p.polish = () =>
    r(() => import(`./chunk~538bc539b9.js`), [], import.meta.url)),
  (p.portuguese = () =>
    r(() => import(`./chunk~c422b65626.js`), [], import.meta.url)),
  (p.romanian = () =>
    r(() => import(`./chunk~db8db31702.js`), [], import.meta.url)),
  (p.russian = () =>
    r(() => import(`./chunk~ced2be1757.js`), [], import.meta.url)),
  (p.sc_schinese = () =>
    r(() => import(`./chunk~c6041e7242.js`), [], import.meta.url)),
  (p.schinese = () =>
    r(() => import(`./chunk~78dc5c618e.js`), [], import.meta.url)),
  (p.spanish = () =>
    r(() => import(`./chunk~219e0af30d.js`), [], import.meta.url)),
  (p.swedish = () =>
    r(() => import(`./chunk~c0138fb192.js`), [], import.meta.url)),
  (p.tchinese = () =>
    r(() => import(`./chunk~5bf062d8db.js`), [], import.meta.url)),
  (p.thai = () =>
    r(() => import(`./chunk~b394970be5.js`), [], import.meta.url)),
  (p.turkish = () =>
    r(() => import(`./chunk~9f9803f307.js`), [], import.meta.url)),
  (p.ukrainian = () =>
    r(() => import(`./chunk~068f0b42dc.js`), [], import.meta.url)),
  (p.vietnamese = () =>
    r(() => import(`./chunk~56c8ff51ea.js`), [], import.meta.url)));
async function m(e) {
  if (p[e]) return await p[e]();
}
var h = i(m);
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

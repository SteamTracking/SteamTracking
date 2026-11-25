/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, ot as r } from "./chunk~01cfc309bf.js";
import {
  Lb as i,
  Pc as a,
  Rb as o,
  ca as s,
  rx as c,
  ut as l,
  yy as u,
} from "./main.js";
function d(e) {
  let { appid: t, profileUrl: n, dlc: r } = e,
    i = n
      ? `${n}/achievements/${t}`
      : `${c.COMMUNITY_BASE_URL}achievements/${t}`;
  return r === void 0 ? i : `${i}?dlc=${r}`;
}
function f(e) {
  return d(e);
}
var p = e(t(), 1),
  m = `CK7wluN09Eo-`,
  h = `dc7pWlMQLmU-`,
  ee = `gKxbRyrbiIU-`,
  g = {};
((g.arabic = () =>
  i(() => import(`./chunk~9465be5be3.js`), [], import.meta.url)),
  (g.brazilian = () =>
    i(() => import(`./chunk~2027cf6ba7.js`), [], import.meta.url)),
  (g.bulgarian = () =>
    i(() => import(`./chunk~68086bdbd2.js`), [], import.meta.url)),
  (g.czech = () =>
    i(() => import(`./chunk~395548bcfb.js`), [], import.meta.url)),
  (g.danish = () =>
    i(() => import(`./chunk~f5cd104b90.js`), [], import.meta.url)),
  (g.dutch = () =>
    i(() => import(`./chunk~b9b23c4881.js`), [], import.meta.url)),
  (g.english = () =>
    i(() => import(`./chunk~30012300b3.js`), [], import.meta.url)),
  (g.finnish = () =>
    i(() => import(`./chunk~85dbf37835.js`), [], import.meta.url)),
  (g.french = () =>
    i(() => import(`./chunk~7310bd1e9f.js`), [], import.meta.url)),
  (g.german = () =>
    i(() => import(`./chunk~faafba15c1.js`), [], import.meta.url)),
  (g.greek = () =>
    i(() => import(`./chunk~3344aa5ba1.js`), [], import.meta.url)),
  (g.hungarian = () =>
    i(() => import(`./chunk~e4e799e129.js`), [], import.meta.url)),
  (g.indonesian = () =>
    i(() => import(`./chunk~2c42a49fc3.js`), [], import.meta.url)),
  (g.italian = () =>
    i(() => import(`./chunk~c4e900cbd8.js`), [], import.meta.url)),
  (g.japanese = () =>
    i(() => import(`./chunk~4d9917879e.js`), [], import.meta.url)),
  (g.koreana = () =>
    i(() => import(`./chunk~87dcf8f3e0.js`), [], import.meta.url)),
  (g.latam = () =>
    i(() => import(`./chunk~b2f33036b0.js`), [], import.meta.url)),
  (g.malay = () =>
    i(() => import(`./chunk~1af5cd205c.js`), [], import.meta.url)),
  (g.norwegian = () =>
    i(() => import(`./chunk~621e94d76e.js`), [], import.meta.url)),
  (g.polish = () =>
    i(() => import(`./chunk~538bc539b9.js`), [], import.meta.url)),
  (g.portuguese = () =>
    i(() => import(`./chunk~c422b65626.js`), [], import.meta.url)),
  (g.romanian = () =>
    i(() => import(`./chunk~db8db31702.js`), [], import.meta.url)),
  (g.russian = () =>
    i(() => import(`./chunk~ced2be1757.js`), [], import.meta.url)),
  (g.sc_schinese = () =>
    i(() => import(`./chunk~c6041e7242.js`), [], import.meta.url)),
  (g.schinese = () =>
    i(() => import(`./chunk~78dc5c618e.js`), [], import.meta.url)),
  (g.spanish = () =>
    i(() => import(`./chunk~219e0af30d.js`), [], import.meta.url)),
  (g.swedish = () =>
    i(() => import(`./chunk~c0138fb192.js`), [], import.meta.url)),
  (g.tchinese = () =>
    i(() => import(`./chunk~5bf062d8db.js`), [], import.meta.url)),
  (g.thai = () =>
    i(() => import(`./chunk~b394970be5.js`), [], import.meta.url)),
  (g.turkish = () =>
    i(() => import(`./chunk~9f9803f307.js`), [], import.meta.url)),
  (g.ukrainian = () =>
    i(() => import(`./chunk~068f0b42dc.js`), [], import.meta.url)),
  (g.vietnamese = () =>
    i(() => import(`./chunk~56c8ff51ea.js`), [], import.meta.url)));
async function _(e) {
  if (g[e]) return await g[e]();
}
var v = o(_);
function y(e) {
  return e !== void 0 && e < 10;
}
function b(e, t) {
  return new Intl.DateTimeFormat(s(), {
    year: `numeric`,
    month: `short`,
    day: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
    hourCycle: t ? `h23` : void 0,
  }).format(new Date(e * 1e3));
}
function x(e, t) {
  return v.Localize(`#Achievements_PercentFormat`, e.toLocaleString(s(), t));
}
function S(e) {
  return e === void 0
    ? ``
    : x(e, { maximumFractionDigits: 1, minimumFractionDigits: 1 });
}
function C(e) {
  return v.Localize(`#Achievements_Tooltip_GlobalUnlockPercent`, S(e));
}
function w(e, t) {
  return t
    ? {
        name: v.Localize(`#AchievementSpoilerName`),
        description: v.Localize(`#AchievementSpoilerDescription`),
      }
    : { name: e.name ?? ``, description: e.description ?? `` };
}
var T = `steamQueryPersist`,
  E = p.createContext(void 0);
E.Provider;
function D(e) {
  let { area: t, maxAgeSeconds: n, meta: i, ...a } = e,
    o = p.useContext(E),
    s = p.useMemo(() => te(i, t, n), [i, t, n]);
  return r({ ...a, meta: s, persister: o?.GetPersister(t) });
}
function te(e, t, n) {
  return { ...e, [T]: { area: t, maxAgeSeconds: n } };
}
function O(e, ...t) {
  return [`achievements`, e, ...t];
}
var ne = (e) => O(e, `schema_v2`);
async function k(e, t, n, r) {
  return (await r?.(t)) ?? A(e, t, n);
}
async function A(e, t, n) {
  let r = await l.GetGameAchievements(e, { appid: t, language: n });
  if (r.GetEResult() === 42)
    return {
      appid: t,
      language: n,
      groups: [],
      schema_hash: 0,
      schema_version: 0,
    };
  if (R(r)) throw new L();
  if (r.GetEResult() !== 1)
    throw (
      console.error(`Received error from GetGameAchievements`, r.GetEResult()),
      Error(`Error from GetGameAchievements: ${r.GetEResult()}`)
    );
  let i = {};
  return (
    (i[0] = {
      id: 0,
      archived: !1,
      developeronly: !1,
      ispublic: !0,
      dlcappid: 0,
      order: -1,
      achievements: [],
    }),
    r.Body().groups().toString(),
    r
      .Body()
      .groups()
      .forEach((e) => {
        let t = e.groupid();
        i[t] = {
          id: t,
          name: e.localized_name(),
          archived: e.archived() ?? !1,
          ispublic: e.ispublic() ?? !0,
          developeronly: e.developeronly() ?? !1,
          dlcappid: e.dlcappid() ?? 0,
          order: e.order() ?? 0,
          achievements: [],
        };
      }),
    r
      .Body()
      .toObject()
      ?.achievements?.forEach((e) => {
        let t = e.groupid ?? 0;
        i[t].achievements.push({
          internal_key: e.internal_key ?? 0,
          api_name: e.internal_name ?? ``,
          name: e.localized_name,
          description: e.localized_desc,
          hidden: e.hidden ?? !1,
          archived: e.archived ?? !1,
          icon_achieved: e.icon || void 0,
          icon_unachieved: e.icon_gray || void 0,
          groupid: e.groupid ?? 0,
          min_progress: e.min_progress_int ?? e.min_progress_float,
          max_progress: e.max_progress_int ?? e.max_progress_float,
        });
      }),
    {
      appid: t,
      language: n,
      groups: Object.values(i)
        .filter((e) => e.achievements.length > 0)
        .sort((e, t) => e.order - t.order),
      schema_hash: r.Body()?.schema_hash() ?? 0,
      schema_version: r.Body()?.schema_version() ?? 0,
    }
  );
}
var j = (e) => O(e, `globalpercentages`);
async function M(e, t) {
  let n = await l.GetGlobalAchievementPercentages(e, { appid: t });
  if (n.GetEResult() === 42) return { percentages: {} };
  if (R(n)) throw new L();
  if (n.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetGlobalAchievementPercentages`,
        n.GetEResult(),
      ),
      Error(`Error from GetGlobalAchievementPercentages: ${n.GetEResult()}`)
    );
  return {
    percentages: n
      .Body()
      .achievements()
      .reduce((e, t) => {
        let n = t.internal_key();
        return (n === void 0 || (e[n] = t.player_percent_unlocked() ?? 0.1), e);
      }, {}),
  };
}
function N(e, t) {
  return O(e, `user_achievements`, t);
}
function P(e, t) {
  return O(e, `local_user_achievements`, t);
}
function F(e, t, n, r) {
  return {
    appid: e,
    steamid: t,
    achievements: (n?.achievements() ?? []).reduce((e, t) => {
      let n = t.internal_key();
      return (
        (e[n] = {
          internal_key: n,
          unlocked: t.unlocked(),
          unlock_time: t.unlock_time(),
          progress: t.progress_int() ?? t.progress_float(),
        }),
        e
      );
    }, {}),
    groups: (n?.groups() ?? []).reduce((e, t) => {
      let n = t.groupid(),
        r = t.is_completed(),
        i = t.time_completed();
      return (
        (e[n] = {
          groupid: n,
          is_achievable: t.is_achievable(),
          completed_achievements: t.completed_achievements() ?? 0,
          is_completed: r !== void 0 && r,
          time_completed: i || void 0,
        }),
        e
      );
    }, {}),
    schema_hash: r,
  };
}
function I(e, t) {
  if (!e) return t;
  let n = { ...e.groups };
  for (let r of Object.values(t.groups)) {
    let t = e.groups[r.groupid];
    n[r.groupid] = {
      ...r,
      is_completed: (t?.is_completed ?? !1) || r.is_completed,
      time_completed: t?.time_completed ?? r.time_completed,
    };
  }
  let r = { ...e.achievements };
  for (let e of Object.values(t.achievements))
    r[e.internal_key]?.unlocked || (r[e.internal_key] = e);
  return { ...e, achievements: r, groups: n };
}
var L = class extends Error {
  constructor() {
    super(`Achievements request: server unreachable`);
  }
};
function R(e) {
  let t = e.Hdr().transport_error();
  return t === 2 || t === 3 || e.GetEResult() === 3;
}
async function z(e, t, n) {
  if (n == `` || n == `0`) return F(t, n, void 0, 0);
  let r = await l.GetUserAchievements(e, { appid: t, steamid: n });
  if (r.GetEResult() === 15 || r.GetEResult() === 18) return F(t, n, void 0, 0);
  if (R(r)) throw new L();
  if (r.GetEResult() !== 1)
    throw (
      console.error(`Received error from GetUserAchievements`, r.GetEResult()),
      Error(`Error from GetUserAchievements: ${r.GetEResult()}`)
    );
  return F(t, n, r.Body(), r.Body()?.schema_hash() ?? 0);
}
var B = n(),
  V = (0, p.createContext)({});
function H() {
  return (0, p.useContext)(V);
}
function U(e) {
  return e?.bNoRetryOnError
    ? {
        retry: !1,
        retryOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    : {};
}
function W(e, t) {
  return !(t instanceof L) && e < 3;
}
function G(e, t) {
  return `${c.BASE_URL_SHARED_CDN}community_assets/images/apps/${e}/${t}`;
}
function K(e, t, n) {
  return {
    ...t,
    icon_achieved: t.icon_achieved ? n(e, t.icon_achieved) : void 0,
    icon_unachieved: t.icon_unachieved ? n(e, t.icon_unachieved) : void 0,
  };
}
function q(e, t) {
  return {
    ...e,
    groups: e.groups.map((n) => ({
      ...n,
      name: n.id === 0 ? v.Localize(`#Achievements_Set_BaseGame`) : n.name,
      achievements: n.achievements.map((n) => K(e.appid, n, t)),
    })),
  };
}
function J(e, t, n) {
  return {
    queryKey: ne(t),
    queryFn: () => k(e, t, c.LANGUAGE, n),
    staleTime: 864e5,
    retry: W,
    area: `achievements`,
  };
}
function Y(e, t) {
  let n = u(),
    { fnGetAchievementIconURL: r = G, fnFetchLocalGameAchievements: i } = H(),
    a = (0, p.useCallback)((e) => q(e, r), [r]);
  return D({ ...J(n, e, i), select: a, ...U(t) });
}
function X(e, t) {
  return {
    queryKey: j(t),
    queryFn: async () => M(e, t),
    staleTime: 864e5,
    retry: W,
    area: `achievements`,
  };
}
function Z(e, t) {
  return D({ ...X(u(), e), ...U(t) });
}
function re(e, t) {
  let { data: n } = Z(e);
  if (n) return n.percentages[t] ?? void 0;
}
function ie(e, t, n) {
  return {
    queryKey: N(t, n),
    queryFn: async () => z(e, t, n),
    staleTime: 6e5,
    retry: W,
    area: `achievements`,
  };
}
function ae(e, t, n) {
  let { fnFetchLocalUserAchievements: i } = H(),
    a = !!i && !!t,
    o = r({
      queryKey: P(e, t),
      queryFn: async () => (await i(e, t)) ?? null,
      enabled: a,
      staleTime: 1 / 0,
    }),
    s = o.data,
    c = o.dataUpdatedAt,
    l = a && o.isPending;
  return (0, p.useMemo)(
    () =>
      l && n.data === void 0
        ? {
            ...n,
            status: `pending`,
            isPending: !0,
            isLoading: !0,
            isError: !1,
            error: null,
          }
        : s
          ? {
              ...n,
              data: I(n.data, s),
              dataUpdatedAt: Math.max(n.dataUpdatedAt, c),
              ...(n.isPending && {
                status: `success`,
                isPending: !1,
                isLoading: !1,
                isSuccess: !0,
              }),
            }
          : n,
    [n, s, c, l],
  );
}
function oe(e, t) {
  return ae(e, t, D(ie(u(), e, t)));
}
function Q(e) {
  if (e !== void 0) return { "--icon-size": e == `fill` ? `100%` : `${e}px` };
}
function $(e) {
  let {
      imgURL: t,
      glow: n,
      pauseAnimation: r,
      hidden: i,
      alt: o,
      hideNativeTooltip: s = !1,
      className: c,
      size: l,
      ...u
    } = e,
    [d, f] = p.useState(!1),
    g = p.useCallback((e) => {
      e &&
        (e.complete
          ? f(!0)
          : (e.onload = () => {
              f(!0);
            }));
    }, []),
    _ = n && (i || d),
    v = Q(l);
  return (0, B.jsxs)(`div`, {
    className: a(h, c, r && `QitWOKeXzIo-`),
    style: v,
    ...u,
    children: [
      _ &&
        (0, B.jsx)(`div`, {
          className: `pZot2CAG0rQ-`,
          children: (0, B.jsx)(`div`, {
            className: `tzerkVxSWek-`,
            children: (0, B.jsx)(`div`, { className: `rl2nPtOHt2k-` }),
          }),
        }),
      i
        ? (0, B.jsx)(`div`, {
            className: a(ee, _ && `HTU-WDYrxMw-`),
            children: `?`,
          })
        : (0, B.jsx)(`img`, {
            ref: g,
            className: a(m, _ && `HTU-WDYrxMw-`),
            src: t == `` ? void 0 : t,
            loading: `lazy`,
            alt: o,
            title: s ? void 0 : o,
          }),
    ],
  });
}
function se(e) {
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
    l = r && y(n),
    u = s ? v.Localize(`#AchievementSpoilerName`) : (t.name ?? ` `);
  return (0, B.jsx)($, { hidden: s, imgURL: c, glow: l, alt: u, ...o });
}
export {
  re as a,
  H as c,
  C as d,
  y as f,
  Y as i,
  b as l,
  f as m,
  $ as n,
  Z as o,
  v as p,
  Q as r,
  oe as s,
  se as t,
  w as u,
};

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  P as t,
  it as n,
  j as r,
  rt as i,
  sn as a,
  vt as o,
  yt as s,
} from "./chunk~de7f2df91c.js";
import { r as c, t as l } from "./chunk~25a6634263.js";
import {
  Kr as u,
  Ur as d,
  Wt as f,
  hn as p,
  pn as m,
  ua as h,
} from "./chunk~1fa4b8f2ff.js";
import { w as g } from "./chunk~44f252525d.js";
import { n as _ } from "./chunk~f8b6a4beb3.js";
import { i as v } from "./chunk~8fb30ea08b.js";
import { t as y } from "./chunk~ede3e357a2.js";
import { t as b } from "./chunk~9aa05d2c7d.js";
import { t as x } from "./chunk~4406a7b793.js";
import { t as S } from "./chunk~f4e4ed5c17.js";
import { t as C } from "./chunk~c55709d290.js";
import { i as w } from "./chunk~2f8c67b4de.js";
import "./chunk~a6b9ae1345.js";
import { c as T, r as E } from "./chunk~f25232ab1e.js";
var D = a(S()),
  O = a(x()),
  k = a(e()),
  A = `nicknames`;
function j(e) {
  let t = _(),
    { data: r, isLoading: i } = y({
      queryKey: [A],
      queryFn: async () => {
        let e = new Map();
        if (n.logged_in) {
          let n = s.Init(E),
            r = (await T.GetNicknameList(t, n)).Body().toObject();
          r?.nicknames &&
            r.nicknames.length > 0 &&
            r.nicknames.forEach((t) => {
              t.accountid && t.nickname && e.set(t.accountid, t.nickname);
            });
        }
        return e;
      },
    });
  return r ? r.get(e) : null;
}
async function M(e) {
  if (!e || e.length == 0) return [];
  let n = t() == `community` ? i.COMMUNITY_BASE_URL : i.STORE_BASE_URL;
  if (e.length == 1) {
    let t = { accountid: e[0], origin: self.origin },
      r = await D.default.get(`${n}actions/ajaxgetavatarpersona`, {
        params: t,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfo)
      throw `Load single avatar/persona failed ${C(r).strErrorMsg}`;
    return [r.data.userinfo];
  }
  {
    let t = { accountids: e.join(`,`), origin: self.origin },
      r = await D.default.get(`${n}actions/ajaxgetmultiavatarpersona`, {
        params: t,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfos)
      throw `Load single avatar/persona failed ${C(r).strErrorMsg}`;
    let i = new Map();
    return (
      r.data.userinfos.forEach((e) =>
        i.set(new l(e.steamid).GetAccountID(), e),
      ),
      e.map((e) => i.get(e))
    );
  }
}
var N = new O.default((e) => M(e), { cache: !1 }),
  P = `avatarandpersonas`;
function F(e) {
  return [P, e];
}
function I(e) {
  let { data: t, isLoading: n } = y({
    queryKey: F(e),
    queryFn: () => N.load(e),
  });
  return [t, n];
}
function L(e) {
  let t = v(),
    { data: n, isLoading: r } = y({
      queryKey: [P, e],
      queryFn: async () => {
        let n = await N.loadMany(e);
        return (
          n.forEach((e) => {
            if (e instanceof Error) return;
            let n = [P, new l(e.steamid).GetAccountID()];
            t.setQueryData(n, e);
          }),
          n
        );
      },
      enabled: e?.length > 0,
    }),
    i = (0, k.useMemo)(() => {
      let e = [];
      return (
        n?.forEach((t) => {
          t instanceof Error || e.push(t);
        }),
        e
      );
    }, [n]);
  return r ? null : i;
}
function R(e) {
  return b.getQueryData([P, e]);
}
var z = `-POP4zTRo6U-`,
  B = `dzdTC1QVCoU-`,
  V = `p3qQHic3po0-`,
  H = `ryiex66J3pM-`,
  U = o();
function W(e) {
  let {
      title: t,
      tooltip: n,
      getMinimized: i,
      toggleMinimized: a,
      className: o,
      children: s,
      elAdditionalButtons: l,
    } = e,
    u = g(() => i());
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsxs)(`div`, {
        className: r(o, z, V, `SectionTitleHeader`),
        children: [
          (0, U.jsxs)(`div`, {
            className: r(w, `EventEditorTextTitle`),
            children: [t, !!n && (0, U.jsx)(m, { tooltip: n })],
          }),
          (0, U.jsxs)(`div`, {
            className: B,
            children: [
              l,
              (0, U.jsx)(K, { bIsMinimized: u, fnToggleMinimize: a }),
            ],
          }),
        ],
      }),
      !u && (0, U.jsx)(c, { children: s }),
    ],
  });
}
function G(e) {
  let [t, n] = k.useState(!!e.bStartMinimized);
  return (0, U.jsx)(W, {
    ...e,
    getMinimized: () => t,
    toggleMinimized: () => n(!t),
    children: e.children,
  });
}
function K(e) {
  let { bIsMinimized: t, fnToggleMinimize: n } = e;
  return (0, U.jsx)(p, {
    toolTipContent: h(
      t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`,
    ),
    children: (0, U.jsx)(f, {
      className: H,
      onClick: n,
      children: e.bIsMinimized ? (0, U.jsx)(d, {}) : (0, U.jsx)(u, {}),
    }),
  });
}
export { I as a, R as i, W as n, j as o, G as r, L as s, K as t };

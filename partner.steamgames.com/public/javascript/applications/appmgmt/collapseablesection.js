/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  G as t,
  Pt as n,
  W as r,
  k as i,
  nt as a,
  o,
  r as s,
} from "./chunk~de7f2df91c.js";
import { t as c } from "./chunk~bd90a5fce7.js";
import {
  Gt as l,
  Wr as u,
  da as d,
  gn as f,
  mn as p,
  qr as m,
} from "./chunk~1fa4b8f2ff.js";
import { w as h } from "./chunk~44f252525d.js";
import { n as g } from "./chunk~f8b6a4beb3.js";
import { i as _ } from "./chunk~8fb30ea08b.js";
import { t as v } from "./chunk~ede3e357a2.js";
import { t as y } from "./chunk~9aa05d2c7d.js";
import { t as b } from "./chunk~4406a7b793.js";
import { t as x } from "./chunk~25a6634263.js";
import { t as S } from "./chunk~f4e4ed5c17.js";
import { t as C } from "./chunk~c55709d290.js";
import "./chunk~a6b9ae1345.js";
import { i as w } from "./chunk~2f8c67b4de.js";
import { c as T, r as E } from "./chunk~f25232ab1e.js";
var D = n(S()),
  O = n(b()),
  k = n(a()),
  A = `nicknames`;
function j(n) {
  let r = g(),
    { data: i, isLoading: a } = v({
      queryKey: [A],
      queryFn: async () => {
        let n = new Map();
        if (e.logged_in) {
          let e = t.Init(E),
            i = (await T.GetNicknameList(r, e)).Body().toObject();
          i?.nicknames &&
            i.nicknames.length > 0 &&
            i.nicknames.forEach((e) => {
              e.accountid && e.nickname && n.set(e.accountid, e.nickname);
            });
        }
        return n;
      },
    });
  return i ? i.get(n) : null;
}
async function M(e) {
  if (!e || e.length == 0) return [];
  let t = o() == `community` ? i.COMMUNITY_BASE_URL : i.STORE_BASE_URL;
  if (e.length == 1) {
    let n = { accountid: e[0], origin: self.origin },
      r = await D.default.get(`${t}actions/ajaxgetavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfo)
      throw `Load single avatar/persona failed ${C(r).strErrorMsg}`;
    return [r.data.userinfo];
  }
  {
    let n = { accountids: e.join(`,`), origin: self.origin },
      r = await D.default.get(`${t}actions/ajaxgetmultiavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfos)
      throw `Load single avatar/persona failed ${C(r).strErrorMsg}`;
    let i = new Map();
    return (
      r.data.userinfos.forEach((e) =>
        i.set(new x(e.steamid).GetAccountID(), e),
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
  let { data: t, isLoading: n } = v({
    queryKey: F(e),
    queryFn: () => N.load(e),
  });
  return [t, n];
}
function L(e) {
  let t = _(),
    { data: n, isLoading: r } = v({
      queryKey: [P, e],
      queryFn: async () => {
        let n = await N.loadMany(e);
        return (
          n.forEach((e) => {
            if (e instanceof Error) return;
            let n = [P, new x(e.steamid).GetAccountID()];
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
  return y.getQueryData([P, e]);
}
var z = `-POP4zTRo6U-`,
  B = `dzdTC1QVCoU-`,
  V = `p3qQHic3po0-`,
  H = `ryiex66J3pM-`,
  U = r();
function W(e) {
  let {
      title: t,
      tooltip: n,
      getMinimized: r,
      toggleMinimized: i,
      className: a,
      children: o,
      elAdditionalButtons: l,
    } = e,
    u = h(() => r());
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsxs)(`div`, {
        className: s(a, z, V, `SectionTitleHeader`),
        children: [
          (0, U.jsxs)(`div`, {
            className: s(w, `EventEditorTextTitle`),
            children: [t, !!n && (0, U.jsx)(p, { tooltip: n })],
          }),
          (0, U.jsxs)(`div`, {
            className: B,
            children: [
              l,
              (0, U.jsx)(K, { bIsMinimized: u, fnToggleMinimize: i }),
            ],
          }),
        ],
      }),
      !u && (0, U.jsx)(c, { children: o }),
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
  return (0, U.jsx)(f, {
    toolTipContent: d(
      t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`,
    ),
    children: (0, U.jsx)(l, {
      className: H,
      onClick: n,
      children: e.bIsMinimized ? (0, U.jsx)(u, {}) : (0, U.jsx)(m, {}),
    }),
  });
}
export { I as a, R as i, W as n, j as o, G as r, L as s, K as t };

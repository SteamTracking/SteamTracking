/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  N as t,
  _t as n,
  kt as r,
  nt as i,
  on as a,
  rt as o,
  vt as s,
} from "./mobx.esm.js";
import { r as c, t as l } from "./src.js";
import { Br as u, Lr as d, Vt as f, oa as p, un as m } from "./dialogs.js";
import { w as h } from "./react-router.js";
import { r as g } from "./servicetransportprovider.js";
import { i as _ } from "./utils.js";
import { t as v } from "./useQuery.js";
import { t as y } from "./reactqueryroot.js";
import { t as b } from "./dataloader.js";
import { t as x } from "./axios.js";
import { t as S } from "./axiosutils.js";
import { i as C } from "./partnereventshared.module.js";
import "./steamid.js";
import { c as w, r as T } from "./steammessages_player_pb.js";
var E = a(x()),
  D = a(b()),
  O = a(r()),
  k = `nicknames`;
function A(e) {
  let t = g(),
    { data: n, isLoading: r } = v({
      queryKey: [k],
      queryFn: async () => {
        let e = new Map();
        if (o.logged_in) {
          let n = s.Init(T),
            r = (await w.GetNicknameList(t, n)).Body().toObject();
          r?.nicknames &&
            r.nicknames.length > 0 &&
            r.nicknames.forEach((t) => {
              t.accountid && t.nickname && e.set(t.accountid, t.nickname);
            });
        }
        return e;
      },
    });
  return n ? n.get(e) : null;
}
async function j(e) {
  if (!e || e.length == 0) return [];
  let n = t() == `community` ? i.COMMUNITY_BASE_URL : i.STORE_BASE_URL;
  if (e.length == 1) {
    let t = { accountid: e[0], origin: self.origin },
      r = await E.default.get(`${n}actions/ajaxgetavatarpersona`, {
        params: t,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfo)
      throw `Load single avatar/persona failed ${S(r).strErrorMsg}`;
    return [r.data.userinfo];
  }
  {
    let t = { accountids: e.join(`,`), origin: self.origin },
      r = await E.default.get(`${n}actions/ajaxgetmultiavatarpersona`, {
        params: t,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfos)
      throw `Load single avatar/persona failed ${S(r).strErrorMsg}`;
    let i = new Map();
    return (
      r.data.userinfos.forEach((e) =>
        i.set(new l(e.steamid).GetAccountID(), e),
      ),
      e.map((e) => i.get(e))
    );
  }
}
var M = new D.default((e) => j(e), { cache: !1 }),
  N = `avatarandpersonas`;
function P(e) {
  return [N, e];
}
function F(e) {
  let { data: t, isLoading: n } = v({
    queryKey: P(e),
    queryFn: () => M.load(e),
  });
  return [t, n];
}
function I(e) {
  let t = _(),
    { data: n, isLoading: r } = v({
      queryKey: [N, e],
      queryFn: async () => {
        let n = await M.loadMany(e);
        return (
          n.forEach((e) => {
            if (e instanceof Error) return;
            let n = [N, new l(e.steamid).GetAccountID()];
            t.setQueryData(n, e);
          }),
          n
        );
      },
      enabled: e?.length > 0,
    }),
    i = (0, O.useMemo)(() => {
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
function L(e) {
  return y.getQueryData([N, e]);
}
var R = `-POP4zTRo6U-`,
  z = `dzdTC1QVCoU-`,
  B = `p3qQHic3po0-`,
  V = n();
function H(t) {
  let {
      title: n,
      tooltip: r,
      getMinimized: i,
      toggleMinimized: a,
      className: o,
      children: s,
      elAdditionalButtons: l,
    } = t,
    u = h(() => i());
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsxs)(`div`, {
        className: e(o, R, B, `SectionTitleHeader`),
        children: [
          (0, V.jsxs)(`div`, {
            className: e(C, `EventEditorTextTitle`),
            children: [n, !!r && (0, V.jsx)(m, { tooltip: r })],
          }),
          (0, V.jsxs)(`div`, {
            className: z,
            children: [
              l,
              (0, V.jsx)(W, { bIsMinimized: u, fnToggleMinimize: a }),
            ],
          }),
        ],
      }),
      !u && (0, V.jsx)(c, { children: s }),
    ],
  });
}
function U(e) {
  let [t, n] = O.useState(!!e.bStartMinimized);
  return (0, V.jsx)(H, {
    ...e,
    getMinimized: () => t,
    toggleMinimized: () => n(!t),
    children: e.children,
  });
}
function W(e) {
  let { bIsMinimized: t, fnToggleMinimize: n } = e,
    r = t ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`;
  return (0, V.jsx)(f, {
    "data-tooltip-text": p(r),
    onClick: n,
    children: e.bIsMinimized ? (0, V.jsx)(d, {}) : (0, V.jsx)(u, {}),
  });
}
export { F as a, L as i, H as n, A as o, U as r, I as s, W as t };

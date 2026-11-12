/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  ft as n,
  ot as r,
  st as i,
  tt as a,
} from "./chunk~01cfc309bf.js";
import { n as o, o as s } from "./chunk~673650a653.js";
import { t as c } from "./chunk~eefd71512b.js";
import { n as l, t as u } from "./chunk~95ecbf576c.js";
import { u as d } from "./chunk~7b4b9eb713.js";
import { r as f } from "./chunk~fc8a9e4879.js";
import {
  Al as p,
  Ba as m,
  Fs as h,
  Jy as g,
  Qb as _,
  Qx as v,
  Vo as y,
  Vr as b,
  Vy as x,
  cx as S,
  fn as C,
  kn as w,
  mr as T,
  rc as E,
  wc as D,
  xr as O,
  yS as k,
  yo as A,
} from "./main.js";
var j = e(t()),
  M = e(a()),
  N = `_4hPz4YeujBg-`,
  P = `p4so9IR0aGE-`,
  F = `xFTpIMdpqCY-`,
  I = `DIRIJGRo8us-`,
  L = `FqVVL--jZ-o-`,
  R = `yTvMODmO0CY-`,
  z = `s4rSfzcETAg-`,
  B = n();
function V(e) {
  let { clanAccountID: t } = e,
    n = p(() => new x(t, S.EUNIVERSE, 7, 0)),
    { bIsFetching: r, rgEventModels: i, fnRefetch: a } = H(n),
    o = `${S.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
    s = () => window.location.assign(o),
    { creatorHome: l, isFetching: u, refetch: f } = d(t),
    m = l?.GetLinkedEventGID(),
    h = m && i?.some((e) => m == e.GID),
    _ = r || u,
    v = () => {
      (a(), f());
    },
    y = j.useMemo(
      () => [...(i ?? [])].sort((e, t) => t.startTime - e.startTime),
      [i],
    ),
    C = y.filter((e) => m && m == e.GID),
    w = y.filter((e) => !m || m != e.GID);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(b, {
        toolTipContent: g(`#CreatorHome_EventLink_Create_ttip`),
        style: { width: `25%` },
        children: (0, B.jsx)(T, {
          onClick: s,
          children: g(`#CreatorHome_EventLink_Create`),
        }),
      }),
      (0, B.jsx)(`h4`, { children: g(`#CreatorHome_EventLink_Title`) }),
      (0, B.jsx)(`p`, { children: g(`#CreatorHome_EventLink_Desc`) }),
      (0, B.jsx)(`br`, {}),
      (0, B.jsxs)(`div`, {
        className: N,
        children: [
          !h &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(`h5`, {
                  children: g(`#CreatorHome_EventLink_ActiveListTitle`),
                }),
                (0, B.jsx)(`p`, {
                  children: g(`#CreatorHome_EventLink_BasicActive`),
                }),
              ],
            }),
          _ && (0, B.jsx)(c, {}),
          !_ &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                C.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: g(`#CreatorHome_EventLink_ActiveListTitle`),
                      }),
                      (0, B.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: C.map((e) =>
                          (0, B.jsx)(
                            U,
                            {
                              creatorHome: l,
                              clanSteamID: n,
                              eventModel: e,
                              refetch: v,
                            },
                            e.GID,
                          ),
                        ),
                      }),
                    ],
                  }),
                w.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: g(`#CreatorHome_EventLink_InactiveListTitle`),
                      }),
                      (0, B.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: w.map((e) =>
                          (0, B.jsx)(
                            U,
                            {
                              creatorHome: l,
                              clanSteamID: n,
                              eventModel: e,
                              refetch: v,
                            },
                            e.GID,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
function H(e) {
  let {
    data: t,
    isFetching: n,
    refetch: r,
  } = i({
    queryKey: [`DraftAndHiddenPartnerEvents`, e.ConvertTo64BitString()],
    queryFn: async () => {
      let t =
          S.STORE_BASE_URL +
          `/curator/` +
          e.GetAccountID() +
          `/admin/ajaxgetcreatorhomeevents`,
        n = { l: S.LANGUAGE },
        r = await M.default.get(t, { params: n }).catch(() => void 0),
        i = [];
      return (
        i.push(
          ...r.data.creatorhome_event_gids.map((t) =>
            f.LoadHiddenPartnerEvent(e, t),
          ),
        ),
        await Promise.all(i)
      );
    },
  });
  return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
}
function U(e) {
  let { clanSteamID: t, creatorHome: n, eventModel: r, refetch: i } = e,
    [a, s] = j.useState(!1),
    c = K(),
    [l, u] = j.useState(!1),
    [d, f] = j.useState(!1),
    p = G(),
    _ = n?.GetLinkedEventGID(),
    v = _ && _ == r.GID,
    b = !v && r.BIsVisibleEvent(),
    x = `${S.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${r.GID}?redir=${window.location.href}`;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(W, {
        active: a,
        mutateAsync: () => c.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (s(!1), e && i());
        },
        strTitle: g(`#Button_Delete`),
        strDescription: g(`#CreatorHome_EventLink_Delete_Dialog_Desc`),
        strError: g(`#CreatorHome_EventLink_Delete_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: l,
        mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (u(!1), e && i());
        },
        strTitle: g(`#CreatorHome_EventLink_Select`),
        strDescription: g(`#CreatorHome_EventLink_Select_Dialog_Desc`),
        strError: g(`#CreatorHome_EventLink_Select_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: d,
        mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: `0` }),
        onClose: (e) => {
          (f(!1), e && i());
        },
        strTitle: g(`#CreatorHome_EventLink_Clear`),
        strDescription: g(`#CreatorHome_EventLink_Clear_Dialog_Desc`),
        strError: g(`#CreatorHome_EventLink_Clear_Dialog_Error`),
      }),
      (0, B.jsxs)(`div`, {
        className: D(P, v && `rh4o7L-VRbU-`),
        children: [
          (0, B.jsxs)(`div`, {
            className: I,
            children: [
              (0, B.jsx)(`span`, {
                className: F,
                children: r.GetNameWithFallback(k(S.LANGUAGE)),
              }),
              !r.BIsVisibleEvent() &&
                (0, B.jsxs)(`span`, {
                  className: `_-4utxQA1wCE-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: g(`#CreatorHome_EventLink_Unpublished`),
                    }),
                    (0, B.jsx)(O, {
                      tooltip: g(`#CreatorHome_EventLink_Unpublished_ttip`),
                      small: !0,
                    }),
                  ],
                }),
              r.BIsVisibleEvent() &&
                !v &&
                (0, B.jsxs)(`span`, {
                  className: `MWHiEZVKTsA-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: g(
                        `#CreatorHome_EventLink_PublishedAndNotSelected`,
                      ),
                    }),
                    (0, B.jsx)(O, {
                      tooltip: g(
                        `#CreatorHome_EventLink_PublishedAndNotSelected_ttip`,
                      ),
                      small: !0,
                    }),
                  ],
                }),
              b
                ? (0, B.jsx)(q, {
                    eventModel: r,
                    label: g(`#CreatorHome_EventLink_Select`),
                    icon: (0, B.jsx)(h, {}),
                    onClick: () => u(!0),
                    tooltip: g(`#CreatorHome_EventLink_Select_ttip`),
                  })
                : !v &&
                  (0, B.jsxs)(`div`, {
                    className: `_5nnQGBHwxWw-`,
                    children: [
                      g(`#CreatorHome_EventLink_MustPublish`),
                      (0, B.jsx)(O, {
                        tooltip: g(`#CreatorHome_EventLink_MustPublish_ttip`),
                        small: !0,
                      }),
                    ],
                  }),
              v &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: g(`#CreatorHome_EventLink_Clear`),
                  icon: (0, B.jsx)(h, { filled: !0 }),
                  onClick: () => f(!0),
                  tooltip: g(`#CreatorHome_EventLink_Clear_ttip`),
                }),
            ],
          }),
          (0, B.jsxs)(`div`, {
            className: R,
            children: [
              (0, B.jsx)(q, {
                eventModel: r,
                label: g(`#Button_Edit`),
                icon: (0, B.jsx)(A, {}),
                route: o.k_eCommunityEdit,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: g(`#Button_Preview`),
                icon: (0, B.jsx)(m, {}),
                route: o.k_eCommunityPreviewSale,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: g(`#Button_Clone`),
                icon: (0, B.jsx)(y, {}),
                onClick: () => window.location.assign(x),
              }),
              !v &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: g(`#Button_Delete`),
                  icon: (0, B.jsx)(E, {}),
                  onClick: () => s(!0),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function W(e) {
  let {
      active: t,
      mutateAsync: n,
      onClose: r,
      strTitle: i,
      strDescription: a,
      strError: o,
    } = e,
    s = l();
  if (t)
    return s.bLoading
      ? (0, B.jsx)(C, {
          active: !0,
          children: (0, B.jsx)(u, { state: s, strDialogTitle: i }),
        })
      : (0, B.jsx)(C, {
          active: !0,
          children: (0, B.jsx)(w, {
            strTitle: i,
            strDescription: a,
            onCancel: () => r(!1),
            bOKDisabled: s.bLoading,
            onOK: async () => {
              s.fnSetLoading(!0);
              try {
                (await n()) ? r(!0) : s.fnSetElError(o);
              } catch {
                s.fnSetElError(o);
              }
            },
          }),
        });
}
function G() {
  return r({
    mutationFn: async (e) => {
      let t =
          S.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxselectcreatorhome`,
        n = new FormData();
      return (
        n.append(`sessionid`, _()),
        n.append(`gid`, e.gid),
        (await M.default.post(t, n, { withCredentials: !0 }))?.data?.success ==
          1
      );
    },
  });
}
function K() {
  return r({
    mutationFn: async (e) => {
      let t =
          S.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxdeletecreatorhomeevent`,
        n = new FormData();
      return (
        n.append(`sessionid`, _()),
        n.append(`gid`, e.gid),
        (await M.default.post(t, n, { withCredentials: !0 }))?.data?.success ==
          1
      );
    },
  });
}
function q(e) {
  let {
    eventModel: t,
    label: n,
    tooltip: r,
    icon: i,
    route: a,
    onClick: o,
  } = e;
  v(a || o, `Must specify route or onClick`);
  let c =
    o ||
    (() => {
      let e = a ? s(t, null, a, `absolute`) : void 0;
      window.location.assign(e);
    });
  return (0, B.jsxs)(`div`, {
    className: L,
    onClick: c,
    children: [
      (0, B.jsx)(`div`, { className: z, children: i }),
      n,
      r && (0, B.jsx)(O, { tooltip: r, small: !0 }),
    ],
  });
}
export { V as default };

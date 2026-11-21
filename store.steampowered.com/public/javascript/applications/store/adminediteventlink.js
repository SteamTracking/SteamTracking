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
import { u as l } from "./chunk~7b4b9eb713.js";
import { n as u, t as d } from "./chunk~95ecbf576c.js";
import { r as f } from "./chunk~fc8a9e4879.js";
import {
  In as p,
  Nc as m,
  OS as h,
  Oo as g,
  Or as _,
  Ws as v,
  Xo as y,
  Xy as b,
  Ya as x,
  Yr as S,
  _x as C,
  fc as w,
  rb as T,
  sS as E,
  sx as D,
  xr as O,
  yn as k,
  zl as A,
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
    n = A(() => new b(t, C.EUNIVERSE, 7, 0)),
    { bIsFetching: r, rgEventModels: i, fnRefetch: a } = H(n),
    o = `${C.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
    s = () => window.location.assign(o),
    { creatorHome: u, isFetching: d, refetch: f } = l(t),
    p = u?.GetLinkedEventGID(),
    m = p && i?.some((e) => p == e.GID),
    h = r || d,
    g = () => {
      (a(), f());
    },
    _ = j.useMemo(
      () => [...(i ?? [])].sort((e, t) => t.startTime - e.startTime),
      [i],
    ),
    v = _.filter((e) => p && p == e.GID),
    y = _.filter((e) => !p || p != e.GID);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(S, {
        toolTipContent: T(`#CreatorHome_EventLink_Create_ttip`),
        style: { width: `25%` },
        children: (0, B.jsx)(O, {
          onClick: s,
          children: T(`#CreatorHome_EventLink_Create`),
        }),
      }),
      (0, B.jsx)(`h4`, { children: T(`#CreatorHome_EventLink_Title`) }),
      (0, B.jsx)(`p`, { children: T(`#CreatorHome_EventLink_Desc`) }),
      (0, B.jsx)(`br`, {}),
      (0, B.jsxs)(`div`, {
        className: N,
        children: [
          !m &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(`h5`, {
                  children: T(`#CreatorHome_EventLink_ActiveListTitle`),
                }),
                (0, B.jsx)(`p`, {
                  children: T(`#CreatorHome_EventLink_BasicActive`),
                }),
              ],
            }),
          h && (0, B.jsx)(c, {}),
          !h &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                v.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: T(`#CreatorHome_EventLink_ActiveListTitle`),
                      }),
                      (0, B.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: v.map((e) =>
                          (0, B.jsx)(
                            U,
                            {
                              creatorHome: u,
                              clanSteamID: n,
                              eventModel: e,
                              refetch: g,
                            },
                            e.GID,
                          ),
                        ),
                      }),
                    ],
                  }),
                y.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: T(`#CreatorHome_EventLink_InactiveListTitle`),
                      }),
                      (0, B.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: y.map((e) =>
                          (0, B.jsx)(
                            U,
                            {
                              creatorHome: u,
                              clanSteamID: n,
                              eventModel: e,
                              refetch: g,
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
          C.STORE_BASE_URL +
          `/curator/` +
          e.GetAccountID() +
          `/admin/ajaxgetcreatorhomeevents`,
        n = { l: C.LANGUAGE },
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
    b = n?.GetLinkedEventGID(),
    S = b && b == r.GID,
    E = !S && r.BIsVisibleEvent(),
    D = `${C.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${r.GID}?redir=${window.location.href}`;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(W, {
        active: a,
        mutateAsync: () => c.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (s(!1), e && i());
        },
        strTitle: T(`#Button_Delete`),
        strDescription: T(`#CreatorHome_EventLink_Delete_Dialog_Desc`),
        strError: T(`#CreatorHome_EventLink_Delete_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: l,
        mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (u(!1), e && i());
        },
        strTitle: T(`#CreatorHome_EventLink_Select`),
        strDescription: T(`#CreatorHome_EventLink_Select_Dialog_Desc`),
        strError: T(`#CreatorHome_EventLink_Select_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: d,
        mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: `0` }),
        onClose: (e) => {
          (f(!1), e && i());
        },
        strTitle: T(`#CreatorHome_EventLink_Clear`),
        strDescription: T(`#CreatorHome_EventLink_Clear_Dialog_Desc`),
        strError: T(`#CreatorHome_EventLink_Clear_Dialog_Error`),
      }),
      (0, B.jsxs)(`div`, {
        className: m(P, S && `rh4o7L-VRbU-`),
        children: [
          (0, B.jsxs)(`div`, {
            className: I,
            children: [
              (0, B.jsx)(`span`, {
                className: F,
                children: r.GetNameWithFallback(h(C.LANGUAGE)),
              }),
              !r.BIsVisibleEvent() &&
                (0, B.jsxs)(`span`, {
                  className: `_-4utxQA1wCE-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: T(`#CreatorHome_EventLink_Unpublished`),
                    }),
                    (0, B.jsx)(_, {
                      tooltip: T(`#CreatorHome_EventLink_Unpublished_ttip`),
                      small: !0,
                    }),
                  ],
                }),
              r.BIsVisibleEvent() &&
                !S &&
                (0, B.jsxs)(`span`, {
                  className: `MWHiEZVKTsA-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: T(
                        `#CreatorHome_EventLink_PublishedAndNotSelected`,
                      ),
                    }),
                    (0, B.jsx)(_, {
                      tooltip: T(
                        `#CreatorHome_EventLink_PublishedAndNotSelected_ttip`,
                      ),
                      small: !0,
                    }),
                  ],
                }),
              E
                ? (0, B.jsx)(q, {
                    eventModel: r,
                    label: T(`#CreatorHome_EventLink_Select`),
                    icon: (0, B.jsx)(v, {}),
                    onClick: () => u(!0),
                    tooltip: T(`#CreatorHome_EventLink_Select_ttip`),
                  })
                : !S &&
                  (0, B.jsxs)(`div`, {
                    className: `_5nnQGBHwxWw-`,
                    children: [
                      T(`#CreatorHome_EventLink_MustPublish`),
                      (0, B.jsx)(_, {
                        tooltip: T(`#CreatorHome_EventLink_MustPublish_ttip`),
                        small: !0,
                      }),
                    ],
                  }),
              S &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: T(`#CreatorHome_EventLink_Clear`),
                  icon: (0, B.jsx)(v, { filled: !0 }),
                  onClick: () => f(!0),
                  tooltip: T(`#CreatorHome_EventLink_Clear_ttip`),
                }),
            ],
          }),
          (0, B.jsxs)(`div`, {
            className: R,
            children: [
              (0, B.jsx)(q, {
                eventModel: r,
                label: T(`#Button_Edit`),
                icon: (0, B.jsx)(g, {}),
                route: o.k_eCommunityEdit,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: T(`#Button_Preview`),
                icon: (0, B.jsx)(x, {}),
                route: o.k_eCommunityPreviewSale,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: T(`#Button_Clone`),
                icon: (0, B.jsx)(y, {}),
                onClick: () => window.location.assign(D),
              }),
              !S &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: T(`#Button_Delete`),
                  icon: (0, B.jsx)(w, {}),
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
    s = u();
  if (t)
    return s.bLoading
      ? (0, B.jsx)(k, {
          active: !0,
          children: (0, B.jsx)(d, { state: s, strDialogTitle: i }),
        })
      : (0, B.jsx)(k, {
          active: !0,
          children: (0, B.jsx)(p, {
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
          C.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxselectcreatorhome`,
        n = new FormData();
      return (
        n.append(`sessionid`, D()),
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
          C.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxdeletecreatorhomeevent`,
        n = new FormData();
      return (
        n.append(`sessionid`, D()),
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
  E(a || o, `Must specify route or onClick`);
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
      r && (0, B.jsx)(_, { tooltip: r, small: !0 }),
    ],
  });
}
export { V as default };

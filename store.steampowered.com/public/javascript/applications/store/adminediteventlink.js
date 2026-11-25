/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  at as n,
  dt as r,
  et as i,
  ot as a,
} from "./chunk~01cfc309bf.js";
import { n as o, o as s } from "./chunk~673650a653.js";
import { t as c } from "./chunk~eefd71512b.js";
import { u as l } from "./chunk~7b4b9eb713.js";
import { n as u, t as d } from "./chunk~95ecbf576c.js";
import { r as f } from "./chunk~fc8a9e4879.js";
import {
  AS as p,
  Bl as m,
  Gs as h,
  In as g,
  Or as _,
  Pc as v,
  Xa as y,
  Xr as b,
  Zo as x,
  Zy as S,
  cx as C,
  ib as w,
  ko as T,
  lS as E,
  pc as D,
  vx as O,
  xr as k,
  yn as A,
} from "./main.js";
var j = e(t()),
  M = e(i()),
  N = `_4hPz4YeujBg-`,
  P = `p4so9IR0aGE-`,
  F = `xFTpIMdpqCY-`,
  I = `DIRIJGRo8us-`,
  L = `FqVVL--jZ-o-`,
  R = `yTvMODmO0CY-`,
  z = `s4rSfzcETAg-`,
  B = r();
function V(e) {
  let { clanAccountID: t } = e,
    n = m(() => new S(t, O.EUNIVERSE, 7, 0)),
    { bIsFetching: r, rgEventModels: i, fnRefetch: a } = H(n),
    o = `${O.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
    s = () => window.location.assign(o),
    { creatorHome: u, isFetching: d, refetch: f } = l(t),
    p = u?.GetLinkedEventGID(),
    h = p && i?.some((e) => p == e.GID),
    g = r || d,
    _ = () => {
      (a(), f());
    },
    v = j.useMemo(
      () => [...(i ?? [])].sort((e, t) => t.startTime - e.startTime),
      [i],
    ),
    y = v.filter((e) => p && p == e.GID),
    x = v.filter((e) => !p || p != e.GID);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(b, {
        toolTipContent: w(`#CreatorHome_EventLink_Create_ttip`),
        style: { width: `25%` },
        children: (0, B.jsx)(k, {
          onClick: s,
          children: w(`#CreatorHome_EventLink_Create`),
        }),
      }),
      (0, B.jsx)(`h4`, { children: w(`#CreatorHome_EventLink_Title`) }),
      (0, B.jsx)(`p`, { children: w(`#CreatorHome_EventLink_Desc`) }),
      (0, B.jsx)(`br`, {}),
      (0, B.jsxs)(`div`, {
        className: N,
        children: [
          !h &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(`h5`, {
                  children: w(`#CreatorHome_EventLink_ActiveListTitle`),
                }),
                (0, B.jsx)(`p`, {
                  children: w(`#CreatorHome_EventLink_BasicActive`),
                }),
              ],
            }),
          g && (0, B.jsx)(c, {}),
          !g &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                y.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: w(`#CreatorHome_EventLink_ActiveListTitle`),
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
                              refetch: _,
                            },
                            e.GID,
                          ),
                        ),
                      }),
                    ],
                  }),
                x.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: w(`#CreatorHome_EventLink_InactiveListTitle`),
                      }),
                      (0, B.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: x.map((e) =>
                          (0, B.jsx)(
                            U,
                            {
                              creatorHome: u,
                              clanSteamID: n,
                              eventModel: e,
                              refetch: _,
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
  } = a({
    queryKey: [`DraftAndHiddenPartnerEvents`, e.ConvertTo64BitString()],
    queryFn: async () => {
      let t =
          O.STORE_BASE_URL +
          `/curator/` +
          e.GetAccountID() +
          `/admin/ajaxgetcreatorhomeevents`,
        n = { l: O.LANGUAGE },
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
    m = G(),
    g = n?.GetLinkedEventGID(),
    b = g && g == r.GID,
    S = !b && r.BIsVisibleEvent(),
    C = `${O.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${r.GID}?redir=${window.location.href}`;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(W, {
        active: a,
        mutateAsync: () => c.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (s(!1), e && i());
        },
        strTitle: w(`#Button_Delete`),
        strDescription: w(`#CreatorHome_EventLink_Delete_Dialog_Desc`),
        strError: w(`#CreatorHome_EventLink_Delete_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: l,
        mutateAsync: () => m.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (u(!1), e && i());
        },
        strTitle: w(`#CreatorHome_EventLink_Select`),
        strDescription: w(`#CreatorHome_EventLink_Select_Dialog_Desc`),
        strError: w(`#CreatorHome_EventLink_Select_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: d,
        mutateAsync: () => m.mutateAsync({ clanSteamID: t, gid: `0` }),
        onClose: (e) => {
          (f(!1), e && i());
        },
        strTitle: w(`#CreatorHome_EventLink_Clear`),
        strDescription: w(`#CreatorHome_EventLink_Clear_Dialog_Desc`),
        strError: w(`#CreatorHome_EventLink_Clear_Dialog_Error`),
      }),
      (0, B.jsxs)(`div`, {
        className: v(P, b && `rh4o7L-VRbU-`),
        children: [
          (0, B.jsxs)(`div`, {
            className: I,
            children: [
              (0, B.jsx)(`span`, {
                className: F,
                children: r.GetNameWithFallback(p(O.LANGUAGE)),
              }),
              !r.BIsVisibleEvent() &&
                (0, B.jsxs)(`span`, {
                  className: `_-4utxQA1wCE-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: w(`#CreatorHome_EventLink_Unpublished`),
                    }),
                    (0, B.jsx)(_, {
                      tooltip: w(`#CreatorHome_EventLink_Unpublished_ttip`),
                      small: !0,
                    }),
                  ],
                }),
              r.BIsVisibleEvent() &&
                !b &&
                (0, B.jsxs)(`span`, {
                  className: `MWHiEZVKTsA-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: w(
                        `#CreatorHome_EventLink_PublishedAndNotSelected`,
                      ),
                    }),
                    (0, B.jsx)(_, {
                      tooltip: w(
                        `#CreatorHome_EventLink_PublishedAndNotSelected_ttip`,
                      ),
                      small: !0,
                    }),
                  ],
                }),
              S
                ? (0, B.jsx)(q, {
                    eventModel: r,
                    label: w(`#CreatorHome_EventLink_Select`),
                    icon: (0, B.jsx)(h, {}),
                    onClick: () => u(!0),
                    tooltip: w(`#CreatorHome_EventLink_Select_ttip`),
                  })
                : !b &&
                  (0, B.jsxs)(`div`, {
                    className: `_5nnQGBHwxWw-`,
                    children: [
                      w(`#CreatorHome_EventLink_MustPublish`),
                      (0, B.jsx)(_, {
                        tooltip: w(`#CreatorHome_EventLink_MustPublish_ttip`),
                        small: !0,
                      }),
                    ],
                  }),
              b &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: w(`#CreatorHome_EventLink_Clear`),
                  icon: (0, B.jsx)(h, { filled: !0 }),
                  onClick: () => f(!0),
                  tooltip: w(`#CreatorHome_EventLink_Clear_ttip`),
                }),
            ],
          }),
          (0, B.jsxs)(`div`, {
            className: R,
            children: [
              (0, B.jsx)(q, {
                eventModel: r,
                label: w(`#Button_Edit`),
                icon: (0, B.jsx)(T, {}),
                route: o.k_eCommunityEdit,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: w(`#Button_Preview`),
                icon: (0, B.jsx)(y, {}),
                route: o.k_eCommunityPreviewSale,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: w(`#Button_Clone`),
                icon: (0, B.jsx)(x, {}),
                onClick: () => window.location.assign(C),
              }),
              !b &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: w(`#Button_Delete`),
                  icon: (0, B.jsx)(D, {}),
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
      ? (0, B.jsx)(A, {
          active: !0,
          children: (0, B.jsx)(d, { state: s, strDialogTitle: i }),
        })
      : (0, B.jsx)(A, {
          active: !0,
          children: (0, B.jsx)(g, {
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
  return n({
    mutationFn: async (e) => {
      let t =
          O.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxselectcreatorhome`,
        n = new FormData();
      return (
        n.append(`sessionid`, C()),
        n.append(`gid`, e.gid),
        (await M.default.post(t, n, { withCredentials: !0 }))?.data?.success ==
          1
      );
    },
  });
}
function K() {
  return n({
    mutationFn: async (e) => {
      let t =
          O.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxdeletecreatorhomeevent`,
        n = new FormData();
      return (
        n.append(`sessionid`, C()),
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

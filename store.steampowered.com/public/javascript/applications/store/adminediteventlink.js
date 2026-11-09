/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, ot as r, st as i, tt as a } from "./libraries.js";
import { n as o, o as s } from "./eventlink.js";
import { t as c } from "./throbber.js";
import { n as l, t as u } from "./simplesuccesserror.js";
import { u as d } from "./creatorhomestore.js";
import { r as f } from "./partnereventstore.js";
import {
  El as p,
  En as m,
  Iy as h,
  Ns as g,
  Ra as _,
  Rr as v,
  Sc as y,
  Uy as b,
  _o as x,
  dr as S,
  mS as C,
  pn as w,
  qb as T,
  qx as E,
  rx as D,
  tc as O,
  vr as k,
  zo as A,
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
    n = p(() => new h(t, D.EUNIVERSE, 7, 0)),
    { bIsFetching: r, rgEventModels: i, fnRefetch: a } = H(n),
    o = `${D.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
    s = () => window.location.assign(o),
    { creatorHome: l, isFetching: u, refetch: f } = d(t),
    m = l?.GetLinkedEventGID(),
    g = m && i?.some((e) => m == e.GID),
    _ = r || u,
    y = () => {
      (a(), f());
    },
    x = j.useMemo(
      () => [...(i ?? [])].sort((e, t) => t.startTime - e.startTime),
      [i],
    ),
    C = x.filter((e) => m && m == e.GID),
    w = x.filter((e) => !m || m != e.GID);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(v, {
        toolTipContent: b(`#CreatorHome_EventLink_Create_ttip`),
        style: { width: `25%` },
        children: (0, B.jsx)(S, {
          onClick: s,
          children: b(`#CreatorHome_EventLink_Create`),
        }),
      }),
      (0, B.jsx)(`h4`, { children: b(`#CreatorHome_EventLink_Title`) }),
      (0, B.jsx)(`p`, { children: b(`#CreatorHome_EventLink_Desc`) }),
      (0, B.jsx)(`br`, {}),
      (0, B.jsxs)(`div`, {
        className: N,
        children: [
          !g &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(`h5`, {
                  children: b(`#CreatorHome_EventLink_ActiveListTitle`),
                }),
                (0, B.jsx)(`p`, {
                  children: b(`#CreatorHome_EventLink_BasicActive`),
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
                        children: b(`#CreatorHome_EventLink_ActiveListTitle`),
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
                              refetch: y,
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
                        children: b(`#CreatorHome_EventLink_InactiveListTitle`),
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
                              refetch: y,
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
          D.STORE_BASE_URL +
          `/curator/` +
          e.GetAccountID() +
          `/admin/ajaxgetcreatorhomeevents`,
        n = { l: D.LANGUAGE },
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
    m = n?.GetLinkedEventGID(),
    h = m && m == r.GID,
    v = !h && r.BIsVisibleEvent(),
    S = `${D.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${r.GID}?redir=${window.location.href}`;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(W, {
        active: a,
        mutateAsync: () => c.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (s(!1), e && i());
        },
        strTitle: b(`#Button_Delete`),
        strDescription: b(`#CreatorHome_EventLink_Delete_Dialog_Desc`),
        strError: b(`#CreatorHome_EventLink_Delete_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: l,
        mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (u(!1), e && i());
        },
        strTitle: b(`#CreatorHome_EventLink_Select`),
        strDescription: b(`#CreatorHome_EventLink_Select_Dialog_Desc`),
        strError: b(`#CreatorHome_EventLink_Select_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: d,
        mutateAsync: () => p.mutateAsync({ clanSteamID: t, gid: `0` }),
        onClose: (e) => {
          (f(!1), e && i());
        },
        strTitle: b(`#CreatorHome_EventLink_Clear`),
        strDescription: b(`#CreatorHome_EventLink_Clear_Dialog_Desc`),
        strError: b(`#CreatorHome_EventLink_Clear_Dialog_Error`),
      }),
      (0, B.jsxs)(`div`, {
        className: y(P, h && `rh4o7L-VRbU-`),
        children: [
          (0, B.jsxs)(`div`, {
            className: I,
            children: [
              (0, B.jsx)(`span`, {
                className: F,
                children: r.GetNameWithFallback(C(D.LANGUAGE)),
              }),
              !r.BIsVisibleEvent() &&
                (0, B.jsxs)(`span`, {
                  className: `_-4utxQA1wCE-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: b(`#CreatorHome_EventLink_Unpublished`),
                    }),
                    (0, B.jsx)(k, {
                      tooltip: b(`#CreatorHome_EventLink_Unpublished_ttip`),
                      small: !0,
                    }),
                  ],
                }),
              r.BIsVisibleEvent() &&
                !h &&
                (0, B.jsxs)(`span`, {
                  className: `MWHiEZVKTsA-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: b(
                        `#CreatorHome_EventLink_PublishedAndNotSelected`,
                      ),
                    }),
                    (0, B.jsx)(k, {
                      tooltip: b(
                        `#CreatorHome_EventLink_PublishedAndNotSelected_ttip`,
                      ),
                      small: !0,
                    }),
                  ],
                }),
              v
                ? (0, B.jsx)(q, {
                    eventModel: r,
                    label: b(`#CreatorHome_EventLink_Select`),
                    icon: (0, B.jsx)(g, {}),
                    onClick: () => u(!0),
                    tooltip: b(`#CreatorHome_EventLink_Select_ttip`),
                  })
                : !h &&
                  (0, B.jsxs)(`div`, {
                    className: `_5nnQGBHwxWw-`,
                    children: [
                      b(`#CreatorHome_EventLink_MustPublish`),
                      (0, B.jsx)(k, {
                        tooltip: b(`#CreatorHome_EventLink_MustPublish_ttip`),
                        small: !0,
                      }),
                    ],
                  }),
              h &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: b(`#CreatorHome_EventLink_Clear`),
                  icon: (0, B.jsx)(g, { filled: !0 }),
                  onClick: () => f(!0),
                  tooltip: b(`#CreatorHome_EventLink_Clear_ttip`),
                }),
            ],
          }),
          (0, B.jsxs)(`div`, {
            className: R,
            children: [
              (0, B.jsx)(q, {
                eventModel: r,
                label: b(`#Button_Edit`),
                icon: (0, B.jsx)(x, {}),
                route: o.k_eCommunityEdit,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: b(`#Button_Preview`),
                icon: (0, B.jsx)(_, {}),
                route: o.k_eCommunityPreviewSale,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: b(`#Button_Clone`),
                icon: (0, B.jsx)(A, {}),
                onClick: () => window.location.assign(S),
              }),
              !h &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: b(`#Button_Delete`),
                  icon: (0, B.jsx)(O, {}),
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
      ? (0, B.jsx)(w, {
          active: !0,
          children: (0, B.jsx)(u, { state: s, strDialogTitle: i }),
        })
      : (0, B.jsx)(w, {
          active: !0,
          children: (0, B.jsx)(m, {
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
          D.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxselectcreatorhome`,
        n = new FormData();
      return (
        n.append(`sessionid`, T()),
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
          D.STORE_BASE_URL +
          `/curator/` +
          e.clanSteamID.GetAccountID() +
          `/admin/ajaxdeletecreatorhomeevent`,
        n = new FormData();
      return (
        n.append(`sessionid`, T()),
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
      r && (0, B.jsx)(k, { tooltip: r, small: !0 }),
    ],
  });
}
export { V as default };

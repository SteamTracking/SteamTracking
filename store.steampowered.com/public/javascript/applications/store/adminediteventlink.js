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
  Bo as p,
  Cc as m,
  Dl as h,
  Dn as g,
  Jb as _,
  Jx as v,
  Ly as y,
  Ps as b,
  Wy as x,
  fr as S,
  hS as C,
  ix as w,
  mn as T,
  nc as E,
  vo as D,
  yr as O,
  za as k,
  zr as A,
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
    n = h(() => new y(t, w.EUNIVERSE, 7, 0)),
    { bIsFetching: r, rgEventModels: i, fnRefetch: a } = H(n),
    o = `${w.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
    s = () => window.location.assign(o),
    { creatorHome: l, isFetching: u, refetch: f } = d(t),
    p = l?.GetLinkedEventGID(),
    m = p && i?.some((e) => p == e.GID),
    g = r || u,
    _ = () => {
      (a(), f());
    },
    v = j.useMemo(
      () => [...(i ?? [])].sort((e, t) => t.startTime - e.startTime),
      [i],
    ),
    b = v.filter((e) => p && p == e.GID),
    C = v.filter((e) => !p || p != e.GID);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(A, {
        toolTipContent: x(`#CreatorHome_EventLink_Create_ttip`),
        style: { width: `25%` },
        children: (0, B.jsx)(S, {
          onClick: s,
          children: x(`#CreatorHome_EventLink_Create`),
        }),
      }),
      (0, B.jsx)(`h4`, { children: x(`#CreatorHome_EventLink_Title`) }),
      (0, B.jsx)(`p`, { children: x(`#CreatorHome_EventLink_Desc`) }),
      (0, B.jsx)(`br`, {}),
      (0, B.jsxs)(`div`, {
        className: N,
        children: [
          !m &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(`h5`, {
                  children: x(`#CreatorHome_EventLink_ActiveListTitle`),
                }),
                (0, B.jsx)(`p`, {
                  children: x(`#CreatorHome_EventLink_BasicActive`),
                }),
              ],
            }),
          g && (0, B.jsx)(c, {}),
          !g &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                b.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: x(`#CreatorHome_EventLink_ActiveListTitle`),
                      }),
                      (0, B.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: b.map((e) =>
                          (0, B.jsx)(
                            U,
                            {
                              creatorHome: l,
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
                C.length > 0 &&
                  (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsx)(`h5`, {
                        children: x(`#CreatorHome_EventLink_InactiveListTitle`),
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
  } = i({
    queryKey: [`DraftAndHiddenPartnerEvents`, e.ConvertTo64BitString()],
    queryFn: async () => {
      let t =
          w.STORE_BASE_URL +
          `/curator/` +
          e.GetAccountID() +
          `/admin/ajaxgetcreatorhomeevents`,
        n = { l: w.LANGUAGE },
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
    h = G(),
    g = n?.GetLinkedEventGID(),
    _ = g && g == r.GID,
    v = !_ && r.BIsVisibleEvent(),
    y = `${w.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${r.GID}?redir=${window.location.href}`;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(W, {
        active: a,
        mutateAsync: () => c.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (s(!1), e && i());
        },
        strTitle: x(`#Button_Delete`),
        strDescription: x(`#CreatorHome_EventLink_Delete_Dialog_Desc`),
        strError: x(`#CreatorHome_EventLink_Delete_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: l,
        mutateAsync: () => h.mutateAsync({ clanSteamID: t, gid: r.GID }),
        onClose: (e) => {
          (u(!1), e && i());
        },
        strTitle: x(`#CreatorHome_EventLink_Select`),
        strDescription: x(`#CreatorHome_EventLink_Select_Dialog_Desc`),
        strError: x(`#CreatorHome_EventLink_Select_Dialog_Error`),
      }),
      (0, B.jsx)(W, {
        active: d,
        mutateAsync: () => h.mutateAsync({ clanSteamID: t, gid: `0` }),
        onClose: (e) => {
          (f(!1), e && i());
        },
        strTitle: x(`#CreatorHome_EventLink_Clear`),
        strDescription: x(`#CreatorHome_EventLink_Clear_Dialog_Desc`),
        strError: x(`#CreatorHome_EventLink_Clear_Dialog_Error`),
      }),
      (0, B.jsxs)(`div`, {
        className: m(P, _ && `rh4o7L-VRbU-`),
        children: [
          (0, B.jsxs)(`div`, {
            className: I,
            children: [
              (0, B.jsx)(`span`, {
                className: F,
                children: r.GetNameWithFallback(C(w.LANGUAGE)),
              }),
              !r.BIsVisibleEvent() &&
                (0, B.jsxs)(`span`, {
                  className: `_-4utxQA1wCE-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: x(`#CreatorHome_EventLink_Unpublished`),
                    }),
                    (0, B.jsx)(O, {
                      tooltip: x(`#CreatorHome_EventLink_Unpublished_ttip`),
                      small: !0,
                    }),
                  ],
                }),
              r.BIsVisibleEvent() &&
                !_ &&
                (0, B.jsxs)(`span`, {
                  className: `MWHiEZVKTsA-`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: x(
                        `#CreatorHome_EventLink_PublishedAndNotSelected`,
                      ),
                    }),
                    (0, B.jsx)(O, {
                      tooltip: x(
                        `#CreatorHome_EventLink_PublishedAndNotSelected_ttip`,
                      ),
                      small: !0,
                    }),
                  ],
                }),
              v
                ? (0, B.jsx)(q, {
                    eventModel: r,
                    label: x(`#CreatorHome_EventLink_Select`),
                    icon: (0, B.jsx)(b, {}),
                    onClick: () => u(!0),
                    tooltip: x(`#CreatorHome_EventLink_Select_ttip`),
                  })
                : !_ &&
                  (0, B.jsxs)(`div`, {
                    className: `_5nnQGBHwxWw-`,
                    children: [
                      x(`#CreatorHome_EventLink_MustPublish`),
                      (0, B.jsx)(O, {
                        tooltip: x(`#CreatorHome_EventLink_MustPublish_ttip`),
                        small: !0,
                      }),
                    ],
                  }),
              _ &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: x(`#CreatorHome_EventLink_Clear`),
                  icon: (0, B.jsx)(b, { filled: !0 }),
                  onClick: () => f(!0),
                  tooltip: x(`#CreatorHome_EventLink_Clear_ttip`),
                }),
            ],
          }),
          (0, B.jsxs)(`div`, {
            className: R,
            children: [
              (0, B.jsx)(q, {
                eventModel: r,
                label: x(`#Button_Edit`),
                icon: (0, B.jsx)(D, {}),
                route: o.k_eCommunityEdit,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: x(`#Button_Preview`),
                icon: (0, B.jsx)(k, {}),
                route: o.k_eCommunityPreviewSale,
              }),
              (0, B.jsx)(q, {
                eventModel: r,
                label: x(`#Button_Clone`),
                icon: (0, B.jsx)(p, {}),
                onClick: () => window.location.assign(y),
              }),
              !_ &&
                (0, B.jsx)(q, {
                  eventModel: r,
                  label: x(`#Button_Delete`),
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
      ? (0, B.jsx)(T, {
          active: !0,
          children: (0, B.jsx)(u, { state: s, strDialogTitle: i }),
        })
      : (0, B.jsx)(T, {
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
  return r({
    mutationFn: async (e) => {
      let t =
          w.STORE_BASE_URL +
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
          w.STORE_BASE_URL +
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

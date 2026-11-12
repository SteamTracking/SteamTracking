/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n, w as r } from "./chunk~01cfc309bf.js";
import { t as i } from "./chunk~395a1fb77b.js";
import {
  Al as a,
  Eu as o,
  Kc as s,
  Na as c,
  Pl as l,
  Qs as u,
  Su as d,
  Vc as f,
  Ws as p,
  Yl as m,
  Zm as h,
  Zp as g,
  ef as _,
  gm as v,
  hi as y,
  hm as b,
  ja as x,
  nc as ee,
  pi as te,
  rf as S,
  tm as C,
  yc as w,
} from "./main.js";
import {
  a as T,
  c as E,
  i as D,
  n as O,
  o as k,
  r as A,
} from "./chunk~61f3bc8fe4.js";
var j = e(t()),
  M = `wiJqXTPU468-`,
  N = `hioRg1nXJCQ-`,
  P = `_0aFiUekNE6I-`,
  F = `_6CRZVgXX8WU-`,
  I = `-RS5MjpS9jg-`,
  L = `VCr0rtJhkqE-`,
  R = `_251Yq-pwxUA-`,
  z = `L0aJl-TTCO0-`,
  B = `jw00MnpI46s-`,
  V = `yV0P89CB4mg-`,
  ne = `d2UeLuiq6xY-`,
  H = `EJrQKVkzhjk-`,
  U = `M7XVUF5aHZw-`,
  W = `GDByqt7FPpw-`,
  G = `wDxGI9lKYwM-`,
  K = `bhbnhf7x6FA-`,
  q = n(),
  J = new k(),
  Y = o(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    j.useEffect(() => {
      n && !J.m_bLoaded && J.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = g();
    (0, j.useEffect)(() => {
      (J.setTransport(r), (window.RefreshSteamNotifications = () => ue(r)));
    }, [r]);
    let i = X();
    return t
      ? (0, q.jsxs)(q.Fragment, {
          children: [(0, q.jsx)($, {}), (0, q.jsx)(oe, {})],
        })
      : (0, q.jsx)(re, { nTotalUnviewed: i.nUnviewed });
  });
function X() {
  return r(() => ({
    notifications: J.m_rgNotificationRollups,
    summary: J.m_summary,
    loaded: J.m_bLoaded,
    nUnviewed: J.m_nUnviewed,
  }));
}
function Z() {
  let e = X(),
    t = C(),
    { data: n } = y(t),
    r = te(),
    i = n?.settings;
  return e.notifications.filter((e) => !D(e.type, i, r) && !T(e.item));
}
function re(e) {
  let { nTotalUnviewed: t } = e,
    n = j.useRef(null),
    r = Z(),
    [a, o] = j.useState(U);
  j.useEffect(() => {
    n.current ||
      ((n.current = p(
        (0, q.jsx)(ie, { popupRef: n }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      n.current.Hide());
    let e = document.getElementById(`header_notification_link`);
    (e && (e.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => o(null), 2e3));
  }, []);
  let s = () => {
      n.current?.visible ||
        (n.current?.Show(),
        r.findIndex((e) => !e.item.viewed) != -1 && J.MarkAllItemsViewed());
    },
    l = j.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, q.jsx)(i, {
    trigger: `repeated`,
    onVisibilityChange: l,
    children: (0, q.jsx)(`button`, {
      onClick: s,
      id: `green_envelope_menu_root`,
      className: d(B, t ? H : ne, a),
      children: (0, q.jsx)(c, {
        className: V,
        "aria-label": _(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var ie = (e) => {
    let { popupRef: t } = e,
      n = j.useRef(null),
      [r, i] = j.useState(!1);
    j.useEffect(() => {
      i(n.current != null && n.current?.scrollHeight > n.current?.clientHeight);
    }, [n.current?.scrollHeight, r]);
    let a = r ? void 0 : F;
    return (0, q.jsxs)(`div`, {
      className: M,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, q.jsx)(ae, {}),
        (0, q.jsxs)(`div`, {
          className: d(P, a),
          ref: n,
          children: [(0, q.jsx)($, {}), (0, q.jsx)(Q, {}), (0, q.jsx)(le, {})],
        }),
      ],
    });
  },
  ae = () => {
    let e = `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/notifications`;
    return (0, q.jsxs)(`div`, {
      className: d(I),
      children: [
        (0, q.jsx)(`div`, {
          className: R,
          children: _(`#NotificationsMenu_Title`),
        }),
        (0, q.jsx)(`a`, {
          href: e,
          children: (0, q.jsx)(`div`, {
            className: z,
            children: _(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  oe = () => {
    let e = `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/notifications`;
    return (0, q.jsx)(`div`, {
      className: d(I, L),
      children: (0, q.jsx)(`a`, {
        href: e,
        children: (0, q.jsx)(`div`, {
          className: z,
          children: _(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function se(e, t, n) {
  (t.read ||
    (n && n.button != 0 && n.button != 1) ||
    !t.notification_id ||
    J.MarkItemRead(t.notification_id),
    e());
}
function Q() {
  let e = Z();
  return e.length == 0
    ? null
    : (0, q.jsx)(`div`, {
        className: N,
        children: e.map((e, t) =>
          (0, q.jsx)(
            O,
            { rollup: e, onNotificationClick: se, uimode: 3, location: 3 },
            t,
          ),
        ),
      });
}
var ce = [
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: f,
    fnLocalizeBody: (e) => S(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: u,
    fnLocalizeBody: (e) => S(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: w,
    fnLocalizeBody: (e) => S(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: s,
    fnLocalizeBody: (e) => S(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: m,
    fnLocalizeBody: (e) => S(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${v.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: ee,
    fnLocalizeBody: (e) => S(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: x,
    fnLocalizeBody: (e) => S(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${b.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: l,
    fnLocalizeBody: (e) =>
      S(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${b.STORE_BASE_URL}account/familymanagement/join?ft=${v.steamid}`,
    countItem: `family_invites`,
    icon: a,
    fnLocalizeBody: (e) => S(`#Notification_FamilyInvitePinned_Body`, e),
  },
];
function $() {
  let e = X();
  return (0, q.jsx)(q.Fragment, {
    children: ce.map((t) =>
      (0, q.jsx)(
        A,
        {
          url: t.fnUrl(),
          count: e.summary[t.countItem],
          icon: t.icon,
          strBody: t.fnLocalizeBody(e.summary[t.countItem]),
          eFeature: t.feature,
        },
        t.countItem,
      ),
    ),
  });
}
function le() {
  return (0, q.jsxs)(`div`, {
    className: W,
    children: [
      (0, q.jsx)(`div`, {
        className: G,
        children: _(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, q.jsx)(`div`, {
        className: K,
        children: _(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function ue(e) {
  let t = null;
  try {
    t = await E(e, v.steamid, h(b.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && J.ProcessNewNotificationPayload(t);
}
export { Y as GreenEnvelope, Y as default, X as useSteamNotifications };

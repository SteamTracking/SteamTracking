/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n, w as r } from "./libraries.js";
import { t as i } from "./visibilitytracker.js";
import {
  Aa as a,
  Bc as o,
  Gc as s,
  Jl as c,
  Ma as l,
  Nl as u,
  Tu as d,
  Us as f,
  Zd as p,
  Zp as m,
  Zs as h,
  dm as g,
  ef as _,
  fm as v,
  gi as y,
  kl as b,
  mi as x,
  qm as ee,
  qp as te,
  tc as S,
  vc as C,
  xu as w,
} from "./main.js";
import {
  a as T,
  c as E,
  i as D,
  n as O,
  o as k,
  r as A,
} from "./webtemplates.js";
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
  Y = d(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    j.useEffect(() => {
      n && !J.m_bLoaded && J.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = te();
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
    t = m(),
    { data: n } = y(t),
    r = x(),
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
      ((n.current = f(
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
    c = j.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, q.jsx)(i, {
    trigger: `repeated`,
    onVisibilityChange: c,
    children: (0, q.jsx)(`button`, {
      onClick: s,
      id: `green_envelope_menu_root`,
      className: w(B, t ? H : ne, a),
      children: (0, q.jsx)(l, {
        className: V,
        "aria-label": p(`#NotificationsMenu_Title`),
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
          className: w(P, a),
          ref: n,
          children: [(0, q.jsx)($, {}), (0, q.jsx)(Q, {}), (0, q.jsx)(le, {})],
        }),
      ],
    });
  },
  ae = () => {
    let e = `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/notifications`;
    return (0, q.jsxs)(`div`, {
      className: w(I),
      children: [
        (0, q.jsx)(`div`, {
          className: R,
          children: p(`#NotificationsMenu_Title`),
        }),
        (0, q.jsx)(`a`, {
          href: e,
          children: (0, q.jsx)(`div`, {
            className: z,
            children: p(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  oe = () => {
    let e = `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/notifications`;
    return (0, q.jsx)(`div`, {
      className: w(I, L),
      children: (0, q.jsx)(`a`, {
        href: e,
        children: (0, q.jsx)(`div`, {
          className: z,
          children: p(`#NotificationsMenu_ViewAll`),
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
      `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: o,
    fnLocalizeBody: (e) => _(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: h,
    fnLocalizeBody: (e) => _(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: C,
    fnLocalizeBody: (e) => _(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: s,
    fnLocalizeBody: (e) => _(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: c,
    fnLocalizeBody: (e) => _(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${g.COMMUNITY_BASE_URL}profiles/${v.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: S,
    fnLocalizeBody: (e) => _(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${g.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: a,
    fnLocalizeBody: (e) => _(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${g.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: u,
    fnLocalizeBody: (e) =>
      _(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${g.STORE_BASE_URL}account/familymanagement/join?ft=${v.steamid}`,
    countItem: `family_invites`,
    icon: b,
    fnLocalizeBody: (e) => _(`#Notification_FamilyInvitePinned_Body`, e),
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
        children: p(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, q.jsx)(`div`, {
        className: K,
        children: p(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function ue(e) {
  let t = null;
  try {
    t = await E(e, v.steamid, ee(g.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && J.ProcessNewNotificationPayload(t);
}
export { Y as GreenEnvelope, Y as default, X as useSteamNotifications };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  C as t,
  I as n,
  L as r,
  Pt as i,
  at as a,
} from "./chunk~01cfc309bf.js";
import {
  Au as o,
  Br as s,
  Df as c,
  Jm as l,
  Jo as u,
  Nu as d,
  Qd as f,
  Su as p,
  Vm as m,
  Xp as ee,
  Yo as h,
  bu as g,
  dh as _,
  em as v,
  hl as te,
  ju as ne,
  li as re,
  lm as ie,
  mm as ae,
  qm as oe,
  si as se,
} from "./main.js";
import {
  d as ce,
  i as le,
  l as y,
  o as b,
  s as x,
  t as S,
  u as C,
} from "./chunk~61f3bc8fe4.js";
var w = e(i()),
  T = `oKmzL-DX83g-`,
  E = `BsqF--ht2TU-`,
  D = `ymmfeQlsoo4-`,
  O = `F38eJWs9QdA-`,
  k = `_3zaZGH4YdHc-`,
  A = `PQJeiJQ3MDI-`,
  j = `YvdMc-u73s0-`,
  M = `Ni1iSmrAzW8-`,
  N = `VmFWf-nBpKU-`,
  P = `SFLe-bGViYY-`,
  F = `cKoboKnME4o-`,
  I = `R-gghTDpxUc-`,
  L = `OpWzUuJR-ow-`,
  R = `gv24MUeT5eM-`,
  z = `_89CROveBC5M-`,
  B = `qaQSjvc6JDQ-`,
  V = `CeG5MdP7kw4-`,
  H = `YKUMDMMkYew-`,
  U = `Fidzlbx42vg-`,
  W = `oyl1IMfOrg8-`,
  ue = `Aw9bSZZCt3Y-`,
  de = `lS6MXMmmcrA-`,
  fe = `-s3QaLNsc1Q-`,
  pe = `Y8e-dSwUGH4-`,
  me = `_6i8VFSSq3gQ-`,
  G = class {
    constructor() {
      n(this);
    }
    rgFilterState = new Map();
    commentFilter = { type: 0, setItemTypes: new Set([]), fnFilter: () => !0 };
    k_rgFilterCheckboxes = [
      {
        type: 3,
        display: f(`#NotificationsFilters_Comments`),
        hash: `comments`,
      },
      {
        type: 8,
        display: f(`#NotificationsFilters_Wishlist`),
        hash: `wishlist`,
      },
      {
        type: 5,
        display: f(`#NotificationsFilters_FriendRequest`),
        hash: `invites`,
      },
      { type: 2, display: f(`#NotificationsFilters_Gifts`), hash: `gifts` },
      {
        type: 4,
        display: f(`#NotificationsFilters_Inventory`),
        hash: `inventory`,
      },
      {
        type: 12,
        display: f(`#NotificationsFilters_AsyncGame`),
        hash: `asyncgame`,
      },
      {
        type: 11,
        display: f(`#NotificationsFilters_HelpRequest`),
        hash: `help`,
      },
      {
        type: 9,
        display: f(`#NotificationsFilters_TradeOffer`),
        hash: `trade`,
      },
      {
        type: 10,
        display: f(`#NotificationsFilters_General`),
        hash: `general`,
      },
    ];
    k_rgCommentFilters = [
      {
        type: 0,
        display: f(`#NotificationsList_CommentFilters_All`),
        fnFilter: () => !0,
      },
      {
        type: 1,
        display: f(`#NotificationsList_CommentFilters_YourItems`),
        fnFilter: this.IsCommentOwned,
      },
      {
        type: 2,
        display: f(`#NotificationsList_CommentFilters_Subscribed`),
        fnFilter: this.IsCommentSubscribed,
      },
    ];
    IsCommentOwned(e, t) {
      return e.bis_owner || e.owner_steam_id.ConvertTo64BitString() == t;
    }
    IsCommentSubscribed(e, t) {
      return e.bsubscribed;
    }
    ProcessHash(e) {
      (this.rgFilterState.clear(),
        this.commentFilter.setItemTypes.clear(),
        e &&
          e.split(`,`).forEach((e) => {
            let t = this.k_rgFilterCheckboxes.findIndex((t) => t.hash == e);
            t === -1
              ? _(e) &&
                this.rgFilterState.has(3) &&
                this.commentFilter.setItemTypes.add(parseInt(e))
              : this.rgFilterState.set(this.k_rgFilterCheckboxes[t].type, !0);
          }));
    }
    SetFilter(e, t, n) {
      (n &&
        (this.rgFilterState.clear(), this.commentFilter.setItemTypes.clear()),
        e &&
          (this.rgFilterState.set(e, t),
          e == 3 && !t && this.commentFilter.setItemTypes.clear()),
        this.UpdateLocationHash());
    }
    SetCommentFilter(e) {
      ((this.commentFilter = e),
        (this.commentFilter.fnFilter = this.k_rgCommentFilters.find(
          (t) => t.type == e.type,
        )?.fnFilter),
        this.UpdateLocationHash());
    }
    UpdateLocationHash() {
      let e = ``;
      (this.rgFilterState.forEach((t, n) => {
        t &&
          (e +=
            (e ? `,` : ``) +
            this.k_rgFilterCheckboxes.find((e) => e.type == n)?.hash);
      }),
        this.rgFilterState.has(3) &&
          this.commentFilter.setItemTypes.forEach(
            (t) => (e += (e ? `,` : ``) + t),
          ),
        window.history.pushState(
          {},
          null,
          window.location.pathname + (e ? `#` + e : ``),
        ));
    }
  };
(c([r], G.prototype, `rgFilterState`, void 0),
  c([r], G.prototype, `commentFilter`, void 0));
function K() {
  t(() => [...X.rgFilterState]);
  let e = 0;
  return (
    X.rgFilterState.forEach((t) => {
      e += +!!t;
    }),
    { numActive: e, filters: X.rgFilterState }
  );
}
function he() {
  let e = Y(),
    t = x();
  return (
    e.map((e) => {
      e.item.hidden || ce(t, e.type, e.rgunread?.length);
    }),
    C(t)
  );
}
function q() {
  return t(() => X.commentFilter);
}
function ge() {
  return w.useMemo(() => {
    let e = new Map();
    for (let t of Z.m_rgNotificationRollups)
      e.set(t.type, 1 + (e.get(t.type) || 0));
    return e;
  }, []);
}
function _e() {
  let e = v();
  return w.useMemo(() => {
    let t = new Map();
    for (let n of X.k_rgCommentFilters)
      for (let r of Z.m_rgNotificationRollups.filter((e) => e.type == 3)) {
        let i = y(r);
        n.fnFilter(i, e) && t.set(n.type, 1 + (t.get(n.type) || 0));
      }
    return t;
  }, [e]);
}
function J() {
  return w.useMemo(() => {
    let e = new Map();
    for (let t of Z.m_rgNotificationRollups.filter((e) => e.type == 3)) {
      let n = y(t);
      e.set(n.comment_type, 1 + (e.get(n.comment_type) || 0));
    }
    return e;
  }, []);
}
function Y() {
  let { numActive: e, filters: n } = K(),
    r = q(),
    i = v(),
    { settings: a } = re(i).data,
    o = se();
  return (
    t(() => C(Z.m_summary)),
    Z.m_rgNotificationRollups.filter((t) => {
      if ((e && !n.get(t.type)) || le(t.type, a, o)) return !1;
      if (e && t.type == 3 && (r.type != 0 || r.setItemTypes.size > 0)) {
        let e = y(t),
          n = !r.fnFilter || r.fnFilter(e, i);
        return (
          r.setItemTypes.size > 0 &&
            !r.setItemTypes.has(e.comment_type) &&
            (n = !1),
          n
        );
      }
      return !0;
    })
  );
}
var X = new G(),
  Z = new b(),
  Q = a();
function ve(e) {
  let { hash: t } = e;
  (0, w.useEffect)(() => {
    X.ProcessHash(t);
  }, [t]);
  let n = ee();
  (0, w.useEffect)(() => {
    (Z.setTransport(n), Z.m_nUnviewed > 0 && Z.MarkAllItemsViewed());
  }, [n]);
  let r = ie(`notifications`, `application_config`);
  return (
    Z.ProcessNewNotificationPayload(r),
    Z.m_rgNotificationRollups.length
      ? (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsxs)(`div`, {
            className: T,
            children: [
              (0, Q.jsxs)(`div`, {
                className: D,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: O,
                    children: f(`#NotificationsList_Header`),
                  }),
                  (0, Q.jsx)(ye, {}),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: E,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: A,
                    children: (0, Q.jsx)(be, {}),
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: N,
                    children: [
                      (0, Q.jsx)(Se, {}),
                      (0, Q.jsx)(`div`, {
                        className: me,
                        children: (0, Q.jsx)(d, {
                          href: `/my/moderatormessages`,
                          children: f(`#CommunityActivity`),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : (0, Q.jsx)(`div`, { className: T, children: (0, Q.jsx)(xe, {}) })
  );
}
function ye() {
  let e = he(),
    t = f(`#NotificationsList_Unread`, e);
  return (0, Q.jsx)(`span`, { className: k, children: t });
}
function be() {
  let e = Y();
  return (0, Q.jsx)(p, {
    className: j,
    children: e.map((e, t) => (0, Q.jsx)(Oe, { rollup: e }, t)),
  });
}
function xe() {
  return (0, Q.jsxs)(p, {
    className: P,
    children: [
      (0, Q.jsx)(p, {
        className: F,
        children: f(`#NotificationsList_EmptyTitle`),
      }),
      (0, Q.jsx)(p, {
        className: I,
        children: f(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
function Se() {
  let e = Y(),
    t = ge();
  return (0, Q.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, Q.jsxs)(`div`, {
        className: L,
        children: [
          (0, Q.jsx)(`div`, {
            className: R,
            children: (0, Q.jsx)(u, {
              className: z,
              onClick: () => Z.MarkAllItemsRead(e),
              children: f(`#NotificationsList_MarkAllRead`),
            }),
          }),
          (0, Q.jsxs)(u, {
            className: B,
            onClick: () =>
              window.location.assign(
                `${ae.STORE_BASE_URL}account/notificationsettings`,
              ),
            children: [
              (0, Q.jsx)(te, { className: V }),
              f(`#NotificationsList_Settings`),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: H,
        children: f(`#NotificationsList_FilterTo`),
      }),
      (0, Q.jsx)(`div`, {
        className: U,
        children: X.k_rgFilterCheckboxes
          .filter((e) => t.has(e.type))
          .map((e) => (0, Q.jsx)(Ce, { filterOptions: e }, e.type)),
      }),
      (0, Q.jsx)(u, {
        className: ue,
        onClick: () => X.SetFilter(null, !1, !0),
        children: f(`#NotificationsList_Reset`),
      }),
    ],
  });
}
function Ce(e) {
  let { filterOptions: t } = e,
    { filters: n } = K();
  return t.type == 3
    ? (0, Q.jsx)(Ee, { filterOptions: t, checked: n.get(t.type) })
    : (0, Q.jsx)(
        h,
        {
          className: W,
          label: t.display,
          checked: n.get(t.type),
          onChange: (e) => X.SetFilter(t.type, e),
        },
        t.type,
      );
}
function $(e) {
  let { threadType: t } = e,
    n = q();
  return (0, Q.jsx)(h, {
    className: void 0,
    label: f(`#CommentThreadType_` + t),
    checked: n.setItemTypes.has(t),
    onChange: (e) => {
      e
        ? (n.setItemTypes.add(Number(t)),
          X.SetCommentFilter({ type: n.type, setItemTypes: n.setItemTypes }))
        : (n.setItemTypes.delete(Number(t)),
          X.SetCommentFilter({ type: n.type, setItemTypes: n.setItemTypes }));
    },
  });
}
function we(e) {
  let { className: t } = e,
    n = J();
  return (0, Q.jsx)(`div`, {
    className: g(de, t),
    children: Array.from(n.keys()).map((e) =>
      (0, Q.jsx)($, { threadType: e }, e),
    ),
  });
}
function Te(e) {
  let { expanded: t, children: n } = e,
    [r, i] = (0, w.useState)(void 0),
    a = ne((e) => {
      let t = e.target;
      i(t.scrollHeight);
    });
  return (0, Q.jsx)(`div`, {
    className: g(pe, fe),
    style: { height: t ? r : 0 },
    children: (0, Q.jsx)(`div`, { ref: a, children: n }),
  });
}
function Ee(e) {
  let { filterOptions: t, checked: n } = e,
    r = _e(),
    i = J(),
    a = (e) => {
      X.SetFilter(t.type, e);
    },
    o = r.size > 2,
    s = i.size > 1,
    c = o || s;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(
        h,
        { className: W, label: t.display, checked: n, onChange: a },
        t.type,
      ),
      c &&
        (0, Q.jsx)(`div`, {
          className: g(`iOH5sYCnmag-`, n && `-s3QaLNsc1Q-`),
          children: (0, Q.jsx)(Te, {
            expanded: n,
            children: (0, Q.jsx)(`div`, {
              className: void 0,
              children: s && (0, Q.jsx)(we, { className: `-s3QaLNsc1Q-` }),
            }),
          }),
        }),
    ],
  });
}
function De(e, t, n) {
  (t.read ||
    (n && n.button != 0 && n.button != 1) ||
    Z.MarkItemRead(t.notification_id),
    e());
}
function Oe(e) {
  let { rollup: n } = e;
  t(() => n.item.hidden);
  let [r, i] = w.useState(!1),
    a = o(
      (0, w.useCallback)((e) => {
        e.isIntersecting && i(!0);
      }, []),
      { rootMargin: `600px` },
    ),
    c = (0, w.useCallback)(() => {
      Z.MarkItemHidden(n.item.notification_id);
    }, [n.item.notification_id]);
  if (n.item.hidden) return null;
  if (n.item.hidden && n.type == 5) {
    let e = y(n);
    if (m(e.state) || e.state == 1) return null;
  }
  let u = S(n.type);
  return u
    ? (0, Q.jsx)(s, {
        controller: `notification`,
        method: l(3),
        submethod: oe(4),
        children: (0, Q.jsx)(ke, {
          ref: a,
          children:
            r &&
            (0, Q.jsx)(u, {
              rollup: n,
              onNotificationClick: De,
              onHide: c,
              location: 4,
              uimode: 3,
            }),
        }),
      })
    : null;
}
var ke = w.forwardRef((e, t) =>
  (0, Q.jsx)(`div`, { className: M, ref: t, children: e.children }),
);
function Ae(e) {
  let t = e.location.hash;
  return (
    t && t.startsWith(`#`) && (t = t.slice(1)), (0, Q.jsx)(ve, { hash: t })
  );
}
export { Ae as default };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { L as t, Pt as n, R as r, ot as i, w as a } from "./libraries.js";
import {
  Au as o,
  Cu as s,
  Ef as c,
  Gm as ee,
  Mu as l,
  Rm as u,
  Wm as d,
  Xo as f,
  Yo as p,
  Zd as m,
  Zp as h,
  ch as g,
  dm as _,
  gi as te,
  gl as ne,
  ku as re,
  mi as ie,
  om as ae,
  qp as oe,
  qr as se,
  xu as v,
} from "./main.js";
import {
  d as ce,
  i as le,
  l as y,
  o as b,
  s as x,
  t as S,
  u as C,
} from "./webtemplates.js";
var w = e(n()),
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
      t(this);
    }
    rgFilterState = new Map();
    commentFilter = { type: 0, setItemTypes: new Set([]), fnFilter: () => !0 };
    k_rgFilterCheckboxes = [
      {
        type: 3,
        display: m(`#NotificationsFilters_Comments`),
        hash: `comments`,
      },
      {
        type: 8,
        display: m(`#NotificationsFilters_Wishlist`),
        hash: `wishlist`,
      },
      {
        type: 5,
        display: m(`#NotificationsFilters_FriendRequest`),
        hash: `invites`,
      },
      { type: 2, display: m(`#NotificationsFilters_Gifts`), hash: `gifts` },
      {
        type: 4,
        display: m(`#NotificationsFilters_Inventory`),
        hash: `inventory`,
      },
      {
        type: 12,
        display: m(`#NotificationsFilters_AsyncGame`),
        hash: `asyncgame`,
      },
      {
        type: 11,
        display: m(`#NotificationsFilters_HelpRequest`),
        hash: `help`,
      },
      {
        type: 9,
        display: m(`#NotificationsFilters_TradeOffer`),
        hash: `trade`,
      },
      {
        type: 10,
        display: m(`#NotificationsFilters_General`),
        hash: `general`,
      },
    ];
    k_rgCommentFilters = [
      {
        type: 0,
        display: m(`#NotificationsList_CommentFilters_All`),
        fnFilter: () => !0,
      },
      {
        type: 1,
        display: m(`#NotificationsList_CommentFilters_YourItems`),
        fnFilter: this.IsCommentOwned,
      },
      {
        type: 2,
        display: m(`#NotificationsList_CommentFilters_Subscribed`),
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
      this.rgFilterState.clear(),
        this.commentFilter.setItemTypes.clear(),
        e &&
          e.split(`,`).forEach((e) => {
            let t = this.k_rgFilterCheckboxes.findIndex((t) => t.hash == e);
            t === -1
              ? g(e) &&
                this.rgFilterState.has(3) &&
                this.commentFilter.setItemTypes.add(parseInt(e))
              : this.rgFilterState.set(this.k_rgFilterCheckboxes[t].type, !0);
          });
    }
    SetFilter(e, t, n) {
      n &&
        (this.rgFilterState.clear(), this.commentFilter.setItemTypes.clear()),
        e &&
          (this.rgFilterState.set(e, t),
          e == 3 && !t && this.commentFilter.setItemTypes.clear()),
        this.UpdateLocationHash();
    }
    SetCommentFilter(e) {
      (this.commentFilter = e),
        (this.commentFilter.fnFilter = this.k_rgCommentFilters.find(
          (t) => t.type == e.type,
        )?.fnFilter),
        this.UpdateLocationHash();
    }
    UpdateLocationHash() {
      let e = ``;
      this.rgFilterState.forEach((t, n) => {
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
        );
    }
  };
c([r], G.prototype, `rgFilterState`, void 0),
  c([r], G.prototype, `commentFilter`, void 0);
function K() {
  a(() => [...X.rgFilterState]);
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
  return a(() => X.commentFilter);
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
  let e = h();
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
  let { numActive: e, filters: t } = K(),
    n = q(),
    r = h(),
    { settings: i } = te(r).data,
    o = ie();
  return (
    a(() => C(Z.m_summary)),
    Z.m_rgNotificationRollups.filter((a) => {
      if ((e && !t.get(a.type)) || le(a.type, i, o)) return !1;
      if (e && a.type == 3 && (n.type != 0 || n.setItemTypes.size > 0)) {
        let e = y(a),
          t = !n.fnFilter || n.fnFilter(e, r);
        return (
          n.setItemTypes.size > 0 &&
            !n.setItemTypes.has(e.comment_type) &&
            (t = !1),
          t
        );
      }
      return !0;
    })
  );
}
var X = new G(),
  Z = new b(),
  Q = i();
function ve(e) {
  let { hash: t } = e;
  (0, w.useEffect)(() => {
    X.ProcessHash(t);
  }, [t]);
  let n = oe();
  (0, w.useEffect)(() => {
    Z.setTransport(n), Z.m_nUnviewed > 0 && Z.MarkAllItemsViewed();
  }, [n]);
  let r = ae(`notifications`, `application_config`);
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
                    children: m(`#NotificationsList_Header`),
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
                        children: (0, Q.jsx)(l, {
                          href: `/my/moderatormessages`,
                          children: m(`#CommunityActivity`),
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
    t = m(`#NotificationsList_Unread`, e);
  return (0, Q.jsx)(`span`, { className: k, children: t });
}
function be() {
  let e = Y();
  return (0, Q.jsx)(s, {
    className: j,
    children: e.map((e, t) => (0, Q.jsx)(Oe, { rollup: e }, t)),
  });
}
function xe() {
  return (0, Q.jsxs)(s, {
    className: P,
    children: [
      (0, Q.jsx)(s, {
        className: F,
        children: m(`#NotificationsList_EmptyTitle`),
      }),
      (0, Q.jsx)(s, {
        className: I,
        children: m(`#NotificationsList_EmptyBody`),
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
            children: (0, Q.jsx)(p, {
              className: z,
              onClick: () => Z.MarkAllItemsRead(e),
              children: m(`#NotificationsList_MarkAllRead`),
            }),
          }),
          (0, Q.jsxs)(p, {
            className: B,
            onClick: () =>
              window.location.assign(
                `${_.STORE_BASE_URL}account/notificationsettings`,
              ),
            children: [
              (0, Q.jsx)(ne, { className: V }),
              m(`#NotificationsList_Settings`),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: H,
        children: m(`#NotificationsList_FilterTo`),
      }),
      (0, Q.jsx)(`div`, {
        className: U,
        children: X.k_rgFilterCheckboxes
          .filter((e) => t.has(e.type))
          .map((e) => (0, Q.jsx)(Ce, { filterOptions: e }, e.type)),
      }),
      (0, Q.jsx)(p, {
        className: ue,
        onClick: () => X.SetFilter(null, !1, !0),
        children: m(`#NotificationsList_Reset`),
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
        f,
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
  return (0, Q.jsx)(f, {
    className: void 0,
    label: m(`#CommentThreadType_` + t),
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
    className: v(de, t),
    children: Array.from(n.keys()).map((e) =>
      (0, Q.jsx)($, { threadType: e }, e),
    ),
  });
}
function Te(e) {
  let { expanded: t, children: n } = e,
    [r, i] = (0, w.useState)(void 0),
    a = o((e) => {
      let t = e.target;
      i(t.scrollHeight);
    });
  return (0, Q.jsx)(`div`, {
    className: v(pe, fe),
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
        f,
        { className: W, label: t.display, checked: n, onChange: a },
        t.type,
      ),
      c &&
        (0, Q.jsx)(`div`, {
          className: v(`iOH5sYCnmag-`, n && `-s3QaLNsc1Q-`),
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
  t.read ||
    (n && n.button != 0 && n.button != 1) ||
    Z.MarkItemRead(t.notification_id),
    e();
}
function Oe(e) {
  let { rollup: t } = e;
  a(() => t.item.hidden);
  let [n, r] = w.useState(!1),
    i = re(
      (0, w.useCallback)((e) => {
        e.isIntersecting && r(!0);
      }, []),
      { rootMargin: `600px` },
    ),
    o = (0, w.useCallback)(() => {
      Z.MarkItemHidden(t.item.notification_id);
    }, [t.item.notification_id]);
  if (t.item.hidden) return null;
  if (t.item.hidden && t.type == 5) {
    let e = y(t);
    if (u(e.state) || e.state == 1) return null;
  }
  let s = S(t.type);
  return s
    ? (0, Q.jsx)(se, {
        controller: `notification`,
        method: ee(3),
        submethod: d(4),
        children: (0, Q.jsx)(ke, {
          ref: i,
          children:
            n &&
            (0, Q.jsx)(s, {
              rollup: t,
              onNotificationClick: De,
              onHide: o,
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

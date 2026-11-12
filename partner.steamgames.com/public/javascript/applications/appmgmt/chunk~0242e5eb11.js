/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  Q as n,
  it as r,
  j as i,
  rt as a,
  sn as o,
  vt as s,
  yt as c,
} from "./chunk~de7f2df91c.js";
import { Ft as l, It as u, M as d, ct as f } from "./chunk~25a6634263.js";
import {
  Ea as p,
  Pt as m,
  Va as h,
  Wt as g,
  h as _,
  l as v,
  tn as y,
  ua as b,
  zt as x,
} from "./chunk~1fa4b8f2ff.js";
import { c as ee, l as S, s as te, t as ne } from "./chunk~428594b857.js";
import { t as C } from "./chunk~726542bc75.js";
import "./chunk~8681f5c764.js";
import { t as w } from "./chunk~c55709d290.js";
import { r as T, t as E } from "./chunk~8ceeb46076.js";
import { n as D } from "./chunk~0111fcd096.js";
import { o as O } from "./chunk~2f8c67b4de.js";
import { r as k, t as A } from "./chunk~70c16cc80c.js";
import { n as j, t as M } from "./chunk~95ecbf576c.js";
import {
  A as re,
  M as ie,
  N,
  T as ae,
  f as P,
  r as F,
} from "./chunk~6110f63e8e.js";
import { t as I } from "./chunk~b3f4ae92bc.js";
import { t as L } from "./chunk~fb7b5d9c48.js";
import { r as R } from "./chunk~ec644f97c6.js";
import { t as z } from "./chunk~10ec219681.js";
var B = o(t(), 1),
  V = s(),
  H = `m8TRNh1e3As-`;
function U(e, t) {
  return e > t + 1 ? e - t : e + 12 - t;
}
function W(e) {
  let {
      strToken: t,
      rtEstimatedNotifcationDate: n,
      strUrlLearnMoreLink: r,
      bInReservationQueue: i,
      bWaitlistIsActive: a,
      reservedHardwareDetail: o,
      bHideLabel: s,
    } = e,
    c = h.Localize(`#Sale_Reservation_Fallback_V2`),
    l = !1;
  if (
    (i
      ? (c = h.Localize(`#Sale_Reservation_Fallback_user_V2`))
      : a &&
        o &&
        !o.position_is_waitlist &&
        ((c = E.Localize(`#Reservation_Join_Waitlist_Cancel_Reservation`)),
        (l = !0)),
    !t || !n || l)
  )
    return (0, V.jsx)(`div`, {
      className: H,
      children: (0, V.jsx)(K, {
        elReservationMessage: c,
        strUrlLearnMoreLink: r,
      }),
    });
  let u = new Date(n * 1e3),
    d = u.getMonth() + 1,
    f = ``,
    p = ``,
    m = ``,
    g = t;
  switch (t) {
    case `#Sale_Reservation_Year`:
    case `#Sale_Reservation_AfterYear`:
      f = `` + u.getFullYear();
      break;
    case `#Sale_Reservation_MonthYear`:
    case `#Sale_Reservation_AfterMonthYear`:
      ((f = b(`#Sale_Reservation_MonthNoun_` + d)), (p = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_TwoMonthRangeYear`:
      ((f = b(`#Sale_Reservation_MonthNoun_` + U(d, 1))),
        (p = b(`#Sale_Reservation_MonthNoun_` + d)),
        (m = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_ThreeMonthRangeYear`:
      ((f = b(`#Sale_Reservation_MonthNoun_` + U(d, 2))),
        (p = b(`#Sale_Reservation_MonthNoun_` + d)),
        (m = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_FourMonthRangeYear`:
      ((f = b(`#Sale_Reservation_MonthNoun_` + U(d, 3))),
        (p = b(`#Sale_Reservation_MonthNoun_` + d)),
        (m = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_Quarter_ThreeMonths`:
      ((g = `#Sale_Reservation_Quarter` + (Math.floor((d - 1) / 3) + 1)),
        (f = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_AfterQuarter_ThreeMonths`:
      ((g = `#Sale_Reservation_AfterQuarter` + (Math.floor((d - 1) / 3) + 1)),
        (f = b(`#Sale_Reservation_MonthNoun_` + d)),
        (p = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_ByYear`:
      f = `` + u.getFullYear();
      break;
    case `#Sale_Reservation_ByMonthYear`:
      ((f = b(`#Sale_Reservation_MonthNoun_` + d)), (p = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_BetweenNowAndLastDay`:
      ((f = b(`#Sale_Reservation_MonthNoun_` + d)),
        (p = `` + new Date(u.getFullYear(), u.getMonth(), 0).getDate()),
        (m = `` + u.getFullYear()));
      break;
    case `#Sale_Reservation_RelativeWeekly`:
      {
        let e = D.GetTimeNowWithOverride(),
          t = Math.floor((n - e) / 86400);
        t < 7 ||
          (t < 28
            ? ((g = `#Sale_Reservation_RelativeWeekly_Plural`),
              (f = `` + Math.floor(t / 7 + 1)))
            : ((g = `#Sale_Reservation_RelativeMonthly`),
              (f = `` + Math.floor(t / 28 + 1))));
      }
      break;
    case `#Sale_Reservation_AvailabilityUnknown`:
      g = void 0;
      break;
    default:
      g = `#Sale_Reservation_Fallback`;
  }
  return (0, V.jsxs)(`div`, {
    className: H,
    children: [
      (0, V.jsx)(`div`, {
        children:
          !s &&
          !!g &&
          b(
            i
              ? `#Sale_Reservation_YourExpectedDate`
              : `#Sale_Reservation_ExpectedDate`,
          ),
      }),
      (0, V.jsx)(K, {
        elReservationMessage: g ? b(g, f, p, m, ``) : c,
        strUrlLearnMoreLink: r,
      }),
    ],
  });
}
var G = `CxHAWKdNnYI-`;
function K(e) {
  let { elReservationMessage: t, strUrlLearnMoreLink: n } = e;
  return n
    ? (0, V.jsxs)(V.Fragment, {
        children: [
          t,
          (0, V.jsx)(T, {
            url: n,
            className: G,
            children: h.Localize(`#Button_Learn`),
          }),
        ],
      })
    : t;
}
var q = n(`physical_goods`, `application_config`);
function J() {
  let [e] = (0, B.useState)(() => q);
  return e;
}
function oe(e) {
  return q.find(
    (t) =>
      t.edistributor == e.edistributor &&
      t.product_identifier == e.product_identifier,
  );
}
var Y = class e {
  m_mapProductPositionMsgList = new Map();
  m_productListChangeCallback = new l();
  m_messageListChangeCallback = new Map();
  m_steamInterface = null;
  GetKey(e) {
    return `${e.edistributor}_${e.product_identifier}`;
  }
  SortList(e) {
    e.sort((e, t) => e.start_queue_position - t.start_queue_position);
  }
  GetProductListChangeCallback() {
    return this.m_productListChangeCallback;
  }
  GetPositionListChangeCallback(e) {
    let t = this.GetKey(e);
    return this.GetPositionListViaKeyChangeCallback(t);
  }
  GetPositionListViaKeyChangeCallback(e) {
    return (
      this.m_messageListChangeCallback.has(e) ||
        this.m_messageListChangeCallback.set(e, new l()),
      this.m_messageListChangeCallback.get(e)
    );
  }
  GetAllProducts() {
    return Array.from(this.m_mapProductPositionMsgList.keys()).map((e) => {
      let t = e.split(`_`);
      return { edistributor: Number.parseInt(t[0]), product_identifier: t[1] };
    });
  }
  GetPositionMessagingForProduct(e) {
    let t = this.GetKey(e);
    return this.m_mapProductPositionMsgList.get(t);
  }
  AddProductID(e) {
    let t = this.GetKey(e);
    this.m_mapProductPositionMsgList.has(t) ||
      (this.m_mapProductPositionMsgList.set(t, []),
      this.GetProductListChangeCallback().Dispatch(this.GetAllProducts()));
  }
  async SetPositionMessages(e) {
    let t = c.Init(ee);
    if (e.length == 0)
      return (
        console.log(
          `CReservationMessagingStore.SetPositionMessages - empty list`,
        ),
        !1
      );
    e.forEach((e) => {
      let n = t.Body().add_settings();
      (n.set_edistributor(e.edistributor),
        n.set_product_identifier(e.product_identifier),
        n.set_start_queue_position(e.start_queue_position),
        n.set_rtime_estimated_notification(e.rtime_estimated_notification),
        n.set_localization_token(e.localization_token));
    });
    let n = null;
    try {
      let i = await S.SetReservationPositionMessage(
        this.m_steamInterface.GetServiceTransport(),
        t,
      );
      if (i.GetEResult() == 1) {
        let t = new Set(),
          n = Math.floor(Date.now() / 1e3);
        return (
          e.forEach((e) => {
            ((e.accountid = r.accountid), (e.rtime_created = n));
            let i = this.GetKey(e),
              a = this.m_mapProductPositionMsgList.get(i),
              o = a.findIndex(
                (t) => t.start_queue_position == e.start_queue_position,
              ),
              s = [...a];
            (o >= 0 ? (s[o] = e) : (s.push(e), this.SortList(s)),
              this.m_mapProductPositionMsgList.set(i, s),
              t.add(this.GetKey(e)));
          }),
          Array.from(t).forEach((e) => {
            this.GetPositionListViaKeyChangeCallback(e).Dispatch(
              this.m_mapProductPositionMsgList.get(e),
            );
          }),
          !0
        );
      }
      n = w(i);
    } catch (e) {
      n = w(e);
    }
    return (
      console.error(
        `CReservationMessagingStore.SetPositionMessages failed: ` +
          n?.strErrorMsg,
        n,
      ),
      !1
    );
  }
  async DeletePositionMessage(e) {
    let t = c.Init(ne);
    (t.Body().set_edistributor(e.edistributor),
      t.Body().set_product_identifier(e.product_identifier),
      t.Body().set_start_queue_position(e.start_queue_position));
    let n = null;
    try {
      let r = await S.DeleteReservationPositionMessage(
        this.m_steamInterface.GetServiceTransport(),
        t,
      );
      if (r.GetEResult() == 1) {
        let t = this.GetKey(e),
          n = this.m_mapProductPositionMsgList.get(t),
          r = n.findIndex(
            (t) => t.start_queue_position == e.start_queue_position,
          ),
          i = [...n];
        return (
          i.splice(r, 1),
          this.m_mapProductPositionMsgList.set(t, i),
          this.GetPositionListChangeCallback(e).Dispatch(i),
          !0
        );
      }
      n = w(r);
    } catch (e) {
      n = w(e);
    }
    return (
      console.error(
        `CReservationMessagingStore.SetPositionMessages failed: ` +
          n?.strErrorMsg,
        n,
      ),
      !1
    );
  }
  async ReloadReservationPositionMessages() {
    let e = c.Init(te);
    return await S.ReloadAllReservationPositionMessages(
      this.m_steamInterface.GetServiceTransport(),
      e,
    );
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  constructor() {}
  Init() {
    this.m_steamInterface = A(new k(a.WEBAPI_BASE_URL));
    let e = n(`reservation_queue_position_messages`, `application_config`);
    this.ValidateInputDefault(e) &&
      (e.map((e) => {
        let t = this.GetKey(e);
        (this.m_mapProductPositionMsgList.has(t) ||
          this.m_mapProductPositionMsgList.set(t, []),
          this.m_mapProductPositionMsgList.get(t).push(e));
      }),
      this.m_mapProductPositionMsgList.forEach((e) => this.SortList(e)));
  }
  GetSteamInterface() {
    return this.m_steamInterface;
  }
  ValidateInputDefault(e) {
    let t = e;
    return (
      t &&
      Array.isArray(t) &&
      t.length > 0 &&
      typeof t[0].edistributor == `number` &&
      typeof t[0].product_identifier == `string`
    );
  }
};
(e([u], Y.prototype, `AddProductID`, null),
  e([u], Y.prototype, `SetPositionMessages`, null),
  e([u], Y.prototype, `DeletePositionMessage`, null),
  e([u], Y.prototype, `ReloadReservationPositionMessages`, null));
function X() {
  let [e, t] = (0, B.useState)(() => Y.Get().GetAllProducts());
  return (d(Y.Get().GetProductListChangeCallback(), t), e);
}
function se(e) {
  let [t, n] = (0, B.useState)(() => Y.Get().GetPositionMessagingForProduct(e));
  return (d(Y.Get().GetPositionListChangeCallback(e), n), t);
}
function Z() {
  let e = Y.Get();
  return {
    fnAddProductID: e.AddProductID,
    fnSetPositionMessages: e.SetPositionMessages,
    fnDeletePositionMessage: e.DeletePositionMessage,
    fnReloadReservationPositionMessages: e.ReloadReservationPositionMessages,
  };
}
var ce = `X59ZcWQtAm4-`,
  le = `_6Zo5eaJ9-rg-`,
  ue = `Ge6Utmxhlt4-`,
  de = `xw68-Hgdak8-`;
function fe(e) {
  let [t, n] = (0, B.useState)(null),
    { fnAddProductID: r } = Z();
  return (
    console.log(`AddProductToReservationPositionMessage selected: `, t),
    (0, V.jsxs)(`div`, {
      children: [
        (0, V.jsx)(y, { children: `Add Product SKU:` }),
        (0, V.jsx)(`p`, {
          children: `Select an item for which we want to communicate a reservation status.`,
        }),
        (0, V.jsx)(pe, { selected: t, setSelected: n }),
        (0, V.jsxs)(g, {
          disabled: !t,
          onClick: () => {
            (r(t), n(null));
          },
          children: [
            `Add '`,
            t?.product_description ?? t?.product_identifier,
            `' To List`,
          ],
        }),
      ],
    })
  );
}
function pe(e) {
  let { selected: t, setSelected: n } = e,
    r = (0, B.useRef)(void 0),
    i = J(),
    a = X(),
    o = (0, B.useMemo)(
      () =>
        !i || !a
          ? []
          : i
              .filter(
                (e) =>
                  a.findIndex(
                    (t) =>
                      t.edistributor == e.edistributor &&
                      t.product_identifier == e.product_identifier,
                  ) == -1,
              )
              .map((e) => ({
                value: e,
                label: `${e.product_description} @ ${e.distributor} - product id: ${e.product_identifier}, part number ${e.part_number} `,
              })),
      [i, a],
    );
  (0, B.useEffect)(() => {
    r?.current && r.current.clearValue();
  }, [a]);
  let s = o?.find(
    (e) =>
      t &&
      t.edistributor == e.value.edistributor &&
      t.product_identifier == e.value.product_identifier,
  );
  return (0, V.jsx)(L._default, {
    isSearchable: !0,
    ref: r,
    isMulti: !1,
    isClearable: !0,
    className: le,
    options: o,
    value: s,
    onChange: (e) => {
      e && n(e.value);
    },
  });
}
function me(e) {
  let t = X();
  return !t || t.length == 0
    ? (0, V.jsx)(`div`, {
        children: `No products with reservation position messages exists.`,
      })
    : (0, V.jsx)(`div`, {
        children: t.map((e) =>
          (0, V.jsx)(
            ge,
            { productID: e },
            `${e.edistributor}_${e.product_identifier}`,
          ),
        ),
      });
}
function Q(e) {
  return (0, V.jsxs)(`div`, {
    children: [
      (0, V.jsx)(y, { children: `instructions:` }),
      (0, V.jsx)(`p`, {
        children: `Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.`,
      }),
      (0, V.jsx)(`p`, {
        children: `Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.`,
      }),
      (0, V.jsx)(`p`, {
        children: `Queue positions are fixed for each user who enters the queue and only go up with new users entering the queue.  Their position doesn't decrease when previous users cancel or purchase the item.`,
      }),
    ],
  });
}
function he(e) {
  return (
    X(),
    (0, V.jsxs)(`div`, {
      children: [
        (0, V.jsx)(y, { children: `Force update:` }),
        (0, V.jsx)(`p`, {
          children: `By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.`,
        }),
        (0, V.jsx)(`p`, {
          children: `We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.`,
        }),
        (0, V.jsx)(g, {
          onClick: (e) => _((0, V.jsx)(ye, {}), f(e)),
          children: `Force Reload Definitions on Steam Servers`,
        }),
      ],
    })
  );
}
function ge(e) {
  let { productID: t } = e,
    n = oe(t),
    r = n?.product_description + ` ` + n?.distributor,
    i = se(t);
  return n
    ? (0, V.jsxs)(R, {
        bStartMinimized: !1,
        title: r,
        tooltip: `distributor enum: ${n.edistributor}, part number: ${n.part_number}, product identifier: ${n.product_identifier}`,
        children: [
          (0, V.jsx)(g, {
            onClick: (e) => _((0, V.jsx)($, { productID: t }), f(e)),
            children: `Add new start position`,
          }),
          (0, V.jsxs)(`table`, {
            className: ce,
            children: [
              (0, V.jsx)(`thead`, {
                children: (0, V.jsxs)(`tr`, {
                  children: [
                    (0, V.jsx)(`th`, { children: `Starting Queue Position` }),
                    (0, V.jsx)(`th`, {
                      children: `Estimate Date Receive Invite`,
                    }),
                    (0, V.jsx)(`th`, { children: `Localized Date` }),
                    (0, V.jsx)(`th`, { children: `Entry Created By` }),
                    (0, V.jsx)(`th`, {}),
                  ],
                }),
              }),
              (0, V.jsx)(`tbody`, {
                children: i.map((e) =>
                  (0, V.jsx)(
                    _e,
                    { positionMsg: e },
                    r + e.start_queue_position,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    : (0, V.jsxs)(`div`, {
        children: [
          `Unexpected: Could not find ProductID: `,
          t.edistributor,
          ` : `,
          t.product_identifier,
        ],
      });
}
function _e(e) {
  let { positionMsg: t } = e;
  return (0, V.jsxs)(`tr`, {
    children: [
      (0, V.jsx)(`td`, { children: C(t.start_queue_position) }),
      (0, V.jsx)(`td`, { children: p(t.rtime_estimated_notification) }),
      (0, V.jsx)(`td`, {
        children: (0, V.jsx)(W, {
          strUrlLearnMoreLink: void 0,
          rtEstimatedNotifcationDate: t.rtime_estimated_notification,
          strToken: t.localization_token,
          bInReservationQueue: !0,
          bHideLabel: !0,
        }),
      }),
      (0, V.jsxs)(`td`, {
        children: [
          (0, V.jsx)(`div`, {
            children: (0, V.jsx)(z, { accountID: t.accountid }),
          }),
          (0, V.jsx)(`br`, {}),
          `On: `,
          p(t.rtime_created),
        ],
      }),
      (0, V.jsxs)(`td`, {
        children: [
          (0, V.jsx)(g, {
            onClick: (e) =>
              _((0, V.jsx)($, { productID: t, existingPositionMsg: t }), f(e)),
            children: `Update`,
          }),
          (0, V.jsx)(g, {
            onClick: (e) => _((0, V.jsx)(ve, { positionMsg: t }), f(e)),
            children: `Delete`,
          }),
        ],
      }),
    ],
  });
}
function $(e) {
  let { productID: t, existingPositionMsg: n, closeModal: r } = e,
    { fnSetPositionMessages: i } = Z(),
    a = Math.floor(Date.now() / 1e3),
    [o, s] = (0, B.useState)(n?.start_queue_position || 0),
    [c, l] = (0, B.useState)(n?.rtime_estimated_notification || a + 86400),
    [u, d] = (0, B.useState)(
      n?.localization_token || `#Sale_Reservation_MonthYear`,
    ),
    f = n ? `Update Queue Range` : `Create Queue Range`,
    p = j();
  return p.bLoading
    ? (0, V.jsx)(M, { state: p, strDialogTitle: f, closeModal: r })
    : (0, V.jsx)(v, {
        bDisableBackgroundDismiss: !0,
        strTitle: f,
        onCancel: r,
        onOK: () => {
          p.fnSetLoading(!0);
          let e = {
            ...t,
            start_queue_position: o,
            rtime_estimated_notification: c,
            localization_token: u,
          };
          i([e]).then((e) => {
            e
              ? (p.fnSetSuccess(!0),
                p.fnSetStrSuccess(`Successfully created position`))
              : (p.fnSetSuccess(!1),
                p.fnSetStrError(
                  `Failed, please check console logs and/or try again`,
                ));
          });
        },
        children: (0, V.jsxs)(`div`, {
          className: ue,
          children: [
            (0, V.jsxs)(`p`, {
              children: [
                `When we get to accepting reservation number `,
                (0, V.jsx)(`i`, { children: `n` }),
                `, show those users a date they can anticipate to recieve an invite to purchase. If we are choosing a display that shows the day, please account for the date is being shown to each user in their local time.`,
              ],
            }),
            (0, V.jsx)(x, {
              type: `number`,
              min: `0`,
              value: o,
              label: `Starting Queue Position`,
              onChange: (e) =>
                s(Number.parseInt(e?.currentTarget?.value || `0`)),
            }),
            (0, V.jsx)(I, {
              bShowTimeZone: !0,
              strDescription: `Estimated Time Users will receive invite`,
              strDescToolTip: `Everyone above this queue position until the next entry, we expect to have been invited by or on this date`,
              nEarliestTime: a,
              fnGetTimeToUpdate: () => c,
              fnSetTimeToUpdate: l,
            }),
            (0, V.jsx)(`br`, {}),
            (0, V.jsx)(xe, { strToken: u, fnSetToken: d, rtEstimateDate: c }),
          ],
        }),
      });
}
function ve(e) {
  let { positionMsg: t, closeModal: n } = e,
    { fnDeletePositionMessage: r } = Z(),
    i = `Delete Queue Position ${C(t.start_queue_position)}`,
    a = j();
  return a.bLoading
    ? (0, V.jsx)(M, { state: a, strDialogTitle: i, closeModal: n })
    : (0, V.jsx)(v, {
        strTitle: i,
        strDescription: `Are you sure, this action is no undo'able?`,
        onCancel: n,
        onOK: () => {
          (a.fnSetLoading(!0),
            r(t).then((e) => {
              e
                ? (a.fnSetSuccess(!0),
                  a.fnSetStrSuccess(`Successfully delete position`))
                : (a.fnSetSuccess(!1),
                  a.fnSetStrError(
                    `Failed, please check console logs and/or try again`,
                  ));
            }));
        },
      });
}
function ye(e) {
  let { closeModal: t } = e,
    { fnReloadReservationPositionMessages: n } = Z(),
    [r, i] = (0, B.useState)(!1);
  return (
    (0, B.useEffect)(() => {
      n().then(() => i(!0));
    }, [n]),
    (0, V.jsx)(v, {
      bAlertDialog: !0,
      strTitle: `Reload Definition`,
      strDescription: r
        ? `Reload sent to server! Now safe to close dialog`
        : `Reloading In Progress...`,
      closeModal: t,
    })
  );
}
var be = [
  `#Sale_Reservation_MonthYear`,
  `#Sale_Reservation_TwoMonthRangeYear`,
  `#Sale_Reservation_ThreeMonthRangeYear`,
  `#Sale_Reservation_FourMonthRangeYear`,
  `#Sale_Reservation_Quarter_ThreeMonths`,
  `#Sale_Reservation_AfterYear`,
  `#Sale_Reservation_AfterMonthYear`,
  `#Sale_Reservation_Year`,
  `#Sale_Reservation_AfterQuarter_ThreeMonths`,
  `#Sale_Reservation_RelativeWeekly`,
  `#Sale_Reservation_ByYear`,
  `#Sale_Reservation_ByMonthYear`,
  `#Sale_Reservation_BetweenNowAndLastDay`,
  `#Sale_Reservation_AvailabilityUnknown`,
];
function xe(e) {
  let { strToken: t, fnSetToken: n, rtEstimateDate: r } = e,
    i = (0, B.useMemo)(
      () =>
        be.map((e) => ({
          label: (0, V.jsx)(W, {
            strToken: e,
            rtEstimatedNotifcationDate: r,
            strUrlLearnMoreLink: void 0,
            bInReservationQueue: !0,
          }),
          data: e,
        })),
      [r],
    );
  return (0, V.jsxs)(`div`, {
    children: [
      (0, V.jsx)(m, {
        strDropDownClassName: O,
        label: `Date Format`,
        rgOptions: i,
        selectedOption: t,
        onChange: (e) => n(e.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
      (0, V.jsxs)(`div`, {
        children: [
          (0, V.jsx)(`h3`, { children: `This will display to users as: ` }),
          (0, V.jsxs)(`div`, {
            className: de,
            children: [
              (0, V.jsx)(`div`, {
                children: b(`#Sale_Reservation_ExpectedDate`),
              }),
              (0, V.jsx)(W, {
                strUrlLearnMoreLink: void 0,
                rtEstimatedNotifcationDate: r,
                strToken: t,
                bInReservationQueue: !0,
                bHideLabel: !0,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Se(e) {
  return (0, V.jsxs)(`div`, {
    className: i(void 0, F),
    children: [
      (0, V.jsx)(`h1`, {
        className: re,
        children: `Lawrence's Reservation Queue Position Messaging Tools`,
      }),
      (0, V.jsx)(`hr`, { className: `VO` }),
      (0, V.jsxs)(`div`, {
        className: P,
        children: [
          (0, V.jsxs)(`div`, {
            className: ae,
            children: [
              (0, V.jsx)(`div`, { className: N, children: (0, V.jsx)(fe, {}) }),
              (0, V.jsx)(`div`, { className: N, children: (0, V.jsx)(me, {}) }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: ie,
            children: [
              (0, V.jsx)(`div`, { className: N, children: (0, V.jsx)(Q, {}) }),
              (0, V.jsx)(`div`, { className: N, children: (0, V.jsx)(he, {}) }),
              (0, V.jsxs)(`div`, {
                className: N,
                children: [
                  (0, V.jsx)(y, { children: `Useful Links:` }),
                  (0, V.jsx)(`ul`, {
                    children: (0, V.jsx)(`li`, {
                      children: (0, V.jsx)(`a`, {
                        href: `${a.STATS_BASE_URL}steamdeck/reservations/`,
                        target: `_blank`,
                        children: `Steam Hardware reservation stats page`,
                      }),
                    }),
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
export { Se as default };

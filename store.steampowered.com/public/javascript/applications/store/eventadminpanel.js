/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  Pt as n,
  dt as r,
  ft as i,
  jt as a,
  ot as o,
  st as s,
  u as c,
} from "./chunk~01cfc309bf.js";
import {
  C as l,
  Q as u,
  S as d,
  _t as f,
  at as p,
  gt as m,
  it as h,
  rt as g,
  vt as _,
  xt as v,
  yt as y,
} from "./chunk~2185942436.js";
import { l as b, m as x, s as S } from "./chunk~f57d770d64.js";
import {
  C,
  T as w,
  cn as T,
  f as E,
  nn as ee,
  nt as te,
  st as ne,
  w as re,
  x as ie,
  y as ae,
} from "./chunk~cf3721cc1c.js";
import { n as D, r as O, s as k } from "./chunk~673650a653.js";
import "./chunk~8681f5c764.js";
import { t as oe } from "./chunk~eefd71512b.js";
import { i as se } from "./chunk~331382b23f.js";
import { M as A, i as j, u as M } from "./chunk~2f8c67b4de.js";
import { c as N, r as P } from "./chunk~95ecbf576c.js";
import { u as ce } from "./chunk~7b4b9eb713.js";
import {
  $b as le,
  Ay as ue,
  Br as de,
  Bu as fe,
  Eb as F,
  Fn as pe,
  Fu as me,
  Ia as he,
  Jy as I,
  Ny as ge,
  Qb as _e,
  Qx as ve,
  Wb as ye,
  Xc as be,
  Xn as L,
  aS as R,
  bc as xe,
  bx as z,
  cx as B,
  eS as V,
  el as Se,
  iS as H,
  kn as Ce,
  nS as U,
  oS as W,
  qb as G,
  rS as K,
  sS as q,
  sx as we,
  tS as J,
  ux as Te,
  wc as Y,
  yS as Ee,
  yx as De,
  zb as Oe,
} from "./main.js";
async function ke(e) {
  let {
      clanAccountID: t,
      forumType: n,
      forumGID: r,
      forumTopicGID: i,
      signal: a,
    } = e,
    o = G.COMMUNITY_BASE_URL + `forum/` + t + `/` + n + `/deletetopic/`;
  r != null && r != `` && (o += r + `/`);
  let s = new FormData();
  (s.append(`sessionid`, _e()), s.append(`gidforumtopic`, i));
  let c = await fetch(o, {
    method: `POST`,
    body: s,
    credentials: `include`,
    signal: a,
  });
  if (!c.ok) throw Error(`${o} answered ${c.status}`);
  let l = await c.json();
  if (l.success != 1) throw l;
  return l;
}
function Ae() {
  return o({ mutationFn: (e) => ke(e) });
}
var X = e(t(), 1),
  Z = i();
function je(e) {
  let {
      eventModel: t,
      permissions: n,
      bIsCreatorHomeVisible: r,
      additionalButtons: i,
      onDeleteRequest: a,
      saleDayControl: o,
      promotionPlanLinks: s,
      testControls: l,
      bSupportsSticky: u = !1,
    } = e,
    d = ye(),
    f = se(),
    [p, m, h, g] = c(() => [
      t.visibility_state,
      t.jsondata.bSaleEnabled,
      t.GID,
      t.clanSteamID.GetAccountID(),
    ]),
    [_, v] = X.useState(u),
    { bVisible: y, ref: b } = Se();
  if (!(n?.can_edit || n?.support_user) || d) return (0, Z.jsx)(`span`, {});
  let S = Oe(),
    T = S == `community`,
    ee = S == `store`,
    k = !!n.support_user,
    oe = Ne(n),
    A = _ && !y,
    M = t.GetEventType() == 36,
    N =
      (p == x.k_EEventStateVisible || p == x.k_EEventStateUnlisted) &&
      (!M || r),
    P = p == x.k_EEventStateStaged;
  return (0, Z.jsxs)(be, {
    children: [
      (0, Z.jsx)(`div`, { className: Y(re, A && `FWx4hiffwLs-`) }),
      (0, Z.jsxs)(`div`, {
        className: Y({ [ae]: !0, [te]: T, [ne]: A }),
        children: [
          (0, Z.jsx)(`span`, {
            className: C,
            children: F.Localize(`#EventDisplay_Admin_Title`),
          }),
          (0, Z.jsxs)(`div`, {
            className: Y(w, A && `FWx4hiffwLs-`),
            children: [
              i,
              i &&
                (0, Z.jsx)(`span`, {
                  className: `CYRhg26l0dc-`,
                  children: ` `,
                }),
              (0, Z.jsx)(O, {
                eventModel: t,
                route: D.k_eCommunityEdit,
                className: Y(j, E),
                children: M
                  ? F.Localize(`#EventEditor_Edit_Page`)
                  : F.Localize(`#EventEditor_Edit`),
              }),
              a &&
                (0, Z.jsx)(`span`, {
                  className: `yYL-OrX9PtQ- _09V7NXTmtlY-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: a,
                  onKeyDown: Me(a),
                  children: F.Localize(`#EventDisplay_DeleteEvent`),
                }),
              !N &&
                (0, Z.jsx)(X.Fragment, {
                  children: (0, Z.jsx)(O, {
                    eventModel: t,
                    route: D.k_eCommunityPublish,
                    className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                    children: F.Localize(
                      P ? `#EventEditor_Publish_VisibleNow` : `#Button_Publish`,
                    ),
                  }),
                }),
              (0, Z.jsx)(O, {
                eventModel: t,
                route: D.k_eCommunityAdminPage,
                className: Y(j, E),
                children: F.Localize(`#EventDisplay_Events`),
              }),
              o,
              !!(m && f && !M) &&
                (0, Z.jsx)(O, {
                  eventModel: t,
                  route: D.k_eStoreSalePage,
                  className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: F.Localize(`#EventDisplay_SalesPage`),
                }),
              !!(m && k && h) &&
                (0, Z.jsx)(`a`, {
                  href:
                    G.STATS_BASE_URL +
                    `sales/details/?gid=` +
                    h +
                    `&clanid=` +
                    g,
                  target: G.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: F.Localize(`#EventDisplay_StatsPage`),
                }),
              !!(m && k && h && !M) &&
                (0, Z.jsx)(`a`, {
                  href:
                    G.PARTNER_BASE_URL +
                    `promotion/invitationplanner/dashboard?saleclaneventgid=` +
                    h +
                    `&saleclanaccountid=` +
                    g,
                  target: G.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: F.Localize(`#EventDisplay_InvitationPlannerPage`),
                }),
              s,
              !!(m && oe && g == 41316928 && t.GetContentHubCategory()) &&
                (0, Z.jsx)(`a`, {
                  href: `${G.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                  target: G.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: F.Localize(`#EventDisplay_CategoryEditor`),
                }),
              !!(N && (ee || (f && !T))) &&
                (0, Z.jsx)(O, {
                  eventModel: t,
                  route: m ? D.k_eCommunityPreviewSale : D.k_eCommunityView,
                  className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: F.Localize(
                    m
                      ? `#EventDisplay_PreviewOnCommunity`
                      : `#EventDisplay_ViewOnCommunity`,
                  ),
                }),
              !!(N && T) &&
                (0, Z.jsx)(O, {
                  eventModel: t,
                  route: D.k_eStoreView,
                  className: Y(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: F.Localize(`#EventDisplay_ViewOnStore`),
                }),
              l,
              A &&
                (0, Z.jsx)(`div`, {
                  className: `ZlbFAmu86SM-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => v(!1),
                  onKeyDown: Me(() => v(!1)),
                  children: (0, Z.jsx)(de, {
                    toolTipContent: F.Localize(
                      `#EventDisplay_Admin_Close_ttip`,
                    ),
                    children: (0, Z.jsx)(xe, {}),
                  }),
                }),
              !_ &&
                u &&
                (0, Z.jsx)(`div`, {
                  className: `ZlbFAmu86SM-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => v(!0),
                  onKeyDown: Me(() => v(!0)),
                  children: (0, Z.jsx)(de, {
                    toolTipContent: F.Localize(
                      `#EventDisplay_Admin_Reopen_ttip`,
                    ),
                    children: (0, Z.jsx)(he, { angle: 0 }),
                  }),
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, { className: ie, ref: b }),
    ],
  });
}
function Me(e) {
  return (t) => {
    (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e(t));
  };
}
function Ne(e) {
  return !!(e?.support_user && e?.valve_admin);
}
var Q = e(n(), 1),
  $ = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            admin_jsondata: { n: 2, br: K.readString, bw: q.writeString },
            partner_jsondata: { n: 3, br: K.readString, bw: q.writeString },
            input_jsondata: { n: 4, br: K.readString, bw: q.writeString },
            partner_readonly_jsondata: {
              n: 10,
              br: K.readString,
              bw: q.writeString,
            },
            partner_writable_jsondata: {
              n: 11,
              br: K.readString,
              bw: q.writeString,
            },
            assets_readonly_jsondata: {
              n: 12,
              br: K.readString,
              bw: q.writeString,
            },
            assets_writable_jsondata: {
              n: 13,
              br: K.readString,
              bw: q.writeString,
            },
            rtime32_start_time: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            rtime32_end_time: { n: 6, br: K.readUint32, bw: q.writeUint32 },
            partner_id: { n: 7, br: K.readUint32, bw: q.writeUint32 },
            input_access_key: { n: 8, br: K.readString, bw: q.writeString },
            last_update_time: { n: 9, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan`;
    }
  },
  Pe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { plan: { n: 1, c: $ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_CreatePlan_Request`;
    }
  },
  Fe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            input_access_key: { n: 2, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_CreatePlan_Response`;
    }
  },
  Ie = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            plan: { n: 1, c: $ },
            promotion_id: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_UpdatePlan_Request`;
    }
  },
  Le = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_UpdatePlan_Response`;
    }
  },
  Re = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlan_Request`;
    }
  },
  ze = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { plan: { n: 1, c: $ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlan_Response`;
    }
  },
  Be = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllActivePlan_Request`;
    }
  },
  Ve = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plan: { n: 1, c: $, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllActivePlan_Response`;
    }
  },
  He = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.oldest_rtime || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            oldest_rtime: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            newest_rtime: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            promotion_types: {
              n: 3,
              r: !0,
              q: !0,
              br: K.readString,
              bw: q.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanCompletedInDateRange_Request`;
    }
  },
  Ue = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plans: { n: 1, c: $, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanCompletedInDateRange_Response`;
    }
  },
  We = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: K.readEnum, bw: q.writeEnum },
            gid: { n: 2, br: K.readFixed64String, bw: q.writeFixed64String },
            promotion_planid: {
              n: 3,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromoAssociation`;
    }
  },
  Ge = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requested || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requested: { n: 1, c: We, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByAssociationID_Request`;
    }
  },
  Ke = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matching || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matching: { n: 1, c: We, r: !0, q: !0 },
            plans: { n: 2, c: $, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByAssociationID_Response`;
    }
  },
  qe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            upto_rtime: { n: 2, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlansUpdatedSince_Request`;
    }
  },
  Je = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            plans: { n: 1, c: $, r: !0, q: !0 },
            deleted_plan_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: K.readFixed64String,
              pbr: K.readPackedFixed64String,
              bw: q.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlansUpdatedSince_Response`;
    }
  },
  Ye = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_DeletePlan_Request`;
    }
  },
  Xe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_DeletePlan_Response`;
    }
  },
  Ze = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: K.readString, bw: q.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SearchPlan_Request`;
    }
  },
  Qe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plan: { n: 1, c: $, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SearchPlan_Response`;
    }
  },
  $e = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: K.readUint32,
              pbr: K.readPackedUint32,
              bw: q.writeRepeatedUint32,
            },
            exclude_sales: { n: 2, br: K.readBool, bw: q.writeBool },
            exclude_direct_featuring: { n: 3, br: K.readBool, bw: q.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllPlansForApps_Request`;
    }
  },
  et = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            plans: { n: 1, c: $, r: !0, q: !0 },
            apps_included_in_sales: { n: 2, c: tt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllPlansForApps_Response`;
    }
  },
  tt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: K.readUint32,
              pbr: K.readPackedUint32,
              bw: q.writeRepeatedUint32,
            },
            clan_event_gid: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales`;
    }
  },
  nt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.input_access_key || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            input_access_key: { n: 1, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByInputAccessKey_Request`;
    }
  },
  rt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { plan: { n: 1, c: $ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByInputAccessKey_Response`;
    }
  },
  it = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            value: { n: 2, br: K.readBool, bw: q.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_MarkLocalizationAssetComplete_Request`;
    }
  },
  at = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_MarkLocalizationAssetComplete_Response`;
    }
  },
  ot = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            notification_type: { n: 2, br: K.readEnum, bw: q.writeEnum },
            only_explicit_email_addresses: {
              n: 3,
              br: K.readBool,
              bw: q.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SendNotification_Request`;
    }
  },
  st = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SendNotification_Response`;
    }
  },
  ct = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            notification_id: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSentNotification_Request`;
    }
  },
  lt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: ut, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSentNotification_Response`;
    }
  },
  ut = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            tracking_id: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            email_address: { n: 3, br: K.readString, bw: q.writeString },
            accountid: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            status: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            type: { n: 6, br: K.readEnum, bw: q.writeEnum },
            rt_send_time: { n: 7, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionNotificationResults`;
    }
  },
  dt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            notification_id: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_ResendNotification_Request`;
    }
  },
  ft = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_ResendNotification_Response`;
    }
  },
  pt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotion_id: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            add: { n: 2, br: K.readBool, bw: q.writeBool },
            email_address: { n: 3, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SetPromotionEmailTarget_Request`;
    }
  },
  mt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SetPromotionEmailTarget_Response`;
    }
  },
  ht = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            rtime_sale_start: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            rtime_sale_end: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            daily_deal_gid: {
              n: 5,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            promotion_gid: {
              n: 6,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            create_asset_request: { n: 7, br: K.readBool, bw: q.writeBool },
            partner_id: { n: 8, br: K.readUint32, bw: q.writeUint32 },
            advertising_appid: { n: 9, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_CreateSalePageForPromo_Request`;
    }
  },
  gt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            daily_deal_gid: {
              n: 3,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            promotion_gid: {
              n: 4,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            asset_request_gid: {
              n: 5,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            advertising_appid: { n: 6, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_CreateSalePageForPromo_Response`;
    }
  },
  _t = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_gross_sales_usdx100 || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_gross_sales_usdx100: {
              n: 1,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            total_gross_returns_usdx100: {
              n: 2,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            total_net_tax_usdx100: {
              n: 3,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            steam_gross_sales_usdx100: {
              n: 4,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            steam_gross_returns_usdx100: {
              n: 5,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            steam_net_tax_usdx100: {
              n: 6,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            in_game_gross_sales_usdx100: {
              n: 7,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            in_game_gross_returns_usdx100: {
              n: 8,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            in_game_net_tax_usdx100: {
              n: 9,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            total_net_sales_usdx100: {
              n: 10,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            steam_net_sales_usdx100: {
              n: 11,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            in_game_net_sales_usdx100: {
              n: 12,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            steam_gross_units_sold: {
              n: 13,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            steam_gross_units_returned: {
              n: 14,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
            gross_units_activated: {
              n: 15,
              br: K.readInt64String,
              bw: q.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_SummarySaleResult`;
    }
  },
  vt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotionids || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotionids: {
              n: 1,
              r: !0,
              q: !0,
              br: K.readUint64String,
              pbr: K.readPackedUint64String,
              bw: q.writeRepeatedUint64String,
            },
            partnerid: { n: 2, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Request`;
    }
  },
  yt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sales || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sales: { n: 1, c: St, r: !0, q: !0 },
            partial_access: { n: 2, br: K.readBool, bw: q.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response`;
    }
  },
  bt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_date || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            date: { n: 2, br: K.readString, bw: q.writeString },
            summary_sales: { n: 3, c: _t },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales`;
    }
  },
  xt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            packageid: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            secondary_product_id: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            summary_sales: { n: 4, c: _t },
            daily_promo_sales: { n: 5, c: bt, r: !0, q: !0 },
            package_billing_type: { n: 6, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product`;
    }
  },
  St = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotionid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [2, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotionid: {
              n: 1,
              br: K.readUint64String,
              bw: q.writeUint64String,
            },
            daily_promo_sales: { n: 2, c: bt, r: !0, q: !0 },
            summary_sales: { n: 3, c: _t },
            products: { n: 4, c: xt, r: !0, q: !0 },
            products_missing_user_rights: {
              n: 5,
              br: K.readUint32,
              bw: q.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData`;
    }
  },
  Ct = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_list || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { request_list: { n: 1, c: wt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPromotionPlanForSalePages_Request`;
    }
  },
  wt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            gid_clan_event: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage`;
    }
  },
  Tt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plans: { n: 1, c: $, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPromotionPlanForSalePages_Response`;
    }
  },
  Et = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtstart || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtstart: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            rtend: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            include_packages: { n: 3, br: K.readBool, bw: q.writeBool },
            filter_modified_sales_rank: {
              n: 4,
              d: !0,
              br: K.readBool,
              bw: q.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Request`;
    }
  },
  Dt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_details || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_details: { n: 1, c: Ot, r: !0, q: !0 },
            app_details: { n: 2, c: kt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Response`;
    }
  },
  Ot = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            discount_id: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            discount_name: { n: 3, br: K.readString, bw: q.writeString },
            discount_percentage: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            original_price_usd: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            discount_price_usd: { n: 6, br: K.readUint32, bw: q.writeUint32 },
            rtime_discount_start: { n: 7, br: K.readUint32, bw: q.writeUint32 },
            rtime_discount_end: { n: 8, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo`;
    }
  },
  kt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            cheapest_package_id: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            cheapest_discount_id: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            cheapest_discount_name: {
              n: 5,
              br: K.readString,
              bw: q.writeString,
            },
            package_original_price_usd: {
              n: 6,
              br: K.readUint32,
              bw: q.writeUint32,
            },
            discounted_price_usd: { n: 7, br: K.readUint32, bw: q.writeUint32 },
            discount_percentage: { n: 8, br: K.readUint32, bw: q.writeUint32 },
            rtime_discount_start: { n: 9, br: K.readUint32, bw: q.writeUint32 },
            rtime_discount_end: { n: 10, br: K.readUint32, bw: q.writeUint32 },
            num_discounted_packages: {
              n: 11,
              br: K.readUint32,
              bw: q.writeUint32,
            },
            modified_sales_rank: { n: 12, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo`;
    }
  },
  At = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            include_published: { n: 2, br: K.readBool, bw: q.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Request`;
    }
  },
  jt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clans || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clans: { n: 1, c: Nt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Response`;
    }
  },
  Mt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            gid_clan_event: {
              n: 2,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            name: { n: 3, br: K.readString, bw: q.writeString },
            published: { n: 4, br: K.readBool, bw: q.writeBool },
            start_time: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            end_time: { n: 6, br: K.readUint32, bw: q.writeUint32 },
            external_sale_event_type: {
              n: 7,
              br: K.readUint32,
              bw: q.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage`;
    }
  },
  Nt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            clan_name: { n: 2, br: K.readString, bw: q.writeString },
            is_creator_home: { n: 3, br: K.readBool, bw: q.writeBool },
            sale_pages: { n: 4, c: Mt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan`;
    }
  },
  Pt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partner_id || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partner_id: { n: 1, br: K.readUint32, bw: q.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAdvertisingAppsForPartner_Request`;
    }
  },
  Ft = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.advertising_apps || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { advertising_apps: { n: 1, c: It, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAdvertisingAppsForPartner_Response`;
    }
  },
  It = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            app_name: { n: 2, br: K.readString, bw: q.writeString },
            itemid: { n: 3, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app`;
    }
  },
  Lt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.spotlight_due_date || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            spotlight_due_date: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            marketing_message_due_date: {
              n: 2,
              br: K.readUint32,
              bw: q.writeUint32,
            },
            discount_event_due_date: {
              n: 3,
              br: K.readUint32,
              bw: q.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionRequirements`;
    }
  },
  Rt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            appid: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            invite_account: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            rtinvitetime: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            rtexpiretime: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            type: { n: 6, br: K.readEnum, bw: q.writeEnum },
            accept_account: { n: 7, br: K.readUint32, bw: q.writeUint32 },
            rtaccepttime: { n: 8, br: K.readUint32, bw: q.writeUint32 },
            rtdatechosen: { n: 9, br: K.readUint32, bw: q.writeUint32 },
            discount_eventid: { n: 10, br: K.readUint32, bw: q.writeUint32 },
            packageid: { n: 11, br: K.readUint32, bw: q.writeUint32 },
            bundleid: { n: 12, br: K.readUint32, bw: q.writeUint32 },
            primary_partnerid: { n: 13, br: K.readUint32, bw: q.writeUint32 },
            deadlines: { n: 14, c: Lt },
            notify_partner: { n: 15, br: K.readBool, bw: q.writeBool },
            additional_email: {
              n: 16,
              r: !0,
              q: !0,
              br: K.readString,
              bw: q.writeRepeatedString,
            },
            promotion_id: { n: 17, br: K.readString, bw: q.writeString },
            cancelled: { n: 18, br: K.readBool, bw: q.writeBool },
            rtime32_cancel_time: { n: 19, br: K.readUint32, bw: q.writeUint32 },
            require_sale_page: { n: 20, br: K.readBool, bw: q.writeBool },
            require_sale_page_type: { n: 21, br: K.readEnum, bw: q.writeEnum },
            admin_notes: { n: 22, br: K.readString, bw: q.writeString },
            partner_notes: { n: 23, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvitation`;
    }
  },
  zt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite: { n: 1, c: Rt },
            queue_email_to_send: { n: 2, br: K.readBool, bw: q.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_SetInvite_Request`;
    }
  },
  Bt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_SetInvite_Response`;
    }
  },
  Vt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            appid: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            packageid: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            bundleid: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            partnerid: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            promotion_id: { n: 6, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetInvite_Request`;
    }
  },
  Ht = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: Rt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetInvite_Response`;
    }
  },
  Ut = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            only_notify_additional_email: {
              n: 2,
              br: K.readBool,
              bw: q.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_ResendEmailInvite_Request`;
    }
  },
  Wt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_ResendEmailInvite_Response`;
    }
  },
  Gt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetEmailTargets_Request`;
    }
  },
  Kt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            partnerid: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            email_address: { n: 3, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInviteReceive`;
    }
  },
  qt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.targets || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            targets: { n: 1, c: Kt, r: !0, q: !0 },
            additional_email_address: {
              n: 2,
              r: !0,
              q: !0,
              br: K.readString,
              bw: q.writeRepeatedString,
            },
            valve_account_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: K.readUint32,
              pbr: K.readPackedUint32,
              bw: q.writeRepeatedUint32,
            },
            operation_email: { n: 4, br: K.readString, bw: q.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetEmailTargets_Response`;
    }
  },
  Jt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
            rtdatechosen: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            discount_days: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            discount_info: { n: 4, br: K.readString, bw: q.writeString },
            skip_discount_event: { n: 5, br: K.readBool, bw: q.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_AcceptInvite_Request`;
    }
  },
  Yt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: K.readFixed64String, bw: q.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_AcceptInvite_Response`;
    }
  },
  Xt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            inviteid: {
              n: 1,
              br: K.readFixed64String,
              bw: q.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_CancelInvite_Request`;
    }
  },
  Zt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_CancelInvite_Response`;
    }
  },
  Qt = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: K.readString, bw: q.writeString },
            partner_id: { n: 2, br: K.readUint32, bw: q.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionStats_GetOptInDemoStats_Request`;
    }
  },
  $t = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: en, r: !0, q: !0 },
            appid_without_permissions: {
              n: 2,
              r: !0,
              q: !0,
              br: K.readUint32,
              pbr: K.readPackedUint32,
              bw: q.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionStats_GetOptInDemoStats_Response`;
    }
  },
  en = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || V(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: K.readUint32, bw: q.writeUint32 },
            demo_appid: { n: 2, br: K.readUint32, bw: q.writeUint32 },
            rt_start_time: { n: 3, br: K.readUint32, bw: q.writeUint32 },
            rt_end_time: { n: 4, br: K.readUint32, bw: q.writeUint32 },
            demo_player_count: { n: 5, br: K.readUint32, bw: q.writeUint32 },
            wishlist_count: { n: 6, br: K.readUint32, bw: q.writeUint32 },
            player_wishlist_count: {
              n: 7,
              br: K.readUint32,
              bw: q.writeUint32,
            },
            rt_last_update_time: { n: 9, br: K.readUint32, bw: q.writeUint32 },
            fest_page_views: { n: 10, br: K.readUint32, bw: q.writeUint32 },
            fest_period_page_views: {
              n: 11,
              br: K.readUint32,
              bw: q.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return W(e.M(), t, n);
    }
    static fromObject(t) {
      return U(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      R(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionStats_GetOptInDemoStats_Response_PerAppStats`;
    }
  },
  tn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionPlanning.CreatePlan#1`, z(Pe, t, n), Fe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreatePlan = t;
  function n(e, t, n) {
    return e.SendMsg(`PromotionPlanning.UpdatePlan#1`, z(Ie, t, n), Le, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdatePlan = n;
  function r(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.UpdatePlanPartnerInfo#1`,
      z(Ie, t, n),
      Le,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdatePlanPartnerInfo = r;
  function i(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.UpdatePlanInputData#1`,
      z(Ie, t, n),
      Le,
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.UpdatePlanInputData = i;
  function a(e, t, n) {
    return e.SendMsg(`PromotionPlanning.DeletePlan#1`, z(Ye, t, n), Xe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeletePlan = a;
  function o(e, t, n) {
    return e.SendMsg(`PromotionPlanning.GetPlan#1`, z(Re, t, n), ze, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPlan = o;
  function s(e, t, n) {
    return e.SendMsg(`PromotionPlanning.GetAllActivePlan#1`, z(Be, t, n), Ve, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetAllActivePlan = s;
  function c(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanCompletedInDateRange#1`,
      z(He, t, n),
      Ue,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlanCompletedInDateRange = c;
  function l(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanByAssociationID#1`,
      z(Ge, t, n),
      Ke,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlanByAssociationID = l;
  function u(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlansUpdatedSince#1`,
      z(qe, t, n),
      Je,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlansUpdatedSince = u;
  function d(e, t, n) {
    return e.SendMsg(`PromotionPlanning.SearchPlan#1`, z(Ze, t, n), Qe, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.SearchPlan = d;
  function f(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetAllPlansForApps#1`,
      z($e, t, n),
      et,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetAllPlansForApps = f;
  function p(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanByInputAccessKey#1`,
      z(nt, t, n),
      rt,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPlanByInputAccessKey = p;
  function m(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.MarkLocalizationAssetComplete#1`,
      z(it, t, n),
      at,
      { ePrivilege: 1 },
    );
  }
  e.MarkLocalizationAssetComplete = m;
  function h(e, t, n) {
    return e.SendMsg(`PromotionPlanning.SendNotification#1`, z(ot, t, n), st, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.SendNotification = h;
  function g(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetSentNotification#1`,
      z(ct, t, n),
      lt,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetSentNotification = g;
  function _(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.ResendNotification#1`,
      z(dt, t, n),
      ft,
      { ePrivilege: 1 },
    );
  }
  e.ResendNotification = _;
  function v(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.SetPromotionEmailTarget#1`,
      z(pt, t, n),
      mt,
      { ePrivilege: 1 },
    );
  }
  e.SetPromotionEmailTarget = v;
  function y(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPromotionPlanSalesDaily#1`,
      z(vt, t, n),
      yt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPromotionPlanSalesDaily = y;
  function b(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPromotionPlanForSalePages#1`,
      z(Ct, t, n),
      Tt,
      {
        bConstMethod: !0,
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetPromotionPlanForSalePages = b;
  function x(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.CreateSalePageForPromo#1`,
      z(ht, t, n),
      gt,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreateSalePageForPromo = x;
  function S(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetUpcomingScheduledDiscounts#1`,
      z(Et, t, n),
      Dt,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetUpcomingScheduledDiscounts = S;
  function C(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetSalePageCandidatesForPromo#1`,
      z(At, t, n),
      jt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetSalePageCandidatesForPromo = C;
  function w(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetAdvertisingAppsForPartner#1`,
      z(Pt, t, n),
      Ft,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetAdvertisingAppsForPartner = w;
})((tn ||= {}));
var nn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.SetInvite#1`, z(zt, t, n), Bt, {
      ePrivilege: 4,
    });
  }
  e.SetInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.GetInvite#1`, z(Vt, t, n), Ht, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvite = n;
  function r(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.AcceptInvite#1`, z(Jt, t, n), Yt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.AcceptInvite = r;
  function i(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.CancelInvite#1`, z(Xt, t, n), Zt, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CancelInvite = i;
  function a(e, t, n) {
    return e.SendMsg(
      `PromotionEventInvites.ResendEmailInvite#1`,
      z(Ut, t, n),
      Wt,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ResendEmailInvite = a;
  function o(e, t, n) {
    return e.SendMsg(
      `PromotionEventInvites.GetEmailTargets#1`,
      z(Gt, t, n),
      qt,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetEmailTargets = o;
})((nn ||= {}));
var rn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionStats.GetOptInDemoStats#1`, z(Qt, t, n), $t, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetOptInDemoStats = t;
})((rn ||= {}));
function an() {
  let e = le(`promotion_operation_token`, `application_config`);
  return e
    ? ue(new ge(B.WEBAPI_BASE_URL, e)).GetServiceTransport()
    : (ve(!1, `GetPromotionWriteAccess: promotion operation token is missing`),
      null);
}
function on(e, t) {
  let [n] = (0, X.useState)(() => an());
  return s({
    queryKey: [`usePromotionPlanBySalePage`, t],
    queryFn: async () => {
      if (!n) return null;
      let r = De.Init(Ct),
        i = new wt();
      (i.set_clan_account_id(e),
        i.set_gid_clan_event(t),
        r.Body().add_request_list(i));
      let a = await tn.GetPromotionPlanForSalePages(n, r);
      if (a.GetEResult() != 1)
        throw Error(`Error from PromotionPlanBySalePage: ${a.GetEResult()}`);
      return a
        .Body()
        .plans()
        .map((e) => e.promotion_id());
    },
    placeholderData: null,
    enabled: !!n,
  }).data;
}
var sn = 0;
function cn(e) {
  let {
      closeModal: t,
      eventModel: n,
      onDeleteSuccessAndCloseDialog: r,
      bNoConfirmationNeeded: i,
      partnerEventStore: a,
    } = e,
    [o, s] = (0, X.useState)(i ? `waiting` : `confirmation`),
    [c, l] = (0, X.useState)({}),
    [u, d] = (0, X.useState)(!1),
    f = (0, X.useRef)(void 0),
    p = (0, X.useMemo)(() => new AbortController(), []);
  X.useEffect(() => () => p.abort(), [p]);
  let { mutate: m } = Ae(),
    h = (0, X.useCallback)(() => {
      a.ResetModel();
      let e = f.current?.forumTopicGID;
      u && e && f.current
        ? m(
            {
              clanAccountID: f.current.clanAccountID,
              forumType: `Event`,
              forumTopicGID: e,
              signal: p.signal,
            },
            {
              onSuccess: () => s(`success`),
              onError: (e) => {
                (l(fe(e)), s(`failed_thread_delete`));
              },
            },
          )
        : s(`success`);
    }, [a, u, m, p]),
    g = (0, X.useCallback)((e) => {
      (l(fe(e)), s(`error`));
    }, []),
    _ = (0, X.useCallback)(() => {
      let e = n.clanSteamID,
        t = n.GID,
        r = n.AnnouncementGID;
      ((f.current = {
        clanAccountID: e.GetAccountID(),
        forumTopicGID: n.forumTopicGID,
      }),
        !n.bOldAnnouncement && t && t != `0` && t != `18446744073709551615`
          ? (s(`waiting`), a.DeleteClanEvent(e, t).then(h).catch(g))
          : n.bOldAnnouncement && r
            ? (s(`waiting`), a.DeleteOldAnnouncement(e, r).then(h).catch(g))
            : (a.ResetModel(), s(`success`)));
    }, [n, a, h, g]),
    v = (0, X.useRef)(!1);
  X.useEffect(() => {
    i && !v.current && ((v.current = !0), _());
  }, [i, _]);
  let y = t,
    b = ``,
    x = [];
  switch (o) {
    case `confirmation`:
      let e = n.GetNameWithFallback(Ee(B.LANGUAGE)),
        i = n.BIsVisibleEvent()
          ? `#EventDisplay_AreYouSure_Visible`
          : `#EventDisplay_AreYouSure`;
      ((b = I(i, e ?? ``)),
        (y = _),
        n.BHasForumTopicGID() &&
          x.push(
            (0, Z.jsxs)(
              `div`,
              {
                className: N,
                children: [
                  (0, Z.jsx)(`input`, {
                    type: `checkbox`,
                    id: `del_cmt_post`,
                    name: `del_cmt_post`,
                    defaultChecked: u,
                    onChange: () => d(!u),
                  }),
                  (0, Z.jsx)(`label`, {
                    htmlFor: `del_cmt_post`,
                    children: I(`#EventDisplay_DeleteEvent_Comment`),
                  }),
                ],
              },
              `WantToDeleteCmtThread`,
            ),
          ));
      break;
    case `waiting`:
      ((b = I(`#EventDisplay_DeleteEvent_InProgress`)),
        x.push((0, Z.jsx)(oe, {}, `throbber`)));
      break;
    case `error`:
      ((b = I(`#EventDisplay_DeleteEvent_Error`)),
        x.push(
          (0, Z.jsx)(
            `div`,
            { className: P, children: c.strErrorMsg },
            `deleteerror_` + ++sn,
          ),
        ));
      break;
    case `failed_thread_delete`:
      ((b = I(`#EventDisplay_DeleteEvent_ForumTopicError`)),
        x.push(
          (0, Z.jsx)(
            `div`,
            { className: P, children: c.strErrorMsg },
            `deleteerror_` + ++sn,
          ),
        ),
        r &&
          (y = () => {
            (r?.(), t?.());
          }));
      break;
    case `success`:
      ((b = I(`#EventDisplay_DeleteEvent_Success`)),
        r &&
          (y = () => {
            (r?.(), t?.());
          }));
  }
  return (0, Z.jsx)(Ce, {
    strTitle: I(`#EventDisplay_DeleteEvent`),
    strDescription: b,
    onCancel: t,
    onOK: y,
    bAlertDialog: o != `confirmation`,
    bOKDisabled: o == `waiting`,
    bDestructiveWarning: o == `error`,
    children: x,
  });
}
function ln(e) {
  let { eventModel: t } = e,
    n = c(() => t.jsondata.sale_sections);
  return (0, X.useMemo)(
    () =>
      n?.some(
        (e) =>
          (e.section_type == `quiz` && e.quiz?.track_with_cozy_cottage_doors) ||
          e.section_type == `quest` ||
          e.section_type == `rewards`,
      ),
    [n],
  )
    ? (0, Z.jsx)(pn, { ...e })
    : null;
}
function un(e, t) {
  if (e && e.section_type == `rewards`) {
    let n = e.rewards?.reward_items?.filter((e) => e.item_bucket == t);
    if (n && n.length > 0)
      return n.map((e) => ({
        appid: e.appid,
        item_type: e.community_item_type,
        amount: `1`,
      }));
  }
  return [];
}
var dn = `Answered as: `;
function fn(e) {
  return typeof e == `string` ? e : ``;
}
function pn(e) {
  let { eventModel: t } = e,
    [n, i] = (0, X.useState)(!1),
    o = v(),
    s = r(),
    c = y();
  if (
    ((0, X.useEffect)(() => {
      m(s).then(() => i(!0));
    }, [s]),
    !n)
  )
    return null;
  let l = t.GetSaleSectionsByType(`quiz`),
    u = l.length > 0 ? l[0].quiz : void 0,
    d = u?.answer_categories ?? [],
    b = [],
    x = l.length > 0 ? l[0].unique_id : void 0,
    S =
      l.length == 1 &&
      (u?.quiz_type == `scenario` || u?.quiz_type == `branching`) &&
      d.length > 0;
  if (S)
    (b.push({ label: `State: Reset the Quiz`, data: -1 }),
      b.push(
        ...d.map((e) => ({
          label: dn + e.category_name,
          data: e.door_index ?? 0,
        })),
      ),
      b.push(
        ...d.map((e) => ({
          label: `Rewarded as: ` + e.category_name,
          data: e.door_index ?? 0,
        })),
      ));
  else
    for (let e = -1; e <= 7; ++e)
      b.push({ label: `Doors Opened ` + (e + 1), data: e });
  let C = t.GetSaleSectionsByType(`rewards`),
    w = C.length > 0 ? C[0] : void 0,
    T = w?.rewards?.reward_items ?? [];
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(`a`, {
        className: Y(j, E),
        onClick: (e) => {
          pe(
            (0, Z.jsx)(Ce, {
              strTitle: I(`#Dialog_AreYouSure`),
              strDescription: `Reload page after you hit OK; will not grant virtual reward items a second itme`,
              onOK: () => c(we.CLANACCOUNTID),
            }),
            me(e) ?? window,
          );
        },
        children: `Reset All Doors`,
      }),
      (0, Z.jsx)(L, {
        strDropDownClassName: Y(M),
        rgOptions: b,
        selectedOption: o,
        label: `Minigame States:`,
        onChange: (e) => {
          let t = [];
          if (S)
            a(() => {
              if ((_(s, -1), g(s, x), e.data != -1)) {
                let n = d.find((t) => t.door_index == e.data),
                  r = n?.category_id;
                (n &&
                  r !== void 0 &&
                  (u?.questions ?? [])
                    .filter((e) => (e.answers?.length ?? 0) > 0)
                    .forEach((e, t) => {
                      let n = e.answers ?? [],
                        i = n.findIndex((e) => e.category_ids?.includes(r));
                      (i < 0 && (i = 0),
                        p(s, x, t, n[i].category_ids),
                        h(s, x, t, n[i]));
                    }),
                  fn(e.label).startsWith(dn) ||
                    (f(s, 0, !0), f(s, e.data, !0), t.push(0), t.push(e.data)));
              }
            });
          else {
            for (let n = 0; n <= e.data; ++n) t.push(n);
            _(s, e.data);
          }
          let n = T[0]?.appid;
          if (w && n !== void 0 && e.data > -1 && !fn(e.label).startsWith(dn)) {
            let e = t.map((e) => un(w, e)).filter(Boolean),
              r = [];
            (e.forEach((e) => r.push(...e)), ee(s, n, r));
          }
        },
      }),
    ],
  });
}
function mn(e) {
  let {
      eventModel: t,
      partnerEventStore: n,
      addtionalAdminButtons: r,
      fnOnUpdateSaleDayIndex: i,
      bSupportsSticky: a = !1,
    } = e,
    [o, s] = X.useState(!1),
    l = c(() => hn(t)),
    [d, f] = X.useState(t ? t.GetDayIndexFromEventStart() : 0),
    [p, m, h] = c(() => [
      t.jsondata.bSaleEnabled,
      t.GID,
      t.clanSteamID.GetAccountID(),
    ]),
    { data: g } = T(h),
    _ = (e) => {
      n &&
        pe(
          (0, Z.jsx)(cn, {
            eventModel: t,
            onDeleteSuccessAndCloseDialog: () => s(!0),
            partnerEventStore: n,
          }),
          me(e) ?? window,
        );
    },
    v = u(),
    { creatorHome: y } = ce(h);
  if (o)
    return (0, Z.jsx)(k, { eventModel: t, route: D.k_eCommunityAdminPage });
  if (v) return (0, Z.jsx)(`span`, {});
  let b = [];
  if (l !== void 0)
    for (let e = 0; e <= l; ++e)
      b.push({ label: I(`#SalePage_Admin_SaleEventDay`, e + 1), data: e });
  let x = t.GetEventType() == 36;
  return (0, Z.jsx)(je, {
    eventModel: t,
    permissions: g,
    bIsCreatorHomeVisible: x && y?.GetLinkedEventGID() == t.GID,
    additionalButtons: r,
    onDeleteRequest: n && Oe() == `community` ? _ : void 0,
    saleDayControl:
      l !== void 0 &&
      b.length > 0 &&
      (0, Z.jsx)(L, {
        strDropDownClassName: `ZsXFGEgobIY-`,
        rgOptions: b,
        selectedOption: Math.min(l, d),
        onChange: (e) => {
          (f(e.data), i?.(e.data));
        },
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    promotionPlanLinks:
      !!(p && Ne(g)) &&
      m !== void 0 &&
      (0, Z.jsx)(vn, { clanAccountID: h, gidClanEvent: m }),
    testControls: (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(ln, { eventModel: t }),
        (0, Z.jsx)(gn, { eventModel: t }),
      ],
    }),
    bSupportsSticky: a,
  });
}
function hn(e) {
  let t;
  if (e?.BHasSaleEnabled()) {
    e.GetSaleSectionCount() > 0 &&
      e.GetSaleSections().forEach((e) => {
        b(e.section_type) &&
          !S(e) &&
          e.capsules.forEach((e) => {
            e.visibility_index !== void 0 &&
              (t === void 0 || t < e.visibility_index) &&
              (t = e.visibility_index);
          });
      });
    let n = e.jsondata.sale_num_headers ?? 0;
    n > 1 && (t === void 0 || t < n) && (t = n);
  }
  return t;
}
function gn(e) {
  let { eventModel: t } = e,
    n = c(() => t.jsondata.sale_sections),
    r = (0, X.useMemo)(
      () => n?.find((e) => e.section_type == `badge_progress`),
      [n],
    );
  return r && (r.badge_progress?.levels?.length ?? 0) > 0 && Te.is_support
    ? (0, Z.jsx)(_n, { section: r })
    : null;
}
function _n(e) {
  let { section: t } = e,
    n = l(t.badge_progress?.event_badgeid),
    r = c(() => t.badge_progress?.levels),
    i = Math.max(...(r ?? []).map((e) => e.level ?? 0));
  if (!n) return null;
  let a = [];
  for (let e = 0; e <= i; ++e) a.push({ label: `Level ` + e, data: e });
  return (0, Z.jsx)(L, {
    strDropDownClassName: Y(M, A),
    rgOptions: a,
    selectedOption: n.level,
    onChange: (e) =>
      d({ badgeid: t.badge_progress?.event_badgeid, level: e.data }),
  });
}
function vn(e) {
  let { clanAccountID: t, gidClanEvent: n } = e,
    r = on(t, n);
  return r
    ? (0, Z.jsx)(Z.Fragment, {
        children: r.map((e) =>
          (0, Z.jsx)(
            `a`,
            {
              href: `${B.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
              target: B.IN_CLIENT ? `` : `_blank`,
              rel: `noreferrer`,
              className: Y(j, E, A),
              children: I(`#EventDisplay_PromotionEditor`),
            },
            e,
          ),
        ),
      })
    : null;
}
export { mn as t };

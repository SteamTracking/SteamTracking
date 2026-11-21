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
import { Et as l } from "./chunk~6b8ddcaac8.js";
import { l as u, m as d, s as f } from "./chunk~f57d770d64.js";
import {
  Ct as p,
  S as m,
  at as h,
  bt as g,
  et as _,
  ot as v,
  st as y,
  vt as b,
  x,
  xt as S,
  yt as C,
} from "./chunk~2185942436.js";
import {
  A as w,
  Bt as T,
  M as ee,
  N as te,
  O as ne,
  P as re,
  Pt as ie,
  dt as ae,
  gt as oe,
  x as E,
} from "./chunk~cf3721cc1c.js";
import { n as D, r as O, s as k } from "./chunk~673650a653.js";
import "./chunk~8681f5c764.js";
import { t as se } from "./chunk~eefd71512b.js";
import { M as A, i as j, u as M } from "./chunk~2f8c67b4de.js";
import { u as N } from "./chunk~7b4b9eb713.js";
import { c as ce, r as le } from "./chunk~95ecbf576c.js";
import {
  $b as ue,
  Fb as P,
  Ga as de,
  Hn as fe,
  Hy as pe,
  In as me,
  Jb as he,
  Jr as ge,
  Nc as F,
  OS as _e,
  Ox as ve,
  Wu as ye,
  Yu as be,
  _x as I,
  al as xe,
  cx as Se,
  dS as L,
  fS as R,
  gS as z,
  gx as Ce,
  hS as B,
  kc as we,
  kx as V,
  lS as H,
  ll as Te,
  mS as U,
  nx as W,
  pS as G,
  rb as K,
  rr as q,
  sS as Ee,
  sx as De,
  uS as J,
  yx as Oe,
  zy as ke,
} from "./main.js";
async function Ae(e) {
  let {
      clanAccountID: t,
      forumType: n,
      forumGID: r,
      forumTopicGID: i,
      signal: a,
    } = e,
    o = W.COMMUNITY_BASE_URL + `forum/` + t + `/` + n + `/deletetopic/`;
  r != null && r != `` && (o += r + `/`);
  let s = new FormData();
  (s.append(`sessionid`, De()), s.append(`gidforumtopic`, i));
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
function je() {
  return o({ mutationFn: (e) => Ae(e) });
}
var Y = e(t(), 1),
  X = i();
function Me(e) {
  let {
      eventModel: t,
      permissions: n,
      bIsCreatorHomeVisible: r,
      additionalButtons: i,
      onDeleteRequest: a,
      saleDayControl: o,
      promotionPlanLinks: s,
      testControls: u,
      bSupportsSticky: f = !1,
    } = e,
    p = ue(),
    m = l(),
    [h, g, _, v] = c(() => [
      t.visibility_state,
      t.jsondata.bSaleEnabled,
      t.GID,
      t.clanSteamID.GetAccountID(),
    ]),
    [y, b] = Y.useState(f),
    { bVisible: x, ref: S } = Te();
  if (!(n?.can_edit || n?.support_user) || p) return (0, X.jsx)(`span`, {});
  let C = he(),
    T = C == `community`,
    ie = C == `store`,
    k = !!n.support_user,
    se = Pe(n),
    A = y && !x,
    M = t.GetEventType() == 36,
    N =
      (h == d.k_EEventStateVisible || h == d.k_EEventStateUnlisted) &&
      (!M || r),
    ce = h == d.k_EEventStateStaged;
  return (0, X.jsxs)(xe, {
    children: [
      (0, X.jsx)(`div`, { className: F(te, A && `FWx4hiffwLs-`) }),
      (0, X.jsxs)(`div`, {
        className: F({ [ne]: !0, [ae]: T, [oe]: A }),
        children: [
          (0, X.jsx)(`span`, {
            className: ee,
            children: P.Localize(`#EventDisplay_Admin_Title`),
          }),
          (0, X.jsxs)(`div`, {
            className: F(re, A && `FWx4hiffwLs-`),
            children: [
              i,
              i &&
                (0, X.jsx)(`span`, {
                  className: `CYRhg26l0dc-`,
                  children: ` `,
                }),
              (0, X.jsx)(O, {
                eventModel: t,
                route: D.k_eCommunityEdit,
                className: F(j, E),
                children: M
                  ? P.Localize(`#EventEditor_Edit_Page`)
                  : P.Localize(`#EventEditor_Edit`),
              }),
              a &&
                (0, X.jsx)(`span`, {
                  className: `yYL-OrX9PtQ- _09V7NXTmtlY-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: a,
                  onKeyDown: Ne(a),
                  children: P.Localize(`#EventDisplay_DeleteEvent`),
                }),
              !N &&
                (0, X.jsx)(Y.Fragment, {
                  children: (0, X.jsx)(O, {
                    eventModel: t,
                    route: D.k_eCommunityPublish,
                    className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                    children: P.Localize(
                      ce
                        ? `#EventEditor_Publish_VisibleNow`
                        : `#Button_Publish`,
                    ),
                  }),
                }),
              (0, X.jsx)(O, {
                eventModel: t,
                route: D.k_eCommunityAdminPage,
                className: F(j, E),
                children: P.Localize(`#EventDisplay_Events`),
              }),
              o,
              !!(g && m && !M) &&
                (0, X.jsx)(O, {
                  eventModel: t,
                  route: D.k_eStoreSalePage,
                  className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: P.Localize(`#EventDisplay_SalesPage`),
                }),
              !!(g && k && _) &&
                (0, X.jsx)(`a`, {
                  href:
                    W.STATS_BASE_URL +
                    `sales/details/?gid=` +
                    _ +
                    `&clanid=` +
                    v,
                  target: W.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: P.Localize(`#EventDisplay_StatsPage`),
                }),
              !!(g && k && _ && !M) &&
                (0, X.jsx)(`a`, {
                  href:
                    W.PARTNER_BASE_URL +
                    `promotion/invitationplanner/dashboard?saleclaneventgid=` +
                    _ +
                    `&saleclanaccountid=` +
                    v,
                  target: W.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: P.Localize(`#EventDisplay_InvitationPlannerPage`),
                }),
              s,
              !!(g && se && v == 41316928 && t.GetContentHubCategory()) &&
                (0, X.jsx)(`a`, {
                  href: `${W.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                  target: W.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: P.Localize(`#EventDisplay_CategoryEditor`),
                }),
              !!(N && (ie || (m && !T))) &&
                (0, X.jsx)(O, {
                  eventModel: t,
                  route: g ? D.k_eCommunityPreviewSale : D.k_eCommunityView,
                  className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: P.Localize(
                    g
                      ? `#EventDisplay_PreviewOnCommunity`
                      : `#EventDisplay_ViewOnCommunity`,
                  ),
                }),
              !!(N && T) &&
                (0, X.jsx)(O, {
                  eventModel: t,
                  route: D.k_eStoreView,
                  className: F(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: P.Localize(`#EventDisplay_ViewOnStore`),
                }),
              u,
              A &&
                (0, X.jsx)(`div`, {
                  className: `ZlbFAmu86SM-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => b(!1),
                  onKeyDown: Ne(() => b(!1)),
                  children: (0, X.jsx)(ge, {
                    toolTipContent: P.Localize(
                      `#EventDisplay_Admin_Close_ttip`,
                    ),
                    children: (0, X.jsx)(we, {}),
                  }),
                }),
              !y &&
                f &&
                (0, X.jsx)(`div`, {
                  className: `ZlbFAmu86SM-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => b(!0),
                  onKeyDown: Ne(() => b(!0)),
                  children: (0, X.jsx)(ge, {
                    toolTipContent: P.Localize(
                      `#EventDisplay_Admin_Reopen_ttip`,
                    ),
                    children: (0, X.jsx)(de, { angle: 0 }),
                  }),
                }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(`div`, { className: w, ref: S }),
    ],
  });
}
function Ne(e) {
  return (t) => {
    (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e(t));
  };
}
function Pe(e) {
  return !!(e?.support_user && e?.valve_admin);
}
var Z = e(n(), 1),
  Q = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            admin_jsondata: { n: 2, br: R.readString, bw: z.writeString },
            partner_jsondata: { n: 3, br: R.readString, bw: z.writeString },
            input_jsondata: { n: 4, br: R.readString, bw: z.writeString },
            partner_readonly_jsondata: {
              n: 10,
              br: R.readString,
              bw: z.writeString,
            },
            partner_writable_jsondata: {
              n: 11,
              br: R.readString,
              bw: z.writeString,
            },
            assets_readonly_jsondata: {
              n: 12,
              br: R.readString,
              bw: z.writeString,
            },
            assets_writable_jsondata: {
              n: 13,
              br: R.readString,
              bw: z.writeString,
            },
            rtime32_start_time: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            rtime32_end_time: { n: 6, br: R.readUint32, bw: z.writeUint32 },
            partner_id: { n: 7, br: R.readUint32, bw: z.writeUint32 },
            input_access_key: { n: 8, br: R.readString, bw: z.writeString },
            last_update_time: { n: 9, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan`;
    }
  },
  Fe = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { plan: { n: 1, c: Q } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_CreatePlan_Request`;
    }
  },
  Ie = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            input_access_key: { n: 2, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_CreatePlan_Response`;
    }
  },
  Le = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            plan: { n: 1, c: Q },
            promotion_id: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_UpdatePlan_Request`;
    }
  },
  Re = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_UpdatePlan_Response`;
    }
  },
  ze = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlan_Request`;
    }
  },
  Be = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { plan: { n: 1, c: Q } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlan_Response`;
    }
  },
  Ve = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllActivePlan_Request`;
    }
  },
  He = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plan: { n: 1, c: Q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllActivePlan_Response`;
    }
  },
  Ue = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.oldest_rtime || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            oldest_rtime: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            newest_rtime: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            promotion_types: {
              n: 3,
              r: !0,
              q: !0,
              br: R.readString,
              bw: z.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanCompletedInDateRange_Request`;
    }
  },
  We = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plans: { n: 1, c: Q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanCompletedInDateRange_Response`;
    }
  },
  Ge = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: R.readEnum, bw: z.writeEnum },
            gid: { n: 2, br: R.readFixed64String, bw: z.writeFixed64String },
            promotion_planid: {
              n: 3,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromoAssociation`;
    }
  },
  Ke = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requested || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requested: { n: 1, c: Ge, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByAssociationID_Request`;
    }
  },
  qe = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matching || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matching: { n: 1, c: Ge, r: !0, q: !0 },
            plans: { n: 2, c: Q, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByAssociationID_Response`;
    }
  },
  Je = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            upto_rtime: { n: 2, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlansUpdatedSince_Request`;
    }
  },
  Ye = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            plans: { n: 1, c: Q, r: !0, q: !0 },
            deleted_plan_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: R.readFixed64String,
              pbr: R.readPackedFixed64String,
              bw: z.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlansUpdatedSince_Response`;
    }
  },
  Xe = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_DeletePlan_Request`;
    }
  },
  Ze = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_DeletePlan_Response`;
    }
  },
  Qe = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: R.readString, bw: z.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SearchPlan_Request`;
    }
  },
  $e = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plan: { n: 1, c: Q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SearchPlan_Response`;
    }
  },
  et = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
              br: R.readUint32,
              pbr: R.readPackedUint32,
              bw: z.writeRepeatedUint32,
            },
            exclude_sales: { n: 2, br: R.readBool, bw: z.writeBool },
            exclude_direct_featuring: { n: 3, br: R.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllPlansForApps_Request`;
    }
  },
  tt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            plans: { n: 1, c: Q, r: !0, q: !0 },
            apps_included_in_sales: { n: 2, c: nt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllPlansForApps_Response`;
    }
  },
  nt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
              br: R.readUint32,
              pbr: R.readPackedUint32,
              bw: z.writeRepeatedUint32,
            },
            clan_event_gid: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales`;
    }
  },
  rt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.input_access_key || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            input_access_key: { n: 1, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByInputAccessKey_Request`;
    }
  },
  it = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plan || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { plan: { n: 1, c: Q } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPlanByInputAccessKey_Response`;
    }
  },
  at = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            value: { n: 2, br: R.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_MarkLocalizationAssetComplete_Request`;
    }
  },
  ot = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_MarkLocalizationAssetComplete_Response`;
    }
  },
  st = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            notification_type: { n: 2, br: R.readEnum, bw: z.writeEnum },
            only_explicit_email_addresses: {
              n: 3,
              br: R.readBool,
              bw: z.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SendNotification_Request`;
    }
  },
  ct = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SendNotification_Response`;
    }
  },
  lt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            notification_id: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSentNotification_Request`;
    }
  },
  ut = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: dt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSentNotification_Response`;
    }
  },
  dt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            tracking_id: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            email_address: { n: 3, br: R.readString, bw: z.writeString },
            accountid: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            status: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            type: { n: 6, br: R.readEnum, bw: z.writeEnum },
            rt_send_time: { n: 7, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionNotificationResults`;
    }
  },
  ft = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            notification_id: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_ResendNotification_Request`;
    }
  },
  pt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_ResendNotification_Response`;
    }
  },
  mt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotion_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            add: { n: 2, br: R.readBool, bw: z.writeBool },
            email_address: { n: 3, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SetPromotionEmailTarget_Request`;
    }
  },
  ht = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_SetPromotionEmailTarget_Response`;
    }
  },
  gt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            rtime_sale_start: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            rtime_sale_end: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            daily_deal_gid: {
              n: 5,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            promotion_gid: {
              n: 6,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            create_asset_request: { n: 7, br: R.readBool, bw: z.writeBool },
            partner_id: { n: 8, br: R.readUint32, bw: z.writeUint32 },
            advertising_appid: { n: 9, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_CreateSalePageForPromo_Request`;
    }
  },
  _t = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            daily_deal_gid: {
              n: 3,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            promotion_gid: {
              n: 4,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            asset_request_gid: {
              n: 5,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            advertising_appid: { n: 6, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_CreateSalePageForPromo_Response`;
    }
  },
  $ = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_gross_sales_usdx100 || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            total_gross_returns_usdx100: {
              n: 2,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            total_net_tax_usdx100: {
              n: 3,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            steam_gross_sales_usdx100: {
              n: 4,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            steam_gross_returns_usdx100: {
              n: 5,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            steam_net_tax_usdx100: {
              n: 6,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            in_game_gross_sales_usdx100: {
              n: 7,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            in_game_gross_returns_usdx100: {
              n: 8,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            in_game_net_tax_usdx100: {
              n: 9,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            total_net_sales_usdx100: {
              n: 10,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            steam_net_sales_usdx100: {
              n: 11,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            in_game_net_sales_usdx100: {
              n: 12,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            steam_gross_units_sold: {
              n: 13,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            steam_gross_units_returned: {
              n: 14,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
            gross_units_activated: {
              n: 15,
              br: R.readInt64String,
              bw: z.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_SummarySaleResult`;
    }
  },
  vt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotionids || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
              br: R.readUint64String,
              pbr: R.readPackedUint64String,
              bw: z.writeRepeatedUint64String,
            },
            partnerid: { n: 2, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Request`;
    }
  },
  yt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sales || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sales: { n: 1, c: St, r: !0, q: !0 },
            partial_access: { n: 2, br: R.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response`;
    }
  },
  bt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_date || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            date: { n: 2, br: R.readString, bw: z.writeString },
            summary_sales: { n: 3, c: $ },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales`;
    }
  },
  xt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            packageid: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            secondary_product_id: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            summary_sales: { n: 4, c: $ },
            daily_promo_sales: { n: 5, c: bt, r: !0, q: !0 },
            package_billing_type: { n: 6, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product`;
    }
  },
  St = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotionid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [2, 4], null));
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
              br: R.readUint64String,
              bw: z.writeUint64String,
            },
            daily_promo_sales: { n: 2, c: bt, r: !0, q: !0 },
            summary_sales: { n: 3, c: $ },
            products: { n: 4, c: xt, r: !0, q: !0 },
            products_missing_user_rights: {
              n: 5,
              br: R.readUint32,
              bw: z.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData`;
    }
  },
  Ct = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.request_list || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPromotionPlanForSalePages_Request`;
    }
  },
  wt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            gid_clan_event: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage`;
    }
  },
  Tt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.plans || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { plans: { n: 1, c: Q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetPromotionPlanForSalePages_Response`;
    }
  },
  Et = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtstart || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtstart: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            rtend: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            include_packages: { n: 3, br: R.readBool, bw: z.writeBool },
            filter_modified_sales_rank: {
              n: 4,
              d: !0,
              br: R.readBool,
              bw: z.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Request`;
    }
  },
  Dt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_details || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1, 2], null));
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
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Response`;
    }
  },
  Ot = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            discount_id: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            discount_name: { n: 3, br: R.readString, bw: z.writeString },
            discount_percentage: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            original_price_usd: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            discount_price_usd: { n: 6, br: R.readUint32, bw: z.writeUint32 },
            rtime_discount_start: { n: 7, br: R.readUint32, bw: z.writeUint32 },
            rtime_discount_end: { n: 8, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo`;
    }
  },
  kt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            cheapest_package_id: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            cheapest_discount_id: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            cheapest_discount_name: {
              n: 5,
              br: R.readString,
              bw: z.writeString,
            },
            package_original_price_usd: {
              n: 6,
              br: R.readUint32,
              bw: z.writeUint32,
            },
            discounted_price_usd: { n: 7, br: R.readUint32, bw: z.writeUint32 },
            discount_percentage: { n: 8, br: R.readUint32, bw: z.writeUint32 },
            rtime_discount_start: { n: 9, br: R.readUint32, bw: z.writeUint32 },
            rtime_discount_end: { n: 10, br: R.readUint32, bw: z.writeUint32 },
            num_discounted_packages: {
              n: 11,
              br: R.readUint32,
              bw: z.writeUint32,
            },
            modified_sales_rank: { n: 12, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo`;
    }
  },
  At = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            include_published: { n: 2, br: R.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Request`;
    }
  },
  jt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clans || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Response`;
    }
  },
  Mt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            gid_clan_event: {
              n: 2,
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            name: { n: 3, br: R.readString, bw: z.writeString },
            published: { n: 4, br: R.readBool, bw: z.writeBool },
            start_time: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            end_time: { n: 6, br: R.readUint32, bw: z.writeUint32 },
            external_sale_event_type: {
              n: 7,
              br: R.readUint32,
              bw: z.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage`;
    }
  },
  Nt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            clan_name: { n: 2, br: R.readString, bw: z.writeString },
            is_creator_home: { n: 3, br: R.readBool, bw: z.writeBool },
            sale_pages: { n: 4, c: Mt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan`;
    }
  },
  Pt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partner_id || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partner_id: { n: 1, br: R.readUint32, bw: z.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAdvertisingAppsForPartner_Request`;
    }
  },
  Ft = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.advertising_apps || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAdvertisingAppsForPartner_Response`;
    }
  },
  It = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            app_name: { n: 2, br: R.readString, bw: z.writeString },
            itemid: { n: 3, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app`;
    }
  },
  Lt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.spotlight_due_date || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            spotlight_due_date: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            marketing_message_due_date: {
              n: 2,
              br: R.readUint32,
              bw: z.writeUint32,
            },
            discount_event_due_date: {
              n: 3,
              br: R.readUint32,
              bw: z.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionRequirements`;
    }
  },
  Rt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [16], null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            appid: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            invite_account: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            rtinvitetime: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            rtexpiretime: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            type: { n: 6, br: R.readEnum, bw: z.writeEnum },
            accept_account: { n: 7, br: R.readUint32, bw: z.writeUint32 },
            rtaccepttime: { n: 8, br: R.readUint32, bw: z.writeUint32 },
            rtdatechosen: { n: 9, br: R.readUint32, bw: z.writeUint32 },
            discount_eventid: { n: 10, br: R.readUint32, bw: z.writeUint32 },
            packageid: { n: 11, br: R.readUint32, bw: z.writeUint32 },
            bundleid: { n: 12, br: R.readUint32, bw: z.writeUint32 },
            primary_partnerid: { n: 13, br: R.readUint32, bw: z.writeUint32 },
            deadlines: { n: 14, c: Lt },
            notify_partner: { n: 15, br: R.readBool, bw: z.writeBool },
            additional_email: {
              n: 16,
              r: !0,
              q: !0,
              br: R.readString,
              bw: z.writeRepeatedString,
            },
            promotion_id: { n: 17, br: R.readString, bw: z.writeString },
            cancelled: { n: 18, br: R.readBool, bw: z.writeBool },
            rtime32_cancel_time: { n: 19, br: R.readUint32, bw: z.writeUint32 },
            require_sale_page: { n: 20, br: R.readBool, bw: z.writeBool },
            require_sale_page_type: { n: 21, br: R.readEnum, bw: z.writeEnum },
            admin_notes: { n: 22, br: R.readString, bw: z.writeString },
            partner_notes: { n: 23, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvitation`;
    }
  },
  zt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite: { n: 1, c: Rt },
            queue_email_to_send: { n: 2, br: R.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_SetInvite_Request`;
    }
  },
  Bt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_SetInvite_Response`;
    }
  },
  Vt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            appid: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            packageid: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            bundleid: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            partnerid: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            promotion_id: { n: 6, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetInvite_Request`;
    }
  },
  Ht = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetInvite_Response`;
    }
  },
  Ut = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            only_notify_additional_email: {
              n: 2,
              br: R.readBool,
              bw: z.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_ResendEmailInvite_Request`;
    }
  },
  Wt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_ResendEmailInvite_Response`;
    }
  },
  Gt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetEmailTargets_Request`;
    }
  },
  Kt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            partnerid: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            email_address: { n: 3, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInviteReceive`;
    }
  },
  qt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.targets || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
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
              br: R.readString,
              bw: z.writeRepeatedString,
            },
            valve_account_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: R.readUint32,
              pbr: R.readPackedUint32,
              bw: z.writeRepeatedUint32,
            },
            operation_email: { n: 4, br: R.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_GetEmailTargets_Response`;
    }
  },
  Jt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
            rtdatechosen: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            discount_days: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            discount_info: { n: 4, br: R.readString, bw: z.writeString },
            skip_discount_event: { n: 5, br: R.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_AcceptInvite_Request`;
    }
  },
  Yt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: R.readFixed64String, bw: z.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_AcceptInvite_Response`;
    }
  },
  Xt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.inviteid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: R.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_CancelInvite_Request`;
    }
  },
  Zt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionEventInvites_CancelInvite_Response`;
    }
  },
  Qt = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_in_name || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_in_name: { n: 1, br: R.readString, bw: z.writeString },
            partner_id: { n: 2, br: R.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionStats_GetOptInDemoStats_Request`;
    }
  },
  $t = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, [1, 2], null));
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
              br: R.readUint32,
              pbr: R.readPackedUint32,
              bw: z.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionStats_GetOptInDemoStats_Response`;
    }
  },
  en = class e extends Z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || H(e.M()),
        Z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: R.readUint32, bw: z.writeUint32 },
            demo_appid: { n: 2, br: R.readUint32, bw: z.writeUint32 },
            rt_start_time: { n: 3, br: R.readUint32, bw: z.writeUint32 },
            rt_end_time: { n: 4, br: R.readUint32, bw: z.writeUint32 },
            demo_player_count: { n: 5, br: R.readUint32, bw: z.writeUint32 },
            wishlist_count: { n: 6, br: R.readUint32, bw: z.writeUint32 },
            player_wishlist_count: {
              n: 7,
              br: R.readUint32,
              bw: z.writeUint32,
            },
            rt_last_update_time: { n: 9, br: R.readUint32, bw: z.writeUint32 },
            fest_page_views: { n: 10, br: R.readUint32, bw: z.writeUint32 },
            fest_period_page_views: {
              n: 11,
              br: R.readUint32,
              bw: z.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= G(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return L(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return J(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPromotionStats_GetOptInDemoStats_Response_PerAppStats`;
    }
  },
  tn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionPlanning.CreatePlan#1`, V(Fe, t, n), Ie, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreatePlan = t;
  function n(e, t, n) {
    return e.SendMsg(`PromotionPlanning.UpdatePlan#1`, V(Le, t, n), Re, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdatePlan = n;
  function r(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.UpdatePlanPartnerInfo#1`,
      V(Le, t, n),
      Re,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdatePlanPartnerInfo = r;
  function i(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.UpdatePlanInputData#1`,
      V(Le, t, n),
      Re,
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.UpdatePlanInputData = i;
  function a(e, t, n) {
    return e.SendMsg(`PromotionPlanning.DeletePlan#1`, V(Xe, t, n), Ze, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeletePlan = a;
  function o(e, t, n) {
    return e.SendMsg(`PromotionPlanning.GetPlan#1`, V(ze, t, n), Be, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPlan = o;
  function s(e, t, n) {
    return e.SendMsg(`PromotionPlanning.GetAllActivePlan#1`, V(Ve, t, n), He, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetAllActivePlan = s;
  function c(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanCompletedInDateRange#1`,
      V(Ue, t, n),
      We,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlanCompletedInDateRange = c;
  function l(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanByAssociationID#1`,
      V(Ke, t, n),
      qe,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlanByAssociationID = l;
  function u(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlansUpdatedSince#1`,
      V(Je, t, n),
      Ye,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlansUpdatedSince = u;
  function d(e, t, n) {
    return e.SendMsg(`PromotionPlanning.SearchPlan#1`, V(Qe, t, n), $e, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.SearchPlan = d;
  function f(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetAllPlansForApps#1`,
      V(et, t, n),
      tt,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetAllPlansForApps = f;
  function p(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanByInputAccessKey#1`,
      V(rt, t, n),
      it,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPlanByInputAccessKey = p;
  function m(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.MarkLocalizationAssetComplete#1`,
      V(at, t, n),
      ot,
      { ePrivilege: 1 },
    );
  }
  e.MarkLocalizationAssetComplete = m;
  function h(e, t, n) {
    return e.SendMsg(`PromotionPlanning.SendNotification#1`, V(st, t, n), ct, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.SendNotification = h;
  function g(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetSentNotification#1`,
      V(lt, t, n),
      ut,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetSentNotification = g;
  function _(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.ResendNotification#1`,
      V(ft, t, n),
      pt,
      { ePrivilege: 1 },
    );
  }
  e.ResendNotification = _;
  function v(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.SetPromotionEmailTarget#1`,
      V(mt, t, n),
      ht,
      { ePrivilege: 1 },
    );
  }
  e.SetPromotionEmailTarget = v;
  function y(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPromotionPlanSalesDaily#1`,
      V(vt, t, n),
      yt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPromotionPlanSalesDaily = y;
  function b(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPromotionPlanForSalePages#1`,
      V(Ct, t, n),
      Tt,
      {
        bConstMethod: !0,
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`, `community`, `store`],
      },
    );
  }
  e.GetPromotionPlanForSalePages = b;
  function x(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.CreateSalePageForPromo#1`,
      V(gt, t, n),
      _t,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreateSalePageForPromo = x;
  function S(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetUpcomingScheduledDiscounts#1`,
      V(Et, t, n),
      Dt,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetUpcomingScheduledDiscounts = S;
  function C(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetSalePageCandidatesForPromo#1`,
      V(At, t, n),
      jt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetSalePageCandidatesForPromo = C;
  function w(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetAdvertisingAppsForPartner#1`,
      V(Pt, t, n),
      Ft,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetAdvertisingAppsForPartner = w;
})((tn ||= {}));
var nn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.SetInvite#1`, V(zt, t, n), Bt, {
      ePrivilege: 4,
    });
  }
  e.SetInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.GetInvite#1`, V(Vt, t, n), Ht, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvite = n;
  function r(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.AcceptInvite#1`, V(Jt, t, n), Yt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.AcceptInvite = r;
  function i(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.CancelInvite#1`, V(Xt, t, n), Zt, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CancelInvite = i;
  function a(e, t, n) {
    return e.SendMsg(
      `PromotionEventInvites.ResendEmailInvite#1`,
      V(Ut, t, n),
      Wt,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ResendEmailInvite = a;
  function o(e, t, n) {
    return e.SendMsg(
      `PromotionEventInvites.GetEmailTargets#1`,
      V(Gt, t, n),
      qt,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetEmailTargets = o;
})((nn ||= {}));
var rn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionStats.GetOptInDemoStats#1`, V(Qt, t, n), $t, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetOptInDemoStats = t;
})((rn ||= {}));
function an() {
  let e = Se(`promotion_operation_token`, `application_config`);
  return e
    ? ke(new pe(I.WEBAPI_BASE_URL, e)).GetServiceTransport()
    : (Ee(!1, `GetPromotionWriteAccess: promotion operation token is missing`),
      null);
}
function on(e, t) {
  let [n] = (0, Y.useState)(() => an());
  return s({
    queryKey: [`usePromotionPlanBySalePage`, t],
    queryFn: async () => {
      if (!n) return null;
      let r = ve.Init(Ct),
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
    [o, s] = (0, Y.useState)(i ? `waiting` : `confirmation`),
    [c, l] = (0, Y.useState)({}),
    [u, d] = (0, Y.useState)(!1),
    f = (0, Y.useRef)(void 0),
    p = (0, Y.useMemo)(() => new AbortController(), []);
  Y.useEffect(() => () => p.abort(), [p]);
  let { mutate: m } = je(),
    h = (0, Y.useCallback)(() => {
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
                (l(be(e)), s(`failed_thread_delete`));
              },
            },
          )
        : s(`success`);
    }, [a, u, m, p]),
    g = (0, Y.useCallback)((e) => {
      (l(be(e)), s(`error`));
    }, []),
    _ = (0, Y.useCallback)(() => {
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
    v = (0, Y.useRef)(!1);
  Y.useEffect(() => {
    i && !v.current && ((v.current = !0), _());
  }, [i, _]);
  let y = t,
    b = ``,
    x = [];
  switch (o) {
    case `confirmation`:
      let e = n.GetNameWithFallback(_e(I.LANGUAGE)),
        i = n.BIsVisibleEvent()
          ? `#EventDisplay_AreYouSure_Visible`
          : `#EventDisplay_AreYouSure`;
      ((b = K(i, e ?? ``)),
        (y = _),
        n.BHasForumTopicGID() &&
          x.push(
            (0, X.jsxs)(
              `div`,
              {
                className: ce,
                children: [
                  (0, X.jsx)(`input`, {
                    type: `checkbox`,
                    id: `del_cmt_post`,
                    name: `del_cmt_post`,
                    defaultChecked: u,
                    onChange: () => d(!u),
                  }),
                  (0, X.jsx)(`label`, {
                    htmlFor: `del_cmt_post`,
                    children: K(`#EventDisplay_DeleteEvent_Comment`),
                  }),
                ],
              },
              `WantToDeleteCmtThread`,
            ),
          ));
      break;
    case `waiting`:
      ((b = K(`#EventDisplay_DeleteEvent_InProgress`)),
        x.push((0, X.jsx)(se, {}, `throbber`)));
      break;
    case `error`:
      ((b = K(`#EventDisplay_DeleteEvent_Error`)),
        x.push(
          (0, X.jsx)(
            `div`,
            { className: le, children: c.strErrorMsg },
            `deleteerror_` + ++sn,
          ),
        ));
      break;
    case `failed_thread_delete`:
      ((b = K(`#EventDisplay_DeleteEvent_ForumTopicError`)),
        x.push(
          (0, X.jsx)(
            `div`,
            { className: le, children: c.strErrorMsg },
            `deleteerror_` + ++sn,
          ),
        ),
        r &&
          (y = () => {
            (r?.(), t?.());
          }));
      break;
    case `success`:
      ((b = K(`#EventDisplay_DeleteEvent_Success`)),
        r &&
          (y = () => {
            (r?.(), t?.());
          }));
  }
  return (0, X.jsx)(me, {
    strTitle: K(`#EventDisplay_DeleteEvent`),
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
  return (0, Y.useMemo)(
    () =>
      n?.some(
        (e) =>
          (e.section_type == `quiz` && e.quiz?.track_with_cozy_cottage_doors) ||
          e.section_type == `quest` ||
          e.section_type == `rewards`,
      ),
    [n],
  )
    ? (0, X.jsx)(pn, { ...e })
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
    [n, i] = (0, Y.useState)(!1),
    o = p(),
    s = r(),
    c = S();
  if (
    ((0, Y.useEffect)(() => {
      b(s).then(() => i(!0));
    }, [s]),
    !n)
  )
    return null;
  let l = t.GetSaleSectionsByType(`quiz`),
    u = l.length > 0 ? l[0].quiz : void 0,
    d = u?.answer_categories ?? [],
    f = [],
    m = l.length > 0 ? l[0].unique_id : void 0,
    _ =
      l.length == 1 &&
      (u?.quiz_type == `scenario` || u?.quiz_type == `branching`) &&
      d.length > 0;
  if (_)
    (f.push({ label: `State: Reset the Quiz`, data: -1 }),
      f.push(
        ...d.map((e) => ({
          label: dn + e.category_name,
          data: e.door_index ?? 0,
        })),
      ),
      f.push(
        ...d.map((e) => ({
          label: `Rewarded as: ` + e.category_name,
          data: e.door_index ?? 0,
        })),
      ));
  else
    for (let e = -1; e <= 7; ++e)
      f.push({ label: `Doors Opened ` + (e + 1), data: e });
  let x = t.GetSaleSectionsByType(`rewards`),
    w = x.length > 0 ? x[0] : void 0,
    T = w?.rewards?.reward_items ?? [];
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`a`, {
        className: F(j, E),
        onClick: (e) => {
          fe(
            (0, X.jsx)(me, {
              strTitle: K(`#Dialog_AreYouSure`),
              strDescription: `Reload page after you hit OK; will not grant virtual reward items a second itme`,
              onOK: () => c(Ce.CLANACCOUNTID),
            }),
            ye(e) ?? window,
          );
        },
        children: `Reset All Doors`,
      }),
      (0, X.jsx)(q, {
        strDropDownClassName: F(M),
        rgOptions: f,
        selectedOption: o,
        label: `Minigame States:`,
        onChange: (e) => {
          let t = [];
          if (_)
            a(() => {
              if ((g(s, -1), h(s, m), e.data != -1)) {
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
                        y(s, m, t, n[i].category_ids),
                        v(s, m, t, n[i]));
                    }),
                  fn(e.label).startsWith(dn) ||
                    (C(s, 0, !0), C(s, e.data, !0), t.push(0), t.push(e.data)));
              }
            });
          else {
            for (let n = 0; n <= e.data; ++n) t.push(n);
            g(s, e.data);
          }
          let n = T[0]?.appid;
          if (w && n !== void 0 && e.data > -1 && !fn(e.label).startsWith(dn)) {
            let e = t.map((e) => un(w, e)).filter(Boolean),
              r = [];
            (e.forEach((e) => r.push(...e)), ie(s, n, r));
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
    [o, s] = Y.useState(!1),
    l = c(() => hn(t)),
    [u, d] = Y.useState(t ? t.GetDayIndexFromEventStart() : 0),
    [f, p, m] = c(() => [
      t.jsondata.bSaleEnabled,
      t.GID,
      t.clanSteamID.GetAccountID(),
    ]),
    { data: h } = T(m),
    g = (e) => {
      n &&
        fe(
          (0, X.jsx)(cn, {
            eventModel: t,
            onDeleteSuccessAndCloseDialog: () => s(!0),
            partnerEventStore: n,
          }),
          ye(e) ?? window,
        );
    },
    v = _(),
    { creatorHome: y } = N(m);
  if (o)
    return (0, X.jsx)(k, { eventModel: t, route: D.k_eCommunityAdminPage });
  if (v) return (0, X.jsx)(`span`, {});
  let b = [];
  if (l !== void 0)
    for (let e = 0; e <= l; ++e)
      b.push({ label: K(`#SalePage_Admin_SaleEventDay`, e + 1), data: e });
  let x = t.GetEventType() == 36;
  return (0, X.jsx)(Me, {
    eventModel: t,
    permissions: h,
    bIsCreatorHomeVisible: x && y?.GetLinkedEventGID() == t.GID,
    additionalButtons: r,
    onDeleteRequest: n && he() == `community` ? g : void 0,
    saleDayControl:
      l !== void 0 &&
      b.length > 0 &&
      (0, X.jsx)(q, {
        strDropDownClassName: `ZsXFGEgobIY-`,
        rgOptions: b,
        selectedOption: Math.min(l, u),
        onChange: (e) => {
          (d(e.data), i?.(e.data));
        },
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
      }),
    promotionPlanLinks:
      !!(f && Pe(h)) &&
      p !== void 0 &&
      (0, X.jsx)(vn, { clanAccountID: m, gidClanEvent: p }),
    testControls: (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(ln, { eventModel: t }),
        (0, X.jsx)(gn, { eventModel: t }),
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
        u(e.section_type) &&
          !f(e) &&
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
    r = (0, Y.useMemo)(
      () => n?.find((e) => e.section_type == `badge_progress`),
      [n],
    );
  return r && (r.badge_progress?.levels?.length ?? 0) > 0 && Oe.is_support
    ? (0, X.jsx)(_n, { section: r })
    : null;
}
function _n(e) {
  let { section: t } = e,
    n = m(t.badge_progress?.event_badgeid),
    r = c(() => t.badge_progress?.levels),
    i = Math.max(...(r ?? []).map((e) => e.level ?? 0));
  if (!n) return null;
  let a = [];
  for (let e = 0; e <= i; ++e) a.push({ label: `Level ` + e, data: e });
  return (0, X.jsx)(q, {
    strDropDownClassName: F(M, A),
    rgOptions: a,
    selectedOption: n.level,
    onChange: (e) =>
      x({ badgeid: t.badge_progress?.event_badgeid, level: e.data }),
  });
}
function vn(e) {
  let { clanAccountID: t, gidClanEvent: n } = e,
    r = on(t, n);
  return r
    ? (0, X.jsx)(X.Fragment, {
        children: r.map((e) =>
          (0, X.jsx)(
            `a`,
            {
              href: `${I.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
              target: I.IN_CLIENT ? `` : `_blank`,
              rel: `noreferrer`,
              className: F(j, E, A),
              children: K(`#EventDisplay_PromotionEditor`),
            },
            e,
          ),
        ),
      })
    : null;
}
export { mn as t };

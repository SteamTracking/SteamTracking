/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  Lt as t,
  Pt as n,
  dt as r,
  ft as i,
  jt as a,
  ot as o,
  st as s,
  u as c,
} from "./libraries.js";
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
} from "./salesectionfactory.js";
import { h as b, l as x, s as S } from "./partnerevent.js";
import {
  At as C,
  C as w,
  D as T,
  O as ee,
  T as te,
  dt as ne,
  g as E,
  k as re,
  ot as ie,
  wt as ae,
} from "./apppartnereventspage.js";
import { n as D, r as O, s as k } from "./eventlink.js";
import "./modals.js";
import { t as oe } from "./throbber.js";
import { N as A, i as j, l as M } from "./partnereventshared.module.js";
import { c as N, r as P } from "./simplesuccesserror.js";
import { u as se } from "./creatorhomestore.js";
import { i as ce } from "./partnereventeditorcontext.js";
import {
  $x as F,
  Au as le,
  En as ue,
  Fu as de,
  Hb as I,
  Jb as fe,
  Jc as pe,
  Lr as me,
  Mn as he,
  Oy as ge,
  Pa as _e,
  Pb as ve,
  Qx as L,
  Sc as R,
  Ty as ye,
  Uy as z,
  Xx as B,
  Yx as V,
  Zc as be,
  Zx as H,
  ax as xe,
  eS as U,
  hx as W,
  mS as Se,
  mx as Ce,
  nS as G,
  nx as we,
  qb as Te,
  qn as K,
  qx as Ee,
  rx as q,
  tS as J,
  vc as De,
  xb as Y,
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
    o = I.COMMUNITY_BASE_URL + `forum/` + t + `/` + n + `/deletetopic/`;
  r != null && r != `` && (o += r + `/`);
  let s = new FormData();
  (s.append(`sessionid`, Te()), s.append(`gidforumtopic`, i));
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
    d = Oe(),
    f = ce(),
    [p, m, h, g] = c(() => [
      t.visibility_state,
      t.jsondata.bSaleEnabled,
      t.GID,
      t.clanSteamID.GetAccountID(),
    ]),
    [_, v] = X.useState(u),
    { bVisible: y, ref: x } = be();
  if (!(n?.can_edit || n?.support_user) || d) return (0, Z.jsx)(`span`, {});
  let S = ve(),
    C = S == `community`,
    ae = S == `store`,
    k = !!n.support_user,
    oe = Ne(n),
    A = _ && !y,
    M = t.GetEventType() == 36,
    N =
      (p == b.k_EEventStateVisible || p == b.k_EEventStateUnlisted) &&
      (!M || r),
    P = p == b.k_EEventStateStaged;
  return (0, Z.jsxs)(pe, {
    children: [
      (0, Z.jsx)(`div`, { className: R(ee, A && `FWx4hiffwLs-`) }),
      (0, Z.jsxs)(`div`, {
        className: R({ [w]: !0, [ie]: C, [ne]: A }),
        children: [
          (0, Z.jsx)(`span`, {
            className: T,
            children: Y.Localize(`#EventDisplay_Admin_Title`),
          }),
          (0, Z.jsxs)(`div`, {
            className: R(re, A && `FWx4hiffwLs-`),
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
                className: R(j, E),
                children: M
                  ? Y.Localize(`#EventEditor_Edit_Page`)
                  : Y.Localize(`#EventEditor_Edit`),
              }),
              a &&
                (0, Z.jsx)(`span`, {
                  className: `yYL-OrX9PtQ- _09V7NXTmtlY-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: a,
                  onKeyDown: Me(a),
                  children: Y.Localize(`#EventDisplay_DeleteEvent`),
                }),
              !N &&
                (0, Z.jsx)(X.Fragment, {
                  children: (0, Z.jsx)(O, {
                    eventModel: t,
                    route: D.k_eCommunityPublish,
                    className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                    children: Y.Localize(
                      P ? `#EventEditor_Publish_VisibleNow` : `#Button_Publish`,
                    ),
                  }),
                }),
              (0, Z.jsx)(O, {
                eventModel: t,
                route: D.k_eCommunityAdminPage,
                className: R(j, E),
                children: Y.Localize(`#EventDisplay_Events`),
              }),
              o,
              !!(m && f && !M) &&
                (0, Z.jsx)(O, {
                  eventModel: t,
                  route: D.k_eStoreSalePage,
                  className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: Y.Localize(`#EventDisplay_SalesPage`),
                }),
              !!(m && k && h) &&
                (0, Z.jsx)(`a`, {
                  href:
                    I.STATS_BASE_URL +
                    `sales/details/?gid=` +
                    h +
                    `&clanid=` +
                    g,
                  target: I.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: Y.Localize(`#EventDisplay_StatsPage`),
                }),
              !!(m && k && h && !M) &&
                (0, Z.jsx)(`a`, {
                  href:
                    I.PARTNER_BASE_URL +
                    `promotion/invitationplanner/dashboard?saleclaneventgid=` +
                    h +
                    `&saleclanaccountid=` +
                    g,
                  target: I.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: Y.Localize(`#EventDisplay_InvitationPlannerPage`),
                }),
              s,
              !!(m && oe && g == 41316928 && t.GetContentHubCategory()) &&
                (0, Z.jsx)(`a`, {
                  href: `${I.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                  target: I.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`, `u6DPgTclyv4-`),
                  children: Y.Localize(`#EventDisplay_CategoryEditor`),
                }),
              !!(N && (ae || (f && !C))) &&
                (0, Z.jsx)(O, {
                  eventModel: t,
                  route: m ? D.k_eCommunityPreviewSale : D.k_eCommunityView,
                  className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: Y.Localize(
                    m
                      ? `#EventDisplay_PreviewOnCommunity`
                      : `#EventDisplay_ViewOnCommunity`,
                  ),
                }),
              !!(N && C) &&
                (0, Z.jsx)(O, {
                  eventModel: t,
                  route: D.k_eStoreView,
                  className: R(`yYL-OrX9PtQ-`, `_09V7NXTmtlY-`),
                  children: Y.Localize(`#EventDisplay_ViewOnStore`),
                }),
              l,
              A &&
                (0, Z.jsx)(`div`, {
                  className: `ZlbFAmu86SM-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => v(!1),
                  onKeyDown: Me(() => v(!1)),
                  children: (0, Z.jsx)(me, {
                    toolTipContent: Y.Localize(
                      `#EventDisplay_Admin_Close_ttip`,
                    ),
                    children: (0, Z.jsx)(De, {}),
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
                  children: (0, Z.jsx)(me, {
                    toolTipContent: Y.Localize(
                      `#EventDisplay_Admin_Reopen_ttip`,
                    ),
                    children: (0, Z.jsx)(_e, { angle: 0 }),
                  }),
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, { className: te, ref: x }),
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            admin_jsondata: { n: 2, br: L.readString, bw: G.writeString },
            partner_jsondata: { n: 3, br: L.readString, bw: G.writeString },
            input_jsondata: { n: 4, br: L.readString, bw: G.writeString },
            partner_readonly_jsondata: {
              n: 10,
              br: L.readString,
              bw: G.writeString,
            },
            partner_writable_jsondata: {
              n: 11,
              br: L.readString,
              bw: G.writeString,
            },
            assets_readonly_jsondata: {
              n: 12,
              br: L.readString,
              bw: G.writeString,
            },
            assets_writable_jsondata: {
              n: 13,
              br: L.readString,
              bw: G.writeString,
            },
            rtime32_start_time: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            rtime32_end_time: { n: 6, br: L.readUint32, bw: G.writeUint32 },
            partner_id: { n: 7, br: L.readUint32, bw: G.writeUint32 },
            input_access_key: { n: 8, br: L.readString, bw: G.writeString },
            last_update_time: { n: 9, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            input_access_key: { n: 2, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            oldest_rtime: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            newest_rtime: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            promotion_types: {
              n: 3,
              r: !0,
              q: !0,
              br: L.readString,
              bw: G.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            type: { n: 1, br: L.readEnum, bw: G.writeEnum },
            gid: { n: 2, br: L.readFixed64String, bw: G.writeFixed64String },
            promotion_planid: {
              n: 3,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            rtime: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            upto_rtime: { n: 2, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              pbr: L.readPackedFixed64String,
              bw: G.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
          fields: { token: { n: 1, br: L.readString, bw: G.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readUint32,
              pbr: L.readPackedUint32,
              bw: G.writeRepeatedUint32,
            },
            exclude_sales: { n: 2, br: L.readBool, bw: G.writeBool },
            exclude_direct_featuring: { n: 3, br: L.readBool, bw: G.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readUint32,
              pbr: L.readPackedUint32,
              bw: G.writeRepeatedUint32,
            },
            clan_event_gid: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            input_access_key: { n: 1, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            value: { n: 2, br: L.readBool, bw: G.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            notification_type: { n: 2, br: L.readEnum, bw: G.writeEnum },
            only_explicit_email_addresses: {
              n: 3,
              br: L.readBool,
              bw: G.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            notification_id: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            tracking_id: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            email_address: { n: 3, br: L.readString, bw: G.writeString },
            accountid: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            status: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            type: { n: 6, br: L.readEnum, bw: G.writeEnum },
            rt_send_time: { n: 7, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            notification_id: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            add: { n: 2, br: L.readBool, bw: G.writeBool },
            email_address: { n: 3, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            clan_account_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            rtime_sale_start: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            rtime_sale_end: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            daily_deal_gid: {
              n: 5,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            promotion_gid: {
              n: 6,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            create_asset_request: { n: 7, br: L.readBool, bw: G.writeBool },
            partner_id: { n: 8, br: L.readUint32, bw: G.writeUint32 },
            advertising_appid: { n: 9, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            clan_account_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            daily_deal_gid: {
              n: 3,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            promotion_gid: {
              n: 4,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            asset_request_gid: {
              n: 5,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            advertising_appid: { n: 6, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            total_gross_returns_usdx100: {
              n: 2,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            total_net_tax_usdx100: {
              n: 3,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            steam_gross_sales_usdx100: {
              n: 4,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            steam_gross_returns_usdx100: {
              n: 5,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            steam_net_tax_usdx100: {
              n: 6,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            in_game_gross_sales_usdx100: {
              n: 7,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            in_game_gross_returns_usdx100: {
              n: 8,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            in_game_net_tax_usdx100: {
              n: 9,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            total_net_sales_usdx100: {
              n: 10,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            steam_net_sales_usdx100: {
              n: 11,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            in_game_net_sales_usdx100: {
              n: 12,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            steam_gross_units_sold: {
              n: 13,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            steam_gross_units_returned: {
              n: 14,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
            gross_units_activated: {
              n: 15,
              br: L.readInt64String,
              bw: G.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readUint64String,
              pbr: L.readPackedUint64String,
              bw: G.writeRepeatedUint64String,
            },
            partnerid: { n: 2, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            partial_access: { n: 2, br: L.readBool, bw: G.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            rtime_date: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            date: { n: 2, br: L.readString, bw: G.writeString },
            summary_sales: { n: 3, c: _t },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            appid: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            packageid: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            secondary_product_id: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            summary_sales: { n: 4, c: _t },
            daily_promo_sales: { n: 5, c: bt, r: !0, q: !0 },
            package_billing_type: { n: 6, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readUint64String,
              bw: G.writeUint64String,
            },
            daily_promo_sales: { n: 2, c: bt, r: !0, q: !0 },
            summary_sales: { n: 3, c: _t },
            products: { n: 4, c: xt, r: !0, q: !0 },
            products_missing_user_rights: {
              n: 5,
              br: L.readUint32,
              bw: G.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            clan_account_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            gid_clan_event: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            rtstart: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            rtend: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            include_packages: { n: 3, br: L.readBool, bw: G.writeBool },
            filter_modified_sales_rank: {
              n: 4,
              d: !0,
              br: L.readBool,
              bw: G.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            package_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            discount_id: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            discount_name: { n: 3, br: L.readString, bw: G.writeString },
            discount_percentage: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            original_price_usd: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            discount_price_usd: { n: 6, br: L.readUint32, bw: G.writeUint32 },
            rtime_discount_start: { n: 7, br: L.readUint32, bw: G.writeUint32 },
            rtime_discount_end: { n: 8, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            appid: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            cheapest_package_id: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            cheapest_discount_id: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            cheapest_discount_name: {
              n: 5,
              br: L.readString,
              bw: G.writeString,
            },
            package_original_price_usd: {
              n: 6,
              br: L.readUint32,
              bw: G.writeUint32,
            },
            discounted_price_usd: { n: 7, br: L.readUint32, bw: G.writeUint32 },
            discount_percentage: { n: 8, br: L.readUint32, bw: G.writeUint32 },
            rtime_discount_start: { n: 9, br: L.readUint32, bw: G.writeUint32 },
            rtime_discount_end: { n: 10, br: L.readUint32, bw: G.writeUint32 },
            num_discounted_packages: {
              n: 11,
              br: L.readUint32,
              bw: G.writeUint32,
            },
            modified_sales_rank: { n: 12, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            account_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            include_published: { n: 2, br: L.readBool, bw: G.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            clan_account_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            gid_clan_event: {
              n: 2,
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            name: { n: 3, br: L.readString, bw: G.writeString },
            published: { n: 4, br: L.readBool, bw: G.writeBool },
            start_time: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            end_time: { n: 6, br: L.readUint32, bw: G.writeUint32 },
            external_sale_event_type: {
              n: 7,
              br: L.readUint32,
              bw: G.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            clan_account_id: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            clan_name: { n: 2, br: L.readString, bw: G.writeString },
            is_creator_home: { n: 3, br: L.readBool, bw: G.writeBool },
            sale_pages: { n: 4, c: Mt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
          fields: { partner_id: { n: 1, br: L.readUint32, bw: G.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            appid: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            app_name: { n: 2, br: L.readString, bw: G.writeString },
            itemid: { n: 3, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            spotlight_due_date: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            marketing_message_due_date: {
              n: 2,
              br: L.readUint32,
              bw: G.writeUint32,
            },
            discount_event_due_date: {
              n: 3,
              br: L.readUint32,
              bw: G.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            appid: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            invite_account: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            rtinvitetime: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            rtexpiretime: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            type: { n: 6, br: L.readEnum, bw: G.writeEnum },
            accept_account: { n: 7, br: L.readUint32, bw: G.writeUint32 },
            rtaccepttime: { n: 8, br: L.readUint32, bw: G.writeUint32 },
            rtdatechosen: { n: 9, br: L.readUint32, bw: G.writeUint32 },
            discount_eventid: { n: 10, br: L.readUint32, bw: G.writeUint32 },
            packageid: { n: 11, br: L.readUint32, bw: G.writeUint32 },
            bundleid: { n: 12, br: L.readUint32, bw: G.writeUint32 },
            primary_partnerid: { n: 13, br: L.readUint32, bw: G.writeUint32 },
            deadlines: { n: 14, c: Lt },
            notify_partner: { n: 15, br: L.readBool, bw: G.writeBool },
            additional_email: {
              n: 16,
              r: !0,
              q: !0,
              br: L.readString,
              bw: G.writeRepeatedString,
            },
            promotion_id: { n: 17, br: L.readString, bw: G.writeString },
            cancelled: { n: 18, br: L.readBool, bw: G.writeBool },
            rtime32_cancel_time: { n: 19, br: L.readUint32, bw: G.writeUint32 },
            require_sale_page: { n: 20, br: L.readBool, bw: G.writeBool },
            require_sale_page_type: { n: 21, br: L.readEnum, bw: G.writeEnum },
            admin_notes: { n: 22, br: L.readString, bw: G.writeString },
            partner_notes: { n: 23, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            queue_email_to_send: { n: 2, br: L.readBool, bw: G.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            appid: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            packageid: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            bundleid: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            partnerid: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            promotion_id: { n: 6, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            only_notify_additional_email: {
              n: 2,
              br: L.readBool,
              bw: G.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            accountid: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            partnerid: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            email_address: { n: 3, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readString,
              bw: G.writeRepeatedString,
            },
            valve_account_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: L.readUint32,
              pbr: L.readPackedUint32,
              bw: G.writeRepeatedUint32,
            },
            operation_email: { n: 4, br: L.readString, bw: G.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
            rtdatechosen: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            discount_days: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            discount_info: { n: 4, br: L.readString, bw: G.writeString },
            skip_discount_event: { n: 5, br: L.readBool, bw: G.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            gid: { n: 1, br: L.readFixed64String, bw: G.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readFixed64String,
              bw: G.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            opt_in_name: { n: 1, br: L.readString, bw: G.writeString },
            partner_id: { n: 2, br: L.readUint32, bw: G.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
              br: L.readUint32,
              pbr: L.readPackedUint32,
              bw: G.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
            appid: { n: 1, br: L.readUint32, bw: G.writeUint32 },
            demo_appid: { n: 2, br: L.readUint32, bw: G.writeUint32 },
            rt_start_time: { n: 3, br: L.readUint32, bw: G.writeUint32 },
            rt_end_time: { n: 4, br: L.readUint32, bw: G.writeUint32 },
            demo_player_count: { n: 5, br: L.readUint32, bw: G.writeUint32 },
            wishlist_count: { n: 6, br: L.readUint32, bw: G.writeUint32 },
            player_wishlist_count: {
              n: 7,
              br: L.readUint32,
              bw: G.writeUint32,
            },
            rt_last_update_time: { n: 9, br: L.readUint32, bw: G.writeUint32 },
            fest_page_views: { n: 10, br: L.readUint32, bw: G.writeUint32 },
            fest_period_page_views: {
              n: 11,
              br: L.readUint32,
              bw: G.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= F(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return J(e.M(), t, n);
    }
    static fromObject(t) {
      return H(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return B(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      U(e.M(), t, n);
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
    return e.SendMsg(`PromotionPlanning.CreatePlan#1`, W(Pe, t, n), Fe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreatePlan = t;
  function n(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.CreateTentativePlan#1`,
      W(Pe, t, n),
      Fe,
      { ePrivilege: 1 },
    );
  }
  e.CreateTentativePlan = n;
  function r(e, t, n) {
    return e.SendMsg(`PromotionPlanning.UpdatePlan#1`, W(Ie, t, n), Le, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdatePlan = r;
  function i(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.UpdatePlanPartnerInfo#1`,
      W(Ie, t, n),
      Le,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdatePlanPartnerInfo = i;
  function a(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.UpdatePlanInputData#1`,
      W(Ie, t, n),
      Le,
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.UpdatePlanInputData = a;
  function o(e, t, n) {
    return e.SendMsg(`PromotionPlanning.DeletePlan#1`, W(Ye, t, n), Xe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeletePlan = o;
  function s(e, t, n) {
    return e.SendMsg(`PromotionPlanning.GetPlan#1`, W(Re, t, n), ze, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPlan = s;
  function c(e, t, n) {
    return e.SendMsg(`PromotionPlanning.GetAllActivePlan#1`, W(Be, t, n), Ve, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetAllActivePlan = c;
  function l(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanCompletedInDateRange#1`,
      W(He, t, n),
      Ue,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlanCompletedInDateRange = l;
  function u(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanByAssociationID#1`,
      W(Ge, t, n),
      Ke,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlanByAssociationID = u;
  function d(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlansUpdatedSince#1`,
      W(qe, t, n),
      Je,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPlansUpdatedSince = d;
  function f(e, t, n) {
    return e.SendMsg(`PromotionPlanning.SearchPlan#1`, W(Ze, t, n), Qe, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.SearchPlan = f;
  function p(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetAllPlansForApps#1`,
      W($e, t, n),
      et,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetAllPlansForApps = p;
  function m(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPlanByInputAccessKey#1`,
      W(nt, t, n),
      rt,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPlanByInputAccessKey = m;
  function h(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.MarkLocalizationAssetComplete#1`,
      W(it, t, n),
      at,
      { ePrivilege: 1 },
    );
  }
  e.MarkLocalizationAssetComplete = h;
  function g(e, t, n) {
    return e.SendMsg(`PromotionPlanning.SendNotification#1`, W(ot, t, n), st, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.SendNotification = g;
  function _(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetSentNotification#1`,
      W(ct, t, n),
      lt,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetSentNotification = _;
  function v(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.ResendNotification#1`,
      W(dt, t, n),
      ft,
      { ePrivilege: 1 },
    );
  }
  e.ResendNotification = v;
  function y(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.SetPromotionEmailTarget#1`,
      W(pt, t, n),
      mt,
      { ePrivilege: 1 },
    );
  }
  e.SetPromotionEmailTarget = y;
  function b(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPromotionPlanSalesDaily#1`,
      W(vt, t, n),
      yt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPromotionPlanSalesDaily = b;
  function x(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetPromotionPlanForSalePages#1`,
      W(Ct, t, n),
      Tt,
      {
        bConstMethod: !0,
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetPromotionPlanForSalePages = x;
  function S(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.CreateSalePageForPromo#1`,
      W(ht, t, n),
      gt,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreateSalePageForPromo = S;
  function C(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetUpcomingScheduledDiscounts#1`,
      W(Et, t, n),
      Dt,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetUpcomingScheduledDiscounts = C;
  function w(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetSalePageCandidatesForPromo#1`,
      W(At, t, n),
      jt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetSalePageCandidatesForPromo = w;
  function T(e, t, n) {
    return e.SendMsg(
      `PromotionPlanning.GetAdvertisingAppsForPartner#1`,
      W(Pt, t, n),
      Ft,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetAdvertisingAppsForPartner = T;
})((tn ||= {}));
var nn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.SetInvite#1`, W(zt, t, n), Bt, {
      ePrivilege: 4,
    });
  }
  e.SetInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.GetInvite#1`, W(Vt, t, n), Ht, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvite = n;
  function r(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.AcceptInvite#1`, W(Jt, t, n), Yt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.AcceptInvite = r;
  function i(e, t, n) {
    return e.SendMsg(`PromotionEventInvites.CancelInvite#1`, W(Xt, t, n), Zt, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CancelInvite = i;
  function a(e, t, n) {
    return e.SendMsg(
      `PromotionEventInvites.ResendEmailInvite#1`,
      W(Ut, t, n),
      Wt,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ResendEmailInvite = a;
  function o(e, t, n) {
    return e.SendMsg(
      `PromotionEventInvites.GetEmailTargets#1`,
      W(Gt, t, n),
      qt,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetEmailTargets = o;
})((nn ||= {}));
var rn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`PromotionStats.GetOptInDemoStats#1`, W(Qt, t, n), $t, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetOptInDemoStats = t;
})((rn ||= {}));
function an() {
  let e = fe(`promotion_operation_token`, `application_config`);
  return e
    ? ye(new ge(q.WEBAPI_BASE_URL, e)).GetServiceTransport()
    : (Ee(!1, `GetPromotionWriteAccess: promotion operation token is missing`),
      null);
}
function on(e, t) {
  let [n] = (0, X.useState)(() => an());
  return s({
    queryKey: [`usePromotionPlanBySalePage`, t],
    queryFn: async () => {
      if (!n) return null;
      let r = Ce.Init(Ct),
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
                (l(de(e)), s(`failed_thread_delete`));
              },
            },
          )
        : s(`success`);
    }, [a, u, m, p]),
    g = (0, X.useCallback)((e) => {
      (l(de(e)), s(`error`));
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
      let e = n.GetNameWithFallback(Se(q.LANGUAGE)),
        i = n.BIsVisibleEvent()
          ? `#EventDisplay_AreYouSure_Visible`
          : `#EventDisplay_AreYouSure`;
      ((b = z(i, e ?? ``)),
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
                    children: z(`#EventDisplay_DeleteEvent_Comment`),
                  }),
                ],
              },
              `WantToDeleteCmtThread`,
            ),
          ));
      break;
    case `waiting`:
      ((b = z(`#EventDisplay_DeleteEvent_InProgress`)),
        x.push((0, Z.jsx)(oe, {}, `throbber`)));
      break;
    case `error`:
      ((b = z(`#EventDisplay_DeleteEvent_Error`)),
        x.push(
          (0, Z.jsx)(
            `div`,
            { className: P, children: c.strErrorMsg },
            `deleteerror_` + ++sn,
          ),
        ));
      break;
    case `failed_thread_delete`:
      ((b = z(`#EventDisplay_DeleteEvent_ForumTopicError`)),
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
      ((b = z(`#EventDisplay_DeleteEvent_Success`)),
        r &&
          (y = () => {
            (r?.(), t?.());
          }));
  }
  return (0, Z.jsx)(ue, {
    strTitle: z(`#EventDisplay_DeleteEvent`),
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
        className: R(j, E),
        onClick: (e) => {
          he(
            (0, Z.jsx)(ue, {
              strTitle: z(`#Dialog_AreYouSure`),
              strDescription: `Reload page after you hit OK; will not grant virtual reward items a second itme`,
              onOK: () => c(we.CLANACCOUNTID),
            }),
            le(e) ?? window,
          );
        },
        children: `Reset All Doors`,
      }),
      (0, Z.jsx)(K, {
        strDropDownClassName: R(M),
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
            (e.forEach((e) => r.push(...e)), ae(s, n, r));
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
    { data: g } = C(h),
    _ = (e) => {
      n &&
        he(
          (0, Z.jsx)(cn, {
            eventModel: t,
            onDeleteSuccessAndCloseDialog: () => s(!0),
            partnerEventStore: n,
          }),
          le(e) ?? window,
        );
    },
    v = u(),
    { creatorHome: y } = se(h);
  if (o)
    return (0, Z.jsx)(k, { eventModel: t, route: D.k_eCommunityAdminPage });
  if (v) return (0, Z.jsx)(`span`, {});
  let b = [];
  if (l !== void 0)
    for (let e = 0; e <= l; ++e)
      b.push({ label: z(`#SalePage_Admin_SaleEventDay`, e + 1), data: e });
  let x = t.GetEventType() == 36;
  return (0, Z.jsx)(je, {
    eventModel: t,
    permissions: g,
    bIsCreatorHomeVisible: x && y?.GetLinkedEventGID() == t.GID,
    additionalButtons: r,
    onDeleteRequest: n && ve() == `community` ? _ : void 0,
    saleDayControl:
      l !== void 0 &&
      b.length > 0 &&
      (0, Z.jsx)(K, {
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
        x(e.section_type) &&
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
  return r && (r.badge_progress?.levels?.length ?? 0) > 0 && xe.is_support
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
  return (0, Z.jsx)(K, {
    strDropDownClassName: R(M, A),
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
              href: `${q.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
              target: q.IN_CLIENT ? `` : `_blank`,
              rel: `noreferrer`,
              className: R(j, E, A),
              children: z(`#EventDisplay_PromotionEditor`),
            },
            e,
          ),
        ),
      })
    : null;
}
export { Ne as n, je as r, mn as t };

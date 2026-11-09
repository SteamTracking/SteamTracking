/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shareeventdialogbody.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./vodquery.js",
      "./playerlinkdetailsdataloader.js",
      "./main.js",
      "../../../css/applications/community/main.css",
      "./clanstore.js",
      "./throbber.js",
      "../../../css/applications/community/throbber.css",
      "./basebuttons.js",
      "../../../css/applications/community/basebuttons.css",
      "./emoticonbutton.js",
      "./reactbbcodeparser.js",
      "./bbcodeparser.js",
      "./bbcodes.module.js",
      "../../../css/applications/community/bbcodes.css",
      "./numberformats.js",
      "./storeitemhooks.js",
      "../../../css/applications/community/emoticonbutton.css",
      "./storeassets.js",
      "./ajaxhooks.js",
      "./tabbar.js",
      "./historyutils.js",
      "../../../css/applications/community/tabbar.css",
      "./expandonappear.js",
      "./eventdevfeaturestore.js",
      "./rewarditemdisplay.js",
      "./partnereventdialog.module.js",
      "../../../css/applications/community/partnereventdialog.css",
      "./storeitemlink.js",
      "./currencyformat.js",
      "./visibilitytracker.js",
      "./personautils.js",
      "./appinfostore.js",
      "../../../css/applications/community/vodquery.css",
      "./carouselarrows.js",
      "./simplesuccesserror.js",
      "../../../css/applications/community/simplesuccesserror.css",
      "./steammessages_loyalty_rewards_pb.js",
      "../../../css/applications/community/carouselarrows.css",
      "./languagepicker.js",
      "./playerstore.js",
      "./persona.js",
      "../../../css/applications/community/languagepicker.css",
      "./linktoeventforusertocopy.js",
      "./icn-copylink.js",
      "./twitter_large.js",
      "./reddit_large.js",
      "../../../css/applications/community/shareeventdialogbody.css",
      "./broadcastplayer.js",
      "./broadcastwatchstore.js",
      "../../../css/applications/community/broadcastplayer.css",
      "./broadcast_embeddable.js",
      "./broadcast_embeddable.module.js",
      "./textfilterstore.js",
      "./webuitransportdefaults.js",
      "./broadcast_embeddable2.js",
      "./partnereventslogin.js",
      "./logindialog.js",
      "../../../css/applications/community/logindialog.css",
      "./giveawaystore.js",
      "../../../css/applications/community/broadcast_embeddable2.css",
      "../../../css/applications/community/broadcast_embeddable.css",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./rolldown-runtime.js";
import {
  A as n,
  B as r,
  C as i,
  D as a,
  Ft as o,
  G as s,
  I as c,
  K as l,
  L as u,
  Pt as d,
  R as f,
  at as p,
  j as m,
  ot as h,
  w as g,
} from "./libraries.js";
import {
  $ as _,
  Ao as v,
  Cr as y,
  D as b,
  Di as x,
  E as S,
  Ec as C,
  Fr as ee,
  G as te,
  H as ne,
  Hr as re,
  Ii as ie,
  J as ae,
  Ja as oe,
  K as se,
  L as ce,
  Li as le,
  Nn as ue,
  O as de,
  Q as fe,
  T as pe,
  Tt as me,
  U as he,
  V as ge,
  Vr as _e,
  W as ve,
  Yr as ye,
  Z as be,
  g as xe,
  hc as Se,
  it as Ce,
  jo as we,
  k as Te,
  lo as Ee,
  n as De,
  no as Oe,
  nt as ke,
  p as Ae,
  q as je,
  rt as Me,
  to as Ne,
  w as Pe,
  zn as Fe,
} from "./vodquery.js";
import {
  C as Ie,
  E as Le,
  _ as Re,
  a as ze,
  h as Be,
  i as Ve,
  o as He,
} from "./clanstore.js";
import { n as Ue } from "./textlink.js";
import { t as w } from "./throbber.js";
import { B as We, S as T, dt as Ge, g as Ke } from "./emoticonbutton.js";
import {
  G as qe,
  K as Je,
  O as Ye,
  W as Xe,
  Y as Ze,
  Z as Qe,
  c as $e,
  d as et,
  k as tt,
  l as nt,
  q as rt,
  u as it,
} from "./carouselarrows.js";
import { t as at } from "./storeassets.js";
import { t as ot } from "./ajaxhooks.js";
import { n as st, o as ct } from "./eventdevfeaturestore.js";
import { r as lt } from "./rewarditemdisplay.js";
import {
  a as ut,
  c as dt,
  i as ft,
  l as pt,
  n as mt,
} from "./localdateandtime.js";
import { r as ht } from "./partnereventdialog.module.js";
import { t as gt } from "./numberformats.js";
import { n as _t, r as vt } from "./simplesuccesserror.js";
import { a as yt } from "./steammessages_loyalty_rewards_pb.js";
import { n as bt } from "./storeitemhooks.js";
import {
  $m as xt,
  $r as St,
  Ah as E,
  Bf as Ct,
  Bu as wt,
  Cd as Tt,
  Cs as Et,
  Cu as Dt,
  Dh as D,
  Dt as Ot,
  Ef as O,
  Eh as k,
  Et as kt,
  Fc as At,
  Fs as jt,
  Gi as Mt,
  Go as Nt,
  Hm as Pt,
  Jf as Ft,
  Jo as It,
  Jp as Lt,
  Ju as Rt,
  Ko as zt,
  Lf as Bt,
  Ls as A,
  Mh as j,
  Mu as Vt,
  N as Ht,
  Nd as Ut,
  Ns as Wt,
  Nu as Gt,
  Oh as M,
  Ot as Kt,
  Ph as N,
  Pn as qt,
  Ps as Jt,
  Qf as Yt,
  Qp as Xt,
  Rf as Zt,
  Ri as Qt,
  Sf as $t,
  Sm as en,
  Tc as tn,
  Th as P,
  Tp as F,
  Uf as nn,
  Uh as rn,
  Ui as an,
  Us as on,
  Vf as sn,
  Vs as cn,
  Wd as I,
  Wi as ln,
  Wo as un,
  Xi as dn,
  Xo as fn,
  Yh as pn,
  Yo as L,
  Zd as R,
  _f as z,
  _l as mn,
  ai as hn,
  al as gn,
  am as _n,
  br as vn,
  bu as yn,
  cf as bn,
  cp as xn,
  cs as Sn,
  df as Cn,
  dl as wn,
  dm as B,
  dp as Tn,
  ef as En,
  em as V,
  ff as Dn,
  fm as On,
  fs as kn,
  fu as An,
  gn as jn,
  gs as Mn,
  hc as Nn,
  hs as Pn,
  im as Fn,
  ip as In,
  jh as H,
  kh as U,
  kp as Ln,
  l as Rn,
  lr as zn,
  lu as Bn,
  mc as Vn,
  mn as Hn,
  nd as Un,
  np as Wn,
  ns as Gn,
  of as Kn,
  os as qn,
  p as Jn,
  pm as Yn,
  pt as Xn,
  qi as Zn,
  ql as Qn,
  qm as $n,
  qp as er,
  qs as tr,
  rc as nr,
  rm as W,
  ru as rr,
  sf as ir,
  sh as ar,
  sm as or,
  sn as sr,
  sr as cr,
  td as lr,
  tf as ur,
  ts as dr,
  ud as G,
  um as fr,
  un as pr,
  uu as mr,
  vr as hr,
  ws as gr,
  wt as _r,
  wu as vr,
  xp as yr,
  xu as K,
  yf as br,
  yr as xr,
  zo as Sr,
} from "./main.js";
function Cr(e, t) {
  return {
    clanid: e,
    appid: t,
    can_edit: !1,
    owns_app: !1,
    event_followed: [],
    event_followed_flags: [],
    event_ignored: [],
    follows_app: !1,
    valve_admin: !1,
    support_user: !1,
    limited_user: !0,
  };
}
function wr(e, t) {
  return !t || !(e.support_user || e.valve_admin)
    ? e
    : { ...e, can_edit: !0, support_user: !1, valve_admin: !1 };
}
async function Tr(e, t, n) {
  let r = Fn(),
    i = or(`partnereventpermissions`, `application_config`);
  if (Er(i)) {
    let t = i.find((t) => t.clanid == e);
    if (t) {
      let { success: e, warn_msg: n, err_msg: i, ...a } = t;
      return wr(a, r);
    }
  }
  if (W.logged_in) {
    let t = en.InitFromClanID(e, V.EUNIVERSE),
      n = `${V.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
    Ct() == `partner`
      ? (n = `${V.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${e}`)
      : Ct() == `store` &&
        (n = `${V.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${e}`);
    let i = await fetch(n, { method: `GET`, credentials: `include` });
    if (i.status == 200) {
      let e = await i.json();
      if (e) {
        let { success: t, warn_msg: n, err_msg: i, ...a } = e;
        return wr(a, r);
      }
    }
  }
  return Cr(e, void 0);
}
function Er(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanid == `number` && typeof t[0].appid == `number`
    : !1;
}
function Dr(e) {
  let t = p(),
    n = er();
  return l(Or(e, t, n));
}
function Or(e, t, n) {
  return {
    queryKey: kr(e),
    queryFn: async () => await Tr(e, t, n),
    enabled: !!e,
  };
}
function kr(e) {
  return [`useEventUserPermissions`, W.accountid, e];
}
var q = e(d(), 1),
  J = h(),
  Ar = { eLocation: 0 },
  jr = q.createContext(Ar);
function Mr(e) {
  let { children: t, location: n } = e;
  return (0, J.jsx)(jr.Provider, {
    value: { ...Ar, eLocation: n ?? 0 },
    children: t,
  });
}
function Nr() {
  return q.useContext(jr);
}
function Pr() {
  return Nr().eLocation == 2;
}
function Fr() {
  let e = Nr();
  return e.eLocation == 2 || e.eLocation == 1;
}
async function Ir(e, t) {
  let n = await Ke.GetCommunityInventory(e, { filter_appids: [t] });
  if (n.GetEResult() != 1)
    throw Error(
      `Quest.GetCommunityInventory on app ` + t + ` answered ` + n.GetEResult(),
    );
  return n.Body().toObject().items ?? [];
}
var Lr;
function Rr() {
  let e = Bt();
  if (e) return e.GetServiceTransport();
  if (!Lr) {
    let e = or(`read_inventory_token`, `application_config`);
    Lr = Zt(e ? new Yn(V.WEBAPI_BASE_URL, e) : Xt());
  }
  return Lr.GetServiceTransport();
}
async function zr(e) {
  return Ir(Rr(), e);
}
var Br = 3e3,
  Vr = 5e3;
function Hr(e) {
  return [`QuestCommunityInventory`, e];
}
function Ur(e) {
  return {
    queryKey: Hr(e),
    queryFn: () => zr(e),
    enabled: !!e,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function Wr(e) {
  let { data: t } = l(Ur(e));
  return t;
}
function Gr(e, t) {
  let n = Wr(e);
  return {
    communityItem: (0, q.useMemo)(
      () => n?.find((n) => n.appid == e && n.item_type == t),
      [n, e, t],
    ),
    bLoaded: n != null,
  };
}
function Kr() {
  let e = p();
  return s({ mutationFn: (t) => Jr(e, t.appid, t.fnBHasExpectedItems) });
}
var qr = new WeakMap();
function Jr(e, t, n) {
  if (!t || n(e.getQueryData(Hr(t)) ?? [])) return Promise.resolve();
  let r = qr.get(e);
  r || ((r = new Map()), qr.set(e, r));
  let i = r.get(t);
  return i || ((i = Yr(e, t, n).finally(() => r?.delete(t))), r.set(t, i)), i;
}
async function Yr(e, t, n) {
  let r = [0, Br, Xr()];
  for (let i of r) {
    i > 0 && (await Zr(i));
    let r;
    try {
      (r = await zr(t)), e.setQueryData(Hr(t), r);
    } catch (e) {
      console.error(
        `Re-reading the community inventory for app ` + t + ` failed`,
        e,
      );
    }
    if (n(r ?? [])) return;
  }
}
function Xr() {
  return Vr + Math.floor(Math.random() * 1e4);
}
function Zr(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Qr(e, t, n) {
  e.setQueryData(Hr(t), n);
}
var Y = e(o(), 1),
  $r = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_type || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_type: { n: 1, br: M.readUint32, bw: j.writeUint32 },
            appid: { n: 2, br: M.readUint32, bw: j.writeUint32 },
            item_name: { n: 3, br: M.readString, bw: j.writeString },
            item_title: { n: 4, br: M.readString, bw: j.writeString },
            item_description: { n: 5, br: M.readString, bw: j.writeString },
            item_image_small: { n: 6, br: M.readString, bw: j.writeString },
            item_image_large: { n: 7, br: M.readString, bw: j.writeString },
            item_key_values: { n: 8, br: M.readString, bw: j.writeString },
            item_series: { n: 9, br: M.readUint32, bw: j.writeUint32 },
            item_class: { n: 10, br: M.readUint32, bw: j.writeUint32 },
            editor_accountid: { n: 11, br: M.readUint32, bw: j.writeUint32 },
            active: { n: 12, br: M.readBool, bw: j.writeBool },
            item_image_composed: { n: 13, br: M.readString, bw: j.writeString },
            item_image_composed_foil: {
              n: 14,
              br: M.readString,
              bw: j.writeString,
            },
            deleted: { n: 15, br: M.readBool, bw: j.writeBool },
            item_last_changed: { n: 16, br: M.readUint32, bw: j.writeUint32 },
            broadcast_channel_id: {
              n: 17,
              br: M.readUint64String,
              bw: j.writeUint64String,
            },
            item_movie_webm: { n: 18, br: M.readString, bw: j.writeString },
            item_movie_mp4: { n: 19, br: M.readString, bw: j.writeString },
            item_movie_webm_small: {
              n: 20,
              br: M.readString,
              bw: j.writeString,
            },
            item_movie_mp4_small: {
              n: 21,
              br: M.readString,
              bw: j.writeString,
            },
            item_internal_name: { n: 22, br: M.readString, bw: j.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CommunityItemDefinition`;
    }
  },
  ei = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: M.readUint32, bw: j.writeUint32 },
            community_item_type: { n: 2, br: M.readUint32, bw: j.writeUint32 },
            community_item_class: { n: 3, br: M.readUint32, bw: j.writeUint32 },
            community_definition: { n: 4, c: $r },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SaleReward_ItemDefinition`;
    }
  },
  ti = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: M.readUint64String,
              bw: j.writeUint64String,
            },
            time_granted: { n: 2, br: M.readUint32, bw: j.writeUint32 },
            item_definition: { n: 3, c: ei },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SaleItemRewardGrant`;
    }
  },
  ni = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: M.readString, bw: j.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Request`;
    }
  },
  ri = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: M.readUint64String,
              bw: j.writeUint64String,
            },
            next_claim_time: { n: 2, br: M.readUint32, bw: j.writeUint32 },
            reward_item: { n: 3, c: yt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Response`;
    }
  },
  ii = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: M.readString, bw: j.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Request`;
    }
  },
  ai = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.can_claim || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_claim: { n: 1, br: M.readBool, bw: j.writeBool },
            next_claim_time: { n: 2, br: M.readUint32, bw: j.writeUint32 },
            reward_item: { n: 3, c: yt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Response`;
    }
  },
  oi = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_reward_def_id || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_reward_def_id: { n: 1, br: M.readUint32, bw: j.writeUint32 },
            appid: { n: 2, br: M.readUint32, bw: j.writeUint32 },
            virtual_item_reward_event_id: {
              n: 3,
              br: M.readUint32,
              bw: j.writeUint32,
            },
            rtime_start_time: { n: 4, br: M.readUint32, bw: j.writeUint32 },
            rtime_end_time: { n: 5, br: M.readUint32, bw: j.writeUint32 },
            num_items_per_def: { n: 6, br: M.readUint32, bw: j.writeUint32 },
            reward_def_type: { n: 7, br: M.readEnum, bw: j.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamItemRewardDefinition`;
    }
  },
  si = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.virtual_item_reward_event_id || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            virtual_item_reward_event_id: {
              n: 1,
              br: M.readUint32,
              bw: j.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Request`;
    }
  },
  ci = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { definitions: { n: 1, c: oi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Response`;
    }
  },
  li = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definitions: { n: 1, c: oi, r: !0, q: !0 },
            action: { n: 2, br: M.readEnum, bw: j.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Request`;
    }
  },
  ui = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { definitions: { n: 1, c: oi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Response`;
    }
  },
  di = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_def_type || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_def_type: { n: 1, br: M.readEnum, bw: j.writeEnum },
            language: { n: 2, br: M.readString, bw: j.writeString },
            include_community_item_def: {
              n: 3,
              br: M.readBool,
              bw: j.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Request`;
    }
  },
  fi = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.num_items_granted || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_items_granted: { n: 1, br: M.readInt32, bw: j.writeInt32 },
            num_items_earned: { n: 2, br: M.readInt32, bw: j.writeInt32 },
            current_def: { n: 3, c: oi },
            reward_items: { n: 4, c: ti, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Response`;
    }
  },
  pi = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_def_type || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_def_type: { n: 1, br: M.readEnum, bw: j.writeEnum },
            language: { n: 2, br: M.readString, bw: j.writeString },
            include_community_item_def: {
              n: 3,
              br: M.readBool,
              bw: j.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Request`;
    }
  },
  mi = class e extends Y.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definition || P(e.M()),
        Y.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definition: { n: 1, c: oi },
            reward_items: { n: 2, c: ei, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= U(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Y.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Y.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Response`;
    }
  },
  hi;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleItemRewards.ClaimItem#1`, xt(ni, t, n), ri, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ClaimItem = t;
  function n(e, t, n) {
    return e.SendMsg(`SaleItemRewards.CanClaimItem#1`, xt(ii, t, n), ai, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.CanClaimItem = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.GetRewardDefinitions#1`,
      xt(si, t, n),
      ci,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetRewardDefinitions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.SetRewardDefinitions#1`,
      xt(li, t, n),
      ui,
      { ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetRewardDefinitions = i;
  function a(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.GetClaimedSaleRewards#1`,
      xt(di, t, n),
      fi,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClaimedSaleRewards = a;
  function o(e, t, n) {
    return e.SendMsg(
      `SaleItemRewards.GetCurrentDefinition#1`,
      xt(pi, t, n),
      mi,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  e.GetCurrentDefinition = o;
})((hi ||= {}));
var gi = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
async function _i(e, t) {
  let n = await hi.CanClaimItem(e, { language: t });
  if (n.GetEResult() != 1)
    throw Error(`SaleItemRewards.CanClaimItem answered ` + n.GetEResult());
  let r = n.Body().toObject(),
    i = r.reward_item?.defid ? r.reward_item : void 0;
  return {
    bCanClaimNewItem: !!r.can_claim,
    bAlreadyClaimedCurrentItem: !!i,
    appid: i?.appid,
    community_item_type: i?.community_item_type,
    community_item_class: i?.community_item_class,
    rtNextClaimTime: (r.next_claim_time ?? 0) > 0 ? r.next_claim_time : void 0,
  };
}
async function vi(e, t) {
  let n = await hi.ClaimItem(e, { language: t });
  if (n.GetEResult() == 29) return _i(e, t);
  if (n.GetEResult() != 1)
    throw Error(`SaleItemRewards.ClaimItem answered ` + n.GetEResult());
  let r = n.Body().toObject().reward_item;
  return {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !0,
    appid: r?.appid,
    community_item_type: r?.community_item_type,
    community_item_class: r?.community_item_class,
    rtNextClaimTime:
      (n.Body().next_claim_time() ?? 0) > 0
        ? n.Body().next_claim_time()
        : void 0,
  };
}
async function yi(e, t) {
  let n = await Ke.ActivateProfileModifierItem(e, {
    communityitemid: t.communityitemid,
    appid: t.appid,
    activate: !0,
  });
  if (n.GetEResult() != 1)
    throw Error(`Quest.ActivateProfileModifierItem answered ` + n.GetEResult());
  return n.GetEResult();
}
async function bi(e, t, n, r) {
  return (
    await hi.GetCurrentDefinition(e, {
      sale_def_type: t,
      language: n,
      include_community_item_def: r,
    })
  )
    .Body()
    .toObject();
}
var xi;
function Si() {
  let e = Bt();
  if (e) return e.GetServiceTransport();
  if (!xi) {
    let e = or(`loyalty_webapi_token`, `application_config`);
    xi = Zt(e ? new Yn(V.WEBAPI_BASE_URL, e) : Xt());
  }
  return xi.GetServiceTransport();
}
async function Ci(e) {
  return _i(Si(), e);
}
async function wi(e) {
  return vi(Si(), e);
}
async function Ti(e) {
  return yi(Si(), e);
}
var Ei = 3e5,
  Di = !1,
  Oi = null,
  ki = { appid: 2243810, community_item_type: 2, community_item_class: 11 };
function Ai(e) {
  return [`SaleItemCanClaim`, e];
}
function ji(e) {
  return {
    queryKey: Ai(e),
    queryFn: () => Ci(e),
    enabled: !Di,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function Mi() {
  let e = V.LANGUAGE,
    t = p(),
    { data: n, isLoading: r } = l(ji(e)),
    i = n?.rtNextClaimTime;
  return (
    (0, q.useEffect)(() => {
      let n = 0;
      if (i) {
        let r = () => {
          let a = i * 1e3 - Date.now();
          a <= 0
            ? t.invalidateQueries({ queryKey: Ai(e) })
            : (n = window.setTimeout(r, a > Ei ? a / 2 : a));
        };
        r();
      }
      return () => window.clearTimeout(n);
    }, [i, e, t]),
    { ...(n ?? gi), bLoading: r }
  );
}
function Ni() {
  let e = p(),
    { mutateAsync: t } = s({
      mutationFn: () => {
        if (Oi) {
          let e = Oi;
          return (Oi = null), Promise.resolve(e);
        }
        return Di
          ? Promise.resolve(e.getQueryData(Ai(V.LANGUAGE)) ?? gi)
          : wi(V.LANGUAGE);
      },
      onSuccess: (t) => e.setQueryData(Ai(V.LANGUAGE), t),
    });
  return { fnClaimItem: (0, q.useCallback)(() => t(), [t]) };
}
function Pi() {
  return s({ mutationFn: (e) => Ti(e) });
}
function Fi() {
  let e = p();
  return {
    fnSetClaimState: (0, q.useCallback)(
      (t) => {
        (Di = !0),
          (Oi = t.bCanClaimNewItem
            ? {
                bAlreadyClaimedCurrentItem: !0,
                bCanClaimNewItem: !1,
                rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                ...ki,
              }
            : null),
          e.setQueryData(Ai(V.LANGUAGE), t);
      },
      [e],
    ),
  };
}
function Ii(e, t, n) {
  return [`SaleRewardsGetDefinition`, e, t, n];
}
function Li(e, t, n, r) {
  return {
    queryKey: Ii(t, n, r),
    queryFn: () => bi(e, t, n, r),
    staleTime: 1 / 0,
  };
}
function Ri(e, t, n) {
  let r = er();
  return l(Li(r, e, t, n));
}
var zi = `sQ3oyZUR-zg-`,
  Bi = `xlE3GjrXwxc-`,
  Vi = `-kwnh0mPXe8-`;
function Hi(e) {
  let t = Mi(),
    { bLoading: n } = t,
    { className: r, bPreviewMode: i, rewardType: a } = e,
    [o, s, c] = G();
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(L, {
        className: K(`CSSClaimItemButton`, r),
        onClick: () => {
          t.bCanClaimNewItem
            ? s()
            : i &&
              (s(),
              console.log(
                `Show dialog for debugging, since already claimed: `,
                t,
              ));
        },
        disabled: n,
        children: n
          ? (0, J.jsx)(w, { string: R(`#Loading`), size: `small` })
          : (0, J.jsx)(Ui, { claimState: t }),
      }),
      (0, J.jsx)(A, {
        active: o,
        children: (0, J.jsx)(Wi, { rewardType: a, closeModal: c }),
      }),
    ],
  });
}
function Ui(e) {
  let { claimState: t, strButtonOverride: n, rewardType: r } = e;
  if (t.bAlreadyClaimedCurrentItem)
    return (0, J.jsxs)(`div`, {
      className: K(zi, `CSSClaimedState`),
      children: [
        (0, J.jsx)(Nn, {}),
        (0, J.jsxs)(`span`, {
          children: [` `, n || R(`#Sale_ClaimableReward_AlreadyClaimed`)],
        }),
      ],
    });
  let i = R(`#Sale_ClaimableReward_generic`);
  switch (t?.community_item_class || r) {
    case 11:
      i = R(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      i = R(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      i = R(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, J.jsx)(`span`, { className: `CSSUnclaimedState`, children: i });
}
function Wi(e) {
  let { closeModal: t, rewardType: n } = e,
    { fnClaimItem: r } = Ni(),
    i = vt(),
    [a, o] = q.useState(null);
  q.useEffect(() => {
    i.bLoading ||
      (i.fnSetLoading(!0),
      r()
        .then((e) => {
          if ((o(e), e.appid)) {
            let t = R(`#Sale_ClaimableReward_completed_generic`),
              r = a?.community_item_class || n;
            switch (r) {
              case 11:
                t = R(`#Sale_ClaimableReward_completed_sticker`);
                break;
              case 8:
                t = R(`#Sale_ClaimableReward_completed_profilemodifier`);
                break;
              case 15:
                t = R(`#Sale_ClaimableReward_completed_animatedavatar`);
            }
            i.fnSetStrSuccess(`   `),
              i.fnSetElSuccess(
                (0, J.jsxs)(`div`, {
                  className: Bi,
                  children: [
                    (0, J.jsx)(`span`, { children: t }),
                    (0, J.jsx)(Gi, {
                      appid: e.appid,
                      community_item_type: e.community_item_type,
                      rewardType: r,
                    }),
                  ],
                }),
              );
          } else i.fnSetStrError(R(`#Sale_ClaimableReward_Busy`));
        })
        .catch(() => i.fnSetStrError(R(`#Sale_ClaimableReward_Busy`))));
  }, [a?.community_item_class, i, r, n]);
  let s = R(`#Sale_ClaimableReward_generic`);
  switch (a?.community_item_class || n) {
    case 11:
      s = R(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      s = R(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      s = R(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, J.jsx)(_t, { state: i, strDialogTitle: s, closeModal: t });
}
function Gi(e) {
  let { appid: t, community_item_type: n, rewardType: r } = e;
  return !t || !n
    ? null
    : (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(lt, { appid: t, community_item_type: n }),
          r == 8 && (0, J.jsx)(Ki, { appid: t, community_item_type: n }),
        ],
      });
}
function Ki(e) {
  let { appid: t, community_item_type: n } = e,
    r = Wr(t),
    { mutate: i, isSuccess: a } = Pi();
  if (!r) return null;
  let o = r.find((e) => e.item_type == n);
  return o
    ? (0, J.jsxs)(`div`, {
        className: Vi,
        children: [
          a
            ? (0, J.jsx)(`div`, {
                children: R(
                  `#Sale_ClaimableReward_profilemodifier_apply_success`,
                ),
              })
            : (0, J.jsx)(L, {
                onClick: () => i(o),
                children: R(`#Sale_ClaimableReward_profilemodifier_apply`),
              }),
          (0, J.jsx)(Vt, {
            href: `${V.COMMUNITY_BASE_URL}profiles/${W.steamid}`,
            children: R(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      })
    : (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsx)(Vt, {
            href: `${V.COMMUNITY_BASE_URL}profiles/${W.steamid}/edit/goldenprofile`,
            children: R(`#Sale_ClaimableReward_profilemodifier_choose`),
          }),
          (0, J.jsx)(Vt, {
            href: `${V.COMMUNITY_BASE_URL}profiles/${W.steamid}`,
            children: R(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      });
}
var qi = q.lazy(() =>
  Ft(
    () =>
      import(`./shareeventdialogbody.js`).then((e) => ({
        default: e.ShareEventDialogBody,
      })),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    ]),
    import.meta.url,
  ),
);
function Ji(e) {
  let { bActive: t, ...n } = e;
  return (0, J.jsx)(A, {
    active: t,
    children: (0, J.jsx)(q.Suspense, {
      fallback: null,
      children: (0, J.jsx)(qi, { ...n }),
    }),
  });
}
function Yi(e) {
  let { eventModel: t, emoticonStore: n } = e,
    [r, i, a] = G(),
    o = Qe(t);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(Dt, {
        focusable: !0,
        className: K(Hn, zn, S),
        onActivate: i,
        children: [
          (0, J.jsx)(mn, { className: ce }),
          (0, J.jsx)(`span`, { className: b, children: R(`#Button_Share`) }),
        ],
      }),
      (0, J.jsx)(Ji, {
        eventModel: t,
        strEventLink: o ?? ``,
        bActive: r,
        closeModal: a,
        emoticonStore: n,
      }),
    ],
  });
}
function Xi(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${V.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
function Zi(e, t, n) {
  return !t || Jt(t) ? t : `${n}images/clan/${e}/${t}`;
}
var Qi = `poster`,
  $i = `${Qi}.avif`,
  ea = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function ta(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${Qi}.`)) return e.image;
  let n = ea.exec(t);
  return n ? `${n[1]}.${$i}` : e.image;
}
var na = 0.01,
  ra = 100,
  ia = 4,
  aa = [
    [16, 9],
    [9, 16],
    [4, 3],
    [3, 4],
    [3, 2],
    [2, 3],
    [1, 1],
    [21, 9],
    [2, 1],
    [1, 2],
    [5, 4],
    [4, 5],
  ],
  oa = 0.005;
function sa(e, t) {
  if (!(!e || !t || e <= 0 || t <= 0)) return ca(e / t);
}
function ca(e) {
  if (!e || !Number.isFinite(e) || e < na || e > ra) return;
  let t = 10 ** ia;
  return Math.round(e * t) / t;
}
function la(e) {
  let t = e.trim();
  if (!t) return;
  let n = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(t);
  if (n) return sa(parseFloat(n[1]), parseFloat(n[2]));
  if (/^\d+(?:\.\d+)?$/.test(t)) return ca(parseFloat(t));
}
function ua(e) {
  let t = aa.find(([t, n]) => Math.abs(e - t / n) < oa);
  return t ? `${t[0]}:${t[1]}` : String(e);
}
function da(e) {
  let { appid: t, className: n, bTextMode: r } = e,
    i = v(t),
    { data: a } = F(i),
    { data: o } = Ln(i);
  return (0, J.jsx)(fa, {
    appid: t,
    bIsFree: !!a?.is_free,
    bIsComingSoon: !!o?.is_coming_soon,
    bTextMode: r,
    className: n,
  });
}
function fa(e) {
  let [t, n] = q.useState(!1),
    r = hn(),
    { appid: i, bIsFree: a, bIsComingSoon: o, className: s, bTextMode: c } = e,
    l = v(i),
    { bIsOwned: u } = Se(l),
    d = le(i),
    { mutateAsync: f } = ie(i, !d, St(r)),
    { elDialogElement: p, fnShowLogonDialog: m } = ye(),
    h = async () => {
      On.logged_in ? t || (n(!0), await f(), n(!1)) : m();
    };
  if (u || (!o && a))
    return a ? (0, J.jsx)(pa, { possibleDemoAppID: i }) : null;
  let g = null;
  return (
    t && !c
      ? (g = (0, J.jsx)(me, { size: 18 }))
      : d
        ? d && (g = c ? R(`#OnWishlist`) : (0, J.jsx)(Bn, {}))
        : (g = c ? R(`#wishlist_add_to_wishlist`) : (0, J.jsx)(mr, {})),
    (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(Mn, {
          toolTipContent: R(`#AddToWishlist_ttip`),
          children: (0, J.jsx)(`div`, {
            className: K(oe, s),
            onClick: h,
            children: g,
          }),
        }),
        p,
      ],
    })
  );
}
function pa(e) {
  let { possibleDemoAppID: t, className: n } = e,
    r = v(t),
    { data: i } = F(r);
  return i && (i.type == 1 || i.type == 12) && i.related_items?.parent_appid
    ? (0, J.jsx)(ma, {
        parentAppID: i.related_items?.parent_appid,
        className: n,
      })
    : null;
}
function ma(e) {
  let { parentAppID: t, className: n } = e,
    r = v(t),
    { data: i } = F(r),
    { data: a } = Ln(r);
  return !i || !a
    ? null
    : (0, J.jsx)(fa, {
        appid: t,
        bIsComingSoon: !!a.is_coming_soon,
        bIsFree: !!i.is_free,
        className: n,
      });
}
var ha = e(a(), 1),
  X = e(dt(), 1);
async function ga(e, t) {
  let n = new URLSearchParams();
  n.append(`page_action`, String(e)),
    n.append(`snr`, B.SNR),
    n.append(`uint_data`, String(t)),
    n.append(`str_data`, _a());
  try {
    await fetch(B.STORE_BASE_URL + `events/ajaxreportnewshubstats/`, {
      method: `POST`,
      body: n,
    });
  } catch {}
}
function _a() {
  if (B.IN_CLIENT) return `steam`;
  let e = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(e) ||
    (/Macintosh/i.test(e) && /Safari/i.test(e))
    ? `ios`
    : /Android/i.test(e)
      ? `android`
      : ``;
}
var Z = (function (e) {
    return (
      (e[(e.k_eDiscussions = 0)] = `k_eDiscussions`),
      (e[(e.k_eThumbsUp = 1)] = `k_eThumbsUp`),
      (e[(e.k_eClickThrough = 2)] = `k_eClickThrough`),
      (e[(e.k_eMuted = 3)] = `k_eMuted`),
      (e[(e.k_ePlayedVideo = 4)] = `k_ePlayedVideo`),
      (e[(e.k_eReminder_Opened = 5)] = `k_eReminder_Opened`),
      (e[(e.k_eReminder_MobilePush = 6)] = `k_eReminder_MobilePush`),
      (e[(e.k_eReminder_Email = 7)] = `k_eReminder_Email`),
      (e[(e.k_eReminder_CalendarApple = 8)] = `k_eReminder_CalendarApple`),
      (e[(e.k_eReminder_CalendarGoogle = 9)] = `k_eReminder_CalendarGoogle`),
      (e[(e.k_eReminder_CalendarOutlook = 10)] = `k_eReminder_CalendarOutlook`),
      (e[(e.k_eReminder_EmailUnverified = 11)] = `k_eReminder_EmailUnverified`),
      (e[(e.k_eReminder_MobilePushMissing = 12)] =
        `k_eReminder_MobilePushMissing`),
      e
    );
  })({}),
  va = { nFutureViewedIndex: 0, nPastViewedIndex: 0, nLastRecordedFilter: 0 };
function ya() {
  return [`EventCalendarTrackingProgress`];
}
function ba(e) {
  return e.getQueryData(ya()) ?? va;
}
function xa(e, t) {
  e.setQueryDefaults(ya(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
    e.setQueryData(ya(), (e) => ({ ...(e ?? va), ...t }));
}
function Sa(e, t, n) {
  return clearTimeout(e), setTimeout(n, t);
}
function Ca(e) {
  ga(19, e);
}
function wa(e, t) {
  xa(e, {
    schFilter: Sa(ba(e).schFilter, 1e3, () => {
      t != ba(e).nLastRecordedFilter &&
        (xa(e, { nLastRecordedFilter: t }), ga(16, t));
    }),
  });
}
function Ta(e, t, n, r) {
  let i = 0,
    a = 0,
    o,
    s;
  for (let e of n) {
    let n = e.start_time > r;
    if ((e.unique_id == t && ((o = a), (s = e)), n)) i++;
    else if (o !== void 0) break;
    a++;
  }
  if (o === void 0 || !s) return;
  let c = ba(e);
  if (o < i) {
    let t = i - o;
    if (c.nFutureViewedIndex >= t) return;
    xa(e, {
      nFutureViewedIndex: t,
      schFuture: Sa(c.schFuture, 500, () => {
        ga(
          18,
          Math.min(t, 4095) |
            (Math.min(i, 255) << 12) |
            (Math.min(Ea(r), 2047) << 20),
        );
      }),
    });
    return;
  }
  let l = o - i;
  if (c.nPastViewedIndex >= l) return;
  let u = Math.floor((r - s.start_time) / 86400);
  xa(e, {
    nPastViewedIndex: l,
    schPast: Sa(c.schPast, 500, () => {
      ga(
        17,
        Math.min(l, 4095) |
          (Math.min(u, 255) << 12) |
          (Math.min(Ea(r), 2047) << 20),
      );
    }),
  });
}
function Ea(e) {
  return Math.max(0, Math.floor(Date.now() / 1e3 - e));
}
function Da() {
  let e = p(),
    { mutate: t } = s({
      mutationFn: async (t) => {
        switch (t.type) {
          case `interaction`:
            Ca(t.interaction);
            break;
          case `filter-change`:
            wa(e, t.nFilterBitMask);
            break;
          case `event-viewed`:
            Ta(e, t.gidEvent, t.rgItemsInView, t.rtCalendarInit);
        }
      },
    });
  return q.useMemo(
    () => ({
      RecordInteraction: (e) => t({ type: `interaction`, interaction: e }),
      RecordFilterChange: (e) =>
        t({ type: `filter-change`, nFilterBitMask: e }),
      RecordEventViewed: (e, n, r) =>
        t({
          type: `event-viewed`,
          gidEvent: e,
          rgItemsInView: n,
          rtCalendarInit: r,
        }),
    }),
    [t],
  );
}
function Oa(e, t) {
  return [`GetClanAnnouncementVoteForUser`, t, e];
}
function ka(e, t, n, r) {
  let i = p(),
    a = Oa(e, W.accountid),
    { data: o } = l({
      queryKey: a,
      queryFn: async () => await n.GetMyEventVote(e),
      initialData: r?.initialVote,
      enabled: !!e && !!W.accountid && (r?.bAsk ?? !0),
      staleTime: 1 / 0,
      gcTime: 1 / 0,
    }),
    { mutate: c } = s({
      mutationFn: async (r) => {
        let i = await n.RateEvent(e, t, r);
        if (i != 1) throw Error(`RateClanAnnouncement failed with ${i}`);
      },
      onMutate: (e) => i.setQueryData(a, e),
      onError: () => i.invalidateQueries({ queryKey: a }),
    });
  return {
    myVote: o,
    Vote: (t) => {
      e && t != o && c(t);
    },
  };
}
function Aa(e, t) {
  if (e.length == 0) return;
  let n = t ?? Jn(`SetMyEventVotes`);
  n &&
    e.forEach((e) =>
      n.setQueryData(Oa(e.gidAnnouncement, W.accountid), e.vote),
    );
}
var ja = `partnereventaction/myvote`,
  Ma = `partnereventaction/rateevent`;
async function Na(e) {
  let t = V.STORE_BASE_URL + ja + `?gid=` + encodeURIComponent(e),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return (await n.json()).vote ?? null;
}
async function Pa(e, t, n) {
  let r = V.STORE_BASE_URL + Ma,
    i = await fetch(r, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({
        gid: e,
        clanaccountid: String(t),
        voteup: n == `up` ? `1` : `0`,
      }),
    });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  return (await i.json()).success ?? 2;
}
var Fa = { GetMyEventVote: Na, RateEvent: Pa },
  Ia = `notificationaction/usercontactmethods`;
async function La() {
  let e = V.STORE_BASE_URL + Ia,
    t = await fetch(e, { credentials: `include` });
  if (!t.ok) throw Error(`${e} answered ${t.status}`);
  return await t.json();
}
var Ra = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
function za() {
  let { data: e } = l(Va());
  return e ?? Ra;
}
function Ba(e) {
  return [`useUserContactMethods`, e];
}
function Va() {
  return {
    queryKey: Ba(W.accountid),
    queryFn: La,
    enabled: !!W.logged_in,
    initialData: () => {
      let e = or(`notificationstore`, `application_config`);
      return Ua(e) ? Ha(e) : void 0;
    },
  };
}
function Ha(e) {
  return {
    bHasValidatedEmail: !!e.email_validated,
    bHasPushNotification: (e.mobile_device_count ?? 0) > 0,
  };
}
function Ua(e) {
  let t = e;
  return (
    !!t && typeof t == `object` && typeof t.mobile_device_count == `number`
  );
}
var Wa = `_5AgZEgYk43o-`,
  Ga = `_8D33ZtA7ymg-`,
  Ka = `KtGRAufC8Rg-`,
  qa = `Kd1BYtvJHJU-`,
  Ja = `N7OtL5zwQl8-`,
  Ya = `s1rk-Hqt8Vo-`,
  Xa = `LQdMT5i8LTs-`,
  Za = `Es2eMo59RY8-`,
  Qa = `QcOIba5EbY0-`,
  $a = `Rudc0MPiyKA-`,
  eo = `cVnNrHICBDo-`,
  to = `NOqR9p4DLhY-`,
  no = `kuZjNUoyxrA-`;
function ro(e) {
  return (
    (e.bHasVerifiedEmail && e.bFollowsByEmail) ||
    (e.bHasPushNotification && e.bFollowsByPush)
  );
}
function io(e) {
  let {
      eventModel: t,
      rtNow: n,
      notifyState: r,
      bOnlyShowIcon: i,
      renderPanel: a,
      onRequestSignIn: o,
      bSignedIn: s,
      onTrack: c,
    } = e,
    [l, u] = q.useState(!1),
    d = q.useRef(null),
    f = q.useRef(null),
    p = q.useCallback(() => {
      f.current?.Hide(), u(!1);
    }, []),
    m = () => {
      let e = {
        bOverlapHorizontal: !0,
        bOverlapVertical: !0,
        bDisablePopTop: !0,
        bMatchWidth: !0,
        strClassName: K(Ga, Ka, yn),
      };
      (f.current = on(a(p), d.current, e)),
        f.current.SetOnHideCallback(p),
        u(!0),
        c?.(`opened`);
    },
    h = (e) => {
      s ? (l ? p() : m(), e.stopPropagation(), e.preventDefault()) : o?.();
    },
    g = i && !l,
    _ = ro(r);
  return (t.startTime !== void 0 && t.startTime < n) || t.BIsUnlistedEvent()
    ? null
    : (0, J.jsxs)(`div`, {
        className: K({
          [Xa]: !0,
          [ue]: !0,
          [Za]: g,
          [$a]: !g,
          ReminderSet: _,
          RemindMeWidget: !0,
        }),
        role: `button`,
        tabIndex: 0,
        "aria-expanded": l,
        onClick: h,
        onKeyDown: (e) => {
          (e.key === `Enter` || e.key === ` `) && h(e);
        },
        ref: d,
        children: [
          _ &&
            (0, J.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, J.jsx)(Nn, {}),
            }),
          g &&
            (0, J.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, J.jsx)(nr, {}),
            }),
          (0, J.jsx)(`div`, {
            className: Qa,
            children: R(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, J.jsx)(`div`, { className: Ka }),
        ],
      });
}
function ao(e) {
  let {
      eventModel: t,
      lang: n,
      rtNow: r,
      notifyState: i,
      bShowStartTime: a,
      bExpandLeft: o,
      bOnlyShowIcon: s,
      strCalendarEventTitle: c,
      onChangeNotify: l,
      onTrack: u,
      fnHidePanel: d,
    } = e,
    [f, p] = q.useState(!1),
    [m, h] = q.useState(void 0),
    [g, _, v] = G(),
    y = async (e, n) => {
      if (t.GID && t.GID != `18446744073709551615`) {
        p(!0);
        try {
          await l(e, n),
            e && u?.(n == `email` ? `notify-email` : `notify-push`);
        } catch (e) {
          h(e instanceof Error ? e.message : String(e)), _();
        }
        p(!1);
      }
    },
    b = t.jsondata.bSaleEnabled ? Xe.k_eStoreSalePage : Xe.k_eStoreView,
    x = Ze(t, b, `forceAbsolute`),
    S = () => {
      let e = t.GetSubTitleWithLanguageFallback(n);
      e = e ? `${e}\n\n\n` : ``;
      let r = t.GetSummaryWithFallback(n);
      return `${e}${r}\n\n${x}`;
    },
    C = () => {
      let e = encodeURIComponent(c),
        n = encodeURIComponent(S()),
        r = t.GetStartTimeAndDateUnixSeconds(),
        i = oo(r),
        a = oo(t.GetEndTimeAndDateUnixSeconds() || r + In.PerHour),
        o =
          (V.IN_CLIENT ? `steam://openurl_external/` : ``) +
          `https://calendar.google.com/calendar/r/eventedit?text=${e}&details=${n}&dates=${i}/${a}`;
      return jt(o);
    },
    ee = (e) => {
      let r = t.appid
          ? `app/` + t.appid
          : `group/` + t.clanSteamID.GetAccountID(),
        i = `l=` + Pt(n);
      return `${V.STORE_BASE_URL}${rt()}/download/${r}/${e}/${t.GID}?${i}`;
    },
    {
      bHasVerifiedEmail: te,
      bHasPushNotification: ne,
      bFollowsByEmail: re,
      bFollowsByPush: ie,
    } = i,
    ae = a && t.GetStartTimeAndDateUnixSeconds();
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsxs)(`div`, {
        className: K(Xa, s ? Za : $a, `RemindMeWidget`),
        role: `button`,
        tabIndex: 0,
        onClick: d,
        onKeyDown: (e) => {
          (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), d());
        },
        children: [
          ro(i) &&
            (0, J.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, J.jsx)(Nn, {}),
            }),
          s &&
            (0, J.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, J.jsx)(nr, {}),
            }),
          (0, J.jsx)(`div`, {
            className: Qa,
            children: R(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, J.jsx)(`div`, { className: eo }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: K(Wa, qa, o && `_4kHkgBu8y8A-`),
        children: [
          f &&
            (0, J.jsx)(w, {
              className: `xPjWHd9Ig14-`,
              size: `xlarge`,
              position: `center`,
            }),
          ae &&
            (0, J.jsx)(`div`, {
              className: `QivD6fzvu-Q-`,
              children: ur(
                `#EventDisplay_EventUpcoming_WithDateAndTime`,
                bn(ae, Wn(new Date(ae * 1e3), new Date(r * 1e3))),
                ut(ae, !0),
              ),
            }),
          (0, J.jsx)(`div`, {
            className: to,
            children: R(`#EventDisplay_Reminder_GetNotification_Via`),
          }),
          (0, J.jsxs)(`div`, {
            className: K(Ja, !te && `jtgpkfFhOJ8-`),
            children: [
              (0, J.jsx)(Mn, {
                className: Ya,
                bTopmost: !0,
                toolTipContent: R(
                  te
                    ? `#EventReminder_NotifyByEmail_ttip`
                    : `#EventReminder_NotifyByEmail_Missing`,
                ),
                children: (0, J.jsx)(fn, {
                  label: R(`#EventDisplay_Reminder_ViaEmail`),
                  disabled: !te,
                  checked: re,
                  onChange: (e) => y(e, `email`),
                }),
              }),
              !te &&
                (0, J.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, J.jsx)(`a`, {
                    href: V.STORE_BASE_URL + `account/`,
                    target: V.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => u?.(`email-unverified`),
                    rel: `noreferrer`,
                    children: R(`#EventReminder_NotifyByEmail_Missing_Add`),
                  }),
                }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: K(Ja, !ne && `jtgpkfFhOJ8-`),
            children: [
              (0, J.jsx)(Mn, {
                className: Ya,
                bTopmost: !0,
                toolTipContent: R(
                  ne
                    ? `#EventReminder_NotifyByMobile_ttip`
                    : `#EventReminder_NotifyByMobile_Missing`,
                ),
                children: (0, J.jsx)(fn, {
                  label: R(`#EventDisplay_Reminder_ViaMobileApp`),
                  disabled: !ne,
                  checked: ie,
                  onChange: (e) => y(e, `push`),
                }),
              }),
              !ne &&
                (0, J.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, J.jsx)(`a`, {
                    href: V.STORE_BASE_URL + `mobile/?show=steamapp`,
                    target: V.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => u?.(`push-missing`),
                    rel: `noreferrer`,
                    children: R(`#EventReminder_NotifyByMobile_Install`),
                  }),
                }),
            ],
          }),
          (0, J.jsxs)(q.Fragment, {
            children: [
              (0, J.jsx)(`div`, {
                className: to,
                children: R(`#EventDisplay_Reminder_AddToCalendar`),
              }),
              (0, J.jsxs)(`div`, {
                className: no,
                children: [
                  (0, J.jsx)(`a`, {
                    className: Ja,
                    href: ee(`ics`),
                    onClick: () => u?.(`calendar-apple`),
                    children: R(`#EventDisplay_Reminder_AppleCalendar_Short`),
                  }),
                  (0, J.jsx)(`a`, {
                    className: Ja,
                    target: V.IN_CLIENT ? void 0 : `_blank`,
                    href: C(),
                    onClick: () => u?.(`calendar-google`),
                    rel: `noreferrer`,
                    children: R(`#EventDisplay_Reminder_GoogleCalendar_Short`),
                  }),
                  (0, J.jsx)(`a`, {
                    className: Ja,
                    href: ee(`outlook`),
                    onClick: () => u?.(`calendar-outlook`),
                    children: R(`#EventDisplay_Reminder_OutlookCalendar_Short`),
                  }),
                ],
              }),
            ],
          }),
          !1,
        ],
      }),
      (0, J.jsx)(A, {
        active: g,
        children: (0, J.jsx)(ln, {
          strTitle: R(`#EventDisplay_Reminder_FollowEvent_Error`),
          strDescription: R(`#EventDisplay_Reminder_FollowEvent_ErrorDesc`),
          closeModal: v,
          children: m,
        }),
      }),
    ],
  });
}
function oo(e) {
  return new Date(e * 1e3)
    .toISOString()
    .replace(/[-:]/g, ``)
    .replace(/\.\d{3}Z$/, `Z`);
}
var so = (function (e) {
  return (
    (e[(e.k_ENotifyFlagNone = 0)] = `k_ENotifyFlagNone`),
    (e[(e.k_ENotifyFlagByEmail = 1)] = `k_ENotifyFlagByEmail`),
    (e[(e.k_ENotifyFlagByPush = 2)] = `k_ENotifyFlagByPush`),
    e
  );
})({});
function co(e, t) {
  let n = p(),
    r = er(),
    { data: i } = l(Or(e, n, r)),
    a = za(),
    o = uo(i, t);
  return {
    bHasVerifiedEmail: a.bHasValidatedEmail,
    bHasPushNotification: a.bHasPushNotification,
    bFollowsByEmail: (o & so.k_ENotifyFlagByEmail) != 0,
    bFollowsByPush: (o & so.k_ENotifyFlagByPush) != 0,
  };
}
function lo(e, t) {
  let n = p(),
    r = Or(e, n, er());
  return async (i, a) => {
    if (!t) return;
    let o = n.getQueryData(r.queryKey),
      s = a == `email` ? so.k_ENotifyFlagByEmail : so.k_ENotifyFlagByPush,
      c = uo(o, t);
    await fo(e, t, i ? c | s : c & ~s),
      await n.invalidateQueries({ queryKey: r.queryKey });
  };
}
function uo(e, t) {
  let n = t ? (e?.event_followed?.indexOf(t) ?? -1) : -1;
  return n == -1 ? 0 : (e?.event_followed_flags?.[n] ?? 0);
}
async function fo(e, t, n) {
  let r = n == 0,
    i = `${`${V.COMMUNITY_BASE_URL}gid/${en.InitFromClanID(e, V.EUNIVERSE).ConvertTo64BitString()}/`}${r ? `unfolloworunignoreevent` : `followorignoreevent`}`,
    a = new URLSearchParams();
  a.append(`sessionid`, _n()),
    a.append(`ignore`, `false`),
    a.append(`gid`, t),
    a.append(`notification_flag`, `` + n),
    a.append(`clan_accountid`, `` + e);
  let o = await fetch(i, { method: `POST`, body: a, credentials: `include` });
  if (!o.ok) throw Error(`${i} answered ${o.status}`);
}
function po(e) {
  let { eventModel: t, bOnlyShowIcon: n, onTrack: r } = e,
    i = pt(),
    a = co(t.clanSteamID.GetAccountID(), t.GID),
    { elDialogElement: o, fnShowLogonDialog: s } = ye();
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(io, {
        eventModel: t,
        rtNow: i,
        notifyState: a,
        bOnlyShowIcon: n,
        bSignedIn: !!W.logged_in || V.IN_CLIENT,
        onRequestSignIn: s,
        onTrack: r,
        renderPanel: (t) => (0, J.jsx)(mo, { ...e, rtNow: i, fnHidePanel: t }),
      }),
      o,
    ],
  });
}
function mo(e) {
  let {
      eventModel: t,
      lang: n,
      strHubName: r,
      bShowStartTime: i,
      bExpandLeft: a,
      bOnlyShowIcon: o,
      onTrack: s,
      rtNow: c,
      fnHidePanel: l,
    } = e,
    u = t.clanSteamID.GetAccountID(),
    d = co(u, t.GID),
    f = lo(u, t.GID),
    p = t.GetNameWithFallback(n) ?? ``,
    m = r ? `${r}: ${p}` : p;
  return (0, J.jsx)(ao, {
    eventModel: t,
    lang: n,
    rtNow: c,
    notifyState: d,
    strCalendarEventTitle: m,
    bShowStartTime: i,
    bExpandLeft: a,
    bOnlyShowIcon: o,
    onChangeNotify: f,
    onTrack: s,
    fnHidePanel: l,
  });
}
function ho(e) {
  let {
      eventModel: t,
      lang: n,
      bShowStartTime: r,
      bExpandLeft: i,
      bOnlyShowIcon: a,
    } = e,
    o = Da(),
    s = go(t);
  return (0, J.jsx)(po, {
    eventModel: t,
    lang: n,
    strHubName: s,
    bShowStartTime: r,
    bExpandLeft: i,
    bOnlyShowIcon: a,
    onTrack: (e) => o.RecordInteraction(_o[e]),
  });
}
function go(e) {
  let t = e.appid || void 0,
    n = v(t),
    { data: r } = F(n),
    { data: i } = Le(t ? void 0 : e.clanSteamID.GetAccountID());
  return (t ? r?.name : i?.group_name) || void 0;
}
var _o = {
    opened: Z.k_eReminder_Opened,
    "notify-email": Z.k_eReminder_Email,
    "notify-push": Z.k_eReminder_MobilePush,
    "email-unverified": Z.k_eReminder_EmailUnverified,
    "push-missing": Z.k_eReminder_MobilePushMissing,
    "calendar-apple": Z.k_eReminder_CalendarApple,
    "calendar-google": Z.k_eReminder_CalendarGoogle,
    "calendar-outlook": Z.k_eReminder_CalendarOutlook,
  },
  vo = `m7T1AR0hEMQ-`;
function yo(e) {
  let { MissingEventFallback: t } = e,
    { event: n, showErrorInfo: r } = e.context,
    i = T(e.args),
    a = !!i && i != n?.GID,
    { data: o, isPending: s } = Ye(
      a && n
        ? { clanAccountID: n.clanSteamID.GetAccountID(), eventGID: i }
        : void 0,
    );
  if (!a) return n ? (0, J.jsx)(ho, { eventModel: n, lang: e.language }) : null;
  if (n) {
    if (o) return (0, J.jsx)(ho, { eventModel: o, lang: e.language });
    if (s) return null;
  }
  return t
    ? (0, J.jsx)(t, { eventGID: i, lang: e.language, bShowErrorInfo: !!r })
    : r
      ? (0, J.jsx)(bo, { eventGID: i })
      : null;
}
function bo({ eventGID: e }) {
  return (0, J.jsx)(`div`, {
    className: vo,
    children: R(`#EventDidplay_Reminder_EventNotVisible`, e),
  });
}
var xo = e(n()),
  So = e(ct(), 1),
  Co = new Map([[`remindme`, { Constructor: wo, autocloses: !1 }]]);
function wo(e) {
  return (0, J.jsx)(yo, { ...e, MissingEventFallback: To });
}
function To({ eventGID: e, lang: t, bShowErrorInfo: n }) {
  let r = Ae(e);
  return r
    ? (0, J.jsx)(ho, { eventModel: r, lang: t })
    : n
      ? (0, J.jsx)(bo, { eventGID: e })
      : null;
}
function Eo(e) {
  if (e === `GameAwardDrop2022`) {
    let t = fe(e),
      n = be();
    return t
      ? t.registered
        ? {
            bInitialState: !1,
            bSuccessState: t.eligible,
            bFailedState: !t.eligible,
            fnAction: t.eligible
              ? void 0
              : async () => {
                  await n.fnCreateRegistration(e);
                },
          }
        : {
            bInitialState: !0,
            fnAction: async () => {
              await n.fnCreateRegistration(e);
            },
          }
      : { bInitialState: !0 };
  }
  return { bInitialState: !0 };
}
function Do(e) {
  let t = T(e.args, `action`),
    n = T(e.args, `initialToken`),
    r = T(e.args, `successToken`),
    i = T(e.args, `failToken`),
    a = Eo(t),
    { elDialogElement: o, fnShowLogonDialog: s } = ye(),
    [c, l, u] = G();
  return !t || !n || !r || !i
    ? e.context.showErrorInfo
      ? (0, J.jsx)(`div`, {
          children: `Failed to provide all tokens. Dialog will not appear`,
        })
      : null
    : !W.logged_in && t != `test` && t != `nologinrequired`
      ? (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(L, {
              className: `CSSActionDialogButton`,
              onClick: s,
              children: R(`#Login_SignIn`),
            }),
            o,
          ],
        })
      : (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsxs)(L, {
              className: `CSSActionDialogButton`,
              onClick: l,
              children: [
                !!a.bInitialState && R(n),
                !!a.bSuccessState && R(r),
                !!a.bFailedState && R(i),
              ],
            }),
            (0, J.jsx)(A, {
              active: c,
              children: (0, J.jsx)(Oo, {
                strAction: t,
                strInitialToken: n,
                strSuccessToken: r,
                strFailToken: i,
                closeModal: u,
                children: e.children,
              }),
            }),
          ],
        });
}
function Oo(e) {
  let {
      strAction: t,
      children: n,
      closeModal: r,
      strInitialToken: i,
      strSuccessToken: a,
      strFailToken: o,
    } = e,
    s = Eo(t),
    [c, l] = q.useState(!!s.fnAction),
    u = q.useRef(!1);
  q.useEffect(() => {
    s.fnAction &&
      !u.current &&
      ((u.current = !0), l(!0), s.fnAction().finally(() => l(!1)));
  }, [s]);
  let d = q.useId();
  return (0, J.jsxs)(Zn, {
    bDisableBackgroundDismiss: !0,
    closeModal: r,
    onCancel: r,
    className: `CSSActionDialogDialog`,
    "aria-labelledby": d,
    children: [
      (0, J.jsxs)(dr, {
        id: d,
        children: [
          !!s.bInitialState && R(i),
          !!s.bSuccessState && R(a),
          !!s.bFailedState && R(o),
        ],
      }),
      (0, J.jsx)(zt, {
        children: (0, J.jsx)(It, {
          children: c
            ? (0, J.jsx)(w, {
                size: `medium`,
                position: `center`,
                string: R(`#Loading`),
              })
            : n,
        }),
      }),
    ],
  });
}
function ko(e) {
  let t = !!e.context.showErrorInfo,
    { elDialogElement: n, fnShowLogonDialog: r } = ye();
  if (!W.logged_in)
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(L, {
          onClick: r,
          className: `CSSClaimItemLoginButton`,
          children: R(`#Sale_ClaimableReward_Login`),
        }),
        n,
      ],
    });
  let i = T(e.args, `type`),
    a;
  if (i)
    switch (i) {
      case `profilemodifier`:
        a = 8;
        break;
      case `sticker`:
        a = 11;
    }
  return (0, J.jsx)(Hi, { bPreviewMode: t, rewardType: a });
}
function Ao(e) {
  let t = T(e.args, `name`),
    n = (T(e.args, `visible`) || `false`).toLowerCase() === `true`,
    r = fe(t);
  return t
    ? !r || !r.registered
      ? null
      : (r.eligible && n) || (!r.eligible && !n)
        ? (0, J.jsx)(J.Fragment, { children: e.children })
        : null
    : e.context.showErrorInfo
      ? (0, J.jsx)(`div`, { children: `Failed to provide giveaway name` })
      : null;
}
function jo(e, t) {
  let n = q.useCallback(
    (e) => {
      e.preventDefault(), (e.returnValue = t);
    },
    [t],
  );
  Tt(window, `beforeunload`, e ? n : void 0),
    q.useEffect(() => {
      if (!e || !window.navigation) return;
      let n = (e) => {
        (e.navigationType != `push` && e.navigationType != `traverse`) ||
          e.hashChange ||
          e.downloadRequest !== null ||
          !e.cancelable ||
          window.confirm(t) ||
          e.preventDefault();
      };
      return (
        window.navigation.addEventListener(`navigate`, n),
        () => window.navigation.removeEventListener(`navigate`, n)
      );
    }, [e, t]);
}
var Mo = `UsXiB1C-X8I-`;
function No(e) {
  let { bExpanded: t, setExpanded: n } = e;
  return (0, J.jsx)(Sn, {
    className: (0, ha.default)(Mo, t && `kQONFOetCiQ-`),
    onClick: () => n(!t),
    children: (0, J.jsx)(tn, { direction: `down` }),
  });
}
var Po = `meetsteam/updateregistration`,
  Fo = `meetsteam/attendance_qrcode`;
async function Io(e, t) {
  let n = new URL(V.STORE_BASE_URL + e);
  for (let [e, r] of Object.entries(t)) n.searchParams.set(e, r);
  let r = await fetch(n, { credentials: `include` });
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  return await r.json();
}
async function Lo(e) {
  return (await Io(`meetsteam/availability`, { gid: e })).availability ?? [];
}
async function Ro(e) {
  return (await Io(`meetsteam/registrations`, { gid: e })).registrations ?? [];
}
async function zo(e) {
  return (
    (await Io(`meetsteam/registrationdetails`, { gid: e })).strJSONData ?? ``
  );
}
async function Bo() {
  return (
    (await Io(`meetsteam/registrantinfo`, {})).info ?? {
      realname: ``,
      email: ``,
      partners: [],
    }
  );
}
async function Vo(e, t) {
  return await Io(Fo, { gid: e, accountid: String(t) });
}
async function Ho(e) {
  let t = V.STORE_BASE_URL + Po,
    n = new URLSearchParams({
      gid: e.gid,
      group_id: String(e.group_id),
      session_id: String(e.session_id),
      guest_count: String(e.guest_count),
      jsondata: e.jsondata,
      skip_email: e.skip_email ? `1` : `0`,
    }),
    r = await fetch(t, { method: `POST`, credentials: `include`, body: n });
  if (!r.ok) throw Error(`${t} answered ${r.status}`);
  return (await r.json()).success;
}
var Uo = `America/Los_Angeles`;
function Wo(e, t) {
  return {
    queryKey: Ko(e, t),
    queryFn: () => Lo(t),
    enabled: Ie() == e,
    staleTime: In.PerMinute * 10,
  };
}
function Go(e, t) {
  return l(Wo(e, t));
}
var Ko = (e, t) => [`useMeetSteamGetAvailability`, e, t];
function qo(e, t, n) {
  return {
    queryKey: Yo(e, t, n),
    queryFn: async () => {
      let e = await zo(t);
      return e ? JSON.parse(e) : {};
    },
    enabled: Ie() == e && !!n,
  };
}
function Jo(e, t, n) {
  return l(qo(e, t, n));
}
var Yo = (e, t, n) => [`useMeetSteamGetRegistrationDetails`, e, t, n];
function Xo(e) {
  return {
    queryKey: [`MeetSteamRegistrantInfo`, e],
    queryFn: () => Bo(),
    enabled: !!e,
    staleTime: In.PerMinute * 10,
  };
}
function Zo(e) {
  return l(Xo(e));
}
function Qo(e, t) {
  return {
    queryKey: [`useMeetSteamQRCode`, e, t],
    queryFn: () => Vo(e, t),
    enabled: !!t && !0,
    staleTime: In.PerMinute * 10,
  };
}
function $o(e, t) {
  return l(Qo(e, t)).data?.qrcode;
}
function es(e, t = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return e.location_type === `in_person`
    ? (e.in_person_time_zone ?? `America/Los_Angeles`)
    : t;
}
function ts(e) {
  let t = Kt();
  return g(() => ({
    rtime_start: e.rtime_start,
    rtime_end: e.rtime_end,
    sDisplayTimeZone: es(e, t),
  }));
}
function ns(e, t) {
  let n = X.default.unix(e),
    r = X.default.unix(e).tz(t).utcOffset() - n.utcOffset();
  return new Date((e + r * 60) * 1e3);
}
function rs(e, t) {
  let n = ns(e, t),
    r = new Date();
  return n.getFullYear() == r.getFullYear() ? Kn(n) : ir(n);
}
function is(e, t, n, r) {
  let i = X.default.unix(e),
    a = X.default.unix(e).tz(n).utcOffset() - i.utcOffset(),
    o = X.default.unix(t),
    s = X.default.unix(t).tz(n),
    c = s.utcOffset() - o.utcOffset();
  return Dn(e + a * 60, t + c * 60, !0) + (r ? `` : ` ` + s.format(`z`));
}
var as = new Map(),
  os = ``,
  ss = 0;
function cs(e, t) {
  return [`MeetSteamRegistrations`, e, t];
}
function ls(e, t) {
  return [`MeetSteamSelections`, e, t];
}
function us(e) {
  return {
    queryKey: cs(e?.gidClanEvent ?? os, e?.userAccountID ?? ss),
    queryFn: async () => {
      if (!e) return as;
      let t = await Ro(e.gidClanEvent),
        n = new Map();
      return (
        t.forEach((e) => {
          let t = {
            ...e,
            regmodel: e.jsondata ? JSON.parse(e.jsondata) : void 0,
          };
          t.group_id !== void 0 &&
            t.session_id !== void 0 &&
            n.set(t.group_id, t);
        }),
        n
      );
    },
    enabled: !!e && Ie() == e?.clanAccountID && !!e?.userAccountID,
  };
}
function ds(e, t) {
  return {
    queryKey: ls(e, t),
    queryFn: () => null,
    initialData: null,
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  };
}
var fs = q.createContext(void 0);
function ps(e) {
  let { clanAccountID: t, gidClanEvent: n, userAccountID: r, children: i } = e,
    a = q.useMemo(
      () => ({ clanAccountID: t, gidClanEvent: n, userAccountID: r }),
      [t, n, r],
    );
  return (0, J.jsx)(fs.Provider, { value: a, children: i });
}
function Q() {
  let e = q.useContext(fs),
    t = l(us(e)),
    n = l(ds(e?.gidClanEvent ?? os, e?.userAccountID ?? ss)),
    r = t.data ?? as;
  return q.useMemo(
    () => ({
      registrations: r,
      selections: n.data ?? ms(r),
      bLoading: t.isFetching,
    }),
    [r, n.data, t.isFetching],
  );
}
function ms(e) {
  let t = new Map();
  return (
    e.forEach((e, n) => {
      e.session_id !== void 0 && t.set(n, e.session_id);
    }),
    t
  );
}
function hs(e, t) {
  return t === void 0 ? void 0 : e.selections.get(t);
}
function gs(e) {
  return Array.from(e.selections.keys());
}
function _s(e, t, n) {
  if (t === void 0 || n === void 0) return 0;
  let r = e.registrations.get(t)?.session_id == n,
    i = e.selections.get(t) == n;
  return r && i ? 1 : !r && i ? 2 : r && !i ? 3 : 0;
}
function vs(e, t, n) {
  if (t === void 0 || n === void 0) return !1;
  let r = !!e.registrations.get(t),
    i = e.selections.get(t) == n,
    a = e.registrations.get(t)?.session_id == e.selections.get(t);
  return r && !i && a;
}
function ys(e, t) {
  return t === void 0 ? void 0 : e.registrations.get(t)?.session_id;
}
function bs(e) {
  return e.selections.size == 0 && e.registrations.size == 0
    ? !1
    : e.selections.size != e.registrations.size ||
        !Array.from(e.selections.entries()).every(
          (t) => e.registrations.get(t[0])?.session_id == t[1],
        );
}
function xs(e) {
  return Array.from(e.selections.entries()).some((t) => {
    let n = e.registrations.get(t[0]);
    return !n || n.session_id != t[1];
  });
}
function Ss(e) {
  return e.registrations.size > 0;
}
function Cs() {
  return Q().bLoading;
}
function ws() {
  return bs(Q());
}
function Ts() {
  return Ss(Q());
}
function Es(e, t) {
  return Ds(
    Q(),
    e.filter((e) => !!e.ask_registration_question),
    t,
  );
}
function Ds(e, t, n) {
  return t
    .filter((t) => t.sessions.some((r) => _s(e, t.group_id, r.id) == n))
    .map((e) => e.group_id)
    .filter((e) => e !== void 0);
}
function Os(e, t, n, r) {
  n !== void 0 &&
    e.setQueryData(ls(t.gidClanEvent, t.userAccountID), (i) => {
      let a = e.getQueryData(cs(t.gidClanEvent, t.userAccountID)) ?? as,
        o = new Map(i ?? ms(a));
      return r !== void 0 && r > 0 ? o.set(n, r) : o.delete(n), o;
    });
}
function ks() {
  let e = q.useContext(fs),
    t = p(),
    n = Q();
  return q.useCallback(
    (r, i) => {
      if (!e) return;
      let a = hs(n, r) == i;
      Os(t, e, r, a ? void 0 : i);
    },
    [e, t, n],
  );
}
function As() {
  let e = q.useContext(fs),
    t = p(),
    n = Q(),
    { mutateAsync: r } = s({
      mutationFn: async (r) => {
        if (!e) return !1;
        let i = Object.fromEntries(
            Object.entries(r).filter(
              ([e]) => !e.startsWith(`registration_emailed_`),
            ),
          ),
          a = [];
        for (let [t, o] of n.selections)
          a.push({
            gid: e.gidClanEvent,
            group_id: t,
            session_id: o,
            guest_count: r.guests_registered ?? 1,
            jsondata: JSON.stringify(i),
            skip_email: !1,
          });
        for (let t of n.registrations.keys())
          n.selections.has(t) ||
            a.push({
              gid: e.gidClanEvent,
              group_id: t,
              session_id: 0,
              guest_count: 0,
              jsondata: JSON.stringify({}),
              skip_email: !1,
            });
        let o = !0;
        for (let e = 0; e < a.length; e++) {
          let t = await Ho({ ...a[e], skip_email: e != a.length - 1 });
          o &&= t == 1;
        }
        return (
          t.setQueryData(ls(e.gidClanEvent, e.userAccountID), null),
          await t.invalidateQueries({
            queryKey: cs(e.gidClanEvent, e.userAccountID),
          }),
          o
        );
      },
    });
  return r;
}
var js = /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
  Ms = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
function Ns(e) {
  let t = [];
  for (let n of e.matchAll(js))
    t.push({
      strTag: n[1].toLowerCase(),
      nID: Number(Ms.exec(n[2])?.[1] ?? 0),
    });
  return t;
}
function Ps(e, t) {
  return (
    e === void 0 ||
    Ns(e).find((e) => e.strTag == `meetsteamsessiongroup`)?.nID == t
  );
}
function Fs(e, t, n) {
  if (e === void 0) return !0;
  let r = Ns(e),
    i = r[r.length - 1];
  return i?.strTag == t && i.nID == n;
}
var Is = q.createContext(null);
function Ls() {
  return q.useContext(Is);
}
var Rs = `W-F7GLCqlcg-`,
  zs = `bilOH9M934k-`,
  Bs = `agQ2BkMSeCM-`,
  Vs = `_9pkUjSUWRSQ-`,
  Hs = `BCyPVJOGhgM-`,
  Us = `JpmP7DWHpp0-`,
  Ws = `q8jAq4KzxAM-`,
  Gs = `deh5s-2tc5M-`,
  Ks = `mQfwtw56WrA-`,
  qs = `S1RYAnxBfII-`,
  Js = `B3xO2i-k6cM-`,
  Ys = `nZIJPOo7vBM-`,
  Xs = `nbc1xcxJWEU-`,
  Zs = `lC5ou-9b3nc-`,
  Qs = `OUTrt07mRK4-`,
  $s = `kZyobSpKcm8-`,
  ec = `Q2G049jKL5A-`,
  tc = `FvT0LzOkuOg-`,
  nc = `R5xCQ-5jSoc-`,
  rc = `RRmxXSqY2J4-`,
  ic = `OEZsEKTEoHM-`,
  ac = `pZUqA-PH2Go-`,
  oc = `_5FwT-TqGtrc-`,
  sc = `wO3Xgsj1Sm0-`,
  cc = `gBWKuzZ3gZU-`,
  lc = `AmH6OYf5Hbw-`,
  uc = [];
function dc(e) {
  let {
      eventModel: t,
      fnConfirm: n,
      fnHideModal: r,
      nMaxPerTeam: i,
      bAddingOrChangingSessions: a,
    } = e,
    o = $n(V.LANGUAGE),
    [s, c] = q.useState({}),
    [l, u] = q.useState(!1),
    d = q.useCallback(
      (e) => {
        c({ ...s, ...e });
      },
      [s],
    ),
    f = Jo(t.clanSteamID.GetAccountID(), t.GID ?? ``, W.accountid),
    { data: p } = Zo(W.accountid),
    m = p?.realname ?? ``,
    h = p?.email ?? ``,
    g = p?.partners ?? uc,
    [_, v] = q.useState(void 0),
    [y, b] = q.useState(void 0),
    x = q.useMemo(() => {
      let e = [];
      return (
        y ?? e.push({ data: void 0, label: R(`#MeetSteam_ChoosePartner`) }),
        e.push(
          ...g.map((e, t) => ({ data: e.partnerid, label: e.partner_name })),
        ),
        e.push({ data: 0, label: R(`#MeetSteam_ChoosePartnerOther`) }),
        e
      );
    }, [g, y]);
  q.useEffect(() => {
    if (!f.isSuccess) return;
    let e = g.find((e) => e.partnerid == f.data.partner_id),
      t = f.data.partner_id === 0 ? 0 : e?.partnerid;
    b(t), v(t), c(f.data);
  }, [f.isSuccess, f.data, g]);
  let S = g?.length > 0,
    C = !S || y != null,
    ee = C && y === 0;
  q.useEffect(() => {
    if (y == _ || (v(y), !S || !C)) return;
    let e,
      t = g.find((e) => e.partnerid == y);
    (e =
      ee || !t
        ? {
            name: h?.length > 0 ? m : void 0,
            email_override: h?.length > 0 ? h : void 0,
            partner_id: 0,
          }
        : {
            name:
              t.partneruserrealname?.length > 0
                ? t.partneruserrealname
                : void 0,
            company: t.partner_name?.length > 0 ? t.partner_name : void 0,
            email_override:
              t.partneruseremail?.length > 0 ? t.partneruseremail : void 0,
            partner_id: t.partnerid,
          }),
      Object.values(e).some((e) => e != null) && d(fc(e));
  }, [C, ee, S, y, _, g, h, m, d]);
  let te = f.isLoading || l,
    ne = a
      ? R(`#MeetSteam_Register_title`, t.GetNameWithFallback(o) ?? ``)
      : R(`#MeetSteam_Unregister_title`),
    re =
      !a ||
      (C &&
        !!s.name &&
        (!s.guest_names || s.guest_names.every((e) => e.length > 0)) &&
        !!s.email_override &&
        !!s.company);
  return (0, J.jsxs)(A, {
    active: !0,
    children: [
      te &&
        (0, J.jsx)(Zn, {
          "aria-label": R(l ? `#Saving` : `#Loading`),
          bOKDisabled: !0,
          bHideCloseIcon: !0,
          onCancel: () => !1,
          children: (0, J.jsx)(w, {
            size: `medium`,
            position: `center`,
            string: R(l ? `#Saving` : `#Loading`),
          }),
        }),
      !te &&
        (0, J.jsx)(an, {
          strTitle: ne,
          onCancel: r,
          bOKDisabled: !re,
          onOK: async () => {
            u(!0), await n(s), u(!1), f.refetch(), r();
          },
          children:
            a &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(`div`, { children: R(`#MeetSteam_Reg_Intro`) }),
                (0, J.jsx)(`br`, {}),
                S &&
                  (0, J.jsx)(Sr, {
                    label: R(`#MeetSteam_Reg_Preset`),
                    tooltip: R(`#MeetSteam_Reg_Preset_ttip`),
                    rgOptions: x,
                    selectedOption: y,
                    onChange: (e) => b(e.data),
                  }),
                C &&
                  (0, J.jsxs)(J.Fragment, {
                    children: [
                      (0, J.jsx)(un, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Name`),
                        value: s.name || ``,
                        onChange: (e) => d({ name: e.currentTarget.value }),
                      }),
                      (0, J.jsx)(un, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Email`),
                        value: s.email_override || ``,
                        mustBeEmail: !0,
                        onChange: (e) =>
                          d({ email_override: e.currentTarget.value }),
                      }),
                      (0, J.jsx)(un, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Company`),
                        value: s.company || ``,
                        onChange: (e) => d({ company: e.currentTarget.value }),
                      }),
                      (0, J.jsx)(un, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Game`),
                        value: s.game || ``,
                        onChange: (e) => d({ game: e.currentTarget.value }),
                      }),
                      i > 0 &&
                        (0, J.jsx)(Sr, {
                          label: R(`#MeetSteam_Reg_GuestCount`),
                          tooltip: R(`#MeetSteam_Reg_GuestCount_ttip`),
                          rgOptions: Array.from({ length: i + 1 }).map(
                            (e, t) => ({ data: t, label: t }),
                          ),
                          selectedOption: (s.guests_registered ?? 1) - 1,
                          onChange: (e) => {
                            let t = s.guest_names ?? [];
                            d({
                              guests_registered: e.data + 1,
                              guest_names:
                                t.length > e.data
                                  ? t.slice(0, e.data)
                                  : rn(t, e.data, ``),
                            });
                          },
                        }),
                      (s.guests_registered ?? 0) > 1 &&
                        (0, J.jsxs)(`div`, {
                          children: [
                            (0, J.jsx)(`div`, {
                              children: R(`#MeetSteam_Reg_Others`),
                            }),
                            (0, J.jsx)(`br`, {}),
                            (s.guest_names ?? []).map((e, t) =>
                              (0, J.jsx)(
                                un,
                                {
                                  type: `text`,
                                  label: R(`#MeetSteam_Reg_Others_name`),
                                  value: e,
                                  onChange: (e) => {
                                    let n = [...(s.guest_names ?? [])];
                                    (n[t] = e.currentTarget.value),
                                      d({ guest_names: n });
                                  },
                                },
                                `guesname_` + t,
                              ),
                            ),
                          ],
                        }),
                      (0, J.jsx)(pc, {
                        eventModel: t,
                        oReg: s,
                        fnUpdateRegistration: d,
                      }),
                    ],
                  }),
              ],
            }),
        }),
    ],
  });
}
function fc(e) {
  return Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0));
}
function pc(e) {
  let { eventModel: t, oReg: n, fnUpdateRegistration: r } = e,
    i = Es(t.jsondata.meet_steam_groups ?? [], 2);
  return !i || i.length == 0
    ? null
    : (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsx)(`h3`, { children: R(`#MeetSteam_Reg_Question_title`) }),
          (0, J.jsx)(`p`, { children: R(`#MeetSteam_Reg_Question_desc`) }),
          i.map((e) => {
            let i = t.jsondata.meet_steam_groups?.find((t) => t.group_id == e);
            return i
              ? (0, J.jsx)(
                  mc,
                  {
                    groupInfo: i,
                    oReg: n,
                    fnUpdateText: (t) => {
                      let i = n.pre_event_partner_questions
                          ? [...n.pre_event_partner_questions]
                          : [],
                        a = i.findIndex((t) => t.group_id == e);
                      a < 0
                        ? i.push({ group_id: e, question: t })
                        : (i[a] = { group_id: e, question: t }),
                        r({ pre_event_partner_questions: i });
                    },
                  },
                  `groupquestion` + e,
                )
              : null;
          }),
        ],
      });
}
function mc(e) {
  let { fnUpdateText: t, groupInfo: n, oReg: r } = e,
    i = $n(V.LANGUAGE),
    [a, o] = g(() => [
      I.GetWithFallback(n.localized_session_title, i) ?? ``,
      r.pre_event_partner_questions?.find((e) => e.group_id == n.group_id)
        ?.question || ``,
    ]);
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(Gn, { children: a }),
      (0, J.jsx)(`div`, {
        className: `DialogInput_Wrapper`,
        children: (0, J.jsx)(`textarea`, {
          value: o,
          className: K(`DialogTextInputBase`, `_DialogInputContainer`),
          cols: 80,
          rows: 3,
          placeholder: R(`#MeetSteam_Reg_Question_placeholder`),
          onChange: (e) => t(e.currentTarget.value),
        }),
      }),
    ],
  });
}
function hc(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = T(e.args, `group_id`),
    i = Number.parseInt(r),
    a = g(() => Tc(t, i));
  if (!a || !t)
    return n
      ? (0, J.jsxs)(`div`, {
          children: [`Failed to find session group id `, i],
        })
      : null;
  if (t.clanSteamID.GetAccountID() != Ie())
    return n
      ? (0, J.jsx)(`div`, { children: `Only support on special group` })
      : null;
  let o = Ps(e.context.bbcode, i),
    s = Fs(e.context.bbcode, `meetsteamsessiongroup`, i);
  return (0, J.jsxs)(ps, {
    clanAccountID: t.clanSteamID.GetAccountID(),
    gidClanEvent: t.GID ?? ``,
    userAccountID: W.accountid,
    children: [
      o && (0, J.jsx)(gc, { eventModel: t }),
      (0, J.jsx)(vc, { groupData: a, eventModel: t }),
      (0, J.jsx)(wc, { eventModel: t, bIsLast: s }),
    ],
  });
}
function gc(e) {
  let { eventModel: t } = e;
  return Ts()
    ? (0, J.jsx)(_c, { eventModel: t, accountID: W.accountid })
    : null;
}
function _c(e) {
  let { eventModel: t, accountID: n } = e,
    r = $o(t.GID ?? ``, n);
  return (0, J.jsx)(`div`, {
    children:
      !!r &&
      (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(`div`, { children: R(`#MeetSteam_QR_CheckIn`) }),
          (0, J.jsx)(`img`, { src: r, alt: `` }),
        ],
      }),
  });
}
function vc(e) {
  let { groupData: t, eventModel: n } = e,
    r = Pr(),
    i = Ls(),
    a = Cs(),
    o = Go(n.clanSteamID.GetAccountID(), n.GID ?? ``),
    s = (0, q.useMemo)(
      () =>
        t?.sessions &&
        [...t.sessions].sort(
          (e, t) => (e.rtime_start ?? 0) - (t.rtime_start ?? 0),
        ),
      [t?.sessions],
    ),
    { elLogInDialog: c, fnRequireLogIn: l } = Dc(),
    u = Q(),
    d = g(() =>
      s?.reduce((e, n) => e.set(n.id ?? 0, _s(u, t.group_id, n.id)), new Map()),
    ),
    f = ks(),
    p = Jo(n.clanSteamID.GetAccountID(), n.GID ?? ``, W.accountid),
    m = p.isSuccess && !!p.data.allow_registration_if_full,
    h = o.data;
  if (o.isError)
    return (0, J.jsx)(`div`, {
      children: R(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (!h || (a && W.accountid))
    return (0, J.jsx)(w, {
      size: `medium`,
      position: `center`,
      string: R(`#Loading`),
    });
  let _ = (e) => f(t.group_id, e),
    v = t.group_visibility_tokens ?? [],
    y = i !== null && v.includes(i);
  return v.length > 0 && !y && !r
    ? null
    : (0, J.jsxs)(yc, {
        groupData: t,
        children: [
          s?.map((e, n) => {
            let r = h.find(
                (n) => n.group_id === t.group_id && n.session_id === e.id,
              ),
              i = d?.get(e.id ?? 0),
              a = n + 1 < s.length;
            return (0, J.jsxs)(
              q.Fragment,
              {
                children: [
                  (0, J.jsx)(`div`, {
                    className: Gs,
                    children: (0, J.jsx)(xc, {
                      sessionData: e,
                      onClick: () => l(() => _(e.id)),
                      nGuestReservations: r?.guest_count || 0,
                      eRegistrationStatus: i,
                      bAllowedToRegisterIfFull: m,
                    }),
                  }),
                  a && (0, J.jsx)(Cc, {}),
                ],
              },
              `timecol_` + t.group_id + `_` + e.id,
            );
          }),
          c,
        ],
      });
}
function yc(e) {
  let { groupData: t, children: n } = e,
    r = $n(V.LANGUAGE),
    i = I.GetWithFallback(t?.localized_session_title, r),
    a = I.GetWithFallback(t?.localized_session_description, r),
    o = I.GetWithFallback(t?.localized_intended_audience, r),
    s = I.GetWithFallback(t?.localized_sesssion_faq, r),
    c = Pr(),
    [l, u] = (0, q.useState)(!1);
  return t
    ? (0, J.jsxs)(`div`, {
        className: K({
          [Rs]: !0,
          [Bs]: !1,
          [zs]: c && (t.group_visibility_tokens?.length ?? 0) > 0,
        }),
        children: [
          !!i && (0, J.jsx)(`div`, { className: `_9pkUjSUWRSQ-`, children: i }),
          !!a && (0, J.jsx)(`div`, { className: `_44vexuSzOpI-`, children: a }),
          !!o &&
            (0, J.jsx)(`div`, {
              className: `Z3-m6-rkasQ-`,
              children: R(`#MeetSteam_Session_Audience`, o ?? ``),
            }),
          (0, J.jsx)(`div`, { className: Us, children: n }),
          !!s &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsxs)(`div`, {
                  className: `kWmpNwJ92-k-`,
                  children: [
                    (0, J.jsx)(No, { bExpanded: l, setExpanded: u }),
                    (0, J.jsx)(`div`, { children: R(`#MeetSteam_FAQ`) }),
                  ],
                }),
                l &&
                  (0, J.jsx)(`div`, {
                    className: `jvyIIEyjFZw-`,
                    children: (0, J.jsx)(nt, { text: s ?? `` }),
                  }),
              ],
            }),
        ],
      })
    : null;
}
function bc(e, t, n, r) {
  let i = n || (e === 0 && t > 0) || e === 1 || e === 2 || e === 3,
    a = null,
    o = null;
  return (
    e == 1
      ? ((a = R(`#MeetSteam_Registered`)), (o = Qs))
      : e == 2
        ? ((a = R(`#MeetSteam_Registering`)), (o = Zs))
        : e == 3
          ? ((a = R(`#MeetSteam_Unegistering`)), (o = ec))
          : r && ((a = R(`#MeetSteam_Already`)), (o = $s)),
    { bEnabled: i, strStatusClass: o, strStatusToken: a }
  );
}
function xc(e) {
  let {
      sessionData: t,
      onClick: n,
      nGuestReservations: r,
      eRegistrationStatus: i = 0,
      bAllowedToRegisterIfFull: a,
    } = e,
    o = g(() => t.max_capacity ?? 0),
    s = Math.max(0, o - (r || 0)),
    { strStatusClass: c, strStatusToken: l, bEnabled: u } = bc(i, s, !!a),
    { sDisplayTimeZone: d, rtime_start: f, rtime_end: p } = ts(t),
    m = rs(f ?? 0, d),
    h = is(f ?? 0, p ?? 0, d);
  return (0, J.jsx)(J.Fragment, {
    children: (0, J.jsxs)(`div`, {
      className: K(Ks, c),
      children: [
        (0, J.jsx)(`div`, {
          className: tc,
          children: (0, J.jsx)(`span`, { children: l }),
        }),
        (0, J.jsxs)(`button`, {
          className: K(Js, qs),
          disabled: !u,
          onClick: n,
          children: [
            (0, J.jsx)(`div`, { className: Ys, children: m }),
            (0, J.jsx)(`div`, { className: Xs, children: h }),
          ],
        }),
        (0, J.jsx)(Sc, { nAvailableSpace: s, bAllowedToRegisterIfFull: a }),
      ],
    }),
  });
}
function Sc(e) {
  let { nAvailableSpace: t, bAllowedToRegisterIfFull: n } = e;
  return (0, J.jsx)(J.Fragment, {
    children:
      n ||
      (0, J.jsxs)(J.Fragment, {
        children: [
          ` `,
          t < 1
            ? (0, J.jsx)(`div`, {
                className: `oojf8t--dHM-`,
                children: R(`#MeetSteam_SoldOut`),
              })
            : (0, J.jsx)(`div`, {
                className: `LG2AAuUnr-g-`,
                children: En(`#MeetSteam_Spot`, t.toLocaleString(Ot())),
              }),
          ` `,
        ],
      }),
  });
}
function Cc() {
  return (0, J.jsx)(`div`, { className: Ws, children: `◆` });
}
function wc(e) {
  let { eventModel: t, bIsLast: n } = e,
    [r, i] = q.useState(!1),
    [a, o] = q.useState(!1),
    s = Go(t.clanSteamID.GetAccountID(), t.GID ?? ``),
    [c, l, u] = G(),
    { elLogInDialog: d, fnRequireLogIn: f } = Dc(),
    p = As(),
    m = async (e) => {
      i(!0), (await p(e)) || l(), s.refetch(), i(!1);
    },
    h = Cs(),
    _ = r || h,
    v = ws(),
    y = Q(),
    b = xs(y),
    x = Ss(y),
    S = g(() =>
      gs(y).reduce((e, n) => {
        let r = Tc(t, n),
          i = hs(y, r?.group_id),
          a = r?.sessions?.find((e) => e.id == i)?.max_per_team ?? 0;
        return Math.max(e, a);
      }, 1),
    );
  return (
    jo(v, R(`#EventEditor_UnsavedChanges`)),
    (0, J.jsxs)(`div`, {
      className: K(nc, n && v && `_1Uk08Y71bw4-`),
      children: [
        (0, J.jsx)(`p`, {
          children: R(
            x
              ? `#MeetSteam_UpdateRegistration_Desc`
              : `#MeetSteam_CompleteRegistration_Desc`,
          ),
        }),
        n &&
          (0, J.jsxs)(J.Fragment, {
            children: [
              !_ &&
                (0, J.jsx)(qn, {
                  disabled: !v,
                  onClick: () => f(() => o(!0)),
                  children: R(
                    x
                      ? `#MeetSteam_UpdateRegistration`
                      : `#MeetSteam_CompleteRegistration`,
                  ),
                }),
              _ &&
                (0, J.jsx)(w, {
                  size: `small`,
                  position: `center`,
                  string: R(`#Saving`),
                }),
              a &&
                (0, J.jsx)(dc, {
                  eventModel: t,
                  fnConfirm: m,
                  fnHideModal: () => o(!1),
                  nMaxPerTeam: S,
                  bAddingOrChangingSessions: b,
                }),
              c &&
                (0, J.jsx)(A, {
                  active: !0,
                  children: (0, J.jsx)(Mt, {
                    strTitle: R(`#Error_Generic`),
                    strDescription: R(`#MeetSteam_RegistrationFailed`),
                    closeModal: u,
                  }),
                }),
              d,
            ],
          }),
      ],
    })
  );
}
function Tc(e, t) {
  return (e?.jsondata?.meet_steam_groups || [])?.find((e) => e.group_id == t);
}
function Ec(e, t) {
  return (e?.jsondata?.meet_steam_schedules || [])?.find(
    (e) => e.schedule_id == t,
  );
}
function Dc() {
  let { elDialogElement: e, fnShowLogonDialog: t } = ye(
    R(`#EventDisplay_Share_NotLoggedIn_Description`),
  );
  return {
    elLogInDialog: e,
    fnRequireLogIn: (e) => {
      W.logged_in ? e() : t();
    },
  };
}
function Oc(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = T(e.args, `schedule_id`),
    i = Number.parseInt(r),
    a = g(() => Ec(t, i));
  if (!a || !t)
    return n
      ? (0, J.jsxs)(`div`, {
          children: [`Failed to find session schedule id `, i],
        })
      : null;
  if (t.clanSteamID.GetAccountID() != Ie())
    return n
      ? (0, J.jsx)(`div`, { children: `Only support on special group` })
      : null;
  let o = Fs(e.context.bbcode, `meetsteamscheduleview`, i);
  return (0, J.jsxs)(ps, {
    clanAccountID: t.clanSteamID.GetAccountID(),
    gidClanEvent: t.GID ?? ``,
    userAccountID: W.accountid,
    children: [
      (0, J.jsx)(kc, { scheduleData: a, eventModel: t }),
      (0, J.jsx)(wc, { eventModel: t, bIsLast: o }),
    ],
  });
}
function kc(e) {
  let { eventModel: t } = e,
    n = ks(),
    r = Cs(),
    i = Go(t.clanSteamID.GetAccountID(), t.GID ?? ``),
    a = Jo(t.clanSteamID.GetAccountID(), t.GID ?? ``, W.accountid),
    o = i.data;
  return i.isError
    ? (0, J.jsx)(`div`, { children: R(`#Error_ErrorCommunicatingWithNetwork`) })
    : !o || (r && W.accountid)
      ? (0, J.jsx)(w, {
          size: `medium`,
          position: `center`,
          string: R(`#Loading`),
        })
      : (0, J.jsx)(Ac, {
          ...e,
          fnOnClick: n,
          rgAvailability: o,
          bAllowedToRegisterIfFull: a.data?.allow_registration_if_full,
        });
}
function Ac(e) {
  let {
      eventModel: t,
      scheduleData: n,
      bAllowedToRegisterIfFull: r,
      fnOnClick: i,
      rgAvailability: a,
    } = e,
    o = Fr(),
    s = Ls(),
    c = Kt(),
    [l, u, d] = g(() => [
      t.jsondata.meet_steam_groups,
      n.in_person_time_zone ?? `America/Los_Angeles`,
      n.location_type,
    ]),
    [f, p, m] = (0, q.useMemo)(() => {
      if (!l) return [new Map(), new Map(), []];
      let e = new Map(),
        t = new Map();
      for (let t of l) {
        let n = t.group_visibility_tokens ?? [],
          r = s !== null && n.includes(s);
        if (!(n.length > 0 && !r && !o))
          for (let n of t.sessions) {
            let r = (
                d == `in_person`
                  ? X.default.unix(n.rtime_start ?? 0).tz(u)
                  : X.default.unix(n.rtime_start ?? 0).tz(c)
              ).format(`YYYY-MM-DD`),
              i = e.get(r);
            i || ((i = []), e.set(r, i)), i.push({ group: t, session: n });
          }
      }
      for (let e of n.session_breaks || []) {
        let n = (
            d == `in_person`
              ? X.default.unix(e.rtime_start ?? 0).tz(u)
              : X.default.unix(e.rtime_start ?? 0).tz(c)
          ).format(`YYYY-MM-DD`),
          r = t.get(n);
        r || ((r = []), t.set(n, r)), r.push(e);
      }
      for (let t of e.values())
        t.sort(
          (e, t) => (e.session.rtime_start ?? 0) - (t.session.rtime_start ?? 0),
        );
      return [e, t, Array.from(e.keys()).sort()];
    }, [l, s, o, d, u, c, n.session_breaks]);
  return l
    ? (0, J.jsx)(J.Fragment, {
        children: m.map((e) => {
          let t = f.get(e);
          return (0, J.jsx)(
            `div`,
            {
              className: rc,
              children: (0, J.jsx)(jc, {
                scheduleData: n,
                bAllowedToRegisterIfFull: !!r,
                fnOnClick: i,
                rgDayGroupSessions: t ?? [],
                rgBreakSessions: p.get(e) || [],
                rgAvailability: a ?? [],
              }),
            },
            `day_` + e,
          );
        }),
      })
    : (0, J.jsx)(`div`, {
        children: `No Meet Steam Events; please create some first.`,
      });
}
function jc(e) {
  let {
      scheduleData: t,
      rgDayGroupSessions: n,
      rgBreakSessions: r,
      bAllowedToRegisterIfFull: i,
      fnOnClick: a,
      rgAvailability: o,
    } = e,
    s = (0, q.useMemo)(() => {
      let e = [];
      for (let t of n)
        e.length == 0 ||
        e[e.length - 1][0].session.rtime_start != t.session.rtime_start
          ? e.push([t])
          : e[e.length - 1].push(t);
      return e;
    }, [n]),
    { sDisplayTimeZone: c, rtime_start: l } = ts(n[0].session),
    u = rs(l ?? 0, c);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(`h2`, { className: ic, children: u }),
      r
        .filter((e) => (e.rtime_end ?? 0) <= (s[0][0].session.rtime_start ?? 0))
        .map((e) =>
          (0, J.jsx)(
            Mc,
            { scheduleData: t, breakSession: e },
            `breaks_${t.schedule_id}_${e.break_id}`,
          ),
        ),
      s.map((e, n) => {
        let c = [];
        if (n + 1 < s.length) {
          let t = e[0].session.rtime_start ?? 0,
            i = s[n + 1][0].session.rtime_end ?? 0;
          c = r.filter(
            (e) => t < (e.rtime_start ?? 0) && (e.rtime_end ?? 0) < i,
          );
        }
        return (0, J.jsxs)(
          q.Fragment,
          {
            children: [
              (0, J.jsx)(Nc, {
                bAllowedToRegisterIfFull: i,
                fnOnClick: a,
                scheduleData: t,
                rgSlotSessions: e,
                rgAvailability: o,
              }),
              c.map((e) =>
                (0, J.jsx)(
                  Mc,
                  { scheduleData: t, breakSession: e },
                  `breaks_${t.schedule_id}_${e.break_id}`,
                ),
              ),
            ],
          },
          `start_` + e[0].session.rtime_start,
        );
      }),
      r
        .filter(
          (e) =>
            (e.rtime_start ?? 0) >= (s[s.length - 1][0].session.rtime_end ?? 0),
        )
        .map((e) =>
          (0, J.jsx)(
            Mc,
            { scheduleData: t, breakSession: e },
            `breaks_${t.schedule_id}_${e.break_id}`,
          ),
        ),
    ],
  });
}
function Mc(e) {
  let { scheduleData: t, breakSession: n } = e,
    r = $n(V.LANGUAGE),
    i = g(() => I.GetWithFallback(n.localized_break_description, r) ?? ``),
    a = g(() => ({
      rtime_start: n.rtime_start,
      rtime_end: n.rtime_end,
      location_type: t.location_type,
      in_person_time_zone: t.in_person_time_zone,
    }));
  return (0, J.jsxs)(`div`, {
    className: ac,
    children: [
      (0, J.jsx)(Pc, { session: a }),
      (0, J.jsx)(`div`, { children: i }),
    ],
  });
}
function Nc(e) {
  let {
    scheduleData: t,
    rgSlotSessions: n,
    bAllowedToRegisterIfFull: r,
    fnOnClick: i,
    rgAvailability: a,
  } = e;
  return (0, J.jsxs)(`div`, {
    className: ac,
    children: [
      (0, J.jsx)(Pc, { session: n[0].session }),
      (0, J.jsx)(`div`, {
        className: cc,
        children: n.map((e) =>
          (0, J.jsx)(
            Fc,
            {
              bAllowedToRegisterIfFull: r,
              fnOnClick: i,
              session: e,
              rgAvailability: a,
            },
            `entry_${e.group.group_id}_${e.session.id}`,
          ),
        ),
      }),
    ],
  });
}
function Pc(e) {
  let { session: t } = e,
    { sDisplayTimeZone: n, rtime_start: r, rtime_end: i } = ts(t),
    a = rs(r ?? 0, n),
    o = is(r ?? 0, i ?? 0, n);
  return (0, J.jsxs)(`div`, {
    className: oc,
    children: [
      (0, J.jsx)(`div`, { children: o }),
      (0, J.jsx)(`div`, { className: sc, children: a }),
    ],
  });
}
function Fc(e) {
  let {
      session: t,
      bAllowedToRegisterIfFull: n,
      fnOnClick: r,
      rgAvailability: i,
    } = e,
    a = $n(V.LANGUAGE),
    [o, s, c, l] = g(() => [
      I.GetWithFallback(t.group.localized_session_title, a) ?? ``,
      I.GetWithFallback(t.group.localized_intended_audience, a) ?? ``,
      I.GetWithFallback(t.group.localized_sesssion_faq, a) ?? ``,
      I.GetWithFallback(t.group.localized_session_description, a) ?? ``,
    ]),
    [u, d, f] = G(!1),
    p = Q(),
    [m, h, _] = g(() => [
      _s(p, t.group.group_id, t.session.id),
      vs(p, t.group.group_id, t.session.id),
      ys(p, t.group.group_id),
    ]),
    v = i?.find(
      (e) => e.group_id === t.group.group_id && e.session_id === t.session.id,
    )?.guest_count,
    y = Math.max(0, (t.session.max_capacity ?? 0) - (v || 0)),
    { strStatusClass: b, strStatusToken: x, bEnabled: S } = bc(m, y, n, h),
    C = h && _ ? t.group.sessions.find((e) => e.id == _)?.rtime_start : void 0;
  return (0, J.jsx)(Pn, {
    toolTipContent: C ? R(`#MeetSteam_AlreadyReg`, bn(C), Cn(C)) : void 0,
    children: (0, J.jsxs)(`div`, {
      className: K(Ks, b),
      children: [
        (0, J.jsx)(`div`, {
          className: tc,
          children: (0, J.jsx)(`span`, { children: x }),
        }),
        (0, J.jsxs)(`div`, {
          className: qs,
          children: [
            (0, J.jsx)(`div`, { className: Vs, children: o }),
            s &&
              (0, J.jsx)(`div`, {
                className: `Z3-m6-rkasQ-`,
                children: R(`#MeetSteam_Session_Audience`, s),
              }),
            (0, J.jsx)(`button`, {
              type: `button`,
              className: Hs,
              onClick: d,
              children: R(`#MeetSteam_Session_Details`),
            }),
            (0, J.jsx)(`div`, {
              className: lc,
              children: (0, J.jsx)(L, {
                onClick: () => {
                  r && r(t.group.group_id, t.session.id);
                },
                disabled: !S,
                children: R(m == 1 ? `#Button_Unselect` : `#Button_Select`),
              }),
            }),
          ],
        }),
        (0, J.jsx)(Sc, { nAvailableSpace: y, bAllowedToRegisterIfFull: n }),
        (0, J.jsx)(A, {
          active: u,
          children: (0, J.jsxs)(an, {
            strTitle: o,
            bAlertDialog: !0,
            bAllowFullSize: !0,
            closeModal: f,
            children: [
              (0, J.jsx)(`div`, { children: s }),
              (0, J.jsx)(`div`, { children: l }),
              !!c &&
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(`div`, { children: R(`#MeetSteam_FAQ`) }),
                    (0, J.jsx)(nt, { text: c }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Ic(e) {
  let t = Number.parseInt(T(e.args, `id`)) || 0,
    n = (T(e.args, `visible`) || `false`).toLowerCase() === `true`,
    r = e.context.showErrorInfo,
    i = we(t),
    { data: a, isPending: o } = F(i);
  if (!t)
    return r
      ? (0, J.jsx)(`div`, { children: `Error: PackageID Not Set` })
      : null;
  if (o) return null;
  let s =
    a?.success == 1
      ? !!(a.visible && a.best_purchase_option)
      : !a?.unvailable_for_country_restriction;
  return (!s && !n) || (s && n)
    ? (0, J.jsx)(J.Fragment, { children: e.children })
    : null;
}
function Lc() {
  return c(
    {
      exportFn: void 0,
      file: void 0,
      dataURL: void 0,
      uploadFileName: ``,
      displayFileName: void 0,
      sha1: ``,
      hmac: ``,
      timestamp: 0,
      imageWidth: 0,
      imageHeight: 0,
      fileInfo: void 0,
      uploadInfo: void 0,
      eUploadState: 0,
      uploadProgress: 0,
      strErrorDescription: void 0,
    },
    {
      exportFn: !1,
      file: f.ref,
      uploadFileName: !1,
      displayFileName: !1,
      sha1: !1,
      hmac: !1,
      timestamp: !1,
      fileInfo: !1,
      uploadInfo: !1,
    },
  );
}
var Rc = class {
  m_Callbacks;
  m_fileUploadProps = Lc();
  m_onComplete;
  constructor(e) {
    u(this, {
      SetUploadFileError: m,
      StartFileExportToUpload: m,
      SetImageFileToUpload: m,
      SetOtherFileToUpload: m,
      SetFileToUpload: m,
      RetryFileUpload: m,
      BeginFileUpload: m,
      DoFileUpload: m,
      CommitFileUpload: m,
      ClearFileUploadError: m,
      Reset: m,
    }),
      (this.m_Callbacks = e);
  }
  get file_upload_props() {
    return this.m_fileUploadProps;
  }
  get file_upload_data_url() {
    return this.m_fileUploadProps.dataURL;
  }
  get file() {
    return this.m_fileUploadProps.file;
  }
  LogFileUploadMessage(e) {
    this.m_Callbacks.LogFileUploadMessage &&
      this.m_Callbacks.LogFileUploadMessage(e);
  }
  SetUploadFileError(e, t) {
    (this.m_fileUploadProps.eUploadState = e),
      (this.m_fileUploadProps.strErrorDescription = t),
      (this.m_fileUploadProps.displayFileName = void 0);
  }
  async StartFileExportToUpload(e, t = {}) {
    let { displayFilename: n, info: r, onComplete: i } = t;
    (this.m_fileUploadProps.eUploadState = 7),
      (this.m_fileUploadProps.uploadProgress = 0),
      (this.m_onComplete = i),
      (this.m_fileUploadProps.fileInfo = r),
      this.SetFileToUpload(e),
      (this.m_fileUploadProps.displayFileName = n);
  }
  async SetImageFileToUpload(e, t = {}) {
    let { processor: n = zc, info: r } = t;
    if (!e) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = r;
    let i = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
    if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        R(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          i,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let a = [
        `jpg`,
        `jpeg`,
        `png`,
        `gif`,
        `webm`,
        `mpg`,
        `mp4`,
        `mpeg`,
        `ogv`,
        `webp`,
        `avif`,
      ],
      o = e.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (a.indexOf(o) == -1) {
      let e = o || i;
      this.SetUploadFileError(
        5,
        R(`#Chat_Settings_Error_ChatUploadFileTypeNotSupported`, e),
      );
      return;
    }
    let s = await n(e);
    this.SetFileToUpload(s.file),
      (this.m_fileUploadProps.imageHeight = s.height),
      (this.m_fileUploadProps.imageWidth = s.width);
  }
  async SetOtherFileToUpload(e, t = {}) {
    if (!e) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = t.info;
    let n = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
    if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        R(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          n,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let r = [`zip`],
      i = e.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (r.indexOf(i) == -1) {
      let e = i || n;
      this.SetUploadFileError(5, R(`#Chat_Settings_Error_FileTypeNotZip`, e));
    } else this.SetFileToUpload(e);
  }
  SetFileToUpload(e) {
    if (
      ((this.m_fileUploadProps.file = void 0),
      (this.m_fileUploadProps.dataURL = void 0),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.sha1 = ``),
      (this.m_fileUploadProps.imageWidth = 0),
      (this.m_fileUploadProps.imageHeight = 0),
      (this.m_fileUploadProps.displayFileName = void 0),
      !e)
    ) {
      this.m_fileUploadProps.eUploadState = 0;
      return;
    }
    let t = ``;
    if (typeof e == `function`)
      (this.m_fileUploadProps.file = void 0),
        (this.m_fileUploadProps.exportFn = e);
    else {
      (this.m_fileUploadProps.file = e),
        (this.m_fileUploadProps.exportFn = void 0);
      try {
        t = URL.createObjectURL(e);
      } catch (e) {
        console.error(`Failed to created object URL from file: ${e}`);
      }
      (this.m_fileUploadProps.displayFileName =
        this.m_fileUploadProps.file.name),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + this.m_fileUploadProps.file.name);
    }
    this.m_fileUploadProps.eUploadState = 1;
    let n = ``;
    for (; n.length < 40; ) n += Math.floor(Math.random() * 16).toString(16);
    (this.m_fileUploadProps.dataURL = t),
      (this.m_fileUploadProps.sha1 = n),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.timestamp = 0);
  }
  async RetryFileUpload() {
    return this.BeginFileUpload();
  }
  async BeginFileUpload(e) {
    if (
      ((this.m_fileUploadProps.uploadProgress = 0),
      this.m_fileUploadProps.exportFn)
    ) {
      this.m_fileUploadProps.eUploadState = 7;
      let { eResult: e, file: t } = await this.m_fileUploadProps.exportFn(
        (e) => {
          r(() => {
            this.m_fileUploadProps.uploadProgress = e * 0.5;
          });
        },
      );
      if (e != 1 || !t)
        return (
          this.SetUploadFileError(3, R(`#Chat_Settings_Error_ExportFailed`)),
          new Response()
        );
      (this.m_fileUploadProps.file = t),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + t.name);
    }
    let t = this.m_fileUploadProps.file;
    if (!t)
      throw (
        (pn(!1, `Must SetImageFileToUpload before calling BeginFileUpload`),
        Error(`Invalid State`))
      );
    (this.m_fileUploadProps.eUploadState = 2),
      (this.m_fileUploadProps.uploadInfo = e);
    let n = new FormData();
    n.append(`sessionid`, _n()),
      n.append(`l`, V.LANGUAGE),
      n.append(`file_size`, t.size.toString()),
      n.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      n.append(`file_sha`, this.m_fileUploadProps.sha1),
      n.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      n.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      n.append(`file_type`, t.type),
      this.m_Callbacks.PopulateBeginFileUploadFormData &&
        this.m_Callbacks.PopulateBeginFileUploadFormData(
          n,
          this.file_upload_props.uploadInfo,
          this.file_upload_props.fileInfo,
        );
    try {
      let e = await fetch(
          this.m_Callbacks.GetBeginFileUploadURL() + `?l=${V.LANGUAGE}`,
          { method: `POST`, body: n, credentials: `include` },
        ),
        i;
      try {
        i = await e.json();
      } catch {}
      if (!e.ok) {
        let t = ``;
        throw (
          (r(() => {
            (this.m_fileUploadProps.eUploadState = 3),
              this.LogFileUploadMessage(e),
              (t = i?.message
                ? i?.message
                : R(`#Chat_Settings_Error_ServerError`)),
              (this.m_fileUploadProps.strErrorDescription = R(
                `#Chat_Upload_ErrorStart`,
                t,
              ));
          }),
          t)
        );
      }
      if (!i || !i.result) throw Error();
      return (
        (this.m_fileUploadProps.timestamp = i.timestamp),
        (this.m_fileUploadProps.hmac = i.hmac),
        this.DoFileUpload(i.result, t)
      );
    } catch (e) {
      let t = e || R(`#ConnectionTrouble_FailedToConnect`);
      throw (
        (r(() => {
          (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.strErrorDescription = R(
              `#Chat_Upload_ErrorStart`,
              t,
            ));
        }),
        t)
      );
    }
  }
  async DoFileUpload(e, t) {
    let n = e.use_https ? `https://` : `http://`;
    n += e.url_host + e.url_path;
    let i = {};
    for (let t of e.request_headers) {
      if (
        t.name.toLowerCase() == `content-length` ||
        t.name.toLowerCase() == `host`
      )
        continue;
      let e = t.name;
      e.toLowerCase() === `content-type` && (e = `Content-Type`),
        (i[e] = t.value);
    }
    let a = {
      onUploadProgress: (e) => {
        let t = !!this.m_fileUploadProps.exportFn,
          n = t ? 50 : 0,
          i = t ? 50 : 100,
          a = n + (e.loaded / e.total) * i;
        a > this.m_fileUploadProps.uploadProgress &&
          r(() => {
            this.m_fileUploadProps.uploadProgress = a;
          });
      },
      headers: i,
      transformRequest: [(e) => e],
    };
    try {
      return (
        await xo.default.put(n, t, a), this.CommitFileUpload(!0, e.ugcid, t)
      );
    } catch (n) {
      throw (
        (this.LogFileUploadMessage(n.response),
        r(() => {
          (this.m_fileUploadProps.strErrorDescription = R(
            `#Chat_Upload_ErrorCloud`,
          )),
            (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.uploadProgress = 0);
        }),
        this.CommitFileUpload(!1, e.ugcid, t),
        this.m_fileUploadProps.strErrorDescription)
      );
    }
  }
  async CommitFileUpload(e, t, n) {
    let i = this.m_fileUploadProps.sha1,
      a = new FormData();
    a.append(`sessionid`, _n()),
      a.append(`l`, V.LANGUAGE),
      a.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      a.append(`file_sha`, i),
      a.append(`success`, e ? `1` : `0`),
      a.append(`ugcid`, t),
      a.append(`file_type`, n.type),
      a.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      a.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      a.append(`timestamp`, this.m_fileUploadProps.timestamp.toString()),
      a.append(`hmac`, this.m_fileUploadProps.hmac),
      this.m_Callbacks.PopulateCommitFileUploadFormData(
        a,
        this.file_upload_props.uploadInfo,
        this.file_upload_props.fileInfo,
      );
    try {
      let t = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
        method: `POST`,
        body: a,
        credentials: `include`,
      });
      return (
        e
          ? ((this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 6),
            this.m_onComplete && this.m_onComplete(1, n.size))
          : ((this.m_fileUploadProps.eUploadState = 3),
            this.m_onComplete && this.m_onComplete(2, n.size)),
        t
      );
    } catch (t) {
      if (!e) return;
      let i = ``;
      throw (
        (r(() => {
          if (
            (this.LogFileUploadMessage(t),
            (this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 3),
            t.response)
          ) {
            let e = t.response.data;
            t.response.status,
              e && e.success,
              (i = e.message
                ? e.message
                : R(`#Chat_Settings_Error_ServerError`));
          } else i = R(`#ConnectionTrouble_FailedToConnect`);
          (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${i}`),
            this.m_onComplete && this.m_onComplete(2, n.size);
        }),
        i)
      );
    }
  }
  ClearFileUploadError() {
    (this.m_fileUploadProps.eUploadState == 3 ||
      this.m_fileUploadProps.eUploadState == 4 ||
      this.m_fileUploadProps.eUploadState == 5) &&
      this.Reset();
  }
  Reset() {
    this.SetFileToUpload(void 0);
  }
};
function zc(e) {
  return new Promise((t) => {
    let n = new FileReader();
    (n.onload = () => {
      let r = e,
        i = n.result,
        a = Bc(i),
        o = new Blob([a], { type: e.type });
      if (o) {
        let t = o;
        (t.lastModifiedDate = new Date(e.lastModified)),
          (t.name = e.name),
          (r = t);
      }
      if (e.type.indexOf(`image`) == 0) {
        let n = new Image();
        (n.src = URL.createObjectURL(e)),
          (n.onload = (e) => {
            t({ file: r, width: n.width, height: n.height });
          });
      } else t({ file: r, width: 0, height: 0 });
    }),
      n.readAsArrayBuffer(e);
  });
}
function Bc(e) {
  let t = new DataView(e),
    n = 0,
    r = 0,
    i = [],
    a = 0;
  if (t.getUint16(n) == 65496) {
    n += 2;
    let o = t.getUint16(n);
    for (n += 2; n < t.byteLength && n < 131072; ) {
      if (o == 65505)
        (i[a] = { recess: r, offset: n - 2 }), (r = n + t.getUint16(n)), a++;
      else if (o == 65498) break;
      (n += t.getUint16(n)), (o = t.getUint16(n)), (n += 2);
    }
    let s = e.byteLength - r;
    if (
      (i.forEach((e) => {
        s += e.offset - e.recess;
      }),
      s === e.byteLength)
    )
      return e;
    let c = new Uint8Array(s);
    if (i.length > 0) {
      let t = 0;
      i.forEach((n) => {
        let r = n.offset - n.recess;
        c.set(new Uint8Array(e.slice(n.recess, n.offset)), t), (t += r);
      }),
        c.set(new Uint8Array(e.slice(r)), t);
    }
    return c.buffer;
  }
  return e;
}
var Vc = `PA1GbfX4Jak-`;
function Hc(e) {
  let { fileUploadManager: t } = e,
    n = (0, q.useRef)(null);
  return (0, J.jsxs)(`div`, {
    className: Vc,
    children: [
      (0, J.jsx)(`input`, {
        type: `file`,
        accept: `.jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4`,
        style: { display: `none` },
        name: `fileupload`,
        ref: n,
        onChange: (e) => {
          let n = e.currentTarget.files;
          n?.length &&
            (t.SetImageFileToUpload(n[0]), (e.currentTarget.value = ``));
        },
      }),
      (0, J.jsx)(Gt, {
        type: `button`,
        title: R(`#Button_Upload`),
        onOKActionDescription: R(`#Button_Upload`),
        onClick: () => n.current?.click(),
        children: (0, J.jsx)(gn, {}),
      }),
    ],
  });
}
var Uc = `lcuTEjXO8Io-`,
  Wc = `YEGC6ugnl7c-`,
  Gc = `_2B1-NsNzm7s-`,
  Kc = `EP9i3QuHHYI-`,
  qc = `PIibQBztc3I-`,
  Jc = `_5bCd1bDYPEM-`,
  Yc = `_80jOlfR7esU-`;
function Xc(e) {
  let { fileUploadManager: t } = e,
    n = g(() => t.file_upload_props.eUploadState);
  return n == 1
    ? (0, J.jsx)(Zc, { fileUploadManager: t })
    : n == 3 || n == 5 || n == 4
      ? (0, J.jsx)($c, { fileUploadManager: t })
      : n == 0
        ? null
        : (0, J.jsx)(Qc, { fileUploadManager: t });
}
function Zc(e) {
  let { fileUploadManager: t } = e,
    n = t.file;
  return n
    ? (0, J.jsxs)(`div`, {
        className: Uc,
        children: [
          n.type.indexOf(`image`) != -1 &&
            (0, J.jsx)(`img`, {
              className: `e8e5WRBahao-`,
              src: t.file_upload_data_url,
            }),
          n.type.indexOf(`video`) != -1 && (0, J.jsx)(rr, {}),
          (0, J.jsxs)(`div`, { className: Wc, children: [`'`, n.name, `'`] }),
          (0, J.jsx)(`div`, {
            className: Gc,
            onClick: () => t.Reset(),
            children: (0, J.jsx)(An, {}),
          }),
          (0, J.jsx)(qn, {
            className: Kc,
            onClick: async () => {
              await t.BeginFileUpload(), t.Reset();
            },
            children: R(`#Button_Upload`),
          }),
        ],
      })
    : null;
}
function Qc(e) {
  let { fileUploadManager: t } = e,
    [n, r, i] = g(() => [
      t.file_upload_props.file,
      t.file_upload_props.displayFileName,
      t.file_upload_props.uploadProgress,
    ]),
    a = n ? R(`#Uploading_Item`, r ?? ``) : ``,
    o = { width: i + `%` };
  return (0, J.jsxs)(`div`, {
    className: qc,
    children: [
      (0, J.jsx)(`div`, { className: Yc, children: a }),
      (0, J.jsx)(`div`, {
        className: K(Jc, `DialogProgressBar_ProgressBarContainer`),
        children: (0, J.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: o,
        }),
      }),
    ],
  });
}
function $c(e) {
  let { fileUploadManager: t } = e,
    [n, r, i] = g(() => [
      t.file_upload_props.strErrorDescription,
      t.file_upload_props.displayFileName,
      t.file_upload_props.eUploadState,
    ]),
    a = r ? R(`#Uploading_Item`, r) : ``,
    o = n || R(`#Chat_Upload_ErrorCloud`);
  return (0, J.jsxs)(`div`, {
    className: qc,
    children: [
      (0, J.jsx)(`div`, { className: Yc, children: a }),
      (0, J.jsx)(`div`, { className: void 0, children: o }),
      (0, J.jsx)(`div`, {
        className: void 0,
        children: (0, J.jsxs)(kn, {
          className: `DialogLayout_NoMinWidth`,
          children: [
            i == 3 &&
              (0, J.jsx)(qn, {
                onClick: async () => {
                  await t.RetryFileUpload(), t.Reset();
                },
                children: R(`#Chat_Upload_ErrorAction_Retry`),
              }),
            (0, J.jsx)(L, {
              onClick: () => t.ClearFileUploadError(),
              children: R(`#Chat_Upload_ErrorAction_Close`),
            }),
          ],
        }),
      }),
    ],
  });
}
function el(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = n?.clanSteamID.GetAccountID() ?? 0;
  return r == 39049601 ||
    r == 41316928 ||
    (V.EUNIVERSE == 2 && r == 20) ||
    (V.EUNIVERSE == 1 && r == 4)
    ? (0, J.jsx)(vr, { children: (0, J.jsx)(tl, { clanAccountID: r }) })
    : t
      ? (0, J.jsx)(`div`, { children: R(`#CloudUpload_NotSupport`) })
      : null;
}
function tl(e) {
  let { clanAccountID: t } = e,
    [n] = q.useState(() => new Rc(nl(t)));
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(Hc, { fileUploadManager: n }),
      (0, J.jsx)(Xc, { fileUploadManager: n }),
    ],
  });
}
function nl(e) {
  return {
    PopulateBeginFileUploadFormData: (t) => {
      t.append(`clan_account_id`, `` + e);
    },
    PopulateCommitFileUploadFormData: (t) => {
      t.append(`clan_account_id`, `` + e);
    },
    GetBeginFileUploadURL: () =>
      V.STORE_BASE_URL + `saleaction/ajaxbeginfileupload`,
    GetCommitFileUploadURL: () =>
      V.STORE_BASE_URL + `saleaction/ajaxcommitfileupload`,
    LogFileUploadMessage: (e) => {
      console.log(`UploadFileButton: `, e);
    },
    GetMaxFileSizeMB: () => 100,
  };
}
function rl(e, t, n) {
  let r = il(e, t);
  return (0, q.useMemo)(() => {
    let e = r.results.find((e) => n == e.unique_id);
    return {
      bLoading: r.bLoading,
      success: r.success,
      userPollData: e,
      error_message: r.error_message,
      userPollSubmitData: r.userPollSubmitData,
    };
  }, [r, n]);
}
function il(e, t) {
  let n = l({
    queryKey: sl(e, t),
    queryFn: async () =>
      ol(
        await (
          await fetch(ll(e, t, !1), { method: `GET`, credentials: `include` })
        ).json(),
      ),
    placeholderData: {
      results: [],
      success: 10,
      bLoading: !0,
      userPollSubmitData: { user_poll_option_votes: [] },
    },
  });
  return n.data
    ? n.data
    : {
        results: [],
        success: 10,
        bLoading: !0,
        userPollSubmitData: { user_poll_option_votes: [] },
      };
}
function al(e, t) {
  let n = p();
  return s({
    mutationKey: [`useSetPartnerEventCastVoteUserPoll`, e.GetAccountID(), t],
    mutationFn: async (n) => {
      let r = { votes: n.votes },
        i = await fetch(ll(e, t, !0), {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(r),
          credentials: `include`,
        });
      if (!i.ok) throw Error(`Server returned ${i.status}`);
      return await i.json();
    },
    onSuccess: (r, i) => {
      if (r.success == 1) n.setQueryData(sl(e, t), () => ol(r));
      else {
        let i = n.getQueryData(sl(e, t));
        if (i) {
          let a = { ...i, success: r.success, error_message: r.error_message };
          n.setQueryData(sl(e, t), () => a);
        }
      }
    },
  });
}
function ol(e) {
  return {
    ...e,
    bLoading: !1,
    userPollSubmitData: {
      user_poll_option_votes: e.results
        .map((e) => e.voted_option_id)
        .reduce((e, t) => e.concat(t), []),
    },
  };
}
function sl(e, t) {
  return cl(e.ConvertTo64BitString(), t);
}
function cl(e, t) {
  return [`usePartnerEventUserPoll`, e, t];
}
function ll(e, t, n) {
  return `${V.COMMUNITY_BASE_URL}partnerevents/${e.ConvertTo64BitString()}/userpoll/${t}/${n ? `ajaxcastvote` : `ajaxloaddata`}/?origin=${encodeURIComponent(location.origin)}`;
}
var ul = 86400;
function dl(e, t) {
  let n = 0;
  return (
    (n = t.poll_end_time
      ? t.poll_end_time
      : (e.rtime32_visibility_start ?? e.rtime32_start_time ?? 0) +
        (t.poll_end_days_since_start || ul)),
    n
  );
}
function fl(e, t) {
  return dl(e, t) < Math.floor(Date.now() / 1e3);
}
var pl = [`user_poll_background`];
function ml(e) {
  return `${B.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${e.ConvertTo64BitString()}`;
}
var hl = (function (e) {
    return (
      (e.k_EPollResult_NotVisible = `not_visible`),
      (e.k_EPollResult_Visible_After_Vote = `after_vote`),
      (e.k_EPollResult_Visible_After_End = `after_end`),
      (e.k_EPollResult_Visible_After_Vote_Or_End = `after_vote_or_end`),
      (e.k_EPollResult_Visible_On_Demand = `on_demand`),
      e
    );
  })({}),
  gl = (function (e) {
    return (
      (e.k_EPollVoter_AnyUser = `any_user`),
      (e.k_EPollVoter_UserGameInLibrary = `user_game_in_library`),
      (e.k_EPollVoter_MinPlayTime = `min_play_time`),
      (e.k_EPollVoter_MemberOfGroup = `member_of_group`),
      e
    );
  })({}),
  _l = `UfoLzSTxTuA-`,
  vl = `YhWjKAr35yQ-`,
  yl = `PP2xaI-f6Ek-`,
  bl = `vcEow-tUZwo-`,
  xl = `_2kvsAdIW-7M-`,
  Sl = `_8aI8-jd1icQ-`,
  Cl = `dNzBZMJItoE-`,
  wl = `w0JrdYGNpkE-`,
  Tl = `wsXRKtszMHI-`,
  El = `_0xYjduHFIA0-`,
  Dl = `ia46etUoIVc-`,
  Ol = `YZZ1ufCMojA-`,
  kl = `ppFEAMbJ96c-`;
function Al(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = T(e.args, `poll_id`),
    i = Number.parseInt(r),
    a = g(() => jl(t, i));
  if (!a || !t)
    return n
      ? (0, J.jsx)(`div`, {
          className: ht,
          children: R(`#UserPolls_Editor_FailToFindModel`, i),
        })
      : null;
  let o = $n(V.LANGUAGE);
  return (0, J.jsx)(vr, {
    children: (0, J.jsx)(Ml, { userPollDef: a, lang: o, eventModel: t }),
  });
}
function jl(e, t) {
  return (e?.jsondata?.user_polls || [])?.find((e) => e.poll_id == t) || null;
}
function Ml(e) {
  let { eventModel: t, userPollDef: n, lang: r } = e,
    { userPollData: i, ...a } = rl(t.clanSteamID, t.GID || `0`, n.poll_id),
    o = !!(a.error_message && a.error_message?.length > 0),
    s = al(t.clanSteamID, t.GID || `0`),
    [c, l] = (0, q.useState)(void 0),
    [u, d] = (0, q.useState)(!1),
    [f, p] = (0, q.useState)(!1),
    m = i?.option_results && i?.option_results.length > 0,
    h = ((i && i.voted_option_id?.length) || 0) > 0;
  return (
    (0, q.useEffect)(() => {
      !f &&
        n.results_visibility_settings != hl.k_EPollResult_NotVisible &&
        m &&
        (fl(
          {
            rtime32_visibility_start:
              t.GetVisibilityStartTimeAndDateUnixSeconds(),
            rtime32_start_time: t.GetStartTimeAndDateUnixSeconds(),
          },
          n,
        ) ||
          h) &&
        p(!0);
    }, [m, h, f, t, n]),
    (0, J.jsxs)(Nl, {
      ...e,
      children: [
        n.options?.map((e) => {
          let t = i?.option_results.find((t) => t.unique_id == e.option_id),
            n =
              i?.voted_option_id.includes(e.option_id || 0) ||
              c === e.option_id;
          return (0, J.jsx)(
            Pl,
            {
              lang: r,
              pollOptionDef: e,
              bSelected: n,
              nPercentage: f ? t?.percent : void 0,
              onClick: () => l(e.option_id),
              bDisableSelection:
                a.bLoading || !i?.vote_permitted || o || u || h,
            },
            `polloption` + e.option_id,
          );
        }),
        !!c &&
          (0, J.jsx)(L, {
            onClick: async () => {
              if (!a.userPollSubmitData.user_poll_option_votes.includes(c)) {
                d(!0);
                let e = {
                  user_poll_option_votes: [
                    ...a.userPollSubmitData.user_poll_option_votes,
                  ],
                };
                e.user_poll_option_votes.push(c),
                  await s.mutateAsync({ votes: e }),
                  l(void 0),
                  d(!1);
              }
            },
            children: R(`#Button_Submit`),
          }),
        (u || a.bLoading) &&
          (0, J.jsx)(w, {
            size: `small`,
            position: `center`,
            string: a.bLoading ? R(`#Loading`) : void 0,
          }),
        m &&
          !h &&
          !f &&
          (0, J.jsx)(Ue, {
            onClick: () => p(!0),
            children: R(`#UserPolls_JustSeeResults`),
          }),
        o &&
          (0, J.jsx)(`div`, {
            className: `wizbFzhGtBc-`,
            children: a.error_message,
          }),
      ],
    })
  );
}
function Nl(e) {
  let { userPollDef: t, lang: n, eventModel: r, children: i } = e,
    a = pt(),
    [o, s] = g(() => [
      I.GetWithFallback(t.localized_poll_description, n),
      t.user_poll_background,
    ]),
    c,
    l = r.clanSteamID.GetAccountID();
  s &&
    (c = {
      backgroundImage: `url('${Xi(l, s)}')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    });
  let { userPollData: u } = rl(
      (0, q.useMemo)(() => en.InitFromClanID(l, V.EUNIVERSE), [l]),
      r.GID || `0`,
      t.poll_id,
    ),
    d = dl(
      {
        rtime32_visibility_start: r.GetVisibilityStartTimeAndDateUnixSeconds(),
        rtime32_start_time: r.GetStartTimeAndDateUnixSeconds(),
      },
      t,
    );
  return (0, J.jsx)(`div`, {
    className: _l,
    style: c,
    children: (0, J.jsxs)(`div`, {
      className: vl,
      children: [
        (0, J.jsx)(`div`, { className: yl, children: o }),
        (0, J.jsx)(`div`, { className: bl, children: i }),
        (0, J.jsxs)(`div`, {
          className: kl,
          children: [
            (0, J.jsx)(`div`, {
              children: En(
                `#UserPolls_status_N_Votes`,
                kt(u?.total_votes || 0),
              ),
            }),
            u?.display_message
              ? (0, J.jsx)(`div`, { children: u?.display_message })
              : (0, J.jsx)(`div`, {
                  children: ur(`#UserPolls_status_N_TimeRemaining`, _r(d - a)),
                }),
          ],
        }),
      ],
    }),
  });
}
function Pl(e) {
  let {
      pollOptionDef: t,
      onClick: n,
      lang: r,
      bDisableSelection: i,
      bSelected: a,
      nPercentage: o,
    } = e,
    [s] = g(() => [I.GetWithFallback(t.localized_option, r)]),
    c = Math.round((o ?? 0) * 100),
    l = !i && !!n;
  return (0, J.jsxs)(`div`, {
    className: K({ [xl]: !0, [Sl]: a, [wl]: i }),
    role: `button`,
    "aria-pressed": !!a,
    "aria-disabled": !!i,
    tabIndex: l ? 0 : void 0,
    onClick: l ? n : void 0,
    onKeyDown: l
      ? (e) => {
          (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), n?.());
        }
      : void 0,
    children: [
      (0, J.jsx)(`div`, { className: El }),
      (0, J.jsx)(`div`, { className: Dl, style: { width: `${c}%` } }),
      (0, J.jsxs)(`div`, {
        className: Tl,
        children: [
          (0, J.jsx)(`div`, { className: Cl }),
          o !== void 0 &&
            (0, J.jsxs)(`div`, {
              className: `PTiNIjMkeqY-`,
              children: [c, `%`],
            }),
          (0, J.jsx)(`span`, { className: Ol, children: s }),
        ],
      }),
    ],
  });
}
function Fl(e) {
  let { dynamicImport: t, fallback: n, ...r } = e,
    [i] = (0, q.useState)(() =>
      q.lazy(async () => {
        let e = await t();
        return await br(), { default: e };
      }),
    );
  return (0, J.jsx)(cn, {
    fallback: n,
    children: (0, J.jsx)(q.Suspense, {
      fallback: n,
      children: (0, J.jsx)(i, { ...r }),
    }),
  });
}
var Il = `_8eEm0FMiv8s-`,
  Ll = (e) => {
    let { vodInfo: t, bLoading: n } = De(e.appid);
    return !t && e.bPreviewMode
      ? (0, J.jsx)(`div`, {
          children: R(
            n ? `#VODPlayer_Loading` : `#VODPlayer_ErrorLoading`,
            e.appid,
          ),
        })
      : (0, J.jsx)(`div`, {
          className: Il,
          children: (0, J.jsx)(vr, {
            children: (0, J.jsx)(Fl, {
              dynamicImport: async () =>
                (
                  await Ft(
                    async () => {
                      let { default: e } = await import(
                        `./broadcastplayer.js`
                      ).then((e) => e.n);
                      return { default: e };
                    },
                    __vite__mapDeps([
                      50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                      31, 32, 33, 34, 35, 51, 37, 38, 52,
                    ]),
                    import.meta.url,
                  )
                ).default,
              nAppIDVOD: e.appid,
              watchLocation: 9,
              bStartPaused: !0,
            }),
          }),
        });
  };
function Rl(e) {
  let t = et(e.args, `appid`, 0);
  return (0, J.jsx)(Ll, { appid: t, bPreviewMode: !!e.context.showErrorInfo });
}
var zl = null;
function Bl() {
  return (
    (zl ??= new Map([
      [`remindme`, { Constructor: yo, autocloses: !1 }],
      [`vod`, { Constructor: Rl, autocloses: !1 }],
      [`giveawayeligible`, { Constructor: Ao, autocloses: !1 }],
      [`claimitem`, { Constructor: ko, autocloses: !0 }],
      [`packagepurchaseable`, { Constructor: Ic, autocloses: !1 }],
      [`actiondialog`, { Constructor: Do, autocloses: !1 }],
      [`uploadfilebutton`, { Constructor: el, autocloses: !0 }],
      [`userpolls`, { Constructor: Al, autocloses: !1 }],
      [`meetsteamsessiongroup`, { Constructor: hc, autocloses: !1 }],
      [`meetsteamscheduleview`, { Constructor: Oc, autocloses: !1 }],
    ])),
    zl
  );
}
var Vl = null;
function Hl() {
  return (
    (Vl ??= new Map([
      ...Array.from(Bl().entries()),
      ...Array.from(Co.entries()),
    ])),
    Vl
  );
}
function Ul(e) {
  return (0, J.jsx)(Gl, { children: (0, J.jsx)(nt, { ...e }) });
}
function Wl(e) {
  return (0, J.jsx)(Gl, { children: (0, J.jsx)(it, { ...e }) });
}
function Gl(e) {
  return (0, J.jsx)($e, { dictionary: Hl(), children: e.children });
}
var Kl = t({
    DateAndTime: () => $l,
    EndDate: () => Xl,
    EventDetailTimeInfo: () => Jl,
    MultiDateAndTime: () => Zl,
    RightSideTitles: () => Ql,
    StartDate: () => Yl,
    VerticalLocalDateAndTime: () => eu,
    default: () => tu,
    narrowWidth: () => ql,
  }),
  ql = `500px`,
  Jl = `PIDa4iwF6Qw-`,
  Yl = `_4UxlTCOSE90-`,
  Xl = `okJSO6KUIW4-`,
  Zl = `eOfJfzt9Vmk-`,
  Ql = `ezwq3bm0cG4-`,
  $l = `j7kT1VnCe70-`,
  eu = `YHODzfld870-`,
  tu = {
    narrowWidth: ql,
    EventDetailTimeInfo: Jl,
    StartDate: Yl,
    EndDate: Xl,
    MultiDateAndTime: Zl,
    RightSideTitles: Ql,
    DateAndTime: $l,
    VerticalLocalDateAndTime: eu,
  };
function nu(e) {
  let {
      event: t,
      className: n,
      nOverrideStartTime: r,
      nOverrideEndTime: i,
    } = e,
    a = e.stylesmodule ? { ...Kl, ...e.stylesmodule } : Kl,
    [o, s, c] = g(() => [
      r ||
        (t.bOldAnnouncement ? t.postTime : t.GetStartTimeAndDateUnixSeconds()),
      i || t.GetEndTimeAndDateUnixSeconds(),
      t.type,
    ]),
    l = !ee(c);
  return (0, J.jsx)(`div`, {
    className: K(a.EventDetailTimeInfo, n),
    children: (0, J.jsx)(mt, {
      startDateAndTime: o,
      endDateAndTime: s,
      bHideEndTime: l,
      stylesmodule: a,
    }),
  });
}
function ru(e) {
  let { id: t, event: n, className: r, dateRangeLayout: i = `horizontal` } = e,
    [a, o, s] = g(() => [
      n.GetStartTimeAndDateUnixSeconds(),
      n.GetEndTimeAndDateUnixSeconds(),
      n.type,
    ]),
    c = {};
  return (
    i == `vertical` && (c.ShortDateRange = eu),
    (0, J.jsx)(`div`, {
      id: t,
      className: K(Jl, r),
      children: (0, J.jsx)(ft, {
        startDateAndTime: a,
        endDateAndTime: o,
        bHideEndTime: !ee(s),
        stylesmodule: c,
      }),
    })
  );
}
var iu = void 0;
function au(e, t) {
  let n = e?.AnnouncementGID,
    { myVote: r, Vote: i } = ka(n, e?.clanSteamID.GetAccountID() ?? 0, ou(), {
      initialVote: lu(n),
      ...t,
    });
  return {
    myVote: r,
    Vote: (t) => {
      e &&
        n &&
        t != r &&
        (r && e.UpdateVoteCount(r, -1), e.UpdateVoteCount(t, 1), i(t));
    },
  };
}
function ou() {
  let { useActiveCMInterface: e } = Lt(),
    t = er(),
    n = !!e;
  return q.useMemo(
    () =>
      n
        ? {
            GetMyEventVote: async (e) => await su(t, e),
            RateEvent: async (e, n, r) => await cu(t, e, n, r),
          }
        : Fa,
    [n, t],
  );
}
async function su(e, t) {
  if (!e) return null;
  let n = await Ht.GetClanAnnouncementVoteForUser(e, { announcementid: t });
  return n.BSuccess()
    ? n.Body().voted_up()
      ? `up`
      : n.Body().voted_down()
        ? `down`
        : null
    : null;
}
async function cu(e, t, n, r) {
  return e
    ? (
        await Ht.RateClanAnnouncement(e, {
          announcementid: t,
          vote_up: r == `up`,
          clan_accountid: n,
        })
      ).GetEResult()
    : 21;
}
function lu(e) {
  if (typeof window > `u`) pn(!1, `GetVoteFromPageConfig is browser only`);
  else
    return (
      iu ||
        ((iu = new Map()),
        or(`uservotes`, `application_config`)?.forEach((e) => {
          e.clanAnnouncementGID &&
            iu.set(
              e.clanAnnouncementGID,
              e.voted_up ? `up` : e.voted_down ? `down` : null,
            );
        })),
      e ? iu.get(e) : void 0
    );
}
function uu(e) {
  let {
    nVoteCount: t,
    nCommentCount: n,
    myVote: r,
    onVote: i,
    strDiscussionURL: a,
    onDiscussionUnavailable: o,
    bShowDiscussion: s,
    repost: c,
    share: l,
  } = e;
  return (0, J.jsxs)(Dt, {
    className: Pe,
    "flow-children": `row`,
    focusable: !1,
    children: [
      (0, J.jsxs)(`div`, {
        className: Te,
        children: [
          (0, J.jsxs)(`div`, {
            className: ne,
            children: [
              (0, J.jsxs)(`div`, {
                className: he,
                children: [(0, J.jsx)(Qn, { className: ae }), gt(t)],
              }),
              (0, J.jsxs)(Dt, {
                focusable: !0,
                className: K(Hn, zn, S, r == `up` ? ge : ``),
                onActivate: () => i(`up`),
                children: [
                  (0, J.jsx)(Qn, { className: r == `up` ? je : se }),
                  (0, J.jsx)(`span`, {
                    className: b,
                    children: R(`#Button_RateUp`),
                  }),
                ],
              }),
              (0, J.jsx)(Dt, {
                focusable: !0,
                className: K(Hn, zn, S, r == `down` ? ge : ``),
                onActivate: () => i(`down`),
                "aria-label": R(`#Button_RateDown`),
                children: (0, J.jsx)(Qn, { className: r == `down` ? te : ve }),
              }),
            ],
          }),
          s &&
            (0, J.jsx)(du, {
              commentCount: n,
              discussionURL: a,
              gotoDiscussion: o,
            }),
          c,
        ],
      }),
      l && (0, J.jsx)(`div`, { className: `vmIVedNuofw-`, children: l }),
    ],
  });
}
function du(e) {
  let { commentCount: t, discussionURL: n, gotoDiscussion: r } = e;
  return (0, J.jsxs)(`div`, {
    className: pe,
    children: [
      (0, J.jsxs)(`div`, {
        className: de,
        children: [(0, J.jsx)(Vn, {}), gt(t)],
      }),
      n &&
        (0, J.jsx)(Vt, {
          href: jt(n),
          children: (0, J.jsxs)(`div`, {
            className: K(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
            children: [
              (0, J.jsx)(Vn, {}),
              (0, J.jsx)(`span`, {
                className: `x25qTcshK-4-`,
                children: R(`#Button_Discuss`),
              }),
            ],
          }),
        }),
      !n &&
        (0, J.jsxs)(Dt, {
          focusable: !0,
          onActivate: r,
          className: K(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
          children: [
            (0, J.jsx)(Vn, {}),
            (0, J.jsx)(`span`, {
              className: `x25qTcshK-4-`,
              children: R(`#Button_Discuss`),
            }),
          ],
        }),
    ],
  });
}
function fu() {
  return On.logged_in
    ? !On.is_limited || (dn((0, J.jsx)(Ce, {}), window), !1)
    : (B.IN_CLIENT
        ? console.log(
            `EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.`,
          )
        : dn(
            (0, J.jsx)(an, {
              strTitle: R(`#EventDisplay_Share_NotLoggedIn`),
              strDescription: R(`#EventDisplay_Share_NotLoggedIn_Description`),
              strOKButtonText: R(`#MobileLogin_SignIn`),
              onOK: () => Oe(),
            }),
            window,
          ),
      !1);
}
function pu(e) {
  let { eventModel: t, emoticonStore: n } = e,
    r = nn(),
    { myVote: i, Vote: a } = au(t),
    o = (e) => {
      fu() && i !== void 0 && a(e);
    },
    [, s] = ze(t.clanSteamID.GetAccountID()),
    c = (e) => {
      let t = lr(e);
      t &&
        dn(
          (0, J.jsx)(ln, {
            strDescription: R(`#EventDisplay_Share_CommentMigrationInProcess`),
          }),
          t,
        );
    },
    [l, u, d, f] = g(() => [
      ar(t.nVotesUp - t.nVotesDown, 0, 2 ** 53 - 1),
      Wt(t.GetDiscussionURL(s?.vanity_url)),
      t.BIsUnlistedEvent(),
      t.nCommentCount,
    ]),
    p = sn();
  return (0, J.jsx)(uu, {
    nVoteCount: l,
    nCommentCount: f,
    myVote: i ?? void 0,
    onVote: o,
    strDiscussionURL: u,
    onDiscussionUnavailable: c,
    bShowDiscussion: !p && !d,
    share: !r && (0, J.jsx)(Yi, { eventModel: t, emoticonStore: n }),
  });
}
var mu = `FCDwJOWV1GM-`,
  hu = `txlNpNdL6ek-`,
  gu = `Lz8xvnLQ5-w-`,
  _u = `_3TchWdVwz8s-`,
  vu = `MCGIDfV4nO0-`,
  yu = `V-UPj6R9FQU-`,
  bu = `X60rhq3vCCI-`,
  xu = `KXp1skLG3-I-`,
  Su = `q7dZi0jYxLw-`,
  Cu = `xgATxxvgldU-`,
  wu = `DwYwmDj0vwI-`,
  Tu = `_4OTq0--XlTY-`,
  Eu = `hSFWQBRmqTY-`,
  Du = `si-5WbiV7Zo-`,
  Ou = `ZUZG5K1lErM-`,
  ku = `u0Scnt9OeIA-`,
  Au = `udKyBXdwthE-`,
  ju = `zU-vHqqb-eQ-`,
  Mu = `zMH1K8bigkM-`,
  Nu = `TyI03RMpz2I-`,
  Pu = `PJL3cTty0Ls-`,
  Fu = `DCoTBaIhgjA-`,
  Iu = `-wy0zbfIpXg-`,
  Lu = `QHeuRajwcnQ-`,
  Ru = `_87rt595tHvU-`,
  zu = `wu5bVGwl0TE-`,
  Bu = `_8J5uJ6Ccisw-`,
  Vu = `qpxV4nQHXMc-`,
  Hu = `HWbJ1A3y1Vk-`,
  Uu = `aFhUTUuEGZ4-`,
  Wu = `_7Wxxgtnu5oA-`,
  Gu = `cd6NBhGLkfw-`,
  Ku = `T-oflieec2c-`,
  qu = `_5q65CKymFcE-`,
  Ju = `_3wNjVve5vqc-`,
  Yu = `bD0kY0dKy3k-`,
  Xu = `ay-K0NBOIuc-`,
  Zu = `ddSX1kzyZtQ-`,
  Qu = `ZQXIRkUStXw-`,
  $u = `n2sadsNGDXk-`,
  ed = `_7rq2r-AuB6A-`,
  td = `Dw62Gq5AJZE-`,
  nd = `iv48xfQdA94-`,
  rd = `kSHlVJTPUms-`,
  id = `tSbTvpNvWOQ-`,
  ad = `WgF5nilVEJk-`,
  od = `fhefwW6bGXQ-`,
  sd = `bSRjbpQs554-`,
  cd = `Y0F9HI70evM-`,
  ld = `FWx4hiffwLs-`,
  ud = `y9pBu-aZo-k-`,
  dd = `ZlbFAmu86SM-`,
  fd = `_7rUyZ-4uXHM-`,
  pd = `WTcfl-4gbXY-`,
  md = `fsvOA1PS33M-`,
  hd = `CYRhg26l0dc-`,
  gd = `_09V7NXTmtlY-`,
  _d = `W-arcmNojEY-`,
  vd = `MjUEpAp0LdA-`,
  yd = `iMj27DR-pkY-`,
  bd = {};
function xd(e) {
  return bd[e];
}
(0, So.default)(`2026-11-23T09:30:00-08:00`).unix(),
  (0, So.default)(`2026-11-30T10:00:00-08:00`).unix();
function Sd() {
  return 2025;
}
function Cd(e) {
  return `${V.MEDIA_CDN_URL}store/promo/${e}`;
}
function wd() {
  return {
    strBackgroundColor: `#000000`,
    strBackgroundImageURL: Cd(`steamawards2026/page_tile.svg?v=1`),
    strTrophyImageURL: Cd(`steamawards2026/trophy_220.png?v=1`),
    strButtonBGColor: `#ffd979`,
    strButtonTextColor: `#000000`,
    strTextColor: `#ffd979`,
    strCategoryTextColor: `#ffffff`,
    strTitleColor: `#ffd979`,
    rgCategoryBackgrounds: xd(Sd())?.mapCategoryColors ?? {},
    strFallbackCategoryBGColor: `#000000`,
  };
}
function Td() {
  return `${V.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
}
(0, So.default)(`2026-12-17T09:30:00-08:00`).unix(),
  (0, So.default)(`2027-01-02T10:00:00-08:00`).unix();
var Ed = 5350740,
  Dd = new Map([
    [3240220, 2016],
    [292030, 2017],
    [578080, 2018],
    [814380, 2019],
    [1174180, 2020],
    [1196590, 2021],
    [1245620, 2022],
    [1086940, 2023],
    [2358720, 2024],
    [1030300, 2025],
  ]);
function Od(e) {
  return Dd.has(e);
}
function kd(e, t) {
  return e.BIsEventActionEnabled(t) || t < e.GetStartTimeAndDateUnixSeconds();
}
function Ad(e, t, n, r) {
  let i = Md(e, t),
    a = Md(e, n);
  if (i.length || a.length)
    return {
      nomination: i.length ? { rgCategories: i, bNominationsLive: r } : void 0,
      vote: a.length ? { rgCategories: a, bNominationsLive: r } : void 0,
    };
}
function jd(e) {
  return e > 0;
}
function Md(e, t) {
  let n = [];
  for (let r of t.filter(jd)) {
    let t = e.find((e) => e.voteid == r);
    t?.localization?.title &&
      n.push({
        eCategoryID: r,
        strTitle: t.localization.title,
        strDescription: t.localization.award_description ?? ``,
        bLaborOfLove: t.flag == 3,
        internal_name: t.internal_name ?? ``,
      });
  }
  return n;
}
function Nd(e) {
  return [`SteamAwards.GetUserNominations`, e];
}
function Pd(e) {
  return [`StoreSales.GetUserVotes`, e, Ed];
}
function Fd(e, t) {
  let n = p(),
    r = Nd(W.accountid),
    { data: i, isPending: a } = l({
      queryKey: r,
      queryFn: async () => await t.GetMySteamAwardNominations(),
      enabled: !!W.accountid,
    }),
    { mutate: o } = s({
      mutationFn: async (n) => {
        let r = await t.NominateForSteamAward(n, e);
        if (r != 1)
          throw Error(
            `SteamAwards.Nominate failed with ${r} for ${e} and appid ${n}`,
          );
      },
      onMutate: (t) =>
        n.setQueryData(r, (n) => [
          ...(n ?? []).filter((t) => t.category_id != e),
          { category_id: e, appid: t },
        ]),
      onError: () => n.invalidateQueries({ queryKey: r }),
    });
  return {
    unNominatedAppID: i?.find((t) => t.category_id == e)?.appid,
    bAnswered: i != null || !W.accountid || !a,
    Nominate: o,
  };
}
function Id(e, t) {
  let n = p(),
    r = Pd(W.accountid),
    { data: i, isPending: a } = l({
      queryKey: r,
      queryFn: async () => await t.GetMySteamAwardVotes(),
      enabled: !!W.accountid,
    }),
    { mutate: o } = s({
      mutationFn: async (n) => {
        let r = await t.SetSteamAwardVote(n, e);
        if (r != 1) throw Error(`StoreSales.SetVote failed with ${r}`);
      },
      onMutate: (t) =>
        n.setQueryData(r, (n) => [
          ...(n ?? []).filter((t) => t.voteid != e),
          { voteid: e, appid: t },
        ]),
      onError: () => n.invalidateQueries({ queryKey: r }),
    });
  return {
    unVotedAppID: i?.find((t) => t.voteid == e)?.appid,
    bAnswered: i != null || !W.accountid || !a,
    Vote: o,
  };
}
function Ld(e) {
  return [`StoreSales.GetVoteDefinitions`, e ?? 0];
}
function Rd(e, t) {
  return {
    queryKey: Ld(t),
    queryFn: async () => {
      let n = await re.GetVoteDefinitions(e, {
        sale_appid: t,
        language: Xn().strLanguage,
      });
      return n.BSuccess() ? n.Body().toObject() : null;
    },
    enabled: !!t,
    staleTime: 1 / 0,
  };
}
function zd(e) {
  return l(Rd(er(), e));
}
async function Bd(e) {
  let t = await _e.GetUserNominations(e, {});
  return t.BSuccess() ? (t.Body().toObject().nominations ?? []) : [];
}
async function Vd(e, t) {
  let n = await re.GetUserVotes(e, { sale_appid: t });
  return n.BSuccess() ? (n.Body().toObject().user_votes ?? []) : [];
}
async function Hd(e, t, n, r) {
  let i = await _e.Nominate(e, { category_id: n, nominated_id: t, source: r });
  return (
    i.BSuccess() ||
      console.warn(`SteamAwards.Nominate failed with ${i.GetEResult()}`),
    [i.GetEResult(), i.Body().toObject().nominations ?? []]
  );
}
async function Ud(e, t, n, r) {
  let i = await re.SetVote(e, { voteid: n, appid: t, sale_appid: r });
  return (
    i.BSuccess() ||
      console.warn(`StoreSales.SetVote failed with ${i.GetEResult()}`),
    [i.GetEResult(), i.Body().toObject().user_votes ?? []]
  );
}
var Wd = `ilr1AjdCJXo-`,
  Gd = `TxDyNEm1M8k-`,
  Kd = `sUNGbyAayyI-`,
  qd = `Sc8nD8CrRck-`,
  Jd = `-z2wNnnSVlM-`,
  Yd = `ghuFYTHFeow-`,
  Xd = `r-d74eApzAI-`,
  Zd = `sSLI2In7TtI-`,
  Qd = `eWqTMj--x0o-`,
  $d = `bwYOMwZYlP0-`,
  ef = `Z7-r2VQgpeM-`,
  tf = `i7PGUODutQI-`,
  nf = `tg9BVvJK4L0-`,
  rf = `gJlraqCGBwc-`,
  af = `q-NADf-GkR0-`,
  of = `Nxnaq9LeCh0-`,
  sf = `o00cvSBJI98-`,
  cf = `ycbLF-HTlIE-`,
  lf = `iYxHUHZvg5o-`,
  uf = `_15SY61ywDwg-`,
  df = q.createContext(void 0);
function ff(e) {
  return (0, J.jsx)(df.Provider, {
    value: e.widgetStyle,
    children: e.children,
  });
}
function pf() {
  return q.useContext(df) ?? wd();
}
function mf(e) {
  let {
      strMainTitle: t,
      subtitle: n,
      headerText: r,
      headerContent: i,
      children: a,
      footer: o,
    } = e,
    s = pf(),
    c = {
      backgroundColor: s.strBackgroundColor,
      backgroundImage: `url( ${s.strBackgroundImageURL} )`,
      color: s.strTextColor,
    };
  return (0, J.jsxs)(`div`, {
    style: c,
    className: K(Wd, vn),
    children: [
      (0, J.jsxs)(`div`, {
        className: Gd,
        children: [
          (0, J.jsx)(`img`, {
            className: Kd,
            src: s.strTrophyImageURL,
            alt: ``,
          }),
          (0, J.jsxs)(`div`, {
            className: qd,
            children: [
              (0, J.jsx)(`div`, {
                style: { color: s.strTitleColor },
                className: Jd,
                children: t,
              }),
              n,
              (0, J.jsx)(`div`, { className: Xd, children: r }),
              i,
            ],
          }),
        ],
      }),
      a,
      !!o && (0, J.jsx)(`div`, { className: `HsPliMKnMhg-`, children: o }),
    ],
  });
}
function hf(e) {
  return `${V.STORE_BASE_URL}steamawards/${e ? `nominations/` : ``}`;
}
function gf() {
  return (0, J.jsx)(w, {
    className: Wd,
    size: `medium`,
    position: `center`,
    string: z.Localize(`#Loading`),
  });
}
function _f(e) {
  let { elDialogElement: t, fnShowLogonDialog: n } = ye(),
    [r, i, a] = G();
  return {
    elDialogElement: (0, J.jsxs)(J.Fragment, {
      children: [
        t,
        (0, J.jsx)(A, {
          active: r,
          children: (0, J.jsx)(vf, { bVote: e, closeModal: a }),
        }),
      ],
    }),
    BCanTakeAction: () =>
      W.logged_in ? !W.is_limited || (i(), !1) : (n(), !1),
  };
}
function vf(e) {
  let { bVote: t, closeModal: n } = e;
  return (0, J.jsx)(an, {
    strTitle: z.Localize(`#Informational_Message`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    children: (0, J.jsx)(`div`, {
      children: z.LocalizeReact(
        t
          ? `#SteamAward_Vote_LimitedAccount`
          : `#SteamAward_Nominate_LimitedAccount`,
        (0, J.jsx)(`a`, {
          href: `${V.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
          target: V.IN_CLIENT ? void 0 : `_blank`,
          rel: `noreferrer`,
          children: z.Localize(`#User_LimitedAccount_UrlInfo`),
        }),
      ),
    }),
  });
}
function yf(e) {
  let {
      strLocTokenInfix: t,
      unCurrentAppID: n,
      unNewAppID: r,
      fnOnConfirm: i,
      closeModal: a,
    } = e,
    { data: o } = F({ appid: n }),
    { data: s } = F({ appid: r }),
    { data: c } = yr({ appid: n }),
    { data: l } = yr({ appid: r }),
    u = c ? at(c, `small_capsule`) : void 0,
    d = l ? at(l, `small_capsule`) : void 0;
  return (0, J.jsx)(an, {
    modalClassName: cf,
    strTitle: z.Localize(
      t == `Vote`
        ? `#SteamAward_VoteConflictWarning_Title`
        : `#SteamAward_NominationConflictWarning_Title`,
    ),
    closeModal: a,
    onOK: i,
    onCancel: a,
    children: (0, J.jsxs)(`div`, {
      className: lf,
      children: [
        z.LocalizeReact(
          t == `Vote`
            ? `#SteamAward_VoteConflictWarning_Explanation`
            : `#SteamAward_NominationConflictWarning_Explanation`,
          (0, J.jsx)(`span`, { className: of, children: o?.name }),
          (0, J.jsx)(`span`, { className: of, children: s?.name }),
        ),
        u && d
          ? (0, J.jsxs)(`div`, {
              className: uf,
              children: [
                (0, J.jsx)(`img`, { src: u, alt: `` }),
                `→`,
                (0, J.jsx)(`img`, { src: d, alt: `` }),
              ],
            })
          : (0, J.jsx)(w, {
              size: `small`,
              position: `center`,
              string: z.Localize(`#Loading`),
            }),
      ],
    }),
  });
}
function bf(e) {
  let { unAppID: t, widget: n, actions: r, bNominationsOpen: i } = e,
    a = n.rgCategories[0],
    { data: o } = F({ appid: t }),
    { unNominatedAppID: s, bAnswered: c, Nominate: l } = Fd(a.eCategoryID, r),
    { elDialogElement: u, BCanTakeAction: d } = _f(!1),
    {
      strButtonBGColor: f,
      strButtonTextColor: p,
      rgCategoryBackgrounds: m,
      strFallbackCategoryBGColor: h,
      strCategoryTextColor: g,
    } = pf(),
    [_, v, y] = G(),
    b = m?.[a.internal_name] ?? h;
  if (!n.bNominationsLive) return null;
  if (!c) return (0, J.jsx)(gf, {});
  let x = Wt(hf(!0)),
    S = s == t,
    C = n.rgCategories.length == 1,
    ee = i && !a.bLaborOfLove;
  return (0, J.jsxs)(mf, {
    strMainTitle: z.Localize(`#SteamAwards_EventMainTitle`),
    subtitle: (0, J.jsxs)(`div`, {
      className: Yd,
      children: [
        i
          ? z.Localize(`#SteamAwards_EventCallToAction`)
          : z.Localize(`#SteamAwards_EventVotingDateTeaser`, Sd()),
        i &&
          (0, J.jsxs)(`a`, {
            href: x,
            className: `OztIiH5vYRE-`,
            children: [
              `(`,
              z.Localize(`#EventDisplay_CallToAction_LearnMore`),
              `)`,
            ],
          }),
      ],
    }),
    headerText: i
      ? C
        ? z.Localize(`#SteamAwards_EventNominateGamePrompt_Long`, o?.name ?? ``)
        : (0, J.jsx)(`a`, {
            className: Zd,
            href: x,
            children: z.Localize(
              `#SteamAwards_EventNominateGamePrompt_NoCategory`,
              o?.name ?? ``,
            ),
          })
      : z.Localize(`#SteamAwards_Event_NominationsClosed`),
    footer:
      ee &&
      (0, J.jsx)(`a`, {
        href: x,
        children: z.Localize(`#SteamAwards_EventNominationAlternativeLinkText`),
      }),
    children: [
      !!(C && (i || S)) &&
        (0, J.jsx)(`div`, {
          style: { background: b },
          className: K(`eU1VNUlajE0-`, `eWqTMj--x0o-`),
          children: (0, J.jsxs)(`div`, {
            className: `gO70X8GBo-E-`,
            children: [
              (0, J.jsx)(`div`, {
                style: { background: f, color: p },
                className: K(`SNoK7p5tEVU-`, S && `eIE9nuLmVLE-`),
                children: (0, J.jsx)(fn, {
                  controlled: !0,
                  className: K(`_1IIojhfpy34-`, S && `eIE9nuLmVLE-`),
                  checked: S,
                  onChange: (e) => {
                    e && d() && (s && s != t ? v() : l(t));
                  },
                  disabled: S,
                  color: p,
                  highlightColor: p,
                  label: (0, J.jsx)(`div`, {
                    className: `bwYOMwZYlP0-`,
                    children: z.Localize(
                      S
                        ? `#SteamAwards_NominateWidget_CTA_PastTense`
                        : `#SteamAwards_NominateWidget_CTA`,
                      a.strTitle,
                    ),
                  }),
                }),
              }),
              (0, J.jsx)(`div`, {
                style: { color: g },
                className: `C-uxCDYX7oo-`,
                children: a.strDescription,
              }),
            ],
          }),
        }),
      u,
      (0, J.jsx)(A, {
        active: _,
        children: (0, J.jsx)(yf, {
          strLocTokenInfix: `Nomination`,
          unCurrentAppID: s,
          unNewAppID: t,
          fnOnConfirm: () => l(t),
          closeModal: y,
        }),
      }),
    ],
  });
}
function xf(e) {
  let {
      unAppID: t,
      widget: n,
      actions: r,
      bVotesOpen: i,
      bHideCategoryDescriptions: a,
    } = e,
    { data: o } = F({ appid: t }),
    s = Wt(hf(!1));
  return (0, J.jsx)(mf, {
    strMainTitle: z.Localize(`#SteamAwards_EventMainTitleCombined`),
    headerText: i
      ? z.Localize(`#SteamAwards_EventVoteForGamePrompt`, o?.name ?? ``)
      : (0, J.jsx)(`a`, {
          href: s,
          className: Zd,
          children: z.Localize(`#SteamAwards_Event_VotesClosed`),
        }),
    headerContent: (0, J.jsx)(`div`, {
      className: sf,
      children: n.rgCategories.map((e) =>
        (0, J.jsx)(
          Sf,
          {
            unAppID: t,
            category: e,
            actions: r,
            bVotesOpen: i,
            bHideDescription: a,
          },
          e.eCategoryID,
        ),
      ),
    }),
    footer: (0, J.jsx)(`a`, {
      href: s,
      children: z.Localize(`#EventDisplay_CallToAction_LearnMore`),
    }),
  });
}
function Sf(e) {
  let {
      unAppID: t,
      category: n,
      actions: r,
      bVotesOpen: i,
      bHideDescription: a,
    } = e,
    { unVotedAppID: o, bAnswered: s, Vote: c } = Id(n.eCategoryID, r),
    { elDialogElement: l, BCanTakeAction: u } = _f(!0),
    { strFallbackCategoryBGColor: d, rgCategoryBackgrounds: f } = pf(),
    [p, m, h] = G(),
    g = f?.[n.internal_name] ?? d,
    _ = o == t;
  return !i && !_
    ? null
    : (0, J.jsxs)(`div`, {
        style: { backgroundColor: g },
        className: Qd,
        children: [
          (0, J.jsxs)(`div`, {
            className: tf,
            children: [
              (0, J.jsx)(`div`, { className: K($d, ef), children: n.strTitle }),
              !a &&
                (0, J.jsx)(`div`, {
                  className: `C-uxCDYX7oo-`,
                  children: n.strDescription,
                }),
              _
                ? (0, J.jsx)(`button`, {
                    className: af,
                    children: (0, J.jsx)(`span`, {
                      className: rf,
                      children: z.Localize(`#SteamAward_VoteButton_VotedText`),
                    }),
                  })
                : (0, J.jsx)(`button`, {
                    className: nf,
                    onClick: () => {
                      s && u() && (o && o != t ? m() : c(t));
                    },
                    children: (0, J.jsx)(`span`, {
                      className: rf,
                      children: z.Localize(`#SteamAward_VoteButton_PromptText`),
                    }),
                  }),
            ],
          }),
          l,
          (0, J.jsx)(A, {
            active: p,
            children: (0, J.jsx)(yf, {
              strLocTokenInfix: `Vote`,
              unCurrentAppID: o,
              unNewAppID: t,
              fnOnConfirm: () => c(t),
              closeModal: h,
            }),
          }),
        ],
      });
}
function Cf(e) {
  let t = er();
  return (0, q.useMemo)(
    () => ({
      GetMySteamAwardNominations: () => Bd(t),
      NominateForSteamAward: async (n, r) => {
        if (e) return 1;
        let [i] = await Hd(t, n, r, 4);
        return i;
      },
      GetMySteamAwardVotes: () => Vd(t, Ed),
      SetSteamAwardVote: async (n, r) => {
        if (e) return 1;
        let [i] = await Ud(t, n, r, Ed);
        return i;
      },
    }),
    [t, e],
  );
}
var wf = [];
function Tf(e, t, n) {
  let r = e.some(jd) || t.some(jd),
    i = zd(r ? Ed : void 0);
  return r
    ? i.data
      ? { widgets: Ad(i.data.votes ?? [], e, t, n), bLoading: !1 }
      : { bLoading: i.isPending }
    : { bLoading: !1 };
}
function Ef(e) {
  let { data: t, isPending: n } = l({
    queryKey: [`SteamAwards.WidgetStyle`],
    queryFn: async () => {
      let e = await fetch(Td(), { credentials: `omit` });
      if (!e.ok)
        throw Error(`steamawards/ajaxgetwidgetstyle failed with ${e.status}`);
      return await e.json();
    },
    enabled: e,
    staleTime: 1 / 0,
    retry: !1,
  });
  return { widgetStyle: t, bLoading: e && n };
}
function Df(e, t) {
  return t ? { ...e, bNominationsLive: !0 } : e;
}
function Of(e) {
  return !!e && V.EUNIVERSE == 1;
}
function kf(e) {
  let { event: t, previewMode: n } = e,
    [r, i] = g(() => [t.GetSteamAwardCategory(), t.appid]),
    a = kd(t, pt()),
    { widgets: o, bLoading: s } = Tf([r], wf, a),
    { widgetStyle: c, bLoading: l } = Ef(!!o?.nomination),
    u = Cf(Of(n));
  return s || l
    ? (0, J.jsx)(gf, {})
    : o?.nomination
      ? (0, J.jsx)(ff, {
          widgetStyle: c,
          children: (0, J.jsx)(bf, {
            unAppID: i,
            actions: u,
            widget: Df(o.nomination, !!n),
            bNominationsOpen: a,
          }),
        })
      : null;
}
function Af(e) {
  let {
      appID: t,
      voteCategories: n,
      bIsEventActionEnabled: r,
      previewMode: i,
      bRenderFromStorePage: a,
    } = e,
    { widgets: o, bLoading: s } = Tf(wf, n ?? wf, !1),
    { widgetStyle: c, bLoading: l } = Ef(!!o?.vote),
    u = Cf(Of(i));
  return s || l
    ? (0, J.jsx)(gf, {})
    : o?.vote
      ? (0, J.jsx)(ff, {
          widgetStyle: c,
          children: (0, J.jsx)(xf, {
            unAppID: t,
            widget: o.vote,
            actions: u,
            bVotesOpen: r || !!i,
            bHideCategoryDescriptions: a,
          }),
        })
      : null;
}
var jf = `CmGdbGDNSV4-`,
  Mf = `iPOPhGzC-a0-`,
  Nf = `xrOiSU9R97s-`,
  Pf = `LwJMhK0HNVM-`,
  Ff = `ZGGCLp-BDTo-`,
  If = `M7DOVjQK--s-`,
  Lf = `gKDPu8oCj8M-`,
  Rf = `CI7Kfj6g0IA-`,
  zf = `wkqGxJzBufw-`,
  Bf = `wqku6E-Abwg-`,
  Vf = `gg4cpQLGyDc-`,
  Hf = `_7YWF9gABggY-`,
  Uf = `_5p-Wrlk9bgc-`,
  Wf = `_72FICgCQSdY-`,
  Gf = `UnBqYIhvFvg-`,
  Kf = `nT35pSNPuYs-`,
  qf = `_2XopQbI8Bi8-`,
  Jf = `o6bVF1-qPXQ-`,
  Yf = `qvYW3H-Yr-I-`,
  Xf = `Cfio5qjFtHU-`,
  Zf = `oN6p82rKRck-`,
  Qf = `vO1QeI3w9Dk-`,
  $f = `_3aW3Mxt8m1Q-`,
  ep = `Qe4MY8-rwjI-`,
  tp = `jcxmsuUFA2M-`,
  np = `KdR0M-oN1oY-`,
  rp = `QHtC9T0nSOI-`,
  ip = `ibKXDplBVRg-`,
  ap = `CmfveJtv4Vo-`,
  op = `W178nE7W-R0-`,
  sp = `fY9hFy-ZiKw-`,
  cp = `KwOhtU9RR3w-`,
  lp = `_9QcJ0ABITrA-`;
function up(e) {
  let {
      appId: t,
      clanId: n,
      strCapsuleUrl: r,
      strGroupTitle: i,
      strExtraBannerGroupStyle: a,
      actions: o,
    } = e,
    s = t !== y,
    c = q.useMemo(() => (t ? { appid: t } : { creatorid: n }), [t, n]),
    l = (0, J.jsx)(`img`, { className: Uf, src: r });
  return nn()
    ? null
    : (0, J.jsxs)(`div`, {
        className: Lf,
        children: [
          (0, J.jsx)(`div`, {
            className: Rf,
            style: { backgroundImage: `url(${r})` },
          }),
          (0, J.jsxs)(`div`, {
            className: K(Ff, a),
            children: [
              s
                ? t
                  ? (0, J.jsx)(x, {
                      id: c,
                      className: Hf,
                      hoverProps: {
                        direction: `overlay`,
                        style: { minWidth: `320px` },
                      },
                      children: l,
                    })
                  : (0, J.jsx)(_, { id: c, hoverClassName: Hf, children: l })
                : (0, J.jsxs)(`div`, { className: Hf, children: [l, ` `] }),
              (0, J.jsxs)(`div`, {
                className: Bf,
                children: [
                  i,
                  (0, J.jsx)(`div`, {
                    className: Vf,
                    children: R(`#EventDisplay_NewsHubSubtitle`),
                  }),
                ],
              }),
              s &&
                (0, J.jsx)(`div`, { className: `XVaKlThraAU-`, children: o }),
            ],
          }),
        ],
      });
}
function dp(e, t) {
  let [n, r] = (0, q.useState)({}),
    i = ot(`useEventHeaderData`);
  return (
    (0, q.useEffect)(() => {
      if (e)
        Ut.Get()
          .QueueAppRequest(e, { include_assets: !0, include_screenshots: !0 })
          .then(() => {
            let t = Ut.Get().GetApp(e);
            t &&
              !i?.token?.reason &&
              r({
                strCapsuleUrl: t.GetAssets()?.GetHeaderURL(),
                strGroupTitle: t.GetName(),
                strStoreURL:
                  (B.IN_CLIENT ? `steam://openurl/` : ``) + t.GetStorePageURL(),
                strCommunityURL:
                  (B.IN_CLIENT ? `steam://openurl/` : ``) +
                  t.GetCommunityPageURL(),
                strForumURL:
                  (B.IN_CLIENT ? `steam://openurl/` : ``) +
                  t.GetCommunityDiscussionForumsURL(),
              });
          });
      else if (t) {
        let e = en.InitFromClanID(t, B.EUNIVERSE);
        Ve.LoadClanInfoForClanSteamID(e).then((n) => {
          n &&
            !i?.token?.reason &&
            r({
              strCapsuleUrl: n.avatar_full_url,
              strGroupTitle: n.group_name,
              strStoreURL:
                (B.IN_CLIENT ? `steam://openurl/` : ``) +
                B.STORE_BASE_URL +
                `curator/` +
                t +
                `/`,
              strCommunityURL:
                (B.IN_CLIENT ? `steam://openurl/` : ``) +
                B.COMMUNITY_BASE_URL +
                `gid/` +
                e.ConvertTo64BitString(),
              strExtraBannerGroupStyle: zf,
            });
        });
      }
    }, [e, i?.token?.reason, t]),
    n
  );
}
function fp(e) {
  let { appId: t, clanId: n, bShowRSSFeed: r } = e,
    { strStoreURL: i, strCommunityURL: a, strForumURL: o } = dp(t, n),
    s = sn(),
    c =
      B.STORE_BASE_URL +
      `feeds/` +
      rt() +
      (t ? `/app/` + t : `/group/` + n) +
      `/?cc=` +
      B.COUNTRY +
      `&l=` +
      B.LANGUAGE,
    { data: l } = Dr(n),
    u = !!(l?.can_edit || l?.support_user),
    d = Fe.Get().BOwnsApp(t),
    f = (0, q.useMemo)(() => {
      let e = [];
      return (
        B.IN_CLIENT &&
          d &&
          e.push({
            label: R(`#EventDisplay_ViewInLibrary_ExtraShort`),
            data: `steam://nav/games/details/` + t,
          }),
        i &&
          e.push({
            label: R(`#EventDisplay_ViewStorePage_ExtraShort`),
            data: jt(i),
          }),
        s ||
          (a &&
            e.push({
              label: R(`#EventDisplay_ViewCommunityPage_ExtraShort`),
              data: jt(a),
            }),
          o &&
            e.push({
              label: R(`#EventDisplay_ViewForum_ExtraShort`),
              data: jt(o),
            }),
          r &&
            e.push({
              label: (0, J.jsxs)(`div`, {
                className: Xf,
                children: [
                  (0, J.jsx)(wn, {}),
                  R(`#EventDisplay_RSSFeed_ExtraShort`),
                ],
              }),
              data: c,
            })),
        u &&
          e.push({
            label: R(`#EventDisplay_Admin_ExtraShort`),
            data: Je(t, en.InitFromClanID(n, B.EUNIVERSE), `admin`),
          }),
        e
      );
    }, [d, i, s, u, a, o, r, c, t, n]);
  return (0, J.jsx)(Sr, {
    strDefaultLabel: R(`#EventDisplay_LinksDropDown_ExtraShort`),
    strClassName: Kf,
    strDropDownButtonClassName: qf,
    strDropDownMenuCtnClass: Yf,
    contextMenuPositionOptions: { bMatchWidth: !1 },
    arrowClassName: Jf,
    rgOptions: f,
    onChange: (e, t, n) => {
      n && gr(n, e.data);
    },
  });
}
var pp = i((e) => {
  let { appId: t, clanId: n } = e,
    {
      strCapsuleUrl: r,
      strGroupTitle: i,
      strExtraBannerGroupStyle: a,
    } = dp(t, n),
    o = (0, q.useMemo)(() => (t ? { appid: t } : { creatorid: n }), [t, n]),
    { data: s } = F(o),
    c = Fe.Get().BOwnsApp(t);
  return (0, J.jsx)(up, {
    appId: t,
    clanId: n,
    strCapsuleUrl: r,
    strGroupTitle: i,
    strExtraBannerGroupStyle: a,
    actions: (0, J.jsxs)(J.Fragment, {
      children: [
        !(c || !t) &&
          (0, J.jsx)(`div`, {
            className: `_1US5O8GIUEc-`,
            children: (0, J.jsx)(fa, {
              appid: t,
              bIsFree: !!s?.is_free,
              bIsComingSoon: !!s?.is_coming_soon,
              className: K(void 0, `mJ5CX9X1A8E-`),
            }),
          }),
        (0, J.jsx)(`div`, {
          className: Gf,
          children: t
            ? (0, J.jsx)(ke, { appid: t, className: Wf })
            : (0, J.jsx)(Me, { clanAccountID: n, className: Wf }),
        }),
        (0, J.jsx)(fp, { ...e }),
      ],
    }),
  });
});
function mp(e) {
  return (0, J.jsx)(`div`, {
    className: K(Mf, `AppPartnerEventsBanner`),
    children: (0, J.jsx)(pp, { ...e }),
  });
}
var hp = `WbZZkptWLHg-`;
function gp(e) {
  let { event: t } = e,
    n = g(() => t.jsondata?.referenced_appids || []),
    r = xn(),
    i = C({
      queries: n.map((e) => Tn(r, { appid: e })),
      combine: (e) => ({
        bLoaded: e.every((e) => !e.isPending),
        data: e.map((e) => e.data),
      }),
    });
  if (!n.length || !i.bLoaded) return null;
  let a = i.data
      .flatMap((e) =>
        e?.store_url_path && e?.name ? [`[url="${Ne(e)}"]${e.name}[/url]`] : [],
      )
      .join(R(`#EventDisplay_ReferencedApps_Joiner`)),
    o = En(`#EventDisplay_ReferencedApps`, n.length, a);
  return (0, J.jsx)(`div`, {
    className: hp,
    children: (0, J.jsx)(nt, { text: o, event: t }),
  });
}
function _p(e) {
  let { bOn: t } = e;
  return (0, J.jsx)(`div`, {
    className: t ? xr : hr,
    children: R(t ? `#Dialog_On` : `#Dialog_Off`),
  });
}
function vp(e) {
  return fr.IS_CREATOR_HOME
    ? (0, J.jsx)(yp, { identifier: e.identifier })
    : fr.IS_CURATOR
      ? (0, J.jsx)(bp, { identifier: e.identifier })
      : (0, J.jsx)(xp, { identifier: e.identifier });
}
function yp(e) {
  let t = new en(fr.CLANSTEAMID),
    { creatorHome: n } = Re(t.GetAccountID());
  return !n || !n.BIsLoaded()
    ? null
    : (0, J.jsx)(Sp, {
        strURL: jt(n.GetCreatorHomeURL(`developer`)),
        strImgUrl: n.GetAvatarURLFullSize(),
        strName: n.GetName(),
      });
}
function bp(e) {
  let t = He(fr.VANITY_ID);
  return t
    ? (0, J.jsx)(Sp, {
        strURL: jt(B.COMMUNITY_BASE_URL + `groups/` + fr.VANITY_ID),
        strImgUrl: t.avatar_full_url,
        strName: t.group_name,
      })
    : null;
}
function xp(e) {
  let [t] = bt(fr.APPID, { include_assets: !0, include_release: !0 });
  return t
    ? (0, J.jsx)(Sp, {
        strURL: jt(t.GetStorePageURL()),
        strImgUrl: t.GetAssets()?.GetSmallCapsuleURL(),
        strName: t.GetName(),
      })
    : null;
}
function Sp(e) {
  let { strURL: t, strImgUrl: n, strName: r } = e;
  return (0, J.jsx)(`div`, {
    className: qt,
    children: (0, J.jsx)(`div`, {
      className: pr,
      children: (0, J.jsxs)(`a`, {
        href: t,
        target: B.IN_CLIENT ? void 0 : `_blank`,
        children: [(0, J.jsx)(`img`, { src: n }), r],
      }),
    }),
  });
}
function Cp(e) {
  let { children: t } = e;
  return nn() && !B.IN_STEAMUI
    ? (0, J.jsx)(Qt, { className: cr, children: t })
    : (0, J.jsx)(J.Fragment, { children: t });
}
var wp = 56,
  Tp = 136,
  Ep = q.lazy(() =>
    Ft(
      () => import(`./broadcast_embeddable.js`).then((e) => e.n),
      __vite__mapDeps([
        53, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 51, 37,
        38, 50, 52, 46, 54, 55, 56, 57, 58, 59, 60, 61, 62, 47, 48, 63,
      ]),
      import.meta.url,
    ),
  );
function Dp(e) {
  let [t, n] = bt(e.appid, { include_assets: !0 }),
    [r, i] = ze(e.clanID),
    a = ``;
  return (
    e.appid
      ? (a = t?.GetAssets()?.GetCommunityIconURL() || ``)
      : e.clanID && (a = i?.avatar_full_url ?? ``),
    (0, J.jsx)(`div`, {
      className: K(rp, np, ip),
      onClick: e.onAppIconClick,
      children: !!a && (0, J.jsx)(`img`, { src: a, alt: `` }),
    })
  );
}
var $ = class extends q.Component {
  m_loader;
  m_refPage = q.createRef();
  m_refContent = q.createRef();
  m_refScroll = q.createRef();
  m_refScrollAnchor = q.createRef();
  m_scrollAnimation = null;
  m_nTouchStartClientY;
  m_nPreviousRenderCount = 0;
  m_nCurrentRenderCount = 0;
  constructor(e) {
    super(e),
      (this.m_loader = new Mp(this.props.partnerEventStore)),
      !this.props.bShowOnlyInitialEvent &&
        this.props.initialEvent &&
        this.m_loader.InitAroundEvent(
          this.props.initialEvent,
          this.props.additionalParams,
        );
  }
  FindCurrentlyViewedEventIndex() {
    let e = this.m_refScroll.current;
    if (!this.m_refContent.current || !e) return -1;
    let t = this.m_refContent.current.children,
      n = this.GetScrollTopForComparison(e);
    for (let e = 0; e < t.length; e++) {
      let r = t[e],
        i = r.offsetTop,
        a = i + r.clientHeight;
      if (i <= n && a > n) return e;
    }
    return -1;
  }
  GetPaddingTop() {
    return this.props.showAppHeader ? Tp : wp;
  }
  GetScrollTopForComparison(e) {
    return Math.ceil(e.scrollTop + this.GetPaddingTop() + 24);
  }
  ScrollToEvent(e) {
    let t = this.m_refContent.current;
    if (!t || e < 0 || e >= t.children.length || this.m_scrollAnimation) return;
    let n = t.children[e].offsetTop - this.GetPaddingTop();
    this.ScrollToOffset(n);
  }
  ScrollToOffset(e) {
    let t = this.m_refScroll.current;
    if (!t) return;
    let n = {
      msDuration: 500,
      timing: `cubic-in-out`,
      onComplete: this.OnScrollComplete,
    };
    (this.m_scrollAnimation = new Nt(t, { scrollTop: e }, n)),
      this.m_scrollAnimation.Start();
  }
  ScrollToBottom() {
    this.m_refScroll.current &&
      this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
  }
  ScrollToNextEvent() {
    let e = this.m_loader.GetEvents(),
      t = this.FindCurrentlyViewedEventIndex() + 1;
    t >= e.length
      ? this.ScrollToBottom()
      : (this.ScrollToEvent(t),
        t == e.length - 1 && this.m_loader.LoadMoreAtEnd());
  }
  ScrollToPrevEvent() {
    let e = this.FindCurrentlyViewedEventIndex(),
      t = e - 1;
    if (t < 0) {
      this.ScrollToOffset(0);
      return;
    }
    let n = this.m_refContent.current,
      r = this.m_refScroll.current;
    if (n && r) {
      let i = n.children[e],
        a = i.offsetTop,
        o = a + i.clientHeight,
        s = this.GetScrollTopForComparison(r);
      (s -= (o - a) * 0.3), a <= s && (t = e);
    }
    this.ScrollToEvent(t);
  }
  OnScrollComplete() {
    this.m_scrollAnimation = null;
  }
  Close() {
    this.props.closeModal && this.props.closeModal();
  }
  OnBackgroundClick(e) {
    e.currentTarget == e.target && this.Close();
  }
  OnKeyDown(e) {
    e.keyCode == 27 && this.Close();
  }
  OnScroll(e) {
    if (this.props.bShowOnlyInitialEvent) return;
    let t = this.m_refScroll.current;
    if (!t) return;
    let n = t.clientHeight;
    t.scrollHeight - (t.scrollTop + n) <= n && this.m_loader.LoadMoreAtEnd(),
      t.scrollTop <= n && this.m_loader.LoadMoreAtBeginning();
  }
  getSnapshotBeforeUpdate(e) {
    let t = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
    if (((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !t))
      return null;
    let n = this.m_refScroll.current;
    if (!n || !this.m_refScrollAnchor.current) return null;
    let r = this.m_refScrollAnchor.current.GetDOM();
    return r ? r.offsetTop - n.scrollTop : null;
  }
  OnTouchStart(e) {
    e.touches.length == 1 && (this.m_nTouchStartClientY = e.touches[0].clientY);
  }
  OnTouchMove(e) {
    if (!this.m_refScroll.current || e.touches.length == 0) return;
    let t = 0;
    this.m_nTouchStartClientY !== void 0 &&
      (t = this.m_nTouchStartClientY - e.touches[0].clientY),
      this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t);
  }
  OnWheel(e) {
    this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, e.deltaY);
  }
  SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t) {
    let n = this.m_refScroll.current;
    if (!n) return;
    let r = Un(e.target) && Rt(n, e.target),
      i = t < 0 && n.scrollTop < 1,
      a = n.scrollHeight - n.scrollTop <= n.clientHeight;
    (!r || i || (t > 0 && a)) && e.cancelable && e.preventDefault();
  }
  SetGlobalHeaderHidden(e) {
    let t = document.getElementsByClassName(`responsive_header`);
    pn(t.length <= 1, `Must have at most one responsive_header`),
      t.length >= 1 && (t[0].style.display = e ? `none` : ``);
  }
  SetFooterPinnedToBottom(e) {
    let t = document.getElementById(`footer`);
    t && (t.style.position = e ? `absolute` : ``);
  }
  componentDidMount() {
    let e = this.m_refScroll.current;
    e && !Rt(e, e.ownerDocument.activeElement) && e.focus();
    let t = this.m_refPage.current;
    t &&
      (t.addEventListener(`touchstart`, this.OnTouchStart),
      t.addEventListener(`touchmove`, this.OnTouchMove, { passive: !1 }),
      t.addEventListener(`wheel`, this.OnWheel, { passive: !1 })),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
      this.SetFooterPinnedToBottom(!0);
  }
  componentDidUpdate(e, t, n) {
    if (n === null) return;
    let r = this.m_refScroll.current;
    if (!r) return;
    Rt(r, r.ownerDocument.activeElement) || r.focus();
    let i = this.m_refScrollAnchor.current
      ? this.m_refScrollAnchor.current.GetDOM()
      : null;
    i && (r.scrollTop = i.offsetTop - n);
  }
  componentWillUnmount() {
    let e = this.m_refPage.current;
    e &&
      (e.removeEventListener(`touchstart`, this.OnTouchStart),
      e.removeEventListener(`touchmove`, this.OnTouchMove),
      e.removeEventListener(`wheel`, this.OnWheel)),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
      this.SetFooterPinnedToBottom(!1);
  }
  render() {
    let { initialEvent: e, bShowOnlyInitialEvent: t } = this.props,
      n = !e,
      r = e ? (t ? [e] : this.m_loader.GetEvents()) : [],
      i = [],
      a = this.props.appid,
      o = this.props.clanSteamID?.GetAccountID();
    for (let t of r) {
      let n = e !== void 0 && t.GID == e.GID,
        r = n;
      i.push(
        (0, J.jsx)(
          kp,
          {
            ref: n ? this.m_refScrollAnchor : null,
            event: t,
            emoticonStore: this.props.emoticonStore,
            partnerEventStore: this.props.partnerEventStore,
            disableReadTracking: n,
            fnFilterImageURLsForKnownFailures:
              this.props.fnFilterImageURLsForKnownFailures,
            fnImageFailureCallback: this.props.fnImageFailureCallback,
            bDisableBroadcastPlayer: !r,
            className: this.props.eventClassName,
          },
          t.GID,
        ),
      ),
        (a ??= t.appid),
        (o ??= t.clanSteamID.GetAccountID());
    }
    return (
      (this.m_nCurrentRenderCount = i.length),
      (0, J.jsxs)(Dt, {
        onCancelButton: this.props.closeModal,
        className: jf,
        ref: this.m_refPage,
        children: [
          this.props.showAppHeader &&
            (0, J.jsx)(mp, { appId: a ?? 0, clanId: o ?? 0 }),
          (0, J.jsx)(Dt, {
            className: K(Pf, void 0),
            ref: this.m_refScroll,
            onScroll: this.OnScroll,
            onClick: this.OnBackgroundClick,
            tabIndex: -1,
            onKeyDown: this.OnKeyDown,
            scrollIntoViewType: wt.NoTransformSparseContent,
            children: n
              ? (0, J.jsx)(`div`, {
                  className: If,
                  children: R(`#EventDisplay_NoEventsToSee`),
                })
              : (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(`div`, {
                      className: K(
                        Nf,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                        t && `LIm3FCjFgqo-`,
                      ),
                      children: (0, J.jsx)(`div`, {
                        className: ep,
                        children: (0, J.jsxs)(`div`, {
                          className: tp,
                          children: [
                            !!this.props.closeModal &&
                              (0, J.jsx)(`div`, {
                                className: K(`TlGGn2-aFiY-`, `ibKXDplBVRg-`),
                                onClick: this.Close,
                                children: (0, J.jsx)(An, {}),
                              }),
                            !t &&
                              (0, J.jsx)(`div`, {
                                className: K(
                                  `QHtC9T0nSOI-`,
                                  `yPve79a1Qm0-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToPrevEvent,
                                children: (0, J.jsx)(At, { angle: 0 }),
                              }),
                            !t &&
                              (0, J.jsx)(`div`, {
                                className: K(
                                  `QHtC9T0nSOI-`,
                                  `_4Lwn5F4-kiE-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToNextEvent,
                                children: (0, J.jsx)(At, { angle: 180 }),
                              }),
                            this.props.onAppIconClick &&
                              (0, J.jsx)(Dp, {
                                appid: a,
                                clanID: o ?? 0,
                                onAppIconClick: this.props.onAppIconClick,
                              }),
                          ],
                        }),
                      }),
                    }),
                    !t &&
                      (0, J.jsx)(Op, {
                        loader: this.m_loader,
                        location: `top`,
                      }),
                    (0, J.jsx)(`div`, {
                      ref: this.m_refContent,
                      className: K(
                        Zf,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                      ),
                      children: i,
                    }),
                    !t &&
                      (0, J.jsx)(Op, {
                        loader: this.m_loader,
                        location: `bottom`,
                      }),
                  ],
                }),
          }),
        ],
      })
    );
  }
};
O([N], $.prototype, `ScrollToNextEvent`, null),
  O([N], $.prototype, `ScrollToPrevEvent`, null),
  O([N], $.prototype, `OnScrollComplete`, null),
  O([N], $.prototype, `Close`, null),
  O([N], $.prototype, `OnBackgroundClick`, null),
  O([N], $.prototype, `OnKeyDown`, null),
  O([N], $.prototype, `OnScroll`, null),
  O([N], $.prototype, `OnTouchStart`, null),
  O([N], $.prototype, `OnTouchMove`, null),
  O([N], $.prototype, `OnWheel`, null),
  ($ = O([i], $));
var Op = i((e) => {
    let t = e.loader.GetNewerState(),
      n = e.loader.GetOlderState();
    return t == 2 && n == 2
      ? null
      : (e.location == `top` ? t : n) == 2
        ? (0, J.jsx)(`div`, {
            className: ap,
            children: (0, J.jsx)(w, {
              position: `center`,
              string: R(`#Loading`),
            }),
          })
        : null;
  }),
  kp = q.forwardRef(function (e, t) {
    let n = nn(),
      [r, i] = bt(e.event.appid, { include_assets: !0 }),
      a = Yt(e.event.appid),
      o = Rn();
    return (0, J.jsx)(Ap, {
      ref: t,
      ...e,
      bInGamepadUI: n,
      bShouldMaskImages: a,
      storeItem: r,
      tracker: o,
    });
  }),
  Ap = class extends q.Component {
    m_refContent = q.createRef();
    m_sendReadInfo = new $t();
    m_bSentRead = !1;
    OnEnterVisible() {
      this.m_bSentRead ||
        this.m_sendReadInfo.IsScheduled() ||
        this.m_sendReadInfo.Schedule(750, () => {
          this.props.tracker.RecordEventRead(this.props.event, 4),
            (this.m_bSentRead = !0);
        });
    }
    OnLeaveVisible() {
      this.m_sendReadInfo.Cancel();
    }
    GetDOM() {
      return this.m_refContent.current;
    }
    render() {
      let {
          event: e,
          langOverride: t,
          partnerEventStore: n,
          emoticonStore: r,
          className: i,
          additionalTypeAndDateElement: a,
          headerClassnames: o,
          isPreview: s,
          bShouldMaskImages: c,
          storeItem: l,
        } = this.props,
        u = t || $n(B.LANGUAGE),
        d = e.GetDescriptionWithFallback(u) || ``,
        f = o,
        p = e.GetCategoryAsString(),
        m = e.type,
        h = ``;
      e.appid
        ? (h = l?.GetName() || ``)
        : e.clanSteamID &&
          (h =
            Ve.GetClanInfoByClanAccountID(e.clanSteamID.GetAccountID())
              ?.group_name ?? ``);
      let g = st.GetTimeNowWithOverride(),
        _ = m !== 28 && g < e.GetStartTimeAndDateUnixSeconds() && !s,
        v = null;
      return (
        e.jsondata.bSaleEnabled && e.jsondata.sale_vanity_id && (v = Be(e)),
        (0, J.jsx)(Cp, {
          children: (0, J.jsxs)(`div`, {
            ref: this.m_refContent,
            className: K(i, Qf, Mu, f == `editor` ? Nu : ``),
            children: [
              (0, J.jsx)(jp, { ...this.props, eLanguage: u }),
              (0, J.jsx)(`div`, {
                className: Fu,
                children: (0, J.jsxs)(`div`, {
                  className: Yu,
                  children: [
                    this.props.headerElement,
                    (0, J.jsxs)(`div`, {
                      className: K(op, _ && `EL3MaVqCn0g-`),
                      children: [
                        (0, J.jsxs)(`div`, {
                          className: sp,
                          children: [
                            (0, J.jsx)(`span`, { className: cp, children: p }),
                            (0, J.jsxs)(`span`, {
                              className: lp,
                              children: [
                                ` `,
                                R(`#EventDisplay_PostedBy`),
                                h,
                                ` `,
                              ],
                            }),
                            (0, J.jsx)(ru, { event: e, className: Vu }),
                          ],
                        }),
                        _ &&
                          !s &&
                          (0, J.jsx)(`div`, {
                            className: `Q4ZSdOUuSKg-`,
                            children: (0, J.jsx)(ho, {
                              eventModel: e,
                              lang: u,
                              bExpandLeft: !0,
                            }),
                          }),
                        !s && a,
                      ],
                    }),
                    !this.props.disableReadTracking &&
                      !s &&
                      (0, J.jsx)(We, {
                        onEnter: this.OnEnterVisible,
                        onLeave: this.OnLeaveVisible,
                        options: { rootMargin: `0px 0px -300px 0px` },
                      }),
                    this.props.bInGamepadUI
                      ? (0, J.jsx)(`div`, {
                          className: Ju,
                          children: e.GetNameWithFallback(u),
                        })
                      : (0, J.jsx)(qe, {
                          eventModel: e,
                          route: Xe.k_eView,
                          className: Ju,
                          children: e.GetNameWithFallback(u),
                        }),
                    e.BHasSubTitle(u) &&
                      (0, J.jsx)(`div`, {
                        className: K(`ay-K0NBOIuc-`, `ID9Ds4YdxDc-`),
                        children: e.GetSubTitle(u),
                      }),
                    (0, J.jsx)(`div`, { className: zu }),
                  ],
                }),
              }),
              !(
                !e.BEventCanShowBroadcastWidget() ||
                this.props.bDisableBroadcastPlayer
              ) &&
                (0, J.jsx)(`div`, {
                  className: `hSFWQBRmqTY-`,
                  children: (0, J.jsx)(q.Suspense, {
                    fallback: null,
                    children: (0, J.jsx)(Ep, { event: this.props.event }),
                  }),
                }),
              e.BHasTag(`steam_award_nomination_request`) &&
                (0, J.jsx)(kf, { event: e, lang: u }),
              e.BHasTag(`steam_award_vote_request`) &&
                (0, J.jsx)(Af, {
                  appID: e.appid,
                  bIsEventActionEnabled: e.BIsEventActionEnabled(),
                  voteCategories: e.GetSteamAwardNomineeCategories(),
                }),
              (0, J.jsxs)(`div`, {
                className: td,
                children: [
                  (0, J.jsxs)(`div`, {
                    className: K(Uu, $f, c && `Vye1545x6hY-`),
                    onContextMenu: B.IN_CLIENT ? tr : void 0,
                    children: [
                      (0, J.jsx)(Ul, { text: d, event: e }),
                      (0, J.jsx)(`span`, { className: jn }),
                    ],
                  }),
                  (0, J.jsx)(gp, { event: this.props.event }),
                  !!e.jsondata.read_more_link &&
                    (0, J.jsx)(`div`, {
                      className: K(`Hr-OMRnVpqk-`),
                      children: (0, J.jsx)(Et, {
                        className: K(`yYL-OrX9PtQ-`),
                        href: e.jsondata.read_more_link,
                        children: R(`#EventEmail_Button_ClickForMoreDetails`),
                      }),
                    }),
                  v && (0, J.jsx)(xe, { event: e, language: u, strSaleURL: v }),
                  (0, J.jsx)(sr, { appid: e.appid }),
                ],
              }),
              !s && (0, J.jsx)(pu, { eventModel: e, emoticonStore: r }),
            ],
          }),
        })
      );
    }
  };
O([N], Ap.prototype, `OnEnterVisible`, null),
  O([N], Ap.prototype, `OnLeaveVisible`, null),
  (Ap = O([i], Ap));
function jp(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
      eLanguage: i,
      bShouldMaskImages: a,
    } = e,
    o = t.BImageNeedScreenshotFallback(`background`, i),
    s = t.type,
    c = tt(t, `background`, i, Ee.background_main, !o);
  return (
    n && c && (c = n(c)),
    (0, J.jsxs)(J.Fragment, {
      children: [
        s != 12 &&
          !o &&
          c &&
          (0, J.jsx)(Ge, {
            className: K(`b5t8fHKcG3c-`, a && `Vye1545x6hY-`),
            rgSources: c,
            onIncrementalError: (e, t, n) => r && r(t),
          }),
        c &&
          c.length > 0 &&
          (0, J.jsx)(Ge, {
            className: `V-UPj6R9FQU-`,
            rgSources: c,
            onIncrementalError: (e, t, n) => r && r(t),
          }),
      ],
    })
  );
}
var Mp = class {
  k_nMaxPerDirection = 3;
  m_nAppID = 0;
  m_clanSteamID = new en();
  m_partnerEventStore;
  m_additionalParams;
  m_rgEvents = [];
  m_eOlderDirection = 1;
  m_eNewerDirection = 1;
  constructor(e) {
    u(this), (this.m_partnerEventStore = e);
  }
  GetEvents() {
    return this.m_rgEvents;
  }
  GetAppID() {
    return this.m_nAppID;
  }
  GetOlderState() {
    return this.m_eOlderDirection;
  }
  GetNewerState() {
    return this.m_eNewerDirection;
  }
  async InitAroundEvent(e, t) {
    let n = this.m_partnerEventStore;
    (this.m_nAppID = e.appid),
      (this.m_clanSteamID = e.clanSteamID),
      (this.m_rgEvents = []),
      (this.m_eOlderDirection = 2),
      (this.m_eNewerDirection = 2),
      (this.m_additionalParams = t),
      this.m_rgEvents.push(e);
    let i;
    try {
      i = await n.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    r(() => {
      if (!i || i.length == 0) {
        (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
        return;
      }
      let t = i.findIndex((t) => t.GID == e.GID),
        n = t,
        r = t >= 0 ? i.length - t - 1 : 0;
      (this.m_eNewerDirection = n >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_eOlderDirection = r >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_rgEvents = i);
    });
  }
  async LoadMoreAtEnd() {
    if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0) return;
    let e = this.m_rgEvents[this.m_rgEvents.length - 1];
    this.m_eOlderDirection = 2;
    let t;
    try {
      t = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        0,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    r(() => {
      if (!t) {
        this.m_eOlderDirection = 1;
        return;
      }
      let e = new Set(
        this.m_rgEvents.map((e) => e.GID).filter((e) => e !== void 0),
      );
      for (let n of t) {
        let t = n.GID;
        t && !e.has(t) && (this.m_rgEvents.push(n), e.add(t));
      }
      this.m_eOlderDirection = t.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
  async LoadMoreAtBeginning() {
    if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0) return;
    let e = this.m_rgEvents[0];
    this.m_eNewerDirection = 2;
    let t;
    try {
      t = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        0,
        this.m_additionalParams,
      );
    } catch {}
    r(() => {
      if (!t) {
        this.m_eNewerDirection = 1;
        return;
      }
      let e = new Set(
        this.m_rgEvents.map((e) => e.GID).filter((e) => e !== void 0),
      );
      for (let n of t.reverse()) {
        let t = n.GID;
        t && !e.has(t) && (this.m_rgEvents.unshift(n), e.add(t));
      }
      this.m_eNewerDirection = t.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
};
O([f.shallow], Mp.prototype, `m_rgEvents`, void 0),
  O([f], Mp.prototype, `m_eOlderDirection`, void 0),
  O([f], Mp.prototype, `m_eNewerDirection`, void 0);
export {
  Ru as $,
  si as $t,
  vu as A,
  Cc as At,
  ed as B,
  fa as Bt,
  hd as C,
  hl as Ct,
  _d as D,
  Ac as Dt,
  pd as E,
  pl as Et,
  Du as F,
  Aa as Ft,
  Ju as G,
  Xi as Gt,
  Zu as H,
  ua as Ht,
  ju as I,
  Z as It,
  zu as J,
  Ji as Jt,
  Yu as K,
  Zi as Kt,
  Su as L,
  wa as Lt,
  Cu as M,
  vo as Mt,
  wu as N,
  ho as Nt,
  vd as O,
  yc as Ot,
  Eu as P,
  za as Pt,
  mu as Q,
  Fi as Qt,
  Ou as R,
  Ca as Rt,
  ud as S,
  Pl as St,
  md as T,
  ml as Tt,
  Bu as U,
  sa as Ut,
  $u as V,
  da as Vt,
  Vu as W,
  la as Wt,
  Uu as X,
  Ri as Xt,
  Wu as Y,
  Hi as Yt,
  Hu as Z,
  Mi as Zt,
  Iu as _,
  nu as _t,
  gp as a,
  jr as an,
  Gu as at,
  cd as b,
  Wl as bt,
  Af as c,
  Pr as cn,
  yd as ct,
  Ed as d,
  ld as dt,
  li as en,
  Xu as et,
  Ku as f,
  od as ft,
  ad as g,
  au as gt,
  sd as h,
  pu as ht,
  vp as i,
  Kr as in,
  gu as it,
  Tu as j,
  Uo as jt,
  yu as k,
  xc as kt,
  zd as l,
  Or as ln,
  nd as lt,
  id as m,
  fu as mt,
  kp as n,
  Qr as nn,
  hu as nt,
  mp as o,
  Mr as on,
  fd as ot,
  gd as p,
  Qu as pt,
  Lu as q,
  ta as qt,
  _p as r,
  Gr as rn,
  _u as rt,
  kf as s,
  Nr as sn,
  ku as st,
  $ as t,
  hi as tn,
  qu as tt,
  Od as u,
  Dr as un,
  Au as ut,
  bu as v,
  Gl as vt,
  rd as w,
  gl as wt,
  dd as x,
  Nl as xt,
  xu as y,
  Ul as yt,
  Pu as z,
  Da as zt,
};

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./chunk~f025431ab0.js";
import {
  $t as t,
  An as n,
  Cn as r,
  Ct as i,
  Dn as a,
  Dt as o,
  En as s,
  F as c,
  Fn as l,
  Ft as u,
  Ht as d,
  Lt as f,
  On as p,
  Ot as m,
  Pn as h,
  Qt as g,
  Rn as _,
  Rt as ee,
  Sn as v,
  Tn as y,
  Un as te,
  Vt as b,
  dn as x,
  en as ne,
  hn as S,
  i as re,
  in as ie,
  it as ae,
  jt as C,
  kn as oe,
  ln as se,
  mn as ce,
  mt as w,
  pt as le,
  sn as ue,
  tn as de,
  wn as T,
  xn as E,
  yn as D,
  z as fe,
  zt as pe,
} from "./chunk~9a06851bec.js";
import {
  $ as me,
  At as he,
  Bt as O,
  Ct as ge,
  Dt as _e,
  Et as ve,
  Ft as k,
  It as ye,
  J as be,
  K as xe,
  Lt as Se,
  Mt as Ce,
  Nt as we,
  Ot as Te,
  Pt as Ee,
  Q as De,
  Rt as Oe,
  St as ke,
  Tt as Ae,
  W as je,
  X as Me,
  Y as Ne,
  Z as Pe,
  _t as Fe,
  a as Ie,
  at as Le,
  bt as Re,
  c as ze,
  ct as A,
  d as Be,
  dt as Ve,
  et as He,
  ft as j,
  gt as Ue,
  ht as We,
  i as Ge,
  it as Ke,
  jt as M,
  kt as qe,
  l as Je,
  lt as Ye,
  mt as Xe,
  n as Ze,
  nt as Qe,
  o as $e,
  ot as N,
  pt as P,
  q as et,
  r as tt,
  rt as nt,
  s as rt,
  st as it,
  t as at,
  tt as F,
  u as ot,
  ut as st,
  vt as ct,
  wt as lt,
  xt as ut,
  yt as dt,
  zt as ft,
} from "./main.js";
var I = e(te()),
  L = e(oe(), 1),
  pt = new (class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(e) {
      (this.m_transport != null &&
        console.error(
          `Multiple attempts to set a default WebUI transport: overriding previous`,
        ),
        (this.m_transport = e));
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(e) {
      (this.m_registry != null &&
        console.error(
          `Multiple attempts to set a default WebUI message handler registry: overriding previous`,
        ),
        (this.m_registry = e));
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  })();
function R() {
  return pt;
}
var z = le(),
  mt = e(ve(), 1),
  ht = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            clanid: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            link_url: { n: 3, br: T.readString, bw: p.writeString },
            link_text: { n: 4, br: T.readString, bw: p.writeString },
            blurb: { n: 5, br: T.readString, bw: p.writeString },
            time_recommended: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            comment_count: { n: 7, br: T.readInt32, bw: p.writeInt32 },
            upvote_count: { n: 8, br: T.readInt32, bw: p.writeInt32 },
            accountid_creator: { n: 9, br: T.readUint32, bw: p.writeUint32 },
            recommendation_state: { n: 10, br: T.readEnum, bw: p.writeEnum },
            received_compensation: { n: 11, br: T.readBool, bw: p.writeBool },
            received_for_free: { n: 12, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  gt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.listid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [10, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            listid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            title: { n: 2, br: T.readString, bw: p.writeString },
            blurb: { n: 3, br: T.readString, bw: p.writeString },
            link: { n: 4, br: T.readString, bw: p.writeString },
            list_state: { n: 5, br: T.readEnum, bw: p.writeEnum },
            sort_order: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            time_created: { n: 7, br: T.readUint32, bw: p.writeUint32 },
            time_updated: { n: 8, br: T.readUint32, bw: p.writeUint32 },
            accountid: { n: 9, br: T.readUint32, bw: p.writeUint32 },
            apps: { n: 10, c: _t, r: !0, q: !0 },
            list_type: { n: 11, br: T.readEnum, bw: p.writeEnum },
            title_localization: { n: 12, c: x, r: !0, q: !0 },
            blurb_localization: { n: 13, c: x, r: !0, q: !0 },
            link_localization: { n: 14, c: x, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            list_jsondata: { n: 17, br: T.readString, bw: p.writeString },
            clan_account_id: { n: 18, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  _t = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommended_app || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommended_app: { n: 1, c: ht },
            blurb: { n: 2, br: T.readString, bw: p.writeString },
            sort_order: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  vt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            list_state: { n: 2, br: T.readEnum, bw: p.writeEnum },
            start: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            count: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            return_total_only: { n: 5, br: T.readBool, bw: p.writeBool },
            return_metadata_only: { n: 6, br: T.readBool, bw: p.writeBool },
            max_apps: { n: 7, br: T.readInt32, bw: p.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  yt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.list_details || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            list_details: { n: 1, c: gt, r: !0, q: !0 },
            total: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  bt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            listid: { n: 2, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  xt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.list_details || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: gt } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  St;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`StoreCuration.GetLists#1`, t(vt, n, r), yt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetLists = n;
  function r(e, n, r) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, t(bt, n, r), xt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetListDetails = r;
})((St ||= {}));
async function Ct(e) {
  return Dt(
    `${C.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function wt(e) {
  let t = k.InitFromClanID(e, C.EUNIVERSE);
  return Dt(
    `${C.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Tt(e) {
  return Dt(
    `${C.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Et(e) {
  return Dt(
    `${C.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Dt(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function Ot(e) {
  return [`clantoclaninfo`, e];
}
function kt(e) {
  return [`apptoclanid`, e];
}
function At(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function jt(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var Mt = new WeakSet();
function Nt(e) {
  if (!Mt.has(e)) {
    Mt.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var Pt = new WeakMap();
function Ft(e) {
  if (!e) return null;
  let t = Pt.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new k(e.clanSteamIDString)
          : k.InitFromClanID(e.clanAccountID, C.EUNIVERSE),
      }),
      Pt.set(e, t)),
    t
  );
}
function It(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function Lt(e, t) {
  if (!t) return null;
  Nt(e);
  let n = It(t);
  return (
    e.setQueryData(Ot(n.clanAccountID), n),
    n.appid && e.setQueryData(kt(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(At(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function Rt(e, t) {
  for (let n of t) Lt(e, n);
}
function zt(e) {
  let t = Te();
  return _e(Bt(e, t));
}
function Bt(e, t) {
  return (
    Nt(t),
    {
      queryKey: Ot(e ?? null),
      queryFn: async () => (e ? Lt(t, await wt(e)) : null),
      enabled: e !== void 0,
      select: Ft,
    }
  );
}
function Vt(e, t) {
  return (
    Nt(t),
    {
      queryKey: kt(e),
      queryFn: async () => Lt(t, await Ct(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function Ht(e, t, n = `group`) {
  return (
    Nt(t),
    {
      queryKey: At(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(At(e, `group`));
          if (n) return n;
        }
        return (
          Lt(t, n == `store` ? await Et(e) : await Tt(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Ut(e, t) {
  if (e) return Ft(t.getQueryData(Ot(e))) ?? void 0;
}
function Wt(e, t) {
  if (e) return Ut(t.getQueryData(kt(e)), t);
}
function Gt(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = Ut(t.getQueryData(At(e, n)), t);
    if (r) return r;
  }
}
async function Kt(e, t) {
  return e ? Ft(await t.fetchQuery(Bt(e, t))) : null;
}
async function qt(e, t) {
  return e ? Kt(await t.fetchQuery(Vt(e, t)), t) : null;
}
async function Jt(e, t, n = `group`) {
  return e ? Kt(await t.fetchQuery(Ht(e, t, n)), t) : null;
}
var B = e(we());
function Yt(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${C.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${C.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
var Xt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            is_allowed: { n: 2, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalApp`;
    }
  },
  Zt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allowed_time_windows || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allowed_time_windows: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            allowed_daily_minutes: {
              n: 2,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalPlaytimeDay`;
    }
  },
  Qt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apply_playtime_restrictions || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apply_playtime_restrictions: {
              n: 2,
              br: T.readBool,
              bw: p.writeBool,
            },
            playtime_days: { n: 15, c: Zt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalPlaytimeRestrictions`;
    }
  },
  $t = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.restrictions || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            restrictions: { n: 1, c: Zt },
            rtime_expires: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalTemporaryPlaytimeRestrictions`;
    }
  },
  en = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [4, 5, 17, 18, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            applist_base_id: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            applist_base_description: {
              n: 3,
              br: T.readString,
              bw: p.writeString,
            },
            applist_base: { n: 4, c: Xt, r: !0, q: !0 },
            applist_custom: { n: 5, c: Xt, r: !0, q: !0 },
            passwordhashtype: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            salt: { n: 7, br: T.readBytes, bw: p.writeBytes },
            passwordhash: { n: 8, br: T.readBytes, bw: p.writeBytes },
            is_enabled: { n: 9, br: T.readBool, bw: p.writeBool },
            enabled_features: { n: 10, br: T.readUint32, bw: p.writeUint32 },
            recovery_email: { n: 11, br: T.readString, bw: p.writeString },
            is_site_license_lock: { n: 12, br: T.readBool, bw: p.writeBool },
            temporary_enabled_features: {
              n: 13,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            rtime_temporary_feature_expiration: {
              n: 14,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            playtime_restrictions: { n: 15, c: Qt },
            temporary_playtime_restrictions: { n: 16, c: $t },
            excluded_store_content_descriptors: {
              n: 17,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            excluded_community_content_descriptors: {
              n: 18,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            utility_appids: {
              n: 19,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalSettings`;
    }
  },
  tn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requestid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            family_groupid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            features: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            time_requested: { n: 5, br: T.readUint32, bw: p.writeUint32 },
            approved: { n: 6, br: T.readBool, bw: p.writeBool },
            steamid_responder: {
              n: 7,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_responded: { n: 8, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalFeatureRequest`;
    }
  },
  nn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requestid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            family_groupid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            current_playtime_restrictions: { n: 4, c: Zt },
            time_expires: { n: 5, br: T.readUint32, bw: p.writeUint32 },
            time_requested: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            approved: { n: 7, br: T.readBool, bw: p.writeBool },
            steamid_responder: {
              n: 8,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_responded: { n: 9, br: T.readUint32, bw: p.writeUint32 },
            restrictions_approved: { n: 10, c: $t },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ParentalPlaytimeRequest`;
    }
  },
  rn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.password || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: p.writeString },
            settings: { n: 2, c: en },
            sessionid: { n: 3, br: T.readString, bw: p.writeString },
            enablecode: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Request`;
    }
  },
  an = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Response`;
    }
  },
  on = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.password || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: p.writeString },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Request`;
    }
  },
  sn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Response`;
    }
  },
  cn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_GetParentalSettings_Request`;
    }
  },
  ln = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { settings: { n: 1, c: en } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_GetParentalSettings_Response`;
    }
  },
  un = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.priority || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { priority: { n: 1, br: T.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_GetSignedParentalSettings_Request`;
    }
  },
  dn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.serialized_settings || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serialized_settings: { n: 1, br: T.readBytes, bw: p.writeBytes },
            signature: { n: 2, br: T.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_GetSignedParentalSettings_Response`;
    }
  },
  fn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.password || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: p.writeString },
            settings: { n: 2, c: en },
            new_password: { n: 3, br: T.readString, bw: p.writeString },
            sessionid: { n: 4, br: T.readString, bw: p.writeString },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_SetParentalSettings_Request`;
    }
  },
  pn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_SetParentalSettings_Response`;
    }
  },
  mn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unlock_token || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unlock_token: { n: 1, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ValidateToken_Request`;
    }
  },
  hn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ValidateToken_Response`;
    }
  },
  gn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.password || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: p.writeString },
            session: { n: 2, br: T.readString, bw: p.writeString },
            send_unlock_on_success: { n: 3, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ValidatePassword_Request`;
    }
  },
  _n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ValidatePassword_Response`;
    }
  },
  vn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.session || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { session: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_LockClient_Request`;
    }
  },
  yn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_LockClient_Response`;
    }
  },
  bn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Request`;
    }
  },
  xn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Response`;
    }
  },
  Sn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.features || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            features: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_RequestFeatureAccess_Request`;
    }
  },
  Cn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requestid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_RequestFeatureAccess_Response`;
    }
  },
  wn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.approve || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            approve: { n: 1, br: T.readBool, bw: p.writeBool },
            requestid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            features: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            duration: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Request`;
    }
  },
  Tn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Response`;
    }
  },
  En = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time_expires || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time_expires: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            current_playtime_restrictions: { n: 2, c: Zt },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_RequestPlaytime_Request`;
    }
  },
  Dn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requestid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_RequestPlaytime_Response`;
    }
  },
  On = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.approve || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            approve: { n: 1, br: T.readBool, bw: p.writeBool },
            requestid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            restrictions_approved: { n: 3, c: $t },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Request`;
    }
  },
  kn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Response`;
    }
  },
  An = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rt_include_completed_since || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_include_completed_since: {
              n: 1,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            family_groupid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_GetRequests_Request`;
    }
  },
  jn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.feature_requests || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            feature_requests: { n: 1, c: tn, r: !0, q: !0 },
            playtime_requests: { n: 2, c: nn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_GetRequests_Response`;
    }
  },
  Mn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.day_of_week || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            day_of_week: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            minutes_used: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Request`;
    }
  },
  Nn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Response`;
    }
  },
  Pn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.serialized_settings || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serialized_settings: { n: 1, br: T.readBytes, bw: p.writeBytes },
            signature: { n: 2, br: T.readBytes, bw: p.writeBytes },
            password: { n: 3, br: T.readString, bw: p.writeString },
            sessionid: { n: 4, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ParentalSettingsChange_Notification`;
    }
  },
  Fn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.password || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: p.writeString },
            sessionid: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ParentalUnlock_Notification`;
    }
  },
  In = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessionid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sessionid: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_ParentalLock_Notification`;
    }
  },
  Ln = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.day_of_week || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            day_of_week: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            minutes_used: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CParental_PlaytimeUsed_Notification`;
    }
  },
  Rn;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`Parental.EnableParentalSettings#1`, t(rn, n, r), an, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.EnableParentalSettings = n;
  function r(e, n, r) {
    return e.SendMsg(`Parental.DisableParentalSettings#1`, t(on, n, r), sn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.DisableParentalSettings = r;
  function i(e, n, r) {
    return e.SendMsg(`Parental.GetParentalSettings#1`, t(cn, n, r), ln, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetParentalSettings = i;
  function a(e, n, r) {
    return e.SendMsg(`Parental.GetSignedParentalSettings#1`, t(un, n, r), dn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSignedParentalSettings = a;
  function o(e, n, r) {
    return e.SendMsg(`Parental.SetParentalSettings#1`, t(fn, n, r), pn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetParentalSettings = o;
  function s(e, n, r) {
    return e.SendMsg(`Parental.ValidateToken#1`, t(mn, n, r), hn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.ValidateToken = s;
  function c(e, n, r) {
    return e.SendMsg(`Parental.ValidatePassword#1`, t(gn, n, r), _n, {
      ePrivilege: 1,
    });
  }
  e.ValidatePassword = c;
  function l(e, n, r) {
    return e.SendMsg(`Parental.LockClient#1`, t(vn, n, r), yn, {
      ePrivilege: 1,
    });
  }
  e.LockClient = l;
  function u(e, n, r) {
    return e.SendMsg(`Parental.RequestRecoveryCode#1`, t(bn, n, r), xn, {
      ePrivilege: 1,
    });
  }
  e.RequestRecoveryCode = u;
  function d(e, n, r) {
    return e.SendMsg(`Parental.RequestFeatureAccess#1`, t(Sn, n, r), Cn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RequestFeatureAccess = d;
  function f(e, n, r) {
    return e.SendMsg(`Parental.ApproveFeatureAccess#1`, t(wn, n, r), Tn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.ApproveFeatureAccess = f;
  function p(e, n, r) {
    return e.SendMsg(`Parental.RequestPlaytime#1`, t(En, n, r), Dn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RequestPlaytime = p;
  function m(e, n, r) {
    return e.SendMsg(`Parental.ApprovePlaytime#1`, t(On, n, r), kn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.ApprovePlaytime = m;
  function h(e, n, r) {
    return e.SendMsg(`Parental.GetRequests#1`, t(An, n, r), jn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetRequests = h;
  function g(e, n, r) {
    return e.SendMsg(`Parental.ReportPlaytimeAndNotify#1`, t(Mn, n, r), Nn, {
      ePrivilege: 1,
    });
  }
  e.ReportPlaytimeAndNotify = g;
})((Rn ||= {}));
var zn;
(function (e) {
  ((e.NotifySettingsChangeHandler = {
    name: `ParentalClient.NotifySettingsChange#1`,
    request: Pn,
  }),
    (e.NotifyUnlockHandler = {
      name: `ParentalClient.NotifyUnlock#1`,
      request: Fn,
    }),
    (e.NotifyLockHandler = {
      name: `ParentalClient.NotifyLock#1`,
      request: In,
    }),
    (e.NotifyPlaytimeUsedHandler = {
      name: `ParentalClient.NotifyPlaytimeUsed#1`,
      request: Ln,
    }));
})((zn ||= {}));
function Bn(e) {
  return [`parentalsettings`, e];
}
function Vn(e) {
  let t = e.applist_base.concat(e.applist_custom);
  return new Map(t.map((e) => [e.appid, e.is_allowed]));
}
async function Hn(e, t) {
  let n = g.Init(cn);
  n.Body().set_steamid(t);
  let r = await Rn.GetParentalSettings(e, n);
  if (r.GetEResult() != 1)
    throw Error(`Error from GetParentalSettings: ${r.GetEResult()}`);
  let i = r.Body().settings().toObject();
  return (
    (i.playtime_restrictions ||= {
      apply_playtime_restrictions: !1,
      playtime_days: Array(7).fill({
        allowed_time_windows: BigInt(0xffffffffffff).toString(),
        allowed_daily_minutes: 1440,
      }),
    }),
    { settings: i, mapAppsAllowed: Vn(i) }
  );
}
function Un(e, t, n) {
  return {
    queryKey: Bn(t),
    queryFn: () => Hn(e, t),
    placeholderData: { settings: void 0, mapAppsAllowed: void 0 },
    ...n,
  };
}
function Wn(e) {
  let t = Oe();
  return _e(Un(t, e));
}
function Gn(e, t) {
  return [`validateparentaltoken`, e, t];
}
function Kn() {
  let e = pe(`clientsessionid`),
    t = pe(`sessionid`);
  return e || t;
}
function qn() {
  let e = Oe(),
    t = O(),
    n = pe(`steamparental`),
    r = Kn(),
    i = n,
    a = i?.split(`||`) || [];
  a.length == 2 && (i = a[1]);
  let o = i && i !== `0` ? r + `||` + i : void 0,
    s = _e({
      queryKey: Gn(t, o),
      queryFn: async () => {
        if (!o) return 15;
        let t = g.Init(mn);
        return (
          t.Body().set_unlock_token(o),
          (await Rn.ValidateToken(e, t)).GetEResult()
        );
      },
    });
  return !s.isSuccess || s.data !== 1;
}
function Jn(e, t, n) {
  if (t == 0 || t == null) return !1;
  if (!e) return !0;
  if (!e.is_enabled || !n) return !1;
  if (t == 15) return !0;
  let r = e.enabled_features;
  return !r || !(r & (1 << t));
}
function Yn(e) {
  let { settings: t } = Wn(O()).data ?? {};
  return Jn(t, e, qn());
}
function Xn(e) {
  return `unknown ESteamNotificationType ( ` + e + ` )`;
}
var Zn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            notification_targets: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            notification_type: { n: 3, br: T.readEnum, bw: p.writeEnum },
            body_data: { n: 4, br: T.readString, bw: p.writeString },
            read: { n: 7, br: T.readBool, bw: p.writeBool },
            timestamp: { n: 8, br: T.readUint32, bw: p.writeUint32 },
            hidden: { n: 9, br: T.readBool, bw: p.writeBool },
            expiry: { n: 10, br: T.readUint32, bw: p.writeUint32 },
            viewed: { n: 11, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamNotificationData`;
    }
  },
  Qn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_hidden || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_hidden: { n: 1, d: !1, br: T.readBool, bw: p.writeBool },
            language: { n: 2, d: 0, br: T.readInt32, bw: p.writeInt32 },
            include_confirmation_count: {
              n: 3,
              d: !0,
              br: T.readBool,
              bw: p.writeBool,
            },
            include_pinned_counts: {
              n: 4,
              d: !1,
              br: T.readBool,
              bw: p.writeBool,
            },
            include_read: { n: 5, d: !0, br: T.readBool, bw: p.writeBool },
            count_only: { n: 6, d: !1, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  $n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notifications || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Zn, r: !0, q: !0 },
            confirmation_count: { n: 2, br: T.readInt32, bw: p.writeInt32 },
            pending_gift_count: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            pending_friend_count: { n: 5, br: T.readUint32, bw: p.writeUint32 },
            unread_count: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            pending_family_invite_count: {
              n: 7,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            notification_type: { n: 2, br: T.readEnum, bw: p.writeEnum },
            notification_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
            mark_all_read: { n: 4, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            remote_client_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            target_client_type: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  nr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            notification_targets: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamNotificationPreference`;
    }
  },
  rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: nr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: nr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_ids || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notifications || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Zn, r: !0, q: !0 },
            pending_gift_count: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            pending_friend_count: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            pending_family_invite_count: {
              n: 4,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  lr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: nr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_PreferencesUpdated_Notification`;
    }
  },
  ur;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(
      `SteamNotification.GetSteamNotifications#1`,
      t(Qn, n, r),
      $n,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetSteamNotifications = n;
  function r(e, n) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      t(er, n),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.MarkNotificationsRead = r;
  function i(e, n) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      t(tr, n),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.MarkNotificationsViewed = i;
  function a(e, n) {
    return e.SendNotification(
      `SteamNotification.HideNotification#1`,
      t(sr, n),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.HideNotification = a;
  function o(e, n, r) {
    return e.SendMsg(`SteamNotification.SetPreferences#1`, t(rr, n, r), ir, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.SetPreferences = o;
  function s(e, n, r) {
    return e.SendMsg(`SteamNotification.GetPreferences#1`, t(ar, n, r), or, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPreferences = s;
})((ur ||= {}));
var dr;
(function (e) {
  ((e.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: cr,
  }),
    (e.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: lr,
    }));
})((dr ||= {}));
var fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: T.readString, bw: p.writeString },
            value: { n: 2, br: T.readString, bw: p.writeString },
            color: { n: 3, br: T.readString, bw: p.writeString },
            label: { n: 4, br: T.readString, bw: p.writeString },
            name: { n: 5, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: T.readString, bw: p.writeString },
            name: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            category: { n: 2, br: T.readString, bw: p.writeString },
            internal_name: { n: 3, br: T.readString, bw: p.writeString },
            localized_category_name: {
              n: 4,
              br: T.readString,
              bw: p.writeString,
            },
            localized_tag_name: { n: 5, br: T.readString, bw: p.writeString },
            color: { n: 6, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contained_items || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: gr, r: !0, q: !0 },
            search_tags: { n: 2, c: mr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  _r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(
          this,
          t,
          0,
          -1,
          [8, 10, 11, 12, 13, 21, 26],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readInt32, bw: p.writeInt32 },
            classid: { n: 2, br: T.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            currency: { n: 4, br: T.readBool, bw: p.writeBool },
            background_color: { n: 5, br: T.readString, bw: p.writeString },
            icon_url: { n: 6, br: T.readString, bw: p.writeString },
            icon_url_large: { n: 7, br: T.readString, bw: p.writeString },
            descriptions: { n: 8, c: fr, r: !0, q: !0 },
            tradable: { n: 9, br: T.readBool, bw: p.writeBool },
            actions: { n: 10, c: pr, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: fr, r: !0, q: !0 },
            owner_actions: { n: 12, c: pr, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: T.readString,
              bw: p.writeRepeatedString,
            },
            name: { n: 14, br: T.readString, bw: p.writeString },
            name_color: { n: 15, br: T.readString, bw: p.writeString },
            type: { n: 16, br: T.readString, bw: p.writeString },
            market_name: { n: 17, br: T.readString, bw: p.writeString },
            market_hash_name: { n: 18, br: T.readString, bw: p.writeString },
            market_fee: { n: 19, br: T.readString, bw: p.writeString },
            market_fee_app: { n: 28, br: T.readInt32, bw: p.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: pr, r: !0, q: !0 },
            commodity: { n: 22, br: T.readBool, bw: p.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: T.readInt32,
              bw: p.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: T.readInt32,
              bw: p.writeInt32,
            },
            marketable: { n: 25, br: T.readBool, bw: p.writeBool },
            tags: { n: 26, c: mr, r: !0, q: !0 },
            item_expiration: { n: 27, br: T.readString, bw: p.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: T.readString,
              bw: p.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: T.readString,
              bw: p.writeString,
            },
            sealed: { n: 32, br: T.readBool, bw: p.writeBool },
            container_properties: { n: 33, c: hr },
            market_bucket_group_name: {
              n: 34,
              br: T.readString,
              bw: p.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: T.readString,
              bw: p.writeString,
            },
            sealed_type: { n: 37, br: T.readUint32, bw: p.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: T.readString,
              bw: p.writeString,
            },
            market_bucket_id: { n: 39, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.propertyid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            int_value: { n: 2, br: T.readInt64String, bw: p.writeInt64String },
            float_value: { n: 3, br: T.readFloat, bw: p.writeFloat },
            string_value: { n: 4, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            standalone_properties: { n: 3, c: vr, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: vr, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: T.readUint64String, bw: p.writeUint64String },
            asset_properties: { n: 4, c: vr, r: !0, q: !0 },
            asset_accessories: { n: 5, c: yr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            name: { n: 2, br: T.readString, bw: p.writeString },
            type: { n: 3, br: T.readEnum, bw: p.writeEnum },
            float_min: { n: 4, br: T.readFloat, bw: p.writeFloat },
            float_max: { n: 5, br: T.readFloat, bw: p.writeFloat },
            int_min: { n: 6, br: T.readInt64String, bw: p.writeInt64String },
            int_max: { n: 7, br: T.readInt64String, bw: p.writeInt64String },
            localized_label: { n: 8, br: T.readString, bw: p.writeString },
            hide_from_description: { n: 9, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  Sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            language: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  Cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_schemas || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: xr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: T.readUint64String, bw: p.writeUint64String },
            classid: { n: 4, br: T.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 5,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            currencyid: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            amount: { n: 7, br: T.readInt64String, bw: p.writeInt64String },
            missing: { n: 8, br: T.readBool, bw: p.writeBool },
            est_usd: { n: 9, br: T.readInt64String, bw: p.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  Tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            get_descriptions: { n: 4, br: T.readBool, bw: p.writeBool },
            get_asset_properties: { n: 11, br: T.readBool, bw: p.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: T.readBool,
              bw: p.writeBool,
            },
            language: { n: 5, br: T.readString, bw: p.writeString },
            filters: { n: 6, c: Er },
            start_assetid: {
              n: 8,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            count: { n: 9, br: T.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  Er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetids || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assetids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: T.readBool, bw: p.writeBool },
            marketable_only: { n: 4, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  Dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: wr, r: !0, q: !0 },
            descriptions: { n: 2, c: _r, r: !0, q: !0 },
            missing_assets: { n: 3, c: wr, r: !0, q: !0 },
            asset_properties: { n: 7, c: br, r: !0, q: !0 },
            more_items: { n: 4, br: T.readBool, bw: p.writeBool },
            last_assetid: {
              n: 5,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  Or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new_token || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offer_access_token || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_offer_access_token: {
              n: 1,
              br: T.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  Ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.return_url || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  Mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: p.writeString },
            appid: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            classes: { n: 3, c: gr, r: !0, q: !0 },
            high_pri: { n: 4, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  Nr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptions || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: _r, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  Pr;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      t(Tr, n, r),
      Dr,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = n;
  function r(e, n, r) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, t(Or, n, r), kr, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = r;
  function i(e, n, r) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      t(Ar, n, r),
      jr,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = i;
  function a(e, n, r) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, t(Mr, n, r), Nr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = a;
  function o(e, n, r) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, t(Sr, n, r), Cr, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetPropertySchema = o;
})((Pr ||= {}));
var Fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: p.writeString },
            steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Request`;
    }
  },
  Ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            cooldown_skip_granted: { n: 2, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Response`;
    }
  },
  Lr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            send_running_apps: { n: 2, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Request`;
    }
  },
  Rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            role: { n: 2, br: T.readEnum, bw: p.writeEnum },
            time_joined: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            cooldown_seconds_remaining: {
              n: 4,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `FamilyGroupMember`;
    }
  },
  zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            role: { n: 2, br: T.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `FamilyGroupPendingInvite`;
    }
  },
  Br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `FamilyGroupFormerMember`;
    }
  },
  Vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2, 3, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: p.writeString },
            members: { n: 2, c: Rr, r: !0, q: !0 },
            pending_invites: { n: 3, c: zr, r: !0, q: !0 },
            free_spots: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            country: { n: 5, br: T.readString, bw: p.writeString },
            slot_cooldown_remaining_seconds: {
              n: 6,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            former_members: { n: 7, c: Br, r: !0, q: !0 },
            slot_cooldown_overrides: {
              n: 8,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Response`;
    }
  },
  Hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            role: { n: 2, br: T.readEnum, bw: p.writeEnum },
            inviter_steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            awaiting_2fa: { n: 4, br: T.readBool, bw: p.writeBool },
            invite_id: {
              n: 5,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `FamilyGroupPendingInviteForUser`;
    }
  },
  Ur = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            include_family_group_response: {
              n: 2,
              br: T.readBool,
              bw: p.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Request`;
    }
  },
  Wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            rtime_joined: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            rtime_left: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            role: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            participated: { n: 5, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `FamilyGroupMembership`;
    }
  },
  Gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [5, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            is_not_member_of_any_group: {
              n: 2,
              br: T.readBool,
              bw: p.writeBool,
            },
            latest_time_joined: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            latest_joined_family_groupid: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            pending_group_invites: { n: 5, c: Hr, r: !0, q: !0 },
            role: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            cooldown_seconds_remaining: {
              n: 7,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            family_group: { n: 8, c: Vr },
            can_undelete_last_joined_family: {
              n: 9,
              br: T.readBool,
              bw: p.writeBool,
            },
            membership_history: { n: 10, c: Wr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Response`;
    }
  },
  Kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            name: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Request`;
    }
  },
  qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Response`;
    }
  },
  Jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            receiver_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            receiver_role: { n: 3, br: T.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Request`;
    }
  },
  Yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            two_factor_method: { n: 2, br: T.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Response`;
    }
  },
  Xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            nonce: { n: 2, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Request`;
    }
  },
  Zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.two_factor_method || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            two_factor_method: { n: 2, br: T.readEnum, bw: p.writeEnum },
            cooldown_skip_granted: { n: 3, br: T.readBool, bw: p.writeBool },
            invite_already_accepted: { n: 4, br: T.readBool, bw: p.writeBool },
            cooldown_seconds_remaining: {
              n: 5,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Response`;
    }
  },
  Qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            steamid_to_remove: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Request`;
    }
  },
  $r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Response`;
    }
  },
  ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            steamid_to_cancel: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Request`;
    }
  },
  ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Response`;
    }
  },
  ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Request`;
    }
  },
  ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Response`;
    }
  },
  ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            client_instance_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Request`;
    }
  },
  ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.users || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            users: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readFixed64String,
              pbr: T.readPackedFixed64String,
              bw: p.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Response`;
    }
  },
  oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            gidshoppingcart: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            store_country_code: { n: 3, br: T.readString, bw: p.writeString },
            use_account_cart: { n: 4, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Request`;
    }
  },
  si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            request_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Response`;
    }
  },
  ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            request_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
            rt_include_completed_since: {
              n: 4,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Request`;
    }
  },
  li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requester_steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requester_steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            gidshoppingcart: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            time_requested: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            time_responded: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            responder_steamid: {
              n: 5,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            response_action: { n: 6, br: T.readEnum, bw: p.writeEnum },
            is_completed: { n: 7, br: T.readBool, bw: p.writeBool },
            request_id: {
              n: 8,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            requested_packageids: {
              n: 9,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            purchased_packageids: {
              n: 10,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            requested_bundleids: {
              n: 11,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            purchased_bundleids: {
              n: 12,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `PurchaseRequest`;
    }
  },
  ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: li, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Response`;
    }
  },
  di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            action: { n: 3, br: T.readEnum, bw: p.writeEnum },
            request_id: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Request`;
    }
  },
  fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Response`;
    }
  },
  pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            running_apps: { n: 2, c: hi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification`;
    }
  },
  mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.member_steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            member_steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            owner_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember`;
    }
  },
  hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            playing_members: { n: 3, c: mi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp`;
    }
  },
  gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroupsClient_InviteStatus_Notification`;
    }
  },
  _i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroupsClient_GroupChanged_Notification`;
    }
  },
  vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Request`;
    }
  },
  yi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.changes || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { changes: { n: 1, c: bi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response`;
    }
  },
  bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            actor_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            type: { n: 3, br: T.readEnum, bw: p.writeEnum },
            body: { n: 4, br: T.readString, bw: p.writeString },
            by_support: { n: 5, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response_Change`;
    }
  },
  xi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            first_played: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            latest_played: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            seconds_played: { n: 5, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_PlaytimeEntry`;
    }
  },
  Si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Request`;
    }
  },
  Ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: xi, r: !0, q: !0 },
            entries_by_owner: { n: 2, c: xi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Response`;
    }
  },
  wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            cooldown_count: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Request`;
    }
  },
  Ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Response`;
    }
  },
  Ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            include_own: { n: 2, br: T.readBool, bw: p.writeBool },
            include_excluded: { n: 3, br: T.readBool, bw: p.writeBool },
            language: { n: 5, br: T.readString, bw: p.writeString },
            max_apps: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            include_non_games: { n: 7, br: T.readBool, bw: p.writeBool },
            steamid: {
              n: 8,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Request`;
    }
  },
  Di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: Oi, r: !0, q: !0 },
            owner_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response`;
    }
  },
  Oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            owner_steamids: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readFixed64String,
              pbr: T.readPackedFixed64String,
              bw: p.writeRepeatedFixed64String,
            },
            name: { n: 6, br: T.readString, bw: p.writeString },
            sort_as: { n: 7, br: T.readString, bw: p.writeString },
            capsule_filename: { n: 8, br: T.readString, bw: p.writeString },
            img_icon_hash: { n: 9, br: T.readString, bw: p.writeString },
            exclude_reason: { n: 10, d: 0, br: T.readEnum, bw: p.writeEnum },
            rt_time_acquired: { n: 11, br: T.readUint32, bw: p.writeUint32 },
            rt_last_played: { n: 12, br: T.readUint32, bw: p.writeUint32 },
            rt_playtime: { n: 13, br: T.readUint32, bw: p.writeUint32 },
            app_type: { n: 14, d: 1, br: T.readEnum, bw: p.writeEnum },
            content_descriptors: {
              n: 15,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response_SharedApp`;
    }
  },
  ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            nonce: { n: 3, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Request`;
    }
  },
  Ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Response`;
    }
  },
  ji = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            nonce: { n: 3, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Request`;
    }
  },
  Mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Response`;
    }
  },
  Ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: { n: 2, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Request`;
    }
  },
  Pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Response`;
    }
  },
  Fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            appid: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            lender_steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Request`;
    }
  },
  Ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Response`;
    }
  },
  Li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Request`;
    }
  },
  Ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.members || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { members: { n: 1, c: zi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response`;
    }
  },
  zi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            preferred_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response_FamilyMember`;
    }
  },
  Bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Request`;
    }
  },
  Vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Response`;
    }
  },
  Hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Request`;
    }
  },
  Ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Response`;
    }
  },
  Wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Request`;
    }
  },
  Gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.wallet_country_matches || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            wallet_country_matches: { n: 1, br: T.readBool, bw: p.writeBool },
            ip_match: { n: 2, br: T.readBool, bw: p.writeBool },
            join_restriction: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Response`;
    }
  },
  Ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            invite_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Request`;
    }
  },
  qi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Response`;
    }
  },
  Ji = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            rtime32_target: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Request`;
    }
  },
  Yi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Response`;
    }
  },
  Xi;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`FamilyGroups.CreateFamilyGroup#1`, t(Fr, n, r), Ir, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.CreateFamilyGroup = n;
  function r(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroup#1`, t(Lr, n, r), Vr, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetFamilyGroup = r;
  function i(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroupForUser#1`, t(Ur, n, r), Gr, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetFamilyGroupForUser = i;
  function a(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.ModifyFamilyGroupDetails#1`,
      t(Kr, n, r),
      qr,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.ModifyFamilyGroupDetails = a;
  function o(e, n, r) {
    return e.SendMsg(`FamilyGroups.InviteToFamilyGroup#1`, t(Jr, n, r), Yr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.InviteToFamilyGroup = o;
  function s(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.ConfirmInviteToFamilyGroup#1`,
      t(ki, n, r),
      Ai,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.ConfirmInviteToFamilyGroup = s;
  function c(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.ResendInvitationToFamilyGroup#1`,
      t(Ni, n, r),
      Pi,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.ResendInvitationToFamilyGroup = c;
  function l(e, n, r) {
    return e.SendMsg(`FamilyGroups.JoinFamilyGroup#1`, t(Xr, n, r), Zr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.JoinFamilyGroup = l;
  function u(e, n, r) {
    return e.SendMsg(`FamilyGroups.ConfirmJoinFamilyGroup#1`, t(ji, n, r), Mi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.ConfirmJoinFamilyGroup = u;
  function d(e, n, r) {
    return e.SendMsg(`FamilyGroups.RemoveFromFamilyGroup#1`, t(Qr, n, r), $r, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RemoveFromFamilyGroup = d;
  function f(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.CancelFamilyGroupInvite#1`,
      t(ei, n, r),
      ti,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.CancelFamilyGroupInvite = f;
  function p(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetUsersSharingDevice#1`, t(ii, n, r), ai, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUsersSharingDevice = p;
  function m(e, n, r) {
    return e.SendMsg(`FamilyGroups.DeleteFamilyGroup#1`, t(ni, n, r), ri, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.DeleteFamilyGroup = m;
  function h(e, n, r) {
    return e.SendMsg(`FamilyGroups.UndeleteFamilyGroup#1`, t(Bi, n, r), Vi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.UndeleteFamilyGroup = h;
  function g(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetPlaytimeSummary#1`, t(Si, n, r), Ci, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPlaytimeSummary = g;
  function _(e, n, r) {
    return e.SendMsg(`FamilyGroups.RequestPurchase#1`, t(oi, n, r), si, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RequestPurchase = _;
  function ee(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetPurchaseRequests#1`, t(ci, n, r), ui, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPurchaseRequests = ee;
  function v(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.RespondToRequestedPurchase#1`,
      t(di, n, r),
      fi,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.RespondToRequestedPurchase = v;
  function y(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetChangeLog#1`, t(vi, n, r), yi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetChangeLog = y;
  function te(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.SetFamilyCooldownOverrides#1`,
      t(wi, n, r),
      Ti,
      { ePrivilege: 5, rgBrowserAPISites: [`community`, `store`, `support`] },
    );
  }
  e.SetFamilyCooldownOverrides = te;
  function b(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetSharedLibraryApps#1`, t(Ei, n, r), Di, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetSharedLibraryApps = b;
  function x(e, n, r) {
    return e.SendMsg(`FamilyGroups.SetPreferredLender#1`, t(Fi, n, r), Ii, {
      ePrivilege: 1,
    });
  }
  e.SetPreferredLender = x;
  function ne(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetPreferredLenders#1`, t(Li, n, r), Ri, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPreferredLenders = ne;
  function S(e, n, r) {
    return e.SendMsg(`FamilyGroups.ForceAcceptInvite#1`, t(Hi, n, r), Ui, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`, `store`, `support`],
    });
  }
  e.ForceAcceptInvite = S;
  function re(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetInviteCheckResults#1`, t(Wi, n, r), Gi, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`, `store`, `support`],
    });
  }
  e.GetInviteCheckResults = re;
  function ie(e, n, r) {
    return e.SendMsg(`FamilyGroups.ClearCooldownSkip#1`, t(Ki, n, r), qi, {
      ePrivilege: 5,
    });
  }
  e.ClearCooldownSkip = ie;
  function ae(e, n, r) {
    return e.SendMsg(`FamilyGroups.RollbackFamilyGroup#1`, t(Ji, n, r), Yi, {
      ePrivilege: 5,
    });
  }
  e.RollbackFamilyGroup = ae;
})((Xi ||= {}));
var Zi;
(function (e) {
  ((e.NotifyRunningAppsHandler = {
    name: `FamilyGroupsClient.NotifyRunningApps#1`,
    request: pi,
  }),
    (e.NotifyInviteStatusHandler = {
      name: `FamilyGroupsClient.NotifyInviteStatus#1`,
      request: gi,
    }),
    (e.NotifyGroupChangedHandler = {
      name: `FamilyGroupsClient.NotifyGroupChanged#1`,
      request: _i,
    }));
})((Zi ||= {}));
var Qi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid_giftee || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: T.readInt32, bw: p.writeInt32 },
            gift_message: { n: 2, c: $i },
            time_scheduled_send: { n: 3, br: T.readInt32, bw: p.writeInt32 },
            email_giftee: { n: 4, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  $i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gifteename || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: T.readString, bw: p.writeString },
            message: { n: 2, br: T.readString, bw: p.writeString },
            sentiment: { n: 3, br: T.readString, bw: p.writeString },
            signature: { n: 4, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  ea = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_requester || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_requester: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  ta = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  na = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: T.readInt64String, bw: p.writeInt64String },
            currencycode: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  ra = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            costwhenadded: { n: 2, c: na },
            is_gift: { n: 3, br: T.readBool, bw: p.writeBool },
            gidbundle: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            quantity: { n: 5, br: T.readUint32, bw: p.writeUint32 },
            gift_info: { n: 6, c: Qi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  ia = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.walletcredit || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: na } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  aa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            packageid: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            gidcoupon: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  oa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.microtxnappid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  sa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bundleid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            quantity: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            is_gift: { n: 3, br: T.readBool, bw: p.writeBool },
            gift_info: { n: 4, c: Qi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  ca = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reward_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: T.readInt32, bw: p.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  la = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidparent || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidparent: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  ua = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            gidcoupon: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  da = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidlineitem || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidlineitem: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            package_item: { n: 2, c: ra },
            wallet_credit_item: { n: 3, c: ia },
            coupon_item: { n: 4, c: aa },
            micro_item: { n: 5, c: oa },
            bundle_item: { n: 7, c: sa },
            loyalty_item: { n: 8, c: ca },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  fa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coupons || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: ua, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  pa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  ma = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.lineitems || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: da, r: !0, q: !0 },
            treeview: { n: 2, c: la, r: !0, q: !0 },
            potentials: { n: 3, c: fa },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  ha = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            contents: { n: 2, c: ma },
            time_created: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            merged_into_account_cart: { n: 4, br: T.readBool, bw: p.writeBool },
            steamid_requester: {
              n: 5,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  ga = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            browserid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            cart_items: { n: 4, c: ra, r: !0, q: !0 },
            store_country_code: { n: 5, br: T.readString, bw: p.writeString },
            beta_mode: { n: 6, d: !1, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  _a = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            contents: { n: 2, c: ma },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  va = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            quantity: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  ya = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            contents: { n: 2, c: ma },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  ba = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            bundleid: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            browserid: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            store_country: { n: 5, br: T.readString, bw: p.writeString },
            quantity: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            beta_mode: { n: 7, d: !1, br: T.readBool, bw: p.writeBool },
            gift_info: { n: 8, c: Qi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  xa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: ma },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  Sa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            gift_info: { n: 3, c: Qi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  Ca = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: ma } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  wa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  Ta = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: ma },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  Ea;
((function (e) {
  function n(e, n, r) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, t(ea, n, r), ta, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = n;
  function r(e, n, r) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      t(pa, n, r),
      ha,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetShoppingCartContents = r;
  function i(e, n, r) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, t(ga, n, r), _a, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = i;
  function a(e, n, r) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, t(va, n, r), ya, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = a;
  function o(e, n, r) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, t(ba, n, r), xa, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = o;
  function s(e, n, r) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, t(Sa, n, r), Ca, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.ModifyLineItem = s;
  function c(e, n, r) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, t(wa, n, r), Ta, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`, `checkout`],
    });
  }
  e.RemoveLineItems = c;
})((Ea ||= {})),
  I.createContext({ staleTimeMs: 1 / 0 }),
  (0, I.createContext)({ errorMessage: null, setErrorMessage: (e) => {} }));
function Da(e, t) {
  return `${b.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
}
var Oa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.data || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: ka, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AdditionalSubjectData`;
    }
  },
  ka = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.key || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: T.readString, bw: p.writeString },
            value: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  Aa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            start: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            count: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  ja = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_support || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_support: { n: 1, br: T.readBool, bw: p.writeBool },
            is_developer: { n: 2, br: T.readBool, bw: p.writeBool },
            trust_bucket: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentModerationAccountStatus`;
    }
  },
  Ma = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.report_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [23, 24], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            report_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            reporter_steamid: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            time_reported: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            report_reason: { n: 4, br: T.readEnum, bw: p.writeEnum },
            report_text: { n: 5, br: T.readString, bw: p.writeString },
            subject_type: { n: 6, br: T.readEnum, bw: p.writeEnum },
            subject_group_id: {
              n: 7,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            subject_id: {
              n: 8,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            resolved: { n: 9, br: T.readEnum, bw: p.writeEnum },
            time_resolved: { n: 10, br: T.readUint32, bw: p.writeUint32 },
            resolver_steamid: {
              n: 11,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            time_notified: { n: 12, br: T.readUint32, bw: p.writeUint32 },
            additional_subject_data: { n: 13, c: Oa },
            time_disputed: { n: 14, br: T.readUint32, bw: p.writeUint32 },
            dispute_details: { n: 15, br: T.readString, bw: p.writeString },
            dispute_resolver_steamid: {
              n: 16,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            dispute_resolved: { n: 17, br: T.readEnum, bw: p.writeEnum },
            time_dispute_resolved: {
              n: 18,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            detected_by_automation: {
              n: 19,
              d: !1,
              br: T.readBool,
              bw: p.writeBool,
            },
            resolved_by_automation: {
              n: 20,
              d: 0,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            content_moderated_reason: {
              n: 21,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            dispute_resolved_reason: { n: 22, br: T.readEnum, bw: p.writeEnum },
            sanctions_applied: { n: 23, c: za, r: !0, q: !0 },
            sanctions_applied_on_dispute: { n: 24, c: za, r: !0, q: !0 },
            reported_content_id: {
              n: 25,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            coordinates: { n: 26, c: _o },
            reporter_account_status: { n: 29, c: ja },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReport`;
    }
  },
  Na = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_report || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_report: { n: 1, c: Ma, r: !0, q: !0 },
            total_count: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  Pa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            subject_type: { n: 2, br: T.readEnum, bw: p.writeEnum },
            subject_group_id: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            subject_id: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            reported_content_id: {
              n: 5,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  Fa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_report || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { content_report: { n: 1, c: Ma } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  Ia = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  La = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [13, 31, 32], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            owner_steam_id: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 5, br: T.readInt32, bw: p.writeInt32 },
            resolved: { n: 6, br: T.readEnum, bw: p.writeEnum },
            time_resolved: { n: 7, br: T.readUint32, bw: p.writeUint32 },
            unresolved_report_count: {
              n: 8,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            oldest_unresolved_report_time: {
              n: 9,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            resolver_steamid: {
              n: 10,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            assigned_moderator_steamid: {
              n: 11,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            time_claimed_by_moderator: {
              n: 12,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            reports: { n: 13, c: Ma, r: !0, q: !0 },
            additional_subject_data: { n: 14, c: Oa },
            csam_status: { n: 15, br: T.readEnum, bw: p.writeEnum },
            terrorism_status: { n: 16, br: T.readEnum, bw: p.writeEnum },
            content_moderated_reason: {
              n: 17,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            unresolved_dispute_count: {
              n: 18,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              n: 19,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            owner_dispute_time: { n: 24, br: T.readUint32, bw: p.writeUint32 },
            owner_dispute_resolved_time: {
              n: 25,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            owner_dispute_details: {
              n: 26,
              br: T.readString,
              bw: p.writeString,
            },
            required_moderator_level: {
              n: 27,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            resolved_by_automation: {
              n: 28,
              d: 0,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            detected_by_automation: {
              n: 29,
              d: !1,
              br: T.readBool,
              bw: p.writeBool,
            },
            credible_threat_of_violence_status: {
              n: 30,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            sanctions_applied: { n: 31, c: za, r: !0, q: !0 },
            sanctions_applied_after_dispute: { n: 32, c: za, r: !0, q: !0 },
            decision_reversed: { n: 33, br: T.readBool, bw: p.writeBool },
            reported_content_id: {
              n: 34,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            coordinates: { n: 35, c: _o },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubject`;
    }
  },
  Ra = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subject: { n: 1, c: La, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  za = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sanction || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: T.readEnum, bw: p.writeEnum },
            days: { n: 2, br: T.readInt32, bw: p.writeInt32 },
            escalate_to: { n: 3, br: T.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubjectSanction`;
    }
  },
  Ba = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  Va = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.buckets || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            buckets: { n: 1, c: Ha, r: !0, q: !0 },
            pending_for_any_moderator: {
              n: 2,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            pending_for_supervisor: {
              n: 3,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            pending_for_valve: { n: 4, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  Ha = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            unresolved_count: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            oldest_unresolved: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            unclaimed_count: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            oldest_disputed: { n: 5, br: T.readUint32, bw: p.writeUint32 },
            disputed_count: { n: 6, br: T.readUint32, bw: p.writeUint32 },
            unclaimed_disputed_count: {
              n: 7,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            pending_for_any_moderator: {
              n: 8,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            pending_for_supervisor: {
              n: 9,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            pending_for_valve: { n: 10, br: T.readUint32, bw: p.writeUint32 },
            oldest_unresolved_for_any_moderator: {
              n: 11,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              n: 12,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            oldest_unresolved_for_valve: {
              n: 13,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            coordinates: { n: 14, c: _o },
            claimable_for_any_moderator: {
              n: 15,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            claimable_for_supervisor: {
              n: 16,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            claimable_for_valve: { n: 17, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  Ua = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubjectKey`;
    }
  },
  Wa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            rtime_cooldown_ends: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            acquit_unresolved_reports: {
              n: 3,
              br: T.readBool,
              bw: p.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  Ga = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  Ka = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  qa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_cooldown_ends || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_cooldown_ends: { n: 1, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  Ja = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  Ya = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferred_level || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: T.readEnum, bw: p.writeEnum },
            enabled_subject_types: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readEnum,
              pbr: T.readPackedEnum,
              bw: p.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  Xa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferred_level || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: T.readEnum, bw: p.writeEnum },
            enabled_subject_types: { n: 2, c: Za },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  Za = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_types || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_types: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readEnum,
              pbr: T.readPackedEnum,
              bw: p.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  Qa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  $a = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            rt_start: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.activities || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { activities: { n: 1, c: to, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  to = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            timestamp: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            action: { n: 5, br: T.readEnum, bw: p.writeEnum },
            json_data: { n: 6, br: T.readString, bw: p.writeString },
            reported_content_id: {
              n: 7,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  no = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_start_date || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_start_date: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            rtime_end_date: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            subject_type: { n: 3, br: T.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  ro = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 2, c: io, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_date || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            times_unresolved: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            times_resolved: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            count: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: so, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  so = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  lo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_reports || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_reports: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            total_acquitted_reports: {
              n: 2,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            reports_in_last_week: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            acquitted_reports_in_last_week: {
              n: 4,
              br: T.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  uo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            moderator_level: { n: 2, br: T.readEnum, bw: p.writeEnum },
            filters: { n: 3, c: _o, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: La, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: La, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  ho = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects_to_release || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects_to_release: { n: 1, c: Ua, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  go = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  _o = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: p.writeEnum },
            steamid: { n: 2, br: T.readUint64String, bw: p.writeUint64String },
            forum: { n: 3, br: T.readUint64String, bw: p.writeUint64String },
            topic: { n: 4, br: T.readUint64String, bw: p.writeUint64String },
            comment: { n: 5, br: T.readUint64String, bw: p.writeUint64String },
            comment_thread_id: {
              n: 6,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            sender_account_id: { n: 7, br: T.readUint32, bw: p.writeUint32 },
            chat_message_rtime: { n: 8, br: T.readUint32, bw: p.writeUint32 },
            chat_message_ordinal: { n: 9, br: T.readUint32, bw: p.writeUint32 },
            chat_group_id: {
              n: 10,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            chat_room_id: {
              n: 11,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            receiver_account_id: { n: 12, br: T.readUint32, bw: p.writeUint32 },
            published_file_id: {
              n: 13,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            ugc_content_type: { n: 14, br: T.readUint32, bw: p.writeUint32 },
            appid: { n: 15, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ReportedContentCoordinates`;
    }
  },
  vo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            include_reporter_account_status: {
              n: 2,
              br: T.readBool,
              bw: p.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  yo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { subject: { n: 1, c: La } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  bo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coordinates || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { coordinates: { n: 1, c: _o } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  xo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: La, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  So = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            details: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  Co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  wo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  To = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: Eo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  Eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            actor_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            automated_action: { n: 3, br: T.readBool, bw: p.writeBool },
            action: { n: 4, br: T.readEnum, bw: p.writeEnum },
            additional_json_data: { n: 5, br: T.readString, bw: p.writeString },
            actor_account_status: { n: 8, c: ja },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  Do = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            report_id: {
              n: 2,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            dispute_details: { n: 3, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  Oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  ko = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  Ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  jo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            new_level: { n: 2, br: T.readEnum, bw: p.writeEnum },
            reason: { n: 3, br: T.readEnum, bw: p.writeEnum },
            note: { n: 4, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  Mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  No = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            resolution: { n: 4, br: T.readEnum, bw: p.writeEnum },
            reason: { n: 2, br: T.readEnum, bw: p.writeEnum },
            note: { n: 3, br: T.readString, bw: p.writeString },
            resolved_by_automation: { n: 7, br: T.readEnum, bw: p.writeEnum },
            sanctions_applied: { n: 9, c: za, r: !0, q: !0 },
            skip_lock: { n: 10, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  Po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  Fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            csam_status: { n: 2, br: T.readEnum, bw: p.writeEnum },
            terrorism_status: { n: 3, br: T.readEnum, bw: p.writeEnum },
            credible_threat_of_violence_status: {
              n: 4,
              br: T.readEnum,
              bw: p.writeEnum,
            },
            additional_subject_data: { n: 5, c: Oa },
            owner_dispute_details: {
              n: 6,
              br: T.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  Io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  Lo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: p.writeUint64String,
            },
            action: { n: 2, br: T.readEnum, bw: p.writeEnum },
            automated_action: { n: 3, br: T.readBool, bw: p.writeBool },
            additional_json_data: { n: 4, br: T.readString, bw: p.writeString },
            actor_steamid: {
              n: 5,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  Ro = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  zo;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`ContentModeration.ClaimBatch#1`, t(uo, n, r), fo, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ClaimBatch = n;
  function r(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetClaimedSubjects#1`,
      t(po, n, r),
      mo,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClaimedSubjects = r;
  function i(e, n, r) {
    return e.SendMsg(`ContentModeration.ReleaseSubjects#1`, t(ho, n, r), go, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ReleaseSubjects = i;
  function a(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      t(Aa, n, r),
      Na,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportsSubmittedByUser = a;
  function o(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      t(Pa, n, r),
      Fa,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetOneReportSubmittedByUser = o;
  function s(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      t(Ia, n, r),
      Ra,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`support`] },
    );
  }
  e.GetReportedSubjectsByOwner = s;
  function c(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetSubjectOverview#1`,
      t(Ba, n, r),
      Va,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetSubjectOverview = c;
  function l(e, n, r) {
    return e.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      t(Wa, n, r),
      Ga,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateReporterCooldown = l;
  function u(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReporterCooldown#1`,
      t(Ka, n, r),
      qa,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReporterCooldown = u;
  function d(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      t(Ja, n, r),
      Ya,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetModeratorPreferences = d;
  function f(e, n, r) {
    return e.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      t(Xa, n, r),
      Qa,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetModeratorPreferences = f;
  function p(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      t($a, n, r),
      eo,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetModeratorActivity = p;
  function m(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      t(no, n, r),
      ro,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetDailyModerationStatistics = m;
  function h(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      t(ao, n, r),
      oo,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetOldestUnresolvedSubjects = h;
  function g(e, n, r) {
    return e.SendMsg(`ContentModeration.GetReporterStats#1`, t(co, n, r), lo, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReporterStats = g;
  function _(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      t(vo, n, r),
      yo,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContentByID = _;
  function ee(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportedContent#1`,
      t(bo, n, r),
      xo,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContent = ee;
  function v(e, n, r) {
    return e.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      t(So, n, r),
      Co,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.OwnerDisputeModeration = v;
  function y(e, n, r) {
    return e.SendMsg(`ContentModeration.GetAuditLogByID#1`, t(wo, n, r), To, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAuditLogByID = y;
  function te(e, n, r) {
    return e.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      t(Do, n, r),
      Oo,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.ReporterDisputeModeration = te;
  function b(e, n, r) {
    return e.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      t(ko, n, r),
      Ao,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SustainModerationByID = b;
  function x(e, n, r) {
    return e.SendMsg(
      `ContentModeration.EscalateSubjectByID#1`,
      t(jo, n, r),
      Mo,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.EscalateSubjectByID = x;
  function ne(e, n, r) {
    return e.SendMsg(`ContentModeration.ResolveByID#1`, t(No, n, r), Po, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ResolveByID = ne;
  function S(e, n, r) {
    return e.SendMsg(`ContentModeration.UpdateSubjectByID#1`, t(Fo, n, r), Io, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateSubjectByID = S;
  function re(e, n, r) {
    return e.SendMsg(
      `ContentModeration.WriteToAuditLogByID#1`,
      t(Lo, n, r),
      Ro,
      { ePrivilege: 5 },
    );
  }
  e.WriteToAuditLogByID = re;
})((zo ||= {}));
function Bo(e) {
  let t = e?.reported_content_id
    ? e.reported_content_id
    : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
  return `${b.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
}
var Vo = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (e) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [e.ticket],
    }),
    link: (e) => b.HELP_BASE_URL + `wizard/HelpRequest/` + e.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (e) => ({ locString: e.title }),
    bodyLoc: (e) =>
      o() && e.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : e.body,
    image: (e) => e.image,
    link: (e) =>
      o() && e.link.includes(`https://store.steampowered.com`)
        ? e.link.replace(`https://store.steampowered.com`, b.STORE_BASE_URL)
        : e.link,
  },
  10: {
    displayNameLoc: (e) => e.display_name,
    titleLoc: (e) => e.title,
    bodyLoc: (e) => e.body,
    image: (e) => e.image,
    link: (e) => e.link,
  },
  14: {
    titleLoc: `#SteamNotification_ModeratorMessage_Title`,
    link: (e) => b.COMMUNITY_BASE_URL + `my/moderatormessages/` + e.msgid,
  },
  28: {
    displayNameLoc: (e) =>
      e.is_limited_launch
        ? `#Notification_LimitedLaunchInviteTitle`
        : `#Notification_PlaytestInviteTitle`,
    titleLoc: (e) =>
      e.is_limited_launch
        ? `#Notification_LimitedLaunchInviteBody`
        : `#Notification_PlaytestInviteBody`,
    image: (e) => e.appid,
    link: (e) => b.STORE_BASE_URL + `account/gatedaccess?appid=` + e.appid,
  },
  30: {
    titleLoc: (e) => {
      switch (e.status) {
        case 1:
          return `#Notification_ReportedContentAction_Received`;
        case 2:
          return `#Notification_ReportedContentAction_Sanctioned`;
        case 3:
          return `#Notification_ReportedContentAction_Acquitted`;
        case 4:
          return `#Notification_ReportedContentAction_DisputeReceived`;
        case 5:
          return `#Notification_ReportedContentAction_DisputeSanctioned`;
        case 6:
          return `#Notification_ReportedContentAction_DisputeAcquitted`;
        default:
          return `#Notification_ReportedContentAction_Unknown`;
      }
    },
    link: (e) => Bo(e),
  },
};
function Ho(e) {
  if (e !== void 0) return Vo[e];
}
function Uo(e) {
  return !!Ho(e);
}
var Wo = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (e) =>
      `${b.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${b.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (e) => Da(e.familyid, e.request_id),
  },
  19: {
    steamidAttribute: `responder_steamid`,
    titleLoc: (e) =>
      e.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle`
        : ``,
    bodyLoc: (e) =>
      e.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestDeclinedBody`
        : ``,
    url: () => `${b.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${b.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseTitleApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined`,
    bodyLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseBodyApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined`,
    url: () => `${b.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseTitleApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseTitleDeclined`,
    bodyLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseBodyApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseBodyDeclined`,
    url: () => `${b.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function Go(e) {
  if (e !== void 0) return Wo[e];
}
function Ko(e) {
  return !!Go(e);
}
var qo = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function Jo(e) {
  return qo.findIndex((t) => t == e) != null;
}
function Yo(e) {
  return !e.hidden && Xo(e.notification_type) && ms(e.body_data);
}
function Xo(e) {
  return Uo(e) || Ko(e) || Jo(e);
}
var Zo = new fe(`SteamNotificationStore`),
  Qo = Zo.Debug,
  $o = Zo.Error,
  es = Zo.Warning,
  ts = class {
    constructor() {
      he(this);
    }
    m_rgNotificationRollups = [];
    m_summary = ns();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = ``;
    m_keyNotifyServerHidden = ``;
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = ``;
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(e) {
      this.m_transport = e;
    }
    RegisterOnNotificationCallback(e) {
      this.m_fnOnNotificationCallback = e;
    }
    SetClientFilters(e, t = 0) {
      ((this.m_strRemoteClientID = e), (this.m_eTargetClientType = t));
    }
    NotifyServerNotificationsRead(e) {
      (this.m_rgNotifyServerRead.push(...e), this.UpdateServer());
    }
    NotifyServerNotificationsHidden(e) {
      (this.m_rgNotifyServerHidden.push(...e), this.UpdateServer());
    }
    BSendToCallbackAsNew(e) {
      return (
        !e.read &&
        !Cs(e) &&
        !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
      );
    }
    Dev_AddTestNotification(e) {}
    Dev_UpdateTestNotificationReadState(e, t) {
      let n = this.m_rgTestNotifications.findIndex(
        (t) => t.notification_id == e,
      );
      return (
        n !== -1 &&
        this.m_rgTestNotifications[n].read != t &&
        ((this.m_rgTestNotifications[n].read = t), !0)
      );
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let e = g.Init(er);
        (e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          ur.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []));
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = g.Init(sr);
        (e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          ur.HideNotification(this.m_transport, e) &&
            (this.m_rgNotifyServerHidden = []));
      }
    }
    MarkItemRead(e, t = !1) {
      let n = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (n === -1) {
        t
          ? this.NotifyServerNotificationsRead([e])
          : $o(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let r = this.m_rgNotificationRollups[n];
      if (r.item.read)
        $o(`Attempted to mark notification read that is already read`);
      else if (((r.item.read = !0), r.rgunread?.length > 0)) {
        this.ReduceNewTotals(r.type, r.rgunread.length);
        let e = [];
        (r.rgunread.forEach((t) => {
          e.push(t);
        }),
          r.rgread.push(...r.rgunread),
          (r.rgunread = []),
          this.NotifyServerNotificationsRead(e));
      }
    }
    MarkItemHidden(e) {
      let t = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (t === -1) {
        $o(
          `Attempted to mark notification hidden that is not in the notification store`,
        );
        return;
      }
      let n = this.m_rgNotificationRollups[t];
      ((n.item.hidden = !0),
        n.rgunread?.length > 0 &&
          this.ReduceNewTotals(n.type, n.rgunread?.length),
        this.NotifyServerNotificationsHidden([...n.rgunread, ...n.rgread]));
    }
    ReduceNewTotals(e, t) {
      Ss(this.m_summary, e, -t);
    }
    MarkAllItemsViewed() {
      let e = g.Init(tr);
      (e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        ur.MarkNotificationsViewed(this.m_transport, e),
        (this.m_nUnviewed = 0));
    }
    MarkAllItemsRead(e) {
      let t = [],
        n = [],
        r = e ?? this.m_rgNotificationRollups;
      return (
        r.forEach((e, r) => {
          e.rgunread.length > 0 &&
            (e.rgunread.forEach((e) => {
              t.push(e);
            }),
            n.push(r));
        }),
        t.length > 0 &&
          ((this.m_summary = Object.assign(ns(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          n.forEach((e) => {
            let t = r[e];
            ((t.item.read = !0), (t.rgunread = []));
          }),
          this.NotifyServerNotificationsRead(t)),
        t.length + 0
      );
    }
    ApplyNotificationsUpdate(e) {
      if (
        (Qo(`ApplyNotificationsUpdate`, e),
        !e ||
          (!e.notifications?.length &&
            e.pending_friend_count === void 0 &&
            e.pending_gift_count === void 0))
      ) {
        Qo(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        Qo(
          `Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set`,
        );
        return;
      }
      let t = this.m_currentNotificationsData;
      (e.notifications?.forEach((e) => {
        let n = t.notifications.findIndex(
          (t) => t.notification_id == e.notification_id,
        );
        n == -1
          ? t.notifications.push(e)
          : Object.assign(t.notifications[n], e);
      }),
        e.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            e.pending_friend_count),
        e.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            e.pending_gift_count),
        e.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            e.pending_family_invite_count),
        this.ProcessNotifications());
    }
    ProcessNewNotificationPayload(e) {
      ((this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
        this.ProcessNotifications());
    }
    ProcessNotifications() {
      let e = [],
        t = ns(),
        n = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((r) => {
          this.BExcludeClientTargetedNotification(r) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (e) => e == r.notification_id,
              ) !== -1 &&
              (r.hidden = !0),
            Yo(r) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (e) => e == r.notification_id,
                ) !== -1 &&
                (r.read = !0),
              r.read || Ss(t, r.notification_type, 1),
              r.viewed || n++,
              this.AddNotificationToRollups(e, r)));
        }),
        e.sort((e, t) => e.timestamp - t.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let t of e)
          if (t.bSendToCallbackAsNew)
            (this.m_rgNewRollupIDs.set(
              t.rollup_key,
              JSON.parse(JSON.stringify(t)),
            ),
              this.m_fnOnNotificationCallback(t, 0));
          else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
            let e = this.m_rgNewRollupIDs.get(t.rollup_key);
            (e.item.read != t.item.read || e.item.viewed != t.item.viewed) &&
              (this.m_rgNewRollupIDs.set(
                t.rollup_key,
                JSON.parse(JSON.stringify(t)),
              ),
              this.m_fnOnNotificationCallback(t, 1));
          }
        for (let [t, n] of this.m_rgNewRollupIDs)
          e.findIndex((e) => e.rollup_key == t) == -1 &&
            (this.m_fnOnNotificationCallback(n, 2),
            this.m_rgNewRollupIDs.delete(t));
      }
      (e.reverse(),
        (t.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (t.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (t.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = e.slice()),
        (this.m_summary = t),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = n));
    }
    BExcludeClientTargetedNotification(e) {
      let t = ms(e.body_data);
      return t
        ? !!(
            (t.remote_client_id &&
              this.m_strRemoteClientID != t.remote_client_id) ||
            (t.target_client_types &&
              !(this.m_eTargetClientType & t.target_client_types))
          )
        : !1;
    }
    BReplaceRollupItem(e, t) {
      return e.read == t.read
        ? (e.read && t.read) || t.viewed == e.viewed
          ? t.timestamp < e.timestamp
          : !e.viewed && t.viewed
            ? !0
            : e.viewed && t.viewed
              ? t.viewed < e.viewed
              : !1
        : t.read;
    }
    AddNotificationToRollups(e, t) {
      let n = this.BSendToCallbackAsNew(t);
      n && this.m_rgUnreadNotificationIDs.push(t.notification_id);
      let r = t.notification_type;
      switch (r) {
        case 3:
          {
            let i = hs(t);
            if (!i) return;
            let a =
                `comment_` +
                i.owner_steam_id?.GetAccountID() +
                `_` +
                i.forum_id +
                `_` +
                i.topic_id +
                (i.brate_limited ? `_ratelimited` : ``),
              o = e.findIndex((e) => e.rollup_key == a);
            if (o == -1)
              e.push({
                type: r,
                rollup_key: a,
                item: t,
                rollup_count: 1,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: n,
                url: cs(i),
              });
            else {
              let r = e[o];
              (this.BReplaceRollupItem(t, r.item) &&
                ((r.url = cs(i)),
                (r.item = t),
                (r.timestamp = t.timestamp),
                (r.bSendToCallbackAsNew = n)),
                (r.rollup_count += 1),
                t.read
                  ? r.rgread.push(t.notification_id)
                  : r.rgunread.push(t.notification_id));
            }
          }
          break;
        case 4:
          let i = hs(t);
          if (i) {
            let a = `item_` + i.appid;
            this.AddNotificationToRollupByAppID(e, t, a, r, n, i.appid);
          }
          break;
        case 12:
          let a = hs(t)?.appid.toString();
          if (a) {
            let i = `asyncgame_` + a;
            this.AddNotificationToRollupByAppID(e, t, i, r, n, a);
          }
          break;
        case 30:
          let o = hs(t),
            s = o?.report_id,
            c = Bo(o),
            l = `contentreport_${s}`,
            u = e.findIndex((e) => e.rollup_key == l);
          if (u == -1)
            e.push({
              type: r,
              rollup_key: l,
              item: t,
              rollup_count: 1,
              timestamp: t.timestamp,
              rgunread: t.read ? [] : [t.notification_id],
              rgread: t.read ? [t.notification_id] : [],
              bSendToCallbackAsNew: n,
              url: c,
            });
          else {
            let r = e[u];
            (this.BReplaceRollupItem(t, r.item) &&
              ((r.url = c),
              (r.item = t),
              (r.timestamp = t.timestamp),
              (r.bSendToCallbackAsNew = n)),
              (r.rollup_count += 1),
              t.read
                ? r.rgread.push(t.notification_id)
                : r.rgunread.push(t.notification_id));
          }
          break;
        default:
          e.push({
            type: r,
            rollup_key: t.notification_id,
            item: t,
            timestamp: t.timestamp,
            rgunread: t.read ? [] : [t.notification_id],
            rgread: t.read ? [t.notification_id] : [],
            bSendToCallbackAsNew: n,
          });
      }
    }
    AddNotificationToRollupByAppID(e, t, n, r, i, a) {
      let o = e.findIndex((e) => e.rollup_key == n);
      if (o == -1)
        e.push({
          type: r,
          rollup_key: n,
          item: t,
          rollup_count: 1,
          timestamp: t.timestamp,
          rgunread: t.read ? [] : [t.notification_id],
          rgread: t.read ? [t.notification_id] : [],
          bSendToCallbackAsNew: i,
        });
      else {
        let n = e[o];
        (this.BReplaceRollupItem(t, n.item) &&
          ((n.item = t),
          (n.timestamp = t.timestamp),
          (n.bSendToCallbackAsNew = i)),
          (n.rollup_count += 1),
          t.read
            ? n.rgread.push(t.notification_id)
            : n.rgunread.push(t.notification_id));
      }
    }
  };
(w([M], ts.prototype, `m_rgNotificationRollups`, void 0),
  w([M], ts.prototype, `m_summary`, void 0),
  w([M], ts.prototype, `m_bLoaded`, void 0),
  w([M], ts.prototype, `m_nUnviewed`, void 0),
  w([qe], ts.prototype, `ProcessNotifications`, null));
function ns() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
    playtest_invites: 0,
  };
}
async function rs(e, t, n, r, i, a = !0, o = !1) {
  if (!t) throw Error(`Invalid steamid for GetSteamNotifications`);
  let s = g.Init(Qn);
  (s.Body().set_language(n),
    s.Body().set_include_read(a),
    s.Body().set_include_pinned_counts(!0),
    s.Body().set_include_confirmation_count(o));
  let c = await ur.GetSteamNotifications(e, s);
  if (c.GetEResult() !== 1)
    throw (
      es(
        `Received error from GetSteamNotifications. Result ${c.GetEResult()}. Transport ${c.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${c.GetEResult()}`)
    );
  let l = c.Body().toObject();
  return (
    r &&
      (l.notifications = l.notifications?.filter(
        (e) => !xs(e.notification_type, r, i),
      )),
    l
  );
}
async function is(e, t) {
  if (!e || !e.steamid || !e.contextid || !e.appid || !e.assetid)
    return ($o(`Item notification missing required attributes`), null);
  let n = g.Init(Tr);
  (n.Body().set_steamid(e.steamid),
    n.Body().set_contextid(e.contextid),
    n.Body().set_appid(parseInt(e.appid)),
    n.Body().set_get_descriptions(!0),
    n.Body().set_language(b.LANGUAGE));
  let r = new Er();
  (r.add_assetids(e.assetid), n.Body().set_filters(r));
  let i = await Pr.GetInventoryItemsWithDescriptions(t, n);
  return i.GetEResult() === 1
    ? (i.Body().toObject().descriptions[0] ?? null)
    : ($o(`Request for steam item metadata did not succeed`, i.GetEResult()),
      null);
}
var as = `ItemMetadata`;
function os(e) {
  return [`${as}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
function ss(e, t, n) {
  let r = _s(4, e.body_data);
  r.steamid = t;
  let i = _e({
    queryKey: os(r),
    queryFn: async () => is(r, n),
    staleTime: 1 / 0,
  });
  return i.isSuccess ? i.data : null;
}
function cs(e) {
  let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
  return (e.last_post > 0 && (t += `&tscn=` + (e.last_post - 1)), t);
}
function ls(e) {
  return e.comment_type == 10;
}
function us(e) {
  return e?.bhas_friend;
}
function ds(e) {
  return e.comment_type == 10;
}
function fs(e) {
  return ls(e) || us(e);
}
function ps(e) {
  return ds(e);
}
function ms(e) {
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    Qo(`Steam notification in invalid format:`, e);
  }
  return null;
}
function hs(e) {
  return _s(e.notification_type, e.body_data);
}
function gs(e) {
  return _s(e.type, e.item?.body_data);
}
function _s(e, t) {
  let n = ms(t);
  if (!n) return null;
  switch (e) {
    case 2:
      return n.gifter_account;
    case 22:
      return {
        responder_steamid: n.responder_steamid,
        package_id: n.package_id,
        bundle_id: n.bundle_id,
      };
    case 9:
      return parseInt(n.sender);
    case 8:
      return { appid: n.appid, count: n.count ?? 1, appids: n.appids ?? [] };
    case 12:
      return !n.appid || !n.state || (n.state != 1 && n.state != 2)
        ? (Qo(`Async game notification invalid data`, t), null)
        : { appid: parseInt(n.appid), state: parseInt(n.state) };
    case 3:
      let r = {
        owner_steam_id: n.owner_steam_id ? new k(n.owner_steam_id) : null,
        bclan_account: vs(n.bclan_account),
        title: n.title,
        comment: n.text,
        time: n.last_post,
        comment_type: Number(n.type),
        topic_id: n.topic_id,
        forum_id: n.forum_id,
        account_steam_id: n.account_id
          ? k.InitFromAccountID(n.account_id, b.EUNIVERSE)
          : null,
        bhas_friend: vs(n.bhas_friend),
        bis_forum: vs(n.bis_forum),
        last_post: n.last_post,
        bsubscribed: vs(n.subscribed),
        bis_owner: vs(n.bis_owner),
        brate_limited: !!n.brate_limited,
      };
      return (
        n.json_data &&
          (r.json_data = {
            app_id: parseInt(n.json_data.app_id),
            file_type: parseInt(n.json_data.file_type),
            title: n.json_data.title,
          }),
        r
      );
    case 5:
      return {
        requestorID: parseInt(n.requestor_id),
        state: n.state ? parseInt(n.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(n.app_id),
        assetid: n.asset_id ?? ``,
        contextid: n.context_id ?? ``,
      };
    case 23:
      return {
        url: n.url ?? ``,
        strGameName: n.content_app_name ?? ``,
        mediaType: n.media_type ?? `clip`,
        secDuration: parseFloat(n.duration_seconds ?? 0),
        nSize: parseInt(n.file_size ?? 0),
        strMachineName: n.machine_name,
        rtExpiration: n.expiration,
        thumbnailURL: n.thumbnail_url,
      };
    case 30:
      return {
        report_id: n.report_id ?? ``,
        reported_content_id: n.reported_content_id ?? ``,
        subject_type: n.subject_type ?? 0,
        subject_group_id: n.subject_group_id ?? `0`,
        subject_id: n.subject_id ?? `0`,
        status: n.status ?? 0,
      };
    default:
      return (
        Qo(
          `GetCustomNotificationDataByType called with unexpected type:` + e,
          t,
        ),
        null
      );
  }
}
function vs(e) {
  if (e === void 0) return !1;
  if (typeof e == `number`) return e > 0;
  if (typeof e == `string`)
    switch (e.toLowerCase()?.trim()) {
      case `true`:
      case `1`:
        return !0;
      default:
        return !1;
    }
  return (Qo(`notification contained unexpected boolean value`), !1);
}
var ys = {
  0: { rollup_field: void 0, eFeature: void 0 },
  1: { rollup_field: void 0, eFeature: void 0 },
  2: { rollup_field: `gifts`, eFeature: 0 },
  3: { rollup_field: `comments`, eFeature: 2 },
  4: { rollup_field: `inventory_items`, eFeature: 3 },
  5: { rollup_field: `invites`, eFeature: 4 },
  6: { rollup_field: `major_sale`, eFeature: 1 },
  7: { rollup_field: void 0, eFeature: void 0 },
  8: { rollup_field: `wishlist`, eFeature: 1 },
  9: { rollup_field: `trade_offers`, eFeature: 6 },
  10: { rollup_field: `general`, eFeature: 0 },
  11: { rollup_field: `help_request_replies`, eFeature: 0 },
  12: { rollup_field: `async_game_updates`, eFeature: 0 },
  14: { rollup_field: `moderator_messages`, eFeature: 2 },
  15: { rollup_field: `parental_feature_requests`, eFeature: 0 },
  16: { rollup_field: `family_invites`, eFeature: 0 },
  17: { rollup_field: `family_purchase_requests`, eFeature: 0 },
  18: { rollup_field: `parental_playtime_requests`, eFeature: 0 },
  19: { rollup_field: `family_purchase_request_responses`, eFeature: 0 },
  20: { rollup_field: `parental_feature_access_responses`, eFeature: 0 },
  21: { rollup_field: `parental_playtime_responses`, eFeature: 0 },
  22: { rollup_field: `requested_game_added`, eFeature: 0 },
  23: { rollup_field: void 0, eFeature: 0 },
  24: { rollup_field: void 0, eFeature: 0 },
  28: { rollup_field: `playtest_invites`, eFeature: 1 },
  29: { rollup_field: void 0, eFeature: 6 },
  30: { rollup_field: void 0, eFeature: 0 },
};
function bs(e) {
  let t = ys[e];
  return (D(!!t, `Missing notification type data for ${e}`), t);
}
function xs(e, t, n) {
  return t ? Jn(t, bs(e)?.eFeature ?? 15, n) : !1;
}
function Ss(e, t, n) {
  Ce(() => {
    let r = bs(t);
    r?.rollup_field && (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + n));
  });
}
function V(e) {
  return !e.viewed || e.viewed + 600 > Re();
}
function Cs(e) {
  return e.viewed && e.viewed + 172800 < Re();
}
var ws = `wiJqXTPU468-`,
  Ts = `hioRg1nXJCQ-`,
  Es = `_0aFiUekNE6I-`,
  Ds = `_6CRZVgXX8WU-`,
  Os = `-RS5MjpS9jg-`,
  ks = `VCr0rtJhkqE-`,
  As = `_251Yq-pwxUA-`,
  js = `L0aJl-TTCO0-`,
  Ms = `jw00MnpI46s-`,
  Ns = `yV0P89CB4mg-`,
  Ps = `d2UeLuiq6xY-`,
  Fs = `EJrQKVkzhjk-`,
  Is = `M7XVUF5aHZw-`,
  Ls = `GDByqt7FPpw-`,
  Rs = `wDxGI9lKYwM-`,
  zs = `bhbnhf7x6FA-`;
function Bs(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? j(t, ...n) : t;
}
function Vs(e, t) {
  return I.useMemo(() => {
    if (e === void 0) return null;
    let n = Ho(e),
      r = ms(t);
    if (!n || !r) return null;
    let i =
        typeof n.displayNameLoc == `function`
          ? n.displayNameLoc(r)
          : { locString: n.displayNameLoc },
      a =
        typeof n.titleLoc == `function`
          ? n.titleLoc(r)
          : { locString: n.titleLoc },
      o =
        typeof n.bodyLoc == `function`
          ? n.bodyLoc(r)
          : { locString: n.bodyLoc },
      s = typeof n.image == `function` ? n.image(r) : n.image,
      c = typeof n.link == `function` ? n.link(r) : n.link;
    return {
      display_name: Bs(i),
      title: Bs(a),
      body: Bs(o),
      image: s,
      link: c,
    };
  }, [t, e]);
}
function Hs(e, t) {
  return I.useMemo(() => {
    let n = Go(e),
      r = ms(t);
    if (!n) return null;
    let i = typeof n.titleLoc == `string` ? n.titleLoc : n.titleLoc(r),
      a = typeof n.bodyLoc == `string` ? n.bodyLoc : n.bodyLoc(r),
      o = typeof n.url == `string` ? n.url : n.url(r),
      s =
        typeof n.steamidAttribute == `string`
          ? n.steamidAttribute
          : n.steamidAttribute(r);
    return { strTitleLoc: i, strBodyLoc: a, strUrl: o, steamid: r && r[s] };
  }, [t, e]);
}
function Us(e) {
  return I.useMemo(() => (Jo(e.type) ? gs(e) : null), [e]);
}
var Ws = `xKH6brPrFV4-`,
  Gs = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`,
  Ks = `https://steamloopback.host/clientassets/avatars/`;
function qs(e, t, n = `auto`) {
  let r = `.jpg`;
  ((e && e !== `0000000000000000000000000000000000000000`) || (e = Gs),
    e.length == 44 && ((r = e.substr(-4)), (e = e.substr(0, 40))));
  let i = n == `client` || (n == `auto` && b.IN_STEAMUI),
    a = b.AVATAR_BASE_URL;
  return (
    i
      ? ((a = Ks), (e = e.toLowerCase()))
      : a ||
        ((a = b.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
        (a += e.substr(0, 2) + `/`)),
    (a += e),
    t && t != `small` && (a += `_` + t),
    (a += r),
    a
  );
}
var Js = `061818254b2c99ac49e6626adb128ed1282a392f`,
  Ys = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(e) {
      this.m_unAppID = e;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, Js);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, Js);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(e, t) {
      return e
        ? b.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            e +
            `.jpg`
        : qs(t, `small`, `web`);
    }
    DeserializeFromMessage(e) {
      ((this.m_bInitialized = !0),
        (this.m_strName = e.name()),
        (this.m_strIconURL = e.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = e.app_type()));
    }
    DeserializeFromAppOverview(e) {
      e.icon_hash() && e.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = e.display_name()),
          (this.m_strIconURL = e.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = e.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(e) {
      try {
        ((this.m_strName = e.strName),
          (this.m_strIconURL = e.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
          (this.m_eAppType = e.eAppType),
          (this.m_bInitialized = !0));
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        D(
          this.m_bInitialized,
          `Attempting to serialize an uninitialized AppInfo object for caching!`,
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  };
function Xs(e, t) {
  return e.replace(/%[A-Za-z0-9_:]+%/g, (e) => {
    let n = e.slice(1, -1).toLowerCase(),
      r = t.get(n);
    return (
      r === void 0 && console.log(`No rich presence found for`, n), r ?? e
    );
  });
}
function Zs() {
  return C.EUNIVERSE != 1;
}
function Qs(e, t, n, r) {
  let i = !1,
    a = t.replace(
      /{[A-Za-z0-9_%#:]+}/g,
      (t) => $s(e, Xs(t.slice(1, -1), r), n, r) || ((i = !0), ``),
    );
  return i ? null : Xs(a, r);
}
function $s(e, t, n, r) {
  if (!t.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, t, `appid`, e, `tokens`, n[0]),
      null
    );
  let i = t.toLowerCase(),
    a = n.map((e) => e.get(i)).find((e) => !!e);
  return a
    ? Qs(e, a, n, r)
    : (n.length &&
        console.log(
          `No loc found for appid`,
          e,
          t,
          `Tokens:`,
          n[0],
          `Fallback:`,
          n[1],
        ),
      Zs() ? i : null);
}
function ec(e, t, n, r) {
  return $s(e, t, n, r) ?? ``;
}
function tc(e, t, n, r) {
  return Qs(e, t, n, r) ?? ``;
}
var nc = class {
    m_nLastUpdated = 0;
    m_mapLanguages = M.map();
    m_appid;
    m_fetching = null;
    constructor(e) {
      this.m_appid = e;
    }
    GetAppID() {
      return this.m_appid;
    }
    GetTokenList(e) {
      return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
    }
    GetTokenLists() {
      let e = b.LANGUAGE;
      return (e == `english` ? [e] : [e, `english`])
        .map((e) => this.GetTokenList(e))
        .filter((e) => !!e);
    }
    Localize(e, t) {
      let n = this.GetTokenLists();
      return n.length ? ec(this.m_appid, e, n, t) : ``;
    }
    SubstituteParams(e, t) {
      return tc(this.m_appid, e, this.GetTokenLists(), t);
    }
  },
  rc = 1209600,
  ic = class {
    m_CMInterface;
    m_mapAppInfo = M.map();
    m_mapRichPresenceLoc = M.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new ce();
    constructor() {
      he(this);
    }
    Init(e) {
      this.m_CMInterface = e;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(e) {
      this.BHavePendingAppInfoRequests()
        ? this.m_fnCallbackOnAppInfoLoaded.Register(e)
        : (D(
            !1,
            `Registering for callback on appinfo load, but nothing queued`,
          ),
          e());
    }
    IsLoadingAppID(e) {
      return this.m_setPendingAppInfo.has(e);
    }
    GetAppInfo(e) {
      if (
        (D(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(e))
      ) {
        let t = new Ys(e);
        (this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e));
      }
      return this.m_mapAppInfo.get(e);
    }
    QueueAppInfoRequest(e) {
      return e
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (e) => (this.m_PendingAppInfoResolve = e),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(e),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let e = this.m_PendingAppInfoResolve,
        t = Array.from(this.m_setPendingAppInfo);
      ((this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(t),
        e?.());
    }
    async LoadAppInfoBatch(e) {
      this.m_cAppInfoRequestsInFlight++;
      let t = await this.LoadAppInfoBatchFromLocalCache(e);
      if (t.length) {
        (console.log(`Loading batch of App Info from Steam: `, t),
          await this.m_CMInterface?.WaitUntilLoggedOn());
        let e = g.Init(ze);
        for (e.Body().set_language(_(b.LANGUAGE)); t.length > 0;) {
          let n = Math.min(50, t.length),
            r = t.slice(0, n);
          ((t = t.slice(n)), e.Body().set_appids(r));
          let i = await Je.GetApps(this.m_CMInterface.GetServiceTransport(), e);
          i.GetEResult() == 1
            ? this.OnGetAppsResponse(i)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${i.GetEResult()}, AppIDs:`,
                r,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(e) {
      let t = [];
      for (let n of e.Body().apps()) {
        let e = this.m_mapAppInfo.get(n.appid());
        (D(e, `Got AppInfo response for unrequested AppID: ${n.appid()}`),
          e &&
            ((e = new Ys(n.appid())),
            e.DeserializeFromMessage(n),
            this.m_mapAppInfo.set(n.appid(), e),
            t.push(e)));
      }
      this.SaveAppInfoBatchToLocalCache(t);
    }
    OnAppOverviewChange(e) {
      for (let t of e) {
        let e = new Ys(t.appid());
        (e.DeserializeFromAppOverview(t),
          e.is_initialized && this.m_mapAppInfo.set(t.appid(), e));
      }
    }
    async EnsureAppInfoForAppIDs(e) {
      let t = !1;
      return (
        e.forEach((e) => {
          let n = this.m_mapAppInfo.get(e);
          n
            ? n.is_valid || (t = !0)
            : ((n = new Ys(e)),
              this.m_mapAppInfo.set(e, n),
              this.QueueAppInfoRequest(e),
              (t = !0));
        }),
        t && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(e) {
      this.m_CacheStorage = e;
    }
    GetCacheKeyForAppID(e) {
      return `APPINFO_` + e;
    }
    async LoadAppInfoBatchFromLocalCache(e) {
      if (!this.m_CacheStorage) return e;
      console.log(`Loading batch of App Info from Local Cache: `, e);
      let t = new Date(new Date().getTime() - rc * 1e3),
        n = async (e) => {
          let n = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(e),
          );
          if (!n) return e;
          let r = this.m_mapAppInfo.get(e);
          return (
            D(
              r,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            r
              ? ((r = new Ys(e)),
                r.DeserializeFromCacheObject(n),
                r.is_initialized
                  ? (this.m_mapAppInfo.set(e, r),
                    r.time_updated_from_server < t ? e : null)
                  : (console.warn(
                      `Failed to deserialize cached App Info: `,
                      e,
                      n,
                    ),
                    e))
              : e
          );
        },
        r = e.map((e) => n(e));
      return (await Promise.all(r)).filter((e) => e !== null);
    }
    async SaveAppInfoBatchToLocalCache(e) {
      if (this.m_CacheStorage) {
        console.log(
          `Saving batch of App Info to Local Cache: `,
          e.map((e) => e.appid),
        );
        for (let t of e) {
          let e = t.SerializeToCacheObject();
          e &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(t.appid),
              e,
            );
        }
      }
    }
    Localize(e, t, n) {
      let r = this.GetRichPresenceLoc(e);
      return r
        ? r.Localize(t, n)
        : b.EUNIVERSE == 1
          ? ``
          : (console.log(
              `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
            ),
            t);
    }
    GetRichPresenceLoc(e) {
      if (this.m_mapRichPresenceLoc.has(e.toString())) {
        let t = this.m_mapRichPresenceLoc.get(e.toString());
        return (
          t.m_nLastUpdated + 72e5 < Date.now() &&
            this.QueueRichPresenceLocRequest(t),
          t
        );
      }
      let t = new nc(e);
      return (
        this.m_mapRichPresenceLoc.set(e.toString(), t),
        this.QueueRichPresenceLocRequest(t),
        t
      );
    }
    GetRichPresenceLocAsync(e) {
      let t = this.GetRichPresenceLoc(e);
      return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
    }
    OnRichPresenceLocUpdate(e, t) {
      e.m_nLastUpdated = Date.now();
      for (let n of t) {
        let t = n.language(),
          r = e.m_mapLanguages.get(t);
        r
          ? r.clear()
          : (e.m_mapLanguages.set(t, new Map()), (r = e.m_mapLanguages.get(t)));
        for (let e of n.tokens()) r?.set(e.name().toLowerCase(), e.value());
      }
    }
    QueueRichPresenceLocRequest(e) {
      return (
        e.m_fetching ||
          ((e.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let t = g.Init(rt);
              return (
                t.Body().set_appid(e.GetAppID()),
                t.Body().set_language(b.LANGUAGE),
                Je.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  t,
                )
              );
            })
            .then(
              (t) => (
                (e.m_fetching = null),
                t.GetEResult() == 1
                  ? (this.OnRichPresenceLocUpdate(e, t.Body().token_lists()),
                    Promise.resolve(e))
                  : Promise.reject()
              ),
            )),
          e.m_fetching.catch(() => {
            e.m_fetching = null;
          })),
        e.m_fetching
      );
    }
  };
(w([qe], ic.prototype, `OnGetAppsResponse`, null),
  w([qe], ic.prototype, `OnRichPresenceLocUpdate`, null));
var ac = new ic(),
  H = class {
    m_steamid;
    m_bInitialized = !1;
    m_ePersonaState = 0;
    m_unGamePlayedAppID = 0;
    m_gameid = `0`;
    m_unPersonaStateFlags = 0;
    m_strPlayerName = ``;
    m_strAvatarHash = Gs;
    m_strAccountName = ``;
    m_rtLastSeenOnline = 0;
    m_strGameExtraInfo = ``;
    m_unGameServerIP = 0;
    m_unGameServerPort = 0;
    m_game_lobby_id = ``;
    m_bPlayerNamePending = !1;
    m_bAvatarPending = !1;
    m_broadcastId = void 0;
    m_broadcastAccountId = void 0;
    m_broadcastAppId = void 0;
    m_broadcastViewerCount = void 0;
    m_strBroadcastTitle = void 0;
    m_bCommunityBanned = void 0;
    m_eGamingDeviceType = 0;
    m_mapRichPresence = M.map();
    m_bNameInitialized = !1;
    m_bStatusInitialized = !1;
    m_strProfileURL = void 0;
    constructor(e) {
      (he(this), (this.m_steamid = e));
    }
    Reset() {
      ((this.m_ePersonaState = 0),
        (this.m_unGamePlayedAppID = 0),
        (this.m_gameid = `0`),
        (this.m_strGameExtraInfo = ``),
        (this.m_unGameServerIP = 0),
        (this.m_unGameServerPort = 0),
        (this.m_game_lobby_id = ``),
        this.m_mapRichPresence.clear(),
        (this.m_broadcastId = void 0),
        (this.m_broadcastAccountId = void 0),
        (this.m_broadcastAppId = void 0),
        (this.m_broadcastViewerCount = void 0),
        (this.m_strBroadcastTitle = void 0),
        (this.m_eGamingDeviceType = 0));
    }
    GetAccountID() {
      return this.m_steamid.GetAccountID();
    }
    GetSteamIDAsString() {
      return this.m_steamid.ConvertTo64BitString();
    }
    get is_online() {
      return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
    }
    get is_ingame() {
      return (
        this.is_online &&
        (this.m_unGamePlayedAppID != 0 || this.m_gameid != `0`)
      );
    }
    get is_watchingbroadcast() {
      return !!this.m_broadcastAccountId;
    }
    get is_in_nonsteam_game() {
      return this.m_unGamePlayedAppID == 0 && this.m_gameid != `0`;
    }
    get is_in_joinable_game() {
      return (
        this.has_joinable_game_flag ||
        this.is_in_valid_lobby ||
        this.has_server_ip
      );
    }
    get has_joinable_game_flag() {
      return !!((this.m_unPersonaStateFlags ?? 0) & 2);
    }
    get connect_string() {
      return this.m_mapRichPresence.get(`connect`);
    }
    get is_in_valid_lobby() {
      return this.m_game_lobby_id != null && this.m_game_lobby_id != `0`;
    }
    get has_server_ip() {
      return this.m_unGameServerIP != 0;
    }
    get is_awayOrSnooze() {
      return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
    }
    HasStateFlag(e) {
      return ((this.m_unPersonaStateFlags ?? 0) & e) != 0;
    }
    get last_seen_online() {
      return this.m_rtLastSeenOnline;
    }
    ClearStateOnDisconnect() {
      this.m_ePersonaState != 0 && this.Reset();
    }
    get is_golden() {
      return this.HasStateFlag(4);
    }
    GetCurrentGameName() {
      return this.m_strGameExtraInfo
        ? this.m_strGameExtraInfo
        : this.m_unGamePlayedAppID
          ? ac.GetAppInfo(this.m_unGamePlayedAppID).name
          : ``;
    }
    GetCurrentGameIconURL() {
      return this.m_unGamePlayedAppID
        ? ac.GetAppInfo(this.m_unGamePlayedAppID).icon_url
        : ``;
    }
    BIsAppInfoReady() {
      return (
        !this.m_unGamePlayedAppID ||
        ac.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
      );
    }
    HasCurrentGameRichPresence() {
      return this.m_mapRichPresence.has(`steam_display`);
    }
    HasRichPresenceForViewGameInfo() {
      return !!(
        this.m_mapRichPresence.has(`status`) ||
        this.m_mapRichPresence.has(`connect`) ||
        this.m_mapRichPresence.has(`connect_private`)
      );
    }
    GetCurrentGameRichPresence() {
      if (this.HasCurrentGameRichPresence()) {
        let e = ac.GetRichPresenceLoc(this.m_unGamePlayedAppID);
        if (e) {
          let t = this.m_mapRichPresence.get(`steam_display`);
          return e.Localize(t, this.m_mapRichPresence);
        }
      } else if (this.HasStateFlag(8))
        return j(`#PersonaStateRemotePlayTogether`);
      return ``;
    }
    GetCurrentGameStatus() {
      return (
        this.GetCurrentGameRichPresence() ||
        this.m_mapRichPresence.get(`status`) ||
        ``
      );
    }
    GetOfflineStatusUpdateRate() {
      if (this.last_seen_online == 0) return 3e4;
      let e = 3600,
        t = 1e3,
        n = ac.CMInterface.GetServerRTime32() - this.last_seen_online;
      return ((t *= n > 86400 ? e : n > 2 * e ? 60 : 15), t);
    }
    GetOfflineStatusTime() {
      if (this.last_seen_online == 0) return j(`#PersonaStateOffline`);
      let e = this.GetOfflineStatusUpdateRate();
      (!b.IN_MOBILE || e <= 60) && ct(e);
      let t = ac.CMInterface.GetServerRTime32() - this.last_seen_online;
      return t < 60
        ? j(`#PersonaStateLastSeen_JustNow`)
        : j(`#PersonaStateLastSeen`, Fe(t));
    }
    GetLocalizedOnlineStatus() {
      switch (this.m_ePersonaState) {
        case 0:
        case 7:
          return this.GetOfflineStatusTime();
        case 1:
          return j(`#PersonaStateOnline`);
        case 2:
          return j(`#PersonaStateBusy`);
        case 3:
          return j(`#PersonaStateAway`);
        case 4:
          return j(`#PersonaStateSnooze`);
        case 5:
          return j(`#PersonaStateLookingToTrade`);
        case 6:
          return j(`#PersonaStateLookingToPlay`);
        default:
          return ``;
      }
    }
    get has_public_party_beacon() {
      return this.m_mapRichPresence.has(`__beacon`) && this.is_ingame;
    }
    get player_group() {
      return this.m_mapRichPresence.has(`steam_player_group`)
        ? this.m_mapRichPresence.get(`steam_player_group`)
        : ``;
    }
    get player_group_size() {
      return this.m_mapRichPresence.has(`steam_player_group_size`)
        ? Number.parseInt(this.m_mapRichPresence.get(`steam_player_group_size`))
        : 0;
    }
    get online_state() {
      return this.is_online
        ? this.is_ingame
          ? `in-game`
          : this.m_broadcastAccountId
            ? `watchingbroadcast`
            : `online`
        : `offline`;
    }
    BHasAvatarSet() {
      return this.m_strAvatarHash != Gs;
    }
    get avatar_url() {
      return qs(this.m_strAvatarHash);
    }
    get avatar_url_medium() {
      return qs(this.m_strAvatarHash, `medium`);
    }
    get avatar_url_full() {
      return qs(this.m_strAvatarHash, `full`);
    }
    static SortStatusComparator(e, t, n) {
      if (t.has_public_party_beacon) {
        if (!n.has_public_party_beacon) return -1;
      } else if (n.has_public_party_beacon) return 1;
      else if (t.is_ingame) {
        if (!n.is_ingame) return -1;
        if (e) {
          if (t.is_awayOrSnooze) {
            if (!n.is_awayOrSnooze) return 1;
          } else if (n.is_awayOrSnooze) return -1;
        } else return 0;
      } else if (n.is_ingame) return 1;
      if (t.is_online) {
        if (!n.is_online) return -1;
      } else if (n.is_online) return 1;
      if (e) {
        if (t.is_awayOrSnooze) {
          if (!n.is_awayOrSnooze) return 1;
        } else if (n.is_awayOrSnooze) return -1;
      }
      return 0;
    }
    GetCommunityProfileURL() {
      return this.m_strProfileURL
        ? `${b.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
        : `${b.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
    }
  };
(w([M], H.prototype, `m_bInitialized`, void 0),
  w([M], H.prototype, `m_ePersonaState`, void 0),
  w([M], H.prototype, `m_unGamePlayedAppID`, void 0),
  w([M], H.prototype, `m_gameid`, void 0),
  w([M], H.prototype, `m_unPersonaStateFlags`, void 0),
  w([M], H.prototype, `m_strPlayerName`, void 0),
  w([M], H.prototype, `m_strAvatarHash`, void 0),
  w([M], H.prototype, `m_strAccountName`, void 0),
  w([M], H.prototype, `m_rtLastSeenOnline`, void 0),
  w([M], H.prototype, `m_strGameExtraInfo`, void 0),
  w([M], H.prototype, `m_unGameServerIP`, void 0),
  w([M], H.prototype, `m_unGameServerPort`, void 0),
  w([M], H.prototype, `m_game_lobby_id`, void 0),
  w([M], H.prototype, `m_bPlayerNamePending`, void 0),
  w([M], H.prototype, `m_bAvatarPending`, void 0),
  w([M], H.prototype, `m_broadcastId`, void 0),
  w([M], H.prototype, `m_broadcastAccountId`, void 0),
  w([M], H.prototype, `m_broadcastAppId`, void 0),
  w([M], H.prototype, `m_broadcastViewerCount`, void 0),
  w([M], H.prototype, `m_strBroadcastTitle`, void 0),
  w([M], H.prototype, `m_bCommunityBanned`, void 0),
  w([M], H.prototype, `m_eGamingDeviceType`, void 0),
  w([M], H.prototype, `m_bNameInitialized`, void 0));
function oc(e, t) {
  return new mt.default(
    async (t) => {
      let n = [...t],
        r = await $e.GetPlayerLinkDetails(e, { steamids: n }),
        i = new Map();
      return (
        r
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            i.set(t.public_data.steamid, t);
          }),
        n.map((e) => i.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function sc(e) {
  let t = Oe(),
    n = I.useContext(cc);
  return _e(lc(n, t, e));
}
var cc = I.createContext({
  loadPersonaState: async (e, t) => {
    if (e == null) return null;
    let n = await dc(t).load(
      k.InitFromAccountID(e, b.EUNIVERSE).ConvertTo64BitString(),
    );
    return fc(k.InitFromAccountID(e, b.EUNIVERSE), n);
  },
});
function lc(e, t, n) {
  let r = typeof n == `string` ? new k(n).GetAccountID() : n;
  return {
    queryKey: [`PlayerSummary`, r],
    queryFn: () => e.loadPersonaState(r, t),
    enabled: !!r,
  };
}
var uc;
function dc(e) {
  return (uc ??= oc(e));
}
function fc(e, t) {
  let n = new H(e),
    r = t?.public_data,
    i = t?.private_data;
  return (
    (n.m_bInitialized = !!t),
    (n.m_ePersonaState = i?.persona_state ?? 0),
    (n.m_strAvatarHash = r?.sha_digest_avatar ? ne(r.sha_digest_avatar) : Gs),
    (n.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
    (n.m_strAccountName = i?.account_name),
    i?.persona_state_flags &&
      (n.m_unPersonaStateFlags = i?.persona_state_flags),
    i?.game_id && (n.m_gameid = i?.game_id),
    i?.game_server_ip_address &&
      (n.m_unGameServerIP = i?.game_server_ip_address),
    i?.lobby_steam_id && (n.m_game_lobby_id = i?.lobby_steam_id),
    i?.game_extra_info && (n.m_strGameExtraInfo = i?.game_extra_info),
    r?.profile_url && (n.m_strProfileURL = r.profile_url),
    n
  );
}
var pc = `TGHZjszXouA-`,
  mc = `_6e5Lw2oBEA8-`,
  hc = `WRvk-2z-S7U-`,
  gc = `nvOZwARKtWQ-`,
  _c = `XA47jRZ-kl4-`,
  vc = `_5TOP1rhjK9g-`,
  yc = `cfYT-RvHPnk-`,
  bc = `X7vR4UwyQ10-`,
  xc = `YhW9H-T-Hto-`,
  Sc = `uxNRiRH0W-8-`,
  Cc = `ts49d7c2wyQ-`,
  wc = `_4wHdhfSncuQ-`,
  Tc = `_3GiOMfMgSIk-`,
  Ec = `rnSSdvjnnIY-`,
  Dc = `PqHuV1F7Sv8-`,
  Oc = `YR06jcjcqq0-`,
  kc = `N-3dV6EGIb0-`,
  Ac = `_8dzP2cjjs8I-`,
  jc = `_78CF9aUvUeY-`,
  Mc = `iq-v-asRRbU-`,
  Nc = `BIeyjH0P840-`,
  Pc = `rreXhb5OR24-`,
  Fc = `ohF5M-dbfvU-`,
  Ic = `FSYcqMA13Ys-`,
  Lc = `oFu8pAhMtAE-`,
  Rc = `dNwwI424aTg-`;
function zc(e) {
  let { onActivate: t, icon: n, body: r, eUIMode: i, classNames: a } = e,
    o = t,
    s = gc;
  return (
    i == 7 ? (s = kc) : i == 3 && (s = Oc),
    (s = N(s, a)),
    (0, z.jsx)(A, {
      className: s,
      onActivate: o,
      children: (0, z.jsx)(`div`, {
        className: vc,
        children: (0, z.jsxs)(`div`, {
          className: wc,
          children: [(0, z.jsx)(`span`, { className: bc, children: n }), r],
        }),
      }),
    })
  );
}
function Bc(e) {
  let {
    count: t,
    icon: n,
    onActivate: r,
    strBody: i,
    bAlwaysShow: a,
    eUIMode: o,
    classNames: s,
    visible: c,
  } = e;
  return !t && !a
    ? null
    : (0, z.jsx)(zc, {
        icon: n,
        body: i,
        onActivate: r,
        eUIMode: o,
        classNames: s,
        visible: c,
      });
}
function U(e) {
  let {
      nUnread: t,
      location: n,
      eUIMode: r,
      bLoading: i,
      footer: a,
      bNewIndicator: o,
    } = e,
    [s, c] = I.useState(+!!i),
    [l, u] = I.useState(void 0);
  (I.useEffect(() => {
    s == 1 && !i ? c(2) : s == 2 && i && c(1);
  }, [s, i]),
    I.useEffect(() => {
      let e = window.setTimeout(() => c(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    I.useEffect(() => {
      t && t > 0 && l !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? u(jc)
        : !t && l == `_78CF9aUvUeY-` && u(Ac);
    }, [t, n, l]));
  let d = e.onActivate;
  ((d ||= () => console.log(`Missing activate function`)),
    s == 1 && (d = void 0));
  let f = hc;
  n == 4 ? (f = Tc) : n == 2 ? (f = Dc) : (r == 7 || r == 3) && (f = Ec);
  let p = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? Pc : null;
    p = (0, z.jsxs)(`div`, {
      className: N(Nc, e),
      children: [
        (0, z.jsx)(`div`, { className: N(_c, Fc) }),
        (0, z.jsxs)(`div`, {
          className: vc,
          children: [
            (0, z.jsx)(`div`, { className: N(yc, Lc) }),
            (0, z.jsx)(`div`, { className: N(Mc, Ic) }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsxs)(A, {
    onActivate: d,
    className: pc,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, z.jsxs)(`div`, {
        className: N(f, l),
        children: [
          (0, z.jsx)(`div`, { className: _c, children: e.logo }),
          e.personaStatus &&
            (0, z.jsx)(`div`, {
              className: N(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, z.jsx)(`div`, { className: vc, children: e.children }),
          p,
          o && (0, z.jsx)(Vc, { location: n }),
        ],
      }),
      a || null,
    ],
  });
}
function Vc(e) {
  let { location: t } = e;
  return t == 3
    ? (0, z.jsx)(`div`, { className: Rc, children: (0, z.jsx)(Ne, {}) })
    : null;
}
function W(e) {
  let {
      icon: t,
      title: n,
      timestamp: r,
      location: i,
      fnRenderTimestamp: a,
    } = e,
    o = !!r && (i == 3 || i == 4),
    s;
  return (
    (s = i == 4 ? Wc : (a ?? Gc)),
    (0, z.jsxs)(`div`, {
      className: yc,
      children: [
        (0, z.jsx)(Hc, { icon: t }),
        !!n && (0, z.jsx)(Uc, { title: n }),
        o && s({ timestamp: r }),
      ],
    })
  );
}
function Hc(e) {
  return (0, z.jsxs)(z.Fragment, {
    children: [
      !!e.icon &&
        (0, z.jsx)(`div`, { className: `X7vR4UwyQ10-`, children: e.icon }),
      ` `,
    ],
  });
}
function Uc(e) {
  return (0, z.jsx)(`div`, { className: xc, children: e.title });
}
function G(e) {
  let t = N(Sc, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function K(e) {
  let t = N(Cc, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function Wc(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = We(e.timestamp);
  return (
    ut(t, n) || (r = Ue(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, z.jsx)(`div`, { className: mc, children: r })
  );
}
function Gc(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = ut(t, n) ? We(e.timestamp) : Ue(e.timestamp, !1, !1, !1);
  return (0, z.jsx)(`div`, { className: mc, children: r });
}
function q(e) {
  return e == 1;
}
function Kc(e, t) {
  return I.useCallback(
    (n) => {
      (e && e(n), t && t());
    },
    [e, t],
  );
}
var qc = `vjeKRorxqWY-`,
  Jc = `UWjdKshdhD8-`,
  Yc = `RZ1644uUH-k-`,
  Xc = `_5LTIC-a3DVw-`,
  Zc = `BXKoUPp7c7k-`,
  Qc = `kg8VJS07NZk-`,
  $c = `_8zZun04K77E-`,
  el = `rK6Z0uFfmRo-`;
function J(e) {
  let {
      onActivate: t,
      onDismiss: n,
      logo: r,
      icon: i,
      title: a,
      body: o,
      personaStatus: s,
      className: c,
      singleLineOnly: l,
      fullWidth: u,
      bodySuffix: d,
      bodySuffixToken: f,
    } = e,
    p = Kc(t, n);
  return (
    d &&
      f &&
      (o = Xe(
        f,
        (0, z.jsx)(`span`, { className: $c, children: o }),
        (0, z.jsx)(`span`, { className: el, children: d }),
      )),
    (0, z.jsxs)(A, {
      className: N(Qc, !l && !d && `_5OrWG-2Mx14-`, c),
      onActivate: p,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, z.jsx)(`div`, { className: Zc, children: r }),
        e.personaStatus &&
          (0, z.jsx)(`div`, { className: N(`f0Hsd0awDV4-`, s) }),
        (0, z.jsxs)(`div`, {
          className: N(qc, u && `Dcsg7SLpVF8-`),
          children: [
            (0, z.jsxs)(`div`, {
              className: Jc,
              children: [
                !!i &&
                  (0, z.jsx)(`div`, { className: `q9vQBNOskjU-`, children: i }),
                (0, z.jsx)(`div`, { className: Yc, children: a }),
              ],
            }),
            (0, z.jsx)(`div`, {
              className: N(Xc, !!d && `Mx1dwYBxHfo-`),
              children: o,
            }),
          ],
        }),
      ],
    })
  );
}
var tl = `wtEvuR05t3A-`,
  nl = `JxEGxPRLYiU-`,
  rl = `QEIVNNUa9hM-`,
  il = `GYEm-fQU5e0-`,
  al = `jkcoKzEvvVE-`,
  ol = `Z-UOt0JU-rA-`,
  sl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            clan_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            relation: { n: 3, br: T.readEnum, bw: p.writeEnum },
            linkname: { n: 4, br: T.readString, bw: p.writeString },
            json: { n: 5, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  cl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  ll = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            link: { n: 2, c: sl },
            remove: { n: 3, d: !1, br: T.readBool, bw: p.writeBool },
            update_json_only: { n: 4, d: !1, br: T.readBool, bw: p.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: T.readBool,
              bw: p.writeBool,
            },
            partner_id: { n: 6, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  ul = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  dl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: T.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  fl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: sl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  pl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_ids || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  ml = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: cl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  hl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            listid: { n: 2, br: T.readUint64String, bw: p.writeUint64String },
            ignore_dlc: { n: 3, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  gl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: _l, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  _l = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            sort_order: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  vl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: T.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  yl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: bl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  bl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readString,
              bw: p.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  xl;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, t(ll, n, r), ul, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = n;
  function r(e, n, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, t(dl, n, r), fl, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = r;
  function i(e, n, r) {
    return e.SendMsg(
      `StoreCatalog.GetDevPageAllAppsLinked#1`,
      t(pl, n, r),
      ml,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`, `store`, `help`],
      },
    );
  }
  e.GetDevPageAllAppsLinked = i;
  function a(e, n, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, t(hl, n, r), gl, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetDevPageListApps = a;
  function o(e, n, r) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, t(vl, n, r), yl, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = o;
})((xl ||= {}));
var Sl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            accept: { n: 2, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  Cl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  wl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: T.readString, bw: p.writeString },
            language: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            from_body: { n: 3, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  Tl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.background_image || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            background_image: { n: 1, br: T.readString, bw: p.writeString },
            scrim_color: { n: 2, br: T.readString, bw: p.writeString },
            desktop_layout: { n: 3, br: T.readString, bw: p.writeString },
            logo: { n: 4, c: wl },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  El = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 4, br: T.readUint32, bw: p.writeUint32 },
            event_type: { n: 5, br: T.readEnum, bw: p.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: T.readString,
              bw: p.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: T.readUint32, bw: p.writeUint32 },
            rtime32_end_time: { n: 8, br: T.readUint32, bw: p.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: T.readUint32,
              bw: p.writeUint32,
            },
            event_name: { n: 11, br: T.readString, bw: p.writeString },
            subtitle: { n: 12, br: T.readString, bw: p.writeString },
            summary: { n: 13, br: T.readString, bw: p.writeString },
            capsule_image: { n: 14, c: wl },
            store_path: { n: 15, br: T.readString, bw: p.writeString },
            rtime32_post_time: { n: 20, br: T.readUint32, bw: p.writeUint32 },
            cross_promo: { n: 21, c: Tl },
            adult_only_content: { n: 22, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  Dl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            events: { n: 2, c: Ol, r: !0, q: !0 },
            language: { n: 3, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  Ol = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  kl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summaries || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: El, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  Al = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [6, 8, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            clan_event_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            clan_announcement_gid: {
              n: 3,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            count_earlier: { n: 4, d: 1, br: T.readUint32, bw: p.writeUint32 },
            count_later: { n: 5, d: 1, br: T.readUint32, bw: p.writeUint32 },
            required_tags: {
              n: 6,
              r: !0,
              q: !0,
              br: T.readString,
              bw: p.writeRepeatedString,
            },
            require_no_tags: { n: 7, br: T.readBool, bw: p.writeBool },
            language_preference: {
              n: 8,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            rtime_oldest_date: { n: 9, br: T.readUint32, bw: p.writeUint32 },
            include_old_announcements: {
              n: 10,
              d: !0,
              br: T.readBool,
              bw: p.writeBool,
            },
            include_old_events: {
              n: 11,
              d: !1,
              br: T.readBool,
              bw: p.writeBool,
            },
            exclude_tags: {
              n: 12,
              r: !0,
              q: !0,
              br: T.readString,
              bw: p.writeRepeatedString,
            },
            event_type_filter: {
              n: 13,
              r: !0,
              q: !0,
              br: T.readEnum,
              pbr: T.readPackedEnum,
              bw: p.writeRepeatedEnum,
            },
            exclude_event_types: {
              n: 14,
              r: !0,
              q: !0,
              br: T.readEnum,
              pbr: T.readPackedEnum,
              bw: p.writeRepeatedEnum,
            },
            only_summaries: { n: 15, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Request`;
    }
  },
  jl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.event_data || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            event_data: { n: 1, c: se, r: !0, q: !0 },
            more_before: { n: 2, br: T.readBool, bw: p.writeBool },
            more_after: { n: 3, br: T.readBool, bw: p.writeBool },
            clan_is_creator_home: { n: 4, br: T.readBool, bw: p.writeBool },
            clan_is_ogg: { n: 5, br: T.readBool, bw: p.writeBool },
            clan_is_ovg: { n: 6, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Response`;
    }
  },
  Ml = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  Nl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.snippets || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: Pl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  Pl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: T.readFixed64String, bw: p.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            hidden: { n: 3, br: T.readBool, bw: p.writeBool },
            published: { n: 4, br: T.readBool, bw: p.writeBool },
            rtime32_start_time: { n: 5, br: T.readUint32, bw: p.writeUint32 },
            event_name: { n: 6, br: T.readString, bw: p.writeString },
            event_type: { n: 7, br: T.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  Fl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: Il, r: !0, q: !0 },
            cursor: { n: 2, br: T.readString, bw: p.writeString },
            count: { n: 3, d: 100, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  Il = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            start_build_id: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            end_build_id: { n: 3, br: T.readUint32, bw: p.writeUint32 },
            branch: { n: 4, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  Ll = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matches || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: Rl, r: !0, q: !0 },
            num_total_results: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            next_cursor: { n: 3, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  Rl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: p.writeUint32 },
            build_id: { n: 2, br: T.readUint32, bw: p.writeUint32 },
            branch: { n: 3, br: T.readString, bw: p.writeString },
            clan_event_gid: {
              n: 4,
              br: T.readFixed64String,
              bw: p.writeFixed64String,
            },
            clan_account_id: { n: 5, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  zl;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, t(Sl, n, r), Cl, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = n;
  function r(e, n, r) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, t(Dl, n, r), kl, {
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventSummaries = r;
  function i(e, n, r) {
    return e.SendMsg(`Clan.GetAdjacentPartnerEvents#1`, t(Al, n, r), jl, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetAdjacentPartnerEvents = i;
  function a(e, n, r) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      t(Ml, n, r),
      Nl,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = a;
  function o(e, n, r) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, t(Fl, n, r), Ll, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = o;
})((zl ||= {}));
var Bl = class {
  m_clanSteamID;
  m_appidList = [];
  m_strName = ``;
  m_strAvatarURLFullSize = ``;
  m_strTagLineLoc = ``;
  m_nFollowers = 0;
  m_strVanity = ``;
  m_webLink = void 0;
  m_linkedEvent = void 0;
  m_mapListInfo = new Map();
  m_promise;
  m_bIsLoaded = !1;
  m_bIsHidden = !1;
  m_clanAccountFlags = 0;
  constructor(e) {
    (he(this), (this.m_clanSteamID = e));
  }
  Initialize(e) {
    ((this.m_strName = e.name || ``),
      (this.m_strAvatarURLFullSize =
        e.avatar_url_full_size ||
        `https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg`),
      (this.m_strTagLineLoc = e.tag_line_localized || ``),
      (this.m_nFollowers = e.followers || 0),
      (this.m_strVanity = e.vanity || void 0),
      (this.m_webLink = e.weblink),
      (this.m_bIsHidden = e.hidden || !1),
      (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
      (this.m_linkedEvent = e.linked_event),
      (this.m_mapListInfo = new Map(Object.entries(e.list_info ?? {}))),
      e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
      (this.m_bIsLoaded = !0));
  }
  GetCreatorHomeIdentifier() {
    return {
      name: this.m_strName,
      clan_account_id: this.m_clanSteamID.GetAccountID(),
      type: `developer`,
      hidden: this.m_bIsHidden,
    };
  }
  BIsPartnerEventEditorEnabled() {
    return !!(this.m_clanAccountFlags & 8);
  }
  BHasClanAccountFlagSet(e) {
    return !!(this.m_clanAccountFlags & e);
  }
  BIsLoaded() {
    return this.m_bIsLoaded;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanSteamID.GetAccountID();
  }
  GetAppIDList() {
    return this.m_appidList;
  }
  GetName() {
    return this.m_strName;
  }
  GetAvatarURLFullSize() {
    return this.m_strAvatarURLFullSize;
  }
  GetTagLine() {
    return this.m_strTagLineLoc;
  }
  GetNumFollowers() {
    return this.m_nFollowers;
  }
  BIsHidden() {
    return this.m_bIsHidden;
  }
  GetCreatorHomeURL(e) {
    if (this.m_strVanity) {
      switch (e) {
        case `publisher`:
          return b.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
        case `franchise`:
          return b.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
      }
      return b.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
    }
    return (
      b.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
    );
  }
  BHasWebLink() {
    return this.m_webLink !== void 0;
  }
  GetWebLink() {
    return this.m_webLink;
  }
  GetVanityString() {
    return this.m_strVanity;
  }
  GetLinkedEventGID() {
    return this.m_linkedEvent;
  }
  GetListInfo() {
    return this.m_mapListInfo;
  }
  AdjustFollower(e) {
    this.m_nFollowers += e;
  }
  async EnablePartnerEventEditorFlag() {
    this.BIsPartnerEventEditorEnabled() ||
      (await this.UpdateGroupFlagsFeature([2, 8], !0));
  }
  async UpdateGroupFlagsFeature(e, t) {
    let n = b.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
      r = this.m_clanAccountFlags;
    if (
      (e.forEach((e) => {
        t ? (r |= e) : (r &= ~e);
      }),
      r == this.m_clanAccountFlags)
    )
      return;
    let i = [];
    (r & 1 && i.push(1),
      r & 8 && i.push(8),
      r & 2 && i.push(2),
      r & 4 && i.push(4),
      r & 16 && i.push(16),
      r & 32 && i.push(32),
      r & 64 && i.push(64),
      r & 128 && i.push(128),
      r & 256 && i.push(256));
    let a = new FormData();
    (a.append(`sessionid`, u()),
      a.append(`clan_account_id`, this.GetClanAccountID().toString()),
      a.append(`accountflags`, JSON.stringify(i)));
    let o = await B.default.post(n, a);
    o &&
      o.status == 200 &&
      o.data.success == 1 &&
      (this.m_clanAccountFlags = r);
  }
};
(w([M], Bl.prototype, `m_appidList`, void 0),
  w([M], Bl.prototype, `m_nFollowers`, void 0),
  w([M], Bl.prototype, `m_clanAccountFlags`, void 0));
var Vl = class e {
  constructor() {
    he(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = f(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new Bl(k.InitFromClanID(n, b.EUNIVERSE));
          (r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r));
        });
      let n = f(`creatorhomeforapp`, `application_config`);
      (this.ValidateStoreDefaultAppList(n) &&
        n.forEach((e) => {
          e.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(e.appid) ||
              this.m_mapAppToCreatorIDList.set(e.appid, []),
            this.m_mapAppToCreatorIDList.get(e.appid).push(e));
        }),
        (this.m_bLoadedFromConfig = !0));
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let e = f(`loyalty_webapi_token`, `application_config`),
        t = ye(new Ee(b.WEBAPI_BASE_URL, e || void 0));
      this.m_serviceTransport = t.GetServiceTransport();
    }
    return this.m_serviceTransport;
  }
  static async GetAsPromise(e) {
    return e;
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].name == `string` &&
          (typeof t[0].creator_clan_id == `string` ||
            typeof t[0].creator_clan_id == `number`)
      : !1;
  }
  ValidateStoreDefaultAppList(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].clan_account_id == `number` &&
          t[0].clan_account_id > 0 &&
          typeof t[0].appid == `number` &&
          t[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(e) {
    return (
      this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(e) {
    return this.m_mapClanToCreatorHome.get(e.GetAccountID());
  }
  GetCreatorHomeByID(e) {
    return this.m_mapClanToCreatorHome.get(e.clan_account_id);
  }
  async LoadCreatorHome(e, t = !1, n) {
    if (
      (this.LazyInit(), t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
    ) {
      let t = new Bl(e);
      ((t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t));
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: b.LANGUAGE },
      r =
        b.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      i = await B.default.get(r, { params: n, cancelToken: t && t.token });
    return (e.Initialize(i.data), e);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = b.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await B.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, n) {
    let r = `${b.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      i = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: b.COUNTRY,
        l: b.LANGUAGE,
        origin: self.origin,
      },
      a = [],
      o = await B.default.get(r, { params: i, cancelToken: n.token });
    return (
      o.data.curators &&
        Ce(() => {
          o.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new Bl(k.InitFromClanID(e.creator_clan_id, b.EUNIVERSE));
              (t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t));
            }
            a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
          });
        }),
      a
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
(w([M], Vl.prototype, `m_mapClanToCreatorHome`, void 0),
  w([M], Vl.prototype, `m_mapAppToCreatorIDList`, void 0),
  w([qe], Vl.prototype, `LazyInit`, null));
var Hl = new Vl();
Ve(`g_CreatorHomeStore`, Hl);
var Ul = new WeakSet();
function Wl(e = dt) {
  if (typeof window > `u` || typeof document > `u` || Ul.has(e)) return;
  let t = ee(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (Ul.add(e), Gl(t) && Rt(e, t));
}
function Gl(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function Kl(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function ql(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var Jl = new (class {
  m_queryClient = dt;
  m_boxCacheVersion = M.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    (Wl(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            jt(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        })));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        ((this.m_bBumpScheduled = !1),
          Ce(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          ));
      }));
  }
  ReadCache() {
    return (this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient);
  }
  AddGroupVanities(e) {
    (this.LazyInit(), Gl(e) && Rt(this.m_queryClient, e));
  }
  BHasClanInfoLoaded(e) {
    return (
      D(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      D(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!Ut(ql(e), this.ReadCache());
  }
  RegisterClanData(e) {
    (this.LazyInit(), Rt(this.m_queryClient, e));
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = Kl(e)),
      D(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : qt(e, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return (this.LazyInit(), Jt(e, this.m_queryClient, `store`));
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return (this.LazyInit(), Jt(e, this.m_queryClient, `group`));
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return (this.LazyInit(), Kt(ql(e), this.m_queryClient));
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? Gt(e, t) : Wt(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = Wt(Kl(e), this.ReadCache());
    return t ? k.InitFromClanID(t.clanAccountID, b.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return Wt(Kl(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return Ut(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return Wt(Kl(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      D(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      Ut(ql(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = Hl.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      b.COMMUNITY_BASE_URL +
      (n.vanity_url
        ? `groups/` + n.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
Ve(`g_ClanStore`, Jl);
function Yl() {
  let e = Te();
  return (Wl(e), e);
}
function Xl(e) {
  Yl();
  let { data: t, isPending: n } = zt(e ? ql(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function Zl(e) {
  switch (e) {
    case 6:
      return (0, z.jsx)(nt, {});
    case 11:
      return (0, z.jsx)(Qe, {});
    default:
      return (0, z.jsx)(F, {});
  }
}
function Ql(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = typeof n?.image == `number`,
    l = c ? { appid: n.image } : void 0,
    { data: u } = lt(l),
    { data: d } = ke(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = q(r),
    g = l && (!u || !d),
    [_, ee] = I.useState(!1),
    v = () => ee(!0),
    y = null;
  if (c) y = cu(d, t, h);
  else {
    let e = h ? rl : tl;
    y =
      n?.image && !_
        ? (0, z.jsx)(`img`, { className: e, src: n.image, onError: v })
        : t;
  }
  return h
    ? (0, z.jsx)(J, { ...e, logo: y, icon: i, title: f, body: p })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: y,
          bLoading: g,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: i,
              title: f,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(G, { multiline: !m, children: p }),
            !!m && (0, z.jsx)(K, { children: m }),
            s ? (0, z.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function $l(e) {
  let {
      displayName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = q(n),
    c = j(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? j(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : j(`#SteamNotifications_TradeOffer_Body`),
    u = j(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
    d = !t;
  return s
    ? (0, z.jsx)(J, { ...e, logo: e.logo, icon: e.icon, title: c, body: l })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          bLoading: d,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: r,
              title: c,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, z.jsx)(G, { children: l }),
            (0, z.jsx)(K, { children: u }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
var eu = (e) => {
  let {
      location: t,
      icon: n,
      timestamp: r,
      fnRenderTimestamp: i,
      onHide: a,
    } = e,
    o = q(t),
    s = j(`#SteamNotifications_TradeReversal_Title`),
    c = j(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = j(`#SteamNotifications_TradeReversal_Description`);
  return o
    ? (0, z.jsx)(J, { ...e, logo: e.logo, icon: e.icon, title: s, body: c })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: n,
              title: s,
              timestamp: r,
              location: t,
              fnRenderTimestamp: i,
            }),
            (0, z.jsx)(G, { children: c }),
            (0, z.jsx)(K, { children: l }),
            a ? (0, z.jsx)(Y, { onHide: a }) : null,
          ],
        }),
      });
};
function tu(e) {
  let {
      senderName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = q(n),
    c = s
      ? j(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : j(`#Notification_GiftReceived_Body`),
    l = t ? j(`#Notification_GiftReceived_Description`, t) : null,
    u = j(`#Notification_GiftReceived_Title`),
    d = !t;
  return s
    ? (0, z.jsx)(J, { ...e, logo: e.logo, icon: e.icon, title: u, body: c })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          bLoading: d,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: r,
              title: u,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, z.jsx)(G, { multiline: !l, children: c }),
            !!l && (0, z.jsx)(K, { children: l }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function nu(e) {
  let {
      requestorName: t,
      requestorAvatarURL: n,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: s,
      fnRenderTimestamp: c,
      onHide: l,
    } = e,
    u = q(a),
    d = ``;
  t && i.state == 2
    ? (d = j(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = j(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = j(`#SteamNotifications_FriendInvite_Description`));
  let [f, p] = I.useState(!1),
    m = () => p(!0),
    h = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? rl : tl;
    h = (0, z.jsxs)(A, {
      style: { position: `relative` },
      children: [
        e && (0, z.jsx)(Pe, { className: `A9KSdbG38mc-` }),
        (0, z.jsx)(`img`, { className: t, src: n, onError: m }),
      ],
    });
  }
  let g = t || j(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !t;
  return u
    ? (0, z.jsx)(J, {
        ...e,
        logo: h,
        icon: e.icon,
        title: j(`#Notification_FriendInvite_Title`),
        body: g,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: h,
          bLoading: _,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: o,
              title: j(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: c,
            }),
            (0, z.jsx)(G, { multiline: !d, children: g }),
            !!d && (0, z.jsx)(K, { children: d }),
            l ? (0, z.jsx)(Y, { onHide: l }) : null,
          ],
        }),
      });
}
function ru(e) {
  let {
      itemState: t,
      fallbackLogo: n,
      data: r,
      location: i,
      icon: a,
      timestamp: o,
      appName: s,
      fnRenderTimestamp: c,
      nUnread: l,
      onHide: u,
    } = e,
    [d, f] = I.useState(!1),
    p = () => f(!0),
    m = q(i),
    h = n;
  if (t?.icon_url && !d) {
    let e = `${b.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = m ? rl : tl;
    h = (0, z.jsx)(A, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: r,
        style: { backgroundColor: n ?? void 0, justifyContent: `center` },
        src: e,
        onError: p,
      }),
    });
  }
  let g = r.appid == 753,
    _ = null;
  if (l !== void 0 && l > 1) {
    let e = l - 1;
    _ = g
      ? j(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? j(`#Notification_Item_RollupMore_GameName`, e, s)
        : j(`#Notification_Item_RollupMore`, e);
  } else s && (_ = g ? s : j(`#Notification_Item_Single_GameName`, s));
  let ee = t?.name ? t.name : j(`#Notification_Item_Body_Generic`),
    v = !t;
  if (m) {
    let t = ``;
    return (
      (t = s
        ? j(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : j(`#Notification_Item_Body_Generic`)),
      (0, z.jsx)(J, {
        ...e,
        logo: h,
        icon: e.icon,
        title: j(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, z.jsx)(X, {
    children: (0, z.jsxs)(U, {
      logo: h,
      bLoading: v,
      ...e,
      children: [
        (0, z.jsx)(W, {
          icon: a,
          title: j(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: c,
        }),
        (0, z.jsx)(G, { multiline: !_, children: ee }),
        !!_ && (0, z.jsx)(K, { children: _ }),
        u ? (0, z.jsx)(Y, { onHide: u }) : null,
      ],
    }),
  });
}
function iu(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = q(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = lt(l),
    { data: d } = ke(l),
    f = cu(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? j(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : j(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? j(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : j(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, z.jsx)(J, {
          ...e,
          logo: f,
          icon: e.icon,
          title: j(`#SteamNotification_AsyncGame_Title`),
          body: m,
        })
      : (0, z.jsx)(X, {
          children: (0, z.jsxs)(U, {
            logo: f,
            bLoading: p,
            ...e,
            children: [
              (0, z.jsx)(W, {
                icon: i,
                title: j(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, z.jsx)(G, { children: m }),
              (0, z.jsx)(K, { children: u?.name }),
              s ? (0, z.jsx)(Y, { onHide: s }) : null,
            ],
          }),
        })
  );
}
function au(e) {
  let {
      title: t,
      body: n,
      logoUrl: r,
      bDataLoading: i,
      icon: a,
      onHide: o,
      location: s,
      timestamp: c,
      fnRenderTimestamp: l,
      onActivate: u,
      personaStatus: d,
    } = e,
    f = q(s),
    p = f ? rl : tl,
    m = (0, z.jsx)(A, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: p,
        style: { justifyContent: `center` },
        src: r,
      }),
    });
  return f
    ? (0, z.jsx)(J, {
        logo: m,
        icon: e.icon,
        title: t,
        body: n,
        onActivate: u,
        personaStatus: d,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: m,
          bLoading: i,
          onActivate: u,
          personaStatus: d,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: a,
              title: t,
              timestamp: c,
              location: s,
              fnRenderTimestamp: l,
            }),
            (0, z.jsx)(G, { multiline: !0, children: n }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function ou(e) {
  let {
      currentUserSteamID: t,
      fallbackLogo: n,
      postedByDisplayName: r,
      postedByAvatarURL: i,
      ownerDisplayName: a,
      data: o,
      location: s,
      icon: c,
      timestamp: l,
      fnRenderTimestamp: u,
      nUnread: d,
      appName: f,
      onHide: p,
      commentTitle: m,
      commentBody: h,
    } = e,
    g = m,
    _ = q(s),
    [ee, v] = I.useState(!1),
    y = () => v(!0),
    [te, b] = Xl(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    x = ls(o) ? r : null,
    ne = ds(o) ? a : null;
  o.comment_type == 10
    ? (g =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && x
            ? j(`#SteamNotifications_Comment_Your_Profile_By`, x)
            : j(`#SteamNotifications_Comment_Your_Profile`)
          : ne
            ? s == 4 && x
              ? j(`#SteamNotifications_Comment_Player_Profile_By`, x, ne)
              : j(`#SteamNotifications_Comment_Player_Profile`, ne)
            : j(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (g =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? f
              ? j(`#SteamNotifications_Comment_Your_Screenshot_Game`, f)
              : j(`#SteamNotifications_Comment_Your_Screenshot`)
            : f
              ? j(`#SteamNotifications_Comment_Screenshot_Game`, f)
              : j(`#SteamNotifications_Comment_Screenshot`))
      : !g && o.json_data?.title && (g = o.json_data.title);
  let S = null;
  o.brate_limited
    ? (g =
        o.comment_type == 7 && o.bis_forum && h
          ? j(`#SteamNotifications_Comment_RateLimited_Forum`, h)
          : j(`#SteamNotifications_Comment_RateLimited`))
    : (S =
        o.comment_type == 7 && o.bis_forum && h
          ? (0, z.jsx)(K, {
              children: j(`#SteamNotifications_Comment_NewDiscussion`, h),
            })
          : (0, z.jsxs)(K, { children: [`"`, h, `"`] }));
  let re = j(`#SteamNotifications_Comment`),
    ie = null;
  if (d !== void 0 && d > 1) {
    let e = `+` + (d - 1);
    s == 4
      ? (ie = (0, z.jsx)(`div`, { className: il, children: e }))
      : (re = re + ` ` + e);
  }
  let ae = n;
  if (!ee) {
    let e = _ ? rl : tl;
    if (i && us(o)) {
      let t = o.bhas_friend && s != 1;
      ae = (0, z.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, z.jsx)(Pe, { className: `A9KSdbG38mc-` }),
          (0, z.jsx)(`img`, { className: e, src: i, onError: y }),
        ],
      });
    } else
      b?.avatar_medium_url &&
        (ae = (0, z.jsx)(`img`, {
          className: e,
          src: b.avatar_medium_url,
          onError: y,
        }));
  }
  return _
    ? (0, z.jsx)(J, { ...e, logo: ae, icon: e.icon, title: re, body: g })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: ae,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: c,
              title: re,
              timestamp: l,
              location: s,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(G, { children: g }),
            S,
            ie,
            p ? (0, z.jsx)(Y, { onHide: p }) : null,
          ],
        }),
      });
}
function su(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = q(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = lt(l),
    { data: d } = ke(l),
    { data: f } = ge(l),
    p = cu(d, t, c),
    m = l && (!u || !d || !f),
    h = ``,
    g = null;
  if (u) {
    let e = u.name ?? ``;
    ((h = e),
      n.count == 1
        ? c
          ? (h = Xe(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, z.jsx)(`span`, { children: e }),
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
          : (g = Xe(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (h = j(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (g = j(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (h = j(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (g = j(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else h = j(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, z.jsx)(J, {
        ...e,
        logo: p,
        icon: e.icon,
        title: j(`#SteamNotifications_Wishlist`),
        body: h,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: p,
          bLoading: m,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: i,
              title: j(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(G, { multiline: !g, children: h }),
            !!g && (0, z.jsx)(K, { children: g }),
            s ? (0, z.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function cu(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, z.jsx)(A, { style: { position: `relative` }, children: t });
  let o = Yt(e, `community_icon`);
  return n
    ? (0, z.jsx)(A, {
        style: { position: `relative` },
        children: (0, z.jsx)(`img`, { src: o, className: rl, onError: a }),
      })
    : (0, z.jsxs)(A, {
        style: { position: `relative` },
        children: [
          (0, z.jsx)(`img`, { className: N(nl), src: o, onError: a }),
          (0, z.jsx)(`img`, {
            src: o,
            onError: a,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function Y(e) {
  return (0, z.jsx)(`div`, {
    className: al,
    onClick: (t) => {
      (e.onHide(), t.stopPropagation(), t.preventDefault());
    },
    onMouseDown: (e) => {
      (e.stopPropagation(), e.preventDefault());
    },
    children: (0, z.jsx)(Le, {}),
  });
}
function X(e) {
  return (0, z.jsx)(`div`, { className: ol, children: e.children });
}
var lu = e(Se()),
  uu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: p.writeString },
            type: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  du = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: p.writeString },
            type: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  fu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.dictionary || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dictionary: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  pu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: p.writeString },
            type: { n: 2, br: T.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  mu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pid: { n: 1, br: T.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  hu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  gu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: T.readUint64String, bw: p.writeUint64String },
            should_handle: { n: 2, br: T.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  _u = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.search_term || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_term: { n: 1, br: T.readString, bw: p.writeString },
            max_results: { n: 2, br: T.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  vu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || E(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
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
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  yu;
(function (e) {
  e.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: uu,
  };
  function n(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            yu.UpdateTextFilterDictionaryHandler,
            e,
          )
    );
  }
  e.RegisterForUpdateTextFilterDictionary = n;
  function r(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            t(uu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.UpdateTextFilterDictionary = r;
  function i(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            t(uu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgUpdateTextFilterDictionary = i),
    (e.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: du,
      response: fu,
    }));
  function a(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, t(du, e), fu, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetTextFilterDictionary = a;
  function o(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, t(du, e), fu, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetTextFilterDictionary = o),
    (e.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: pu,
    }));
  function s(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            yu.NotifyTextFilterDictionaryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTextFilterDictionaryChanged = s;
  function c(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            t(pu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.NotifyTextFilterDictionaryChanged = c;
  function l(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            t(pu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgNotifyTextFilterDictionaryChanged = l),
    (e.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: mu,
      response: hu,
    }));
  function u(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(`SteamEngine.GetGameIDForPID#1`, t(mu, e), hu, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetGameIDForPID = u;
  function d(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(`SteamEngine.GetGameIDForPID#1`, t(mu, e), hu, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetGameIDForPID = d),
    (e.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: gu,
    }));
  function f(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            yu.SetOverlayEscapeKeyHandlingHandler,
            e,
          )
    );
  }
  e.RegisterForSetOverlayEscapeKeyHandling = f;
  function p(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            t(gu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SetOverlayEscapeKeyHandling = p;
  function m(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            t(gu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgSetOverlayEscapeKeyHandling = m),
    (e.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: _u,
      response: vu,
    }));
  function h(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            t(_u, e),
            vu,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SearchAppDataCacheByStoreKeywords = h;
  function g(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            t(_u, e),
            vu,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SendMsgSearchAppDataCacheByStoreKeywords = g;
})((yu ||= {}));
var bu = class {
  constructor() {
    he(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  DispatchMsgToHandlers(e, t) {
    let n = e.GetEMsg();
    if (n == 146) {
      let n = e.Hdr().target_job_name();
      if (n) {
        let r = this.m_mapServiceMethodHandlers.get(n);
        if (r) {
          this.DEBUG_LogMessageDispatch(e, r[0]);
          for (let i of r)
            try {
              i.invoke(e, t);
            } catch (e) {
              e instanceof Error
                ? ue().ReportError(e)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${n}): `,
                    e,
                  );
            }
          return !0;
        }
      }
    } else {
      let t = this.m_mapCallbacks.get(n);
      if (t) {
        this.DEBUG_LogMessageDispatch(e, t[0]);
        for (let n of t)
          try {
            n.invoke(e);
          } catch (e) {
            e instanceof Error
              ? ue().ReportError(e)
              : console.error(
                  `MessageHandlers failed to dispatch message to handler: `,
                  e,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(e, t) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(e, t, n) {
    let r = this.m_mapCallbacks.get(e);
    return (
      r ||
        ((r = []),
        this.m_mapCallbacks.set(e, r),
        this.m_rgRegisteredEMsgs.push(e)),
      r.push({ invoke: n, msgClass: t }),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapCallbacks.get(e);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  AddServiceMethodHandler(e, t) {
    let n = (n, r) => {
      let i = g.InitFromMsg(e.request, n),
        a = g.Init(e.response, 147),
        o = t(i, a),
        s = (e) => {
          (a.Hdr().set_eresult(e), r(a));
        };
      o instanceof Promise
        ? o.then(s).catch(() => {
            s(2);
          })
        : s(o);
    };
    return (
      this.m_mapServiceMethodHandlers.has(e.name)
        ? console.error(`Duplicate registration for method ` + e.name)
        : (this.m_mapServiceMethodHandlers.set(e.name, [
            { invoke: n, msgClass: e.request },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapServiceMethodHandlers.get(e.name);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  AddServiceNotificationHandler(e, t) {
    let n = (n, r) => {
        t(g.InitFromMsg(e.request, n));
      },
      r = this.m_mapServiceMethodHandlers.get(e.name);
    return (
      r ||
        ((r = []),
        this.m_mapServiceMethodHandlers.set(e.name, r),
        this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      r.push({ invoke: n, msgClass: e.request }),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapServiceMethodHandlers.get(e.name);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(e, t) {
    return this.AddCallback(e, void 0, t);
  }
  RegisterEMessageHandler(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      n(g.InitFromMsg(t, e));
    });
  }
  RegisterEMessageAction(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      Ce(() => {
        n(g.InitFromMsg(t, e));
      });
    });
  }
  RegisterServiceNotificationHandler(e, t) {
    return this.AddServiceNotificationHandler(e, t);
  }
  RegisterServiceNotificationHandlerAction(e, t) {
    return this.AddServiceNotificationHandler(e, (e) => {
      let n;
      return (
        Ce(() => {
          n = t(e);
        }),
        n
      );
    });
  }
  RegisterServiceMethodHandler(e, t) {
    return this.AddServiceMethodHandler(e, t);
  }
  RegisterServiceMethodHandlerAction(e, t) {
    return this.AddServiceMethodHandler(e, (e, n) => {
      let r;
      return (
        Ce(() => {
          r = t(e, n);
        }),
        r
      );
    });
  }
};
(w([M], bu.prototype, `m_rgRegisteredEMsgs`, void 0),
  w([M], bu.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0));
var xu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auth_key || E(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { auth_key: { n: 1, br: T.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Request`;
    }
  },
  Su = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Response`;
    }
  },
  Cu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  wu;
(function (e) {
  e.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: xu,
    response: Su,
  };
  function n(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(`TransportAuth.Authenticate#1`, t(xu, e), Su, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.Authenticate = n;
  function r(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : n.SendMsg(`TransportAuth.Authenticate#1`, t(xu, e), Su, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  ((e.SendMsgAuthenticate = r),
    (e.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: Cu,
    }));
  function i(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(wu.NotifyStartShutdownHandler, e)
    );
  }
  e.RegisterForNotifyStartShutdown = i;
  function a(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(`TransportAuth.NotifyStartShutdown#1`, t(Cu, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.NotifyStartShutdown = a;
  function o(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : n.SendNotification(`TransportAuth.NotifyStartShutdown#1`, t(Cu, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.SendMsgNotifyStartShutdown = o;
})((wu ||= {}));
var Tu = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new fe(`CWebSocketConnection`, () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(e, t) {
    ((this.m_sName = e),
      (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        t.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        t.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = t.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs =
        t.nReconnectAttemptTimeoutMs ?? 1e4));
  }
  get name() {
    return this.m_sName;
  }
  async Connect(e) {
    return (
      (this.m_sURL = e),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(e) {
    return ie(e, 1, 5) * 1e3;
  }
  async ConnectWithRetry(e, t, n) {
    this.m_bConnecting = !0;
    let r = 0;
    do {
      try {
        let t = await this.ConnectToSocket(e, n);
        if (t.result == 1) return ((this.m_bConnecting = !1), t);
        this.Log.Warning(`connect attempt failed: ${t.result} - ${t.message}`);
      } catch (e) {
        this.Log.Warning(`connect attempt failed: exception ${e.name} - ${e}`);
      }
      let i = this.GetInterAttemptBackoffMs(r);
      (this.Log.Info(`connect retry: attempt:${r}/${t} backoff:${i}`),
        await new Promise((e) => setTimeout(e, i)),
        (this.m_socket = null),
        (r += 1));
    } while (r < t);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      { result: 2, message: `not ready, exceeded retry count` }
    );
  }
  Disconnect() {
    (this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close());
  }
  PrepareForShutdown() {
    (this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0));
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    (this.Log.Info(`start reconnect`),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({ connection: this }),
      (await this.Reconnect()).result == 1
        ? (this.Log.Info(`reconnect successful`),
          this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 1 }))
        : (this.Log.Warning(`failed to re-connect to websocket after close`),
          this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 2 }),
          this.m_fnOnCloseHandler({
            connection: this,
            bError: !0,
            bIsExpectedToReconnect: !1,
          })));
  }
  async ConnectToSocket(e, t) {
    if (this.m_socket != null)
      return this.m_socket.readyState == WebSocket.OPEN
        ? { result: 1, message: `ready` }
        : (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          { result: 2, message: `websocket in an unexpected state` });
    try {
      this.m_socket = new WebSocket(e);
    } catch {
      return (
        this.Log.Warning(`failed to initialize websocket connection`),
        { result: 35, message: `Failed to initialize websocket connection` }
      );
    }
    return (
      (this.m_socket.binaryType = `arraybuffer`),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, t))
        ? (this.Log.Info(`connection ready`), { result: 1, message: `ready` })
        : (this.Log.Warning(`failed to reach open state`),
          { result: 2, message: `failed to reach open state` })
    );
  }
  async WaitForSocketOpen(e, t) {
    if (e.readyState != WebSocket.CONNECTING)
      return e.readyState == WebSocket.OPEN;
    let n = t / 100;
    for (; e.readyState == WebSocket.CONNECTING && n > 0;)
      (n--, await new Promise((e) => setTimeout(e, 100)));
    return e.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(e) {
    this.Log.Warning(`websocket error`);
  }
  OnSocketOpen(e) {
    this.Log.Info(`websocket open`);
  }
  OnSocketClose(e) {
    if (this.m_bDisconnectRequested) {
      (this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        }));
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let t = this.BShouldReconnect();
    (this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: t,
    }),
      t && this.StartReconnect());
  }
  async OnSocketMessage(e) {
    this.m_fnOnMessageHandler(e.data);
  }
  SendSerializedMessage(e) {
    try {
      return (this.m_socket.send(e), 1);
    } catch {
      return 2;
    }
  }
};
(w([S], Tu.prototype, `OnSocketError`, null),
  w([S], Tu.prototype, `OnSocketOpen`, null),
  w([S], Tu.prototype, `OnSocketClose`, null),
  w([S], Tu.prototype, `OnSocketMessage`, null));
var Eu = `127.0.0.1`,
  Z = new fe(`WebUITransport`),
  Du = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new bu();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 67108864;
    }
    ReportError(e) {
      Z.Warning(e);
      let t = ue();
      t &&
        t.ReportError(Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!b.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      ((this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          e.portClientdll,
          e.authKeyClientdll,
        ),
        R().SetDefaultTransport(this),
        R().SetDefaultHandlerRegistry(this.m_messageHandlers),
        wu.RegisterForNotifyStartShutdown(this.OnStartShutdown));
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(e) {
      this.m_fnOnStatusEventHandler = e;
    }
    SetReconnectErrorHandler(e) {
      this.m_fnOnReconnectErrorHandler = e;
    }
    CreateConnection(e, t, n, r) {
      let i = {
        connection: new Tu(t, {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        }),
        sUrl: `ws://${Eu}:${n}/transportsocket/`,
        sAuthKey: r,
        eClientExecutionSite: e,
      };
      this.m_mapConnectionDetails.set(e, i);
    }
    SendMsg(e, t, n, r) {
      return new Promise((i, a) => {
        let o = r.eClientExecutionSite;
        if (o == null || o == 0) {
          (Z.Error(`SendMsg: Invalid client execution site: ${o}`),
            a(`Transport SendMsg: invalid client execution site ${o}`));
          return;
        }
        let s = this.m_mapConnectionDetails.get(o);
        if (s == null) {
          (Z.Error(
            `SendMsg: could not find connection for execution site: ${o}`,
          ),
            a(
              `Transport SendMsg: could not find connection for execution site ${o}`,
            ));
          return;
        }
        let c = s.connection;
        if (!c.BCanSendMessages()) {
          let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
          this.m_mapServiceCallErrorCount.set(e, t + 1);
          let n = `SendMsg: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
          (t == 1 && this.ReportError(n),
            Z.Warning(n + ` error count: ${t}`),
            a(`Transport SendMsg: socket not ready`));
          return;
        }
        let l = this.m_iMsgSeq++;
        (t.SetEMsg(146),
          t.Hdr().set_target_job_name(e),
          t.Hdr().set_jobid_source(`` + l));
        let u = t.Serialize();
        if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
          Z.Error(
            `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let e = g.Init(n);
          (e.Hdr().set_eresult(2), i(e));
        } else
          c.SendSerializedMessage(u) == 1
            ? this.m_mapPendingMethodRequests.set(l, {
                m_iSeq: l,
                m_sServiceName: e,
                m_responseClass: n,
                m_fnCallback: i,
                m_fnError: a,
              })
            : (Z.Error(`SendMsg: Failed to send message`),
              a(`Transport SendMsg: failed to send message`));
      });
    }
    SendNotification(e, t, n) {
      let r = n.eClientExecutionSite;
      if (r == null || r == 0)
        return (
          Z.Error(`SendNotification: Invalid client execution site: ${r}`), !1
        );
      let i = this.m_mapConnectionDetails.get(r);
      if (i == null)
        return (
          Z.Error(
            `SendNotification: could not find connection for execution site: ${r}`,
          ),
          !1
        );
      let a = i.connection;
      if (!a.BCanSendMessages()) {
        let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
        this.m_mapServiceCallErrorCount.set(e, t + 1);
        let n = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
        return (
          t == 1 && this.ReportError(n), Z.Warning(n + ` error count: ${t}`), !1
        );
      }
      return (
        t.SetEMsg(146),
        t.Hdr().set_target_job_name(e),
        a.SendSerializedMessage(t.Serialize()) == 1
      );
    }
    async ConnectToSite(e) {
      let t = await e.connection.Connect(e.sUrl);
      return t.result == 1
        ? (await this.SendAuthMessage(e)).BSuccess()
          ? { result: 1, message: `connected` }
          : { result: 2, message: `client auth failed` }
        : t;
    }
    async MakeReady() {
      let e = [];
      for (let [t, n] of this.m_mapConnectionDetails)
        e.push(this.ConnectToSite(n));
      let t = await Promise.all(e);
      ((this.m_bInitialized = !0), this.DispatchTransportStatusUpdate());
      for (let e of t) if (e.result != 1) return e;
      return { result: 1, message: `ready` };
    }
    GetConnectionDetails(e) {
      for (let [t, n] of this.m_mapConnectionDetails)
        if (n.connection === e) return n;
      return (
        Z.Error(`GetConnectionDetails: failed to identify connection`), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let e = !0;
      for (let [t, n] of this.m_mapConnectionDetails)
        n.connection.BCanSendMessages() || (e = !1);
      this.m_fnOnStatusEventHandler({ bConnected: e });
    }
    OnWebsocketReconnectStart(e) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(e) {
      if ((this.DispatchTransportStatusUpdate(), e.eResult != 1)) {
        (Z.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({}));
        return;
      }
      this.FailAllPendingRequests();
      let t = this.GetConnectionDetails(e.connection);
      t && this.SendAuthMessage(t);
    }
    OnWebsocketClose(e) {
      e.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(e) {
      let t = new de(e),
        n = g.InitHeaderFromPacket(t);
      n.Hdr().jobid_target() &&
      n.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(n)
        : this.DispatchNotification(n);
    }
    DispatchMethodResponse(e) {
      let t = parseInt(e.Hdr().jobid_target()),
        n = this.m_mapPendingMethodRequests.get(t);
      if (n == null) {
        D(!1, `Transport Error: no pending callback for request`);
        return;
      }
      (D(t == n.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(t));
      let r = g.InitFromMsg(n.m_responseClass, e);
      (r.BIsValid() ||
        ue()?.ReportError(
          Error(
            `WebUITransport: failed to parse response for ${n.m_sServiceName}`,
          ),
          { bIncludeMessageInIdentifier: !0 },
        ),
        n.m_fnCallback(r));
    }
    DispatchNotification(e) {
      this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
        D(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [e, t] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
        );
        let e = g.Init(t.m_responseClass);
        (e.Hdr().set_eresult(2), t.m_fnCallback(e));
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let t = wu.AuthenticateHandler.name,
        n = { eClientExecutionSite: e.eClientExecutionSite },
        r = g.Init(xu);
      return (
        r.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(t, r, wu.AuthenticateHandler.response, n)
      );
    }
    OnStartShutdown(e) {
      for (let [e, t] of this.m_mapConnectionDetails)
        t.connection.PrepareForShutdown();
      return 1;
    }
  };
(w([S], Du.prototype, `OnWebsocketReconnectStart`, null),
  w([S], Du.prototype, `OnWebsocketReconnectFinish`, null),
  w([S], Du.prototype, `OnWebsocketClose`, null),
  w([S], Du.prototype, `OnWebsocketMessage`, null),
  w([S], Du.prototype, `OnStartShutdown`, null));
var Ou = new Du();
function ku() {
  return b.IN_MOBILE ? m : i();
}
function Au(e) {
  if (e === ``) return !1;
  try {
    return (RegExp(`\\b(` + e + `)\\b`, `ugi`), !0);
  } catch {
    return (
      console.log(`'${e}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var ju = 15,
  Mu = 3600,
  Nu = `(1)`,
  Q = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = { eTextFilterSetting: 3, bIgnoreFriends: !1 };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = ``;
    m_strProfanityWords = ``;
    m_strCleanWords = ``;
    m_strBannedPattern = ``;
    m_strCleanPattern = ``;
    m_bWordListsComplete = !1;
    m_bHaveCompleteFilter = !1;
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_promiseOngoingLoad = null;
    m_fnUnregisterDictionaryChanged = void 0;
    m_rgUnregisterPlayerNotifications = [];
    m_DataAccess;
    constructor(e) {
      he(this);
      let t = new at();
      ((this.m_TextFilterPreferences = {
        eTextFilterSetting: t.text_filter_setting(),
        bIgnoreFriends: t.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new Ge()),
        (this.m_DataAccess = e));
    }
    async Init(e = 0, t = null, n = null, r = null) {
      ((this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = Ou),
        (this.m_unAccountID = e),
        (this.m_Transport = t),
        (this.m_Storage = n),
        (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        this.InitSteamEngineLanguages(),
        this.RegisterPlayerNotifications(r),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        (this.m_nLoadLanguagesRetryDelaySec = ju),
        await this.EnsureFiltersLoaded());
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            yu.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(b.LANGUAGE),
        b.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = ju),
            this.EnsureFiltersLoaded()),
        1
      );
    }
    EnsureFiltersLoaded() {
      return this.m_bOngoingLoad && this.m_promiseOngoingLoad
        ? ((this.m_bFilterChangedWhileLoading = !0), this.m_promiseOngoingLoad)
        : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
          this.m_promiseOngoingLoad);
    }
    async InitFiltersWithRetry() {
      this.m_bOngoingLoad = !0;
      try {
        do
          ((this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0));
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        ((this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null));
      }
    }
    RegisterPlayerNotifications(e) {
      (this.m_rgUnregisterPlayerNotifications.forEach((e) => e()),
        (this.m_rgUnregisterPlayerNotifications = []),
        e &&
          this.m_rgUnregisterPlayerNotifications.push(
            e.RegisterServiceNotificationHandler(
              Ie.NotifyCommunityPreferencesChangedHandler,
              (e) => (
                this.UpdateCommunityPreferences(e.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            e.RegisterServiceNotificationHandler(
              Ie.NotifyTextFilterWordsChangedHandler,
              (e) => (
                this.UpdateTextFilterWords(e.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          ));
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(e) {
      let t = g.Init(uu);
      (t.Body().set_language(e),
        t.Body().set_type(`profanity`),
        yu.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport),
        t.Body().set_type(`banned`),
        yu.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport));
    }
    GetSteamEngineTextFilterDictionary(e, t) {
      let n = g.Init(du);
      return (
        n.Body().set_language(e),
        n.Body().set_type(t),
        yu.SendMsgGetTextFilterDictionary(n, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(e) {
      return e + `_` + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let e = await this.m_Storage.GetObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
        );
        e && (this.m_TextFilterPreferences = e);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(e) {
      try {
        let t = new TextEncoder().encode(Nu + e);
        return lu.fromByteArray(t);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(e) {
      try {
        let t = lu.toByteArray(e),
          n = new TextDecoder().decode(t);
        return n.startsWith(Nu)
          ? ((n = n.slice(3)), n)
          : (console.log(
              `DeobfuscateString given invalid base64 data, ignoring: ` + e,
            ),
            ``);
      } catch {
        return ``;
      }
    }
    async LoadObfuscatedString(e) {
      if (this.m_Storage) {
        let t = await this.m_Storage.GetString(this.GetStorageKey(e));
        if (t) return this.DeobfuscateString(t);
      }
      return null;
    }
    async SaveObfuscatedString(e, t) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(e),
          this.ObfuscateString(t),
        );
    }
    async LoadTextFilterWords() {
      let e = await this.LoadObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
      );
      if (e)
        try {
          this.m_TextFilterWords = Ge.fromObject(JSON.parse(e));
        } catch {
          (console.warn(`Error parsing cached text filter word list`, e),
            (this.m_TextFilterWords = new Ge()));
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let e = await this.LoadObfuscatedString(
          `CTextFilterStore_strBannedPattern`,
        ),
        t = await this.LoadObfuscatedString(`CTextFilterStore_strCleanPattern`);
      ((this.m_bHaveCompleteFilter = e != null && t != null),
        e != null && t != null && this.BRebuildFilter(e, t));
    }
    SaveFilter() {
      (this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        ));
    }
    async RequestUpdatedSettings() {
      let e = new at();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let t = g.Init(Ze);
            e = (await $e.GetCommunityPreferences(this.m_Transport, t))
              .Body()
              .preferences();
          } else {
            let t = { sessionid: u(), origin: ku() },
              n = await B.default.get(
                b.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                { params: t, withCredentials: !0 },
              );
            e = at.fromObject(n.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(e),
        e.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let t = new Ge();
        if (e.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let e = g.Init(tt);
              t = (await $e.GetTextFilterWords(this.m_Transport, e))
                .Body()
                .words();
            } else {
              let e = { sessionid: u(), origin: ku() },
                n = await B.default.get(
                  b.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  { params: e, withCredentials: !0 },
                );
              t = Ge.fromObject(n.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(t);
      }
    }
    UpdateCommunityPreferences(e) {
      let t = !1;
      (e.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          e.text_filter_setting()),
        (t = !0)),
        e.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            e.text_filter_ignore_friends()),
          (t = !0)),
        t && this.SaveTextFilterPreferences());
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(e) {
      ((this.m_TextFilterWords = e), this.SaveTextFilterWords());
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = ju;
    async LoadLanguages() {
      ((this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0)));
      try {
        let e = await this.LoadLanguage(b.LANGUAGE);
        if (
          (b.LANGUAGE !== `english` &&
            (e = (await this.LoadLanguage(`english`)) && e),
          !e)
        )
          throw Error(`clean_public dictionary unavailable`);
        ((this.m_nLoadLanguagesRetryDelaySec = ju),
          (this.m_bWordListsComplete = !0));
      } catch (e) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          Mu,
        );
        let t = this.m_nLoadLanguagesRetryDelaySec;
        (console.warn(`LoadLanguages caught`, e, `retry in`, t, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            ((this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded());
          }, t * 1e3)));
      }
    }
    async LoadLanguage(e) {
      let t = ``,
        n = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let t = await this.GetSteamEngineTextFilterDictionary(e, `banned`);
            this.m_strBannedWords += t.Body().dictionary();
          }
          {
            let t = await this.GetSteamEngineTextFilterDictionary(
              e,
              `profanity`,
            );
            this.m_strProfanityWords += t.Body().dictionary();
          }
          n = !0;
        } catch (e) {
          console.warn(`LoadLanguage caught while loading from cache:`, e);
        }
      if (!n) {
        t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${ku()}`;
        {
          let e = await B.default.get(t);
          this.m_strBannedWords += e.data;
        }
        t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${ku()}`;
        {
          let e = await B.default.get(t);
          this.m_strProfanityWords += e.data;
        }
      }
      let r = this.m_WebUIServiceTransport.BIsValid(),
        i = `CTextFilterStore_strCleanPublic_` + e;
      t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${ku()}`;
      try {
        let e = await B.default.get(t);
        ((this.m_strCleanWords += e.data),
          r && this.SaveObfuscatedString(i, e.data));
      } catch (e) {
        console.warn(`LoadLanguage caught while loading clean list:`, e);
        let t = r ? await this.LoadObfuscatedString(i) : null;
        if (!t) return !1;
        this.m_strCleanWords += t;
      }
      return !0;
    }
    CreatePattern(e) {
      let t = e.filter(function (e) {
        return Au(e);
      });
      return t.length > 0 ? `\\b(` + t.join(`|`) + `)\\b` : ``;
    }
    OnFilterDataChanged() {
      if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter) return;
      let e = new RegExp(/\s*[\r\n]+\s*/g),
        t = [],
        n = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          t = t.concat(this.m_strBannedWords.split(e));
          break;
        default:
          t = t.concat(
            this.m_strProfanityWords.split(e),
            this.m_strBannedWords.split(e),
          );
      }
      ((t = t.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (n = this.m_strCleanWords.split(e)),
        (n = n.concat(
          this.m_TextFilterWords.text_filter_custom_clean_words(),
        )));
      let r = this.CreatePattern(t),
        i = this.CreatePattern(n);
      (i != `` && (i = `^(` + i + `)$`),
        this.BRebuildFilter(r, i) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete));
    }
    BRebuildFilter(e, t) {
      if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = e),
        e !== ``)
      )
        try {
          this.m_regexBannedWords = new RegExp(e, `ugi`);
        } catch (e) {
          (console.warn(`Couldn't compile textfilter bannedwords regex`),
            ue().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${e}`),
            ),
            (this.m_strBannedPattern = ``));
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = t),
        t !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(t, `ugi`);
        } catch (e) {
          (console.warn(`Couldn't compile textfilter cleanwords regex`),
            ue().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${e}`),
            ),
            (this.m_strCleanPattern = ``));
        }
      return !0;
    }
    CreateProfanityReplacement(e) {
      return `♥`.repeat(e);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(e) {
      this.m_bShownFilterTip = e;
    }
    FilterText(e, t) {
      if (!this.m_regexBannedWords) return t;
      let n = 0;
      return (
        typeof e == `string` && e !== ``
          ? (n = new k(e).GetAccountID())
          : typeof e == `number` && (n = e),
        !t ||
        n == this.m_unAccountID ||
        (e &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(n))
          ? t
          : t.replace(this.m_regexBannedWords, (e) =>
              this.m_regexCleanWords && e.search(this.m_regexCleanWords) == 0
                ? e
                : this.CreateProfanityReplacement(e.length),
            )
      );
    }
  };
(w([M], Q.prototype, `m_TextFilterPreferences`, void 0),
  w([M], Q.prototype, `m_mapPlayerCache`, void 0),
  w([M], Q.prototype, `m_regexBannedWords`, void 0),
  w([M], Q.prototype, `m_regexCleanWords`, void 0),
  w([M], Q.prototype, `m_bInitialized`, void 0),
  w([M], Q.prototype, `m_bFilterChangedWhileLoading`, void 0),
  w([M], Q.prototype, `m_bOngoingLoad`, void 0),
  w([qe], Q.prototype, `Init`, null),
  w([S], Q.prototype, `OnTextFilterDictionaryChanged`, null),
  w([qe], Q.prototype, `UpdateCommunityPreferences`, null),
  w([qe], Q.prototype, `BRebuildFilter`, null));
var Pu;
function Fu() {
  if (!Pu) {
    let e = new Set(),
      t = { sessionid: u(), origin: ku() };
    (B.default
      .get(b.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: t,
        withCredentials: !0,
      })
      .then((t) => {
        for (let r of t.data.friendslist?.friends ?? [])
          n(r.efriendrelationship) && e.add(new k(r.ulfriendid).GetAccountID());
      }),
      (Pu = (t) => e.has(t)));
  }
  return Pu;
}
var Iu = null,
  Lu = !1;
function Ru() {
  return ((Iu ||= new Q({ BIsFriend: Fu() })), Iu);
}
function zu() {
  let e = Oe(),
    t = ft(),
    n = it(() => Ru().m_bInitialized);
  return (
    !n &&
      !Lu &&
      ((Lu = !0), Iu.Init(d.accountid, e, t).finally(() => (Lu = !1))),
    [n, Iu]
  );
}
function Bu(e) {
  let t = null;
  return (Ko(e) ? (t = Gu) : Uo(e) ? (t = Hu) : td[e] && (t = td[e]), t);
}
function Vu(e) {
  let { rollup: t, uimode: n, location: r } = e,
    i = Bu(t.type);
  return i
    ? (0, z.jsx)(je, {
        controller: `notification`,
        method: l(n),
        submethod: h(r),
        children: (0, z.jsx)(i, { ...e }),
      })
    : null;
}
function Hu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t.item.notification_type, t.item.body_data),
    s = Xn(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = re(o?.link ?? `#`, s);
  return (0, z.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Ql, {
      icon: Zl(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, z.jsx)(F, {}),
      location: r,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Uu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${b.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = Us(t);
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, z.jsx)(iu, {
      icon: (0, z.jsx)(F, {}),
      fallbackLogo: (0, z.jsx)(be, {}),
      onActivate: s,
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Wu(e) {
  let {
      steamid: t,
      url: n,
      strTitleLoc: r,
      strBodyLoc: i,
      rollup: a,
      onNotificationClick: o,
      location: s,
      uimode: c,
      onHide: l,
    } = e,
    { data: u } = sc(t),
    d = (e) => o(() => {}, a.item, e),
    f = () => o(() => window.location.assign(n), a.item);
  if (!i) return null;
  let p = !u,
    m = j(r, u?.m_strPlayerName ?? ``),
    h = j(i, u?.m_strPlayerName ?? ``);
  return (0, z.jsx)(`a`, {
    href: n,
    onMouseDown: d,
    children: (0, z.jsx)(au, {
      title: m,
      body: h,
      bDataLoading: p,
      logoUrl: u?.avatar_url_medium,
      icon: (0, z.jsx)(F, {}),
      onActivate: f,
      location: s,
      eUIMode: c,
      timestamp: a.timestamp,
      nUnread: a.rgunread.length,
      bNewIndicator: V(a.item),
      onHide: l,
    }),
  });
}
function Gu(e) {
  let t = Hs(e.rollup.type, e.rollup.item.body_data);
  if (!t) return null;
  let { strTitleLoc: n, strBodyLoc: r, strUrl: i, steamid: a } = t;
  return !a || !n || !r
    ? null
    : (0, z.jsx)(Wu, {
        steamid: a,
        url: i,
        strTitleLoc: n,
        strBodyLoc: r,
        ...e,
      });
}
function Ku(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = O(),
    s = Us(t),
    c = `${b.COMMUNITY_BASE_URL}profiles/${o}/tradeoffers`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    { data: d } = sc(k.InitFromAccountID(s, b.EUNIVERSE).GetAccountID());
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)($l, {
      logo: (0, z.jsx)(F, {}),
      icon: (0, z.jsx)(Ke, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: d?.m_strPlayerName,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
var qu = (e) => {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${b.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(eu, {
      logo: (0, z.jsx)(F, {}),
      icon: (0, z.jsx)(Ke, {}),
      onActivate: () => n(() => window.location.assign(o), t.item),
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
};
function Ju(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = O(),
    s = `${b.COMMUNITY_BASE_URL}profiles/${o}/inventory/#pending_gifts`,
    c = () => n(() => window.location.assign(s), t.item),
    l = (e) => n(() => {}, t.item, e),
    u = Us(t),
    { data: d } = sc(k.InitFromAccountID(u, b.EUNIVERSE).GetAccountID());
  return (0, z.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, z.jsx)(tu, {
      logo: (0, z.jsx)(F, {}),
      icon: (0, z.jsx)(me, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: d?.m_strPlayerName,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Yu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Us(t),
    { data: s } = sc(o.responder_steamid),
    c =
      o.package_id > 0
        ? { packageid: o.package_id }
        : { bundleid: o.bundle_id },
    { data: l } = Ae(c),
    u = l ? `app/${l.appid}` : ``,
    d = `${b.STORE_BASE_URL}${u}`,
    f = () => n(() => window.location.assign(d), t.item),
    p = (e) => n(() => {}, t.item, e),
    m = !s || !l,
    h = j(`#SteamNotifications_RequestedGameAddedTitle`),
    g = l ? j(`#SteamNotifications_RequestedGameAddedBody`, l.name ?? ``) : ``;
  return (0, z.jsx)(`a`, {
    href: d,
    onMouseDown: p,
    children: (0, z.jsx)(au, {
      title: h,
      body: g,
      bDataLoading: m,
      logoUrl: s?.avatar_url_medium,
      icon: (0, z.jsx)(F, {}),
      onActivate: f,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Xu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = O(),
    s = Oe(),
    c = ss(t.item, o, s),
    l = Us(t),
    { data: u } = lt(l?.appid ? { appid: l.appid } : void 0),
    d = `${b.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, z.jsx)(`a`, {
    href: d,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(ru, {
      appName: u?.name,
      icon: (0, z.jsx)(He, {}),
      fallbackLogo: (0, z.jsx)(F, {}),
      onActivate: () => n(() => window.location.assign(d), t.item),
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      itemState: c,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Zu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = O(),
    s = `${b.COMMUNITY_BASE_URL}profiles/${o}/friends/pending`,
    c = () => n(() => window.location.assign(s), t.item),
    l = (e) => n(() => {}, t.item, e),
    u = Us(t),
    { data: d } = sc(u.requestorID);
  return (0, z.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, z.jsx)(nu, {
      fallbackLogo: (0, z.jsx)(De, {}),
      icon: (0, z.jsx)(et, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      data: u,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: d?.avatar_url_medium,
      requestorName: d?.m_strPlayerName,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Qu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Us(t),
    s = O(),
    c = b.COMMUNITY_BASE_URL + t.url,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => {
      n(() => {}, t.item, e);
    },
    { data: d } = sc(fs(o) ? o?.account_steam_id?.GetAccountID() : null),
    { data: f } = sc(ps(o) ? o?.owner_steam_id?.GetAccountID() : null),
    p = o.json_data?.app_id ? { appid: o.json_data?.app_id } : void 0,
    { data: m } = lt(p),
    [h, g] = zu(),
    _ = h ? g.FilterText(o.account_steam_id.GetAccountID(), o.title) : ``,
    ee = h ? g.FilterText(o.account_steam_id.GetAccountID(), o.comment) : ``;
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(ou, {
      fallbackLogo: (0, z.jsx)(F, {}),
      icon: (0, z.jsx)(Me, {}),
      onActivate: l,
      location: r,
      currentUserSteamID: s,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      postedByAvatarURL: d?.avatar_url_medium,
      postedByDisplayName: d?.m_strPlayerName,
      ownerDisplayName: f?.m_strPlayerName,
      bNewIndicator: V(t.item),
      appName: m?.name,
      onHide: a,
      commentTitle: _,
      commentBody: ee,
      bLoading: !h,
    }),
  });
}
function $u(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Us(t),
    { data: s } = lt({ appid: o.appid }),
    [c, l] = (0, I.useState)(``),
    u = O();
  return (
    (0, I.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return l(
          b.STORE_BASE_URL +
            `wishlist/profiles/${u}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return l(b.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      l(b.STORE_BASE_URL + `wishlist/profiles/${u}/${e}#sort=discount`);
    }, [o, s, u]),
    (0, z.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, z.jsx)(su, {
        fallbackLogo: (0, z.jsx)(F, {}),
        icon: (0, z.jsx)(nt, {}),
        onActivate: () => n(() => window.location.assign(c), t.item),
        location: r,
        data: o,
        timestamp: t.timestamp,
        nUnread: t.rgunread.length,
        eUIMode: i,
        bNewIndicator: V(t.item),
        onHide: a,
      }),
    })
  );
}
function ed(e) {
  let { url: t, count: n, icon: r, strBody: i, eFeature: a } = e,
    o = Yn(a);
  return !n || o
    ? null
    : (0, z.jsx)(`a`, {
        href: t,
        className: Ws,
        children: (0, z.jsx)(Bc, {
          icon: (0, z.jsx)(r, {}),
          count: n,
          onActivate: () => window.location.assign(t),
          strBody: i,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var td = { 3: Qu, 8: $u, 5: Zu, 4: Xu, 2: Ju, 9: Ku, 12: Uu, 22: Yu, 29: qu },
  nd = class e extends I.Component {
    static GetScrollableClassname() {
      return `vt-scrollable`;
    }
    m_observer = null;
    m_refElement = I.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || `once`) == `once`;
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(e) {
      this.UpdateObserver(e);
    }
    UpdateObserver(e) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        e &&
        (e.rootMargin != this.m_observer.rootMargin ||
          e.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let t = this.m_refElement.current;
      if (
        (this.m_observer &&
          t != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && t)
      ) {
        let e = { root: this.FindScrollableAncestor(t) };
        (this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
          this.props.thresholds && (e.threshold = this.props.thresholds),
          (this.m_observer = st(t, this.OnIntersection, e)));
      }
      this.m_observer &&
        t &&
        t != this.m_elTracked &&
        (this.m_observer.observe(t), (this.m_elTracked = t));
    }
    FindScrollableAncestor(t) {
      return c(t, (t) => {
        let n = this.props.horizontal
          ? window.getComputedStyle(t).overflowX
          : window.getComputedStyle(t).overflowY;
        return !!(
          n == `scroll` ||
          n == `auto` ||
          t.classList.contains(e.GetScrollableClassname())
        );
      });
    }
    HandleRef = (e) => {
      (ae(this.m_refElement, e),
        this.props.containerRef && ae(this.props.containerRef, e));
    };
    OnIntersection = (e) => {
      let t = !1;
      for (let n of e)
        if (n.isIntersecting) {
          t = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != t &&
        ((this.m_bPreviouslyIntersecting = t),
        this.props.onVisibilityChange && this.props.onVisibilityChange(t),
        t && this.BTriggerOnce() && this.DestroyObserver());
    };
    render() {
      let {
        onVisibilityChange: e,
        rootMargin: t,
        trigger: n,
        horizontal: r,
        containerRef: i,
        ...a
      } = this.props;
      return (0, z.jsx)(A, {
        ref: this.HandleRef,
        ...a,
        children: this.props.children,
      });
    }
  },
  $ = new ts(),
  rd = Ye(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !$.m_bLoaded && $.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = Oe();
    (0, I.useEffect)(() => {
      ($.setTransport(r), (window.RefreshSteamNotifications = () => hd(r)));
    }, [r]);
    let i = id();
    return t
      ? (0, z.jsxs)(z.Fragment, {
          children: [(0, z.jsx)(pd, {}), (0, z.jsx)(ld, {})],
        })
      : (0, z.jsx)(od, { nTotalUnviewed: i.nUnviewed });
  });
function id() {
  return it(() => ({
    notifications: $.m_rgNotificationRollups,
    summary: $.m_summary,
    loaded: $.m_bLoaded,
    nUnviewed: $.m_nUnviewed,
  }));
}
function ad() {
  let e = id(),
    { data: t } = Wn(O()),
    n = qn(),
    r = t?.settings;
  return e.notifications.filter((e) => !xs(e.type, r, n) && !Cs(e.item));
}
function od(e) {
  let { nTotalUnviewed: t } = e,
    n = I.useRef(null),
    r = ad(),
    [i, a] = I.useState(Is);
  I.useEffect(() => {
    n.current ||
      ((n.current = xe(
        (0, z.jsx)(sd, { popupRef: n }),
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
      window.setTimeout(() => a(null), 2e3));
  }, []);
  let o = () => {
      n.current?.visible ||
        (n.current?.Show(),
        r.findIndex((e) => !e.item.viewed) != -1 && $.MarkAllItemsViewed());
    },
    s = I.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, z.jsx)(nd, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, z.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: N(Ms, t ? Fs : Ps, i),
      children: (0, z.jsx)(Be, {
        className: Ns,
        "aria-label": j(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var sd = (e) => {
    let { popupRef: t } = e,
      n = I.useRef(null),
      [r, i] = I.useState(!1);
    I.useEffect(() => {
      i(n.current != null && n.current?.scrollHeight > n.current?.clientHeight);
    }, [n.current?.scrollHeight, r]);
    let a = r ? void 0 : Ds;
    return (0, z.jsxs)(`div`, {
      className: ws,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, z.jsx)(cd, {}),
        (0, z.jsxs)(`div`, {
          className: N(Es, a),
          ref: n,
          children: [
            (0, z.jsx)(pd, {}),
            (0, z.jsx)(dd, {}),
            (0, z.jsx)(md, {}),
          ],
        }),
      ],
    });
  },
  cd = () => {
    let e = `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/notifications`;
    return (0, z.jsxs)(`div`, {
      className: N(Os),
      children: [
        (0, z.jsx)(`div`, {
          className: As,
          children: j(`#NotificationsMenu_Title`),
        }),
        (0, z.jsx)(`a`, {
          href: e,
          children: (0, z.jsx)(`div`, {
            className: js,
            children: j(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  ld = () => {
    let e = `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/notifications`;
    return (0, z.jsx)(`div`, {
      className: N(Os, ks),
      children: (0, z.jsx)(`a`, {
        href: e,
        children: (0, z.jsx)(`div`, {
          className: js,
          children: j(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function ud(e, t, n) {
  (t.read ||
    (n && n.button != 0 && n.button != 1) ||
    !t.notification_id ||
    $.MarkItemRead(t.notification_id),
    e());
}
function dd() {
  let e = ad();
  return e.length == 0
    ? null
    : (0, z.jsx)(`div`, {
        className: Ts,
        children: e.map((e, t) =>
          (0, z.jsx)(
            Vu,
            { rollup: e, onNotificationClick: ud, uimode: 3, location: 3 },
            t,
          ),
        ),
      });
}
var fd = [
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: me,
    fnLocalizeBody: (e) => P(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: et,
    fnLocalizeBody: (e) => P(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: Me,
    fnLocalizeBody: (e) => P(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: He,
    fnLocalizeBody: (e) => P(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: Ke,
    fnLocalizeBody: (e) => P(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${d.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: be,
    fnLocalizeBody: (e) => P(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: ot,
    fnLocalizeBody: (e) => P(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${b.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: Qe,
    fnLocalizeBody: (e) =>
      P(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${b.STORE_BASE_URL}account/familymanagement/join?ft=${d.steamid}`,
    countItem: `family_invites`,
    icon: F,
    fnLocalizeBody: (e) => P(`#Notification_FamilyInvitePinned_Body`, e),
  },
];
function pd() {
  let e = id();
  return (0, z.jsx)(z.Fragment, {
    children: fd.map((t) =>
      (0, z.jsx)(
        ed,
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
function md() {
  return (0, z.jsxs)(`div`, {
    className: Ls,
    children: [
      (0, z.jsx)(`div`, {
        className: Rs,
        children: j(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, z.jsx)(`div`, {
        className: zs,
        children: j(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function hd(e) {
  let t = null;
  try {
    t = await rs(e, d.steamid, _(b.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && $.ProcessNewNotificationPayload(t);
}
export { rd as GreenEnvelope, rd as default, id as useSteamNotifications };

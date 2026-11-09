/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./rolldown-runtime.js";
import {
  $t as t,
  Cn as n,
  Ct as r,
  Dn as i,
  Dt as a,
  En as o,
  F as s,
  Ft as c,
  Hn as l,
  Ht as u,
  Ln as d,
  Lt as f,
  Nn as p,
  On as m,
  Ot as h,
  Pn as g,
  Qt as _,
  Rt as ee,
  Sn as v,
  Tn as y,
  Vt as b,
  bn as x,
  en as te,
  i as ne,
  in as re,
  it as ie,
  jt as S,
  kn as ae,
  mn as C,
  mt as w,
  pn as oe,
  pt as se,
  sn as ce,
  tn as le,
  un as ue,
  vn as T,
  wn as E,
  xn as D,
  z as de,
  zt as fe,
} from "./storenaveventcontext.js";
import {
  $ as pe,
  At as me,
  Bt as O,
  Ct as he,
  Dt as ge,
  Et as _e,
  Ft as k,
  G as ve,
  It as ye,
  J as be,
  Lt as xe,
  Mt as Se,
  Nt as Ce,
  Ot as we,
  Pt as Te,
  Q as Ee,
  Rt as De,
  St as Oe,
  Tt as ke,
  X as Ae,
  Y as je,
  Z as Me,
  _t as Ne,
  a as Pe,
  at as Fe,
  bt as Ie,
  c as Le,
  ct as Re,
  d as ze,
  dt as Be,
  et as Ve,
  f as He,
  ft as A,
  gt as Ue,
  ht as We,
  i as Ge,
  it as Ke,
  jt as j,
  kt as qe,
  l as Je,
  lt as M,
  mt as Ye,
  n as Xe,
  nt as N,
  o as Ze,
  ot as Qe,
  pt as P,
  q as $e,
  r as et,
  rt as tt,
  s as nt,
  st as F,
  t as rt,
  tt as it,
  u as at,
  ut as ot,
  vt as st,
  wt as ct,
  xt as lt,
  yt as ut,
  zt as dt,
} from "./main.js";
var I = e(l()),
  L = e(m(), 1),
  ft = new (class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(e) {
      this.m_transport != null &&
        console.error(
          `Multiple attempts to set a default WebUI transport: overriding previous`,
        ),
        (this.m_transport = e);
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(e) {
      this.m_registry != null &&
        console.error(
          `Multiple attempts to set a default WebUI message handler registry: overriding previous`,
        ),
        (this.m_registry = e);
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  })();
function R() {
  return ft;
}
var z = se(),
  pt = e(_e(), 1),
  mt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            clanid: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            link_url: { n: 3, br: n.readString, bw: i.writeString },
            link_text: { n: 4, br: n.readString, bw: i.writeString },
            blurb: { n: 5, br: n.readString, bw: i.writeString },
            time_recommended: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            comment_count: { n: 7, br: n.readInt32, bw: i.writeInt32 },
            upvote_count: { n: 8, br: n.readInt32, bw: i.writeInt32 },
            accountid_creator: { n: 9, br: n.readUint32, bw: i.writeUint32 },
            recommendation_state: { n: 10, br: n.readEnum, bw: i.writeEnum },
            received_compensation: { n: 11, br: n.readBool, bw: i.writeBool },
            received_for_free: { n: 12, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  ht = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.listid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [10, 12, 13, 14], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            listid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            title: { n: 2, br: n.readString, bw: i.writeString },
            blurb: { n: 3, br: n.readString, bw: i.writeString },
            link: { n: 4, br: n.readString, bw: i.writeString },
            list_state: { n: 5, br: n.readEnum, bw: i.writeEnum },
            sort_order: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            time_created: { n: 7, br: n.readUint32, bw: i.writeUint32 },
            time_updated: { n: 8, br: n.readUint32, bw: i.writeUint32 },
            accountid: { n: 9, br: n.readUint32, bw: i.writeUint32 },
            apps: { n: 10, c: gt, r: !0, q: !0 },
            list_type: { n: 11, br: n.readEnum, bw: i.writeEnum },
            title_localization: { n: 12, c: ue, r: !0, q: !0 },
            blurb_localization: { n: 13, c: ue, r: !0, q: !0 },
            link_localization: { n: 14, c: ue, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            list_jsondata: { n: 17, br: n.readString, bw: i.writeString },
            clan_account_id: { n: 18, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  gt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.recommended_app || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommended_app: { n: 1, c: mt },
            blurb: { n: 2, br: n.readString, bw: i.writeString },
            sort_order: { n: 3, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  _t = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            list_state: { n: 2, br: n.readEnum, bw: i.writeEnum },
            start: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            count: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            return_total_only: { n: 5, br: n.readBool, bw: i.writeBool },
            return_metadata_only: { n: 6, br: n.readBool, bw: i.writeBool },
            max_apps: { n: 7, br: n.readInt32, bw: i.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  vt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.list_details || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            list_details: { n: 1, c: ht, r: !0, q: !0 },
            total: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  yt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            listid: { n: 2, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  bt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.list_details || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: ht } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  xt;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`StoreCuration.GetLists#1`, t(_t, n, r), vt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetLists = n;
  function r(e, n, r) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, t(yt, n, r), bt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetListDetails = r;
})((xt ||= {}));
async function St(e) {
  return Et(
    `${S.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Ct(e) {
  let t = k.InitFromClanID(e, S.EUNIVERSE);
  return Et(
    `${S.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function wt(e) {
  return Et(
    `${S.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Tt(e) {
  return Et(
    `${S.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Et(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function Dt(e) {
  return [`clantoclaninfo`, e];
}
function Ot(e) {
  return [`apptoclanid`, e];
}
function kt(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function At(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var jt = new WeakSet();
function Mt(e) {
  if (!jt.has(e)) {
    jt.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var Nt = new WeakMap();
function Pt(e) {
  if (!e) return null;
  let t = Nt.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new k(e.clanSteamIDString)
          : k.InitFromClanID(e.clanAccountID, S.EUNIVERSE),
      }),
      Nt.set(e, t)),
    t
  );
}
function Ft(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function It(e, t) {
  if (!t) return null;
  Mt(e);
  let n = Ft(t);
  return (
    e.setQueryData(Dt(n.clanAccountID), n),
    n.appid && e.setQueryData(Ot(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(kt(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function Lt(e, t) {
  for (let n of t) It(e, n);
}
function Rt(e) {
  let t = we();
  return ge(zt(e, t));
}
function zt(e, t) {
  return (
    Mt(t),
    {
      queryKey: Dt(e ?? null),
      queryFn: async () => (e ? It(t, await Ct(e)) : null),
      enabled: e !== void 0,
      select: Pt,
    }
  );
}
function Bt(e, t) {
  return (
    Mt(t),
    {
      queryKey: Ot(e),
      queryFn: async () => It(t, await St(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function Vt(e, t, n = `group`) {
  return (
    Mt(t),
    {
      queryKey: kt(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(kt(e, `group`));
          if (n) return n;
        }
        return (
          It(t, n == `store` ? await Tt(e) : await wt(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Ht(e, t) {
  if (e) return Pt(t.getQueryData(Dt(e))) ?? void 0;
}
function Ut(e, t) {
  if (e) return Ht(t.getQueryData(Ot(e)), t);
}
function Wt(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = Ht(t.getQueryData(kt(e, n)), t);
    if (r) return r;
  }
}
async function Gt(e, t) {
  return e ? Pt(await t.fetchQuery(zt(e, t))) : null;
}
async function Kt(e, t) {
  return e ? Gt(await t.fetchQuery(Bt(e, t)), t) : null;
}
async function qt(e, t, n = `group`) {
  return e ? Gt(await t.fetchQuery(Vt(e, t, n)), t) : null;
}
var B = e(Ce());
function Jt(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${S.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${S.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
var Yt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            is_allowed: { n: 2, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalApp`;
    }
  },
  Xt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.allowed_time_windows || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            allowed_daily_minutes: {
              n: 2,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalPlaytimeDay`;
    }
  },
  Zt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apply_playtime_restrictions || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [15], null);
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
              br: n.readBool,
              bw: i.writeBool,
            },
            playtime_days: { n: 15, c: Xt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalPlaytimeRestrictions`;
    }
  },
  Qt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.restrictions || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            restrictions: { n: 1, c: Xt },
            rtime_expires: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalTemporaryPlaytimeRestrictions`;
    }
  },
  $t = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [4, 5, 17, 18, 19], null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            applist_base_id: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            applist_base_description: {
              n: 3,
              br: n.readString,
              bw: i.writeString,
            },
            applist_base: { n: 4, c: Yt, r: !0, q: !0 },
            applist_custom: { n: 5, c: Yt, r: !0, q: !0 },
            passwordhashtype: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            salt: { n: 7, br: n.readBytes, bw: i.writeBytes },
            passwordhash: { n: 8, br: n.readBytes, bw: i.writeBytes },
            is_enabled: { n: 9, br: n.readBool, bw: i.writeBool },
            enabled_features: { n: 10, br: n.readUint32, bw: i.writeUint32 },
            recovery_email: { n: 11, br: n.readString, bw: i.writeString },
            is_site_license_lock: { n: 12, br: n.readBool, bw: i.writeBool },
            temporary_enabled_features: {
              n: 13,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            rtime_temporary_feature_expiration: {
              n: 14,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            playtime_restrictions: { n: 15, c: Zt },
            temporary_playtime_restrictions: { n: 16, c: Qt },
            excluded_store_content_descriptors: {
              n: 17,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            excluded_community_content_descriptors: {
              n: 18,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            utility_appids: {
              n: 19,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalSettings`;
    }
  },
  en = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            family_groupid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            steamid: {
              n: 3,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            features: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            time_requested: { n: 5, br: n.readUint32, bw: i.writeUint32 },
            approved: { n: 6, br: n.readBool, bw: i.writeBool },
            steamid_responder: {
              n: 7,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            time_responded: { n: 8, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalFeatureRequest`;
    }
  },
  tn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            family_groupid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            steamid: {
              n: 3,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            current_playtime_restrictions: { n: 4, c: Xt },
            time_expires: { n: 5, br: n.readUint32, bw: i.writeUint32 },
            time_requested: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            approved: { n: 7, br: n.readBool, bw: i.writeBool },
            steamid_responder: {
              n: 8,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            time_responded: { n: 9, br: n.readUint32, bw: i.writeUint32 },
            restrictions_approved: { n: 10, c: Qt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalPlaytimeRequest`;
    }
  },
  nn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: n.readString, bw: i.writeString },
            settings: { n: 2, c: $t },
            sessionid: { n: 3, br: n.readString, bw: i.writeString },
            enablecode: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Request`;
    }
  },
  rn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Response`;
    }
  },
  an = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: n.readString, bw: i.writeString },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Request`;
    }
  },
  on = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Response`;
    }
  },
  sn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetParentalSettings_Request`;
    }
  },
  cn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.settings || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { settings: { n: 1, c: $t } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetParentalSettings_Response`;
    }
  },
  ln = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.priority || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { priority: { n: 1, br: n.readUint32, bw: i.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetSignedParentalSettings_Request`;
    }
  },
  un = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serialized_settings || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serialized_settings: { n: 1, br: n.readBytes, bw: i.writeBytes },
            signature: { n: 2, br: n.readBytes, bw: i.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetSignedParentalSettings_Response`;
    }
  },
  dn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: n.readString, bw: i.writeString },
            settings: { n: 2, c: $t },
            new_password: { n: 3, br: n.readString, bw: i.writeString },
            sessionid: { n: 4, br: n.readString, bw: i.writeString },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_SetParentalSettings_Request`;
    }
  },
  fn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_SetParentalSettings_Response`;
    }
  },
  pn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unlock_token || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unlock_token: { n: 1, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidateToken_Request`;
    }
  },
  mn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidateToken_Response`;
    }
  },
  hn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: n.readString, bw: i.writeString },
            session: { n: 2, br: n.readString, bw: i.writeString },
            send_unlock_on_success: { n: 3, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidatePassword_Request`;
    }
  },
  gn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.token || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidatePassword_Response`;
    }
  },
  _n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.session || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { session: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_LockClient_Request`;
    }
  },
  vn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_LockClient_Response`;
    }
  },
  yn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Request`;
    }
  },
  bn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Response`;
    }
  },
  xn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.features || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            features: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestFeatureAccess_Request`;
    }
  },
  Sn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestFeatureAccess_Response`;
    }
  },
  Cn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.approve || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            approve: { n: 1, br: n.readBool, bw: i.writeBool },
            requestid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            features: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            duration: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Request`;
    }
  },
  wn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Response`;
    }
  },
  Tn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.time_expires || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time_expires: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            current_playtime_restrictions: { n: 2, c: Xt },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestPlaytime_Request`;
    }
  },
  En = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestPlaytime_Response`;
    }
  },
  Dn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.approve || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            approve: { n: 1, br: n.readBool, bw: i.writeBool },
            requestid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            restrictions_approved: { n: 3, c: Qt },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Request`;
    }
  },
  On = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Response`;
    }
  },
  kn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rt_include_completed_since || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint32,
              bw: i.writeUint32,
            },
            family_groupid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetRequests_Request`;
    }
  },
  An = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.feature_requests || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            feature_requests: { n: 1, c: en, r: !0, q: !0 },
            playtime_requests: { n: 2, c: tn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetRequests_Response`;
    }
  },
  jn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.day_of_week || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            day_of_week: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            minutes_used: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            steamid: {
              n: 10,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Request`;
    }
  },
  Mn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Response`;
    }
  },
  Nn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serialized_settings || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serialized_settings: { n: 1, br: n.readBytes, bw: i.writeBytes },
            signature: { n: 2, br: n.readBytes, bw: i.writeBytes },
            password: { n: 3, br: n.readString, bw: i.writeString },
            sessionid: { n: 4, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ParentalSettingsChange_Notification`;
    }
  },
  Pn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: n.readString, bw: i.writeString },
            sessionid: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ParentalUnlock_Notification`;
    }
  },
  Fn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sessionid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sessionid: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ParentalLock_Notification`;
    }
  },
  In = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.day_of_week || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            day_of_week: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            minutes_used: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_PlaytimeUsed_Notification`;
    }
  },
  Ln;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`Parental.EnableParentalSettings#1`, t(nn, n, r), rn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnableParentalSettings = n;
  function r(e, n, r) {
    return e.SendMsg(`Parental.DisableParentalSettings#1`, t(an, n, r), on, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.DisableParentalSettings = r;
  function i(e, n, r) {
    return e.SendMsg(`Parental.GetParentalSettings#1`, t(sn, n, r), cn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetParentalSettings = i;
  function a(e, n, r) {
    return e.SendMsg(`Parental.GetSignedParentalSettings#1`, t(ln, n, r), un, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSignedParentalSettings = a;
  function o(e, n, r) {
    return e.SendMsg(`Parental.SetParentalSettings#1`, t(dn, n, r), fn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetParentalSettings = o;
  function s(e, n, r) {
    return e.SendMsg(`Parental.ValidateToken#1`, t(pn, n, r), mn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  e.ValidateToken = s;
  function c(e, n, r) {
    return e.SendMsg(`Parental.ValidatePassword#1`, t(hn, n, r), gn, {
      ePrivilege: 1,
    });
  }
  e.ValidatePassword = c;
  function l(e, n, r) {
    return e.SendMsg(`Parental.LockClient#1`, t(_n, n, r), vn, {
      ePrivilege: 1,
    });
  }
  e.LockClient = l;
  function u(e, n, r) {
    return e.SendMsg(`Parental.RequestRecoveryCode#1`, t(yn, n, r), bn, {
      ePrivilege: 1,
    });
  }
  e.RequestRecoveryCode = u;
  function d(e, n, r) {
    return e.SendMsg(`Parental.RequestFeatureAccess#1`, t(xn, n, r), Sn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.RequestFeatureAccess = d;
  function f(e, n, r) {
    return e.SendMsg(`Parental.ApproveFeatureAccess#1`, t(Cn, n, r), wn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ApproveFeatureAccess = f;
  function p(e, n, r) {
    return e.SendMsg(`Parental.RequestPlaytime#1`, t(Tn, n, r), En, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.RequestPlaytime = p;
  function m(e, n, r) {
    return e.SendMsg(`Parental.ApprovePlaytime#1`, t(Dn, n, r), On, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ApprovePlaytime = m;
  function h(e, n, r) {
    return e.SendMsg(`Parental.GetRequests#1`, t(kn, n, r), An, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetRequests = h;
  function g(e, n, r) {
    return e.SendMsg(`Parental.ReportPlaytimeAndNotify#1`, t(jn, n, r), Mn, {
      ePrivilege: 1,
    });
  }
  e.ReportPlaytimeAndNotify = g;
})((Ln ||= {}));
var Rn;
(function (e) {
  (e.NotifySettingsChangeHandler = {
    name: `ParentalClient.NotifySettingsChange#1`,
    request: Nn,
  }),
    (e.NotifyUnlockHandler = {
      name: `ParentalClient.NotifyUnlock#1`,
      request: Pn,
    }),
    (e.NotifyLockHandler = {
      name: `ParentalClient.NotifyLock#1`,
      request: Fn,
    }),
    (e.NotifyPlaytimeUsedHandler = {
      name: `ParentalClient.NotifyPlaytimeUsed#1`,
      request: In,
    });
})((Rn ||= {}));
function zn(e) {
  return [`parentalsettings`, e];
}
function Bn(e) {
  let t = e.applist_base.concat(e.applist_custom);
  return new Map(t.map((e) => [e.appid, e.is_allowed]));
}
async function Vn(e, t) {
  let n = _.Init(sn);
  n.Body().set_steamid(t);
  let r = await Ln.GetParentalSettings(e, n);
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
    { settings: i, mapAppsAllowed: Bn(i) }
  );
}
function Hn(e, t, n) {
  return {
    queryKey: zn(t),
    queryFn: () => Vn(e, t),
    placeholderData: { settings: void 0, mapAppsAllowed: void 0 },
    ...n,
  };
}
function Un(e) {
  let t = De();
  return ge(Hn(t, e));
}
function Wn(e, t) {
  return [`validateparentaltoken`, e, t];
}
function Gn() {
  let e = fe(`clientsessionid`),
    t = fe(`sessionid`);
  return e || t;
}
function Kn() {
  let e = De(),
    t = O(),
    n = fe(`steamparental`),
    r = Gn(),
    i = n,
    a = i?.split(`||`) || [];
  a.length == 2 && (i = a[1]);
  let o = i && i !== `0` ? r + `||` + i : void 0,
    s = ge({
      queryKey: Wn(t, o),
      queryFn: async () => {
        if (!o) return 15;
        let t = _.Init(pn);
        return (
          t.Body().set_unlock_token(o),
          (await Ln.ValidateToken(e, t)).GetEResult()
        );
      },
    });
  return !s.isSuccess || s.data !== 1;
}
function qn(e, t, n) {
  if (t == 0 || t == null) return !1;
  if (!e) return !0;
  if (!e.is_enabled || !n) return !1;
  if (t == 15) return !0;
  let r = e.enabled_features;
  return !r || !(r & (1 << t));
}
function Jn(e) {
  let { settings: t } = Un(O()).data ?? {};
  return qn(t, e, Kn());
}
function Yn(e) {
  return `unknown ESteamNotificationType ( ` + e + ` )`;
}
var Xn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            notification_targets: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            notification_type: { n: 3, br: n.readEnum, bw: i.writeEnum },
            body_data: { n: 4, br: n.readString, bw: i.writeString },
            read: { n: 7, br: n.readBool, bw: i.writeBool },
            timestamp: { n: 8, br: n.readUint32, bw: i.writeUint32 },
            hidden: { n: 9, br: n.readBool, bw: i.writeBool },
            expiry: { n: 10, br: n.readUint32, bw: i.writeUint32 },
            viewed: { n: 11, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationData`;
    }
  },
  Zn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_hidden || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_hidden: { n: 1, d: !1, br: n.readBool, bw: i.writeBool },
            language: { n: 2, d: 0, br: n.readInt32, bw: i.writeInt32 },
            include_confirmation_count: {
              n: 3,
              d: !0,
              br: n.readBool,
              bw: i.writeBool,
            },
            include_pinned_counts: {
              n: 4,
              d: !1,
              br: n.readBool,
              bw: i.writeBool,
            },
            include_read: { n: 5, d: !0, br: n.readBool, bw: i.writeBool },
            count_only: { n: 6, d: !1, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  Qn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notifications || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Xn, r: !0, q: !0 },
            confirmation_count: { n: 2, br: n.readInt32, bw: i.writeInt32 },
            pending_gift_count: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            pending_friend_count: { n: 5, br: n.readUint32, bw: i.writeUint32 },
            unread_count: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            pending_family_invite_count: {
              n: 7,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  $n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            notification_type: { n: 2, br: n.readEnum, bw: i.writeEnum },
            notification_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: i.writeRepeatedUint64String,
            },
            mark_all_read: { n: 4, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.remote_client_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            target_client_type: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            notification_targets: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationPreference`;
    }
  },
  nr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_ids || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
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
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: i.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notifications || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Xn, r: !0, q: !0 },
            pending_gift_count: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            pending_friend_count: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            pending_family_invite_count: {
              n: 4,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_PreferencesUpdated_Notification`;
    }
  },
  lr;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(
      `SteamNotification.GetSteamNotifications#1`,
      t(Zn, n, r),
      Qn,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetSteamNotifications = n;
  function r(e, n) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      t($n, n),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `help`, `community`] },
    );
  }
  e.MarkNotificationsRead = r;
  function i(e, n) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      t(er, n),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `help`, `community`] },
    );
  }
  e.MarkNotificationsViewed = i;
  function a(e, n) {
    return e.SendNotification(
      `SteamNotification.HideNotification#1`,
      t(or, n),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.HideNotification = a;
  function o(e, n, r) {
    return e.SendMsg(`SteamNotification.SetPreferences#1`, t(nr, n, r), rr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetPreferences = o;
  function s(e, n, r) {
    return e.SendMsg(`SteamNotification.GetPreferences#1`, t(ir, n, r), ar, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPreferences = s;
})((lr ||= {}));
var ur;
(function (e) {
  (e.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: sr,
  }),
    (e.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: cr,
    });
})((ur ||= {}));
var dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: n.readString, bw: i.writeString },
            value: { n: 2, br: n.readString, bw: i.writeString },
            color: { n: 3, br: n.readString, bw: i.writeString },
            label: { n: 4, br: n.readString, bw: i.writeString },
            name: { n: 5, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: n.readString, bw: i.writeString },
            name: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            category: { n: 2, br: n.readString, bw: i.writeString },
            internal_name: { n: 3, br: n.readString, bw: i.writeString },
            localized_category_name: {
              n: 4,
              br: n.readString,
              bw: i.writeString,
            },
            localized_tag_name: { n: 5, br: n.readString, bw: i.writeString },
            color: { n: 6, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contained_items || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: hr, r: !0, q: !0 },
            search_tags: { n: 2, c: pr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readInt32, bw: i.writeInt32 },
            classid: { n: 2, br: n.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            currency: { n: 4, br: n.readBool, bw: i.writeBool },
            background_color: { n: 5, br: n.readString, bw: i.writeString },
            icon_url: { n: 6, br: n.readString, bw: i.writeString },
            icon_url_large: { n: 7, br: n.readString, bw: i.writeString },
            descriptions: { n: 8, c: dr, r: !0, q: !0 },
            tradable: { n: 9, br: n.readBool, bw: i.writeBool },
            actions: { n: 10, c: fr, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: dr, r: !0, q: !0 },
            owner_actions: { n: 12, c: fr, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: n.readString,
              bw: i.writeRepeatedString,
            },
            name: { n: 14, br: n.readString, bw: i.writeString },
            name_color: { n: 15, br: n.readString, bw: i.writeString },
            type: { n: 16, br: n.readString, bw: i.writeString },
            market_name: { n: 17, br: n.readString, bw: i.writeString },
            market_hash_name: { n: 18, br: n.readString, bw: i.writeString },
            market_fee: { n: 19, br: n.readString, bw: i.writeString },
            market_fee_app: { n: 28, br: n.readInt32, bw: i.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: fr, r: !0, q: !0 },
            commodity: { n: 22, br: n.readBool, bw: i.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: n.readInt32,
              bw: i.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: n.readInt32,
              bw: i.writeInt32,
            },
            marketable: { n: 25, br: n.readBool, bw: i.writeBool },
            tags: { n: 26, c: pr, r: !0, q: !0 },
            item_expiration: { n: 27, br: n.readString, bw: i.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: n.readString,
              bw: i.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: n.readString,
              bw: i.writeString,
            },
            sealed: { n: 32, br: n.readBool, bw: i.writeBool },
            container_properties: { n: 33, c: mr },
            market_bucket_group_name: {
              n: 34,
              br: n.readString,
              bw: i.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: n.readString,
              bw: i.writeString,
            },
            sealed_type: { n: 37, br: n.readUint32, bw: i.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: n.readString,
              bw: i.writeString,
            },
            market_bucket_id: { n: 39, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  _r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.propertyid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            int_value: { n: 2, br: n.readInt64String, bw: i.writeInt64String },
            float_value: { n: 3, br: n.readFloat, bw: i.writeFloat },
            string_value: { n: 4, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            standalone_properties: { n: 3, c: _r, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: _r, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            contextid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            assetid: { n: 3, br: n.readUint64String, bw: i.writeUint64String },
            asset_properties: { n: 4, c: _r, r: !0, q: !0 },
            asset_accessories: { n: 5, c: vr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            name: { n: 2, br: n.readString, bw: i.writeString },
            type: { n: 3, br: n.readEnum, bw: i.writeEnum },
            float_min: { n: 4, br: n.readFloat, bw: i.writeFloat },
            float_max: { n: 5, br: n.readFloat, bw: i.writeFloat },
            int_min: { n: 6, br: n.readInt64String, bw: i.writeInt64String },
            int_max: { n: 7, br: n.readInt64String, bw: i.writeInt64String },
            localized_label: { n: 8, br: n.readString, bw: i.writeString },
            hide_from_description: { n: 9, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            language: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  Sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_schemas || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: br, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  Cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            contextid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            assetid: { n: 3, br: n.readUint64String, bw: i.writeUint64String },
            classid: { n: 4, br: n.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 5,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            currencyid: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            amount: { n: 7, br: n.readInt64String, bw: i.writeInt64String },
            missing: { n: 8, br: n.readBool, bw: i.writeBool },
            est_usd: { n: 9, br: n.readInt64String, bw: i.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            contextid: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            get_descriptions: { n: 4, br: n.readBool, bw: i.writeBool },
            get_asset_properties: { n: 11, br: n.readBool, bw: i.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: n.readBool,
              bw: i.writeBool,
            },
            language: { n: 5, br: n.readString, bw: i.writeString },
            filters: { n: 6, c: Tr },
            start_assetid: {
              n: 8,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            count: { n: 9, br: n.readInt32, bw: i.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  Tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assetids || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
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
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: i.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: n.readBool, bw: i.writeBool },
            marketable_only: { n: 4, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  Er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assets || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: Cr, r: !0, q: !0 },
            descriptions: { n: 2, c: gr, r: !0, q: !0 },
            missing_assets: { n: 3, c: Cr, r: !0, q: !0 },
            asset_properties: { n: 7, c: yr, r: !0, q: !0 },
            more_items: { n: 4, br: n.readBool, bw: i.writeBool },
            last_assetid: {
              n: 5,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  Dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.generate_new_token || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  Or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_offer_access_token || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readString,
              bw: i.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.return_url || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  Ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.url || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: n.readString, bw: i.writeString },
            appid: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            classes: { n: 3, c: hr, r: !0, q: !0 },
            high_pri: { n: 4, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  Mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.descriptions || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: gr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  Nr;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      t(wr, n, r),
      Er,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = n;
  function r(e, n, r) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, t(Dr, n, r), Or, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = r;
  function i(e, n, r) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      t(kr, n, r),
      Ar,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = i;
  function a(e, n, r) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, t(jr, n, r), Mr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = a;
  function o(e, n, r) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, t(xr, n, r), Sr, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = o;
})((Nr ||= {}));
var Pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: n.readString, bw: i.writeString },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Request`;
    }
  },
  Fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            cooldown_skip_granted: { n: 2, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Response`;
    }
  },
  Ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            send_running_apps: { n: 2, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Request`;
    }
  },
  Lr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            role: { n: 2, br: n.readEnum, bw: i.writeEnum },
            time_joined: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            cooldown_seconds_remaining: {
              n: 4,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupMember`;
    }
  },
  Rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            role: { n: 2, br: n.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupPendingInvite`;
    }
  },
  zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupFormerMember`;
    }
  },
  Br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: n.readString, bw: i.writeString },
            members: { n: 2, c: Lr, r: !0, q: !0 },
            pending_invites: { n: 3, c: Rr, r: !0, q: !0 },
            free_spots: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            country: { n: 5, br: n.readString, bw: i.writeString },
            slot_cooldown_remaining_seconds: {
              n: 6,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            former_members: { n: 7, c: zr, r: !0, q: !0 },
            slot_cooldown_overrides: {
              n: 8,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Response`;
    }
  },
  Vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            role: { n: 2, br: n.readEnum, bw: i.writeEnum },
            inviter_steamid: {
              n: 3,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            awaiting_2fa: { n: 4, br: n.readBool, bw: i.writeBool },
            invite_id: {
              n: 5,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupPendingInviteForUser`;
    }
  },
  Hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            include_family_group_response: {
              n: 2,
              br: n.readBool,
              bw: i.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Request`;
    }
  },
  Ur = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            rtime_joined: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            rtime_left: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            role: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            participated: { n: 5, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupMembership`;
    }
  },
  Wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [5, 10], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            is_not_member_of_any_group: {
              n: 2,
              br: n.readBool,
              bw: i.writeBool,
            },
            latest_time_joined: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            latest_joined_family_groupid: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            pending_group_invites: { n: 5, c: Vr, r: !0, q: !0 },
            role: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            cooldown_seconds_remaining: {
              n: 7,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            family_group: { n: 8, c: Br },
            can_undelete_last_joined_family: {
              n: 9,
              br: n.readBool,
              bw: i.writeBool,
            },
            membership_history: { n: 10, c: Ur, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Response`;
    }
  },
  Gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            name: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Request`;
    }
  },
  Kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Response`;
    }
  },
  qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            receiver_steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            receiver_role: { n: 3, br: n.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Request`;
    }
  },
  Jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invite_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            two_factor_method: { n: 2, br: n.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Response`;
    }
  },
  Yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            nonce: { n: 2, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Request`;
    }
  },
  Xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.two_factor_method || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            two_factor_method: { n: 2, br: n.readEnum, bw: i.writeEnum },
            cooldown_skip_granted: { n: 3, br: n.readBool, bw: i.writeBool },
            invite_already_accepted: { n: 4, br: n.readBool, bw: i.writeBool },
            cooldown_seconds_remaining: {
              n: 5,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Response`;
    }
  },
  Zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            steamid_to_remove: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Request`;
    }
  },
  Qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Response`;
    }
  },
  $r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            steamid_to_cancel: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Request`;
    }
  },
  ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Response`;
    }
  },
  ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Request`;
    }
  },
  ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Response`;
    }
  },
  ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            client_instance_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Request`;
    }
  },
  ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.users || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
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
              br: n.readFixed64String,
              pbr: n.readPackedFixed64String,
              bw: i.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Response`;
    }
  },
  ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            gidshoppingcart: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            store_country_code: { n: 3, br: n.readString, bw: i.writeString },
            use_account_cart: { n: 4, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Request`;
    }
  },
  oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            request_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Response`;
    }
  },
  si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            request_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: i.writeRepeatedUint64String,
            },
            rt_include_completed_since: {
              n: 4,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Request`;
    }
  },
  ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requester_steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            gidshoppingcart: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            time_requested: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            time_responded: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            responder_steamid: {
              n: 5,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            response_action: { n: 6, br: n.readEnum, bw: i.writeEnum },
            is_completed: { n: 7, br: n.readBool, bw: i.writeBool },
            request_id: {
              n: 8,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            requested_packageids: {
              n: 9,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            purchased_packageids: {
              n: 10,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            requested_bundleids: {
              n: 11,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            purchased_bundleids: {
              n: 12,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `PurchaseRequest`;
    }
  },
  li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: ci, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Response`;
    }
  },
  ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            action: { n: 3, br: n.readEnum, bw: i.writeEnum },
            request_id: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Request`;
    }
  },
  di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Response`;
    }
  },
  fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            running_apps: { n: 2, c: mi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification`;
    }
  },
  pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.member_steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            owner_steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember`;
    }
  },
  mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            playing_members: { n: 3, c: pi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp`;
    }
  },
  hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_InviteStatus_Notification`;
    }
  },
  gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_GroupChanged_Notification`;
    }
  },
  _i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Request`;
    }
  },
  vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.changes || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { changes: { n: 1, c: yi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response`;
    }
  },
  yi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            actor_steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            type: { n: 3, br: n.readEnum, bw: i.writeEnum },
            body: { n: 4, br: n.readString, bw: i.writeString },
            by_support: { n: 5, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response_Change`;
    }
  },
  bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            first_played: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            latest_played: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            seconds_played: { n: 5, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_PlaytimeEntry`;
    }
  },
  xi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Request`;
    }
  },
  Si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: bi, r: !0, q: !0 },
            entries_by_owner: { n: 2, c: bi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Response`;
    }
  },
  Ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            cooldown_count: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Request`;
    }
  },
  wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Response`;
    }
  },
  Ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            include_own: { n: 2, br: n.readBool, bw: i.writeBool },
            include_excluded: { n: 3, br: n.readBool, bw: i.writeBool },
            language: { n: 5, br: n.readString, bw: i.writeString },
            max_apps: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            include_non_games: { n: 7, br: n.readBool, bw: i.writeBool },
            steamid: {
              n: 8,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Request`;
    }
  },
  Ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: Di, r: !0, q: !0 },
            owner_steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response`;
    }
  },
  Di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2, 15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            owner_steamids: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readFixed64String,
              pbr: n.readPackedFixed64String,
              bw: i.writeRepeatedFixed64String,
            },
            name: { n: 6, br: n.readString, bw: i.writeString },
            sort_as: { n: 7, br: n.readString, bw: i.writeString },
            capsule_filename: { n: 8, br: n.readString, bw: i.writeString },
            img_icon_hash: { n: 9, br: n.readString, bw: i.writeString },
            exclude_reason: { n: 10, d: 0, br: n.readEnum, bw: i.writeEnum },
            rt_time_acquired: { n: 11, br: n.readUint32, bw: i.writeUint32 },
            rt_last_played: { n: 12, br: n.readUint32, bw: i.writeUint32 },
            rt_playtime: { n: 13, br: n.readUint32, bw: i.writeUint32 },
            app_type: { n: 14, d: 1, br: n.readEnum, bw: i.writeEnum },
            content_descriptors: {
              n: 15,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response_SharedApp`;
    }
  },
  Oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            nonce: { n: 3, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Request`;
    }
  },
  ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Response`;
    }
  },
  Ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            nonce: { n: 3, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Request`;
    }
  },
  ji = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Response`;
    }
  },
  Mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            steamid: { n: 2, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Request`;
    }
  },
  Ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Response`;
    }
  },
  Pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            appid: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            lender_steamid: {
              n: 3,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Request`;
    }
  },
  Fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Response`;
    }
  },
  Ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Request`;
    }
  },
  Li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.members || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { members: { n: 1, c: Ri, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response`;
    }
  },
  Ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            preferred_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response_FamilyMember`;
    }
  },
  zi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Request`;
    }
  },
  Bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Response`;
    }
  },
  Vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Request`;
    }
  },
  Hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Response`;
    }
  },
  Ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Request`;
    }
  },
  Wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wallet_country_matches || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            wallet_country_matches: { n: 1, br: n.readBool, bw: i.writeBool },
            ip_match: { n: 2, br: n.readBool, bw: i.writeBool },
            join_restriction: { n: 3, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Response`;
    }
  },
  Gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            invite_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Request`;
    }
  },
  Ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Response`;
    }
  },
  qi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            rtime32_target: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Request`;
    }
  },
  Ji = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Response`;
    }
  },
  Yi;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`FamilyGroups.CreateFamilyGroup#1`, t(Pr, n, r), Fr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.CreateFamilyGroup = n;
  function r(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroup#1`, t(Ir, n, r), Br, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetFamilyGroup = r;
  function i(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroupForUser#1`, t(Hr, n, r), Wr, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetFamilyGroupForUser = i;
  function a(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.ModifyFamilyGroupDetails#1`,
      t(Gr, n, r),
      Kr,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.ModifyFamilyGroupDetails = a;
  function o(e, n, r) {
    return e.SendMsg(`FamilyGroups.InviteToFamilyGroup#1`, t(qr, n, r), Jr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.InviteToFamilyGroup = o;
  function s(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.ConfirmInviteToFamilyGroup#1`,
      t(Oi, n, r),
      ki,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.ConfirmInviteToFamilyGroup = s;
  function c(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.ResendInvitationToFamilyGroup#1`,
      t(Mi, n, r),
      Ni,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.ResendInvitationToFamilyGroup = c;
  function l(e, n, r) {
    return e.SendMsg(`FamilyGroups.JoinFamilyGroup#1`, t(Yr, n, r), Xr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.JoinFamilyGroup = l;
  function u(e, n, r) {
    return e.SendMsg(`FamilyGroups.ConfirmJoinFamilyGroup#1`, t(Ai, n, r), ji, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.ConfirmJoinFamilyGroup = u;
  function d(e, n, r) {
    return e.SendMsg(`FamilyGroups.RemoveFromFamilyGroup#1`, t(Zr, n, r), Qr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.RemoveFromFamilyGroup = d;
  function f(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.CancelFamilyGroupInvite#1`,
      t($r, n, r),
      ei,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.CancelFamilyGroupInvite = f;
  function p(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetUsersSharingDevice#1`, t(ri, n, r), ii, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetUsersSharingDevice = p;
  function m(e, n, r) {
    return e.SendMsg(`FamilyGroups.DeleteFamilyGroup#1`, t(ti, n, r), ni, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.DeleteFamilyGroup = m;
  function h(e, n, r) {
    return e.SendMsg(`FamilyGroups.UndeleteFamilyGroup#1`, t(zi, n, r), Bi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.UndeleteFamilyGroup = h;
  function g(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetPlaytimeSummary#1`, t(xi, n, r), Si, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPlaytimeSummary = g;
  function _(e, n, r) {
    return e.SendMsg(`FamilyGroups.RequestPurchase#1`, t(ai, n, r), oi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.RequestPurchase = _;
  function ee(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetPurchaseRequests#1`, t(si, n, r), li, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPurchaseRequests = ee;
  function v(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.RespondToRequestedPurchase#1`,
      t(ui, n, r),
      di,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.RespondToRequestedPurchase = v;
  function y(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetChangeLog#1`, t(_i, n, r), vi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetChangeLog = y;
  function b(e, n, r) {
    return e.SendMsg(
      `FamilyGroups.SetFamilyCooldownOverrides#1`,
      t(Ci, n, r),
      wi,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetFamilyCooldownOverrides = b;
  function x(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetSharedLibraryApps#1`, t(Ti, n, r), Ei, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetSharedLibraryApps = x;
  function te(e, n, r) {
    return e.SendMsg(`FamilyGroups.SetPreferredLender#1`, t(Pi, n, r), Fi, {
      ePrivilege: 1,
    });
  }
  e.SetPreferredLender = te;
  function ne(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetPreferredLenders#1`, t(Ii, n, r), Li, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPreferredLenders = ne;
  function re(e, n, r) {
    return e.SendMsg(`FamilyGroups.ForceAcceptInvite#1`, t(Vi, n, r), Hi, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ForceAcceptInvite = re;
  function ie(e, n, r) {
    return e.SendMsg(`FamilyGroups.GetInviteCheckResults#1`, t(Ui, n, r), Wi, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetInviteCheckResults = ie;
  function S(e, n, r) {
    return e.SendMsg(`FamilyGroups.ClearCooldownSkip#1`, t(Gi, n, r), Ki, {
      ePrivilege: 5,
    });
  }
  e.ClearCooldownSkip = S;
  function ae(e, n, r) {
    return e.SendMsg(`FamilyGroups.RollbackFamilyGroup#1`, t(qi, n, r), Ji, {
      ePrivilege: 5,
    });
  }
  e.RollbackFamilyGroup = ae;
})((Yi ||= {}));
var Xi;
(function (e) {
  (e.NotifyRunningAppsHandler = {
    name: `FamilyGroupsClient.NotifyRunningApps#1`,
    request: fi,
  }),
    (e.NotifyInviteStatusHandler = {
      name: `FamilyGroupsClient.NotifyInviteStatus#1`,
      request: hi,
    }),
    (e.NotifyGroupChangedHandler = {
      name: `FamilyGroupsClient.NotifyGroupChanged#1`,
      request: gi,
    });
})((Xi ||= {}));
var Zi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid_giftee || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: n.readInt32, bw: i.writeInt32 },
            gift_message: { n: 2, c: Qi },
            time_scheduled_send: { n: 3, br: n.readInt32, bw: i.writeInt32 },
            email_giftee: { n: 4, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  Qi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gifteename || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: n.readString, bw: i.writeString },
            message: { n: 2, br: n.readString, bw: i.writeString },
            sentiment: { n: 3, br: n.readString, bw: i.writeString },
            signature: { n: 4, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  $i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_requester || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  ea = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  ta = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: n.readInt64String, bw: i.writeInt64String },
            currencycode: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  na = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            costwhenadded: { n: 2, c: ta },
            is_gift: { n: 3, br: n.readBool, bw: i.writeBool },
            gidbundle: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            quantity: { n: 5, br: n.readUint32, bw: i.writeUint32 },
            gift_info: { n: 6, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  ra = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.walletcredit || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: ta } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  ia = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            packageid: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            gidcoupon: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  aa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.microtxnappid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  oa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bundleid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            quantity: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            is_gift: { n: 3, br: n.readBool, bw: i.writeBool },
            gift_info: { n: 4, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  sa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reward_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: n.readInt32, bw: i.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  ca = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidparent || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  la = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            gidcoupon: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  ua = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidlineitem || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            package_item: { n: 2, c: na },
            wallet_credit_item: { n: 3, c: ra },
            coupon_item: { n: 4, c: ia },
            micro_item: { n: 5, c: aa },
            bundle_item: { n: 7, c: oa },
            loyalty_item: { n: 8, c: sa },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  da = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coupons || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: la, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  fa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  pa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.lineitems || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: ua, r: !0, q: !0 },
            treeview: { n: 2, c: ca, r: !0, q: !0 },
            potentials: { n: 3, c: da },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  ma = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            contents: { n: 2, c: pa },
            time_created: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            merged_into_account_cart: { n: 4, br: n.readBool, bw: i.writeBool },
            steamid_requester: {
              n: 5,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  ha = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [4], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            browserid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            cart_items: { n: 4, c: na, r: !0, q: !0 },
            store_country_code: { n: 5, br: n.readString, bw: i.writeString },
            beta_mode: { n: 6, d: !1, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  ga = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            contents: { n: 2, c: pa },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  _a = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            quantity: { n: 3, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  va = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            contents: { n: 2, c: pa },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  ya = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            bundleid: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            browserid: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            store_country: { n: 5, br: n.readString, bw: i.writeString },
            quantity: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            beta_mode: { n: 7, d: !1, br: n.readBool, bw: i.writeBool },
            gift_info: { n: 8, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  ba = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: pa },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  xa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            gift_info: { n: 3, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  Sa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: pa } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  Ca = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: i.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  wa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: pa },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  Ta;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, t($i, n, r), ea, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = n;
  function r(e, n, r) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      t(fa, n, r),
      ma,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetShoppingCartContents = r;
  function i(e, n, r) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, t(ha, n, r), ga, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = i;
  function a(e, n, r) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, t(_a, n, r), va, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = a;
  function o(e, n, r) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, t(ya, n, r), ba, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = o;
  function s(e, n, r) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, t(xa, n, r), Sa, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ModifyLineItem = s;
  function c(e, n, r) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, t(Ca, n, r), wa, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RemoveLineItems = c;
})((Ta ||= {})),
  I.createContext({ staleTimeMs: 1 / 0 }),
  (0, I.createContext)({ errorMessage: null, setErrorMessage: (e) => {} });
function Ea(e, t) {
  return `${b.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
}
var Da = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.data || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: Oa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `AdditionalSubjectData`;
    }
  },
  Oa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.key || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: n.readString, bw: i.writeString },
            value: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  ka = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            start: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            count: { n: 3, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  Aa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.report_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [23, 24], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            reporter_steamid: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            time_reported: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            report_reason: { n: 4, br: n.readEnum, bw: i.writeEnum },
            report_text: { n: 5, br: n.readString, bw: i.writeString },
            subject_type: { n: 6, br: n.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 7,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 8,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            resolved: { n: 9, br: n.readEnum, bw: i.writeEnum },
            time_resolved: { n: 10, br: n.readUint32, bw: i.writeUint32 },
            resolver_steamid: {
              n: 11,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            time_notified: { n: 12, br: n.readUint32, bw: i.writeUint32 },
            additional_subject_data: { n: 13, c: Da },
            time_disputed: { n: 14, br: n.readUint32, bw: i.writeUint32 },
            dispute_details: { n: 15, br: n.readString, bw: i.writeString },
            dispute_resolver_steamid: {
              n: 16,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            dispute_resolved: { n: 17, br: n.readEnum, bw: i.writeEnum },
            time_dispute_resolved: {
              n: 18,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            detected_by_automation: {
              n: 19,
              d: !1,
              br: n.readBool,
              bw: i.writeBool,
            },
            resolved_by_automation: {
              n: 20,
              d: 0,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            content_moderated_reason: {
              n: 21,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            dispute_resolved_reason: { n: 22, br: n.readEnum, bw: i.writeEnum },
            sanctions_applied: { n: 23, c: La, r: !0, q: !0 },
            sanctions_applied_on_dispute: { n: 24, c: La, r: !0, q: !0 },
            reported_content_id: {
              n: 25,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            coordinates: { n: 26, c: ho },
            reporter_is_support: { n: 27, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReport`;
    }
  },
  ja = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content_report || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_report: { n: 1, c: Aa, r: !0, q: !0 },
            total_count: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  Ma = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            subject_type: { n: 2, br: n.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            reported_content_id: {
              n: 5,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  Na = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content_report || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { content_report: { n: 1, c: Aa } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  Pa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  Fa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [13, 31, 32], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            owner_steam_id: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            language: { n: 5, br: n.readInt32, bw: i.writeInt32 },
            resolved: { n: 6, br: n.readEnum, bw: i.writeEnum },
            time_resolved: { n: 7, br: n.readUint32, bw: i.writeUint32 },
            unresolved_report_count: {
              n: 8,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_report_time: {
              n: 9,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            resolver_steamid: {
              n: 10,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            assigned_moderator_steamid: {
              n: 11,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            time_claimed_by_moderator: {
              n: 12,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            reports: { n: 13, c: Aa, r: !0, q: !0 },
            additional_subject_data: { n: 14, c: Da },
            csam_status: { n: 15, br: n.readEnum, bw: i.writeEnum },
            terrorism_status: { n: 16, br: n.readEnum, bw: i.writeEnum },
            content_moderated_reason: {
              n: 17,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            unresolved_dispute_count: {
              n: 18,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              n: 19,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            owner_dispute_time: { n: 24, br: n.readUint32, bw: i.writeUint32 },
            owner_dispute_resolved_time: {
              n: 25,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            owner_dispute_details: {
              n: 26,
              br: n.readString,
              bw: i.writeString,
            },
            required_moderator_level: {
              n: 27,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            resolved_by_automation: {
              n: 28,
              d: 0,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            detected_by_automation: {
              n: 29,
              d: !1,
              br: n.readBool,
              bw: i.writeBool,
            },
            credible_threat_of_violence_status: {
              n: 30,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            sanctions_applied: { n: 31, c: La, r: !0, q: !0 },
            sanctions_applied_after_dispute: { n: 32, c: La, r: !0, q: !0 },
            decision_reversed: { n: 33, br: n.readBool, bw: i.writeBool },
            reported_content_id: {
              n: 34,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            coordinates: { n: 35, c: ho },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubject`;
    }
  },
  Ia = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subject: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  La = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sanction || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: n.readEnum, bw: i.writeEnum },
            days: { n: 2, br: n.readInt32, bw: i.writeInt32 },
            escalate_to: { n: 3, br: n.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubjectSanction`;
    }
  },
  Ra = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  za = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.buckets || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            buckets: { n: 1, c: Ba, r: !0, q: !0 },
            pending_for_any_moderator: {
              n: 2,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            pending_for_supervisor: {
              n: 3,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            pending_for_valve: { n: 4, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  Ba = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            unresolved_count: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            oldest_unresolved: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            unclaimed_count: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            oldest_disputed: { n: 5, br: n.readUint32, bw: i.writeUint32 },
            disputed_count: { n: 6, br: n.readUint32, bw: i.writeUint32 },
            unclaimed_disputed_count: {
              n: 7,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            pending_for_any_moderator: {
              n: 8,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            pending_for_supervisor: {
              n: 9,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            pending_for_valve: { n: 10, br: n.readUint32, bw: i.writeUint32 },
            oldest_unresolved_for_any_moderator: {
              n: 11,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              n: 12,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            oldest_unresolved_for_valve: {
              n: 13,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            coordinates: { n: 14, c: ho },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  Va = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubjectKey`;
    }
  },
  Ha = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            rtime_cooldown_ends: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            acquit_unresolved_reports: {
              n: 3,
              br: n.readBool,
              bw: i.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  Ua = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  Wa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  Ga = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_cooldown_ends || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_cooldown_ends: { n: 1, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  Ka = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  qa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferred_level || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: n.readEnum, bw: i.writeEnum },
            enabled_subject_types: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readEnum,
              pbr: n.readPackedEnum,
              bw: i.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  Ja = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferred_level || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: n.readEnum, bw: i.writeEnum },
            enabled_subject_types: { n: 2, c: Ya },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  Ya = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_types || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
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
              br: n.readEnum,
              pbr: n.readPackedEnum,
              bw: i.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  Xa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  Za = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            rt_start: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  Qa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.activities || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { activities: { n: 1, c: $a, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  $a = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            timestamp: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            action: { n: 5, br: n.readEnum, bw: i.writeEnum },
            json_data: { n: 6, br: n.readString, bw: i.writeString },
            reported_content_id: {
              n: 7,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_start_date || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_start_date: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            rtime_end_date: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            subject_type: { n: 3, br: n.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  to = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stats || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 2, c: no, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  no = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_date || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            times_unresolved: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            times_resolved: { n: 3, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  ro = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            count: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: ao, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            subject_group_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  so = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total_reports || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_reports: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            total_acquitted_reports: {
              n: 2,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            reports_in_last_week: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            acquitted_reports_in_last_week: {
              n: 4,
              br: n.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            moderator_level: { n: 2, br: n.readEnum, bw: i.writeEnum },
            filters: { n: 3, c: ho, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  lo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  uo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects_to_release || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects_to_release: { n: 1, c: Va, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  ho = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: n.readEnum, bw: i.writeEnum },
            steamid: { n: 2, br: n.readUint64String, bw: i.writeUint64String },
            forum: { n: 3, br: n.readUint64String, bw: i.writeUint64String },
            topic: { n: 4, br: n.readUint64String, bw: i.writeUint64String },
            comment: { n: 5, br: n.readUint64String, bw: i.writeUint64String },
            comment_thread_id: {
              n: 6,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            sender_account_id: { n: 7, br: n.readUint32, bw: i.writeUint32 },
            chat_message_rtime: { n: 8, br: n.readUint32, bw: i.writeUint32 },
            chat_message_ordinal: { n: 9, br: n.readUint32, bw: i.writeUint32 },
            chat_group_id: {
              n: 10,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            chat_room_id: {
              n: 11,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            receiver_account_id: { n: 12, br: n.readUint32, bw: i.writeUint32 },
            published_file_id: {
              n: 13,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            ugc_content_type: { n: 14, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ReportedContentCoordinates`;
    }
  },
  go = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            include_reporter_account_status: {
              n: 2,
              br: n.readBool,
              bw: i.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  _o = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { subject: { n: 1, c: Fa } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  vo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coordinates || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { coordinates: { n: 1, c: ho } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  yo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  bo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            details: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  xo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  So = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  Co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: wo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  wo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            actor_steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            automated_action: { n: 3, br: n.readBool, bw: i.writeBool },
            action: { n: 4, br: n.readEnum, bw: i.writeEnum },
            additional_json_data: { n: 5, br: n.readString, bw: i.writeString },
            actor_is_support: { n: 6, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  To = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            report_id: {
              n: 2,
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            dispute_details: { n: 3, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  Eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  Do = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  Oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  ko = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            new_level: { n: 2, br: n.readEnum, bw: i.writeEnum },
            reason: { n: 3, br: n.readEnum, bw: i.writeEnum },
            note: { n: 4, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  Ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  jo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [9], null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            resolution: { n: 4, br: n.readEnum, bw: i.writeEnum },
            reason: { n: 2, br: n.readEnum, bw: i.writeEnum },
            note: { n: 3, br: n.readString, bw: i.writeString },
            resolved_by_automation: { n: 7, br: n.readEnum, bw: i.writeEnum },
            sanctions_applied: { n: 9, c: La, r: !0, q: !0 },
            skip_lock: { n: 10, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  Mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  No = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            csam_status: { n: 2, br: n.readEnum, bw: i.writeEnum },
            terrorism_status: { n: 3, br: n.readEnum, bw: i.writeEnum },
            credible_threat_of_violence_status: {
              n: 4,
              br: n.readEnum,
              bw: i.writeEnum,
            },
            additional_subject_data: { n: 5, c: Da },
            owner_dispute_details: {
              n: 6,
              br: n.readString,
              bw: i.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  Po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  Fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readUint64String,
              bw: i.writeUint64String,
            },
            action: { n: 2, br: n.readEnum, bw: i.writeEnum },
            automated_action: { n: 3, br: n.readBool, bw: i.writeBool },
            additional_json_data: { n: 4, br: n.readString, bw: i.writeString },
            actor_steamid: {
              n: 5,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  Io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  Lo;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`ContentModeration.ClaimBatch#1`, t(co, n, r), lo, {
      ePrivilege: 5,
    });
  }
  e.ClaimBatch = n;
  function r(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetClaimedSubjects#1`,
      t(uo, n, r),
      fo,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetClaimedSubjects = r;
  function i(e, n, r) {
    return e.SendMsg(`ContentModeration.ReleaseSubjects#1`, t(po, n, r), mo, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ReleaseSubjects = i;
  function a(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      t(ka, n, r),
      ja,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetReportsSubmittedByUser = a;
  function o(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      t(Ma, n, r),
      Na,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetOneReportSubmittedByUser = o;
  function s(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      t(Pa, n, r),
      Ia,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetReportedSubjectsByOwner = s;
  function c(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetSubjectOverview#1`,
      t(Ra, n, r),
      za,
      { ePrivilege: 5 },
    );
  }
  e.GetSubjectOverview = c;
  function l(e, n, r) {
    return e.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      t(Ha, n, r),
      Ua,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateReporterCooldown = l;
  function u(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReporterCooldown#1`,
      t(Wa, n, r),
      Ga,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReporterCooldown = u;
  function d(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      t(Ka, n, r),
      qa,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetModeratorPreferences = d;
  function f(e, n, r) {
    return e.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      t(Ja, n, r),
      Xa,
      { ePrivilege: 5 },
    );
  }
  e.SetModeratorPreferences = f;
  function p(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      t(Za, n, r),
      Qa,
      { ePrivilege: 5 },
    );
  }
  e.GetModeratorActivity = p;
  function m(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      t(eo, n, r),
      to,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetDailyModerationStatistics = m;
  function h(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      t(ro, n, r),
      io,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetOldestUnresolvedSubjects = h;
  function g(e, n, r) {
    return e.SendMsg(`ContentModeration.GetReporterStats#1`, t(oo, n, r), so, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReporterStats = g;
  function _(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      t(go, n, r),
      _o,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContentByID = _;
  function ee(e, n, r) {
    return e.SendMsg(
      `ContentModeration.GetReportedContent#1`,
      t(vo, n, r),
      yo,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContent = ee;
  function v(e, n, r) {
    return e.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      t(bo, n, r),
      xo,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.OwnerDisputeModeration = v;
  function y(e, n, r) {
    return e.SendMsg(`ContentModeration.GetAuditLogByID#1`, t(So, n, r), Co, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAuditLogByID = y;
  function b(e, n, r) {
    return e.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      t(To, n, r),
      Eo,
      { ePrivilege: 1 },
    );
  }
  e.ReporterDisputeModeration = b;
  function x(e, n, r) {
    return e.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      t(Do, n, r),
      Oo,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SustainModerationByID = x;
  function te(e, n, r) {
    return e.SendMsg(
      `ContentModeration.EscalateSubjectByID#1`,
      t(ko, n, r),
      Ao,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.EscalateSubjectByID = te;
  function ne(e, n, r) {
    return e.SendMsg(`ContentModeration.ResolveByID#1`, t(jo, n, r), Mo, {
      ePrivilege: 5,
    });
  }
  e.ResolveByID = ne;
  function re(e, n, r) {
    return e.SendMsg(`ContentModeration.UpdateSubjectByID#1`, t(No, n, r), Po, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateSubjectByID = re;
  function ie(e, n, r) {
    return e.SendMsg(
      `ContentModeration.WriteToAuditLogByID#1`,
      t(Fo, n, r),
      Io,
      { ePrivilege: 5 },
    );
  }
  e.WriteToAuditLogByID = ie;
})((Lo ||= {}));
function Ro(e) {
  let t = e?.reported_content_id
    ? e.reported_content_id
    : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
  return `${b.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
}
var zo = {
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
      a() && e.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : e.body,
    image: (e) => e.image,
    link: (e) =>
      a() && e.link.includes(`https://store.steampowered.com`)
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
    link: (e) => Ro(e),
  },
};
function Bo(e) {
  if (e !== void 0) return zo[e];
}
function Vo(e) {
  return !!Bo(e);
}
var Ho = {
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
    url: (e) => Ea(e.familyid, e.request_id),
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
function Uo(e) {
  if (e !== void 0) return Ho[e];
}
function Wo(e) {
  return !!Uo(e);
}
var Go = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function Ko(e) {
  return Go.findIndex((t) => t == e) != null;
}
function qo(e) {
  return !e.hidden && Jo(e.notification_type) && fs(e.body_data);
}
function Jo(e) {
  return Vo(e) || Wo(e) || Ko(e);
}
var Yo = new de(`SteamNotificationStore`),
  Xo = Yo.Debug,
  Zo = Yo.Error,
  Qo = Yo.Warning,
  $o = class {
    constructor() {
      me(this);
    }
    m_rgNotificationRollups = [];
    m_summary = es();
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
      (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
    }
    NotifyServerNotificationsRead(e) {
      this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(e) {
      this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
    }
    BSendToCallbackAsNew(e) {
      return (
        !e.read &&
        !xs(e) &&
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
        let e = _.Init($n);
        e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          lr.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = _.Init(or);
        e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          lr.HideNotification(this.m_transport, e) &&
            (this.m_rgNotifyServerHidden = []);
      }
    }
    MarkItemRead(e, t = !1) {
      let n = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (n === -1) {
        t
          ? this.NotifyServerNotificationsRead([e])
          : Zo(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let r = this.m_rgNotificationRollups[n];
      if (r.item.read)
        Zo(`Attempted to mark notification read that is already read`);
      else if (((r.item.read = !0), r.rgunread?.length > 0)) {
        this.ReduceNewTotals(r.type, r.rgunread.length);
        let e = [];
        r.rgunread.forEach((t) => {
          e.push(t);
        }),
          r.rgread.push(...r.rgunread),
          (r.rgunread = []),
          this.NotifyServerNotificationsRead(e);
      }
    }
    MarkItemHidden(e) {
      let t = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (t === -1) {
        Zo(
          `Attempted to mark notification hidden that is not in the notification store`,
        );
        return;
      }
      let n = this.m_rgNotificationRollups[t];
      (n.item.hidden = !0),
        n.rgunread?.length > 0 &&
          this.ReduceNewTotals(n.type, n.rgunread?.length),
        this.NotifyServerNotificationsHidden([...n.rgunread, ...n.rgread]);
    }
    ReduceNewTotals(e, t) {
      bs(this.m_summary, e, -t);
    }
    MarkAllItemsViewed() {
      let e = _.Init(er);
      e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        lr.MarkNotificationsViewed(this.m_transport, e),
        (this.m_nUnviewed = 0);
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
          ((this.m_summary = Object.assign(es(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          n.forEach((e) => {
            let t = r[e];
            (t.item.read = !0), (t.rgunread = []);
          }),
          this.NotifyServerNotificationsRead(t)),
        t.length + 0
      );
    }
    ApplyNotificationsUpdate(e) {
      if (
        (Xo(`ApplyNotificationsUpdate`, e),
        !e ||
          (!e.notifications?.length &&
            e.pending_friend_count === void 0 &&
            e.pending_gift_count === void 0))
      ) {
        Xo(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        Xo(
          `Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set`,
        );
        return;
      }
      let t = this.m_currentNotificationsData;
      e.notifications?.forEach((e) => {
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
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(e) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
        this.ProcessNotifications();
    }
    ProcessNotifications() {
      let e = [],
        t = es(),
        n = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((r) => {
          this.BExcludeClientTargetedNotification(r) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (e) => e == r.notification_id,
              ) !== -1 &&
              (r.hidden = !0),
            qo(r) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (e) => e == r.notification_id,
                ) !== -1 &&
                (r.read = !0),
              r.read || bs(t, r.notification_type, 1),
              r.viewed || n++,
              this.AddNotificationToRollups(e, r)));
        }),
        e.sort((e, t) => e.timestamp - t.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let t of e)
          if (t.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(
              t.rollup_key,
              JSON.parse(JSON.stringify(t)),
            ),
              this.m_fnOnNotificationCallback(t, 0);
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
      e.reverse(),
        (t.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (t.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (t.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = e.slice()),
        (this.m_summary = t),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = n);
    }
    BExcludeClientTargetedNotification(e) {
      let t = fs(e.body_data);
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
            let i = ps(t);
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
                url: os(i),
              });
            else {
              let r = e[o];
              this.BReplaceRollupItem(t, r.item) &&
                ((r.url = os(i)),
                (r.item = t),
                (r.timestamp = t.timestamp),
                (r.bSendToCallbackAsNew = n)),
                (r.rollup_count += 1),
                t.read
                  ? r.rgread.push(t.notification_id)
                  : r.rgunread.push(t.notification_id);
            }
          }
          break;
        case 4:
          let i = ps(t);
          if (i) {
            let a = `item_` + i.appid;
            this.AddNotificationToRollupByAppID(e, t, a, r, n, i.appid);
          }
          break;
        case 12:
          let a = ps(t)?.appid.toString();
          if (a) {
            let i = `asyncgame_` + a;
            this.AddNotificationToRollupByAppID(e, t, i, r, n, a);
          }
          break;
        case 30:
          let o = ps(t),
            s = o?.report_id,
            c = Ro(o),
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
            this.BReplaceRollupItem(t, r.item) &&
              ((r.url = c),
              (r.item = t),
              (r.timestamp = t.timestamp),
              (r.bSendToCallbackAsNew = n)),
              (r.rollup_count += 1),
              t.read
                ? r.rgread.push(t.notification_id)
                : r.rgunread.push(t.notification_id);
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
        this.BReplaceRollupItem(t, n.item) &&
          ((n.item = t),
          (n.timestamp = t.timestamp),
          (n.bSendToCallbackAsNew = i)),
          (n.rollup_count += 1),
          t.read
            ? n.rgread.push(t.notification_id)
            : n.rgunread.push(t.notification_id);
      }
    }
  };
w([j], $o.prototype, `m_rgNotificationRollups`, void 0),
  w([j], $o.prototype, `m_summary`, void 0),
  w([j], $o.prototype, `m_bLoaded`, void 0),
  w([j], $o.prototype, `m_nUnviewed`, void 0),
  w([qe], $o.prototype, `ProcessNotifications`, null);
function es() {
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
async function ts(e, t, n, r, i, a = !0, o = !1) {
  if (!t) throw Error(`Invalid steamid for GetSteamNotifications`);
  let s = _.Init(Zn);
  s.Body().set_language(n),
    s.Body().set_include_read(a),
    s.Body().set_include_pinned_counts(!0),
    s.Body().set_include_confirmation_count(o);
  let c = await lr.GetSteamNotifications(e, s);
  if (c.GetEResult() !== 1)
    throw (
      (Qo(
        `Received error from GetSteamNotifications. Result ${c.GetEResult()}. Transport ${c.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${c.GetEResult()}`))
    );
  let l = c.Body().toObject();
  return (
    r &&
      (l.notifications = l.notifications?.filter(
        (e) => !ys(e.notification_type, r, i),
      )),
    l
  );
}
async function ns(e, t) {
  if (!e || !e.steamid || !e.contextid || !e.appid || !e.assetid)
    return Zo(`Item notification missing required attributes`), null;
  let n = _.Init(wr);
  n.Body().set_steamid(e.steamid),
    n.Body().set_contextid(e.contextid),
    n.Body().set_appid(parseInt(e.appid)),
    n.Body().set_get_descriptions(!0),
    n.Body().set_language(b.LANGUAGE);
  let r = new Tr();
  r.add_assetids(e.assetid), n.Body().set_filters(r);
  let i = await Nr.GetInventoryItemsWithDescriptions(t, n);
  return i.GetEResult() === 1
    ? (i.Body().toObject().descriptions[0] ?? null)
    : (Zo(`Request for steam item metadata did not succeed`, i.GetEResult()),
      null);
}
var rs = `ItemMetadata`;
function is(e) {
  return [`${rs}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
function as(e, t, n) {
  let r = hs(4, e.body_data);
  r.steamid = t;
  let i = ge({
    queryKey: is(r),
    queryFn: async () => ns(r, n),
    staleTime: 1 / 0,
  });
  return i.isSuccess ? i.data : null;
}
function os(e) {
  let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
  return e.last_post > 0 && (t += `&tscn=` + (e.last_post - 1)), t;
}
function ss(e) {
  return e.comment_type == 10;
}
function cs(e) {
  return e?.bhas_friend;
}
function ls(e) {
  return e.comment_type == 10;
}
function us(e) {
  return ss(e) || cs(e);
}
function ds(e) {
  return ls(e);
}
function fs(e) {
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    Xo(`Steam notification in invalid format:`, e);
  }
  return null;
}
function ps(e) {
  return hs(e.notification_type, e.body_data);
}
function ms(e) {
  return hs(e.type, e.item?.body_data);
}
function hs(e, t) {
  let n = fs(t);
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
        ? (Xo(`Async game notification invalid data`, t), null)
        : { appid: parseInt(n.appid), state: parseInt(n.state) };
    case 3:
      let r = {
        owner_steam_id: n.owner_steam_id ? new k(n.owner_steam_id) : null,
        bclan_account: gs(n.bclan_account),
        title: n.title,
        comment: n.text,
        time: n.last_post,
        comment_type: Number(n.type),
        topic_id: n.topic_id,
        forum_id: n.forum_id,
        account_steam_id: n.account_id
          ? k.InitFromAccountID(n.account_id, b.EUNIVERSE)
          : null,
        bhas_friend: gs(n.bhas_friend),
        bis_forum: gs(n.bis_forum),
        last_post: n.last_post,
        bsubscribed: gs(n.subscribed),
        bis_owner: gs(n.bis_owner),
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
        Xo(
          `GetCustomNotificationDataByType called with unexpected type:` + e,
          t,
        ),
        null
      );
  }
}
function gs(e) {
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
  return Xo(`notification contained unexpected boolean value`), !1;
}
var _s = {
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
function vs(e) {
  let t = _s[e];
  return T(!!t, `Missing notification type data for ${e}`), t;
}
function ys(e, t, n) {
  return t ? qn(t, vs(e)?.eFeature ?? 15, n) : !1;
}
function bs(e, t, n) {
  Se(() => {
    let r = vs(t);
    r?.rollup_field && (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + n));
  });
}
function V(e) {
  return !e.viewed || e.viewed + 600 > Ie();
}
function xs(e) {
  return e.viewed && e.viewed + 172800 < Ie();
}
var Ss = `wiJqXTPU468-`,
  Cs = `hioRg1nXJCQ-`,
  ws = `_0aFiUekNE6I-`,
  Ts = `_6CRZVgXX8WU-`,
  Es = `-RS5MjpS9jg-`,
  Ds = `VCr0rtJhkqE-`,
  Os = `_251Yq-pwxUA-`,
  ks = `L0aJl-TTCO0-`,
  As = `jw00MnpI46s-`,
  js = `yV0P89CB4mg-`,
  Ms = `d2UeLuiq6xY-`,
  Ns = `EJrQKVkzhjk-`,
  Ps = `M7XVUF5aHZw-`,
  Fs = `GDByqt7FPpw-`,
  Is = `wDxGI9lKYwM-`,
  Ls = `bhbnhf7x6FA-`;
function Rs(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? A(t, ...n) : t;
}
function zs(e, t) {
  return I.useMemo(() => {
    if (e === void 0) return null;
    let n = Bo(e),
      r = fs(t);
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
      display_name: Rs(i),
      title: Rs(a),
      body: Rs(o),
      image: s,
      link: c,
    };
  }, [t, e]);
}
function Bs(e, t) {
  return I.useMemo(() => {
    let n = Uo(e),
      r = fs(t);
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
function Vs(e) {
  return I.useMemo(() => (Ko(e.type) ? ms(e) : null), [e]);
}
var Hs = `xKH6brPrFV4-`,
  Us = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`,
  Ws = `https://steamloopback.host/clientassets/avatars/`;
function Gs(e, t, n = `auto`) {
  let r = `.jpg`;
  (e && e !== `0000000000000000000000000000000000000000`) || (e = Us),
    e.length == 44 && ((r = e.substr(-4)), (e = e.substr(0, 40)));
  let i = n == `client` || (n == `auto` && b.IN_STEAMUI),
    a = b.AVATAR_BASE_URL;
  return (
    i
      ? ((a = Ws), (e = e.toLowerCase()))
      : a ||
        ((a = b.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
        (a += e.substr(0, 2) + `/`)),
    (a += e),
    t && t != `small` && (a += `_` + t),
    (a += r),
    a
  );
}
var Ks = `061818254b2c99ac49e6626adb128ed1282a392f`,
  qs = class {
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
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, Ks);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, Ks);
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
        : Gs(t, `small`, `web`);
    }
    DeserializeFromMessage(e) {
      (this.m_bInitialized = !0),
        (this.m_strName = e.name()),
        (this.m_strIconURL = e.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = e.app_type());
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
        (this.m_strName = e.strName),
          (this.m_strIconURL = e.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
          (this.m_eAppType = e.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        T(
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
  },
  Js = class {
    m_nLastUpdated = 0;
    m_mapLanguages = j.map();
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
    Localize(e, t) {
      let n = b.LANGUAGE;
      return Ys(
        e,
        this.GetTokenList(n),
        n == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        t,
      );
    }
    SubstituteParams(e, t) {
      let n = b.LANGUAGE;
      return Xs(
        e,
        this.GetTokenList(n),
        n == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        t,
      );
    }
  };
function Ys(e, t, n, r, i) {
  if (!e.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, e, `appid`, r, `tokens`, t), ``
    );
  let a = e;
  e = e.toLowerCase();
  let o = ``;
  if (
    (t && t.has(e) && (o = t.get(e)), !o && n && n.has(e) && (o = n.get(e)), o)
  )
    o = Xs(o, t, n, r, i);
  else if (
    ((t || n) &&
      console.log(`No loc found for appid`, r, a, `Tokens:`, t, `Fallback:`, n),
    t && b.EUNIVERSE != 1)
  )
    return e;
  return o;
}
function Xs(e, t, n, r, i) {
  let a = e.match(/{[A-za-z0-9_%#:]+}/g);
  if (a)
    for (let o of a) {
      let a = Ys(Zs(o.slice(1, -1), i), t, n, r, i);
      if (!a) return ``;
      e = e.replace(o, a);
    }
  return (e = Zs(e, i)), e;
}
function Zs(e, t) {
  let n = e.match(/%[A-Za-z0-9_:]+%/g);
  if (n)
    for (let r of n) {
      let n = r.slice(1, -1).toLowerCase(),
        i = t.get(n);
      i == null
        ? console.log(`No rich presence found for`, n)
        : (e = e.replace(r, i));
    }
  return e;
}
var Qs = 1209600,
  $s = class {
    m_CMInterface;
    m_mapAppInfo = j.map();
    m_mapRichPresenceLoc = j.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new oe();
    constructor() {
      me(this);
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
        : (T(
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
        (T(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(e))
      ) {
        let t = new qs(e);
        this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
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
      (this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(t),
        e?.();
    }
    async LoadAppInfoBatch(e) {
      this.m_cAppInfoRequestsInFlight++;
      let t = await this.LoadAppInfoBatchFromLocalCache(e);
      if (t.length) {
        console.log(`Loading batch of App Info from Steam: `, t),
          await this.m_CMInterface?.WaitUntilLoggedOn();
        let e = _.Init(Le);
        for (e.Body().set_language(d(b.LANGUAGE)); t.length > 0; ) {
          let n = Math.min(50, t.length),
            r = t.slice(0, n);
          (t = t.slice(n)), e.Body().set_appids(r);
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
        T(e, `Got AppInfo response for unrequested AppID: ${n.appid()}`),
          e &&
            ((e = new qs(n.appid())),
            e.DeserializeFromMessage(n),
            this.m_mapAppInfo.set(n.appid(), e),
            t.push(e));
      }
      this.SaveAppInfoBatchToLocalCache(t);
    }
    OnAppOverviewChange(e) {
      for (let t of e) {
        let e = new qs(t.appid());
        e.DeserializeFromAppOverview(t),
          e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
      }
    }
    async EnsureAppInfoForAppIDs(e) {
      let t = !1;
      return (
        e.forEach((e) => {
          let n = this.m_mapAppInfo.get(e);
          n
            ? n.is_valid || (t = !0)
            : ((n = new qs(e)),
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
      let t = new Date(new Date().getTime() - Qs * 1e3),
        n = async (e) => {
          let n = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(e),
          );
          if (!n) return e;
          let r = this.m_mapAppInfo.get(e);
          return (
            T(
              r,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            r
              ? ((r = new qs(e)),
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
      let t = new Js(e);
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
              let t = _.Init(nt);
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
w([qe], $s.prototype, `OnGetAppsResponse`, null),
  w([qe], $s.prototype, `OnRichPresenceLocUpdate`, null);
var ec = new $s(),
  H = class {
    m_steamid;
    m_bInitialized = !1;
    m_ePersonaState = 0;
    m_unGamePlayedAppID = 0;
    m_gameid = `0`;
    m_unPersonaStateFlags = 0;
    m_strPlayerName = ``;
    m_strAvatarHash = Us;
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
    m_mapRichPresence = j.map();
    m_bNameInitialized = !1;
    m_bStatusInitialized = !1;
    m_strProfileURL = void 0;
    constructor(e) {
      me(this), (this.m_steamid = e);
    }
    Reset() {
      (this.m_ePersonaState = 0),
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
        (this.m_eGamingDeviceType = 0);
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
          ? ec.GetAppInfo(this.m_unGamePlayedAppID).name
          : ``;
    }
    GetCurrentGameIconURL() {
      return this.m_unGamePlayedAppID
        ? ec.GetAppInfo(this.m_unGamePlayedAppID).icon_url
        : ``;
    }
    BIsAppInfoReady() {
      return (
        !this.m_unGamePlayedAppID ||
        ec.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
        let e = ec.GetRichPresenceLoc(this.m_unGamePlayedAppID);
        if (e) {
          let t = this.m_mapRichPresence.get(`steam_display`);
          return e.Localize(t, this.m_mapRichPresence);
        }
      } else if (this.HasStateFlag(8))
        return A(`#PersonaStateRemotePlayTogether`);
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
        n = ec.CMInterface.GetServerRTime32() - this.last_seen_online;
      return (t *= n > 86400 ? e : n > 2 * e ? 60 : 15), t;
    }
    GetOfflineStatusTime() {
      if (this.last_seen_online == 0) return A(`#PersonaStateOffline`);
      let e = this.GetOfflineStatusUpdateRate();
      (!b.IN_MOBILE || e <= 60) && st(e);
      let t = ec.CMInterface.GetServerRTime32() - this.last_seen_online;
      return t < 60
        ? A(`#PersonaStateLastSeen_JustNow`)
        : A(`#PersonaStateLastSeen`, Ne(t));
    }
    GetLocalizedOnlineStatus() {
      switch (this.m_ePersonaState) {
        case 0:
        case 7:
          return this.GetOfflineStatusTime();
        case 1:
          return A(`#PersonaStateOnline`);
        case 2:
          return A(`#PersonaStateBusy`);
        case 3:
          return A(`#PersonaStateAway`);
        case 4:
          return A(`#PersonaStateSnooze`);
        case 5:
          return A(`#PersonaStateLookingToTrade`);
        case 6:
          return A(`#PersonaStateLookingToPlay`);
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
      return this.m_strAvatarHash != Us;
    }
    get avatar_url() {
      return Gs(this.m_strAvatarHash);
    }
    get avatar_url_medium() {
      return Gs(this.m_strAvatarHash, `medium`);
    }
    get avatar_url_full() {
      return Gs(this.m_strAvatarHash, `full`);
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
w([j], H.prototype, `m_bInitialized`, void 0),
  w([j], H.prototype, `m_ePersonaState`, void 0),
  w([j], H.prototype, `m_unGamePlayedAppID`, void 0),
  w([j], H.prototype, `m_gameid`, void 0),
  w([j], H.prototype, `m_unPersonaStateFlags`, void 0),
  w([j], H.prototype, `m_strPlayerName`, void 0),
  w([j], H.prototype, `m_strAvatarHash`, void 0),
  w([j], H.prototype, `m_strAccountName`, void 0),
  w([j], H.prototype, `m_rtLastSeenOnline`, void 0),
  w([j], H.prototype, `m_strGameExtraInfo`, void 0),
  w([j], H.prototype, `m_unGameServerIP`, void 0),
  w([j], H.prototype, `m_unGameServerPort`, void 0),
  w([j], H.prototype, `m_game_lobby_id`, void 0),
  w([j], H.prototype, `m_bPlayerNamePending`, void 0),
  w([j], H.prototype, `m_bAvatarPending`, void 0),
  w([j], H.prototype, `m_broadcastId`, void 0),
  w([j], H.prototype, `m_broadcastAccountId`, void 0),
  w([j], H.prototype, `m_broadcastAppId`, void 0),
  w([j], H.prototype, `m_broadcastViewerCount`, void 0),
  w([j], H.prototype, `m_strBroadcastTitle`, void 0),
  w([j], H.prototype, `m_bCommunityBanned`, void 0),
  w([j], H.prototype, `m_eGamingDeviceType`, void 0),
  w([j], H.prototype, `m_bNameInitialized`, void 0);
function tc(e, t) {
  return new pt.default(
    async (t) => {
      let n = [...t],
        r = await Ze.GetPlayerLinkDetails(e, { steamids: n }),
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
function nc(e) {
  let t = De(),
    n = I.useContext(rc);
  return ge(ic(n, t, e));
}
var rc = I.createContext({
  loadPersonaState: async (e, t) => {
    if (e == null) return null;
    let n = await oc(t).load(
      k.InitFromAccountID(e, b.EUNIVERSE).ConvertTo64BitString(),
    );
    return sc(k.InitFromAccountID(e, b.EUNIVERSE), n);
  },
});
function ic(e, t, n) {
  let r = typeof n == `string` ? new k(n).GetAccountID() : n;
  return {
    queryKey: [`PlayerSummary`, r],
    queryFn: () => e.loadPersonaState(r, t),
    enabled: !!r,
  };
}
var ac;
function oc(e) {
  return (ac ??= tc(e));
}
function sc(e, t) {
  let n = new H(e),
    r = t?.public_data,
    i = t?.private_data;
  return (
    (n.m_bInitialized = !!t),
    (n.m_ePersonaState = i?.persona_state ?? 0),
    (n.m_strAvatarHash = r?.sha_digest_avatar ? te(r.sha_digest_avatar) : Us),
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
var cc = `TGHZjszXouA-`,
  lc = `_6e5Lw2oBEA8-`,
  uc = `WRvk-2z-S7U-`,
  dc = `nvOZwARKtWQ-`,
  fc = `XA47jRZ-kl4-`,
  pc = `_5TOP1rhjK9g-`,
  mc = `cfYT-RvHPnk-`,
  hc = `X7vR4UwyQ10-`,
  gc = `YhW9H-T-Hto-`,
  _c = `uxNRiRH0W-8-`,
  vc = `ts49d7c2wyQ-`,
  yc = `_4wHdhfSncuQ-`,
  bc = `_3GiOMfMgSIk-`,
  xc = `rnSSdvjnnIY-`,
  Sc = `PqHuV1F7Sv8-`,
  Cc = `YR06jcjcqq0-`,
  wc = `N-3dV6EGIb0-`,
  Tc = `_8dzP2cjjs8I-`,
  Ec = `_78CF9aUvUeY-`,
  Dc = `iq-v-asRRbU-`,
  Oc = `BIeyjH0P840-`,
  kc = `rreXhb5OR24-`,
  Ac = `ohF5M-dbfvU-`,
  jc = `FSYcqMA13Ys-`,
  Mc = `oFu8pAhMtAE-`,
  Nc = `dNwwI424aTg-`;
function Pc(e) {
  let { onActivate: t, icon: n, body: r, eUIMode: i, classNames: a } = e,
    o = t,
    s = dc;
  return (
    i == 7 ? (s = wc) : i == 3 && (s = Cc),
    (s = F(s, a)),
    (0, z.jsx)(M, {
      className: s,
      onActivate: o,
      children: (0, z.jsx)(`div`, {
        className: pc,
        children: (0, z.jsxs)(`div`, {
          className: yc,
          children: [(0, z.jsx)(`span`, { className: hc, children: n }), r],
        }),
      }),
    })
  );
}
function Fc(e) {
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
    : (0, z.jsx)(Pc, {
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
  I.useEffect(() => {
    s == 1 && !i ? c(2) : s == 2 && i && c(1);
  }, [s, i]),
    I.useEffect(() => {
      let e = window.setTimeout(() => c(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    I.useEffect(() => {
      t && t > 0 && l !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? u(Ec)
        : !t && l == `_78CF9aUvUeY-` && u(Tc);
    }, [t, n, l]);
  let d = e.onActivate;
  (d ||= () => console.log(`Missing activate function`)),
    s == 1 && (d = void 0);
  let f = uc;
  n == 4 ? (f = bc) : n == 2 ? (f = Sc) : (r == 7 || r == 3) && (f = xc);
  let p = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? kc : null;
    p = (0, z.jsxs)(`div`, {
      className: F(Oc, e),
      children: [
        (0, z.jsx)(`div`, { className: F(fc, Ac) }),
        (0, z.jsxs)(`div`, {
          className: pc,
          children: [
            (0, z.jsx)(`div`, { className: F(mc, Mc) }),
            (0, z.jsx)(`div`, { className: F(Dc, jc) }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsxs)(M, {
    onActivate: d,
    className: cc,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, z.jsxs)(`div`, {
        className: F(f, l),
        children: [
          (0, z.jsx)(`div`, { className: fc, children: e.logo }),
          e.personaStatus &&
            (0, z.jsx)(`div`, {
              className: F(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, z.jsx)(`div`, { className: pc, children: e.children }),
          p,
          o && (0, z.jsx)(Ic, { location: n }),
        ],
      }),
      a || null,
    ],
  });
}
function Ic(e) {
  let { location: t } = e;
  return t == 3
    ? (0, z.jsx)(`div`, { className: Nc, children: (0, z.jsx)(Ae, {}) })
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
    (s = i == 4 ? zc : (a ?? Bc)),
    (0, z.jsxs)(`div`, {
      className: mc,
      children: [
        (0, z.jsx)(Lc, { icon: t }),
        !!n && (0, z.jsx)(Rc, { title: n }),
        o && s({ timestamp: r }),
      ],
    })
  );
}
function Lc(e) {
  return (0, z.jsxs)(z.Fragment, {
    children: [
      !!e.icon &&
        (0, z.jsx)(`div`, { className: `X7vR4UwyQ10-`, children: e.icon }),
      ` `,
    ],
  });
}
function Rc(e) {
  return (0, z.jsx)(`div`, { className: gc, children: e.title });
}
function G(e) {
  let t = F(_c, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function K(e) {
  let t = F(vc, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function zc(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = We(e.timestamp);
  return (
    lt(t, n) || (r = Ue(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, z.jsx)(`div`, { className: lc, children: r })
  );
}
function Bc(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = lt(t, n) ? We(e.timestamp) : Ue(e.timestamp, !1, !1, !1);
  return (0, z.jsx)(`div`, { className: lc, children: r });
}
function q(e) {
  return e == 1;
}
function Vc(e, t) {
  return I.useCallback(
    (n) => {
      e && e(n), t && t();
    },
    [e, t],
  );
}
var Hc = `vjeKRorxqWY-`,
  Uc = `UWjdKshdhD8-`,
  Wc = `RZ1644uUH-k-`,
  Gc = `_5LTIC-a3DVw-`,
  Kc = `BXKoUPp7c7k-`,
  qc = `kg8VJS07NZk-`,
  Jc = `_8zZun04K77E-`,
  Yc = `rK6Z0uFfmRo-`;
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
    p = Vc(t, n);
  return (
    d &&
      f &&
      (o = Ye(
        f,
        (0, z.jsx)(`span`, { className: Jc, children: o }),
        (0, z.jsx)(`span`, { className: Yc, children: d }),
      )),
    (0, z.jsxs)(M, {
      className: F(qc, !l && !d && `_5OrWG-2Mx14-`, c),
      onActivate: p,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, z.jsx)(`div`, { className: Kc, children: r }),
        e.personaStatus &&
          (0, z.jsx)(`div`, { className: F(`f0Hsd0awDV4-`, s) }),
        (0, z.jsxs)(`div`, {
          className: F(Hc, u && `Dcsg7SLpVF8-`),
          children: [
            (0, z.jsxs)(`div`, {
              className: Uc,
              children: [
                !!i &&
                  (0, z.jsx)(`div`, { className: `q9vQBNOskjU-`, children: i }),
                (0, z.jsx)(`div`, { className: Wc, children: a }),
              ],
            }),
            (0, z.jsx)(`div`, {
              className: F(Gc, !!d && `Mx1dwYBxHfo-`),
              children: o,
            }),
          ],
        }),
      ],
    })
  );
}
var Xc = `wtEvuR05t3A-`,
  Zc = `JxEGxPRLYiU-`,
  Qc = `QEIVNNUa9hM-`,
  $c = `GYEm-fQU5e0-`,
  el = `jkcoKzEvvVE-`,
  tl = `Z-UOt0JU-rA-`,
  nl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            clan_steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            relation: { n: 3, br: n.readEnum, bw: i.writeEnum },
            linkname: { n: 4, br: n.readString, bw: i.writeString },
            json: { n: 5, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  rl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  il = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            link: { n: 2, c: nl },
            remove: { n: 3, d: !1, br: n.readBool, bw: i.writeBool },
            update_json_only: { n: 4, d: !1, br: n.readBool, bw: i.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: n.readBool,
              bw: i.writeBool,
            },
            partner_id: { n: 6, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  al = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  ol = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: i.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  sl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.links || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: nl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  cl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_ids || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
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
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  ll = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: rl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  ul = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_id || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            listid: { n: 2, br: n.readUint64String, bw: i.writeUint64String },
            ignore_dlc: { n: 3, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  dl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: fl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  fl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            sort_order: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  pl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.partnerid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: n.readUint32, bw: i.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  ml = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: hl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  hl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readString,
              bw: i.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  gl;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, t(il, n, r), al, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = n;
  function r(e, n, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, t(ol, n, r), sl, {
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
      t(cl, n, r),
      ll,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.GetDevPageAllAppsLinked = i;
  function a(e, n, r) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, t(ul, n, r), dl, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageListApps = a;
  function o(e, n, r) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, t(pl, n, r), ml, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = o;
})((gl ||= {}));
var _l = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            accept: { n: 2, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  vl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  yl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.image || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: n.readString, bw: i.writeString },
            language: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            from_body: { n: 3, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  bl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            appid: { n: 4, br: n.readUint32, bw: i.writeUint32 },
            event_type: { n: 5, br: n.readEnum, bw: i.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: n.readString,
              bw: i.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: n.readUint32, bw: i.writeUint32 },
            rtime32_end_time: { n: 8, br: n.readUint32, bw: i.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: n.readUint32,
              bw: i.writeUint32,
            },
            event_name: { n: 11, br: n.readString, bw: i.writeString },
            subtitle: { n: 12, br: n.readString, bw: i.writeString },
            summary: { n: 13, br: n.readString, bw: i.writeString },
            capsule_image: { n: 14, c: yl },
            store_path: { n: 15, br: n.readString, bw: i.writeString },
            rtime32_post_time: { n: 20, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  xl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            events: { n: 2, c: Sl, r: !0, q: !0 },
            language: { n: 3, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  Sl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  Cl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.summaries || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: bl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  wl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  Tl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.snippets || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: El, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  El = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: n.readFixed64String, bw: i.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            hidden: { n: 3, br: n.readBool, bw: i.writeBool },
            published: { n: 4, br: n.readBool, bw: i.writeBool },
            rtime32_start_time: { n: 5, br: n.readUint32, bw: i.writeUint32 },
            event_name: { n: 6, br: n.readString, bw: i.writeString },
            event_type: { n: 7, br: n.readEnum, bw: i.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  Dl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: Ol, r: !0, q: !0 },
            cursor: { n: 2, br: n.readString, bw: i.writeString },
            count: { n: 3, d: 100, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  Ol = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            start_build_id: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            end_build_id: { n: 3, br: n.readUint32, bw: i.writeUint32 },
            branch: { n: 4, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  kl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.matches || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: Al, r: !0, q: !0 },
            num_total_results: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            next_cursor: { n: 3, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  Al = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: i.writeUint32 },
            build_id: { n: 2, br: n.readUint32, bw: i.writeUint32 },
            branch: { n: 3, br: n.readString, bw: i.writeString },
            clan_event_gid: {
              n: 4,
              br: n.readFixed64String,
              bw: i.writeFixed64String,
            },
            clan_account_id: { n: 5, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  jl;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, t(_l, n, r), vl, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = n;
  function r(e, n, r) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, t(xl, n, r), Cl, {
      ePrivilege: 2,
      rgBrowserAPISites: [`store`, `community`, `partner`],
    });
  }
  e.GetPartnerEventSummaries = r;
  function i(e, n, r) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      t(wl, n, r),
      Tl,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = i;
  function a(e, n, r) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, t(Dl, n, r), kl, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = a;
})((jl ||= {}));
var Ml = class {
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
    me(this), (this.m_clanSteamID = e);
  }
  Initialize(e) {
    (this.m_strName = e.name || ``),
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
      (this.m_bIsLoaded = !0);
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
    r & 1 && i.push(1),
      r & 8 && i.push(8),
      r & 2 && i.push(2),
      r & 4 && i.push(4),
      r & 16 && i.push(16),
      r & 32 && i.push(32),
      r & 64 && i.push(64),
      r & 128 && i.push(128),
      r & 256 && i.push(256);
    let a = new FormData();
    a.append(`sessionid`, c()),
      a.append(`clan_account_id`, this.GetClanAccountID().toString()),
      a.append(`accountflags`, JSON.stringify(i));
    let o = await B.default.post(n, a);
    o &&
      o.status == 200 &&
      o.data.success == 1 &&
      (this.m_clanAccountFlags = r);
  }
};
w([j], Ml.prototype, `m_appidList`, void 0),
  w([j], Ml.prototype, `m_nFollowers`, void 0),
  w([j], Ml.prototype, `m_clanAccountFlags`, void 0);
var Nl = class e {
  constructor() {
    me(this);
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
            r = new Ml(k.InitFromClanID(n, b.EUNIVERSE));
          r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r);
        });
      let n = f(`creatorhomeforapp`, `application_config`);
      this.ValidateStoreDefaultAppList(n) &&
        n.forEach((e) => {
          e.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(e.appid) ||
              this.m_mapAppToCreatorIDList.set(e.appid, []),
            this.m_mapAppToCreatorIDList.get(e.appid).push(e));
        }),
        (this.m_bLoadedFromConfig = !0);
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let e = f(`loyalty_webapi_token`, `application_config`),
        t = ye(new Te(b.WEBAPI_BASE_URL, e || void 0));
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
      let t = new Ml(e);
      (t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
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
    return e.Initialize(i.data), e;
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
        Se(() => {
          o.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new Ml(k.InitFromClanID(e.creator_clan_id, b.EUNIVERSE));
              t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t);
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
w([j], Nl.prototype, `m_mapClanToCreatorHome`, void 0),
  w([j], Nl.prototype, `m_mapAppToCreatorIDList`, void 0),
  w([qe], Nl.prototype, `LazyInit`, null);
var Pl = new Nl();
Be(`g_CreatorHomeStore`, Pl);
var Fl = new WeakSet();
function Il(e = ut) {
  if (typeof window > `u` || typeof document > `u` || Fl.has(e)) return;
  let t = ee(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (Fl.add(e), Ll(t) && Lt(e, t));
}
function Ll(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function Rl(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function zl(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var Bl = new (class {
  m_queryClient = ut;
  m_boxCacheVersion = j.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    Il(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            At(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        }));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        (this.m_bBumpScheduled = !1),
          Se(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          );
      }));
  }
  ReadCache() {
    return this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient;
  }
  AddGroupVanities(e) {
    this.LazyInit(), Ll(e) && Lt(this.m_queryClient, e);
  }
  BHasClanInfoLoaded(e) {
    return (
      T(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      T(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!Ht(zl(e), this.ReadCache());
  }
  RegisterClanData(e) {
    this.LazyInit(), Lt(this.m_queryClient, e);
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = Rl(e)),
      T(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : Kt(e, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return this.LazyInit(), qt(e, this.m_queryClient, `store`);
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return this.LazyInit(), qt(e, this.m_queryClient, `group`);
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return this.LazyInit(), Gt(zl(e), this.m_queryClient);
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? Wt(e, t) : Ut(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = Ut(Rl(e), this.ReadCache());
    return t ? k.InitFromClanID(t.clanAccountID, b.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return Ut(Rl(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return Ht(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return Ut(Rl(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      T(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      Ht(zl(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = Pl.GetCreatorHome(e);
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
Be(`g_ClanStore`, Bl);
function Vl() {
  let e = we();
  return Il(e), e;
}
function Hl(e) {
  Vl();
  let { data: t, isPending: n } = Rt(e ? zl(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function Ul(e) {
  switch (e) {
    case 6:
      return (0, z.jsx)(Ke, {});
    case 11:
      return (0, z.jsx)(tt, {});
    default:
      return (0, z.jsx)(N, {});
  }
}
function Wl(e) {
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
    { data: u } = ct(l),
    { data: d } = Oe(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = q(r),
    g = l && (!u || !d),
    [_, ee] = I.useState(!1),
    v = () => ee(!0),
    y = null;
  if (c) y = eu(d, t, h);
  else {
    let e = h ? Qc : Xc;
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
function Gl(e) {
  let {
      displayName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = q(n),
    c = A(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? A(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : A(`#SteamNotifications_TradeOffer_Body`),
    u = A(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
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
var Kl = (e) => {
  let {
      location: t,
      icon: n,
      timestamp: r,
      fnRenderTimestamp: i,
      onHide: a,
    } = e,
    o = q(t),
    s = A(`#SteamNotifications_TradeReversal_Title`),
    c = A(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = A(`#SteamNotifications_TradeReversal_Description`);
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
function ql(e) {
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
      ? A(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : A(`#Notification_GiftReceived_Body`),
    l = t ? A(`#Notification_GiftReceived_Description`, t) : null,
    u = A(`#Notification_GiftReceived_Title`),
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
function Jl(e) {
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
    ? (d = A(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = A(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = A(`#SteamNotifications_FriendInvite_Description`));
  let [f, p] = I.useState(!1),
    m = () => p(!0),
    h = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? Qc : Xc;
    h = (0, z.jsxs)(M, {
      style: { position: `relative` },
      children: [
        e && (0, z.jsx)(Ee, { className: `A9KSdbG38mc-` }),
        (0, z.jsx)(`img`, { className: t, src: n, onError: m }),
      ],
    });
  }
  let g = t || A(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !t;
  return u
    ? (0, z.jsx)(J, {
        ...e,
        logo: h,
        icon: e.icon,
        title: A(`#Notification_FriendInvite_Title`),
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
              title: A(`#Notification_FriendInvite_Title`),
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
function Yl(e) {
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
      r = m ? Qc : Xc;
    h = (0, z.jsx)(M, {
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
      ? A(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? A(`#Notification_Item_RollupMore_GameName`, e, s)
        : A(`#Notification_Item_RollupMore`, e);
  } else s && (_ = g ? s : A(`#Notification_Item_Single_GameName`, s));
  let ee = t?.name ? t.name : A(`#Notification_Item_Body_Generic`),
    v = !t;
  if (m) {
    let t = ``;
    return (
      (t = s
        ? A(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : A(`#Notification_Item_Body_Generic`)),
      (0, z.jsx)(J, {
        ...e,
        logo: h,
        icon: e.icon,
        title: A(`#Notification_ItemAnnouncement_Body`),
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
          title: A(`#Notification_ItemAnnouncement_TitleLong`),
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
function Xl(e) {
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
    { data: u } = ct(l),
    { data: d } = Oe(l),
    f = eu(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? A(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : A(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? A(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : A(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, z.jsx)(J, {
          ...e,
          logo: f,
          icon: e.icon,
          title: A(`#SteamNotification_AsyncGame_Title`),
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
                title: A(`#SteamNotification_AsyncGame_Title`),
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
function Zl(e) {
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
    p = f ? Qc : Xc,
    m = (0, z.jsx)(M, {
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
function Ql(e) {
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
    [b, x] = Hl(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    te = ss(o) ? r : null,
    ne = ls(o) ? a : null;
  o.comment_type == 10
    ? (g =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && te
            ? A(`#SteamNotifications_Comment_Your_Profile_By`, te)
            : A(`#SteamNotifications_Comment_Your_Profile`)
          : ne
            ? s == 4 && te
              ? A(`#SteamNotifications_Comment_Player_Profile_By`, te, ne)
              : A(`#SteamNotifications_Comment_Player_Profile`, ne)
            : A(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (g =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? f
              ? A(`#SteamNotifications_Comment_Your_Screenshot_Game`, f)
              : A(`#SteamNotifications_Comment_Your_Screenshot`)
            : f
              ? A(`#SteamNotifications_Comment_Screenshot_Game`, f)
              : A(`#SteamNotifications_Comment_Screenshot`))
      : !g && o.json_data?.title && (g = o.json_data.title);
  let re = null;
  o.brate_limited
    ? (g =
        o.comment_type == 7 && o.bis_forum && h
          ? A(`#SteamNotifications_Comment_RateLimited_Forum`, h)
          : A(`#SteamNotifications_Comment_RateLimited`))
    : (re =
        o.comment_type == 7 && o.bis_forum && h
          ? (0, z.jsx)(K, {
              children: A(`#SteamNotifications_Comment_NewDiscussion`, h),
            })
          : (0, z.jsxs)(K, { children: [`"`, h, `"`] }));
  let ie = A(`#SteamNotifications_Comment`),
    S = null;
  if (d !== void 0 && d > 1) {
    let e = `+` + (d - 1);
    s == 4
      ? (S = (0, z.jsx)(`div`, { className: $c, children: e }))
      : (ie = ie + ` ` + e);
  }
  let ae = n;
  if (!ee) {
    let e = _ ? Qc : Xc;
    if (i && cs(o)) {
      let t = o.bhas_friend && s != 1;
      ae = (0, z.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, z.jsx)(Ee, { className: `A9KSdbG38mc-` }),
          (0, z.jsx)(`img`, { className: e, src: i, onError: y }),
        ],
      });
    } else
      x?.avatar_medium_url &&
        (ae = (0, z.jsx)(`img`, {
          className: e,
          src: x.avatar_medium_url,
          onError: y,
        }));
  }
  return _
    ? (0, z.jsx)(J, { ...e, logo: ae, icon: e.icon, title: ie, body: g })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: ae,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: c,
              title: ie,
              timestamp: l,
              location: s,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(G, { children: g }),
            re,
            S,
            p ? (0, z.jsx)(Y, { onHide: p }) : null,
          ],
        }),
      });
}
function $l(e) {
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
    { data: u } = ct(l),
    { data: d } = Oe(l),
    { data: f } = he(l),
    p = eu(d, t, c),
    m = l && (!u || !d || !f),
    h = ``,
    g = null;
  if (u) {
    let e = u.name ?? ``;
    (h = e),
      n.count == 1
        ? c
          ? (h = Ye(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, z.jsx)(`span`, { children: e }),
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
          : (g = Ye(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (h = A(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (g = A(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (h = A(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (g = A(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              ));
  } else h = A(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, z.jsx)(J, {
        ...e,
        logo: p,
        icon: e.icon,
        title: A(`#SteamNotifications_Wishlist`),
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
              title: A(`#SteamNotifications_Wishlist`),
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
function eu(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, z.jsx)(M, { style: { position: `relative` }, children: t });
  let o = Jt(e, `community_icon`);
  return n
    ? (0, z.jsx)(M, {
        style: { position: `relative` },
        children: (0, z.jsx)(`img`, { src: o, className: Qc, onError: a }),
      })
    : (0, z.jsxs)(M, {
        style: { position: `relative` },
        children: [
          (0, z.jsx)(`img`, { className: F(Zc), src: o, onError: a }),
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
    className: el,
    onClick: (t) => {
      e.onHide(), t.stopPropagation(), t.preventDefault();
    },
    onMouseDown: (e) => {
      e.stopPropagation(), e.preventDefault();
    },
    children: (0, z.jsx)(Qe, {}),
  });
}
function X(e) {
  return (0, z.jsx)(`div`, { className: tl, children: e.children });
}
var tu = e(xe()),
  nu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: n.readString, bw: i.writeString },
            type: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  ru = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: n.readString, bw: i.writeString },
            type: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  iu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.dictionary || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dictionary: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  au = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: n.readString, bw: i.writeString },
            type: { n: 2, br: n.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  ou = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.pid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pid: { n: 1, br: n.readUint32, bw: i.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  su = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gameid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  cu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gameid || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: n.readUint64String, bw: i.writeUint64String },
            should_handle: { n: 2, br: n.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  lu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.search_term || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_term: { n: 1, br: n.readString, bw: i.writeString },
            max_results: { n: 2, br: n.readUint32, bw: i.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  uu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || x(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
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
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  du;
(function (e) {
  e.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: nu,
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
            du.UpdateTextFilterDictionaryHandler,
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
            t(nu, e),
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
            t(nu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (e.SendMsgUpdateTextFilterDictionary = i),
    (e.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: ru,
      response: iu,
    });
  function a(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, t(ru, e), iu, {
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, t(ru, e), iu, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (e.SendMsgGetTextFilterDictionary = o),
    (e.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: au,
    });
  function s(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            du.NotifyTextFilterDictionaryChangedHandler,
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
            t(au, e),
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
            t(au, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (e.SendMsgNotifyTextFilterDictionaryChanged = l),
    (e.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: ou,
      response: su,
    });
  function u(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(`SteamEngine.GetGameIDForPID#1`, t(ou, e), su, {
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(`SteamEngine.GetGameIDForPID#1`, t(ou, e), su, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (e.SendMsgGetGameIDForPID = d),
    (e.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: cu,
    });
  function f(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            du.SetOverlayEscapeKeyHandlingHandler,
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
            t(cu, e),
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
            t(cu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (e.SendMsgSetOverlayEscapeKeyHandling = m),
    (e.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: lu,
      response: uu,
    });
  function h(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            t(lu, e),
            uu,
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            t(lu, e),
            uu,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SendMsgSearchAppDataCacheByStoreKeywords = g;
})((du ||= {}));
var fu = class {
  constructor() {
    me(this);
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
                ? ce().ReportError(e)
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
              ? ce().ReportError(e)
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
      let i = _.InitFromMsg(e.request, n),
        a = _.Init(e.response, 147),
        o = t(i, a),
        s = (e) => {
          a.Hdr().set_eresult(e), r(a);
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
        t(_.InitFromMsg(e.request, n));
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
      n(_.InitFromMsg(t, e));
    });
  }
  RegisterEMessageAction(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      Se(() => {
        n(_.InitFromMsg(t, e));
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
        Se(() => {
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
        Se(() => {
          r = t(e, n);
        }),
        r
      );
    });
  }
};
w([j], fu.prototype, `m_rgRegisteredEMsgs`, void 0),
  w([j], fu.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0);
var pu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auth_key || x(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { auth_key: { n: 1, br: n.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= E(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      y(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Request`;
    }
  },
  mu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Response`;
    }
  },
  hu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  gu;
(function (e) {
  e.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: pu,
    response: mu,
  };
  function n(e, n) {
    return (
      (n ||= R().GetDefaultTransport()),
      n == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(`TransportAuth.Authenticate#1`, t(pu, e), mu, {
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
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : n.SendMsg(`TransportAuth.Authenticate#1`, t(pu, e), mu, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  (e.SendMsgAuthenticate = r),
    (e.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: hu,
    });
  function i(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(gu.NotifyStartShutdownHandler, e)
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
        : n.SendNotification(`TransportAuth.NotifyStartShutdown#1`, t(hu, e), {
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
        : n.SendNotification(`TransportAuth.NotifyStartShutdown#1`, t(hu, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.SendMsgNotifyStartShutdown = o;
})((gu ||= {}));
var _u = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new de(`CWebSocketConnection`, () => this.m_sName);
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
    (this.m_sName = e),
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
      (this.m_nReconnectAttemptTimeoutMs = t.nReconnectAttemptTimeoutMs ?? 1e4);
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
    return re(e, 1, 5) * 1e3;
  }
  async ConnectWithRetry(e, t, n) {
    this.m_bConnecting = !0;
    let r = 0;
    do {
      try {
        let t = await this.ConnectToSocket(e, n);
        if (t.result == 1) return (this.m_bConnecting = !1), t;
        this.Log.Warning(`connect attempt failed: ${t.result} - ${t.message}`);
      } catch (e) {
        this.Log.Warning(`connect attempt failed: exception ${e.name} - ${e}`);
      }
      let i = this.GetInterAttemptBackoffMs(r);
      this.Log.Info(`connect retry: attempt:${r}/${t} backoff:${i}`),
        await new Promise((e) => setTimeout(e, i)),
        (this.m_socket = null),
        (r += 1);
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
    this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close();
  }
  PrepareForShutdown() {
    this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0);
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    this.Log.Info(`start reconnect`),
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
          }));
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
    for (; e.readyState == WebSocket.CONNECTING && n > 0; )
      n--, await new Promise((e) => setTimeout(e, 100));
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
      this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let t = this.BShouldReconnect();
    this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: t,
    }),
      t && this.StartReconnect();
  }
  async OnSocketMessage(e) {
    this.m_fnOnMessageHandler(e.data);
  }
  SendSerializedMessage(e) {
    try {
      return this.m_socket.send(e), 1;
    } catch {
      return 2;
    }
  }
};
w([C], _u.prototype, `OnSocketError`, null),
  w([C], _u.prototype, `OnSocketOpen`, null),
  w([C], _u.prototype, `OnSocketClose`, null),
  w([C], _u.prototype, `OnSocketMessage`, null);
var vu = `127.0.0.1`,
  Z = new de(`WebUITransport`),
  yu = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new fu();
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
      let t = ce();
      t &&
        t.ReportError(Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!b.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          e.portClientdll,
          e.authKeyClientdll,
        ),
        R().SetDefaultTransport(this),
        R().SetDefaultHandlerRegistry(this.m_messageHandlers),
        gu.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
        connection: new _u(t, {
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
        sUrl: `ws://${vu}:${n}/transportsocket/`,
        sAuthKey: r,
        eClientExecutionSite: e,
      };
      this.m_mapConnectionDetails.set(e, i);
    }
    SendMsg(e, t, n, r) {
      return new Promise((i, a) => {
        let o = r.eClientExecutionSite;
        if (o == null || o == 0) {
          Z.Error(`SendMsg: Invalid client execution site: ${o}`),
            a(`Transport SendMsg: invalid client execution site ${o}`);
          return;
        }
        let s = this.m_mapConnectionDetails.get(o);
        if (s == null) {
          Z.Error(
            `SendMsg: could not find connection for execution site: ${o}`,
          ),
            a(
              `Transport SendMsg: could not find connection for execution site ${o}`,
            );
          return;
        }
        let c = s.connection;
        if (!c.BCanSendMessages()) {
          let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
          this.m_mapServiceCallErrorCount.set(e, t + 1);
          let n = `SendMsg: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
          t == 1 && this.ReportError(n),
            Z.Warning(n + ` error count: ${t}`),
            a(`Transport SendMsg: socket not ready`);
          return;
        }
        let l = this.m_iMsgSeq++;
        t.SetEMsg(146),
          t.Hdr().set_target_job_name(e),
          t.Hdr().set_jobid_source(`` + l);
        let u = t.Serialize();
        if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
          Z.Error(
            `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let e = _.Init(n);
          e.Hdr().set_eresult(2), i(e);
        } else
          c.SendSerializedMessage(u) == 1
            ? this.m_mapPendingMethodRequests.set(l, {
                m_iSeq: l,
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
      (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
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
        Z.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({});
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
      let t = new le(e),
        n = _.InitHeaderFromPacket(t);
      n.Hdr().jobid_target() &&
      n.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(n)
        : this.DispatchNotification(n);
    }
    DispatchMethodResponse(e) {
      let t = parseInt(e.Hdr().jobid_target()),
        n = this.m_mapPendingMethodRequests.get(t);
      if (n == null) {
        T(!1, `Transport Error: no pending callback for request`);
        return;
      }
      T(t == n.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(t);
      let r = _.InitFromMsg(n.m_responseClass, e);
      n.m_fnCallback(r);
    }
    DispatchNotification(e) {
      this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
        T(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [e, t] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
        );
        let e = _.Init(t.m_responseClass);
        e.Hdr().set_eresult(2), t.m_fnCallback(e);
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let t = gu.AuthenticateHandler.name,
        n = { eClientExecutionSite: e.eClientExecutionSite },
        r = _.Init(pu);
      return (
        r.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(t, r, gu.AuthenticateHandler.response, n)
      );
    }
    OnStartShutdown(e) {
      for (let [e, t] of this.m_mapConnectionDetails)
        t.connection.PrepareForShutdown();
      return 1;
    }
  };
w([C], yu.prototype, `OnWebsocketReconnectStart`, null),
  w([C], yu.prototype, `OnWebsocketReconnectFinish`, null),
  w([C], yu.prototype, `OnWebsocketClose`, null),
  w([C], yu.prototype, `OnWebsocketMessage`, null),
  w([C], yu.prototype, `OnStartShutdown`, null);
var bu = new yu();
function xu() {
  return b.IN_MOBILE ? h : r();
}
function Su(e) {
  if (e === ``) return !1;
  try {
    return RegExp(`\\b(` + e + `)\\b`, `ugi`), !0;
  } catch {
    return (
      console.log(`'${e}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var Cu = 15,
  wu = 3600,
  Tu = `(1)`,
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
      me(this);
      let t = new rt();
      (this.m_TextFilterPreferences = {
        eTextFilterSetting: t.text_filter_setting(),
        bIgnoreFriends: t.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new Ge()),
        (this.m_DataAccess = e);
    }
    async Init(e = 0, t = null, n = null, r = null) {
      (this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = bu),
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
        (this.m_nLoadLanguagesRetryDelaySec = Cu),
        await this.EnsureFiltersLoaded();
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            du.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(b.LANGUAGE),
        b.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = Cu),
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
          (this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0);
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        (this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null);
      }
    }
    RegisterPlayerNotifications(e) {
      this.m_rgUnregisterPlayerNotifications.forEach((e) => e()),
        (this.m_rgUnregisterPlayerNotifications = []),
        e &&
          this.m_rgUnregisterPlayerNotifications.push(
            e.RegisterServiceNotificationHandler(
              Pe.NotifyCommunityPreferencesChangedHandler,
              (e) => (
                this.UpdateCommunityPreferences(e.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            e.RegisterServiceNotificationHandler(
              Pe.NotifyTextFilterWordsChangedHandler,
              (e) => (
                this.UpdateTextFilterWords(e.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          );
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(e) {
      let t = _.Init(nu);
      t.Body().set_language(e),
        t.Body().set_type(`profanity`),
        du.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport),
        t.Body().set_type(`banned`),
        du.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport);
    }
    GetSteamEngineTextFilterDictionary(e, t) {
      let n = _.Init(ru);
      return (
        n.Body().set_language(e),
        n.Body().set_type(t),
        du.SendMsgGetTextFilterDictionary(n, this.m_WebUIServiceTransport)
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
        let t = new TextEncoder().encode(Tu + e);
        return tu.fromByteArray(t);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(e) {
      try {
        let t = tu.toByteArray(e),
          n = new TextDecoder().decode(t);
        return n.startsWith(Tu)
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
          console.warn(`Error parsing cached text filter word list`, e),
            (this.m_TextFilterWords = new Ge());
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
      (this.m_bHaveCompleteFilter = e != null && t != null),
        e != null && t != null && this.BRebuildFilter(e, t);
    }
    SaveFilter() {
      this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        );
    }
    async RequestUpdatedSettings() {
      let e = new rt();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let t = _.Init(Xe);
            e = (await Ze.GetCommunityPreferences(this.m_Transport, t))
              .Body()
              .preferences();
          } else {
            let t = { sessionid: c(), origin: xu() },
              n = await B.default.get(
                b.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                { params: t, withCredentials: !0 },
              );
            e = rt.fromObject(n.data.preferences);
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
              let e = _.Init(et);
              t = (await Ze.GetTextFilterWords(this.m_Transport, e))
                .Body()
                .words();
            } else {
              let e = { sessionid: c(), origin: xu() },
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
      e.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          e.text_filter_setting()),
        (t = !0)),
        e.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            e.text_filter_ignore_friends()),
          (t = !0)),
        t && this.SaveTextFilterPreferences();
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(e) {
      (this.m_TextFilterWords = e), this.SaveTextFilterWords();
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = Cu;
    async LoadLanguages() {
      (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0));
      try {
        let e = await this.LoadLanguage(b.LANGUAGE);
        if (
          (b.LANGUAGE !== `english` &&
            (e = (await this.LoadLanguage(`english`)) && e),
          !e)
        )
          throw Error(`clean_public dictionary unavailable`);
        (this.m_nLoadLanguagesRetryDelaySec = Cu),
          (this.m_bWordListsComplete = !0);
      } catch (e) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          wu,
        );
        let t = this.m_nLoadLanguagesRetryDelaySec;
        console.warn(`LoadLanguages caught`, e, `retry in`, t, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            (this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded();
          }, t * 1e3));
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
        t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${xu()}`;
        {
          let e = await B.default.get(t);
          this.m_strBannedWords += e.data;
        }
        t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${xu()}`;
        {
          let e = await B.default.get(t);
          this.m_strProfanityWords += e.data;
        }
      }
      let r = this.m_WebUIServiceTransport.BIsValid(),
        i = `CTextFilterStore_strCleanPublic_` + e;
      t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${xu()}`;
      try {
        let e = await B.default.get(t);
        (this.m_strCleanWords += e.data),
          r && this.SaveObfuscatedString(i, e.data);
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
        return Su(e);
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
      (t = t.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (n = this.m_strCleanWords.split(e)),
        (n = n.concat(this.m_TextFilterWords.text_filter_custom_clean_words()));
      let r = this.CreatePattern(t),
        i = this.CreatePattern(n);
      i != `` && (i = `^(` + i + `)$`),
        this.BRebuildFilter(r, i) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete);
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
          console.warn(`Couldn't compile textfilter bannedwords regex`),
            ce().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${e}`),
            ),
            (this.m_strBannedPattern = ``);
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = t),
        t !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(t, `ugi`);
        } catch (e) {
          console.warn(`Couldn't compile textfilter cleanwords regex`),
            ce().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${e}`),
            ),
            (this.m_strCleanPattern = ``);
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
w([j], Q.prototype, `m_TextFilterPreferences`, void 0),
  w([j], Q.prototype, `m_mapPlayerCache`, void 0),
  w([j], Q.prototype, `m_regexBannedWords`, void 0),
  w([j], Q.prototype, `m_regexCleanWords`, void 0),
  w([j], Q.prototype, `m_bInitialized`, void 0),
  w([j], Q.prototype, `m_bFilterChangedWhileLoading`, void 0),
  w([j], Q.prototype, `m_bOngoingLoad`, void 0),
  w([qe], Q.prototype, `Init`, null),
  w([C], Q.prototype, `OnTextFilterDictionaryChanged`, null),
  w([qe], Q.prototype, `UpdateCommunityPreferences`, null),
  w([qe], Q.prototype, `BRebuildFilter`, null);
var Eu;
function Du() {
  if (!Eu) {
    let e = new Set(),
      t = { sessionid: c(), origin: xu() };
    B.default
      .get(b.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: t,
        withCredentials: !0,
      })
      .then((t) => {
        for (let n of t.data.friendslist?.friends ?? [])
          ae(n.efriendrelationship) &&
            e.add(new k(n.ulfriendid).GetAccountID());
      }),
      (Eu = (t) => e.has(t));
  }
  return Eu;
}
var Ou = null,
  ku = !1;
function Au() {
  return (Ou ||= new Q({ BIsFriend: Du() })), Ou;
}
function ju() {
  let e = De(),
    t = dt(),
    n = Re(() => Au().m_bInitialized);
  return (
    !n &&
      !ku &&
      ((ku = !0), Ou.Init(u.accountid, e, t).finally(() => (ku = !1))),
    [n, Ou]
  );
}
function Mu(e) {
  let t = null;
  return Wo(e) ? (t = Lu) : Vo(e) ? (t = Pu) : qu[e] && (t = qu[e]), t;
}
function Nu(e) {
  let { rollup: t, uimode: n, location: r } = e,
    i = Mu(t.type);
  return i
    ? (0, z.jsx)(ve, {
        controller: `notification`,
        method: g(n),
        submethod: p(r),
        children: (0, z.jsx)(i, { ...e }),
      })
    : null;
}
function Pu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = zs(t.item.notification_type, t.item.body_data),
    s = Yn(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = ne(o?.link ?? `#`, s);
  return (0, z.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Wl, {
      icon: Ul(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, z.jsx)(N, {}),
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
function Fu(e) {
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
    l = Vs(t);
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, z.jsx)(Xl, {
      icon: (0, z.jsx)(N, {}),
      fallbackLogo: (0, z.jsx)(je, {}),
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
function Iu(e) {
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
    { data: u } = nc(t),
    d = (e) => o(() => {}, a.item, e),
    f = () => o(() => window.location.assign(n), a.item);
  if (!i) return null;
  let p = !u,
    m = A(r, u?.m_strPlayerName ?? ``),
    h = A(i, u?.m_strPlayerName ?? ``);
  return (0, z.jsx)(`a`, {
    href: n,
    onMouseDown: d,
    children: (0, z.jsx)(Zl, {
      title: m,
      body: h,
      bDataLoading: p,
      logoUrl: u?.avatar_url_medium,
      icon: (0, z.jsx)(N, {}),
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
function Lu(e) {
  let t = Bs(e.rollup.type, e.rollup.item.body_data);
  if (!t) return null;
  let { strTitleLoc: n, strBodyLoc: r, strUrl: i, steamid: a } = t;
  return !a || !n || !r
    ? null
    : (0, z.jsx)(Iu, {
        steamid: a,
        url: i,
        strTitleLoc: n,
        strBodyLoc: r,
        ...e,
      });
}
function Ru(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = O(),
    s = Vs(t),
    c = `${b.COMMUNITY_BASE_URL}profiles/${o}/tradeoffers`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    { data: d } = nc(k.InitFromAccountID(s, b.EUNIVERSE).GetAccountID());
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Gl, {
      logo: (0, z.jsx)(N, {}),
      icon: (0, z.jsx)(Fe, {}),
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
var zu = (e) => {
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
    children: (0, z.jsx)(Kl, {
      logo: (0, z.jsx)(N, {}),
      icon: (0, z.jsx)(Fe, {}),
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
function Bu(e) {
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
    u = Vs(t),
    { data: d } = nc(k.InitFromAccountID(u, b.EUNIVERSE).GetAccountID());
  return (0, z.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, z.jsx)(ql, {
      logo: (0, z.jsx)(N, {}),
      icon: (0, z.jsx)(Ve, {}),
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
function Vu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t),
    { data: s } = nc(o.responder_steamid),
    c =
      o.package_id > 0
        ? { packageid: o.package_id }
        : { bundleid: o.bundle_id },
    { data: l } = ke(c),
    u = l ? `app/${l.appid}` : ``,
    d = `${b.STORE_BASE_URL}${u}`,
    f = () => n(() => window.location.assign(d), t.item),
    p = (e) => n(() => {}, t.item, e),
    m = !s || !l,
    h = A(`#SteamNotifications_RequestedGameAddedTitle`),
    g = l ? A(`#SteamNotifications_RequestedGameAddedBody`, l.name ?? ``) : ``;
  return (0, z.jsx)(`a`, {
    href: d,
    onMouseDown: p,
    children: (0, z.jsx)(Zl, {
      title: h,
      body: g,
      bDataLoading: m,
      logoUrl: s?.avatar_url_medium,
      icon: (0, z.jsx)(N, {}),
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
function Hu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = O(),
    s = De(),
    c = as(t.item, o, s),
    l = Vs(t),
    { data: u } = ct(l?.appid ? { appid: l.appid } : void 0),
    d = `${b.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, z.jsx)(`a`, {
    href: d,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Yl, {
      appName: u?.name,
      icon: (0, z.jsx)(it, {}),
      fallbackLogo: (0, z.jsx)(N, {}),
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
function Uu(e) {
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
    u = Vs(t),
    { data: d } = nc(u.requestorID);
  return (0, z.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, z.jsx)(Jl, {
      fallbackLogo: (0, z.jsx)(pe, {}),
      icon: (0, z.jsx)(be, {}),
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
function Wu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t),
    s = O(),
    c = b.COMMUNITY_BASE_URL + t.url,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => {
      n(() => {}, t.item, e);
    },
    { data: d } = nc(us(o) ? o?.account_steam_id?.GetAccountID() : null),
    { data: f } = nc(ds(o) ? o?.owner_steam_id?.GetAccountID() : null),
    p = o.json_data?.app_id ? { appid: o.json_data?.app_id } : void 0,
    { data: m } = ct(p),
    [h, g] = ju(),
    _ = h ? g.FilterText(o.account_steam_id.GetAccountID(), o.title) : ``,
    ee = h ? g.FilterText(o.account_steam_id.GetAccountID(), o.comment) : ``;
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Ql, {
      fallbackLogo: (0, z.jsx)(N, {}),
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
function Gu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t),
    { data: s } = ct({ appid: o.appid }),
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
      children: (0, z.jsx)($l, {
        fallbackLogo: (0, z.jsx)(N, {}),
        icon: (0, z.jsx)(Ke, {}),
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
function Ku(e) {
  let { url: t, count: n, icon: r, strBody: i, eFeature: a } = e,
    o = Jn(a);
  return !n || o
    ? null
    : (0, z.jsx)(`a`, {
        href: t,
        className: Hs,
        children: (0, z.jsx)(Fc, {
          icon: (0, z.jsx)(r, {}),
          count: n,
          onActivate: () => window.location.assign(t),
          strBody: i,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var qu = { 3: Wu, 8: Gu, 5: Uu, 4: Hu, 2: Bu, 9: Ru, 12: Fu, 22: Vu, 29: zu },
  Ju = class e extends I.Component {
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
        this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
          this.props.thresholds && (e.threshold = this.props.thresholds),
          (this.m_observer = He(t, this.OnIntersection, e));
      }
      this.m_observer &&
        t &&
        t != this.m_elTracked &&
        (this.m_observer.observe(t), (this.m_elTracked = t));
    }
    FindScrollableAncestor(t) {
      return s(t, (t) => {
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
      ie(this.m_refElement, e),
        this.props.containerRef && ie(this.props.containerRef, e);
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
      return (0, z.jsx)(M, {
        ref: this.HandleRef,
        ...a,
        children: this.props.children,
      });
    }
  },
  $ = new $o(),
  Yu = ot(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !$.m_bLoaded && $.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = De();
    (0, I.useEffect)(() => {
      $.setTransport(r), (window.RefreshSteamNotifications = () => sd(r));
    }, [r]);
    let i = Xu();
    return t
      ? (0, z.jsxs)(z.Fragment, {
          children: [(0, z.jsx)(ad, {}), (0, z.jsx)(td, {})],
        })
      : (0, z.jsx)(Qu, { nTotalUnviewed: i.nUnviewed });
  });
function Xu() {
  return Re(() => ({
    notifications: $.m_rgNotificationRollups,
    summary: $.m_summary,
    loaded: $.m_bLoaded,
    nUnviewed: $.m_nUnviewed,
  }));
}
function Zu() {
  let e = Xu(),
    { data: t } = Un(O()),
    n = Kn(),
    r = t?.settings;
  return e.notifications.filter((e) => !ys(e.type, r, n) && !xs(e.item));
}
function Qu(e) {
  let { nTotalUnviewed: t } = e,
    n = I.useRef(null),
    r = Zu(),
    [i, a] = I.useState(Ps);
  I.useEffect(() => {
    n.current ||
      ((n.current = $e(
        (0, z.jsx)($u, { popupRef: n }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      n.current.Hide());
    let e = document.getElementById(`header_notification_link`);
    e && (e.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => a(null), 2e3);
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
  return (0, z.jsx)(Ju, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, z.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: F(As, t ? Ns : Ms, i),
      children: (0, z.jsx)(ze, {
        className: js,
        "aria-label": A(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var $u = (e) => {
    let { popupRef: t } = e,
      n = I.useRef(null),
      [r, i] = I.useState(!1);
    I.useEffect(() => {
      i(n.current != null && n.current?.scrollHeight > n.current?.clientHeight);
    }, [n.current?.scrollHeight, r]);
    let a = r ? void 0 : Ts;
    return (0, z.jsxs)(`div`, {
      className: Ss,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, z.jsx)(ed, {}),
        (0, z.jsxs)(`div`, {
          className: F(ws, a),
          ref: n,
          children: [
            (0, z.jsx)(ad, {}),
            (0, z.jsx)(rd, {}),
            (0, z.jsx)(od, {}),
          ],
        }),
      ],
    });
  },
  ed = () => {
    let e = `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/notifications`;
    return (0, z.jsxs)(`div`, {
      className: F(Es),
      children: [
        (0, z.jsx)(`div`, {
          className: Os,
          children: A(`#NotificationsMenu_Title`),
        }),
        (0, z.jsx)(`a`, {
          href: e,
          children: (0, z.jsx)(`div`, {
            className: ks,
            children: A(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  td = () => {
    let e = `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/notifications`;
    return (0, z.jsx)(`div`, {
      className: F(Es, Ds),
      children: (0, z.jsx)(`a`, {
        href: e,
        children: (0, z.jsx)(`div`, {
          className: ks,
          children: A(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function nd(e, t, n) {
  t.read ||
    (n && n.button != 0 && n.button != 1) ||
    !t.notification_id ||
    $.MarkItemRead(t.notification_id),
    e();
}
function rd() {
  let e = Zu();
  return e.length == 0
    ? null
    : (0, z.jsx)(`div`, {
        className: Cs,
        children: e.map((e, t) =>
          (0, z.jsx)(
            Nu,
            { rollup: e, onNotificationClick: nd, uimode: 3, location: 3 },
            t,
          ),
        ),
      });
}
var id = [
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: Ve,
    fnLocalizeBody: (e) => P(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: be,
    fnLocalizeBody: (e) => P(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: Me,
    fnLocalizeBody: (e) => P(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: it,
    fnLocalizeBody: (e) => P(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: Fe,
    fnLocalizeBody: (e) => P(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${b.COMMUNITY_BASE_URL}profiles/${u.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: je,
    fnLocalizeBody: (e) => P(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${b.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: at,
    fnLocalizeBody: (e) => P(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${b.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: tt,
    fnLocalizeBody: (e) =>
      P(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${b.STORE_BASE_URL}account/familymanagement/join?ft=${u.steamid}`,
    countItem: `family_invites`,
    icon: N,
    fnLocalizeBody: (e) => P(`#Notification_FamilyInvitePinned_Body`, e),
  },
];
function ad() {
  let e = Xu();
  return (0, z.jsx)(z.Fragment, {
    children: id.map((t) =>
      (0, z.jsx)(
        Ku,
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
function od() {
  return (0, z.jsxs)(`div`, {
    className: Fs,
    children: [
      (0, z.jsx)(`div`, {
        className: Is,
        children: A(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, z.jsx)(`div`, {
        className: Ls,
        children: A(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function sd(e) {
  let t = null;
  try {
    t = await ts(e, u.steamid, d(b.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && $.ProcessNewNotificationPayload(t);
}
export { Yu as GreenEnvelope, Yu as default, Xu as useSteamNotifications };

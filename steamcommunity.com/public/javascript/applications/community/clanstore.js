/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  A as t,
  B as n,
  Ft as r,
  K as i,
  L as a,
  Pt as o,
  R as s,
  at as c,
  j as ee,
} from "./libraries.js";
import {
  $m as l,
  Ah as u,
  Dh as d,
  Ef as f,
  Eh as p,
  Mh as m,
  Oh as h,
  Pd as te,
  Qm as g,
  Rf as ne,
  Sm as _,
  Th as v,
  Yh as y,
  am as re,
  dm as b,
  em as x,
  jh as S,
  kh as C,
  om as w,
  pm as ie,
  qf as ae,
  sm as oe,
  xh as T,
} from "./main.js";
var se = e(o()),
  E = e(r(), 1),
  ce = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            clanid: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            link_url: { n: 3, br: h.readString, bw: m.writeString },
            link_text: { n: 4, br: h.readString, bw: m.writeString },
            blurb: { n: 5, br: h.readString, bw: m.writeString },
            time_recommended: { n: 6, br: h.readUint32, bw: m.writeUint32 },
            comment_count: { n: 7, br: h.readInt32, bw: m.writeInt32 },
            upvote_count: { n: 8, br: h.readInt32, bw: m.writeInt32 },
            accountid_creator: { n: 9, br: h.readUint32, bw: m.writeUint32 },
            recommendation_state: { n: 10, br: h.readEnum, bw: m.writeEnum },
            received_compensation: { n: 11, br: h.readBool, bw: m.writeBool },
            received_for_free: { n: 12, br: h.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  le = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.listid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [10, 12, 13, 14], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            listid: { n: 1, br: h.readUint64String, bw: m.writeUint64String },
            title: { n: 2, br: h.readString, bw: m.writeString },
            blurb: { n: 3, br: h.readString, bw: m.writeString },
            link: { n: 4, br: h.readString, bw: m.writeString },
            list_state: { n: 5, br: h.readEnum, bw: m.writeEnum },
            sort_order: { n: 6, br: h.readUint32, bw: m.writeUint32 },
            time_created: { n: 7, br: h.readUint32, bw: m.writeUint32 },
            time_updated: { n: 8, br: h.readUint32, bw: m.writeUint32 },
            accountid: { n: 9, br: h.readUint32, bw: m.writeUint32 },
            apps: { n: 10, c: ue, r: !0, q: !0 },
            list_type: { n: 11, br: h.readEnum, bw: m.writeEnum },
            title_localization: { n: 12, c: T, r: !0, q: !0 },
            blurb_localization: { n: 13, c: T, r: !0, q: !0 },
            link_localization: { n: 14, c: T, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            list_jsondata: { n: 17, br: h.readString, bw: m.writeString },
            clan_account_id: { n: 18, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  ue = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.recommended_app || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommended_app: { n: 1, c: ce },
            blurb: { n: 2, br: h.readString, bw: m.writeString },
            sort_order: { n: 3, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  de = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            list_state: { n: 2, br: h.readEnum, bw: m.writeEnum },
            start: { n: 3, br: h.readUint32, bw: m.writeUint32 },
            count: { n: 4, br: h.readUint32, bw: m.writeUint32 },
            return_total_only: { n: 5, br: h.readBool, bw: m.writeBool },
            return_metadata_only: { n: 6, br: h.readBool, bw: m.writeBool },
            max_apps: { n: 7, br: h.readInt32, bw: m.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  fe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.list_details || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            list_details: { n: 1, c: le, r: !0, q: !0 },
            total: { n: 2, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  pe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            listid: { n: 2, br: h.readUint64String, bw: m.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  me = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.list_details || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: le } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  D;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCuration.GetLists#1`, l(de, t, n), fe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetLists = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, l(pe, t, n), me, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetListDetails = n;
})((D ||= {}));
async function he(e) {
  return O(
    `${x.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function ge(e) {
  let t = _.InitFromClanID(e, x.EUNIVERSE);
  return O(
    `${x.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _e(e) {
  return O(
    `${x.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function ve(e) {
  return O(
    `${x.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function O(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function k(e) {
  return [`clantoclaninfo`, e];
}
function A(e) {
  return [`apptoclanid`, e];
}
function j(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function ye(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var be = new WeakSet();
function M(e) {
  if (!be.has(e)) {
    be.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var xe = new WeakMap();
function N(e) {
  if (!e) return null;
  let t = xe.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new _(e.clanSteamIDString)
          : _.InitFromClanID(e.clanAccountID, x.EUNIVERSE),
      }),
      xe.set(e, t)),
    t
  );
}
function Se(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function P(e, t) {
  if (!t) return null;
  M(e);
  let n = Se(t);
  return (
    e.setQueryData(k(n.clanAccountID), n),
    n.appid && e.setQueryData(A(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(j(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function F(e, t) {
  for (let n of t) P(e, n);
}
function I(e) {
  let t = c();
  return i(L(e, t));
}
function L(e, t) {
  return (
    M(t),
    {
      queryKey: k(e ?? null),
      queryFn: async () => (e ? P(t, await ge(e)) : null),
      enabled: e !== void 0,
      select: N,
    }
  );
}
function Ce(e, t) {
  return (
    M(t),
    {
      queryKey: A(e),
      queryFn: async () => P(t, await he(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function we(e, t, n = `group`) {
  return (
    M(t),
    {
      queryKey: j(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(j(e, `group`));
          if (n) return n;
        }
        return (
          P(t, n == `store` ? await ve(e) : await _e(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Te(e) {
  return e.isPending ? void 0 : (e.data ?? null);
}
function Ee(e, t = `group`) {
  let n = c(),
    r = i(we(e, n, t));
  return I(e ? Te(r) : void 0);
}
function R(e, t) {
  if (e) return N(t.getQueryData(k(e))) ?? void 0;
}
function z(e, t) {
  if (e) return R(t.getQueryData(A(e)), t);
}
function De(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = R(t.getQueryData(j(e, n)), t);
    if (r) return r;
  }
}
async function B(e, t) {
  return e ? N(await t.fetchQuery(L(e, t))) : null;
}
async function Oe(e, t) {
  return e ? B(await t.fetchQuery(Ce(e, t)), t) : null;
}
async function ke(e, t, n = `group`) {
  return e ? B(await t.fetchQuery(we(e, t, n)), t) : null;
}
var V = () => (x.EUNIVERSE === 2 ? 2581 : 45267781),
  H = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid_giftee || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: h.readInt32, bw: m.writeInt32 },
            gift_message: { n: 2, c: Ae },
            time_scheduled_send: { n: 3, br: h.readInt32, bw: m.writeInt32 },
            email_giftee: { n: 4, br: h.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  Ae = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gifteename || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: h.readString, bw: m.writeString },
            message: { n: 2, br: h.readString, bw: m.writeString },
            sentiment: { n: 3, br: h.readString, bw: m.writeString },
            signature: { n: 4, br: h.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  je = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount_in_cents || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount_in_cents: {
              n: 1,
              br: h.readInt64String,
              bw: m.writeInt64String,
            },
            currency_code: { n: 2, br: h.readInt32, bw: m.writeInt32 },
            formatted_amount: { n: 3, br: h.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartAmount`;
    }
  },
  Me = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            gidcoupon: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            title: { n: 5, br: h.readString, bw: m.writeString },
            coupon_description: { n: 6, br: h.readString, bw: m.writeString },
            large_icon_url: { n: 7, br: h.readString, bw: m.writeString },
            discount_pct: { n: 8, br: h.readInt32, bw: m.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartCoupon`;
    }
  },
  Ne = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_requester || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  Pe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  Fe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: h.readInt64String, bw: m.writeInt64String },
            currencycode: { n: 2, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  U = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            costwhenadded: { n: 2, c: Fe },
            is_gift: { n: 3, br: h.readBool, bw: m.writeBool },
            gidbundle: {
              n: 4,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            quantity: { n: 5, br: h.readUint32, bw: m.writeUint32 },
            gift_info: { n: 6, c: H },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  Ie = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.walletcredit || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: Fe } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  Le = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            packageid: { n: 3, br: h.readUint32, bw: m.writeUint32 },
            gidcoupon: {
              n: 4,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  Re = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.microtxnappid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  ze = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bundleid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            quantity: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            is_gift: { n: 3, br: h.readBool, bw: m.writeBool },
            gift_info: { n: 4, c: H },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  Be = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reward_id || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: h.readInt32, bw: m.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  Ve = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidparent || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  He = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            gidcoupon: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  Ue = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidlineitem || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            package_item: { n: 2, c: U },
            wallet_credit_item: { n: 3, c: Ie },
            coupon_item: { n: 4, c: Le },
            micro_item: { n: 5, c: Re },
            bundle_item: { n: 7, c: ze },
            loyalty_item: { n: 8, c: Be },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  We = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coupons || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: He, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  Ge = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  W = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.lineitems || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: Ue, r: !0, q: !0 },
            treeview: { n: 2, c: Ve, r: !0, q: !0 },
            potentials: { n: 3, c: We },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  Ke = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            contents: { n: 2, c: W },
            time_created: { n: 3, br: h.readUint32, bw: m.writeUint32 },
            merged_into_account_cart: { n: 4, br: h.readBool, bw: m.writeBool },
            steamid_requester: {
              n: 5,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  qe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [4], null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            browserid: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            cart_items: { n: 4, c: U, r: !0, q: !0 },
            store_country_code: { n: 5, br: h.readString, bw: m.writeString },
            beta_mode: { n: 6, d: !1, br: h.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  Je = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [3], null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            contents: { n: 2, c: W },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  Ye = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            quantity: { n: 3, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  Xe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [3], null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            contents: { n: 2, c: W },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  Ze = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            bundleid: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            browserid: {
              n: 3,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            store_country: { n: 5, br: h.readString, bw: m.writeString },
            quantity: { n: 6, br: h.readUint32, bw: m.writeUint32 },
            beta_mode: { n: 7, d: !1, br: h.readBool, bw: m.writeBool },
            gift_info: { n: 8, c: H },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  Qe = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: W },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  $e = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            gift_info: { n: 3, c: H },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  et = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: W } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  tt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
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
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readUint64String,
              pbr: h.readPackedUint64String,
              bw: m.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: h.readUint64String,
              bw: m.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  nt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: W },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  rt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, l(Ne, t, n), Pe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      l(Ge, t, n),
      Ke,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetShoppingCartContents = n;
  function r(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, l(qe, t, n), Je, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, l(Ye, t, n), Xe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, l(Ze, t, n), Qe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, l($e, t, n), et, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, l(tt, t, n), nt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RemoveLineItems = s;
})((rt ||= {}));
var it = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            clan_steamid: {
              n: 2,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            relation: { n: 3, br: h.readEnum, bw: m.writeEnum },
            linkname: { n: 4, br: h.readString, bw: m.writeString },
            json: { n: 5, br: h.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  at = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_id || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  ot = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            link: { n: 2, c: it },
            remove: { n: 3, d: !1, br: h.readBool, bw: m.writeBool },
            update_json_only: { n: 4, d: !1, br: h.readBool, bw: m.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: h.readBool,
              bw: m.writeBool,
            },
            partner_id: { n: 6, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  st = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), E.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  ct = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: h.readUint32, bw: m.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  lt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.links || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: it, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  ut = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_ids || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
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
              br: h.readUint32,
              pbr: h.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: h.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  dt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: at, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  ft = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_id || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            listid: { n: 2, br: h.readUint64String, bw: m.writeUint64String },
            ignore_dlc: { n: 3, br: h.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  pt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: mt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  mt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            sort_order: { n: 2, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  ht = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.partnerid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: h.readUint32, bw: m.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  gt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: _t, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  _t = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: h.readString,
              bw: m.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  vt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, l(ot, t, n), st, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, l(ct, t, n), lt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = n;
  function r(e, t, n) {
    return e.SendMsg(
      `StoreCatalog.GetDevPageAllAppsLinked#1`,
      l(ut, t, n),
      dt,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, l(ft, t, n), pt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, l(ht, t, n), gt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((vt ||= {}));
var G = e(t()),
  yt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            accept: { n: 2, br: h.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  bt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), E.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  xt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.image || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: h.readString, bw: m.writeString },
            language: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            from_body: { n: 3, br: h.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  St = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            appid: { n: 4, br: h.readUint32, bw: m.writeUint32 },
            event_type: { n: 5, br: h.readEnum, bw: m.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: h.readString,
              bw: m.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: h.readUint32, bw: m.writeUint32 },
            rtime32_end_time: { n: 8, br: h.readUint32, bw: m.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: h.readUint32,
              bw: m.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: h.readUint32,
              bw: m.writeUint32,
            },
            event_name: { n: 11, br: h.readString, bw: m.writeString },
            subtitle: { n: 12, br: h.readString, bw: m.writeString },
            summary: { n: 13, br: h.readString, bw: m.writeString },
            capsule_image: { n: 14, c: xt },
            store_path: { n: 15, br: h.readString, bw: m.writeString },
            rtime32_post_time: { n: 20, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  Ct = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [2], null);
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
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            events: { n: 2, c: wt, r: !0, q: !0 },
            language: { n: 3, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  wt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  Tt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.summaries || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: St, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  Et = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  Dt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.snippets || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: Ot, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  Ot = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: h.readFixed64String, bw: m.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            hidden: { n: 3, br: h.readBool, bw: m.writeBool },
            published: { n: 4, br: h.readBool, bw: m.writeBool },
            rtime32_start_time: { n: 5, br: h.readUint32, bw: m.writeUint32 },
            event_name: { n: 6, br: h.readString, bw: m.writeString },
            event_type: { n: 7, br: h.readEnum, bw: m.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  kt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: At, r: !0, q: !0 },
            cursor: { n: 2, br: h.readString, bw: m.writeString },
            count: { n: 3, d: 100, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  At = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            start_build_id: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            end_build_id: { n: 3, br: h.readUint32, bw: m.writeUint32 },
            branch: { n: 4, br: h.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  jt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.matches || v(e.M()),
        E.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: Mt, r: !0, q: !0 },
            num_total_results: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            next_cursor: { n: 3, br: h.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  Mt = class e extends E.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || v(e.M()),
        E.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: h.readUint32, bw: m.writeUint32 },
            build_id: { n: 2, br: h.readUint32, bw: m.writeUint32 },
            branch: { n: 3, br: h.readString, bw: m.writeString },
            clan_event_gid: {
              n: 4,
              br: h.readFixed64String,
              bw: m.writeFixed64String,
            },
            clan_account_id: { n: 5, br: h.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new E.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new E.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  Nt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, l(yt, t, n), bt, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, l(Ct, t, n), Tt, {
      ePrivilege: 2,
      rgBrowserAPISites: [`store`, `community`, `partner`],
    });
  }
  e.GetPartnerEventSummaries = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      l(Et, t, n),
      Dt,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = r;
  function i(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, l(kt, t, n), jt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = i;
})((Nt ||= {}));
var K = class {
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
    a(this), (this.m_clanSteamID = e);
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
    a.append(`sessionid`, re()),
      a.append(`clan_account_id`, this.GetClanAccountID().toString()),
      a.append(`accountflags`, JSON.stringify(i));
    let o = await G.default.post(n, a);
    o &&
      o.status == 200 &&
      o.data.success == 1 &&
      (this.m_clanAccountFlags = r);
  }
};
f([s], K.prototype, `m_appidList`, void 0),
  f([s], K.prototype, `m_nFollowers`, void 0),
  f([s], K.prototype, `m_clanAccountFlags`, void 0);
var q = class e {
  constructor() {
    a(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = w(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new K(_.InitFromClanID(n, b.EUNIVERSE));
          r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r);
        });
      let n = w(`creatorhomeforapp`, `application_config`);
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
      let e = w(`loyalty_webapi_token`, `application_config`),
        t = ne(new ie(b.WEBAPI_BASE_URL, e || void 0));
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
      let t = new K(e);
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
      i = await G.default.get(r, { params: n, cancelToken: t && t.token });
    return e.Initialize(i.data), e;
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = b.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await G.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, r) {
    let i = `${b.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      a = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: b.COUNTRY,
        l: b.LANGUAGE,
        origin: self.origin,
      },
      o = [],
      s = await G.default.get(i, { params: a, cancelToken: r.token });
    return (
      s.data.curators &&
        n(() => {
          s.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new K(_.InitFromClanID(e.creator_clan_id, b.EUNIVERSE));
              t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t);
            }
            o.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
          });
        }),
      o
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
f([s], q.prototype, `m_mapClanToCreatorHome`, void 0),
  f([s], q.prototype, `m_mapAppToCreatorIDList`, void 0),
  f([ee], q.prototype, `LazyInit`, null);
var J = new q();
te(`g_CreatorHomeStore`, J);
function Pt(e) {
  if (!e) return null;
  let t = J.BHasCreatorHomeLoaded(e.clanSteamID)
    ? J.GetCreatorHome(e.clanSteamID)
    : void 0;
  return e.GetSaleURL(t?.GetCreatorHomeURL(`developer`));
}
function Y(e) {
  if (!e) return;
  let t = w(`creator_home_list_info`, `application_config`);
  if (typeof t != `object` || !t || Array.isArray(t)) return;
  let n = t[e];
  if (n && n.title)
    return {
      title: n.title,
      description: n.description?.length ? n.description : void 0,
      imageUrl: n.listtileimage?.length ? n.listtileimage : void 0,
    };
}
function Ft(e) {
  return Y(e)?.title;
}
function It(e) {
  return Y(e)?.description;
}
function Lt(e) {
  return Y(e)?.imageUrl;
}
function Rt(e) {
  let t = _.InitFromClanID(e, b.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => J.GetCreatorHome(t),
    queryFn: async () => {
      let t = _.InitFromClanID(e, b.EUNIVERSE);
      return await J.LoadCreatorHome(t, !0);
    },
  };
}
function zt(e) {
  let { data: t, isFetching: n, refetch: r } = i(Rt(e));
  return { creatorHome: t, isFetching: n, refetch: r };
}
function Bt(e, t, n) {
  return {
    queryKey: [`GetCreatorHomeListAppsQuery`, e, t, n],
    queryFn: async () => {
      let r = J.GetServiceTransport(),
        i = g.Init(ft);
      i.Body().set_clan_account_id(e),
        i.Body().set_listid(t),
        n && i.Body().set_ignore_dlc(!0);
      let a = await vt.GetDevPageListApps(r, i);
      if (a.GetEResult() != 1)
        throw Error(
          `Error from GetCreatorHomeListAppsQuery: ${a.GetEResult()}`,
        );
      return a
        .Body()
        .apps()
        .slice()
        .sort((e, t) => (e.sort_order() ?? 0) - (t.sort_order() ?? 0))
        .map((e) => e.appid() ?? 0)
        .filter((e) => e > 0);
    },
    enabled: !!(e > 0 && t),
  };
}
function Vt(e, t, n) {
  let r = i(Bt(e, t, n));
  return r?.isLoading ? null : r.data;
}
function Ht(e, t) {
  return {
    queryKey: [`GetCreatorHomeGetAllListsQuery`, e, t],
    queryFn: async () => {
      let n = J.GetServiceTransport(),
        r = g.Init(de);
      r.Body().set_steamid(new _(e, b.EUNIVERSE, 7, 0).ConvertTo64BitString()),
        r.Body().set_count(100);
      let i = await D.GetLists(n, r);
      return i.BSuccess()
        ? i
            .Body()
            .list_details()
            .filter((e) => t || e.list_state() != 0)
        : null;
    },
    enabled: e > 0,
  };
}
function Ut(e, t) {
  let { data: n, isFetching: r, refetch: a } = i(Ht(e, t));
  return { lists: n, isFetching: r, refetch: a };
}
function Wt(e, t) {
  return {
    queryKey: [`GetCreatorHomeGetListsDetailsQuery`, e, t],
    queryFn: async () => {
      let n = J.GetServiceTransport(),
        r = g.Init(pe);
      r.Body().set_steamid(new _(e, b.EUNIVERSE, 7, 0).ConvertTo64BitString()),
        r.Body().set_listid(t);
      let i = await D.GetListDetails(n, r);
      return i.BSuccess() ? (i.Body().list_details() ?? null) : null;
    },
    enabled: e > 0,
  };
}
var Gt = new WeakSet();
function X(e = ae) {
  if (typeof window > `u` || typeof document > `u` || Gt.has(e)) return;
  let t = oe(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (Gt.add(e), Kt(t) && F(e, t));
}
function Kt(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function Z(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function Q(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var qt = new (class {
  m_queryClient = ae;
  m_boxCacheVersion = s.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    X(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            ye(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        }));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        (this.m_bBumpScheduled = !1),
          n(() => this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1));
      }));
  }
  ReadCache() {
    return this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient;
  }
  AddGroupVanities(e) {
    this.LazyInit(), Kt(e) && F(this.m_queryClient, e);
  }
  BHasClanInfoLoaded(e) {
    return (
      y(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      y(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!R(Q(e), this.ReadCache());
  }
  RegisterClanData(e) {
    this.LazyInit(), F(this.m_queryClient, e);
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = Z(e)),
      y(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : Oe(e, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return this.LazyInit(), ke(e, this.m_queryClient, `store`);
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return this.LazyInit(), ke(e, this.m_queryClient, `group`);
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return this.LazyInit(), B(Q(e), this.m_queryClient);
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? De(e, t) : z(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = z(Z(e), this.ReadCache());
    return t ? _.InitFromClanID(t.clanAccountID, b.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return z(Z(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return R(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return z(Z(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      y(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      R(Q(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = J.GetCreatorHome(e);
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
te(`g_ClanStore`, qt);
function $() {
  let e = c();
  return X(e), e;
}
function Jt(e) {
  $();
  let { data: t, isPending: n } = I(e ? Q(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function Yt(e) {
  let t = $();
  (0, se.useEffect)(() => {
    e &&
      B(Q(e), t).catch((t) =>
        console.error(`Failed to hint load clan info ${e}`, t),
      );
  }, [e, t]);
}
function Xt(e) {
  return $(), Ee(e).data ?? null;
}
function Zt(e, t) {
  if (e.BIsOGGEvent() || e.GetEventType() == 36) return { bVisible: !1 };
  if (
    e.BHasSaleEnabled() ||
    (e.jsondata.clone_from_event_gid && e.jsondata.clone_from_sale_enabled)
  )
    return { bVisible: !0 };
  if (e.clanSteamID.GetAccountID() == V()) return { bVisible: !1 };
  let n = J.GetCreatorHome(e.clanSteamID);
  return n && n.BHasClanAccountFlagSet(32)
    ? { bVisible: !0 }
    : t
      ? { bVisible: !0, bValveOnly: !0 }
      : { bVisible: !1 };
}
function Qt(e, t) {
  return e.BIsOGGEvent()
    ? e.BHasSaleEnabled()
      ? { bVisible: !0 }
      : b.EUNIVERSE == 1 || !t
        ? { bVisible: !1 }
        : e.GetEventType() == 14
          ? { bVisible: !0, bValveOnly: !0 }
          : { bVisible: !1 }
    : { bVisible: !1 };
}
function $t(e) {
  return e.BIsOGGEvent() || e.GetEventType() != 36
    ? { bVisible: !1 }
    : e.BHasSaleEnabled()
      ? { bVisible: !0 }
      : (e.clanSteamID.GetAccountID(), V(), { bVisible: !1 });
}
export {
  V as C,
  Ee as D,
  I as E,
  H as S,
  L as T,
  zt as _,
  Jt as a,
  je as b,
  Ht as c,
  It as d,
  Lt as f,
  J as g,
  Pt as h,
  qt as i,
  Wt as l,
  Rt as m,
  Zt as n,
  Xt as o,
  Ft as p,
  Qt as r,
  Yt as s,
  $t as t,
  Bt as u,
  Ut as v,
  B as w,
  Me as x,
  Vt as y,
};

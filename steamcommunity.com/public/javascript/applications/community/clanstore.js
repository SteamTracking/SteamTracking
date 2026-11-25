/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  Ft as n,
  G as r,
  I as i,
  L as a,
  Pt as o,
  it as s,
  k as ee,
  z as te,
} from "./chunk~01cfc309bf.js";
import {
  $h as c,
  Ah as l,
  Df as u,
  Fd as ne,
  Fh as d,
  Ih as f,
  Jf as re,
  Mh as p,
  Nh as m,
  Ph as h,
  Th as g,
  Tm as _,
  cm as ie,
  gm as ae,
  jh as v,
  kh as y,
  lm as b,
  mm as x,
  nh as S,
  rm as C,
  th as w,
  um as oe,
  wh as se,
  zf as ce,
} from "./main.js";
var le = e(o()),
  T = e(n(), 1),
  ue = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            clanid: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            link_url: { n: 3, br: p.readString, bw: f.writeString },
            link_text: { n: 4, br: p.readString, bw: f.writeString },
            blurb: { n: 5, br: p.readString, bw: f.writeString },
            time_recommended: { n: 6, br: p.readUint32, bw: f.writeUint32 },
            comment_count: { n: 7, br: p.readInt32, bw: f.writeInt32 },
            upvote_count: { n: 8, br: p.readInt32, bw: f.writeInt32 },
            accountid_creator: { n: 9, br: p.readUint32, bw: f.writeUint32 },
            recommendation_state: { n: 10, br: p.readEnum, bw: f.writeEnum },
            received_compensation: { n: 11, br: p.readBool, bw: f.writeBool },
            received_for_free: { n: 12, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  de = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.listid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [10, 12, 13, 14], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            listid: { n: 1, br: p.readUint64String, bw: f.writeUint64String },
            title: { n: 2, br: p.readString, bw: f.writeString },
            blurb: { n: 3, br: p.readString, bw: f.writeString },
            link: { n: 4, br: p.readString, bw: f.writeString },
            list_state: { n: 5, br: p.readEnum, bw: f.writeEnum },
            sort_order: { n: 6, br: p.readUint32, bw: f.writeUint32 },
            time_created: { n: 7, br: p.readUint32, bw: f.writeUint32 },
            time_updated: { n: 8, br: p.readUint32, bw: f.writeUint32 },
            accountid: { n: 9, br: p.readUint32, bw: f.writeUint32 },
            apps: { n: 10, c: fe, r: !0, q: !0 },
            list_type: { n: 11, br: p.readEnum, bw: f.writeEnum },
            title_localization: { n: 12, c: g, r: !0, q: !0 },
            blurb_localization: { n: 13, c: g, r: !0, q: !0 },
            link_localization: { n: 14, c: g, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            list_jsondata: { n: 17, br: p.readString, bw: f.writeString },
            clan_account_id: { n: 18, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  fe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommended_app || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommended_app: { n: 1, c: ue },
            blurb: { n: 2, br: p.readString, bw: f.writeString },
            sort_order: { n: 3, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  pe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            list_state: { n: 2, br: p.readEnum, bw: f.writeEnum },
            start: { n: 3, br: p.readUint32, bw: f.writeUint32 },
            count: { n: 4, br: p.readUint32, bw: f.writeUint32 },
            return_total_only: { n: 5, br: p.readBool, bw: f.writeBool },
            return_metadata_only: { n: 6, br: p.readBool, bw: f.writeBool },
            max_apps: { n: 7, br: p.readInt32, bw: f.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  me = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.list_details || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            list_details: { n: 1, c: de, r: !0, q: !0 },
            total: { n: 2, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  he = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            listid: { n: 2, br: p.readUint64String, bw: f.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  ge = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.list_details || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: de } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  E;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCuration.GetLists#1`, S(pe, t, n), me, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetLists = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, S(he, t, n), ge, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetListDetails = n;
})((E ||= {}));
async function _e(e) {
  return D(
    `${C.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function ve(e) {
  let t = _.InitFromClanID(e, C.EUNIVERSE);
  return D(
    `${C.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function ye(e) {
  return D(
    `${C.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function be(e) {
  return D(
    `${C.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function D(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function O(e) {
  return [`clantoclaninfo`, e];
}
function k(e) {
  return [`apptoclanid`, e];
}
function A(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function xe(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var j = new WeakSet();
function M(e) {
  if (!j.has(e)) {
    j.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var N = new WeakMap();
function P(e) {
  if (!e) return null;
  let t = N.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new _(e.clanSteamIDString)
          : _.InitFromClanID(e.clanAccountID, C.EUNIVERSE),
      }),
      N.set(e, t)),
    t
  );
}
function Se(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function F(e, t) {
  if (!t) return null;
  M(e);
  let n = Se(t);
  return (
    e.setQueryData(O(n.clanAccountID), n),
    n.appid && e.setQueryData(k(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(A(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function I(e, t) {
  for (let n of t) F(e, n);
}
function L(e) {
  let t = s();
  return r(R(e, t));
}
function R(e, t) {
  return (
    M(t),
    {
      queryKey: O(e ?? null),
      queryFn: async () => (e ? F(t, await ve(e)) : null),
      enabled: e !== void 0,
      select: P,
    }
  );
}
function Ce(e, t) {
  return (
    M(t),
    {
      queryKey: k(e),
      queryFn: async () => F(t, await _e(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function we(e, t, n = `group`) {
  return (
    M(t),
    {
      queryKey: A(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(A(e, `group`));
          if (n) return n;
        }
        return (
          F(t, n == `store` ? await be(e) : await ye(e))?.clanAccountID ?? null
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
  let n = s(),
    i = r(we(e, n, t));
  return L(e ? Te(i) : void 0);
}
function z(e, t) {
  if (e) return P(t.getQueryData(O(e))) ?? void 0;
}
function B(e, t) {
  if (e) return z(t.getQueryData(k(e)), t);
}
function De(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = z(t.getQueryData(A(e, n)), t);
    if (r) return r;
  }
}
async function V(e, t) {
  return e ? P(await t.fetchQuery(R(e, t))) : null;
}
async function Oe(e, t) {
  return e ? V(await t.fetchQuery(Ce(e, t)), t) : null;
}
async function ke(e, t, n = `group`) {
  return e ? V(await t.fetchQuery(we(e, t, n)), t) : null;
}
var H = () => (C.EUNIVERSE === 2 ? 2581 : 45267781),
  U = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid_giftee || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: p.readInt32, bw: f.writeInt32 },
            gift_message: { n: 2, c: Ae },
            time_scheduled_send: { n: 3, br: p.readInt32, bw: f.writeInt32 },
            email_giftee: { n: 4, br: p.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  Ae = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gifteename || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: p.readString, bw: f.writeString },
            message: { n: 2, br: p.readString, bw: f.writeString },
            sentiment: { n: 3, br: p.readString, bw: f.writeString },
            signature: { n: 4, br: p.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  je = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount_in_cents || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readInt64String,
              bw: f.writeInt64String,
            },
            currency_code: { n: 2, br: p.readInt32, bw: f.writeInt32 },
            formatted_amount: { n: 3, br: p.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartAmount`;
    }
  },
  Me = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            gidcoupon: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            title: { n: 5, br: p.readString, bw: f.writeString },
            coupon_description: { n: 6, br: p.readString, bw: f.writeString },
            large_icon_url: { n: 7, br: p.readString, bw: f.writeString },
            discount_pct: { n: 8, br: p.readInt32, bw: f.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartCoupon`;
    }
  },
  Ne = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_requester || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  Pe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  Fe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: p.readInt64String, bw: f.writeInt64String },
            currencycode: { n: 2, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  Ie = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            costwhenadded: { n: 2, c: Fe },
            is_gift: { n: 3, br: p.readBool, bw: f.writeBool },
            gidbundle: {
              n: 4,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            quantity: { n: 5, br: p.readUint32, bw: f.writeUint32 },
            gift_info: { n: 6, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  Le = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.walletcredit || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  Re = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            packageid: { n: 3, br: p.readUint32, bw: f.writeUint32 },
            gidcoupon: {
              n: 4,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  ze = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.microtxnappid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  Be = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bundleid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            quantity: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            is_gift: { n: 3, br: p.readBool, bw: f.writeBool },
            gift_info: { n: 4, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  Ve = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reward_id || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: p.readInt32, bw: f.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  He = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidparent || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  Ue = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            gidcoupon: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  We = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidlineitem || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            package_item: { n: 2, c: Ie },
            wallet_credit_item: { n: 3, c: Le },
            coupon_item: { n: 4, c: Re },
            micro_item: { n: 5, c: ze },
            bundle_item: { n: 7, c: Be },
            loyalty_item: { n: 8, c: Ve },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  Ge = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coupons || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: Ue, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  Ke = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  W = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.lineitems || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: We, r: !0, q: !0 },
            treeview: { n: 2, c: He, r: !0, q: !0 },
            potentials: { n: 3, c: Ge },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  qe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            contents: { n: 2, c: W },
            time_created: { n: 3, br: p.readUint32, bw: f.writeUint32 },
            merged_into_account_cart: { n: 4, br: p.readBool, bw: f.writeBool },
            steamid_requester: {
              n: 5,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  Je = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [4], null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            browserid: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            cart_items: { n: 4, c: Ie, r: !0, q: !0 },
            store_country_code: { n: 5, br: p.readString, bw: f.writeString },
            beta_mode: { n: 6, d: !1, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  Ye = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [3], null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            contents: { n: 2, c: W },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  Xe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            quantity: { n: 3, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  Ze = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [3], null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            contents: { n: 2, c: W },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  Qe = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            bundleid: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            browserid: {
              n: 3,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            store_country: { n: 5, br: p.readString, bw: f.writeString },
            quantity: { n: 6, br: p.readUint32, bw: f.writeUint32 },
            beta_mode: { n: 7, d: !1, br: p.readBool, bw: f.writeBool },
            gift_info: { n: 8, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  $e = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
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
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  et = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            gift_info: { n: 3, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  tt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: W } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  nt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
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
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readUint64String,
              pbr: p.readPackedUint64String,
              bw: f.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: p.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  rt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
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
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  it;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, S(Ne, t, n), Pe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      S(Ke, t, n),
      qe,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetShoppingCartContents = n;
  function r(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, S(Je, t, n), Ye, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, S(Xe, t, n), Ze, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, S(Qe, t, n), $e, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, S(et, t, n), tt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, S(nt, t, n), rt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`, `checkout`],
    });
  }
  e.RemoveLineItems = s;
})((it ||= {}));
var at = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            clan_steamid: {
              n: 2,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            relation: { n: 3, br: p.readEnum, bw: f.writeEnum },
            linkname: { n: 4, br: p.readString, bw: f.writeString },
            json: { n: 5, br: p.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  ot = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  st = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            link: { n: 2, c: at },
            remove: { n: 3, d: !1, br: p.readBool, bw: f.writeBool },
            update_json_only: { n: 4, d: !1, br: p.readBool, bw: f.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: p.readBool,
              bw: f.writeBool,
            },
            partner_id: { n: 6, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  ct = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), T.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  lt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: p.readUint32, bw: f.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  ut = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: at, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  dt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_ids || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
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
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  ft = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: ot, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  pt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            listid: { n: 2, br: p.readUint64String, bw: f.writeUint64String },
            ignore_dlc: { n: 3, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  mt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: ht, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  ht = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            sort_order: { n: 2, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  gt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partnerid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: p.readUint32, bw: f.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  _t = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: vt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  vt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readString,
              bw: f.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  yt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, S(st, t, n), ct, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, S(lt, t, n), ut, {
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
      S(dt, t, n),
      ft,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`, `store`, `help`],
      },
    );
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, S(pt, t, n), mt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, S(gt, t, n), _t, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((yt ||= {}));
var G = e(ee()),
  bt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            accept: { n: 2, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  xt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), T.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  St = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image: { n: 1, br: p.readString, bw: f.writeString },
            language: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            from_body: { n: 3, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_Image`;
    }
  },
  Ct = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.background_image || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            background_image: { n: 1, br: p.readString, bw: f.writeString },
            scrim_color: { n: 2, br: p.readString, bw: f.writeString },
            desktop_layout: { n: 3, br: p.readString, bw: f.writeString },
            logo: { n: 4, c: St },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary_CrossPromo`;
    }
  },
  wt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            appid: { n: 4, br: p.readUint32, bw: f.writeUint32 },
            event_type: { n: 5, br: p.readEnum, bw: f.writeEnum },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: p.readString,
              bw: f.writeRepeatedString,
            },
            rtime32_start_time: { n: 7, br: p.readUint32, bw: f.writeUint32 },
            rtime32_end_time: { n: 8, br: p.readUint32, bw: f.writeUint32 },
            rtime32_visibility_start: {
              n: 9,
              br: p.readUint32,
              bw: f.writeUint32,
            },
            rtime32_visibility_end: {
              n: 10,
              br: p.readUint32,
              bw: f.writeUint32,
            },
            event_name: { n: 11, br: p.readString, bw: f.writeString },
            subtitle: { n: 12, br: p.readString, bw: f.writeString },
            summary: { n: 13, br: p.readString, bw: f.writeString },
            capsule_image: { n: 14, c: St },
            store_path: { n: 15, br: p.readString, bw: f.writeString },
            rtime32_post_time: { n: 20, br: p.readUint32, bw: f.writeUint32 },
            cross_promo: { n: 21, c: Ct },
            adult_only_content: { n: 22, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPartnerEventSummary`;
    }
  },
  Tt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [2], null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            events: { n: 2, c: Et, r: !0, q: !0 },
            language: { n: 3, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request`;
    }
  },
  Et = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_accountid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Request_Event`;
    }
  },
  Dt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summaries || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { summaries: { n: 1, c: wt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventSummaries_Response`;
    }
  },
  Ot = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [6, 8, 12, 13, 14], null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            clan_event_gid: {
              n: 2,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            clan_announcement_gid: {
              n: 3,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            count_earlier: { n: 4, d: 1, br: p.readUint32, bw: f.writeUint32 },
            count_later: { n: 5, d: 1, br: p.readUint32, bw: f.writeUint32 },
            required_tags: {
              n: 6,
              r: !0,
              q: !0,
              br: p.readString,
              bw: f.writeRepeatedString,
            },
            require_no_tags: { n: 7, br: p.readBool, bw: f.writeBool },
            language_preference: {
              n: 8,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
            rtime_oldest_date: { n: 9, br: p.readUint32, bw: f.writeUint32 },
            include_old_announcements: {
              n: 10,
              d: !0,
              br: p.readBool,
              bw: f.writeBool,
            },
            include_old_events: {
              n: 11,
              d: !1,
              br: p.readBool,
              bw: f.writeBool,
            },
            exclude_tags: {
              n: 12,
              r: !0,
              q: !0,
              br: p.readString,
              bw: f.writeRepeatedString,
            },
            event_type_filter: {
              n: 13,
              r: !0,
              q: !0,
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: f.writeRepeatedEnum,
            },
            exclude_event_types: {
              n: 14,
              r: !0,
              q: !0,
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: f.writeRepeatedEnum,
            },
            only_summaries: { n: 15, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Request`;
    }
  },
  kt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.event_data || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            event_data: { n: 1, c: se, r: !0, q: !0 },
            more_before: { n: 2, br: p.readBool, bw: f.writeBool },
            more_after: { n: 3, br: p.readBool, bw: f.writeBool },
            clan_is_creator_home: { n: 4, br: p.readBool, bw: f.writeBool },
            clan_is_ogg: { n: 5, br: p.readBool, bw: f.writeBool },
            clan_is_ovg: { n: 6, br: p.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetAdjacentPartnerEvents_Response`;
    }
  },
  At = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  jt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.snippets || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: Mt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  Mt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: p.readFixed64String, bw: f.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            hidden: { n: 3, br: p.readBool, bw: f.writeBool },
            published: { n: 4, br: p.readBool, bw: f.writeBool },
            rtime32_start_time: { n: 5, br: p.readUint32, bw: f.writeUint32 },
            event_name: { n: 6, br: p.readString, bw: f.writeString },
            event_type: { n: 7, br: p.readEnum, bw: f.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  Nt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: Pt, r: !0, q: !0 },
            cursor: { n: 2, br: p.readString, bw: f.writeString },
            count: { n: 3, d: 100, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  Pt = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            start_build_id: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            end_build_id: { n: 3, br: p.readUint32, bw: f.writeUint32 },
            branch: { n: 4, br: p.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  Ft = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.matches || y(e.M()),
        T.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: It, r: !0, q: !0 },
            num_total_results: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            next_cursor: { n: 3, br: p.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  It = class e extends T.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || y(e.M()),
        T.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: f.writeUint32 },
            build_id: { n: 2, br: p.readUint32, bw: f.writeUint32 },
            branch: { n: 3, br: p.readString, bw: f.writeString },
            clan_event_gid: {
              n: 4,
              br: p.readFixed64String,
              bw: f.writeFixed64String,
            },
            clan_account_id: { n: 5, br: p.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= m(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return d(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new T.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new T.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  Lt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, S(bt, t, n), xt, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventSummaries#1`, S(Tt, t, n), Dt, {
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventSummaries = n;
  function r(e, t, n) {
    return e.SendMsg(`Clan.GetAdjacentPartnerEvents#1`, S(Ot, t, n), kt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetAdjacentPartnerEvents = r;
  function i(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      S(At, t, n),
      jt,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = i;
  function a(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, S(Nt, t, n), Ft, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = a;
})((Lt ||= {}));
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
    (i(this), (this.m_clanSteamID = e));
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
          return x.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
        case `franchise`:
          return x.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
      }
      return x.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
    }
    return (
      x.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
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
    let n = x.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
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
    (a.append(`sessionid`, ie()),
      a.append(`clan_account_id`, this.GetClanAccountID().toString()),
      a.append(`accountflags`, JSON.stringify(i)));
    let o = await G.default.post(n, a);
    o &&
      o.status == 200 &&
      o.data.success == 1 &&
      (this.m_clanAccountFlags = r);
  }
};
(u([a], K.prototype, `m_appidList`, void 0),
  u([a], K.prototype, `m_nFollowers`, void 0),
  u([a], K.prototype, `m_clanAccountFlags`, void 0));
var q = class e {
  constructor() {
    i(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = b(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new K(_.InitFromClanID(n, x.EUNIVERSE));
          (r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r));
        });
      let n = b(`creatorhomeforapp`, `application_config`);
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
      let e = b(`loyalty_webapi_token`, `application_config`),
        t = ce(new ae(x.WEBAPI_BASE_URL, e || void 0));
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
      ((t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t));
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: x.LANGUAGE },
      r =
        x.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      i = await G.default.get(r, { params: n, cancelToken: t && t.token });
    return (e.Initialize(i.data), e);
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = x.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await G.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, n) {
    let r = `${x.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      i = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: x.COUNTRY,
        l: x.LANGUAGE,
        origin: self.origin,
      },
      a = [],
      o = await G.default.get(r, { params: i, cancelToken: n.token });
    return (
      o.data.curators &&
        te(() => {
          o.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new K(_.InitFromClanID(e.creator_clan_id, x.EUNIVERSE));
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
(u([a], q.prototype, `m_mapClanToCreatorHome`, void 0),
  u([a], q.prototype, `m_mapAppToCreatorIDList`, void 0),
  u([t], q.prototype, `LazyInit`, null));
var J = new q();
ne(`g_CreatorHomeStore`, J);
function Rt(e) {
  if (!e) return null;
  let t = J.BHasCreatorHomeLoaded(e.clanSteamID)
    ? J.GetCreatorHome(e.clanSteamID)
    : void 0;
  return e.GetSaleURL(t?.GetCreatorHomeURL(`developer`));
}
function Y(e) {
  if (!e) return;
  let t = b(`creator_home_list_info`, `application_config`);
  if (typeof t != `object` || !t || Array.isArray(t)) return;
  let n = t[e];
  if (n && n.title)
    return {
      title: n.title,
      description: n.description?.length ? n.description : void 0,
      imageUrl: n.listtileimage?.length ? n.listtileimage : void 0,
    };
}
function zt(e) {
  return Y(e)?.title;
}
function Bt(e) {
  return Y(e)?.description;
}
function Vt(e) {
  return Y(e)?.imageUrl;
}
function Ht(e) {
  let t = _.InitFromClanID(e, x.EUNIVERSE);
  return {
    queryKey: [`CreatorHome`, e],
    initialData: () => J.GetCreatorHome(t),
    queryFn: async () => {
      let t = _.InitFromClanID(e, x.EUNIVERSE);
      return await J.LoadCreatorHome(t, !0);
    },
  };
}
function Ut(e) {
  let { data: t, isFetching: n, refetch: i } = r(Ht(e));
  return { creatorHome: t, isFetching: n, refetch: i };
}
function Wt(e, t, n) {
  return {
    queryKey: [`GetCreatorHomeListAppsQuery`, e, t, n],
    queryFn: async () => {
      let r = J.GetServiceTransport(),
        i = w.Init(pt);
      (i.Body().set_clan_account_id(e),
        i.Body().set_listid(t),
        n && i.Body().set_ignore_dlc(!0));
      let a = await yt.GetDevPageListApps(r, i);
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
function Gt(e, t, n) {
  let i = r(Wt(e, t, n));
  return i?.isLoading ? null : i.data;
}
function Kt(e, t) {
  return {
    queryKey: [`GetCreatorHomeGetAllListsQuery`, e, t],
    queryFn: async () => {
      let n = J.GetServiceTransport(),
        r = w.Init(pe);
      (r.Body().set_steamid(new _(e, x.EUNIVERSE, 7, 0).ConvertTo64BitString()),
        r.Body().set_count(100));
      let i = await E.GetLists(n, r);
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
function qt(e, t) {
  let { data: n, isFetching: i, refetch: a } = r(Kt(e, t));
  return { lists: n, isFetching: i, refetch: a };
}
function Jt(e, t) {
  return {
    queryKey: [`GetCreatorHomeGetListsDetailsQuery`, e, t],
    queryFn: async () => {
      let n = J.GetServiceTransport(),
        r = w.Init(he);
      (r.Body().set_steamid(new _(e, x.EUNIVERSE, 7, 0).ConvertTo64BitString()),
        r.Body().set_listid(t));
      let i = await E.GetListDetails(n, r);
      return i.BSuccess() ? (i.Body().list_details() ?? null) : null;
    },
    enabled: e > 0,
  };
}
var Yt = new WeakSet();
function X(e = re) {
  if (typeof window > `u` || typeof document > `u` || Yt.has(e)) return;
  let t = oe(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (Yt.add(e), Xt(t) && I(e, t));
}
function Xt(e) {
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
var Zt = new (class {
  m_queryClient = re;
  m_boxCacheVersion = a.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    (X(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            xe(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        })));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        ((this.m_bBumpScheduled = !1),
          te(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          ));
      }));
  }
  ReadCache() {
    return (this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient);
  }
  AddGroupVanities(e) {
    (this.LazyInit(), Xt(e) && I(this.m_queryClient, e));
  }
  BHasClanInfoLoaded(e) {
    return (
      c(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      c(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!z(Q(e), this.ReadCache());
  }
  RegisterClanData(e) {
    (this.LazyInit(), I(this.m_queryClient, e));
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = Z(e)),
      c(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : Oe(e, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return (this.LazyInit(), ke(e, this.m_queryClient, `store`));
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return (this.LazyInit(), ke(e, this.m_queryClient, `group`));
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return (this.LazyInit(), V(Q(e), this.m_queryClient));
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? De(e, t) : B(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = B(Z(e), this.ReadCache());
    return t ? _.InitFromClanID(t.clanAccountID, x.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return B(Z(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return z(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return B(Z(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      c(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      z(Q(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = J.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      x.COMMUNITY_BASE_URL +
      (n.vanity_url
        ? `groups/` + n.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
ne(`g_ClanStore`, Zt);
function $() {
  let e = s();
  return (X(e), e);
}
function Qt(e) {
  $();
  let { data: t, isPending: n } = L(e ? Q(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function $t(e) {
  let t = $();
  (0, le.useEffect)(() => {
    e &&
      V(Q(e), t).catch((t) =>
        console.error(`Failed to hint load clan info ${e}`, t),
      );
  }, [e, t]);
}
function en(e) {
  return ($(), Ee(e).data ?? null);
}
function tn(e, t) {
  if (e.BIsOGGEvent() || e.GetEventType() == 36) return { bVisible: !1 };
  if (
    e.BHasSaleEnabled() ||
    (e.jsondata.clone_from_event_gid && e.jsondata.clone_from_sale_enabled)
  )
    return { bVisible: !0 };
  if (e.clanSteamID.GetAccountID() == H()) return { bVisible: !1 };
  let n = J.GetCreatorHome(e.clanSteamID);
  return n && n.BHasClanAccountFlagSet(32)
    ? { bVisible: !0 }
    : t
      ? { bVisible: !0, bValveOnly: !0 }
      : { bVisible: !1 };
}
function nn(e, t) {
  return e.BIsOGGEvent()
    ? e.BHasSaleEnabled()
      ? { bVisible: !0 }
      : x.EUNIVERSE == 1 || !t
        ? { bVisible: !1 }
        : e.GetEventType() == 14
          ? { bVisible: !0, bValveOnly: !0 }
          : { bVisible: !1 }
    : { bVisible: !1 };
}
function rn(e) {
  return e.BIsOGGEvent() || e.GetEventType() != 36
    ? { bVisible: !1 }
    : e.BHasSaleEnabled()
      ? { bVisible: !0 }
      : (e.clanSteamID.GetAccountID(), H(), { bVisible: !1 });
}
export {
  H as C,
  Ee as D,
  L as E,
  U as S,
  R as T,
  Ut as _,
  Qt as a,
  je as b,
  Kt as c,
  Bt as d,
  Vt as f,
  J as g,
  Rt as h,
  Zt as i,
  Jt as l,
  Ht as m,
  tn as n,
  en as o,
  zt as p,
  nn as r,
  $t as s,
  rn as t,
  Wt as u,
  qt as v,
  V as w,
  Me as x,
  Gt as y,
};

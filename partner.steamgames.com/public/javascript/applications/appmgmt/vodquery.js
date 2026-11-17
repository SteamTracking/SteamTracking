/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  Gt as t,
  Jt as n,
  Kt as r,
  Ut as i,
  W as a,
  Wt as o,
  Xt as s,
  Yt as c,
  Zt as l,
  bt as u,
  qt as d,
  sn as f,
  vt as p,
} from "./chunk~de7f2df91c.js";
import { Pt as m } from "./chunk~25a6634263.js";
import { a as h } from "./chunk~68b7e78d68.js";
import { A as g, aa as _, da as v } from "./chunk~1fa4b8f2ff.js";
import { d as y, i as b } from "./chunk~0a99e05c44.js";
import { t as x } from "./chunk~ede3e357a2.js";
import { i as S, s as C } from "./chunk~2bee5a7d08.js";
var w = f(e(), 1),
  T = f(m(), 1),
  E = `ewL7epZsubk-`,
  D = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`,
  O = p();
function k(e) {
  let { label: t, shown: n, button: r = `Y` } = e;
  return (0, O.jsxs)(`div`, {
    className: (0, T.default)(E, n && `lDd-amB-eCU-`),
    children: [
      r == `X`
        ? (0, O.jsx)(g, { button: `X`, "aria-label": `X` })
        : (0, O.jsx)(`img`, { src: D, alt: `Y` }),
      (0, O.jsx)(`div`, { children: t }),
    ],
  });
}
function A(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function j(e) {
  return A(e)[0]?.event_gid || void 0;
}
function M(e, t) {
  return e
    ? v(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : v(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function N(e, t) {
  let n = _.GetELanguageFallback(t),
    r =
      e.jsondata.localized_sale_cross_promo_logo_image?.findIndex((e) => !!e) ??
      -1;
  return (
    e.GetImageURL(`sale_cross_promo_logo`, t) ||
    e.GetImageURL(`sale_cross_promo_logo`, n) ||
    (r >= 0 ? e.GetImageURL(`sale_cross_promo_logo`, r) : void 0) ||
    e.GetImageURL(`sale_logo`, t) ||
    e.GetImageURL(`sale_logo`, n)
  );
}
function P(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => S(e.section_type) && C(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
function F(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function ee(e, t, n) {
  if (n) return n[P(t, e).nSectionIndex] ?? null;
}
function te(e, t) {
  let n = b(),
    r = h({
      queries: e.map((e) => {
        let r = y(n, e);
        return t ? { ...r, enabled: !1 } : r;
      }),
      combine: ne,
    });
  return (0, w.useMemo)(() => {
    if (t || !r.some((e) => e === void 0))
      return e.filter((e, t) => !F(r[t], !1));
  }, [e, r, t]);
}
function ne(e) {
  return e.map((e) => e.data);
}
function re(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${a.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var I = f(l(), 1),
  ie = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            gameid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            client_instance_id: {
              n: 3,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            title: { n: 4, br: r.readString, bw: s.writeString },
            cellid: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            rtmp_token: {
              n: 6,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: r.readBool, bw: s.writeBool },
            sysid: { n: 9, br: r.readUint32, bw: s.writeUint32 },
            allow_webrtc: { n: 10, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  ae = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: r.readString,
              bw: s.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: r.readString,
              bw: s.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: r.readUint32,
              bw: s.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  oe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  se = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  ce = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            cellid: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            as_rtmp: { n: 3, br: r.readBool, bw: s.writeBool },
            delay_seconds: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            upload_ip_address: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            is_replay: { n: 7, br: r.readBool, bw: s.writeBool },
            sysid: { n: 8, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  L = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_token || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_token: { n: 1, br: r.readString, bw: s.writeString },
            upload_address: { n: 2, br: r.readString, bw: s.writeString },
            broadcast_upload_id: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            enable_replay: { n: 6, br: r.readBool, bw: s.writeBool },
            http_address: { n: 7, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  R = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            upload_token: { n: 2, br: r.readString, bw: s.writeString },
            upload_address: { n: 3, br: r.readString, bw: s.writeString },
            http_address: { n: 4, br: r.readString, bw: s.writeString },
            broadcast_upload_id: {
              n: 5,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            is_rtmp: { n: 7, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  z = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  B = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: r.readUint64String, bw: s.writeUint64String },
            title: { n: 2, br: r.readString, bw: s.writeString },
            num_viewers: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            permission: { n: 4, br: r.readInt32, bw: s.writeInt32 },
            is_rtmp: { n: 5, br: r.readBool, bw: s.writeBool },
            seconds_delay: { n: 6, br: r.readInt32, bw: s.writeInt32 },
            is_publisher: { n: 7, br: r.readBool, bw: s.writeBool },
            thumbnail_url: { n: 8, br: r.readString, bw: s.writeString },
            update_interval: { n: 9, br: r.readInt32, bw: s.writeInt32 },
            is_uploading: { n: 10, br: r.readBool, bw: s.writeBool },
            duration: { n: 11, br: r.readUint32, bw: s.writeUint32 },
            is_replay: { n: 12, br: r.readBool, bw: s.writeBool },
            is_capturing_vod: { n: 13, br: r.readBool, bw: s.writeBool },
            is_store_whitelisted: { n: 14, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  V = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  H = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_url || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_url: { n: 1, br: r.readString, bw: s.writeString },
            update_interval: { n: 2, br: r.readInt32, bw: s.writeInt32 },
            num_viewers: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            duration: { n: 4, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  U = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            client_cell: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            watch_location: { n: 6, br: r.readEnum, bw: s.writeEnum },
            is_webrtc: { n: 7, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  W = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.response || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            response: { n: 1, br: r.readEnum, bw: s.writeEnum },
            mpd_url: { n: 2, br: r.readString, bw: s.writeString },
            broadcast_id: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gameid: { n: 4, br: r.readUint64String, bw: s.writeUint64String },
            title: { n: 5, br: r.readString, bw: s.writeString },
            num_viewers: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            permission: { n: 7, br: r.readInt32, bw: s.writeInt32 },
            is_rtmp: { n: 8, br: r.readBool, bw: s.writeBool },
            seconds_delay: { n: 9, br: r.readInt32, bw: s.writeInt32 },
            viewer_token: {
              n: 10,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: r.readString, bw: s.writeString },
            heartbeat_interval: { n: 12, br: r.readInt32, bw: s.writeInt32 },
            thumbnail_url: { n: 13, br: r.readString, bw: s.writeString },
            is_webrtc: { n: 14, br: r.readBool, bw: s.writeBool },
            webrtc_session_id: {
              n: 15,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: r.readString, bw: s.writeString },
            webrtc_turn_server: { n: 17, br: r.readString, bw: s.writeString },
            is_replay: { n: 18, br: r.readBool, bw: s.writeBool },
            duration: { n: 19, br: r.readInt32, bw: s.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: r.readString,
              bw: s.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  G = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            representation: { n: 4, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  le = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  ue = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            approval_response: { n: 2, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  de = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: r.readBool, bw: s.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  fe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            gameid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            title: { n: 3, br: r.readString, bw: s.writeString },
            game_data_config: { n: 4, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  pe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  me = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            state: { n: 2, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  he = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  ge = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            upload_result: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            too_many_poor_uploads: { n: 4, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  _e = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  ve = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            num_viewers: { n: 2, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  ye = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: r.readString,
              bw: s.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: r.readString,
              bw: s.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  be = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_upload_token || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_upload_token: {
              n: 1,
              br: r.readString,
              bw: s.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: r.readBytes, bw: s.writeBytes },
            thumbnail_width: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            thumbnail_height: { n: 5, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  xe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_upload_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_upload_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            upload_result: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  Se = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  Ce = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  we = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            client_ip: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            client_cell: { n: 4, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  Te = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            view_url_template: { n: 3, br: r.readString, bw: s.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  K = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            message: { n: 2, br: r.readString, bw: s.writeString },
            instance_id: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            language: { n: 4, d: 0, br: r.readUint32, bw: s.writeUint32 },
            country_code: { n: 5, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  Ee = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_name || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            persona_name: { n: 1, br: r.readString, bw: s.writeString },
            in_game: { n: 2, br: r.readBool, bw: s.writeBool },
            result: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            cooldown_time_seconds: { n: 4, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  q = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            flair: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  De = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            chat_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            flair: { n: 3, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  J = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            muted: { n: 3, br: r.readBool, bw: s.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  Oe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  Y = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  ke = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  Ae = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readFixed64String,
              pbr: r.readPackedFixed64String,
              bw: s.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  je = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || i(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: Me, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  Me = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steam_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            persona: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  Ne = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            first_segment: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            num_segments: { n: 4, br: r.readInt32, bw: s.writeInt32 },
            clip_description: { n: 5, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  Pe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  Fe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  Ie = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  Le = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            start_time: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            end_time: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            video_description: { n: 4, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  Re = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  ze = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  Be = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            video_id: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            channel_id: {
              n: 3,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            app_id: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            video_description: { n: 7, br: r.readString, bw: s.writeString },
            start_time: { n: 8, br: r.readUint32, bw: s.writeUint32 },
            length_milliseconds: { n: 9, br: r.readUint32, bw: s.writeUint32 },
            thumbnail_path: { n: 10, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  Ve = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            update_token: { n: 2, br: r.readBool, bw: s.writeBool },
            broadcast_delay: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            app_id: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            required_app_id: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: r.readEnum,
              bw: s.writeEnum,
            },
            broadcast_buffer: { n: 7, br: r.readInt32, bw: s.writeInt32 },
            steamid: {
              n: 8,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: r.readUint32, bw: s.writeUint32 },
            enable_replay: { n: 10, br: r.readBool, bw: s.writeBool },
            is_partner_chat_only: { n: 11, br: r.readBool, bw: s.writeBool },
            wordban_list: { n: 12, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  He = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  Ue = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  We = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            rtmp_host: { n: 2, br: r.readString, bw: s.writeString },
            rtmp_token: { n: 3, br: r.readString, bw: s.writeString },
            broadcast_delay: { n: 4, br: r.readInt32, bw: s.writeInt32 },
            app_id: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            required_app_id: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: r.readEnum,
              bw: s.writeEnum,
            },
            broadcast_buffer: { n: 8, br: r.readInt32, bw: s.writeInt32 },
            steamid: {
              n: 9,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: r.readUint32, bw: s.writeUint32 },
            enable_replay: { n: 11, br: r.readBool, bw: s.writeBool },
            is_partner_chat_only: { n: 12, br: r.readBool, bw: s.writeBool },
            wordban_list: { n: 13, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  Ge = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.row_limit || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            row_limit: { n: 1, d: 100, br: r.readUint32, bw: s.writeUint32 },
            start_time: { n: 2, d: 0, br: r.readUint32, bw: s.writeUint32 },
            upload_id: {
              n: 3,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            steamid: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  Ke = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || i(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: qe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  qe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_result || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_result: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            time_stopped: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            seconds_uploaded: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            max_viewers: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            resolution_x: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            resolution_y: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            avg_bandwidth: { n: 7, br: r.readUint32, bw: s.writeUint32 },
            total_bytes: {
              n: 8,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            app_id: { n: 9, br: r.readUint32, bw: s.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            time_started: { n: 12, br: r.readUint32, bw: s.writeUint32 },
            upload_id: {
              n: 13,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            local_address: { n: 14, br: r.readString, bw: s.writeString },
            remote_address: { n: 15, br: r.readString, bw: s.writeString },
            frames_per_second: { n: 16, br: r.readUint32, bw: s.writeUint32 },
            num_representations: { n: 17, br: r.readUint32, bw: s.writeUint32 },
            app_name: { n: 18, br: r.readString, bw: s.writeString },
            is_replay: { n: 19, br: r.readBool, bw: s.writeBool },
            session_id: {
              n: 20,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  Je = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_id: {
              n: 1,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  Ye = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || i(e.M()),
        I.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: Xe, r: !0, q: !0 },
            country_stats: { n: 2, c: Ze, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  Xe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            num_viewers: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  Ze = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: r.readString, bw: s.writeString },
            num_viewers: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  Qe = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            started: { n: 2, br: r.readBool, bw: s.writeBool },
            offer: { n: 3, br: r.readString, bw: s.writeString },
            resolution_x: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            resolution_y: { n: 5, br: r.readUint32, bw: s.writeUint32 },
            fps: { n: 6, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  $e = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  et = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  tt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  nt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            answer: { n: 3, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  rt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  X = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sdp_mid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sdp_mid: { n: 1, br: r.readString, bw: s.writeString },
            sdp_mline_index: { n: 2, br: r.readInt32, bw: s.writeInt32 },
            candidate: { n: 3, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  it = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            candidate: { n: 2, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  at = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  ot = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            candidate: { n: 3, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  st = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  Z = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            candidate_generation: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  ct = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.candidate_generation || i(e.M()),
        I.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            candidate_generation: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            candidates: { n: 2, c: X, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  lt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  ut = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cellid || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cellid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  dt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.turn_server || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            turn_server: { n: 1, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  ft = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            turn_server: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  pt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  mt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            answer: { n: 3, br: r.readString, bw: s.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  ht = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || i(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            candidate: { n: 3, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return c(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  Q;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, u(ie, t, n), ae, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, u(oe, t, n), se, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, u(ce, t, n), L, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      u(xe, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, u(U, t, n), W, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, u(G, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, u(le, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, u(z, t, n), B, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, u(V, t, n), H, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function d(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, u(ue, t, n), de, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = d;
  function f(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      u(fe, t, n),
      pe,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = f;
  function p(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      u(Ce, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = p;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, u(we, t, n), Te, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = m;
  function h(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, u(K, t, n), Ee, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.PostChatMessage = h;
  function g(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, u(q, t, n), De, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.UpdateChatMessageFlair = g;
  function _(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, u(J, t, n), Oe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.MuteBroadcastChatUser = _;
  function v(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, u(Y, t, n), ke, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.RemoveUserChatText = v;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, u(Ae, t, n), je, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = y;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, u(Ne, t, n), Pe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, u(Fe, t, n), Ie, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = x;
  function S(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, u(Le, t, n), Re, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = S;
  function C(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, u(ze, t, n), Be, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = C;
  function w(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, u(Ve, t, n), He, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = w;
  function T(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, u(Ue, t, n), We, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = T;
  function E(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      u(ft, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = E;
  function D(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, u(Qe, t, n), $e, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = D;
  function O(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, u(et, t, n), tt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = O;
  function k(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, u(nt, t, n), rt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = k;
  function A(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, u(ut, t, n), dt, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = A;
  function j(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, u(it, t, n), at, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = j;
  function M(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, u(ot, t, n), st, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = M;
  function N(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, u(Z, t, n), ct, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = N;
  function P(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, u(Ge, t, n), Ke, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = P;
  function F(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, u(Je, t, n), Ye, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = F;
})((Q ||= {}));
var gt;
(function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: me,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: he,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: R,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: ge,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: _e,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: Se,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: ve,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: ye,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: be,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: lt,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: pt,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: mt,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: ht,
    }));
})((gt ||= {}));
async function _t(e, t) {
  let n = a.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success != 1 && i?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + i?.success);
  return { appid: e, video_url: i.video_url, bookmark: i.bookmark };
}
function vt(e) {
  return [`video`, `vod`, e];
}
function $(e) {
  return { queryKey: vt(e), queryFn: ({ signal: t }) => _t(e, t), retry: !1 };
}
function yt(e) {
  let { data: t, isPending: n } = x($(e));
  return { vodInfo: t, bLoading: n };
}
export {
  K as a,
  re as c,
  P as d,
  j as f,
  k as h,
  J as i,
  ee as l,
  M as m,
  yt as n,
  Y as o,
  N as p,
  Q as r,
  q as s,
  $ as t,
  te as u,
};

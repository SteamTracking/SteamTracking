/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  K as r,
  Kt as i,
  U as a,
  Ut as o,
  Wt as s,
  Xt as c,
  Yt as l,
  _t as ee,
  en as u,
  kt as d,
  nt as f,
  on as p,
  qt as m,
  yt as h,
} from "./mobx.esm.js";
import { Ut as te } from "./src.js";
import {
  Ya as ne,
  _a as g,
  ga as _,
  ka as v,
  oa as y,
  xa as b,
} from "./dialogs.js";
import { h as x, w as re } from "./storebrowsequerycontext.js";
import { B as ie, I as S, L as C, R as w, V as T } from "./react-router.js";
import { t as ae } from "./useQuery.js";
import { t as E } from "./cookies.client.js";
var D = p(d(), 1),
  O = D.createContext({ eAdultOnlyMediaBehavior: `masked` }),
  oe = {
    name: `forceallages`,
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function k() {
  return D.useMemo(() => {
    let e = E(oe);
    return !!(
      (e && e !== `0`) ||
      (a.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function A() {
  let { eAdultOnlyMediaBehavior: e } = D.useContext(O),
    t = le();
  return k() ||
    (e == `masked` &&
      (r.excluded_content_descriptors.includes(4) ||
        r.excluded_content_descriptors.includes(3)))
    ? `blocked`
    : e == `masked` && t
      ? `allowed`
      : e;
}
function j() {
  return A() != `allowed`;
}
var se = {
  name: `bDisableAOWarning`,
  options: { path: `/` },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
2 * ne.PerDay;
function M() {
  let e = E(se),
    t = e ? parseInt(e) : 0;
  return t == 0 ? null : t;
}
function ce() {
  return {
    queryKey: [`AOWarningCookie`],
    queryFn: () => M(),
    placeholderData: () => M(),
    staleTime: 0,
  };
}
function le() {
  let { data: e } = ae(ce());
  return e && e > Date.now() / 1e3;
}
function ue(e) {
  let t = A() == `blocked` && !!e,
    { data: n } = x(t ? { appid: e } : void 0);
  return t
    ? !n ||
        n.content_descriptorids.includes(3) ||
        n.content_descriptorids.includes(4)
    : !1;
}
function de(e) {
  let { eAdultOnlyMediaBehavior: t } = D.useContext(O),
    n = k(),
    r = t == `allowed` && !n,
    { data: i } = x(r ? void 0 : e);
  return r || !e ? !1 : !i || !!i.content_descriptorids?.includes(3);
}
var N = p(c(), 1);
ee();
function P(e, t) {
  let { data: n } = re(e),
    r = j();
  return D.useMemo(() => {
    if (n === void 0) return;
    if (n === null) return null;
    let e = [...(n.highlights || []), ...(n.other_trailers || [])];
    return r && !t ? e.filter((e) => !!e.all_ages) : e;
  }, [n, r, t]);
}
function fe(e) {
  let t = P(e);
  if (t && t.length != 0) return t[0];
}
function pe(e) {
  return `${a.STORE_ITEM_BASE_URL}${e.trailer_url_format.replace("${FILENAME}", e.screenshot_full ?? e.screenshot_medium ?? ``)}`;
}
function me(e, t) {
  return `${a.VIDEO_CDN_URL}store_trailers/${e.trailer_url_format.replace("${FILENAME}", t)}`;
}
function F(e, t) {
  return `${a.VIDEO_CDN_URL}store_trailers/${t}`;
}
function I(e) {
  let t =
    typeof e.captions_manifest == `function`
      ? e.captions_manifest()
      : e.captions_manifest;
  if (!t) return;
  let n = a,
    r;
  if (
    (n.MEDIA_CDN_URL
      ? (r = n.MEDIA_CDN_URL)
      : n.CDN_HOST_MEDIA && (r = n.CDN_HOST_MEDIA),
    r)
  )
    return `${r}/${t}`;
}
function he(e) {
  let t = [];
  e.adaptive_trailers &&
    (t = e.adaptive_trailers
      .filter(
        (e) =>
          (e.encoding == `dash_h264` || e.encoding == `dash_av1`) && e.cdn_path,
      )
      .map((t) => F(e, t.cdn_path || ``)));
  let n = [];
  return (
    e.adaptive_trailers &&
      (n = e.adaptive_trailers
        .filter((e) => e.encoding == `hls_h264` && e.cdn_path)
        .map((t) => F(e, t.cdn_path || ``))),
    { rgDashTrailers: t, rgHlsTrailers: n }
  );
}
function L(e) {
  return R(
    e.coming_soon_display,
    e.steam_release_date,
    e.custom_release_date_message,
  );
}
function R(e, t, n, r) {
  switch (e) {
    case `date_full`:
      return v(t);
    case `date_month`:
      return _(new Date(t * 1e3));
    case `date_quarter`:
      return g(new Date(t * 1e3), r);
    case `date_year`:
      return b(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || y(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || y(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function ge(e, t) {
  e.Body().set_context(z(t));
}
function z(e) {
  let t = new C();
  return e || t.set_country_code(f.COUNTRY), t.set_language(f.LANGUAGE), t;
}
function _e(e, t) {
  e.Body().set_data_request(w.fromObject(t));
}
var B = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            title: { n: 2, br: e.readString, bw: l.writeString },
            type: { n: 3, br: e.readEnum, bw: l.writeEnum },
            visibility: { n: 4, br: e.readEnum, bw: l.writeEnum },
            priority: { n: 5, br: e.readUint32, bw: l.writeUint32 },
            association_type: { n: 6, br: e.readEnum, bw: l.writeEnum },
            associated_id: { n: 7, br: e.readUint32, bw: l.writeUint32 },
            associated_name: { n: 8, br: e.readString, bw: l.writeString },
            start_date: { n: 9, br: e.readUint32, bw: l.writeUint32 },
            end_date: { n: 10, br: e.readUint32, bw: l.writeUint32 },
            country_allow: { n: 11, br: e.readString, bw: l.writeString },
            country_deny: { n: 12, br: e.readString, bw: l.writeString },
            ownership_restrictions_overridden: {
              n: 13,
              br: e.readBool,
              bw: l.writeBool,
            },
            must_own_appid: { n: 14, br: e.readUint32, bw: l.writeUint32 },
            must_not_own_appid: { n: 15, br: e.readUint32, bw: l.writeUint32 },
            must_own_packageid: { n: 16, br: e.readUint32, bw: l.writeUint32 },
            must_not_own_packageid: {
              n: 17,
              br: e.readUint32,
              bw: l.writeUint32,
            },
            must_have_launched_appid: {
              n: 18,
              br: e.readUint32,
              bw: l.writeUint32,
            },
            additional_restrictions: {
              n: 19,
              br: e.readString,
              bw: l.writeString,
            },
            template_type: { n: 20, br: e.readString, bw: l.writeString },
            template_vars: { n: 21, br: e.readString, bw: l.writeString },
            flags: { n: 22, br: e.readUint32, bw: l.writeUint32 },
            creator_name: { n: 23, br: e.readString, bw: l.writeString },
            template_vars_json: { n: 24, br: e.readString, bw: l.writeString },
            additional_restrictions_json: {
              n: 25,
              br: e.readString,
              bw: l.writeString,
            },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessageProto`;
    }
  },
  V = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            title: { n: 2, br: e.readString, bw: l.writeString },
            type: { n: 3, br: e.readEnum, bw: l.writeEnum },
            associated_item_id: { n: 4, c: T },
            associated_item: { n: 5, c: ie },
            associated_name: { n: 6, br: e.readString, bw: l.writeString },
            template_type: { n: 10, br: e.readString, bw: l.writeString },
            template_vars_json: { n: 11, br: e.readString, bw: l.writeString },
            recommended_items: { n: 12, c: T, r: !0, q: !0 },
            sale_item_count: { n: 13, br: e.readUint32, bw: l.writeUint32 },
            recommended_items_include_dlc: {
              n: 14,
              br: e.readBool,
              bw: l.writeBool,
            },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CDisplayMarketingMessage`;
    }
  },
  ve = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.country || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            country: { n: 1, br: e.readString, bw: l.writeString },
            anonymous_user: { n: 2, br: e.readBool, bw: l.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetActiveMarketingMessages_Request`;
    }
  },
  ye = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.messages || t(r.M()),
        N.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            messages: { n: 1, c: B, r: !0, q: !0 },
            time_next_message_age: {
              n: 2,
              br: e.readUint32,
              bw: l.writeUint32,
            },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetActiveMarketingMessages_Response`;
    }
  },
  H = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.start_past_days || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            start_past_days: { n: 1, br: e.readUint32, bw: l.writeUint32 },
            upto_past_days: { n: 2, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPastMarketingMessages_Request`;
    }
  },
  be = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.messages || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPastMarketingMessages_Response`;
    }
  },
  xe = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.include_seen_messages || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            include_seen_messages: { n: 1, br: e.readBool, bw: l.writeBool },
            country_code: { n: 2, br: e.readString, bw: l.writeString },
            elanguage: { n: 3, br: e.readInt32, bw: l.writeInt32 },
            operating_system: { n: 4, br: e.readInt32, bw: l.writeInt32 },
            client_package_version: { n: 5, br: e.readInt32, bw: l.writeInt32 },
            context: { n: 6, c: C },
            data_request: { n: 7, c: w },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Request`;
    }
  },
  Se = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.messages || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: Ce, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Response`;
    }
  },
  Ce = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.already_seen || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            already_seen: { n: 1, br: e.readBool, bw: l.writeBool },
            message: { n: 2, c: V },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser`;
    }
  },
  we = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.country_code || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            country_code: { n: 2, br: e.readString, bw: l.writeString },
            elanguage: { n: 3, br: e.readInt32, bw: l.writeInt32 },
            operating_system: { n: 4, br: e.readInt32, bw: l.writeInt32 },
            client_package_version: { n: 5, br: e.readInt32, bw: l.writeInt32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Request`;
    }
  },
  Te = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.has_pending_messages || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            has_pending_messages: { n: 1, br: e.readBool, bw: l.writeBool },
            pending_message_count: { n: 2, br: e.readInt32, bw: l.writeInt32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Response`;
    }
  },
  U = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            context: { n: 2, c: C },
            data_request: { n: 3, c: w },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetDisplayMarketingMessage_Request`;
    }
  },
  W = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.message || t(e.M()),
        N.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { message: { n: 1, c: V } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetDisplayMarketingMessage_Response`;
    }
  },
  Ee = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            display_index: { n: 2, d: 0, br: e.readUint32, bw: l.writeUint32 },
            template_type: { n: 3, d: 0, br: e.readEnum, bw: l.writeEnum },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_MarkMessageSeen_Notification`;
    }
  },
  De = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            display_index: { n: 2, d: 0, br: e.readUint32, bw: l.writeUint32 },
            template_type: { n: 3, d: 0, br: e.readEnum, bw: l.writeEnum },
            click_location: { n: 4, d: 0, br: e.readEnum, bw: l.writeEnum },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_MarkMessageClicked_Notification`;
    }
  },
  Oe = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessage_Request`;
    }
  },
  ke = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.message || t(e.M()),
        N.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { message: { n: 1, c: B } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessage_Response`;
    }
  },
  G = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.lookup_type || t(r.M()),
        N.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            lookup_type: { n: 1, br: e.readEnum, bw: l.writeEnum },
            gid: { n: 2, br: e.readFixed64String, bw: l.writeFixed64String },
            message_type: { n: 3, br: e.readEnum, bw: l.writeEnum },
            gidlist: {
              n: 4,
              r: !0,
              q: !0,
              br: e.readFixed64String,
              pbr: e.readPackedFixed64String,
              bw: l.writeRepeatedFixed64String,
            },
            title: { n: 5, br: e.readString, bw: l.writeString },
            associated_id: { n: 6, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_FindMarketingMessages_Request`;
    }
  },
  Ae = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.messages || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_FindMarketingMessages_Response`;
    }
  },
  K = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.message || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            message: { n: 1, c: B },
            from_json: { n: 2, br: e.readBool, bw: l.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_CreateMarketingMessage_Request`;
    }
  },
  je = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_CreateMarketingMessage_Response`;
    }
  },
  q = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            message: { n: 2, c: B },
            from_json: { n: 3, br: e.readBool, bw: l.writeBool },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_UpdateMarketingMessage_Request`;
    }
  },
  Me = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), N.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_UpdateMarketingMessage_Response`;
    }
  },
  J = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DeleteMarketingMessage_Request`;
    }
  },
  Ne = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), N.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_DeleteMarketingMessage_Response`;
    }
  },
  Y = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageViewerStats_Request`;
    }
  },
  X = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.rt_time_hour || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            rt_time_hour: { n: 1, br: e.readUint32, bw: l.writeUint32 },
            seen_count: { n: 2, br: e.readUint32, bw: l.writeUint32 },
            template_type: { n: 3, br: e.readEnum, bw: l.writeEnum },
            display_index: { n: 4, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessageHourlyStats`;
    }
  },
  Pe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.stats || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: X, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageViewerStats_Response`;
    }
  },
  Z = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.rt_start_time || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            rt_start_time: { n: 1, br: e.readUint32, bw: l.writeUint32 },
            rt_end_time: { n: 2, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request`;
    }
  },
  Q = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.rt_time_hour || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            rt_time_hour: { n: 1, br: e.readUint32, bw: l.writeUint32 },
            clicked_count: { n: 2, br: e.readUint32, bw: l.writeUint32 },
            display_index: { n: 3, br: e.readUint32, bw: l.writeUint32 },
            template_type: { n: 4, br: e.readEnum, bw: l.writeEnum },
            click_location: { n: 5, br: e.readEnum, bw: l.writeEnum },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessageClickedHourlyStats`;
    }
  },
  Fe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.stats || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: X, r: !0, q: !0 },
            clicked_stats: { n: 2, c: Q, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response`;
    }
  },
  Ie = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageClickedStats_Request`;
    }
  },
  Le = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.stats || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: Q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetMarketingMessageClickedStats_Response`;
    }
  },
  Re = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.partnerid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: { partnerid: { n: 1, br: e.readUint32, bw: l.writeUint32 } },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Request`;
    }
  },
  ze = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.messages || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: V, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Response`;
    }
  },
  Be = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            partnerid: { n: 2, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_PartnerPublishMessage_Request`;
    }
  },
  Ve = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), N.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_PartnerPublishMessage_Response`;
    }
  },
  He = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.gid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            gid: { n: 1, br: e.readFixed64String, bw: l.writeFixed64String },
            partnerid: { n: 2, br: e.readUint32, bw: l.writeUint32 },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerMessagePreview_Request`;
    }
  },
  Ue = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.message || t(e.M()),
        N.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { message: { n: 1, c: B } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessages_GetPartnerMessagePreview_Response`;
    }
  },
  We = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appids || t(r.M()),
        N.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForApps_Request`;
    }
  },
  Ge = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.messages || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForApps_Response`;
    }
  },
  Ke = class r extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.partnerid || t(r.M()),
        N.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: { partnerid: { n: 1, br: e.readUint32, bw: l.writeUint32 } },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return (r.sm_mbf ||= i(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return n(r.M(), e, t);
    }
    static fromObject(e) {
      return s(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new N.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      m(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForPartner_Request`;
    }
  },
  qe = class e extends N.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.messages || t(e.M()),
        N.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { messages: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new N.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return o(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      m(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new N.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMarketingMessage_GetMarketingMessagesForPartner_Response`;
    }
  },
  Je;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetActiveMarketingMessages#1`,
      h(ve, t, n),
      ye,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetActiveMarketingMessages = t;
  function n(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetPastMarketingMessages#1`,
      h(H, t, n),
      be,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetPastMarketingMessages = n;
  function r(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesForUser#1`,
      h(xe, t, n),
      Se,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessagesForUser = r;
  function i(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.DoesUserHavePendingMarketingMessages#1`,
      h(we, t, n),
      Te,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.DoesUserHavePendingMarketingMessages = i;
  function a(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessage#1`,
      h(U, t, n),
      W,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetDisplayMarketingMessage = a;
  function o(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageForUser#1`,
      h(U, t, n),
      W,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetDisplayMarketingMessageForUser = o;
  function s(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageAdmin#1`,
      h(U, t, n),
      W,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetDisplayMarketingMessageAdmin = s;
  function c(e, t) {
    return e.SendNotification(`MarketingMessages.MarkMessageSeen#1`, h(Ee, t), {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.MarkMessageSeen = c;
  function l(e, t) {
    return e.SendNotification(
      `MarketingMessages.MarkMessageClicked#1`,
      h(De, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.MarkMessageClicked = l;
  function ee(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessage#1`,
      h(Oe, t, n),
      ke,
      { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetMarketingMessage = ee;
  function u(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.CreateMarketingMessage#1`,
      h(K, t, n),
      je,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CreateMarketingMessage = u;
  function d(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.UpdateMarketingMessage#1`,
      h(q, t, n),
      Me,
      { ePrivilege: 5, rgBrowserAPISites: [`partner`] },
    );
  }
  e.UpdateMarketingMessage = d;
  function f(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.DeleteMarketingMessage#1`,
      h(J, t, n),
      Ne,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteMarketingMessage = f;
  function p(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.FindMarketingMessages#1`,
      h(G, t, n),
      Ae,
      { ePrivilege: 5, rgBrowserAPISites: [`partner`] },
    );
  }
  e.FindMarketingMessages = p;
  function m(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessageViewerStats#1`,
      h(Y, t, n),
      Pe,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessageViewerStats = m;
  function te(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesViewerRangeStats#1`,
      h(Z, t, n),
      Fe,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessagesViewerRangeStats = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessageClickedStats#1`,
      h(Ie, t, n),
      Le,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetMarketingMessageClickedStats = ne;
  function g(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetPartnerReadyToPublishMessages#1`,
      h(Re, t, n),
      ze,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetPartnerReadyToPublishMessages = g;
  function _(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.PublishPartnerMessage#1`,
      h(Be, t, n),
      Ve,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.PublishPartnerMessage = _;
  function v(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetPartnerMessagePreview#1`,
      h(He, t, n),
      Ue,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetPartnerMessagePreview = v;
  function y(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesForPartner#1`,
      h(Ke, t, n),
      qe,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetMarketingMessagesForPartner = y;
  function b(e, t, n) {
    return e.SendMsg(
      `MarketingMessages.GetMarketingMessagesForApps#1`,
      h(We, t, n),
      Ge,
      { ePrivilege: 4 },
    );
  }
  e.GetMarketingMessagesForApps = b;
})((Je ||= {}));
var Ye = [`app`, `sub`, `bundle`];
function Xe(e) {
  return e == `app` ? 0 : e == `sub` ? 1 : 2;
}
function Ze(e) {
  return Ye.includes(e);
}
function Qe(e, t = -1) {
  return e?.appid
    ? 0
    : e?.packageid
      ? 1
      : e?.bundleid
        ? 2
        : e?.creatorid
          ? 5
          : e?.hubcategoryid
            ? 6
            : e?.tagid
              ? 4
              : t;
}
function $e(e) {
  switch (e) {
    case 0:
      return `app`;
    case 2:
      return `bundle`;
    case 1:
      return `package`;
    case 3:
      return `mtx`;
  }
  return `invalid`;
}
function et(e) {
  switch (e) {
    case `sub`:
      return 1;
    case `bundle`:
      return 2;
    default:
      return 0;
  }
}
function tt(e) {
  switch (e) {
    case 2:
      return `bundle`;
    case 1:
      return `sub`;
    default:
      return `app`;
  }
}
function nt(e, t, n) {
  return e
    ? { id: e, item_type: `app` }
    : t
      ? { id: t, item_type: `sub` }
      : { id: n, item_type: `bundle` };
}
function rt(e) {
  return e?.item_type == `app`
    ? { appid: e.id }
    : e?.item_type == `sub`
      ? { packageid: e.id }
      : e?.item_type == `bundle`
        ? { bundleid: e.id }
        : null;
}
function it(e) {
  return e?.appid
    ? { item_type: `app`, id: e.appid }
    : e?.packageid
      ? { item_type: `sub`, id: e.packageid }
      : e?.bundleid
        ? { item_type: `bundle`, id: e.bundleid }
        : null;
}
function at(e, t) {
  return t == 0
    ? { id: e, item_type: `app` }
    : t == 1
      ? { id: e, item_type: `sub` }
      : t == 2
        ? { id: e, item_type: `bundle` }
        : (console.error(
            `ConvertEStoreItemTypeToStoreItemKey unexpected item type: `,
            t,
          ),
          { id: 0, item_type: `app` });
}
function ot(e, t) {
  return t == 0
    ? { appid: e }
    : t == 1
      ? { packageid: e }
      : t == 2
        ? { bundleid: e }
        : t == 4
          ? { tagid: e }
          : t == 5
            ? { creatorid: e }
            : t == 6
              ? { hubcategoryid: e }
              : null;
}
function st(e) {
  return e?.appid
    ? `a` + e.appid
    : e?.packageid
      ? `p` + e.packageid
      : e?.bundleid
        ? `b` + e.bundleid
        : e?.creatorid
          ? `c` + e.creatorid
          : e?.hubcategoryid
            ? `h` + e.hubcategoryid
            : e?.tagid
              ? `t` + e.tagid
              : `unknown0`;
}
function ct(e, t) {
  switch (t) {
    case 0:
      return `a` + e;
    case 1:
      return `p` + e;
    case 2:
      return `b` + e;
  }
  return `unknown0`;
}
function lt(e) {
  return e?.appid
    ? e.appid
    : e?.packageid
      ? e.packageid
      : e?.bundleid
        ? e.bundleid
        : e?.hubcategoryid
          ? e.hubcategoryid
          : e?.creatorid
            ? e.creatorid
            : e?.tagid
              ? e.tagid
              : 0;
}
function ut(e) {
  return e?.appid
    ? 0
    : e?.packageid
      ? 1
      : e?.bundleid
        ? 2
        : e?.hubcategoryid
          ? 6
          : e?.creatorid
            ? 5
            : e?.tagid
              ? 4
              : 0;
}
function dt(e) {
  return e?.item_type == `app`
    ? 0
    : e?.item_type == `sub`
      ? 1
      : e?.item_type == `bundle`
        ? 2
        : -1;
}
function ft(e) {
  let t = Number.parseInt(e.substring(1));
  switch (e.charAt(0)) {
    case `a`:
      return { appid: t };
    case `p`:
      return { packageid: t };
    default:
      return { bundleid: t };
  }
}
function pt(e) {
  return e == `application` ? 0 : e == `bundle` ? 2 : e == `package` ? 1 : -1;
}
function mt(e) {
  return e == 0 ? `application` : e == 1 ? `package` : e == 2 ? `bundle` : null;
}
function ht(e) {
  return e == 1 ? 0 : e == 5 ? 2 : e == 2 ? 1 : -1;
}
function gt(e) {
  return e == 0 ? 1 : e == 1 ? 2 : e == 2 ? 5 : null;
}
var _t = class e {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_rgOptInRegistrationTags;
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = { include_tag_count: 0 };
  m_strInternalName;
  m_rgLinks;
  m_userFilterFailure;
  m_strFullDescriptionBBCode;
  constructor(e, t) {
    (this.m_eItemType = e.item_type()),
      (this.m_unID = e.id()),
      (this.m_bVisible = !!e.visible()),
      (this.m_strName = e.name()),
      (this.m_strStoreURLPath = e.store_url_path()),
      (this.m_unAppID = e.appid()),
      (this.m_eAppType = e.type()),
      (this.m_rgIncludedAppTypes = e.included_types()),
      (this.m_rgIncludedAppIDs = e.included_appids()),
      (this.m_bIsFree = !!e.is_free()),
      (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
      (this.m_bIsComingSoon =
        !!e.is_coming_soon() || !!e.release()?.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!e.is_early_access()),
      (this.m_RelatedItems = e.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = e.content_descriptorids()),
      (this.m_StoreCategories = e.categories().toObject()),
      (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = e.store_url_path_override()),
      (this.m_freeWeekend = e.free_weekend()?.toObject()),
      (this.m_strInternalName = e.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
          ? e.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(e, t);
  }
  MergeData(e, t) {
    t.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new vt(e.assets(), e.id())),
      (this.m_DataRequested.include_assets = !0)),
      t.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new vt(
          e.assets_without_overrides(),
          e.id(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      t.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = e.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      t.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = e.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      t.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = e
          .purchase_options()
          .map((e) => e.toObject())),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      t.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new xt(e.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      t.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new yt(e.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      t.include_tag_count &&
        t.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < t.include_tag_count &&
        ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          t.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      t.include_optin_registration_tags &&
        !this.m_rgOptInRegistrationTags &&
        ((this.m_rgOptInRegistrationTags = e
          .optin_registration_tags()
          .map((e) => e.toObject())),
        (this.m_DataRequested.include_optin_registration_tags = !0)),
      t.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = e.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      t.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = e.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      t.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = e
          .supported_languages()
          .map((e) => e.toObject())),
        (this.m_DataRequested.include_supported_languages = !0)),
      t.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = e.links().map((e) => e.toObject())),
        (this.m_DataRequested.include_links = !0)),
      t.apply_user_filters &&
        !this.m_userFilterFailure &&
        ((this.m_userFilterFailure = e.user_filter_failure()?.toObject()),
        (this.m_DataRequested.apply_user_filters = !0)),
      t.include_full_description &&
        !this.m_strFullDescriptionBBCode &&
        ((this.m_strFullDescriptionBBCode = e.full_description_bbcode()),
        (this.m_DataRequested.include_full_description = !0));
  }
  static BDataRequestContainsOtherDataRequest(e, t) {
    return !!(
      (!t.include_assets || e.include_assets) &&
      (!t.include_assets_without_overrides ||
        e.include_assets_without_overrides) &&
      (!t.include_release || e.include_release) &&
      (!t.include_platforms || e.include_platforms) &&
      (!t.include_all_purchase_options || e.include_all_purchase_options) &&
      (!t.include_screenshots || e.include_screenshots) &&
      (!t.include_trailers || e.include_trailers) &&
      (!t.include_ratings || e.include_ratings) &&
      (!t.include_tag_count ||
        (e.include_tag_count || 0) >= t.include_tag_count) &&
      (!t.include_reviews || e.include_reviews) &&
      (!t.include_basic_info || e.include_basic_info) &&
      (!t.include_supported_languages || e.include_supported_languages) &&
      (!t.include_full_description || e.include_full_description) &&
      (!t.include_links || e.include_links) &&
      (!t.apply_user_filters || e.apply_user_filters) &&
      (!t.include_optin_registration_tags || e.include_optin_registration_tags)
    );
  }
  BContainDataRequest(t) {
    return e.BDataRequestContainsOtherDataRequest(this.m_DataRequested, t);
  }
  BCheckDataRequestIncluded(e) {}
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + `_` + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(e = !1) {
    return e && this.HasDemoStandaloneStorePage()
      ? f.STORE_BASE_URL + `app/` + this.GetDemoStandaloneStorePageAppIDs()[0]
      : f.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? f.COMMUNITY_BASE_URL + `app/` + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? f.COMMUNITY_BASE_URL + `app/` + this.GetAppID() + `/discussions/`
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return (
      this.GetStoreItemType() === 0 &&
      this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
    );
  }
  GetSalePageVanityURL() {
    let e = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((e = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          ``,
        )),
        e.endsWith(`/`) && (e = e.replace(`/`, ``))),
      e
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let e = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= e &&
      e <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(e) {
    return this.m_ContentDescriptorIDs?.includes(e);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(e) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
      this.GetStoreCategories_Features().find((t) => e === t) ||
      this.GetStoreCategories_Controller().find((t) => e === t)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetFilteredReviewSummaryLanguage() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_language_specific
    );
  }
  GetFullDescriptionBBCode() {
    return (
      this.BCheckDataRequestIncluded({ include_full_description: !0 }),
      this.m_strFullDescriptionBBCode
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.short_description ?? ``
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.developers
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.franchises
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({ include_basic_info: !0 });
    let e =
      this.m_BasicInfo?.publishers
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? [];
    return e?.length > 0 ? e : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo
        ? $([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? $(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? $(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? $(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTagIDs
    );
  }
  GetOptInRegistrationTagValues(e) {
    return (
      this.BCheckDataRequestIncluded({ include_optin_registration_tags: !0 }),
      this.m_rgOptInRegistrationTags?.find((t) => t.optin_name === e)?.values ??
        []
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({ include_assets: !0 }), this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({ include_assets_without_overrides: !0 }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({ include_release: !0 });
    let e = this.m_ReleaseInfo?.original_steam_release_date;
    return (e ||= this.GetReleaseDateRTime()), e;
  }
  GetReleaseDateRTime(e = !1) {
    if (
      (this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.m_ReleaseInfo?.is_coming_soon && !e)
    )
      return 0;
    let t = this.m_ReleaseInfo?.steam_release_date;
    return (t ||= this.m_ReleaseInfo?.original_release_date), t;
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display) return L(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let e = this.m_ReleaseInfo?.steam_release_date;
      return e
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? _(new Date(e * 1e3))
          : v(e)
        : ``;
    }
    let e = this.GetReleaseDateRTime();
    return e ? v(e) : ``;
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? [`text_tba`, `text_comingsoon`].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BLimitedLaunchActive() {
    return this.m_ReleaseInfo?.limited_launch_active;
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({ include_platforms: !0 }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({ include_all_purchase_options: !0 }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetScreenshots(!0).length > 0;
  }
  GetScreenshots(e) {
    return (
      this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
      this.m_Screenshots
        ? e
          ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
          : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
        : []
    );
  }
  BIsAgeSafeScreenshot(e) {
    return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(e);
  }
  BHasTrailers(e) {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      this.m_Trailers?.BHasTrailers(e)
    );
  }
  BHasHighlightTrailers(e) {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      (this.m_Trailers?.GetHighlightTrailers(e)?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }), this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(e) {
    return (
      this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
      this.m_rgSupportedLanguages?.some(
        (t) => t.elanguage == e && (t.supported || t.subtitles || t.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
      this.m_rgSupportedLanguages
        ?.filter((e) => e.supported || e.subtitles || e.full_audio)
        .map((e) => e.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer(e) {
    if (
      (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      this.m_Trailers)
    ) {
      let t = this.m_Trailers
        .GetAllTrailers(e)
        .find((e) => !!e.GetMicroTrailer());
      if (t) return t.GetMicroTrailer();
    }
    return null;
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({ include_links: !0 }), this.m_rgLinks
    );
  }
  GetUserFilterFailure() {
    return (
      this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
      this.m_userFilterFailure
    );
  }
  ReplaceBestPurchaseOption(e) {
    this.m_BestPurchaseOption = e;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function $(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
var vt = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strRawPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(e, t) {
      let n = e.asset_url_format();
      n &&
        (e.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            n,
            e.main_capsule(),
          )),
        e.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            n,
            e.small_capsule(),
          )),
        e.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(n, e.header())),
        e.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            n,
            e.package_header(),
          )),
        e.raw_page_background() &&
          (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
            n,
            e.raw_page_background(),
          )),
        e.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            n,
            e.hero_capsule(),
          )),
        e.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            n,
            e.hero_capsule_2x(),
          )),
        e.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            n,
            e.library_capsule(),
          )),
        e.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            n,
            e.library_capsule_2x(),
          )),
        e.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            n,
            e.library_hero(),
          )),
        e.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            n,
            e.library_hero_2x(),
          ))),
        e.community_icon() &&
          ((this.m_strCommunityIcon = `${f.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${f.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`)),
        e.page_background_path() &&
          (this.m_strPageBackgroundURL = `${f.STORE_CDN_URL}images/storepagebackground/${e.page_background_path()}`);
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetRawPageBackgroundURL() {
      return this.m_strRawPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(e, t) {
      return (
        f.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        e.replace("${FILENAME}", t)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  yt = class {
    m_mapTrailer;
    m_highlightTrailers;
    m_highlightTrailersAllAges;
    m_otherTrailers;
    m_otherTrailersAllAges;
    constructor(e) {
      (this.m_highlightTrailers = e.highlights()?.map((e) => new bt(e)) ?? []),
        (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
          (e) => e.BIsAllAges(),
        )),
        (this.m_otherTrailers =
          e.other_trailers()?.map((e) => new bt(e)) ?? []),
        (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((e) =>
          e.BIsAllAges(),
        )),
        (this.m_mapTrailer = new Map(
          [...this.m_highlightTrailers, ...this.m_otherTrailers].map((e) => [
            e.GetTrailerID(),
            e,
          ]),
        ));
    }
    BHasTrailers(e) {
      return e
        ? this.m_highlightTrailersAllAges.length > 0 ||
            this.m_otherTrailersAllAges.length > 0
        : this.m_highlightTrailers.length > 0 ||
            this.m_otherTrailers.length > 0;
    }
    GetHighlightTrailers(e) {
      return e ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
    }
    GetOtherTrailers(e) {
      return e ? this.m_otherTrailersAllAges : this.m_otherTrailers;
    }
    GetAllTrailers(e) {
      return [...this.GetHighlightTrailers(e), ...this.GetOtherTrailers(e)];
    }
    GetTrailerByID(e) {
      return this.m_mapTrailer.get(e);
    }
  },
  bt = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_MicroTrailer;
    m_rgDashTrailers;
    m_rgHlsTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    m_bIsAllAges;
    m_strCaptionManifest;
    constructor(e) {
      (this.m_strTrailerName = e.trailer_name()),
        (this.m_nBaseID = e.trailer_base_id()),
        (this.m_eTrailerCategory = e.trailer_category());
      let t = e.trailer_url_format();
      if (
        (t &&
          (e.microtrailer() &&
            (this.m_MicroTrailer = this.ExtractTrailerFormats(
              t,
              e.microtrailer(),
            )),
          e.screenshot_medium() &&
            (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
              t,
              e.screenshot_medium(),
            )),
          e.screenshot_full() &&
            (this.m_strScreenshotFull = this.ConstructScreenshotURL(
              t,
              e.screenshot_full(),
            ))),
        e.adaptive_trailers())
      ) {
        this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
          e.adaptive_trailers(),
          `dash`,
        );
        let t = this.ExtractAdaptiveTrailers(e.adaptive_trailers(), `hls`);
        t.length > 0 && (this.m_rgHlsTrailer = t[0]);
      }
      (this.m_bIsAllAges = e.all_ages() ?? !0),
        (this.m_strCaptionManifest = I(e));
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailersDash() {
      return this.m_rgDashTrailers;
    }
    GetTrailerHls() {
      return this.m_rgHlsTrailer;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    BIsAllAges() {
      return this.m_bIsAllAges;
    }
    GetCaptionManifest() {
      return this.m_strCaptionManifest;
    }
    ExtractTrailerFormats(e, t) {
      let n = {};
      return (
        t.forEach((t) => {
          t.type() == `video/mp4`
            ? (n.strMP4URL = this.ConstructAssetURL(e, t.filename()))
            : t.type() == `video/webm` &&
              (n.strWebMURL = this.ConstructAssetURL(e, t.filename()));
        }),
        n
      );
    }
    ExtractAdaptiveTrailers(e, t) {
      let n = `${t}_`,
        r = e.filter(
          (e) => e.encoding() && e.cdn_path() && e.encoding().startsWith(n),
        ),
        i = r.findIndex((e) => e.encoding().endsWith(`_av1`));
      return (
        i > 0 && te(r, i, 0),
        r.map((e) => this.ConstructAssetURL(e.cdn_path(), ``))
      );
    }
    ConstructScreenshotURL(e, t) {
      return (
        f.BASE_URL_SHARED_CDN +
        `/store_item_assets/` +
        e.replace("${FILENAME}", t)
      );
    }
    ConstructAssetURL(e, t) {
      return f.VIDEO_CDN_URL + `/store_trailers/` + e.replace("${FILENAME}", t);
    }
  },
  xt = class {
    m_rgAllScreenshots;
    m_rgOnlyAllAgesScreenshots;
    constructor(e) {
      let t = e.all_ages_screenshots() || [],
        n = e.mature_content_screenshots() || [],
        r = (e) => f.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename();
      (this.m_rgOnlyAllAgesScreenshots = t.map(r)),
        (this.m_rgAllScreenshots = [...t, ...n]
          .sort((e, t) => e.ordinal() - t.ordinal())
          .map(r));
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function St(e) {
  if (e)
    switch (e.GetStoreItemType()) {
      case 0:
        return { appid: e.GetAppID() };
      case 1:
        return { packageid: e.GetID() };
      case 2:
        return { bundleid: e.GetID() };
      case 4:
        return { tagid: e.GetID() };
      case 5:
        return { creatorid: e.GetID() };
      case 6:
        return { hubcategoryid: e.GetID() };
      case 7:
        return;
      case 3:
      case -1:
        return;
      default:
        u(
          e.GetStoreItemType(),
          `Unknown EStoreItemType ${e.GetStoreItemType()} ${S(e.GetStoreItemType())} `,
        );
        return;
    }
}
function Ct(e) {
  if (e)
    switch (e.item_type) {
      case 0:
        return { appid: e.appid };
      case 1:
        return { packageid: e.id };
      case 2:
        return { bundleid: e.id };
      case 4:
        return { tagid: e.id };
      case 5:
        return { creatorid: e.id };
      case 6:
        return { hubcategoryid: e.id };
      case 7:
        return e.gid ? { salepagegid: e.gid } : void 0;
      case 3:
      case -1:
        return;
      default:
        u(
          e.item_type,
          `Unknown EStoreItemType ${e.item_type} ${S(e.item_type)} `,
        );
        return;
    }
}
export {
  Y as A,
  R as B,
  st as C,
  J as D,
  K as E,
  q as F,
  he as G,
  I as H,
  Je as I,
  de as J,
  fe as K,
  z as L,
  He as M,
  H as N,
  G as O,
  Be as P,
  ge as R,
  lt as S,
  B as T,
  pe as U,
  L as V,
  me as W,
  j as X,
  ue as Y,
  rt as _,
  pt as a,
  ft as b,
  gt as c,
  $e as d,
  ht as f,
  it as g,
  Qe as h,
  Ze as i,
  Z as j,
  Ie as k,
  ot as l,
  ct as m,
  St as n,
  tt as o,
  et as p,
  P as q,
  Ct as r,
  mt as s,
  _t as t,
  at as u,
  nt as v,
  dt as w,
  ut as x,
  Xe as y,
  _e as z,
};

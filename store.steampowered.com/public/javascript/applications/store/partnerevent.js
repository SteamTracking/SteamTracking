/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  Nt as n,
  Ot as r,
  dt as i,
  kt as a,
} from "./chunk~01cfc309bf.js";
import { o, s } from "./chunk~e867464c75.js";
import { n as c } from "./chunk~521597d5f9.js";
import {
  $y as l,
  Ax as u,
  IS as d,
  Ib as f,
  Pb as p,
  TS as m,
  Vx as h,
  Xu as ee,
  Zy as g,
  _S as _,
  dS as v,
  eS as te,
  eb as y,
  fS as b,
  gS as x,
  hS as S,
  ib as C,
  kS as w,
  lS as T,
  mS as E,
  ox as ne,
  pS as D,
  qb as O,
  rx as k,
  sS as re,
  tb as ie,
  vS as A,
} from "./main.js";
function j() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
var ae = `{STEAM_CLAN_IMAGE}`,
  M = `{STEAM_CLAN_LOC_IMAGE}`,
  oe = `{STEAM_APP_IMAGE}`;
function se(e) {
  let t = e.toLowerCase();
  if (t.endsWith(`.jpg`) || t.endsWith(`.jpeg`)) return `image/jpeg`;
  if (t.endsWith(`.png`)) return `image/png`;
  if (t.endsWith(`.gif`)) return `image/gif`;
  if (t.endsWith(`.mp4`)) return `video/mp4`;
  if (t.endsWith(`.webm`)) return `video/webm`;
  if (t.endsWith(`.srt`)) return `text/srt`;
  if (t.endsWith(`.vtt`)) return `text/vtt`;
  if (t.endsWith(`.webp`)) return `image/webp`;
}
function N(e) {
  switch (e) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function ce(e) {
  let t = j(),
    n = new Image();
  return (
    (n.onload = () => t.resolve(n)),
    (n.onerror = (e) => {
      (console.error(`LoadImage failed to load the image, details`, e),
        t.resolve(void 0));
    }),
    (n.src = e),
    t.promise
  );
}
function le(e) {
  let t = j(),
    n = document.createElement(`video`);
  return (
    (n.preload = `metadata`),
    n.addEventListener(`loadedmetadata`, () => t.resolve(n)),
    (n.onerror = (e) => {
      (console.error(`LoadVideo failed to load the video, details`, e),
        t.resolve(void 0));
    }),
    (n.src = e),
    t.promise
  );
}
function ue(e) {
  return e.startsWith(`image/`);
}
function de(e) {
  return e.startsWith(`video/`);
}
async function fe(e, t) {
  if (t) return le(URL.createObjectURL(e));
  {
    let t = j(),
      n = new FileReader();
    ((n.onload = () => t.resolve(n.result ?? void 0)),
      (n.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          n.error,
        ),
          t.resolve(void 0));
      }),
      n.readAsDataURL(e));
    let r = await t.promise;
    return r ? ce(r.toString()) : void 0;
  }
}
function pe(e) {
  return e
    ? e instanceof HTMLVideoElement
      ? { width: e.videoWidth, height: e.videoHeight }
      : { width: e.width, height: e.height }
    : { width: 0, height: 0 };
}
var P = e(t(), 1);
i();
function me(e, t) {
  return `${e}/${t}`;
}
var he = P.createContext({});
function ge() {
  return P.useContext(he);
}
RegExp(`${M.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function _e(e, t, n = 0) {
  return ve(e, t, n, ge());
}
function ve(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return F.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = F.GetBaseURL(),
      a = e.substring(M.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = F.GenerateURLFromHashAndExt(o, s);
    if (r?.[me(o, s)] === !1) return c;
    let l = F.GetLocalizedClanImageFileNames(s, t).map(
      (e) => i + o + `/` + e + `?t=` + n,
    );
    return (l.push(c), l);
  }
  return e;
}
var F = {
    GetBaseURL() {
      return `${k.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${k.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(ae, this.GetBaseURL())), e.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(e) {
      let t =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          e,
        );
      return t?.groups
        ? [t.groups.filename, parseInt(t.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(e) {
      return (e.file_type == null ? null : N(e.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(e) {
      return e ? e.image_hash + this.GetExtensionString(e) : null;
    },
    GetThumbHashAndExt(e) {
      return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
    },
    GetHashFromHashAndExt(e) {
      let t = e.substring(e.lastIndexOf(`.`));
      return e.substring(0, e.length - t.length);
    },
    GetExtStringFromHashAndExt(e) {
      return e.substring(e.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(e, t) {
      if (t == null) return [];
      let n = this.GetHashFromHashAndExt(e),
        r = this.GetExtStringFromHashAndExt(e),
        i = [n + `/` + m(t) + r];
      return (t == 4 && i.push(n + `/` + w(m(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = I.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = I.full, r, i) {
      e instanceof g && (e = e.GetAccountID());
      let a = this.GetBaseURL(),
        o = r != null && r != -1;
      if (n == I.full && !o) return a + e + `/` + t;
      {
        let s = t.substring(t.lastIndexOf(`.`)),
          c = t.substring(0, t.length - s.length);
        return !o || r == 0 || i != `localized_image_group`
          ? a + e + `/` + c + n + s
          : a + e + `/` + c + `/` + w(m(r)) + s;
      }
    },
    GetHashAndExtFromURL(e) {
      let t = this.GetBaseURL();
      return !e?.startsWith(t) ||
        ((e = e.substring(t.length)), e.indexOf(`/`) == -1)
        ? null
        : ((e = e.substring(e.indexOf(`/`) + 1)), e);
    },
    GenerateEditableURLFromHashAndExt(e, t, n) {
      let r =
        k.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (n && (r += `&lang=` + n), r);
    },
    GetMimeType(e) {
      return se(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, t, n) {
      let r = j(),
        i = new Image();
      ((i.crossOrigin = `anonymous`),
        (i.onerror = (t) => {
          let i = { success: 2 };
          (n ||
            ((i.err_msg =
              `Load fail on url ` + e + ` with error: ` + ee(t).strErrorMsg),
            console.error(i.err_msg)),
            (i.success = 2),
            r.resolve(i));
        }),
        (i.onload = () => {
          let t = { success: 2 };
          ((t.width = i.width),
            (t.height = i.height),
            !(i.width > 0) || !(i.height > 0)
              ? (T(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + e,
                ),
                (t.err_msg = `No resolution reported for url ` + e),
                r.resolve(t))
              : ((t.success = 1), r.resolve(t)));
        }),
        (i.src = e),
        t.token.promise.catch(() => {
          ((i.onload = () => {}),
            (i.onerror = () => {}),
            r.resolve({ success: 52 }));
        }));
      let a,
        o = new Promise((e, t) => {
          a = setTimeout(() => t(), 1e4);
        }),
        s;
      try {
        s = await Promise.race([o, r.promise]);
      } catch {
        s = { success: 16, err_msg: `We timed out processing images` };
      } finally {
        clearTimeout(a);
      }
      return s;
    },
    BIsClanImageVideo(e) {
      return e.file_type == 4 || e.file_type == 5;
    },
  },
  I = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  L = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  ye = 39049601,
  be = 45479024,
  xe = 41316928,
  Se = 4397053,
  Ce = 45559995,
  we = 45902273;
function R(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function Te(e, t) {
  return R(e, ``, t).startsWith(`curator/`);
}
var z =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  Ee = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  De = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ];
z.filter((e) => !De.includes(e));
var B = void 0;
function V(e) {
  return e ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`) : ((B ||= V(z)), B);
}
function H(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + V(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function U(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + V(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
var W = e(n(), 1),
  Oe = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: E.readInt32, bw: A.writeInt32 },
            active: { n: 2, br: E.readBool, bw: A.writeBool },
            start_time: { n: 3, br: E.readUint32, bw: A.writeUint32 },
            end_time: { n: 4, br: E.readUint32, bw: A.writeUint32 },
            app_discounts: { n: 5, c: G, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: E.readUint32, bw: A.writeUint32 },
            groups: { n: 7, c: ke, r: !0, q: !0 },
            internal_name: { n: 8, br: E.readString, bw: A.writeString },
            localization: { n: 9, c: Ae },
            reveal_time: { n: 10, br: E.readUint32, bw: A.writeUint32 },
            release_date_min: { n: 11, br: E.readUint32, bw: A.writeUint32 },
            winner_appid: { n: 12, br: E.readUint32, bw: A.writeUint32 },
            flag: { n: 13, br: E.readEnum, bw: A.writeEnum },
            release_date_max: { n: 14, br: E.readUint32, bw: A.writeUint32 },
            item_type: { n: 15, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  G = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            discount: { n: 2, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  ke = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            group_name: { n: 2, br: E.readString, bw: A.writeString },
            app_discounts: { n: 3, c: G, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  Ae = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: E.readString, bw: A.writeString },
            title_linebreak: { n: 2, br: E.readString, bw: A.writeString },
            title_award: { n: 3, br: E.readString, bw: A.writeString },
            award_description: { n: 4, br: E.readString, bw: A.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  je = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: E.readString, bw: A.writeString },
            sale_appid: { n: 2, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  Me = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: Oe, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: E.readUint32,
              pbr: E.readPackedUint32,
              bw: A.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  K = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            appid: { n: 2, br: E.readUint32, bw: A.writeUint32 },
            communityitemid: {
              n: 3,
              br: E.readUint64String,
              bw: A.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  Ne = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: E.readUint32, bw: A.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  Pe = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  Fe = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: E.readInt32, bw: A.writeInt32 },
            appid: { n: 2, br: E.readUint32, bw: A.writeUint32 },
            sale_appid: { n: 3, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  Ie = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  q = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            appid: { n: 2, br: E.readUint32, bw: A.writeUint32 },
            last_updated: { n: 3, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  Le = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), W.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  J = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  Re = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: E.readFixed64String,
              bw: A.writeFixed64String,
            },
            code: { n: 2, br: E.readFixed64String, bw: A.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  ze = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            nominated_id: { n: 2, br: E.readUint32, bw: A.writeUint32 },
            source: { n: 3, br: E.readEnum, bw: A.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  Be = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  Ve = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  He = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || v(e.M()),
        W.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: Ue, r: !0, q: !0 },
            suggested_events: { n: 2, c: We, r: !0, q: !0 },
            suggested_apps: { n: 3, c: Ge, r: !0, q: !0 },
            debug_query: { n: 4, br: E.readString, bw: A.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  Ue = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            playtime: { n: 2, br: E.readInt32, bw: A.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  We = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: E.readUint32, bw: A.writeUint32 },
            event_gid: {
              n: 2,
              br: E.readUint64String,
              bw: A.writeUint64String,
            },
            appid: { n: 3, br: E.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  Ge = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: E.readUint32, bw: A.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  Ke = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: E.readBool, bw: A.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  qe = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || v(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: E.readFixed64String, bw: A.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  Je;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, u(je, t, n), Me, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, u(Fe, t, n), Ie, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, u(Ne, t, n), Pe, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserVotes = r;
})((Je ||= {}));
var Ye;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, u(Le, t, n), J, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, u(Re, t, n), J, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, u(ze, t, n), Be, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      u(Ve, t, n),
      He,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, u(Ke, t, n), qe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetNominationShareLink = a;
})((Ye ||= {}));
var Xe = {
  bBroadcastEnabled: !1,
  broadcastChatSetting: `hide`,
  default_broadcast_title: `#Broadcast_default_title_dev`,
  localized_broadcast_title: Array(32),
  localized_broadcast_left_image: Array(32),
  localized_broadcast_right_image: Array(32),
  broadcast_whitelist: [],
};
function Ze(e) {
  switch (e) {
    case 29:
    case 27:
    case 2:
    case 4:
    case 5:
    case 6:
    case 8:
    case 7:
    case 9:
    case 11:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 35:
    case 25:
    case 26:
    case 31:
    case 32:
    case 1:
    case 34:
      return !0;
  }
  return !1;
}
function Y(e) {
  let t = `#PartnerEvent_` + e,
    n = f.Localize(t);
  return n == t ? f.Localize(`#PartnerEvent_Other`) : n;
}
var Qe = { bScheduleEnabled: !1, scheduleEntries: [] };
O(
  [te],
  class {
    m_eventModel;
    m_entry;
    constructor(e, t) {
      ((this.m_eventModel = e), (this.m_entry = t));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
var $e = `exploration`,
  X = (function (e) {
    return ((e.Random = `r`), (e.Personalized = `p`), e);
  })({});
function et(e) {
  switch (e) {
    case 32:
      return 28;
    case 34:
      return 55;
    case 45:
      return 57;
    case 2:
      return 59;
    default:
      return;
  }
}
function tt(e) {
  switch (e) {
    case 28:
      return 32;
    case 55:
      return 34;
    case 57:
      return 45;
    default:
      return;
  }
}
var nt = 99999,
  rt = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
function it(e) {
  return (
    rt.some((t) => t == e.GetEventType()) &&
    !e.BHasTag(`steam_award_nomination_request`) &&
    !e.BHasTag(`curator`)
  );
}
var at = [20, 31, 34];
function ot(e) {
  return !at.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
var st = 593110,
  ct = [st, 766, 221410],
  lt = [12, 34];
function ut(e) {
  return !lt.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
function dt(e, t = c()) {
  let n = 60 * p.PerDay;
  return (
    e.BIsVisibleEvent(t) &&
    e.BIsOGGEvent() &&
    (e.rtime32_last_modified ?? 0) > t - n &&
    !ft(e)
  );
}
function ft(e) {
  return e.BHasTag(`mod_reviewed`) && !e.BHasTag(`mod_require_rereview`);
}
var pt = (function (e) {
  return (
    (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
    (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
    (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
    (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
    e
  );
})({});
function mt(e) {
  switch (e) {
    case `links`:
      return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
    case `itemdef`:
      return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
    case `contenthubspecials`:
      return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
    default:
      return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
  }
}
var ht = `bordered`,
  gt = (function (e) {
    return (
      (e[(e.k_EStoreFilterClauseTypeOr = 0)] = `k_EStoreFilterClauseTypeOr`),
      (e[(e.k_EStoreFilterClauseTypeAnd = 1)] = `k_EStoreFilterClauseTypeAnd`),
      (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
        `k_EStoreFilterClauseTypeStoreTag`),
      (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
        `k_EStoreFilterClauseTypeFeatureTag`),
      (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
        `k_EStoreFilterClauseTypeLanguage`),
      (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
        `k_EStoreFilterClauseTypeContentDescriptor`),
      (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
        `k_EStoreFilterClauseTypePrice`),
      (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
        `k_EStoreFilterClauseTypeAppType`),
      (e[(e.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
        `k_EStoreFilterClauseTypeOptInRegistrationTag`),
      e
    );
  })({}),
  _t = (function (e) {
    return (
      (e[(e.k_ESaleTagFilter = 0)] = `k_ESaleTagFilter`),
      (e[(e.k_ELanguage = 1)] = `k_ELanguage`),
      (e[(e.k_EContentDescriptor = 2)] = `k_EContentDescriptor`),
      (e[(e.k_EUserPreference = 3)] = `k_EUserPreference`),
      (e[(e.k_EPrice = 4)] = `k_EPrice`),
      (e[(e.k_EAppType = 5)] = `k_EAppType`),
      e
    );
  })({}),
  vt = (function (e) {
    return (
      (e[(e.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (e[(e.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (e[(e.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      e
    );
  })({}),
  yt = (function (e) {
    return (
      (e[(e.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (e[(e.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (e[(e.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      e
    );
  })({});
function bt(e) {
  e.section_type === `crosspromotesalepage` &&
    !e.sale_page_cross_promo_sales &&
    (e.sale_page_cross_promo_event_gid ||
      e.sale_page_cross_promo_clan_account_id ||
      e.sale_page_cross_promo_featured_app_tagid) &&
    ((e.sale_page_cross_promo_sales = [
      {
        event_gid: e.sale_page_cross_promo_event_gid,
        clan_account_id: e.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: e.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete e.sale_page_cross_promo_event_gid,
    delete e.sale_page_cross_promo_clan_account_id,
    delete e.sale_page_cross_promo_featured_app_tagid);
}
var xt = (function (e) {
    return (
      (e.Steam = `Steam`),
      (e.Facebook = `Facebook`),
      (e.Twitter = `Twitter`),
      (e.Reddit = `Reddit`),
      e
    );
  })({}),
  St = (function (e) {
    return (
      (e.Summary = `summary`), (e.SummaryLargeImage = `summary_large_image`), e
    );
  })({});
function Ct(e) {
  return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
}
function wt(e) {
  return e.carousel_rows || 1;
}
function Tt(e) {
  return e.cap_item_count || 0;
}
function Et(e) {
  return e.cap_section_row_count && e.cap_section_row_count > 0
    ? e.cap_section_row_count
    : e.section_type == `trailercarousel`
      ? 1
      : e.cap_section_content
        ? 4
        : 0;
}
function Dt(e) {
  return e?.store_filter ? JSON.stringify(e.store_filter) : void 0;
}
function Z(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
function Ot(e) {
  switch (e) {
    case `items`:
    case `crosspromotesalepage`:
    case `creator_list`:
      return !0;
  }
  return !1;
}
function kt(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
    case `events`:
    case `sale_events`:
    case `contenthubspecials`:
      return !0;
  }
  return !1;
}
function At(e, t = !1) {
  return !e || !kt(e.section_type)
    ? !1
    : t
      ? e.sale_tag_filter?.clauses?.length
        ? !0
        : !!e.smart_section
      : !!e.smart_section && e.smart_section_type != null;
}
function jt(e) {
  return At(e) ? e?.smart_section_type : void 0;
}
function Mt(e) {
  return (
    (e.jsondata.sale_ml_recommender_delay_hours &&
      (e.startTime ?? 0) +
        e.jsondata.sale_ml_recommender_delay_hours * p.PerHour -
        new Date().getTime() / 1e3) ??
    0
  );
}
var Nt = 2.5;
function Pt(e, t, n) {
  return !e.BIsNextFest() || !Z(t.section_type)
    ? !1
    : n == X.Random || Mt(e) > 0;
}
function Ft(e, t, n, r) {
  if (!t.next_fest_exploration_visibility || !e.BIsNextFest()) return !1;
  switch (t.next_fest_exploration_visibility) {
    case `show-only-personalized`:
      return r != X.Personalized;
    case `show-only-personalized-available`:
      return !n;
    case `show-only-personalized-unavailable`:
      return n;
  }
  return !1;
}
function It(e, t, n) {
  return !!(t.use_random_order || Pt(e, t, n));
}
var Lt = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function Q(e) {
  e.sale_sections?.forEach((t, n) => {
    ((t.localized_label &&= re(t.localized_label, 32, null)),
      t.section_type === `trailercarousel` && (t.show_as_carousel = !1),
      bt(t),
      (e.sale_sections[n] = { ...Lt, ...t }));
  });
}
var Rt = (function (e) {
  return (
    (e[(e.k_ETaggedItems = 0)] = `k_ETaggedItems`),
    (e[(e.k_EContentHub = 1)] = `k_EContentHub`),
    e
  );
})({});
function zt(e) {
  return {
    arrowFill: e?.sale_carousel_arrow_color,
    arrowStyle: e?.sale_carousel_arrow_style,
    breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
    breadcrumbColor: e?.sale_carousel_breadcrumb_color,
    breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
  };
}
var Bt = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ...Xe,
    ...Qe,
  },
  Vt = `old_announce_`;
function Ht(e, t, n) {
  let r = (e) => t.includes(e);
  return r(`steam_award_nomination_request`)
    ? C(`#PartnerEvent_SteamAwardNominations`)
    : r(`steam_award_vote_request`)
      ? C(`#PartnerEvent_SteamAwardVoteRequest`)
      : r(`steam_game_festival_artist_statement`)
        ? C(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : r(`steam_game_festival_office_hour`)
          ? C(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : r(`steam_game_festival_broadcast`) ||
              (t.some((e) => e?.startsWith(`sale_nextfest_`)) && e == 11)
            ? C(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : r(`vo_marketing_message`) && n
              ? C(`#PartnerEvent_MM_MajorUpdate`)
              : Y(e);
}
var Ut = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  Wt =
    `steam_blog_featured.workshop.steam_blog.blog.audience_followers.steamvr.patchnotes.steam_library_beta.hide_library_overview.mod_hide_library_overview.hide_library_detail.mod_hide_library_detail.hide_store.mod_hide_store.halloween2019candidate.halloween2019.halloween2019reviewed.horror.cute.halloween.mod_reviewed.steam_award_nomination_request.steam_award_vote_request.steam_game_festival_artist_statement.steam_game_festival_office_hour.steam_game_festival_broadcast.curator.curator_group_members.curator_public.mod_require_rereview.auto_rssfeed.auto_migrated.enable_steam_china.disable_steam_global.skip_megaphone.seasonal_sale_featuring.show_library_demo_detail.clear_library_demo_detail.repost_source_possible.autocreate_promotools.vo_marketing_message`.split(
      `.`,
    ),
  Gt = [
    `patchnotes`,
    `steam_award_nomination_request`,
    `steam_award_vote_request`,
    `mod_hide_library_overview`,
    `steam_game_festival_artist_statement`,
    `steam_game_festival_office_hour`,
    `steam_game_festival_broadcast`,
    `halloween`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
  ],
  Kt = [20, 31, 34],
  qt = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  Jt = [d.k_ESteamRealmGlobal],
  Yt = [d.k_ESteamRealmChina],
  Xt = [d.k_ESteamRealmGlobal, d.k_ESteamRealmChina],
  Zt = [],
  $ = class e {
    constructor() {
      r(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new g();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = Bt;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(t) {
      let n = new e(),
        r = JSON.parse(t);
      return (
        Object.assign(n, r),
        (n.name = new Map(r.name)),
        (n.description = new Map(r.description)),
        (n.vecTags = [...(r.vecTags ?? r.tags ?? [])]),
        (n.clanSteamID = new g(r.clanSteamID)),
        T(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        r.broadcaster &&
          ((n.broadcaster = new g(r.broadcaster)),
          T(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        Q(n.jsondata),
        n
      );
    }
    static FromCClanEventData(t, n) {
      let r = new e();
      ((r.GID = t.gid),
        (r.clanSteamID = new g(t.clan_steamid)),
        r.name.set(n, t.event_name ?? ``),
        (r.type = t.event_type),
        (r.appid = t.appid ?? 0),
        (r.startTime = t.rtime32_start_time),
        (r.endTime = t.rtime32_end_time),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.creator_steamid = t.creator_steamid),
        (r.last_update_steamid = t.last_update_steamid),
        (r.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        Q(r.jsondata),
        (r.rtime32_last_local_modification = t.rtime32_last_modified),
        (r.visibility_state = t.published
          ? t.hidden
            ? t.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (r.createTime = t.rtime_created),
        (r.m_nBuildID = t.build_id),
        (r.m_strBuildBranch = t.build_branch),
        (r.visibilityStartTime = t.rtime32_visibility_start),
        (r.visibilityEndTime = t.rtime32_visibility_end),
        (r.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
        (r.featured_app_tagid = t.featured_app_tagid),
        t.broadcaster_accountid &&
          (r.broadcaster = g.InitFromAccountID(
            t.broadcaster_accountid,
            k.EUNIVERSE,
          )),
        (r.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let i = t.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new g(i))
          : t.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = g.InitFromClanID(
              Number(t.announcement_body.clanid),
              k.EUNIVERSE,
            )),
        (r.postTime = t.announcement_body?.posttime),
        (r.forumTopicGID = t.forum_topic_id),
        r.name.set(n, t.announcement_body?.headline ?? ``),
        r.description.set(n, t.announcement_body?.body ?? ``),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.vecTags = [...(t.announcement_body?.tags ?? [])]),
        (r.forumTopicGID = t.announcement_body?.forum_topic_id),
        (r.nVotesUp = t.announcement_body?.voteupcount ?? 0),
        (r.nVotesDown = t.announcement_body?.votedowncount ?? 0),
        r
      );
    }
    toJSON(e) {
      let t = {};
      return (
        Object.assign(t, this),
        (t.name = Array.from(this.name)),
        (t.description = Array.from(this.description)),
        (t.vecTags = Array.from(this.vecTags)),
        (t.tags = t.vecTags),
        (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
        t
      );
    }
    clone(t = !1) {
      let n = new e();
      if (
        ((n.GID = this.GID),
        (n.AnnouncementGID = this.AnnouncementGID),
        (n.clanSteamID = this.clanSteamID),
        (n.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (n.bOldAnnouncement = this.bOldAnnouncement),
        (n.nCommentCount = this.nCommentCount),
        (n.nVotesUp = this.nVotesUp),
        (n.nVotesDown = this.nVotesDown),
        (n.forumTopicGID = this.forumTopicGID),
        (n.comment_type = this.comment_type),
        (n.gidfeature = this.gidfeature),
        (n.gidfeature2 = this.gidfeature2),
        (n.featured_app_tagid = this.featured_app_tagid),
        (n.creator_steamid = this.creator_steamid),
        (n.last_update_steamid = this.last_update_steamid),
        (n.rtime32_last_modified = this.rtime32_last_modified),
        (n.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (n.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (n.type = this.type),
        (n.appid = this.appid),
        (n.name = new Map()),
        this.name.forEach((e, t) => {
          n.name.set(t, e);
        }),
        (n.description = new Map()),
        this.description.forEach((e, t) => {
          n.description.set(t, e);
        }),
        (n.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((e, t) => {
          n.timestamp_loc_updated.set(t, e);
        }),
        (n.createTime = this.createTime ?? 0),
        (n.startTime = this.startTime),
        (n.endTime = this.endTime),
        (n.visibilityStartTime = this.visibilityStartTime),
        (n.visibilityEndTime = this.visibilityEndTime),
        (n.postTime = this.postTime),
        (n.visibility_state = this.visibility_state),
        (n.loadedAllLanguages = this.loadedAllLanguages),
        (n.bLoaded = this.bLoaded),
        (n.broadcaster = this.broadcaster
          ? new g(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              Ut.includes(e) && n.vecTags.push(e);
            }),
        n.jsondata.email_setting)
      ) {
        let e = 100;
        for (let t of n.jsondata.email_setting.sections)
          t.unique_id || ((t.unique_id = `email_section_${e}`), e++);
      }
      return n;
    }
    GetLastReferencedSaleDayFromCapsules(e, t) {
      let n = t;
      return (
        e?.forEach((e) => {
          e.visibility_index !== void 0 &&
            (n =
              n === void 0
                ? e.visibility_index
                : Math.max(n, e.visibility_index));
        }),
        n
      );
    }
    GetLastReferencedSaleDay() {
      let e;
      for (let t of this.GetSaleSections())
        if (t.section_type === `tabs`) {
          if ((t.tabs?.length ?? 0) > 0)
            for (let n of t.tabs ?? [])
              e = this.GetLastReferencedSaleDayFromCapsules(n.capsules, e);
        } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (e == null || e < (this.jsondata.sale_num_headers ?? 0)) &&
          (e = this.jsondata.sale_num_headers),
        e
      );
    }
    GetDayIndexFromEventStart(e = c()) {
      let t = 0;
      (this.startTime !== void 0 &&
        e >= this.startTime &&
        (t = Math.floor((e - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (t = this.m_overrideCurrentDay));
      let n = this.GetLastReferencedSaleDay() || 0;
      return Math.min(t, n);
    }
    GetNameWithFallback(e) {
      let t = y.GetELanguageFallback(e);
      return this.name.get(e) || this.name.get(t);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(e) {
      return !!(
        (this.BInRealmGlobal() &&
          y.IsELanguageValidInRealm(e, d.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          y.IsELanguageValidInRealm(e, d.k_ESteamRealmChina))
      );
    }
    GetImgArray(e) {
      let t = [];
      if (
        ((e === `background` || e == `localized_title_image`) &&
          (t = this.jsondata.localized_title_image),
        e === `capsule`)
      )
        t = this.jsondata.localized_capsule_image;
      else if (e === `spotlight`) t = this.jsondata.localized_spotlight_image;
      else if (e === `email_full` || e === `email_centered`)
        t = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (e === `broadcast_left`)
        t = this.jsondata.localized_broadcast_left_image;
      else if (e === `broadcast_right`)
        t = this.jsondata.localized_broadcast_right_image;
      else if (e === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let e = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          t = this.jsondata.localized_per_day_sales_header?.[e];
        } else t = this.jsondata.localized_sale_header;
      } else
        e === `sale_logo`
          ? (t = this.jsondata.localized_sale_logo)
          : e === `sale_overlay`
            ? (t = this.jsondata.localized_sale_overlay)
            : e === `sale_cross_promo_logo`
              ? (t = this.jsondata.localized_sale_cross_promo_logo_image)
              : e === `sale_secondary_background`
                ? (t = this.jsondata.localized_sale_secondary_background_image)
                : L.includes(e)
                  ? (t = this.fnGetLocalizedGroupImages?.())
                  : e === `product_banner`
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : e === `product_mobile_banner`
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : e === `bestofyear_banner`
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : e === `bestofyear_banner_mobile`
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : e === `localized_store_app_spotlight`
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : e === `localized_store_app_spotlight_mobile` &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
      return t;
    }
    GetImageURL(e, t = 0, n = I.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? F.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
          : void 0;
    }
    GetImageHash(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null
        ? n[t].substr(0, n[t].length - 4)
        : null;
    }
    GetImageHashAndExt(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null ? n[t] : null;
    }
    BHasSomeImage(e) {
      let t = this.GetImgArray(e);
      return !!t && t.some((e) => e != null && e.length > 0);
    }
    BHasImage(e, t) {
      let n = this.GetImgArray(e);
      return !!n && n.length > t && n[t] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(e) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? k.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? k.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : k.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(e) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(e)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let e = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !e || !e.BIsValid()
        ? ``
        : k.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = c()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = c()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = h(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = h(this.nVotesDown + t, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(e, t) {
      let n = this.GetDescriptionWithFallback(e);
      if (n) {
        let e = n.indexOf(`[img]`);
        if (e !== -1 && e < t) {
          e += 5;
          let t = n.indexOf(`[/img]`, e);
          if (t != -1) {
            let r = n.substring(e, t).trim();
            if (r.length != 0) return F.ReplacementTokenToClanImageURL(r);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(e, t) {
      let n = this.GetImageURL(e, t);
      if (!n || n.length == 0) {
        let r = y.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = y.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = y.GetELanguageFallback(t);
      return (
        this.GetImageURL(e, t) != null ||
        (t != r && this.GetImageURL(e, r) != null) ||
        (this.appid && n.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          n.clanInfo &&
          ((n.clanInfo.is_creator_home && !n.clanInfo.is_ogg) ||
            n.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(e = c()) {
      let t = Math.floor(e);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          t > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            t < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(e = c()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > e ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > e))
      );
    }
    BHasSubTitle(e) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let t = this.jsondata.localized_subtitle[e];
      return t != null && t != ``;
    }
    GetSubTitle(e) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[e] || ``;
    }
    GetSubTitleWithLanguageFallback(e) {
      return this.jsondata
        ? l.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        l.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        l.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return l.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = H(e, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (e = U(e, [`p`], ` `)),
          (e = U(e)),
          (e = o(e)),
          s(e, t || 180));
    }
    BHasTag(e) {
      return this.vecTags.indexOf(e) != -1;
    }
    BHasTagStartingWith(e) {
      return this.vecTags.some((t) => t?.startsWith(e));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(e) {
      if (!e) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || Kt.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (qt.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + p.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = c()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let n = this.endTime ? this.endTime : t + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (e || ((this.startTime ?? 0) - 600 <= t && t < n))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((e) => e.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (e) => e.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(e) {
      return (
        l.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        C(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((e) =>
          g.InitFromAccountID(e, k.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(e) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(e) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          k.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          k.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let e = this.jsondata.source_content_hub;
        return e
          ? typeof e == `string`
            ? k.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? k.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? k.STORE_BASE_URL + `tags/` + (ie() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? k.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? k.STORE_BASE_URL + `genre/Early%20Access/`
                    : k.STORE_BASE_URL + e.type
          : k.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && Te(t, n) ? e + `sale/` + r : k.STORE_BASE_URL + R(t, r, n);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(e, t, n, r, i, a) {
      let o = [],
        s = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        c = nt + 10;
      return (
        e &&
          o.push({
            ...s,
            section_type: `footer_self_creator_home`,
            unique_id: c++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        t &&
          o.push({ ...s, section_type: `footer_browse_more`, unique_id: c++ }),
        r &&
          o.push(this.GenerateDynamicCreatorHomeItemBrowserSection(c++, s, a)),
        n &&
          o.push({
            ...s,
            section_type: `footer_default_social_share`,
            unique_id: c++,
          }),
        i && o.push({ ...s, section_type: `nextfest_header`, unique_id: c++ }),
        o
      );
    }
    GetSaleSectionIncludingFooterSections(e = 0) {
      let t = this.jsondata?.sale_show_creator,
        n = this.jsondata.sale_browse_more_button,
        r =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        i = this.GetEventType() == 36,
        a = this.BShowNextFestHeader(!0);
      return t || n || r || i || a
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, a, e),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!t, !!n, r, i, !1, e),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(e, t = 0) {
      return e > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, t).find(
            (t) => t.unique_id == e,
          )
        : this.jsondata.sale_sections?.find((t) => t.unique_id == e);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(e) {
      return (
        this.jsondata.sale_sections?.filter((t) => t.section_type == e) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(e) {
      let t = this.jsondata.sale_sections?.length ?? 0;
      if (t != 0) {
        for (let n = 0; n < t; ++n)
          if (this.jsondata.sale_sections[n].section_type === e)
            return this.jsondata.sale_sections[n];
      }
    }
    static AccumulateCapsuleListIDs(e, t, n, r) {
      e &&
        e.forEach((e) => {
          e && e.type && t.has(e.type) && (!r || r(e.id)) && n.add(e.id);
        });
    }
    GetSaleItemOfType(t, n) {
      if (!this.jsondata.sale_sections) return new Set();
      let r = new Set(t),
        i = new Set();
      return (
        T(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], r, i, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (Z(t.section_type))
            e.AccumulateCapsuleListIDs(t.capsules, r, i, n);
          else if (t.section_type === `tabs` && t.tabs)
            for (let a of t.tabs)
              e.AccumulateCapsuleListIDs(a.capsules, r, i, n);
        }),
        i
      );
    }
    GetSaleItemCountOfType(e, t) {
      return this.GetSaleItemOfType(e, t).size;
    }
    GetSaleFeaturedAppsCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundlesCount(e) {
      return this.GetSaleItemCountOfType([`bundle`], e);
    }
    GetSaleFeaturedPackagesCount(e) {
      return this.GetSaleItemCountOfType([`sub`], e);
    }
    GetSaleFeaturedApps(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemos(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundles(e) {
      return this.GetSaleItemOfType([`bundle`], e);
    }
    GetSaleFeaturedPackages(e) {
      return this.GetSaleItemOfType([`sub`], e);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return Y(this.type);
    }
    GetCategoryAsString(e) {
      return Ht(this.type, this.vecTags, e);
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(e) {
      let t = !0;
      return (
        e?.forEach((e) => {
          this.vecTags.includes(e) || (t = !1);
        }),
        t
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? { type: `category`, category: this.jsondata.source_content_hub }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(e) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[e]
        : void 0;
    }
    GetIncludedRealmList() {
      let e = this.BInRealmGlobal(),
        t = this.BInRealmChina();
      return (
        T(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? Xt : e ? Jt : t ? Yt : Zt
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new g(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && ne.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(e, t, n) {
      let r = n >= 7;
      return {
        ...t,
        section_type: `sale_item_browser`,
        unique_id: e,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: r,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            { loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle` },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            { loc_token: `#Sale_Preferences` },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(O([a], $.prototype, `GID`, void 0),
  O([a], $.prototype, `AnnouncementGID`, void 0),
  O([a], $.prototype, `forumTopicGID`, void 0),
  O([a], $.prototype, `type`, void 0),
  O([a], $.prototype, `appid`, void 0),
  O([a], $.prototype, `name`, void 0),
  O([a], $.prototype, `description`, void 0),
  O([a], $.prototype, `timestamp_loc_updated`, void 0),
  O([a], $.prototype, `startTime`, void 0),
  O([a], $.prototype, `endTime`, void 0),
  O([a], $.prototype, `visibilityStartTime`, void 0),
  O([a], $.prototype, `visibilityEndTime`, void 0),
  O([a], $.prototype, `m_nBuildID`, void 0),
  O([a], $.prototype, `m_strBuildBranch`, void 0),
  O([a], $.prototype, `postTime`, void 0),
  O([a], $.prototype, `visibility_state`, void 0),
  O([a], $.prototype, `broadcaster`, void 0),
  O([a], $.prototype, `jsondata`, void 0),
  O([a], $.prototype, `nCommentCount`, void 0),
  O([a], $.prototype, `nVotesUp`, void 0),
  O([a], $.prototype, `nVotesDown`, void 0),
  O([a], $.prototype, `bOldAnnouncement`, void 0),
  O([a], $.prototype, `announcementClanSteamID`, void 0),
  O([a], $.prototype, `loadedAllLanguages`, void 0),
  O([a], $.prototype, `bLoaded`, void 0),
  O([a], $.prototype, `deleteInProgress`, void 0),
  O([a], $.prototype, `vecTags`, void 0),
  O([a], $.prototype, `last_update_steamid`, void 0),
  O([a], $.prototype, `rtime32_last_modified`, void 0),
  O([a], $.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  O([a], $.prototype, `rtime32_last_local_modification`, void 0),
  O([a], $.prototype, `rtime32_moderator_reviewed`, void 0),
  O([a], $.prototype, `video_preview_type`, void 0),
  O([a], $.prototype, `video_preview_id`, void 0),
  O([a], $.prototype, `m_overrideCurrentDay`, void 0));
function Qt(e) {
  if (e) return e?.replace(/[()]/g, `\\$&`);
}
export {
  we as $,
  Ct as A,
  Vt as B,
  $ as C,
  Et as D,
  Ht as E,
  Qt as F,
  Ze as G,
  tt as H,
  ht as I,
  Je as J,
  Y as K,
  ct as L,
  Dt as M,
  mt as N,
  wt as O,
  Q as P,
  R as Q,
  st as R,
  Gt as S,
  Mt as T,
  et as U,
  X as V,
  $e as W,
  z as X,
  H as Y,
  Ee as Z,
  vt as _,
  ut as a,
  I as at,
  xt as b,
  Ot as c,
  _e as ct,
  It as d,
  N as dt,
  Ce as et,
  ft as f,
  fe as ft,
  _t as g,
  ae as gt,
  yt as h,
  M as ht,
  it as i,
  xe as it,
  jt as j,
  Tt as k,
  Z as l,
  ue as lt,
  pt as m,
  oe as mt,
  Ft as n,
  be as nt,
  dt as o,
  L as ot,
  Bt as p,
  pe as pt,
  Ye as q,
  ot as r,
  ye as rt,
  At as s,
  F as st,
  Wt as t,
  Se as tt,
  Pt as u,
  de as ut,
  Rt as v,
  zt as w,
  St as x,
  gt as y,
  Nt as z,
};

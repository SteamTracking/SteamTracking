/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  F as e,
  I as t,
  Pt as n,
  U as r,
  W as i,
  n as a,
  nt as o,
  r as s,
} from "./chunk~de7f2df91c.js";
import { Pt as c, X as l } from "./chunk~bd90a5fce7.js";
import { o as u } from "./chunk~b4171a8747.js";
import {
  aa as d,
  da as f,
  g as p,
  ln as m,
  on as h,
} from "./chunk~1fa4b8f2ff.js";
import { S as g, x as _ } from "./chunk~96e60d7578.js";
import "./chunk~8681f5c764.js";
import { t as ee } from "./chunk~f4e4ed5c17.js";
import "./chunk~ca0c999570.js";
import { t as te } from "./chunk~874b4cd3a1.js";
var v = [`app_header_capsule`, `app_main_capsule`],
  y = [`sale_header`, `sale_logo`, `capsule`, `localized_title_image`],
  b = [`takeunder_art`, `takeunder_mobile_art`],
  x = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  S = [`marketingmessage_art`, `marketingmessage_art_2`],
  C = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  w = [`spotlight_art_hero`],
  T = [...v, ...y, ...b, ...x, ...S, ...C, ...w],
  E = 622,
  D = 1920,
  O = 450,
  k = 800,
  ne = 460,
  re = 2108,
  ie = 300,
  ae = 800,
  oe = 300,
  se = 644,
  A = 337,
  j = 155,
  M = 433,
  N = 199;
[...T];
function P(e) {
  return Array.isArray(e) ? e[0] : e;
}
function F(e) {
  return Math.min(...(Array.isArray(e) ? e : [e]));
}
function ce(e, t) {
  return t === void 0 ? P(e) : Array.isArray(e) ? e[t] : e;
}
var le = [1, 3, 2, 10],
  I = [1, 3, 2],
  L = [1, 3],
  R = [5, 4],
  ue = [7, 6],
  z = {
    capsule: { width: k, height: O, rgAcceptableTypes: L },
    marketingmessage_art_2_eventcapsule: {
      width: k,
      height: O,
      rgAcceptableTypes: L,
    },
    marketingmessage_art_eventcapsule: {
      width: k,
      height: O,
      rgAcceptableTypes: L,
    },
    spotlight: { width: re, height: ne, rgAcceptableTypes: L },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: L,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: L,
    },
    localized_title_image: { width: D, height: E, rgAcceptableTypes: L },
    background: { width: D, height: E, rgAcceptableTypes: L },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    email_full: { width: ae, height: ie, rgAcceptableTypes: L },
    email_centered: { width: se, height: oe, rgAcceptableTypes: L },
    broadcast_left: { width: [N, j], height: [M, A], rgAcceptableTypes: L },
    broadcast_right: { width: [N, j], height: [M, A], rgAcceptableTypes: L },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: L,
    },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: L },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: L,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: L,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: L },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: L },
    sale_logo: { width: [1200, 940], height: [460, 460], rgAcceptableTypes: L },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: I },
    bestofyear_banner_mobile: { width: 500, height: 160, rgAcceptableTypes: I },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: le,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: L },
    localized_marketingmessage_webm: {
      width: 570,
      height: 600,
      rgAcceptableTypes: [5],
    },
    localized_marketingmessage_mp4: {
      width: 570,
      height: 600,
      rgAcceptableTypes: [4],
    },
    localized_partnerevent_webm: {
      width: 800,
      height: 450,
      rgAcceptableTypes: [5],
    },
    localized_partnerevent_mp4: {
      width: 800,
      height: 450,
      rgAcceptableTypes: [4],
    },
    localized_subtitles: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: [6, 7],
    },
    localized_marketingmessage_poster: {
      width: 528,
      height: 297,
      rgAcceptableTypes: [1, 3],
    },
    localized_marketingmessage_background: {
      width: 570,
      height: 600,
      rgAcceptableTypes: L,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    template_asset: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: [1, 3, 2, 10, 5, 4],
    },
    user_poll_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: L,
    },
    sale_store_capsule_small: { width: 462, height: 174, rgAcceptableTypes: L },
    sale_store_capsule_main: { width: 1232, height: 706, rgAcceptableTypes: L },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: L,
    },
    sale_cross_promo_background: {
      width: 1200,
      height: 600,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: L,
    },
    sale_cross_promo_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: L,
    },
    sale_secondary_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: I },
    spotlight_art_hero: { width: 748, height: 896, rgAcceptableTypes: L },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: I },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: I },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: I },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: I },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: I },
    takeover_webm_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: [5],
    },
    takeover_mp4_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: [4],
    },
    takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: I },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: I },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: L },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: L },
  };
function B(e, t, n, r) {
  let i = null;
  if (Array.isArray(n)) {
    if (
      ((i = n
        .map((t, n) => (e === t ? n : void 0))
        .filter((e) => e !== void 0)),
      i.length <= 0)
    )
      return !1;
  } else if (e !== n) return !1;
  if (Array.isArray(r)) {
    let e = r.map((e, n) => (t === e ? n : void 0)).filter((e) => e !== void 0);
    if (e.length <= 0 || (i?.length && !e.some((e) => i.includes(e))))
      return !1;
  } else if (t !== r) return !1;
  return !0;
}
function V(e, t, n, r) {
  let i = z[n];
  return i
    ? i.bDisableEnforceDimensions
      ? !!r
      : B(e, t, i.width, i.height)
    : !1;
}
function H(e, t, n) {
  let r = z[n];
  if (!r) return !1;
  if (r.bDisableEnforceDimensions) return !0;
  if (Array.isArray(r.width)) {
    if (r.width.filter((t) => e < t).length == r.width.length) return !1;
  } else if (e < r.width) return !1;
  if (Array.isArray(r.height)) {
    if (r.height.filter((e) => t < e).length == r.height.length) return !1;
  } else if (t < r.height) return !1;
  return !0;
}
function de(e) {
  let t = z[e];
  return t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7);
}
function U(e, t) {
  return t.filter((t) => W(e, t));
}
function W(e, t) {
  return z[t].rgAcceptableTypes.includes(e);
}
var fe = n(o()),
  pe = `A5DZIArSiNc-`,
  me = `VdxYwmaL6i4-`,
  he = `_3PNPGWpNrDs-`,
  G = i(),
  K = class extends fe.Component {
    state = {
      region: {
        xPosPct: 0,
        yPosPct: 0,
        widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
        heightPct: (this.GetDestHeight() / this.props.uploadFile.height) * 100,
      },
    };
    async OnCrop() {
      let e = this.props.uploadFile.GetCanvasImageSource();
      (e &&
        (await ge(
          this.props.uploadFile,
          e,
          (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
          (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
          (this.state.region.widthPct / 100) * this.props.uploadFile.width,
          (this.state.region.heightPct / 100) * this.props.uploadFile.height,
          this.GetDestWidth(),
          this.GetDestHeight(),
          this.props.fileType,
        )),
        this.props.closeModal?.());
    }
    UpdateCrop(e, t) {
      this.setState({ region: t });
    }
    GetDestWidth() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = z[n.artworkType].width;
      return n ? P(r) : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = z[n.artworkType].height;
      return n ? P(r) : 0;
    }
    GetLargestBoxThatFits(e, t, n, r) {
      let i = n,
        a = (i * t) / Math.max(e, 1);
      return (
        a > r && ((a = r), (i = (a * e) / Math.max(t, 1))),
        { width: i, height: a }
      );
    }
    GetPreviewWindowStyle() {
      let { region: e } = this.state,
        t = this.GetLargestBoxThatFits(
          this.GetDestWidth(),
          this.GetDestHeight(),
          500,
          150,
        ),
        n = t.width,
        r = t.height,
        i = 1 / Math.max(e.widthPct / 100, 1e-4),
        a = 1 / Math.max(e.heightPct / 100, 1e-4),
        o = (this.props.uploadFile.width * e.xPosPct) / 100,
        s = (this.props.uploadFile.height * e.yPosPct) / 100,
        c = (n * i) / this.props.uploadFile.width,
        l = (r * a) / this.props.uploadFile.height;
      return {
        width: n,
        height: r,
        backgroundPosition: `${-o * c}px ${-s * l}px`,
        backgroundSize: `${100 * i}% ${100 * a}%`,
        backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
      };
    }
    render() {
      let e = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
        t = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
        n = this.GetLargestBoxThatFits(
          this.props.uploadFile.width,
          this.props.uploadFile.height,
          800,
          500,
        );
      return (0, G.jsx)(p, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, G.jsxs)(`div`, {
          className: s(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, G.jsx)(m, {
              children: f(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, G.jsx)(`div`, {
              className: s(`DialogBodyText`),
              children: f(`#ImageUpload_CropModalDescription`),
            }),
            (0, G.jsxs)(`div`, {
              className: pe,
              style: { width: n.width, height: n.height },
              children: [
                (0, G.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, G.jsx)(te, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: e,
                  heightMinPct: t,
                  widthPct: e,
                  heightPct: t,
                }),
              ],
            }),
            (0, G.jsxs)(`div`, {
              className: me,
              children: [
                (0, G.jsx)(`div`, {
                  className: he,
                  children: f(`#ImageUpload_CropPreview`),
                }),
                (0, G.jsx)(`div`, { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, G.jsx)(h, {
              onClick: this.OnCrop,
              children: f(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
(a([c], K.prototype, `OnCrop`, null), a([c], K.prototype, `UpdateCrop`, null));
async function ge(e, t, n, r, i, a, o, s, c) {
  return new Promise((u, d) => {
    let f = q(c);
    if (!f) {
      d(`Invalid format provided`);
      return;
    }
    let p = document.createElement(`canvas`);
    ((p.width = o),
      (p.height = s),
      p.getContext(`2d`)?.drawImage(t, n, r, i, a, 0, 0, o, s),
      p.toBlob((t) => {
        let n = p.toDataURL(f);
        c !== 3 && n.startsWith(`data:image/png`)
          ? d(`Unable to encode into the requested file format`)
          : t
            ? ((e.file = l(t, e.filename)),
              (e.width = o),
              (e.height = s),
              (e.dataUrl = n),
              (e.uploadTime = Date.now()),
              (e.bCropped = !0),
              u())
            : d(`Unable to apply crop into image`);
      }));
  });
}
function q(e) {
  switch (e) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
function J(e) {
  if (
    (e.indexOf(`?`) > 0 && (e = e.split(`?`)[0]),
    e.endsWith(`.jpg`) || e.endsWith(`.jpeg`))
  )
    return 1;
  if (e.endsWith(`.png`)) return 3;
  if (e.endsWith(`.gif`)) return 2;
  if (e.endsWith(`.mp4`)) return 4;
  if (e.endsWith(`.webm`)) return 5;
  if (e.endsWith(`.vtt`)) return 6;
  if (e.endsWith(`.srt`)) return 7;
  if (e.endsWith(`.webp`)) return 10;
}
function _e(e) {
  return e == `waiting` || e == `uploading` || e == `processing`;
}
var Y = class {
  m_originalSize = { width: 0, height: 0 };
  m_originalDataUrl = ``;
  dataUrl = void 0;
  width = 0;
  height = 0;
  status = `pending`;
  message = ``;
  language = void 0;
  file;
  filename;
  uploadTime;
  fileType;
  constructor(e, t, n, r, i) {
    (_(this),
      (this.file = e),
      (this.filename = t),
      (this.fileType = J(t) ?? 0),
      (this.language = n),
      (this.uploadTime = Date.now()),
      (this.status = `pending`),
      (this.m_originalSize = i),
      (this.height = i.height),
      (this.width = i.width),
      (this.m_originalDataUrl = r),
      (this.dataUrl = r));
  }
  ResetImage() {
    ((this.height = this.m_originalSize.height),
      (this.width = this.m_originalSize.width),
      (this.dataUrl = this.m_originalDataUrl));
  }
  GetImageOptionLabel() {}
};
(a([g], Y.prototype, `dataUrl`, void 0),
  a([g], Y.prototype, `width`, void 0),
  a([g], Y.prototype, `height`, void 0),
  a([g], Y.prototype, `status`, void 0),
  a([g.ref], Y.prototype, `message`, void 0),
  a([g], Y.prototype, `language`, void 0));
var ve = 960,
  ye = 311,
  be = 480,
  xe = 156,
  X = class extends Y {
    m_rgImageOptions;
    m_currentImageOption = void 0;
    m_currentImageOptionKey = void 0;
    constructor(e, t, n, r, i, a) {
      (super(e, t, n, i, a), _(this), (this.m_rgImageOptions = r));
    }
    IsValidAssetType(e, t) {
      let n = 0,
        r = 0,
        i = !1,
        a =
          !this.m_rgImageOptions ||
          this.m_rgImageOptions.length === 0 ||
          this.m_rgImageOptions.some(
            (e) => e.sKey == this.GetCurrentImageOption()?.sKey,
          );
      if (e) ((n = e.width), (r = e.height), (i = !0));
      else if (this.GetCurrentImageOption()) {
        let e = z[this.GetCurrentImageOption().artworkType];
        e &&
          ((n = e.width), (r = e.height), (i = !e.bDisableEnforceDimensions));
      }
      let o = this.width >= F(n) && this.height >= F(r),
        s = i ? B(this.width, this.height, n, r) : o,
        c = t && t != this.fileType,
        l =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? U(
                this.fileType,
                this.m_rgImageOptions?.map((e) => e.artworkType) || [],
              ).length == 0
            : !1,
        d = !!q(this.fileType),
        p = ``,
        m = !1,
        h;
      return (
        a
          ? l
            ? (p = f(`#ImageUpload_InvalidFileType`))
            : c
              ? (p = f(`#ImageUpload_InvalidFormat`, u(t) ?? ``))
              : !s && !d
                ? (p = f(`#ImageUpload_InvalidResolution`, P(n), P(r)))
                : o
                  ? !s && d
                    ? ((p = f(`#ImageUpload_InvalidDimensions`, P(n), P(r))),
                      (m = !0))
                    : ((Array.isArray(n) && this.width != P(n)) ||
                        (Array.isArray(r) && this.height != P(r))) &&
                      ((h ??= []),
                      h.push(f(`#ImageUpload_PreferredDimension`, P(n), P(r))))
                  : (p = f(`#ImageUpload_TooSmall`, P(n), P(r)))
          : (p = f(`#ImageUpload_InvalidFormatSelected`)),
        {
          error: p,
          warnings: h,
          needsCrop: m,
          match: this.GetCurrentImageOption(),
        }
      );
    }
    BSupportsLanguages() {
      return !0;
    }
    ComputeDefaultImageOption() {
      if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0) return;
      let e = U(
          this.fileType,
          this.m_rgImageOptions?.map((e) => e.artworkType),
        ),
        t = Te(this.width, this.height, e, !1);
      if ((t === void 0 && (t = Te(this.width, this.height, e, !0)), t)) {
        let e = this.m_rgImageOptions.find(
          (e) =>
            e.artworkType == t &&
            (!e.bEnforceDimensions ||
              (e.width == this.width && e.height == this.height)),
        );
        if (e) return e;
      }
      return this.m_rgImageOptions[0];
    }
    get ImageOptions() {
      return this.m_rgImageOptions;
    }
    GetCurrentImageOptionKey() {
      return this.m_currentImageOptionKey;
    }
    GetCurrentImageOption() {
      return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
    }
    SetCurrentImageOption(e) {
      ((this.m_currentImageOption = e),
        (this.m_currentImageOptionKey = e?.sKey));
    }
  };
(a([g], X.prototype, `m_currentImageOption`, void 0),
  a([g], X.prototype, `m_currentImageOptionKey`, void 0));
var Se = class extends X {
    video;
    constructor(e, t, n, r, i, a, o) {
      (super(e, t, n, r, i, a), (this.video = o));
    }
    BIsOriginalMinimumDimensions(e) {
      return H(this.video.videoWidth, this.video.videoHeight, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return W(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return R.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  Ce = class extends X {
    constructor(e, t, n, r) {
      super(e, t, n, r, URL.createObjectURL(e), { width: 0, height: 0 });
    }
    BIsOriginalMinimumDimensions(e) {
      return de(e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return W(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return R.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  Z = class extends X {
    bCropped = !1;
    localizedImageGroupPrimaryImage;
    media;
    constructor(e, t, n, r, i, a, o, s) {
      (super(e, t, n, r, i, a),
        _(this),
        (this.media = o),
        (this.localizedImageGroupPrimaryImage = s));
    }
    IsValidAssetType(e, t) {
      return (
        (t ??= this.localizedImageGroupPrimaryImage?.file_type),
        super.IsValidAssetType(e, t)
      );
    }
    GetCanvasImageSource() {
      return this.media;
    }
    BIsOriginalMinimumDimensions(e) {
      return H(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return W(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return R.includes(this.fileType);
    }
    GetResizeDimension() {
      return we(this.GetCurrentImageOption()?.artworkType);
    }
  };
a([g], Z.prototype, `bCropped`, void 0);
function we(e) {
  if (e === `background`)
    return [
      { width: ve, height: ye },
      { width: be, height: xe },
    ];
  if (e === `capsule` || e === `spotlight`)
    return [{ width: P(z[e].width) / 2, height: P(z[e].height) / 2 }];
}
function Te(e, t, n, r = !1) {
  if (n) {
    for (let i of n) if (r ? H(e, t, i) : V(e, t, i)) return i;
  }
}
var Ee = n(ee()),
  Q = class {};
function $(e, t, n) {
  let r = e.filter((e) => {
    let r = e.IsValidAssetType(t, n);
    return e.status === `pending` && !r.error && !r.needsCrop;
  });
  return (
    r.forEach((e) => {
      ((e.status = `waiting`), (e.message = ``));
    }),
    r
  );
}
async function De(e, t, n, r, i) {
  let a = $(e, n, r),
    o = [];
  for (let e of a) {
    e.status = `uploading`;
    let n = await t(e, e.filename, e.language ?? -1, i);
    ((e.status = n.bSuccess ? `success` : `failed`),
      (e.message = !n.bSuccess && n.elErrorMessage ? n.elErrorMessage : ``),
      o.push({ bSuccess: n.bSuccess, image: e, uploadResult: n.result }));
  }
  return o;
}
async function Oe(e, t, n, r, i, a) {
  let o = $(e, r, i),
    s = [],
    c = 0,
    l = async () => {
      for (; c < o.length;) {
        let e = c++,
          t = o[e];
        t.status = `uploading`;
        let r = await n(t, t.filename, t.language ?? -1, a);
        ((t.status = r.bSuccess ? `success` : `failed`),
          (t.message = !r.bSuccess && r.elErrorMessage ? r.elErrorMessage : ``),
          (s[e] = { image: t, uploadResult: r }));
      }
    },
    u = Array.from({ length: Math.floor(t) }, () => l());
  return (
    await Promise.all(u),
    s.map((e) => ({
      bSuccess: e.uploadResult.bSuccess,
      image: e.image,
      uploadResult: e.uploadResult.result,
    }))
  );
}
var ke = class extends Q {
  m_cancel = void 0;
  async UploadAllImages(e, t) {
    this.m_cancel = Ee.default.CancelToken.source();
    let n = this.BGetUploadsAreInSerial() ? 1 : 4,
      r,
      i = this.UploadSingleImage.bind(this);
    return (
      (r =
        n > 1
          ? await Oe(this.GetUploadImages(), n, i, e, t, this.m_cancel.token)
          : await De(this.GetUploadImages(), i, e, t, this.m_cancel.token)),
      r
    );
  }
  CancelAllUploads() {
    this.m_cancel?.cancel(f(`#ImageUpload_CancelRequest`));
  }
};
function Ae(e, t, n) {
  if (((e == null || e == null) && (e = t), !n || n.length === 0)) return e;
  for (let t of n) if (d.IsELanguageValidInRealm(e, t)) return e;
  for (let e of n) if (d.IsELanguageValidInRealm(t, e)) return t;
  return n.includes(r.k_ESteamRealmGlobal) ? 0 : 29;
}
function je(n, r = 0) {
  let i = n.lastIndexOf(`.`);
  i != -1 && (n = n.slice(0, i).toLowerCase());
  let a = null,
    o = 0;
  n.endsWith(`korean`) && ((a = 4), (o = 6));
  for (let r = 0; r < 32; ++r) {
    let i = t(r);
    if (i.length <= o) continue;
    if (n.endsWith(i) && n.length > i.length + 2) {
      let e = n[n.length - i.length - 1];
      /\p{Alphabetic}|\p{Number}/u.test(e) || ((a = r), (o = i.length));
    }
    let s = e(r);
    s.length <= o || (n.endsWith(s) && ((a = r), (o = s.length)));
  }
  return {
    language: a ?? r,
    baseFilename:
      o > 0
        ? ((e) => e.replace(/[\s_-]+$/g, ``))(n.substring(0, n.length - o))
        : n,
  };
}
export {
  y as C,
  b as E,
  T as S,
  x as T,
  ue as _,
  $ as a,
  C as b,
  Ce as c,
  J as d,
  K as f,
  P as g,
  ce as h,
  Ae as i,
  _e as l,
  V as m,
  ke as n,
  Z as o,
  z as p,
  je as r,
  Se as s,
  Q as t,
  Y as u,
  R as v,
  w,
  v as x,
  S as y,
};

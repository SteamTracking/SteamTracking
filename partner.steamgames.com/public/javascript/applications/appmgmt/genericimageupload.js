/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  C as n,
  S as r,
  _t as i,
  j as a,
  lt as o,
  sn as s,
  ut as c,
  vt as l,
} from "./chunk~de7f2df91c.js";
import { It as u, Q as d } from "./chunk~25a6634263.js";
import { o as f } from "./chunk~b4171a8747.js";
import {
  an as p,
  cn as m,
  g as ee,
  ia as h,
  ua as g,
} from "./chunk~1fa4b8f2ff.js";
import "./chunk~8681f5c764.js";
import { t as te } from "./chunk~f4e4ed5c17.js";
import "./chunk~ca0c999570.js";
import { t as ne } from "./chunk~874b4cd3a1.js";
var _ = [`app_header_capsule`, `app_main_capsule`],
  v = [`sale_header`, `sale_logo`, `capsule`, `localized_title_image`],
  y = [`takeunder_art`, `takeunder_mobile_art`],
  b = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  x = [`marketingmessage_art`, `marketingmessage_art_2`],
  S = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  C = [`spotlight_art_hero`],
  w = [..._, ...v, ...y, ...b, ...x, ...S, ...C],
  T = 622,
  E = 1920,
  D = 450,
  O = 800,
  re = 460,
  ie = 2108,
  ae = 300,
  oe = 800,
  se = 300,
  ce = 644,
  k = 337,
  A = 155,
  j = 433,
  M = 199;
[...w];
function N(e) {
  return Array.isArray(e) ? e[0] : e;
}
function P(e) {
  return Math.min(...(Array.isArray(e) ? e : [e]));
}
function le(e, t) {
  return t === void 0 ? N(e) : Array.isArray(e) ? e[t] : e;
}
var ue = [1, 3, 2, 10],
  F = [1, 3, 2],
  I = [1, 3],
  L = [5, 4],
  de = [7, 6],
  R = {
    capsule: { width: O, height: D, rgAcceptableTypes: I },
    marketingmessage_art_2_eventcapsule: {
      width: O,
      height: D,
      rgAcceptableTypes: I,
    },
    marketingmessage_art_eventcapsule: {
      width: O,
      height: D,
      rgAcceptableTypes: I,
    },
    spotlight: { width: ie, height: re, rgAcceptableTypes: I },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: I,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: I,
    },
    localized_title_image: { width: E, height: T, rgAcceptableTypes: I },
    background: { width: E, height: T, rgAcceptableTypes: I },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    email_full: { width: oe, height: ae, rgAcceptableTypes: I },
    email_centered: { width: ce, height: se, rgAcceptableTypes: I },
    broadcast_left: { width: [M, A], height: [j, k], rgAcceptableTypes: I },
    broadcast_right: { width: [M, A], height: [j, k], rgAcceptableTypes: I },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: I,
    },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: I },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: I,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: I,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: I },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: I },
    sale_logo: { width: [1200, 940], height: [460, 460], rgAcceptableTypes: I },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: F },
    bestofyear_banner_mobile: { width: 500, height: 160, rgAcceptableTypes: F },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: ue,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: I },
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
      rgAcceptableTypes: I,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
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
      rgAcceptableTypes: I,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: I,
    },
    sale_store_capsule_small: { width: 462, height: 174, rgAcceptableTypes: I },
    sale_store_capsule_main: { width: 1232, height: 706, rgAcceptableTypes: I },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: I,
    },
    sale_cross_promo_background: {
      width: 1200,
      height: 600,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: I,
    },
    sale_cross_promo_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: I,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: F },
    spotlight_art_hero: { width: 748, height: 896, rgAcceptableTypes: I },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: F },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: F },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: F },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: F },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: F },
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
    takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: F },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: F },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: I },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: I },
  };
function z(e, t, n, r) {
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
function B(e, t, n, r) {
  let i = R[n];
  return i
    ? i.bDisableEnforceDimensions
      ? !!r
      : z(e, t, i.width, i.height)
    : !1;
}
function V(e, t, n) {
  let r = R[n];
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
function fe(e) {
  let t = R[e];
  return t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7);
}
function H(e, t) {
  return t.filter((t) => U(e, t));
}
function U(e, t) {
  return R[t].rgAcceptableTypes.includes(e);
}
var pe = s(t()),
  me = `A5DZIArSiNc-`,
  he = `VdxYwmaL6i4-`,
  ge = `_3PNPGWpNrDs-`,
  W = l(),
  G = class extends pe.Component {
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
        (await _e(
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
      let r = R[n.artworkType].width;
      return n ? N(r) : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = R[n.artworkType].height;
      return n ? N(r) : 0;
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
      return (0, W.jsx)(ee, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, W.jsxs)(`div`, {
          className: a(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, W.jsx)(m, {
              children: g(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, W.jsx)(`div`, {
              className: a(`DialogBodyText`),
              children: g(`#ImageUpload_CropModalDescription`),
            }),
            (0, W.jsxs)(`div`, {
              className: me,
              style: { width: n.width, height: n.height },
              children: [
                (0, W.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, W.jsx)(ne, {
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
            (0, W.jsxs)(`div`, {
              className: he,
              children: [
                (0, W.jsx)(`div`, {
                  className: ge,
                  children: g(`#ImageUpload_CropPreview`),
                }),
                (0, W.jsx)(`div`, { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, W.jsx)(p, {
              onClick: this.OnCrop,
              children: g(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
(e([u], G.prototype, `OnCrop`, null), e([u], G.prototype, `UpdateCrop`, null));
async function _e(e, t, n, r, i, a, o, s, c) {
  return new Promise((l, u) => {
    let f = K(c);
    if (!f) {
      u(`Invalid format provided`);
      return;
    }
    let p = document.createElement(`canvas`);
    ((p.width = o),
      (p.height = s),
      p.getContext(`2d`)?.drawImage(t, n, r, i, a, 0, 0, o, s),
      p.toBlob((t) => {
        let n = p.toDataURL(f);
        c !== 3 && n.startsWith(`data:image/png`)
          ? u(`Unable to encode into the requested file format`)
          : t
            ? ((e.file = d(t, e.filename)),
              (e.width = o),
              (e.height = s),
              (e.dataUrl = n),
              (e.uploadTime = Date.now()),
              (e.bCropped = !0),
              l())
            : u(`Unable to apply crop into image`);
      }));
  });
}
function K(e) {
  switch (e) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
function q(e) {
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
function ve(e) {
  return e == `waiting` || e == `uploading` || e == `processing`;
}
var J = class {
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
  constructor(e, t, n, i, a) {
    (r(this),
      (this.file = e),
      (this.filename = t),
      (this.fileType = q(t) ?? 0),
      (this.language = n),
      (this.uploadTime = Date.now()),
      (this.status = `pending`),
      (this.m_originalSize = a),
      (this.height = a.height),
      (this.width = a.width),
      (this.m_originalDataUrl = i),
      (this.dataUrl = i));
  }
  ResetImage() {
    ((this.height = this.m_originalSize.height),
      (this.width = this.m_originalSize.width),
      (this.dataUrl = this.m_originalDataUrl));
  }
  GetImageOptionLabel() {}
};
(e([n], J.prototype, `dataUrl`, void 0),
  e([n], J.prototype, `width`, void 0),
  e([n], J.prototype, `height`, void 0),
  e([n], J.prototype, `status`, void 0),
  e([n.ref], J.prototype, `message`, void 0),
  e([n], J.prototype, `language`, void 0));
var ye = 960,
  be = 311,
  xe = 480,
  Se = 156,
  Y = class extends J {
    m_rgImageOptions;
    m_currentImageOption = void 0;
    m_currentImageOptionKey = void 0;
    constructor(e, t, n, i, a, o) {
      (super(e, t, n, a, o), r(this), (this.m_rgImageOptions = i));
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
        let e = R[this.GetCurrentImageOption().artworkType];
        e &&
          ((n = e.width), (r = e.height), (i = !e.bDisableEnforceDimensions));
      }
      let o = this.width >= P(n) && this.height >= P(r),
        s = i ? z(this.width, this.height, n, r) : o,
        c = t && t != this.fileType,
        l =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? H(
                this.fileType,
                this.m_rgImageOptions?.map((e) => e.artworkType) || [],
              ).length == 0
            : !1,
        u = !!K(this.fileType),
        d = ``,
        p = !1,
        m;
      return (
        a
          ? l
            ? (d = g(`#ImageUpload_InvalidFileType`))
            : c
              ? (d = g(`#ImageUpload_InvalidFormat`, f(t) ?? ``))
              : !s && !u
                ? (d = g(`#ImageUpload_InvalidResolution`, N(n), N(r)))
                : o
                  ? !s && u
                    ? ((d = g(`#ImageUpload_InvalidDimensions`, N(n), N(r))),
                      (p = !0))
                    : ((Array.isArray(n) && this.width != N(n)) ||
                        (Array.isArray(r) && this.height != N(r))) &&
                      ((m ??= []),
                      m.push(g(`#ImageUpload_PreferredDimension`, N(n), N(r))))
                  : (d = g(`#ImageUpload_TooSmall`, N(n), N(r)))
          : (d = g(`#ImageUpload_InvalidFormatSelected`)),
        {
          error: d,
          warnings: m,
          needsCrop: p,
          match: this.GetCurrentImageOption(),
        }
      );
    }
    BSupportsLanguages() {
      return !0;
    }
    ComputeDefaultImageOption() {
      if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0) return;
      let e = H(
          this.fileType,
          this.m_rgImageOptions?.map((e) => e.artworkType),
        ),
        t = Z(this.width, this.height, e, !1);
      if ((t === void 0 && (t = Z(this.width, this.height, e, !0)), t)) {
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
(e([n], Y.prototype, `m_currentImageOption`, void 0),
  e([n], Y.prototype, `m_currentImageOptionKey`, void 0));
var Ce = class extends Y {
    video;
    constructor(e, t, n, r, i, a, o) {
      (super(e, t, n, r, i, a), (this.video = o));
    }
    BIsOriginalMinimumDimensions(e) {
      return V(this.video.videoWidth, this.video.videoHeight, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return U(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return L.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  we = class extends Y {
    constructor(e, t, n, r) {
      super(e, t, n, r, URL.createObjectURL(e), { width: 0, height: 0 });
    }
    BIsOriginalMinimumDimensions(e) {
      return fe(e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return U(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return L.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  X = class extends Y {
    bCropped = !1;
    localizedImageGroupPrimaryImage;
    media;
    constructor(e, t, n, i, a, o, s, c) {
      (super(e, t, n, i, a, o),
        r(this),
        (this.media = s),
        (this.localizedImageGroupPrimaryImage = c));
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
      return V(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return U(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return L.includes(this.fileType);
    }
    GetResizeDimension() {
      return Te(this.GetCurrentImageOption()?.artworkType);
    }
  };
e([n], X.prototype, `bCropped`, void 0);
function Te(e) {
  if (e === `background`)
    return [
      { width: ye, height: be },
      { width: xe, height: Se },
    ];
  if (e === `capsule` || e === `spotlight`)
    return [{ width: N(R[e].width) / 2, height: N(R[e].height) / 2 }];
}
function Z(e, t, n, r = !1) {
  if (n) {
    for (let i of n) if (r ? V(e, t, i) : B(e, t, i)) return i;
  }
}
var Ee = s(te()),
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
    this.m_cancel?.cancel(g(`#ImageUpload_CancelRequest`));
  }
};
function Ae(e, t, n) {
  if (((e == null || e == null) && (e = t), !n || n.length === 0)) return e;
  for (let t of n) if (h.IsELanguageValidInRealm(e, t)) return e;
  for (let e of n) if (h.IsELanguageValidInRealm(t, e)) return t;
  return n.includes(i.k_ESteamRealmGlobal) ? 0 : 29;
}
function je(e, t = 0) {
  let n = e.lastIndexOf(`.`);
  n != -1 && (e = e.slice(0, n).toLowerCase());
  let r = null,
    i = 0;
  e.endsWith(`korean`) && ((r = 4), (i = 6));
  for (let t = 0; t < 32; ++t) {
    let n = c(t);
    if (n.length <= i) continue;
    if (e.endsWith(n) && e.length > n.length + 2) {
      let a = e[e.length - n.length - 1];
      /\p{Alphabetic}|\p{Number}/u.test(a) || ((r = t), (i = n.length));
    }
    let a = o(t);
    a.length <= i || (e.endsWith(a) && ((r = t), (i = a.length)));
  }
  return {
    language: r ?? t,
    baseFilename:
      i > 0
        ? ((e) => e.replace(/[\s_-]+$/g, ``))(e.substring(0, e.length - i))
        : e,
  };
}
export {
  v as C,
  y as E,
  w as S,
  b as T,
  de as _,
  $ as a,
  S as b,
  we as c,
  q as d,
  G as f,
  N as g,
  le as h,
  Ae as i,
  ve as l,
  B as m,
  ke as n,
  X as o,
  R as p,
  je as r,
  Ce as s,
  Q as t,
  J as u,
  L as v,
  C as w,
  _ as x,
  x as y,
};

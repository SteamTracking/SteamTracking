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
  aa as p,
  da as m,
  g as h,
  ln as ee,
  on as te,
} from "./chunk~1fa4b8f2ff.js";
import "./chunk~8681f5c764.js";
import { t as ne } from "./chunk~f4e4ed5c17.js";
import "./chunk~ca0c999570.js";
import { t as re } from "./chunk~874b4cd3a1.js";
var g = [`app_header_capsule`, `app_main_capsule`],
  _ = [`sale_header`, `sale_logo`, `capsule`, `localized_title_image`],
  v = [`takeunder_art`, `takeunder_mobile_art`],
  y = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  b = [`marketingmessage_art`, `marketingmessage_art_2`],
  x = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  S = [`spotlight_art_hero`],
  C = [...g, ..._, ...v, ...y, ...b, ...x, ...S],
  w = 622,
  T = 1920,
  E = 450,
  D = 800,
  ie = 460,
  ae = 2108,
  oe = 300,
  se = 800,
  ce = 300,
  le = 644,
  O = 337,
  k = 155,
  A = 433,
  j = 199;
[...C];
function M(e) {
  return Array.isArray(e) ? e[0] : e;
}
function N(e) {
  return Math.min(...(Array.isArray(e) ? e : [e]));
}
function ue(e, t) {
  return t === void 0 ? M(e) : Array.isArray(e) ? e[t] : e;
}
var de = [1, 3, 2, 10],
  P = [1, 3, 2],
  F = [1, 3],
  I = [5, 4],
  fe = [7, 6],
  L = {
    capsule: { width: D, height: E, rgAcceptableTypes: F },
    marketingmessage_art_2_eventcapsule: {
      width: D,
      height: E,
      rgAcceptableTypes: F,
    },
    marketingmessage_art_eventcapsule: {
      width: D,
      height: E,
      rgAcceptableTypes: F,
    },
    spotlight: { width: ae, height: ie, rgAcceptableTypes: F },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: F,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: F,
    },
    localized_title_image: { width: T, height: w, rgAcceptableTypes: F },
    background: { width: T, height: w, rgAcceptableTypes: F },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    email_full: { width: se, height: oe, rgAcceptableTypes: F },
    email_centered: { width: le, height: ce, rgAcceptableTypes: F },
    broadcast_left: { width: [j, k], height: [A, O], rgAcceptableTypes: F },
    broadcast_right: { width: [j, k], height: [A, O], rgAcceptableTypes: F },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: P,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: P,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: P,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: P,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: F,
    },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: F },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: F,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: F,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: F },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: F },
    sale_logo: { width: [1200, 940], height: [460, 460], rgAcceptableTypes: F },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: P },
    bestofyear_banner_mobile: { width: 500, height: 160, rgAcceptableTypes: P },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: de,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: F },
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
      rgAcceptableTypes: F,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
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
      rgAcceptableTypes: F,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: F,
    },
    sale_store_capsule_small: { width: 462, height: 174, rgAcceptableTypes: F },
    sale_store_capsule_main: { width: 1232, height: 706, rgAcceptableTypes: F },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: F,
    },
    sale_cross_promo_background: {
      width: 1200,
      height: 600,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: F,
    },
    sale_cross_promo_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: F,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: P },
    spotlight_art_hero: { width: 748, height: 896, rgAcceptableTypes: F },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: P },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: P },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: P },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: P },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: P },
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
    takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: P },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: P },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: F },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: F },
  };
function R(e, t, n, r) {
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
function z(e, t, n, r) {
  let i = L[n];
  return i
    ? i.bDisableEnforceDimensions
      ? !!r
      : R(e, t, i.width, i.height)
    : !1;
}
function B(e, t, n) {
  let r = L[n];
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
function pe(e) {
  let t = L[e];
  return t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7);
}
function V(e, t) {
  return t.filter((t) => H(e, t));
}
function H(e, t) {
  return L[t].rgAcceptableTypes.includes(e);
}
var me = s(t()),
  he = `A5DZIArSiNc-`,
  ge = `VdxYwmaL6i4-`,
  _e = `_3PNPGWpNrDs-`,
  U = l(),
  W = class extends me.Component {
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
        (await ve(
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
      let r = L[n.artworkType].width;
      return n ? M(r) : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = L[n.artworkType].height;
      return n ? M(r) : 0;
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
      return (0, U.jsx)(h, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, U.jsxs)(`div`, {
          className: a(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, U.jsx)(ee, {
              children: m(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, U.jsx)(`div`, {
              className: a(`DialogBodyText`),
              children: m(`#ImageUpload_CropModalDescription`),
            }),
            (0, U.jsxs)(`div`, {
              className: he,
              style: { width: n.width, height: n.height },
              children: [
                (0, U.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, U.jsx)(re, {
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
            (0, U.jsxs)(`div`, {
              className: ge,
              children: [
                (0, U.jsx)(`div`, {
                  className: _e,
                  children: m(`#ImageUpload_CropPreview`),
                }),
                (0, U.jsx)(`div`, { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, U.jsx)(te, {
              onClick: this.OnCrop,
              children: m(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
(e([u], W.prototype, `OnCrop`, null), e([u], W.prototype, `UpdateCrop`, null));
async function ve(e, t, n, r, i, a, o, s, c) {
  return new Promise((l, u) => {
    let f = G(c);
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
function G(e) {
  switch (e) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
function K(e) {
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
function ye(e) {
  return e == `waiting` || e == `uploading` || e == `processing`;
}
var q = class {
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
      (this.fileType = K(t) ?? 0),
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
(e([n], q.prototype, `dataUrl`, void 0),
  e([n], q.prototype, `width`, void 0),
  e([n], q.prototype, `height`, void 0),
  e([n], q.prototype, `status`, void 0),
  e([n.ref], q.prototype, `message`, void 0),
  e([n], q.prototype, `language`, void 0));
var be = 960,
  xe = 311,
  Se = 480,
  Ce = 156,
  J = class extends q {
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
        let e = L[this.GetCurrentImageOption().artworkType];
        e &&
          ((n = e.width), (r = e.height), (i = !e.bDisableEnforceDimensions));
      }
      let o = this.width >= N(n) && this.height >= N(r),
        s = i ? R(this.width, this.height, n, r) : o,
        c = t && t != this.fileType,
        l =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? V(
                this.fileType,
                this.m_rgImageOptions?.map((e) => e.artworkType) || [],
              ).length == 0
            : !1,
        u = !!G(this.fileType),
        d = ``,
        p = !1,
        h;
      return (
        a
          ? l
            ? (d = m(`#ImageUpload_InvalidFileType`))
            : c
              ? (d = m(`#ImageUpload_InvalidFormat`, f(t) ?? ``))
              : !s && !u
                ? (d = m(`#ImageUpload_InvalidResolution`, M(n), M(r)))
                : o
                  ? !s && u
                    ? ((d = m(`#ImageUpload_InvalidDimensions`, M(n), M(r))),
                      (p = !0))
                    : ((Array.isArray(n) && this.width != M(n)) ||
                        (Array.isArray(r) && this.height != M(r))) &&
                      ((h ??= []),
                      h.push(m(`#ImageUpload_PreferredDimension`, M(n), M(r))))
                  : (d = m(`#ImageUpload_TooSmall`, M(n), M(r)))
          : (d = m(`#ImageUpload_InvalidFormatSelected`)),
        {
          error: d,
          warnings: h,
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
      let e = V(
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
(e([n], J.prototype, `m_currentImageOption`, void 0),
  e([n], J.prototype, `m_currentImageOptionKey`, void 0));
var Y = class extends J {
    video;
    constructor(e, t, n, r, i, a, o) {
      (super(e, t, n, r, i, a), (this.video = o));
    }
    BIsOriginalMinimumDimensions(e) {
      return B(this.video.videoWidth, this.video.videoHeight, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return H(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return I.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  we = class extends J {
    constructor(e, t, n, r) {
      super(e, t, n, r, URL.createObjectURL(e), { width: 0, height: 0 });
    }
    BIsOriginalMinimumDimensions(e) {
      return pe(e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return H(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return I.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  X = class extends J {
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
      return B(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return H(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return I.includes(this.fileType);
    }
    GetResizeDimension() {
      return Te(this.GetCurrentImageOption()?.artworkType);
    }
  };
e([n], X.prototype, `bCropped`, void 0);
function Te(e) {
  if (e === `background`)
    return [
      { width: be, height: xe },
      { width: Se, height: Ce },
    ];
  if (e === `capsule` || e === `spotlight`)
    return [{ width: M(L[e].width) / 2, height: M(L[e].height) / 2 }];
}
function Z(e, t, n, r = !1) {
  if (n) {
    for (let i of n) if (r ? B(e, t, i) : z(e, t, i)) return i;
  }
}
var Ee = s(ne()),
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
    this.m_cancel?.cancel(m(`#ImageUpload_CancelRequest`));
  }
};
function Ae(e, t, n) {
  if (((e == null || e == null) && (e = t), !n || n.length === 0)) return e;
  for (let t of n) if (p.IsELanguageValidInRealm(e, t)) return e;
  for (let e of n) if (p.IsELanguageValidInRealm(t, e)) return t;
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
  _ as C,
  v as E,
  C as S,
  y as T,
  fe as _,
  $ as a,
  x as b,
  we as c,
  K as d,
  W as f,
  M as g,
  ue as h,
  Ae as i,
  ye as l,
  z as m,
  ke as n,
  X as o,
  L as p,
  je as r,
  Y as s,
  Q as t,
  q as u,
  I as v,
  S as w,
  g as x,
  b as y,
};

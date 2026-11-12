/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Lt as n,
  ft as r,
  jt as i,
  kt as a,
  tt as o,
} from "./chunk~01cfc309bf.js";
import { a as s, c, l, o as u, r as d, s as f } from "./chunk~4c761eb6f4.js";
import "./chunk~8681f5c764.js";
import { t as p } from "./chunk~92931c6310.js";
import { t as m } from "./chunk~874b4cd3a1.js";
import {
  Au as h,
  Bu as ee,
  Hx as te,
  In as ne,
  Jy as g,
  Lb as _,
  Qb as v,
  Qx as y,
  TS as re,
  Ux as b,
  Vy as ie,
  Wy as x,
  _r as ae,
  cx as S,
  hS as oe,
  kl as se,
  mS as ce,
  mr as le,
  ux as ue,
  wc as C,
  wl as de,
} from "./main.js";
var w = e(o()),
  T = e(n()),
  E = class {
    constructor() {
      a(this);
    }
    m_mapClanToImages = new Map();
    m_mapClanImageLoadPromises = new Map();
    m_imageListChangeCallback = new Map();
    m_mapClanImageLoadState = new Map();
    m_mapImageIDToResolution = new Map();
    BHasImageResolution(e) {
      return this.m_mapImageIDToResolution.has(e.imageid);
    }
    GetImageResolution(e) {
      return this.m_mapImageIDToResolution.get(e.imageid);
    }
    SetImageResolution(e, t) {
      this.m_mapImageIDToResolution.set(e.imageid, t);
    }
    GetImageListCallbackForClanAccountIDInternal(e) {
      return (
        this.m_imageListChangeCallback.has(e) ||
          this.m_imageListChangeCallback.set(e, new te()),
        this.m_imageListChangeCallback.get(e)
      );
    }
    GetImageListCallbackForClanAccountID(e) {
      return this.GetImageListCallbackForClanAccountIDInternal(e);
    }
    m_vecClanImageDragListener = [];
    AddClanImageDragListener(e) {
      this.m_vecClanImageDragListener.indexOf(e) == -1 &&
        this.m_vecClanImageDragListener.push(e);
    }
    RemoveClanImageDragListener(e) {
      let t = this.m_vecClanImageDragListener.indexOf(e);
      t != -1 && this.m_vecClanImageDragListener.splice(t, 1);
    }
    GetClanImageDragListener() {
      return this.m_vecClanImageDragListener;
    }
    BHasLoadedClanImages(e) {
      return this.m_mapClanToImages.has(e.GetAccountID());
    }
    async LoadClanImages(e, t, n) {
      let r = e.GetAccountID();
      if (t || !this.m_mapClanImageLoadPromises.has(r)) {
        let i = this.InternalLoadClanImages(e, t, n);
        this.m_mapClanImageLoadPromises.set(r, i);
      }
      return this.m_mapClanImageLoadPromises.get(r);
    }
    async InternalLoadClanImages(e, t, n) {
      let r = e.GetAccountID();
      if (
        (y(e && r != 0, `ClanSteamID missing:` + e),
        e && (!this.m_mapClanToImages.has(r) || t))
      ) {
        let t = {},
          a,
          o =
            S.COMMUNITY_BASE_URL +
            `/gid/` +
            e.ConvertTo64BitString() +
            `/getimages/`;
        if (
          ((a = await w.default.get(o, {
            params: t,
            withCredentials: !0,
            cancelToken: n,
          })),
          a)
        ) {
          for (let e of a.data.images) e.clanAccountID = r;
          i(() => {
            (this.m_mapClanImageLoadState.set(r, { loaded: !0 }),
              this.m_mapClanToImages.set(r, a.data.images),
              this.GetImageListCallbackForClanAccountIDInternal(r).Dispatch(
                a.data.images,
              ));
          });
        }
      }
      return this.m_mapClanToImages.get(r);
    }
    GetLoadState(e) {
      return this.m_mapClanImageLoadState.get(e.GetAccountID());
    }
    GetClanImages(e) {
      return this.GetClanImagesByAccount(e.GetAccountID());
    }
    GetClanImagesByAccount(e) {
      return this.m_mapClanToImages.get(e) || [];
    }
    GetFilteredClanImages(e, t) {
      let n = D.GetClanImages(e);
      return this.GetFilteredClanImagesList(n, t);
    }
    GetFilteredClanImagesList(e, t) {
      if (t && t.trim().length > 0) {
        t = t.trim().toLowerCase();
        let n = [];
        for (let r of e)
          r.file_name && r.file_name.toLowerCase().indexOf(t) >= 0 && n.push(r);
        return n;
      }
      return e;
    }
    GetClanImageByID(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.imageid == t) : void 0;
    }
    GetClanImageByURL(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.thumb_url == t || e.url == t) : void 0;
    }
    GetClanImageByFile(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.file_name == t.name) : void 0;
    }
    GetClanImageByImageHash(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.image_hash == t) : void 0;
    }
    async DeleteClanImageByID(e, t) {
      let n = { sessionid: v(), imageid: t },
        r = e.GetAccountID(),
        i = await w.default.get(
          S.COMMUNITY_BASE_URL +
            `/gid/` +
            e.ConvertTo64BitString() +
            `/deleteimage/`,
          { params: n },
        );
      if (!i || i.status != 200 || i.data.success != 1) return i.data;
      let a = this.m_mapClanToImages.get(r);
      if (a) {
        let e = a.findIndex((e, n, r) => e.imageid == t);
        e >= 0 &&
          (a.splice(e, 1),
          this.GetImageListCallbackForClanAccountIDInternal(r).Dispatch([
            ...a,
          ]));
      }
      return i.data;
    }
    async DeleteClanImage(e, t) {
      return this.DeleteClanImageByID(e, t.imageid);
    }
  };
(_([t], E.prototype, `m_mapClanToImages`, void 0),
  _([t], E.prototype, `m_mapClanImageLoadState`, void 0));
var D = new E();
function fe(e) {
  let [t, n] = (0, T.useState)(D.GetClanImagesByAccount(e));
  return (de(D.GetImageListCallbackForClanAccountID(e), n), t);
}
function pe(e) {
  let t = ie.InitFromClanID(e, S.EUNIVERSE),
    n = p(`useLoadClanImages`),
    [r, i] = (0, T.useState)(() => D.BHasLoadedClanImages(t));
  return (
    (0, T.useEffect)(() => {
      let t = ie.InitFromClanID(e, S.EUNIVERSE);
      return (
        D.BHasLoadedClanImages(t) ||
          D.LoadClanImages(t, !1, n.token).then(() => i(!0)),
        () => n.cancel()
      );
    }, [e, n]),
    r
  );
}
var me = [`app_header_capsule`, `app_main_capsule`],
  he = [`sale_header`, `sale_logo`, `capsule`, `localized_title_image`],
  ge = [`takeunder_art`, `takeunder_mobile_art`],
  _e = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  ve = [`marketingmessage_art`, `marketingmessage_art_2`],
  ye = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  be = [`spotlight_art_hero`],
  xe = [...me, ...he, ...ge, ..._e, ...ve, ...ye, ...be],
  O = 622,
  k = 1920,
  A = 450,
  j = 800,
  Se = 460,
  Ce = 2108,
  we = 300,
  Te = 800,
  Ee = 300,
  De = 644,
  M = 337,
  N = 155,
  P = 433,
  Oe = 199;
[...xe];
function F(e) {
  return Array.isArray(e) ? e[0] : e;
}
function I(e) {
  return Math.min(...(Array.isArray(e) ? e : [e]));
}
function L(e, t) {
  return t === void 0 ? F(e) : Array.isArray(e) ? e[t] : e;
}
var ke = [1, 3, 2, 10],
  R = [1, 3, 2],
  z = [1, 3],
  Ae = [5, 4],
  B = {
    capsule: { width: j, height: A, rgAcceptableTypes: z },
    marketingmessage_art_2_eventcapsule: {
      width: j,
      height: A,
      rgAcceptableTypes: z,
    },
    marketingmessage_art_eventcapsule: {
      width: j,
      height: A,
      rgAcceptableTypes: z,
    },
    spotlight: { width: Ce, height: Se, rgAcceptableTypes: z },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: z,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: z,
    },
    localized_title_image: { width: k, height: O, rgAcceptableTypes: z },
    background: { width: k, height: O, rgAcceptableTypes: z },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: z,
    },
    email_full: { width: Te, height: we, rgAcceptableTypes: z },
    email_centered: { width: De, height: Ee, rgAcceptableTypes: z },
    broadcast_left: { width: [Oe, N], height: [P, M], rgAcceptableTypes: z },
    broadcast_right: { width: [Oe, N], height: [P, M], rgAcceptableTypes: z },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: R,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: R,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: z,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: z,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: R,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: R,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: z,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: z,
    },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: z },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: z,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: z,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: z },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: z },
    sale_logo: { width: [1200, 940], height: [460, 460], rgAcceptableTypes: z },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: R },
    bestofyear_banner_mobile: { width: 500, height: 160, rgAcceptableTypes: R },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: ke,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: z },
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
      rgAcceptableTypes: z,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: z,
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
      rgAcceptableTypes: z,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: z,
    },
    sale_store_capsule_small: { width: 462, height: 174, rgAcceptableTypes: z },
    sale_store_capsule_main: { width: 1232, height: 706, rgAcceptableTypes: z },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: z,
    },
    sale_cross_promo_background: {
      width: 1200,
      height: 600,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: z,
    },
    sale_cross_promo_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: z,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: R },
    spotlight_art_hero: { width: 748, height: 896, rgAcceptableTypes: z },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: R },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: R },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: R },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: R },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: R },
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
    takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: R },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: R },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: z },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: z },
  };
function V(e, t, n, r) {
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
function H(e, t, n, r) {
  let i = B[n];
  return i
    ? i.bDisableEnforceDimensions
      ? !!r
      : V(e, t, i.width, i.height)
    : !1;
}
function U(e, t, n) {
  let r = B[n];
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
function W(e, t) {
  return t.filter((t) => G(e, t));
}
function G(e, t) {
  return B[t].rgAcceptableTypes.includes(e);
}
var je = `A5DZIArSiNc-`,
  Me = `VdxYwmaL6i4-`,
  Ne = `_3PNPGWpNrDs-`,
  K = r(),
  q = class extends T.Component {
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
        (await Pe(
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
      let r = B[n.artworkType].width;
      return n ? F(r) : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = B[n.artworkType].height;
      return n ? F(r) : 0;
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
      return (0, K.jsx)(ne, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, K.jsxs)(`div`, {
          className: C(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, K.jsx)(ae, {
              children: g(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, K.jsx)(`div`, {
              className: C(`DialogBodyText`),
              children: g(`#ImageUpload_CropModalDescription`),
            }),
            (0, K.jsxs)(`div`, {
              className: je,
              style: { width: n.width, height: n.height },
              children: [
                (0, K.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, K.jsx)(m, {
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
            (0, K.jsxs)(`div`, {
              className: Me,
              children: [
                (0, K.jsx)(`div`, {
                  className: Ne,
                  children: g(`#ImageUpload_CropPreview`),
                }),
                (0, K.jsx)(`div`, { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, K.jsx)(le, {
              onClick: this.OnCrop,
              children: g(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
(_([b], q.prototype, `OnCrop`, null), _([b], q.prototype, `UpdateCrop`, null));
async function Pe(e, t, n, r, i, a, o, s, c) {
  return new Promise((l, u) => {
    let d = J(c);
    if (!d) {
      u(`Invalid format provided`);
      return;
    }
    let f = document.createElement(`canvas`);
    ((f.width = o),
      (f.height = s),
      f.getContext(`2d`)?.drawImage(t, n, r, i, a, 0, 0, o, s),
      f.toBlob((t) => {
        let n = f.toDataURL(d);
        c !== 3 && n.startsWith(`data:image/png`)
          ? u(`Unable to encode into the requested file format`)
          : t
            ? ((e.file = h(t, e.filename)),
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
function J(e) {
  switch (e) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
function Y(e) {
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
function Fe(e) {
  return e == `waiting` || e == `uploading` || e == `processing`;
}
var X = class {
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
    (a(this),
      (this.file = e),
      (this.filename = t),
      (this.fileType = Y(t) ?? 0),
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
(_([t], X.prototype, `dataUrl`, void 0),
  _([t], X.prototype, `width`, void 0),
  _([t], X.prototype, `height`, void 0),
  _([t], X.prototype, `status`, void 0),
  _([t.ref], X.prototype, `message`, void 0),
  _([t], X.prototype, `language`, void 0));
var Ie = 960,
  Le = 311,
  Re = 480,
  ze = 156,
  Z = class extends X {
    m_rgImageOptions;
    m_currentImageOption = void 0;
    m_currentImageOptionKey = void 0;
    constructor(e, t, n, r, i, o) {
      (super(e, t, n, i, o), a(this), (this.m_rgImageOptions = r));
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
        let e = B[this.GetCurrentImageOption().artworkType];
        e &&
          ((n = e.width), (r = e.height), (i = !e.bDisableEnforceDimensions));
      }
      let o = this.width >= I(n) && this.height >= I(r),
        s = i ? V(this.width, this.height, n, r) : o,
        c = t && t != this.fileType,
        l =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? W(
                this.fileType,
                this.m_rgImageOptions?.map((e) => e.artworkType) || [],
              ).length == 0
            : !1,
        u = !!J(this.fileType),
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
                ? (d = g(`#ImageUpload_InvalidResolution`, F(n), F(r)))
                : o
                  ? !s && u
                    ? ((d = g(`#ImageUpload_InvalidDimensions`, F(n), F(r))),
                      (p = !0))
                    : ((Array.isArray(n) && this.width != F(n)) ||
                        (Array.isArray(r) && this.height != F(r))) &&
                      ((m ??= []),
                      m.push(g(`#ImageUpload_PreferredDimension`, F(n), F(r))))
                  : (d = g(`#ImageUpload_TooSmall`, F(n), F(r)))
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
      let e = W(
          this.fileType,
          this.m_rgImageOptions?.map((e) => e.artworkType),
        ),
        t = Ve(this.width, this.height, e, !1);
      if ((t === void 0 && (t = Ve(this.width, this.height, e, !0)), t)) {
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
(_([t], Z.prototype, `m_currentImageOption`, void 0),
  _([t], Z.prototype, `m_currentImageOptionKey`, void 0));
var Q = class extends Z {
  bCropped = !1;
  localizedImageGroupPrimaryImage;
  media;
  constructor(e, t, n, r, i, o, s, c) {
    (super(e, t, n, r, i, o),
      a(this),
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
    return U(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
  }
  FileTypeMatchesImageTypes(e) {
    return G(this.fileType, e.artworkType);
  }
  BIsVideo() {
    return Ae.includes(this.fileType);
  }
  GetResizeDimension() {
    return Be(this.GetCurrentImageOption()?.artworkType);
  }
};
_([t], Q.prototype, `bCropped`, void 0);
function Be(e) {
  if (e === `background`)
    return [
      { width: Ie, height: Le },
      { width: Re, height: ze },
    ];
  if (e === `capsule` || e === `spotlight`)
    return [{ width: F(B[e].width) / 2, height: F(B[e].height) / 2 }];
}
function Ve(e, t, n, r = !1) {
  if (n) {
    for (let i of n) if (r ? U(e, t, i) : H(e, t, i)) return i;
  }
}
var He = class {};
function Ue(e, t, n) {
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
async function We(e, t, n, r, i) {
  let a = Ue(e, n, r),
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
async function Ge(e, t, n, r, i, a) {
  let o = Ue(e, r, i),
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
var Ke = class extends He {
  m_cancel = void 0;
  async UploadAllImages(e, t) {
    this.m_cancel = w.default.CancelToken.source();
    let n = this.BGetUploadsAreInSerial() ? 1 : 4,
      r,
      i = this.UploadSingleImage.bind(this);
    return (
      (r =
        n > 1
          ? await Ge(this.GetUploadImages(), n, i, e, t, this.m_cancel.token)
          : await We(this.GetUploadImages(), i, e, t, this.m_cancel.token)),
      r
    );
  }
  CancelAllUploads() {
    this.m_cancel?.cancel(g(`#ImageUpload_CancelRequest`));
  }
};
function qe(e, t, n) {
  if (((e == null || e == null) && (e = t), !n || n.length === 0)) return e;
  for (let t of n) if (x.IsELanguageValidInRealm(e, t)) return e;
  for (let e of n) if (x.IsELanguageValidInRealm(t, e)) return t;
  return n.includes(re.k_ESteamRealmGlobal) ? 0 : 29;
}
function Je(e, t = 0) {
  let n = e.lastIndexOf(`.`);
  n != -1 && (e = e.slice(0, n).toLowerCase());
  let r = null,
    i = 0;
  e.endsWith(`korean`) && ((r = 4), (i = 6));
  for (let t = 0; t < 32; ++t) {
    let n = oe(t);
    if (n.length <= i) continue;
    if (e.endsWith(n) && e.length > n.length + 2) {
      let a = e[e.length - n.length - 1];
      /\p{Alphabetic}|\p{Number}/u.test(a) || ((r = t), (i = n.length));
    }
    let a = ce(t);
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
function Ye(e, t, n) {
  let r = L(t.width, n),
    i = L(t.height, n);
  return {
    sKey: `${e}_${r}x${i}`,
    width: r,
    height: i,
    bEnforceDimensions: !t.bDisableEnforceDimensions,
    artworkType: e,
    bHiddenFromDropdown: e === `hero`,
    bDeprecated: (n ?? 0) >= 1,
    fnGetLabelText() {
      return this.artworkType == `spotlight`
        ? g(`#EventEditor_ArtworkType_store_spotlight`)
        : g(`#EventEditor_ArtworkType_` + this.artworkType);
    },
  };
}
function Xe(e) {
  return e?.flatMap((e) => {
    let t = B[e];
    if (
      (y(!!t, `Artwork Type not in Map ${e}`),
      typeof t.width == `number` && typeof t.height == `number`)
    )
      return [Ye(e, t)];
    {
      let n = Math.max(
        Array.isArray(t.width) ? t.width.length : 1,
        Array.isArray(t.height) ? t.height.length : 1,
      );
      return Array.from({ length: n }, (n, r) => Ye(e, t, r));
    }
  });
}
var $ = class extends Ke {
  m_filesToUpload = t.array();
  m_filesCompleted = t.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(e, t, n, r) {
    (super(),
      a(this),
      (this.m_clanSteamID = e),
      (this.m_rgImageOptions = Xe(t)),
      (this.m_localizedImageGroupPrimaryImage = n),
      (this.m_clanImagesV2 = r ?? !1));
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(e, t = 0) {
    let { language: n } = Je(e.name, t);
    return this.AddImageForLanguage(e, n);
  }
  async AddImageForLanguage(e, t) {
    if (!s(e.type) && !(ue.is_support && u(e.type))) return !1;
    let n = await c(e, u(e.type));
    if (!n) return !1;
    let r = new Q(
      e,
      e.name,
      t,
      this.m_rgImageOptions,
      n.src,
      l(n),
      n,
      this.m_localizedImageGroupPrimaryImage,
    );
    return ((this.m_filesToUpload = [...this.m_filesToUpload, r]), !0);
  }
  async AddExistingClanImage(e, t = 0) {
    let n = d.GetHashAndExt(e);
    if (!n) return !1;
    let r = d.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, n),
      i = await (0, w.default)({ url: r, method: `GET`, responseType: `blob` }),
      a = h(i.data, e.file_name);
    return await this.AddImage(a, t);
  }
  DeleteUploadImageByIndex(e) {
    (this.m_filesToUpload.splice(e, 1),
      (this.m_filesToUpload = [...this.m_filesToUpload]));
  }
  DeleteUploadImage(e) {
    let t = this.m_filesToUpload.findIndex(
      (t) => e.file == t.file && e.uploadTime == t.uploadTime,
    );
    t >= 0 && this.DeleteUploadImageByIndex(t);
  }
  ClearImages() {
    this.m_filesToUpload = t.array();
  }
  GetFilesUploaded() {
    return this.m_filesCompleted;
  }
  GetLastErrorFile() {
    return this.m_lastError;
  }
  GetCompletedFiles() {
    return this.m_filesCompleted.length;
  }
  GetTotalFiles() {
    return this.m_filesToUpload.length;
  }
  GetFilesToUpload() {
    return this.m_filesToUpload.map((e) => e.file);
  }
  GetUploadImages() {
    return this.m_filesToUpload;
  }
  BHasError() {
    return this.m_lastError != null;
  }
  BAllDone() {
    return (
      this.m_filesCompleted.length > 0 &&
      this.m_filesCompleted.length == this.m_filesToUpload.length
    );
  }
  BIsFileCompleted(e) {
    return this.m_filesCompleted.indexOf(e) != -1;
  }
  RetryAllFailedUploads() {
    (this.CancelAllUploads(), this.UploadAllImages());
  }
  async handleUploadRefresh(e) {
    await D.LoadClanImages(this.m_clanSteamID, !0, e);
  }
  BGetUploadsAreInSerial() {
    return !1;
  }
  async UploadSingleImage(e, t, n, r) {
    let i = e.file,
      a = e.GetCurrentImageOption(),
      o = e.GetResizeDimension(),
      s = new FormData();
    (s.append(`clanimage`, i, t),
      s.append(`sessionid`, v()),
      this.m_clanImagesV2 && s.append(`clan_images_v2`, `1`),
      a?.artworkType && s.append(`arttype`, a.artworkType),
      o &&
        o.length > 0 &&
        s.append(`resize`, o.map((e) => e.width + `x` + e.height).join(`,`)));
    let c = `/uploadimage/`,
      l = this.m_localizedImageGroupPrimaryImage;
    l &&
      ((c = `/ajaxuploadlocalizedimage/`),
      s.append(`origimagehash`, l.image_hash),
      l.thumbnail_hash && s.append(`thumbhash`, l.thumbnail_hash),
      s.append(`extension`, `` + l.file_type),
      s.append(`language`, `` + n));
    let u = t.split(`.`).pop()?.toLocaleLowerCase();
    (u == `webm` || u == `mp4`) &&
      (s.append(`video_width`, `` + e.width),
      s.append(`video_height`, `` + e.height));
    let d =
        S.COMMUNITY_BASE_URL +
        `/gid/` +
        this.m_clanSteamID.ConvertTo64BitString() +
        c,
      f = {
        cancelToken: r,
        withCredentials: !0,
        headers: { "Content-Type": `multipart/form-data` },
      },
      p,
      m = !0;
    try {
      ((p = await w.default.post(d, s, f)), this.m_filesCompleted.push(i));
    } catch (e) {
      ((m = !1),
        (this.m_lastError = {
          file: i,
          status: e.response ? e.response.status : 500,
          message: ee(e).strErrorMsg,
        }),
        (p = e.response));
    }
    return (
      l || (await this.handleUploadRefresh(r)), { bSuccess: m, result: p.data }
    );
  }
};
(_([t], $.prototype, `m_filesToUpload`, void 0),
  _([t], $.prototype, `m_filesCompleted`, void 0),
  _([t], $.prototype, `m_lastError`, void 0),
  _([b], $.prototype, `AddImage`, null),
  _([b], $.prototype, `AddExistingClanImage`, null),
  _([b], $.prototype, `DeleteUploadImageByIndex`, null),
  _([b], $.prototype, `DeleteUploadImage`, null),
  _([b], $.prototype, `ClearImages`, null));
var Ze = class extends $ {
  constructor(e, t, n) {
    super(e, t, n, !1);
  }
};
async function Qe(e, t, n, r, i) {
  let a =
      S.COMMUNITY_BASE_URL +
      `/gid/` +
      t.ConvertTo64BitString() +
      `/resizeimage/`,
    o = new FormData();
  return (
    o.append(`imagehash`, n),
    o.append(`extension`, r),
    o.append(`resize`, i.map((e) => e.width + `x` + e.height).join(`,`)),
    o.append(`sessionid`, v()),
    (await w.default.post(a, o, { cancelToken: e })).data.count
  );
}
function $e(e, t, n) {
  let r = se(t instanceof Array ? t : [t]),
    i = e.ConvertTo64BitString();
  return T.useMemo(() => new Ze(e, r, n), [i, r]);
}
export {
  Q as a,
  Y as c,
  H as d,
  F as f,
  pe as h,
  qe as i,
  q as l,
  fe as m,
  $e as n,
  Be as o,
  D as p,
  Je as r,
  Fe as s,
  Qe as t,
  B as u,
};

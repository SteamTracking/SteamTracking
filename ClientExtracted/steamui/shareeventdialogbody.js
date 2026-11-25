import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Bn as t,
  C as n,
  Ga as r,
  Ia as i,
  Ii as a,
  Jr as o,
  K as s,
  Ka as c,
  Ki as l,
  Li as u,
  Ma as d,
  Na as f,
  Rt as p,
  Un as m,
  Vt as h,
  Xa as ee,
  _t as g,
  c as _,
  eo as te,
  fi as ne,
  ft as re,
  ga as v,
  ir as y,
  ja as ie,
  pa as ae,
  pn as b,
  qr as oe,
  si as se,
  wt as ce,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import {
  M as le,
  ad as x,
  c as ue,
  n as de,
} from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { t as S } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import {
  Cn as fe,
  Cr as pe,
  En as C,
  Et as me,
  Fn as he,
  Hn as ge,
  Rn as _e,
  Sr as w,
  Tn as ve,
  Un as ye,
  Ur as be,
  Vt as xe,
  Yn as Se,
  bt as Ce,
  ir as we,
  kn as Te,
  ur as Ee,
  vn as De,
  wr as Oe,
  yt as T,
} from "./chunk~1fa4b8f2ff.js?contenthash=BmfmDRCl";
import { a as E, n as ke } from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import {
  C as Ae,
  _ as D,
  b as je,
  p as Me,
  v as Ne,
  w as Pe,
  x as Fe,
} from "./chunk~6b8ddcaac8.js?contenthash=UFt9dk73";
import { n as Ie } from "./chunk~008c00a198.js?contenthash=BdzYwNzG";
import {
  $ as Le,
  Q as Re,
  X as O,
  et as ze,
  it as Be,
  mt as Ve,
  nt as He,
  pt as Ue,
  tt as We,
} from "./chunk~cbbb6ae37c.js?contenthash=Czxw05ZN";
import { t as Ge } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
import { t as k } from "./chunk~25a6634263.js?contenthash=DFHxRlLQ";
import { C as Ke, Q as A } from "./library.js?contenthash=t9xy63v9";
import { k as qe, x as Je } from "./chunk~f25232ab1e.js?contenthash=DxqY1Uao";
import { t as Ye } from "./chunk~c55d6473b2.js?contenthash=FtX7CKb3";
import "./chunk~ca0c999570.js?contenthash=BCFlMf8K";
import { d as Xe } from "./chunk~70c16cc80c.js?contenthash=BtQf2cNP";
import {
  E as j,
  M as Ze,
  q as Qe,
  t as $e,
} from "./chunk~a19d1add1e.js?contenthash=CgJyrdit";
import "./chunk~8681f5c764.js?contenthash=Cs0z1bZr";
import { t as et } from "./chunk~92931c6310.js?contenthash=Cks2NbVq";
import {
  A as tt,
  d as nt,
  f as rt,
  k as it,
  n as at,
  p as ot,
  r as st,
  t as ct,
} from "./chunk~967b42dac9.js?contenthash=Dp9_XcYj";
import { t as lt } from "./chunk~874b4cd3a1.js?contenthash=C9LAdbZz";
import { i as ut, n as dt } from "./chunk~56e6a40e9e.js?contenthash=DGaEvP8i";
import {
  An as ft,
  bn as pt,
  dn as mt,
  jn as ht,
  kn as gt,
  mn as _t,
  un as vt,
  xn as yt,
} from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
var M = e(te()),
  N = Ge(),
  P = class e {
    m_eCurLang = l(d.LANGUAGE);
    m_rgHasData = se([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new oe();
    GetCallback() {
      return this.m_callback;
    }
    GetCurEditLanguage() {
      return this.m_eCurLang;
    }
    SetCurEditLanguage(e) {
      return (
        this.m_eCurLang != e &&
        ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
      );
    }
    SetHasLanguage(e) {
      e.forEach((e, t) => {
        this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
      });
    }
    BHasLanguageData(e) {
      return this.m_rgHasData[e];
    }
    GetHasLocalizationContext() {
      return this.m_bHasLocalizationContext;
    }
    SetHasLocalizationContext(e) {
      e != this.m_bHasLocalizationContext &&
        (this.m_bHasLocalizationContext = e);
    }
    static s_globalSingletonStore;
    static Get() {
      return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
    }
    constructor() {
      r(this);
    }
  };
(b([c], P.prototype, `m_eCurLang`, void 0),
  b([c], P.prototype, `m_rgHasData`, void 0),
  b([c], P.prototype, `m_bHasLocalizationContext`, void 0),
  b([o], P.prototype, `GetCurEditLanguage`, null),
  b([o], P.prototype, `SetCurEditLanguage`, null),
  b([i.bound], P.prototype, `SetHasLanguage`, null),
  b([o], P.prototype, `BHasLanguageData`, null));
var F = e(Ke()),
  bt = class {
    constructor() {
      r(this);
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
          this.m_imageListChangeCallback.set(e, new oe()),
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
        (ne(e && r != 0, `ClanSteamID missing:` + e),
        e && (!this.m_mapClanToImages.has(r) || t))
      ) {
        let t = {},
          i,
          a =
            d.COMMUNITY_BASE_URL +
            `/gid/` +
            e.ConvertTo64BitString() +
            `/getimages/`;
        if (
          ((i = await F.default.get(a, {
            params: t,
            withCredentials: !0,
            cancelToken: n,
          })),
          i)
        ) {
          for (let e of i.data.images) e.clanAccountID = r;
          ee(() => {
            (this.m_mapClanImageLoadState.set(r, { loaded: !0 }),
              this.m_mapClanToImages.set(r, i.data.images),
              this.GetImageListCallbackForClanAccountIDInternal(r).Dispatch(
                i.data.images,
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
      let n = I.GetClanImages(e);
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
        i = await F.default.get(
          d.COMMUNITY_BASE_URL +
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
(b([c], bt.prototype, `m_mapClanToImages`, void 0),
  b([c], bt.prototype, `m_mapClanImageLoadState`, void 0));
var I = new bt();
function xt(e) {
  let t = k.InitFromClanID(e, d.EUNIVERSE),
    n = et(`useLoadClanImages`),
    [r, i] = (0, M.useState)(() => I.BHasLoadedClanImages(t));
  return (
    (0, M.useEffect)(() => {
      let t = k.InitFromClanID(e, d.EUNIVERSE);
      return (
        I.BHasLoadedClanImages(t) ||
          I.LoadClanImages(t, !1, n.token).then(() => i(!0)),
        () => n.cancel()
      );
    }, [e, n]),
    r
  );
}
var St = `hgRTS5e4dgI-`,
  Ct = class extends ft {
    performSearch(e) {
      let t = [];
      return (
        this.props.supportBBCodes.forEach((n) => {
          n.indexOf(e) >= 0 && t.push({ name: n });
        }),
        t
      );
    }
    getSelection(e) {
      return `[` + e.name + `][/` + e.name + `]`;
    }
    getKey(e) {
      return e.name;
    }
    renderMatch(e) {
      return (0, N.jsxs)(
        `div`,
        {
          className: S(void 0),
          children: [
            (0, N.jsx)(`div`, { className: St, children: e.name }),
            `[`,
            e.name,
            `]...[/`,
            e.name,
            `]`,
          ],
        },
        e.name,
      );
    }
    renderNoMatchMessage() {
      return (0, N.jsx)(
        `div`,
        { className: S(ht, void 0), children: g(`#Bbcode_No_Match`) },
        `nomatches`,
      );
    }
    renderTooManyMatchesMessage(e) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  L = class extends M.Component {
    descTextAreaRef = M.createRef();
    m_MentionDialog;
    m_bDisabled = !0;
    m_iMentionSearchStartOffset;
    m_iMentionSearchCancelledOffset;
    constructor(e) {
      (super(e),
        (this.state = {
          mentionSearch: void 0,
          activeSuggestSearchType: void 0,
        }));
    }
    BindMentionDialog(e) {
      this.m_MentionDialog = e ?? void 0;
    }
    OnKeyDown(e) {
      this.state.activeSuggestSearchType &&
      this.m_MentionDialog &&
      !e.shiftKey &&
      !e.ctrlKey &&
      this.m_MentionDialog.BHandleKeyPress(e.keyCode)
        ? e.preventDefault()
        : (e.keyCode == 8 || e.keyCode == 46) &&
          (this.m_iMentionSearchCancelledOffset = void 0);
    }
    FindMatchOpener(e, t, n) {
      for (let r = n - 1; r >= 0; r--)
        if (t[r] == e) return r;
        else if (
          t[r] == ` ` ||
          t[r] ==
            `
`
        )
          break;
    }
    ReplaceSuggestedText(e, t) {
      let n = this.descTextAreaRef.current;
      if (!n) return;
      let r = n.selectionStart,
        i = n.value,
        a = this.FindMatchOpener(e, i, r);
      if (
        (a === void 0 && e == `@` && (a = this.FindMatchOpener(`＠`, i, r)),
        a !== void 0)
      ) {
        let e = i.substr(0, a);
        ((e += t), (r >= i.length || i[r] != ` `) && (e += ` `));
        let o = e.length;
        ((e += i.substr(r)),
          (n.value = e),
          (n.selectionStart = n.selectionEnd = o),
          this.props.fnSetText(e),
          this.FocusTextInput());
      }
    }
    OnFocus(e) {
      this.UpdateAutoSearchState();
    }
    OnKeyPress(e) {
      this.UpdateAutoSearchState();
    }
    OnClick(e) {
      this.UpdateAutoSearchState();
    }
    ClearMentionSearchState() {
      ((this.m_iMentionSearchStartOffset = void 0),
        this.state.activeSuggestSearchType &&
          this.setState({
            activeSuggestSearchType: void 0,
            mentionSearch: void 0,
          }));
    }
    OnEmoticonSuggestionSelected(e, t) {
      t
        ? (this.ReplaceSuggestedText(`:`, `:` + t + `:`),
          this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    OnBBCodeSuggestionSelected(e, t) {
      t
        ? (this.ReplaceSuggestedText(`[`, t), this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    FocusTextInput() {
      this.descTextAreaRef.current && this.descTextAreaRef.current.focus();
    }
    UpdateAutoSearchState() {
      let e = this.descTextAreaRef.current;
      if (!e || this.m_bDisabled) return;
      if (e.selectionStart != e.selectionEnd || !e.selectionStart) {
        this.ClearMentionSearchState();
        return;
      }
      let t = e.selectionStart,
        n = e.value,
        r,
        i;
      for (let e = t - 1; e >= 0; e--) {
        let t = e > 0 ? n[e - 1] : void 0;
        if (this.props.emoticonStore && n[e] == `:` && n.length > 2) {
          (t &&
            t != ` ` &&
            t !=
              `
` &&
            t != `:`) ||
            ((r = e), (i = `Emoticon`));
          break;
        }
        if (n[e] == `[` && (e + 1 > n.length || n[e + 1] != `/`)) {
          (t &&
            t != ` ` &&
            t !=
              `
` &&
            t != `]`) ||
            ((r = e), (i = `BBCode`));
          break;
        }
        if (
          n[e] == ` ` ||
          n[e] ==
            `
`
        )
          break;
      }
      if (r === void 0 || r === this.m_iMentionSearchCancelledOffset) {
        this.ClearMentionSearchState();
        return;
      }
      let a = n.substr(r + 1, t - r - 1);
      ((this.m_iMentionSearchStartOffset = r),
        this.setState({ activeSuggestSearchType: i, mentionSearch: a }));
    }
    GetTextAreaRef() {
      return this.descTextAreaRef;
    }
    GetTextAreaCurrent() {
      return this.descTextAreaRef.current;
    }
    render() {
      let {
          emoticonStore: e,
          supportBBCodes: t,
          fnSetText: n,
          ...r
        } = this.props,
        i;
      switch (this.state.activeSuggestSearchType) {
        case `Emoticon`:
          e &&
            (i = (0, N.jsx)(gt, {
              emoticonStore: e,
              strSearch: this.state.mentionSearch,
              nMinimumSearchLengthBeforeAutoSelection: 2,
              onSuggestionSelected: this.OnEmoticonSuggestionSelected,
              ref: this.BindMentionDialog,
            }));
          break;
        case `BBCode`:
          i = (0, N.jsx)(Ct, {
            supportBBCodes: t,
            strSearch: this.state.mentionSearch,
            nMinimumSearchLengthBeforeAutoSelection: 2,
            onSuggestionSelected: this.OnBBCodeSuggestionSelected,
            ref: this.BindMentionDialog,
          });
      }
      return (0, N.jsxs)(M.Fragment, {
        children: [
          i,
          (0, N.jsx)(`textarea`, {
            ...r,
            ref: this.descTextAreaRef,
            onKeyDown: this.OnKeyDown,
            onKeyUp: this.OnKeyPress,
            onFocus: this.OnFocus,
            onClick: this.OnClick,
          }),
        ],
      });
    }
  };
(b([o], L.prototype, `BindMentionDialog`, null),
  b([o], L.prototype, `OnKeyDown`, null),
  b([o], L.prototype, `OnFocus`, null),
  b([o], L.prototype, `OnKeyPress`, null),
  b([o], L.prototype, `OnClick`, null),
  b([o], L.prototype, `OnEmoticonSuggestionSelected`, null),
  b([o], L.prototype, `OnBBCodeSuggestionSelected`, null),
  b([o], L.prototype, `FocusTextInput`, null),
  b([o], L.prototype, `GetTextAreaRef`, null),
  b([o], L.prototype, `GetTextAreaCurrent`, null));
var wt = `nIUbxO5p4A8-`,
  Tt = `_0VP7ctGOadU-`,
  Et = `siVkCB-BeMc-`,
  Dt = `wrPMc1ko4O0-`,
  Ot = `sa1-P2tbrtc-`,
  kt = `_3QeIZHH9LCM-`,
  At = `REbb7We6KRY-`,
  jt = `DgynSAJA0e0-`,
  Mt = `WJB2hOx55Ic-`,
  Nt = `Px4wClOhj8g-`,
  Pt = `hluYSsWwKs8-`,
  Ft = `AALKXsdrG-s-`,
  It = `LR7E8btmRt0-`,
  Lt = `Mc05zduSJmM-`,
  Rt = `_7IgH0aB0drE-`,
  zt = `ZLkF2UoZt5M-`,
  Bt = `-KEQzYsMyLo-`,
  R = `quOQjx4gLwQ-`,
  Vt = [`app_header_capsule`, `app_main_capsule`],
  Ht = [`sale_header`, `sale_logo`, `capsule`, `localized_title_image`],
  Ut = [`takeunder_art`, `takeunder_mobile_art`],
  Wt = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  Gt = [`marketingmessage_art`, `marketingmessage_art_2`],
  Kt = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  qt = [`spotlight_art_hero`],
  Jt = [...Vt, ...Ht, ...Ut, ...Wt, ...Gt, ...Kt, ...qt],
  Yt = 622,
  Xt = 1920,
  Zt = 450,
  Qt = 800,
  $t = 460,
  en = 2108,
  tn = 300,
  nn = 800,
  rn = 300,
  an = 644,
  on = 337,
  sn = 155,
  cn = 433,
  ln = 199;
[...Jt];
function z(e) {
  return Array.isArray(e) ? e[0] : e;
}
function un(e) {
  return Math.min(...(Array.isArray(e) ? e : [e]));
}
function dn(e, t) {
  return t === void 0 ? z(e) : Array.isArray(e) ? e[t] : e;
}
var fn = [1, 3, 2, 10],
  B = [1, 3, 2],
  V = [1, 3],
  pn = [5, 4],
  H = {
    capsule: { width: Qt, height: Zt, rgAcceptableTypes: V },
    marketingmessage_art_2_eventcapsule: {
      width: Qt,
      height: Zt,
      rgAcceptableTypes: V,
    },
    marketingmessage_art_eventcapsule: {
      width: Qt,
      height: Zt,
      rgAcceptableTypes: V,
    },
    spotlight: { width: en, height: $t, rgAcceptableTypes: V },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: V,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: V,
    },
    localized_title_image: { width: Xt, height: Yt, rgAcceptableTypes: V },
    background: { width: Xt, height: Yt, rgAcceptableTypes: V },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: V,
    },
    email_full: { width: nn, height: tn, rgAcceptableTypes: V },
    email_centered: { width: an, height: rn, rgAcceptableTypes: V },
    broadcast_left: { width: [ln, sn], height: [cn, on], rgAcceptableTypes: V },
    broadcast_right: {
      width: [ln, sn],
      height: [cn, on],
      rgAcceptableTypes: V,
    },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: B,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: B,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: V,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: V,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: B,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: B,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: V,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: V,
    },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: V },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: V,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: V,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: V },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: V },
    sale_logo: { width: [1200, 940], height: [460, 460], rgAcceptableTypes: V },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: B },
    bestofyear_banner_mobile: { width: 500, height: 160, rgAcceptableTypes: B },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: fn,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: V },
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
      rgAcceptableTypes: V,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: V,
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
      rgAcceptableTypes: V,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: V,
    },
    sale_store_capsule_small: { width: 462, height: 174, rgAcceptableTypes: V },
    sale_store_capsule_main: { width: 1232, height: 706, rgAcceptableTypes: V },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: V,
    },
    sale_cross_promo_background: {
      width: 1200,
      height: 600,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: V,
    },
    sale_cross_promo_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: V,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: B },
    spotlight_art_hero: { width: 748, height: 896, rgAcceptableTypes: V },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: B },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: B },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: B },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: B },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: B },
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
    takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: B },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: B },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: V },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: V },
  };
function mn(e, t, n, r) {
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
function hn(e, t, n, r) {
  let i = H[n];
  return i
    ? i.bDisableEnforceDimensions
      ? !!r
      : mn(e, t, i.width, i.height)
    : !1;
}
function gn(e, t, n) {
  let r = H[n];
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
function _n(e, t) {
  return t.filter((t) => vn(e, t));
}
function vn(e, t) {
  return H[t].rgAcceptableTypes.includes(e);
}
var yn = `A5DZIArSiNc-`,
  bn = `VdxYwmaL6i4-`,
  xn = `_3PNPGWpNrDs-`,
  Sn = class extends M.Component {
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
        (await Cn(
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
      let r = H[n.artworkType].width;
      return n ? z(r) : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = H[n.artworkType].height;
      return n ? z(r) : 0;
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
      return (0, N.jsx)(Oe, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, N.jsxs)(`div`, {
          className: S(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, N.jsx)(Se, {
              children: g(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, N.jsx)(`div`, {
              className: S(`DialogBodyText`),
              children: g(`#ImageUpload_CropModalDescription`),
            }),
            (0, N.jsxs)(`div`, {
              className: yn,
              style: { width: n.width, height: n.height },
              children: [
                (0, N.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, N.jsx)(lt, {
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
            (0, N.jsxs)(`div`, {
              className: bn,
              children: [
                (0, N.jsx)(`div`, {
                  className: xn,
                  children: g(`#ImageUpload_CropPreview`),
                }),
                (0, N.jsx)(`div`, { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, N.jsx)(ye, {
              onClick: this.OnCrop,
              children: g(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
(b([o], Sn.prototype, `OnCrop`, null),
  b([o], Sn.prototype, `UpdateCrop`, null));
async function Cn(e, t, n, r, i, a, o, s, c) {
  return new Promise((l, u) => {
    let d = wn(c);
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
            ? ((e.file = _(t, e.filename)),
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
function wn(e) {
  switch (e) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
var Tn = `_1ZQxfdsiPgM-`,
  En = `NpcSqQhn8sA-`,
  Dn = `i0pjDy4li-A-`,
  On = `fwAY6BoxoKI-`,
  kn = `d-SkXlSVK18-`,
  An = (e) => {
    let { clanSteamID: t, fnImageSelectCallBack: n } = e,
      [r, i] = (0, M.useState)(``),
      a = xt(e.clanSteamID.GetAccountID()),
      o = () => e.closeModal && e.closeModal(),
      s = I.GetFilteredClanImages(t, r),
      c = (e) => {
        (n(e), o());
      };
    return (0, N.jsx)(be, {
      children: (0, N.jsx)(Oe, {
        onEscKeypress: o,
        children: (0, N.jsxs)(Te, {
          children: [
            (0, N.jsx)(_e, { children: g(`#ClanImageChooser_Title`) }),
            (0, N.jsx)(fe, {
              children: (0, N.jsxs)(ve, {
                children: [
                  (0, N.jsx)(`p`, { children: g(`#ClanImageChooser_Desc`) }),
                  (0, N.jsx)(De, {
                    placeholder: g(`#ClanImageChooser_Search`),
                    value: r,
                    onChange: (e) => i(e.currentTarget.value),
                  }),
                  (0, N.jsx)(`div`, {
                    className: Tn,
                    children: a
                      ? (0, N.jsx)(A, { size: `medium`, string: g(`#Loading`) })
                      : s.length > 0
                        ? s.map((e) =>
                            (0, N.jsx)(
                              jn,
                              {
                                clanImage: e,
                                searchStringHilight: r,
                                fnImageClick: c,
                              },
                              `ci` + e.image_hash,
                            ),
                          )
                        : r.trim().length == 0
                          ? (0, N.jsx)(`div`, {
                              children: g(`#ClanImageChooser_None`),
                            })
                          : (0, N.jsx)(`div`, {
                              children: g(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, N.jsx)(he, {
              children: (0, N.jsx)(C, {
                onClick: o,
                children: g(`#Button_Cancel`),
              }),
            }),
          ],
        }),
      }),
    });
  },
  jn = (e) => {
    let { clanImage: t, searchStringHilight: n, fnImageClick: r } = e,
      i = t.file_name ? t.file_name : ``,
      a = Mn(n, i, String(t.imageid), En);
    return (0, N.jsxs)(`div`, {
      className: Dn,
      children: [
        (0, N.jsx)(`div`, {
          className: On,
          style: { backgroundImage: `url( '${t.thumb_url}' )` },
          onDoubleClick: () => r(t),
        }),
        (0, N.jsx)(`div`, { className: kn, title: i, children: a }),
      ],
    });
  };
function Mn(e, t, n, r) {
  let i = [];
  if (e.length > 0) {
    let a = t.toLocaleLowerCase();
    for (let o = 0; o < t.length;) {
      let s = a.indexOf(e, o);
      if (s < 0) {
        i.push(
          (0, N.jsx)(`span`, { children: t.substring(o) }, n + `_` + String(o)),
        );
        break;
      }
      (o < s &&
        i.push(
          (0, N.jsx)(
            `span`,
            { children: t.substring(o, s) },
            n + `_` + String(o),
          ),
        ),
        i.push(
          (0, N.jsx)(
            `span`,
            { className: r, children: t.substr(s, e.length) },
            n + `_` + String(o),
          ),
        ),
        (o = s + e.length));
    }
  } else i.push((0, N.jsx)(`span`, { children: t }, n + `_null`));
  return i;
}
var U = class {
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
      (this.fileType = vt(t) ?? 0),
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
(b([c], U.prototype, `dataUrl`, void 0),
  b([c], U.prototype, `width`, void 0),
  b([c], U.prototype, `height`, void 0),
  b([c], U.prototype, `status`, void 0),
  b([c.ref], U.prototype, `message`, void 0),
  b([c], U.prototype, `language`, void 0));
var Nn = 960,
  Pn = 311,
  Fn = 480,
  In = 156,
  Ln = class extends U {
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
        let e = H[this.GetCurrentImageOption().artworkType];
        e &&
          ((n = e.width), (r = e.height), (i = !e.bDisableEnforceDimensions));
      }
      let o = this.width >= un(n) && this.height >= un(r),
        s = i ? mn(this.width, this.height, n, r) : o,
        c = t && t != this.fileType,
        l =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? _n(
                this.fileType,
                this.m_rgImageOptions?.map((e) => e.artworkType) || [],
              ).length == 0
            : !1,
        u = !!wn(this.fileType),
        d = ``,
        f = !1,
        p;
      return (
        a
          ? l
            ? (d = g(`#ImageUpload_InvalidFileType`))
            : c
              ? (d = g(`#ImageUpload_InvalidFormat`, ze(t) ?? ``))
              : !s && !u
                ? (d = g(`#ImageUpload_InvalidResolution`, z(n), z(r)))
                : o
                  ? !s && u
                    ? ((d = g(`#ImageUpload_InvalidDimensions`, z(n), z(r))),
                      (f = !0))
                    : ((Array.isArray(n) && this.width != z(n)) ||
                        (Array.isArray(r) && this.height != z(r))) &&
                      ((p ??= []),
                      p.push(g(`#ImageUpload_PreferredDimension`, z(n), z(r))))
                  : (d = g(`#ImageUpload_TooSmall`, z(n), z(r)))
          : (d = g(`#ImageUpload_InvalidFormatSelected`)),
        {
          error: d,
          warnings: p,
          needsCrop: f,
          match: this.GetCurrentImageOption(),
        }
      );
    }
    BSupportsLanguages() {
      return !0;
    }
    ComputeDefaultImageOption() {
      if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0) return;
      let e = _n(
          this.fileType,
          this.m_rgImageOptions?.map((e) => e.artworkType),
        ),
        t = Bn(this.width, this.height, e, !1);
      if ((t === void 0 && (t = Bn(this.width, this.height, e, !0)), t)) {
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
(b([c], Ln.prototype, `m_currentImageOption`, void 0),
  b([c], Ln.prototype, `m_currentImageOptionKey`, void 0));
var Rn = class extends Ln {
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
    return gn(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
  }
  FileTypeMatchesImageTypes(e) {
    return vn(this.fileType, e.artworkType);
  }
  BIsVideo() {
    return pn.includes(this.fileType);
  }
  GetResizeDimension() {
    return zn(this.GetCurrentImageOption()?.artworkType);
  }
};
b([c], Rn.prototype, `bCropped`, void 0);
function zn(e) {
  if (e === `background`)
    return [
      { width: Nn, height: Pn },
      { width: Fn, height: In },
    ];
  if (e === `capsule` || e === `spotlight`)
    return [{ width: z(H[e].width) / 2, height: z(H[e].height) / 2 }];
}
function Bn(e, t, n, r = !1) {
  if (n) {
    for (let i of n) if (r ? gn(e, t, i) : hn(e, t, i)) return i;
  }
}
var Vn = class {};
function Hn(e, t, n) {
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
async function Un(e, t, n, r, i) {
  let a = Hn(e, n, r),
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
async function Wn(e, t, n, r, i, a) {
  let o = Hn(e, r, i),
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
var Gn = class extends Vn {
  m_cancel = void 0;
  async UploadAllImages(e, t) {
    this.m_cancel = F.default.CancelToken.source();
    let n = this.BGetUploadsAreInSerial() ? 1 : 4,
      r,
      i = this.UploadSingleImage.bind(this);
    return (
      (r =
        n > 1
          ? await Wn(this.GetUploadImages(), n, i, e, t, this.m_cancel.token)
          : await Un(this.GetUploadImages(), i, e, t, this.m_cancel.token)),
      r
    );
  }
  CancelAllUploads() {
    this.m_cancel?.cancel(g(`#ImageUpload_CancelRequest`));
  }
};
function Kn(e, t = 0) {
  let n = e.lastIndexOf(`.`);
  n != -1 && (e = e.slice(0, n).toLowerCase());
  let r = null,
    i = 0;
  e.endsWith(`korean`) && ((r = 4), (i = 6));
  for (let t = 0; t < 32; ++t) {
    let n = u(t);
    if (n.length <= i) continue;
    if (e.endsWith(n) && e.length > n.length + 2) {
      let a = e[e.length - n.length - 1];
      /\p{Alphabetic}|\p{Number}/u.test(a) || ((r = t), (i = n.length));
    }
    let o = a(t);
    o.length <= i || (e.endsWith(o) && ((r = t), (i = o.length)));
  }
  return {
    language: r ?? t,
    baseFilename:
      i > 0
        ? ((e) => e.replace(/[\s_-]+$/g, ``))(e.substring(0, e.length - i))
        : e,
  };
}
function qn(e, t, n) {
  let r = dn(t.width, n),
    i = dn(t.height, n);
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
function Jn(e) {
  return e?.flatMap((e) => {
    let t = H[e];
    if (
      (ne(!!t, `Artwork Type not in Map ${e}`),
      typeof t.width == `number` && typeof t.height == `number`)
    )
      return [qn(e, t)];
    {
      let n = Math.max(
        Array.isArray(t.width) ? t.width.length : 1,
        Array.isArray(t.height) ? t.height.length : 1,
      );
      return Array.from({ length: n }, (n, r) => qn(e, t, r));
    }
  });
}
var W = class extends Gn {
  m_filesToUpload = c.array();
  m_filesCompleted = c.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(e, t, n, i) {
    (super(),
      r(this),
      (this.m_clanSteamID = e),
      (this.m_rgImageOptions = Jn(t)),
      (this.m_localizedImageGroupPrimaryImage = n),
      (this.m_clanImagesV2 = i ?? !1));
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(e, t = 0) {
    let { language: n } = Kn(e.name, t);
    return this.AddImageForLanguage(e, n);
  }
  async AddImageForLanguage(e, t) {
    if (!Re(e.type) && !(f.is_support && Le(e.type))) return !1;
    let n = await We(e, Le(e.type));
    if (!n) return !1;
    let r = new Rn(
      e,
      e.name,
      t,
      this.m_rgImageOptions,
      n.src,
      He(n),
      n,
      this.m_localizedImageGroupPrimaryImage,
    );
    return ((this.m_filesToUpload = [...this.m_filesToUpload, r]), !0);
  }
  async AddExistingClanImage(e, t = 0) {
    let n = O.GetHashAndExt(e);
    if (!n) return !1;
    let r = O.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, n),
      i = await (0, F.default)({ url: r, method: `GET`, responseType: `blob` }),
      a = _(i.data, e.file_name);
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
    this.m_filesToUpload = c.array();
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
    await I.LoadClanImages(this.m_clanSteamID, !0, e);
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
    let f =
        d.COMMUNITY_BASE_URL +
        `/gid/` +
        this.m_clanSteamID.ConvertTo64BitString() +
        c,
      p = {
        cancelToken: r,
        withCredentials: !0,
        headers: { "Content-Type": `multipart/form-data` },
      },
      m,
      h = !0;
    try {
      ((m = await F.default.post(f, s, p)), this.m_filesCompleted.push(i));
    } catch (e) {
      ((h = !1),
        (this.m_lastError = {
          file: i,
          status: e.response ? e.response.status : 500,
          message: Xe(e).strErrorMsg,
        }),
        (m = e.response));
    }
    return (
      l || (await this.handleUploadRefresh(r)), { bSuccess: h, result: m.data }
    );
  }
};
(b([c], W.prototype, `m_filesToUpload`, void 0),
  b([c], W.prototype, `m_filesCompleted`, void 0),
  b([c], W.prototype, `m_lastError`, void 0),
  b([o], W.prototype, `AddImage`, null),
  b([o], W.prototype, `AddExistingClanImage`, null),
  b([o], W.prototype, `DeleteUploadImageByIndex`, null),
  b([o], W.prototype, `DeleteUploadImage`, null),
  b([o], W.prototype, `ClearImages`, null));
var Yn = class extends W {
  constructor(e, t, n) {
    super(e, t, n, !1);
  }
};
function Xn(e, t, n) {
  let r = s(t instanceof Array ? t : [t]),
    i = e.ConvertTo64BitString();
  return M.useMemo(() => new Yn(e, r, n), [i, r]);
}
var Zn = x((e) => {
    let {
        clanSteamID: t,
        inputClanImage: r,
        nWidth: i,
        nHeight: a,
        setImage: o,
      } = e,
      s = M.useMemo(() => ({ width: i, height: a }), [i, a]),
      [c, l] = M.useState(void 0),
      [u, d] = M.useState(!!r),
      [f, p] = M.useState(!1),
      m = Xn(t, `dummy`),
      h = M.useCallback(
        async (e) => {
          if (
            (m.ClearImages(), e && (d(!0), await m.AddExistingClanImage(e, 0)))
          ) {
            l(e);
            let t = m.GetUploadImages()[0].IsValidAssetType(s);
            t.error.length != 0 ||
              t.needsCrop ||
              (r && r.image_hash == e.image_hash) ||
              o(e);
          }
          d(!1);
        },
        [m, r, o, s],
      );
    M.useEffect(() => {
      h(r);
    }, [h, r]);
    let ee = (e) => {
        let t = new k(ie.CLANSTEAMID);
        pe(
          (0, N.jsx)(An, {
            clanSteamID: t,
            fnImageSelectCallBack: (e) => h(e),
          }),
          n(e) ?? window,
        );
      },
      _ = (e) => {
        let t = n(e) ?? window,
          r = m.GetUploadImages()[0];
        pe(
          (0, N.jsx)(Sn, {
            ownerWin: t,
            uploadFile: r,
            forceResolution: { width: i, height: a },
            fileType: 3,
          }),
          t,
        );
      },
      te = async () => {
        p(!0);
        try {
          let e = await m.UploadAllImages(s),
            n = Object.values(e);
          if (n && n.length > 0) {
            ne(
              n.length == 1,
              `ClanImagePickForCertainSize expected size 1, got ` + n.length,
            );
            let e = n[0].bSuccess ? n[0].uploadResult : void 0,
              r = O.GetHashAndExt(e ?? null),
              i = O.GetThumbHashAndExt(e ?? null);
            if (e?.image_hash && e.file_type !== void 0 && r && i) {
              let n = O.GenerateURLFromHashAndExt(t, r),
                a = O.GenerateURLFromHashAndExt(t, i),
                s = {
                  imageid: -11231412,
                  image_hash: e.image_hash,
                  thumbnail_hash: e.thumbnail_hash,
                  file_type: e.file_type,
                  file_name: e.file_name,
                  clanAccountID: t.GetAccountID(),
                  url: n,
                  thumb_url: a,
                  uploaded_time: Date.now() / 1e3,
                };
              (l(s), o(s));
            }
          }
        } finally {
          p(!1);
        }
      },
      re = ``,
      v = !1,
      y;
    if (m && m.GetFilesToUpload().length > 0) {
      y = m.GetUploadImages()[0];
      let e = y.IsValidAssetType(s);
      ((re = e.error), (v = e.needsCrop));
    }
    return (0, N.jsxs)(N.Fragment, {
      children: [
        u
          ? (0, N.jsx)(A, { size: `medium`, string: g(`#Loading`) })
          : c &&
            (0, N.jsx)(`div`, {
              className: `_9Z5REaLWRq4-`,
              style: {
                backgroundImage: `url( '${y ? y.dataUrl : c.url}' )`,
                height: `${a}px`,
                width: `${i}px`,
              },
            }),
        !!re && (0, N.jsx)(`p`, { children: re }),
        v && (0, N.jsx)(C, { onClick: _, children: g(`#BBCode_ResizeImage`) }),
        y &&
          y.bCropped &&
          (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(`div`, {
                children: g(`#ClanImagePickAndResize_UploadStatus`, y.status),
              }),
              f
                ? (0, N.jsx)(A, { string: g(`#Uploading`), size: `small` })
                : (0, N.jsx)(C, {
                    onClick: te,
                    children: g(`#ClanImagePickAndResize_UploadImage`),
                  }),
            ],
          }),
        (0, N.jsx)(C, {
          onClick: ee,
          children: g(`#BBCode_ChooseImage`, i, a),
        }),
      ],
    });
  }),
  G,
  Qn = class extends M.Component {
    static {
      G = this;
    }
    m_cancelSignal = F.default.CancelToken.source();
    static s_formattingHelp = new Map();
    constructor(e) {
      (super(e),
        (this.state = {
          formattingHelp: {
            __html: G.s_formattingHelp.get(e.formatType) ?? ``,
          },
        }));
    }
    componentDidMount() {
      this.AjaxGetFormattingHelp().catch((e) => {
        this.setState(Xe(e));
      });
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`FormattingHelpWidget component unmounted`);
    }
    static GetHelpURL(e, t) {
      return (
        d.COMMUNITY_BASE_URL +
        `comment/` +
        e +
        `/formattinghelp` +
        (t ? `?ajax=1` : ``)
      );
    }
    async AjaxGetFormattingHelp() {
      if (this.state.formattingHelp.__html == ``) {
        let e = { sessionid: v() },
          t;
        ((t = await F.default.get(G.GetHelpURL(this.props.formatType, !0), {
          params: e,
          cancelToken: this.m_cancelSignal.token,
        })),
          G.s_formattingHelp.set(this.props.formatType, t.data),
          this.setState({ formattingHelp: { __html: t.data } }));
      }
    }
    render() {
      return this.state.strErrorMsg
        ? (0, N.jsxs)(`div`, {
            children: [
              this.state.strErrorMsg,
              (0, N.jsx)(`br`, {}),
              this.state.errorCode,
            ],
          })
        : this.state.formattingHelp.__html == ``
          ? (0, N.jsx)(A, {})
          : (0, N.jsx)(T, {
              strTitle: g(`#EventEditor_FormattingHelp_GetHelpLink`),
              strDescription: ``,
              closeModal: this.props.closeModal,
              onOK: this.props.closeModal,
              onCancel: this.props.closeModal,
              bAlertDialog: !0,
              className: `ModernBBStyles`,
              children: (0, N.jsx)(`div`, {
                dangerouslySetInnerHTML: this.state.formattingHelp,
              }),
            });
    }
  };
Qn = G = b([x], Qn);
var $n,
  K = class extends M.Component {
    descAutoTextAreaRef = M.createRef();
    constructor(e) {
      (super(e), (this.state = { bShowDragTarget: !1 }));
    }
    componentDidMount() {
      I.AddClanImageDragListener(this.ClanImageDragListener);
    }
    componentWillUnmount() {
      I.RemoveClanImageDragListener(this.ClanImageDragListener);
    }
    ClanImageDragListener(e, t) {
      this.state.bShowDragTarget != t && this.setState({ bShowDragTarget: t });
    }
    onFocus(e) {
      e && e.target.select();
    }
    InsertText(e) {
      q.replaceSelection(this.GetTextAreaRef()?.current, e);
    }
    OnTextAreaDropListener(e) {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        e.dataTransfer.items && e.dataTransfer.items[0])
      ) {
        let t = e.dataTransfer.getData(`text`);
        if (t && t.length > 0) {
          for (let e of [O.GetBaseURL(), O.GetBaseURLV2()])
            if (t.startsWith(e)) {
              let n = `[img]` + Be + `/` + t.substr(e.length) + `[/img]`;
              q.replaceSelection(this.GetTextAreaRef()?.current, n);
              break;
            }
        }
      }
    }
    GetTextAreaRef() {
      return this.descAutoTextAreaRef.current?.GetTextAreaRef();
    }
    render() {
      return (0, N.jsxs)(M.Fragment, {
        children: [
          (0, N.jsx)(J, {
            pathToImages:
              d.COMMUNITY_CDN_URL + `public/images/sharedfiles/guides/`,
            fnTextareaRef: this.GetTextAreaRef,
            emoticonStore: this.props.emoticonStore,
            supportBBCodes: this.props.limitBBCode
              ? this.props.limitBBCode
              : Ue,
            bSupportHTMLImport: this.props.bSupportHTMLImport,
            showFormatHelp: this.props.showFormatHelp,
            bEmbeddedInDialog: this.props.bEmbeddedInDialog,
            clanSteamID: this.props.clanSteamID,
          }),
          (0, N.jsx)(`div`, {
            className: S(
              Tt,
              R,
              this.state.bShowDragTarget ? wt : ``,
              this.props.className ? this.props.className : ``,
            ),
            children: (0, N.jsx)(L, {
              cols: 90,
              rows: this.props.nOverridesRows || 22,
              maxLength: 64e3,
              className: S(
                Dt,
                this.props.classNameForTextArea
                  ? this.props.classNameForTextArea
                  : ``,
              ),
              placeholder: this.props.strPlaceholder,
              ref: this.descAutoTextAreaRef,
              value: this.props.fnGetCurText(),
              onChange: this.props.fnOnTextChange,
              onDrop: this.OnTextAreaDropListener,
              emoticonStore: this.props.emoticonStore,
              fnSetText: this.props.fnSetText,
              supportBBCodes: this.props.limitBBCode
                ? this.props.limitBBCode
                : Ue,
            }),
          }),
        ],
      });
    }
  };
(b([o], K.prototype, `ClanImageDragListener`, null),
  b([o], K.prototype, `onFocus`, null),
  b([o], K.prototype, `OnTextAreaDropListener`, null),
  b([o], K.prototype, `GetTextAreaRef`, null),
  (K = b([x], K)));
var q = class e {
    static BIsFireFox() {
      return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
        navigator.userAgent,
      );
    }
    static replaceSelection(t, n) {
      if (!t) return;
      let r = t.selectionStart;
      (t.focus(),
        e.InsertTextAtSelect(n, t),
        t.setSelectionRange(r, r + n.length));
    }
    static getSelectedString(e) {
      return e
        ? e.value.substr(e.selectionStart, e.selectionEnd - e.selectionStart)
        : ``;
    }
    static wrapBBCode(t, n, r) {
      if (!r) return;
      let i = e.getSelectedString(r),
        a = ``;
      ((a =
        i.indexOf(t) == 0 && i.lastIndexOf(n) == i.length - n.length
          ? i.substr(t.length, i.length - t.length - n.length)
          : t + i + n),
        e.replaceSelection(r, a));
    }
    static append(t, n) {
      n &&
        (n.focus(),
        n.setSelectionRange(n.value.length, n.value.length),
        e.InsertTextAtSelect(t, n));
    }
    static ClearTextArea(e) {
      if (e) {
        e.focus();
        let t = e.value.length;
        if (t !== 0) {
          e.setRangeText
            ? e.setRangeText(``, 0, t, `preserve`)
            : (e.value = ``);
          let n = new Event(`input`, { bubbles: !0 });
          e.dispatchEvent(n);
        }
        e.focus();
      }
    }
    static overwrite(t, n) {
      n && (e.ClearTextArea(n), e.InsertTextAtSelect(t, n));
    }
    static InsertTextAtSelect(e, t) {
      let n = t.selectionStart,
        r = t.selectionEnd;
      if (n !== null && r !== null) {
        t.setRangeText
          ? t.setRangeText(e, n, r, `preserve`)
          : (t.value = t.value.slice(0, n) + e + t.value.slice(r));
        let i = new Event(`input`, { bubbles: !0 });
        (t.dispatchEvent(i),
          (t.selectionStart = t.selectionEnd = n + e.length));
      }
      t.focus();
    }
  },
  J = class extends M.Component {
    m_linkPopupRef = M.createRef();
    onBold() {
      q.wrapBBCode(`[b]`, `[/b]`, this.props.fnTextareaRef()?.current);
    }
    onItalics() {
      q.wrapBBCode(`[i]`, `[/i]`, this.props.fnTextareaRef()?.current);
    }
    onUnderline() {
      q.wrapBBCode(`[u]`, `[/u]`, this.props.fnTextareaRef()?.current);
    }
    onStrikeThrough() {
      q.wrapBBCode(
        `[strike]`,
        `[/strike]`,
        this.props.fnTextareaRef()?.current,
      );
    }
    onHeader() {
      q.wrapBBCode(`[h1]`, `[/h1]`, this.props.fnTextareaRef()?.current);
    }
    onHeader2() {
      q.wrapBBCode(`[h2]`, `[/h2]`, this.props.fnTextareaRef()?.current);
    }
    onHeader3() {
      q.wrapBBCode(`[h3]`, `[/h3]`, this.props.fnTextareaRef()?.current);
    }
    onUnorderedList() {
      this.handleList(`list`);
    }
    onOrderedList() {
      this.handleList(`olist`);
    }
    handleList(e) {
      let t = this.props.fnTextareaRef()?.current;
      if (!t) return;
      let n =
          `[` +
          e +
          `]
`,
        r = `[/` + e + `]`;
      if (t.selectionStart == t.selectionEnd)
        q.wrapBBCode(
          n + `[*]`,
          `
` + r,
          t,
        );
      else {
        let e =
          n +
          q
            .getSelectedString(t)
            .split(`
`)
            .map((e) => (e.match(/\*+\s/) ? `[*]` : `[*] `) + e).join(`
`) +
          `
` +
          r;
        q.replaceSelection(t, e);
      }
    }
    OnAddLink(e) {
      let t = this.props.fnTextareaRef();
      t && w((0, N.jsx)(Z, { textareaRef: t }), n(e) ?? window);
    }
    ShowHelpDialog(e) {
      this.props.showFormatHelp &&
        w(
          (0, N.jsx)(Qn, { formatType: this.props.showFormatHelp }),
          n(e) ?? window,
        );
    }
    OnConvertHTMLToBBCodeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let r = n(e) ?? window;
      w((0, N.jsx)($, { ownerWindow: r, textareaRef: t }), r);
    }
    OnOpenYoutubeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let r = d.IMG_URL + `applications/community/`;
      w((0, N.jsx)(X, { textareaRef: t, pathToImages: r }), n(e) ?? window);
    }
    OnOpenImageDialog(e) {
      let t = this.props.fnTextareaRef();
      t && w((0, N.jsx)(Q, { textareaRef: t }), n(e) ?? window);
    }
    OnOpenSpeakerDialog(e) {
      let t = this.props.fnTextareaRef(),
        r = this.props.clanSteamID;
      t &&
        r &&
        pe((0, N.jsx)(er, { clanSteamID: r, textareaRef: t }), n(e) ?? window);
    }
    OnEmoticonSelected(e, t = !1) {
      let n = `\u02D0${e}\u02D0`;
      (q.replaceSelection(this.props.fnTextareaRef()?.current, n),
        this.props.fnTextareaRef()?.current?.focus());
    }
    BSupports(e) {
      return this.props.supportBBCodes.findIndex((t) => t == e) >= 0;
    }
    render() {
      let {
          showFormatHelp: e,
          bEmbeddedInDialog: t,
          bSupportHTMLImport: n,
          pathToImages: r,
        } = this.props,
        i;
      return (
        e &&
          (i = t
            ? (0, N.jsx)(`span`, {
                className: S(`ttip`, void 0),
                children: (0, N.jsx)(E, {
                  toolTipContent: g(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: (0, N.jsxs)(`a`, {
                    href: Qn.GetHelpURL(e, !1),
                    target: d.IN_CLIENT ? void 0 : `_blank`,
                    children: [
                      (0, N.jsx)(`img`, { src: r + `/action_help.png` }),
                      ` `,
                      g(`#EventEditor_FormattingHelp_GetHelpLink`),
                    ],
                  }),
                }),
              })
            : (0, N.jsx)(`span`, {
                onClick: this.ShowHelpDialog,
                className: S(`ttip`, void 0),
                children: (0, N.jsxs)(E, {
                  toolTipContent: g(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: [
                    (0, N.jsx)(`img`, { src: r + `/action_help.png` }),
                    ` `,
                    g(`#EventEditor_FormattingHelp_GetHelpLink`),
                  ],
                }),
              })),
        (0, N.jsxs)(`div`, {
          className: jt,
          children: [
            this.BSupports(`b`) &&
              (0, N.jsx)(Y, {
                onClick: this.onBold,
                tooltip: g(`#Editor_Bold`),
                imgURL: this.props.pathToImages + `/format_bold.png`,
              }),
            this.BSupports(`u`) &&
              (0, N.jsx)(Y, {
                onClick: this.onUnderline,
                tooltip: g(`#Editor_Underline`),
                imgURL: this.props.pathToImages + `/format_underline.png`,
              }),
            this.BSupports(`i`) &&
              (0, N.jsx)(Y, {
                onClick: this.onItalics,
                tooltip: g(`#Editor_Italics`),
                imgURL: this.props.pathToImages + `/format_italic.png`,
              }),
            this.BSupports(`strike`) &&
              (0, N.jsx)(Y, {
                onClick: this.onStrikeThrough,
                tooltip: g(`#Editor_StrikeThrough`),
                imgURL: this.props.pathToImages + `/format_strike.png`,
              }),
            !(!this.BSupports(`url`) || t) &&
              (0, N.jsx)(Y, {
                onClick: this.OnAddLink,
                tooltip: g(`#Editor_Link`),
                imgURL: this.props.pathToImages + `/format_link.png`,
              }),
            this.BSupports(`list`) &&
              (0, N.jsx)(Y, {
                onClick: this.onUnorderedList,
                tooltip: g(`#Editor_Unordered`),
                imgURL: this.props.pathToImages + `/format_bullet.png`,
              }),
            this.BSupports(`olist`) &&
              (0, N.jsx)(Y, {
                onClick: this.onOrderedList,
                tooltip: g(`#Editor_Ordered`),
                imgURL: this.props.pathToImages + `/format_numbered.png`,
              }),
            this.BSupports(`h1`) &&
              (0, N.jsx)(Y, {
                onClick: this.onHeader,
                tooltip: g(`#Editor_Header`),
                imgURL: this.props.pathToImages + `/format_header1.png`,
              }),
            this.BSupports(`h2`) &&
              (0, N.jsx)(Y, {
                onClick: this.onHeader2,
                tooltip: g(`#Editor_Header2`),
                imgURL: this.props.pathToImages + `/format_header2.png`,
              }),
            this.BSupports(`h3`) &&
              (0, N.jsx)(Y, {
                onClick: this.onHeader3,
                tooltip: g(`#Editor_Header3`),
                imgURL: this.props.pathToImages + `/format_header3.png`,
              }),
            this.BSupports(`previewyoutube`) &&
              (0, N.jsx)(Y, {
                onClick: this.OnOpenYoutubeDialog,
                tooltip: g(`#EventEditor_InsertYouTube`),
                imgURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
              }),
            (0, N.jsx)(`span`, {
              className: `ttip`,
              children:
                this.props.emoticonStore &&
                (0, N.jsx)(E, {
                  toolTipContent: g(`#Editor_Emoticon`),
                  children: (0, N.jsx)(Qe, {
                    title: ` `,
                    className: S(`_5LFNlKLTFJM-`),
                    disabled: !1,
                    OnEmoticonSelected: this.OnEmoticonSelected,
                    rtLastAckedNewEmoticons: Number.MAX_VALUE,
                    emoticonStore: this.props.emoticonStore,
                    useImg: this.props.pathToImages + `/format_emote.png`,
                    contextOptions: {
                      bOverlapHorizontal: !0,
                      bDisablePopTop: !0,
                    },
                  }),
                }),
            }),
            !(!this.BSupports(`img`) || t) &&
              (0, N.jsx)(Y, {
                onClick: this.OnOpenImageDialog,
                tooltip: g(`#EventEditor_InsertImage`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !!(
              f.is_support &&
              this.props.clanSteamID &&
              this.BSupports(`speaker`)
            ) &&
              (0, N.jsx)(Y, {
                onClick: this.OnOpenSpeakerDialog,
                tooltip: g(`#EventEditor_AddSpeaker`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !(!n || t) &&
              (0, N.jsx)(Y, {
                onClick: this.OnConvertHTMLToBBCodeDialog,
                className: void 0,
                tooltip: g(`#EventEditor_ImportFromHTML_ttip`),
                children: g(`#EventEditor_ImportHTML`),
              }),
            i,
          ],
        })
      );
    }
  };
(b([o], J.prototype, `onBold`, null),
  b([o], J.prototype, `onItalics`, null),
  b([o], J.prototype, `onUnderline`, null),
  b([o], J.prototype, `onStrikeThrough`, null),
  b([o], J.prototype, `onHeader`, null),
  b([o], J.prototype, `onHeader2`, null),
  b([o], J.prototype, `onHeader3`, null),
  b([o], J.prototype, `onUnorderedList`, null),
  b([o], J.prototype, `onOrderedList`, null),
  b([o], J.prototype, `OnAddLink`, null),
  b([o], J.prototype, `ShowHelpDialog`, null),
  b([o], J.prototype, `OnConvertHTMLToBBCodeDialog`, null),
  b([o], J.prototype, `OnOpenYoutubeDialog`, null),
  b([o], J.prototype, `OnOpenImageDialog`, null),
  b([o], J.prototype, `OnOpenSpeakerDialog`, null),
  b([o], J.prototype, `OnEmoticonSelected`, null),
  (J = b([x], J)));
function Y(e) {
  return (0, N.jsx)(`span`, {
    onClick: e.onClick,
    className: e.className,
    children: (0, N.jsxs)(E, {
      toolTipContent: e.tooltip,
      className: `ttip`,
      children: [
        !!e.imgURL && (0, N.jsx)(`img`, { src: e.imgURL }),
        e.children,
      ],
    }),
  });
}
var X = class extends M.Component {
  state = { youtubeInput: ``, alignment: j.left };
  OnYoutubeInsertLink() {
    let e = this.state.youtubeInput && Ze(this.state.youtubeInput);
    if (!e) alert(g(`#EventEditor_InsertYouTube_NoURL`));
    else {
      if (this.state.alignment == j.summary) {
        let t =
          `https://www.youtube.com/watch?v=` +
          e.strVideoID +
          (e.nStartSeconds ? `&t=` + e.nStartSeconds : ``);
        q.wrapBBCode(t, ``, this.props.textareaRef.current);
      } else {
        let t =
          `[previewyoutube=` + e.strVideoID + `;` + this.state.alignment + `]`;
        q.wrapBBCode(t, `[/previewyoutube]`, this.props.textareaRef.current);
      }
      this.setState({ youtubeInput: ``, alignment: j.left });
    }
  }
  OnUrlChange(e) {
    this.state.youtubeInput != e.target.value &&
      this.setState({ youtubeInput: e.target.value });
  }
  OnLeftSelected() {
    this.setState({ alignment: j.left });
  }
  OnRightSelected() {
    this.setState({ alignment: j.right });
  }
  OnFullSelected() {
    this.setState({ alignment: j.full });
  }
  OnSummarySelected() {
    this.setState({ alignment: j.summary });
  }
  OnOuterDivClickPassDown(e) {}
  render() {
    return (0, N.jsx)(T, {
      strTitle: g(`#EventEditor_InsertYouTube`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnYoutubeInsertLink,
      strOKButtonText: g(`#EventEditor_InsertYouTube`),
      className: R,
      children: (0, N.jsxs)(`div`, {
        className: Mt,
        children: [
          (0, N.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, N.jsxs)(`label`, {
              children: [
                (0, N.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: g(`#EventEditor_InsertYouTube_URL`),
                }),
                (0, N.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, N.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    ref: (e) => {
                      e?.focus();
                    },
                    type: `text`,
                    value: this.state.youtubeInput,
                    onChange: this.OnUrlChange,
                    placeholder: g(`#EventEditor_InsertYouTube_Placholder`),
                  }),
                }),
              ],
            }),
          }),
          (0, N.jsxs)(`div`, {
            className: `DialogInputLabelGroup`,
            children: [
              (0, N.jsx)(`div`, {
                className: `DialogLabel`,
                children: g(`#EventEditor_InsertYouTube_Position`),
              }),
              (0, N.jsxs)(`div`, {
                className: Nt,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, N.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: j.left,
                    value: j.left,
                    checked: this.state.alignment == j.left,
                    onChange: this.OnLeftSelected,
                  }),
                  (0, N.jsx)(`label`, {
                    htmlFor: j.left,
                    children: (0, N.jsx)(`span`, {
                      children: g(`#EventEditor_InsertYouTube_Left`),
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: Nt,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, N.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: j.right,
                    value: j.right,
                    checked: this.state.alignment == j.right,
                    onChange: this.OnRightSelected,
                  }),
                  (0, N.jsx)(`label`, {
                    htmlFor: j.right,
                    children: (0, N.jsx)(`span`, {
                      children: g(`#EventEditor_InsertYouTube_Right`),
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: Nt,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, N.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: j.full,
                    value: j.full,
                    checked: this.state.alignment == j.full,
                    onChange: this.OnFullSelected,
                  }),
                  (0, N.jsx)(`label`, {
                    htmlFor: j.full,
                    children: (0, N.jsx)(`span`, {
                      children: g(`#EventEditor_InsertYouTube_Full`),
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: Nt,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, N.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: j.summary,
                    value: j.summary,
                    checked: this.state.alignment == j.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  (0, N.jsx)(`label`, {
                    htmlFor: j.summary,
                    children: (0, N.jsx)(`span`, {
                      children: g(`#EventEditor_InsertYouTube_Summary`),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
};
(b([o], X.prototype, `OnYoutubeInsertLink`, null),
  b([o], X.prototype, `OnUrlChange`, null),
  b([o], X.prototype, `OnLeftSelected`, null),
  b([o], X.prototype, `OnRightSelected`, null),
  b([o], X.prototype, `OnFullSelected`, null),
  b([o], X.prototype, `OnSummarySelected`, null),
  b([o], X.prototype, `OnOuterDivClickPassDown`, null),
  (X = b([x], X)));
var Z = class extends M.Component {
  static {
    $n = this;
  }
  state = { textToDisplay: ``, strURL: `` };
  static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
  LoadFromTextArea() {
    let { textareaRef: e } = this.props;
    if (e && e.current) {
      let t = q.getSelectedString(e.current),
        n = $n.m_regExp.exec(t);
      n
        ? this.setState({ strURL: n[1], textToDisplay: n[2] })
        : this.setState({ textToDisplay: t });
    }
  }
  componentDidMount() {
    this.LoadFromTextArea();
  }
  onLinkTitleUpdate(e) {
    this.setState({ textToDisplay: e.target.value });
  }
  onLinkURLUpdate(e) {
    this.setState({ strURL: e.target.value });
  }
  onInsertLink() {
    let { strURL: e, textToDisplay: t } = this.state,
      n = `[url=` + e + `]` + t + `[/url]`;
    q.replaceSelection(this.props.textareaRef.current, n);
  }
  render() {
    return (0, N.jsx)(T, {
      strTitle: g(`#Editor_Link`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onOK: this.onInsertLink,
      onCancel: this.props.closeModal,
      strOKButtonText: g(`#EventEditor_InsertLinkURL`),
      className: R,
      children: (0, N.jsxs)(`div`, {
        className: Et,
        children: [
          (0, N.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, N.jsxs)(`label`, {
              children: [
                (0, N.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: g(`#EventEditor_LinkDescription`),
                }),
                (0, N.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, N.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkTitleUpdate,
                    value: this.state.textToDisplay,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
          (0, N.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, N.jsxs)(`label`, {
              children: [
                (0, N.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: g(`#EventEditor_LinkURL`),
                }),
                (0, N.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, N.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkURLUpdate,
                    value: this.state.strURL,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
(b([o], Z.prototype, `onLinkTitleUpdate`, null),
  b([o], Z.prototype, `onLinkURLUpdate`, null),
  b([o], Z.prototype, `onInsertLink`, null),
  (Z = $n = b([x], Z)));
var Q = class extends M.Component {
  refFirstInput = M.createRef();
  state = { imgURL: ``, anchorURL: `` };
  componentDidMount() {
    this.refFirstInput.current?.focus();
  }
  OnImageInsert() {
    let { anchorURL: e, imgURL: t } = this.state,
      n = ``,
      r = ``;
    (e && e.length > 0 && ((n += `[url=` + e + `]`), (r = `[/url]` + r)),
      (n += `[img]` + t),
      (r = `[/img]` + r),
      q.wrapBBCode(n, r, this.props.textareaRef.current));
  }
  OnImageURLChange(e) {
    this.state.imgURL != e.target.value &&
      this.setState({ imgURL: e.target.value });
  }
  OnAnchorURLChange(e) {
    this.state.anchorURL != e.target.value &&
      this.setState({ anchorURL: e.target.value });
  }
  render() {
    let { imgURL: e, anchorURL: t } = this.state;
    return (0, N.jsx)(T, {
      strTitle: g(`#EventEditor_InsertImage_Title`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnImageInsert,
      strOKButtonText: g(`#EventEditor_InsertImage_Title`),
      className: R,
      children: (0, N.jsxs)(`div`, {
        className: Et,
        children: [
          (0, N.jsx)(`p`, { children: g(`#EventEditor_InsertImage_Desc`) }),
          (0, N.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, N.jsxs)(`label`, {
              children: [
                (0, N.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: g(`#EventEditor_InsertImage_URL`),
                }),
                (0, N.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, N.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: e,
                    onChange: this.OnImageURLChange,
                    placeholder: g(`#EventEditor_InsertImage_Placeholder`),
                    ref: this.refFirstInput,
                  }),
                }),
              ],
            }),
          }),
          (0, N.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, N.jsxs)(`label`, {
              children: [
                (0, N.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: g(`#EventEditor_InsertImage_Anchor`),
                }),
                (0, N.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, N.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: t,
                    onChange: this.OnAnchorURLChange,
                    placeholder: g(`#EventEditor_InsertImage_Placeholder`),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
(b([o], Q.prototype, `OnImageInsert`, null),
  b([o], Q.prototype, `OnImageURLChange`, null),
  b([o], Q.prototype, `OnAnchorURLChange`, null),
  (Q = b([x], Q)));
var er = (e) => {
  let [t, n] = M.useState(``),
    [r, i] = M.useState(``),
    [a, o] = M.useState(``),
    [s, c] = M.useState(``),
    [l, u] = M.useState(void 0),
    [p, m] = M.useState(void 0),
    { data: h } = mt(),
    { isLoading: ee, data: _ } = _t(p?.GetAccountID()),
    te = () => {
      let n = `[speaker name="${t.trim()}"`;
      if (
        (r.trim().length > 0 && (n += ` title="${r}"`),
        a.trim().length > 0 && (n += ` company="${a}"`),
        l)
      ) {
        let e = Be + `/` + l.clanAccountID + `/` + O.GetHashAndExt(l);
        n += ` photo="${e}"`;
      }
      (p && (n += ` steamid="${p.ConvertTo64BitString()}"`),
        (n += `]${s}[/speaker]`),
        q.replaceSelection(e.textareaRef.current, n));
    },
    ne = t.trim().length != 0 && s.trim().length != 0;
  return (0, N.jsx)(T, {
    strTitle: g(`#EventEditor_AddSpeaker`),
    strDescription: g(`#EventEditor_AddSpeaker_Desc`),
    closeModal: e.closeModal,
    onCancel: e.closeModal,
    bOKDisabled: !ne,
    onOK: te,
    className: R,
    children: (0, N.jsxs)(`div`, {
      className: Ft,
      children: [
        (0, N.jsx)(De, {
          type: `text`,
          label: g(`#EventEditor_AddSpeaker_Name`),
          value: t,
          onChange: (e) => n(e.target.value),
          focusOnMount: !0,
        }),
        (0, N.jsxs)(`div`, {
          className: It,
          children: [
            (0, N.jsx)(De, {
              type: `text`,
              label: g(`#EventEditor_AddSpeaker_Title`),
              value: r,
              onChange: (e) => i(e.target.value),
            }),
            (0, N.jsx)(De, {
              type: `text`,
              label: g(`#EventEditor_AddSpeaker_Company`),
              value: a,
              onChange: (e) => o(e.target.value),
            }),
          ],
        }),
        (0, N.jsx)(E, {
          toolTipContent: g(`#EventEditor_AssociateSteamAccount_ttip`),
          children: (0, N.jsxs)(`div`, {
            className: `DialogLabel`,
            children: [g(`#EventEditor_AssociateSteamAccount`), ` (?)`],
          }),
        }),
        (0, N.jsxs)(`div`, {
          children: [
            ee && (0, N.jsx)(A, { string: g(`#Loading`), size: `small` }),
            p &&
              _ &&
              (0, N.jsxs)(`a`, {
                href:
                  d.COMMUNITY_BASE_URL + `profiles/` + p.ConvertTo64BitString(),
                target: `_blank`,
                children: [
                  _
                    ? (0, N.jsx)(`img`, {
                        style: { marginRight: `8px` },
                        src: _.avatar_url,
                      })
                    : null,
                  _ ? _.m_strPlayerName : null,
                ],
              }),
            (0, N.jsxs)(`div`, {
              className: Lt,
              children: [
                (0, N.jsx)(C, {
                  onClick: () => m(new k(f.steamid)),
                  children: g(`#EventEditor_SteamAccount_addme`),
                }),
                (0, N.jsx)(C, {
                  onClick: (e) =>
                    de((0, N.jsx)(tr, { friends: h ?? [], setSteamID: m }), e),
                  children: g(`#EventEditor_SteamAccount_addfriend`),
                }),
                (0, N.jsx)(C, {
                  onClick: () => m(void 0),
                  children: g(`#EventEditor_SteamAccount_clear`),
                }),
              ],
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: Rt,
          children: [
            (0, N.jsx)(`div`, {
              className: `DialogLabel`,
              children: g(`#EventEditor_ChoosePhoto`),
            }),
            (0, N.jsx)(Zn, {
              clanSteamID: e.clanSteamID,
              inputClanImage: l,
              setImage: u,
              nWidth: 184,
              nHeight: 184,
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: zt,
          children: [
            (0, N.jsx)(`div`, {
              className: `DialogLabel`,
              children: g(`#EventEditor_AddSpeaker_About`),
            }),
            (0, N.jsx)(xe, {
              value: s,
              onChange: (e) => c(e.target.value),
              rows: 8,
              cols: 80,
              nMinHeight: 40,
              placeholder: g(`#EventEditor_AddSpeaker_About_Placeholder`),
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: Bt,
          children: [
            (0, N.jsx)(`div`, {
              className: `DialogLabel`,
              children: g(`#Button_Preview`),
            }),
            (0, N.jsx)($e, {
              company: a,
              name: t,
              title: r,
              bioString: s,
              photo: l ? l.url : void 0,
            }),
          ],
        }),
      ],
    }),
  });
};
function tr(e) {
  let { friends: t, setSteamID: n } = e;
  return (0, N.jsx)(`div`, {
    className: Pt,
    children: t.map((e) => (0, N.jsx)(nr, { steamid: e, setSteamID: n }, e)),
  });
}
function nr(e) {
  let { steamid: t, setSteamID: n } = e,
    { data: r } = _t(t);
  return (0, N.jsx)(ue, {
    onSelected: () => n(new k(t)),
    children: (0, N.jsxs)(`div`, {
      style: { display: `flex`, alignItems: `center` },
      children: [
        r &&
          (0, N.jsx)(`img`, { className: `SZCLgazwykY-`, src: r.avatar_url }),
        r?.m_strPlayerName,
      ],
    }),
  });
}
var $ = class extends M.Component {
  m_isMounted = !1;
  m_bAppend = !1;
  constructor(e) {
    (super(e), (this.state = { bPreserveNewLines: !1, strHTMLData: `` }));
  }
  componentDidMount() {
    this.m_isMounted = !0;
  }
  componentWillUnmount() {
    this.m_isMounted = !1;
  }
  OnConvertAndOverriteHTML() {
    ((this.m_bAppend = !1), this.ConvertBBCode());
  }
  OnConvertAndAppendHTML() {
    ((this.m_bAppend = !0), this.ConvertBBCode());
  }
  async ConvertHtmlToBBCode(e, t) {
    let n = new URLSearchParams();
    return (
      n.append(`content`, e),
      n.append(`preserve_newlines`, t ? `1` : `0`),
      (
        await F.default.post(
          d.COMMUNITY_BASE_URL + `/actions/ConvertHTMLToBBCode`,
          n,
        )
      ).data.content
    );
  }
  ConvertBBCode() {
    (this.setState({ bConverting: !0 }),
      this.ConvertHtmlToBBCode(
        this.state.strHTMLData,
        this.state.bPreserveNewLines,
      )
        .then((e) => {
          this.m_isMounted &&
            (this.m_bAppend
              ? q.append(e, this.props.textareaRef.current)
              : q.overwrite(e, this.props.textareaRef.current),
            this.setState({ bConverting: !1, bFinishedConverting: !0 }));
        })
        .catch((e) => {
          pe(
            (0, N.jsx)(Ce, {
              strTitle: g(`#EventEditor_ConvertHTML_Error`),
              strDescription: g(
                `#EventEditor_ConvertHTML_Error_Desc`,
                e.response && e.response.data ? e.response.data.msg : e,
              ),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
            }),
            this.props.ownerWindow,
            { strTitle: g(`#EventEditor_ConvertHTML_Error`) },
          );
        }));
  }
  OnCheckboxChange(e) {
    let t = e.target.checked;
    t != this.state.bPreserveNewLines &&
      this.setState({ bPreserveNewLines: t });
  }
  OnTextAreaChange(e) {
    this.setState({ strHTMLData: e.currentTarget.value });
  }
  render() {
    let { closeModal: e } = this.props;
    return this.state.bConverting
      ? (0, N.jsx)(T, {
          strTitle: g(`#EventEditor_ImportFromHTML`),
          strDescription: g(`#EventEditor_ImportFromHTML_ConversionInProgress`),
          closeModal: e,
          bAlertDialog: !0,
          onOK: e,
          onCancel: e,
          children: (0, N.jsx)(A, {}),
        })
      : this.state.bFinishedConverting
        ? (0, N.jsx)(T, {
            strTitle: g(`#EventEditor_ImportFromHTML`),
            strDescription: g(`#EventEditor_ImportFromHTML_ConvertFinished`),
            closeModal: e,
            bAlertDialog: !0,
            onOK: e,
            onCancel: e,
          })
        : (0, N.jsx)(me, {
            title: g(`#EventEditor_ImportFromHTML`),
            onOK: this.OnConvertAndOverriteHTML,
            onCancel: e,
            className: R,
            children: (0, N.jsxs)(fe, {
              children: [
                (0, N.jsx)(ve, {
                  children: (0, N.jsxs)(`div`, {
                    className: S(D, Ot),
                    children: [
                      (0, N.jsx)(`div`, {
                        className: D,
                        children: ce(
                          `#EventEditor_ImportFromHTML_ConvertDescription`,
                          (0, N.jsx)(`a`, {
                            target: d.IN_CLIENT ? void 0 : `_blank`,
                            href: `https://partner.steamgames.com/doc/marketing/event_tools/import`,
                            children: g(
                              `#EventEditor_ImportFromHTML_ConvertLearn`,
                            ),
                          }),
                        ),
                      }),
                      (0, N.jsx)(`textarea`, {
                        value: this.state.strHTMLData,
                        placeholder: g(
                          `#EventEditor_ImportFromHTML_Instruction`,
                        ),
                        className: kt,
                        onChange: this.OnTextAreaChange,
                        ref: (e) => {
                          e?.focus();
                        },
                      }),
                      (0, N.jsxs)(`div`, {
                        className: At,
                        children: [
                          (0, N.jsx)(`input`, {
                            id: `ImportFromHTMLNewLines`,
                            type: `checkbox`,
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          (0, N.jsxs)(`label`, {
                            htmlFor: `ImportFromHTMLNewLines`,
                            children: [
                              g(`#EventEditor_ImportFromHTML_PreserveNewlines`),
                              (0, N.jsx)(we, {
                                tooltip: g(
                                  `#EventEditor_ImportFromHTML_PreserveNewlines_Hint`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsx)(`div`, {
                        children: g(
                          `#EventEditor_ImportFromHTML_ConvertToBBCode`,
                        ),
                      }),
                    ],
                  }),
                }),
                (0, N.jsx)(he, {
                  children: (0, N.jsx)(ge, {
                    onCancel: () => e?.(),
                    strOKText: g(`#Button_Overwrite`),
                    onUpdate: this.OnConvertAndAppendHTML,
                    strUpdateText: g(`#Button_Append`),
                  }),
                }),
              ],
            }),
          });
  }
};
(b([o], $.prototype, `OnConvertAndOverriteHTML`, null),
  b([o], $.prototype, `OnConvertAndAppendHTML`, null),
  b([o], $.prototype, `OnCheckboxChange`, null),
  b([o], $.prototype, `OnTextAreaChange`, null),
  ($ = b([x], $)));
var rr = `j59mI0R4Mls-`,
  ir = `hYzeNZ6Fv5E-`,
  ar = `_7KwGD4ys9So-`,
  or = `rgEtYZWJk28-`;
function sr(e, t) {
  return e.trim().length
    ? e +
        `

` +
        t
    : t;
}
async function cr(e, n, r) {
  if (t.IN_STEAMUI) {
    let e = y.Init(Je);
    (e.Body().set_appid(n), e.Body().set_status_text(r));
    let t = await qe.PostStatusToFriends(
      Ye.CMInterface.GetServiceTransport(),
      e,
    );
    if (t.GetEResult() != 1) throw Error(String(t.GetEResult()));
    return;
  }
  let i = new FormData();
  (i.append(`appid`, String(n ?? 0)),
    i.append(`status_text`, r),
    i.append(`sessionid`, v()));
  let a = await fetch(e + `ajaxpostuserstatus`, {
      method: `POST`,
      body: i,
      credentials: `include`,
    }),
    o;
  try {
    o = a.ok ? await a.json() : void 0;
  } catch {
    o = void 0;
  }
  if (o?.success != 1) throw Error(o?.message ?? a.statusText);
}
function lr(e) {
  let { appid: n, eventLink: r, emoticonStore: i, closeModal: a } = e,
    { data: o } = _t(m.steamid),
    [s, c] = M.useState(``),
    l =
      t.COMMUNITY_BASE_URL +
      `profiles/` +
      k.InitFromAccountID(m.accountid, t.EUNIVERSE).ConvertTo64BitString() +
      `/`,
    u = Ie({ mutationFn: () => cr(l, n, sr(s, r)) });
  return u.isIdle
    ? (0, N.jsx)(T, {
        strDescription: ``,
        strTitle: g(`#Button_Share`),
        onCancel: a,
        onOK: () => u.mutate(),
        strOKButtonText: g(`#Button_Post`),
        children: (0, N.jsxs)(`div`, {
          className: D,
          children: [
            (0, N.jsx)(`div`, {
              children: g(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, N.jsxs)(`div`, {
              className: S(rr, D),
              children: [
                (0, N.jsxs)(`div`, {
                  children: [
                    (0, N.jsx)(`img`, {
                      className: ir,
                      src: o?.avatar_url,
                      alt: ``,
                      "data-miniprofile": `s` + m.steamid,
                    }),
                    (0, N.jsx)(`div`, {
                      className: S(D),
                      children: (0, N.jsx)(K, {
                        strPlaceholder: g(
                          `#EventDisplay_Share_OnMyStatus_Placeholder`,
                        ),
                        fnGetCurText: () => s,
                        fnOnTextChange: (e) => c(e.currentTarget.value),
                        fnSetText: c,
                        emoticonStore: i,
                        bSupportHTMLImport: !1,
                        showFormatHelp: `UserStatusPublished`,
                        limitBBCode: Ve,
                        classNameForTextArea: ar,
                        bEmbeddedInDialog: !0,
                      }),
                    }),
                  ],
                }),
                (0, N.jsx)(`div`, {
                  className: or,
                  children: (0, N.jsx)(pt, { text: r }),
                }),
              ],
            }),
          ],
        }),
      })
    : (0, N.jsx)(T, {
        strDescription: ``,
        strTitle: g(`#Button_Share`),
        onCancel: a,
        onOK: a,
        bAlertDialog: !0,
        children: (0, N.jsxs)(`div`, {
          className: D,
          children: [
            (0, N.jsx)(`div`, {
              children: g(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, N.jsxs)(`div`, {
              className: rr,
              children: [
                u.isPending && (0, N.jsx)(A, { position: `center` }),
                u.isSuccess &&
                  (0, N.jsx)(`div`, {
                    children: g(`#EventDisplay_Share_Success`),
                  }),
                u.isError &&
                  (0, N.jsx)(`div`, {
                    children:
                      g(`#EventDisplay_Share_Failure`) +
                      `

` +
                      u.error.message,
                  }),
                u.isSuccess &&
                  (0, N.jsx)(`a`, {
                    href: l + `home`,
                    target: t.IN_CLIENT ? void 0 : `_blank`,
                    rel: `noreferrer`,
                    children: g(`#EventDisplay_Share_OpenActivityFeed`),
                  }),
              ],
            }),
          ],
        }),
      });
}
function ur(e) {
  let { eventLink: t, labelOverride: n } = e,
    r = M.useRef(null),
    [i, a] = M.useState(``),
    o = () => {
      let e = r.current?.ownerDocument.defaultView;
      r.current &&
        e &&
        e.navigator.clipboard
          .writeText(r.current.value)
          .then(() => a(g(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((e) => {
            (a(g(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, e));
          });
    };
  return (0, N.jsxs)(`div`, {
    children: [
      (0, N.jsxs)(`div`, {
        className: S(Ne, it),
        children: [
          (0, N.jsx)(`span`, {
            className: ot,
            children: g(n ?? `#EventDisplay_Share_Link`),
          }),
          (0, N.jsx)(`input`, {
            className: rt,
            ref: r,
            value: t,
            readOnly: !0,
            onClick: o,
          }),
          (0, N.jsx)(le, {
            className: S(Me, je, nt),
            onActivate: o,
            children: (0, N.jsx)(ke, {
              toolTipContent: g(`#ToolTip_CopyLinkToClipboard`),
              children: (0, N.jsx)(`img`, {
                className: at,
                src: ut,
                alt: g(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, N.jsx)(`div`, { className: st, children: i }),
    ],
  });
}
var dr = M.createContext(null),
  fr = null;
function pr() {
  return (
    (fr ||=
      (console.warn(
        `Missing context, this is not ssr safe, using s_FallbackEmoticonStore`,
      ),
      new ct())),
    fr
  );
}
function mr(e) {
  let [t] = M.useState(() => new ct()),
    n = e.store ?? t;
  return (0, N.jsx)(dr.Provider, { value: n, children: e.children });
}
function hr() {
  return M.useContext(dr) ?? pr();
}
var gr = class extends M.Component {
  GenerateLanguageOptions() {
    let e = [],
      {
        fnFilterLanguage: t,
        fnLangHasData: n,
        fnLastUpdateRTime: r,
        fnIsLangSupported: i,
      } = this.props;
    this.props.bAllowUnsetOption &&
      e.push(
        (0, N.jsx)(
          `option`,
          { value: -1, children: g(`#language_selection_none`) },
          `langpicker_unset`,
        ),
      );
    let o = [],
      s = this.props.realms || [ae.k_ESteamRealmGlobal];
    for (let e of re.GetLanguageListForRealms(s)) {
      if (t && !t(e)) continue;
      let n = a(e),
        r = g(`#Language_` + n),
        s = !!(i && i(e));
      o.push({ eLang: e, sLocName: r, bSupported: s });
    }
    o.sort((e, t) =>
      e.bSupported == t.bSupported
        ? e.sLocName.localeCompare(t.sLocName)
        : e.bSupported
          ? -1
          : 1,
    );
    let c = !1;
    for (let t of o) {
      t.bSupported != c &&
        (e.push(
          (0, N.jsx)(
            `option`,
            {
              className: Ae,
              disabled: !0,
              children: g(
                t.bSupported
                  ? `#LanguageGroup_Supported`
                  : `#LanguageGroup_Unsupported`,
              ),
            },
            t.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
          ),
        ),
        (c = t.bSupported));
      let i = n && n(t.eLang),
        a = r && r(t.eLang),
        o = t.sLocName;
      (a &&
        a !== 0 &&
        ((o += ` `),
        (o += g(
          `#Language_Last_Update`,
          h(a) + ` @ ` + p(a, { bForce24HourClock: !1 }),
        ))),
        e.push(
          (0, N.jsx)(
            `option`,
            {
              value: t.eLang,
              className: S({ [Fe]: i }, (t.bSupported, void 0)),
              children: o,
            },
            `langpicker` + t.eLang + (i ? `_hasdata` : ``),
          ),
        ));
    }
    return e;
  }
  OnLanguageChange(e) {
    let { fnOnLanguageChanged: t, selectedLang: n } = this.props,
      r = Number.parseInt(e.currentTarget.value);
    r != n && t && t(r);
  }
  render() {
    let { selectedLang: e, bDisabled: t, strTooltip: n } = this.props,
      r = this.GenerateLanguageOptions();
    return (0, N.jsx)(E, {
      toolTipContent: n,
      children: (0, N.jsx)(`select`, {
        value: e,
        onChange: this.OnLanguageChange,
        disabled: t,
        children: r,
      }),
    });
  }
};
(b([o], gr.prototype, `OnLanguageChange`, null), (gr = b([x], gr)));
var _r = `l`;
function vr(e) {
  let { emoticonStore: t, ...n } = e;
  return (0, N.jsx)(mr, { store: t, children: (0, N.jsx)(yr, { ...n }) });
}
function yr(e) {
  let { eventModel: n, strEventLink: r, closeModal: i } = e,
    o = yt(n),
    s = hr(),
    [c, u] = M.useState(() => l(t.LANGUAGE)),
    [d, f] = M.useState(!1),
    { elDialogElement: p, fnShowLogonDialog: h } = Pe(
      g(`#EventDisplay_Share_NotLoggedIn_Description`),
    ),
    ee = M.useMemo(() => {
      if (!r) return ``;
      let e = new URL(r);
      return (e.searchParams.set(_r, a(c)), e.href);
    }, [c, r]),
    _ = t.EREALM === ae.k_ESteamRealmChina;
  return d
    ? (0, N.jsx)(lr, {
        eventLink: r,
        appid: n.appid,
        emoticonStore: s,
        closeModal: i,
      })
    : (0, N.jsxs)(T, {
        strDescription: ``,
        strTitle: g(`#Button_Share`),
        onCancel: i,
        onOK: i,
        bAlertDialog: !0,
        modalClassName: `EventDisplay_Share_Dialog`,
        children: [
          (0, N.jsxs)(`div`, {
            className: S(D, tt),
            children: [
              !_ &&
                (0, N.jsxs)(N.Fragment, {
                  children: [
                    (0, N.jsxs)(`div`, {
                      className: `Cx2zVOdOEwU-`,
                      children: [
                        (0, N.jsx)(`div`, {
                          className: `rk6-75sKTfs-`,
                          children: g(`#EventDisplay_Share_LanguageLabel`),
                        }),
                        (0, N.jsx)(`div`, {
                          children: (0, N.jsx)(gr, {
                            selectedLang: c,
                            fnOnLanguageChanged: u,
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsxs)(`div`, {
                      className: S(`befdhdeb-HY-`, `bPmDLn-lEoc-`),
                      style: { flexWrap: `wrap` },
                      children: [
                        (0, N.jsx)(E, {
                          toolTipContent: g(`#EventDisplay_Share_OnSteam`),
                          children: (0, N.jsxs)(le, {
                            onClick: () => {
                              m.logged_in ? f(!0) : h();
                            },
                            className: S(
                              `yYL-OrX9PtQ-`,
                              `D4J8JhjevEo-`,
                              `LQrwY5m9KjE-`,
                            ),
                            children: [
                              (0, N.jsx)(`img`, {
                                className: `uPjG9NaDuUg-`,
                                src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%200%201400%201409'%20enable-background='new%200%200%201400%201409'%20xml:space='preserve'%3e%3cpath%20fill='%23FFFFFF'%20d='M698.195,10.125c-364.347,0-662.838,280.938-691.206,637.969L378.74,801.797%20c31.502-21.539,69.555-34.133,110.495-34.133c3.669,0,7.315,0.09,10.939,0.313l165.33-239.637c0-1.137-0.029-2.25-0.029-3.395%20c0-144.227,117.335-261.574,261.582-261.574c144.233,0,261.583,117.348,261.583,261.574c0,144.246-117.35,261.598-261.583,261.598%20c-1.99,0-3.95-0.047-5.926-0.09L685.341,954.688c0.119,3.074,0.23,6.191,0.23,9.297c0,108.273-88.076,196.352-196.336,196.352%20c-95.041,0-174.494-67.848-192.496-157.676L30.872,892.754c82.32,291.137,349.807,504.582,667.323,504.582%20c383.062,0,693.598-310.551,693.598-693.613C1391.793,320.664,1081.257,10.125,698.195,10.125'/%3e%3cpath%20fill='%23FFFFFF'%20d='M441.648,1062.563l-85.202-35.203c15.105,31.445,41.23,57.762,75.911,72.215%20c74.961,31.25,161.41-4.336,192.667-79.359c15.112-36.313,15.224-76.355,0.223-112.742c-14.979-36.391-43.25-64.773-79.572-79.922%20c-36.047-15.004-74.656-14.438-108.587-1.637l88.009,36.391c55.304,23.051,81.444,86.559,58.408,141.855%20C560.476,1059.457,496.944,1085.613,441.648,1062.563'/%3e%3cpath%20fill='%23FFFFFF'%20d='M1101.353,524.961c0-96.113-78.184-174.313-174.295-174.313c-96.096,0-174.294,78.199-174.294,174.313%20c0,96.102,78.198,174.277,174.294,174.277C1023.169,699.238,1101.353,621.063,1101.353,524.961%20M796.415,524.656%20c0-72.324,58.638-130.918,130.94-130.918c72.316,0,130.925,58.594,130.925,130.918c0,72.316-58.608,130.918-130.925,130.918%20C855.053,655.574,796.415,596.973,796.415,524.656'/%3e%3c/svg%3e`,
                                alt: g(`#EventDisplay_Share_OnSteam`),
                              }),
                              (0, N.jsx)(`span`, {
                                style: { whiteSpace: `nowrap` },
                                children: g(`#EventDisplay_Share_OnMyStatus`),
                              }),
                            ],
                          }),
                        }),
                        (0, N.jsx)(E, {
                          toolTipContent: g(`#EventDisplay_Share_OnFaceBook`),
                          children: (0, N.jsx)(Ee, {
                            href: o.strFacebookUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, N.jsx)(`img`, {
                              className: S(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=`,
                              alt: g(`#EventDisplay_Share_OnFaceBook`),
                            }),
                          }),
                        }),
                        (0, N.jsx)(E, {
                          toolTipContent: g(`#EventDisplay_Share_OnTwitter`),
                          children: (0, N.jsx)(Ee, {
                            href: o.strTwitterUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, N.jsx)(`img`, {
                              className: S(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC`,
                              alt: g(`#EventDisplay_Share_OnTwitter`),
                            }),
                          }),
                        }),
                        (0, N.jsx)(E, {
                          toolTipContent: g(`#EventDisplay_Share_OnReddit`),
                          children: (0, N.jsx)(Ee, {
                            href: o.strRedditUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, N.jsx)(`img`, {
                              className: S(`yYL-OrX9PtQ-`),
                              src: dt,
                              alt: g(`#EventDisplay_Share_OnReddit`),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsx)(`div`, { className: `-znUDBPGuEA-` }),
                  ],
                }),
              (0, N.jsx)(ur, { eventLink: ee }),
            ],
          }),
          p,
        ],
      });
}
export { vr as ShareEventDialogBody };

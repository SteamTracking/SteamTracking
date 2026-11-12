/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  B as n,
  C as r,
  Ft as i,
  It as a,
  K as o,
  L as s,
  M as c,
  R as l,
  j as u,
  ot as d,
  w as f,
} from "./chunk~01cfc309bf.js";
import {
  D as p,
  Do as m,
  Fo as ee,
  Io as h,
  Mo as te,
  Po as ne,
  Ro as re,
  jn as ie,
  jo as g,
  li as ae,
} from "./chunk~3f4314f3b4.js";
import { t as _ } from "./chunk~eefd71512b.js";
import {
  P as v,
  U as oe,
  d as se,
  t as ce,
  v as le,
} from "./chunk~05a38bc848.js";
import { t as ue } from "./chunk~92931c6310.js";
import { t as de } from "./chunk~d382bdf2cf.js";
import {
  $h as fe,
  Ah as y,
  Em as pe,
  Fh as b,
  Fr as me,
  Gi as he,
  Go as ge,
  Ih as _e,
  Jd as ve,
  Ji as ye,
  Km as be,
  Lh as xe,
  Mh as x,
  Nh as S,
  Ph as C,
  Qi as Se,
  Qo as Ce,
  Qu as we,
  Rh as w,
  Su as T,
  Tu as Te,
  Vm as Ee,
  Wi as E,
  Ws as De,
  Xi as Oe,
  Xo as D,
  Yo as ke,
  Zi as Ae,
  Zm as je,
  Zp as Me,
  _ as Ne,
  _s as O,
  ef as k,
  es as Pe,
  gf as Fe,
  gm as Ie,
  hd as Le,
  hm as A,
  hr as Re,
  hs as ze,
  id as j,
  if as Be,
  jh as M,
  kf as N,
  kh as P,
  lm as Ve,
  mf as He,
  mm as Ue,
  nh as We,
  ns as Ge,
  os as Ke,
  qh as qe,
  qm as Je,
  qo as Ye,
  qs as Xe,
  rh as Ze,
  ss as Qe,
  tm as $e,
  tr as et,
  ud as tt,
  us as nt,
  zf as rt,
  zs as it,
} from "./main.js";
var F = e(a(), 1),
  I = e(i()),
  L = d(),
  R = e(t()),
  z = class e {
    m_eCurLang = je(A.LANGUAGE);
    m_rgHasData = qe([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new xe();
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
      s(this);
    }
  };
(N([l], z.prototype, `m_eCurLang`, void 0),
  N([l], z.prototype, `m_rgHasData`, void 0),
  N([l], z.prototype, `m_bHasLocalizationContext`, void 0),
  N([w], z.prototype, `GetCurEditLanguage`, null),
  N([w], z.prototype, `SetCurEditLanguage`, null),
  N([u.bound], z.prototype, `SetHasLanguage`, null),
  N([w], z.prototype, `BHasLanguageData`, null));
function at() {
  return f(() => z.Get().GetCurEditLanguage());
}
var ot = class {
  constructor() {
    s(this);
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
        this.m_imageListChangeCallback.set(e, new xe()),
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
  async InternalLoadClanImages(e, t, r) {
    let i = e.GetAccountID();
    if (
      (fe(e && i != 0, `ClanSteamID missing:` + e),
      e && (!this.m_mapClanToImages.has(i) || t))
    ) {
      let t = {},
        a,
        o =
          A.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/getimages/`;
      if (
        ((a = await R.default.get(o, {
          params: t,
          withCredentials: !0,
          cancelToken: r,
        })),
        a)
      ) {
        for (let e of a.data.images) e.clanAccountID = i;
        n(() => {
          (this.m_mapClanImageLoadState.set(i, { loaded: !0 }),
            this.m_mapClanToImages.set(i, a.data.images),
            this.GetImageListCallbackForClanAccountIDInternal(i).Dispatch(
              a.data.images,
            ));
        });
      }
    }
    return this.m_mapClanToImages.get(i);
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
    let n = B.GetClanImages(e);
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
    let n = { sessionid: Ve(), imageid: t },
      r = e.GetAccountID(),
      i = await R.default.get(
        A.COMMUNITY_BASE_URL +
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
        this.GetImageListCallbackForClanAccountIDInternal(r).Dispatch([...a]));
    }
    return i.data;
  }
  async DeleteClanImage(e, t) {
    return this.DeleteClanImageByID(e, t.imageid);
  }
};
(N([l], ot.prototype, `m_mapClanToImages`, void 0),
  N([l], ot.prototype, `m_mapClanImageLoadState`, void 0));
var B = new ot();
function st(e) {
  let [t, n] = (0, I.useState)(B.GetClanImagesByAccount(e));
  return (tt(B.GetImageListCallbackForClanAccountID(e), n), t);
}
function ct(e) {
  let t = pe.InitFromClanID(e, A.EUNIVERSE),
    n = ue(`useLoadClanImages`),
    [r, i] = (0, I.useState)(() => B.BHasLoadedClanImages(t));
  return (
    (0, I.useEffect)(() => {
      let t = pe.InitFromClanID(e, A.EUNIVERSE);
      return (
        B.BHasLoadedClanImages(t) ||
          B.LoadClanImages(t, !1, n.token).then(() => i(!0)),
        () => n.cancel()
      );
    }, [e, n]),
    r
  );
}
var lt = `_0ayR5P4snOQ-`,
  ut = `CTubiAgon4c-`,
  dt = `_4Y5F2iyNmd4-`,
  ft = `_7zJSazZLpTI-`,
  pt = `xFTxNDMXZvw-`,
  mt = class extends I.Component {
    m_strLastSearch;
    m_rgCurrentMatches = [];
    m_mapMatchByKey = new Map();
    containerRef = I.createRef();
    constructor(e) {
      (super(e),
        (this.m_hMobxSearchDisposer = c(async () => {
          (await this.UpdateSearchResults(this.props.strSearch),
            this.forceUpdate());
        })),
        (this.state = { selectedIndex: void 0 }));
    }
    OnKeyDown(e) {
      this.BHandleKeyPress(e.keyCode) && e.preventDefault();
    }
    BHandleKeyPress(e) {
      switch (e) {
        case 38:
          this.SetSelectedIndexDelta(-1);
          break;
        case 40:
          this.SetSelectedIndexDelta(1);
          break;
        case 36:
          this.SetSelectedIndex(0);
          break;
        case 33:
          this.SetSelectedIndexDelta(-this.GetPageSize());
          break;
        case 35:
          this.SetSelectedIndex(-1);
          break;
        case 34:
          this.SetSelectedIndexDelta(this.GetPageSize());
          break;
        case 13:
        case 9:
          if (this.state.selectedIndex !== void 0)
            this.ChooseSuggestion(
              this.m_rgCurrentMatches[this.state.selectedIndex],
            );
          else
            return (this.props.onSuggestionSelected(this.props.strSearch), !1);
          break;
        case 27:
          this.props.onSuggestionSelected(this.props.strSearch);
          break;
        default:
          return !1;
      }
      return !0;
    }
    GetPageSize() {
      let e = this.containerRef.current,
        t = e && e.firstElementChild,
        n = this.m_rgCurrentMatches.length;
      if ((n > this.getMaxMatches() && (n = this.getMaxMatches()), t && n)) {
        let e = t.scrollHeight / n,
          r = t.clientHeight / e;
        return Math.max(1, Math.floor(r));
      }
      return 5;
    }
    ChooseSuggestion(e) {
      this.props.onSuggestionSelected(
        this.props.strSearch,
        e ? this.getSelection(e) : void 0,
      );
    }
    SetSelectedIndexDelta(e) {
      this.state.selectedIndex === void 0
        ? this.SetSelectedIndex(e === 1 ? 0 : e)
        : this.SetSelectedIndex(this.state.selectedIndex + e);
    }
    SetSelectedIndex(e) {
      if (!this.m_rgCurrentMatches.length) return;
      let t = this.m_rgCurrentMatches.length;
      (t > this.getMaxMatches() && (t = this.getMaxMatches()),
        (e %= t),
        e < 0 && (e += t),
        this.setState({ selectedIndex: e }));
    }
    FindKeyIndex(e) {
      if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
        for (let e = 0; e < this.m_rgCurrentMatches.length; e++)
          this.m_mapMatchByKey.set(this.getKey(this.m_rgCurrentMatches[e]), e);
      return this.m_mapMatchByKey.get(e);
    }
    OnClickSuggestion(e) {
      let t = this.FindKeyIndex(e);
      t !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[t]);
    }
    OnMouseOverSuggestion(e) {
      let t = this.FindKeyIndex(e);
      t !== void 0 && this.SetSelectedIndex(t);
    }
    BindSelectedElement(e) {
      if (!e) return;
      let t = this.containerRef.current,
        n = e.containerRef.current,
        r = t && t.firstElementChild;
      n &&
        r &&
        (r.scrollTop + r.clientHeight < n.offsetTop ||
          n.offsetTop < r.scrollTop) &&
        n.scrollIntoView();
    }
    async UpdateSearchResults(e) {
      ((this.m_rgCurrentMatches = await this.performSearch(e)),
        (this.m_strLastSearch = e),
        this.m_mapMatchByKey.clear(),
        this.m_rgCurrentMatches.length
          ? !this.state || this.state.selectedIndex === void 0
            ? (this.props.nMinimumSearchLengthBeforeAutoSelection === void 0 ||
                e.length >=
                  this.props.nMinimumSearchLengthBeforeAutoSelection) &&
              this.setState({ selectedIndex: 0 })
            : this.state.selectedIndex >= this.m_rgCurrentMatches.length &&
              this.setState({ selectedIndex: 0 })
          : this.state &&
            this.state.selectedIndex !== void 0 &&
            this.setState({ selectedIndex: void 0 }));
    }
    m_hMobxSearchDisposer;
    componentWillUnmount() {
      this.m_hMobxSearchDisposer &&= (this.m_hMobxSearchDisposer(), void 0);
    }
    async componentDidUpdate(e) {
      this.m_strLastSearch != this.props.strSearch &&
        (await this.UpdateSearchResults(this.props.strSearch),
        this.forceUpdate());
    }
    render() {
      let e = [];
      if (this.m_rgCurrentMatches.length) {
        let t = this.getMaxMatches();
        for (let n = 0; n < Math.min(t, this.m_rgCurrentMatches.length); n++) {
          let t = this.m_rgCurrentMatches[n],
            r = this.getKey(t),
            i = n === this.state.selectedIndex;
          e.push(
            (0, L.jsx)(
              ht,
              {
                matchKey: r,
                fnOnClick: this.OnClickSuggestion,
                fnOnMouseOver: this.OnMouseOverSuggestion,
                bIsSelected: i,
                ref: i ? this.BindSelectedElement : void 0,
                children: this.renderMatch(t),
              },
              r,
            ),
          );
        }
        this.m_rgCurrentMatches.length > t &&
          e.push(
            this.renderTooManyMatchesMessage(
              this.m_rgCurrentMatches.length - t,
            ),
          );
      } else {
        let t = this.renderNoMatchMessage();
        if (!t) return null;
        e.push(t);
      }
      return (0, L.jsx)(`div`, {
        className: lt,
        ref: this.containerRef,
        children: (0, L.jsxs)(`div`, {
          className: ut,
          tabIndex: 0,
          onKeyDown: this.OnKeyDown,
          children: [this.renderHeader(), e],
        }),
      });
    }
  };
(N([w], mt.prototype, `OnKeyDown`, null),
  N([w], mt.prototype, `OnClickSuggestion`, null),
  N([w], mt.prototype, `OnMouseOverSuggestion`, null),
  N([w], mt.prototype, `BindSelectedElement`, null));
var ht = class extends I.PureComponent {
  containerRef = I.createRef();
  OnMouseOver(e) {
    this.props.fnOnMouseOver(this.props.matchKey);
  }
  OnClick(e) {
    this.props.fnOnClick(this.props.matchKey);
  }
  render() {
    return (0, L.jsx)(`div`, {
      className: T(dt, ft, this.props.bIsSelected ? pt : ``),
      onMouseEnter: this.OnMouseOver,
      onClick: this.OnClick,
      ref: this.containerRef,
      children: this.props.children,
    });
  }
};
(N([w], ht.prototype, `OnMouseOver`, null),
  N([w], ht.prototype, `OnClick`, null));
var gt = `ARyrUoFBJKQ-`,
  _t = class extends mt {
    performSearch(e) {
      return this.props.emoticonStore.SearchEmoticons(e, 10, !1);
    }
    getSelection(e) {
      return e.name;
    }
    getKey(e) {
      return e.name;
    }
    renderMatch(e) {
      return (0, L.jsxs)(`div`, {
        className: T(void 0, e.recent ? `Recent` : ``),
        children: [
          (0, L.jsxs)(`div`, {
            className: gt,
            children: [
              (0, L.jsx)(le, { emoticon: e.name }),
              e.new && (0, L.jsx)(se, {}),
            ],
          }),
          `:`,
          e.name,
          `:`,
        ],
      });
    }
    renderNoMatchMessage() {
      return null;
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
  vt = `hgRTS5e4dgI-`,
  yt = class extends mt {
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
      return (0, L.jsxs)(
        `div`,
        {
          className: T(void 0),
          children: [
            (0, L.jsx)(`div`, { className: vt, children: e.name }),
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
      return (0, L.jsx)(
        `div`,
        { className: T(ft, void 0), children: k(`#Bbcode_No_Match`) },
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
  V = class extends I.Component {
    descTextAreaRef = I.createRef();
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
            (i = (0, L.jsx)(_t, {
              emoticonStore: e,
              strSearch: this.state.mentionSearch,
              nMinimumSearchLengthBeforeAutoSelection: 2,
              onSuggestionSelected: this.OnEmoticonSuggestionSelected,
              ref: this.BindMentionDialog,
            }));
          break;
        case `BBCode`:
          i = (0, L.jsx)(yt, {
            supportBBCodes: t,
            strSearch: this.state.mentionSearch,
            nMinimumSearchLengthBeforeAutoSelection: 2,
            onSuggestionSelected: this.OnBBCodeSuggestionSelected,
            ref: this.BindMentionDialog,
          });
      }
      return (0, L.jsxs)(I.Fragment, {
        children: [
          i,
          (0, L.jsx)(`textarea`, {
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
(N([w], V.prototype, `BindMentionDialog`, null),
  N([w], V.prototype, `OnKeyDown`, null),
  N([w], V.prototype, `OnFocus`, null),
  N([w], V.prototype, `OnKeyPress`, null),
  N([w], V.prototype, `OnClick`, null),
  N([w], V.prototype, `OnEmoticonSuggestionSelected`, null),
  N([w], V.prototype, `OnBBCodeSuggestionSelected`, null),
  N([w], V.prototype, `FocusTextInput`, null),
  N([w], V.prototype, `GetTextAreaRef`, null),
  N([w], V.prototype, `GetTextAreaCurrent`, null));
var bt = `AqA5yADf-5M-`,
  xt = `OfpXVyFy5Fo-`,
  St = `Z2hFr9c9Bx8-`,
  Ct = `F7c1qF6I3Vk-`,
  wt = `g3MCfqYh-Wk-`,
  Tt = `hJ8eUERcJ1g-`,
  Et = `CSyJhiym-Wc-`,
  Dt = `RSxJyqlJePw-`,
  Ot = `_8EDb1yTdSyk-`,
  kt = `QduaSOE7gdY-`,
  At = `CdaHiMxsOyE-`,
  jt = `SZCLgazwykY-`,
  Mt = `PZ2dh9brop4-`,
  Nt = `EuwUtglu9Dw-`,
  Pt = `sPJ5qtmB9hc-`,
  Ft = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
  It = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || P(e.M()),
        F.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: x.readUint32, bw: _e.writeUint32 },
            name: { n: 2, br: x.readString, bw: _e.writeString },
            accountid_members: {
              n: 3,
              r: !0,
              q: !0,
              br: x.readUint32,
              pbr: x.readPackedUint32,
              bw: _e.writeRepeatedUint32,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsListCategory`;
    }
  },
  Lt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetCategories_Request`;
    }
  },
  Rt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.categories || P(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { categories: { n: 1, c: It, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetCategories_Response`;
    }
  },
  zt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || P(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: x.readUint32, bw: _e.writeUint32 },
            clanid: { n: 2, br: x.readUint32, bw: _e.writeUint32 },
            chat_group_id: {
              n: 3,
              br: x.readUint64String,
              bw: _e.writeUint64String,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsListFavoriteEntry`;
    }
  },
  Bt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFavorites_Request`;
    }
  },
  Vt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.favorites || P(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { favorites: { n: 1, c: zt, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFavorites_Response`;
    }
  },
  Ht = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.favorites || P(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { favorites: { n: 1, c: zt, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_SetFavorites_Request`;
    }
  },
  Ut = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_SetFavorites_Response`;
    }
  },
  Wt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.favorites || P(e.M()),
        F.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { favorites: { n: 1, c: zt, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_FavoritesChanged_Notification`;
    }
  },
  Gt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), F.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFriendsList_Request`;
    }
  },
  Kt = class e extends F.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friendslist || P(e.M()),
        F.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { friendslist: { n: 1, c: Ne } } }),
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new F.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      C(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new F.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendsList_GetFriendsList_Response`;
    }
  },
  qt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FriendsList.GetCategories#1`, Ze(Lt, t, n), Rt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetCategories = t;
  function n(e, t, n) {
    return e.SendMsg(`FriendsList.GetFriendsList#1`, Ze(Gt, t, n), Kt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFriendsList = n;
  function r(e, t, n) {
    return e.SendMsg(`FriendsList.GetFavorites#1`, Ze(Bt, t, n), Vt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFavorites = r;
  function i(e, t, n) {
    return e.SendMsg(`FriendsList.SetFavorites#1`, Ze(Ht, t, n), Ut, {
      ePrivilege: 1,
    });
  }
  e.SetFavorites = i;
})((qt ||= {}));
var Jt;
(function (e) {
  e.FavoritesChangedHandler = {
    name: `FriendsListClient.FavoritesChanged#1`,
    request: Wt,
  };
})((Jt ||= {}));
function Yt() {
  let e = Me(),
    t = $e();
  return o(Xt(e, t));
}
function Xt(e, t) {
  return {
    queryKey: [`GetFriendsList`, t],
    queryFn: async () => {
      let t = We.Init(Gt),
        n = await qt.GetFriendsList(e, t),
        r = [];
      for (let e of n.Body().friendslist()?.friends() ?? []) {
        let t = e.ulfriendid();
        t &&
          (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
          new pe(t).BIsIndividualAccount() &&
          r.push(t);
      }
      return r;
    },
  };
}
var Zt = `nIUbxO5p4A8-`,
  Qt = `_0VP7ctGOadU-`,
  $t = `siVkCB-BeMc-`,
  en = `wrPMc1ko4O0-`,
  tn = `sa1-P2tbrtc-`,
  nn = `_3QeIZHH9LCM-`,
  rn = `REbb7We6KRY-`,
  an = `DgynSAJA0e0-`,
  on = `WJB2hOx55Ic-`,
  sn = `Px4wClOhj8g-`,
  cn = `hluYSsWwKs8-`,
  ln = `AALKXsdrG-s-`,
  un = `LR7E8btmRt0-`,
  dn = `Mc05zduSJmM-`,
  fn = `_7IgH0aB0drE-`,
  pn = `ZLkF2UoZt5M-`,
  mn = `-KEQzYsMyLo-`,
  hn = `quOQjx4gLwQ-`,
  gn = [`app_header_capsule`, `app_main_capsule`],
  _n = [`sale_header`, `sale_logo`, `capsule`, `localized_title_image`],
  vn = [`takeunder_art`, `takeunder_mobile_art`],
  yn = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  bn = [`marketingmessage_art`, `marketingmessage_art_2`],
  xn = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  Sn = [`spotlight_art_hero`],
  Cn = [...gn, ..._n, ...vn, ...yn, ...bn, ...xn, ...Sn],
  wn = 622,
  Tn = 1920,
  En = 450,
  Dn = 800,
  On = 460,
  kn = 2108,
  An = 300,
  jn = 800,
  Mn = 300,
  Nn = 644,
  Pn = 337,
  Fn = 155,
  In = 433,
  Ln = 199;
[...Cn];
function H(e) {
  return Array.isArray(e) ? e[0] : e;
}
function Rn(e) {
  return Math.min(...(Array.isArray(e) ? e : [e]));
}
function zn(e, t) {
  return t === void 0 ? H(e) : Array.isArray(e) ? e[t] : e;
}
var Bn = [1, 3, 2, 10],
  U = [1, 3, 2],
  W = [1, 3],
  Vn = [5, 4],
  Hn = [7, 6],
  G = {
    capsule: { width: Dn, height: En, rgAcceptableTypes: W },
    marketingmessage_art_2_eventcapsule: {
      width: Dn,
      height: En,
      rgAcceptableTypes: W,
    },
    marketingmessage_art_eventcapsule: {
      width: Dn,
      height: En,
      rgAcceptableTypes: W,
    },
    spotlight: { width: kn, height: On, rgAcceptableTypes: W },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: W,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: W,
    },
    localized_title_image: { width: Tn, height: wn, rgAcceptableTypes: W },
    background: { width: Tn, height: wn, rgAcceptableTypes: W },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: W,
    },
    email_full: { width: jn, height: An, rgAcceptableTypes: W },
    email_centered: { width: Nn, height: Mn, rgAcceptableTypes: W },
    broadcast_left: { width: [Ln, Fn], height: [In, Pn], rgAcceptableTypes: W },
    broadcast_right: {
      width: [Ln, Fn],
      height: [In, Pn],
      rgAcceptableTypes: W,
    },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: U,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: U,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: W,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: W,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: U,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: U,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: W,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: W,
    },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: W },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: W,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: W,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: W },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: W },
    sale_logo: { width: [1200, 940], height: [460, 460], rgAcceptableTypes: W },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: U },
    bestofyear_banner_mobile: { width: 500, height: 160, rgAcceptableTypes: U },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: Bn,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: W },
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
      rgAcceptableTypes: W,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: W,
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
      rgAcceptableTypes: W,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: W,
    },
    sale_store_capsule_small: { width: 462, height: 174, rgAcceptableTypes: W },
    sale_store_capsule_main: { width: 1232, height: 706, rgAcceptableTypes: W },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: W,
    },
    sale_cross_promo_background: {
      width: 1200,
      height: 600,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: W,
    },
    sale_cross_promo_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: W,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: U },
    spotlight_art_hero: { width: 748, height: 896, rgAcceptableTypes: W },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: U },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: U },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: U },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: U },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: U },
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
    takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: U },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: U },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: W },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: W },
  };
function Un(e, t, n, r) {
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
function Wn(e, t, n, r) {
  let i = G[n];
  return i
    ? i.bDisableEnforceDimensions
      ? !!r
      : Un(e, t, i.width, i.height)
    : !1;
}
function Gn(e, t, n) {
  let r = G[n];
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
function Kn(e) {
  let t = G[e];
  return t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7);
}
function qn(e, t) {
  return t.filter((t) => Jn(e, t));
}
function Jn(e, t) {
  return G[t].rgAcceptableTypes.includes(e);
}
var Yn = `A5DZIArSiNc-`,
  Xn = `VdxYwmaL6i4-`,
  Zn = `_3PNPGWpNrDs-`,
  Qn = class extends I.Component {
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
        (await $n(
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
      let r = G[n.artworkType].width;
      return n ? H(r) : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: t } = this.props;
      if (t) return t.width;
      let n = e.GetCurrentImageOption();
      if (!n) return 0;
      let r = G[n.artworkType].height;
      return n ? H(r) : 0;
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
      return (0, L.jsx)(it, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, L.jsxs)(`div`, {
          className: T(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, L.jsx)(nt, {
              children: k(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, L.jsx)(`div`, {
              className: T(`DialogBodyText`),
              children: k(`#ImageUpload_CropModalDescription`),
            }),
            (0, L.jsxs)(`div`, {
              className: Yn,
              style: { width: n.width, height: n.height },
              children: [
                (0, L.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, L.jsx)(p, {
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
            (0, L.jsxs)(`div`, {
              className: Xn,
              children: [
                (0, L.jsx)(`div`, {
                  className: Zn,
                  children: k(`#ImageUpload_CropPreview`),
                }),
                (0, L.jsx)(`div`, { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, L.jsx)(Qe, {
              onClick: this.OnCrop,
              children: k(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
(N([w], Qn.prototype, `OnCrop`, null),
  N([w], Qn.prototype, `UpdateCrop`, null));
async function $n(e, t, n, r, i, a, o, s, c) {
  return new Promise((l, u) => {
    let d = er(c);
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
            ? ((e.file = we(t, e.filename)),
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
function er(e) {
  switch (e) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
var tr = `_1ZQxfdsiPgM-`,
  nr = `NpcSqQhn8sA-`,
  rr = `i0pjDy4li-A-`,
  ir = `fwAY6BoxoKI-`,
  ar = `d-SkXlSVK18-`,
  or = (e) => {
    let { clanSteamID: t, fnImageSelectCallBack: n } = e,
      [r, i] = (0, I.useState)(``),
      a = ct(e.clanSteamID.GetAccountID()),
      o = () => e.closeModal && e.closeModal(),
      s = B.GetFilteredClanImages(t, r),
      c = (e) => {
        (n(e), o());
      };
    return (0, L.jsx)(Te, {
      children: (0, L.jsx)(it, {
        onEscKeypress: o,
        children: (0, L.jsxs)(Ce, {
          children: [
            (0, L.jsx)(Ge, { children: k(`#ClanImageChooser_Title`) }),
            (0, L.jsx)(Ye, {
              children: (0, L.jsxs)(ke, {
                children: [
                  (0, L.jsx)(`p`, { children: k(`#ClanImageChooser_Desc`) }),
                  (0, L.jsx)(ge, {
                    placeholder: k(`#ClanImageChooser_Search`),
                    value: r,
                    onChange: (e) => i(e.currentTarget.value),
                  }),
                  (0, L.jsx)(`div`, {
                    className: tr,
                    children: a
                      ? (0, L.jsx)(_, { size: `medium`, string: k(`#Loading`) })
                      : s.length > 0
                        ? s.map((e) =>
                            (0, L.jsx)(
                              sr,
                              {
                                clanImage: e,
                                searchStringHilight: r,
                                fnImageClick: c,
                              },
                              `ci` + e.image_hash,
                            ),
                          )
                        : r.trim().length == 0
                          ? (0, L.jsx)(`div`, {
                              children: k(`#ClanImageChooser_None`),
                            })
                          : (0, L.jsx)(`div`, {
                              children: k(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, L.jsx)(Pe, {
              children: (0, L.jsx)(D, {
                onClick: o,
                children: k(`#Button_Cancel`),
              }),
            }),
          ],
        }),
      }),
    });
  },
  sr = (e) => {
    let { clanImage: t, searchStringHilight: n, fnImageClick: r } = e,
      i = t.file_name ? t.file_name : ``,
      a = cr(n, i, String(t.imageid), nr);
    return (0, L.jsxs)(`div`, {
      className: rr,
      children: [
        (0, L.jsx)(`div`, {
          className: ir,
          style: { backgroundImage: `url( '${t.thumb_url}' )` },
          onDoubleClick: () => r(t),
        }),
        (0, L.jsx)(`div`, { className: ar, title: i, children: a }),
      ],
    });
  };
function cr(e, t, n, r) {
  let i = [];
  if (e.length > 0) {
    let a = t.toLocaleLowerCase();
    for (let o = 0; o < t.length;) {
      let s = a.indexOf(e, o);
      if (s < 0) {
        i.push(
          (0, L.jsx)(`span`, { children: t.substring(o) }, n + `_` + String(o)),
        );
        break;
      }
      (o < s &&
        i.push(
          (0, L.jsx)(
            `span`,
            { children: t.substring(o, s) },
            n + `_` + String(o),
          ),
        ),
        i.push(
          (0, L.jsx)(
            `span`,
            { className: r, children: t.substr(s, e.length) },
            n + `_` + String(o),
          ),
        ),
        (o = s + e.length));
    }
  } else i.push((0, L.jsx)(`span`, { children: t }, n + `_null`));
  return i;
}
function lr(e) {
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
function ur(e) {
  return e == `waiting` || e == `uploading` || e == `processing`;
}
var K = class {
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
    (s(this),
      (this.file = e),
      (this.filename = t),
      (this.fileType = lr(t) ?? 0),
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
(N([l], K.prototype, `dataUrl`, void 0),
  N([l], K.prototype, `width`, void 0),
  N([l], K.prototype, `height`, void 0),
  N([l], K.prototype, `status`, void 0),
  N([l.ref], K.prototype, `message`, void 0),
  N([l], K.prototype, `language`, void 0));
var dr = 960,
  fr = 311,
  pr = 480,
  mr = 156,
  hr = class extends K {
    m_rgImageOptions;
    m_currentImageOption = void 0;
    m_currentImageOptionKey = void 0;
    constructor(e, t, n, r, i, a) {
      (super(e, t, n, i, a), s(this), (this.m_rgImageOptions = r));
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
        let e = G[this.GetCurrentImageOption().artworkType];
        e &&
          ((n = e.width), (r = e.height), (i = !e.bDisableEnforceDimensions));
      }
      let o = this.width >= Rn(n) && this.height >= Rn(r),
        s = i ? Un(this.width, this.height, n, r) : o,
        c = t && t != this.fileType,
        l =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? qn(
                this.fileType,
                this.m_rgImageOptions?.map((e) => e.artworkType) || [],
              ).length == 0
            : !1,
        u = !!er(this.fileType),
        d = ``,
        f = !1,
        p;
      return (
        a
          ? l
            ? (d = k(`#ImageUpload_InvalidFileType`))
            : c
              ? (d = k(`#ImageUpload_InvalidFormat`, ne(t) ?? ``))
              : !s && !u
                ? (d = k(`#ImageUpload_InvalidResolution`, H(n), H(r)))
                : o
                  ? !s && u
                    ? ((d = k(`#ImageUpload_InvalidDimensions`, H(n), H(r))),
                      (f = !0))
                    : ((Array.isArray(n) && this.width != H(n)) ||
                        (Array.isArray(r) && this.height != H(r))) &&
                      ((p ??= []),
                      p.push(k(`#ImageUpload_PreferredDimension`, H(n), H(r))))
                  : (d = k(`#ImageUpload_TooSmall`, H(n), H(r)))
          : (d = k(`#ImageUpload_InvalidFormatSelected`)),
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
      let e = qn(
          this.fileType,
          this.m_rgImageOptions?.map((e) => e.artworkType),
        ),
        t = br(this.width, this.height, e, !1);
      if ((t === void 0 && (t = br(this.width, this.height, e, !0)), t)) {
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
(N([l], hr.prototype, `m_currentImageOption`, void 0),
  N([l], hr.prototype, `m_currentImageOptionKey`, void 0));
var gr = class extends hr {
    video;
    constructor(e, t, n, r, i, a, o) {
      (super(e, t, n, r, i, a), (this.video = o));
    }
    BIsOriginalMinimumDimensions(e) {
      return Gn(this.video.videoWidth, this.video.videoHeight, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return Jn(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return Vn.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  _r = class extends hr {
    constructor(e, t, n, r) {
      super(e, t, n, r, URL.createObjectURL(e), { width: 0, height: 0 });
    }
    BIsOriginalMinimumDimensions(e) {
      return Kn(e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return Jn(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return Vn.includes(this.fileType);
    }
    GetResizeDimension() {}
  },
  vr = class extends hr {
    bCropped = !1;
    localizedImageGroupPrimaryImage;
    media;
    constructor(e, t, n, r, i, a, o, c) {
      (super(e, t, n, r, i, a),
        s(this),
        (this.media = o),
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
      return Gn(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
    }
    FileTypeMatchesImageTypes(e) {
      return Jn(this.fileType, e.artworkType);
    }
    BIsVideo() {
      return Vn.includes(this.fileType);
    }
    GetResizeDimension() {
      return yr(this.GetCurrentImageOption()?.artworkType);
    }
  };
N([l], vr.prototype, `bCropped`, void 0);
function yr(e) {
  if (e === `background`)
    return [
      { width: dr, height: fr },
      { width: pr, height: mr },
    ];
  if (e === `capsule` || e === `spotlight`)
    return [{ width: H(G[e].width) / 2, height: H(G[e].height) / 2 }];
}
function br(e, t, n, r = !1) {
  if (n) {
    for (let i of n) if (r ? Gn(e, t, i) : Wn(e, t, i)) return i;
  }
}
var xr = class {};
function Sr(e, t, n) {
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
async function Cr(e, t, n, r, i) {
  let a = Sr(e, n, r),
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
async function wr(e, t, n, r, i, a) {
  let o = Sr(e, r, i),
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
var Tr = class extends xr {
  m_cancel = void 0;
  async UploadAllImages(e, t) {
    this.m_cancel = R.default.CancelToken.source();
    let n = this.BGetUploadsAreInSerial() ? 1 : 4,
      r,
      i = this.UploadSingleImage.bind(this);
    return (
      (r =
        n > 1
          ? await wr(this.GetUploadImages(), n, i, e, t, this.m_cancel.token)
          : await Cr(this.GetUploadImages(), i, e, t, this.m_cancel.token)),
      r
    );
  }
  CancelAllUploads() {
    this.m_cancel?.cancel(k(`#ImageUpload_CancelRequest`));
  }
};
function Er(e, t, n) {
  if (((e == null || e == null) && (e = t), !n || n.length === 0)) return e;
  for (let t of n) if (ve.IsELanguageValidInRealm(e, t)) return e;
  for (let e of n) if (ve.IsELanguageValidInRealm(t, e)) return t;
  return n.includes(Ee.k_ESteamRealmGlobal) ? 0 : 29;
}
function Dr(e, t = 0) {
  let n = e.lastIndexOf(`.`);
  n != -1 && (e = e.slice(0, n).toLowerCase());
  let r = null,
    i = 0;
  e.endsWith(`korean`) && ((r = 4), (i = 6));
  for (let t = 0; t < 32; ++t) {
    let n = Je(t);
    if (n.length <= i) continue;
    if (e.endsWith(n) && e.length > n.length + 2) {
      let a = e[e.length - n.length - 1];
      /\p{Alphabetic}|\p{Number}/u.test(a) || ((r = t), (i = n.length));
    }
    let a = be(t);
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
function Or(e, t, n) {
  let r = zn(t.width, n),
    i = zn(t.height, n);
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
        ? k(`#EventEditor_ArtworkType_store_spotlight`)
        : k(`#EventEditor_ArtworkType_` + this.artworkType);
    },
  };
}
function kr(e) {
  return e?.flatMap((e) => {
    let t = G[e];
    if (
      (fe(!!t, `Artwork Type not in Map ${e}`),
      typeof t.width == `number` && typeof t.height == `number`)
    )
      return [Or(e, t)];
    {
      let n = Math.max(
        Array.isArray(t.width) ? t.width.length : 1,
        Array.isArray(t.height) ? t.height.length : 1,
      );
      return Array.from({ length: n }, (n, r) => Or(e, t, r));
    }
  });
}
var q = class extends Tr {
  m_filesToUpload = l.array();
  m_filesCompleted = l.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(e, t, n, r) {
    (super(),
      s(this),
      (this.m_clanSteamID = e),
      (this.m_rgImageOptions = kr(t)),
      (this.m_localizedImageGroupPrimaryImage = n),
      (this.m_clanImagesV2 = r ?? !1));
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(e, t = 0) {
    let { language: n } = Dr(e.name, t);
    return this.AddImageForLanguage(e, n);
  }
  async AddImageForLanguage(e, t) {
    if (!g(e.type) && !(Ie.is_support && te(e.type))) return !1;
    let n = await ee(e, te(e.type));
    if (!n) return !1;
    let r = new vr(
      e,
      e.name,
      t,
      this.m_rgImageOptions,
      n.src,
      h(n),
      n,
      this.m_localizedImageGroupPrimaryImage,
    );
    return ((this.m_filesToUpload = [...this.m_filesToUpload, r]), !0);
  }
  async AddExistingClanImage(e, t = 0) {
    let n = m.GetHashAndExt(e);
    if (!n) return !1;
    let r = m.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, n),
      i = await (0, R.default)({ url: r, method: `GET`, responseType: `blob` }),
      a = we(i.data, e.file_name);
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
    this.m_filesToUpload = l.array();
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
    await B.LoadClanImages(this.m_clanSteamID, !0, e);
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
      s.append(`sessionid`, Ve()),
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
        A.COMMUNITY_BASE_URL +
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
      ((p = await R.default.post(d, s, f)), this.m_filesCompleted.push(i));
    } catch (e) {
      ((m = !1),
        (this.m_lastError = {
          file: i,
          status: e.response ? e.response.status : 500,
          message: rt(e).strErrorMsg,
        }),
        (p = e.response));
    }
    return (
      l || (await this.handleUploadRefresh(r)), { bSuccess: m, result: p.data }
    );
  }
};
(N([l], q.prototype, `m_filesToUpload`, void 0),
  N([l], q.prototype, `m_filesCompleted`, void 0),
  N([l], q.prototype, `m_lastError`, void 0),
  N([w], q.prototype, `AddImage`, null),
  N([w], q.prototype, `AddExistingClanImage`, null),
  N([w], q.prototype, `DeleteUploadImageByIndex`, null),
  N([w], q.prototype, `DeleteUploadImage`, null),
  N([w], q.prototype, `ClearImages`, null));
var Ar = class extends q {
    constructor(e, t, n) {
      super(e, t, n, !1);
    }
  },
  jr = class extends q {
    constructor(e, t, n) {
      super(e, t, n, !0);
    }
  };
function Mr(e, t, n) {
  let r = Le(t instanceof Array ? t : [t]),
    i = e.ConvertTo64BitString();
  return I.useMemo(() => new Ar(e, r, n), [i, r]);
}
var Nr = r((e) => {
    let {
        clanSteamID: t,
        inputClanImage: n,
        nWidth: r,
        nHeight: i,
        setImage: a,
      } = e,
      o = I.useMemo(() => ({ width: r, height: i }), [r, i]),
      [s, c] = I.useState(void 0),
      [l, u] = I.useState(!!n),
      [d, f] = I.useState(!1),
      p = Mr(t, `dummy`),
      ee = I.useCallback(
        async (e) => {
          if (
            (p.ClearImages(), e && (u(!0), await p.AddExistingClanImage(e, 0)))
          ) {
            c(e);
            let t = p.GetUploadImages()[0].IsValidAssetType(o);
            t.error.length != 0 ||
              t.needsCrop ||
              (n && n.image_hash == e.image_hash) ||
              a(e);
          }
          u(!1);
        },
        [p, n, a, o],
      );
    I.useEffect(() => {
      ee(n);
    }, [ee, n]);
    let h = (e) => {
        let t = new pe(Ue.CLANSTEAMID);
        Ae(
          (0, L.jsx)(or, {
            clanSteamID: t,
            fnImageSelectCallBack: (e) => ee(e),
          }),
          j(e) ?? window,
        );
      },
      te = (e) => {
        let t = j(e) ?? window,
          n = p.GetUploadImages()[0];
        Ae(
          (0, L.jsx)(Qn, {
            ownerWin: t,
            uploadFile: n,
            forceResolution: { width: r, height: i },
            fileType: 3,
          }),
          t,
        );
      },
      ne = async () => {
        f(!0);
        try {
          let e = await p.UploadAllImages(o),
            n = Object.values(e);
          if (n && n.length > 0) {
            fe(
              n.length == 1,
              `ClanImagePickForCertainSize expected size 1, got ` + n.length,
            );
            let e = n[0].bSuccess ? n[0].uploadResult : void 0,
              r = m.GetHashAndExt(e ?? null),
              i = m.GetThumbHashAndExt(e ?? null);
            if (e?.image_hash && e.file_type !== void 0 && r && i) {
              let n = m.GenerateURLFromHashAndExt(t, r),
                o = m.GenerateURLFromHashAndExt(t, i),
                s = {
                  imageid: -11231412,
                  image_hash: e.image_hash,
                  thumbnail_hash: e.thumbnail_hash,
                  file_type: e.file_type,
                  file_name: e.file_name,
                  clanAccountID: t.GetAccountID(),
                  url: n,
                  thumb_url: o,
                  uploaded_time: Date.now() / 1e3,
                };
              (c(s), a(s));
            }
          }
        } finally {
          f(!1);
        }
      },
      re = ``,
      ie = !1,
      g;
    if (p && p.GetFilesToUpload().length > 0) {
      g = p.GetUploadImages()[0];
      let e = g.IsValidAssetType(o);
      ((re = e.error), (ie = e.needsCrop));
    }
    return (0, L.jsxs)(L.Fragment, {
      children: [
        l
          ? (0, L.jsx)(_, { size: `medium`, string: k(`#Loading`) })
          : s &&
            (0, L.jsx)(`div`, {
              className: `_9Z5REaLWRq4-`,
              style: {
                backgroundImage: `url( '${g ? g.dataUrl : s.url}' )`,
                height: `${i}px`,
                width: `${r}px`,
              },
            }),
        !!re && (0, L.jsx)(`p`, { children: re }),
        ie &&
          (0, L.jsx)(D, { onClick: te, children: k(`#BBCode_ResizeImage`) }),
        g &&
          g.bCropped &&
          (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(`div`, {
                children: k(`#ClanImagePickAndResize_UploadStatus`, g.status),
              }),
              d
                ? (0, L.jsx)(_, { string: k(`#Uploading`), size: `small` })
                : (0, L.jsx)(D, {
                    onClick: ne,
                    children: k(`#ClanImagePickAndResize_UploadImage`),
                  }),
            ],
          }),
        (0, L.jsx)(D, { onClick: h, children: k(`#BBCode_ChooseImage`, r, i) }),
      ],
    });
  }),
  Pr,
  Fr = class extends I.Component {
    static {
      Pr = this;
    }
    m_cancelSignal = R.default.CancelToken.source();
    static s_formattingHelp = new Map();
    constructor(e) {
      (super(e),
        (this.state = {
          formattingHelp: {
            __html: Pr.s_formattingHelp.get(e.formatType) ?? ``,
          },
        }));
    }
    componentDidMount() {
      this.AjaxGetFormattingHelp().catch((e) => {
        this.setState(rt(e));
      });
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`FormattingHelpWidget component unmounted`);
    }
    static GetHelpURL(e, t) {
      return (
        A.COMMUNITY_BASE_URL +
        `comment/` +
        e +
        `/formattinghelp` +
        (t ? `?ajax=1` : ``)
      );
    }
    async AjaxGetFormattingHelp() {
      if (this.state.formattingHelp.__html == ``) {
        let e = { sessionid: Ve() },
          t;
        ((t = await R.default.get(Pr.GetHelpURL(this.props.formatType, !0), {
          params: e,
          cancelToken: this.m_cancelSignal.token,
        })),
          Pr.s_formattingHelp.set(this.props.formatType, t.data),
          this.setState({ formattingHelp: { __html: t.data } }));
      }
    }
    render() {
      return this.state.strErrorMsg
        ? (0, L.jsxs)(`div`, {
            children: [
              this.state.strErrorMsg,
              (0, L.jsx)(`br`, {}),
              this.state.errorCode,
            ],
          })
        : this.state.formattingHelp.__html == ``
          ? (0, L.jsx)(_, {})
          : (0, L.jsx)(E, {
              strTitle: k(`#EventEditor_FormattingHelp_GetHelpLink`),
              strDescription: ``,
              closeModal: this.props.closeModal,
              onOK: this.props.closeModal,
              onCancel: this.props.closeModal,
              bAlertDialog: !0,
              className: `ModernBBStyles`,
              children: (0, L.jsx)(`div`, {
                dangerouslySetInnerHTML: this.state.formattingHelp,
              }),
            });
    }
  };
Fr = Pr = N([r], Fr);
var Ir,
  J = class extends I.Component {
    descAutoTextAreaRef = I.createRef();
    constructor(e) {
      (super(e), (this.state = { bShowDragTarget: !1 }));
    }
    componentDidMount() {
      B.AddClanImageDragListener(this.ClanImageDragListener);
    }
    componentWillUnmount() {
      B.RemoveClanImageDragListener(this.ClanImageDragListener);
    }
    ClanImageDragListener(e, t) {
      this.state.bShowDragTarget != t && this.setState({ bShowDragTarget: t });
    }
    onFocus(e) {
      e && e.target.select();
    }
    InsertText(e) {
      Y.replaceSelection(this.GetTextAreaRef()?.current, e);
    }
    OnTextAreaDropListener(e) {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        e.dataTransfer.items && e.dataTransfer.items[0])
      ) {
        let t = e.dataTransfer.getData(`text`);
        if (t && t.length > 0) {
          for (let e of [m.GetBaseURL(), m.GetBaseURLV2()])
            if (t.startsWith(e)) {
              let n = `[img]` + re + `/` + t.substr(e.length) + `[/img]`;
              Y.replaceSelection(this.GetTextAreaRef()?.current, n);
              break;
            }
        }
      }
    }
    GetTextAreaRef() {
      return this.descAutoTextAreaRef.current?.GetTextAreaRef();
    }
    render() {
      return (0, L.jsxs)(I.Fragment, {
        children: [
          (0, L.jsx)(X, {
            pathToImages:
              A.COMMUNITY_CDN_URL + `public/images/sharedfiles/guides/`,
            fnTextareaRef: this.GetTextAreaRef,
            emoticonStore: this.props.emoticonStore,
            supportBBCodes: this.props.limitBBCode
              ? this.props.limitBBCode
              : ae,
            bSupportHTMLImport: this.props.bSupportHTMLImport,
            showFormatHelp: this.props.showFormatHelp,
            bEmbeddedInDialog: this.props.bEmbeddedInDialog,
            clanSteamID: this.props.clanSteamID,
          }),
          (0, L.jsx)(`div`, {
            className: T(
              Qt,
              hn,
              this.state.bShowDragTarget ? Zt : ``,
              this.props.className ? this.props.className : ``,
            ),
            children: (0, L.jsx)(V, {
              cols: 90,
              rows: this.props.nOverridesRows || 22,
              maxLength: 64e3,
              className: T(
                en,
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
                : ae,
            }),
          }),
        ],
      });
    }
  };
(N([w], J.prototype, `ClanImageDragListener`, null),
  N([w], J.prototype, `onFocus`, null),
  N([w], J.prototype, `OnTextAreaDropListener`, null),
  N([w], J.prototype, `GetTextAreaRef`, null),
  (J = N([r], J)));
var Y = class e {
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
  X = class extends I.Component {
    m_linkPopupRef = I.createRef();
    onBold() {
      Y.wrapBBCode(`[b]`, `[/b]`, this.props.fnTextareaRef()?.current);
    }
    onItalics() {
      Y.wrapBBCode(`[i]`, `[/i]`, this.props.fnTextareaRef()?.current);
    }
    onUnderline() {
      Y.wrapBBCode(`[u]`, `[/u]`, this.props.fnTextareaRef()?.current);
    }
    onStrikeThrough() {
      Y.wrapBBCode(
        `[strike]`,
        `[/strike]`,
        this.props.fnTextareaRef()?.current,
      );
    }
    onHeader() {
      Y.wrapBBCode(`[h1]`, `[/h1]`, this.props.fnTextareaRef()?.current);
    }
    onHeader2() {
      Y.wrapBBCode(`[h2]`, `[/h2]`, this.props.fnTextareaRef()?.current);
    }
    onHeader3() {
      Y.wrapBBCode(`[h3]`, `[/h3]`, this.props.fnTextareaRef()?.current);
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
        Y.wrapBBCode(
          n + `[*]`,
          `
` + r,
          t,
        );
      else {
        let e =
          n +
          Y.getSelectedString(t)
            .split(`
`)
            .map((e) => (e.match(/\*+\s/) ? `[*]` : `[*] `) + e).join(`
`) +
          `
` +
          r;
        Y.replaceSelection(t, e);
      }
    }
    OnAddLink(e) {
      let t = this.props.fnTextareaRef();
      t && Oe((0, L.jsx)(Lr, { textareaRef: t }), j(e) ?? window);
    }
    ShowHelpDialog(e) {
      this.props.showFormatHelp &&
        Oe(
          (0, L.jsx)(Fr, { formatType: this.props.showFormatHelp }),
          j(e) ?? window,
        );
    }
    OnConvertHTMLToBBCodeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let n = j(e) ?? window;
      Oe((0, L.jsx)($, { ownerWindow: n, textareaRef: t }), n);
    }
    OnOpenYoutubeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let n = A.IMG_URL + `applications/community/`;
      Oe((0, L.jsx)(Q, { textareaRef: t, pathToImages: n }), j(e) ?? window);
    }
    OnOpenImageDialog(e) {
      let t = this.props.fnTextareaRef();
      t && Oe((0, L.jsx)(Rr, { textareaRef: t }), j(e) ?? window);
    }
    OnOpenSpeakerDialog(e) {
      let t = this.props.fnTextareaRef(),
        n = this.props.clanSteamID;
      t &&
        n &&
        Ae((0, L.jsx)(zr, { clanSteamID: n, textareaRef: t }), j(e) ?? window);
    }
    OnEmoticonSelected(e, t = !1) {
      let n = `\u02D0${e}\u02D0`;
      (Y.replaceSelection(this.props.fnTextareaRef()?.current, n),
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
            ? (0, L.jsx)(`span`, {
                className: T(`ttip`, void 0),
                children: (0, L.jsx)(O, {
                  toolTipContent: k(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: (0, L.jsxs)(`a`, {
                    href: Fr.GetHelpURL(e, !1),
                    target: A.IN_CLIENT ? void 0 : `_blank`,
                    children: [
                      (0, L.jsx)(`img`, { src: r + `/action_help.png` }),
                      ` `,
                      k(`#EventEditor_FormattingHelp_GetHelpLink`),
                    ],
                  }),
                }),
              })
            : (0, L.jsx)(`span`, {
                onClick: this.ShowHelpDialog,
                className: T(`ttip`, void 0),
                children: (0, L.jsxs)(O, {
                  toolTipContent: k(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: [
                    (0, L.jsx)(`img`, { src: r + `/action_help.png` }),
                    ` `,
                    k(`#EventEditor_FormattingHelp_GetHelpLink`),
                  ],
                }),
              })),
        (0, L.jsxs)(`div`, {
          className: an,
          children: [
            this.BSupports(`b`) &&
              (0, L.jsx)(Z, {
                onClick: this.onBold,
                tooltip: k(`#Editor_Bold`),
                imgURL: this.props.pathToImages + `/format_bold.png`,
              }),
            this.BSupports(`u`) &&
              (0, L.jsx)(Z, {
                onClick: this.onUnderline,
                tooltip: k(`#Editor_Underline`),
                imgURL: this.props.pathToImages + `/format_underline.png`,
              }),
            this.BSupports(`i`) &&
              (0, L.jsx)(Z, {
                onClick: this.onItalics,
                tooltip: k(`#Editor_Italics`),
                imgURL: this.props.pathToImages + `/format_italic.png`,
              }),
            this.BSupports(`strike`) &&
              (0, L.jsx)(Z, {
                onClick: this.onStrikeThrough,
                tooltip: k(`#Editor_StrikeThrough`),
                imgURL: this.props.pathToImages + `/format_strike.png`,
              }),
            !(!this.BSupports(`url`) || t) &&
              (0, L.jsx)(Z, {
                onClick: this.OnAddLink,
                tooltip: k(`#Editor_Link`),
                imgURL: this.props.pathToImages + `/format_link.png`,
              }),
            this.BSupports(`list`) &&
              (0, L.jsx)(Z, {
                onClick: this.onUnorderedList,
                tooltip: k(`#Editor_Unordered`),
                imgURL: this.props.pathToImages + `/format_bullet.png`,
              }),
            this.BSupports(`olist`) &&
              (0, L.jsx)(Z, {
                onClick: this.onOrderedList,
                tooltip: k(`#Editor_Ordered`),
                imgURL: this.props.pathToImages + `/format_numbered.png`,
              }),
            this.BSupports(`h1`) &&
              (0, L.jsx)(Z, {
                onClick: this.onHeader,
                tooltip: k(`#Editor_Header`),
                imgURL: this.props.pathToImages + `/format_header1.png`,
              }),
            this.BSupports(`h2`) &&
              (0, L.jsx)(Z, {
                onClick: this.onHeader2,
                tooltip: k(`#Editor_Header2`),
                imgURL: this.props.pathToImages + `/format_header2.png`,
              }),
            this.BSupports(`h3`) &&
              (0, L.jsx)(Z, {
                onClick: this.onHeader3,
                tooltip: k(`#Editor_Header3`),
                imgURL: this.props.pathToImages + `/format_header3.png`,
              }),
            this.BSupports(`previewyoutube`) &&
              (0, L.jsx)(Z, {
                onClick: this.OnOpenYoutubeDialog,
                tooltip: k(`#EventEditor_InsertYouTube`),
                imgURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
              }),
            (0, L.jsx)(`span`, {
              className: `ttip`,
              children:
                this.props.emoticonStore &&
                (0, L.jsx)(O, {
                  toolTipContent: k(`#Editor_Emoticon`),
                  children: (0, L.jsx)(ce, {
                    title: ` `,
                    className: T(`_5LFNlKLTFJM-`),
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
              (0, L.jsx)(Z, {
                onClick: this.OnOpenImageDialog,
                tooltip: k(`#EventEditor_InsertImage`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !!(
              Ie.is_support &&
              this.props.clanSteamID &&
              this.BSupports(`speaker`)
            ) &&
              (0, L.jsx)(Z, {
                onClick: this.OnOpenSpeakerDialog,
                tooltip: k(`#EventEditor_AddSpeaker`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !(!n || t) &&
              (0, L.jsx)(Z, {
                onClick: this.OnConvertHTMLToBBCodeDialog,
                className: void 0,
                tooltip: k(`#EventEditor_ImportFromHTML_ttip`),
                children: k(`#EventEditor_ImportHTML`),
              }),
            i,
          ],
        })
      );
    }
  };
(N([w], X.prototype, `onBold`, null),
  N([w], X.prototype, `onItalics`, null),
  N([w], X.prototype, `onUnderline`, null),
  N([w], X.prototype, `onStrikeThrough`, null),
  N([w], X.prototype, `onHeader`, null),
  N([w], X.prototype, `onHeader2`, null),
  N([w], X.prototype, `onHeader3`, null),
  N([w], X.prototype, `onUnorderedList`, null),
  N([w], X.prototype, `onOrderedList`, null),
  N([w], X.prototype, `OnAddLink`, null),
  N([w], X.prototype, `ShowHelpDialog`, null),
  N([w], X.prototype, `OnConvertHTMLToBBCodeDialog`, null),
  N([w], X.prototype, `OnOpenYoutubeDialog`, null),
  N([w], X.prototype, `OnOpenImageDialog`, null),
  N([w], X.prototype, `OnOpenSpeakerDialog`, null),
  N([w], X.prototype, `OnEmoticonSelected`, null),
  (X = N([r], X)));
function Z(e) {
  return (0, L.jsx)(`span`, {
    onClick: e.onClick,
    className: e.className,
    children: (0, L.jsxs)(O, {
      toolTipContent: e.tooltip,
      className: `ttip`,
      children: [
        !!e.imgURL && (0, L.jsx)(`img`, { src: e.imgURL }),
        e.children,
      ],
    }),
  });
}
var Q = class extends I.Component {
  state = { youtubeInput: ``, alignment: v.left };
  OnYoutubeInsertLink() {
    let e = this.state.youtubeInput && oe(this.state.youtubeInput);
    if (!e) alert(k(`#EventEditor_InsertYouTube_NoURL`));
    else {
      if (this.state.alignment == v.summary) {
        let t =
          `https://www.youtube.com/watch?v=` +
          e.strVideoID +
          (e.nStartSeconds ? `&t=` + e.nStartSeconds : ``);
        Y.wrapBBCode(t, ``, this.props.textareaRef.current);
      } else {
        let t =
          `[previewyoutube=` + e.strVideoID + `;` + this.state.alignment + `]`;
        Y.wrapBBCode(t, `[/previewyoutube]`, this.props.textareaRef.current);
      }
      this.setState({ youtubeInput: ``, alignment: v.left });
    }
  }
  OnUrlChange(e) {
    this.state.youtubeInput != e.target.value &&
      this.setState({ youtubeInput: e.target.value });
  }
  OnLeftSelected() {
    this.setState({ alignment: v.left });
  }
  OnRightSelected() {
    this.setState({ alignment: v.right });
  }
  OnFullSelected() {
    this.setState({ alignment: v.full });
  }
  OnSummarySelected() {
    this.setState({ alignment: v.summary });
  }
  OnOuterDivClickPassDown(e) {}
  render() {
    return (0, L.jsx)(E, {
      strTitle: k(`#EventEditor_InsertYouTube`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnYoutubeInsertLink,
      strOKButtonText: k(`#EventEditor_InsertYouTube`),
      className: hn,
      children: (0, L.jsxs)(`div`, {
        className: on,
        children: [
          (0, L.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, L.jsxs)(`label`, {
              children: [
                (0, L.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: k(`#EventEditor_InsertYouTube_URL`),
                }),
                (0, L.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, L.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    ref: (e) => {
                      e?.focus();
                    },
                    type: `text`,
                    value: this.state.youtubeInput,
                    onChange: this.OnUrlChange,
                    placeholder: k(`#EventEditor_InsertYouTube_Placholder`),
                  }),
                }),
              ],
            }),
          }),
          (0, L.jsxs)(`div`, {
            className: `DialogInputLabelGroup`,
            children: [
              (0, L.jsx)(`div`, {
                className: `DialogLabel`,
                children: k(`#EventEditor_InsertYouTube_Position`),
              }),
              (0, L.jsxs)(`div`, {
                className: sn,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, L.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: v.left,
                    value: v.left,
                    checked: this.state.alignment == v.left,
                    onChange: this.OnLeftSelected,
                  }),
                  (0, L.jsx)(`label`, {
                    htmlFor: v.left,
                    children: (0, L.jsx)(`span`, {
                      children: k(`#EventEditor_InsertYouTube_Left`),
                    }),
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: sn,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, L.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: v.right,
                    value: v.right,
                    checked: this.state.alignment == v.right,
                    onChange: this.OnRightSelected,
                  }),
                  (0, L.jsx)(`label`, {
                    htmlFor: v.right,
                    children: (0, L.jsx)(`span`, {
                      children: k(`#EventEditor_InsertYouTube_Right`),
                    }),
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: sn,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, L.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: v.full,
                    value: v.full,
                    checked: this.state.alignment == v.full,
                    onChange: this.OnFullSelected,
                  }),
                  (0, L.jsx)(`label`, {
                    htmlFor: v.full,
                    children: (0, L.jsx)(`span`, {
                      children: k(`#EventEditor_InsertYouTube_Full`),
                    }),
                  }),
                ],
              }),
              (0, L.jsxs)(`div`, {
                className: sn,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, L.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: v.summary,
                    value: v.summary,
                    checked: this.state.alignment == v.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  (0, L.jsx)(`label`, {
                    htmlFor: v.summary,
                    children: (0, L.jsx)(`span`, {
                      children: k(`#EventEditor_InsertYouTube_Summary`),
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
(N([w], Q.prototype, `OnYoutubeInsertLink`, null),
  N([w], Q.prototype, `OnUrlChange`, null),
  N([w], Q.prototype, `OnLeftSelected`, null),
  N([w], Q.prototype, `OnRightSelected`, null),
  N([w], Q.prototype, `OnFullSelected`, null),
  N([w], Q.prototype, `OnSummarySelected`, null),
  N([w], Q.prototype, `OnOuterDivClickPassDown`, null),
  (Q = N([r], Q)));
var Lr = class extends I.Component {
  static {
    Ir = this;
  }
  state = { textToDisplay: ``, strURL: `` };
  static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
  LoadFromTextArea() {
    let { textareaRef: e } = this.props;
    if (e && e.current) {
      let t = Y.getSelectedString(e.current),
        n = Ir.m_regExp.exec(t);
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
    Y.replaceSelection(this.props.textareaRef.current, n);
  }
  render() {
    return (0, L.jsx)(E, {
      strTitle: k(`#Editor_Link`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onOK: this.onInsertLink,
      onCancel: this.props.closeModal,
      strOKButtonText: k(`#EventEditor_InsertLinkURL`),
      className: hn,
      children: (0, L.jsxs)(`div`, {
        className: $t,
        children: [
          (0, L.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, L.jsxs)(`label`, {
              children: [
                (0, L.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: k(`#EventEditor_LinkDescription`),
                }),
                (0, L.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, L.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkTitleUpdate,
                    value: this.state.textToDisplay,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
          (0, L.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, L.jsxs)(`label`, {
              children: [
                (0, L.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: k(`#EventEditor_LinkURL`),
                }),
                (0, L.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, L.jsx)(`input`, {
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
(N([w], Lr.prototype, `onLinkTitleUpdate`, null),
  N([w], Lr.prototype, `onLinkURLUpdate`, null),
  N([w], Lr.prototype, `onInsertLink`, null),
  (Lr = Ir = N([r], Lr)));
var Rr = class extends I.Component {
  refFirstInput = I.createRef();
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
      Y.wrapBBCode(n, r, this.props.textareaRef.current));
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
    return (0, L.jsx)(E, {
      strTitle: k(`#EventEditor_InsertImage_Title`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnImageInsert,
      strOKButtonText: k(`#EventEditor_InsertImage_Title`),
      className: hn,
      children: (0, L.jsxs)(`div`, {
        className: $t,
        children: [
          (0, L.jsx)(`p`, { children: k(`#EventEditor_InsertImage_Desc`) }),
          (0, L.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, L.jsxs)(`label`, {
              children: [
                (0, L.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: k(`#EventEditor_InsertImage_URL`),
                }),
                (0, L.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, L.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: e,
                    onChange: this.OnImageURLChange,
                    placeholder: k(`#EventEditor_InsertImage_Placeholder`),
                    ref: this.refFirstInput,
                  }),
                }),
              ],
            }),
          }),
          (0, L.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, L.jsxs)(`label`, {
              children: [
                (0, L.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: k(`#EventEditor_InsertImage_Anchor`),
                }),
                (0, L.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, L.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: t,
                    onChange: this.OnAnchorURLChange,
                    placeholder: k(`#EventEditor_InsertImage_Placeholder`),
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
(N([w], Rr.prototype, `OnImageInsert`, null),
  N([w], Rr.prototype, `OnImageURLChange`, null),
  N([w], Rr.prototype, `OnAnchorURLChange`, null),
  (Rr = N([r], Rr)));
var zr = (e) => {
  let [t, n] = I.useState(``),
    [r, i] = I.useState(``),
    [a, o] = I.useState(``),
    [s, c] = I.useState(``),
    [l, u] = I.useState(void 0),
    [d, f] = I.useState(void 0),
    { data: p } = Yt(),
    { isLoading: ee, data: h } = de(d?.GetAccountID()),
    te = () => {
      let n = `[speaker name="${t.trim()}"`;
      if (
        (r.trim().length > 0 && (n += ` title="${r}"`),
        a.trim().length > 0 && (n += ` company="${a}"`),
        l)
      ) {
        let e = re + `/` + l.clanAccountID + `/` + m.GetHashAndExt(l);
        n += ` photo="${e}"`;
      }
      (d && (n += ` steamid="${d.ConvertTo64BitString()}"`),
        (n += `]${s}[/speaker]`),
        Y.replaceSelection(e.textareaRef.current, n));
    },
    ne = t.trim().length != 0 && s.trim().length != 0;
  return (0, L.jsx)(E, {
    strTitle: k(`#EventEditor_AddSpeaker`),
    strDescription: k(`#EventEditor_AddSpeaker_Desc`),
    closeModal: e.closeModal,
    onCancel: e.closeModal,
    bOKDisabled: !ne,
    onOK: te,
    className: hn,
    children: (0, L.jsxs)(`div`, {
      className: ln,
      children: [
        (0, L.jsx)(ge, {
          type: `text`,
          label: k(`#EventEditor_AddSpeaker_Name`),
          value: t,
          onChange: (e) => n(e.target.value),
          focusOnMount: !0,
        }),
        (0, L.jsxs)(`div`, {
          className: un,
          children: [
            (0, L.jsx)(ge, {
              type: `text`,
              label: k(`#EventEditor_AddSpeaker_Title`),
              value: r,
              onChange: (e) => i(e.target.value),
            }),
            (0, L.jsx)(ge, {
              type: `text`,
              label: k(`#EventEditor_AddSpeaker_Company`),
              value: a,
              onChange: (e) => o(e.target.value),
            }),
          ],
        }),
        (0, L.jsx)(O, {
          toolTipContent: k(`#EventEditor_AssociateSteamAccount_ttip`),
          children: (0, L.jsxs)(`div`, {
            className: `DialogLabel`,
            children: [k(`#EventEditor_AssociateSteamAccount`), ` (?)`],
          }),
        }),
        (0, L.jsxs)(`div`, {
          children: [
            ee && (0, L.jsx)(_, { string: k(`#Loading`), size: `small` }),
            d &&
              h &&
              (0, L.jsxs)(`a`, {
                href:
                  A.COMMUNITY_BASE_URL + `profiles/` + d.ConvertTo64BitString(),
                target: `_blank`,
                children: [
                  h
                    ? (0, L.jsx)(`img`, {
                        style: { marginRight: `8px` },
                        src: h.avatar_url,
                      })
                    : null,
                  h ? h.m_strPlayerName : null,
                ],
              }),
            (0, L.jsxs)(`div`, {
              className: dn,
              children: [
                (0, L.jsx)(D, {
                  onClick: () => f(new pe(Ie.steamid)),
                  children: k(`#EventEditor_SteamAccount_addme`),
                }),
                (0, L.jsx)(D, {
                  onClick: (e) =>
                    De((0, L.jsx)(Br, { friends: p ?? [], setSteamID: f }), e),
                  children: k(`#EventEditor_SteamAccount_addfriend`),
                }),
                (0, L.jsx)(D, {
                  onClick: () => f(void 0),
                  children: k(`#EventEditor_SteamAccount_clear`),
                }),
              ],
            }),
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: fn,
          children: [
            (0, L.jsx)(`div`, {
              className: `DialogLabel`,
              children: k(`#EventEditor_ChoosePhoto`),
            }),
            (0, L.jsx)(Nr, {
              clanSteamID: e.clanSteamID,
              inputClanImage: l,
              setImage: u,
              nWidth: 184,
              nHeight: 184,
            }),
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: pn,
          children: [
            (0, L.jsx)(`div`, {
              className: `DialogLabel`,
              children: k(`#EventEditor_AddSpeaker_About`),
            }),
            (0, L.jsx)(Se, {
              value: s,
              onChange: (e) => c(e.target.value),
              rows: 8,
              cols: 80,
              nMinHeight: 40,
              placeholder: k(`#EventEditor_AddSpeaker_About_Placeholder`),
            }),
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: mn,
          children: [
            (0, L.jsx)(`div`, {
              className: `DialogLabel`,
              children: k(`#Button_Preview`),
            }),
            (0, L.jsx)(ie, {
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
function Br(e) {
  let { friends: t, setSteamID: n } = e;
  return (0, L.jsx)(`div`, {
    className: cn,
    children: t.map((e) => (0, L.jsx)(Vr, { steamid: e, setSteamID: n }, e)),
  });
}
function Vr(e) {
  let { steamid: t, setSteamID: n } = e,
    { data: r } = de(t);
  return (0, L.jsx)(Xe, {
    onSelected: () => n(new pe(t)),
    children: (0, L.jsxs)(`div`, {
      style: { display: `flex`, alignItems: `center` },
      children: [
        r &&
          (0, L.jsx)(`img`, { className: `SZCLgazwykY-`, src: r.avatar_url }),
        r?.m_strPlayerName,
      ],
    }),
  });
}
var $ = class extends I.Component {
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
        await R.default.post(
          A.COMMUNITY_BASE_URL + `/actions/ConvertHTMLToBBCode`,
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
              ? Y.append(e, this.props.textareaRef.current)
              : Y.overwrite(e, this.props.textareaRef.current),
            this.setState({ bConverting: !1, bFinishedConverting: !0 }));
        })
        .catch((e) => {
          Ae(
            (0, L.jsx)(he, {
              strTitle: k(`#EventEditor_ConvertHTML_Error`),
              strDescription: k(
                `#EventEditor_ConvertHTML_Error_Desc`,
                e.response && e.response.data ? e.response.data.msg : e,
              ),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
            }),
            this.props.ownerWindow,
            { strTitle: k(`#EventEditor_ConvertHTML_Error`) },
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
      ? (0, L.jsx)(E, {
          strTitle: k(`#EventEditor_ImportFromHTML`),
          strDescription: k(`#EventEditor_ImportFromHTML_ConversionInProgress`),
          closeModal: e,
          bAlertDialog: !0,
          onOK: e,
          onCancel: e,
          children: (0, L.jsx)(_, {}),
        })
      : this.state.bFinishedConverting
        ? (0, L.jsx)(E, {
            strTitle: k(`#EventEditor_ImportFromHTML`),
            strDescription: k(`#EventEditor_ImportFromHTML_ConvertFinished`),
            closeModal: e,
            bAlertDialog: !0,
            onOK: e,
            onCancel: e,
          })
        : (0, L.jsx)(ye, {
            title: k(`#EventEditor_ImportFromHTML`),
            onOK: this.OnConvertAndOverriteHTML,
            onCancel: e,
            className: hn,
            children: (0, L.jsxs)(Ye, {
              children: [
                (0, L.jsx)(ke, {
                  children: (0, L.jsxs)(`div`, {
                    className: T(et, tn),
                    children: [
                      (0, L.jsx)(`div`, {
                        className: et,
                        children: Be(
                          `#EventEditor_ImportFromHTML_ConvertDescription`,
                          (0, L.jsx)(`a`, {
                            target: A.IN_CLIENT ? void 0 : `_blank`,
                            href: `https://partner.steamgames.com/doc/marketing/event_tools/import`,
                            children: k(
                              `#EventEditor_ImportFromHTML_ConvertLearn`,
                            ),
                          }),
                        ),
                      }),
                      (0, L.jsx)(`textarea`, {
                        value: this.state.strHTMLData,
                        placeholder: k(
                          `#EventEditor_ImportFromHTML_Instruction`,
                        ),
                        className: nn,
                        onChange: this.OnTextAreaChange,
                        ref: (e) => {
                          e?.focus();
                        },
                      }),
                      (0, L.jsxs)(`div`, {
                        className: rn,
                        children: [
                          (0, L.jsx)(`input`, {
                            id: `ImportFromHTMLNewLines`,
                            type: `checkbox`,
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          (0, L.jsxs)(`label`, {
                            htmlFor: `ImportFromHTMLNewLines`,
                            children: [
                              k(`#EventEditor_ImportFromHTML_PreserveNewlines`),
                              (0, L.jsx)(ze, {
                                tooltip: k(
                                  `#EventEditor_ImportFromHTML_PreserveNewlines_Hint`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, L.jsx)(`div`, {
                        children: k(
                          `#EventEditor_ImportFromHTML_ConvertToBBCode`,
                        ),
                      }),
                    ],
                  }),
                }),
                (0, L.jsx)(Pe, {
                  children: (0, L.jsx)(Ke, {
                    onCancel: () => e?.(),
                    strOKText: k(`#Button_Overwrite`),
                    onUpdate: this.OnConvertAndAppendHTML,
                    strUpdateText: k(`#Button_Append`),
                  }),
                }),
              ],
            }),
          });
  }
};
(N([w], $.prototype, `OnConvertAndOverriteHTML`, null),
  N([w], $.prototype, `OnConvertAndAppendHTML`, null),
  N([w], $.prototype, `OnCheckboxChange`, null),
  N([w], $.prototype, `OnTextAreaChange`, null),
  ($ = N([r], $)));
var Hr = class extends I.Component {
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
        (0, L.jsx)(
          `option`,
          { value: -1, children: k(`#language_selection_none`) },
          `langpicker_unset`,
        ),
      );
    let a = [],
      o = this.props.realms || [Ee.k_ESteamRealmGlobal];
    for (let e of ve.GetLanguageListForRealms(o)) {
      if (t && !t(e)) continue;
      let n = be(e),
        r = k(`#Language_` + n),
        o = !!(i && i(e));
      a.push({ eLang: e, sLocName: r, bSupported: o });
    }
    a.sort((e, t) =>
      e.bSupported == t.bSupported
        ? e.sLocName.localeCompare(t.sLocName)
        : e.bSupported
          ? -1
          : 1,
    );
    let s = !1;
    for (let t of a) {
      t.bSupported != s &&
        (e.push(
          (0, L.jsx)(
            `option`,
            {
              className: me,
              disabled: !0,
              children: k(
                t.bSupported
                  ? `#LanguageGroup_Supported`
                  : `#LanguageGroup_Unsupported`,
              ),
            },
            t.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
          ),
        ),
        (s = t.bSupported));
      let i = n && n(t.eLang),
        a = r && r(t.eLang),
        o = t.sLocName;
      (a &&
        a !== 0 &&
        ((o += ` `),
        (o += k(
          `#Language_Last_Update`,
          Fe(a) + ` @ ` + He(a, { bForce24HourClock: !1 }),
        ))),
        e.push(
          (0, L.jsx)(
            `option`,
            {
              value: t.eLang,
              className: T({ [Re]: i }, (t.bSupported, void 0)),
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
    return (0, L.jsx)(O, {
      toolTipContent: n,
      children: (0, L.jsx)(`select`, {
        value: e,
        onChange: this.OnLanguageChange,
        disabled: t,
        children: r,
      }),
    });
  }
};
(N([w], Hr.prototype, `OnLanguageChange`, null), (Hr = N([r], Hr)));
export {
  Et as A,
  z as B,
  Mt as C,
  Ot as D,
  Tt as E,
  St as F,
  xt as I,
  B as L,
  wt as M,
  jt as N,
  Pt as O,
  bt as P,
  st as R,
  Dt as S,
  At as T,
  at as V,
  G as _,
  kr as a,
  Vn as b,
  Dr as c,
  gr as d,
  _r as f,
  Qn as g,
  cr as h,
  jr as i,
  kt as j,
  Nt as k,
  Er as l,
  lr as m,
  J as n,
  Mr as o,
  ur as p,
  Ar as r,
  Tr as s,
  Hr as t,
  vr as u,
  H as v,
  Ct as w,
  Ft as x,
  Hn as y,
  ct as z,
};

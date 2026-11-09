/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  Lt as t,
  ft as n,
  l as r,
  ot as i,
  tt as a,
  wt as o,
} from "./libraries.js";
import { f as s, r as c } from "./clanimagemodels.js";
import { J as l, Y as u } from "./partnerevent.js";
import "./modals.js";
import { t as d } from "./throbber.js";
import { n as f } from "./languagepicker.js";
import { _ as p } from "./partnereventshared.module.js";
import { g as m } from "./basicbbcodeparser.js";
import { r as h } from "./loyaltyrewarddefs.js";
import { c as g } from "./youtubeplayer.js";
import { i as _, t as ee } from "./presenterpopup.js";
import { t as v } from "./appinfostore.js";
import { n as y } from "./playerstore.js";
import { l as te, n as ne, p as b } from "./clanimageupload.js";
import { l as re, t as x } from "./emoticonbutton.js";
import "./reorderablelist.module.js";
import { n as ie } from "./friendsstore.js";
import {
  $n as ae,
  Ar as oe,
  Au as S,
  Dn as se,
  Dr as ce,
  En as C,
  Fu as le,
  Gb as w,
  Hb as T,
  Iy as E,
  Jy as ue,
  Mb as D,
  Mn as O,
  Rr as k,
  Rx as A,
  Sc as j,
  Uy as M,
  Wn as de,
  Zn as fe,
  ax as pe,
  jn as N,
  kn as me,
  mx as he,
  nr as P,
  nt as ge,
  nx as _e,
  or as ve,
  qb as ye,
  qx as be,
  rx as F,
  tr as xe,
  ur as Se,
  ut as Ce,
  vr as we,
} from "./main.js";
var I = e(t()),
  L = e(a()),
  Te = `_0ayR5P4snOQ-`,
  Ee = `CTubiAgon4c-`,
  De = `_4Y5F2iyNmd4-`,
  Oe = `_7zJSazZLpTI-`,
  ke = `xFTxNDMXZvw-`,
  R = n(),
  z = class extends I.Component {
    m_strLastSearch;
    m_rgCurrentMatches = [];
    m_mapMatchByKey = new Map();
    containerRef = I.createRef();
    constructor(e) {
      super(e),
        (this.m_hMobxSearchDisposer = o(async () => {
          await this.UpdateSearchResults(this.props.strSearch),
            this.forceUpdate();
        })),
        (this.state = { selectedIndex: void 0 });
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
          else return this.props.onSuggestionSelected(this.props.strSearch), !1;
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
      t > this.getMaxMatches() && (t = this.getMaxMatches()),
        (e %= t),
        e < 0 && (e += t),
        this.setState({ selectedIndex: e });
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
      (this.m_rgCurrentMatches = await this.performSearch(e)),
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
            this.setState({ selectedIndex: void 0 });
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
            (0, R.jsx)(
              B,
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
      return (0, R.jsx)(`div`, {
        className: Te,
        ref: this.containerRef,
        children: (0, R.jsxs)(`div`, {
          className: Ee,
          tabIndex: 0,
          onKeyDown: this.OnKeyDown,
          children: [this.renderHeader(), e],
        }),
      });
    }
  };
D([A], z.prototype, `OnKeyDown`, null),
  D([A], z.prototype, `OnClickSuggestion`, null),
  D([A], z.prototype, `OnMouseOverSuggestion`, null),
  D([A], z.prototype, `BindSelectedElement`, null);
var B = class extends I.PureComponent {
  containerRef = I.createRef();
  OnMouseOver(e) {
    this.props.fnOnMouseOver(this.props.matchKey);
  }
  OnClick(e) {
    this.props.fnOnClick(this.props.matchKey);
  }
  render() {
    return (0, R.jsx)(`div`, {
      className: j(De, Oe, this.props.bIsSelected ? ke : ``),
      onMouseEnter: this.OnMouseOver,
      onClick: this.OnClick,
      ref: this.containerRef,
      children: this.props.children,
    });
  }
};
D([A], B.prototype, `OnMouseOver`, null), D([A], B.prototype, `OnClick`, null);
var Ae = `ARyrUoFBJKQ-`,
  je = class extends z {
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
      return (0, R.jsxs)(`div`, {
        className: j(void 0, e.recent ? `Recent` : ``),
        children: [
          (0, R.jsxs)(`div`, {
            className: Ae,
            children: [
              (0, R.jsx)(_, { emoticon: e.name }),
              e.new && (0, R.jsx)(re, {}),
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
  Me = `hgRTS5e4dgI-`,
  Ne = class extends z {
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
      return (0, R.jsxs)(
        `div`,
        {
          className: j(void 0),
          children: [
            (0, R.jsx)(`div`, { className: Me, children: e.name }),
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
      return (0, R.jsx)(
        `div`,
        { className: j(Oe, void 0), children: M(`#Bbcode_No_Match`) },
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
      super(e),
        (this.state = {
          mentionSearch: void 0,
          activeSuggestSearchType: void 0,
        });
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
        (e += t), (r >= i.length || i[r] != ` `) && (e += ` `);
        let o = e.length;
        (e += i.substr(r)),
          (n.value = e),
          (n.selectionStart = n.selectionEnd = o),
          this.props.fnSetText(e),
          this.FocusTextInput();
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
      (this.m_iMentionSearchStartOffset = void 0),
        this.state.activeSuggestSearchType &&
          this.setState({
            activeSuggestSearchType: void 0,
            mentionSearch: void 0,
          });
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
      (this.m_iMentionSearchStartOffset = r),
        this.setState({ activeSuggestSearchType: i, mentionSearch: a });
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
            (i = (0, R.jsx)(je, {
              emoticonStore: e,
              strSearch: this.state.mentionSearch,
              nMinimumSearchLengthBeforeAutoSelection: 2,
              onSuggestionSelected: this.OnEmoticonSuggestionSelected,
              ref: this.BindMentionDialog,
            }));
          break;
        case `BBCode`:
          i = (0, R.jsx)(Ne, {
            supportBBCodes: t,
            strSearch: this.state.mentionSearch,
            nMinimumSearchLengthBeforeAutoSelection: 2,
            onSuggestionSelected: this.OnBBCodeSuggestionSelected,
            ref: this.BindMentionDialog,
          });
      }
      return (0, R.jsxs)(I.Fragment, {
        children: [
          i,
          (0, R.jsx)(`textarea`, {
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
D([A], V.prototype, `BindMentionDialog`, null),
  D([A], V.prototype, `OnKeyDown`, null),
  D([A], V.prototype, `OnFocus`, null),
  D([A], V.prototype, `OnKeyPress`, null),
  D([A], V.prototype, `OnClick`, null),
  D([A], V.prototype, `OnEmoticonSuggestionSelected`, null),
  D([A], V.prototype, `OnBBCodeSuggestionSelected`, null),
  D([A], V.prototype, `FocusTextInput`, null),
  D([A], V.prototype, `GetTextAreaRef`, null),
  D([A], V.prototype, `GetTextAreaCurrent`, null);
var Pe = `nIUbxO5p4A8-`,
  Fe = `_0VP7ctGOadU-`,
  Ie = `siVkCB-BeMc-`,
  Le = `wrPMc1ko4O0-`,
  Re = `sa1-P2tbrtc-`,
  ze = `_3QeIZHH9LCM-`,
  Be = `REbb7We6KRY-`,
  Ve = `DgynSAJA0e0-`,
  He = `WJB2hOx55Ic-`,
  H = `Px4wClOhj8g-`,
  Ue = `hluYSsWwKs8-`,
  We = `AALKXsdrG-s-`,
  Ge = `LR7E8btmRt0-`,
  Ke = `Mc05zduSJmM-`,
  qe = `_7IgH0aB0drE-`,
  Je = `ZLkF2UoZt5M-`,
  Ye = `-KEQzYsMyLo-`,
  U = `quOQjx4gLwQ-`,
  Xe = r((e) => {
    let {
        clanSteamID: t,
        inputClanImage: n,
        nWidth: r,
        nHeight: i,
        setImage: a,
      } = e,
      o = I.useMemo(() => ({ width: r, height: i }), [r, i]),
      [s, l] = I.useState(void 0),
      [u, p] = I.useState(!!n),
      [m, h] = I.useState(!1),
      g = ne(t, `dummy`),
      _ = I.useCallback(
        async (e) => {
          if (
            (g.ClearImages(), e && (p(!0), await g.AddExistingClanImage(e, 0)))
          ) {
            l(e);
            let t = g.GetUploadImages()[0].IsValidAssetType(o);
            t.error.length != 0 ||
              t.needsCrop ||
              (n && n.image_hash == e.image_hash) ||
              a(e);
          }
          p(!1);
        },
        [g, n, a, o],
      );
    I.useEffect(() => {
      _(n);
    }, [_, n]);
    let ee = (e) => {
        let t = new E(_e.CLANSTEAMID);
        O(
          (0, R.jsx)(f, { clanSteamID: t, fnImageSelectCallBack: (e) => _(e) }),
          S(e) ?? window,
        );
      },
      v = (e) => {
        let t = S(e) ?? window,
          n = g.GetUploadImages()[0];
        O(
          (0, R.jsx)(te, {
            ownerWin: t,
            uploadFile: n,
            forceResolution: { width: r, height: i },
            fileType: 3,
          }),
          t,
        );
      },
      y = async () => {
        h(!0);
        try {
          let e = await g.UploadAllImages(o),
            n = Object.values(e);
          if (n && n.length > 0) {
            be(
              n.length == 1,
              `ClanImagePickForCertainSize expected size 1, got ` + n.length,
            );
            let e = n[0].bSuccess ? n[0].uploadResult : void 0,
              r = c.GetHashAndExt(e ?? null),
              i = c.GetThumbHashAndExt(e ?? null);
            if (e?.image_hash && e.file_type !== void 0 && r && i) {
              let n = c.GenerateURLFromHashAndExt(t, r),
                o = c.GenerateURLFromHashAndExt(t, i),
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
              l(s), a(s);
            }
          }
        } finally {
          h(!1);
        }
      },
      b = ``,
      re = !1,
      x;
    if (g && g.GetFilesToUpload().length > 0) {
      x = g.GetUploadImages()[0];
      let e = x.IsValidAssetType(o);
      (b = e.error), (re = e.needsCrop);
    }
    return (0, R.jsxs)(R.Fragment, {
      children: [
        u
          ? (0, R.jsx)(d, { size: `medium`, string: M(`#Loading`) })
          : s &&
            (0, R.jsx)(`div`, {
              className: `_9Z5REaLWRq4-`,
              style: {
                backgroundImage: `url( '${x ? x.dataUrl : s.url}' )`,
                height: `${i}px`,
                width: `${r}px`,
              },
            }),
        !!b && (0, R.jsx)(`p`, { children: b }),
        re && (0, R.jsx)(P, { onClick: v, children: M(`#BBCode_ResizeImage`) }),
        x &&
          x.bCropped &&
          (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(`div`, {
                children: M(`#ClanImagePickAndResize_UploadStatus`, x.status),
              }),
              m
                ? (0, R.jsx)(d, { string: M(`#Uploading`), size: `small` })
                : (0, R.jsx)(P, {
                    onClick: y,
                    children: M(`#ClanImagePickAndResize_UploadImage`),
                  }),
            ],
          }),
        (0, R.jsx)(P, {
          onClick: ee,
          children: M(`#BBCode_ChooseImage`, r, i),
        }),
      ],
    });
  }),
  W,
  G = class extends I.Component {
    static {
      W = this;
    }
    m_cancelSignal = L.default.CancelToken.source();
    static s_formattingHelp = new Map();
    constructor(e) {
      super(e),
        (this.state = {
          formattingHelp: {
            __html: W.s_formattingHelp.get(e.formatType) ?? ``,
          },
        });
    }
    componentDidMount() {
      this.AjaxGetFormattingHelp().catch((e) => {
        this.setState(le(e));
      });
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`FormattingHelpWidget component unmounted`);
    }
    static GetHelpURL(e, t) {
      return (
        F.COMMUNITY_BASE_URL +
        `comment/` +
        e +
        `/formattinghelp` +
        (t ? `?ajax=1` : ``)
      );
    }
    async AjaxGetFormattingHelp() {
      if (this.state.formattingHelp.__html == ``) {
        let e = { sessionid: ye() },
          t;
        (t = await L.default.get(W.GetHelpURL(this.props.formatType, !0), {
          params: e,
          cancelToken: this.m_cancelSignal.token,
        })),
          W.s_formattingHelp.set(this.props.formatType, t.data),
          this.setState({ formattingHelp: { __html: t.data } });
      }
    }
    render() {
      return this.state.strErrorMsg
        ? (0, R.jsxs)(`div`, {
            children: [
              this.state.strErrorMsg,
              (0, R.jsx)(`br`, {}),
              this.state.errorCode,
            ],
          })
        : this.state.formattingHelp.__html == ``
          ? (0, R.jsx)(d, {})
          : (0, R.jsx)(C, {
              strTitle: M(`#EventEditor_FormattingHelp_GetHelpLink`),
              strDescription: ``,
              closeModal: this.props.closeModal,
              onOK: this.props.closeModal,
              onCancel: this.props.closeModal,
              bAlertDialog: !0,
              className: `ModernBBStyles`,
              children: (0, R.jsx)(`div`, {
                dangerouslySetInnerHTML: this.state.formattingHelp,
              }),
            });
    }
  };
G = W = D([r], G);
var Ze,
  K = class extends I.Component {
    descAutoTextAreaRef = I.createRef();
    constructor(e) {
      super(e), (this.state = { bShowDragTarget: !1 });
    }
    componentDidMount() {
      b.AddClanImageDragListener(this.ClanImageDragListener);
    }
    componentWillUnmount() {
      b.RemoveClanImageDragListener(this.ClanImageDragListener);
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
          for (let e of [c.GetBaseURL(), c.GetBaseURLV2()])
            if (t.startsWith(e)) {
              let n = `[img]` + s + `/` + t.substr(e.length) + `[/img]`;
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
      return (0, R.jsxs)(I.Fragment, {
        children: [
          (0, R.jsx)(J, {
            pathToImages:
              F.COMMUNITY_CDN_URL + `public/images/sharedfiles/guides/`,
            fnTextareaRef: this.GetTextAreaRef,
            emoticonStore: this.props.emoticonStore,
            supportBBCodes: this.props.limitBBCode ? this.props.limitBBCode : l,
            bSupportHTMLImport: this.props.bSupportHTMLImport,
            showFormatHelp: this.props.showFormatHelp,
            bEmbeddedInDialog: this.props.bEmbeddedInDialog,
            clanSteamID: this.props.clanSteamID,
          }),
          (0, R.jsx)(`div`, {
            className: j(
              Fe,
              U,
              this.state.bShowDragTarget ? Pe : ``,
              this.props.className ? this.props.className : ``,
            ),
            children: (0, R.jsx)(V, {
              cols: 90,
              rows: this.props.nOverridesRows || 22,
              maxLength: 64e3,
              className: j(
                Le,
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
                : l,
            }),
          }),
        ],
      });
    }
  };
D([A], K.prototype, `ClanImageDragListener`, null),
  D([A], K.prototype, `onFocus`, null),
  D([A], K.prototype, `OnTextAreaDropListener`, null),
  D([A], K.prototype, `GetTextAreaRef`, null),
  (K = D([r], K));
var q = class e {
    static BIsFireFox() {
      return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
        navigator.userAgent,
      );
    }
    static replaceSelection(t, n) {
      if (!t) return;
      let r = t.selectionStart;
      t.focus(),
        e.InsertTextAtSelect(n, t),
        t.setSelectionRange(r, r + n.length);
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
      (a =
        i.indexOf(t) == 0 && i.lastIndexOf(n) == i.length - n.length
          ? i.substr(t.length, i.length - t.length - n.length)
          : t + i + n),
        e.replaceSelection(r, a);
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
        t.dispatchEvent(i), (t.selectionStart = t.selectionEnd = n + e.length);
      }
      t.focus();
    }
  },
  J = class extends I.Component {
    m_linkPopupRef = I.createRef();
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
            .map((e) => (e.match(/\*+\s/) ? `[*]` : `[*] `) + e)
            .join(`
`) +
          `
` +
          r;
        q.replaceSelection(t, e);
      }
    }
    OnAddLink(e) {
      let t = this.props.fnTextareaRef();
      t && N((0, R.jsx)(Z, { textareaRef: t }), S(e) ?? window);
    }
    ShowHelpDialog(e) {
      this.props.showFormatHelp &&
        N(
          (0, R.jsx)(G, { formatType: this.props.showFormatHelp }),
          S(e) ?? window,
        );
    }
    OnConvertHTMLToBBCodeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let n = S(e) ?? window;
      N((0, R.jsx)($, { ownerWindow: n, textareaRef: t }), n);
    }
    OnOpenYoutubeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let n = F.IMG_URL + `applications/community/`;
      N((0, R.jsx)(X, { textareaRef: t, pathToImages: n }), S(e) ?? window);
    }
    OnOpenImageDialog(e) {
      let t = this.props.fnTextareaRef();
      t && N((0, R.jsx)(Q, { textareaRef: t }), S(e) ?? window);
    }
    OnOpenSpeakerDialog(e) {
      let t = this.props.fnTextareaRef(),
        n = this.props.clanSteamID;
      t &&
        n &&
        O((0, R.jsx)(Qe, { clanSteamID: n, textareaRef: t }), S(e) ?? window);
    }
    OnEmoticonSelected(e, t = !1) {
      let n = `\u02D0${e}\u02D0`;
      q.replaceSelection(this.props.fnTextareaRef()?.current, n),
        this.props.fnTextareaRef()?.current?.focus();
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
            ? (0, R.jsx)(`span`, {
                className: j(`ttip`, void 0),
                children: (0, R.jsx)(k, {
                  toolTipContent: M(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: (0, R.jsxs)(`a`, {
                    href: G.GetHelpURL(e, !1),
                    target: F.IN_CLIENT ? void 0 : `_blank`,
                    children: [
                      (0, R.jsx)(`img`, { src: r + `/action_help.png` }),
                      ` `,
                      M(`#EventEditor_FormattingHelp_GetHelpLink`),
                    ],
                  }),
                }),
              })
            : (0, R.jsx)(`span`, {
                onClick: this.ShowHelpDialog,
                className: j(`ttip`, void 0),
                children: (0, R.jsxs)(k, {
                  toolTipContent: M(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: [
                    (0, R.jsx)(`img`, { src: r + `/action_help.png` }),
                    ` `,
                    M(`#EventEditor_FormattingHelp_GetHelpLink`),
                  ],
                }),
              })),
        (0, R.jsxs)(`div`, {
          className: Ve,
          children: [
            this.BSupports(`b`) &&
              (0, R.jsx)(Y, {
                onClick: this.onBold,
                tooltip: M(`#Editor_Bold`),
                imgURL: this.props.pathToImages + `/format_bold.png`,
              }),
            this.BSupports(`u`) &&
              (0, R.jsx)(Y, {
                onClick: this.onUnderline,
                tooltip: M(`#Editor_Underline`),
                imgURL: this.props.pathToImages + `/format_underline.png`,
              }),
            this.BSupports(`i`) &&
              (0, R.jsx)(Y, {
                onClick: this.onItalics,
                tooltip: M(`#Editor_Italics`),
                imgURL: this.props.pathToImages + `/format_italic.png`,
              }),
            this.BSupports(`strike`) &&
              (0, R.jsx)(Y, {
                onClick: this.onStrikeThrough,
                tooltip: M(`#Editor_StrikeThrough`),
                imgURL: this.props.pathToImages + `/format_strike.png`,
              }),
            !(!this.BSupports(`url`) || t) &&
              (0, R.jsx)(Y, {
                onClick: this.OnAddLink,
                tooltip: M(`#Editor_Link`),
                imgURL: this.props.pathToImages + `/format_link.png`,
              }),
            this.BSupports(`list`) &&
              (0, R.jsx)(Y, {
                onClick: this.onUnorderedList,
                tooltip: M(`#Editor_Unordered`),
                imgURL: this.props.pathToImages + `/format_bullet.png`,
              }),
            this.BSupports(`olist`) &&
              (0, R.jsx)(Y, {
                onClick: this.onOrderedList,
                tooltip: M(`#Editor_Ordered`),
                imgURL: this.props.pathToImages + `/format_numbered.png`,
              }),
            this.BSupports(`h1`) &&
              (0, R.jsx)(Y, {
                onClick: this.onHeader,
                tooltip: M(`#Editor_Header`),
                imgURL: this.props.pathToImages + `/format_header1.png`,
              }),
            this.BSupports(`h2`) &&
              (0, R.jsx)(Y, {
                onClick: this.onHeader2,
                tooltip: M(`#Editor_Header2`),
                imgURL: this.props.pathToImages + `/format_header2.png`,
              }),
            this.BSupports(`h3`) &&
              (0, R.jsx)(Y, {
                onClick: this.onHeader3,
                tooltip: M(`#Editor_Header3`),
                imgURL: this.props.pathToImages + `/format_header3.png`,
              }),
            this.BSupports(`previewyoutube`) &&
              (0, R.jsx)(Y, {
                onClick: this.OnOpenYoutubeDialog,
                tooltip: M(`#EventEditor_InsertYouTube`),
                imgURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
              }),
            (0, R.jsx)(`span`, {
              className: `ttip`,
              children:
                this.props.emoticonStore &&
                (0, R.jsx)(k, {
                  toolTipContent: M(`#Editor_Emoticon`),
                  children: (0, R.jsx)(x, {
                    title: ` `,
                    className: j(`_5LFNlKLTFJM-`),
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
              (0, R.jsx)(Y, {
                onClick: this.OnOpenImageDialog,
                tooltip: M(`#EventEditor_InsertImage`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !!(
              pe.is_support &&
              this.props.clanSteamID &&
              this.BSupports(`speaker`)
            ) &&
              (0, R.jsx)(Y, {
                onClick: this.OnOpenSpeakerDialog,
                tooltip: M(`#EventEditor_AddSpeaker`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !(!n || t) &&
              (0, R.jsx)(Y, {
                onClick: this.OnConvertHTMLToBBCodeDialog,
                className: void 0,
                tooltip: M(`#EventEditor_ImportFromHTML_ttip`),
                children: M(`#EventEditor_ImportHTML`),
              }),
            i,
          ],
        })
      );
    }
  };
D([A], J.prototype, `onBold`, null),
  D([A], J.prototype, `onItalics`, null),
  D([A], J.prototype, `onUnderline`, null),
  D([A], J.prototype, `onStrikeThrough`, null),
  D([A], J.prototype, `onHeader`, null),
  D([A], J.prototype, `onHeader2`, null),
  D([A], J.prototype, `onHeader3`, null),
  D([A], J.prototype, `onUnorderedList`, null),
  D([A], J.prototype, `onOrderedList`, null),
  D([A], J.prototype, `OnAddLink`, null),
  D([A], J.prototype, `ShowHelpDialog`, null),
  D([A], J.prototype, `OnConvertHTMLToBBCodeDialog`, null),
  D([A], J.prototype, `OnOpenYoutubeDialog`, null),
  D([A], J.prototype, `OnOpenImageDialog`, null),
  D([A], J.prototype, `OnOpenSpeakerDialog`, null),
  D([A], J.prototype, `OnEmoticonSelected`, null),
  (J = D([r], J));
function Y(e) {
  return (0, R.jsx)(`span`, {
    onClick: e.onClick,
    className: e.className,
    children: (0, R.jsxs)(k, {
      toolTipContent: e.tooltip,
      className: `ttip`,
      children: [
        !!e.imgURL && (0, R.jsx)(`img`, { src: e.imgURL }),
        e.children,
      ],
    }),
  });
}
var X = class extends I.Component {
  state = { youtubeInput: ``, alignment: m.left };
  OnYoutubeInsertLink() {
    let e = this.state.youtubeInput && g(this.state.youtubeInput);
    if (!e) alert(M(`#EventEditor_InsertYouTube_NoURL`));
    else {
      if (this.state.alignment == m.summary) {
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
      this.setState({ youtubeInput: ``, alignment: m.left });
    }
  }
  OnUrlChange(e) {
    this.state.youtubeInput != e.target.value &&
      this.setState({ youtubeInput: e.target.value });
  }
  OnLeftSelected() {
    this.setState({ alignment: m.left });
  }
  OnRightSelected() {
    this.setState({ alignment: m.right });
  }
  OnFullSelected() {
    this.setState({ alignment: m.full });
  }
  OnSummarySelected() {
    this.setState({ alignment: m.summary });
  }
  OnOuterDivClickPassDown(e) {}
  render() {
    return (0, R.jsx)(C, {
      strTitle: M(`#EventEditor_InsertYouTube`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnYoutubeInsertLink,
      strOKButtonText: M(`#EventEditor_InsertYouTube`),
      className: U,
      children: (0, R.jsxs)(`div`, {
        className: He,
        children: [
          (0, R.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, R.jsxs)(`label`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: M(`#EventEditor_InsertYouTube_URL`),
                }),
                (0, R.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, R.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    ref: (e) => {
                      e?.focus();
                    },
                    type: `text`,
                    value: this.state.youtubeInput,
                    onChange: this.OnUrlChange,
                    placeholder: M(`#EventEditor_InsertYouTube_Placholder`),
                  }),
                }),
              ],
            }),
          }),
          (0, R.jsxs)(`div`, {
            className: `DialogInputLabelGroup`,
            children: [
              (0, R.jsx)(`div`, {
                className: `DialogLabel`,
                children: M(`#EventEditor_InsertYouTube_Position`),
              }),
              (0, R.jsxs)(`div`, {
                className: H,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, R.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: m.left,
                    value: m.left,
                    checked: this.state.alignment == m.left,
                    onChange: this.OnLeftSelected,
                  }),
                  (0, R.jsx)(`label`, {
                    htmlFor: m.left,
                    children: (0, R.jsx)(`span`, {
                      children: M(`#EventEditor_InsertYouTube_Left`),
                    }),
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: H,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, R.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: m.right,
                    value: m.right,
                    checked: this.state.alignment == m.right,
                    onChange: this.OnRightSelected,
                  }),
                  (0, R.jsx)(`label`, {
                    htmlFor: m.right,
                    children: (0, R.jsx)(`span`, {
                      children: M(`#EventEditor_InsertYouTube_Right`),
                    }),
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: H,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, R.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: m.full,
                    value: m.full,
                    checked: this.state.alignment == m.full,
                    onChange: this.OnFullSelected,
                  }),
                  (0, R.jsx)(`label`, {
                    htmlFor: m.full,
                    children: (0, R.jsx)(`span`, {
                      children: M(`#EventEditor_InsertYouTube_Full`),
                    }),
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: H,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, R.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: m.summary,
                    value: m.summary,
                    checked: this.state.alignment == m.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  (0, R.jsx)(`label`, {
                    htmlFor: m.summary,
                    children: (0, R.jsx)(`span`, {
                      children: M(`#EventEditor_InsertYouTube_Summary`),
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
D([A], X.prototype, `OnYoutubeInsertLink`, null),
  D([A], X.prototype, `OnUrlChange`, null),
  D([A], X.prototype, `OnLeftSelected`, null),
  D([A], X.prototype, `OnRightSelected`, null),
  D([A], X.prototype, `OnFullSelected`, null),
  D([A], X.prototype, `OnSummarySelected`, null),
  D([A], X.prototype, `OnOuterDivClickPassDown`, null),
  (X = D([r], X));
var Z = class extends I.Component {
  static {
    Ze = this;
  }
  state = { textToDisplay: ``, strURL: `` };
  static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
  LoadFromTextArea() {
    let { textareaRef: e } = this.props;
    if (e && e.current) {
      let t = q.getSelectedString(e.current),
        n = Ze.m_regExp.exec(t);
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
    return (0, R.jsx)(C, {
      strTitle: M(`#Editor_Link`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onOK: this.onInsertLink,
      onCancel: this.props.closeModal,
      strOKButtonText: M(`#EventEditor_InsertLinkURL`),
      className: U,
      children: (0, R.jsxs)(`div`, {
        className: Ie,
        children: [
          (0, R.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, R.jsxs)(`label`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: M(`#EventEditor_LinkDescription`),
                }),
                (0, R.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, R.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkTitleUpdate,
                    value: this.state.textToDisplay,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
          (0, R.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, R.jsxs)(`label`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: M(`#EventEditor_LinkURL`),
                }),
                (0, R.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, R.jsx)(`input`, {
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
D([A], Z.prototype, `onLinkTitleUpdate`, null),
  D([A], Z.prototype, `onLinkURLUpdate`, null),
  D([A], Z.prototype, `onInsertLink`, null),
  (Z = Ze = D([r], Z));
var Q = class extends I.Component {
  refFirstInput = I.createRef();
  state = { imgURL: ``, anchorURL: `` };
  componentDidMount() {
    this.refFirstInput.current?.focus();
  }
  OnImageInsert() {
    let { anchorURL: e, imgURL: t } = this.state,
      n = ``,
      r = ``;
    e && e.length > 0 && ((n += `[url=` + e + `]`), (r = `[/url]` + r)),
      (n += `[img]` + t),
      (r = `[/img]` + r),
      q.wrapBBCode(n, r, this.props.textareaRef.current);
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
    return (0, R.jsx)(C, {
      strTitle: M(`#EventEditor_InsertImage_Title`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnImageInsert,
      strOKButtonText: M(`#EventEditor_InsertImage_Title`),
      className: U,
      children: (0, R.jsxs)(`div`, {
        className: Ie,
        children: [
          (0, R.jsx)(`p`, { children: M(`#EventEditor_InsertImage_Desc`) }),
          (0, R.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, R.jsxs)(`label`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: M(`#EventEditor_InsertImage_URL`),
                }),
                (0, R.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, R.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: e,
                    onChange: this.OnImageURLChange,
                    placeholder: M(`#EventEditor_InsertImage_Placeholder`),
                    ref: this.refFirstInput,
                  }),
                }),
              ],
            }),
          }),
          (0, R.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, R.jsxs)(`label`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: M(`#EventEditor_InsertImage_Anchor`),
                }),
                (0, R.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, R.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: t,
                    onChange: this.OnAnchorURLChange,
                    placeholder: M(`#EventEditor_InsertImage_Placeholder`),
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
D([A], Q.prototype, `OnImageInsert`, null),
  D([A], Q.prototype, `OnImageURLChange`, null),
  D([A], Q.prototype, `OnAnchorURLChange`, null),
  (Q = D([r], Q));
var Qe = (e) => {
  let [t, n] = I.useState(``),
    [r, i] = I.useState(``),
    [a, o] = I.useState(``),
    [l, u] = I.useState(``),
    [f, p] = I.useState(void 0),
    [m, h] = I.useState(void 0),
    { data: g } = ie(),
    { isLoading: _, data: v } = y(m?.GetAccountID()),
    te = () => {
      let n = `[speaker name="${t.trim()}"`;
      if (
        (r.trim().length > 0 && (n += ` title="${r}"`),
        a.trim().length > 0 && (n += ` company="${a}"`),
        f)
      ) {
        let e = s + `/` + f.clanAccountID + `/` + c.GetHashAndExt(f);
        n += ` photo="${e}"`;
      }
      m && (n += ` steamid="${m.ConvertTo64BitString()}"`),
        (n += `]${l}[/speaker]`),
        q.replaceSelection(e.textareaRef.current, n);
    },
    ne = t.trim().length != 0 && l.trim().length != 0;
  return (0, R.jsx)(C, {
    strTitle: M(`#EventEditor_AddSpeaker`),
    strDescription: M(`#EventEditor_AddSpeaker_Desc`),
    closeModal: e.closeModal,
    onCancel: e.closeModal,
    bOKDisabled: !ne,
    onOK: te,
    className: U,
    children: (0, R.jsxs)(`div`, {
      className: We,
      children: [
        (0, R.jsx)(fe, {
          type: `text`,
          label: M(`#EventEditor_AddSpeaker_Name`),
          value: t,
          onChange: (e) => n(e.target.value),
          focusOnMount: !0,
        }),
        (0, R.jsxs)(`div`, {
          className: Ge,
          children: [
            (0, R.jsx)(fe, {
              type: `text`,
              label: M(`#EventEditor_AddSpeaker_Title`),
              value: r,
              onChange: (e) => i(e.target.value),
            }),
            (0, R.jsx)(fe, {
              type: `text`,
              label: M(`#EventEditor_AddSpeaker_Company`),
              value: a,
              onChange: (e) => o(e.target.value),
            }),
          ],
        }),
        (0, R.jsx)(k, {
          toolTipContent: M(`#EventEditor_AssociateSteamAccount_ttip`),
          children: (0, R.jsxs)(`div`, {
            className: `DialogLabel`,
            children: [M(`#EventEditor_AssociateSteamAccount`), ` (?)`],
          }),
        }),
        (0, R.jsxs)(`div`, {
          children: [
            _ && (0, R.jsx)(d, { string: M(`#Loading`), size: `small` }),
            m &&
              v &&
              (0, R.jsxs)(`a`, {
                href:
                  F.COMMUNITY_BASE_URL + `profiles/` + m.ConvertTo64BitString(),
                target: `_blank`,
                children: [
                  v
                    ? (0, R.jsx)(`img`, {
                        style: { marginRight: `8px` },
                        src: v.avatar_url,
                      })
                    : null,
                  v ? v.m_strPlayerName : null,
                ],
              }),
            (0, R.jsxs)(`div`, {
              className: Ke,
              children: [
                (0, R.jsx)(P, {
                  onClick: () => h(new E(pe.steamid)),
                  children: M(`#EventEditor_SteamAccount_addme`),
                }),
                (0, R.jsx)(P, {
                  onClick: (e) =>
                    ce((0, R.jsx)($e, { friends: g ?? [], setSteamID: h }), e),
                  children: M(`#EventEditor_SteamAccount_addfriend`),
                }),
                (0, R.jsx)(P, {
                  onClick: () => h(void 0),
                  children: M(`#EventEditor_SteamAccount_clear`),
                }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: qe,
          children: [
            (0, R.jsx)(`div`, {
              className: `DialogLabel`,
              children: M(`#EventEditor_ChoosePhoto`),
            }),
            (0, R.jsx)(Xe, {
              clanSteamID: e.clanSteamID,
              inputClanImage: f,
              setImage: p,
              nWidth: 184,
              nHeight: 184,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: Je,
          children: [
            (0, R.jsx)(`div`, {
              className: `DialogLabel`,
              children: M(`#EventEditor_AddSpeaker_About`),
            }),
            (0, R.jsx)(de, {
              value: l,
              onChange: (e) => u(e.target.value),
              rows: 8,
              cols: 80,
              nMinHeight: 40,
              placeholder: M(`#EventEditor_AddSpeaker_About_Placeholder`),
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: Ye,
          children: [
            (0, R.jsx)(`div`, {
              className: `DialogLabel`,
              children: M(`#Button_Preview`),
            }),
            (0, R.jsx)(ee, {
              company: a,
              name: t,
              title: r,
              bioString: l,
              photo: f ? f.url : void 0,
            }),
          ],
        }),
      ],
    }),
  });
};
function $e(e) {
  let { friends: t, setSteamID: n } = e;
  return (0, R.jsx)(`div`, {
    className: Ue,
    children: t.map((e) => (0, R.jsx)(et, { steamid: e, setSteamID: n }, e)),
  });
}
function et(e) {
  let { steamid: t, setSteamID: n } = e,
    { data: r } = y(t);
  return (0, R.jsx)(oe, {
    onSelected: () => n(new E(t)),
    children: (0, R.jsxs)(`div`, {
      style: { display: `flex`, alignItems: `center` },
      children: [
        r &&
          (0, R.jsx)(`img`, { className: `SZCLgazwykY-`, src: r.avatar_url }),
        r?.m_strPlayerName,
      ],
    }),
  });
}
var $ = class extends I.Component {
  m_isMounted = !1;
  m_bAppend = !1;
  constructor(e) {
    super(e), (this.state = { bPreserveNewLines: !1, strHTMLData: `` });
  }
  componentDidMount() {
    this.m_isMounted = !0;
  }
  componentWillUnmount() {
    this.m_isMounted = !1;
  }
  OnConvertAndOverriteHTML() {
    (this.m_bAppend = !1), this.ConvertBBCode();
  }
  OnConvertAndAppendHTML() {
    (this.m_bAppend = !0), this.ConvertBBCode();
  }
  async ConvertHtmlToBBCode(e, t) {
    let n = new URLSearchParams();
    return (
      n.append(`content`, e),
      n.append(`preserve_newlines`, t ? `1` : `0`),
      (
        await L.default.post(
          F.COMMUNITY_BASE_URL + `/actions/ConvertHTMLToBBCode`,
          n,
        )
      ).data.content
    );
  }
  ConvertBBCode() {
    this.setState({ bConverting: !0 }),
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
          O(
            (0, R.jsx)(se, {
              strTitle: M(`#EventEditor_ConvertHTML_Error`),
              strDescription: M(
                `#EventEditor_ConvertHTML_Error_Desc`,
                e.response && e.response.data ? e.response.data.msg : e,
              ),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
            }),
            this.props.ownerWindow,
            { strTitle: M(`#EventEditor_ConvertHTML_Error`) },
          );
        });
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
      ? (0, R.jsx)(C, {
          strTitle: M(`#EventEditor_ImportFromHTML`),
          strDescription: M(`#EventEditor_ImportFromHTML_ConversionInProgress`),
          closeModal: e,
          bAlertDialog: !0,
          onOK: e,
          onCancel: e,
          children: (0, R.jsx)(d, {}),
        })
      : this.state.bFinishedConverting
        ? (0, R.jsx)(C, {
            strTitle: M(`#EventEditor_ImportFromHTML`),
            strDescription: M(`#EventEditor_ImportFromHTML_ConvertFinished`),
            closeModal: e,
            bAlertDialog: !0,
            onOK: e,
            onCancel: e,
          })
        : (0, R.jsx)(me, {
            title: M(`#EventEditor_ImportFromHTML`),
            onOK: this.OnConvertAndOverriteHTML,
            onCancel: e,
            className: U,
            children: (0, R.jsxs)(ae, {
              children: [
                (0, R.jsx)(xe, {
                  children: (0, R.jsxs)(`div`, {
                    className: j(p, Re),
                    children: [
                      (0, R.jsx)(`div`, {
                        className: p,
                        children: ue(
                          `#EventEditor_ImportFromHTML_ConvertDescription`,
                          (0, R.jsx)(`a`, {
                            target: F.IN_CLIENT ? void 0 : `_blank`,
                            href: `https://partner.steamgames.com/doc/marketing/event_tools/import`,
                            children: M(
                              `#EventEditor_ImportFromHTML_ConvertLearn`,
                            ),
                          }),
                        ),
                      }),
                      (0, R.jsx)(`textarea`, {
                        value: this.state.strHTMLData,
                        placeholder: M(
                          `#EventEditor_ImportFromHTML_Instruction`,
                        ),
                        className: ze,
                        onChange: this.OnTextAreaChange,
                        ref: (e) => {
                          e?.focus();
                        },
                      }),
                      (0, R.jsxs)(`div`, {
                        className: Be,
                        children: [
                          (0, R.jsx)(`input`, {
                            id: `ImportFromHTMLNewLines`,
                            type: `checkbox`,
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          (0, R.jsxs)(`label`, {
                            htmlFor: `ImportFromHTMLNewLines`,
                            children: [
                              M(`#EventEditor_ImportFromHTML_PreserveNewlines`),
                              (0, R.jsx)(we, {
                                tooltip: M(
                                  `#EventEditor_ImportFromHTML_PreserveNewlines_Hint`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, R.jsx)(`div`, {
                        children: M(
                          `#EventEditor_ImportFromHTML_ConvertToBBCode`,
                        ),
                      }),
                    ],
                  }),
                }),
                (0, R.jsx)(ve, {
                  children: (0, R.jsx)(Se, {
                    onCancel: () => e?.(),
                    strOKText: M(`#Button_Overwrite`),
                    onUpdate: this.OnConvertAndAppendHTML,
                    strUpdateText: M(`#Button_Append`),
                  }),
                }),
              ],
            }),
          });
  }
};
D([A], $.prototype, `OnConvertAndOverriteHTML`, null),
  D([A], $.prototype, `OnConvertAndAppendHTML`, null),
  D([A], $.prototype, `OnCheckboxChange`, null),
  D([A], $.prototype, `OnTextAreaChange`, null),
  ($ = D([r], $));
var tt = `j59mI0R4Mls-`,
  nt = `hYzeNZ6Fv5E-`,
  rt = `_7KwGD4ys9So-`,
  it = `rgEtYZWJk28-`;
function at(e, t) {
  return e.trim().length
    ? e +
        `

` +
        t
    : t;
}
async function ot(e, t, n) {
  if (T.IN_STEAMUI) {
    let e = he.Init(ge);
    e.Body().set_appid(t), e.Body().set_status_text(n);
    let r = await Ce.PostStatusToFriends(
      v.CMInterface.GetServiceTransport(),
      e,
    );
    if (r.GetEResult() != 1) throw Error(String(r.GetEResult()));
    return;
  }
  let r = new FormData();
  r.append(`appid`, String(t ?? 0)),
    r.append(`status_text`, n),
    r.append(`sessionid`, ye());
  let i = await fetch(e + `ajaxpostuserstatus`, {
      method: `POST`,
      body: r,
      credentials: `include`,
    }),
    a;
  try {
    a = i.ok ? await i.json() : void 0;
  } catch {
    a = void 0;
  }
  if (a?.success != 1) throw Error(a?.message ?? i.statusText);
}
function st(e) {
  let { appid: t, eventLink: n, emoticonStore: r, closeModal: a } = e,
    { data: o } = y(w.steamid),
    [s, c] = I.useState(``),
    l =
      T.COMMUNITY_BASE_URL +
      `profiles/` +
      E.InitFromAccountID(w.accountid, T.EUNIVERSE).ConvertTo64BitString() +
      `/`,
    f = i({ mutationFn: () => ot(l, t, at(s, n)) });
  return f.isIdle
    ? (0, R.jsx)(C, {
        strDescription: ``,
        strTitle: M(`#Button_Share`),
        onCancel: a,
        onOK: () => f.mutate(),
        strOKButtonText: M(`#Button_Post`),
        children: (0, R.jsxs)(`div`, {
          className: p,
          children: [
            (0, R.jsx)(`div`, {
              children: M(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, R.jsxs)(`div`, {
              className: j(tt, p),
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`img`, {
                      className: nt,
                      src: o?.avatar_url,
                      alt: ``,
                      "data-miniprofile": `s` + w.steamid,
                    }),
                    (0, R.jsx)(`div`, {
                      className: j(p),
                      children: (0, R.jsx)(K, {
                        strPlaceholder: M(
                          `#EventDisplay_Share_OnMyStatus_Placeholder`,
                        ),
                        fnGetCurText: () => s,
                        fnOnTextChange: (e) => c(e.currentTarget.value),
                        fnSetText: c,
                        emoticonStore: r,
                        bSupportHTMLImport: !1,
                        showFormatHelp: `UserStatusPublished`,
                        limitBBCode: u,
                        classNameForTextArea: rt,
                        bEmbeddedInDialog: !0,
                      }),
                    }),
                  ],
                }),
                (0, R.jsx)(`div`, {
                  className: it,
                  children: (0, R.jsx)(h, { text: n }),
                }),
              ],
            }),
          ],
        }),
      })
    : (0, R.jsx)(C, {
        strDescription: ``,
        strTitle: M(`#Button_Share`),
        onCancel: a,
        onOK: a,
        bAlertDialog: !0,
        children: (0, R.jsxs)(`div`, {
          className: p,
          children: [
            (0, R.jsx)(`div`, {
              children: M(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, R.jsxs)(`div`, {
              className: tt,
              children: [
                f.isPending && (0, R.jsx)(d, { position: `center` }),
                f.isSuccess &&
                  (0, R.jsx)(`div`, {
                    children: M(`#EventDisplay_Share_Success`),
                  }),
                f.isError &&
                  (0, R.jsx)(`div`, {
                    children:
                      M(`#EventDisplay_Share_Failure`) +
                      `

` +
                      f.error.message,
                  }),
                f.isSuccess &&
                  (0, R.jsx)(`a`, {
                    href: l + `home`,
                    target: T.IN_CLIENT ? void 0 : `_blank`,
                    rel: `noreferrer`,
                    children: M(`#EventDisplay_Share_OpenActivityFeed`),
                  }),
              ],
            }),
          ],
        }),
      });
}
export { st as t };

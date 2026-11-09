import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _, _ } from "./clanimagemodels.js";
import { _, _ } from "./partnerevent.js";
import "./modals.js";
import { _ } from "./throbber.js";
import { _ } from "./languagepicker.js";
import { _ } from "./partnereventshared.module.js";
import { _ } from "./basicbbcodeparser.js";
import { _ } from "./loyaltyrewarddefs.js";
import { _ } from "./youtubeplayer.js";
import { _, _ } from "./presenterpopup.js";
import { _ } from "./appinfostore.js";
import { _ } from "./playerstore.js";
import { _, _, _ } from "./clanimageupload.js";
import { _, _ } from "./emoticonbutton.js";
import "./reorderablelist.module.js";
import { _ } from "./friendsstore.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = `_0ayR5P4snOQ-`,
  _ = `CTubiAgon4c-`,
  _ = `_4Y5F2iyNmd4-`,
  _ = `_7zJSazZLpTI-`,
  _ = `xFTxNDMXZvw-`,
  _ = _(),
  _ = class extends _.Component {
    m_strLastSearch;
    m_rgCurrentMatches = [];
    m_mapMatchByKey = new Map();
    containerRef = _.createRef();
    constructor(_) {
      (super(_),
        (this.m_hMobxSearchDisposer = _(async () => {
          (await this.UpdateSearchResults(this.props.strSearch),
            this.forceUpdate());
        })),
        (this.state = {
          selectedIndex: void 0,
        }));
    }
    OnKeyDown(_) {
      this.BHandleKeyPress(_.keyCode) && _.preventDefault();
    }
    BHandleKeyPress(_) {
      switch (_) {
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
      let _ = this.containerRef.current,
        _ = _ && _.firstElementChild,
        _ = this.m_rgCurrentMatches.length;
      if ((_ > this.getMaxMatches() && (_ = this.getMaxMatches()), _ && _)) {
        let _ = _.scrollHeight / _,
          _ = _.clientHeight / _;
        return Math.max(1, Math.floor(_));
      }
      return 5;
    }
    ChooseSuggestion(_) {
      this.props.onSuggestionSelected(
        this.props.strSearch,
        _ ? this.getSelection(_) : void 0,
      );
    }
    SetSelectedIndexDelta(_) {
      this.state.selectedIndex === void 0
        ? this.SetSelectedIndex(_ === 1 ? 0 : _)
        : this.SetSelectedIndex(this.state.selectedIndex + _);
    }
    SetSelectedIndex(_) {
      if (!this.m_rgCurrentMatches.length) return;
      let _ = this.m_rgCurrentMatches.length;
      (_ > this.getMaxMatches() && (_ = this.getMaxMatches()),
        (_ %= _),
        _ < 0 && (_ += _),
        this.setState({
          selectedIndex: _,
        }));
    }
    FindKeyIndex(_) {
      if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
        for (let _ = 0; _ < this.m_rgCurrentMatches.length; _++)
          this.m_mapMatchByKey.set(this.getKey(this.m_rgCurrentMatches[_]), _);
      return this.m_mapMatchByKey.get(_);
    }
    OnClickSuggestion(_) {
      let _ = this.FindKeyIndex(_);
      _ !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[_]);
    }
    OnMouseOverSuggestion(_) {
      let _ = this.FindKeyIndex(_);
      _ !== void 0 && this.SetSelectedIndex(_);
    }
    BindSelectedElement(_) {
      if (!_) return;
      let _ = this.containerRef.current,
        _ = _.containerRef.current,
        _ = _ && _.firstElementChild;
      _ &&
        _ &&
        (_.scrollTop + _.clientHeight < _.offsetTop ||
          _.offsetTop < _.scrollTop) &&
        _.scrollIntoView();
    }
    async UpdateSearchResults(_) {
      ((this.m_rgCurrentMatches = await this.performSearch(_)),
        (this.m_strLastSearch = _),
        this.m_mapMatchByKey.clear(),
        this.m_rgCurrentMatches.length
          ? !this.state || this.state.selectedIndex === void 0
            ? (this.props.nMinimumSearchLengthBeforeAutoSelection === void 0 ||
                _.length >=
                  this.props.nMinimumSearchLengthBeforeAutoSelection) &&
              this.setState({
                selectedIndex: 0,
              })
            : this.state.selectedIndex >= this.m_rgCurrentMatches.length &&
              this.setState({
                selectedIndex: 0,
              })
          : this.state &&
            this.state.selectedIndex !== void 0 &&
            this.setState({
              selectedIndex: void 0,
            }));
    }
    m_hMobxSearchDisposer;
    componentWillUnmount() {
      this.m_hMobxSearchDisposer &&= (this.m_hMobxSearchDisposer(), void 0);
    }
    async componentDidUpdate(_) {
      this.m_strLastSearch != this.props.strSearch &&
        (await this.UpdateSearchResults(this.props.strSearch),
        this.forceUpdate());
    }
    render() {
      let _ = [];
      if (this.m_rgCurrentMatches.length) {
        let _ = this.getMaxMatches();
        for (let _ = 0; _ < Math.min(_, this.m_rgCurrentMatches.length); _++) {
          let _ = this.m_rgCurrentMatches[_],
            _ = this.getKey(_),
            _ = _ === this.state.selectedIndex;
          _.push(
            (0, _.jsx)(
              _,
              {
                matchKey: _,
                fnOnClick: this.OnClickSuggestion,
                fnOnMouseOver: this.OnMouseOverSuggestion,
                bIsSelected: _,
                ref: _ ? this.BindSelectedElement : void 0,
                children: this.renderMatch(_),
              },
              _,
            ),
          );
        }
        this.m_rgCurrentMatches.length > _ &&
          _.push(
            this.renderTooManyMatchesMessage(
              this.m_rgCurrentMatches.length - _,
            ),
          );
      } else {
        let _ = this.renderNoMatchMessage();
        if (!_) return null;
        _.push(_);
      }
      return (0, _.jsx)(`div`, {
        className: _,
        ref: this.containerRef,
        children: (0, _.jsxs)(`div`, {
          className: _,
          tabIndex: 0,
          onKeyDown: this.OnKeyDown,
          children: [this.renderHeader(), _],
        }),
      });
    }
  };
(_([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnClickSuggestion`, null),
  _([_], _.prototype, `OnMouseOverSuggestion`, null),
  _([_], _.prototype, `BindSelectedElement`, null));
var _ = class extends _.PureComponent {
  containerRef = _.createRef();
  OnMouseOver(_) {
    this.props.fnOnMouseOver(this.props.matchKey);
  }
  OnClick(_) {
    this.props.fnOnClick(this.props.matchKey);
  }
  render() {
    return (0, _.jsx)(`div`, {
      className: _(_, _, this.props.bIsSelected ? _ : ``),
      onMouseEnter: this.OnMouseOver,
      onClick: this.OnClick,
      ref: this.containerRef,
      children: this.props.children,
    });
  }
};
(_([_], _.prototype, `OnMouseOver`, null),
  _([_], _.prototype, `OnClick`, null));
var _ = `ARyrUoFBJKQ-`,
  _ = class extends _ {
    performSearch(_) {
      return this.props.emoticonStore.SearchEmoticons(_, 10, !1);
    }
    getSelection(_) {
      return _.name;
    }
    getKey(_) {
      return _.name;
    }
    renderMatch(_) {
      return (0, _.jsxs)(`div`, {
        className: _(void 0, _.recent ? `Recent` : ``),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                emoticon: _.name,
              }),
              _.new && (0, _.jsx)(_, {}),
            ],
          }),
          `:`,
          _.name,
          `:`,
        ],
      });
    }
    renderNoMatchMessage() {
      return null;
    }
    renderTooManyMatchesMessage(_) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  _ = `hgRTS5e4dgI-`,
  _ = class extends _ {
    performSearch(_) {
      let _ = [];
      return (
        this.props.supportBBCodes.forEach((_) => {
          _.indexOf(_) >= 0 &&
            _.push({
              name: _,
            });
        }),
        _
      );
    }
    getSelection(_) {
      return `[` + _.name + `][/` + _.name + `]`;
    }
    getKey(_) {
      return _.name;
    }
    renderMatch(_) {
      return (0, _.jsxs)(
        `div`,
        {
          className: _(void 0),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.name,
            }),
            `[`,
            _.name,
            `]...[/`,
            _.name,
            `]`,
          ],
        },
        _.name,
      );
    }
    renderNoMatchMessage() {
      return (0, _.jsx)(
        `div`,
        {
          className: _(_, void 0),
          children: _(`#Bbcode_No_Match`),
        },
        `nomatches`,
      );
    }
    renderTooManyMatchesMessage(_) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  _ = class extends _.Component {
    descTextAreaRef = _.createRef();
    m_MentionDialog;
    m_bDisabled = !0;
    m_iMentionSearchStartOffset;
    m_iMentionSearchCancelledOffset;
    constructor(_) {
      (super(_),
        (this.state = {
          mentionSearch: void 0,
          activeSuggestSearchType: void 0,
        }));
    }
    BindMentionDialog(_) {
      this.m_MentionDialog = _ ?? void 0;
    }
    OnKeyDown(_) {
      this.state.activeSuggestSearchType &&
      this.m_MentionDialog &&
      !_.shiftKey &&
      !_.ctrlKey &&
      this.m_MentionDialog.BHandleKeyPress(_.keyCode)
        ? _.preventDefault()
        : (_.keyCode == 8 || _.keyCode == 46) &&
          (this.m_iMentionSearchCancelledOffset = void 0);
    }
    FindMatchOpener(_, _, _) {
      for (let _ = _ - 1; _ >= 0; _--)
        if (_[_] == _) return _;
        else if (
          _[_] == ` ` ||
          _[_] ==
            `
`
        )
          break;
    }
    ReplaceSuggestedText(_, _) {
      let _ = this.descTextAreaRef.current;
      if (!_) return;
      let _ = _.selectionStart,
        _ = _.value,
        _ = this.FindMatchOpener(_, _, _);
      if (
        (_ === void 0 && _ == `@` && (_ = this.FindMatchOpener(`＠`, _, _)),
        _ !== void 0)
      ) {
        let _ = _.substr(0, _);
        ((_ += _), (_ >= _.length || _[_] != ` `) && (_ += ` `));
        let _ = _.length;
        ((_ += _.substr(_)),
          (_.value = _),
          (_.selectionStart = _.selectionEnd = _),
          this.props.fnSetText(_),
          this.FocusTextInput());
      }
    }
    OnFocus(_) {
      this.UpdateAutoSearchState();
    }
    OnKeyPress(_) {
      this.UpdateAutoSearchState();
    }
    OnClick(_) {
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
    OnEmoticonSuggestionSelected(_, _) {
      _
        ? (this.ReplaceSuggestedText(`:`, `:` + _ + `:`),
          this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    OnBBCodeSuggestionSelected(_, _) {
      _
        ? (this.ReplaceSuggestedText(`[`, _), this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    FocusTextInput() {
      this.descTextAreaRef.current && this.descTextAreaRef.current.focus();
    }
    UpdateAutoSearchState() {
      let _ = this.descTextAreaRef.current;
      if (!_ || this.m_bDisabled) return;
      if (_.selectionStart != _.selectionEnd || !_.selectionStart) {
        this.ClearMentionSearchState();
        return;
      }
      let _ = _.selectionStart,
        _ = _.value,
        _,
        _;
      for (let _ = _ - 1; _ >= 0; _--) {
        let _ = _ > 0 ? _[_ - 1] : void 0;
        if (this.props.emoticonStore && _[_] == `:` && _.length > 2) {
          (_ &&
            _ != ` ` &&
            _ !=
              `
` &&
            _ != `:`) ||
            ((_ = _), (_ = `Emoticon`));
          break;
        }
        if (_[_] == `[` && (_ + 1 > _.length || _[_ + 1] != `/`)) {
          (_ &&
            _ != ` ` &&
            _ !=
              `
` &&
            _ != `]`) ||
            ((_ = _), (_ = `BBCode`));
          break;
        }
        if (
          _[_] == ` ` ||
          _[_] ==
            `
`
        )
          break;
      }
      if (_ === void 0 || _ === this.m_iMentionSearchCancelledOffset) {
        this.ClearMentionSearchState();
        return;
      }
      let _ = _.substr(_ + 1, _ - _ - 1);
      ((this.m_iMentionSearchStartOffset = _),
        this.setState({
          activeSuggestSearchType: _,
          mentionSearch: _,
        }));
    }
    GetTextAreaRef() {
      return this.descTextAreaRef;
    }
    GetTextAreaCurrent() {
      return this.descTextAreaRef.current;
    }
    render() {
      let {
          emoticonStore: _,
          supportBBCodes: _,
          fnSetText: _,
          ..._
        } = this.props,
        _;
      switch (this.state.activeSuggestSearchType) {
        case `Emoticon`:
          _ &&
            (_ = (0, _.jsx)(_, {
              emoticonStore: _,
              strSearch: this.state.mentionSearch,
              nMinimumSearchLengthBeforeAutoSelection: 2,
              onSuggestionSelected: this.OnEmoticonSuggestionSelected,
              ref: this.BindMentionDialog,
            }));
          break;
        case `BBCode`:
          _ = (0, _.jsx)(_, {
            supportBBCodes: _,
            strSearch: this.state.mentionSearch,
            nMinimumSearchLengthBeforeAutoSelection: 2,
            onSuggestionSelected: this.OnBBCodeSuggestionSelected,
            ref: this.BindMentionDialog,
          });
      }
      return (0, _.jsxs)(_.Fragment, {
        children: [
          _,
          (0, _.jsx)(`textarea`, {
            ..._,
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
(_([_], _.prototype, `BindMentionDialog`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnFocus`, null),
  _([_], _.prototype, `OnKeyPress`, null),
  _([_], _.prototype, `OnClick`, null),
  _([_], _.prototype, `OnEmoticonSuggestionSelected`, null),
  _([_], _.prototype, `OnBBCodeSuggestionSelected`, null),
  _([_], _.prototype, `FocusTextInput`, null),
  _([_], _.prototype, `GetTextAreaRef`, null),
  _([_], _.prototype, `GetTextAreaCurrent`, null));
var _ = `nIUbxO5p4A8-`,
  _ = `_0VP7ctGOadU-`,
  _ = `siVkCB-BeMc-`,
  _ = `wrPMc1ko4O0-`,
  _ = `sa1-P2tbrtc-`,
  _ = `_3QeIZHH9LCM-`,
  _ = `REbb7We6KRY-`,
  _ = `DgynSAJA0e0-`,
  _ = `WJB2hOx55Ic-`,
  _ = `Px4wClOhj8g-`,
  _ = `hluYSsWwKs8-`,
  _ = `AALKXsdrG-s-`,
  _ = `LR7E8btmRt0-`,
  _ = `Mc05zduSJmM-`,
  _ = `_7IgH0aB0drE-`,
  _ = `ZLkF2UoZt5M-`,
  _ = `-KEQzYsMyLo-`,
  _ = `quOQjx4gLwQ-`,
  _ = _((_) => {
    let {
        clanSteamID: _,
        inputClanImage: _,
        nWidth: _,
        nHeight: _,
        setImage: _,
      } = _,
      _ = _.useMemo(
        () => ({
          width: _,
          height: _,
        }),
        [_, _],
      ),
      [_, _] = _.useState(void 0),
      [_, _] = _.useState(!!_),
      [_, _] = _.useState(!1),
      _ = _(_, `dummy`),
      _ = _.useCallback(
        async (_) => {
          if (
            (_.ClearImages(), _ && (_(!0), await _.AddExistingClanImage(_, 0)))
          ) {
            _(_);
            let _ = _.GetUploadImages()[0].IsValidAssetType(_);
            _.error.length != 0 ||
              _.needsCrop ||
              (_ && _.image_hash == _.image_hash) ||
              _(_);
          }
          _(!1);
        },
        [_, _, _, _],
      );
    _.useEffect(() => {
      _(_);
    }, [_, _]);
    let _ = (_) => {
        let _ = new _(_.CLANSTEAMID);
        _(
          (0, _.jsx)(_, {
            clanSteamID: _,
            fnImageSelectCallBack: (_) => _(_),
          }),
          _(_) ?? window,
        );
      },
      _ = (_) => {
        let _ = _(_) ?? window,
          _ = _.GetUploadImages()[0];
        _(
          (0, _.jsx)(_, {
            ownerWin: _,
            uploadFile: _,
            forceResolution: {
              width: _,
              height: _,
            },
            fileType: 3,
          }),
          _,
        );
      },
      _ = async () => {
        _(!0);
        try {
          let _ = await _.UploadAllImages(_),
            _ = Object.values(_);
          if (_ && _.length > 0) {
            _(
              _.length == 1,
              `ClanImagePickForCertainSize expected size 1, got ` + _.length,
            );
            let _ = _[0].bSuccess ? _[0].uploadResult : void 0,
              _ = _.GetHashAndExt(_ ?? null),
              _ = _.GetThumbHashAndExt(_ ?? null);
            if (_?.image_hash && _.file_type !== void 0 && _ && _) {
              let _ = _.GenerateURLFromHashAndExt(_, _),
                _ = _.GenerateURLFromHashAndExt(_, _),
                _ = {
                  imageid: -11231412,
                  image_hash: _.image_hash,
                  thumbnail_hash: _.thumbnail_hash,
                  file_type: _.file_type,
                  file_name: _.file_name,
                  clanAccountID: _.GetAccountID(),
                  url: _,
                  thumb_url: _,
                  uploaded_time: Date.now() / 1e3,
                };
              (_(_), _(_));
            }
          }
        } finally {
          _(!1);
        }
      },
      _ = ``,
      _ = !1,
      _;
    if (_ && _.GetFilesToUpload().length > 0) {
      _ = _.GetUploadImages()[0];
      let _ = _.IsValidAssetType(_);
      ((_ = _.error), (_ = _.needsCrop));
    }
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _
          ? (0, _.jsx)(_, {
              size: `medium`,
              string: _(`#Loading`),
            })
          : _ &&
            (0, _.jsx)(`div`, {
              className: `_9Z5REaLWRq4-`,
              style: {
                backgroundImage: `url( '${_ ? _.dataUrl : _.url}' )`,
                height: `${_}px`,
                width: `${_}px`,
              },
            }),
        !!_ &&
          (0, _.jsx)(`p`, {
            children: _,
          }),
        _ &&
          (0, _.jsx)(_, {
            onClick: _,
            children: _(`#BBCode_ResizeImage`),
          }),
        _ &&
          _.bCropped &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#ClanImagePickAndResize_UploadStatus`, _.status),
              }),
              _
                ? (0, _.jsx)(_, {
                    string: _(`#Uploading`),
                    size: `small`,
                  })
                : (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#ClanImagePickAndResize_UploadImage`),
                  }),
            ],
          }),
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#BBCode_ChooseImage`, _, _),
        }),
      ],
    });
  }),
  _,
  _ = class extends _.Component {
    static {
      _ = this;
    }
    m_cancelSignal = _.default.CancelToken.source();
    static s_formattingHelp = new Map();
    constructor(_) {
      (super(_),
        (this.state = {
          formattingHelp: {
            __html: _.s_formattingHelp.get(_.formatType) ?? ``,
          },
        }));
    }
    componentDidMount() {
      this.AjaxGetFormattingHelp().catch((_) => {
        this.setState(_(_));
      });
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`FormattingHelpWidget component unmounted`);
    }
    static GetHelpURL(_, _) {
      return (
        _.COMMUNITY_BASE_URL +
        `comment/` +
        _ +
        `/formattinghelp` +
        (_ ? `?ajax=1` : ``)
      );
    }
    async AjaxGetFormattingHelp() {
      if (this.state.formattingHelp.__html == ``) {
        let _ = {
            sessionid: _(),
          },
          _;
        ((_ = await _.default.get(_.GetHelpURL(this.props.formatType, !0), {
          params: _,
          cancelToken: this.m_cancelSignal.token,
        })),
          _.s_formattingHelp.set(this.props.formatType, _.data),
          this.setState({
            formattingHelp: {
              __html: _.data,
            },
          }));
      }
    }
    render() {
      return this.state.strErrorMsg
        ? (0, _.jsxs)(`div`, {
            children: [
              this.state.strErrorMsg,
              (0, _.jsx)(`br`, {}),
              this.state.errorCode,
            ],
          })
        : this.state.formattingHelp.__html == ``
          ? (0, _.jsx)(_, {})
          : (0, _.jsx)(_, {
              strTitle: _(`#EventEditor_FormattingHelp_GetHelpLink`),
              strDescription: ``,
              closeModal: this.props.closeModal,
              onOK: this.props.closeModal,
              onCancel: this.props.closeModal,
              bAlertDialog: !0,
              className: `ModernBBStyles`,
              children: (0, _.jsx)(`div`, {
                dangerouslySetInnerHTML: this.state.formattingHelp,
              }),
            });
    }
  };
_ = _ = _([_], _);
var _,
  _ = class extends _.Component {
    descAutoTextAreaRef = _.createRef();
    constructor(_) {
      (super(_),
        (this.state = {
          bShowDragTarget: !1,
        }));
    }
    componentDidMount() {
      _.AddClanImageDragListener(this.ClanImageDragListener);
    }
    componentWillUnmount() {
      _.RemoveClanImageDragListener(this.ClanImageDragListener);
    }
    ClanImageDragListener(_, _) {
      this.state.bShowDragTarget != _ &&
        this.setState({
          bShowDragTarget: _,
        });
    }
    onFocus(_) {
      _ && _.target.select();
    }
    InsertText(_) {
      _.replaceSelection(this.GetTextAreaRef()?.current, _);
    }
    OnTextAreaDropListener(_) {
      if (
        (_.preventDefault(),
        _.stopPropagation(),
        _.dataTransfer.items && _.dataTransfer.items[0])
      ) {
        let _ = _.dataTransfer.getData(`text`);
        if (_ && _.length > 0) {
          for (let _ of [_.GetBaseURL(), _.GetBaseURLV2()])
            if (_.startsWith(_)) {
              let _ = `[img]` + _ + `/` + _.substr(_.length) + `[/img]`;
              _.replaceSelection(this.GetTextAreaRef()?.current, _);
              break;
            }
        }
      }
    }
    GetTextAreaRef() {
      return this.descAutoTextAreaRef.current?.GetTextAreaRef();
    }
    render() {
      return (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            pathToImages:
              _.COMMUNITY_CDN_URL + `public/images/sharedfiles/guides/`,
            fnTextareaRef: this.GetTextAreaRef,
            emoticonStore: this.props.emoticonStore,
            supportBBCodes: this.props.limitBBCode ? this.props.limitBBCode : _,
            bSupportHTMLImport: this.props.bSupportHTMLImport,
            showFormatHelp: this.props.showFormatHelp,
            bEmbeddedInDialog: this.props.bEmbeddedInDialog,
            clanSteamID: this.props.clanSteamID,
          }),
          (0, _.jsx)(`div`, {
            className: _(
              _,
              _,
              this.state.bShowDragTarget ? _ : ``,
              this.props.className ? this.props.className : ``,
            ),
            children: (0, _.jsx)(_, {
              cols: 90,
              rows: this.props.nOverridesRows || 22,
              maxLength: 64e3,
              className: _(
                _,
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
                : _,
            }),
          }),
        ],
      });
    }
  };
(_([_], _.prototype, `ClanImageDragListener`, null),
  _([_], _.prototype, `onFocus`, null),
  _([_], _.prototype, `OnTextAreaDropListener`, null),
  _([_], _.prototype, `GetTextAreaRef`, null),
  (_ = _([_], _)));
var _ = class _ {
    static BIsFireFox() {
      return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
        navigator.userAgent,
      );
    }
    static replaceSelection(_, _) {
      if (!_) return;
      let _ = _.selectionStart;
      (_.focus(),
        _.InsertTextAtSelect(_, _),
        _.setSelectionRange(_, _ + _.length));
    }
    static getSelectedString(_) {
      return _
        ? _.value.substr(_.selectionStart, _.selectionEnd - _.selectionStart)
        : ``;
    }
    static wrapBBCode(_, _, _) {
      if (!_) return;
      let _ = _.getSelectedString(_),
        _ = ``;
      ((_ =
        _.indexOf(_) == 0 && _.lastIndexOf(_) == _.length - _.length
          ? _.substr(_.length, _.length - _.length - _.length)
          : _ + _ + _),
        _.replaceSelection(_, _));
    }
    static append(_, _) {
      _ &&
        (_.focus(),
        _.setSelectionRange(_.value.length, _.value.length),
        _.InsertTextAtSelect(_, _));
    }
    static ClearTextArea(_) {
      if (_) {
        _.focus();
        let _ = _.value.length;
        if (_ !== 0) {
          _.setRangeText
            ? _.setRangeText(``, 0, _, `preserve`)
            : (_.value = ``);
          let _ = new Event(`input`, {
            bubbles: !0,
          });
          _.dispatchEvent(_);
        }
        _.focus();
      }
    }
    static overwrite(_, _) {
      _ && (_.ClearTextArea(_), _.InsertTextAtSelect(_, _));
    }
    static InsertTextAtSelect(_, _) {
      let _ = _.selectionStart,
        _ = _.selectionEnd;
      if (_ !== null && _ !== null) {
        _.setRangeText
          ? _.setRangeText(_, _, _, `preserve`)
          : (_.value = _.value.slice(0, _) + _ + _.value.slice(_));
        let _ = new Event(`input`, {
          bubbles: !0,
        });
        (_.dispatchEvent(_),
          (_.selectionStart = _.selectionEnd = _ + _.length));
      }
      _.focus();
    }
  },
  _ = class extends _.Component {
    m_linkPopupRef = _.createRef();
    onBold() {
      _.wrapBBCode(`[b]`, `[/b]`, this.props.fnTextareaRef()?.current);
    }
    onItalics() {
      _.wrapBBCode(`[i]`, `[/i]`, this.props.fnTextareaRef()?.current);
    }
    onUnderline() {
      _.wrapBBCode(`[u]`, `[/u]`, this.props.fnTextareaRef()?.current);
    }
    onStrikeThrough() {
      _.wrapBBCode(
        `[strike]`,
        `[/strike]`,
        this.props.fnTextareaRef()?.current,
      );
    }
    onHeader() {
      _.wrapBBCode(`[h1]`, `[/h1]`, this.props.fnTextareaRef()?.current);
    }
    onHeader2() {
      _.wrapBBCode(`[h2]`, `[/h2]`, this.props.fnTextareaRef()?.current);
    }
    onHeader3() {
      _.wrapBBCode(`[h3]`, `[/h3]`, this.props.fnTextareaRef()?.current);
    }
    onUnorderedList() {
      this.handleList(`list`);
    }
    onOrderedList() {
      this.handleList(`olist`);
    }
    handleList(_) {
      let _ = this.props.fnTextareaRef()?.current;
      if (!_) return;
      let _ =
          `[` +
          _ +
          `]
`,
        _ = `[/` + _ + `]`;
      if (_.selectionStart == _.selectionEnd)
        _.wrapBBCode(
          _ + `[*]`,
          `
` + _,
          _,
        );
      else {
        let _ =
          _ +
          _.getSelectedString(_)
            .split(`
`)
            .map((_) => (_.match(/\*+\s/) ? `[*]` : `[*] `) + _).join(`
`) +
          `
` +
          _;
        _.replaceSelection(_, _);
      }
    }
    OnAddLink(_) {
      let _ = this.props.fnTextareaRef();
      _ &&
        _(
          (0, _.jsx)(_, {
            textareaRef: _,
          }),
          _(_) ?? window,
        );
    }
    ShowHelpDialog(_) {
      this.props.showFormatHelp &&
        _(
          (0, _.jsx)(_, {
            formatType: this.props.showFormatHelp,
          }),
          _(_) ?? window,
        );
    }
    OnConvertHTMLToBBCodeDialog(_) {
      let _ = this.props.fnTextareaRef();
      if (!_) return;
      let _ = _(_) ?? window;
      _(
        (0, _.jsx)(_, {
          ownerWindow: _,
          textareaRef: _,
        }),
        _,
      );
    }
    OnOpenYoutubeDialog(_) {
      let _ = this.props.fnTextareaRef();
      if (!_) return;
      let _ = _.IMG_URL + `applications/community/`;
      _(
        (0, _.jsx)(_, {
          textareaRef: _,
          pathToImages: _,
        }),
        _(_) ?? window,
      );
    }
    OnOpenImageDialog(_) {
      let _ = this.props.fnTextareaRef();
      _ &&
        _(
          (0, _.jsx)(_, {
            textareaRef: _,
          }),
          _(_) ?? window,
        );
    }
    OnOpenSpeakerDialog(_) {
      let _ = this.props.fnTextareaRef(),
        _ = this.props.clanSteamID;
      _ &&
        _ &&
        _(
          (0, _.jsx)(_, {
            clanSteamID: _,
            textareaRef: _,
          }),
          _(_) ?? window,
        );
    }
    OnEmoticonSelected(_, _ = !1) {
      let _ = `\u02D0${_}\u02D0`;
      (_.replaceSelection(this.props.fnTextareaRef()?.current, _),
        this.props.fnTextareaRef()?.current?.focus());
    }
    BSupports(_) {
      return this.props.supportBBCodes.findIndex((_) => _ == _) >= 0;
    }
    render() {
      let {
          showFormatHelp: _,
          bEmbeddedInDialog: _,
          bSupportHTMLImport: _,
          pathToImages: _,
        } = this.props,
        _;
      return (
        _ &&
          (_ = _
            ? (0, _.jsx)(`span`, {
                className: _(`ttip`, void 0),
                children: (0, _.jsx)(_, {
                  toolTipContent: _(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: (0, _.jsxs)(`a`, {
                    href: _.GetHelpURL(_, !1),
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    children: [
                      (0, _.jsx)(`img`, {
                        src: _ + `/action_help.png`,
                      }),
                      ` `,
                      _(`#EventEditor_FormattingHelp_GetHelpLink`),
                    ],
                  }),
                }),
              })
            : (0, _.jsx)(`span`, {
                onClick: this.ShowHelpDialog,
                className: _(`ttip`, void 0),
                children: (0, _.jsxs)(_, {
                  toolTipContent: _(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: [
                    (0, _.jsx)(`img`, {
                      src: _ + `/action_help.png`,
                    }),
                    ` `,
                    _(`#EventEditor_FormattingHelp_GetHelpLink`),
                  ],
                }),
              })),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            this.BSupports(`b`) &&
              (0, _.jsx)(_, {
                onClick: this.onBold,
                tooltip: _(`#Editor_Bold`),
                imgURL: this.props.pathToImages + `/format_bold.png`,
              }),
            this.BSupports(`u`) &&
              (0, _.jsx)(_, {
                onClick: this.onUnderline,
                tooltip: _(`#Editor_Underline`),
                imgURL: this.props.pathToImages + `/format_underline.png`,
              }),
            this.BSupports(`i`) &&
              (0, _.jsx)(_, {
                onClick: this.onItalics,
                tooltip: _(`#Editor_Italics`),
                imgURL: this.props.pathToImages + `/format_italic.png`,
              }),
            this.BSupports(`strike`) &&
              (0, _.jsx)(_, {
                onClick: this.onStrikeThrough,
                tooltip: _(`#Editor_StrikeThrough`),
                imgURL: this.props.pathToImages + `/format_strike.png`,
              }),
            !(!this.BSupports(`url`) || _) &&
              (0, _.jsx)(_, {
                onClick: this.OnAddLink,
                tooltip: _(`#Editor_Link`),
                imgURL: this.props.pathToImages + `/format_link.png`,
              }),
            this.BSupports(`list`) &&
              (0, _.jsx)(_, {
                onClick: this.onUnorderedList,
                tooltip: _(`#Editor_Unordered`),
                imgURL: this.props.pathToImages + `/format_bullet.png`,
              }),
            this.BSupports(`olist`) &&
              (0, _.jsx)(_, {
                onClick: this.onOrderedList,
                tooltip: _(`#Editor_Ordered`),
                imgURL: this.props.pathToImages + `/format_numbered.png`,
              }),
            this.BSupports(`h1`) &&
              (0, _.jsx)(_, {
                onClick: this.onHeader,
                tooltip: _(`#Editor_Header`),
                imgURL: this.props.pathToImages + `/format_header1.png`,
              }),
            this.BSupports(`h2`) &&
              (0, _.jsx)(_, {
                onClick: this.onHeader2,
                tooltip: _(`#Editor_Header2`),
                imgURL: this.props.pathToImages + `/format_header2.png`,
              }),
            this.BSupports(`h3`) &&
              (0, _.jsx)(_, {
                onClick: this.onHeader3,
                tooltip: _(`#Editor_Header3`),
                imgURL: this.props.pathToImages + `/format_header3.png`,
              }),
            this.BSupports(`previewyoutube`) &&
              (0, _.jsx)(_, {
                onClick: this.OnOpenYoutubeDialog,
                tooltip: _(`#EventEditor_InsertYouTube`),
                imgURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
              }),
            (0, _.jsx)(`span`, {
              className: `ttip`,
              children:
                this.props.emoticonStore &&
                (0, _.jsx)(_, {
                  toolTipContent: _(`#Editor_Emoticon`),
                  children: (0, _.jsx)(_, {
                    title: ` `,
                    className: _(`_5LFNlKLTFJM-`),
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
            !(!this.BSupports(`img`) || _) &&
              (0, _.jsx)(_, {
                onClick: this.OnOpenImageDialog,
                tooltip: _(`#EventEditor_InsertImage`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !!(
              _.is_support &&
              this.props.clanSteamID &&
              this.BSupports(`speaker`)
            ) &&
              (0, _.jsx)(_, {
                onClick: this.OnOpenSpeakerDialog,
                tooltip: _(`#EventEditor_AddSpeaker`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !(!_ || _) &&
              (0, _.jsx)(_, {
                onClick: this.OnConvertHTMLToBBCodeDialog,
                className: void 0,
                tooltip: _(`#EventEditor_ImportFromHTML_ttip`),
                children: _(`#EventEditor_ImportHTML`),
              }),
            _,
          ],
        })
      );
    }
  };
(_([_], _.prototype, `onBold`, null),
  _([_], _.prototype, `onItalics`, null),
  _([_], _.prototype, `onUnderline`, null),
  _([_], _.prototype, `onStrikeThrough`, null),
  _([_], _.prototype, `onHeader`, null),
  _([_], _.prototype, `onHeader2`, null),
  _([_], _.prototype, `onHeader3`, null),
  _([_], _.prototype, `onUnorderedList`, null),
  _([_], _.prototype, `onOrderedList`, null),
  _([_], _.prototype, `OnAddLink`, null),
  _([_], _.prototype, `ShowHelpDialog`, null),
  _([_], _.prototype, `OnConvertHTMLToBBCodeDialog`, null),
  _([_], _.prototype, `OnOpenYoutubeDialog`, null),
  _([_], _.prototype, `OnOpenImageDialog`, null),
  _([_], _.prototype, `OnOpenSpeakerDialog`, null),
  _([_], _.prototype, `OnEmoticonSelected`, null),
  (_ = _([_], _)));
function _(_) {
  return (0, _.jsx)(`span`, {
    onClick: _.onClick,
    className: _.className,
    children: (0, _.jsxs)(_, {
      toolTipContent: _.tooltip,
      className: `ttip`,
      children: [
        !!_.imgURL &&
          (0, _.jsx)(`img`, {
            src: _.imgURL,
          }),
        _.children,
      ],
    }),
  });
}
var _ = class extends _.Component {
  state = {
    youtubeInput: ``,
    alignment: _.left,
  };
  OnYoutubeInsertLink() {
    let _ = this.state.youtubeInput && _(this.state.youtubeInput);
    if (!_) alert(_(`#EventEditor_InsertYouTube_NoURL`));
    else {
      if (this.state.alignment == _.summary) {
        let _ =
          `https://www.youtube.com/watch?v=` +
          _.strVideoID +
          (_.nStartSeconds ? `&t=` + _.nStartSeconds : ``);
        _.wrapBBCode(_, ``, this.props.textareaRef.current);
      } else {
        let _ =
          `[previewyoutube=` + _.strVideoID + `;` + this.state.alignment + `]`;
        _.wrapBBCode(_, `[/previewyoutube]`, this.props.textareaRef.current);
      }
      this.setState({
        youtubeInput: ``,
        alignment: _.left,
      });
    }
  }
  OnUrlChange(_) {
    this.state.youtubeInput != _.target.value &&
      this.setState({
        youtubeInput: _.target.value,
      });
  }
  OnLeftSelected() {
    this.setState({
      alignment: _.left,
    });
  }
  OnRightSelected() {
    this.setState({
      alignment: _.right,
    });
  }
  OnFullSelected() {
    this.setState({
      alignment: _.full,
    });
  }
  OnSummarySelected() {
    this.setState({
      alignment: _.summary,
    });
  }
  OnOuterDivClickPassDown(_) {}
  render() {
    return (0, _.jsx)(_, {
      strTitle: _(`#EventEditor_InsertYouTube`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnYoutubeInsertLink,
      strOKButtonText: _(`#EventEditor_InsertYouTube`),
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_InsertYouTube_URL`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    ref: (_) => {
                      _?.focus();
                    },
                    type: `text`,
                    value: this.state.youtubeInput,
                    onChange: this.OnUrlChange,
                    placeholder: _(`#EventEditor_InsertYouTube_Placholder`),
                  }),
                }),
              ],
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: `DialogInputLabelGroup`,
            children: [
              (0, _.jsx)(`div`, {
                className: `DialogLabel`,
                children: _(`#EventEditor_InsertYouTube_Position`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.left,
                    value: _.left,
                    checked: this.state.alignment == _.left,
                    onChange: this.OnLeftSelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.left,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Left`),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.right,
                    value: _.right,
                    checked: this.state.alignment == _.right,
                    onChange: this.OnRightSelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.right,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Right`),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.full,
                    value: _.full,
                    checked: this.state.alignment == _.full,
                    onChange: this.OnFullSelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.full,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Full`),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, _.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    _: _.summary,
                    value: _.summary,
                    checked: this.state.alignment == _.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  (0, _.jsx)(`label`, {
                    htmlFor: _.summary,
                    children: (0, _.jsx)(`span`, {
                      children: _(`#EventEditor_InsertYouTube_Summary`),
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
(_([_], _.prototype, `OnYoutubeInsertLink`, null),
  _([_], _.prototype, `OnUrlChange`, null),
  _([_], _.prototype, `OnLeftSelected`, null),
  _([_], _.prototype, `OnRightSelected`, null),
  _([_], _.prototype, `OnFullSelected`, null),
  _([_], _.prototype, `OnSummarySelected`, null),
  _([_], _.prototype, `OnOuterDivClickPassDown`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  static {
    _ = this;
  }
  state = {
    textToDisplay: ``,
    strURL: ``,
  };
  static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
  LoadFromTextArea() {
    let { textareaRef: _ } = this.props;
    if (_ && _.current) {
      let _ = _.getSelectedString(_.current),
        _ = _.m_regExp.exec(_);
      _
        ? this.setState({
            strURL: _[1],
            textToDisplay: _[2],
          })
        : this.setState({
            textToDisplay: _,
          });
    }
  }
  componentDidMount() {
    this.LoadFromTextArea();
  }
  onLinkTitleUpdate(_) {
    this.setState({
      textToDisplay: _.target.value,
    });
  }
  onLinkURLUpdate(_) {
    this.setState({
      strURL: _.target.value,
    });
  }
  onInsertLink() {
    let { strURL: _, textToDisplay: _ } = this.state,
      _ = `[url=` + _ + `]` + _ + `[/url]`;
    _.replaceSelection(this.props.textareaRef.current, _);
  }
  render() {
    return (0, _.jsx)(_, {
      strTitle: _(`#Editor_Link`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onOK: this.onInsertLink,
      onCancel: this.props.closeModal,
      strOKButtonText: _(`#EventEditor_InsertLinkURL`),
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_LinkDescription`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkTitleUpdate,
                    value: this.state.textToDisplay,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_LinkURL`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
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
(_([_], _.prototype, `onLinkTitleUpdate`, null),
  _([_], _.prototype, `onLinkURLUpdate`, null),
  _([_], _.prototype, `onInsertLink`, null),
  (_ = _ = _([_], _)));
var _ = class extends _.Component {
  refFirstInput = _.createRef();
  state = {
    imgURL: ``,
    anchorURL: ``,
  };
  componentDidMount() {
    this.refFirstInput.current?.focus();
  }
  OnImageInsert() {
    let { anchorURL: _, imgURL: _ } = this.state,
      _ = ``,
      _ = ``;
    (_ && _.length > 0 && ((_ += `[url=` + _ + `]`), (_ = `[/url]` + _)),
      (_ += `[img]` + _),
      (_ = `[/img]` + _),
      _.wrapBBCode(_, _, this.props.textareaRef.current));
  }
  OnImageURLChange(_) {
    this.state.imgURL != _.target.value &&
      this.setState({
        imgURL: _.target.value,
      });
  }
  OnAnchorURLChange(_) {
    this.state.anchorURL != _.target.value &&
      this.setState({
        anchorURL: _.target.value,
      });
  }
  render() {
    let { imgURL: _, anchorURL: _ } = this.state;
    return (0, _.jsx)(_, {
      strTitle: _(`#EventEditor_InsertImage_Title`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnImageInsert,
      strOKButtonText: _(`#EventEditor_InsertImage_Title`),
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#EventEditor_InsertImage_Desc`),
          }),
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_InsertImage_URL`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: _,
                    onChange: this.OnImageURLChange,
                    placeholder: _(`#EventEditor_InsertImage_Placeholder`),
                    ref: this.refFirstInput,
                  }),
                }),
              ],
            }),
          }),
          (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: _(`#EventEditor_InsertImage_Anchor`),
                }),
                (0, _.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, _.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: _,
                    onChange: this.OnAnchorURLChange,
                    placeholder: _(`#EventEditor_InsertImage_Placeholder`),
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
(_([_], _.prototype, `OnImageInsert`, null),
  _([_], _.prototype, `OnImageURLChange`, null),
  _([_], _.prototype, `OnAnchorURLChange`, null),
  (_ = _([_], _)));
var _ = (_) => {
  let [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    { data: _ } = _(),
    { isLoading: _, data: _ } = _(_?.GetAccountID()),
    _ = () => {
      let _ = `[speaker name="${_.trim()}"`;
      if (
        (_.trim().length > 0 && (_ += ` title="${_}"`),
        _.trim().length > 0 && (_ += ` company="${_}"`),
        _)
      ) {
        let _ = _ + `/` + _.clanAccountID + `/` + _.GetHashAndExt(_);
        _ += ` photo="${_}"`;
      }
      (_ && (_ += ` steamid="${_.ConvertTo64BitString()}"`),
        (_ += `]${_}[/speaker]`),
        _.replaceSelection(_.textareaRef.current, _));
    },
    _ = _.trim().length != 0 && _.trim().length != 0;
  return (0, _.jsx)(_, {
    strTitle: _(`#EventEditor_AddSpeaker`),
    strDescription: _(`#EventEditor_AddSpeaker_Desc`),
    closeModal: _.closeModal,
    onCancel: _.closeModal,
    bOKDisabled: !_,
    onOK: _,
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          type: `text`,
          label: _(`#EventEditor_AddSpeaker_Name`),
          value: _,
          onChange: (_) => _(_.target.value),
          focusOnMount: !0,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              type: `text`,
              label: _(`#EventEditor_AddSpeaker_Title`),
              value: _,
              onChange: (_) => _(_.target.value),
            }),
            (0, _.jsx)(_, {
              type: `text`,
              label: _(`#EventEditor_AddSpeaker_Company`),
              value: _,
              onChange: (_) => _(_.target.value),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          toolTipContent: _(`#EventEditor_AssociateSteamAccount_ttip`),
          children: (0, _.jsxs)(`div`, {
            className: `DialogLabel`,
            children: [_(`#EventEditor_AssociateSteamAccount`), ` (?)`],
          }),
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _ &&
              (0, _.jsx)(_, {
                string: _(`#Loading`),
                size: `small`,
              }),
            _ &&
              _ &&
              (0, _.jsxs)(`a`, {
                href:
                  _.COMMUNITY_BASE_URL + `profiles/` + _.ConvertTo64BitString(),
                target: `_blank`,
                children: [
                  _
                    ? (0, _.jsx)(`img`, {
                        style: {
                          marginRight: `8px`,
                        },
                        src: _.avatar_url,
                      })
                    : null,
                  _ ? _.m_strPlayerName : null,
                ],
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  onClick: () => _(new _(_.steamid)),
                  children: _(`#EventEditor_SteamAccount_addme`),
                }),
                (0, _.jsx)(_, {
                  onClick: (_) =>
                    _(
                      (0, _.jsx)(_, {
                        friends: _ ?? [],
                        setSteamID: _,
                      }),
                      _,
                    ),
                  children: _(`#EventEditor_SteamAccount_addfriend`),
                }),
                (0, _.jsx)(_, {
                  onClick: () => _(void 0),
                  children: _(`#EventEditor_SteamAccount_clear`),
                }),
              ],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _(`#EventEditor_ChoosePhoto`),
            }),
            (0, _.jsx)(_, {
              clanSteamID: _.clanSteamID,
              inputClanImage: _,
              setImage: _,
              nWidth: 184,
              nHeight: 184,
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _(`#EventEditor_AddSpeaker_About`),
            }),
            (0, _.jsx)(_, {
              value: _,
              onChange: (_) => _(_.target.value),
              rows: 8,
              cols: 80,
              nMinHeight: 40,
              placeholder: _(`#EventEditor_AddSpeaker_About_Placeholder`),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _(`#Button_Preview`),
            }),
            (0, _.jsx)(_, {
              company: _,
              name: _,
              title: _,
              bioString: _,
              photo: _ ? _.url : void 0,
            }),
          ],
        }),
      ],
    }),
  });
};
function _(_) {
  let { friends: _, setSteamID: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          steamid: _,
          setSteamID: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { steamid: _, setSteamID: _ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    onSelected: () => _(new _(_)),
    children: (0, _.jsxs)(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
      },
      children: [
        _ &&
          (0, _.jsx)(`img`, {
            className: `SZCLgazwykY-`,
            src: _.avatar_url,
          }),
        _?.m_strPlayerName,
      ],
    }),
  });
}
var _ = class extends _.Component {
  m_isMounted = !1;
  m_bAppend = !1;
  constructor(_) {
    (super(_),
      (this.state = {
        bPreserveNewLines: !1,
        strHTMLData: ``,
      }));
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
  async ConvertHtmlToBBCode(_, _) {
    let _ = new URLSearchParams();
    return (
      _.append(`content`, _),
      _.append(`preserve_newlines`, _ ? `1` : `0`),
      (
        await _.default.post(
          _.COMMUNITY_BASE_URL + `/actions/ConvertHTMLToBBCode`,
          _,
        )
      ).data.content
    );
  }
  ConvertBBCode() {
    (this.setState({
      bConverting: !0,
    }),
      this.ConvertHtmlToBBCode(
        this.state.strHTMLData,
        this.state.bPreserveNewLines,
      )
        .then((_) => {
          this.m_isMounted &&
            (this.m_bAppend
              ? _.append(_, this.props.textareaRef.current)
              : _.overwrite(_, this.props.textareaRef.current),
            this.setState({
              bConverting: !1,
              bFinishedConverting: !0,
            }));
        })
        .catch((_) => {
          _(
            (0, _.jsx)(_, {
              strTitle: _(`#EventEditor_ConvertHTML_Error`),
              strDescription: _(
                `#EventEditor_ConvertHTML_Error_Desc`,
                _.response && _.response.data ? _.response.data.msg : _,
              ),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
            }),
            this.props.ownerWindow,
            {
              strTitle: _(`#EventEditor_ConvertHTML_Error`),
            },
          );
        }));
  }
  OnCheckboxChange(_) {
    let _ = _.target.checked;
    _ != this.state.bPreserveNewLines &&
      this.setState({
        bPreserveNewLines: _,
      });
  }
  OnTextAreaChange(_) {
    this.setState({
      strHTMLData: _.currentTarget.value,
    });
  }
  render() {
    let { closeModal: _ } = this.props;
    return this.state.bConverting
      ? (0, _.jsx)(_, {
          strTitle: _(`#EventEditor_ImportFromHTML`),
          strDescription: _(`#EventEditor_ImportFromHTML_ConversionInProgress`),
          closeModal: _,
          bAlertDialog: !0,
          onOK: _,
          onCancel: _,
          children: (0, _.jsx)(_, {}),
        })
      : this.state.bFinishedConverting
        ? (0, _.jsx)(_, {
            strTitle: _(`#EventEditor_ImportFromHTML`),
            strDescription: _(`#EventEditor_ImportFromHTML_ConvertFinished`),
            closeModal: _,
            bAlertDialog: !0,
            onOK: _,
            onCancel: _,
          })
        : (0, _.jsx)(_, {
            title: _(`#EventEditor_ImportFromHTML`),
            onOK: this.OnConvertAndOverriteHTML,
            onCancel: _,
            className: _,
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  children: (0, _.jsxs)(`div`, {
                    className: _(_, _),
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: _(
                          `#EventEditor_ImportFromHTML_ConvertDescription`,
                          (0, _.jsx)(`a`, {
                            target: _.IN_CLIENT ? void 0 : `_blank`,
                            href: `https://partner.steamgames.com/doc/marketing/event_tools/import`,
                            children: _(
                              `#EventEditor_ImportFromHTML_ConvertLearn`,
                            ),
                          }),
                        ),
                      }),
                      (0, _.jsx)(`textarea`, {
                        value: this.state.strHTMLData,
                        placeholder: _(
                          `#EventEditor_ImportFromHTML_Instruction`,
                        ),
                        className: _,
                        onChange: this.OnTextAreaChange,
                        ref: (_) => {
                          _?.focus();
                        },
                      }),
                      (0, _.jsxs)(`div`, {
                        className: _,
                        children: [
                          (0, _.jsx)(`input`, {
                            _: `ImportFromHTMLNewLines`,
                            type: `checkbox`,
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          (0, _.jsxs)(`label`, {
                            htmlFor: `ImportFromHTMLNewLines`,
                            children: [
                              _(`#EventEditor_ImportFromHTML_PreserveNewlines`),
                              (0, _.jsx)(_, {
                                tooltip: _(
                                  `#EventEditor_ImportFromHTML_PreserveNewlines_Hint`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)(`div`, {
                        children: _(
                          `#EventEditor_ImportFromHTML_ConvertToBBCode`,
                        ),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    onCancel: () => _?.(),
                    strOKText: _(`#Button_Overwrite`),
                    onUpdate: this.OnConvertAndAppendHTML,
                    strUpdateText: _(`#Button_Append`),
                  }),
                }),
              ],
            }),
          });
  }
};
(_([_], _.prototype, `OnConvertAndOverriteHTML`, null),
  _([_], _.prototype, `OnConvertAndAppendHTML`, null),
  _([_], _.prototype, `OnCheckboxChange`, null),
  _([_], _.prototype, `OnTextAreaChange`, null),
  (_ = _([_], _)));
var _ = `j59mI0R4Mls-`,
  _ = `hYzeNZ6Fv5E-`,
  _ = `_7KwGD4ys9So-`,
  _ = `rgEtYZWJk28-`;
function _(_, _) {
  return _.trim().length
    ? _ +
        `

` +
        _
    : _;
}
async function _(_, _, _) {
  if (_.IN_STEAMUI) {
    let _ = _.Init(_);
    (_.Body().set_appid(_), _.Body().set_status_text(_));
    let _ = await _.PostStatusToFriends(_.CMInterface.GetServiceTransport(), _);
    if (_.GetEResult() != 1) throw Error(String(_.GetEResult()));
    return;
  }
  let _ = new FormData();
  (_.append(`appid`, String(_ ?? 0)),
    _.append(`status_text`, _),
    _.append(`sessionid`, _()));
  let _ = await fetch(_ + `ajaxpostuserstatus`, {
      method: `POST`,
      body: _,
      credentials: `include`,
    }),
    _;
  try {
    _ = _._ ? await _.json() : void 0;
  } catch {
    _ = void 0;
  }
  if (_?.success != 1) throw Error(_?.message ?? _.statusText);
}
function _(_) {
  let { appid: _, eventLink: _, emoticonStore: _, closeModal: _ } = _,
    { data: _ } = _(_.steamid),
    [_, _] = _.useState(``),
    _ =
      _.COMMUNITY_BASE_URL +
      `profiles/` +
      _.InitFromAccountID(_.accountid, _.EUNIVERSE).ConvertTo64BitString() +
      `/`,
    _ = _({
      mutationFn: () => _(_, _, _(_, _)),
    });
  return _.isIdle
    ? (0, _.jsx)(_, {
        strDescription: ``,
        strTitle: _(`#Button_Share`),
        onCancel: _,
        onOK: () => _.mutate(),
        strOKButtonText: _(`#Button_Post`),
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(`img`, {
                      className: _,
                      src: _?.avatar_url,
                      alt: ``,
                      "data-miniprofile": `s` + _.steamid,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _(_),
                      children: (0, _.jsx)(_, {
                        strPlaceholder: _(
                          `#EventDisplay_Share_OnMyStatus_Placeholder`,
                        ),
                        fnGetCurText: () => _,
                        fnOnTextChange: (_) => _(_.currentTarget.value),
                        fnSetText: _,
                        emoticonStore: _,
                        bSupportHTMLImport: !1,
                        showFormatHelp: `UserStatusPublished`,
                        limitBBCode: _,
                        classNameForTextArea: _,
                        bEmbeddedInDialog: !0,
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    text: _,
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    : (0, _.jsx)(_, {
        strDescription: ``,
        strTitle: _(`#Button_Share`),
        onCancel: _,
        onOK: _,
        bAlertDialog: !0,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _.isPending &&
                  (0, _.jsx)(_, {
                    position: `center`,
                  }),
                _.isSuccess &&
                  (0, _.jsx)(`div`, {
                    children: _(`#EventDisplay_Share_Success`),
                  }),
                _.isError &&
                  (0, _.jsx)(`div`, {
                    children:
                      _(`#EventDisplay_Share_Failure`) +
                      `

` +
                      _.error.message,
                  }),
                _.isSuccess &&
                  (0, _.jsx)(`a`, {
                    href: _ + `home`,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    rel: `noreferrer`,
                    children: _(`#EventDisplay_Share_OpenActivityFeed`),
                  }),
              ],
            }),
          ],
        }),
      });
}

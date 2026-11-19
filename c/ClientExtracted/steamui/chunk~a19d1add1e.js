import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
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
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _, _, _, _, _ } from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { _ } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { _, _ } from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { _ } from "./chunk~cbbb6ae37c.js?contenthash=B4MrjhKD";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { _ } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { _, _, _ } from "./library.js?contenthash=CVZWwsCP";
import { _, _, _ } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import { _ } from "./chunk~b980797e15.js?contenthash=DrhO3T5K";
import { _, _, _, _, _, _ } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { _, _ } from "./chunk~a7c5e71e12.js?contenthash=DtWBhhpP";
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
  _,
} from "./chunk~af1574091f.js?contenthash=Dpj-LM_5";
var _ = _(_());
function _(_, _) {
  return _
    ? _.COMMUNITY_CDN_URL + `economy/emoticonlarge/` + _
    : _.COMMUNITY_CDN_URL + `economy/emoticon/` + _;
}
var _ = 50,
  _ = 604800,
  _ = class _ {
    constructor() {
      _(this);
    }
    m_bEmoticonListRequested = !1;
    m_bInitialized = !1;
    m_rtMostRecentEmoticon = void 0;
    static sm_EmoticonRegex = RegExp(`ː([a-zA-Z0-9_\\-]+)ː`, `g`);
    static sm_UnvalidatedEmoticonRegex = RegExp(
      `(?:ː|:)([a-zA-Z0-9_\\-]+)(?:ː|:)`,
      `g`,
    );
    m_rgEmoticons = [];
    m_setEmoticonOwned = new Set();
    m_rgFlairs = [];
    m_rgRecentEmoticons = void 0;
    m_rgStickers = [];
    m_rgRecentStickers = void 0;
    m_rgEffects = [];
    m_rtLastStickerOrEffect = -(2 ** 53 - 1);
    m_emoticonTrackerCallback = null;
    m_stickerTrackerCallback = null;
    static GetEmoticonURL(_, _) {
      return _(_, _);
    }
    static GetEmoticonReplaceRegex() {
      return _.sm_EmoticonRegex;
    }
    static GetUnvalidatedEmoticonReplaceRegex() {
      return _.sm_UnvalidatedEmoticonRegex;
    }
    static BEmoticonFilterMatch(_, _) {
      return `:${_.name_normalized || _.name}:`.indexOf(_.toLowerCase()) !== -1;
    }
    static FilterEmoticons(_, _) {
      return !_ || _ === `:`
        ? _
        : _.filter((_) => _.BEmoticonFilterMatch(_, _));
    }
    static BStickerFilterMatch(_, _) {
      return _.name.toLowerCase().indexOf(_.toLowerCase()) > -1;
    }
    static FilterStickers(_, _) {
      return _ ? _.filter((_) => _.BStickerFilterMatch(_, _)) : _;
    }
    SearchEmoticons(_, _ = 25, _ = !0) {
      this.UpdateEmoticonList();
      function _(_) {
        return _.name_normalized || _.name;
      }
      _ = _.toLocaleLowerCase();
      let _ = this.recent_emoticons.filter((_) => !_ || _(_).startsWith(_)),
        _ = this.recent_emoticons.filter((_) => !_ && _(_).indexOf(_) !== -1),
        _ = this.m_rgEmoticons.filter((_) => !_ || _(_).startsWith(_)),
        _ = this.m_rgEmoticons.filter((_) => !_ && _(_).indexOf(_) !== -1),
        _ = new Set(),
        _ = [];
      function _(_, _, _) {
        return _.length >= _
          ? !1
          : (_.has(_) ||
              (_.add(_),
              _.push({
                name: _(_),
                recent: _,
                new: _,
              })),
            !0);
      }
      function _(_, _, _) {
        for (let _ of _) if (!_(_, _, _(_))) break;
      }
      return (
        _(_, !0, (_) => !(_.last_used || !_.time_received)),
        _(_, !1, () => !1),
        _(_, !0, (_) => !(_.last_used || !_.time_received)),
        _(_, !1, () => !1),
        _
      );
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    async BAwaitInitialized() {
      return (
        this.m_bInitialized ||
          (this.UpdateEmoticonList(), await _(() => this.m_bInitialized)),
        this.m_bInitialized
      );
    }
    GetTimeReceivedNewestEmoticon() {
      return (this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon);
    }
    GetTimeReceivedForStickerOrEffect() {
      return this.m_rtLastStickerOrEffect;
    }
    UpdateEmoticonList() {
      this.m_bInitialized || this.RequestEmoticonList();
    }
    get emoticon_list() {
      return (this.UpdateEmoticonList(), this.m_rgEmoticons);
    }
    BHasEmoticon(_) {
      return this.m_setEmoticonOwned.has(_);
    }
    get flair_list() {
      return (this.UpdateEmoticonList(), this.m_rgFlairs);
    }
    GetStickerList() {
      return this.m_rgStickers;
    }
    GetEffectList() {
      return this.m_rgEffects;
    }
    GetFlairListByGroupID(_) {
      return this.m_rgFlairs.filter((_) => _.flairGroupID === _);
    }
    get recent_emoticons() {
      return this.m_rgRecentEmoticons ?? this.BuildRecentEmoticonList();
    }
    get recent_stickers() {
      return this.m_rgRecentStickers ?? this.BuildRecentStickerList();
    }
    SetEmoticonTrackerCallback(_) {
      this.m_emoticonTrackerCallback = _;
    }
    SetStickerTrackerCallback(_) {
      this.m_stickerTrackerCallback = _;
    }
    TrackEmoticonUsage(_, _) {
      if (!this.m_bInitialized) return;
      this.m_emoticonTrackerCallback && this.m_emoticonTrackerCallback(_, _);
      let _ = new Map(),
        _ = /\[emoticon\]([^[]*)/g,
        _;
      for (; (_ = _.exec(_));) {
        let _ = _.get(_[1]) || 0;
        _.set(_[1], _ + 1);
      }
      let _ = !1;
      if (_.size) {
        if (this.m_rgRecentEmoticons !== void 0)
          for (let _ of this.m_rgRecentEmoticons) {
            let _ = _.get(_.name);
            _ !== void 0 &&
              ((_.last_used = _),
              (_.use_count = (_.use_count ?? 0) + _),
              _.delete(_.name),
              _.time_received && ((_ = !0), delete _.time_received));
          }
        if (_.size)
          for (let _ of this.m_rgEmoticons) {
            let _ = _.get(_.name);
            _ !== void 0 &&
              ((_.last_used = _),
              (_.use_count = (_.use_count ?? 0) + _),
              delete _.time_received,
              this.m_rgRecentEmoticons !== void 0 &&
                this.m_rgRecentEmoticons.push(_));
          }
        if (
          this.m_rgRecentEmoticons !== void 0 &&
          (this.BuildRecentEmoticonList(), _)
        ) {
          this.m_rtMostRecentEmoticon = void 0;
          for (let _ of this.m_rgRecentEmoticons)
            !_.last_used &&
              _.time_received &&
              (!this.m_rtMostRecentEmoticon ||
                _.time_received > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = _.time_received);
        }
      }
    }
    TrackStickerUsage(_, _) {
      if (!this.m_bInitialized) return;
      this.m_stickerTrackerCallback && this.m_stickerTrackerCallback(_, _);
      let _ = this.m_rgStickers.find(({ name: _ }) => _ === _);
      _ &&
        ((_.last_used = _),
        (_.use_count = (_.use_count ?? 0) + 1),
        delete _.time_received,
        this.BuildRecentStickerList());
    }
    RequestEmoticonList() {
      !this.m_bEmoticonListRequested &&
        this.BTransportReady() &&
        ((this.m_bEmoticonListRequested = !0),
        this.RequestEmoticonListInternal());
    }
    BuildRecentEmoticonList() {
      return (
        (this.m_rgRecentEmoticons = this.BuildRecentList(this.m_rgEmoticons)),
        this.m_rgRecentEmoticons
      );
    }
    BuildRecentStickerList() {
      return (
        (this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers)),
        this.m_rgRecentStickers
      );
    }
    BuildRecentList(_) {
      let _ = this.GetServerTime() - _,
        _ = _.filter(({ last_used: _, time_received: _ }) => _ || (_ && _ > _));
      return (
        _.sort(
          (_, _) =>
            (_.last_used || _.time_received || 0) -
            (_.last_used || _.time_received || 0),
        ),
        _.slice(0, _)
      );
    }
    OnEmoticonListReceived(_) {
      ((this.m_rgFlairs = []),
        (this.m_rgEmoticons = []),
        (this.m_rgRecentEmoticons = void 0),
        (this.m_rtMostRecentEmoticon = void 0));
      let _ = this.GetServerTime() - _;
      for (let _ of _) {
        let _ = _.name;
        if (_.startsWith(`^`)) {
          let _ = _.match(new RegExp(/:(.*):/)),
            _ = _.match(new RegExp(/\^(.*)\^/));
          _ &&
            _ &&
            this.m_rgFlairs.push({
              name: _[1],
              flairGroupID: _[1],
            });
        } else {
          let _ = _.time_received;
          (!_.last_used && _ && _ > _
            ? (!this.m_rtMostRecentEmoticon ||
                _ > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = _)
            : delete _.time_received,
            this.m_rgEmoticons.push(_));
        }
      }
      ((this.m_setEmoticonOwned = new Set(
        this.m_rgEmoticons.map((_) => _.name_normalized || _.name),
      )),
        (this.m_bInitialized = !0),
        (this.m_bEmoticonListRequested = !1));
    }
  };
(_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_rtMostRecentEmoticon`, void 0),
  _([_], _.prototype, `m_rtLastStickerOrEffect`, void 0),
  _([_], _.prototype, `TrackEmoticonUsage`, null));
var _ = class {
    reactNodes = [];
    AppendText(_, _ = !1) {
      _.length &&
        (_
          ? this.reactNodes.push(
              _.createElement(
                `span`,
                {
                  "data-copytext": ``,
                  "data-copystyle": `merge-adjacent`,
                  "bbcode-text": _,
                },
                _,
              ),
            )
          : this.reactNodes.push(_));
    }
    AppendNode(_) {
      this.reactNodes.push(_);
    }
    GetElements() {
      return this.reactNodes;
    }
  },
  _ = class {
    m_decoratedAccumulator;
    constructor(_) {
      (_(_, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = _));
    }
    AppendText(_, _ = !1) {
      this.m_decoratedAccumulator.AppendText(_, _);
    }
    AppendNode(_) {
      this.m_decoratedAccumulator.AppendNode(_);
    }
    GetElements() {
      return this.m_decoratedAccumulator.GetElements();
    }
  },
  _ = class extends _ {
    constructor(_) {
      super(_);
    }
    AppendText(_) {
      let _ = _,
        _ = [];
      for (
        let _ = _.indexOf(`
`);
        _ !== -1;
        _ = _.indexOf(`
`)
      )
        (_.push(_.substr(0, _)),
          _.push(_.createElement(`br`)),
          (_ = _.substr(_ + 1)));
      (_.length && _.push(_),
        _.forEach((_) => {
          super.AppendNode(_);
        }));
    }
  },
  _ = class extends _ {
    m_renderingLanguage;
    constructor(_, _, _) {
      (super(_, _ ?? (() => new _())),
        (this.m_renderingLanguage = typeof _ == `string` ? _(_) : _));
    }
    UpdateOverrideLanguage(_) {
      this.m_renderingLanguage = _;
    }
    ParseBBCode(_, _, _ = !0) {
      let _ = 0,
        _ = this.Parse(
          _,
          (_, _, ..._) =>
            _.createElement(
              _,
              {
                ..._,
                context: _,
                language: this.m_renderingLanguage,
                key: `bbnode_${_++}`,
              },
              ..._,
            ),
          _,
        );
      return _.length > 1
        ? _.createElement(_.Fragment, null, ..._)
        : _.length == 1
          ? _[0]
          : null;
    }
  },
  _ = _();
function _(_) {
  let { text: _ = ``, style: _, children: _ } = _;
  if (_ == null)
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _;
  if (
    ((_ =
      _ instanceof Array
        ? _.map((_) => (_ ? _.toString() : ``)).filter((_) => _.length > 0)
            .join(`
`)
        : _.toString()),
    _.Children.count(_) == 1)
  ) {
    let _ = _.Children.only(_);
    return _.cloneElement(_, {
      "data-copystyle": _,
      "data-copytext": _,
    });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${_} copytext=${_}`,
    ),
    (0, _.jsx)(_.Fragment, {
      children: _,
    })
  );
}
function _(_) {
  let _ = _.cloneContents(),
    _ = ``,
    _ = ``,
    _ = !1,
    _ = (_.querySelector(`[data-activechat=true]`) || _).querySelectorAll(
      `[data-copytext]`,
    ),
    _ = Array.from(_).map((_) => _.getAttribute(`data-copystyle`) || `msg`);
  for (let _ = 0; _ < _.length; ++_) {
    let _ = _[_],
      _ = _[_];
    if (_ + 1 < _.length && _(_, _[_ + 1])) continue;
    let _ = _.tagName.toLowerCase(),
      _ = _.includes(`block`),
      _ = _.includes(`timestamp`),
      _ = _.includes(`server`),
      _ = _.includes(`invite`),
      _ = _.includes(`emote`),
      _ = _.includes(`no-prefix`),
      _ = _.includes(`no-suffix`),
      _ = _.includes(`allow-embedded-newlines`),
      _ = _.includes(`block-continue`),
      _ = _.includes(`merge-adjacent`),
      _ = _.includes(`force-display`),
      _ = _.includes(`prepend-innertext`),
      _ = _.includes(`append-innertext`),
      _ = _.includes(`prepend-newline`),
      _ = _.includes(`append-newline`),
      _ = _.includes(`speaker`);
    if (!_) {
      let _ = _.match(/img|iframe/) != null,
        _ = _.querySelector(`img,iframe`) != null;
      if (!_.innerText && !_ && !_) continue;
    }
    (_ &&
      (_ > 0 && _[_ - 1].includes(`merge-adjacent`) && (_ = !0),
      _ + 1 < _.length && _[_ + 1].includes(`merge-adjacent`) && (_ = !0)),
      _ && (_ = !0));
    let _ = ``;
    !_ && !_ && !_ && !_ && !_
      ? (_ && (_ += `	`),
        _.includes(`msg`) && _ && (_ = !0),
        _.includes(`block`) && !_ && (_ = !0))
      : (_.length != 0 &&
          (_ += `
`),
        (_ || _) && (_ += `		`));
    let _ = _.getAttribute(`data-copytext`) ?? ``;
    (_.length == 0
      ? (_ = _.innerText)
      : _ && _.innerText.length > 0
        ? (_ = `${_.innerText}${
            _.includes(`-with-newline`)
              ? `
`
              : ` `
          }${_}`)
        : _ &&
          _.innerText.length > 0 &&
          (_ += `${
            _.includes(`-with-newline`)
              ? `
`
              : ` `
          }${_.innerText}`),
      _.length != 0 &&
        (_ &&
          (_ += `
`),
        _ || (_ += _),
        (_ += _
          ? _
          : _.replace(
              /\n/g,
              `
` + _,
            )),
        _ ||
          (_ += `
`),
        _ &&
          (_ += `
`)),
      (_ = _));
  }
  if (_.length != 0) return _;
}
function _(_) {
  let _ = _(_);
  _ != null && _(_);
}
function _(_) {
  let _ = document.createRange();
  (_.selectNode(_), _(_));
}
var _ = `pvP8JT4e7EA-`,
  _ = `FcUxYTJ41iw-`,
  _ = `CVH0kQ-5qJ4-`,
  _ = `-OdMBhmRPrM-`,
  _ = `ht2q6zu-Yn8-`,
  _ = `kzKCSSWaRZ4-`,
  _ = `KRQYA30hbUE-`,
  _ = `_1zsmA-mI3cU-`,
  _ = `_4X5-n9MaD8g-`;
function _(_, _, _ = !1) {
  return `${_}economy/sticker${_ ? `static` : ``}/${encodeURIComponent(_)}`;
}
var _ = `_6Ymd3Ej4NCU-`,
  _ = `nnMTzvpAu6Y-`,
  _ = `plDm7MqblvA-`,
  _ = `_0SYoz2hcxOY-`,
  _ = `_6gRC1q99lWw-`,
  _ = `a1l1nhz8GFU-`,
  _ = `wfpm6FahiQY-`,
  _ = `G30RxXBSXck-`,
  _ = `Mw7bdt52AuY-`,
  _ = `_0ZS8IEfJKto-`,
  _ = `R-BER3-p7c8-`,
  _ = `nCS2TzxRijY-`,
  _ = class extends _.Component {
    constructor(_) {
      (super(_),
        (this.state = {
          activeIndex: _.initialActiveIndex || 0,
        }));
    }
    render() {
      let { config: _ } = this.props,
        { activeIndex: _ } = this.state,
        _ = _[_],
        _ = _ ? _.renderContent() : null,
        _ = _.length > 1,
        _ = _
          ? ({ detail: { button: _ } }) => {
              _ === _.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : _ === _.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      _.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, _.jsxs)(_, {
        className: _,
        onButtonDown: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              children: this.RenderTabs(),
            }),
          _,
        ],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: _ }, _) => {
        let _ = this.state.activeIndex === _;
        return (0, _.jsx)(
          _,
          {
            active: _,
            onClick: () =>
              this.setState({
                activeIndex: _,
              }),
            children: _(_),
          },
          _,
        );
      });
    }
  };
function _(_) {
  return (0, _.jsx)(_, {
    className: _,
    "flow-children": `row`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { active: _, children: _, onClick: _ } = _;
  return (0, _.jsx)(_, {
    className: _(_, _ && `f-iRFuUHuSo-`),
    focusClassName: _,
    onActivate: _,
    children: (0, _.jsx)(`div`, {
      className: _(_, _ && `f-iRFuUHuSo-`),
      children: _,
    }),
  });
}
function _(_) {
  let {
      items: _,
      renderItem: _,
      onItemSelect: _,
      keyExtractor: _,
      renderEmpty: _,
    } = _,
    _ = _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          className: _,
          onActivate: () => _(_[_]),
          autoFocus: _ === 0,
          focusClassName: _,
          children: _(_[_]),
        },
        _(_),
      ),
    );
  return (
    _.length === 0 && _ && (_ = _()),
    (0, _.jsx)(_, {
      "flow-children": `grid`,
      className: _,
      children: _,
    })
  );
}
function _(_) {
  let { title: _, onFilterChange: _, filter: _, onSubmit: _, ..._ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          title: _,
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        value: _,
        onChange: _,
        onSubmit: _,
      }),
    ],
  });
}
function _(_) {
  let { onFilterChange: _, filter: _, sections: _, title: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `Zcgr0x6gQMc-`,
              children: _,
            }),
          _.map(({ title: _, ..._ }) =>
            (0, _.jsx)(
              _,
              {
                title: _,
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              },
              _,
            ),
          ),
        ],
      }),
      (0, _.jsx)(_, {
        value: _,
        onChange: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.title,
      }),
      (0, _.jsx)(`div`, {
        className: void 0,
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let { value: _, onChange: _, onSubmit: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      type: `text`,
      placeholder: _(`#AddonPicker_Search`),
      className: _,
      value: _,
      onChange: (_) => _(_.target.value),
      onSubmit: _,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    ..._,
  });
}
var _ = `EYdF9T-t7r0-`,
  _ = `GlOJIpYSKE4-`,
  _ = `JQFjcVsL4SA-`,
  _ = `MHuFPh5V6r4-`,
  _ = `Gwiqr5pL1cE-`,
  _ = `w0e9THby0ZM-`,
  _ = `_4q--1VsTk5U-`,
  _ = `_669DaDTMhYs-`,
  _ = `dohGHt1ixUc-`,
  _ = `C9qi0C7EUeo-`,
  _ = `_3XkAznD5HIU-`,
  _ = `VoTYjMrv1JU-`,
  _ = `iiVnY9Z6ikk-`,
  _ = `KB63E0Y-xPo-`,
  _ = `_7tqUEqEzFXI-`;
function _(_) {
  let { emoticon: _, large: _ } = _,
    [_, _] = _(),
    [_, _] = _.useState(null),
    _ = `:${_}:`,
    _ = _(_, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        text: _,
        style: `merge-adjacent`,
        children: (0, _.jsx)(`img`, {
          ..._,
          src: _,
          className: _(_, _ ? _ : void 0),
          "data-emoticon": _,
          alt: _,
          ref: _,
        }),
      }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          target: _,
          emoticon: _,
        }),
    ],
  });
}
function _(_) {
  let { target: _, emoticon: _ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    target: _,
    title: `:${_}:`,
    subtitle: _ && _.app_name ? _.app_name : void 0,
    children: (0, _.jsx)(_, {
      emoticon: _,
      large: !0,
    }),
  });
}
function _(_) {
  return _({
    queryKey: [`EmoticonHover`, _],
    queryFn: async () => {
      let _ = `${_.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(_)}?l=${encodeURIComponent(_.LANGUAGE)}&origin=${self.origin}`,
        _ = await fetch(_);
      if (_.status != 200)
        throw `Error fetching emoticon: ${_.status} ${_.statusText}`;
      return await _.json();
    },
  });
}
var _ = ({ target: _, title: _, subtitle: _, children: _ }) =>
    (0, _.jsxs)(_, {
      target: _,
      style: {
        zIndex: 1700,
      },
      className: _,
      children: [
        _,
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children:
                _ ||
                (0, _.jsx)(`span`, {
                  children: `\xA0`,
                }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children:
                _ ||
                (0, _.jsx)(`span`, {
                  children: `\xA0`,
                }),
            }),
          ],
        }),
      ],
    }),
  _ = 1e3;
function _(_) {
  return _.recent_emoticons;
}
function _(_) {
  return _.recent_stickers;
}
function _(_) {
  return _(_).length + _(_).length > 0;
}
function _(_) {
  let [_, _] = (0, _.useState)(_.is_initialized);
  return (
    (0, _.useEffect)(() => {
      if (!_.is_initialized) {
        _.UpdateEmoticonList();
        let _ = _(
          () => _.is_initialized,
          () => _(_.is_initialized),
        );
        return () => _();
      }
      return () => {};
    }, [_]),
    _
  );
}
var _ = _((_) => {
    let {
      emoticonStore: _,
      roomEffectSettings: _,
      strFlairGroupID: _,
      onEmoticonSelected: _,
      onRoomEffectSelected: _,
      onStickerSelected: _,
    } = _;
    _(_);
    let _ = [];
    return (
      _(_) &&
        _.push({
          renderTab: (_) =>
            (0, _.jsx)(`span`, {
              title: _(`#AddonPicker_RecentlyUsed`),
              className: _(_, _, _ && void 0),
              children: (0, _.jsx)(_, {}),
            }),
          renderContent: () =>
            (0, _.jsx)(_, {
              store: _,
              onEmoticonSelect: (_) => _(_.name),
              onStickerSelect: (_) => _(_.name),
              flairGroupID: _,
            }),
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          config: [
            ..._,
            {
              renderTab: (_) =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: _(_, _ && void 0),
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: _,
                  onItemSelect: (_) => _(_.name),
                  flairGroupID: _,
                }),
            },
            {
              renderTab: (_) =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Stickers`),
                  className: _(_, _ && void 0),
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: _,
                  onItemSelect: (_) => _(_.name),
                }),
            },
            {
              renderTab: (_) =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_RoomEffects`),
                  className: _(_, _ && void 0),
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: _,
                  effectSettings: _,
                  onItemSelect: (_) => _(_.name),
                }),
            },
          ],
        }),
      })
    );
  }),
  _ = class extends _.Component {
    m_disposeEmoticonStore;
    constructor(_) {
      (super(_),
        (this.state = {
          strSearchText: ``,
        }));
      let _ = this.props.emoticonStore;
      _.is_initialized ||
        (_.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = _(
          () => _.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      let {
          emoticonStore: _,
          onEmoticonSelected: _,
          onStickerSelected: _,
          strFlairGroupID: _,
        } = this.props,
        _ = [];
      return (
        _(_) &&
          _.push({
            renderTab: (_) =>
              (0, _.jsx)(`span`, {
                title: _(`#AddonPicker_RecentlyUsed`),
                className: _(_, _, _ && void 0),
                children: (0, _.jsx)(_, {}),
              }),
            renderContent: () =>
              (0, _.jsx)(_, {
                store: _,
                onEmoticonSelect: (_) => _(_.name),
                onStickerSelect: (_) => _(_.name),
                flairGroupID: _,
              }),
          }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            config: [
              ..._,
              {
                renderTab: (_) =>
                  (0, _.jsx)(`span`, {
                    title: _(`#AddonPicker_Emoticons`),
                    className: _(_, _ && void 0),
                    children: (0, _.jsx)(_, {}),
                  }),
                renderContent: () =>
                  (0, _.jsx)(_, {
                    store: _,
                    onItemSelect: (_) => _(_.name),
                    flairGroupID: _,
                  }),
              },
              {
                renderTab: (_) =>
                  (0, _.jsx)(`span`, {
                    title: _(`#AddonPicker_Stickers`),
                    className: _(_, _ && void 0),
                    children: (0, _.jsx)(_, {}),
                  }),
                renderContent: () =>
                  (0, _.jsx)(_, {
                    store: _,
                    onItemSelect: (_) => _(_.name),
                  }),
              },
            ],
          }),
        })
      );
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
    m_disposeEmoticonStore;
    constructor(_) {
      (super(_),
        (this.state = {
          strSearchText: ``,
        }));
      let _ = this.props.emoticonStore;
      _.is_initialized ||
        (_.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = _(
          () => _.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          config: [
            {
              renderTab: () =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: _,
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: this.props.emoticonStore,
                  onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  _ = class extends _.Component {
    m_disposeEmoticonStore;
    constructor(_) {
      (super(_),
        (this.state = {
          strSearchText: ``,
        }));
      let _ = this.props.emoticonStore;
      _.is_initialized ||
        (_.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = _(
          () => _.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          config: [
            {
              renderTab: () =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: _,
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: this.props.emoticonStore,
                  onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onEmoticonSelect: _, onStickerSelect: _ } = this.props,
        { filter: _ } = this.state,
        _ = [];
      return (
        _(_) &&
          _.push({
            title: _(`#AddonPicker_RecentEmoticons`),
            items: _.FilterEmoticons(_(_), _),
            onItemSelect: _,
            renderItem: (_) =>
              (0, _.jsx)(_, {
                emoticon: _,
              }),
            keyExtractor: (_) => _.name,
            renderEmpty: () =>
              (0, _.jsx)(_, {
                children: _
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Emoticons`)),
              }),
          }),
        _(_).length &&
          _.push({
            title: _(`#AddonPicker_RecentStickers`),
            items: _.FilterStickers(_(_), _),
            onItemSelect: _,
            renderItem: (_) =>
              (0, _.jsx)(_, {
                sticker: _,
              }),
            keyExtractor: ({ name: _ }) => _,
            renderEmpty: () =>
              (0, _.jsx)(_, {
                children: _
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, _.jsx)(_, {
          onFilterChange: (_) =>
            this.setState({
              filter: _,
            }),
          filter: _,
          sections: _,
        })
      );
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
        { filter: _ } = this.state,
        _ = !_ && _ ? _.GetFlairListByGroupID(_) : _.emoticon_list,
        _ = _.FilterEmoticons(_, _).slice(0, _);
      return (0, _.jsx)(_, {
        title: _(`#AddonPicker_Emoticons`),
        items: _,
        onItemSelect: _,
        renderItem: (_) =>
          (0, _.jsx)(_, {
            emoticon: _,
          }),
        keyExtractor: (_) => _.name,
        onFilterChange: (_) =>
          this.setState({
            filter: _,
          }),
        filter: _,
        onSubmit: () => _(_[0]),
        renderEmpty: () =>
          _
            ? (0, _.jsx)(_, {
                children: _(`#AddonPicker_NoResults`),
              })
            : (0, _.jsx)(_, {}),
      });
    }
  };
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _(`#AddonPicker_NoneOwned`, _(`#AddonPicker_Emoticons`)),
      }),
      (0, _.jsx)(_, {
        children: _(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}points/shop/c/emoticons`,
            children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}market`,
            children: _(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onItemSelect: _ } = this.props,
        { filter: _ } = this.state,
        _ = _.FilterStickers(_.GetStickerList(), _);
      return (0, _.jsx)(_, {
        title: _(`#EmoticonPicker_StickerHeading`),
        items: _,
        onItemSelect: _,
        renderItem: (_) =>
          (0, _.jsx)(_, {
            sticker: _,
          }),
        keyExtractor: ({ name: _ }) => _,
        onFilterChange: (_) =>
          this.setState({
            filter: _,
          }),
        filter: _,
        onSubmit: () => _(_[0]),
        renderEmpty: () =>
          _
            ? (0, _.jsx)(_, {
                children: _(`#AddonPicker_NoResults`),
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_NoneOwned`,
                      _(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, _.jsx)(_, {
                        href: `${_.STORE_BASE_URL}points/shop/c/stickers`,
                        children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, effectSettings: _, onItemSelect: _ } = this.props,
        { filter: _ } = this.state,
        _ = _.GetEffectList().filter(({ name: _ }) => _.indexOf(_) > -1);
      return (0, _.jsx)(_, {
        title: _(`#EmoticonPicker_EffectHeading`),
        items: _,
        onItemSelect: _,
        renderItem: (_) =>
          (0, _.jsx)(_, {
            effect: _,
            roomEffectSettings: _,
          }),
        keyExtractor: ({ name: _ }) => _,
        onFilterChange: (_) =>
          this.setState({
            filter: _,
          }),
        filter: _,
        onSubmit: () => _(_[0]),
        renderEmpty: () =>
          _
            ? (0, _.jsx)(_, {
                children: _(`#AddonPicker_NoResults`),
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_NoneOwned`,
                      _(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, _.jsx)(_, {
                        href: `${_.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
        { filter: _ } = this.state,
        _ = [];
      return (
        _(_).length &&
          _.push({
            title: _(`#AddonPicker_RecentEmoticons`),
            items: _.FilterEmoticons(_(_), _),
            onItemSelect: _,
            renderItem: (_) =>
              (0, _.jsx)(_, {
                emoticon: _,
              }),
            keyExtractor: (_) => _.name,
            renderEmpty: () =>
              (0, _.jsx)(_, {
                children: _
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, _.jsx)(_, {
          onFilterChange: (_) =>
            this.setState({
              filter: _,
            }),
          filter: _,
          sections: [
            ..._,
            {
              title: _(`#AddonPicker_AllEmoticons`),
              items: _.FilterStickers(_.emoticon_list, _).slice(0, _),
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  emoticon: _,
                }),
              keyExtractor: (_) => _.name,
              renderEmpty: () =>
                _
                  ? (0, _.jsx)(_, {
                      children: _(`#AddonPicker_NoResults`),
                    })
                  : (0, _.jsx)(_, {}),
            },
          ],
        })
      );
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
  state = {
    filter: ``,
  };
  render() {
    let { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
      { filter: _ } = this.state;
    return (0, _.jsx)(_, {
      onFilterChange: (_) =>
        this.setState({
          filter: _,
        }),
      filter: _,
      sections: [
        {
          title: _(`#ChatEntryButton_Flair`),
          items: _.FilterStickers(_.GetFlairListByGroupID(_), _),
          onItemSelect: _,
          renderItem: (_) =>
            (0, _.jsx)(_, {
              emoticon: _,
            }),
          keyExtractor: (_) => _.name,
          renderEmpty: () =>
            _
              ? (0, _.jsx)(_, {
                  children: _(`#AddonPicker_NoResults`),
                })
              : (0, _.jsx)(_, {}),
        },
      ],
    });
  }
};
_ = _([_], _);
var _ = (_) => {
    let { emoticon: _, large: _ } = _,
      _ = !_.last_used && _.time_received;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          emoticon: _.name,
          large: _,
        }),
        _ && (0, _.jsx)(_, {}),
      ],
    });
  },
  _ = class extends _.Component {
    state = {
      showHover: !1,
    };
    m_ref = _.createRef();
    render() {
      let { sticker: _, className: _, ..._ } = this.props,
        _ = _(_.COMMUNITY_CDN_URL, _.name);
      return (0, _.jsxs)(`div`, {
        ref: this.m_ref,
        className: _(_, _),
        onMouseOver: () =>
          this.setState({
            showHover: !0,
          }),
        onFocus: () =>
          this.setState({
            showHover: !0,
          }),
        onMouseLeave: () =>
          this.setState({
            showHover: !1,
          }),
        onBlur: () =>
          this.setState({
            showHover: !1,
          }),
        ..._,
        children: [
          (0, _.jsx)(`img`, {
            style: {
              width: `100%`,
            },
            src: _,
          }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, _.jsx)(_, {
              target: this.m_ref.current,
              sticker: _,
            }),
        ],
      });
    }
  },
  _ = _((_) => {
    let {
        target: _,
        sticker: { name: _, appid: _ },
      } = _,
      [_] = _(_, {});
    return (0, _.jsx)(_, {
      target: _,
      title: _,
      subtitle: _?.GetName(),
      children: (0, _.jsx)(`img`, {
        src: _(_.COMMUNITY_CDN_URL, _),
        className: _,
      }),
    });
  }),
  _ = class extends _.Component {
    state = {
      showHover: !1,
    };
    m_ref = _.createRef();
    render() {
      let { effect: _, roomEffectSettings: _, className: _, ..._ } = this.props,
        _ = _[_.name];
      return (0, _.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () =>
          this.setState({
            showHover: !0,
          }),
        onFocus: () =>
          this.setState({
            showHover: !0,
          }),
        onMouseLeave: () =>
          this.setState({
            showHover: !1,
          }),
        onBlur: () =>
          this.setState({
            showHover: !1,
          }),
        className: _(_, _),
        ..._,
        children: [
          _.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, _.jsx)(_, {
              target: this.m_ref.current,
              effect: _,
              roomEffectSettings: _,
            }),
        ],
      });
    }
  },
  _ = _((_) => {
    let {
        target: _,
        effect: { name: _, appid: _ },
        roomEffectSettings: _,
      } = _,
      _ = _[_],
      [_] = _(_, {});
    return (0, _.jsx)(_, {
      target: _,
      title: _,
      subtitle: _?.GetName(),
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.renderEffectIcon(),
      }),
    });
  });
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
    }),
  });
}
function _(_) {
  return _()
    ? (0, _.jsxs)(`svg`, {
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M21 29H22.1875V31H19L21 29Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M29 22.1875V21L31 19V22.1875H29Z`,
            fill: `currentColor`,
          }),
        ],
      })
    : (0, _.jsx)(`svg`, {
        viewBox: `0 0 59 59`,
        width: `32`,
        ..._,
        children: (0, _.jsx)(`switch`, {
          children: (0, _.jsx)(`g`, {
            children: (0, _.jsx)(`path`, {
              _: `M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z`,
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              fill: `#fff`,
            }),
          }),
        }),
      });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function _(_) {
  return _()
    ? (0, _.jsx)(`svg`, {
        width: `36`,
        height: `36`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z`,
          fill: `currentColor`,
        }),
      })
    : (0, _.jsx)(`svg`, {
        viewBox: `0 -8 60 60`,
        width: `32`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `#fff`,
        }),
      });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function _(_) {
  return _()
    ? (0, _.jsxs)(`svg`, {
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            _: `M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            _: `M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z`,
            fill: `currentColor`,
          }),
        ],
      })
    : (0, _.jsx)(`svg`, {
        viewBox: `0 0 60 38`,
        width: `32`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `#fff`,
        }),
      });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(`SVGIcon_Button SVGIcon_Clock`, _),
    version: `1.1`,
    _: `0px`,
    _: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var _ = 1576780700,
  _ = class extends _.Component {
    OnEmoticonClick(_) {
      let {
          emoticonStore: _,
          strFlairGroupID: _,
          SetUIDisplayPref: _,
          contextOptions: _,
          bShowChatAddons: _,
        } = this.props,
        {
          roomEffectSettings: _,
          onRoomEffectSelected: _,
          onStickerSelected: _,
        } = this.props,
        _ = null;
      if (
        ((_ =
          _ && _ && _ && _
            ? (0, _.jsx)(_, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (_) => this.props.OnEmoticonSelected(_, !1),
                roomEffectSettings: _,
                onRoomEffectSelected: _,
                onStickerSelected: _,
              })
            : _ && _.flair_list && _.GetFlairListByGroupID(_)?.length > 0
              ? (0, _.jsx)(_, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, _.jsx)(_, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        _(
          _,
          _,
          _ || {
            bOverlapHorizontal: !0,
            bPreferPopLeft: !0,
            bPreferPopTop: !0,
          },
        ),
        this.BHaveUnseenEmoticons() && _)
      ) {
        let _ = this.GetNewestIndicatorTime();
        ((!_ || _ < _) && (_ = _), _(`rtLastAckedNewEmoticons`, _));
      }
    }
    GetNewestIndicatorTime() {
      let _ = this.props.emoticonStore,
        _ = -(2 ** 53 - 1),
        _ = _.GetTimeReceivedNewestEmoticon();
      _ && (_ = _);
      let _ = _.GetTimeReceivedForStickerOrEffect();
      return ((_ = Math.max(_, _)), _ > -(2 ** 53 - 1) ? _ : void 0);
    }
    BHaveUnseenEmoticons() {
      let { rtLastAckedNewEmoticons: _ } = this.props,
        _ = this.GetNewestIndicatorTime();
      return !_ || _ < _ || (_ && (!_ || _ < _));
    }
    render() {
      let { disabled: _, className: _, ttip: _, useImg: _ } = this.props,
        _ = [_],
        _ = !1;
      return (
        _ ? _.push(`disabled`) : this.BHaveUnseenEmoticons() && (_ = !0),
        _ && _.push(`ttip`),
        _
          ? (0, _.jsx)(_, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: _(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, _.jsx)(_, {
                toolTipContent: _,
                children: (0, _.jsx)(`img`, {
                  src: this.props.useImg,
                  className: _(..._),
                  title: this.props.title || _(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (_.push(_, _),
            (0, _.jsx)(_, {
              className: _(..._),
              onOKActionDescription: _(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || _(`#ChatEntryButton_Emoticon`),
              disabled: _,
              children: (0, _.jsxs)(_, {
                toolTipContent: _,
                children: [
                  this.props.buttonIcon || (0, _.jsx)(_, {}),
                  _ && (0, _.jsx)(_, {}),
                ],
              }),
            }))
      );
    }
  };
(_([_], _.prototype, `OnEmoticonClick`, null), (_ = _([_], _)));
var _ = _;
function _(_) {
  return !(
    (!_(_.sPoster) && !_(_.sPoster)) ||
    (_.rgVideoSources && _.rgVideoSources.some((_) => !_(_.sURL))) ||
    (_.rgVideoTracks && _.rgVideoTracks.some((_) => !_(_.sURL)))
  );
}
var _ = class _ {
    m_bUserHasVolumePreference = !1;
    m_flVolumePreference = 0;
    BUserHasVolumePreference() {
      return this.m_bUserHasVolumePreference;
    }
    SetVolumePreference(_) {
      ((this.m_flVolumePreference = _), (this.m_bUserHasVolumePreference = !0));
    }
    GetVolumePreference() {
      return this.m_flVolumePreference;
    }
    BVolumePreferenceMuted() {
      return this.m_flVolumePreference < 0.001;
    }
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
  },
  _ = (0, _.forwardRef)(function (_, _) {
    let {
        video: _,
        bAutoPlay: _,
        bControls: _,
        bLoop: _,
        bMuted: _,
        className: _,
        mediaScale: _,
        flAspectRatio: _,
        onClick: _,
        altText: _,
      } = _,
      _ = (0, _.useMemo)(
        () =>
          !!_.rgVideoTracks?.some(
            (_) => _.sKind == `subtitles` || _.sKind == `captions`,
          ),
        [_.rgVideoTracks],
      ),
      [_, _] = _.useState(!1),
      _ = _();
    if (!_.rgVideoSources || !_.rgVideoSources.length) return null;
    let _ = _(_),
      _;
    (!_ || (_ && _.EUNIVERSE == 1)) && (_ = `anonymous`);
    let _ = _ || (_ && _.Get().BVolumePreferenceMuted()),
      _ = _.sPoster ? _(_.sPoster, _) : ``;
    return (0, _.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: _,
      muted: _,
      playsInline: !0,
      controls: _,
      poster: _,
      loop: _,
      crossOrigin: _,
      onVolumeChange: (_) => {
        let _ = _.target,
          _ = _.muted ? 0 : _.volume;
        _ && _.Get().SetVolumePreference(_);
      },
      onPlay: (_) => {
        let _ = _.target,
          _ = _.currentTime == 0,
          _ = _.Get().BUserHasVolumePreference();
        if ((_(!0), _)) {
          if (!_ && !_) {
            let _ = _.muted ? 0 : _.volume;
            _.Get().SetVolumePreference(_);
          } else
            _ &&
              ((_.volume = _.Get().GetVolumePreference()),
              (_.muted = _.Get().BVolumePreferenceMuted()));
        }
      },
      ref: _,
      className: _,
      onClick: _,
      "aria-label": _,
      style: {
        width: _ && _ >= 1 && _ < 100 ? `${_}%` : void 0,
        aspectRatio: _ || void 0,
      },
      children: [
        (0, _.jsx)(_, {
          rgVideoSources: _.rgVideoSources,
          strCacheBreakOrigin: _,
        }),
        (0, _.jsx)(_, {
          rgVideoTracks: _.rgVideoTracks,
          strCacheBreakOrigin: _,
        }),
      ],
    });
  });
function _() {
  let _ = window.location.href,
    _ = [
      _.STORE_BASE_URL,
      _.COMMUNITY_BASE_URL,
      _.PARTNER_BASE_URL,
      _.HELP_BASE_URL,
      _.STATS_BASE_URL,
      _.STORE_CHECKOUT_BASE_URL,
    ].find((_) => _ && _.startsWith(_));
  if (_) return _;
  try {
    return new URL(_).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function _(_, _) {
  if (_) {
    if (_(_)) return _;
    try {
      let _ = new URL(_);
      return (
        (_.search = (_.search ? _.search + `&` : `?`) + `origin=` + _),
        _.toString()
      );
    } catch {
      return _;
    }
  }
}
function _(_) {
  let { rgVideoSources: _, strCacheBreakOrigin: _ } = _;
  return _.filter((_) => !!_.sURL).map((_) =>
    (0, _.jsx)(
      `source`,
      {
        src: _(_.sURL, _),
        type: _.sFormat,
      },
      _.sURL,
    ),
  );
}
function _(_) {
  let { rgVideoTracks: _, strCacheBreakOrigin: _ } = _;
  return _
    ? _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            track: _,
            rgVideoTracks: _,
            strCacheBreakOrigin: _,
          },
          _,
        ),
      )
    : null;
}
function _(_) {
  let { track: _, rgVideoTracks: _, strCacheBreakOrigin: _ } = _,
    _ = _.eLanguage;
  if (_.EREALM == _.k_ESteamRealmChina) {
    if (_.IsELanguageValidInRealm(_, _.k_ESteamRealmChina))
      _ = _.GetELanguageFallback(_);
    else if (_ === 6) {
      if (_.find((_) => _.GetELanguageFallback(_.eLanguage) === _)) return null;
    } else return null;
  } else if (!_.IsELanguageValidInRealm(_, _.k_ESteamRealmGlobal)) return null;
  return (0, _.jsx)(`track`, {
    src: _(_.sURL, _),
    kind: _.sKind,
    default: _.bDefault,
    srcLang: _(_),
    label: _(_),
  });
}
var _ = _(_());
function _(_) {
  let _ = _(_, `poster`);
  _ &&= _(_);
  let _ = [];
  {
    let _ = _(_, `mp4`);
    _ &&
      _.push({
        sURL: _(_),
        sFormat: `video/mp4`,
      });
    let _ = _(_, `webm`);
    _ &&
      _.push({
        sURL: _(_),
        sFormat: `video/webm`,
      });
  }
  let _ = _(_.LANGUAGE),
    _ = _ != 0,
    _ = [];
  for (let _ = 0; _ < 32; _++) {
    let _ = _(_, `sub_` + _(_));
    _ &&
      _.push({
        sURL: _(_),
        eLanguage: _,
        sKind: `subtitles`,
        bDefault: _ && _ == _,
      });
    let _ = _(_, `cap_` + _(_));
    _ &&
      _.push({
        sURL: _(_),
        eLanguage: _,
        sKind: `captions`,
        bDefault: _ && _ == _,
      });
  }
  return {
    sPoster: _,
    rgVideoSources: _,
    rgVideoTracks: _,
  };
}
function _(_) {
  let _ = _(_.args);
  return (0, _.jsx)(_, {
    video: _,
    bAutoPlay: !0,
    bControls: !1,
    bLoop: !0,
  });
}
function _(_) {
  let _ = _(_.args),
    _ = _.children ? _.children.toString() : void 0;
  _ &&
    _.startsWith(`http`) &&
    _.rgVideoSources.push({
      sURL: _(_),
      sFormat: `video/webm`,
    });
  let _ = _(_.args, `autoplay`),
    _ = _ !== `0` && _ !== `off` && _ !== `false`,
    _ = _(_.args, `controls`),
    _ = _ !== `0` && _ !== `off` && _ !== `false`,
    _ = _(_.args, `loop`);
  return (0, _.jsx)(_, {
    video: _,
    bAutoPlay: _,
    bControls: _,
    bLoop: _ ? _ !== `0` && _ !== `off` && _ !== `false` : _,
  });
}
var _ = `m6bojdeQzBM-`,
  _ = `KNKcwZZR0so-`,
  _ = `OACV7AX319w-`,
  _ = `D7GTf0-swcc-`,
  _ = `L7AE1SvWgtA-`,
  _ = `_7iMZXddr1CI-`,
  _ = `sNG-BnwzjYs-`,
  _ = `maYcJlnc0JU-`,
  _ = `akuZJwBr6xc-`,
  _ = `ZfFIRgkpA2M-`,
  _ = {
    Box: _,
    Preview: _,
    Type: void 0,
  };
function _(_) {
  return (0, _.jsx)(`img`, {
    className: _,
    src: _.strURL || void 0,
    alt: _.strAlt ?? ``,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
var _ = {
  countrycodes: {
    countries: {
      _: `Afghanistan`,
      _: `Aland Islands`,
      _: `Albania`,
      _: `Algeria`,
      _: `American Samoa`,
      _: `Andorra`,
      _: `Angola`,
      _: `Anguilla`,
      _: `Antarctica`,
      _: `Antigua and Barbuda`,
      _: `Argentina`,
      _: `Armenia`,
      _: `Aruba`,
      _: `Australia`,
      _: `Austria`,
      _: `Azerbaijan`,
      _: `Bahamas`,
      _: `Bahrain`,
      _: `Bangladesh`,
      _: `Barbados`,
      _: `Belarus`,
      _: `Belgium`,
      _: `Belize`,
      _: `Benin`,
      _: `Bermuda`,
      _: `Bhutan`,
      _: `Bolivia`,
      _: `Bosnia and Herzegovina`,
      _: `Botswana`,
      _: `Bouvet Island`,
      _: `Brazil`,
      _: `British Indian Ocean Territory`,
      _: `Brunei Darussalam`,
      _: `Bulgaria`,
      _: `Burkina Faso`,
      _: `Burundi`,
      _: `Cambodia`,
      _: `Cameroon`,
      _: `Canada`,
      _: `Cabo Verde`,
      _: `Cayman Islands`,
      _: `Central African Republic`,
      _: `Chad`,
      _: `Chile`,
      _: `China`,
      _: `China`,
      _: `Christmas Island`,
      _: `Cocos (Keeling) Islands`,
      _: `Colombia`,
      _: `Comoros`,
      _: `Congo`,
      _: `Congo, the Democratic Republic of the`,
      _: `Cook Islands`,
      _: `Costa Rica`,
      _: `Cote d'Ivoire`,
      _: `Croatia`,
      _: `Cyprus`,
      _: `Czech Republic`,
      _: `Denmark`,
      _: `Djibouti`,
      _: `Dominica`,
      _: `Dominican Republic`,
      _: `Ecuador`,
      _: `Egypt`,
      _: `El Salvador`,
      _: `Equatorial Guinea`,
      _: `Eritrea`,
      _: `Estonia`,
      _: `Ethiopia`,
      _: `Falkland Islands (Malvinas)`,
      _: `Faroe Islands`,
      _: `Fiji`,
      _: `Finland`,
      _: `France`,
      _: `French Guiana`,
      _: `French Polynesia`,
      _: `French Southern Territories`,
      _: `Gabon`,
      _: `Gambia`,
      _: `Georgia`,
      _: `Germany`,
      _: `Ghana`,
      _: `Gibraltar`,
      _: `Greece`,
      _: `Greenland`,
      _: `Grenada`,
      _: `Guadeloupe`,
      _: `Guam`,
      _: `Guatemala`,
      _: `Guinea`,
      _: `Guinea-Bissau`,
      _: `Guernsey`,
      _: `Guyana`,
      _: `Haiti`,
      _: `Heard and Mc Donald Islands`,
      _: `Holy See(Vatican City State)`,
      _: `Honduras`,
      _: `Hong Kong`,
      _: `Hungary`,
      _: `Iceland`,
      _: `India`,
      _: `Indonesia`,
      _: `Iraq`,
      _: `Ireland`,
      _: `Isle of Man`,
      _: `Israel`,
      _: `Italy`,
      _: `Jamaica`,
      _: `Japan`,
      _: `Jersey`,
      _: `Jordan`,
      _: `Kazakhstan`,
      _: `Kenya`,
      _: `Kiribati`,
      _: `Korea, Republic of`,
      _: `Kuwait`,
      _: `Kyrgyzstan`,
      _: `Lao People's Democratic Republic`,
      _: `Latvia`,
      _: `Lebanon`,
      _: `Lesotho`,
      _: `Liberia`,
      _: `Liechtenstein`,
      _: `Lithuania`,
      _: `Luxembourg`,
      _: `Libya`,
      _: `Macau`,
      _: `North Macedonia, Republic of`,
      _: `Madagascar`,
      _: `Malawi`,
      _: `Malaysia`,
      _: `Maldives`,
      _: `Mali`,
      _: `Malta`,
      _: `Marshall Islands`,
      _: `Martinique`,
      _: `Mauritania`,
      _: `Mauritius`,
      _: `Mayotte`,
      _: `Mexico`,
      _: `Micronesia, Federated States of`,
      _: `Moldova, Republic of`,
      _: `Monaco`,
      _: `Mongolia`,
      _: `Montenegro`,
      _: `Montserrat`,
      _: `Morocco`,
      _: `Mozambique`,
      _: `Myanmar`,
      _: `Namibia`,
      _: `Nauru`,
      _: `Nepal`,
      _: `Netherlands`,
      _: `Netherlands Antilles`,
      _: `New Caledonia`,
      _: `New Zealand`,
      _: `Nicaragua`,
      _: `Niger`,
      _: `Nigeria`,
      _: `Niue`,
      _: `Norfolk Island`,
      _: `Northern Mariana Islands`,
      _: `Norway`,
      _: `Oman`,
      _: `Pakistan`,
      _: `Palau`,
      _: `Palestinian Territory, Occupied`,
      _: `Panama`,
      _: `Papua New Guinea`,
      _: `Paraguay`,
      _: `Peru`,
      _: `Philippines`,
      _: `Pitcairn`,
      _: `Poland`,
      _: `Portugal`,
      _: `Puerto Rico`,
      _: `Qatar`,
      _: `Reunion`,
      _: `Romania`,
      _: `Russian Federation`,
      _: `Rwanda`,
      _: `Saint Helena`,
      _: `Saint Kitts and Nevis`,
      _: `Saint Lucia`,
      _: `Saint Pierre and Miquelon`,
      _: `Saint Vincent and the Grenadines`,
      _: `Samoa`,
      _: `San Marino`,
      _: `Sao Tome and Principe`,
      _: `Saudi Arabia`,
      _: `Senegal`,
      _: `Serbia`,
      _: `Seychelles`,
      _: `Sierra Leone`,
      _: `Singapore`,
      _: `Slovakia`,
      _: `Slovenia`,
      _: `Solomon Islands`,
      _: `Somalia`,
      _: `South Africa`,
      _: `South Georgia and the South Sandwich Islands`,
      _: `Spain`,
      _: `Sri Lanka`,
      _: `Sudan`,
      _: `Suriname`,
      _: `Svalbard and Jan Mayen`,
      _: `Syria`,
      _: `Eswatini`,
      _: `Sweden`,
      _: `Switzerland`,
      _: `Taiwan`,
      _: `Tajikistan`,
      _: `Tanzania, United Republic of`,
      _: `Thailand`,
      _: `Timor-Leste`,
      _: `Togo`,
      _: `Tokelau`,
      _: `Tonga`,
      _: `Trinidad and Tobago`,
      _: `Tunisia`,
      _: `Turkey`,
      _: `Turkmenistan`,
      _: `Turks and Caicos Islands`,
      _: `Tuvalu`,
      _: `Uganda`,
      _: `Ukraine`,
      _: `United Arab Emirates`,
      _: `United Kingdom`,
      _: `United States`,
      _: `United States Minor Outlying Islands`,
      _: `Uruguay`,
      _: `Uzbekistan`,
      _: `Vanuatu`,
      _: `Venezuela`,
      _: `Viet Nam`,
      _: `Virgin Islands, British`,
      _: `Virgin Islands, U.S.`,
      _: `Wallis and Futuna`,
      _: `Western Sahara`,
      _: `Yemen`,
      _: `Zambia`,
      _: `Zimbabwe`,
    },
    eucountries: {
      _: `Austria`,
      _: `Belgium`,
      _: `Bulgaria`,
      _: `Croatia`,
      _: `Cyprus`,
      _: `Czech Republic`,
      _: `Denmark`,
      _: `Estonia`,
      _: `Finland`,
      _: `France`,
      _: `Germany`,
      _: `Greece`,
      _: `Hungary`,
      _: `Ireland`,
      _: `Italy`,
      _: `Latvia`,
      _: `Lithuania`,
      _: `Luxembourg`,
      _: `Malta`,
      _: `Netherlands`,
      _: `Poland`,
      _: `Portugal`,
      _: `Romania`,
      _: `Slovakia`,
      _: `Slovenia`,
      _: `Spain`,
      _: `Sweden`,
      _: `United Kingdom`,
    },
    eeacountries: {
      _: `Norway`,
      _: `Iceland`,
      _: `Liechtenstein`,
    },
    usstates: {
      _: `Alabama`,
      _: `Alaska`,
      _: `American Samoa`,
      _: `Arizona`,
      _: `Arkansas`,
      _: `California`,
      _: `Colorado`,
      _: `Connecticut`,
      _: `Delaware`,
      _: `District of Columbia`,
      _: `Federated States of Micronesia`,
      _: `Florida`,
      _: `Georgia`,
      _: `Guam`,
      _: `Hawaii`,
      _: `Idaho`,
      _: `Illinois`,
      _: `Indiana`,
      _: `Iowa`,
      _: `Kansas`,
      _: `Kentucky`,
      _: `Louisiana`,
      _: `Maine`,
      _: `Marshall Islands`,
      _: `Maryland`,
      _: `Massachusetts`,
      _: `Michigan`,
      _: `Minnesota`,
      _: `Mississippi`,
      _: `Missouri`,
      _: `Montana`,
      _: `Nebraska`,
      _: `Nevada`,
      _: `New Hampshire`,
      _: `New Jersey`,
      _: `New Mexico`,
      _: `New York`,
      _: `North Carolina`,
      _: `North Dakota`,
      _: `Northern Mariana Islands`,
      _: `Ohio`,
      _: `Oklahoma`,
      _: `Oregon`,
      _: `Palau`,
      _: `Pennsylvania`,
      _: `Puerto Rico`,
      _: `Rhode Island`,
      _: `South Carolina`,
      _: `South Dakota`,
      _: `Tennessee`,
      _: `Texas`,
      _: `Utah`,
      _: `Vermont`,
      _: `U.S. Virgin Islands`,
      _: `Virginia`,
      _: `Washington`,
      _: `West Virginia`,
      _: `Wisconsin`,
      _: `Wyoming`,
      _: `Armed Forces Americas`,
      _: `Armed Forces`,
      _: `Armed Forces Pacific`,
    },
  },
}.countrycodes;
function _(_, _) {
  switch (_.preference_state) {
    case 0:
    case 1:
      return !0;
    case 2:
      return !1;
    default:
      switch (_) {
        case `youtube`:
          return _.third_party_content?.youtube;
        case `vimeo`:
          return _.third_party_content?.vimeo;
        case `sketchfab`:
          return _.third_party_content?.sketchfab;
        case `generic`:
          return !1;
      }
  }
}
function _(_) {
  switch (_.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function _(_, _, _, _) {
  if (_(_))
    return {
      version: 1,
      preference_state: 0,
    };
  if (_) {
    let _ = (await _.GetCookiePreferences(_, {})).Body().toObject().preferences;
    if (_ && _.version !== void 0 && _.version != 0) return _;
  }
  try {
    let _ = _(_);
    if (_) {
      let _ = JSON.parse(_);
      if (_ && _.version !== void 0 && _.version != 0) return _;
    }
  } catch {}
  return _ in _.eucountries || _ in _.eeacountries || _ === `CH`
    ? {
        version: 1,
        preference_state: 4,
      }
    : {
        version: 1,
        preference_state: 0,
      };
}
function _(_) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => _(_, _.logged_in, _.COUNTRY, _.EREALM),
  };
}
function _() {
  let _ = _();
  return _(_(_));
}
function _(_) {
  let { data: _ } = _();
  return _ ? _(_, _) : void 0;
}
function _() {
  let { data: _ } = _();
  return _ ? !_(_) : void 0;
}
var _ = 20,
  _ = /^.*youtube[^v]+v=(.{11}).*/,
  _ = /^.*youtu\.be\/(.{11}).*/,
  _ = /^.*youtube.*\/embed\/(.{11}).*/,
  _ = /^.*[?&]t=([^&]+)(?:&|$)/,
  _ = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function _(_) {
  return (_?.length < _ ? void 0 : _.exec(_) || _.exec(_) || _.exec(_))?.[1];
}
function _(_) {
  return _.exec(_)?.[1];
}
function _(_) {
  let _ = _.exec(_);
  if (!(_?.[1] || _?.[2] || _?.[3] || _?.[4])) return;
  if (_?.[4]) return parseInt(_?.[4]);
  let _ = 0;
  return (
    _?.[1] && (_ += 3600 * parseInt(_[1])),
    _?.[2] && (_ += 60 * parseInt(_[2])),
    _?.[3] && (_ += parseInt(_[3])),
    _
  );
}
function _(_) {
  let _ = _(_);
  if (!_) return;
  let _ = _(_);
  return {
    strVideoID: _,
    nStartSeconds: _ ? _(_) : void 0,
  };
}
function _(_) {
  let _ = _(_, _.options);
  return (0, _.jsx)(`span`, {
    ref: _,
    style: {
      fontSize: 0,
    },
  });
}
var _ = _.forwardRef(function (_, _) {
    let { onLeave: _, onEnter: _, options: _, ..._ } = _,
      _ = _(_, _.options),
      _ = _(_, _);
    return (0, _.jsx)(`div`, {
      ref: _,
      ..._,
    });
  }),
  _ = 0,
  _ = [];
function _(_) {
  if (_ == 2) _ && _();
  else {
    if (_ == 0) {
      let _ = document.createElement(`script`);
      _.src = `https://www.youtube.com/iframe_api`;
      let _ = document.getElementsByTagName(`script`)[0];
      (_.parentNode?.insertBefore(_, _), (window.onYouTubeIframeAPIReady = _));
    }
    _ && (_.includes(_) || _.push(_));
  }
}
function _(_) {
  _(_, _);
}
function _() {
  _ = 2;
  for (let _ of _) _();
  _ = [];
}
var _ = class _ extends _.Component {
  m_strPlayerID = ``;
  m_player = null;
  m_playerContainer = null;
  m_bPlayerReady = !1;
  static s_nPlayerIndex = 0;
  constructor(_) {
    (super(_),
      (this.m_strPlayerID = `YoutubePlayer_` + _.s_nPlayerIndex++),
      (this.state = {
        bYoutubeLoaded: !1,
      }));
  }
  componentWillUnmount() {
    (this.DestroyPlayer(), _(this.OnYoutubeScriptsReady));
  }
  shouldComponentUpdate(_, _) {
    if (!this.m_player) return !1;
    let _ = this.props;
    return _.autoplay != _.autoplay ||
      _.controls != _.controls ||
      _.showInfo != _.showInfo ||
      _.video != _.video
      ? (this.CreatePlayer(_), !1)
      : ((_.width != _.width || _.height != _.height) &&
          this.m_bPlayerReady &&
          _.width &&
          _.height &&
          this.m_player.setSize(_.width, _.height),
        _.forcePause != _.forcePause);
  }
  componentDidUpdate(_) {
    _.forcePause != this.props.forcePause && this.ApplyForcePause();
  }
  ApplyForcePause() {
    this.m_player &&
      this.m_bPlayerReady &&
      (this.props.forcePause
        ? typeof this.m_player.pauseVideo == `function` &&
          this.m_player.pauseVideo()
        : typeof this.m_player.playVideo == `function` &&
          this.m_player.playVideo());
  }
  DestroyPlayer() {
    if (this.m_player)
      try {
        (this.m_player.stopVideo && this.m_player.stopVideo(),
          this.m_player.destroy && this.m_player.destroy());
      } catch {
      } finally {
        this.m_player = null;
      }
  }
  BindPlayerContainer(_) {
    _ &&
      this.m_playerContainer != _ &&
      ((this.m_playerContainer = _),
      this.DestroyPlayer(),
      _(this.OnYoutubeScriptsReady));
  }
  OnYoutubeScriptsReady() {
    this.CreatePlayer(this.props);
  }
  CreatePlayer(_) {
    if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
    let _ = _.autoplay === !1 ? 0 : 1,
      _ = +(_.showInfo === !0),
      _ = +(_.controls === !0),
      _ = +(_.showFullscreenBtn === !0),
      _ = +(_.playsInline === !0),
      _ = {
        width: _.width === void 0 ? void 0 : String(_.width),
        height: _.height === void 0 ? void 0 : String(_.height),
        videoId: _.video,
        host: `https://www.youtube-nocookie.com`,
        playerVars: {
          autoplay: _,
          showinfo: _,
          autohide: 1,
          _: _,
          modestbranding: 1,
          rel: 0,
          playsinline: _,
          iv_load_policy: 3,
          controls: _,
          start: _.startSeconds,
        },
        events: {
          onReady: this.OnPlayerReady,
          onStateChange: this.OnPlayerStateChange,
          onError: this.OnError,
        },
      },
      _ = this.m_playerContainer.firstElementChild;
    ((this.m_bPlayerReady = !1), (this.m_player = new _.Player(_, _)));
  }
  OnPlayerReady(_) {
    if (
      ((this.m_bPlayerReady = !0),
      this.props.onVideoInfoChanged && this.m_player)
    ) {
      let _ = this.m_player.getVideoData(),
        _ = {
          strAuthor: ``,
          strTitle: ``,
          strVideoID: ``,
        };
      (_.author && (_.strAuthor = _.author),
        _.title && (_.strTitle = _.title),
        _.video_id && (_.strVideoID = _.video_id),
        this.props.onVideoInfoChanged(_));
    }
    (this.props.width &&
      this.props.height &&
      this.m_player?.setSize(this.props.width, this.props.height),
      this.props.forcePause
        ? this.ApplyForcePause()
        : this.props.autoplay && this.m_player?.playVideo(),
      this.props.onPlayerReady && this.props.onPlayerReady());
  }
  OnPlayerStateChange(_) {
    switch (_.data) {
      case _.PlayerState.UNSTARTED:
        break;
      case _.PlayerState.BUFFERING:
        this.props.onBuffering && this.props.onBuffering();
        break;
      case _.PlayerState.PLAYING:
        this.props.onPlaying && this.props.onPlaying();
        break;
      case _.PlayerState.PAUSED:
        this.props.onPaused && this.props.onPaused();
        break;
      case _.PlayerState.ENDED:
        this.props.onMovieEnd && this.props.onMovieEnd();
    }
  }
  OnError(_) {
    (console.log(`Youtube: Playback failed`, _),
      this.props.onError && this.props.onError(_));
  }
  OnPlayerLeftView() {
    this.props.autopause &&
      this.m_player &&
      this.m_bPlayerReady &&
      this.m_player.pauseVideo();
  }
  PlayVideo(_) {
    this.m_player &&
      this.m_bPlayerReady &&
      (_ && this.m_player.seekTo(0, !0), this.m_player.playVideo());
  }
  render() {
    return (0, _.jsx)(_, {
      video: this.props.video,
      children: (0, _.jsx)(
        _,
        {
          onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
          ref: this.BindPlayerContainer,
          className: _(`YoutubePlayer`, this.props.classnames),
          children: (0, _.jsx)(_, {
            className: `YoutubePlayerThrobber`,
          }),
        },
        this.m_strPlayerID,
      ),
    });
  }
};
(_([_], _.prototype, `BindPlayerContainer`, null),
  _([_], _.prototype, `OnYoutubeScriptsReady`, null),
  _([_], _.prototype, `CreatePlayer`, null),
  _([_], _.prototype, `OnPlayerReady`, null),
  _([_], _.prototype, `OnPlayerStateChange`, null),
  _([_], _.prototype, `OnError`, null),
  _([_], _.prototype, `OnPlayerLeftView`, null),
  _([_], _.prototype, `PlayVideo`, null));
function _(_) {
  let { video: _, children: _ } = _;
  return _(`youtube`)
    ? _
    : (0, _.jsx)(`a`, {
        href: `https://www.youtube.com/watch?v=${_}`,
        children: _(`#EventCalendar_WatchYouTubeVideo`),
      });
}
function _(_) {
  let _ = new URLSearchParams({
    autoplay: _.autoplay ? `1` : `0`,
    controls: _.controls ? `1` : `0`,
    _: _.showFullscreenBtn ? `1` : `0`,
    playsinline: _.playsInline ? `1` : `0`,
    rel: `0`,
    iv_load_policy: `3`,
    modestbranding: `1`,
    enablejsapi: `1`,
  });
  return (
    _.startSeconds && _.set(`start`, String(_.startSeconds)),
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(_.video)}?${_.toString()}`
  );
}
function _(_) {
  let { video: _, autopause: _, className: _ } = _,
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(void 0),
    _ = _.useCallback(() => {
      typeof _.current?.pauseVideo == `function` && _.current.pauseVideo();
    }, []),
    _ = _.useCallback((_) => {
      _.current = _.isIntersecting;
    }, []),
    _ = _({
      onLeave: _ ? _ : void 0,
      onIntersectionChange: _,
    }),
    _ = _(_, _);
  return (
    _.useEffect(() => {
      let _ = () => {
          _.current === !1 && _();
        },
        _ = () => {
          _.current &&
            (_.current = new _.Player(_.current, {
              events: {
                onReady: _,
              },
            }));
        };
      return (
        _ && _(_),
        () => {
          (_(_), (_.current = null));
        }
      );
    }, [_, _]),
    (0, _.jsx)(`iframe`, {
      ref: _,
      className: _,
      src: _(_),
      title: _,
      allow: `autoplay; encrypted-media; picture-in-picture; web-share`,
      allowFullScreen: !0,
      frameBorder: 0,
    })
  );
}
function _(_) {
  return _.replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function _(_) {
  let _ =
      _.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(_).toString(),
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return await _.json();
}
function _(_) {
  return [`DynamicEventMetadata`, `youtube`, _];
}
function _(_, _ = !0) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _({
          youtubevideoids: _,
        }),
        _ = _.youtube?.find((_) => _.videoid == _) ?? _.youtube?.[0];
      if (!_) throw Error(`no metadata for youtube video ${_}`);
      return {
        ..._,
        title: _(_.title),
        description: _(_.description),
      };
    },
    enabled: _ && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_) {
  return [`DynamicEventMetadata`, `sharedfile`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _({
          sharedfileids: _,
        }),
        _ =
          _.sharedfiles?.find((_) => _.sharedfileid == _) ?? _.sharedfiles?.[0];
      if (!_) throw Error(`no metadata for shared file ${_}`);
      return {
        ..._,
        title: _(_.title),
        description: _(_.description),
        type: _(_.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function _(_) {
  return _(_(_));
}
var _ = `brm0OeRsTm4-`,
  _ = `pcxkPBR3wVQ-`,
  _ = `Mamx1lJ2lKQ-`,
  _ = `MCiiNDFcgvA-`,
  _ = `wDoQNUlMcwk-`,
  _ = `AiYAf8NbQ-E-`,
  _ = (function (_) {
    return (
      (_.left = `leftthumb`),
      (_.right = `rightthumb`),
      (_.full = `full`),
      (_.summary = `summary`),
      _
    );
  })({});
function _(_) {
  return _ == `full` ? _ : _(_, _ == `leftthumb` ? _ : _);
}
function _(_) {
  let {
      videoID: _,
      bShowVideoImmediately: _,
      bAutoPlay: _,
      nStartSeconds: _,
      align: _ = `full`,
    } = _,
    [_, _] = (0, _.useState)(!_),
    { data: _, isSuccess: _ } = _(_, _);
  if (_) {
    let _ = _?.title ?? _(`#Loading`),
      _ = _?.views ?? `0`,
      _ = _?.description ?? ``,
      _ = () => _(!1);
    return (0, _.jsxs)(`div`, {
      className: _.Box,
      role: `button`,
      tabIndex: 0,
      onClick: _,
      onKeyDown: (_) => {
        (_.key == `Enter` || _.key == ` `) && (_.preventDefault(), _());
      },
      children: [
        (0, _.jsx)(_, {
          strURL: `https://img.youtube.com/vi/` + _ + `/0.jpg`,
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children: _(`#EventEditor_YouTubeVideoTitle`, _),
            }),
            (0, _.jsx)(_, {
              children: _(`#EventEditor_YouTubeVideoViews`, _(Number(_))),
            }),
            (0, _.jsxs)(_, {
              children: [
                _ && _,
                !_ &&
                  (0, _.jsx)(_, {
                    size: `medium`,
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsx)(_, {
    video: _,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _(_)),
      _: _,
      children: [
        (0, _.jsx)(`img`, {
          className: _,
          alt: ``,
          src:
            _.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, _.jsx)(_, {
          video: _,
          autoplay: _ ?? !1,
          startSeconds: _,
          controls: !0,
          playsInline: !0,
          autopause: !0,
          showFullscreenBtn: !0,
        }),
      ],
    }),
  });
}
function _(_, _) {
  if (_.EREALM === _.k_ESteamRealmChina) return null;
  let _ = _(_);
  return _?.strVideoID === void 0
    ? _(_, _?.event)
    : (0, _.jsx)(_, {
        videoID: _.strVideoID,
        nStartSeconds: _.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function _() {
  return _.EREALM === _.k_ESteamRealmChina;
}
function _(_) {
  if (_()) return null;
  let _ = _(_.args);
  if (_) {
    let _ = _.split(`;`);
    if (_.length == 2) {
      let _ = _[0],
        _ = _[1].toLocaleLowerCase();
      return (0, _.jsx)(_, {
        videoID: _,
        align: _,
        bShowVideoImmediately: !0,
      });
    }
  }
  return (0, _.jsx)(_.Fragment, {});
}
function _(_) {
  if (_() || _.COUNTRY.toLocaleUpperCase() == `CN`) return _(_);
  let _ = _(_.args, `youtubeid`),
    _ = _(_.args, `size`),
    _ = _(_.args, `seconds`);
  return (0, _.jsx)(_, {
    videoID: _,
    nStartSeconds: _ ? Number.parseInt(_) : void 0,
    align: _,
    bShowVideoImmediately: !0,
  });
}
var _ = new Map([
    [
      `b`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `i`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `h1`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
    [
      `h2`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
    [
      `h3`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
    [
      `h4`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
    [
      `h5`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
    [
      `center`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `smalltext`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
    [
      `u`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `strike`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `spoiler`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `hr`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `noparse`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `url`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `quote`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `pullquote`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `code`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `c`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `list`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
      },
    ],
    [
      `olist`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
      },
    ],
    [
      `*`,
      {
        Constructor: _,
        autocloses: !0,
        skipInternalNewline: !0,
      },
    ],
    [
      `table`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
      },
    ],
    [
      `tr`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `th`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `td`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `expand`,
      {
        Constructor: _,
        autocloses: !1,
        skipInternalNewline: !0,
        allowWrapTextForCopying: !0,
      },
    ],
    [
      `calendarevent`,
      {
        Constructor: _,
        autocloses: !0,
      },
    ],
    [
      `doclink`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `color`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `bgcolor`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `p`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
  ]),
  _ = new Map([
    [
      `looping_media`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `video`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `youtubeorvideo`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `previewyoutube`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
  ]);
function _(_, _) {
  return _ === void 0 ? _[``] : _[_];
}
function _(_, _) {
  return (_) =>
    _({
      ..._,
      className: _,
    });
}
function _(_) {
  return (0, _.jsx)(`b`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`i`, {
    className: _(_, `BB_Italic`),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`u`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`s`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsxs)(`p`, {
    className: _,
    children: [_.children, (0, _.jsx)(`wbr`, {})],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    role: `paragraph`,
    children: [_.children, (0, _.jsx)(`wbr`, {})],
  });
}
function _(_, _, _) {
  let _ = _(_.args, `id`);
  return (
    (_ ||= _(_.args)),
    _ &&
      typeof _ == `string` &&
      _.length > 0 &&
      _[0] === `#` &&
      (_ = _.substring(1)),
    (0, _.jsx)(_, {
      _: _ || void 0,
      className: _(_, _.className),
      children: _.children,
    })
  );
}
function _(_) {
  return _(`h1`, _, _(_, `BB_Header1`));
}
function _(_) {
  return _(`h2`, _, _(_, `BB_Header2`));
}
function _(_) {
  return _(`h3`, _, _(_, `BB_Header3`));
}
function _(_) {
  return _(`h4`, _, _(_, `BB_Header4`));
}
function _(_) {
  return _(`h5`, _, _(_, `BB_Header5`));
}
function _(_) {
  let _ = _(_.args, `id`);
  return (
    _ &&
      typeof _ == `string` &&
      _.length > 0 &&
      _[0] === `#` &&
      (_ = _.substring(1)),
    (0, _.jsx)(`span`, {
      _: _ || void 0,
      className: _(_, `BB_Center`),
      children: _.children,
    })
  );
}
function _(_) {
  return _(`div`, _, _(_, `BB_SmallText`));
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _.useCallback(() => {
      _(!_);
    }, [_]);
  return (0, _.jsx)(_, {
    className: _(_, _ && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: _,
    onOKActionDescription: _(
      _ ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, _.jsx)(`span`, {
      className: _,
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`hr`, {
    className: _,
  });
}
function _(_) {
  let _ = _(_.args);
  return (0, _.jsx)(`span`, {
    style: {
      color: _,
    },
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.args);
  return (0, _.jsx)(`span`, {
    style: {
      backgroundColor: _,
    },
    children: _.children,
  });
}
function _(_) {
  let _ = _(_(_.args));
  if (!_) {
    let _ = _.children;
    typeof _ == `string` && _(_) && (_ = _(_));
  }
  let _ = _(_.args, `style`) == `button` ? _ : void 0,
    _ = _ && _(_.args, `buttoncolor`),
    _ = _(_.args, `id`);
  return (
    _ &&
      typeof _ == `string` &&
      _.length > 0 &&
      _[0] === `#` &&
      (_ = _.substring(1)),
    _ === void 0 && !_
      ? _.children || ``
      : _ === void 0 || (typeof _ == `string` && _.length > 0 && _[0] == `#`)
        ? (0, _.jsx)(`a`, {
            href: _ ?? null,
            _: _,
            children: _.children,
          })
        : (0, _.jsx)(_, {
            className: _,
            href: _,
            _: _,
            style: {
              backgroundColor: _,
            },
            children: _.children,
          })
  );
}
function _(_) {
  let _ = _(_.args),
    _ = _(_.args, `style`) == `button` ? _ : void 0,
    _ = _ && _(_.args, `buttoncolor`);
  return (0, _.jsx)(_, {
    className: _,
    style: {
      backgroundColor: _,
    },
    href: `${_.PARTNER_BASE_URL}doc/${_}`,
    children: _.children,
  });
}
var _ = (_) => {
  let { href: _, ..._ } = _,
    _ = _(_ ?? ``),
    _;
  _(_)
    ? ((_ = (_.IN_CLIENT ? `steam://openurl_external/` : ``) + _(_)),
      (_ = `noopener nofollow`))
    : (_ = _(_));
  let _ =
    typeof _.children == `string` &&
    _.children.length > 0 &&
    _ &&
    !_.startsWith(`steam://`)
      ? _(_)
      : void 0;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    direction: `top`,
    children: (0, _.jsx)(_, {
      ..._,
      href: _,
      rel: _,
      children: _.children,
    }),
  });
};
function _(_) {
  return (0, _.jsx)(`a`, {
    className: _,
    href: _(_.args),
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.args, `author`);
  return (0, _.jsxs)(`blockquote`, {
    className: _(_, _.className),
    children: [
      !!_ &&
        (0, _.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            _(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, _.jsx)(`b`, {
              children: _ + `:`,
            }),
          ],
        }),
      _.children,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`code`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`code`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`ul`, {
    className: _(_, `bullets`),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`ol`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.args, `id`);
  return (
    _ &&
      typeof _ == `string` &&
      _.length > 0 &&
      _[0] === `#` &&
      (_ = _.substring(1)),
    (0, _.jsx)(`li`, {
      className: _,
      _: _ || void 0,
      children: _.children,
    })
  );
}
function _(_) {
  return _.children;
}
function _(_) {
  let _ = _(_.args, `noborder`),
    _ = _(_.args, `equalcells`),
    _ = _(_.args, `colwidth`);
  return (0, _.jsxs)(`table`, {
    className: _(_, `BB_Table`, _ && `b20E2IrghSY-`, _ && `zJnyxE63CCk-`),
    children: [
      _ &&
        (0, _.jsx)(`colgroup`, {
          children: _.split(`,`).map((_, _) =>
            (0, _.jsx)(
              _,
              {
                width: _,
              },
              _,
            ),
          ),
        }),
      (0, _.jsx)(`tbody`, {
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let { width: _ } = _,
    _;
  return (
    _ &&
      parseInt(_) > 0 &&
      (_ = {
        width: `${_}px`,
      }),
    (0, _.jsx)(`col`, {
      style: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(`tr`, {
    className: _(_, `BB_TableRow`),
    children: _.children,
  });
}
function _(_, _) {
  let _ = _(_.args, `width`),
    _ = _(_.args, `colspan`),
    _ = _(_.args, `rowspan`),
    _ = {};
  return (
    _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
    _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
    (0, _.jsx)(_, {
      className: _(_, _ == `td` && `BB_TableData`),
      ..._,
      style: _
        ? {
            width: _,
          }
        : void 0,
      children: _.children,
    })
  );
}
function _(_) {
  return _(`th`, _);
}
function _(_) {
  return _(`td`, _);
}
function _(_, _, _, _) {
  switch (_) {
    case `details`:
      return {
        collapsed: `#Bbcode_Expand_Details_Collapsed`,
        expanded: `#Bbcode_Expand_Details_Expanded`,
        style: void 0,
      };
    case `spoiler`:
      return {
        collapsed: `#Bbcode_Expand_Spoiler_Collapsed`,
        expanded: `#Bbcode_Expand_Spoiler_Expanded`,
        style: void 0,
      };
    case `title`:
      return {
        collapsed: _ || _ || `#Bbcode_Expand_ShowMore_Collapsed`,
        expanded: _ || _ || `#Bbcode_Expand_ShowMore_Expanded`,
        style: _,
      };
    default:
    case `showmore`:
      return {
        collapsed: `#Bbcode_Expand_ShowMore_Collapsed`,
        expanded: `#Bbcode_Expand_ShowMore_Expanded`,
        style: void 0,
      };
  }
}
function _(_) {
  let _ = !!_(_.args, `expanded`),
    [_, _] = _.useState(_),
    _ = _(_.args, `title`),
    _ = _(_.args, `collapsed_str`),
    _ = _(_.args, `expanded_str`),
    _ = _(_(_.args, `type`), _, _, _);
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [_.style ?? ``]: _.style != null,
      [void 0]: _,
      [void 0]: !_,
      BBCodeExpanded: _,
      BBCodeCollapsed: !_,
    }),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        onClick: () => _(!_),
        children: [
          _(_ ? _.expanded : _.collapsed),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              angle: _ ? 180 : 0,
            }),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `Lwo0pX9leRw-`,
          children: _.children,
        }),
    ],
  });
}
function _(_) {
  let _ = _(_.args, `title`),
    _ = _(_.args, `start`) ?? _(_.args, `datetime`),
    _ = _(_.args, `end`) ?? _(_.args, `datetime`),
    _ = _(_.args, `body`) ?? null,
    _ = _(_.args, `location`) ?? null,
    _ = _(_.args, `id`) ?? ``,
    _ = new Date(_),
    _ = `${_.getUTCFullYear()}${(`0` + (_.getUTCMonth() + 1)).slice(-2)}${(`0` + _.getUTCDate()).slice(-2)}T${(`0` + _.getUTCHours()).slice(-2)}${(`0` + _.getUTCMinutes()).slice(-2)}00Z`,
    _ = new Date(_),
    _ = `${_.getUTCFullYear()}${(`0` + (_.getUTCMonth() + 1)).slice(-2)}${(`0` + _.getUTCDate()).slice(-2)}T${(`0` + _.getUTCHours()).slice(-2)}${(`0` + _.getUTCMinutes()).slice(-2)}00Z`,
    _;
  try {
    let _ = `BEGIN:VCALENDAR\r
`;
    ((_ += `VERSION:2.0\r
`),
      (_ += `BEGIN:VEVENT\r
`),
      (_ += `DTSTART:${_}\r\n`),
      (_ += `DTEND:${_}\r\n`),
      (_ += `SUMMARY:${_.replace(
        `
`,
        `\\n`,
      )}\r\n`),
      _ &&
        (_ += `DESCRIPTION:${_.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      _ &&
        (_ += `LOCATION:${_.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      (_ += `END:VEVENT\r
`),
      (_ += `END:VCALENDAR\r
`),
      (_ = `data:text/calendar;charset=utf-8;base64,${_.fromByteArray(new TextEncoder().encode(_))}`));
  } catch (_) {
    console.error(_);
  }
  let _ = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  ((_ += `&text=${encodeURI(_)}`),
    (_ += `&details=${encodeURI(_)}`),
    (_ += `&dates=${encodeURI(_ + `/` + _)}`));
  let _ = (_) => {
    if (`ReactNativeWebView` in window) {
      let _ = window.ReactNativeWebView,
        _ = {
          event_name: `addcalendarevent`,
          tsStart: _.getTime(),
          tsEnd: _.getTime(),
          strTitle: _,
          strNotes: _,
          strLocation: _,
        };
      (_.postMessage(JSON.stringify(_)), _.preventDefault());
    }
  };
  return (0, _.jsxs)(`div`, {
    className: _(`SaleSectionCalendarEventContainer`, _),
    _: _,
    children: [
      _ &&
        (0, _.jsx)(`a`, {
          className: _(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: _,
          onClick: _,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, _.jsx)(`a`, {
        className: _(`SaleSectionCalendarEventLink`, _),
        href: _,
        children: `Google`,
      }),
      _ &&
        (0, _.jsx)(`a`, {
          className: _(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: _,
          onClick: _,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function _(_) {
  return new _(new _());
}
function _() {
  return new Map([...Array.from(_.entries())]);
}
function _(_) {
  let { text: _, languageOverride: _ } = _,
    [_] = (0, _.useState)(new _(_(), _, _ ?? _.LANGUAGE));
  return (0, _.jsx)(_.Fragment, {
    children: _.ParseBBCode(_, {}),
  });
}
var _ = `L3HaktJsWWA-`,
  _ = `YebKQISqLCs-`,
  _ = `Ct9yU89TArw-`,
  _ = `_7-cDUja4KeQ-`,
  _ = `PBXxHejQZTU-`,
  _ = `JX6irDhLeng-`,
  _ = _((_) => {
    let _ = _(_.photo, _(_.LANGUAGE)),
      _ = _ ? (typeof _ == `string` ? _ : _[1]) : void 0,
      _ = !!_.title,
      _ = !!_.company;
    return (0, _.jsxs)(`div`, {
      className: _,
      onMouseLeave: _.fnClose,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _.photo &&
              (0, _.jsx)(`img`, {
                src: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _.name,
                }),
                (_ || _) &&
                  (0, _.jsxs)(`div`, {
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: _.title,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: `, `,
                        }),
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _.company,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        _.bio &&
          (0, _.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              _.bio,
              _.bioString &&
                (0, _.jsx)(_, {
                  text: _.bioString,
                }),
            ],
          }),
      ],
    });
  }),
  _ = class _ extends _.Component {
    static sm_embeddedElements = new _(`presenter-hover-source-elements`);
    m_refAnchor = _.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      _() ||
        (this.m_fnHidePopup &&
          (this.m_fnHidePopup(),
          (this.m_fnHidePopup = null),
          window.removeEventListener(`scroll`, this.OnScroll)));
    }
    componentWillUnmount() {
      this.ClosePopup();
    }
    OnScroll() {
      Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
        this.ClosePopup();
    }
    OnHover(_) {
      let _ = this.m_refAnchor.current;
      if (!_) return;
      let _ = {
          direction: `right`,
          bEnablePointerEvents: !0,
          style: {
            maxWidth: 640,
            minHeight: _.clientHeight,
          },
          target: _,
        },
        _ = `presenter-hover-` + Math.floor(Math.random() * 1e8);
      ((this.m_fnHidePopup = () =>
        _.sm_embeddedElements.HideElement(_.ownerDocument, _)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        _.sm_embeddedElements.ShowElementDelayed(
          _.ownerDocument,
          150,
          (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_, {
              ...this.props,
              fnClose: this.OnLeave,
            }),
          }),
          _,
        ));
    }
    OnLeave(_) {
      this.ClosePopup();
    }
    render() {
      return (0, _.jsx)(`div`, {
        className: _,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(_([_], _.prototype, `ClosePopup`, null),
  _([_], _.prototype, `OnScroll`, null),
  _([_], _.prototype, `OnHover`, null),
  _([_], _.prototype, `OnLeave`, null));
function _(_) {
  let {
      photo: _,
      name: _,
      title: _,
      company: _,
      hidePhotoInCompactView: _,
    } = _,
    _ = _(_, _(_.LANGUAGE)),
    _ = _ && !_ ? (typeof _ == `string` ? _ : _[1]) : null,
    _ = !!_,
    _ = !!_;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !!_ &&
              (0, _.jsx)(`img`, {
                src: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _,
                }),
                (_ || _) &&
                  (0, _.jsxs)(`div`, {
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: _,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: `, `,
                        }),
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}

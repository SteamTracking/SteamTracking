import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~4c761eb6f4.js";
import { _ } from "./chunk~eefd71512b.js";
import { _, _, _ } from "./chunk~6cf3fe3e07.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = class {
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
  _ = class {
    m_fnAccumulatorFactory;
    m_dictComponents;
    constructor(_, _) {
      ((this.m_dictComponents =
        _ instanceof Map ? _ : new Map(Object.entries(_))),
        (this.m_fnAccumulatorFactory = _));
    }
    Parse(_, _, _ = !0) {
      let _ = _(_ || ``, _);
      return this.Parse_BuildElements(_, _);
    }
    Parse_BuildElements(_, _) {
      let _ = this.m_fnAccumulatorFactory(void 0),
        _ = [],
        _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
        _ = this.m_dictComponents,
        _ = (_) => !!(_.tag && _.get(_.tag)?.autocloses),
        _ = !1,
        _ = !0,
        _ = (_, _) => {
          let _ = _.text.toLowerCase();
          if (_ && _.node.tag === _ && _.get(_.node.tag)) {
            let _ = _.get(_.node.tag),
              _ = {
                tagname: _.node.tag,
                args: _.node.args,
                rawargs: _.node.rawargs,
              },
              _ = _(_.Constructor, _, ..._.GetElements());
            ((_ = _.accumulator),
              Array.isArray(_)
                ? _.forEach((_) => _.AppendNode(_))
                : _.AppendNode(_),
              (_ = !!_.skipFollowingNewline),
              (_ = _.bWrapTextForCopying));
          } else if (_) {
            let _ = _.accumulator;
            (_.AppendText(`[` + _.node.text + `]`, !1),
              _.GetElements().forEach((_) => _.AppendNode(_)),
              _.AppendText(`[/` + _.text + `]`, !1),
              (_ = _),
              (_ = _.bWrapTextForCopying));
          }
        };
      for (
        _.forEach((_, _) => {
          if (_.type == 1) {
            let _ = _ ? _.text.replace(/^[\t\r ]*\n/g, ``) : _.text;
            (_.AppendText(_, _), (_ = !1));
          } else if (_.type == 2) {
            let _ = _.get(_.tag);
            if (!_) _.AppendText(`[` + _.text + `]`, _.length == 0);
            else {
              let _ = _();
              if (_ !== void 0) {
                let _ = _.get(_.node.tag);
                _ && _.autocloses && _.tag === _.node.tag && _(_.pop(), _.node);
              }
              (_.push({
                accumulator: _,
                node: _,
                bWrapTextForCopying: _,
              }),
                (_ = this.m_fnAccumulatorFactory(_)),
                (_ = !!_.skipInternalNewline),
                (_ = _.allowWrapTextForCopying ?? !1));
            }
          } else if (_.type == 3) {
            let _ = _.text.toLowerCase();
            for (; _() && _().node.tag !== _ && _(_().node);) {
              let _ = _.pop();
              _(_, _.node);
            }
            if (_()?.node.tag == _) {
              let _ = _.pop();
              _(_, _);
            } else _.AppendText(`[/` + _.text + `]`, _.length == 0);
          }
        });
        _.length > 0;
      ) {
        let _ = _.pop();
        _(_, _.node);
      }
      return _.GetElements();
    }
  };
function _(_, _, _ = 0) {
  let { type: _, text: _ = `` } = _;
  if (_ == 2) {
    let _ = _.indexOf(`=`),
      _ = _.indexOf(` `);
    _ != -1 && (_ == -1 || _ < _) && (_ = _);
    let _,
      _,
      _ = ``;
    (_ > 0
      ? ((_ = _.substr(0, _).toLocaleLowerCase()),
        (_ = _.substr(_)),
        (_ = _(_)))
      : ((_ = {}), (_ = _.toLocaleLowerCase())),
      _.push({
        type: _,
        text: _,
        tag: _,
        args: _,
        rawargs: _,
      }));
  } else
    _ != 0 &&
      _.push({
        type: _,
        text: _,
      });
  return {
    type: _,
    text: ``,
  };
}
function _(_) {
  let _ = ``;
  return (
    _.type == 3 ? (_ = `[/`) : _.type == 2 && (_ = `[`),
    {
      type: 1,
      text: _ + (_.text ?? ``),
    }
  );
}
function _(_, _) {
  let _ = [],
    _ = {
      type: 0,
      text: ``,
    },
    _ = !1,
    _ = !1,
    _ = !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    switch (_.type) {
      case 0:
        _ == `[`
          ? ((_.type = 2), (_ = !0))
          : ((_.type = 1), _ == `\\` && _ ? (_ = !_) : (_.text += _));
        break;
      case 2:
      case 3:
        if (_ == `/` && _) ((_.type = 3), (_.text = ``), (_ = !1));
        else if (_ == `[` && !_) ((_ = _(_, _(_), 2)), (_ = !0));
        else if (_ == `]` && !_) {
          let _ = _.type == 2 && _.text?.toLocaleLowerCase() == `noparse`,
            _ = _.type == 3 && _.text?.toLocaleLowerCase() == `noparse`;
          (_ || (_ && !_)
            ? ((_ = _(_)), (_.text += _))
            : _
              ? (_ = !0)
              : _ && (_ = !1),
            (_ = _(_, _)),
            (_ = !1));
        } else
          _ == `\\` && _
            ? ((_.text += _), (_ = !_), (_ = !1))
            : ((_.text += _), (_ = !1), (_ = !1));
        break;
      case 1:
        _ == `[` && !_
          ? ((_ = _(_, _, 2)), (_ = !0))
          : _ == `\\` && _
            ? (_ && (_.text += _), (_ = !_))
            : ((_.text += _), (_ = !1));
    }
  }
  return (
    _.type != 0 &&
      (_.type == 2 || _.type == 3
        ? _.push(_(_))
        : _.push({
            type: _.type,
            text: _.text ?? ``,
          })),
    _
  );
}
function _(_) {
  if (!_ || _.length < 1) return {};
  let _ = {},
    _ = ``,
    _ = ``,
    _ = 0,
    _ = 0;
  _[0] == `=` && (_ = 2);
  let _ = !1;
  for (_++; _ < _.length; _++) {
    let _ = _[_],
      _ = !0,
      _ = !1;
    switch (_) {
      case 0:
        if (_ == `=`) return {};
        if (_ == ` `) continue;
        _ = 1;
        break;
      case 1:
        (_ != `=` && _ != ` `) ||
          _ ||
          (_ == ` ` ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
        break;
      case 2:
        _ == ` `
          ? ((_ = 0), (_ = !1), (_ = !0))
          : _ == `"`
            ? ((_ = 4), (_ = !1))
            : (_ = 3);
        break;
      case 3:
      case 4:
        ((_ == ` ` && _ != 4 && !_) || (_ == `"` && _ == 4 && !_)) &&
          ((_ = 0), (_ = !1), (_ = !0));
    }
    if (_) {
      if (_ == `\\` && !_) _ = !0;
      else if (((_ = !1), _ == 1)) _ += _;
      else if (_ == 3 || _ == 4) _ += _;
      else throw Error(`Not expecting to accumulate buffer in state ` + _);
    }
    _ && ((_[_] = _), (_ = ``), (_ = ``));
  }
  return (_ != 0 && (_[_] = _), _);
}
var _ = class extends _ {
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
};
function _(_) {
  if (!_) return _;
  let _ = _.trim(),
    _ = _.replace(/^[\u0000-\u0020]+/, ``)
      .replace(/[\t\n\r]/g, ``)
      .toLowerCase();
  return _.startsWith(`javascript:`) ||
    _.startsWith(`data:`) ||
    _.startsWith(`vbscript:`)
    ? ``
    : _;
}
var _ = _(),
  _ = `DGBHQeifcPs-`,
  _ = `dYxCj-H04rc-`,
  _ = `JHqvAwJwrJY-`,
  _ = `B6fjudO6zcI-`,
  _ = `CO-1c2JJaiA-`,
  _ = `bUyTklHzOxI-`,
  _ = `BfhKYW6TTzA-`,
  _ = `cy-zo5afOio-`,
  _ = `SOW8GvMXTHk-`,
  _ = `x9MpgTrN4Ww-`,
  _ = `i1AHn-0vXik-`,
  _ = `_2TfKaaLCT2o-`,
  _ = `LIXVgsnL-4M-`,
  _ = `K-jxiBASh0s-`,
  _ = `-eZXYCqUwL8-`,
  _ = `gK4c0jTYof8-`,
  _ = `HEUr5N26q0w-`,
  _ = `_1fCwA2q2sU4-`,
  _ = `_9zPcl3a3vcw-`,
  _ = `SA3Jp-lZuK8-`,
  _ = `-zMHRhhepPU-`,
  _ = `oJ15Z0k4q2M-`,
  _ = `sOsaxzBzN2Q-`,
  _ = `nqnnf2IPKes-`,
  _ = `-CpmJ6WkwpQ-`,
  _ = `WuW68UdAsvI-`,
  _ = `NKJXBcarNSw-`,
  _ = `v27si2jXkow-`,
  _ = `_6yveHYc0OtM-`,
  _ = `wf2m1NyifjE-`,
  _ = `YBHm3uck7ds-`,
  _ = `lnrpYhOnF4E-`,
  _ = `oNRva9jZn5I-`,
  _ = `TMyoK8naM1k-`,
  _ = `_94faQspIw2E-`,
  _ = `C-B3bdlHS0I-`;
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
  _ = `oknukvR2bfs-`,
  _ = `Kvlx6JWGlW4-`,
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
  });
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

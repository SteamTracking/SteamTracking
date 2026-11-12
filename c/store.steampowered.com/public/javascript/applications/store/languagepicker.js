import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~eefd71512b.js";
import { _, _ } from "./chunk~2f8c67b4de.js";
import { _, _ } from "./chunk~0be5d7b286.js";
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
} from "./main.js";
var _ = _(_()),
  _ = _(),
  _ = class _ {
    m_eCurLang = _(_.LANGUAGE);
    m_rgHasData = _([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new _();
    GetCallback() {
      return this.m_callback;
    }
    GetCurEditLanguage() {
      return this.m_eCurLang;
    }
    SetCurEditLanguage(_) {
      return (
        this.m_eCurLang != _ &&
        ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
      );
    }
    SetHasLanguage(_) {
      _.forEach((_, _) => {
        this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
      });
    }
    BHasLanguageData(_) {
      return this.m_rgHasData[_];
    }
    GetHasLocalizationContext() {
      return this.m_bHasLocalizationContext;
    }
    SetHasLocalizationContext(_) {
      _ != this.m_bHasLocalizationContext &&
        (this.m_bHasLocalizationContext = _);
    }
    static s_globalSingletonStore;
    static Get() {
      return ((_.s_globalSingletonStore ||= new _()), _.s_globalSingletonStore);
    }
    constructor() {
      _(this);
    }
  };
(_([_], _.prototype, `m_eCurLang`, void 0),
  _([_], _.prototype, `m_rgHasData`, void 0),
  _([_], _.prototype, `m_bHasLocalizationContext`, void 0),
  _([_], _.prototype, `GetCurEditLanguage`, null),
  _([_], _.prototype, `SetCurEditLanguage`, null),
  _([_.bound], _.prototype, `SetHasLanguage`, null),
  _([_], _.prototype, `BHasLanguageData`, null));
function _() {
  return _(() => _.Get().GetCurEditLanguage());
}
var _ = `_1ZQxfdsiPgM-`,
  _ = `NpcSqQhn8sA-`,
  _ = `i0pjDy4li-A-`,
  _ = `fwAY6BoxoKI-`,
  _ = `d-SkXlSVK18-`,
  _ = (_) => {
    let { clanSteamID: _, fnImageSelectCallBack: _ } = _,
      [_, _] = (0, _.useState)(``),
      _ = _(_.clanSteamID.GetAccountID()),
      _ = () => _.closeModal && _.closeModal(),
      _ = _.GetFilteredClanImages(_, _),
      _ = (_) => {
        (_(_), _());
      };
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children: _(`#ClanImageChooser_Title`),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(`p`, {
                    children: _(`#ClanImageChooser_Desc`),
                  }),
                  (0, _.jsx)(_, {
                    placeholder: _(`#ClanImageChooser_Search`),
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _
                      ? (0, _.jsx)(_, {
                          size: `medium`,
                          string: _(`#Loading`),
                        })
                      : _.length > 0
                        ? _.map((_) =>
                            (0, _.jsx)(
                              _,
                              {
                                clanImage: _,
                                searchStringHilight: _,
                                fnImageClick: _,
                              },
                              `ci` + _.image_hash,
                            ),
                          )
                        : _.trim().length == 0
                          ? (0, _.jsx)(`div`, {
                              children: _(`#ClanImageChooser_None`),
                            })
                          : (0, _.jsx)(`div`, {
                              children: _(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Button_Cancel`),
              }),
            }),
          ],
        }),
      }),
    });
  },
  _ = (_) => {
    let { clanImage: _, searchStringHilight: _, fnImageClick: _ } = _,
      _ = _.file_name ? _.file_name : ``,
      _ = _(_, _, String(_.imageid), _);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url( '${_.thumb_url}' )`,
          },
          onDoubleClick: () => _(_),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          title: _,
          children: _,
        }),
      ],
    });
  };
function _(_, _, _, _) {
  let _ = [];
  if (_.length > 0) {
    let _ = _.toLocaleLowerCase();
    for (let _ = 0; _ < _.length;) {
      let _ = _.indexOf(_, _);
      if (_ < 0) {
        _.push(
          (0, _.jsx)(
            `span`,
            {
              children: _.substring(_),
            },
            _ + `_` + String(_),
          ),
        );
        break;
      }
      (_ < _ &&
        _.push(
          (0, _.jsx)(
            `span`,
            {
              children: _.substring(_, _),
            },
            _ + `_` + String(_),
          ),
        ),
        _.push(
          (0, _.jsx)(
            `span`,
            {
              className: _,
              children: _.substr(_, _.length),
            },
            _ + `_` + String(_),
          ),
        ),
        (_ = _ + _.length));
    }
  } else
    _.push(
      (0, _.jsx)(
        `span`,
        {
          children: _,
        },
        _ + `_null`,
      ),
    );
  return _;
}
var _ = class extends _.Component {
  GenerateLanguageOptions() {
    let _ = [],
      {
        fnFilterLanguage: _,
        fnLangHasData: _,
        fnLastUpdateRTime: _,
        fnIsLangSupported: _,
      } = this.props;
    this.props.bAllowUnsetOption &&
      _.push(
        (0, _.jsx)(
          `option`,
          {
            value: -1,
            children: _(`#language_selection_none`),
          },
          `langpicker_unset`,
        ),
      );
    let _ = [],
      _ = this.props.realms || [_.k_ESteamRealmGlobal];
    for (let _ of _.GetLanguageListForRealms(_)) {
      if (_ && !_(_)) continue;
      let _ = _(_),
        _ = _(`#Language_` + _),
        _ = !!(_ && _(_));
      _.push({
        eLang: _,
        sLocName: _,
        bSupported: _,
      });
    }
    _.sort((_, _) =>
      _.bSupported == _.bSupported
        ? _.sLocName.localeCompare(_.sLocName)
        : _.bSupported
          ? -1
          : 1,
    );
    let _ = !1;
    for (let _ of _) {
      _.bSupported != _ &&
        (_.push(
          (0, _.jsx)(
            `option`,
            {
              className: _,
              disabled: !0,
              children: _(
                _.bSupported
                  ? `#LanguageGroup_Supported`
                  : `#LanguageGroup_Unsupported`,
              ),
            },
            _.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
          ),
        ),
        (_ = _.bSupported));
      let _ = _ && _(_.eLang),
        _ = _ && _(_.eLang),
        _ = _.sLocName;
      (_ &&
        _ !== 0 &&
        ((_ += ` `),
        (_ += _(
          `#Language_Last_Update`,
          _(_) +
            ` @ ` +
            _(_, {
              bForce24HourClock: !1,
            }),
        ))),
        _.push(
          (0, _.jsx)(
            `option`,
            {
              value: _.eLang,
              className: _(
                {
                  [_]: _,
                },
                (_.bSupported, void 0),
              ),
              children: _,
            },
            `langpicker` + _.eLang + (_ ? `_hasdata` : ``),
          ),
        ));
    }
    return _;
  }
  OnLanguageChange(_) {
    let { fnOnLanguageChanged: _, selectedLang: _ } = this.props,
      _ = Number.parseInt(_.currentTarget.value);
    _ != _ && _ && _(_);
  }
  render() {
    let { selectedLang: _, bDisabled: _, strTooltip: _ } = this.props,
      _ = this.GenerateLanguageOptions();
    return (0, _.jsx)(_, {
      toolTipContent: _,
      children: (0, _.jsx)(`select`, {
        value: _,
        onChange: this.OnLanguageChange,
        disabled: _,
        children: _,
      }),
    });
  }
};
(_([_], _.prototype, `OnLanguageChange`, null), (_ = _([_], _)));

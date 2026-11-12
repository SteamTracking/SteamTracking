import { _, _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import { _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _, _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~802e967112.js";
import { _, _ } from "./chunk~2f8c67b4de.js";
var _ = _(_()),
  _ = _(),
  _ = class extends _.Component {
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
function _(_) {
  let [_, _] = _(() => [
    _.Get().GetHasLocalizationContext(),
    _.Get().GetCurEditLanguage(),
  ]);
  return (0, _.jsx)(_, {
    selectedLang: _,
    fnLangHasData: _.Get().BHasLanguageData,
    fnOnLanguageChanged: _.Get().SetCurEditLanguage,
    bDisabled: !_,
    strTooltip: _ ? void 0 : _(`#Localization_EditorNotInFocus`),
  });
}
function _(_) {
  let { fnLangHasData: _ } = _;
  _.useEffect(
    () => (
      _.Get().SetHasLocalizationContext(!0),
      () => _.Get().SetHasLocalizationContext(!1)
    ),
    [],
  );
  let _ = _(() => {
    let _ = [];
    for (let _ = 0; _ < 32; ++_) _[_] = !!(_ && _(_));
    return _;
  });
  return (
    _.useEffect(() => _.Get().SetHasLanguage(_), [_]),
    (0, _.jsx)(_.Fragment, {})
  );
}

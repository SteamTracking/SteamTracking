import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _, _ } from "./main.js";
function _(_) {
  let { appid: _, profileUrl: _, dlc: _ } = _,
    _ = _
      ? `${_}/achievements/${_}`
      : `${_.COMMUNITY_BASE_URL}achievements/${_}`;
  return _ === void 0 ? _ : `${_}?dlc=${_}`;
}
function _(_) {
  return _(_);
}
var _ = _(_(), 1),
  _ = `CK7wluN09Eo-`,
  _ = `dc7pWlMQLmU-`,
  _ = `gKxbRyrbiIU-`,
  _ = {};
(_.arabic = () =>
  _(() => import(`./achievements_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./achievements_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./achievements_bulgarian.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./achievements_czech.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./achievements_danish.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./achievements_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./achievements_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./achievements_finnish.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./achievements_french.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./achievements_german.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./achievements_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./achievements_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./achievements_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./achievements_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./achievements_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./achievements_koreana.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./achievements_latam.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./achievements_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./achievements_norwegian.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./achievements_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./achievements_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./achievements_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./achievements_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./achievements_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./achievements_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./achievements_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./achievements_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./achievements_tchinese.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./achievements_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./achievements_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./achievements_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./achievements_vietnamese.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  return _ !== void 0 && _ < 10;
}
var _ = _();
function _(_) {
  if (_ !== void 0)
    return {
      "--icon-size": _ == `fill` ? `100%` : `${_}px`,
    };
}
function _(_) {
  let {
      imgURL: _,
      glow: _,
      pauseAnimation: _,
      hidden: _,
      alt: _,
      hideNativeTooltip: _ = !1,
      className: _,
      size: _,
      ..._
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback((_) => {
      _ &&
        (_.complete
          ? _(!0)
          : (_.onload = () => {
              _(!0);
            }));
    }, []),
    _ = _ && (_ || _),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _, _ && `QitWOKeXzIo-`),
    style: _,
    ..._,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `pZot2CAG0rQ-`,
          children: (0, _.jsx)(`div`, {
            className: `tzerkVxSWek-`,
            children: (0, _.jsx)(`div`, {
              className: `rl2nPtOHt2k-`,
            }),
          }),
        }),
      _
        ? (0, _.jsx)(`div`, {
            className: _(_, _ && `HTU-WDYrxMw-`),
            children: `?`,
          })
        : (0, _.jsx)(`img`, {
            ref: _,
            className: _(_, _ && `HTU-WDYrxMw-`),
            src: _ == `` ? void 0 : _,
            loading: `lazy`,
            alt: _,
            title: _ ? void 0 : _,
          }),
    ],
  });
}
function _(_) {
  let {
      achievement: _,
      globalUnlockPercentage: _,
      unlocked: _,
      forceVisible: _ = !1,
      hidden: _,
      ..._
    } = _,
    _ = _ ?? (!_ && !_ && _.hidden),
    _ = (_ ? _.icon_achieved : _.icon_unachieved) ?? ``,
    _ = _ && _(_),
    _ = _ ? _.Localize(`#AchievementSpoilerName`) : (_.name ?? ` `);
  return (0, _.jsx)(_, {
    hidden: _,
    imgURL: _,
    glow: _,
    alt: _,
    ..._,
  });
}
export { _, _, _, _ };

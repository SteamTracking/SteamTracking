import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
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
((_.arabic = () =>
  _(() => import(`./chunk~9465be5be3.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~2027cf6ba7.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~68086bdbd2.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~395548bcfb.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~f5cd104b90.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~b9b23c4881.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~30012300b3.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~85dbf37835.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~7310bd1e9f.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~faafba15c1.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~3344aa5ba1.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~e4e799e129.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~2c42a49fc3.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~c4e900cbd8.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~4d9917879e.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~87dcf8f3e0.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~b2f33036b0.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~1af5cd205c.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~621e94d76e.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~538bc539b9.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~c422b65626.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~db8db31702.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~ced2be1757.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~c6041e7242.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~78dc5c618e.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~219e0af30d.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~c0138fb192.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~5bf062d8db.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~b394970be5.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~9f9803f307.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~068f0b42dc.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~56c8ff51ea.js`), [], import.meta.url)));
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

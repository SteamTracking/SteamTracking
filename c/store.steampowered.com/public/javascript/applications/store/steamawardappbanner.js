import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~3720b337f3.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk~cf3721cc1c.js";
import { _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = `BedOijc5U30-`,
  _ = `f-g7wEuNEAA-`,
  _ = `iqSc52XeIiY-`,
  _ = `v3DSmoZ30uU-`,
  _ = `BpmyfBjit88-`,
  _ = `HnHHU4PawTU-`,
  _ = `AT8xNGEDAkc-`,
  _ = `BjZvuPglN8o-`,
  _ = `oUvs8MpUwjU-`,
  _ = `qITTYY7kjz4-`,
  _ = `DSFU798iR-I-`,
  _ = _();
function _(_) {
  let _ = _(),
    _ = _(_),
    { data: _ } = _(_ ? _ : void 0),
    _ = _.useMemo(() => _(_?.votes ?? []).includes(_), [_, _]);
  if (_(_)) return `nominations`;
  if (_ && _) return `voting`;
}
function _(_) {
  let { appID: _ } = _,
    _ = _(_);
  if (!_) return null;
  let _ = {
    "--banner-art": `url( ${_(`steamawards2026/sa2026_header_static.webp?v=1`)} )`,
    "--banner-tile": `url( ${_(`steamawards2026/page_tile.svg?v=1`)} )`,
  };
  return (0, _.jsx)(_, {
    href: _(_ == `nominations` ? `nominations` : ``),
    className: _,
    style: _,
    children: (0, _.jsx)(_, {
      appID: _,
      ePhase: _,
    }),
  });
}
var _ = 24,
  _ = {
    weekday: void 0,
    year: void 0,
    month: `short`,
    day: `numeric`,
    hour: `numeric`,
    timeZoneName: `short`,
    timeZone: `America/Los_Angeles`,
  };
function _(_) {
  let { appID: _, ePhase: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _ == `nominations`,
    _ = _?.name,
    _ =
      _ &&
      (0, _.jsx)(`span`, {
        className: _(`q3-ToRSptfI-`, _.length <= _ && `dJXhUVaEHbE-`),
        children: _,
      }),
    _ = _
      ? _
        ? _.LocalizeReact(`#SteamAwards_AppBanner_Nominate`, _)
        : _.Localize(`#SteamAwards_AppBanner_Nominate_NoName`)
      : _
        ? _.LocalizeReact(`#SteamAwards_AppBanner_Vote`, _)
        : _.Localize(`#SteamAwards_AppBanner_Vote_NoName`),
    _ = _.Localize(
      _
        ? `#SteamAwards_AppBanner_NominateUntil`
        : `#SteamAwards_AppBanner_VoteUntil`,
      _(_ ? _ : _, _),
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [_.Localize(`#SteamAwards_EventMainTitle`), ` `, _()],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(
          _
            ? `#SteamAwards_AppBanner_NominateBtn`
            : `#SteamAwards_AppBanner_VoteBtn`,
        ),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        "aria-hidden": !0,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _(`steamawards2026/trophy_220.png?v=1`),
            alt: ``,
          }),
          (0, _.jsx)(`span`, {
            className: _,
          }),
          (0, _.jsx)(`span`, {
            className: _,
          }),
        ],
      }),
    ],
  });
}
export { _ as SteamAwardAppBanner };

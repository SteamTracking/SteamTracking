import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _ } from "./historyutils.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `_5YxPcG58GcM-`,
  _ = `AYShSUpazpQ-`,
  _ = `HjTriTNInOs-`,
  _ = `jWG83h6aX0o-`,
  _ = `hIkabJ6m7Iw-`,
  _ = `ruViLASsnaU-`,
  _ = `_2u1btMDPW24-`,
  _ = `Ps-gpwoy9Is-`,
  _ = `L44OviB8cOM-`,
  _ = `K1CYINTJapk-`,
  _ = _();
function _(_) {
  let {
      tabs: _,
      bDisableRouting: _,
      startingTab: _,
      controlledTab: _,
      OnTabChanged: _,
      classNameCtn: _,
      classNameTab: _,
      focusRingHasBorderRadius: _,
      classNameTabContent: _,
      preferredFocus: _,
      bVerticalTabs: _,
      bSticky: _,
      bChecklistMode: _,
    } = _,
    _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(
      () => _ || (!_ && _(_, `tab`) ? (_(_, `tab`) ?? ``) : ``),
    );
  (0, _.useEffect)(() => {
    if (!_.bDisableRouting && _) {
      let _ = _(_, `tab`);
      _ && _(_);
    }
  }, [_, _.key, _.bDisableRouting, _]);
  let _ = _.useCallback(
      (_) => {
        (_(_.key),
          _ || _(_, `tab`, _.key),
          _?.(_.key),
          _.onClick && _.onClick(_));
      },
      [_, _, _],
    ),
    _ = _.filter((_) => !_.hidden);
  if (!_.length) return null;
  let _ = _ ?? _,
    _ = _.find((_) => _.key === _) || _[0],
    _ = _ ? (_ ?? _[0].key) : void 0,
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          className: _(
            _,
            _ && `iBLrw-7gAIM-`,
            _ && `dLhmGXBhTkM-`,
            _ && `ShXw34CXvuE-`,
            _,
          ),
          navEntryPreferPosition: _ ? _.PREFERRED_CHILD : _.FIRST,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                tab: _,
                OnTabClick: _,
                classNameTab: _,
                focusRingHasBorderRadius: _,
                active: _.key === _.key,
                preferredFocus: _ === _.key,
              },
              _.key,
            ),
          ),
        }),
        _ &&
          (0, _.jsx)(_, {
            className: _,
            children: _.contents,
          }),
      ],
    });
  return _
    ? (0, _.jsx)(_, {
        className: _(_),
        children: _,
      })
    : _;
}
function _(_) {
  let { statusType: _ = `success`, bShowStatusBox: _, children: _ } = _,
    _ = ``;
  return (
    _ === `success`
      ? (_ = _)
      : _ === `danger`
        ? (_ = _)
        : _ === `caution`
          ? (_ = _)
          : _ === `info`
            ? (_ = _)
            : _ === `incomplete` && (_ = _),
    (0, _.jsx)(`div`, {
      className: _(_, _, _ ? _ : ``),
      children: _,
    })
  );
}
function _(_) {
  let {
    tab: _,
    OnTabClick: _,
    classNameTab: _,
    focusRingHasBorderRadius: _,
    active: _,
    preferredFocus: _,
  } = _;
  return (0, _.jsx)(_, {
    condition: !!(_.statusToolTip || _.tooltip),
    wrap: (_) =>
      (0, _.jsx)(_, {
        toolTipContent: _.statusToolTip || _.tooltip,
        children: _,
      }),
    children: (0, _.jsxs)(_, {
      className: _(_, _ && `Tw-TchJW1T8-`, _ && `ActiveTab`, _),
      onActivate: () => _(_),
      preferredFocus: _,
      focusRingHasBorderRadius: _,
      children: [
        !!_.vo_warning &&
          (0, _.jsx)(_, {
            toolTipContent: _.vo_warning,
            children: (0, _.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: _(`#EventEditor_VOWarning`),
            }),
          }),
        _.status,
        _.name,
      ],
    }),
  });
}

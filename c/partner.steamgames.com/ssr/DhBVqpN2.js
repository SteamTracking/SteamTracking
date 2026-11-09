var _ = _(_());
function _(_, _) {
  let _;
  if (typeof _ == `string`) _ = _;
  else if (`location` in _) _ = _.location.search;
  else if (`search` in _) _ = _.search;
  else return;
  let _ = new URLSearchParams(_.substring(1));
  if (_.has(_)) {
    let _ = _.getAll(_);
    return _[_.length - 1];
  }
}
function _(_, _, _, _ = !1) {
  let _ = new URLSearchParams(_.location.search.substring(1));
  if (_ != null && _ != null) {
    if (_.get(_) == _) return;
    _.set(_, _);
  } else {
    if (!_.has(_)) return;
    _.delete(_);
  }
  _
    ? _.replace(`?${_.toString()}`, {
        ..._.location.state,
      })
    : _.push(`?${_.toString()}`);
}
var _ = `JLkR0NlourU-`,
  _ = `bmAKm-R4AkE-`,
  _ = `O1wPUX5f9I0-`,
  _ = `XF-oRtgsHLs-`,
  _ = `yga8ynmvmcQ-`,
  _ = `ctSkk16BCok-`,
  _ = `xSTBvIaoqLM-`,
  _ = `_7kcmgcwiz0A-`,
  _ = `is24-JDWoAE-`,
  _ = `WysDxYJ4ihg-`,
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
            _ && `OhNSDp7NQ5E-`,
            _ && `UgmRTpETQKM-`,
            _ && `eCBAziqQkTU-`,
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
      className: _(_, _ && `_279g3H5OK5Q-`, _ && `ActiveTab`, _),
      onActivate: () => _(_),
      preferredFocus: _,
      focusRingHasBorderRadius: _,
      children: [
        !!_.vo_warning &&
          (0, _.jsx)(_, {
            toolTipContent: _.vo_warning,
            children: (0, _.jsx)(`div`, {
              className: `GgHSSke3Om8-`,
              children: _(`#EventEditor_VOWarning`),
            }),
          }),
        _.status,
        _.name,
      ],
    }),
  });
}

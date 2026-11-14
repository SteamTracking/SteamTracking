_();
var _ = `K0V2SQSqdng-`,
  _ = `ex9P5nB0SVY-`,
  _ = _();
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: (0, _.jsx)(`span`, {
      className: _,
      children: _.children,
    }),
  });
}
var _ = `lyWzllKSmIk-`,
  _ = `UaL62AQUKkY-`,
  _ = `jpTV7MUPh78-`,
  _ = {
    table: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  };
function _(_) {
  let _ = _(_.args, `noborder`),
    _ = _(_.args, `equalcells`),
    _ = _(_.args, `colwidth`);
  return (0, _.jsxs)(`table`, {
    className: _(_, `BB_Table`, _ && `_5W82LoeXbQY-`, _ && `kzYJe9usRrQ-`),
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
    _ =
      _?.length == 0
        ? void 0
        : {
            width: _,
          },
    _ = _(_.args, `colspan`),
    _ = _(_.args, `rowspan`),
    _ = {};
  return (
    _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
    _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
    (0, _.jsx)(_, {
      className: _(_, _ == `td` && `BB_TableData`),
      ..._,
      style: _,
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
function _(_, _) {
  return {
    linkMode: _,
    bCanRevealRemovedLinks: !!_.bIsSupport || !!_.bIsGlobalModerator,
  };
}
function _() {
  return {
    strLabel: _.Localize(`#Community_RemoveLink_BeWary`),
    strTooltip: _.Localize(`#Community_RemoveLink_Tooltip`),
  };
}
function _(_) {
  return _(_, _(), _.dynamicLinks);
}

_();
var _ = _(_(), 1),
  _ = `HPdhJYIogn4-`,
  _ = `YcSm7m2NnqU-`,
  _ = `_4CRyclgeHl4-`,
  _ = `WmPj-p5wegE-`,
  _ = `-IN79XL9SlI-`,
  _ = `XA3dYwtMdc4-`,
  _ = `Tn4B4CyfYls-`,
  _ = `ntNInstEuNQ-`,
  _ = _(),
  _ = _({
    Component: _,
  }),
  _ = {
    home: _,
    chart: _,
    playcircle: _,
    deck: _,
    calendar: (_) =>
      (0, _.jsx)(_, {
        color: `#C3D3D8`,
        ..._,
      }),
  };
function _({ children: _ }) {
  let { rgSections: _ } = _.useLoaderData();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            className: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  section: _,
                },
                _,
              ),
            ),
          }),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, `SteamChartsShell`),
        children: (0, _.jsx)(`div`, {
          className: void 0,
          children: (0, _.jsx)(_, {
            children: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { section: _ } = _,
    _ = (0, _.default)(
      _,
      _.strModifier === `weekly` && `mqXMP0ct0yQ-`,
      _.strModifier === `monthly` && `rPJbaHwpIic-`,
    );
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _.strHeader &&
        (0, _.jsx)(`div`, {
          className: `VGRHH1W2CEA-`,
          children: _.strHeader,
        }),
      (0, _.jsx)(_, {
        className: _,
        children: _.rgItems.map((_, _) => {
          let _ = _[_.eIcon];
          return (0, _.jsxs)(
            _,
            {
              href: _.strHref,
              className: (0, _.default)(_.bActive && `yY5kIMMmcbU-`),
              children: [
                (0, _.jsx)(`span`, {
                  className: _,
                  children: (0, _.jsx)(_, {}),
                }),
                _.strLabel,
              ],
            },
            _,
          );
        }),
      }),
    ],
  });
}
export { _ as route };

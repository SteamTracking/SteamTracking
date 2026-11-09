var _ = _(_(), 1),
  _ = `BvATwcUCrt0-`,
  _ = _(),
  _ = (0, _.createContext)({}),
  _ = (0, _.createContext)(() => {});
function _(_) {
  let [_, _] = (0, _.useState)({});
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = _(_(), 1),
  _ = _.memo(function (_) {
    let {
        defaultTextSize: _,
        accentColor: _ = `blue`,
        dullColor: _ = `greyneutral`,
        successColor: _ = `green`,
        warningColor: _ = `yellow`,
        errorColor: _ = `red`,
        bodyTextColor: _ = `text-light`,
        successTextColor: _ = `text-green`,
        warningTextColor: _ = `text-yellow`,
        errorTextColor: _ = `text-red`,
        breakpoints: _,
        variants: _,
        popoverPresentation: _,
        children: _,
        zoo: _,
      } = _,
      _ = _.useRef(null);
    _(_, _, _, _);
    let _;
    return (
      _ &&
        (_ = {
          "--default-font-size": `var(--text-size-${_})`,
          "--default-line-height": `var(--line-height-${_})`,
          "--default-letter-spacing": `var(--letter-spacing-${_})`,
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          breakpoints: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(`div`, {
              ref: _,
              className: (0, _.default)(_, `noOpinionatedGlobalStyles`),
              style: _,
              children: (0, _.jsxs)(_, {
                accentColor: _,
                dullColor: _,
                successColor: _,
                warningColor: _,
                errorColor: _,
                bodyTextColor: _,
                successTextColor: _,
                warningTextColor: _,
                errorTextColor: _,
                variants: _,
                popoverPresentation: _,
                children: [_, !1],
              }),
            }),
          }),
        }),
      })
    );
  });
function _(_, _, _, _) {
  _.useLayoutEffect(() => {
    let _ = _.current?.ownerDocument.documentElement;
    if (!_) return;
    let _ = [],
      _ = (_, _) => {
        typeof _ == `string` &&
          (_.push([_, _.getAttribute(_)]), _.setAttribute(_, _));
      };
    return (
      _(`data-accent-color`, _),
      _(`data-dull-color`, _),
      _(`data-body-text-color`, _),
      () => {
        for (let [_, _] of _)
          _ === null ? _.removeAttribute(_) : _.setAttribute(_, _);
      }
    );
  }, [_, _, _, _]);
}
function _(_) {
  let { children: _ } = _,
    { formFactorOverride: _ } = _();
  return (0, _.jsx)(_, {
    formFactor: _,
    children: _,
  });
}

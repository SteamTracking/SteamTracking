import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `ebvruITp5l4-`,
  _ = `lpZBduTm0mM-`,
  _ = {};
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      let _ = !0;
      _[_]
        ? _[_].refCount++
        : (_[_] = {
            list: window.matchMedia(_),
            refCount: 1,
          });
      let _ = _[_].list,
        _ = () => {
          _ && _(_.matches);
        };
      return (
        _(),
        _.addEventListener(`change`, _),
        () => {
          (_ = !1),
            _.removeEventListener(`change`, _),
            _[_].refCount--,
            _[_].refCount === 0 && delete _[_];
        }
      );
    }, [_]),
    _
  );
}
var _ = _(),
  _ = (0, _.forwardRef)(function (_, _) {
    let {
        component: _,
        padding: _,
        paddingX: _,
        paddingY: _,
        paddingRight: _,
        paddingLeft: _,
        paddingTop: _,
        paddingBottom: _,
        margin: _,
        marginX: _,
        marginY: _,
        marginLeft: _,
        marginTop: _,
        marginRight: _,
        marginBottom: _,
        display: _,
        flexDirection: _,
        flexWrap: _,
        justifyContent: _,
        alignItems: _,
        flexGrow: _,
        flexShrink: _,
        flexBasis: _,
        flex: _,
        className: _,
        style: _,
        ..._
      } = _,
      _ = _(
        _(`padding-left`, _ || _ || _),
        _(`padding-top`, _ || _ || _),
        _(`padding-right`, _ || _ || _),
        _(`padding-bottom`, _ || _ || _),
        _(`margin-left`, _ || _ || _),
        _(`margin-top`, _ || _ || _),
        _(`margin-right`, _ || _ || _),
        _(`margin-bottom`, _ || _ || _),
        _,
      ),
      _ = {
        display: _,
        flexDirection: _,
        flexWrap: _,
        justifyContent: _,
        alignItems: _,
        flexGrow: _,
        flexShrink: _,
        flexBasis: _,
        flex: _,
        ..._,
      },
      _ = {
        className: _,
        style: _,
        ref: _,
        ..._,
      };
    return _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : (0, _.jsx)(_, {
          className: _,
          style: _,
          ref: _,
          ..._,
        });
  }),
  _ = (0, _.forwardRef)(function (_, _) {
    let {
        children: _,
        style: _,
        spacing: _,
        horizontalSpacing: _,
        verticalSpacing: _,
        itemClassName: _,
        "flow-children": _ = `row`,
        ..._
      } = _,
      _ = _(),
      _ = _.spacing[_(_ || _ || `none`)],
      _ = _.spacing[_(_ || _ || `none`)];
    return (0, _.jsx)(_, {
      "flow-children": _,
      ref: _,
      style: {
        ...(_ || {}),
        marginTop: _(-_),
      },
      ..._,
      children: (0, _.jsx)(`div`, {
        style: {
          marginInlineStart: _(-_),
        },
        className: _,
        children: _.Children.map(_, (_) =>
          _ == null
            ? null
            : (0, _.jsx)(_, {
                paddingLeft: _ || _,
                paddingTop: _ || _,
                className: _,
                children: _,
              }),
        ),
      }),
    });
  }),
  _ = (0, _.forwardRef)(function (_, _) {
    let { spacing: _, itemClassName: _, children: _, className: _, ..._ } = _,
      _ = _.Children.count(_);
    return (0, _.jsx)(_, {
      "flow-children": `column`,
      ref: _,
      className: _,
      ..._,
      children: _.Children.map(_, (_, _) =>
        _ == null
          ? null
          : (0, _.jsx)(_, {
              paddingBottom: _ === _ - 1 ? void 0 : _,
              className: _(_, _),
              children: _,
            }),
      ),
    });
  }),
  _ = (_) => `${_}px`,
  _ = {
    spacing: {
      none: 0,
      xxsmall: 4,
      xsmall: 8,
      small: 12,
      medium: 20,
      large: 32,
      xlarge: 48,
      xxlarge: 96,
      xxxlarge: 192,
    },
    breakpoint: {
      mobile: 0,
      tablet: 740,
      desktop: 965,
    },
  },
  _ = (0, _.createContext)(_),
  _ = () => (0, _.useContext)(_),
  _ = (_) => {
    let { config: _, children: _ } = _,
      _ = _ || _,
      _ = (0, _.useMemo)(() => _(_), [_]),
      [_, _] = (0, _.useState)(0);
    return (
      (0, _.useLayoutEffect)(() => {
        _((_) => _ + 1);
      }, [_]),
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`style`, {
            children: _,
          }),
          _,
        ],
      })
    );
  };
function _(_) {
  return [
    `padding`,
    `padding-top`,
    `padding-bottom`,
    `padding-right`,
    `padding-left`,
    `margin`,
    `margin-left`,
    `margin-top`,
    `margin-right`,
    `margin-bottom`,
  ]
    .map((_) =>
      Object.keys(_.spacing)
        .map((_) => _(_, _, _.spacing[_]))
        .join(`
`),
    )
    .join(`
`);
}
var _ = (_, _) => `${_}-${_}`,
  _ = {
    "padding-left": `padding-inline-start`,
    "padding-right": `padding-inline-end`,
    "margin-left": `margin-inline-start`,
    "margin-right": `margin-inline-end`,
  },
  _ = (_, _, _) => `.${_(_, _)} { ${_[_] ?? _}: ${_}px; }`,
  _ = (_, _) => {
    let _ = _(_);
    return _ ? _(_, _) : ``;
  };
function _(_) {
  let _ = _(),
    _ = _(_);
  return (_ && _.spacing[_]) || 0;
}
function _(_) {
  let _ = _();
  return Array.isArray(_)
    ? _[Math.min(_ === `desktop` ? 2 : +(_ === `tablet`), _.length - 1)]
    : _;
}
function _() {
  let {
      breakpoint: { tablet: _, desktop: _ },
    } = _(),
    _ = _(`(min-width: ${_}px)`),
    _ = _(`(min-width: ${_}px)`);
  return _() ? `mobile` : _ ? `desktop` : _ ? `tablet` : `mobile`;
}
function _(_) {
  return _.children(_());
}
function _(_) {
  return (0, _.jsx)(_, {
    component: _,
    ..._,
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _ };

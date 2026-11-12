var _ = _(_());
(_.Component, _.Component);
var _ = function (_, _) {
    return typeof _ == `function` ? _(_) : _;
  },
  _ = function (_, _) {
    return typeof _ == `string` ? _(_, null, null, _) : _;
  },
  _ = function (_) {
    return _;
  },
  _ = _.forwardRef;
_ === void 0 && (_ = _);
function _(_) {
  return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
}
var _ = _(function (_, _) {
    var _ = _.innerRef,
      _ = _.navigate,
      _ = _.onClick,
      _ = _(_, [`innerRef`, `navigate`, `onClick`]),
      _ = _.target,
      _ = _({}, _, {
        onClick: function (_) {
          try {
            _ && _(_);
          } catch (_) {
            throw (_.preventDefault(), _);
          }
          _.defaultPrevented ||
            _.button !== 0 ||
            (_ && _ !== `_self`) ||
            _(_) ||
            (_.preventDefault(), _());
        },
      });
    return ((_.ref = _ === _ ? _ : _ || _), _.createElement(`a`, _));
  }),
  _ = _(function (_, _) {
    var _ = _.component,
      _ = _ === void 0 ? _ : _,
      _ = _.replace,
      _ = _._,
      _ = _.innerRef,
      _ = _(_, [`component`, `replace`, `to`, `innerRef`]);
    return _.createElement(_.Consumer, null, function (_) {
      !_ && _(!1);
      var _ = _.history,
        _ = _(_(_, _.location), _.location),
        _ = _ ? _.createHref(_) : ``,
        _ = _({}, _, {
          href: _,
          navigate: function () {
            var _ = _(_, _.location),
              _ = _(_.location) === _(_(_));
            (_ || _ ? _.replace : _.push)(_);
          },
        });
      return (
        _ === _ ? (_.innerRef = _) : (_.ref = _ || _), _.createElement(_, _)
      );
    });
  }),
  _ = function (_) {
    return _;
  },
  _ = _.forwardRef;
_ === void 0 && (_ = _);
function _() {
  return [...arguments]
    .filter(function (_) {
      return _;
    })
    .join(` `);
}
_(function (_, _) {
  var _ = _[`aria-current`],
    _ = _ === void 0 ? `page` : _,
    _ = _.activeClassName,
    _ = _ === void 0 ? `active` : _,
    _ = _.activeStyle,
    _ = _.className,
    _ = _.exact,
    _ = _.isActive,
    _ = _.location,
    _ = _.sensitive,
    _ = _.strict,
    _ = _.style,
    _ = _._,
    _ = _.innerRef,
    _ = _(_, [
      `aria-current`,
      `activeClassName`,
      `activeStyle`,
      `className`,
      `exact`,
      `isActive`,
      `location`,
      `sensitive`,
      `strict`,
      `style`,
      `to`,
      `innerRef`,
    ]);
  return _.createElement(_.Consumer, null, function (_) {
    !_ && _(!1);
    var _ = _ || _.location,
      _ = _(_(_, _), _),
      _ = _.pathname,
      _ = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, `\\$1`),
      _ = _
        ? _(_.pathname, {
            path: _,
            exact: _,
            sensitive: _,
            strict: _,
          })
        : null,
      _ = !!(_ ? _(_, _) : _),
      _ = typeof _ == `function` ? _(_) : _,
      _ = typeof _ == `function` ? _(_) : _;
    _ && ((_ = _(_, _)), (_ = _({}, _, _)));
    var _ = _(
      {
        "aria-current": (_ && _) || null,
        className: _,
        style: _,
        _: _,
      },
      _,
    );
    return (
      _ === _ ? (_.innerRef = _) : (_.ref = _ || _), _.createElement(_, _)
    );
  });
});
var _ = `H3cT2TnVIUI-`,
  _ = _();
function _(_) {
  let { crumbs: _, className: _, bHideLastArrow: _ } = _;
  return !_ || _.length == 0
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            className: `blockbg`,
            "flow-children": `row`,
            children: _.map((_, _) => {
              let _ = [];
              return (
                _.url.startsWith(`http`)
                  ? _.push(
                      (0, _.jsx)(
                        _,
                        {
                          href: _.url,
                          children: _.name,
                        },
                        `anchor_` + _.name,
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _,
                        {
                          _: _.url,
                          children: _.name,
                        },
                        `link_` + _.name,
                      ),
                    ),
                (!_ || _ < _.length - 1) &&
                  _.push(
                    (0, _.jsx)(
                      `span`,
                      {
                        children: `\xA0> `,
                      },
                      _.name + `span`,
                    ),
                  ),
                _
              );
            }),
          }),
          (0, _.jsx)(`div`, {
            style: {
              clear: `left`,
            },
          }),
        ],
      });
}
var _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  let { nAppID: _, rgCrumbs: _, strSubtitle: _, strAppName: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    _ = _ || _?.name || ``,
    _ = (0, _.useMemo)(() => {
      let _ = [
        {
          name: _.Localize(`#BreadCrumbs_Steamworks`),
          url: `${_.PARTNER_BASE_URL}`,
        },
        {
          name: _.Localize(`#BreadCrumbs_AppAdmin`),
          url: `${_.PARTNER_BASE_URL}apps`,
        },
        {
          name: _ || String(_),
          url: `${_.PARTNER_BASE_URL}apps/landing/${_}`,
        },
      ];
      return (_ && _.length > 0 && _.push(..._), _);
    }, [_, _, _]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        crumbs: _,
        bHideLastArrow: !0,
        className: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [_, ` (`, _, `)`, _ ? ` - ` + _ : ``],
      }),
    ],
  });
}

var _ = _(_(), 1),
  _ = {};
(_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
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
  (_.korean = () => _(() => import(`./chunk.js`), [], import.meta.url)),
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
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _(),
  _ = (0, _.createContext)(-1),
  _ = class extends _.Component {
    state = {};
    static getDerivedStateFromError(_) {
      return _ instanceof Error
        ? {
            error: {
              message: _.message,
            },
          }
        : {
            error: JSON.parse(JSON.stringify(_)),
          };
    }
    static getDerivedStateFromProps(_, _) {
      return _.renderContext == _.renderContext
        ? null
        : {
            renderContext: _.renderContext,
            error: void 0,
          };
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : (0, _.jsx)(this.props.RenderErrorComponent, {
            error: this.state.error,
            className: this.props.errorClassName,
          });
    }
  };
function _(_) {
  let _ = _(),
    _ = (0, _.useContext)(_) + 1;
  (_.deepestRenderedErrorBoundaryId ?? -1) < _ &&
    (_.deepestRenderedErrorBoundaryId = _);
  let _ = _.RenderErrorComponent ?? _;
  return _.error && _ === 0
    ? (0, _.jsx)(_, {
        error: _.error,
        className: _.errorClassName,
      })
    : (0, _.jsx)(_.Provider, {
        value: _,
        children: (0, _.jsx)(_, {
          RenderErrorComponent: _,
          errorClassName: _.errorClassName,
          renderContext: _,
          children: _.children,
        }),
      });
}
function _(_) {
  let _ = _.error;
  return typeof _ != `object` || !_
    ? (0, _.jsx)(`div`, {
        className: _.className,
        children: (0, _.jsx)(_, {
          hasDetails: !1,
        }),
      })
    : `localizedErrorMessage` in _ && typeof _.localizedErrorMessage == `string`
      ? (0, _.jsxs)(`div`, {
          className: _.className,
          children: [
            (0, _.jsx)(_, {
              hasDetails: !0,
            }),
            (0, _.jsx)(`span`, {
              children: _.localizedErrorMessage,
            }),
          ],
        })
      : `stack` in _ && typeof _.stack == `string`
        ? (0, _.jsxs)(`div`, {
            className: _.className,
            children: [
              (0, _.jsx)(_, {
                hasDetails: !0,
              }),
              (0, _.jsx)(`pre`, {
                children: _.stack,
              }),
            ],
          })
        : (0, _.jsx)(`div`, {
            className: _.className,
            children: (0, _.jsx)(_, {
              hasDetails: !1,
            }),
          });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        children: _.Localize(`#SomethingWentWrong_title`),
      }),
      _.hasDetails
        ? (0, _.jsx)(`p`, {
            children: _.Localize(`#SomethingWentWrong_subtitle_withDetails`),
          })
        : (0, _.jsx)(`p`, {
            children: _.Localize(`#SomethingWentWrong_subtitle_noDetails`),
          }),
    ],
  });
}
export { _ };

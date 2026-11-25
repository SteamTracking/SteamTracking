var _ = (function () {
    let _ = typeof document < `u` && document.createElement(`link`).relList;
    return _ && _.supports && _.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  _ = function (_, _) {
    return new URL(_, _).href;
  },
  _ = {},
  _ = function (_) {
    return _.pathname.endsWith(`.css`);
  },
  _ = function (_, _, _) {
    if (_ in _) return _[_];
    let _ = _();
    if (!_) {
      _[_] = void 0;
      return;
    }
    let _ = _.then(
      () => {
        _[_] = void 0;
      },
      (_) => {
        throw ((_[_] = void 0), _);
      },
    );
    return ((_[_] = _), _);
  },
  _ = function (_, _, _) {
    let _ = Promise.resolve();
    if (_ && _.length > 0) {
      let _,
        _ = document.querySelector(`meta[property=csp-nonce]`),
        _ = _?.nonce || _?.getAttribute(`nonce`);
      function _(_) {
        return Promise.all(
          _.map((_) =>
            Promise.resolve(_).then(
              (_) => ({
                status: `fulfilled`,
                value: _,
              }),
              (_) => ({
                status: `rejected`,
                reason: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(_))
          : new URL(_, import.meta.url);
      }
      _ = _(
        _.map((_) => {
          _ = _(_, _);
          let _ = _(_),
            _ = _(_);
          return _(_, _.href, () => {
            if (_ === void 0) {
              _ = {
                all: new Set(),
                styles: new Set(),
              };
              let _ = document.getElementsByTagName(`link`);
              for (let _ = _.length - 1; _ >= 0; _--) {
                let _ = _[_];
                (_.all.add(_.href),
                  _.rel === `stylesheet` && _.styles.add(_.href));
              }
            }
            if ((_ ? _.styles : _.all).has(_.href)) return;
            let _ = document.createElement(`link`);
            if (
              ((_.rel = _ ? `stylesheet` : _),
              _ || (_._ = `script`),
              (_.crossOrigin = ``),
              (_.href = _.href),
              _ && _.setAttribute(`nonce`, _),
              document.head.appendChild(_),
              _)
            )
              return new Promise((_, _) => {
                (_.addEventListener(`load`, _),
                  _.addEventListener(`error`, () =>
                    _(Error(`Unable to preload CSS for ${_}`)),
                  ));
              });
          });
        }).filter((_) => _ !== void 0),
      );
    }
    function _(_) {
      let _ = new Event(`vite:preloadError`, {
        cancelable: !0,
      });
      if (((_.payload = _), window.dispatchEvent(_), !_.defaultPrevented))
        throw _;
    }
    return _.then((_) => {
      for (let _ of _ || []) _.status === `rejected` && _(_.reason);
      return _().catch(_);
    });
  };

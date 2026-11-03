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
  _ = function (_, _, _) {
    let _ = Promise.resolve();
    if (_ && _.length > 0) {
      let _ = document.getElementsByTagName(`link`),
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
          ? import.meta.resolve(_)
          : new URL(_, import.meta.url).href;
      }
      _ = _(
        _.map((_) => {
          if (((_ = _(_, _)), (_ = _(_)), _ in _)) return;
          _[_] = !0;
          let _ = _.endsWith(`.css`);
          for (let _ = _.length - 1; _ >= 0; _--) {
            let _ = _[_];
            if (_.href === _ && (!_ || _.rel === `stylesheet`)) return;
          }
          let _ = document.createElement(`link`);
          if (
            ((_.rel = _ ? `stylesheet` : _),
            _ || (_._ = `script`),
            (_.crossOrigin = ``),
            (_.href = _),
            _ && _.setAttribute(`nonce`, _),
            document.head.appendChild(_),
            _)
          )
            return new Promise((_, _) => {
              _.addEventListener(`load`, _),
                _.addEventListener(`error`, () =>
                  _(Error(`Unable to preload CSS for ${_}`)),
                );
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
export { _ };

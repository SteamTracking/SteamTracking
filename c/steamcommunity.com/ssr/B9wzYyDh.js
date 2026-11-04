var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { clientAssets: _, staticMode: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.preload.map((_, _) =>
        _._ === `hmr`
          ? (0, _.jsx)(
              `script`,
              {
                type: `module`,
                src: _.href,
              },
              _,
            )
          : _._ === `script`
            ? _
              ? null
              : (0, _.jsx)(
                  `link`,
                  {
                    rel: `modulepreload`,
                    href: _.href,
                    _: _._,
                    integrity: _.integrity,
                    crossOrigin: `anonymous`,
                  },
                  _,
                )
            : (0, _.jsx)(
                `link`,
                {
                  rel: `preload`,
                  href: _.href,
                  _: _._,
                  integrity: _.integrity,
                  crossOrigin: `anonymous`,
                  precedence: `1`,
                },
                _,
              ),
      ),
      _.css.map((_, _) =>
        (0, _.jsx)(
          `link`,
          {
            rel: `stylesheet`,
            href: _.href,
            integrity: _.integrity,
            crossOrigin: `anonymous`,
            precedence: `1`,
          },
          _.href,
        ),
      ),
    ],
  });
}
var _ = _.createContext(void 0);
function _({ children: _, ..._ }) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_) throw Error(`Used <Head /> outside of router context`);
  let { metadata: _, clientAssets: _, nonce: _, snr: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`meta`, {
        name: `viewport`,
        content: `width=device-width,initial-scale=1${_.IN_MOBILE_WEBVIEW ? `,user-scalable=no` : ``}`,
      }),
      (0, _.jsx)(`meta`, {
        name: `theme-color`,
        content: `#171a21`,
      }),
      (0, _.jsx)(`meta`, {
        property: `csp-nonce`,
        nonce: _ ?? document.querySelector(`meta[property=csp-nonce]`)?.nonce,
      }),
      _?.title &&
        (0, _.jsx)(`title`, {
          children: _.title,
        }),
      _?.description &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`meta`, {
              name: `description`,
              content: _.description,
            }),
            (0, _.jsx)(`meta`, {
              property: `og:description`,
              content: _.description,
            }),
          ],
        }),
      _?.canonicalURL &&
        (0, _.jsx)(`link`, {
          rel: `canonical`,
          href: _.canonicalURL,
        }),
      (0, _.jsx)(_, {
        metadata: _,
      }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `valve:snr`,
          content: _.ComputeLinkPrefix(
            _.domain,
            _.controller,
            _.method,
            _.submethod,
          ),
        }),
      (0, _.jsx)(_, {
        clientAssets: _,
        staticMode: _.static,
      }),
    ],
  });
}
function _(_) {
  let { metadata: _ } = _;
  if (!_) return null;
  let {
      shareImage: _,
      shareTitle: _,
      shareImageAlt: _,
      canonicalURL: _,
      shareCardFormat: _,
      articlePublishedTime: _,
      articleModifiedTime: _,
    } = _,
    _ = (Array.isArray(_) ? _ : [_]).filter(Boolean),
    _ = !!(_ || _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:title`,
          content: _,
        }),
      _.map((_, _) =>
        (0, _.jsx)(
          `meta`,
          {
            property: `og:image`,
            content: _,
          },
          _,
        ),
      ),
      !!_.length &&
        _ &&
        (0, _.jsx)(`meta`, {
          name: `twitter:image:alt`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:url`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          name: `twitter:card`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:type`,
          content: `article`,
        }),
      !!_ &&
        (0, _.jsx)(`meta`, {
          property: `article:published_time`,
          content: _(_),
        }),
      !!_ &&
        (0, _.jsx)(`meta`, {
          property: `article:modified_time`,
          content: _(_),
        }),
    ],
  });
}
function _(_) {
  return new Date(_ * 1e3).toISOString();
}
export { _, _, _ };

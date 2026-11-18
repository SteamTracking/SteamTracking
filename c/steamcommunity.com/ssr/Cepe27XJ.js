_();
var _ = `hc8uaM6y5uM-`,
  _ = `Bqb09r3JJng-`,
  _ = `_1P36dMsQFmI-`,
  _ = `qzV1N1pVGJE-`,
  _ = `h1sA2EbGYzA-`,
  _ = `O2VS4fXZ8jQ-`,
  _ = `_0dWaIVQSefg-`,
  _ = `xFBLIVAoJC8-`,
  _ = `GfffL2tdwd8-`,
  _ = `_1u2KKKlF3L8-`,
  _ = `_7q1F8xOf9Os-`,
  _ = `_39P2l-1E2n8-`,
  _ = _(),
  _ = {
    Box: _,
    Preview: _,
    Type: void 0,
  };
function _(_) {
  return (0, _.jsx)(`img`, {
    className: _,
    src: _.strURL || void 0,
    alt: _.strAlt ?? ``,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsxs)(`a`, {
    href: _.strURL,
    className: _.Box,
    "data-modal-content-sizetofit": !!_.bSizeToFit,
    "data-appid": _.appid,
    "data-publishedfileid": _.publishedfileid,
    children: [
      (0, _.jsx)(_, {
        strURL: _.strPreviewURL,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            children: _.strTitle,
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`span`, {
              className: _.Type,
              children: _.strType,
            }),
          }),
          _.author &&
            (0, _.jsx)(_, {
              children: _.author,
            }),
          (0, _.jsx)(_, {
            children: _.strDescription,
          }),
        ],
      }),
    ],
  });
}
function _(_, _) {
  switch (_.preference_state) {
    case 0:
    case 1:
      return !0;
    case 2:
      return !1;
    default:
      switch (_) {
        case `youtube`:
          return _.third_party_content?.youtube;
        case `vimeo`:
          return _.third_party_content?.vimeo;
        case `sketchfab`:
          return _.third_party_content?.sketchfab;
        case `generic`:
          return !1;
      }
  }
}
function _(_) {
  switch (_.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function _(_, _, _, _) {
  if (_(_))
    return {
      version: 1,
      preference_state: 0,
    };
  if (_) {
    let _ = (await _.GetCookiePreferences(_, {})).Body().toObject().preferences;
    if (_ && _.version !== void 0 && _.version != 0) return _;
  }
  try {
    let _ = _(_);
    if (_) {
      let _ = JSON.parse(_);
      if (_ && _.version !== void 0 && _.version != 0) return _;
    }
  } catch {}
  return _ in _.eucountries || _ in _.eeacountries || _ === `CH`
    ? {
        version: 1,
        preference_state: 4,
      }
    : {
        version: 1,
        preference_state: 0,
      };
}
function _(_) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => _(_, _.logged_in, _.COUNTRY, _.EREALM),
  };
}
function _() {
  let _ = _();
  return _(_(_));
}
function _(_) {
  let { data: _ } = _();
  return _ ? _(_, _) : void 0;
}
function _() {
  let { data: _ } = _();
  return _ ? !_(_) : void 0;
}

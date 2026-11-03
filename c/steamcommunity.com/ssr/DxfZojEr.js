var _ = _(_(), 1),
  _ = `LeEh4XRr-pI-`,
  _ = `QT1eegn4bN0-`,
  _ = `Huk1UNtQ5ps-`,
  _ = _();
function _(_) {
  let { strLabel: _, strTooltip: _, bCanReveal: _ } = _,
    [_, _] = _.useState(!1);
  if (_)
    return (0, _.jsx)(`span`, {
      className: _,
      children: _.children,
    });
  let _ = _
    ? (0, _.jsx)(`button`, {
        type: `button`,
        className: _(_, _),
        onClick: () => _(!0),
        children: _,
      })
    : (0, _.jsx)(`span`, {
        className: _,
        children: _,
      });
  return (0, _.jsx)(`span`, {
    children: (0, _.jsx)(_, {
      toolTipContent: (0, _.jsx)(`p`, {
        children: _,
      }),
      children: _,
    }),
  });
}
var _ = [
  `vimeo.com`,
  `youtu.be`,
  `youtube.com`,
  `steamcdn-a.akamaihd.net`,
  `steamusercontent.com`,
  `steamstatic.com`,
  `steamusercontent-a.akamaihd.net`,
  `steamuserimages-a.akamaihd.net`,
  `steamstore-a.akamaihd.net`,
  `steamcommunity-a.akamaihd.net`,
  `steampowered-a.akamaihd.net`,
];
function _(_) {
  if (!_.match(/^https?:\/\//)) return !1;
  if (!_(_)) return !0;
  let _ = _(_).toLowerCase();
  return _.some((_) => _ == _ || _.endsWith(`.` + _));
}
function _(_) {
  let _ = _.strings.strTooltip;
  return (
    _.bCanReveal && (_ += ` (Valve/Mod Only) Click to reveal link`),
    (0, _.jsx)(_, {
      strLabel: _.strings.strLabel,
      strTooltip: _,
      bCanReveal: _.bCanReveal,
      children: _.children,
    })
  );
}
function _(_, _) {
  switch (_.linkMode ?? `links`) {
    case `bewary`:
      return {
        URLConstructor: (_) => {
          let _ = _(_);
          return _ && _(_.strURL)
            ? _(_)
            : (0, _.jsx)(_, {
                strings: _,
                bCanReveal: _.bCanRevealRemovedLinks,
                children: _.children,
              });
        },
        fnRenderBodyURL: (_) =>
          _(_)
            ? (0, _.jsx)(_, {
                strURL: _,
              })
            : (0, _.jsx)(_, {
                strings: _,
                bCanReveal: _.bCanRevealRemovedLinks,
                children: _,
              }),
      };
    case `whitelist`:
      return {
        URLConstructor: (_) => {
          let _ = _(_);
          return _ && _(_.strURL)
            ? _(_)
            : (0, _.jsx)(_.Fragment, {
                children: _.children,
              });
        },
        fnRenderBodyURL: (_) =>
          _(_)
            ? (0, _.jsx)(_, {
                strURL: _,
              })
            : _,
      };
    default:
      return {
        URLConstructor: _,
        fnRenderBodyURL: void 0,
      };
  }
}
function _(_, _) {
  switch (_.linkMode ?? `links`) {
    case `bewary`:
    case `whitelist`:
      return _(_);
    default:
      return !0;
  }
}
var _ = new Set([`img`, `noparse`, `url`, `dynamiclink`]),
  _ = class extends _ {
    m_parentNode;
    m_fnRenderURL;
    constructor(_, _, _) {
      super(_),
        (this.m_parentNode = _),
        (this.m_fnRenderURL =
          _ ??
          ((_) =>
            (0, _.jsx)(_, {
              strURL: _,
            })));
    }
    AppendText(_, _ = !1) {
      if (this.m_parentNode && _.has(this.m_parentNode.tag)) {
        super.AppendText(_, _);
        return;
      }
      let _ = _;
      for (let _ = _.exec(_); _; _ = _.exec(_))
        _.index > 0 && super.AppendText(_.slice(0, _.index), _),
          super.AppendNode(this.m_fnRenderURL(_[0])),
          (_ = _.slice(_.index + _[0].length));
      _.length > 0 && super.AppendText(_, _);
    }
  };
function _(_) {
  return (0, _.jsx)(_.Fragment, {
    children: _.children,
  });
}
var _ = {
  URLConstructor: _,
};
function _(_) {
  return {
    url: {
      Constructor: _.URLConstructor,
    },
    noparse: {
      Constructor: _,
    },
  };
}
function _(_, _) {
  return (_) => {
    let _ = new _(new _());
    return new _(_ ? _(_) : _, _, _.fnRenderBodyURL);
  };
}
var _ = (function (_) {
  return (
    (_[(_.k_EURLSite_None = 0)] = `k_EURLSite_None`),
    (_[(_.k_EURLSite_Store = 1)] = `k_EURLSite_Store`),
    (_[(_.k_EURLSite_Community = 2)] = `k_EURLSite_Community`),
    _
  );
})({});
function _(_, _) {
  return !!_ && (_ == _ || _.endsWith(`.` + _));
}
var _ = [`steamcommunity.com`, `my.steamchina.com`],
  _ = [`steampowered.com`, `store.steamchina.com`];
function _(_) {
  return URL.parse(_)?.hostname.toLowerCase() ?? ``;
}
function _(_, _) {
  let _ = _.hostname.toLowerCase();
  switch (_) {
    case 0:
      return !0;
    case 1:
      return [_(_.STORE_BASE_URL), ..._].some((_) => _(_, _));
    case 2:
      return [_(_.COMMUNITY_BASE_URL), ..._].some((_) => _(_, _));
  }
  return !1;
}
function _(_, _) {
  let _ = URL.parse(_.match(/^[a-z][a-z0-9+.-]*:/i) ? _ : `http://` + _);
  if (!_ || _.searchParams.get(`noPreview`)) return;
  let _ = {
      strURL: _,
      url: _,
      bNoPopup: !!_.searchParams.get(`noPopup`),
    },
    _ = _.find(
      (_) =>
        _(_, _.site) &&
        (!_.regex || _.regex.test(_.pathname)) &&
        (!_.fnMatch || _.fnMatch(_)),
    )?.component;
  return _
    ? {
        Card: _,
        match: _,
      }
    : void 0;
}
function _(_) {
  let _ = _;
  return () => (_ <= 0 ? !1 : (_--, !0));
}
var _ = new WeakMap();
function _(_, _, _) {
  if (_.has(_)) return _.get(_);
  let _ =
      !_.fnBAllowCard || _.fnBAllowCard(_) ? _(_.rgDynamicLinks, _) : void 0,
    _ = _ && (!_.fnBTake || _.fnBTake()) ? _ : void 0;
  return _.set(_, _), _;
}
function _(_, _ = _) {
  if (!_.rgDynamicLinks.length) return _;
  let _ = _.URLConstructor;
  function _(_) {
    let _ = _(_),
      _ = _ && !_.bHasCustomText ? _(_, _, _.strURL) : void 0;
    return _
      ? (0, _.jsx)(_.Card, {
          match: _.match,
          children: _.children,
        })
      : (0, _.jsx)(_, {
          ..._,
        });
  }
  function _(_) {
    let _ = _(_, _, _.strURL),
      _ = _.fnRenderBodyURL
        ? _.fnRenderBodyURL(_.strURL)
        : (0, _.jsx)(_, {
            strURL: _.strURL,
          });
    return _
      ? (0, _.jsx)(_.Card, {
          match: _.match,
          children: _,
        })
      : _;
  }
  return {
    URLConstructor: _,
    fnRenderBodyURL: (_) =>
      (0, _.jsx)(_, {
        strURL: _,
      }),
  };
}
function _(_, _, _) {
  let _ = _(_, _);
  return _
    ? _(
        {
          ..._,
          fnBAllowCard: (_) => _(_, _),
        },
        _,
      )
    : _;
}
export { _, _, _, _, _, _, _, _, _ };

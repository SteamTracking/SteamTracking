var _ = _(_(), 1);
function _(_, _) {
  return _ === void 0 ? _[``] : _[_];
}
var _ = _();
function _(_) {
  let _ = _.Children.toArray(_)[0];
  return typeof _ == `string` ? _ : void 0;
}
function _(_, _) {
  if (!_) return;
  let _ = _.startsWith(`steamcommunity.com/`) ? `https://` + _ : _;
  if (_.match(/^https?:\/\//))
    return {
      strURL: _,
      bFromBody: !1,
      bHasCustomText: !_?.match(/^https?:\/\//i),
    };
}
function _(_) {
  let _ = _(_.args) ?? _(_.args, `href`);
  if (_) return _(_, _(_.children));
  if (typeof _.children == `string`) {
    let _ = _.children.trim();
    if (_.exec(_)?.[0] == _)
      return {
        strURL: _,
        bFromBody: !0,
        bHasCustomText: !1,
      };
  }
}
function _(_) {
  let _ = _(_);
  if (!_) return _.children;
  if (_.bFromBody)
    return (0, _.jsx)(_, {
      strURL: _.strURL,
    });
  let _ = _(_.strURL) ? _(_.strURL) : _.strURL;
  return (0, _.jsx)(_, {
    target: `_blank`,
    href: _,
    underline: `auto`,
    contrast: `title`,
    children: _.children,
  });
}
function _(_) {
  let _ = _.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
      ? _.strURL
      : `http://` + _.strURL,
    _ = _(_) ? _(_) : _;
  return (0, _.jsx)(_, {
    target: `_blank`,
    href: _,
    underline: `auto`,
    contrast: `title`,
    children: _.strURL,
  });
}

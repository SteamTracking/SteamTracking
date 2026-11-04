_();
var _ = _();
function _(_) {
  let { tagid: _, language: _ = _.LANGUAGE } = _;
  return _(_, _) || String(_);
}
function _(_, _ = _.LANGUAGE) {
  let _ = _(_, _);
  return `${_.STORE_BASE_URL}tags/${_(_)}/${_}`;
}
function _(_) {
  let { tagID: _, className: _ } = _,
    _ = _(_(_));
  return (0, _.jsx)(_, {
    className: _,
    href: _,
    role: `listitem`,
    children: (0, _.jsx)(_, {
      tagid: _,
    }),
  });
}
export { _, _, _ };

var _ = _(_(), 1);
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
}
export { _ };

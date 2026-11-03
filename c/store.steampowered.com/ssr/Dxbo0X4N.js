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
function _(_, _ = [`b`, `i`, `br`]) {
  let _ = _.join(`|`),
    _ = [],
    _ = RegExp(
      `(?<before>.*?)<(?<tagname>${_})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
      `gs`,
    ),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    if (!_.groups) continue;
    if (!_.groups?.endtag) {
      let _ = _.groups.before.length + _.groups.tagname.length + 2;
      (_ += _), (_.lastIndex = _.index + _), _.push(_.groups.before);
      let _ = _[2],
        _ = _.createElement(_);
      _.push(_);
      continue;
    }
    (_ += _[0].length), _.push(_.groups.before);
    let _ = _.groups.tagname,
      _ = _.groups.contents || ``,
      _ = null;
    _ && (_ = _(_, _));
    let _ = _.createElement(_, {}, _);
    _.push(_);
  }
  return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
}
export { _, _ };

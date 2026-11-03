var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({});
_.createContext(void 0);
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._,
        ..._,
      }),
      [
        _,
        _.domain,
        _.controller,
        _.method,
        _.submethod,
        _.feature,
        _.depth,
        _.curator_clanid,
      ],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _(_, _) {
  return _(_(), _, _);
}
function _(_, _, _) {
  return {
    ..._,
    feature: _ || _.feature,
    depth: _ || _.depth,
    countrycode: _.COUNTRY,
    is_client: _.IN_CLIENT,
  };
}
function _(_, _, _) {
  let _ = _();
  return _.useMemo(() => _ && _(_, _, _, _), [_, _, _, _]);
}
function _(_, _) {
  let _ = _();
  return _.useMemo(
    () =>
      _.GetSNRLinkParam(
        {
          ..._,
          feature: _ || _.feature,
        },
        _,
      ),
    [_, _, _],
  );
}
function _(_, _, _, _) {
  let _ = _.GetSNRLinkParam(
      {
        ..._,
        feature: _ || _.feature,
      },
      _,
    ),
    _ = _.GetCuratorClanIDParam(_);
  return _.AddNavParamToURL(_, _, _);
}
export { _, _, _, _, _, _ };

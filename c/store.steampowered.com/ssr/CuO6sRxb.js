var _ = _(_(), 1),
  _ = `l42o7CLwn7I-`,
  _ = _();
function _() {
  return _(`(max-width: 730px)`) || _.IN_MOBILE_WEBVIEW;
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 12 12`,
    fill: `none`,
    role: `presentation`,
    className: _.className,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.81026 6.36084L8.50899 3.66211L9.6875 4.84062L5.81026 8.71786L1.93302 4.84062L3.11153 3.66211L5.81026 6.36084Z`,
    }),
  });
}
var _ = _.createContext({
  nBackdropHeight: void 0,
  bBackdropActive: !1,
});
function _() {
  return _.useContext(_);
}
var _ = _.createContext(void 0);
function _() {}
function _(_) {
  let [_, _] = _.useState(``),
    [_, _] = _.useState(() => _),
    [_, _] = _.useState(void 0),
    [_, _, _] = _(),
    _ = `searchSuggestions_${_.useId()}`,
    _ = _ !== void 0;
  (0, _.useEffect)(() => {
    if (_ === void 0) return;
    let _ = window.setTimeout(() => _(void 0), 3e5);
    return () => window.clearTimeout(_);
  }, [_]);
  let _ = _.useMemo(
    () => ({
      term: _,
      setTerm: _,
      onInputKeyDown: _,
      setInputKeyDown: (_) => _(() => _ ?? _),
      suggestionsId: _,
      bEverActive: _,
      onActive: () => _(performance.now()),
      bSearchVisible: _,
      openSearch: _,
      closeSearch: _,
    }),
    [_, _, _, _, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_);
}
function _(_, _) {
  let _ = new URLSearchParams({
    term: _,
    snr: _,
  });
  return `${_.STORE_BASE_URL}search/?${_.toString()}`;
}
function _(_) {
  let { term: _ } = _(),
    _ = _(_);
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _ = !0) {
  (0, _.useEffect)(() => {
    let _ = _.current;
    if (!_ || !_) return;
    let _ = _(_, `y`);
    return (
      _.push(_.ownerDocument.documentElement),
      (_ = _.filter(
        (_) =>
          _.scrollHeight > _.getBoundingClientRect().height &&
          window.getComputedStyle(_).overflowY !== `visible`,
      )),
      _.forEach((_) => _.classList.add(_)),
      () => _.forEach((_) => _.classList.remove(_))
    );
  }, [_, _]);
}

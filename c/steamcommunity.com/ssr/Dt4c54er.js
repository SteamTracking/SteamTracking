var _ = _(_(), 1),
  _ = _.createContext({
    eAdultOnlyMediaBehavior: `masked`,
  }),
  _ = {
    name: `forceallages`,
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _() {
  return _.useMemo(() => {
    let _ = _(_);
    return !!(
      (_ && _ !== `0`) ||
      (_.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function _() {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _();
  return _() ||
    (_ == `masked` &&
      (_.excluded_content_descriptors.includes(4) ||
        _.excluded_content_descriptors.includes(3)))
    ? `blocked`
    : _ == `masked` && _
      ? `allowed`
      : _;
}
function _() {
  return _() != `allowed`;
}
var _ = {
  name: `bDisableAOWarning`,
  options: {
    path: `/`,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
2 * _.PerDay;
function _() {
  let _ = _(_),
    _ = _ ? parseInt(_) : 0;
  return _ == 0 ? null : _;
}
function _() {
  return {
    queryKey: [`AOWarningCookie`],
    queryFn: () => _(),
    placeholderData: () => _(),
    staleTime: 0,
  };
}
function _() {
  let { data: _ } = _(_());
  return _ && _ > Date.now() / 1e3;
}
function _(_) {
  let _ = _() == `blocked` && !!_,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    );
  return _
    ? !_ ||
        _.content_descriptorids.includes(3) ||
        _.content_descriptorids.includes(4)
    : !1;
}
function _(_) {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _(),
    _ = _ == `allowed` && !_,
    { data: _ } = _(_ ? void 0 : _);
  return _ || !_ ? !1 : !_ || !!_.content_descriptorids?.includes(3);
}
function _(_, _) {
  if (_[_]) {
    if (_ == `community_icon`) {
      let _ = _.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${_[_]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${_.MEDIA_CDN_COMMUNITY_URL}${_}`;
    }
    if (typeof _[_] == `string`) {
      let _ = _.asset_url_format.replace("${FILENAME}", _[_]);
      return `${_.STORE_ITEM_BASE_URL}${_}`;
    }
  }
}
function _(_, _ = `full`) {
  let _ = ``;
  switch (_) {
    case `thumb`:
      _ = `.116x65`;
      break;
    case `600x338`:
      _ = `.600x338`;
      break;
    case `1920x1080`:
      _ = `.1920x1080`;
      break;
    case `full`:
      _ = ``;
      break;
    default:
      _(_, `Invalid size: ${_}`);
  }
  return (
    _.STORE_ITEM_BASE_URL + _.filename.replace(/\.([^.]+)(\?.*)?$/, `${_}.$1$2`)
  );
}
function _(_) {
  let { data: _ } = _(_),
    _ = _();
  if (_)
    return [
      ...(_.all_ages_screenshots || []),
      ...(!_ && _.mature_content_screenshots
        ? _.mature_content_screenshots
        : []),
    ].sort((_, _) => _.ordinal - _.ordinal);
}

var _ = _(_(), 1);
function _(_) {
  return (0, _.useMemo)(() => _(_), [_?._, _?.type]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_) {
  if (_ && _._) {
    if (!_.type)
      return {
        appid: _._,
      };
    switch (_.type) {
      case `sub`:
        return {
          packageid: _._,
        };
      case `bundle`:
        return {
          bundleid: _._,
        };
      default:
        return {
          appid: _._,
        };
    }
  }
}
function _(_) {
  if (`appid` in _)
    return {
      _: _.appid,
      type: `game`,
    };
  if (`packageid` in _)
    return {
      _: _.packageid,
      type: `sub`,
    };
  if (`bundleid` in _)
    return {
      _: _.bundleid,
      type: `bundle`,
    };
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}

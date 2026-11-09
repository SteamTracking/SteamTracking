var _ = _(_(), 1);
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgOwnedApps || [];
}
async function _(_, _, _) {
  return (await _(_, _)).includes(_);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 6e5,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`AccountOwnsApp`, _, _],
    queryFn: async () => (_ ? await _(_, _, _) : !1),
    staleTime: 6e5,
  };
}
function _(_) {
  let _ = _(),
    _ = _.accountid,
    { data: _ } = _(_(_, _, _));
  return _ === void 0 ? void 0 : _;
}
function _(_) {
  let _ = _(),
    _ = _.accountid;
  return _.useCallback(
    (_) => {
      _.setQueryData(_(_), (_) =>
        _ ? new Set([..._.values(), ..._]) : _ ? new Set(_) : void 0,
      );
    },
    [_, _, _],
  );
}
function _(_) {
  return [`AccountOwnedApps`, _ ?? 0];
}
function _(_) {
  let { data: _ } = _(_ && `appid` in _ ? void 0 : _),
    { data: _ } = _(),
    _;
  return (
    _ && `appid` in _ ? (_ = [_.appid]) : _ && (_ = _.included_appids),
    _ === void 0 || _ === void 0 || _.length == 0
      ? {
          bIsOwned: void 0,
          unAppID: void 0,
        }
      : {
          bIsOwned: !_.some((_) => !_.has(_)),
          unAppID: _[0],
        }
  );
}

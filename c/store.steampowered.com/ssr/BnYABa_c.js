var _ = `giftee-hint-2`,
  _ = 600;
function _() {
  let { data: _ } = _(),
    _ = _(_?.nGifteeAccountID);
  return _.isLoading || !_?.nGifteeAccountID
    ? {
        gifteeHint: _,
        gifteePlayerDetails: void 0,
      }
    : _.data
      ? {
          gifteeHint: _,
          gifteePlayerDetails: _.data,
        }
      : {
          gifteeHint: _,
          gifteePlayerDetails: {
            public_data: {
              steamid: _.InitFromAccountID(
                _.nGifteeAccountID,
                _.EUNIVERSE,
              ).ConvertTo64BitString(),
              persona_name: _.strPersonaName,
              sha_digest_avatar: _.rgAvatarDigest
                ? new Uint8Array(_.rgAvatarDigest)
                : void 0,
            },
          },
        };
}
function _() {
  let _ = _();
  return _({
    queryKey: [_],
    queryFn: async () => {
      let _ = await _.GetObject(_);
      return _
        ? !_.rtCreated || _.rtCreated < Date.now() / 1e3 - _
          ? (await _.RemoveObject(_), null)
          : _
        : null;
    },
  });
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      _
        ? await _.StoreObject(_, {
            ..._,
            rtCreated: Date.now() / 1e3,
          })
        : await _.RemoveObject(_);
    },
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: [_],
      }),
        (_ &&= {
          ..._,
          rtCreated: Date.now() / 1e3,
        }),
        _.setQueryData([_], _);
    },
  });
}
export { _, _ };

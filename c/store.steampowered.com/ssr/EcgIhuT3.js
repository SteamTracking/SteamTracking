var _ = 71;
function _(_) {
  return [`StoreSales.GetVoteDefinitions`, _ ?? 0];
}
function _(_) {
  return [`Quest.GetCommunityItemDefinitions`, _ ?? 0];
}
function _(_) {
  return [`Player.GetCommunityBadgeProgress`, _, _];
}
function _(_) {
  return [`SteamAwards.GetNominationShareLink`, _];
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.GetVoteDefinitions(_, {
        sale_appid: _,
        language: _().strLanguage,
      });
      return _.BSuccess() ? _.Body().toObject() : null;
    },
    enabled: !!_,
    staleTime: 1 / 0,
  };
}
function _(_) {
  return _(_(_(), _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.GetCommunityItemDefinitions(_, {
        appid: _,
        language: _().strLanguage,
      });
      return _.BSuccess() ? _.Body().toObject() : null;
    },
    enabled: !!_,
    staleTime: 1 / 0,
  };
}
async function _(_) {
  let _ = await _.GetUserNominations(_, {});
  return _.BSuccess() ? (_.Body().toObject().nominations ?? []) : [];
}
async function _(_, _) {
  let _ = await _.GetUserVotes(_, {
    sale_appid: _,
  });
  return _.BSuccess() ? (_.Body().toObject().user_votes ?? []) : [];
}
async function _(_, _, _, _) {
  let _ = await _.Nominate(_, {
    category_id: _,
    nominated_id: _,
    source: _,
  });
  return (
    _.BSuccess() ||
      console.warn(`SteamAwards.Nominate failed with ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject().nominations ?? []]
  );
}
async function _(_, _, _, _) {
  let _ = await _.SetVote(_, {
    voteid: _,
    appid: _,
    sale_appid: _,
  });
  return (
    _.BSuccess() ||
      console.warn(`StoreSales.SetVote failed with ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject().user_votes ?? []]
  );
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => await _(_),
    enabled: !!_,
  };
}
function _() {
  return _(_(_(), _.accountid));
}
function _(_) {
  let { data: _, isPending: _ } = _();
  return {
    nomination: _?.find((_) => _.category_id == _),
    bAnswered: _ != null || !_.accountid || !_,
  };
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    _ = _.accountid;
  return _({
    mutationFn: async ({ unAppID: _, eCategoryID: _ }) => {
      let [_, _] = await _(_, _, _, _);
      if (_ != 1) throw new _(_, `SteamAwards.Nominate`);
      return _;
    },
    onSuccess: (_, { unAppID: _ }) => {
      (_.setQueryData(_(_), _),
        globalThis.setTimeout(
          () =>
            _.invalidateQueries({
              queryKey: _(_),
            }),
          1e3,
        ),
        _?.(_));
    },
    onError: (_) => _?.(_ instanceof _ ? _.eResult : void 0),
  });
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => await _(_, _),
    enabled: !!(_ && _),
  };
}
function _(_) {
  return _(_(_(), _.accountid, _));
}
function _(_, _) {
  let { data: _ } = _(_);
  return _?.find((_) => _.voteid == _)?.appid;
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _.accountid;
  return _({
    mutationFn: async ({ unAppID: _, eCategoryID: _ }) => {
      let [_, _] = await _(_, _, _, _);
      if (_ != 1) throw new _(_, `StoreSales.SetVote`);
      return _;
    },
    onSuccess: (_) => _.setQueryData(_(_), _),
  });
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.GetCommunityBadgeProgress(_, {
        steamid: _,
        badgeid: _,
      });
      return _.BSuccess() ? _.Body().toObject() : null;
    },
    enabled: !!_,
  };
}
function _() {
  return _(_(_(), _.accountid, _.steamid));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => await _(_, !1),
    enabled: !!_,
    staleTime: 1 / 0,
  };
}
function _() {
  return _(_(_(), _.accountid));
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _.accountid;
  return _({
    mutationFn: async () => await _(_, !0),
    onSuccess: (_) => _.setQueryData(_(_), _),
  });
}
async function _(_, _) {
  let _ = await _.GetNominationShareLink(_, {
    generate_new: _,
  });
  return _.BSuccess()
    ? _.Body().toObject()
    : (console.warn(
        `SteamAwards.GetNominationShareLink failed with ${_.GetEResult()}`,
      ),
      null);
}
function _(_, _) {
  let { data: _ } = _(_(_(), _));
  if (_.item_type)
    return _?.item_definitions?.find((_) => _.item_type == _.item_type);
}
function _(_) {
  return _.flag == 3;
}
function _(_) {
  return _.flag == 4;
}

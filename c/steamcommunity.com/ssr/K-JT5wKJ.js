var _ = _(_(), 1);
function _(_) {
  switch (_) {
    case 5:
    case 3:
    case 4:
    case 14:
      return !0;
  }
  return !1;
}
function _(_, _) {
  return !_.logged_in || !_
    ? !1
    : _.creator == _.steamid ||
        _.is_contributor ||
        _.contributors.some((_) => _.steamid == _.steamid);
}
var _ = 223910,
  _ = 261310,
  _ = 321770,
  _ = 405270,
  _ = 551410,
  _ = 807210;
function _(_) {
  switch (_) {
    case _:
    case _:
    case _:
    case _:
    case _:
    case _:
      return !0;
  }
  return !1;
}
function _(_, _, _) {
  return _ ? !0 : _ && _(_);
}
function _(_) {
  switch (_) {
    case 0:
    case 15:
    case 10:
      return !0;
    default:
      return !1;
  }
}
function _(_) {
  return _.file_type != 2 || (_.num_children ?? 0) == 0
    ? !1
    : ((_?.flags ?? 0) & _.kPFIFlag_CollectionShowSubscribeAll) ==
        _.kPFIFlag_CollectionShowSubscribeAll;
}
var _ = {
  1: `#Workshop_Revision_Latest`,
  2: `#Workshop_Revision_ApprovedSnapshot`,
  3: `#Workshop_Revision_ApprovedSnapshot_China`,
  4: `#Workshop_Revision_RejectedSnapshot`,
  5: `#Workshop_Revision_RejectedSnapshot_China`,
};
function _(_) {
  return _[_] ?? `#Workshop_Revision_Latest`;
}
function _(_) {
  return [`user_workshop_details`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => _(`/workshop/actions`, `GetUserWorkshopAppDetails`, _),
    placeholderData: (_) => _,
    staleTime: 36e5,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: [`saved_web_queries`, _],
    queryFn: async () => _(`/workshop/actions`, `SavedWebQueries`, _),
    placeholderData: (_) => _,
    staleTime: 36e5,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      await _(`/workshop/actions`, `UpdateWebQuery`, _, _),
    onSuccess: (_) => {
      _ &&
        _.removeQueries({
          queryKey: [`saved_web_queries`, _],
        });
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      await _(`/workshop/actions`, `DeleteWebQuery`, _, _),
    onSuccess: (_) => {
      _ &&
        _.removeQueries({
          queryKey: [`saved_web_queries`, _],
        });
    },
  });
}
function _(_, _) {
  return _(_(_, _));
}
function _(_) {
  let _ = Object.fromEntries(
    Object.entries(_).filter(([_, _]) => _ !== void 0),
  );
  return [
    `workshop_browse`,
    Object.keys(_)
      .sort()
      .reduce((_, _) => ((_[_] = _[_]), _), {}),
    _.EREALM,
  ];
}
function _(_, _) {
  let _ = _();
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _(_);
      return (_(_, _?.creator_player_link_details ?? []), _);
    },
    placeholderData: (_) => _,
    staleTime: 36e5,
  };
}
function _(_) {
  let _ = _();
  return _({
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _(`/sharedfiles/actions`, `BrowseUserFiles`, _);
      return (_(_, _?.creator_player_link_details ?? []), _);
    },
    placeholderData: (_) => _,
    staleTime: 36e5,
  });
}
function _(_) {
  return _({
    queryKey: _(_),
    queryFn: () => _(`/sharedfiles/actions`, `BrowseUserMedia`, _),
    placeholderData: (_) => _,
    staleTime: 36e5,
  });
}
function _(_) {
  return [
    `user_media_browse`,
    Object.keys(_)
      .sort()
      .reduce((_, _) => ((_[_] = _[_]), _), {}),
    _.EREALM,
  ];
}
function _(_) {
  _.invalidateQueries({
    queryKey: [`user_media_browse`],
  });
}
function _(_) {
  return [
    `user_files_browse`,
    Object.keys(_)
      .sort()
      .reduce((_, _) => {
        let _ = _[_];
        return (_ !== void 0 && (_[_] = _), _);
      }, {}),
    _.EREALM,
  ];
}
function _(_) {
  _.invalidateQueries({
    queryKey: [`user_files_browse`],
    refetchType: `inactive`,
  });
}
function _(_) {
  _.invalidateQueries({
    queryKey: [`user_files_browse`],
  });
}
function _(_, _, _, _) {
  return [`ugcliststatus`, _, _, _, _];
}
function _(_, _, _, _) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return _ == 1 && !_(_)
        ? _.map((_) => ({
            publishedfileid: _,
            inlist: !1,
          }))
        : await _(`/sharedfiles/actions`, `GetUserListStatus`, _, _, _, _);
    },
    {
      cache: !1,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _(_, _, _) {
  return _([`UserListStatus`, _, _, _], () => _(_, _, _));
}
function _(_, _, _, _, _) {
  return {
    queryKey: _(_, _, _, _),
    queryFn: async () =>
      !_.logged_in || _ == -1 ? !1 : (await _.load(_))?.inlist || !1,
    staleTime: 36e5,
  };
}
function _(_, _, _, _) {
  let _ = _(_, _, _);
  return _(_(_, _, _, _, _));
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      if (_ == -1) return !1;
      if (_) {
        let _ = {
          appid: _,
          list_type: _,
          publishedfileid: _,
          notify_client: !0,
        };
        return !!(await _.Subscribe(_, _)).BSuccess();
      }
      {
        let _ = {
          appid: _,
          list_type: _,
          publishedfileid: _,
          notify_client: !0,
        };
        return !(await _.Unsubscribe(_, _)).BSuccess();
      }
    },
    onSuccess: (_) => {
      (_.setQueryData(_(_, _, _, _), _),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _(_));
    },
  });
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = {
        appid: _,
        list_type: _,
        publishedfileid: _,
        include_dependencies: !0,
        notify_client: !0,
      };
      return (await _.Subscribe(_, _)).BSuccess();
    },
    onSuccess: (_) => {
      _ &&
        (_.invalidateQueries({
          queryKey: [`ugcliststatus`, _, _, _],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _(_));
    },
  });
}
function _(_) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return (await _(`/sharedfiles/actions`, `GetUGCSummary`, _)) ?? [];
    },
    {
      cache: !0,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _() {
  return _(`UGCSummaryLoader`, () => _());
}
function _(_, _) {
  return {
    queryKey: [`ugc_summary`, _, _.ELANGUAGE, _.EREALM],
    queryFn: async () => await _.load(_),
    staleTime: 36e5,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _() {
  return new _.default(
    async (_) =>
      await _(`/sharedfiles/actions`, `GetUGCDynamicLinkCards`, [..._]),
    {
      cache: !0,
      maxBatchSize: 100,
    },
  );
}
function _(_, _) {
  return {
    queryKey: [`ugc_dynamiclink_card`, _, _.ELANGUAGE, _.EREALM],
    queryFn: () => _.load(_),
    staleTime: 36e5,
  };
}
function _(_) {
  let _ = _(`UGCDynamicLinkCardLoader`, () => _());
  return _(_(_, _));
}
function _(_) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return (await _(`/workshop/actions`, `GetUGCCollectionSummary`, _)) ?? [];
    },
    {
      cache: !0,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _() {
  return _(`UGCCollectionSummaryLoader`, () => _());
}
function _(_, _) {
  return {
    queryKey: [`ugc_collection_summary`, _, _.EREALM],
    queryFn: async () => await _.load(_),
    staleTime: 36e5,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  return [`ugcvote`, _];
}
function _(_) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return await _(`/sharedfiles/actions`, `GetUserVoteSummary`, _);
    },
    {
      cache: !1,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _() {
  return _([`UserVoteSummary`], () => _());
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () =>
      _.logged_in
        ? ((await _.load(_)) ?? {
            vote_for: !1,
            vote_against: !1,
          })
        : {
            vote_for: !1,
            vote_against: !1,
          },
    staleTime: 36e5,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      await _(`/sharedfiles/actions`, `UpdateUserVote`, _, _),
    onSuccess: (_) => {
      _ &&
        _.invalidateQueries({
          queryKey: _(_),
        });
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async () => await _(`/sharedfiles/actions`, `VoteLater`, _),
    onSuccess: (_) => {
      _ &&
        _.invalidateQueries({
          queryKey: _(_),
        });
    },
  });
}
function _(_, _) {
  return _({
    mutationFn: async () =>
      await _(`/workshop/actions`, `RegenerateWorkshopVotingQueue`, _, _),
  });
}
function _() {
  return {
    queryKey: _(_.steamid),
    queryFn: async () => {
      let _ = await _(`/workshop/actions`, `GetCurrentUserFriendsList`);
      return {
        friends: new Set(_.friends),
        ignored: new Set(_.ignored),
      };
    },
    staleTime: 36e5,
  };
}
function _() {
  return _(_());
}
function _(_) {
  return [`workshop_user_friends_list`, _];
}
function _(_) {
  return [`workshop_item_admin_info`, _];
}
function _(_) {
  return [`workshop_item_link_tags`, _];
}
function _(_, _, _) {
  let _ = [`ugc_changelog_entry`, _, _];
  return (_ !== void 0 && _.push(_), _);
}
function _(_) {
  return [`ugc_item_text`, _];
}
function _(_) {
  return [`ugc_item_previews`, _];
}
function _(_) {
  return [`guide_sub_sections`, _];
}
function _(_, _) {
  return [`guide_media_files`, _, _];
}
function _(_) {
  return [`GetUGCAppRelationships`, _];
}
function _(_) {
  return [`app_dlc`, _];
}
var _ = 36e5;
function _(_) {
  return [`ugc_item_children`, _];
}
function _(_, _) {
  return [`ugc_item_child_candidates`, _, _];
}
function _(_) {
  return [`workshop_payment_status`, _];
}
function _(_) {
  return [`service_provider_suggestions`, _];
}
function _(_) {
  return [`workshop_item_legal_agreements`, _];
}

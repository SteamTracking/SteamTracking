var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { href: _, children: _, bAllowFocuseableAnchor: _, ..._ } = _;
  return _.EREALM === _.k_ESteamRealmChina
    ? (0, _.jsx)(`div`, {
        ..._,
        children: _,
      })
    : _
      ? (0, _.jsx)(_, {
          href: _,
          ..._,
          children: _,
        })
      : (0, _.jsx)(`a`, {
          href: _,
          ..._,
          children: _,
        });
}
function _(_) {
  let {
    strURL: _,
    strName: _,
    strAvatarURL: _,
    nFollowers: _,
    strCreatorType: _,
    strTagLine: _,
    strMemberListURL: _,
    followButton: _,
    bSmallFormat: _,
    bMinimalDisplay: _,
    bCompact: _,
  } = _;
  return (0, _.jsx)(_, {
    feature: `salecreatorhome`,
    children: (0, _.jsxs)(_, {
      className: _(_, _ ? _ : _, _ ? _ : ``, _ ? _ : ``),
      "flow-children": `row`,
      children: [
        !!_ &&
          (0, _.jsx)(`span`, {
            className: `_1bxoUXJo64A-`,
            children: _,
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                backgroundImage: `url(${_} )`,
              },
            }),
            (0, _.jsxs)(`div`, {
              className: _(_),
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      href: _(_),
                      className: _,
                      bAllowFocuseableAnchor: !0,
                      children: (0, _.jsx)(`img`, {
                        className: _(_, `Avatar_Trgt`),
                        src: _,
                        alt: ``,
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _(_, _),
                      children: [
                        (0, _.jsxs)(`div`, {
                          className: _(_, _),
                          children: [
                            (0, _.jsx)(_, {
                              href: _(_),
                              className: _,
                              children: _,
                            }),
                            !!_ &&
                              (0, _.jsx)(`div`, {
                                className: _(`z6gX8J4oNLA-`, `_4Tul7vRyy94-`),
                                children: _,
                              }),
                          ],
                        }),
                        (0, _.jsx)(`div`, {
                          className: _({
                            [_]: _,
                            [_]: !_,
                            [_]: !0,
                          }),
                          children: (0, _.jsxs)(`div`, {
                            className: _(_),
                            children: [
                              _,
                              (0, _.jsxs)(`div`, {
                                className: _({
                                  [_]: !0,
                                }),
                                children: [
                                  (0, _.jsx)(`span`, {
                                    children: _(`#CreatorHome_JustFollowers`),
                                  }),
                                  (0, _.jsx)(`span`, {
                                    className: _,
                                    children: _(_),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !!_ &&
                  (0, _.jsx)(`a`, {
                    href: _,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `csY9YG6G0q4-`,
                    children: _(`#ClanMembershipList`),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `SYKXsuhu4Hs-`,
  _ = `xRlqOnjrLv4-`,
  _ = `rsWZKmxU5jE-`;
function _(_) {
  let { data: _, isPending: _ } = _(
    _
      ? {
          appid: _,
        }
      : void 0,
  );
  return _.useMemo(() => {
    if (!_) return [];
    if (!_) return _ ? void 0 : [];
    let _ = [],
      _ = new Set(),
      _ = [
        [`developer`, _(_.developers)],
        [`publisher`, _(_.publishers)],
        [`franchise`, _(_.franchises)],
      ];
    for (let [_, _] of _)
      for (let _ of _)
        _.has(_) ||
          (_.add(_),
          _.push({
            appid: _,
            name: ``,
            clan_account_id: _,
            type: _,
          }));
    return _;
  }, [_, _, _]);
}
function _(_) {
  let { rgCreators: _, renderCreator: _ } = _,
    [_, _] = _.useState(0);
  if (!_.length) return null;
  if (_.length == 1)
    return (0, _.jsx)(_.Fragment, {
      children: _(_[0]),
    });
  let _ = _ % _.length;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _(_[_]),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              className: _,
              onClick: () => _(_),
              "aria-label": _(_.type),
              children: (0, _.jsx)(_, {
                bIsActive: _ == _,
              }),
            },
            _.clan_account_id,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let {
      creatorID: _,
      bSmallFormat: _,
      bHideCreatorType: _,
      bMinimalDisplay: _,
      bCompact: _,
    } = _,
    { data: _ } = _(_.clan_account_id);
  return _
    ? (0, _.jsx)(_, {
        strURL: _(_, _.type),
        strName: _.name ?? ``,
        strAvatarURL: _.avatar_url_full_size ?? ``,
        nFollowers: _.followers ?? 0,
        strCreatorType: _ ? void 0 : _(_.type),
        followButton: (0, _.jsx)(_, {
          clanAccountID: _.clan_account_id,
          followType: `creatorhome`,
        }),
        bSmallFormat: _,
        bMinimalDisplay: _,
        bCompact: _,
      })
    : null;
}
function _(_) {
  let { appid: _, bSmallFormat: _, renderCreator: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsx)(_, {
        rgCreators: _,
        renderCreator:
          _ ??
          ((_) =>
            (0, _.jsx)(_, {
              creatorID: _,
              bSmallFormat: _,
            })),
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      });
}
function _(_) {
  switch (_) {
    case `publisher`:
      return _(`#CreatorHome_PublishedBy`);
    case `franchise`:
      return _(`#CreatorHome_InFranchise`);
  }
  return _(`#CreatorHome_DevelopedBy`);
}

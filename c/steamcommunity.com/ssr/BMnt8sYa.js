var _ = _(_(), 1),
  _ = _();
function _(_) {
  return {
    subject_type: 3,
    published_file_id: _,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _(_(_.publishedFileID)),
    [_, _] = (0, _.useState)(!1);
  if (_.isPending) return null;
  if (_.isError)
    return (0, _.jsx)(_, {
      children: _.Localize(`#ugcsubjectpanel_error`),
    });
  let _ = _.data.subjects?.[0];
  return _
    ? (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        children: [
          (0, _.jsx)(_, {
            children: _(_),
          }),
          (0, _.jsx)(_, {
            subject: _,
          }),
          (0, _.jsx)(_, {
            children: _.Localize(
              `#forumsubjectlist_subjectreportsummary`,
              _.unresolved_report_count ?? 0,
              _.unresolved_dispute_count ?? 0,
            ),
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `2`,
            children: [
              (0, _.jsx)(_, {
                size: `1`,
                color: `dull`,
                onClick: () => _(!0),
                children: _.Localize(`#ugcsubjectpanel_history`),
              }),
              (0, _.jsx)(_, {
                subject: _,
              }),
              (0, _.jsx)(_, {
                subject: _,
              }),
              (0, _.jsx)(_, {
                subject: _,
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              subject: _,
              onClose: () => _(!1),
            }),
        ],
      })
    : null;
}
function _(_) {
  let { subject: _ } = _,
    _ = _(_.reported_content_id ? [_.reported_content_id] : []),
    _ = !!_.assigned_moderator_steamid && _.assigned_moderator_steamid !== `0`;
  return !_.reported_content_id ||
    !_ ||
    _.assigned_moderator_steamid !== _.steamid
    ? null
    : (0, _.jsx)(_, {
        size: `1`,
        color: `dull`,
        loading: _.isPending,
        onClick: () => _.mutate(),
        children: _.Localize(`#ugcsubjectpanel_release`),
      });
}
function _(_) {
  let { subject: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return !_.reported_content_id || !_(_)
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            size: `1`,
            color: `dull`,
            onClick: () => _(!0),
            children: _.Localize(`#moderation_escalation_escalate`),
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
              strTitle: _.Localize(`#moderation_escalation_escalate`),
              children: (0, _.jsx)(_, {
                reportedContentID: _.reported_content_id,
                eCurrentLevel: _.required_moderator_level,
                onClose: () => _(!1),
              }),
            }),
        ],
      });
}
function _(_) {
  let { subject: _ } = _,
    _ = _();
  return _.reported_content_id &&
    (_.resolved ?? 0) !== 0 &&
    ((_.unresolved_report_count ?? 0) > 0 ||
      (_.unresolved_dispute_count ?? 0) > 0)
    ? (0, _.jsx)(_, {
        size: `1`,
        color: `dull`,
        loading: _.isPending,
        onClick: () =>
          _.mutate({
            reportedContentID: _.reported_content_id,
          }),
        children: _.Localize(`#moderation_actions_sustain_short`),
      })
    : null;
}
function _(_) {
  let { subject: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(`reports`);
  return (0, _.jsx)(_, {
    onClose: _,
    strTitle: _.Localize(`#ugcsubjectpanel_dialogtitle`),
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `2`,
      children: [
        (0, _.jsxs)(_.Root, {
          value: _,
          onValueChange: (_) => _(_),
          children: [
            (0, _.jsx)(_.Item, {
              value: `reports`,
              children: _.Localize(`#ugcsubjectpanel_reports`),
            }),
            (0, _.jsx)(_.Item, {
              value: `history`,
              children: _.Localize(`#ugcsubjectpanel_history`),
            }),
          ],
        }),
        _ === `reports` &&
          (0, _.jsx)(_, {
            subject: _,
          }),
        _ === `history` &&
          (0, _.jsx)(_, {
            reportedContentID: _.reported_content_id,
          }),
      ],
    }),
  });
}
var _ = `zXxOGQApE0w-`,
  _ = `PJY0IXdB1yM-`,
  _ = `qDlq4c2OfSk-`,
  _ = `afc--dfmbc4-`,
  _ = `_6TX064AN2B0-`,
  _ = `tfNAL9omQ-c-`,
  _ = `jE6ETTHJPTY-`,
  _ = `S0YRcy2TYtE-`,
  _ = `S0pKdpRn0zk-`,
  _ = `bbc8V4hCEgg-`,
  _ = `dd3267kY3pE-`,
  _ = `_2vP9uACoRsI-`,
  _ = _(_(), 1);
function _(_) {
  let _ = (0, _.useContext)(_);
  return _({
    queryKey: _(_),
    queryFn: async () => _(`/sharedfiles/actions`, `GetUGCItemAdminInfo`, _),
    enabled: _.bCanModerate,
    staleTime: _,
  });
}
function _(_, _) {
  return _({
    ..._(_.publishedfileid),
    enabled: _(_, _),
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: _,
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_) {
  return _({
    mutationFn: _,
  });
}
function _(_) {
  return _(_, async (_) => {
    let _ = await _(`/sharedfiles/actions`, `GetUGCItemDownloadInfo`, _, _);
    _(_.strURL, _.strFilename);
  });
}
function _(_, _) {
  let _ = document.createElement(`a`);
  ((_.href = _),
    (_.download = _),
    (_.style.display = `none`),
    document.body.appendChild(_),
    _.click(),
    document.body.removeChild(_));
}
function _(_) {
  let _ = _(_.creator);
  return _.data ? _(_.data) : ``;
}
function _(_) {
  let { steamid: _, strFilter: _, bDisabled: _, onClick: _ } = _,
    _ = _(_);
  if (!_.data) return null;
  let _ = _(_.data);
  return _ && !_.toLocaleLowerCase().includes(_)
    ? null
    : (0, _.jsxs)(`button`, {
        className: _,
        disabled: _,
        onClick: _,
        children: [
          (0, _.jsx)(_, {
            playerLinkDetails: _.data,
            size: `Small`,
            alt: _,
          }),
          (0, _.jsx)(`span`, {
            children: _,
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: (0, _.default)(
      _,
      _.bHideDivider && `TdkrpfF-1qU-`,
      !!_.onClick && `zLOiv2hPSok-`,
    ),
    onClick: _.onClick,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { strTitle: _, strDescription: _, onConfirm: _, onClose: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    strTitle: _,
    onClose: _,
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsxs)(_, {
        justify: `end`,
        gap: `3`,
        align: `center`,
        marginTop: `3`,
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            autoFocus: !0,
            children: _.Localize(`#Button_OK`),
          }),
          (0, _.jsx)(_, {
            onClick: _,
            children: (0, _.jsx)(`span`, {
              children: _.Localize(`#Button_Cancel`),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { strTitle: _, strDescription: _, onConfirm: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(``);
  return (0, _.jsxs)(_, {
    className: _,
    strTitle: _,
    onClose: _,
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(_, {
        value: _,
        onTextChange: _,
        maxLength: 256,
        rows: 6,
        resize: `vertical`,
      }),
      (0, _.jsxs)(_, {
        justify: `end`,
        gap: `3`,
        align: `center`,
        marginTop: `3`,
        children: [
          (0, _.jsx)(_, {
            disabled: _.trim().length == 0,
            onClick: () => _(_.trim()),
            autoFocus: !0,
            children: _.Localize(`#Button_OK`),
          }),
          (0, _.jsx)(_, {
            onClick: _,
            children: (0, _.jsx)(`span`, {
              children: _.Localize(`#Button_Cancel`),
            }),
          }),
        ],
      }),
    ],
  });
}
var _ = [
  {
    visibility: 0,
    token: `#Workshop_ItemAdmin_Visibility_Public`,
  },
  {
    visibility: 1,
    token: `#Workshop_ItemAdmin_Visibility_FriendsOnly`,
  },
  {
    visibility: 2,
    token: `#Workshop_ItemAdmin_Visibility_Private`,
  },
  {
    visibility: 3,
    token: `#Workshop_ItemAdmin_Visibility_Unlisted`,
  },
];
function _(_) {
  let { publishedfileid: _, visibility: _, rgOptions: _, bHidden: _ } = _,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_, (_) => _(`/sharedfiles/actions`, `SetUGCItemVisibility`, _, _)),
    _ = _.Localize(`#Workshop_ItemAdmin_Visibility_Change`),
    _ = _.find((_) => _.visibility == _) ?? null,
    _ = _({
      onSelectionChange: (_) =>
        _.mutate(_.visibility, {
          onError: _,
        }),
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
    });
  return _ || _.length == 0
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(_.Root, {
            state: _,
            children: [
              (0, _.jsx)(_.Trigger, {
                children: (0, _.jsxs)(_, {
                  align: `center`,
                  children: [
                    (0, _.jsx)(_, {
                      children: (0, _.jsx)(_, {}),
                    }),
                    _
                      ? (0, _.jsx)(_.Value, {
                          children: _.Localize(_.token),
                        })
                      : (0, _.jsx)(_.Placeholder, {
                          children: _,
                        }),
                  ],
                }),
              }),
              (0, _.jsx)(_.Options, {
                children: _.map((_) =>
                  (0, _.jsx)(
                    _.Option,
                    {
                      value: _,
                      children: _.Localize(_.token),
                    },
                    _.visibility,
                  ),
                ),
              }),
            ],
          }),
          _,
        ],
      });
}
var _ = [5, 2, 1, 4, 3];
function _(_) {
  let { publishedfileid: _, rgContentDescriptors: _, onClose: _ } = _,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(),
    [_, _] = (0, _.useState)(() => new Set(_)),
    _ = _(_, (_) =>
      _(
        `/sharedfiles/actions`,
        `UpdateUGCItemContentDescriptors`,
        _,
        _.rgAdd,
        _.rgRemove,
      ),
    ),
    _ = (_, _) => {
      let _ = new Set(_);
      (_
        ? (_.add(_), _(_).forEach((_) => _.add(_)))
        : (_.delete(_), _(_).forEach((_) => _.delete(_))),
        _(_));
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#Workshop_ItemAdmin_UpdateContentDescriptors`),
        onClose: _,
        children: [
          (0, _.jsx)(_, {
            direction: `column`,
            gap: `1`,
            children: _.map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  children: [
                    (0, _.jsx)(_, {
                      checked: _.has(_),
                      onChange: (_) => _(_, _),
                      children: _(_),
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(_),
                    }),
                  ],
                },
                _,
              ),
            ),
          }),
          (0, _.jsxs)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              (0, _.jsx)(_, {
                onClick: () => {
                  let _ = new Set(_),
                    _ = Array.from(_.values()).filter((_) => !_.has(_)),
                    _ = Array.from(_.values()).filter((_) => !_.has(_));
                  _.length == 0 && _.length == 0
                    ? _()
                    : _.mutate(
                        {
                          rgAdd: _,
                          rgRemove: _,
                        },
                        {
                          onSuccess: () => {
                            ((_.onSaved ?? _)(), _());
                          },
                          onError: _,
                        },
                      );
                },
                autoFocus: !0,
                children: _.Localize(`#Button_OK`),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)(`span`, {
                  children: _.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      }),
      _,
    ],
  });
}
function _(_) {
  let { actor: _, strNoActorLabel: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        href: _.strProfileURL,
        target: `_blank`,
        children: _.strPersonaName,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: _,
      });
}
function _(_) {
  return (0, _.useMemo)(
    () => new Map((_ ?? []).map((_) => [_.steamid, _])),
    [_],
  );
}

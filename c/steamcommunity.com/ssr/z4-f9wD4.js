var _ = `SQ5wolcGwDg-`,
  _ = `r6O4u0gg-nI-`,
  _ = `rwsGNcJUwZk-`,
  _ = `IcWxauXkZXQ-`,
  _ = `_8-T8QbMKCTw-`,
  _ = `j5aq6ahYi7M-`,
  _ = `YpeRZQtWWaw-`,
  _ = `AQPh4NLYwy4-`,
  _ = `eq-yGZO5jJ4-`,
  _ = _();
function _(_) {
  let { reportedContentID: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {});
}
function _(_) {
  return (0, _.jsx)(`div`, {
    children: (0, _.jsxs)(`table`, {
      className: _,
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(`tbody`, {
          children: (0, _.jsx)(`tr`, {
            children: (0, _.jsx)(`td`, {
              colSpan: 4,
              children: (0, _.jsx)(_, {
                size: `2`,
                children: _.Localize(`#subjectauditlog_noentries`),
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`colgroup`, {
        children: [
          (0, _.jsx)(`col`, {
            className: _,
          }),
          (0, _.jsx)(`col`, {
            className: _,
          }),
          (0, _.jsx)(`col`, {
            className: _,
          }),
          (0, _.jsx)(`col`, {}),
        ],
      }),
      (0, _.jsx)(`thead`, {
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Actor`,
              }),
            }),
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Action`,
              }),
            }),
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Details`,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.reportedContentID),
    _ = _?.data?.entries?.length ?? 0,
    _ = _.data?.entries ?? [];
  return (
    _.sort((_, _) => _.timestamp - _.timestamp),
    (0, _.jsx)(`div`, {
      children:
        _ > 0 &&
        (0, _.jsxs)(`table`, {
          className: `SQ5wolcGwDg-`,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsxs)(`tbody`, {
              children: [
                _ === void 0 &&
                  (0, _.jsx)(`tr`, {
                    children: (0, _.jsx)(`td`, {
                      colSpan: 4,
                      children: (0, _.jsx)(_, {
                        size: `2`,
                        children: _.Localize(`#subjectauditlog_noentries`),
                      }),
                    }),
                  }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      _.isLoading &&
                        (0, _.jsx)(`tr`, {
                          children: (0, _.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, _.jsx)(_, {}),
                          }),
                        }),
                      _.isError &&
                        (0, _.jsx)(`tr`, {
                          children: (0, _.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, _.jsx)(_, {
                              size: `2`,
                              children: _.Localize(`#subjectauditlog_error`),
                            }),
                          }),
                        }),
                      _.isSuccess &&
                        _ === 0 &&
                        (0, _.jsx)(`tr`, {
                          children: (0, _.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, _.jsx)(_, {
                              size: `2`,
                              children: _.Localize(
                                `#subjectauditlog_noentries`,
                              ),
                            }),
                          }),
                        }),
                      _.isSuccess &&
                        _ > 0 &&
                        _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              entry: _,
                            },
                            _.timestamp,
                          ),
                        ),
                    ],
                  }),
              ],
            }),
          ],
        }),
    })
  );
}
function _(_) {
  let { steamid: _, strPersonaName: _, bIsSupportAccount: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: (0, _.jsx)(_, {
          href: `${_.COMMUNITY_BASE_URL}profiles/${_}`,
          children: (0, _.jsx)(_, {
            size: `2`,
            truncate: !0,
            title: _,
            className: _,
            weight: _ ? `heavy` : void 0,
            children: _,
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(`span`, {
          className: `ndBY4P9PYW8-`,
          title: `Support or Admin account`,
          children: `Mod`,
        }),
    ],
  });
}
function _(_) {
  let { entry: _ } = _,
    _ = _(_.actor_steamid);
  if (!_.isSuccess || !_.data) return null;
  let _ = _.data.public_data?.persona_name;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          size: `2`,
          children: _(_.timestamp, !1, ``),
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              steamid: _.actor_steamid,
              strPersonaName: _,
              bIsSupportAccount: _.actor_is_support,
            }),
            (0, _.jsx)(_, {
              size: `2`,
              href: `${_.COMMUNITY_BASE_URL}moderation/activity/${_.actor_steamid}`,
              children: `(activity)`,
            }),
          ],
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsxs)(_, {
          size: `2`,
          children: [
            _(_.action),
            _.automated_action &&
              (0, _.jsx)(_.Fragment, {
                children: `\xA0(Automated)`,
              }),
          ],
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          _: `div`,
          size: `2`,
          children: (0, _.jsx)(_, {
            eAction: _.action,
            jsonData: _.additional_json_data,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { eAction: _, jsonData: _ } = _,
    _ = {};
  _ && (_ = JSON.parse(_));
  let _ = _.report_id
    ? (0, _.jsxs)(`span`, {
        children: [`Report ID: `, _.report_id],
      })
    : null;
  switch (_) {
    case 1:
      return _;
    case 2:
      return (0, _.jsxs)(_.Fragment, {
        children: [
          `Reason: `,
          _(_.reason),
          _.resolution !== 1 &&
            _.resolution !== 14 &&
            (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(`br`, {}), `Resolution: `, _(_.resolution)],
            }),
          _.sanctions &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`br`, {}),
                `Sanctions: `,
                _.sanctions.map(_).join(`, `),
              ],
            }),
        ],
      });
    case 4:
      return _;
    case 5:
      return (0, _.jsx)(_.Fragment, {
        children: JSON.stringify(_, null, `	`),
      });
    case 6:
      return (0, _.jsxs)(_.Fragment, {
        children: [`New level: `, _(_.level)],
      });
    case 7:
      return _;
    default:
      return null;
  }
}
function _(_) {
  let { subject: _ } = _,
    _ = _ && _.reports && _.reports.length > 0,
    _ = [...(_?.reports ?? [])].sort(
      (_, _) => (_.time_reported ?? 0) - (_.time_reported ?? 0),
    ),
    _ = _(_?.reported_content_id, !0),
    _ = new Set(
      (_.data?.subject?.reports ?? [])
        .filter((_) => _.reporter_is_support)
        .map((_) => _.reporter_steamid),
    );
  return (0, _.jsxs)(`table`, {
    className: _,
    children: [
      (0, _.jsxs)(`colgroup`, {
        children: [
          (0, _.jsx)(`col`, {
            className: _,
          }),
          (0, _.jsx)(`col`, {
            className: _,
          }),
          (0, _.jsx)(`col`, {
            className: _,
          }),
          (0, _.jsx)(`col`, {}),
        ],
      }),
      (0, _.jsx)(`thead`, {
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reporter`,
              }),
            }),
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Status`,
              }),
            }),
            (0, _.jsx)(`th`, {
              children: (0, _.jsx)(_, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reason`,
              }),
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`tbody`, {
        children: [
          !_ &&
            (0, _.jsx)(`tr`, {
              children: (0, _.jsx)(`td`, {
                colSpan: 4,
                children: (0, _.jsx)(_, {
                  size: `2`,
                  children: _.Localize(`#contentreportslist_noreports`),
                }),
              }),
            }),
          _ &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  report: _,
                  bReporterIsSupport: _.has(_.reporter_steamid),
                },
                _.report_id,
              ),
            ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { report: _, bReporterIsSupport: _ } = _,
    _ = _(_.reporter_steamid);
  if (!_.isSuccess || !_.data?.public_data) return null;
  let _ = !!_.time_disputed && _.dispute_resolved === 0,
    _ = _.resolved !== 0 && (!_.time_disputed || _.dispute_resolved !== 0),
    _ = _.time_dispute_resolved !== 0,
    _ = _.resolved === 1,
    _ = _.data.public_data.persona_name;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          size: `2`,
          children: _(_.time_reported, !1, ``),
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`a`, {
              href: `${_.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
              children: (0, _.jsx)(_, {
                playerLinkDetails: _.data,
                size: `X-Small`,
                alt: `Reporter`,
              }),
            }),
            (0, _.jsx)(_, {
              steamid: _.reporter_steamid,
              strPersonaName: _,
              bIsSupportAccount: _,
            }),
          ],
        }),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsxs)(_, {
          _: `div`,
          size: `2`,
          children: [
            !_ &&
              (0, _.jsx)(`span`, {
                children: _.Localize(`#moderation_resolutionstatus_pending`),
              }),
            _ &&
              !_ &&
              !_ &&
              (0, _.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_acquitted_at`,
                  _(_.time_resolved, !1, ``),
                ),
              }),
            _ &&
              !_ &&
              !_ &&
              !_ &&
              (0, _.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_resolved_at`,
                  _(_.time_resolved, !1, ``),
                ),
              }),
            _ &&
              !_ &&
              (0, _.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_disputed_at`,
                  _(_.time_disputed, !1, ``),
                ),
              }),
            _ &&
              (0, _.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_dispute_resolved_at`,
                  _(_.time_dispute_resolved, !1, ``),
                ),
              }),
          ],
        }),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            size: `2`,
            children: _(_.report_reason),
          }),
          !!_.report_text &&
            (0, _.jsxs)(_, {
              _: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, _.jsx)(_, {
                  size: `1`,
                  weight: `heavy`,
                  contrast: `description`,
                  children: `Report: `,
                }),
                _.report_text,
              ],
            }),
          !!_.time_disputed &&
            !!_.dispute_details &&
            (0, _.jsxs)(_, {
              _: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, _.jsx)(_, {
                  size: `1`,
                  weight: `heavy`,
                  contrast: `description`,
                  children: `Dispute: `,
                }),
                _.dispute_details,
              ],
            }),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1),
  _ = `VWz-fkV5qwY-`,
  _ = `DGGxOZ1t-hA-`,
  _ = [
    [0, `#moderation_escalationlevel_any`],
    [1, `#moderation_escalationlevel_supervisor`],
    [10, `#moderation_escalationlevel_valve`],
  ];
function _(_) {
  return (_?.required_moderator_level ?? 0) < 10;
}
function _(_) {
  let { reportedContentID: _, onClose: _ } = _,
    _ = _.eCurrentLevel ?? 0,
    _ = _.filter(([_]) => _ > _),
    [_, _] = (0, _.useState)(10),
    _ = _(_),
    [_, _] = (0, _.useState)(``);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#moderation_escalation_description`),
      }),
      (0, _.jsx)(`select`, {
        className: _,
        value: _,
        onChange: (_) => _(parseInt(_.target.value)),
        children: _.map(([_, _]) =>
          (0, _.jsx)(
            `option`,
            {
              value: _,
              children: _.Localize(_),
            },
            _,
          ),
        ),
      }),
      (0, _.jsx)(`label`, {
        children: _.Localize(`#moderation_escalation_escalationnote`),
      }),
      (0, _.jsx)(_, {
        onTextChange: _,
        value: _,
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        justify: `end`,
        gap: `2`,
        marginTop: `2`,
        children: [
          (0, _.jsx)(_, {
            color: `dull`,
            onClick: _,
            children: _.Localize(`#moderation_cancel`),
          }),
          (0, _.jsx)(_, {
            onClick: async () => {
              (await _.mutateAsync({
                eNewLevel: _,
                strNote: _,
              }),
                _());
            },
            disabled: _.length == 0,
            loading: _.isPending,
            children: _.Localize(`#moderation_escalation_escalate`),
          }),
        ],
      }),
    ],
  });
}

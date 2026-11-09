import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./segmentedcontrol.js";
import { _, _, _, _ } from "./moderationqueries.js";
import { _, _, _, _ } from "./escalatesubjectdialog.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = `kz--RFdqETk-`,
  _ = `_37eExA4Y63U-`,
  _ = `ec1nSO9hROk-`,
  _ = `-NGXn8lsHRg-`,
  _ = `NQvpF1uY2-0-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  return !!_ && _ !== 3;
}
function _(_) {
  return (
    _.subject_type === 3 &&
    _.coordinates?.ugc_content_type === 16 &&
    !!_.reports?.some((_) => _.report_reason === 16)
  );
}
function _(_) {
  return _(_.status)
    ? (0, _.jsxs)(`span`, {
        className: (0, _.default)(_, _.className),
        children: [_.label, _.status === 1 && `?`],
      })
    : null;
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `Terrorism`,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `CSAM`,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `Violent threat`,
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    children: `Malware?`,
  });
}
function _(_) {
  let { subject: _ } = _,
    _ = _(_);
  return !_(_.terrorism_status) &&
    !_(_.csam_status) &&
    !_(_.credible_threat_of_violence_status) &&
    !_
    ? null
    : (0, _.jsxs)(_, {
        wrap: `wrap`,
        gap: `1`,
        children: [
          (0, _.jsx)(_, {
            status: _.terrorism_status,
          }),
          (0, _.jsx)(_, {
            status: _.csam_status,
          }),
          (0, _.jsx)(_, {
            status: _.credible_threat_of_violence_status,
          }),
          _ && (0, _.jsx)(_, {}),
        ],
      });
}
var _ = _(_(), 1);
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
function _(_) {
  let { publishedFileID: _ } = _,
    _ = _();
  return (
    (0, _.useEffect)(() => {
      let _ = (_) => {
        _.detail?.publishedFileID == _ &&
          _.invalidateQueries({
            queryKey: _(_),
          });
      };
      return (
        window.addEventListener(`ugc-moderation-resolved`, _),
        () => window.removeEventListener(`ugc-moderation-resolved`, _)
      );
    }, [_, _]),
    (0, _.jsx)(_, {
      publishedFileID: _,
    })
  );
}
export { _ as UGCModerationSubjectPanel };

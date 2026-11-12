import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~1e67c3e4e4.js";
import { _ } from "./chunk~eefd71512b.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
var _ = `_9-W7SdmsKXY-`,
  _ = `ek4QiIo5ajA-`,
  _ = `kJDQZr8W-ho-`,
  _ = `-LcpvovFNxA-`,
  _ = `fMQqI-SP2pY-`,
  _ = _(_()),
  _ = _();
function _(_) {
  let _ = _({
      subject_type: 1,
      topic: _.gidTopic,
    }),
    _ = _(_.clanSteamID, 7, _.gidForum, _.gidTopic);
  return (0, _.jsx)(_, {
    subjectType: 1,
    subjectGroupQuery: _,
    commentThreadQuery: _,
  });
}
function _(_) {
  let { subjectGroupQuery: _ } = _,
    _ = `floatingforumreportedsubjectslist`,
    [_, _] = (0, _.useState)(() => localStorage[_] !== void 0);
  if (
    ((0, _.useMemo)(() => {
      _.data?.subjects?.sort(_);
    }, [_.data?.subjects]),
    !_.isSuccess || !_.data?.subjects || _.data.subjects.length === 0)
  )
    return null;
  let _ = () => {
      (_ ? localStorage.removeItem(_) : localStorage.setItem(_, `1`), _(!_));
    },
    _ = 0;
  return (0, _.jsx)(`div`, {
    className: _ ? _ : (_.inlineClassNames ?? ``),
    children: (0, _.jsx)(`div`, {
      className: `rightbox`,
      children: (0, _.jsxs)(`div`, {
        className: `content`,
        children: [
          (0, _.jsx)(`div`, {
            className: `rightbox_list_header`,
            children: (0, _.jsxs)(`span`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: `title`,
                  children: _.Localize(`#reportedsubjectlist_header`),
                }),
                (0, _.jsx)(`button`, {
                  className: _,
                  onClick: _,
                  children: (0, _.jsx)(_, {}),
                }),
              ],
            }),
          }),
          _.isError &&
            (0, _.jsx)(`div`, {
              className: `moderatorToolLink`,
              children: `Error`,
            }),
          _.isLoading && (0, _.jsx)(_, {}),
          _.isSuccess &&
            (0, _.jsx)(`div`, {
              style: {
                maxHeight: `20em`,
                overflowY: `scroll`,
              },
              children: _.data.subjects.map((_) =>
                _.coordinates
                  ? (0, _.jsx)(
                      _,
                      {
                        subject: _,
                        commentThreadQuery: _.commentThreadQuery,
                      },
                      _.reported_content_id,
                    )
                  : (0, _.jsx)(
                      `div`,
                      {
                        className: _(`moderatorToolLink`, `-LcpvovFNxA-`),
                        children: `Bug - inform Valve`,
                      },
                      `bad-${_++}`,
                    ),
              ),
            }),
        ],
      }),
    }),
  });
}
function _(_, _) {
  if (_.length !== _.length) return _.length - _.length;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.charCodeAt(_),
      _ = _.charCodeAt(_);
    if (_ !== _) return _ - _;
  }
  return 0;
}
function _(_, _) {
  let _ = +(_.unresolved_dispute_count + _.unresolved_report_count > 0);
  return (
    +(_.unresolved_dispute_count + _.unresolved_report_count > 0) - _ ||
    _.required_moderator_level - _.required_moderator_level ||
    _(_.coordinates?.comment ?? ``, _.coordinates?.comment ?? ``)
  );
}
function _(_) {
  for (;;) {
    let _ = _.indexOf(`[/quote]`);
    if (_ === -1) break;
    _ = _.slice(_ + 8);
  }
  return _.slice(0, 35);
}
function _(_) {
  let { subject: _, commentThreadQuery: _ } = _,
    _ = _.coordinates?.comment,
    _ = null;
  _ === `0` && (_ = `Topic`);
  let _ = `#NA`;
  if (_ === null && _.isSuccess) {
    let _ = 1;
    for (let _ of _.data.comments ?? []) {
      if (_.gidcomment === _) {
        ((_ = _(_.text)), (_ = `#${_}`));
        break;
      }
      _++;
    }
  }
  if (_ === null && _.isSuccess) {
    if (_.subject_type === 2) _ = `[Deleted]`;
    else
      for (let _ of _.data.deleted_comments ?? [])
        if (_.gidcomment === _) {
          _ = _(_.text);
          break;
        }
  }
  _ === null && (_ = `[Comment]`);
  let _;
  _.subject_type === 1
    ? (_ = _ === `0` ? `#forum_op_${_.coordinates?.topic}` : `#c${_}`)
    : _.subject_type === 2 && (_ = `#comment_${_}`);
  let _ = _.unresolved_dispute_count > 0 || _.unresolved_report_count > 0,
    _ = _.required_moderator_level === 10,
    _ = _.required_moderator_level === 1;
  return (0, _.jsxs)(`div`, {
    className: _(`moderatorToolLink`, _),
    children: [
      (0, _.jsxs)(`a`, {
        href: _,
        children: [
          _ &&
            !_ &&
            !_ &&
            (0, _.jsx)(`img`, {
              className: `pSFLKLsjgbM-`,
              src: `${_.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
            }),
          !_ &&
            (0, _.jsx)(`span`, {
              className: `pSFLKLsjgbM-`,
              children: `\xA0`,
            }),
          _ &&
            _ &&
            (0, _.jsx)(`span`, {
              className: _(`pSFLKLsjgbM-`, `W8Ft0tBdYIM-`),
              children: `VO`,
            }),
          _ &&
            _ &&
            (0, _.jsx)(`span`, {
              className: _(`pSFLKLsjgbM-`, `sERoHMrC-4o-`),
              children: `▲`,
            }),
          `\xA0`,
          _,
          `\xA0`,
          _,
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          `\xA0`,
          _.Localize(
            `#forumsubjectlist_subjectreportsummary`,
            _.unresolved_report_count,
            _.unresolved_dispute_count,
          ),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  let _ = _();
  return _({
    queryKey: [`comment_thread`, _, _, _, _],
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_steamid(_),
        _.Body().set_comment_thread_type(_),
        _ !== -1 && _.Body().set_gidfeature(_),
        _ !== -1 && _.Body().set_gidfeature2(_),
        _.Body().set_include_deleted(!0),
        _.Body().set_oldest_first(!0),
        (await _.GetCommentThread(_, _)).Body().toObject()
      );
    },
  });
}
export { _ as ReportedSubjectList, _ as default, _ as useCommentThread };

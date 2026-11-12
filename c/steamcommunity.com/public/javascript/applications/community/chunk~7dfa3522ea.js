import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~1e67c3e4e4.js";
import { _ } from "./chunk~3a8474f307.js";
import { _, _, _, _, _, _ } from "./main.js";
import { _ } from "./chunk~f0745bb5e2.js";
var _ = _();
function _(_) {
  let _ = (
      _({
        subject_type: 1,
        topic: _.topicId,
      }).data?.subjects ?? []
    ).find((_) => _.coordinates?.comment === _.subjectId),
    _ = _(
      _.clanSteamId,
      _.forumId,
      _.topicId,
      _.subjectId,
      _?.reported_content_id,
    ),
    _ = _(
      _.clanSteamId,
      _.forumId,
      _.topicId,
      _.subjectId,
      _?.reported_content_id,
    );
  return (0, _.jsx)(_, {
    sanctionMutation: _,
    acquitMutation: _,
    subject: _,
    eSubjectType: 1,
    gidComment: _.subjectId,
    authorSteamID: _.authorSteamId,
    clanSteamID: _.clanSteamId,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`table`, {
    children: (0, _.jsxs)(`tbody`, {
      children: [
        (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`td`, {
              children: `Clan SteamID:`,
            }),
            (0, _.jsxs)(`td`, {
              children: [
                _.clanSteamId,
                ` `,
                (0, _.jsx)(_, {
                  text: _.clanSteamId,
                  size: `small`,
                }),
              ],
            }),
          ],
        }),
        (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`td`, {
              children: `Forum GID:`,
            }),
            (0, _.jsxs)(`td`, {
              children: [
                _.forumId,
                ` `,
                (0, _.jsx)(_, {
                  text: _.forumId,
                  size: `small`,
                }),
              ],
            }),
          ],
        }),
        (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`td`, {
              children: `Topic GID:`,
            }),
            (0, _.jsxs)(`td`, {
              children: [
                _.topicId,
                ` `,
                (0, _.jsx)(_, {
                  text: _.topicId,
                  size: `small`,
                }),
              ],
            }),
          ],
        }),
        _.subjectId !== `0` &&
          (0, _.jsxs)(`tr`, {
            children: [
              (0, _.jsx)(`td`, {
                children: `Comment GID:`,
              }),
              (0, _.jsxs)(`td`, {
                children: [
                  _.subjectId,
                  ` `,
                  (0, _.jsx)(_, {
                    text: _.subjectId,
                    size: `small`,
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_steamid(_),
        _.Body().set_gidforum(_),
        _.Body().set_gidtopic(_),
        _.Body().set_gidpost(_));
      let _ = await _.ResolveReportedPost(_, _);
      if (!_.BSuccess())
        throw Error(`Failed to acquit forum comment: ` + _.GetEMsg());
    },
    onSuccess: async (_) => {
      await _(_, _);
    },
  });
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      (_.Body().set_steamid(_),
        _.Body().set_gidforum(_),
        _.Body().set_gidtopic(_),
        _.Body().set_gidpost(_),
        _.Body().set_reason(_.reason),
        _.Body().set_note(_.message));
      for (let _ of _.sanctions) {
        let _ = new _();
        (_.set_sanction(_.sanction),
          _.days !== void 0 && _.set_days(_.days),
          _.Body().add_sanctions(_));
      }
      let _ = await _.SanctionReportedPost(_, _);
      if (!_.BSuccess())
        throw Error(
          `Failed to sanction forum comment: (` +
            _.GetEResult() +
            `) ` +
            _.GetErrorMessage(),
        );
    },
    onSuccess: async (_) => {
      await _(_, _);
    },
  });
}
export {
  _ as default,
  _ as useAcquitForumComment,
  _ as useSanctionForumComment,
};

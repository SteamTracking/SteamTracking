import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~93de6fa506.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
var _ = `get_reported_content`,
  _ = `get_reported_content_by_id`,
  _ = `get_reported_content_audit_log`,
  _ = (_) => [_, JSON.stringify(_)],
  _ = (_) => [_, _],
  _ = (_) => [_, _];
async function _(_, _) {
  return Promise.all([
    _.invalidateQueries({
      queryKey: [_],
      exact: !1,
    }),
    _.invalidateQueries({
      queryKey: _(_),
    }),
    _.invalidateQueries({
      queryKey: _(_),
    }),
  ]);
}
function _(_, _) {
  return {
    queryKey: _(_),
    enabled: _(_),
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_coordinates(_.fromObject(_));
      let _ = await _.GetReportedContent(_, _);
      if (!_.BSuccess())
        throw Error(`Failed in GetReportedContent, EResult: ` + _.GetEResult());
      return _.Body().toObject();
    },
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _, _ = !1) {
  return {
    queryKey: [..._(_), _],
    enabled: !!_,
    queryFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_reported_content_id(_),
        _ && _.Body().set_include_reporter_account_status(!0));
      let _ = await _.GetReportedContentByID(_, _);
      if (!_.BSuccess())
        throw Error(
          `Failed in GetReportedContentByID, EResult: ` + _.GetEResult(),
        );
      return _.Body().toObject();
    },
  };
}
function _(_, _ = !1) {
  let _ = _();
  return _(_(_, _, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return;
      let _ = _.Init(_);
      return (
        _.Body().set_reported_content_id(_),
        (await _.GetAuditLogByID(_, _)).Body().toObject()
      );
    },
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      (_.Body().set_reported_content_id(_),
        _.Body().set_new_level(_.eNewLevel),
        _.eReason && _.Body().set_reason(_.eReason),
        _.strNote && _.Body().set_note(_.strNote));
      let _ = await _.EscalateSubjectByID(_, _);
      if (_.GetEResult() !== 1)
        throw Error(`Failed to escalate subject: ${_.GetEMsg()}`);
    },
    onSuccess: async () => {
      await Promise.all([
        _(_, _),
        _.invalidateQueries({
          queryKey: [`get_claimed`],
        }),
        _.invalidateQueries({
          queryKey: [`get_subject_overview`],
        }),
      ]);
    },
  });
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_reported_content_id(_.reportedContentID);
      let _ = await _.SustainModerationByID(_, _);
      if (!_.BSuccess()) throw Error(`EResult ` + _.GetEResult());
    },
    onSuccess: async (_, _) => {
      (await _(_, _.reportedContentID),
        await _.invalidateQueries({
          queryKey: [`get_claimed`],
        }));
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationKey: [`release_subject`, ..._],
    mutationFn: async () => {
      let _ = _.Init(_);
      for (let _ of _) {
        let _ = new _();
        (_.set_reported_content_id(_), _.Body().add_subjects_to_release(_));
      }
      let _ = await _.ReleaseSubjects(_, _);
      if (!_.BSuccess()) throw Error(`EResult ` + _.GetEResult());
    },
    onSuccess: async () => {
      await Promise.all([
        _.invalidateQueries({
          queryKey: [`get_claimed`],
        }),
        _.invalidateQueries({
          queryKey: [`get_subject_overview`],
        }),
        ..._.map((_) => _(_, _)),
      ]);
    },
  });
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_reported_content_id(_), _.Body().set_details(_));
      let _ = await _.OwnerDisputeModeration(_, _);
      if (!_.BSuccess()) throw Error(`EResult ` + _.GetEResult());
    },
    onSuccess: async () => {
      await _(_, _);
    },
  });
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_reported_content_id(_),
        _.Body().set_owner_dispute_details(_));
      let _ = await _.UpdateSubjectByID(_, _);
      if (!_.BSuccess()) throw Error(`EResult ` + _.GetEResult());
    },
    onSuccess: async () => {
      await _(_, _);
    },
  });
}
function _(_, _) {
  return {
    queryKey: [`reporterstats`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_steamid(_);
      let _ = await _.GetReporterStats(_, _);
      if (!_.BSuccess()) throw Error(`EResult ` + _.GetEResult());
      return _.Body().toObject();
    },
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      (_.Body().set_steamid(_),
        _.Body().set_comment_thread_id(_),
        _.Body().set_gidcomment(_),
        _.Body().set_reason(_.reason),
        _.Body().set_note(_.message));
      for (let _ of _.sanctions) {
        let _ = new _();
        (_.set_sanction(_.sanction),
          _.days && _.set_days(_.days),
          _.Body().add_sanctions(_));
      }
      let _ = await _.SanctionComment(_, _);
      if (!_.BSuccess())
        throw Error(
          `SanctionComment failed. EResult: ${_.GetEResult()} (${_.GetErrorMessage()})`,
        );
    },
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [`get_claimed`],
      });
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_steamid(_),
        _.Body().set_comment_thread_id(_),
        _.Body().set_gidcomment(_),
        _.Body().set_report_action(1),
        _.Body().set_resolve(!0),
        await _.UpdateCommentReportState(_, _));
    },
    onSuccess: async () => {
      await _.invalidateQueries({
        queryKey: [`get_claimed`],
      });
    },
  });
}

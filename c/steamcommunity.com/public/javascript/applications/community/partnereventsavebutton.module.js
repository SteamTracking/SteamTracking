import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=`,
  _ = _(_()),
  _ = _();
function _(_) {
  let _ = _(),
    _ = _({
      queryKey: _.queryKey,
      queryFn: async () => _.queryFn(_, ..._.args),
    });
  return _.children(_);
}
function _(_, _) {
  let _ = _();
  return _({
    queryKey: [`crowdin_metadata_for_clan_event`, _.ConvertTo64BitString(), _],
    queryFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.ConvertTo64BitString()), _.Body().set_itemid(_));
      let _ = await _.GetClanEventCrowdInMetadata(_, _);
      return _.GetEResult() == 1 ? _.Body().toObject() : null;
    },
  });
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_);
  let _ = await _.GetClanCrowdInMetadata(_, _);
  if (_.GetEResult() === 42)
    return {
      crowdin_project_id: null,
      crowdin_directory_id: null,
      push_by_default: !1,
    };
  if (_.GetEResult() !== 1) throw _.GetEResult();
  return _.Body().toObject();
}
function _(_) {
  let _ = _();
  return _({
    queryKey: [`clan_crowdin_mapping`, _],
    queryFn: async () => await _(_, _),
  });
}
function _(_) {
  return _({
    queryKey: [`clan_crowdin_mapping`, _.clanSteamId],
    queryFn: _,
    args: [_.clanSteamId],
    children: _.children,
  });
}
var _ = (0, _.createContext)(null);
function _(_) {
  let _ = _(_.clanInfo.clanSteamID.ConvertTo64BitString()),
    _ = !1;
  return (
    _.isSuccess && (_ = _.data.push_by_default),
    (0, _.jsx)(_.Provider, {
      value: {
        clanSteamId: _.clanInfo.clanSteamID,
        bPushToCrowdInByDefault: _,
      },
      children: _.children,
    })
  );
}
async function _(_, _, _, _) {
  let _ = _.Init(_);
  (_.Body().set_language(_), _.Body().set_steamid(_), _.Body().set_itemid(_));
  let _ = await _.FetchTranslationFromCrowdIn(_, _);
  if (_.GetEResult() != 1)
    throw Error(
      `Error from FetchLocalizationForClanEventFromCrowdIn: ${_.GetErrorMessage()} (${_.GetEResult()})`,
    );
  return _.Body().toObject();
}
function _(_, _, _) {
  let _ = _();
  return _({
    mutationKey: [`fetch_translation_for_clan_event`, _, _, _],
    mutationFn: async function () {
      return await _(_, _, _, _);
    },
    retry: !1,
  });
}
var _ = `FIGxwNiJB6c-`,
  _ = `pZmYw-RhYlI-`,
  _ = `r-oWN5-ZWBY-`,
  _ = `cG3-aLkAL6Y-`,
  _ = `LjVG3nUy3Rc-`,
  _ = `_4ExFExQnGIY-`,
  _ = `x3PDBbckxnQ-`;

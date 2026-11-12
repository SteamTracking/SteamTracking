/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, G as n, K as r, ot as i } from "./chunk~01cfc309bf.js";
import { C as a, D as o, N as s, O as c, Zp as l, nh as u } from "./main.js";
var d = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=`,
  f = e(t()),
  p = i();
function m(e) {
  let t = l(),
    n = r({
      queryKey: e.queryKey,
      queryFn: async () => e.queryFn(t, ...e.args),
    });
  return e.children(n);
}
function h(e, t) {
  let n = l();
  return r({
    queryKey: [`crowdin_metadata_for_clan_event`, e.ConvertTo64BitString(), t],
    queryFn: async () => {
      let r = u.Init(c);
      (r.Body().set_steamid(e.ConvertTo64BitString()), r.Body().set_itemid(t));
      let i = await s.GetClanEventCrowdInMetadata(n, r);
      return i.GetEResult() == 1 ? i.Body().toObject() : null;
    },
  });
}
async function g(e, t) {
  let n = u.Init(o);
  n.Body().set_steamid(t);
  let r = await s.GetClanCrowdInMetadata(e, n);
  if (r.GetEResult() === 42)
    return {
      crowdin_project_id: null,
      crowdin_directory_id: null,
      push_by_default: !1,
    };
  if (r.GetEResult() !== 1) throw r.GetEResult();
  return r.Body().toObject();
}
function _(e) {
  let t = l();
  return r({
    queryKey: [`clan_crowdin_mapping`, e],
    queryFn: async () => await g(t, e),
  });
}
function v(e) {
  return m({
    queryKey: [`clan_crowdin_mapping`, e.clanSteamId],
    queryFn: g,
    args: [e.clanSteamId],
    children: e.children,
  });
}
var y = (0, f.createContext)(null);
function b(e) {
  let t = _(e.clanInfo.clanSteamID.ConvertTo64BitString()),
    n = !1;
  return (
    t.isSuccess && (n = t.data.push_by_default),
    (0, p.jsx)(y.Provider, {
      value: {
        clanSteamId: e.clanInfo.clanSteamID,
        bPushToCrowdInByDefault: n,
      },
      children: e.children,
    })
  );
}
async function x(e, t, n, r) {
  let i = u.Init(a);
  (i.Body().set_language(r), i.Body().set_steamid(t), i.Body().set_itemid(n));
  let o = await s.FetchTranslationFromCrowdIn(e, i);
  if (o.GetEResult() != 1)
    throw Error(
      `Error from FetchLocalizationForClanEventFromCrowdIn: ${o.GetErrorMessage()} (${o.GetEResult()})`,
    );
  return o.Body().toObject();
}
function S(e, t, r) {
  let i = l();
  return n({
    mutationKey: [`fetch_translation_for_clan_event`, e, t, r],
    mutationFn: async function () {
      return await x(i, e, t, r);
    },
    retry: !1,
  });
}
var C = `FIGxwNiJB6c-`,
  w = `pZmYw-RhYlI-`,
  T = `r-oWN5-ZWBY-`,
  E = `cG3-aLkAL6Y-`,
  D = `LjVG3nUy3Rc-`,
  O = `_4ExFExQnGIY-`,
  k = `x3PDBbckxnQ-`;
export {
  O as a,
  y as c,
  _ as d,
  h as f,
  w as i,
  b as l,
  d as m,
  E as n,
  k as o,
  S as p,
  T as r,
  C as s,
  D as t,
  v as u,
};

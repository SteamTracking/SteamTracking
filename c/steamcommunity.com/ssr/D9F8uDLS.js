var _ = {
    AppHome: (_, _) =>
      _(`home`, {
        ..._,
        appid: _,
      }),
    AppGuides: (_, _ = {}) =>
      _(`guides`, {
        ..._,
        appid: _,
      }),
    Browse: (_, _ = {}) =>
      _(`browse`, {
        ..._,
        appid: _,
      }),
    MyFiles: (_, _ = {}) =>
      _(`myfiles`, {
        ..._,
        appid: _,
      }),
    Discussions: (_, _ = {}) =>
      _(`discussions`, {
        ..._,
        appid: _,
      }),
    About: (_, _ = {}) =>
      _(`about`, {
        ..._,
        appid: _,
      }),
    CreateCollection: (_, _ = {}) =>
      _(`editcollection`, {
        ..._,
        appid: _,
      }),
    CreateMerchandise: (_, _ = {}) =>
      _(`createmerch`, {
        ..._,
        appid: _,
      }),
    CreateGuide: (_, _ = {}) =>
      _(`editguide`, {
        ..._,
        appid: _,
      }),
    CreateArtwork: (_, _ = {}) =>
      `${_.COMMUNITY_BASE_URL}sharedfiles/uploadartwork/?appid=${_}`,
    EditItem: (_, _, _) =>
      `${_.COMMUNITY_BASE_URL}sharedfiles/edititem/${_}/${_}/${_ ?? ``}`,
    ApprovalQueue: (_, _ = {}) =>
      _(`approvalqueue`, {
        ..._,
        appid: _,
      }),
  },
  _ = {
    Details: (_) => _(`sharedfiles/filedetails`, _),
    Changelog: (_, _) =>
      _(`sharedfiles/filedetails/changelog`, _, _ && _ > 1 ? `&p=${_}` : ``),
    Comments: (_) => _(`sharedfiles/filedetails/comments`, _),
    Stats: (_) => _(`sharedfiles/filedetails/stats`, _),
    ManagePreviews: (_) => _(`sharedfiles/filedetails/managepreviews`, _),
    MerchArtworkUpload: (_) => _(`sharedfiles/filedetails/merchartwork`, _),
    ManageGuide: (_) => _(`sharedfiles/filedetails/manageguide`, _),
    EditGuideSection: (_, _) =>
      _(
        `sharedfiles/filedetails/editguidesubsection`,
        _,
        _ ? `&sectionid=${_}` : ``,
      ),
    ManageChildren: _,
    ManageCollection: _,
    ManageRequiredItems: _,
  };
function _(_) {
  return _(`sharedfiles/filedetails/managechildren`, _);
}
function _(_, _, _ = ``) {
  return _ ? `${_.COMMUNITY_BASE_URL}${_}/?id=${_}${_}` : _.COMMUNITY_BASE_URL;
}
function _(_, _ = {}) {
  let _ = ``;
  _?.search &&
    (typeof _.search == `string`
      ? (_ = _.search)
      : (_.search.delete(`appid`), (_ = _.search.toString())));
  let _ = `${_.COMMUNITY_BASE_URL}workshop/${_}${_ ? `?` + _ : ``}`;
  switch (_) {
    case `browse`:
      _ = `${_.COMMUNITY_BASE_URL}workshop/browse/?appid=${_.appid}${_ ? `&` + _ : ``}`;
      break;
    case `myfiles`:
      _ = `${_.COMMUNITY_BASE_URL}my/myworkshopfiles/?appid=${_.appid}${_ ? `&` + _ : ``}`;
      break;
    case `home`:
      _ = `${_.COMMUNITY_BASE_URL}app/${_.appid}/workshop/`;
      break;
    case `guides`:
      _ = `${_.COMMUNITY_BASE_URL}app/${_.appid}/guides/${_ ? `?` + _ : ``}`;
      break;
    case `discussions`:
      _ = `${_.COMMUNITY_BASE_URL}workshop/discussions/?appid=${_.appid}`;
      break;
    case `about`:
      _ = `${_.COMMUNITY_BASE_URL}workshop/about/?appid=${_.appid}`;
      break;
    case `editcollection`:
      _ = `${_.COMMUNITY_BASE_URL}workshop/editcollection/?appid=${_.appid}`;
      break;
    case `editguide`:
      _ = `${_.COMMUNITY_BASE_URL}sharedfiles/edititem/${_.appid}/9/`;
      break;
    case `createmerch`:
      _ = `${_.COMMUNITY_BASE_URL}sharedfiles/edititem/${_.appid}/11/`;
      break;
    case `approvalqueue`:
      _ = `${_.COMMUNITY_BASE_URL}sharedfiles/moderationqueueview/?appid=${_.appid}`;
  }
  return _;
}

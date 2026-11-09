var _ = _(_(), 1);
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(
    () => (_ ? (_.item_type == 0 ? [_.appid] : _.included_appids || []) : []),
    [_],
  );
}
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
function _(_) {
  let { data: _ } = _({
    appid: _,
  });
  return _?.appid || _;
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(() => {
    if (_ && _.related_items && _.related_items.parent_appid)
      return {
        appid: _.related_items.parent_appid,
      };
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            appid: _,
          }
        : void 0,
    [_],
  );
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            packageid: _,
          }
        : void 0,
    [_],
  );
}
function _(_) {
  return _
    ? !!(
        _.related_items &&
        _.related_items.standalone_demo_appid &&
        _.related_items.standalone_demo_appid.length > 0 &&
        _.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function _(_) {
  return !_ || !_.related_items?.standalone_demo_appid
    ? []
    : _.related_items?.standalone_demo_appid;
}
function _(_, _ = !1) {
  if (_)
    return _ && _(_)
      ? `${_.STORE_BASE_URL}app/${_(_)[0]}`
      : `${_.STORE_BASE_URL}${_.store_url_path}`;
}
function _() {
  window.location.href = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var _ = {};
(_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _();
function _(_) {
  let { closeModal: _, strDescOverride: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: _ || _.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: _,
    strOKButtonText: _.Localize(`#Button_OK`),
    onOK: () => {
      _(), _();
    },
  });
}
function _(_) {
  let [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        closeModal: _,
        strDescOverride: _,
      }),
    }),
    fnShowLogonDialog: _,
  };
}
function _(_) {
  let { label: _, strDialogDesc: _ } = _,
    { elDialogElement: _, fnShowLogonDialog: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        children: _ || _.Localize(`#Login_SignIn`),
      }),
      _,
    ],
  });
}
function _(_) {
  let { children: _, ..._ } = _,
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    nodeRef: _,
    ..._,
    children: _.children(_),
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

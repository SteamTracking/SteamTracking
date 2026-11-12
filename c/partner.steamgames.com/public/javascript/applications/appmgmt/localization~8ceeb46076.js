import { _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import { _, _, _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _, _, _, _ } from "./chunk~9a06851bec.js";
import { _ } from "./chunk~44f252525d.js";
var _ = _(_());
function _(_, _ = ``, _ = null) {
  return _.InstrumentLink(_, _, _);
}
function _(_, _, _) {
  let _ = _();
  return _.useMemo(() => {
    let _ = _(_).toLowerCase(),
      _ = _(_.COMMUNITY_BASE_URL).toLowerCase(),
      _ = _(_.STORE_BASE_URL).toLowerCase();
    return _ === _ || _ === _ ? _(_, _, _, _) : _;
  }, [_, _, _, _]);
}
function _(_, _, _ = null) {
  let _ = _(_, _),
    _ = _ ? _.GetCuratorClanIDParam(_) : null;
  return _.AddNavParamToURL(_, _, _);
}
function _(_, _, _, _ = null) {
  let _ = _(_, _, _);
  if (_ && Object.keys(_).length > 0)
    try {
      let _ = new URL(_(_)),
        _ = new URLSearchParams(_.search);
      return (
        Object.entries(_).forEach(([_, _]) => {
          _.set(_, encodeURIComponent(_ ?? ``));
        }),
        _.origin + _.pathname + `?` + _.toString() + _.hash
      );
    } catch {}
  return _;
}
function _(_, _ = null) {
  return _?.domain ? _.GetLinkParam(_, _) : _.SNR;
}
var _ = class _ {
    static sm_strDomain;
    static sm_strController;
    static sm_strMethod;
    static sm_strSubmethod;
    static sm_strComputedLinkPrefix;
    static SetNavEventParams(_, _, _ = null, _ = null) {
      ((_.sm_strDomain = _),
        (_.sm_strController = _),
        (_.sm_strMethod = _),
        (_.sm_strSubmethod = _),
        (_.sm_strComputedLinkPrefix = null));
    }
    static GetDefaultParams() {
      let _ = {
        domain: _.sm_strDomain,
        controller: _.sm_strController,
      };
      return (
        _.sm_strMethod && (_.method = _.sm_strMethod),
        _.sm_strSubmethod && (_.submethod = _.sm_strSubmethod),
        _
      );
    }
    static InstrumentLink(_, _, _ = null) {
      let _ = _.GetLinkParam(_, _),
        _ = typeof _ == `string` ? null : _.GetCuratorClanIDParam(_);
      return _.AddNavParamToURL(_, _, _);
    }
    static GetLinkParam(_, _ = null) {
      let _;
      if (typeof _ != `string`) {
        if (_.domain) return _.GetSNRLinkParam(_, _);
        _ = _.feature || ``;
      }
      let _;
      if (!_.sm_strComputedLinkPrefix && !_.ComputeStaticLinkPrefix())
        return null;
      _ = _.sm_strComputedLinkPrefix;
      let _ = _.EncodeEventComponent(_);
      return (_ && ((_ += `_` + _), _ && (_ += `_` + _)), _);
    }
    static ComputeStaticLinkPrefix() {
      return _.sm_strDomain
        ? ((_.sm_strComputedLinkPrefix = _.ComputeLinkPrefix(
            _.sm_strDomain,
            _.sm_strController,
            _.sm_strMethod,
            _.sm_strSubmethod,
          )),
          !0)
        : (_(
            !1,
            `CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!`,
          ),
          !1);
    }
  },
  _ = _();
function _(_) {
  let _ = _?.jsondata?.read_more_link;
  if (!_) return;
  let _ = _(_).toLocaleLowerCase();
  return _ ? [_] : void 0;
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  if (!_) return ``;
  if (!_(_)) return _(_);
  let _ = _(_, _) ? _(_) : _;
  return (_.IN_CLIENT ? `steam://openurl_external/` : ``) + _;
}
function _(_, _, _) {
  let _ = _.toLowerCase().startsWith(`http`) ? _ : `http://` + _;
  return (0, _.jsx)(_, {
    url: _,
    event: _,
    children: _ || _,
  });
}
var _ = (_) => {
    let { url: _, event: _, className: _, style: _ } = _,
      _ = _(_);
    _ = _(_, _);
    let _ = _(_) ? `noopener nofollow` : void 0,
      _ =
        typeof _.children == `string` &&
        _.children.length > 0 &&
        _ &&
        !_.startsWith(`steam://`)
          ? _(_)
          : void 0;
    return (0, _.jsx)(_, {
      toolTipContent: _,
      direction: `top`,
      children: (0, _.jsx)(_, {
        className: _,
        href: _,
        rel: _,
        _: _._,
        style: _,
        children: _.children,
      }),
    });
  },
  _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~2db238c0f4.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~3044d234ba.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~01db69dc19.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~f4d9ad7041.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~1eca88ee2f.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~ceb7dcfb8b.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~456d0392b7.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~01ed01ea05.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~3126638495.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~d728c5ec5f.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~501aa82e4e.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~963ceb2486.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~6f8f401629.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~525d1d36ed.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~4bfc8cee08.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~17e4249e14.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~c94c5a350a.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~4bdb31b089.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~e559c7ccb5.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~41a1e8083b.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~888ba42df4.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~5d85cdff8f.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~1c942615a6.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~028c81a906.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~b4f7f522af.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~fe8f55d5c6.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~0110674332.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~567830f83a.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~297d834957.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~486ca1332b.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~f6d66a3b64.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~99cbd54bf9.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);

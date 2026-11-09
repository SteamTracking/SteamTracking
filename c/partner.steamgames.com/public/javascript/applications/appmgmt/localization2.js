import { _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _, _, _, _, _, _ } from "./dialogs.js";
import { _, _, _, _ } from "./storenaveventcontext.js";
import { _ } from "./react-router.js";
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
      (_.sm_strDomain = _),
        (_.sm_strController = _),
        (_.sm_strMethod = _),
        (_.sm_strSubmethod = _),
        (_.sm_strComputedLinkPrefix = null);
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
      return _ && ((_ += `_` + _), _ && (_ += `_` + _)), _;
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
(_.arabic = () => _(() => import(`./saletech_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./saletech_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./saletech_bulgarian.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./saletech_czech.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./saletech_danish.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./saletech_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./saletech_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./saletech_finnish.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./saletech_french.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./saletech_german.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./saletech_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./saletech_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./saletech_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./saletech_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./saletech_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./saletech_koreana.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./saletech_latam.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./saletech_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./saletech_norwegian.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./saletech_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./saletech_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./saletech_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./saletech_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./saletech_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./saletech_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./saletech_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./saletech_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./saletech_tchinese.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./saletech_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./saletech_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./saletech_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./saletech_vietnamese.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
export { _, _, _, _, _, _, _, _, _, _ };

import "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./storeurl.js";
import { _, _, _, _, _, _, _ } from "./main.js";
_();
var _ = {};
((_.arabic = () =>
  _(() => import(`./saletech_arabic.js`), [], import.meta.url)),
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
    _(() => import(`./saletech_vietnamese.js`), [], import.meta.url)));
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
      (_(), _());
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

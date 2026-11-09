/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import { n } from "./storeurl.js";
import {
  Cb as r,
  Cl as i,
  En as a,
  Sb as o,
  la as s,
  pn as c,
  xb as l,
} from "./main.js";
e();
var u = {};
(u.arabic = () => o(() => import(`./saletech_arabic.js`), [], import.meta.url)),
  (u.brazilian = () =>
    o(() => import(`./saletech_brazilian.js`), [], import.meta.url)),
  (u.bulgarian = () =>
    o(() => import(`./saletech_bulgarian.js`), [], import.meta.url)),
  (u.czech = () => o(() => import(`./saletech_czech.js`), [], import.meta.url)),
  (u.danish = () =>
    o(() => import(`./saletech_danish.js`), [], import.meta.url)),
  (u.dutch = () => o(() => import(`./saletech_dutch.js`), [], import.meta.url)),
  (u.english = () =>
    o(() => import(`./saletech_english.js`), [], import.meta.url)),
  (u.finnish = () =>
    o(() => import(`./saletech_finnish.js`), [], import.meta.url)),
  (u.french = () =>
    o(() => import(`./saletech_french.js`), [], import.meta.url)),
  (u.german = () =>
    o(() => import(`./saletech_german.js`), [], import.meta.url)),
  (u.greek = () => o(() => import(`./saletech_greek.js`), [], import.meta.url)),
  (u.hungarian = () =>
    o(() => import(`./saletech_hungarian.js`), [], import.meta.url)),
  (u.indonesian = () =>
    o(() => import(`./saletech_indonesian.js`), [], import.meta.url)),
  (u.italian = () =>
    o(() => import(`./saletech_italian.js`), [], import.meta.url)),
  (u.japanese = () =>
    o(() => import(`./saletech_japanese.js`), [], import.meta.url)),
  (u.koreana = () =>
    o(() => import(`./saletech_koreana.js`), [], import.meta.url)),
  (u.latam = () => o(() => import(`./saletech_latam.js`), [], import.meta.url)),
  (u.malay = () => o(() => import(`./saletech_malay.js`), [], import.meta.url)),
  (u.norwegian = () =>
    o(() => import(`./saletech_norwegian.js`), [], import.meta.url)),
  (u.polish = () =>
    o(() => import(`./saletech_polish.js`), [], import.meta.url)),
  (u.portuguese = () =>
    o(() => import(`./saletech_portuguese.js`), [], import.meta.url)),
  (u.romanian = () =>
    o(() => import(`./saletech_romanian.js`), [], import.meta.url)),
  (u.russian = () =>
    o(() => import(`./saletech_russian.js`), [], import.meta.url)),
  (u.sc_schinese = () =>
    o(() => import(`./saletech_sc_schinese.js`), [], import.meta.url)),
  (u.schinese = () =>
    o(() => import(`./saletech_schinese.js`), [], import.meta.url)),
  (u.spanish = () =>
    o(() => import(`./saletech_spanish.js`), [], import.meta.url)),
  (u.swedish = () =>
    o(() => import(`./saletech_swedish.js`), [], import.meta.url)),
  (u.tchinese = () =>
    o(() => import(`./saletech_tchinese.js`), [], import.meta.url)),
  (u.thai = () => o(() => import(`./saletech_thai.js`), [], import.meta.url)),
  (u.turkish = () =>
    o(() => import(`./saletech_turkish.js`), [], import.meta.url)),
  (u.ukrainian = () =>
    o(() => import(`./saletech_ukrainian.js`), [], import.meta.url)),
  (u.vietnamese = () =>
    o(() => import(`./saletech_vietnamese.js`), [], import.meta.url));
async function d(e) {
  if (u[e]) return await u[e]();
}
var f = r(d),
  p = t();
function m(e) {
  let { closeModal: t, strDescOverride: r } = e;
  return (0, p.jsx)(a, {
    strTitle: f.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: r || f.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: l.Localize(`#Button_OK`),
    onOK: () => {
      n(), t();
    },
  });
}
function h(e) {
  let [t, n, r] = i();
  return {
    elDialogElement: (0, p.jsx)(c, {
      active: t,
      children: (0, p.jsx)(m, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function g(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = h(n);
  return (0, p.jsxs)(p.Fragment, {
    children: [
      (0, p.jsx)(s, { onClick: i, children: t || l.Localize(`#Login_SignIn`) }),
      r,
    ],
  });
}
export { h as n, f as r, g as t };

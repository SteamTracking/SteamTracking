/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, ft as t } from "./libraries.js";
import { n } from "./storeurl.js";
import {
  Cb as r,
  Dn as i,
  Sb as a,
  mn as o,
  ua as s,
  wb as c,
  wl as l,
} from "./main.js";
e();
var u = {};
((u.arabic = () =>
  r(() => import(`./saletech_arabic.js`), [], import.meta.url)),
  (u.brazilian = () =>
    r(() => import(`./saletech_brazilian.js`), [], import.meta.url)),
  (u.bulgarian = () =>
    r(() => import(`./saletech_bulgarian.js`), [], import.meta.url)),
  (u.czech = () => r(() => import(`./saletech_czech.js`), [], import.meta.url)),
  (u.danish = () =>
    r(() => import(`./saletech_danish.js`), [], import.meta.url)),
  (u.dutch = () => r(() => import(`./saletech_dutch.js`), [], import.meta.url)),
  (u.english = () =>
    r(() => import(`./saletech_english.js`), [], import.meta.url)),
  (u.finnish = () =>
    r(() => import(`./saletech_finnish.js`), [], import.meta.url)),
  (u.french = () =>
    r(() => import(`./saletech_french.js`), [], import.meta.url)),
  (u.german = () =>
    r(() => import(`./saletech_german.js`), [], import.meta.url)),
  (u.greek = () => r(() => import(`./saletech_greek.js`), [], import.meta.url)),
  (u.hungarian = () =>
    r(() => import(`./saletech_hungarian.js`), [], import.meta.url)),
  (u.indonesian = () =>
    r(() => import(`./saletech_indonesian.js`), [], import.meta.url)),
  (u.italian = () =>
    r(() => import(`./saletech_italian.js`), [], import.meta.url)),
  (u.japanese = () =>
    r(() => import(`./saletech_japanese.js`), [], import.meta.url)),
  (u.koreana = () =>
    r(() => import(`./saletech_koreana.js`), [], import.meta.url)),
  (u.latam = () => r(() => import(`./saletech_latam.js`), [], import.meta.url)),
  (u.malay = () => r(() => import(`./saletech_malay.js`), [], import.meta.url)),
  (u.norwegian = () =>
    r(() => import(`./saletech_norwegian.js`), [], import.meta.url)),
  (u.polish = () =>
    r(() => import(`./saletech_polish.js`), [], import.meta.url)),
  (u.portuguese = () =>
    r(() => import(`./saletech_portuguese.js`), [], import.meta.url)),
  (u.romanian = () =>
    r(() => import(`./saletech_romanian.js`), [], import.meta.url)),
  (u.russian = () =>
    r(() => import(`./saletech_russian.js`), [], import.meta.url)),
  (u.sc_schinese = () =>
    r(() => import(`./saletech_sc_schinese.js`), [], import.meta.url)),
  (u.schinese = () =>
    r(() => import(`./saletech_schinese.js`), [], import.meta.url)),
  (u.spanish = () =>
    r(() => import(`./saletech_spanish.js`), [], import.meta.url)),
  (u.swedish = () =>
    r(() => import(`./saletech_swedish.js`), [], import.meta.url)),
  (u.tchinese = () =>
    r(() => import(`./saletech_tchinese.js`), [], import.meta.url)),
  (u.thai = () => r(() => import(`./saletech_thai.js`), [], import.meta.url)),
  (u.turkish = () =>
    r(() => import(`./saletech_turkish.js`), [], import.meta.url)),
  (u.ukrainian = () =>
    r(() => import(`./saletech_ukrainian.js`), [], import.meta.url)),
  (u.vietnamese = () =>
    r(() => import(`./saletech_vietnamese.js`), [], import.meta.url)));
async function d(e) {
  if (u[e]) return await u[e]();
}
var f = c(d),
  p = t();
function m(e) {
  let { closeModal: t, strDescOverride: r } = e;
  return (0, p.jsx)(i, {
    strTitle: f.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: r || f.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: a.Localize(`#Button_OK`),
    onOK: () => {
      (n(), t());
    },
  });
}
function h(e) {
  let [t, n, r] = l();
  return {
    elDialogElement: (0, p.jsx)(o, {
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
      (0, p.jsx)(s, { onClick: i, children: t || a.Localize(`#Login_SignIn`) }),
      r,
    ],
  });
}
export { h as n, f as r, g as t };

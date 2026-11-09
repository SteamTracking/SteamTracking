/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./rootlogin.js",
      "./mobx.esm.js",
      "./dialogs.js",
      "./src.js",
      "./react-router.js",
      "../../../css/applications/appmgmt/dialogs.css",
      "./logindialog.js",
      "./cookies.client.js",
      "./button.js",
      "./flex.js",
      "./formfactor.js",
      "./useclienthints.js",
      "./focuselement.js",
      "./layout.js",
      "../../../css/applications/appmgmt/layout.css",
      "./variantdefaults.js",
      "../../../css/applications/appmgmt/variantdefaults.css",
      "../../../css/applications/appmgmt/flex.css",
      "./linkbase.js",
      "./storenaveventcontext.js",
      "../../../css/applications/appmgmt/button.css",
      "./axios.js",
      "./throbber.js",
      "../../../css/applications/appmgmt/throbber.css",
      "./base64-js.js",
      "./browserapi.js",
      "../../../css/applications/appmgmt/logindialog.css",
      "./modals.js",
      "./steamml_routing.js",
      "./react-router-dom.js",
      "./formatnumber.js",
      "./getpreferredlocales.js",
      "../../../css/applications/appmgmt/steamml_routing.css",
      "./steamdeckcompatibilitydetails.js",
      "./deckverified.js",
      "./storebrowsequerycontext.js",
      "./servicetransportprovider.js",
      "./utils.js",
      "./useQuery.js",
      "./dataloader.js",
      "./axiosutils.js",
      "./historyutils.js",
      "./stringutils.js",
      "../../../css/applications/appmgmt/deckverified.css",
      "./steamdeckcompatibilitydetails_admin.js",
      "./pricing_routing.js",
      "./pricingguidelineobject.js",
      "./reactqueryroot.js",
      "./mutation.js",
      "./currencyutils.js",
      "./tabulatorutils.js",
      "./text.js",
      "../../../css/applications/appmgmt/text.css",
      "./render.js",
      "../../../css/applications/appmgmt/tabulatorutils.css",
      "./eventdevfeaturestore.js",
      "./ajaxhooks.js",
      "./eventtime.js",
      "./debugglobal.js",
      "./playerstore.js",
      "./usedataloader.client.js",
      "./steamid.js",
      "./personautils.js",
      "./steammessages_player_pb.js",
      "./appinfostore.js",
      "./appinfo.js",
      "./steammessages_community_pb.js",
      "./pricinggridcell.js",
      "./useMutation.js",
      "./simplesuccesserror.js",
      "./partnereventdialog.module.js",
      "../../../css/applications/appmgmt/partnereventdialog.css",
      "./localization3.js",
      "../../../css/applications/appmgmt/pricinggridcell.css",
      "../../../css/applications/appmgmt/shared_dialog.css",
      "./configdatadiag.js",
      "./unknownroute.js",
      "./importexport.js",
      "./storebrowsesetup.js",
      "./storeitemcache.js",
      "./storeitem.js",
      "./shared_common.module.js",
      "../../../css/applications/appmgmt/shared_common.css",
      "./fancytable.js",
      "./esm.js",
      "../../../css/applications/appmgmt/fancytable.css",
      "./profilestore.js",
      "./timeutils.js",
      "./moment-timezone.js",
      "../../../css/applications/appmgmt/profilestore.css",
      "./discountgridheaders.module.js",
      "../../../css/applications/appmgmt/discountgridheaders.css",
      "./saveprices.js",
      "../../../css/applications/appmgmt/saveprices.css",
      "../../../css/applications/appmgmt/pricing_routing.css",
      "./buildpatchnotes.js",
      "./saletags.js",
      "./steammessages_store_pb.js",
      "./steammessages_clan_pb.js",
      "./appidutils.js",
      "./csstransitionwrapper.js",
      "./localization2.js",
      "./partnereventshared.module.js",
      "../../../css/applications/appmgmt/partnereventshared.css",
      "./loadingspinner.js",
      "../../../css/applications/appmgmt/loadingspinner.css",
      "../../../css/applications/appmgmt/saletags.css",
      "./emoticonstorecontext.js",
      "./lazyrenderchildren.js",
      "./useresizeobserver.js",
      "./emoticon_php.js",
      "../../../css/applications/appmgmt/emoticonstorecontext.css",
      "./partnereventstore.js",
      "./partnereventutils.js",
      "./uploadutils.js",
      "./importexportdialog.js",
      "./eventimageurlwithfallback.js",
      "./salestoreitemutils.js",
      "../../../css/applications/appmgmt/salestoreitemutils.css",
      "../../../css/applications/appmgmt/eventimageurlwithfallback.css",
      "./src2.js",
      "./textlink.js",
      "../../../css/applications/appmgmt/textlink.css",
      "./emoticonbutton.js",
      "./bbcodes.module.js",
      "../../../css/applications/appmgmt/bbcodes.css",
      "./numberformats.js",
      "./storeitemhooks.js",
      "../../../css/applications/appmgmt/emoticonbutton.css",
      "./bbcodeeditor.js",
      "./multisourceimage.js",
      "./meetsteamclanid.js",
      "./shared_svg_gamerecordings.js",
      "../../../css/applications/appmgmt/shared_svg_gamerecordings.css",
      "./dashplayer.js",
      "./reorderablelist.module.js",
      "../../../css/applications/appmgmt/reorderablelist.css",
      "./genericimageupload.js",
      "./linkregionbox.js",
      "../../../css/applications/appmgmt/linkregionbox.css",
      "../../../css/applications/appmgmt/genericimageupload.css",
      "../../../css/applications/appmgmt/bbcodeeditor.css",
      "./steammessages_experiments_pb.js",
      "./meetsteamregistrationhooks.js",
      "./vodquery.js",
      "../../../css/applications/appmgmt/importexportdialog.css",
      "./creatorhomestore.js",
      "./storegamehover.js",
      "./eventtrackinghook.js",
      "./discussionwidget.module.js",
      "../../../css/applications/appmgmt/discussionwidget.css",
      "./crosspromotesalelayouts.js",
      "../../../css/applications/appmgmt/crosspromotesalelayouts.css",
      "./clanstore.js",
      "./languagepicker.js",
      "./editorlocalizationstore.js",
      "../../../css/applications/appmgmt/buildpatchnotes.css",
      "./promotion_routing.js",
      "./promotionoperationowner.js",
      "./marketingmessageevent.js",
      "../../../css/applications/appmgmt/marketingmessageevent.css",
      "./primarypartnercontext.js",
      "./assertThisInitialized.js",
      "./fast-deep-equal.js",
      "./localization.js",
      "./popoversurface.js",
      "../../../css/applications/appmgmt/popoversurface.css",
      "../../../css/applications/appmgmt/localization.css",
      "./dashboardutilities.js",
      "../../../css/applications/appmgmt/dashboardutilities.css",
      "../../../css/applications/appmgmt/fast-deep-equal.css",
      "./heading.js",
      "../../../css/applications/appmgmt/heading.css",
      "./imageuploaderpanel.js",
      "./slider.js",
      "../../../css/applications/appmgmt/slider.css",
      "../../../css/applications/appmgmt/imageuploaderpanel.css",
      "./partnerstats.module.js",
      "./with-selector.js",
      "../../../css/applications/appmgmt/partnerstats.css",
      "./filechangepoll.js",
      "../../../css/applications/appmgmt/filechangepoll.css",
      "./adminshared.module.js",
      "../../../css/applications/appmgmt/adminshared.css",
      "./partnereventshareddates.js",
      "./cross.js",
      "../../../css/applications/appmgmt/partnereventshareddates.css",
      "../../../css/applications/appmgmt/react-datetime2.css",
      "./themefestplanning.js",
      "../../../css/applications/appmgmt/themefestplanning.css",
      "./react-select.cjs.js",
      "./reorderablelist.js",
      "./partnervalvecontactstore.js",
      "../../../css/applications/appmgmt/partnervalvecontactstore.css",
      "./adminaccount.js",
      "./collapseablesection.js",
      "../../../css/applications/appmgmt/collapseablesection.css",
      "./userprofile.js",
      "../../../css/applications/appmgmt/userprofile.css",
      "./partnerinfostore.js",
      "./localization4.js",
      "../../../css/applications/appmgmt/localization2.css",
      "./gamerecordinglog.js",
      "./cloudlocalizedartdisplay.js",
      "../../../css/applications/appmgmt/cloudlocalizedartdisplay.css",
      "../../../css/applications/appmgmt/promotionoperationowner.css",
      "./salesrouting.js",
      "./optin_routing.js",
      "./appadminrouter.js",
      "./phpintegration.js",
      "./releasedateinfo.js",
      "../../../css/applications/appmgmt/releasedateinfo.css",
      "../../../css/applications/appmgmt/appadminrouter.css",
      "./storeadmin.js",
      "./select.js",
      "./grid.js",
      "../../../css/applications/appmgmt/grid.css",
      "./richgamedescriptioneditor.js",
      "../../../css/applications/appmgmt/richgamedescriptioneditor.css",
      "../../../css/applications/appmgmt/storeadmin.css",
      "./packageadmin.js",
      "../../../css/applications/appmgmt/packageadmin.css",
      "./connections.js",
      "../../../css/applications/appmgmt/connections.css",
      "./landing.js",
      "./recentapps.js",
      "../../../css/applications/appmgmt/recentapps.css",
      "./steammessages_partnerdeadline_pb.js",
      "./seasonpasshooks.js",
      "../../../css/applications/appmgmt/landing.css",
      "./timelinemarkereditorlanding.js",
      "./webuitransportdefaults.js",
      "./dnd.esm.js",
      "./tour.js",
      "../../../css/applications/appmgmt/tour.css",
      "../../../css/applications/appmgmt/timelinemarkereditorlanding.css",
      "./promotionreviewdashboard.js",
      "../../../css/applications/appmgmt/promotionreviewdashboard.css",
      "./reservationqueuemessagingdashboard.js",
      "../../../css/applications/appmgmt/reservationqueuemessagingdashboard.css",
      "./contenthub_routing.js",
      "../../../css/applications/appmgmt/contenthub_routing.css",
      "./recap_routing.js",
      "./deadlinelanding.js",
      "../../../css/applications/appmgmt/deadlinelanding.css",
      "./taxrequirementlanding.js",
      "../../../css/applications/appmgmt/taxrequirementlanding.css",
      "./meetsteamrouting.js",
      "../../../css/applications/appmgmt/meetsteamrouting.css",
      "./achievementseditorlanding.js",
      "../../../css/applications/appmgmt/achievementseditorlanding.css",
      "./creatorhomeadmindashboard.js",
      "../../../css/applications/appmgmt/creatorhomeadmindashboard.css",
      "./logoedtior.js",
      "./canvas.js",
      "../../../css/applications/appmgmt/logoedtior.css",
    ]),
) => i.map((i) => d[i]);

import {
  $t as e,
  A as t,
  Ot as n,
  Q as r,
  R as i,
  U as a,
  X as o,
  Y as s,
  Z as c,
  _t as l,
  c as u,
  j as d,
  kt as f,
  nt as p,
  on as m,
  rn as h,
} from "./mobx.esm.js"; /* empty css                                   */
import {
  At as g,
  F as _,
  It as v,
  L as ee,
  M as te,
  N as ne,
  P as re,
  T as ie,
  h as ae,
  r as y,
  ut as oe,
} from "./src.js";
import {
  Ga as b,
  It as se,
  La as ce,
  Qt as le,
  Ra as ue,
  S as de,
  Sa as fe,
  Ta as pe,
  _ as me,
  a as he,
  aa as x,
  ea as ge,
  h as _e,
  kt as ve,
  ln as ye,
  m as be,
  nn as xe,
  o as Se,
  oa as S,
  p as Ce,
  t as we,
  ta as Te,
  w as Ee,
  za as De,
  zn as Oe,
} from "./dialogs.js";
import { t as ke } from "./storebrowsequerycontext.js";
import { a as Ae, k as je, r as C, w as Me } from "./react-router.js";
import { t as Ne } from "./servicetransportprovider.js";
import { n as Pe } from "./reactqueryroot.js";
import { t as Fe } from "./useMutation.js";
import { i as w, r as Ie, t as Le } from "./react-router-dom.js";
import { t as Re } from "./primarypartnercontext.js";
import { i as ze, t as Be } from "./emoticonstorecontext.js";
import { n as Ve, t as He } from "./formfactor.js";
import { t as Ue } from "./variantdefaults.js";
import { t as We } from "./popoversurface.js";
import { t as T } from "./formatnumber.js";
import { r as Ge } from "./modals.js";
import { t as Ke } from "./axios.js";
import { a as qe } from "./historyutils.js";
import { n as Je, r as Ye, t as Xe } from "./browserapi.js";
import { n as Ze, t as Qe } from "./simplesuccesserror.js";
import { t as $e } from "./eventtrackinghook.js"; /* empty css                                  */
import { t as et } from "./localstorage.js";
import { t as tt } from "./configdatadiag.js";
import { t as E } from "./phpintegration.js";
import { t as nt } from "./unknownroute.js";
import { i as rt, o as it } from "./filechangepoll.js";
var D = (e, t, n) => {
  let r = t.lastIndexOf(`?`),
    i = e[r === -1 || r < t.lastIndexOf(`/`) ? t : t.slice(0, r)];
  return i
    ? typeof i == `function`
      ? i()
      : Promise.resolve(i)
    : new Promise((e, r) => {
        (typeof queueMicrotask == `function` ? queueMicrotask : setTimeout)(
          r.bind(
            null,
            Error(
              `Unknown variable dynamic import: ` +
                t +
                (t.split(`/`).length === n
                  ? ``
                  : `. Note that variables only represent file names one level deep.`),
            ),
          ),
        );
      });
};
`VALVE_PUBLIC_PATH` in window
  ? (globalThis.__webpack_public_path__ = window.VALVE_PUBLIC_PATH)
  : console.error(
      `VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet`,
    ),
  Array.from(new Set([123]))[0] !== 123 &&
    console.error(`Should not include prototypejs.`);
var O = m(v(), 1),
  at = `_7u8JcHTlx8M-`,
  ot = `KWtRH19ERaI-`,
  k = m(f(), 1),
  A = l(),
  j = (0, k.createContext)({}),
  st = (0, k.createContext)(() => {});
function ct(e) {
  let [t, n] = (0, k.useState)({});
  return (0, A.jsx)(j.Provider, {
    value: t,
    children: (0, A.jsx)(st.Provider, { value: n, children: e.children }),
  });
}
function lt() {
  return (0, k.useContext)(j);
}
var ut = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],
  dt = [`title`, `subtitle`, `body`, `description`, `note`];
function ft(e) {
  let {
      accentColor: t,
      dullColor: n,
      bodyTextColor: r,
      successColor: i,
      warningColor: a,
      errorColor: o,
      successTextColor: s,
      warningTextColor: c,
      errorTextColor: l,
      children: u,
      breakpoints: d,
      variants: f,
      popoverPresentation: p,
    } = e,
    m = { display: `contents` },
    h;
  typeof t == `string` ? (h = t) : t && M(m, `accent`, t);
  let g;
  typeof n == `string` ? (g = n) : n && M(m, `dull`, n);
  let _;
  typeof r == `string` ? (_ = r) : r && N(m, `body`, r),
    i && M(m, `success`, i),
    a && M(m, `warning`, a),
    o && M(m, `error`, o),
    s && N(m, `success`, s),
    c && N(m, `warning`, c),
    l && N(m, `error`, l);
  let v = (0, A.jsx)(Ue, {
    variants: f,
    children: (0, A.jsx)(`div`, {
      "data-accent-color": h,
      "data-dull-color": g,
      "data-body-text-color": _,
      style: m,
      children: (0, A.jsx)(`div`, {
        style: { display: `contents`, color: `var(--color-text-body-body)` },
        children: u,
      }),
    }),
  });
  return (
    p && (v = (0, A.jsx)(We, { presentation: p, children: v })),
    d ? (0, A.jsx)(He, { breakpoints: d, children: v }) : v
  );
}
function M(e, t, n) {
  if (typeof n == `string`)
    for (let r of ut) e[`--color-${t}-${r}`] = `var(--color-${n}-${r})`;
  else for (let [r, i] of Object.entries(n)) e[`--color-${t}-${r}`] = i;
}
function N(e, t, n) {
  if (typeof n == `string`)
    for (let r of dt) e[`--color-text-${t}-${r}`] = `var(--color-${n}-${r})`;
  else for (let [r, i] of Object.entries(n)) e[`--color-text-${t}-${r}`] = i;
}
var pt = k.memo(function (e) {
  let {
      defaultTextSize: t,
      accentColor: n = `blue`,
      dullColor: r = `greyneutral`,
      successColor: i = `green`,
      warningColor: a = `yellow`,
      errorColor: o = `red`,
      bodyTextColor: s = `text-light`,
      successTextColor: c = `text-green`,
      warningTextColor: l = `text-yellow`,
      errorTextColor: u = `text-red`,
      breakpoints: d,
      variants: f,
      popoverPresentation: p,
      children: m,
      zoo: h,
    } = e,
    g = k.useRef(null);
  mt(g, n, r, s);
  let _;
  return (
    t &&
      (_ = {
        "--default-font-size": `var(--text-size-${t})`,
        "--default-line-height": `var(--line-height-${t})`,
        "--default-letter-spacing": `var(--letter-spacing-${t})`,
      }),
    (0, A.jsx)(ct, {
      children: (0, A.jsx)(He, {
        breakpoints: d,
        children: (0, A.jsx)(ht, {
          children: (0, A.jsx)(`div`, {
            ref: g,
            className: (0, O.default)(ot, `noOpinionatedGlobalStyles`),
            style: _,
            children: (0, A.jsxs)(ft, {
              accentColor: n,
              dullColor: r,
              successColor: i,
              warningColor: a,
              errorColor: o,
              bodyTextColor: s,
              successTextColor: c,
              warningTextColor: l,
              errorTextColor: u,
              variants: f,
              popoverPresentation: p,
              children: [m, !1],
            }),
          }),
        }),
      }),
    })
  );
});
function mt(e, t, n, r) {
  k.useLayoutEffect(() => {
    let i = e.current?.ownerDocument.documentElement;
    if (!i) return;
    let a = [],
      o = (e, t) => {
        typeof t == `string` &&
          (a.push([e, i.getAttribute(e)]), i.setAttribute(e, t));
      };
    return (
      o(`data-accent-color`, t),
      o(`data-dull-color`, n),
      o(`data-body-text-color`, r),
      () => {
        for (let [e, t] of a)
          t === null ? i.removeAttribute(e) : i.setAttribute(e, t);
      }
    );
  }, [e, t, n, r]);
}
function ht(e) {
  let { children: t } = e,
    { formFactorOverride: n } = lt();
  return (0, A.jsx)(Ve, { formFactor: n, children: t });
}
var gt = `zFLaTiNrHiA-`,
  _t = `AqiNZa8VC60-`,
  vt = `_8tMz3xKeNAs-`,
  yt = `tHNWhS0YeUA-`,
  bt = `ifygCy-3uNI-`,
  xt = `_8oIJtH-J0JA-`,
  St = `Kignul3K9OE-`,
  Ct = `iMDvo-zOOqs-`,
  wt = `_0mS7Tngyoow-`,
  Tt = `eSqLQD-aPaE-`,
  Et = `e86kqPhqfq4-`,
  Dt = `vCYbRpq2iJQ-`,
  Ot = (e) =>
    (0, A.jsxs)(A.Fragment, {
      children: [
        (0, A.jsx)(kt, {}),
        (0, A.jsx)(`div`, {
          className: `agenda_title`,
          children: S(`#SteamworksEvents_BuildingCommunity_Speakers`),
        }),
        (0, A.jsx)(At, {}),
      ],
    }),
  P = (e) =>
    (0, A.jsxs)(`div`, {
      className: gt,
      children: [
        (0, A.jsx)(`div`, {
          className: vt,
          children: (0, A.jsx)(`img`, {
            className: yt,
            src: p.COMMUNITY_CDN_ASSET_URL + e.screenshot,
          }),
        }),
        (0, A.jsxs)(`div`, {
          className: bt,
          children: [
            (0, A.jsxs)(`div`, {
              className: xt,
              children: [
                (0, A.jsx)(`div`, {
                  className: void 0,
                  children: e.strSpeakers,
                }),
                (0, A.jsx)(`div`, { className: void 0, children: e.strTime }),
                (0, A.jsx)(`div`, { className: St, children: e.strTitle }),
              ],
            }),
            (0, A.jsx)(`div`, { className: Ct, children: e.strDesc }),
          ],
        }),
      ],
    }),
  kt = (e) =>
    (0, A.jsx)(`div`, {
      className: void 0,
      children: (0, A.jsxs)(ze, {
        hideArrows: !1,
        visibleElements: 1,
        useTestScrollbar: !1,
        bLazyRenderChildren: !1,
        disableEdgeWrap: !1,
        className: t(_t),
        children: [
          (0, A.jsx)(
            P,
            {
              strDesc: S(`#SteamworksEvents_BuildingCommunity_Session1_Desc`),
              screenshot: `steamworksevents/screenshot_gautam.png`,
              strTime: S(`#SteamworksEvents_BuildingCommunity_Session1_Time`),
              strTitle: S(`#SteamworksEvents_BuildingCommunity_Session1_Title`),
              strSpeakers: S(
                `#SteamworksEvents_BuildingCommunity_Session1_Speakers`,
              ),
            },
            1,
          ),
          (0, A.jsx)(
            P,
            {
              strDesc: S(`#SteamworksEvents_BuildingCommunity_Session2_Desc`),
              screenshot: `steamworksevents/screenshot_alden_and_adil.png`,
              strTime: S(`#SteamworksEvents_BuildingCommunity_Session2_Time`),
              strTitle: S(`#SteamworksEvents_BuildingCommunity_Session2_Title`),
              strSpeakers: S(
                `#SteamworksEvents_BuildingCommunity_Session2_Speakers`,
              ),
            },
            2,
          ),
          (0, A.jsx)(
            P,
            {
              strDesc: S(`#SteamworksEvents_BuildingCommunity_Session3_Desc`),
              screenshot: `steamworksevents/screenshot_jenny.png`,
              strTime: S(`#SteamworksEvents_BuildingCommunity_Session3_Time`),
              strTitle: S(`#SteamworksEvents_BuildingCommunity_Session3_Title`),
              strSpeakers: S(
                `#SteamworksEvents_BuildingCommunity_Session3_Speakers`,
              ),
            },
            3,
          ),
          (0, A.jsx)(
            P,
            {
              strDesc: S(`#SteamworksEvents_BuildingCommunity_Session4_Desc`),
              screenshot: `steamworksevents/screenshot_joe.png`,
              strTime: S(`#SteamworksEvents_BuildingCommunity_Session4_Time`),
              strTitle: S(`#SteamworksEvents_BuildingCommunity_Session4_Title`),
              strSpeakers: S(
                `#SteamworksEvents_BuildingCommunity_Session4_Speakers`,
              ),
            },
            4,
          ),
        ],
      }),
    }),
  F = (e) =>
    (0, A.jsxs)(`div`, {
      className: Tt,
      children: [
        (0, A.jsx)(`img`, {
          title: e.strTitle,
          src: p.COMMUNITY_CDN_ASSET_URL + e.imgHeadshot,
        }),
        (0, A.jsxs)(`div`, {
          className: Et,
          children: [
            (0, A.jsx)(`div`, { className: Dt, children: e.strTitle }),
            e.strBio,
          ],
        }),
      ],
    }),
  At = (e) =>
    (0, A.jsxs)(`div`, {
      className: wt,
      children: [
        (0, A.jsx)(F, {
          imgHeadshot: `steamworksevents/gautam_headshot.png`,
          strTitle: S(`#SteamworksEvents_BuildingCommunity_GautamTitle`),
          strBio: S(`#SteamworksEvents_BuildingCommunity_Gautam`),
        }),
        (0, A.jsx)(F, {
          imgHeadshot: `steamworksevents/alden_headshot.png`,
          strTitle: S(`#SteamworksEvents_BuildingCommunity_AldenTitle`),
          strBio: S(`#SteamworksEvents_BuildingCommunity_Alden`),
        }),
        (0, A.jsx)(F, {
          imgHeadshot: `steamworksevents/adil_headshot.png`,
          strTitle: S(`#SteamworksEvents_BuildingCommunity_AdilTitle`),
          strBio: S(`#SteamworksEvents_BuildingCommunity_Adil`),
        }),
        (0, A.jsx)(F, {
          imgHeadshot: `steamworksevents/jenny_headshot.png`,
          strTitle: S(`#SteamworksEvents_BuildingCommunity_JennyTitle`),
          strBio: S(`#SteamworksEvents_BuildingCommunity_Jenny`),
        }),
        (0, A.jsx)(F, {
          imgHeadshot: `steamworksevents/joe_headshot.png`,
          strTitle: S(`#SteamworksEvents_BuildingCommunity_JoeTitle`),
          strBio: S(`#SteamworksEvents_BuildingCommunity_Joe`),
        }),
      ],
    }),
  jt = h({
    Arrow: () => Vt,
    BasicContextMenuContainer: () => L,
    BasicContextMenuHeader: () => Nt,
    BasicContextMenuHeaderShrinkableSpacing: () => Pt,
    BasicContextMenuModal: () => I,
    Capitalized: () => It,
    ContextMenuSeparator: () => zt,
    Destructive: () => W,
    Emphasis: () => K,
    Focused: () => Ft,
    Label: () => Bt,
    MenuSectionHeader: () => Lt,
    Positive: () => G,
    Selected: () => J,
    SubMenu: () => Y,
    UpperCase: () => Rt,
    active: () => q,
    contextMenu: () => z,
    contextMenuContents: () => B,
    contextMenuFade: () => H,
    contextMenuItem: () => U,
    default: () => Ht,
    "duration-app-launch": () => Mt,
    hasSubMenu: () => V,
    slideInAnimation: () => R,
  }),
  Mt = `800ms`,
  I = `_8DByIe8Ea8E-`,
  Nt = `q3pFgCOI2yI-`,
  Pt = `QHsAQy5yu8A-`,
  L = `MTKb4J7AMgY-`,
  R = `poBGSvpOAGo-`,
  z = `tWKaLgB0owM-`,
  B = `OFr-eEHnljA-`,
  V = `AjGNGR6Osiw-`,
  H = `TRlECVEmgU0-`,
  U = `O19fZ13-A5w-`,
  W = `POMfRmARNdU-`,
  G = `MgaegAYKrxw-`,
  K = `XIMPVrkcMWM-`,
  q = `KeQUqD1Sdrg-`,
  J = `o-m6qQ4jCNo-`,
  Ft = `I9gEZvVo2Eg-`,
  It = `DcYAZDy2pgM-`,
  Lt = `lTpANgOhAS0-`,
  Rt = `_6v6Y4gGN8Zc-`,
  Y = `jz-34Yr9NBQ-`,
  zt = `kn3J3BWkqGc-`,
  Bt = `u3qomCoD6qk-`,
  Vt = `DhXuCxvuF58-`,
  Ht = {
    "duration-app-launch": `800ms`,
    BasicContextMenuModal: I,
    BasicContextMenuHeader: Nt,
    BasicContextMenuHeaderShrinkableSpacing: Pt,
    BasicContextMenuContainer: L,
    slideInAnimation: R,
    contextMenu: z,
    contextMenuContents: B,
    hasSubMenu: V,
    contextMenuFade: H,
    contextMenuItem: U,
    Destructive: W,
    Positive: G,
    Emphasis: K,
    active: q,
    Selected: J,
    Focused: Ft,
    Capitalized: It,
    MenuSectionHeader: Lt,
    UpperCase: Rt,
    SubMenu: Y,
    ContextMenuSeparator: zt,
    Label: Bt,
    Arrow: Vt,
  };
function Ut(e) {
  let { managerOverride: t } = e,
    n = de(),
    r = t ?? n,
    i = _();
  return (
    re(r.OnMenusChanged, i),
    (0, A.jsx)(Ge, {
      active: !!r.ActiveMenu,
      children: (0, A.jsx)(Wt, { ActiveMenu: r.ActiveMenu }),
    })
  );
}
function Wt(e) {
  let { ActiveMenu: n } = e,
    r = k.useCallback(() => {
      n?.OnCancel();
    }, [n]);
  k.useEffect(() => () => n?.Hide(), [n]);
  let i = [],
    a = null;
  Me(() => {
    for (let e = n; e && e.visible; e = e.submenu)
      i.push((0, A.jsx)(Gt, { instance: e }, e.key)), (a = e.label);
  });
  let o = k.useCallback(
    (e) => {
      e.currentTarget == e.target && r();
    },
    [r],
  );
  return (0, A.jsx)(be, {
    padding: `none`,
    children: (0, A.jsxs)(`div`, {
      onClick: o,
      className: t(`BasicUIContextMenu`, I),
      children: [
        a &&
          (0, A.jsx)(A.Fragment, {
            children: (0, A.jsx)(`div`, {
              className: `q3pFgCOI2yI-`,
              children: a,
            }),
          }),
        (0, A.jsx)(ue, {
          className: L,
          onCancelButton: r,
          onClick: o,
          children: i,
        }),
      ],
    }),
  });
}
function Gt(e) {
  let { instance: t } = e,
    n = i(),
    r = k.useCallback(() => {
      n && te.PlayNavSound(ne.FailedNav);
    }, [n]),
    a = k.useMemo(
      () => ({
        instance: t,
        styles: jt,
        presentation: 1,
        callbacks: { onDisabledItemSelected: r },
      }),
      [t, r],
    );
  return (0, A.jsx)(y, {
    children: (0, A.jsx)(Oe.Provider, { value: a, children: t.ReactElement }),
  });
}
function Kt() {
  return k.useMemo(() => qt(), []);
}
function qt() {
  return function (e) {
    let {
        refNavTree: t,
        className: n,
        active: r,
        children: i,
        modalKey: a,
      } = e,
      o = k.useRef(void 0);
    ae(o, r, !0);
    let s = g(o, t);
    return (0, A.jsx)(ie, {
      className: n,
      navTreeRef: s,
      modal: !0,
      enabled: r,
      navID: `ModalDialogOverlay_${a}`,
      children: i,
    });
  };
}
function Jt(e) {
  let {
      className: n,
      onEscKeypress: r,
      padding: i = `standard`,
      bGamepadUIScrollWithin: a,
      children: o,
    } = e,
    s = t(Ee, i == `standard` && `S9g96mcfmi4-`, a && `_3voolpCtr6w-`, n);
  return (0, A.jsx)(ue, {
    className: s,
    onCancelButton: r,
    focusableIfEmpty: !0,
    children: (0, A.jsx)(De, { children: (0, A.jsx)(y, { children: o }) }),
  });
}
function Yt(e) {
  let t = k.useMemo(() => ({ ModalPosition: Jt }), []);
  return (0, A.jsx)(_e.Provider, { value: t, children: e.children });
}
function Xt(e) {
  let t = Kt(),
    n = k.useMemo(() => ({ DropDownMenu: Se, Content: we }), []);
  return (0, A.jsx)(ye.Provider, {
    value: n,
    children: (0, A.jsx)(Yt, {
      children: (0, A.jsx)(me, {
        ...e,
        bUseDialogElement: !1,
        DialogWrapper: t,
        ContextMenuComponent: Ut,
      }),
    }),
  });
}
function Zt(e) {
  let t = i(),
    n = { bRenderOverlayAtRoot: !0, bUsePopups: !1, ...e };
  return t ? (0, A.jsx)(Xt, { ...n }) : (0, A.jsx)(me, { ...n });
}
var Qt = m(Ke()),
  $t = `NRLdpp5SW8Q-`,
  en = `XWkt0fWtpXM-`,
  tn = `_05insej4ZsY-`,
  nn = `BfhwqcpG0-8-`;
function rn() {
  let [e] = (0, k.useState)(() => r(`rgPackageInfo`, `application_config`));
  return e;
}
async function an(e, t) {
  let n = new FormData();
  n.append(`sessionid`, s()), n.append(`keys`, JSON.stringify(t));
  let r = `${p.PARTNER_BASE_URL}apps/requestkeys/${e}`,
    i = await Qt.default.post(r, n);
  return i?.data?.message
    ? i.data
    : { success: !1, message: S(`#Error_Generic`) };
}
function on(e, t, n, r, i) {
  return Fe({
    mutationFn: () =>
      an(e, [
        {
          packageid: `` + t,
          game_code: 4602,
          territory: ``,
          key_count: n,
          notes: r,
          reason: 7,
        },
      ]),
    onSuccess: (e) => i(e.success, e.message),
    onError: () => i(!1, S(`#Error_Generic`)),
  });
}
function sn(e) {
  let n = (0, k.useMemo)(() => Number.parseInt(e.appId), [e.appId]),
    r = rn(),
    [i, a] = (0, k.useState)(1),
    [o, s] = (0, k.useState)(``);
  return (0, A.jsxs)(`div`, {
    className: $t,
    children: [
      (0, A.jsx)(`div`, {
        className: `title2`,
        children: S(`#KeyWizard_Title`),
      }),
      (0, A.jsx)(`div`, {
        className: `titleHelper`,
        children: (0, A.jsx)(`a`, {
          href: `${p.PARTNER_BASE_URL}doc/features/playtest#4`,
          target: `_blank`,
          children: S(`#ViewDocumentation`),
        }),
      }),
      (0, A.jsx)(`br`, { style: { clear: `left` } }),
      (0, A.jsxs)(`div`, {
        className: `instructions`,
        children: [
          (0, A.jsx)(`p`, { children: S(`#KeyWizard_Playtest_Desc`) }),
          (0, A.jsx)(`p`, { children: S(`#KeyWizard_Request_notes`) }),
          (0, A.jsx)(`div`, {
            className: tn,
            children: (0, A.jsx)(se, {
              type: `number`,
              label: S(`#KeyWizard_NumKeys`, r.name),
              min: 1,
              max: 1e8,
              value: i,
              onChange: (e) => a(Number.parseInt(e.currentTarget.value)),
            }),
          }),
          (0, A.jsx)(le, { children: S(`#KeyWizard_KeyUsage`) }),
          (0, A.jsx)(`textarea`, {
            className: t(`DialogTextInputBase`, nn),
            value: o || ``,
            onChange: (e) => s(e?.currentTarget?.value || ``),
          }),
          (0, A.jsx)(`div`, {
            className: en,
            children: (0, A.jsx)(xe, {
              onClick: (e) =>
                Ce(
                  (0, A.jsx)(cn, {
                    unAppID: n,
                    oPackage: r,
                    nKeys: i,
                    strNotes: o,
                  }),
                  oe(e),
                ),
              disabled: i <= 0,
              children: S(`#Button_Submit`),
            }),
          }),
        ],
      }),
    ],
  });
}
function cn(e) {
  let { unAppID: t, oPackage: n, nKeys: r, strNotes: i, closeModal: a } = e,
    o = Ze(),
    s = on(t, n.packageid, r, i, (e, t) => {
      e
        ? (o.fnSetSuccess(!0), o.fnSetStrSuccess(t))
        : (o.fnSetError(!0), o.fnSetStrError(t));
    });
  return (
    (0, k.useEffect)(() => {
      o.fnSetLoading(!0), s.mutate();
    }, []),
    (0, A.jsx)(Qe, {
      state: o,
      strDialogTitle: S(`#KeyWizard_Dialog_Title`),
      closeModal: a,
    })
  );
}
function ln() {
  let [e] = (0, k.useState)(() =>
    c(`year_in_review_proress`, `application_config`),
  );
  return e;
}
function un(e) {
  let t = ln(),
    [n] = qe(`year`, new Date().getFullYear());
  return (
    new Date().getMonth() + 1,
    (0, A.jsx)(y, {
      children: (0, A.jsxs)(`div`, {
        className: rt,
        children: [
          (0, A.jsxs)(`h1`, {
            children: [`Steam Replay Progress Monitoring: `, n],
          }),
          (0, A.jsx)(`hr`, {}),
          (0, A.jsxs)(`p`, {
            children: [
              `We are running batches in `,
              T(t.queue_batch_size),
              ` accounts at a time. Active phase 2 queue size is `,
              T(t.monthly_active_queue_size),
            ],
          }),
          t.progress.map((e) =>
            (0, A.jsx)(
              dn,
              { oMonth: e, nActiveQueue: t.monthly_active_queue_size },
              e.month,
            ),
          ),
        ],
      }),
    })
  );
}
function dn(e) {
  let { oMonth: n, nActiveQueue: r } = e;
  return (0, A.jsxs)(`div`, {
    className: t(it, void 0),
    children: [
      (0, A.jsxs)(`h3`, {
        children: [
          `Month: `,
          [
            `January`,
            `February`,
            `March`,
            `April`,
            `May`,
            `June`,
            `July`,
            `August`,
            `September`,
            `October`,
            `November`,
            `December`,
          ][n.month - 1],
        ],
      }),
      (0, A.jsxs)(`div`, {
        children: [
          (0, A.jsx)(`b`, { children: `Phase 1:` }),
          ` Pre-Fetching Accounts to Process `,
          !n.rt_start_processing &&
            (0, A.jsx)(`span`, { children: `- In Progress` }),
        ],
      }),
      (0, A.jsxs)(`div`, {
        children: [
          `Started: `,
          (0, A.jsx)(X, { rtTime: n.rt_start_finding_accounts }),
        ],
      }),
      (0, A.jsxs)(`div`, {
        children: [`Account prefetched `, T(n.prefetched_accounts_count)],
      }),
      n.rt_end_finding_accounts
        ? (0, A.jsxs)(`div`, {
            children: [
              `Completed `,
              (0, A.jsx)(X, { rtTime: n.rt_end_finding_accounts }),
              ` prefetched upto accountid `,
              T(n.largest_account_id_prefetched),
            ],
          })
        : (0, A.jsxs)(`div`, {
            children: [
              `Pre-fetched upto Account ID `,
              T(n.largest_account_id_prefetched),
            ],
          }),
      !!n.rt_start_processing &&
        (0, A.jsxs)(`div`, {
          children: [
            (0, A.jsxs)(`div`, {
              children: [
                (0, A.jsx)(`b`, { children: `Phase 2:` }),
                ` Processing Monthly Playtime Summary `,
                !n.rt_end_processing &&
                  (0, A.jsx)(`span`, { children: `- In Progress` }),
              ],
            }),
            (0, A.jsxs)(`div`, {
              children: [
                `Started:`,
                (0, A.jsx)(X, { rtTime: n.rt_start_processing }),
              ],
            }),
            n.rt_end_processing
              ? (0, A.jsxs)(`div`, {
                  children: [
                    `Completed `,
                    (0, A.jsx)(X, { rtTime: n.rt_end_processing }),
                    `\xA0 queue'ed upto account ID `,
                    T(n.largest_account_queued),
                    `total accounts queued `,
                    T(n.queued_accounts),
                  ],
                })
              : (0, A.jsxs)(`div`, {
                  children: [
                    `Queue'ed upto Account ID `,
                    T(n.largest_account_queued),
                    `total accounts queued `,
                    T(n.queued_accounts),
                  ],
                }),
          ],
        }),
      !!(
        (n.rt_end_processing && r == 0) ||
        n.rt_platform_summary ||
        n.rt_queue_empty
      ) &&
        (0, A.jsxs)(`div`, {
          children: [
            (0, A.jsxs)(`div`, {
              children: [
                (0, A.jsx)(`b`, { children: `Phase 3:` }),
                ` Global Playtime Distribution`,
              ],
            }),
            (0, A.jsxs)(`div`, {
              children: [
                `Started: `,
                (0, A.jsx)(X, { rtTime: n.rt_queue_empty }),
              ],
            }),
            n.rt_platform_summary
              ? (0, A.jsxs)(`div`, {
                  children: [
                    `Completed at `,
                    (0, A.jsx)(X, { rtTime: n.rt_platform_summary }),
                  ],
                })
              : (0, A.jsx)(`div`, { children: `In progress started at` }),
          ],
        }),
      !!n.rt_community_stats &&
        (0, A.jsxs)(`div`, {
          children: [
            (0, A.jsx)(`b`, { children: `Phase Idependant:` }),
            ` Community Stats calculation Completed at `,
            (0, A.jsx)(X, { rtTime: n.rt_community_stats }),
          ],
        }),
    ],
  });
}
function X(e) {
  let { rtTime: t } = e;
  return (0, A.jsxs)(`span`, { children: [fe(t), ` as `, pe(t)] });
}
var fn = k.lazy(() =>
    b(
      () => import(`./rootlogin.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27,
      ]),
      import.meta.url,
    ),
  ),
  pn = k.lazy(() =>
    b(
      () => import(`./steamml_routing.js`),
      __vite__mapDeps([28, 1, 4, 29, 30, 31, 21, 32]),
      import.meta.url,
    ),
  );
k.lazy(() =>
  b(
    () => import(`./steamdeckcompatibilitydetails.js`),
    __vite__mapDeps([
      33, 34, 1, 3, 2, 4, 5, 35, 36, 37, 38, 39, 27, 21, 40, 41, 22, 23, 42, 43,
    ]),
    import.meta.url,
  ),
);
var Z = k.lazy(() =>
    b(
      () => import(`./steamdeckcompatibilitydetails_admin.js`),
      __vite__mapDeps([
        44, 1, 34, 3, 2, 4, 5, 35, 36, 37, 38, 39, 27, 21, 40, 41, 22, 23, 42,
        43,
      ]),
      import.meta.url,
    ),
  ),
  mn = k.lazy(() =>
    b(
      () => import(`./pricing_routing.js`),
      __vite__mapDeps([
        45, 1, 3, 2, 4, 5, 46, 38, 37, 47, 48, 49, 29, 50, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 51, 52, 53, 21, 40, 42, 54, 27, 41, 22, 23, 55, 56, 57,
        58, 59, 60, 36, 39, 61, 62, 63, 64, 65, 66, 67, 35, 68, 8, 18, 19, 20,
        69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 25, 7, 24, 79, 80, 81, 82, 83,
        84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
      ]),
      import.meta.url,
    ),
  ),
  hn = k.lazy(() =>
    b(
      () => import(`./buildpatchnotes.js`),
      __vite__mapDeps([
        95, 1, 3, 60, 37, 38, 2, 4, 5, 35, 36, 39, 96, 19, 47, 48, 68, 97, 7,
        80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43, 56, 49, 101,
        102, 103, 61, 62, 104, 105, 106, 107, 108, 109, 110, 111, 112, 65, 58,
        113, 114, 66, 57, 115, 116, 117, 118, 119, 30, 120, 121, 12, 13, 10, 11,
        14, 18, 51, 52, 122, 55, 88, 123, 124, 125, 24, 126, 127, 79, 25, 128,
        129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 137, 138, 139, 140,
        141, 70, 71, 69, 142, 77, 143, 144, 145, 74, 146, 147, 148, 149, 150,
        151, 152, 153, 154, 155, 156,
      ]),
      import.meta.url,
    ),
  ),
  gn = k.lazy(() =>
    b(
      () => import(`./promotion_routing.js`),
      __vite__mapDeps([
        157, 158, 1, 3, 60, 37, 38, 114, 66, 2, 4, 5, 35, 36, 39, 96, 19, 47,
        48, 68, 97, 7, 80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43,
        56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58,
        70, 71, 126, 146, 25, 24, 147, 127, 79, 153, 160, 116, 113, 119, 29,
        161, 107, 108, 109, 110, 111, 65, 162, 163, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170, 8, 18,
        20, 6, 26, 112, 30, 171, 172, 121, 122, 50, 46, 54, 173, 174, 175, 155,
        137, 138, 139, 140, 81, 82, 176, 177, 178, 179, 115, 88, 123, 124, 125,
        128, 129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 141, 69, 142,
        77, 143, 144, 145, 74, 75, 76, 180, 181, 182, 183, 78, 87, 184, 185,
        186, 187, 83, 85, 154, 188, 189, 190, 191, 192, 193, 194, 86, 89, 195,
        196, 197, 198, 199, 90, 91, 200, 201, 202, 203, 204, 205,
      ]),
      import.meta.url,
    ),
  ),
  _n = k.lazy(() =>
    b(
      () => import(`./salesrouting.js`),
      __vite__mapDeps([
        206, 1, 158, 3, 60, 37, 38, 114, 66, 2, 4, 5, 35, 36, 39, 96, 19, 47,
        48, 68, 97, 7, 80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43,
        56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58,
        70, 71, 126, 146, 25, 24, 147, 127, 79, 153, 160, 116, 113, 119, 29,
        161, 107, 108, 109, 110, 111, 65, 162, 163, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170, 8, 18,
        20, 6, 26, 112, 30, 171, 172, 121, 122, 50, 46, 54, 173, 174, 175, 155,
        137, 138, 139, 140, 81, 82, 176, 177, 178, 179, 115, 88, 123, 124, 125,
        128, 129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 141, 69, 142,
        77, 143, 144, 145, 74, 75, 76, 180, 181, 182, 183, 78, 87, 184, 185,
        186, 187, 83, 85, 154, 188, 189, 190, 191, 192, 193, 194, 86, 89, 195,
        196, 197, 198, 199, 90, 91, 200, 201, 202, 203, 204, 205,
      ]),
      import.meta.url,
    ),
  ),
  vn = k.lazy(() =>
    b(
      () => import(`./optin_routing.js`),
      __vite__mapDeps([
        207, 158, 1, 3, 60, 37, 38, 114, 66, 2, 4, 5, 35, 36, 39, 96, 19, 47,
        48, 68, 97, 7, 80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43,
        56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58,
        70, 71, 126, 146, 25, 24, 147, 127, 79, 153, 160, 116, 113, 119, 29,
        161, 107, 108, 109, 110, 111, 65, 162, 163, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170, 8, 18,
        20, 6, 26, 112, 30, 171, 172, 121, 122, 50, 46, 54, 173, 174, 175, 155,
        137, 138, 139, 140, 81, 82, 176, 177, 178, 179, 115, 88, 123, 124, 125,
        128, 129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 141, 69, 142,
        77, 143, 144, 145, 74, 75, 76, 180, 181, 182, 183, 78, 87, 184, 185,
        186, 187, 83, 85, 154, 188, 189, 190, 191, 192, 193, 194, 86, 89, 195,
        196, 197, 198, 199, 90, 91, 200, 201, 202, 203, 204, 205,
      ]),
      import.meta.url,
    ),
  ),
  Q = k.lazy(() =>
    b(
      () => import(`./appadminrouter.js`),
      __vite__mapDeps([
        208, 1, 3, 114, 66, 2, 4, 5, 35, 36, 37, 38, 39, 47, 48, 97, 99, 161,
        30, 31, 173, 174, 13, 10, 11, 14, 53, 175, 27, 40, 21, 22, 23, 155, 102,
        103, 137, 138, 139, 140, 81, 82, 176, 177, 80, 7, 178, 25, 24, 179, 127,
        79, 58, 209, 210, 68, 87, 88, 55, 56, 57, 184, 185, 186, 187, 211, 78,
        212,
      ]),
      import.meta.url,
    ),
  ),
  $ = k.lazy(() =>
    b(
      () => import(`./storeadmin.js`),
      __vite__mapDeps([
        213, 1, 3, 60, 37, 38, 2, 4, 5, 35, 36, 39, 96, 19, 47, 48, 68, 97, 7,
        80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43, 56, 49, 101,
        102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58, 70, 71, 126,
        146, 25, 24, 147, 127, 79, 153, 160, 46, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 8, 18, 20, 51, 52, 164, 165, 166, 53, 167, 214, 120, 171, 172, 168,
        169, 215, 216, 50, 54, 155, 69, 67, 59, 63, 64, 65, 66, 72, 73, 74, 209,
        76, 182, 183, 210, 173, 174, 175, 137, 114, 138, 139, 140, 81, 82, 176,
        87, 88, 184, 185, 186, 187, 211, 78, 154, 190, 191, 135, 136, 194, 195,
        196, 197, 198, 199, 217, 109, 124, 125, 203, 204, 218, 219,
      ]),
      import.meta.url,
    ),
  ),
  yn = k.lazy(() =>
    b(
      () => import(`./packageadmin.js`),
      __vite__mapDeps([
        220, 1, 3, 60, 37, 38, 2, 4, 5, 46, 47, 48, 49, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 8, 18, 19, 20, 51, 52, 171, 172, 121, 122, 50, 53, 21, 40,
        42, 54, 27, 22, 23, 67, 35, 36, 39, 68, 69, 70, 71, 59, 61, 62, 63, 64,
        65, 66, 72, 73, 74, 209, 76, 83, 84, 85, 86, 56, 55, 57, 58, 79, 80, 7,
        25, 24, 87, 88, 89, 92, 93, 200, 201, 221,
      ]),
      import.meta.url,
    ),
  ),
  bn = k.lazy(() =>
    b(
      () => import(`./connections.js`),
      __vite__mapDeps([222, 1, 3, 2, 4, 5, 31, 21, 40, 22, 23, 223]),
      import.meta.url,
    ),
  ),
  xn = k.lazy(() =>
    b(
      () => import(`./landing.js`),
      __vite__mapDeps([
        224, 1, 3, 158, 60, 37, 38, 114, 66, 2, 4, 5, 35, 36, 39, 96, 19, 47,
        48, 68, 97, 7, 80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43,
        56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58,
        70, 71, 126, 146, 25, 24, 147, 127, 79, 153, 160, 116, 113, 119, 29,
        161, 107, 108, 109, 110, 111, 65, 162, 163, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170, 8, 18,
        20, 6, 26, 112, 30, 171, 172, 121, 122, 50, 46, 54, 173, 174, 175, 155,
        137, 138, 139, 140, 81, 82, 176, 177, 178, 179, 115, 88, 123, 124, 125,
        128, 129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 141, 69, 142,
        77, 143, 144, 145, 74, 75, 76, 180, 181, 182, 183, 78, 87, 184, 185,
        186, 187, 83, 85, 154, 188, 189, 190, 191, 192, 193, 194, 86, 89, 195,
        196, 197, 198, 199, 90, 91, 200, 201, 202, 203, 204, 205, 225, 226, 227,
        228, 229,
      ]),
      import.meta.url,
    ),
  ),
  Sn = k.lazy(() =>
    b(
      () => import(`./timelinemarkereditorlanding.js`),
      __vite__mapDeps([
        230, 1, 3, 2, 4, 5, 231, 65, 62, 27, 21, 56, 40, 41, 102, 103, 70, 71,
        132, 133, 134, 61, 126, 31, 25, 7, 24, 69, 22, 23, 64, 66, 182, 183,
        232, 178, 202, 233, 36, 234, 235,
      ]),
      import.meta.url,
    ),
  ),
  Cn = k.lazy(() =>
    b(
      () => import(`./promotionreviewdashboard.js`),
      __vite__mapDeps([
        236, 1, 158, 3, 60, 37, 38, 114, 66, 2, 4, 5, 35, 36, 39, 96, 19, 47,
        48, 68, 97, 7, 80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43,
        56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58,
        70, 71, 126, 146, 25, 24, 147, 127, 79, 153, 160, 116, 113, 119, 29,
        161, 107, 108, 109, 110, 111, 65, 162, 163, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170, 8, 18,
        20, 6, 26, 112, 30, 171, 172, 121, 122, 50, 46, 54, 173, 174, 175, 155,
        137, 138, 139, 140, 81, 82, 176, 177, 178, 179, 115, 88, 123, 124, 125,
        128, 129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 141, 69, 142,
        77, 143, 144, 145, 74, 75, 76, 180, 181, 182, 183, 78, 87, 184, 185,
        186, 187, 83, 85, 154, 188, 189, 190, 191, 192, 193, 194, 86, 89, 195,
        196, 197, 198, 199, 90, 91, 200, 201, 202, 203, 204, 205, 237,
      ]),
      import.meta.url,
    ),
  ),
  wn = k.lazy(() =>
    b(
      () => import(`./reservationqueuemessagingdashboard.js`),
      __vite__mapDeps([
        238, 1, 3, 2, 4, 5, 97, 30, 31, 27, 40, 21, 101, 19, 55, 56, 57, 58,
        102, 103, 25, 7, 24, 69, 22, 23, 70, 71, 182, 183, 184, 88, 185, 186,
        187, 190, 195, 36, 37, 38, 47, 48, 39, 61, 63, 196, 197, 198, 239,
      ]),
      import.meta.url,
    ),
  ),
  Tn = k.lazy(() =>
    b(
      () => import(`./contenthub_routing.js`),
      __vite__mapDeps([
        240, 1, 3, 2, 4, 5, 29, 214, 9, 10, 11, 12, 13, 14, 15, 16, 17, 51, 52,
        164, 165, 166, 53, 167, 120, 27, 21, 41, 22, 23, 76, 182, 183, 77, 188,
        35, 36, 37, 38, 39, 96, 60, 19, 47, 48, 68, 97, 7, 80, 98, 99, 100, 31,
        34, 40, 42, 43, 56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 108, 109,
        126, 189, 190, 191, 135, 136, 185, 81, 82, 241,
      ]),
      import.meta.url,
    ),
  ),
  En = k.lazy(() =>
    b(
      () => import(`./recap_routing.js`),
      __vite__mapDeps([
        242, 1, 158, 3, 60, 37, 38, 114, 66, 2, 4, 5, 35, 36, 39, 96, 19, 47,
        48, 68, 97, 7, 80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43,
        56, 49, 101, 102, 103, 61, 62, 104, 105, 106, 159, 117, 118, 55, 57, 58,
        70, 71, 126, 146, 25, 24, 147, 127, 79, 153, 160, 116, 113, 119, 29,
        161, 107, 108, 109, 110, 111, 65, 162, 163, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170, 8, 18,
        20, 6, 26, 112, 30, 171, 172, 121, 122, 50, 46, 54, 173, 174, 175, 155,
        137, 138, 139, 140, 81, 82, 176, 177, 178, 179, 115, 88, 123, 124, 125,
        128, 129, 130, 131, 132, 133, 134, 63, 59, 64, 135, 136, 141, 69, 142,
        77, 143, 144, 145, 74, 75, 76, 180, 181, 182, 183, 78, 87, 184, 185,
        186, 187, 83, 85, 154, 188, 189, 190, 191, 192, 193, 194, 86, 89, 195,
        196, 197, 198, 199, 90, 91, 200, 201, 202, 203, 204, 205,
      ]),
      import.meta.url,
    ),
  ),
  Dn = k.lazy(() =>
    b(
      () => import(`./deadlinelanding.js`),
      __vite__mapDeps([
        243, 1, 3, 2, 4, 5, 38, 37, 21, 41, 102, 103, 104, 105, 79, 35, 36, 39,
        80, 7, 40, 58, 25, 24, 127, 227, 199, 228, 244,
      ]),
      import.meta.url,
    ),
  ),
  On = k.lazy(() =>
    b(
      () => import(`./taxrequirementlanding.js`),
      __vite__mapDeps([245, 1, 3, 2, 4, 5, 21, 40, 182, 183, 227, 246]),
      import.meta.url,
    ),
  ),
  kn = k.lazy(() =>
    b(
      () => import(`./meetsteamrouting.js`),
      __vite__mapDeps([
        247, 1, 3, 60, 37, 38, 2, 4, 5, 35, 36, 39, 96, 19, 47, 48, 68, 97, 7,
        80, 98, 99, 100, 31, 27, 34, 21, 40, 41, 22, 23, 42, 43, 56, 49, 101,
        102, 103, 61, 62, 104, 105, 106, 29, 112, 65, 58, 113, 114, 66, 57, 30,
        55, 70, 71, 131, 25, 24, 79, 59, 63, 64, 75, 76, 182, 183, 77, 78, 143,
        88, 83, 11, 84, 85, 154, 155, 192, 193, 194, 195, 196, 199, 248,
      ]),
      import.meta.url,
    ),
  ),
  An = k.lazy(() =>
    b(
      () => import(`./achievementseditorlanding.js`),
      __vite__mapDeps([
        249, 1, 3, 2, 4, 5, 35, 36, 37, 38, 39, 68, 48, 163, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 51, 52, 164, 165, 166, 53, 167, 120, 168, 169, 84, 170,
        8, 18, 19, 20, 31, 214, 121, 122, 215, 216, 174, 175, 27, 21, 40, 24,
        132, 133, 63, 182, 183, 77, 232, 178, 225, 226, 250,
      ]),
      import.meta.url,
    ),
  ),
  jn = k.lazy(() =>
    b(
      () => import(`./creatorhomeadmindashboard.js`),
      __vite__mapDeps([
        251, 1, 3, 47, 37, 38, 48, 22, 23, 146, 98, 21, 58, 61, 25, 7, 24, 252,
      ]),
      import.meta.url,
    ),
  );
function Mn(e) {
  let t = c(`publisherid`, `application_config`),
    n = k.useMemo(() => ({ country: p.COUNTRY, language: p.LANGUAGE }), []);
  return (0, A.jsx)(d, {
    IN_DESKTOPUI: !1,
    IN_GAMEPADUI: !1,
    IN_VR: !1,
    children: (0, A.jsx)(Re.Provider, {
      value: parseInt(t),
      children: (0, A.jsx)($e, {
        children: (0, A.jsx)(Pe, {
          children: (0, A.jsx)(In, {
            children: (0, A.jsx)(ke, {
              context: n,
              children: (0, A.jsx)(pt, {
                children: (0, A.jsx)(Zt, {
                  children: (0, A.jsx)(Be, { children: e.children }),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  });
}
function Nn(e) {
  let { children: t } = e,
    n = he([w.PricingTools(), w.PromotionTools()]);
  return (0, A.jsx)(`div`, {
    className: (0, O.default)(at, n && `mh5mngcGbRY-`),
    children: t,
  });
}
function Pn(e) {
  let [t, n] = k.useState(!1);
  return (
    k.useEffect(() => {
      let e = Te();
      e &&
        (document.documentElement.setAttribute(`lang`, e),
        x.SetPreferredLocales([e])),
        n(!0);
    }, []),
    t
      ? (0, A.jsx)(Le, {
          basename: Ie(),
          children: (0, A.jsx)(Mn, {
            children: (0, A.jsx)(Nn, {
              children: (0, A.jsx)(k.Suspense, {
                fallback: null,
                children: (0, A.jsxs)(Ae, {
                  children: [
                    (0, A.jsx)(C, { exact: !0, path: `/`, component: fn }),
                    (0, A.jsx)(C, {
                      exact: !0,
                      path: w.DiagData(),
                      render: (e) =>
                        (0, k.createElement)(tt, {
                          ...e,
                          key: e.match.params.gid,
                          strConfigID: `application_config`,
                        }),
                    }),
                    (0, A.jsx)(C, { path: w.SalePages(), component: _n }),
                    (0, A.jsx)(C, { path: w.OptInPages(), component: vn }),
                    (0, A.jsx)(C, { path: w.ContentHubPages(), component: Tn }),
                    (0, A.jsx)(C, { path: w.RecapPages(), component: En }),
                    (0, A.jsx)(C, { path: w.DeadlinesAdmin(), component: Dn }),
                    (0, A.jsx)(C, {
                      path: w.StoreGameAdminRoot(),
                      component: $,
                    }),
                    (0, A.jsx)(C, {
                      path: w.StoreAdminReviewPriceProposals(),
                      component: $,
                    }),
                    (0, A.jsx)(C, {
                      path: w.StoreAdminPackagePricingComparison(),
                      component: $,
                    }),
                    (0, A.jsx)(C, { path: w.PackageLanding(), component: $ }),
                    (0, A.jsx)(C, { path: w.StoreAdminRoot(), component: $ }),
                    (0, A.jsx)(C, { path: w.BundlesEditor(), component: $ }),
                    (0, A.jsx)(C, {
                      path: w.CreatorHomeAdminPage(),
                      children: (0, A.jsx)(E, {
                        config: {
                          "admin-creatorhome": (e) =>
                            (0, A.jsx)(jn, { creatorHomes: e.creator_homes }),
                        },
                      }),
                    }),
                    (0, A.jsx)(C, { path: w.AppCommunityItem(), component: Q }),
                    (0, A.jsx)(C, { path: w.AppLandingPage(), component: Q }),
                    (0, A.jsx)(C, { path: w.AppInstallerPage(), component: Q }),
                    (0, A.jsx)(C, { path: w.AppEconomyPage(), component: Q }),
                    (0, A.jsx)(C, {
                      path: w.PackageAdminRoot(),
                      component: yn,
                    }),
                    (0, A.jsx)(C, {
                      path: w.SteamML(),
                      render: () => (0, A.jsx)(pn, {}),
                    }),
                    (0, A.jsx)(C, {
                      path: w.BuildPatchNotes(),
                      render: (e) =>
                        (0, A.jsx)(hn, { appId: e.match.params.appid }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.SteamworksEvents(),
                      render: () => (0, A.jsx)(Ot, {}),
                    }),
                    (0, A.jsx)(C, { path: w.PromotionTools(), component: gn }),
                    (0, A.jsx)(C, { path: w.PricingTools(), component: mn }),
                    (0, A.jsx)(C, {
                      path: w.DeckVerifiedAdmin(),
                      render: () =>
                        (0, A.jsx)(E, {
                          config: {
                            "deck-verified-results": (e) =>
                              (0, A.jsx)(Z, {
                                dataprops: e,
                                results: c(
                                  `deckcompatibility`,
                                  `application_config`,
                                ),
                              }),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.DeckCompatTestingDashboard(),
                      render: () =>
                        (0, A.jsx)(E, {
                          config: {
                            "deck-verified-results-inflight": (e) =>
                              (0, A.jsx)(Z, {
                                dataprops: e,
                                results: c(
                                  `deckcompatibility_inflight`,
                                  `application_config`,
                                ),
                              }),
                            "deck-verified-results-submitted": (e) =>
                              (0, A.jsx)(Z, {
                                dataprops: e,
                                results: c(
                                  `deckcompatibility_submitted`,
                                  `application_config`,
                                ),
                              }),
                            "deck-verified-results-published": (e) =>
                              (0, A.jsx)(Z, {
                                dataprops: e,
                                results: c(
                                  `deckcompatibility_published`,
                                  `application_config`,
                                ),
                              }),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.DeckCompatTestingAppHistory(),
                      render: () =>
                        (0, A.jsx)(E, {
                          config: {
                            "deck-verified-results-reports": (e) =>
                              (0, A.jsx)(Z, {
                                dataprops: e,
                                results: c(
                                  `deckcompatibility_reports`,
                                  `application_config`,
                                ),
                              }),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.SDRConnections(),
                      render: (e) =>
                        (0, A.jsx)(bn, { appId: e.match.params.appid }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.PublisherDashboard(),
                      render: () =>
                        (0, A.jsx)(E, {
                          config: {
                            "publisher-dashboard": () => (0, A.jsx)(xn, {}),
                            "promotion-review-dashboard": () =>
                              (0, A.jsx)(Cn, {}),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.TimelineMarkerEditor(),
                      render: (e) =>
                        (0, A.jsx)(E, {
                          config: {
                            "timeline-marker-editor": () =>
                              (0, A.jsx)(Sn, { appId: e.match.params.appid }),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.AchievementsEditor(),
                      render: (e) =>
                        (0, A.jsx)(E, {
                          config: {
                            "achievements-editor": () =>
                              (0, A.jsx)(An, { appId: e.match.params.appid }),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.HardwareReservationQueueMessaging(),
                      component: wn,
                    }),
                    (0, A.jsx)(C, {
                      path: w.KeyWizardPackagePage(),
                      render: (e) =>
                        (0, A.jsx)(E, {
                          config: {
                            "key-wizard": () =>
                              (0, A.jsx)(sn, { appId: e.match.params.appid }),
                          },
                        }),
                    }),
                    (0, A.jsx)(C, {
                      path: w.YearInReviewProgressMonitor(),
                      component: un,
                    }),
                    (0, A.jsx)(C, { path: w.TaxRequirement(), component: On }),
                    (0, A.jsx)(C, { path: w.MeetSteam(), component: kn }),
                    (0, A.jsx)(C, { children: (0, A.jsx)(nt, {}) }),
                  ],
                }),
              }),
            }),
          }),
        })
      : null
  );
}
function Fn() {
  return Xe(new Ye(p.WEBAPI_BASE_URL));
}
function In(e) {
  let t = ee(Fn),
    n = ee(k.useCallback(() => new et(), []));
  return (0, A.jsx)(Ne, {
    useActiveSteamInterface: t,
    useStorage: n,
    children: e.children,
  });
}
var Ln = m(ve());
function Rn() {
  let e = [];
  return (
    a.IN_MOBILE_WEBVIEW && e.push(`in_mobile_app`),
    a.IN_CLIENT && e.push(`in_client`),
    e
  );
}
u({ enforceActions: `never` });
function zn() {
  let t = document.querySelectorAll(`.StoreAdminReactRoot`);
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      i = r.getAttribute(`data-component`);
    switch (i) {
      case `LibraryLogoEditor`:
      case `LibraryLogoEditorPopup`:
        b(
          async () => {
            let { Init_LibraryLogoEditor: e } = await import(`./logoedtior.js`);
            return { Init_LibraryLogoEditor: e };
          },
          __vite__mapDeps([253, 1, 3, 2, 4, 5, 100, 21, 22, 23, 130, 254, 255]),
          import.meta.url,
        ).then(({ Init_LibraryLogoEditor: e }) =>
          e(i == `LibraryLogoEditorPopup`, r),
        );
        break;
      default:
        e(!1, `unknown component: "${i}"`);
    }
  }
}
document.addEventListener(`DOMContentLoaded`, async function () {
  let e = document.getElementById(`application_root`);
  o(e ? `application_config` : void 0),
    n().Init(`Partner`, CLSTAMP, new Je().GetServiceTransport(), {
      fnGetReportTags: Rn,
    }),
    await Bn(p.LANGUAGE),
    e ? Ln.createRoot(e).render(k.createElement(Pn, {})) : zn();
});
async function Bn(e) {
  let [t, n, r] = await Promise.all([
      D(
        Object.assign({
          "../../../shared/localization/marketing/marketing_arabic.json": () =>
            b(() => import(`./marketing_arabic.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_brazilian.json":
            () =>
              b(() => import(`./marketing_brazilian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_bulgarian.json":
            () =>
              b(() => import(`./marketing_bulgarian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_czech.json": () =>
            b(() => import(`./marketing_czech.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_danish.json": () =>
            b(() => import(`./marketing_danish.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_dutch.json": () =>
            b(() => import(`./marketing_dutch.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_english.json": () =>
            b(() => import(`./marketing_english.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_finnish.json": () =>
            b(() => import(`./marketing_finnish.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_french.json": () =>
            b(() => import(`./marketing_french.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_german.json": () =>
            b(() => import(`./marketing_german.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_greek.json": () =>
            b(() => import(`./marketing_greek.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_hungarian.json":
            () =>
              b(() => import(`./marketing_hungarian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_indonesian.json":
            () =>
              b(() => import(`./marketing_indonesian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_italian.json": () =>
            b(() => import(`./marketing_italian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_japanese.json":
            () =>
              b(() => import(`./marketing_japanese.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_koreana.json": () =>
            b(() => import(`./marketing_koreana.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_latam.json": () =>
            b(() => import(`./marketing_latam.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_malay.json": () =>
            b(() => import(`./marketing_malay.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_norwegian.json":
            () =>
              b(() => import(`./marketing_norwegian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_polish.json": () =>
            b(() => import(`./marketing_polish.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_portuguese.json":
            () =>
              b(() => import(`./marketing_portuguese.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_romanian.json":
            () =>
              b(() => import(`./marketing_romanian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_russian.json": () =>
            b(() => import(`./marketing_russian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_sc_schinese.json":
            () =>
              b(
                () => import(`./marketing_sc_schinese.js`),
                [],
                import.meta.url,
              ),
          "../../../shared/localization/marketing/marketing_schinese.json":
            () =>
              b(() => import(`./marketing_schinese.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_spanish.json": () =>
            b(() => import(`./marketing_spanish.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_swedish.json": () =>
            b(() => import(`./marketing_swedish.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_tchinese.json":
            () =>
              b(() => import(`./marketing_tchinese.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_thai.json": () =>
            b(() => import(`./marketing_thai.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_turkish.json": () =>
            b(() => import(`./marketing_turkish.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_ukrainian.json":
            () =>
              b(() => import(`./marketing_ukrainian.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_vietnamese.json":
            () =>
              b(() => import(`./marketing_vietnamese.js`), [], import.meta.url),
        }),
        `../../../shared/localization/marketing/marketing_${e}.json`,
        7,
      ),
      D(
        Object.assign({
          "../../../shared/localization/sales/sales_arabic.json": () =>
            b(() => import(`./sales_arabic.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_brazilian.json": () =>
            b(() => import(`./sales_brazilian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_bulgarian.json": () =>
            b(() => import(`./sales_bulgarian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_czech.json": () =>
            b(() => import(`./sales_czech.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_danish.json": () =>
            b(() => import(`./sales_danish.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_dutch.json": () =>
            b(() => import(`./sales_dutch.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_english.json": () =>
            b(() => import(`./sales_english.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_finnish.json": () =>
            b(() => import(`./sales_finnish.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_french.json": () =>
            b(() => import(`./sales_french.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_german.json": () =>
            b(() => import(`./sales_german.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_greek.json": () =>
            b(() => import(`./sales_greek.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_hungarian.json": () =>
            b(() => import(`./sales_hungarian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_indonesian.json": () =>
            b(() => import(`./sales_indonesian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_italian.json": () =>
            b(() => import(`./sales_italian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_japanese.json": () =>
            b(() => import(`./sales_japanese.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_koreana.json": () =>
            b(() => import(`./sales_koreana.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_latam.json": () =>
            b(() => import(`./sales_latam.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_malay.json": () =>
            b(() => import(`./sales_malay.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_norwegian.json": () =>
            b(() => import(`./sales_norwegian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_polish.json": () =>
            b(() => import(`./sales_polish.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_portuguese.json": () =>
            b(() => import(`./sales_portuguese.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_romanian.json": () =>
            b(() => import(`./sales_romanian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_russian.json": () =>
            b(() => import(`./sales_russian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_sc_schinese.json": () =>
            b(() => import(`./sales_sc_schinese.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_schinese.json": () =>
            b(() => import(`./sales_schinese.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_spanish.json": () =>
            b(() => import(`./sales_spanish.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_swedish.json": () =>
            b(() => import(`./sales_swedish.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_tchinese.json": () =>
            b(() => import(`./sales_tchinese.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_thai.json": () =>
            b(() => import(`./sales_thai.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_turkish.json": () =>
            b(() => import(`./sales_turkish.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_ukrainian.json": () =>
            b(() => import(`./sales_ukrainian.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_vietnamese.json": () =>
            b(() => import(`./sales_vietnamese.js`), [], import.meta.url),
        }),
        `../../../shared/localization/sales/sales_${e}.json`,
        7,
      ).then((e) => e.default),
      D(
        Object.assign({
          "../localization/main_arabic.json": () =>
            b(() => import(`./main_arabic.js`), [], import.meta.url),
          "../localization/main_brazilian.json": () =>
            b(() => import(`./main_brazilian.js`), [], import.meta.url),
          "../localization/main_bulgarian.json": () =>
            b(() => import(`./main_bulgarian.js`), [], import.meta.url),
          "../localization/main_czech.json": () =>
            b(() => import(`./main_czech.js`), [], import.meta.url),
          "../localization/main_danish.json": () =>
            b(() => import(`./main_danish.js`), [], import.meta.url),
          "../localization/main_dutch.json": () =>
            b(() => import(`./main_dutch.js`), [], import.meta.url),
          "../localization/main_english.json": () =>
            b(() => import(`./main_english.js`), [], import.meta.url),
          "../localization/main_finnish.json": () =>
            b(() => import(`./main_finnish.js`), [], import.meta.url),
          "../localization/main_french.json": () =>
            b(() => import(`./main_french.js`), [], import.meta.url),
          "../localization/main_german.json": () =>
            b(() => import(`./main_german.js`), [], import.meta.url),
          "../localization/main_greek.json": () =>
            b(() => import(`./main_greek.js`), [], import.meta.url),
          "../localization/main_hungarian.json": () =>
            b(() => import(`./main_hungarian.js`), [], import.meta.url),
          "../localization/main_indonesian.json": () =>
            b(() => import(`./main_indonesian.js`), [], import.meta.url),
          "../localization/main_italian.json": () =>
            b(() => import(`./main_italian.js`), [], import.meta.url),
          "../localization/main_japanese.json": () =>
            b(() => import(`./main_japanese.js`), [], import.meta.url),
          "../localization/main_koreana.json": () =>
            b(() => import(`./main_koreana.js`), [], import.meta.url),
          "../localization/main_latam.json": () =>
            b(() => import(`./main_latam.js`), [], import.meta.url),
          "../localization/main_malay.json": () =>
            b(() => import(`./main_malay.js`), [], import.meta.url),
          "../localization/main_norwegian.json": () =>
            b(() => import(`./main_norwegian.js`), [], import.meta.url),
          "../localization/main_polish.json": () =>
            b(() => import(`./main_polish.js`), [], import.meta.url),
          "../localization/main_portuguese.json": () =>
            b(() => import(`./main_portuguese.js`), [], import.meta.url),
          "../localization/main_romanian.json": () =>
            b(() => import(`./main_romanian.js`), [], import.meta.url),
          "../localization/main_russian.json": () =>
            b(() => import(`./main_russian.js`), [], import.meta.url),
          "../localization/main_schinese.json": () =>
            b(() => import(`./main_schinese.js`), [], import.meta.url),
          "../localization/main_spanish.json": () =>
            b(() => import(`./main_spanish.js`), [], import.meta.url),
          "../localization/main_swedish.json": () =>
            b(() => import(`./main_swedish.js`), [], import.meta.url),
          "../localization/main_tchinese.json": () =>
            b(() => import(`./main_tchinese.js`), [], import.meta.url),
          "../localization/main_thai.json": () =>
            b(() => import(`./main_thai.js`), [], import.meta.url),
          "../localization/main_turkish.json": () =>
            b(() => import(`./main_turkish.js`), [], import.meta.url),
          "../localization/main_ukrainian.json": () =>
            b(() => import(`./main_ukrainian.js`), [], import.meta.url),
          "../localization/main_vietnamese.json": () =>
            b(() => import(`./main_vietnamese.js`), [], import.meta.url),
        }),
        `../localization/main_${e}.json`,
        3,
      ),
      je(),
    ]),
    i = { ...r.default },
    a = ge.GetLanguageFallback(e);
  if (e !== a) {
    let [e, r, o] = await Promise.all([
        D(
          Object.assign({
            "../../../shared/localization/marketing/marketing_arabic.json":
              () =>
                b(() => import(`./marketing_arabic.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_brazilian.json":
              () =>
                b(
                  () => import(`./marketing_brazilian.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_bulgarian.json":
              () =>
                b(
                  () => import(`./marketing_bulgarian.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_czech.json": () =>
              b(() => import(`./marketing_czech.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_danish.json":
              () =>
                b(() => import(`./marketing_danish.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_dutch.json": () =>
              b(() => import(`./marketing_dutch.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_english.json":
              () =>
                b(() => import(`./marketing_english.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_finnish.json":
              () =>
                b(() => import(`./marketing_finnish.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_french.json":
              () =>
                b(() => import(`./marketing_french.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_german.json":
              () =>
                b(() => import(`./marketing_german.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_greek.json": () =>
              b(() => import(`./marketing_greek.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_hungarian.json":
              () =>
                b(
                  () => import(`./marketing_hungarian.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_indonesian.json":
              () =>
                b(
                  () => import(`./marketing_indonesian.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_italian.json":
              () =>
                b(() => import(`./marketing_italian.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_japanese.json":
              () =>
                b(() => import(`./marketing_japanese.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_koreana.json":
              () =>
                b(() => import(`./marketing_koreana.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_latam.json": () =>
              b(() => import(`./marketing_latam.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_malay.json": () =>
              b(() => import(`./marketing_malay.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_norwegian.json":
              () =>
                b(
                  () => import(`./marketing_norwegian.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_polish.json":
              () =>
                b(() => import(`./marketing_polish.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_portuguese.json":
              () =>
                b(
                  () => import(`./marketing_portuguese.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_romanian.json":
              () =>
                b(() => import(`./marketing_romanian.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_russian.json":
              () =>
                b(() => import(`./marketing_russian.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_sc_schinese.json":
              () =>
                b(
                  () => import(`./marketing_sc_schinese.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_schinese.json":
              () =>
                b(() => import(`./marketing_schinese.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_spanish.json":
              () =>
                b(() => import(`./marketing_spanish.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_swedish.json":
              () =>
                b(() => import(`./marketing_swedish.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_tchinese.json":
              () =>
                b(() => import(`./marketing_tchinese.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_thai.json": () =>
              b(() => import(`./marketing_thai.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_turkish.json":
              () =>
                b(() => import(`./marketing_turkish.js`), [], import.meta.url),
            "../../../shared/localization/marketing/marketing_ukrainian.json":
              () =>
                b(
                  () => import(`./marketing_ukrainian.js`),
                  [],
                  import.meta.url,
                ),
            "../../../shared/localization/marketing/marketing_vietnamese.json":
              () =>
                b(
                  () => import(`./marketing_vietnamese.js`),
                  [],
                  import.meta.url,
                ),
          }),
          `../../../shared/localization/marketing/marketing_${a}.json`,
          7,
        ),
        D(
          Object.assign({
            "../../../shared/localization/sales/sales_arabic.json": () =>
              b(() => import(`./sales_arabic.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_brazilian.json": () =>
              b(() => import(`./sales_brazilian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_bulgarian.json": () =>
              b(() => import(`./sales_bulgarian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_czech.json": () =>
              b(() => import(`./sales_czech.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_danish.json": () =>
              b(() => import(`./sales_danish.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_dutch.json": () =>
              b(() => import(`./sales_dutch.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_english.json": () =>
              b(() => import(`./sales_english.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_finnish.json": () =>
              b(() => import(`./sales_finnish.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_french.json": () =>
              b(() => import(`./sales_french.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_german.json": () =>
              b(() => import(`./sales_german.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_greek.json": () =>
              b(() => import(`./sales_greek.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_hungarian.json": () =>
              b(() => import(`./sales_hungarian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_indonesian.json": () =>
              b(() => import(`./sales_indonesian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_italian.json": () =>
              b(() => import(`./sales_italian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_japanese.json": () =>
              b(() => import(`./sales_japanese.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_koreana.json": () =>
              b(() => import(`./sales_koreana.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_latam.json": () =>
              b(() => import(`./sales_latam.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_malay.json": () =>
              b(() => import(`./sales_malay.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_norwegian.json": () =>
              b(() => import(`./sales_norwegian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_polish.json": () =>
              b(() => import(`./sales_polish.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_portuguese.json": () =>
              b(() => import(`./sales_portuguese.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_romanian.json": () =>
              b(() => import(`./sales_romanian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_russian.json": () =>
              b(() => import(`./sales_russian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_sc_schinese.json": () =>
              b(() => import(`./sales_sc_schinese.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_schinese.json": () =>
              b(() => import(`./sales_schinese.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_spanish.json": () =>
              b(() => import(`./sales_spanish.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_swedish.json": () =>
              b(() => import(`./sales_swedish.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_tchinese.json": () =>
              b(() => import(`./sales_tchinese.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_thai.json": () =>
              b(() => import(`./sales_thai.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_turkish.json": () =>
              b(() => import(`./sales_turkish.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_ukrainian.json": () =>
              b(() => import(`./sales_ukrainian.js`), [], import.meta.url),
            "../../../shared/localization/sales/sales_vietnamese.json": () =>
              b(() => import(`./sales_vietnamese.js`), [], import.meta.url),
          }),
          `../../../shared/localization/sales/sales_${a}.json`,
          7,
        ),
        D(
          Object.assign({
            "../localization/main_arabic.json": () =>
              b(() => import(`./main_arabic.js`), [], import.meta.url),
            "../localization/main_brazilian.json": () =>
              b(() => import(`./main_brazilian.js`), [], import.meta.url),
            "../localization/main_bulgarian.json": () =>
              b(() => import(`./main_bulgarian.js`), [], import.meta.url),
            "../localization/main_czech.json": () =>
              b(() => import(`./main_czech.js`), [], import.meta.url),
            "../localization/main_danish.json": () =>
              b(() => import(`./main_danish.js`), [], import.meta.url),
            "../localization/main_dutch.json": () =>
              b(() => import(`./main_dutch.js`), [], import.meta.url),
            "../localization/main_english.json": () =>
              b(() => import(`./main_english.js`), [], import.meta.url),
            "../localization/main_finnish.json": () =>
              b(() => import(`./main_finnish.js`), [], import.meta.url),
            "../localization/main_french.json": () =>
              b(() => import(`./main_french.js`), [], import.meta.url),
            "../localization/main_german.json": () =>
              b(() => import(`./main_german.js`), [], import.meta.url),
            "../localization/main_greek.json": () =>
              b(() => import(`./main_greek.js`), [], import.meta.url),
            "../localization/main_hungarian.json": () =>
              b(() => import(`./main_hungarian.js`), [], import.meta.url),
            "../localization/main_indonesian.json": () =>
              b(() => import(`./main_indonesian.js`), [], import.meta.url),
            "../localization/main_italian.json": () =>
              b(() => import(`./main_italian.js`), [], import.meta.url),
            "../localization/main_japanese.json": () =>
              b(() => import(`./main_japanese.js`), [], import.meta.url),
            "../localization/main_koreana.json": () =>
              b(() => import(`./main_koreana.js`), [], import.meta.url),
            "../localization/main_latam.json": () =>
              b(() => import(`./main_latam.js`), [], import.meta.url),
            "../localization/main_malay.json": () =>
              b(() => import(`./main_malay.js`), [], import.meta.url),
            "../localization/main_norwegian.json": () =>
              b(() => import(`./main_norwegian.js`), [], import.meta.url),
            "../localization/main_polish.json": () =>
              b(() => import(`./main_polish.js`), [], import.meta.url),
            "../localization/main_portuguese.json": () =>
              b(() => import(`./main_portuguese.js`), [], import.meta.url),
            "../localization/main_romanian.json": () =>
              b(() => import(`./main_romanian.js`), [], import.meta.url),
            "../localization/main_russian.json": () =>
              b(() => import(`./main_russian.js`), [], import.meta.url),
            "../localization/main_schinese.json": () =>
              b(() => import(`./main_schinese.js`), [], import.meta.url),
            "../localization/main_spanish.json": () =>
              b(() => import(`./main_spanish.js`), [], import.meta.url),
            "../localization/main_swedish.json": () =>
              b(() => import(`./main_swedish.js`), [], import.meta.url),
            "../localization/main_tchinese.json": () =>
              b(() => import(`./main_tchinese.js`), [], import.meta.url),
            "../localization/main_thai.json": () =>
              b(() => import(`./main_thai.js`), [], import.meta.url),
            "../localization/main_turkish.json": () =>
              b(() => import(`./main_turkish.js`), [], import.meta.url),
            "../localization/main_ukrainian.json": () =>
              b(() => import(`./main_ukrainian.js`), [], import.meta.url),
            "../localization/main_vietnamese.json": () =>
              b(() => import(`./main_vietnamese.js`), [], import.meta.url),
          }),
          `../localization/main_${a}.json`,
          3,
        ),
        ce.Ready(),
      ]),
      s = { ...o.default };
    x.InitFromObjects(i, s), x.AddTokens(t, e), x.AddTokens(n, r);
  } else x.InitFromObjects(i, null), x.AddTokens(t, null), x.AddTokens(n, null);
}
function Vn(t, n, r) {
  e(n === `manifest`, `Expected manifest not "${n}"`), x.InitDirect(r);
}
window.LocalizationManifestReady = Vn;

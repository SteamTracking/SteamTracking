/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shareeventdialogbody.js",
      "./mobx.esm.js",
      "./src.js",
      "./dialogs.js",
      "./react-router.js",
      "../../../css/applications/appmgmt/dialogs.css",
      "./saletags.js",
      "./usedataloader.client.js",
      "./utils.js",
      "./useQuery.js",
      "./storebrowsequerycontext.js",
      "./servicetransportprovider.js",
      "./dataloader.js",
      "./storenaveventcontext.js",
      "./reactqueryroot.js",
      "./mutation.js",
      "./useMutation.js",
      "./steammessages_store_pb.js",
      "./cookies.client.js",
      "./storeitem.js",
      "./steammessages_clan_pb.js",
      "./appidutils.js",
      "./csstransitionwrapper.js",
      "./getpreferredlocales.js",
      "./modals.js",
      "./deckverified.js",
      "./axios.js",
      "./axiosutils.js",
      "./historyutils.js",
      "./throbber.js",
      "../../../css/applications/appmgmt/throbber.css",
      "./stringutils.js",
      "../../../css/applications/appmgmt/deckverified.css",
      "./ajaxhooks.js",
      "./currencyutils.js",
      "./localization2.js",
      "./partnereventshared.module.js",
      "../../../css/applications/appmgmt/partnereventshared.css",
      "./steamid.js",
      "./personautils.js",
      "./loadingspinner.js",
      "../../../css/applications/appmgmt/loadingspinner.css",
      "../../../css/applications/appmgmt/saletags.css",
      "./emoticonstorecontext.js",
      "./lazyrenderchildren.js",
      "./useresizeobserver.js",
      "./emoticon_php.js",
      "../../../css/applications/appmgmt/emoticonstorecontext.css",
      "./partnereventutils.js",
      "./uploadutils.js",
      "./steammessages_community_pb.js",
      "./eventtime.js",
      "./bbcodeeditor.js",
      "./eventimageurlwithfallback.js",
      "./salestoreitemutils.js",
      "../../../css/applications/appmgmt/salestoreitemutils.css",
      "../../../css/applications/appmgmt/eventimageurlwithfallback.css",
      "./useclienthints.js",
      "./emoticonbutton.js",
      "./bbcodes.module.js",
      "../../../css/applications/appmgmt/bbcodes.css",
      "./base64-js.js",
      "./numberformats.js",
      "./storeitemhooks.js",
      "./storeitemcache.js",
      "./debugglobal.js",
      "./browserapi.js",
      "../../../css/applications/appmgmt/emoticonbutton.css",
      "./multisourceimage.js",
      "./meetsteamclanid.js",
      "./shared_svg_gamerecordings.js",
      "../../../css/applications/appmgmt/shared_svg_gamerecordings.css",
      "./dashplayer.js",
      "./steammessages_player_pb.js",
      "./playerstore.js",
      "./appinfostore.js",
      "./appinfo.js",
      "./reorderablelist.module.js",
      "../../../css/applications/appmgmt/reorderablelist.css",
      "./genericimageupload.js",
      "./linkregionbox.js",
      "../../../css/applications/appmgmt/linkregionbox.css",
      "../../../css/applications/appmgmt/genericimageupload.css",
      "../../../css/applications/appmgmt/bbcodeeditor.css",
      "./discussionwidget.module.js",
      "../../../css/applications/appmgmt/discussionwidget.css",
      "./twitter_large.js",
      "./languagepicker.js",
      "./editorlocalizationstore.js",
      "../../../css/applications/appmgmt/shareeventdialogbody.css",
      "./broadcast_embeddable.js",
      "./webuitransportdefaults.js",
      "./broadcastplayer.js",
      "./assertThisInitialized.js",
      "./partnereventstore.js",
      "./crosspromotesalelayouts.js",
      "./creatorhomestore.js",
      "../../../css/applications/appmgmt/crosspromotesalelayouts.css",
      "./vodquery.js",
      "./canvas.js",
      "../../../css/applications/appmgmt/broadcastplayer.css",
      "./logindialog.js",
      "./button.js",
      "./flex.js",
      "./formfactor.js",
      "./focuselement.js",
      "./layout.js",
      "../../../css/applications/appmgmt/layout.css",
      "./variantdefaults.js",
      "../../../css/applications/appmgmt/variantdefaults.css",
      "../../../css/applications/appmgmt/flex.css",
      "./linkbase.js",
      "../../../css/applications/appmgmt/button.css",
      "../../../css/applications/appmgmt/logindialog.css",
      "./eventdevfeaturestore.js",
      "./storegamehover.js",
      "./steammessages_experiments_pb.js",
      "./localstorage.js",
      "../../../css/applications/appmgmt/broadcast_embeddable.css",
    ]),
) => i.map((i) => d[i]);

import {
  $t as e,
  A as t,
  Ct as n,
  I as r,
  K as i,
  Q as a,
  R as o,
  S as s,
  T as c,
  U as l,
  Y as u,
  Z as d,
  _t as f,
  ct as p,
  ft as m,
  gt as h,
  k as g,
  kt as _,
  nt as v,
  on as y,
  rt as b,
  x,
} from "./mobx.esm.js";
import {
  $ as S,
  J as C,
  R as w,
  Rt as T,
  Wt as ee,
  _t as te,
  l as ne,
  pt as re,
  r as ie,
  t as E,
  ut as ae,
} from "./src.js";
import { a as oe } from "./usedataloader.client.js";
import {
  Fi as se,
  Ga as ce,
  Ht as le,
  It as ue,
  Ji as de,
  La as D,
  Lt as fe,
  Mn as O,
  Pn as k,
  Qr as pe,
  Ra as A,
  Tr as me,
  Vn as he,
  Vt as j,
  _i as ge,
  ai as _e,
  bi as ve,
  bn as ye,
  c as be,
  ci as xe,
  da as Se,
  di as Ce,
  ei as we,
  fa as Te,
  fi as Ee,
  gi as De,
  hi as Oe,
  ii as ke,
  jt as Ae,
  li as je,
  mi as Me,
  ni as Ne,
  nn as Pe,
  oa as M,
  oi as Fe,
  or as N,
  p as P,
  pi as Ie,
  pn as Le,
  qr as Re,
  r as ze,
  ri as Be,
  s as Ve,
  si as He,
  ti as Ue,
  ui as We,
  vi as Ge,
  xi as Ke,
  xn as qe,
  yi as Je,
} from "./dialogs.js";
import {
  d as Ye,
  g as Xe,
  h as F,
  i as Ze,
  o as Qe,
} from "./storebrowsequerycontext.js";
import {
  $ as $e,
  M as et,
  Q as tt,
  Qn as nt,
  a as rt,
  it,
  o as at,
  q as ot,
  s as st,
} from "./saletags.js";
import { C as I, w as L } from "./react-router.js";
import { i as ct, r as lt } from "./servicetransportprovider.js";
import { i as ut } from "./utils.js";
import { t as R } from "./useQuery.js";
import { t as dt } from "./useMutation.js";
import { Y as ft } from "./storeitem.js";
import { n as pt, r as mt } from "./emoticonstorecontext.js";
import { t as ht } from "./partnereventstore.js";
import { n as gt, r as z } from "./modals.js";
import { t as _t } from "./axios.js";
import { t as vt } from "./ajaxhooks.js";
import { t as yt } from "./axiosutils.js";
import { t as B } from "./throbber.js";
import {
  a as bt,
  b as xt,
  c as St,
  d as Ct,
  f as wt,
  g as Tt,
  i as Et,
  l as Dt,
  o as Ot,
  r as kt,
  s as At,
  w as jt,
} from "./importexportdialog.js";
import { a as Mt, n as Nt } from "./eventdevfeaturestore.js";
import {
  S as Pt,
  _ as Ft,
  n as It,
  t as Lt,
  u as Rt,
  v as zt,
} from "./partnereventshared.module.js";
import { A as Bt } from "./emoticonbutton.js";
import {
  S as Vt,
  d as Ht,
  g as Ut,
  h as Wt,
  m as Gt,
} from "./partnereventutils.js";
import "./steamid.js";
import { a as Kt } from "./steammessages_community_pb.js";
import { t as qt } from "./multisourceimage.js";
import {
  _ as Jt,
  b as Yt,
  c as Xt,
  g as Zt,
  h as Qt,
  m as $t,
  p as en,
  t as tn,
} from "./bbcodeeditor.js";
import { n as nn } from "./numberformats.js";
import { a as rn } from "./creatorhomestore.js";
import { t as an } from "./storegamehover.js";
import { t as on } from "./storeitemcache.js";
import { n as sn } from "./eventtrackinghook.js";
import {
  C as cn,
  D as ln,
  E as un,
  S as dn,
  T as fn,
  a as pn,
  b as mn,
  c as hn,
  g as gn,
  i as _n,
  o as vn,
  r as yn,
  s as bn,
  w as xn,
  x as Sn,
} from "./discussionwidget.module.js";
import { n as Cn } from "./storeitemhooks.js";
import { t as wn } from "./crosspromotesalelayouts.js";
import { i as Tn, n as En, t as Dn } from "./clanstore.js";
import { n as On } from "./languagepicker.js";
function kn(e, t) {
  return [`GetClanAnnouncementVoteForUser`, t, e];
}
function An(e, t, n, r) {
  let a = ut(),
    o = kn(e, i.accountid),
    { data: s } = R({
      queryKey: o,
      queryFn: async () => await n.GetMyEventVote(e),
      initialData: r?.initialVote,
      enabled: !!e && !!i.accountid && (r?.bAsk ?? !0),
      staleTime: 1 / 0,
      gcTime: 1 / 0,
    }),
    { mutate: c } = dt({
      mutationFn: async (r) => {
        let i = await n.RateEvent(e, t, r);
        if (i != 1) throw Error(`RateClanAnnouncement failed with ${i}`);
      },
      onMutate: (e) => a.setQueryData(o, e),
      onError: () => a.invalidateQueries({ queryKey: o }),
    });
  return {
    myVote: s,
    Vote: (t) => {
      e && t != s && c(t);
    },
  };
}
var jn = `partnereventaction/myvote`,
  Mn = `partnereventaction/rateevent`;
async function Nn(e) {
  let t = l.STORE_BASE_URL + jn + `?gid=` + encodeURIComponent(e),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return (await n.json()).vote ?? null;
}
async function Pn(e, t, n) {
  let r = l.STORE_BASE_URL + Mn,
    i = await fetch(r, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({
        gid: e,
        clanaccountid: String(t),
        voteup: n == `up` ? `1` : `0`,
      }),
    });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  return (await i.json()).success ?? 2;
}
var Fn = { GetMyEventVote: Nn, RateEvent: Pn },
  V = y(_(), 1),
  H = f(),
  In = V.lazy(() =>
    ce(
      () =>
        import(`./shareeventdialogbody.js`).then((e) => ({
          default: e.ShareEventDialogBody,
        })),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
      ]),
      import.meta.url,
    ),
  );
function Ln(e) {
  let { bActive: t, ...n } = e;
  return (0, H.jsx)(z, {
    active: t,
    children: (0, H.jsx)(V.Suspense, {
      fallback: null,
      children: (0, H.jsx)(In, { ...n }),
    }),
  });
}
function Rn(e) {
  let { eventModel: n, emoticonStore: r } = e,
    [i, a, o] = w(),
    s = Yt(n);
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsxs)(A, {
        focusable: !0,
        className: t(Lt, zt, pn),
        onActivate: a,
        children: [
          (0, H.jsx)(pe, { className: gn }),
          (0, H.jsx)(`span`, { className: vn, children: M(`#Button_Share`) }),
        ],
      }),
      (0, H.jsx)(Ln, {
        eventModel: n,
        strEventLink: s ?? ``,
        bActive: i,
        closeModal: o,
        emoticonStore: r,
      }),
    ],
  });
}
var zn = y(_t()),
  Bn = `m6H2njbbWSs-`,
  Vn = `BgrsKgSro1E-`,
  Hn = `z0NFw8S8xoo-`,
  Un = `V6ZJUZpOph0-`,
  Wn = `t-0XbUHeOaw-`;
function Gn(e) {
  let { appid: t } = e;
  return (0, H.jsx)(`div`, {
    className: Bn,
    children: (0, H.jsx)(Kn, { appid: t }),
  });
}
function Kn(e) {
  let { appid: t } = e,
    { data: n } = Xe({ appid: t });
  return !n || n.length == 0
    ? null
    : (0, H.jsx)(qn, {
        strTitle: M(`#EventDisplay_SocialTitle`),
        id: `` + t,
        rgSocialMedia: n,
      });
}
function qn(e) {
  let { strTitle: n, id: r, rgSocialMedia: i } = e;
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(`div`, {
        className: t(Rt, `EventEditorTextTitle`),
        children: n,
      }),
      (0, H.jsx)(Yn, { id: r, rgSocialMedia: i }),
    ],
  });
}
var Jn = [6, 23, 18, 8, 9, 19, 24];
function Yn(e) {
  let { id: n, rgSocialMedia: r, className: i } = e,
    a = l.EREALM === h.k_ESteamRealmChina;
  return (0, H.jsx)(`div`, {
    className: t(Vn, i),
    children: r
      .filter((e) => !a || Jn.includes(e.link_type || 0))
      .map((e) =>
        e.url
          ? (0, H.jsx)(
              Xn,
              { social: e },
              `app_social_link_` + n + `_` + e.link_type,
            )
          : (0, H.jsx)(
              Zn,
              { social: e },
              `app_social_text_` + n + `_` + e.link_type + `_` + e.text,
            ),
      ),
  });
}
function Xn(e) {
  let { social: t } = e;
  return t.url
    ? (0, H.jsx)(`a`, {
        href: O(t.url, !0),
        target: l.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: (0, H.jsx)(Le, {
          toolTipContent: t.url,
          children: (0, H.jsx)(Qn, { social: t }),
        }),
      })
    : null;
}
function Zn(e) {
  let { social: t } = e;
  return (0, H.jsxs)(`div`, {
    className: Un,
    children: [
      (0, H.jsx)(Le, {
        toolTipContent: t.text,
        children: (0, H.jsx)(Qn, { social: t }),
      }),
      (0, H.jsx)(`div`, { className: Wn, children: t.text }),
    ],
  });
}
function Qn(e) {
  let { social: t } = e;
  return (0, H.jsx)(er, { linkType: t.link_type || 0, className: Hn });
}
var $n = {
  1: Ke,
  2: ke,
  3: ge,
  4: De,
  5: Ne,
  6: xe,
  18: xe,
  23: xe,
  7: Ge,
  8: we,
  9: ve,
  10: We,
  11: _e,
  12: Oe,
  13: Ie,
  14: Me,
  15: Ce,
  16: Fe,
  17: Je,
  19: Be,
  20: Ue,
  21: He,
  22: Ee,
  24: je,
};
function er(e) {
  let { linkType: t, ...n } = e,
    r = $n[t];
  return r ? (0, H.jsx)(r, { ...n }) : null;
}
var tr = class e extends ht {
    async DeleteOldAnnouncement(e, t) {
      let n = new URLSearchParams();
      n.append(`sessionid`, u());
      let r =
          v.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          t,
        i = await zn.default.post(r, n);
      if (i.data.success != 1) throw i.data;
      return this.RemoveGIDFromList(e, Wt + t), i.data;
    }
    static sm_Instance;
    static sm_SummaryInstance;
    static Get() {
      return (
        e.sm_Instance || ((e.sm_Instance = new e()), e.sm_Instance.Init()),
        e.sm_Instance
      );
    }
    static GetSummaryStore() {
      return (
        e.sm_SummaryInstance ||
          ((e.sm_SummaryInstance = new e(!0)), e.sm_SummaryInstance.Init()),
        e.sm_SummaryInstance
      );
    }
  },
  nr = `PIDa4iwF6Qw-`,
  rr = `YHODzfld870-`;
function ir(e) {
  let { id: n, event: r, className: i, dateRangeLayout: a = `horizontal` } = e,
    [o, s, c] = L(() => [
      r.GetStartTimeAndDateUnixSeconds(),
      r.GetEndTimeAndDateUnixSeconds(),
      r.type,
    ]),
    l = {};
  return (
    a == `vertical` && (l.ShortDateRange = rr),
    (0, H.jsx)(`div`, {
      id: n,
      className: t(nr, i),
      children: (0, H.jsx)(xt, {
        startDateAndTime: o,
        endDateAndTime: s,
        bHideEndTime: !Ut(c),
        stylesmodule: l,
      }),
    })
  );
}
var U = void 0;
function ar(e, t) {
  let n = e?.AnnouncementGID,
    { myVote: r, Vote: i } = An(n, e?.clanSteamID.GetAccountID() ?? 0, or(), {
      initialVote: lr(n),
      ...t,
    });
  return {
    myVote: r,
    Vote: (t) => {
      e &&
        n &&
        t != r &&
        (r && e.UpdateVoteCount(r, -1), e.UpdateVoteCount(t, 1), i(t));
    },
  };
}
function or() {
  let { useActiveCMInterface: e } = ct(),
    t = lt(),
    n = !!e;
  return V.useMemo(
    () =>
      n
        ? {
            GetMyEventVote: async (e) => await sr(t, e),
            RateEvent: async (e, n, r) => await cr(t, e, n, r),
          }
        : Fn,
    [n, t],
  );
}
async function sr(e, t) {
  if (!e) return null;
  let n = await Kt.GetClanAnnouncementVoteForUser(e, { announcementid: t });
  return n.BSuccess()
    ? n.Body().voted_up()
      ? `up`
      : n.Body().voted_down()
        ? `down`
        : null
    : null;
}
async function cr(e, t, n, r) {
  return e
    ? (
        await Kt.RateClanAnnouncement(e, {
          announcementid: t,
          vote_up: r == `up`,
          clan_accountid: n,
        })
      ).GetEResult()
    : 21;
}
function lr(t) {
  if (typeof window > `u`) e(!1, `GetVoteFromPageConfig is browser only`);
  else
    return (
      U ||
        ((U = new Map()),
        a(`uservotes`, `application_config`)?.forEach((e) => {
          e.clanAnnouncementGID &&
            U.set(
              e.clanAnnouncementGID,
              e.voted_up ? `up` : e.voted_down ? `down` : null,
            );
        })),
      t ? U.get(t) : void 0
    );
}
function ur(e) {
  let {
    nVoteCount: n,
    nCommentCount: r,
    myVote: i,
    onVote: a,
    strDiscussionURL: o,
    onDiscussionUnavailable: s,
    bShowDiscussion: c,
    repost: l,
    share: u,
  } = e;
  return (0, H.jsxs)(A, {
    className: yn,
    "flow-children": `row`,
    focusable: !1,
    children: [
      (0, H.jsxs)(`div`, {
        className: hn,
        children: [
          (0, H.jsxs)(`div`, {
            className: Sn,
            children: [
              (0, H.jsxs)(`div`, {
                className: dn,
                children: [(0, H.jsx)(se, { className: ln }), nn(n)],
              }),
              (0, H.jsxs)(A, {
                focusable: !0,
                className: t(Lt, zt, pn, i == `up` ? mn : ``),
                onActivate: () => a(`up`),
                children: [
                  (0, H.jsx)(se, { className: i == `up` ? un : fn }),
                  (0, H.jsx)(`span`, {
                    className: vn,
                    children: M(`#Button_RateUp`),
                  }),
                ],
              }),
              (0, H.jsx)(A, {
                focusable: !0,
                className: t(Lt, zt, pn, i == `down` ? mn : ``),
                onActivate: () => a(`down`),
                "aria-label": M(`#Button_RateDown`),
                children: (0, H.jsx)(se, { className: i == `down` ? xn : cn }),
              }),
            ],
          }),
          c &&
            (0, H.jsx)(dr, {
              commentCount: r,
              discussionURL: o,
              gotoDiscussion: s,
            }),
          l,
        ],
      }),
      u && (0, H.jsx)(`div`, { className: `vmIVedNuofw-`, children: u }),
    ],
  });
}
function dr(e) {
  let { commentCount: n, discussionURL: r, gotoDiscussion: i } = e;
  return (0, H.jsxs)(`div`, {
    className: _n,
    children: [
      (0, H.jsxs)(`div`, {
        className: bn,
        children: [(0, H.jsx)(N, {}), nn(n)],
      }),
      r &&
        (0, H.jsx)(ne, {
          href: k(r),
          children: (0, H.jsxs)(`div`, {
            className: t(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
            children: [
              (0, H.jsx)(N, {}),
              (0, H.jsx)(`span`, {
                className: `x25qTcshK-4-`,
                children: M(`#Button_Discuss`),
              }),
            ],
          }),
        }),
      !r &&
        (0, H.jsxs)(A, {
          focusable: !0,
          onActivate: i,
          className: t(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
          children: [
            (0, H.jsx)(N, {}),
            (0, H.jsx)(`span`, {
              className: `x25qTcshK-4-`,
              children: M(`#Button_Discuss`),
            }),
          ],
        }),
    ],
  });
}
function fr() {
  return b.logged_in
    ? !b.is_limited || (P((0, H.jsx)(st, {}), window), !1)
    : (v.IN_CLIENT
        ? console.log(
            `EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.`,
          )
        : P(
            (0, H.jsx)(Ve, {
              strTitle: M(`#EventDisplay_Share_NotLoggedIn`),
              strDescription: M(`#EventDisplay_Share_NotLoggedIn_Description`),
              strOKButtonText: M(`#MobileLogin_SignIn`),
              onOK: () => $e(),
            }),
            window,
          ),
      !1);
}
function pr(e) {
  let { eventModel: t, emoticonStore: i } = e,
    a = o(),
    { myVote: s, Vote: c } = ar(t),
    l = (e) => {
      fr() && s !== void 0 && c(e);
    },
    [, u] = En(t.clanSteamID.GetAccountID()),
    d = (e) => {
      let t = ae(e);
      t &&
        P(
          (0, H.jsx)(be, {
            strDescription: M(`#EventDisplay_Share_CommentMigrationInProcess`),
          }),
          t,
        );
    },
    [f, p, m, h] = L(() => [
      n(t.nVotesUp - t.nVotesDown, 0, 2 ** 53 - 1),
      O(t.GetDiscussionURL(u?.vanity_url)),
      t.BIsUnlistedEvent(),
      t.nCommentCount,
    ]),
    g = r();
  return (0, H.jsx)(ur, {
    nVoteCount: f,
    nCommentCount: h,
    myVote: s ?? void 0,
    onVote: l,
    strDiscussionURL: p,
    onDiscussionUnavailable: d,
    bShowDiscussion: !g && !m,
    share: !a && (0, H.jsx)(Rn, { eventModel: t, emoticonStore: i }),
  });
}
var mr = `zMH1K8bigkM-`,
  hr = `TyI03RMpz2I-`,
  gr = `DCoTBaIhgjA-`,
  _r = `wu5bVGwl0TE-`,
  vr = `qpxV4nQHXMc-`,
  yr = `aFhUTUuEGZ4-`,
  br = `_3wNjVve5vqc-`,
  xr = `bD0kY0dKy3k-`,
  Sr = `Dw62Gq5AJZE-`,
  Cr = {};
function wr(e) {
  return Cr[e];
}
var W = y(Mt(), 1);
(0, W.default)(`2026-11-23T09:30:00-08:00`).unix(),
  (0, W.default)(`2026-11-30T10:00:00-08:00`).unix();
function Tr() {
  return 2025;
}
function Er(e) {
  return `${l.MEDIA_CDN_URL}store/promo/${e}`;
}
function Dr() {
  return {
    strBackgroundColor: `#000000`,
    strBackgroundImageURL: Er(`steamawards2026/page_tile.svg?v=1`),
    strTrophyImageURL: Er(`steamawards2026/trophy_220.png?v=1`),
    strButtonBGColor: `#ffd979`,
    strButtonTextColor: `#000000`,
    strTextColor: `#ffd979`,
    strCategoryTextColor: `#ffffff`,
    strTitleColor: `#ffd979`,
    rgCategoryBackgrounds: wr(Tr())?.mapCategoryColors ?? {},
    strFallbackCategoryBGColor: `#000000`,
  };
}
function Or() {
  return `${l.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
}
(0, W.default)(`2026-12-17T09:30:00-08:00`).unix(),
  (0, W.default)(`2027-01-02T10:00:00-08:00`).unix();
var G = 5350740;
function kr(e, t) {
  return e.BIsEventActionEnabled(t) || t < e.GetStartTimeAndDateUnixSeconds();
}
function Ar(e, t, n, r) {
  let i = Mr(e, t),
    a = Mr(e, n);
  if (i.length || a.length)
    return {
      nomination: i.length ? { rgCategories: i, bNominationsLive: r } : void 0,
      vote: a.length ? { rgCategories: a, bNominationsLive: r } : void 0,
    };
}
function jr(e) {
  return e > 0;
}
function Mr(e, t) {
  let n = [];
  for (let r of t.filter(jr)) {
    let t = e.find((e) => e.voteid == r);
    t?.localization?.title &&
      n.push({
        eCategoryID: r,
        strTitle: t.localization.title,
        strDescription: t.localization.award_description ?? ``,
        bLaborOfLove: t.flag == 3,
        internal_name: t.internal_name ?? ``,
      });
  }
  return n;
}
function Nr(e) {
  return [`SteamAwards.GetUserNominations`, e];
}
function Pr(e) {
  return [`StoreSales.GetUserVotes`, e, G];
}
function Fr(e, t) {
  let n = ut(),
    r = Nr(i.accountid),
    { data: a, isPending: o } = R({
      queryKey: r,
      queryFn: async () => await t.GetMySteamAwardNominations(),
      enabled: !!i.accountid,
    }),
    { mutate: s } = dt({
      mutationFn: async (n) => {
        let r = await t.NominateForSteamAward(n, e);
        if (r != 1)
          throw Error(
            `SteamAwards.Nominate failed with ${r} for ${e} and appid ${n}`,
          );
      },
      onMutate: (t) =>
        n.setQueryData(r, (n) => [
          ...(n ?? []).filter((t) => t.category_id != e),
          { category_id: e, appid: t },
        ]),
      onError: () => n.invalidateQueries({ queryKey: r }),
    });
  return {
    unNominatedAppID: a?.find((t) => t.category_id == e)?.appid,
    bAnswered: a != null || !i.accountid || !o,
    Nominate: s,
  };
}
function Ir(e, t) {
  let n = ut(),
    r = Pr(i.accountid),
    { data: a, isPending: o } = R({
      queryKey: r,
      queryFn: async () => await t.GetMySteamAwardVotes(),
      enabled: !!i.accountid,
    }),
    { mutate: s } = dt({
      mutationFn: async (n) => {
        let r = await t.SetSteamAwardVote(n, e);
        if (r != 1) throw Error(`StoreSales.SetVote failed with ${r}`);
      },
      onMutate: (t) =>
        n.setQueryData(r, (n) => [
          ...(n ?? []).filter((t) => t.voteid != e),
          { voteid: e, appid: t },
        ]),
      onError: () => n.invalidateQueries({ queryKey: r }),
    });
  return {
    unVotedAppID: a?.find((t) => t.voteid == e)?.appid,
    bAnswered: a != null || !i.accountid || !o,
    Vote: s,
  };
}
var Lr = `ilr1AjdCJXo-`,
  Rr = `TxDyNEm1M8k-`,
  zr = `sUNGbyAayyI-`,
  Br = `Sc8nD8CrRck-`,
  Vr = `-z2wNnnSVlM-`,
  Hr = `ghuFYTHFeow-`,
  Ur = `r-d74eApzAI-`,
  Wr = `sSLI2In7TtI-`,
  Gr = `eWqTMj--x0o-`,
  Kr = `bwYOMwZYlP0-`,
  qr = `Z7-r2VQgpeM-`,
  Jr = `i7PGUODutQI-`,
  Yr = `tg9BVvJK4L0-`,
  Xr = `gJlraqCGBwc-`,
  Zr = `q-NADf-GkR0-`,
  Qr = `Nxnaq9LeCh0-`,
  $r = `o00cvSBJI98-`,
  ei = `ycbLF-HTlIE-`,
  ti = `iYxHUHZvg5o-`,
  ni = `_15SY61ywDwg-`,
  ri = V.createContext(void 0);
function ii(e) {
  return (0, H.jsx)(ri.Provider, {
    value: e.widgetStyle,
    children: e.children,
  });
}
function ai() {
  return V.useContext(ri) ?? Dr();
}
function oi(e) {
  let {
      strMainTitle: n,
      subtitle: r,
      headerText: i,
      headerContent: a,
      children: o,
      footer: s,
    } = e,
    c = ai(),
    l = {
      backgroundColor: c.strBackgroundColor,
      backgroundImage: `url( ${c.strBackgroundImageURL} )`,
      color: c.strTextColor,
    };
  return (0, H.jsxs)(`div`, {
    style: l,
    className: t(Lr, Pt),
    children: [
      (0, H.jsxs)(`div`, {
        className: Rr,
        children: [
          (0, H.jsx)(`img`, {
            className: zr,
            src: c.strTrophyImageURL,
            alt: ``,
          }),
          (0, H.jsxs)(`div`, {
            className: Br,
            children: [
              (0, H.jsx)(`div`, {
                style: { color: c.strTitleColor },
                className: Vr,
                children: n,
              }),
              r,
              (0, H.jsx)(`div`, { className: Ur, children: i }),
              a,
            ],
          }),
        ],
      }),
      o,
      !!s && (0, H.jsx)(`div`, { className: `HsPliMKnMhg-`, children: s }),
    ],
  });
}
function si(e) {
  return `${l.STORE_BASE_URL}steamawards/${e ? `nominations/` : ``}`;
}
function ci() {
  return (0, H.jsx)(B, {
    className: Lr,
    size: `medium`,
    position: `center`,
    string: D.Localize(`#Loading`),
  });
}
function li(e) {
  let { elDialogElement: t, fnShowLogonDialog: n } = ot(),
    [r, a, o] = w();
  return {
    elDialogElement: (0, H.jsxs)(H.Fragment, {
      children: [
        t,
        (0, H.jsx)(z, {
          active: r,
          children: (0, H.jsx)(ui, { bVote: e, closeModal: o }),
        }),
      ],
    }),
    BCanTakeAction: () =>
      i.logged_in ? !i.is_limited || (a(), !1) : (n(), !1),
  };
}
function ui(e) {
  let { bVote: t, closeModal: n } = e;
  return (0, H.jsx)(Ve, {
    strTitle: D.Localize(`#Informational_Message`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    children: (0, H.jsx)(`div`, {
      children: D.LocalizeReact(
        t
          ? `#SteamAward_Vote_LimitedAccount`
          : `#SteamAward_Nominate_LimitedAccount`,
        (0, H.jsx)(`a`, {
          href: `${l.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
          target: l.IN_CLIENT ? void 0 : `_blank`,
          rel: `noreferrer`,
          children: D.Localize(`#User_LimitedAccount_UrlInfo`),
        }),
      ),
    }),
  });
}
function di(e) {
  let {
      strLocTokenInfix: t,
      unCurrentAppID: n,
      unNewAppID: r,
      fnOnConfirm: i,
      closeModal: a,
    } = e,
    { data: o } = F({ appid: n }),
    { data: s } = F({ appid: r }),
    { data: c } = Ye({ appid: n }),
    { data: l } = Ye({ appid: r }),
    u = c ? nt(c, `small_capsule`) : void 0,
    d = l ? nt(l, `small_capsule`) : void 0;
  return (0, H.jsx)(Ve, {
    modalClassName: ei,
    strTitle: D.Localize(
      t == `Vote`
        ? `#SteamAward_VoteConflictWarning_Title`
        : `#SteamAward_NominationConflictWarning_Title`,
    ),
    closeModal: a,
    onOK: i,
    onCancel: a,
    children: (0, H.jsxs)(`div`, {
      className: ti,
      children: [
        D.LocalizeReact(
          t == `Vote`
            ? `#SteamAward_VoteConflictWarning_Explanation`
            : `#SteamAward_NominationConflictWarning_Explanation`,
          (0, H.jsx)(`span`, { className: Qr, children: o?.name }),
          (0, H.jsx)(`span`, { className: Qr, children: s?.name }),
        ),
        u && d
          ? (0, H.jsxs)(`div`, {
              className: ni,
              children: [
                (0, H.jsx)(`img`, { src: u, alt: `` }),
                `→`,
                (0, H.jsx)(`img`, { src: d, alt: `` }),
              ],
            })
          : (0, H.jsx)(B, {
              size: `small`,
              position: `center`,
              string: D.Localize(`#Loading`),
            }),
      ],
    }),
  });
}
function fi(e) {
  let { unAppID: n, widget: r, actions: i, bNominationsOpen: a } = e,
    o = r.rgCategories[0],
    { data: s } = F({ appid: n }),
    { unNominatedAppID: c, bAnswered: l, Nominate: u } = Fr(o.eCategoryID, i),
    { elDialogElement: d, BCanTakeAction: f } = li(!1),
    {
      strButtonBGColor: p,
      strButtonTextColor: m,
      rgCategoryBackgrounds: h,
      strFallbackCategoryBGColor: g,
      strCategoryTextColor: _,
    } = ai(),
    [v, y, b] = w(),
    x = h?.[o.internal_name] ?? g;
  if (!r.bNominationsLive) return null;
  if (!l) return (0, H.jsx)(ci, {});
  let S = O(si(!0)),
    C = c == n,
    T = r.rgCategories.length == 1,
    ee = a && !o.bLaborOfLove;
  return (0, H.jsxs)(oi, {
    strMainTitle: D.Localize(`#SteamAwards_EventMainTitle`),
    subtitle: (0, H.jsxs)(`div`, {
      className: Hr,
      children: [
        a
          ? D.Localize(`#SteamAwards_EventCallToAction`)
          : D.Localize(`#SteamAwards_EventVotingDateTeaser`, Tr()),
        a &&
          (0, H.jsxs)(`a`, {
            href: S,
            className: `OztIiH5vYRE-`,
            children: [
              `(`,
              D.Localize(`#EventDisplay_CallToAction_LearnMore`),
              `)`,
            ],
          }),
      ],
    }),
    headerText: a
      ? T
        ? D.Localize(`#SteamAwards_EventNominateGamePrompt_Long`, s?.name ?? ``)
        : (0, H.jsx)(`a`, {
            className: Wr,
            href: S,
            children: D.Localize(
              `#SteamAwards_EventNominateGamePrompt_NoCategory`,
              s?.name ?? ``,
            ),
          })
      : D.Localize(`#SteamAwards_Event_NominationsClosed`),
    footer:
      ee &&
      (0, H.jsx)(`a`, {
        href: S,
        children: D.Localize(`#SteamAwards_EventNominationAlternativeLinkText`),
      }),
    children: [
      !!(T && (a || C)) &&
        (0, H.jsx)(`div`, {
          style: { background: x },
          className: t(`eU1VNUlajE0-`, `eWqTMj--x0o-`),
          children: (0, H.jsxs)(`div`, {
            className: `gO70X8GBo-E-`,
            children: [
              (0, H.jsx)(`div`, {
                style: { background: p, color: m },
                className: t(`SNoK7p5tEVU-`, C && `eIE9nuLmVLE-`),
                children: (0, H.jsx)(le, {
                  controlled: !0,
                  className: t(`_1IIojhfpy34-`, C && `eIE9nuLmVLE-`),
                  checked: C,
                  onChange: (e) => {
                    e && f() && (c && c != n ? y() : u(n));
                  },
                  disabled: C,
                  color: m,
                  highlightColor: m,
                  label: (0, H.jsx)(`div`, {
                    className: `bwYOMwZYlP0-`,
                    children: D.Localize(
                      C
                        ? `#SteamAwards_NominateWidget_CTA_PastTense`
                        : `#SteamAwards_NominateWidget_CTA`,
                      o.strTitle,
                    ),
                  }),
                }),
              }),
              (0, H.jsx)(`div`, {
                style: { color: _ },
                className: `C-uxCDYX7oo-`,
                children: o.strDescription,
              }),
            ],
          }),
        }),
      d,
      (0, H.jsx)(z, {
        active: v,
        children: (0, H.jsx)(di, {
          strLocTokenInfix: `Nomination`,
          unCurrentAppID: c,
          unNewAppID: n,
          fnOnConfirm: () => u(n),
          closeModal: b,
        }),
      }),
    ],
  });
}
function pi(e) {
  let {
      unAppID: t,
      widget: n,
      actions: r,
      bVotesOpen: i,
      bHideCategoryDescriptions: a,
    } = e,
    { data: o } = F({ appid: t }),
    s = O(si(!1));
  return (0, H.jsx)(oi, {
    strMainTitle: D.Localize(`#SteamAwards_EventMainTitleCombined`),
    headerText: i
      ? D.Localize(`#SteamAwards_EventVoteForGamePrompt`, o?.name ?? ``)
      : (0, H.jsx)(`a`, {
          href: s,
          className: Wr,
          children: D.Localize(`#SteamAwards_Event_VotesClosed`),
        }),
    headerContent: (0, H.jsx)(`div`, {
      className: $r,
      children: n.rgCategories.map((e) =>
        (0, H.jsx)(
          mi,
          {
            unAppID: t,
            category: e,
            actions: r,
            bVotesOpen: i,
            bHideDescription: a,
          },
          e.eCategoryID,
        ),
      ),
    }),
    footer: (0, H.jsx)(`a`, {
      href: s,
      children: D.Localize(`#EventDisplay_CallToAction_LearnMore`),
    }),
  });
}
function mi(e) {
  let {
      unAppID: n,
      category: r,
      actions: i,
      bVotesOpen: a,
      bHideDescription: o,
    } = e,
    { unVotedAppID: s, bAnswered: c, Vote: l } = Ir(r.eCategoryID, i),
    { elDialogElement: u, BCanTakeAction: d } = li(!0),
    { strFallbackCategoryBGColor: f, rgCategoryBackgrounds: p } = ai(),
    [m, h, g] = w(),
    _ = p?.[r.internal_name] ?? f,
    v = s == n;
  return !a && !v
    ? null
    : (0, H.jsxs)(`div`, {
        style: { backgroundColor: _ },
        className: Gr,
        children: [
          (0, H.jsxs)(`div`, {
            className: Jr,
            children: [
              (0, H.jsx)(`div`, { className: t(Kr, qr), children: r.strTitle }),
              !o &&
                (0, H.jsx)(`div`, {
                  className: `C-uxCDYX7oo-`,
                  children: r.strDescription,
                }),
              v
                ? (0, H.jsx)(`button`, {
                    className: Zr,
                    children: (0, H.jsx)(`span`, {
                      className: Xr,
                      children: D.Localize(`#SteamAward_VoteButton_VotedText`),
                    }),
                  })
                : (0, H.jsx)(`button`, {
                    className: Yr,
                    onClick: () => {
                      c && d() && (s && s != n ? h() : l(n));
                    },
                    children: (0, H.jsx)(`span`, {
                      className: Xr,
                      children: D.Localize(`#SteamAward_VoteButton_PromptText`),
                    }),
                  }),
            ],
          }),
          u,
          (0, H.jsx)(z, {
            active: m,
            children: (0, H.jsx)(di, {
              strLocTokenInfix: `Vote`,
              unCurrentAppID: s,
              unNewAppID: n,
              fnOnConfirm: () => l(n),
              closeModal: g,
            }),
          }),
        ],
      });
}
function hi(e) {
  let t = lt();
  return (0, V.useMemo)(
    () => ({
      GetMySteamAwardNominations: () => bt(t),
      NominateForSteamAward: async (n, r) => {
        if (e) return 1;
        let [i] = await At(t, n, r, 4);
        return i;
      },
      GetMySteamAwardVotes: () => Ot(t, G),
      SetSteamAwardVote: async (n, r) => {
        if (e) return 1;
        let [i] = await St(t, n, r, G);
        return i;
      },
    }),
    [t, e],
  );
}
var gi = [];
function _i(e, t, n) {
  let r = e.some(jr) || t.some(jr),
    i = Dt(r ? G : void 0);
  return r
    ? i.data
      ? { widgets: Ar(i.data.votes ?? [], e, t, n), bLoading: !1 }
      : { bLoading: i.isPending }
    : { bLoading: !1 };
}
function vi(e) {
  let { data: t, isPending: n } = R({
    queryKey: [`SteamAwards.WidgetStyle`],
    queryFn: async () => {
      let e = await fetch(Or(), { credentials: `omit` });
      if (!e.ok)
        throw Error(`steamawards/ajaxgetwidgetstyle failed with ${e.status}`);
      return await e.json();
    },
    enabled: e,
    staleTime: 1 / 0,
    retry: !1,
  });
  return { widgetStyle: t, bLoading: e && n };
}
function yi(e, t) {
  return t ? { ...e, bNominationsLive: !0 } : e;
}
function bi(e) {
  return !!e && l.EUNIVERSE == 1;
}
function xi(e) {
  let { event: t, previewMode: n } = e,
    [r, i] = L(() => [t.GetSteamAwardCategory(), t.appid]),
    a = kr(t, jt()),
    { widgets: o, bLoading: s } = _i([r], gi, a),
    { widgetStyle: c, bLoading: l } = vi(!!o?.nomination),
    u = hi(bi(n));
  return s || l
    ? (0, H.jsx)(ci, {})
    : o?.nomination
      ? (0, H.jsx)(ii, {
          widgetStyle: c,
          children: (0, H.jsx)(fi, {
            unAppID: i,
            actions: u,
            widget: yi(o.nomination, !!n),
            bNominationsOpen: a,
          }),
        })
      : null;
}
function Si(e) {
  let {
      appID: t,
      voteCategories: n,
      bIsEventActionEnabled: r,
      previewMode: i,
      bRenderFromStorePage: a,
    } = e,
    { widgets: o, bLoading: s } = _i(gi, n ?? gi, !1),
    { widgetStyle: c, bLoading: l } = vi(!!o?.vote),
    u = hi(bi(i));
  return s || l
    ? (0, H.jsx)(ci, {})
    : o?.vote
      ? (0, H.jsx)(ii, {
          widgetStyle: c,
          children: (0, H.jsx)(pi, {
            unAppID: t,
            widget: o.vote,
            actions: u,
            bVotesOpen: r || !!i,
            bHideCategoryDescriptions: a,
          }),
        })
      : null;
}
var Ci = `CmGdbGDNSV4-`,
  wi = `iPOPhGzC-a0-`,
  Ti = `xrOiSU9R97s-`,
  Ei = `LwJMhK0HNVM-`,
  Di = `ZGGCLp-BDTo-`,
  Oi = `M7DOVjQK--s-`,
  ki = `gKDPu8oCj8M-`,
  Ai = `CI7Kfj6g0IA-`,
  ji = `wkqGxJzBufw-`,
  Mi = `wqku6E-Abwg-`,
  Ni = `gg4cpQLGyDc-`,
  Pi = `_7YWF9gABggY-`,
  Fi = `_5p-Wrlk9bgc-`,
  Ii = `_72FICgCQSdY-`,
  Li = `UnBqYIhvFvg-`,
  Ri = `nT35pSNPuYs-`,
  zi = `_2XopQbI8Bi8-`,
  Bi = `o6bVF1-qPXQ-`,
  Vi = `qvYW3H-Yr-I-`,
  Hi = `Cfio5qjFtHU-`,
  Ui = `oN6p82rKRck-`,
  Wi = `vO1QeI3w9Dk-`,
  Gi = `_3aW3Mxt8m1Q-`,
  Ki = `Qe4MY8-rwjI-`,
  qi = `jcxmsuUFA2M-`,
  Ji = `KdR0M-oN1oY-`,
  Yi = `QHtC9T0nSOI-`,
  Xi = `ibKXDplBVRg-`,
  Zi = `CmfveJtv4Vo-`,
  Qi = `W178nE7W-R0-`,
  $i = `fY9hFy-ZiKw-`,
  ea = `KwOhtU9RR3w-`,
  ta = `_9QcJ0ABITrA-`;
function na(e) {
  let {
      appId: n,
      clanId: r,
      strCapsuleUrl: i,
      strGroupTitle: a,
      strExtraBannerGroupStyle: s,
      actions: c,
    } = e,
    l = n !== Gt,
    u = V.useMemo(() => (n ? { appid: n } : { creatorid: r }), [n, r]),
    d = (0, H.jsx)(`img`, { className: Fi, src: i });
  return o()
    ? null
    : (0, H.jsxs)(`div`, {
        className: ki,
        children: [
          (0, H.jsx)(`div`, {
            className: Ai,
            style: { backgroundImage: `url(${i})` },
          }),
          (0, H.jsxs)(`div`, {
            className: t(Di, s),
            children: [
              l
                ? n
                  ? (0, H.jsx)(it, {
                      id: u,
                      className: Pi,
                      hoverProps: {
                        direction: `overlay`,
                        style: { minWidth: `320px` },
                      },
                      children: d,
                    })
                  : (0, H.jsx)(an, { id: u, hoverClassName: Pi, children: d })
                : (0, H.jsxs)(`div`, { className: Pi, children: [d, ` `] }),
              (0, H.jsxs)(`div`, {
                className: Mi,
                children: [
                  a,
                  (0, H.jsx)(`div`, {
                    className: Ni,
                    children: M(`#EventDisplay_NewsHubSubtitle`),
                  }),
                ],
              }),
              l &&
                (0, H.jsx)(`div`, { className: `XVaKlThraAU-`, children: c }),
            ],
          }),
        ],
      });
}
function ra(e, t) {
  let [n, r] = (0, V.useState)({}),
    i = vt(`useEventHeaderData`);
  return (
    (0, V.useEffect)(() => {
      if (e)
        on.Get()
          .QueueAppRequest(e, { include_assets: !0, include_screenshots: !0 })
          .then(() => {
            let t = on.Get().GetApp(e);
            t &&
              !i?.token?.reason &&
              r({
                strCapsuleUrl: t.GetAssets()?.GetHeaderURL(),
                strGroupTitle: t.GetName(),
                strStoreURL:
                  (v.IN_CLIENT ? `steam://openurl/` : ``) + t.GetStorePageURL(),
                strCommunityURL:
                  (v.IN_CLIENT ? `steam://openurl/` : ``) +
                  t.GetCommunityPageURL(),
                strForumURL:
                  (v.IN_CLIENT ? `steam://openurl/` : ``) +
                  t.GetCommunityDiscussionForumsURL(),
              });
          });
      else if (t) {
        let e = E.InitFromClanID(t, v.EUNIVERSE);
        Dn.LoadClanInfoForClanSteamID(e).then((n) => {
          n &&
            !i?.token?.reason &&
            r({
              strCapsuleUrl: n.avatar_full_url,
              strGroupTitle: n.group_name,
              strStoreURL:
                (v.IN_CLIENT ? `steam://openurl/` : ``) +
                v.STORE_BASE_URL +
                `curator/` +
                t +
                `/`,
              strCommunityURL:
                (v.IN_CLIENT ? `steam://openurl/` : ``) +
                v.COMMUNITY_BASE_URL +
                `gid/` +
                e.ConvertTo64BitString(),
              strExtraBannerGroupStyle: ji,
            });
        });
      }
    }, [e, i?.token?.reason, t]),
    n
  );
}
function ia(e) {
  let { appId: t, clanId: n, bShowRSSFeed: i } = e,
    { strStoreURL: a, strCommunityURL: o, strForumURL: s } = ra(t, n),
    c = r(),
    l =
      v.STORE_BASE_URL +
      `feeds/` +
      Jt() +
      (t ? `/app/` + t : `/group/` + n) +
      `/?cc=` +
      v.COUNTRY +
      `&l=` +
      v.LANGUAGE,
    { data: u } = Tt(n),
    d = !!(u?.can_edit || u?.support_user),
    f = et.Get().BOwnsApp(t),
    p = (0, V.useMemo)(() => {
      let e = [];
      return (
        v.IN_CLIENT &&
          f &&
          e.push({
            label: M(`#EventDisplay_ViewInLibrary_ExtraShort`),
            data: `steam://nav/games/details/` + t,
          }),
        a &&
          e.push({
            label: M(`#EventDisplay_ViewStorePage_ExtraShort`),
            data: k(a),
          }),
        c ||
          (o &&
            e.push({
              label: M(`#EventDisplay_ViewCommunityPage_ExtraShort`),
              data: k(o),
            }),
          s &&
            e.push({
              label: M(`#EventDisplay_ViewForum_ExtraShort`),
              data: k(s),
            }),
          i &&
            e.push({
              label: (0, H.jsxs)(`div`, {
                className: Hi,
                children: [
                  (0, H.jsx)(Re, {}),
                  M(`#EventDisplay_RSSFeed_ExtraShort`),
                ],
              }),
              data: l,
            })),
        d &&
          e.push({
            label: M(`#EventDisplay_Admin_ExtraShort`),
            data: Zt(t, E.InitFromClanID(n, v.EUNIVERSE), `admin`),
          }),
        e
      );
    }, [f, a, c, d, o, s, i, l, t, n]);
  return (0, H.jsx)(Ae, {
    strDefaultLabel: M(`#EventDisplay_LinksDropDown_ExtraShort`),
    strClassName: Ri,
    strDropDownButtonClassName: zi,
    strDropDownMenuCtnClass: Vi,
    contextMenuPositionOptions: { bMatchWidth: !1 },
    arrowClassName: Bi,
    rgOptions: p,
    onChange: (e, t, n) => {
      n && qe(n, e.data);
    },
  });
}
var aa = I((e) => {
  let { appId: n, clanId: r } = e,
    {
      strCapsuleUrl: i,
      strGroupTitle: a,
      strExtraBannerGroupStyle: o,
    } = ra(n, r),
    s = (0, V.useMemo)(() => (n ? { appid: n } : { creatorid: r }), [n, r]),
    { data: c } = F(s),
    l = et.Get().BOwnsApp(n);
  return (0, H.jsx)(na, {
    appId: n,
    clanId: r,
    strCapsuleUrl: i,
    strGroupTitle: a,
    strExtraBannerGroupStyle: o,
    actions: (0, H.jsxs)(H.Fragment, {
      children: [
        !(l || !n) &&
          (0, H.jsx)(`div`, {
            className: `_1US5O8GIUEc-`,
            children: (0, H.jsx)(Tn, {
              appid: n,
              bIsFree: !!c?.is_free,
              bIsComingSoon: !!c?.is_coming_soon,
              className: t(void 0, `mJ5CX9X1A8E-`),
            }),
          }),
        (0, H.jsx)(`div`, {
          className: Li,
          children: n
            ? (0, H.jsx)(rt, { appid: n, className: Ii })
            : (0, H.jsx)(at, { clanAccountID: r, className: Ii }),
        }),
        (0, H.jsx)(ia, { ...e }),
      ],
    }),
  });
});
function oa(e) {
  return (0, H.jsx)(`div`, {
    className: t(wi, `AppPartnerEventsBanner`),
    children: (0, H.jsx)(aa, { ...e }),
  });
}
var sa = `WbZZkptWLHg-`;
function ca(e) {
  let { event: t } = e,
    n = L(() => t.jsondata?.referenced_appids || []),
    r = Ze(),
    i = oe({
      queries: n.map((e) => Qe(r, { appid: e })),
      combine: (e) => ({
        bLoaded: e.every((e) => !e.isPending),
        data: e.map((e) => e.data),
      }),
    });
  if (!n.length || !i.bLoaded) return null;
  let a = i.data
      .flatMap((e) =>
        e?.store_url_path && e?.name ? [`[url="${tt(e)}"]${e.name}[/url]`] : [],
      )
      .join(M(`#EventDisplay_ReferencedApps_Joiner`)),
    o = Se(`#EventDisplay_ReferencedApps`, n.length, a);
  return (0, H.jsx)(`div`, {
    className: sa,
    children: (0, H.jsx)(Xt, { text: o, event: t }),
  });
}
function la(e) {
  let { children: t } = e;
  return o() && !v.IN_STEAMUI
    ? (0, H.jsx)(ze, { className: Ft, children: t })
    : (0, H.jsx)(H.Fragment, { children: t });
}
var ua = 56,
  da = 136,
  fa = V.lazy(() =>
    ce(
      () => import(`./broadcast_embeddable.js`),
      __vite__mapDeps([
        90, 1, 2, 3, 4, 5, 10, 11, 8, 9, 12, 6, 7, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 91, 53, 54, 55, 48, 49, 50, 51, 56, 92, 93, 94, 76,
        65, 62, 72, 66, 61, 64, 80, 81, 95, 96, 97, 98, 99, 100, 44, 45, 101,
        102, 103, 104, 57, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 58,
        59, 60, 46, 63, 67, 115, 116, 84, 85, 73, 86, 117, 118,
      ]),
      import.meta.url,
    ),
  );
function pa(e) {
  let [n, r] = Cn(e.appid, { include_assets: !0 }),
    [i, a] = En(e.clanID),
    o = ``;
  return (
    e.appid
      ? (o = n?.GetAssets()?.GetCommunityIconURL() || ``)
      : e.clanID && (o = a?.avatar_full_url ?? ``),
    (0, H.jsx)(`div`, {
      className: t(Yi, Ji, Xi),
      onClick: e.onAppIconClick,
      children: !!o && (0, H.jsx)(`img`, { src: o, alt: `` }),
    })
  );
}
var K = class extends V.Component {
  m_loader;
  m_refPage = V.createRef();
  m_refContent = V.createRef();
  m_refScroll = V.createRef();
  m_refScrollAnchor = V.createRef();
  m_scrollAnimation = null;
  m_nTouchStartClientY;
  m_nPreviousRenderCount = 0;
  m_nCurrentRenderCount = 0;
  constructor(e) {
    super(e),
      (this.m_loader = new J(this.props.partnerEventStore)),
      !this.props.bShowOnlyInitialEvent &&
        this.props.initialEvent &&
        this.m_loader.InitAroundEvent(
          this.props.initialEvent,
          this.props.additionalParams,
        );
  }
  FindCurrentlyViewedEventIndex() {
    let e = this.m_refScroll.current;
    if (!this.m_refContent.current || !e) return -1;
    let t = this.m_refContent.current.children,
      n = this.GetScrollTopForComparison(e);
    for (let e = 0; e < t.length; e++) {
      let r = t[e],
        i = r.offsetTop,
        a = i + r.clientHeight;
      if (i <= n && a > n) return e;
    }
    return -1;
  }
  GetPaddingTop() {
    return this.props.showAppHeader ? da : ua;
  }
  GetScrollTopForComparison(e) {
    return Math.ceil(e.scrollTop + this.GetPaddingTop() + 24);
  }
  ScrollToEvent(e) {
    let t = this.m_refContent.current;
    if (!t || e < 0 || e >= t.children.length || this.m_scrollAnimation) return;
    let n = t.children[e].offsetTop - this.GetPaddingTop();
    this.ScrollToOffset(n);
  }
  ScrollToOffset(e) {
    let t = this.m_refScroll.current;
    if (!t) return;
    let n = {
      msDuration: 500,
      timing: `cubic-in-out`,
      onComplete: this.OnScrollComplete,
    };
    (this.m_scrollAnimation = new fe(t, { scrollTop: e }, n)),
      this.m_scrollAnimation.Start();
  }
  ScrollToBottom() {
    this.m_refScroll.current &&
      this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
  }
  ScrollToNextEvent() {
    let e = this.m_loader.GetEvents(),
      t = this.FindCurrentlyViewedEventIndex() + 1;
    t >= e.length
      ? this.ScrollToBottom()
      : (this.ScrollToEvent(t),
        t == e.length - 1 && this.m_loader.LoadMoreAtEnd());
  }
  ScrollToPrevEvent() {
    let e = this.FindCurrentlyViewedEventIndex(),
      t = e - 1;
    if (t < 0) {
      this.ScrollToOffset(0);
      return;
    }
    let n = this.m_refContent.current,
      r = this.m_refScroll.current;
    if (n && r) {
      let i = n.children[e],
        a = i.offsetTop,
        o = a + i.clientHeight,
        s = this.GetScrollTopForComparison(r);
      (s -= (o - a) * 0.3), a <= s && (t = e);
    }
    this.ScrollToEvent(t);
  }
  OnScrollComplete() {
    this.m_scrollAnimation = null;
  }
  Close() {
    this.props.closeModal && this.props.closeModal();
  }
  OnBackgroundClick(e) {
    e.currentTarget == e.target && this.Close();
  }
  OnKeyDown(e) {
    e.keyCode == 27 && this.Close();
  }
  OnScroll(e) {
    if (this.props.bShowOnlyInitialEvent) return;
    let t = this.m_refScroll.current;
    if (!t) return;
    let n = t.clientHeight;
    t.scrollHeight - (t.scrollTop + n) <= n && this.m_loader.LoadMoreAtEnd(),
      t.scrollTop <= n && this.m_loader.LoadMoreAtBeginning();
  }
  getSnapshotBeforeUpdate(e) {
    let t = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
    if (((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !t))
      return null;
    let n = this.m_refScroll.current;
    if (!n || !this.m_refScrollAnchor.current) return null;
    let r = this.m_refScrollAnchor.current.GetDOM();
    return r ? r.offsetTop - n.scrollTop : null;
  }
  OnTouchStart(e) {
    e.touches.length == 1 && (this.m_nTouchStartClientY = e.touches[0].clientY);
  }
  OnTouchMove(e) {
    if (!this.m_refScroll.current || e.touches.length == 0) return;
    let t = 0;
    this.m_nTouchStartClientY !== void 0 &&
      (t = this.m_nTouchStartClientY - e.touches[0].clientY),
      this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t);
  }
  OnWheel(e) {
    this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, e.deltaY);
  }
  SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t) {
    let n = this.m_refScroll.current;
    if (!n) return;
    let r = re(e.target) && S(n, e.target),
      i = t < 0 && n.scrollTop < 1,
      a = n.scrollHeight - n.scrollTop <= n.clientHeight;
    (!r || i || (t > 0 && a)) && e.cancelable && e.preventDefault();
  }
  SetGlobalHeaderHidden(t) {
    let n = document.getElementsByClassName(`responsive_header`);
    e(n.length <= 1, `Must have at most one responsive_header`),
      n.length >= 1 && (n[0].style.display = t ? `none` : ``);
  }
  SetFooterPinnedToBottom(e) {
    let t = document.getElementById(`footer`);
    t && (t.style.position = e ? `absolute` : ``);
  }
  componentDidMount() {
    let e = this.m_refScroll.current;
    e && !S(e, e.ownerDocument.activeElement) && e.focus();
    let t = this.m_refPage.current;
    t &&
      (t.addEventListener(`touchstart`, this.OnTouchStart),
      t.addEventListener(`touchmove`, this.OnTouchMove, { passive: !1 }),
      t.addEventListener(`wheel`, this.OnWheel, { passive: !1 })),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
      this.SetFooterPinnedToBottom(!0);
  }
  componentDidUpdate(e, t, n) {
    if (n === null) return;
    let r = this.m_refScroll.current;
    if (!r) return;
    S(r, r.ownerDocument.activeElement) || r.focus();
    let i = this.m_refScrollAnchor.current
      ? this.m_refScrollAnchor.current.GetDOM()
      : null;
    i && (r.scrollTop = i.offsetTop - n);
  }
  componentWillUnmount() {
    let e = this.m_refPage.current;
    e &&
      (e.removeEventListener(`touchstart`, this.OnTouchStart),
      e.removeEventListener(`touchmove`, this.OnTouchMove),
      e.removeEventListener(`wheel`, this.OnWheel)),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
      this.SetFooterPinnedToBottom(!1);
  }
  render() {
    let { initialEvent: e, bShowOnlyInitialEvent: n } = this.props,
      r = !e,
      i = e ? (n ? [e] : this.m_loader.GetEvents()) : [],
      a = [],
      o = this.props.appid,
      s = this.props.clanSteamID?.GetAccountID();
    for (let t of i) {
      let n = e !== void 0 && t.GID == e.GID,
        r = n;
      a.push(
        (0, H.jsx)(
          ha,
          {
            ref: n ? this.m_refScrollAnchor : null,
            event: t,
            emoticonStore: this.props.emoticonStore,
            partnerEventStore: this.props.partnerEventStore,
            disableReadTracking: n,
            fnFilterImageURLsForKnownFailures:
              this.props.fnFilterImageURLsForKnownFailures,
            fnImageFailureCallback: this.props.fnImageFailureCallback,
            bDisableBroadcastPlayer: !r,
            className: this.props.eventClassName,
          },
          t.GID,
        ),
      ),
        (o ??= t.appid),
        (s ??= t.clanSteamID.GetAccountID());
    }
    return (
      (this.m_nCurrentRenderCount = a.length),
      (0, H.jsxs)(A, {
        onCancelButton: this.props.closeModal,
        className: Ci,
        ref: this.m_refPage,
        children: [
          this.props.showAppHeader &&
            (0, H.jsx)(oa, { appId: o ?? 0, clanId: s ?? 0 }),
          (0, H.jsx)(A, {
            className: t(Ei, void 0),
            ref: this.m_refScroll,
            onScroll: this.OnScroll,
            onClick: this.OnBackgroundClick,
            tabIndex: -1,
            onKeyDown: this.OnKeyDown,
            scrollIntoViewType: C.NoTransformSparseContent,
            children: r
              ? (0, H.jsx)(`div`, {
                  className: Oi,
                  children: M(`#EventDisplay_NoEventsToSee`),
                })
              : (0, H.jsxs)(H.Fragment, {
                  children: [
                    (0, H.jsx)(`div`, {
                      className: t(
                        Ti,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                        n && `LIm3FCjFgqo-`,
                      ),
                      children: (0, H.jsx)(`div`, {
                        className: Ki,
                        children: (0, H.jsxs)(`div`, {
                          className: qi,
                          children: [
                            !!this.props.closeModal &&
                              (0, H.jsx)(`div`, {
                                className: t(`TlGGn2-aFiY-`, `ibKXDplBVRg-`),
                                onClick: this.Close,
                                children: (0, H.jsx)(de, {}),
                              }),
                            !n &&
                              (0, H.jsx)(`div`, {
                                className: t(
                                  `QHtC9T0nSOI-`,
                                  `yPve79a1Qm0-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToPrevEvent,
                                children: (0, H.jsx)(me, { angle: 0 }),
                              }),
                            !n &&
                              (0, H.jsx)(`div`, {
                                className: t(
                                  `QHtC9T0nSOI-`,
                                  `_4Lwn5F4-kiE-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToNextEvent,
                                children: (0, H.jsx)(me, { angle: 180 }),
                              }),
                            this.props.onAppIconClick &&
                              (0, H.jsx)(pa, {
                                appid: o,
                                clanID: s ?? 0,
                                onAppIconClick: this.props.onAppIconClick,
                              }),
                          ],
                        }),
                      }),
                    }),
                    !n &&
                      (0, H.jsx)(ma, {
                        loader: this.m_loader,
                        location: `top`,
                      }),
                    (0, H.jsx)(`div`, {
                      ref: this.m_refContent,
                      className: t(
                        Ui,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                      ),
                      children: a,
                    }),
                    !n &&
                      (0, H.jsx)(ma, {
                        loader: this.m_loader,
                        location: `bottom`,
                      }),
                  ],
                }),
          }),
        ],
      })
    );
  }
};
g([T], K.prototype, `ScrollToNextEvent`, null),
  g([T], K.prototype, `ScrollToPrevEvent`, null),
  g([T], K.prototype, `OnScrollComplete`, null),
  g([T], K.prototype, `Close`, null),
  g([T], K.prototype, `OnBackgroundClick`, null),
  g([T], K.prototype, `OnKeyDown`, null),
  g([T], K.prototype, `OnScroll`, null),
  g([T], K.prototype, `OnTouchStart`, null),
  g([T], K.prototype, `OnTouchMove`, null),
  g([T], K.prototype, `OnWheel`, null),
  (K = g([I], K));
var ma = I((e) => {
    let t = e.loader.GetNewerState(),
      n = e.loader.GetOlderState();
    return t == 2 && n == 2
      ? null
      : (e.location == `top` ? t : n) == 2
        ? (0, H.jsx)(`div`, {
            className: Zi,
            children: (0, H.jsx)(B, {
              position: `center`,
              string: M(`#Loading`),
            }),
          })
        : null;
  }),
  ha = V.forwardRef(function (e, t) {
    let n = o(),
      [r, i] = Cn(e.event.appid, { include_assets: !0 }),
      a = ft(e.event.appid),
      s = sn();
    return (0, H.jsx)(q, {
      ref: t,
      ...e,
      bInGamepadUI: n,
      bShouldMaskImages: a,
      storeItem: r,
      tracker: s,
    });
  }),
  q = class extends V.Component {
    m_refContent = V.createRef();
    m_sendReadInfo = new te();
    m_bSentRead = !1;
    OnEnterVisible() {
      this.m_bSentRead ||
        this.m_sendReadInfo.IsScheduled() ||
        this.m_sendReadInfo.Schedule(750, () => {
          this.props.tracker.RecordEventRead(this.props.event, 4),
            (this.m_bSentRead = !0);
        });
    }
    OnLeaveVisible() {
      this.m_sendReadInfo.Cancel();
    }
    GetDOM() {
      return this.m_refContent.current;
    }
    render() {
      let {
          event: e,
          langOverride: n,
          partnerEventStore: r,
          emoticonStore: i,
          className: a,
          additionalTypeAndDateElement: o,
          headerClassnames: s,
          isPreview: c,
          bShouldMaskImages: l,
          storeItem: u,
        } = this.props,
        d = n || m(v.LANGUAGE),
        f = e.GetDescriptionWithFallback(d) || ``,
        p = s,
        h = e.GetCategoryAsString(),
        g = e.type,
        _ = ``;
      e.appid
        ? (_ = u?.GetName() || ``)
        : e.clanSteamID &&
          (_ =
            Dn.GetClanInfoByClanAccountID(e.clanSteamID.GetAccountID())
              ?.group_name ?? ``);
      let y = Nt.GetTimeNowWithOverride(),
        b = g !== 28 && y < e.GetStartTimeAndDateUnixSeconds() && !c,
        x = null;
      return (
        e.jsondata.bSaleEnabled && e.jsondata.sale_vanity_id && (x = rn(e)),
        (0, H.jsx)(la, {
          children: (0, H.jsxs)(`div`, {
            ref: this.m_refContent,
            className: t(a, Wi, mr, p == `editor` ? hr : ``),
            children: [
              (0, H.jsx)(ga, { ...this.props, eLanguage: d }),
              (0, H.jsx)(`div`, {
                className: gr,
                children: (0, H.jsxs)(`div`, {
                  className: xr,
                  children: [
                    this.props.headerElement,
                    (0, H.jsxs)(`div`, {
                      className: t(Qi, b && `EL3MaVqCn0g-`),
                      children: [
                        (0, H.jsxs)(`div`, {
                          className: $i,
                          children: [
                            (0, H.jsx)(`span`, { className: ea, children: h }),
                            (0, H.jsxs)(`span`, {
                              className: ta,
                              children: [
                                ` `,
                                M(`#EventDisplay_PostedBy`),
                                _,
                                ` `,
                              ],
                            }),
                            (0, H.jsx)(ir, { event: e, className: vr }),
                          ],
                        }),
                        b &&
                          !c &&
                          (0, H.jsx)(`div`, {
                            className: `Q4ZSdOUuSKg-`,
                            children: (0, H.jsx)(wt, {
                              eventModel: e,
                              lang: d,
                              bExpandLeft: !0,
                            }),
                          }),
                        !c && o,
                      ],
                    }),
                    !this.props.disableReadTracking &&
                      !c &&
                      (0, H.jsx)(Bt, {
                        onEnter: this.OnEnterVisible,
                        onLeave: this.OnLeaveVisible,
                        options: { rootMargin: `0px 0px -300px 0px` },
                      }),
                    this.props.bInGamepadUI
                      ? (0, H.jsx)(`div`, {
                          className: br,
                          children: e.GetNameWithFallback(d),
                        })
                      : (0, H.jsx)(Qt, {
                          eventModel: e,
                          route: $t.k_eView,
                          className: br,
                          children: e.GetNameWithFallback(d),
                        }),
                    e.BHasSubTitle(d) &&
                      (0, H.jsx)(`div`, {
                        className: t(`ay-K0NBOIuc-`, `ID9Ds4YdxDc-`),
                        children: e.GetSubTitle(d),
                      }),
                    (0, H.jsx)(`div`, { className: _r }),
                  ],
                }),
              }),
              !(
                !e.BEventCanShowBroadcastWidget() ||
                this.props.bDisableBroadcastPlayer
              ) &&
                (0, H.jsx)(`div`, {
                  className: `hSFWQBRmqTY-`,
                  children: (0, H.jsx)(V.Suspense, {
                    fallback: null,
                    children: (0, H.jsx)(fa, { event: this.props.event }),
                  }),
                }),
              e.BHasTag(`steam_award_nomination_request`) &&
                (0, H.jsx)(xi, { event: e, lang: d }),
              e.BHasTag(`steam_award_vote_request`) &&
                (0, H.jsx)(Si, {
                  appID: e.appid,
                  bIsEventActionEnabled: e.BIsEventActionEnabled(),
                  voteCategories: e.GetSteamAwardNomineeCategories(),
                }),
              (0, H.jsxs)(`div`, {
                className: Sr,
                children: [
                  (0, H.jsxs)(`div`, {
                    className: t(yr, Gi, l && `Vye1545x6hY-`),
                    onContextMenu: v.IN_CLIENT ? he : void 0,
                    children: [
                      (0, H.jsx)(Ct, { text: f, event: e }),
                      (0, H.jsx)(`span`, { className: It }),
                    ],
                  }),
                  (0, H.jsx)(ca, { event: this.props.event }),
                  !!e.jsondata.read_more_link &&
                    (0, H.jsx)(`div`, {
                      className: t(`Hr-OMRnVpqk-`),
                      children: (0, H.jsx)(ye, {
                        className: t(`yYL-OrX9PtQ-`),
                        href: e.jsondata.read_more_link,
                        children: M(`#EventEmail_Button_ClickForMoreDetails`),
                      }),
                    }),
                  x && (0, H.jsx)(wn, { event: e, language: d, strSaleURL: x }),
                  (0, H.jsx)(Gn, { appid: e.appid }),
                ],
              }),
              !c && (0, H.jsx)(pr, { eventModel: e, emoticonStore: i }),
            ],
          }),
        })
      );
    }
  };
g([T], q.prototype, `OnEnterVisible`, null),
  g([T], q.prototype, `OnLeaveVisible`, null),
  (q = g([I], q));
function ga(e) {
  let {
      event: n,
      fnFilterImageURLsForKnownFailures: r,
      fnImageFailureCallback: i,
      eLanguage: a,
      bShouldMaskImages: o,
    } = e,
    s = n.BImageNeedScreenshotFallback(`background`, a),
    c = n.type,
    l = en(n, `background`, a, Vt.background_main, !s);
  return (
    r && l && (l = r(l)),
    (0, H.jsxs)(H.Fragment, {
      children: [
        c != 12 &&
          !s &&
          l &&
          (0, H.jsx)(qt, {
            className: t(`b5t8fHKcG3c-`, o && `Vye1545x6hY-`),
            rgSources: l,
            onIncrementalError: (e, t, n) => i && i(t),
          }),
        l &&
          l.length > 0 &&
          (0, H.jsx)(qt, {
            className: `V-UPj6R9FQU-`,
            rgSources: l,
            onIncrementalError: (e, t, n) => i && i(t),
          }),
      ],
    })
  );
}
var J = class {
  k_nMaxPerDirection = 3;
  m_nAppID = 0;
  m_clanSteamID = new E();
  m_partnerEventStore;
  m_additionalParams;
  m_rgEvents = [];
  m_eOlderDirection = 1;
  m_eNewerDirection = 1;
  constructor(e) {
    x(this), (this.m_partnerEventStore = e);
  }
  GetEvents() {
    return this.m_rgEvents;
  }
  GetAppID() {
    return this.m_nAppID;
  }
  GetOlderState() {
    return this.m_eOlderDirection;
  }
  GetNewerState() {
    return this.m_eNewerDirection;
  }
  async InitAroundEvent(e, t) {
    let n = this.m_partnerEventStore;
    (this.m_nAppID = e.appid),
      (this.m_clanSteamID = e.clanSteamID),
      (this.m_rgEvents = []),
      (this.m_eOlderDirection = 2),
      (this.m_eNewerDirection = 2),
      (this.m_additionalParams = t),
      this.m_rgEvents.push(e);
    let r;
    try {
      r = await n.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    c(() => {
      if (!r || r.length == 0) {
        (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
        return;
      }
      let t = r.findIndex((t) => t.GID == e.GID),
        n = t,
        i = t >= 0 ? r.length - t - 1 : 0;
      (this.m_eNewerDirection = n >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_eOlderDirection = i >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_rgEvents = r);
    });
  }
  async LoadMoreAtEnd() {
    if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0) return;
    let e = this.m_rgEvents[this.m_rgEvents.length - 1];
    this.m_eOlderDirection = 2;
    let t;
    try {
      t = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        0,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    c(() => {
      if (!t) {
        this.m_eOlderDirection = 1;
        return;
      }
      let e = new Set(
        this.m_rgEvents.map((e) => e.GID).filter((e) => e !== void 0),
      );
      for (let n of t) {
        let t = n.GID;
        t && !e.has(t) && (this.m_rgEvents.push(n), e.add(t));
      }
      this.m_eOlderDirection = t.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
  async LoadMoreAtBeginning() {
    if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0) return;
    let e = this.m_rgEvents[0];
    this.m_eNewerDirection = 2;
    let t;
    try {
      t = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        0,
        this.m_additionalParams,
      );
    } catch {}
    c(() => {
      if (!t) {
        this.m_eNewerDirection = 1;
        return;
      }
      let e = new Set(
        this.m_rgEvents.map((e) => e.GID).filter((e) => e !== void 0),
      );
      for (let n of t.reverse()) {
        let t = n.GID;
        t && !e.has(t) && (this.m_rgEvents.unshift(n), e.add(t));
      }
      this.m_eNewerDirection = t.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
};
g([s.shallow], J.prototype, `m_rgEvents`, void 0),
  g([s], J.prototype, `m_eOlderDirection`, void 0),
  g([s], J.prototype, `m_eNewerDirection`, void 0);
var _a = `rde3mdS-0gs-`,
  Y = class extends V.Component {
    m_refFocus = V.createRef();
    componentDidMount() {
      this.props.fnClose &&
        (document.addEventListener(`keydown`, this.escFunction, !1),
        this.m_refFocus.current && this.m_refFocus.current.focus());
    }
    componentWillUnmount() {
      this.props.fnClose &&
        document.removeEventListener(`keydown`, this.escFunction, !1);
    }
    escFunction(e) {
      let { fnClose: t } = this.props;
      e.keyCode === 27 && t && t();
    }
    OnBackgroundClick(e) {
      e.currentTarget == e.target && this.props.fnClose();
    }
    render() {
      let { event: e, langOverride: t, isPreview: n } = this.props;
      return (0, H.jsx)(`div`, {
        ref: this.m_refFocus,
        className: _a,
        onClick: this.OnBackgroundClick,
        children: (0, H.jsx)(pt, {
          children: (r) =>
            (0, H.jsx)(
              ha,
              {
                event: e,
                emoticonStore: r,
                partnerEventStore: tr.Get(),
                langOverride: t,
                isPreview: n,
                bDisableBroadcastPlayer: !1,
              },
              e.GID,
            ),
        }),
      });
    }
  };
g([T], Y.prototype, `escFunction`, null),
  g([T], Y.prototype, `OnBackgroundClick`, null),
  (Y = g([I], Y));
var va = `CTh2D28nj8Q-`,
  ya = `_6Et65dUyXmI-`,
  ba = `TBpCjwaivo4-`,
  X = `-Urbozaex6s-`,
  xa = `AYbtJ9DA7uU-`,
  Sa = `XZHfMZLM7tM-`,
  Ca = `xk6vmwmD3BM-`,
  wa = `neOqhFSqLO8-`,
  Ta = `C5kHz9cc0K0-`,
  Ea = `oPGMCygHHh0-`,
  Da = `mo2X-m4G2ys-`,
  Oa = `dYc6Nn92nTE-`,
  ka = `WZTIyyqGj5Y-`,
  Aa = `I8FUFDEdBBQ-`,
  ja = `j--bxoLFoRE-`,
  Ma = `LI7jBrVgsdQ-`,
  Na = `fA-iphd52gs-`,
  Pa = `tsini7TOK8c-`,
  Fa = `uM-vzMkUMTY-`,
  Ia = `zwvQr7NqKZg-`;
function Z(e, t, n) {
  let r = e && e.length > n ? [...e] : ee(e || [], n + 1, ``);
  return (r[n] = t), r;
}
function Q(e, t) {
  return (e && e.length > t && e[t]) || ``;
}
function La(e, t) {
  let n = !1,
    r = !1;
  for (let i = 0; i < 32; i++) {
    let a = Q(e, i).trim(),
      o = Q(t, i).trim();
    if (!a && !o) continue;
    let s = M(`#Language_` + p(i));
    if (((n = !0), !a)) return M(`#BuildNotes_Error_MissingTitle`, s);
    if (!o) return M(`#BuildNotes_Error_MissingDescription`, s);
    if (a.length > 80) return M(`#BuildNotes_Error_TitleTooLong`, s);
    if (o.length > 32768) return M(`#BuildNotes_Error_DescriptionTooLong`, s);
    i === 0 && (r = !0);
  }
  return n
    ? r
      ? null
      : M(`#BuildNotes_Error_NoEnglishProvided`)
    : M(`#BuildNotes_Error_NoLanguagesProvided`);
}
async function Ra(e, t, n) {
  if (La(t, n)) return null;
  let r = !!Q(t, 29).trim(),
    i = new FormData();
  i.append(`sessionid`, u()),
    i.append(`appid`, `` + e),
    i.append(`post_steam_china`, `` + r),
    i.append(`titles`, JSON.stringify(t)),
    i.append(`descriptions`, JSON.stringify(n)),
    i.append(`build_id`, `` + $.Get().GetPostedBuildVersion()),
    i.append(`build_branch`, $.Get().GetBuildBranch());
  let a = v.PARTNER_BASE_URL + `partnerevents/ajaxpublishpatchnotes`;
  try {
    let e = await zn.default.post(a, i, { withCredentials: !0 });
    if (e?.data?.success == 1) return e.data;
    console.error(
      `buildpatchnotes: OnSubmitCreateEvent error code  ` +
        e?.data?.success +
        ` msg: ` +
        e?.data?.msg,
    );
  } catch (e) {
    let t = yt(e);
    console.error(`buildpatchnotes: OnSubmitCreateEvent ` + t.strErrorMsg, t);
  }
  return null;
}
function za(e, t) {
  let n = new Ht();
  (n.GID = `PreviewPartnerEventRow_0`),
    (n.clanSteamID = new E(b.steamid)),
    (n.postTime = Date.now() / 1e3),
    (n.startTime = Date.now() / 1e3),
    (n.createTime = Date.now() / 1e3),
    (n.type = 12);
  for (let r = 0; r < 32; r++)
    n.name.set(r, Q(e, r)), n.description.set(r, Q(t, r));
  return n;
}
function Ba() {
  let e = new URLSearchParams(window.location.search);
  e.delete(`submittedbuild`), e.delete(`buildbranch`);
  let t = e.toString(),
    n =
      window.location.origin +
      window.location.pathname +
      (t ? `?` + t : ``) +
      window.location.hash;
  window.history.replaceState({}, ``, n);
}
var $ = class e {
  m_nBuildVersion;
  m_bSteamChina;
  m_strBuildBranch;
  static s_Singleton;
  static Get() {
    return (
      this.s_Singleton ||
        ((this.s_Singleton = new e()), this.s_Singleton.Init()),
      this.s_Singleton
    );
  }
  Init() {
    let e = d(`build_notes`, `application_config`);
    (this.m_nBuildVersion = e?.build_version || 0),
      (this.m_bSteamChina = e?.steam_china || !1),
      (this.m_strBuildBranch = e?.build_branch || ``),
      (this.m_strBuildBranch = this.m_strBuildBranch
        .trim()
        .toLocaleLowerCase()),
      this.m_strBuildBranch === "default" && (this.m_strBuildBranch = ``);
  }
  GetPostedBuildVersion() {
    return this.m_nBuildVersion;
  }
  BShouldShowPatchNotesEditor() {
    return this.GetPostedBuildVersion() > 0;
  }
  BCanSubmitSteamChinaPatchNotes() {
    return this.m_bSteamChina;
  }
  GetBuildBranch() {
    return this.m_strBuildBranch;
  }
};
function Va(e) {
  let [t, n] = V.useState(0),
    [r, i] = V.useState(null),
    [a, o] = V.useState(null),
    [s, c] = V.useState(null),
    [l, u] = V.useState(`editing`),
    [d, f] = V.useState(null);
  if (!$.Get().BShouldShowPatchNotesEditor()) return null;
  let p = (e) => n(e),
    m = () => c(za(r, a)),
    g = (e) => !!(Q(r, e) || Q(a, e)),
    _ = () => c(null),
    y = async () => {
      c(null), u(`submitting`);
      let t = await Ra(e.appId, r, a);
      t ? (f(t.clan_event_gid), Ba(), u(`submitted`)) : u(`failed`);
    },
    b = (e, t) => {
      let n = [],
        s = r,
        c = a;
      for (let r of t) {
        let t = e.GetLocalization(`Title`, r) || ``,
          i = e.GetLocalization(`Description`, r) || ``;
        (t || i) && n.push(r), t && (s = Z(s, t, r)), i && (c = Z(c, i, r));
      }
      return i(s), o(c), n;
    },
    x = $.Get().BCanSubmitSteamChinaPatchNotes()
      ? [h.k_ESteamRealmChina, h.k_ESteamRealmGlobal]
      : [h.k_ESteamRealmGlobal],
    S = La(r, a),
    C = v.COMMUNITY_BASE_URL + `ogg/` + e.appId + `/partnerevents/create/`;
  return (0, H.jsxs)(ie, {
    children: [
      (0, H.jsxs)(`div`, {
        className: va,
        children: [
          (0, H.jsx)(`div`, {
            className: xa,
            children: M(
              `#BuildNotes_Title`,
              $.Get().GetPostedBuildVersion(),
              $.Get().GetBuildBranch() || `default`,
            ),
          }),
          (0, H.jsxs)(`div`, {
            className: ya,
            children: [
              (0, H.jsxs)(`div`, {
                className: ba,
                children: [
                  (0, H.jsx)(`div`, {
                    className: Sa,
                    children: M(`#BuildNotes_SubTitle`),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Ca,
                    children: M(`#BuildNotes_Desc1`),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Ca,
                    children: Te(`#BuildNotes_Desc2`),
                  }),
                  (0, H.jsx)(`a`, {
                    href: C,
                    children: (0, H.jsx)(j, {
                      children: M(`#BuildNotes_OpenFullEditor`),
                    }),
                  }),
                ],
              }),
              l === `editing` &&
                (0, H.jsx)(Ha, {
                  sError: S,
                  eLanguage: t,
                  realms: x,
                  fnHasLanguage: g,
                  fnSetLanguage: p,
                  fnGetTitle: (e) => Q(r, e),
                  fnSetTitle: (e, t) => i(Z(r, t, e)),
                  fnGetDescription: (e) => Q(a, e),
                  fnSetDescription: (e, t) => o(Z(a, t, e)),
                  fnOnPreviewEvent: m,
                  fnApplyLoc: b,
                }),
              l === `submitting` && (0, H.jsx)(Wa, {}),
              l === `failed` &&
                (0, H.jsx)(Ga, { fnOnReturnToEditor: () => u(`editing`) }),
              l === `submitted` &&
                (0, H.jsx)(Ka, { appId: e.appId, eventGid: d }),
            ],
          }),
        ],
      }),
      !!(s && l === `editing`) &&
        (0, H.jsx)(Ua, {
          event: s,
          eLanguage: t,
          realms: x,
          fnOnClose: _,
          fnOnSubmitEvent: y,
          fnHasLanguage: g,
          fnSetLanguage: p,
        }),
    ],
  });
}
var Ha = (e) => {
    let {
        sError: t,
        eLanguage: n,
        realms: r,
        fnHasLanguage: i,
        fnSetLanguage: a,
        fnGetTitle: o,
        fnSetTitle: s,
        fnGetDescription: c,
        fnSetDescription: l,
        fnOnPreviewEvent: u,
        fnApplyLoc: d,
      } = e,
      f = mt(),
      p = ``;
    if (r.includes(h.k_ESteamRealmChina)) {
      let e = o(29).trim() !== ``;
      p = M(
        e
          ? `#BuildNotes_SteamChina_Provided`
          : `#BuildNotes_SteamChina_NotProvided`,
      );
    }
    return (0, H.jsxs)(`div`, {
      className: X,
      children: [
        (0, H.jsxs)(`div`, {
          className: wa,
          children: [
            (0, H.jsx)(`div`, {
              className: Ea,
              children: M(`#BuildNotes_PatchnotesTitle`),
            }),
            (0, H.jsxs)(`div`, {
              className: Ta,
              children: [
                (0, H.jsx)(j, {
                  onClick: () => {
                    let e = new Et(),
                      t = M(`#BuildNotes_SampleTitle`),
                      n = M(`#BuildNotes_SampleDescription`);
                    for (let r = 0; r < 32; r++)
                      e.SetLocalization(`Title`, r, t),
                        e.SetLocalization(`Description`, r, n);
                    P(
                      (0, H.jsx)(kt, {
                        sampleLocData: e,
                        sampleFilename: `patchnote_loc_sample`,
                        fnOnImportLocData: d,
                      }),
                      window,
                    );
                  },
                  children: M(`#BuildNotes_ImportLocalization`),
                }),
                (0, H.jsx)(On, {
                  selectedLang: n,
                  fnOnLanguageChanged: a,
                  fnLangHasData: i,
                  realms: r,
                }),
              ],
            }),
          ],
        }),
        (0, H.jsx)(ue, {
          value: o(n),
          placeholder: M(`#BuildNotes_TitlePlaceholder`),
          onChange: (e) => s(n, e.currentTarget.value),
          maxLength: 80,
        }),
        (0, H.jsx)(`div`, {
          className: Ea,
          children: M(`#BuildNotes_PatchnotesDesc`),
        }),
        (0, H.jsx)(tn, {
          fnGetCurText: () => c(n),
          fnOnTextChange: (e) => l(n, e.currentTarget.value),
          fnSetText: (e) => l(n, e),
          strPlaceholder: M(`#BuildNotes_DescPlaceholder`),
          emoticonStore: f,
          bSupportHTMLImport: !0,
          showFormatHelp: `PartnerEvents`,
          classNameForTextArea: Oa,
        }),
        (0, H.jsxs)(`div`, {
          className: Da,
          children: [
            !t &&
              (0, H.jsx)(Pe, {
                onClick: u,
                children: M(`#BuildNotes_Preview`),
              }),
            !!t &&
              (0, H.jsx)(`div`, { className: `eCw9BjENLEs-`, children: t }),
            !(t || !p) &&
              (0, H.jsx)(`div`, { className: `g83gI4cYpmo-`, children: p }),
          ],
        }),
      ],
    });
  },
  Ua = (e) => {
    let {
      event: t,
      eLanguage: n,
      realms: r,
      fnOnClose: i,
      fnOnSubmitEvent: a,
      fnHasLanguage: o,
      fnSetLanguage: s,
    } = e;
    return (0, H.jsxs)(gt, {
      children: [
        (0, H.jsxs)(`div`, {
          className: ka,
          children: [
            (0, H.jsx)(On, {
              selectedLang: n,
              fnOnLanguageChanged: s,
              fnFilterLanguage: o,
              realms: r,
            }),
            (0, H.jsxs)(`div`, {
              className: Da,
              children: [
                (0, H.jsx)(j, { onClick: i, children: M(`#BuildNotes_Close`) }),
                (0, H.jsx)(Pe, {
                  onClick: a,
                  children: M(`#BuildNotes_PostNotes`),
                }),
              ],
            }),
          ],
        }),
        (0, H.jsx)(`div`, {
          children: (0, H.jsx)(Y, {
            event: t,
            fnClose: i,
            langOverride: n,
            isPreview: !0,
          }),
        }),
      ],
    });
  },
  Wa = (e) =>
    (0, H.jsxs)(`div`, {
      className: t(X, Aa),
      children: [
        (0, H.jsx)(B, { className: ja }),
        (0, H.jsx)(`div`, {
          className: void 0,
          children: M(`#BuildNotes_Submitting`),
        }),
      ],
    }),
  Ga = (e) =>
    (0, H.jsxs)(`div`, {
      className: t(X, Pa),
      children: [
        (0, H.jsx)(`div`, {
          className: Fa,
          children: M(`#BuildNotes_FailedDescription`),
        }),
        (0, H.jsx)(`div`, {
          className: Ia,
          children: (0, H.jsx)(j, {
            onClick: e.fnOnReturnToEditor,
            children: M(`#BuildNotes_ReturnToEditor`),
          }),
        }),
      ],
    }),
  Ka = (e) => {
    let { appId: n, eventGid: r } = e,
      i = `${v.STORE_BASE_URL}news/app/${n}/view/${r}`;
    return (0, H.jsxs)(`div`, {
      className: t(X, Ma),
      children: [
        (0, H.jsx)(`div`, {
          className: void 0,
          children: M(`#BuildNotes_Success`),
        }),
        (0, H.jsx)(`a`, {
          href: i,
          className: Na,
          children: (0, H.jsx)(j, { children: M(`#BuildNotes_ViewPublished`) }),
        }),
      ],
    });
  };
export { Va as default };

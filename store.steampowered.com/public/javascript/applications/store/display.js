/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import {
  Lt as n,
  dt as r,
  ft as i,
  ot as a,
  st as o,
  u as s,
} from "./libraries.js";
import { t as c } from "./throbber.js";
import { n as l } from "./saletechredirectsignin.js";
import { t as u } from "./moment.js";
import { t as d } from "./eventtimeoverridecontext.js";
import { C as f } from "./partnereventshared.module.js";
import { n as p, t as m } from "./steammessages_storesales_pb.js";
import "./steammessages_quest_pb.js";
import { n as h, r as g } from "./eventadminpanel.js";
import {
  Cl as _,
  En as v,
  Gb as y,
  Hb as b,
  Jb as ee,
  Pi as x,
  Sc as S,
  Vc as te,
  iy as C,
  kv as w,
  pn as T,
  rr as ne,
  wc as E,
  wv as D,
  xb as O,
} from "./main.js";
import { i as re, n as ie, r as ae, t as oe } from "./event.js";
var k = e(n(), 1),
  A = e(u(), 1),
  se = {};
function ce(e) {
  return se[e];
}
((0, A.default)(`2026-11-23T09:30:00-08:00`).unix(),
  (0, A.default)(`2026-11-30T10:00:00-08:00`).unix());
function j() {
  return 2025;
}
function M(e) {
  return `${b.MEDIA_CDN_URL}store/promo/${e}`;
}
function le() {
  return {
    strBackgroundColor: `#000000`,
    strBackgroundImageURL: M(`steamawards2026/page_tile.svg?v=1`),
    strTrophyImageURL: M(`steamawards2026/trophy_220.png?v=1`),
    strButtonBGColor: `#ffd979`,
    strButtonTextColor: `#000000`,
    strTextColor: `#ffd979`,
    strCategoryTextColor: `#ffffff`,
    strTitleColor: `#ffd979`,
    rgCategoryBackgrounds: ce(j())?.mapCategoryColors ?? {},
    strFallbackCategoryBGColor: `#000000`,
  };
}
function ue() {
  return `${b.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
}
((0, A.default)(`2026-12-17T09:30:00-08:00`).unix(),
  (0, A.default)(`2027-01-02T10:00:00-08:00`).unix());
var N = 5350740;
function P(e, t) {
  return e.BIsEventActionEnabled(t) || t < e.GetStartTimeAndDateUnixSeconds();
}
function de(e, t, n, r) {
  let i = I(e, t),
    a = I(e, n);
  if (i.length || a.length)
    return {
      nomination: i.length ? { rgCategories: i, bNominationsLive: r } : void 0,
      vote: a.length ? { rgCategories: a, bNominationsLive: r } : void 0,
    };
}
function F(e) {
  return e > 0;
}
function I(e, t) {
  let n = [];
  for (let r of t.filter(F)) {
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
function L(e) {
  return [`SteamAwards.GetUserNominations`, e];
}
function R(e) {
  return [`StoreSales.GetUserVotes`, e, N];
}
function z(e, t) {
  let n = r(),
    i = L(y.accountid),
    { data: s, isPending: c } = o({
      queryKey: i,
      queryFn: async () => await t.GetMySteamAwardNominations(),
      enabled: !!y.accountid,
    }),
    { mutate: l } = a({
      mutationFn: async (n) => {
        let r = await t.NominateForSteamAward(n, e);
        if (r != 1)
          throw Error(
            `SteamAwards.Nominate failed with ${r} for ${e} and appid ${n}`,
          );
      },
      onMutate: (t) =>
        n.setQueryData(i, (n) => [
          ...(n ?? []).filter((t) => t.category_id != e),
          { category_id: e, appid: t },
        ]),
      onError: () => n.invalidateQueries({ queryKey: i }),
    });
  return {
    unNominatedAppID: s?.find((t) => t.category_id == e)?.appid,
    bAnswered: s != null || !y.accountid || !c,
    Nominate: l,
  };
}
function B(e, t) {
  let n = r(),
    i = R(y.accountid),
    { data: s, isPending: c } = o({
      queryKey: i,
      queryFn: async () => await t.GetMySteamAwardVotes(),
      enabled: !!y.accountid,
    }),
    { mutate: l } = a({
      mutationFn: async (n) => {
        let r = await t.SetSteamAwardVote(n, e);
        if (r != 1) throw Error(`StoreSales.SetVote failed with ${r}`);
      },
      onMutate: (t) =>
        n.setQueryData(i, (n) => [
          ...(n ?? []).filter((t) => t.voteid != e),
          { voteid: e, appid: t },
        ]),
      onError: () => n.invalidateQueries({ queryKey: i }),
    });
  return {
    unVotedAppID: s?.find((t) => t.voteid == e)?.appid,
    bAnswered: s != null || !y.accountid || !c,
    Vote: l,
  };
}
function fe(e) {
  return [`StoreSales.GetVoteDefinitions`, e ?? 0];
}
function pe(e, t) {
  return {
    queryKey: fe(t),
    queryFn: async () => {
      let n = await p.GetVoteDefinitions(e, {
        sale_appid: t,
        language: x().strLanguage,
      });
      return n.BSuccess() ? n.Body().toObject() : null;
    },
    enabled: !!t,
    staleTime: 1 / 0,
  };
}
function me(e) {
  return o(pe(C(), e));
}
async function he(e) {
  let t = await m.GetUserNominations(e, {});
  return t.BSuccess() ? (t.Body().toObject().nominations ?? []) : [];
}
async function ge(e, t) {
  let n = await p.GetUserVotes(e, { sale_appid: t });
  return n.BSuccess() ? (n.Body().toObject().user_votes ?? []) : [];
}
async function _e(e, t, n, r) {
  let i = await m.Nominate(e, { category_id: n, nominated_id: t, source: r });
  return (
    i.BSuccess() ||
      console.warn(`SteamAwards.Nominate failed with ${i.GetEResult()}`),
    [i.GetEResult(), i.Body().toObject().nominations ?? []]
  );
}
async function ve(e, t, n, r) {
  let i = await p.SetVote(e, { voteid: n, appid: t, sale_appid: r });
  return (
    i.BSuccess() ||
      console.warn(`StoreSales.SetVote failed with ${i.GetEResult()}`),
    [i.GetEResult(), i.Body().toObject().user_votes ?? []]
  );
}
var V = `ilr1AjdCJXo-`,
  ye = `TxDyNEm1M8k-`,
  be = `sUNGbyAayyI-`,
  xe = `Sc8nD8CrRck-`,
  Se = `-z2wNnnSVlM-`,
  Ce = `ghuFYTHFeow-`,
  we = `r-d74eApzAI-`,
  H = `sSLI2In7TtI-`,
  Te = `eWqTMj--x0o-`,
  Ee = `bwYOMwZYlP0-`,
  De = `Z7-r2VQgpeM-`,
  Oe = `i7PGUODutQI-`,
  ke = `tg9BVvJK4L0-`,
  Ae = `gJlraqCGBwc-`,
  je = `q-NADf-GkR0-`,
  Me = `Nxnaq9LeCh0-`,
  Ne = `o00cvSBJI98-`,
  Pe = `ycbLF-HTlIE-`,
  Fe = `iYxHUHZvg5o-`,
  Ie = `_15SY61ywDwg-`,
  U = i(),
  Le = k.createContext(void 0);
function W(e) {
  return (0, U.jsx)(Le.Provider, {
    value: e.widgetStyle,
    children: e.children,
  });
}
function G() {
  return k.useContext(Le) ?? le();
}
function K(e) {
  let {
      strMainTitle: t,
      subtitle: n,
      headerText: r,
      headerContent: i,
      children: a,
      footer: o,
    } = e,
    s = G(),
    c = {
      backgroundColor: s.strBackgroundColor,
      backgroundImage: `url( ${s.strBackgroundImageURL} )`,
      color: s.strTextColor,
    };
  return (0, U.jsxs)(`div`, {
    style: c,
    className: S(V, f),
    children: [
      (0, U.jsxs)(`div`, {
        className: ye,
        children: [
          (0, U.jsx)(`img`, {
            className: be,
            src: s.strTrophyImageURL,
            alt: ``,
          }),
          (0, U.jsxs)(`div`, {
            className: xe,
            children: [
              (0, U.jsx)(`div`, {
                style: { color: s.strTitleColor },
                className: Se,
                children: t,
              }),
              n,
              (0, U.jsx)(`div`, { className: we, children: r }),
              i,
            ],
          }),
        ],
      }),
      a,
      !!o && (0, U.jsx)(`div`, { className: `HsPliMKnMhg-`, children: o }),
    ],
  });
}
function q(e) {
  return `${b.STORE_BASE_URL}steamawards/${e ? `nominations/` : ``}`;
}
function J() {
  return (0, U.jsx)(c, {
    className: V,
    size: `medium`,
    position: `center`,
    string: O.Localize(`#Loading`),
  });
}
function Y(e) {
  let { elDialogElement: t, fnShowLogonDialog: n } = l(),
    [r, i, a] = _();
  return {
    elDialogElement: (0, U.jsxs)(U.Fragment, {
      children: [
        t,
        (0, U.jsx)(T, {
          active: r,
          children: (0, U.jsx)(Re, { bVote: e, closeModal: a }),
        }),
      ],
    }),
    BCanTakeAction: () =>
      y.logged_in ? !y.is_limited || (i(), !1) : (n(), !1),
  };
}
function Re(e) {
  let { bVote: t, closeModal: n } = e;
  return (0, U.jsx)(v, {
    strTitle: O.Localize(`#Informational_Message`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    children: (0, U.jsx)(`div`, {
      children: O.LocalizeReact(
        t
          ? `#SteamAward_Vote_LimitedAccount`
          : `#SteamAward_Nominate_LimitedAccount`,
        (0, U.jsx)(`a`, {
          href: `${b.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
          target: b.IN_CLIENT ? void 0 : `_blank`,
          rel: `noreferrer`,
          children: O.Localize(`#User_LimitedAccount_UrlInfo`),
        }),
      ),
    }),
  });
}
function X(e) {
  let {
      strLocTokenInfix: t,
      unCurrentAppID: n,
      unNewAppID: r,
      fnOnConfirm: i,
      closeModal: a,
    } = e,
    { data: o } = w({ appid: n }),
    { data: s } = w({ appid: r }),
    { data: l } = D({ appid: n }),
    { data: u } = D({ appid: r }),
    d = l ? E(l, `small_capsule`) : void 0,
    f = u ? E(u, `small_capsule`) : void 0;
  return (0, U.jsx)(v, {
    modalClassName: Pe,
    strTitle: O.Localize(
      t == `Vote`
        ? `#SteamAward_VoteConflictWarning_Title`
        : `#SteamAward_NominationConflictWarning_Title`,
    ),
    closeModal: a,
    onOK: i,
    onCancel: a,
    children: (0, U.jsxs)(`div`, {
      className: Fe,
      children: [
        O.LocalizeReact(
          t == `Vote`
            ? `#SteamAward_VoteConflictWarning_Explanation`
            : `#SteamAward_NominationConflictWarning_Explanation`,
          (0, U.jsx)(`span`, { className: Me, children: o?.name }),
          (0, U.jsx)(`span`, { className: Me, children: s?.name }),
        ),
        d && f
          ? (0, U.jsxs)(`div`, {
              className: Ie,
              children: [
                (0, U.jsx)(`img`, { src: d, alt: `` }),
                `→`,
                (0, U.jsx)(`img`, { src: f, alt: `` }),
              ],
            })
          : (0, U.jsx)(c, {
              size: `small`,
              position: `center`,
              string: O.Localize(`#Loading`),
            }),
      ],
    }),
  });
}
function ze(e) {
  let { unAppID: t, widget: n, actions: r, bNominationsOpen: i } = e,
    a = n.rgCategories[0],
    { data: o } = w({ appid: t }),
    { unNominatedAppID: s, bAnswered: c, Nominate: l } = z(a.eCategoryID, r),
    { elDialogElement: u, BCanTakeAction: d } = Y(!1),
    {
      strButtonBGColor: f,
      strButtonTextColor: p,
      rgCategoryBackgrounds: m,
      strFallbackCategoryBGColor: h,
      strCategoryTextColor: g,
    } = G(),
    [v, y, b] = _(),
    ee = m?.[a.internal_name] ?? h;
  if (!n.bNominationsLive) return null;
  if (!c) return (0, U.jsx)(J, {});
  let x = te(q(!0)),
    C = s == t,
    E = n.rgCategories.length == 1,
    D = i && !a.bLaborOfLove;
  return (0, U.jsxs)(K, {
    strMainTitle: O.Localize(`#SteamAwards_EventMainTitle`),
    subtitle: (0, U.jsxs)(`div`, {
      className: Ce,
      children: [
        i
          ? O.Localize(`#SteamAwards_EventCallToAction`)
          : O.Localize(`#SteamAwards_EventVotingDateTeaser`, j()),
        i &&
          (0, U.jsxs)(`a`, {
            href: x,
            className: `OztIiH5vYRE-`,
            children: [
              `(`,
              O.Localize(`#EventDisplay_CallToAction_LearnMore`),
              `)`,
            ],
          }),
      ],
    }),
    headerText: i
      ? E
        ? O.Localize(`#SteamAwards_EventNominateGamePrompt_Long`, o?.name ?? ``)
        : (0, U.jsx)(`a`, {
            className: H,
            href: x,
            children: O.Localize(
              `#SteamAwards_EventNominateGamePrompt_NoCategory`,
              o?.name ?? ``,
            ),
          })
      : O.Localize(`#SteamAwards_Event_NominationsClosed`),
    footer:
      D &&
      (0, U.jsx)(`a`, {
        href: x,
        children: O.Localize(`#SteamAwards_EventNominationAlternativeLinkText`),
      }),
    children: [
      !!(E && (i || C)) &&
        (0, U.jsx)(`div`, {
          style: { background: ee },
          className: S(`eU1VNUlajE0-`, `eWqTMj--x0o-`),
          children: (0, U.jsxs)(`div`, {
            className: `gO70X8GBo-E-`,
            children: [
              (0, U.jsx)(`div`, {
                style: { background: f, color: p },
                className: S(`SNoK7p5tEVU-`, C && `eIE9nuLmVLE-`),
                children: (0, U.jsx)(ne, {
                  controlled: !0,
                  className: S(`_1IIojhfpy34-`, C && `eIE9nuLmVLE-`),
                  checked: C,
                  onChange: (e) => {
                    e && d() && (s && s != t ? y() : l(t));
                  },
                  disabled: C,
                  color: p,
                  highlightColor: p,
                  label: (0, U.jsx)(`div`, {
                    className: `bwYOMwZYlP0-`,
                    children: O.Localize(
                      C
                        ? `#SteamAwards_NominateWidget_CTA_PastTense`
                        : `#SteamAwards_NominateWidget_CTA`,
                      a.strTitle,
                    ),
                  }),
                }),
              }),
              (0, U.jsx)(`div`, {
                style: { color: g },
                className: `C-uxCDYX7oo-`,
                children: a.strDescription,
              }),
            ],
          }),
        }),
      u,
      (0, U.jsx)(T, {
        active: v,
        children: (0, U.jsx)(X, {
          strLocTokenInfix: `Nomination`,
          unCurrentAppID: s,
          unNewAppID: t,
          fnOnConfirm: () => l(t),
          closeModal: b,
        }),
      }),
    ],
  });
}
function Z(e) {
  let {
      unAppID: t,
      widget: n,
      actions: r,
      bVotesOpen: i,
      bHideCategoryDescriptions: a,
    } = e,
    { data: o } = w({ appid: t }),
    s = te(q(!1));
  return (0, U.jsx)(K, {
    strMainTitle: O.Localize(`#SteamAwards_EventMainTitleCombined`),
    headerText: i
      ? O.Localize(`#SteamAwards_EventVoteForGamePrompt`, o?.name ?? ``)
      : (0, U.jsx)(`a`, {
          href: s,
          className: H,
          children: O.Localize(`#SteamAwards_Event_VotesClosed`),
        }),
    headerContent: (0, U.jsx)(`div`, {
      className: Ne,
      children: n.rgCategories.map((e) =>
        (0, U.jsx)(
          Be,
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
    footer: (0, U.jsx)(`a`, {
      href: s,
      children: O.Localize(`#EventDisplay_CallToAction_LearnMore`),
    }),
  });
}
function Be(e) {
  let {
      unAppID: t,
      category: n,
      actions: r,
      bVotesOpen: i,
      bHideDescription: a,
    } = e,
    { unVotedAppID: o, bAnswered: s, Vote: c } = B(n.eCategoryID, r),
    { elDialogElement: l, BCanTakeAction: u } = Y(!0),
    { strFallbackCategoryBGColor: d, rgCategoryBackgrounds: f } = G(),
    [p, m, h] = _(),
    g = f?.[n.internal_name] ?? d,
    v = o == t;
  return !i && !v
    ? null
    : (0, U.jsxs)(`div`, {
        style: { backgroundColor: g },
        className: Te,
        children: [
          (0, U.jsxs)(`div`, {
            className: Oe,
            children: [
              (0, U.jsx)(`div`, { className: S(Ee, De), children: n.strTitle }),
              !a &&
                (0, U.jsx)(`div`, {
                  className: `C-uxCDYX7oo-`,
                  children: n.strDescription,
                }),
              v
                ? (0, U.jsx)(`button`, {
                    className: je,
                    children: (0, U.jsx)(`span`, {
                      className: Ae,
                      children: O.Localize(`#SteamAward_VoteButton_VotedText`),
                    }),
                  })
                : (0, U.jsx)(`button`, {
                    className: ke,
                    onClick: () => {
                      s && u() && (o && o != t ? m() : c(t));
                    },
                    children: (0, U.jsx)(`span`, {
                      className: Ae,
                      children: O.Localize(`#SteamAward_VoteButton_PromptText`),
                    }),
                  }),
            ],
          }),
          l,
          (0, U.jsx)(T, {
            active: p,
            children: (0, U.jsx)(X, {
              strLocTokenInfix: `Vote`,
              unCurrentAppID: o,
              unNewAppID: t,
              fnOnConfirm: () => c(t),
              closeModal: h,
            }),
          }),
        ],
      });
}
function Ve(e) {
  let t = C();
  return (0, k.useMemo)(
    () => ({
      GetMySteamAwardNominations: () => he(t),
      NominateForSteamAward: async (n, r) => {
        if (e) return 1;
        let [i] = await _e(t, n, r, 4);
        return i;
      },
      GetMySteamAwardVotes: () => ge(t, N),
      SetSteamAwardVote: async (n, r) => {
        if (e) return 1;
        let [i] = await ve(t, n, r, N);
        return i;
      },
    }),
    [t, e],
  );
}
var Q = [];
function He(e, t, n) {
  let r = e.some(F) || t.some(F),
    i = me(r ? N : void 0);
  return r
    ? i.data
      ? { widgets: de(i.data.votes ?? [], e, t, n), bLoading: !1 }
      : { bLoading: i.isPending }
    : { bLoading: !1 };
}
function Ue(e) {
  let { data: t, isPending: n } = o({
    queryKey: [`SteamAwards.WidgetStyle`],
    queryFn: async () => {
      let e = await fetch(ue(), { credentials: `omit` });
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
function We(e, t) {
  return t ? { ...e, bNominationsLive: !0 } : e;
}
function Ge(e) {
  return !!e && b.EUNIVERSE == 1;
}
function Ke(e) {
  let { event: t, previewMode: n } = e,
    [r, i] = s(() => [t.GetSteamAwardCategory(), t.appid]),
    a = P(t, d()),
    { widgets: o, bLoading: c } = He([r], Q, a),
    { widgetStyle: l, bLoading: u } = Ue(!!o?.nomination),
    f = Ve(Ge(n));
  return c || u
    ? (0, U.jsx)(J, {})
    : o?.nomination
      ? (0, U.jsx)(W, {
          widgetStyle: l,
          children: (0, U.jsx)(ze, {
            unAppID: i,
            actions: f,
            widget: We(o.nomination, !!n),
            bNominationsOpen: a,
          }),
        })
      : null;
}
function $(e) {
  let {
      appID: t,
      voteCategories: n,
      bIsEventActionEnabled: r,
      previewMode: i,
      bRenderFromStorePage: a,
    } = e,
    { widgets: o, bLoading: s } = He(Q, n ?? Q, !1),
    { widgetStyle: c, bLoading: l } = Ue(!!o?.vote),
    u = Ve(Ge(i));
  return s || l
    ? (0, U.jsx)(J, {})
    : o?.vote
      ? (0, U.jsx)(W, {
          widgetStyle: c,
          children: (0, U.jsx)(Z, {
            unAppID: t,
            widget: o.vote,
            actions: u,
            bVotesOpen: r || !!i,
            bHideCategoryDescriptions: a,
          }),
        })
      : null;
}
function qe(e) {
  let t = ee(`steamwawards`, `application_config`)?.votecategories;
  return t
    ? (0, U.jsx)($, {
        appID: e.appID,
        bRenderFromStorePage: !0,
        bIsEventActionEnabled: !0,
        voteCategories: t,
      })
    : (console.error(
        `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${e.appID}`,
      ),
      null);
}
var Je = t({
  BAreSteamAwardNominationsOpenForEvent: () => P,
  BHasValveOnlyEventTools: () => h,
  BIsRealSteamAwardCategory: () => F,
  BuildSteamAwardWidgets: () => de,
  EventAdminBar: () => g,
  EventDetailContainer: () => oe,
  EventDetailHeaderImage: () => ie,
  EventDetailMainBody: () => ae,
  EventDisplaySteamAwardNomination: () => Ke,
  EventPlaytestOnlyBar: () => re,
  GetCurrentSteamAwardsYear: () => j,
  GetSteamAwardNominationsQueryKey: () => L,
  GetSteamAwardVotesQueryKey: () => R,
  GetSteamAwardWidgetStyle: () => le,
  GetSteamAwardWidgetStyleURL: () => ue,
  GetSteamAwardsPageURL: () => q,
  GetSteamAwardsPromoAssetURL: () => M,
  SteamAwardChangeConfirmDialog: () => X,
  SteamAwardNominationWidget: () => ze,
  SteamAwardStorePageVoteWidget: () => qe,
  SteamAwardVoteWidget: () => Z,
  SteamAwardWidgetFrame: () => K,
  SteamAwardWidgetLoading: () => J,
  SteamAwardWidgetStyleProvider: () => W,
  WinterSaleSteamAwardVoteWrapper: () => $,
  k_nSteamAwardsSaleAppID: () => N,
  k_nSteamAwardsSkipCategoryAppID: () => k_nSteamAwardsSkipCategoryAppID,
  k_strSteamAwardsBackgroundColor: () => k_strSteamAwardsBackgroundColor,
  k_strSteamAwardsButtonColor: () => k_strSteamAwardsButtonColor,
  k_strSteamAwardsTextColor: () => k_strSteamAwardsTextColor,
  useMySteamAwardNomination: () => z,
  useMySteamAwardVote: () => B,
  useSteamAwardEligibility: () => Y,
  useSteamAwardWidgetStyle: () => G,
});
export { Ke as n, $ as r, Je as t };

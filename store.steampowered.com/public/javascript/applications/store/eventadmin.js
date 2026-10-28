/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  a as e,
  n as t,
  o as n,
  r,
  t as i,
} from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import {
  A as a,
  At as o,
  F as s,
  G as c,
  L as l,
  Lt as u,
  Mt as d,
  Rt as f,
  W as p,
  jt as m,
  k as h,
  nt as g,
  pt as _,
  wt as v,
} from "./libraries.js?contenthash=b0JzZ9xY";
import { r as y, t as b } from "./clanimagemodels.js?contenthash=DZ8CXPmC";
import { m as x } from "./salesectionfactory.js?contenthash=DbCRTOuY";
import { B as S } from "./storelink.js?contenthash=Dql-0jgv";
import { t as C } from "./multisourceimage.js?contenthash=BVqKyLkc";
import {
  C as w,
  K as T,
  a as E,
  f as D,
  i as O,
  r as k,
  t as A,
} from "./partnerevent.js?contenthash=dPVYDW7-";
import {
  Lt as j,
  n as M,
} from "./basicpartnereventrender.js?contenthash=LxBKBaJm";
import { n as N, r as P } from "./eventlink.js?contenthash=Byy_2dhH";
import { n as F } from "./modals.js?contenthash=0VSE8G4g";
import { t as I } from "./eventinitialization.js?contenthash=BBe4Tdhr";
import { t as L } from "./throbber.js?contenthash=BIVX4x_C";
import { n as R } from "./eventdevfeaturestore.js?contenthash=CwBYN90A";
import { t as z } from "./moment-timezone.js?contenthash=yrPd--Pl";
import {
  i as ee,
  v as te,
} from "./partnereventshared.module.js?contenthash=BdpFElnJ";
import { a as ne } from "./loyaltyrewarddefs.js?contenthash=CmEyBZB_";
import { n as re } from "./storegamehover.js?contenthash=Dl0yLM2W";
import { n as ie } from "./playerstore.js?contenthash=49W-ihmu";
import {
  c as B,
  d as ae,
  o as oe,
  t as se,
} from "./clanimageupload.js?contenthash=BUZFVgUe";
import { n as V } from "./partnereventstore.js?contenthash=BynImTwG";
import {
  $b as ce,
  $y as H,
  Bi as le,
  Cc as U,
  Fn as ue,
  Gi as de,
  Hi as fe,
  Hu as pe,
  Iu as me,
  Ji as he,
  Jy as W,
  Lb as G,
  Mr as ge,
  Qb as _e,
  Qi as ve,
  Ui as ye,
  Vl as K,
  Vu as q,
  Wc as be,
  Wi as xe,
  Wo as Se,
  Wx as J,
  _u as Ce,
  bS as we,
  bu as Te,
  ca as Ee,
  cx as Y,
  fl as De,
  hu as Oe,
  jr as ke,
  mS as Ae,
  ma as je,
  mn as Me,
  qi as Ne,
  qo as Pe,
  sb as Fe,
  sv as Ie,
  ub as Le,
  ux as Re,
  wr as ze,
} from "./main.js?contenthash=C1XpPKHE";
import { t as Be } from "./clanstore.js?contenthash=CX-238CQ";
import { t as Ve } from "./react-datetime.js?contenthash=DNegIGQC";
import { r as He, t as Ue } from "./managerss.js?contenthash=Dm_1tCmZ";
var We = n(g()),
  Ge = class e {
    static s_Singleton;
    m_rgRSSEnabledClans = [];
    GetAllRSSEnabledClans() {
      return this.m_rgRSSEnabledClans;
    }
    GetTrustedEnabledClans(e) {
      return this.m_rgRSSEnabledClans
        .filter((t) => t.is_trusted_press == e)
        .map((e) => e.clan_accoundid);
    }
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    Init() {
      let e = ce(`rssaccountinfo`, `application_config`);
      this.ValidateRSSAccountConfig(e) && (this.m_rgRSSEnabledClans = e);
    }
    ValidateRSSAccountConfig(e) {
      let t = e;
      return (
        t &&
        Array.isArray(t) &&
        t.length > 0 &&
        typeof t[0] == `object` &&
        typeof t[0].clan_accoundid == `number`
      );
    }
    async LoadKnownAllRSSInfo() {
      let e = [],
        t = He.Get();
      this.m_rgRSSEnabledClans.forEach((n) => {
        t.BHasClanIDLoaded(n.clan_accoundid) ||
          e.push(t.QueueCuratorAdminInfoLoad(n.clan_accoundid));
      }),
        await Promise.all(e);
    }
    ExtractWithoutRSSAutomation() {
      let e = [],
        t = He.Get();
      return (
        this.m_rgRSSEnabledClans.forEach((n) => {
          let r = t.GetRSSAdminForClanAccountID(n.clan_accoundid);
          r && !r.BIsAutomationEnabled() && e.push(n.clan_accoundid);
        }),
        e
      );
    }
    async HintLoadAccounts() {}
    async ReindexClanEventsAndReloadAccount(e) {
      let t = Y.STORE_BASE_URL + `events_admin/ajaxflushandreindexrss`,
        n = new FormData();
      n.set(`sessionid`, _e()), n.append(`clanids`, `` + e);
      try {
        if (
          (await We.default.post(t, n, { withCredentials: !0 }))?.data
            ?.success == 1
        )
          return !0;
      } catch (e) {
        let t = q(e);
        console.error(
          `Failed to ReindexClanEventsAndReloadAccount: ` + t.strErrorMsg,
          t,
        );
      }
      return !1;
    }
  },
  X = n(f()),
  Ke = `FRJnBfJ5XdQ-`,
  qe = `yeG5YHSDTgg-`,
  Je = `yWlpLUaVL0Q-`,
  Ye = `UOgdlafVa7Y-`,
  Xe = `LDVxT-1sHFA-`,
  Ze = `_4Q3Bz9buMsQ-`,
  Z = _(),
  Qe = p((e) => {
    let [t, n] = (0, X.useState)(!0);
    if (
      ((0, X.useEffect)(() => {
        (async () => {
          Be.Init(), await Ge.Get().HintLoadAccounts(), n(!1);
        })();
      }, []),
      t)
    )
      return (0, Z.jsx)(L, { string: W(`#Loading`), size: `medium` });
    let r = Ge.Get().GetTrustedEnabledClans(!0),
      i = Ge.Get().GetTrustedEnabledClans(!1);
    return (0, Z.jsx)(`div`, {
      children: (0, Z.jsxs)(De, {
        children: [
          (0, Z.jsx)(`h1`, { children: W(`#RSSModeration_Title`) }),
          (0, Z.jsx)($e, {}),
          (0, Z.jsx)(it, {
            rgClanIDs: Ge.Get()
              .GetAllRSSEnabledClans()
              .map((e) => e.clan_accoundid),
          }),
          (0, Z.jsx)(et, {
            rgClanIDs: r,
            strTitle: W(`#RSSModeration_TrustTitle`),
          }),
          (0, Z.jsx)(et, {
            rgClanIDs: i,
            strTitle: W(`#RSSModeration_RestTitle`),
          }),
        ],
      }),
    });
  }),
  $e = h((e) => {
    let [t, n] = (0, X.useState)(!1),
      [r, i] = (0, X.useState)(void 0);
    return t
      ? (0, Z.jsx)(L, { string: W(`#Loading`), size: `medium` })
      : r === void 0
        ? (0, Z.jsxs)(ye, {
            onClick: async () => {
              n(!0),
                await Ge.Get().LoadKnownAllRSSInfo(),
                i(Ge.Get().ExtractWithoutRSSAutomation()),
                n(!1);
            },
            children: [W(`#RSSModeration_FindInActive`), ` `],
          })
        : r.length > 0
          ? (0, Z.jsx)(et, {
              rgClanIDs: r,
              strTitle: W(`#RSSModeration_InactiveAutomation`),
            })
          : (0, Z.jsx)(`div`, {
              children: W(`#RSSModreation_AllAutomationEnabled`),
            });
  }),
  et = (e) => {
    let { rgClanIDs: t, strTitle: n } = e,
      [r, i] = (0, X.useState)(!1),
      a = null;
    return (
      r || (a = t.map((e) => (0, Z.jsx)(tt, { clanAccountID: e }, e))),
      (0, Z.jsxs)(`div`, {
        className: U(Ke),
        children: [
          (0, Z.jsxs)(`h2`, {
            className: U(qe),
            onDoubleClick: () => i(!r),
            children: [
              n,
              (0, Z.jsx)(`span`, { children: `\xA0` }),
              (0, Z.jsx)(ye, {
                className: Je,
                onClick: () => i(!r),
                children: r ? (0, Z.jsx)(Se, {}) : (0, Z.jsx)(Pe, {}),
              }),
            ],
          }),
          r &&
            (0, Z.jsx)(ye, {
              onClick: () => i(!1),
              children: W(`#Sale_ShowContents`),
            }),
          a,
        ],
      })
    );
  },
  tt = h((e) => {
    let { clanAccountID: t } = e;
    return Be.BHasClanInfoLoadedByAccountID(t) && He.Get().BHasClanIDLoaded(t)
      ? (0, Z.jsx)(rt, {
          clanInfo: Be.GetClanInfoByClanAccountID(t),
          rssAdminInfo: He.Get().GetRSSAdminForClanAccountID(t),
        })
      : (0, Z.jsx)(nt, { clanAccountID: t });
  }),
  nt = (e) => {
    let { clanAccountID: t } = e,
      n = `500px`,
      r = Me(
        {
          onEnter: async () => {
            let e = Te.InitFromClanID(t);
            await Promise.all([
              Be.LoadClanInfoForClanSteamID(e),
              He.Get().QueueCuratorAdminInfoLoad(t),
            ]);
          },
        },
        { rootMargin: `${n} 0px ${n} 0px` },
      );
    return (0, Z.jsx)(`div`, {
      ref: r,
      className: Ye,
      children: (0, Z.jsxs)(`div`, { children: [W(`#Loading`), ` - `, t] }),
    });
  },
  rt = (e) => {
    let { clanInfo: t, rssAdminInfo: n } = e,
      [r, i] = (0, X.useState)(!1),
      a = Y.STORE_BASE_URL + `newshub/group/` + t.clanAccountID,
      o = Y.STORE_BASE_URL + `curator/` + t.clanAccountID + `/admin/manage_rss`,
      s = Y.COMMUNITY_BASE_URL + `group/` + t.clanAccountID,
      c =
        `https://steamsupport.valvesoftware.com/clan/overview/` +
        Te.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
      l = He.Get().GetRSSAdminStats(t.clanAccountID);
    return (0, Z.jsxs)(`div`, {
      className: U(Ye),
      children: [
        (0, Z.jsxs)(`div`, {
          className: U(Ze),
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  children: [t.group_name, ` - `, t.clanAccountID],
                }),
                (0, Z.jsxs)(`div`, {
                  children: [
                    (0, Z.jsxs)(`div`, {
                      children: [W(`#CuratorAdmin_RSSFeed`), `:`],
                    }),
                    (0, Z.jsx)(`a`, {
                      href: n.GetRSSUrl(),
                      children: n.GetRSSUrl(),
                    }),
                  ],
                }),
                !!l &&
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        children: W(
                          `#RSSModeration_TotalEvents`,
                          ue(l.total_event_count),
                        ),
                      }),
                      (0, Z.jsx)(`div`, {
                        children: W(
                          `#RSSModeration_RSSEvents`,
                          ue(l.rss_event_count),
                        ),
                      }),
                    ],
                  }),
                (0, Z.jsx)(ye, {
                  onClick: () => i(!r),
                  children: W(
                    r
                      ? `#Bbcode_Expand_Details_Expanded`
                      : `#Bbcode_Expand_Details_Collapsed`,
                  ),
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              children: (0, Z.jsxs)(`ul`, {
                children: [
                  (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(`a`, {
                      href: a,
                      children: W(`#EventDisplay_NewsHubSubtitle`),
                    }),
                  }),
                  (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(`a`, {
                      href: o,
                      children: W(`#CuratorAdmin_RSSFeed_title`),
                    }),
                  }),
                  (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(`a`, {
                      href: s,
                      children: W(`#RSSModeration_GroupPage`),
                    }),
                  }),
                  (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(`a`, {
                      href: c,
                      children: W(`#RSSModeration_SupportPage`),
                    }),
                  }),
                  (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(it, { rgClanIDs: [t.clanAccountID] }),
                  }),
                ],
              }),
            }),
            (0, Z.jsx)(`div`, {
              className: Xe,
              children: (0, Z.jsx)(x, {
                bHideCreatorType: !0,
                creatorID: {
                  name: null,
                  clan_account_id: t.clanAccountID,
                  type: `developer`,
                },
                bSmallFormat: !0,
              }),
            }),
          ],
        }),
        !!r &&
          (0, Z.jsx)(Z.Fragment, {
            children: n.BHasSavedRSSURL()
              ? (0, Z.jsx)(Ue, { strRssURL: n.GetRSSUrl(), admin: n })
              : (0, Z.jsx)(`div`, { children: W(`#RSSModeration_NoRSSFeed`) }),
          }),
      ],
    });
  },
  it = (e) =>
    (0, Z.jsx)(Ee, {
      toolTipContent: W(`#RSSModeration_ReindexAndReload_ttip`),
      children: (0, Z.jsx)(ye, {
        onClick: (t) => {
          ke((0, Z.jsx)(at, { ...e }), me(t));
        },
        children: W(`#RSSModeration_ReindexAndReload`),
      }),
    }),
  at = (e) => {
    let [t, n] = (0, X.useState)(void 0),
      [r, i] = (0, X.useState)(!1),
      [a, o] = (0, X.useState)(void 0),
      s = () => e.closeModal && e.closeModal();
    return (0, Z.jsx)(ge, {
      onEscKeypress: s,
      children: (0, Z.jsxs)(de, {
        children: [
          (0, Z.jsxs)(he, {
            children: [` `, W(`#RSSModeration_ReindexAndReload`), ` `],
          }),
          (0, Z.jsxs)(le, {
            children: [
              (0, Z.jsxs)(fe, {
                children: [
                  t === void 0
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(`span`, {
                            children: W(
                              `#RSSModeration_Reindex_Verify`,
                              e.rgClanIDs.length,
                            ),
                          }),
                          (0, Z.jsx)(ve, {
                            onClick: async () => {
                              let t = 0;
                              n(t);
                              for (let r = 0; r < e.rgClanIDs.length; ++r) {
                                let i = e.rgClanIDs[r];
                                if (
                                  await Ge.Get().ReindexClanEventsAndReloadAccount(
                                    i,
                                  )
                                )
                                  (t += 1), n(t);
                                else {
                                  o(W(`#Error_Generic_Label`));
                                  break;
                                }
                              }
                              i(!0);
                            },
                            children: W(`#Button_Continue`),
                          }),
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(`span`, {
                            children: W(
                              `#RSSModeration_Reindex_Action`,
                              t,
                              e.rgClanIDs.length,
                            ),
                          }),
                          r
                            ? (0, Z.jsx)(`span`, {
                                children: W(
                                  `#EventEditor_ImportFromHTML_ConvertFinished`,
                                ),
                              })
                            : (0, Z.jsx)(L, {
                                size: `small`,
                                string: W(`#Updating`),
                              }),
                        ],
                      }),
                  !!a && (0, Z.jsxs)(`span`, { children: [a, ` `] }),
                ],
              }),
              (0, Z.jsx)(Ne, {
                children: (0, Z.jsx)(ye, {
                  onClick: s,
                  children: W(r ? `#Button_OK` : `#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  ot = class e {
    static s_Singleton;
    m_mapEventGIDToSolrData = new Map();
    m_listEvents = [];
    BHasSolrEvent(e) {
      return this.m_mapEventGIDToSolrData.has(e);
    }
    GetAllSolrEvents() {
      return this.m_listEvents;
    }
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      o(this);
    }
    ClearAllSolrEvents() {
      (this.m_mapEventGIDToSolrData = new Map()), (this.m_listEvents = []);
    }
    async LoadPartnerEventForQueryIncremental(
      e,
      t = 0,
      n = 10,
      r,
      i,
      a,
      o,
      s,
      c,
    ) {
      let l = await this.GetLatestPartnerEvents(e, t, n, r, i, a, o, s, c),
        u = [];
      return (
        d(() => {
          l.forEach((e) => {
            this.m_mapEventGIDToSolrData.has(e.unique_id) ||
              (u.push(e),
              this.m_mapEventGIDToSolrData.set(e.unique_id, e),
              this.m_listEvents.push(e));
          });
        }),
        u
      );
    }
    async GetLatestPartnerEvents(
      e,
      t = 0,
      n = 10,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
    ) {
      let p = Y.STORE_BASE_URL + `events_admin/ajaxgetlatestpartnerevents`,
        m = {
          page: t,
          count: n,
          date: o,
          appids: r === void 0 ? void 0 : r.join(`,`),
          required_tags: i === void 0 ? void 0 : i.join(`,`),
          exclude_tags: a === void 0 ? void 0 : a.join(`,`),
          eventtypefilter: s === void 0 ? void 0 : s.join(`,`),
          orderByVisibility: c || void 0,
          creator_home_clan_id: l === void 0 ? void 0 : l.join(`,`),
          showUnpublished: d === void 0 ? void 0 : d,
          sale_only: f === void 0 ? void 0 : f,
          term: u === void 0 ? void 0 : u,
        },
        h = await We.default.get(p, {
          params: m,
          withCredentials: !0,
          cancelToken: e ? e.token : void 0,
        });
      return h.data ? h.data.docs : [];
    }
  };
G([m], ot.prototype, `m_mapEventGIDToSolrData`, void 0),
  G([m], ot.prototype, `m_listEvents`, void 0),
  G([v], ot.prototype, `ClearAllSolrEvents`, null);
var st = class {
  constructor() {
    o(this);
  }
  m_backfill = void 0;
  m_mapEventGIDProcessed = new Map();
  m_vecEventGID = [];
  m_bBackfillInProgress = !1;
  m_nProcessed = 0;
  m_nSuccesses = 0;
  m_nFailures = 0;
  m_nWarning = 0;
  m_nSkipped = 0;
  GetBackfill() {
    return this.m_backfill;
  }
  SetBackfill(e) {
    this.m_backfill = e;
  }
  StartBackfill(e) {
    (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
  }
  CompleteBackfill(e) {
    (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
  }
  BIsBackkFillInProgress() {
    return this.m_bBackfillInProgress;
  }
  GetEventBackfillProgress() {
    return this.m_mapEventGIDProcessed;
  }
  CreateOrGetBackfillProgess(e) {
    return (
      this.m_mapEventGIDProcessed.has(e) ||
        (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
        this.m_vecEventGID.push(e)),
      this.m_mapEventGIDProcessed.get(e)
    );
  }
  BHasProgress(e) {
    return this.m_mapEventGIDProcessed.has(e);
  }
  GetBackfillGIDs() {
    return this.m_vecEventGID;
  }
  CloseProgress(e, t) {
    (this.m_nProcessed += 1),
      t.bAlreadyProcessed || t.bSkipped
        ? (this.m_nSkipped += 1)
        : t.bSucceeded
          ? (this.m_nSuccesses += 1)
          : t.bFailed && (this.m_nFailures += 1),
      t.bWarning && (this.m_nWarning += 1),
      this.m_mapEventGIDProcessed.set(e, t);
  }
};
G([m], st.prototype, `m_backfill`, void 0),
  G([m], st.prototype, `m_mapEventGIDProcessed`, void 0),
  G([m], st.prototype, `m_bBackfillInProgress`, void 0),
  G([m], st.prototype, `m_nProcessed`, void 0),
  G([m], st.prototype, `m_nSuccesses`, void 0),
  G([m], st.prototype, `m_nFailures`, void 0),
  G([m], st.prototype, `m_nWarning`, void 0),
  G([m], st.prototype, `m_nSkipped`, void 0),
  G([v], st.prototype, `StartBackfill`, null),
  G([v], st.prototype, `CompleteBackfill`, null),
  G([v], st.prototype, `CloseProgress`, null);
var Q = new st(),
  ct = `d8inY9yaWr4-`,
  lt = 25,
  ut = 5e3,
  dt = class extends X.Component {
    m_cancelSignal = We.default.CancelToken.source();
    m_nImageID = 0;
    m_mapArtworkResizeSuccess = new Map();
    state = { eBackfillState: void 0 };
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventBackfillLanding component unmounted`);
    }
    OnArtworkResizeBackfill() {
      this.state.eBackfillState ??
        this.setState({ eBackfillState: `started` }, this.BeginArtworkResize);
    }
    BeginArtworkResize() {
      this.m_mapArtworkResizeSuccess.set(`capsule`, 0),
        this.m_mapArtworkResizeSuccess.set(`spotlight`, 0),
        this.m_mapArtworkResizeSuccess.set(`background`, 0),
        this.RunArtworkResizeBackfill()
          .then(() => this.setState({ eBackfillState: `success` }))
          .catch((e) => {
            let t = q(e);
            console.error(`EventBackfillLanding: error ` + t.strErrorMsg, t),
              this.setState({ eBackfillState: `error` });
          });
    }
    async GetImageInfo(e, t, n = ``) {
      let r = B(t),
        i = y.GetHashFromHashAndExt(t) + n;
      return y.AsyncGetImageResolution(e, i, r, this.m_cancelSignal, !0);
    }
    HandleErrorFatal(e, t, n, r) {
      let i = q(t),
        a =
          `EventBackfillLanding: ` + n + ` on GID ` + e + ` : ` + i.strErrorMsg;
      console.error(a, i),
        r
          ? ((r.bFailed = !0), (r.strMessage = a), Q.CloseProgress(e, r))
          : Q.CompleteBackfill(`resize_image`);
    }
    async HandleResizeForImageType(e, t, n, r, i) {
      for (let a = 0; a < e.length && a < 32; ++a)
        if (e[a] && e[a].length > 0) {
          let o = e[a],
            s = B(o),
            c = new Te(t.clan_steamid);
          if (s) {
            let e = await this.GetImageInfo(c, o).catch(
              (e) => (
                this.HandleErrorFatal(null, e, `GetImageInfo Original`, n),
                { height: 0, width: 0, success: 2 }
              ),
            );
            if (e.success == 1 && ae(e.width, e.height, r, !0)) {
              if (
                (
                  await this.GetImageInfo(c, o, i).catch(
                    (e) => (
                      this.HandleErrorFatal(null, e, `GetImageInfo Resize`, n),
                      { height: 0, width: 0, success: 2 }
                    ),
                  )
                ).success == 1
              )
                n.bAlreadyProcessed = !0;
              else {
                n.bProcessing = !0;
                let e = y.GetHashFromHashAndExt(o),
                  t = y.GetExtStringFromHashAndExt(o),
                  i = oe(r);
                if (i)
                  try {
                    let a = await se(this.m_cancelSignal.token, c, e, t, i);
                    console.log(`success on the resize request`),
                      a == i.length
                        ? ((n.bSucceeded = !0),
                          this.m_mapArtworkResizeSuccess.set(
                            r,
                            this.m_mapArtworkResizeSuccess.get(r) + 1,
                          ))
                        : ((n.bFailed = !0),
                          (n.strMessage =
                            `Did not resize all: ` +
                            r +
                            ` ` +
                            a +
                            ` / ` +
                            i.length));
                  } catch (e) {
                    n.bFailed = !0;
                    let t = q(e);
                    (n.strMessage = t.strErrorMsg),
                      console.error(`Resize: ` + t.strErrorMsg, t);
                  }
                else
                  (n.bFailed = !0),
                    console.error(
                      `Resize: resize request couldn't be determined from the artwork type`,
                    );
              }
            } else n.bSkipped = !0;
          } else n.bSkipped = !0;
        }
    }
    async RunArtworkResizeBackfill() {
      Q.StartBackfill(`resize_image`);
      let e = 0;
      for (; Q.BIsBackkFillInProgress(); ) {
        let t = await ot
          .Get()
          .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, e, lt)
          .catch((e) =>
            this.HandleErrorFatal(
              null,
              e,
              `LoadPartnerEventForQueryIncremental`,
            ),
          );
        if (!t || t.length == 0) {
          Q.CompleteBackfill(`resize_image`),
            console.log(`Compelted the backfill`);
          break;
        }
        e += t.length;
        for (let e = 0; e < t.length; ++e) {
          let n = t[e],
            r = Q.CreateOrGetBackfillProgess(n.unique_id);
          if (!n.announcement_gid || n.announcement_gid.length == 0) {
            (r.bSkipped = !0),
              (r.bWarning = !0),
              Q.CloseProgress(n.unique_id, r);
            continue;
          }
          if (
            (await V.LoadPartnerEventFromAnnoucementGID(
              Number(n.appid),
              n.announcement_gid,
              100,
            ).catch((e) => {
              this.HandleErrorFatal(
                n.announcement_gid,
                e,
                `LoadPartnerEventFromAnnoucementGID`,
                r,
              );
            }),
            r.bFailed)
          )
            continue;
          let i = V.GetClanEventFromAnnouncementGID(n.announcement_gid);
          if (!i) {
            (r.bFailed = !0),
              (r.strMessage = `Failed to load the event: ` + n.unique_id),
              Q.CloseProgress(n.unique_id, r);
            continue;
          }
          if (r.bSucceeded || r.bFailed || r.bAlreadyProcessed) {
            (r.bAlreadyProcessed = !0), Q.CloseProgress(n.unique_id, r);
            continue;
          }
          if (
            ((r.bAnalysing = !0),
            this.setState({
              strInfo:
                `Processing ` +
                Q.GetBackfillGIDs().length +
                ` Appid: ` +
                i.appid +
                ` Event ` +
                i.GID +
                ` Title: ` +
                i.GetNameWithFallback(0),
            }),
            i.jsondata && i.jsondata.localized_capsule_image)
          ) {
            let e = i.jsondata.localized_capsule_image;
            await this.HandleResizeForImageType(
              e,
              n,
              r,
              `capsule`,
              b.capsule_main,
            ).catch((e) =>
              this.HandleErrorFatal(
                null,
                e,
                `HandleResizeForImageType capsule`,
                r,
              ),
            );
          }
          if (i.jsondata && i.jsondata.localized_title_image) {
            let e = i.jsondata.localized_title_image;
            await this.HandleResizeForImageType(
              e,
              n,
              r,
              `background`,
              b.background_mini,
            ).catch((e) =>
              this.HandleErrorFatal(
                null,
                e,
                `HandleResizeForImageType background`,
                r,
              ),
            );
          }
          if (i.jsondata && i.jsondata.localized_spotlight_image) {
            let e = i.jsondata.localized_spotlight_image;
            await this.HandleResizeForImageType(
              e,
              n,
              r,
              `spotlight`,
              b.spotlight_main,
            ).catch((e) =>
              this.HandleErrorFatal(
                null,
                e,
                `HandleResizeForImageType spotlight`,
                r,
              ),
            );
          }
          if ((Q.CloseProgress(n.unique_id, r), !Q.BIsBackkFillInProgress()))
            break;
        }
        if (Q.m_nFailures > ut) {
          console.log(`Hit too many errors, stoppinng the backfill`);
          break;
        }
      }
    }
    RenderFailure() {
      let e = [];
      return (
        Q.m_nFailures > 0 &&
          Q.GetBackfillGIDs().forEach((t) => {
            let n = Q.GetEventBackfillProgress().get(t);
            if (n && n.bFailed) {
              let r = V.GetClanEventModel(t);
              r &&
                e.push(
                  (0, Z.jsxs)(
                    `div`,
                    {
                      children: [
                        (0, Z.jsx)(P, {
                          eventModel: r,
                          route: N.k_eView,
                          children: r.GetNameWithFallback(0),
                        }),
                        (0, Z.jsx)(`div`, {
                          className: ct,
                          children: n.strMessage,
                        }),
                      ],
                    },
                    t,
                  ),
                );
            }
          }),
        e
      );
    }
    RenderResizeProgress() {
      let e = [];
      return (
        e.push(
          (0, Z.jsxs)(
            `div`,
            {
              children: [
                `Capsule Resized: `,
                this.m_mapArtworkResizeSuccess.get(`capsule`),
                ` `,
              ],
            },
            `res_capsule`,
          ),
        ),
        e.push(
          (0, Z.jsxs)(
            `div`,
            {
              children: [
                `Header Resized: `,
                this.m_mapArtworkResizeSuccess.get(`background`),
                ` `,
              ],
            },
            `res_header`,
          ),
        ),
        e.push(
          (0, Z.jsxs)(
            `div`,
            {
              children: [
                `Spotlight Resized: `,
                this.m_mapArtworkResizeSuccess.get(`spotlight`),
                ` `,
              ],
            },
            `res_spotlightr`,
          ),
        ),
        e
      );
    }
    render() {
      let e = this.RenderFailure(),
        t = this.m_mapArtworkResizeSuccess.has(`capsule`)
          ? this.RenderResizeProgress()
          : void 0;
      return (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`h2`, {
            children: `Partner Events Backfill Processing Page`,
          }),
          this.state.eBackfillState == null &&
            (0, Z.jsx)(`div`, {
              children: (0, Z.jsx)(`button`, {
                onClick: this.OnArtworkResizeBackfill,
                children: `Begin Artwork Resize Backfill`,
              }),
            }),
          (0, Z.jsx)(`div`, {
            children: (0, Z.jsx)(`button`, {
              onClick: () => Q.CompleteBackfill(`resize_image`),
              children: `Stop Backfill`,
            }),
          }),
          this.state.strInfo &&
            (0, Z.jsxs)(`div`, {
              children: [`Processing: `, this.state.strInfo],
            }),
          (0, Z.jsxs)(`div`, {
            children: [`Events Processed: `, Q.m_nProcessed],
          }),
          (0, Z.jsxs)(`div`, {
            children: [`Events Succeeded: `, Q.m_nSuccesses],
          }),
          (0, Z.jsxs)(`div`, { children: [`Events Warning: `, Q.m_nWarning] }),
          (0, Z.jsxs)(`div`, { children: [`Events Failed: `, Q.m_nFailures] }),
          (0, Z.jsxs)(`div`, { children: [`Events Skipped: `, Q.m_nSkipped] }),
          e.length > 0 &&
            (0, Z.jsxs)(X.Fragment, {
              children: [(0, Z.jsx)(`h2`, { children: `Failure Info` }), e],
            }),
          !!t &&
            (0, Z.jsxs)(`div`, {
              children: [(0, Z.jsx)(`h2`, { children: `Resizing Actions` }), t],
            }),
          this.state.eBackfillState == `started` &&
            (0, Z.jsx)(L, {
              size: `medium`,
              position: `center`,
              string: `Backfill In Progress`,
            }),
        ],
      });
    }
  };
G([J], dt.prototype, `OnArtworkResizeBackfill`, null),
  G([J], dt.prototype, `BeginArtworkResize`, null),
  (dt = G([h], dt));
var ft = i((e, t) => {
    function n(e) {
      "@babel/helpers - typeof";
      return (
        (t.exports = n =
          typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == `function` &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? `symbol`
                  : typeof e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  pt = i((e, t) => {
    var n = ft().default;
    function r(e, t) {
      if (n(e) != `object` || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (r !== void 0) {
        var i = r.call(e, t || `default`);
        if (n(i) != `object`) return i;
        throw TypeError(`@@toPrimitive must return a primitive value.`);
      }
      return (t === `string` ? String : Number)(e);
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  mt = i((e, t) => {
    var n = ft().default,
      r = pt();
    function i(e) {
      var t = r(e, `string`);
      return n(t) == `symbol` ? t : t + ``;
    }
    (t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  ht = i((e, t) => {
    var n = mt();
    function r(e, t, r) {
      return (
        (t = n(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  gt = i((e, t) => {
    var n = ht();
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] == null ? {} : arguments[t];
        t % 2
          ? r(Object(i), !0).forEach(function (t) {
              n(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    (t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  _t = i((e, t) => {
    function n(e) {
      if (Array.isArray(e)) return e;
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  vt = i((e, t) => {
    function n(e, t) {
      var n =
        e == null
          ? null
          : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
      if (n != null) {
        var r,
          i,
          a,
          o,
          s = [],
          c = !0,
          l = !1;
        try {
          if (((a = (n = n.call(e)).next), t === 0)) {
            if (Object(n) !== n) return;
            c = !1;
          } else
            for (
              ;
              !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
              c = !0
            );
        } catch (e) {
          (l = !0), (i = e);
        } finally {
          try {
            if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
              return;
          } finally {
            if (l) throw i;
          }
        }
        return s;
      }
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  yt = i((e, t) => {
    function n(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  bt = i((e, t) => {
    var n = yt();
    function r(e, t) {
      if (e) {
        if (typeof e == `string`) return n(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return (
          r === `Object` && e.constructor && (r = e.constructor.name),
          r === `Map` || r === `Set`
            ? Array.from(e)
            : r === `Arguments` ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
        );
      }
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  xt = i((e, t) => {
    function n() {
      throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  St = i((e, t) => {
    var n = _t(),
      r = vt(),
      i = bt(),
      a = xt();
    function o(e, t) {
      return n(e) || r(e, t) || i(e, t) || a();
    }
    (t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Ct = i((e, t) => {
    function n(e, t) {
      if (e == null) return {};
      var n = {};
      for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
          if (t.indexOf(r) !== -1) continue;
          n[r] = e[r];
        }
      return n;
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  wt = i((e, t) => {
    var n = Ct();
    function r(e, t) {
      if (e == null) return {};
      var r,
        i,
        a = n(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
          (r = o[i]),
            t.indexOf(r) === -1 &&
              {}.propertyIsEnumerable.call(e, r) &&
              (a[r] = e[r]);
      }
      return a;
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Tt = i((e) => {
    var t = gt(),
      n = St(),
      r = wt(),
      i = f(),
      a = [
        `defaultInputValue`,
        `defaultMenuIsOpen`,
        `defaultValue`,
        `inputValue`,
        `menuIsOpen`,
        `onChange`,
        `onInputChange`,
        `onMenuClose`,
        `onMenuOpen`,
        `value`,
      ];
    function o(e) {
      var o = e.defaultInputValue,
        s = o === void 0 ? `` : o,
        c = e.defaultMenuIsOpen,
        l = c !== void 0 && c,
        u = e.defaultValue,
        d = u === void 0 ? null : u,
        f = e.inputValue,
        p = e.menuIsOpen,
        m = e.onChange,
        h = e.onInputChange,
        g = e.onMenuClose,
        _ = e.onMenuOpen,
        v = e.value,
        y = r(e, a),
        b = n(i.useState(f === void 0 ? s : f), 2),
        x = b[0],
        S = b[1],
        C = n(i.useState(p === void 0 ? l : p), 2),
        w = C[0],
        T = C[1],
        E = n(i.useState(v === void 0 ? d : v), 2),
        D = E[0],
        O = E[1],
        k = i.useCallback(
          function (e, t) {
            typeof m == `function` && m(e, t), O(e);
          },
          [m],
        ),
        A = i.useCallback(
          function (e, t) {
            var n;
            typeof h == `function` && (n = h(e, t)), S(n === void 0 ? e : n);
          },
          [h],
        ),
        j = i.useCallback(
          function () {
            typeof _ == `function` && _(), T(!0);
          },
          [_],
        ),
        M = i.useCallback(
          function () {
            typeof g == `function` && g(), T(!1);
          },
          [g],
        ),
        N = f === void 0 ? x : f,
        P = p === void 0 ? w : p,
        F = v === void 0 ? D : v;
      return t(
        t({}, y),
        {},
        {
          inputValue: N,
          menuIsOpen: P,
          onChange: k,
          onInputChange: A,
          onMenuClose: M,
          onMenuOpen: j,
          value: F,
        },
      );
    }
    e.useStateManager = o;
  }),
  Et = i((e, t) => {
    function n() {
      return (
        (t.exports = n =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n.apply(null, arguments)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Dt = i((e, t) => {
    function n(e, t) {
      if (!(e instanceof t))
        throw TypeError(`Cannot call a class as a function`);
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Ot = i((e, t) => {
    var n = mt();
    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          `value` in i && (i.writable = !0),
          Object.defineProperty(e, n(i.key), i);
      }
    }
    function i(e, t, n) {
      return (
        t && r(e.prototype, t),
        n && r(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    (t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  kt = i((e, t) => {
    function n(e, r) {
      return (
        (t.exports = n =
          Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e, r)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  At = i((e, t) => {
    var n = kt();
    function r(e, t) {
      if (typeof t != `function` && t !== null)
        throw TypeError(`Super expression must either be null or a function`);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && n(e, t);
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  jt = i((e, t) => {
    function n(e) {
      return (
        (t.exports = n =
          Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Mt = i((e, t) => {
    function n() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return ((t.exports = n =
        function () {
          return !!e;
        }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports))();
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Nt = i((e, t) => {
    function n(e) {
      if (e === void 0)
        throw ReferenceError(
          `this hasn't been initialised - super() hasn't been called`,
        );
      return e;
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Pt = i((e, t) => {
    var n = ft().default,
      r = Nt();
    function i(e, t) {
      if (t && (n(t) == `object` || typeof t == `function`)) return t;
      if (t !== void 0)
        throw TypeError(
          `Derived constructors may only return object or undefined`,
        );
      return r(e);
    }
    (t.exports = i),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Ft = i((e, t) => {
    var n = jt(),
      r = Mt(),
      i = Pt();
    function a(e) {
      var t = r();
      return function () {
        var r,
          a = n(e);
        if (t) {
          var o = n(this).constructor;
          r = Reflect.construct(a, arguments, o);
        } else r = a.apply(this, arguments);
        return i(this, r);
      };
    }
    (t.exports = a),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  It = i((e, t) => {
    var n = yt();
    function r(e) {
      if (Array.isArray(e)) return n(e);
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Lt = i((e, t) => {
    function n(e) {
      if (
        (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
        e[`@@iterator`] != null
      )
        return Array.from(e);
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Rt = i((e, t) => {
    function n() {
      throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  zt = i((e, t) => {
    var n = It(),
      r = Lt(),
      i = bt(),
      a = Rt();
    function o(e) {
      return n(e) || r(e) || i(e) || a();
    }
    (t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Bt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(e) {
      if (e.sheet) return e.sheet;
      for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
          return document.styleSheets[t];
    }
    function n(e) {
      var t = document.createElement(`style`);
      return (
        t.setAttribute(`data-emotion`, e.key),
        e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
        t.appendChild(document.createTextNode(``)),
        t.setAttribute(`data-s`, ``),
        t
      );
    }
    e.StyleSheet = (function () {
      function e(e) {
        var t = this;
        (this._insertTag = function (e) {
          var n =
            t.tags.length === 0
              ? t.insertionPoint
                ? t.insertionPoint.nextSibling
                : t.prepend
                  ? t.container.firstChild
                  : t.before
              : t.tags[t.tags.length - 1].nextSibling;
          t.container.insertBefore(e, n), t.tags.push(e);
        }),
          (this.isSpeedy = e.speedy === void 0 || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null);
      }
      var r = e.prototype;
      return (
        (r.hydrate = function (e) {
          e.forEach(this._insertTag);
        }),
        (r.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
            this._insertTag(n(this));
          var r = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var i = t(r);
            try {
              i.insertRule(e, i.cssRules.length);
            } catch {}
          } else r.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (r.flush = function () {
          this.tags.forEach(function (e) {
            return e.parentNode && e.parentNode.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })();
  }),
  Vt = i((e, t) => {
    t.exports = Bt();
  }),
  Ht = i((e, t) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e)
        : typeof define == `function` && define.amd
          ? define([`exports`], r)
          : ((n ||= self), r((n.stylis = {})));
    })(e, function (e) {
      var t = `-ms-`,
        n = `-moz-`,
        r = `-webkit-`,
        i = `comm`,
        a = `rule`,
        o = `decl`,
        s = `@page`,
        c = `@media`,
        l = `@import`,
        u = `@charset`,
        d = `@viewport`,
        f = `@supports`,
        p = `@document`,
        m = `@namespace`,
        h = `@keyframes`,
        g = `@font-face`,
        _ = `@counter-style`,
        v = `@font-feature-values`,
        y = `@layer`,
        b = Math.abs,
        x = String.fromCharCode,
        S = Object.assign;
      function C(e, t) {
        return O(e, 0) ^ 45
          ? (((((((t << 2) ^ O(e, 0)) << 2) ^ O(e, 1)) << 2) ^ O(e, 2)) << 2) ^
              O(e, 3)
          : 0;
      }
      function w(e) {
        return e.trim();
      }
      function T(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function E(e, t, n) {
        return e.replace(t, n);
      }
      function D(e, t) {
        return e.indexOf(t);
      }
      function O(e, t) {
        return e.charCodeAt(t) | 0;
      }
      function k(e, t, n) {
        return e.slice(t, n);
      }
      function A(e) {
        return e.length;
      }
      function j(e) {
        return e.length;
      }
      function M(e, t) {
        return t.push(e), e;
      }
      function N(e, t) {
        return e.map(t).join(``);
      }
      (e.line = 1),
        (e.column = 1),
        (e.length = 0),
        (e.position = 0),
        (e.character = 0),
        (e.characters = ``);
      function P(t, n, r, i, a, o, s) {
        return {
          value: t,
          root: n,
          parent: r,
          type: i,
          props: a,
          children: o,
          line: e.line,
          column: e.column,
          length: s,
          return: ``,
        };
      }
      function F(e, t) {
        return S(
          P(``, null, null, ``, null, null, 0),
          e,
          { length: -e.length },
          t,
        );
      }
      function I() {
        return e.character;
      }
      function L() {
        return (
          (e.character = e.position > 0 ? O(e.characters, --e.position) : 0),
          e.column--,
          e.character === 10 && ((e.column = 1), e.line--),
          e.character
        );
      }
      function R() {
        return (
          (e.character =
            e.position < e.length ? O(e.characters, e.position++) : 0),
          e.column++,
          e.character === 10 && ((e.column = 1), e.line++),
          e.character
        );
      }
      function z() {
        return O(e.characters, e.position);
      }
      function ee() {
        return e.position;
      }
      function te(t, n) {
        return k(e.characters, t, n);
      }
      function ne(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function re(t) {
        return (
          (e.line = e.column = 1),
          (e.length = A((e.characters = t))),
          (e.position = 0),
          []
        );
      }
      function ie(t) {
        return (e.characters = ``), t;
      }
      function B(t) {
        return w(
          te(e.position - 1, ce(t === 91 ? t + 2 : t === 40 ? t + 1 : t)),
        );
      }
      function ae(e) {
        return ie(se(re(e)));
      }
      function oe(t) {
        for (; (e.character = z()) && e.character < 33; ) R();
        return ne(t) > 2 || ne(e.character) > 3 ? `` : ` `;
      }
      function se(t) {
        for (; R(); )
          switch (ne(e.character)) {
            case 0:
              M(le(e.position - 1), t);
              break;
            case 2:
              M(B(e.character), t);
              break;
            default:
              M(x(e.character), t);
          }
        return t;
      }
      function V(t, n) {
        for (
          ;
          --n &&
          R() &&
          !(
            e.character < 48 ||
            e.character > 102 ||
            (e.character > 57 && e.character < 65) ||
            (e.character > 70 && e.character < 97)
          );
        );
        return te(t, ee() + (n < 6 && z() == 32 && R() == 32));
      }
      function ce(t) {
        for (; R(); )
          switch (e.character) {
            case t:
              return e.position;
            case 34:
            case 39:
              t !== 34 && t !== 39 && ce(e.character);
              break;
            case 40:
              t === 41 && ce(t);
              break;
            case 92:
              R();
          }
        return e.position;
      }
      function H(t, n) {
        for (
          ;
          R() &&
          t + e.character !== 57 &&
          (t + e.character !== 84 || z() !== 47);
        );
        return `/*` + te(n, e.position - 1) + `*` + x(t === 47 ? t : R());
      }
      function le(t) {
        for (; !ne(z()); ) R();
        return te(t, e.position);
      }
      function U(e) {
        return ie(ue(``, null, null, null, [``], (e = re(e)), 0, [0], e));
      }
      function ue(e, t, n, r, i, a, o, s, c) {
        for (
          var l = 0,
            u = 0,
            d = o,
            f = 0,
            p = 0,
            m = 0,
            h = 1,
            g = 1,
            _ = 1,
            v = 0,
            y = ``,
            b = i,
            S = a,
            C = r,
            w = y;
          g;
        )
          switch (((m = v), (v = R()))) {
            case 40:
              if (m != 108 && O(w, d - 1) == 58) {
                D((w += E(B(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              w += B(v);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              w += oe(m);
              break;
            case 92:
              w += V(ee() - 1, 7);
              continue;
            case 47:
              switch (z()) {
                case 42:
                case 47:
                  M(fe(H(R(), ee()), t, n), c);
                  break;
                default:
                  w += `/`;
              }
              break;
            case 123 * h:
              s[l++] = A(w) * _;
            case 125 * h:
            case 59:
            case 0:
              switch (v) {
                case 0:
                case 125:
                  g = 0;
                case 59 + u:
                  _ == -1 && (w = E(w, /\f/g, ``)),
                    p > 0 &&
                      A(w) - d &&
                      M(
                        p > 32
                          ? pe(w + `;`, r, n, d - 1)
                          : pe(E(w, ` `, ``) + `;`, r, n, d - 2),
                        c,
                      );
                  break;
                case 59:
                  w += `;`;
                default:
                  if (
                    (M(
                      (C = de(w, t, n, l, u, i, s, y, (b = []), (S = []), d)),
                      a,
                    ),
                    v === 123)
                  ) {
                    if (u === 0) ue(w, t, C, C, b, a, d, s, S);
                    else
                      switch (f === 99 && O(w, 3) === 110 ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          ue(
                            e,
                            C,
                            C,
                            r &&
                              M(de(e, C, C, 0, 0, i, s, y, i, (b = []), d), S),
                            i,
                            S,
                            d,
                            s,
                            r ? b : S,
                          );
                          break;
                        default:
                          ue(w, C, C, C, [``], S, 0, s, S);
                      }
                  }
              }
              (l = u = p = 0), (h = _ = 1), (y = w = ``), (d = o);
              break;
            case 58:
              (d = 1 + A(w)), (p = m);
            default:
              if (h < 1) {
                if (v == 123) --h;
                else if (v == 125 && h++ == 0 && L() == 125) continue;
              }
              switch (((w += x(v)), v * h)) {
                case 38:
                  _ = u > 0 ? 1 : ((w += `\f`), -1);
                  break;
                case 44:
                  (s[l++] = (A(w) - 1) * _), (_ = 1);
                  break;
                case 64:
                  z() === 45 && (w += B(R())),
                    (f = z()),
                    (u = d = A((y = w += le(ee())))),
                    v++;
                  break;
                case 45:
                  m === 45 && A(w) == 2 && (h = 0);
              }
          }
        return a;
      }
      function de(e, t, n, r, i, o, s, c, l, u, d) {
        for (
          var f = i - 1, p = i === 0 ? o : [``], m = j(p), h = 0, g = 0, _ = 0;
          h < r;
          ++h
        )
          for (
            var v = 0, y = k(e, f + 1, (f = b((g = s[h])))), x = e;
            v < m;
            ++v
          )
            (x = w(g > 0 ? p[v] + ` ` + y : E(y, /&\f/g, p[v]))) &&
              (l[_++] = x);
        return P(e, t, n, i === 0 ? a : c, l, u, d);
      }
      function fe(e, t, n) {
        return P(e, t, n, i, x(I()), k(e, 2, -2), 0);
      }
      function pe(e, t, n, r) {
        return P(e, t, n, o, k(e, 0, r), k(e, r + 1, -1), r);
      }
      function me(e, i, a) {
        switch (C(e, i)) {
          case 5103:
            return r + `print-` + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return r + e + e;
          case 4789:
            return n + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return r + e + n + e + t + e + e;
          case 5936:
            switch (O(e, i + 11)) {
              case 114:
                return r + e + t + E(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
              case 108:
                return r + e + t + E(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
              case 45:
                return r + e + t + E(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return r + e + t + e + e;
          case 6165:
            return r + e + t + `flex-` + e + e;
          case 5187:
            return (
              r +
              e +
              E(e, /(\w+).+(:[^]+)/, r + `box-$1$2` + t + `flex-$1$2`) +
              e
            );
          case 5443:
            return (
              r +
              e +
              t +
              `flex-item-` +
              E(e, /flex-|-self/g, ``) +
              (T(e, /flex-|baseline/)
                ? ``
                : t + `grid-row-` + E(e, /flex-|-self/g, ``)) +
              e
            );
          case 4675:
            return (
              r +
              e +
              t +
              `flex-line-pack` +
              E(e, /align-content|flex-|-self/g, ``) +
              e
            );
          case 5548:
            return r + e + t + E(e, `shrink`, `negative`) + e;
          case 5292:
            return r + e + t + E(e, `basis`, `preferred-size`) + e;
          case 6060:
            return (
              r +
              `box-` +
              E(e, `-grow`, ``) +
              r +
              e +
              t +
              E(e, `grow`, `positive`) +
              e
            );
          case 4554:
            return r + E(e, /([^-])(transform)/g, `$1` + r + `$2`) + e;
          case 6187:
            return (
              E(
                E(E(e, /(zoom-|grab)/, r + `$1`), /(image-set)/, r + `$1`),
                e,
                ``,
              ) + e
            );
          case 5495:
          case 3959:
            return E(e, /(image-set\([^]*)/, r + "$1$`$1");
          case 4968:
            return (
              E(
                E(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  r + `box-pack:$3` + t + `flex-pack:$3`,
                ),
                /s.+-b[^;]+/,
                `justify`,
              ) +
              r +
              e +
              e
            );
          case 4200:
            if (!T(e, /flex-|baseline/))
              return t + `grid-column-align` + k(e, i) + e;
            break;
          case 2592:
          case 3360:
            return t + E(e, `template-`, ``) + e;
          case 4384:
          case 3616:
            return a &&
              a.some(function (e, t) {
                return (i = t), T(e.props, /grid-\w+-end/);
              })
              ? ~D(e + (a = a[i].value), `span`)
                ? e
                : t +
                  E(e, `-start`, ``) +
                  e +
                  t +
                  `grid-row-span:` +
                  (~D(a, `span`) ? T(a, /\d+/) : +T(a, /\d+/) - T(e, /\d+/)) +
                  `;`
              : t + E(e, `-start`, ``) + e;
          case 4896:
          case 4128:
            return a &&
              a.some(function (e) {
                return T(e.props, /grid-\w+-start/);
              })
              ? e
              : t + E(E(e, `-end`, `-span`), `span `, ``) + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return E(e, /(.+)-inline(.+)/, r + `$1$2`) + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (A(e) - 1 - i > 6)
              switch (O(e, i + 1)) {
                case 109:
                  if (O(e, i + 4) !== 45) break;
                case 102:
                  return (
                    E(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      `$1` +
                        r +
                        `$2-$3$1` +
                        n +
                        (O(e, i + 3) == 108 ? `$3` : `$2-$3`),
                    ) + e
                  );
                case 115:
                  return ~D(e, `stretch`)
                    ? me(E(e, `stretch`, `fill-available`), i, a) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return E(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (n, r, i, a, o, s, c) {
                return (
                  t +
                  r +
                  `:` +
                  i +
                  c +
                  (a ? t + r + `-span:` + (o ? s : +s - i) + c : ``) +
                  e
                );
              },
            );
          case 4949:
            if (O(e, i + 6) === 121) return E(e, `:`, `:` + r) + e;
            break;
          case 6444:
            switch (O(e, O(e, 14) === 45 ? 18 : 11)) {
              case 120:
                return (
                  E(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    `$1` +
                      r +
                      (O(e, 14) === 45 ? `inline-` : ``) +
                      `box$3$1` +
                      r +
                      `$2$3$1` +
                      t +
                      `$2box$3`,
                  ) + e
                );
              case 100:
                return E(e, `:`, `:` + t) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return E(e, `scroll-`, `scroll-snap-`) + e;
        }
        return e;
      }
      function he(e, t) {
        for (var n = ``, r = j(e), i = 0; i < r; i++)
          n += t(e[i], i, e, t) || ``;
        return n;
      }
      function W(e, t, n, r) {
        switch (e.type) {
          case y:
            if (e.children.length) break;
          case l:
          case o:
            return (e.return = e.return || e.value);
          case i:
            return ``;
          case h:
            return (e.return = e.value + `{` + he(e.children, r) + `}`);
          case a:
            e.value = e.props.join(`,`);
        }
        return A((n = he(e.children, r)))
          ? (e.return = e.value + `{` + n + `}`)
          : ``;
      }
      function G(e) {
        var t = j(e);
        return function (n, r, i, a) {
          for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
          return o;
        };
      }
      function ge(e) {
        return function (t) {
          t.root || ((t = t.return) && e(t));
        };
      }
      function _e(e, i, s, c) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case o:
              e.return = me(e.value, e.length, s);
              return;
            case h:
              return he([F(e, { value: E(e.value, `@`, `@` + r) })], c);
            case a:
              if (e.length)
                return N(e.props, function (i) {
                  switch (T(i, /(::plac\w+|:read-\w+)/)) {
                    case `:read-only`:
                    case `:read-write`:
                      return he(
                        [
                          F(e, {
                            props: [E(i, /:(read-\w+)/, `:` + n + `$1`)],
                          }),
                        ],
                        c,
                      );
                    case `::placeholder`:
                      return he(
                        [
                          F(e, {
                            props: [E(i, /:(plac\w+)/, `:` + r + `input-$1`)],
                          }),
                          F(e, { props: [E(i, /:(plac\w+)/, `:` + n + `$1`)] }),
                          F(e, { props: [E(i, /:(plac\w+)/, t + `input-$1`)] }),
                        ],
                        c,
                      );
                  }
                  return ``;
                });
          }
      }
      function ve(e) {
        switch (e.type) {
          case a:
            e.props = e.props.map(function (t) {
              return N(ae(t), function (t, n, r) {
                switch (O(t, 0)) {
                  case 12:
                    return k(t, 1, A(t));
                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return t;
                  case 58:
                    r[++n] === `global` &&
                      ((r[n] = ``), (r[++n] = `\f` + k(r[n], (n = 1), -1)));
                  case 32:
                    return n === 1 ? `` : t;
                  default:
                    switch (n) {
                      case 0:
                        return (e = t), j(r) > 1 ? `` : t;
                      case (n = j(r) - 1):
                      case 2:
                        return n === 2 ? t + e + e : t + e;
                      default:
                        return t;
                    }
                }
              });
            });
        }
      }
      (e.CHARSET = u),
        (e.COMMENT = i),
        (e.COUNTER_STYLE = _),
        (e.DECLARATION = o),
        (e.DOCUMENT = p),
        (e.FONT_FACE = g),
        (e.FONT_FEATURE_VALUES = v),
        (e.IMPORT = l),
        (e.KEYFRAMES = h),
        (e.LAYER = y),
        (e.MEDIA = c),
        (e.MOZ = n),
        (e.MS = t),
        (e.NAMESPACE = m),
        (e.PAGE = s),
        (e.RULESET = a),
        (e.SUPPORTS = f),
        (e.VIEWPORT = d),
        (e.WEBKIT = r),
        (e.abs = b),
        (e.alloc = re),
        (e.append = M),
        (e.assign = S),
        (e.caret = ee),
        (e.char = I),
        (e.charat = O),
        (e.combine = N),
        (e.comment = fe),
        (e.commenter = H),
        (e.compile = U),
        (e.copy = F),
        (e.dealloc = ie),
        (e.declaration = pe),
        (e.delimit = B),
        (e.delimiter = ce),
        (e.escaping = V),
        (e.from = x),
        (e.hash = C),
        (e.identifier = le),
        (e.indexof = D),
        (e.match = T),
        (e.middleware = G),
        (e.namespace = ve),
        (e.next = R),
        (e.node = P),
        (e.parse = ue),
        (e.peek = z),
        (e.prefix = me),
        (e.prefixer = _e),
        (e.prev = L),
        (e.replace = E),
        (e.ruleset = de),
        (e.rulesheet = ge),
        (e.serialize = he),
        (e.sizeof = j),
        (e.slice = te),
        (e.stringify = W),
        (e.strlen = A),
        (e.substr = k),
        (e.token = ne),
        (e.tokenize = ae),
        (e.tokenizer = se),
        (e.trim = w),
        (e.whitespace = oe),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  }),
  Ut = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (e) {
        var t = new WeakMap();
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return t.set(n, r), r;
        };
      });
  }),
  Wt = i((e, t) => {
    t.exports = Ut();
  }),
  Gt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n];
      };
    }
    e.default = t;
  }),
  Kt = i((e, t) => {
    t.exports = Gt();
  }),
  qt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = Vt(),
      n = Ht(),
      r = Wt(),
      i = Kt();
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = a(r),
      s = a(i),
      c = function (e, t, r) {
        for (
          var i = 0, a = 0;
          (i = a),
            (a = n.peek()),
            i === 38 && a === 12 && (t[r] = 1),
            !n.token(a);
        )
          n.next();
        return n.slice(e, n.position);
      },
      l = function (e, t) {
        var r = -1,
          i = 44;
        do
          switch (n.token(i)) {
            case 0:
              i === 38 && n.peek() === 12 && (t[r] = 1),
                (e[r] += c(n.position - 1, t, r));
              break;
            case 2:
              e[r] += n.delimit(i);
              break;
            case 4:
              if (i === 44) {
                (e[++r] = n.peek() === 58 ? `&\f` : ``), (t[r] = e[r].length);
                break;
              }
            default:
              e[r] += n.from(i);
          }
        while ((i = n.next()));
        return e;
      },
      u = function (e, t) {
        return n.dealloc(l(n.alloc(e), t));
      },
      d = new WeakMap(),
      f = function (e) {
        if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
          for (
            var t = e.value,
              n = e.parent,
              r = e.column === n.column && e.line === n.line;
            n.type !== `rule`;
          )
            if (((n = n.parent), !n)) return;
          if (
            (e.props.length !== 1 || t.charCodeAt(0) === 58 || d.get(n)) &&
            !r
          ) {
            d.set(e, !0);
            for (
              var i = [], a = u(t, i), o = n.props, s = 0, c = 0;
              s < a.length;
              s++
            )
              for (var l = 0; l < o.length; l++, c++)
                e.props[c] = i[s]
                  ? a[s].replace(/&\f/g, o[l])
                  : o[l] + ` ` + a[s];
          }
        }
      },
      p = function (e) {
        if (e.type === `decl`) {
          var t = e.value;
          t.charCodeAt(0) === 108 &&
            t.charCodeAt(2) === 98 &&
            ((e.return = ``), (e.value = ``));
        }
      };
    function m(e, t) {
      switch (n.hash(e, t)) {
        case 5103:
          return n.WEBKIT + `print-` + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return n.WEBKIT + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return n.WEBKIT + e + n.MOZ + e + n.MS + e + e;
        case 6828:
        case 4268:
          return n.WEBKIT + e + n.MS + e + e;
        case 6165:
          return n.WEBKIT + e + n.MS + `flex-` + e + e;
        case 5187:
          return (
            n.WEBKIT +
            e +
            n.replace(
              e,
              /(\w+).+(:[^]+)/,
              n.WEBKIT + `box-$1$2` + n.MS + `flex-$1$2`,
            ) +
            e
          );
        case 5443:
          return (
            n.WEBKIT +
            e +
            n.MS +
            `flex-item-` +
            n.replace(e, /flex-|-self/, ``) +
            e
          );
        case 4675:
          return (
            n.WEBKIT +
            e +
            n.MS +
            `flex-line-pack` +
            n.replace(e, /align-content|flex-|-self/, ``) +
            e
          );
        case 5548:
          return n.WEBKIT + e + n.MS + n.replace(e, `shrink`, `negative`) + e;
        case 5292:
          return (
            n.WEBKIT + e + n.MS + n.replace(e, `basis`, `preferred-size`) + e
          );
        case 6060:
          return (
            n.WEBKIT +
            `box-` +
            n.replace(e, `-grow`, ``) +
            n.WEBKIT +
            e +
            n.MS +
            n.replace(e, `grow`, `positive`) +
            e
          );
        case 4554:
          return (
            n.WEBKIT +
            n.replace(e, /([^-])(transform)/g, `$1` + n.WEBKIT + `$2`) +
            e
          );
        case 6187:
          return (
            n.replace(
              n.replace(
                n.replace(e, /(zoom-|grab)/, n.WEBKIT + `$1`),
                /(image-set)/,
                n.WEBKIT + `$1`,
              ),
              e,
              ``,
            ) + e
          );
        case 5495:
        case 3959:
          return n.replace(e, /(image-set\([^]*)/, n.WEBKIT + "$1$`$1");
        case 4968:
          return (
            n.replace(
              n.replace(
                e,
                /(.+:)(flex-)?(.*)/,
                n.WEBKIT + `box-pack:$3` + n.MS + `flex-pack:$3`,
              ),
              /s.+-b[^;]+/,
              `justify`,
            ) +
            n.WEBKIT +
            e +
            e
          );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return n.replace(e, /(.+)-inline(.+)/, n.WEBKIT + `$1$2`) + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (n.strlen(e) - 1 - t > 6)
            switch (n.charat(e, t + 1)) {
              case 109:
                if (n.charat(e, t + 4) !== 45) break;
              case 102:
                return (
                  n.replace(
                    e,
                    /(.+:)(.+)-([^]+)/,
                    `$1` +
                      n.WEBKIT +
                      `$2-$3$1` +
                      n.MOZ +
                      (n.charat(e, t + 3) == 108 ? `$3` : `$2-$3`),
                  ) + e
                );
              case 115:
                return ~n.indexof(e, `stretch`)
                  ? m(n.replace(e, `stretch`, `fill-available`), t) + e
                  : e;
            }
          break;
        case 4949:
          if (n.charat(e, t + 1) !== 115) break;
        case 6444:
          switch (
            n.charat(e, n.strlen(e) - 3 - (~n.indexof(e, `!important`) && 10))
          ) {
            case 107:
              return n.replace(e, `:`, `:` + n.WEBKIT) + e;
            case 101:
              return (
                n.replace(
                  e,
                  /(.+:)([^;!]+)(;|!.+)?/,
                  `$1` +
                    n.WEBKIT +
                    (n.charat(e, 14) === 45 ? `inline-` : ``) +
                    `box$3$1` +
                    n.WEBKIT +
                    `$2$3$1` +
                    n.MS +
                    `$2box$3`,
                ) + e
              );
          }
          break;
        case 5936:
          switch (n.charat(e, t + 11)) {
            case 114:
              return (
                n.WEBKIT +
                e +
                n.MS +
                n.replace(e, /[svh]\w+-[tblr]{2}/, `tb`) +
                e
              );
            case 108:
              return (
                n.WEBKIT +
                e +
                n.MS +
                n.replace(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) +
                e
              );
            case 45:
              return (
                n.WEBKIT +
                e +
                n.MS +
                n.replace(e, /[svh]\w+-[tblr]{2}/, `lr`) +
                e
              );
          }
          return n.WEBKIT + e + n.MS + e + e;
      }
      return e;
    }
    var h = function (e, t, r, i) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case n.DECLARATION:
              e.return = m(e.value, e.length);
              break;
            case n.KEYFRAMES:
              return n.serialize(
                [n.copy(e, { value: n.replace(e.value, `@`, `@` + n.WEBKIT) })],
                i,
              );
            case n.RULESET:
              if (e.length)
                return n.combine(e.props, function (t) {
                  switch (n.match(t, /(::plac\w+|:read-\w+)/)) {
                    case `:read-only`:
                    case `:read-write`:
                      return n.serialize(
                        [
                          n.copy(e, {
                            props: [
                              n.replace(t, /:(read-\w+)/, `:` + n.MOZ + `$1`),
                            ],
                          }),
                        ],
                        i,
                      );
                    case `::placeholder`:
                      return n.serialize(
                        [
                          n.copy(e, {
                            props: [
                              n.replace(
                                t,
                                /:(plac\w+)/,
                                `:` + n.WEBKIT + `input-$1`,
                              ),
                            ],
                          }),
                          n.copy(e, {
                            props: [
                              n.replace(t, /:(plac\w+)/, `:` + n.MOZ + `$1`),
                            ],
                          }),
                          n.copy(e, {
                            props: [
                              n.replace(t, /:(plac\w+)/, n.MS + `input-$1`),
                            ],
                          }),
                        ],
                        i,
                      );
                  }
                  return ``;
                });
          }
      },
      g = typeof document < `u`,
      _ = g
        ? void 0
        : o.default(function () {
            return s.default(function () {
              var e = {};
              return function (t) {
                return e[t];
              };
            });
          }),
      v = [h];
    e.default = function (e) {
      var r = e.key;
      if (g && r === `css`) {
        var i = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
        Array.prototype.forEach.call(i, function (e) {
          e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
            (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
        });
      }
      var a = e.stylisPlugins || v,
        o = {},
        s,
        c = [];
      g &&
        ((s = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll(`style[data-emotion^="` + r + ` "]`),
          function (e) {
            for (
              var t = e.getAttribute(`data-emotion`).split(` `), n = 1;
              n < t.length;
              n++
            )
              o[t[n]] = !0;
            c.push(e);
          },
        ));
      var l,
        u = [f, p];
      if (g) {
        var d,
          m = [
            n.stringify,
            n.rulesheet(function (e) {
              d.insert(e);
            }),
          ],
          h = n.middleware(u.concat(a, m)),
          y = function (e) {
            return n.serialize(n.compile(e), h);
          };
        l = function (e, t, n, r) {
          (d = n),
            y(e ? e + `{` + t.styles + `}` : t.styles),
            r && (T.inserted[t.name] = !0);
        };
      } else {
        var b = [n.stringify],
          x = n.middleware(u.concat(a, b)),
          S = function (e) {
            return n.serialize(n.compile(e), x);
          },
          C = _(a)(r),
          w = function (e, t) {
            var n = t.name;
            return (
              C[n] === void 0 &&
                (C[n] = S(e ? e + `{` + t.styles + `}` : t.styles)),
              C[n]
            );
          };
        l = function (e, t, n, r) {
          var i = t.name,
            a = w(e, t);
          if (T.compat === void 0) return r && (T.inserted[i] = !0), a;
          if (r) T.inserted[i] = a;
          else return a;
        };
      }
      var T = {
        key: r,
        sheet: new t.StyleSheet({
          key: r,
          container: s,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: o,
        registered: {},
        insert: l,
      };
      return T.sheet.hydrate(c), T;
    };
  }),
  Jt = i((e, t) => {
    t.exports = qt();
  }),
  Yt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = c();
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = n(t);
    e.default = function (e, t) {
      return r.default(e, t);
    };
  }),
  Xt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = typeof document < `u`;
    function n(e, t, n) {
      var r = ``;
      return (
        n.split(` `).forEach(function (n) {
          e[n] === void 0 ? (r += n + ` `) : t.push(e[n] + `;`);
        }),
        r
      );
    }
    var r = function (e, n, r) {
      var i = e.key + `-` + n.name;
      (r === !1 || (t === !1 && e.compat !== void 0)) &&
        e.registered[i] === void 0 &&
        (e.registered[i] = n.styles);
    };
    (e.getRegisteredStyles = n),
      (e.insertStyles = function (e, n, i) {
        r(e, n, i);
        var a = e.key + `-` + n.name;
        if (e.inserted[n.name] === void 0) {
          var o = ``,
            s = n;
          do {
            var c = e.insert(n === s ? `.` + a : ``, s, e.sheet, !0);
            !t && c !== void 0 && (o += c), (s = s.next);
          } while (s !== void 0);
          if (!t && o.length !== 0) return o;
        }
      }),
      (e.registerStyles = r);
  }),
  Zt = i((e, t) => {
    t.exports = Xt();
  }),
  Qt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(e) {
      for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
        (n =
          (e.charCodeAt(r) & 255) |
          ((e.charCodeAt(++r) & 255) << 8) |
          ((e.charCodeAt(++r) & 255) << 16) |
          ((e.charCodeAt(++r) & 255) << 24)),
          (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
          (n ^= n >>> 24),
          (t =
            ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
            ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
      switch (i) {
        case 3:
          t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
          t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
          (t ^= e.charCodeAt(r) & 255),
            (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
      }
      return (
        (t ^= t >>> 13),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        ((t ^ (t >>> 15)) >>> 0).toString(36)
      );
    }
    e.default = t;
  }),
  $t = i((e, t) => {
    t.exports = Qt();
  }),
  en = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      });
  }),
  tn = i((e, t) => {
    t.exports = en();
  }),
  nn = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = $t(),
      n = tn(),
      r = Kt();
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = i(t),
      o = i(n),
      s = i(r),
      c = /[A-Z]|^ms/g,
      l = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      u = function (e) {
        return e.charCodeAt(1) === 45;
      },
      d = function (e) {
        return e != null && typeof e != `boolean`;
      },
      f = s.default(function (e) {
        return u(e) ? e : e.replace(c, `-$&`).toLowerCase();
      }),
      p = function (e, t) {
        switch (e) {
          case `animation`:
          case `animationName`:
            if (typeof t == `string`)
              return t.replace(l, function (e, t, n) {
                return (_ = { name: t, styles: n, next: _ }), t;
              });
        }
        return o.default[e] !== 1 && !u(e) && typeof t == `number` && t !== 0
          ? t + `px`
          : t;
      };
    function m(e, t, n) {
      if (n == null) return ``;
      if (n.__emotion_styles !== void 0) return n;
      switch (typeof n) {
        case `boolean`:
          return ``;
        case `object`:
          if (n.anim === 1)
            return (_ = { name: n.name, styles: n.styles, next: _ }), n.name;
          if (n.styles !== void 0) {
            var r = n.next;
            if (r !== void 0)
              for (; r !== void 0; )
                (_ = { name: r.name, styles: r.styles, next: _ }), (r = r.next);
            return n.styles + `;`;
          }
          return h(e, t, n);
        case `function`:
          if (e !== void 0) {
            var i = _,
              a = n(e);
            return (_ = i), m(e, t, a);
          }
      }
      if (t == null) return n;
      var o = t[n];
      return o === void 0 ? n : o;
    }
    function h(e, t, n) {
      var r = ``;
      if (Array.isArray(n))
        for (var i = 0; i < n.length; i++) r += m(e, t, n[i]) + `;`;
      else
        for (var a in n) {
          var o = n[a];
          if (typeof o != `object`)
            t != null && t[o] !== void 0
              ? (r += a + `{` + t[o] + `}`)
              : d(o) && (r += f(a) + `:` + p(a, o) + `;`);
          else if (
            Array.isArray(o) &&
            typeof o[0] == `string` &&
            (t == null || t[o[0]] === void 0)
          )
            for (var s = 0; s < o.length; s++)
              d(o[s]) && (r += f(a) + `:` + p(a, o[s]) + `;`);
          else {
            var c = m(e, t, o);
            switch (a) {
              case `animation`:
              case `animationName`:
                r += f(a) + `:` + c + `;`;
                break;
              default:
                r += a + `{` + c + `}`;
            }
          }
        }
      return r;
    }
    var g = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
      _;
    e.serializeStyles = function (e, t, n) {
      if (
        e.length === 1 &&
        typeof e[0] == `object` &&
        e[0] !== null &&
        e[0].styles !== void 0
      )
        return e[0];
      var r = !0,
        i = ``;
      _ = void 0;
      var o = e[0];
      o == null || o.raw === void 0
        ? ((r = !1), (i += m(n, t, o)))
        : (i += o[0]);
      for (var s = 1; s < e.length; s++) (i += m(n, t, e[s])), r && (i += o[s]);
      g.lastIndex = 0;
      for (var c = ``, l; (l = g.exec(i)) !== null; ) c += `-` + l[1];
      return { name: a.default(i) + c, styles: i, next: _ };
    };
  }),
  rn = i((e, t) => {
    t.exports = nn();
  }),
  an = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = f();
    function n(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var r = n(t),
      i = typeof document < `u`,
      a = function (e) {
        return e();
      },
      o = r.useInsertionEffect ? r.useInsertionEffect : !1,
      s = (i && o) || a,
      c = o || r.useLayoutEffect;
    (e.useInsertionEffectAlwaysWithSyncFallback = s),
      (e.useInsertionEffectWithLayoutFallback = c);
  }),
  on = i((e, t) => {
    t.exports = an();
  }),
  sn = i((e) => {
    var t = f(),
      n = Jt(),
      r = Et(),
      i = Wt(),
      a = Yt(),
      o = Zt(),
      s = rn(),
      c = on();
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var d = u(t),
      p = l(n),
      m = l(i),
      h = typeof document < `u`,
      g = {}.hasOwnProperty,
      _ = d.createContext(
        typeof HTMLElement < `u` ? p.default({ key: `css` }) : null,
      ),
      v = _.Provider,
      y = function () {
        return t.useContext(_);
      };
    (e.withEmotionCache = function (e) {
      return t.forwardRef(function (n, r) {
        return e(n, t.useContext(_), r);
      });
    }),
      h ||
        (e.withEmotionCache = function (e) {
          return function (n) {
            var r = t.useContext(_);
            return r === null
              ? ((r = p.default({ key: `css` })),
                d.createElement(_.Provider, { value: r }, e(n, r)))
              : e(n, r);
          };
        });
    var b = d.createContext({}),
      x = function () {
        return d.useContext(b);
      },
      S = function (e, t) {
        return typeof t == `function` ? t(e) : r({}, e, t);
      },
      C = m.default(function (e) {
        return m.default(function (t) {
          return S(e, t);
        });
      }),
      w = function (e) {
        var t = d.useContext(b);
        return (
          e.theme !== t && (t = C(t)(e.theme)),
          d.createElement(b.Provider, { value: t }, e.children)
        );
      };
    function T(e) {
      var t = e.displayName || e.name || `Component`,
        n = d.forwardRef(function (t, n) {
          var i = d.useContext(b);
          return d.createElement(e, r({ theme: i, ref: n }, t));
        });
      return (n.displayName = `WithTheme(` + t + `)`), a.default(n, e);
    }
    var E = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
      D = function (e, t) {
        var n = {};
        for (var r in t) g.call(t, r) && (n[r] = t[r]);
        return (n[E] = e), n;
      },
      O = function (e) {
        var t = e.cache,
          n = e.serialized,
          r = e.isStringTag;
        o.registerStyles(t, n, r);
        var i = c.useInsertionEffectAlwaysWithSyncFallback(function () {
          return o.insertStyles(t, n, r);
        });
        if (!h && i !== void 0) {
          for (var a, s = n.name, l = n.next; l !== void 0; )
            (s += ` ` + l.name), (l = l.next);
          return d.createElement(
            `style`,
            ((a = {}),
            (a[`data-emotion`] = t.key + ` ` + s),
            (a.dangerouslySetInnerHTML = { __html: i }),
            (a.nonce = t.sheet.nonce),
            a),
          );
        }
        return null;
      },
      k = e.withEmotionCache(function (e, t, n) {
        var r = e.css;
        typeof r == `string` &&
          t.registered[r] !== void 0 &&
          (r = t.registered[r]);
        var i = e[E],
          a = [r],
          c = ``;
        typeof e.className == `string`
          ? (c = o.getRegisteredStyles(t.registered, a, e.className))
          : e.className != null && (c = e.className + ` `);
        var l = s.serializeStyles(a, void 0, d.useContext(b));
        c += t.key + `-` + l.name;
        var u = {};
        for (var f in e)
          g.call(e, f) && f !== `css` && f !== E && (u[f] = e[f]);
        return (
          (u.ref = n),
          (u.className = c),
          d.createElement(
            d.Fragment,
            null,
            d.createElement(O, {
              cache: t,
              serialized: l,
              isStringTag: typeof i == `string`,
            }),
            d.createElement(i, u),
          )
        );
      });
    (e.CacheProvider = v),
      (e.Emotion = k),
      (e.ThemeContext = b),
      (e.ThemeProvider = w),
      (e.__unsafe_useEmotionCache = y),
      (e.createEmotionProps = D),
      (e.hasOwnProperty = g),
      (e.isBrowser = h),
      (e.useTheme = x),
      (e.withTheme = T);
  }),
  cn = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = sn(),
      n = f(),
      r = Zt(),
      i = on(),
      a = rn();
    Jt(), Et(), Wt(), Yt(), c();
    function o(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var s = o(n),
      l = function (e, n) {
        var r = arguments;
        if (n == null || !t.hasOwnProperty.call(n, `css`))
          return s.createElement.apply(void 0, r);
        var i = r.length,
          a = Array(i);
        (a[0] = t.Emotion), (a[1] = t.createEmotionProps(e, n));
        for (var o = 2; o < i; o++) a[o] = r[o];
        return s.createElement.apply(null, a);
      },
      u = t.withEmotionCache(function (e, n) {
        var o = e.styles,
          c = a.serializeStyles([o], void 0, s.useContext(t.ThemeContext));
        if (!t.isBrowser) {
          for (var l, u = c.name, d = c.styles, f = c.next; f !== void 0; )
            (u += ` ` + f.name), (d += f.styles), (f = f.next);
          var p = n.compat === !0,
            m = n.insert(``, { name: u, styles: d }, n.sheet, p);
          return p
            ? null
            : s.createElement(
                `style`,
                ((l = {}),
                (l[`data-emotion`] = n.key + `-global ` + u),
                (l.dangerouslySetInnerHTML = { __html: m }),
                (l.nonce = n.sheet.nonce),
                l),
              );
        }
        var h = s.useRef();
        return (
          i.useInsertionEffectWithLayoutFallback(
            function () {
              var e = n.key + `-global`,
                t = new n.sheet.constructor({
                  key: e,
                  nonce: n.sheet.nonce,
                  container: n.sheet.container,
                  speedy: n.sheet.isSpeedy,
                }),
                r = !1,
                i = document.querySelector(
                  `style[data-emotion="` + e + ` ` + c.name + `"]`,
                );
              return (
                n.sheet.tags.length && (t.before = n.sheet.tags[0]),
                i !== null &&
                  ((r = !0), i.setAttribute(`data-emotion`, e), t.hydrate([i])),
                (h.current = [t, r]),
                function () {
                  t.flush();
                }
              );
            },
            [n],
          ),
          i.useInsertionEffectWithLayoutFallback(
            function () {
              var e = h.current,
                t = e[0];
              if (e[1]) {
                e[1] = !1;
                return;
              }
              c.next !== void 0 && r.insertStyles(n, c.next, !0),
                t.tags.length &&
                  ((t.before = t.tags[t.tags.length - 1].nextElementSibling),
                  t.flush()),
                n.insert(``, c, t, !1);
            },
            [n, c.name],
          ),
          null
        );
      });
    function d() {
      var e = [...arguments];
      return a.serializeStyles(e);
    }
    var p = function () {
        var e = d.apply(void 0, arguments),
          t = `animation-` + e.name;
        return {
          name: t,
          styles: `@keyframes ` + t + `{` + e.styles + `}`,
          anim: 1,
          toString: function () {
            return `_EMO_` + this.name + `_` + this.styles + `_EMO_`;
          },
        };
      },
      m = function e(t) {
        for (var n = t.length, r = 0, i = ``; r < n; r++) {
          var a = t[r];
          if (a != null) {
            var o = void 0;
            switch (typeof a) {
              case `boolean`:
                break;
              case `object`:
                if (Array.isArray(a)) o = e(a);
                else
                  for (var s in ((o = ``), a))
                    a[s] && s && (o && (o += ` `), (o += s));
                break;
              default:
                o = a;
            }
            o && (i && (i += ` `), (i += o));
          }
        }
        return i;
      };
    function h(e, t, n) {
      var i = [],
        a = r.getRegisteredStyles(e, i, n);
      return i.length < 2 ? n : a + t(i);
    }
    var g = function (e) {
        var n = e.cache,
          a = e.serializedArr,
          o = i.useInsertionEffectAlwaysWithSyncFallback(function () {
            for (var e = ``, i = 0; i < a.length; i++) {
              var o = r.insertStyles(n, a[i], !1);
              !t.isBrowser && o !== void 0 && (e += o);
            }
            if (!t.isBrowser) return e;
          });
        if (!t.isBrowser && o.length !== 0) {
          var c;
          return s.createElement(
            `style`,
            ((c = {}),
            (c[`data-emotion`] =
              n.key +
              ` ` +
              a
                .map(function (e) {
                  return e.name;
                })
                .join(` `)),
            (c.dangerouslySetInnerHTML = { __html: o }),
            (c.nonce = n.sheet.nonce),
            c),
          );
        }
        return null;
      },
      _ = t.withEmotionCache(function (e, n) {
        var i = [],
          o = function () {
            var e = [...arguments],
              t = a.serializeStyles(e, n.registered);
            return i.push(t), r.registerStyles(n, t, !1), n.key + `-` + t.name;
          },
          c = {
            css: o,
            cx: function () {
              var e = [...arguments];
              return h(n.registered, o, m(e));
            },
            theme: s.useContext(t.ThemeContext),
          },
          l = e.children(c);
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(g, { cache: n, serializedArr: i }),
          l,
        );
      });
    (e.CacheProvider = t.CacheProvider),
      (e.ThemeContext = t.ThemeContext),
      (e.ThemeProvider = t.ThemeProvider),
      (e.__unsafe_useEmotionCache = t.__unsafe_useEmotionCache),
      (e.useTheme = t.useTheme),
      Object.defineProperty(e, "withEmotionCache", {
        enumerable: !0,
        get: function () {
          return t.withEmotionCache;
        },
      }),
      (e.withTheme = t.withTheme),
      (e.ClassNames = _),
      (e.Global = u),
      (e.createElement = l),
      (e.css = d),
      (e.jsx = l),
      (e.keyframes = p);
  }),
  ln = i((e, t) => {
    t.exports = cn();
  }),
  un = i((e, t) => {
    function n(e, t) {
      return (
        (t ||= e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        )
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  dn = i((e, t) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e)
        : typeof define == `function` && define.amd
          ? define([`exports`], r)
          : ((n = typeof globalThis < `u` ? globalThis : n || self),
            r((n.FloatingUICore = {})));
    })(e, function (e) {
      let t = [`top`, `right`, `bottom`, `left`],
        n = [`start`, `end`],
        r = t.reduce((e, t) => e.concat(t, t + `-` + n[0], t + `-` + n[1]), []),
        i = Math.min,
        a = Math.max,
        o = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
      function s(e, t, n) {
        return a(e, i(t, n));
      }
      function c(e, t) {
        return typeof e == `function` ? e(t) : e;
      }
      function l(e) {
        return e.split(`-`)[0];
      }
      function u(e) {
        return e.split(`-`)[1];
      }
      function d(e) {
        return e === `x` ? `y` : `x`;
      }
      function f(e) {
        return e === `y` ? `height` : `width`;
      }
      function p(e) {
        let t = e[0];
        return t === `t` || t === `b` ? `y` : `x`;
      }
      function m(e) {
        return d(p(e));
      }
      function h(e, t, n) {
        n === void 0 && (n = !1);
        let r = u(e),
          i = m(e),
          a = f(i),
          o =
            i === `x`
              ? r === (n ? `end` : `start`)
                ? `right`
                : `left`
              : r === `start`
                ? `bottom`
                : `top`;
        return t.reference[a] > t.floating[a] && (o = w(o)), [o, w(o)];
      }
      function g(e) {
        let t = w(e);
        return [_(e), t, _(t)];
      }
      function _(e) {
        return e.includes(`start`)
          ? e.replace(`start`, `end`)
          : e.replace(`end`, `start`);
      }
      let v = [`left`, `right`],
        y = [`right`, `left`],
        b = [`top`, `bottom`],
        x = [`bottom`, `top`];
      function S(e, t, n) {
        switch (e) {
          case `top`:
          case `bottom`:
            return n ? (t ? y : v) : t ? v : y;
          case `left`:
          case `right`:
            return t ? b : x;
          default:
            return [];
        }
      }
      function C(e, t, n, r) {
        let i = u(e),
          a = S(l(e), n === `start`, r);
        return (
          i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(_)))),
          a
        );
      }
      function w(e) {
        let t = l(e);
        return o[t] + e.slice(t.length);
      }
      function T(e) {
        return {
          top: e.top ?? 0,
          right: e.right ?? 0,
          bottom: e.bottom ?? 0,
          left: e.left ?? 0,
        };
      }
      function E(e) {
        return typeof e == `number`
          ? { top: e, right: e, bottom: e, left: e }
          : T(e);
      }
      function D(e) {
        let { x: t, y: n, width: r, height: i } = e;
        return {
          width: r,
          height: i,
          top: n,
          left: t,
          right: t + r,
          bottom: n + i,
          x: t,
          y: n,
        };
      }
      function O(e, t, n) {
        let { reference: r, floating: i } = e,
          a = p(t),
          o = m(t),
          s = f(o),
          c = l(t),
          d = a === `y`,
          h = r.x + r.width / 2 - i.width / 2,
          g = r.y + r.height / 2 - i.height / 2,
          _ = r[s] / 2 - i[s] / 2,
          v;
        switch (c) {
          case `top`:
            v = { x: h, y: r.y - i.height };
            break;
          case `bottom`:
            v = { x: h, y: r.y + r.height };
            break;
          case `right`:
            v = { x: r.x + r.width, y: g };
            break;
          case `left`:
            v = { x: r.x - i.width, y: g };
            break;
          default:
            v = { x: r.x, y: r.y };
        }
        let y = u(t);
        return y && (v[o] += _ * (y === `end` ? 1 : -1) * (n && d ? -1 : 1)), v;
      }
      async function k(e, t) {
        t === void 0 && (t = {});
        let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
          {
            boundary: l = `clippingAncestors`,
            rootBoundary: u = `viewport`,
            elementContext: d = `floating`,
            altBoundary: f = !1,
            padding: p = 0,
          } = c(t, e),
          m = E(p),
          h = o[f ? (d === `floating` ? `reference` : `floating`) : d],
          g = D(
            await i.getClippingRect({
              element:
                ((await (i.isElement == null ? void 0 : i.isElement(h))) ?? !0)
                  ? h
                  : h.contextElement ||
                    (await (i.getDocumentElement == null
                      ? void 0
                      : i.getDocumentElement(o.floating))),
              boundary: l,
              rootBoundary: u,
              strategy: s,
            }),
          ),
          _ =
            d === `floating`
              ? {
                  x: n,
                  y: r,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          v = await (i.getOffsetParent == null
            ? void 0
            : i.getOffsetParent(o.floating)),
          y = ((await (i.isElement == null ? void 0 : i.isElement(v))) &&
            (await (i.getScale == null ? void 0 : i.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          b = D(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: o,
                  rect: _,
                  offsetParent: v,
                  strategy: s,
                })
              : _,
          );
        return {
          top: (g.top - b.top + m.top) / y.y,
          bottom: (b.bottom - g.bottom + m.bottom) / y.y,
          left: (g.left - b.left + m.left) / y.x,
          right: (b.right - g.right + m.right) / y.x,
        };
      }
      let A = async (e, t, n) => {
          let {
              placement: r = `bottom`,
              strategy: i = `absolute`,
              middleware: a = [],
              platform: o,
            } = n,
            s = o.detectOverflow ? o : { ...o, detectOverflow: k },
            c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
            l = await o.getElementRects({
              reference: e,
              floating: t,
              strategy: i,
            }),
            { x: u, y: d } = O(l, r, c),
            f = r,
            p = 0,
            m = {};
          for (let n = 0; n < a.length; n++) {
            let h = a[n];
            if (!h) continue;
            let { name: g, fn: _ } = h,
              {
                x: v,
                y,
                data: b,
                reset: x,
              } = await _({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: i,
                middlewareData: m,
                rects: l,
                platform: s,
                elements: { reference: e, floating: t },
              });
            (u = v ?? u),
              (d = y ?? d),
              (m[g] = { ...m[g], ...b }),
              x &&
                p < 50 &&
                (p++,
                typeof x == `object` &&
                  (x.placement && (f = x.placement),
                  x.rects &&
                    (l =
                      x.rects === !0
                        ? await o.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: i,
                          })
                        : x.rects),
                  ({ x: u, y: d } = O(l, f, c))),
                (n = -1));
          }
          return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
        },
        j = (e) => ({
          name: `arrow`,
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: a,
                rects: o,
                platform: l,
                elements: d,
                middlewareData: p,
              } = t,
              { element: h, padding: g = 0 } = c(e, t) || {};
            if (h == null) return {};
            let _ = E(g),
              v = { x: n, y: r },
              y = m(a),
              b = f(y),
              x = await l.getDimensions(h),
              S = y === `y`,
              C = S ? `top` : `left`,
              w = S ? `bottom` : `right`,
              T = S ? `clientHeight` : `clientWidth`,
              D = o.reference[b] + o.reference[y] - v[y] - o.floating[b],
              O = v[y] - o.reference[y],
              k = await (l.getOffsetParent == null
                ? void 0
                : l.getOffsetParent(h)),
              A = k ? k[T] : 0;
            (!A || !(await (l.isElement == null ? void 0 : l.isElement(k)))) &&
              (A = d.floating[T] || o.floating[b]);
            let j = D / 2 - O / 2,
              M = A / 2 - x[b] / 2 - 1,
              N = i(_[C], M),
              P = i(_[w], M),
              F = A - x[b] - P,
              I = A / 2 - x[b] / 2 + j,
              L = s(N, I, F),
              R =
                !p.arrow &&
                u(a) != null &&
                I !== L &&
                o.reference[b] / 2 - (I < N ? N : P) - x[b] / 2 < 0,
              z = R ? (I < N ? I - N : I - F) : 0;
            return {
              [y]: v[y] + z,
              data: {
                [y]: L,
                centerOffset: I - L - z,
                ...(R && { alignmentOffset: z }),
              },
              reset: R,
            };
          },
        });
      function M(e, t, n) {
        return (
          e
            ? [...n.filter((t) => u(t) === e), ...n.filter((t) => u(t) !== e)]
            : n.filter((e) => l(e) === e)
        ).filter((n) => !e || u(n) === e || (t ? _(n) !== n : !1));
      }
      let N = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `autoPlacement`,
              options: e,
              async fn(t) {
                let {
                    rects: n,
                    middlewareData: i,
                    placement: a,
                    platform: o,
                    elements: s,
                  } = t,
                  {
                    crossAxis: d = !1,
                    alignment: f,
                    allowedPlacements: p = r,
                    autoAlignment: m = !0,
                    ...g
                  } = c(e, t),
                  _ = f !== void 0 || p === r ? M(f || null, m, p) : p,
                  v = i.autoPlacement?.index || 0,
                  y = _[v];
                if (y == null) return {};
                if (a !== y) return { reset: { placement: _[0] } };
                let b = await o.detectOverflow(t, g),
                  x = h(
                    y,
                    n,
                    await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
                  ),
                  S = [b[l(y)], b[x[0]], b[x[1]]],
                  C = [
                    ...(i.autoPlacement?.overflows || []),
                    { placement: y, overflows: S },
                  ],
                  w = _[v + 1];
                if (w)
                  return {
                    data: { index: v + 1, overflows: C },
                    reset: { placement: w },
                  };
                let T = C.map((e) => {
                    let t = u(e.placement);
                    return [
                      e.placement,
                      t && d
                        ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0)
                        : e.overflows[0],
                      e.overflows,
                    ];
                  }).sort((e, t) => e[1] - t[1]),
                  E =
                    T.filter((e) =>
                      e[2].slice(0, u(e[0]) ? 2 : 3).every((e) => e <= 0),
                    )[0]?.[0] || T[0][0];
                return E === a
                  ? {}
                  : {
                      data: { index: v + 1, overflows: C },
                      reset: { placement: E },
                    };
              },
            }
          );
        },
        P = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `flip`,
              options: e,
              async fn(t) {
                var n;
                let {
                    placement: r,
                    middlewareData: i,
                    rects: a,
                    initialPlacement: o,
                    platform: s,
                    elements: u,
                  } = t,
                  {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: _ = `bestFit`,
                    fallbackAxisSideDirection: v = `none`,
                    flipAlignment: y = !0,
                    ...b
                  } = c(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                let x = l(r),
                  S = p(o),
                  T = l(o) === o,
                  E = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
                  D = m || (T || !y ? [w(o)] : g(o)),
                  O = v !== `none`;
                !m && O && D.push(...C(o, y, v, E));
                let k = [o, ...D],
                  A = await s.detectOverflow(t, b),
                  j = [],
                  M = i.flip?.overflows || [];
                if ((d && j.push(A[x]), f)) {
                  let e = h(r, a, E);
                  j.push(A[e[0]], A[e[1]]);
                }
                if (
                  ((M = [...M, { placement: r, overflows: j }]),
                  !j.every((e) => e <= 0))
                ) {
                  let e = (i.flip?.index || 0) + 1,
                    t = k[e];
                  if (
                    t &&
                    (f !== `alignment` ||
                      S === p(t) ||
                      M.every(
                        (e) => p(e.placement) !== S || e.overflows[0] > 0,
                      ))
                  )
                    return {
                      data: { index: e, overflows: M },
                      reset: { placement: t },
                    };
                  let n = M.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1],
                  )[0]?.placement;
                  if (!n)
                    switch (_) {
                      case `bestFit`: {
                        let e = M.filter((e) => {
                          if (O) {
                            let t = p(e.placement);
                            return t === S || t === `y`;
                          }
                          return !0;
                        })
                          .map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ])
                          .sort((e, t) => e[1] - t[1])[0]?.[0];
                        e && (n = e);
                        break;
                      }
                      case `initialPlacement`:
                        n = o;
                    }
                  if (r !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        };
      function F(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function I(e) {
        return t.some((t) => e[t] >= 0);
      }
      let L = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            name: `hide`,
            options: e,
            async fn(t) {
              let { rects: n, platform: r } = t,
                { strategy: i = `referenceHidden`, ...a } = c(e, t);
              switch (i) {
                case `referenceHidden`: {
                  let e = F(
                    await r.detectOverflow(t, {
                      ...a,
                      elementContext: `reference`,
                    }),
                    n.reference,
                  );
                  return {
                    data: { referenceHiddenOffsets: e, referenceHidden: I(e) },
                  };
                }
                case `escaped`: {
                  let e = F(
                    await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                    n.floating,
                  );
                  return { data: { escapedOffsets: e, escaped: I(e) } };
                }
                default:
                  return {};
              }
            },
          }
        );
      };
      function R(e) {
        let t = i(...e.map((e) => e.left)),
          n = i(...e.map((e) => e.top)),
          r = a(...e.map((e) => e.right)),
          o = a(...e.map((e) => e.bottom));
        return { x: t, y: n, width: r - t, height: o - n };
      }
      function z(e) {
        let t = e.slice().sort((e, t) => e.y - t.y),
          n = [],
          r = null;
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          !r || i.y - r.y > r.height / 2
            ? n.push([i])
            : n[n.length - 1].push(i),
            (r = i);
        }
        return n.map((e) => D(R(e)));
      }
      let ee = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `inline`,
              options: e,
              async fn(t) {
                let {
                    placement: n,
                    elements: r,
                    rects: o,
                    platform: s,
                    strategy: u,
                  } = t,
                  { padding: d = 2, x: f, y: m } = c(e, t),
                  h = Array.from(
                    (await (s.getClientRects == null
                      ? void 0
                      : s.getClientRects(r.reference))) || [],
                  );
                if (!h.length) return {};
                let g = z(h),
                  _ = D(R(h)),
                  v = E(d);
                function y() {
                  if (
                    g.length === 2 &&
                    (g[0].left > g[1].right || g[1].left > g[0].right) &&
                    f != null &&
                    m != null
                  )
                    return (
                      g.find(
                        (e) =>
                          f > e.left - v.left &&
                          f < e.right + v.right &&
                          m > e.top - v.top &&
                          m < e.bottom + v.bottom,
                      ) || _
                    );
                  if (g.length >= 2) {
                    if (p(n) === `y`) {
                      let e = g[0],
                        t = g[g.length - 1],
                        r = l(n) === `top`,
                        i = e.top,
                        a = t.bottom,
                        o = r ? e.left : t.left;
                      return D({
                        x: o,
                        y: i,
                        width: (r ? e.right : t.right) - o,
                        height: a - i,
                      });
                    }
                    let e = l(n) === `left`,
                      t = a(...g.map((e) => e.right)),
                      r = i(...g.map((e) => e.left)),
                      o = g.filter((n) => (e ? n.left === r : n.right === t)),
                      s = o[0].top,
                      c = o[o.length - 1].bottom;
                    return D({ x: r, y: s, width: t - r, height: c - s });
                  }
                  return _;
                }
                let b = await s.getElementRects({
                  reference: { getBoundingClientRect: y },
                  floating: r.floating,
                  strategy: u,
                });
                return o.reference.x !== b.reference.x ||
                  o.reference.y !== b.reference.y ||
                  o.reference.width !== b.reference.width ||
                  o.reference.height !== b.reference.height
                  ? { reset: { rects: b } }
                  : {};
              },
            }
          );
        },
        te = new Set([`left`, `top`]);
      async function ne(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
          o = l(n),
          s = u(n),
          d = p(n) === `y`,
          f = te.has(o) ? -1 : 1,
          m = a && d ? -1 : 1,
          h = c(t, e),
          {
            mainAxis: g,
            crossAxis: _,
            alignmentAxis: v,
          } = typeof h == `number`
            ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: h.mainAxis || 0,
                crossAxis: h.crossAxis || 0,
                alignmentAxis: h.alignmentAxis,
              };
        return (
          s && typeof v == `number` && (_ = s === `end` ? v * -1 : v),
          d ? { x: _ * m, y: g * f } : { x: g * f, y: _ * m }
        );
      }
      (e.arrow = j),
        (e.autoPlacement = N),
        (e.computePosition = A),
        (e.detectOverflow = k),
        (e.flip = P),
        (e.hide = L),
        (e.inline = ee),
        (e.limitShift = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: i,
                    rects: a,
                    middlewareData: o,
                  } = t,
                  {
                    offset: s = 0,
                    mainAxis: u = !0,
                    crossAxis: f = !0,
                  } = c(e, t),
                  m = { x: n, y: r },
                  h = p(i),
                  g = d(h),
                  _ = m[g],
                  v = m[h],
                  y = c(s, t),
                  b =
                    typeof y == `number`
                      ? { mainAxis: y, crossAxis: 0 }
                      : {
                          mainAxis: y.mainAxis ?? 0,
                          crossAxis: y.crossAxis ?? 0,
                        };
                if (u) {
                  let e = g === `y` ? `height` : `width`,
                    t = a.reference[g] - a.floating[e] + b.mainAxis,
                    n = a.reference[g] + a.reference[e] - b.mainAxis;
                  _ < t ? (_ = t) : _ > n && (_ = n);
                }
                if (f) {
                  let e = g === `y` ? `width` : `height`,
                    t = te.has(l(i)),
                    n =
                      a.reference[h] -
                      a.floating[e] +
                      ((t && o.offset?.[h]) || 0) +
                      (t ? 0 : b.crossAxis),
                    r =
                      a.reference[h] +
                      a.reference[e] +
                      (t ? 0 : o.offset?.[h] || 0) -
                      (t ? b.crossAxis : 0);
                  v < n ? (v = n) : v > r && (v = r);
                }
                return { [g]: _, [h]: v };
              },
            }
          );
        }),
        (e.offset = function (e) {
          return (
            e === void 0 && (e = 0),
            {
              name: `offset`,
              options: e,
              async fn(t) {
                var n;
                let { x: r, y: i, placement: a, middlewareData: o } = t,
                  s = await ne(t, e);
                return a === o.offset?.placement &&
                  (n = o.arrow) != null &&
                  n.alignmentOffset
                  ? {}
                  : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
              },
            }
          );
        }),
        (e.rectToClientRect = D),
        (e.shift = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `shift`,
              options: e,
              async fn(t) {
                let { x: n, y: r, placement: i, platform: a } = t,
                  {
                    mainAxis: o = !0,
                    crossAxis: l = !1,
                    limiter: u = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...f
                  } = c(e, t),
                  m = { x: n, y: r },
                  h = await a.detectOverflow(t, f),
                  g = p(i),
                  _ = d(g),
                  v = m[_],
                  y = m[g],
                  b = (e, t) =>
                    s(
                      t + h[e === `y` ? `top` : `left`],
                      t,
                      t - h[e === `y` ? `bottom` : `right`],
                    );
                o && (v = b(_, v)), l && (y = b(g, y));
                let x = u.fn({ ...t, [_]: v, [g]: y });
                return {
                  ...x,
                  data: { x: x.x - n, y: x.y - r, enabled: { [_]: o, [g]: l } },
                };
              },
            }
          );
        }),
        (e.size = function (e) {
          return (
            e === void 0 && (e = {}),
            {
              name: `size`,
              options: e,
              async fn(t) {
                let { placement: n, rects: r, platform: o, elements: s } = t,
                  { apply: d = () => {}, ...f } = c(e, t),
                  m = await o.detectOverflow(t, f),
                  h = l(n),
                  g = u(n),
                  _ = p(n) === `y`,
                  { width: v, height: y } = r.floating,
                  b,
                  x;
                h === `top` || h === `bottom`
                  ? ((b = h),
                    (x =
                      g ===
                      ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                        ? `start`
                        : `end`)
                        ? `left`
                        : `right`))
                  : ((x = h), (b = g === `end` ? `top` : `bottom`));
                let S = y - m.top - m.bottom,
                  C = v - m.left - m.right,
                  w = i(y - m[b], S),
                  T = i(v - m[x], C),
                  E = t.middlewareData.shift,
                  D = !E,
                  O = w,
                  k = T;
                E != null && E.enabled.x && (k = C),
                  E != null && E.enabled.y && (O = S),
                  D &&
                    !g &&
                    (_
                      ? (k = v - 2 * a(m.left, m.right))
                      : (O = y - 2 * a(m.top, m.bottom))),
                  await d({ ...t, availableWidth: k, availableHeight: O });
                let A = await o.getDimensions(s.floating);
                return v !== A.width || y !== A.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        });
    });
  }),
  fn = i((e, t) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e, dn())
        : typeof define == `function` && define.amd
          ? define([`exports`, `@floating-ui/core`], r)
          : ((n = typeof globalThis < `u` ? globalThis : n || self),
            r((n.FloatingUIDOM = {}), n.FloatingUICore));
    })(e, function (e, t) {
      let n = Math.min,
        r = Math.max,
        i = Math.round,
        a = Math.floor,
        o = (e) => ({ x: e, y: e });
      function s() {
        return typeof window < `u`;
      }
      function c(e) {
        return d(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
      }
      function l(e) {
        var t;
        return (
          (e == null || (t = e.ownerDocument) == null
            ? void 0
            : t.defaultView) || window
        );
      }
      function u(e) {
        return ((d(e) ? e.ownerDocument : e.document) || window.document)
          ?.documentElement;
      }
      function d(e) {
        return s() ? e instanceof Node || e instanceof l(e).Node : !1;
      }
      function f(e) {
        return s() ? e instanceof Element || e instanceof l(e).Element : !1;
      }
      function p(e) {
        return s()
          ? e instanceof HTMLElement || e instanceof l(e).HTMLElement
          : !1;
      }
      function m(e) {
        return !s() || typeof ShadowRoot > `u`
          ? !1
          : e instanceof ShadowRoot || e instanceof l(e).ShadowRoot;
      }
      function h(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = E(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          i !== `inline` &&
          i !== `contents`
        );
      }
      function g(e) {
        return /^(table|td|th)$/.test(c(e));
      }
      function _(e) {
        try {
          if (e.matches(`:popover-open`)) return !0;
        } catch {}
        try {
          return e.matches(`:modal`);
        } catch {
          return !1;
        }
      }
      let v = /transform|translate|scale|rotate|perspective|filter/,
        y = /paint|layout|strict|content/,
        b = (e) => !!e && e !== `none`,
        x;
      function S(e) {
        let t = f(e) ? E(e) : e;
        return (
          b(t.transform) ||
          b(t.translate) ||
          b(t.scale) ||
          b(t.rotate) ||
          b(t.perspective) ||
          (!w() && (b(t.backdropFilter) || b(t.filter))) ||
          v.test(t.willChange || ``) ||
          y.test(t.contain || ``)
        );
      }
      function C(e) {
        let t = O(e);
        for (; p(t) && !T(t); ) {
          if (S(t)) return t;
          if (_(t)) return null;
          t = O(t);
        }
        return null;
      }
      function w() {
        return (
          (x ??=
            typeof CSS < `u` &&
            CSS.supports &&
            CSS.supports(`-webkit-backdrop-filter`, `none`)),
          x
        );
      }
      function T(e) {
        return /^(html|body|#document)$/.test(c(e));
      }
      function E(e) {
        return l(e).getComputedStyle(e);
      }
      function D(e) {
        return f(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function O(e) {
        if (c(e) === `html`) return e;
        let t = e.assignedSlot || e.parentNode || (m(e) && e.host) || u(e);
        return m(t) ? t.host : t;
      }
      function k(e) {
        let t = O(e);
        return T(t) ? (e.ownerDocument || e).body : p(t) && h(t) ? t : k(t);
      }
      function A(e, t, n) {
        t === void 0 && (t = []), n === void 0 && (n = !0);
        let r = k(e),
          i = r === e.ownerDocument?.body,
          a = l(r);
        if (i) {
          let e = j(a);
          return t.concat(
            a,
            a.visualViewport || [],
            h(r) ? r : [],
            e && n ? A(e) : [],
          );
        }
        return t.concat(r, A(r, [], n));
      }
      function j(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function M(e) {
        let t = E(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          a = p(e),
          o = a ? e.offsetWidth : n,
          s = a ? e.offsetHeight : r,
          c = i(n) !== o || i(r) !== s;
        return c && ((n = o), (r = s)), { width: n, height: r, $: c };
      }
      function N(e) {
        return f(e) ? e : e.contextElement;
      }
      function P(e) {
        let t = N(e);
        if (!p(t)) return o(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: a, $: s } = M(t),
          c = (s ? i(n.width) : n.width) / r,
          l = (s ? i(n.height) : n.height) / a;
        return (
          (!c || !Number.isFinite(c)) && (c = 1),
          (!l || !Number.isFinite(l)) && (l = 1),
          { x: c, y: l }
        );
      }
      let F = o(0);
      function I(e) {
        let t = l(e);
        return !w() || !t.visualViewport
          ? F
          : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
      }
      function L(e, t, n) {
        return t === void 0 && (t = !1), !!n && t && n === l(e);
      }
      function R(e, n, r, i) {
        n === void 0 && (n = !1), r === void 0 && (r = !1);
        let a = e.getBoundingClientRect(),
          s = N(e),
          c = o(1);
        n && (i ? f(i) && (c = P(i)) : (c = P(e)));
        let u = L(s, r, i) ? I(s) : o(0),
          d = (a.left + u.x) / c.x,
          p = (a.top + u.y) / c.y,
          m = a.width / c.x,
          h = a.height / c.y;
        if (s && i) {
          let e = l(s),
            t = f(i) ? l(i) : i,
            n = e,
            r = j(n);
          for (; r && t !== n; ) {
            let e = P(r),
              t = r.getBoundingClientRect(),
              i = E(r),
              a = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
              o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (d *= e.x),
              (p *= e.y),
              (m *= e.x),
              (h *= e.y),
              (d += a),
              (p += o),
              (n = l(r)),
              (r = j(n));
          }
        }
        return t.rectToClientRect({ width: m, height: h, x: d, y: p });
      }
      function z(e, t) {
        let n = D(e).scrollLeft;
        return t ? t.left + n : R(u(e)).left + n;
      }
      function ee(e, t) {
        let n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - z(e, n), y: n.top + t.scrollTop };
      }
      function te(e) {
        let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
          a = i === `fixed`,
          s = u(r),
          l = t ? _(t.floating) : !1;
        if (r === s || (l && a)) return n;
        let d = { scrollLeft: 0, scrollTop: 0 },
          f = o(1),
          m = o(0),
          g = p(r);
        if ((g || !a) && ((c(r) !== `body` || h(s)) && (d = D(r)), g)) {
          let e = R(r);
          (f = P(r)), (m.x = e.x + r.clientLeft), (m.y = e.y + r.clientTop);
        }
        let v = s && !g && !a ? ee(s, d) : o(0);
        return {
          width: n.width * f.x,
          height: n.height * f.y,
          x: n.x * f.x - d.scrollLeft * f.x + m.x + v.x,
          y: n.y * f.y - d.scrollTop * f.y + m.y + v.y,
        };
      }
      function ne(e) {
        return e.getClientRects ? Array.from(e.getClientRects()) : [];
      }
      function re(e) {
        let t = D(e),
          n = e.ownerDocument.body,
          i = r(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
          a = r(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
          o = -t.scrollLeft + z(e),
          s = -t.scrollTop;
        return (
          E(n).direction === `rtl` &&
            (o += r(e.clientWidth, n.clientWidth) - i),
          { width: i, height: a, x: o, y: s }
        );
      }
      function ie(e, t, n) {
        n === void 0 && (n = `viewport`);
        let r = n === `layoutViewport`,
          i = l(e),
          a = u(e),
          o = i.visualViewport,
          s = a.clientWidth,
          c = a.clientHeight,
          d = 0,
          f = 0;
        if (o) {
          let e = !w() || t === `fixed`;
          r
            ? e || ((d = -o.offsetLeft), (f = -o.offsetTop))
            : ((s = o.width),
              (c = o.height),
              e && ((d = o.offsetLeft), (f = o.offsetTop)));
        }
        if (z(a) <= 0) {
          let e = a.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            r =
              (e.compatMode === `CSS1Compat` &&
                parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
              0,
            i = Math.abs(a.clientWidth - t.clientWidth - r),
            o =
              getComputedStyle(a).scrollbarGutter === `stable both-edges`
                ? i / 2
                : i;
          o <= 25 && (s -= o);
        }
        return { width: s, height: c, x: d, y: f };
      }
      function B(e, t) {
        let n = R(e, !0, t === `fixed`),
          r = n.top + e.clientTop,
          i = n.left + e.clientLeft,
          a = P(e);
        return {
          width: e.clientWidth * a.x,
          height: e.clientHeight * a.y,
          x: i * a.x,
          y: r * a.y,
        };
      }
      function ae(e, n, r) {
        let i;
        if (n === `viewport` || n === `layoutViewport`) i = ie(e, r, n);
        else if (n === `document`) i = re(u(e));
        else if (f(n)) i = B(n, r);
        else {
          let t = I(e);
          i = { x: n.x - t.x, y: n.y - t.y, width: n.width, height: n.height };
        }
        return t.rectToClientRect(i);
      }
      function oe(e, t) {
        let n = t.get(e);
        if (n) return n;
        let r = A(e, [], !1).filter((e) => f(e) && c(e) !== `body`),
          i = null,
          a = E(e).position === `fixed`,
          o = a ? O(e) : e;
        for (; f(o) && !T(o); ) {
          let e = E(o),
            t = S(o),
            n = i ? i.position : a ? `fixed` : ``;
          !t && (n === `fixed` || (n === `absolute` && e.position === `static`))
            ? (r = r.filter((e) => e !== o))
            : (i = e),
            (o = O(o));
        }
        return t.set(e, r), r;
      }
      function se(e) {
        let { element: t, boundary: i, rootBoundary: a, strategy: o } = e,
          s = [
            ...(i === `clippingAncestors`
              ? _(t)
                ? []
                : oe(t, this._c)
              : [].concat(i)),
            a,
          ],
          c = ae(t, s[0], o),
          l = c.top,
          u = c.right,
          d = c.bottom,
          f = c.left;
        for (let e = 1; e < s.length; e++) {
          let i = ae(t, s[e], o);
          (l = r(i.top, l)),
            (u = n(i.right, u)),
            (d = n(i.bottom, d)),
            (f = r(i.left, f));
        }
        return { width: u - f, height: d - l, x: f, y: l };
      }
      function V(e) {
        let { width: t, height: n } = M(e);
        return { width: t, height: n };
      }
      function ce(e, t, n) {
        let r = p(t),
          i = u(t),
          a = n === `fixed`,
          s = R(e, !0, a, t),
          l = { scrollLeft: 0, scrollTop: 0 },
          d = o(0);
        if ((r || !a) && ((c(t) !== `body` || h(i)) && (l = D(t)), r)) {
          let e = R(t, !0, a, t);
          (d.x = e.x + t.clientLeft), (d.y = e.y + t.clientTop);
        }
        !r && i && (d.x = z(i));
        let f = i && !r && !a ? ee(i, l) : o(0);
        return {
          x: s.left + l.scrollLeft - d.x - f.x,
          y: s.top + l.scrollTop - d.y - f.y,
          width: s.width,
          height: s.height,
        };
      }
      function H(e) {
        return E(e).position === `static`;
      }
      function le(e, t) {
        if (!p(e) || E(e).position === `fixed`) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return u(e) === n && (n = n.ownerDocument.body), n;
      }
      function U(e, t) {
        let n = l(e);
        if (_(e)) return n;
        if (!p(e)) {
          let t = O(e);
          for (; t && !T(t); ) {
            if (f(t) && !H(t)) return t;
            t = O(t);
          }
          return n;
        }
        let r = le(e, t);
        for (; r && g(r) && H(r); ) r = le(r, t);
        return r && T(r) && H(r) && !S(r) ? n : r || C(e) || n;
      }
      let ue = async function (e) {
        let t = this.getOffsetParent || U,
          n = this.getDimensions,
          r = await n(e.floating);
        return {
          reference: ce(e.reference, await t(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: r.width, height: r.height },
        };
      };
      function de(e) {
        return E(e).direction === `rtl`;
      }
      let fe = {
        convertOffsetParentRelativeRectToViewportRelativeRect: te,
        getDocumentElement: u,
        getClippingRect: se,
        getOffsetParent: U,
        getElementRects: ue,
        getClientRects: ne,
        getDimensions: V,
        getScale: P,
        isElement: f,
        isRTL: de,
      };
      function pe(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function me(e, t, i) {
        let o = null,
          s,
          c = u(e);
        function d() {
          var e;
          clearTimeout(s), (e = o) == null || e.disconnect(), (o = null);
        }
        function f(i, l) {
          i === void 0 && (i = !1), l === void 0 && (l = 1), d();
          let u = e.getBoundingClientRect(),
            { left: p, top: m, width: h, height: g } = u;
          if ((i || t(), !h || !g)) return;
          let _ = a(m),
            v = a(c.clientWidth - (p + h)),
            y = a(c.clientHeight - (m + g)),
            b = a(p),
            x = {
              rootMargin: -_ + `px ` + -v + `px ` + -y + `px ` + -b + `px`,
              threshold: r(0, n(1, l)) || 1,
            },
            S = !0;
          function C(t) {
            let n = t[0].intersectionRatio;
            if (!pe(u, e.getBoundingClientRect())) return f();
            if (n !== l) {
              if (!S) return f();
              n
                ? f(!1, n)
                : (s = setTimeout(() => {
                    f(!1, 1e-7);
                  }, 1e3));
            }
            S = !1;
          }
          try {
            o = new IntersectionObserver(C, { ...x, root: c.ownerDocument });
          } catch {
            o = new IntersectionObserver(C, x);
          }
          o.observe(e);
        }
        let p = l(e),
          m = () => f(i);
        return (
          p.addEventListener(`resize`, m),
          f(!0),
          () => {
            p.removeEventListener(`resize`, m), d();
          }
        );
      }
      function he(e, t, n, r) {
        r === void 0 && (r = {});
        let {
            ancestorScroll: i = !0,
            ancestorResize: a = !0,
            elementResize: o = typeof ResizeObserver == `function`,
            layoutShift: s = typeof IntersectionObserver == `function`,
            animationFrame: c = !1,
          } = r,
          l = N(e),
          u = i || a ? [...(l ? A(l) : []), ...(t ? A(t) : [])] : [];
        u.forEach((e) => {
          i && e.addEventListener(`scroll`, n),
            a && e.addEventListener(`resize`, n);
        });
        let d = l && s ? me(l, n, a) : null,
          f = -1,
          p = null;
        o &&
          ((p = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === l &&
              p &&
              t &&
              (p.unobserve(t),
              cancelAnimationFrame(f),
              (f = requestAnimationFrame(() => {
                var e;
                (e = p) == null || e.observe(t);
              }))),
              n();
          })),
          l && !c && p.observe(l),
          t && p.observe(t));
        let m,
          h = c ? R(e) : null;
        c && g();
        function g() {
          let t = R(e);
          h && !pe(h, t) && n(), (h = t), (m = requestAnimationFrame(g));
        }
        return (
          n(),
          () => {
            var e;
            u.forEach((e) => {
              i && e.removeEventListener(`scroll`, n),
                a && e.removeEventListener(`resize`, n);
            }),
              d?.(),
              (e = p) == null || e.disconnect(),
              (p = null),
              c && cancelAnimationFrame(m);
          }
        );
      }
      let W = t.detectOverflow,
        G = t.offset,
        ge = t.autoPlacement,
        _e = t.shift,
        ve = t.flip,
        ye = t.size,
        K = t.hide,
        q = t.arrow,
        be = t.inline,
        xe = t.limitShift;
      (e.arrow = q),
        (e.autoPlacement = ge),
        (e.autoUpdate = he),
        (e.computePosition = (e, n, r) => {
          let i = new Map(),
            a = r ?? {},
            o = { ...fe, ...a.platform, _c: i };
          return t.computePosition(e, n, { ...a, platform: o });
        }),
        (e.detectOverflow = W),
        (e.flip = ve),
        (e.getOverflowAncestors = A),
        (e.hide = K),
        (e.inline = be),
        (e.limitShift = xe),
        (e.offset = G),
        (e.platform = fe),
        (e.shift = _e),
        (e.size = ye);
    });
  }),
  pn = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = f().useLayoutEffect);
  }),
  mn = i((e) => {
    var t = gt(),
      n = Et(),
      r = ln(),
      i = St(),
      a = wt(),
      o = ft(),
      s = un(),
      c = ht(),
      l = f(),
      d = u(),
      p = fn(),
      m = pn();
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var g = h(m),
      _ = [
        `className`,
        `clearValue`,
        `cx`,
        `getStyles`,
        `getClassNames`,
        `getValue`,
        `hasValue`,
        `isMulti`,
        `isRtl`,
        `options`,
        `selectOption`,
        `selectProps`,
        `setValue`,
        `theme`,
      ],
      v = function () {};
    function y(e, t) {
      return t ? (t[0] === `-` ? e + t : e + `__` + t) : e;
    }
    function b(e, t) {
      var n = [...arguments].slice(2),
        r = [].concat(n);
      if (t && e)
        for (var i in t) t.hasOwnProperty(i) && t[i] && r.push(`${y(e, i)}`);
      return r
        .filter(function (e) {
          return e;
        })
        .map(function (e) {
          return String(e).trim();
        })
        .join(` `);
    }
    var x = function (e) {
        return te(e)
          ? e.filter(Boolean)
          : o(e) === `object` && e !== null
            ? [e]
            : [];
      },
      S = function (e) {
        return (
          e.className,
          e.clearValue,
          e.cx,
          e.getStyles,
          e.getClassNames,
          e.getValue,
          e.hasValue,
          e.isMulti,
          e.isRtl,
          e.options,
          e.selectOption,
          e.selectProps,
          e.setValue,
          e.theme,
          t({}, a(e, _))
        );
      },
      C = function (e, t, n) {
        var r = e.cx,
          i = e.getStyles,
          a = e.getClassNames,
          o = e.className;
        return { css: i(t, e), className: r(n ?? {}, a(t, e), o) };
      };
    function w(e, t, n) {
      if (n) {
        var r = n(e, t);
        if (typeof r == `string`) return r;
      }
      return e;
    }
    function T(e) {
      return [document.documentElement, document.body, window].indexOf(e) > -1;
    }
    function E(e) {
      return T(e) ? window.innerHeight : e.clientHeight;
    }
    function D(e) {
      return T(e) ? window.pageYOffset : e.scrollTop;
    }
    function O(e, t) {
      if (T(e)) {
        window.scrollTo(0, t);
        return;
      }
      e.scrollTop = t;
    }
    function k(e) {
      var t = getComputedStyle(e),
        n = t.position === `absolute`,
        r = /(auto|scroll)/;
      if (t.position === `fixed`) return document.documentElement;
      for (var i = e; (i = i.parentElement); )
        if (
          ((t = getComputedStyle(i)),
          !(n && t.position === `static`) &&
            r.test(t.overflow + t.overflowY + t.overflowX))
        )
          return i;
      return document.documentElement;
    }
    function A(e, t, n, r) {
      return n * ((e = e / r - 1) * e * e + 1) + t;
    }
    function j(e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
        r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : v,
        i = D(e),
        a = t - i,
        o = 10,
        s = 0;
      function c() {
        (s += o),
          O(e, A(s, i, a, n)),
          s < n ? window.requestAnimationFrame(c) : r(e);
      }
      c();
    }
    function M(e, t) {
      var n = e.getBoundingClientRect(),
        r = t.getBoundingClientRect(),
        i = t.offsetHeight / 3;
      r.bottom + i > n.bottom
        ? O(
            e,
            Math.min(
              t.offsetTop + t.clientHeight - e.offsetHeight + i,
              e.scrollHeight,
            ),
          )
        : r.top - i < n.top && O(e, Math.max(t.offsetTop - i, 0));
    }
    function N(e) {
      var t = e.getBoundingClientRect();
      return {
        bottom: t.bottom,
        height: t.height,
        left: t.left,
        right: t.right,
        top: t.top,
        width: t.width,
      };
    }
    function P() {
      try {
        return document.createEvent(`TouchEvent`), !0;
      } catch {
        return !1;
      }
    }
    function F() {
      try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      } catch {
        return !1;
      }
    }
    var I = !1,
      L = {
        get passive() {
          return (I = !0);
        },
      },
      R = typeof window < `u` ? window : {};
    R.addEventListener &&
      R.removeEventListener &&
      (R.addEventListener(`p`, v, L), R.removeEventListener(`p`, v, !1));
    var z = I;
    function ee(e) {
      return e != null;
    }
    function te(e) {
      return Array.isArray(e);
    }
    function ne(e, t, n) {
      return e ? t : n;
    }
    function re(e) {
      return e;
    }
    function ie(e) {
      return e;
    }
    var B = function (e) {
        var t = [...arguments].slice(1);
        return Object.entries(e)
          .filter(function (e) {
            var n = i(e, 1)[0];
            return !t.includes(n);
          })
          .reduce(function (e, t) {
            var n = i(t, 2),
              r = n[0];
            return (e[r] = n[1]), e;
          }, {});
      },
      ae = [`children`, `innerProps`],
      oe = [`children`, `innerProps`];
    function se(e) {
      var t = e.maxHeight,
        n = e.menuEl,
        r = e.minHeight,
        i = e.placement,
        a = e.shouldScroll,
        o = e.isFixedPosition,
        s = e.controlHeight,
        c = k(n),
        l = { placement: `bottom`, maxHeight: t };
      if (!n || !n.offsetParent) return l;
      var u = c.getBoundingClientRect().height,
        d = n.getBoundingClientRect(),
        f = d.bottom,
        p = d.height,
        m = d.top,
        h = n.offsetParent.getBoundingClientRect().top,
        g = o ? window.innerHeight : E(c),
        _ = D(c),
        v = parseInt(getComputedStyle(n).marginBottom, 10),
        y = parseInt(getComputedStyle(n).marginTop, 10),
        b = h - y,
        x = g - m,
        S = b + _,
        C = u - _ - m,
        w = f - g + _ + v,
        T = _ + m - y,
        A = 160;
      switch (i) {
        case `auto`:
        case `bottom`:
          if (x >= p) return { placement: `bottom`, maxHeight: t };
          if (C >= p && !o)
            return a && j(c, w, A), { placement: `bottom`, maxHeight: t };
          if ((!o && C >= r) || (o && x >= r))
            return (
              a && j(c, w, A),
              { placement: `bottom`, maxHeight: o ? x - v : C - v }
            );
          if (i === `auto` || o) {
            var M = t,
              N = o ? b : S;
            return (
              N >= r && (M = Math.min(N - v - s, t)),
              { placement: `top`, maxHeight: M }
            );
          }
          if (i === `bottom`)
            return a && O(c, w), { placement: `bottom`, maxHeight: t };
          break;
        case `top`:
          if (b >= p) return { placement: `top`, maxHeight: t };
          if (S >= p && !o)
            return a && j(c, T, A), { placement: `top`, maxHeight: t };
          if ((!o && S >= r) || (o && b >= r)) {
            var P = t;
            return (
              ((!o && S >= r) || (o && b >= r)) && (P = o ? b - y : S - y),
              a && j(c, T, A),
              { placement: `top`, maxHeight: P }
            );
          }
          return { placement: `bottom`, maxHeight: t };
        default:
          throw Error(`Invalid placement provided "${i}".`);
      }
      return l;
    }
    function V(e) {
      return e ? { bottom: `top`, top: `bottom` }[e] : `bottom`;
    }
    var ce = function (e) {
        return e === `auto` ? `bottom` : e;
      },
      H = function (e, n) {
        var r,
          i = e.placement,
          a = e.theme,
          o = a.borderRadius,
          s = a.spacing,
          l = a.colors;
        return t(
          ((r = { label: `menu` }),
          c(r, V(i), `100%`),
          c(r, `position`, `absolute`),
          c(r, `width`, `100%`),
          c(r, `zIndex`, 1),
          r),
          n
            ? {}
            : {
                backgroundColor: l.neutral0,
                borderRadius: o,
                boxShadow: `0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)`,
                marginBottom: s.menuGutter,
                marginTop: s.menuGutter,
              },
        );
      },
      le = l.createContext(null),
      U = function (e) {
        var n = e.children,
          r = e.minMenuHeight,
          a = e.maxMenuHeight,
          o = e.menuPlacement,
          s = e.menuPosition,
          c = e.menuShouldScrollIntoView,
          u = e.theme,
          d = (l.useContext(le) || {}).setPortalPlacement,
          f = l.useRef(null),
          p = i(l.useState(a), 2),
          m = p[0],
          h = p[1],
          _ = i(l.useState(null), 2),
          v = _[0],
          y = _[1],
          b = u.spacing.controlHeight;
        return (
          g.default(
            function () {
              var e = f.current;
              if (e) {
                var t = s === `fixed`,
                  n = se({
                    maxHeight: a,
                    menuEl: e,
                    minHeight: r,
                    placement: o,
                    shouldScroll: c && !t,
                    isFixedPosition: t,
                    controlHeight: b,
                  });
                h(n.maxHeight), y(n.placement), d?.(n.placement);
              }
            },
            [a, o, s, c, r, d, b],
          ),
          n({
            ref: f,
            placerProps: t(
              t({}, e),
              {},
              { placement: v || ce(o), maxHeight: m },
            ),
          })
        );
      },
      ue = function (e) {
        var t = e.children,
          i = e.innerRef,
          a = e.innerProps;
        return r.jsx(
          `div`,
          n({}, C(e, `menu`, { menu: !0 }), { ref: i }, a),
          t,
        );
      },
      de = function (e, n) {
        var r = e.maxHeight,
          i = e.theme.spacing.baseUnit;
        return t(
          {
            maxHeight: r,
            overflowY: `auto`,
            position: `relative`,
            WebkitOverflowScrolling: `touch`,
          },
          n ? {} : { paddingBottom: i, paddingTop: i },
        );
      },
      fe = function (e) {
        var t = e.children,
          i = e.innerProps,
          a = e.innerRef,
          o = e.isMulti;
        return r.jsx(
          `div`,
          n(
            {},
            C(e, `menuList`, { "menu-list": !0, "menu-list--is-multi": o }),
            { ref: a },
            i,
          ),
          t,
        );
      },
      pe = function (e, n) {
        var r = e.theme,
          i = r.spacing.baseUnit,
          a = r.colors;
        return t(
          { textAlign: `center` },
          n ? {} : { color: a.neutral40, padding: `${i * 2}px ${i * 3}px` },
        );
      },
      me = pe,
      he = pe,
      W = function (e) {
        var i = e.children,
          o = i === void 0 ? `No options` : i,
          s = e.innerProps,
          c = a(e, ae);
        return r.jsx(
          `div`,
          n(
            {},
            C(
              t(t({}, c), {}, { children: o, innerProps: s }),
              `noOptionsMessage`,
              { "menu-notice": !0, "menu-notice--no-options": !0 },
            ),
            s,
          ),
          o,
        );
      },
      G = function (e) {
        var i = e.children,
          o = i === void 0 ? `Loading...` : i,
          s = e.innerProps,
          c = a(e, oe);
        return r.jsx(
          `div`,
          n(
            {},
            C(
              t(t({}, c), {}, { children: o, innerProps: s }),
              `loadingMessage`,
              { "menu-notice": !0, "menu-notice--loading": !0 },
            ),
            s,
          ),
          o,
        );
      },
      ge = function (e) {
        var t = e.rect,
          n = e.offset,
          r = e.position;
        return { left: t.left, position: r, top: n, width: t.width, zIndex: 1 };
      },
      _e = function (e) {
        var a = e.appendTo,
          o = e.children,
          s = e.controlElement,
          c = e.innerProps,
          u = e.menuPlacement,
          f = e.menuPosition,
          m = l.useRef(null),
          h = l.useRef(null),
          _ = i(l.useState(ce(u)), 2),
          v = _[0],
          y = _[1],
          b = l.useMemo(function () {
            return { setPortalPlacement: y };
          }, []),
          x = i(l.useState(null), 2),
          S = x[0],
          w = x[1],
          T = l.useCallback(
            function () {
              if (s) {
                var e = N(s),
                  t = f === `fixed` ? 0 : window.pageYOffset,
                  n = e[v] + t;
                (n !== S?.offset ||
                  e.left !== S?.rect.left ||
                  e.width !== S?.rect.width) &&
                  w({ offset: n, rect: e });
              }
            },
            [s, f, v, S?.offset, S?.rect.left, S?.rect.width],
          );
        g.default(
          function () {
            T();
          },
          [T],
        );
        var E = l.useCallback(
          function () {
            typeof h.current == `function` && (h.current(), (h.current = null)),
              s &&
                m.current &&
                (h.current = p.autoUpdate(s, m.current, T, {
                  elementResize: `ResizeObserver` in window,
                }));
          },
          [s, T],
        );
        g.default(
          function () {
            E();
          },
          [E],
        );
        var D = l.useCallback(
          function (e) {
            (m.current = e), E();
          },
          [E],
        );
        if ((!a && f !== `fixed`) || !S) return null;
        var O = r.jsx(
          `div`,
          n(
            { ref: D },
            C(
              t(t({}, e), {}, { offset: S.offset, position: f, rect: S.rect }),
              `menuPortal`,
              { "menu-portal": !0 },
            ),
            c,
          ),
          o,
        );
        return r.jsx(le.Provider, { value: b }, a ? d.createPortal(O, a) : O);
      },
      ve = function (e) {
        var t = e.isDisabled;
        return {
          label: `container`,
          direction: e.isRtl ? `rtl` : void 0,
          pointerEvents: t ? `none` : void 0,
          position: `relative`,
        };
      },
      ye = function (e) {
        var t = e.children,
          i = e.innerProps,
          a = e.isDisabled,
          o = e.isRtl;
        return r.jsx(
          `div`,
          n({}, C(e, `container`, { "--is-disabled": a, "--is-rtl": o }), i),
          t,
        );
      },
      K = function (e, n) {
        var r = e.theme.spacing,
          i = e.isMulti,
          a = e.hasValue,
          o = e.selectProps.controlShouldRenderValue;
        return t(
          {
            alignItems: `center`,
            display: i && a && o ? `flex` : `grid`,
            flex: 1,
            flexWrap: `wrap`,
            WebkitOverflowScrolling: `touch`,
            position: `relative`,
            overflow: `hidden`,
          },
          n ? {} : { padding: `${r.baseUnit / 2}px ${r.baseUnit * 2}px` },
        );
      },
      q = function (e) {
        var t = e.children,
          i = e.innerProps,
          a = e.isMulti,
          o = e.hasValue;
        return r.jsx(
          `div`,
          n(
            {},
            C(e, `valueContainer`, {
              "value-container": !0,
              "value-container--is-multi": a,
              "value-container--has-value": o,
            }),
            i,
          ),
          t,
        );
      },
      be = function () {
        return {
          alignItems: `center`,
          alignSelf: `stretch`,
          display: `flex`,
          flexShrink: 0,
        };
      },
      xe = function (e) {
        var t = e.children,
          i = e.innerProps;
        return r.jsx(
          `div`,
          n({}, C(e, `indicatorsContainer`, { indicators: !0 }), i),
          t,
        );
      },
      Se,
      J = [`size`],
      Ce = [`innerProps`, `isRtl`, `size`],
      we = {
        name: `8mmkcg`,
        styles: `display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0`,
      },
      Te = function (e) {
        var t = e.size,
          i = a(e, J);
        return r.jsx(
          `svg`,
          n(
            {
              height: t,
              width: t,
              viewBox: `0 0 20 20`,
              "aria-hidden": `true`,
              focusable: `false`,
              css: we,
            },
            i,
          ),
        );
      },
      Ee = function (e) {
        return r.jsx(
          Te,
          n({ size: 20 }, e),
          r.jsx(`path`, {
            d: `M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z`,
          }),
        );
      },
      Y = function (e) {
        return r.jsx(
          Te,
          n({ size: 20 }, e),
          r.jsx(`path`, {
            d: `M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`,
          }),
        );
      },
      De = function (e, n) {
        var r = e.isFocused,
          i = e.theme,
          a = i.spacing.baseUnit,
          o = i.colors;
        return t(
          {
            label: `indicatorContainer`,
            display: `flex`,
            transition: `color 150ms`,
          },
          n
            ? {}
            : {
                color: r ? o.neutral60 : o.neutral20,
                padding: a * 2,
                ":hover": { color: r ? o.neutral80 : o.neutral40 },
              },
        );
      },
      Oe = De,
      ke = function (e) {
        var t = e.children,
          i = e.innerProps;
        return r.jsx(
          `div`,
          n(
            {},
            C(e, `dropdownIndicator`, {
              indicator: !0,
              "dropdown-indicator": !0,
            }),
            i,
          ),
          t || r.jsx(Y, null),
        );
      },
      Ae = De,
      je = function (e) {
        var t = e.children,
          i = e.innerProps;
        return r.jsx(
          `div`,
          n(
            {},
            C(e, `clearIndicator`, { indicator: !0, "clear-indicator": !0 }),
            i,
          ),
          t || r.jsx(Ee, null),
        );
      },
      Me = function (e, n) {
        var r = e.isDisabled,
          i = e.theme,
          a = i.spacing.baseUnit,
          o = i.colors;
        return t(
          { label: `indicatorSeparator`, alignSelf: `stretch`, width: 1 },
          n
            ? {}
            : {
                backgroundColor: r ? o.neutral10 : o.neutral20,
                marginBottom: a * 2,
                marginTop: a * 2,
              },
        );
      },
      Ne = function (e) {
        var t = e.innerProps;
        return r.jsx(
          `span`,
          n({}, t, C(e, `indicatorSeparator`, { "indicator-separator": !0 })),
        );
      },
      Pe = r.keyframes(
        (Se ||= s([
          `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
        ])),
      ),
      Fe = function (e, n) {
        var r = e.isFocused,
          i = e.size,
          a = e.theme,
          o = a.colors,
          s = a.spacing.baseUnit;
        return t(
          {
            label: `loadingIndicator`,
            display: `flex`,
            transition: `color 150ms`,
            alignSelf: `center`,
            fontSize: i,
            lineHeight: 1,
            marginRight: i,
            textAlign: `center`,
            verticalAlign: `middle`,
          },
          n ? {} : { color: r ? o.neutral60 : o.neutral20, padding: s * 2 },
        );
      },
      Ie = function (e) {
        var t = e.delay,
          n = e.offset;
        return r.jsx(`span`, {
          css: r.css(
            {
              animation: `${Pe} 1s ease-in-out ${t}ms infinite;`,
              backgroundColor: `currentColor`,
              borderRadius: `1em`,
              display: `inline-block`,
              marginLeft: n ? `1em` : void 0,
              height: `1em`,
              verticalAlign: `top`,
              width: `1em`,
            },
            ``,
            ``,
          ),
        });
      },
      Le = function (e) {
        var i = e.innerProps,
          o = e.isRtl,
          s = e.size,
          c = s === void 0 ? 4 : s,
          l = a(e, Ce);
        return r.jsx(
          `div`,
          n(
            {},
            C(
              t(t({}, l), {}, { innerProps: i, isRtl: o, size: c }),
              `loadingIndicator`,
              { indicator: !0, "loading-indicator": !0 },
            ),
            i,
          ),
          r.jsx(Ie, { delay: 0, offset: o }),
          r.jsx(Ie, { delay: 160, offset: !0 }),
          r.jsx(Ie, { delay: 320, offset: !o }),
        );
      },
      Re = function (e, n) {
        var r = e.isDisabled,
          i = e.isFocused,
          a = e.theme,
          o = a.colors,
          s = a.borderRadius,
          c = a.spacing;
        return t(
          {
            label: `control`,
            alignItems: `center`,
            cursor: `default`,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            minHeight: c.controlHeight,
            outline: `0 !important`,
            position: `relative`,
            transition: `all 100ms`,
          },
          n
            ? {}
            : {
                backgroundColor: r ? o.neutral5 : o.neutral0,
                borderColor: r ? o.neutral10 : i ? o.primary : o.neutral20,
                borderRadius: s,
                borderStyle: `solid`,
                borderWidth: 1,
                boxShadow: i ? `0 0 0 1px ${o.primary}` : void 0,
                "&:hover": { borderColor: i ? o.primary : o.neutral30 },
              },
        );
      },
      ze = function (e) {
        var t = e.children,
          i = e.isDisabled,
          a = e.isFocused,
          o = e.innerRef,
          s = e.innerProps,
          c = e.menuIsOpen;
        return r.jsx(
          `div`,
          n(
            { ref: o },
            C(e, `control`, {
              control: !0,
              "control--is-disabled": i,
              "control--is-focused": a,
              "control--menu-is-open": c,
            }),
            s,
            { "aria-disabled": i || void 0 },
          ),
          t,
        );
      },
      Be = [`data`],
      Ve = function (e, t) {
        var n = e.theme.spacing;
        return t
          ? {}
          : { paddingBottom: n.baseUnit * 2, paddingTop: n.baseUnit * 2 };
      },
      He = function (e) {
        var t = e.children,
          i = e.cx,
          a = e.getStyles,
          o = e.getClassNames,
          s = e.Heading,
          c = e.headingProps,
          l = e.innerProps,
          u = e.label,
          d = e.theme,
          f = e.selectProps;
        return r.jsx(
          `div`,
          n({}, C(e, `group`, { group: !0 }), l),
          r.jsx(
            s,
            n({}, c, {
              selectProps: f,
              theme: d,
              getStyles: a,
              getClassNames: o,
              cx: i,
            }),
            u,
          ),
          r.jsx(`div`, null, t),
        );
      },
      Ue = function (e, n) {
        var r = e.theme,
          i = r.colors,
          a = r.spacing;
        return t(
          { label: `group`, cursor: `default`, display: `block` },
          n
            ? {}
            : {
                color: i.neutral40,
                fontSize: `75%`,
                fontWeight: 500,
                marginBottom: `0.25em`,
                paddingLeft: a.baseUnit * 3,
                paddingRight: a.baseUnit * 3,
                textTransform: `uppercase`,
              },
        );
      },
      We = function (e) {
        var t = S(e);
        t.data;
        var i = a(t, Be);
        return r.jsx(
          `div`,
          n({}, C(e, `groupHeading`, { "group-heading": !0 }), i),
        );
      },
      Ge = He,
      X = [`innerRef`, `isDisabled`, `isHidden`, `inputClassName`],
      Ke = function (e, n) {
        var r = e.isDisabled,
          i = e.value,
          a = e.theme,
          o = a.spacing,
          s = a.colors;
        return t(
          t(
            {
              visibility: r ? `hidden` : `visible`,
              transform: i ? `translateZ(0)` : ``,
            },
            Je,
          ),
          n
            ? {}
            : {
                margin: o.baseUnit / 2,
                paddingBottom: o.baseUnit / 2,
                paddingTop: o.baseUnit / 2,
                color: s.neutral80,
              },
        );
      },
      qe = {
        gridArea: `1 / 2`,
        font: `inherit`,
        minWidth: `2px`,
        border: 0,
        margin: 0,
        outline: 0,
        padding: 0,
      },
      Je = {
        flex: `1 1 auto`,
        display: `inline-grid`,
        gridArea: `1 / 1 / 2 / 3`,
        gridTemplateColumns: `0 min-content`,
        "&:after": t(
          {
            content: `attr(data-value) " "`,
            visibility: `hidden`,
            whiteSpace: `pre`,
          },
          qe,
        ),
      },
      Ye = function (e) {
        return t(
          {
            label: `input`,
            color: `inherit`,
            background: 0,
            opacity: +!e,
            width: `100%`,
          },
          qe,
        );
      },
      Xe = function (e) {
        var t = e.cx,
          i = e.value,
          o = S(e),
          s = o.innerRef,
          c = o.isDisabled,
          l = o.isHidden,
          u = o.inputClassName,
          d = a(o, X);
        return r.jsx(
          `div`,
          n({}, C(e, `input`, { "input-container": !0 }), {
            "data-value": i || ``,
          }),
          r.jsx(
            `input`,
            n(
              {
                className: t({ input: !0 }, u),
                ref: s,
                style: Ye(l),
                disabled: c,
              },
              d,
            ),
          ),
        );
      },
      Ze = function (e, n) {
        var r = e.theme,
          i = r.spacing,
          a = r.borderRadius,
          o = r.colors;
        return t(
          { label: `multiValue`, display: `flex`, minWidth: 0 },
          n
            ? {}
            : {
                backgroundColor: o.neutral10,
                borderRadius: a / 2,
                margin: i.baseUnit / 2,
              },
        );
      },
      Z = function (e, n) {
        var r = e.theme,
          i = r.borderRadius,
          a = r.colors,
          o = e.cropWithEllipsis;
        return t(
          {
            overflow: `hidden`,
            textOverflow: o || o === void 0 ? `ellipsis` : void 0,
            whiteSpace: `nowrap`,
          },
          n
            ? {}
            : {
                borderRadius: i / 2,
                color: a.neutral80,
                fontSize: `85%`,
                padding: 3,
                paddingLeft: 6,
              },
        );
      },
      Qe = function (e, n) {
        var r = e.theme,
          i = r.spacing,
          a = r.borderRadius,
          o = r.colors,
          s = e.isFocused;
        return t(
          { alignItems: `center`, display: `flex` },
          n
            ? {}
            : {
                borderRadius: a / 2,
                backgroundColor: s ? o.dangerLight : void 0,
                paddingLeft: i.baseUnit,
                paddingRight: i.baseUnit,
                ":hover": { backgroundColor: o.dangerLight, color: o.danger },
              },
        );
      },
      $e = function (e) {
        var t = e.children,
          n = e.innerProps;
        return r.jsx(`div`, n, t);
      },
      et = $e,
      tt = $e;
    function nt(e) {
      var t = e.children,
        i = e.innerProps;
      return r.jsx(
        `div`,
        n({ role: `button` }, i),
        t || r.jsx(Ee, { size: 14 }),
      );
    }
    var rt = function (e) {
        var n = e.children,
          i = e.components,
          a = e.data,
          o = e.innerProps,
          s = e.isDisabled,
          c = e.removeProps,
          l = e.selectProps,
          u = i.Container,
          d = i.Label,
          f = i.Remove;
        return r.jsx(
          u,
          {
            data: a,
            innerProps: t(
              t(
                {},
                C(e, `multiValue`, {
                  "multi-value": !0,
                  "multi-value--is-disabled": s,
                }),
              ),
              o,
            ),
            selectProps: l,
          },
          r.jsx(
            d,
            {
              data: a,
              innerProps: t(
                {},
                C(e, `multiValueLabel`, { "multi-value__label": !0 }),
              ),
              selectProps: l,
            },
            n,
          ),
          r.jsx(f, {
            data: a,
            innerProps: t(
              t({}, C(e, `multiValueRemove`, { "multi-value__remove": !0 })),
              {},
              { "aria-label": `Remove ${n || `option`}` },
              c,
            ),
            selectProps: l,
          }),
        );
      },
      it = function (e, n) {
        var r = e.isDisabled,
          i = e.isFocused,
          a = e.isSelected,
          o = e.theme,
          s = o.spacing,
          c = o.colors;
        return t(
          {
            label: `option`,
            cursor: `default`,
            display: `block`,
            fontSize: `inherit`,
            width: `100%`,
            userSelect: `none`,
            WebkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
          },
          n
            ? {}
            : {
                backgroundColor: a
                  ? c.primary
                  : i
                    ? c.primary25
                    : `transparent`,
                color: r ? c.neutral20 : a ? c.neutral0 : `inherit`,
                padding: `${s.baseUnit * 2}px ${s.baseUnit * 3}px`,
                ":active": {
                  backgroundColor: r ? void 0 : a ? c.primary : c.primary50,
                },
              },
        );
      },
      at = function (e) {
        var t = e.children,
          i = e.isDisabled,
          a = e.isFocused,
          o = e.isSelected,
          s = e.innerRef,
          c = e.innerProps;
        return r.jsx(
          `div`,
          n(
            {},
            C(e, `option`, {
              option: !0,
              "option--is-disabled": i,
              "option--is-focused": a,
              "option--is-selected": o,
            }),
            { ref: s, "aria-disabled": i },
            c,
          ),
          t,
        );
      },
      ot = function (e, n) {
        var r = e.theme,
          i = r.spacing,
          a = r.colors;
        return t(
          { label: `placeholder`, gridArea: `1 / 1 / 2 / 3` },
          n
            ? {}
            : {
                color: a.neutral50,
                marginLeft: i.baseUnit / 2,
                marginRight: i.baseUnit / 2,
              },
        );
      },
      st = function (e) {
        var t = e.children,
          i = e.innerProps;
        return r.jsx(
          `div`,
          n({}, C(e, `placeholder`, { placeholder: !0 }), i),
          t,
        );
      },
      Q = function (e, n) {
        var r = e.isDisabled,
          i = e.theme,
          a = i.spacing,
          o = i.colors;
        return t(
          {
            label: `singleValue`,
            gridArea: `1 / 1 / 2 / 3`,
            maxWidth: `100%`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
          },
          n
            ? {}
            : {
                color: r ? o.neutral40 : o.neutral80,
                marginLeft: a.baseUnit / 2,
                marginRight: a.baseUnit / 2,
              },
        );
      },
      ct = {
        ClearIndicator: je,
        Control: ze,
        DropdownIndicator: ke,
        DownChevron: Y,
        CrossIcon: Ee,
        Group: Ge,
        GroupHeading: We,
        IndicatorsContainer: xe,
        IndicatorSeparator: Ne,
        Input: Xe,
        LoadingIndicator: Le,
        Menu: ue,
        MenuList: fe,
        MenuPortal: _e,
        LoadingMessage: G,
        NoOptionsMessage: W,
        MultiValue: rt,
        MultiValueContainer: et,
        MultiValueLabel: tt,
        MultiValueRemove: nt,
        Option: at,
        Placeholder: st,
        SelectContainer: ye,
        SingleValue: function (e) {
          var t = e.children,
            i = e.isDisabled,
            a = e.innerProps;
          return r.jsx(
            `div`,
            n(
              {},
              C(e, `singleValue`, {
                "single-value": !0,
                "single-value--is-disabled": i,
              }),
              a,
            ),
            t,
          );
        },
        ValueContainer: q,
      };
    (e.MenuPlacer = U),
      (e.classNames = b),
      (e.cleanValue = x),
      (e.clearIndicatorCSS = Ae),
      (e.components = ct),
      (e.containerCSS = ve),
      (e.css = Re),
      (e.css$1 = Q),
      (e.defaultComponents = function (e) {
        return t(t({}, ct), e.components);
      }),
      (e.dropdownIndicatorCSS = Oe),
      (e.groupCSS = Ve),
      (e.groupHeadingCSS = Ue),
      (e.handleInputChange = w),
      (e.indicatorSeparatorCSS = Me),
      (e.indicatorsContainerCSS = be),
      (e.inputCSS = Ke),
      (e.isDocumentElement = T),
      (e.isMobileDevice = F),
      (e.isTouchCapable = P),
      (e.loadingIndicatorCSS = Fe),
      (e.loadingMessageCSS = he),
      (e.menuCSS = H),
      (e.menuListCSS = de),
      (e.menuPortalCSS = ge),
      (e.multiValueAsValue = ie),
      (e.multiValueCSS = Ze),
      (e.multiValueLabelCSS = Z),
      (e.multiValueRemoveCSS = Qe),
      (e.noOptionsMessageCSS = me),
      (e.noop = v),
      (e.notNullish = ee),
      (e.optionCSS = it),
      (e.placeholderCSS = ot),
      (e.removeProps = B),
      (e.scrollIntoView = M),
      (e.singleValueAsValue = re),
      (e.supportsPassiveEvents = z),
      (e.valueContainerCSS = K),
      (e.valueTernary = ne);
  }),
  hn = r({ default: () => vn });
function gn(e, t) {
  return !!(e === t || (yn(e) && yn(t)));
}
function _n(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!gn(e[n], t[n])) return !1;
  return !0;
}
function vn(e, t) {
  t === void 0 && (t = _n);
  var n = null;
  function r() {
    var r = [...arguments];
    if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
    var i = e.apply(this, r);
    return (n = { lastResult: i, lastArgs: r, lastThis: this }), i;
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var yn,
  bn = t(() => {
    yn =
      Number.isNaN ||
      function (e) {
        return typeof e == `number` && e !== e;
      };
  }),
  xn = i((t) => {
    var n = Et(),
      r = gt(),
      i = Dt(),
      a = Ot(),
      o = At(),
      s = Ft(),
      c = zt(),
      l = f(),
      u = mn(),
      d = ln(),
      p = (bn(), e(hn)),
      m = wt();
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function g(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    for (
      var _ = g(l),
        v = h(p),
        y = {
          name: `7pg0cj-a11yText`,
          styles: `label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap`,
        },
        b = function (e) {
          return d.jsx(`span`, n({ css: y }, e));
        },
        x = {
          guidance: function (e) {
            var t = e.isSearchable,
              n = e.isMulti,
              r = e.tabSelectsValue,
              i = e.context,
              a = e.isInitialFocus;
            switch (i) {
              case `menu`:
                return `Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu${r ? `, press Tab to select the option and exit the menu` : ``}.`;
              case `input`:
                return a
                  ? `${e[`aria-label`] || `Select`} is focused ${t ? `,type to refine list` : ``}, press Down to open the menu, ${n ? ` press left to focus selected values` : ``}`
                  : ``;
              case `value`:
                return `Use left and right to toggle between focused values, press Backspace to remove the currently focused value`;
              default:
                return ``;
            }
          },
          onChange: function (e) {
            var t = e.action,
              n = e.label,
              r = n === void 0 ? `` : n,
              i = e.labels,
              a = e.isDisabled;
            switch (t) {
              case `deselect-option`:
              case `pop-value`:
              case `remove-value`:
                return `option ${r}, deselected.`;
              case `clear`:
                return `All selected options have been cleared.`;
              case `initial-input-focus`:
                return `option${i.length > 1 ? `s` : ``} ${i.join(`,`)}, selected.`;
              case `select-option`:
                return a
                  ? `option ${r} is disabled. Select another option.`
                  : `option ${r}, selected.`;
              default:
                return ``;
            }
          },
          onFocus: function (e) {
            var t = e.context,
              n = e.focused,
              r = e.options,
              i = e.label,
              a = i === void 0 ? `` : i,
              o = e.selectValue,
              s = e.isDisabled,
              c = e.isSelected,
              l = e.isAppleDevice,
              u = function (e, t) {
                return e && e.length
                  ? `${e.indexOf(t) + 1} of ${e.length}`
                  : ``;
              };
            return t === `value` && o
              ? `value ${a} focused, ${u(o, n)}.`
              : t === `menu` && l
                ? `${a}${`${c ? ` selected` : ``}${s ? ` disabled` : ``}`}, ${u(r, n)}.`
                : ``;
          },
          onFilter: function (e) {
            var t = e.inputValue;
            return `${e.resultsMessage}${t ? ` for search term ` + t : ``}.`;
          },
        },
        S = function (e) {
          var t = e.ariaSelection,
            n = e.focusedOption,
            i = e.focusedValue,
            a = e.focusableOptions,
            o = e.isFocused,
            s = e.selectValue,
            c = e.selectProps,
            u = e.id,
            f = e.isAppleDevice,
            p = c.ariaLiveMessages,
            m = c.getOptionLabel,
            h = c.inputValue,
            g = c.isMulti,
            _ = c.isOptionDisabled,
            v = c.isSearchable,
            y = c.menuIsOpen,
            S = c.options,
            C = c.screenReaderStatus,
            w = c.tabSelectsValue,
            T = c.isLoading,
            E = c[`aria-label`],
            D = c[`aria-live`],
            O = l.useMemo(
              function () {
                return r(r({}, x), p || {});
              },
              [p],
            ),
            k = l.useMemo(
              function () {
                var e = ``;
                if (t && O.onChange) {
                  var n = t.option,
                    i = t.options,
                    a = t.removedValue,
                    o = t.removedValues,
                    c = t.value,
                    l =
                      a ||
                      n ||
                      (function (e) {
                        return Array.isArray(e) ? null : e;
                      })(c),
                    u = l ? m(l) : ``,
                    d = i || o || void 0,
                    f = d ? d.map(m) : [],
                    p = r({ isDisabled: l && _(l, s), label: u, labels: f }, t);
                  e = O.onChange(p);
                }
                return e;
              },
              [t, O, _, s, m],
            ),
            A = l.useMemo(
              function () {
                var e = ``,
                  t = n || i,
                  r = !!(n && s && s.includes(n));
                if (t && O.onFocus) {
                  var o = {
                    focused: t,
                    label: m(t),
                    isDisabled: _(t, s),
                    isSelected: r,
                    options: a,
                    context: t === n ? `menu` : `value`,
                    selectValue: s,
                    isAppleDevice: f,
                  };
                  e = O.onFocus(o);
                }
                return e;
              },
              [n, i, m, _, O, a, s, f],
            ),
            j = l.useMemo(
              function () {
                var e = ``;
                if (y && S.length && !T && O.onFilter) {
                  var t = C({ count: a.length });
                  e = O.onFilter({ inputValue: h, resultsMessage: t });
                }
                return e;
              },
              [a, h, y, O, S, C, T],
            ),
            M = t?.action === `initial-input-focus`,
            N = l.useMemo(
              function () {
                var e = ``;
                if (O.guidance) {
                  var t = i ? `value` : y ? `menu` : `input`;
                  e = O.guidance({
                    "aria-label": E,
                    context: t,
                    isDisabled: n && _(n, s),
                    isMulti: g,
                    isSearchable: v,
                    tabSelectsValue: w,
                    isInitialFocus: M,
                  });
                }
                return e;
              },
              [E, n, i, g, _, v, y, O, s, w, M],
            ),
            P = d.jsx(
              l.Fragment,
              null,
              d.jsx(`span`, { id: `aria-selection` }, k),
              d.jsx(`span`, { id: `aria-focused` }, A),
              d.jsx(`span`, { id: `aria-results` }, j),
              d.jsx(`span`, { id: `aria-guidance` }, N),
            );
          return d.jsx(
            l.Fragment,
            null,
            d.jsx(b, { id: u }, M && P),
            d.jsx(
              b,
              {
                "aria-live": D,
                "aria-atomic": `false`,
                "aria-relevant": `additions text`,
                role: `log`,
              },
              o && !M && P,
            ),
          );
        },
        C = [
          { base: `A`, letters: `AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ` },
          { base: `AA`, letters: `Ꜳ` },
          { base: `AE`, letters: `ÆǼǢ` },
          { base: `AO`, letters: `Ꜵ` },
          { base: `AU`, letters: `Ꜷ` },
          { base: `AV`, letters: `ꜸꜺ` },
          { base: `AY`, letters: `Ꜽ` },
          { base: `B`, letters: `BⒷＢḂḄḆɃƂƁ` },
          { base: `C`, letters: `CⒸＣĆĈĊČÇḈƇȻꜾ` },
          { base: `D`, letters: `DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ` },
          { base: `DZ`, letters: `ǱǄ` },
          { base: `Dz`, letters: `ǲǅ` },
          { base: `E`, letters: `EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ` },
          { base: `F`, letters: `FⒻＦḞƑꝻ` },
          { base: `G`, letters: `GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ` },
          { base: `H`, letters: `HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ` },
          { base: `I`, letters: `IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ` },
          { base: `J`, letters: `JⒿＪĴɈ` },
          { base: `K`, letters: `KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ` },
          { base: `L`, letters: `LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ` },
          { base: `LJ`, letters: `Ǉ` },
          { base: `Lj`, letters: `ǈ` },
          { base: `M`, letters: `MⓂＭḾṀṂⱮƜ` },
          { base: `N`, letters: `NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ` },
          { base: `NJ`, letters: `Ǌ` },
          { base: `Nj`, letters: `ǋ` },
          {
            base: `O`,
            letters: `OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ`,
          },
          { base: `OI`, letters: `Ƣ` },
          { base: `OO`, letters: `Ꝏ` },
          { base: `OU`, letters: `Ȣ` },
          { base: `P`, letters: `PⓅＰṔṖƤⱣꝐꝒꝔ` },
          { base: `Q`, letters: `QⓆＱꝖꝘɊ` },
          { base: `R`, letters: `RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ` },
          { base: `S`, letters: `SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ` },
          { base: `T`, letters: `TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ` },
          { base: `TZ`, letters: `Ꜩ` },
          { base: `U`, letters: `UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ` },
          { base: `V`, letters: `VⓋＶṼṾƲꝞɅ` },
          { base: `VY`, letters: `Ꝡ` },
          { base: `W`, letters: `WⓌＷẀẂŴẆẄẈⱲ` },
          { base: `X`, letters: `XⓍＸẊẌ` },
          { base: `Y`, letters: `YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ` },
          { base: `Z`, letters: `ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ` },
          { base: `a`, letters: `aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ` },
          { base: `aa`, letters: `ꜳ` },
          { base: `ae`, letters: `æǽǣ` },
          { base: `ao`, letters: `ꜵ` },
          { base: `au`, letters: `ꜷ` },
          { base: `av`, letters: `ꜹꜻ` },
          { base: `ay`, letters: `ꜽ` },
          { base: `b`, letters: `bⓑｂḃḅḇƀƃɓ` },
          { base: `c`, letters: `cⓒｃćĉċčçḉƈȼꜿↄ` },
          { base: `d`, letters: `dⓓｄḋďḍḑḓḏđƌɖɗꝺ` },
          { base: `dz`, letters: `ǳǆ` },
          { base: `e`, letters: `eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ` },
          { base: `f`, letters: `fⓕｆḟƒꝼ` },
          { base: `g`, letters: `gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ` },
          { base: `h`, letters: `hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ` },
          { base: `hv`, letters: `ƕ` },
          { base: `i`, letters: `iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı` },
          { base: `j`, letters: `jⓙｊĵǰɉ` },
          { base: `k`, letters: `kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ` },
          { base: `l`, letters: `lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ` },
          { base: `lj`, letters: `ǉ` },
          { base: `m`, letters: `mⓜｍḿṁṃɱɯ` },
          { base: `n`, letters: `nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ` },
          { base: `nj`, letters: `ǌ` },
          {
            base: `o`,
            letters: `oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ`,
          },
          { base: `oi`, letters: `ƣ` },
          { base: `ou`, letters: `ȣ` },
          { base: `oo`, letters: `ꝏ` },
          { base: `p`, letters: `pⓟｐṕṗƥᵽꝑꝓꝕ` },
          { base: `q`, letters: `qⓠｑɋꝗꝙ` },
          { base: `r`, letters: `rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ` },
          { base: `s`, letters: `sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ` },
          { base: `t`, letters: `tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ` },
          { base: `tz`, letters: `ꜩ` },
          { base: `u`, letters: `uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ` },
          { base: `v`, letters: `vⓥｖṽṿʋꝟʌ` },
          { base: `vy`, letters: `ꝡ` },
          { base: `w`, letters: `wⓦｗẁẃŵẇẅẘẉⱳ` },
          { base: `x`, letters: `xⓧｘẋẍ` },
          { base: `y`, letters: `yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ` },
          { base: `z`, letters: `zⓩｚźẑżžẓẕƶȥɀⱬꝣ` },
        ],
        w = RegExp(
          `[` +
            C.map(function (e) {
              return e.letters;
            }).join(``) +
            `]`,
          `g`,
        ),
        T = {},
        E = 0;
      E < C.length;
      E++
    )
      for (var D = C[E], O = 0; O < D.letters.length; O++)
        T[D.letters[O]] = D.base;
    var k = function (e) {
        return e.replace(w, function (e) {
          return T[e];
        });
      },
      A = v.default(k),
      j = function (e) {
        return e.replace(/^\s+|\s+$/g, ``);
      },
      M = function (e) {
        return `${e.label} ${e.value}`;
      },
      N = function (e) {
        return function (t, n) {
          if (t.data.__isNew__) return !0;
          var i = r(
              {
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: M,
                trim: !0,
                matchFrom: `any`,
              },
              e,
            ),
            a = i.ignoreCase,
            o = i.ignoreAccents,
            s = i.stringify,
            c = i.trim,
            l = i.matchFrom,
            u = c ? j(n) : n,
            d = c ? j(s(t)) : s(t);
          return (
            a && ((u = u.toLowerCase()), (d = d.toLowerCase())),
            o && ((u = A(u)), (d = k(d))),
            l === `start` ? d.substr(0, u.length) === u : d.indexOf(u) > -1
          );
        };
      },
      P = [`innerRef`];
    function F(e) {
      var t = e.innerRef,
        r = m(e, P),
        i = u.removeProps(r, `onExited`, `in`, `enter`, `exit`, `appear`);
      return d.jsx(
        `input`,
        n({ ref: t }, i, {
          css: d.css(
            {
              label: `dummyInput`,
              background: 0,
              border: 0,
              caretColor: `transparent`,
              fontSize: `inherit`,
              gridArea: `1 / 1 / 2 / 3`,
              outline: 0,
              padding: 0,
              width: 1,
              color: `transparent`,
              left: -100,
              opacity: 0,
              position: `relative`,
              transform: `scale(.01)`,
            },
            ``,
            ``,
          ),
        }),
      );
    }
    var I = function (e) {
      e.cancelable && e.preventDefault(), e.stopPropagation();
    };
    function L(e) {
      var t = e.isEnabled,
        n = e.onBottomArrive,
        r = e.onBottomLeave,
        i = e.onTopArrive,
        a = e.onTopLeave,
        o = l.useRef(!1),
        s = l.useRef(!1),
        c = l.useRef(0),
        d = l.useRef(null),
        f = l.useCallback(
          function (e, t) {
            if (d.current !== null) {
              var c = d.current,
                l = c.scrollTop,
                u = c.scrollHeight,
                f = c.clientHeight,
                p = d.current,
                m = t > 0,
                h = u - f - l,
                g = !1;
              h > t && o.current && (r && r(e), (o.current = !1)),
                m && s.current && (a && a(e), (s.current = !1)),
                m && t > h
                  ? (n && !o.current && n(e),
                    (p.scrollTop = u),
                    (g = !0),
                    (o.current = !0))
                  : !m &&
                    -t > l &&
                    (i && !s.current && i(e),
                    (p.scrollTop = 0),
                    (g = !0),
                    (s.current = !0)),
                g && I(e);
            }
          },
          [n, r, i, a],
        ),
        p = l.useCallback(
          function (e) {
            f(e, e.deltaY);
          },
          [f],
        ),
        m = l.useCallback(function (e) {
          c.current = e.changedTouches[0].clientY;
        }, []),
        h = l.useCallback(
          function (e) {
            f(e, c.current - e.changedTouches[0].clientY);
          },
          [f],
        ),
        g = l.useCallback(
          function (e) {
            if (e) {
              var t = u.supportsPassiveEvents ? { passive: !1 } : !1;
              e.addEventListener(`wheel`, p, t),
                e.addEventListener(`touchstart`, m, t),
                e.addEventListener(`touchmove`, h, t);
            }
          },
          [h, m, p],
        ),
        _ = l.useCallback(
          function (e) {
            e &&
              (e.removeEventListener(`wheel`, p, !1),
              e.removeEventListener(`touchstart`, m, !1),
              e.removeEventListener(`touchmove`, h, !1));
          },
          [h, m, p],
        );
      return (
        l.useEffect(
          function () {
            if (t) {
              var e = d.current;
              return (
                g(e),
                function () {
                  _(e);
                }
              );
            }
          },
          [t, g, _],
        ),
        function (e) {
          d.current = e;
        }
      );
    }
    var R = [`boxSizing`, `height`, `overflow`, `paddingRight`, `position`],
      z = {
        boxSizing: `border-box`,
        overflow: `hidden`,
        position: `relative`,
        height: `100%`,
      };
    function ee(e) {
      e.cancelable && e.preventDefault();
    }
    function te(e) {
      e.stopPropagation();
    }
    function ne() {
      var e = this.scrollTop,
        t = this.scrollHeight,
        n = e + this.offsetHeight;
      e === 0 ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
    }
    function re() {
      return `ontouchstart` in window || navigator.maxTouchPoints;
    }
    var ie = !!(
        typeof window < `u` &&
        window.document &&
        window.document.createElement
      ),
      B = 0,
      ae = { capture: !1, passive: !1 };
    function oe(e) {
      var t = e.isEnabled,
        n = e.accountForScrollbars,
        r = n === void 0 || n,
        i = l.useRef({}),
        a = l.useRef(null),
        o = l.useCallback(
          function (e) {
            if (ie) {
              var t = document.body,
                n = t && t.style;
              if (
                (r &&
                  R.forEach(function (e) {
                    var t = n && n[e];
                    i.current[e] = t;
                  }),
                r && B < 1)
              ) {
                var a = parseInt(i.current.paddingRight, 10) || 0,
                  o = document.body ? document.body.clientWidth : 0,
                  s = window.innerWidth - o + a || 0;
                Object.keys(z).forEach(function (e) {
                  var t = z[e];
                  n && (n[e] = t);
                }),
                  n && (n.paddingRight = `${s}px`);
              }
              t &&
                re() &&
                (t.addEventListener(`touchmove`, ee, ae),
                e &&
                  (e.addEventListener(`touchstart`, ne, ae),
                  e.addEventListener(`touchmove`, te, ae))),
                (B += 1);
            }
          },
          [r],
        ),
        s = l.useCallback(
          function (e) {
            if (ie) {
              var t = document.body,
                n = t && t.style;
              (B = Math.max(B - 1, 0)),
                r &&
                  B < 1 &&
                  R.forEach(function (e) {
                    var t = i.current[e];
                    n && (n[e] = t);
                  }),
                t &&
                  re() &&
                  (t.removeEventListener(`touchmove`, ee, ae),
                  e &&
                    (e.removeEventListener(`touchstart`, ne, ae),
                    e.removeEventListener(`touchmove`, te, ae)));
            }
          },
          [r],
        );
      return (
        l.useEffect(
          function () {
            if (t) {
              var e = a.current;
              return (
                o(e),
                function () {
                  s(e);
                }
              );
            }
          },
          [t, o, s],
        ),
        function (e) {
          a.current = e;
        }
      );
    }
    var se = function (e) {
        var t = e.target;
        return (
          t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
        );
      },
      V = {
        name: `1kfdb0e`,
        styles: `position:fixed;left:0;bottom:0;right:0;top:0`,
      };
    function ce(e) {
      var t = e.children,
        n = e.lockEnabled,
        r = e.captureEnabled,
        i = r === void 0 || r,
        a = e.onBottomArrive,
        o = e.onBottomLeave,
        s = e.onTopArrive,
        c = e.onTopLeave,
        u = L({
          isEnabled: i,
          onBottomArrive: a,
          onBottomLeave: o,
          onTopArrive: s,
          onTopLeave: c,
        }),
        f = oe({ isEnabled: n });
      return d.jsx(
        l.Fragment,
        null,
        n && d.jsx(`div`, { onClick: se, css: V }),
        t(function (e) {
          u(e), f(e);
        }),
      );
    }
    var H = {
        name: `1a0ro4n-requiredInput`,
        styles: `label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%`,
      },
      le = function (e) {
        var t = e.name,
          n = e.onFocus;
        return d.jsx(`input`, {
          required: !0,
          name: t,
          tabIndex: -1,
          "aria-hidden": `true`,
          onFocus: n,
          css: H,
          value: ``,
          onChange: function () {},
        });
      };
    function U(e) {
      return (
        typeof window < `u` &&
        window.navigator != null &&
        e.test(
          window.navigator.userAgentData?.platform || window.navigator.platform,
        )
      );
    }
    function ue() {
      return U(/^iPhone/i);
    }
    function de() {
      return U(/^Mac/i);
    }
    function fe() {
      return U(/^iPad/i) || (de() && navigator.maxTouchPoints > 1);
    }
    function pe() {
      return ue() || fe();
    }
    function me() {
      return de() || pe();
    }
    var he = function (e) {
        return e.label;
      },
      W = function (e) {
        return e.label;
      },
      G = function (e) {
        return e.value;
      },
      ge = function (e) {
        return !!e.isDisabled;
      },
      _e = {
        clearIndicator: u.clearIndicatorCSS,
        container: u.containerCSS,
        control: u.css,
        dropdownIndicator: u.dropdownIndicatorCSS,
        group: u.groupCSS,
        groupHeading: u.groupHeadingCSS,
        indicatorsContainer: u.indicatorsContainerCSS,
        indicatorSeparator: u.indicatorSeparatorCSS,
        input: u.inputCSS,
        loadingIndicator: u.loadingIndicatorCSS,
        loadingMessage: u.loadingMessageCSS,
        menu: u.menuCSS,
        menuList: u.menuListCSS,
        menuPortal: u.menuPortalCSS,
        multiValue: u.multiValueCSS,
        multiValueLabel: u.multiValueLabelCSS,
        multiValueRemove: u.multiValueRemoveCSS,
        noOptionsMessage: u.noOptionsMessageCSS,
        option: u.optionCSS,
        placeholder: u.placeholderCSS,
        singleValue: u.css$1,
        valueContainer: u.valueContainerCSS,
      };
    function ve(e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = r({}, e);
      return (
        Object.keys(t).forEach(function (r) {
          var i = r;
          n[i] = e[i]
            ? function (n, r) {
                return t[i](e[i](n, r), r);
              }
            : t[i];
        }),
        n
      );
    }
    var ye = {
        primary: `#2684FF`,
        primary75: `#4C9AFF`,
        primary50: `#B2D4FF`,
        primary25: `#DEEBFF`,
        danger: `#DE350B`,
        dangerLight: `#FFBDAD`,
        neutral0: `hsl(0, 0%, 100%)`,
        neutral5: `hsl(0, 0%, 95%)`,
        neutral10: `hsl(0, 0%, 90%)`,
        neutral20: `hsl(0, 0%, 80%)`,
        neutral30: `hsl(0, 0%, 70%)`,
        neutral40: `hsl(0, 0%, 60%)`,
        neutral50: `hsl(0, 0%, 50%)`,
        neutral60: `hsl(0, 0%, 40%)`,
        neutral70: `hsl(0, 0%, 30%)`,
        neutral80: `hsl(0, 0%, 20%)`,
        neutral90: `hsl(0, 0%, 10%)`,
      },
      K = 4,
      q = 4,
      be = {
        borderRadius: K,
        colors: ye,
        spacing: { baseUnit: q, controlHeight: 38, menuGutter: q * 2 },
      },
      xe = {
        "aria-live": `polite`,
        backspaceRemovesValue: !0,
        blurInputOnSelect: u.isTouchCapable(),
        captureMenuScroll: !u.isTouchCapable(),
        classNames: {},
        closeMenuOnSelect: !0,
        closeMenuOnScroll: !1,
        components: {},
        controlShouldRenderValue: !0,
        escapeClearsValue: !1,
        filterOption: N(),
        formatGroupLabel: he,
        getOptionLabel: W,
        getOptionValue: G,
        isDisabled: !1,
        isLoading: !1,
        isMulti: !1,
        isRtl: !1,
        isSearchable: !0,
        isOptionDisabled: ge,
        loadingMessage: function () {
          return `Loading...`;
        },
        maxMenuHeight: 300,
        minMenuHeight: 140,
        menuIsOpen: !1,
        menuPlacement: `bottom`,
        menuPosition: `absolute`,
        menuShouldBlockScroll: !1,
        menuShouldScrollIntoView: !u.isMobileDevice(),
        noOptionsMessage: function () {
          return `No options`;
        },
        openMenuOnFocus: !1,
        openMenuOnClick: !0,
        options: [],
        pageSize: 5,
        placeholder: `Select...`,
        screenReaderStatus: function (e) {
          var t = e.count;
          return `${t} result${t === 1 ? `` : `s`} available`;
        },
        styles: {},
        tabIndex: 0,
        tabSelectsValue: !0,
        unstyled: !1,
      };
    function Se(e, t, n, r) {
      return {
        type: `option`,
        data: t,
        isDisabled: je(e, t, n),
        isSelected: Me(e, t, n),
        label: ke(e, t),
        value: Ae(e, t),
        index: r,
      };
    }
    function J(e, t) {
      return e.options
        .map(function (n, r) {
          if (`options` in n) {
            var i = n.options
              .map(function (n, r) {
                return Se(e, n, t, r);
              })
              .filter(function (t) {
                return Ee(e, t);
              });
            return i.length > 0
              ? { type: `group`, data: n, options: i, index: r }
              : void 0;
          }
          var a = Se(e, n, t, r);
          return Ee(e, a) ? a : void 0;
        })
        .filter(u.notNullish);
    }
    function Ce(e) {
      return e.reduce(function (e, t) {
        return (
          t.type === `group`
            ? e.push.apply(
                e,
                c(
                  t.options.map(function (e) {
                    return e.data;
                  }),
                ),
              )
            : e.push(t.data),
          e
        );
      }, []);
    }
    function we(e, t) {
      return e.reduce(function (e, n) {
        return (
          n.type === `group`
            ? e.push.apply(
                e,
                c(
                  n.options.map(function (e) {
                    return { data: e.data, id: `${t}-${n.index}-${e.index}` };
                  }),
                ),
              )
            : e.push({ data: n.data, id: `${t}-${n.index}` }),
          e
        );
      }, []);
    }
    function Te(e, t) {
      return Ce(J(e, t));
    }
    function Ee(e, t) {
      var n = e.inputValue,
        r = n === void 0 ? `` : n,
        i = t.data,
        a = t.isSelected,
        o = t.label,
        s = t.value;
      return (!Pe(e) || !a) && Ne(e, { label: o, value: s, data: i }, r);
    }
    function Y(e, t) {
      var n = e.focusedValue,
        r = e.selectValue.indexOf(n);
      if (r > -1) {
        if (t.indexOf(n) > -1) return n;
        if (r < t.length) return t[r];
      }
      return null;
    }
    function De(e, t) {
      var n = e.focusedOption;
      return n && t.indexOf(n) > -1 ? n : t[0];
    }
    var Oe = function (e, t) {
        return (
          e.find(function (e) {
            return e.data === t;
          })?.id || null
        );
      },
      ke = function (e, t) {
        return e.getOptionLabel(t);
      },
      Ae = function (e, t) {
        return e.getOptionValue(t);
      };
    function je(e, t, n) {
      return (
        typeof e.isOptionDisabled == `function` && e.isOptionDisabled(t, n)
      );
    }
    function Me(e, t, n) {
      if (n.indexOf(t) > -1) return !0;
      if (typeof e.isOptionSelected == `function`)
        return e.isOptionSelected(t, n);
      var r = Ae(e, t);
      return n.some(function (t) {
        return Ae(e, t) === r;
      });
    }
    function Ne(e, t, n) {
      return !e.filterOption || e.filterOption(t, n);
    }
    var Pe = function (e) {
        var t = e.hideSelectedOptions,
          n = e.isMulti;
        return t === void 0 ? n : t;
      },
      Fe = 1,
      Ie = (function (e) {
        o(l, e);
        var t = s(l);
        function l(e) {
          var n;
          if (
            (i(this, l),
            (n = t.call(this, e)),
            (n.state = {
              ariaSelection: null,
              focusedOption: null,
              focusedOptionId: null,
              focusableOptionsWithIds: [],
              focusedValue: null,
              inputIsHidden: !1,
              isFocused: !1,
              selectValue: [],
              clearFocusValueOnUpdate: !1,
              prevWasFocused: !1,
              inputIsHiddenAfterUpdate: void 0,
              prevProps: void 0,
              instancePrefix: ``,
            }),
            (n.blockOptionHover = !1),
            (n.isComposing = !1),
            (n.commonProps = void 0),
            (n.initialTouchX = 0),
            (n.initialTouchY = 0),
            (n.openAfterFocus = !1),
            (n.scrollToFocusedOptionOnUpdate = !1),
            (n.userIsDragging = void 0),
            (n.isAppleDevice = me()),
            (n.controlRef = null),
            (n.getControlRef = function (e) {
              n.controlRef = e;
            }),
            (n.focusedOptionRef = null),
            (n.getFocusedOptionRef = function (e) {
              n.focusedOptionRef = e;
            }),
            (n.menuListRef = null),
            (n.getMenuListRef = function (e) {
              n.menuListRef = e;
            }),
            (n.inputRef = null),
            (n.getInputRef = function (e) {
              n.inputRef = e;
            }),
            (n.focus = n.focusInput),
            (n.blur = n.blurInput),
            (n.onChange = function (e, t) {
              var r = n.props,
                i = r.onChange;
              (t.name = r.name), n.ariaOnChange(e, t), i(e, t);
            }),
            (n.setValue = function (e, t, r) {
              var i = n.props,
                a = i.closeMenuOnSelect,
                o = i.isMulti,
                s = i.inputValue;
              n.onInputChange(``, { action: `set-value`, prevInputValue: s }),
                a &&
                  (n.setState({ inputIsHiddenAfterUpdate: !o }),
                  n.onMenuClose()),
                n.setState({ clearFocusValueOnUpdate: !0 }),
                n.onChange(e, { action: t, option: r });
            }),
            (n.selectOption = function (e) {
              var t = n.props,
                r = t.blurInputOnSelect,
                i = t.isMulti,
                a = t.name,
                o = n.state.selectValue,
                s = i && n.isOptionSelected(e, o),
                l = n.isOptionDisabled(e, o);
              if (s) {
                var d = n.getOptionValue(e);
                n.setValue(
                  u.multiValueAsValue(
                    o.filter(function (e) {
                      return n.getOptionValue(e) !== d;
                    }),
                  ),
                  `deselect-option`,
                  e,
                );
              } else if (!l)
                i
                  ? n.setValue(
                      u.multiValueAsValue([].concat(c(o), [e])),
                      `select-option`,
                      e,
                    )
                  : n.setValue(u.singleValueAsValue(e), `select-option`);
              else {
                n.ariaOnChange(u.singleValueAsValue(e), {
                  action: `select-option`,
                  option: e,
                  name: a,
                });
                return;
              }
              r && n.blurInput();
            }),
            (n.removeValue = function (e) {
              var t = n.props.isMulti,
                r = n.state.selectValue,
                i = n.getOptionValue(e),
                a = r.filter(function (e) {
                  return n.getOptionValue(e) !== i;
                }),
                o = u.valueTernary(t, a, a[0] || null);
              n.onChange(o, { action: `remove-value`, removedValue: e }),
                n.focusInput();
            }),
            (n.clearValue = function () {
              var e = n.state.selectValue;
              n.onChange(u.valueTernary(n.props.isMulti, [], null), {
                action: `clear`,
                removedValues: e,
              });
            }),
            (n.popValue = function () {
              var e = n.props.isMulti,
                t = n.state.selectValue,
                r = t[t.length - 1],
                i = t.slice(0, t.length - 1),
                a = u.valueTernary(e, i, i[0] || null);
              r && n.onChange(a, { action: `pop-value`, removedValue: r });
            }),
            (n.getFocusedOptionId = function (e) {
              return Oe(n.state.focusableOptionsWithIds, e);
            }),
            (n.getFocusableOptionsWithIds = function () {
              return we(
                J(n.props, n.state.selectValue),
                n.getElementId(`option`),
              );
            }),
            (n.getValue = function () {
              return n.state.selectValue;
            }),
            (n.cx = function () {
              var e = [...arguments];
              return u.classNames.apply(
                void 0,
                [n.props.classNamePrefix].concat(e),
              );
            }),
            (n.getOptionLabel = function (e) {
              return ke(n.props, e);
            }),
            (n.getOptionValue = function (e) {
              return Ae(n.props, e);
            }),
            (n.getStyles = function (e, t) {
              var r = n.props.unstyled,
                i = _e[e](t, r);
              i.boxSizing = `border-box`;
              var a = n.props.styles[e];
              return a ? a(i, t) : i;
            }),
            (n.getClassNames = function (e, t) {
              var r;
              return (r = n.props.classNames)[e]?.call(r, t);
            }),
            (n.getElementId = function (e) {
              return `${n.state.instancePrefix}-${e}`;
            }),
            (n.getComponents = function () {
              return u.defaultComponents(n.props);
            }),
            (n.buildCategorizedOptions = function () {
              return J(n.props, n.state.selectValue);
            }),
            (n.getCategorizedOptions = function () {
              return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
            }),
            (n.buildFocusableOptions = function () {
              return Ce(n.buildCategorizedOptions());
            }),
            (n.getFocusableOptions = function () {
              return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
            }),
            (n.ariaOnChange = function (e, t) {
              n.setState({ ariaSelection: r({ value: e }, t) });
            }),
            (n.onMenuMouseDown = function (e) {
              e.button === 0 &&
                (e.stopPropagation(), e.preventDefault(), n.focusInput());
            }),
            (n.onMenuMouseMove = function (e) {
              n.blockOptionHover = !1;
            }),
            (n.onControlMouseDown = function (e) {
              if (!e.defaultPrevented) {
                var t = n.props.openMenuOnClick;
                n.state.isFocused
                  ? n.props.menuIsOpen
                    ? e.target.tagName !== `INPUT` &&
                      e.target.tagName !== `TEXTAREA` &&
                      n.onMenuClose()
                    : t && n.openMenu(`first`)
                  : (t && (n.openAfterFocus = !0), n.focusInput()),
                  e.target.tagName !== `INPUT` &&
                    e.target.tagName !== `TEXTAREA` &&
                    e.preventDefault();
              }
            }),
            (n.onDropdownIndicatorMouseDown = function (e) {
              if (
                !(e && e.type === `mousedown` && e.button !== 0) &&
                !n.props.isDisabled
              ) {
                var t = n.props,
                  r = t.isMulti,
                  i = t.menuIsOpen;
                n.focusInput(),
                  i
                    ? (n.setState({ inputIsHiddenAfterUpdate: !r }),
                      n.onMenuClose())
                    : n.openMenu(`first`),
                  e.preventDefault();
              }
            }),
            (n.onClearIndicatorMouseDown = function (e) {
              (e && e.type === `mousedown` && e.button !== 0) ||
                (n.clearValue(),
                e.preventDefault(),
                (n.openAfterFocus = !1),
                e.type === `touchend`
                  ? n.focusInput()
                  : setTimeout(function () {
                      return n.focusInput();
                    }));
            }),
            (n.onScroll = function (e) {
              typeof n.props.closeMenuOnScroll == `boolean`
                ? e.target instanceof HTMLElement &&
                  u.isDocumentElement(e.target) &&
                  n.props.onMenuClose()
                : typeof n.props.closeMenuOnScroll == `function` &&
                  n.props.closeMenuOnScroll(e) &&
                  n.props.onMenuClose();
            }),
            (n.onCompositionStart = function () {
              n.isComposing = !0;
            }),
            (n.onCompositionEnd = function () {
              n.isComposing = !1;
            }),
            (n.onTouchStart = function (e) {
              var t = e.touches,
                r = t && t.item(0);
              r &&
                ((n.initialTouchX = r.clientX),
                (n.initialTouchY = r.clientY),
                (n.userIsDragging = !1));
            }),
            (n.onTouchMove = function (e) {
              var t = e.touches,
                r = t && t.item(0);
              if (r) {
                var i = Math.abs(r.clientX - n.initialTouchX),
                  a = Math.abs(r.clientY - n.initialTouchY),
                  o = 5;
                n.userIsDragging = i > o || a > o;
              }
            }),
            (n.onTouchEnd = function (e) {
              n.userIsDragging ||
                (n.controlRef &&
                  !n.controlRef.contains(e.target) &&
                  n.menuListRef &&
                  !n.menuListRef.contains(e.target) &&
                  n.blurInput(),
                (n.initialTouchX = 0),
                (n.initialTouchY = 0));
            }),
            (n.onControlTouchEnd = function (e) {
              n.userIsDragging || n.onControlMouseDown(e);
            }),
            (n.onClearIndicatorTouchEnd = function (e) {
              n.userIsDragging || n.onClearIndicatorMouseDown(e);
            }),
            (n.onDropdownIndicatorTouchEnd = function (e) {
              n.userIsDragging || n.onDropdownIndicatorMouseDown(e);
            }),
            (n.handleInputChange = function (e) {
              var t = n.props.inputValue,
                r = e.currentTarget.value;
              n.setState({ inputIsHiddenAfterUpdate: !1 }),
                n.onInputChange(r, {
                  action: `input-change`,
                  prevInputValue: t,
                }),
                n.props.menuIsOpen || n.onMenuOpen();
            }),
            (n.onInputFocus = function (e) {
              n.props.onFocus && n.props.onFocus(e),
                n.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
                (n.openAfterFocus || n.props.openMenuOnFocus) &&
                  n.openMenu(`first`),
                (n.openAfterFocus = !1);
            }),
            (n.onInputBlur = function (e) {
              var t = n.props.inputValue;
              if (
                n.menuListRef &&
                n.menuListRef.contains(document.activeElement)
              ) {
                n.inputRef.focus();
                return;
              }
              n.props.onBlur && n.props.onBlur(e),
                n.onInputChange(``, {
                  action: `input-blur`,
                  prevInputValue: t,
                }),
                n.onMenuClose(),
                n.setState({ focusedValue: null, isFocused: !1 });
            }),
            (n.onOptionHover = function (e) {
              if (!(n.blockOptionHover || n.state.focusedOption === e)) {
                var t = n.getFocusableOptions().indexOf(e);
                n.setState({
                  focusedOption: e,
                  focusedOptionId: t > -1 ? n.getFocusedOptionId(e) : null,
                });
              }
            }),
            (n.shouldHideSelectedOptions = function () {
              return Pe(n.props);
            }),
            (n.onValueInputFocus = function (e) {
              e.preventDefault(), e.stopPropagation(), n.focus();
            }),
            (n.onKeyDown = function (e) {
              var t = n.props,
                r = t.isMulti,
                i = t.backspaceRemovesValue,
                a = t.escapeClearsValue,
                o = t.inputValue,
                s = t.isClearable,
                c = t.isDisabled,
                l = t.menuIsOpen,
                u = t.onKeyDown,
                d = t.tabSelectsValue,
                f = t.openMenuOnFocus,
                p = n.state,
                m = p.focusedOption,
                h = p.focusedValue,
                g = p.selectValue;
              if (
                !c &&
                !(typeof u == `function` && (u(e), e.defaultPrevented))
              ) {
                switch (((n.blockOptionHover = !0), e.key)) {
                  case `ArrowLeft`:
                    if (!r || o) return;
                    n.focusValue(`previous`);
                    break;
                  case `ArrowRight`:
                    if (!r || o) return;
                    n.focusValue(`next`);
                    break;
                  case `Delete`:
                  case `Backspace`:
                    if (o) return;
                    if (h) n.removeValue(h);
                    else {
                      if (!i) return;
                      r ? n.popValue() : s && n.clearValue();
                    }
                    break;
                  case `Tab`:
                    if (
                      n.isComposing ||
                      e.shiftKey ||
                      !l ||
                      !d ||
                      !m ||
                      (f && n.isOptionSelected(m, g))
                    )
                      return;
                    n.selectOption(m);
                    break;
                  case `Enter`:
                    if (e.keyCode === 229) break;
                    if (l) {
                      if (!m || n.isComposing) return;
                      n.selectOption(m);
                      break;
                    }
                    return;
                  case `Escape`:
                    l
                      ? (n.setState({ inputIsHiddenAfterUpdate: !1 }),
                        n.onInputChange(``, {
                          action: `menu-close`,
                          prevInputValue: o,
                        }),
                        n.onMenuClose())
                      : s && a && n.clearValue();
                    break;
                  case ` `:
                    if (o) return;
                    if (!l) {
                      n.openMenu(`first`);
                      break;
                    }
                    if (!m) return;
                    n.selectOption(m);
                    break;
                  case `ArrowUp`:
                    l ? n.focusOption(`up`) : n.openMenu(`last`);
                    break;
                  case `ArrowDown`:
                    l ? n.focusOption(`down`) : n.openMenu(`first`);
                    break;
                  case `PageUp`:
                    if (!l) return;
                    n.focusOption(`pageup`);
                    break;
                  case `PageDown`:
                    if (!l) return;
                    n.focusOption(`pagedown`);
                    break;
                  case `Home`:
                    if (!l) return;
                    n.focusOption(`first`);
                    break;
                  case `End`:
                    if (!l) return;
                    n.focusOption(`last`);
                    break;
                  default:
                    return;
                }
                e.preventDefault();
              }
            }),
            (n.state.instancePrefix =
              `react-select-` + (n.props.instanceId || ++Fe)),
            (n.state.selectValue = u.cleanValue(e.value)),
            e.menuIsOpen && n.state.selectValue.length)
          ) {
            var a = n.getFocusableOptionsWithIds(),
              o = n.buildFocusableOptions(),
              s = o.indexOf(n.state.selectValue[0]);
            (n.state.focusableOptionsWithIds = a),
              (n.state.focusedOption = o[s]),
              (n.state.focusedOptionId = Oe(a, o[s]));
          }
          return n;
        }
        return (
          a(
            l,
            [
              {
                key: `componentDidMount`,
                value: function () {
                  this.startListeningComposition(),
                    this.startListeningToTouch(),
                    this.props.closeMenuOnScroll &&
                      document &&
                      document.addEventListener &&
                      document.addEventListener(`scroll`, this.onScroll, !0),
                    this.props.autoFocus && this.focusInput(),
                    this.props.menuIsOpen &&
                      this.state.focusedOption &&
                      this.menuListRef &&
                      this.focusedOptionRef &&
                      u.scrollIntoView(this.menuListRef, this.focusedOptionRef);
                },
              },
              {
                key: `componentDidUpdate`,
                value: function (e) {
                  var t = this.props,
                    n = t.isDisabled,
                    r = t.menuIsOpen,
                    i = this.state.isFocused;
                  ((i && !n && e.isDisabled) || (i && r && !e.menuIsOpen)) &&
                    this.focusInput(),
                    i && n && !e.isDisabled
                      ? this.setState({ isFocused: !1 }, this.onMenuClose)
                      : !i &&
                        !n &&
                        e.isDisabled &&
                        this.inputRef === document.activeElement &&
                        this.setState({ isFocused: !0 }),
                    this.menuListRef &&
                      this.focusedOptionRef &&
                      this.scrollToFocusedOptionOnUpdate &&
                      (u.scrollIntoView(
                        this.menuListRef,
                        this.focusedOptionRef,
                      ),
                      (this.scrollToFocusedOptionOnUpdate = !1));
                },
              },
              {
                key: `componentWillUnmount`,
                value: function () {
                  this.stopListeningComposition(),
                    this.stopListeningToTouch(),
                    document.removeEventListener(`scroll`, this.onScroll, !0);
                },
              },
              {
                key: `onMenuOpen`,
                value: function () {
                  this.props.onMenuOpen();
                },
              },
              {
                key: `onMenuClose`,
                value: function () {
                  this.onInputChange(``, {
                    action: `menu-close`,
                    prevInputValue: this.props.inputValue,
                  }),
                    this.props.onMenuClose();
                },
              },
              {
                key: `onInputChange`,
                value: function (e, t) {
                  this.props.onInputChange(e, t);
                },
              },
              {
                key: `focusInput`,
                value: function () {
                  this.inputRef && this.inputRef.focus();
                },
              },
              {
                key: `blurInput`,
                value: function () {
                  this.inputRef && this.inputRef.blur();
                },
              },
              {
                key: `openMenu`,
                value: function (e) {
                  var t = this,
                    n = this.state,
                    r = n.selectValue,
                    i = n.isFocused,
                    a = this.buildFocusableOptions(),
                    o = e === `first` ? 0 : a.length - 1;
                  if (!this.props.isMulti) {
                    var s = a.indexOf(r[0]);
                    s > -1 && (o = s);
                  }
                  (this.scrollToFocusedOptionOnUpdate = !(
                    i && this.menuListRef
                  )),
                    this.setState(
                      {
                        inputIsHiddenAfterUpdate: !1,
                        focusedValue: null,
                        focusedOption: a[o],
                        focusedOptionId: this.getFocusedOptionId(a[o]),
                      },
                      function () {
                        return t.onMenuOpen();
                      },
                    );
                },
              },
              {
                key: `focusValue`,
                value: function (e) {
                  var t = this.state,
                    n = t.selectValue,
                    r = t.focusedValue;
                  if (this.props.isMulti) {
                    this.setState({ focusedOption: null });
                    var i = n.indexOf(r);
                    r || (i = -1);
                    var a = n.length - 1,
                      o = -1;
                    if (n.length) {
                      switch (e) {
                        case `previous`:
                          o = i === 0 ? 0 : i === -1 ? a : i - 1;
                          break;
                        case `next`:
                          i > -1 && i < a && (o = i + 1);
                      }
                      this.setState({
                        inputIsHidden: o !== -1,
                        focusedValue: n[o],
                      });
                    }
                  }
                },
              },
              {
                key: `focusOption`,
                value: function () {
                  var e =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : `first`,
                    t = this.props.pageSize,
                    n = this.state.focusedOption,
                    r = this.getFocusableOptions();
                  if (r.length) {
                    var i = 0,
                      a = r.indexOf(n);
                    n || (a = -1),
                      e === `up`
                        ? (i = a > 0 ? a - 1 : r.length - 1)
                        : e === `down`
                          ? (i = (a + 1) % r.length)
                          : e === `pageup`
                            ? ((i = a - t), i < 0 && (i = 0))
                            : e === `pagedown`
                              ? ((i = a + t),
                                i > r.length - 1 && (i = r.length - 1))
                              : e === `last` && (i = r.length - 1),
                      (this.scrollToFocusedOptionOnUpdate = !0),
                      this.setState({
                        focusedOption: r[i],
                        focusedValue: null,
                        focusedOptionId: this.getFocusedOptionId(r[i]),
                      });
                  }
                },
              },
              {
                key: `getTheme`,
                value: function () {
                  return this.props.theme
                    ? typeof this.props.theme == `function`
                      ? this.props.theme(be)
                      : r(r({}, be), this.props.theme)
                    : be;
                },
              },
              {
                key: `getCommonProps`,
                value: function () {
                  var e = this.clearValue,
                    t = this.cx,
                    n = this.getStyles,
                    r = this.getClassNames,
                    i = this.getValue,
                    a = this.selectOption,
                    o = this.setValue,
                    s = this.props,
                    c = s.isMulti,
                    l = s.isRtl,
                    u = s.options;
                  return {
                    clearValue: e,
                    cx: t,
                    getStyles: n,
                    getClassNames: r,
                    getValue: i,
                    hasValue: this.hasValue(),
                    isMulti: c,
                    isRtl: l,
                    options: u,
                    selectOption: a,
                    selectProps: s,
                    setValue: o,
                    theme: this.getTheme(),
                  };
                },
              },
              {
                key: `hasValue`,
                value: function () {
                  return this.state.selectValue.length > 0;
                },
              },
              {
                key: `hasOptions`,
                value: function () {
                  return !!this.getFocusableOptions().length;
                },
              },
              {
                key: `isClearable`,
                value: function () {
                  var e = this.props,
                    t = e.isClearable,
                    n = e.isMulti;
                  return t === void 0 ? n : t;
                },
              },
              {
                key: `isOptionDisabled`,
                value: function (e, t) {
                  return je(this.props, e, t);
                },
              },
              {
                key: `isOptionSelected`,
                value: function (e, t) {
                  return Me(this.props, e, t);
                },
              },
              {
                key: `filterOption`,
                value: function (e, t) {
                  return Ne(this.props, e, t);
                },
              },
              {
                key: `formatOptionLabel`,
                value: function (e, t) {
                  if (typeof this.props.formatOptionLabel == `function`) {
                    var n = this.props.inputValue,
                      r = this.state.selectValue;
                    return this.props.formatOptionLabel(e, {
                      context: t,
                      inputValue: n,
                      selectValue: r,
                    });
                  }
                  return this.getOptionLabel(e);
                },
              },
              {
                key: `formatGroupLabel`,
                value: function (e) {
                  return this.props.formatGroupLabel(e);
                },
              },
              {
                key: `startListeningComposition`,
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      `compositionstart`,
                      this.onCompositionStart,
                      !1,
                    ),
                    document.addEventListener(
                      `compositionend`,
                      this.onCompositionEnd,
                      !1,
                    ));
                },
              },
              {
                key: `stopListeningComposition`,
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      `compositionstart`,
                      this.onCompositionStart,
                    ),
                    document.removeEventListener(
                      `compositionend`,
                      this.onCompositionEnd,
                    ));
                },
              },
              {
                key: `startListeningToTouch`,
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      `touchstart`,
                      this.onTouchStart,
                      !1,
                    ),
                    document.addEventListener(
                      `touchmove`,
                      this.onTouchMove,
                      !1,
                    ),
                    document.addEventListener(`touchend`, this.onTouchEnd, !1));
                },
              },
              {
                key: `stopListeningToTouch`,
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      `touchstart`,
                      this.onTouchStart,
                    ),
                    document.removeEventListener(`touchmove`, this.onTouchMove),
                    document.removeEventListener(`touchend`, this.onTouchEnd));
                },
              },
              {
                key: `renderInput`,
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    i = e.isSearchable,
                    a = e.inputId,
                    o = e.inputValue,
                    s = e.tabIndex,
                    c = e.form,
                    l = e.menuIsOpen,
                    d = e.required,
                    f = this.getComponents().Input,
                    p = this.state,
                    m = p.inputIsHidden,
                    h = p.ariaSelection,
                    g = this.commonProps,
                    v = a || this.getElementId(`input`),
                    y = r(
                      r(
                        r(
                          {
                            "aria-autocomplete": `list`,
                            "aria-expanded": l,
                            "aria-haspopup": !0,
                            "aria-errormessage":
                              this.props[`aria-errormessage`],
                            "aria-invalid": this.props[`aria-invalid`],
                            "aria-label": this.props[`aria-label`],
                            "aria-labelledby": this.props[`aria-labelledby`],
                            "aria-required": d,
                            role: `combobox`,
                            "aria-activedescendant": this.isAppleDevice
                              ? void 0
                              : this.state.focusedOptionId || ``,
                          },
                          l && {
                            "aria-controls": this.getElementId(`listbox`),
                          },
                        ),
                        !i && { "aria-readonly": !0 },
                      ),
                      this.hasValue()
                        ? h?.action === `initial-input-focus` && {
                            "aria-describedby":
                              this.getElementId(`live-region`),
                          }
                        : {
                            "aria-describedby":
                              this.getElementId(`placeholder`),
                          },
                    );
                  return i
                    ? _.createElement(
                        f,
                        n(
                          {},
                          g,
                          {
                            autoCapitalize: `none`,
                            autoComplete: `off`,
                            autoCorrect: `off`,
                            id: v,
                            innerRef: this.getInputRef,
                            isDisabled: t,
                            isHidden: m,
                            onBlur: this.onInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.onInputFocus,
                            spellCheck: `false`,
                            tabIndex: s,
                            form: c,
                            type: `text`,
                            value: o,
                          },
                          y,
                        ),
                      )
                    : _.createElement(
                        F,
                        n(
                          {
                            id: v,
                            innerRef: this.getInputRef,
                            onBlur: this.onInputBlur,
                            onChange: u.noop,
                            onFocus: this.onInputFocus,
                            disabled: t,
                            tabIndex: s,
                            inputMode: `none`,
                            form: c,
                            value: ``,
                          },
                          y,
                        ),
                      );
                },
              },
              {
                key: `renderPlaceholderOrValue`,
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    r = t.MultiValue,
                    i = t.MultiValueContainer,
                    a = t.MultiValueLabel,
                    o = t.MultiValueRemove,
                    s = t.SingleValue,
                    c = t.Placeholder,
                    l = this.commonProps,
                    u = this.props,
                    d = u.controlShouldRenderValue,
                    f = u.isDisabled,
                    p = u.isMulti,
                    m = u.inputValue,
                    h = u.placeholder,
                    g = this.state,
                    v = g.selectValue,
                    y = g.focusedValue,
                    b = g.isFocused;
                  if (!this.hasValue() || !d)
                    return m
                      ? null
                      : _.createElement(
                          c,
                          n({}, l, {
                            key: `placeholder`,
                            isDisabled: f,
                            isFocused: b,
                            innerProps: {
                              id: this.getElementId(`placeholder`),
                            },
                          }),
                          h,
                        );
                  if (p)
                    return v.map(function (t, s) {
                      var c = t === y,
                        u = `${e.getOptionLabel(t)}-${e.getOptionValue(t)}`;
                      return _.createElement(
                        r,
                        n({}, l, {
                          components: { Container: i, Label: a, Remove: o },
                          isFocused: c,
                          isDisabled: f,
                          key: u,
                          index: s,
                          removeProps: {
                            onClick: function () {
                              return e.removeValue(t);
                            },
                            onTouchEnd: function () {
                              return e.removeValue(t);
                            },
                            onMouseDown: function (e) {
                              e.preventDefault();
                            },
                          },
                          data: t,
                        }),
                        e.formatOptionLabel(t, `value`),
                      );
                    });
                  if (m) return null;
                  var x = v[0];
                  return _.createElement(
                    s,
                    n({}, l, { data: x, isDisabled: f }),
                    this.formatOptionLabel(x, `value`),
                  );
                },
              },
              {
                key: `renderClearIndicator`,
                value: function () {
                  var e = this.getComponents().ClearIndicator,
                    t = this.commonProps,
                    r = this.props,
                    i = r.isDisabled,
                    a = r.isLoading,
                    o = this.state.isFocused;
                  if (!this.isClearable() || !e || i || !this.hasValue() || a)
                    return null;
                  var s = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    "aria-hidden": `true`,
                  };
                  return _.createElement(
                    e,
                    n({}, t, { innerProps: s, isFocused: o }),
                  );
                },
              },
              {
                key: `renderLoadingIndicator`,
                value: function () {
                  var e = this.getComponents().LoadingIndicator,
                    t = this.commonProps,
                    r = this.props,
                    i = r.isDisabled,
                    a = r.isLoading,
                    o = this.state.isFocused;
                  return !e || !a
                    ? null
                    : _.createElement(
                        e,
                        n({}, t, {
                          innerProps: { "aria-hidden": `true` },
                          isDisabled: i,
                          isFocused: o,
                        }),
                      );
                },
              },
              {
                key: `renderIndicatorSeparator`,
                value: function () {
                  var e = this.getComponents(),
                    t = e.DropdownIndicator,
                    r = e.IndicatorSeparator;
                  if (!t || !r) return null;
                  var i = this.commonProps,
                    a = this.props.isDisabled,
                    o = this.state.isFocused;
                  return _.createElement(
                    r,
                    n({}, i, { isDisabled: a, isFocused: o }),
                  );
                },
              },
              {
                key: `renderDropdownIndicator`,
                value: function () {
                  var e = this.getComponents().DropdownIndicator;
                  if (!e) return null;
                  var t = this.commonProps,
                    r = this.props.isDisabled,
                    i = this.state.isFocused,
                    a = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      "aria-hidden": `true`,
                    };
                  return _.createElement(
                    e,
                    n({}, t, { innerProps: a, isDisabled: r, isFocused: i }),
                  );
                },
              },
              {
                key: `renderMenu`,
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    r = t.Group,
                    i = t.GroupHeading,
                    a = t.Menu,
                    o = t.MenuList,
                    s = t.MenuPortal,
                    c = t.LoadingMessage,
                    l = t.NoOptionsMessage,
                    d = t.Option,
                    f = this.commonProps,
                    p = this.state.focusedOption,
                    m = this.props,
                    h = m.captureMenuScroll,
                    g = m.inputValue,
                    v = m.isLoading,
                    y = m.loadingMessage,
                    b = m.minMenuHeight,
                    x = m.maxMenuHeight,
                    S = m.menuIsOpen,
                    C = m.menuPlacement,
                    w = m.menuPosition,
                    T = m.menuPortalTarget,
                    E = m.menuShouldBlockScroll,
                    D = m.menuShouldScrollIntoView,
                    O = m.noOptionsMessage,
                    k = m.onMenuScrollToTop,
                    A = m.onMenuScrollToBottom;
                  if (!S) return null;
                  var j = function (t, r) {
                      var i = t.type,
                        a = t.data,
                        o = t.isDisabled,
                        s = t.isSelected,
                        c = t.label,
                        l = t.value,
                        u = p === a,
                        m = o
                          ? void 0
                          : function () {
                              return e.onOptionHover(a);
                            },
                        h = o
                          ? void 0
                          : function () {
                              return e.selectOption(a);
                            },
                        g = `${e.getElementId(`option`)}-${r}`,
                        v = {
                          id: g,
                          onClick: h,
                          onMouseMove: m,
                          onMouseOver: m,
                          tabIndex: -1,
                          role: `option`,
                          "aria-selected": e.isAppleDevice ? void 0 : s,
                        };
                      return _.createElement(
                        d,
                        n({}, f, {
                          innerProps: v,
                          data: a,
                          isDisabled: o,
                          isSelected: s,
                          key: g,
                          label: c,
                          type: i,
                          value: l,
                          isFocused: u,
                          innerRef: u ? e.getFocusedOptionRef : void 0,
                        }),
                        e.formatOptionLabel(t.data, `menu`),
                      );
                    },
                    M;
                  if (this.hasOptions())
                    M = this.getCategorizedOptions().map(function (t) {
                      if (t.type === `group`) {
                        var a = t.data,
                          o = t.options,
                          s = t.index,
                          c = `${e.getElementId(`group`)}-${s}`,
                          l = `${c}-heading`;
                        return _.createElement(
                          r,
                          n({}, f, {
                            key: c,
                            data: a,
                            options: o,
                            Heading: i,
                            headingProps: { id: l, data: t.data },
                            label: e.formatGroupLabel(t.data),
                          }),
                          t.options.map(function (e) {
                            return j(e, `${s}-${e.index}`);
                          }),
                        );
                      }
                      if (t.type === `option`) return j(t, `${t.index}`);
                    });
                  else if (v) {
                    var N = y({ inputValue: g });
                    if (N === null) return null;
                    M = _.createElement(c, f, N);
                  } else {
                    var P = O({ inputValue: g });
                    if (P === null) return null;
                    M = _.createElement(l, f, P);
                  }
                  var F = {
                      minMenuHeight: b,
                      maxMenuHeight: x,
                      menuPlacement: C,
                      menuPosition: w,
                      menuShouldScrollIntoView: D,
                    },
                    I = _.createElement(
                      u.MenuPlacer,
                      n({}, f, F),
                      function (t) {
                        var r = t.ref,
                          i = t.placerProps,
                          s = i.placement,
                          c = i.maxHeight;
                        return _.createElement(
                          a,
                          n({}, f, F, {
                            innerRef: r,
                            innerProps: {
                              onMouseDown: e.onMenuMouseDown,
                              onMouseMove: e.onMenuMouseMove,
                            },
                            isLoading: v,
                            placement: s,
                          }),
                          _.createElement(
                            ce,
                            {
                              captureEnabled: h,
                              onTopArrive: k,
                              onBottomArrive: A,
                              lockEnabled: E,
                            },
                            function (t) {
                              return _.createElement(
                                o,
                                n({}, f, {
                                  innerRef: function (n) {
                                    e.getMenuListRef(n), t(n);
                                  },
                                  innerProps: {
                                    role: `listbox`,
                                    "aria-multiselectable": f.isMulti,
                                    id: e.getElementId(`listbox`),
                                  },
                                  isLoading: v,
                                  maxHeight: c,
                                  focusedOption: p,
                                }),
                                M,
                              );
                            },
                          ),
                        );
                      },
                    );
                  return T || w === `fixed`
                    ? _.createElement(
                        s,
                        n({}, f, {
                          appendTo: T,
                          controlElement: this.controlRef,
                          menuPlacement: C,
                          menuPosition: w,
                        }),
                        I,
                      )
                    : I;
                },
              },
              {
                key: `renderFormField`,
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.delimiter,
                    r = t.isDisabled,
                    i = t.isMulti,
                    a = t.name,
                    o = t.required,
                    s = this.state.selectValue;
                  if (o && !this.hasValue() && !r)
                    return _.createElement(le, {
                      name: a,
                      onFocus: this.onValueInputFocus,
                    });
                  if (a && !r) {
                    if (i) {
                      if (n) {
                        var c = s
                          .map(function (t) {
                            return e.getOptionValue(t);
                          })
                          .join(n);
                        return _.createElement(`input`, {
                          name: a,
                          type: `hidden`,
                          value: c,
                        });
                      }
                      var l =
                        s.length > 0
                          ? s.map(function (t, n) {
                              return _.createElement(`input`, {
                                key: `i-${n}`,
                                name: a,
                                type: `hidden`,
                                value: e.getOptionValue(t),
                              });
                            })
                          : _.createElement(`input`, {
                              name: a,
                              type: `hidden`,
                              value: ``,
                            });
                      return _.createElement(`div`, null, l);
                    }
                    var u = s[0] ? this.getOptionValue(s[0]) : ``;
                    return _.createElement(`input`, {
                      name: a,
                      type: `hidden`,
                      value: u,
                    });
                  }
                },
              },
              {
                key: `renderLiveRegion`,
                value: function () {
                  var e = this.commonProps,
                    t = this.state,
                    r = t.ariaSelection,
                    i = t.focusedOption,
                    a = t.focusedValue,
                    o = t.isFocused,
                    s = t.selectValue,
                    c = this.getFocusableOptions();
                  return _.createElement(
                    S,
                    n({}, e, {
                      id: this.getElementId(`live-region`),
                      ariaSelection: r,
                      focusedOption: i,
                      focusedValue: a,
                      isFocused: o,
                      selectValue: s,
                      focusableOptions: c,
                      isAppleDevice: this.isAppleDevice,
                    }),
                  );
                },
              },
              {
                key: `render`,
                value: function () {
                  var e = this.getComponents(),
                    t = e.Control,
                    r = e.IndicatorsContainer,
                    i = e.SelectContainer,
                    a = e.ValueContainer,
                    o = this.props,
                    s = o.className,
                    c = o.id,
                    l = o.isDisabled,
                    u = o.menuIsOpen,
                    d = this.state.isFocused,
                    f = (this.commonProps = this.getCommonProps());
                  return _.createElement(
                    i,
                    n({}, f, {
                      className: s,
                      innerProps: { id: c, onKeyDown: this.onKeyDown },
                      isDisabled: l,
                      isFocused: d,
                    }),
                    this.renderLiveRegion(),
                    _.createElement(
                      t,
                      n({}, f, {
                        innerRef: this.getControlRef,
                        innerProps: {
                          onMouseDown: this.onControlMouseDown,
                          onTouchEnd: this.onControlTouchEnd,
                        },
                        isDisabled: l,
                        isFocused: d,
                        menuIsOpen: u,
                      }),
                      _.createElement(
                        a,
                        n({}, f, { isDisabled: l }),
                        this.renderPlaceholderOrValue(),
                        this.renderInput(),
                      ),
                      _.createElement(
                        r,
                        n({}, f, { isDisabled: l }),
                        this.renderClearIndicator(),
                        this.renderLoadingIndicator(),
                        this.renderIndicatorSeparator(),
                        this.renderDropdownIndicator(),
                      ),
                    ),
                    this.renderMenu(),
                    this.renderFormField(),
                  );
                },
              },
            ],
            [
              {
                key: `getDerivedStateFromProps`,
                value: function (e, t) {
                  var n = t.prevProps,
                    i = t.clearFocusValueOnUpdate,
                    a = t.inputIsHiddenAfterUpdate,
                    o = t.ariaSelection,
                    s = t.isFocused,
                    c = t.prevWasFocused,
                    l = t.instancePrefix,
                    d = e.options,
                    f = e.value,
                    p = e.menuIsOpen,
                    m = e.inputValue,
                    h = e.isMulti,
                    g = u.cleanValue(f),
                    _ = {};
                  if (
                    n &&
                    (f !== n.value ||
                      d !== n.options ||
                      p !== n.menuIsOpen ||
                      m !== n.inputValue)
                  ) {
                    var v = p ? Te(e, g) : [],
                      y = p ? we(J(e, g), `${l}-option`) : [],
                      b = i ? Y(t, g) : null,
                      x = De(t, v);
                    _ = {
                      selectValue: g,
                      focusedOption: x,
                      focusedOptionId: Oe(y, x),
                      focusableOptionsWithIds: y,
                      focusedValue: b,
                      clearFocusValueOnUpdate: !1,
                    };
                  }
                  var S =
                      a != null && e !== n
                        ? { inputIsHidden: a, inputIsHiddenAfterUpdate: void 0 }
                        : {},
                    C = o,
                    w = s && c;
                  return (
                    s &&
                      !w &&
                      ((C = {
                        value: u.valueTernary(h, g, g[0] || null),
                        options: g,
                        action: `initial-input-focus`,
                      }),
                      (w = !c)),
                    o?.action === `initial-input-focus` && (C = null),
                    r(
                      r(r({}, _), S),
                      {},
                      { prevProps: e, ariaSelection: C, prevWasFocused: w },
                    )
                  );
                },
              },
            ],
          ),
          l
        );
      })(l.Component);
    (Ie.defaultProps = xe),
      (t.Select = Ie),
      (t.createFilter = N),
      (t.defaultProps = xe),
      (t.defaultTheme = be),
      (t.getOptionLabel = W),
      (t.getOptionValue = G),
      (t.mergeStyles = ve);
  }),
  Sn = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = Tt(),
      n = Et(),
      r = f(),
      i = xn(),
      a = ln(),
      o = Jt(),
      s = mn();
    gt(),
      St(),
      wt(),
      Dt(),
      Ot(),
      At(),
      Ft(),
      zt(),
      bn(),
      ft(),
      un(),
      ht(),
      u(),
      fn(),
      pn();
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      if (e && e.__esModule) return e;
      var t = Object.create(null);
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            if (n !== "default") {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var d = l(r),
      p = c(o),
      m = r.forwardRef(function (e, r) {
        var a = t.useStateManager(e);
        return d.createElement(i.Select, n({ ref: r }, a));
      });
    (e.useStateManager = t.useStateManager),
      (e.createFilter = i.createFilter),
      (e.defaultTheme = i.defaultTheme),
      (e.mergeStyles = i.mergeStyles),
      (e.components = s.components),
      (e.NonceProvider = function (e) {
        var t = e.nonce,
          n = e.children,
          i = e.cacheKey,
          o = r.useMemo(
            function () {
              return p.default({ key: i, nonce: t });
            },
            [i, t],
          );
        return d.createElement(a.CacheProvider, { value: o }, n);
      }),
      (e.default = m);
  }),
  Cn = i((e, t) => {
    t.exports = Sn();
  }),
  wn = i((e) => {
    e._default = Cn().default;
  }),
  Tn = n(Ve()),
  En = wn(),
  Dn = z(),
  On = [`mod_reviewed`, `auto_migrated`],
  kn = 20,
  $ = class e {
    static s_Singleton;
    selectedTags = void 0;
    excludedTags = void 0;
    filterDate = void 0;
    filterDateAsString = void 0;
    eventsToLoadPerPaging = kn;
    filterEventTypes = void 0;
    bOrderByVisibilityStartTime = !1;
    bUseCustomQuery = !1;
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      o(this);
    }
    Init(e) {
      let t = new URLSearchParams(window.location.search),
        n;
      t.has(`selectedTags`) &&
        (n = t
          .getAll(`selectedTags`)
          .filter(Boolean)
          .map((e) => ({ label: e, value: e })));
      let r = !1,
        i = On.map((e) => ({ label: e, value: e }));
      t.has(`excludedTags`) &&
        ((i = t
          .getAll(`excludedTags`)
          .filter(Boolean)
          .map((e) => ({ label: e, value: e }))),
        (r = i?.length > 0));
      let a;
      t.has(`eventtype`) &&
        (a = t
          .getAll(`eventtype`)
          .filter(Boolean)
          .map((e) => {
            let n = Number.parseInt(t.get(`eventtype`));
            return { label: T(n), value: n };
          }));
      let o;
      t.has(`filterDate`) &&
        t.get(`filterDate`)?.length > 0 &&
        (o = Dn.unix(Number(t.get(`filterDate`))));
      let s = !1;
      t.has(`orderByVisibility`) &&
        t.get(`orderByVisibility`)?.length > 0 &&
        (s = !!t.get(`orderByVisibility`)),
        d(() => {
          (this.selectedTags = n),
            (this.excludedTags = i),
            (this.filterEventTypes = a),
            (this.filterDate = o),
            (this.bOrderByVisibilityStartTime = s),
            (this.bUseCustomQuery =
              (n && n.length > 0) || r || (a && a.length > 0));
        });
    }
  };
G([m], $.prototype, `selectedTags`, void 0),
  G([m], $.prototype, `excludedTags`, void 0),
  G([m], $.prototype, `filterDate`, void 0),
  G([m], $.prototype, `filterDateAsString`, void 0),
  G([m], $.prototype, `eventsToLoadPerPaging`, void 0),
  G([m], $.prototype, `filterEventTypes`, void 0),
  G([m], $.prototype, `bOrderByVisibilityStartTime`, void 0),
  G([m], $.prototype, `bUseCustomQuery`, void 0);
var An = (function (e) {
    return (
      (e[(e.k_ModReviewed = 0)] = `k_ModReviewed`),
      (e[(e.k_ModUnreviewed = 1)] = `k_ModUnreviewed`),
      (e[(e.k_ChangeEventType = 2)] = `k_ChangeEventType`),
      (e[(e.k_UpdateSeasonTags = 3)] = `k_UpdateSeasonTags`),
      (e[(e.k_ModReReviewed = 4)] = `k_ModReReviewed`),
      (e[(e.k_ModRemovedFromSteamChina = 5)] = `k_ModRemovedFromSteamChina`),
      (e[(e.k_ModFlagAdultOnlyContent = 6)] = `k_ModFlagAdultOnlyContent`),
      (e[(e.k_ModRemoveAdultOnlyContent = 7)] = `k_ModRemoveAdultOnlyContent`),
      (e[(e.k_ModFlagHalloweenEvent = 8)] = `k_ModFlagHalloweenEvent`),
      (e[(e.k_ModRemoveHalloweenEvent = 9)] = `k_ModRemoveHalloweenEvent`),
      e
    );
  })({}),
  jn = `ModAct`,
  Mn = class {
    m_moderator;
    m_rtWhen;
    m_action;
    m_newEventType;
    m_newTagAdded;
    ToModString() {
      let e =
        `ModAct_` +
        this.m_moderator +
        `_` +
        Math.floor(this.m_rtWhen) +
        `_` +
        this.m_action;
      switch (this.m_action) {
        case 2:
          e += `_` + this.m_newEventType;
          break;
        case 3:
          e += `_` + this.m_newTagAdded;
      }
      return e;
    }
    FromString(e) {
      let t = e.split(`_`);
      if (!t || t[0] !== jn) return !1;
      switch (
        ((this.m_moderator = Number(t[1])),
        (this.m_rtWhen = Number(t[2])),
        (this.m_action = Number(t[3])),
        this.m_action)
      ) {
        case 2:
          this.m_newEventType = Number(t[4]);
          break;
        case 3:
          this.m_newTagAdded = t.slice(4).join(`_`);
      }
      return !0;
    }
    SetActionChangeEvent(e) {
      return (
        (this.m_moderator = Re.accountid),
        (this.m_rtWhen = Date.now() / 1e3),
        (this.m_action = 2),
        (this.m_newEventType = e),
        this
      );
    }
    SetReviewAction(e) {
      return (
        (this.m_moderator = Re.accountid),
        (this.m_rtWhen = Date.now() / 1e3),
        (this.m_action = +!e),
        this
      );
    }
    SetAdultOnlyContentAction(e) {
      return (
        (this.m_moderator = Re.accountid),
        (this.m_rtWhen = Date.now() / 1e3),
        (this.m_action = e ? 6 : 7),
        this
      );
    }
    SetHalloweenEventTypeAction(e) {
      return (
        (this.m_moderator = Re.accountid),
        (this.m_rtWhen = Date.now() / 1e3),
        (this.m_action = e ? 8 : 9),
        this
      );
    }
    SetReReviewAction(e) {
      return (
        (this.m_moderator = Re.accountid),
        (this.m_rtWhen = Date.now() / 1e3),
        (this.m_action = e ? 4 : 1),
        this
      );
    }
    static IsAuditAction(e) {
      return e.startsWith(jn);
    }
    SetUpdateSeasonalTags(e) {
      return (
        (this.m_moderator = Re.accountid),
        (this.m_rtWhen = Date.now() / 1e3),
        (this.m_action = 3),
        (this.m_newTagAdded = e),
        this
      );
    }
  },
  Nn = class e {
    static s_Singleton;
    m_mapEventGIDToSolrData = new Map();
    m_listEvents = [];
    BHasSolrEvent(e) {
      return this.m_mapEventGIDToSolrData.has(e);
    }
    GetAllSolrEvents() {
      return this.m_listEvents;
    }
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      o(this);
    }
    ClearAllSolrEvents() {
      (this.m_mapEventGIDToSolrData = new Map()), (this.m_listEvents = []);
    }
    async LoadPartnerEventForModerationIncremental(e, t = 30) {
      let n =
          Y.STORE_BASE_URL +
          `events_admin/ajaxgetmoderationspecificpartnerevents`,
        r = 0;
      this.m_listEvents?.length &&
        (this.m_listEvents.forEach(
          (e) =>
            (r = Math.max(
              r,
              Math.floor(Date.parse(e.last_modified_date) / 1e3),
            )),
        ),
        this.m_listEvents.filter(
          (e) => Math.floor(Date.parse(e.last_modified_date) / 1e3) == r,
        ).length >= t && r++);
      let i = { start_time: r, count: t };
      try {
        let t = await We.default.get(n, {
          params: i,
          withCredentials: !0,
          cancelToken: e ? e.token : void 0,
        });
        if (e && e.token.reason) return [];
        if (t && t.data) {
          let e = [];
          return (
            d(() => {
              t.data.docs.forEach((t) => {
                this.m_mapEventGIDToSolrData.has(t.unique_id) ||
                  (e.push(t),
                  this.m_mapEventGIDToSolrData.set(t.unique_id, t),
                  this.m_listEvents.push(t));
              });
            }),
            e
          );
        }
      } catch (e) {
        let t = q(e);
        console.error(
          `LoadPartnerEventForModerationIncremental failed:` + t.strErrorMsg,
          t,
        );
      }
      return [];
    }
    async UpdateTagsOnPartnerEvent(e, t, n, r, i, a) {
      let o = Y.STORE_BASE_URL + `events_admin/ajaxupdatetags`,
        s = r.join(`,`);
      a && (r.length > 0 && (s += `,`), (s += a.ToModString()));
      let c = new FormData();
      return (
        c.append(`sessionid`, _e()),
        c.append(`clan_accountid`, `` + t.GetAccountID()),
        c.append(`gid_announcement`, n),
        c.append(`add_tags`, s),
        c.append(`remove_tags`, i.join(`,`)),
        (
          await We.default.post(o, c, {
            withCredentials: !0,
            cancelToken: e.token,
          })
        ).data.tags
      );
    }
    async UpdatePartnerEventType(e, t, n, r) {
      let i = Y.STORE_BASE_URL + `events_admin/ajaxupdateeventtype`,
        a = new FormData();
      a.append(`sessionid`, _e()),
        a.append(`clan_accountid`, `` + t.GetAccountID()),
        a.append(`gid_event`, n),
        a.append(`new_event_type`, `` + r),
        await We.default.post(i, a, {
          withCredentials: !0,
          cancelToken: e.token,
        });
    }
  };
G([m], Nn.prototype, `m_mapEventGIDToSolrData`, void 0),
  G([m], Nn.prototype, `m_listEvents`, void 0),
  G([v], Nn.prototype, `ClearAllSolrEvents`, null);
var Pn = `iQE696qa-gQ-`;
function Fn(e) {
  let { accountID: t, locToken: n } = e,
    r = X.useMemo(() => Te.InitFromAccountID(t), [t]),
    { data: i } = ie(t),
    a =
      `https://steamsupport.valvesoftware.com/account/overview/` +
      r.ConvertTo64BitString();
  return (0, Z.jsx)(`div`, {
    children: H(
      n,
      (0, Z.jsx)(`a`, {
        href: a,
        target: Y.IN_CLIENT ? void 0 : `_blank`,
        children: i
          ? (0, Z.jsx)(X.Fragment, { children: i.m_strPlayerName })
          : (0, Z.jsx)(X.Fragment, {
              children: (0, Z.jsx)(`span`, { children: t }),
            }),
      }),
    ),
  });
}
function In(e) {
  let { modAction: t } = e,
    n = Fe(t.m_rtWhen) + ` @ ` + Le(t.m_rtWhen, { bForce24HourClock: !1 }),
    r = (0, Z.jsx)(Fn, {
      locToken: `#EventModTile_Moderator`,
      accountID: t.m_moderator,
    });
  switch (t.m_action) {
    case An.k_ModReviewed:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_Reviewed`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
        ),
      });
    case An.k_ModUnreviewed:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_UnReviewed`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
        ),
      });
    case An.k_ChangeEventType:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_NewEventType`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
          T(t.m_newEventType),
        ),
      });
    case An.k_UpdateSeasonTags:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_SeasonTagUpdate`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
          t.m_newTagAdded,
        ),
      });
    case An.k_ModReReviewed:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_ReReviewed`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
        ),
      });
    case An.k_ModRemovedFromSteamChina:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_RemoveFromSC`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
        ),
      });
    case An.k_ModFlagAdultOnlyContent:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_FlagAdultContent`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
        ),
      });
    case An.k_ModRemoveAdultOnlyContent:
      return (0, Z.jsx)(`div`, {
        className: Pn,
        children: H(
          `#EventModTile_Action_RemoveAdultContent`,
          (0, Z.jsx)(`span`, { children: n }),
          r,
        ),
      });
    default:
      return (0, Z.jsx)(`div`, { className: Pn, children: t.ToModString() });
  }
}
function Ln(e) {
  let [t, n] = X.useState(!0),
    r = (t) => {
      let { eventModel: n } = e;
      return t.map((e) => {
        let t = new Mn();
        return t.FromString(e), (0, Z.jsx)(In, { modAction: t }, n.GID + e);
      });
    },
    { eventModel: i } = e,
    a = i
      .GetAllTags()
      .filter((e) => Mn.IsAuditAction(e))
      .reverse(),
    o = a.length,
    s = a.length > 3 && t;
  return a.length == 0
    ? null
    : (s && (a = a.splice(0, 3)),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`h4`, { children: W(`#EventModTile_Action_Title`) }),
          r(a),
          s &&
            (0, Z.jsx)(`a`, {
              onClick: () => n(!1),
              className: `_4eiwqlDx34k-`,
              children: W(`#EventModTile_Action_More`, o - 3),
            }),
          !s &&
            o > 3 &&
            (0, Z.jsx)(`a`, {
              onClick: () => n(!0),
              className: `_4eiwqlDx34k-`,
              children: W(`#EventModTile_Action_Hide`),
            }),
        ],
      }));
}
var Rn = r({
    AnalysisCtn: () => zn,
    AnalysisMissing: () => Bn,
    ArtHeader: () => nr,
    ArtSpotlight: () => rr,
    Button: () => pr,
    CategoryChangeDialog: () => fr,
    ChannelInfo: () => br,
    DateAndTime: () => hr,
    DetailsLeft: () => $n,
    DetailsMiddle: () => Wn,
    DetailsRight: () => tr,
    EventModerateMarkReReview: () => Kn,
    EventModerateMarkReview: () => Gn,
    EventTimingBlock: () => vr,
    EventTitle: () => er,
    FilterContainer: () => Hn,
    HalloweenEvent: () => qn,
    HasAdultContent: () => xr,
    LastUpdateTime: () => _r,
    ModeratedFlagCtn: () => ir,
    ModerationContainer: () => Vn,
    NoCapsule: () => Zn,
    NoCapsuleFallback: () => Xn,
    RightSideTitles: () => mr,
    StoreHeaderAdjust: () => gr,
    Tile: () => Un,
    TileAppInfo: () => or,
    TileAppInfoImage: () => cr,
    TileAppInfoTitle: () => sr,
    TileCapsule: () => Yn,
    TileDetails: () => Qn,
    TileEventOtherType: () => Jn,
    TileEventType: () => yr,
    TileSplit: () => lr,
    TileTitle: () => ur,
    TimeWidth: () => dr,
    TitleLink: () => ar,
    default: () => Sr,
  }),
  zn = `_2gW897binC0-`,
  Bn = `Ie8IvU00EW0-`,
  Vn = `_2nOLYxq9Xfo-`,
  Hn = `SkvSNNeyxNA-`,
  Un = `a--2nmWAb98-`,
  Wn = `BgiARhgnEQQ-`,
  Gn = `UtSnAOiNQgg-`,
  Kn = `ivnmmnOMNKY-`,
  qn = `juzegLM8FdY-`,
  Jn = `d-WIS6clcx0-`,
  Yn = `MHzLLT83hBQ-`,
  Xn = `koqw6dEwI70-`,
  Zn = `bGP7sBTGMBw-`,
  Qn = `BATIZEVfyQ8-`,
  $n = `mNo6qb7U1r0-`,
  er = `qTIKXbfFl6w-`,
  tr = `etaphwkc6ew-`,
  nr = `t8meJ736O4c-`,
  rr = `XsGAPUbg-OU-`,
  ir = `P0-RoQFlS8A-`,
  ar = `ceOIVsDMJJ8-`,
  or = `tEQODaVCZIc-`,
  sr = `SrxcB-LYZ5o-`,
  cr = `Xh8Td5q09Oo-`,
  lr = `AteZziS9-sc-`,
  ur = `IlsBvfAw-ew-`,
  dr = `TPpJuMzIow4-`,
  fr = `wXCk09i0vE8-`,
  pr = `G32Rr4n6TnQ-`,
  mr = `RFxGqivd9lg-`,
  hr = `toYmQsxNsDc-`,
  gr = `_-8Nz3nUpNos-`,
  _r = `c3fKyIzvAtA-`,
  vr = `IACF40Lzryc-`,
  yr = `dMJd8v0GV1I-`,
  br = `dWRkuOPQklk-`,
  xr = `rVy1TypxTf8-`,
  Sr = {
    AnalysisCtn: zn,
    AnalysisMissing: Bn,
    ModerationContainer: Vn,
    FilterContainer: Hn,
    Tile: Un,
    DetailsMiddle: Wn,
    EventModerateMarkReview: Gn,
    EventModerateMarkReReview: Kn,
    HalloweenEvent: qn,
    TileEventOtherType: Jn,
    TileCapsule: Yn,
    NoCapsuleFallback: Xn,
    NoCapsule: Zn,
    TileDetails: Qn,
    DetailsLeft: $n,
    EventTitle: er,
    DetailsRight: tr,
    ArtHeader: nr,
    ArtSpotlight: rr,
    ModeratedFlagCtn: ir,
    TitleLink: ar,
    TileAppInfo: or,
    TileAppInfoTitle: sr,
    TileAppInfoImage: cr,
    TileSplit: lr,
    TileTitle: ur,
    TimeWidth: dr,
    CategoryChangeDialog: fr,
    Button: pr,
    RightSideTitles: mr,
    DateAndTime: hr,
    StoreHeaderAdjust: gr,
    LastUpdateTime: _r,
    EventTimingBlock: vr,
    TileEventType: yr,
    ChannelInfo: br,
    HasAdultContent: xr,
  },
  Cr = z(),
  wr = 500,
  Tr = 50,
  Er = {
    bExhaustedEventList: !1,
    bInfiniteScrollLoading: !0,
    nLastFetchCompletedMS: 0,
  },
  Dr = class extends X.Component {
    m_cancelSignal = We.default.CancelToken.source();
    m_refScroll = X.createRef();
    m_IntervalTimer = void 0;
    state = {
      bInfiniteScrollLoading: !1,
      bExhaustedEventList: !1,
      nLastFetchCompletedMS: 0,
    };
    m_nPage = 0;
    componentDidMount() {
      this.setState(
        { bInfiniteScrollLoading: !0 },
        this.LoadMoreModerationEvents,
      ),
        window.addEventListener(`scroll`, this.OnScroll, !0),
        $.Get().Init(this.props.history.location.search);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventModerationLanding component unmounted`),
        window.removeEventListener(`scroll`, this.OnScroll),
        this.ClearTimer();
    }
    HandleUpdateQueryParameter() {
      let e = $.Get();
      if (e.bUseCustomQuery) {
        let {
          selectedTags: t,
          excludedTags: n,
          filterEventTypes: r,
          filterDate: i,
          bOrderByVisibilityStartTime: a,
        } = e;
        if (t || n || r || i || a) {
          let e = new URLSearchParams();
          t?.forEach((t) => e.append(`selectedTags`, t.value)),
            n?.forEach((t) => e.append(`excludedTags`, t.value)),
            r?.forEach((t) => e.append(`eventtype`, `` + t.value)),
            i?.unix() > 0 && e.append(`filterDate`, `` + i.unix()),
            a && e.append(`orderByVisibility`, `1`),
            this.props.history.push(`?${e.toString()}`);
        } else this.props.history.push(`?`);
      }
    }
    ClearTimer() {
      this.m_IntervalTimer &&=
        (window.clearInterval(this.m_IntervalTimer), void 0);
    }
    HandleError(e) {
      let t = q(e);
      console.error(`EventModerationLanding error: ` + t.strErrorMsg, t),
        this.setState({
          bInfiniteScrollLoading: !1,
          bExhaustedEventList: !0,
          nLastFetchCompletedMS: Date.now(),
        });
    }
    async LoadMorePublicEventWithDelay() {
      this.m_IntervalTimer = window.setInterval(
        this.LoadMoreModerationEvents,
        wr,
      );
    }
    LoadMoreModerationEvents() {
      if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
        let e,
          t = $.Get();
        if (t.bUseCustomQuery) {
          let n = t.filterEventTypes
              ? t.filterEventTypes.map((e) => e.value)
              : void 0,
            r = t.selectedTags ? t.selectedTags.map((e) => e.value) : void 0,
            i = t.excludedTags ? t.excludedTags.map((e) => e.value) : void 0;
          e = ot
            .Get()
            .LoadPartnerEventForQueryIncremental(
              this.m_cancelSignal,
              this.m_nPage,
              t.eventsToLoadPerPaging,
              [this.props.appid],
              r,
              i,
              t.filterDate,
              n,
              t.bOrderByVisibilityStartTime,
            );
        } else
          e = Nn.Get().LoadPartnerEventForModerationIncremental(
            this.m_cancelSignal,
            t.eventsToLoadPerPaging,
          );
        e.then((e) => {
          (this.m_nPage += t.eventsToLoadPerPaging),
            this.setState({
              bInfiniteScrollLoading: !1,
              bExhaustedEventList: e.length == 0,
              nLastFetchCompletedMS: Date.now(),
            });
        }).catch((e) => this.HandleError(e));
      }
    }
    UpdateQueryParametersAndLoadMoreEvents() {
      this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
    }
    RenderTiles() {
      let e = [];
      return (
        ($.Get().bUseCustomQuery
          ? ot.Get().GetAllSolrEvents()
          : Nn.Get().GetAllSolrEvents()
        ).forEach((t) => {
          e.push((0, Z.jsx)(Pr, { solrData: t }, t.unique_id));
        }),
        e
      );
    }
    OnScroll() {
      if (!this.m_refScroll || !this.m_refScroll.current) return;
      let e = this.m_refScroll.current;
      e &&
        (this.state.bExhaustedEventList ||
          this.state.bInfiniteScrollLoading ||
          (e.getBoundingClientRect().bottom <= window.innerHeight + Tr &&
            (this.state.nLastFetchCompletedMS + wr < Date.now()
              ? this.setState(
                  { bInfiniteScrollLoading: !0 },
                  this.LoadMorePublicEventWithDelay,
                )
              : this.setState(
                  { bInfiniteScrollLoading: !0 },
                  this.LoadMoreModerationEvents,
                ))));
    }
    RefetchAllEventTiles() {
      (this.m_nPage = 0),
        Nn.Get().ClearAllSolrEvents(),
        ot.Get().ClearAllSolrEvents(),
        this.setState({ ...Er }, this.UpdateQueryParametersAndLoadMoreEvents);
    }
    render() {
      let e = this.RenderTiles(),
        t = $.Get();
      return (0, Z.jsxs)(`div`, {
        className: Vn,
        ref: this.m_refScroll,
        children: [
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`h2`, { children: W(`#EventModeration_Title`) }),
              (0, Z.jsx)(De, {
                children: (0, Z.jsxs)(`div`, {
                  className: U(te),
                  children: [
                    (0, Z.jsx)(kr, {
                      fnRequireRefetchEvents: this.RefetchAllEventTiles,
                    }),
                    !!t.bUseCustomQuery &&
                      (0, Z.jsx)(Ar, {
                        fnRequireRefetchEvents: this.RefetchAllEventTiles,
                      }),
                  ],
                }),
              }),
            ],
          }),
          (0, Z.jsx)(De, { children: e }),
          this.state.bInfiniteScrollLoading &&
            (0, Z.jsx)(L, {
              position: `center`,
              size: `medium`,
              string: W(`#Loading`),
            }),
        ],
      });
    }
  };
G([J], Dr.prototype, `HandleError`, null),
  G([J], Dr.prototype, `LoadMorePublicEventWithDelay`, null),
  G([J], Dr.prototype, `LoadMoreModerationEvents`, null),
  G([J], Dr.prototype, `UpdateQueryParametersAndLoadMoreEvents`, null),
  G([J], Dr.prototype, `OnScroll`, null),
  G([J], Dr.prototype, `RefetchAllEventTiles`, null),
  (Dr = G([h], Dr));
var Or = p(Dr),
  kr = h((e) => {
    let t = $.Get(),
      { fnRequireRefetchEvents: n } = e;
    return (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(`div`, {
          className: Hn,
          children: (0, Z.jsx)(Ee, {
            toolTipContent: W(`#EventModeration_ShowCustomFilter_ttip`),
            children: (0, Z.jsx)(xe, {
              label: W(`#EventModeration_ShowCustomFilter`),
              checked: t.bUseCustomQuery,
              onChange: (e) => {
                (t.bUseCustomQuery = e), n();
              },
            }),
          }),
        }),
        (0, Z.jsxs)(`div`, {
          className: Hn,
          children: [
            (0, Z.jsx)(`label`, {
              htmlFor: `EventPerLoad`,
              children: W(`#EventModeration_PerPageLoad`),
            }),
            (0, Z.jsx)(`div`, {
              children: (0, Z.jsx)(`input`, {
                type: `number`,
                id: `EventPerLoad`,
                min: `10`,
                max: `200`,
                value: t.eventsToLoadPerPaging,
                onChange: (e) => {
                  let n = Number.parseInt(e.currentTarget.value);
                  n &&
                    n > 0 &&
                    n != t.eventsToLoadPerPaging &&
                    (t.eventsToLoadPerPaging = n);
                },
              }),
            }),
          ],
        }),
      ],
    });
  }),
  Ar = h((e) => {
    let t = $.Get(),
      { fnRequireRefetchEvents: n } = e,
      r = Ae.map((e) => ({ value: e, label: T(e) })).sort((e, t) =>
        e.label.localeCompare(t.label),
      ),
      i = A.map((e) => ({ value: e, label: e })).sort((e, t) =>
        e.label.localeCompare(t.label),
      ),
      a = { option: (e) => ({ ...e, color: `#444444` }) };
    return (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsxs)(`div`, {
          className: Hn,
          children: [
            (0, Z.jsx)(`span`, { children: W(`#EventModeration_FilterByTag`) }),
            (0, Z.jsx)(En._default, {
              isSearchable: !0,
              isMulti: !0,
              onChange: (e) => {
                (t.selectedTags = e), n();
              },
              value: t.selectedTags,
              options: i,
              styles: a,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Hn,
          children: [
            (0, Z.jsx)(`span`, {
              children: W(`#EventModeration_FilterExcludeByTag`),
            }),
            (0, Z.jsx)(En._default, {
              isSearchable: !0,
              isMulti: !0,
              onChange: (e) => {
                (t.excludedTags = e), n();
              },
              value: t.excludedTags,
              options: i,
              styles: a,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Hn,
          children: [
            (0, Z.jsx)(`span`, {
              children: W(`#EventModeration_FilterToType`),
            }),
            (0, Z.jsx)(En._default, {
              isSearchable: !0,
              isMulti: !0,
              onChange: (e) => {
                (t.filterEventTypes = e), n();
              },
              value: t.filterEventTypes,
              options: r,
              styles: a,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Hn,
          children: [
            (0, Z.jsx)(`span`, {
              children: W(`#EventModeration_FilterToDate`),
            }),
            (0, Z.jsx)(Tn.default, {
              timeFormat: !1,
              onChange: (e) => {
                if (typeof e == `string`) {
                  let n = Cr(e, `M/D/YYYY`, !0);
                  if (!n.isValid()) {
                    t.filterDateAsString = e;
                    return;
                  }
                  e = n;
                }
                t.filterDate != e &&
                  ((t.filterDateAsString = void 0), (t.filterDate = e), n());
              },
              value: t.filterDate,
              isValidDate: (e) => {
                let t = new Date();
                return (
                  e.unix() <
                  Cr.unix(t.getTime() / 1e3 + 86400)
                    .hour(0)
                    .seconds(0)
                    .minute(0)
                    .unix()
                );
              },
              inputProps: {
                placeholder: W(`#EventModeration_PickDatee`),
                className: dr,
              },
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Hn,
          children: [
            (0, Z.jsx)(`input`, {
              type: `checkbox`,
              id: `VisibilityStart`,
              checked: t.bOrderByVisibilityStartTime,
              onChange: (e) => {
                (t.bOrderByVisibilityStartTime = e.currentTarget.checked), n();
              },
            }),
            (0, Z.jsx)(`label`, {
              htmlFor: `VisibilityStart`,
              children: W(`#EventModeration_OrderByFirstVisible`),
            }),
          ],
        }),
      ],
    });
  }),
  jr = h((e) => {
    let { onClick: t, event: n, bSaving: r } = e,
      i = W(`#EventModTile_Moderate_ClearReviewed`),
      a,
      o = !1;
    return (
      D(n) ||
        ((i = W(`#EventModTile_Moderate_MarkReviewed`)), (a = Gn), (o = !0)),
      r && ((i = W(`#EventModTile_Moderate_Saving`)), (a = void 0)),
      (0, Z.jsxs)(`button`, {
        className: U(ee, pr, a),
        onClick: () => t(o),
        disabled: r,
        children: [r && (0, Z.jsx)(L, { size: `small` }), i],
      })
    );
  }),
  Mr = h((e) => {
    let { onClick: t, event: n, bSaving: r } = e,
      i = n.BHasTag(`adult_only_content`),
      a = W(
        i
          ? `#EventModTile_Moderate_RemoveAdultContent`
          : `#EventModTile_Moderate_FlagAdultContent`,
      );
    return (
      r && (a = W(`#EventModTile_Moderate_Saving`)),
      (0, Z.jsxs)(`button`, {
        className: U(ee, pr),
        onClick: () => t(!i),
        disabled: r,
        children: [r && (0, Z.jsx)(L, { size: `small` }), a],
      })
    );
  });
function Nr(e) {
  let { onClick: t, event: n, bSaving: r } = e,
    i = a(() => n.BHasTag(`halloween`)),
    o = W(
      i
        ? `#EventModTile_Moderate_RemoveHalloweenFlag`
        : `#EventModTile_Moderate_FlagHalloween`,
    );
  r && (o = W(`#EventModTile_Moderate_Saving`));
  let s = R.GetTimeNowWithOverrideAsDate();
  return s.getMonth() >= 8 && s.getMonth() <= 10
    ? (0, Z.jsxs)(`button`, {
        className: U(ee, pr),
        onClick: () => t(!i),
        disabled: r,
        children: [r && (0, Z.jsx)(L, { size: `small` }), o],
      })
    : null;
}
var Pr = class extends X.Component {
  state = {
    bLoadingEvent: !V.BHasClanEventModel(this.props.solrData.unique_id),
    bShowAsModal: !1,
    bSavingModeration: !1,
  };
  m_cancelSignal = We.default.CancelToken.source();
  componentDidMount() {
    let { solrData: e } = this.props,
      t = e.unique_id;
    V.BHasClanEventModel(t) ||
      V.LoadHiddenPartnerEvent(new Te(e.clan_steamid), t)
        .then(() => this.setState({ bLoadingEvent: !1 }))
        .catch((e) => {
          let t = q(e);
          console.error(`EventModerationTile: Event Load: ` + t.strErrorMsg, t),
            this.setState({ bLoadingEvent: !1 });
        });
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`EventModerationTile component unmounted`);
  }
  ShowModalEvent(e) {
    let { solrData: t } = this.props,
      n = t.unique_id;
    !this.state.bLoadingEvent &&
      V.BHasClanEventModel(n) &&
      this.setState({ bShowAsModal: !0 }),
      e.preventDefault(),
      e.stopPropagation();
  }
  HideModalEvent() {
    this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
  }
  SetAdultContentState(e) {
    if (this.state.bSavingModeration) return;
    let { solrData: t } = this.props,
      n = t.unique_id,
      r = V.GetClanEventModel(n);
    if (!r || e === r.BHasTag(`adult_only_content`)) return;
    let i = [],
      a = [],
      o = new Mn().SetAdultOnlyContentAction(e);
    e ? i.push(`adult_only_content`) : a.push(`adult_only_content`),
      this.UpdateTagsOnEvent(n, i, a, o);
  }
  SetHalloweenEventState(e) {
    if (this.state.bSavingModeration) return;
    let { solrData: t } = this.props,
      n = t.unique_id,
      r = V.GetClanEventModel(n);
    if (!r || e === r.BHasTag(`halloween`)) return;
    let i = [],
      a = [],
      o = new Mn().SetHalloweenEventTypeAction(e);
    e ? i.push(`halloween`) : a.push(`halloween`),
      this.UpdateTagsOnEvent(n, i, a, o);
  }
  SetModeratedState(e) {
    if (this.state.bSavingModeration) return;
    let { solrData: t } = this.props,
      n = t.unique_id,
      r = V.GetClanEventModel(n);
    if (!r || e === D(r)) return;
    let i = [],
      a = [],
      o = new Mn().SetReviewAction(e);
    e
      ? (i.push(`mod_reviewed`),
        a.push(`mod_require_rereview`),
        r.BHasTag(`mod_require_rereview`) && o.SetReReviewAction(e))
      : i.push(`mod_require_rereview`),
      this.UpdateTagsOnEvent(n, i, a, o);
  }
  UpdateTagsOnEvent(e, t, n, r) {
    this.state.bSavingModeration ||
      this.setState({ bSavingModeration: !0 }, async () => {
        let i = V.GetClanEventModel(e);
        try {
          i.vecTags = await Nn.Get().UpdateTagsOnPartnerEvent(
            this.m_cancelSignal,
            i.clanSteamID,
            i.AnnouncementGID,
            t,
            n,
            r,
          );
        } catch (e) {
          let t = q(e);
          console.error(`UpdateTagsOnPartnerEvent ` + t.strErrorMsg, t);
        }
        this.setState({ bSavingModeration: !1 });
      });
  }
  OnChangeCategory(e) {
    let { solrData: t } = this.props,
      n = V.GetClanEventModel(t.unique_id);
    ke((0, Z.jsx)(zr, { eventModel: n }), me(e));
  }
  OnUpdateSeasonalTag(e) {
    let { solrData: t } = this.props,
      n = V.GetClanEventModel(t.unique_id);
    ke((0, Z.jsx)(Br, { eventModel: n }), me(e));
  }
  render() {
    let { solrData: e } = this.props,
      t = e.unique_id,
      n = Number(e.appid),
      r,
      i = we(Y.LANGUAGE),
      a = V.GetClanEventModel(t),
      o = null;
    a
      ? (this.state.bShowAsModal &&
          (o = (0, Z.jsx)(F, {
            className: gr,
            children: (0, Z.jsx)(`div`, {
              children: (0, Z.jsx)(M, {
                event: a,
                fnClose: this.HideModalEvent,
              }),
            }),
          })),
        (r = (0, Z.jsx)(Fr, { eventModel: a, lang: i })))
      : (r = W(`#Loading`));
    let s = e.last_modified_date ? Date.parse(e.last_modified_date) / 1e3 : 0,
      c = a ? a.type : Number(e.event_type),
      l = new Te(e.clan_steamid),
      u = n ? `app/${n}` : `group/${l.GetAccountID()}`,
      d = `${Y.STORE_BASE_URL}news/${u}/view/${e.announcement_gid}`,
      f = !!(a && a.BHasTag(`adult_only_content`)),
      p = !!(a && a.BHasTag(`halloween`));
    return (0, Z.jsxs)(De, {
      children: [
        o,
        (0, Z.jsxs)(`div`, {
          className: U({ [Un]: !0, [qn]: p }),
          children: [
            (0, Z.jsx)(`a`, {
              href: d,
              className: Yn,
              onClick: this.ShowModalEvent,
              children: r,
            }),
            (0, Z.jsxs)(`div`, {
              className: Qn,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: $n,
                  children: [
                    (0, Z.jsx)(`a`, {
                      className: er,
                      href: d,
                      onClick: this.ShowModalEvent,
                      children: e.event_name,
                    }),
                    (0, Z.jsx)(`div`, {
                      className: U(yr, c == 1 ? Jn : ``),
                      children: a ? a.GetCategoryAsString() : e.event_type,
                    }),
                    f &&
                      (0, Z.jsx)(`div`, {
                        className: `rVy1TypxTf8-`,
                        children: W(`#EventModTile_HasAdultContent`),
                      }),
                    this.state.bLoadingEvent &&
                      (0, Z.jsx)(L, { size: `small`, string: W(`#Loading`) }),
                    (0, Z.jsx)(`div`, {
                      className: br,
                      children: (0, Z.jsx)(Lr, {
                        appid: n,
                        clanSteamID: new Te(e.clan_steamid),
                      }),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: Wn,
                  children:
                    a &&
                    (0, Z.jsxs)(X.Fragment, {
                      children: [
                        (0, Z.jsx)(jr, {
                          onClick: this.SetModeratedState,
                          bSaving: this.state.bSavingModeration,
                          event: a,
                        }),
                        (0, Z.jsx)(`button`, {
                          className: U(`yYL-OrX9PtQ-`, `G32Rr4n6TnQ-`),
                          onClick: this.OnChangeCategory,
                          children: W(`#EventModTile_ChangeEventType`),
                        }),
                        (0, Z.jsx)(Mr, {
                          onClick: this.SetAdultContentState,
                          bSaving: this.state.bSavingModeration,
                          event: a,
                        }),
                        (0, Z.jsx)(Nr, {
                          onClick: this.SetHalloweenEventState,
                          bSaving: this.state.bSavingModeration,
                          event: a,
                        }),
                        !!a.BHasTag(`halloween2019candidate`) &&
                          (0, Z.jsx)(`button`, {
                            className: U(`yYL-OrX9PtQ-`),
                            onClick: this.OnUpdateSeasonalTag,
                            children: W(`#EventModTile_SeasonalTag`),
                          }),
                        (0, Z.jsx)(Ln, { eventModel: a }),
                      ],
                    }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: tr,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: vr,
                      children: [
                        !!s &&
                          (0, Z.jsx)(`div`, {
                            className: `c3fKyIzvAtA-`,
                            children: W(
                              `#EventModTile_LastModified`,
                              Fe(s) + `@` + Le(s, { bForce24HourClock: !1 }),
                            ),
                          }),
                        a &&
                          (0, Z.jsx)(j, {
                            event: a,
                            stylesmodule: Rn,
                            nOverrideEndTime: a.GetEndTimeAndDateUnixSeconds(),
                            nOverrideStartTime:
                              a.GetStartTimeAndDateUnixSeconds(),
                          }),
                      ],
                    }),
                    a &&
                      (0, Z.jsx)(Rr, {
                        event: a,
                        hidden: e.hidden,
                        published: e.published,
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
};
G([J], Pr.prototype, `ShowModalEvent`, null),
  G([J], Pr.prototype, `HideModalEvent`, null),
  G([J], Pr.prototype, `SetAdultContentState`, null),
  G([J], Pr.prototype, `SetHalloweenEventState`, null),
  G([J], Pr.prototype, `SetModeratedState`, null),
  G([J], Pr.prototype, `OnChangeCategory`, null),
  G([J], Pr.prototype, `OnUpdateSeasonalTag`, null),
  (Pr = G([h], Pr));
function Fr(e) {
  let { eventModel: t, lang: n } = e,
    r = ne(t, `capsule`, n, b.capsule_main),
    i = t.BImageNeedScreenshotFallback(`capsule`, n);
  return r && r.length > 0
    ? (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(C, { rgSources: r }),
          i &&
            (0, Z.jsx)(`div`, {
              className: `koqw6dEwI70-`,
              children: W(`#EventModTile_FallbackImageText`),
            }),
        ],
      })
    : (0, Z.jsx)(`div`, {
        className: Zn,
        children: W(`#EventModTile_NoCapsule`),
      });
}
var Ir = class extends X.Component {
  state = { bDownloadingImages: !1, nLocLanguages: 0 };
  m_cancelSignal = We.default.CancelToken.source();
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`ChangeEventTypeDialog component unmounted`);
  }
  CountLanguages(e) {
    let t = 0;
    if (e && e.length > 0)
      for (let n = 0; n < e.length && n < 32; ++n)
        e[n] && e[n].length > 0 && (t += 1);
    return t;
  }
  componentDidMount() {
    let { event: e } = this.props;
    V.LoadClanEventLocalizationFromAnnouncementGID(
      e.clanSteamID,
      e.AnnouncementGID,
    )
      .then((e) => {
        this.m_cancelSignal.token.reason ||
          this.setState({ nLocLanguages: e.length });
      })
      .catch((e) => {
        let t = q(e);
        console.error(`EventInspection.LoadLoc : error ` + t.strErrorMsg, t),
          this.m_cancelSignal.token.reason ||
            this.setState({ nLocLanguages: -1 });
      });
  }
  render() {
    let { event: e } = this.props,
      t = this.CountLanguages(e.jsondata.localized_title_image),
      n = this.CountLanguages(e.jsondata.localized_capsule_image),
      r = this.CountLanguages(e.jsondata.localized_spotlight_image),
      i = Math.max(
        this.CountLanguages(e.jsondata.localized_broadcast_left_image),
        this.CountLanguages(e.jsondata.localized_broadcast_right_image),
      ),
      a = t + n + r + i,
      o = this.CountLanguages(e.jsondata.localized_summary),
      s = this.CountLanguages(e.jsondata.localized_subtitle);
    return (0, Z.jsxs)(`div`, {
      className: zn,
      children: [
        (0, Z.jsx)(`div`, {
          className: ur,
          children: W(`#EventModTile_Analysis`),
        }),
        (0, Z.jsx)(`div`, {
          children: W(`#EventModTile_Stats_Comments`, e.nCommentCount),
        }),
        (0, Z.jsx)(`div`, {
          children: W(`#EventModTile_Stats_VoteUp`, e.nVotesUp),
        }),
        (0, Z.jsx)(`div`, {
          children: W(`#EventModTile_Stats_VoteDown`, e.nVotesDown),
        }),
        !!t &&
          (0, Z.jsxs)(`div`, {
            className: `t8meJ736O4c-`,
            children: [W(`#EventModTile_ImageAnalysis_Header`, t), ` `],
          }),
        !!n &&
          (0, Z.jsxs)(`div`, {
            children: [W(`#EventModTile_ImageAnalysis_Capsule`, n), ` `],
          }),
        !!r &&
          (0, Z.jsxs)(`div`, {
            className: `XsGAPUbg-OU-`,
            children: [W(`#EventModTile_ImageAnalysis_Spotlight`, r), ` `],
          }),
        !!i &&
          (0, Z.jsxs)(`div`, {
            children: [W(`#EventModTile_ImageAnalysis_Broadcast`, i), ` `],
          }),
        a == 0 &&
          (0, Z.jsxs)(`div`, {
            className: `Ie8IvU00EW0-`,
            children: [W(`#EventModTile_ImageAnalysis_None`), ` `],
          }),
        this.state.nLocLanguages == 0 &&
          (0, Z.jsx)(L, {
            size: `small`,
            string: W(`#EventModTile_LoadingLocs`),
          }),
        this.state.nLocLanguages > 0 &&
          (0, Z.jsx)(`div`, {
            children: W(`#EventModTile_Languages`, this.state.nLocLanguages),
          }),
        !!o &&
          (0, Z.jsxs)(`div`, {
            children: [W(`#EventModTile_Languages_Summary`, o), ` `],
          }),
        !!s &&
          (0, Z.jsxs)(`div`, {
            children: [W(`#EventModTile_Languages_Subtitle`, s), ` `],
          }),
      ],
    });
  }
};
Ir = G([h], Ir);
var Lr = h((e) => {
    let { appid: t, clanSteamID: n } = e,
      r = S(t),
      [i, a] = (0, X.useState)(!K.Get().BHasApp(e.appid)),
      o = X.useRef(We.default.CancelToken.source());
    if (
      ((0, X.useEffect)(
        () => () =>
          o.current.cancel(`EventModerationChannelInfo component unmounted`),
        [],
      ),
      (0, X.useEffect)(() => {
        let { appid: t, clanSteamID: n } = e;
        ((t && !K.Get().BHasApp(t)) || (n && !Be.BHasClanInfoLoaded(n))) &&
          (async () => {
            try {
              await Promise.all([
                K.Get().QueueAppRequest(t, {
                  include_assets: !0,
                  include_release: !0,
                  include_screenshots: !0,
                }),
                n ? Be.LoadClanInfoForClanSteamID(n) : void 0,
              ]);
            } catch (e) {
              let t = q(e);
              console.error(
                `EventModerationChannelInfo: App Load: ` + t.strErrorMsg,
                t,
              );
            } finally {
              o.current.token.reason || a(!1);
            }
          })();
      }, [e]),
      i)
    )
      return (0, Z.jsx)(L, {
        size: `small`,
        string: W(`#EventModTile_AppInfoLoading`),
      });
    if (t) {
      let e = K.Get().GetApp(t);
      return e
        ? (0, Z.jsx)(`div`, {
            className: or,
            children: (0, Z.jsxs)(`div`, {
              className: sr,
              children: [
                (0, Z.jsx)(re, {
                  id: r,
                  children: (0, Z.jsx)(je, {
                    href: be(e.GetStorePageURL()),
                    children: (0, Z.jsx)(`img`, {
                      className: cr,
                      src: e.GetAssets().GetMainCapsuleURL(),
                    }),
                  }),
                }),
                (0, Z.jsx)(re, {
                  id: r,
                  children: (0, Z.jsx)(je, {
                    href: be(e.GetStorePageURL()),
                    children: (0, Z.jsx)(`div`, { children: e.GetName() }),
                  }),
                }),
              ],
            }),
          })
        : null;
    }
    if (n) {
      let e = n.GetAccountID(),
        t = Be.GetClanInfoByClanAccountID(e);
      if (t && t.is_curator)
        return (0, Z.jsx)(`div`, {
          className: or,
          children: (0, Z.jsx)(`div`, {
            className: sr,
            children: (0, Z.jsxs)(je, {
              href: be(Y.STORE_BASE_URL + `/curator/` + e + `/`),
              children: [
                (0, Z.jsx)(`img`, { className: cr, src: t.avatar_full_url }),
                (0, Z.jsx)(`div`, {
                  children: W(`#EventModTile_CuratorName`, t.group_name),
                }),
              ],
            }),
          }),
        });
    }
    return null;
  }),
  Rr = class extends X.Component {
    render() {
      let { event: e, hidden: t, published: n } = this.props,
        r = W(
          t
            ? n
              ? `#EVentModTile_State_Staged`
              : `#EVentModTile_State_Draft`
            : `#EVentModTile_State_Published`,
        ),
        i = O(e),
        a = k(e),
        o = E(e),
        s = o && !e.BHasTag(`hide_store`) && !e.BHasTag(`mod_hide_store`),
        c =
          i &&
          !e.BHasTag(`hide_library_overview`) &&
          !e.BHasTag(`mod_hide_library_overview`),
        l =
          a &&
          !e.BHasTag(`hide_library_detail`) &&
          !e.BHasTag(`mod_hide_library_detail`);
      return (0, Z.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, Z.jsx)(`div`, { className: ur, children: r }),
          (0, Z.jsx)(`div`, {
            children: W(
              `#EventModTile_Store_Visibility`,
              W(s ? `#WriteReview_Dialog_Yes` : `#WriteReview_Dialog_No`),
              s
                ? ``
                : o
                  ? W(
                      `#EventModTime_Hidden_EventType`,
                      e.GetEventTypeAsString(),
                    )
                  : e.BHasTag(`hide_store`)
                    ? W(`#EventModTime_Hidden_OptOut`)
                    : W(`#EventModTime_Hidden_Moderator`),
            ),
          }),
          (0, Z.jsx)(`div`, {
            children: W(
              `#EventModTile_LibraryHome_Visibility`,
              W(c ? `#WriteReview_Dialog_Yes` : `#WriteReview_Dialog_No`),
              c
                ? ``
                : o
                  ? W(
                      `#EventModTime_Hidden_EventType`,
                      e.GetEventTypeAsString(),
                    )
                  : e.BHasTag(`hide_library_overview`)
                    ? W(`#EventModTime_Hidden_OptOut`)
                    : W(`#EventModTime_Hidden_Moderator`),
            ),
          }),
          (0, Z.jsx)(`div`, {
            children: W(
              `#EventModTile_LibraryDetail_Visibility`,
              W(l ? `#WriteReview_Dialog_Yes` : `#WriteReview_Dialog_No`),
              l
                ? ``
                : o
                  ? W(
                      `#EventModTime_Hidden_EventType`,
                      e.GetEventTypeAsString(),
                    )
                  : e.BHasTag(`hide_library_detail`)
                    ? W(`#EventModTime_Hidden_OptOut`)
                    : W(`#EventModTime_Hidden_Moderator`),
            ),
          }),
          e.BHasTag(`enable_steam_china`) &&
            (0, Z.jsx)(`div`, {
              children: W(`#EventModTile_SteamChina_Visibility`),
            }),
          e.BHasTag(`disable_steam_global`) &&
            (0, Z.jsx)(`div`, {
              children: W(`#EventModTile_SteamGlobal_Hidden`),
            }),
        ],
      });
    }
  };
Rr = G([h], Rr);
var zr = class extends X.Component {
  state = {
    bUpdating: !1,
    newCategoryOption: { label: T(34), value: { eventType: 34 } },
  };
  m_cancelSignal = We.default.CancelToken.source();
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`ChangeEventTypeDialog component unmounted`);
  }
  async ChangeCategoryForEvent() {
    let { eventModel: e, closeModal: t } = this.props;
    try {
      let n = this.state.newCategoryOption,
        r = n.value.eventType;
      await Nn.Get().UpdatePartnerEventType(
        this.m_cancelSignal,
        e.clanSteamID,
        e.GID,
        r,
      );
      let i = w,
        a = [];
      n.value.tags &&
        n.value.tags.forEach((e) => {
          a.push(e);
          let t = new Mn().SetUpdateSeasonalTags(e).ToModString();
          a.push(t);
        });
      let o = await Nn.Get().UpdateTagsOnPartnerEvent(
        this.m_cancelSignal,
        e.clanSteamID,
        e.GetAnnouncementGID(),
        a,
        i,
        new Mn().SetActionChangeEvent(r),
      );
      d(() => {
        (e.type = r), (e.vecTags = o);
      }),
        this.setState({ bUpdating: !1 }, t);
    } catch (e) {
      let t = q(e);
      console.error(`ChangeEventTypeDialog error ` + t.strErrorMsg, t),
        this.setState({ bUpdating: !1, strErrorMsg: t.strErrorMsg });
    }
  }
  OnChangeSelection(e) {
    this.setState({ newCategoryOption: e });
  }
  render() {
    let { eventModel: e, closeModal: t } = this.props,
      n = Ae.filter((e) => e == 1 || e == 4 || e >= 9).map((e) => {
        let t = { eventType: e };
        return e == 12 && (t.tags = [`patchnotes`]), { label: T(e), value: t };
      });
    n.push({
      label: W(`#PartnerEvent_Curator_Group_Members`),
      value: { eventType: 28, tags: [`curator`, `curator_group_members`] },
    }),
      n.push({
        label: W(`#PartnerEvent_Curator_Public`),
        value: { eventType: 28, tags: [`curator`, `curator_public`] },
      }),
      n.push({
        label: W(`#PartnerEvent_SteamAwardNominations`),
        value: {
          eventType: 28,
          tags: [`steam_award_nomination_request`, `mod_hide_library_overview`],
        },
      }),
      n.push({
        label: W(`#PartnerEvent_SteamAwardVoteRequest`),
        value: {
          eventType: 28,
          tags: [`steam_award_vote_request`, `mod_hide_library_overview`],
        },
      });
    let r = [
        {
          value: { eventType: 15, tags: [`halloween`] },
          label: `Halloween: ` + W(`#PartnerEvent_15`),
        },
        {
          value: { eventType: 22, tags: [`halloween`] },
          label: `Halloween: ` + W(`#PartnerEvent_22`),
        },
        {
          value: { eventType: 23, tags: [`halloween`] },
          label: `Halloween: ` + W(`#PartnerEvent_23`),
        },
        {
          value: { eventType: 24, tags: [`halloween`] },
          label: `Halloween: ` + W(`#PartnerEvent_24`),
        },
        {
          value: { eventType: 35, tags: [`halloween`] },
          label: `Halloween: ` + W(`#PartnerEvent_35`),
        },
      ],
      i = R.GetTimeNowWithOverrideAsDate();
    return (
      i.getMonth() == 8 || i.getMonth() == 9 ? n.unshift(...r) : n.push(...r),
      (0, Z.jsx)(ze, {
        strTitle: W(`#EventModTile_ChangeEventType`),
        strDescription: W(
          `#EventModTile_ChangeEventType_Desc`,
          e.GetEventTypeAsString(),
        ),
        onCancel: t,
        onOK: () =>
          this.setState({ bUpdating: !0 }, this.ChangeCategoryForEvent),
        children: (0, Z.jsx)(X.Fragment, {
          children: (0, Z.jsxs)(`div`, {
            className: fr,
            children: [
              (0, Z.jsx)(`br`, {}),
              this.state.bUpdating && (0, Z.jsx)(L, { size: `small` }),
              this.state.strErrorMsg &&
                (0, Z.jsxs)(`div`, {
                  children: [
                    W(`#Chat_Settings_Error_ServerError`),
                    (0, Z.jsx)(`br`, {}),
                    this.state.strErrorMsg,
                  ],
                }),
              (0, Z.jsx)(En._default, {
                isSearchable: !0,
                onChange: this.OnChangeSelection,
                value: this.state.newCategoryOption,
                options: n,
              }),
            ],
          }),
        }),
      })
    );
  }
};
G([J], zr.prototype, `ChangeCategoryForEvent`, null),
  G([J], zr.prototype, `OnChangeSelection`, null),
  (zr = G([h], zr));
var Br = class extends X.Component {
  state = {
    bUpdating: !1,
    bAccept: this.props.eventModel.BHasTag(`halloween2019`),
    bHorror: this.props.eventModel.BHasTag(`horror`),
    bCute: this.props.eventModel.BHasTag(`cute`),
  };
  m_cancelSignal = We.default.CancelToken.source();
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`UpdateSeasonalTagDialog component unmounted`);
  }
  ChangeAcceptance() {
    this.setState({ bAccept: !this.state.bAccept });
  }
  ChangeHorror() {
    this.setState({ bHorror: !this.state.bHorror });
  }
  ChangeCute() {
    this.setState({ bCute: !this.state.bCute });
  }
  async ApplyAction() {
    let e = [],
      t = [];
    this.state.bAccept
      ? (e.push(`halloween2019`), t.push(`halloween2019reviewed`))
      : (t.push(`halloween2019`), e.push(`halloween2019reviewed`)),
      this.state.bCute ? e.push(`cute`) : t.push(`cute`),
      this.state.bHorror ? e.push(`horror`) : t.push(`horror`);
    try {
      let { eventModel: n } = this.props;
      (n.vecTags = await Nn.Get().UpdateTagsOnPartnerEvent(
        this.m_cancelSignal,
        n.clanSteamID,
        n.AnnouncementGID,
        e,
        t,
        new Mn().SetUpdateSeasonalTags(
          this.state.bAccept ? `halloween2019` : `halloween2019reviewed`,
        ),
      )),
        this.props.closeModal();
    } catch (e) {
      let t = q(e);
      console.error(`EventModerationTile ` + t.strErrorMsg, t),
        this.setState({ strErrorMsg: t.strErrorMsg });
    }
  }
  render() {
    let { eventModel: e, closeModal: t } = this.props;
    return (0, Z.jsx)(ze, {
      strTitle: W(`#EventModTile_SeasonalTag`),
      onCancel: t,
      onOK: () => this.setState({ bUpdating: !0 }, this.ApplyAction),
      children: (0, Z.jsx)(X.Fragment, {
        children: (0, Z.jsxs)(`div`, {
          className: fr,
          children: [
            (0, Z.jsx)(`input`, {
              id: `Acceptance`,
              type: `checkbox`,
              checked: this.state.bAccept,
              onChange: this.ChangeAcceptance,
            }),
            (0, Z.jsx)(`label`, {
              htmlFor: `Acceptance`,
              children: W(`#EventModTile_SeasonalTag_Desc`),
            }),
            (0, Z.jsx)(`div`, {
              children: W(`#EventModTile_SeasonalTag_Desc_Secondary`),
            }),
            (0, Z.jsx)(`input`, {
              id: `Horror`,
              type: `checkbox`,
              checked: this.state.bHorror,
              onChange: this.ChangeHorror,
            }),
            (0, Z.jsx)(`label`, { htmlFor: `Horror`, children: `Horror Tag` }),
            (0, Z.jsx)(`input`, {
              id: `Cute`,
              type: `checkbox`,
              checked: this.state.bCute,
              onChange: this.ChangeCute,
            }),
            (0, Z.jsx)(`label`, { htmlFor: `Cute`, children: `Cute Tag` }),
            this.state.bUpdating && (0, Z.jsx)(L, { size: `small` }),
            this.state.strErrorMsg &&
              (0, Z.jsxs)(`div`, {
                children: [
                  W(`#Chat_Settings_Error_ServerError`),
                  (0, Z.jsx)(`br`, {}),
                  this.state.strErrorMsg,
                ],
              }),
          ],
        }),
      }),
    });
  }
};
G([J], Br.prototype, `ChangeAcceptance`, null),
  G([J], Br.prototype, `ChangeHorror`, null),
  G([J], Br.prototype, `ChangeCute`, null),
  G([J], Br.prototype, `ApplyAction`, null);
var Vr = class extends X.Component {
  state = { bLoadingEvent: !0 };
  m_cancelSignal = We.default.CancelToken.source();
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`SteamGameFestivalStoreDebug to unload `);
  }
  async componentDidMount() {
    let { clanEventGID: e, clanAccountID: t } = this.props;
    if (
      (console.log(e, t, typeof e, typeof t), e && !V.BHasClanEventModel(e))
    ) {
      let n = Te.InitFromClanID(Number.parseInt(t)),
        r = await V.LoadPartnerEventFromClanEventGIDAndClanSteamID(n, e, 0),
        i = [],
        a = [];
      if (r.BHasSaleEnabled()) {
        this.setState({
          event: r,
          bLoadingEvent: !1,
          bLoadingApps: !0,
          bLoadingDemos: !0,
          bLoadingAssociatedDemoInfo: !0,
        });
        let e = new Map();
        r.jsondata.sale_sections.forEach((t) => {
          t.section_type == `tabs` &&
            t.tabs.forEach((t) => {
              t.capsules.forEach((t) => {
                t.type == `game` ||
                t.type == `application` ||
                t.type == `software`
                  ? e.has(t.id) || (e.set(t.id, !0), i.push(t.id))
                  : e.has(t.id) || (e.set(t.id, !0), a.push(t.id));
              });
            });
        });
        let t = {
          include_assets: !0,
          include_screenshots: !0,
          include_release: !0,
        };
        await K.Get().QueueMultipleAppRequests(i, t),
          this.setState({
            rgAppIDs: i,
            rgUnknownTypeAppIDs: a,
            bLoadingApps: !1,
          }),
          await K.Get().QueueMultipleAppRequests(i, t),
          this.setState({ bLoadingAssociatedDemoInfo: !1 });
        let n = i.flatMap((e) => K.Get().GetApp(e)?.GetDemoAppIDs() ?? []);
        await K.Get().QueueMultipleAppRequests(n, t),
          this.setState({ bLoadingDemos: !1 });
      } else this.setState({ bLoadingEvent: !1, rgAppIDs: i });
    } else this.setState({ bLoadingEvent: !1 });
  }
  render() {
    if (
      this.state.bLoadingEvent ||
      this.state.bLoadingDemos ||
      this.state.bLoadingApps ||
      this.state.bLoadingAssociatedDemoInfo
    )
      return (0, Z.jsx)(L, {
        string:
          W(`#Loading`) +
          (this.state.bLoadingEvent
            ? ` Events`
            : this.state.bLoadingApps
              ? ` Apps`
              : this.state.bLoadingAssociatedDemoInfo
                ? ` Associated Demo Info`
                : this.state.bLoadingDemos
                  ? ` Demos`
                  : `done`),
        position: `center`,
      });
    if (!this.state.event)
      return (0, Z.jsx)(`div`, { children: ` Failed to load event` });
    let { event: e } = this.state;
    if (!e.jsondata.bSaleEnabled)
      return (0, Z.jsx)(`div`, { children: `Not a sale event` });
    let t = [],
      n = [];
    this.state.rgAppIDs
      .filter((e) => !K.Get().GetApp(e))
      .forEach((e) => {
        t.push(
          (0, Z.jsx)(
            `div`,
            {
              children: (0, Z.jsx)(`a`, {
                href: Y.STORE_BASE_URL + `app/` + e + `/?beta=1`,
                target: `_blank`,
                children: e,
              }),
            },
            `missing: ` + e,
          ),
        ),
          n.push(e);
      });
    let r = this.state.rgAppIDs.reduce(
        (e, t) => e + +!!K.Get().GetApp(t)?.BHasDemo(),
        0,
      ),
      i = [];
    this.state.rgAppIDs.forEach((e) => {
      let t = K.Get().GetApp(e);
      if (t && !t.BHasDemo()) {
        let t = K.Get().GetApp(e);
        i.push(
          (0, Z.jsxs)(
            `div`,
            {
              children: [
                t?.GetAppType() == 1 &&
                  (0, Z.jsx)(`b`, {
                    children: `--Error: Sale Page has Demo AppID, based game --\xA0`,
                  }),
                t?.GetName(),
                ` (`,
                e,
                `)`,
                (0, Z.jsx)(`a`, {
                  href: be(t.GetStorePageURL() + `?beta=0`),
                  target: `_blank`,
                  children: `Store Page`,
                }),
                `\xA0`,
                (0, Z.jsx)(`a`, {
                  href: Y.PARTNER_BASE_URL + `apps/landing/` + e,
                  target: `_blank`,
                  children: `App Landing Page`,
                }),
              ],
            },
            `missingdemo_` + e,
          ),
        );
      }
    });
    let a = 0,
      o = 0;
    this.state.rgAppIDs.forEach((e) => {
      let t = K.Get().GetApp(e);
      t &&
        t.BHasDemo() &&
        (K.Get().GetApp(t.GetDemoAppIDs()[0]).BIsComingSoon()
          ? (a += 1)
          : (o += 1));
    });
    let s = [],
      c = 0;
    return (
      this.state.rgAppIDs.forEach((e) => {
        K.Get().GetApp(e)?.GetAppType() != 1 && (c += 1);
      }),
      (0, Z.jsxs)(De, {
        children: [
          (0, Z.jsx)(`h1`, { children: e.GetNameWithFallback(we(Y.LANGUAGE)) }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, { children: `Unique AppIDs:` }),
              ` `,
              this.state.rgAppIDs.length,
              ` `,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsxs)(`b`, {
                children: [`Visible Apps in `, Y.COUNTRY, `:`],
              }),
              ` `,
              c,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, { children: `Unknown AppID types:` }),
              ` `,
              this.state.rgUnknownTypeAppIDs.length,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, { children: `Missing AppIDs:` }),
              ` `,
              ` `,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [(0, Z.jsx)(`b`, { children: `Demos:` }), ` `, r],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, { children: `Visible apps missing demo store:` }),
              ` `,
              i.length,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, { children: `CApplications Loaded:` }),
              ` `,
              ` `,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, {
                children: `CApplication with Associated Demos:`,
              }),
              ` `,
              0,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, {
                children: `\xA0\xA0Associated with store page but not released: `,
              }),
              ` `,
              0,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, {
                children: `CApplication with demo without association:`,
              }),
              ` `,
              0,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, {
                children: `\xA0\xA0Released but not associated with store page: `,
              }),
              ` `,
              0,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, { children: `CApplication missing:` }),
              ` `,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`b`, {
                children: `CApplication without demo store and demo associations:`,
              }),
              ` `,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [(0, Z.jsx)(`b`, { children: `Released Demo: ` }), o],
          }),
          (0, Z.jsxs)(`div`, {
            children: [(0, Z.jsx)(`b`, { children: `Unreleased Demo: ` }), a],
          }),
          (0, Z.jsx)(`hr`, {}),
          (0, Z.jsx)(`h2`, { children: `Missing Appids:` }),
          t,
          (0, Z.jsx)(`h2`, {
            children: `Missing BOTH demo list and associated demo on product page:`,
          }),
          s,
          (0, Z.jsx)(`h2`, {
            children: `Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):`,
          }),
          i,
        ],
      })
    );
  }
};
Vr = G([h], Vr);
function Hr(e) {
  let [t, n] = (0, X.useState)(!1),
    [r] = (0, X.useState)(() => Ur()),
    i = (0, X.useMemo)(
      () => ({ country: Y.COUNTRY, language: Y.LANGUAGE, bUsePartnerAPI: !0 }),
      [],
    );
  return (
    (0, X.useEffect)(() => (n(!0), Wr(r)), [r]),
    t
      ? (0, X.createElement)(Ie, {
          context: i,
          serviceTransportOverride: r.GetServiceTransport(),
          children: e.children,
        })
      : null
  );
}
function Ur() {
  let e = ce(`partnerbrowse_webapi_token`, `application_config`);
  return Oe(new Ce(Y.WEBAPI_BASE_URL, e));
}
function Wr(e) {
  return K.Initialize(e.GetServiceTransport(), Re.is_partner_member);
}
var Gr = () =>
  (0, Z.jsx)(Hr, {
    children: (0, Z.jsx)(I, {
      children: (0, Z.jsxs)(l, {
        children: [
          (0, Z.jsx)(s, {
            path: pe.EventGameFestivalDebug(),
            render: (e) =>
              (0, Z.jsx)(Vr, {
                ...e,
                clanAccountID: e.match.params.clanacountid,
                clanEventGID: e.match.params.claneventgid,
              }),
          }),
          (0, Z.jsx)(s, {
            exact: !0,
            path: pe.EventBackfill(),
            render: (e) => (0, Z.jsx)(dt, { ...e }),
          }),
          (0, Z.jsx)(s, {
            path: pe.EventRSSModeration(),
            render: (e) => (0, Z.jsx)(Qe, { ...e }),
          }),
          (0, Z.jsx)(s, {
            path: pe.EventModeration(),
            render: (e) =>
              (0, Z.jsx)(Or, {
                ...e,
                appid:
                  e.match.params.appid && Number.parseInt(e.match.params.appid),
              }),
          }),
        ],
      }),
    }),
  });
export { Gr as default };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  B as t,
  Pt as n,
  S as r,
  at as i,
  bt as a,
  xt as o,
} from "./chunk~01cfc309bf.js";
import { Z as s, c } from "./chunk~35b0bf48ef.js";
import { $ as l, r as u } from "./chunk~b986e50637.js";
import { l as d, m as f } from "./chunk~3f4314f3b4.js";
import { t as p } from "./chunk~6eb508043a.js";
import { i as m } from "./chunk~437071091c.js";
import { t as h } from "./chunk~eefd71512b.js";
import { H as g, Q as _, U as v, W as y } from "./chunk~21cdc464a1.js";
import { W as b } from "./chunk~2bb3c0c267.js";
import { t as x } from "./chunk~c55d6473b2.js";
import {
  $l as S,
  Bu as C,
  Df as w,
  Fu as T,
  Is as E,
  Mi as D,
  Qd as ee,
  Rh as O,
  Su as k,
  Vs as A,
  Wf as j,
  Zt as M,
  dd as N,
  gm as P,
  hf as F,
  l as I,
  lm as L,
  mm as R,
  rm as z,
  vf as B,
  zf as V,
  zr as H,
} from "./main.js";
import "./chunk~bf4b546728.js";
var U = e(n(), 1),
  W = i(),
  G = `OdUWUqw0tkM-`,
  K = `d-5nAi7tljQ-`,
  q = `k8EMgG-4Stg-`,
  J = `NelD3I3LNkY-`,
  Y = `kS9Vogo9VDE-`,
  X = `We7gZuKDOiI-`,
  Z = 500;
function Q(e) {
  let {
      strClassName: t,
      rgEvents: n,
      fnEventShowModal: r,
      elPostRowElement: i,
      bViewAllShowInfiniteScroll: a,
      nSummaryMaxLength: o,
    } = e,
    s = M(),
    c = A(),
    l = j(),
    u = 2,
    d = 501;
  return (
    c.ownerWindow.window
      ? (d = c.ownerWindow.window.innerWidth)
      : s.viewportWidth && (d = s.viewportWidth.value),
    (u = d <= Z ? 1 : 2),
    n && n.length == 0 && !i
      ? null
      : (0, W.jsxs)(k, {
          className: t,
          "flow-children": `row`,
          children: [
            !!n &&
              n.length > 0 &&
              (0, W.jsx)(`div`, {
                className: `OdUWUqw0tkM-`,
                children: (0, W.jsxs)(D, {
                  children: [
                    (0, W.jsxs)(`h2`, {
                      children: [
                        B.Localize(`#EventBrowse_RecentEvents`),
                        !l &&
                          !!n &&
                          (0, W.jsx)(W.Fragment, {
                            children:
                              a && r
                                ? (0, W.jsx)(T, {
                                    className: `d-5nAi7tljQ-`,
                                    onClick: () => r(n[0]),
                                    children: B.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, W.jsx)(y, {
                                    eventModel: n[0],
                                    route: v.k_eViewWebSiteHub,
                                    className: `d-5nAi7tljQ-`,
                                    children: B.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  }),
                          }),
                      ],
                    }),
                    (0, W.jsx)(`div`, {
                      className: `YZMD3BYfIGw-`,
                      children: n.slice(0, u).map((e) => {
                        let t =
                          r && !g()
                            ? (t) => {
                                (r(e), t.stopPropagation(), t.preventDefault());
                              }
                            : void 0;
                        return (0, W.jsx)(
                          b,
                          { event: e, onClick: t, nSummaryMaxLength: o },
                          e.GID,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            i,
          ],
        })
  );
}
function te(e) {
  let { nUpdateTime: t, onClick: n, eventModel: r } = e,
    i = B.Localize(`#EventBrowse_LatestUpdateTime_Button`, F(t));
  return (0, W.jsxs)(`div`, {
    className: J,
    children: [
      (0, W.jsx)(`div`, {
        className: Y,
        children: (0, W.jsx)(S, { role: `presentation` }),
      }),
      n || !r
        ? (0, W.jsx)(T, { className: X, onClick: n, children: i })
        : (0, W.jsx)(y, {
            eventModel: r,
            route: v.k_eView,
            className: X,
            children: i,
          }),
    ],
  });
}
function ne(e) {
  let { nUpdateTime: t, announcementGID: n, onClick: r } = e,
    i = e.eventModel ?? (n ? d.GetClanEventFromAnnouncementGID(n) : null),
    a = b,
    o = r
      ? (e) => {
          (r(), e.stopPropagation(), e.preventDefault());
        }
      : void 0;
  return (0, W.jsxs)(`div`, {
    className: G,
    children: [
      (0, W.jsxs)(`h2`, {
        children: [
          B.Localize(`#EventBrowse_LastUpdateDate`, F(t)),
          o || !i
            ? (0, W.jsx)(T, {
                className: K,
                onClick: o,
                children: B.Localize(`#EventBrowse_MoreEventsBtn`),
              })
            : (0, W.jsx)(y, {
                eventModel: i,
                route: v.k_eViewWebSiteHub,
                className: K,
                children: B.Localize(`#EventBrowse_MoreEventsBtn`),
              }),
        ],
      }),
      !!i &&
        (0, W.jsx)(k, {
          className: `YZMD3BYfIGw-`,
          "flow-children": `column`,
          navEntryPreferPosition: C.PREFERRED_CHILD,
          children: (0, W.jsx)(a, { event: i, onClick: o }),
        }),
    ],
  });
}
var re = (e) =>
    (0, U.createElement)(u, {
      ...e,
      key: e.match.params.oldAnnouncementGID,
      bClearDirty: !0,
      bPreview: !1,
      bPreventRedirect: !0,
    }),
  $ = class extends U.Component {
    state = { bShowModal: !1, bLoadedLandingState: this.props.bPreventDismiss };
    componentDidMount() {
      this.props.bPreventDismiss
        ? this.LoadAppAndFirstEvent()
        : (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
            this.setState({ bShowModal: !0, appid: e, announcementGID: t });
          });
    }
    async LoadAppAndFirstEvent() {
      let e = L(`eventinfinitescrolllanding`, `application_config`),
        n;
      e && typeof e == `string` && (n = e);
      let r = window.location.href.startsWith(R.COMMUNITY_BASE_URL + `groups`),
        i = r
          ? await m.LoadOGGClanInfoForGroupVanity(
              this.props.match.params.appid_or_vanity_str,
            )
          : await m.LoadOGGClanInfoForIdentifier(
              this.props.match.params.appid_or_vanity_str,
            );
      if ((console.log(`output: `, t(i), r), i)) {
        if (i.partner_events_enabled) {
          let e = await d.LoadAdjacentPartnerEventsByAnnouncement(
            n,
            i.clanSteamID,
            i.appid,
            3,
            3,
          );
          this.setState({
            bLoadedLandingState: !1,
            bShowModal: !0,
            appid: i.appid,
            clanSteamID: i.clanSteamID,
            announcementGID: e?.[0]?.AnnouncementGID,
          });
        } else this.setState({ bLoadedLandingState: !1 });
      } else
        (console.error(
          `EventInfiniteScrollLanding: failed to load clan info for ` +
            this.props.match.params.appid_or_vanity_str,
        ),
          this.setState({ bLoadedLandingState: !1 }));
    }
    HideModal() {
      this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
    }
    render() {
      let { bPreventDismiss: e } = this.props;
      return this.state.bShowModal
        ? (0, W.jsx)(p, {
            appid: this.state.appid,
            announcementGID: this.state.announcementGID,
            clanSteamID: this.state.clanSteamID,
            closeModal: this.HideModal,
            partnerEventStore: d,
            trackingLocation: this.props.trackingLocation,
            showAppHeader: !0,
            bPrimaryPageFeature: e,
          })
        : this.state.bLoadedLandingState
          ? (0, W.jsx)(h, { string: ee(`#Loading`) })
          : (0, W.jsx)(`div`, {});
    }
  };
(w([O], $.prototype, `HideModal`, null), ($ = w([r], $)));
function ie(e) {
  let {
      trackingLocation: t,
      strClassName: n,
      bViewAllShowInfiniteScroll: r,
    } = e,
    [i, a, o] = N(),
    [s, c] = (0, U.useState)(null),
    [l, u] = (0, U.useState)(void 0),
    d = I(),
    f = (0, U.useCallback)(() => {
      (c(null), o());
    }, [o]),
    p = (0, U.useCallback)(
      (e) => {
        (t &&
          e &&
          e.BIsPartnerEvent() &&
          d.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
          d.Flush(),
          c(e),
          u(void 0),
          a());
      },
      [t, d, a],
    ),
    { last_update_event: m, rgEvents: h } = ae({ ...e, fnEventShowModal: p }),
    g = (0, U.useCallback)(() => {
      let { event_gid: e, announcement_gid: n, clan_account_id: r } = m;
      (t && e && d.MarkEventRead(e, r, t) && d.Flush(), u(n), c(null), a());
    }, [m, a, d, t]);
  (0, U.useEffect)(
    () => (
      (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
        (u(t), c(null), u(t), a());
      }),
      () => {
        window.fnPartnerEvent_ShowInfiniteScroll &&
          delete window.fnPartnerEvent_ShowInfiniteScroll;
      }
    ),
    [a],
  );
  let _ = j(),
    v = !!m && !!m.rtime,
    y =
      v && m.announcement_gid && (!h || h.length == 0)
        ? m.announcement_gid
        : void 0,
    b;
  return (
    v && y
      ? (b = (0, W.jsx)(ne, {
          nUpdateTime: m.rtime,
          announcementGID: y,
          onClick: g,
        }))
      : v &&
        !y &&
        !_ &&
        (b = (0, W.jsx)(te, { nUpdateTime: m.rtime, onClick: g })),
    (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(E, {
          active: i,
          children: (0, W.jsx)(se, {
            ...e,
            announcementGID: l || s?.AnnouncementGID,
            eventModel: s,
            closeModal: f,
          }),
        }),
        (0, W.jsx)(Q, {
          elPostRowElement: b,
          rgEvents: h,
          fnEventShowModal: p,
          bViewAllShowInfiniteScroll: r,
          strClassName: n,
        }),
      ],
    })
  );
}
function ae(e) {
  let {
      appid: t,
      event_customization: n,
      partnerEventStore: r,
      trackingLocation: i,
      fnEventShowModal: a,
    } = e,
    [o, s] = (0, U.useState)(null),
    [c, u] = (0, U.useState)(null),
    p = I(),
    [m] = l(`emgid`, void 0),
    [h] = l(`announce_gid`, void 0);
  return (
    (0, U.useEffect)(() => {
      let e = f(`EventWebRowEmbed`),
        a = !1;
      if (oe(e)) {
        ((a = e.bPreLoaded), s(e.last_update_event));
        let t = [];
        (e.announcementGIDList.forEach((e) => {
          let n = d.GetClanEventFromAnnouncementGID(e);
          n && t.push(n);
        }),
          u(t));
      }
      a ||
        (async () => {
          let e = await r.LoadAdjacentPartnerEvents(void 0, void 0, t, 0, 2, n);
          (u(e),
            i &&
              e &&
              e.length > 0 &&
              (e
                .filter((e) => e.BIsPartnerEvent())
                .forEach((e) =>
                  p.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), i),
                ),
              p.Flush()));
        })();
    }, [t, n, a, r, p, i]),
    (0, U.useEffect)(() => {
      if (c != null && (m || h)) {
        let e = c.find((e) => e.GID === m || e.AnnouncementGID == h);
        e
          ? a(e)
          : (async () => {
              let e = m
                ? await r.LoadPartnerEventFromClanEventGID(t, m, 0)
                : await r.LoadPartnerEventFromAnnoucementGID(t, h, 0);
              e && u([...c, e]);
            })();
      }
    }, [m, h, c, a, u, r, t]),
    { last_update_event: o, rgEvents: c }
  );
}
function oe(e) {
  let t = e;
  return t && typeof t == `object`
    ? t.bPreLoaded !== void 0 &&
        typeof t.bPreLoaded == `boolean` &&
        Array.isArray(t.announcementGIDList)
    : !1;
}
function se(e) {
  let {
      appid: t,
      partnerEventStore: n,
      trackingLocation: r,
      announcementGID: i,
      eventModel: a,
      closeModal: o,
    } = e,
    s = j();
  return (0, W.jsx)(p, {
    className: s ? void 0 : q,
    eventClassName: void 0,
    appid: t,
    trackingLocation: r,
    announcementGID: i,
    partnerEventStore: n,
    eventModel: a ?? void 0,
    closeModal: o,
  });
}
function ce(e) {
  let { appid: t } = e,
    n = new Date(z.NOW * 1e3),
    r = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6),
    i = Math.floor(r.getTime() / 1e3);
  return (0, W.jsx)(`div`, {
    className: `detailBox altFooter greenlight_home_box section announcements_row`,
    children: (0, W.jsx)(ie, {
      appid: t,
      partnerEventStore: c,
      event_customization: { require_tags: [`workshop`], rtime_oldestevent: i },
      strClassName: G,
      trackingLocation: 6,
      bViewAllShowInfiniteScroll: !0,
    }),
  });
}
function le(e) {
  let [t, n] = U.useState(!0);
  return (
    U.useEffect(() => {
      (x.Init(V(new P(R.WEBAPI_BASE_URL))), d.Init(), n(!1));
    }, []),
    t
      ? null
      : (0, W.jsx)(_.Provider, {
          value: { bCanUseLink: !0 },
          children: (0, W.jsxs)(o, {
            children: [
              (0, W.jsx)(a, {
                exact: !0,
                path: s.ViewEventDetails(
                  `:appid_or_vanity_str`,
                  `:oldAnnouncementGID(\\d+)`,
                ),
                render: (e) => (0, W.jsx)(re, { ...e }),
              }),
              (0, W.jsx)(a, {
                exact: !0,
                path: s.Listing(`:appid_or_vanity_str`),
                render: (e) =>
                  (0, W.jsx)(
                    $,
                    { ...e, bPreventDismiss: !0, trackingLocation: 6 },
                    `InfScroll_NoDismissApp_` + e.match.params.appid,
                  ),
              }),
              (0, W.jsx)(a, {
                exact: !0,
                path: s.WorkshopHub(`:appid(\\d+)`),
                render: (e) =>
                  (0, U.createElement)(ce, {
                    ...e,
                    appid: +e.match.params.appid,
                    key: `Workshop` + e.match.params.appid,
                  }),
              }),
              (0, W.jsx)(a, {
                path: s.AppHub(`:appid`),
                render: (e) =>
                  (0, U.createElement)($, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.appid,
                    trackingLocation: 6,
                  }),
              }),
              (0, W.jsx)(a, {
                path: s.GroupHub(`:group_vanity`),
                render: (e) =>
                  (0, U.createElement)($, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.group_vanity,
                    trackingLocation: 6,
                  }),
              }),
              (0, W.jsx)(a, { component: H }),
            ],
          }),
        })
  );
}
export { le as default };

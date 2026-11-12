/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  C as t,
  Ft as n,
  St as r,
  V as i,
  ot as a,
  xt as o,
} from "./chunk~01cfc309bf.js";
import { Z as s, ba as c, c as l } from "./chunk~35b0bf48ef.js";
import { r as u } from "./chunk~b986e50637.js";
import { l as d, m as f } from "./chunk~3f4314f3b4.js";
import { t as p } from "./chunk~6eb508043a.js";
import { i as m } from "./chunk~437071091c.js";
import { t as h } from "./chunk~eefd71512b.js";
import { G as g, K as _, W as v, et as y } from "./chunk~21cdc464a1.js";
import { t as b } from "./chunk~c55d6473b2.js";
import { W as x } from "./chunk~2bb3c0c267.js";
import {
  Gr as S,
  Hu as C,
  Kf as w,
  Lu as T,
  Rh as ee,
  Ri as E,
  Rs as D,
  Us as O,
  Vf as k,
  _f as A,
  _m as j,
  bf as M,
  ef as N,
  hm as P,
  im as te,
  in as F,
  kf as I,
  l as L,
  pd as R,
  tu as z,
  um as B,
  wu as V,
} from "./main.js";
import "./chunk~bf4b546728.js";
var H = e(n(), 1),
  U = a(),
  W = `OdUWUqw0tkM-`,
  G = `d-5nAi7tljQ-`,
  K = `k8EMgG-4Stg-`,
  q = `NelD3I3LNkY-`,
  J = `kS9Vogo9VDE-`,
  Y = `We7gZuKDOiI-`,
  X = 500;
function Z(e) {
  let {
      strClassName: t,
      rgEvents: n,
      fnEventShowModal: r,
      elPostRowElement: i,
      bViewAllShowInfiniteScroll: a,
      nSummaryMaxLength: o,
    } = e,
    s = F(),
    c = O(),
    l = w(),
    u = 2,
    d = 501;
  return (
    c.ownerWindow.window
      ? (d = c.ownerWindow.window.innerWidth)
      : s.viewportWidth && (d = s.viewportWidth.value),
    (u = d <= X ? 1 : 2),
    n && n.length == 0 && !i
      ? null
      : (0, U.jsxs)(V, {
          className: t,
          "flow-children": `row`,
          children: [
            !!n &&
              n.length > 0 &&
              (0, U.jsx)(`div`, {
                className: `OdUWUqw0tkM-`,
                children: (0, U.jsxs)(E, {
                  children: [
                    (0, U.jsxs)(`h2`, {
                      children: [
                        M.Localize(`#EventBrowse_RecentEvents`),
                        !l &&
                          !!n &&
                          (0, U.jsx)(U.Fragment, {
                            children:
                              a && r
                                ? (0, U.jsx)(T, {
                                    className: `d-5nAi7tljQ-`,
                                    onClick: () => r(n[0]),
                                    children: M.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, U.jsx)(_, {
                                    eventModel: n[0],
                                    route: g.k_eViewWebSiteHub,
                                    className: `d-5nAi7tljQ-`,
                                    children: M.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  }),
                          }),
                      ],
                    }),
                    (0, U.jsx)(`div`, {
                      className: `YZMD3BYfIGw-`,
                      children: n.slice(0, u).map((e) => {
                        let t =
                          r && !v()
                            ? (t) => {
                                (r(e), t.stopPropagation(), t.preventDefault());
                              }
                            : void 0;
                        return (0, U.jsx)(
                          x,
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
function ne(e) {
  let { nUpdateTime: t, onClick: n, eventModel: r } = e,
    i = M.Localize(`#EventBrowse_LatestUpdateTime_Button`, A(t));
  return (0, U.jsxs)(`div`, {
    className: q,
    children: [
      (0, U.jsx)(`div`, {
        className: J,
        children: (0, U.jsx)(z, { role: `presentation` }),
      }),
      n || !r
        ? (0, U.jsx)(T, { className: Y, onClick: n, children: i })
        : (0, U.jsx)(_, {
            eventModel: r,
            route: g.k_eView,
            className: Y,
            children: i,
          }),
    ],
  });
}
function re(e) {
  let { nUpdateTime: t, announcementGID: n, onClick: r } = e,
    i = e.eventModel ?? (n ? d.GetClanEventFromAnnouncementGID(n) : null),
    a = x,
    o = r
      ? (e) => {
          (r(), e.stopPropagation(), e.preventDefault());
        }
      : void 0;
  return (0, U.jsxs)(`div`, {
    className: W,
    children: [
      (0, U.jsxs)(`h2`, {
        children: [
          M.Localize(`#EventBrowse_LastUpdateDate`, A(t)),
          o || !i
            ? (0, U.jsx)(T, {
                className: G,
                onClick: o,
                children: M.Localize(`#EventBrowse_MoreEventsBtn`),
              })
            : (0, U.jsx)(_, {
                eventModel: i,
                route: g.k_eViewWebSiteHub,
                className: G,
                children: M.Localize(`#EventBrowse_MoreEventsBtn`),
              }),
        ],
      }),
      !!i &&
        (0, U.jsx)(V, {
          className: `YZMD3BYfIGw-`,
          "flow-children": `column`,
          navEntryPreferPosition: C.PREFERRED_CHILD,
          children: (0, U.jsx)(a, { event: i, onClick: o }),
        }),
    ],
  });
}
var ie = (e) =>
    (0, H.createElement)(u, {
      ...e,
      key: e.match.params.oldAnnouncementGID,
      bClearDirty: !0,
      bPreview: !1,
      bPreventRedirect: !0,
    }),
  Q = class extends H.Component {
    state = { bShowModal: !1, bLoadedLandingState: this.props.bPreventDismiss };
    componentDidMount() {
      this.props.bPreventDismiss
        ? this.LoadAppAndFirstEvent()
        : (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
            this.setState({ bShowModal: !0, appid: e, announcementGID: t });
          });
    }
    async LoadAppAndFirstEvent() {
      let e = B(`eventinfinitescrolllanding`, `application_config`),
        t;
      e && typeof e == `string` && (t = e);
      let n = window.location.href.startsWith(P.COMMUNITY_BASE_URL + `groups`),
        r = n
          ? await m.LoadOGGClanInfoForGroupVanity(
              this.props.match.params.appid_or_vanity_str,
            )
          : await m.LoadOGGClanInfoForIdentifier(
              this.props.match.params.appid_or_vanity_str,
            );
      if ((console.log(`output: `, i(r), n), r)) {
        if (r.partner_events_enabled) {
          let e = await d.LoadAdjacentPartnerEventsByAnnouncement(
            t,
            r.clanSteamID,
            r.appid,
            3,
            3,
          );
          this.setState({
            bLoadedLandingState: !1,
            bShowModal: !0,
            appid: r.appid,
            clanSteamID: r.clanSteamID,
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
        ? (0, U.jsx)(p, {
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
          ? (0, U.jsx)(h, { string: N(`#Loading`) })
          : (0, U.jsx)(`div`, {});
    }
  };
(I([ee], Q.prototype, `HideModal`, null), (Q = I([t], Q)));
function ae(e) {
  let {
      trackingLocation: t,
      strClassName: n,
      bViewAllShowInfiniteScroll: r,
    } = e,
    [i, a, o] = R(),
    [s, c] = (0, H.useState)(null),
    [l, u] = (0, H.useState)(void 0),
    d = L(),
    f = (0, H.useCallback)(() => {
      (c(null), o());
    }, [o]),
    p = (0, H.useCallback)(
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
    { last_update_event: m, rgEvents: h } = oe({ ...e, fnEventShowModal: p }),
    g = (0, H.useCallback)(() => {
      let { event_gid: e, announcement_gid: n, clan_account_id: r } = m;
      (t && e && d.MarkEventRead(e, r, t) && d.Flush(), u(n), c(null), a());
    }, [m, a, d, t]);
  (0, H.useEffect)(
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
  let _ = w(),
    v = !!m && !!m.rtime,
    y =
      v && m.announcement_gid && (!h || h.length == 0)
        ? m.announcement_gid
        : void 0,
    b;
  return (
    v && y
      ? (b = (0, U.jsx)(re, {
          nUpdateTime: m.rtime,
          announcementGID: y,
          onClick: g,
        }))
      : v &&
        !y &&
        !_ &&
        (b = (0, U.jsx)(ne, { nUpdateTime: m.rtime, onClick: g })),
    (0, U.jsxs)(U.Fragment, {
      children: [
        (0, U.jsx)(D, {
          active: i,
          children: (0, U.jsx)(se, {
            ...e,
            announcementGID: l || s?.AnnouncementGID,
            eventModel: s,
            closeModal: f,
          }),
        }),
        (0, U.jsx)(Z, {
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
function oe(e) {
  let {
      appid: t,
      event_customization: n,
      partnerEventStore: r,
      trackingLocation: i,
      fnEventShowModal: a,
    } = e,
    [o, s] = (0, H.useState)(null),
    [l, u] = (0, H.useState)(null),
    p = L(),
    [m] = c(`emgid`, void 0),
    [h] = c(`announce_gid`, void 0);
  return (
    (0, H.useEffect)(() => {
      let e = f(`EventWebRowEmbed`),
        a = !1;
      if ($(e)) {
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
    (0, H.useEffect)(() => {
      if (l != null && (m || h)) {
        let e = l.find((e) => e.GID === m || e.AnnouncementGID == h);
        e
          ? a(e)
          : (async () => {
              let e = m
                ? await r.LoadPartnerEventFromClanEventGID(t, m, 0)
                : await r.LoadPartnerEventFromAnnoucementGID(t, h, 0);
              e && u([...l, e]);
            })();
      }
    }, [m, h, l, a, u, r, t]),
    { last_update_event: o, rgEvents: l }
  );
}
function $(e) {
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
    s = w();
  return (0, U.jsx)(p, {
    className: s ? void 0 : K,
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
    n = new Date(te.NOW * 1e3),
    r = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6),
    i = Math.floor(r.getTime() / 1e3);
  return (0, U.jsx)(`div`, {
    className: `detailBox altFooter greenlight_home_box section announcements_row`,
    children: (0, U.jsx)(ae, {
      appid: t,
      partnerEventStore: l,
      event_customization: { require_tags: [`workshop`], rtime_oldestevent: i },
      strClassName: W,
      trackingLocation: 6,
      bViewAllShowInfiniteScroll: !0,
    }),
  });
}
function le(e) {
  let [t, n] = H.useState(!0);
  return (
    H.useEffect(() => {
      (b.Init(k(new j(P.WEBAPI_BASE_URL))), d.Init(), n(!1));
    }, []),
    t
      ? null
      : (0, U.jsx)(y.Provider, {
          value: { bCanUseLink: !0 },
          children: (0, U.jsxs)(r, {
            children: [
              (0, U.jsx)(o, {
                exact: !0,
                path: s.ViewEventDetails(
                  `:appid_or_vanity_str`,
                  `:oldAnnouncementGID(\\d+)`,
                ),
                render: (e) => (0, U.jsx)(ie, { ...e }),
              }),
              (0, U.jsx)(o, {
                exact: !0,
                path: s.Listing(`:appid_or_vanity_str`),
                render: (e) =>
                  (0, U.jsx)(
                    Q,
                    { ...e, bPreventDismiss: !0, trackingLocation: 6 },
                    `InfScroll_NoDismissApp_` + e.match.params.appid,
                  ),
              }),
              (0, U.jsx)(o, {
                exact: !0,
                path: s.WorkshopHub(`:appid(\\d+)`),
                render: (e) =>
                  (0, H.createElement)(ce, {
                    ...e,
                    appid: +e.match.params.appid,
                    key: `Workshop` + e.match.params.appid,
                  }),
              }),
              (0, U.jsx)(o, {
                path: s.AppHub(`:appid`),
                render: (e) =>
                  (0, H.createElement)(Q, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.appid,
                    trackingLocation: 6,
                  }),
              }),
              (0, U.jsx)(o, {
                path: s.GroupHub(`:group_vanity`),
                render: (e) =>
                  (0, H.createElement)(Q, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.group_vanity,
                    trackingLocation: 6,
                  }),
              }),
              (0, U.jsx)(o, { component: S }),
            ],
          }),
        })
  );
}
export { le as default };

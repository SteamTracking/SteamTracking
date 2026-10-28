/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import {
  C as t,
  Ft as n,
  St as r,
  V as i,
  ot as a,
  xt as o,
} from "./libraries.js?contenthash=eLY4-d-j";
import { r as s } from "./partnereventmigrate.js?contenthash=CEpog4Mi";
import { X as c, c as l, ha as u } from "./eventrow.js?contenthash=CQLWp866";
import { h as d, u as f } from "./salebanner.js?contenthash=Kgzkt2UP";
import { t as p } from "./eventinfinitescrollmodal.js?contenthash=C55rGRmB";
import { i as m } from "./clanstore.js?contenthash=C3YK0fn0";
import { t as h } from "./throbber.js?contenthash=COAox7wG";
import {
  X as g,
  Y as _,
  Z as v,
  at as y,
} from "./carouselarrows.js?contenthash=BqkMhyR4";
import { t as b } from "./appinfostore.js?contenthash=DBYLTPeb";
import { H as x } from "./clanimagepicker.js?contenthash=DqzEBQZa";
import {
  Af as S,
  Bs as C,
  Fs as w,
  Jf as T,
  Jr as E,
  Kd as D,
  Ql as O,
  Rf as k,
  Rh as A,
  Vi as j,
  ad as M,
  bu as N,
  hm as P,
  im as ee,
  jf as F,
  ku as I,
  l as L,
  lf as R,
  on as z,
  um as B,
  wu as V,
} from "./main.js?contenthash=B3VTzWgT";
import "./partnereventsavebutton.module.js?contenthash=KlJHBgCU";
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
    s = z(),
    c = C(),
    l = T(),
    u = 2,
    d = 501;
  return (
    c.ownerWindow.window
      ? (d = c.ownerWindow.window.innerWidth)
      : s.viewportWidth && (d = s.viewportWidth.value),
    (u = d <= X ? 1 : 2),
    n && n.length == 0 && !i
      ? null
      : (0, U.jsxs)(N, {
          className: t,
          "flow-children": `row`,
          children: [
            !!n &&
              n.length > 0 &&
              (0, U.jsx)(`div`, {
                className: `OdUWUqw0tkM-`,
                children: (0, U.jsxs)(j, {
                  children: [
                    (0, U.jsxs)(`h2`, {
                      children: [
                        F.Localize(`#EventBrowse_RecentEvents`),
                        !l &&
                          !!n &&
                          (0, U.jsx)(U.Fragment, {
                            children:
                              a && r
                                ? (0, U.jsx)(V, {
                                    className: `d-5nAi7tljQ-`,
                                    onClick: () => r(n[0]),
                                    children: F.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, U.jsx)(v, {
                                    eventModel: n[0],
                                    route: g.k_eViewWebSiteHub,
                                    className: `d-5nAi7tljQ-`,
                                    children: F.Localize(
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
                          r && !_()
                            ? (t) => {
                                r(e), t.stopPropagation(), t.preventDefault();
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
function Q(e) {
  return (0, U.jsxs)(`div`, {
    className: q,
    children: [
      (0, U.jsx)(`div`, {
        className: J,
        children: (0, U.jsx)(O, { role: `presentation` }),
      }),
      (0, U.jsx)(V, {
        className: Y,
        onClick: e.onClick,
        children: F.Localize(
          `#EventBrowse_LatestUpdateTime_Button`,
          R(e.nUpdateTime),
        ),
      }),
    ],
  });
}
function te(e) {
  let { nUpdateTime: t, announcementGID: n, onClick: r } = e,
    i = n ? f.GetClanEventFromAnnouncementGID(n) : null,
    a = x;
  return (0, U.jsxs)(`div`, {
    className: W,
    children: [
      (0, U.jsxs)(`h2`, {
        children: [
          D(`#EventBrowse_LastUpdateDate`, R(t)),
          (0, U.jsx)(V, {
            className: G,
            onClick: (e) => {
              r?.(), e.stopPropagation(), e.preventDefault();
            },
            children: D(`#EventBrowse_MoreEventsBtn`),
          }),
        ],
      }),
      !!i &&
        (0, U.jsx)(N, {
          className: `YZMD3BYfIGw-`,
          "flow-children": `column`,
          navEntryPreferPosition: I.PREFERRED_CHILD,
          children: (0, U.jsx)(a, {
            event: i,
            onClick: (e) => {
              r?.(), e.stopPropagation(), e.preventDefault();
            },
          }),
        }),
    ],
  });
}
var ne = (e) =>
    (0, H.createElement)(s, {
      ...e,
      key: e.match.params.oldAnnouncementGID,
      bClearDirty: !0,
      bPreview: !1,
      bPreventRedirect: !0,
    }),
  $ = class extends H.Component {
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
          let e = await f.LoadAdjacentPartnerEventsByAnnouncement(
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
        console.error(
          `EventInfiniteScrollLanding: failed to load clan info for ` +
            this.props.match.params.appid_or_vanity_str,
        ),
          this.setState({ bLoadedLandingState: !1 });
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
            partnerEventStore: f,
            trackingLocation: this.props.trackingLocation,
            showAppHeader: !0,
            bPrimaryPageFeature: e,
          })
        : this.state.bLoadedLandingState
          ? (0, U.jsx)(h, { string: D(`#Loading`) })
          : (0, U.jsx)(`div`, {});
    }
  };
k([A], $.prototype, `HideModal`, null), ($ = k([t], $));
function re(e) {
  let {
      trackingLocation: t,
      strClassName: n,
      bViewAllShowInfiniteScroll: r,
    } = e,
    [i, a, o] = M(),
    [s, c] = (0, H.useState)(null),
    [l, u] = (0, H.useState)(void 0),
    d = L(),
    f = (0, H.useCallback)(() => {
      c(null), o();
    }, [o]),
    p = (0, H.useCallback)(
      (e) => {
        t &&
          e &&
          e.BIsPartnerEvent() &&
          d.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
          d.Flush(),
          c(e),
          u(void 0),
          a();
      },
      [t, d, a],
    ),
    { last_update_event: m, rgEvents: h } = ie({ ...e, fnEventShowModal: p }),
    g = (0, H.useCallback)(() => {
      let { event_gid: e, announcement_gid: n, clan_account_id: r } = m;
      t && e && d.MarkEventRead(e, r, t) && d.Flush(), u(n), c(null), a();
    }, [m, a, d, t]);
  (0, H.useEffect)(
    () => (
      (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
        u(t), c(null), u(t), a();
      }),
      () => {
        window.fnPartnerEvent_ShowInfiniteScroll &&
          delete window.fnPartnerEvent_ShowInfiniteScroll;
      }
    ),
    [a],
  );
  let _ = T(),
    v = !!m && !!m.rtime,
    y =
      v && m.announcement_gid && (!h || h.length == 0)
        ? m.announcement_gid
        : void 0,
    b;
  return (
    v && y
      ? (b = (0, U.jsx)(te, {
          nUpdateTime: m.rtime,
          announcementGID: y,
          onClick: g,
        }))
      : v &&
        !y &&
        !_ &&
        (b = (0, U.jsx)(Q, { nUpdateTime: m.rtime, onClick: g })),
    (0, U.jsxs)(U.Fragment, {
      children: [
        (0, U.jsx)(w, {
          active: i,
          children: (0, U.jsx)(oe, {
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
function ie(e) {
  let {
      appid: t,
      event_customization: n,
      partnerEventStore: r,
      trackingLocation: i,
      fnEventShowModal: a,
    } = e,
    [o, s] = (0, H.useState)(null),
    [c, l] = (0, H.useState)(null),
    p = L(),
    [m] = u(`emgid`, void 0),
    [h] = u(`announce_gid`, void 0);
  return (
    (0, H.useEffect)(() => {
      let e = d(`EventWebRowEmbed`),
        a = !1;
      if (ae(e)) {
        (a = e.bPreLoaded), s(e.last_update_event);
        let t = [];
        e.announcementGIDList.forEach((e) => {
          let n = f.GetClanEventFromAnnouncementGID(e);
          n && t.push(n);
        }),
          l(t);
      }
      a ||
        (async () => {
          let e = await r.LoadAdjacentPartnerEvents(void 0, void 0, t, 0, 2, n);
          l(e),
            i &&
              e &&
              e.length > 0 &&
              (e
                .filter((e) => e.BIsPartnerEvent())
                .forEach((e) =>
                  p.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), i),
                ),
              p.Flush());
        })();
    }, [t, n, a, r, p, i]),
    (0, H.useEffect)(() => {
      if (c != null && (m || h)) {
        let e = c.find((e) => e.GID === m || e.AnnouncementGID == h);
        e
          ? a(e)
          : (async () => {
              let e = m
                ? await r.LoadPartnerEventFromClanEventGID(t, m, 0)
                : await r.LoadPartnerEventFromAnnoucementGID(t, h, 0);
              e && l([...c, e]);
            })();
      }
    }, [m, h, c, a, l, r, t]),
    { last_update_event: o, rgEvents: c }
  );
}
function ae(e) {
  let t = e;
  return t && typeof t == `object`
    ? t.bPreLoaded !== void 0 &&
        typeof t.bPreLoaded == `boolean` &&
        Array.isArray(t.announcementGIDList)
    : !1;
}
function oe(e) {
  let {
      appid: t,
      partnerEventStore: n,
      trackingLocation: r,
      announcementGID: i,
      eventModel: a,
      closeModal: o,
    } = e,
    s = T();
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
function se(e) {
  let { appid: t } = e,
    n = new Date(ee.NOW * 1e3),
    r = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6),
    i = Math.floor(r.getTime() / 1e3);
  return (0, U.jsx)(`div`, {
    className: `detailBox altFooter greenlight_home_box section announcements_row`,
    children: (0, U.jsx)(re, {
      appid: t,
      partnerEventStore: l,
      event_customization: { require_tags: [`workshop`], rtime_oldestevent: i },
      strClassName: W,
      trackingLocation: 6,
      bViewAllShowInfiniteScroll: !0,
    }),
  });
}
function ce(e) {
  let [t, n] = H.useState(!0);
  return (
    H.useEffect(() => {
      b.Init(new S(P.WEBAPI_BASE_URL)), f.Init(), n(!1);
    }, []),
    t
      ? null
      : (0, U.jsx)(y.Provider, {
          value: { bCanUseLink: !0 },
          children: (0, U.jsxs)(r, {
            children: [
              (0, U.jsx)(o, {
                exact: !0,
                path: c.ViewEventDetails(
                  `:appid_or_vanity_str`,
                  `:oldAnnouncementGID(\\d+)`,
                ),
                render: (e) => (0, U.jsx)(ne, { ...e }),
              }),
              (0, U.jsx)(o, {
                exact: !0,
                path: c.Listing(`:appid_or_vanity_str`),
                render: (e) =>
                  (0, U.jsx)(
                    $,
                    { ...e, bPreventDismiss: !0, trackingLocation: 6 },
                    `InfScroll_NoDismissApp_` + e.match.params.appid,
                  ),
              }),
              (0, U.jsx)(o, {
                exact: !0,
                path: c.WorkshopHub(`:appid(\\d+)`),
                render: (e) =>
                  (0, H.createElement)(se, {
                    ...e,
                    appid: +e.match.params.appid,
                    key: `Workshop` + e.match.params.appid,
                  }),
              }),
              (0, U.jsx)(o, {
                path: c.AppHub(`:appid`),
                render: (e) =>
                  (0, H.createElement)($, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.appid,
                    trackingLocation: 6,
                  }),
              }),
              (0, U.jsx)(o, {
                path: c.GroupHub(`:group_vanity`),
                render: (e) =>
                  (0, H.createElement)($, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.group_vanity,
                    trackingLocation: 6,
                  }),
              }),
              (0, U.jsx)(o, { component: E }),
            ],
          }),
        })
  );
}
export { ce as default };

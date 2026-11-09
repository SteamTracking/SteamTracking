/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  C as t,
  Pt as n,
  St as r,
  V as i,
  ot as a,
  xt as o,
} from "./libraries.js";
import { r as s } from "./partnereventmigrate.js";
import { X as c, c as l, pa as u } from "./eventrow.js";
import { l as d, m as f } from "./vodquery.js";
import { t as p } from "./eventinfinitescrollmodal.js";
import { i as m } from "./clanstore.js";
import { t as h } from "./throbber.js";
import { $ as g, G as _, U as v, W as y } from "./carouselarrows.js";
import { t as b } from "./appinfostore.js";
import { U as x } from "./clanimagepicker.js";
import {
  Cu as S,
  Ef as C,
  Hs as w,
  Kr as T,
  Ls as ee,
  Ph as E,
  Pu as D,
  Rf as O,
  Uf as k,
  Zd as A,
  _f as j,
  dm as M,
  em as N,
  eu as P,
  l as F,
  mf as I,
  om as L,
  on as R,
  pm as z,
  ud as B,
  zi as V,
  zu as H,
} from "./main.js";
import "./partnereventsavebutton.module.js";
var U = e(n(), 1),
  W = a(),
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
    s = R(),
    c = w(),
    l = k(),
    u = 2,
    d = 501;
  return (
    c.ownerWindow.window
      ? (d = c.ownerWindow.window.innerWidth)
      : s.viewportWidth && (d = s.viewportWidth.value),
    (u = d <= Z ? 1 : 2),
    n && n.length == 0 && !i
      ? null
      : (0, W.jsxs)(S, {
          className: t,
          "flow-children": `row`,
          children: [
            !!n &&
              n.length > 0 &&
              (0, W.jsx)(`div`, {
                className: `OdUWUqw0tkM-`,
                children: (0, W.jsxs)(V, {
                  children: [
                    (0, W.jsxs)(`h2`, {
                      children: [
                        j.Localize(`#EventBrowse_RecentEvents`),
                        !l &&
                          !!n &&
                          (0, W.jsx)(W.Fragment, {
                            children:
                              a && r
                                ? (0, W.jsx)(D, {
                                    className: `d-5nAi7tljQ-`,
                                    onClick: () => r(n[0]),
                                    children: j.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, W.jsx)(_, {
                                    eventModel: n[0],
                                    route: y.k_eViewWebSiteHub,
                                    className: `d-5nAi7tljQ-`,
                                    children: j.Localize(
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
                          r && !v()
                            ? (t) => {
                                (r(e), t.stopPropagation(), t.preventDefault());
                              }
                            : void 0;
                        return (0, W.jsx)(
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
function te(e) {
  return (0, W.jsxs)(`div`, {
    className: J,
    children: [
      (0, W.jsx)(`div`, {
        className: Y,
        children: (0, W.jsx)(P, { role: `presentation` }),
      }),
      (0, W.jsx)(D, {
        className: X,
        onClick: e.onClick,
        children: j.Localize(
          `#EventBrowse_LatestUpdateTime_Button`,
          I(e.nUpdateTime),
        ),
      }),
    ],
  });
}
function ne(e) {
  let { nUpdateTime: t, announcementGID: n, onClick: r } = e,
    i = n ? d.GetClanEventFromAnnouncementGID(n) : null,
    a = x;
  return (0, W.jsxs)(`div`, {
    className: G,
    children: [
      (0, W.jsxs)(`h2`, {
        children: [
          A(`#EventBrowse_LastUpdateDate`, I(t)),
          (0, W.jsx)(D, {
            className: K,
            onClick: (e) => {
              (r?.(), e.stopPropagation(), e.preventDefault());
            },
            children: A(`#EventBrowse_MoreEventsBtn`),
          }),
        ],
      }),
      !!i &&
        (0, W.jsx)(S, {
          className: `YZMD3BYfIGw-`,
          "flow-children": `column`,
          navEntryPreferPosition: H.PREFERRED_CHILD,
          children: (0, W.jsx)(a, {
            event: i,
            onClick: (e) => {
              (r?.(), e.stopPropagation(), e.preventDefault());
            },
          }),
        }),
    ],
  });
}
var re = (e) =>
    (0, U.createElement)(s, {
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
        t;
      e && typeof e == `string` && (t = e);
      let n = window.location.href.startsWith(M.COMMUNITY_BASE_URL + `groups`),
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
          ? (0, W.jsx)(h, { string: A(`#Loading`) })
          : (0, W.jsx)(`div`, {});
    }
  };
(C([E], $.prototype, `HideModal`, null), ($ = C([t], $)));
function ie(e) {
  let {
      trackingLocation: t,
      strClassName: n,
      bViewAllShowInfiniteScroll: r,
    } = e,
    [i, a, o] = B(),
    [s, c] = (0, U.useState)(null),
    [l, u] = (0, U.useState)(void 0),
    d = F(),
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
  let _ = k(),
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
        (0, W.jsx)(ee, {
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
    [c, l] = (0, U.useState)(null),
    p = F(),
    [m] = u(`emgid`, void 0),
    [h] = u(`announce_gid`, void 0);
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
          l(t));
      }
      a ||
        (async () => {
          let e = await r.LoadAdjacentPartnerEvents(void 0, void 0, t, 0, 2, n);
          (l(e),
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
              e && l([...c, e]);
            })();
      }
    }, [m, h, c, a, l, r, t]),
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
    s = k();
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
    n = new Date(N.NOW * 1e3),
    r = new Date(n.setUTCHours(0, 0, 0, 0) - 15552e6),
    i = Math.floor(r.getTime() / 1e3);
  return (0, W.jsx)(`div`, {
    className: `detailBox altFooter greenlight_home_box section announcements_row`,
    children: (0, W.jsx)(ie, {
      appid: t,
      partnerEventStore: l,
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
      (b.Init(O(new z(M.WEBAPI_BASE_URL))), d.Init(), n(!1));
    }, []),
    t
      ? null
      : (0, W.jsx)(g.Provider, {
          value: { bCanUseLink: !0 },
          children: (0, W.jsxs)(r, {
            children: [
              (0, W.jsx)(o, {
                exact: !0,
                path: c.ViewEventDetails(
                  `:appid_or_vanity_str`,
                  `:oldAnnouncementGID(\\d+)`,
                ),
                render: (e) => (0, W.jsx)(re, { ...e }),
              }),
              (0, W.jsx)(o, {
                exact: !0,
                path: c.Listing(`:appid_or_vanity_str`),
                render: (e) =>
                  (0, W.jsx)(
                    $,
                    { ...e, bPreventDismiss: !0, trackingLocation: 6 },
                    `InfScroll_NoDismissApp_` + e.match.params.appid,
                  ),
              }),
              (0, W.jsx)(o, {
                exact: !0,
                path: c.WorkshopHub(`:appid(\\d+)`),
                render: (e) =>
                  (0, U.createElement)(ce, {
                    ...e,
                    appid: +e.match.params.appid,
                    key: `Workshop` + e.match.params.appid,
                  }),
              }),
              (0, W.jsx)(o, {
                path: c.AppHub(`:appid`),
                render: (e) =>
                  (0, U.createElement)($, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.appid,
                    trackingLocation: 6,
                  }),
              }),
              (0, W.jsx)(o, {
                path: c.GroupHub(`:group_vanity`),
                render: (e) =>
                  (0, U.createElement)($, {
                    ...e,
                    key: `InfScroll_App_` + e.match.params.group_vanity,
                    trackingLocation: 6,
                  }),
              }),
              (0, W.jsx)(o, { component: T }),
            ],
          }),
        })
  );
}
export { le as default };

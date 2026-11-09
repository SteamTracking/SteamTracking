/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { kt as e, nt as t, on as n } from "./mobx.esm.js";
import {
  S as r,
  _ as i,
  g as a,
  h as o,
  i as s,
  o as c,
  p as l,
  s as u,
  x as d,
  y as f,
} from "./react-router.js";
var p = {
  BundlesEditor: (e = `:bundleid(\\d+)`) => `/bundles/view/${e}`,
  DiagData: () => `/:anything*/diagdata`,
  SalePages: () => `/sales`,
  OptInPages: () => `/optin`,
  SteamML: () => `/steamml`,
  BuildPatchNotes: () => `/apps/builds/:appid(\\d+)`,
  SteamworksEvents: () => `/steamworksevents`,
  PromotionTools: () => `/promotion`,
  PricingTools: () => `/pricing`,
  DeadlinesAdmin: () => `/deadlines/dashboard`,
  DeckVerifiedAdmin: () => `/admin/deckverified`,
  DeckCompatTestingDashboard: () => `/deckcompattesting/dashboard`,
  DeckCompatTestingAppHistory: () =>
    `/deckcompattesting/apphistory/:appid(\\d+)`,
  ContentHubPages: () => `/admin/store/contenthub`,
  StoreGameAdminRoot: () => `/admin/game/`,
  StoreAdminRoot: () => `/admin/store/`,
  StoreAdminReviewPriceProposals: () => `/admin/reviewpricesubmissions/`,
  StoreAdminPackagePricingComparison: () => `/admin/packagepricingcomparison/`,
  CreatorHomeAdminPage: () => `/admin/creatorhome/`,
  AppCommunityItem: (e = `:appid`, t = `:itemtype`) =>
    `/apps/communityitems/${e}/${t}`,
  AppLandingPage: (e = `:appid`) => `/apps/landing/${e}`,
  AppInstallerPage: (e = `:appid`) => `/apps/installer/${e}`,
  AppEconomyPage: (e = `:appid`) => `/apps/economy/${e}`,
  SDRConnections: () => `/sdr/connections/:appid(\\d+)`,
  PublisherDashboard: () => `/dashboard`,
  TimelineMarkerEditor: () => `/apps/timelinemarkers/:appid(\\d+)`,
  KeyWizardPackagePage: () => `/apps/packages/:appid(\\d+)`,
  HardwareReservationQueueMessaging: () => `/hardware/reservationqueue`,
  RecapPages: () => `/recap`,
  YearInReviewProgressMonitor: () => `/yearinreview/dashboard`,
  TaxRequirement: () => `/taxrequirement`,
  MeetSteam: () => `/meetsteam`,
  PackageLanding: (e = `:packageid`) => `/store/packagelanding/${e}`,
  PackageAdminRoot: () => `/packages/`,
  AchievementsEditor: () => `/apps/achievementsbeta/:appid(\\d+)`,
};
function m() {
  let e = document.createElement(`a`);
  e.href = t.PARTNER_BASE_URL;
  let n = e.pathname;
  return n.endsWith(`/`) || (n += `/`), n;
}
var h = n(e()),
  g = (function (e) {
    f(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.history = l(t.props)),
        t
      );
    }
    var n = t.prototype;
    return (
      (n.render = function () {
        return h.createElement(s, {
          history: this.history,
          children: this.props.children,
        });
      }),
      t
    );
  })(h.Component);
h.Component;
var _ = function (e, t) {
    return typeof e == `function` ? e(t) : e;
  },
  v = function (e, t) {
    return typeof e == `string` ? o(e, null, null, t) : e;
  },
  y = function (e) {
    return e;
  },
  b = h.forwardRef;
b === void 0 && (b = y);
function x(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var S = b(function (e, t) {
    var n = e.innerRef,
      i = e.navigate,
      a = e.onClick,
      o = d(e, [`innerRef`, `navigate`, `onClick`]),
      s = o.target,
      c = r({}, o, {
        onClick: function (e) {
          try {
            a && a(e);
          } catch (t) {
            throw (e.preventDefault(), t);
          }
          e.defaultPrevented ||
            e.button !== 0 ||
            (s && s !== `_self`) ||
            x(e) ||
            (e.preventDefault(), i());
        },
      });
    return (c.ref = y === b ? n : t || n), h.createElement(`a`, c);
  }),
  C = b(function (e, t) {
    var n = e.component,
      o = n === void 0 ? S : n,
      s = e.replace,
      l = e.to,
      u = e.innerRef,
      f = d(e, [`component`, `replace`, `to`, `innerRef`]);
    return h.createElement(c.Consumer, null, function (e) {
      !e && i(!1);
      var n = e.history,
        c = v(_(l, e.location), e.location),
        d = c ? n.createHref(c) : ``,
        p = r({}, f, {
          href: d,
          navigate: function () {
            var t = _(l, e.location),
              r = a(e.location) === a(v(t));
            (s || r ? n.replace : n.push)(t);
          },
        });
      return (
        y === b ? (p.innerRef = u) : (p.ref = t || u), h.createElement(o, p)
      );
    });
  }),
  w = function (e) {
    return e;
  },
  T = h.forwardRef;
T === void 0 && (T = w);
function E() {
  return [...arguments]
    .filter(function (e) {
      return e;
    })
    .join(` `);
}
T(function (e, t) {
  var n = e[`aria-current`],
    a = n === void 0 ? `page` : n,
    o = e.activeClassName,
    s = o === void 0 ? `active` : o,
    l = e.activeStyle,
    f = e.className,
    p = e.exact,
    m = e.isActive,
    g = e.location,
    y = e.sensitive,
    b = e.strict,
    x = e.style,
    S = e.to,
    D = e.innerRef,
    O = d(e, [
      `aria-current`,
      `activeClassName`,
      `activeStyle`,
      `className`,
      `exact`,
      `isActive`,
      `location`,
      `sensitive`,
      `strict`,
      `style`,
      `to`,
      `innerRef`,
    ]);
  return h.createElement(c.Consumer, null, function (e) {
    !e && i(!1);
    var n = g || e.location,
      o = v(_(S, n), n),
      c = o.pathname,
      d = c && c.replace(/([.+*?=^!:${}()[\]|/\\])/g, `\\$1`),
      k = d
        ? u(n.pathname, { path: d, exact: p, sensitive: y, strict: b })
        : null,
      A = !!(m ? m(k, n) : k),
      j = typeof f == `function` ? f(A) : f,
      M = typeof x == `function` ? x(A) : x;
    A && ((j = E(j, s)), (M = r({}, M, l)));
    var N = r(
      { "aria-current": (A && a) || null, className: j, style: M, to: o },
      O,
    );
    return w === T ? (N.innerRef = D) : (N.ref = t || D), h.createElement(C, N);
  });
});
export { p as i, C as n, m as r, g as t };

import { _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./react-router.js";
var _ = {
  BundlesEditor: (_ = `:bundleid(\\d+)`) => `/bundles/view/${_}`,
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
  AppCommunityItem: (_ = `:appid`, _ = `:itemtype`) =>
    `/apps/communityitems/${_}/${_}`,
  AppLandingPage: (_ = `:appid`) => `/apps/landing/${_}`,
  AppInstallerPage: (_ = `:appid`) => `/apps/installer/${_}`,
  AppEconomyPage: (_ = `:appid`) => `/apps/economy/${_}`,
  SDRConnections: () => `/sdr/connections/:appid(\\d+)`,
  PublisherDashboard: () => `/dashboard`,
  TimelineMarkerEditor: () => `/apps/timelinemarkers/:appid(\\d+)`,
  KeyWizardPackagePage: () => `/apps/packages/:appid(\\d+)`,
  HardwareReservationQueueMessaging: () => `/hardware/reservationqueue`,
  RecapPages: () => `/recap`,
  YearInReviewProgressMonitor: () => `/yearinreview/dashboard`,
  TaxRequirement: () => `/taxrequirement`,
  MeetSteam: () => `/meetsteam`,
  PackageLanding: (_ = `:packageid`) => `/store/packagelanding/${_}`,
  PackageAdminRoot: () => `/packages/`,
  AchievementsEditor: () => `/apps/achievementsbeta/:appid(\\d+)`,
};
function _() {
  let _ = document.createElement(`a`);
  _.href = _.PARTNER_BASE_URL;
  let _ = _.pathname;
  return (_.endsWith(`/`) || (_ += `/`), _);
}
var _ = _(_()),
  _ = (function (_) {
    _(_, _);
    function _() {
      var _,
        _ = [...arguments];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.history = _(_.props)),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.render = function () {
        return _.createElement(_, {
          history: this.history,
          children: this.props.children,
        });
      }),
      _
    );
  })(_.Component);
_.Component;
var _ = function (_, _) {
    return typeof _ == `function` ? _(_) : _;
  },
  _ = function (_, _) {
    return typeof _ == `string` ? _(_, null, null, _) : _;
  },
  _ = function (_) {
    return _;
  },
  _ = _.forwardRef;
_ === void 0 && (_ = _);
function _(_) {
  return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
}
var _ = _(function (_, _) {
    var _ = _.innerRef,
      _ = _.navigate,
      _ = _.onClick,
      _ = _(_, [`innerRef`, `navigate`, `onClick`]),
      _ = _.target,
      _ = _({}, _, {
        onClick: function (_) {
          try {
            _ && _(_);
          } catch (_) {
            throw (_.preventDefault(), _);
          }
          _.defaultPrevented ||
            _.button !== 0 ||
            (_ && _ !== `_self`) ||
            _(_) ||
            (_.preventDefault(), _());
        },
      });
    return ((_.ref = _ === _ ? _ : _ || _), _.createElement(`a`, _));
  }),
  _ = _(function (_, _) {
    var _ = _.component,
      _ = _ === void 0 ? _ : _,
      _ = _.replace,
      _ = _._,
      _ = _.innerRef,
      _ = _(_, [`component`, `replace`, `to`, `innerRef`]);
    return _.createElement(_.Consumer, null, function (_) {
      !_ && _(!1);
      var _ = _.history,
        _ = _(_(_, _.location), _.location),
        _ = _ ? _.createHref(_) : ``,
        _ = _({}, _, {
          href: _,
          navigate: function () {
            var _ = _(_, _.location),
              _ = _(_.location) === _(_(_));
            (_ || _ ? _.replace : _.push)(_);
          },
        });
      return (
        _ === _ ? (_.innerRef = _) : (_.ref = _ || _), _.createElement(_, _)
      );
    });
  }),
  _ = function (_) {
    return _;
  },
  _ = _.forwardRef;
_ === void 0 && (_ = _);
function _() {
  return [...arguments]
    .filter(function (_) {
      return _;
    })
    .join(` `);
}
_(function (_, _) {
  var _ = _[`aria-current`],
    _ = _ === void 0 ? `page` : _,
    _ = _.activeClassName,
    _ = _ === void 0 ? `active` : _,
    _ = _.activeStyle,
    _ = _.className,
    _ = _.exact,
    _ = _.isActive,
    _ = _.location,
    _ = _.sensitive,
    _ = _.strict,
    _ = _.style,
    _ = _._,
    _ = _.innerRef,
    _ = _(_, [
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
  return _.createElement(_.Consumer, null, function (_) {
    !_ && _(!1);
    var _ = _ || _.location,
      _ = _(_(_, _), _),
      _ = _.pathname,
      _ = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, `\\$1`),
      _ = _
        ? _(_.pathname, {
            path: _,
            exact: _,
            sensitive: _,
            strict: _,
          })
        : null,
      _ = !!(_ ? _(_, _) : _),
      _ = typeof _ == `function` ? _(_) : _,
      _ = typeof _ == `function` ? _(_) : _;
    _ && ((_ = _(_, _)), (_ = _({}, _, _)));
    var _ = _(
      {
        "aria-current": (_ && _) || null,
        className: _,
        style: _,
        _: _,
      },
      _,
    );
    return (
      _ === _ ? (_.innerRef = _) : (_.ref = _ || _), _.createElement(_, _)
    );
  });
});

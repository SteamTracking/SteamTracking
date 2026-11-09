import { _, _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _, _ } from "./src.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./promotionoperationowner.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./dialogs.js";
import "./react-router.js";
import { _ } from "./useQuery.js";
import "./storeitem.js";
import { _ } from "./primarypartnercontext.js";
import { _, _ } from "./partnereventstore.js";
import { _, _, _, _, _, _, _ } from "./dashboardutilities.js";
import { _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _ } from "./eventdevfeaturestore.js";
import { _, _, _ } from "./partnereventutils.js";
import "./steamid.js";
import { _, _, _ } from "./bbcodeeditor.js";
import { _ } from "./numberformats.js";
import { _ } from "./meetsteamclanid.js";
import { _ } from "./creatorhomestore.js";
import { _, _ } from "./storeitemhooks.js";
import { _, _ } from "./recentapps.js";
import { _ } from "./storebrowsesetup.js";
import { _, _, _, _ } from "./partnervalvecontactstore.js";
import { _, _, _, _, _ } from "./steammessages_partnerdeadline_pb.js";
import { _ } from "./adminaccount.js";
import { _ } from "./profilestore.js";
import { _ } from "./seasonpasshooks.js";
var _ = _(_()),
  _ = `-bcJANy5VMA-`,
  _ = `RovZ0LsFtt8-`,
  _ = `_7lNY35dQfo4-`,
  _ = `Sb1tlgmh6Y8-`,
  _ = `ni2dNmXBX1k-`,
  _ = `ERoEwjtja6E-`,
  _ = `_0tXgdz8uE6Y-`,
  _ = `b8JzMfOLVi8-`,
  _ = _();
function _(_) {
  let { viewDate: _ } = _,
    _ = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `short`,
    }).format(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      now: _,
      viewDate: _,
      events: _,
      filterVisibleEventIds: _,
      bShowPreceedingWeeks: _,
      bShowFollowingWeeks: _,
      fnScrollToDay: _,
      hoverEvent: _,
      compareEvents: _,
      colorPriority: _,
    } = _,
    _ = _(_),
    _ = _(_, (_) => _(_.startDate)),
    _ = _(_, -_.getDay()),
    _ = new Date(_.getFullYear(), _.getMonth() + 1, 0).getDate(),
    _ =
      (_ +
        _.getDay() +
        ((_.getDay() + _) % 7 == 0 ? 0 : 7 - ((_.getDay() + _) % 7))) /
      7,
    _ = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    }),
    _ = _.useMemo(
      () =>
        Array.from(
          {
            length: _ * 7,
          },
          (_, _) => _,
        ).map(() => _.createRef()),
      [_],
    );
  _.useEffect(() => {
    for (let _ = 0; _ < _; _++) {
      let _ = _(_, _ * 7);
      for (let _ = 0; _ < 7; _++) {
        let _ = _(_, _),
          _ = _(_),
          _ = _.get(Math.floor(_.getTime() / 1e3))?.sort(_),
          _,
          _,
          _;
        if (_) {
          let _ = _.find((_) => _.note);
          _ = _ ? _.color : void 0;
          let _ = _.filter((_) => !_.note);
          _ = _.length > 0 ? _[0].color : void 0;
          let _ = _.filter((_) => _.color != _);
          _ = _.length > 0 ? _[0].color : void 0;
        }
        _
          ? _[_ * 7 + _].current?.style.setProperty(`--note-color`, _)
          : _[_ * 7 + _].current?.style.removeProperty(`--note-color`),
          _
            ? _[_ * 7 + _].current?.style.setProperty(`--day-color1`, _)
            : _[_ * 7 + _].current?.style.removeProperty(`--day-color1`),
          (_ ?? _)
            ? _[_ * 7 + _].current?.style.setProperty(`--day-color2`, _ ?? _)
            : _[_ * 7 + _].current?.style.removeProperty(`--day-color2`);
      }
    }
  }, [_, _, _, _, _]);
  let _ = [];
  for (let _ = 0; _ < _; _++) {
    let _ = [],
      _ = _(_, _ * 7);
    for (let _ = 0; _ < 7; _++) {
      let _ = _(_, _),
        _ = _(_),
        _ = _.getMonth() === _.getMonth(),
        _ = _.getMonth() === _.getMonth() || (_ && _ <= _) || (_ && _ >= _),
        _ = _.getTime() === _.getTime(),
        _ = _.get(Math.floor(_.getTime() / 1e3))?.sort(_),
        _ = _?.every((_) => _.has(_._)),
        _ = _?.some((_) => _.note),
        _ =
          _ &&
          _.getTime() >= _(_.startDate).getTime() &&
          _.getTime() <= _(_.endDate).getTime(),
        _ = _(
          _,
          !_ && !_ && `_1CVPS7mLrfw-`,
          !_ && `KOVhvGxr6og-`,
          _ && `_7H1LYjC8bPE-`,
          _ && _ && `DqfqRgwcIR8-`,
          !_ && _ && `MQT5hyfOB2Q-`,
          _ && _ && `_9VpjQYOBKgg-`,
        );
      _.push(
        (0, _.jsx)(
          _,
          {
            date: _,
            daysEvents: _,
            tooltipDateFormat: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              onClick: () => _(_),
              ref: _[_ * 7 + _],
              children: _.getDate(),
            }),
          },
          _,
        ),
      );
    }
    _.push(
      (0, _.jsx)(
        `div`,
        {
          className: _,
          children: _,
        },
        _,
      ),
    );
  }
  return (0, _.jsx)(_.Fragment, {
    children: _,
  });
}
function _(_) {
  let { date: _, daysEvents: _, tooltipDateFormat: _, children: _ } = _;
  if (!_)
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _ = (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.format(_),
      }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            event: _,
          },
          _._,
        ),
      ),
    ],
  });
  return (0, _.jsx)(_, {
    toolTipContent: _,
    children: _,
  });
}
function _(_) {
  let { event: _ } = _;
  _(_);
  let _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      _.current?.style.setProperty(`--event-color`, _.color);
    }, [_.color]),
    (0, _.jsxs)(`div`, {
      className: _,
      ref: _,
      children: [
        _.title,
        _.valveOnly &&
          (0, _.jsx)(`span`, {
            className: void 0,
            children: ` (VO)`,
          }),
      ],
    })
  );
}
function _(_) {
  let _ = new Intl.DateTimeFormat(navigator.language, {
      weekday: `short`,
    }),
    _ = [...Array(7).keys()].map((_) => _.format(new Date(2024, 0, _ + 7)));
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        `div`,
        {
          className: _,
          children: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let _ = _();
  _.useEffect(() => {
    let _ = _.registerForChange?.(() => _());
    return () => _?.Unregister();
  }, [_, _]);
}
var _ = class {
  m_eventsChanged = new _();
  m_rgHiddenIds = new Set();
  m_rgAdditionalEvents = new Map();
  EventsChanged() {
    return this.m_eventsChanged;
  }
  GetHiddenIds() {
    return this.m_rgHiddenIds;
  }
  SetHidden(_, _) {
    _ ? this.m_rgHiddenIds.add(_) : this.m_rgHiddenIds.delete(_),
      this.m_eventsChanged.Dispatch();
  }
  GetAdditionalEvents() {
    return Array.from(this.m_rgAdditionalEvents.values());
  }
  AddAdditionalEvent(_) {
    return (
      this.m_rgAdditionalEvents.set(_._, _),
      this.m_eventsChanged.Dispatch(),
      () => this.RemoveAdditionalEvent(_._)
    );
  }
  RemoveAdditionalEvent(_) {
    this.m_rgAdditionalEvents.delete(_), this.m_eventsChanged.Dispatch();
  }
};
function _(_) {
  let [_, _] = _.useState([]),
    [_, _] = _.useState(0);
  return (
    _(_.EventsChanged(), () => {
      _(_.GetAdditionalEvents()), _((_) => _ + 1);
    }),
    _
  );
}
function _(_) {
  let [_, _] = _.useState(new Set()),
    [_, _] = _.useState(0);
  return (
    _(_.EventsChanged(), () => {
      _(_.GetHiddenIds()), _((_) => _ + 1);
    }),
    _
  );
}
var _ = class _ {
  m_accountId;
  m_partnerId;
  m_serviceTransport;
  m_eventsChanged = new _();
  m_rgDismisses = new Map();
  m_setDismisses = new Set();
  static s_Singleton;
  static Get() {
    return (_.s_Singleton ||= new _()), _.s_Singleton;
  }
  async Init(_, _) {
    (this.m_accountId = _),
      (this.m_partnerId = _),
      (this.m_serviceTransport = _.Get()
        .GetPromotionTransport()
        .GetServiceTransport());
    let _ = _.Init(_);
    _.Body().set_accountid(this.m_accountId),
      _.Body().set_partnerid(this.m_partnerId),
      _.Body().set_rtime_after(
        Math.floor(new Date().getTime() / 1e3 - 14 * _.PerDay),
      );
    let _ = await _.GetDismissTimeRange(this.m_serviceTransport, _);
    if (_.BSuccess()) {
      for (let _ of _.Body().dismiss_list())
        if (_.state() == 1) {
          let _ = this.m_rgDismisses.get(_.key_json()) ?? [];
          _.push(_.dismiss_id()), this.m_rgDismisses.set(_.key_json(), _);
        }
      this.DismissesUpdated();
    }
  }
  DismissesUpdated() {
    (this.m_setDismisses = new Set(
      Array.from(this.m_rgDismisses).map(([_, _]) => _),
    )),
      this.m_eventsChanged.Dispatch();
  }
  EventsChanged() {
    return this.m_eventsChanged;
  }
  GetDismissedEvents() {
    return (
      _(this.m_serviceTransport, `Must call Init first`), this.m_setDismisses
    );
  }
  GetDismissState(_) {
    return this.m_rgDismisses.get(_)?.length > 0;
  }
  async SetDismiss(_, _) {
    _(this.m_serviceTransport, `Must call Init first`);
    let _ = this.m_rgDismisses.get(_) ?? [];
    _.push(null), this.m_rgDismisses.set(_, _), this.DismissesUpdated();
    let _ = _.Init(_),
      _ = new _();
    _.set_accountid(this.m_accountId),
      _.set_partnerid(this.m_partnerId),
      _.set_key_json(_),
      _.set_state(1),
      _.set_rtime_create(Math.floor(new Date().getTime() / 1e3)),
      _.set_rtime_validity(Math.floor(_.getTime() / 1e3)),
      _.Body().add_dismiss_list(_);
    let _ = await _.CreateDismiss(this.m_serviceTransport, _);
    if (_.BSuccess() && _.Body().dismiss_list().length > 0) {
      let _ = (this.m_rgDismisses.get(_) ?? []).filter((_) => _ !== null);
      _.push(_.Body().dismiss_list()[0].dismiss_id()),
        this.m_rgDismisses.set(_, _);
    }
  }
  async ClearDismiss(_) {
    _(this.m_serviceTransport, `Must call Init first`);
    let _ = this.m_rgDismisses.get(_);
    if ((this.m_rgDismisses.delete(_), this.DismissesUpdated(), _))
      for (let _ of _) {
        let _ = _.Init(_);
        _.Body().set_dismiss_id(_),
          await _.DeleteDismiss(this.m_serviceTransport, _);
      }
  }
};
function _() {
  let [_, _] = _.useState(_.Get().GetDismissedEvents()),
    [_, _] = _.useState(0);
  return (
    _(_.Get().EventsChanged(), () => {
      _(_.Get().GetDismissedEvents()), _((_) => _ + 1);
    }),
    _
  );
}
var _ = `tVHOfgHRybk-`,
  _ = `KIGqyEThJKk-`,
  _ = `gMBAaE-Jr5Q-`,
  _ = `EZNV3Nld6Hc-`,
  _ = `_8DiCl1vDkY8-`;
function _() {
  return _.useMemo(
    () =>
      _(`rgUpcomingReleaseApps`, `application_config`)?.map((_) => {
        let _ = new Date(_.releaserequest.release_date * 1e3),
          _ = _.type == `DLC`,
          _ = _ ? `release-dlc` : `release-game`;
        return {
          title: _.name,
          startDate: _,
          endDate: _,
          eventType: _,
          _: _.appid.toString(),
          eventTypeName: _(
            _
              ? `#Dashboard_UpcomingEvents_EventType_Release_DLC`
              : `#Dashboard_UpcomingEvents_EventType_Release`,
          ),
          eventTypeSortWeight: _ ? 10 : 0,
          getElement: () =>
            (0, _.jsx)(_, {
              app: _,
            }),
          passesFilter: (_) => _ == 2,
        };
      }) ?? [],
    [],
  );
}
function _(_) {
  let { app: _ } = _,
    [_] = _(_.appid, 0, {
      include_assets: !0,
      include_release: !0,
    }),
    _ = !!_?.GetName();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        app: _,
        storeItem: _,
        hasStoreItem: _,
      }),
      (0, _.jsx)(_, {
        app: _,
        hasStoreItem: _,
      }),
    ],
  });
}
function _(_) {
  let { app: _, storeItem: _, hasStoreItem: _ } = _,
    _ = _.PARTNER_BASE_URL + `apps/landing/` + _.appid,
    _ = _ ? _.GetName() : _.name,
    _ = _?.GetAssets().GetHeaderURL();
  return (0, _.jsxs)(_, {
    hasImage: !!_,
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
      }),
      (0, _.jsxs)(_, {
        hasImage: !!_,
        children: [
          (0, _.jsx)(_, {
            text: _,
            url: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _.releaserequest &&
                (0, _.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: _(`#App_Landing_SpecifiedReleaseDate`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: _(_.releaserequest.release_date),
                    }),
                  ],
                }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: `iSMHkhZtJis-`,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: _(`#App_Landing_CustomersSeeReleaseDate`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: _.GetFormattedSteamReleaseDate(),
                    }),
                  ],
                }),
              _.earliestadvancedaccessdate > 0 &&
                (0, _.jsxs)(`div`, {
                  className: _(`iSMHkhZtJis-`, `RcifCC6jW3A-`),
                  children: [
                    (0, _.jsxs)(`span`, {
                      className: `ZKAujNbJpME-`,
                      children: [
                        _(`#App_Landing_AdvancedAccessDate`),
                        (0, _.jsx)(_, {
                          tooltip: _(`#App_Landing_AdvancedAccessDate_ttip`),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`span`, {
                      className: `_0hYkoDNS7B0-`,
                      children: _(_.earliestadvancedaccessdate),
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
function _(_) {
  return _
    ? `${_(_)} ${_(
        _,
        {},
        {
          timeZoneName: `short`,
        },
      )}`
    : _(`#App_Landing_UnsetReleaseDate`);
}
function _(_) {
  let { app: _, hasStoreItem: _ } = _,
    _ = _(_.releasestate, _),
    _ = _(
      _,
      _.releasestate == `prerelease` && `-PegX2P-Uso-`,
      _.releasestate == `released` && `_0SILAZhIcgo-`,
    );
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#Dashboard_UpcomingEvents_ReleaseStatusLabel`),
        }),
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _.sText,
            }),
            _.sTooltip &&
              (0, _.jsx)(_, {
                tooltip: _.sTooltip,
              }),
          ],
        }),
      ],
    }),
  });
}
var _ = `j-KLJ7Mtr80-`,
  _ = `IvgNTZF5PaM-`,
  _ = `s-5fYfwRBqo-`,
  _ = `RazA3zDRLMM-`,
  _ = `-rKdDl3YL68-`,
  _ = `t0jMkZAhUvc-`,
  _ = `_87cPEnGNg-A-`,
  _ = `Rulq0q4y6GY-`,
  _ = `lfrlL7fm77Q-`,
  _ = class _ {
    m_rgOptIns;
    m_rgOptInComputed = new Map();
    static async Construct() {
      let _ = new _();
      return await _.Init(), _;
    }
    async Init() {
      let _ = await fetch(`${_.PARTNER_BASE_URL}/optin/ajaxoptinsfordashboard`);
      try {
        (this.m_rgOptIns = await _.json()),
          this.m_rgOptIns && _.ExtractOptInDefinitions(this.m_rgOptIns);
      } catch {
        this.m_rgOptIns = {};
      }
    }
    static ExtractOptInDefinitions(_) {
      for (let _ of Object.keys(_)) {
        let _ = _[_].description,
          _ = _(_?.jsondata);
        delete _?.jsondata, _ && (_[_].description.definition = _);
      }
    }
    GetInfo(_) {
      if (!_) return;
      if (this.m_rgOptInComputed.has(_)) return this.m_rgOptInComputed.get(_);
      let _ = this.m_rgOptIns?.[_];
      if (!_) {
        this.m_rgOptInComputed.set(_, void 0);
        return;
      }
      let _ = new Set(_.invited_appids),
        _ = _.description.definition.invitation_only
          ? _.summary?.apps_eligible.filter((_) => _.has(_.appid))
          : _.summary?.apps_eligible,
        _ = {
          description: _.description,
          rgEligibleApps: _,
          rgRegisteredApps: _.summary?.apps_in,
          rgFeaturedApps: _.featured_appids,
        };
      return this.m_rgOptInComputed.set(_, _), _;
    }
  };
function _() {
  return _({
    queryKey: [`DashboardOptInStore`],
    queryFn: () => _.Construct(),
    staleTime: 1 / 0,
  }).data;
}
function _(_) {
  return _()?.GetInfo(_);
}
function _() {
  return _.useMemo(() => {
    let _ = _(`rgPartnerDashboardAssets`, `application_config`);
    return _
      ? Object.keys(_).reduce((_, _) => _.set(_, _[_]), new Map())
      : new Map();
  }, []);
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _.useMemo(() => {
      let _ = _(`rgPartnerPromotions`, `application_config`),
        _ = _?.rgPlans
          ?.map((_) => _(_.partner_readonly_jsondata))
          .filter((_) => _ && _._),
        _ = _?.rgPlans
          ?.map((_) => ({
            plan: _,
            input: _(_.input_jsondata),
          }))
          .filter((_) => !!_.input)
          .reduce((_, _) => _.set(_.plan.promotion_id, _.input), new Map()),
        _ = new Set(_?.rgHiddenPlanIDs ?? []);
      return (
        _?.map((_) => {
          if (!_.start_date || (new Date(_.end_date * 1e3) < _ && !_(_, _)))
            return null;
          let _ = _.get(_._);
          if (
            (_.type == `assetrequest` &&
              new Date(_.start_date * 1e3) < _ &&
              _?.enable_input &&
              _.submitting_accountid) ||
            (_.type == `launchtracking` && !_?.enable_input)
          )
            return null;
          let _ = _?.GetInfo(_.opt_in_id),
            _ = _.type == `assetrequest` && _ && !_.enable_input,
            _ =
              _.has(_._) ||
              ((_.type == `nextfest` || _.type == `themesale`) && _ && !_) ||
              _,
            _ = (_.type == `nextfest` || _.type == `themesale`) && !_,
            _ =
              _.type != `seasonalsale` &&
              _ &&
              _.rgEligibleApps &&
              _.rgEligibleApps.length == 0 &&
              _.rgRegisteredApps &&
              _.rgRegisteredApps.length == 0;
          return new _(
            _._,
            _,
            _,
            _,
            _,
            _,
            new Date(_.start_date * 1e3),
            new Date(_.end_date * 1e3),
            `event`,
            _(_, _),
            _,
            _,
            _,
            _,
          );
        }).filter((_) => !!_) ?? []
      );
    }, [_, _, _]),
    _ = _(_);
  return _.useMemo(() => [..._, ..._], [_, _]);
}
var _ = class {
  m_changedCallbacks = new _();
  m_partnerId;
  m_plan;
  m_assetInput;
  m_optIn;
  id;
  title;
  startDate;
  endDate;
  eventType;
  eventTypeName;
  valveOnly;
  editURL;
  loading = !1;
  dimmed = !1;
  getElement;
  getCapsuleElement;
  constructor(_, _, _, _, _, _, _, _, _, _, _, _, _, _) {
    (this.m_partnerId = _),
      (this.valveOnly = _),
      (this.m_plan = _),
      (this.m_assetInput = _),
      (this.m_optIn = _),
      (this._ = _),
      (this.title = _(_.name, _.type, _, _.start_date)),
      (this.startDate = _),
      (this.endDate = _),
      (this.eventType = _),
      (this.eventTypeName = _),
      (this.editURL = `${_.PARTNER_BASE_URL}promotion/planning/edit/${this.m_plan._}`),
      (this.loading = _),
      (this.dimmed = _),
      (this.getElement = () =>
        _({
          eventData: this,
        })),
      (this.getCapsuleElement = () =>
        _?.({
          eventData: this,
        }));
  }
  passesFilter = (_) => _ == 1;
  dataChanged() {
    this.m_changedCallbacks.Dispatch();
  }
  registerForChange(_) {
    return this.m_changedCallbacks.Register(_);
  }
  clone(_, _, _, _, _) {
    let _ = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return (
      (_.m_changedCallbacks = new _()),
      (_._ = _),
      (_.startDate = _),
      (_.endDate = _),
      (_.eventType = _),
      (_.eventTypeName = _),
      _
    );
  }
};
_([_], _.prototype, `dataChanged`, null);
function _(_, _) {
  if (_(_, _))
    return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_recap`);
  switch (_.type) {
    case `midweek`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_midweek`);
    case `weekenddeal`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_weekenddeal`);
    case `saleevent`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_saleevent`);
    case `themesale`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_themesale`);
    case `nextfest`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_nextfest`);
    case `seasonalsale`:
      return _(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_seasonalsale`,
      );
    case `informational`:
      return _(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_informational`,
      );
    case `launchtracking`:
      return _(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_launchtracking`,
      );
    case `dailydeal`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_dailydeal`);
    case `vacation`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_vacation`);
    case `important`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_important`);
    case `preload`:
      return _(`#Dashboard_UpcomingEvents_EventType_PromotionPlan_preload`);
    case `assetrequest`:
      return _(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest`,
      );
  }
}
function _(_, _) {
  return (
    _.type == `nextfest` && new Date(_.end_date * 1e3).getTime() < _.getTime()
  );
}
function _(_) {
  let { eventData: _ } = _;
  return _(_(), _.m_plan) && _.m_plan.type == `nextfest`
    ? (0, _.jsx)(_, {
        eventData: _,
      })
    : _.m_plan.type == `nextfest` || _.m_plan.type === `themesale`
      ? (0, _.jsx)(_, {
          eventData: _,
        })
      : (0, _.jsx)(_, {
          eventData: _,
        });
}
function _(_) {
  let { eventData: _ } = _;
  return _(_(), _.m_plan) && _.m_plan.type == `nextfest`
    ? (0, _.jsx)(_, {
        eventData: _,
      })
    : _.m_plan.type == `nextfest` || _.m_plan.type === `themesale`
      ? (0, _.jsx)(_, {
          eventData: _,
        })
      : (0, _.jsx)(_, {
          eventData: _,
        });
}
function _(_) {
  let { eventData: _ } = _,
    _ = _.m_plan,
    [_] = _(_.store_item_id, _.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [_] = _(_.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = _ ?? _,
    _ = _.m_plan.type == `seasonalsale`;
  _(_);
  let _ =
      _.type == `seasonalsale`
        ? `${_.PARTNER_BASE_URL}doc/marketing/discounts/seasonalsales`
        : void 0,
    _ = _?.GetAssets().GetHeaderURL();
  _ ??= _ ? _.PARTNER_BASE_URL + `apps/landing/` + _.GetAppID() : null;
  let _ = _(_.LANGUAGE),
    { eventModel: _, bLoading: _ } = _(
      _.sale_clan_account,
      _.sale_clan_event_gid,
    );
  (_ ??= !_ && _?.GetImageURL(`capsule`, _, _.capsule_main)),
    (_ ??= !_ && _(_));
  let _ = [];
  _.valveOnly &&
    (_.type != `seasonalsale` &&
      _.m_partnerId &&
      !_.m_plan.store_item_id &&
      !_.m_plan.discount_event_id &&
      _.push(
        `In order to be visible to partners, plans must have access through a linked store item or a discount event.`,
      ),
    _.type == `assetrequest` &&
      _.m_assetInput &&
      !_.m_assetInput.enable_input &&
      _.push(
        `Asset request with "Enable requesting featuring assets from partner" disabled.`,
      ));
  let _ =
      _.discount_event_id && !_.m_assetInput?.enable_input
        ? `${_.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${_.discount_event_id}`
        : void 0,
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          url: _,
          children: _(
            `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
          ),
        }),
        _ &&
          (0, _.jsx)(_, {
            url: _,
            children: _(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
        (0, _.jsx)(_, {
          url: _.asset_kit_url,
          children: _(`#Dashboard_UpcomingEvents_Events_OptIn_Button_AssetKit`),
        }),
      ],
    }),
    _ = _(_);
  return (0, _.jsxs)(_, {
    dimmed: _.dimmed,
    backgroundColor: _,
    hasImage: !!_,
    children: [
      (0, _.jsx)(_, {
        warnings: _,
        eventName: _.title,
        startTime: _.start_date,
        endTime: _.end_date,
        eventUrl: _,
        imageUrl: _,
        additionalButtons: _,
        bigName: _,
      }),
      (0, _.jsx)(_, {
        eventData: _,
      }),
    ],
  });
}
function _(_) {
  let { eventData: _ } = _,
    _ = _.m_plan,
    [_] = _(_.store_item_id, _.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    [_] = _(_.advertising_appid, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = (_ ?? _)?.GetAssets().GetHeaderURL(),
    _ = _(_.LANGUAGE),
    { eventModel: _, bLoading: _ } = _(
      _.sale_clan_account,
      _.sale_clan_event_gid,
    );
  return (
    (_ ??= !_ && _?.GetImageURL(`capsule`, _, _.capsule_main)),
    (0, _.jsx)(_, {
      imageUrl: _,
    })
  );
}
function _(_) {
  let { eventData: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.m_plan,
    _ = _.m_optIn,
    _ = _.opt_in_id
      ? `${_.PARTNER_BASE_URL}optin/sale/${_.opt_in_id?.replace(`sale_`, ``)}`
      : void 0,
    _ = [];
  _.valveOnly &&
    ((_.sale_clan_account && _.sale_clan_event_gid) || _.push(`no sale event`),
    _.opt_in_id || _.push(`no opt-in`));
  let _;
  if (_.type == `nextfest` && _.eventType == `deadline`) {
    let _ = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(
      new Date(_.m_optIn.description.definition.optin_deadline_date * 1e3),
    );
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses`,
            _,
          ),
        }),
        (0, _.jsx)(`div`, {
          children: _(
            `#Dashboard_UpcomingEvents_Events_Deadline_RegistrationCloses_Description`,
          ),
        }),
      ],
    });
  }
  _(_), _(_);
  let _ = _?.description.start_date ?? _.start_date,
    _ = _?.description.end_date ?? _.end_date,
    _ = _?.description?.definition?.localized_optin_banner?.[_.LANGUAGE],
    _ = _?.description.opt_in_name && _ && _(_?.description.opt_in_name, _, _),
    _ = _().get(`optin_placeholder_banner`),
    _ = _ ?? _,
    _ = _ ? void 0 : _(_._),
    _ = (_, _) =>
      _?.map((_) => ({
        details: _,
        bRegistered: _,
      })) ?? [],
    _ = _.useMemo(
      () => _(_(_?.rgEligibleApps, !1), _(_?.rgRegisteredApps, !0)),
      [_?.rgEligibleApps, _?.rgRegisteredApps],
    ),
    _ = _?.length > 0;
  return (0, _.jsxs)(_, {
    buttonPosition: _ ? `bottom` : void 0,
    backgroundImageUrl: _,
    backgroundColor: _,
    dimmed: _.dimmed,
    children: [
      (0, _.jsx)(_, {
        warnings: _,
        eventName: _.title,
        eventDescription: _,
        startTime: _,
        endTime: _,
        eventUrl: _,
        inlineDate: !0,
      }),
      _ &&
        (0, _.jsx)(_, {
          eventData: _,
          eventUrl: _,
          optIn: _,
          invitedAndRegisteredApps: _,
        }),
    ],
  });
}
function _(_) {
  let { eventData: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.m_optIn,
    _ = _?.description?.definition?.localized_optin_banner?.[_.LANGUAGE],
    _ = _?.description.opt_in_name && _ && _(_?.description.opt_in_name, _, _);
  return (0, _.jsx)(_, {
    imageUrl: _,
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  _.useEffect(() => {
    let _;
    if (
      !_._.endsWith(`_nextfestDeadline`) &&
      _.m_plan.type == `nextfest` &&
      _.m_optIn?.description.definition.optin_deadline_date &&
      _.m_optIn.rgEligibleApps?.length > 0 &&
      _.m_optIn.rgRegisteredApps
    ) {
      let _ = new Date(
        _.m_optIn.description.definition.optin_deadline_date * 1e3,
      );
      if (_ && _ > _) {
        let _ = _.clone(
          _._ + `_nextfestDeadline`,
          _,
          _,
          `deadline`,
          _(
            `#Dashboard_UpcomingEvents_EventType_PromotionPlan_registration_reminder`,
          ),
        );
        (_.getElement = () =>
          (0, _.jsx)(_, {
            eventData: _,
          })),
          (_ = _.AddAdditionalEvent(_));
      }
    }
    return _;
  }, [_, _, _]);
}
function _(_) {
  let _ = _(),
    _ =
      (_.m_plan.type == `seasonalsale` || _.m_plan.type == `themesale`) &&
      _.eventType != `deadline` &&
      _.eventType != `deadline-urgent` &&
      _.m_optIn?.description?.opt_in_name &&
      _.m_optIn.rgEligibleApps &&
      _.m_optIn.rgRegisteredApps &&
      _.m_optIn.rgFeaturedApps &&
      _.m_optIn.description.definition.additional_featuring_section_enabled,
    _ = _.useMemo(
      () =>
        _.m_optIn?.rgRegisteredApps?.map((_) => ({
          appid: _.appid,
          appName: _.app_name,
        })) ?? [],
      [_.m_optIn?.rgRegisteredApps],
    ),
    _ = _(_.m_partnerId, _, _.m_plan.start_date, _.m_plan.end_date),
    _ = _(),
    _ = _(),
    _ = _.setManageDiscountsAppIDs;
  _.useEffect(() => {
    if (!_ || !(_.m_optIn?.rgFeaturedApps?.length > 0)) return;
    let _ = [];
    for (let _ of _(_.m_optIn.rgEligibleApps, _.m_optIn.rgRegisteredApps)) {
      if (!_.m_optIn?.rgFeaturedApps.includes(_.appid) || !_?.has(_.appid))
        continue;
      let _ = _.m_optIn.rgRegisteredApps?.some((_) => _.appid == _.appid),
        _ = _?.some((_) => _.appid == _.appid);
      if (!_) {
        if (_.m_optIn.description.definition.collect_trailer_permissions) {
          let _ = new Date(
            _.m_optIn.description.definition.collect_demo_deadline * 1e3,
          );
          if (_ > _) {
            let _ = _.clone(
              _.m_plan._ + `_featuredTrailerDeadline_` + _.appid,
              _,
              _,
              `deadline`,
              _(
                `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailer_Header`,
              ),
            );
            (_.getElement = () =>
              (0, _.jsx)(_, {
                eventData: _,
                appId: _.appid,
                registerByDate: _,
                registrationType:
                  _.m_plan.type == `seasonalsale`
                    ? `trailer-seasonalsale`
                    : `trailer-themesale`,
              })),
              _.push(_.AddAdditionalEvent(_));
          }
        }
        if (_.m_plan.type == `seasonalsale`) {
          let _ = new Date(
            _.m_optIn.description.definition.optin_deadline_date * 1e3,
          );
          if (_ > _) {
            let _ = _.clone(
              _.m_plan._ + `_featuredRegistrationDeadline_` + _.appid,
              _,
              _,
              `deadline-urgent`,
              _(
                `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Header`,
              ),
            );
            (_.getElement = () =>
              (0, _.jsx)(_, {
                eventData: _,
                appId: _.appid,
                registerByDate: _,
                registrationType: `registration`,
              })),
              _.push(_.AddAdditionalEvent(_));
          }
        }
      } else if (!_ && _.m_plan.type == `seasonalsale`) {
        let _ = new Date(
            _.m_optIn.description.definition.optin_deadline_date * 1e3,
          ),
          _ = new Date(_.m_plan.start_date * 1e3);
        if (_ > _ && _ > _) {
          let _ = _.clone(
            _.m_plan._ + `_featuredDiscountDeadline_` + _.appid,
            _,
            _,
            `deadline-urgent`,
            _(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Header`,
            ),
          );
          (_.getElement = () =>
            (0, _.jsx)(_, {
              eventData: _,
              appId: _.appid,
              registerByDate: _,
              registrationType: `discount`,
            })),
            _.push(_.AddAdditionalEvent(_));
        }
      }
    }
    return _.length > 0 ? () => _.forEach((_) => _()) : void 0;
  }, [_, _, _, _, _.m_optIn?.rgFeaturedApps, _, _]);
}
function _(_) {
  let { eventData: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.m_plan,
    { eventModel: _, bLoading: _ } = _(
      _.sale_clan_account,
      _.sale_clan_event_gid,
    ),
    _ = _(_.opt_in_id, _.m_partnerId),
    _ = !_ && _?.GetImageURL(`capsule`, _, _.capsule_main),
    _ = !_ && _(_),
    _ = _.opt_in_id?.startsWith(`sale_nextfest_`)
      ? `${_.PARTNER_BASE_URL}recap/nextfest/${_.opt_in_id.substring(14)}/${_.m_partnerId}`
      : void 0,
    _ = _(),
    _ = _(_.opt_in_id),
    _ = _.useMemo(
      () => _(_.data?.appIdsWithoutPermissions ?? []),
      [_.data?.appIdsWithoutPermissions],
    ),
    _ = _.useMemo(() => {
      if (_.isLoading || !_.isSuccess) return null;
      let _ = _.data.stats?.reduce(
        (_, _) => (_.rt_last_update_time > _ ? _.rt_last_update_time : _),
        0,
      );
      if (!(_ && _ > _.end_date)) return null;
      let _ =
          _.data.stats?.filter((_) => _ != 0 && _.rt_last_update_time == _) ??
          [],
        _ = _.reduce((_, _) => _ + _.demo_player_count, 0),
        _ = _.reduce((_, _) => _ + _.wishlist_count, 0),
        _ = _.reduce((_, _) => _ + _.player_wishlist_count, 0),
        _ = _.reduce(
          (_, _) =>
            _.demo_player_count >= _.count
              ? {
                  count: _.demo_player_count,
                  appId: _.appid,
                }
              : _,
          {
            count: 0,
            appId: 0,
          },
        ).appId;
      return {
        nGamesWithStatsCount: _.length,
        nDemoPlayers: _,
        nWishlists: _,
        nConversions: _,
        nMostPopularAppId: _,
      };
    }, [_.end_date, _.data, _.isLoading, _.isSuccess]),
    _ =
      _?.nMostPopularAppId > 0
        ? _.nMostPopularAppId
        : _.length > 0
          ? Math.max(..._)
          : 0,
    _ = _?.rgRegisteredApps?.find((_) => _.appid == _)?.jsondata,
    _ = _ && JSON.parse(_),
    _ = _ && !_.survey_response?.some((_) => _.accountid == _.accountid),
    _ = (_?.nGamesWithStatsCount ?? 0) + _.length;
  if (
    (_.useEffect(() => {
      _.isLoading ||
        _._.startsWith(`fakerecap_`) ||
        (_.isSuccess
          ? _ == 0 && !_ && _.SetHidden(_._, !0)
          : _.SetHidden(_._, !0));
    }, [_, _, _, _._, _.isLoading, _.isSuccess]),
    _.isLoading)
  )
    return (0, _.jsx)(_, {});
  if (_ == 0 && !_ && !_._.startsWith(`fakerecap_`)) return;
  let _ = `${_.PARTNER_BASE_URL}optin/survey/${_.opt_in_id}/${_}`,
    _ = new Intl.NumberFormat(_()),
    _ = (0, _.jsx)(`a`, {
      href: `${_.PARTNER_BASE_URL}doc/gettingstarted/managing_users`,
      target: `_blank`,
      children: _(
        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_ViewFinancials`,
      ),
    });
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, _.jsx)(_, {
                  href: _,
                  target: `_blank`,
                  children: (0, _.jsx)(`img`, {
                    src: _,
                  }),
                }),
              }),
            (0, _.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: _(
                    `#Dashboard_UpcomingEvents_RecapNextFest_TextHeader`,
                  ),
                }),
                (0, _.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: _(
                            `#Dashboard_UpcomingEvents_RecapNextFest_TextGameCount`,
                            _,
                            (0, _.jsx)(`b`, {}),
                          ),
                        }),
                        _.length > 0 &&
                          (0, _.jsx)(`div`, {
                            className: `vQDiNX1PMEc-`,
                            children: _(
                              `#Dashboard_UpcomingEvents_RecapNextFest_PartialStats_TextGameCount`,
                              _.length,
                              _,
                            ),
                          }),
                      ],
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        summaryURL: _,
                      }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: _.format(_.nDemoPlayers),
                }),
                (0, _.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    _(`#Recap_NextFest_TotalPlayers`),
                    (0, _.jsx)(_, {
                      tooltip: _(`#Recap_NextFest_TotalPlayers_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _(`bqjbi6qfuFQ-`, `t245vD54MCk-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: _.format(_.nConversions),
                }),
                (0, _.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    _(`#Recap_NextFest_PlayerWishlist`),
                    (0, _.jsx)(_, {
                      tooltip: _(`#Recap_NextFest_PlayerWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: _.format(_.nWishlists),
                }),
                (0, _.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    _(`#Recap_NextFest_TotalWishlist`),
                    (0, _.jsx)(_, {
                      tooltip: _(`#Recap_NextFest_TotalWishlist_ttip`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `_9ac3oon3yn0-`,
                children: (0, _.jsx)(_, {
                  href: _,
                  target: `_blank`,
                  children: (0, _.jsx)(`img`, {
                    src: _,
                  }),
                }),
              }),
            (0, _.jsxs)(`div`, {
              className: `ASVeAEru7Lw-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `_4gygrxIOxBs-`,
                  children: _(
                    `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextHeader`,
                  ),
                }),
                (0, _.jsxs)(`div`, {
                  className: `pJgNTrdwjuk-`,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `vOvkg-9zWAc-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `IT0frjL7qyQ-`,
                          children: _(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_TextGameCount`,
                            _,
                            (0, _.jsx)(`b`, {}),
                          ),
                        }),
                        (0, _.jsx)(`div`, {
                          className: `vQDiNX1PMEc-`,
                          children: _(
                            `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_NeedPermission`,
                            _,
                          ),
                        }),
                      ],
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        summaryURL: _,
                      }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _(`bqjbi6qfuFQ-`, `SuKpGS94Kts-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: _.format(_),
                }),
                (0, _.jsx)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: _(`#Recap_NextFest_Apps`),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _(`bqjbi6qfuFQ-`, `t245vD54MCk-`, `_8cesVkktgoE-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, _.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    _(`#Recap_NextFest_PlayerWishlist`),
                    (0, _.jsx)(_, {
                      tooltip: _(
                        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _(`bqjbi6qfuFQ-`, `vV5aIlfQaIY-`, `_8cesVkktgoE-`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ldmoxne2FHE-`,
                  children: `--`,
                }),
                (0, _.jsxs)(`div`, {
                  className: `T9hJ6MgD9-o-`,
                  children: [
                    _(`#Recap_NextFest_TotalWishlist`),
                    (0, _.jsx)(_, {
                      tooltip: _(
                        `#Dashboard_UpcomingEvents_RecapNextFest_NoStats_Tooltip`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      _ &&
        (0, _.jsxs)(`div`, {
          className: `mk9nXNBQ26s-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `cGkFh39raGs-`,
              children: _(`#Dashboard_UpcomingEvents_RecapNextFest_SurveyText`),
            }),
            (0, _.jsx)(`button`, {
              className: `C-YKebzP5wE-`,
              onClick: () => window.open(_, `_blank`),
              children: _(
                `#Dashboard_UpcomingEvents_RecapNextFest_SurveyButton`,
              ),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`button`, {
    className: _,
    onClick: () => window.open(_.summaryURL, `_blank`),
    children: _(`#Dashboard_UpcomingEvents_RecapNextFest_TextFullSummary`),
  });
}
function _(_) {
  let { eventData: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.m_plan,
    { eventModel: _, bLoading: _ } = _(
      _.sale_clan_account,
      _.sale_clan_event_gid,
    ),
    _ = !_ && _?.GetImageURL(`capsule`, _, _.capsule_main);
  return (0, _.jsx)(_, {
    imageUrl: _,
  });
}
function _(_) {
  let {
    eventName: _,
    eventDescription: _,
    eventUrl: _,
    startTime: _,
    endTime: _,
    warnings: _,
    imageUrl: _,
    additionalButtons: _,
    inlineDate: _,
    bigName: _,
  } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
      }),
      (0, _.jsxs)(_, {
        hasImage: !!_,
        children: [
          (0, _.jsxs)(_, {
            inlineDate: _,
            children: [
              (0, _.jsx)(_, {
                text: _,
                url: _,
                large: _,
              }),
              (0, _.jsx)(_, {
                startTimestamp: _,
                endTimestamp: _,
                largeDate: _,
              }),
            ],
          }),
          _,
          _?.length > 0 &&
            (0, _.jsx)(`div`, {
              className: `uwc0Vnfl-mQ-`,
              children: _.join(`, `),
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { eventData: _ } = _,
    _ = _.m_plan._
      ? `${_.PARTNER_BASE_URL}promotion/assetportal/request/${_.m_plan._}`
      : void 0,
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    _ =
      _.m_plan.start_date &&
      _.format(_(void 0, _.m_plan.start_date, `partner`) * 1e3),
    _ = _.m_plan,
    [_] = _(_.store_item_id, _.store_item_type, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = _.useMemo(
      () =>
        _
          ? [
              {
                appid: _.GetAppID(),
                appName: _.GetName(),
              },
            ]
          : void 0,
      [_],
    ),
    _ = _(_.m_partnerId, _, _.start_date, _.end_date),
    _ = _ && _.discount_event_id,
    _ = _.discount_event_id
      ? `${_.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${_.discount_event_id}`
      : void 0,
    _ = _(_.discount_event_id),
    _ = _(_.m_plan, _.m_assetInput) > _.k_AwaitingPartner,
    _ = !_ || _?.length > 0 || _?.length > 0;
  if (_.m_assetInput?.enable_input)
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          complete: _ && _,
          urgent: !0,
        }),
        (0, _.jsx)(_, {
          complete: _,
          urgent: !0,
          label: _(
            `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_duedate`,
          ),
          status: _,
          actionStatus: _(
            _
              ? `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button_submitted`
              : `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
          ),
          actionUrl: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            complete: _,
            urgent: !0,
            label: _(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: _,
            actionStatus: _(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: _,
          }),
      ],
    });
}
function _(_) {
  let { eventData: _, eventUrl: _, optIn: _, invitedAndRegisteredApps: _ } = _,
    _ = _.m_plan,
    _ = (_, _) =>
      _?.map((_) => ({
        details: _,
        bRegistered: _,
      })) ?? [],
    _ = _.useMemo(
      () =>
        _?.rgRegisteredApps?.map((_) => ({
          appid: _.appid,
          appName: _.app_name,
        })) ?? [],
      [_?.rgRegisteredApps],
    ),
    _ = _(_.m_partnerId, _, _.start_date, _.end_date),
    _ = _.useMemo(
      () =>
        _?.length &&
        (0, _.jsx)(`div`, {
          className: `-rKdDl3YL68-`,
          children: _.sort((_, _) => _.appName.localeCompare(_.appName)).map(
            (_) =>
              (0, _.jsx)(
                `div`,
                {
                  children: `${_.appName} (${_(_.discountsDuring)})`,
                },
                _.appid,
              ),
          ),
        }),
      [_],
    ),
    _ = _?.length > 0,
    _ = _().setManageDiscountsAppIDs,
    _ = _?.some((_) => _.has(_.details.appid)),
    _ =
      _.discount_event_id && _
        ? `${_.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${_.discount_event_id}`
        : void 0,
    _ = _ && _,
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    _ =
      _.eventType != `deadline` &&
      _.description.definition.optin_deadline_date &&
      _.description.definition.event_start_date -
        _.description.definition.optin_deadline_date >
        _.PerDay &&
      _.format(_.description.definition.optin_deadline_date * 1e3);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              text: _(`#Dashboard_UpcomingEvents_Events_OptIn_EligibleGames`),
              count: _.length,
              tooltip: (0, _.jsx)(_, {
                apps: _,
              }),
            }),
            (0, _.jsx)(_, {
              text: _(`#Dashboard_UpcomingEvents_Events_OptIn_RegisteredGames`),
              count: _.rgRegisteredApps?.length ?? 0,
              tooltip: (0, _.jsx)(_, {
                apps: _(_.rgRegisteredApps, !1),
              }),
            }),
            (0, _.jsx)(_, {
              text: _(`#Dashboard_UpcomingEvents_Events_OptIn_Discounted`),
              count: _?.length ?? 0,
              tooltip: _,
              hidden: !_,
            }),
            (0, _.jsx)(_, {
              optIn: _,
            }),
          ],
        }),
      (0, _.jsxs)(_, {
        children: [
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `_9XfxKPtGXL4-`,
                  children: _(
                    `#Dashboard_UpcomingEvents_Events_OptIn_Deadline`,
                  ),
                }),
                (0, _.jsx)(`div`, {
                  className: `l-kYUyPKii4-`,
                  children: _,
                }),
              ],
            }),
          (0, _.jsx)(_, {
            url: _,
            children: _(
              _
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_EligibleGames`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_LearnMore`,
            ),
          }),
          (0, _.jsx)(_, {
            url: _,
            children: _(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { optIn: _ } = _,
    _ = _(),
    _ =
      _.rgRegisteredApps?.filter((_) => _.demo_build_review_requested === !1) ??
      [];
  if (!_.length) return null;
  let _ = _.description.definition,
    _ =
      (_.event_start_date ?? _.description.start_date) * 1e3 - _.getTime() <
      14 * _.PerDay * 1e3,
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }),
    _ =
      _.rtime_nextfest_press_preview_submit &&
      _.format(_.rtime_nextfest_press_preview_submit * 1e3),
    _ =
      _.rtime_nextfest_all_items_submit &&
      _.format(_.rtime_nextfest_all_items_submit * 1e3),
    _;
  return (
    _ && _
      ? (_ = _(
          `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadlines_Both`,
          _,
          _,
        ))
      : _
        ? (_ = _(
            `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_PressPreview`,
            _,
          ))
        : _ &&
          (_ = _(
            `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Deadline_AllItems`,
            _,
          )),
    (0, _.jsx)(`div`, {
      className: _,
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            complete: !1,
            urgent: _,
            label: _(
              _.demo_appid
                ? `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NotSubmitted`
                : `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_NoDemo`,
              _.app_name,
            ),
            status: _,
            tooltip: _(
              `#Dashboard_UpcomingEvents_Events_OptIn_DemoBuildReview_Tooltip`,
            ),
            actionStatus: _(
              _.demo_appid
                ? `#Dashboard_UpcomingEvents_Events_OptIn_Button_SubmitBuild`
                : `#Dashboard_UpcomingEvents_Events_OptIn_Button_CreateDemo`,
            ),
            actionUrl: `${_.PARTNER_BASE_URL}apps/demo/${_.appid}`,
          },
          _.appid,
        ),
      ),
    })
  );
}
function _(_) {
  let { text: _, count: _, tooltip: _, hidden: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _ && `itI76HUd-GU-`),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { apps: _ } = _;
  if (!_?.length) return;
  let _ = _.sort((_, _) =>
    _.details.app_name.localeCompare(_.details.app_name),
  );
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        `div`,
        {
          children: _.bRegistered
            ? _(
                `#Dashboard_UpcomingEvents_Events_OptIn_GameRegistered`,
                _.details.app_name,
                (0, _.jsx)(`span`, {
                  className: _,
                  children: _(
                    `#Dashboard_UpcomingEvents_Events_OptIn_GameRegisteredText`,
                  ),
                }),
              )
            : _.details.app_name,
        },
        _.details.appid,
      ),
    ),
  });
}
function _(_) {
  let { eventData: _, appId: _, registerByDate: _, registrationType: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.m_plan,
    _ = _.m_optIn,
    [_] = _(_, 0, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = _?.GetAssets().GetHeaderURL(),
    _ = _ ? _.PARTNER_BASE_URL + `apps/landing/` + _.GetAppID() : null,
    _ = `${_.PARTNER_BASE_URL}optin/sale/${_.opt_in_id?.replace(`sale_`, ``)}`,
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }),
    _ = _.format(_),
    _ =
      _ == `trailer-seasonalsale` || _ == `trailer-themesale`
        ? _
        : _.format(new Date(_?.description.start_date * 1e3)),
    _ = _.useMemo(() => {
      let _ = _.m_optIn.rgRegisteredApps.find((_) => _.appid == _);
      return _ ? [_] : [];
    }, [_.m_optIn.rgRegisteredApps, _]),
    _ = _?.length > 0,
    _ = _.discount_event_id
      ? `${_.PARTNER_BASE_URL}promotion/discounts/dashboard/?de=${_.discount_event_id}`
      : void 0,
    _ = _.useMemo(
      () =>
        _?.map((_) => ({
          appid: _.appid,
          appName: _.app_name,
        })) ?? [],
      [_],
    ),
    _ = _(_.m_partnerId, _, _.start_date, _.end_date)?.length > 0,
    _ = _?.description?.definition?.localized_optin_banner?.[_.LANGUAGE],
    _ = _?.description.opt_in_name && _ && _(_?.description.opt_in_name, _, _),
    _ = _ && _,
    _ = _.eventType == `deadline-urgent`,
    _ = null,
    _ = null,
    _ = null;
  switch (_) {
    case `trailer-seasonalsale`:
      (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Title`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Body`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerSeasonalSale_Action`);
      break;
    case `trailer-themesale`:
      (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Title`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Body`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedTrailerThemeSale_Action`);
      break;
    case `registration`:
      (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Title`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Body`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`);
      break;
    case `discount`:
      (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Title`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Body`),
        (_ = `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedRegister_Action`);
  }
  return (0, _.jsxs)(_, {
    hasImage: !!_,
    backgroundImageUrl: _,
    dimmed: !0,
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
      }),
      (0, _.jsxs)(_, {
        hasImage: !!_,
        children: [
          (0, _.jsx)(_, {
            text: _(_, _.title),
            light: !0,
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _ && `OSBBoP9InyI-`),
            children: _(_, _),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            complete: _,
            urgent: _,
          }),
          (0, _.jsx)(_, {
            complete: _,
            urgent: _,
            label: _(_),
            status: _,
            actionStatus: _(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeatured_Register_Button`,
            ),
            actionUrl: _,
          }),
          (0, _.jsx)(_, {
            complete: _,
            urgent: _,
            label: _(
              `#Dashboard_UpcomingEvents_Events_Deadline_EventFeaturedDiscount_Action`,
            ),
            status: _,
            actionStatus: _(
              `#Dashboard_UpcomingEvents_Events_OptIn_Button_EnterDiscounts`,
            ),
            actionUrl: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = new Intl.DateTimeFormat(navigator.language, {
    month: `numeric`,
    day: `numeric`,
    year: `2-digit`,
  });
  return _(_, (_) => `${_.rtStartDate}_${_.rtEndDate}`)
    .map(
      (_) =>
        `${_.format(new Date(_.rtStartDate * 1e3))} - ${_.format(new Date(_.rtEndDate * 1e3))}`,
    )
    .join(`, `);
}
function _(_, _, _, _) {
  let _ = _.useMemo(
      () =>
        _?.map((_) => ({
          appid: _.appid,
          appName: _.appName,
          startDate: _,
          endDate: _,
        })) ?? [],
      [_, _, _],
    ),
    _ = _.useMemo(() => _?.map((_) => _.appid) ?? [], [_]),
    _ = _(_, {
      nPartnerID: _,
    });
  return _.useMemo(() => {
    let _ = _?.reduce((_, _) => _.set(_.appid, _), new Map());
    return (
      _ && _
        ? Array.from(_)
            .map(([_, _]) => ({
              appid: _,
              discountsDuring: _?.discounts?.filter(
                (_) =>
                  _.get(_).startDate &&
                  _.get(_).startDate <= _.rtEndDate &&
                  _.get(_).endDate &&
                  _.rtStartDate <= _.get(_).endDate,
              ),
            }))
            .filter((_) => _.discountsDuring?.length)
        : void 0
    )?.map(({ appid: _, discountsDuring: _ }) => ({
      appid: _,
      appName: _?.get(_).appName,
      discountsDuring: _,
    }));
  }, [_, _]);
}
function _(_, _, _, _) {
  let _ = _;
  if (_ == `seasonalsale`) _ = _(_(_));
  else {
    let _ = _?.description?.definition?.event_title?.[_.LANGUAGE];
    if (_) _ = _;
    else
      for (let _ of [
        `takeover`,
        `takeunder`,
        `midweek`,
        `midweek deal`,
        `weekend deal`,
      ])
        _ = _.replace(RegExp(`^` + _ + `\\s*[:-]\\s*`, `i`), ``);
  }
  return _;
}
function _(_) {
  let _ = _(),
    [_] = _(`recap`),
    _ = _.useCallback(
      (_, _) => {
        let _ = new Date(_.getTime() - 5 * _.PerDay * 1e3),
          _ = {
            _: `fakerecap_${_}`,
            name: _,
            opt_in_id: _,
            type: `nextfest`,
            sale_clan_account: 39049601,
            sale_clan_event_gid: `4148451028995460854`,
            start_date: _.getTime() / 1e3,
            end_date: _.getTime() / 1e3 + 3 * _.PerDay,
          },
          _ = {
            description: {
              opt_in_name: _,
              type: 0,
              active: !0,
              start_date: _.start_date,
              end_date: _.end_date,
              definition: {},
            },
            rgEligibleApps: [],
            rgRegisteredApps: [],
            rgFeaturedApps: [],
          },
          _ = new _(
            _._,
            _,
            !1,
            _,
            null,
            _,
            new Date(_.description.start_date * 1e3),
            new Date(_.description.end_date * 1e3),
            `event`,
            _(_, _),
            !1,
            !1,
            _,
            void 0,
          );
        return _(_(_, _), ``), _;
      },
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? Array.from(
            {
              length: 1,
            },
            (_, _) => _(_, `${_}_${_}`),
          )
        : [],
    [_, _],
  );
}
function _() {
  return _.useMemo(() => {
    let _ = new Date();
    _.setHours(0, 0, 0, 0);
    let _ = (_) => {
        let _ = new Date();
        return _.setDate(_.getDate() + _), _;
      },
      _ = [
        {
          title: `Event Recap Foo`,
          startDate: _(-10),
          eventType: `event`,
        },
        {
          title: `Event Recap Bar`,
          startDate: _(-6),
          eventType: `event`,
        },
        {
          title: `Live Event Foo`,
          startDate: _(-8),
          endDate: _(2),
          eventType: `event`,
        },
        {
          title: `Live Event Bar`,
          startDate: _(-6),
          endDate: _(4),
          eventType: `event`,
        },
        {
          title: `Team Fortress 2`,
          startDate: _(-1),
          eventType: `release-game`,
        },
        {
          title: `Dota 2`,
          startDate: _(0),
          eventType: `event`,
        },
        {
          title: `Weekend Deal - Portal 2`,
          startDate: _(0),
          eventType: `deadline`,
        },
        {
          title: `Half Life 2 - Episode One`,
          startDate: _(0),
          eventType: `release-dlc`,
        },
        {
          title: `Capitalism and Economy Fest`,
          startDate: _(1),
          eventType: `deadline`,
        },
        {
          title: `Dota Underlords`,
          startDate: _(9),
          eventType: `release-game`,
        },
        {
          title: `Counter Strike 2`,
          startDate: _(36),
          eventType: `event`,
        },
        {
          title: `Steam Next Fest June Edition`,
          startDate: _(36),
          eventType: `event`,
        },
        {
          title: `The Lab`,
          startDate: _(36),
          eventType: `event`,
        },
      ].map((_) => ({
        ..._,
        _: `fake_` + _.title,
        endDate: _.endDate ?? _.startDate,
        eventTypeName: _(_.eventType),
        getElement: () =>
          (0, _.jsx)(`div`, {
            style: {
              color: `white`,
              backgroundColor: _(_.title, 0.4),
            },
            children: _.title,
          }),
        getCapsuleElement: () =>
          (0, _.jsx)(`div`, {
            style: {
              color: `white`,
              backgroundColor: _(_.title, 0.4),
              flex: 1,
            },
            children: _.title,
          }),
      })),
      _ = 40;
    for (let _ = 0; _ < 50; _++) {
      let _;
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          _ = `deadline`;
          break;
        case 1:
          _ = `deadline-urgent`;
          break;
        case 2:
          _ = `release-game`;
          break;
        case 3:
          _ = `release-dlc`;
          break;
        case 4:
          _ = `event`;
      }
      _ += Math.random() * 3;
      let _ = {
        title: `Generated event` + _,
        startDate: _(_),
        endDate: _(_),
        eventType: _,
        _: `fake_` + _.toString(),
        eventTypeName: _(_),
        getElement: () =>
          (0, _.jsx)(`div`, {
            children: `Generated event` + _,
          }),
        dimmed: Math.random() > 0.9,
      };
      _.push(_);
    }
    return _;
  }, []);
}
function _(_) {
  switch (_) {
    case `deadline`:
      return _(`#Dashboard_UpcomingEvents_EventType_Deadline`) + ` (Generated)`;
    case `deadline-urgent`:
      return _(`#Dashboard_UpcomingEvents_EventType_Deadline`) + ` (Generated)`;
    case `release-game`:
      return _(`#Dashboard_UpcomingEvents_EventType_Release`) + ` (Generated)`;
    case `release-dlc`:
      return (
        _(`#Dashboard_UpcomingEvents_EventType_Release_DLC`) + ` (Generated)`
      );
    case `event`:
      return (
        _(`#Dashboard_UpcomingEvents_EventType_Event_Unknown`) + ` (Generated)`
      );
  }
}
function _(_, _) {
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = _.charCodeAt(_) + ((_ << 5) - _);
  let _ = `#`;
  for (let _ = 0; _ < 3; _++) {
    let _ = Math.floor(((_ >> (_ * 8)) & 255) * _);
    _ += (`00` + _.toString(16)).slice(-2);
  }
  return _;
}
var _ = `s0RrLjURphI-`,
  _ = `dCyO0rviUmw-`,
  _ = `v150DClwlAY-`;
function _() {
  let _ = _(),
    _ = _();
  return _.useMemo(() => {
    if (!_) return [];
    let _ = _(_(`rgDeadlines`, `application_config`)),
      _ = (_ ? Array.from(_.entries()) : [])
        .filter(([_, _]) => new Date(_.due_date * 1e3) >= _ || _(_))
        .reduce((_, [_, _]) => {
          let _ = _(new Date(_.due_date * 1e3)),
            _ = _(_.type),
            _ = _ ? `group` : _,
            _ = `${_.getTime()}_${_.type}_${_}`,
            _ = _.has(_) ? _.get(_).deadlines : [];
          return (
            _.set(_, {
              dueDate: _,
              bSupportsGrouping: _,
              deadlines: [..._, _],
            }),
            _
          );
        }, new Map());
    return (
      Array.from(_.entries()).flatMap(([_, _]) => {
        let { dueDate: _, bSupportsGrouping: _, deadlines: _ } = _,
          _ = [];
        return (
          _ ? _.push(_(_, _)) : _.push(..._.map((_) => _(_, _))),
          _.filter((_) => !!_).map((_) => ({
            title: _.sTitle,
            startDate: _,
            endDate: _,
            eventType: _.bUrgent ? `deadline-urgent` : `deadline`,
            _: _,
            eventTypeName: _.sHeader,
            getElement: () => _.element,
            getCapsuleElement: () => _.capsuleElement,
            passesFilter: (_) => _ == 1,
          }))
        );
      }) ?? []
    );
  }, [_, _]);
}
function _(_) {
  if (_) return Object.keys(_).reduce((_, _) => _.set(_, _[_]), new Map());
}
function _(_) {
  switch (_.type) {
    case 9:
      return !0;
    case 10: {
      let _ = _.description_jsondata
        ? JSON.parse(_.description_jsondata)
        : void 0;
      return (
        _?.TemplateName != `F1099MISC-ConsentYes` &&
        _?.TemplateName != `F1042-Consent`
      );
    }
  }
  return !1;
}
function _(_) {
  return _ === 4;
}
function _(_, _) {
  let _ = _.description_jsondata ? JSON.parse(_.description_jsondata) : void 0;
  switch (_.type) {
    case 1:
      return {
        sHeader: `Action Required`,
        sTitle: `Test 1`,
        bUrgent: !0,
        element: (0, _.jsx)(_, {
          deadline: _,
          json: _,
        }),
      };
    case 3:
      return {
        sHeader: _(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: _(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
        bUrgent: !0,
        element: (0, _.jsx)(_, {
          deadline: _,
          json: _,
        }),
      };
    case 4: {
      let _ = _.GetInfo(_?.opt_in_name)?.description.definition.event_title[
        _.LANGUAGE
      ];
      return _
        ? {
            sHeader: _(`#PartnerDeadline_NextFest_PressPreview_Title`),
            sTitle: _(
              `#Deadlines_CombinedTitle`,
              _(`#PartnerDeadline_NextFest_PressPreview_Title`),
              _,
            ),
            element: (0, _.jsx)(_, {
              deadline: _,
              json: _,
            }),
          }
        : void 0;
    }
    case 5: {
      let _ = _.GetInfo(_?.opt_in_name)?.description.definition.event_title[
        _.LANGUAGE
      ];
      return _
        ? {
            sHeader: _(`#PartnerDeadline_NextFest_DemoBuildReview_Title`),
            sTitle: _(
              `#Deadlines_CombinedTitle`,
              _(`#PartnerDeadline_NextFest_DemoBuildReview_Title`),
              _,
            ),
            bUrgent: !1,
            element: (0, _.jsx)(_, {
              deadline: _,
              json: _,
            }),
          }
        : void 0;
    }
    case 6: {
      let _ = _(_);
      return {
        sHeader: _(`#Dashboard_UpcomingEvents_EventType_Deadline`),
        sTitle: _(
          _
            ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
            : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
        ),
        bUrgent: !_,
        element: (0, _.jsx)(_, {
          deadline: _,
          json: _,
        }),
      };
    }
    case 9:
      return {
        sHeader: _(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        sTitle: _(`#Dashboard_UpcomingEvents_EventType_SeasonPass`),
        bUrgent: _.due_date < _.GetTimeNowWithOverride() - 604800,
        element: (0, _.jsx)(_, {
          deadline: _,
          json: _,
        }),
      };
    case 10:
      return {
        sHeader: _(_?.TemplateName),
        sTitle: _(_),
        bUrgent: _.due_date < _.GetTimeNowWithOverride() + 2678400,
        element: (0, _.jsx)(_, {
          deadline: _,
          json: _,
        }),
        capsuleElement: (0, _.jsx)(`div`, {
          className: _,
          children: _(_),
        }),
      };
  }
}
function _(_, _) {
  if (_[0].type === 4) return _(_, _[0]);
}
function _(_) {
  let { deadline: _, json: _ } = _,
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(_.due_date * 1e3));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        children: [`Name: `, _.name],
      }),
      (0, _.jsxs)(`div`, {
        children: [`Due date: `, _],
      }),
    ],
  });
}
function _(_) {
  let { deadline: _ } = _,
    [_] = _(_?.store_item_id, _?.store_item_type, {
      include_assets: !0,
    }),
    _ = `${_.PARTNER_BASE_URL}promotion/dailydeals/invite/${_.gid}`,
    _ = _(_?.due_date);
  return (0, _.jsx)(_, {
    urgent: !0,
    imageUrl: _?.GetAssets().GetHeaderURL(),
    title: _(`#PartnerDeadline_DailyDeal_InviteExpiring_Title`),
    body: _(`#PartnerDeadline_InviteExpiring_Body`, _),
    url: _,
    imageTooltip: _?.GetName(),
    rightCol: (0, _.jsx)(_, {
      url: _,
      children: _(`#DailyDeals_PickDate`),
    }),
  });
}
var _ = 604800;
function _(_) {
  return _.due_date > _.GetTimeNowWithOverride() + _;
}
function _(_) {
  let { deadline: _ } = _,
    [_] = _(_?.store_item_id, _?.store_item_type, {
      include_assets: !0,
    }),
    _ = `${_.PARTNER_BASE_URL}promotion/assetportal/request/${_.gid}`,
    _ = _(_?.due_date, !0, !0),
    _ = _(_);
  return (0, _.jsx)(_, {
    urgent: !_,
    imageUrl: _?.GetAssets().GetHeaderURL(),
    title: _(
      _
        ? `#PartnerDeadline_AssetRequest_InviteExpiring_Title_Soft`
        : `#PartnerDeadline_AssetRequest_InviteExpiring_Title`,
    ),
    body: _(
      _
        ? `#PartnerDeadline_InviteExpiring_Body_Soft`
        : `#PartnerDeadline_InviteExpiring_Body`,
      _,
    ),
    url: _,
    imageTooltip: _?.GetName(),
    rightCol: (0, _.jsx)(_, {
      url: _,
      children: _(
        `#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest_button`,
      ),
    }),
  });
}
function _(_) {
  let { deadline: _, json: _ } = _,
    _ = _(_.opt_in_name),
    _ = `${_.PARTNER_BASE_URL}optin/sale/${_.opt_in_name.replace(`sale_`, ``)}`;
  return _
    ? (0, _.jsx)(_, {
        title: _.description.definition.event_title[_.LANGUAGE],
        body: _(`#PartnerDeadline_NextFest_PressPreview_Body`),
        rightCol: (0, _.jsx)(_, {
          url: _,
          children: _(`#PartnerDeadline_NextFest_View_Registration`),
        }),
      })
    : null;
}
function _(_) {
  let { deadline: _, json: _ } = _,
    _ = _(_.opt_in_name),
    [_] = _(_?.store_item_id, _?.store_item_type, {
      include_assets: !0,
    });
  if (!_ || !_?.store_item_id) return null;
  let _ = `${_.PARTNER_BASE_URL}apps/demo/${_.store_item_id}`,
    _ = `${_.PARTNER_BASE_URL}doc/store/review_process`;
  return (0, _.jsx)(_, {
    imageUrl: _?.GetAssets().GetHeaderURL(),
    title: _.description.definition.event_title[_.LANGUAGE],
    body: _(
      _(
        `#PartnerDeadline_NextFest_DemoBuildReview_Body`,
        _?.GetName() || `(` + _.store_item_id + `)`,
      ),
      (0, _.jsx)(`a`, {
        href: _,
      }),
    ),
    rightCol: (0, _.jsx)(_, {
      url: _,
      children: _(`#PartnerDeadline_NextFest_View_Registration`),
    }),
  });
}
var _ = {
  include_assets: !0,
};
function _(_) {
  let { deadline: _, json: _ } = _,
    [_] = _(_.store_item_id, _),
    _ = _(_.store_item_id)?.find(
      (_) => _.milestone_id == Number.parseInt(_.gid),
    ),
    _ = _.GetTokenWithFallback(_?.title),
    _ = `${_.PARTNER_BASE_URL}admin/game/editbyappid/${_.store_item_id}?activetab=tab_specialsettings#seasonpass`,
    _ = `${_.PARTNER_BASE_URL}apps/landing/${_.store_item_id}`;
  return (0, _.jsx)(_, {
    imageUrl: _?.GetAssets().GetSmallCapsuleURL(),
    title: _(
      `#PartnerDeadline_SeasonPass_DLC`,
      _?.GetName() || `(` + _.store_item_id + `)`,
    ),
    body: _(`#PartnerDeadline_SeasonPass_Desc`, _ || _.gid),
    rightCol: (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          url: _,
          children: _(`#PartnerDeadline_SeasonPass_OpenEditor`),
        }),
        (0, _.jsx)(_, {
          url: _,
          children: _(`#DiscountDashboard_VisitAppLanding_Tooltip`),
        }),
      ],
    }),
  });
}
function _(_) {
  let { deadline: _, json: _ } = _,
    _ = _(_?.due_date, !0, !0),
    _ = `${_.PARTNER_BASE_URL}taxrequirement/view/${_.partnerid}/${_.gid}`,
    _ = _(),
    _ = _(_, _);
  return (
    _ ||
      (_ += ` ` + _(`#PartnerDeadline_TaxRequirement_ActualAuthorityRequired`)),
    (0, _.jsx)(_, {
      title: _(_),
      body: _,
      rightCol: (0, _.jsx)(_, {
        url: _,
        children: _(`#PartnerDeadline_TaxRequirement_ButtonViewDetails`),
      }),
    })
  );
}
function _(_) {
  let {
    imageUrl: _,
    title: _,
    body: _,
    imageTooltip: _,
    url: _,
    rightCol: _,
    urgent: _,
  } = _;
  return (0, _.jsxs)(_, {
    hasImage: !!_,
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
        tooltip: _,
      }),
      (0, _.jsxs)(_, {
        hasImage: !!_,
        children: [
          (0, _.jsx)(_, {
            text: _,
          }),
          (0, _.jsx)(`div`, {
            className: _ ? _ : _,
            children: _,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          children: _,
        }),
    ],
  });
}
function _(_) {
  switch (_) {
    case `Freeform`:
    case `Freeform-FR`:
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return _(`#PartnerDeadline_TaxRequirement_Header_NoAction`);
    default:
      return _(`#Dashboard_UpcomingEvents_EventType_Deadline`);
  }
}
function _(_) {
  switch (_?.TemplateName) {
    case `Freeform`:
    case `Freeform-FR`:
      return _(_)
        ? _(`#PartnerDeadline_TaxRequirement_Title_FileReceived`)
        : _(`#PartnerDeadline_TaxRequirement_Title_Freeform`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return _(`#PartnerDeadline_TaxRequirement_Title_NoAction`);
    default:
      return _(`#PartnerDeadline_TaxRequirement_Title`);
  }
}
function _(_, _) {
  switch (_?.TemplateName) {
    case `Renewal-W8-Initial`:
      return _(`#PartnerDeadline_TaxRequirement_Renewal-W8-Initial`, _);
    case `Renewal-W8-Partner-Urgent`:
      return _(`#PartnerDeadline_TaxRequirement_Renewal-W8-Partner-Urgent`);
    case `DocReq-KYC-FR`:
    case `DocReq-KYC-Entity-FR-CERT`:
    case `DocReq-KYC-Entity-FR`:
      return _(`#PartnerDeadline_TaxRequirement_AdditionalKYCDocuments`);
    case `DocReq-Selfie-FR`:
    case `DocReq-TreatyClaimOthCty-FR`:
    case `DocReq-TreatyClaimUSAddress-FR`:
    case `DocReq-W8USAddress-FR`:
    case `DocReq-W8USParent-FR`:
    case `DocReq-PhotoId-10Years`:
    case `DocReq-PhotoId-FrontBack`:
    case `DocRec-NameTranslation`:
    case `DocReq-Entity-CN-NECIPS`:
    case `DocReq-ProofOfAddress`:
    case `DocReq-TaxResidency`:
    case `DocReq-Entity-TR-Gazetesi`:
      return _(`#PartnerDeadline_TaxRequirement_AdditionalDocuments`);
    case `F1099MISC-ConsentYes`:
    case `F1042-Consent`:
      return _(`#PartnerDeadline_TaxRequirement_NewDocuments`);
    case `FailureToComply`:
    case `FailureToComply-KYC`:
      return _(`#PartnerDeadline_TaxRequirement_Expired`);
    case `AddressCorrection`:
    case `InvalidAddress`:
    case `InvalidTaxInfo-Partner`:
    case `InvalidTIN`:
    case `InvalidTINAudit-Partner`:
    case `NameMismatch-Partner`:
    case `Notify-FailedTIN`:
    case `Notify-FailedTIN-SingLLC`:
    case `Notify-Mismatch`:
      return _(`#PartnerDeadline_TaxRequirement_Invalid`);
    case `Notify-NoTINTreaty-Partner`:
      return _(`#PartnerDeadline_TaxRequirement_NoTINTreaty`);
    case `Freeform`:
    case `Freeform-FR`:
      let _ = ``;
      return (
        _(_)
          ? (_ = _(`#PartnerDeadline_TaxRequirement_FileReceived`))
          : ((_ = _?.Parameters?.CustomMessageBody?.trim() || ``),
            _.length > 64 && (_ = _.substring(0, 64) + `...`)),
        _
      );
    default:
      return ``;
  }
}
function _() {
  let [_] = _.useState(_(`bActualAuthority`, `application_config`));
  return _;
}
function _(_) {
  return _?.Parameters?.UploadOriginalFileName !== void 0;
}
var _ = `pb980aEPJP8-`,
  _ = `_2MqhtXa-78o-`,
  _ = `MoxPAoUOBOw-`,
  _ = `htHZFzndVNk-`,
  _ = `tr0CRxLt8vY-`,
  _ = `EIZlbjeaXAE-`,
  _ = `-maRlit2vz0-`,
  _ = `KLjlBgtboDk-`,
  _ = `OAd-OQpsrlA-`,
  _ = `kzM7eb4lVuw-`,
  _ = `HoRGBGHaxs4-`;
function _(_) {
  let _ = _.useMemo(() => _(`rgDailyDeals`, `application_config`) ?? [], []),
    _ = _();
  return _.useMemo(
    () =>
      _.filter(
        (_) =>
          !_.cancelled &&
          new Date((_.rtime32_start_time + 7 * _.PerDay) * 1e3) > _,
      ).flatMap((_) => {
        let _ = new Date((_.rtime32_start_time + _.PerDay) * 1e3);
        return {
          title: _.store_item_name,
          startDate: new Date(_.rtime32_start_time * 1e3),
          endDate: _,
          eventType: `event`,
          _: _.gid,
          eventTypeName: _(_),
          getElement: () =>
            (0, _.jsx)(_, {
              deal: _,
              partnerId: _,
            }),
          getCapsuleElement: () =>
            (0, _.jsx)(_, {
              deal: _,
            }),
          passesFilter: (_) => _ == 1,
          editURL: `${_.PARTNER_BASE_URL}promotion/dailydeals/edit/${_.gid}`,
        };
      }) ?? [],
    [_, _, _],
  );
}
function _(_) {
  return _(new Date(), _)
    ? _(`#Dashboard_UpcomingEvents_EventType_DailyDealRecap`)
    : _(`#Dashboard_UpcomingEvents_EventType_DailyDeal`);
}
function _(_, _) {
  return (
    new Date((_.rtime32_start_time + _.PerDay) * 1e3).getTime() < _.getTime()
  );
}
function _(_) {
  let { deal: _, partnerId: _ } = _;
  return _(new Date(), _)
    ? (0, _.jsx)(_, {
        deal: _,
        partnerId: _,
      })
    : (0, _.jsx)(_, {
        partnerId: _,
        deal: _,
      });
}
function _(_) {
  let { partnerId: _, deal: _ } = _,
    _ = _(_.store_item_type),
    [_] = _(_.store_item_id, _, {
      include_assets: !0,
    }),
    _ = _?.GetAssets().GetHeaderURL(),
    _ = null;
  _ == 0 && _
    ? (_ = _.PARTNER_BASE_URL + `apps/landing/` + _.GetAppID())
    : _ == 2 && _
      ? (_ = _.PARTNER_BASE_URL + `bundles/view/` + _.GetID())
      : _ == 1 &&
        _ &&
        (_ = _.PARTNER_BASE_URL + `store/packagelanding/` + _.GetID());
  let _ = _.rtime32_start_time + 82800,
    { nDiscountPercentHigh: _, dtDiscountStart: _, dtDiscountEnd: _ } = _(_),
    _ = _.useMemo(() => _(_, _), [_, _]),
    _ = _(_),
    _ = _ > 0,
    _ = _ >= _.DealReady,
    _ = _ ? _(`#Dashboard_UpcomingEvents_DailyDeal_ReadyToGo`) : ``,
    _ = _(_?.toString(), _.discount_event_id?.toString()),
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `short`,
      day: `numeric`,
    }).format(new Date(_.rtime32_start_time * 1e3)),
    _ = _(_);
  return (0, _.jsxs)(_, {
    hasImage: !!_,
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
        tooltip: _.store_item_name,
      }),
      (0, _.jsxs)(_, {
        hasImage: !!_,
        children: [
          (0, _.jsx)(_, {
            text: _.store_item_name,
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`span`, {
                className: _,
                children: _(`#Dashboard_UpcomingEvents_DailyDeal_Dates`),
              }),
              (0, _.jsx)(_, {
                startTimestamp: _.rtime32_start_time,
                endTimestamp: _,
              }),
            ],
          }),
          _ &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`span`, {
                  className: `pb980aEPJP8-`,
                  children: _(`#Dashboard_UpcomingEvents_DailyDeal_Discounted`),
                }),
                (0, _.jsx)(_, {
                  startTimestamp: _,
                  endTimestamp: _,
                }),
              ],
            }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            complete: _,
            urgent: !0,
            overrideText: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              complete: _,
              urgent: !0,
              label: _(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: (0, _.jsx)(_, {
                oDailyDeal: _,
              }),
              actionStatus: _(
                `#Dashboard_UpcomingEvents_DailyDeal_EditDiscount`,
              ),
              actionUrl: _,
            }),
          !_ &&
            (0, _.jsx)(_, {
              complete: !1,
              urgent: !0,
              label: _(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusDiscountLabel`,
              ),
              status: _(`#Dashboard_UpcomingEvents_DailyDeal_DueBy`, _),
              actionStatus: _(
                `#Dashboard_UpcomingEvents_DailyDeal_EnterDiscount`,
              ),
              actionUrl: _,
            }),
          _ == _.SetUp &&
            (0, _.jsx)(_, {
              complete: !0,
              urgent: !0,
              label: _(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageSetUp`,
              ),
              actionStatus: _(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageView`,
              ),
              actionUrl: _,
            }),
          _ == _.NotSetUp &&
            (0, _.jsx)(_, {
              complete: !1,
              urgent: !0,
              label: _(
                `#Dashboard_UpcomingEvents_DailyDeal_StatusSalePageNeeded`,
              ),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { deal: _ } = _,
    _ = _(_.store_item_type),
    [_] = _(_.store_item_id, _, {
      include_assets: !0,
    }),
    _ = _?.GetAssets().GetHeaderURL();
  return (
    _ == 0 && _
      ? _.PARTNER_BASE_URL + `` + _.GetAppID()
      : ((_ == 2 && _) || (_ == 1 && _)) && _.PARTNER_BASE_URL + `` + _.GetID(),
    (0, _.jsx)(_, {
      imageUrl: _,
      title: _(`#Dashboard_UpcomingEvents_EventType_DailyDeal`),
    })
  );
}
function _(_) {
  let { deal: _, partnerId: _ } = _,
    [_, _] = _(_?.store_item_id, _(_?.store_item_type), {
      include_assets: !0,
    }),
    _ = _(_, _?.gid ? [_.gid] : [])?.get(_.gid),
    _ = !_ || !_ || _ == 1;
  if (_.cancelled || _.deleted) return null;
  let _ = `${_.PARTNER_BASE_URL}promotion/dailydeals/dashboard/${_}`,
    _;
  return (
    (_ = _?.GetAssets().GetHeaderURL()
      ? (0, _.jsx)(`img`, {
          src: _.GetAssets().GetHeaderURL(),
        })
      : _(_ ? `#DailyDeals_HeaderArtMissing` : `#DailyDeals_StoreItem_Hidden`)),
    (0, _.jsx)(`div`, {
      className: _(_),
      children: _
        ? (0, _.jsx)(_, {})
        : (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)(`div`, {
              className: _(_),
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    children: _,
                  }),
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_),
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(`span`, {
                          className: _,
                          children: _(_.rtime32_start_time),
                        }),
                        _?.GetName() || _?.store_item_name,
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _,
                          children:
                            _?.gross_sales &&
                            (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: _(`#DailyDeals_Report_Revenue`),
                                }),
                                (0, _.jsx)(`div`, {
                                  className: _(`ZCETFj0EJbk-`, void 0),
                                  children: _.gross_sales
                                    ? _(_.gross_sales)
                                    : `?`,
                                }),
                              ],
                            }),
                        }),
                        (0, _.jsx)(`div`, {
                          className: _,
                          children:
                            _?.impressions &&
                            (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(`div`, {
                                  className: `OSUmOETgbKY-`,
                                  children: _(`#DailyDeals_Report_Impressions`),
                                }),
                                (0, _.jsx)(`div`, {
                                  className: _(`ZCETFj0EJbk-`, void 0),
                                  children: _(_.impressions),
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: _(_, _),
                  children:
                    _?.marketing?.length > 1 &&
                    (0, _.jsx)(_, {
                      nGames: _.marketing.length,
                    }),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      summaryURL: _,
                    }),
                  }),
                }),
              ],
            }),
          }),
    })
  );
}
function _() {
  return (0, _.jsx)(`div`, {
    className: void 0,
    children: (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
      className: void 0,
    }),
  });
}
function _() {
  return _.useMemo(() => {
    let _ = _.Get().GetActiveEvents(),
      _ = _.Get().GetUpcomingEvents(),
      _ = _.Get().GetDraftEvents(),
      _ = (_, _) => ({
        title: _.strEventName,
        startDate: new Date(_.rtStartTime * 1e3),
        endDate: new Date(_.rtEndTime * 1e3),
        eventType: `event`,
        _: _.clanEventGID,
        eventTypeName: _,
        getElement: () =>
          (0, _.jsx)(_, {
            saleDesc: _,
          }),
        getCapsuleElement: () =>
          (0, _.jsx)(_, {
            saleDesc: _,
          }),
        passesFilter: (_) => _ == 1,
      }),
      _ = (_) => _.eEventType != 36;
    return [
      ..._.filter(_).map((_) =>
        _(_, _(`#Dashboard_UpcomingEvents_PartnerEvents_Active`)),
      ),
      ..._.filter(_).map((_) =>
        _(_, _(`#Dashboard_UpcomingEvents_PartnerEvents_Upcoming`)),
      ),
      ..._.filter(_).map((_) =>
        _(_, _(`#Dashboard_UpcomingEvents_PartnerEvents_Draft`)),
      ),
    ].filter((_) => !!_);
  }, []);
}
function _(_) {
  let { saleDesc: _ } = _;
  return _.GetClanEventModel(_.clanEventGID)
    ? (0, _.jsx)(_, {
        saleDesc: _,
        bShowAppBrowse: !0,
        bHidePartnerStats: !0,
        bShowWhyAmISeeingThis: !0,
      })
    : (0, _.jsx)(_, {
        saleDesc: _,
        message: _(`#Dashboard_UpcomingEvents_PartnerEvents_NoAccess`),
      });
}
function _(_) {
  let { saleDesc: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.GetClanEventModel(_.clanEventGID),
    _ = _(_, `capsule`, _, _.capsule_main);
  return _
    ? (0, _.jsx)(_, {
        imageUrls: _,
      })
    : void 0;
}
function _() {
  return _.useMemo(
    () =>
      _(`rgMarketingMessagePreviews`, `application_config`)?.map((_) => {
        let _ = new Date(_.start_date * 1e3),
          _ = new Date(_.end_date * 1e3);
        return {
          title: _.title,
          startDate: _,
          endDate: _,
          eventType: `event`,
          _: _.gid,
          eventTypeName: _(
            `#Dashboard_UpcomingEvents_EventType_MarketingMessagePreview`,
          ),
          getElement: () =>
            (0, _.jsx)(_, {
              marketingMessage: _,
            }),
          getCapsuleElement: () =>
            (0, _.jsx)(_, {
              marketingMessage: _,
            }),
          passesFilter: (_) => _ == 1,
        };
      }) ?? [],
    [],
  );
}
function _(_) {
  let _ = -1;
  return _ == 1 ? (_ = 0) : _ == 2 ? (_ = 1) : _ == 5 && (_ = 2), _;
}
function _(_) {
  let { marketingMessage: _ } = _,
    _ = _(),
    _ = _.visibility === 2,
    _ = _.visibility === 3,
    _ = _(_.association_type),
    [_] = _(_.associated_id, _, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = _,
    _ = _?.GetAssets().GetHeaderURL() || null,
    _ = _ ? _.PARTNER_BASE_URL + `apps/landing/` + _.GetAppID() : null,
    _ =
      _ || _
        ? _.PARTNER_BASE_URL +
          `promotion/marketingmessages/partnerpreview/` +
          _.gid
        : void 0,
    { bReady: _, bReadyExceptLiveEvent: _ } = _(null, _, !0),
    _ = _.bShowWarnings ? _.GetMarketingMesssageEditURL(_.gid) : void 0,
    _ = _(),
    _,
    _,
    _,
    _,
    _ = 0;
  _ && _.start_date > _.getTime() / 1e3
    ? ((_ = _(
        `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusVisibleOn`,
        _(_.start_date),
      )),
      (_ = _(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
      (_ = 1))
    : _
      ? ((_ = _(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusPublic`,
        )),
        (_ = _(`#Dashboard_UpcomingEvents_Events_MarketingMessage_ViewButton`)),
        (_ = 1))
      : _
        ? ((_ = _(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusReadyToPublish`,
          )),
          (_ = _(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusApproved`,
          )),
          (_ = _(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_PreviewPublishButton`,
          )))
        : _ || _
          ? ((_ = _(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_Overall`,
            )),
            (_ = _(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview`,
            )),
            (_ = _(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusValveReview_ttip`,
            )),
            (_ = 2))
          : ((_ = _(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady`,
            )),
            (_ = _(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_StatusNotReady_ttip`,
            )));
  let _ = _ === 2 ? 1 : _,
    _ = _(_);
  return (0, _.jsxs)(_, {
    hasImage: !!_,
    buttonPosition: `top`,
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
      }),
      (0, _.jsx)(_, {
        hasImage: !!_,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              text: _.title,
              url: _,
            }),
            (0, _.jsx)(`div`, {
              children: (0, _.jsx)(_, {
                startTimestamp: _.start_date,
                endTimestamp: _.end_date,
              }),
            }),
          ],
        }),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            complete: _,
            overrideText: _,
          }),
          (0, _.jsx)(_, {
            complete: _,
            label: _(
              `#Dashboard_UpcomingEvents_Events_MarketingMessage_Status`,
            ),
            status: _,
            tooltip: _,
            actionStatus: _,
            actionUrl: _,
          }),
          _,
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            url: _,
            children: `Edit MM (VO)...`,
          }),
        }),
    ],
  });
}
function _(_) {
  let _ =
      _.template_vars_json?.length > 0
        ? JSON.parse(_.template_vars_json)
        : void 0,
    _ = _?.custom_display == `partner_event` && _?.update_event_gid,
    { eventModel: _ } = _(
      _.update_event_clan_accountid,
      _.update_event_gid,
      !0,
    ),
    _ = _(_.update_event_clan_accountid, _.update_event_gid),
    _ = _?.visibility_state == _.k_EEventStateVisible,
    _ = _(_, _.k_eCommunityEdit, `allowRelative`);
  if (!_) return;
  let _ =
      _ && _.BIsVisibleEvent()
        ? _(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusPublic`,
          )
        : _(
            `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_StatusNotLive`,
          ),
    _ =
      _?.oPrivateData?.jsonData
        ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
    _ = !!_,
    _ = _(
      _
        ? `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Created`
        : `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ReviewNotSubmitted`,
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        complete: _,
        label: _(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_Status`,
        ),
        status: _,
        actionStatus: _(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Event_ViewButton`,
        ),
        actionUrl: _,
      }),
      (0, _.jsx)(_, {
        complete: _,
        label: _(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_Status`,
        ),
        tooltip: _(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ttip`,
        ),
        status: _,
        actionStatus: _(
          `#Dashboard_UpcomingEvents_Events_MarketingMessage_Ticket_ViewButton`,
        ),
        actionUrl: _ ? `${_.HELP_BASE_URL}en/wizard/HelpRequest/${_}` : void 0,
      }),
    ],
  });
}
function _(_) {
  let { marketingMessage: _ } = _,
    _ = _(_.association_type),
    [_] = _(_.associated_id, _, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = _?.GetAssets().GetHeaderURL() || null;
  return (0, _.jsx)(_, {
    imageUrl: _,
  });
}
var _ = `gMHBCK--7U8-`,
  _ = `jwZcGjRfZHc-`,
  _ = `thE2MxiJxqA-`,
  _ = `cxhAKGBxdLk-`,
  _ = `pAPaN6Fq9nA-`,
  _ = `_0VhAVxt3Fjo-`,
  _ = new Date(Date.UTC(2024, 10, 15, 17, 0, 0));
function _(_) {
  return _.useMemo(() => {
    let _ = _(`rgGermanRatingMissingApps`, `application_config`);
    return _?.length > 0
      ? [
          {
            title: _(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
            startDate: _,
            endDate: _,
            eventType: `deadline-urgent`,
            _: `storelinkdeprecationnotice`,
            eventTypeName: _(
              `#Dashboard_UpcomingEvents_EventType_GermanRatingMissing`,
            ),
            getElement: () =>
              (0, _.jsx)(_, {
                apps: _,
                partnerId: _,
              }),
            passesFilter: (_) => _ == 1,
          },
        ]
      : [];
  }, [_]);
}
function _(_) {
  let { apps: _, partnerId: _ } = _,
    _ = `${_.PARTNER_BASE_URL}doc/gettingstarted/contentsurvey/germany`,
    _ = `${_.PARTNER_BASE_URL}recommended_actions/missingratingforgermany/?partnerid=${_}`,
    _ = new Intl.DateTimeFormat(navigator.language, {
      month: `long`,
      day: `numeric`,
    }).format(_),
    _ = _.sort((_, _) => _.name.localeCompare(_.name))
      .slice(0, 30)
      .map((_) =>
        (0, _.jsx)(
          `div`,
          {
            children: _.name,
          },
          _.appid,
        ),
      ),
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _,
        _.length > 30
          ? (0, _.jsx)(`div`, {
              children: `...`,
            })
          : void 0,
      ],
    });
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              text: _(`#Dashboard_UpcomingEvents_GermanRatingMissing_Title`),
              url: _,
            }),
            (0, _.jsx)(`div`, {
              className: _(_),
              children: _(
                _.length == 1
                  ? `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc`
                  : `#Dashboard_UpcomingEvents_GermanRatingMissing_Desc_Plural`,
                _,
              ),
            }),
            (0, _.jsx)(_, {
              className: _,
              toolTipContent: _,
              children: (0, _.jsx)(`a`, {
                className: _,
                href: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(
                        `#Dashboard_UpcomingEvents_GermanRatingMissing_Count`,
                      ),
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _.length,
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            url: _,
            children: _(`#Dashboard_UpcomingEvents_General_ReadDocumentation`),
          }),
          (0, _.jsx)(_, {
            url: _,
            children: _(`#Dashboard_UpcomingEvents_General_AffectedApps`),
          }),
        ],
      }),
    ],
  });
}
function _() {
  let _ = _.useMemo(() => _(), []);
  return _.useMemo(() => {
    if (!_) return [];
    let { setRegistrations: _, mapEvents: _ } = _,
      _ = _(_.LANGUAGE);
    return (
      Array.from(_.values()).map((_) => {
        let _ = _.has(_.GID);
        return {
          title: _.GetNameWithFallback(_),
          startDate: new Date(_.startTime * 1e3),
          endDate: new Date(_.endTime * 1e3),
          eventType: `event`,
          _: _.GID,
          eventTypeName: _(`#Dashboard_UpcomingEvents_EventType_MeetSteam`),
          getElement: () =>
            (0, _.jsx)(_, {
              eventModel: _,
              registered: _,
            }),
          getCapsuleElement: () =>
            (0, _.jsx)(_, {
              eventModel: _,
            }),
          passesFilter: (_) => _ == 1,
        };
      }) ?? []
    );
  }, [_]);
}
function _(_) {
  let { eventModel: _, registered: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _
      ? _.GetNameWithFallback(_)
      : _(
          `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Title`,
          _.GetNameWithFallback(_),
        ),
    _ = _(_, _.k_eView, `allowRelative`),
    _ = _.GetImageURL(`capsule`, _, _.capsule_main);
  return (0, _.jsxs)(_, {
    hasImage: !!_,
    buttonPosition: `top`,
    children: [
      (0, _.jsx)(_, {
        imageUrl: _,
        url: _,
      }),
      (0, _.jsx)(_, {
        hasImage: !!_,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              text: _,
              url: _,
            }),
            (0, _.jsx)(_, {
              startTimestamp: _.startTime,
              endTimestamp: _.endTime,
              showTime: !0,
            }),
            (0, _.jsx)(`div`, {
              children: _.GetSummaryWithFallback(_),
            }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `cNktljFYRzg-`,
                children: [
                  (0, _.jsx)(_, {}),
                  _(
                    `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_YoureRegistered`,
                  ),
                ],
              }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          url: _,
          children: _(
            _
              ? `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_EditRegistration`
              : `#Dashboard_UpcomingEvents_Events_MeetSteam_Invited_Button_Register`,
          ),
        }),
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _ } = _,
    _ = _(_.LANGUAGE);
  return (
    !!_ &&
    (0, _.jsx)(_, {
      imageUrl: _.GetImageURL(`capsule`, _, _.capsule_main),
    })
  );
}
function _() {
  let _ = _(`rgMeetSteam`, `application_config`);
  if (!_?.rgEvents) return null;
  let _ = new Map();
  for (let _ in _.rgEvents)
    try {
      let _ = _.InitFromAccountID(_(), _.EUNIVERSE),
        _ = _(_, _.rgEvents[_]);
      _.set(_, _);
    } catch {}
  return {
    setInvitations: new Set(_.rgInvitations),
    setRegistrations: new Set(_.rgRegistrations),
    mapEvents: _,
  };
}
var _ = 7;
function _(_) {
  let _ = _();
  return _.useMemo(() => {
    let _ = _(`rgPartnerAddressRequests`, `application_config`) ?? [],
      _ = Math.floor(_.getTime() / 1e3);
    return (
      _ && !_.length
        ? [
            {
              opt_in_name: `sale_test`,
              partnerid: 0,
              rtime_target: _ + 3 * _.PerDay,
              title: `Sample Request`,
            },
          ]
        : _
    ).map((_) => {
      let _ = _.rtime_target > 0,
        _ = _ && _.rtime_target < _,
        _ = _ && _ >= _.rtime_target - _ * _.PerDay,
        _ = _ && !_ ? new Date(_.rtime_target * 1e3) : _,
        _ =
          _.title || _(`#Dashboard_UpcomingEvents_AddressRequest_DefaultTitle`);
      return {
        _: `addressrequest_${_.opt_in_name}_${_.partnerid}`,
        title: _,
        startDate: _,
        endDate: _,
        eventType: _ ? `deadline-urgent` : `deadline`,
        eventTypeName: _(`#Dashboard_UpcomingEvents_AddressRequest_Header`),
        getElement: () =>
          (0, _.jsx)(_, {
            request: _,
            strTitle: _,
            bOverdue: _,
            bUrgent: _,
          }),
        passesFilter: (_) => _ == 1,
      };
    });
  }, [_, _]);
}
function _(_) {
  let { request: _, strTitle: _, bOverdue: _, bUrgent: _ } = _,
    _ = new Date(_.rtime_target * 1e3).toLocaleDateString(
      _.GetPreferredLocales(),
      {
        month: `short`,
        day: `numeric`,
        year: `numeric`,
      },
    ),
    _;
  return (
    (_ = _.rtime_target
      ? _(
          _
            ? `#Dashboard_UpcomingEvents_AddressRequest_Desc_Overdue`
            : `#Dashboard_UpcomingEvents_AddressRequest_Desc`,
          _,
        )
      : _(`#Dashboard_UpcomingEvents_AddressRequest_Desc_NoDate`)),
    (0, _.jsx)(_, {
      title: _,
      body: _,
      urgent: _,
      rightCol: (0, _.jsx)(_, {
        url: `${_.PARTNER_BASE_URL}optin/address/${_.opt_in_name}/${_.partnerid}`,
        children: _(`#Dashboard_UpcomingEvents_AddressRequest_Action`),
      }),
    })
  );
}
function _(_, _, _, _) {
  let _ = _.useMemo(() => _(`sEventIds`, `application_config`)?.split(`,`), []),
    _ = _.now,
    _ = _.bShowWarnings,
    _ = _(),
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_),
    _ = _(),
    _ = _(_),
    _ = _(),
    _ = _(_),
    _ = _(_.additionalEventStore),
    _ = _(_.additionalEventStore),
    _ = _();
  return _.useMemo(() => {
    let _ = _.concat(_, _, _, _, _, _, _, _, _, _ ? _ : []).filter((_) =>
        _(_, _, _, _, _),
      ),
      _ = _.length;
    return {
      rgShownEvents: _.filter((_) => (_ == 3) == _.has(_(_))),
      nShouldBeShownCount: _,
    };
  }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]);
}
function _(_, _, _, _, _) {
  return !(
    (_.valveOnly && !_) ||
    (_?.length > 0 && !_.includes(_._)) ||
    _.has(_._) ||
    (_.dimmed && _ >= _.startDate) ||
    new Date(_.startDate.getTime() + 21 * _.PerDay * 1e3) < _
  );
}
function _(_) {
  return JSON.stringify({
    usage: `dashboard`,
    eventId: _._,
  });
}
var _ = _.createContext({
  now: new Date(),
  bShowWarnings: !1,
  additionalEventStore: void 0,
  setManageDiscountsAppIDs: void 0,
});
function _() {
  return _.useContext(_);
}
function _() {
  return _.useContext(_).now;
}
function _() {
  return _.useContext(_).additionalEventStore;
}
function _(_) {
  let { showWarnings: _ } = _,
    _ = _.useMemo(
      () =>
        new Set(
          _(`rgManageDiscountsAppIDs`, `application_config`)?.map((_) =>
            Number(_),
          ) ?? [],
        ),
      [],
    ),
    _ = _.useMemo(() => new _(), []),
    _ = _.useMemo(() => new Date(), []),
    _ = _.useMemo(
      () => ({
        now: _,
        bShowWarnings: _,
        additionalEventStore: _,
        setManageDiscountsAppIDs: _,
      }),
      [_, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { partnerId: _, testData: _ } = _,
    [_] = _(`expanded`, !1),
    [_, _] = _.useState(!!_),
    _ = _.useCallback((_) => {
      _(_), !_ && _.current.scrollIntoView();
    }, []),
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      (_) => {
        _(_), _ && _(!0);
      },
      [_, _],
    ),
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      (_) => {
        _(_), _ && _(!0);
      },
      [_, _],
    ),
    [_, _] = _.useState(``),
    _ = _.useCallback(
      (_) => {
        _ && (_(!0), _(!0), _(!0)), _(_);
      },
      [_, _],
    ),
    [_, _] = _.useState(0),
    _ = () => {
      _(0), _(``);
    },
    _ = _(),
    { rgShownEvents: _, nShouldBeShownCount: _ } = _(_, _, _, _),
    _ = _(_, _, _, _, _, _),
    _ = _.useMemo(() => _.filter((_) => _(_.now, _, _, _)), [_.now, _, _, _]),
    _ = _(_, _),
    _ = _ != 0 || (_ && _.trim().length > 0),
    _ = _.useMemo(() => new Map(), []),
    _ = _.useRef(void 0),
    _ = _(_, _),
    _ = _.useCallback(
      (_) => {
        if (_(_).getTime() == _(_.now).getTime()) {
          _.current.scrollIntoView();
          return;
        }
        let _ = _?.get(_(_).getTime() / 1e3);
        _ && _(_.element);
      },
      [_.now, _, _],
    ),
    [_, _] = _.useState();
  _.useEffect(() => _(void 0), [_]);
  let _ = _.useMemo(
      () =>
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              filterType: _,
              setFilterType: _,
            }),
            (0, _.jsx)(_, {
              filterText: _,
              setFilterText: _,
            }),
          ],
        }),
      [_, _, _],
    ),
    _ = _ > 0 || _ != 0,
    _ = _ == 0 && _ != null && _?.length == 0;
  return (0, _.jsx)(_.Fragment, {
    children:
      _ &&
      (0, _.jsx)(_, {
        title: _(`#Dashboard_UpcomingEvents_Title`),
        ref: _,
        headerElement: _,
        children: (0, _.jsx)(`div`, {
          className: `XCgSZWm6N7w-`,
          children: (0, _.jsxs)(`div`, {
            className: `Xpe0MYEePcY-`,
            children: [
              _ &&
                (0, _.jsx)(`div`, {
                  className: `mhJoiRoACzY-`,
                  children: _(
                    `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed`,
                    (0, _.jsx)(`a`, {
                      onClick: () => {
                        _(3), _(``);
                      },
                      children: _(
                        `#Dashboard_UpcomingEvents_Filter_DismissedAllDismissed_LinkText`,
                      ),
                    }),
                  ),
                }),
              !_ &&
                (0, _.jsx)(_, {
                  events: _,
                  filterVisibleEventIds: _,
                  dayRefsToScrollTo: _,
                  fnScrollToDay: _,
                  isExpanded: _,
                  fnSetExpanded: _,
                  filterEnabled: _,
                  filterType: _,
                  clearAllFilters: _,
                  hoverEvent: _,
                  setHoverEvent: _,
                }),
            ],
          }),
        }),
      }),
  });
}
function _(_, _) {
  return _.startDate != _.endDate && _ >= _.startDate && _ <= _.endDate;
}
function _(_, _) {
  return _ > _.endDate;
}
function _(_, _, _, _, _, _) {
  let _ = _();
  return (
    _.useMemo(
      () =>
        _.forEach((_) =>
          _(!_(_, _) || !_(_, _), `An event can't be both live and a recap`),
        ),
      [_, _],
    ),
    _.useMemo(() => {
      let _ = _;
      if (_ == 0) {
        let _ = (_, _, _) => {
          let _ = _.filter((_) => _(_));
          return _.length > 1 ? _.filter((_) => !_(_)).concat(_(_)) : _;
        };
        _ ||
          (_ = _(
            _,
            (_) => _(_, _),
            (_) => ({
              title: _(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
              startDate: _[0].startDate,
              endDate: _[0].endDate,
              eventType: `event`,
              _: `live_placeholder`,
              eventTypeName: ``,
              getElement: () =>
                (0, _.jsx)(_, {
                  text: _(`#Dashboard_UpcomingEvents_Events_Placeholder_Live`),
                  events: _,
                  expanded: _,
                  setExpanded: _,
                }),
            }),
          )),
          _ ||
            (_ = _(
              _,
              (_) => _(_, _),
              (_) => ({
                title: _(`#Dashboard_UpcomingEvents_Events_Placeholder_Recap`),
                startDate: _[0].startDate,
                endDate: _[0].endDate,
                eventType: `event`,
                _: `recap_placeholder`,
                eventTypeName: ``,
                getElement: () =>
                  (0, _.jsx)(_, {
                    text: _(
                      `#Dashboard_UpcomingEvents_Events_Placeholder_Recap`,
                    ),
                    events: _,
                    expanded: _,
                    setExpanded: _,
                  }),
              }),
            ));
      }
      return _;
    }, [_, _, _, _, _, _, _])
  );
}
function _(_) {
  let { filterText: _, setFilterText: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`input`, {
        className: _,
        type: `text`,
        value: _,
        onChange: (_) => _(_.target.value),
        placeholder: _(`#Dashboard_UpcomingEvents_Events_FilterEmpty`),
      }),
      (0, _.jsx)(`button`, {
        className: _,
        onClick: () => _(``),
        children: `✖`,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: `🔍`,
      }),
    ],
  });
}
function _(_) {
  let { filterType: _, setFilterType: _ } = _,
    _ = _.useMemo(
      () => [
        {
          type: 0,
          text: _(`#Dashboard_UpcomingEvents_Filter_All`),
        },
        {
          type: 1,
          text: _(`#Dashboard_UpcomingEvents_Filter_Events`),
        },
        {
          type: 2,
          text: _(`#Dashboard_UpcomingEvents_Filter_Releases`),
        },
        {
          type: 3,
          text: _(`#Dashboard_UpcomingEvents_Filter_Dismissed`),
        },
      ],
      [],
    );
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        `div`,
        {
          className: _(_, _ == _.type && `VSt5dZb4mv0-`),
          onClick: () => _(_.type),
          children: _.text,
        },
        _.type,
      ),
    ),
  });
}
function _(_) {
  let { partnerId: _, showWarnings: _, testData: _ } = _,
    _ = _.useMemo(() => new Date(), []),
    _ = _.useMemo(() => new _(), []),
    _ = _.useMemo(
      () =>
        new Set(
          _(`rgManageDiscountsAppIDs`, `application_config`)?.map((_) =>
            Number(_),
          ) ?? [],
        ),
      [],
    ),
    _ = _.useMemo(
      () => ({
        now: _,
        bShowWarnings: _,
        bExpanded: !0,
        additionalEventStore: _,
        setManageDiscountsAppIDs: _,
      }),
      [_, _, _, _],
    ),
    { rgShownEvents: _ } = _(_, _, 0, _),
    _ = _.useMemo(
      () =>
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              event: _,
              setHoverEvent: () => {},
              showHeader: !1,
              showDateInHeader: !1,
            },
            _._,
          ),
        ),
      [_],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      events: _,
      filterVisibleEventIds: _,
      dayRefsToScrollTo: _,
      fnScrollToDay: _,
      filterEnabled: _,
      filterType: _,
      clearAllFilters: _,
      isExpanded: _,
      fnSetExpanded: _,
      hoverEvent: _,
      setHoverEvent: _,
    } = _,
    _ = _(),
    _ = _.useMemo(() => _.filter((_) => _(_, _)), [_, _]),
    _ = _.useMemo(() => _.filter((_) => _(_, _)), [_, _]),
    _ = _.useMemo(
      () =>
        Array.from(
          _(
            _(
              _.filter((_) => !_(_, _) && !_(_, _)),
              (_) => _(_.startDate),
            ),
          ),
        ).sort(_),
      [_, _],
    ),
    [_, _] = _.useState(!1),
    _ = _.useRef(void 0);
  _.useLayoutEffect(() => {
    let _ = () => {
      if (_.current) {
        let _ = _.current.scrollHeight > _.current.offsetHeight;
        _(_);
      }
    };
    return (
      _(),
      window.addEventListener(`resize`, _),
      () => window.removeEventListener(`resize`, _)
    );
  });
  let _ = _.useCallback(
      (_, _, _, _, _) =>
        _.length > 0
          ? (0, _.jsx)(
              _,
              {
                date: new Date(_ * 1e3),
                events: _,
                filterVisibleEventIds: _,
                dayRefsToScrollTo: _,
                fnScrollToDay: _,
                firstMonth: _ == 0,
                lastMonth: _ == _.length - 1,
                hoverEvent: _,
                setHoverEvent: _,
                eventTimeGroup: _,
                showHeader: _,
              },
              `${_ == `normal` ? `` : _ + `_`}${_}`,
            )
          : void 0,
      [_, _.length, _, _, _, _],
    ),
    _ = _.useCallback(
      (_, _, _) => _.map(([_, _], _) => _(_, _, _, _, _)).filter((_) => !!_),
      [_],
    ),
    _ = _.useMemo(
      () => _(0, _, 0, `recap`, _.length != 1 || _[0].eventTypeName.length > 0),
      [_, _],
    ),
    _ = _.useMemo(
      () => _(0, _, 0, `live`, _.length != 1 || _[0].eventTypeName.length > 0),
      [_, _],
    ),
    _ = _.useMemo(() => _(_, `normal`, !0), [_, _]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `VnoIh0BbNTk-`, _ && `qAzXCetKhDY-`),
        ref: _,
        children: [
          _,
          _,
          _,
          _ &&
            _.length == 0 &&
            (0, _.jsx)(`div`, {
              className: `mhJoiRoACzY-`,
              children: _(
                _ == 3
                  ? `#Dashboard_UpcomingEvents_Filter_DismissedNoEvents`
                  : `#Dashboard_UpcomingEvents_Filter_NoEvents`,
                (0, _.jsx)(`a`, {
                  onClick: () => _(),
                  children: _(
                    `#Dashboard_UpcomingEvents_Filter_NoEvents_LinkText`,
                  ),
                }),
              ),
            }),
        ],
      }),
      _ &&
        !_ &&
        _.length > 0 &&
        (0, _.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => _(!0),
          children: _(`#Dashboard_UpcomingEvents_ShowMore`),
        }),
      _ &&
        _.length > 0 &&
        (0, _.jsx)(`button`, {
          className: `_8pE5hC3-T3Y-`,
          onClick: () => _(!1),
          children: _(`#Dashboard_UpcomingEvents_ShowLess`),
        }),
    ],
  });
}
function _(_) {
  let {
      date: _,
      events: _,
      eventTimeGroup: _,
      filterVisibleEventIds: _,
      dayRefsToScrollTo: _,
      fnScrollToDay: _,
      firstMonth: _,
      lastMonth: _,
      hoverEvent: _,
      setHoverEvent: _,
      showHeader: _,
    } = _,
    _ = _(),
    _ = _.useMemo(
      () =>
        _.getFullYear() == _.getFullYear()
          ? new Intl.DateTimeFormat(navigator.language, {
              month: `long`,
            }).format(_)
          : new Intl.DateTimeFormat(navigator.language, {
              year: `numeric`,
              month: `long`,
            }).format(_),
      [_, _],
    ),
    _ = _.useMemo(() => Array.from(_(_, (_) => _(_.startDate))).sort(_), [_]),
    _ = _.useRef(void 0),
    _ = _.useMemo(
      () =>
        _.reduce(
          (_, [_]) =>
            _.set(_, (_) =>
              _.set(_, {
                element: _,
                header: _.current,
              }),
            ),
          new Map(),
        ),
      [_, _],
    ),
    _ = _.useMemo(
      () =>
        _.map(([_, _]) =>
          (0, _.jsx)(
            _,
            {
              events: _,
              showHeader: _,
              showDateInHeader: !0,
              refScrollTo: _.get(_),
              setHoverEvent: _,
            },
            _,
          ),
        ),
      [_, _, _, _],
    ),
    _ = _.useMemo(() => _.map((_) => [_, _(_)]), [_]),
    _ = _.useMemo(() => _.reduce((_, _) => _.set(_[1], _[0]), new Map()), [_]),
    _ = _.useMemo(() => _.map((_) => _[1]), [_]),
    _ = _.useCallback((_, _) => _(_.get(_), _.get(_)), [_]),
    _ = _.useCallback((_, _) => _(_.get(_), _.get(_)), [_]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _.length > 0 &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(`div`, {
              className: `tjsar3R67bg-`,
              children: [
                _ == `normal` &&
                  (0, _.jsxs)(`div`, {
                    className: `_0KwEcSKsYOI-`,
                    children: [
                      (0, _.jsx)(_, {
                        viewDate: _,
                      }),
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)(_, {
                        now: _,
                        viewDate: _,
                        events: _,
                        filterVisibleEventIds: _,
                        fnScrollToDay: _,
                        hoverEvent: _(_),
                        bShowPreceedingWeeks: _,
                        bShowFollowingWeeks: _,
                        compareEvents: _,
                        colorPriority: _,
                      }),
                    ],
                  }),
                _ == `live` &&
                  (0, _.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, _.jsx)(`div`, {
                      className: _(`R9qMCNp8MZc-`, `u9X-GE-Ixi4-`),
                      children: (0, _.jsx)(`div`, {
                        className: `CRh4Y0YKsSc-`,
                        children: _(`#Dashboard_UpcomingEvents_EventIsLive`),
                      }),
                    }),
                  }),
                _ == `recap` &&
                  (0, _.jsx)(`div`, {
                    className: `_4BYIPo0lYb0-`,
                    children: (0, _.jsx)(`div`, {
                      className: _(`R9qMCNp8MZc-`, `_91lVTBaZFYA-`),
                      children: (0, _.jsx)(`div`, {
                        className: `_0srcByIPSwg-`,
                        children: _(`#Dashboard_UpcomingEvents_EventIsRecap`),
                      }),
                    }),
                  }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: `_5CcFPj3DS7I-`,
              children: _,
            }),
          ],
        }),
      _.length == 0 &&
        (0, _.jsx)(`div`, {
          className: `oUtOtwTHBIo-`,
          children: _(`#Dashboard_UpcomingEvents_NoEventsInMonth`, _),
        }),
    ],
  });
}
function _(_) {
  if (!_) return;
  let _,
    _ = !1;
  switch (_.eventType) {
    case `deadline`:
      (_ = `#cf980c`), (_ = !0);
      break;
    case `deadline-urgent`:
      (_ = `#cf520c`), (_ = !0);
      break;
    case `release-game`:
      _ = `#426283`;
      break;
    case `release-dlc`:
      _ = `#a655b2`;
      break;
    case `event`:
      _ = `#657f2d`;
  }
  return {
    ..._,
    note: _,
    color: _,
  };
}
function _(_) {
  let {
      events: _,
      showHeader: _,
      showDateInHeader: _,
      refScrollTo: _,
      setHoverEvent: _,
    } = _,
    _ = _.useMemo(() => {
      let _ = _.reduce((_, _) => {
        let _ = `${_.eventType}_${_.eventTypeName}`,
          _ = _.get(_) || [];
        return _.set(_, [..._, _]), _;
      }, new Map());
      for (let _ of _.values()) _.sort(_);
      return Array.from(_).sort(([_, _], [_, _]) =>
        (_[0].eventTypeSortWeight ?? 0) == (_[0].eventTypeSortWeight ?? 0)
          ? _.localeCompare(_)
          : (_[0].eventTypeSortWeight ?? 0) - (_[0].eventTypeSortWeight ?? 0),
      );
    }, [_]),
    _ = _.useMemo(
      () =>
        _.map(([_, _]) =>
          (0, _.jsx)(
            _,
            {
              events: _,
              showHeader: _,
              showDateInHeader: _,
              refScrollTo: _,
              setHoverEvent: _,
            },
            _,
          ),
        ),
      [_, _, _, _, _],
    );
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    children: _,
  });
}
function _(_) {
  let {
      events: _,
      showHeader: _,
      showDateInHeader: _,
      refScrollTo: _,
      setHoverEvent: _,
    } = _,
    _ = _.useMemo(
      () =>
        _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              event: _,
              setHoverEvent: _,
              showHeader: _ && _ == 0,
              showDateInHeader: _,
            },
            _._,
          ),
        ),
      [_, _, _, _],
    );
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    children: _,
  });
}
function _(_) {
  let { event: _, showHeader: _, showDateInHeader: _, setHoverEvent: _ } = _,
    _ = _();
  _(_);
  let _ = _.eventType == `deadline`,
    _ = _.eventType == `deadline-urgent`,
    _ = _.eventType == `release-game`,
    _ = _.eventType == `release-dlc`,
    _ = _.eventType == `event`,
    _ = _(
      _,
      _ && `_3C1k9qRvbdA-`,
      _ && `YuJdkBechnU-`,
      _ && `gQsf3C23sME-`,
      _ && `SHJ-hn37ylI-`,
      _ && `dzpT-RzTvHk-`,
    ),
    _ = _(
      _,
      _ && `_3C1k9qRvbdA-`,
      _ && `YuJdkBechnU-`,
      _ && `gQsf3C23sME-`,
      _ && `SHJ-hn37ylI-`,
      _ && `dzpT-RzTvHk-`,
    ),
    _ = _.getElement(),
    _ = _(_),
    _ = _.Get().GetDismissState(_),
    _ = _.useCallback(
      (_) => (_ ? _.Get().SetDismiss(_, _.endDate) : _.Get().ClearDismiss(_)),
      [_.endDate, _],
    ),
    _ = _(_._);
  return (
    _ &&
    (0, _.jsxs)(`div`, {
      className: _(
        `DhGBJeASLLw-`,
        _ && `YuJdkBechnU-`,
        _.dimmed && `_6Nj-6kVdKm0-`,
      ),
      onPointerEnter: () => _(_),
      onPointerLeave: () => _(void 0),
      children: [
        _ &&
          (0, _.jsxs)(`div`, {
            className: `RgKUFbhH4Z8-`,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  className: _,
                  toolTipContent: new Intl.DateTimeFormat(navigator.language, {
                    month: `numeric`,
                    day: `numeric`,
                    year: `2-digit`,
                  }).format(_.startDate),
                  children: _ ? _.startDate.getDate() : ``,
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`span`, {
                    className: _(!_ && void 0),
                    children: _.eventTypeName,
                  }),
                  _.valveOnly &&
                    (0, _.jsx)(`span`, {
                      className: `_9jEXghBXAdI-`,
                      children: `(VO)`,
                    }),
                  (0, _.jsx)(`span`, {
                    className: `eLvHWGPkrPY-`,
                  }),
                  _ &&
                    (0, _.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, _.jsx)(`a`, {
                          href: _,
                          target: `_blank`,
                          children: `isolate`,
                        }),
                        `\xA0(dev)`,
                      ],
                    }),
                  _.bShowWarnings &&
                    _.editURL &&
                    (0, _.jsxs)(`span`, {
                      className: `Cnoyn-h5IJI-`,
                      children: [
                        (0, _.jsx)(`a`, {
                          href: _.editURL,
                          target: `_blank`,
                          children: `edit`,
                        }),
                        `\xA0(VO)`,
                      ],
                    }),
                  !_ &&
                    (0, _.jsxs)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => _(!0),
                      children: [
                        _(`#Dashboard_UpcomingEvents_Dismiss`),
                        (0, _.jsx)(_, {
                          tooltip: _(`#Dashboard_UpcomingEvents_Dismiss_ttip`),
                        }),
                      ],
                    }),
                  _ &&
                    (0, _.jsx)(`span`, {
                      className: `JRQyhHw6PzA-`,
                      onClick: () => _(!1),
                      children: _(`#Dashboard_UpcomingEvents_Undismiss`),
                    }),
                ],
              }),
            ],
          }),
        (0, _.jsxs)(`div`, {
          className: _(`_4Qsmx4g89QU-`, `QH6w-cg8K-I-`),
          children: [
            (0, _.jsx)(`div`, {
              className: _(`_1TsAMPF7hS0-`, _.loading && `Y0fsODLAA9E-`),
              children: (0, _.jsx)(_, {
                size: `small`,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: `dKTIVgFsruk-`,
              children: (0, _.jsx)(_, {
                children: _,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  return null;
}
function _(_) {
  let { text: _, events: _, expanded: _, setExpanded: _ } = _,
    _ = _.slice(0, 4).map((_) => ({
      event: _,
      element: _.getCapsuleElement?.(),
    }));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      !_ &&
        (0, _.jsx)(`div`, {
          className: `rb79huJ8qFw-`,
          children: (0, _.jsx)(`button`, {
            className: `_8pE5hC3-T3Y-`,
            onClick: () => _(!0),
            children: _,
          }),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              children: (0, _.jsx)(`div`, {
                className: _,
                children:
                  _.element ||
                  (0, _.jsx)(`div`, {
                    className: `oV1UvkuDMaA-`,
                    children: _.event.title,
                  }),
              }),
            },
            _.event._,
          ),
        ),
      }),
    ],
  });
}
function _(_, _) {
  return _[0] - _[0];
}
function _(_, _) {
  return _.startDate.getTime() < _.startDate.getTime()
    ? -1
    : _.startDate.getTime() > _.startDate.getTime()
      ? 1
      : _.eventType < _.eventType
        ? -1
        : _.eventType > _.eventType
          ? 1
          : _?._ < _?._
            ? -1
            : +(_?._ > _?._);
}
function _(_, _) {
  let _ = (_) => {
    switch (_) {
      case `deadline`:
        return 4;
      case `deadline-urgent`:
        return 3;
      case `release-game`:
        return 0;
      case `release-dlc`:
        return 1;
      case `event`:
        return 2;
    }
  };
  return _(_.eventType) < _(_.eventType)
    ? -1
    : _(_.eventType) > _(_.eventType)
      ? 1
      : _._ < _._
        ? -1
        : +(_._ > _._);
}
function _(_) {
  let _ = Math.min(..._.keys()),
    _ = Math.max(..._.keys()),
    _ = new Date(_);
  for (_.setMonth(_.getMonth() + 1); _.getTime() < _; )
    _.has(_.getTime()) || _.set(_.getTime(), []),
      (_ = new Date(_)),
      _.setMonth(_.getMonth() + 1);
  return _;
}
function _(_, _) {
  let _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        _ ? _.scrollIntoView() : (_(!0), (_.current = _));
      },
      [_, _],
    );
  return (
    _.useEffect(() => {
      _ && _.current && (_.current.scrollIntoView(), (_.current = void 0));
    }, [_]),
    _
  );
}
function _(_) {
  let _ = _();
  _.useEffect(() => {
    let _ = _.registerForChange?.(() => _());
    return () => _?.Unregister();
  }, [_, _]);
}
function _(_, _, _, _) {
  return !(
    (_ &&
      _.trim().length > 0 &&
      ((_ = _.trim()),
      !_.title.toLocaleLowerCase().includes(_.toLocaleLowerCase()) &&
        !_.eventTypeName
          .toLocaleLowerCase()
          .includes(_.toLocaleLowerCase()))) ||
    (_ != 0 && _ != 3 && (!_.passesFilter || !_.passesFilter(_)))
  );
}
function _(_, _) {
  return _.useMemo(() => {
    let _ = new Set(_.map((_) => _._));
    return new Set(_.filter((_) => _.has(_._)).map((_) => _._));
  }, [_, _]);
}
var _ = `g31b3nBKzAo-`,
  _ = `XwuHu386DZc-`,
  _ = `IhE0In-8-D8-`,
  _ = `s-F6pJ3AneU-`,
  _ = `_1gJzmUa0F58-`,
  _ = `EobOPLhq6ME-`,
  _ = `qTOvIUzXQXA-`,
  _ = `zN1ZNI7AxHc-`;
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 60 39`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M20.2544 28.0733H21.8805C22.6505 28.0733 23.3893 27.7674 23.9338 27.2226C24.4782 26.6782 24.7841 25.9397 24.7841 25.1697V22.5369C24.7841 21.9376 24.5491 21.3626 24.1288 20.9351C23.7088 20.5079 23.1379 20.2628 22.5386 20.2527H20.2544V28.0733Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M53.0371 23.7372C53.0371 24.5497 52.3783 25.2085 51.5658 25.2085C50.7535 25.2085 50.0947 24.5497 50.0947 23.7372C50.0947 22.9246 50.7535 22.2661 51.5658 22.2661C52.3783 22.2661 53.0371 22.9246 53.0371 23.7372Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M13.7505 13.4774V16.0812C13.7635 16.6785 14.0095 17.2472 14.4364 17.665C14.8637 18.0831 15.4374 18.3169 16.0348 18.3169H18.319V10.4963H16.6835C15.8946 10.4881 15.1365 10.8012 14.5832 11.3636C14.0303 11.9257 13.7297 12.6889 13.7505 13.4774Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M32.421 17.4362C32.421 17.1362 32.4985 16.8265 32.5467 16.5263C32.5952 16.2263 32.6242 16.168 32.6724 15.9938C32.721 15.8196 32.7887 15.4613 32.8659 15.1904C32.9434 14.9194 32.9821 14.8227 33.0401 14.6387C33.0981 14.4547 33.2046 14.1355 33.3013 13.8935C33.398 13.6516 33.4563 13.5259 33.5335 13.3419C33.611 13.1579 33.7367 12.8771 33.853 12.6449C33.9693 12.4127 34.0464 12.2867 34.1435 12.1125C34.2402 11.9382 34.3952 11.6673 34.521 11.4543C34.6467 11.2413 34.7437 11.1058 34.8596 10.9413C34.9759 10.7769 35.1501 10.5251 35.2951 10.3317L35.6921 9.83797L35.9243 9.54747L35.9249 9.5481C33.7871 5.89204 30.5051 3.0416 26.5855 1.43715C22.666 -0.167213 18.327 -0.436528 14.2392 0.670589C10.1512 1.77802 6.54175 4.20066 3.96828 7.56433C1.39449 10.9277 0 15.0453 0 19.2807C0 23.5159 1.39449 27.6328 3.96828 30.9962C6.54175 34.3599 10.1512 36.7824 14.2392 37.89C18.327 38.9974 22.6656 38.7281 26.5855 37.1234C30.505 35.519 33.7871 32.6687 35.9249 29.0124L35.6927 28.722L35.3055 28.2282C35.1505 28.025 35.0055 27.8218 34.8603 27.6088L34.5216 27.0959C34.3861 26.8829 34.2604 26.6605 34.1344 26.4377C34.0086 26.2149 33.9409 26.0892 33.8536 25.9052C33.7667 25.7212 33.6309 25.4405 33.5341 25.1985C33.4374 24.9566 33.3697 24.8403 33.3019 24.6566C33.2342 24.4726 33.1277 24.1629 33.0407 23.9115C32.9538 23.6597 32.915 23.5532 32.8665 23.3598C32.818 23.1663 32.731 22.8273 32.6731 22.5564C32.6151 22.2854 32.5861 22.2079 32.5568 22.0239C32.5278 21.8399 32.4601 21.4237 32.4213 21.114C32.4213 20.959 32.4213 20.814 32.3633 20.659C32.3633 20.2041 32.2956 19.6911 32.2956 19.2749C32.2956 18.8587 32.2956 18.307 32.3633 17.8908C32.3728 17.7462 32.4018 17.5912 32.421 17.4362ZM22.5388 18.3171C23.6573 18.3196 24.7292 18.7651 25.52 19.5559C26.3108 20.3468 26.7563 21.4186 26.7588 22.5371V25.0924C26.7588 26.3759 26.2491 27.6069 25.3414 28.5143C24.434 29.4221 23.2029 29.9318 21.9194 29.9318H20.2545V32.2161C20.2545 32.7507 19.8213 33.1839 19.2866 33.1839C18.7523 33.1839 18.3187 32.7507 18.3187 32.2161V30.0093H16.0345C14.9154 30.0093 13.8419 29.5648 13.0505 28.7733C12.2593 27.9819 11.8145 26.9084 11.8145 25.7893C11.8145 25.2547 12.248 24.8214 12.7824 24.8214C13.317 24.8214 13.7503 25.2547 13.7503 25.7893C13.7503 26.3952 13.991 26.9762 14.4195 27.4043C14.8477 27.8328 15.429 28.0735 16.0345 28.0735H18.3187V20.2529H16.0345C14.9154 20.2529 13.8419 19.8083 13.0505 19.0169C12.2593 18.2254 11.8145 17.152 11.8145 16.0329V13.4776C11.8145 12.194 12.3246 10.963 13.2319 10.0556C14.1397 9.14792 15.3707 8.63816 16.6539 8.63816H18.2898V6.27642C18.2898 5.74206 18.723 5.30853 19.2576 5.30853C19.7923 5.30853 20.2255 5.74206 20.2255 6.27642V8.56065H22.5098C23.6283 8.56317 24.7001 9.00868 25.491 9.79948C26.2818 10.5903 26.7273 11.6622 26.7298 12.7807C26.7298 13.3153 26.2966 13.7486 25.7619 13.7486C25.2272 13.7486 24.794 13.3153 24.794 12.7807C24.794 12.1748 24.5533 11.5938 24.1248 11.1657C23.6966 10.7372 23.1156 10.4964 22.5098 10.4964H20.2545V18.3171H22.5388Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M44.1421 14.8326C44.1421 15.6451 43.4836 16.3036 42.6711 16.3036C41.8585 16.3036 41.1997 15.6451 41.1997 14.8326C41.1997 14.02 41.8585 13.3612 42.6711 13.3612C43.4836 13.3612 44.1421 14.02 44.1421 14.8326Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M47.1135 32.1772C51.1064 32.1754 54.873 30.3237 57.3127 27.1629C59.7526 24.0024 60.5903 19.8898 59.5812 16.0265C58.572 12.1634 55.8299 8.98595 52.1562 7.42192C48.4822 5.8582 44.2911 6.08509 40.8077 8.0363C37.324 9.98725 34.9411 13.4422 34.3547 17.3918C33.7684 21.3415 35.0453 25.3397 37.8119 28.2185C40.2456 30.7473 43.6039 32.1764 47.1134 32.177L47.1135 32.1772ZM51.5657 27.1538C50.6624 27.1538 49.7957 26.7949 49.1567 26.156C48.5177 25.517 48.1589 24.6506 48.1589 23.747C48.1589 22.8434 48.5178 21.9769 49.1567 21.338C49.7957 20.699 50.6624 20.3398 51.5657 20.3398C52.4693 20.3398 53.3361 20.699 53.975 21.338C54.614 21.9769 54.9729 22.8434 54.9729 23.747C54.9678 24.6481 54.6067 25.5107 53.9688 26.1469C53.3307 26.7833 52.4671 27.1419 51.5657 27.1444V27.1538ZM42.6708 11.4255C43.5744 11.4255 44.4408 11.7847 45.0798 12.4237C45.7187 13.0623 46.0776 13.9291 46.0776 14.8327C46.0776 15.7363 45.7187 16.6027 45.0798 17.2417C44.4408 17.8806 43.5744 18.2395 42.6708 18.2395C41.7672 18.2395 40.9004 17.8806 40.2618 17.2417C39.6228 16.6027 39.2636 15.7363 39.2636 14.8327C39.2661 13.9297 39.626 13.0648 40.2643 12.4262C40.9029 11.7878 41.7678 11.428 42.6708 11.4255ZM39.5443 25.489L53.3271 11.7159C53.7112 11.387 54.2836 11.409 54.6413 11.7666C54.9989 12.1242 55.0209 12.6967 54.692 13.0805L40.9189 26.8536C40.5351 27.1825 39.9627 27.1605 39.605 26.8028C39.2474 26.4452 39.2254 25.8728 39.5543 25.489H39.5443Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 55 37`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M33.6009 7.90708H50.8782C52.0142 7.90708 53.0449 8.3717 53.791 9.12055C54.5374 9.86976 55 10.9044 55 12.0447V25.672C55 27.9496 53.1458 29.8097 50.8783 29.8097H48.12C47.3373 31.81 45.8447 33.5566 43.8136 34.8285C41.6511 36.1828 38.8737 37 35.704 37C34.988 37 34.4074 36.4171 34.4074 35.6983C34.4074 35.1888 34.699 34.7479 35.1234 34.534C36.2956 33.8138 36.9901 33.0738 37.3857 32.1952C37.6859 31.5282 37.8413 30.7449 37.9168 29.8096H25.5205C23.2519 29.8096 21.3991 27.9482 21.3991 25.6719V21.9028H17.0836C17.1592 22.8378 17.3146 23.6212 17.6148 24.2881C18.0105 25.167 18.7048 25.9068 19.8768 26.6272C20.3014 26.8411 20.5928 27.2819 20.5928 27.7913C20.5928 28.5101 20.0122 29.093 19.2961 29.093C16.1265 29.093 13.3488 28.2756 11.1865 26.9217C9.15546 25.6497 7.66267 23.9032 6.88002 21.9029H4.12174C1.854 21.9029 0 20.0436 0 17.7653V4.13753C0 1.86138 1.85313 0 4.12174 0H29.4796C31.7473 0 33.6011 1.85943 33.6011 4.13753L33.6009 7.90708ZM23.9921 21.9028V25.6719C23.9921 26.5196 24.676 27.2063 25.5202 27.2063C30.1078 27.2063 34.7063 27.2113 39.2871 27.2113C40.0005 27.2225 40.5695 27.8123 40.5584 28.5282C40.5267 30.4189 40.346 31.9294 39.7456 33.2629C39.6428 33.4912 39.529 33.7121 39.4031 33.9267C40.5378 33.6214 41.5597 33.1767 42.4457 32.6218C44.2148 31.5141 45.4374 29.9682 45.9188 28.231C46.0452 27.6452 46.5644 27.2064 47.1859 27.2064H50.8781C51.7206 27.2064 52.4066 26.5198 52.4066 25.6721V12.0448C52.4066 11.623 52.2346 11.2396 51.9574 10.9613C51.6804 10.6832 51.2983 10.5106 50.8781 10.5106H33.6009V17.7653C33.6009 18.9021 33.138 19.9352 32.3921 20.6842L32.387 20.6892C31.6407 21.4382 30.6117 21.9027 29.4793 21.9027H23.992L23.9921 21.9028ZM9.08081 20.3238C9.56237 22.061 10.7848 23.607 12.5541 24.7148C13.4403 25.2696 14.4621 25.7144 15.5971 26.0197C15.4712 25.8051 15.3572 25.584 15.2544 25.3557C14.654 24.0223 14.473 22.5121 14.4412 20.6215C14.4301 19.9054 14.9992 19.3156 15.7125 19.3046C18.0317 19.3046 20.3694 19.2996 22.6953 19.2996H29.479C29.9011 19.2996 30.284 19.128 30.5608 18.8512C30.8365 18.5733 31.0074 18.1891 31.0074 17.7654V4.13759C31.0074 3.29058 30.3211 2.60342 29.4792 2.60342H4.12137C3.27726 2.60342 2.59295 3.29187 2.59295 4.13759V17.7654C2.59295 18.6124 3.27947 19.2995 4.12137 19.2995H7.81361C8.43495 19.2995 8.95412 19.7383 9.08072 20.3239L9.08081 20.3238Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 42 35`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M2.86369 0C1.57321 0 0.471511 0.88952 0.119285 2.09452L20.185 19.8661C20.6574 20.2845 21.3421 20.2845 21.8145 19.8661L41.8802 2.09452C41.528 0.88952 40.4264 0 39.136 0H2.86369ZM0 4.5631V30.4371L14.6054 17.5003L0 4.5631ZM42 4.5631L27.3946 17.4999L42 30.4367V4.5631ZM16.0615 18.7892L0.119413 32.9055C0.471605 34.1103 1.57316 35 2.86382 35H39.1363C40.4268 35 41.5284 34.1105 41.8807 32.9055L25.9386 18.7892L23.0675 21.3318C21.8876 22.3767 20.1122 22.3767 18.9324 21.3318L16.0615 18.7892Z`,
    }),
  });
}
function _(_) {
  let _ = _(`rgDailyDealInvitations`, `application_config`);
  if (!_ && (!_ || _.length == 0)) return [];
  let _ = [],
    _ = _.some(
      (_) => new Date().getTime() / 1e3 >= _.rtexpiretime - 14 * _.PerDay,
    );
  return (
    _.push({
      _: `dailydeal`,
      title: _(`#Dashboard_ImportantActions_DailyDeals_Title`),
      image: (0, _.jsx)(_, {}),
      description: _(
        _
          ? `#Dashboard_ImportantActions_DailyDeals_Desc_Expiring`
          : `#Dashboard_ImportantActions_DailyDeals_Desc`,
      ),
      priority: +!!_,
      actionDescription: _(`#DailyDeals_Dashboard`),
      action: `${_.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
    }),
    _
  );
}
function _(_) {
  let _ = _(`publisherid`, `application_config`),
    _ = _(`rgImportantActionData`, `application_config`);
  if (!_ && !_) return [];
  let _ = [];
  if (
    ((_ || !_.bHasCommunicationRightUser) &&
      _.push({
        _: `communicationrights`,
        title: _(`#Dashboard_ImportantActions_CommRights_Title`),
        image: (0, _.jsx)(_, {}),
        description: _(`#Dashboard_ImportantActions_CommRights_Desc`),
        details: _(`#Dashboard_ImportantActions_CommRights_Details`),
        actionDescription: _(`#Dashboard_ImportantActions_CommRights_Action`),
        action: `${_.PARTNER_BASE_URL}doc/gettingstarted/managing_users/communication`,
      }),
    (_ || _.bRemindAddMailingAddress) &&
      _.push({
        _: `mailingaddr`,
        title: _(`#Dashboard_ImportantActions_MailingAddr_Title`),
        image: (0, _.jsx)(_, {}),
        description: _(`#Dashboard_ImportantActions_MailingAddr_Desc`),
        details: _(`#Dashboard_ImportantActions_MailingAddr_Details`),
        actionDescription: _(`#Dashboard_ImportantActions_MailingAddr_Action`),
        action: `${_.PARTNER_BASE_URL}pub/mailingaddresses/${_}`,
      }),
    (_ || _.bRemindAddPhoneNumber) &&
      _.push({
        _: `phonenumber`,
        title: _(`#Dashboard_ImportantActions_PhoneNumber_Title`),
        image: (0, _.jsx)(_, {}),
        description: _(`#Dashboard_ImportantActions_PhoneNumber_Desc`),
        actionDescription: _(`#Dashboard_ImportantActions_PhoneNumber_Action`),
        action: `${_.STORE_BASE_URL}phone/add`,
      }),
    _ || _.bNeedToVerifyPaymentInfo)
  ) {
    let _ =
        _.rtPaymentInfoExpires > 0
          ? _.rtPaymentInfoExpires
          : _
            ? new Date().getTime() / 1e3 + _.PerDay * 7
            : 0,
      _ = new Date(_ * 1e3).toLocaleDateString(_.GetPreferredLocales(), {
        month: `short`,
        day: `numeric`,
        year: `numeric`,
      });
    _.push({
      _: `bankingexpiration`,
      title: _(`#Dashboard_ImportantActions_BankingExpiring_Title`),
      image: (0, _.jsx)(_, {}),
      description: _(`#Dashboard_ImportantActions_BankingExpiring_Desc`, _),
      details: _(`#Dashboard_ImportantActions_BankingExpiring_Details`, _),
      priority: 1,
      actionDescription: _(
        `#Dashboard_ImportantActions_BankingExpiring_Action`,
      ),
      action: `${_.PARTNER_BASE_URL}pub/view`,
    });
  }
  return _;
}
function _(_) {
  let _ = _(_),
    _ = _(_);
  return _.useMemo(() => {
    let _ = _.concat(_);
    return (
      _.sort((_, _) => {
        let _ = _(_.priority),
          _ = _(_.priority);
        return _ === _ ? 0 : _ - _;
      }),
      _
    );
  }, [_, _]);
}
function _(_) {
  switch (_) {
    case 1:
      return 1;
    default:
      return 0;
  }
}
function _(_) {
  let [_] = _(`testactions`, !1),
    _ = _(_);
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        title: _(`#Dashboard_ImportantActions_Title`),
        count: _.length,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                ..._,
              },
              _._,
            ),
          ),
        }),
      });
}
function _(_) {
  let {
    title: _,
    image: _,
    description: _,
    details: _,
    priority: _,
    actionDescription: _,
    action: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _(_, _ == 1 && `YTdkEl1dRZY-`),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      tooltip: _,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`button`, {
        className: _(_),
        onClick: () => {
          typeof _ == `function` && _(), window.open(_, `_blank`);
        },
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(`bShowWarnings`, `application_config`),
    _ = _(`bTestData`, `application_config`),
    _ = _(`bPartnerOnboarding`, `application_config`);
  return _(_)
    ? null
    : _
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            partnerId: _,
            showWarnings: _,
            testData: _,
          }),
        })
      : (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              partnerId: _,
              showWarnings: _,
              testData: _,
            }),
          ],
        });
}
function _(_) {
  let [_, _] = _.useState(!0);
  return (
    _.useEffect(() => {
      _.Init(),
        _.Get(),
        (async () => {
          await _.Get().Init(_.accountid, Number.isNaN(_) ? 0 : _), _(!1);
        })();
    }, [_]),
    _
  );
}
export { _ as default };

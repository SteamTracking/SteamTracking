import { _, _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _ } from "./saletechredirectsignin.js";
import { _ } from "./moment.js";
import { _ } from "./eventtimeoverridecontext.js";
import { _ } from "./partnereventshared.module.js";
import { _, _ } from "./steammessages_storesales_pb.js";
import "./steammessages_quest_pb.js";
import { _, _ } from "./eventadminpanel.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import { _, _, _, _ } from "./event.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = {};
function _(_) {
  return _[_];
}
((0, _.default)(`2026-11-23T09:30:00-08:00`).unix(),
  (0, _.default)(`2026-11-30T10:00:00-08:00`).unix());
function _() {
  return 2025;
}
function _(_) {
  return `${_.MEDIA_CDN_URL}store/promo/${_}`;
}
function _() {
  return {
    strBackgroundColor: `#000000`,
    strBackgroundImageURL: _(`steamawards2026/page_tile.svg?v=1`),
    strTrophyImageURL: _(`steamawards2026/trophy_220.png?v=1`),
    strButtonBGColor: `#ffd979`,
    strButtonTextColor: `#000000`,
    strTextColor: `#ffd979`,
    strCategoryTextColor: `#ffffff`,
    strTitleColor: `#ffd979`,
    rgCategoryBackgrounds: _(_())?.mapCategoryColors ?? {},
    strFallbackCategoryBGColor: `#000000`,
  };
}
function _() {
  return `${_.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
}
((0, _.default)(`2026-12-17T09:30:00-08:00`).unix(),
  (0, _.default)(`2027-01-02T10:00:00-08:00`).unix());
var _ = 5350740;
function _(_, _) {
  return _.BIsEventActionEnabled(_) || _ < _.GetStartTimeAndDateUnixSeconds();
}
function _(_, _, _, _) {
  let _ = _(_, _),
    _ = _(_, _);
  if (_.length || _.length)
    return {
      nomination: _.length
        ? {
            rgCategories: _,
            bNominationsLive: _,
          }
        : void 0,
      vote: _.length
        ? {
            rgCategories: _,
            bNominationsLive: _,
          }
        : void 0,
    };
}
function _(_) {
  return _ > 0;
}
function _(_, _) {
  let _ = [];
  for (let _ of _.filter(_)) {
    let _ = _.find((_) => _.voteid == _);
    _?.localization?.title &&
      _.push({
        eCategoryID: _,
        strTitle: _.localization.title,
        strDescription: _.localization.award_description ?? ``,
        bLaborOfLove: _.flag == 3,
        internal_name: _.internal_name ?? ``,
      });
  }
  return _;
}
function _(_) {
  return [`SteamAwards.GetUserNominations`, _];
}
function _(_) {
  return [`StoreSales.GetUserVotes`, _, _];
}
function _(_, _) {
  let _ = _(),
    _ = _(_.accountid),
    { data: _, isPending: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMySteamAwardNominations(),
      enabled: !!_.accountid,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.NominateForSteamAward(_, _);
        if (_ != 1)
          throw Error(
            `SteamAwards.Nominate failed with ${_} for ${_} and appid ${_}`,
          );
      },
      onMutate: (_) =>
        _.setQueryData(_, (_) => [
          ...(_ ?? []).filter((_) => _.category_id != _),
          {
            category_id: _,
            appid: _,
          },
        ]),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    unNominatedAppID: _?.find((_) => _.category_id == _)?.appid,
    bAnswered: _ != null || !_.accountid || !_,
    Nominate: _,
  };
}
function _(_, _) {
  let _ = _(),
    _ = _(_.accountid),
    { data: _, isPending: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMySteamAwardVotes(),
      enabled: !!_.accountid,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.SetSteamAwardVote(_, _);
        if (_ != 1) throw Error(`StoreSales.SetVote failed with ${_}`);
      },
      onMutate: (_) =>
        _.setQueryData(_, (_) => [
          ...(_ ?? []).filter((_) => _.voteid != _),
          {
            voteid: _,
            appid: _,
          },
        ]),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    unVotedAppID: _?.find((_) => _.voteid == _)?.appid,
    bAnswered: _ != null || !_.accountid || !_,
    Vote: _,
  };
}
function _(_) {
  return [`StoreSales.GetVoteDefinitions`, _ ?? 0];
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _.GetVoteDefinitions(_, {
        sale_appid: _,
        language: _().strLanguage,
      });
      return _.BSuccess() ? _.Body().toObject() : null;
    },
    enabled: !!_,
    staleTime: 1 / 0,
  };
}
function _(_) {
  return _(_(_(), _));
}
async function _(_) {
  let _ = await _.GetUserNominations(_, {});
  return _.BSuccess() ? (_.Body().toObject().nominations ?? []) : [];
}
async function _(_, _) {
  let _ = await _.GetUserVotes(_, {
    sale_appid: _,
  });
  return _.BSuccess() ? (_.Body().toObject().user_votes ?? []) : [];
}
async function _(_, _, _, _) {
  let _ = await _.Nominate(_, {
    category_id: _,
    nominated_id: _,
    source: _,
  });
  return (
    _.BSuccess() ||
      console.warn(`SteamAwards.Nominate failed with ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject().nominations ?? []]
  );
}
async function _(_, _, _, _) {
  let _ = await _.SetVote(_, {
    voteid: _,
    appid: _,
    sale_appid: _,
  });
  return (
    _.BSuccess() ||
      console.warn(`StoreSales.SetVote failed with ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject().user_votes ?? []]
  );
}
var _ = `ilr1AjdCJXo-`,
  _ = `TxDyNEm1M8k-`,
  _ = `sUNGbyAayyI-`,
  _ = `Sc8nD8CrRck-`,
  _ = `-z2wNnnSVlM-`,
  _ = `ghuFYTHFeow-`,
  _ = `r-d74eApzAI-`,
  _ = `sSLI2In7TtI-`,
  _ = `eWqTMj--x0o-`,
  _ = `bwYOMwZYlP0-`,
  _ = `Z7-r2VQgpeM-`,
  _ = `i7PGUODutQI-`,
  _ = `tg9BVvJK4L0-`,
  _ = `gJlraqCGBwc-`,
  _ = `q-NADf-GkR0-`,
  _ = `Nxnaq9LeCh0-`,
  _ = `o00cvSBJI98-`,
  _ = `ycbLF-HTlIE-`,
  _ = `iYxHUHZvg5o-`,
  _ = `_15SY61ywDwg-`,
  _ = _(),
  _ = _.createContext(void 0);
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.widgetStyle,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) ?? _();
}
function _(_) {
  let {
      strMainTitle: _,
      subtitle: _,
      headerText: _,
      headerContent: _,
      children: _,
      footer: _,
    } = _,
    _ = _(),
    _ = {
      backgroundColor: _.strBackgroundColor,
      backgroundImage: `url( ${_.strBackgroundImageURL} )`,
      color: _.strTextColor,
    };
  return (0, _.jsxs)(`div`, {
    style: _,
    className: _(_, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _.strTrophyImageURL,
            alt: ``,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  color: _.strTitleColor,
                },
                className: _,
                children: _,
              }),
              _,
              (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
              _,
            ],
          }),
        ],
      }),
      _,
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `HsPliMKnMhg-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  return `${_.STORE_BASE_URL}steamawards/${_ ? `nominations/` : ``}`;
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    size: `medium`,
    position: `center`,
    string: _.Localize(`#Loading`),
  });
}
function _(_) {
  let { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            bVote: _,
            closeModal: _,
          }),
        }),
      ],
    }),
    BCanTakeAction: () =>
      _.logged_in ? !_.is_limited || (_(), !1) : (_(), !1),
  };
}
function _(_) {
  let { bVote: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#Informational_Message`),
    onCancel: _,
    onOK: _,
    bAlertDialog: !0,
    children: (0, _.jsx)(`div`, {
      children: _.LocalizeReact(
        _
          ? `#SteamAward_Vote_LimitedAccount`
          : `#SteamAward_Nominate_LimitedAccount`,
        (0, _.jsx)(`a`, {
          href: `${_.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
          target: _.IN_CLIENT ? void 0 : `_blank`,
          rel: `noreferrer`,
          children: _.Localize(`#User_LimitedAccount_UrlInfo`),
        }),
      ),
    }),
  });
}
function _(_) {
  let {
      strLocTokenInfix: _,
      unCurrentAppID: _,
      unNewAppID: _,
      fnOnConfirm: _,
      closeModal: _,
    } = _,
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    }),
    _ = _ ? _(_, `small_capsule`) : void 0,
    _ = _ ? _(_, `small_capsule`) : void 0;
  return (0, _.jsx)(_, {
    modalClassName: _,
    strTitle: _.Localize(
      _ == `Vote`
        ? `#SteamAward_VoteConflictWarning_Title`
        : `#SteamAward_NominationConflictWarning_Title`,
    ),
    closeModal: _,
    onOK: _,
    onCancel: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _.LocalizeReact(
          _ == `Vote`
            ? `#SteamAward_VoteConflictWarning_Explanation`
            : `#SteamAward_NominationConflictWarning_Explanation`,
          (0, _.jsx)(`span`, {
            className: _,
            children: _?.name,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _?.name,
          }),
        ),
        _ && _
          ? (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                `→`,
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
              ],
            })
          : (0, _.jsx)(_, {
              size: `small`,
              position: `center`,
              string: _.Localize(`#Loading`),
            }),
      ],
    }),
  });
}
function _(_) {
  let { unAppID: _, widget: _, actions: _, bNominationsOpen: _ } = _,
    _ = _.rgCategories[0],
    { data: _ } = _({
      appid: _,
    }),
    { unNominatedAppID: _, bAnswered: _, Nominate: _ } = _(_.eCategoryID, _),
    { elDialogElement: _, BCanTakeAction: _ } = _(!1),
    {
      strButtonBGColor: _,
      strButtonTextColor: _,
      rgCategoryBackgrounds: _,
      strFallbackCategoryBGColor: _,
      strCategoryTextColor: _,
    } = _(),
    [_, _, _] = _(),
    _ = _?.[_.internal_name] ?? _;
  if (!_.bNominationsLive) return null;
  if (!_) return (0, _.jsx)(_, {});
  let _ = _(_(!0)),
    _ = _ == _,
    _ = _.rgCategories.length == 1,
    _ = _ && !_.bLaborOfLove;
  return (0, _.jsxs)(_, {
    strMainTitle: _.Localize(`#SteamAwards_EventMainTitle`),
    subtitle: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _
          ? _.Localize(`#SteamAwards_EventCallToAction`)
          : _.Localize(`#SteamAwards_EventVotingDateTeaser`, _()),
        _ &&
          (0, _.jsxs)(`a`, {
            href: _,
            className: `OztIiH5vYRE-`,
            children: [
              `(`,
              _.Localize(`#EventDisplay_CallToAction_LearnMore`),
              `)`,
            ],
          }),
      ],
    }),
    headerText: _
      ? _
        ? _.Localize(`#SteamAwards_EventNominateGamePrompt_Long`, _?.name ?? ``)
        : (0, _.jsx)(`a`, {
            className: _,
            href: _,
            children: _.Localize(
              `#SteamAwards_EventNominateGamePrompt_NoCategory`,
              _?.name ?? ``,
            ),
          })
      : _.Localize(`#SteamAwards_Event_NominationsClosed`),
    footer:
      _ &&
      (0, _.jsx)(`a`, {
        href: _,
        children: _.Localize(`#SteamAwards_EventNominationAlternativeLinkText`),
      }),
    children: [
      !!(_ && (_ || _)) &&
        (0, _.jsx)(`div`, {
          style: {
            background: _,
          },
          className: _(`eU1VNUlajE0-`, `eWqTMj--x0o-`),
          children: (0, _.jsxs)(`div`, {
            className: `gO70X8GBo-E-`,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  background: _,
                  color: _,
                },
                className: _(`SNoK7p5tEVU-`, _ && `eIE9nuLmVLE-`),
                children: (0, _.jsx)(_, {
                  controlled: !0,
                  className: _(`_1IIojhfpy34-`, _ && `eIE9nuLmVLE-`),
                  checked: _,
                  onChange: (_) => {
                    _ && _() && (_ && _ != _ ? _() : _(_));
                  },
                  disabled: _,
                  color: _,
                  highlightColor: _,
                  label: (0, _.jsx)(`div`, {
                    className: `bwYOMwZYlP0-`,
                    children: _.Localize(
                      _
                        ? `#SteamAwards_NominateWidget_CTA_PastTense`
                        : `#SteamAwards_NominateWidget_CTA`,
                      _.strTitle,
                    ),
                  }),
                }),
              }),
              (0, _.jsx)(`div`, {
                style: {
                  color: _,
                },
                className: `C-uxCDYX7oo-`,
                children: _.strDescription,
              }),
            ],
          }),
        }),
      _,
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strLocTokenInfix: `Nomination`,
          unCurrentAppID: _,
          unNewAppID: _,
          fnOnConfirm: () => _(_),
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      unAppID: _,
      widget: _,
      actions: _,
      bVotesOpen: _,
      bHideCategoryDescriptions: _,
    } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_(!1));
  return (0, _.jsx)(_, {
    strMainTitle: _.Localize(`#SteamAwards_EventMainTitleCombined`),
    headerText: _
      ? _.Localize(`#SteamAwards_EventVoteForGamePrompt`, _?.name ?? ``)
      : (0, _.jsx)(`a`, {
          href: _,
          className: _,
          children: _.Localize(`#SteamAwards_Event_VotesClosed`),
        }),
    headerContent: (0, _.jsx)(`div`, {
      className: _,
      children: _.rgCategories.map((_) =>
        (0, _.jsx)(
          _,
          {
            unAppID: _,
            category: _,
            actions: _,
            bVotesOpen: _,
            bHideDescription: _,
          },
          _.eCategoryID,
        ),
      ),
    }),
    footer: (0, _.jsx)(`a`, {
      href: _,
      children: _.Localize(`#EventDisplay_CallToAction_LearnMore`),
    }),
  });
}
function _(_) {
  let {
      unAppID: _,
      category: _,
      actions: _,
      bVotesOpen: _,
      bHideDescription: _,
    } = _,
    { unVotedAppID: _, bAnswered: _, Vote: _ } = _(_.eCategoryID, _),
    { elDialogElement: _, BCanTakeAction: _ } = _(!0),
    { strFallbackCategoryBGColor: _, rgCategoryBackgrounds: _ } = _(),
    [_, _, _] = _(),
    _ = _?.[_.internal_name] ?? _,
    _ = _ == _;
  return !_ && !_
    ? null
    : (0, _.jsxs)(`div`, {
        style: {
          backgroundColor: _,
        },
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
                children: _.strTitle,
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: `C-uxCDYX7oo-`,
                  children: _.strDescription,
                }),
              _
                ? (0, _.jsx)(`button`, {
                    className: _,
                    children: (0, _.jsx)(`span`, {
                      className: _,
                      children: _.Localize(`#SteamAward_VoteButton_VotedText`),
                    }),
                  })
                : (0, _.jsx)(`button`, {
                    className: _,
                    onClick: () => {
                      _ && _() && (_ && _ != _ ? _() : _(_));
                    },
                    children: (0, _.jsx)(`span`, {
                      className: _,
                      children: _.Localize(`#SteamAward_VoteButton_PromptText`),
                    }),
                  }),
            ],
          }),
          _,
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              strLocTokenInfix: `Vote`,
              unCurrentAppID: _,
              unNewAppID: _,
              fnOnConfirm: () => _(_),
              closeModal: _,
            }),
          }),
        ],
      });
}
function _(_) {
  let _ = _();
  return (0, _.useMemo)(
    () => ({
      GetMySteamAwardNominations: () => _(_),
      NominateForSteamAward: async (_, _) => {
        if (_) return 1;
        let [_] = await _(_, _, _, 4);
        return _;
      },
      GetMySteamAwardVotes: () => _(_, _),
      SetSteamAwardVote: async (_, _) => {
        if (_) return 1;
        let [_] = await _(_, _, _, _);
        return _;
      },
    }),
    [_, _],
  );
}
var _ = [];
function _(_, _, _) {
  let _ = _.some(_) || _.some(_),
    _ = _(_ ? _ : void 0);
  return _
    ? _.data
      ? {
          widgets: _(_.data.votes ?? [], _, _, _),
          bLoading: !1,
        }
      : {
          bLoading: _.isPending,
        }
    : {
        bLoading: !1,
      };
}
function _(_) {
  let { data: _, isPending: _ } = _({
    queryKey: [`SteamAwards.WidgetStyle`],
    queryFn: async () => {
      let _ = await fetch(_(), {
        credentials: `omit`,
      });
      if (!_._)
        throw Error(`steamawards/ajaxgetwidgetstyle failed with ${_.status}`);
      return await _.json();
    },
    enabled: _,
    staleTime: 1 / 0,
    retry: !1,
  });
  return {
    widgetStyle: _,
    bLoading: _ && _,
  };
}
function _(_, _) {
  return _
    ? {
        ..._,
        bNominationsLive: !0,
      }
    : _;
}
function _(_) {
  return !!_ && _.EUNIVERSE == 1;
}
function _(_) {
  let { event: _, previewMode: _ } = _,
    [_, _] = _(() => [_.GetSteamAwardCategory(), _.appid]),
    _ = _(_, _()),
    { widgets: _, bLoading: _ } = _([_], _, _),
    { widgetStyle: _, bLoading: _ } = _(!!_?.nomination),
    _ = _(_(_));
  return _ || _
    ? (0, _.jsx)(_, {})
    : _?.nomination
      ? (0, _.jsx)(_, {
          widgetStyle: _,
          children: (0, _.jsx)(_, {
            unAppID: _,
            actions: _,
            widget: _(_.nomination, !!_),
            bNominationsOpen: _,
          }),
        })
      : null;
}
function _(_) {
  let {
      appID: _,
      voteCategories: _,
      bIsEventActionEnabled: _,
      previewMode: _,
      bRenderFromStorePage: _,
    } = _,
    { widgets: _, bLoading: _ } = _(_, _ ?? _, !1),
    { widgetStyle: _, bLoading: _ } = _(!!_?.vote),
    _ = _(_(_));
  return _ || _
    ? (0, _.jsx)(_, {})
    : _?.vote
      ? (0, _.jsx)(_, {
          widgetStyle: _,
          children: (0, _.jsx)(_, {
            unAppID: _,
            widget: _.vote,
            actions: _,
            bVotesOpen: _ || !!_,
            bHideCategoryDescriptions: _,
          }),
        })
      : null;
}
function _(_) {
  let _ = _(`steamwawards`, `application_config`)?.votecategories;
  return _
    ? (0, _.jsx)(_, {
        appID: _.appID,
        bRenderFromStorePage: !0,
        bIsEventActionEnabled: !0,
        voteCategories: _,
      })
    : (console.error(
        `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${_.appID}`,
      ),
      null);
}
var _ = _({
  BAreSteamAwardNominationsOpenForEvent: () => _,
  BHasValveOnlyEventTools: () => _,
  BIsRealSteamAwardCategory: () => _,
  BuildSteamAwardWidgets: () => _,
  EventAdminBar: () => _,
  EventDetailContainer: () => _,
  EventDetailHeaderImage: () => _,
  EventDetailMainBody: () => _,
  EventDisplaySteamAwardNomination: () => _,
  EventPlaytestOnlyBar: () => _,
  GetCurrentSteamAwardsYear: () => _,
  GetSteamAwardNominationsQueryKey: () => _,
  GetSteamAwardVotesQueryKey: () => _,
  GetSteamAwardWidgetStyle: () => _,
  GetSteamAwardWidgetStyleURL: () => _,
  GetSteamAwardsPageURL: () => _,
  GetSteamAwardsPromoAssetURL: () => _,
  SteamAwardChangeConfirmDialog: () => _,
  SteamAwardNominationWidget: () => _,
  SteamAwardStorePageVoteWidget: () => _,
  SteamAwardVoteWidget: () => _,
  SteamAwardWidgetFrame: () => _,
  SteamAwardWidgetLoading: () => _,
  SteamAwardWidgetStyleProvider: () => _,
  WinterSaleSteamAwardVoteWrapper: () => _,
  k_nSteamAwardsSaleAppID: () => _,
  k_nSteamAwardsSkipCategoryAppID: () => k_nSteamAwardsSkipCategoryAppID,
  k_strSteamAwardsBackgroundColor: () => k_strSteamAwardsBackgroundColor,
  k_strSteamAwardsButtonColor: () => k_strSteamAwardsButtonColor,
  k_strSteamAwardsTextColor: () => k_strSteamAwardsTextColor,
  useMySteamAwardNomination: () => _,
  useMySteamAwardVote: () => _,
  useSteamAwardEligibility: () => _,
  useSteamAwardWidgetStyle: () => _,
});

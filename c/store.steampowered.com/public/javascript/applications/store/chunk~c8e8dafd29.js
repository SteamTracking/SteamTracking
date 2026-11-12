import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~673650a653.js";
import { _ } from "./chunk~eefd71512b.js";
import { _, _ } from "./chunk~95ecbf576c.js";
import { _ } from "./chunk~7b4b9eb713.js";
import { _ } from "./chunk~fc8a9e4879.js";
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
} from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = `_4hPz4YeujBg-`,
  _ = `p4so9IR0aGE-`,
  _ = `xFTpIMdpqCY-`,
  _ = `DIRIJGRo8us-`,
  _ = `FqVVL--jZ-o-`,
  _ = `yTvMODmO0CY-`,
  _ = `s4rSfzcETAg-`,
  _ = _();
function _(_) {
  let { clanAccountID: _ } = _,
    _ = _(() => new _(_, _.EUNIVERSE, 7, 0)),
    { bIsFetching: _, rgEventModels: _, fnRefetch: _ } = _(_),
    _ = `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
    _ = () => window.location.assign(_),
    { creatorHome: _, isFetching: _, refetch: _ } = _(_),
    _ = _?.GetLinkedEventGID(),
    _ = _ && _?.some((_) => _ == _.GID),
    _ = _ || _,
    _ = () => {
      (_(), _());
    },
    _ = _.useMemo(
      () => [...(_ ?? [])].sort((_, _) => _.startTime - _.startTime),
      [_],
    ),
    _ = _.filter((_) => _ && _ == _.GID),
    _ = _.filter((_) => !_ || _ != _.GID);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _(`#CreatorHome_EventLink_Create_ttip`),
        style: {
          width: `25%`,
        },
        children: (0, _.jsx)(_, {
          onClick: _,
          children: _(`#CreatorHome_EventLink_Create`),
        }),
      }),
      (0, _.jsx)(`h4`, {
        children: _(`#CreatorHome_EventLink_Title`),
      }),
      (0, _.jsx)(`p`, {
        children: _(`#CreatorHome_EventLink_Desc`),
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`h5`, {
                  children: _(`#CreatorHome_EventLink_ActiveListTitle`),
                }),
                (0, _.jsx)(`p`, {
                  children: _(`#CreatorHome_EventLink_BasicActive`),
                }),
              ],
            }),
          _ && (0, _.jsx)(_, {}),
          !_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _.length > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`h5`, {
                        children: _(`#CreatorHome_EventLink_ActiveListTitle`),
                      }),
                      (0, _.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              creatorHome: _,
                              clanSteamID: _,
                              eventModel: _,
                              refetch: _,
                            },
                            _.GID,
                          ),
                        ),
                      }),
                    ],
                  }),
                _.length > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`h5`, {
                        children: _(`#CreatorHome_EventLink_InactiveListTitle`),
                      }),
                      (0, _.jsx)(`div`, {
                        className: `hDuFdbr41vs-`,
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              creatorHome: _,
                              clanSteamID: _,
                              eventModel: _,
                              refetch: _,
                            },
                            _.GID,
                          ),
                        ),
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
  let {
    data: _,
    isFetching: _,
    refetch: _,
  } = _({
    queryKey: [`DraftAndHiddenPartnerEvents`, _.ConvertTo64BitString()],
    queryFn: async () => {
      let _ =
          _.STORE_BASE_URL +
          `/curator/` +
          _.GetAccountID() +
          `/admin/ajaxgetcreatorhomeevents`,
        _ = {
          _: _.LANGUAGE,
        },
        _ = await _.default
          .get(_, {
            params: _,
          })
          .catch(() => void 0),
        _ = [];
      return (
        _.push(
          ..._.data.creatorhome_event_gids.map((_) =>
            _.LoadHiddenPartnerEvent(_, _),
          ),
        ),
        await Promise.all(_)
      );
    },
  });
  return {
    bIsFetching: _,
    rgEventModels: _,
    fnRefetch: _,
  };
}
function _(_) {
  let { clanSteamID: _, creatorHome: _, eventModel: _, refetch: _ } = _,
    [_, _] = _.useState(!1),
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _(),
    _ = _?.GetLinkedEventGID(),
    _ = _ && _ == _.GID,
    _ = !_ && _.BIsVisibleEvent(),
    _ = `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/clone/${_.GID}?redir=${window.location.href}`;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        active: _,
        mutateAsync: () =>
          _.mutateAsync({
            clanSteamID: _,
            gid: _.GID,
          }),
        onClose: (_) => {
          (_(!1), _ && _());
        },
        strTitle: _(`#Button_Delete`),
        strDescription: _(`#CreatorHome_EventLink_Delete_Dialog_Desc`),
        strError: _(`#CreatorHome_EventLink_Delete_Dialog_Error`),
      }),
      (0, _.jsx)(_, {
        active: _,
        mutateAsync: () =>
          _.mutateAsync({
            clanSteamID: _,
            gid: _.GID,
          }),
        onClose: (_) => {
          (_(!1), _ && _());
        },
        strTitle: _(`#CreatorHome_EventLink_Select`),
        strDescription: _(`#CreatorHome_EventLink_Select_Dialog_Desc`),
        strError: _(`#CreatorHome_EventLink_Select_Dialog_Error`),
      }),
      (0, _.jsx)(_, {
        active: _,
        mutateAsync: () =>
          _.mutateAsync({
            clanSteamID: _,
            gid: `0`,
          }),
        onClose: (_) => {
          (_(!1), _ && _());
        },
        strTitle: _(`#CreatorHome_EventLink_Clear`),
        strDescription: _(`#CreatorHome_EventLink_Clear_Dialog_Desc`),
        strError: _(`#CreatorHome_EventLink_Clear_Dialog_Error`),
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `rh4o7L-VRbU-`),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`span`, {
                className: _,
                children: _.GetNameWithFallback(_(_.LANGUAGE)),
              }),
              !_.BIsVisibleEvent() &&
                (0, _.jsxs)(`span`, {
                  className: `_-4utxQA1wCE-`,
                  children: [
                    (0, _.jsx)(`span`, {
                      children: _(`#CreatorHome_EventLink_Unpublished`),
                    }),
                    (0, _.jsx)(_, {
                      tooltip: _(`#CreatorHome_EventLink_Unpublished_ttip`),
                      small: !0,
                    }),
                  ],
                }),
              _.BIsVisibleEvent() &&
                !_ &&
                (0, _.jsxs)(`span`, {
                  className: `MWHiEZVKTsA-`,
                  children: [
                    (0, _.jsx)(`span`, {
                      children: _(
                        `#CreatorHome_EventLink_PublishedAndNotSelected`,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      tooltip: _(
                        `#CreatorHome_EventLink_PublishedAndNotSelected_ttip`,
                      ),
                      small: !0,
                    }),
                  ],
                }),
              _
                ? (0, _.jsx)(_, {
                    eventModel: _,
                    label: _(`#CreatorHome_EventLink_Select`),
                    icon: (0, _.jsx)(_, {}),
                    onClick: () => _(!0),
                    tooltip: _(`#CreatorHome_EventLink_Select_ttip`),
                  })
                : !_ &&
                  (0, _.jsxs)(`div`, {
                    className: `_5nnQGBHwxWw-`,
                    children: [
                      _(`#CreatorHome_EventLink_MustPublish`),
                      (0, _.jsx)(_, {
                        tooltip: _(`#CreatorHome_EventLink_MustPublish_ttip`),
                        small: !0,
                      }),
                    ],
                  }),
              _ &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  label: _(`#CreatorHome_EventLink_Clear`),
                  icon: (0, _.jsx)(_, {
                    filled: !0,
                  }),
                  onClick: () => _(!0),
                  tooltip: _(`#CreatorHome_EventLink_Clear_ttip`),
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                eventModel: _,
                label: _(`#Button_Edit`),
                icon: (0, _.jsx)(_, {}),
                route: _.k_eCommunityEdit,
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                label: _(`#Button_Preview`),
                icon: (0, _.jsx)(_, {}),
                route: _.k_eCommunityPreviewSale,
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                label: _(`#Button_Clone`),
                icon: (0, _.jsx)(_, {}),
                onClick: () => window.location.assign(_),
              }),
              !_ &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  label: _(`#Button_Delete`),
                  icon: (0, _.jsx)(_, {}),
                  onClick: () => _(!0),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      active: _,
      mutateAsync: _,
      onClose: _,
      strTitle: _,
      strDescription: _,
      strError: _,
    } = _,
    _ = _();
  if (_)
    return _.bLoading
      ? (0, _.jsx)(_, {
          active: !0,
          children: (0, _.jsx)(_, {
            state: _,
            strDialogTitle: _,
          }),
        })
      : (0, _.jsx)(_, {
          active: !0,
          children: (0, _.jsx)(_, {
            strTitle: _,
            strDescription: _,
            onCancel: () => _(!1),
            bOKDisabled: _.bLoading,
            onOK: async () => {
              _.fnSetLoading(!0);
              try {
                (await _()) ? _(!0) : _.fnSetElError(_);
              } catch {
                _.fnSetElError(_);
              }
            },
          }),
        });
}
function _() {
  return _({
    mutationFn: async (_) => {
      let _ =
          _.STORE_BASE_URL +
          `/curator/` +
          _.clanSteamID.GetAccountID() +
          `/admin/ajaxselectcreatorhome`,
        _ = new FormData();
      return (
        _.append(`sessionid`, _()),
        _.append(`gid`, _.gid),
        (
          await _.default.post(_, _, {
            withCredentials: !0,
          })
        )?.data?.success == 1
      );
    },
  });
}
function _() {
  return _({
    mutationFn: async (_) => {
      let _ =
          _.STORE_BASE_URL +
          `/curator/` +
          _.clanSteamID.GetAccountID() +
          `/admin/ajaxdeletecreatorhomeevent`,
        _ = new FormData();
      return (
        _.append(`sessionid`, _()),
        _.append(`gid`, _.gid),
        (
          await _.default.post(_, _, {
            withCredentials: !0,
          })
        )?.data?.success == 1
      );
    },
  });
}
function _(_) {
  let {
    eventModel: _,
    label: _,
    tooltip: _,
    icon: _,
    route: _,
    onClick: _,
  } = _;
  _(_ || _, `Must specify route or onClick`);
  let _ =
    _ ||
    (() => {
      let _ = _ ? _(_, null, _, `absolute`) : void 0;
      window.location.assign(_);
    });
  return (0, _.jsxs)(`div`, {
    className: _,
    onClick: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      _,
      _ &&
        (0, _.jsx)(_, {
          tooltip: _,
          small: !0,
        }),
    ],
  });
}
export { _ as default };

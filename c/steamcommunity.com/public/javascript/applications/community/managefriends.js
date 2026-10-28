import { _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _, _, _, _ } from "./libraries.js?contenthash=eLY4-d-j";
import { _ } from "./personautils.js?contenthash=CIwFJgE6";
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
} from "./main.js?contenthash=B3VTzWgT";
var _ = _(_()),
  _ = _(_()),
  _ = `RQiiCbyKjEE-`,
  _ = `-V10ZWmz3JE-`,
  _ = `F9dQZli7jy8-`,
  _ = `A50jNCeC60w-`,
  _ = `VPhSLWXWrdI-`,
  _ = `RlZONZP2PVo-`,
  _ = `I23-ez5Pa5c-`,
  _ = `Jyj0QiKgpFc-`,
  _ = `_6ZwxnMDLZO0-`,
  _ = `O24XBeADtzU-`,
  _ = `yriJ46sozKI-`,
  _ = `_7UCLCVeYG5s-`,
  _ = `eKuiccJdyzM-`,
  _ = `BL0JG6jluqo-`,
  _ = `_8PJC1qPPwoE-`,
  _ = `-tG7kgxKFbc-`,
  _ = `ErXa2f9p5nY-`,
  _ = class {
    constructor() {
      _(this);
    }
    m_mapProfiles = new Map();
    m_mapProfilesLoading = new Map();
    async LoadProfiles(_, _) {
      _(_.length <= 500, `Check LoadProfiles, requesting too many steam IDs`);
      let _ = _.filter(
        (_) => !this.m_mapProfiles.has(_) && !this.m_mapProfilesLoading.has(_),
      );
      if (_.length == 0) return this.m_mapProfilesLoading.get(_[0]);
      let _ = _.COMMUNITY_BASE_URL + `actions/ajaxresolveusers`,
        _ = _.default.get(_, {
          params: {
            steamids: _.join(`,`),
          },
          withCredentials: !0,
          cancelToken: _?.token,
        });
      _.forEach((_) => this.m_mapProfilesLoading.set(_, _));
      let _ = await _;
      _.data &&
        _.status == 200 &&
        _.data.forEach((_) => {
          (_.avatar_hash = _.avatar_url),
            (_.avatar_url_medium = _(_.avatar_url, `medium`)),
            (_.avatar_url_full = _(_.avatar_url, `full`)),
            (_.avatar_url = _(_.avatar_url)),
            this.m_mapProfiles.set(_.steamid, _),
            this.m_mapProfilesLoading.delete(_.steamid);
        });
    }
    GetProfile(_) {
      return this.m_mapProfiles.get(_);
    }
    GetProfileByAccountID(_) {
      return this.m_mapProfiles.get(
        _.InitFromAccountID(_).ConvertTo64BitString(),
      );
    }
    GetProfileBySteamID(_) {
      return this.m_mapProfiles.get(_.ConvertTo64BitString());
    }
    BHasProfile(_) {
      return this.m_mapProfiles.has(_);
    }
    BHasProfileByAccountID(_) {
      return this.m_mapProfiles.has(
        _.InitFromAccountID(_).ConvertTo64BitString(),
      );
    }
    BHasProfileBySteamID(_) {
      return this.m_mapProfiles.has(_.ConvertTo64BitString());
    }
    BHasAllProfilesBySteamID(_) {
      return !_.some((_) => !this.BHasProfileBySteamID(_));
    }
    GetProfileURLBySteamID(_) {
      let _ = this.GetProfileBySteamID(_);
      return _ && _.profile_url
        ? _.COMMUNITY_BASE_URL + `id/` + _.profile_url
        : _.COMMUNITY_BASE_URL + `profiles/` + _.ConvertTo64BitString();
    }
    GetPersonaNameBySteamID(_) {
      let _ = this.GetProfileBySteamID(_);
      return _ && _.persona_name ? _.persona_name : ``;
    }
  };
_([_], _.prototype, `m_mapProfiles`, void 0);
var _ = new _(),
  _ = _(),
  _ = class extends _.Component {
    state = {
      invite_token: ``,
      input_search: ``,
      friend_code_copied: !1,
      invite_copied: !1,
    };
    async componentDidMount() {
      let _ = await _.default.get(_.COMMUNITY_BASE_URL + `invites/ajaxgetall`, {
        params: {
          sessionid: _(),
        },
      });
      if (_ && _.data && _.data.tokens) {
        let _ = _.data.tokens.filter((_) => _.valid);
        _.length
          ? this.setState({
              invite_token: _[0].invite_token,
            })
          : this.OnCreateInviteLink();
      } else this.OnCreateInviteLink();
    }
    async OnCreateInviteLink() {
      let _ = new FormData();
      _.append(`sessionid`, _()),
        _.append(`steamid_user`, _.steamid),
        _.append(`duration`, `2592000`);
      let _ = await _.default.post(
        _.COMMUNITY_BASE_URL + `invites/ajaxcreate`,
        _,
      );
      _ &&
        _.data &&
        _.data.invite &&
        this.setState({
          invite_token: _.data.invite.invite_token,
        });
    }
    OnCopy(_, _) {
      _ === `friend_code` &&
        (this.setState({
          friend_code_copied: !0,
        }),
        setTimeout(
          () =>
            this.setState({
              friend_code_copied: !1,
            }),
          1e3,
        )),
        _ === `invite` &&
          (this.setState({
            invite_copied: !0,
          }),
          setTimeout(
            () =>
              this.setState({
                invite_copied: !1,
              }),
            1e3,
          )),
        _(_);
    }
    async OnAddFriend(_) {
      let _ = new FormData();
      _.append(`sessionID`, _()),
        _.append(`steamid`, _),
        _.append(`accept_invite`, `0`);
      try {
        let _ = await _.default.post(
          _.COMMUNITY_BASE_URL + `actions/AddFriendAjax`,
          _,
        );
        return _ && _.data && _.data.success == 1;
      } catch {
        return !1;
      }
    }
    OnSearchChange(_) {
      this.setState({
        input_search: _.target.value,
      });
    }
    OnSearchKeyDown(_) {
      _.keyCode === 13 && this.OnSearchSubmit();
    }
    OnSearchSubmit() {
      window.open(
        _.COMMUNITY_BASE_URL +
          `search/users/#text=` +
          encodeURIComponent(this.state.input_search),
        `_self`,
      );
    }
    render() {
      let _ = _.short_url + `/` + this.state.invite_token;
      return (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#ManageFriends_AddAFriend`),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h1`, {
                className: _,
                children: _(`#ManageFriends_YourFriendCode`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`h1`, {
                    className: _,
                    children: _.accountid,
                  }),
                  (0, _.jsx)(_, {
                    autoFocus: !0,
                    className: _,
                    onClick: () =>
                      this.OnCopy(`friend_code`, String(_.accountid)),
                    children: this.state.friend_code_copied
                      ? _(`#ManageFriends_Copied`)
                      : _(`#ManageFriends_Copy`),
                  }),
                ],
              }),
              (0, _.jsx)(`p`, {
                className: _,
                children: _(`#ManageFriends_EnterFriendCode`),
              }),
              (0, _.jsx)(_, {
                onButtonClick: this.OnAddFriend,
                buttonText: _(`#ManageFriends_SendInvite`),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h1`, {
                className: _,
                children: _(`#ManageFriends_OrSendQuickInvite`),
              }),
              (0, _.jsx)(`p`, {
                className: _,
                children: _(`#ManageFriends_QuickInviteDescription`),
              }),
              (0, _.jsx)(`p`, {
                className: _,
                children: _(`#ManageFriends_QuickInviteNote`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  !!this.state.invite_token &&
                    (0, _.jsx)(`div`, {
                      className: `VnenB-U8m50-`,
                      children: _,
                    }),
                  (0, _.jsx)(_, {
                    className: _,
                    onClick: () => this.OnCopy(`invite`, _),
                    children: this.state.invite_copied
                      ? _(`#ManageFriends_Copied`)
                      : _(`#ManageFriends_Copy`),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                className: _,
                onClick: this.OnCreateInviteLink,
                children: _(`#ManageFriends_CreateInviteLink`),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h1`, {
                className: _,
                children: _(`#ManageFriends_OrSearch`),
              }),
              (0, _.jsx)(`br`, {}),
              (0, _.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  maxWidth: `598px`,
                  position: `relative`,
                },
                children: [
                  (0, _.jsx)(`div`, {
                    style: {
                      width: `100%`,
                    },
                    children: (0, _.jsx)(_, {
                      className: _,
                      onKeyDown: this.OnSearchKeyDown,
                      value: this.state.input_search,
                      onChange: this.OnSearchChange,
                      placeholder: _(`#ManageFriends_EnterProfileName`),
                    }),
                  }),
                  (0, _.jsx)(`div`, {
                    _: `searchIcon`,
                    style: {
                      position: `absolute`,
                      right: `10px`,
                      cursor: `pointer`,
                    },
                    onClick: this.OnSearchSubmit,
                    children: (0, _.jsx)(_, {}),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  };
_([_], _.prototype, `OnCreateInviteLink`, null),
  _([_], _.prototype, `OnCopy`, null),
  _([_], _.prototype, `OnAddFriend`, null),
  _([_], _.prototype, `OnSearchChange`, null),
  _([_], _.prototype, `OnSearchKeyDown`, null),
  _([_], _.prototype, `OnSearchSubmit`, null);
var _ = class extends _.Component {
  state = {
    input_friend_code: ``,
    disable_send_invite: !1,
    searchResult: null,
    invite_status: `pending`,
  };
  m_currentRequest = 0;
  async OnFriendCodeChange(_) {
    let _ = _.target.value.split(`,`)[0];
    this.setState({
      input_friend_code: _,
      invite_status: `pending`,
    }),
      window.clearTimeout(this.m_currentRequest),
      (this.m_currentRequest = window.setTimeout(
        () => this.LoadProfile(_),
        500,
      ));
  }
  async LoadProfile(_) {
    if (_) {
      let _ = _.InitFromAccountID(Number(_));
      await _.LoadProfiles([_.ConvertTo64BitString()]);
      let _ = _.GetProfile(_.ConvertTo64BitString());
      _
        ? this.setState({
            searchResult: _,
            disable_send_invite:
              _.is_limited ||
              (this.props.bDisableForFriends && _.is_friend) ||
              (this.props.bDisableForSelf && _.steamid === _.steamid),
          })
        : this.setState({
            searchResult: null,
          });
    } else
      this.setState({
        searchResult: null,
      });
  }
  async OnActionClick(_) {
    let _ = new FormData();
    _.append(`sessionID`, _()),
      _.append(`steamid`, _),
      _.append(`accept_invite`, `0`),
      this.setState({
        disable_send_invite: !0,
      }),
      (await this.props.onButtonClick(_))
        ? (this.setState({
            input_friend_code: ``,
            invite_status: `success`,
          }),
          setTimeout(
            () =>
              this.setState({
                searchResult: null,
              }),
            3e3,
          ))
        : this.setState({
            invite_status: `failure`,
            disable_send_invite: !1,
          });
  }
  render() {
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          className: _,
          value: this.state.input_friend_code,
          onChange: this.OnFriendCodeChange,
          placeholder: _(`#ManageFriends_EnterFriendCodePlaceholder`),
        }),
        (0, _.jsx)(_, {
          searchResult: this.state.searchResult,
          invite_status: this.state.invite_status,
          bShowStatus: this.props.bShowStatus,
          children: (0, _.jsx)(_, {
            className: _,
            onClick: () => this.OnActionClick(this.state.searchResult.steamid),
            disabled: this.state.disable_send_invite,
            children: this.props.buttonText,
          }),
        }),
      ],
    });
  }
};
_([_], _.prototype, `OnFriendCodeChange`, null),
  _([_], _.prototype, `LoadProfile`, null),
  _([_], _.prototype, `OnActionClick`, null);
var _ = (_) => {
  let { searchResult: _, invite_status: _, bShowStatus: _, children: _ } = _,
    _ = _();
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`img`, {
                  style: {
                    width: `100%`,
                    height: `100%`,
                  },
                  src: _.avatar_url_full,
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`h1`, {
                    className: _,
                    children: _.persona_name,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        target: _ ? void 0 : `_blank`,
                        href: _.COMMUNITY_BASE_URL + `profiles/` + _.steamid,
                        children: _(`#ManageFriends_ProfileLink`),
                      }),
                      (0, _.jsx)(`br`, {}),
                      (0, _.jsxs)(`span`, {
                        className: _,
                        children: [
                          _.real_name,
                          (0, _.jsx)(`br`, {}),
                          `${_.city}${_.city ? `,` : ``} ${_.state}${_.state ? `,` : ``} ${_.country}`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _,
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _.is_friend &&
                (0, _.jsx)(`div`, {
                  children: _(`#ManageFriends_IsFriend`),
                }),
              _.friends_in_common != 0 &&
                (0, _.jsx)(`div`, {
                  children: (0, _.jsx)(_, {
                    target: _ ? void 0 : `_blank`,
                    href:
                      _.COMMUNITY_BASE_URL +
                      `profiles/` +
                      _.steamid +
                      `/friendscommon`,
                    children:
                      _.friends_in_common === 1
                        ? _(
                            `#ManageFriends_FriendsInCommonSingular`,
                            _.friends_in_common,
                          )
                        : _(
                            `#ManageFriends_FriendsInCommon`,
                            _.friends_in_common,
                          ),
                  }),
                }),
              _ &&
                _ === `failure` &&
                (0, _.jsx)(`div`, {
                  className: `AkRlehi2-GI-`,
                  children: _(`#ManageFriends_InviteFailure`),
                }),
              _ &&
                _ === `success` &&
                (0, _.jsx)(`div`, {
                  className: `DqLSNVaGaWM-`,
                  children: _(`#ManageFriends_InviteSuccess`, _.persona_name),
                }),
            ],
          }),
        ],
      })
    : null;
};
export { _, _ };

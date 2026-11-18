/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  Ft as n,
  L as r,
  R as i,
  ot as a,
} from "./chunk~01cfc309bf.js";
import { n as o } from "./chunk~0278ae6236.js";
import {
  $o as s,
  Am as c,
  Hh as l,
  Jo as u,
  Mf as d,
  Ru as f,
  Yf as p,
  Zc as m,
  bm as h,
  pm as g,
  rd as _,
  rf as v,
  rg as y,
  us as b,
  ym as x,
} from "./main.js";
var S = e(n()),
  C = e(t()),
  w = `RQiiCbyKjEE-`,
  T = `-V10ZWmz3JE-`,
  E = `F9dQZli7jy8-`,
  D = `A50jNCeC60w-`,
  O = `VPhSLWXWrdI-`,
  k = `RlZONZP2PVo-`,
  A = `I23-ez5Pa5c-`,
  j = `Jyj0QiKgpFc-`,
  M = `_6ZwxnMDLZO0-`,
  N = `O24XBeADtzU-`,
  P = `yriJ46sozKI-`,
  F = `_7UCLCVeYG5s-`,
  I = `eKuiccJdyzM-`,
  L = `BL0JG6jluqo-`,
  R = `_8PJC1qPPwoE-`,
  z = `-tG7kgxKFbc-`,
  B = `ErXa2f9p5nY-`,
  V = class {
    constructor() {
      r(this);
    }
    m_mapProfiles = new Map();
    m_mapProfilesLoading = new Map();
    async LoadProfiles(e, t) {
      y(e.length <= 500, `Check LoadProfiles, requesting too many steam IDs`);
      let n = e.filter(
        (e) => !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
      );
      if (n.length == 0) return this.m_mapProfilesLoading.get(e[0]);
      let r = x.COMMUNITY_BASE_URL + `actions/ajaxresolveusers`,
        i = C.default.get(r, {
          params: { steamids: n.join(`,`) },
          withCredentials: !0,
          cancelToken: t?.token,
        });
      n.forEach((e) => this.m_mapProfilesLoading.set(e, i));
      let a = await i;
      a.data &&
        a.status == 200 &&
        a.data.forEach((e) => {
          ((e.avatar_hash = e.avatar_url),
            (e.avatar_url_medium = o(e.avatar_url, `medium`)),
            (e.avatar_url_full = o(e.avatar_url, `full`)),
            (e.avatar_url = o(e.avatar_url)),
            this.m_mapProfiles.set(e.steamid, e),
            this.m_mapProfilesLoading.delete(e.steamid));
        });
    }
    GetProfile(e) {
      return this.m_mapProfiles.get(e);
    }
    GetProfileByAccountID(e) {
      return this.m_mapProfiles.get(
        c.InitFromAccountID(e, x.EUNIVERSE).ConvertTo64BitString(),
      );
    }
    GetProfileBySteamID(e) {
      return this.m_mapProfiles.get(e.ConvertTo64BitString());
    }
    BHasProfile(e) {
      return this.m_mapProfiles.has(e);
    }
    BHasProfileByAccountID(e) {
      return this.m_mapProfiles.has(
        c.InitFromAccountID(e, x.EUNIVERSE).ConvertTo64BitString(),
      );
    }
    BHasProfileBySteamID(e) {
      return this.m_mapProfiles.has(e.ConvertTo64BitString());
    }
    BHasAllProfilesBySteamID(e) {
      return !e.some((e) => !this.BHasProfileBySteamID(e));
    }
    GetProfileURLBySteamID(e) {
      let t = this.GetProfileBySteamID(e);
      return t && t.profile_url
        ? x.COMMUNITY_BASE_URL + `id/` + t.profile_url
        : x.COMMUNITY_BASE_URL + `profiles/` + e.ConvertTo64BitString();
    }
    GetPersonaNameBySteamID(e) {
      let t = this.GetProfileBySteamID(e);
      return t && t.persona_name ? t.persona_name : ``;
    }
  };
d([i], V.prototype, `m_mapProfiles`, void 0);
var H = new V(),
  U = a(),
  W = class extends S.Component {
    state = {
      invite_token: ``,
      input_search: ``,
      friend_code_copied: !1,
      invite_copied: !1,
    };
    async componentDidMount() {
      let e = await C.default.get(x.COMMUNITY_BASE_URL + `invites/ajaxgetall`, {
        params: { sessionid: g() },
      });
      if (e && e.data && e.data.tokens) {
        let t = e.data.tokens.filter((e) => e.valid);
        t.length
          ? this.setState({ invite_token: t[0].invite_token })
          : this.OnCreateInviteLink();
      } else this.OnCreateInviteLink();
    }
    async OnCreateInviteLink() {
      let e = new FormData();
      (e.append(`sessionid`, g()),
        e.append(`steamid_user`, h.steamid),
        e.append(`duration`, `2592000`));
      let t = await C.default.post(
        x.COMMUNITY_BASE_URL + `invites/ajaxcreate`,
        e,
      );
      t &&
        t.data &&
        t.data.invite &&
        this.setState({ invite_token: t.data.invite.invite_token });
    }
    OnCopy(e, t) {
      (e === `friend_code` &&
        (this.setState({ friend_code_copied: !0 }),
        setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
        e === `invite` &&
          (this.setState({ invite_copied: !0 }),
          setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
        _(t));
    }
    async OnAddFriend(e) {
      let t = new FormData();
      (t.append(`sessionID`, g()),
        t.append(`steamid`, e),
        t.append(`accept_invite`, `0`));
      try {
        let e = await C.default.post(
          x.COMMUNITY_BASE_URL + `actions/AddFriendAjax`,
          t,
        );
        return e && e.data && e.data.success == 1;
      } catch {
        return !1;
      }
    }
    OnSearchChange(e) {
      this.setState({ input_search: e.target.value });
    }
    OnSearchKeyDown(e) {
      e.keyCode === 13 && this.OnSearchSubmit();
    }
    OnSearchSubmit() {
      window.open(
        x.COMMUNITY_BASE_URL +
          `search/users/#text=` +
          encodeURIComponent(this.state.input_search),
        `_self`,
      );
    }
    render() {
      let e = h.short_url + `/` + this.state.invite_token;
      return (0, U.jsxs)(`div`, {
        children: [
          (0, U.jsx)(`div`, {
            className: E,
            children: v(`#ManageFriends_AddAFriend`),
          }),
          (0, U.jsxs)(`div`, {
            className: D,
            children: [
              (0, U.jsx)(`h1`, {
                className: w,
                children: v(`#ManageFriends_YourFriendCode`),
              }),
              (0, U.jsxs)(`div`, {
                className: A,
                children: [
                  (0, U.jsx)(`h1`, { className: j, children: h.accountid }),
                  (0, U.jsx)(b, {
                    autoFocus: !0,
                    className: M,
                    onClick: () =>
                      this.OnCopy(`friend_code`, String(h.accountid)),
                    children: this.state.friend_code_copied
                      ? v(`#ManageFriends_Copied`)
                      : v(`#ManageFriends_Copy`),
                  }),
                ],
              }),
              (0, U.jsx)(`p`, {
                className: T,
                children: v(`#ManageFriends_EnterFriendCode`),
              }),
              (0, U.jsx)(G, {
                onButtonClick: this.OnAddFriend,
                buttonText: v(`#ManageFriends_SendInvite`),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ],
          }),
          (0, U.jsxs)(`div`, {
            className: O,
            children: [
              (0, U.jsx)(`h1`, {
                className: w,
                children: v(`#ManageFriends_OrSendQuickInvite`),
              }),
              (0, U.jsx)(`p`, {
                className: T,
                children: v(`#ManageFriends_QuickInviteDescription`),
              }),
              (0, U.jsx)(`p`, {
                className: T,
                children: v(`#ManageFriends_QuickInviteNote`),
              }),
              (0, U.jsxs)(`div`, {
                className: A,
                children: [
                  !!this.state.invite_token &&
                    (0, U.jsx)(`div`, {
                      className: `VnenB-U8m50-`,
                      children: e,
                    }),
                  (0, U.jsx)(b, {
                    className: M,
                    onClick: () => this.OnCopy(`invite`, e),
                    children: this.state.invite_copied
                      ? v(`#ManageFriends_Copied`)
                      : v(`#ManageFriends_Copy`),
                  }),
                ],
              }),
              (0, U.jsx)(s, {
                className: N,
                onClick: this.OnCreateInviteLink,
                children: v(`#ManageFriends_CreateInviteLink`),
              }),
            ],
          }),
          (0, U.jsxs)(`div`, {
            className: D,
            children: [
              (0, U.jsx)(`h1`, {
                className: w,
                children: v(`#ManageFriends_OrSearch`),
              }),
              (0, U.jsx)(`br`, {}),
              (0, U.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  maxWidth: `598px`,
                  position: `relative`,
                },
                children: [
                  (0, U.jsx)(`div`, {
                    style: { width: `100%` },
                    children: (0, U.jsx)(u, {
                      className: k,
                      onKeyDown: this.OnSearchKeyDown,
                      value: this.state.input_search,
                      onChange: this.OnSearchChange,
                      placeholder: v(`#ManageFriends_EnterProfileName`),
                    }),
                  }),
                  (0, U.jsx)(`div`, {
                    id: `searchIcon`,
                    style: {
                      position: `absolute`,
                      right: `10px`,
                      cursor: `pointer`,
                    },
                    onClick: this.OnSearchSubmit,
                    children: (0, U.jsx)(m, {}),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  };
(d([l], W.prototype, `OnCreateInviteLink`, null),
  d([l], W.prototype, `OnCopy`, null),
  d([l], W.prototype, `OnAddFriend`, null),
  d([l], W.prototype, `OnSearchChange`, null),
  d([l], W.prototype, `OnSearchKeyDown`, null),
  d([l], W.prototype, `OnSearchSubmit`, null));
var G = class extends S.Component {
  state = {
    input_friend_code: ``,
    disable_send_invite: !1,
    searchResult: null,
    invite_status: `pending`,
  };
  m_currentRequest = 0;
  async OnFriendCodeChange(e) {
    let t = e.target.value.split(`,`)[0];
    (this.setState({ input_friend_code: t, invite_status: `pending` }),
      window.clearTimeout(this.m_currentRequest),
      (this.m_currentRequest = window.setTimeout(
        () => this.LoadProfile(t),
        500,
      )));
  }
  async LoadProfile(e) {
    if (e) {
      let t = c.InitFromAccountID(Number(e), x.EUNIVERSE);
      await H.LoadProfiles([t.ConvertTo64BitString()]);
      let n = H.GetProfile(t.ConvertTo64BitString());
      n
        ? this.setState({
            searchResult: n,
            disable_send_invite:
              h.is_limited ||
              (this.props.bDisableForFriends && n.is_friend) ||
              (this.props.bDisableForSelf && n.steamid === h.steamid),
          })
        : this.setState({ searchResult: null });
    } else this.setState({ searchResult: null });
  }
  async OnActionClick(e) {
    let t = new FormData();
    (t.append(`sessionID`, g()),
      t.append(`steamid`, e),
      t.append(`accept_invite`, `0`),
      this.setState({ disable_send_invite: !0 }),
      (await this.props.onButtonClick(e))
        ? (this.setState({ input_friend_code: ``, invite_status: `success` }),
          setTimeout(() => this.setState({ searchResult: null }), 3e3))
        : this.setState({ invite_status: `failure`, disable_send_invite: !1 }));
  }
  render() {
    return (0, U.jsxs)(`div`, {
      className: z,
      children: [
        (0, U.jsx)(u, {
          className: k,
          value: this.state.input_friend_code,
          onChange: this.OnFriendCodeChange,
          placeholder: v(`#ManageFriends_EnterFriendCodePlaceholder`),
        }),
        (0, U.jsx)(K, {
          searchResult: this.state.searchResult,
          invite_status: this.state.invite_status,
          bShowStatus: this.props.bShowStatus,
          children: (0, U.jsx)(b, {
            className: B,
            onClick: () => this.OnActionClick(this.state.searchResult.steamid),
            disabled: this.state.disable_send_invite,
            children: this.props.buttonText,
          }),
        }),
      ],
    });
  }
};
(d([l], G.prototype, `OnFriendCodeChange`, null),
  d([l], G.prototype, `LoadProfile`, null),
  d([l], G.prototype, `OnActionClick`, null));
var K = (e) => {
  let { searchResult: t, invite_status: n, bShowStatus: r, children: i } = e,
    a = p();
  return t
    ? (0, U.jsxs)(`div`, {
        className: P,
        children: [
          (0, U.jsxs)(`div`, {
            className: F,
            children: [
              (0, U.jsx)(`div`, {
                className: I,
                children: (0, U.jsx)(`img`, {
                  style: { width: `100%`, height: `100%` },
                  src: t.avatar_url_full,
                }),
              }),
              (0, U.jsxs)(`div`, {
                className: L,
                children: [
                  (0, U.jsx)(`h1`, { className: w, children: t.persona_name }),
                  (0, U.jsxs)(`div`, {
                    className: R,
                    children: [
                      (0, U.jsx)(f, {
                        target: a ? void 0 : `_blank`,
                        href: x.COMMUNITY_BASE_URL + `profiles/` + t.steamid,
                        children: v(`#ManageFriends_ProfileLink`),
                      }),
                      (0, U.jsx)(`br`, {}),
                      (0, U.jsxs)(`span`, {
                        className: T,
                        children: [
                          t.real_name,
                          (0, U.jsx)(`br`, {}),
                          `${t.city}${t.city ? `,` : ``} ${t.state}${t.state ? `,` : ``} ${t.country}`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i,
            ],
          }),
          (0, U.jsxs)(`div`, {
            className: R,
            children: [
              t.is_friend &&
                (0, U.jsx)(`div`, { children: v(`#ManageFriends_IsFriend`) }),
              t.friends_in_common != 0 &&
                (0, U.jsx)(`div`, {
                  children: (0, U.jsx)(f, {
                    target: a ? void 0 : `_blank`,
                    href:
                      x.COMMUNITY_BASE_URL +
                      `profiles/` +
                      t.steamid +
                      `/friendscommon`,
                    children:
                      t.friends_in_common === 1
                        ? v(
                            `#ManageFriends_FriendsInCommonSingular`,
                            t.friends_in_common,
                          )
                        : v(
                            `#ManageFriends_FriendsInCommon`,
                            t.friends_in_common,
                          ),
                  }),
                }),
              r &&
                n === `failure` &&
                (0, U.jsx)(`div`, {
                  className: `AkRlehi2-GI-`,
                  children: v(`#ManageFriends_InviteFailure`),
                }),
              r &&
                n === `success` &&
                (0, U.jsx)(`div`, {
                  className: `DqLSNVaGaWM-`,
                  children: v(`#ManageFriends_InviteSuccess`, t.persona_name),
                }),
            ],
          }),
        ],
      })
    : null;
};
export { W as n, G as t };

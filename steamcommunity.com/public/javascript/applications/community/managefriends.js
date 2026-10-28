/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import {
  A as t,
  Ft as n,
  L as r,
  R as i,
  ot as a,
} from "./libraries.js?contenthash=eLY4-d-j";
import { n as o } from "./personautils.js?contenthash=CIwFJgE6";
import {
  $h as s,
  Gc as c,
  Ho as l,
  Hu as u,
  Jf as d,
  Kd as f,
  Rf as p,
  Rh as m,
  Su as h,
  Uf as g,
  gm as _,
  hm as v,
  is as y,
  lm as b,
  qo as x,
} from "./main.js?contenthash=B3VTzWgT";
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
      s(e.length <= 500, `Check LoadProfiles, requesting too many steam IDs`);
      let n = e.filter(
        (e) => !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
      );
      if (n.length == 0) return this.m_mapProfilesLoading.get(e[0]);
      let r = v.COMMUNITY_BASE_URL + `actions/ajaxresolveusers`,
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
          (e.avatar_hash = e.avatar_url),
            (e.avatar_url_medium = o(e.avatar_url, `medium`)),
            (e.avatar_url_full = o(e.avatar_url, `full`)),
            (e.avatar_url = o(e.avatar_url)),
            this.m_mapProfiles.set(e.steamid, e),
            this.m_mapProfilesLoading.delete(e.steamid);
        });
    }
    GetProfile(e) {
      return this.m_mapProfiles.get(e);
    }
    GetProfileByAccountID(e) {
      return this.m_mapProfiles.get(
        g.InitFromAccountID(e).ConvertTo64BitString(),
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
        g.InitFromAccountID(e).ConvertTo64BitString(),
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
        ? v.COMMUNITY_BASE_URL + `id/` + t.profile_url
        : v.COMMUNITY_BASE_URL + `profiles/` + e.ConvertTo64BitString();
    }
    GetPersonaNameBySteamID(e) {
      let t = this.GetProfileBySteamID(e);
      return t && t.persona_name ? t.persona_name : ``;
    }
  };
p([i], V.prototype, `m_mapProfiles`, void 0);
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
      let e = await C.default.get(v.COMMUNITY_BASE_URL + `invites/ajaxgetall`, {
        params: { sessionid: b() },
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
      e.append(`sessionid`, b()),
        e.append(`steamid_user`, _.steamid),
        e.append(`duration`, `2592000`);
      let t = await C.default.post(
        v.COMMUNITY_BASE_URL + `invites/ajaxcreate`,
        e,
      );
      t &&
        t.data &&
        t.data.invite &&
        this.setState({ invite_token: t.data.invite.invite_token });
    }
    OnCopy(e, t) {
      e === `friend_code` &&
        (this.setState({ friend_code_copied: !0 }),
        setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
        e === `invite` &&
          (this.setState({ invite_copied: !0 }),
          setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
        u(t);
    }
    async OnAddFriend(e) {
      let t = new FormData();
      t.append(`sessionID`, b()),
        t.append(`steamid`, e),
        t.append(`accept_invite`, `0`);
      try {
        let e = await C.default.post(
          v.COMMUNITY_BASE_URL + `actions/AddFriendAjax`,
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
        v.COMMUNITY_BASE_URL +
          `search/users/#text=` +
          encodeURIComponent(this.state.input_search),
        `_self`,
      );
    }
    render() {
      let e = _.short_url + `/` + this.state.invite_token;
      return (0, U.jsxs)(`div`, {
        children: [
          (0, U.jsx)(`div`, {
            className: E,
            children: f(`#ManageFriends_AddAFriend`),
          }),
          (0, U.jsxs)(`div`, {
            className: D,
            children: [
              (0, U.jsx)(`h1`, {
                className: w,
                children: f(`#ManageFriends_YourFriendCode`),
              }),
              (0, U.jsxs)(`div`, {
                className: A,
                children: [
                  (0, U.jsx)(`h1`, { className: j, children: _.accountid }),
                  (0, U.jsx)(y, {
                    autoFocus: !0,
                    className: M,
                    onClick: () =>
                      this.OnCopy(`friend_code`, String(_.accountid)),
                    children: this.state.friend_code_copied
                      ? f(`#ManageFriends_Copied`)
                      : f(`#ManageFriends_Copy`),
                  }),
                ],
              }),
              (0, U.jsx)(`p`, {
                className: T,
                children: f(`#ManageFriends_EnterFriendCode`),
              }),
              (0, U.jsx)(G, {
                onButtonClick: this.OnAddFriend,
                buttonText: f(`#ManageFriends_SendInvite`),
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
                children: f(`#ManageFriends_OrSendQuickInvite`),
              }),
              (0, U.jsx)(`p`, {
                className: T,
                children: f(`#ManageFriends_QuickInviteDescription`),
              }),
              (0, U.jsx)(`p`, {
                className: T,
                children: f(`#ManageFriends_QuickInviteNote`),
              }),
              (0, U.jsxs)(`div`, {
                className: A,
                children: [
                  !!this.state.invite_token &&
                    (0, U.jsx)(`div`, {
                      className: `VnenB-U8m50-`,
                      children: e,
                    }),
                  (0, U.jsx)(y, {
                    className: M,
                    onClick: () => this.OnCopy(`invite`, e),
                    children: this.state.invite_copied
                      ? f(`#ManageFriends_Copied`)
                      : f(`#ManageFriends_Copy`),
                  }),
                ],
              }),
              (0, U.jsx)(x, {
                className: N,
                onClick: this.OnCreateInviteLink,
                children: f(`#ManageFriends_CreateInviteLink`),
              }),
            ],
          }),
          (0, U.jsxs)(`div`, {
            className: D,
            children: [
              (0, U.jsx)(`h1`, {
                className: w,
                children: f(`#ManageFriends_OrSearch`),
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
                    children: (0, U.jsx)(l, {
                      className: k,
                      onKeyDown: this.OnSearchKeyDown,
                      value: this.state.input_search,
                      onChange: this.OnSearchChange,
                      placeholder: f(`#ManageFriends_EnterProfileName`),
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
                    children: (0, U.jsx)(c, {}),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  };
p([m], W.prototype, `OnCreateInviteLink`, null),
  p([m], W.prototype, `OnCopy`, null),
  p([m], W.prototype, `OnAddFriend`, null),
  p([m], W.prototype, `OnSearchChange`, null),
  p([m], W.prototype, `OnSearchKeyDown`, null),
  p([m], W.prototype, `OnSearchSubmit`, null);
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
    this.setState({ input_friend_code: t, invite_status: `pending` }),
      window.clearTimeout(this.m_currentRequest),
      (this.m_currentRequest = window.setTimeout(
        () => this.LoadProfile(t),
        500,
      ));
  }
  async LoadProfile(e) {
    if (e) {
      let t = g.InitFromAccountID(Number(e));
      await H.LoadProfiles([t.ConvertTo64BitString()]);
      let n = H.GetProfile(t.ConvertTo64BitString());
      n
        ? this.setState({
            searchResult: n,
            disable_send_invite:
              _.is_limited ||
              (this.props.bDisableForFriends && n.is_friend) ||
              (this.props.bDisableForSelf && n.steamid === _.steamid),
          })
        : this.setState({ searchResult: null });
    } else this.setState({ searchResult: null });
  }
  async OnActionClick(e) {
    let t = new FormData();
    t.append(`sessionID`, b()),
      t.append(`steamid`, e),
      t.append(`accept_invite`, `0`),
      this.setState({ disable_send_invite: !0 }),
      (await this.props.onButtonClick(e))
        ? (this.setState({ input_friend_code: ``, invite_status: `success` }),
          setTimeout(() => this.setState({ searchResult: null }), 3e3))
        : this.setState({ invite_status: `failure`, disable_send_invite: !1 });
  }
  render() {
    return (0, U.jsxs)(`div`, {
      className: z,
      children: [
        (0, U.jsx)(l, {
          className: k,
          value: this.state.input_friend_code,
          onChange: this.OnFriendCodeChange,
          placeholder: f(`#ManageFriends_EnterFriendCodePlaceholder`),
        }),
        (0, U.jsx)(K, {
          searchResult: this.state.searchResult,
          invite_status: this.state.invite_status,
          bShowStatus: this.props.bShowStatus,
          children: (0, U.jsx)(y, {
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
p([m], G.prototype, `OnFriendCodeChange`, null),
  p([m], G.prototype, `LoadProfile`, null),
  p([m], G.prototype, `OnActionClick`, null);
var K = (e) => {
  let { searchResult: t, invite_status: n, bShowStatus: r, children: i } = e,
    a = d();
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
                      (0, U.jsx)(h, {
                        target: a ? void 0 : `_blank`,
                        href: v.COMMUNITY_BASE_URL + `profiles/` + t.steamid,
                        children: f(`#ManageFriends_ProfileLink`),
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
                (0, U.jsx)(`div`, { children: f(`#ManageFriends_IsFriend`) }),
              t.friends_in_common != 0 &&
                (0, U.jsx)(`div`, {
                  children: (0, U.jsx)(h, {
                    target: a ? void 0 : `_blank`,
                    href:
                      v.COMMUNITY_BASE_URL +
                      `profiles/` +
                      t.steamid +
                      `/friendscommon`,
                    children:
                      t.friends_in_common === 1
                        ? f(
                            `#ManageFriends_FriendsInCommonSingular`,
                            t.friends_in_common,
                          )
                        : f(
                            `#ManageFriends_FriendsInCommon`,
                            t.friends_in_common,
                          ),
                  }),
                }),
              r &&
                n === `failure` &&
                (0, U.jsx)(`div`, {
                  className: `AkRlehi2-GI-`,
                  children: f(`#ManageFriends_InviteFailure`),
                }),
              r &&
                n === `success` &&
                (0, U.jsx)(`div`, {
                  className: `DqLSNVaGaWM-`,
                  children: f(`#ManageFriends_InviteSuccess`, t.persona_name),
                }),
            ],
          }),
        ],
      })
    : null;
};
export { W as n, G as t };

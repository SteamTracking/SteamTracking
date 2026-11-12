/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chunk~69c47c6f43.js",
      "./chunk~f025431ab0.js",
      "./chunk~01cfc309bf.js",
      "./main.js",
      "../../../css/applications/community/chunk~bcf59b1f6b.css",
      "../../../css/applications/community/chunk~69c47c6f43.css",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  A as n,
  B as r,
  C as i,
  E as a,
  Ft as o,
  G as s,
  K as c,
  L as l,
  M as u,
  R as d,
  St as f,
  at as ee,
  bt as p,
  j as m,
  ot as te,
  vt as ne,
  w as re,
  xt as h,
  yt as g,
} from "./chunk~01cfc309bf.js";
import { a as ie, f as _, u as ae } from "./chunk~93de6fa506.js";
import { u as oe } from "./chunk~1e67c3e4e4.js";
import { t as se } from "./chunk~eefd71512b.js";
import {
  _ as ce,
  f as le,
  g as ue,
  n as de,
  t as fe,
} from "./chunk~05a38bc848.js";
import { n as pe } from "./chunk~0278ae6236.js";
import "./chunk~4e18b7e430.js";
import { n as me } from "./chunk~c55d6473b2.js";
import { n as v, t as he } from "./chunk~a35e3605eb.js";
import { n as ge } from "./chunk~a7c5e71e12.js";
import { n as _e } from "./chunk~bc8f991cc0.js";
import {
  $p as ve,
  Bm as y,
  Bo as ye,
  Ci as be,
  Ct as xe,
  Di as Se,
  E as Ce,
  Ei as we,
  Em as Te,
  Fu as b,
  Go as Ee,
  Hf as De,
  Hu as Oe,
  Kf as ke,
  Lh as Ae,
  Lo as je,
  Mi as x,
  N as Me,
  Oi as Ne,
  Ol as Pe,
  Qi as Fe,
  Rh as S,
  Rs as Ie,
  Ru as Le,
  Su as C,
  Ti as Re,
  Tu as w,
  Wi as ze,
  Xo as Be,
  Yo as T,
  Yp as Ve,
  Zf as He,
  Zo as Ue,
  Zp as We,
  _t as Ge,
  ac as Ke,
  af as qe,
  bi as Je,
  c as Ye,
  cs as Xe,
  di as Ze,
  ef as E,
  et as D,
  gm as O,
  gu as Qe,
  hm as k,
  if as $e,
  im as et,
  kf as A,
  ki as tt,
  lm as j,
  nh as M,
  ns as N,
  qo as nt,
  ru as rt,
  sp as it,
  ss as at,
  tf as ot,
  ui as st,
  um as ct,
  vf as lt,
  wi as ut,
  wu as P,
  yi as dt,
  zo as ft,
} from "./main.js";
import { n as pt, t as mt } from "./chunk~65da1d3223.js";
var F = e(o()),
  I = te(),
  L = e(n()),
  ht = e(a()),
  gt = `p2qHAjJueVk-`,
  _t = `z7ELsY1zt-M-`,
  vt = `rIoW7wYpbBY-`,
  yt = `Xen-Cls5O14-`,
  bt = `LaHmAVJETcU-`,
  xt = `O-zq4PqisDQ-`,
  St = `mgdmZBRFg8w-`,
  Ct = `OJboGmDV8vM-`,
  wt = `X1rC-yWVtvw-`,
  Tt = `C5AkaKn-eYk-`,
  Et = `-I-g6uoCik0-`,
  Dt = `inRjWa-7gLI-`,
  Ot = `MTmVFSRfvm8-`,
  R = { ProfileURL: `` },
  kt = i((e) => {
    let { persona: t, className: n, ...r } = e;
    if (!t || !t.is_online) return null;
    let i = t.HasStateFlag(512),
      a = t.HasStateFlag(je),
      o = t.m_eGamingDeviceType == 544,
      s = t.m_eGamingDeviceType == 545,
      c = !o && !s && !a && t.HasStateFlag(1024);
    return (0, I.jsxs)(F.Fragment, {
      children: [
        i &&
          (0, I.jsx)(`div`, {
            className: C(n, `da-aiolTzeA-`, `blHJJNodWx8-`, v(t)),
            title: E(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, I.jsx)(de, {}),
          }),
        a &&
          (0, I.jsx)(`div`, {
            className: C(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, v(t)),
            title: E(`#Platform_Hint_VR`),
            ...r,
            children: (0, I.jsx)(rt, {}),
          }),
        c &&
          (0, I.jsx)(`div`, {
            className: C(n, `da-aiolTzeA-`, void 0, v(t)),
            title: E(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, I.jsx)(Ke, {}),
          }),
        o &&
          (0, I.jsx)(`div`, {
            className: C(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, v(t)),
            title: E(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, I.jsx)(Pe, {}),
          }),
        s &&
          (0, I.jsx)(`div`, {
            className: C(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, v(t)),
            title: E(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, I.jsx)(Pe, {}),
          }),
      ],
    });
  }),
  At = `SF1sJnuMqxw-`,
  jt = `rALHh8gNXzk-`,
  Mt = `BPUdGzLfnOs-`,
  Nt = `JOLhLnwh07k-`,
  Pt = `ZNkrEoiqVl8-`,
  Ft = `QJ-7IJ25nrU-`,
  It = `PxCAsy1vdvA-`,
  Lt = `mJ-ovG6Q-Nw-`,
  Rt = class extends F.Component {
    static get hoverClass() {
      return Lt;
    }
    render() {
      let {
          persona: e,
          animating: t,
          className: n,
          size: r,
          dim: i,
          ...a
        } = this.props,
        o = ``;
      return (
        r == `medium` ? (o = Mt) : r == `large` && (o = Nt),
        (0, I.jsxs)(`div`, {
          className: C(
            At,
            e.online_state,
            n,
            t && `h-MpRJExIDY-`,
            o,
            i && `rum5qK7fcnY-`,
          ),
          ...a,
          children: [
            (0, I.jsx)(`div`, {
              "data-text": `Z`,
              className: C(jt, Pt),
              children: `Z`,
            }),
            (0, I.jsx)(`div`, {
              "data-text": `Z`,
              className: C(jt, Ft),
              children: `Z`,
            }),
            (0, I.jsx)(`div`, {
              "data-text": `Z`,
              className: C(jt, It),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
Rt = A([i], Rt);
var zt = `tJCpCo5r9dY-`,
  Bt = `vOGePKVOcl4-`,
  Vt = `W9WrG6H-58k-`,
  Ht = `gVMK7GEJtxc-`,
  Ut = `y9n13dnyfCw-`,
  Wt = `_84ZaP76AcBk-`,
  Gt = `_5YE4gQ-Aa54-`,
  Kt = `_11qqBHZE40o-`,
  qt = `muiMo43G1Mg-`,
  Jt = `c8rm5taJRsE-`,
  Yt = `ih7RbrXvcd0-`,
  Xt = `aLLtr4iXlQQ-`,
  Zt = `yVNUkOCIdd4-`,
  Qt = `_1m1KTkH3GjI-`,
  $t = `yjHG9mbKfm4-`,
  en = `mwHzy7NJhJk-`,
  tn = `VuzjFfrri28-`,
  nn = `Bw6VX4ofFas-`,
  rn = `A28yS0adoTw-`,
  an = `W4juJFR0EN8-`,
  on = `UGtn0gSxtMk-`,
  sn = `IdfuZLuribQ-`,
  cn = `DCC9W4izxl0-`,
  ln = `KyChXFxK0cQ-`,
  un = `_4-gcw3hITg8-`,
  dn = `Vu9XIZWBmwQ-`,
  fn = `-ZWvjbdSHXw-`,
  pn = `ayL7gitFbYs-`,
  mn = `hTquQzAOTec-`,
  hn = `fGoygYjbW50-`,
  gn = `GfwCcJI8Vgc-`,
  _n = `yk9Vhsv1R1I-`,
  vn = `_09eWVnweoF8-`,
  yn = `tF7oTMhWdDg-`,
  bn = `_19GIiDBM-wg-`,
  xn = `Uw1JA4OREuk-`,
  Sn = it.PerMinute,
  Cn = class {
    m_accountid;
    m_bLoadingData = !1;
    m_rtLastLoad = 0;
    m_communityData = void 0;
    constructor(e) {
      (l(this), (this.m_accountid = e));
    }
    get community_data() {
      return this.m_communityData;
    }
    get community_data_ready() {
      return this.m_communityData !== void 0;
    }
    get player_level() {
      return this.m_communityData && this.m_communityData.level;
    }
    get player_level_class() {
      return this.m_communityData && this.m_communityData.level_class;
    }
    get player_badge() {
      return this.m_communityData && this.m_communityData.favorite_badge;
    }
    get profile_background() {
      return this.m_communityData && this.m_communityData.profile_background;
    }
    Reload() {
      ((this.m_rtLastLoad = 0), this.EnsureCommunityDataLoaded());
    }
    EnsureCommunityDataLoaded() {
      let e = this.m_communityData || this.m_bLoadingData,
        t = Date.now() > this.m_rtLastLoad + Sn * 1e3;
      (!e || (t && !this.m_bLoadingData)) &&
        ((this.m_bLoadingData = !0),
        L.default
          .get(
            k.CHAT_BASE_URL +
              `miniprofile/` +
              this.m_accountid +
              `/json/?origin=` +
              De(),
          )
          .then((e) => {
            let t = e.data;
            (typeof t.level == `number` &&
              typeof t.level_class == `string` &&
              (this.m_communityData = t),
              (this.m_bLoadingData = !1),
              (this.m_rtLastLoad = Date.now()));
          })
          .catch((e) => {
            this.m_bLoadingData = !1;
          }));
    }
  };
A([d], Cn.prototype, `m_communityData`, void 0);
var wn = class extends F.Component {
  render() {
    let { community_data: e } = this.props,
      t = e && e.favorite_badge;
    return t
      ? (0, I.jsxs)(`div`, {
          className: C(mn, this.props.className),
          children: [
            (0, I.jsx)(`div`, {
              className: hn,
              children: (0, I.jsx)(`img`, { src: t.icon, className: gn }),
            }),
            (0, I.jsxs)(`div`, {
              className: C(_n, void 0),
              children: [
                (0, I.jsx)(`div`, { className: yn, children: t.name }),
                (0, I.jsx)(`div`, {
                  className: xn,
                  children: E(`#Hover_BadgeXP`, t.xp),
                }),
              ],
            }),
          ],
        })
      : null;
  }
};
wn = A([i], wn);
var Tn = class extends F.Component {
  render() {
    let { community_data: e, className: t } = this.props;
    return e
      ? (0, I.jsxs)(`div`, {
          className: C(mn, t),
          children: [
            (0, I.jsx)(`div`, {
              className: e.level_class,
              children: (0, I.jsx)(`span`, {
                className: vn,
                children: e.level,
              }),
            }),
            (0, I.jsx)(`div`, {
              className: _n,
              children: (0, I.jsx)(`div`, {
                className: yn,
                children: E(`#Hover_SteamLevel`) + ` `,
              }),
            }),
          ],
        })
      : null;
  }
};
Tn = A([i], Tn);
var En = class extends F.Component {
  render() {
    let e = this.props.persona,
      t = this.props.community_data;
    return (0, I.jsxs)(`div`, {
      className: C(sn, this.props.className),
      children: [
        t?.in_game?.logo &&
          (0, I.jsx)(`img`, { className: `DCC9W4izxl0-`, src: t.in_game.logo }),
        (0, I.jsxs)(`div`, {
          className: C(pn, tn, ln, void 0),
          children: [
            (0, I.jsx)(`div`, {
              className: un,
              children: E(
                e.is_in_nonsteam_game
                  ? `#PersonaStateInNonSteamGame`
                  : `#PersonaStateInGame`,
              ),
            }),
            this.props.persona.GetCurrentGameName(),
            this.props.persona.HasCurrentGameRichPresence() &&
              (0, I.jsx)(`div`, {
                className: `UxdrnEX3kUU-`,
                children: this.props.persona.GetCurrentGameRichPresence(),
              }),
            this.props.in_game_section_additional,
          ],
        }),
      ],
    });
  }
};
En = A([i], En);
function Dn(e) {
  let { appID: t } = e,
    [n] = ge(t, { include_assets_without_overrides: !0 }),
    r = n?.GetAssetsWithoutOverrides()?.GetHeaderURL();
  return r ? (0, I.jsx)(`img`, { className: cn, src: r }) : null;
}
var On = class extends F.Component {
  render() {
    let e,
      t,
      n = this.props.broadcast_description;
    return (
      n && ((e = E(`#PersonaStateWatchingBroadcast`)), (t = n)),
      (0, I.jsxs)(`div`, {
        className: C(sn, this.props.className),
        children: [
          this.props.persona.m_broadcastAppId &&
            (0, I.jsx)(Dn, { appID: this.props.persona.m_broadcastAppId }),
          (0, I.jsxs)(`div`, {
            className: C(pn, tn, dn, void 0),
            children: [
              (0, I.jsx)(`div`, { className: un, children: e }),
              t &&
                (0, I.jsx)(`div`, { className: `UxdrnEX3kUU-`, children: t }),
              (0, I.jsx)(`div`, {
                className: fn,
                children: this.props.broadcast_thumbnail,
              }),
            ],
          }),
        ],
      })
    );
  }
};
On = A([i], On);
var kn = class extends F.Component {
  render() {
    let {
        className: e,
        persona: t,
        data_loader: n,
        community_data_override: r,
        nickname: i,
        is_friend: a,
        is_blocked: o,
        friend_relationship: s,
        broadcast_description: c,
        broadcast_thumbnail: l,
        mutual_friends: u,
        in_game_section_additional: d,
        bottom_section_additional: f,
        ...ee
      } = this.props,
      p = n.community_data;
    r && (p = { ...p, ...r });
    let m = Object.keys((p && p.profile_background) || {}).length > 0,
      te,
      ne = Bt;
    t.is_ingame
      ? (te = (0, I.jsx)(En, {
          ...this.props,
          community_data: p,
          className: m ? Jt : void 0,
        }))
      : t.is_watchingbroadcast
        ? (te = (0, I.jsx)(On, { ...this.props, className: m ? Jt : void 0 }))
        : (ne += ` ` + an);
    let re = !0,
      h = !1,
      g = !1;
    (a || ((ne += ` ` + Yt), (re = !1)), o && ((ne += ` undefined`), (g = !0)));
    let ie = i !== void 0,
      _ = t.is_awayOrSnooze,
      ae;
    return (
      (ae = ie
        ? (0, I.jsxs)(`div`, {
            children: [
              (0, I.jsxs)(`div`, {
                className: nn,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: C(Zt, en),
                    children: [
                      (0, I.jsx)(`div`, {
                        className: $t,
                        children: this.props.nickname,
                      }),
                      (0, I.jsx)(`div`, {
                        className: rn,
                        title: E(`#isNickname`),
                        children: `*`,
                      }),
                    ],
                  }),
                  (0, I.jsx)(kt, { persona: t }),
                ],
              }),
              (0, I.jsxs)(`div`, {
                className: C(Zt, Qt),
                children: [
                  `( `,
                  (0, I.jsx)(`div`, {
                    className: $t,
                    children: t.m_strPlayerName,
                  }),
                  ` )`,
                ],
              }),
            ],
          })
        : (0, I.jsxs)(`div`, {
            className: nn,
            children: [
              (0, I.jsx)(`div`, {
                className: Zt,
                children: (0, I.jsx)(`div`, {
                  className: $t,
                  children: t.m_strPlayerName,
                }),
              }),
              (0, I.jsx)(kt, { persona: t }),
            ],
          })),
      this.props.friend_relationship == 2 && (h = !0),
      (0, I.jsx)(F.Fragment, {
        children: (0, I.jsx)(
          `div`,
          {
            className: C(this.props.className, zt),
            ...ee,
            children: (0, I.jsxs)(`div`, {
              className: ne,
              children: [
                (0, I.jsx)(An, { community_data: p, persona: t }),
                (0, I.jsx)(`div`, {
                  className: Vt,
                  children: (0, I.jsxs)(`div`, {
                    className: C(Ht, t.online_state, _ && void 0, v(t)),
                    children: [
                      (0, I.jsx)(jn, {
                        persona: this.props.persona,
                        community_data: p,
                      }),
                      _ &&
                        (0, I.jsx)(Rt, {
                          persona: t,
                          animating: !0,
                          className: `rUdBu1-c7IY-`,
                          size: `large`,
                        }),
                      (0, I.jsx)(`div`, {
                        className: Ut,
                        children: (0, I.jsx)(`div`, {
                          className: void 0,
                          children: (0, I.jsxs)(`div`, {
                            className: tn,
                            children: [
                              ae,
                              _ &&
                                (0, I.jsx)(`div`, {
                                  className: `Ggu8D-7EzqA-`,
                                  children: E(`#PersonaStateAway`),
                                }),
                              !t.is_online &&
                                (0, I.jsx)(`div`, {
                                  className: `Ggu8D-7EzqA-`,
                                  children:
                                    this.props.persona.GetLocalizedOnlineStatus(),
                                }),
                              t.online_state == `online` &&
                                !_ &&
                                (0, I.jsx)(`div`, {
                                  className: `Ggu8D-7EzqA-`,
                                  children: E(`#PersonaStateOnline`),
                                }),
                              !re &&
                                (0, I.jsx)(`div`, {
                                  className: `fbkPk4kqT14-`,
                                  children: E(
                                    h
                                      ? `#Friend_Menu_NotAFriendRequesting`
                                      : `#Friend_Menu_NotAFriendLabel`,
                                  ),
                                }),
                              g &&
                                (0, I.jsx)(`div`, {
                                  className: `TI-9NNXiqzI-`,
                                  children: E(`#PersonaStateBlocked`),
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                te,
                (0, I.jsxs)(`div`, {
                  className: C(on, m && `c8rm5taJRsE-`),
                  children: [
                    (0, I.jsx)(wn, { community_data: p }),
                    (0, I.jsx)(Tn, { community_data: p }),
                  ],
                }),
                f,
                (0, I.jsx)(`div`, {
                  className: bn,
                  children: this.props.mutual_friends,
                }),
              ],
            }),
          },
          t.GetAccountID(),
        ),
      })
    );
  }
};
kn = A([i], kn);
var An = ({ community_data: e, persona: t }) => {
    if (e && e.profile_background) {
      let { image: t, ...n } = e.profile_background;
      if (Object.keys(n).length)
        return (0, I.jsx)(
          `div`,
          {
            className: qt,
            children: (0, I.jsx)(`video`, {
              className: Kt,
              playsInline: !0,
              muted: !0,
              autoPlay: !0,
              loop: !0,
              poster: t,
              children: Object.keys(n).map((e) =>
                (0, I.jsx)(`source`, { src: n[e], type: e }, e),
              ),
            }),
          },
          n[`video/webm`] || n[`video/mp4`] || `image`,
        );
      if (t)
        return (0, I.jsx)(`div`, {
          className: qt,
          children: (0, I.jsx)(`img`, { className: Kt, src: t }),
        });
    }
    return (0, I.jsx)(`div`, {
      className: Wt,
      children: (0, I.jsx)(`img`, { className: Gt, src: t.avatar_url }),
    });
  },
  jn = (e) => {
    let { persona: t, community_data: n, size: r, ...i } = e,
      a =
        n &&
        n.avatar_frame &&
        (0, I.jsx)(`img`, { src: n.avatar_frame, className: `lgtcHnfBxhs-` }),
      o = n && n.animated_avatar,
      s = { size: r || `X-Large`, statusPosition: `bottom`, className: Xt };
    return o
      ? (0, I.jsx)(mt, { ...i, strAvatarURL: o, ...s, children: a })
      : (0, I.jsx)(pt, { persona: t, ...i, ...s, children: a });
  },
  Mn = class {
    m_SteamInterface;
    m_rgPreviousAvatars = [];
    m_promiseLoading;
    constructor(e) {
      (l(this), (this.m_SteamInterface = e));
    }
    GetAvatarHistory() {
      return (this.StartLoadIfNeeded(), this.m_rgPreviousAvatars || []);
    }
    RefreshAvatarHistory() {
      this.m_promiseLoading = this.LoadAvatarHistory();
    }
    async BWaitForLoad() {
      return (this.StartLoadIfNeeded(), this.m_promiseLoading);
    }
    StartLoadIfNeeded() {
      this.m_promiseLoading ||= this.LoadAvatarHistory();
    }
    async LoadAvatarHistory() {
      let e = M.Init(Ce);
      e.SetBodyFields({ steamid: O.steamid, filter_user_uploaded_only: !0 });
      let t = await Me.GetAvatarHistory(
        this.m_SteamInterface.GetServiceTransport(),
        e,
      );
      return (
        t.GetEResult() == 1
          ? ((this.m_rgPreviousAvatars = []),
            t
              .Body()
              .toObject()
              .avatars.map((e) => {
                this.m_rgPreviousAvatars.push({
                  avatar_hash: e.avatar_sha1,
                  timestamp: e.timestamp,
                });
              }))
          : console.error(
              `Error when calling CommunityService.GetAvatarHistory: EResult=${t.GetEResult()}`,
            ),
        !!this.m_rgPreviousAvatars
      );
    }
    async SetPreviousAvatar(e) {
      let t = e.GetAvatarHash();
      for (let n = 0; n < this.m_rgPreviousAvatars.length; ++n)
        if (this.m_rgPreviousAvatars[n].avatar_hash == t)
          return this.SelectAvatar(e, t);
      return 42;
    }
    async SelectAvatar(e, t) {
      let n = new FormData();
      (n.append(`sessionid`, j()), n.append(`json`, `1`), n.append(`sha`, t));
      let r =
        (
          await L.default.post(
            `${k.COMMUNITY_BASE_URL}actions/selectPreviousAvatar`,
            n,
          )
        ).data.success || 2;
      return (r == 1 && e.CommitAvatarHash(), r);
    }
  };
A([d], Mn.prototype, `m_rgPreviousAvatars`, void 0);
var Nn = class {
  constructor() {
    l(this);
  }
  m_AvatarData = void 0;
  m_promiseLoading;
  GetRecentGameAvatars() {
    return (
      this.StartLoadIfNeeded(),
      (this.m_AvatarData && this.m_AvatarData.rgRecentGames) || []
    );
  }
  GetOwnedGameAvatars() {
    return (
      this.StartLoadIfNeeded(),
      (this.m_AvatarData && this.m_AvatarData.rgOwnedGames) || []
    );
  }
  GetOtherGameAvatars() {
    return (
      this.StartLoadIfNeeded(),
      (this.m_AvatarData && this.m_AvatarData.rgOtherGames) || []
    );
  }
  async BWaitForLoad() {
    return (this.StartLoadIfNeeded(), this.m_promiseLoading);
  }
  StartLoadIfNeeded() {
    this.m_promiseLoading ||= this.LoadOGGAvatars();
  }
  async LoadOGGAvatars() {
    let e = await L.default.get(
      `${k.COMMUNITY_BASE_URL}actions/GameAvatars/?json=1&l=${k.LANGUAGE}`,
    );
    return ((this.m_AvatarData = e.data || null), !!e.data);
  }
  async SetPlayerOGGAvatar(e) {
    let t = Fn(this),
      n,
      r = e.GetAvatarHash();
    for (; (n = t.next().value);) {
      let t = n.avatars.find((e) => e.avatar_hash == r);
      if (t) return this.SelectGameAvatar(e, n.appid, t.ordinal);
    }
    return 42;
  }
  async SelectGameAvatar(e, t, n) {
    let r = new FormData();
    (r.append(`sessionid`, j()),
      r.append(`json`, `1`),
      r.append(`selectedAvatar`, `` + n));
    let i =
      (await L.default.post(`${k.COMMUNITY_BASE_URL}ogg/${t}/selectAvatar`, r))
        .data.success || 2;
    return (i == 1 && e.CommitAvatarHash(), i);
  }
  UpdateAvatarsForGame(e, t) {
    let n = [`rgRecentGames`, `rgOwnedGames`, `rgOtherGames`],
      r = new Set();
    for (let i of n) {
      let n = this.m_AvatarData[i];
      if (n && Array.isArray(n))
        for (let a of n) a.appid === e && ((a.avatars = t), r.add(i));
    }
    r.forEach((e) => {
      let t = this.m_AvatarData[e];
      t && Array.isArray(t) && (this.m_AvatarData[e] = [...t]);
    });
  }
};
A([d.shallow], Nn.prototype, `m_AvatarData`, void 0);
function* Pn(e) {
  for (let t of [
    e.GetRecentGameAvatars(),
    e.GetOwnedGameAvatars(),
    e.GetOtherGameAvatars(),
  ])
    for (let e of t) for (let t of e.avatars) yield t;
}
function* Fn(e) {
  for (let t of [
    e.GetRecentGameAvatars(),
    e.GetOwnedGameAvatars(),
    e.GetOtherGameAvatars(),
  ])
    for (let e of t) yield e;
}
function In(e) {
  switch (e) {
    case 1:
      return E(`#Privacy_Private`);
    case 2:
      return E(`#Privacy_FriendsOnly`);
    case 3:
      return E(`#Privacy_Public`);
    default:
      return ``;
  }
}
function Ln(e) {
  switch (e) {
    case 0:
      return E(`#Privacy_FriendsOnly`);
    case 1:
      return E(`#Privacy_Public`);
    case 2:
      return E(`#Privacy_Private`);
    default:
      return ``;
  }
}
function z(e, t) {
  return e < t ? e : t;
}
function Rn(e, t) {
  return t == 1 ? 2 : t == 2 && e == 1 ? 0 : e;
}
var B = class {
  m_PrivacySettings = void 0;
  m_eCommentPermission = void 0;
  m_eSaveStateByKey = new Map();
  m_eCommentSaveState = 0;
  constructor(e, t) {
    (l(this), (this.m_PrivacySettings = e), (this.m_eCommentPermission = t));
  }
  GetPrivacySetting(e) {
    return e == `PrivacyOwnedGames`
      ? z(
          this.m_PrivacySettings.PrivacyProfile,
          this.m_PrivacySettings.PrivacyOwnedGames,
        )
      : e == `PrivacyPlaytime`
        ? z(
            this.GetPrivacySetting(`PrivacyOwnedGames`),
            this.m_PrivacySettings.PrivacyPlaytime,
          )
        : e == `PrivacyInventory`
          ? z(
              this.m_PrivacySettings.PrivacyProfile,
              this.m_PrivacySettings.PrivacyInventory,
            )
          : e == `PrivacyInventoryGifts`
            ? z(
                this.GetPrivacySetting(`PrivacyInventory`),
                this.m_PrivacySettings.PrivacyInventoryGifts,
              )
            : e == `PrivacyFriendsList`
              ? z(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyFriendsList,
                )
              : this.m_PrivacySettings[e];
  }
  get CommentPermission() {
    return this.m_eCommentPermission;
  }
  GetSaveState(e) {
    return this.m_eSaveStateByKey.get(e) || 0;
  }
  GetCommentSaveState() {
    return this.m_eCommentSaveState;
  }
  ChangePrivacySetting(e, t, n) {
    if (this.m_PrivacySettings[e] == t) return;
    this.m_PrivacySettings[e] = t;
    let r = this.SavePrivacy(),
      i = n || e;
    r
      ? (this.m_eSaveStateByKey.set(i, 1),
        r.then((e) => {
          e
            ? this.m_eSaveStateByKey.set(i, 2)
            : this.m_eSaveStateByKey.set(i, 3);
        }))
      : this.m_eSaveStateByKey.set(i, 0);
  }
  ChangeCommentPermission(e) {
    if (this.m_eCommentPermission == e) return;
    this.m_eCommentPermission = e;
    let t = this.SavePrivacy();
    t
      ? ((this.m_eCommentSaveState = 1),
        t.then((e) => {
          this.m_eCommentSaveState = e ? 2 : 3;
        }))
      : (this.m_eCommentSaveState = 0);
  }
  SavePrivacy() {
    let e = new FormData();
    return (
      e.append(`sessionid`, j()),
      e.append(`Privacy`, JSON.stringify(this.m_PrivacySettings)),
      e.append(`eCommentPermission`, JSON.stringify(this.m_eCommentPermission)),
      L.default
        .post(R.ProfileURL + `ajaxsetprivacy/`, e)
        .then((e) => {
          let t = e.data;
          if (t.success != 1)
            return (
              window.ShowAlertDialog(
                E(`#Error_Error`),
                E(`#Error_CommentEditFailed`),
              ),
              !1
            );
          let n = t.Privacy;
          return (
            n &&
              n.PrivacySettings &&
              n.eCommentPermission &&
              r(() => {
                ((this.m_PrivacySettings = n.PrivacySettings),
                  (this.m_eCommentPermission = n.eCommentPermission));
              }),
            !0
          );
        })
        .catch(
          (e) => (
            window.ShowAlertDialog(
              E(`#Error_Error`),
              E(`#Error_CommentEditFailed`),
            ),
            !1
          ),
        )
    );
  }
};
(A([d], B.prototype, `m_PrivacySettings`, void 0),
  A([d], B.prototype, `m_eCommentPermission`, void 0),
  A([d], B.prototype, `m_eSaveStateByKey`, void 0),
  A([d], B.prototype, `m_eCommentSaveState`, void 0));
var zn = class {
  m_rgBadges = [];
  m_FavoriteBadge = void 0;
  m_CommittedFavoriteBadge;
  m_AppInfoStore;
  m_CMInterface;
  constructor(e, t, n) {
    (l(this), (this.m_CMInterface = e), (this.m_AppInfoStore = t));
    let r = n.rgBadges,
      i = n.FavoriteBadge;
    if (!Array.isArray(r))
      for (let e in r) {
        let t = r[e],
          n;
        ((n =
          `communityitemid` in t ? new Hn(t, this.m_AppInfoStore) : new Vn(t)),
          this.m_rgBadges.push(n),
          i &&
            n.BIsFavoriteBadge(i) &&
            (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge = n));
      }
  }
  get Badges() {
    return this.m_rgBadges;
  }
  get FavoriteBadge() {
    return this.m_FavoriteBadge;
  }
  get FavoriteBadgeID() {
    return this.m_FavoriteBadge
      ? this.m_FavoriteBadge.GetFavoriteBadgeID()
      : {};
  }
  SetFavoriteBadge(e) {
    this.m_FavoriteBadge = e;
  }
  RevertFavoriteBadge() {
    this.m_FavoriteBadge = this.m_CommittedFavoriteBadge;
  }
  BFavoriteBadgeUncomitted() {
    return this.m_FavoriteBadge != this.m_CommittedFavoriteBadge;
  }
  async CommitFavoriteBadgeChanges() {
    if (this.m_FavoriteBadge == this.m_CommittedFavoriteBadge) return 1;
    let e = this.FavoriteBadgeID,
      t = M.Init(we);
    e.badgeid
      ? t.Body().set_badgeid(e.badgeid)
      : e.communityitemid && t.Body().set_communityitemid(e.communityitemid);
    let n = await x.SetFavoriteBadge(
      this.m_CMInterface.GetServiceTransport(),
      t,
    );
    return (
      n.GetEResult() == 1 &&
        (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge),
      n.GetEResult()
    );
  }
  GetFavoriteBadgePreview() {
    return this.m_FavoriteBadge
      ? {
          name: this.m_FavoriteBadge.GetName(),
          xp: this.m_FavoriteBadge.GetXP(),
          level: 0,
          description: this.m_FavoriteBadge.GetGameName(),
          icon: this.m_FavoriteBadge.GetIconURL(),
        }
      : null;
  }
};
(A([d], zn.prototype, `m_FavoriteBadge`, void 0),
  A([m], zn.prototype, `SetFavoriteBadge`, null),
  A([m], zn.prototype, `RevertFavoriteBadge`, null));
var Bn = class {
    m_strIconURL;
    m_strName;
    m_strXP;
    constructor(e) {
      ((this.m_strIconURL = e.icon),
        (this.m_strName = e.name),
        (this.m_strXP = e.xp));
    }
    GetIconURL() {
      return this.m_strIconURL;
    }
    GetName() {
      return this.m_strName;
    }
    GetXP() {
      return this.m_strXP;
    }
    GetGameName() {
      return ``;
    }
    BIsFoil() {
      return !1;
    }
  },
  Vn = class extends Bn {
    m_unBadgeID;
    constructor(e) {
      (super(e), (this.m_unBadgeID = e.badgeid));
    }
    GetFavoriteBadgeID() {
      return { badgeid: this.m_unBadgeID };
    }
    BIsFavoriteBadge(e) {
      return e.badgeid && e.badgeid == this.m_unBadgeID;
    }
  },
  Hn = class extends Bn {
    m_ulCommunityItemID;
    m_usItemType;
    m_unAppID;
    m_unBorderColor;
    m_AppInfoStore;
    constructor(e, t) {
      (super(e),
        (this.m_ulCommunityItemID = e.communityitemid),
        (this.m_usItemType = e.item_type),
        (this.m_unAppID = e.appid),
        (this.m_unBorderColor = e.border_color),
        (this.m_AppInfoStore = t));
    }
    GetFavoriteBadgeID() {
      return { communityitemid: this.m_ulCommunityItemID };
    }
    BIsFavoriteBadge(e) {
      return e.communityitemid && e.communityitemid == this.m_ulCommunityItemID;
    }
    GetGameName() {
      return this.m_AppInfoStore.GetAppInfo(this.m_unAppID).name;
    }
    BIsFoil() {
      return this.m_unBorderColor == 1;
    }
  };
function Un(e) {
  return H(e.movie_webm);
}
function Wn(e) {
  return H(e.movie_webm_small) || H(e.movie_webm);
}
function Gn(e) {
  return H(e.movie_mp4);
}
function Kn(e) {
  return H(e.movie_mp4_small) || H(e.movie_mp4);
}
function qn(e) {
  return H(e.image_small);
}
function V(e) {
  return H(e.image_large);
}
function Jn(e) {
  return Yn(e, 252, 160);
}
function Yn(e, t, n) {
  return e
    ? e.image_large
      ? `${k.COMMUNITY_CDN_URL}economy/profilebackground/${e.image_large}?size=${t}x${n}`
      : null
    : `${k.COMMUNITY_CDN_URL}public/images/profile/2020/bg_dots.png`;
}
function Xn(e, t = !1) {
  let n = {},
    r = t ? Wn(e) : Un(e);
  r && (n[`video/webm`] = r);
  let i = t ? Kn(e) : Gn(e);
  return (i && (n[`video/mp4`] = i), n);
}
function H(e) {
  return e ? `${k.MEDIA_CDN_COMMUNITY_URL}images/${e}` : null;
}
var U = class {
  m_SteamInterface;
  m_AppInfoStore;
  m_promiseOwned;
  m_promiseEquipped;
  m_Backgrounds = new W(this);
  m_MiniProfileBackgrounds = new W(this);
  m_Avatars = new W(this);
  m_AvatarFrames = new W(this);
  m_ProfileModifiers = new W(this);
  m_OnAvatarEquipmentChangedCallbacks = new Ae();
  m_mapGoldenProfileConfigByAppID = new Map();
  constructor(e, t, n) {
    (l(this), (this.m_SteamInterface = e), (this.m_AppInfoStore = t));
    for (let e of n) this.m_mapGoldenProfileConfigByAppID.set(e.appid, e);
    this.Initialize();
  }
  get AppInfoStore() {
    return this.m_AppInfoStore;
  }
  async GetOwnedBackgrounds() {
    return (
      this.m_Backgrounds.m_rgOwnedItems ||
        (await this.m_Backgrounds.SetItems(
          (await this.m_promiseOwned).Body().profile_backgrounds(),
        )),
      this.m_Backgrounds.m_rgOwnedItems
    );
  }
  GetEquippedBackground() {
    return (
      this.m_Backgrounds.m_bEquippedLoaded ||
        (async () =>
          this.m_Backgrounds.LoadEquipped(
            (await this.m_promiseEquipped).Body().profile_background(!1),
          ))(),
      this.m_Backgrounds.m_EquippedItem
    );
  }
  SetEquippedBackground(e) {
    this.m_Backgrounds.SetEquipped(e);
  }
  GetEquippedBackgroundFlags() {
    return this.m_Backgrounds.m_EquipFlags || 0;
  }
  SetEquippedBackgroundFlags(e) {
    this.m_Backgrounds.SetEquippedFlags(e);
  }
  BIsBackgroundUncomitted() {
    return this.m_Backgrounds.BIsUncomitted();
  }
  async SetAndEquipProfileBackground(e) {
    if (
      (this.m_Backgrounds.SetEquipped(e), this.m_Backgrounds.BIsUncomitted())
    ) {
      {
        let e = M.Init(Ne);
        e.Body().set_communityitemid(
          this.m_Backgrounds.m_EquippedItem &&
            this.m_Backgrounds.m_EquippedItem.communityitemid,
        );
        let t = await x.SetProfileBackground(
          this.m_SteamInterface.GetServiceTransport(),
          e,
        );
        if (t.GetEResult() != 1) return t.GetEResult();
      }
      if (
        this.m_Backgrounds.m_EquippedItem &&
        this.m_Backgrounds.m_EquippedItem.communityitemid
      ) {
        let e = M.Init(Re);
        (e
          .Body()
          .set_communityitemid(
            this.m_Backgrounds.m_EquippedItem.communityitemid,
          ),
          e.Body().set_flags(this.m_Backgrounds.m_EquipFlags));
        let t = await x.SetEquippedProfileItemFlags(
          this.m_SteamInterface.GetServiceTransport(),
          e,
        );
        t.GetEResult() != 1 &&
          console.error(
            `Error when calling PlayerService.SetEquippedProfileItemFlags: EResult=${t.GetEResult()}`,
          );
      }
    }
    return (this.m_Backgrounds.SetComitted(), 1);
  }
  RevertBackgroundChanges() {
    this.m_Backgrounds.Revert();
  }
  async GetOwnedMiniProfileBackgrounds() {
    return (
      this.m_MiniProfileBackgrounds.m_rgOwnedItems ||
        (await this.m_MiniProfileBackgrounds.SetItems(
          (await this.m_promiseOwned).Body().mini_profile_backgrounds(),
        )),
      this.m_MiniProfileBackgrounds.m_rgOwnedItems
    );
  }
  GetEquippedMiniProfileBackground() {
    return (
      this.m_MiniProfileBackgrounds.m_bEquippedLoaded ||
        (async () =>
          this.m_MiniProfileBackgrounds.LoadEquipped(
            (await this.m_promiseEquipped).Body().mini_profile_background(!1),
          ))(),
      this.m_MiniProfileBackgrounds.m_EquippedItem
    );
  }
  SetEquippedMiniProfileBackground(e) {
    this.m_MiniProfileBackgrounds.SetEquipped(e);
  }
  BIsMiniProfileBackgroundUncomitted() {
    return this.m_MiniProfileBackgrounds.BIsUncomitted();
  }
  async CommitMiniProfileChanges() {
    if (this.m_MiniProfileBackgrounds.BIsUncomitted()) {
      let e = M.Init(Se);
      e.Body().set_communityitemid(
        this.m_MiniProfileBackgrounds.m_EquippedItem &&
          this.m_MiniProfileBackgrounds.m_EquippedItem.communityitemid,
      );
      let t = await x.SetMiniProfileBackground(
        this.m_SteamInterface.GetServiceTransport(),
        e,
      );
      if (t.GetEResult() != 1) return t.GetEResult();
    }
    return (
      this.m_MiniProfileBackgrounds.SetComitted(),
      this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
      1
    );
  }
  RevertMiniProfileBackgroundChanges() {
    this.m_MiniProfileBackgrounds.Revert();
  }
  BIsAvatarUncomitted() {
    return (
      this.m_Avatars.BIsUncomitted() || this.m_AvatarFrames.BIsUncomitted()
    );
  }
  async CommitAvatarChanges() {
    let e, t;
    if (this.m_Avatars.BIsUncomitted()) {
      let t = M.Init(be);
      (t
        .Body()
        .set_communityitemid(
          this.m_Avatars.m_EquippedItem &&
            this.m_Avatars.m_EquippedItem.communityitemid,
        ),
        (e = x.SetAnimatedAvatar(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        )));
    }
    if (this.m_AvatarFrames.BIsUncomitted()) {
      let e = M.Init(ut);
      (e
        .Body()
        .set_communityitemid(
          this.m_AvatarFrames.m_EquippedItem &&
            this.m_AvatarFrames.m_EquippedItem.communityitemid,
        ),
        (t = x.SetAvatarFrame(this.m_SteamInterface.GetServiceTransport(), e)));
    }
    let [n, r] = await Promise.all([e, t]);
    return n && n.GetEResult() != 1
      ? n.GetEResult()
      : r && r.GetEResult() != 1
        ? r.GetEResult()
        : (this.m_Avatars.SetComitted(),
          this.m_AvatarFrames.SetComitted(),
          this.m_OnAvatarEquipmentChangedCallbacks.Dispatch(),
          1);
  }
  RevertAvatarChanges() {
    (this.m_Avatars.Revert(), this.m_AvatarFrames.Revert());
  }
  AddOnAvatarEquipmentChangedCallback(e) {
    this.m_OnAvatarEquipmentChangedCallbacks.Register(e);
  }
  async GetOwnedAvatars() {
    return (
      this.m_Avatars.m_rgOwnedItems ||
        (await this.m_Avatars.SetItems(
          (await this.m_promiseOwned).Body().animated_avatars(),
        )),
      this.m_Avatars.m_rgOwnedItems
    );
  }
  GetEquippedAvatar() {
    return (
      this.m_Avatars.m_bEquippedLoaded ||
        (async () =>
          this.m_Avatars.LoadEquipped(
            (await this.m_promiseEquipped).Body().animated_avatar(!1),
          ))(),
      this.m_Avatars.m_EquippedItem
    );
  }
  GetCommittedEquippedAvatar() {
    return (
      this.m_Avatars.m_bEquippedLoaded ||
        (async () =>
          this.m_Avatars.LoadEquipped(
            (await this.m_promiseEquipped).Body().animated_avatar(!1),
          ))(),
      this.m_Avatars.m_CommittedEquippedItem
    );
  }
  SetEquippedAvatar(e, t = !1) {
    this.m_Avatars.SetEquipped(e, t);
  }
  async GetOwnedAvatarFrames() {
    return (
      this.m_AvatarFrames.m_rgOwnedItems ||
        (await this.m_AvatarFrames.SetItems(
          (await this.m_promiseOwned).Body().avatar_frames(),
        )),
      this.m_AvatarFrames.m_rgOwnedItems
    );
  }
  GetEquippedAvatarFrame() {
    return (
      this.m_AvatarFrames.m_bEquippedLoaded ||
        (async () =>
          this.m_AvatarFrames.LoadEquipped(
            (await this.m_promiseEquipped).Body().avatar_frame(!1),
          ))(),
      this.m_AvatarFrames.m_EquippedItem
    );
  }
  GetCommittedEquippedAvatarFrame() {
    return (
      this.m_AvatarFrames.m_bEquippedLoaded ||
        (async () =>
          this.m_AvatarFrames.LoadEquipped(
            (await this.m_promiseEquipped).Body().avatar_frame(!1),
          ))(),
      this.m_AvatarFrames.m_CommittedEquippedItem
    );
  }
  SetEquippedAvatarFrame(e) {
    this.m_AvatarFrames.SetEquipped(e);
  }
  async GetOwnedProfileModifiers() {
    return (
      this.m_ProfileModifiers.m_rgOwnedItems ||
        (await this.m_ProfileModifiers.SetItems(
          (await this.m_promiseOwned).Body().profile_modifiers(),
        )),
      this.m_ProfileModifiers.m_rgOwnedItems
    );
  }
  GetEquippedProfileModifier() {
    return (
      this.m_ProfileModifiers.m_bEquippedLoaded ||
        (async () =>
          this.m_ProfileModifiers.LoadEquipped(
            (await this.m_promiseEquipped).Body().profile_modifier(!1),
          ))(),
      this.m_ProfileModifiers.m_EquippedItem
    );
  }
  GetCommittedEquippedProfileModifier() {
    return (
      this.m_ProfileModifiers.m_bEquippedLoaded ||
        (async () =>
          this.m_ProfileModifiers.LoadEquipped(
            (await this.m_promiseEquipped).Body().profile_modifier(!1),
          ))(),
      this.m_ProfileModifiers.m_CommittedEquippedItem
    );
  }
  BHasAnyProfileModifiers() {
    return (
      this.GetOwnedProfileModifiers(),
      !!this.m_ProfileModifiers.GetOwnedItemCount()
    );
  }
  SetEquippedProfileModifier(e) {
    this.m_ProfileModifiers.SetEquipped(e);
  }
  RevertProfileModifierChanges() {
    this.m_ProfileModifiers.Revert();
  }
  ReloadEquippedItems() {
    let e = M.Init(dt);
    (e.Body().set_steamid(O.steamid),
      e.Body().set_language(k.LANGUAGE),
      (this.m_promiseEquipped = x.GetProfileItemsEquipped(
        this.m_SteamInterface.GetServiceTransport(),
        e,
      )),
      this.m_AvatarFrames.SetEquipped(null, !0),
      (this.m_AvatarFrames.m_bEquippedLoaded = !1),
      this.GetEquippedAvatarFrame(),
      this.m_Backgrounds.SetEquipped(null, !0),
      (this.m_Backgrounds.m_bEquippedLoaded = !1),
      this.GetEquippedBackground(),
      this.m_MiniProfileBackgrounds.SetEquipped(null, !0),
      (this.m_MiniProfileBackgrounds.m_bEquippedLoaded = !1),
      this.GetEquippedMiniProfileBackground());
  }
  async CommitProfileModifierChanges() {
    if (this.m_ProfileModifiers.BIsUncomitted()) {
      let e = !1;
      if (
        this.m_ProfileModifiers.m_CommittedEquippedItem &&
        this.m_ProfileModifiers.m_CommittedEquippedItem !=
          this.m_ProfileModifiers.m_EquippedItem
      ) {
        let t = M.Init(le);
        (t
          .Body()
          .set_communityitemid(
            this.m_ProfileModifiers.m_CommittedEquippedItem.communityitemid,
          ),
          t
            .Body()
            .set_appid(this.m_ProfileModifiers.m_CommittedEquippedItem.appid),
          t.Body().set_activate(!1));
        let n = await ue.ActivateProfileModifierItem(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (n.GetEResult() != 1) return n.GetEResult();
        e = !0;
      }
      if (this.m_ProfileModifiers.m_EquippedItem) {
        let t = M.Init(le);
        (t
          .Body()
          .set_communityitemid(
            this.m_ProfileModifiers.m_EquippedItem.communityitemid,
          ),
          t.Body().set_appid(this.m_ProfileModifiers.m_EquippedItem.appid),
          t.Body().set_activate(!0));
        let n = await ue.ActivateProfileModifierItem(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (n.GetEResult() != 1) return n.GetEResult();
        e = !0;
      }
      (this.m_ProfileModifiers.SetComitted(),
        e &&
          r(() => {
            this.ReloadEquippedItems();
          }));
    }
    return 1;
  }
  BIsLegacyGoldenProfile(e) {
    return this.m_mapGoldenProfileConfigByAppID.has(e);
  }
  GetGoldenProfileConfigValue(e) {
    let t = this.GetEquippedProfileModifier();
    if (!t) return null;
    let n = this.m_mapGoldenProfileConfigByAppID.get(t.appid);
    return n ? n[e] : null;
  }
  GetProfileModifierCSSURL() {
    return this.GetGoldenProfileConfigValue(`css_url`);
  }
  GetProfileModifierAvatarFrameURL() {
    return this.GetGoldenProfileConfigValue(`frame_url`);
  }
  GetProfileModifierMiniProfileBackground() {
    return this.GetGoldenProfileConfigValue(`miniprofile_background`);
  }
  GetProfileModifierMiniProfileBackgroundMovies() {
    return this.GetGoldenProfileConfigValue(`miniprofile_movie`);
  }
  async Initialize() {
    let e = M.Init(Je);
    (e.Body().set_language(k.LANGUAGE),
      (this.m_promiseOwned = x.GetProfileItemsOwned(
        this.m_SteamInterface.GetServiceTransport(),
        e,
      )));
    let t = M.Init(dt);
    (t.Body().set_steamid(O.steamid),
      t.Body().set_language(k.LANGUAGE),
      (this.m_promiseEquipped = x.GetProfileItemsEquipped(
        this.m_SteamInterface.GetServiceTransport(),
        t,
      )));
  }
};
(A([m], U.prototype, `RevertBackgroundChanges`, null),
  A([m], U.prototype, `RevertMiniProfileBackgroundChanges`, null),
  A([m], U.prototype, `RevertAvatarChanges`, null),
  A([m], U.prototype, `ReloadEquippedItems`, null));
var W = class {
  m_cItemsOwned = void 0;
  m_bEquippedLoaded = !1;
  m_bUnsavedChanges = !1;
  m_CommittedEquippedItem = void 0;
  m_EquippedItem = void 0;
  m_EquipFlags = void 0;
  m_rgOwnedItems;
  m_parent;
  constructor(e) {
    (l(this), (this.m_parent = e));
  }
  GetOwnedItemCount() {
    return this.m_cItemsOwned;
  }
  async SetItems(e) {
    let t = e.map((e) => e.toObject());
    ((this.m_rgOwnedItems = (await this.FillAppNames(t)).reverse()),
      (this.m_cItemsOwned = this.m_rgOwnedItems.length));
  }
  async LoadEquipped(e) {
    if (e !== void 0 && e.communityitemid()) {
      let t = e.toObject();
      if (t) {
        let [e] = await this.FillAppNames([t]);
        r(() => {
          ((this.m_CommittedEquippedItem = this.m_EquippedItem = e),
            (this.m_EquipFlags = e && e.equipped_flags));
        });
      }
      this.m_bEquippedLoaded = !0;
    }
  }
  SetEquipped(e, t = !1) {
    ((this.m_EquippedItem = e),
      (this.m_bEquippedLoaded = !0),
      t
        ? this.SetComitted()
        : (this.m_bUnsavedChanges = !!(
            (e &&
              (!this.m_CommittedEquippedItem ||
                this.m_CommittedEquippedItem.communityitemid !=
                  e.communityitemid ||
                this.m_CommittedEquippedItem.equipped_flags !=
                  this.m_EquipFlags)) ||
            (!e && this.m_CommittedEquippedItem)
          )));
  }
  SetEquippedFlags(e) {
    this.m_EquipFlags = e;
  }
  BIsUncomitted() {
    return this.m_bUnsavedChanges;
  }
  SetComitted() {
    ((this.m_bUnsavedChanges = !1),
      (this.m_CommittedEquippedItem = this.m_EquippedItem),
      this.m_CommittedEquippedItem &&
        (this.m_CommittedEquippedItem.equipped_flags = this.m_EquipFlags));
  }
  Revert() {
    ((this.m_EquippedItem = this.m_CommittedEquippedItem),
      (this.m_EquipFlags =
        this.m_EquippedItem && this.m_EquippedItem.equipped_flags),
      (this.m_bUnsavedChanges = !1));
  }
  async FillAppNames(e) {
    await this.m_parent.AppInfoStore.EnsureAppInfoForAppIDs(
      e.map((e) => e.appid),
    );
    for (let t of e)
      t.app_name = t.appid
        ? this.m_parent.AppInfoStore.GetAppInfo(t.appid).name
        : ``;
    return e;
  }
};
(A([d], W.prototype, `m_cItemsOwned`, void 0),
  A([d], W.prototype, `m_bUnsavedChanges`, void 0),
  A([d], W.prototype, `m_CommittedEquippedItem`, void 0),
  A([d], W.prototype, `m_EquippedItem`, void 0),
  A([d], W.prototype, `m_EquipFlags`, void 0),
  A([m], W.prototype, `SetEquipped`, null),
  A([m], W.prototype, `SetEquippedFlags`, null),
  A([m], W.prototype, `Revert`, null));
var G = class {
  m_strDisplayCountry = void 0;
  m_strDisplayState = void 0;
  m_strDisplayCity = void 0;
  m_strCountryCode = void 0;
  m_strStateCode = void 0;
  m_strCityCode = void 0;
  m_CountryCur;
  m_StateCur;
  m_rgCountryList;
  m_promiseLoadCountries;
  m_bStateSelectionAvailable = !1;
  m_bCitySelectionAvailable = !1;
  constructor(e, t, n, r, i, a) {
    (l(this),
      (this.m_strDisplayCountry = e),
      (this.m_strDisplayState = n),
      (this.m_strDisplayCity = i),
      (this.m_strCountryCode = t),
      (this.m_strStateCode = r),
      (this.m_strCityCode = a),
      this.m_strStateCode
        ? (this.m_bStateSelectionAvailable = !0)
        : this.m_strCountryCode && this.GetCountryList(),
      (this.m_bCitySelectionAvailable = !!this.m_strStateCode));
  }
  get Country() {
    return this.m_strDisplayCountry;
  }
  get CountryCode() {
    return this.m_strCountryCode;
  }
  SetCountry(e, t) {
    (e != this.m_strCountryCode &&
      ((this.m_strStateCode = ``),
      (this.m_strDisplayState = ``),
      (this.m_strCityCode = ``),
      (this.m_strDisplayCity = ``)),
      (this.m_strCountryCode = e),
      (this.m_strDisplayCountry = t),
      this.FindAndSetActiveCountry(),
      this.FindAndSetActiveState());
  }
  BIsStateSelectionAvailable() {
    return this.m_bStateSelectionAvailable;
  }
  get State() {
    return this.m_strDisplayState;
  }
  get StateCode() {
    return this.m_strStateCode;
  }
  SetState(e, t) {
    (e != this.m_strStateCode &&
      ((this.m_strCityCode = ``), (this.m_strDisplayCity = ``)),
      (this.m_strStateCode = e),
      (this.m_strDisplayState = t),
      this.FindAndSetActiveState());
  }
  BIsCitySelectionAvailable() {
    return this.m_bCitySelectionAvailable;
  }
  get City() {
    return this.m_strDisplayCity;
  }
  get CityCode() {
    return this.m_strCityCode;
  }
  SetCity(e, t) {
    ((this.m_strCityCode = e), (this.m_strDisplayCity = t));
  }
  async GetCountryList() {
    return this.m_rgCountryList
      ? this.m_rgCountryList
      : (this.m_promiseLoadCountries ||
          ((this.m_promiseLoadCountries = L.default
            .get(k.COMMUNITY_BASE_URL + `/actions/QueryLocations/`)
            .then((e) => e.data)),
          this.m_promiseLoadCountries.then(
            (e) => {
              ((this.m_rgCountryList = e),
                (this.m_promiseLoadCountries = null),
                this.FindAndSetActiveCountry());
            },
            () => {
              this.m_promiseLoadCountries = null;
            },
          )),
        this.m_promiseLoadCountries);
  }
  FindAndSetActiveCountry() {
    ((this.m_CountryCur =
      this.m_strCountryCode &&
      this.m_rgCountryList.find((e) => e.countrycode == this.m_strCountryCode)),
      (this.m_bStateSelectionAvailable =
        this.m_CountryCur && !!this.m_CountryCur.hasstates));
  }
  async GetStateList() {
    this.m_CountryCur || (await this.GetCountryList());
    let e = this.m_CountryCur;
    return !e || !e.hasstates
      ? []
      : e.states === void 0
        ? (e.stateloader ||
            ((e.stateloader = L.default
              .get(
                k.COMMUNITY_BASE_URL +
                  `/actions/QueryLocations/${e.countrycode}/`,
              )
              .then((e) => e.data)),
            e.stateloader.then(
              (t) => {
                ((e.states = t || []),
                  delete e.stateloader,
                  this.FindAndSetActiveState());
              },
              () => {
                delete e.stateloader;
              },
            )),
          e.stateloader)
        : e.states;
  }
  FindAndSetActiveState() {
    ((this.m_StateCur =
      this.m_CountryCur &&
      this.m_CountryCur.states &&
      this.m_CountryCur.states.find((e) => e.statecode == this.m_strStateCode)),
      (this.m_bCitySelectionAvailable = !!this.m_StateCur));
  }
  async GetCityList() {
    this.m_StateCur || (await this.GetStateList());
    let e = this.m_StateCur;
    return e
      ? e.cities === void 0
        ? (e.cityloader ||
            ((e.cityloader = L.default
              .get(
                k.COMMUNITY_BASE_URL +
                  `/actions/QueryLocations/${e.countrycode}/${e.statecode}`,
              )
              .then((e) => e.data)),
            e.cityloader.then(
              (t) => {
                ((e.cities = t || []), delete e.cityloader);
              },
              () => {
                delete e.cityloader;
              },
            )),
          e.cityloader)
        : e.cities
      : [];
  }
};
(A([d], G.prototype, `m_strDisplayCountry`, void 0),
  A([d], G.prototype, `m_strDisplayState`, void 0),
  A([d], G.prototype, `m_strDisplayCity`, void 0),
  A([d], G.prototype, `m_strCountryCode`, void 0),
  A([d], G.prototype, `m_strStateCode`, void 0),
  A([d], G.prototype, `m_strCityCode`, void 0),
  A([d], G.prototype, `m_bStateSelectionAvailable`, void 0),
  A([d], G.prototype, `m_bCitySelectionAvailable`, void 0),
  A([m], G.prototype, `SetCountry`, null),
  A([m], G.prototype, `SetState`, null),
  A([m], G.prototype, `SetCity`, null),
  A([m], G.prototype, `FindAndSetActiveCountry`, null),
  A([m], G.prototype, `FindAndSetActiveState`, null));
var Zn = class {
  m_ActiveTheme = void 0;
  m_ComittedActiveTheme;
  m_rgAvailableThemes;
  m_CMInterface;
  constructor(e, t, n) {
    (l(this),
      (this.m_CMInterface = e),
      (this.m_rgAvailableThemes = n.map((e) => ({
        ...e,
        theme_id: e.theme_id || `Default`,
        title: E(e.title),
      }))),
      t === void 0 || t.theme_id === ``
        ? this.SetActiveTheme(`Default`, !0)
        : ((this.m_ActiveTheme = t), (this.m_ComittedActiveTheme = t)));
  }
  get ActiveTheme() {
    return this.m_ActiveTheme;
  }
  get AvailableThemes() {
    return this.m_rgAvailableThemes;
  }
  SetActiveTheme(e, t = !1) {
    for (let n of this.m_rgAvailableThemes)
      if (e === n.theme_id) {
        ((this.m_ActiveTheme = n), t && (this.m_ComittedActiveTheme = n));
        break;
      }
  }
  BActiveThemeUncomitted() {
    return this.m_ActiveTheme.theme_id != this.m_ComittedActiveTheme.theme_id;
  }
  RevertActiveTheme() {
    this.m_ActiveTheme = this.m_ComittedActiveTheme;
  }
  async CommitActiveTheme() {
    let e = M.Init(tt);
    e.Body().set_theme_id(
      this.ActiveTheme.theme_id == `Default` ? `` : this.ActiveTheme.theme_id,
    );
    let t = await x.SetProfileTheme(
      this.m_CMInterface.GetServiceTransport(),
      e,
    );
    return (
      t.GetEResult() == 1 && (this.m_ComittedActiveTheme = this.ActiveTheme),
      t.GetEResult()
    );
  }
};
(A([d], Zn.prototype, `m_ActiveTheme`, void 0),
  A([m], Zn.prototype, `RevertActiveTheme`, null));
async function Qn(e, t) {
  let n;
  if (t instanceof FormData) n = t;
  else {
    n = new FormData();
    for (let e in t) n.append(e, t[e]);
  }
  (n.append(`type`, e), n.append(`sessionID`, j()), n.append(`json`, `1`));
  let r = `${R.ProfileURL}edit/`;
  try {
    let e = await L.default.post(r, n);
    return {
      eResult: e.data.success,
      strHTMLError: e.data.errmsg,
      strRedirectURL: e.data.redirect,
    };
  } catch {
    return {
      eResult: 35,
      strHTMLError: E(`#ConnectionTrouble_FailedToConnect`),
    };
  }
}
var $n = class {
  m_rgUserGroups;
  m_PrimaryGroup = void 0;
  m_CommittedPrimaryGroup;
  m_bLoaded = !1;
  m_promiseLoading;
  constructor(e) {
    (l(this),
      e &&
        (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup =
          new er(new Te(e.steamid), e.name, e.avatarHash)));
  }
  get PrimaryGroup() {
    return this.m_PrimaryGroup;
  }
  SetPrimaryGroup(e) {
    this.m_PrimaryGroup = e;
  }
  BGroupsLoaded() {
    return this.m_bLoaded;
  }
  BHasAnyGroups() {
    return this.m_rgUserGroups.length > 0;
  }
  GetUserGroups() {
    return (this.m_bLoaded || this.StartUserGroupLoad(), this.m_rgUserGroups);
  }
  async BWaitForUserGroups() {
    return (this.StartUserGroupLoad(), this.m_promiseLoading);
  }
  StartUserGroupLoad() {
    this.m_promiseLoading ||= this.LoadUserGroups();
  }
  async LoadUserGroups() {
    let e = await L.default.get(
      `${R.ProfileURL}ajaxgroupinvite?select_primary=1&json=1`,
    );
    return (
      r(() => {
        (e.data &&
          (this.m_rgUserGroups = e.data.map(
            (e) => new er(new Te(e.steamid), e.name, e.avatarHash),
          )),
          (this.m_bLoaded = !0));
      }),
      !!e.data
    );
  }
  BPrimaryGroupUncomitted() {
    return (
      (this.m_PrimaryGroup &&
        this.m_PrimaryGroup.GetSteamID().GetAccountID()) !=
      (this.m_CommittedPrimaryGroup &&
        this.m_CommittedPrimaryGroup.GetSteamID().GetAccountID())
    );
  }
  async CommitPrimaryGroup() {
    let e = await Qn(`favoriteclan`, {
      primary_group_steamid: this.m_PrimaryGroup
        .GetSteamID()
        .ConvertTo64BitString(),
    });
    return (
      e.eResult == 1 && (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup), e
    );
  }
  RevertPrimaryGroupChanges() {
    this.m_PrimaryGroup = this.m_CommittedPrimaryGroup;
  }
};
(A([d], $n.prototype, `m_PrimaryGroup`, void 0),
  A([d], $n.prototype, `m_bLoaded`, void 0),
  A([m], $n.prototype, `SetPrimaryGroup`, null),
  A([m], $n.prototype, `RevertPrimaryGroupChanges`, null));
var er = class {
    m_steamID;
    m_strName;
    m_strAvatarHash;
    constructor(e, t, n) {
      ((this.m_steamID = e), (this.m_strName = t), (this.m_strAvatarHash = n));
    }
    GetSteamID() {
      return this.m_steamID;
    }
    GetName() {
      return this.m_strName;
    }
    GetAvatarURL(e) {
      return pe(
        this.m_strAvatarHash || `0000000000000000000000000000000000000000`,
        e,
      );
    }
  },
  tr = class {
    m_Profile;
    m_ProfileBadges;
    m_ProfileItems;
    m_ProfileTheme;
    m_ProfilePrivacy;
    m_OGGAvatars = new Nn();
    m_AvatarHistory;
    m_EmoticonStore = new Ye();
    m_WebAPI;
    m_AppInfoStore;
    constructor(e, t, n) {
      ((this.m_Profile = new K(e)),
        (this.m_WebAPI = n),
        (this.m_AppInfoStore = new me()),
        this.m_AppInfoStore.Init(this.m_WebAPI),
        this.m_AppInfoStore.SetCacheStorage(new Ve()),
        (this.m_ProfileBadges = new zn(this.m_WebAPI, this.m_AppInfoStore, t)),
        (this.m_ProfileItems = new U(
          this.m_WebAPI,
          this.m_AppInfoStore,
          e.rgGoldenProfileData,
        )),
        (this.m_ProfileTheme = new Zn(
          this.m_WebAPI,
          e.ActiveTheme,
          e.rgAvailableThemes,
        )),
        (this.m_ProfilePrivacy = new B(
          e.Privacy.PrivacySettings,
          e.Privacy.eCommentPermission,
        )),
        (this.m_AvatarHistory = new Mn(this.m_WebAPI)),
        this.m_ProfileItems.AddOnAvatarEquipmentChangedCallback(() => {
          (this.m_Profile.MiniProfileData.Reload(),
            this.m_AvatarHistory.RefreshAvatarHistory());
        }));
    }
    get ServiceTransport() {
      return this.m_WebAPI.GetServiceTransport();
    }
    get Profile() {
      return this.m_Profile;
    }
    get ProfileBadges() {
      return this.m_ProfileBadges;
    }
    get ProfileItems() {
      return this.m_ProfileItems;
    }
    get ProfileTheme() {
      return this.m_ProfileTheme;
    }
    get ProfilePrivacy() {
      return this.m_ProfilePrivacy;
    }
    get OGGAvatarStore() {
      return this.m_OGGAvatars;
    }
    get AvatarHistory() {
      return this.m_AvatarHistory;
    }
    get EmoticonStore() {
      return this.m_EmoticonStore;
    }
    get MiniProfileOverrideData() {
      return { favorite_badge: this.m_ProfileBadges.GetFavoriteBadgePreview() };
    }
  },
  K = class {
    m_strPersonaName = void 0;
    m_strCommittedPersonaName = void 0;
    m_strFilteredPersonaName;
    m_strCommittedFilteredPersonaName;
    m_strCustomURL = void 0;
    m_strComittedCustomURL;
    m_strRealName = void 0;
    m_strComittedRealName;
    m_strFilteredRealName;
    m_strCommittedFilteredRealName;
    m_strSummary = void 0;
    m_strComittedSummary;
    m_strAvatarHash = void 0;
    m_strCommittedAvatarHash = void 0;
    m_persona;
    m_MiniProfileData;
    m_Location;
    m_GroupList;
    m_rtPersonaNameBannedUntil;
    m_rtProfileSummaryBannedUntil;
    m_rtAvatarBannedUntil;
    m_Preferences = void 0;
    constructor(e) {
      (l(this),
        (this.m_strPersonaName = e.strPersonaName),
        (this.m_strFilteredPersonaName = e.strFilteredPersonaName),
        (this.m_strCustomURL = e.strCustomURL),
        (this.m_strRealName = e.strRealName),
        (this.m_strFilteredRealName = e.strFilteredRealName),
        (this.m_strSummary = e.strSummary),
        (this.m_Preferences = e.ProfilePreferences),
        this.SetBasicInfoChangesComitted(),
        (this.m_strCommittedAvatarHash = this.m_strAvatarHash =
          e.strAvatarHash));
      let {
        LocationData: {
          locCountry: t,
          locCountryCode: n,
          locState: r,
          locStateCode: i,
          locCity: a,
          locCityCode: o,
        },
      } = e;
      ((this.m_Location = new G(t, n, r, i, a, o)),
        (this.m_GroupList = new $n(e.PrimaryGroup)));
      let s = new Te(O.steamid);
      ((this.m_MiniProfileData = new Cn(s.GetAccountID())),
        (this.m_persona = new he(s)),
        u(() => {
          this.BuildPersonaStateObject();
        }),
        (this.m_rtPersonaNameBannedUntil =
          e.rtPersonaNameBannedUntil || void 0),
        (this.m_rtProfileSummaryBannedUntil =
          e.rtProfileSummaryBannedUntil || void 0),
        (this.m_rtAvatarBannedUntil = e.rtAvatarBannedUntil || void 0));
    }
    RevertBasicInfoChanges() {
      ((this.m_strPersonaName = this.m_strCommittedPersonaName),
        (this.m_strFilteredPersonaName =
          this.m_strCommittedFilteredPersonaName),
        (this.m_strCustomURL = this.m_strComittedCustomURL),
        (this.m_strRealName = this.m_strComittedRealName),
        (this.m_strFilteredRealName = this.m_strCommittedFilteredRealName),
        (this.m_strSummary = this.m_strComittedSummary));
    }
    SetBasicInfoChangesComitted() {
      ((this.m_strCommittedPersonaName = this.m_strPersonaName),
        (this.m_strCommittedFilteredPersonaName =
          this.m_strFilteredPersonaName),
        (this.m_strComittedCustomURL = this.m_strCustomURL),
        (this.m_strComittedRealName = this.m_strRealName),
        (this.m_strCommittedFilteredRealName = this.m_strFilteredRealName),
        (this.m_strComittedSummary = this.m_strSummary));
    }
    NotifyRNMobileAppStateChanged() {
      let e = Reflect.get(window, `ReactNativeWebView`);
      if (e?.postMessage) {
        let t = { event_name: `personastatechanged`, steamid: O.steamid };
        e.postMessage(JSON.stringify(t));
      }
    }
    GetPersonaName() {
      return this.m_strPersonaName;
    }
    GetComittedPersonaName() {
      return this.m_strCommittedPersonaName;
    }
    SetPersonaName(e) {
      ((this.m_strPersonaName = e), (this.m_strFilteredPersonaName = e));
    }
    HasFilteredPersonaName() {
      return this.m_strPersonaName !== this.m_strFilteredPersonaName;
    }
    GetRealName() {
      return this.m_strRealName;
    }
    SetRealName(e) {
      ((this.m_strRealName = e), (this.m_strFilteredRealName = e));
    }
    HasFilteredRealName() {
      return this.m_strRealName !== this.m_strFilteredRealName;
    }
    GetCustomURL() {
      return this.m_strCustomURL;
    }
    SetCustomURL(e) {
      this.m_strCustomURL = e;
    }
    GetConstructedURL() {
      return this.m_strCustomURL
        ? `${k.COMMUNITY_BASE_URL}id/${this.m_strCustomURL}/`
        : `${k.COMMUNITY_BASE_URL}profiles/${O.steamid}/`;
    }
    GetAvatarHash() {
      return this.m_strAvatarHash;
    }
    GetCommittedAvatarHash() {
      return this.m_strCommittedAvatarHash;
    }
    GetSummary() {
      return this.m_strSummary;
    }
    SetSummary(e) {
      this.m_strSummary = e;
    }
    GetPreferences() {
      return this.m_Preferences;
    }
    SetPreferences(e) {
      this.m_Preferences = e;
    }
    GetPrimaryGroupSteamID() {
      return (
        this.m_GroupList.PrimaryGroup &&
        this.m_GroupList.PrimaryGroup.GetSteamID()
      );
    }
    get GroupList() {
      return this.m_GroupList;
    }
    get Location() {
      return this.m_Location;
    }
    get MiniProfileData() {
      return (
        this.m_MiniProfileData.EnsureCommunityDataLoaded(),
        this.m_MiniProfileData
      );
    }
    get PersonaState() {
      return this.m_persona;
    }
    BuildPersonaStateObject() {
      ((this.m_persona.m_strPlayerName = this.m_strPersonaName),
        (this.m_persona.m_strAvatarHash = this.m_strAvatarHash),
        (this.m_persona.m_ePersonaState = 1));
    }
    async UploadAvatar(e) {
      let t = new FormData();
      (t.append(`avatar`, e),
        t.append(`type`, `player_avatar_image`),
        t.append(`sId`, O.steamid),
        t.append(`sessionid`, j()),
        t.append(`doSub`, `1`),
        t.append(`json`, `1`));
      let n = !1,
        r = ``;
      try {
        let e = await L.default.post(
          `${k.COMMUNITY_BASE_URL}actions/FileUploader/`,
          t,
        );
        e.data && e.data.success
          ? ((n = !0), this.SetAvatarHash(e.data.hash, !0))
          : (r =
              (e.data && e.data.message) ||
              E(`#Chat_Settings_Error_ServerError`));
      } catch (e) {
        r =
          (e.response && e.response.data.message) ||
          E(`#Chat_Settings_Error_ServerError`);
      }
      return { bSuccess: n, strError: r };
    }
    SetAvatarHash(e, t = !1) {
      ((this.m_strAvatarHash = e), t && this.CommitAvatarHash());
    }
    BHasUncomittedAvatarChanges() {
      return this.m_strAvatarHash != this.m_strCommittedAvatarHash;
    }
    CommitAvatarHash() {
      this.m_strCommittedAvatarHash = this.m_strAvatarHash;
    }
    RevertToComittedAvatarHash() {
      this.m_strAvatarHash = this.m_strCommittedAvatarHash;
    }
    BIsPersonaNameChangeOnCooldown() {
      return !!this.m_rtPersonaNameBannedUntil;
    }
    GetPersonaNameCooldownEndRTime() {
      return this.m_rtPersonaNameBannedUntil;
    }
    BIsProfileSummaryChangeOnCooldown() {
      return !!this.m_rtProfileSummaryBannedUntil;
    }
    GetProfileSummaryCooldownEndRTime() {
      return this.m_rtProfileSummaryBannedUntil;
    }
    BIsAvatarChangeOnCooldown() {
      return !!this.m_rtAvatarBannedUntil;
    }
    GetAvatarChangeCooldownEndRTime() {
      return this.m_rtAvatarBannedUntil;
    }
    static k_strPersonaNameCooldownSupportURL = `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`;
    static k_strProfileSummaryCooldownSupportURL = `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`;
    static k_strAvatarCooldownSupportURL = `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`;
    static k_strNameFilteredSupportURL = `https://help.steampowered.com/wizard/HelpWithSteamIssue/?issueid=415`;
  };
(A([d], K.prototype, `m_strPersonaName`, void 0),
  A([d], K.prototype, `m_strCommittedPersonaName`, void 0),
  A([d], K.prototype, `m_strCustomURL`, void 0),
  A([d], K.prototype, `m_strRealName`, void 0),
  A([d], K.prototype, `m_strSummary`, void 0),
  A([d], K.prototype, `m_strAvatarHash`, void 0),
  A([d], K.prototype, `m_strCommittedAvatarHash`, void 0),
  A([d], K.prototype, `m_Preferences`, void 0),
  A([m], K.prototype, `RevertBasicInfoChanges`, null),
  A([m], K.prototype, `SetAvatarHash`, null),
  A([m], K.prototype, `RevertToComittedAvatarHash`, null));
var nr = `MgL-7khVeG4-`,
  rr = `zgXBEH3YPKg-`,
  ir = `BKFlxpkJD9Y-`,
  ar = `E2GZhqQmQ7g-`,
  or = `Go2YjzqqaWI-`,
  sr = `xAkjeixxh-c-`,
  cr = `-TKxu7swhb0-`,
  lr = `_7HNDc2I39bQ-`,
  ur = `_8DA8CD7jFaw-`,
  dr = `PXySEFmgS70-`,
  fr = `z11dQ2xGD5Y-`,
  pr = `owF-UJEtkRg-`,
  mr = `hR8R-S2EKZg-`,
  hr = `mK7xNpPSbv4-`,
  gr = `Ds7fxFhYqb0-`,
  _r = `vcw-WFNW6A0-`,
  vr = `fMGkOTaVXBM-`,
  yr = `fqoWnxDgsEo-`,
  br = `iy0RD2xatU0-`,
  xr = `WWhf4MDzOEc-`,
  Sr = `c-pKPhyHDvg-`,
  Cr = `q9Xolii2Wsc-`,
  wr = `gt-96Wh0foQ-`,
  Tr = `lUi7liv2ag8-`,
  Er = `UEFI3rDhOkY-`,
  Dr = `JV3UMKtCqNA-`,
  Or = `_6ova2adpglg-`,
  kr = `_0wD-xgu1s5M-`,
  Ar = `dTgIyft-Wjo-`,
  jr = ({ title: e, className: t, children: n }) =>
    (0, I.jsxs)(`div`, {
      className: C(wr, t),
      children: [
        (0, I.jsx)(`div`, { className: Tr, children: e }),
        (0, I.jsx)(`div`, {
          className: Er,
          children: (0, I.jsx)(w, { children: n }),
        }),
      ],
    }),
  q = ({ onSave: e, onCancel: t, disabled: n }) =>
    (0, I.jsxs)(P, {
      className: Cr,
      "flow-children": `row-reverse`,
      children: [
        (0, I.jsx)(at, {
          onClick: e,
          disabled: n,
          children: E(`#Button_Save`),
        }),
        (0, I.jsx)(Be, { onClick: t, children: E(`#Button_Cancel`) }),
      ],
    });
function Mr(e) {
  return E(e).replace(/%s/g, ``);
}
var J = class extends F.Component {
  state = { activeItem: void 0, bSaving: !1 };
  static getDerivedStateFromProps(e, t) {
    return {
      activeItem: t.activeItem === void 0 ? e.ActiveItem : t.activeItem,
    };
  }
  async CommitChanges() {
    (this.setState({ bSaving: !0 }),
      await this.props.fnCommitChanges(this.state.activeItem),
      this.setState({ bSaving: !1 }));
  }
  async RevertChanges() {
    (this.setState({ activeItem: this.props.ActiveItem }),
      this.props.fnRevertChanges());
  }
  OnItemSelected(e) {
    this.setState({ activeItem: e });
  }
  render() {
    let {
        strDialogTitle: e,
        ActiveItem: t,
        className: n,
        fnRenderPreview: r,
        ...i
      } = this.props,
      { activeItem: a, bSaving: o } = this.state;
    return (0, I.jsxs)(nt, {
      className: C(br, n),
      children: [
        (0, I.jsx)(g, {
          when: !i.fnIsSameItem(a, this.props.ActiveItem),
          message: E(`#Profile_Edit_UnsavedChangesWarning`),
        }),
        (0, I.jsxs)(P, {
          className: xr,
          "flow-children": `column`,
          children: [
            (0, I.jsx)(`div`, {
              className: void 0,
              children: (0, I.jsx)(w, { children: r(a) }),
            }),
            e && (0, I.jsx)(N, { children: e }),
            (0, I.jsx)(`div`, {
              className: Sr,
              children: (0, I.jsx)(w, {
                children: (0, I.jsx)(Pr, {
                  ...i,
                  onItemSelected: this.OnItemSelected,
                  activeItem: a,
                }),
              }),
            }),
            (0, I.jsx)(q, {
              onSave: this.CommitChanges,
              onCancel: this.RevertChanges,
              disabled: o,
            }),
          ],
        }),
      ],
    });
  }
};
(A([S], J.prototype, `CommitChanges`, null),
  A([S], J.prototype, `RevertChanges`, null),
  A([S], J.prototype, `OnItemSelected`, null));
function Nr(e) {
  return e ? e.toLocaleLowerCase().replace(/\W/g, ``) : ``;
}
var Pr = class extends F.Component {
  state = { strSearch: `` };
  m_rgSearchableItems = null;
  m_fnSearchFieldsDisposer;
  m_refRootDiv = F.createRef();
  async componentDidMount() {
    if (this.m_rgSearchableItems === null) {
      let { getItems: e, getSearchFields: t, onItemSelected: n } = this.props,
        r = await e();
      this.m_fnSearchFieldsDisposer = u(() => {
        ((this.m_rgSearchableItems = r.map((e, r) => ({
          key: `` + r,
          normalized_search_strings: t && t(e).map(Nr),
          OnSelected: () => {
            n(e);
          },
          item: e,
        }))),
          this.props.RenderDefaultComponent &&
            this.m_rgSearchableItems.unshift({
              key: `default`,
              normalized_search_strings: [``],
              OnSelected: () => {
                n(null);
              },
              item: null,
            }),
          this.forceUpdate());
      });
    }
  }
  componentWillUnmount() {
    this.m_fnSearchFieldsDisposer && this.m_fnSearchFieldsDisposer();
  }
  BuildFilterPredicate() {
    let { strSearch: e } = this.state;
    if (e && e.trim().length) {
      let t = e
        .toLocaleLowerCase()
        .split(/\W/)
        .filter((e) => e.trim().length > 0);
      return (e) => {
        for (let n of t) {
          let t = !1;
          for (let r of e.normalized_search_strings)
            if (r.includes(n)) {
              t = !0;
              break;
            }
          if (!t) return !1;
        }
        return !0;
      };
    }
    return null;
  }
  OnSearchChange(e) {
    let t = e.currentTarget.value;
    this.setState((e) => {
      let n = { strSearch: t };
      if (!e.strSearch && t) {
        let e = this.m_refRootDiv.current.getBoundingClientRect();
        ((n.nHeight = e.height), (n.nWidth = e.width));
      } else e.strSearch && !t && ((n.nHeight = null), (n.nWidth = null));
      return n;
    });
  }
  render() {
    let {
        ItemComponent: e,
        RenderDefaultComponent: t,
        getSearchFields: n,
        activeItem: r,
        fnIsSameItem: i,
        classNameItemPicker: a,
      } = this.props,
      { strSearch: o, nWidth: s, nHeight: c } = this.state;
    if (this.m_rgSearchableItems === null) return null;
    let l = this.BuildFilterPredicate(),
      u = {};
    s && c && (u = { width: s + `px`, height: c + `px` });
    let d =
      i ||
      function (e, t) {
        return e == t;
      };
    return (0, I.jsxs)(P, {
      className: C(_r, a),
      ref: this.m_refRootDiv,
      style: u,
      "flow-children": `column`,
      children: [
        n &&
          (0, I.jsx)(`div`, {
            className: void 0,
            children: (0, I.jsx)(Ee, {
              value: o,
              label: E(`#ItemPicker_Filter`),
              onChange: this.OnSearchChange,
            }),
          }),
        (0, I.jsx)(`div`, {
          className: vr,
          children: (0, I.jsx)(P, {
            className: yr,
            "flow-children": `grid`,
            children: this.m_rgSearchableItems.map((n) =>
              l && !l(n)
                ? null
                : n.item
                  ? (0, I.jsx)(
                      w,
                      {
                        children: (0, I.jsx)(e, {
                          Item: n.item,
                          onSelected: n.OnSelected,
                          active: r && d(n.item, r),
                        }),
                      },
                      n.key,
                    )
                  : (0, I.jsx)(
                      w,
                      { children: t({ onSelected: n.OnSelected, active: !r }) },
                      n.key,
                    ),
            ),
          }),
        }),
      ],
    });
  }
};
A([S], Pr.prototype, `OnSearchChange`, null);
var Y = ({ strHTMLError: e }) =>
    e
      ? (0, I.jsxs)(`div`, {
          className: Dr,
          children: [
            (0, I.jsxs)(`b`, { children: [E(`#Error_Generic_Label`), `\xA0`] }),
            (0, I.jsx)(`span`, {
              className: void 0,
              dangerouslySetInnerHTML: { __html: e },
            }),
          ],
        })
      : null,
  Fr = ({
    strCooldownLabel: e,
    rtCooldownEnd: t,
    strCooldownDescHTML: n,
    children: r,
  }) => {
    if (!t) return (0, I.jsx)(I.Fragment, { children: r });
    let i = Math.max(0, t - Date.now() / 1e3);
    return (0, I.jsxs)(`div`, {
      className: Or,
      children: [
        (0, I.jsxs)(`div`, {
          className: Dr,
          children: [
            (0, I.jsxs)(`div`, {
              className: kr,
              children: [
                e,
                ` `,
                lt(i, { eSuffix: qe.None, bForceSingleUnits: !0 }),
                ` `,
              ],
            }),
            (0, I.jsx)(`div`, { dangerouslySetInnerHTML: { __html: n } }),
          ],
        }),
        (0, I.jsx)(`div`, { className: Ar, children: r }),
      ],
    });
  };
function Ir(e) {
  let { image: t, onSelected: n, className: r } = e,
    [i, a] = F.useState(!1),
    [o, s] = F.useState(!1);
  return (0, I.jsx)(P, {
    className: r,
    onGamepadFocus: () => s(!0),
    onGamepadBlur: () => s(!1),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    onActivate: () => n(t),
    children: (0, I.jsx)(`img`, { src: qn(t), loading: `lazy` }),
  });
}
var X = class extends F.Component {
  state = { bReady: !1 };
  m_rgAvatars;
  async componentDidMount() {
    let e;
    (([this.m_rgAvatars, e] = await Promise.all([
      this.props.ProfileItems.GetOwnedAvatars(),
      this.props.OGGAvatars.BWaitForLoad(),
    ])),
      this.setState({ bReady: !0 }));
  }
  SelectAnimatedAvatar(e) {
    (this.props.Profile.RevertToComittedAvatarHash(),
      this.props.ProfileItems.SetEquippedAvatar(e),
      this.props.fnOnCollapse());
  }
  SelectOGGAvatar(e) {
    (this.props.Profile.SetAvatarHash(e),
      this.props.ProfileItems.SetEquippedAvatar(null),
      this.props.fnOnCollapse());
  }
  SelectPreviousAvatar(e) {
    (this.props.Profile.SetAvatarHash(e),
      this.props.ProfileItems.SetEquippedAvatar(null),
      this.props.fnOnCollapse());
  }
  GetTopAvatars(e = 4) {
    let t;
    if (((t = this.m_rgAvatars.slice(0, e)), t.length < e)) {
      let n = this.props.AvatarHistory.GetAvatarHistory();
      for (let r = 0; r < n.length && (t.push(n[r]), !(t.length >= e)); ++r);
    }
    if (t.length < e) {
      let n = Pn(this.props.OGGAvatars);
      for (
        let r = n.next();
        r.value && (t.push(r.value), !(t.length >= e));
        r = n.next()
      );
    }
    return t;
  }
  render() {
    if (!this.state.bReady) return !1;
    let {
      bExpanded: e,
      fnOnExpand: t,
      OGGAvatars: n,
      AvatarHistory: r,
      fnOnCollapse: i,
    } = this.props;
    if (e)
      return (0, I.jsxs)(`div`, {
        className: ir,
        children: [
          (0, I.jsx)(Rr, { children: E(`#Profile_Edit_Avatar_YourAvatars`) }),
          (0, I.jsx)(Vr, {
            rgAnimatedAvatars: this.m_rgAvatars,
            OGGAvatars: n,
            AvatarHistory: r,
            onSelectAnimatedAvatar: this.SelectAnimatedAvatar,
            onSelectOGGAvatar: this.SelectOGGAvatar,
            onSelectPreviousAvatar: this.SelectPreviousAvatar,
          }),
        ],
      });
    {
      let e = this.GetTopAvatars();
      return (0, I.jsxs)(`div`, {
        className: ir,
        children: [
          (0, I.jsx)(Rr, { children: E(`#Profile_Edit_Avatar_YourAvatars`) }),
          (0, I.jsx)(`div`, {
            className: ar,
            children: (0, I.jsx)(P, {
              className: sr,
              "flow-children": `row`,
              children: e.map((e) =>
                `communityitemid` in e
                  ? (0, I.jsxs)(
                      F.Fragment,
                      {
                        children: [
                          (0, I.jsx)(zr, {
                            avatar: e,
                            onSelected: this.SelectAnimatedAvatar,
                            large: !0,
                          }),
                          (0, I.jsx)(`div`, { className: cr }),
                        ],
                      },
                      e.communityitemid,
                    )
                  : `timestamp` in e
                    ? (0, I.jsxs)(
                        F.Fragment,
                        {
                          children: [
                            (0, I.jsx)(Br, {
                              hash: e.avatar_hash,
                              onSelected: this.SelectPreviousAvatar,
                              large: !0,
                            }),
                            (0, I.jsx)(`div`, { className: cr }),
                          ],
                        },
                        e.avatar_hash,
                      )
                    : (0, I.jsxs)(
                        F.Fragment,
                        {
                          children: [
                            (0, I.jsx)(Br, {
                              hash: e.avatar_hash,
                              onSelected: this.SelectOGGAvatar,
                              large: !0,
                            }),
                            (0, I.jsx)(`div`, { className: cr }),
                          ],
                        },
                        e.avatar_hash,
                      ),
              ),
            }),
          }),
          (0, I.jsx)(`div`, {
            className: or,
            children: (0, I.jsx)(Be, {
              onClick: t,
              children: E(`#Profile_Edit_Avatar_SeeAll`),
            }),
          }),
        ],
      });
    }
  }
};
(A([S], X.prototype, `SelectAnimatedAvatar`, null),
  A([S], X.prototype, `SelectOGGAvatar`, null),
  A([S], X.prototype, `SelectPreviousAvatar`, null),
  (X = A([i], X)));
var Lr = X,
  Rr = ({ children: e }) =>
    (0, I.jsx)(`div`, {
      className: nr,
      children: (0, I.jsx)(`div`, { className: rr, children: e }),
    });
function zr(e) {
  let { avatar: t, onSelected: n, large: r } = e;
  return (0, I.jsx)(Ir, {
    image: t,
    onSelected: n,
    className: C(lr, void 0, r && `te-1DEm8Vm0-`),
  });
}
var Br = ({ hash: e, onSelected: t, large: n }) =>
    (0, I.jsx)(P, {
      className: C(lr, void 0, n && `te-1DEm8Vm0-`),
      onClick: () => t(e),
      onActivate: () => t(e),
      children: (0, I.jsx)(`img`, {
        src: pe(e, n ? `full` : `medium`),
        loading: `lazy`,
      }),
    }),
  Vr = i(
    ({
      rgAnimatedAvatars: e,
      OGGAvatars: t,
      AvatarHistory: n,
      onSelectAnimatedAvatar: r,
      onSelectOGGAvatar: i,
      onSelectPreviousAvatar: a,
    }) => {
      let o = n.GetAvatarHistory(),
        s = [...t.GetRecentGameAvatars(), ...t.GetOwnedGameAvatars()];
      return (0, I.jsxs)(P, {
        "flow-children": `column`,
        children: [
          (0, I.jsx)(Hr, { rgAnimatedAvatars: e, onSelected: r }),
          (0, I.jsx)(Ur, { rgAvatars: o, onSelected: a }),
          (0, I.jsx)(Wr, {
            OGGAvatars: t,
            rgAvatars: s,
            onSelected: i,
            title: E(`#Profile_Edit_YourGameAvatars`),
          }),
          s.length < 20 &&
            (0, I.jsx)(Wr, {
              OGGAvatars: t,
              rgAvatars: t.GetOtherGameAvatars(),
              onSelected: i,
              title: E(`#Profile_Edit_MoreGameAvatars`),
            }),
        ],
      });
    },
  ),
  Hr = ({ rgAnimatedAvatars: e, onSelected: t }) =>
    e.length
      ? (0, I.jsxs)(`div`, {
          className: C(pr, hr),
          children: [
            (0, I.jsx)(`div`, {
              className: mr,
              children: E(`#Profile_Edit_PurchasedFromRewardsStore`),
            }),
            (0, I.jsx)(P, {
              className: gr,
              "flow-children": `grid`,
              children: e.map((e) =>
                (0, I.jsx)(zr, { avatar: e, onSelected: t }, e.communityitemid),
              ),
            }),
          ],
        })
      : null,
  Ur = i(({ rgAvatars: e, onSelected: t }) =>
    e.length
      ? (0, I.jsxs)(`div`, {
          className: C(pr, hr),
          children: [
            (0, I.jsx)(`div`, {
              className: mr,
              children: E(`#Profile_Edit_YourPreviousAvatars`),
            }),
            (0, I.jsx)(`div`, {
              className: gr,
              children: e.map((e) =>
                (0, I.jsx)(
                  Br,
                  { hash: e.avatar_hash, onSelected: t },
                  e.avatar_hash,
                ),
              ),
            }),
          ],
        })
      : null,
  );
function Wr(e) {
  let { rgAvatars: t, OGGAvatars: n, onSelected: r, title: i } = e;
  return t.length
    ? (0, I.jsxs)(`div`, {
        className: C(pr, hr),
        children: [
          (0, I.jsx)(`div`, { className: mr, children: i }),
          t.map((e) =>
            (0, I.jsx)(Gr, { OGGAvatars: n, game: e, onSelected: r }, e.appid),
          ),
        ],
      })
    : null;
}
function Gr(e) {
  let { game: t, onSelected: n, OGGAvatars: r } = e,
    [i, a] = F.useState(!1),
    { isLoading: o, data: s } = Kr(r, t.appid, i),
    c;
  c =
    i && s
      ? s
      : t.avatar_count == t.avatars.length
        ? t.avatars
        : t.avatars.slice(0, 5);
  let l = t.avatar_count - c.length;
  return (0, I.jsxs)(`div`, {
    className: pr,
    children: [
      (0, I.jsx)(`div`, { className: mr, children: t.name }),
      (0, I.jsxs)(P, {
        className: gr,
        "flow-children": `grid`,
        children: [
          c.map((e) =>
            (0, I.jsx)(
              Br,
              { hash: e.avatar_hash, onSelected: n },
              e.avatar_hash,
            ),
          ),
          (!i || o) &&
            l > 0 &&
            (0, I.jsxs)(Be, {
              type: `button`,
              className: C(`_7HNDc2I39bQ-`, `v3-XCudXMsM-`, void 0),
              disabled: o,
              onClick: o ? void 0 : () => a(!0),
              children: [`+`, xe(l)],
            }),
        ],
      }),
    ],
  });
}
function Kr(e, t, n) {
  return c({
    queryKey: [`OGGAvatars`, t],
    queryFn: async () => {
      let n = await (
        await fetch(`${et.COMMUNITY_BASE_URL}actions/GameAvatarsForGame/${t}`)
      ).json();
      return (e.UpdateAvatarsForGame(t, n), n);
    },
    enabled: n,
  });
}
var qr = class extends F.Component {
  state = { bReady: !1 };
  m_rgFrames;
  async componentDidMount() {
    ((this.m_rgFrames = await this.props.ProfileItems.GetOwnedAvatarFrames()),
      this.setState({ bReady: !0 }));
  }
  SelectFrame(e) {
    (this.props.ProfileItems.SetEquippedAvatarFrame(e),
      this.props.fnOnCollapse());
  }
  render() {
    if (!this.state.bReady) return !1;
    let {
      bExpanded: e,
      ProfileItems: t,
      fnOnExpand: n,
      fnOnCollapse: r,
    } = this.props;
    if (e)
      return (0, I.jsxs)(`div`, {
        className: ir,
        children: [
          (0, I.jsx)(Rr, { children: E(`#Profile_Edit_Avatar_YourFrames`) }),
          (0, I.jsx)(w, {
            children: (0, I.jsx)(Xr, {
              rgFrames: this.m_rgFrames,
              ProfileItems: t,
              onSelected: this.SelectFrame,
            }),
          }),
        ],
      });
    {
      let e = this.m_rgFrames.slice(0, 2),
        r = this.m_rgFrames.length > 2;
      return (0, I.jsxs)(P, {
        className: ir,
        "flow-children": `column`,
        children: [
          (0, I.jsx)(Rr, { children: E(`#Profile_Edit_Avatar_YourFrames`) }),
          (0, I.jsx)(`div`, {
            className: ar,
            children: (0, I.jsxs)(P, {
              className: C(sr, void 0),
              "flow-children": `row`,
              children: [
                (0, I.jsx)(Yr, {
                  onSelected: this.SelectFrame,
                  large: !0,
                  ProfileItems: t,
                }),
                (0, I.jsx)(`div`, { className: cr }),
                (0, I.jsx)(w, {
                  children: e.map((e) =>
                    (0, I.jsxs)(
                      F.Fragment,
                      {
                        children: [
                          (0, I.jsx)(Jr, {
                            frame: e,
                            onSelected: this.SelectFrame,
                            large: !0,
                          }),
                          (0, I.jsx)(`div`, { className: cr }),
                        ],
                      },
                      e.communityitemid,
                    ),
                  ),
                }),
              ],
            }),
          }),
          r &&
            (0, I.jsx)(`div`, {
              className: `Go2YjzqqaWI-`,
              children: (0, I.jsx)(Be, {
                onClick: n,
                children: E(`#Profile_Edit_Avatar_SeeAll`),
              }),
            }),
        ],
      });
    }
  }
};
A([S], qr.prototype, `SelectFrame`, null);
function Jr(e) {
  let { frame: t, onSelected: n, large: r } = e;
  return (0, I.jsx)(Ir, {
    image: t,
    onSelected: n,
    className: C(ur, r && `te-1DEm8Vm0-`),
  });
}
var Yr = i(({ onSelected: e, ProfileItems: t, large: n }) => {
    let r = t.GetProfileModifierAvatarFrameURL();
    return r
      ? (0, I.jsx)(P, {
          className: C(ur, n && `te-1DEm8Vm0-`),
          onActivate: () => e(null),
          children: (0, I.jsx)(`img`, { src: r }),
        })
      : (0, I.jsx)(P, {
          className: C(ur, n && `te-1DEm8Vm0-`, void 0),
          onActivate: () => e(null),
          children: (0, I.jsx)(`div`, {
            className: dr,
            children: (0, I.jsx)(`div`, { className: fr }),
          }),
        });
  }),
  Xr = ({ rgFrames: e, ProfileItems: t, onSelected: n }) =>
    (0, I.jsxs)(`div`, {
      className: C(pr, hr),
      children: [
        (0, I.jsx)(`div`, {
          className: mr,
          children: E(`#Profile_Edit_PurchasedFromRewardsStore`),
        }),
        (0, I.jsxs)(P, {
          className: gr,
          "flow-children": `grid`,
          children: [
            (0, I.jsx)(Yr, { onSelected: n, ProfileItems: t }),
            e.map((e) =>
              (0, I.jsx)(Jr, { frame: e, onSelected: n }, e.communityitemid),
            ),
          ],
        }),
      ],
    }),
  Zr = F.lazy(() =>
    He(
      () => import(`./chunk~69c47c6f43.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    ),
  ),
  Qr = class extends F.Component {
    render() {
      return (0, I.jsx)(Z, { ...this.props });
    }
  };
Qr = A([i], Qr);
var $r = Qr,
  ei = class extends F.Component {
    m_disposer;
    componentDidMount() {
      (document.querySelector(`.profile_small_header_avatar`).classList.add(Ot),
        (this.m_disposer = u(() => {
          let { Profile: e, ProfileItems: t } = this.props,
            n = ni(
              e.GetCommittedAvatarHash(),
              t.GetCommittedEquippedAvatar(),
              `small`,
              { disableAnimation: !0 },
            );
          document
            .querySelectorAll(`.user_avatar > img`)
            .forEach((e) => (e.src = n));
        })));
    }
    componentWillUnmount() {
      (document
        .querySelector(`.profile_small_header_avatar`)
        .classList.remove(Ot),
        this.m_disposer());
    }
    render() {
      let { Profile: e, ProfileItems: t } = this.props;
      return ht.createPortal(
        (0, I.jsx)(oi, { Profile: e, ProfileItems: t }),
        document.querySelector(`.profile_small_header_avatar`),
      );
    }
  },
  Z = class extends F.Component {
    state = {
      uploadImage: null,
      strUploadError: ``,
      bAvatarCollectionExpanded: !1,
      bFrameCollectionExpanded: !1,
      bSaving: !1,
      bHTMLError: !1,
    };
    cropRef = F.createRef();
    OnUploadSelected(e) {
      this.setState({
        uploadImage: e,
        bAvatarCollectionExpanded: !1,
        bFrameCollectionExpanded: !1,
      });
    }
    OnShowAllAvatarsClicked() {
      this.setState({
        bAvatarCollectionExpanded: !0,
        bFrameCollectionExpanded: !1,
      });
    }
    OnShowAllFramesClicked() {
      this.setState({
        bAvatarCollectionExpanded: !1,
        bFrameCollectionExpanded: !0,
      });
    }
    Reset() {
      ((this.cropRef = F.createRef()),
        this.setState({
          uploadImage: null,
          strUploadError: ``,
          bAvatarCollectionExpanded: !1,
          bFrameCollectionExpanded: !1,
          bHTMLError: !1,
        }));
    }
    RevertChanges() {
      (this.props.ProfileItems.RevertAvatarChanges(),
        this.props.Profile.RevertToComittedAvatarHash(),
        this.Reset());
    }
    async OnSave() {
      (this.setState({ bSaving: !0 }),
        this.state.uploadImage
          ? await this.SaveUpload()
          : await this.CommitChanges(),
        this.setState({ bSaving: !1 }),
        this.props.Profile.NotifyRNMobileAppStateChanged());
    }
    async SaveUpload() {
      let { Profile: e, ProfileItems: t, AvatarHistory: n } = this.props,
        r = await e.UploadAvatar(await this.cropRef.current?.getBlob());
      r.bSuccess
        ? (this.setState({ uploadImage: null, strUploadError: `` }),
          (this.cropRef = F.createRef()),
          t.SetEquippedAvatar(null, !0),
          n.RefreshAvatarHistory(),
          this.setState({ bHTMLError: (await t.CommitAvatarChanges()) !== 1 }))
        : this.setState({ strUploadError: r.strError });
    }
    async CommitChanges() {
      let {
          Profile: e,
          ProfileItems: t,
          OGGAvatars: n,
          AvatarHistory: r,
        } = this.props,
        [i, a, o] = await Promise.all([
          t.CommitAvatarChanges(),
          e.BHasUncomittedAvatarChanges()
            ? n.SetPlayerOGGAvatar(e)
            : Promise.resolve(1),
          e.BHasUncomittedAvatarChanges()
            ? r.SetPreviousAvatar(e)
            : Promise.resolve(1),
        ]);
      (this.setState({ bHTMLError: i !== 1 || (a !== 1 && o !== 1) }),
        r.RefreshAvatarHistory());
    }
    componentWillUnmount() {
      this.RevertChanges();
    }
    render() {
      let {
          Profile: e,
          ProfileItems: t,
          OGGAvatars: n,
          AvatarHistory: r,
        } = this.props,
        {
          uploadImage: i,
          bAvatarCollectionExpanded: a,
          bFrameCollectionExpanded: o,
          bSaving: s,
        } = this.state,
        c = {
          Profile: e,
          ProfileItems: t,
          OGGAvatars: n,
          AvatarHistory: r,
          fnOnCollapse: this.Reset,
        };
      return (0, I.jsxs)(nt, {
        className: wt,
        children: [
          (0, I.jsx)(g, {
            when: t.BIsAvatarUncomitted(),
            message: E(`#Profile_Edit_UnsavedChangesWarning`),
          }),
          (0, I.jsxs)(P, {
            "flow-children": `column`,
            children: [
              (0, I.jsxs)(P, {
                className: Tt,
                "flow-children": `column`,
                children: [
                  (0, I.jsx)(N, { children: E(`#Profile_FieldAvatar`) }),
                  (0, I.jsx)(T, {
                    children: E(`#Profile_Edit_Avatar_Instructions`),
                  }),
                  (0, I.jsx)(Y, {
                    strHTMLError: this.state.bHTMLError
                      ? E(`#ConnectionTrouble_FailedToConnect`)
                      : ``,
                  }),
                  (0, I.jsxs)(ti, {
                    Profile: e,
                    children: [
                      (0, I.jsxs)(`div`, {
                        className: Et,
                        children: [
                          (0, I.jsx)(ri, { Profile: e, ProfileItems: t }),
                          (0, I.jsxs)(`div`, {
                            className: Dt,
                            children: [
                              (0, I.jsx)(ai, {
                                OnAvatarSelected: this.OnUploadSelected,
                                disabled: this.state.bSaving,
                                strError: this.state.strUploadError,
                              }),
                              (0, I.jsx)(`div`, {
                                children: E(
                                  `#Profile_Edit_Avatar_UploadInstructions`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      i &&
                        (0, I.jsx)(F.Suspense, {
                          fallback: null,
                          children: (0, I.jsx)(Zr, {
                            imageData: i,
                            ref: this.cropRef,
                          }),
                        }),
                      !i &&
                        !o &&
                        (0, I.jsx)(Lr, {
                          ...c,
                          bExpanded: a,
                          fnOnExpand: this.OnShowAllAvatarsClicked,
                        }),
                      !i &&
                        !a &&
                        (0, I.jsx)(qr, {
                          ...c,
                          bExpanded: o,
                          fnOnExpand: this.OnShowAllFramesClicked,
                        }),
                    ],
                  }),
                ],
              }),
              (0, I.jsx)(q, {
                onSave: this.OnSave,
                onCancel: this.RevertChanges,
                disabled: s || e.BIsAvatarChangeOnCooldown(),
              }),
            ],
          }),
        ],
      });
    }
  };
(A([S], Z.prototype, `OnUploadSelected`, null),
  A([S], Z.prototype, `OnShowAllAvatarsClicked`, null),
  A([S], Z.prototype, `OnShowAllFramesClicked`, null),
  A([S], Z.prototype, `Reset`, null),
  A([S], Z.prototype, `RevertChanges`, null),
  A([S], Z.prototype, `OnSave`, null),
  A([S], Z.prototype, `SaveUpload`, null),
  A([S], Z.prototype, `CommitChanges`, null));
var ti = ({ Profile: e, children: t }) =>
  e.BIsAvatarChangeOnCooldown()
    ? (0, I.jsx)(Fr, {
        rtCooldownEnd: e.GetAvatarChangeCooldownEndRTime(),
        strCooldownLabel: E(`#Profile_AvatarUploadingBanned`),
        strCooldownDescHTML: E(
          `#Profile_AvatarUploadingBanned_Desc`,
          K.k_strAvatarCooldownSupportURL,
        ),
        children: t,
      })
    : (0, I.jsx)(I.Fragment, { children: t });
function ni(e, t, n, r) {
  return t
    ? r?.disableAnimation
      ? V(t)
      : qn(t)
    : pe(e || `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`, n);
}
var ri = i(({ Profile: e, ProfileItems: t }) => {
    let n = e.GetAvatarHash(),
      r = t.GetEquippedAvatar(),
      i = t.GetEquippedAvatarFrame(),
      a = !i && t.GetEquippedProfileModifier();
    a && !t.BIsLegacyGoldenProfile(a.appid) && (a = null);
    let o = null;
    return (
      a ? (o = t.GetProfileModifierAvatarFrameURL()) : i && (o = qn(i)),
      (0, I.jsxs)(`div`, {
        className: gt,
        children: [
          (0, I.jsx)(ii, {
            sizeClassName: bt,
            sizePx: 184,
            avatarURL: ni(n, r, `full`),
            frameURL: o,
            isGolden: !!a,
          }),
          (0, I.jsx)(ii, {
            sizeClassName: xt,
            sizePx: 64,
            avatarURL: ni(n, r, `medium`),
            frameURL: o,
            isGolden: !!a,
          }),
          (0, I.jsx)(ii, {
            sizeClassName: St,
            sizePx: 32,
            avatarURL: ni(n, r, `small`),
            frameURL: o,
            isGolden: !!a,
          }),
        ],
      })
    );
  }),
  ii = ({
    sizeClassName: e,
    sizePx: t,
    avatarURL: n,
    frameURL: r,
    isGolden: i,
  }) =>
    (0, I.jsxs)(`div`, {
      className: C(_t, e),
      children: [
        (0, I.jsxs)(`div`, {
          className: vt,
          children: [
            (0, I.jsx)(`div`, { className: yt }),
            r &&
              (0, I.jsx)(`div`, {
                className: `Sddlck3cDZg-`,
                children: (0, I.jsx)(`img`, { src: r }),
              }),
            i && (0, I.jsx)(`div`, { className: `goldenAvatarOverlay` }),
            (0, I.jsx)(`img`, { src: n }),
          ],
        }),
        (0, I.jsxs)(`div`, { className: Ct, children: [t, `px`] }),
      ],
    });
function ai(e) {
  let { OnAvatarSelected: t, disabled: n, strError: r } = e,
    i = F.useRef(void 0),
    a = F.useCallback(() => {
      let e = i.current?.files;
      e?.length > 0 &&
        e[0].type.startsWith(`image/`) &&
        (t(e[0]), (i.current.value = null));
    }, [t]);
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(`input`, {
        type: `file`,
        accept: `image/*`,
        style: { display: `none` },
        ref: i,
        onInput: a,
      }),
      !!r && (0, I.jsx)(`div`, { className: `L7lx2nCcx6E-`, children: r }),
      (0, I.jsx)(Be, {
        onClick: () => i.current.click(),
        disabled: n,
        children: E(`#Profile_UploadAvatar`),
      }),
    ],
  });
}
var oi = i(({ Profile: e, ProfileItems: t }) => {
    let n = ni(
        e.GetCommittedAvatarHash(),
        t.GetCommittedEquippedAvatar(),
        `full`,
      ),
      r = t.GetCommittedEquippedAvatarFrame(),
      i = !r && t.GetCommittedEquippedProfileModifier(),
      a = null;
    return (
      i ? (a = t.GetProfileModifierAvatarFrameURL()) : r && (a = qn(r)),
      (0, I.jsx)(`div`, {
        className: C(_t, xt),
        children: (0, I.jsxs)(`div`, {
          className: vt,
          children: [
            a &&
              (0, I.jsx)(`div`, {
                className: `Sddlck3cDZg-`,
                children: (0, I.jsx)(`img`, { src: a }),
              }),
            (0, I.jsx)(`img`, { src: n }),
          ],
        }),
      })
    );
  }),
  si = `u0Y6LE6vVFo-`;
function ci(e) {
  let {
    Profile: { Location: t },
  } = e;
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(ui, { LocationStore: t }),
      (0, I.jsx)(di, { LocationStore: t }),
      (0, I.jsx)(fi, { LocationStore: t }),
    ],
  });
}
async function li(e, t) {
  let n = await e();
  return [
    { label: E(`#Profile_LocationDoNotDisplay`), data: null },
    ...n
      .map(t)
      .sort((e, t) =>
        e.data.strDisplayText.localeCompare(t.data.strDisplayText),
      ),
  ];
}
function ui(e) {
  let { LocationStore: t } = e,
    { CountryCode: n, Country: r } = t,
    [i, a] = F.useState(),
    o = c({
      queryKey: [`CountryEdit`],
      queryFn: async () =>
        await li(
          () => t.GetCountryList(),
          (e) => ({
            label: e.countryname,
            data: { strCode: e.countrycode, strDisplayText: e.countryname },
          }),
        ),
      staleTime: 1 / 0,
    });
  F.useEffect(() => {
    a(
      o.data?.find((e) => e.data?.strCode == t.CountryCode) ??
        (o.data?.length > 0 ? o.data[0] : void 0),
    );
  }, [o.data, t.CountryCode]);
  let s = F.useCallback(
    (e) => {
      (t.SetCountry(
        e.data?.strCode,
        e.data?.strCode ? e.data.strDisplayText : void 0,
      ),
        a(e));
    },
    [t],
  );
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(`input`, { type: `hidden`, name: `country`, value: n || `` }),
      (0, I.jsx)(ye, {
        contextMenuPositionOptions: { bDisablePopTop: !0 },
        label: E(`#Profile_FieldCountry`),
        rgOptions: o.data,
        selectedOption: i?.data,
        controlled: !0,
        disabled: o.isFetching,
        onChange: s,
        strDefaultLabel: r || E(`#Profile_LocationDoNotDisplay`),
        tooltip: Mr(`#Profile_DescriptionLocation`),
      }),
    ],
  });
}
function di(e) {
  let { LocationStore: t } = e,
    { StateCode: n, State: r } = t,
    [i, a] = F.useState(),
    [o, s] = re(() => [t.BIsStateSelectionAvailable(), t.CountryCode]),
    l = c({
      queryKey: [`StateEdit`, s],
      queryFn: async () =>
        await li(
          () => t.GetStateList(),
          (e) => ({
            label: e.statename,
            data: { strCode: e.statecode, strDisplayText: e.statename },
          }),
        ),
      staleTime: 1 / 0,
    });
  F.useEffect(() => {
    a(
      l.data?.find((e) => e.data?.strCode == t.StateCode) ??
        (l.data?.length > 0 ? l.data[0] : void 0),
    );
  }, [l.data, t.StateCode]);
  let u = F.useCallback(
      (e) => {
        (t.SetState(
          e.data?.strCode,
          e.data?.strCode ? e.data.strDisplayText : void 0,
        ),
          a(e));
      },
      [t],
    ),
    d = o && !l.isError;
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(`input`, { type: `hidden`, name: `state`, value: n || `` }),
      d &&
        (0, I.jsx)(ye, {
          contextMenuPositionOptions: { bDisablePopTop: !0 },
          label: E(`#Profile_FieldState`),
          rgOptions: l.data,
          selectedOption: i?.data,
          controlled: !0,
          disabled: l.isFetching,
          onChange: u,
          strDefaultLabel: r || E(`#Profile_LocationDoNotDisplay`),
          tooltip: Mr(`#Profile_DescriptionLocation`),
        }),
    ],
  });
}
function fi(e) {
  let { LocationStore: t } = e,
    { CityCode: n, City: r } = t,
    [i, a] = F.useState(),
    [o, s, l] = re(() => [
      t.BIsCitySelectionAvailable(),
      t.CountryCode,
      t.StateCode,
    ]),
    u = c({
      queryKey: [`CityEdit`, s, l],
      queryFn: async () =>
        await li(
          () => t.GetCityList(),
          (e) => ({
            label: e.cityname,
            data: { strCode: `` + e.cityid, strDisplayText: e.cityname },
          }),
        ),
      staleTime: 1 / 0,
      retry: !1,
    });
  F.useEffect(() => {
    a(
      u.data?.find((e) => e.data?.strCode == t.CityCode) ??
        (u.data?.length > 0 ? u.data[0] : void 0),
    );
  }, [u.data, t.CityCode]);
  let d = F.useCallback(
      (e) => {
        (t.SetCity(
          e.data?.strCode,
          e.data?.strCode ? e.data.strDisplayText : void 0,
        ),
          a(e));
      },
      [t],
    ),
    f = o && !u.isError;
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(`input`, { type: `hidden`, name: `city`, value: n || `` }),
      f &&
        (0, I.jsx)(ye, {
          contextMenuPositionOptions: { bDisablePopTop: !0 },
          label: E(`#Profile_FieldCity`),
          rgOptions: u.data,
          selectedOption: i?.data,
          controlled: !0,
          disabled: u.isFetching,
          onChange: d,
          strDefaultLabel: r || E(`#Profile_LocationDoNotDisplay`),
          tooltip: Mr(`#Profile_DescriptionLocation`),
        }),
    ],
  });
}
var pi = `oK53QBwGoIY-`,
  mi = `trjttlcEZl4-`,
  hi = `QtUPaJi8HDw-`,
  gi = `SMZU--YCUFM-`,
  _i = class extends F.Component {
    state = { strSummary: `` };
    m_refTextInput = F.createRef();
    static getDerivedStateFromProps(e) {
      return { strSummary: e.Profile.GetSummary() };
    }
    OnChange(e) {
      this.SetInputValue(e.currentTarget.value);
    }
    InsertEmoticon(e, t) {
      (t || this.m_refTextInput.current.focus(), this.InsertAtCursor(`:${e}:`));
    }
    InsertAtCursor(e) {
      let t = this.m_refTextInput.current.textarea,
        n = t.value,
        r = n.substr(0, t.selectionStart) + e + n.substr(t.selectionEnd),
        i = t.selectionStart + e.length;
      this.SetInputValue(r, () => {
        t.selectionStart = t.selectionEnd = i;
      });
    }
    SetInputValue(e, t) {
      (this.setState({ strSummary: e }, t), this.props.Profile.SetSummary(e));
    }
    render() {
      let { EmoticonStore: e, Profile: t } = this.props,
        { strSummary: n } = this.state;
      return (0, I.jsx)(vi, {
        Profile: t,
        children: (0, I.jsxs)(`div`, {
          className: gi,
          children: [
            (0, I.jsx)(Fe, {
              nMinHeight: 40,
              name: `summary`,
              rows: 3,
              cols: 40,
              onChange: this.OnChange,
              className: hi,
              value: n,
              ref: this.m_refTextInput,
            }),
            (0, I.jsx)(`div`, {
              className: pi,
              children: (0, I.jsx)(fe, {
                className: mi,
                disabled: !1,
                OnEmoticonSelected: this.InsertEmoticon,
                emoticonStore: e,
              }),
            }),
          ],
        }),
      });
    }
  };
(A([S], _i.prototype, `OnChange`, null),
  A([S], _i.prototype, `InsertEmoticon`, null));
var vi = ({ Profile: e, children: t }) =>
    e.BIsProfileSummaryChangeOnCooldown()
      ? (0, I.jsx)(Fr, {
          rtCooldownEnd: e.GetProfileSummaryCooldownEndRTime(),
          strCooldownLabel: E(`#Profile_ProfileSummaryCooldown`),
          strCooldownDescHTML: E(
            `#Profile_ProfileSummaryCooldown_Desc`,
            K.k_strProfileSummaryCooldownSupportURL,
          ),
          children: t,
        })
      : (0, I.jsx)(I.Fragment, { children: t }),
  yi = class extends F.Component {
    state = { bSaving: !1, strHTMLError: `` };
    OnSubmit(e) {
      (e.preventDefault(), this.CommitChanges(e.currentTarget));
    }
    async CommitChanges(e) {
      this.setState({ bSaving: !0, strHTMLError: `` });
      let t = await Qn(`profileSave`, new FormData(e));
      t.strRedirectURL
        ? (window.location.href = `${t.strRedirectURL}/info`)
        : (this.props.Profile.SetBasicInfoChangesComitted(),
          t.strHTMLError
            ? this.setState({ strHTMLError: t.strHTMLError })
            : this.setState({ strHTMLError: `` }),
          this.setState({ bSaving: !1 }),
          this.props.Profile.NotifyRNMobileAppStateChanged());
    }
    RevertChanges() {
      let { Profile: e } = this.props;
      (e.RevertBasicInfoChanges(), this.setState({ strHTMLError: `` }));
    }
    render() {
      let { Profile: e, EmoticonStore: t } = this.props,
        { bSaving: n, strHTMLError: r } = this.state;
      return (0, I.jsx)(P, {
        "flow-children": `column`,
        navEntryPreferPosition: Oe.MAINTAIN_Y,
        children: (0, I.jsxs)(`form`, {
          method: `POST`,
          action: `${R.ProfileURL}edit/info`,
          onSubmit: this.OnSubmit,
          children: [
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `sessionID`,
              value: j(),
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `type`,
              value: `profileSave`,
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_1_title`,
              value: ``,
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_1_url`,
              value: ``,
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_2_title`,
              value: ``,
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_2_url`,
              value: ``,
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_3_title`,
              value: ``,
            }),
            (0, I.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_3_url`,
              value: ``,
            }),
            (0, I.jsx)(N, { children: E(`#Profile_About`) }),
            (0, I.jsx)(T, { children: (0, I.jsx)(bi, {}) }),
            (0, I.jsx)(Y, { strHTMLError: r }),
            (0, I.jsxs)(jr, {
              title: E(`#Profile_Edit_BasicInfo`),
              children: [
                (0, I.jsx)(xi, { Profile: e }),
                !y(k.EREALM) && (0, I.jsx)(Ei, { Profile: e }),
              ],
            }),
            !y(k.EREALM) &&
              (0, I.jsx)(jr, {
                title: E(`#Profile_Edit_Location`),
                children: (0, I.jsx)(ci, { Profile: e }),
              }),
            !y(k.EREALM) &&
              (0, I.jsx)(jr, {
                title: E(`#Profile_FieldSummary`),
                children: (0, I.jsx)(_i, { Profile: e, EmoticonStore: t }),
              }),
            !y(k.EREALM) &&
              (0, I.jsx)(jr, {
                title: E(`#Profile_Edit_Preferences`),
                children: (0, I.jsx)(Oi, { Profile: e }),
              }),
            (0, I.jsx)(q, { onCancel: this.RevertChanges, disabled: n }),
          ],
        }),
      });
    }
  };
(A([S], yi.prototype, `OnSubmit`, null),
  A([S], yi.prototype, `RevertChanges`, null));
var bi = class extends F.Component {
    render() {
      return (0, I.jsx)(`div`, {
        style: { display: `block` },
        children: (0, I.jsx)(ce, {
          text: E(
            y(k.EREALM)
              ? `#Profile_Edit_About_Instructions_SteamChina`
              : `#Profile_Edit_About_Instructions`,
          ),
        }),
      });
    }
  },
  xi = class extends F.Component {
    OnPersonaNameChange(e) {
      this.props.Profile.SetPersonaName(e.target.value);
    }
    OnRealNameChange(e) {
      this.props.Profile.SetRealName(e.target.value);
    }
    render() {
      let { Profile: e } = this.props;
      return (0, I.jsxs)(I.Fragment, {
        children: [
          (0, I.jsxs)(Si, {
            Profile: e,
            children: [
              (0, I.jsx)(Ee, {
                label: E(`#Profile_FieldProfileName`),
                disabled: e.BIsPersonaNameChangeOnCooldown(),
                name: `personaName`,
                value: e.GetPersonaName(),
                onChange: this.OnPersonaNameChange,
              }),
              (0, I.jsx)(Ci, { Profile: e }),
            ],
          }),
          !y(k.EREALM) &&
            (0, I.jsxs)(wi, {
              Profile: e,
              children: [
                (0, I.jsx)(Ee, {
                  label: E(`#Profile_FieldRealName`),
                  disabled: e.BIsProfileSummaryChangeOnCooldown(),
                  tooltip: Mr(`#Profile_DescriptionRealName`),
                  name: `real_name`,
                  value: e.GetRealName(),
                  onChange: this.OnRealNameChange,
                }),
                (0, I.jsx)(Ti, { Profile: e }),
              ],
            }),
        ],
      });
    }
  };
(A([S], xi.prototype, `OnPersonaNameChange`, null),
  A([S], xi.prototype, `OnRealNameChange`, null),
  (xi = A([i], xi)));
var Si = ({ Profile: e, children: t }) =>
    e.BIsPersonaNameChangeOnCooldown()
      ? (0, I.jsx)(Fr, {
          rtCooldownEnd: e.GetPersonaNameCooldownEndRTime(),
          strCooldownLabel: E(`#Profile_PersonaNameCooldown`),
          strCooldownDescHTML: E(
            `#Profile_PersonaNameCooldown_Desc`,
            K.k_strPersonaNameCooldownSupportURL,
          ),
          children: t,
        })
      : (0, I.jsx)(I.Fragment, { children: t }),
  Ci = class extends F.Component {
    render() {
      let { Profile: e } = this.props;
      return e.HasFilteredPersonaName()
        ? (0, I.jsx)(`div`, {
            className: si,
            children: ot(
              `#Profile_PersonaNameFiltered`,
              (0, I.jsx)(`a`, { href: K.k_strNameFilteredSupportURL }),
            ),
          })
        : null;
    }
  },
  wi = ({ Profile: e, children: t }) =>
    e.BIsProfileSummaryChangeOnCooldown()
      ? (0, I.jsx)(Fr, {
          rtCooldownEnd: e.GetProfileSummaryCooldownEndRTime(),
          strCooldownLabel: E(`#Profile_RealNameCooldown`),
          strCooldownDescHTML: E(
            `#Profile_RealNameCooldown_Desc`,
            K.k_strPersonaNameCooldownSupportURL,
          ),
          children: t,
        })
      : (0, I.jsx)(I.Fragment, { children: t }),
  Ti = class extends F.Component {
    render() {
      let { Profile: e } = this.props;
      return e.HasFilteredRealName()
        ? (0, I.jsx)(`div`, {
            className: si,
            children: ot(
              `#Profile_RealNameFiltered`,
              (0, I.jsx)(`a`, { href: K.k_strNameFilteredSupportURL }),
            ),
          })
        : null;
    }
  },
  Ei = class extends F.Component {
    OnProfileURLChange(e) {
      this.props.Profile.SetCustomURL(e.target.value);
    }
    render() {
      let { Profile: e } = this.props;
      return (0, I.jsx)(I.Fragment, {
        children: (0, I.jsx)(Ee, {
          label: E(`#Profile_FieldCustomURL`),
          tooltip: Mr(`#Profile_DescriptionCustomURL`),
          name: `customURL`,
          value: e.GetCustomURL(),
          onChange: this.OnProfileURLChange,
          description: E(
            `#Profile_ProfileAvailableAtURL`,
            e.GetConstructedURL(),
          ),
        }),
      });
    }
  };
(A([S], Ei.prototype, `OnProfileURLChange`, null), (Ei = A([i], Ei)));
var Di = class extends F.Component {
  m_disposer;
  componentDidMount() {
    this.m_disposer = u(() => {
      let { Profile: e } = this.props;
      document
        .querySelectorAll(`.persona_name_text_content`)
        .forEach((t) => (t.textContent = e.GetComittedPersonaName()));
    });
  }
  componentWillUnmount() {
    this.m_disposer();
  }
  render() {
    return null;
  }
};
Di = A([i], Di);
var Oi = class extends F.Component {
  OnProfileAwardsCheckboxChecked(e) {
    let { Profile: t } = this.props,
      n = e,
      r = t.GetPreferences();
    ((r.hide_profile_awards = n), t.SetPreferences(r));
  }
  render() {
    let { Profile: e } = this.props,
      t = e.GetPreferences();
    return (0, I.jsxs)(`div`, {
      children: [
        (0, I.jsx)(Ue, {
          label: E(`#Profile_Preferences_HideProfileAwards`),
          checked: t.hide_profile_awards,
          onChange: this.OnProfileAwardsCheckboxChecked,
        }),
        (0, I.jsx)(`input`, {
          type: `hidden`,
          name: `hide_profile_awards`,
          value: +!!t.hide_profile_awards,
        }),
      ],
    });
  }
};
(A([S], Oi.prototype, `OnProfileAwardsCheckboxChecked`, null),
  (Oi = A([i], Oi)));
var ki = `GhpgMs4LuzQ-`,
  Ai = `yOrk2V0Iu-4-`,
  ji = `p8t4WX8LgAY-`,
  Mi = `uAxgcoAsxCo-`,
  Ni = `_5PAQ8Ex2u08-`,
  Pi = `MnZjEyxdqWQ-`,
  Fi = `vIWKwoLihG4-`,
  Ii = class extends F.Component {
    state = { bSaving: !1, strHTMLError: `` };
    async CommitFavoriteBadge() {
      let e = this.props.Badges;
      (this.setState({ bSaving: !0 }),
        (await e.CommitFavoriteBadgeChanges()) == 1
          ? this.setState({ strHTMLError: `` })
          : this.setState({
              strHTMLError: E(`#ConnectionTrouble_FailedToConnect`),
            }),
        this.setState({ bSaving: !1 }));
    }
    RevertFavoriteBadge() {
      (this.props.Badges.RevertFavoriteBadge(),
        this.setState({ strHTMLError: `` }));
    }
    componentWillUnmount() {
      this.props.Badges.RevertFavoriteBadge();
    }
    render() {
      let { Badges: e } = this.props,
        { bSaving: t, strHTMLError: n } = this.state,
        r = e.FavoriteBadge;
      return (0, I.jsx)(w, {
        children: (0, I.jsxs)(P, {
          "flow-children": `column`,
          children: [
            (0, I.jsx)(g, {
              when: e.BFavoriteBadgeUncomitted(),
              message: E(`#Profile_Edit_UnsavedChangesWarning`),
            }),
            (0, I.jsx)(N, { children: E(`#Profile_Edit_FavoriteBadge`) }),
            (0, I.jsx)(T, { children: E(`#Profile_Edit_Badge_Instructions`) }),
            (0, I.jsx)(Y, { strHTMLError: n }),
            r && (0, I.jsx)(Ri, { badge: r }),
            !r && (0, I.jsx)(zi, { count: e.Badges.length }),
            (0, I.jsx)(Pr, {
              getSearchFields: Bi,
              getItems: async () => e.Badges,
              onItemSelected: (t) => {
                e.SetFavoriteBadge(t);
              },
              ItemComponent: Vi,
            }),
            (0, I.jsx)(q, {
              onSave: this.CommitFavoriteBadge,
              onCancel: this.RevertFavoriteBadge,
              disabled: t,
            }),
          ],
        }),
      });
    }
  };
(A([S], Ii.prototype, `CommitFavoriteBadge`, null),
  A([S], Ii.prototype, `RevertFavoriteBadge`, null),
  (Ii = A([i], Ii)));
var Li = Ii,
  Ri = ({ badge: e, children: t }) =>
    (0, I.jsxs)(`div`, {
      className: C(ki, Pi),
      children: [
        (0, I.jsx)(`img`, { className: Ai, src: e.GetIconURL() }),
        (0, I.jsxs)(`div`, {
          className: Mi,
          children: [
            (0, I.jsx)(`div`, { className: void 0, children: e.GetName() }),
            (0, I.jsx)(`div`, { className: Ni, children: e.GetGameName() }),
          ],
        }),
      ],
    }),
  zi = ({ count: e, children: t }) =>
    (0, I.jsxs)(`div`, {
      className: C(ki, Pi),
      children: [
        (0, I.jsx)(`div`, {
          className: ji,
          children: (0, I.jsx)(`img`, {
            className: Ai,
            src: `${k.COMMUNITY_CDN_URL}public/images/trans.gif`,
          }),
        }),
        (0, I.jsxs)(`div`, {
          className: Mi,
          children: [
            (0, I.jsx)(`div`, { className: void 0, children: `None selected` }),
            (0, I.jsx)(`div`, {
              className: Ni,
              children: `${e} badges available`,
            }),
          ],
        }),
      ],
    }),
  Bi = (e) => [e.GetName(), e.GetGameName()],
  Vi = ({ Item: e, onSelected: t }) => {
    let n = e;
    return (0, I.jsxs)(P, {
      className: C(ki, Fi),
      onActivate: t,
      children: [
        (0, I.jsx)(`img`, {
          className: Ai,
          src: n.GetIconURL(),
          loading: `lazy`,
        }),
        (0, I.jsxs)(`div`, {
          className: Mi,
          children: [
            (0, I.jsx)(`div`, { className: void 0, children: n.GetName() }),
            (0, I.jsx)(`div`, { className: Ni, children: n.GetGameName() }),
          ],
        }),
      ],
    });
  },
  Hi = `-eDTNUE7eD0-`,
  Ui = `_0lb1WNpEm4w-`,
  Wi = `_0QDGl6xh9r0-`,
  Gi = `XbfPY-6airw-`,
  Ki = `ew8T-alpGiA-`,
  qi = class extends F.Component {
    state = { bSaving: !1, strHTMLError: `` };
    async CommitFavoriteGroup() {
      let e = this.props.Profile.GroupList;
      this.setState({ bSaving: !0 });
      let t = await e.CommitPrimaryGroup();
      (t.strHTMLError
        ? this.setState({ strHTMLError: t.strHTMLError })
        : this.setState({ strHTMLError: `` }),
        this.setState({ bSaving: !1 }));
    }
    RevertFavoriteGroup() {
      (this.props.Profile.GroupList.RevertPrimaryGroupChanges(),
        this.setState({ strHTMLError: `` }));
    }
    componentWillUnmount() {
      this.props.Profile.GroupList.RevertPrimaryGroupChanges();
    }
    render() {
      let { Profile: e } = this.props,
        { bSaving: t, strHTMLError: n } = this.state,
        r = e.GroupList,
        i = r.PrimaryGroup;
      return (0, I.jsxs)(P, {
        "flow-children": `column`,
        children: [
          (0, I.jsx)(g, {
            when: r.BPrimaryGroupUncomitted(),
            message: E(`#Profile_Edit_UnsavedChangesWarning`),
          }),
          (0, I.jsx)(N, { children: E(`#Profile_Edit_FavoriteGroup`) }),
          (0, I.jsx)(T, { children: E(`#Profile_Edit_Group_Instructions`) }),
          (0, I.jsx)(Y, { strHTMLError: n }),
          i && (0, I.jsx)(Yi, { group: i }),
          (0, I.jsx)(Pr, {
            getSearchFields: Xi,
            getItems: async () => (
              await r.BWaitForUserGroups(),
              r.GetUserGroups()
            ),
            onItemSelected: (e) => {
              r.SetPrimaryGroup(e);
            },
            ItemComponent: Zi,
          }),
          (0, I.jsx)(q, {
            onSave: this.CommitFavoriteGroup,
            onCancel: this.RevertFavoriteGroup,
            disabled: t,
          }),
        ],
      });
    }
  };
(A([S], qi.prototype, `CommitFavoriteGroup`, null),
  A([S], qi.prototype, `RevertFavoriteGroup`, null),
  (qi = A([i], qi)));
var Ji = qi,
  Yi = ({ group: e, children: t }) =>
    (0, I.jsxs)(`div`, {
      className: C(Hi, Gi),
      children: [
        (0, I.jsx)(`img`, { className: Ui, src: e.GetAvatarURL(`full`) }),
        (0, I.jsx)(`div`, {
          className: Wi,
          children: (0, I.jsx)(`div`, {
            className: void 0,
            children: e.GetName(),
          }),
        }),
      ],
    }),
  Xi = (e) => [e.GetName()],
  Zi = ({ Item: e, onSelected: t }) => {
    let n = e;
    return (0, I.jsxs)(P, {
      className: C(Hi, Ki),
      onActivate: t,
      children: [
        (0, I.jsx)(`img`, {
          className: Ui,
          src: n.GetAvatarURL(`full`),
          loading: `lazy`,
        }),
        (0, I.jsx)(`div`, {
          className: Wi,
          children: (0, I.jsx)(`div`, {
            className: void 0,
            children: n.GetName(),
          }),
        }),
      ],
    });
  },
  Qi = `CHixAKCJVI4-`,
  $i = `H3rXlZmoLOw-`,
  ea = `pPe3pevh0N0-`,
  ta = `l9xD6AJjWLU-`,
  na = `Iv5qi9wmi0A-`,
  ra = `_8kigsBPtEnA-`,
  ia = `NJ-UhbLtvH0-`,
  aa = ({ Item: e, small: t }) => {
    let n = Xn(e, t);
    return Object.keys(n).length == 0
      ? null
      : (0, I.jsx)(`video`, {
          loop: !0,
          preload: `none`,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          children: Object.keys(n).map((e) =>
            (0, I.jsx)(`source`, { src: n[e], type: e }, e),
          ),
        });
  },
  oa = ({ Background: e, className: t, small: n }) =>
    e
      ? (0, I.jsx)(`div`, {
          className: t,
          children: (0, I.jsx)(aa, { Item: e, small: n }),
        })
      : null;
function sa(e) {
  e.currentTarget.querySelector(`video`).play();
}
function ca(e) {
  e.detail.focusedNode.Element.querySelector(`video`).play();
}
function la(e) {
  return [e.item_title, e.app_name];
}
function ua(e, t) {
  return e ? (t ? e.communityitemid === t.communityitemid : !1) : !t;
}
var da = class extends F.Component {
  RevertChanges() {
    this.props.ProfileEdit.ProfileItems.RevertMiniProfileBackgroundChanges();
  }
  render() {
    let { ProfileEdit: e } = this.props,
      { Profile: t, ProfileItems: n, MiniProfileOverrideData: r } = e,
      { MiniProfileData: i, PersonaState: a } = t;
    return (0, I.jsxs)(I.Fragment, {
      children: [
        (0, I.jsx)(N, { children: E(`#Profile_Edit_MiniProfile`) }),
        (0, I.jsx)(T, {
          children: E(`#Profile_Edit_MiniProfile_Instructions`),
        }),
        (0, I.jsx)(pa, {
          ProfileItems: n,
          Profile: t,
          MiniProfileOverrideData: r,
          onDismiss: this.RevertChanges,
        }),
      ],
    });
  }
};
(A([S], da.prototype, `RevertChanges`, null), (da = A([i], da)));
var fa = da,
  pa = i(
    ({
      Profile: e,
      ProfileItems: t,
      MiniProfileOverrideData: n,
      onDismiss: r,
    }) => {
      let i = t.GetEquippedProfileModifier();
      return (
        i && !t.BIsLegacyGoldenProfile(i.appid) && (i = null),
        (0, I.jsx)(J, {
          fnRevertChanges: r,
          getSearchFields: la,
          getItems: () => t.GetOwnedMiniProfileBackgrounds(),
          fnCommitChanges: async (e) => (
            t.SetEquippedMiniProfileBackground(e),
            t.CommitMiniProfileChanges()
          ),
          ItemComponent: ha,
          RenderDefaultComponent: ({ onSelected: e, active: t }) =>
            (0, I.jsx)(ga, { onSelected: e, active: t, Modifier: i }),
          ActiveItem: t.GetEquippedMiniProfileBackground(),
          fnIsSameItem: ua,
          fnRenderPreview: (r) =>
            (0, I.jsx)(ma, {
              MiniProfileBackground: r,
              Profile: e,
              ProfileItems: t,
              MiniProfileOverrideData: n,
            }),
        })
      );
    },
  ),
  ma = ({
    MiniProfileBackground: e,
    MiniProfileOverrideData: t,
    Profile: n,
    ProfileItems: r,
  }) => {
    let { MiniProfileData: i, PersonaState: a } = n,
      o;
    if (e) {
      o = Xn(e);
      let t = V(e);
      t && (o.image = t);
    } else {
      o = r.GetProfileModifierMiniProfileBackgroundMovies();
      let e = r.GetProfileModifierMiniProfileBackground();
      e && (o.image = e);
    }
    return (0, I.jsx)(I.Fragment, {
      children: (0, I.jsx)(`div`, {
        className: void 0,
        children: (0, I.jsx)(kn, {
          persona: a,
          className: Qi,
          data_loader: i,
          community_data_override: { ...t, profile_background: o },
        }),
      }),
    });
  },
  ha = ({ Item: e, onSelected: t, children: n, active: r }) => {
    let i = Xn(e),
      a = Object.keys(i).length > 0;
    return (0, I.jsxs)(P, {
      className: C($i, a && `ZV8vOfk4n5Q-`, r && `zEk-OP0Mu08-`),
      onActivate: t,
      onMouseEnter: a ? sa : void 0,
      children: [
        (0, I.jsxs)(`div`, {
          className: ea,
          children: [
            (0, I.jsx)(`img`, { src: V(e), loading: `lazy` }),
            a &&
              (0, I.jsx)(`div`, {
                className: `_0Pw3llB9it0-`,
                children: (0, I.jsx)(aa, { Item: e }),
              }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: ta,
          children: [
            (0, I.jsxs)(`div`, {
              children: [
                (0, I.jsx)(`div`, { className: ra, children: e.item_title }),
                (0, I.jsx)(`div`, { className: ia, children: e.app_name }),
              ],
            }),
            n,
          ],
        }),
      ],
    });
  },
  ga = ({ Modifier: e, onSelected: t, children: n, active: r }) =>
    e
      ? (0, I.jsx)(ha, { Item: e, onSelected: t, active: r })
      : (0, I.jsxs)(P, {
          className: C($i, r && `zEk-OP0Mu08-`),
          onClick: t,
          onActivate: t,
          children: [
            (0, I.jsx)(`div`, {
              className: C(ea, na),
              children: (0, I.jsx)(`img`, {
                src: `${k.COMMUNITY_CDN_URL}public/images/trans.gif`,
                loading: `lazy`,
              }),
            }),
            (0, I.jsxs)(`div`, {
              className: ta,
              children: [
                (0, I.jsxs)(`div`, {
                  children: [
                    (0, I.jsx)(`div`, {
                      className: ra,
                      children: E(`#Profile_Edit_DefaultBlankBackground`),
                    }),
                    (0, I.jsx)(`div`, { className: ia }),
                  ],
                }),
                n,
              ],
            }),
          ],
        }),
  _a = class extends F.Component {
    render() {
      let e = this.props.PrivacyStore;
      return (0, I.jsxs)(P, {
        className: `ProfilePrivacyRoot`,
        "flow-children": `column`,
        navEntryPreferPosition: Oe.MAINTAIN_Y,
        children: [
          (0, I.jsx)(Q, {
            PrivacyStore: e,
            strLabel: E(`#ProfilePrivacy_BasicDetails`),
            strReadOnlySetting: In(3),
            children: E(`#ProfilePrivacy_BasicDetails_Desc`),
          }),
          (0, I.jsx)(`div`, { className: `ProfilePrivacyHR` }),
          (0, I.jsxs)(Q, {
            PrivacyStore: e,
            strLabel: E(`#ProfilePrivacy_Profile`),
            PrivacyKey: `PrivacyProfile`,
            children: [
              (0, I.jsx)(`p`, { children: E(`#ProfilePrivacy_Profile_Desc`) }),
              (0, I.jsx)(`p`, { children: E(`#ProfilePrivacy_Profile_Desc2`) }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `ProfilePrivacyRoot_Indent`,
            children: [
              (0, I.jsxs)(Q, {
                PrivacyStore: e,
                strLabel: E(`#ProfilePrivacy_GameLibrary`),
                PrivacyKey: `PrivacyOwnedGames`,
                LimitPrivacyKey: `PrivacyProfile`,
                children: [
                  E(`#ProfilePrivacy_GameLibrary_Desc`),
                  e.GetPrivacySetting(`PrivacyOwnedGames`) != 1 &&
                    (0, I.jsx)(Ca, {
                      PrivacyStore: e,
                      PrivacyKey: `PrivacyPlaytime`,
                      LimitPrivacyKey: `PrivacyOwnedGames`,
                      children: E(`#ProfilePrivacy_Playtime`),
                    }),
                ],
              }),
              (0, I.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              (0, I.jsx)(Q, {
                PrivacyStore: e,
                strLabel: E(`#ProfilePrivacy_FriendsList`),
                PrivacyKey: `PrivacyFriendsList`,
                LimitPrivacyKey: `PrivacyProfile`,
                children: E(`#ProfilePrivacy_FriendsList_Desc`),
              }),
              (0, I.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              (0, I.jsxs)(Q, {
                PrivacyStore: e,
                strLabel: E(`#ProfilePrivacy_Inventory`),
                PrivacyKey: `PrivacyInventory`,
                LimitPrivacyKey: `PrivacyProfile`,
                children: [
                  (0, I.jsx)(P, {
                    "flow-children": `row`,
                    children: $e(
                      `#ProfilePrivacy_Inventory_Desc`,
                      (0, I.jsx)(b, {
                        href: R.ProfileURL + `inventory/`,
                        children: E(`#ProfilePrivacy_Inventory_Inventory`),
                      }),
                      (0, I.jsx)(b, {
                        href: R.ProfileURL + `inventory/#753_6`,
                        children: E(`#ProfilePrivacy_Inventory_TradingCards`),
                      }),
                    ),
                  }),
                  e.GetPrivacySetting(`PrivacyInventory`) != 1 &&
                    (0, I.jsx)(Ca, {
                      PrivacyStore: e,
                      PrivacyKey: `PrivacyInventoryGifts`,
                      LimitPrivacyKey: `PrivacyInventory`,
                      children: E(`#ProfilePrivacy_Gifts`),
                    }),
                ],
              }),
              (0, I.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              (0, I.jsxs)(va, {
                children: [
                  E(`#ProfilePrivacy_Comments`),
                  `:`,
                  (0, I.jsx)(Ta, { PrivacyStore: e }),
                ],
              }),
              !y(k.EREALM) &&
                (0, I.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              !y(k.EREALM) &&
                (0, I.jsx)(Q, {
                  PrivacyStore: e,
                  strLabel: E(`#ProfilePrivacy_UGC`),
                  strReadOnlySetting: E(`#Privacy_PerItem`),
                  children: (0, I.jsx)(P, {
                    "flow-children": `row`,
                    children: $e(
                      `#ProfilePrivacy_UGC_Desc`,
                      (0, I.jsx)(b, {
                        href: R.ProfileURL + `screenshots/`,
                        children: E(`#ProfilePrivacy_UGC_Desc_Screenshots`),
                      }),
                      (0, I.jsx)(b, {
                        href: R.ProfileURL + `myworkshopfiles/`,
                        children: E(`#ProfilePrivacy_UGC_Desc_WorkshopItems`),
                      }),
                    ),
                  }),
                }),
            ],
          }),
        ],
      });
    }
  };
_a = A([i], _a);
function Q(e) {
  let t;
  return (
    (t = e.strReadOnlySetting
      ? (0, I.jsx)(Ea, { strLabel: e.strReadOnlySetting })
      : (0, I.jsx)(xa, {
          PrivacyStore: e.PrivacyStore,
          PrivacyKey: e.PrivacyKey,
          LimitPrivacyKey: e.LimitPrivacyKey,
        })),
    (0, I.jsxs)(F.Fragment, {
      children: [
        (0, I.jsxs)(va, { children: [e.strLabel, `:`, t] }),
        (0, I.jsx)(ya, { children: e.children }),
      ],
    })
  );
}
function va(e) {
  return (0, I.jsx)(`div`, {
    className: `ProfilePrivacyHeader`,
    children: e.children,
  });
}
function ya(e) {
  return (0, I.jsx)(`div`, {
    className: `ProfilePrivacyDesc`,
    children: e.children,
  });
}
function ba(e) {
  let t = [
      { label: E(`#Privacy_Public`), data: 3 },
      { label: E(`#Privacy_FriendsOnly`), data: 2 },
      { label: E(`#Privacy_Private`), data: 1 },
    ],
    n = e ?? 3;
  return t.filter((e) => n >= e.data);
}
var xa = i(function (e) {
  let { PrivacyStore: t, PrivacyKey: n, LimitPrivacyKey: r, children: i } = e,
    a = F.useCallback(() => {
      if (r) return t.GetPrivacySetting(r);
    }, [t, r]),
    o = F.useCallback(
      (e) => {
        t.ChangePrivacySetting(n, e);
      },
      [t, n],
    ),
    s = t.GetPrivacySetting(n);
  In(s);
  let c = ba(a());
  return (0, I.jsxs)(F.Fragment, {
    children: [
      (0, I.jsx)(ft, {
        strDropDownButtonClassName: `ProfilePrivacyDropDown`,
        bMatchWidth: !1,
        rgOptions: c,
        onChange: (e) => o(e.data),
        selectedOption: s,
      }),
      (0, I.jsx)(Sa, { eSaveState: t.GetSaveState(n) }),
    ],
  });
});
function Sa(e) {
  switch (e.eSaveState) {
    case 1:
      return (0, I.jsx)(`div`, {
        className: `PrivacySaveNotice Saving`,
        children: E(`#Shared_Saving`),
      });
    case 3:
      return (0, I.jsx)(`div`, {
        className: `PrivacySaveNotice Error`,
        children: E(`#Error_Error`),
      });
    case 2:
      return (0, I.jsx)(`div`, {
        className: `PrivacySaveNotice Saved`,
        children: E(`#Shared_Saved`),
      });
    default:
      return null;
  }
}
function Ca(e) {
  let { PrivacyStore: t, PrivacyKey: n, LimitPrivacyKey: r, children: i } = e,
    a = F.useCallback(
      (e) => {
        let i = e.currentTarget.checked ? 1 : 3;
        t.ChangePrivacySetting(n, i, r);
      },
      [t, n, r],
    ),
    o = re(() => t.GetPrivacySetting(n)) == 1;
  return (0, I.jsx)(`div`, {
    className: `ProfilePrivacyCheckbox`,
    children: (0, I.jsxs)(`label`, {
      children: [
        (0, I.jsx)(Le, {
          className: `ProfilePrivacyCheckbox_Input`,
          type: `checkbox`,
          checked: o,
          onChange: a,
        }),
        (0, I.jsx)(`div`, {
          className: `ProfilePrivacyCheckbox_Desc`,
          children: i,
        }),
      ],
    }),
  });
}
function wa(e) {
  let t = [
      { label: E(`#Profile_CommentPermission_Public_Desc`), data: 1 },
      { label: E(`#Profile_CommentPermission_FriendsOnly_Desc`), data: 0 },
      { label: E(`#Profile_CommentPermission_Private_Desc`), data: 2 },
    ],
    n = e ?? 3;
  return t.filter((e) => n >= e.data);
}
var Ta = class extends F.Component {
  constructor(e) {
    (super(e), (this.state = { eSaveState: 0 }));
  }
  OnSettingChanged(e) {
    this.props.PrivacyStore.ChangeCommentPermission(e);
  }
  render() {
    let e = this.props.PrivacyStore.CommentPermission,
      t = this.props.PrivacyStore.GetPrivacySetting(`PrivacyProfile`);
    Ln(Rn(e, t));
    let n = wa(t);
    return (0, I.jsxs)(F.Fragment, {
      children: [
        (0, I.jsx)(ft, {
          strDropDownButtonClassName: `ProfilePrivacyDropDown`,
          rgOptions: n,
          bMatchWidth: !1,
          onChange: (e) => this.OnSettingChanged(e.data),
          selectedOption: e,
        }),
        (0, I.jsx)(Sa, {
          eSaveState: this.props.PrivacyStore.GetCommentSaveState(),
        }),
      ],
    });
  }
};
(A([S], Ta.prototype, `OnSettingChanged`, null), (Ta = A([i], Ta)));
function Ea(e) {
  return (0, I.jsx)(`div`, {
    className: `ProfilePrivacyDropDown readonly`,
    children: e.strLabel,
  });
}
var Da = `QSRYwDyRJpA-`,
  Oa = `Kl4yLVAlSK4-`,
  ka = `P5Ee-D6e8fE-`,
  Aa = `_37gbYtNnaBY-`,
  ja = `FLabDw-GIVg-`,
  Ma = `RAj32F9TtcA-`,
  Na = `_19-QX3QBDv8-`,
  Pa = `yPKUSjQQsqE-`,
  Fa = `p-SRcfdbkRA-`,
  Ia = `-J2fk28lcs4-`,
  La = `U6-9u2ehi-8-`,
  Ra = `_3TjgVFdpBiM-`,
  za = `HxxypIoo01A-`,
  Ba = `VY6D0pbOuM8-`,
  Va = `kRZ2mFx0iSE-`,
  Ha = `QOvV5Hm8kmE-`,
  Ua = `SK1jYtAz1f0-`,
  Wa = t({
    BlueRedTheme: () => eo,
    BurntOrangeTheme: () => lo,
    ColorNightmareTheme: () => ho,
    CosmicTheme: () => Ka,
    DarkModeTheme: () => Ya,
    DefaultTheme: () => Ga,
    FlatGreyTheme: () => uo,
    GhostTheme: () => mo,
    GoldBurgundyTheme: () => to,
    GoldTheme: () => co,
    GoldenProfileDebutTheme: () => ro,
    GoldenWeekProfile2021Theme: () => ao,
    GreenSlimeTheme: () => po,
    Lunar2022Theme: () => vo,
    MidnightTheme: () => Ja,
    MurugiahTheme: () => go,
    MutedBlueTheme: () => so,
    MutedRedTheme: () => Qa,
    PinkTealTheme: () => Za,
    PurpleTheme: () => fo,
    SteamDeckTheme: () => yo,
    SteamGreenTheme: () => $a,
    SteelTheme: () => Xa,
    Summer2021Theme: () => oo,
    SummerTheme: () => qa,
    VibrantBlueTheme: () => no,
    Winter2021Theme: () => _o,
    WinterProfile2020Theme: () => io,
    default: () => bo,
  }),
  Ga = `_29uIKY6HXVk-`,
  Ka = `qYxOfyXHDsA-`,
  qa = `fZf6-fp5PGw-`,
  Ja = `_0qcWfIeqxHg-`,
  Ya = `EGTYGHd0kkw-`,
  Xa = `RHL-SU2yops-`,
  Za = `WT8fRbo2yOY-`,
  Qa = `nCpY1W72MW4-`,
  $a = `-fxY9plRjng-`,
  eo = `MqvIQAdSgiA-`,
  to = `_0bZPPKROH7E-`,
  no = `mDUaEVQckdI-`,
  ro = `n6Dil7HsC4g-`,
  io = `sqrA6WBozlQ-`,
  ao = `kU6APp51-8g-`,
  oo = `_-0Cg7RgIZtw-`,
  so = `jSWzo2CPn5k-`,
  co = `Wjs2GRZGgn4-`,
  lo = `C4-FzVpDsKA-`,
  uo = `VcxeAZeDRVU-`,
  fo = `-sbfakNdtMs-`,
  po = `ZVQG3mT-ouk-`,
  mo = `Ar7x0bGD5F4-`,
  ho = `-T3gxQCuMyk-`,
  go = `S80cuaoieJE-`,
  _o = `NkgHTDHRSZI-`,
  vo = `cNnWTpLutW8-`,
  yo = `yxQHh-wmkgM-`,
  bo = {
    DefaultTheme: Ga,
    CosmicTheme: Ka,
    SummerTheme: qa,
    MidnightTheme: Ja,
    DarkModeTheme: Ya,
    SteelTheme: Xa,
    PinkTealTheme: Za,
    MutedRedTheme: Qa,
    SteamGreenTheme: $a,
    BlueRedTheme: eo,
    GoldBurgundyTheme: to,
    VibrantBlueTheme: no,
    GoldenProfileDebutTheme: ro,
    WinterProfile2020Theme: io,
    GoldenWeekProfile2021Theme: ao,
    Summer2021Theme: oo,
    MutedBlueTheme: so,
    GoldTheme: co,
    BurntOrangeTheme: lo,
    FlatGreyTheme: uo,
    PurpleTheme: fo,
    GreenSlimeTheme: po,
    GhostTheme: mo,
    ColorNightmareTheme: ho,
    MurugiahTheme: go,
    Winter2021Theme: _o,
    Lunar2022Theme: vo,
    SteamDeckTheme: yo,
  },
  xo = ({ className: e, width: t, height: n, theme: r }) => {
    ((r ||= `Default`), (r += `Theme`));
    let [i, a] = Qe(),
      [o, s] = Qe();
    return (0, I.jsxs)(`svg`, {
      width: t || `401`,
      height: n || `399`,
      viewBox: `0 0 401 399`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      className: C(e, Fa, Wa[r]),
      children: [
        (0, I.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `386`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `0.5`,
          y: `13.5`,
          width: `400`,
          height: `385`,
          stroke: `black`,
          strokeOpacity: `0.5`,
        }),
        (0, I.jsx)(`rect`, {
          x: `26`,
          y: `33`,
          width: `61`,
          height: `61`,
          rx: `10`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`path`, {
          d: `M57.0246 64.052C63.4696 64.052 68.6942 58.8273 68.6942 52.3823C68.6942 45.9373 63.4696 40.7126 57.0246 40.7126C50.5796 40.7126 45.3549 45.9373 45.3549 52.3823C45.3549 58.8273 50.5796 64.052 57.0246 64.052Z`,
          fill: `#444A51`,
        }),
        (0, I.jsx)(`path`, {
          d: `M77.4319 72.8873C76.6734 68.1167 70.0792 66.5175 65.3744 65.0024C63.1235 66.918 60.2118 68.0792 57.0246 68.0792C53.8374 68.0792 50.9262 66.918 48.6753 65.0024C43.97 66.5175 37.3763 68.1167 36.6172 72.8873C35.2667 81.3728 47.8848 86.2873 57.0246 86.2873C66.1648 86.2873 78.7825 81.3728 77.4319 72.8873Z`,
          fill: `#444A51`,
        }),
        (0, I.jsx)(`rect`, {
          x: `299`,
          y: `50`,
          width: `91`,
          height: `31.882`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`rect`, {
          x: `299`,
          y: `87`,
          width: `44`,
          height: `10`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`rect`, {
          x: `346`,
          y: `87`,
          width: `44`,
          height: `10`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`rect`, {
          x: `299`,
          y: `104.091`,
          width: `91`,
          height: `240.254`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`rect`, {
          x: `103`,
          y: `57`,
          width: `82`,
          height: `6`,
          rx: `3`,
          fill: `#444A51`,
        }),
        (0, I.jsx)(`rect`, {
          x: `103`,
          y: `67`,
          width: `82`,
          height: `6`,
          rx: `3`,
          fill: `#444A51`,
        }),
        (0, I.jsx)(`rect`, {
          x: `26`,
          y: `117.755`,
          width: `260`,
          height: `87.6755`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`rect`, {
          x: `32`,
          y: `182.755`,
          width: `246`,
          height: `17`,
          rx: `3`,
          fill: `#262B31`,
        }),
        (0, I.jsx)(`rect`, {
          x: `37`,
          y: `185.755`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `37`,
          y: `192.755`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `71`,
          y: `185.755`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `71`,
          y: `192.755`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`path`, {
          d: `M26 120.755C26 119.098 27.3431 117.755 29 117.755H283C284.657 117.755 286 119.098 286 120.755V131.755H26V120.755Z`,
          fill: `#444A51`,
        }),
        (0, I.jsx)(`rect`, {
          x: `35`,
          y: `120.755`,
          width: `37`,
          height: `7`,
          rx: `3`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `103`,
          y: `38.0502`,
          width: `57`,
          height: `11.3864`,
          rx: `3`,
          fill: `#4F555C`,
        }),
        (0, I.jsx)(`rect`, {
          x: `299`,
          y: `32`,
          width: `35`,
          height: `11`,
          rx: `3`,
          fill: `#4F555C`,
        }),
        (0, I.jsx)(`rect`, {
          x: `26`,
          y: `214.54`,
          width: `260`,
          height: `167.381`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, I.jsx)(`rect`, {
          x: `32`,
          y: `358.54`,
          width: `246`,
          height: `17`,
          rx: `3`,
          fill: `#262B31`,
        }),
        (0, I.jsx)(`rect`, {
          x: `37`,
          y: `361.54`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `37`,
          y: `368.54`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `71`,
          y: `361.54`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `71`,
          y: `368.54`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`path`, {
          d: `M26 217.54C26 215.883 27.3431 214.54 29 214.54H283C284.657 214.54 286 215.883 286 217.54V228.54H26V217.54Z`,
          fill: `#444A51`,
        }),
        (0, I.jsx)(`rect`, {
          x: `35`,
          y: `217.54`,
          width: `37`,
          height: `7`,
          rx: `3`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`circle`, {
          cx: `347.5`,
          cy: `37.5`,
          r: `8.5`,
          stroke: `#4F555C`,
          strokeWidth: `2`,
        }),
        (0, I.jsx)(`rect`, {
          x: `41`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `36`,
          y: `241`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `36`,
          y: `283`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `161`,
          y: `241`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `161`,
          y: `283`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `91`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `141`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `191`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          x: `241`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, I.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `382`,
          fill: `var(--gradient-background)`,
          fillOpacity: `0.23`,
          className: Ra,
        }),
        (0, I.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `382`,
          fill: a,
          className: Ia,
        }),
        (0, I.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `382`,
          fill: s,
          className: La,
        }),
        (0, I.jsxs)(`defs`, {
          children: [
            (0, I.jsxs)(`radialGradient`, {
              id: i,
              cx: `0`,
              cy: `0`,
              r: `1`,
              gradientUnits: `userSpaceOnUse`,
              gradientTransform: `translate(11 126) rotate(9.77175) scale(182.65 191.735)`,
              children: [
                (0, I.jsx)(`stop`, { stopColor: `var(--gradient-left)` }),
                (0, I.jsx)(`stop`, {
                  offset: `1`,
                  stopColor: `var(--gradient-background-left)`,
                  stopOpacity: `0`,
                }),
              ],
            }),
            (0, I.jsxs)(`radialGradient`, {
              id: o,
              cx: `0`,
              cy: `0`,
              r: `1`,
              gradientUnits: `userSpaceOnUse`,
              gradientTransform: `translate(385 148) rotate(-164.809) scale(312.935 328.499)`,
              children: [
                (0, I.jsx)(`stop`, {
                  offset: `0.348958`,
                  stopColor: `var(--gradient-right)`,
                }),
                (0, I.jsx)(`stop`, {
                  offset: `1`,
                  stopColor: `var(--gradient-background-right)`,
                  stopOpacity: `0`,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  So = i(({ ProfileItems: e, Background: t, theme: n }) => {
    t === void 0 && (t = e.GetEquippedBackground());
    let r = t && t.movie_webm,
      i = t && t.tiled,
      a = t ? V(t) : Jn(null),
      o = t && !i && e.GetEquippedBackgroundFlags() == 1,
      s = null;
    return (
      i &&
        (s = {
          backgroundImage: `url( ${a} )`,
          backgroundRepeat: `repeat`,
          backgroundSize: `125px 125px`,
        }),
      (0, I.jsxs)(`div`, {
        style: s,
        className: za,
        children: [
          (0, I.jsx)(`div`, {
            className: Ba,
            children: (0, I.jsxs)(`div`, {
              className: C(Va, o && `F98tMVD1fsI-`),
              children: [
                !r && !i && (0, I.jsx)(`img`, { src: a }),
                r && (0, I.jsx)(oa, { Background: t, className: `` }),
              ],
            }),
          }),
          (0, I.jsx)(`div`, {
            className: Ha,
            children: (0, I.jsx)(`div`, {
              className: Ua,
              children: (0, I.jsx)(xo, {
                className: Fa,
                width: `50%`,
                height: `auto`,
                theme: n,
              }),
            }),
          }),
        ],
      })
    );
  }),
  Co = class extends F.Component {
    state = { equipFlags: 0 };
    async componentDidMount() {
      let { ProfileItems: e } = this.props;
      await e.GetEquippedBackground();
    }
    async CommitChanges(e) {
      let { ProfileItems: t } = this.props;
      return t.SetAndEquipProfileBackground(e);
    }
    RevertChanges() {
      let { ProfileItems: e } = this.props;
      e.RevertBackgroundChanges();
    }
    render() {
      let { ProfileItems: e, ProfileTheme: t } = this.props;
      e.GetEquippedBackground();
      let n = e.GetEquippedProfileModifier();
      return (
        n && !e.BIsLegacyGoldenProfile(n.appid) && (n = null),
        (0, I.jsxs)(P, {
          "flow-children": `column`,
          children: [
            (0, I.jsx)(N, { children: E(`#Profile_Edit_ChooseBackground`) }),
            (0, I.jsx)(T, {
              children: E(`#Profile_Edit_Background_Instructions`),
            }),
            (0, I.jsx)(J, {
              className: void 0,
              getSearchFields: la,
              getItems: () => e.GetOwnedBackgrounds(),
              fnCommitChanges: this.CommitChanges,
              fnRevertChanges: this.RevertChanges,
              ItemComponent: ko,
              RenderDefaultComponent: ({ onSelected: e, active: t }) =>
                (0, I.jsx)(Ao, { Modifier: n, onSelected: e, active: t }),
              ActiveItem: e.GetEquippedBackground(),
              fnIsSameItem: ua,
              fnRenderPreview: (n) =>
                (0, I.jsx)(Do, {
                  Background: n,
                  ProfileItems: e,
                  theme: t.ActiveTheme.theme_id,
                }),
            }),
          ],
        })
      );
    }
  };
(A([S], Co.prototype, `CommitChanges`, null),
  A([S], Co.prototype, `RevertChanges`, null),
  (Co = A([i], Co)));
var wo = Co,
  To = ({ label: e, currentFlag: t, flag: n, onSelect: r }) =>
    (0, I.jsx)(`div`, {
      className: Pa,
      children: (0, I.jsx)(Xe, {
        checked: t == n,
        disabled: t == n,
        onChange: (e) => {
          e && r(n);
        },
        label: e,
      }),
    }),
  Eo = class extends F.Component {
    OnChange(e) {
      this.props.ProfileItems.SetEquippedBackgroundFlags(e);
    }
    render() {
      let { Background: e, ProfileItems: t } = this.props,
        n = !e || e?.tiled,
        r = t.GetEquippedBackgroundFlags(),
        i = (0, I.jsx)(To, {
          flag: 1,
          currentFlag: r,
          onSelect: this.OnChange,
          label: E(`#Profile_Edit_BackgroundEquipFlag_FullScreen`),
        }),
        a = (0, I.jsx)(To, {
          flag: 0,
          currentFlag: r,
          onSelect: this.OnChange,
          label: E(`#Profile_Edit_BackgroundEquipFlag_OriginalSize`),
        });
      return (0, I.jsxs)(`div`, {
        className: C(Na, n && `EEHeOyj-UvI-`),
        children: [i, a],
      });
    }
  };
(A([S], Eo.prototype, `OnChange`, null), (Eo = A([i], Eo)));
var Do = i(({ Background: e, ProfileItems: t, theme: n }) =>
    (0, I.jsxs)(`div`, {
      children: [
        (0, I.jsx)(
          So,
          { Background: e, ProfileItems: t, theme: n },
          e && e.communityitemid,
        ),
        (0, I.jsx)(Eo, { ProfileItems: t, Background: e }),
      ],
    }),
  ),
  Oo = ({ Background: e, children: t }) =>
    (0, I.jsxs)(`div`, {
      className: ka,
      children: [
        (0, I.jsxs)(`div`, {
          children: [
            (0, I.jsx)(`div`, {
              className: ja,
              children: e
                ? e.item_title
                : E(`#Profile_Edit_DefaultBlankBackground`),
            }),
            (0, I.jsx)(`div`, { className: Ma, children: e && e.app_name }),
          ],
        }),
        t,
      ],
    }),
  ko = ({ Item: e, onSelected: t, active: n, children: r }) => {
    let i = !!e.movie_webm;
    return (0, I.jsxs)(P, {
      className: C(Da, i && `pP080g2uFFI-`, n && `_0xpO9duoOyE-`),
      onClick: t,
      onActivate: t,
      onGamepadFocus: i ? ca : void 0,
      onMouseEnter: i ? sa : void 0,
      focusable: !0,
      children: [
        (0, I.jsxs)(`div`, {
          className: Oa,
          children: [
            (0, I.jsx)(`img`, { src: Jn(e), loading: `lazy` }),
            (0, I.jsx)(oa, { Background: e, className: Aa, small: !0 }),
          ],
        }),
        (0, I.jsx)(Oo, { Background: e, children: r }),
      ],
    });
  },
  Ao = ({ onSelected: e, Modifier: t, active: n, children: r }) =>
    t
      ? (0, I.jsx)(ko, { Item: t, onSelected: e, active: n })
      : (0, I.jsxs)(`div`, {
          className: C(Da, n && `_0xpO9duoOyE-`),
          onClick: e,
          children: [
            (0, I.jsx)(`div`, {
              className: Oa,
              children: (0, I.jsx)(`img`, { src: Jn(null) }),
            }),
            (0, I.jsx)(Oo, { Background: null, children: r }),
          ],
        });
function jo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mo(e) {
  let { navigate: t, onClick: n, ...r } = e,
    { target: i } = r,
    a = (e) => {
      try {
        n && n(e);
      } catch (t) {
        throw (e.preventDefault(), t);
      }
      e.defaultPrevented ||
        e.button !== 0 ||
        (i && i !== `_self`) ||
        jo(e) ||
        (e.preventDefault(), t());
    };
  return (0, I.jsx)(b, { ...r, onClick: a });
}
function No(e) {
  return (0, I.jsx)(ne, { component: Mo, ...e });
}
var Po = `J4WPFftrUDc-`,
  Fo = `zP-WPH7p35M-`,
  Io = `vTcFSSwtmjE-`,
  Lo = `mLQTg1nAnzM-`,
  Ro = `yClg36QuOdA-`,
  zo = `c43-A-W1A-c-`,
  Bo = `yew8ZahHGxM-`,
  Vo = `mayzuiN-AE4-`;
function Ho(e) {
  let { root: t, currentPath: n, linksAvailable: r, children: i } = e;
  return (0, I.jsx)(Ze, {
    navID: `ProfileEditShell`,
    children: (0, I.jsx)(P, {
      children: (0, I.jsxs)(P, {
        className: Po,
        "flow-children": `row`,
        navEntryPreferPosition: Oe.FIRST,
        children: [
          (0, I.jsx)(Uo, { root: t, currentPath: n, linksAvailable: r }),
          (0, I.jsx)(`div`, {
            className: zo,
            children: (0, I.jsx)(w, { children: i }),
          }),
        ],
      }),
    }),
  });
}
var Uo = ({ root: e, currentPath: t, linksAvailable: n }) => {
    let r = { root: e, currentPath: t },
      i = Ms,
      a = ke();
    return (0, I.jsxs)(P, {
      className: Fo,
      "flow-children": `column`,
      children: [
        (0, I.jsx)(`div`, {
          className: Vo,
          children: (0, I.jsx)(b, {
            href: R.ProfileURL,
            children: E(`#Profile_ReturnToYourProfile`),
          }),
        }),
        (0, I.jsx)(`div`, { className: Bo }),
        (0, I.jsx)($, {
          ...r,
          to: i.Info(),
          children: E(`#Profile_Edit_BasicInfo`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.Avatar(),
          children: E(`#Profile_FieldAvatar`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.Background(),
          children: E(`#Profile_FieldProfileBackground`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.MiniProfile(),
          children: E(`#Profile_Edit_MiniProfile`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.Theme(),
          children: E(`#Profile_Edit_Theme`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.ProfileModifier(),
          fnVisible: n.ProfileModifierAvailable,
          children: E(`#Profile_Edit_ProfileModifier`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.FavoriteBadge(),
          fnVisible: n.BadgesAvailable,
          children: E(`#Profile_Edit_FavoriteBadge`),
        }),
        (0, I.jsx)($, {
          ...r,
          to: i.FavoriteGroup(),
          fnVisible: n.GroupsAvailable,
          children: E(`#Profile_Edit_FavoriteGroup`),
        }),
        !a &&
          (0, I.jsx)($, {
            ...r,
            to: i.Showcases(),
            fnVisible: n.ShowcasesAvailable,
            children: E(`#Profile_Edit_FeaturedShowcase`),
          }),
        (0, I.jsx)(`div`, { className: Bo }),
        (0, I.jsx)($, {
          ...r,
          to: i.Privacy(),
          children: E(`#Profile_EditPrivacySettings`),
        }),
        (0, I.jsx)(`div`, {
          className: Ro,
          children: (0, I.jsx)(b, {
            className: C(Lo),
            href: `${k.STORE_BASE_URL}points/`,
            children: E(`#SteamPointsShop`),
          }),
        }),
      ],
    });
  },
  $ = i(
    ({
      root: e,
      currentPath: t,
      to: n,
      fnVisible: r,
      fnDisabled: i,
      children: a,
    }) => {
      let o = `${e}${n}`,
        s = o == t;
      if (!s && r && !r()) return null;
      let c = i && i(),
        l = !!c,
        u;
      return (
        c && (u = (e) => e.preventDefault()),
        (0, I.jsx)(No, {
          className: C(Io, s && `h48mSlphF-g-`, l && `_72jtp-06-cI-`),
          to: o,
          onClick: u,
          title: c,
          children: a,
        })
      );
    },
  ),
  Wo = `aA-d0b9NLbU-`,
  Go = `E1gp-BIM-P0-`,
  Ko = `NbnlI0mjp-A-`,
  qo = `xxKk3UzmBl0-`,
  Jo = `mgtdvbuRSRY-`,
  Yo = `mQr0QbokC74-`,
  Xo = class extends F.Component {
    state = { bDialogActive: !1 };
    ShowDialog() {
      this.setState({ bDialogActive: !0 });
    }
    HideDialog() {
      this.setState({ bDialogActive: !1 });
    }
    render() {
      let { ProfileItems: e } = this.props;
      return e.BHasAnyProfileModifiers()
        ? (0, I.jsx)(es, {
            active: this.state.bDialogActive,
            ProfileItems: e,
            onDismiss: this.HideDialog,
          })
        : null;
    }
  };
(A([S], Xo.prototype, `ShowDialog`, null),
  A([S], Xo.prototype, `HideDialog`, null),
  (Xo = A([i], Xo)));
var Zo = Xo,
  Qo = i(({ ProfileItems: e }) => {
    let t = e.GetProfileModifierCSSURL();
    return t
      ? (0, I.jsx)(`link`, { rel: `stylesheet`, type: `text/css`, href: t })
      : null;
  }),
  $o = ({ ProfileModifier: e }) => {
    let t = e ? V(e) : `${k.COMMUNITY_CDN_URL}public/images/trans.gif`,
      n = e ? e.item_title : E(`#Profile_Edit_DefaultBlankBackground`),
      r = e ? e.app_name : ``;
    return (0, I.jsx)(I.Fragment, {
      children: (0, I.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, I.jsx)(`img`, { className: void 0, src: t }),
          (0, I.jsx)(`div`, { className: void 0, children: n }),
          (0, I.jsx)(`div`, { className: void 0, children: r }),
        ],
      }),
    });
  },
  es = class extends F.Component {
    OnDismiss() {
      (this.props.ProfileItems.RevertProfileModifierChanges(),
        this.props.onDismiss());
    }
    render() {
      let { ProfileItems: e } = this.props;
      return (0, I.jsxs)(I.Fragment, {
        children: [
          (0, I.jsx)(N, { children: E(`#Profile_Edit_ProfileModifier`) }),
          (0, I.jsx)(T, {
            children: E(`#Profile_Edit_ProfileModifier_Instructions`),
          }),
          (0, I.jsx)(J, {
            fnRevertChanges: this.OnDismiss,
            getSearchFields: la,
            getItems: () => e.GetOwnedProfileModifiers(),
            fnCommitChanges: async (t) => (
              e.SetEquippedProfileModifier(t),
              e.CommitProfileModifierChanges()
            ),
            ItemComponent: ts,
            RenderDefaultComponent: ({ onSelected: e, active: t }) =>
              (0, I.jsx)(ns, { onSelected: e, active: t }),
            ActiveItem: e.GetEquippedProfileModifier(),
            fnIsSameItem: ua,
            fnRenderPreview: (e) => (0, I.jsx)($o, { ProfileModifier: e }),
          }),
        ],
      });
    }
  };
(A([S], es.prototype, `OnDismiss`, null), (es = A([i], es)));
var ts = ({ Item: e, onSelected: t, children: n, active: r }) =>
    (0, I.jsxs)(P, {
      className: C(Wo, r && `YGzcD6kqN6Q-`),
      onActivate: t,
      children: [
        (0, I.jsx)(`div`, {
          className: Go,
          children: (0, I.jsx)(`img`, { src: V(e), loading: `lazy` }),
        }),
        (0, I.jsxs)(`div`, {
          className: Ko,
          children: [
            (0, I.jsxs)(`div`, {
              children: [
                (0, I.jsx)(`div`, { className: Jo, children: e.item_title }),
                (0, I.jsx)(`div`, { className: Yo, children: e.app_name }),
              ],
            }),
            n,
          ],
        }),
      ],
    }),
  ns = ({ onSelected: e, children: t, active: n }) =>
    (0, I.jsxs)(P, {
      className: C(Wo, n && `YGzcD6kqN6Q-`),
      onActivate: e,
      children: [
        (0, I.jsx)(`div`, {
          className: C(Go, qo),
          children: (0, I.jsx)(`img`, {
            src: `${k.COMMUNITY_CDN_URL}public/images/trans.gif`,
            loading: `lazy`,
          }),
        }),
        (0, I.jsxs)(`div`, {
          className: Ko,
          children: [
            (0, I.jsxs)(`div`, {
              children: [
                (0, I.jsx)(`div`, {
                  className: Jo,
                  children: E(`#ProfileModifier_DisabledTitle`),
                }),
                (0, I.jsx)(`div`, { className: Yo }),
              ],
            }),
            t,
          ],
        }),
      ],
    }),
  rs = `kqlAKTWIQw0-`,
  is = `_9719Oes8HVA-`,
  as = `GqC7xP5CEiY-`,
  os = `deAy9YKRyPY-`,
  ss = `W0IKlgfOaV0-`,
  cs = `_1cp-Jw42ztI-`,
  ls = `aDpnBOMtY4E-`,
  us = `vyS-ctsmzyY-`,
  ds = `_9HQVMqikVhI-`,
  fs = `U-fHA0UJmho-`,
  ps = `NYNhg0dRPFY-`,
  ms = class extends F.Component {
    state = { bSaving: !1, strHTMLError: `` };
    async CommitChanges(e) {
      let { ProfileTheme: t } = this.props;
      (this.setState({ bSaving: !0, strHTMLError: `` }),
        t.SetActiveTheme(e.theme_id));
      let n = await t.CommitActiveTheme();
      return (
        n != 1 &&
          this.setState({
            strHTMLError: E(`#ConnectionTrouble_FailedToConnect`),
          }),
        this.setState({ bSaving: !1 }),
        n
      );
    }
    RevertChanges() {
      let { ProfileTheme: e } = this.props;
      (this.setState({ strHTMLError: `` }), e.RevertActiveTheme());
    }
    render() {
      let { ProfileTheme: e, ProfileItems: t } = this.props,
        n = !!t.GetEquippedProfileModifier();
      return (0, I.jsxs)(I.Fragment, {
        children: [
          (0, I.jsx)(N, { children: E(`#Profile_Edit_Theme`) }),
          (0, I.jsx)(T, { children: E(`#Profile_Edit_Theme_Instructions`) }),
          (0, I.jsx)(Y, { strHTMLError: this.state.strHTMLError }),
          n && (0, I.jsx)(bs, {}),
          (0, I.jsx)(J, {
            getSearchFields: null,
            ActiveItem: e.ActiveTheme,
            getItems: async () => e.AvailableThemes,
            fnCommitChanges: this.CommitChanges,
            fnRevertChanges: this.RevertChanges,
            fnRenderPreview: (e) =>
              (0, I.jsx)(_s, { Theme: e, ProfileItems: t }),
            fnIsSameItem: vs,
            ItemComponent: ys,
            classNameItemPicker: rs,
            className: C(n && `_4fbbCwyR3Ms-`),
          }),
        ],
      });
    }
  };
(A([S], ms.prototype, `CommitChanges`, null),
  A([S], ms.prototype, `RevertChanges`, null),
  (ms = A([i], ms)));
var hs = ms,
  gs = ({ Theme: e, children: t }) => {
    let n;
    return (
      (n =
        typeof e == `string`
          ? e + `Theme`
          : (e?.theme_id || `Default`) + `Theme`),
      (0, I.jsx)(`div`, { className: Wa[n], children: t })
    );
  },
  _s = i(({ Theme: e, ProfileItems: t }) =>
    (0, I.jsx)(`div`, {
      className: is,
      children: (0, I.jsx)(So, { ProfileItems: t, theme: e.theme_id }),
    }),
  ),
  vs = (e, t) => (e && e.theme_id) === (t && t.theme_id),
  ys = ({ Item: e, onSelected: t, active: n, children: r }) => {
    let i = e.theme_id + `Theme`,
      a = `ThemeOption${i}`;
    return (0, I.jsxs)(P, {
      className: C(ss, t && `Y8DR4WHSYXo-`, n && `r9N13F0lLg0-`, Wa[i]),
      onActivate: t,
      children: [
        (0, I.jsx)(`div`, {
          className: us,
          children: (0, I.jsxs)(`svg`, {
            className: C(ls),
            viewBox: `0 0 382 382`,
            width: `100%`,
            height: `100%`,
            children: [
              (0, I.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `var(--edit-background)`,
                className: ds,
              }),
              (0, I.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `var(--gradient-background)`,
                fillOpacity: `0.23`,
                className: void 0,
              }),
              (0, I.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `url(#${a}paint0_radial)`,
                className: fs,
              }),
              (0, I.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `url(#${a}paint1_radial)`,
                className: ps,
              }),
              (0, I.jsxs)(`defs`, {
                children: [
                  (0, I.jsxs)(`radialGradient`, {
                    id: `${a}paint0_radial`,
                    cx: `0`,
                    cy: `0`,
                    r: `1`,
                    gradientUnits: `userSpaceOnUse`,
                    gradientTransform: `translate(11 126) rotate(9.77175) scale(182.65 191.735)`,
                    children: [
                      (0, I.jsx)(`stop`, { stopColor: `var(--gradient-left)` }),
                      (0, I.jsx)(`stop`, {
                        offset: `1`,
                        stopColor: `var(--gradient-background-left)`,
                        stopOpacity: `0`,
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`radialGradient`, {
                    id: `${a}paint1_radial`,
                    cx: `0`,
                    cy: `0`,
                    r: `1`,
                    gradientUnits: `userSpaceOnUse`,
                    gradientTransform: `translate(385 148) rotate(-164.809) scale(312.935 328.499)`,
                    children: [
                      (0, I.jsx)(`stop`, {
                        offset: `0.348958`,
                        stopColor: `var(--gradient-right)`,
                      }),
                      (0, I.jsx)(`stop`, {
                        offset: `1`,
                        stopColor: `var(--gradient-background-right)`,
                        stopOpacity: `0`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, I.jsxs)(`div`, {
          className: cs,
          children: [
            (0, I.jsx)(`div`, { className: void 0, children: e.title }),
            r,
          ],
        }),
      ],
    });
  },
  bs = ({ children: e }) =>
    (0, I.jsx)(`div`, {
      className: as,
      children: (0, I.jsx)(`div`, {
        className: os,
        children: E(`#Profile_Edit_GoldenProfileOverridesTheme`),
      }),
    }),
  xs = class extends F.Component {
    m_refDiv = F.createRef();
    state = { bSaving: !1, strHTMLError: `` };
    OnSubmit(e) {
      (e.preventDefault(), this.CommitChanges(e.currentTarget));
    }
    async CommitChanges(e) {
      this.setState({ bSaving: !0, strHTMLError: `` });
      let t = await Qn(`showcases`, new FormData(e));
      (t.strHTMLError
        ? this.setState({ strHTMLError: t.strHTMLError })
        : this.setState({ strHTMLError: `` }),
        this.setState({ bSaving: !1 }));
    }
    RevertChanges() {
      window.location.href = R.ProfileURL;
    }
    componentDidMount() {
      this.props.elShowcases &&
        ((this.props.elShowcases.style.display = ``),
        this.m_refDiv.current.appendChild(this.props.elShowcases));
    }
    render() {
      let { bSaving: e, strHTMLError: t } = this.state,
        { ProfileTheme: n } = this.props;
      return (0, I.jsx)(gs, {
        Theme: n.ActiveTheme,
        children: (0, I.jsxs)(`form`, {
          onSubmit: this.OnSubmit,
          children: [
            (0, I.jsx)(N, { children: E(`#Profile_Edit_FeaturedShowcase`) }),
            (0, I.jsx)(T, {
              children: ot(
                `#Profile_Edit_Showcase_Instructions`,
                (0, I.jsx)(`a`, {
                  href: k.STORE_BASE_URL + `points/shop/profileshowcases`,
                }),
              ),
            }),
            (0, I.jsx)(Y, { strHTMLError: t }),
            (0, I.jsx)(`div`, { ref: this.m_refDiv }),
            (0, I.jsx)(q, { onCancel: this.RevertChanges, disabled: e }),
          ],
        }),
      });
    }
  };
(A([S], xs.prototype, `OnSubmit`, null),
  A([S], xs.prototype, `RevertChanges`, null));
var Ss, Cs, ws;
async function Ts(e) {
  let t = ct(`config`, `profile_config`);
  (t && Object.assign(R, t),
    (Ss = new tr(
      ct(`profile-edit`, `profile_edit_config`),
      ct(`profile-badges`, `profile_edit_config`),
      e,
    )),
    y(k.EREALM) || Ss.Profile.GroupList.GetUserGroups(),
    (Cs = document.getElementById(`showcases`)));
}
function Es(e) {
  let [t, n] = F.useState(!1),
    r = ve();
  if (
    (F.useEffect(() => {
      ((ws ||= Ts(r)), ws.then(() => n(!0)));
    }, [r]),
    F.useLayoutEffect(() => {
      if (t)
        for (let e of [`profile_edit_main_content`, `profile_edit_leftcol`]) {
          let t = document.getElementById(e);
          t && (t.style.visibility = ``);
        }
    }, [t]),
    !t)
  )
    return null;
  let i = e.match.url,
    a = Ss,
    { Profile: o, ProfileItems: s, ProfileTheme: c, EmoticonStore: l } = a,
    u = Ms;
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(Qo, { ProfileItems: s }),
      (0, I.jsx)(Di, { Profile: o }),
      (0, I.jsx)(ei, { Profile: o, ProfileItems: s }),
      (0, I.jsx)(Ho, {
        root: i,
        currentPath: e.location.pathname,
        linksAvailable: {
          ProfileModifierAvailable: () => s.BHasAnyProfileModifiers(),
          BadgesAvailable: () =>
            !y(k.EREALM) && a.ProfileBadges.Badges.length > 0,
          GroupsAvailable: () =>
            !y(k.EREALM) &&
            (!o.GroupList.BGroupsLoaded() || o.GroupList.BHasAnyGroups()),
          ShowcasesAvailable: () => Cs != null,
        },
        children: (0, I.jsxs)(f, {
          children: [
            (0, I.jsx)(h, {
              path: `${i}${u.Info()}`,
              children: (0, I.jsx)(yi, { Profile: o, EmoticonStore: l }),
            }),
            (0, I.jsx)(h, {
              path: `${i}${u.Avatar()}`,
              children: (0, I.jsx)($r, {
                Profile: o,
                ProfileItems: s,
                OGGAvatars: a.OGGAvatarStore,
                AvatarHistory: a.AvatarHistory,
              }),
            }),
            (0, I.jsx)(h, {
              path: `${i}${u.Background()}`,
              children: (0, I.jsx)(wo, { ProfileTheme: c, ProfileItems: s }),
            }),
            (0, I.jsx)(h, {
              path: `${i}${u.MiniProfile()}`,
              children: (0, I.jsx)(fa, { ProfileEdit: a }),
            }),
            (0, I.jsx)(h, {
              path: `${i}${u.Theme()}`,
              children: (0, I.jsx)(hs, { ProfileTheme: c, ProfileItems: s }),
            }),
            (0, I.jsx)(h, {
              path: `${i}${u.ProfileModifier()}`,
              children: (0, I.jsx)(Zo, { ProfileItems: s }),
            }),
            !y(k.EREALM) &&
              (0, I.jsx)(h, {
                path: `${i}${u.FavoriteBadge()}`,
                children: (0, I.jsx)(Li, { Badges: a.ProfileBadges }),
              }),
            !y(k.EREALM) &&
              (0, I.jsx)(h, {
                path: `${i}${u.FavoriteGroup()}`,
                children: (0, I.jsx)(Ji, { Profile: o }),
              }),
            (0, I.jsx)(h, {
              path: `${i}${u.Privacy()}`,
              children: (0, I.jsx)(_a, { PrivacyStore: a.ProfilePrivacy }),
            }),
            (0, I.jsx)(h, {
              path: `${i}${u.Showcases()}`,
              children: (0, I.jsx)(xs, { elShowcases: Cs, ProfileTheme: c }),
            }),
            (0, I.jsx)(h, {
              children: (0, I.jsx)(p, { to: `${i}${u.Info()}` }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ds(e) {
  let [t, n] = (0, F.useState)(!1),
    r = Os(e.steamid),
    i = ks(e.steamid),
    a = (0, F.useRef)(null),
    o = (0, F.useRef)(null),
    [s, c] = (0, F.useState)(!1),
    l = oe(e.steamid),
    u = async () => {
      if ((c(!0), !a.current)) return;
      let e = a.current.value,
        t = parseInt(e) * 86400,
        r = Math.floor(new Date().getTime() / 1e3) + t,
        s = o.current?.checked ?? !1;
      (await i.mutateAsync({ rtCooldownEnds: r, bClearOpenReports: s }),
        n(!1),
        c(!1));
    },
    d = async () => {
      (await i.mutateAsync({ rtCooldownEnds: 0 }), n(!1));
    },
    f = ``;
  if (r.isSuccess && r.data > 0) {
    let e = Math.floor((r.data - new Date().getTime() / 1e3) / 86400);
    f = ` ` + D.Localize(`#setcooldown_cooldownsummary`, e);
  }
  return (0, I.jsxs)(I.Fragment, {
    children: [
      (0, I.jsx)(Ie, {
        active: t,
        children: (0, I.jsxs)(ze, {
          onCancel: () => n(!1),
          onOK: u,
          strTitle: D.Localize(`#setcooldown_dialogtitle`),
          strDescription: D.Localize(`#setcooldown_dialogdescription`),
          strOKButtonText: D.Localize(`#setcooldown_setbutton`),
          bOKDisabled: s,
          children: [
            r.isLoading &&
              (0, I.jsxs)(`p`, {
                children: [
                  (0, I.jsx)(se, { size: `small` }),
                  ` `,
                  D.Localize(`#setcooldown_loading`),
                ],
              }),
            r.isError &&
              (0, I.jsx)(`p`, {
                children: D.Localize(`#setcooldown_errorloading`),
              }),
            r.isSuccess &&
              r.data > 0 &&
              (0, I.jsx)(`p`, {
                children: D.Localize(
                  `#setcooldown_expireson`,
                  Ge(r.data, !1, ``),
                ),
              }),
            r.isSuccess &&
              r.data === 0 &&
              (0, I.jsx)(`p`, {
                children: D.Localize(`#setcooldown_nocooldown`),
              }),
            l.isSuccess &&
              !!l.data &&
              (0, I.jsx)(I.Fragment, {
                children: (0, I.jsx)(`p`, {
                  children: D.Localize(
                    `#setcooldown_statssummary`,
                    l.data.total_acquitted_reports,
                    l.data.total_reports,
                    l.data.acquitted_reports_in_last_week,
                    l.data.reports_in_last_week,
                  ),
                }),
              }),
            (0, I.jsxs)(`p`, {
              children: [
                (0, I.jsxs)(`label`, {
                  children: [
                    D.Localize(`#setcooldown_newcooldownlabel`),
                    ` `,
                    (0, I.jsx)(`input`, {
                      type: `number`,
                      min: `0`,
                      placeholder: D.Localize(`#setcooldown_days`),
                      ref: a,
                    }),
                  ],
                }),
                (0, I.jsxs)(`p`, {
                  children: [
                    (0, I.jsx)(`input`, { type: `checkbox`, ref: o }),
                    ` `,
                    D.Localize(`#setcooldown_clearopenreports`),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  disabled: s,
                  onClick: d,
                  children: D.Localize(`#setcooldown_clearcooldown`),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, I.jsxs)(`a`, {
        className: `popup_menu_item`,
        onClick: () => n(!0),
        children: [`Reporting Cooldown`, f],
      }),
    ],
  });
}
function Os(e) {
  let t = We();
  return c({
    queryKey: [`reportercooldown`, e],
    queryFn: async () => {
      let n = M.Init(ie);
      n.Body().set_steamid(e);
      let r = await _.GetReporterCooldown(t, n);
      if (!r.BSuccess()) throw Error(`EResult ` + r.GetEResult());
      return r.Body().rtime_cooldown_ends() ?? 0;
    },
  });
}
function ks(e) {
  let t = We(),
    n = ee();
  return s({
    mutationFn: async (n) => {
      let r = M.Init(ae);
      (r.Body().set_steamid(e),
        r.Body().set_rtime_cooldown_ends(n.rtCooldownEnds),
        n.bClearOpenReports !== void 0 &&
          r.Body().set_acquit_unresolved_reports(n.bClearOpenReports));
      let i = await _.UpdateReporterCooldown(t, r);
      if (!i.BSuccess()) throw Error(`EResult ` + i.GetEResult());
    },
    onSuccess: async () => {
      await n.invalidateQueries({ queryKey: [`reportercooldown`, e] });
    },
  });
}
var As = t({ ProfileEditRoutes: () => Ms, default: () => Ps }),
  js = {
    ProfileEdit: () => `edit`,
    ProfilePrivacy: () => `edit/settings`,
    Games: () => `games`,
    ItemCollection: () => `itemcollection`,
  },
  Ms = {
    Info: () => `/info`,
    Avatar: () => `/avatar`,
    Background: () => `/background`,
    MiniProfile: () => `/miniprofile`,
    Theme: () => `/theme`,
    ProfileModifier: () => `/goldenprofile`,
    FavoriteBadge: () => `/favoritebadge`,
    FavoriteGroup: () => `/favoritegroup`,
    Privacy: () => `/settings`,
    Showcases: () => `/showcases`,
  };
function Ns(e) {
  return (0, I.jsx)(`div`, { children: (0, I.jsx)(_e, { targetType: 3 }) });
}
function Ps(e) {
  let t = e.match.path;
  return (0, I.jsxs)(f, {
    children: [
      (0, I.jsx)(h, {
        path: `${t}/${js.ProfileEdit()}`,
        render: (e) => (0, I.jsx)(Es, { ...e }),
      }),
      (0, I.jsx)(h, {
        path: `${t}`,
        render: (e) =>
          (0, I.jsx)(st, {
            config: {
              "profile-rewards": () => (0, I.jsx)(Ns, { ...e }),
              "reporter-cooldown-dialog": (e) => (0, I.jsx)(Ds, { ...e }),
            },
          }),
      }),
    ],
  });
}
export { Ms as ProfileEditRoutes, Ps as default, yt as n, As as t };

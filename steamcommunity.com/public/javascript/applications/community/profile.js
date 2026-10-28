/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./avatarcrop.js?contenthash=DEwLYoyI",
      "./rolldown-runtime.js?contenthash=DbX3T1YK",
      "./libraries.js?contenthash=eLY4-d-j",
      "./main.js?contenthash=B3VTzWgT",
      "../../../css/applications/community/main.css?contenthash=UBZkTRH6",
      "../../../css/applications/community/avatarcrop.css?contenthash=DYAWEK4g",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import {
  A as n,
  B as r,
  C as i,
  D as a,
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
} from "./libraries.js?contenthash=eLY4-d-j";
import {
  d as ie,
  i as ae,
  l as oe,
} from "./steammessages_contentmoderation_pb.js?contenthash=3et6KcnX";
import { l as se } from "./moderationqueries.js?contenthash=CrXH57vE";
import { t as ce } from "./throbber.js?contenthash=COAox7wG";
import {
  _ as le,
  f as ue,
  g as de,
  n as fe,
  t as pe,
} from "./emoticonbutton.js?contenthash=Du6540NS";
import { n as me } from "./personautils.js?contenthash=CIwFJgE6";
import "./steammessages_loyalty_rewards_pb.js?contenthash=B1bOv86Q";
import { n as he } from "./appinfostore.js?contenthash=DBYLTPeb";
import { n as _, t as ge } from "./persona.js?contenthash=r9Nju3Jy";
import { n as _e } from "./storeitemhooks.js?contenthash=CGmS4OXI";
import { n as ve } from "./awardmodal.js?contenthash=Dy7YSQDd";
import {
  $i as ye,
  $o as v,
  $p as be,
  Ai as xe,
  Bm as y,
  Ci as Se,
  Di as Ce,
  E as we,
  Ei as Te,
  Et as Ee,
  Fi as b,
  Fs as De,
  Gi as Oe,
  Hf as ke,
  Ho as Ae,
  Io as je,
  Jf as Me,
  Jo as Ne,
  Kd as x,
  Ko as S,
  Lh as Pe,
  Lo as Fe,
  Mi as Ie,
  N as Le,
  Oi as Re,
  Pu as C,
  Qf as ze,
  Rf as w,
  Rh as T,
  Si as Be,
  Su as E,
  Tl as Ve,
  Tu as He,
  Uf as Ue,
  Wf as We,
  Wo as Ge,
  Xd as Ke,
  Yp as qe,
  Zd as Je,
  Zp as Ye,
  as as Xe,
  bt as Ze,
  bu as D,
  c as Qe,
  cp as $e,
  et as O,
  eu as et,
  gm as k,
  hm as A,
  im as tt,
  is as nt,
  ji as rt,
  ki as it,
  ku as at,
  lm as j,
  mi as ot,
  nc as st,
  nh as M,
  pi as ct,
  pu as lt,
  qd as ut,
  qo as dt,
  uf as ft,
  um as pt,
  yu as N,
} from "./main.js?contenthash=B3VTzWgT";
import { n as mt, t as ht } from "./steamavatar2.js?contenthash=B0X7XpEu";
var P = e(o()),
  F = te(),
  I = e(n()),
  gt = e(a()),
  _t = `p2qHAjJueVk-`,
  vt = `z7ELsY1zt-M-`,
  yt = `rIoW7wYpbBY-`,
  bt = `Xen-Cls5O14-`,
  xt = `LaHmAVJETcU-`,
  St = `O-zq4PqisDQ-`,
  Ct = `mgdmZBRFg8w-`,
  wt = `OJboGmDV8vM-`,
  Tt = `X1rC-yWVtvw-`,
  Et = `C5AkaKn-eYk-`,
  Dt = `-I-g6uoCik0-`,
  Ot = `inRjWa-7gLI-`,
  kt = `MTmVFSRfvm8-`,
  L = { ProfileURL: `` },
  At = i((e) => {
    let { persona: t, className: n, ...r } = e;
    if (!t || !t.is_online) return null;
    let i = t.HasStateFlag(512),
      a = t.HasStateFlag(ke),
      o = t.m_eGamingDeviceType == 544,
      s = t.m_eGamingDeviceType == 545,
      c = !o && !s && !a && t.HasStateFlag(1024);
    return (0, F.jsxs)(P.Fragment, {
      children: [
        i &&
          (0, F.jsx)(`div`, {
            className: N(n, `da-aiolTzeA-`, `blHJJNodWx8-`, _(t)),
            title: x(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, F.jsx)(fe, {}),
          }),
        a &&
          (0, F.jsx)(`div`, {
            className: N(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, _(t)),
            title: x(`#Platform_Hint_VR`),
            ...r,
            children: (0, F.jsx)(et, {}),
          }),
        c &&
          (0, F.jsx)(`div`, {
            className: N(n, `da-aiolTzeA-`, void 0, _(t)),
            title: x(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, F.jsx)(st, {}),
          }),
        o &&
          (0, F.jsx)(`div`, {
            className: N(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, _(t)),
            title: x(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, F.jsx)(Ve, {}),
          }),
        s &&
          (0, F.jsx)(`div`, {
            className: N(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, _(t)),
            title: x(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, F.jsx)(Ve, {}),
          }),
      ],
    });
  }),
  jt = `SF1sJnuMqxw-`,
  Mt = `rALHh8gNXzk-`,
  Nt = `BPUdGzLfnOs-`,
  Pt = `JOLhLnwh07k-`,
  Ft = `ZNkrEoiqVl8-`,
  It = `QJ-7IJ25nrU-`,
  Lt = `PxCAsy1vdvA-`,
  Rt = `mJ-ovG6Q-Nw-`,
  zt = class extends P.Component {
    static get hoverClass() {
      return Rt;
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
        r == `medium` ? (o = Nt) : r == `large` && (o = Pt),
        (0, F.jsxs)(`div`, {
          className: N(
            jt,
            e.online_state,
            n,
            t && `h-MpRJExIDY-`,
            o,
            i && `rum5qK7fcnY-`,
          ),
          ...a,
          children: [
            (0, F.jsx)(`div`, {
              "data-text": `Z`,
              className: N(Mt, Ft),
              children: `Z`,
            }),
            (0, F.jsx)(`div`, {
              "data-text": `Z`,
              className: N(Mt, It),
              children: `Z`,
            }),
            (0, F.jsx)(`div`, {
              "data-text": `Z`,
              className: N(Mt, Lt),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
zt = w([i], zt);
var Bt = `tJCpCo5r9dY-`,
  Vt = `vOGePKVOcl4-`,
  Ht = `W9WrG6H-58k-`,
  Ut = `gVMK7GEJtxc-`,
  Wt = `y9n13dnyfCw-`,
  Gt = `_84ZaP76AcBk-`,
  Kt = `_5YE4gQ-Aa54-`,
  qt = `_11qqBHZE40o-`,
  Jt = `muiMo43G1Mg-`,
  Yt = `c8rm5taJRsE-`,
  Xt = `ih7RbrXvcd0-`,
  Zt = `aLLtr4iXlQQ-`,
  Qt = `yVNUkOCIdd4-`,
  $t = `_1m1KTkH3GjI-`,
  en = `yjHG9mbKfm4-`,
  tn = `mwHzy7NJhJk-`,
  nn = `VuzjFfrri28-`,
  rn = `Bw6VX4ofFas-`,
  an = `A28yS0adoTw-`,
  on = `W4juJFR0EN8-`,
  sn = `UGtn0gSxtMk-`,
  cn = `IdfuZLuribQ-`,
  ln = `DCC9W4izxl0-`,
  un = `KyChXFxK0cQ-`,
  dn = `_4-gcw3hITg8-`,
  fn = `Vu9XIZWBmwQ-`,
  pn = `-ZWvjbdSHXw-`,
  mn = `ayL7gitFbYs-`,
  hn = `hTquQzAOTec-`,
  gn = `fGoygYjbW50-`,
  _n = `GfwCcJI8Vgc-`,
  vn = `yk9Vhsv1R1I-`,
  yn = `_09eWVnweoF8-`,
  bn = `tF7oTMhWdDg-`,
  xn = `_19GIiDBM-wg-`,
  Sn = `Uw1JA4OREuk-`,
  Cn = $e.PerMinute,
  wn = class {
    m_accountid;
    m_bLoadingData = !1;
    m_rtLastLoad = 0;
    m_communityData = void 0;
    constructor(e) {
      l(this), (this.m_accountid = e);
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
      (this.m_rtLastLoad = 0), this.EnsureCommunityDataLoaded();
    }
    EnsureCommunityDataLoaded() {
      let e = this.m_communityData || this.m_bLoadingData,
        t = Date.now() > this.m_rtLastLoad + Cn * 1e3;
      (!e || (t && !this.m_bLoadingData)) &&
        ((this.m_bLoadingData = !0),
        I.default
          .get(
            A.CHAT_BASE_URL +
              `miniprofile/` +
              this.m_accountid +
              `/json/?origin=` +
              We(),
          )
          .then((e) => {
            let t = e.data;
            typeof t.level == `number` &&
              typeof t.level_class == `string` &&
              (this.m_communityData = t),
              (this.m_bLoadingData = !1),
              (this.m_rtLastLoad = Date.now());
          })
          .catch((e) => {
            this.m_bLoadingData = !1;
          }));
    }
  };
w([d], wn.prototype, `m_communityData`, void 0);
var Tn = class extends P.Component {
  render() {
    let { community_data: e } = this.props,
      t = e && e.favorite_badge;
    return t
      ? (0, F.jsxs)(`div`, {
          className: N(hn, this.props.className),
          children: [
            (0, F.jsx)(`div`, {
              className: gn,
              children: (0, F.jsx)(`img`, { src: t.icon, className: _n }),
            }),
            (0, F.jsxs)(`div`, {
              className: N(vn, void 0),
              children: [
                (0, F.jsx)(`div`, { className: bn, children: t.name }),
                (0, F.jsx)(`div`, {
                  className: Sn,
                  children: x(`#Hover_BadgeXP`, t.xp),
                }),
              ],
            }),
          ],
        })
      : null;
  }
};
Tn = w([i], Tn);
var En = class extends P.Component {
  render() {
    let { community_data: e, className: t } = this.props;
    return e
      ? (0, F.jsxs)(`div`, {
          className: N(hn, t),
          children: [
            (0, F.jsx)(`div`, {
              className: e.level_class,
              children: (0, F.jsx)(`span`, {
                className: yn,
                children: e.level,
              }),
            }),
            (0, F.jsx)(`div`, {
              className: vn,
              children: (0, F.jsx)(`div`, {
                className: bn,
                children: x(`#Hover_SteamLevel`) + ` `,
              }),
            }),
          ],
        })
      : null;
  }
};
En = w([i], En);
var Dn = class extends P.Component {
  render() {
    let e = this.props.persona,
      t = this.props.community_data;
    return (0, F.jsxs)(`div`, {
      className: N(cn, this.props.className),
      children: [
        t?.in_game?.logo &&
          (0, F.jsx)(`img`, { className: `DCC9W4izxl0-`, src: t.in_game.logo }),
        (0, F.jsxs)(`div`, {
          className: N(mn, nn, un, void 0),
          children: [
            (0, F.jsx)(`div`, {
              className: dn,
              children: x(
                e.is_in_nonsteam_game
                  ? `#PersonaStateInNonSteamGame`
                  : `#PersonaStateInGame`,
              ),
            }),
            this.props.persona.GetCurrentGameName(),
            this.props.persona.HasCurrentGameRichPresence() &&
              (0, F.jsx)(`div`, {
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
Dn = w([i], Dn);
function On(e) {
  let { appID: t } = e,
    [n] = _e(t, { include_assets_without_overrides: !0 }),
    r = n?.GetAssetsWithoutOverrides()?.GetHeaderURL();
  return r ? (0, F.jsx)(`img`, { className: ln, src: r }) : null;
}
var kn = class extends P.Component {
  render() {
    let e,
      t,
      n = this.props.broadcast_description;
    return (
      n && ((e = x(`#PersonaStateWatchingBroadcast`)), (t = n)),
      (0, F.jsxs)(`div`, {
        className: N(cn, this.props.className),
        children: [
          this.props.persona.m_broadcastAppId &&
            (0, F.jsx)(On, { appID: this.props.persona.m_broadcastAppId }),
          (0, F.jsxs)(`div`, {
            className: N(mn, nn, fn, void 0),
            children: [
              (0, F.jsx)(`div`, { className: dn, children: e }),
              t &&
                (0, F.jsx)(`div`, { className: `UxdrnEX3kUU-`, children: t }),
              (0, F.jsx)(`div`, {
                className: pn,
                children: this.props.broadcast_thumbnail,
              }),
            ],
          }),
        ],
      })
    );
  }
};
kn = w([i], kn);
var An = class extends P.Component {
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
      ne = Vt;
    t.is_ingame
      ? (te = (0, F.jsx)(Dn, {
          ...this.props,
          community_data: p,
          className: m ? Yt : void 0,
        }))
      : t.is_watchingbroadcast
        ? (te = (0, F.jsx)(kn, { ...this.props, className: m ? Yt : void 0 }))
        : (ne += ` ` + on);
    let re = !0,
      h = !1,
      g = !1;
    a || ((ne += ` ` + Xt), (re = !1)), o && ((ne += ` undefined`), (g = !0));
    let ie = i !== void 0,
      ae = t.is_awayOrSnooze,
      oe;
    return (
      (oe = ie
        ? (0, F.jsxs)(`div`, {
            children: [
              (0, F.jsxs)(`div`, {
                className: rn,
                children: [
                  (0, F.jsxs)(`div`, {
                    className: N(Qt, tn),
                    children: [
                      (0, F.jsx)(`div`, {
                        className: en,
                        children: this.props.nickname,
                      }),
                      (0, F.jsx)(`div`, {
                        className: an,
                        title: x(`#isNickname`),
                        children: `*`,
                      }),
                    ],
                  }),
                  (0, F.jsx)(At, { persona: t }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: N(Qt, $t),
                children: [
                  `( `,
                  (0, F.jsx)(`div`, {
                    className: en,
                    children: t.m_strPlayerName,
                  }),
                  ` )`,
                ],
              }),
            ],
          })
        : (0, F.jsxs)(`div`, {
            className: rn,
            children: [
              (0, F.jsx)(`div`, {
                className: Qt,
                children: (0, F.jsx)(`div`, {
                  className: en,
                  children: t.m_strPlayerName,
                }),
              }),
              (0, F.jsx)(At, { persona: t }),
            ],
          })),
      this.props.friend_relationship == 2 && (h = !0),
      (0, F.jsx)(P.Fragment, {
        children: (0, F.jsx)(
          `div`,
          {
            className: N(this.props.className, Bt),
            ...ee,
            children: (0, F.jsxs)(`div`, {
              className: ne,
              children: [
                (0, F.jsx)(jn, { community_data: p, persona: t }),
                (0, F.jsx)(`div`, {
                  className: Ht,
                  children: (0, F.jsxs)(`div`, {
                    className: N(Ut, t.online_state, ae && void 0, _(t)),
                    children: [
                      (0, F.jsx)(Mn, {
                        persona: this.props.persona,
                        community_data: p,
                      }),
                      ae &&
                        (0, F.jsx)(zt, {
                          persona: t,
                          animating: !0,
                          className: `rUdBu1-c7IY-`,
                          size: `large`,
                        }),
                      (0, F.jsx)(`div`, {
                        className: Wt,
                        children: (0, F.jsx)(`div`, {
                          className: void 0,
                          children: (0, F.jsxs)(`div`, {
                            className: nn,
                            children: [
                              oe,
                              ae &&
                                (0, F.jsx)(`div`, {
                                  className: `Ggu8D-7EzqA-`,
                                  children: x(`#PersonaStateAway`),
                                }),
                              !t.is_online &&
                                (0, F.jsx)(`div`, {
                                  className: `Ggu8D-7EzqA-`,
                                  children:
                                    this.props.persona.GetLocalizedOnlineStatus(),
                                }),
                              t.online_state == `online` &&
                                !ae &&
                                (0, F.jsx)(`div`, {
                                  className: `Ggu8D-7EzqA-`,
                                  children: x(`#PersonaStateOnline`),
                                }),
                              !re &&
                                (0, F.jsx)(`div`, {
                                  className: `fbkPk4kqT14-`,
                                  children: x(
                                    h
                                      ? `#Friend_Menu_NotAFriendRequesting`
                                      : `#Friend_Menu_NotAFriendLabel`,
                                  ),
                                }),
                              g &&
                                (0, F.jsx)(`div`, {
                                  className: `TI-9NNXiqzI-`,
                                  children: x(`#PersonaStateBlocked`),
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                te,
                (0, F.jsxs)(`div`, {
                  className: N(sn, m && `c8rm5taJRsE-`),
                  children: [
                    (0, F.jsx)(Tn, { community_data: p }),
                    (0, F.jsx)(En, { community_data: p }),
                  ],
                }),
                f,
                (0, F.jsx)(`div`, {
                  className: xn,
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
An = w([i], An);
var jn = ({ community_data: e, persona: t }) => {
    if (e && e.profile_background) {
      let { image: t, ...n } = e.profile_background;
      if (Object.keys(n).length)
        return (0, F.jsx)(
          `div`,
          {
            className: Jt,
            children: (0, F.jsx)(`video`, {
              className: qt,
              playsInline: !0,
              muted: !0,
              autoPlay: !0,
              loop: !0,
              poster: t,
              children: Object.keys(n).map((e) =>
                (0, F.jsx)(`source`, { src: n[e], type: e }, e),
              ),
            }),
          },
          n[`video/webm`] || n[`video/mp4`] || `image`,
        );
      if (t)
        return (0, F.jsx)(`div`, {
          className: Jt,
          children: (0, F.jsx)(`img`, { className: qt, src: t }),
        });
    }
    return (0, F.jsx)(`div`, {
      className: Gt,
      children: (0, F.jsx)(`img`, { className: Kt, src: t.avatar_url }),
    });
  },
  Mn = (e) => {
    let { persona: t, community_data: n, size: r, ...i } = e,
      a =
        n &&
        n.avatar_frame &&
        (0, F.jsx)(`img`, { src: n.avatar_frame, className: `lgtcHnfBxhs-` }),
      o = n && n.animated_avatar,
      s = { size: r || `X-Large`, statusPosition: `bottom`, className: Zt };
    return o
      ? (0, F.jsx)(ht, { ...i, strAvatarURL: o, ...s, children: a })
      : (0, F.jsx)(mt, { persona: t, ...i, ...s, children: a });
  },
  Nn = class {
    m_SteamInterface;
    m_rgPreviousAvatars = [];
    m_promiseLoading;
    constructor(e) {
      l(this), (this.m_SteamInterface = e);
    }
    GetAvatarHistory() {
      return this.StartLoadIfNeeded(), this.m_rgPreviousAvatars || [];
    }
    RefreshAvatarHistory() {
      this.m_promiseLoading = this.LoadAvatarHistory();
    }
    async BWaitForLoad() {
      return this.StartLoadIfNeeded(), this.m_promiseLoading;
    }
    StartLoadIfNeeded() {
      this.m_promiseLoading ||= this.LoadAvatarHistory();
    }
    async LoadAvatarHistory() {
      let e = M.Init(we);
      e.SetBodyFields({ steamid: k.steamid, filter_user_uploaded_only: !0 });
      let t = await Le.GetAvatarHistory(
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
      n.append(`sessionid`, j()), n.append(`json`, `1`), n.append(`sha`, t);
      let r =
        (
          await I.default.post(
            `${A.COMMUNITY_BASE_URL}actions/selectPreviousAvatar`,
            n,
          )
        ).data.success || 2;
      return r == 1 && e.CommitAvatarHash(), r;
    }
  };
w([d], Nn.prototype, `m_rgPreviousAvatars`, void 0);
var Pn = class {
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
    return this.StartLoadIfNeeded(), this.m_promiseLoading;
  }
  StartLoadIfNeeded() {
    this.m_promiseLoading ||= this.LoadOGGAvatars();
  }
  async LoadOGGAvatars() {
    let e = await I.default.get(
      `${A.COMMUNITY_BASE_URL}actions/GameAvatars/?json=1&l=${A.LANGUAGE}`,
    );
    return (this.m_AvatarData = e.data || null), !!e.data;
  }
  async SetPlayerOGGAvatar(e) {
    let t = In(this),
      n,
      r = e.GetAvatarHash();
    for (; (n = t.next().value); ) {
      let t = n.avatars.find((e) => e.avatar_hash == r);
      if (t) return this.SelectGameAvatar(e, n.appid, t.ordinal);
    }
    return 42;
  }
  async SelectGameAvatar(e, t, n) {
    let r = new FormData();
    r.append(`sessionid`, j()),
      r.append(`json`, `1`),
      r.append(`selectedAvatar`, `` + n);
    let i =
      (await I.default.post(`${A.COMMUNITY_BASE_URL}ogg/${t}/selectAvatar`, r))
        .data.success || 2;
    return i == 1 && e.CommitAvatarHash(), i;
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
w([d.shallow], Pn.prototype, `m_AvatarData`, void 0);
function* Fn(e) {
  for (let t of [
    e.GetRecentGameAvatars(),
    e.GetOwnedGameAvatars(),
    e.GetOtherGameAvatars(),
  ])
    for (let e of t) for (let t of e.avatars) yield t;
}
function* In(e) {
  for (let t of [
    e.GetRecentGameAvatars(),
    e.GetOwnedGameAvatars(),
    e.GetOtherGameAvatars(),
  ])
    for (let e of t) yield e;
}
function Ln(e) {
  switch (e) {
    case 1:
      return x(`#Privacy_Private`);
    case 2:
      return x(`#Privacy_FriendsOnly`);
    case 3:
      return x(`#Privacy_Public`);
    default:
      return ``;
  }
}
function Rn(e) {
  switch (e) {
    case 0:
      return x(`#Privacy_FriendsOnly`);
    case 1:
      return x(`#Privacy_Public`);
    case 2:
      return x(`#Privacy_Private`);
    default:
      return ``;
  }
}
function R(e, t) {
  return e < t ? e : t;
}
function zn(e, t) {
  return t == 1 ? 2 : t == 2 && e == 1 ? 0 : e;
}
var z = class {
  m_PrivacySettings = void 0;
  m_eCommentPermission = void 0;
  m_eSaveStateByKey = new Map();
  m_eCommentSaveState = 0;
  constructor(e, t) {
    l(this), (this.m_PrivacySettings = e), (this.m_eCommentPermission = t);
  }
  GetPrivacySetting(e) {
    return e == `PrivacyOwnedGames`
      ? R(
          this.m_PrivacySettings.PrivacyProfile,
          this.m_PrivacySettings.PrivacyOwnedGames,
        )
      : e == `PrivacyPlaytime`
        ? R(
            this.GetPrivacySetting(`PrivacyOwnedGames`),
            this.m_PrivacySettings.PrivacyPlaytime,
          )
        : e == `PrivacyInventory`
          ? R(
              this.m_PrivacySettings.PrivacyProfile,
              this.m_PrivacySettings.PrivacyInventory,
            )
          : e == `PrivacyInventoryGifts`
            ? R(
                this.GetPrivacySetting(`PrivacyInventory`),
                this.m_PrivacySettings.PrivacyInventoryGifts,
              )
            : e == `PrivacyFriendsList`
              ? R(
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
      I.default
        .post(L.ProfileURL + `ajaxsetprivacy/`, e)
        .then((e) => {
          let t = e.data;
          if (t.success != 1)
            return (
              window.ShowAlertDialog(
                x(`#Error_Error`),
                x(`#Error_CommentEditFailed`),
              ),
              !1
            );
          let n = t.Privacy;
          return (
            n &&
              n.PrivacySettings &&
              n.eCommentPermission &&
              r(() => {
                (this.m_PrivacySettings = n.PrivacySettings),
                  (this.m_eCommentPermission = n.eCommentPermission);
              }),
            !0
          );
        })
        .catch(
          (e) => (
            window.ShowAlertDialog(
              x(`#Error_Error`),
              x(`#Error_CommentEditFailed`),
            ),
            !1
          ),
        )
    );
  }
};
w([d], z.prototype, `m_PrivacySettings`, void 0),
  w([d], z.prototype, `m_eCommentPermission`, void 0),
  w([d], z.prototype, `m_eSaveStateByKey`, void 0),
  w([d], z.prototype, `m_eCommentSaveState`, void 0);
var Bn = class {
  m_rgBadges = [];
  m_FavoriteBadge = void 0;
  m_CommittedFavoriteBadge;
  m_AppInfoStore;
  m_CMInterface;
  constructor(e, t, n) {
    l(this), (this.m_CMInterface = e), (this.m_AppInfoStore = t);
    let r = n.rgBadges,
      i = n.FavoriteBadge;
    if (!Array.isArray(r))
      for (let e in r) {
        let t = r[e],
          n;
        (n =
          `communityitemid` in t ? new Un(t, this.m_AppInfoStore) : new Hn(t)),
          this.m_rgBadges.push(n),
          i &&
            n.BIsFavoriteBadge(i) &&
            (this.m_CommittedFavoriteBadge = this.m_FavoriteBadge = n);
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
      t = M.Init(it);
    e.badgeid
      ? t.Body().set_badgeid(e.badgeid)
      : e.communityitemid && t.Body().set_communityitemid(e.communityitemid);
    let n = await b.SetFavoriteBadge(
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
          xp: parseInt(this.m_FavoriteBadge.GetXP()),
          level: 0,
          description: this.m_FavoriteBadge.GetGameName(),
          icon: this.m_FavoriteBadge.GetIconURL(),
        }
      : null;
  }
};
w([d], Bn.prototype, `m_FavoriteBadge`, void 0),
  w([m], Bn.prototype, `SetFavoriteBadge`, null),
  w([m], Bn.prototype, `RevertFavoriteBadge`, null);
var Vn = class {
    m_strIconURL;
    m_strName;
    m_strXP;
    constructor(e) {
      (this.m_strIconURL = e.icon),
        (this.m_strName = e.name),
        (this.m_strXP = e.xp);
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
  Hn = class extends Vn {
    m_unBadgeID;
    constructor(e) {
      super(e), (this.m_unBadgeID = e.badgeid);
    }
    GetFavoriteBadgeID() {
      return { badgeid: this.m_unBadgeID };
    }
    BIsFavoriteBadge(e) {
      return e.badgeid && e.badgeid == this.m_unBadgeID;
    }
  },
  Un = class extends Vn {
    m_ulCommunityItemID;
    m_usItemType;
    m_unAppID;
    m_unBorderColor;
    m_AppInfoStore;
    constructor(e, t) {
      super(e),
        (this.m_ulCommunityItemID = e.communityitemid),
        (this.m_usItemType = e.item_type),
        (this.m_unAppID = e.appid),
        (this.m_unBorderColor = e.border_color),
        (this.m_AppInfoStore = t);
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
function Wn(e) {
  return V(e.movie_webm);
}
function Gn(e) {
  return V(e.movie_webm_small) || V(e.movie_webm);
}
function Kn(e) {
  return V(e.movie_mp4);
}
function qn(e) {
  return V(e.movie_mp4_small) || V(e.movie_mp4);
}
function Jn(e) {
  return V(e.image_small);
}
function B(e) {
  return V(e.image_large);
}
function Yn(e) {
  return Xn(e, 252, 160);
}
function Xn(e, t, n) {
  return e
    ? e.image_large
      ? `${A.COMMUNITY_CDN_URL}economy/profilebackground/${e.image_large}?size=${t}x${n}`
      : null
    : `${A.COMMUNITY_CDN_URL}public/images/profile/2020/bg_dots.png`;
}
function Zn(e, t = !1) {
  let n = {},
    r = t ? Gn(e) : Wn(e);
  r && (n[`video/webm`] = r);
  let i = t ? qn(e) : Kn(e);
  return i && (n[`video/mp4`] = i), n;
}
function V(e) {
  return e ? `${A.MEDIA_CDN_COMMUNITY_URL}images/${e}` : null;
}
var Qn = class {
  m_SteamInterface;
  m_AppInfoStore;
  m_promiseOwned;
  m_promiseEquipped;
  m_Backgrounds = new H(this);
  m_MiniProfileBackgrounds = new H(this);
  m_Avatars = new H(this);
  m_AvatarFrames = new H(this);
  m_ProfileModifiers = new H(this);
  m_OnAvatarEquipmentChangedCallbacks = new Pe();
  m_mapGoldenProfileConfigByAppID = new Map();
  constructor(e, t, n) {
    l(this), (this.m_SteamInterface = e), (this.m_AppInfoStore = t);
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
        let e = M.Init(rt);
        e.Body().set_communityitemid(
          this.m_Backgrounds.m_EquippedItem &&
            this.m_Backgrounds.m_EquippedItem.communityitemid,
        );
        let t = await b.SetProfileBackground(
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
        e
          .Body()
          .set_communityitemid(
            this.m_Backgrounds.m_EquippedItem.communityitemid,
          ),
          e.Body().set_flags(this.m_Backgrounds.m_EquipFlags);
        let t = await b.SetEquippedProfileItemFlags(
          this.m_SteamInterface.GetServiceTransport(),
          e,
        );
        t.GetEResult() != 1 &&
          console.error(
            `Error when calling PlayerService.SetEquippedProfileItemFlags: EResult=${t.GetEResult()}`,
          );
      }
    }
    return this.m_Backgrounds.SetComitted(), 1;
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
      let e = M.Init(xe);
      e.Body().set_communityitemid(
        this.m_MiniProfileBackgrounds.m_EquippedItem &&
          this.m_MiniProfileBackgrounds.m_EquippedItem.communityitemid,
      );
      let t = await b.SetMiniProfileBackground(
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
      let t = M.Init(Te);
      t
        .Body()
        .set_communityitemid(
          this.m_Avatars.m_EquippedItem &&
            this.m_Avatars.m_EquippedItem.communityitemid,
        ),
        (e = b.SetAnimatedAvatar(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        ));
    }
    if (this.m_AvatarFrames.BIsUncomitted()) {
      let e = M.Init(Ce);
      e
        .Body()
        .set_communityitemid(
          this.m_AvatarFrames.m_EquippedItem &&
            this.m_AvatarFrames.m_EquippedItem.communityitemid,
        ),
        (t = b.SetAvatarFrame(this.m_SteamInterface.GetServiceTransport(), e));
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
    this.m_Avatars.Revert(), this.m_AvatarFrames.Revert();
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
    let e = M.Init(Be);
    e.Body().set_steamid(k.steamid),
      e.Body().set_language(A.LANGUAGE),
      (this.m_promiseEquipped = b.GetProfileItemsEquipped(
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
      this.GetEquippedMiniProfileBackground();
  }
  async CommitProfileModifierChanges() {
    if (this.m_ProfileModifiers.BIsUncomitted()) {
      let e = !1;
      if (
        this.m_ProfileModifiers.m_CommittedEquippedItem &&
        this.m_ProfileModifiers.m_CommittedEquippedItem !=
          this.m_ProfileModifiers.m_EquippedItem
      ) {
        let t = M.Init(ue);
        t
          .Body()
          .set_communityitemid(
            this.m_ProfileModifiers.m_CommittedEquippedItem.communityitemid,
          ),
          t
            .Body()
            .set_appid(this.m_ProfileModifiers.m_CommittedEquippedItem.appid),
          t.Body().set_activate(!1);
        let n = await de.ActivateProfileModifierItem(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (n.GetEResult() != 1) return n.GetEResult();
        e = !0;
      }
      if (this.m_ProfileModifiers.m_EquippedItem) {
        let t = M.Init(ue);
        t
          .Body()
          .set_communityitemid(
            this.m_ProfileModifiers.m_EquippedItem.communityitemid,
          ),
          t.Body().set_appid(this.m_ProfileModifiers.m_EquippedItem.appid),
          t.Body().set_activate(!0);
        let n = await de.ActivateProfileModifierItem(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (n.GetEResult() != 1) return n.GetEResult();
        e = !0;
      }
      this.m_ProfileModifiers.SetComitted(),
        e &&
          r(() => {
            this.ReloadEquippedItems();
          });
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
    let e = M.Init(Se);
    e.Body().set_language(A.LANGUAGE),
      (this.m_promiseOwned = b.GetProfileItemsOwned(
        this.m_SteamInterface.GetServiceTransport(),
        e,
      ));
    let t = M.Init(Be);
    t.Body().set_steamid(k.steamid),
      t.Body().set_language(A.LANGUAGE),
      (this.m_promiseEquipped = b.GetProfileItemsEquipped(
        this.m_SteamInterface.GetServiceTransport(),
        t,
      ));
  }
};
w([m], Qn.prototype, `RevertBackgroundChanges`, null),
  w([m], Qn.prototype, `RevertMiniProfileBackgroundChanges`, null),
  w([m], Qn.prototype, `RevertAvatarChanges`, null),
  w([m], Qn.prototype, `ReloadEquippedItems`, null);
var H = class {
  m_cItemsOwned = void 0;
  m_bEquippedLoaded = !1;
  m_bUnsavedChanges = !1;
  m_CommittedEquippedItem = void 0;
  m_EquippedItem = void 0;
  m_EquipFlags = void 0;
  m_rgOwnedItems;
  m_parent;
  constructor(e) {
    l(this), (this.m_parent = e);
  }
  GetOwnedItemCount() {
    return this.m_cItemsOwned;
  }
  async SetItems(e) {
    let t = e.map((e) => e.toObject());
    (this.m_rgOwnedItems = (await this.FillAppNames(t)).reverse()),
      (this.m_cItemsOwned = this.m_rgOwnedItems.length);
  }
  async LoadEquipped(e) {
    if (e !== void 0 && e.communityitemid()) {
      let t = e.toObject();
      if (t) {
        let [e] = await this.FillAppNames([t]);
        r(() => {
          (this.m_CommittedEquippedItem = this.m_EquippedItem = e),
            (this.m_EquipFlags = e && e.equipped_flags);
        });
      }
      this.m_bEquippedLoaded = !0;
    }
  }
  SetEquipped(e, t = !1) {
    (this.m_EquippedItem = e),
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
          ));
  }
  SetEquippedFlags(e) {
    this.m_EquipFlags = e;
  }
  BIsUncomitted() {
    return this.m_bUnsavedChanges;
  }
  SetComitted() {
    (this.m_bUnsavedChanges = !1),
      (this.m_CommittedEquippedItem = this.m_EquippedItem),
      this.m_CommittedEquippedItem &&
        (this.m_CommittedEquippedItem.equipped_flags = this.m_EquipFlags);
  }
  Revert() {
    (this.m_EquippedItem = this.m_CommittedEquippedItem),
      (this.m_EquipFlags =
        this.m_EquippedItem && this.m_EquippedItem.equipped_flags),
      (this.m_bUnsavedChanges = !1);
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
w([d], H.prototype, `m_cItemsOwned`, void 0),
  w([d], H.prototype, `m_bUnsavedChanges`, void 0),
  w([d], H.prototype, `m_CommittedEquippedItem`, void 0),
  w([d], H.prototype, `m_EquippedItem`, void 0),
  w([d], H.prototype, `m_EquipFlags`, void 0),
  w([m], H.prototype, `SetEquipped`, null),
  w([m], H.prototype, `SetEquippedFlags`, null),
  w([m], H.prototype, `Revert`, null);
var U = class {
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
    l(this),
      (this.m_strDisplayCountry = e),
      (this.m_strDisplayState = n),
      (this.m_strDisplayCity = i),
      (this.m_strCountryCode = t),
      (this.m_strStateCode = r),
      (this.m_strCityCode = a),
      this.m_strStateCode
        ? (this.m_bStateSelectionAvailable = !0)
        : this.m_strCountryCode && this.GetCountryList(),
      (this.m_bCitySelectionAvailable = !!this.m_strStateCode);
  }
  get Country() {
    return this.m_strDisplayCountry;
  }
  get CountryCode() {
    return this.m_strCountryCode;
  }
  SetCountry(e, t) {
    e != this.m_strCountryCode &&
      ((this.m_strStateCode = ``),
      (this.m_strDisplayState = ``),
      (this.m_strCityCode = ``),
      (this.m_strDisplayCity = ``)),
      (this.m_strCountryCode = e),
      (this.m_strDisplayCountry = t),
      this.FindAndSetActiveCountry(),
      this.FindAndSetActiveState();
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
    e != this.m_strStateCode &&
      ((this.m_strCityCode = ``), (this.m_strDisplayCity = ``)),
      (this.m_strStateCode = e),
      (this.m_strDisplayState = t),
      this.FindAndSetActiveState();
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
    (this.m_strCityCode = e), (this.m_strDisplayCity = t);
  }
  async GetCountryList() {
    return this.m_rgCountryList
      ? this.m_rgCountryList
      : this.m_promiseLoadCountries
        ? this.m_promiseLoadCountries
        : ((this.m_promiseLoadCountries = I.default
            .get(A.COMMUNITY_BASE_URL + `/actions/QueryLocations/`)
            .then((e) => e.data)),
          this.m_promiseLoadCountries.then(
            (e) => {
              (this.m_rgCountryList = e),
                (this.m_promiseLoadCountries = null),
                this.FindAndSetActiveCountry();
            },
            () => {
              this.m_promiseLoadCountries = null;
            },
          ),
          this.m_promiseLoadCountries);
  }
  FindAndSetActiveCountry() {
    (this.m_CountryCur =
      this.m_strCountryCode &&
      this.m_rgCountryList.find((e) => e.countrycode == this.m_strCountryCode)),
      (this.m_bStateSelectionAvailable =
        this.m_CountryCur && !!this.m_CountryCur.hasstates);
  }
  async GetStateList() {
    this.m_CountryCur || (await this.GetCountryList());
    let e = this.m_CountryCur;
    return !e || !e.hasstates
      ? []
      : e.states === void 0
        ? e.stateloader
          ? e.stateloader
          : ((e.stateloader = I.default
              .get(
                A.COMMUNITY_BASE_URL +
                  `/actions/QueryLocations/${e.countrycode}/`,
              )
              .then((e) => e.data)),
            e.stateloader.then(
              (t) => {
                (e.states = t || []),
                  delete e.stateloader,
                  this.FindAndSetActiveState();
              },
              () => {
                delete e.stateloader;
              },
            ),
            e.stateloader)
        : e.states;
  }
  FindAndSetActiveState() {
    (this.m_StateCur =
      this.m_CountryCur &&
      this.m_CountryCur.states &&
      this.m_CountryCur.states.find((e) => e.statecode == this.m_strStateCode)),
      (this.m_bCitySelectionAvailable = !!this.m_StateCur);
  }
  async GetCityList() {
    this.m_StateCur || (await this.GetStateList());
    let e = this.m_StateCur;
    return e
      ? e.cities === void 0
        ? e.cityloader
          ? e.cityloader
          : ((e.cityloader = I.default
              .get(
                A.COMMUNITY_BASE_URL +
                  `/actions/QueryLocations/${e.countrycode}/${e.statecode}`,
              )
              .then((e) => e.data)),
            e.cityloader.then(
              (t) => {
                (e.cities = t || []), delete e.cityloader;
              },
              () => {
                delete e.cityloader;
              },
            ),
            e.cityloader)
        : e.cities
      : [];
  }
};
w([d], U.prototype, `m_strDisplayCountry`, void 0),
  w([d], U.prototype, `m_strDisplayState`, void 0),
  w([d], U.prototype, `m_strDisplayCity`, void 0),
  w([d], U.prototype, `m_strCountryCode`, void 0),
  w([d], U.prototype, `m_strStateCode`, void 0),
  w([d], U.prototype, `m_strCityCode`, void 0),
  w([d], U.prototype, `m_bStateSelectionAvailable`, void 0),
  w([d], U.prototype, `m_bCitySelectionAvailable`, void 0),
  w([m], U.prototype, `SetCountry`, null),
  w([m], U.prototype, `SetState`, null),
  w([m], U.prototype, `SetCity`, null),
  w([m], U.prototype, `FindAndSetActiveCountry`, null),
  w([m], U.prototype, `FindAndSetActiveState`, null);
var $n = class {
  m_ActiveTheme = void 0;
  m_ComittedActiveTheme;
  m_rgAvailableThemes;
  m_CMInterface;
  constructor(e, t, n) {
    l(this),
      (this.m_CMInterface = e),
      (this.m_rgAvailableThemes = n.map((e) => ({
        ...e,
        theme_id: e.theme_id || `Default`,
        title: x(e.title),
      }))),
      t === void 0 || t.theme_id === ``
        ? this.SetActiveTheme(`Default`, !0)
        : ((this.m_ActiveTheme = t), (this.m_ComittedActiveTheme = t));
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
        (this.m_ActiveTheme = n), t && (this.m_ComittedActiveTheme = n);
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
    let e = M.Init(Ie);
    e.Body().set_theme_id(
      this.ActiveTheme.theme_id == `Default` ? `` : this.ActiveTheme.theme_id,
    );
    let t = await b.SetProfileTheme(
      this.m_CMInterface.GetServiceTransport(),
      e,
    );
    return (
      t.GetEResult() == 1 && (this.m_ComittedActiveTheme = this.ActiveTheme),
      t.GetEResult()
    );
  }
};
w([d], $n.prototype, `m_ActiveTheme`, void 0),
  w([m], $n.prototype, `RevertActiveTheme`, null);
async function er(e, t) {
  let n;
  if (t instanceof FormData) n = t;
  else {
    n = new FormData();
    for (let e in t) n.append(e, t[e]);
  }
  n.append(`type`, e), n.append(`sessionID`, j()), n.append(`json`, `1`);
  let r = `${L.ProfileURL}edit/`;
  try {
    let e = await I.default.post(r, n);
    return {
      eResult: e.data.success,
      strHTMLError: e.data.errmsg,
      strRedirectURL: e.data.redirect,
    };
  } catch {
    return {
      eResult: 35,
      strHTMLError: x(`#ConnectionTrouble_FailedToConnect`),
    };
  }
}
var tr = class {
  m_rgUserGroups;
  m_PrimaryGroup = void 0;
  m_CommittedPrimaryGroup;
  m_bLoaded = !1;
  m_promiseLoading;
  constructor(e) {
    l(this),
      e &&
        (this.m_CommittedPrimaryGroup = this.m_PrimaryGroup =
          new nr(new Ue(e.steamid), e.name, e.avatarHash));
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
    return this.m_bLoaded || this.StartUserGroupLoad(), this.m_rgUserGroups;
  }
  async BWaitForUserGroups() {
    return this.StartUserGroupLoad(), this.m_promiseLoading;
  }
  StartUserGroupLoad() {
    this.m_promiseLoading ||= this.LoadUserGroups();
  }
  async LoadUserGroups() {
    let e = await I.default.get(
      `${L.ProfileURL}ajaxgroupinvite?select_primary=1&json=1`,
    );
    return (
      r(() => {
        e.data &&
          (this.m_rgUserGroups = e.data.map(
            (e) => new nr(new Ue(e.steamid), e.name, e.avatarHash),
          )),
          (this.m_bLoaded = !0);
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
    let e = await er(`favoriteclan`, {
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
w([d], tr.prototype, `m_PrimaryGroup`, void 0),
  w([d], tr.prototype, `m_bLoaded`, void 0),
  w([m], tr.prototype, `SetPrimaryGroup`, null),
  w([m], tr.prototype, `RevertPrimaryGroupChanges`, null);
var nr = class {
    m_steamID;
    m_strName;
    m_strAvatarHash;
    constructor(e, t, n) {
      (this.m_steamID = e), (this.m_strName = t), (this.m_strAvatarHash = n);
    }
    GetSteamID() {
      return this.m_steamID;
    }
    GetName() {
      return this.m_strName;
    }
    GetAvatarURL(e) {
      return me(
        this.m_strAvatarHash || `0000000000000000000000000000000000000000`,
        e,
      );
    }
  },
  rr = class {
    m_Profile;
    m_ProfileBadges;
    m_ProfileItems;
    m_ProfileTheme;
    m_ProfilePrivacy;
    m_OGGAvatars = new Pn();
    m_AvatarHistory;
    m_EmoticonStore = new Qe();
    m_WebAPI;
    m_AppInfoStore;
    constructor(e, t, n) {
      (this.m_Profile = new W(e)),
        (this.m_WebAPI = n),
        (this.m_AppInfoStore = new he()),
        this.m_AppInfoStore.Init(this.m_WebAPI),
        this.m_AppInfoStore.SetCacheStorage(new qe()),
        (this.m_ProfileBadges = new Bn(this.m_WebAPI, this.m_AppInfoStore, t)),
        (this.m_ProfileItems = new Qn(
          this.m_WebAPI,
          this.m_AppInfoStore,
          e.rgGoldenProfileData,
        )),
        (this.m_ProfileTheme = new $n(
          this.m_WebAPI,
          e.ActiveTheme,
          e.rgAvailableThemes,
        )),
        (this.m_ProfilePrivacy = new z(
          e.Privacy.PrivacySettings,
          e.Privacy.eCommentPermission,
        )),
        (this.m_AvatarHistory = new Nn(this.m_WebAPI)),
        this.m_ProfileItems.AddOnAvatarEquipmentChangedCallback(() => {
          this.m_Profile.MiniProfileData.Reload(),
            this.m_AvatarHistory.RefreshAvatarHistory();
        });
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
  W = class {
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
      l(this),
        (this.m_strPersonaName = e.strPersonaName),
        (this.m_strFilteredPersonaName = e.strFilteredPersonaName),
        (this.m_strCustomURL = e.strCustomURL),
        (this.m_strRealName = e.strRealName),
        (this.m_strFilteredRealName = e.strFilteredRealName),
        (this.m_strSummary = e.strSummary),
        (this.m_Preferences = e.ProfilePreferences),
        this.SetBasicInfoChangesComitted(),
        (this.m_strCommittedAvatarHash = this.m_strAvatarHash =
          e.strAvatarHash);
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
      (this.m_Location = new U(t, n, r, i, a, o)),
        (this.m_GroupList = new tr(e.PrimaryGroup));
      let s = new Ue(k.steamid);
      (this.m_MiniProfileData = new wn(s.GetAccountID())),
        (this.m_persona = new ge(s)),
        u(() => {
          this.BuildPersonaStateObject();
        }),
        (this.m_rtPersonaNameBannedUntil =
          e.rtPersonaNameBannedUntil || void 0),
        (this.m_rtProfileSummaryBannedUntil =
          e.rtProfileSummaryBannedUntil || void 0),
        (this.m_rtAvatarBannedUntil = e.rtAvatarBannedUntil || void 0);
    }
    RevertBasicInfoChanges() {
      (this.m_strPersonaName = this.m_strCommittedPersonaName),
        (this.m_strFilteredPersonaName =
          this.m_strCommittedFilteredPersonaName),
        (this.m_strCustomURL = this.m_strComittedCustomURL),
        (this.m_strRealName = this.m_strComittedRealName),
        (this.m_strFilteredRealName = this.m_strCommittedFilteredRealName),
        (this.m_strSummary = this.m_strComittedSummary);
    }
    SetBasicInfoChangesComitted() {
      (this.m_strCommittedPersonaName = this.m_strPersonaName),
        (this.m_strCommittedFilteredPersonaName =
          this.m_strFilteredPersonaName),
        (this.m_strComittedCustomURL = this.m_strCustomURL),
        (this.m_strComittedRealName = this.m_strRealName),
        (this.m_strCommittedFilteredRealName = this.m_strFilteredRealName),
        (this.m_strComittedSummary = this.m_strSummary);
    }
    NotifyRNMobileAppStateChanged() {
      let e = Reflect.get(window, `ReactNativeWebView`);
      if (e?.postMessage) {
        let t = { event_name: `personastatechanged`, steamid: k.steamid };
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
      (this.m_strPersonaName = e), (this.m_strFilteredPersonaName = e);
    }
    HasFilteredPersonaName() {
      return this.m_strPersonaName !== this.m_strFilteredPersonaName;
    }
    GetRealName() {
      return this.m_strRealName;
    }
    SetRealName(e) {
      (this.m_strRealName = e), (this.m_strFilteredRealName = e);
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
        ? `${A.COMMUNITY_BASE_URL}id/${this.m_strCustomURL}/`
        : `${A.COMMUNITY_BASE_URL}profiles/${k.steamid}/`;
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
      (this.m_persona.m_strPlayerName = this.m_strPersonaName),
        (this.m_persona.m_strAvatarHash = this.m_strAvatarHash),
        (this.m_persona.m_ePersonaState = 1);
    }
    async UploadAvatar(e) {
      let t = new FormData();
      t.append(`avatar`, e),
        t.append(`type`, `player_avatar_image`),
        t.append(`sId`, k.steamid),
        t.append(`sessionid`, j()),
        t.append(`doSub`, `1`),
        t.append(`json`, `1`);
      let n = !1,
        r = ``;
      try {
        let e = await I.default.post(
          `${A.COMMUNITY_BASE_URL}actions/FileUploader/`,
          t,
        );
        e.data && e.data.success
          ? ((n = !0), this.SetAvatarHash(e.data.hash, !0))
          : (r =
              (e.data && e.data.message) ||
              x(`#Chat_Settings_Error_ServerError`));
      } catch (e) {
        r =
          (e.response && e.response.data.message) ||
          x(`#Chat_Settings_Error_ServerError`);
      }
      return { bSuccess: n, strError: r };
    }
    SetAvatarHash(e, t = !1) {
      (this.m_strAvatarHash = e), t && this.CommitAvatarHash();
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
    static k_strPersonaNameCooldownSupportURL =
      `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`;
    static k_strProfileSummaryCooldownSupportURL =
      `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`;
    static k_strAvatarCooldownSupportURL =
      `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`;
    static k_strNameFilteredSupportURL =
      `https://help.steampowered.com/wizard/HelpWithSteamIssue/?issueid=415`;
  };
w([d], W.prototype, `m_strPersonaName`, void 0),
  w([d], W.prototype, `m_strCommittedPersonaName`, void 0),
  w([d], W.prototype, `m_strCustomURL`, void 0),
  w([d], W.prototype, `m_strRealName`, void 0),
  w([d], W.prototype, `m_strSummary`, void 0),
  w([d], W.prototype, `m_strAvatarHash`, void 0),
  w([d], W.prototype, `m_strCommittedAvatarHash`, void 0),
  w([d], W.prototype, `m_Preferences`, void 0),
  w([m], W.prototype, `RevertBasicInfoChanges`, null),
  w([m], W.prototype, `SetAvatarHash`, null),
  w([m], W.prototype, `RevertToComittedAvatarHash`, null);
var ir = `MgL-7khVeG4-`,
  ar = `zgXBEH3YPKg-`,
  or = `BKFlxpkJD9Y-`,
  sr = `E2GZhqQmQ7g-`,
  cr = `Go2YjzqqaWI-`,
  lr = `xAkjeixxh-c-`,
  ur = `-TKxu7swhb0-`,
  dr = `_7HNDc2I39bQ-`,
  fr = `_8DA8CD7jFaw-`,
  pr = `PXySEFmgS70-`,
  mr = `z11dQ2xGD5Y-`,
  G = `owF-UJEtkRg-`,
  hr = `hR8R-S2EKZg-`,
  gr = `mK7xNpPSbv4-`,
  _r = `Ds7fxFhYqb0-`,
  vr = `vcw-WFNW6A0-`,
  yr = `fMGkOTaVXBM-`,
  br = `fqoWnxDgsEo-`,
  xr = `iy0RD2xatU0-`,
  Sr = `WWhf4MDzOEc-`,
  Cr = `c-pKPhyHDvg-`,
  wr = `q9Xolii2Wsc-`,
  Tr = `gt-96Wh0foQ-`,
  Er = `lUi7liv2ag8-`,
  Dr = `UEFI3rDhOkY-`,
  Or = `JV3UMKtCqNA-`,
  kr = `_6ova2adpglg-`,
  Ar = `_0wD-xgu1s5M-`,
  jr = `dTgIyft-Wjo-`,
  Mr = ({ title: e, className: t, children: n }) =>
    (0, F.jsxs)(`div`, {
      className: N(Tr, t),
      children: [
        (0, F.jsx)(`div`, { className: Er, children: e }),
        (0, F.jsx)(`div`, {
          className: Dr,
          children: (0, F.jsx)(C, { children: n }),
        }),
      ],
    }),
  K = ({ onSave: e, onCancel: t, disabled: n }) =>
    (0, F.jsxs)(D, {
      className: wr,
      "flow-children": `row-reverse`,
      children: [
        (0, F.jsx)(nt, {
          onClick: e,
          disabled: n,
          children: x(`#Button_Save`),
        }),
        (0, F.jsx)(dt, { onClick: t, children: x(`#Button_Cancel`) }),
      ],
    });
function Nr(e) {
  return x(e).replace(/%s/g, ``);
}
var q = class extends P.Component {
  state = { activeItem: void 0, bSaving: !1 };
  static getDerivedStateFromProps(e, t) {
    return {
      activeItem: t.activeItem === void 0 ? e.ActiveItem : t.activeItem,
    };
  }
  async CommitChanges() {
    this.setState({ bSaving: !0 }),
      await this.props.fnCommitChanges(this.state.activeItem),
      this.setState({ bSaving: !1 });
  }
  async RevertChanges() {
    this.setState({ activeItem: this.props.ActiveItem }),
      this.props.fnRevertChanges();
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
    return (0, F.jsxs)(Ge, {
      className: N(xr, n),
      children: [
        (0, F.jsx)(g, {
          when: !i.fnIsSameItem(a, this.props.ActiveItem),
          message: x(`#Profile_Edit_UnsavedChangesWarning`),
        }),
        (0, F.jsxs)(D, {
          className: Sr,
          "flow-children": `column`,
          children: [
            (0, F.jsx)(`div`, {
              className: void 0,
              children: (0, F.jsx)(C, { children: r(a) }),
            }),
            e && (0, F.jsx)(v, { children: e }),
            (0, F.jsx)(`div`, {
              className: Cr,
              children: (0, F.jsx)(C, {
                children: (0, F.jsx)(Fr, {
                  ...i,
                  onItemSelected: this.OnItemSelected,
                  activeItem: a,
                }),
              }),
            }),
            (0, F.jsx)(K, {
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
w([T], q.prototype, `CommitChanges`, null),
  w([T], q.prototype, `RevertChanges`, null),
  w([T], q.prototype, `OnItemSelected`, null);
function Pr(e) {
  return e ? e.toLocaleLowerCase().replace(/\W/g, ``) : ``;
}
var Fr = class extends P.Component {
  state = { strSearch: `` };
  m_rgSearchableItems = null;
  m_fnSearchFieldsDisposer;
  m_refRootDiv = P.createRef();
  async componentDidMount() {
    if (this.m_rgSearchableItems === null) {
      let { getItems: e, getSearchFields: t, onItemSelected: n } = this.props,
        r = await e();
      this.m_fnSearchFieldsDisposer = u(() => {
        (this.m_rgSearchableItems = r.map((e, r) => ({
          key: `` + r,
          normalized_search_strings: t && t(e).map(Pr),
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
          this.forceUpdate();
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
        (n.nHeight = e.height), (n.nWidth = e.width);
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
    return (0, F.jsxs)(D, {
      className: N(vr, a),
      ref: this.m_refRootDiv,
      style: u,
      "flow-children": `column`,
      children: [
        n &&
          (0, F.jsx)(`div`, {
            className: void 0,
            children: (0, F.jsx)(Ae, {
              value: o,
              label: x(`#ItemPicker_Filter`),
              onChange: this.OnSearchChange,
            }),
          }),
        (0, F.jsx)(`div`, {
          className: yr,
          children: (0, F.jsx)(D, {
            className: br,
            "flow-children": `grid`,
            children: this.m_rgSearchableItems.map((n) =>
              l && !l(n)
                ? null
                : n.item
                  ? (0, F.jsx)(
                      C,
                      {
                        children: (0, F.jsx)(e, {
                          Item: n.item,
                          onSelected: n.OnSelected,
                          active: r && d(n.item, r),
                        }),
                      },
                      n.key,
                    )
                  : (0, F.jsx)(
                      C,
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
w([T], Fr.prototype, `OnSearchChange`, null);
var J = ({ strHTMLError: e }) =>
    e
      ? (0, F.jsxs)(`div`, {
          className: Or,
          children: [
            (0, F.jsxs)(`b`, { children: [x(`#Error_Generic_Label`), `\xA0`] }),
            (0, F.jsx)(`span`, {
              className: void 0,
              dangerouslySetInnerHTML: { __html: e },
            }),
          ],
        })
      : null,
  Ir = ({
    strCooldownLabel: e,
    rtCooldownEnd: t,
    strCooldownDescHTML: n,
    children: r,
  }) => {
    if (!t) return (0, F.jsx)(F.Fragment, { children: r });
    let i = Math.max(0, t - Date.now() / 1e3);
    return (0, F.jsxs)(`div`, {
      className: kr,
      children: [
        (0, F.jsxs)(`div`, {
          className: Or,
          children: [
            (0, F.jsxs)(`div`, {
              className: Ar,
              children: [
                e,
                ` `,
                ft(i, { eSuffix: Je.None, bForceSingleUnits: !0 }),
                ` `,
              ],
            }),
            (0, F.jsx)(`div`, { dangerouslySetInnerHTML: { __html: n } }),
          ],
        }),
        (0, F.jsx)(`div`, { className: jr, children: r }),
      ],
    });
  };
function Lr(e) {
  let { image: t, onSelected: n, className: r } = e,
    [i, a] = P.useState(!1),
    [o, s] = P.useState(!1);
  return (0, F.jsx)(D, {
    className: r,
    onGamepadFocus: () => s(!0),
    onGamepadBlur: () => s(!1),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    onActivate: () => n(t),
    children: (0, F.jsx)(`img`, { src: Jn(t), loading: `lazy` }),
  });
}
var Y = class extends P.Component {
  state = { bReady: !1 };
  m_rgAvatars;
  async componentDidMount() {
    let e;
    ([this.m_rgAvatars, e] = await Promise.all([
      this.props.ProfileItems.GetOwnedAvatars(),
      this.props.OGGAvatars.BWaitForLoad(),
    ])),
      this.setState({ bReady: !0 });
  }
  SelectAnimatedAvatar(e) {
    this.props.Profile.RevertToComittedAvatarHash(),
      this.props.ProfileItems.SetEquippedAvatar(e),
      this.props.fnOnCollapse();
  }
  SelectOGGAvatar(e) {
    this.props.Profile.SetAvatarHash(e),
      this.props.ProfileItems.SetEquippedAvatar(null),
      this.props.fnOnCollapse();
  }
  SelectPreviousAvatar(e) {
    this.props.Profile.SetAvatarHash(e),
      this.props.ProfileItems.SetEquippedAvatar(null),
      this.props.fnOnCollapse();
  }
  GetTopAvatars(e = 4) {
    let t;
    if (((t = this.m_rgAvatars.slice(0, e)), t.length < e)) {
      let n = this.props.AvatarHistory.GetAvatarHistory();
      for (let r = 0; r < n.length && (t.push(n[r]), !(t.length >= e)); ++r);
    }
    if (t.length < e) {
      let n = Fn(this.props.OGGAvatars);
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
      return (0, F.jsxs)(`div`, {
        className: or,
        children: [
          (0, F.jsx)(zr, { children: x(`#Profile_Edit_Avatar_YourAvatars`) }),
          (0, F.jsx)(Hr, {
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
      return (0, F.jsxs)(`div`, {
        className: or,
        children: [
          (0, F.jsx)(zr, { children: x(`#Profile_Edit_Avatar_YourAvatars`) }),
          (0, F.jsx)(`div`, {
            className: sr,
            children: (0, F.jsx)(D, {
              className: lr,
              "flow-children": `row`,
              children: e.map((e) =>
                `communityitemid` in e
                  ? (0, F.jsxs)(
                      P.Fragment,
                      {
                        children: [
                          (0, F.jsx)(Br, {
                            avatar: e,
                            onSelected: this.SelectAnimatedAvatar,
                            large: !0,
                          }),
                          (0, F.jsx)(`div`, { className: ur }),
                        ],
                      },
                      e.communityitemid,
                    )
                  : `timestamp` in e
                    ? (0, F.jsxs)(
                        P.Fragment,
                        {
                          children: [
                            (0, F.jsx)(Vr, {
                              hash: e.avatar_hash,
                              onSelected: this.SelectPreviousAvatar,
                              large: !0,
                            }),
                            (0, F.jsx)(`div`, { className: ur }),
                          ],
                        },
                        e.avatar_hash,
                      )
                    : (0, F.jsxs)(
                        P.Fragment,
                        {
                          children: [
                            (0, F.jsx)(Vr, {
                              hash: e.avatar_hash,
                              onSelected: this.SelectOGGAvatar,
                              large: !0,
                            }),
                            (0, F.jsx)(`div`, { className: ur }),
                          ],
                        },
                        e.avatar_hash,
                      ),
              ),
            }),
          }),
          (0, F.jsx)(`div`, {
            className: cr,
            children: (0, F.jsx)(dt, {
              onClick: t,
              children: x(`#Profile_Edit_Avatar_SeeAll`),
            }),
          }),
        ],
      });
    }
  }
};
w([T], Y.prototype, `SelectAnimatedAvatar`, null),
  w([T], Y.prototype, `SelectOGGAvatar`, null),
  w([T], Y.prototype, `SelectPreviousAvatar`, null),
  (Y = w([i], Y));
var Rr = Y,
  zr = ({ children: e }) =>
    (0, F.jsx)(`div`, {
      className: ir,
      children: (0, F.jsx)(`div`, { className: ar, children: e }),
    });
function Br(e) {
  let { avatar: t, onSelected: n, large: r } = e;
  return (0, F.jsx)(Lr, {
    image: t,
    onSelected: n,
    className: N(dr, void 0, r && `te-1DEm8Vm0-`),
  });
}
var Vr = ({ hash: e, onSelected: t, large: n }) =>
    (0, F.jsx)(D, {
      className: N(dr, void 0, n && `te-1DEm8Vm0-`),
      onClick: () => t(e),
      onActivate: () => t(e),
      children: (0, F.jsx)(`img`, {
        src: me(e, n ? `full` : `medium`),
        loading: `lazy`,
      }),
    }),
  Hr = i(
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
      return (0, F.jsxs)(D, {
        "flow-children": `column`,
        children: [
          (0, F.jsx)(Ur, { rgAnimatedAvatars: e, onSelected: r }),
          (0, F.jsx)(Wr, { rgAvatars: o, onSelected: a }),
          (0, F.jsx)(Gr, {
            OGGAvatars: t,
            rgAvatars: s,
            onSelected: i,
            title: x(`#Profile_Edit_YourGameAvatars`),
          }),
          s.length < 20 &&
            (0, F.jsx)(Gr, {
              OGGAvatars: t,
              rgAvatars: t.GetOtherGameAvatars(),
              onSelected: i,
              title: x(`#Profile_Edit_MoreGameAvatars`),
            }),
        ],
      });
    },
  ),
  Ur = ({ rgAnimatedAvatars: e, onSelected: t }) =>
    e.length
      ? (0, F.jsxs)(`div`, {
          className: N(G, gr),
          children: [
            (0, F.jsx)(`div`, {
              className: hr,
              children: x(`#Profile_Edit_PurchasedFromRewardsStore`),
            }),
            (0, F.jsx)(D, {
              className: _r,
              "flow-children": `grid`,
              children: e.map((e) =>
                (0, F.jsx)(Br, { avatar: e, onSelected: t }, e.communityitemid),
              ),
            }),
          ],
        })
      : null,
  Wr = i(({ rgAvatars: e, onSelected: t }) =>
    e.length
      ? (0, F.jsxs)(`div`, {
          className: N(G, gr),
          children: [
            (0, F.jsx)(`div`, {
              className: hr,
              children: x(`#Profile_Edit_YourPreviousAvatars`),
            }),
            (0, F.jsx)(`div`, {
              className: _r,
              children: e.map((e) =>
                (0, F.jsx)(
                  Vr,
                  { hash: e.avatar_hash, onSelected: t },
                  e.avatar_hash,
                ),
              ),
            }),
          ],
        })
      : null,
  );
function Gr(e) {
  let { rgAvatars: t, OGGAvatars: n, onSelected: r, title: i } = e;
  return t.length
    ? (0, F.jsxs)(`div`, {
        className: N(G, gr),
        children: [
          (0, F.jsx)(`div`, { className: hr, children: i }),
          t.map((e) =>
            (0, F.jsx)(Kr, { OGGAvatars: n, game: e, onSelected: r }, e.appid),
          ),
        ],
      })
    : null;
}
function Kr(e) {
  let { game: t, onSelected: n, OGGAvatars: r } = e,
    [i, a] = P.useState(!1),
    { isLoading: o, data: s } = qr(r, t.appid, i),
    c;
  c =
    i && s
      ? s
      : t.avatar_count == t.avatars.length
        ? t.avatars
        : t.avatars.slice(0, 5);
  let l = t.avatar_count - c.length;
  return (0, F.jsxs)(`div`, {
    className: G,
    children: [
      (0, F.jsx)(`div`, { className: hr, children: t.name }),
      (0, F.jsxs)(D, {
        className: _r,
        "flow-children": `grid`,
        children: [
          c.map((e) =>
            (0, F.jsx)(
              Vr,
              { hash: e.avatar_hash, onSelected: n },
              e.avatar_hash,
            ),
          ),
          (!i || o) &&
            l > 0 &&
            (0, F.jsxs)(dt, {
              type: `button`,
              className: N(`_7HNDc2I39bQ-`, `v3-XCudXMsM-`, void 0),
              disabled: o,
              onClick: o ? void 0 : () => a(!0),
              children: [`+`, Ee(l)],
            }),
        ],
      }),
    ],
  });
}
function qr(e, t, n) {
  return c({
    queryKey: [`OGGAvatars`, t],
    queryFn: async () => {
      let n = await (
        await fetch(`${tt.COMMUNITY_BASE_URL}actions/GameAvatarsForGame/${t}`)
      ).json();
      return e.UpdateAvatarsForGame(t, n), n;
    },
    enabled: n,
  });
}
var Jr = class extends P.Component {
  state = { bReady: !1 };
  m_rgFrames;
  async componentDidMount() {
    (this.m_rgFrames = await this.props.ProfileItems.GetOwnedAvatarFrames()),
      this.setState({ bReady: !0 });
  }
  SelectFrame(e) {
    this.props.ProfileItems.SetEquippedAvatarFrame(e),
      this.props.fnOnCollapse();
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
      return (0, F.jsxs)(`div`, {
        className: or,
        children: [
          (0, F.jsx)(zr, { children: x(`#Profile_Edit_Avatar_YourFrames`) }),
          (0, F.jsx)(C, {
            children: (0, F.jsx)(Zr, {
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
      return (0, F.jsxs)(D, {
        className: or,
        "flow-children": `column`,
        children: [
          (0, F.jsx)(zr, { children: x(`#Profile_Edit_Avatar_YourFrames`) }),
          (0, F.jsx)(`div`, {
            className: sr,
            children: (0, F.jsxs)(D, {
              className: N(lr, void 0),
              "flow-children": `row`,
              children: [
                (0, F.jsx)(Xr, {
                  onSelected: this.SelectFrame,
                  large: !0,
                  ProfileItems: t,
                }),
                (0, F.jsx)(`div`, { className: ur }),
                (0, F.jsx)(C, {
                  children: e.map((e) =>
                    (0, F.jsxs)(
                      P.Fragment,
                      {
                        children: [
                          (0, F.jsx)(Yr, {
                            frame: e,
                            onSelected: this.SelectFrame,
                            large: !0,
                          }),
                          (0, F.jsx)(`div`, { className: ur }),
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
            (0, F.jsx)(`div`, {
              className: `Go2YjzqqaWI-`,
              children: (0, F.jsx)(dt, {
                onClick: n,
                children: x(`#Profile_Edit_Avatar_SeeAll`),
              }),
            }),
        ],
      });
    }
  }
};
w([T], Jr.prototype, `SelectFrame`, null);
function Yr(e) {
  let { frame: t, onSelected: n, large: r } = e;
  return (0, F.jsx)(Lr, {
    image: t,
    onSelected: n,
    className: N(fr, r && `te-1DEm8Vm0-`),
  });
}
var Xr = i(({ onSelected: e, ProfileItems: t, large: n }) => {
    let r = t.GetProfileModifierAvatarFrameURL();
    return r
      ? (0, F.jsx)(D, {
          className: N(fr, n && `te-1DEm8Vm0-`),
          onActivate: () => e(null),
          children: (0, F.jsx)(`img`, { src: r }),
        })
      : (0, F.jsx)(D, {
          className: N(fr, n && `te-1DEm8Vm0-`, void 0),
          onActivate: () => e(null),
          children: (0, F.jsx)(`div`, {
            className: pr,
            children: (0, F.jsx)(`div`, { className: mr }),
          }),
        });
  }),
  Zr = ({ rgFrames: e, ProfileItems: t, onSelected: n }) =>
    (0, F.jsxs)(`div`, {
      className: N(G, gr),
      children: [
        (0, F.jsx)(`div`, {
          className: hr,
          children: x(`#Profile_Edit_PurchasedFromRewardsStore`),
        }),
        (0, F.jsxs)(D, {
          className: _r,
          "flow-children": `grid`,
          children: [
            (0, F.jsx)(Xr, { onSelected: n, ProfileItems: t }),
            e.map((e) =>
              (0, F.jsx)(Yr, { frame: e, onSelected: n }, e.communityitemid),
            ),
          ],
        }),
      ],
    }),
  Qr = P.lazy(() =>
    ze(
      () => import(`./avatarcrop.js?contenthash=DEwLYoyI`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    ),
  ),
  $r = class extends P.Component {
    render() {
      return (0, F.jsx)(X, { ...this.props });
    }
  };
$r = w([i], $r);
var ei = $r,
  ti = class extends P.Component {
    m_disposer;
    componentDidMount() {
      document.querySelector(`.profile_small_header_avatar`).classList.add(kt),
        (this.m_disposer = u(() => {
          let { Profile: e, ProfileItems: t } = this.props,
            n = ri(
              e.GetCommittedAvatarHash(),
              t.GetCommittedEquippedAvatar(),
              `small`,
              { disableAnimation: !0 },
            );
          document
            .querySelectorAll(`.user_avatar > img`)
            .forEach((e) => (e.src = n));
        }));
    }
    componentWillUnmount() {
      document
        .querySelector(`.profile_small_header_avatar`)
        .classList.remove(kt),
        this.m_disposer();
    }
    render() {
      let { Profile: e, ProfileItems: t } = this.props;
      return gt.createPortal(
        (0, F.jsx)(si, { Profile: e, ProfileItems: t }),
        document.querySelector(`.profile_small_header_avatar`),
      );
    }
  },
  X = class extends P.Component {
    state = {
      uploadImage: null,
      strUploadError: ``,
      bAvatarCollectionExpanded: !1,
      bFrameCollectionExpanded: !1,
      bSaving: !1,
      bHTMLError: !1,
    };
    cropRef = P.createRef();
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
      (this.cropRef = P.createRef()),
        this.setState({
          uploadImage: null,
          strUploadError: ``,
          bAvatarCollectionExpanded: !1,
          bFrameCollectionExpanded: !1,
          bHTMLError: !1,
        });
    }
    RevertChanges() {
      this.props.ProfileItems.RevertAvatarChanges(),
        this.props.Profile.RevertToComittedAvatarHash(),
        this.Reset();
    }
    async OnSave() {
      this.setState({ bSaving: !0 }),
        this.state.uploadImage
          ? await this.SaveUpload()
          : await this.CommitChanges(),
        this.setState({ bSaving: !1 }),
        this.props.Profile.NotifyRNMobileAppStateChanged();
    }
    async SaveUpload() {
      let { Profile: e, ProfileItems: t, AvatarHistory: n } = this.props,
        r = await e.UploadAvatar(await this.cropRef.current?.getBlob());
      if (!r.bSuccess) {
        this.setState({ strUploadError: r.strError });
        return;
      }
      this.setState({ uploadImage: null, strUploadError: `` }),
        (this.cropRef = P.createRef()),
        t.SetEquippedAvatar(null, !0),
        n.RefreshAvatarHistory(),
        this.setState({ bHTMLError: (await t.CommitAvatarChanges()) !== 1 });
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
      this.setState({ bHTMLError: i !== 1 || (a !== 1 && o !== 1) }),
        r.RefreshAvatarHistory();
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
      return (0, F.jsxs)(Ge, {
        className: Tt,
        children: [
          (0, F.jsx)(g, {
            when: t.BIsAvatarUncomitted(),
            message: x(`#Profile_Edit_UnsavedChangesWarning`),
          }),
          (0, F.jsxs)(D, {
            "flow-children": `column`,
            children: [
              (0, F.jsxs)(D, {
                className: Et,
                "flow-children": `column`,
                children: [
                  (0, F.jsx)(v, { children: x(`#Profile_FieldAvatar`) }),
                  (0, F.jsx)(S, {
                    children: x(`#Profile_Edit_Avatar_Instructions`),
                  }),
                  (0, F.jsx)(J, {
                    strHTMLError: this.state.bHTMLError
                      ? x(`#ConnectionTrouble_FailedToConnect`)
                      : ``,
                  }),
                  (0, F.jsxs)(ni, {
                    Profile: e,
                    children: [
                      (0, F.jsxs)(`div`, {
                        className: Dt,
                        children: [
                          (0, F.jsx)(ii, { Profile: e, ProfileItems: t }),
                          (0, F.jsxs)(`div`, {
                            className: Ot,
                            children: [
                              (0, F.jsx)(oi, {
                                OnAvatarSelected: this.OnUploadSelected,
                                disabled: this.state.bSaving,
                                strError: this.state.strUploadError,
                              }),
                              (0, F.jsx)(`div`, {
                                children: x(
                                  `#Profile_Edit_Avatar_UploadInstructions`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      i &&
                        (0, F.jsx)(P.Suspense, {
                          fallback: null,
                          children: (0, F.jsx)(Qr, {
                            imageData: i,
                            ref: this.cropRef,
                          }),
                        }),
                      !i &&
                        !o &&
                        (0, F.jsx)(Rr, {
                          ...c,
                          bExpanded: a,
                          fnOnExpand: this.OnShowAllAvatarsClicked,
                        }),
                      !i &&
                        !a &&
                        (0, F.jsx)(Jr, {
                          ...c,
                          bExpanded: o,
                          fnOnExpand: this.OnShowAllFramesClicked,
                        }),
                    ],
                  }),
                ],
              }),
              (0, F.jsx)(K, {
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
w([T], X.prototype, `OnUploadSelected`, null),
  w([T], X.prototype, `OnShowAllAvatarsClicked`, null),
  w([T], X.prototype, `OnShowAllFramesClicked`, null),
  w([T], X.prototype, `Reset`, null),
  w([T], X.prototype, `RevertChanges`, null),
  w([T], X.prototype, `OnSave`, null),
  w([T], X.prototype, `SaveUpload`, null),
  w([T], X.prototype, `CommitChanges`, null);
var ni = ({ Profile: e, children: t }) =>
  e.BIsAvatarChangeOnCooldown()
    ? (0, F.jsx)(Ir, {
        rtCooldownEnd: e.GetAvatarChangeCooldownEndRTime(),
        strCooldownLabel: x(`#Profile_AvatarUploadingBanned`),
        strCooldownDescHTML: x(
          `#Profile_AvatarUploadingBanned_Desc`,
          W.k_strAvatarCooldownSupportURL,
        ),
        children: t,
      })
    : (0, F.jsx)(F.Fragment, { children: t });
function ri(e, t, n, r) {
  return t
    ? r?.disableAnimation
      ? B(t)
      : Jn(t)
    : me(e || `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`, n);
}
var ii = i(({ Profile: e, ProfileItems: t }) => {
    let n = e.GetAvatarHash(),
      r = t.GetEquippedAvatar(),
      i = t.GetEquippedAvatarFrame(),
      a = !i && t.GetEquippedProfileModifier();
    a && !t.BIsLegacyGoldenProfile(a.appid) && (a = null);
    let o = null;
    return (
      a ? (o = t.GetProfileModifierAvatarFrameURL()) : i && (o = Jn(i)),
      (0, F.jsxs)(`div`, {
        className: _t,
        children: [
          (0, F.jsx)(ai, {
            sizeClassName: xt,
            sizePx: 184,
            avatarURL: ri(n, r, `full`),
            frameURL: o,
            isGolden: !!a,
          }),
          (0, F.jsx)(ai, {
            sizeClassName: St,
            sizePx: 64,
            avatarURL: ri(n, r, `medium`),
            frameURL: o,
            isGolden: !!a,
          }),
          (0, F.jsx)(ai, {
            sizeClassName: Ct,
            sizePx: 32,
            avatarURL: ri(n, r, `small`),
            frameURL: o,
            isGolden: !!a,
          }),
        ],
      })
    );
  }),
  ai = ({
    sizeClassName: e,
    sizePx: t,
    avatarURL: n,
    frameURL: r,
    isGolden: i,
  }) =>
    (0, F.jsxs)(`div`, {
      className: N(vt, e),
      children: [
        (0, F.jsxs)(`div`, {
          className: yt,
          children: [
            (0, F.jsx)(`div`, { className: bt }),
            r &&
              (0, F.jsx)(`div`, {
                className: `Sddlck3cDZg-`,
                children: (0, F.jsx)(`img`, { src: r }),
              }),
            i && (0, F.jsx)(`div`, { className: `goldenAvatarOverlay` }),
            (0, F.jsx)(`img`, { src: n }),
          ],
        }),
        (0, F.jsxs)(`div`, { className: wt, children: [t, `px`] }),
      ],
    });
function oi(e) {
  let { OnAvatarSelected: t, disabled: n, strError: r } = e,
    i = P.useRef(void 0),
    a = P.useCallback(() => {
      let e = i.current?.files;
      e?.length > 0 &&
        e[0].type.startsWith(`image/`) &&
        (t(e[0]), (i.current.value = null));
    }, [t]);
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(`input`, {
        type: `file`,
        accept: `image/*`,
        style: { display: `none` },
        ref: i,
        onInput: a,
      }),
      !!r && (0, F.jsx)(`div`, { className: `L7lx2nCcx6E-`, children: r }),
      (0, F.jsx)(dt, {
        onClick: () => i.current.click(),
        disabled: n,
        children: x(`#Profile_UploadAvatar`),
      }),
    ],
  });
}
var si = i(({ Profile: e, ProfileItems: t }) => {
    let n = ri(
        e.GetCommittedAvatarHash(),
        t.GetCommittedEquippedAvatar(),
        `full`,
      ),
      r = t.GetCommittedEquippedAvatarFrame(),
      i = !r && t.GetCommittedEquippedProfileModifier(),
      a = null;
    return (
      i ? (a = t.GetProfileModifierAvatarFrameURL()) : r && (a = Jn(r)),
      (0, F.jsx)(`div`, {
        className: N(vt, St),
        children: (0, F.jsxs)(`div`, {
          className: yt,
          children: [
            a &&
              (0, F.jsx)(`div`, {
                className: `Sddlck3cDZg-`,
                children: (0, F.jsx)(`img`, { src: a }),
              }),
            (0, F.jsx)(`img`, { src: n }),
          ],
        }),
      })
    );
  }),
  ci = `u0Y6LE6vVFo-`;
function li(e) {
  let {
    Profile: { Location: t },
  } = e;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(di, { LocationStore: t }),
      (0, F.jsx)(fi, { LocationStore: t }),
      (0, F.jsx)(pi, { LocationStore: t }),
    ],
  });
}
async function ui(e, t) {
  let n = await e();
  return [
    { label: x(`#Profile_LocationDoNotDisplay`), data: null },
    ...n
      .map(t)
      .sort((e, t) =>
        e.data.strDisplayText.localeCompare(t.data.strDisplayText),
      ),
  ];
}
function di(e) {
  let { LocationStore: t } = e,
    { CountryCode: n, Country: r } = t,
    [i, a] = P.useState(),
    o = c({
      queryKey: [`CountryEdit`],
      queryFn: async () =>
        await ui(
          () => t.GetCountryList(),
          (e) => ({
            label: e.countryname,
            data: { strCode: e.countrycode, strDisplayText: e.countryname },
          }),
        ),
      staleTime: 1 / 0,
    });
  P.useEffect(() => {
    a(
      o.data?.find((e) => e.data?.strCode == t.CountryCode) ??
        (o.data?.length > 0 ? o.data[0] : void 0),
    );
  }, [o.data, t.CountryCode]);
  let s = P.useCallback(
    (e) => {
      t.SetCountry(
        e.data?.strCode,
        e.data?.strCode ? e.data.strDisplayText : void 0,
      ),
        a(e);
    },
    [t],
  );
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(`input`, { type: `hidden`, name: `country`, value: n || `` }),
      (0, F.jsx)(Fe, {
        contextMenuPositionOptions: { bDisablePopTop: !0 },
        label: x(`#Profile_FieldCountry`),
        rgOptions: o.data,
        selectedOption: i?.data,
        controlled: !0,
        disabled: o.isFetching,
        onChange: s,
        strDefaultLabel: r || x(`#Profile_LocationDoNotDisplay`),
        tooltip: Nr(`#Profile_DescriptionLocation`),
      }),
    ],
  });
}
function fi(e) {
  let { LocationStore: t } = e,
    { StateCode: n, State: r } = t,
    [i, a] = P.useState(),
    [o, s] = re(() => [t.BIsStateSelectionAvailable(), t.CountryCode]),
    l = c({
      queryKey: [`StateEdit`, s],
      queryFn: async () =>
        await ui(
          () => t.GetStateList(),
          (e) => ({
            label: e.statename,
            data: { strCode: e.statecode, strDisplayText: e.statename },
          }),
        ),
      staleTime: 1 / 0,
    });
  P.useEffect(() => {
    a(
      l.data?.find((e) => e.data?.strCode == t.StateCode) ??
        (l.data?.length > 0 ? l.data[0] : void 0),
    );
  }, [l.data, t.StateCode]);
  let u = P.useCallback(
      (e) => {
        t.SetState(
          e.data?.strCode,
          e.data?.strCode ? e.data.strDisplayText : void 0,
        ),
          a(e);
      },
      [t],
    ),
    d = o && !l.isError;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(`input`, { type: `hidden`, name: `state`, value: n || `` }),
      d &&
        (0, F.jsx)(Fe, {
          contextMenuPositionOptions: { bDisablePopTop: !0 },
          label: x(`#Profile_FieldState`),
          rgOptions: l.data,
          selectedOption: i?.data,
          controlled: !0,
          disabled: l.isFetching,
          onChange: u,
          strDefaultLabel: r || x(`#Profile_LocationDoNotDisplay`),
          tooltip: Nr(`#Profile_DescriptionLocation`),
        }),
    ],
  });
}
function pi(e) {
  let { LocationStore: t } = e,
    { CityCode: n, City: r } = t,
    [i, a] = P.useState(),
    [o, s, l] = re(() => [
      t.BIsCitySelectionAvailable(),
      t.CountryCode,
      t.StateCode,
    ]),
    u = c({
      queryKey: [`CityEdit`, s, l],
      queryFn: async () =>
        await ui(
          () => t.GetCityList(),
          (e) => ({
            label: e.cityname,
            data: { strCode: `` + e.cityid, strDisplayText: e.cityname },
          }),
        ),
      staleTime: 1 / 0,
      retry: !1,
    });
  P.useEffect(() => {
    a(
      u.data?.find((e) => e.data?.strCode == t.CityCode) ??
        (u.data?.length > 0 ? u.data[0] : void 0),
    );
  }, [u.data, t.CityCode]);
  let d = P.useCallback(
      (e) => {
        t.SetCity(
          e.data?.strCode,
          e.data?.strCode ? e.data.strDisplayText : void 0,
        ),
          a(e);
      },
      [t],
    ),
    f = o && !u.isError;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(`input`, { type: `hidden`, name: `city`, value: n || `` }),
      f &&
        (0, F.jsx)(Fe, {
          contextMenuPositionOptions: { bDisablePopTop: !0 },
          label: x(`#Profile_FieldCity`),
          rgOptions: u.data,
          selectedOption: i?.data,
          controlled: !0,
          disabled: u.isFetching,
          onChange: d,
          strDefaultLabel: r || x(`#Profile_LocationDoNotDisplay`),
          tooltip: Nr(`#Profile_DescriptionLocation`),
        }),
    ],
  });
}
var mi = `oK53QBwGoIY-`,
  hi = `trjttlcEZl4-`,
  gi = `QtUPaJi8HDw-`,
  _i = `SMZU--YCUFM-`,
  vi = class extends P.Component {
    state = { strSummary: `` };
    m_refTextInput = P.createRef();
    static getDerivedStateFromProps(e) {
      return { strSummary: e.Profile.GetSummary() };
    }
    OnChange(e) {
      this.SetInputValue(e.currentTarget.value);
    }
    InsertEmoticon(e, t) {
      t || this.m_refTextInput.current.focus(), this.InsertAtCursor(`:${e}:`);
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
      this.setState({ strSummary: e }, t), this.props.Profile.SetSummary(e);
    }
    render() {
      let { EmoticonStore: e, Profile: t } = this.props,
        { strSummary: n } = this.state;
      return (0, F.jsx)(yi, {
        Profile: t,
        children: (0, F.jsxs)(`div`, {
          className: _i,
          children: [
            (0, F.jsx)(ye, {
              nMinHeight: 40,
              name: `summary`,
              rows: 3,
              cols: 40,
              onChange: this.OnChange,
              className: gi,
              value: n,
              ref: this.m_refTextInput,
            }),
            (0, F.jsx)(`div`, {
              className: mi,
              children: (0, F.jsx)(pe, {
                className: hi,
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
w([T], vi.prototype, `OnChange`, null),
  w([T], vi.prototype, `InsertEmoticon`, null);
var yi = ({ Profile: e, children: t }) =>
    e.BIsProfileSummaryChangeOnCooldown()
      ? (0, F.jsx)(Ir, {
          rtCooldownEnd: e.GetProfileSummaryCooldownEndRTime(),
          strCooldownLabel: x(`#Profile_ProfileSummaryCooldown`),
          strCooldownDescHTML: x(
            `#Profile_ProfileSummaryCooldown_Desc`,
            W.k_strProfileSummaryCooldownSupportURL,
          ),
          children: t,
        })
      : (0, F.jsx)(F.Fragment, { children: t }),
  bi = class extends P.Component {
    state = { bSaving: !1, strHTMLError: `` };
    OnSubmit(e) {
      e.preventDefault(), this.CommitChanges(e.currentTarget);
    }
    async CommitChanges(e) {
      this.setState({ bSaving: !0, strHTMLError: `` });
      let t = await er(`profileSave`, new FormData(e));
      if (t.strRedirectURL) {
        window.location.href = `${t.strRedirectURL}/info`;
        return;
      }
      this.props.Profile.SetBasicInfoChangesComitted(),
        t.strHTMLError
          ? this.setState({ strHTMLError: t.strHTMLError })
          : this.setState({ strHTMLError: `` }),
        this.setState({ bSaving: !1 }),
        this.props.Profile.NotifyRNMobileAppStateChanged();
    }
    RevertChanges() {
      let { Profile: e } = this.props;
      e.RevertBasicInfoChanges(), this.setState({ strHTMLError: `` });
    }
    render() {
      let { Profile: e, EmoticonStore: t } = this.props,
        { bSaving: n, strHTMLError: r } = this.state;
      return (0, F.jsx)(D, {
        "flow-children": `column`,
        navEntryPreferPosition: at.MAINTAIN_Y,
        children: (0, F.jsxs)(`form`, {
          method: `POST`,
          action: `${L.ProfileURL}edit/info`,
          onSubmit: this.OnSubmit,
          children: [
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `sessionID`,
              value: j(),
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `type`,
              value: `profileSave`,
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_1_title`,
              value: ``,
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_1_url`,
              value: ``,
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_2_title`,
              value: ``,
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_2_url`,
              value: ``,
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_3_title`,
              value: ``,
            }),
            (0, F.jsx)(`input`, {
              type: `hidden`,
              name: `weblink_3_url`,
              value: ``,
            }),
            (0, F.jsx)(v, { children: x(`#Profile_About`) }),
            (0, F.jsx)(S, { children: (0, F.jsx)(xi, {}) }),
            (0, F.jsx)(J, { strHTMLError: r }),
            (0, F.jsxs)(Mr, {
              title: x(`#Profile_Edit_BasicInfo`),
              children: [
                (0, F.jsx)(Si, { Profile: e }),
                !y(A.EREALM) && (0, F.jsx)(Di, { Profile: e }),
              ],
            }),
            !y(A.EREALM) &&
              (0, F.jsx)(Mr, {
                title: x(`#Profile_Edit_Location`),
                children: (0, F.jsx)(li, { Profile: e }),
              }),
            !y(A.EREALM) &&
              (0, F.jsx)(Mr, {
                title: x(`#Profile_FieldSummary`),
                children: (0, F.jsx)(vi, { Profile: e, EmoticonStore: t }),
              }),
            !y(A.EREALM) &&
              (0, F.jsx)(Mr, {
                title: x(`#Profile_Edit_Preferences`),
                children: (0, F.jsx)(ki, { Profile: e }),
              }),
            (0, F.jsx)(K, { onCancel: this.RevertChanges, disabled: n }),
          ],
        }),
      });
    }
  };
w([T], bi.prototype, `OnSubmit`, null),
  w([T], bi.prototype, `RevertChanges`, null);
var xi = class extends P.Component {
    render() {
      return (0, F.jsx)(`div`, {
        style: { display: `block` },
        children: (0, F.jsx)(le, {
          text: x(
            y(A.EREALM)
              ? `#Profile_Edit_About_Instructions_SteamChina`
              : `#Profile_Edit_About_Instructions`,
          ),
        }),
      });
    }
  },
  Si = class extends P.Component {
    OnPersonaNameChange(e) {
      this.props.Profile.SetPersonaName(e.target.value);
    }
    OnRealNameChange(e) {
      this.props.Profile.SetRealName(e.target.value);
    }
    render() {
      let { Profile: e } = this.props;
      return (0, F.jsxs)(F.Fragment, {
        children: [
          (0, F.jsxs)(Ci, {
            Profile: e,
            children: [
              (0, F.jsx)(Ae, {
                label: x(`#Profile_FieldProfileName`),
                disabled: e.BIsPersonaNameChangeOnCooldown(),
                name: `personaName`,
                value: e.GetPersonaName(),
                onChange: this.OnPersonaNameChange,
              }),
              (0, F.jsx)(wi, { Profile: e }),
            ],
          }),
          !y(A.EREALM) &&
            (0, F.jsxs)(Ti, {
              Profile: e,
              children: [
                (0, F.jsx)(Ae, {
                  label: x(`#Profile_FieldRealName`),
                  disabled: e.BIsProfileSummaryChangeOnCooldown(),
                  tooltip: Nr(`#Profile_DescriptionRealName`),
                  name: `real_name`,
                  value: e.GetRealName(),
                  onChange: this.OnRealNameChange,
                }),
                (0, F.jsx)(Ei, { Profile: e }),
              ],
            }),
        ],
      });
    }
  };
w([T], Si.prototype, `OnPersonaNameChange`, null),
  w([T], Si.prototype, `OnRealNameChange`, null),
  (Si = w([i], Si));
var Ci = ({ Profile: e, children: t }) =>
    e.BIsPersonaNameChangeOnCooldown()
      ? (0, F.jsx)(Ir, {
          rtCooldownEnd: e.GetPersonaNameCooldownEndRTime(),
          strCooldownLabel: x(`#Profile_PersonaNameCooldown`),
          strCooldownDescHTML: x(
            `#Profile_PersonaNameCooldown_Desc`,
            W.k_strPersonaNameCooldownSupportURL,
          ),
          children: t,
        })
      : (0, F.jsx)(F.Fragment, { children: t }),
  wi = class extends P.Component {
    render() {
      let { Profile: e } = this.props;
      return e.HasFilteredPersonaName()
        ? (0, F.jsx)(`div`, {
            className: ci,
            children: ut(
              `#Profile_PersonaNameFiltered`,
              (0, F.jsx)(`a`, { href: W.k_strNameFilteredSupportURL }),
            ),
          })
        : null;
    }
  },
  Ti = ({ Profile: e, children: t }) =>
    e.BIsProfileSummaryChangeOnCooldown()
      ? (0, F.jsx)(Ir, {
          rtCooldownEnd: e.GetProfileSummaryCooldownEndRTime(),
          strCooldownLabel: x(`#Profile_RealNameCooldown`),
          strCooldownDescHTML: x(
            `#Profile_RealNameCooldown_Desc`,
            W.k_strPersonaNameCooldownSupportURL,
          ),
          children: t,
        })
      : (0, F.jsx)(F.Fragment, { children: t }),
  Ei = class extends P.Component {
    render() {
      let { Profile: e } = this.props;
      return e.HasFilteredRealName()
        ? (0, F.jsx)(`div`, {
            className: ci,
            children: ut(
              `#Profile_RealNameFiltered`,
              (0, F.jsx)(`a`, { href: W.k_strNameFilteredSupportURL }),
            ),
          })
        : null;
    }
  },
  Di = class extends P.Component {
    OnProfileURLChange(e) {
      this.props.Profile.SetCustomURL(e.target.value);
    }
    render() {
      let { Profile: e } = this.props;
      return (0, F.jsx)(F.Fragment, {
        children: (0, F.jsx)(Ae, {
          label: x(`#Profile_FieldCustomURL`),
          tooltip: Nr(`#Profile_DescriptionCustomURL`),
          name: `customURL`,
          value: e.GetCustomURL(),
          onChange: this.OnProfileURLChange,
          description: x(
            `#Profile_ProfileAvailableAtURL`,
            e.GetConstructedURL(),
          ),
        }),
      });
    }
  };
w([T], Di.prototype, `OnProfileURLChange`, null), (Di = w([i], Di));
var Oi = class extends P.Component {
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
Oi = w([i], Oi);
var ki = class extends P.Component {
  OnProfileAwardsCheckboxChecked(e) {
    let { Profile: t } = this.props,
      n = e,
      r = t.GetPreferences();
    (r.hide_profile_awards = n), t.SetPreferences(r);
  }
  render() {
    let { Profile: e } = this.props,
      t = e.GetPreferences();
    return (0, F.jsxs)(`div`, {
      children: [
        (0, F.jsx)(Ne, {
          label: x(`#Profile_Preferences_HideProfileAwards`),
          checked: t.hide_profile_awards,
          onChange: this.OnProfileAwardsCheckboxChecked,
        }),
        (0, F.jsx)(`input`, {
          type: `hidden`,
          name: `hide_profile_awards`,
          value: +!!t.hide_profile_awards,
        }),
      ],
    });
  }
};
w([T], ki.prototype, `OnProfileAwardsCheckboxChecked`, null), (ki = w([i], ki));
var Ai = `GhpgMs4LuzQ-`,
  ji = `yOrk2V0Iu-4-`,
  Mi = `p8t4WX8LgAY-`,
  Ni = `uAxgcoAsxCo-`,
  Pi = `_5PAQ8Ex2u08-`,
  Fi = `MnZjEyxdqWQ-`,
  Ii = `vIWKwoLihG4-`,
  Li = class extends P.Component {
    state = { bSaving: !1, strHTMLError: `` };
    async CommitFavoriteBadge() {
      let e = this.props.Badges;
      this.setState({ bSaving: !0 }),
        (await e.CommitFavoriteBadgeChanges()) == 1
          ? this.setState({ strHTMLError: `` })
          : this.setState({
              strHTMLError: x(`#ConnectionTrouble_FailedToConnect`),
            }),
        this.setState({ bSaving: !1 });
    }
    RevertFavoriteBadge() {
      this.props.Badges.RevertFavoriteBadge(),
        this.setState({ strHTMLError: `` });
    }
    componentWillUnmount() {
      this.props.Badges.RevertFavoriteBadge();
    }
    render() {
      let { Badges: e } = this.props,
        { bSaving: t, strHTMLError: n } = this.state,
        r = e.FavoriteBadge;
      return (0, F.jsx)(C, {
        children: (0, F.jsxs)(D, {
          "flow-children": `column`,
          children: [
            (0, F.jsx)(g, {
              when: e.BFavoriteBadgeUncomitted(),
              message: x(`#Profile_Edit_UnsavedChangesWarning`),
            }),
            (0, F.jsx)(v, { children: x(`#Profile_Edit_FavoriteBadge`) }),
            (0, F.jsx)(S, { children: x(`#Profile_Edit_Badge_Instructions`) }),
            (0, F.jsx)(J, { strHTMLError: n }),
            r && (0, F.jsx)(zi, { badge: r }),
            !r && (0, F.jsx)(Bi, { count: e.Badges.length }),
            (0, F.jsx)(Fr, {
              getSearchFields: Vi,
              getItems: async () => e.Badges,
              onItemSelected: (t) => {
                e.SetFavoriteBadge(t);
              },
              ItemComponent: Hi,
            }),
            (0, F.jsx)(K, {
              onSave: this.CommitFavoriteBadge,
              onCancel: this.RevertFavoriteBadge,
              disabled: t,
            }),
          ],
        }),
      });
    }
  };
w([T], Li.prototype, `CommitFavoriteBadge`, null),
  w([T], Li.prototype, `RevertFavoriteBadge`, null),
  (Li = w([i], Li));
var Ri = Li,
  zi = ({ badge: e, children: t }) =>
    (0, F.jsxs)(`div`, {
      className: N(Ai, Fi),
      children: [
        (0, F.jsx)(`img`, { className: ji, src: e.GetIconURL() }),
        (0, F.jsxs)(`div`, {
          className: Ni,
          children: [
            (0, F.jsx)(`div`, { className: void 0, children: e.GetName() }),
            (0, F.jsx)(`div`, { className: Pi, children: e.GetGameName() }),
          ],
        }),
      ],
    }),
  Bi = ({ count: e, children: t }) =>
    (0, F.jsxs)(`div`, {
      className: N(Ai, Fi),
      children: [
        (0, F.jsx)(`div`, {
          className: Mi,
          children: (0, F.jsx)(`img`, {
            className: ji,
            src: `${A.COMMUNITY_CDN_URL}public/images/trans.gif`,
          }),
        }),
        (0, F.jsxs)(`div`, {
          className: Ni,
          children: [
            (0, F.jsx)(`div`, { className: void 0, children: `None selected` }),
            (0, F.jsx)(`div`, {
              className: Pi,
              children: `${e} badges available`,
            }),
          ],
        }),
      ],
    }),
  Vi = (e) => [e.GetName(), e.GetGameName()],
  Hi = ({ Item: e, onSelected: t }) => {
    let n = e;
    return (0, F.jsxs)(D, {
      className: N(Ai, Ii),
      onActivate: t,
      children: [
        (0, F.jsx)(`img`, {
          className: ji,
          src: n.GetIconURL(),
          loading: `lazy`,
        }),
        (0, F.jsxs)(`div`, {
          className: Ni,
          children: [
            (0, F.jsx)(`div`, { className: void 0, children: n.GetName() }),
            (0, F.jsx)(`div`, { className: Pi, children: n.GetGameName() }),
          ],
        }),
      ],
    });
  },
  Ui = `-eDTNUE7eD0-`,
  Wi = `_0lb1WNpEm4w-`,
  Gi = `_0QDGl6xh9r0-`,
  Ki = `XbfPY-6airw-`,
  qi = `ew8T-alpGiA-`,
  Ji = class extends P.Component {
    state = { bSaving: !1, strHTMLError: `` };
    async CommitFavoriteGroup() {
      let e = this.props.Profile.GroupList;
      this.setState({ bSaving: !0 });
      let t = await e.CommitPrimaryGroup();
      t.strHTMLError
        ? this.setState({ strHTMLError: t.strHTMLError })
        : this.setState({ strHTMLError: `` }),
        this.setState({ bSaving: !1 });
    }
    RevertFavoriteGroup() {
      this.props.Profile.GroupList.RevertPrimaryGroupChanges(),
        this.setState({ strHTMLError: `` });
    }
    componentWillUnmount() {
      this.props.Profile.GroupList.RevertPrimaryGroupChanges();
    }
    render() {
      let { Profile: e } = this.props,
        { bSaving: t, strHTMLError: n } = this.state,
        r = e.GroupList,
        i = r.PrimaryGroup;
      return (0, F.jsxs)(D, {
        "flow-children": `column`,
        children: [
          (0, F.jsx)(g, {
            when: r.BPrimaryGroupUncomitted(),
            message: x(`#Profile_Edit_UnsavedChangesWarning`),
          }),
          (0, F.jsx)(v, { children: x(`#Profile_Edit_FavoriteGroup`) }),
          (0, F.jsx)(S, { children: x(`#Profile_Edit_Group_Instructions`) }),
          (0, F.jsx)(J, { strHTMLError: n }),
          i && (0, F.jsx)(Xi, { group: i }),
          (0, F.jsx)(Fr, {
            getSearchFields: Zi,
            getItems: async () => (
              await r.BWaitForUserGroups(), r.GetUserGroups()
            ),
            onItemSelected: (e) => {
              r.SetPrimaryGroup(e);
            },
            ItemComponent: Qi,
          }),
          (0, F.jsx)(K, {
            onSave: this.CommitFavoriteGroup,
            onCancel: this.RevertFavoriteGroup,
            disabled: t,
          }),
        ],
      });
    }
  };
w([T], Ji.prototype, `CommitFavoriteGroup`, null),
  w([T], Ji.prototype, `RevertFavoriteGroup`, null),
  (Ji = w([i], Ji));
var Yi = Ji,
  Xi = ({ group: e, children: t }) =>
    (0, F.jsxs)(`div`, {
      className: N(Ui, Ki),
      children: [
        (0, F.jsx)(`img`, { className: Wi, src: e.GetAvatarURL(`full`) }),
        (0, F.jsx)(`div`, {
          className: Gi,
          children: (0, F.jsx)(`div`, {
            className: void 0,
            children: e.GetName(),
          }),
        }),
      ],
    }),
  Zi = (e) => [e.GetName()],
  Qi = ({ Item: e, onSelected: t }) => {
    let n = e;
    return (0, F.jsxs)(D, {
      className: N(Ui, qi),
      onActivate: t,
      children: [
        (0, F.jsx)(`img`, {
          className: Wi,
          src: n.GetAvatarURL(`full`),
          loading: `lazy`,
        }),
        (0, F.jsx)(`div`, {
          className: Gi,
          children: (0, F.jsx)(`div`, {
            className: void 0,
            children: n.GetName(),
          }),
        }),
      ],
    });
  },
  $i = `CHixAKCJVI4-`,
  ea = `H3rXlZmoLOw-`,
  ta = `pPe3pevh0N0-`,
  na = `l9xD6AJjWLU-`,
  ra = `Iv5qi9wmi0A-`,
  ia = `_8kigsBPtEnA-`,
  aa = `NJ-UhbLtvH0-`,
  oa = ({ Item: e, small: t }) => {
    let n = Zn(e, t);
    return Object.keys(n).length == 0
      ? null
      : (0, F.jsx)(`video`, {
          loop: !0,
          preload: `none`,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          children: Object.keys(n).map((e) =>
            (0, F.jsx)(`source`, { src: n[e], type: e }, e),
          ),
        });
  },
  sa = ({ Background: e, className: t, small: n }) =>
    e
      ? (0, F.jsx)(`div`, {
          className: t,
          children: (0, F.jsx)(oa, { Item: e, small: n }),
        })
      : null;
function ca(e) {
  e.currentTarget.querySelector(`video`).play();
}
function la(e) {
  e.detail.focusedNode.Element.querySelector(`video`).play();
}
function ua(e) {
  return [e.item_title, e.app_name];
}
function da(e, t) {
  return e ? (t ? e.communityitemid === t.communityitemid : !1) : !t;
}
var fa = class extends P.Component {
  RevertChanges() {
    this.props.ProfileEdit.ProfileItems.RevertMiniProfileBackgroundChanges();
  }
  render() {
    let { ProfileEdit: e } = this.props,
      { Profile: t, ProfileItems: n, MiniProfileOverrideData: r } = e,
      { MiniProfileData: i, PersonaState: a } = t;
    return (0, F.jsxs)(F.Fragment, {
      children: [
        (0, F.jsx)(v, { children: x(`#Profile_Edit_MiniProfile`) }),
        (0, F.jsx)(S, {
          children: x(`#Profile_Edit_MiniProfile_Instructions`),
        }),
        (0, F.jsx)(ma, {
          ProfileItems: n,
          Profile: t,
          MiniProfileOverrideData: r,
          onDismiss: this.RevertChanges,
        }),
      ],
    });
  }
};
w([T], fa.prototype, `RevertChanges`, null), (fa = w([i], fa));
var pa = fa,
  ma = i(
    ({
      Profile: e,
      ProfileItems: t,
      MiniProfileOverrideData: n,
      onDismiss: r,
    }) => {
      let i = t.GetEquippedProfileModifier();
      return (
        i && !t.BIsLegacyGoldenProfile(i.appid) && (i = null),
        (0, F.jsx)(q, {
          fnRevertChanges: r,
          getSearchFields: ua,
          getItems: () => t.GetOwnedMiniProfileBackgrounds(),
          fnCommitChanges: async (e) => (
            t.SetEquippedMiniProfileBackground(e), t.CommitMiniProfileChanges()
          ),
          ItemComponent: ga,
          RenderDefaultComponent: ({ onSelected: e, active: t }) =>
            (0, F.jsx)(_a, { onSelected: e, active: t, Modifier: i }),
          ActiveItem: t.GetEquippedMiniProfileBackground(),
          fnIsSameItem: da,
          fnRenderPreview: (r) =>
            (0, F.jsx)(ha, {
              MiniProfileBackground: r,
              Profile: e,
              ProfileItems: t,
              MiniProfileOverrideData: n,
            }),
        })
      );
    },
  ),
  ha = ({
    MiniProfileBackground: e,
    MiniProfileOverrideData: t,
    Profile: n,
    ProfileItems: r,
  }) => {
    let { MiniProfileData: i, PersonaState: a } = n,
      o;
    if (e) {
      o = Zn(e);
      let t = B(e);
      t && (o.image = t);
    } else {
      o = r.GetProfileModifierMiniProfileBackgroundMovies();
      let e = r.GetProfileModifierMiniProfileBackground();
      e && (o.image = e);
    }
    return (0, F.jsx)(F.Fragment, {
      children: (0, F.jsx)(`div`, {
        className: void 0,
        children: (0, F.jsx)(An, {
          persona: a,
          className: $i,
          data_loader: i,
          community_data_override: { ...t, profile_background: o },
        }),
      }),
    });
  },
  ga = ({ Item: e, onSelected: t, children: n, active: r }) => {
    let i = Zn(e),
      a = Object.keys(i).length > 0;
    return (0, F.jsxs)(D, {
      className: N(ea, a && `ZV8vOfk4n5Q-`, r && `zEk-OP0Mu08-`),
      onActivate: t,
      onMouseEnter: a ? ca : void 0,
      children: [
        (0, F.jsxs)(`div`, {
          className: ta,
          children: [
            (0, F.jsx)(`img`, { src: B(e), loading: `lazy` }),
            a &&
              (0, F.jsx)(`div`, {
                className: `_0Pw3llB9it0-`,
                children: (0, F.jsx)(oa, { Item: e }),
              }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          className: na,
          children: [
            (0, F.jsxs)(`div`, {
              children: [
                (0, F.jsx)(`div`, { className: ia, children: e.item_title }),
                (0, F.jsx)(`div`, { className: aa, children: e.app_name }),
              ],
            }),
            n,
          ],
        }),
      ],
    });
  },
  _a = ({ Modifier: e, onSelected: t, children: n, active: r }) =>
    e
      ? (0, F.jsx)(ga, { Item: e, onSelected: t, active: r })
      : (0, F.jsxs)(D, {
          className: N(ea, r && `zEk-OP0Mu08-`),
          onClick: t,
          onActivate: t,
          children: [
            (0, F.jsx)(`div`, {
              className: N(ta, ra),
              children: (0, F.jsx)(`img`, {
                src: `${A.COMMUNITY_CDN_URL}public/images/trans.gif`,
                loading: `lazy`,
              }),
            }),
            (0, F.jsxs)(`div`, {
              className: na,
              children: [
                (0, F.jsxs)(`div`, {
                  children: [
                    (0, F.jsx)(`div`, {
                      className: ia,
                      children: x(`#Profile_Edit_DefaultBlankBackground`),
                    }),
                    (0, F.jsx)(`div`, { className: aa }),
                  ],
                }),
                n,
              ],
            }),
          ],
        }),
  va = class extends P.Component {
    render() {
      let e = this.props.PrivacyStore;
      return (0, F.jsxs)(D, {
        className: `ProfilePrivacyRoot`,
        "flow-children": `column`,
        navEntryPreferPosition: at.MAINTAIN_Y,
        children: [
          (0, F.jsx)(Z, {
            PrivacyStore: e,
            strLabel: x(`#ProfilePrivacy_BasicDetails`),
            strReadOnlySetting: Ln(3),
            children: x(`#ProfilePrivacy_BasicDetails_Desc`),
          }),
          (0, F.jsx)(`div`, { className: `ProfilePrivacyHR` }),
          (0, F.jsxs)(Z, {
            PrivacyStore: e,
            strLabel: x(`#ProfilePrivacy_Profile`),
            PrivacyKey: `PrivacyProfile`,
            children: [
              (0, F.jsx)(`p`, { children: x(`#ProfilePrivacy_Profile_Desc`) }),
              (0, F.jsx)(`p`, { children: x(`#ProfilePrivacy_Profile_Desc2`) }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            className: `ProfilePrivacyRoot_Indent`,
            children: [
              (0, F.jsxs)(Z, {
                PrivacyStore: e,
                strLabel: x(`#ProfilePrivacy_GameLibrary`),
                PrivacyKey: `PrivacyOwnedGames`,
                LimitPrivacyKey: `PrivacyProfile`,
                children: [
                  x(`#ProfilePrivacy_GameLibrary_Desc`),
                  e.GetPrivacySetting(`PrivacyOwnedGames`) != 1 &&
                    (0, F.jsx)(wa, {
                      PrivacyStore: e,
                      PrivacyKey: `PrivacyPlaytime`,
                      LimitPrivacyKey: `PrivacyOwnedGames`,
                      children: x(`#ProfilePrivacy_Playtime`),
                    }),
                ],
              }),
              (0, F.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              (0, F.jsx)(Z, {
                PrivacyStore: e,
                strLabel: x(`#ProfilePrivacy_FriendsList`),
                PrivacyKey: `PrivacyFriendsList`,
                LimitPrivacyKey: `PrivacyProfile`,
                children: x(`#ProfilePrivacy_FriendsList_Desc`),
              }),
              (0, F.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              (0, F.jsxs)(Z, {
                PrivacyStore: e,
                strLabel: x(`#ProfilePrivacy_Inventory`),
                PrivacyKey: `PrivacyInventory`,
                LimitPrivacyKey: `PrivacyProfile`,
                children: [
                  (0, F.jsx)(D, {
                    "flow-children": `row`,
                    children: Ke(
                      `#ProfilePrivacy_Inventory_Desc`,
                      (0, F.jsx)(E, {
                        href: L.ProfileURL + `inventory/`,
                        children: x(`#ProfilePrivacy_Inventory_Inventory`),
                      }),
                      (0, F.jsx)(E, {
                        href: L.ProfileURL + `inventory/#753_6`,
                        children: x(`#ProfilePrivacy_Inventory_TradingCards`),
                      }),
                    ),
                  }),
                  e.GetPrivacySetting(`PrivacyInventory`) != 1 &&
                    (0, F.jsx)(wa, {
                      PrivacyStore: e,
                      PrivacyKey: `PrivacyInventoryGifts`,
                      LimitPrivacyKey: `PrivacyInventory`,
                      children: x(`#ProfilePrivacy_Gifts`),
                    }),
                ],
              }),
              (0, F.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              (0, F.jsxs)(ya, {
                children: [
                  x(`#ProfilePrivacy_Comments`),
                  `:`,
                  (0, F.jsx)(Ea, { PrivacyStore: e }),
                ],
              }),
              !y(A.EREALM) &&
                (0, F.jsx)(`div`, { className: `ProfilePrivacyHR` }),
              !y(A.EREALM) &&
                (0, F.jsx)(Z, {
                  PrivacyStore: e,
                  strLabel: x(`#ProfilePrivacy_UGC`),
                  strReadOnlySetting: x(`#Privacy_PerItem`),
                  children: (0, F.jsx)(D, {
                    "flow-children": `row`,
                    children: Ke(
                      `#ProfilePrivacy_UGC_Desc`,
                      (0, F.jsx)(E, {
                        href: L.ProfileURL + `screenshots/`,
                        children: x(`#ProfilePrivacy_UGC_Desc_Screenshots`),
                      }),
                      (0, F.jsx)(E, {
                        href: L.ProfileURL + `myworkshopfiles/`,
                        children: x(`#ProfilePrivacy_UGC_Desc_WorkshopItems`),
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
va = w([i], va);
function Z(e) {
  let t;
  return (
    (t = e.strReadOnlySetting
      ? (0, F.jsx)(Da, { strLabel: e.strReadOnlySetting })
      : (0, F.jsx)(Sa, {
          PrivacyStore: e.PrivacyStore,
          PrivacyKey: e.PrivacyKey,
          LimitPrivacyKey: e.LimitPrivacyKey,
        })),
    (0, F.jsxs)(P.Fragment, {
      children: [
        (0, F.jsxs)(ya, { children: [e.strLabel, `:`, t] }),
        (0, F.jsx)(ba, { children: e.children }),
      ],
    })
  );
}
function ya(e) {
  return (0, F.jsx)(`div`, {
    className: `ProfilePrivacyHeader`,
    children: e.children,
  });
}
function ba(e) {
  return (0, F.jsx)(`div`, {
    className: `ProfilePrivacyDesc`,
    children: e.children,
  });
}
function xa(e) {
  let t = [
      { label: x(`#Privacy_Public`), data: 3 },
      { label: x(`#Privacy_FriendsOnly`), data: 2 },
      { label: x(`#Privacy_Private`), data: 1 },
    ],
    n = e ?? 3;
  return t.filter((e) => n >= e.data);
}
var Sa = i(function (e) {
  let { PrivacyStore: t, PrivacyKey: n, LimitPrivacyKey: r, children: i } = e,
    a = P.useCallback(() => {
      if (r) return t.GetPrivacySetting(r);
    }, [t, r]),
    o = P.useCallback(
      (e) => {
        t.ChangePrivacySetting(n, e);
      },
      [t, n],
    ),
    s = t.GetPrivacySetting(n);
  Ln(s);
  let c = xa(a());
  return (0, F.jsxs)(P.Fragment, {
    children: [
      (0, F.jsx)(je, {
        strDropDownButtonClassName: `ProfilePrivacyDropDown`,
        bMatchWidth: !1,
        rgOptions: c,
        onChange: (e) => o(e.data),
        selectedOption: s,
      }),
      (0, F.jsx)(Ca, { eSaveState: t.GetSaveState(n) }),
    ],
  });
});
function Ca(e) {
  switch (e.eSaveState) {
    case 1:
      return (0, F.jsx)(`div`, {
        className: `PrivacySaveNotice Saving`,
        children: x(`#Shared_Saving`),
      });
    case 3:
      return (0, F.jsx)(`div`, {
        className: `PrivacySaveNotice Error`,
        children: x(`#Error_Error`),
      });
    case 2:
      return (0, F.jsx)(`div`, {
        className: `PrivacySaveNotice Saved`,
        children: x(`#Shared_Saved`),
      });
    default:
      return null;
  }
}
function wa(e) {
  let { PrivacyStore: t, PrivacyKey: n, LimitPrivacyKey: r, children: i } = e,
    a = P.useCallback(
      (e) => {
        let i = e.currentTarget.checked ? 1 : 3;
        t.ChangePrivacySetting(n, i, r);
      },
      [t, n, r],
    ),
    o = re(() => t.GetPrivacySetting(n)) == 1;
  return (0, F.jsx)(`div`, {
    className: `ProfilePrivacyCheckbox`,
    children: (0, F.jsxs)(`label`, {
      children: [
        (0, F.jsx)(He, {
          className: `ProfilePrivacyCheckbox_Input`,
          type: `checkbox`,
          checked: o,
          onChange: a,
        }),
        (0, F.jsx)(`div`, {
          className: `ProfilePrivacyCheckbox_Desc`,
          children: i,
        }),
      ],
    }),
  });
}
function Ta(e) {
  let t = [
      { label: x(`#Profile_CommentPermission_Public_Desc`), data: 1 },
      { label: x(`#Profile_CommentPermission_FriendsOnly_Desc`), data: 0 },
      { label: x(`#Profile_CommentPermission_Private_Desc`), data: 2 },
    ],
    n = e ?? 3;
  return t.filter((e) => n >= e.data);
}
var Ea = class extends P.Component {
  constructor(e) {
    super(e), (this.state = { eSaveState: 0 });
  }
  OnSettingChanged(e) {
    this.props.PrivacyStore.ChangeCommentPermission(e);
  }
  render() {
    let e = this.props.PrivacyStore.CommentPermission,
      t = this.props.PrivacyStore.GetPrivacySetting(`PrivacyProfile`);
    Rn(zn(e, t));
    let n = Ta(t);
    return (0, F.jsxs)(P.Fragment, {
      children: [
        (0, F.jsx)(je, {
          strDropDownButtonClassName: `ProfilePrivacyDropDown`,
          rgOptions: n,
          bMatchWidth: !1,
          onChange: (e) => this.OnSettingChanged(e.data),
          selectedOption: e,
        }),
        (0, F.jsx)(Ca, {
          eSaveState: this.props.PrivacyStore.GetCommentSaveState(),
        }),
      ],
    });
  }
};
w([T], Ea.prototype, `OnSettingChanged`, null), (Ea = w([i], Ea));
function Da(e) {
  return (0, F.jsx)(`div`, {
    className: `ProfilePrivacyDropDown readonly`,
    children: e.strLabel,
  });
}
var Oa = `QSRYwDyRJpA-`,
  ka = `Kl4yLVAlSK4-`,
  Aa = `P5Ee-D6e8fE-`,
  ja = `_37gbYtNnaBY-`,
  Ma = `FLabDw-GIVg-`,
  Na = `RAj32F9TtcA-`,
  Pa = `_19-QX3QBDv8-`,
  Fa = `yPKUSjQQsqE-`,
  Ia = `p-SRcfdbkRA-`,
  La = `-J2fk28lcs4-`,
  Ra = `U6-9u2ehi-8-`,
  za = `_3TjgVFdpBiM-`,
  Ba = `HxxypIoo01A-`,
  Va = `VY6D0pbOuM8-`,
  Ha = `kRZ2mFx0iSE-`,
  Ua = `QOvV5Hm8kmE-`,
  Wa = `SK1jYtAz1f0-`,
  Ga = t({
    BlueRedTheme: () => to,
    BurntOrangeTheme: () => uo,
    ColorNightmareTheme: () => go,
    CosmicTheme: () => qa,
    DarkModeTheme: () => Xa,
    DefaultTheme: () => Ka,
    FlatGreyTheme: () => fo,
    GhostTheme: () => ho,
    GoldBurgundyTheme: () => no,
    GoldTheme: () => lo,
    GoldenProfileDebutTheme: () => io,
    GoldenWeekProfile2021Theme: () => oo,
    GreenSlimeTheme: () => mo,
    Lunar2022Theme: () => yo,
    MidnightTheme: () => Ya,
    MurugiahTheme: () => _o,
    MutedBlueTheme: () => co,
    MutedRedTheme: () => $a,
    PinkTealTheme: () => Qa,
    PurpleTheme: () => po,
    SteamDeckTheme: () => bo,
    SteamGreenTheme: () => eo,
    SteelTheme: () => Za,
    Summer2021Theme: () => so,
    SummerTheme: () => Ja,
    VibrantBlueTheme: () => ro,
    Winter2021Theme: () => vo,
    WinterProfile2020Theme: () => ao,
    default: () => xo,
  }),
  Ka = `_29uIKY6HXVk-`,
  qa = `qYxOfyXHDsA-`,
  Ja = `fZf6-fp5PGw-`,
  Ya = `_0qcWfIeqxHg-`,
  Xa = `EGTYGHd0kkw-`,
  Za = `RHL-SU2yops-`,
  Qa = `WT8fRbo2yOY-`,
  $a = `nCpY1W72MW4-`,
  eo = `-fxY9plRjng-`,
  to = `MqvIQAdSgiA-`,
  no = `_0bZPPKROH7E-`,
  ro = `mDUaEVQckdI-`,
  io = `n6Dil7HsC4g-`,
  ao = `sqrA6WBozlQ-`,
  oo = `kU6APp51-8g-`,
  so = `_-0Cg7RgIZtw-`,
  co = `jSWzo2CPn5k-`,
  lo = `Wjs2GRZGgn4-`,
  uo = `C4-FzVpDsKA-`,
  fo = `VcxeAZeDRVU-`,
  po = `-sbfakNdtMs-`,
  mo = `ZVQG3mT-ouk-`,
  ho = `Ar7x0bGD5F4-`,
  go = `-T3gxQCuMyk-`,
  _o = `S80cuaoieJE-`,
  vo = `NkgHTDHRSZI-`,
  yo = `cNnWTpLutW8-`,
  bo = `yxQHh-wmkgM-`,
  xo = {
    DefaultTheme: Ka,
    CosmicTheme: qa,
    SummerTheme: Ja,
    MidnightTheme: Ya,
    DarkModeTheme: Xa,
    SteelTheme: Za,
    PinkTealTheme: Qa,
    MutedRedTheme: $a,
    SteamGreenTheme: eo,
    BlueRedTheme: to,
    GoldBurgundyTheme: no,
    VibrantBlueTheme: ro,
    GoldenProfileDebutTheme: io,
    WinterProfile2020Theme: ao,
    GoldenWeekProfile2021Theme: oo,
    Summer2021Theme: so,
    MutedBlueTheme: co,
    GoldTheme: lo,
    BurntOrangeTheme: uo,
    FlatGreyTheme: fo,
    PurpleTheme: po,
    GreenSlimeTheme: mo,
    GhostTheme: ho,
    ColorNightmareTheme: go,
    MurugiahTheme: _o,
    Winter2021Theme: vo,
    Lunar2022Theme: yo,
    SteamDeckTheme: bo,
  },
  So = ({ className: e, width: t, height: n, theme: r }) => {
    (r ||= `Default`), (r += `Theme`);
    let [i, a] = lt(),
      [o, s] = lt();
    return (0, F.jsxs)(`svg`, {
      width: t || `401`,
      height: n || `399`,
      viewBox: `0 0 401 399`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      className: N(e, Ia, Ga[r]),
      children: [
        (0, F.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `386`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `0.5`,
          y: `13.5`,
          width: `400`,
          height: `385`,
          stroke: `black`,
          strokeOpacity: `0.5`,
        }),
        (0, F.jsx)(`rect`, {
          x: `26`,
          y: `33`,
          width: `61`,
          height: `61`,
          rx: `10`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`path`, {
          d: `M57.0246 64.052C63.4696 64.052 68.6942 58.8273 68.6942 52.3823C68.6942 45.9373 63.4696 40.7126 57.0246 40.7126C50.5796 40.7126 45.3549 45.9373 45.3549 52.3823C45.3549 58.8273 50.5796 64.052 57.0246 64.052Z`,
          fill: `#444A51`,
        }),
        (0, F.jsx)(`path`, {
          d: `M77.4319 72.8873C76.6734 68.1167 70.0792 66.5175 65.3744 65.0024C63.1235 66.918 60.2118 68.0792 57.0246 68.0792C53.8374 68.0792 50.9262 66.918 48.6753 65.0024C43.97 66.5175 37.3763 68.1167 36.6172 72.8873C35.2667 81.3728 47.8848 86.2873 57.0246 86.2873C66.1648 86.2873 78.7825 81.3728 77.4319 72.8873Z`,
          fill: `#444A51`,
        }),
        (0, F.jsx)(`rect`, {
          x: `299`,
          y: `50`,
          width: `91`,
          height: `31.882`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`rect`, {
          x: `299`,
          y: `87`,
          width: `44`,
          height: `10`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`rect`, {
          x: `346`,
          y: `87`,
          width: `44`,
          height: `10`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`rect`, {
          x: `299`,
          y: `104.091`,
          width: `91`,
          height: `240.254`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`rect`, {
          x: `103`,
          y: `57`,
          width: `82`,
          height: `6`,
          rx: `3`,
          fill: `#444A51`,
        }),
        (0, F.jsx)(`rect`, {
          x: `103`,
          y: `67`,
          width: `82`,
          height: `6`,
          rx: `3`,
          fill: `#444A51`,
        }),
        (0, F.jsx)(`rect`, {
          x: `26`,
          y: `117.755`,
          width: `260`,
          height: `87.6755`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`rect`, {
          x: `32`,
          y: `182.755`,
          width: `246`,
          height: `17`,
          rx: `3`,
          fill: `#262B31`,
        }),
        (0, F.jsx)(`rect`, {
          x: `37`,
          y: `185.755`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `37`,
          y: `192.755`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `71`,
          y: `185.755`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `71`,
          y: `192.755`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`path`, {
          d: `M26 120.755C26 119.098 27.3431 117.755 29 117.755H283C284.657 117.755 286 119.098 286 120.755V131.755H26V120.755Z`,
          fill: `#444A51`,
        }),
        (0, F.jsx)(`rect`, {
          x: `35`,
          y: `120.755`,
          width: `37`,
          height: `7`,
          rx: `3`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `103`,
          y: `38.0502`,
          width: `57`,
          height: `11.3864`,
          rx: `3`,
          fill: `#4F555C`,
        }),
        (0, F.jsx)(`rect`, {
          x: `299`,
          y: `32`,
          width: `35`,
          height: `11`,
          rx: `3`,
          fill: `#4F555C`,
        }),
        (0, F.jsx)(`rect`, {
          x: `26`,
          y: `214.54`,
          width: `260`,
          height: `167.381`,
          rx: `3`,
          fill: `#272B30`,
        }),
        (0, F.jsx)(`rect`, {
          x: `32`,
          y: `358.54`,
          width: `246`,
          height: `17`,
          rx: `3`,
          fill: `#262B31`,
        }),
        (0, F.jsx)(`rect`, {
          x: `37`,
          y: `361.54`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `37`,
          y: `368.54`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `71`,
          y: `361.54`,
          width: `21`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `71`,
          y: `368.54`,
          width: `12`,
          height: `4`,
          rx: `2`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`path`, {
          d: `M26 217.54C26 215.883 27.3431 214.54 29 214.54H283C284.657 214.54 286 215.883 286 217.54V228.54H26V217.54Z`,
          fill: `#444A51`,
        }),
        (0, F.jsx)(`rect`, {
          x: `35`,
          y: `217.54`,
          width: `37`,
          height: `7`,
          rx: `3`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`circle`, {
          cx: `347.5`,
          cy: `37.5`,
          r: `8.5`,
          stroke: `#4F555C`,
          strokeWidth: `2`,
        }),
        (0, F.jsx)(`rect`, {
          x: `41`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `36`,
          y: `241`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `36`,
          y: `283`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `161`,
          y: `241`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `161`,
          y: `283`,
          width: `111`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `91`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `141`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `191`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          x: `241`,
          y: `144`,
          width: `31`,
          height: `31`,
          rx: `5`,
          fill: `#373C42`,
        }),
        (0, F.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `382`,
          fill: `var(--gradient-background)`,
          fillOpacity: `0.23`,
          className: za,
        }),
        (0, F.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `382`,
          fill: a,
          className: La,
        }),
        (0, F.jsx)(`rect`, {
          y: `13`,
          width: `401`,
          height: `382`,
          fill: s,
          className: Ra,
        }),
        (0, F.jsxs)(`defs`, {
          children: [
            (0, F.jsxs)(`radialGradient`, {
              id: i,
              cx: `0`,
              cy: `0`,
              r: `1`,
              gradientUnits: `userSpaceOnUse`,
              gradientTransform: `translate(11 126) rotate(9.77175) scale(182.65 191.735)`,
              children: [
                (0, F.jsx)(`stop`, { stopColor: `var(--gradient-left)` }),
                (0, F.jsx)(`stop`, {
                  offset: `1`,
                  stopColor: `var(--gradient-background-left)`,
                  stopOpacity: `0`,
                }),
              ],
            }),
            (0, F.jsxs)(`radialGradient`, {
              id: o,
              cx: `0`,
              cy: `0`,
              r: `1`,
              gradientUnits: `userSpaceOnUse`,
              gradientTransform: `translate(385 148) rotate(-164.809) scale(312.935 328.499)`,
              children: [
                (0, F.jsx)(`stop`, {
                  offset: `0.348958`,
                  stopColor: `var(--gradient-right)`,
                }),
                (0, F.jsx)(`stop`, {
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
  Co = i(({ ProfileItems: e, Background: t, theme: n }) => {
    t === void 0 && (t = e.GetEquippedBackground());
    let r = t && t.movie_webm,
      i = t && t.tiled,
      a = t ? B(t) : Yn(null),
      o = t && !i && e.GetEquippedBackgroundFlags() == 1,
      s = null;
    return (
      i &&
        (s = {
          backgroundImage: `url( ${a} )`,
          backgroundRepeat: `repeat`,
          backgroundSize: `125px 125px`,
        }),
      (0, F.jsxs)(`div`, {
        style: s,
        className: Ba,
        children: [
          (0, F.jsx)(`div`, {
            className: Va,
            children: (0, F.jsxs)(`div`, {
              className: N(Ha, o && `F98tMVD1fsI-`),
              children: [
                !r && !i && (0, F.jsx)(`img`, { src: a }),
                r && (0, F.jsx)(sa, { Background: t, className: `` }),
              ],
            }),
          }),
          (0, F.jsx)(`div`, {
            className: Ua,
            children: (0, F.jsx)(`div`, {
              className: Wa,
              children: (0, F.jsx)(So, {
                className: Ia,
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
  wo = class extends P.Component {
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
        (0, F.jsxs)(D, {
          "flow-children": `column`,
          children: [
            (0, F.jsx)(v, { children: x(`#Profile_Edit_ChooseBackground`) }),
            (0, F.jsx)(S, {
              children: x(`#Profile_Edit_Background_Instructions`),
            }),
            (0, F.jsx)(q, {
              className: void 0,
              getSearchFields: ua,
              getItems: () => e.GetOwnedBackgrounds(),
              fnCommitChanges: this.CommitChanges,
              fnRevertChanges: this.RevertChanges,
              ItemComponent: Ao,
              RenderDefaultComponent: ({ onSelected: e, active: t }) =>
                (0, F.jsx)(jo, { Modifier: n, onSelected: e, active: t }),
              ActiveItem: e.GetEquippedBackground(),
              fnIsSameItem: da,
              fnRenderPreview: (n) =>
                (0, F.jsx)(Oo, {
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
w([T], wo.prototype, `CommitChanges`, null),
  w([T], wo.prototype, `RevertChanges`, null),
  (wo = w([i], wo));
var To = wo,
  Eo = ({ label: e, currentFlag: t, flag: n, onSelect: r }) =>
    (0, F.jsx)(`div`, {
      className: Fa,
      children: (0, F.jsx)(Xe, {
        checked: t == n,
        disabled: t == n,
        onChange: (e) => {
          e && r(n);
        },
        label: e,
      }),
    }),
  Do = class extends P.Component {
    OnChange(e) {
      this.props.ProfileItems.SetEquippedBackgroundFlags(e);
    }
    render() {
      let { Background: e, ProfileItems: t } = this.props,
        n = !e || e?.tiled,
        r = t.GetEquippedBackgroundFlags(),
        i = (0, F.jsx)(Eo, {
          flag: 1,
          currentFlag: r,
          onSelect: this.OnChange,
          label: x(`#Profile_Edit_BackgroundEquipFlag_FullScreen`),
        }),
        a = (0, F.jsx)(Eo, {
          flag: 0,
          currentFlag: r,
          onSelect: this.OnChange,
          label: x(`#Profile_Edit_BackgroundEquipFlag_OriginalSize`),
        });
      return (0, F.jsxs)(`div`, {
        className: N(Pa, n && `EEHeOyj-UvI-`),
        children: [i, a],
      });
    }
  };
w([T], Do.prototype, `OnChange`, null), (Do = w([i], Do));
var Oo = i(({ Background: e, ProfileItems: t, theme: n }) =>
    (0, F.jsxs)(`div`, {
      children: [
        (0, F.jsx)(
          Co,
          { Background: e, ProfileItems: t, theme: n },
          e && e.communityitemid,
        ),
        (0, F.jsx)(Do, { ProfileItems: t, Background: e }),
      ],
    }),
  ),
  ko = ({ Background: e, children: t }) =>
    (0, F.jsxs)(`div`, {
      className: Aa,
      children: [
        (0, F.jsxs)(`div`, {
          children: [
            (0, F.jsx)(`div`, {
              className: Ma,
              children: e
                ? e.item_title
                : x(`#Profile_Edit_DefaultBlankBackground`),
            }),
            (0, F.jsx)(`div`, { className: Na, children: e && e.app_name }),
          ],
        }),
        t,
      ],
    }),
  Ao = ({ Item: e, onSelected: t, active: n, children: r }) => {
    let i = !!e.movie_webm;
    return (0, F.jsxs)(D, {
      className: N(Oa, i && `pP080g2uFFI-`, n && `_0xpO9duoOyE-`),
      onClick: t,
      onActivate: t,
      onGamepadFocus: i ? la : void 0,
      onMouseEnter: i ? ca : void 0,
      focusable: !0,
      children: [
        (0, F.jsxs)(`div`, {
          className: ka,
          children: [
            (0, F.jsx)(`img`, { src: Yn(e), loading: `lazy` }),
            (0, F.jsx)(sa, { Background: e, className: ja, small: !0 }),
          ],
        }),
        (0, F.jsx)(ko, { Background: e, children: r }),
      ],
    });
  },
  jo = ({ onSelected: e, Modifier: t, active: n, children: r }) =>
    t
      ? (0, F.jsx)(Ao, { Item: t, onSelected: e, active: n })
      : (0, F.jsxs)(`div`, {
          className: N(Oa, n && `_0xpO9duoOyE-`),
          onClick: e,
          children: [
            (0, F.jsx)(`div`, {
              className: ka,
              children: (0, F.jsx)(`img`, { src: Yn(null) }),
            }),
            (0, F.jsx)(ko, { Background: null, children: r }),
          ],
        });
function Mo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function No(e) {
  let { navigate: t, onClick: n, ...r } = e,
    { target: i } = r,
    a = (e) => {
      try {
        n && n(e);
      } catch (t) {
        throw (e.preventDefault(), t);
      }
      !e.defaultPrevented &&
        e.button === 0 &&
        (!i || i === `_self`) &&
        !Mo(e) &&
        (e.preventDefault(), t());
    };
  return (0, F.jsx)(E, { ...r, onClick: a });
}
function Po(e) {
  return (0, F.jsx)(ne, { component: No, ...e });
}
var Fo = `J4WPFftrUDc-`,
  Io = `zP-WPH7p35M-`,
  Lo = `vTcFSSwtmjE-`,
  Ro = `mLQTg1nAnzM-`,
  zo = `yClg36QuOdA-`,
  Bo = `c43-A-W1A-c-`,
  Vo = `yew8ZahHGxM-`,
  Ho = `mayzuiN-AE4-`;
function Uo(e) {
  let { root: t, currentPath: n, linksAvailable: r, children: i } = e;
  return (0, F.jsx)(ot, {
    navID: `ProfileEditShell`,
    children: (0, F.jsx)(D, {
      children: (0, F.jsxs)(D, {
        className: Fo,
        "flow-children": `row`,
        navEntryPreferPosition: at.FIRST,
        children: [
          (0, F.jsx)(Wo, { root: t, currentPath: n, linksAvailable: r }),
          (0, F.jsx)(`div`, {
            className: Bo,
            children: (0, F.jsx)(C, { children: i }),
          }),
        ],
      }),
    }),
  });
}
var Wo = ({ root: e, currentPath: t, linksAvailable: n }) => {
    let r = { root: e, currentPath: t },
      i = Ms,
      a = Me();
    return (0, F.jsxs)(D, {
      className: Io,
      "flow-children": `column`,
      children: [
        (0, F.jsx)(`div`, {
          className: Ho,
          children: (0, F.jsx)(E, {
            href: L.ProfileURL,
            children: x(`#Profile_ReturnToYourProfile`),
          }),
        }),
        (0, F.jsx)(`div`, { className: Vo }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.Info(),
          children: x(`#Profile_Edit_BasicInfo`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.Avatar(),
          children: x(`#Profile_FieldAvatar`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.Background(),
          children: x(`#Profile_FieldProfileBackground`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.MiniProfile(),
          children: x(`#Profile_Edit_MiniProfile`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.Theme(),
          children: x(`#Profile_Edit_Theme`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.ProfileModifier(),
          fnVisible: n.ProfileModifierAvailable,
          children: x(`#Profile_Edit_ProfileModifier`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.FavoriteBadge(),
          fnVisible: n.BadgesAvailable,
          children: x(`#Profile_Edit_FavoriteBadge`),
        }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.FavoriteGroup(),
          fnVisible: n.GroupsAvailable,
          children: x(`#Profile_Edit_FavoriteGroup`),
        }),
        !a &&
          (0, F.jsx)(Q, {
            ...r,
            to: i.Showcases(),
            fnVisible: n.ShowcasesAvailable,
            children: x(`#Profile_Edit_FeaturedShowcase`),
          }),
        (0, F.jsx)(`div`, { className: Vo }),
        (0, F.jsx)(Q, {
          ...r,
          to: i.Privacy(),
          children: x(`#Profile_EditPrivacySettings`),
        }),
        (0, F.jsx)(`div`, {
          className: zo,
          children: (0, F.jsx)(E, {
            className: N(Ro),
            href: `${A.STORE_BASE_URL}points/`,
            children: x(`#SteamPointsShop`),
          }),
        }),
      ],
    });
  },
  Q = i(
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
        (0, F.jsx)(Po, {
          className: N(Lo, s && `h48mSlphF-g-`, l && `_72jtp-06-cI-`),
          to: o,
          onClick: u,
          title: c,
          children: a,
        })
      );
    },
  ),
  Go = `aA-d0b9NLbU-`,
  Ko = `E1gp-BIM-P0-`,
  qo = `NbnlI0mjp-A-`,
  Jo = `xxKk3UzmBl0-`,
  Yo = `mgtdvbuRSRY-`,
  Xo = `mQr0QbokC74-`,
  Zo = class extends P.Component {
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
        ? (0, F.jsx)(ts, {
            active: this.state.bDialogActive,
            ProfileItems: e,
            onDismiss: this.HideDialog,
          })
        : null;
    }
  };
w([T], Zo.prototype, `ShowDialog`, null),
  w([T], Zo.prototype, `HideDialog`, null),
  (Zo = w([i], Zo));
var Qo = Zo,
  $o = i(({ ProfileItems: e }) => {
    let t = e.GetProfileModifierCSSURL();
    return t
      ? (0, F.jsx)(`link`, { rel: `stylesheet`, type: `text/css`, href: t })
      : null;
  }),
  es = ({ ProfileModifier: e }) => {
    let t = e ? B(e) : `${A.COMMUNITY_CDN_URL}public/images/trans.gif`,
      n = e ? e.item_title : x(`#Profile_Edit_DefaultBlankBackground`),
      r = e ? e.app_name : ``;
    return (0, F.jsx)(F.Fragment, {
      children: (0, F.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, F.jsx)(`img`, { className: void 0, src: t }),
          (0, F.jsx)(`div`, { className: void 0, children: n }),
          (0, F.jsx)(`div`, { className: void 0, children: r }),
        ],
      }),
    });
  },
  ts = class extends P.Component {
    OnDismiss() {
      this.props.ProfileItems.RevertProfileModifierChanges(),
        this.props.onDismiss();
    }
    render() {
      let { ProfileItems: e } = this.props;
      return (0, F.jsxs)(F.Fragment, {
        children: [
          (0, F.jsx)(v, { children: x(`#Profile_Edit_ProfileModifier`) }),
          (0, F.jsx)(S, {
            children: x(`#Profile_Edit_ProfileModifier_Instructions`),
          }),
          (0, F.jsx)(q, {
            fnRevertChanges: this.OnDismiss,
            getSearchFields: ua,
            getItems: () => e.GetOwnedProfileModifiers(),
            fnCommitChanges: async (t) => (
              e.SetEquippedProfileModifier(t), e.CommitProfileModifierChanges()
            ),
            ItemComponent: ns,
            RenderDefaultComponent: ({ onSelected: e, active: t }) =>
              (0, F.jsx)(rs, { onSelected: e, active: t }),
            ActiveItem: e.GetEquippedProfileModifier(),
            fnIsSameItem: da,
            fnRenderPreview: (e) => (0, F.jsx)(es, { ProfileModifier: e }),
          }),
        ],
      });
    }
  };
w([T], ts.prototype, `OnDismiss`, null), (ts = w([i], ts));
var ns = ({ Item: e, onSelected: t, children: n, active: r }) =>
    (0, F.jsxs)(D, {
      className: N(Go, r && `YGzcD6kqN6Q-`),
      onActivate: t,
      children: [
        (0, F.jsx)(`div`, {
          className: Ko,
          children: (0, F.jsx)(`img`, { src: B(e), loading: `lazy` }),
        }),
        (0, F.jsxs)(`div`, {
          className: qo,
          children: [
            (0, F.jsxs)(`div`, {
              children: [
                (0, F.jsx)(`div`, { className: Yo, children: e.item_title }),
                (0, F.jsx)(`div`, { className: Xo, children: e.app_name }),
              ],
            }),
            n,
          ],
        }),
      ],
    }),
  rs = ({ onSelected: e, children: t, active: n }) =>
    (0, F.jsxs)(D, {
      className: N(Go, n && `YGzcD6kqN6Q-`),
      onActivate: e,
      children: [
        (0, F.jsx)(`div`, {
          className: N(Ko, Jo),
          children: (0, F.jsx)(`img`, {
            src: `${A.COMMUNITY_CDN_URL}public/images/trans.gif`,
            loading: `lazy`,
          }),
        }),
        (0, F.jsxs)(`div`, {
          className: qo,
          children: [
            (0, F.jsxs)(`div`, {
              children: [
                (0, F.jsx)(`div`, {
                  className: Yo,
                  children: x(`#ProfileModifier_DisabledTitle`),
                }),
                (0, F.jsx)(`div`, { className: Xo }),
              ],
            }),
            t,
          ],
        }),
      ],
    }),
  is = `kqlAKTWIQw0-`,
  as = `_9719Oes8HVA-`,
  os = `GqC7xP5CEiY-`,
  ss = `deAy9YKRyPY-`,
  cs = `W0IKlgfOaV0-`,
  ls = `_1cp-Jw42ztI-`,
  us = `aDpnBOMtY4E-`,
  ds = `vyS-ctsmzyY-`,
  fs = `_9HQVMqikVhI-`,
  ps = `U-fHA0UJmho-`,
  ms = `NYNhg0dRPFY-`,
  $ = class extends P.Component {
    state = { bSaving: !1, strHTMLError: `` };
    async CommitChanges(e) {
      let { ProfileTheme: t } = this.props;
      this.setState({ bSaving: !0, strHTMLError: `` }),
        t.SetActiveTheme(e.theme_id);
      let n = await t.CommitActiveTheme();
      return (
        n != 1 &&
          this.setState({
            strHTMLError: x(`#ConnectionTrouble_FailedToConnect`),
          }),
        this.setState({ bSaving: !1 }),
        n
      );
    }
    RevertChanges() {
      let { ProfileTheme: e } = this.props;
      this.setState({ strHTMLError: `` }), e.RevertActiveTheme();
    }
    render() {
      let { ProfileTheme: e, ProfileItems: t } = this.props,
        n = !!t.GetEquippedProfileModifier();
      return (0, F.jsxs)(F.Fragment, {
        children: [
          (0, F.jsx)(v, { children: x(`#Profile_Edit_Theme`) }),
          (0, F.jsx)(S, { children: x(`#Profile_Edit_Theme_Instructions`) }),
          (0, F.jsx)(J, { strHTMLError: this.state.strHTMLError }),
          n && (0, F.jsx)(bs, {}),
          (0, F.jsx)(q, {
            getSearchFields: null,
            ActiveItem: e.ActiveTheme,
            getItems: async () => e.AvailableThemes,
            fnCommitChanges: this.CommitChanges,
            fnRevertChanges: this.RevertChanges,
            fnRenderPreview: (e) =>
              (0, F.jsx)(_s, { Theme: e, ProfileItems: t }),
            fnIsSameItem: vs,
            ItemComponent: ys,
            classNameItemPicker: is,
            className: N(n && `_4fbbCwyR3Ms-`),
          }),
        ],
      });
    }
  };
w([T], $.prototype, `CommitChanges`, null),
  w([T], $.prototype, `RevertChanges`, null),
  ($ = w([i], $));
var hs = $,
  gs = ({ Theme: e, children: t }) => {
    let n;
    return (
      (n =
        typeof e == `string`
          ? e + `Theme`
          : (e?.theme_id || `Default`) + `Theme`),
      (0, F.jsx)(`div`, { className: Ga[n], children: t })
    );
  },
  _s = i(({ Theme: e, ProfileItems: t }) =>
    (0, F.jsx)(`div`, {
      className: as,
      children: (0, F.jsx)(Co, { ProfileItems: t, theme: e.theme_id }),
    }),
  ),
  vs = (e, t) => (e && e.theme_id) === (t && t.theme_id),
  ys = ({ Item: e, onSelected: t, active: n, children: r }) => {
    let i = e.theme_id + `Theme`,
      a = `ThemeOption${i}`;
    return (0, F.jsxs)(D, {
      className: N(cs, t && `Y8DR4WHSYXo-`, n && `r9N13F0lLg0-`, Ga[i]),
      onActivate: t,
      children: [
        (0, F.jsx)(`div`, {
          className: ds,
          children: (0, F.jsxs)(`svg`, {
            className: N(us),
            viewBox: `0 0 382 382`,
            width: `100%`,
            height: `100%`,
            children: [
              (0, F.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `var(--edit-background)`,
                className: fs,
              }),
              (0, F.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `var(--gradient-background)`,
                fillOpacity: `0.23`,
                className: void 0,
              }),
              (0, F.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `url(#${a}paint0_radial)`,
                className: ps,
              }),
              (0, F.jsx)(`rect`, {
                width: `382`,
                height: `382`,
                fill: `url(#${a}paint1_radial)`,
                className: ms,
              }),
              (0, F.jsxs)(`defs`, {
                children: [
                  (0, F.jsxs)(`radialGradient`, {
                    id: `${a}paint0_radial`,
                    cx: `0`,
                    cy: `0`,
                    r: `1`,
                    gradientUnits: `userSpaceOnUse`,
                    gradientTransform: `translate(11 126) rotate(9.77175) scale(182.65 191.735)`,
                    children: [
                      (0, F.jsx)(`stop`, { stopColor: `var(--gradient-left)` }),
                      (0, F.jsx)(`stop`, {
                        offset: `1`,
                        stopColor: `var(--gradient-background-left)`,
                        stopOpacity: `0`,
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`radialGradient`, {
                    id: `${a}paint1_radial`,
                    cx: `0`,
                    cy: `0`,
                    r: `1`,
                    gradientUnits: `userSpaceOnUse`,
                    gradientTransform: `translate(385 148) rotate(-164.809) scale(312.935 328.499)`,
                    children: [
                      (0, F.jsx)(`stop`, {
                        offset: `0.348958`,
                        stopColor: `var(--gradient-right)`,
                      }),
                      (0, F.jsx)(`stop`, {
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
        (0, F.jsxs)(`div`, {
          className: ls,
          children: [
            (0, F.jsx)(`div`, { className: void 0, children: e.title }),
            r,
          ],
        }),
      ],
    });
  },
  bs = ({ children: e }) =>
    (0, F.jsx)(`div`, {
      className: os,
      children: (0, F.jsx)(`div`, {
        className: ss,
        children: x(`#Profile_Edit_GoldenProfileOverridesTheme`),
      }),
    }),
  xs = class extends P.Component {
    m_refDiv = P.createRef();
    state = { bSaving: !1, strHTMLError: `` };
    OnSubmit(e) {
      e.preventDefault(), this.CommitChanges(e.currentTarget);
    }
    async CommitChanges(e) {
      this.setState({ bSaving: !0, strHTMLError: `` });
      let t = await er(`showcases`, new FormData(e));
      t.strHTMLError
        ? this.setState({ strHTMLError: t.strHTMLError })
        : this.setState({ strHTMLError: `` }),
        this.setState({ bSaving: !1 });
    }
    RevertChanges() {
      window.location.href = L.ProfileURL;
    }
    componentDidMount() {
      this.props.elShowcases &&
        ((this.props.elShowcases.style.display = ``),
        this.m_refDiv.current.appendChild(this.props.elShowcases));
    }
    render() {
      let { bSaving: e, strHTMLError: t } = this.state,
        { ProfileTheme: n } = this.props;
      return (0, F.jsx)(gs, {
        Theme: n.ActiveTheme,
        children: (0, F.jsxs)(`form`, {
          onSubmit: this.OnSubmit,
          children: [
            (0, F.jsx)(v, { children: x(`#Profile_Edit_FeaturedShowcase`) }),
            (0, F.jsx)(S, {
              children: ut(
                `#Profile_Edit_Showcase_Instructions`,
                (0, F.jsx)(`a`, {
                  href: A.STORE_BASE_URL + `points/shop/profileshowcases`,
                }),
              ),
            }),
            (0, F.jsx)(J, { strHTMLError: t }),
            (0, F.jsx)(`div`, { ref: this.m_refDiv }),
            (0, F.jsx)(K, { onCancel: this.RevertChanges, disabled: e }),
          ],
        }),
      });
    }
  };
w([T], xs.prototype, `OnSubmit`, null),
  w([T], xs.prototype, `RevertChanges`, null);
var Ss, Cs, ws;
async function Ts(e) {
  let t = pt(`config`, `profile_config`);
  t && Object.assign(L, t),
    (Ss = new rr(
      pt(`profile-edit`, `profile_edit_config`),
      pt(`profile-badges`, `profile_edit_config`),
      e,
    )),
    y(A.EREALM) || Ss.Profile.GroupList.GetUserGroups(),
    (Cs = document.getElementById(`showcases`));
}
function Es(e) {
  let [t, n] = P.useState(!1),
    r = be();
  if (
    (P.useEffect(() => {
      (ws ||= Ts(r)), ws.then(() => n(!0));
    }, [r]),
    P.useLayoutEffect(() => {
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
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)($o, { ProfileItems: s }),
      (0, F.jsx)(Oi, { Profile: o }),
      (0, F.jsx)(ti, { Profile: o, ProfileItems: s }),
      (0, F.jsx)(Uo, {
        root: i,
        currentPath: e.location.pathname,
        linksAvailable: {
          ProfileModifierAvailable: () => s.BHasAnyProfileModifiers(),
          BadgesAvailable: () =>
            !y(A.EREALM) && a.ProfileBadges.Badges.length > 0,
          GroupsAvailable: () =>
            !y(A.EREALM) &&
            (!o.GroupList.BGroupsLoaded() || o.GroupList.BHasAnyGroups()),
          ShowcasesAvailable: () => Cs != null,
        },
        children: (0, F.jsxs)(f, {
          children: [
            (0, F.jsx)(h, {
              path: `${i}${u.Info()}`,
              children: (0, F.jsx)(bi, { Profile: o, EmoticonStore: l }),
            }),
            (0, F.jsx)(h, {
              path: `${i}${u.Avatar()}`,
              children: (0, F.jsx)(ei, {
                Profile: o,
                ProfileItems: s,
                OGGAvatars: a.OGGAvatarStore,
                AvatarHistory: a.AvatarHistory,
              }),
            }),
            (0, F.jsx)(h, {
              path: `${i}${u.Background()}`,
              children: (0, F.jsx)(To, { ProfileTheme: c, ProfileItems: s }),
            }),
            (0, F.jsx)(h, {
              path: `${i}${u.MiniProfile()}`,
              children: (0, F.jsx)(pa, { ProfileEdit: a }),
            }),
            (0, F.jsx)(h, {
              path: `${i}${u.Theme()}`,
              children: (0, F.jsx)(hs, { ProfileTheme: c, ProfileItems: s }),
            }),
            (0, F.jsx)(h, {
              path: `${i}${u.ProfileModifier()}`,
              children: (0, F.jsx)(Qo, { ProfileItems: s }),
            }),
            !y(A.EREALM) &&
              (0, F.jsx)(h, {
                path: `${i}${u.FavoriteBadge()}`,
                children: (0, F.jsx)(Ri, { Badges: a.ProfileBadges }),
              }),
            !y(A.EREALM) &&
              (0, F.jsx)(h, {
                path: `${i}${u.FavoriteGroup()}`,
                children: (0, F.jsx)(Yi, { Profile: o }),
              }),
            (0, F.jsx)(h, {
              path: `${i}${u.Privacy()}`,
              children: (0, F.jsx)(va, { PrivacyStore: a.ProfilePrivacy }),
            }),
            (0, F.jsx)(h, {
              path: `${i}${u.Showcases()}`,
              children: (0, F.jsx)(xs, { elShowcases: Cs, ProfileTheme: c }),
            }),
            (0, F.jsx)(h, {
              children: (0, F.jsx)(p, { to: `${i}${u.Info()}` }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ds(e) {
  let [t, n] = (0, P.useState)(!1),
    r = Os(e.steamid),
    i = ks(e.steamid),
    a = (0, P.useRef)(null),
    o = (0, P.useRef)(null),
    [s, c] = (0, P.useState)(!1),
    l = se(e.steamid),
    u = async () => {
      if ((c(!0), !a.current)) return;
      let e = a.current.value,
        t = parseInt(e) * 86400,
        r = Math.floor(new Date().getTime() / 1e3) + t,
        s = o.current?.checked ?? !1;
      await i.mutateAsync({ rtCooldownEnds: r, bClearOpenReports: s }),
        n(!1),
        c(!1);
    },
    d = async () => {
      await i.mutateAsync({ rtCooldownEnds: 0 }), n(!1);
    },
    f = ``;
  if (r.isSuccess && r.data > 0) {
    let e = Math.floor((r.data - new Date().getTime() / 1e3) / 86400);
    f = ` ` + O.Localize(`#setcooldown_cooldownsummary`, e);
  }
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(De, {
        active: t,
        children: (0, F.jsxs)(Oe, {
          onCancel: () => n(!1),
          onOK: u,
          strTitle: O.Localize(`#setcooldown_dialogtitle`),
          strDescription: O.Localize(`#setcooldown_dialogdescription`),
          strOKButtonText: O.Localize(`#setcooldown_setbutton`),
          bOKDisabled: s,
          children: [
            r.isLoading &&
              (0, F.jsxs)(`p`, {
                children: [
                  (0, F.jsx)(ce, { size: `small` }),
                  ` `,
                  O.Localize(`#setcooldown_loading`),
                ],
              }),
            r.isError &&
              (0, F.jsx)(`p`, {
                children: O.Localize(`#setcooldown_errorloading`),
              }),
            r.isSuccess &&
              r.data > 0 &&
              (0, F.jsx)(`p`, {
                children: O.Localize(
                  `#setcooldown_expireson`,
                  Ze(r.data, !1, ``),
                ),
              }),
            r.isSuccess &&
              r.data === 0 &&
              (0, F.jsx)(`p`, {
                children: O.Localize(`#setcooldown_nocooldown`),
              }),
            l.isSuccess &&
              !!l.data &&
              (0, F.jsx)(F.Fragment, {
                children: (0, F.jsx)(`p`, {
                  children: O.Localize(
                    `#setcooldown_statssummary`,
                    l.data.total_acquitted_reports,
                    l.data.total_reports,
                    l.data.acquitted_reports_in_last_week,
                    l.data.reports_in_last_week,
                  ),
                }),
              }),
            (0, F.jsxs)(`p`, {
              children: [
                (0, F.jsxs)(`label`, {
                  children: [
                    O.Localize(`#setcooldown_newcooldownlabel`),
                    ` `,
                    (0, F.jsx)(`input`, {
                      type: `number`,
                      min: `0`,
                      placeholder: O.Localize(`#setcooldown_days`),
                      ref: a,
                    }),
                  ],
                }),
                (0, F.jsxs)(`p`, {
                  children: [
                    (0, F.jsx)(`input`, { type: `checkbox`, ref: o }),
                    ` `,
                    O.Localize(`#setcooldown_clearopenreports`),
                  ],
                }),
                (0, F.jsx)(`button`, {
                  disabled: s,
                  onClick: d,
                  children: O.Localize(`#setcooldown_clearcooldown`),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, F.jsxs)(`a`, {
        className: `popup_menu_item`,
        onClick: () => n(!0),
        children: [`Reporting Cooldown`, f],
      }),
    ],
  });
}
function Os(e) {
  let t = Ye();
  return c({
    queryKey: [`reportercooldown`, e],
    queryFn: async () => {
      let n = M.Init(ae);
      n.Body().set_steamid(e);
      let r = await ie.GetReporterCooldown(t, n);
      if (!r.BSuccess()) throw Error(`EResult ` + r.GetEResult());
      return r.Body().rtime_cooldown_ends() ?? 0;
    },
  });
}
function ks(e) {
  let t = Ye(),
    n = ee();
  return s({
    mutationFn: async (n) => {
      let r = M.Init(oe);
      r.Body().set_steamid(e),
        r.Body().set_rtime_cooldown_ends(n.rtCooldownEnds),
        n.bClearOpenReports !== void 0 &&
          r.Body().set_acquit_unresolved_reports(n.bClearOpenReports);
      let i = await ie.UpdateReporterCooldown(t, r);
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
  return (0, F.jsx)(`div`, { children: (0, F.jsx)(ve, { targetType: 3 }) });
}
function Ps(e) {
  let t = e.match.path;
  return (0, F.jsxs)(f, {
    children: [
      (0, F.jsx)(h, {
        path: `${t}/${js.ProfileEdit()}`,
        render: (e) => (0, F.jsx)(Es, { ...e }),
      }),
      (0, F.jsx)(h, {
        path: `${t}`,
        render: (e) =>
          (0, F.jsx)(ct, {
            config: {
              "profile-rewards": () => (0, F.jsx)(Ns, { ...e }),
              "reporter-cooldown-dialog": (e) => (0, F.jsx)(Ds, { ...e }),
            },
          }),
      }),
    ],
  });
}
export { Ms as ProfileEditRoutes, Ps as default, bt as n, As as t };

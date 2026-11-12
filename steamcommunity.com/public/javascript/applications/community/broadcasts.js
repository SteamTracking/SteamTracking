/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  B as n,
  C as r,
  Ft as i,
  L as a,
  R as o,
  St as s,
  ot as c,
  w as l,
  xt as u,
} from "./chunk~01cfc309bf.js";
import { l as d, t as f } from "./chunk~35b0bf48ef.js";
import { hi as p } from "./chunk~3f4314f3b4.js";
import { i as ee } from "./chunk~437071091c.js";
import { t as m } from "./chunk~10c934b72c.js";
import { t as te } from "./chunk~eee3bbd4cd.js";
import { t as h } from "./chunk~eefd71512b.js";
import { o as ne } from "./chunk~af36c62e9f.js";
import { i as re } from "./chunk~ec644f97c6.js";
import { n as g } from "./chunk~9d71b14b50.js";
import { n as ie } from "./chunk~d382bdf2cf.js";
import { n as _ } from "./chunk~a7c5e71e12.js";
import {
  Bo as ae,
  Ct as oe,
  Em as v,
  Fc as y,
  Fd as b,
  Gc as se,
  Go as x,
  Gr as ce,
  Is as S,
  Qo as C,
  Rr as le,
  Su as w,
  Ts as T,
  Tu as E,
  Wi as D,
  Xo as O,
  Yo as k,
  Zi as A,
  _s as j,
  ef as M,
  es as N,
  gm as P,
  hm as F,
  hs as ue,
  id as I,
  kf as de,
  lm as L,
  ns as R,
  ps as z,
  qo as B,
  rf as V,
  ss as H,
  um as U,
  zf as W,
  zs as G,
} from "./main.js";
import { Q as fe, t as pe } from "./chunk~750c562b0a.js";
import { s as me } from "./chunk~cadb22900a.js";
import { t as he } from "./chunk~85f65a382b.js";
import { n as ge } from "./chunk~65da1d3223.js";
var K = e(t()),
  q = class e {
    constructor() {
      a(this);
    }
    static s_Singleton;
    m_steamid;
    m_bShowOnlyVideo = !1;
    m_bShowOnlyChat = !1;
    m_strIFrameParentOrigin;
    m_curDebugInfo = null;
    GetBroadcasterSteamID() {
      return this.m_steamid;
    }
    GetDebugInfo() {
      return this.m_curDebugInfo;
    }
    BShowOnlyVideo() {
      return this.m_bShowOnlyVideo;
    }
    BShowOnlyChat() {
      return this.m_bShowOnlyChat;
    }
    BShowInIframe() {
      return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
    }
    GetIFrameParentOrigin() {
      return this.m_strIFrameParentOrigin;
    }
    async LoadBroadcastDebugInfo(e) {
      let t = F.COMMUNITY_BASE_URL + `broadcast/broadcastdebuginfo`,
        n = {
          steamid: this.m_steamid.ConvertTo64BitString(),
          origin: self.origin,
        };
      try {
        let r = await K.default.get(t, {
          params: n,
          withCredentials: !0,
          cancelToken: e ? e.token : void 0,
        });
        if (e && e.token.reason) return null;
        if (r && r.status == 200 && r.data && r.data.success == 1)
          return ((this.m_curDebugInfo = r.data), this.m_curDebugInfo);
      } catch (e) {
        let t = W(e);
        console.error(`LoadBroadcastDebugInfo: Failed ` + t.strErrorMsg, t);
      }
      return null;
    }
    async UpdateBroadcastSettings(e, t, r) {
      let i = F.COMMUNITY_BASE_URL + `broadcast/updatebroadcastsettings`,
        a = {
          steamid: this.m_steamid.ConvertTo64BitString(),
          matchid: e,
          title: t,
          sessionid: L(),
        };
      try {
        let e = await K.default.get(i, {
          params: a,
          withCredentials: !0,
          cancelToken: r ? r.token : void 0,
        });
        if (r && r.token.reason) return !1;
        if (e && e.status == 200 && e.data && e.data.success == 1) {
          let e = m.GetOrCreateBroadcastInfo(
            this.m_steamid.ConvertTo64BitString(),
          );
          return (
            e &&
              n(() => {
                e.m_strTitle = t;
              }),
            !0
          );
        }
      } catch (e) {
        let t = W(e);
        console.error(`UpdateBroadcastSettings: Failed ` + t.strErrorMsg, t);
      }
      return !1;
    }
    async StopBroadcast(e) {
      let t = this.m_steamid.ConvertTo64BitString(),
        n = m.GetBroadcast(t),
        r = F.COMMUNITY_BASE_URL + `broadcast/stopbroadcast`,
        i = {
          steamid: t,
          broadcastid: n ? n.m_ulBroadcastID : null,
          sessionid: L(),
        };
      return await this.InternalSendSimpleGetRequest(`StopBroadcast`, r, i, e);
    }
    async SetBroadcasterRestrictions(e, t, n) {
      let r = this.m_steamid.ConvertTo64BitString(),
        i = m.GetBroadcast(r),
        a = F.COMMUNITY_BASE_URL + `broadcast/setbroadcastrestriction`,
        o = {
          steamid: r,
          broadcastid: i ? i.m_ulBroadcastID : null,
          type: e,
          days: t,
          sessionid: L(),
        };
      return await this.InternalSendSimpleGetRequest(
        `SetBroadcasterRestrictions`,
        a,
        o,
        n,
      );
    }
    async SetUnBannable(e) {
      let t = this.m_steamid.ConvertTo64BitString(),
        n = m.GetBroadcast(t),
        r = F.COMMUNITY_BASE_URL + `broadcast/unban`,
        i = {
          steamid: t,
          broadcastid: n ? n.m_ulBroadcastID : null,
          sessionid: L(),
        };
      return await this.InternalSendSimpleGetRequest(`SetUnBannable`, r, i, e);
    }
    async SendUserReportOnBroadcast(e) {
      let t = this.m_steamid.ConvertTo64BitString(),
        n = m.GetBroadcast(t),
        r = F.COMMUNITY_BASE_URL + `broadcast/report`,
        i = {
          steamid: t,
          broadcastid: n ? n.m_ulBroadcastID : null,
          description: e,
          sessionid: L(),
        };
      return await this.InternalSendSimpleGetRequest(
        `SendUserReportOnBroadcast`,
        r,
        i,
        null,
      );
    }
    async InternalSendSimpleGetRequest(e, t, n, r) {
      try {
        let e = await K.default.get(t, {
          params: n,
          withCredentials: !0,
          cancelToken: r ? r.token : void 0,
        });
        if (r && r.token.reason) return !1;
        if (e && e.status == 200 && e.data && e.data.success == 1) return !0;
      } catch (t) {
        let n = W(t);
        console.error(
          `CCommunityBroadcastStore:${e}: Failed ` + n.strErrorMsg,
          n,
        );
      }
      return !1;
    }
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    Init() {
      let e = U(`broadcastsinfo`, `application_config`);
      this.ValidateStoreDefault(e) &&
        ((this.m_steamid = new v(e.steamid)),
        (this.m_bShowOnlyChat = !!e.show_only_chat),
        (this.m_bShowOnlyVideo = !!e.show_only_video),
        (this.m_strIFrameParentOrigin = e.iframe_parent_origin || void 0));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object` ? typeof t.steamid == `string` : !1;
    }
  };
de([o], q.prototype, `m_curDebugInfo`, void 0);
var J = e(i()),
  Y = `weRyAFSdhQU-`,
  X = `SmOFdA0bRKo-`,
  Z = c(),
  _e = (e) => {
    let t = (0, J.useRef)(null),
      [n, r] = (0, J.useState)(null);
    return (
      (0, J.useEffect)(
        () => () => {
          t.current && t.current(`BroadcastDebugSection: unmounting`);
        },
        [],
      ),
      (0, Z.jsx)(E, {
        children: (0, Z.jsxs)(`div`, {
          className: w(void 0),
          children: [
            (0, Z.jsx)(`div`, {
              className: void 0,
              children: (0, Z.jsx)(O, {
                onClick: async () => {
                  t.current && t.current();
                  let e = K.default.CancelToken.source();
                  ((t.current = e.cancel),
                    r(await q.Get().LoadBroadcastDebugInfo(e)));
                },
                children: `(VO) Load Debug Info`,
              }),
            }),
            (0, Z.jsx)(E, { children: (0, Z.jsx)(ve, { info: n }) }),
          ],
        }),
      })
    );
  },
  ve = (e) => {
    let { info: t } = e,
      [n, r] = (0, J.useState)(!1);
    if (!t) return null;
    let i = q.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
      a = m.GetBroadcast(i);
    return (0, Z.jsxs)(`div`, {
      className: void 0,
      children: [
        !!(t.last_error_result && t.last_error_result != 1) &&
          (0, Z.jsxs)(`div`, {
            className: `weRyAFSdhQU-`,
            children: [
              (0, Z.jsx)(`div`, {
                className: `SmOFdA0bRKo-`,
                children: `Error`,
              }),
              (0, Z.jsxs)(`div`, {
                children: [
                  `EResult: `,
                  t.last_error_result,
                  `, occurred `,
                  t.last_error_time,
                  ` - `,
                  (0, Z.jsx)(re, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  }),
                ],
              }),
            ],
          }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, { className: X, children: `Broadcast Setup` }),
            (0, Z.jsxs)(`div`, {
              children: [`Broadcaster: `, t.steam_id, `, SteamID: `, i],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Directory Server: `,
                t.directory_server,
                `, SessionID: `,
                t.broadcast_id,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Ingester Server: `,
                t.relay_server,
                `, UploadID: `,
                t.upload_id,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [`Origin Server: `, t.origin_server],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Chat Server: `,
                t.chat_server,
                `, chat_id: `,
                t.chat_id,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [`Transcoder Server : `, t.transcode_server],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, { className: X, children: `Ingester Info` }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Client: `,
                t.remote_address,
                ` `,
                t.is_rtmp ? `(RTMP)` : `(STEAM CLIENT)`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Video Config: `,
                t.upload_height,
                `x`,
                t.upload_width,
                `@`,
                t.upload_fps,
                `, `,
                t.upload_bandwidth,
                ` kbps `,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Audio Config: `,
                t.upload_audio_channels,
                `x`,
                t.upload_audio_samplerate,
                `Hz, `,
                t.upload_audio_bitrate / 1e3,
                ` kbps `,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Upload Stats: `,
                t.upload_avg_fps,
                ` FPS, `,
                t.upload_avg_bandwidth,
                ` kbps, `,
                t.upload_avg_key_interval,
                ` msec key frame interval`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Upload Totals: `,
                t.upload_total_frames_received,
                ` video frames, \xA0`,
                Math.round(
                  (t.upload_current_video_pts - t.upload_first_video_pts) /
                    t.upload_video_timescale,
                ),
                ` seconds ( `,
                g(t.upload_total_bytes_uploaded || 0, 1),
                ` ) `,
              ],
            }),
          ],
        }),
        !!t.transcode_server &&
          (0, Z.jsxs)(`div`, {
            className: `weRyAFSdhQU-`,
            children: [
              (0, Z.jsx)(`div`, {
                className: `SmOFdA0bRKo-`,
                children: `Transcoder Info`,
              }),
              (0, Z.jsxs)(`div`, {
                children: [
                  `Decoder ( `,
                  t.upload_height,
                  `x`,
                  t.upload_width,
                  `@`,
                  t.upload_fps,
                  `, `,
                  t.upload_bandwidth,
                  ` kbps ) : \xA0`,
                  t.transcoder_frames_to_decode,
                  ` queued, \xA0`,
                  t.transcoder_frames_total_decoded,
                  ` decoded`,
                ],
              }),
              t.transcoder_streams.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      `Encoder `,
                      e.representation_id,
                      ` ( `,
                      e.height,
                      `x`,
                      e.width,
                      `@`,
                      e.fps,
                      ` `,
                      e.bitrate,
                      ` kbps ) : `,
                      e.frames_to_encode,
                      ` queued, `,
                      e.frames_total_encoded,
                      ` encoded`,
                    ],
                  },
                  e.representation_id,
                ),
              ),
            ],
          }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, { className: X, children: `Origin Info` }),
            t?.origin_video_streams?.map((e) =>
              (0, Z.jsxs)(
                `div`,
                {
                  children: [
                    `Video Stream `,
                    e.representation_id,
                    ` ( `,
                    e.height,
                    `x`,
                    e.width,
                    `@`,
                    e.fps,
                    ` `,
                    e.bitrate,
                    ` kbps ) : \xA0`,
                    e.num_frames_queued,
                    ` frames queued, \xA0`,
                    e.num_segments_received,
                    ` segments received, \xA0`,
                    e.num_segments_cached * 2,
                    ` seconds cached ( `,
                    g(e.memory_used, 2),
                    ` )`,
                  ],
                },
                e.representation_id,
              ),
            ),
            `Audio Stream `,
            t.origin_audio_stream.representation_id,
            ` ( `,
            t.upload_audio_channels,
            `x`,
            t.upload_audio_samplerate,
            `Hz, `,
            t.upload_audio_bitrate / 1e3,
            ` kbps ) : \xA0`,
            t.origin_audio_stream.num_frames_queued,
            ` frames queued, \xA0`,
            t.origin_audio_stream.num_segments_received,
            ` segments received, \xA0`,
            t.origin_audio_stream.num_segments_cached * 2,
            ` seconds cached ( `,
            g(t.origin_audio_stream.memory_used, 2),
            ` )`,
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, { className: X, children: `Viewer Info` }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Viewers: `,
                t.current_viewers,
                ` current (`,
                t.current_anon_viewers,
                ` anonymous), `,
                t.total_unique_viewers,
                ` total unique, `,
                t.max_concurrent_viewers,
                ` max concurrent`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Average time watched: `,
                t.average_watch_duration,
                ` seconds`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `Last Minute: `,
                t.added_viewers_last_minute,
                ` watch requests, `,
                t.rejected_viewers_last_minute,
                ` rejected`,
              ],
            }),
            (0, Z.jsxs)(`div`, { children: [`Restrictions: `, t.restriction] }),
            (0, Z.jsx)(`div`, { children: t.extra_viewer_info }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, { className: X, children: `Settings` }),
            (0, Z.jsxs)(`div`, { children: [`is replay? `, t.is_replay] }),
            (0, Z.jsxs)(`div`, {
              children: [`is replay local file? `, t.is_replay_local_file],
            }),
            (0, Z.jsxs)(`div`, {
              children: [`is replay clip? `, t.is_replay_clip],
            }),
            (0, Z.jsxs)(`div`, {
              children: [`is capturing VOD? `, t.is_capturing_vod],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                `is white listed for store streaming? `,
                t.is_whitelisted,
              ],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, { className: X, children: `App Info` }),
            (0, Z.jsxs)(`div`, { children: [`appid: `, t.app_id] }),
            (0, Z.jsxs)(`div`, { children: [`app name: `, t.app_name] }),
            (0, Z.jsxs)(`div`, { children: [`broadcast title: `, t.title] }),
            (0, Z.jsxs)(`div`, { children: [`thumbnail: `, t.thumbnail_url] }),
            !!t.thumbnail_url && (0, Z.jsx)(`img`, { src: t.thumbnail_url }),
            !!(t.app_id && t.app_id > 0) &&
              (0, Z.jsx)(`div`, {
                className: `PmXnIaInaq4-`,
                children: (0, Z.jsx)(p, {
                  id: t.app_id,
                  type: `game`,
                  bPreferAssetWithoutOverride: !1,
                }),
              }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: Y,
          children: [
            (0, Z.jsx)(`div`, {
              className: X,
              children: `Manifest Information`,
            }),
            (0, Z.jsxs)(`div`, {
              children: [`Heartbeat Interval: `, a.m_data.heartbeat_interval],
            }),
            (0, Z.jsxs)(`div`, { children: [`DASH MPEG Url: `, a.m_data.url] }),
            (0, Z.jsxs)(`div`, { children: [`HLS Url: `, a.m_data.hls_url] }),
          ],
        }),
        (0, Z.jsx)(O, { onClick: () => r(!n), children: `Toggle Raw Data` }),
        !!n &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(`div`, {
                className: `weRyAFSdhQU-`,
                children: (0, Z.jsx)(b, { data: t }),
              }),
              (0, Z.jsx)(`div`, {
                className: `weRyAFSdhQU-`,
                children: (0, Z.jsx)(b, { data: a?.m_data || `` }),
              }),
            ],
          }),
      ],
    });
  },
  ye = `kyjY09OhJaU-`,
  be = `vTYbvBh-uU0-`,
  xe = `Rzioma-KL-Y-`,
  Se = `l5FXcZ2ERyE-`,
  Ce = `nxAiknUrAfg-`,
  we = `k3hahr49YgY-`,
  Te = `jmmkRcWSmcg-`,
  Ee = `_2Qqqqokoe50-`,
  De = (e) => {
    let t = e.steamid.GetAccountID(),
      { data: n } = ie(t);
    return (0, Z.jsxs)(`div`, {
      className: Te,
      children: [
        (0, Z.jsx)(`a`, {
          href: n.GetCommunityProfileURL(),
          "data-miniprofile": `s` + e.steamid.ConvertTo64BitString(),
          children: (0, Z.jsx)(ge, {
            persona: n,
            size: e.size,
            statusPosition: `bottom`,
          }),
        }),
        (0, Z.jsxs)(`div`, {
          className: Ee,
          children: [
            !!e.bShowName &&
              (0, Z.jsx)(`a`, {
                href: n.GetCommunityProfileURL(),
                "data-miniprofile": `s` + e.steamid.ConvertTo64BitString(),
                children: n.m_strProfileURL,
              }),
            e.children,
          ],
        }),
      ],
    });
  },
  Oe = `PDuqTNJgeEs-`,
  ke = `_4e7fDLjvdyY-`,
  Ae = `BGLAeY7wCoA-`,
  je = `exDpHMtCrRk-`,
  Me = `dCf-IQijhuA-`,
  Ne = `HQCPHTJAjtw-`,
  Pe = `P6rJQE6tQ5Q-`;
function Fe(e) {
  let { broadcasterSteamID: t } = e,
    n = t.ConvertTo64BitString(),
    [r, i] = l(() => {
      let e = m.GetOrCreateBroadcastInfo(n),
        t = e.m_nAppID == 7 ? 0 : e.m_nAppID;
      return [e.m_nViewerCount, t];
    }),
    [a] = _(i, { include_assets: !0 }),
    o = a?.GetAssets().GetMainCapsuleURL(),
    s = o && o.length > 0;
  return (0, Z.jsx)(E, {
    children: (0, Z.jsxs)(`div`, {
      className: Oe,
      children: [
        s &&
          (0, Z.jsx)(`a`, {
            className: `A8QAZQrKuJo-`,
            href: S(a?.GetStorePageURL() || F.STORE_BASE_URL + `app/` + i),
            children: (0, Z.jsx)(`img`, { src: o }),
          }),
        (0, Z.jsxs)(`div`, {
          className: Me,
          children: [
            (0, Z.jsxs)(`div`, {
              className: ke,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: Ae,
                  children: [
                    (0, Z.jsx)(Ie, { broadcasterSteamID: t }),
                    (0, Z.jsx)(`div`, {
                      className: Ne,
                      children: V(`#Broadcast_ViewerCount`, oe(r)),
                    }),
                  ],
                }),
                (0, Z.jsx)(Le, { broadcasterSteamID: t }),
              ],
            }),
            (0, Z.jsx)(De, { steamid: t, size: `Medium`, bShowName: !0 }),
          ],
        }),
      ],
    }),
  });
}
var Ie = r((e) => {
    let { broadcasterSteamID: t } = e,
      n = t.ConvertTo64BitString(),
      [r, i] = l(() => {
        let e = m.GetOrCreateBroadcastInfo(n),
          t = e.m_nAppID == 7 ? 0 : e.m_nAppID;
        return [e.m_strAppTitle, t];
      }),
      [a] = _(i, { include_assets: !0 });
    return (0, Z.jsxs)(`div`, {
      className: je,
      children: [
        M(`#Broadcast_Playing`),
        (0, Z.jsx)(`a`, {
          href: S(a?.GetStorePageURL() || F.STORE_BASE_URL + `app/` + i),
          children: r || a?.GetName(),
        }),
        r?.length > 0 && (0, Z.jsxs)(`span`, { children: [` - `, r] }),
      ],
    });
  }),
  Le = r((e) => {
    let { broadcasterSteamID: t } = e;
    return (
      t.ConvertTo64BitString(),
      (0, Z.jsxs)(`div`, {
        className: Pe,
        children: [
          P.steamid != e.broadcasterSteamID.ConvertTo64BitString() &&
            (0, Z.jsx)(O, {
              onClick: (e) => {
                P.logged_in
                  ? A((0, Z.jsx)(Re, { broadcasterSteamID: t }), I(e))
                  : A(
                      (0, Z.jsx)(D, {
                        strTitle: M(`#EventDisplay_Share_NotLoggedIn`),
                        strDescription: M(
                          `#EventDisplay_Share_NotLoggedIn_Description`,
                        ),
                        strOKButtonText: M(`#MobileLogin_SignIn`),
                        onOK: () => he(),
                      }),
                      I(e),
                    );
              },
              children: (0, Z.jsx)(j, {
                toolTipContent: M(`#Broadcast_User_Report_ttip`),
                children: (0, Z.jsx)(y, {}),
              }),
            }),
          (0, Z.jsx)(O, {
            onClick: (e) =>
              T(
                e,
                `https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8`,
              ),
            children: (0, Z.jsx)(j, {
              toolTipContent: M(`#Broadcast_User_FAQ_ttip`),
              children: (0, Z.jsx)(se, {}),
            }),
          }),
        ],
      })
    );
  }),
  Re = (e) => {
    let [t, n] = (0, J.useState)(``);
    return (0, Z.jsx)(D, {
      strTitle: M(`#Broadcast_ReportItem_Title`),
      strDescription: M(`#Broadcast_ReportItem_Description`),
      onCancel: e.closeModal,
      bOKDisabled: t.trim().length == 0,
      onOK: async () => {
        (await q.Get().SendUserReportOnBroadcast(t),
          e.closeModal && e.closeModal());
      },
      children: (0, Z.jsx)(`textarea`, {
        value: t,
        onChange: (e) => n(e.currentTarget.value),
        rows: 10,
        cols: 80,
      }),
    });
  },
  ze = `_6XtxP-iuz1Y-`,
  Be = (e) => {
    if (!P.is_support) return null;
    let t = (t, n) => {
        A(
          (0, Z.jsx)(Ve, {
            broadcastSteamID: e.broadcastSteamID,
            strAction: n,
          }),
          I(t),
        );
      },
      n = (t) => {
        A((0, Z.jsx)(Q, { steamid: e.broadcastSteamID }), I(t));
      },
      r =
        `https://steamsupport.valvesoftware.com/account/overview/` +
        e.broadcastSteamID.ConvertTo64BitString();
    return (0, Z.jsxs)(`div`, {
      className: w(ze, le),
      children: [
        (0, Z.jsx)(`div`, { children: `(VO) Support Tools` }),
        (0, Z.jsx)(O, {
          onClick: (e) => t(e, `frontpage`),
          children: `Remove from Front Page`,
        }),
        (0, Z.jsx)(O, {
          onClick: (e) => t(e, `ban`),
          children: `Ban from Broadcasting`,
        }),
        (0, Z.jsx)(O, { onClick: n, children: `Make Unbannable` }),
        (0, Z.jsx)(O, {
          onClick: (e) => T(e, r),
          children: `Go to Support Page`,
        }),
      ],
    });
  },
  Ve = r((e) => {
    let { broadcastSteamID: t, strAction: n } = e,
      [r, i] = (0, J.useState)(1),
      [a, o] = (0, J.useState)(!1),
      [s, c] = (0, J.useState)(!1),
      [l, u] = (0, J.useState)(!1),
      d = (0, J.useRef)(null);
    (0, J.useEffect)(
      () => () => {
        d.current && d.current(`BroadcastConfirmBanAction: unmounting`);
      },
      [],
    );
    let f = [
        { label: `1 Day`, data: 1 },
        { label: `1 Week`, data: 7 },
        { label: `1 Month`, data: 30 },
        { label: `6 Months`, data: 180 },
        { label: `1 Year`, data: 365 },
      ],
      p = () => e.closeModal && e.closeModal();
    return (0, Z.jsx)(E, {
      children: (0, Z.jsx)(G, {
        onEscKeypress: p,
        children: (0, Z.jsxs)(C, {
          children: [
            (0, Z.jsx)(R, {
              children:
                n == `frontpage`
                  ? `Remove Broadcast From Front Page`
                  : `Ban from Broadcasting`,
            }),
            (0, Z.jsx)(B, {
              children: (0, Z.jsxs)(k, {
                children: [
                  (0, Z.jsx)(`p`, {
                    children:
                      n == `frontpage`
                        ? `How long should we prevent the broadcast from appearing in community or store?`
                        : `How long should we prevent the user from Broadcast at all on Steam?`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(ae, {
                        rgOptions: f,
                        selectedOption: r,
                        onChange: (e) => i(e.data),
                      }),
                      !!a && (0, Z.jsx)(h, {}),
                      !!s &&
                        (0, Z.jsx)(`div`, {
                          children: l
                            ? `Successfully Completed Request`
                            : `Failed to complete request, check browser console and/or try again later`,
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, Z.jsx)(N, {
              children: s
                ? (0, Z.jsx)(H, { onClick: p, children: M(`#Button_Dismiss`) })
                : (0, Z.jsxs)(z, {
                    children: [
                      (0, Z.jsx)(O, {
                        onClick: p,
                        children: M(`#Button_Cancel`),
                      }),
                      (0, Z.jsx)(H, {
                        onClick: async () => {
                          o(!0);
                          try {
                            d.current && d.current();
                            let e = K.default.CancelToken.source();
                            ((d.current = e.cancel),
                              await q.Get().SetBroadcasterRestrictions(n, r, e),
                              e.token.reason);
                          } finally {
                            (o(!1), c(!0), u(!1));
                          }
                        },
                        children: M(`#Button_Confirm`),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  }),
  Q = (e) => {
    let [t, n] = (0, J.useState)(!1),
      [r, i] = (0, J.useState)(!1),
      [a, o] = (0, J.useState)(!1),
      s = (0, J.useRef)(null);
    (0, J.useEffect)(
      () => () => {
        s.current && s.current(`BroadcastMakeUnbannable: unmounting`);
      },
      [],
    );
    let c = () => e.closeModal && e.closeModal();
    return (0, Z.jsx)(E, {
      children: (0, Z.jsx)(G, {
        onEscKeypress: c,
        children: (0, Z.jsxs)(C, {
          children: [
            (0, Z.jsx)(R, { children: `Make Broadcast Unbannable` }),
            (0, Z.jsx)(B, {
              children: (0, Z.jsxs)(k, {
                children: [
                  (0, Z.jsx)(`p`, {
                    children: `Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      !!t && (0, Z.jsx)(h, {}),
                      !!r &&
                        (0, Z.jsx)(`div`, {
                          children: a
                            ? `Successfully Set Unbannable`
                            : `Failed to make Unbannable`,
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, Z.jsx)(N, {
              children: r
                ? (0, Z.jsx)(H, { onClick: c, children: M(`#Button_Dismiss`) })
                : (0, Z.jsxs)(z, {
                    children: [
                      (0, Z.jsx)(O, {
                        onClick: c,
                        children: M(`#Button_Cancel`),
                      }),
                      (0, Z.jsx)(H, {
                        onClick: async () => {
                          n(!0);
                          let e = !1;
                          try {
                            s.current && s.current();
                            let t = K.default.CancelToken.source();
                            ((s.current = t.cancel),
                              (e = await q.Get().SetUnBannable(t)));
                          } finally {
                            (n(!1), i(!0), o(e));
                          }
                        },
                        children: M(`#Button_Confirm`),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  };
function He() {
  let [e] = (0, J.useState)(
    () => U(`ewatchlocation`, `application_config`) || 5,
  );
  return e;
}
function Ue(e) {
  let t = q.Get().GetIFrameParentOrigin();
  t && window.parent !== window && window.parent.postMessage({ msg: e }, t);
}
function We() {
  let [e, t] = (0, J.useState)(
    () =>
      new URLSearchParams(window.location.search).get(`broadcastid`) || void 0,
  );
  return (
    (0, J.useEffect)(() => {
      let e = q.Get().GetIFrameParentOrigin(),
        n = (n) => {
          e &&
            n.origin === e &&
            n.data?.msg === `OnVideoIFrameBroadcastIDChanged` &&
            n.data.broadcastid &&
            t(String(n.data.broadcastid));
        };
      return (
        window.addEventListener(`message`, n),
        () => window.removeEventListener(`message`, n)
      );
    }, []),
    e
  );
}
var Ge = r((e) => {
  let t = q.Get().GetBroadcasterSteamID(),
    n = t?.ConvertTo64BitString(),
    r = He(),
    [i, a] = ne(`muted`, !0),
    o = m.GetBroadcast(n),
    s = m.GetOrCreateBroadcastInfo(n),
    c = We();
  if (!n) return null;
  let l = o?.m_ulBroadcastID;
  q.Get().BShowOnlyChat() && (l = c);
  let u;
  return (
    q.Get().GetIFrameParentOrigin() && (u = () => Ue(`OnLoginButtonClicked`)),
    (0, Z.jsx)(Z.Fragment, {
      children: (0, Z.jsxs)(`div`, {
        className: w(ye),
        children: [
          (0, Z.jsxs)(`div`, {
            className: w(pe),
            children: [
              !q.Get().BShowOnlyChat() &&
                (0, Z.jsx)(E, {
                  children: (0, Z.jsx)(`div`, {
                    className: w(`SObNBjtfgbU-`),
                    children: (0, Z.jsx)(`div`, {
                      className: w({
                        "-d8EQqzPfNs-": !0,
                        video_placeholder_trgt: !0,
                        "_27mwemkqVww-": q.Get().BShowOnlyVideo(),
                      }),
                      children: (0, Z.jsx)(`div`, {
                        className: `_6NUM7GMUXrI-`,
                        children: (0, Z.jsx)(E, {
                          children: (0, Z.jsx)(te, {
                            steamIDBroadcast: n,
                            watchLocation: r,
                            bStartMuted: i,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              !q.Get().BShowOnlyVideo() &&
                (0, Z.jsx)(`div`, {
                  className: `VEghDDjerCc-`,
                  children: (0, Z.jsx)(`div`, {
                    className: `eWHilAZFWEA-`,
                    children: (0, Z.jsx)(E, {
                      children: (0, Z.jsx)(fe, {
                        emoticonStore: me,
                        watchLocation: 6,
                        steamID: n,
                        broadcastID: l,
                        onSignIn: u,
                      }),
                    }),
                  }),
                }),
            ],
          }),
          !q.Get().BShowInIframe() &&
            (0, Z.jsx)(Ke, { broadcasterSteamID: t, broadcastInfo: s }),
        ],
      }),
    })
  );
});
function $(e) {
  return e != 0 && e != 7;
}
var Ke = r((e) => {
    let { broadcasterSteamID: t, broadcastInfo: n } = e,
      [r, i] = (0, J.useState)(null),
      a = n.m_nAppID;
    return (
      (0, J.useEffect)(() => {
        $(a) &&
          (async () => {
            let e = await ee.LoadOGGClanInfoForAppID(a);
            i(e);
          })();
      }, [a]),
      (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(Fe, { broadcasterSteamID: t }),
          (0, Z.jsx)(qe, { steamid: t }),
          !!P.is_support &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(Be, { broadcastSteamID: t }),
                (0, Z.jsx)(`div`, {
                  className: w(`u6DPgTclyv4-`, `JCVGLJqumRQ-`),
                  children: (0, Z.jsx)(_e, {}),
                }),
              ],
            }),
          $(a) &&
            (0, Z.jsxs)(`div`, {
              className: `_5xvPLzWi31g-`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `ySQxr-h7EDA-`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `uhFcNuyHw60-`,
                      children: [` `, M(`#Broadcast_About_Game`), ` `],
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `XqoXynpd0bw-`,
                      children: `\xA0`,
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `ojYXlML59ag-`,
                  children: (0, Z.jsx)(p, {
                    id: Number.parseInt(n.m_strAppId),
                    type: `game`,
                    bPreferAssetWithoutOverride: !1,
                  }),
                }),
              ],
            }),
          !!r &&
            (0, Z.jsx)(`div`, {
              className: `_1tNQsmKtte8-`,
              children: (0, Z.jsx)(f, {
                clanAccountID: r.clanAccountID,
                trackingLocation: 6,
                partnerEventStore: d,
                bViewAllShowInfiniteScroll: !0,
              }),
            }),
        ],
      })
    );
  }),
  qe = r((e) => {
    let t = (0, J.useRef)(null),
      n = m.GetOrCreateBroadcastInfo(e.steamid.ConvertTo64BitString()),
      [r, i] = (0, J.useState)(n.m_strTitle),
      [a, o] = (0, J.useState)(``),
      [s, c] = (0, J.useState)(null);
    return (
      (0, J.useEffect)(
        () => (
          i(n.m_strTitle),
          () => {
            t.current && t.current(`BroadcastControls: unmounting`);
          }
        ),
        [n.m_strTitle],
      ),
      P.accountid == e.steamid.GetAccountID()
        ? (0, Z.jsxs)(`div`, {
            className: be,
            children: [
              (0, Z.jsx)(`div`, {
                className: xe,
                children: M(`#Broadcaster_Control_title`),
              }),
              (0, Z.jsxs)(`div`, {
                className: Se,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: Ce,
                    children: [
                      (0, Z.jsx)(x, {
                        type: `text`,
                        label: M(`#Broadcast_title_title`),
                        onChange: (e) => i(e.currentTarget.value || ``),
                        placeholder: M(`#Broadcast_title_placeholder`),
                        value: r,
                      }),
                      (0, Z.jsx)(x, {
                        type: `text`,
                        label: M(`#Broadcast_Control_matchid`),
                        onChange: (e) => o(e.currentTarget.value || ``),
                        value: a,
                      }),
                      (0, Z.jsxs)(O, {
                        onClick: async () => {
                          t.current && t.current();
                          let e = K.default.CancelToken.source();
                          t.current = e.cancel;
                          let n = await q
                            .Get()
                            .UpdateBroadcastSettings(a, r, e);
                          e.token.reason ||
                            c(
                              M(
                                n
                                  ? `#Broadcast_Control_Success`
                                  : `#Broadcast_Control_Failure`,
                              ),
                            );
                        },
                        children: [
                          M(`#Broadcast_save_changes`),
                          (0, Z.jsx)(ue, {
                            tooltip: M(`#Broadcast_save_title_ttip`),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: we,
                    children: [
                      (0, Z.jsx)(O, {
                        onClick: (e) => {
                          A(
                            (0, Z.jsx)(D, {
                              strTitle: M(`#Broadcast_Control_StopBroadcast`),
                              strDescription: M(
                                `#EventEditor_GenericAreYouSure`,
                              ),
                              onOK: async () => {
                                t.current && t.current();
                                let e = K.default.CancelToken.source();
                                t.current = e.cancel;
                                let n = await q.Get().StopBroadcast(e);
                                e.token.reason ||
                                  c(
                                    M(
                                      n
                                        ? `#Broadcast_Control_StopSuccess`
                                        : `#Broadcast_Control_StopFailure`,
                                    ),
                                  );
                              },
                            }),
                            I(e),
                          );
                        },
                        children: M(`#Broadcast_Control_StopBroadcast`),
                      }),
                      !!s && (0, Z.jsx)(`div`, { children: s }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null
    );
  }),
  Je = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
function Ye(e) {
  return (0, Z.jsx)(Z.Fragment, {
    children: (0, Z.jsxs)(s, {
      children: [
        (0, Z.jsx)(u, {
          path: Je.BroadcastWatch(`:steamid_or_user_vanity`),
          render: (e) =>
            (0, Z.jsx)(Ge, {
              strSteamID: e.match.params.steamid_or_user_vanity,
            }),
        }),
        (0, Z.jsx)(u, { component: ce }),
      ],
    }),
  });
}
export { Ye as default };

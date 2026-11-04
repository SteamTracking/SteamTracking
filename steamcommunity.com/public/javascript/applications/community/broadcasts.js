/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import {
  A as t,
  B as n,
  C as r,
  L as i,
  Pt as a,
  R as o,
  St as s,
  ot as c,
  w as l,
  xt as u,
} from "./libraries.js?contenthash=BSMOk6Fq";
import { l as d, t as f } from "./eventrow.js?contenthash=BhscLvp2";
import { Ar as p } from "./salebanner.js?contenthash=CGp1YmSU";
import { i as ee } from "./clanstore.js?contenthash=ipycUSTp";
import { t as m } from "./broadcastwatchstore.js?contenthash=BYiYO6H8";
import { t as te } from "./broadcastplayer.js?contenthash=BdIDM2vG";
import { t as h } from "./throbber.js?contenthash=Cd5Ml_20";
import { o as g } from "./historyutils.js?contenthash=j-8hxDg1";
import { t as _ } from "./localdateandtime.js?contenthash=B8Choir7";
import { n as v } from "./numberformats.js?contenthash=Blcjv6G9";
import { n as y } from "./playerstore.js?contenthash=BQuJfss1";
import { n as b } from "./storeitemhooks.js?contenthash=BQ6Er2NU";
import {
  $o as x,
  Bs as S,
  Cm as ne,
  Cu as C,
  Df as re,
  Es as w,
  Et as ie,
  Gi as T,
  Ic as ae,
  Jo as E,
  Jr as oe,
  Kc as se,
  Ko as D,
  Lf as O,
  Ls as k,
  Nd as A,
  Qd as j,
  Qi as M,
  Tu as N,
  Vo as ce,
  Vr as le,
  Xo as P,
  Zo as F,
  cs as I,
  fm as L,
  gs as ue,
  ms as R,
  nd as z,
  om as B,
  pm as V,
  rs as H,
  sm as U,
  tf as de,
  ts as W,
  vs as G,
} from "./main.js?contenthash=BMjFHmU0";
import {
  Q as fe,
  t as pe,
} from "./broadcast_embeddable.module.js?contenthash=DFI3oA8h";
import { s as me } from "./broadcast_embeddable2.js?contenthash=D9GZGJO7";
import { t as he } from "./partnereventslogin.js?contenthash=DW26hPFp";
import { n as ge } from "./steamavatar2.js?contenthash=BDQwGMH8";
var K = e(t()),
  q = class e {
    constructor() {
      i(this);
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
      let t = L.COMMUNITY_BASE_URL + `broadcast/broadcastdebuginfo`,
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
          return (this.m_curDebugInfo = r.data), this.m_curDebugInfo;
      } catch (e) {
        let t = O(e);
        console.error(`LoadBroadcastDebugInfo: Failed ` + t.strErrorMsg, t);
      }
      return null;
    }
    async UpdateBroadcastSettings(e, t, r) {
      let i = L.COMMUNITY_BASE_URL + `broadcast/updatebroadcastsettings`,
        a = {
          steamid: this.m_steamid.ConvertTo64BitString(),
          matchid: e,
          title: t,
          sessionid: B(),
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
        let t = O(e);
        console.error(`UpdateBroadcastSettings: Failed ` + t.strErrorMsg, t);
      }
      return !1;
    }
    async StopBroadcast(e) {
      let t = this.m_steamid.ConvertTo64BitString(),
        n = m.GetBroadcast(t),
        r = L.COMMUNITY_BASE_URL + `broadcast/stopbroadcast`,
        i = {
          steamid: t,
          broadcastid: n ? n.m_ulBroadcastID : null,
          sessionid: B(),
        };
      return await this.InternalSendSimpleGetRequest(`StopBroadcast`, r, i, e);
    }
    async SetBroadcasterRestrictions(e, t, n) {
      let r = this.m_steamid.ConvertTo64BitString(),
        i = m.GetBroadcast(r),
        a = L.COMMUNITY_BASE_URL + `broadcast/setbroadcastrestriction`,
        o = {
          steamid: r,
          broadcastid: i ? i.m_ulBroadcastID : null,
          type: e,
          days: t,
          sessionid: B(),
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
        r = L.COMMUNITY_BASE_URL + `broadcast/unban`,
        i = {
          steamid: t,
          broadcastid: n ? n.m_ulBroadcastID : null,
          sessionid: B(),
        };
      return await this.InternalSendSimpleGetRequest(`SetUnBannable`, r, i, e);
    }
    async SendUserReportOnBroadcast(e) {
      let t = this.m_steamid.ConvertTo64BitString(),
        n = m.GetBroadcast(t),
        r = L.COMMUNITY_BASE_URL + `broadcast/report`,
        i = {
          steamid: t,
          broadcastid: n ? n.m_ulBroadcastID : null,
          description: e,
          sessionid: B(),
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
        let n = O(t);
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
        ((this.m_steamid = new ne(e.steamid)),
        (this.m_bShowOnlyChat = !!e.show_only_chat),
        (this.m_bShowOnlyVideo = !!e.show_only_video),
        (this.m_strIFrameParentOrigin = e.iframe_parent_origin || void 0));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object` ? typeof t.steamid == `string` : !1;
    }
  };
re([o], q.prototype, `m_curDebugInfo`, void 0);
var J = e(a()),
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
      (0, Z.jsx)(N, {
        children: (0, Z.jsxs)(`div`, {
          className: C(void 0),
          children: [
            (0, Z.jsx)(`div`, {
              className: void 0,
              children: (0, Z.jsx)(F, {
                onClick: async () => {
                  t.current && t.current();
                  let e = K.default.CancelToken.source();
                  (t.current = e.cancel),
                    r(await q.Get().LoadBroadcastDebugInfo(e));
                },
                children: `(VO) Load Debug Info`,
              }),
            }),
            (0, Z.jsx)(N, { children: (0, Z.jsx)(Q, { info: n }) }),
          ],
        }),
      })
    );
  },
  Q = (e) => {
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
                  (0, Z.jsx)(_, {
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
                v(t.upload_total_bytes_uploaded || 0, 1),
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
                    v(e.memory_used, 2),
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
            v(t.origin_audio_stream.memory_used, 2),
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
        (0, Z.jsx)(F, { onClick: () => r(!n), children: `Toggle Raw Data` }),
        !!n &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(`div`, {
                className: `weRyAFSdhQU-`,
                children: (0, Z.jsx)(A, { data: t }),
              }),
              (0, Z.jsx)(`div`, {
                className: `weRyAFSdhQU-`,
                children: (0, Z.jsx)(A, { data: a?.m_data || `` }),
              }),
            ],
          }),
      ],
    });
  },
  ve = `kyjY09OhJaU-`,
  ye = `vTYbvBh-uU0-`,
  be = `Rzioma-KL-Y-`,
  xe = `l5FXcZ2ERyE-`,
  Se = `nxAiknUrAfg-`,
  Ce = `k3hahr49YgY-`,
  we = `jmmkRcWSmcg-`,
  Te = `_2Qqqqokoe50-`,
  Ee = (e) => {
    let t = e.steamid.GetAccountID(),
      { data: n } = y(t);
    return (0, Z.jsxs)(`div`, {
      className: we,
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
          className: Te,
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
  De = `PDuqTNJgeEs-`,
  Oe = `_4e7fDLjvdyY-`,
  ke = `BGLAeY7wCoA-`,
  Ae = `exDpHMtCrRk-`,
  je = `dCf-IQijhuA-`,
  Me = `HQCPHTJAjtw-`,
  Ne = `P6rJQE6tQ5Q-`;
function Pe(e) {
  let { broadcasterSteamID: t } = e,
    n = t.ConvertTo64BitString(),
    [r, i] = l(() => {
      let e = m.GetOrCreateBroadcastInfo(n),
        t = e.m_nAppID == 7 ? 0 : e.m_nAppID;
      return [e.m_nViewerCount, t];
    }),
    [a] = b(i, { include_assets: !0 }),
    o = a?.GetAssets().GetMainCapsuleURL(),
    s = o && o.length > 0;
  return (0, Z.jsx)(N, {
    children: (0, Z.jsxs)(`div`, {
      className: De,
      children: [
        s &&
          (0, Z.jsx)(`a`, {
            className: `A8QAZQrKuJo-`,
            href: k(a?.GetStorePageURL() || L.STORE_BASE_URL + `app/` + i),
            children: (0, Z.jsx)(`img`, { src: o }),
          }),
        (0, Z.jsxs)(`div`, {
          className: je,
          children: [
            (0, Z.jsxs)(`div`, {
              className: Oe,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: ke,
                  children: [
                    (0, Z.jsx)(Fe, { broadcasterSteamID: t }),
                    (0, Z.jsx)(`div`, {
                      className: Me,
                      children: de(`#Broadcast_ViewerCount`, ie(r)),
                    }),
                  ],
                }),
                (0, Z.jsx)(Ie, { broadcasterSteamID: t }),
              ],
            }),
            (0, Z.jsx)(Ee, { steamid: t, size: `Medium`, bShowName: !0 }),
          ],
        }),
      ],
    }),
  });
}
var Fe = r((e) => {
    let { broadcasterSteamID: t } = e,
      n = t.ConvertTo64BitString(),
      [r, i] = l(() => {
        let e = m.GetOrCreateBroadcastInfo(n),
          t = e.m_nAppID == 7 ? 0 : e.m_nAppID;
        return [e.m_strAppTitle, t];
      }),
      [a] = b(i, { include_assets: !0 });
    return (0, Z.jsxs)(`div`, {
      className: Ae,
      children: [
        j(`#Broadcast_Playing`),
        (0, Z.jsx)(`a`, {
          href: k(a?.GetStorePageURL() || L.STORE_BASE_URL + `app/` + i),
          children: r || a?.GetName(),
        }),
        r?.length > 0 && (0, Z.jsxs)(`span`, { children: [` - `, r] }),
      ],
    });
  }),
  Ie = r((e) => {
    let { broadcasterSteamID: t } = e;
    return (
      t.ConvertTo64BitString(),
      (0, Z.jsxs)(`div`, {
        className: Ne,
        children: [
          V.steamid != e.broadcasterSteamID.ConvertTo64BitString() &&
            (0, Z.jsx)(F, {
              onClick: (e) => {
                V.logged_in
                  ? M((0, Z.jsx)(Le, { broadcasterSteamID: t }), z(e))
                  : M(
                      (0, Z.jsx)(T, {
                        strTitle: j(`#EventDisplay_Share_NotLoggedIn`),
                        strDescription: j(
                          `#EventDisplay_Share_NotLoggedIn_Description`,
                        ),
                        strOKButtonText: j(`#MobileLogin_SignIn`),
                        onOK: () => he(),
                      }),
                      z(e),
                    );
              },
              children: (0, Z.jsx)(G, {
                toolTipContent: j(`#Broadcast_User_Report_ttip`),
                children: (0, Z.jsx)(ae, {}),
              }),
            }),
          (0, Z.jsx)(F, {
            onClick: (e) =>
              w(
                e,
                `https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8`,
              ),
            children: (0, Z.jsx)(G, {
              toolTipContent: j(`#Broadcast_User_FAQ_ttip`),
              children: (0, Z.jsx)(se, {}),
            }),
          }),
        ],
      })
    );
  }),
  Le = (e) => {
    let [t, n] = (0, J.useState)(``);
    return (0, Z.jsx)(T, {
      strTitle: j(`#Broadcast_ReportItem_Title`),
      strDescription: j(`#Broadcast_ReportItem_Description`),
      onCancel: e.closeModal,
      bOKDisabled: t.trim().length == 0,
      onOK: async () => {
        await q.Get().SendUserReportOnBroadcast(t),
          e.closeModal && e.closeModal();
      },
      children: (0, Z.jsx)(`textarea`, {
        value: t,
        onChange: (e) => n(e.currentTarget.value),
        rows: 10,
        cols: 80,
      }),
    });
  },
  Re = `_6XtxP-iuz1Y-`,
  ze = (e) => {
    if (!V.is_support) return null;
    let t = (t, n) => {
        M(
          (0, Z.jsx)(Be, {
            broadcastSteamID: e.broadcastSteamID,
            strAction: n,
          }),
          z(t),
        );
      },
      n = (t) => {
        M((0, Z.jsx)(Ve, { steamid: e.broadcastSteamID }), z(t));
      },
      r =
        `https://steamsupport.valvesoftware.com/account/overview/` +
        e.broadcastSteamID.ConvertTo64BitString();
    return (0, Z.jsxs)(`div`, {
      className: C(Re, le),
      children: [
        (0, Z.jsx)(`div`, { children: `(VO) Support Tools` }),
        (0, Z.jsx)(F, {
          onClick: (e) => t(e, `frontpage`),
          children: `Remove from Front Page`,
        }),
        (0, Z.jsx)(F, {
          onClick: (e) => t(e, `ban`),
          children: `Ban from Broadcasting`,
        }),
        (0, Z.jsx)(F, { onClick: n, children: `Make Unbannable` }),
        (0, Z.jsx)(F, {
          onClick: (e) => w(e, r),
          children: `Go to Support Page`,
        }),
      ],
    });
  },
  Be = r((e) => {
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
    return (0, Z.jsx)(N, {
      children: (0, Z.jsx)(S, {
        onEscKeypress: p,
        children: (0, Z.jsxs)(x, {
          children: [
            (0, Z.jsx)(H, {
              children:
                n == `frontpage`
                  ? `Remove Broadcast From Front Page`
                  : `Ban from Broadcasting`,
            }),
            (0, Z.jsx)(E, {
              children: (0, Z.jsxs)(P, {
                children: [
                  (0, Z.jsx)(`p`, {
                    children:
                      n == `frontpage`
                        ? `How long should we prevent the broadcast from appearing in community or store?`
                        : `How long should we prevent the user from Broadcast at all on Steam?`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(ce, {
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
            (0, Z.jsx)(W, {
              children: s
                ? (0, Z.jsx)(I, { onClick: p, children: j(`#Button_Dismiss`) })
                : (0, Z.jsxs)(R, {
                    children: [
                      (0, Z.jsx)(F, {
                        onClick: p,
                        children: j(`#Button_Cancel`),
                      }),
                      (0, Z.jsx)(I, {
                        onClick: async () => {
                          o(!0);
                          try {
                            d.current && d.current();
                            let e = K.default.CancelToken.source();
                            (d.current = e.cancel),
                              await q.Get().SetBroadcasterRestrictions(n, r, e),
                              e.token.reason;
                          } finally {
                            o(!1), c(!0), u(!1);
                          }
                        },
                        children: j(`#Button_Confirm`),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  }),
  Ve = (e) => {
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
    return (0, Z.jsx)(N, {
      children: (0, Z.jsx)(S, {
        onEscKeypress: c,
        children: (0, Z.jsxs)(x, {
          children: [
            (0, Z.jsx)(H, { children: `Make Broadcast Unbannable` }),
            (0, Z.jsx)(E, {
              children: (0, Z.jsxs)(P, {
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
            (0, Z.jsx)(W, {
              children: r
                ? (0, Z.jsx)(I, { onClick: c, children: j(`#Button_Dismiss`) })
                : (0, Z.jsxs)(R, {
                    children: [
                      (0, Z.jsx)(F, {
                        onClick: c,
                        children: j(`#Button_Cancel`),
                      }),
                      (0, Z.jsx)(I, {
                        onClick: async () => {
                          n(!0);
                          let e = !1;
                          try {
                            s.current && s.current();
                            let t = K.default.CancelToken.source();
                            (s.current = t.cancel),
                              (e = await q.Get().SetUnBannable(t));
                          } finally {
                            n(!1), i(!0), o(e);
                          }
                        },
                        children: j(`#Button_Confirm`),
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
    [i, a] = g(`muted`, !0),
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
        className: C(ve),
        children: [
          (0, Z.jsxs)(`div`, {
            className: C(pe),
            children: [
              !q.Get().BShowOnlyChat() &&
                (0, Z.jsx)(N, {
                  children: (0, Z.jsx)(`div`, {
                    className: C(`SObNBjtfgbU-`),
                    children: (0, Z.jsx)(`div`, {
                      className: C({
                        "-d8EQqzPfNs-": !0,
                        video_placeholder_trgt: !0,
                        "_27mwemkqVww-": q.Get().BShowOnlyVideo(),
                      }),
                      children: (0, Z.jsx)(`div`, {
                        className: `_6NUM7GMUXrI-`,
                        children: (0, Z.jsx)(N, {
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
                    children: (0, Z.jsx)(N, {
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
          (0, Z.jsx)(Pe, { broadcasterSteamID: t }),
          (0, Z.jsx)(qe, { steamid: t }),
          !!V.is_support &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(ze, { broadcastSteamID: t }),
                (0, Z.jsx)(`div`, {
                  className: C(`u6DPgTclyv4-`, `JCVGLJqumRQ-`),
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
                      children: [` `, j(`#Broadcast_About_Game`), ` `],
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
      V.accountid == e.steamid.GetAccountID()
        ? (0, Z.jsxs)(`div`, {
            className: ye,
            children: [
              (0, Z.jsx)(`div`, {
                className: be,
                children: j(`#Broadcaster_Control_title`),
              }),
              (0, Z.jsxs)(`div`, {
                className: xe,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: Se,
                    children: [
                      (0, Z.jsx)(D, {
                        type: `text`,
                        label: j(`#Broadcast_title_title`),
                        onChange: (e) => i(e.currentTarget.value || ``),
                        placeholder: j(`#Broadcast_title_placeholder`),
                        value: r,
                      }),
                      (0, Z.jsx)(D, {
                        type: `text`,
                        label: j(`#Broadcast_Control_matchid`),
                        onChange: (e) => o(e.currentTarget.value || ``),
                        value: a,
                      }),
                      (0, Z.jsxs)(F, {
                        onClick: async () => {
                          t.current && t.current();
                          let e = K.default.CancelToken.source();
                          t.current = e.cancel;
                          let n = await q
                            .Get()
                            .UpdateBroadcastSettings(a, r, e);
                          e.token.reason ||
                            c(
                              j(
                                n
                                  ? `#Broadcast_Control_Success`
                                  : `#Broadcast_Control_Failure`,
                              ),
                            );
                        },
                        children: [
                          j(`#Broadcast_save_changes`),
                          (0, Z.jsx)(ue, {
                            tooltip: j(`#Broadcast_save_title_ttip`),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: Ce,
                    children: [
                      (0, Z.jsx)(F, {
                        onClick: (e) => {
                          M(
                            (0, Z.jsx)(T, {
                              strTitle: j(`#Broadcast_Control_StopBroadcast`),
                              strDescription: j(
                                `#EventEditor_GenericAreYouSure`,
                              ),
                              onOK: async () => {
                                t.current && t.current();
                                let e = K.default.CancelToken.source();
                                t.current = e.cancel;
                                let n = await q.Get().StopBroadcast(e);
                                e.token.reason ||
                                  c(
                                    j(
                                      n
                                        ? `#Broadcast_Control_StopSuccess`
                                        : `#Broadcast_Control_StopFailure`,
                                    ),
                                  );
                              },
                            }),
                            z(e),
                          );
                        },
                        children: j(`#Broadcast_Control_StopBroadcast`),
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
        (0, Z.jsx)(u, { component: oe }),
      ],
    }),
  });
}
export { Ye as default };

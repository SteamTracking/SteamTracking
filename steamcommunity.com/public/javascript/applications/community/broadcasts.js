/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
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
} from "./libraries.js?contenthash=eLY4-d-j";
import { l as d, t as f } from "./eventrow.js?contenthash=CQLWp866";
import { Pr as p } from "./salebanner.js?contenthash=Kgzkt2UP";
import { i as ee } from "./clanstore.js?contenthash=C3YK0fn0";
import { t as m } from "./broadcastwatchstore.js?contenthash=6gqbGgpa";
import { t as te } from "./broadcastplayer.js?contenthash=C1DpdUZK";
import { t as h } from "./throbber.js?contenthash=COAox7wG";
import { o as ne } from "./historyutils.js?contenthash=C2OBI7UD";
import { t as g } from "./localdateandtime.js?contenthash=CpVlqQ_-";
import { n as _ } from "./numberformats.js?contenthash=DiRCIxm1";
import { n as re } from "./playerstore.js?contenthash=BEaERu3E";
import { n as v } from "./storeitemhooks.js?contenthash=CGmS4OXI";
import {
  $o as y,
  Dd as b,
  Et as x,
  Gi as S,
  Hc as ie,
  Ho as C,
  Is as w,
  Jr as ae,
  Kd as T,
  Ko as E,
  Ku as D,
  Lo as oe,
  Mc as se,
  Ns as O,
  Pu as k,
  Qi as A,
  Rf as ce,
  Ss as j,
  Tf as M,
  Uf as le,
  Vr as N,
  Wo as P,
  Yd as ue,
  Yo as F,
  Zo as I,
  fs as de,
  gm as L,
  hm as R,
  is as z,
  lm as B,
  ms as V,
  qo as H,
  um as U,
  us as W,
  yu as G,
} from "./main.js?contenthash=B3VTzWgT";
import {
  Q as fe,
  t as pe,
} from "./broadcast_embeddable.module.js?contenthash=DH6WpcLe";
import { s as me } from "./broadcast_embeddable2.js?contenthash=C7OuAjkk";
import { t as he } from "./partnereventslogin.js?contenthash=X1-4twy9";
import { n as ge } from "./steamavatar2.js?contenthash=B0X7XpEu";
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
      let t = R.COMMUNITY_BASE_URL + `broadcast/broadcastdebuginfo`,
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
        let t = M(e);
        console.error(`LoadBroadcastDebugInfo: Failed ` + t.strErrorMsg, t);
      }
      return null;
    }
    async UpdateBroadcastSettings(e, t, r) {
      let i = R.COMMUNITY_BASE_URL + `broadcast/updatebroadcastsettings`,
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
        let t = M(e);
        console.error(`UpdateBroadcastSettings: Failed ` + t.strErrorMsg, t);
      }
      return !1;
    }
    async StopBroadcast(e) {
      let t = this.m_steamid.ConvertTo64BitString(),
        n = m.GetBroadcast(t),
        r = R.COMMUNITY_BASE_URL + `broadcast/stopbroadcast`,
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
        a = R.COMMUNITY_BASE_URL + `broadcast/setbroadcastrestriction`,
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
        r = R.COMMUNITY_BASE_URL + `broadcast/unban`,
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
        r = R.COMMUNITY_BASE_URL + `broadcast/report`,
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
        let n = M(t);
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
        ((this.m_steamid = new le(e.steamid)),
        (this.m_bShowOnlyChat = !!e.show_only_chat),
        (this.m_bShowOnlyVideo = !!e.show_only_video),
        (this.m_strIFrameParentOrigin = e.iframe_parent_origin || void 0));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object` ? typeof t.steamid == `string` : !1;
    }
  };
ce([o], q.prototype, `m_curDebugInfo`, void 0);
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
      (0, Z.jsx)(k, {
        children: (0, Z.jsxs)(`div`, {
          className: G(void 0),
          children: [
            (0, Z.jsx)(`div`, {
              className: void 0,
              children: (0, Z.jsx)(H, {
                onClick: async () => {
                  t.current && t.current();
                  let e = K.default.CancelToken.source();
                  (t.current = e.cancel),
                    r(await q.Get().LoadBroadcastDebugInfo(e));
                },
                children: `(VO) Load Debug Info`,
              }),
            }),
            (0, Z.jsx)(k, { children: (0, Z.jsx)(Q, { info: n }) }),
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
                  (0, Z.jsx)(g, {
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
                _(t.upload_total_bytes_uploaded || 0, 1),
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
                    _(e.memory_used, 2),
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
            _(t.origin_audio_stream.memory_used, 2),
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
        (0, Z.jsx)(H, { onClick: () => r(!n), children: `Toggle Raw Data` }),
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
      { data: n } = re(t);
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
    [a] = v(i, { include_assets: !0 }),
    o = a?.GetAssets().GetMainCapsuleURL(),
    s = o && o.length > 0;
  return (0, Z.jsx)(k, {
    children: (0, Z.jsxs)(`div`, {
      className: De,
      children: [
        s &&
          (0, Z.jsx)(`a`, {
            className: `A8QAZQrKuJo-`,
            href: O(a?.GetStorePageURL() || R.STORE_BASE_URL + `app/` + i),
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
                      children: ue(`#Broadcast_ViewerCount`, x(r)),
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
      [a] = v(i, { include_assets: !0 });
    return (0, Z.jsxs)(`div`, {
      className: Ae,
      children: [
        T(`#Broadcast_Playing`),
        (0, Z.jsx)(`a`, {
          href: O(a?.GetStorePageURL() || R.STORE_BASE_URL + `app/` + i),
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
          L.steamid != e.broadcasterSteamID.ConvertTo64BitString() &&
            (0, Z.jsx)(H, {
              onClick: (e) => {
                L.logged_in
                  ? A((0, Z.jsx)(Le, { broadcasterSteamID: t }), D(e))
                  : A(
                      (0, Z.jsx)(S, {
                        strTitle: T(`#EventDisplay_Share_NotLoggedIn`),
                        strDescription: T(
                          `#EventDisplay_Share_NotLoggedIn_Description`,
                        ),
                        strOKButtonText: T(`#MobileLogin_SignIn`),
                        onOK: () => he(),
                      }),
                      D(e),
                    );
              },
              children: (0, Z.jsx)(V, {
                toolTipContent: T(`#Broadcast_User_Report_ttip`),
                children: (0, Z.jsx)(se, {}),
              }),
            }),
          (0, Z.jsx)(H, {
            onClick: (e) =>
              j(
                e,
                `https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8`,
              ),
            children: (0, Z.jsx)(V, {
              toolTipContent: T(`#Broadcast_User_FAQ_ttip`),
              children: (0, Z.jsx)(ie, {}),
            }),
          }),
        ],
      })
    );
  }),
  Le = (e) => {
    let [t, n] = (0, J.useState)(``);
    return (0, Z.jsx)(S, {
      strTitle: T(`#Broadcast_ReportItem_Title`),
      strDescription: T(`#Broadcast_ReportItem_Description`),
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
    if (!L.is_support) return null;
    let t = (t, n) => {
        A(
          (0, Z.jsx)(Be, {
            broadcastSteamID: e.broadcastSteamID,
            strAction: n,
          }),
          D(t),
        );
      },
      n = (t) => {
        A((0, Z.jsx)(Ve, { steamid: e.broadcastSteamID }), D(t));
      },
      r =
        `https://steamsupport.valvesoftware.com/account/overview/` +
        e.broadcastSteamID.ConvertTo64BitString();
    return (0, Z.jsxs)(`div`, {
      className: G(Re, N),
      children: [
        (0, Z.jsx)(`div`, { children: `(VO) Support Tools` }),
        (0, Z.jsx)(H, {
          onClick: (e) => t(e, `frontpage`),
          children: `Remove from Front Page`,
        }),
        (0, Z.jsx)(H, {
          onClick: (e) => t(e, `ban`),
          children: `Ban from Broadcasting`,
        }),
        (0, Z.jsx)(H, { onClick: n, children: `Make Unbannable` }),
        (0, Z.jsx)(H, {
          onClick: (e) => j(e, r),
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
    return (0, Z.jsx)(k, {
      children: (0, Z.jsx)(w, {
        onEscKeypress: p,
        children: (0, Z.jsxs)(F, {
          children: [
            (0, Z.jsx)(y, {
              children:
                n == `frontpage`
                  ? `Remove Broadcast From Front Page`
                  : `Ban from Broadcasting`,
            }),
            (0, Z.jsx)(P, {
              children: (0, Z.jsxs)(E, {
                children: [
                  (0, Z.jsx)(`p`, {
                    children:
                      n == `frontpage`
                        ? `How long should we prevent the broadcast from appearing in community or store?`
                        : `How long should we prevent the user from Broadcast at all on Steam?`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(oe, {
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
            (0, Z.jsx)(I, {
              children: s
                ? (0, Z.jsx)(z, { onClick: p, children: T(`#Button_Dismiss`) })
                : (0, Z.jsxs)(W, {
                    children: [
                      (0, Z.jsx)(H, {
                        onClick: p,
                        children: T(`#Button_Cancel`),
                      }),
                      (0, Z.jsx)(z, {
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
                        children: T(`#Button_Confirm`),
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
    return (0, Z.jsx)(k, {
      children: (0, Z.jsx)(w, {
        onEscKeypress: c,
        children: (0, Z.jsxs)(F, {
          children: [
            (0, Z.jsx)(y, { children: `Make Broadcast Unbannable` }),
            (0, Z.jsx)(P, {
              children: (0, Z.jsxs)(E, {
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
            (0, Z.jsx)(I, {
              children: r
                ? (0, Z.jsx)(z, { onClick: c, children: T(`#Button_Dismiss`) })
                : (0, Z.jsxs)(W, {
                    children: [
                      (0, Z.jsx)(H, {
                        onClick: c,
                        children: T(`#Button_Cancel`),
                      }),
                      (0, Z.jsx)(z, {
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
                        children: T(`#Button_Confirm`),
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
        className: G(ve),
        children: [
          (0, Z.jsxs)(`div`, {
            className: G(pe),
            children: [
              !q.Get().BShowOnlyChat() &&
                (0, Z.jsx)(k, {
                  children: (0, Z.jsx)(`div`, {
                    className: G(`SObNBjtfgbU-`),
                    children: (0, Z.jsx)(`div`, {
                      className: G({
                        "-d8EQqzPfNs-": !0,
                        video_placeholder_trgt: !0,
                        "_27mwemkqVww-": q.Get().BShowOnlyVideo(),
                      }),
                      children: (0, Z.jsx)(`div`, {
                        className: `_6NUM7GMUXrI-`,
                        children: (0, Z.jsx)(k, {
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
                    children: (0, Z.jsx)(k, {
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
          !!L.is_support &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(ze, { broadcastSteamID: t }),
                (0, Z.jsx)(`div`, {
                  className: G(`u6DPgTclyv4-`, `JCVGLJqumRQ-`),
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
                      children: [` `, T(`#Broadcast_About_Game`), ` `],
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
      L.accountid == e.steamid.GetAccountID()
        ? (0, Z.jsxs)(`div`, {
            className: ye,
            children: [
              (0, Z.jsx)(`div`, {
                className: be,
                children: T(`#Broadcaster_Control_title`),
              }),
              (0, Z.jsxs)(`div`, {
                className: xe,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: Se,
                    children: [
                      (0, Z.jsx)(C, {
                        type: `text`,
                        label: T(`#Broadcast_title_title`),
                        onChange: (e) => i(e.currentTarget.value || ``),
                        placeholder: T(`#Broadcast_title_placeholder`),
                        value: r,
                      }),
                      (0, Z.jsx)(C, {
                        type: `text`,
                        label: T(`#Broadcast_Control_matchid`),
                        onChange: (e) => o(e.currentTarget.value || ``),
                        value: a,
                      }),
                      (0, Z.jsxs)(H, {
                        onClick: async () => {
                          t.current && t.current();
                          let e = K.default.CancelToken.source();
                          t.current = e.cancel;
                          let n = await q
                            .Get()
                            .UpdateBroadcastSettings(a, r, e);
                          e.token.reason ||
                            c(
                              T(
                                n
                                  ? `#Broadcast_Control_Success`
                                  : `#Broadcast_Control_Failure`,
                              ),
                            );
                        },
                        children: [
                          T(`#Broadcast_save_changes`),
                          (0, Z.jsx)(de, {
                            tooltip: T(`#Broadcast_save_title_ttip`),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: Ce,
                    children: [
                      (0, Z.jsx)(H, {
                        onClick: (e) => {
                          A(
                            (0, Z.jsx)(S, {
                              strTitle: T(`#Broadcast_Control_StopBroadcast`),
                              strDescription: T(
                                `#EventEditor_GenericAreYouSure`,
                              ),
                              onOK: async () => {
                                t.current && t.current();
                                let e = K.default.CancelToken.source();
                                t.current = e.cancel;
                                let n = await q.Get().StopBroadcast(e);
                                e.token.reason ||
                                  c(
                                    T(
                                      n
                                        ? `#Broadcast_Control_StopSuccess`
                                        : `#Broadcast_Control_StopFailure`,
                                    ),
                                  );
                              },
                            }),
                            D(e),
                          );
                        },
                        children: T(`#Broadcast_Control_StopBroadcast`),
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
        (0, Z.jsx)(u, { component: ae }),
      ],
    }),
  });
}
export { Ye as default };

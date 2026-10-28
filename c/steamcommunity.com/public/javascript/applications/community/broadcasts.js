import { _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
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
} from "./libraries.js?contenthash=eLY4-d-j";
import { _, _ } from "./eventrow.js?contenthash=CQLWp866";
import { _ } from "./salebanner.js?contenthash=Kgzkt2UP";
import { _ } from "./clanstore.js?contenthash=C3YK0fn0";
import { _ } from "./broadcastwatchstore.js?contenthash=6gqbGgpa";
import { _ } from "./broadcastplayer.js?contenthash=C1DpdUZK";
import { _ } from "./throbber.js?contenthash=COAox7wG";
import { _ } from "./historyutils.js?contenthash=C2OBI7UD";
import { _ } from "./localdateandtime.js?contenthash=CpVlqQ_-";
import { _ } from "./numberformats.js?contenthash=DiRCIxm1";
import { _ } from "./playerstore.js?contenthash=BEaERu3E";
import { _ } from "./storeitemhooks.js?contenthash=CGmS4OXI";
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
} from "./main.js?contenthash=B3VTzWgT";
import { _, _ } from "./broadcast_embeddable.module.js?contenthash=DH6WpcLe";
import { _ } from "./broadcast_embeddable2.js?contenthash=C7OuAjkk";
import { _ } from "./partnereventslogin.js?contenthash=X1-4twy9";
import { _ } from "./steamavatar2.js?contenthash=B0X7XpEu";
var _ = _(_()),
  _ = class _ {
    constructor() {
      _(this);
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
    async LoadBroadcastDebugInfo(_) {
      let _ = _.COMMUNITY_BASE_URL + `broadcast/broadcastdebuginfo`,
        _ = {
          steamid: this.m_steamid.ConvertTo64BitString(),
          origin: self.origin,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _ ? _.token : void 0,
        });
        if (_ && _.token.reason) return null;
        if (_ && _.status == 200 && _.data && _.data.success == 1)
          return (this.m_curDebugInfo = _.data), this.m_curDebugInfo;
      } catch (_) {
        let _ = _(_);
        console.error(`LoadBroadcastDebugInfo: Failed ` + _.strErrorMsg, _);
      }
      return null;
    }
    async UpdateBroadcastSettings(_, _, _) {
      let _ = _.COMMUNITY_BASE_URL + `broadcast/updatebroadcastsettings`,
        _ = {
          steamid: this.m_steamid.ConvertTo64BitString(),
          matchid: _,
          title: _,
          sessionid: _(),
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _ ? _.token : void 0,
        });
        if (_ && _.token.reason) return !1;
        if (_ && _.status == 200 && _.data && _.data.success == 1) {
          let _ = _.GetOrCreateBroadcastInfo(
            this.m_steamid.ConvertTo64BitString(),
          );
          return (
            _ &&
              _(() => {
                _.m_strTitle = _;
              }),
            !0
          );
        }
      } catch (_) {
        let _ = _(_);
        console.error(`UpdateBroadcastSettings: Failed ` + _.strErrorMsg, _);
      }
      return !1;
    }
    async StopBroadcast(_) {
      let _ = this.m_steamid.ConvertTo64BitString(),
        _ = _.GetBroadcast(_),
        _ = _.COMMUNITY_BASE_URL + `broadcast/stopbroadcast`,
        _ = {
          steamid: _,
          broadcastid: _ ? _.m_ulBroadcastID : null,
          sessionid: _(),
        };
      return await this.InternalSendSimpleGetRequest(`StopBroadcast`, _, _, _);
    }
    async SetBroadcasterRestrictions(_, _, _) {
      let _ = this.m_steamid.ConvertTo64BitString(),
        _ = _.GetBroadcast(_),
        _ = _.COMMUNITY_BASE_URL + `broadcast/setbroadcastrestriction`,
        _ = {
          steamid: _,
          broadcastid: _ ? _.m_ulBroadcastID : null,
          type: _,
          days: _,
          sessionid: _(),
        };
      return await this.InternalSendSimpleGetRequest(
        `SetBroadcasterRestrictions`,
        _,
        _,
        _,
      );
    }
    async SetUnBannable(_) {
      let _ = this.m_steamid.ConvertTo64BitString(),
        _ = _.GetBroadcast(_),
        _ = _.COMMUNITY_BASE_URL + `broadcast/unban`,
        _ = {
          steamid: _,
          broadcastid: _ ? _.m_ulBroadcastID : null,
          sessionid: _(),
        };
      return await this.InternalSendSimpleGetRequest(`SetUnBannable`, _, _, _);
    }
    async SendUserReportOnBroadcast(_) {
      let _ = this.m_steamid.ConvertTo64BitString(),
        _ = _.GetBroadcast(_),
        _ = _.COMMUNITY_BASE_URL + `broadcast/report`,
        _ = {
          steamid: _,
          broadcastid: _ ? _.m_ulBroadcastID : null,
          description: _,
          sessionid: _(),
        };
      return await this.InternalSendSimpleGetRequest(
        `SendUserReportOnBroadcast`,
        _,
        _,
        null,
      );
    }
    async InternalSendSimpleGetRequest(_, _, _, _) {
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _ ? _.token : void 0,
        });
        if (_ && _.token.reason) return !1;
        if (_ && _.status == 200 && _.data && _.data.success == 1) return !0;
      } catch (_) {
        let _ = _(_);
        console.error(
          `CCommunityBroadcastStore:${_}: Failed ` + _.strErrorMsg,
          _,
        );
      }
      return !1;
    }
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    Init() {
      let _ = _(`broadcastsinfo`, `application_config`);
      this.ValidateStoreDefault(_) &&
        ((this.m_steamid = new _(_.steamid)),
        (this.m_bShowOnlyChat = !!_.show_only_chat),
        (this.m_bShowOnlyVideo = !!_.show_only_video),
        (this.m_strIFrameParentOrigin = _.iframe_parent_origin || void 0));
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ && typeof _ == `object` ? typeof _.steamid == `string` : !1;
    }
  };
_([_], _.prototype, `m_curDebugInfo`, void 0);
var _ = _(_()),
  _ = `weRyAFSdhQU-`,
  _ = `SmOFdA0bRKo-`,
  _ = _(),
  _ = (_) => {
    let _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)(null);
    return (
      (0, _.useEffect)(
        () => () => {
          _.current && _.current(`BroadcastDebugSection: unmounting`);
        },
        [],
      ),
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(`div`, {
          className: _(void 0),
          children: [
            (0, _.jsx)(`div`, {
              className: void 0,
              children: (0, _.jsx)(_, {
                onClick: async () => {
                  _.current && _.current();
                  let _ = _.default.CancelToken.source();
                  (_.current = _.cancel),
                    _(await _.Get().LoadBroadcastDebugInfo(_));
                },
                children: `(VO) Load Debug Info`,
              }),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                info: _,
              }),
            }),
          ],
        }),
      })
    );
  },
  _ = (_) => {
    let { info: _ } = _,
      [_, _] = (0, _.useState)(!1);
    if (!_) return null;
    let _ = _.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
      _ = _.GetBroadcast(_);
    return (0, _.jsxs)(`div`, {
      className: void 0,
      children: [
        !!(_.last_error_result && _.last_error_result != 1) &&
          (0, _.jsxs)(`div`, {
            className: `weRyAFSdhQU-`,
            children: [
              (0, _.jsx)(`div`, {
                className: `SmOFdA0bRKo-`,
                children: `Error`,
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  `EResult: `,
                  _.last_error_result,
                  `, occurred `,
                  _.last_error_time,
                  ` - `,
                  (0, _.jsx)(_, {
                    dateAndTime: _.last_error_time,
                    bSingleLine: !0,
                  }),
                ],
              }),
            ],
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Broadcast Setup`,
            }),
            (0, _.jsxs)(`div`, {
              children: [`Broadcaster: `, _.steam_id, `, SteamID: `, _],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Directory Server: `,
                _.directory_server,
                `, SessionID: `,
                _.broadcast_id,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Ingester Server: `,
                _.relay_server,
                `, UploadID: `,
                _.upload_id,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [`Origin Server: `, _.origin_server],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Chat Server: `,
                _.chat_server,
                `, chat_id: `,
                _.chat_id,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [`Transcoder Server : `, _.transcode_server],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Ingester Info`,
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Client: `,
                _.remote_address,
                ` `,
                _.is_rtmp ? `(RTMP)` : `(STEAM CLIENT)`,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Video Config: `,
                _.upload_height,
                `x`,
                _.upload_width,
                `@`,
                _.upload_fps,
                `, `,
                _.upload_bandwidth,
                ` kbps `,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Audio Config: `,
                _.upload_audio_channels,
                `x`,
                _.upload_audio_samplerate,
                `Hz, `,
                _.upload_audio_bitrate / 1e3,
                ` kbps `,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Upload Stats: `,
                _.upload_avg_fps,
                ` FPS, `,
                _.upload_avg_bandwidth,
                ` kbps, `,
                _.upload_avg_key_interval,
                ` msec key frame interval`,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Upload Totals: `,
                _.upload_total_frames_received,
                ` video frames, \xA0`,
                Math.round(
                  (_.upload_current_video_pts - _.upload_first_video_pts) /
                    _.upload_video_timescale,
                ),
                ` seconds ( `,
                _(_.upload_total_bytes_uploaded || 0, 1),
                ` ) `,
              ],
            }),
          ],
        }),
        !!_.transcode_server &&
          (0, _.jsxs)(`div`, {
            className: `weRyAFSdhQU-`,
            children: [
              (0, _.jsx)(`div`, {
                className: `SmOFdA0bRKo-`,
                children: `Transcoder Info`,
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  `Decoder ( `,
                  _.upload_height,
                  `x`,
                  _.upload_width,
                  `@`,
                  _.upload_fps,
                  `, `,
                  _.upload_bandwidth,
                  ` kbps ) : \xA0`,
                  _.transcoder_frames_to_decode,
                  ` queued, \xA0`,
                  _.transcoder_frames_total_decoded,
                  ` decoded`,
                ],
              }),
              _.transcoder_streams.map((_) =>
                (0, _.jsxs)(
                  `div`,
                  {
                    children: [
                      `Encoder `,
                      _.representation_id,
                      ` ( `,
                      _.height,
                      `x`,
                      _.width,
                      `@`,
                      _.fps,
                      ` `,
                      _.bitrate,
                      ` kbps ) : `,
                      _.frames_to_encode,
                      ` queued, `,
                      _.frames_total_encoded,
                      ` encoded`,
                    ],
                  },
                  _.representation_id,
                ),
              ),
            ],
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Origin Info`,
            }),
            _?.origin_video_streams?.map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  children: [
                    `Video Stream `,
                    _.representation_id,
                    ` ( `,
                    _.height,
                    `x`,
                    _.width,
                    `@`,
                    _.fps,
                    ` `,
                    _.bitrate,
                    ` kbps ) : \xA0`,
                    _.num_frames_queued,
                    ` frames queued, \xA0`,
                    _.num_segments_received,
                    ` segments received, \xA0`,
                    _.num_segments_cached * 2,
                    ` seconds cached ( `,
                    _(_.memory_used, 2),
                    ` )`,
                  ],
                },
                _.representation_id,
              ),
            ),
            `Audio Stream `,
            _.origin_audio_stream.representation_id,
            ` ( `,
            _.upload_audio_channels,
            `x`,
            _.upload_audio_samplerate,
            `Hz, `,
            _.upload_audio_bitrate / 1e3,
            ` kbps ) : \xA0`,
            _.origin_audio_stream.num_frames_queued,
            ` frames queued, \xA0`,
            _.origin_audio_stream.num_segments_received,
            ` segments received, \xA0`,
            _.origin_audio_stream.num_segments_cached * 2,
            ` seconds cached ( `,
            _(_.origin_audio_stream.memory_used, 2),
            ` )`,
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Viewer Info`,
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Viewers: `,
                _.current_viewers,
                ` current (`,
                _.current_anon_viewers,
                ` anonymous), `,
                _.total_unique_viewers,
                ` total unique, `,
                _.max_concurrent_viewers,
                ` max concurrent`,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Average time watched: `,
                _.average_watch_duration,
                ` seconds`,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `Last Minute: `,
                _.added_viewers_last_minute,
                ` watch requests, `,
                _.rejected_viewers_last_minute,
                ` rejected`,
              ],
            }),
            (0, _.jsxs)(`div`, {
              children: [`Restrictions: `, _.restriction],
            }),
            (0, _.jsx)(`div`, {
              children: _.extra_viewer_info,
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Settings`,
            }),
            (0, _.jsxs)(`div`, {
              children: [`is replay? `, _.is_replay],
            }),
            (0, _.jsxs)(`div`, {
              children: [`is replay local file? `, _.is_replay_local_file],
            }),
            (0, _.jsxs)(`div`, {
              children: [`is replay clip? `, _.is_replay_clip],
            }),
            (0, _.jsxs)(`div`, {
              children: [`is capturing VOD? `, _.is_capturing_vod],
            }),
            (0, _.jsxs)(`div`, {
              children: [
                `is white listed for store streaming? `,
                _.is_whitelisted,
              ],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `App Info`,
            }),
            (0, _.jsxs)(`div`, {
              children: [`appid: `, _.app_id],
            }),
            (0, _.jsxs)(`div`, {
              children: [`app name: `, _.app_name],
            }),
            (0, _.jsxs)(`div`, {
              children: [`broadcast title: `, _.title],
            }),
            (0, _.jsxs)(`div`, {
              children: [`thumbnail: `, _.thumbnail_url],
            }),
            !!_.thumbnail_url &&
              (0, _.jsx)(`img`, {
                src: _.thumbnail_url,
              }),
            !!(_.app_id && _.app_id > 0) &&
              (0, _.jsx)(`div`, {
                className: `PmXnIaInaq4-`,
                children: (0, _.jsx)(_, {
                  _: _.app_id,
                  type: `game`,
                  bPreferAssetWithoutOverride: !1,
                }),
              }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Manifest Information`,
            }),
            (0, _.jsxs)(`div`, {
              children: [`Heartbeat Interval: `, _.m_data.heartbeat_interval],
            }),
            (0, _.jsxs)(`div`, {
              children: [`DASH MPEG Url: `, _.m_data.url],
            }),
            (0, _.jsxs)(`div`, {
              children: [`HLS Url: `, _.m_data.hls_url],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          onClick: () => _(!_),
          children: `Toggle Raw Data`,
        }),
        !!_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: `weRyAFSdhQU-`,
                children: (0, _.jsx)(_, {
                  data: _,
                }),
              }),
              (0, _.jsx)(`div`, {
                className: `weRyAFSdhQU-`,
                children: (0, _.jsx)(_, {
                  data: _?.m_data || ``,
                }),
              }),
            ],
          }),
      ],
    });
  },
  _ = `kyjY09OhJaU-`,
  _ = `vTYbvBh-uU0-`,
  _ = `Rzioma-KL-Y-`,
  _ = `l5FXcZ2ERyE-`,
  _ = `nxAiknUrAfg-`,
  _ = `k3hahr49YgY-`,
  _ = `jmmkRcWSmcg-`,
  _ = `_2Qqqqokoe50-`,
  _ = (_) => {
    let _ = _.steamid.GetAccountID(),
      { data: _ } = _(_);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`a`, {
          href: _.GetCommunityProfileURL(),
          "data-miniprofile": `s` + _.steamid.ConvertTo64BitString(),
          children: (0, _.jsx)(_, {
            persona: _,
            size: _.size,
            statusPosition: `bottom`,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !!_.bShowName &&
              (0, _.jsx)(`a`, {
                href: _.GetCommunityProfileURL(),
                "data-miniprofile": `s` + _.steamid.ConvertTo64BitString(),
                children: _.m_strProfileURL,
              }),
            _.children,
          ],
        }),
      ],
    });
  },
  _ = `PDuqTNJgeEs-`,
  _ = `_4e7fDLjvdyY-`,
  _ = `BGLAeY7wCoA-`,
  _ = `exDpHMtCrRk-`,
  _ = `dCf-IQijhuA-`,
  _ = `HQCPHTJAjtw-`,
  _ = `P6rJQE6tQ5Q-`;
function _(_) {
  let { broadcasterSteamID: _ } = _,
    _ = _.ConvertTo64BitString(),
    [_, _] = _(() => {
      let _ = _.GetOrCreateBroadcastInfo(_),
        _ = _.m_nAppID == 7 ? 0 : _.m_nAppID;
      return [_.m_nViewerCount, _];
    }),
    [_] = _(_, {
      include_assets: !0,
    }),
    _ = _?.GetAssets().GetMainCapsuleURL(),
    _ = _ && _.length > 0;
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ &&
          (0, _.jsx)(`a`, {
            className: `A8QAZQrKuJo-`,
            href: _(_?.GetStorePageURL() || _.STORE_BASE_URL + `app/` + _),
            children: (0, _.jsx)(`img`, {
              src: _,
            }),
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      broadcasterSteamID: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(`#Broadcast_ViewerCount`, _(_)),
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  broadcasterSteamID: _,
                }),
              ],
            }),
            (0, _.jsx)(_, {
              steamid: _,
              size: `Medium`,
              bShowName: !0,
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = _((_) => {
    let { broadcasterSteamID: _ } = _,
      _ = _.ConvertTo64BitString(),
      [_, _] = _(() => {
        let _ = _.GetOrCreateBroadcastInfo(_),
          _ = _.m_nAppID == 7 ? 0 : _.m_nAppID;
        return [_.m_strAppTitle, _];
      }),
      [_] = _(_, {
        include_assets: !0,
      });
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _(`#Broadcast_Playing`),
        (0, _.jsx)(`a`, {
          href: _(_?.GetStorePageURL() || _.STORE_BASE_URL + `app/` + _),
          children: _ || _?.GetName(),
        }),
        _?.length > 0 &&
          (0, _.jsxs)(`span`, {
            children: [` - `, _],
          }),
      ],
    });
  }),
  _ = _((_) => {
    let { broadcasterSteamID: _ } = _;
    return (
      _.ConvertTo64BitString(),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.steamid != _.broadcasterSteamID.ConvertTo64BitString() &&
            (0, _.jsx)(_, {
              onClick: (_) => {
                _.logged_in
                  ? _(
                      (0, _.jsx)(_, {
                        broadcasterSteamID: _,
                      }),
                      _(_),
                    )
                  : _(
                      (0, _.jsx)(_, {
                        strTitle: _(`#EventDisplay_Share_NotLoggedIn`),
                        strDescription: _(
                          `#EventDisplay_Share_NotLoggedIn_Description`,
                        ),
                        strOKButtonText: _(`#MobileLogin_SignIn`),
                        onOK: () => _(),
                      }),
                      _(_),
                    );
              },
              children: (0, _.jsx)(_, {
                toolTipContent: _(`#Broadcast_User_Report_ttip`),
                children: (0, _.jsx)(_, {}),
              }),
            }),
          (0, _.jsx)(_, {
            onClick: (_) =>
              _(
                _,
                `https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8`,
              ),
            children: (0, _.jsx)(_, {
              toolTipContent: _(`#Broadcast_User_FAQ_ttip`),
              children: (0, _.jsx)(_, {}),
            }),
          }),
        ],
      })
    );
  }),
  _ = (_) => {
    let [_, _] = (0, _.useState)(``);
    return (0, _.jsx)(_, {
      strTitle: _(`#Broadcast_ReportItem_Title`),
      strDescription: _(`#Broadcast_ReportItem_Description`),
      onCancel: _.closeModal,
      bOKDisabled: _.trim().length == 0,
      onOK: async () => {
        await _.Get().SendUserReportOnBroadcast(_),
          _.closeModal && _.closeModal();
      },
      children: (0, _.jsx)(`textarea`, {
        value: _,
        onChange: (_) => _(_.currentTarget.value),
        rows: 10,
        cols: 80,
      }),
    });
  },
  _ = `_6XtxP-iuz1Y-`,
  _ = (_) => {
    if (!_.is_support) return null;
    let _ = (_, _) => {
        _(
          (0, _.jsx)(_, {
            broadcastSteamID: _.broadcastSteamID,
            strAction: _,
          }),
          _(_),
        );
      },
      _ = (_) => {
        _(
          (0, _.jsx)(_, {
            steamid: _.broadcastSteamID,
          }),
          _(_),
        );
      },
      _ =
        `https://steamsupport.valvesoftware.com/account/overview/` +
        _.broadcastSteamID.ConvertTo64BitString();
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          children: `(VO) Support Tools`,
        }),
        (0, _.jsx)(_, {
          onClick: (_) => _(_, `frontpage`),
          children: `Remove from Front Page`,
        }),
        (0, _.jsx)(_, {
          onClick: (_) => _(_, `ban`),
          children: `Ban from Broadcasting`,
        }),
        (0, _.jsx)(_, {
          onClick: _,
          children: `Make Unbannable`,
        }),
        (0, _.jsx)(_, {
          onClick: (_) => _(_, _),
          children: `Go to Support Page`,
        }),
      ],
    });
  },
  _ = _((_) => {
    let { broadcastSteamID: _, strAction: _ } = _,
      [_, _] = (0, _.useState)(1),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(!1),
      _ = (0, _.useRef)(null);
    (0, _.useEffect)(
      () => () => {
        _.current && _.current(`BroadcastConfirmBanAction: unmounting`);
      },
      [],
    );
    let _ = [
        {
          label: `1 Day`,
          data: 1,
        },
        {
          label: `1 Week`,
          data: 7,
        },
        {
          label: `1 Month`,
          data: 30,
        },
        {
          label: `6 Months`,
          data: 180,
        },
        {
          label: `1 Year`,
          data: 365,
        },
      ],
      _ = () => _.closeModal && _.closeModal();
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children:
                _ == `frontpage`
                  ? `Remove Broadcast From Front Page`
                  : `Ban from Broadcasting`,
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(`p`, {
                    children:
                      _ == `frontpage`
                        ? `How long should we prevent the broadcast from appearing in community or store?`
                        : `How long should we prevent the user from Broadcast at all on Steam?`,
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsx)(_, {
                        rgOptions: _,
                        selectedOption: _,
                        onChange: (_) => _(_.data),
                      }),
                      !!_ && (0, _.jsx)(_, {}),
                      !!_ &&
                        (0, _.jsx)(`div`, {
                          children: _
                            ? `Successfully Completed Request`
                            : `Failed to complete request, check browser console and/or try again later`,
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, _.jsx)(_, {
              children: _
                ? (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#Button_Dismiss`),
                  })
                : (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        onClick: _,
                        children: _(`#Button_Cancel`),
                      }),
                      (0, _.jsx)(_, {
                        onClick: async () => {
                          _(!0);
                          try {
                            _.current && _.current();
                            let _ = _.default.CancelToken.source();
                            (_.current = _.cancel),
                              await _.Get().SetBroadcasterRestrictions(_, _, _),
                              _.token.reason;
                          } finally {
                            _(!1), _(!0), _(!1);
                          }
                        },
                        children: _(`#Button_Confirm`),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  }),
  _ = (_) => {
    let [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(!1),
      [_, _] = (0, _.useState)(!1),
      _ = (0, _.useRef)(null);
    (0, _.useEffect)(
      () => () => {
        _.current && _.current(`BroadcastMakeUnbannable: unmounting`);
      },
      [],
    );
    let _ = () => _.closeModal && _.closeModal();
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children: `Make Broadcast Unbannable`,
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(`p`, {
                    children: `Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?`,
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      !!_ && (0, _.jsx)(_, {}),
                      !!_ &&
                        (0, _.jsx)(`div`, {
                          children: _
                            ? `Successfully Set Unbannable`
                            : `Failed to make Unbannable`,
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, _.jsx)(_, {
              children: _
                ? (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#Button_Dismiss`),
                  })
                : (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        onClick: _,
                        children: _(`#Button_Cancel`),
                      }),
                      (0, _.jsx)(_, {
                        onClick: async () => {
                          _(!0);
                          let _ = !1;
                          try {
                            _.current && _.current();
                            let _ = _.default.CancelToken.source();
                            (_.current = _.cancel),
                              (_ = await _.Get().SetUnBannable(_));
                          } finally {
                            _(!1), _(!0), _(_);
                          }
                        },
                        children: _(`#Button_Confirm`),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  };
function _() {
  let [_] = (0, _.useState)(
    () => _(`ewatchlocation`, `application_config`) || 5,
  );
  return _;
}
function _(_) {
  let _ = _.Get().GetIFrameParentOrigin();
  _ &&
    window.parent !== window &&
    window.parent.postMessage(
      {
        msg: _,
      },
      _,
    );
}
function _() {
  let [_, _] = (0, _.useState)(
    () =>
      new URLSearchParams(window.location.search).get(`broadcastid`) || void 0,
  );
  return (
    (0, _.useEffect)(() => {
      let _ = _.Get().GetIFrameParentOrigin(),
        _ = (_) => {
          _ &&
            _.origin === _ &&
            _.data?.msg === `OnVideoIFrameBroadcastIDChanged` &&
            _.data.broadcastid &&
            _(String(_.data.broadcastid));
        };
      return (
        window.addEventListener(`message`, _),
        () => window.removeEventListener(`message`, _)
      );
    }, []),
    _
  );
}
var _ = _((_) => {
  let _ = _.Get().GetBroadcasterSteamID(),
    _ = _?.ConvertTo64BitString(),
    _ = _(),
    [_, _] = _(`muted`, !0),
    _ = _.GetBroadcast(_),
    _ = _.GetOrCreateBroadcastInfo(_),
    _ = _();
  if (!_) return null;
  let _ = _?.m_ulBroadcastID;
  _.Get().BShowOnlyChat() && (_ = _);
  let _;
  return (
    _.Get().GetIFrameParentOrigin() && (_ = () => _(`OnLoginButtonClicked`)),
    (0, _.jsx)(_.Fragment, {
      children: (0, _.jsxs)(`div`, {
        className: _(_),
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              !_.Get().BShowOnlyChat() &&
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(`div`, {
                    className: _(`SObNBjtfgbU-`),
                    children: (0, _.jsx)(`div`, {
                      className: _({
                        "-d8EQqzPfNs-": !0,
                        video_placeholder_trgt: !0,
                        "_27mwemkqVww-": _.Get().BShowOnlyVideo(),
                      }),
                      children: (0, _.jsx)(`div`, {
                        className: `_6NUM7GMUXrI-`,
                        children: (0, _.jsx)(_, {
                          children: (0, _.jsx)(_, {
                            steamIDBroadcast: _,
                            watchLocation: _,
                            bStartMuted: _,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              !_.Get().BShowOnlyVideo() &&
                (0, _.jsx)(`div`, {
                  className: `VEghDDjerCc-`,
                  children: (0, _.jsx)(`div`, {
                    className: `eWHilAZFWEA-`,
                    children: (0, _.jsx)(_, {
                      children: (0, _.jsx)(_, {
                        emoticonStore: _,
                        watchLocation: 6,
                        steamID: _,
                        broadcastID: _,
                        onSignIn: _,
                      }),
                    }),
                  }),
                }),
            ],
          }),
          !_.Get().BShowInIframe() &&
            (0, _.jsx)(_, {
              broadcasterSteamID: _,
              broadcastInfo: _,
            }),
        ],
      }),
    })
  );
});
function _(_) {
  return _ != 0 && _ != 7;
}
var _ = _((_) => {
    let { broadcasterSteamID: _, broadcastInfo: _ } = _,
      [_, _] = (0, _.useState)(null),
      _ = _.m_nAppID;
    return (
      (0, _.useEffect)(() => {
        _(_) &&
          (async () => {
            let _ = await _.LoadOGGClanInfoForAppID(_);
            _(_);
          })();
      }, [_]),
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            broadcasterSteamID: _,
          }),
          (0, _.jsx)(_, {
            steamid: _,
          }),
          !!_.is_support &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(_, {
                  broadcastSteamID: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _(`u6DPgTclyv4-`, `JCVGLJqumRQ-`),
                  children: (0, _.jsx)(_, {}),
                }),
              ],
            }),
          _(_) &&
            (0, _.jsxs)(`div`, {
              className: `_5xvPLzWi31g-`,
              children: [
                (0, _.jsxs)(`div`, {
                  className: `ySQxr-h7EDA-`,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `uhFcNuyHw60-`,
                      children: [` `, _(`#Broadcast_About_Game`), ` `],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `XqoXynpd0bw-`,
                      children: `\xA0`,
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: `ojYXlML59ag-`,
                  children: (0, _.jsx)(_, {
                    _: Number.parseInt(_.m_strAppId),
                    type: `game`,
                    bPreferAssetWithoutOverride: !1,
                  }),
                }),
              ],
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `_1tNQsmKtte8-`,
              children: (0, _.jsx)(_, {
                clanAccountID: _.clanAccountID,
                trackingLocation: 6,
                partnerEventStore: _,
                bViewAllShowInfiniteScroll: !0,
              }),
            }),
        ],
      })
    );
  }),
  _ = _((_) => {
    let _ = (0, _.useRef)(null),
      _ = _.GetOrCreateBroadcastInfo(_.steamid.ConvertTo64BitString()),
      [_, _] = (0, _.useState)(_.m_strTitle),
      [_, _] = (0, _.useState)(``),
      [_, _] = (0, _.useState)(null);
    return (
      (0, _.useEffect)(
        () => (
          _(_.m_strTitle),
          () => {
            _.current && _.current(`BroadcastControls: unmounting`);
          }
        ),
        [_.m_strTitle],
      ),
      _.accountid == _.steamid.GetAccountID()
        ? (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#Broadcaster_Control_title`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#Broadcast_title_title`),
                        onChange: (_) => _(_.currentTarget.value || ``),
                        placeholder: _(`#Broadcast_title_placeholder`),
                        value: _,
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#Broadcast_Control_matchid`),
                        onChange: (_) => _(_.currentTarget.value || ``),
                        value: _,
                      }),
                      (0, _.jsxs)(_, {
                        onClick: async () => {
                          _.current && _.current();
                          let _ = _.default.CancelToken.source();
                          _.current = _.cancel;
                          let _ = await _.Get().UpdateBroadcastSettings(
                            _,
                            _,
                            _,
                          );
                          _.token.reason ||
                            _(
                              _(
                                _
                                  ? `#Broadcast_Control_Success`
                                  : `#Broadcast_Control_Failure`,
                              ),
                            );
                        },
                        children: [
                          _(`#Broadcast_save_changes`),
                          (0, _.jsx)(_, {
                            tooltip: _(`#Broadcast_save_title_ttip`),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        onClick: (_) => {
                          _(
                            (0, _.jsx)(_, {
                              strTitle: _(`#Broadcast_Control_StopBroadcast`),
                              strDescription: _(
                                `#EventEditor_GenericAreYouSure`,
                              ),
                              onOK: async () => {
                                _.current && _.current();
                                let _ = _.default.CancelToken.source();
                                _.current = _.cancel;
                                let _ = await _.Get().StopBroadcast(_);
                                _.token.reason ||
                                  _(
                                    _(
                                      _
                                        ? `#Broadcast_Control_StopSuccess`
                                        : `#Broadcast_Control_StopFailure`,
                                    ),
                                  );
                              },
                            }),
                            _(_),
                          );
                        },
                        children: _(`#Broadcast_Control_StopBroadcast`),
                      }),
                      !!_ &&
                        (0, _.jsx)(`div`, {
                          children: _,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null
    );
  }),
  _ = {
    BroadcastWatch: (_) => `/broadcast/(watch|watchnew)/${_}`,
  };
function _(_) {
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          path: _.BroadcastWatch(`:steamid_or_user_vanity`),
          render: (_) =>
            (0, _.jsx)(_, {
              strSteamID: _.match.params.steamid_or_user_vanity,
            }),
        }),
        (0, _.jsx)(_, {
          component: _,
        }),
      ],
    }),
  });
}
export { _ as default };

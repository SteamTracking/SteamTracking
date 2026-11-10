var _ = _(_()),
  _ = _(_()),
  _ = (function (_) {
    return (
      (_[(_.Chat = 0)] = `Chat`),
      (_[(_.Notification = 1)] = `Notification`),
      (_[(_.Error = 2)] = `Error`),
      _
    );
  })({}),
  _ = class {};
(_.CHAT_BASE_URL + ``, _.CHAT_BASE_URL + ``);
var _ = class {
  bValid = !1;
  stream = {
    0: `#Broadcast_EnglishMain`,
  };
  name = ``;
  appName = ``;
  appID = 0;
  link = ``;
  linkName = ``;
  tabIcon = ``;
  offlineImage = ``;
  gidEvent = ``;
  constructor(_) {
    (_(this), this.init(_));
  }
  init(_) {
    ((this.bValid = _.bValid),
      (this.stream = _.stream),
      (this.name = _.name),
      (this.appName = _.appName ?? ``),
      (this.appID = _.appID),
      (this.link = _.link),
      (this.linkName = _.linkName),
      (this.tabIcon = _.tabIcon ?? ``),
      (this.offlineImage = _.offlineImage),
      (this.gidEvent = _.gidEvent ?? ``));
  }
};
(_([_], _.prototype, `bValid`, void 0),
  _([_], _.prototype, `stream`, void 0),
  _([_], _.prototype, `name`, void 0),
  _([_], _.prototype, `appName`, void 0),
  _([_], _.prototype, `appID`, void 0),
  _([_], _.prototype, `link`, void 0),
  _([_], _.prototype, `linkName`, void 0),
  _([_], _.prototype, `tabIcon`, void 0),
  _([_], _.prototype, `offlineImage`, void 0),
  _([_], _.prototype, `gidEvent`, void 0));
var _ = new _({
  bValid: !1,
  stream: {
    0: `#Broadcast_EnglishMain`,
  },
  name: ``,
  appName: ``,
  appID: 0,
  link: ``,
  linkName: ``,
  tabIcon: ``,
  offlineImage: ``,
});
function _(_, _, _) {
  return [_, _, _];
}
var _ = class extends Error {},
  _ = class extends _ {
    m_appid;
    constructor(_) {
      (super(), (this.m_appid = _ || 0));
    }
    GetAppID() {
      return this.m_appid;
    }
    parseColor(_) {
      if (typeof _ != `string` || !_.match(/^#[0-9a-fA-F]{6}$/))
        throw new _(`expected color string`);
      return [
        parseInt(_.substring(1, 3), 16),
        parseInt(_.substring(3, 5), 16),
        parseInt(_.substring(5, 7), 16),
      ];
    }
    parseString(_) {
      if (typeof _ == `string`) return _;
      throw new _(`expected string`);
    }
    parseNumber(_) {
      if (typeof _ == `number`) return _;
      throw new _(`expected number`);
    }
    parseDate(_) {
      if (typeof _ == `number`) return new Date(_);
      throw new _(`expected timestamp`);
    }
    parseArray(_, _) {
      let _ = [];
      if (typeof _ != `object` || !Array.isArray(_))
        throw new _(`expected array`);
      let _ = _.length;
      for (let _ = 0; _ < _; ++_)
        try {
          _.push(_(_[_]));
        } catch (_) {
          throw (
            (_.message +=
              `
...while parsing array element ` + _),
            _
          );
        }
      return _;
    }
    parseDict(_, _) {
      let _ = new Map();
      if (typeof _ != `object` || Array.isArray(_))
        throw new _(`expected object`);
      for (let _ in _)
        try {
          _.set(_, _(_[_]));
        } catch (_) {
          throw (
            (_.message +=
              `
...while parsing dictionary element ` + _),
            _
          );
        }
      return _;
    }
    parseBracket(_) {
      let _ = {
        name: this.parseString(_.name),
        start: this.parseDate(_.start),
        color: [255, 0, 255],
      };
      return (
        `params` in _ &&
          (_.params = this.parseDict(_.params, this.parseString.bind(this))),
        `end` in _ && (_.end = this.parseDate(_.end)),
        `color` in _ && (_.color = this.parseColor(_.color)),
        _
      );
    }
    parseMarker(_) {
      let _ = {
        time: this.parseDate(_.time),
        color: [0, 255, 255],
      };
      return (
        `name` in _ && (_.name = this.parseString(_.name)),
        `params` in _ &&
          (_.params = this.parseDict(_.params, this.parseString.bind(this))),
        `color` in _ && (_.color = this.parseColor(_.color)),
        _
      );
    }
    parseSoundTrack(_) {
      let _ = {};
      return (
        `song_title` in _ && (_.song_title = this.parseString(_.song_title)),
        `appid` in _ && (_.appid = this.parseNumber(_.appid)),
        `song_index` in _ && (_.song_index = this.parseNumber(_.song_index)),
        _
      );
    }
    parseBroadcastGameData(_) {
      let _ = {
        appid: 0,
        brackets: [],
        markers: [],
      };
      return (
        `appid` in _ && (_.appid = this.parseNumber(_.appid)),
        `brackets` in _ &&
          (_.brackets = this.parseArray(
            _.brackets,
            this.parseBracket.bind(this),
          )),
        `markers` in _ &&
          (_.markers = this.parseArray(_.markers, this.parseMarker.bind(this))),
        `soundtrack` in _ &&
          (_.soundtrack = this.parseSoundTrack(_.soundtrack)),
        _
      );
    }
    convertTime(_, _) {
      return _ - _ / 1e3;
    }
    UpdateMarkers(_, _) {
      let _ = [],
        _ = [];
      for (let _ of _)
        _.persistent
          ? (_.length > 0 &&
              (_[_.length - 1].nTimeEnd = this.convertTime(_.Timestamp, _)),
            _.name.length > 0 &&
              _.push({
                strTemplateName: _.name,
                nTimeStart: this.convertTime(_.Timestamp, _),
                nTimeEnd: -1,
                color: _(_.color_r, _.color_g, _.color_b),
              }))
          : _.push({
              strTemplateName: _.name,
              nTime: this.convertTime(_.Timestamp, _),
              color: _(_.color_r, _.color_g, _.color_b),
            });
      return {
        rgMarkers: _,
        rgSegments: _,
      };
    }
    UpdateRegions(_) {
      let _ = [];
      for (let _ of _)
        _.push({
          strTemplateName: _.name,
          min: {
            _: _.min_x,
            _: _.min_y,
          },
          max: {
            _: _.max_x,
            _: _.max_y,
          },
          behavior: _.behavior,
        });
      return _;
    }
    UpdateSoundtrack(_, _) {}
  },
  _ = 250,
  _ = 250,
  _ = class {
    m_elVideo;
    m_peerConnection = null;
    m_strBroadcastSteamID = ``;
    m_ulWebRTCSessionID = ``;
    m_schCandidateTimer = new _();
    m_nHostCandidateGeneration = 0;
    m_nCandidateUpdateIntervalMS = 0;
    m_listeners = new _();
    m_bFirstPlay = !0;
    m_bStatsViewVisible = !1;
    m_schCaptureDisplayStatsTrigger = new _();
    m_stats = new _();
    constructor(_) {
      (_(this), (this.m_elVideo = _));
    }
    async PlayMPD(_, _, _) {}
    async PlayWebRTC(_, _, _, _, _) {
      ((this.m_strBroadcastSteamID = _),
        (this.m_ulWebRTCSessionID = _),
        (this.m_nHostCandidateGeneration = 0),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `resize`,
          this.OnVideoResize,
        ));
      let _ = {
          iceServers: [
            {
              urls: [`stun:` + _],
            },
            {
              urls: [`turn:` + _],
              username: _,
              credential: _,
            },
          ],
          iceTransportPolicy: `relay`,
        },
        _ = new RTCPeerConnection(_);
      ((this.m_peerConnection = _),
        (_.oniceconnectionstatechange = ((_) => {
          this.m_peerConnection &&
            (console.log(
              `BroadcastWebRTC: ICE connection state changed to ` +
                this.m_peerConnection.iceConnectionState,
            ),
            this.m_peerConnection.iceConnectionState === `failed`
              ? this.OnWebRTCConnectionFailed()
              : this.m_peerConnection.iceConnectionState === `disconnected` &&
                this.OnWebRTCConnectionRetry());
        }).bind(this)),
        (_.onicecandidate = ((_) => {
          if (_.candidate) {
            let _ = new FormData();
            (_.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
              _.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
              _.append(`sdp_mid`, String(_.candidate.sdpMid)),
              _.append(`sdp_mline_index`, String(_.candidate.sdpMLineIndex)),
              _.append(`candidate`, _.candidate.candidate),
              _.default
                .post(
                  `${_.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                  _,
                )
                .then((_) => {
                  let _ = _.data;
                  (_.success && _.success == 1) ||
                    console.log(
                      `Failed to add a WebRTC session ICE candidate: ` +
                        String(_.success),
                    );
                })
                .catch((_) =>
                  console.log(
                    `Failed to add a WebRTC session ICE candidate` + _,
                  ),
                ));
          }
        }).bind(this)),
        (_.ontrack = ((_) => {
          _.track.kind === `video` &&
            ((this.m_elVideo.src = ``),
            (this.m_elVideo.srcObject = _.streams[0]),
            this.Play());
        }).bind(this)),
        _.setRemoteDescription({
          type: `offer`,
          sdp: _,
        }).then(async () => {
          await _.setLocalDescription(await _.createAnswer());
          let _ = new FormData();
          (_.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
            _.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
            _.append(`answer`, _.localDescription?.sdp ?? ``));
          try {
            await _.default
              .post(`${_.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`, _)
              .then((_) => {
                let _ = _.data;
                if (!(_.success && _.success == 1))
                  throw Error(String(_.success));
              });
          } catch (_) {
            (console.log(`Failed to set the WebRTC session answer: ` + _),
              this.OnWebRTCConnectionRetry());
            return;
          }
          ((this.m_nCandidateUpdateIntervalMS = _),
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            ));
        }));
    }
    async GetHostCandidates() {
      let _ = new FormData();
      (_.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
        _.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
        _.append(
          `candidate_generation`,
          String(this.m_nHostCandidateGeneration),
        ));
      try {
        await _.default
          .post(`${_.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`, _)
          .then((_) => {
            let _ = _.data,
              _ = _.data,
              _ = this.m_peerConnection;
            if (_.success && _.success == 1)
              _ && _.candidate_generation > this.m_nHostCandidateGeneration
                ? (_.candidates.forEach((_) => {
                    let _ = new RTCIceCandidate({
                      sdpMid: _.sdp_mid,
                      sdpMLineIndex: _.sdp_mline_index,
                      candidate: _.candidate,
                    });
                    _.addIceCandidate(_).catch((_) => console.error(_));
                  }),
                  (this.m_nHostCandidateGeneration = _.candidate_generation))
                : this.m_nHostCandidateGeneration > 0 &&
                  (this.m_nCandidateUpdateIntervalMS *= 2);
            else throw Error(String(_.success));
          });
      } catch (_) {
        (console.log(`Failed to get WebRTC session ICE candidates` + _),
          this.OnWebRTCConnectionRetry());
        return;
      }
      this.m_schCandidateTimer.Schedule(this.m_nCandidateUpdateIntervalMS, () =>
        this.GetHostCandidates(),
      );
    }
    DispatchEvent(_, _ = null) {
      let _ = new CustomEvent(_, {
        cancelable: !0,
        bubbles: !0,
        detail: _,
      });
      this.m_elVideo.dispatchEvent(_);
    }
    OnWebRTCConnectionRetry() {
      this.DispatchEvent(`valve-webrtcretry`);
    }
    OnWebRTCConnectionFailed() {
      this.DispatchEvent(`valve-webrtcfailed`);
    }
    Close() {
      (this.m_listeners.Unregister(),
        this.m_schCandidateTimer.Cancel(),
        this.m_schCaptureDisplayStatsTrigger.Cancel(),
        (this.m_peerConnection &&= (this.m_peerConnection.close(), null)),
        this.m_elVideo.pause(),
        (this.m_elVideo.srcObject = null),
        this.m_stats.GetFPSMonitor().Close(),
        (this.m_bFirstPlay = !0));
    }
    IsBuffering() {
      return !1;
    }
    GetCurrentPlayTime() {
      return 0;
    }
    GetLiveContentStartTime() {
      return new Date(0);
    }
    GetAvailableVideoStartTime() {
      return 0;
    }
    GetBufferedLiveEdgeTime() {
      return 0;
    }
    IsPaused() {
      return this.m_elVideo.paused;
    }
    async Play() {
      let _ = this.m_bFirstPlay;
      this.m_bFirstPlay = !1;
      let _ = !1,
        _ = () => {
          ((_ = !0),
            this.m_stats
              .GetFPSMonitor()
              .StartTracking(() =>
                this.m_stats.ExtractFrameInfo(this.m_elVideo),
              ));
        };
      try {
        (await this.m_elVideo.play(), _());
      } catch (_) {
        _.name;
      }
      !_ && _ && this.DispatchEvent(`valve-userinputneeded`);
    }
    Pause() {
      this.m_elVideo.pause();
    }
    CanSeek() {
      return !1;
    }
    SeekAndPlay(_) {
      return (this.Play(), 0);
    }
    Seek(_) {
      return 0;
    }
    JumpTime(_) {
      return 0;
    }
    IsMuted() {
      return this.m_elVideo.muted;
    }
    SetMuted(_) {
      this.m_elVideo.muted = _;
    }
    SetVolume(_) {
      ((_ = _(_, 0, 1)), (this.m_elVideo.volume = _));
    }
    GetVolume() {
      return this.m_elVideo.volume;
    }
    GetDASHPlayerStats() {
      return this.m_stats;
    }
    SetStatsViewIsVisible(_) {
      (_ && !this.m_bStatsViewVisible
        ? (this.CaptureStatsForDisplay(),
          this.m_schCaptureDisplayStatsTrigger.Schedule(
            _,
            this.CaptureStatsForDisplay,
          ))
        : !_ &&
          this.m_bStatsViewVisible &&
          this.m_schCaptureDisplayStatsTrigger.Cancel(),
        (this.m_bStatsViewVisible = _));
    }
    CaptureStatsForDisplay() {
      (this.m_stats.SetHTMLVideoPlayerDisplay(
        this.m_elVideo.videoWidth,
        this.m_elVideo.videoHeight,
        this.m_elVideo.clientWidth,
        this.m_elVideo.clientHeight,
      ),
        this.m_schCaptureDisplayStatsTrigger.Schedule(
          _,
          this.CaptureStatsForDisplay,
        ));
    }
    OnVideoPause(_) {
      this.m_stats.GetFPSMonitor().Close();
    }
    OnVideoResize(_) {
      this.m_stats.GetFPSMonitor().SetWindowResized();
    }
    GetVideoRepresentations() {
      let _ = [];
      return (
        _.push({
          _: _,
          displayName: `Auto`,
          selected: !0,
        }),
        _
      );
    }
    SetVideoRepresentation(_) {}
    IsLiveContent() {
      return !0;
    }
    BHasTimedText() {
      return !1;
    }
  };
(_([_], _.prototype, `PlayWebRTC`, null),
  _([_.bound], _.prototype, `CaptureStatsForDisplay`, null),
  _([_], _.prototype, `OnVideoPause`, null),
  _([_], _.prototype, `OnVideoResize`, null));
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.video_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            video_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            client_cellid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.video_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            video_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            video_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.encryption_key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            encryption_key: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CVideo_UnlockedH264_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_cellid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            opf_settings: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            playback_position_in_seconds: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            video_track_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            audio_track_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timedtext_track_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            last_modified: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hide_from_watch_history: {
              _: 7,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            hide_from_library: {
              _: 8,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `VideoBookmark`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bookmarks || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bookmarks: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CVideo_SetVideoBookmark_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            updated_since: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bookmarks || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bookmarks: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Video.ClientGetVideoURL#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientGetVideoURL = _;
  function _(_, _) {
    return _.SendNotification(`Video.SetVideoBookmark#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.SetVideoBookmark = _;
  function _(_, _, _) {
    return _.SendMsg(`Video.GetVideoBookmarks#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetVideoBookmarks = _;
})((_ ||= {}));
var _;
(function (_) {
  _.NotifyUnlockedH264Handler = {
    name: `VideoClient.NotifyUnlockedH264#1`,
    request: _,
  };
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`FovasVideo.ClientGetOPFSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientGetOPFSettings = _;
})((_ ||= {}));
var _ = class _ {
    static s_VODStore;
    m_transport = null;
    m_mapBookmarks = new Map();
    SetBookmarkForApp(_, _) {
      this.ValidateBookmarkData(_)
        ? this.m_mapBookmarks.set(_, _.fromObject(_))
        : this.InitializeBookmarkForApp(_);
    }
    ValidateBookmarkData(_) {
      let _ = _;
      return (
        typeof _ == `object` &&
        Number.isInteger(_.playback_position_in_seconds) &&
        Number.isInteger(_.app_id)
      );
    }
    InitializeBookmarkForApp(_) {
      if (!this.m_mapBookmarks.has(_)) {
        let _ = {
          app_id: _,
          playback_position_in_seconds: 0,
          video_track_id: `0`,
          audio_track_id: `0`,
          timedtext_track_id: `0`,
          hide_from_watch_history: !1,
          hide_from_library: !1,
        };
        this.m_mapBookmarks.set(_, new _(_));
      }
    }
    GetBookmarkPlayTimeInSeconds(_) {
      let _ = this.m_mapBookmarks.get(_);
      if (_) {
        let _ = _.playback_position_in_seconds();
        if (Number.isInteger(_)) return _;
      }
      return 0;
    }
    async SendBookMarkedTimeToServer(_, _, _, _, _) {
      if (!_.logged_in) return;
      if (!this.m_transport) {
        console.warn(
          `CVideoBookmarkStore:SetBookMark no auth token / transport`,
        );
        return;
      }
      let _ = _.Init(_),
        _ = this.m_mapBookmarks.get(_);
      if (_) {
        let _ = !1;
        (_.app_id() != _ && ((_ = !0), _.set_app_id(_)),
          _.playback_position_in_seconds() != _ &&
            ((_ = !0), _.set_playback_position_in_seconds(_)),
          (_ ||= `0`),
          _.video_track_id() != _ && (_.set_video_track_id(_), (_ = !0)),
          (_ ||= `0`),
          _.audio_track_id() != _ && (_.set_audio_track_id(_), (_ = !0)),
          (_ ||= `0`),
          _ != _.timedtext_track_id() &&
            (_.set_timedtext_track_id(_), (_ = !0)),
          _ &&
            (_.Body().add_bookmarks(_),
            _.SetVideoBookmark(this.m_transport, _)));
      }
    }
    static Get() {
      return (
        _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
        _.s_VODStore
      );
    }
    Init() {
      _.logged_in && this.LoadWatchVideoOAuthToken();
    }
    async LoadWatchVideoOAuthToken() {
      let _ =
          _() == `community`
            ? _.COMMUNITY_BASE_URL + `actions/ajaxgetwatchvodtoken`
            : _.STORE_BASE_URL + `actions/ajaxgetwatchvodtoken`,
        _ = {};
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
        });
        if (
          _ &&
          _.status == 200 &&
          _.data &&
          _.data.success == 1 &&
          _.data.webapi_token
        ) {
          this.m_transport = _(
            new _(_.WEBAPI_BASE_URL, _.data.webapi_token),
          ).GetServiceTransport();
          return;
        }
      } catch (_) {
        let _ = _(_);
        console.error(
          `CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed ` +
            _.strErrorMsg,
          _,
        );
      }
    }
  },
  _ = class {
    m_appid;
    constructor(_) {
      this.m_appid = _;
    }
    async SetBookmark(_, _, _, _) {
      _.logged_in &&
        _.Get().SendBookMarkedTimeToServer(
          this.m_appid,
          Math.floor(_),
          _,
          _,
          _,
        );
    }
    GetBeginPlaytime() {
      return _.logged_in
        ? _.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
        : 0;
    }
  },
  _ = 1800,
  _ = 1e3,
  _ = 5e3,
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Unlocking = 1)] = `Unlocking`),
      (_[(_.Loading = 2)] = `Loading`),
      (_[(_.Ready = 3)] = `Ready`),
      (_[(_.Error = 4)] = `Error`),
      _
    );
  })({});
async function _(_, _, _) {
  if (!_) return;
  let _ = new FormData();
  (_.append(`steamid`, _),
    _.append(`broadcastid`, _),
    _.append(`viewertoken`, _));
  try {
    await _.default.post(_.CHAT_BASE_URL + `broadcast/stopwatching`, _);
  } catch {}
}
var _ = class {
    m_rtUnlockTime = 0;
    m_schUnlockTimeout = new _();
    m_broadcast;
    m_video;
    UnlockH264(_, _) {
      this.BCanUnlockH264()
        ? (_.SetState(1, ``),
          console.log(`Unlocking H.264 for broadcast video playback`),
          this.RequestUnlockH264(),
          (this.m_broadcast = _),
          (this.m_video = _),
          (this.m_rtUnlockTime = Date.now()),
          this.m_schUnlockTimeout.Schedule(100, () => this.CheckUnlockState()))
        : _.SetState(4, _(`#BroadcastWatch_MinBrowser`));
    }
    BCanUnlockH264() {
      return _(`RemotePlay.UnlockH264`)
        ? (console.log(`Client supports direct H.264 unlock`), !0)
        : _(`BrowserView.PostMessageToParent`)
          ? (console.log(`Client supports browserview H.264 unlock`), !0)
          : (console.log(`Client does not support H.264 unlock`), !1);
    }
    RequestUnlockH264() {
      _(`RemotePlay.UnlockH264`)
        ? (console.log(`Requesting direct H.264 unlock`),
          SteamClient.RemotePlay.UnlockH264())
        : _(`BrowserView.PostMessageToParent`)
          ? (console.log(`Requesting browserview unlock`),
            SteamClient.BrowserView.PostMessageToParent(
              `UnlockH264Request`,
              `CUnlockH264Helper`,
            ))
          : console.log(`Failed to request H.264 unlock: no method supported`);
    }
    CheckUnlockState() {
      this.m_broadcast.m_eWatchState == 1 &&
        (_() || _()
          ? (console.log(`Unlocking H.264 successful`),
            this.m_broadcast.SetState(0, ``),
            this.m_video.Restart())
          : Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                `Unlocking H.264 timed out (Steam client or servers offline?)`,
              ),
              this.m_broadcast.SetState(4, _(`#BroadcastWatch_MinBrowser`)))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ));
    }
  },
  _ = class {
    constructor() {
      _(this);
    }
    m_steamIDBroadcast = ``;
    m_ulBroadcastID = ``;
    m_ulViewerToken = ``;
    m_strCDNAuthUrlParameters = void 0;
    m_bWebRTC = !1;
    m_data;
    m_eWatchState = 0;
    m_strStateDescription = ``;
    m_rgVideos = [];
    m_schManifestTimeout = new _();
    m_schHeartbeatTimeout = new _();
    SetState(_, _ = ``) {
      ((this.m_eWatchState = _),
        (this.m_strStateDescription = _),
        _ == 4 && console.log(this.m_strStateDescription));
    }
  };
(_([_], _.prototype, `m_ulBroadcastID`, void 0),
  _([_], _.prototype, `m_eWatchState`, void 0),
  _([_], _.prototype, `m_strStateDescription`, void 0),
  _([_], _.prototype, `SetState`, null));
var _ = class {
  m_steamIDBroadcast = ``;
  m_bInitialized = !1;
  m_strTitle = ``;
  m_strAppId = `7`;
  m_nAppID = 7;
  m_strAppTitle = ``;
  m_strThumbnailUrl = ``;
  m_nViewerCount = 0;
  m_bIsOnline = !1;
  m_schUpdateTimeout = new _();
  m_nRefCount = 0;
  constructor(_) {
    (_(this), (this.m_steamIDBroadcast = _));
  }
};
(_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_strTitle`, void 0),
  _([_], _.prototype, `m_strAppId`, void 0),
  _([_], _.prototype, `m_nAppID`, void 0),
  _([_], _.prototype, `m_strAppTitle`, void 0),
  _([_], _.prototype, `m_strThumbnailUrl`, void 0),
  _([_], _.prototype, `m_nViewerCount`, void 0),
  _([_], _.prototype, `m_bIsOnline`, void 0));
var _ = class {
  constructor() {
    _(this);
  }
  m_eWatchState = 0;
  m_strStateDescription = ``;
  m_rgVideos = [];
  SetState(_, _ = ``) {
    ((this.m_eWatchState = _),
      (this.m_strStateDescription = _),
      _ == 4 && console.log(this.m_strStateDescription));
  }
};
(_([_], _.prototype, `m_eWatchState`, void 0),
  _([_], _.prototype, `m_strStateDescription`, void 0),
  _([_], _.prototype, `SetState`, null));
var _ = class extends _ {
    m_clipID;
    m_data;
  },
  _ = class extends _ {
    m_nAppIDVOD;
    m_manifestURL;
  },
  _ = class {
    m_mapBroadcasts = new Map();
    m_mapClips = new Map();
    m_mapVODs = new Map();
    m_activeVideo = null;
    m_broadcastSettings = {
      nVolume: 1,
      bMuted: !1,
      ulViewerToken: `0`,
    };
    m_schSaveSettings = new _();
    m_broadcastInfos = {};
    constructor() {
      (_(this), this.LoadBroadcastSettings());
    }
    GetBroadcastState(_) {
      if (_.IsBroadcastClip()) {
        let _ = this.m_mapClips.get(_.GetBroadcastClipID());
        return _ ? _.m_eWatchState : 0;
      }
      if (_.IsBroadcastVOD()) {
        let _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
        return _ ? _.m_eWatchState : 0;
      }
      {
        let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
        return _ ? _.m_eWatchState : 0;
      }
    }
    GetBroadcastStateDescription(_) {
      if (_.IsBroadcastClip()) {
        let _ = this.m_mapClips.get(_.GetBroadcastClipID());
        return _ ? _.m_strStateDescription : ``;
      }
      if (_.IsBroadcastVOD()) {
        let _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
        return _ ? _.m_strStateDescription : ``;
      }
      {
        let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
        return _ ? _.m_strStateDescription : ``;
      }
    }
    CreateBroadcastVideo(_, _, _, _) {
      let _ = this.GetOrCreateBroadcast(_),
        { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
        _ = new _(_, _, _, _);
      return (
        _.SetBroadcastSteamID(_),
        _.m_rgVideos.push(_),
        (_.m_bWebRTC = _),
        !_() && !_() && new _().UnlockH264(_, _),
        _
      );
    }
    CreateClipVideo(_, _, _) {
      let _ = this.GetOrCreateClip(_),
        { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
        _ = new _(_, _, _, _);
      return (
        _.SetBroadcastClipID(_),
        _.m_rgVideos.push(_),
        !_() && !_() && new _().UnlockH264(_, _),
        _
      );
    }
    CreateVODVideo(_, _, _) {
      let _ = this.GetOrCreateVOD(_),
        { nVolume: _, bMuted: _ } = this.m_broadcastSettings,
        _ = new _(_, _, _, _);
      return (
        _.SetBroadcastAppIDVOD(_),
        _.m_rgVideos.push(_),
        !_() && !_() && new _().UnlockH264(_, _),
        _
      );
    }
    StartVideo(_) {
      if (_.IsBroadcastClip()) {
        console.log(`Starting clip for ${_.GetBroadcastClipID()}`);
        let _ = this.m_mapClips.get(_.GetBroadcastClipID());
        if (!_) return;
        (this.SetActiveVideo(_),
          _.m_eWatchState == 0
            ? this.GetClipManifest(_, _.GetWatchLocation())
            : _.m_eWatchState == 3 && _.StartClip(_));
      } else if (_.IsBroadcastVOD()) {
        console.log(`Starting VOD for ${_.GetBroadcastAppIDVOD()}`);
        let _ = this.m_mapVODs.get(_.GetBroadcastAppIDVOD());
        if (!_) return;
        (this.SetActiveVideo(_),
          _.m_eWatchState == 0
            ? this.GetVODManifest(_, _.GetWatchLocation())
            : _.m_eWatchState == 3 && _.StartVOD(_));
      } else {
        let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
        if (!_) return;
        (this.SetActiveVideo(_),
          _.m_eWatchState == 0
            ? this.GetBroadcastManifest(_, _.GetWatchLocation())
            : _.m_eWatchState == 3 && _.StartBroadcast(_));
      }
    }
    SetActiveVideo(_) {
      (this.m_mapBroadcasts.forEach((_) => {
        for (let _ of _.m_rgVideos) _ != _ && _.StopPlaybackTillUserInput();
      }),
        this.m_mapClips.forEach((_) => {
          for (let _ of _.m_rgVideos) _ != _ && _.StopPlaybackTillUserInput();
        }),
        (this.m_activeVideo = _));
    }
    PauseAllVideo() {
      this.m_mapBroadcasts.forEach((_) => {
        for (let _ of _.m_rgVideos) _.StopPlaybackTillUserInput();
      });
    }
    async StopVideo(_) {
      let _ = _.GetBroadcastSteamID(),
        _ = this.m_mapBroadcasts.get(_);
      (_.Stop(),
        _ &&
          (_.m_ulBroadcastID &&
            _(_, _.m_ulBroadcastID, this.m_broadcastSettings.ulViewerToken),
          _(_.m_rgVideos, (_) => _ == _),
          this.RemoveBroadcastIfUnused(_)));
    }
    StartInfo(_) {
      let _ = this.GetOrCreateBroadcastInfo(_);
      return (
        _.m_nRefCount++,
        (_.m_bInitialized && _.m_schUpdateTimeout.IsScheduled()) ||
          this.LoadBroadcastInfo(_),
        _
      );
    }
    StopInfo(_) {
      _.m_nRefCount--;
    }
    GetOrCreateBroadcastInfo(_) {
      if (!_) return new _(``);
      if (!this.m_broadcastInfos[_]) {
        let _ = _(new _(_));
        this.m_broadcastInfos[_] = _;
      }
      return this.m_broadcastInfos[_];
    }
    GetOrCreateBroadcast(_) {
      let _ = this.m_mapBroadcasts.get(_);
      return (
        _ ||
        ((_ = new _()),
        (_.m_steamIDBroadcast = _),
        (_.m_eWatchState = 0),
        this.m_mapBroadcasts.set(_, _),
        _)
      );
    }
    GetBroadcast(_) {
      return this.m_mapBroadcasts.get(_);
    }
    GetBroadcastClip(_) {
      return this.m_mapClips.get(_);
    }
    GetBroadcastVOD(_) {
      return this.m_mapVODs.get(_);
    }
    RemoveBroadcastIfUnused(_) {
      _.m_rgVideos.length ||
        (_.m_schHeartbeatTimeout.Cancel(),
        _.m_schManifestTimeout.Cancel(),
        this.m_mapBroadcasts.delete(_.m_steamIDBroadcast));
    }
    GetOrCreateClip(_) {
      let _ = this.m_mapClips.get(_);
      return (
        _ ||
        ((_ = new _()),
        (_.m_clipID = _),
        (_.m_eWatchState = 0),
        this.m_mapClips.set(_, _),
        _)
      );
    }
    GetOrCreateVOD(_) {
      let _ = this.m_mapVODs.get(_);
      return (
        _ ||
        ((_ = new _()),
        (_.m_nAppIDVOD = _),
        (_.m_eWatchState = 0),
        this.m_mapVODs.set(_, _),
        _)
      );
    }
    async LoadBroadcastInfo(_) {
      let _ = `0`,
        _ = this.m_mapBroadcasts.get(_.m_steamIDBroadcast);
      if ((_ && (_ = _.m_ulBroadcastID), _.m_nRefCount == 0)) return;
      let _ = {
        steamid: _.m_steamIDBroadcast,
        broadcastid: _,
        location:
          _ &&
          _.m_rgVideos &&
          _.m_rgVideos[0] &&
          _.m_rgVideos[0].GetWatchLocation(),
      };
      try {
        let _ = await _.default.get(
          `${_.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
          {
            params: _,
          },
        );
        if (!_ || !_.data || !_.data.success || _.data.success != 1) {
          _.m_bInitialized = !0;
          return;
        }
        let _ = _.data;
        _(() => {
          ((_.m_bInitialized = !0),
            (_.m_strTitle = _.title),
            (_.m_strAppId = _.appid),
            (_.m_nAppID = Number.parseInt(_.appid)),
            (_.m_strAppTitle = _.app_title),
            (_.m_strThumbnailUrl = _.thumbnail_url),
            (_.m_nViewerCount = _.viewer_count),
            (_.m_bIsOnline = _.is_online),
            !_.m_strTitle &&
              _ &&
              ((_.m_strTitle = _.name),
              (_.m_strAppTitle = _.appName || _.name)));
          let _ = _.update_interval;
          _ &&
            typeof _ == `number` &&
            _.m_schUpdateTimeout.Schedule(_ * 1e3, () =>
              this.LoadBroadcastInfo(_),
            );
        });
      } catch (_) {
        console.error(_);
      }
    }
    DelayedGetBroadcastManifest(_, _, _ = Date.now()) {
      _.m_schManifestTimeout.Schedule(_, () =>
        this.GetBroadcastManifest(_, _, _),
      );
    }
    async GetBroadcastManifest(_, _, _ = Date.now()) {
      _.SetState(2, ``);
      let _ = {
          steamid: _.m_steamIDBroadcast,
          broadcastid: 0,
          viewertoken: this.m_broadcastSettings.ulViewerToken,
          watchlocation: _,
          sessionid: _(),
          is_webrtc: _.m_bWebRTC,
        },
        _ = null;
      try {
        _ = await _.default.get(
          _.CHAT_BASE_URL + `broadcast/getbroadcastmpd/`,
          {
            params: _,
            withCredentials: !0,
          },
        );
      } catch (_) {
        let _ = _(_);
        console.error(`Failed to get broadcast manifest!` + _.strErrorMsg, _);
      }
      if (!_ || _.status != 200) {
        _.SetState(4, _(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let _ = _.data;
      _.viewertoken && this.SetViewerToken(_.viewertoken);
      let _ = _.success;
      if (_ == `ready`)
        (_.SetState(3),
          (_.m_ulBroadcastID = _.broadcastid),
          (_.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
          (_.m_strCDNAuthUrlParameters = _.cdn_auth_url_parameters),
          (_.m_bWebRTC = _.is_webrtc),
          (_.m_data = _),
          this.LoadBroadcast(_),
          setTimeout(() => {
            _.m_schHeartbeatTimeout.Schedule(
              _.m_data.heartbeat_interval * 1e3,
              () => this.HeartbeatBroadcast(_),
            );
          }, Math.random() * 3e4));
      else if (_ == `waiting`) {
        _.SetState(2, _(`#BroadcastWatch_WaitingForResponse`));
        let _ = Date.now() - _;
        if (_ > 6e4) {
          _.SetState(4, _(`#BroadcastWatch_NotAvailable`));
          return;
        }
        let _ = _ > 3e4 ? _.retry : 5e3;
        _.m_schManifestTimeout.Schedule(_, () =>
          this.GetBroadcastManifest(_, _, _),
        );
      } else
        _ == `waiting_for_start`
          ? (_.SetState(2, _(`#BroadcastWatch_WaitingForStart`)),
            _.m_schManifestTimeout.Schedule(_.retry, () =>
              this.GetBroadcastManifest(_, _, _),
            ))
          : _ == `waiting_for_reconnect`
            ? (_.SetState(2, _(`#BroadcastWatch_WaitingForReconnect`)),
              _.m_schManifestTimeout.Schedule(_.retry, () =>
                this.GetBroadcastManifest(_, _, _),
              ))
            : _ == `end`
              ? _.SetState(4, _(`#BroadcastWatch_NotAvailable`))
              : _ == `too_many_broadcasts`
                ? _.SetState(4, _(`#BroadcastWatch_TooManyBroadcasts`))
                : _ == `system_not_supported`
                  ? _.SetState(4, _(`#BroadcastWatch_SystemNotSupported`))
                  : _ == `user_restricted`
                    ? _.SetState(4, _(`#BroadcastWatch_UserRestricted`))
                    : _ == `poor_upload_quality`
                      ? _.SetState(4, _(`#BroadcastWatch_PoorUploadQuality`))
                      : _ == `request_failed`
                        ? _.SetState(4, _(`#BroadcastWatch_RequestFailed`))
                        : _ == `too_many_viewers`
                          ? _.SetState(4, _(`#BroadcastWatch_TooManyViewers`))
                          : _.SetState(4, _(`#BroadcastWatch_NotAvailable`));
    }
    async GetClipManifest(_, _) {
      _.SetState(2, ``);
      let _ = {
          clipid: _.m_clipID,
          watchlocation: _,
          sessionid: _(),
        },
        _ = null;
      try {
        _ = await _.default.get(_.CHAT_BASE_URL + `broadcast/getclipdetails`, {
          params: _,
          withCredentials: !0,
        });
      } catch (_) {
        (console.error(_), console.log(`Failed to get clip manifest!`));
      }
      if (!_ || _.status != 200) {
        _.SetState(4, _(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let _ = _.data;
      _.success == 1
        ? (_.SetState(3), (_.m_data = _), this.LoadClip(_))
        : _.SetState(4, _(`#BroadcastWatch_RequestFailed`));
    }
    async GetVODManifest(_, _) {
      _.SetState(2, ``);
      let _ = await _.fetchQuery(_(_.m_nAppIDVOD)).catch((_) => {
        console.error(
          `BroadcastWatchStore:GetVODManifest: Failed to load VOD ` +
            _.m_nAppIDVOD,
          _,
        );
      });
      _
        ? (_.bookmark
            ? _.Get().SetBookmarkForApp(_.m_nAppIDVOD, _.bookmark)
            : _.Get().InitializeBookmarkForApp(_.m_nAppIDVOD),
          _.SetState(3),
          (_.m_manifestURL = _.video_url),
          this.LoadVOD(_))
        : _.SetState(4, _(`#BroadcastWatch_RequestFailed`));
    }
    async HeartbeatBroadcast(_) {
      let _ = new FormData();
      (_.append(`steamid`, _.m_steamIDBroadcast),
        _.append(`broadcastid`, _.m_ulBroadcastID),
        _.append(`viewertoken`, this.m_broadcastSettings.ulViewerToken),
        _.default.post(_.CHAT_BASE_URL + `broadcast/heartbeat/`, _),
        _.m_schHeartbeatTimeout.Schedule(
          _.m_data.heartbeat_interval * 1e3,
          () => this.HeartbeatBroadcast(_),
        ));
    }
    LoadBroadcast(_) {
      let _ = this.m_activeVideo;
      _ && _.m_rgVideos.findIndex((_) => _ == _) >= 0 && _.StartBroadcast(_);
    }
    LoadClip(_) {
      let _ = this.m_activeVideo;
      _ && _.m_rgVideos.findIndex((_) => _ == _) >= 0 && _.StartClip(_);
    }
    LoadVOD(_) {
      let _ = this.m_activeVideo;
      _ && _.m_rgVideos.findIndex((_) => _ == _) >= 0 && _.StartVOD(_);
    }
    BroadcastDownloadFailed(_, _ = !0, _ = _.Invalid) {
      _.Stop();
      let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
      _ &&
        _.m_eWatchState != 2 &&
        (_.m_bWebRTC && _ && (_.m_bWebRTC = !1),
        _ == _.StreamGone
          ? this.DelayedGetBroadcastManifest(_, _.GetWatchLocation())
          : this.GetBroadcastManifest(_, _.GetWatchLocation()));
    }
    UserInputClickVideo(_) {
      if (
        this.m_activeVideo != _ &&
        (this.PauseAllVideo(),
        (this.m_activeVideo = _),
        !_.IsBroadcastClip() && !_.IsBroadcastVOD())
      ) {
        let _ = this.m_mapBroadcasts.get(_.GetBroadcastSteamID());
        _ && this.GetBroadcastManifest(_, _.GetWatchLocation());
      }
      _.UserInputClick();
    }
    LoadBroadcastSettings() {
      if (!window.localStorage) return;
      let _ = window.localStorage.getItem(`broadcastSettings`);
      if (!_) return;
      let _ = JSON.parse(_);
      if (!_) return;
      Object.assign(this.m_broadcastSettings, _);
      let _ = this.m_broadcastSettings;
      ((_.bMuted = !!_.bMuted),
        (_.nVolume = _(_.nVolume, 0, 1)),
        typeof _.ulViewerToken != `string` && (_.ulViewerToken = `0`));
    }
    SaveBroadcastSettings() {
      window.localStorage &&
        this.m_schSaveSettings.Schedule(_, () => {
          try {
            window.localStorage.setItem(
              `broadcastSettings`,
              JSON.stringify(this.m_broadcastSettings),
            );
          } catch {}
        });
    }
    SetViewerToken(_) {
      this.m_broadcastSettings.ulViewerToken != _ &&
        ((this.m_broadcastSettings.ulViewerToken = _),
        this.SaveBroadcastSettings());
    }
    GetViewerToken() {
      return this.m_broadcastSettings.ulViewerToken;
    }
    SaveVolumeChange(_, _) {
      (this.m_broadcastSettings.nVolume != _ ||
        this.m_broadcastSettings.bMuted != _) &&
        ((this.m_broadcastSettings.nVolume = _),
        (this.m_broadcastSettings.bMuted = _),
        this.SaveBroadcastSettings());
    }
  };
_([_], _.prototype, `m_mapBroadcasts`, void 0);
var _ = (function (_) {
    return (
      (_[(_.Timeline = 1)] = `Timeline`), (_[(_.Minimap = 2)] = `Minimap`), _
    );
  })({}),
  _ = class {
    m_elVideo;
    m_player = null;
    m_listeners = new _();
    m_gameDataParser = null;
    m_eWatchLocation = 0;
    m_bStartWithSubtitles = !1;
    m_steamIDBroadcast = ``;
    m_BroadcastInfo = null;
    m_broadcastClipID = ``;
    m_nBroadcastAppIDVOD = 0;
    m_bPaused = !1;
    m_nPlaybackTime = 0;
    m_bBuffering = !1;
    m_bOnLiveEdge = !1;
    m_nVolume = 0;
    m_bMuted = !1;
    m_bUserInputNeeded = !1;
    m_bIsReplay = !1;
    m_nTimelineDuration = _;
    m_nVideoStartPos = 0;
    m_nVideoEndPos = 0;
    m_editorStartTime = 0;
    m_editorEndTime = 0;
    m_rgMarkers = _.array();
    m_rgSegments = _.array();
    m_rgRegions = _.array();
    m_fnOnVideoEnd;
    m_videoEndingTimer;
    constructor(_, _, _, _) {
      (_(this),
        (this.m_elVideo = _),
        (this.m_nVolume = _),
        (this.m_bMuted = _),
        (this.m_eWatchLocation = _));
    }
    SetBroadcastSteamID(_) {
      this.m_steamIDBroadcast = _;
    }
    GetBroadcastSteamID() {
      return this.m_steamIDBroadcast;
    }
    GetWatchLocation() {
      return this.m_eWatchLocation;
    }
    IsPaused() {
      return this.m_bPaused;
    }
    GetPlaybackTime() {
      return this.m_nPlaybackTime;
    }
    SetStatsViewIsVisible(_) {
      this.m_player && this.m_player.SetStatsViewIsVisible(_);
    }
    GetDASHPlayerStats() {
      return this.m_player?.GetDASHPlayerStats();
    }
    BHasDASHStats() {
      return this.m_player != null;
    }
    IsTimelineMapActive() {
      return !1;
    }
    CanSeek() {
      return this.m_player?.CanSeek() ?? !1;
    }
    IsBuffering() {
      return this.m_bBuffering;
    }
    IsOnLiveEdge() {
      return this.m_bOnLiveEdge;
    }
    GetVideoAvailableStartTime() {
      return this.m_nVideoStartPos;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    IsReplay() {
      return this.m_bIsReplay;
    }
    IsBroadcastClip() {
      return !!this.m_broadcastClipID;
    }
    SetBroadcastClipID(_) {
      this.m_broadcastClipID = _;
    }
    GetBroadcastClipID() {
      return this.m_broadcastClipID;
    }
    IsBroadcastVOD() {
      return !!this.m_nBroadcastAppIDVOD;
    }
    SetBroadcastAppIDVOD(_) {
      this.m_nBroadcastAppIDVOD = _;
    }
    GetBroadcastAppIDVOD() {
      return this.m_nBroadcastAppIDVOD;
    }
    GetVideoRepresentations() {
      return this.m_player ? this.m_player.GetVideoRepresentations() : [];
    }
    SetVideoRepresentation(_) {
      this.m_player?.SetVideoRepresentation(_);
    }
    GetBroadcastInfo() {
      return this.m_BroadcastInfo;
    }
    BHasTimedText() {
      return this.m_player?.BHasTimedText() ?? !1;
    }
    BHasPlayer() {
      return !!this.m_player;
    }
    ListSubtitles() {
      return this.m_elVideo.textTracks;
    }
    GetSubtitles() {
      for (let _ = 0; _ < this.m_elVideo.textTracks.length; _++) {
        let _ = this.m_elVideo.textTracks[_];
        if (_.mode === `showing`) return _;
      }
      return null;
    }
    SetSubtitles(_) {
      let _ = _ ? _[_] : -1;
      this.m_player.SetSubtitles(_);
    }
    SetStartWithSubtitles(_) {
      this.m_bStartWithSubtitles = _;
    }
    GetBroadcastState() {
      return _.GetBroadcastState(this);
    }
    GetBroadcastStateDescription() {
      return _.GetBroadcastStateDescription(this);
    }
    SetOnVideoCallback(_) {
      this.m_fnOnVideoEnd = _;
    }
    InitPlayer() {
      (_(!this.m_player, `Initialized twice?`),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `playing`,
          this.OnVideoPlaying,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `timeupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `volumechange`,
          this.OnVolumeUpdated,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-bufferupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-gamedataupdate`,
          this.OnGameDataUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-downloadfailed`,
          this.OnDownloadFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-webrtcretry`,
          this.OnWebRTCRetry,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-webrtcfailed`,
          this.OnWebRTCFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        (this.m_bPaused = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_bBuffering = !1),
        (this.m_nTimelineDuration = _),
        (this.m_nVideoStartPos = 0),
        (this.m_nVideoEndPos = 0),
        this.m_rgMarkers.clear(),
        this.m_rgSegments.clear(),
        (this.m_bUserInputNeeded = !1),
        (this.m_bIsReplay = !1));
    }
    Restart() {
      this.IsMuted() ||
        this.IsPaused() ||
        this.GetUserInputNeeded() ||
        this.Play();
    }
    StartBroadcast(_) {
      if ((this.InitPlayer(), _.m_data.url)) {
        let _ = new _(this.m_elVideo);
        (_.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
          (this.m_player = _),
          _.PlayMPD(
            _.m_data.url,
            _.m_data.hls_url,
            void 0,
            _.m_strCDNAuthUrlParameters,
          ));
      } else {
        let _ = new _(this.m_elVideo);
        ((this.m_player = _),
          _.PlayWebRTC(
            this.m_steamIDBroadcast,
            _.m_ulViewerToken,
            _.m_data.webrtc_session_id,
            _.m_data.webrtc_turn_server,
            _.m_data.webrtc_offer_sdp,
          ));
      }
      (this.SetVolume(this.m_nVolume), this.m_player?.SetMuted(this.m_bMuted));
      let _ = this.m_player?.GetDASHPlayerStats();
      (_ &&
        _.SetBroadcasterAndViewerInfo(
          this.m_steamIDBroadcast,
          _.steamid,
          _.m_ulBroadcastID,
          _.m_ulViewerToken,
        ),
        (this.m_BroadcastInfo = _.StartInfo(this.m_steamIDBroadcast)));
    }
    StartClip(_) {
      this.InitPlayer();
      let _ = new _(this.m_elVideo);
      (_.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = _),
        _.PlayMPD(_.m_data.clip_url),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    StartVOD(_) {
      this.InitPlayer();
      let _ = new _(this.m_elVideo);
      (_.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = _),
        _.logged_in &&
          _.m_nAppIDVOD &&
          _.SetBookmarkAdapter(new _(_.m_nAppIDVOD)),
        _.m_manifestURL && _.PlayMPD(_.m_manifestURL),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    Stop() {
      (this.m_listeners.Unregister(),
        (this.m_BroadcastInfo &&= (_.StopInfo(this.m_BroadcastInfo), null)),
        (this.m_gameDataParser = null),
        (this.m_player &&= (this.m_player.Close(), null)));
    }
    TogglePlayPause() {
      !this.m_player || this.m_player.IsPaused() ? this.Play() : this.Pause();
    }
    Play() {
      let _ = this.GetBroadcastState();
      if (_ == 0 || this.IsBroadcastClip()) _.StartVideo(this);
      else if (_ == 3) {
        if ((_.SetActiveVideo(this), this.m_player)) this.m_player.Play();
        else if (this.IsBroadcastVOD()) {
          let _ = _.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
          _ && this.StartVOD(_);
        } else {
          let _ = _.GetBroadcast(this.m_steamIDBroadcast);
          _ && this.StartBroadcast(_);
        }
      }
    }
    Pause() {
      (console.log(
        `Pause `,
        this.m_steamIDBroadcast,
        this.m_nBroadcastAppIDVOD,
        this.m_broadcastClipID,
      ),
        this.m_player && this.m_player.Pause());
    }
    JumpTime(_) {
      this.m_player?.JumpTime(_);
    }
    Seek(_) {
      this.m_player?.Seek(_);
    }
    SeekAndPlay(_) {
      this.m_player?.SeekAndPlay(_);
    }
    JumpToLiveEdge() {
      let _ = this.m_player;
      _ &&
        (_.IsLiveContent()
          ? this.SeekAndPlay(_.GetBufferedLiveEdgeTime())
          : this.SeekAndPlay(_.GetAvailableVideoStartTime()));
    }
    SetVolume(_) {
      (this.m_player &&
        (this.m_player.SetVolume(_),
        (this.m_nVolume = this.m_player.GetVolume())),
        _.SaveVolumeChange(_, this.m_bMuted));
    }
    SetMute(_) {
      (this.m_player && this.m_player.SetMuted(_),
        (this.m_bMuted = _),
        _.SaveVolumeChange(this.m_nVolume, _));
    }
    IsMuted() {
      return this.m_bMuted;
    }
    OnVideoPlaying() {
      ((this.m_bPaused = !1),
        this.m_editorStartTime === 0 &&
          this.m_editorEndTime === 0 &&
          ((this.m_editorStartTime = this.GetVideoAvailableStartTime()),
          (this.m_editorEndTime =
            this.GetVideoAvailableStartTime() + this.GetTimelineDuration())));
    }
    OnVideoPause() {
      this.m_bPaused = !0;
    }
    OnVideoTimeUpdate() {
      window.clearTimeout(this.m_videoEndingTimer);
      let _ = this.m_player;
      if (_) {
        if (this.IsBroadcastClip())
          ((this.m_nPlaybackTime = _.GetCurrentPlayTime()),
            (this.m_nVideoStartPos = _.GetAvailableVideoStartTime()),
            (this.m_nVideoEndPos = _.GetBufferedLiveEdgeTime()),
            (this.m_nTimelineDuration =
              this.m_nVideoEndPos - this.m_nVideoStartPos),
            (this.m_bOnLiveEdge = !1),
            (this.m_bBuffering = _.IsBuffering()));
        else {
          if (
            ((this.m_nPlaybackTime = _.GetCurrentPlayTime()),
            (this.m_nVideoStartPos = _.GetAvailableVideoStartTime()),
            (this.m_nVideoEndPos = Math.max(
              _.GetBufferedLiveEdgeTime(),
              this.m_nPlaybackTime,
            )),
            this.IsBroadcastVOD())
          ) {
            this.m_nTimelineDuration = this.m_nVideoEndPos;
            let _ = this.m_fnOnVideoEnd;
            _ &&
              this.m_nVideoEndPos - this.m_nPlaybackTime < 5 &&
              (this.m_videoEndingTimer = window.setTimeout(() => {
                _();
              }, 400));
          }
          ((this.m_bBuffering = _.IsBuffering()),
            (this.m_bOnLiveEdge =
              this.m_nVideoEndPos - this.m_nPlaybackTime < 5),
            _.IsPaused() && (this.m_bOnLiveEdge = !1));
        }
      }
    }
    OnVolumeUpdated() {
      let _ = this.m_player;
      _ && ((this.m_nVolume = _.GetVolume()), (this.m_bMuted = _.IsMuted()));
    }
    OnGameDataUpdate(_) {
      let _ = _.detail;
      if (!_ || typeof _.gamedata != `object`) return;
      (this.m_gameDataParser &&
        this.m_gameDataParser.GetAppID() == _.gamedata.__appid) ||
        (this.m_gameDataParser = new _(_.gamedata.__appid));
      let _ = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
      if (`timelinemarkers` in _.gamedata) {
        let _ = this.m_gameDataParser.UpdateMarkers(
          _.gamedata.__timelinemarkers,
          _,
        );
        _ &&
          (this.m_rgMarkers.replace(_.rgMarkers || []),
          this.m_rgSegments.replace(_.rgSegments || []));
        let _ = this.m_gameDataParser.UpdateRegions(_.gamedata.__regions);
        _ && this.m_rgRegions.replace(_);
      } else
        `soundtrack` in _.gamedata &&
          this.m_gameDataParser.UpdateSoundtrack(
            this.m_steamIDBroadcast,
            _.gamedata.soundtrack,
          );
    }
    OnDownloadFailed(_) {
      let _ = _.detail || _.Invalid;
      _.BroadcastDownloadFailed(this, !0, _);
    }
    OnWebRTCRetry() {
      _.BroadcastDownloadFailed(this, !1);
    }
    OnWebRTCFailed() {
      _.BroadcastDownloadFailed(this, !0);
    }
    OnUserInputNeeded() {
      this.m_bUserInputNeeded = !0;
    }
    UserInputClick() {
      ((this.m_bUserInputNeeded = !1),
        this.m_player ? this.JumpToLiveEdge() : this.Play());
    }
    StopPlaybackTillUserInput() {
      (this.Stop(), this.OnUserInputNeeded());
    }
    GetTimelineStartPos() {
      return this.m_nVideoEndPos - this.m_nTimelineDuration;
    }
    GetTimelineDuration() {
      return this.m_nTimelineDuration;
    }
    GetTimeAtMousePosition(_, _, _, _) {
      let _ = _(_, _.left, _.right, _, _);
      return Math.floor(_ + 0.5);
    }
    GetPercentOffsetFromTime(_, _) {
      let _ = 0,
        _ = 0;
      return (
        _ == 1
          ? ((_ = this.m_nVideoEndPos), (_ = _ - this.m_nTimelineDuration))
          : ((_ = 0), (_ = 0)),
        _(_, _, _, 0, 100)
      );
    }
    GetTimelineMarkers() {
      return this.m_rgMarkers;
    }
    GetTimelineSegments() {
      return this.m_rgSegments;
    }
    GetGameDataRegions() {
      return this.m_rgRegions;
    }
    BHasMarkersOrSegments() {
      return this.has_segments || this.has_markers;
    }
    get has_markers() {
      return this.m_rgMarkers.length > 0;
    }
    get has_segments() {
      return this.m_rgSegments.length > 0;
    }
  };
(_([_], _.prototype, `m_player`, void 0),
  _([_], _.prototype, `m_bPaused`, void 0),
  _([_], _.prototype, `m_nPlaybackTime`, void 0),
  _([_], _.prototype, `m_bBuffering`, void 0),
  _([_], _.prototype, `m_bOnLiveEdge`, void 0),
  _([_], _.prototype, `m_nVolume`, void 0),
  _([_], _.prototype, `m_bMuted`, void 0),
  _([_], _.prototype, `m_bUserInputNeeded`, void 0),
  _([_], _.prototype, `m_bIsReplay`, void 0),
  _([_], _.prototype, `m_nTimelineDuration`, void 0),
  _([_], _.prototype, `m_nVideoStartPos`, void 0),
  _([_], _.prototype, `m_nVideoEndPos`, void 0),
  _([_], _.prototype, `m_editorStartTime`, void 0),
  _([_], _.prototype, `m_editorEndTime`, void 0),
  _([_.bound], _.prototype, `StartBroadcast`, null),
  _([_.bound], _.prototype, `StartClip`, null),
  _([_.bound], _.prototype, `StartVOD`, null),
  _([_], _.prototype, `OnVideoPlaying`, null),
  _([_], _.prototype, `OnVideoPause`, null),
  _([_.bound], _.prototype, `OnVideoTimeUpdate`, null),
  _([_], _.prototype, `OnVolumeUpdated`, null),
  _([_.bound], _.prototype, `OnGameDataUpdate`, null),
  _([_], _.prototype, `OnDownloadFailed`, null),
  _([_], _.prototype, `OnWebRTCRetry`, null),
  _([_], _.prototype, `OnWebRTCFailed`, null),
  _([_], _.prototype, `OnUserInputNeeded`, null));
var _ = new _();
window.uiBroadcastWatchStore = _;
var _ = _(),
  _ = class extends _.Component {
    m_elCanvas = null;
    m_Context = null;
    m_schUpdate = new _();
    m_bSetupComplete = !1;
    componentDidMount() {
      this.props.updateRate == 0 && this.updateCanvas();
    }
    componentWillUnmount() {
      this.m_schUpdate.Cancel();
    }
    componentDidUpdate() {
      this.updateCanvas();
    }
    BindCanvasRef(_) {
      this.m_elCanvas = _;
    }
    updateCanvas() {
      if (
        this.props.elementRef == null ||
        this.m_elCanvas == null ||
        this.m_bSetupComplete
      )
        return;
      let _ = this.props.scaleFactor || [1, 1],
        _ = this.props.elementRef,
        _ = this.props.updateRate,
        _ = this.m_elCanvas.getContext(`2d`);
      if (!_) return;
      this.m_Context = _;
      let _ = Math.floor(
          this.m_elCanvas.clientWidth / this.props.reductionFactor,
        ),
        _ = Math.floor(
          this.m_elCanvas.clientHeight / this.props.reductionFactor,
        );
      ((this.m_elCanvas.width = _),
        (this.m_elCanvas.height = _),
        (this.props.blurAmount ?? 0) > 0 &&
          (_.filter = `blur(` + this.props.blurAmount + `px)`));
      let _ = () => {
        (_.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
          _ > 0 && this.m_schUpdate.Schedule(_, _));
      };
      (_(), (this.m_bSetupComplete = !0));
    }
    render() {
      return (0, _.jsx)(`canvas`, {
        _: this.props._,
        className: this.props.className,
        ref: this.BindCanvasRef,
        width: this.props.width,
        height: this.props.height,
      });
    }
  };
(_([_], _.prototype, `BindCanvasRef`, null),
  _([_], _.prototype, `updateCanvas`, null));
var _ = 500,
  _ = class extends _.Component {
    render() {
      let {
          keyExtractor: _,
          style: _,
          duration: _ = _,
          className: _,
          children: _,
          childRef: _,
          ..._
        } = this.props,
        _ = {
          ...(_ || {}),
          transitionDuration: `${_ / 1e3}s`,
        };
      return (0, _.jsx)(_, {
        ..._,
        className: _(`crossfade`, _),
        children: (0, _.jsx)(
          _,
          {
            nodeRef: _,
            classNames: `crossfade-anim`,
            timeout: _,
            style: _,
            children: _,
          },
          _(),
        ),
      });
    }
  };
function _(_) {
  let { src: _, ..._ } = _,
    _ = {
      backgroundImage: `url(${_})`,
    },
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    style: _,
    keyExtractor: () => _,
    childRef: _,
    ..._,
    children: (0, _.jsx)(`div`, {
      ref: _,
      className: `crossfade-img`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: `STV_ReplayBanner`,
    children: _(`#DASHPlayerControls_IsReplay`),
  });
}
var _ = _((_) => {
    let _ = _.video;
    if (_ && (_.IsBroadcastClip() || _.IsBroadcastVOD())) return null;
    let _ = _.Loading,
      _ = ``;
    if (_) {
      ((_ = _.GetBroadcastState()), (_ = _.GetBroadcastStateDescription()));
      let _ = _.IsBuffering();
      (_ == _.Unlocking && ((_ = _.Loading), (_ = ``)),
        _ == _.Ready && _ && ((_ = _.Loading), (_ = ``)));
    }
    if ((_ && _ != _.Error && _.GetUserInputNeeded()) || _ == _.Ready)
      return null;
    let _ = _ == _.Loading;
    return (0, _.jsxs)(`div`, {
      className: `BroadcastVideoWatchState`,
      style: {
        filter: `hue-rotate(40deg)`,
      },
      children: [
        _ && (0, _.jsx)(_, {}),
        !_ &&
          (0, _.jsx)(`div`, {
            className: `BroadcastVideoWatchState_Text`,
            children: _,
          }),
      ],
    });
  }),
  _ = class extends _.Component {
    OnClick() {
      _.UserInputClickVideo(this.props.video);
    }
    render() {
      return (0, _.jsxs)(`div`, {
        className: `BroadcastVideoUserInputNeeded`,
        onClick: this.OnClick,
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(`span`, {
            children: _(`#DASHPlayerControls_ClickToPlay`),
          }),
        ],
      });
    }
  };
_([_], _.prototype, `OnClick`, null);
var _ = class extends _.Component {
  constructor(_) {
    super(_);
  }
  HideStats() {
    this.props.closeStats && this.props.closeStats();
  }
  render() {
    let _ = this.props.stats;
    return (0, _.jsxs)(`div`, {
      className: `dash_video_stats`,
      children: [
        (0, _.jsx)(`button`, {
          className: `dash_stat_close_button`,
          onClick: this.HideStats,
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_BufferingResolution`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetBufferingResolutionToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_PlaybackResolution`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetPlaybackResolutionToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_HtmlResolution`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetHTMLVideoResolutionToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_ContentServer`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetContentServerToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_StallEvents`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetStalledEventsToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_FailedDownloads`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetFailedDownloadsToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_TimeToFirstFrame`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetTimeToFirstFrameToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_PlaybackRate`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetPlaybackRateForDisplay(),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          stats: _,
        }),
      ],
    });
  }
};
(_([_], _.prototype, `HideStats`, null), (_ = _([_], _)));
var _ = class extends _.Component {
  constructor(_) {
    super(_);
  }
  createBufferedRange(_) {
    let _ = this.props.stats,
      _ = [],
      _ = _ ? `vidbuf` : `audbuf`,
      _ = _ ? _.GetNumBufferedVideoRanges() : _.GetNumBufferedAudioRanges();
    if (_ > 0)
      for (let _ = 0; _ < _; ++_) {
        let _ = _(
            _
              ? `#DASHPlayerStats_VideoBufferRange`
              : `#DASHPlayerStats_AudioBufferRange`,
            _,
          ),
          _ = _
            ? _.GetBufferedVideoSegmentForDisplay(_)
            : _.GetBufferedAudioSegmentForDisplay(_);
        _.push(
          (0, _.jsxs)(
            `div`,
            {
              children: [
                _,
                ` `,
                (0, _.jsx)(`span`, {
                  className: `videoStatsValue`,
                  children: _,
                }),
              ],
            },
            _ + _,
          ),
        );
      }
    else {
      let _ = _(
        _
          ? `#DASHPlayerStats_VideoNoRangeInformation`
          : `#DASHPlayerStats_AudioNoRangeInformation`,
      );
      _.push(
        (0, _.jsx)(
          `div`,
          {
            children: _,
          },
          _ + `none`,
        ),
      );
    }
    return _;
  }
  render() {
    let _ = this.props.stats;
    return (0, _.jsxs)(`div`, {
      className: `dash_video_quick_stats`,
      children: [
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_BytesReceived`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetBytesReceivedToDisplay(),
            }),
          ],
        }),
        this.props.stats.BHasFrameInformation() &&
          (0, _.jsxs)(`div`, {
            children: [
              _(`#DASHPlayerStats_DroppedFrames`),
              ` `,
              (0, _.jsx)(`span`, {
                className: `videoStatsValue`,
                children: _.GetDroppedFramesToDisplay(),
              }),
            ],
          }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_VideoBuffered`),
            ` `,
            (0, _.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [_.GetVideoBufferedToDisplay(), ` `],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_AudioBuffered`),
            ` `,
            (0, _.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [_.GetAudioBufferedToDisplay(), ` `],
            }),
          ],
        }),
        this.createBufferedRange(!0),
        this.createBufferedRange(!1),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_BandwidthRequired`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetBandwidthRequiredToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_BandwidthVideo`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetBandwithVideoToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_BandwidthNums`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetBandwidthStatsToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_DownloadNums`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetDownloadTimeStatsToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_ActiveDownloads`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetActiveDownloadsToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_VideoDownloadProgress`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetVideoDownloadProgressToDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_DroppingFrames`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetPersistentFrameDropsForDisplay(),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          children: [
            _(`#DASHPlayerStats_CurrentFPS`),
            ` `,
            (0, _.jsx)(`span`, {
              className: `videoStatsValue`,
              children: _.GetCurrentFPSForDisplay(),
            }),
          ],
        }),
      ],
    });
  }
};
_ = _([_], _);
var _ = class extends _.Component {
  m_elSettingsButton;
  m_SettingsButtonPos;
  m_elClickListener = null;
  m_elSettingsPanel = null;
  m_elSubtitlesButton = _.createRef();
  m_elSubtitlesPanel = _.createRef();
  m_SubtitlesButtonPos;
  constructor(_) {
    (super(_),
      (this.state = {
        bSettingsOpen: !1,
        bSubtitlesOpen: !1,
      }));
  }
  OnVideoControlClick(_) {
    (this.setState({
      bSettingsOpen: !this.state.bSettingsOpen,
    }),
      (this.m_SettingsButtonPos = [
        this.m_elSettingsButton.offsetLeft,
        this.m_elSettingsButton.offsetTop,
      ]),
      (this.m_elClickListener = _.currentTarget.ownerDocument.defaultView),
      this.m_elClickListener?.addEventListener(`mouseup`, this.OnMouseUp, !0));
  }
  OnSubtitlesClick(_) {
    (this.setState({
      bSubtitlesOpen: !this.state.bSubtitlesOpen,
    }),
      (this.m_SubtitlesButtonPos = [
        this.m_elSubtitlesButton.current?.offsetLeft,
        this.m_elSubtitlesButton.current?.offsetTop,
      ]),
      (this.m_elClickListener = _.currentTarget.ownerDocument.defaultView),
      this.m_elClickListener?.addEventListener(`mouseup`, this.OnMouseUp, !0));
  }
  OnMouseUp(_) {
    (this.m_elClickListener?.removeEventListener(`mouseup`, this.OnMouseUp, !0),
      _(this.m_elSettingsPanel, _.target) ||
        this.setState({
          bSettingsOpen: !1,
        }),
      _(this.m_elSubtitlesPanel.current, _.target) ||
        this.setState({
          bSubtitlesOpen: !1,
        }));
  }
  bindSettingsButton(_) {
    this.m_elSettingsButton = _;
  }
  BindSettingsPanel(_) {
    this.m_elSettingsPanel = _;
  }
  OnShowStats(_) {
    (this.props.onShowStats(_),
      this.setState({
        bSettingsOpen: !this.state.bSettingsOpen,
      }));
  }
  render() {
    let _ = !1,
      _ = !1,
      { video: _, actions: _ } = this.props,
      _,
      _ = [],
      _ = 0,
      _ = (0, _.jsx)(
        `div`,
        {
          className: `settingsMenuSeparator`,
        },
        `separator`,
      );
    if (
      (this.state.bSettingsOpen &&
        ((_ = !0),
        (_ = this.props.video.GetVideoRepresentations()),
        (_ = _.map((_) =>
          (0, _.jsx)(
            _,
            {
              onClick: () => {
                (this.props.video.SetVideoRepresentation(_),
                  this.setState({
                    bSettingsOpen: !this.state.bSettingsOpen,
                  }));
              },
              bChecked: _.selected,
              children: _.displayName,
            },
            _._,
          ),
        )),
        _.push(_),
        _.push(
          (0, _.jsxs)(
            _,
            {
              onClick: this.OnShowStats,
              children: [_(`#Broadcast_VideoContext_ToggleStats`), `	`],
            },
            `statsToggle`,
          ),
        ),
        (_ = 0 - (_.length * 21 + 32))),
      this.state.bSubtitlesOpen)
    ) {
      ((_ = !0),
        (_ = []),
        _.push(
          (0, _.jsx)(
            _,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(null),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              className: `NoSubtitles`,
              bChecked: !1,
              children: _(`#Broadcast_None`),
            },
            `none`,
          ),
        ));
      for (let _ = 0; _ < this.props.video.ListSubtitles().length; _++) {
        let _ = this.props.video.ListSubtitles()[_];
        _.push(
          (0, _.jsx)(
            _,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(_.language),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              bChecked: _.mode === `showing`,
              children: _.label,
            },
            _.language,
          ),
        );
      }
      _ = -292;
    }
    let _ = this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
    return (0, _.jsxs)(`div`, {
      className: `STV_BroadcastSettings`,
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className:
              `videoControlButton` + (_ ? ` ClosedCaptionsActive` : ``),
            onClick: this.OnSubtitlesClick,
            ref: this.m_elSubtitlesButton,
            children: (0, _.jsx)(_, {}),
          }),
        (0, _.jsx)(`div`, {
          className:
            `videoControlButton VideoSettings ` +
            (_ ? ` VideoSettingsOpen` : ``),
          onClick: this.OnVideoControlClick,
          ref: this.bindSettingsButton,
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          video: _,
        }),
        _ &&
          _.map((_) =>
            (0, _.jsx)(
              `div`,
              {
                className: `videoControlButton videoControlFitWidth`,
                children: _,
              },
              _.key,
            ),
          ),
        _ &&
          (0, _.jsx)(`div`, {
            ref: this.BindSettingsPanel,
            className: `STV_BroadcastSettingsPanel`,
            style: {
              left: this.m_SettingsButtonPos[0],
              top: this.m_SettingsButtonPos[1],
              marginTop: _,
            },
            children: (0, _.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: _,
            }),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            ref: this.m_elSubtitlesPanel,
            className: `STV_BroadcastSettingsPanel SubtitlesMenu`,
            style: {
              maxHeight: `260px`,
              left: this.m_SubtitlesButtonPos[0],
              top: this.m_SubtitlesButtonPos[1],
              marginTop: _,
            },
            children: (0, _.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: _,
            }),
          }),
      ],
    });
  }
};
(_([_], _.prototype, `OnVideoControlClick`, null),
  _([_], _.prototype, `OnSubtitlesClick`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `bindSettingsButton`, null),
  _([_], _.prototype, `BindSettingsPanel`, null),
  _([_], _.prototype, `OnShowStats`, null));
var _ = !0,
  _ = class extends _.Component {
    constructor(_) {
      (super(_), _(this));
    }
    k_nHideSliderTimeout = 1500;
    m_bShowSlider = _;
    m_schHideSlider = new _();
    m_bChildDragging = !1;
    m_bMouseOver = !1;
    componentWillUnmount() {
      this.m_schHideSlider.Cancel();
    }
    ToggleMute() {
      let _ = this.props.video,
        _ = _.IsMuted();
      (_.SetMute(!_), _.GetVolume() < 0.01 && _.SetVolume(0.5));
    }
    OnMouseEnter(_) {
      ((this.m_bShowSlider = !0),
        (this.m_bMouseOver = !0),
        this.m_schHideSlider.Cancel());
    }
    OnMouseLeave(_) {
      ((this.m_bMouseOver = !1), this.ScheduleHide());
    }
    OnChildDrag(_) {
      ((this.m_bChildDragging = _), this.ScheduleHide());
    }
    ScheduleHide() {
      this.m_bMouseOver ||
        this.m_bChildDragging ||
        this.m_schHideSlider.Schedule(
          this.k_nHideSliderTimeout,
          () => (this.m_bShowSlider = _),
        );
    }
    render() {
      let _ = this.props.video,
        _ = _.IsMuted(),
        _ = _.GetVolume() * 100,
        _ = `videoControlButton`;
      _ > 65
        ? (_ += ` HighestVolume`)
        : _ > 45
          ? (_ += ` HighVolume`)
          : _ < 46 && _ > 24
            ? (_ += ` MedVolume`)
            : _ < 25 && (_ += ` LowVolume`);
      let _ = `BroadcastVolumeControl`;
      return (
        this.m_bShowSlider && (_ += ` ShowVolumeSlider`),
        _ && (_ += ` muted`),
        (0, _.jsx)(`div`, {
          className: _,
          onMouseEnter: this.OnMouseEnter,
          onMouseLeave: this.OnMouseLeave,
          children: (0, _.jsxs)(`div`, {
            className: `BroadcastVolumeControl_FixedLayout`,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                onClick: this.ToggleMute,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                video: _,
                onDrag: this.OnChildDrag,
              }),
            ],
          }),
        })
      );
    }
  };
(_([_], _.prototype, `m_bShowSlider`, void 0),
  _([_], _.prototype, `ToggleMute`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `OnMouseLeave`, null),
  _([_], _.prototype, `OnChildDrag`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  constructor(_) {
    (super(_), _(this));
  }
  m_elSlider = null;
  m_nVolumeStartOfDrag = 0;
  OnMouseDown(_) {
    let _ = _.currentTarget;
    ((this.m_elSlider = _),
      (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
      this.SetVolumeWithCoord(_, _.clientX),
      _.ownerDocument.defaultView?.addEventListener(
        `mousemove`,
        this.OnMouseMove,
      ),
      _.ownerDocument.defaultView?.addEventListener(`mouseup`, this.OnMouseUp),
      this.props.onDrag(!0));
  }
  OnMouseMove(_) {
    this.m_elSlider && this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
  }
  OnMouseUp(_) {
    if (!this.m_elSlider) return;
    this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
    let _ = this.props.video;
    (_.IsMuted() && _.SetVolume(this.m_nVolumeStartOfDrag),
      this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
        `mousemove`,
        this.OnMouseMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
        `mouseup`,
        this.OnMouseUp,
      ),
      (this.m_nVolumeStartOfDrag = 0),
      (this.m_elSlider = null),
      this.props.onDrag(!1));
  }
  SetVolumeWithCoord(_, _) {
    let _ = _.getBoundingClientRect(),
      _ = _(_, _.left, _.right, 0, 1),
      _ = _(_, 0, 1),
      _ = this.props.video;
    (_.SetMute(_ < 0.01), _.SetVolume(_));
  }
  render() {
    let _ = this.props.video,
      _ = _.GetVolume() * 100;
    _.IsMuted() && (_ = 0);
    let _ = {
        left: `${_}%`,
      },
      _ = {
        width: `${_}%`,
      };
    return (0, _.jsxs)(`div`, {
      className: `BroadcastVolumeSlider`,
      onMouseDown: this.OnMouseDown,
      children: [
        (0, _.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Track`,
        }),
        (0, _.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Fill`,
          style: _,
        }),
        (0, _.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Thumb`,
          style: _,
        }),
      ],
    });
  }
};
(_([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `SetVolumeWithCoord`, null),
  (_ = _([_], _)));
var _ = 3200,
  _ = 15,
  _ = class extends _.Component {
    m_schHideControls = new _();
    m_schUnmountControls = new _();
    m_elVideo = null;
    m_elBroadcastPlayer = null;
    m_bMouseDown = !1;
    m_elMouseDown = null;
    m_listeners = new _();
    constructor(_) {
      (super(_),
        (this.state = {
          bMountControls: !1,
          bControlsVisible: !1,
          bShowStats: !1,
          video: null,
          nResizedHeight: null,
          bFullscreen: !1,
        }));
    }
    StopVideo() {
      let _ = this.state.video;
      _ &&
        (_.StopVideo(_),
        this.setState({
          video: null,
        }),
        this.props.fnSetBroadcastVideo?.(null));
    }
    IsMuted() {
      let _ = this.state.video;
      return !_ || _.IsMuted();
    }
    StopPlaybackTillUserInput() {
      let _ = this.state.video;
      _ && _.StopPlaybackTillUserInput();
    }
    componentDidUpdate(_, _) {
      (!_.bMountControls && this.state.bMountControls
        ? setTimeout(() => {
            this.setState((_) => ({
              bControlsVisible: _.bMountControls,
            }));
          }, 15)
        : _.bControlsVisible &&
          !this.state.bControlsVisible &&
          this.state.video &&
          !this.state.video.IsPaused() &&
          this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
        this.props.steamIDBroadcast !== _.steamIDBroadcast &&
          this.BindVideoRef(this.m_elVideo));
      let _ = this.props.nAppIDVOD;
      _ &&
        (_.strInitialCapsuleImageUrl === void 0 || _.nAppIDVOD != _) &&
        _.Get()
          .QueueAppRequest(_, {
            include_assets: !0,
            include_trailers: !0,
          })
          .then(() => {
            let _ = _.Get().GetApp(_)?.GetAssets()?.GetMainCapsuleURL() || ``;
            this.setState({
              strInitialCapsuleImageUrl: _,
            });
          });
    }
    componentWillUnmount() {
      (this.m_listeners.Unregister(),
        this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.StopVideo());
    }
    BindBroadcastPlayerRef(_) {
      (this.m_listeners.Unregister(),
        (this.m_elBroadcastPlayer = _),
        _ &&
          (this.m_listeners.AddEventListener(
            _,
            `fullscreenchange`,
            this.OnFullscreenChange,
          ),
          this.m_listeners.AddEventListener(
            _,
            `mozfullscreenchange`,
            this.OnFullscreenChange,
          ),
          this.m_listeners.AddEventListener(
            _,
            `webkitfullscreenchange`,
            this.OnFullscreenChange,
          ),
          this.m_listeners.AddEventListener(
            _,
            `msfullscreenchange`,
            this.OnFullscreenChange,
          )));
    }
    BindVideoRef(_) {
      let _ = null;
      (this.StopVideo(),
        this.props.steamIDBroadcast
          ? _ &&
            (_ = _.CreateBroadcastVideo(
              _,
              this.props.steamIDBroadcast,
              this.props.watchLocation,
              !!this.props.bWebRTC,
            ))
          : this.props.broadcastClipID
            ? _ &&
              (_ = _.CreateClipVideo(
                _,
                this.props.broadcastClipID,
                this.props.watchLocation,
              ))
            : this.props.nAppIDVOD &&
              _ &&
              ((_ = _.CreateVODVideo(
                _,
                this.props.nAppIDVOD,
                this.props.watchLocation,
              )),
              this.props.fnOnVideoEnd &&
                _.SetOnVideoCallback(this.props.fnOnVideoEnd)),
        _ &&
          (this.props.bStartMuted && _.SetMute(!0),
          this.props.bStartWithSubtitles && _.SetStartWithSubtitles(!0),
          this.props.bStartPaused ? _.StopPlaybackTillUserInput() : _.Play()),
        this.setState({
          video: _,
        }),
        this.props.fnSetBroadcastVideo?.(_),
        (this.m_elVideo = _));
    }
    OnMouseDown(_) {
      ((this.m_bMouseDown = !0),
        (this.m_elMouseDown = _.currentTarget),
        this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        ));
    }
    OnMouseUp(_) {
      ((this.m_bMouseDown = !1),
        this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
          `mouseup`,
          this.OnMouseUp,
        ),
        this.m_schHideControls.Schedule(_, this.HideControls));
    }
    OnMouseMove(_) {
      (this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.state.bMountControls
          ? this.state.bControlsVisible ||
            this.setState({
              bControlsVisible: !0,
            })
          : this.setState({
              bMountControls: !0,
            }),
        this.m_schHideControls.Schedule(_, this.HideControls));
    }
    OnMouseLeave(_) {
      this.HideControls();
    }
    HideControls() {
      this.state.bControlsVisible &&
        !this.m_bMouseDown &&
        this.setState({
          bControlsVisible: !1,
        });
    }
    UmountControls() {
      this.setState((_) =>
        !_.bControlsVisible && _.bMountControls
          ? {
              bMountControls: !1,
            }
          : null,
      );
    }
    ShowStatsView() {
      let _ = this.state.video;
      _ &&
        (this.state.bShowStats ||
          (this.setState({
            bShowStats: !0,
          }),
          _.SetStatsViewIsVisible(!0)));
    }
    OnContextMenu(_) {
      this.state.bFullscreen ||
        (_(
          (0, _.jsx)(_, {
            children: this.GetContextMenuItems(),
          }),
          _,
        ),
        _.preventDefault());
    }
    ToggleStatsView(_) {
      let _ = !this.state.bShowStats;
      this.setState({
        bShowStats: _,
      });
      let _ = this.state.video;
      _ && _.SetStatsViewIsVisible(_);
    }
    ShowStorePage(_) {
      let _ = this.state.video;
      if (!_ || !this.props.onOpenLinkInNewWindow) return;
      let _ = _.GetBroadcastInfo();
      if (!_) return;
      let _ = _(`${_.STORE_BASE_URL}app/${_.m_strAppId}`);
      (this.props.onOpenLinkInNewWindow(_, _), _.stopPropagation());
    }
    GetContextMenuItems() {
      let _ = [],
        _ = this.state.video;
      if (!_) return _;
      let _ = _.GetBroadcastInfo();
      return (
        _.push(
          (0, _.jsx)(
            _,
            {
              bChecked: this.state.bShowStats,
              onSelected: (_) => {
                this.ToggleStatsView(_);
              },
              children: _(`#Broadcast_VideoContext_ToggleStats`),
            },
            `togglestats`,
          ),
        ),
        _ &&
          _.m_strAppId != `0` &&
          Number.parseInt(_.m_strAppId) != 7 &&
          _.push(
            (0, _.jsx)(
              _,
              {
                onSelected: (_) => {
                  this.ShowStorePage(_);
                },
                children: _(`#Broadcast_VideoContext_OpenStore`),
              },
              `visitstore`,
            ),
          ),
        _
      );
    }
    CloseStats() {
      let _ = this.state.video;
      _ &&
        this.state.bShowStats &&
        (this.setState({
          bShowStats: !1,
        }),
        _.SetStatsViewIsVisible(!1));
    }
    OnToggleFullscreen() {
      this.m_elBroadcastPlayer &&
        (_(this.m_elBroadcastPlayer)
          ? _(this.m_elBroadcastPlayer)
          : _(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
    }
    OnFullscreenChange(_) {
      if (!this.m_elBroadcastPlayer) return;
      let _ = _(this.m_elBroadcastPlayer);
      this.setState({
        bFullscreen: _,
      });
    }
    BHideVideoControls() {
      let _ = this.state.video;
      return !_ || _.GetUserInputNeeded()
        ? !0
        : _.GetBroadcastState(_) == _.Error;
    }
    render() {
      let _ = this.state.video,
        _ = _ && _.IsPaused(),
        _ = _ && _.BHasDASHStats() && this.state.bShowStats,
        _ = !!(_ && _.IsReplay()),
        _ = this.state.bMountControls,
        _ = this.state.bControlsVisible || _,
        _ = !!(_ && _.GetUserInputNeeded()),
        _ = _?.GetDASHPlayerStats(),
        _ = _?.IsBroadcastVOD() && _ && this.state.strInitialCapsuleImageUrl,
        _ = `videoContainer`;
      (_ || (_ += ` HidePlayerControls`),
        _ && (_ += ` VideoPaused`),
        this.state.bFullscreen && (_ += ` fullscreenVideo`),
        this.props.classes && (_ += ` ` + this.props.classes));
      let _ = [];
      (!this.state.bFullscreen &&
        this.props.actions &&
        (_ = _.concat(this.props.actions)),
        !this.state.bFullscreen &&
          this.props.onTheaterMode &&
          _.push(
            (0, _.jsx)(
              `div`,
              {
                onClick: this.props.onTheaterMode,
                title: _(`#Broadcast_View_Theater`),
                className: `BroadcastTheaterToggle`,
              },
              `ChatPosToggle ChatTheaterToggle`,
            ),
          ),
        _.push(
          (0, _.jsx)(
            `div`,
            {
              title: _(`#Broadcast_View_Fullscreen`),
              onClick: this.OnToggleFullscreen,
              className: `BroadcastFullscreenToggle`,
            },
            `FullscreenToggle`,
          ),
        ));
      let _ = _ && !this.BHideVideoControls(),
        _ = _ && !this.state.bFullscreen,
        _ =
          this.props.fnRenderBroadcastContext &&
          this.props.fnRenderBroadcastContext();
      return (0, _.jsxs)(`div`, {
        ref: this.BindBroadcastPlayerRef,
        className: _,
        onMouseMove: this.OnMouseMove,
        onClick: this.OnMouseMove,
        onMouseLeave: this.OnMouseLeave,
        onContextMenu: this.OnContextMenu,
        onMouseDown: this.OnMouseDown,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `_7S2BHWEEG14-`,
              children: _,
            }),
          _ && (0, _.jsx)(_, {}),
          this.props.showVideoBackgroundBlur &&
            this.m_elVideo &&
            (0, _.jsx)(_, {
              className: `videoBlur`,
              elementRef: this.m_elVideo,
              updateRate: 33,
              width: 320,
              height: 180,
              reductionFactor: 10,
              blurAmount: 5,
            }),
          (0, _.jsx)(`video`, {
            className: `videoSrc`,
            ref: this.BindVideoRef,
            muted: this.props.bMuted ?? !0,
            autoPlay: !0,
            playsInline: !0,
            controls: !1,
            onVolumeChange: this.props.fnVolumeChanged,
            onClick: this.props.fnVideoClick,
          }),
          this.props.linkRegions
            ? (0, _.jsx)(_, {
                linkRegions: this.props.linkRegions,
                editMode: !!this.props.editMode,
                onSaveLinkRegions: this.props.onSaveLinkRegions,
              })
            : null,
          this.props.linkElement,
          _ &&
            (0, _.jsx)(`img`, {
              loading: `lazy`,
              className: _(`IEQXsRLxyAI-`, `BroadcastPlaceholderImg`),
              src: this.state.strInitialCapsuleImageUrl,
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              video: _,
              actions: _,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
              onShowStats: this.ToggleStatsView,
              bIncludeClipEditor: !!this.props.bIncludeClipEditor,
            }),
          _ &&
            (0, _.jsx)(_, {
              onClick: this.props.onRequestClose,
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              stats: _,
              closeStats: this.CloseStats,
            }),
          (0, _.jsx)(_, {
            video: _,
          }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              video: _,
            }),
        ],
      });
    }
  };
(_([_], _.prototype, `BindBroadcastPlayerRef`, null),
  _([_], _.prototype, `BindVideoRef`, null),
  _([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseLeave`, null),
  _([_], _.prototype, `HideControls`, null),
  _([_], _.prototype, `UmountControls`, null),
  _([_], _.prototype, `ShowStatsView`, null),
  _([_], _.prototype, `OnContextMenu`, null),
  _([_], _.prototype, `ToggleStatsView`, null),
  _([_], _.prototype, `ShowStorePage`, null),
  _([_], _.prototype, `CloseStats`, null),
  _([_], _.prototype, `OnToggleFullscreen`, null),
  _([_], _.prototype, `OnFullscreenChange`, null),
  (_ = _([_], _)));
var _ = _,
  _ = class extends _.Component {
    render() {
      let { video: _ } = this.props;
      if (!_) return null;
      let _ = _.has_segments;
      return (0, _.jsxs)(`div`, {
        className: `videoControls`,
        children: [
          (0, _.jsx)(_, {
            steamID: this.props.video.GetBroadcastSteamID(),
            bHideThumbnail: !0,
            bVerticalBroadcastChat: !0,
            onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
          }),
          (0, _.jsxs)(`div`, {
            className: `videoControlsBottom` + (_ ? `` : ` noSegments`),
            children: [
              (0, _.jsx)(_, {
                video: _,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              (0, _.jsxs)(`div`, {
                className: `STV_BroadcastController`,
                children: [
                  (0, _.jsx)(`div`, {
                    className: `videoControlsButtons LeftSpacer`,
                  }),
                  (0, _.jsx)(_, {
                    video: _,
                  }),
                  (0, _.jsx)(_, {
                    video: _,
                  }),
                  (0, _.jsx)(_, {
                    video: _,
                    actions: this.props.actions,
                    onShowStats: this.props.onShowStats,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  };
_ = _([_], _);
var _ = class extends _.PureComponent {
    render() {
      return this.props.onClick
        ? (0, _.jsx)(`div`, {
            className: `STV_BroadcastClose`,
            onClick: this.props.onClick,
            children: (0, _.jsx)(_, {}),
          })
        : null;
    }
  },
  _ = class extends _.Component {
    OnJumpBackward() {
      this.props.video.JumpTime(-15);
    }
    OnJumpForward() {
      this.props.video.JumpTime(_);
    }
    render() {
      let _ = this.props.video,
        _ = _.CanSeek();
      return (0, _.jsxs)(`div`, {
        className: `videoControlsButtons PlayControls`,
        children: [
          (0, _.jsx)(_, {
            video: _,
          }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: `videoControlButton videoControlJump controlFlip`,
              onClick: this.OnJumpBackward,
              children: [
                (0, _.jsx)(_, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                (0, _.jsx)(`div`, {
                  className: `jumpAheadValue`,
                  children: _,
                }),
              ],
            }),
          (0, _.jsx)(_, {
            video: _,
          }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: `videoControlButton videoControlJump`,
              onClick: this.OnJumpForward,
              children: [
                (0, _.jsx)(_, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `jumpAheadValue`,
                  children: _,
                }),
              ],
            }),
          _ &&
            (0, _.jsx)(_, {
              video: _,
            }),
        ],
      });
    }
  };
(_([_], _.prototype, `OnJumpBackward`, null),
  _([_], _.prototype, `OnJumpForward`, null));
var _ = _((_) => {
    if (_.video.IsBroadcastClip() || _.video.IsBroadcastVOD()) return null;
    let _ = (_) => {
        _.video.JumpToLiveEdge();
      },
      _ = _.video.IsOnLiveEdge();
    return (0, _.jsx)(`div`, {
      className: `videoControlsButtons GoLive`,
      children: (0, _.jsxs)(`div`, {
        className:
          `videoControlButton videoControlGoLive` + (_ ? ` isLiveEdge` : ``),
        onClick: _ ? void 0 : _,
        children: [
          (0, _.jsx)(_, {
            bHidePreArrow: !0,
            bHidePostArrow: !0,
            bFlipHorizontal: !1,
          }),
          (0, _.jsx)(`div`, {
            className: `jumpGoLive`,
            children: _(
              _ ? `#DASHPlayerControls_IsLive` : `#DASHPlayerControls_GoLive`,
            ),
          }),
        ],
      }),
    });
  }),
  _ = class extends _.Component {
    OnTogglePlayPause() {
      this.props.video.TogglePlayPause();
    }
    render() {
      let _ = this.props.video.IsPaused();
      return (0, _.jsx)(`div`, {
        className: `videoControlButton buttonPlayPause`,
        onClick: this.OnTogglePlayPause,
        children: _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
      });
    }
  };
(_([_], _.prototype, `OnTogglePlayPause`, null), (_ = _([_], _)));
var _ = class extends _.Component {
  constructor(_) {
    (super(_), _(this), (this.video = _.video));
  }
  componentDidUpdate() {
    this.video = this.props.video;
  }
  video = void 0;
  get has_previous_marker() {
    return this.GetPreviousMarkerTime() !== void 0;
  }
  GetPreviousMarkerTime() {
    let _ = this.video;
    if (!_?.has_markers) return;
    let _ = _.GetTimelineMarkers(),
      _ = _.GetPlaybackTime();
    for (let _ = _.length - 1; _ >= 0; _--)
      if (!(_[_].nTime >= _)) return _[_].nTime;
  }
  OnJumpToPreviousMarkerClicked(_) {
    let _ = this.GetPreviousMarkerTime();
    _ !== void 0 && this.props.video.Seek(_ - 0.2);
  }
  render() {
    let _ = this.props.video.BHasMarkersOrSegments();
    return (0, _.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker controlFlip` +
        (_ ? `` : ` noMarkersOrSegments`) +
        (this.has_previous_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToPreviousMarkerClicked,
      children: (0, _.jsx)(_, {
        bHidePostArrow: !0,
        bFlipHorizontal: !0,
      }),
    });
  }
};
(_([_], _.prototype, `video`, void 0),
  _([_], _.prototype, `has_previous_marker`, null),
  _([_], _.prototype, `OnJumpToPreviousMarkerClicked`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  constructor(_) {
    (super(_), _(this), (this.video = _.video));
  }
  componentDidUpdate() {
    this.video = this.props.video;
  }
  video = void 0;
  get has_next_marker() {
    return this.GetNextMarkerTime() !== void 0;
  }
  GetNextMarkerTime() {
    let _ = this.video;
    if (!_?.has_markers) return;
    let _ = _.GetTimelineMarkers(),
      _ = _.GetPlaybackTime();
    for (let _ = 0; _ < _.length; _++)
      if (!(_[_].nTime <= _)) return _[_].nTime;
  }
  OnJumpToNextMarkerClicked(_) {
    let _ = this.GetNextMarkerTime();
    _ !== void 0 && this.props.video.Seek(_);
  }
  render() {
    let _ = this.props.video.BHasMarkersOrSegments();
    return (0, _.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker` +
        (_ ? `` : ` noMarkersOrSegments`) +
        (this.has_next_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToNextMarkerClicked,
      children: (0, _.jsx)(_, {
        bHidePostArrow: !0,
        bFlipHorizontal: !1,
      }),
    });
  }
};
(_([_], _.prototype, `video`, void 0),
  _([_], _.prototype, `has_next_marker`, null),
  _([_], _.prototype, `OnJumpToNextMarkerClicked`, null),
  (_ = _([_], _)));
var _ = (_) =>
  (0, _.jsx)(`div`, {
    className: `timelineMarker`,
    title: _.label,
    style: {
      left: _.pos + `%`,
    },
    onMouseEnter: () => _.onMouseEnter(_.pos),
    onMouseLeave: _.onMouseLeave,
    onMouseDown: _.onMouseDown ? _.onMouseDown : void 0,
    children: (0, _.jsx)(`div`, {
      className: `timelineMarkerIcon`,
      children: (0, _.jsx)(_, {}),
    }),
  });
function _(_) {
  let _ = _.startPos,
    _ = _.endPos,
    _ = ``,
    _ = 1;
  return (
    _ < 0 && ((_ = (_ - _) / 10), (_ = 0), (_ = ` hideFront`)),
    (0, _.jsxs)(`div`, {
      className: `STV_timelineSegment` + _,
      style: {
        left: _ + `%`,
        width: _ - _ + `%`,
        opacity: _,
      },
      onClick: _.onClick,
      children: [
        (0, _.jsx)(`div`, {
          className: `STV_timelineSegmentFrontFill`,
          style: {
            borderColor: `rgb(` + _.color + `)`,
          },
        }),
        (0, _.jsx)(`div`, {
          className: `STV_timelineSegmentLabel`,
          style: {
            color: `rgb(` + _.color + `)`,
          },
          children: _.label,
        }),
        (0, _.jsx)(`div`, {
          className: `STV_timelineSegmentBackFill`,
          style: {
            borderColor: `rgb(` + _.color + `)`,
          },
        }),
      ],
    })
  );
}
var _ = class extends _.Component {
  m_elSlider = _.createRef();
  m_rectSlider = void 0;
  constructor(_) {
    (super(_),
      (this.state = {
        nGrabberMouseDownTime: 0,
        bGrabberMouseDown: !1,
        nHoverValue: void 0,
        hoverX: 0,
        bStartMouseDown: !1,
        bEndMouseDown: !1,
        thumbnailURL: ``,
      }));
  }
  OnMouseDown(_, _) {
    let _ = this.m_elSlider.current;
    if (_) {
      (_.persist(), (this.m_rectSlider = _.getBoundingClientRect()));
      let _ = {};
      (_ === `start`
        ? ((_ = {
            bStartMouseDown: !0,
          }),
          _.stopPropagation())
        : _ === `end`
          ? ((_ = {
              bEndMouseDown: !0,
            }),
            _.stopPropagation())
          : (_ = {
              bGrabberMouseDown: !0,
            }),
        this.setState(_, () => this.AdjustSliderForClientX(_.clientX)),
        _.ownerDocument.defaultView?.addEventListener(
          `mousemove`,
          this.OnMouseMove,
        ),
        _.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        ));
    }
  }
  OnMouseMove(_) {
    this.AdjustSliderForClientX(_.clientX);
  }
  OnMouseUp(_) {
    (this.state.bStartMouseDown
      ? this.setState({
          bStartMouseDown: !1,
        })
      : this.state.bEndMouseDown
        ? this.setState({
            bEndMouseDown: !1,
          })
        : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
          this.setState({
            bGrabberMouseDown: !1,
            nGrabberMouseDownTime: 0,
          })),
      this.m_elSlider.current &&
        (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
          `mousemove`,
          this.OnMouseMove,
        ),
        this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
          `mouseup`,
          this.OnMouseUp,
        )));
  }
  OnKeyDown(_) {
    _.keyCode == 37
      ? (this.props.video.JumpTime(-15), _.preventDefault())
      : _.keyCode == 39 && (this.props.video.JumpTime(15), _.preventDefault());
  }
  AdjustSliderForClientX(_) {
    let _ = this.m_rectSlider;
    if (!_) return;
    let _ = this.props.video,
      _ = _.GetTimelineStartPos(),
      _ = _.GetTimelineStartPos() + _.GetTimelineDuration(),
      _ = _.GetTimeAtMousePosition(_, _, _, _);
    this.state.bStartMouseDown
      ? (_.m_editorStartTime = _(_, _, _.m_editorEndTime - 5))
      : this.state.bEndMouseDown
        ? (_.m_editorEndTime = _(_, _.m_editorStartTime + 5, _))
        : _ != this.state.nGrabberMouseDownTime &&
          this.setState({
            nGrabberMouseDownTime: _,
          });
  }
  OnMouseHoverMove(_) {
    this.AdjustHoverForClientX(_.clientX);
  }
  OnMouseHoverLeave(_) {
    this.setState({
      hoverX: 0,
    });
  }
  AdjustHoverForClientX(_) {
    let _ = this.props.video,
      _ = _.GetTimelineStartPos(),
      _ = _.GetTimelineStartPos() + _.GetTimelineDuration();
    ((this.m_rectSlider = this.m_elSlider.current?.getBoundingClientRect()),
      this.m_rectSlider &&
        _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _));
  }
  OnSegmentClick(_) {
    this.props.video.Seek(_);
  }
  OnMarkerMouseEnter(_) {
    this.setState({
      nHoverValue: _,
    });
  }
  OnMarkerMouseLeave() {
    this.setState({
      nHoverValue: void 0,
    });
  }
  render() {
    let _ = this.props.video,
      _ = this.state.bGrabberMouseDown,
      _ = _.GetPercentOffsetFromTime(
        this.state.nGrabberMouseDownTime,
        _.Timeline,
      ),
      _ = _.GetPercentOffsetFromTime(_.GetPlaybackTime(), _.Timeline),
      _ = _.GetPercentOffsetFromTime(
        _.GetVideoAvailableStartTime(),
        _.Timeline,
      );
    _ < 0.05 && (_ = 0);
    let _ = _(_, 0, 100).toFixed(1) + `%`,
      _ = _(_, 0, 100).toFixed(1) + `%`,
      _ = _(_, 0, 100).toFixed(1) + `%`,
      _ = {},
      _ = {},
      _ = {},
      _ = {};
    _
      ? ((_.left = _), (_.width = _), (_.width = _), (_.width = _))
      : ((_.left = _), (_.width = _), (_.width = _));
    let _ = _(_.GetPlaybackTime()),
      _ = _(this.state.nHoverValue ?? 0),
      _ = `STV_timelineContainer`;
    (this.state.bGrabberMouseDown && (_ += ` grabberDown`),
      _.IsTimelineMapActive() && (_ += ` minimapActive`));
    let _ = ``;
    ((_ = _ ? _ : _),
      _ > 100
        ? (_ = ` grabberOffScreenRight grabberOffscreen`)
        : _ < 0 && (_ = ` grabberOffScreenLeft grabberOffscreen`));
    let _ = [];
    _.GetTimelineMarkers().forEach((_, _) => {
      let _ = _.GetPercentOffsetFromTime(_.nTime, _.Timeline);
      _ < 0 ||
        _ > 100 ||
        _.push(
          (0, _.jsx)(
            _,
            {
              pos: _,
              label: _.strTemplateName,
              onMouseEnter: this.OnMarkerMouseEnter,
              onMouseLeave: this.OnMarkerMouseLeave,
            },
            _,
          ),
        );
    });
    let _ = [];
    _.GetTimelineSegments().forEach((_, _) => {
      let _ = _.GetPercentOffsetFromTime(_.nTimeStart, _.Timeline);
      if (_ > 100) return;
      let _ = _.GetPercentOffsetFromTime(_.nTimeEnd, _.Timeline);
      _ < 0 ||
        _.push(
          (0, _.jsx)(
            _,
            {
              startPos: _,
              endPos: _,
              label: _.strTemplateName,
              color: _.color,
              onClick: (_) => this.OnSegmentClick(_.nTimeStart),
            },
            _,
          ),
        );
    });
    let _ = _.GetPercentOffsetFromTime(_.m_editorStartTime, _.Timeline),
      _ = _.GetPercentOffsetFromTime(_.m_editorEndTime, _.Timeline),
      _ = this.props.bIncludeClipEditor
        ? [
            (0, _.jsx)(
              _,
              {
                pos: _,
                label: _(`#DASHPlayerControls_Start`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (_) => this.OnMouseDown(_, `start`),
              },
              `start`,
            ),
            (0, _.jsx)(
              _,
              {
                pos: _,
                label: _(`#DASHPlayerControls_End`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (_) => this.OnMouseDown(_, `end`),
              },
              `end`,
            ),
          ]
        : [];
    return (0, _.jsx)(`div`, {
      className: `videoTimelineMain`,
      tabIndex: 0,
      onKeyDown: this.OnKeyDown,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: `DialogLabel`,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: `STV_timelineSegmentsContainer`,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            onMouseDown: this.OnMouseDown,
            onMouseMove: this.OnMouseHoverMove,
            onMouseLeave: this.OnMouseHoverLeave,
            ref: this.m_elSlider,
            children: (0, _.jsxs)(`div`, {
              className: `VideoTimelineSlider`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `STV_timelineValue`,
                  style: _,
                }),
                (0, _.jsx)(`div`, {
                  className: `STV_timelineGhostValue`,
                  style: _,
                }),
                (0, _.jsx)(`div`, {
                  className: `STV_timelineNoVideo`,
                  style: _,
                }),
                _,
                _,
                !!this.state.hoverX &&
                  (0, _.jsx)(
                    `div`,
                    {
                      style: {
                        position: `absolute`,
                        left: this.state.hoverX - 75,
                        bottom: `30px`,
                      },
                      children: (0, _.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          display: `flex`,
                          justifyContent: `center`,
                        },
                        children: [
                          this.state.thumbnailURL &&
                            (0, _.jsx)(`img`, {
                              style: {
                                width: `150px`,
                              },
                              src: this.state.thumbnailURL,
                            }),
                          (0, _.jsx)(`span`, {
                            className: `STV_timelineGrabberValue`,
                            style: {
                              position: `absolute`,
                              bottom: `4px`,
                            },
                            children: _,
                          }),
                        ],
                      }),
                    },
                    `grabbertime`,
                  ),
                (0, _.jsx)(`div`, {
                  className: `STV_timelineGrabber_Wrapper`,
                  style: _,
                  children: (0, _.jsx)(`div`, {
                    className: `STV_timelineGrabber` + _,
                    children: (0, _.jsx)(`div`, {
                      className: `STV_timelineGrabberArrow`,
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
(_([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnMouseHoverMove`, null),
  _([_], _.prototype, `OnMouseHoverLeave`, null),
  _([_], _.prototype, `AdjustHoverForClientX`, null),
  _([_], _.prototype, `OnSegmentClick`, null),
  _([_], _.prototype, `OnMarkerMouseEnter`, null),
  _([_], _.prototype, `OnMarkerMouseLeave`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  state = {
    info: null,
  };
  static getDerivedStateFromProps(_, _) {
    return (!_.info || _.info.m_steamIDBroadcast !== _.steamID) &&
      ((_.info &&= (_.StopInfo(_.info), null)), _.steamID)
      ? {
          info: _.StartInfo(_.steamID),
        }
      : null;
  }
  componentWillUnmount() {
    this.state.info && _.StopInfo(this.state.info);
  }
  RenderStreamSwitcher() {
    let _ = this.props.steamID,
      _ = this.props.onLocalStreamChange;
    return _ && _.stream[_]
      ? (0, _.jsx)(_, {
          value: _,
          options: _.stream,
          onChange: _,
        })
      : null;
  }
  render() {
    let { info: _ } = this.state;
    if (!_) return null;
    let _ = ``;
    _.m_nViewerCount && (_ = _(_.m_nViewerCount));
    let _ = _.bValid && _.stream && _.stream[_.m_steamIDBroadcast],
      _ =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        (parseInt(_.m_strAppId) > 0 || _),
      _ =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        _ &&
        _.gidEvent;
    return (0, _.jsxs)(`div`, {
      className: `BroadcastDetails`,
      children: [
        !this.props.bHideThumbnail &&
          (0, _.jsx)(_, {
            className: `broadcastDetailsThumbBlur`,
            src: _.m_strThumbnailUrl,
            draggable: !1,
            duration: 2500,
          }),
        (0, _.jsxs)(`div`, {
          className: `BroadcastDetailsHeader`,
          children: [
            _ &&
              _.m_strAppTitle &&
              (0, _.jsxs)(`div`, {
                className: `displayColumn`,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `Info`,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: `AppTitle`,
                        children: _.m_strAppTitle,
                      }),
                      _.m_strTitle &&
                        (0, _.jsxs)(`span`, {
                          className: `BroadcastTitle`,
                          children: [`\xA0- `, _.m_strTitle],
                        }),
                      this.props.onLocalStreamChange &&
                        this.RenderStreamSwitcher(),
                    ],
                  }),
                  _ &&
                    (0, _.jsxs)(`div`, {
                      className: `BroadcastDetailsHeader_ViewerCount`,
                      children: [
                        (0, _.jsx)(_, {}),
                        _(`#Broadcast_ViewerCount`, _),
                      ],
                    }),
                ],
              }),
            _ &&
              this.props.onOpenLinkInNewWindow &&
              (0, _.jsx)(`div`, {
                className: `Actions`,
                children: (0, _.jsx)(`div`, {
                  onClick: (_) => this.props.onOpenLinkInNewWindow?.(_, _.link),
                  className: `BroadcastLink`,
                  children: _.linkName,
                }),
              }),
          ],
        }),
        _ &&
          (0, _.jsx)(_, {
            gidEvent: _.gidEvent,
          }),
        _ &&
          (0, _.jsx)(_, {
            _:
              _.bValid && _.stream && _.stream[_.m_steamIDBroadcast]
                ? _.appID
                : parseInt(_.m_strAppId),
            type: `game`,
            bPreferAssetWithoutOverride: !1,
          }),
      ],
    });
  }
};
_ = _([_], _);
var _ = class extends _.Component {
  showContextMenu(_) {
    let { options: _, value: _, onChange: _ } = this.props,
      _ = Object.keys(_).map((_) =>
        (0, _.jsx)(
          _,
          {
            onSelected: () => _(_),
            bChecked: _ === _,
            children: _(_[_]),
          },
          _,
        ),
      );
    _(
      (0, _.jsx)(_, {
        children: _,
      }),
      _,
    );
  }
  render() {
    let { value: _, options: _ } = this.props,
      _ = _[_];
    return (0, _.jsxs)(`div`, {
      className: `BroadcastLanguage`,
      onClick: this.showContextMenu,
      children: [
        (0, _.jsxs)(`span`, {
          children: [`\xA0- `, _(_)],
        }),
        (0, _.jsx)(`div`, {
          className: `ContextMenuButton`,
          children: (0, _.jsx)(_, {}),
        }),
      ],
    });
  }
};
_([_], _.prototype, `showContextMenu`, null);
var _ = class extends _.Component {
  constructor(_) {
    (super(_),
      (this.state = {
        sizableRegion: [],
      }));
  }
  async AddLinkRegion() {
    let _ = this.state.sizableRegion.length;
    (this.state.sizableRegion.push({
      xPosPct: 2.5 + _,
      yPosPct: 2.5 + _,
      widthPct: 20,
      heightPct: 15,
    }),
      this.setState(
        {
          sizableRegion: this.state.sizableRegion,
        },
        () => this.OnSaveRegions(),
      ));
  }
  componentDidUpdate(_) {
    _.linkRegions.length == 0 &&
      this.props.linkRegions.forEach((_, _) => {
        this.LoadLinkRegion(_, _);
      });
  }
  async LoadLinkRegion(_, _) {
    (this.state.sizableRegion.length,
      this.state.sizableRegion.push({
        xPosPct: _.left,
        yPosPct: _.top,
        widthPct: _.width,
        heightPct: _.height,
        link_url: _.url,
        link_description: _.link_description,
        link_index: _.link_index,
      }),
      await this.setState({
        sizableRegion: this.state.sizableRegion,
      }));
  }
  OnSaveRegions() {
    let _ = {
      links: [],
    };
    for (let _ = 0; _ < this.state.sizableRegion.length; _++) {
      let _;
      ((_ = {
        left: Math.floor(this.state.sizableRegion[_].xPosPct * 100),
        top: Math.floor(this.state.sizableRegion[_].yPosPct * 100),
        width: Math.floor(this.state.sizableRegion[_].widthPct * 100),
        height: Math.floor(this.state.sizableRegion[_].heightPct * 100),
        url: this.state.sizableRegion[_].link_url,
        link_description: this.state.sizableRegion[_].link_description,
        link_index: _,
      }),
        _.links.push(_));
    }
    this.props.onSaveLinkRegions?.(_);
  }
  async DeleteRegion(_) {
    (this.state.sizableRegion.splice(_, 1),
      console.log(`keys: `, this.state.sizableRegion.keys),
      this.setState(
        {
          sizableRegion: this.state.sizableRegion,
        },
        () => this.OnSaveRegions(),
      ));
  }
  async UpdatePanel(_, _) {
    let _ = [...this.state.sizableRegion];
    ((_[_] = _),
      this.setState(
        {
          sizableRegion: _,
        },
        () => this.OnSaveRegions(),
      ));
  }
  render() {
    return (0, _.jsxs)(`div`, {
      className: `LinkOverlayContainer`,
      children: [
        (0, _.jsxs)(`div`, {
          className: `LinkOverlayValidRegion`,
          children: [
            !this.props.editMode && this.props.linkRegions
              ? this.props.linkRegions.map((_) => {
                  let _ = _(_.url);
                  return (0, _.jsx)(
                    _,
                    {
                      href: _.url,
                      bForceExternal: _,
                      bUseLinkFilter: _,
                      children: (0, _.jsx)(`div`, {
                        className: `LinkRegion`,
                        style: {
                          left: _.left + `%`,
                          top: _.top + `%`,
                          width: _.width + `%`,
                          height: _.height + `%`,
                        },
                        children: (0, _.jsxs)(`div`, {
                          className: `LinkRegionText`,
                          children: [_.link_description, ` `],
                        }),
                      }),
                    },
                    _.link_index,
                  );
                })
              : null,
            this.props.editMode &&
              this.state.sizableRegion.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    index: _,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: _.xPosPct,
                    yPosPct: _.yPosPct,
                    widthPct: _.widthPct,
                    heightPct: _.heightPct,
                    link_url: _.link_url,
                    link_description: _.link_description,
                  },
                  _ * 100 + _.xPosPct,
                ),
              ),
            this.props.editMode &&
              (0, _.jsx)(`div`, {
                className: `AddLinkRegion`,
                onClick: this.AddLinkRegion,
                children: _(`#SteamTV_AddLinkRegion`),
              }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: `LinkOverlayInvalidRegion`,
          children: (0, _.jsx)(`div`, {
            children: _(`#SteamTV_LinkRegionReserved`),
          }),
        }),
      ],
    });
  }
};
(_([_], _.prototype, `AddLinkRegion`, null),
  _([_], _.prototype, `LoadLinkRegion`, null),
  _([_], _.prototype, `OnSaveRegions`, null),
  _([_], _.prototype, `DeleteRegion`, null),
  _([_], _.prototype, `UpdatePanel`, null),
  (_ = _([_], _)));
export { _ as default };

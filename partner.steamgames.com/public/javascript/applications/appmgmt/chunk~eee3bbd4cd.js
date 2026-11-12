/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  A as e,
  At as t,
  C as n,
  E as r,
  Et as i,
  Gt as a,
  Jt as o,
  Kt as s,
  P as c,
  S as l,
  Ut as u,
  W as d,
  Wt as f,
  X as p,
  Xt as m,
  Yt as h,
  Zt as ee,
  a as g,
  bt as _,
  c as te,
  en as ne,
  it as v,
  j as re,
  pt as ie,
  qt as y,
  rt as b,
  sn as ae,
  vt as oe,
  wt as x,
  yt as se,
} from "./chunk~de7f2df91c.js";
import {
  $ as ce,
  It as S,
  Rt as le,
  Y as ue,
  Z as de,
  ft as fe,
  gt as pe,
  ht as C,
  pt as me,
} from "./chunk~25a6634263.js";
import {
  Bn as he,
  Cn as ge,
  Dn as _e,
  Ki as ve,
  Qi as ye,
  Un as be,
  Vn as xe,
  Wr as w,
  Xn as Se,
  Xr as Ce,
  Yr as we,
  Zn as Te,
  _r as Ee,
  ca as De,
  ei as Oe,
  ha as ke,
  ni as Ae,
  qi as je,
  ti as Me,
  ua as T,
  wr as Ne,
  zn as Pe,
} from "./chunk~1fa4b8f2ff.js";
import { C as E, S as Fe, x as Ie, y as Le } from "./chunk~44f252525d.js";
import { t as Re } from "./chunk~9aa05d2c7d.js";
import { _ as ze } from "./chunk~e70aabe4d7.js";
import { n as Be, r as Ve } from "./chunk~90b9831ad2.js";
import { t as He } from "./chunk~aae8417744.js";
import { o as Ue } from "./chunk~fc8a9e4879.js";
import { n as We } from "./chunk~9d71b14b50.js";
import { t as Ge } from "./chunk~f4e4ed5c17.js";
import { t as Ke } from "./chunk~c55709d290.js";
import { t as qe } from "./chunk~eefd71512b.js";
import { o as Je } from "./chunk~8ceeb46076.js";
import {
  a as Ye,
  c as D,
  l as Xe,
  n as Ze,
  o as Qe,
  s as O,
  t as $e,
} from "./chunk~b980797e15.js";
import { t as et } from "./chunk~3f4314f3b4.js";
import { r as tt, t as nt } from "./chunk~70c16cc80c.js";
import { t as rt } from "./chunk~3ee5188744.js";
import { t as it } from "./chunk~874b4cd3a1.js";
import { t as at } from "./chunk~3720b337f3.js";
import { t as ot } from "./chunk~9a3ef4764b.js";
var k = ae(t());
function st(e, t) {
  var n = function (e) {
      return t && (0, k.isValidElement)(e) ? t(e) : e;
    },
    r = Object.create(null);
  return (
    e &&
      k.Children.map(e, function (e) {
        return e;
      }).forEach(function (e) {
        r[e.key] = n(e);
      }),
    r
  );
}
function ct(e, t) {
  ((e ||= {}), (t ||= {}));
  function n(n) {
    return n in t ? t[n] : e[n];
  }
  var r = Object.create(null),
    i = [];
  for (var a in e) a in t ? i.length && ((r[a] = i), (i = [])) : i.push(a);
  var o,
    s = {};
  for (var c in t) {
    if (r[c])
      for (o = 0; o < r[c].length; o++) {
        var l = r[c][o];
        s[r[c][o]] = n(l);
      }
    s[c] = n(c);
  }
  for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
  return s;
}
function A(e, t, n) {
  return n[t] == null ? e.props[t] : n[t];
}
function lt(e, t) {
  return st(e.children, function (n) {
    return (0, k.cloneElement)(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: A(n, `appear`, e),
      enter: A(n, `enter`, e),
      exit: A(n, `exit`, e),
    });
  });
}
function ut(e, t, n) {
  var r = st(e.children),
    i = ct(t, r);
  return (
    Object.keys(i).forEach(function (a) {
      var o = i[a];
      if ((0, k.isValidElement)(o)) {
        var s = a in t,
          c = a in r,
          l = t[a],
          u = (0, k.isValidElement)(l) && !l.props.in;
        c && (!s || u)
          ? (i[a] = (0, k.cloneElement)(o, {
              onExited: n.bind(null, o),
              in: !0,
              exit: A(o, `exit`, e),
              enter: A(o, `enter`, e),
            }))
          : !c && s && !u
            ? (i[a] = (0, k.cloneElement)(o, { in: !1 }))
            : c &&
              s &&
              (0, k.isValidElement)(l) &&
              (i[a] = (0, k.cloneElement)(o, {
                onExited: n.bind(null, o),
                in: l.props.in,
                exit: A(o, `exit`, e),
                enter: A(o, `enter`, e),
              }));
      }
    }),
    i
  );
}
var dt =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  ft = {
    component: `div`,
    childFactory: function (e) {
      return e;
    },
  },
  pt = (function (e) {
    Le(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this;
      return (
        (r.state = {
          contextValue: { isMounting: !0 },
          handleExited: r.handleExited.bind(He(r)),
          firstRender: !0,
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        ((this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (e, t) {
        var n = t.children,
          r = t.handleExited;
        return {
          children: t.firstRender ? lt(e, r) : ut(e, n, r),
          firstRender: !1,
        };
      }),
      (n.handleExited = function (e, t) {
        var n = st(this.props.children);
        e.key in n ||
          (e.props.onExited && e.props.onExited(t),
          this.mounted &&
            this.setState(function (t) {
              var n = Fe({}, t.children);
              return (delete n[e.key], { children: n });
            }));
      }),
      (n.render = function () {
        var e = this.props,
          t = e.component,
          n = e.childFactory,
          r = Ie(e, [`component`, `childFactory`]),
          i = this.state.contextValue,
          a = dt(this.state.children).map(n);
        return (
          delete r.appear,
          delete r.enter,
          delete r.exit,
          t === null
            ? k.createElement(Ve.Provider, { value: i }, a)
            : k.createElement(
                Ve.Provider,
                { value: i },
                k.createElement(t, r, a),
              )
        );
      }),
      t
    );
  })(k.Component);
((pt.propTypes = {}), (pt.defaultProps = ft));
var j = ae(Ge()),
  mt = (function (e) {
    return (
      (e[(e.Chat = 0)] = `Chat`),
      (e[(e.Notification = 1)] = `Notification`),
      (e[(e.Error = 2)] = `Error`),
      e
    );
  })({}),
  ht = class {};
(b.CHAT_BASE_URL + ``, b.CHAT_BASE_URL + ``);
var M = class {
  bValid = !1;
  stream = { 0: `#Broadcast_EnglishMain` };
  name = ``;
  appName = ``;
  appID = 0;
  link = ``;
  linkName = ``;
  tabIcon = ``;
  offlineImage = ``;
  gidEvent = ``;
  constructor(e) {
    (l(this), this.init(e));
  }
  init(e) {
    ((this.bValid = e.bValid),
      (this.stream = e.stream),
      (this.name = e.name),
      (this.appName = e.appName ?? ``),
      (this.appID = e.appID),
      (this.link = e.link),
      (this.linkName = e.linkName),
      (this.tabIcon = e.tabIcon ?? ``),
      (this.offlineImage = e.offlineImage),
      (this.gidEvent = e.gidEvent ?? ``));
  }
};
(e([n], M.prototype, `bValid`, void 0),
  e([n], M.prototype, `stream`, void 0),
  e([n], M.prototype, `name`, void 0),
  e([n], M.prototype, `appName`, void 0),
  e([n], M.prototype, `appID`, void 0),
  e([n], M.prototype, `link`, void 0),
  e([n], M.prototype, `linkName`, void 0),
  e([n], M.prototype, `tabIcon`, void 0),
  e([n], M.prototype, `offlineImage`, void 0),
  e([n], M.prototype, `gidEvent`, void 0));
var N = new M({
  bValid: !1,
  stream: { 0: `#Broadcast_EnglishMain` },
  name: ``,
  appName: ``,
  appID: 0,
  link: ``,
  linkName: ``,
  tabIcon: ``,
  offlineImage: ``,
});
function gt(e, t, n) {
  return [e, t, n];
}
var P = class extends Error {},
  _t = class extends ht {
    m_appid;
    constructor(e) {
      (super(), (this.m_appid = e || 0));
    }
    GetAppID() {
      return this.m_appid;
    }
    parseColor(e) {
      if (typeof e != `string` || !e.match(/^#[0-9a-fA-F]{6}$/))
        throw new P(`expected color string`);
      return [
        parseInt(e.substring(1, 3), 16),
        parseInt(e.substring(3, 5), 16),
        parseInt(e.substring(5, 7), 16),
      ];
    }
    parseString(e) {
      if (typeof e == `string`) return e;
      throw new P(`expected string`);
    }
    parseNumber(e) {
      if (typeof e == `number`) return e;
      throw new P(`expected number`);
    }
    parseDate(e) {
      if (typeof e == `number`) return new Date(e);
      throw new P(`expected timestamp`);
    }
    parseArray(e, t) {
      let n = [];
      if (typeof e != `object` || !Array.isArray(e))
        throw new P(`expected array`);
      let r = e.length;
      for (let i = 0; i < r; ++i)
        try {
          n.push(t(e[i]));
        } catch (e) {
          throw (
            e instanceof Error &&
              (e.message +=
                `
...while parsing array element ` + i),
            e
          );
        }
      return n;
    }
    parseDict(e, t) {
      let n = new Map();
      if (typeof e != `object` || Array.isArray(e))
        throw new P(`expected object`);
      for (let r in e)
        try {
          n.set(r, t(e[r]));
        } catch (e) {
          throw (
            e instanceof Error &&
              (e.message +=
                `
...while parsing dictionary element ` + r),
            e
          );
        }
      return n;
    }
    parseBracket(e) {
      let t = {
        name: this.parseString(e.name),
        start: this.parseDate(e.start),
        color: [255, 0, 255],
      };
      return (
        `params` in e &&
          (t.params = this.parseDict(e.params, this.parseString.bind(this))),
        `end` in e && (t.end = this.parseDate(e.end)),
        `color` in e && (t.color = this.parseColor(e.color)),
        t
      );
    }
    parseMarker(e) {
      let t = { time: this.parseDate(e.time), color: [0, 255, 255] };
      return (
        `name` in e && (t.name = this.parseString(e.name)),
        `params` in e &&
          (t.params = this.parseDict(e.params, this.parseString.bind(this))),
        `color` in e && (t.color = this.parseColor(e.color)),
        t
      );
    }
    parseSoundTrack(e) {
      let t = {};
      return (
        `song_title` in e && (t.song_title = this.parseString(e.song_title)),
        `appid` in e && (t.appid = this.parseNumber(e.appid)),
        `song_index` in e && (t.song_index = this.parseNumber(e.song_index)),
        t
      );
    }
    parseBroadcastGameData(e) {
      let t = { appid: 0, brackets: [], markers: [] };
      return (
        `appid` in e && (t.appid = this.parseNumber(e.appid)),
        `brackets` in e &&
          (t.brackets = this.parseArray(
            e.brackets,
            this.parseBracket.bind(this),
          )),
        `markers` in e &&
          (t.markers = this.parseArray(e.markers, this.parseMarker.bind(this))),
        `soundtrack` in e &&
          (t.soundtrack = this.parseSoundTrack(e.soundtrack)),
        t
      );
    }
    convertTime(e, t) {
      return e - t / 1e3;
    }
    UpdateMarkers(e, t) {
      let n = [],
        r = [];
      for (let i of e)
        i.persistent
          ? (r.length > 0 &&
              (r[r.length - 1].nTimeEnd = this.convertTime(i.Timestamp, t)),
            i.name.length > 0 &&
              r.push({
                strTemplateName: i.name,
                nTimeStart: this.convertTime(i.Timestamp, t),
                nTimeEnd: -1,
                color: gt(i.color_r, i.color_g, i.color_b),
              }))
          : n.push({
              strTemplateName: i.name,
              nTime: this.convertTime(i.Timestamp, t),
              color: gt(i.color_r, i.color_g, i.color_b),
            });
      return { rgMarkers: n, rgSegments: r };
    }
    UpdateRegions(e) {
      let t = [];
      for (let n of e)
        t.push({
          strTemplateName: n.name,
          min: { x: n.min_x, y: n.min_y },
          max: { x: n.max_x, y: n.max_y },
          behavior: n.behavior,
        });
      return t;
    }
    UpdateSoundtrack(e, t) {}
  },
  vt = 250,
  yt = 250,
  F = class {
    m_elVideo;
    m_peerConnection = null;
    m_strBroadcastSteamID = ``;
    m_ulWebRTCSessionID = ``;
    m_schCandidateTimer = new C();
    m_nHostCandidateGeneration = 0;
    m_nCandidateUpdateIntervalMS = 0;
    m_listeners = new pe();
    m_bFirstPlay = !0;
    m_bStatsViewVisible = !1;
    m_schCaptureDisplayStatsTrigger = new C();
    m_stats = new Qe();
    constructor(e) {
      (l(this), (this.m_elVideo = e));
    }
    async PlayMPD(e, t, n) {}
    async PlayWebRTC(e, t, n, r, i) {
      ((this.m_strBroadcastSteamID = e),
        (this.m_ulWebRTCSessionID = n),
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
      let a = {
          iceServers: [
            { urls: [`stun:` + r] },
            { urls: [`turn:` + r], username: t, credential: n },
          ],
          iceTransportPolicy: `relay`,
        },
        o = new RTCPeerConnection(a);
      ((this.m_peerConnection = o),
        (o.oniceconnectionstatechange = ((e) => {
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
        (o.onicecandidate = ((e) => {
          if (e.candidate) {
            let t = new FormData();
            (t.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
              t.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
              t.append(`sdp_mid`, String(e.candidate.sdpMid)),
              t.append(`sdp_mline_index`, String(e.candidate.sdpMLineIndex)),
              t.append(`candidate`, e.candidate.candidate),
              j.default
                .post(
                  `${b.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`,
                  t,
                )
                .then((e) => {
                  let t = e.data;
                  (t.success && t.success == 1) ||
                    console.log(
                      `Failed to add a WebRTC session ICE candidate: ` +
                        String(t.success),
                    );
                })
                .catch((e) =>
                  console.log(
                    `Failed to add a WebRTC session ICE candidate` + e,
                  ),
                ));
          }
        }).bind(this)),
        (o.ontrack = ((e) => {
          e.track.kind === `video` &&
            ((this.m_elVideo.src = ``),
            (this.m_elVideo.srcObject = e.streams[0]),
            this.Play());
        }).bind(this)),
        o.setRemoteDescription({ type: `offer`, sdp: i }).then(async () => {
          await o.setLocalDescription(await o.createAnswer());
          let e = new FormData();
          (e.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
            e.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
            e.append(`answer`, o.localDescription?.sdp ?? ``));
          try {
            await j.default
              .post(`${b.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`, e)
              .then((e) => {
                let t = e.data;
                if (!(t.success && t.success == 1))
                  throw Error(String(t.success));
              });
          } catch (e) {
            (console.log(`Failed to set the WebRTC session answer: ` + e),
              this.OnWebRTCConnectionRetry());
            return;
          }
          ((this.m_nCandidateUpdateIntervalMS = vt),
            this.m_schCandidateTimer.Schedule(
              this.m_nCandidateUpdateIntervalMS,
              () => this.GetHostCandidates(),
            ));
        }));
    }
    async GetHostCandidates() {
      let e = new FormData();
      (e.append(`broadcaststeamid`, this.m_strBroadcastSteamID),
        e.append(`webrtc_session_id`, this.m_ulWebRTCSessionID),
        e.append(
          `candidate_generation`,
          String(this.m_nHostCandidateGeneration),
        ));
      try {
        await j.default
          .post(`${b.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`, e)
          .then((e) => {
            let t = e.data,
              n = t.data,
              r = this.m_peerConnection;
            if (t.success && t.success == 1)
              r && n.candidate_generation > this.m_nHostCandidateGeneration
                ? (n.candidates.forEach((e) => {
                    let t = new RTCIceCandidate({
                      sdpMid: e.sdp_mid,
                      sdpMLineIndex: e.sdp_mline_index,
                      candidate: e.candidate,
                    });
                    r.addIceCandidate(t).catch((e) => console.error(e));
                  }),
                  (this.m_nHostCandidateGeneration = n.candidate_generation))
                : this.m_nHostCandidateGeneration > 0 &&
                  (this.m_nCandidateUpdateIntervalMS *= 2);
            else throw Error(String(t.success));
          });
      } catch (e) {
        (console.log(`Failed to get WebRTC session ICE candidates` + e),
          this.OnWebRTCConnectionRetry());
        return;
      }
      this.m_schCandidateTimer.Schedule(this.m_nCandidateUpdateIntervalMS, () =>
        this.GetHostCandidates(),
      );
    }
    DispatchEvent(e, t = null) {
      let n = new CustomEvent(e, { cancelable: !0, bubbles: !0, detail: t });
      this.m_elVideo.dispatchEvent(n);
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
      let e = this.m_bFirstPlay;
      this.m_bFirstPlay = !1;
      let t = !1,
        n = () => {
          ((t = !0),
            this.m_stats
              .GetFPSMonitor()
              .StartTracking(() =>
                this.m_stats.ExtractFrameInfo(this.m_elVideo),
              ));
        };
      try {
        (await this.m_elVideo.play(), n());
      } catch (e) {
        e instanceof DOMException && e.name;
      }
      !t && e && this.DispatchEvent(`valve-userinputneeded`);
    }
    Pause() {
      this.m_elVideo.pause();
    }
    CanSeek() {
      return !1;
    }
    SeekAndPlay(e) {
      return (this.Play(), 0);
    }
    Seek(e) {
      return 0;
    }
    JumpTime(e) {
      return 0;
    }
    IsMuted() {
      return this.m_elVideo.muted;
    }
    SetMuted(e) {
      this.m_elVideo.muted = e;
    }
    SetVolume(e) {
      ((e = x(e, 0, 1)), (this.m_elVideo.volume = e));
    }
    GetVolume() {
      return this.m_elVideo.volume;
    }
    GetDASHPlayerStats() {
      return this.m_stats;
    }
    SetStatsViewIsVisible(e) {
      (e && !this.m_bStatsViewVisible
        ? (this.CaptureStatsForDisplay(),
          this.m_schCaptureDisplayStatsTrigger.Schedule(
            yt,
            this.CaptureStatsForDisplay,
          ))
        : !e &&
          this.m_bStatsViewVisible &&
          this.m_schCaptureDisplayStatsTrigger.Cancel(),
        (this.m_bStatsViewVisible = e));
    }
    CaptureStatsForDisplay() {
      (this.m_stats.SetHTMLVideoPlayerDisplay(
        this.m_elVideo.videoWidth,
        this.m_elVideo.videoHeight,
        this.m_elVideo.clientWidth,
        this.m_elVideo.clientHeight,
      ),
        this.m_schCaptureDisplayStatsTrigger.Schedule(
          yt,
          this.CaptureStatsForDisplay,
        ));
    }
    OnVideoPause(e) {
      this.m_stats.GetFPSMonitor().Close();
    }
    OnVideoResize(e) {
      this.m_stats.GetFPSMonitor().SetWindowResized();
    }
    GetVideoRepresentations() {
      let e = [];
      return (e.push({ id: Ye, displayName: `Auto`, selected: !0 }), e);
    }
    SetVideoRepresentation(e) {}
    IsLiveContent() {
      return !0;
    }
    BHasTimedText() {
      return !1;
    }
  };
(e([S], F.prototype, `PlayWebRTC`, null),
  e([g.bound], F.prototype, `CaptureStatsForDisplay`, null),
  e([S], F.prototype, `OnVideoPause`, null),
  e([S], F.prototype, `OnVideoResize`, null));
var I = ae(ee(), 1),
  bt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_id || u(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_id: { n: 1, br: s.readUint64String, bw: m.writeUint64String },
            client_cellid: { n: 2, br: s.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Request`;
    }
  },
  xt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_id || u(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_id: { n: 1, br: s.readUint64String, bw: m.writeUint64String },
            video_url: { n: 2, br: s.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_ClientGetVideoURL_Response`;
    }
  },
  St = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.encryption_key || u(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            encryption_key: { n: 1, br: s.readBytes, bw: m.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_UnlockedH264_Notification`;
    }
  },
  Ct = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || u(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: s.readUint32, bw: m.writeUint32 },
            client_cellid: { n: 2, br: s.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Request`;
    }
  },
  wt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || u(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: s.readUint32, bw: m.writeUint32 },
            opf_settings: { n: 2, br: s.readString, bw: m.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFovasVideo_ClientGetOPFSettings_Response`;
    }
  },
  L = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || u(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: s.readUint32, bw: m.writeUint32 },
            playback_position_in_seconds: {
              n: 2,
              br: s.readUint32,
              bw: m.writeUint32,
            },
            video_track_id: {
              n: 3,
              br: s.readUint64String,
              bw: m.writeUint64String,
            },
            audio_track_id: {
              n: 4,
              br: s.readUint64String,
              bw: m.writeUint64String,
            },
            timedtext_track_id: {
              n: 5,
              br: s.readUint64String,
              bw: m.writeUint64String,
            },
            last_modified: { n: 6, br: s.readUint32, bw: m.writeUint32 },
            hide_from_watch_history: {
              n: 7,
              d: !1,
              br: s.readBool,
              bw: m.writeBool,
            },
            hide_from_library: { n: 8, d: !1, br: s.readBool, bw: m.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `VideoBookmark`;
    }
  },
  Tt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bookmarks || u(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bookmarks: { n: 1, c: L, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_SetVideoBookmark_Notification`;
    }
  },
  Et = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || u(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: m.writeRepeatedUint32,
            },
            updated_since: { n: 2, br: s.readUint32, bw: m.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Request`;
    }
  },
  Dt = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bookmarks || u(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bookmarks: { n: 1, c: L, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return h(e.M(), t, n);
    }
    static fromObject(t) {
      return a(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GetVideoBookmarks_Response`;
    }
  },
  Ot;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Video.ClientGetVideoURL#1`, _(bt, t, n), xt, {
      ePrivilege: 1,
    });
  }
  e.ClientGetVideoURL = t;
  function n(e, t) {
    return e.SendNotification(`Video.SetVideoBookmark#1`, _(Tt, t), {
      ePrivilege: 1,
    });
  }
  e.SetVideoBookmark = n;
  function r(e, t, n) {
    return e.SendMsg(`Video.GetVideoBookmarks#1`, _(Et, t, n), Dt, {
      ePrivilege: 1,
    });
  }
  e.GetVideoBookmarks = r;
})((Ot ||= {}));
var kt;
(function (e) {
  e.NotifyUnlockedH264Handler = {
    name: `VideoClient.NotifyUnlockedH264#1`,
    request: St,
  };
})((kt ||= {}));
var At;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FovasVideo.ClientGetOPFSettings#1`, _(Ct, t, n), wt, {
      ePrivilege: 1,
    });
  }
  e.ClientGetOPFSettings = t;
})((At ||= {}));
var jt = class e {
    static s_VODStore;
    m_transport = null;
    m_mapBookmarks = new Map();
    SetBookmarkForApp(e, t) {
      this.ValidateBookmarkData(t)
        ? this.m_mapBookmarks.set(e, L.fromObject(t))
        : this.InitializeBookmarkForApp(e);
    }
    ValidateBookmarkData(e) {
      let t = e;
      return (
        typeof t == `object` &&
        Number.isInteger(t.playback_position_in_seconds) &&
        Number.isInteger(t.app_id)
      );
    }
    InitializeBookmarkForApp(e) {
      if (!this.m_mapBookmarks.has(e)) {
        let t = {
          app_id: e,
          playback_position_in_seconds: 0,
          video_track_id: `0`,
          audio_track_id: `0`,
          timedtext_track_id: `0`,
          hide_from_watch_history: !1,
          hide_from_library: !1,
        };
        this.m_mapBookmarks.set(e, new L(t));
      }
    }
    GetBookmarkPlayTimeInSeconds(e) {
      let t = this.m_mapBookmarks.get(e);
      if (t) {
        let e = t.playback_position_in_seconds();
        if (Number.isInteger(e)) return e;
      }
      return 0;
    }
    async SendBookMarkedTimeToServer(e, t, n, r, i) {
      if (!v.logged_in) return;
      if (!this.m_transport) {
        console.warn(
          `CVideoBookmarkStore:SetBookMark no auth token / transport`,
        );
        return;
      }
      let a = se.Init(Tt),
        o = this.m_mapBookmarks.get(e);
      if (o) {
        let s = !1;
        (o.app_id() != e && ((s = !0), o.set_app_id(e)),
          o.playback_position_in_seconds() != t &&
            ((s = !0), o.set_playback_position_in_seconds(t)),
          (n ||= `0`),
          o.video_track_id() != n && (o.set_video_track_id(n), (s = !0)),
          (r ||= `0`),
          o.audio_track_id() != r && (o.set_audio_track_id(r), (s = !0)),
          (i ||= `0`),
          i != o.timedtext_track_id() &&
            (o.set_timedtext_track_id(i), (s = !0)),
          s &&
            (a.Body().add_bookmarks(o),
            Ot.SetVideoBookmark(this.m_transport, a)));
      }
    }
    static Get() {
      return (
        e.s_VODStore || ((e.s_VODStore = new e()), e.s_VODStore.Init()),
        e.s_VODStore
      );
    }
    Init() {
      v.logged_in && this.LoadWatchVideoOAuthToken();
    }
    async LoadWatchVideoOAuthToken() {
      let e =
          c() == `community`
            ? b.COMMUNITY_BASE_URL + `actions/ajaxgetwatchvodtoken`
            : b.STORE_BASE_URL + `actions/ajaxgetwatchvodtoken`,
        t = {};
      try {
        let n = await j.default.get(e, { params: t, withCredentials: !0 });
        if (
          n &&
          n.status == 200 &&
          n.data &&
          n.data.success == 1 &&
          n.data.webapi_token
        ) {
          this.m_transport = nt(
            new tt(b.WEBAPI_BASE_URL, n.data.webapi_token),
          ).GetServiceTransport();
          return;
        }
      } catch (e) {
        let t = Ke(e);
        console.error(
          `CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed ` +
            t.strErrorMsg,
          t,
        );
      }
    }
  },
  Mt = class {
    m_appid;
    constructor(e) {
      this.m_appid = e;
    }
    async SetBookmark(e, t, n, r) {
      v.logged_in &&
        jt
          .Get()
          .SendBookMarkedTimeToServer(this.m_appid, Math.floor(e), t, n, r);
    }
    GetBeginPlaytime() {
      return v.logged_in
        ? jt.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
        : 0;
    }
  },
  Nt = 1800,
  Pt = 1e3,
  Ft = 5e3,
  R = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Unlocking = 1)] = `Unlocking`),
      (e[(e.Loading = 2)] = `Loading`),
      (e[(e.Ready = 3)] = `Ready`),
      (e[(e.Error = 4)] = `Error`),
      e
    );
  })({});
async function It(e, t, n) {
  if (!t) return;
  let r = new FormData();
  (r.append(`steamid`, e),
    r.append(`broadcastid`, t),
    r.append(`viewertoken`, n));
  try {
    await j.default.post(b.CHAT_BASE_URL + `broadcast/stopwatching`, r);
  } catch {}
}
var Lt = class {
    m_rtUnlockTime = 0;
    m_schUnlockTimeout = new C();
    m_broadcast;
    m_video;
    UnlockH264(e, t) {
      this.BCanUnlockH264()
        ? (e.SetState(1, ``),
          console.log(`Unlocking H.264 for broadcast video playback`),
          this.RequestUnlockH264(),
          (this.m_broadcast = e),
          (this.m_video = t),
          (this.m_rtUnlockTime = Date.now()),
          this.m_schUnlockTimeout.Schedule(100, () => this.CheckUnlockState()))
        : e.SetState(4, T(`#BroadcastWatch_MinBrowser`));
    }
    BCanUnlockH264() {
      return me(`RemotePlay.UnlockH264`)
        ? (console.log(`Client supports direct H.264 unlock`), !0)
        : me(`BrowserView.PostMessageToParent`)
          ? (console.log(`Client supports browserview H.264 unlock`), !0)
          : (console.log(`Client does not support H.264 unlock`), !1);
    }
    RequestUnlockH264() {
      me(`RemotePlay.UnlockH264`)
        ? (console.log(`Requesting direct H.264 unlock`),
          SteamClient.RemotePlay.UnlockH264())
        : me(`BrowserView.PostMessageToParent`)
          ? (console.log(`Requesting browserview unlock`),
            SteamClient.BrowserView.PostMessageToParent(
              `UnlockH264Request`,
              `CUnlockH264Helper`,
            ))
          : console.log(`Failed to request H.264 unlock: no method supported`);
    }
    CheckUnlockState() {
      this.m_broadcast.m_eWatchState == 1 &&
        (O() || D()
          ? (console.log(`Unlocking H.264 successful`),
            this.m_broadcast.SetState(0, ``),
            this.m_video.Restart())
          : Date.now() - this.m_rtUnlockTime > 6e3
            ? (console.log(
                `Unlocking H.264 timed out (Steam client or servers offline?)`,
              ),
              this.m_broadcast.SetState(4, T(`#BroadcastWatch_MinBrowser`)))
            : this.m_schUnlockTimeout.Schedule(100, () =>
                this.CheckUnlockState(),
              ));
    }
  },
  z = class {
    constructor() {
      l(this);
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
    m_schManifestTimeout = new C();
    m_schHeartbeatTimeout = new C();
    SetState(e, t = ``) {
      ((this.m_eWatchState = e),
        (this.m_strStateDescription = t),
        e == 4 && console.log(this.m_strStateDescription));
    }
  };
(e([n], z.prototype, `m_ulBroadcastID`, void 0),
  e([n], z.prototype, `m_eWatchState`, void 0),
  e([n], z.prototype, `m_strStateDescription`, void 0),
  e([g], z.prototype, `SetState`, null));
var B = class {
  m_steamIDBroadcast = ``;
  m_bInitialized = !1;
  m_strTitle = ``;
  m_strAppId = `7`;
  m_nAppID = 7;
  m_strAppTitle = ``;
  m_strThumbnailUrl = ``;
  m_nViewerCount = 0;
  m_bIsOnline = !1;
  m_schUpdateTimeout = new C();
  m_nRefCount = 0;
  constructor(e) {
    (l(this), (this.m_steamIDBroadcast = e));
  }
};
(e([n], B.prototype, `m_bInitialized`, void 0),
  e([n], B.prototype, `m_strTitle`, void 0),
  e([n], B.prototype, `m_strAppId`, void 0),
  e([n], B.prototype, `m_nAppID`, void 0),
  e([n], B.prototype, `m_strAppTitle`, void 0),
  e([n], B.prototype, `m_strThumbnailUrl`, void 0),
  e([n], B.prototype, `m_nViewerCount`, void 0),
  e([n], B.prototype, `m_bIsOnline`, void 0));
var V = class {
  constructor() {
    l(this);
  }
  m_eWatchState = 0;
  m_strStateDescription = ``;
  m_rgVideos = [];
  SetState(e, t = ``) {
    ((this.m_eWatchState = e),
      (this.m_strStateDescription = t),
      e == 4 && console.log(this.m_strStateDescription));
  }
};
(e([n], V.prototype, `m_eWatchState`, void 0),
  e([n], V.prototype, `m_strStateDescription`, void 0),
  e([g], V.prototype, `SetState`, null));
var Rt = class extends V {
    m_clipID;
    m_data;
  },
  zt = class extends V {
    m_nAppIDVOD;
    m_manifestURL;
  },
  Bt = class {
    m_mapBroadcasts = new Map();
    m_mapClips = new Map();
    m_mapVODs = new Map();
    m_activeVideo = null;
    m_broadcastSettings = { nVolume: 1, bMuted: !1, ulViewerToken: `0` };
    m_schSaveSettings = new C();
    m_broadcastInfos = {};
    constructor() {
      (l(this), this.LoadBroadcastSettings());
    }
    GetBroadcastState(e) {
      if (e.IsBroadcastClip()) {
        let t = this.m_mapClips.get(e.GetBroadcastClipID());
        return t ? t.m_eWatchState : 0;
      }
      if (e.IsBroadcastVOD()) {
        let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
        return t ? t.m_eWatchState : 0;
      }
      {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        return t ? t.m_eWatchState : 0;
      }
    }
    GetBroadcastStateDescription(e) {
      if (e.IsBroadcastClip()) {
        let t = this.m_mapClips.get(e.GetBroadcastClipID());
        return t ? t.m_strStateDescription : ``;
      }
      if (e.IsBroadcastVOD()) {
        let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
        return t ? t.m_strStateDescription : ``;
      }
      {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        return t ? t.m_strStateDescription : ``;
      }
    }
    CreateBroadcastVideo(e, t, n, r) {
      let i = this.GetOrCreateBroadcast(t),
        { nVolume: a, bMuted: o } = this.m_broadcastSettings,
        s = new U(e, a, o, n);
      return (
        s.SetBroadcastSteamID(t),
        i.m_rgVideos.push(s),
        (i.m_bWebRTC = r),
        !O() && !D() && new Lt().UnlockH264(i, s),
        s
      );
    }
    CreateClipVideo(e, t, n) {
      let r = this.GetOrCreateClip(t),
        { nVolume: i, bMuted: a } = this.m_broadcastSettings,
        o = new U(e, i, a, n);
      return (
        o.SetBroadcastClipID(t),
        r.m_rgVideos.push(o),
        !O() && !D() && new Lt().UnlockH264(r, o),
        o
      );
    }
    CreateVODVideo(e, t, n) {
      let r = this.GetOrCreateVOD(t),
        { nVolume: i, bMuted: a } = this.m_broadcastSettings,
        o = new U(e, i, a, n);
      return (
        o.SetBroadcastAppIDVOD(t),
        r.m_rgVideos.push(o),
        !O() && !D() && new Lt().UnlockH264(r, o),
        o
      );
    }
    StartVideo(e) {
      if (e.IsBroadcastClip()) {
        console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
        let t = this.m_mapClips.get(e.GetBroadcastClipID());
        if (!t) return;
        (this.SetActiveVideo(e),
          t.m_eWatchState == 0
            ? this.GetClipManifest(t, e.GetWatchLocation())
            : t.m_eWatchState == 3 && e.StartClip(t));
      } else if (e.IsBroadcastVOD()) {
        console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
        let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
        if (!t) return;
        (this.SetActiveVideo(e),
          t.m_eWatchState == 0
            ? this.GetVODManifest(t, e.GetWatchLocation())
            : t.m_eWatchState == 3 && e.StartVOD(t));
      } else {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        if (!t) return;
        (this.SetActiveVideo(e),
          t.m_eWatchState == 0
            ? this.GetBroadcastManifest(t, e.GetWatchLocation())
            : t.m_eWatchState == 3 && e.StartBroadcast(t));
      }
    }
    SetActiveVideo(e) {
      (this.m_mapBroadcasts.forEach((t) => {
        for (let n of t.m_rgVideos) n != e && n.StopPlaybackTillUserInput();
      }),
        this.m_mapClips.forEach((t) => {
          for (let n of t.m_rgVideos) n != e && n.StopPlaybackTillUserInput();
        }),
        (this.m_activeVideo = e));
    }
    PauseAllVideo() {
      this.m_mapBroadcasts.forEach((e) => {
        for (let t of e.m_rgVideos) t.StopPlaybackTillUserInput();
      });
    }
    async StopVideo(e) {
      let t = e.GetBroadcastSteamID(),
        n = this.m_mapBroadcasts.get(t);
      (e.Stop(),
        n &&
          (n.m_ulBroadcastID &&
            It(t, n.m_ulBroadcastID, this.m_broadcastSettings.ulViewerToken),
          le(n.m_rgVideos, (t) => t == e),
          this.RemoveBroadcastIfUnused(n)));
    }
    StartInfo(e) {
      let t = this.GetOrCreateBroadcastInfo(e);
      return (
        t.m_nRefCount++,
        (t.m_bInitialized && t.m_schUpdateTimeout.IsScheduled()) ||
          this.LoadBroadcastInfo(t),
        t
      );
    }
    StopInfo(e) {
      e.m_nRefCount--;
    }
    GetOrCreateBroadcastInfo(e) {
      if (!e) return new B(``);
      if (!this.m_broadcastInfos[e]) {
        let t = n(new B(e));
        this.m_broadcastInfos[e] = t;
      }
      return this.m_broadcastInfos[e];
    }
    GetOrCreateBroadcast(e) {
      let t = this.m_mapBroadcasts.get(e);
      return (
        t ||
        ((t = new z()),
        (t.m_steamIDBroadcast = e),
        (t.m_eWatchState = 0),
        this.m_mapBroadcasts.set(e, t),
        t)
      );
    }
    GetBroadcast(e) {
      return this.m_mapBroadcasts.get(e);
    }
    GetBroadcastClip(e) {
      return this.m_mapClips.get(e);
    }
    GetBroadcastVOD(e) {
      return this.m_mapVODs.get(e);
    }
    RemoveBroadcastIfUnused(e) {
      e.m_rgVideos.length ||
        (e.m_schHeartbeatTimeout.Cancel(),
        e.m_schManifestTimeout.Cancel(),
        this.m_mapBroadcasts.delete(e.m_steamIDBroadcast));
    }
    GetOrCreateClip(e) {
      let t = this.m_mapClips.get(e);
      return (
        t ||
        ((t = new Rt()),
        (t.m_clipID = e),
        (t.m_eWatchState = 0),
        this.m_mapClips.set(e, t),
        t)
      );
    }
    GetOrCreateVOD(e) {
      let t = this.m_mapVODs.get(e);
      return (
        t ||
        ((t = new zt()),
        (t.m_nAppIDVOD = e),
        (t.m_eWatchState = 0),
        this.m_mapVODs.set(e, t),
        t)
      );
    }
    async LoadBroadcastInfo(e) {
      let t = `0`,
        n = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
      if ((n && (t = n.m_ulBroadcastID), e.m_nRefCount == 0)) return;
      let i = {
        steamid: e.m_steamIDBroadcast,
        broadcastid: t,
        location:
          n &&
          n.m_rgVideos &&
          n.m_rgVideos[0] &&
          n.m_rgVideos[0].GetWatchLocation(),
      };
      try {
        let t = await j.default.get(
          `${b.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
          { params: i },
        );
        if (!t || !t.data || !t.data.success || t.data.success != 1) {
          e.m_bInitialized = !0;
          return;
        }
        let n = t.data;
        r(() => {
          ((e.m_bInitialized = !0),
            (e.m_strTitle = n.title),
            (e.m_strAppId = n.appid),
            (e.m_nAppID = Number.parseInt(n.appid)),
            (e.m_strAppTitle = n.app_title),
            (e.m_strThumbnailUrl = n.thumbnail_url),
            (e.m_nViewerCount = n.viewer_count),
            (e.m_bIsOnline = n.is_online),
            !e.m_strTitle &&
              N &&
              ((e.m_strTitle = N.name),
              (e.m_strAppTitle = N.appName || N.name)));
          let t = n.update_interval;
          t &&
            typeof t == `number` &&
            e.m_schUpdateTimeout.Schedule(t * 1e3, () =>
              this.LoadBroadcastInfo(e),
            );
        });
      } catch (e) {
        console.error(e);
      }
    }
    DelayedGetBroadcastManifest(e, t, n = Date.now()) {
      e.m_schManifestTimeout.Schedule(Ft, () =>
        this.GetBroadcastManifest(e, t, n),
      );
    }
    async GetBroadcastManifest(e, t, n = Date.now()) {
      e.SetState(2, ``);
      let r = {
          steamid: e.m_steamIDBroadcast,
          broadcastid: 0,
          viewertoken: this.m_broadcastSettings.ulViewerToken,
          watchlocation: t,
          sessionid: p(),
          is_webrtc: e.m_bWebRTC,
        },
        i = null;
      try {
        i = await j.default.get(
          b.CHAT_BASE_URL + `broadcast/getbroadcastmpd/`,
          { params: r, withCredentials: !0 },
        );
      } catch (e) {
        let t = Ke(e);
        console.error(`Failed to get broadcast manifest!` + t.strErrorMsg, t);
      }
      if (!i || i.status != 200) {
        e.SetState(4, T(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let a = i.data;
      a.viewertoken && this.SetViewerToken(a.viewertoken);
      let o = a.success;
      if (o == `ready`)
        (e.SetState(3),
          (e.m_ulBroadcastID = a.broadcastid),
          (e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken),
          (e.m_strCDNAuthUrlParameters = a.cdn_auth_url_parameters),
          (e.m_bWebRTC = a.is_webrtc),
          (e.m_data = a),
          this.LoadBroadcast(e),
          setTimeout(() => {
            e.m_schHeartbeatTimeout.Schedule(
              e.m_data.heartbeat_interval * 1e3,
              () => this.HeartbeatBroadcast(e),
            );
          }, Math.random() * 3e4));
      else if (o == `waiting`) {
        e.SetState(2, T(`#BroadcastWatch_WaitingForResponse`));
        let r = Date.now() - n;
        if (r > 6e4) {
          e.SetState(4, T(`#BroadcastWatch_NotAvailable`));
          return;
        }
        let i = r > 3e4 ? a.retry : 5e3;
        e.m_schManifestTimeout.Schedule(i, () =>
          this.GetBroadcastManifest(e, t, n),
        );
      } else
        o == `waiting_for_start`
          ? (e.SetState(2, T(`#BroadcastWatch_WaitingForStart`)),
            e.m_schManifestTimeout.Schedule(a.retry, () =>
              this.GetBroadcastManifest(e, t, n),
            ))
          : o == `waiting_for_reconnect`
            ? (e.SetState(2, T(`#BroadcastWatch_WaitingForReconnect`)),
              e.m_schManifestTimeout.Schedule(a.retry, () =>
                this.GetBroadcastManifest(e, t, n),
              ))
            : o == `end`
              ? e.SetState(4, T(`#BroadcastWatch_NotAvailable`))
              : o == `too_many_broadcasts`
                ? e.SetState(4, T(`#BroadcastWatch_TooManyBroadcasts`))
                : o == `system_not_supported`
                  ? e.SetState(4, T(`#BroadcastWatch_SystemNotSupported`))
                  : o == `user_restricted`
                    ? e.SetState(4, T(`#BroadcastWatch_UserRestricted`))
                    : o == `poor_upload_quality`
                      ? e.SetState(4, T(`#BroadcastWatch_PoorUploadQuality`))
                      : o == `request_failed`
                        ? e.SetState(4, T(`#BroadcastWatch_RequestFailed`))
                        : o == `too_many_viewers`
                          ? e.SetState(4, T(`#BroadcastWatch_TooManyViewers`))
                          : e.SetState(4, T(`#BroadcastWatch_NotAvailable`));
    }
    async GetClipManifest(e, t) {
      e.SetState(2, ``);
      let n = { clipid: e.m_clipID, watchlocation: t, sessionid: p() },
        r = null;
      try {
        r = await j.default.get(b.CHAT_BASE_URL + `broadcast/getclipdetails`, {
          params: n,
          withCredentials: !0,
        });
      } catch (e) {
        (console.error(e), console.log(`Failed to get clip manifest!`));
      }
      if (!r || r.status != 200) {
        e.SetState(4, T(`#BroadcastWatch_RequestFailed`));
        return;
      }
      let i = r.data;
      i.success == 1
        ? (e.SetState(3), (e.m_data = i), this.LoadClip(e))
        : e.SetState(4, T(`#BroadcastWatch_RequestFailed`));
    }
    async GetVODManifest(e, t) {
      e.SetState(2, ``);
      let n = await Re.fetchQuery(et(e.m_nAppIDVOD)).catch((t) => {
        console.error(
          `BroadcastWatchStore:GetVODManifest: Failed to load VOD ` +
            e.m_nAppIDVOD,
          t,
        );
      });
      n
        ? (n.bookmark
            ? jt.Get().SetBookmarkForApp(e.m_nAppIDVOD, n.bookmark)
            : jt.Get().InitializeBookmarkForApp(e.m_nAppIDVOD),
          e.SetState(3),
          (e.m_manifestURL = n.video_url),
          this.LoadVOD(e))
        : e.SetState(4, T(`#BroadcastWatch_RequestFailed`));
    }
    async HeartbeatBroadcast(e) {
      let t = new FormData();
      (t.append(`steamid`, e.m_steamIDBroadcast),
        t.append(`broadcastid`, e.m_ulBroadcastID),
        t.append(`viewertoken`, this.m_broadcastSettings.ulViewerToken),
        j.default.post(b.CHAT_BASE_URL + `broadcast/heartbeat/`, t),
        e.m_schHeartbeatTimeout.Schedule(
          e.m_data.heartbeat_interval * 1e3,
          () => this.HeartbeatBroadcast(e),
        ));
    }
    LoadBroadcast(e) {
      let t = this.m_activeVideo;
      t && e.m_rgVideos.findIndex((e) => e == t) >= 0 && t.StartBroadcast(e);
    }
    LoadClip(e) {
      let t = this.m_activeVideo;
      t && e.m_rgVideos.findIndex((e) => e == t) >= 0 && t.StartClip(e);
    }
    LoadVOD(e) {
      let t = this.m_activeVideo;
      t && e.m_rgVideos.findIndex((e) => e == t) >= 0 && t.StartVOD(e);
    }
    BroadcastDownloadFailed(e, t = !0, n = Ze.Invalid) {
      e.Stop();
      let r = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
      r &&
        r.m_eWatchState != 2 &&
        (r.m_bWebRTC && t && (r.m_bWebRTC = !1),
        n == Ze.StreamGone
          ? this.DelayedGetBroadcastManifest(r, e.GetWatchLocation())
          : this.GetBroadcastManifest(r, e.GetWatchLocation()));
    }
    UserInputClickVideo(e) {
      if (
        this.m_activeVideo != e &&
        (this.PauseAllVideo(),
        (this.m_activeVideo = e),
        !e.IsBroadcastClip() && !e.IsBroadcastVOD())
      ) {
        let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
        t && this.GetBroadcastManifest(t, e.GetWatchLocation());
      }
      e.UserInputClick();
    }
    LoadBroadcastSettings() {
      if (!window.localStorage) return;
      let e = window.localStorage.getItem(`broadcastSettings`);
      if (!e) return;
      let t = JSON.parse(e);
      if (!t) return;
      Object.assign(this.m_broadcastSettings, t);
      let n = this.m_broadcastSettings;
      ((n.bMuted = !!n.bMuted),
        (n.nVolume = x(n.nVolume, 0, 1)),
        typeof n.ulViewerToken != `string` && (n.ulViewerToken = `0`));
    }
    SaveBroadcastSettings() {
      window.localStorage &&
        this.m_schSaveSettings.Schedule(Pt, () => {
          try {
            window.localStorage.setItem(
              `broadcastSettings`,
              JSON.stringify(this.m_broadcastSettings),
            );
          } catch {}
        });
    }
    SetViewerToken(e) {
      this.m_broadcastSettings.ulViewerToken != e &&
        ((this.m_broadcastSettings.ulViewerToken = e),
        this.SaveBroadcastSettings());
    }
    GetViewerToken() {
      return this.m_broadcastSettings.ulViewerToken;
    }
    SaveVolumeChange(e, t) {
      (this.m_broadcastSettings.nVolume != e ||
        this.m_broadcastSettings.bMuted != t) &&
        ((this.m_broadcastSettings.nVolume = e),
        (this.m_broadcastSettings.bMuted = t),
        this.SaveBroadcastSettings());
    }
  };
e([n], Bt.prototype, `m_mapBroadcasts`, void 0);
var H = (function (e) {
    return (
      (e[(e.Timeline = 1)] = `Timeline`), (e[(e.Minimap = 2)] = `Minimap`), e
    );
  })({}),
  U = class {
    m_elVideo;
    m_player = null;
    m_listeners = new pe();
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
    m_nTimelineDuration = Nt;
    m_nVideoStartPos = 0;
    m_nVideoEndPos = 0;
    m_editorStartTime = 0;
    m_editorEndTime = 0;
    m_rgMarkers = n.array();
    m_rgSegments = n.array();
    m_rgRegions = n.array();
    m_fnOnVideoEnd;
    m_videoEndingTimer;
    constructor(e, t, n, r) {
      (l(this),
        (this.m_elVideo = e),
        (this.m_nVolume = t),
        (this.m_bMuted = n),
        (this.m_eWatchLocation = r));
    }
    SetBroadcastSteamID(e) {
      this.m_steamIDBroadcast = e;
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
    SetStatsViewIsVisible(e) {
      this.m_player && this.m_player.SetStatsViewIsVisible(e);
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
    SetBroadcastClipID(e) {
      this.m_broadcastClipID = e;
    }
    GetBroadcastClipID() {
      return this.m_broadcastClipID;
    }
    IsBroadcastVOD() {
      return !!this.m_nBroadcastAppIDVOD;
    }
    SetBroadcastAppIDVOD(e) {
      this.m_nBroadcastAppIDVOD = e;
    }
    GetBroadcastAppIDVOD() {
      return this.m_nBroadcastAppIDVOD;
    }
    GetVideoRepresentations() {
      return this.m_player ? this.m_player.GetVideoRepresentations() : [];
    }
    SetVideoRepresentation(e) {
      this.m_player?.SetVideoRepresentation(e);
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
      for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
        let t = this.m_elVideo.textTracks[e];
        if (t.mode === `showing`) return t;
      }
      return null;
    }
    SetSubtitles(e) {
      let t = e ? De[e] : -1;
      this.m_player.SetSubtitles(t);
    }
    SetStartWithSubtitles(e) {
      this.m_bStartWithSubtitles = e;
    }
    GetBroadcastState() {
      return W.GetBroadcastState(this);
    }
    GetBroadcastStateDescription() {
      return W.GetBroadcastStateDescription(this);
    }
    SetOnVideoCallback(e) {
      this.m_fnOnVideoEnd = e;
    }
    InitPlayer() {
      (ne(!this.m_player, `Initialized twice?`),
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
        (this.m_nTimelineDuration = Nt),
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
    StartBroadcast(e) {
      if ((this.InitPlayer(), e.m_data.url)) {
        let t = new $e(this.m_elVideo);
        (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
          (this.m_player = t),
          t.PlayMPD(
            e.m_data.url,
            e.m_data.hls_url,
            void 0,
            e.m_strCDNAuthUrlParameters,
          ));
      } else {
        let t = new F(this.m_elVideo);
        ((this.m_player = t),
          t.PlayWebRTC(
            this.m_steamIDBroadcast,
            e.m_ulViewerToken,
            e.m_data.webrtc_session_id,
            e.m_data.webrtc_turn_server,
            e.m_data.webrtc_offer_sdp,
          ));
      }
      (this.SetVolume(this.m_nVolume), this.m_player?.SetMuted(this.m_bMuted));
      let t = this.m_player?.GetDASHPlayerStats();
      (t &&
        t.SetBroadcasterAndViewerInfo(
          this.m_steamIDBroadcast,
          v.steamid,
          e.m_ulBroadcastID,
          e.m_ulViewerToken,
        ),
        (this.m_BroadcastInfo = W.StartInfo(this.m_steamIDBroadcast)));
    }
    StartClip(e) {
      this.InitPlayer();
      let t = new $e(this.m_elVideo);
      (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = t),
        t.PlayMPD(e.m_data.clip_url),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    StartVOD(e) {
      this.InitPlayer();
      let t = new $e(this.m_elVideo);
      (t.SetAlwaysStartWithSubtitles(this.m_bStartWithSubtitles),
        (this.m_player = t),
        v.logged_in &&
          e.m_nAppIDVOD &&
          t.SetBookmarkAdapter(new Mt(e.m_nAppIDVOD)),
        e.m_manifestURL && t.PlayMPD(e.m_manifestURL),
        this.SetVolume(this.m_nVolume),
        this.m_player?.SetMuted(this.m_bMuted));
    }
    Stop() {
      (this.m_listeners.Unregister(),
        (this.m_BroadcastInfo &&= (W.StopInfo(this.m_BroadcastInfo), null)),
        (this.m_gameDataParser = null),
        (this.m_player &&= (this.m_player.Close(), null)));
    }
    TogglePlayPause() {
      !this.m_player || this.m_player.IsPaused() ? this.Play() : this.Pause();
    }
    Play() {
      let e = this.GetBroadcastState();
      if (e == 0 || this.IsBroadcastClip()) W.StartVideo(this);
      else if (e == 3) {
        if ((W.SetActiveVideo(this), this.m_player)) this.m_player.Play();
        else if (this.IsBroadcastVOD()) {
          let e = W.GetBroadcastVOD(this.m_nBroadcastAppIDVOD);
          e && this.StartVOD(e);
        } else {
          let e = W.GetBroadcast(this.m_steamIDBroadcast);
          e && this.StartBroadcast(e);
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
    JumpTime(e) {
      this.m_player?.JumpTime(e);
    }
    Seek(e) {
      this.m_player?.Seek(e);
    }
    SeekAndPlay(e) {
      this.m_player?.SeekAndPlay(e);
    }
    JumpToLiveEdge() {
      let e = this.m_player;
      e &&
        (e.IsLiveContent()
          ? this.SeekAndPlay(e.GetBufferedLiveEdgeTime())
          : this.SeekAndPlay(e.GetAvailableVideoStartTime()));
    }
    SetVolume(e) {
      (this.m_player &&
        (this.m_player.SetVolume(e),
        (this.m_nVolume = this.m_player.GetVolume())),
        W.SaveVolumeChange(e, this.m_bMuted));
    }
    SetMute(e) {
      (this.m_player && this.m_player.SetMuted(e),
        (this.m_bMuted = e),
        W.SaveVolumeChange(this.m_nVolume, e));
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
      let e = this.m_player;
      if (e) {
        if (this.IsBroadcastClip())
          ((this.m_nPlaybackTime = e.GetCurrentPlayTime()),
            (this.m_nVideoStartPos = e.GetAvailableVideoStartTime()),
            (this.m_nVideoEndPos = e.GetBufferedLiveEdgeTime()),
            (this.m_nTimelineDuration =
              this.m_nVideoEndPos - this.m_nVideoStartPos),
            (this.m_bOnLiveEdge = !1),
            (this.m_bBuffering = e.IsBuffering()));
        else {
          if (
            ((this.m_nPlaybackTime = e.GetCurrentPlayTime()),
            (this.m_nVideoStartPos = e.GetAvailableVideoStartTime()),
            (this.m_nVideoEndPos = Math.max(
              e.GetBufferedLiveEdgeTime(),
              this.m_nPlaybackTime,
            )),
            this.IsBroadcastVOD())
          ) {
            this.m_nTimelineDuration = this.m_nVideoEndPos;
            let e = this.m_fnOnVideoEnd;
            e &&
              this.m_nVideoEndPos - this.m_nPlaybackTime < 5 &&
              (this.m_videoEndingTimer = window.setTimeout(() => {
                e();
              }, 400));
          }
          ((this.m_bBuffering = e.IsBuffering()),
            (this.m_bOnLiveEdge =
              this.m_nVideoEndPos - this.m_nPlaybackTime < 5),
            e.IsPaused() && (this.m_bOnLiveEdge = !1));
        }
      }
    }
    OnVolumeUpdated() {
      let e = this.m_player;
      e && ((this.m_nVolume = e.GetVolume()), (this.m_bMuted = e.IsMuted()));
    }
    OnGameDataUpdate(e) {
      let t = e.detail;
      if (!t || typeof t.gamedata != `object`) return;
      (this.m_gameDataParser &&
        this.m_gameDataParser.GetAppID() == t.gamedata.__appid) ||
        (this.m_gameDataParser = new _t(t.gamedata.__appid));
      let n = this.m_player?.GetLiveContentStartTime().getTime() ?? 0;
      if (`timelinemarkers` in t.gamedata) {
        let e = this.m_gameDataParser.UpdateMarkers(
          t.gamedata.__timelinemarkers,
          n,
        );
        e &&
          (this.m_rgMarkers.replace(e.rgMarkers || []),
          this.m_rgSegments.replace(e.rgSegments || []));
        let r = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
        r && this.m_rgRegions.replace(r);
      } else
        `soundtrack` in t.gamedata &&
          this.m_gameDataParser.UpdateSoundtrack(
            this.m_steamIDBroadcast,
            t.gamedata.soundtrack,
          );
    }
    OnDownloadFailed(e) {
      let t = e.detail || Ze.Invalid;
      W.BroadcastDownloadFailed(this, !0, t);
    }
    OnWebRTCRetry() {
      W.BroadcastDownloadFailed(this, !1);
    }
    OnWebRTCFailed() {
      W.BroadcastDownloadFailed(this, !0);
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
    GetTimeAtMousePosition(e, t, n, r) {
      let a = i(e, t.left, t.right, n, r);
      return Math.floor(a + 0.5);
    }
    GetPercentOffsetFromTime(e, t) {
      let n = 0,
        r = 0;
      return (
        t == 1
          ? ((r = this.m_nVideoEndPos), (n = r - this.m_nTimelineDuration))
          : ((n = 0), (r = 0)),
        i(e, n, r, 0, 100)
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
(e([n], U.prototype, `m_player`, void 0),
  e([n], U.prototype, `m_bPaused`, void 0),
  e([n], U.prototype, `m_nPlaybackTime`, void 0),
  e([n], U.prototype, `m_bBuffering`, void 0),
  e([n], U.prototype, `m_bOnLiveEdge`, void 0),
  e([n], U.prototype, `m_nVolume`, void 0),
  e([n], U.prototype, `m_bMuted`, void 0),
  e([n], U.prototype, `m_bUserInputNeeded`, void 0),
  e([n], U.prototype, `m_bIsReplay`, void 0),
  e([n], U.prototype, `m_nTimelineDuration`, void 0),
  e([n], U.prototype, `m_nVideoStartPos`, void 0),
  e([n], U.prototype, `m_nVideoEndPos`, void 0),
  e([n], U.prototype, `m_editorStartTime`, void 0),
  e([n], U.prototype, `m_editorEndTime`, void 0),
  e([g.bound], U.prototype, `StartBroadcast`, null),
  e([g.bound], U.prototype, `StartClip`, null),
  e([g.bound], U.prototype, `StartVOD`, null),
  e([S], U.prototype, `OnVideoPlaying`, null),
  e([S], U.prototype, `OnVideoPause`, null),
  e([g.bound], U.prototype, `OnVideoTimeUpdate`, null),
  e([S], U.prototype, `OnVolumeUpdated`, null),
  e([g.bound], U.prototype, `OnGameDataUpdate`, null),
  e([S], U.prototype, `OnDownloadFailed`, null),
  e([S], U.prototype, `OnWebRTCRetry`, null),
  e([S], U.prototype, `OnWebRTCFailed`, null),
  e([S], U.prototype, `OnUserInputNeeded`, null));
var W = new Bt();
window.uiBroadcastWatchStore = W;
var G = oe(),
  Vt = 500,
  Ht = class extends k.Component {
    render() {
      let {
          keyExtractor: e,
          style: t,
          duration: n = Vt,
          className: r,
          children: i,
          childRef: a,
          ...o
        } = this.props,
        s = { ...(t || {}), transitionDuration: `${n / 1e3}s` };
      return (0, G.jsx)(pt, {
        ...o,
        className: re(`crossfade`, r),
        children: (0, G.jsx)(
          Be,
          {
            nodeRef: a,
            classNames: `crossfade-anim`,
            timeout: n,
            style: s,
            children: i,
          },
          e(),
        ),
      });
    }
  };
function Ut(e) {
  let { src: t, ...n } = e,
    r = { backgroundImage: `url(${t})` },
    i = k.useRef(null);
  return (0, G.jsx)(Ht, {
    style: r,
    keyExtractor: () => t,
    childRef: i,
    ...n,
    children: (0, G.jsx)(`div`, { ref: i, className: `crossfade-img` }),
  });
}
function Wt(e) {
  let { gidEvent: t } = e,
    n = Ue(t);
  return n ? (0, G.jsx)(at, { event: n, language: ie(d.LANGUAGE) }) : null;
}
function Gt() {
  return (0, G.jsx)(`div`, {
    className: `STV_ReplayBanner`,
    children: T(`#DASHPlayerControls_IsReplay`),
  });
}
var Kt = E((e) => {
    let t = e.video;
    if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
    let n = R.Loading,
      r = ``;
    if (t) {
      ((n = t.GetBroadcastState()), (r = t.GetBroadcastStateDescription()));
      let e = t.IsBuffering();
      (n == R.Unlocking && ((n = R.Loading), (r = ``)),
        n == R.Ready && e && ((n = R.Loading), (r = ``)));
    }
    if ((t && n != R.Error && t.GetUserInputNeeded()) || n == R.Ready)
      return null;
    let i = n == R.Loading;
    return (0, G.jsxs)(`div`, {
      className: `BroadcastVideoWatchState`,
      style: { filter: `hue-rotate(40deg)` },
      children: [
        i && (0, G.jsx)(qe, {}),
        !i &&
          (0, G.jsx)(`div`, {
            className: `BroadcastVideoWatchState_Text`,
            children: r,
          }),
      ],
    });
  }),
  qt = class extends k.Component {
    OnClick() {
      W.UserInputClickVideo(this.props.video);
    }
    render() {
      return (0, G.jsxs)(`div`, {
        className: `BroadcastVideoUserInputNeeded`,
        onClick: this.OnClick,
        children: [
          (0, G.jsx)(Ce, {}),
          (0, G.jsx)(`span`, {
            children: T(`#DASHPlayerControls_ClickToPlay`),
          }),
        ],
      });
    }
  };
e([S], qt.prototype, `OnClick`, null);
var Jt = class extends k.Component {
  constructor(e) {
    super(e);
  }
  HideStats() {
    this.props.closeStats && this.props.closeStats();
  }
  render() {
    let e = this.props.stats;
    return (0, G.jsxs)(`div`, {
      className: `dash_video_stats`,
      children: [
        (0, G.jsx)(`button`, {
          className: `dash_stat_close_button`,
          onClick: this.HideStats,
          children: (0, G.jsx)(ye, {}),
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_BufferingResolution`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBufferingResolutionToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_PlaybackResolution`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackResolutionToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_HtmlResolution`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetHTMLVideoResolutionToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_ContentServer`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetContentServerToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_StallEvents`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetStalledEventsToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_FailedDownloads`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetFailedDownloadsToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_TimeToFirstFrame`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetTimeToFirstFrameToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_PlaybackRate`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackRateForDisplay(),
            }),
          ],
        }),
        (0, G.jsx)(Yt, { stats: e }),
      ],
    });
  }
};
(e([S], Jt.prototype, `HideStats`, null), (Jt = e([E], Jt)));
var Yt = class extends k.Component {
  constructor(e) {
    super(e);
  }
  createBufferedRange(e) {
    let t = this.props.stats,
      n = [],
      r = e ? `vidbuf` : `audbuf`,
      i = e ? t.GetNumBufferedVideoRanges() : t.GetNumBufferedAudioRanges();
    if (i > 0)
      for (let a = 0; a < i; ++a) {
        let i = T(
            e
              ? `#DASHPlayerStats_VideoBufferRange`
              : `#DASHPlayerStats_AudioBufferRange`,
            a,
          ),
          o = e
            ? t.GetBufferedVideoSegmentForDisplay(a)
            : t.GetBufferedAudioSegmentForDisplay(a);
        n.push(
          (0, G.jsxs)(
            `div`,
            {
              children: [
                i,
                ` `,
                (0, G.jsx)(`span`, {
                  className: `videoStatsValue`,
                  children: o,
                }),
              ],
            },
            r + a,
          ),
        );
      }
    else {
      let t = T(
        e
          ? `#DASHPlayerStats_VideoNoRangeInformation`
          : `#DASHPlayerStats_AudioNoRangeInformation`,
      );
      n.push((0, G.jsx)(`div`, { children: t }, r + `none`));
    }
    return n;
  }
  render() {
    let e = this.props.stats;
    return (0, G.jsxs)(`div`, {
      className: `dash_video_quick_stats`,
      children: [
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_BytesReceived`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBytesReceivedToDisplay(),
            }),
          ],
        }),
        this.props.stats.BHasFrameInformation() &&
          (0, G.jsxs)(`div`, {
            children: [
              T(`#DASHPlayerStats_DroppedFrames`),
              ` `,
              (0, G.jsx)(`span`, {
                className: `videoStatsValue`,
                children: e.GetDroppedFramesToDisplay(),
              }),
            ],
          }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_VideoBuffered`),
            ` `,
            (0, G.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetVideoBufferedToDisplay(), ` `],
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_AudioBuffered`),
            ` `,
            (0, G.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetAudioBufferedToDisplay(), ` `],
            }),
          ],
        }),
        this.createBufferedRange(!0),
        this.createBufferedRange(!1),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_BandwidthRequired`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthRequiredToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_BandwidthVideo`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwithVideoToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_BandwidthNums`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthStatsToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_DownloadNums`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetDownloadTimeStatsToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_ActiveDownloads`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetActiveDownloadsToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_VideoDownloadProgress`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetVideoDownloadProgressToDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_DroppingFrames`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPersistentFrameDropsForDisplay(),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          children: [
            T(`#DASHPlayerStats_CurrentFPS`),
            ` `,
            (0, G.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetCurrentFPSForDisplay(),
            }),
          ],
        }),
      ],
    });
  }
};
Yt = e([E], Yt);
var K = class extends k.Component {
  m_elSettingsButton;
  m_SettingsButtonPos;
  m_elClickListener = null;
  m_elSettingsPanel = null;
  m_elSubtitlesButton = k.createRef();
  m_elSubtitlesPanel = k.createRef();
  m_SubtitlesButtonPos;
  constructor(e) {
    (super(e), (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 }));
  }
  OnVideoControlClick(e) {
    (this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
      (this.m_SettingsButtonPos = [
        this.m_elSettingsButton.offsetLeft,
        this.m_elSettingsButton.offsetTop,
      ]),
      (this.m_elClickListener = e.currentTarget.ownerDocument.defaultView),
      this.m_elClickListener?.addEventListener(`mouseup`, this.OnMouseUp, !0));
  }
  OnSubtitlesClick(e) {
    (this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
      (this.m_SubtitlesButtonPos = [
        this.m_elSubtitlesButton.current?.offsetLeft,
        this.m_elSubtitlesButton.current?.offsetTop,
      ]),
      (this.m_elClickListener = e.currentTarget.ownerDocument.defaultView),
      this.m_elClickListener?.addEventListener(`mouseup`, this.OnMouseUp, !0));
  }
  OnMouseUp(e) {
    (this.m_elClickListener?.removeEventListener(`mouseup`, this.OnMouseUp, !0),
      de(this.m_elSettingsPanel, e.target) ||
        this.setState({ bSettingsOpen: !1 }),
      de(this.m_elSubtitlesPanel.current, e.target) ||
        this.setState({ bSubtitlesOpen: !1 }));
  }
  bindSettingsButton(e) {
    this.m_elSettingsButton = e;
  }
  BindSettingsPanel(e) {
    this.m_elSettingsPanel = e;
  }
  OnShowStats(e) {
    (this.props.onShowStats(e),
      this.setState({ bSettingsOpen: !this.state.bSettingsOpen }));
  }
  render() {
    let e = !1,
      t = !1,
      { video: n, actions: r } = this.props,
      i,
      a = [],
      o = 0,
      s = (0, G.jsx)(
        `div`,
        { className: `settingsMenuSeparator` },
        `separator`,
      );
    if (
      (this.state.bSettingsOpen &&
        ((e = !0),
        (i = this.props.video.GetVideoRepresentations()),
        (a = i.map((e) =>
          (0, G.jsx)(
            Se,
            {
              onClick: () => {
                (this.props.video.SetVideoRepresentation(e),
                  this.setState({ bSettingsOpen: !this.state.bSettingsOpen }));
              },
              bChecked: e.selected,
              children: e.displayName,
            },
            e.id,
          ),
        )),
        a.push(s),
        a.push(
          (0, G.jsxs)(
            Te,
            {
              onClick: this.OnShowStats,
              children: [T(`#Broadcast_VideoContext_ToggleStats`), `	`],
            },
            `statsToggle`,
          ),
        ),
        (o = 0 - (a.length * 21 + 32))),
      this.state.bSubtitlesOpen)
    ) {
      ((t = !0),
        (a = []),
        a.push(
          (0, G.jsx)(
            Se,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(null),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              className: `NoSubtitles`,
              bChecked: !1,
              children: T(`#Broadcast_None`),
            },
            `none`,
          ),
        ));
      for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
        let t = this.props.video.ListSubtitles()[e];
        a.push(
          (0, G.jsx)(
            Se,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(t.language),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              bChecked: t.mode === `showing`,
              children: t.label,
            },
            t.language,
          ),
        );
      }
      o = -292;
    }
    let c = this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
    return (0, G.jsxs)(`div`, {
      className: `STV_BroadcastSettings`,
      children: [
        c &&
          (0, G.jsx)(`div`, {
            className:
              `videoControlButton` + (c ? ` ClosedCaptionsActive` : ``),
            onClick: this.OnSubtitlesClick,
            ref: this.m_elSubtitlesButton,
            children: (0, G.jsx)(Ee, {}),
          }),
        (0, G.jsx)(`div`, {
          className:
            `videoControlButton VideoSettings ` +
            (e ? ` VideoSettingsOpen` : ``),
          onClick: this.OnVideoControlClick,
          ref: this.bindSettingsButton,
          children: (0, G.jsx)(Ae, {}),
        }),
        (0, G.jsx)(q, { video: n }),
        r &&
          r.map((e) =>
            (0, G.jsx)(
              `div`,
              {
                className: `videoControlButton videoControlFitWidth`,
                children: e,
              },
              e.key,
            ),
          ),
        e &&
          (0, G.jsx)(`div`, {
            ref: this.BindSettingsPanel,
            className: `STV_BroadcastSettingsPanel`,
            style: {
              left: this.m_SettingsButtonPos[0],
              top: this.m_SettingsButtonPos[1],
              marginTop: o,
            },
            children: (0, G.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: a,
            }),
          }),
        t &&
          (0, G.jsx)(`div`, {
            ref: this.m_elSubtitlesPanel,
            className: `STV_BroadcastSettingsPanel SubtitlesMenu`,
            style: {
              maxHeight: `260px`,
              left: this.m_SubtitlesButtonPos[0],
              top: this.m_SubtitlesButtonPos[1],
              marginTop: o,
            },
            children: (0, G.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: a,
            }),
          }),
      ],
    });
  }
};
(e([S], K.prototype, `OnVideoControlClick`, null),
  e([S], K.prototype, `OnSubtitlesClick`, null),
  e([S], K.prototype, `OnMouseUp`, null),
  e([S], K.prototype, `bindSettingsButton`, null),
  e([S], K.prototype, `BindSettingsPanel`, null),
  e([S], K.prototype, `OnShowStats`, null));
var Xt = !0,
  q = class extends k.Component {
    constructor(e) {
      (super(e), l(this));
    }
    k_nHideSliderTimeout = 1500;
    m_bShowSlider = Xt;
    m_schHideSlider = new C();
    m_bChildDragging = !1;
    m_bMouseOver = !1;
    componentWillUnmount() {
      this.m_schHideSlider.Cancel();
    }
    ToggleMute() {
      let e = this.props.video,
        t = e.IsMuted();
      (e.SetMute(!t), e.GetVolume() < 0.01 && e.SetVolume(0.5));
    }
    OnMouseEnter(e) {
      ((this.m_bShowSlider = !0),
        (this.m_bMouseOver = !0),
        this.m_schHideSlider.Cancel());
    }
    OnMouseLeave(e) {
      ((this.m_bMouseOver = !1), this.ScheduleHide());
    }
    OnChildDrag(e) {
      ((this.m_bChildDragging = e), this.ScheduleHide());
    }
    ScheduleHide() {
      this.m_bMouseOver ||
        this.m_bChildDragging ||
        this.m_schHideSlider.Schedule(
          this.k_nHideSliderTimeout,
          () => (this.m_bShowSlider = Xt),
        );
    }
    render() {
      let e = this.props.video,
        t = e.IsMuted(),
        n = e.GetVolume() * 100,
        r = `videoControlButton`;
      n > 65
        ? (r += ` HighestVolume`)
        : n > 45
          ? (r += ` HighVolume`)
          : n < 46 && n > 24
            ? (r += ` MedVolume`)
            : n < 25 && (r += ` LowVolume`);
      let i = `BroadcastVolumeControl`;
      return (
        this.m_bShowSlider && (i += ` ShowVolumeSlider`),
        t && (i += ` muted`),
        (0, G.jsx)(`div`, {
          className: i,
          onMouseEnter: this.OnMouseEnter,
          onMouseLeave: this.OnMouseLeave,
          children: (0, G.jsxs)(`div`, {
            className: `BroadcastVolumeControl_FixedLayout`,
            children: [
              (0, G.jsx)(`div`, {
                className: r,
                onClick: this.ToggleMute,
                children: (0, G.jsx)(je, {}),
              }),
              (0, G.jsx)(J, { video: e, onDrag: this.OnChildDrag }),
            ],
          }),
        })
      );
    }
  };
(e([n], q.prototype, `m_bShowSlider`, void 0),
  e([S], q.prototype, `ToggleMute`, null),
  e([S], q.prototype, `OnMouseEnter`, null),
  e([S], q.prototype, `OnMouseLeave`, null),
  e([S], q.prototype, `OnChildDrag`, null),
  (q = e([E], q)));
var J = class extends k.Component {
  constructor(e) {
    (super(e), l(this));
  }
  m_elSlider = null;
  m_nVolumeStartOfDrag = 0;
  OnMouseDown(e) {
    let t = e.currentTarget;
    ((this.m_elSlider = t),
      (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
      this.SetVolumeWithCoord(t, e.clientX),
      t.ownerDocument.defaultView?.addEventListener(
        `mousemove`,
        this.OnMouseMove,
      ),
      t.ownerDocument.defaultView?.addEventListener(`mouseup`, this.OnMouseUp),
      this.props.onDrag(!0));
  }
  OnMouseMove(e) {
    this.m_elSlider && this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
  }
  OnMouseUp(e) {
    if (!this.m_elSlider) return;
    this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
    let t = this.props.video;
    (t.IsMuted() && t.SetVolume(this.m_nVolumeStartOfDrag),
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
  SetVolumeWithCoord(e, t) {
    let n = e.getBoundingClientRect(),
      r = i(t, n.left, n.right, 0, 1),
      a = x(r, 0, 1),
      o = this.props.video;
    (o.SetMute(r < 0.01), o.SetVolume(a));
  }
  render() {
    let e = this.props.video,
      t = e.GetVolume() * 100;
    e.IsMuted() && (t = 0);
    let n = { left: `${t}%` },
      r = { width: `${t}%` };
    return (0, G.jsxs)(`div`, {
      className: `BroadcastVolumeSlider`,
      onMouseDown: this.OnMouseDown,
      children: [
        (0, G.jsx)(`div`, { className: `BroadcastVolumeSlider_Track` }),
        (0, G.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Fill`,
          style: r,
        }),
        (0, G.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Thumb`,
          style: n,
        }),
      ],
    });
  }
};
(e([S], J.prototype, `OnMouseDown`, null),
  e([S], J.prototype, `OnMouseMove`, null),
  e([S], J.prototype, `OnMouseUp`, null),
  e([g], J.prototype, `SetVolumeWithCoord`, null),
  (J = e([E], J)));
var Zt = 3200,
  Qt = 15,
  Y = class extends k.Component {
    m_schHideControls = new C();
    m_schUnmountControls = new C();
    m_elVideo = null;
    m_elBroadcastPlayer = null;
    m_bMouseDown = !1;
    m_elMouseDown = null;
    m_listeners = new pe();
    constructor(e) {
      (super(e),
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
      let e = this.state.video;
      e &&
        (W.StopVideo(e),
        this.setState({ video: null }),
        this.props.fnSetBroadcastVideo?.(null));
    }
    IsMuted() {
      let e = this.state.video;
      return !e || e.IsMuted();
    }
    StopPlaybackTillUserInput() {
      let e = this.state.video;
      e && e.StopPlaybackTillUserInput();
    }
    componentDidUpdate(e, t) {
      (!t.bMountControls && this.state.bMountControls
        ? setTimeout(() => {
            this.setState((e) => ({ bControlsVisible: e.bMountControls }));
          }, 15)
        : t.bControlsVisible &&
          !this.state.bControlsVisible &&
          this.state.video &&
          !this.state.video.IsPaused() &&
          this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
        this.props.steamIDBroadcast !== e.steamIDBroadcast &&
          this.BindVideoRef(this.m_elVideo));
      let n = this.props.nAppIDVOD;
      n &&
        (t.strInitialCapsuleImageUrl === void 0 || e.nAppIDVOD != n) &&
        rt
          .Get()
          .QueueAppRequest(n, { include_assets: !0, include_trailers: !0 })
          .then(() => {
            let e = rt.Get().GetApp(n)?.GetAssets()?.GetMainCapsuleURL() || ``;
            this.setState({ strInitialCapsuleImageUrl: e });
          });
    }
    componentWillUnmount() {
      (this.m_listeners.Unregister(),
        this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.StopVideo());
    }
    BindBroadcastPlayerRef(e) {
      (this.m_listeners.Unregister(),
        (this.m_elBroadcastPlayer = e),
        e &&
          (this.m_listeners.AddEventListener(
            e,
            `fullscreenchange`,
            this.OnFullscreenChange,
          ),
          this.m_listeners.AddEventListener(
            e,
            `mozfullscreenchange`,
            this.OnFullscreenChange,
          ),
          this.m_listeners.AddEventListener(
            e,
            `webkitfullscreenchange`,
            this.OnFullscreenChange,
          ),
          this.m_listeners.AddEventListener(
            e,
            `msfullscreenchange`,
            this.OnFullscreenChange,
          )));
    }
    BindVideoRef(e) {
      let t = null;
      (this.StopVideo(),
        this.props.steamIDBroadcast
          ? e &&
            (t = W.CreateBroadcastVideo(
              e,
              this.props.steamIDBroadcast,
              this.props.watchLocation,
              !!this.props.bWebRTC,
            ))
          : this.props.broadcastClipID
            ? e &&
              (t = W.CreateClipVideo(
                e,
                this.props.broadcastClipID,
                this.props.watchLocation,
              ))
            : this.props.nAppIDVOD &&
              e &&
              ((t = W.CreateVODVideo(
                e,
                this.props.nAppIDVOD,
                this.props.watchLocation,
              )),
              this.props.fnOnVideoEnd &&
                t.SetOnVideoCallback(this.props.fnOnVideoEnd)),
        t &&
          (this.props.bStartMuted && t.SetMute(!0),
          this.props.bStartWithSubtitles && t.SetStartWithSubtitles(!0),
          this.props.bStartPaused ? t.StopPlaybackTillUserInput() : t.Play()),
        this.setState({ video: t }),
        this.props.fnSetBroadcastVideo?.(t),
        (this.m_elVideo = e));
    }
    OnMouseDown(e) {
      ((this.m_bMouseDown = !0),
        (this.m_elMouseDown = e.currentTarget),
        this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        ));
    }
    OnMouseUp(e) {
      ((this.m_bMouseDown = !1),
        this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
          `mouseup`,
          this.OnMouseUp,
        ),
        this.m_schHideControls.Schedule(Zt, this.HideControls));
    }
    OnMouseMove(e) {
      (this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.state.bMountControls
          ? this.state.bControlsVisible ||
            this.setState({ bControlsVisible: !0 })
          : this.setState({ bMountControls: !0 }),
        this.m_schHideControls.Schedule(Zt, this.HideControls));
    }
    OnMouseLeave(e) {
      this.HideControls();
    }
    HideControls() {
      this.state.bControlsVisible &&
        !this.m_bMouseDown &&
        this.setState({ bControlsVisible: !1 });
    }
    UmountControls() {
      this.setState((e) =>
        !e.bControlsVisible && e.bMountControls ? { bMountControls: !1 } : null,
      );
    }
    ShowStatsView() {
      let e = this.state.video;
      e &&
        (this.state.bShowStats ||
          (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0)));
    }
    OnContextMenu(e) {
      this.state.bFullscreen ||
        (Pe((0, G.jsx)(xe, { children: this.GetContextMenuItems() }), e),
        e.preventDefault());
    }
    ToggleStatsView(e) {
      let t = !this.state.bShowStats;
      this.setState({ bShowStats: t });
      let n = this.state.video;
      n && n.SetStatsViewIsVisible(t);
    }
    ShowStorePage(e) {
      let t = this.state.video;
      if (!t || !this.props.onOpenLinkInNewWindow) return;
      let n = t.GetBroadcastInfo();
      if (!n) return;
      let r = Je(`${b.STORE_BASE_URL}app/${n.m_strAppId}`);
      (this.props.onOpenLinkInNewWindow(e, r), e.stopPropagation());
    }
    GetContextMenuItems() {
      let e = [],
        t = this.state.video;
      if (!t) return e;
      let n = t.GetBroadcastInfo();
      return (
        e.push(
          (0, G.jsx)(
            he,
            {
              bChecked: this.state.bShowStats,
              onSelected: (e) => {
                this.ToggleStatsView(e);
              },
              children: T(`#Broadcast_VideoContext_ToggleStats`),
            },
            `togglestats`,
          ),
        ),
        n &&
          n.m_strAppId != `0` &&
          Number.parseInt(n.m_strAppId) != 7 &&
          e.push(
            (0, G.jsx)(
              be,
              {
                onSelected: (e) => {
                  this.ShowStorePage(e);
                },
                children: T(`#Broadcast_VideoContext_OpenStore`),
              },
              `visitstore`,
            ),
          ),
        e
      );
    }
    CloseStats() {
      let e = this.state.video;
      e &&
        this.state.bShowStats &&
        (this.setState({ bShowStats: !1 }), e.SetStatsViewIsVisible(!1));
    }
    OnToggleFullscreen() {
      this.m_elBroadcastPlayer &&
        (ue(this.m_elBroadcastPlayer)
          ? ce(this.m_elBroadcastPlayer)
          : fe(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
    }
    OnFullscreenChange(e) {
      if (!this.m_elBroadcastPlayer) return;
      let t = ue(this.m_elBroadcastPlayer);
      this.setState({ bFullscreen: t });
    }
    BHideVideoControls() {
      let e = this.state.video;
      return !e || e.GetUserInputNeeded()
        ? !0
        : W.GetBroadcastState(e) == R.Error;
    }
    render() {
      let e = this.state.video,
        t = e && e.IsPaused(),
        n = e && e.BHasDASHStats() && this.state.bShowStats,
        r = !!(e && e.IsReplay()),
        i = this.state.bMountControls,
        a = this.state.bControlsVisible || t,
        o = !!(e && e.GetUserInputNeeded()),
        s = e?.GetDASHPlayerStats(),
        c = e?.IsBroadcastVOD() && o && this.state.strInitialCapsuleImageUrl,
        l = `videoContainer`;
      (a || (l += ` HidePlayerControls`),
        t && (l += ` VideoPaused`),
        this.state.bFullscreen && (l += ` fullscreenVideo`),
        this.props.classes && (l += ` ` + this.props.classes));
      let u = [];
      (!this.state.bFullscreen &&
        this.props.actions &&
        (u = u.concat(this.props.actions)),
        !this.state.bFullscreen &&
          this.props.onTheaterMode &&
          u.push(
            (0, G.jsx)(
              `div`,
              {
                onClick: this.props.onTheaterMode,
                title: T(`#Broadcast_View_Theater`),
                className: `BroadcastTheaterToggle`,
              },
              `ChatPosToggle ChatTheaterToggle`,
            ),
          ),
        u.push(
          (0, G.jsx)(
            `div`,
            {
              title: T(`#Broadcast_View_Fullscreen`),
              onClick: this.OnToggleFullscreen,
              className: `BroadcastFullscreenToggle`,
            },
            `FullscreenToggle`,
          ),
        ));
      let d = i && !this.BHideVideoControls(),
        f = i && !this.state.bFullscreen,
        p =
          this.props.fnRenderBroadcastContext &&
          this.props.fnRenderBroadcastContext();
      return (0, G.jsxs)(`div`, {
        ref: this.BindBroadcastPlayerRef,
        className: l,
        onMouseMove: this.OnMouseMove,
        onClick: this.OnMouseMove,
        onMouseLeave: this.OnMouseLeave,
        onContextMenu: this.OnContextMenu,
        onMouseDown: this.OnMouseDown,
        children: [
          p && (0, G.jsx)(`div`, { className: `-E3lTjmAU0M-`, children: p }),
          r && (0, G.jsx)(Gt, {}),
          this.props.showVideoBackgroundBlur &&
            this.m_elVideo &&
            (0, G.jsx)(ot, {
              className: `videoBlur`,
              elementRef: this.m_elVideo,
              updateRate: 33,
              width: 320,
              height: 180,
              reductionFactor: 10,
              blurAmount: 5,
            }),
          (0, G.jsx)(`video`, {
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
            ? (0, G.jsx)($, {
                linkRegions: this.props.linkRegions,
                editMode: !!this.props.editMode,
                onSaveLinkRegions: this.props.onSaveLinkRegions,
              })
            : null,
          this.props.linkElement,
          c &&
            (0, G.jsx)(`img`, {
              loading: `lazy`,
              className: re(`eyYzaS8MDnA-`, `BroadcastPlaceholderImg`),
              src: this.state.strInitialCapsuleImageUrl,
            }),
          d &&
            e &&
            (0, G.jsx)(en, {
              video: e,
              actions: u,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
              onShowStats: this.ToggleStatsView,
              bIncludeClipEditor: !!this.props.bIncludeClipEditor,
            }),
          f && (0, G.jsx)(tn, { onClick: this.props.onRequestClose }),
          n && s && (0, G.jsx)(Jt, { stats: s, closeStats: this.CloseStats }),
          (0, G.jsx)(Kt, { video: e }),
          o && e && (0, G.jsx)(qt, { video: e }),
        ],
      });
    }
  };
(e([S], Y.prototype, `BindBroadcastPlayerRef`, null),
  e([S], Y.prototype, `BindVideoRef`, null),
  e([S], Y.prototype, `OnMouseDown`, null),
  e([S], Y.prototype, `OnMouseUp`, null),
  e([S], Y.prototype, `OnMouseMove`, null),
  e([S], Y.prototype, `OnMouseLeave`, null),
  e([S], Y.prototype, `HideControls`, null),
  e([S], Y.prototype, `UmountControls`, null),
  e([S], Y.prototype, `ShowStatsView`, null),
  e([S], Y.prototype, `OnContextMenu`, null),
  e([S], Y.prototype, `ToggleStatsView`, null),
  e([S], Y.prototype, `ShowStorePage`, null),
  e([S], Y.prototype, `CloseStats`, null),
  e([S], Y.prototype, `OnToggleFullscreen`, null),
  e([S], Y.prototype, `OnFullscreenChange`, null),
  (Y = e([E], Y)));
var $t = Y,
  en = class extends k.Component {
    render() {
      let { video: e } = this.props;
      if (!e) return null;
      let t = e.has_segments;
      return (0, G.jsxs)(`div`, {
        className: `videoControls`,
        children: [
          (0, G.jsx)(cn, {
            steamID: this.props.video.GetBroadcastSteamID(),
            bHideThumbnail: !0,
            bVerticalBroadcastChat: !0,
            onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
          }),
          (0, G.jsxs)(`div`, {
            className: `videoControlsBottom` + (t ? `` : ` noSegments`),
            children: [
              (0, G.jsx)(Q, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              (0, G.jsxs)(`div`, {
                className: `STV_BroadcastController`,
                children: [
                  (0, G.jsx)(`div`, {
                    className: `videoControlsButtons LeftSpacer`,
                  }),
                  (0, G.jsx)(nn, { video: e }),
                  (0, G.jsx)(rn, { video: e }),
                  (0, G.jsx)(K, {
                    video: e,
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
en = e([E], en);
var tn = class extends k.PureComponent {
    render() {
      return this.props.onClick
        ? (0, G.jsx)(`div`, {
            className: `STV_BroadcastClose`,
            onClick: this.props.onClick,
            children: (0, G.jsx)(ye, {}),
          })
        : null;
    }
  },
  nn = class extends k.Component {
    OnJumpBackward() {
      this.props.video.JumpTime(-15);
    }
    OnJumpForward() {
      this.props.video.JumpTime(Qt);
    }
    render() {
      let e = this.props.video,
        t = e.CanSeek();
      return (0, G.jsxs)(`div`, {
        className: `videoControlsButtons PlayControls`,
        children: [
          (0, G.jsx)(X, { video: e }),
          t &&
            (0, G.jsxs)(`div`, {
              className: `videoControlButton videoControlJump controlFlip`,
              onClick: this.OnJumpBackward,
              children: [
                (0, G.jsx)(w, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                (0, G.jsx)(`div`, {
                  className: `jumpAheadValue`,
                  children: Qt,
                }),
              ],
            }),
          (0, G.jsx)(an, { video: e }),
          t &&
            (0, G.jsxs)(`div`, {
              className: `videoControlButton videoControlJump`,
              onClick: this.OnJumpForward,
              children: [
                (0, G.jsx)(w, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                (0, G.jsx)(`div`, {
                  className: `jumpAheadValue`,
                  children: Qt,
                }),
              ],
            }),
          t && (0, G.jsx)(Z, { video: e }),
        ],
      });
    }
  };
(e([S], nn.prototype, `OnJumpBackward`, null),
  e([S], nn.prototype, `OnJumpForward`, null));
var rn = E((e) => {
    if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
    let t = (t) => {
        e.video.JumpToLiveEdge();
      },
      n = e.video.IsOnLiveEdge();
    return (0, G.jsx)(`div`, {
      className: `videoControlsButtons GoLive`,
      children: (0, G.jsxs)(`div`, {
        className:
          `videoControlButton videoControlGoLive` + (n ? ` isLiveEdge` : ``),
        onClick: n ? void 0 : t,
        children: [
          (0, G.jsx)(w, {
            bHidePreArrow: !0,
            bHidePostArrow: !0,
            bFlipHorizontal: !1,
          }),
          (0, G.jsx)(`div`, {
            className: `jumpGoLive`,
            children: T(
              n ? `#DASHPlayerControls_IsLive` : `#DASHPlayerControls_GoLive`,
            ),
          }),
        ],
      }),
    });
  }),
  an = class extends k.Component {
    OnTogglePlayPause() {
      this.props.video.TogglePlayPause();
    }
    render() {
      let e = this.props.video.IsPaused();
      return (0, G.jsx)(`div`, {
        className: `videoControlButton buttonPlayPause`,
        onClick: this.OnTogglePlayPause,
        children: e ? (0, G.jsx)(Ce, {}) : (0, G.jsx)(we, {}),
      });
    }
  };
(e([S], an.prototype, `OnTogglePlayPause`, null), (an = e([E], an)));
var X = class extends k.Component {
  constructor(e) {
    (super(e), l(this), (this.video = e.video));
  }
  componentDidUpdate() {
    this.video = this.props.video;
  }
  video = void 0;
  get has_previous_marker() {
    return this.GetPreviousMarkerTime() !== void 0;
  }
  GetPreviousMarkerTime() {
    let e = this.video;
    if (!e?.has_markers) return;
    let t = e.GetTimelineMarkers(),
      n = e.GetPlaybackTime();
    for (let e = t.length - 1; e >= 0; e--)
      if (!(t[e].nTime >= n)) return t[e].nTime;
  }
  OnJumpToPreviousMarkerClicked(e) {
    let t = this.GetPreviousMarkerTime();
    t !== void 0 && this.props.video.Seek(t - 0.2);
  }
  render() {
    let e = this.props.video.BHasMarkersOrSegments();
    return (0, G.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker controlFlip` +
        (e ? `` : ` noMarkersOrSegments`) +
        (this.has_previous_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToPreviousMarkerClicked,
      children: (0, G.jsx)(w, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
    });
  }
};
(e([n], X.prototype, `video`, void 0),
  e([te], X.prototype, `has_previous_marker`, null),
  e([S], X.prototype, `OnJumpToPreviousMarkerClicked`, null),
  (X = e([E], X)));
var Z = class extends k.Component {
  constructor(e) {
    (super(e), l(this), (this.video = e.video));
  }
  componentDidUpdate() {
    this.video = this.props.video;
  }
  video = void 0;
  get has_next_marker() {
    return this.GetNextMarkerTime() !== void 0;
  }
  GetNextMarkerTime() {
    let e = this.video;
    if (!e?.has_markers) return;
    let t = e.GetTimelineMarkers(),
      n = e.GetPlaybackTime();
    for (let e = 0; e < t.length; e++)
      if (!(t[e].nTime <= n)) return t[e].nTime;
  }
  OnJumpToNextMarkerClicked(e) {
    let t = this.GetNextMarkerTime();
    t !== void 0 && this.props.video.Seek(t);
  }
  render() {
    let e = this.props.video.BHasMarkersOrSegments();
    return (0, G.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker` +
        (e ? `` : ` noMarkersOrSegments`) +
        (this.has_next_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToNextMarkerClicked,
      children: (0, G.jsx)(w, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
    });
  }
};
(e([n], Z.prototype, `video`, void 0),
  e([te], Z.prototype, `has_next_marker`, null),
  e([S], Z.prototype, `OnJumpToNextMarkerClicked`, null),
  (Z = e([E], Z)));
var on = (e) =>
  (0, G.jsx)(`div`, {
    className: `timelineMarker`,
    title: e.label,
    style: { left: e.pos + `%` },
    onMouseEnter: () => e.onMouseEnter(e.pos),
    onMouseLeave: e.onMouseLeave,
    onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
    children: (0, G.jsx)(`div`, {
      className: `timelineMarkerIcon`,
      children: (0, G.jsx)(Me, {}),
    }),
  });
function sn(e) {
  let t = e.startPos,
    n = e.endPos,
    r = ``,
    i = 1;
  return (
    t < 0 && ((i = (n - t) / 10), (t = 0), (r = ` hideFront`)),
    (0, G.jsxs)(`div`, {
      className: `STV_timelineSegment` + r,
      style: { left: t + `%`, width: n - t + `%`, opacity: i },
      onClick: e.onClick,
      children: [
        (0, G.jsx)(`div`, {
          className: `STV_timelineSegmentFrontFill`,
          style: { borderColor: `rgb(` + e.color + `)` },
        }),
        (0, G.jsx)(`div`, {
          className: `STV_timelineSegmentLabel`,
          style: { color: `rgb(` + e.color + `)` },
          children: e.label,
        }),
        (0, G.jsx)(`div`, {
          className: `STV_timelineSegmentBackFill`,
          style: { borderColor: `rgb(` + e.color + `)` },
        }),
      ],
    })
  );
}
var Q = class extends k.Component {
  m_elSlider = k.createRef();
  m_rectSlider = void 0;
  constructor(e) {
    (super(e),
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
  OnMouseDown(e, t) {
    let n = this.m_elSlider.current;
    if (n) {
      (e.persist(), (this.m_rectSlider = n.getBoundingClientRect()));
      let r = {};
      (t === `start`
        ? ((r = { bStartMouseDown: !0 }), e.stopPropagation())
        : t === `end`
          ? ((r = { bEndMouseDown: !0 }), e.stopPropagation())
          : (r = { bGrabberMouseDown: !0 }),
        this.setState(r, () => this.AdjustSliderForClientX(e.clientX)),
        n.ownerDocument.defaultView?.addEventListener(
          `mousemove`,
          this.OnMouseMove,
        ),
        n.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        ));
    }
  }
  OnMouseMove(e) {
    this.AdjustSliderForClientX(e.clientX);
  }
  OnMouseUp(e) {
    (this.state.bStartMouseDown
      ? this.setState({ bStartMouseDown: !1 })
      : this.state.bEndMouseDown
        ? this.setState({ bEndMouseDown: !1 })
        : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
          this.setState({ bGrabberMouseDown: !1, nGrabberMouseDownTime: 0 })),
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
  OnKeyDown(e) {
    e.keyCode == 37
      ? (this.props.video.JumpTime(-15), e.preventDefault())
      : e.keyCode == 39 && (this.props.video.JumpTime(15), e.preventDefault());
  }
  AdjustSliderForClientX(e) {
    let t = this.m_rectSlider;
    if (!t) return;
    let n = this.props.video,
      r = n.GetTimelineStartPos(),
      i = n.GetTimelineStartPos() + n.GetTimelineDuration(),
      a = n.GetTimeAtMousePosition(e, t, r, i);
    this.state.bStartMouseDown
      ? (n.m_editorStartTime = x(a, r, n.m_editorEndTime - 5))
      : this.state.bEndMouseDown
        ? (n.m_editorEndTime = x(a, n.m_editorStartTime + 5, i))
        : a != this.state.nGrabberMouseDownTime &&
          this.setState({ nGrabberMouseDownTime: a });
  }
  OnMouseHoverMove(e) {
    this.AdjustHoverForClientX(e.clientX);
  }
  OnMouseHoverLeave(e) {
    this.setState({ hoverX: 0 });
  }
  AdjustHoverForClientX(e) {
    let t = this.props.video,
      n = t.GetTimelineStartPos(),
      r = t.GetTimelineStartPos() + t.GetTimelineDuration();
    ((this.m_rectSlider = this.m_elSlider.current?.getBoundingClientRect()),
      this.m_rectSlider &&
        t.GetTimeAtMousePosition(e, this.m_rectSlider, n, r));
  }
  OnSegmentClick(e) {
    this.props.video.Seek(e);
  }
  OnMarkerMouseEnter(e) {
    this.setState({ nHoverValue: e });
  }
  OnMarkerMouseLeave() {
    this.setState({ nHoverValue: void 0 });
  }
  render() {
    let e = this.props.video,
      t = this.state.bGrabberMouseDown,
      n = e.GetPercentOffsetFromTime(
        this.state.nGrabberMouseDownTime,
        H.Timeline,
      ),
      r = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), H.Timeline),
      i = e.GetPercentOffsetFromTime(
        e.GetVideoAvailableStartTime(),
        H.Timeline,
      );
    i < 0.05 && (i = 0);
    let a = x(n, 0, 100).toFixed(1) + `%`,
      o = x(r, 0, 100).toFixed(1) + `%`,
      s = x(i, 0, 100).toFixed(1) + `%`,
      c = {},
      l = {},
      u = {},
      d = {};
    t
      ? ((d.left = a), (c.width = a), (l.width = o), (u.width = s))
      : ((d.left = o), (l.width = o), (u.width = s));
    let f = Xe(e.GetPlaybackTime()),
      p = Xe(this.state.nHoverValue ?? 0),
      m = `STV_timelineContainer`;
    (this.state.bGrabberMouseDown && (m += ` grabberDown`),
      e.IsTimelineMapActive() && (m += ` minimapActive`));
    let h = ``;
    ((n = t ? n : r),
      n > 100
        ? (h = ` grabberOffScreenRight grabberOffscreen`)
        : n < 0 && (h = ` grabberOffScreenLeft grabberOffscreen`));
    let ee = [];
    e.GetTimelineMarkers().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTime, H.Timeline);
      r < 0 ||
        r > 100 ||
        ee.push(
          (0, G.jsx)(
            on,
            {
              pos: r,
              label: t.strTemplateName,
              onMouseEnter: this.OnMarkerMouseEnter,
              onMouseLeave: this.OnMarkerMouseLeave,
            },
            n,
          ),
        );
    });
    let g = [];
    e.GetTimelineSegments().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTimeStart, H.Timeline);
      if (r > 100) return;
      let i = e.GetPercentOffsetFromTime(t.nTimeEnd, H.Timeline);
      i < 0 ||
        g.push(
          (0, G.jsx)(
            sn,
            {
              startPos: r,
              endPos: i,
              label: t.strTemplateName,
              color: t.color,
              onClick: (e) => this.OnSegmentClick(t.nTimeStart),
            },
            n,
          ),
        );
    });
    let _ = e.GetPercentOffsetFromTime(e.m_editorStartTime, H.Timeline),
      te = e.GetPercentOffsetFromTime(e.m_editorEndTime, H.Timeline),
      ne = this.props.bIncludeClipEditor
        ? [
            (0, G.jsx)(
              on,
              {
                pos: _,
                label: T(`#DASHPlayerControls_Start`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `start`),
              },
              `start`,
            ),
            (0, G.jsx)(
              on,
              {
                pos: te,
                label: T(`#DASHPlayerControls_End`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `end`),
              },
              `end`,
            ),
          ]
        : [];
    return (0, G.jsx)(`div`, {
      className: `videoTimelineMain`,
      tabIndex: 0,
      onKeyDown: this.OnKeyDown,
      children: (0, G.jsxs)(`div`, {
        className: m,
        children: [
          (0, G.jsx)(`div`, { className: `DialogLabel`, children: f }),
          (0, G.jsx)(`div`, {
            className: `STV_timelineSegmentsContainer`,
            children: g,
          }),
          (0, G.jsx)(`div`, {
            onMouseDown: this.OnMouseDown,
            onMouseMove: this.OnMouseHoverMove,
            onMouseLeave: this.OnMouseHoverLeave,
            ref: this.m_elSlider,
            children: (0, G.jsxs)(`div`, {
              className: `VideoTimelineSlider`,
              children: [
                (0, G.jsx)(`div`, { className: `STV_timelineValue`, style: c }),
                (0, G.jsx)(`div`, {
                  className: `STV_timelineGhostValue`,
                  style: l,
                }),
                (0, G.jsx)(`div`, {
                  className: `STV_timelineNoVideo`,
                  style: u,
                }),
                ee,
                ne,
                !!this.state.hoverX &&
                  (0, G.jsx)(
                    `div`,
                    {
                      style: {
                        position: `absolute`,
                        left: this.state.hoverX - 75,
                        bottom: `30px`,
                      },
                      children: (0, G.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          display: `flex`,
                          justifyContent: `center`,
                        },
                        children: [
                          this.state.thumbnailURL &&
                            (0, G.jsx)(`img`, {
                              style: { width: `150px` },
                              src: this.state.thumbnailURL,
                            }),
                          (0, G.jsx)(`span`, {
                            className: `STV_timelineGrabberValue`,
                            style: { position: `absolute`, bottom: `4px` },
                            children: p,
                          }),
                        ],
                      }),
                    },
                    `grabbertime`,
                  ),
                (0, G.jsx)(`div`, {
                  className: `STV_timelineGrabber_Wrapper`,
                  style: d,
                  children: (0, G.jsx)(`div`, {
                    className: `STV_timelineGrabber` + h,
                    children: (0, G.jsx)(`div`, {
                      className: `STV_timelineGrabberArrow`,
                      children: (0, G.jsx)(Oe, {}),
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
(e([S], Q.prototype, `OnMouseDown`, null),
  e([S], Q.prototype, `OnMouseMove`, null),
  e([S], Q.prototype, `OnMouseUp`, null),
  e([S], Q.prototype, `OnKeyDown`, null),
  e([S], Q.prototype, `OnMouseHoverMove`, null),
  e([S], Q.prototype, `OnMouseHoverLeave`, null),
  e([S], Q.prototype, `AdjustHoverForClientX`, null),
  e([S], Q.prototype, `OnSegmentClick`, null),
  e([S], Q.prototype, `OnMarkerMouseEnter`, null),
  e([S], Q.prototype, `OnMarkerMouseLeave`, null),
  (Q = e([E], Q)));
var cn = class extends k.Component {
  state = { info: null };
  static getDerivedStateFromProps(e, t) {
    return (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
      ((t.info &&= (W.StopInfo(t.info), null)), e.steamID)
      ? { info: W.StartInfo(e.steamID) }
      : null;
  }
  componentWillUnmount() {
    this.state.info && W.StopInfo(this.state.info);
  }
  RenderStreamSwitcher() {
    let e = this.props.steamID,
      t = this.props.onLocalStreamChange;
    return t && N.stream[e]
      ? (0, G.jsx)(ln, { value: e, options: N.stream, onChange: t })
      : null;
  }
  render() {
    let { info: e } = this.state;
    if (!e) return null;
    let t = ``;
    e.m_nViewerCount && (t = We(e.m_nViewerCount));
    let n = N.bValid && N.stream && N.stream[e.m_steamIDBroadcast],
      r =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        (parseInt(e.m_strAppId) > 0 || n),
      i =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        n &&
        N.gidEvent;
    return (0, G.jsxs)(`div`, {
      className: `BroadcastDetails`,
      children: [
        !this.props.bHideThumbnail &&
          (0, G.jsx)(Ut, {
            className: `broadcastDetailsThumbBlur`,
            src: e.m_strThumbnailUrl,
            draggable: !1,
            duration: 2500,
          }),
        (0, G.jsxs)(`div`, {
          className: `BroadcastDetailsHeader`,
          children: [
            e &&
              e.m_strAppTitle &&
              (0, G.jsxs)(`div`, {
                className: `displayColumn`,
                children: [
                  (0, G.jsxs)(`div`, {
                    className: `Info`,
                    children: [
                      (0, G.jsx)(`span`, {
                        className: `AppTitle`,
                        children: e.m_strAppTitle,
                      }),
                      e.m_strTitle &&
                        (0, G.jsxs)(`span`, {
                          className: `BroadcastTitle`,
                          children: [`\xA0- `, e.m_strTitle],
                        }),
                      this.props.onLocalStreamChange &&
                        this.RenderStreamSwitcher(),
                    ],
                  }),
                  t &&
                    (0, G.jsxs)(`div`, {
                      className: `BroadcastDetailsHeader_ViewerCount`,
                      children: [
                        (0, G.jsx)(ve, {}),
                        ke(`#Broadcast_ViewerCount`, t),
                      ],
                    }),
                ],
              }),
            n &&
              this.props.onOpenLinkInNewWindow &&
              (0, G.jsx)(`div`, {
                className: `Actions`,
                children: (0, G.jsx)(`div`, {
                  onClick: (e) => this.props.onOpenLinkInNewWindow?.(e, N.link),
                  className: `BroadcastLink`,
                  children: N.linkName,
                }),
              }),
          ],
        }),
        i && (0, G.jsx)(Wt, { gidEvent: N.gidEvent }),
        r &&
          (0, G.jsx)(ze, {
            id:
              N.bValid && N.stream && N.stream[e.m_steamIDBroadcast]
                ? N.appID
                : parseInt(e.m_strAppId),
            type: `game`,
            bPreferAssetWithoutOverride: !1,
          }),
      ],
    });
  }
};
cn = e([E], cn);
var ln = class extends k.Component {
  showContextMenu(e) {
    let { options: t, value: n, onChange: r } = this.props,
      i = Object.keys(t).map((e) =>
        (0, G.jsx)(
          he,
          { onSelected: () => r(e), bChecked: e === n, children: T(t[e]) },
          e,
        ),
      );
    Pe((0, G.jsx)(xe, { children: i }), e);
  }
  render() {
    let { value: e, options: t } = this.props,
      n = t[e];
    return (0, G.jsxs)(`div`, {
      className: `BroadcastLanguage`,
      onClick: this.showContextMenu,
      children: [
        (0, G.jsxs)(`span`, { children: [`\xA0- `, T(n)] }),
        (0, G.jsx)(`div`, {
          className: `ContextMenuButton`,
          children: (0, G.jsx)(Ne, {}),
        }),
      ],
    });
  }
};
e([S], ln.prototype, `showContextMenu`, null);
var $ = class extends k.Component {
  constructor(e) {
    (super(e), (this.state = { sizableRegion: [] }));
  }
  async AddLinkRegion() {
    let e = this.state.sizableRegion.length;
    (this.state.sizableRegion.push({
      xPosPct: 2.5 + e,
      yPosPct: 2.5 + e,
      widthPct: 20,
      heightPct: 15,
    }),
      this.setState({ sizableRegion: this.state.sizableRegion }, () =>
        this.OnSaveRegions(),
      ));
  }
  componentDidUpdate(e) {
    e.linkRegions.length == 0 &&
      this.props.linkRegions.forEach((e, t) => {
        this.LoadLinkRegion(e, t);
      });
  }
  async LoadLinkRegion(e, t) {
    (this.state.sizableRegion.length,
      this.state.sizableRegion.push({
        xPosPct: e.left,
        yPosPct: e.top,
        widthPct: e.width,
        heightPct: e.height,
        link_url: e.url,
        link_description: e.link_description,
        link_index: e.link_index,
      }),
      await this.setState({ sizableRegion: this.state.sizableRegion }));
  }
  OnSaveRegions() {
    let e = { links: [] };
    for (let t = 0; t < this.state.sizableRegion.length; t++) {
      let n;
      ((n = {
        left: Math.floor(this.state.sizableRegion[t].xPosPct * 100),
        top: Math.floor(this.state.sizableRegion[t].yPosPct * 100),
        width: Math.floor(this.state.sizableRegion[t].widthPct * 100),
        height: Math.floor(this.state.sizableRegion[t].heightPct * 100),
        url: this.state.sizableRegion[t].link_url,
        link_description: this.state.sizableRegion[t].link_description,
        link_index: t,
      }),
        e.links.push(n));
    }
    this.props.onSaveLinkRegions?.(e);
  }
  async DeleteRegion(e) {
    (this.state.sizableRegion.splice(e, 1),
      console.log(`keys: `, this.state.sizableRegion.keys),
      this.setState({ sizableRegion: this.state.sizableRegion }, () =>
        this.OnSaveRegions(),
      ));
  }
  async UpdatePanel(e, t) {
    let n = [...this.state.sizableRegion];
    ((n[e] = t),
      this.setState({ sizableRegion: n }, () => this.OnSaveRegions()));
  }
  render() {
    return (0, G.jsxs)(`div`, {
      className: `LinkOverlayContainer`,
      children: [
        (0, G.jsxs)(`div`, {
          className: `LinkOverlayValidRegion`,
          children: [
            !this.props.editMode && this.props.linkRegions
              ? this.props.linkRegions.map((e) => {
                  let t = _e(e.url);
                  return (0, G.jsx)(
                    ge,
                    {
                      href: e.url,
                      bForceExternal: t,
                      bUseLinkFilter: t,
                      children: (0, G.jsx)(`div`, {
                        className: `LinkRegion`,
                        style: {
                          left: e.left + `%`,
                          top: e.top + `%`,
                          width: e.width + `%`,
                          height: e.height + `%`,
                        },
                        children: (0, G.jsxs)(`div`, {
                          className: `LinkRegionText`,
                          children: [e.link_description, ` `],
                        }),
                      }),
                    },
                    e.link_index,
                  );
                })
              : null,
            this.props.editMode &&
              this.state.sizableRegion.map((e, t) =>
                (0, G.jsx)(
                  it,
                  {
                    index: t,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: e.xPosPct,
                    yPosPct: e.yPosPct,
                    widthPct: e.widthPct,
                    heightPct: e.heightPct,
                    link_url: e.link_url,
                    link_description: e.link_description,
                  },
                  t * 100 + e.xPosPct,
                ),
              ),
            this.props.editMode &&
              (0, G.jsx)(`div`, {
                className: `AddLinkRegion`,
                onClick: this.AddLinkRegion,
                children: T(`#SteamTV_AddLinkRegion`),
              }),
          ],
        }),
        (0, G.jsx)(`div`, {
          className: `LinkOverlayInvalidRegion`,
          children: (0, G.jsx)(`div`, {
            children: T(`#SteamTV_LinkRegionReserved`),
          }),
        }),
      ],
    });
  }
};
(e([S], $.prototype, `AddLinkRegion`, null),
  e([S], $.prototype, `LoadLinkRegion`, null),
  e([S], $.prototype, `OnSaveRegions`, null),
  e([S], $.prototype, `DeleteRegion`, null),
  e([S], $.prototype, `UpdatePanel`, null),
  ($ = e([E], $)));
export { mt as a, W as i, $ as n, $t as r, cn as t };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Ct as n,
  Et as r,
  Lt as i,
  ft as a,
  i as o,
  kt as s,
  l as c,
  n as l,
} from "./chunk~01cfc309bf.js";
import { t as u } from "./chunk~f4c928a27a.js";
import { t as d } from "./chunk~eefd71512b.js";
import { c as f } from "./chunk~b980797e15.js";
import { n as p } from "./chunk~3720b337f3.js";
import { t as ee } from "./chunk~874b4cd3a1.js";
import { o as m } from "./chunk~fc8a9e4879.js";
import {
  $o as h,
  Ar as g,
  Cr as _,
  Dr as v,
  Du as y,
  Fr as b,
  Gl as x,
  Ir as te,
  Ix as ne,
  Jy as S,
  Lb as C,
  Lu as re,
  Mr as w,
  Nb as T,
  Nr as ie,
  Pb as ae,
  Pc as oe,
  Qy as se,
  Ux as E,
  _o as ce,
  cs as le,
  cx as ue,
  es as de,
  hc as fe,
  jr as pe,
  ju as me,
  jx as D,
  ku as he,
  ls as ge,
  mc as _e,
  oo as ve,
  qb as ye,
  qo as O,
  us as be,
  vt as xe,
  wc as k,
  xc as A,
  yS as Se,
} from "./main.js";
import { i as j, n as M, r as N, t as P } from "./chunk~10c934b72c.js";
var F = e(i()),
  I = a(),
  L = class extends F.Component {
    m_elCanvas = null;
    m_Context = null;
    m_schUpdate = new T();
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
    BindCanvasRef(e) {
      this.m_elCanvas = e;
    }
    updateCanvas() {
      if (
        this.props.elementRef == null ||
        this.m_elCanvas == null ||
        this.m_bSetupComplete
      )
        return;
      let e = this.props.scaleFactor || [1, 1],
        t = this.props.elementRef,
        n = this.props.updateRate,
        r = this.m_elCanvas.getContext(`2d`);
      if (!r) return;
      this.m_Context = r;
      let i = Math.floor(
          this.m_elCanvas.clientWidth / this.props.reductionFactor,
        ),
        a = Math.floor(
          this.m_elCanvas.clientHeight / this.props.reductionFactor,
        );
      ((this.m_elCanvas.width = i),
        (this.m_elCanvas.height = a),
        (this.props.blurAmount ?? 0) > 0 &&
          (r.filter = `blur(` + this.props.blurAmount + `px)`));
      let o = () => {
        (r.drawImage(t, 0, 0, i * e[0], a * e[1]),
          n > 0 && this.m_schUpdate.Schedule(n, o));
      };
      (o(), (this.m_bSetupComplete = !0));
    }
    render() {
      return (0, I.jsx)(`canvas`, {
        id: this.props.id,
        className: this.props.className,
        ref: this.BindCanvasRef,
        width: this.props.width,
        height: this.props.height,
      });
    }
  };
(C([E], L.prototype, `BindCanvasRef`, null),
  C([E], L.prototype, `updateCanvas`, null));
var Ce = 500,
  we = class extends F.Component {
    render() {
      let {
          keyExtractor: e,
          style: t,
          duration: n = Ce,
          className: r,
          children: i,
          childRef: a,
          ...s
        } = this.props,
        c = { ...(t || {}), transitionDuration: `${n / 1e3}s` };
      return (0, I.jsx)(l, {
        ...s,
        className: k(`crossfade`, r),
        children: (0, I.jsx)(
          o,
          {
            nodeRef: a,
            classNames: `crossfade-anim`,
            timeout: n,
            style: c,
            children: i,
          },
          e(),
        ),
      });
    }
  };
function Te(e) {
  let { src: t, ...n } = e,
    r = { backgroundImage: `url(${t})` },
    i = F.useRef(null);
  return (0, I.jsx)(we, {
    style: r,
    keyExtractor: () => t,
    childRef: i,
    ...n,
    children: (0, I.jsx)(`div`, { ref: i, className: `crossfade-img` }),
  });
}
function Ee(e) {
  let { gidEvent: t } = e,
    n = m(t);
  return n ? (0, I.jsx)(p, { event: n, language: Se(ye.LANGUAGE) }) : null;
}
function De() {
  return (0, I.jsx)(`div`, {
    className: `STV_ReplayBanner`,
    children: S(`#DASHPlayerControls_IsReplay`),
  });
}
var Oe = c((e) => {
    let t = e.video;
    if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
    let n = M.Loading,
      r = ``;
    if (t) {
      ((n = t.GetBroadcastState()), (r = t.GetBroadcastStateDescription()));
      let e = t.IsBuffering();
      (n == M.Unlocking && ((n = M.Loading), (r = ``)),
        n == M.Ready && e && ((n = M.Loading), (r = ``)));
    }
    if ((t && n != M.Error && t.GetUserInputNeeded()) || n == M.Ready)
      return null;
    let i = n == M.Loading;
    return (0, I.jsxs)(`div`, {
      className: `BroadcastVideoWatchState`,
      style: { filter: `hue-rotate(40deg)` },
      children: [
        i && (0, I.jsx)(d, {}),
        !i &&
          (0, I.jsx)(`div`, {
            className: `BroadcastVideoWatchState_Text`,
            children: r,
          }),
      ],
    });
  }),
  ke = class extends F.Component {
    OnClick() {
      P.UserInputClickVideo(this.props.video);
    }
    render() {
      return (0, I.jsxs)(`div`, {
        className: `BroadcastVideoUserInputNeeded`,
        onClick: this.OnClick,
        children: [
          (0, I.jsx)(de, {}),
          (0, I.jsx)(`span`, {
            children: S(`#DASHPlayerControls_ClickToPlay`),
          }),
        ],
      });
    }
  };
C([E], ke.prototype, `OnClick`, null);
var R = class extends F.Component {
  constructor(e) {
    super(e);
  }
  HideStats() {
    this.props.closeStats && this.props.closeStats();
  }
  render() {
    let e = this.props.stats;
    return (0, I.jsxs)(`div`, {
      className: `dash_video_stats`,
      children: [
        (0, I.jsx)(`button`, {
          className: `dash_stat_close_button`,
          onClick: this.HideStats,
          children: (0, I.jsx)(A, {}),
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_BufferingResolution`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBufferingResolutionToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_PlaybackResolution`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackResolutionToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_HtmlResolution`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetHTMLVideoResolutionToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_ContentServer`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetContentServerToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_StallEvents`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetStalledEventsToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_FailedDownloads`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetFailedDownloadsToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_TimeToFirstFrame`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetTimeToFirstFrameToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_PlaybackRate`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackRateForDisplay(),
            }),
          ],
        }),
        (0, I.jsx)(z, { stats: e }),
      ],
    });
  }
};
(C([E], R.prototype, `HideStats`, null), (R = C([c], R)));
var z = class extends F.Component {
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
        let i = S(
            e
              ? `#DASHPlayerStats_VideoBufferRange`
              : `#DASHPlayerStats_AudioBufferRange`,
            a,
          ),
          o = e
            ? t.GetBufferedVideoSegmentForDisplay(a)
            : t.GetBufferedAudioSegmentForDisplay(a);
        n.push(
          (0, I.jsxs)(
            `div`,
            {
              children: [
                i,
                ` `,
                (0, I.jsx)(`span`, {
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
      let t = S(
        e
          ? `#DASHPlayerStats_VideoNoRangeInformation`
          : `#DASHPlayerStats_AudioNoRangeInformation`,
      );
      n.push((0, I.jsx)(`div`, { children: t }, r + `none`));
    }
    return n;
  }
  render() {
    let e = this.props.stats;
    return (0, I.jsxs)(`div`, {
      className: `dash_video_quick_stats`,
      children: [
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_BytesReceived`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBytesReceivedToDisplay(),
            }),
          ],
        }),
        this.props.stats.BHasFrameInformation() &&
          (0, I.jsxs)(`div`, {
            children: [
              S(`#DASHPlayerStats_DroppedFrames`),
              ` `,
              (0, I.jsx)(`span`, {
                className: `videoStatsValue`,
                children: e.GetDroppedFramesToDisplay(),
              }),
            ],
          }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_VideoBuffered`),
            ` `,
            (0, I.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetVideoBufferedToDisplay(), ` `],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_AudioBuffered`),
            ` `,
            (0, I.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetAudioBufferedToDisplay(), ` `],
            }),
          ],
        }),
        this.createBufferedRange(!0),
        this.createBufferedRange(!1),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_BandwidthRequired`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthRequiredToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_BandwidthVideo`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwithVideoToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_BandwidthNums`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthStatsToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_DownloadNums`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetDownloadTimeStatsToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_ActiveDownloads`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetActiveDownloadsToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_VideoDownloadProgress`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetVideoDownloadProgressToDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_DroppingFrames`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPersistentFrameDropsForDisplay(),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          children: [
            S(`#DASHPlayerStats_CurrentFPS`),
            ` `,
            (0, I.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetCurrentFPSForDisplay(),
            }),
          ],
        }),
      ],
    });
  }
};
z = C([c], z);
var B = class extends F.Component {
  m_elSettingsButton;
  m_SettingsButtonPos;
  m_elClickListener = null;
  m_elSettingsPanel = null;
  m_elSubtitlesButton = F.createRef();
  m_elSubtitlesPanel = F.createRef();
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
      he(this.m_elSettingsPanel, e.target) ||
        this.setState({ bSettingsOpen: !1 }),
      he(this.m_elSubtitlesPanel.current, e.target) ||
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
      s = (0, I.jsx)(
        `div`,
        { className: `settingsMenuSeparator` },
        `separator`,
      );
    if (
      (this.state.bSettingsOpen &&
        ((e = !0),
        (i = this.props.video.GetVideoRepresentations()),
        (a = i.map((e) =>
          (0, I.jsx)(
            b,
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
          (0, I.jsxs)(
            te,
            {
              onClick: this.OnShowStats,
              children: [S(`#Broadcast_VideoContext_ToggleStats`), `	`],
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
          (0, I.jsx)(
            b,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(null),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              className: `NoSubtitles`,
              bChecked: !1,
              children: S(`#Broadcast_None`),
            },
            `none`,
          ),
        ));
      for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
        let t = this.props.video.ListSubtitles()[e];
        a.push(
          (0, I.jsx)(
            b,
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
    return (0, I.jsxs)(`div`, {
      className: `STV_BroadcastSettings`,
      children: [
        c &&
          (0, I.jsx)(`div`, {
            className:
              `videoControlButton` + (c ? ` ClosedCaptionsActive` : ``),
            onClick: this.OnSubtitlesClick,
            ref: this.m_elSubtitlesButton,
            children: (0, I.jsx)(ve, {}),
          }),
        (0, I.jsx)(`div`, {
          className:
            `videoControlButton VideoSettings ` +
            (e ? ` VideoSettingsOpen` : ``),
          onClick: this.OnVideoControlClick,
          ref: this.bindSettingsButton,
          children: (0, I.jsx)(be, {}),
        }),
        (0, I.jsx)(V, { video: n }),
        r &&
          r.map((e) =>
            (0, I.jsx)(
              `div`,
              {
                className: `videoControlButton videoControlFitWidth`,
                children: e,
              },
              e.key,
            ),
          ),
        e &&
          (0, I.jsx)(`div`, {
            ref: this.BindSettingsPanel,
            className: `STV_BroadcastSettingsPanel`,
            style: {
              left: this.m_SettingsButtonPos[0],
              top: this.m_SettingsButtonPos[1],
              marginTop: o,
            },
            children: (0, I.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: a,
            }),
          }),
        t &&
          (0, I.jsx)(`div`, {
            ref: this.m_elSubtitlesPanel,
            className: `STV_BroadcastSettingsPanel SubtitlesMenu`,
            style: {
              maxHeight: `260px`,
              left: this.m_SubtitlesButtonPos[0],
              top: this.m_SubtitlesButtonPos[1],
              marginTop: o,
            },
            children: (0, I.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: a,
            }),
          }),
      ],
    });
  }
};
(C([E], B.prototype, `OnVideoControlClick`, null),
  C([E], B.prototype, `OnSubtitlesClick`, null),
  C([E], B.prototype, `OnMouseUp`, null),
  C([E], B.prototype, `bindSettingsButton`, null),
  C([E], B.prototype, `BindSettingsPanel`, null),
  C([E], B.prototype, `OnShowStats`, null));
var Ae = !0,
  V = class extends F.Component {
    constructor(e) {
      (super(e), s(this));
    }
    k_nHideSliderTimeout = 1500;
    m_bShowSlider = Ae;
    m_schHideSlider = new T();
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
          () => (this.m_bShowSlider = Ae),
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
        (0, I.jsx)(`div`, {
          className: i,
          onMouseEnter: this.OnMouseEnter,
          onMouseLeave: this.OnMouseLeave,
          children: (0, I.jsxs)(`div`, {
            className: `BroadcastVolumeControl_FixedLayout`,
            children: [
              (0, I.jsx)(`div`, {
                className: r,
                onClick: this.ToggleMute,
                children: (0, I.jsx)(fe, {}),
              }),
              (0, I.jsx)(H, { video: e, onDrag: this.OnChildDrag }),
            ],
          }),
        })
      );
    }
  };
(C([t], V.prototype, `m_bShowSlider`, void 0),
  C([E], V.prototype, `ToggleMute`, null),
  C([E], V.prototype, `OnMouseEnter`, null),
  C([E], V.prototype, `OnMouseLeave`, null),
  C([E], V.prototype, `OnChildDrag`, null),
  (V = C([c], V)));
var H = class extends F.Component {
  constructor(e) {
    (super(e), s(this));
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
      r = ne(t, n.left, n.right, 0, 1),
      i = D(r, 0, 1),
      a = this.props.video;
    (a.SetMute(r < 0.01), a.SetVolume(i));
  }
  render() {
    let e = this.props.video,
      t = e.GetVolume() * 100;
    e.IsMuted() && (t = 0);
    let n = { left: `${t}%` },
      r = { width: `${t}%` };
    return (0, I.jsxs)(`div`, {
      className: `BroadcastVolumeSlider`,
      onMouseDown: this.OnMouseDown,
      children: [
        (0, I.jsx)(`div`, { className: `BroadcastVolumeSlider_Track` }),
        (0, I.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Fill`,
          style: r,
        }),
        (0, I.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Thumb`,
          style: n,
        }),
      ],
    });
  }
};
(C([E], H.prototype, `OnMouseDown`, null),
  C([E], H.prototype, `OnMouseMove`, null),
  C([E], H.prototype, `OnMouseUp`, null),
  C([n], H.prototype, `SetVolumeWithCoord`, null),
  (H = C([c], H)));
var je = 3200,
  U = 15,
  W = class extends F.Component {
    m_schHideControls = new T();
    m_schUnmountControls = new T();
    m_elVideo = null;
    m_elBroadcastPlayer = null;
    m_bMouseDown = !1;
    m_elMouseDown = null;
    m_listeners = new ae();
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
        (P.StopVideo(e),
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
        x
          .Get()
          .QueueAppRequest(n, { include_assets: !0, include_trailers: !0 })
          .then(() => {
            let e = x.Get().GetApp(n)?.GetAssets()?.GetMainCapsuleURL() || ``;
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
            (t = P.CreateBroadcastVideo(
              e,
              this.props.steamIDBroadcast,
              this.props.watchLocation,
              !!this.props.bWebRTC,
            ))
          : this.props.broadcastClipID
            ? e &&
              (t = P.CreateClipVideo(
                e,
                this.props.broadcastClipID,
                this.props.watchLocation,
              ))
            : this.props.nAppIDVOD &&
              e &&
              ((t = P.CreateVODVideo(
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
        this.m_schHideControls.Schedule(je, this.HideControls));
    }
    OnMouseMove(e) {
      (this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.state.bMountControls
          ? this.state.bControlsVisible ||
            this.setState({ bControlsVisible: !0 })
          : this.setState({ bMountControls: !0 }),
        this.m_schHideControls.Schedule(je, this.HideControls));
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
        (g((0, I.jsx)(w, { children: this.GetContextMenuItems() }), e),
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
      let r = oe(`${ue.STORE_BASE_URL}app/${n.m_strAppId}`);
      (this.props.onOpenLinkInNewWindow(e, r), e.stopPropagation());
    }
    GetContextMenuItems() {
      let e = [],
        t = this.state.video;
      if (!t) return e;
      let n = t.GetBroadcastInfo();
      return (
        e.push(
          (0, I.jsx)(
            pe,
            {
              bChecked: this.state.bShowStats,
              onSelected: (e) => {
                this.ToggleStatsView(e);
              },
              children: S(`#Broadcast_VideoContext_ToggleStats`),
            },
            `togglestats`,
          ),
        ),
        n &&
          n.m_strAppId != `0` &&
          Number.parseInt(n.m_strAppId) != 7 &&
          e.push(
            (0, I.jsx)(
              ie,
              {
                onSelected: (e) => {
                  this.ShowStorePage(e);
                },
                children: S(`#Broadcast_VideoContext_OpenStore`),
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
        (y(this.m_elBroadcastPlayer)
          ? me(this.m_elBroadcastPlayer)
          : re(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
    }
    OnFullscreenChange(e) {
      if (!this.m_elBroadcastPlayer) return;
      let t = y(this.m_elBroadcastPlayer);
      this.setState({ bFullscreen: t });
    }
    BHideVideoControls() {
      let e = this.state.video;
      return !e || e.GetUserInputNeeded()
        ? !0
        : P.GetBroadcastState(e) == M.Error;
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
            (0, I.jsx)(
              `div`,
              {
                onClick: this.props.onTheaterMode,
                title: S(`#Broadcast_View_Theater`),
                className: `BroadcastTheaterToggle`,
              },
              `ChatPosToggle ChatTheaterToggle`,
            ),
          ),
        u.push(
          (0, I.jsx)(
            `div`,
            {
              title: S(`#Broadcast_View_Fullscreen`),
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
      return (0, I.jsxs)(`div`, {
        ref: this.BindBroadcastPlayerRef,
        className: l,
        onMouseMove: this.OnMouseMove,
        onClick: this.OnMouseMove,
        onMouseLeave: this.OnMouseLeave,
        onContextMenu: this.OnContextMenu,
        onMouseDown: this.OnMouseDown,
        children: [
          p && (0, I.jsx)(`div`, { className: `-E3lTjmAU0M-`, children: p }),
          r && (0, I.jsx)(De, {}),
          this.props.showVideoBackgroundBlur &&
            this.m_elVideo &&
            (0, I.jsx)(L, {
              className: `videoBlur`,
              elementRef: this.m_elVideo,
              updateRate: 33,
              width: 320,
              height: 180,
              reductionFactor: 10,
              blurAmount: 5,
            }),
          (0, I.jsx)(`video`, {
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
            ? (0, I.jsx)($, {
                linkRegions: this.props.linkRegions,
                editMode: !!this.props.editMode,
                onSaveLinkRegions: this.props.onSaveLinkRegions,
              })
            : null,
          this.props.linkElement,
          c &&
            (0, I.jsx)(`img`, {
              loading: `lazy`,
              className: k(`eyYzaS8MDnA-`, `BroadcastPlaceholderImg`),
              src: this.state.strInitialCapsuleImageUrl,
            }),
          d &&
            e &&
            (0, I.jsx)(G, {
              video: e,
              actions: u,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
              onShowStats: this.ToggleStatsView,
              bIncludeClipEditor: !!this.props.bIncludeClipEditor,
            }),
          f && (0, I.jsx)(Ne, { onClick: this.props.onRequestClose }),
          n && s && (0, I.jsx)(R, { stats: s, closeStats: this.CloseStats }),
          (0, I.jsx)(Oe, { video: e }),
          o && e && (0, I.jsx)(ke, { video: e }),
        ],
      });
    }
  };
(C([E], W.prototype, `BindBroadcastPlayerRef`, null),
  C([E], W.prototype, `BindVideoRef`, null),
  C([E], W.prototype, `OnMouseDown`, null),
  C([E], W.prototype, `OnMouseUp`, null),
  C([E], W.prototype, `OnMouseMove`, null),
  C([E], W.prototype, `OnMouseLeave`, null),
  C([E], W.prototype, `HideControls`, null),
  C([E], W.prototype, `UmountControls`, null),
  C([E], W.prototype, `ShowStatsView`, null),
  C([E], W.prototype, `OnContextMenu`, null),
  C([E], W.prototype, `ToggleStatsView`, null),
  C([E], W.prototype, `ShowStorePage`, null),
  C([E], W.prototype, `CloseStats`, null),
  C([E], W.prototype, `OnToggleFullscreen`, null),
  C([E], W.prototype, `OnFullscreenChange`, null),
  (W = C([c], W)));
var Me = W,
  G = class extends F.Component {
    render() {
      let { video: e } = this.props;
      if (!e) return null;
      let t = e.has_segments;
      return (0, I.jsxs)(`div`, {
        className: `videoControls`,
        children: [
          (0, I.jsx)(Q, {
            steamID: this.props.video.GetBroadcastSteamID(),
            bHideThumbnail: !0,
            bVerticalBroadcastChat: !0,
            onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
          }),
          (0, I.jsxs)(`div`, {
            className: `videoControlsBottom` + (t ? `` : ` noSegments`),
            children: [
              (0, I.jsx)(Z, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              (0, I.jsxs)(`div`, {
                className: `STV_BroadcastController`,
                children: [
                  (0, I.jsx)(`div`, {
                    className: `videoControlsButtons LeftSpacer`,
                  }),
                  (0, I.jsx)(K, { video: e }),
                  (0, I.jsx)(Pe, { video: e }),
                  (0, I.jsx)(B, {
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
G = C([c], G);
var Ne = class extends F.PureComponent {
    render() {
      return this.props.onClick
        ? (0, I.jsx)(`div`, {
            className: `STV_BroadcastClose`,
            onClick: this.props.onClick,
            children: (0, I.jsx)(A, {}),
          })
        : null;
    }
  },
  K = class extends F.Component {
    OnJumpBackward() {
      this.props.video.JumpTime(-15);
    }
    OnJumpForward() {
      this.props.video.JumpTime(U);
    }
    render() {
      let e = this.props.video,
        t = e.CanSeek();
      return (0, I.jsxs)(`div`, {
        className: `videoControlsButtons PlayControls`,
        children: [
          (0, I.jsx)(J, { video: e }),
          t &&
            (0, I.jsxs)(`div`, {
              className: `videoControlButton videoControlJump controlFlip`,
              onClick: this.OnJumpBackward,
              children: [
                (0, I.jsx)(O, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                (0, I.jsx)(`div`, { className: `jumpAheadValue`, children: U }),
              ],
            }),
          (0, I.jsx)(q, { video: e }),
          t &&
            (0, I.jsxs)(`div`, {
              className: `videoControlButton videoControlJump`,
              onClick: this.OnJumpForward,
              children: [
                (0, I.jsx)(O, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                (0, I.jsx)(`div`, { className: `jumpAheadValue`, children: U }),
              ],
            }),
          t && (0, I.jsx)(Y, { video: e }),
        ],
      });
    }
  };
(C([E], K.prototype, `OnJumpBackward`, null),
  C([E], K.prototype, `OnJumpForward`, null));
var Pe = c((e) => {
    if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
    let t = (t) => {
        e.video.JumpToLiveEdge();
      },
      n = e.video.IsOnLiveEdge();
    return (0, I.jsx)(`div`, {
      className: `videoControlsButtons GoLive`,
      children: (0, I.jsxs)(`div`, {
        className:
          `videoControlButton videoControlGoLive` + (n ? ` isLiveEdge` : ``),
        onClick: n ? void 0 : t,
        children: [
          (0, I.jsx)(O, {
            bHidePreArrow: !0,
            bHidePostArrow: !0,
            bFlipHorizontal: !1,
          }),
          (0, I.jsx)(`div`, {
            className: `jumpGoLive`,
            children: S(
              n ? `#DASHPlayerControls_IsLive` : `#DASHPlayerControls_GoLive`,
            ),
          }),
        ],
      }),
    });
  }),
  q = class extends F.Component {
    OnTogglePlayPause() {
      this.props.video.TogglePlayPause();
    }
    render() {
      let e = this.props.video.IsPaused();
      return (0, I.jsx)(`div`, {
        className: `videoControlButton buttonPlayPause`,
        onClick: this.OnTogglePlayPause,
        children: e ? (0, I.jsx)(de, {}) : (0, I.jsx)(h, {}),
      });
    }
  };
(C([E], q.prototype, `OnTogglePlayPause`, null), (q = C([c], q)));
var J = class extends F.Component {
  constructor(e) {
    (super(e), s(this), (this.video = e.video));
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
    return (0, I.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker controlFlip` +
        (e ? `` : ` noMarkersOrSegments`) +
        (this.has_previous_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToPreviousMarkerClicked,
      children: (0, I.jsx)(O, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
    });
  }
};
(C([t], J.prototype, `video`, void 0),
  C([r], J.prototype, `has_previous_marker`, null),
  C([E], J.prototype, `OnJumpToPreviousMarkerClicked`, null),
  (J = C([c], J)));
var Y = class extends F.Component {
  constructor(e) {
    (super(e), s(this), (this.video = e.video));
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
    return (0, I.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker` +
        (e ? `` : ` noMarkersOrSegments`) +
        (this.has_next_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToNextMarkerClicked,
      children: (0, I.jsx)(O, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
    });
  }
};
(C([t], Y.prototype, `video`, void 0),
  C([r], Y.prototype, `has_next_marker`, null),
  C([E], Y.prototype, `OnJumpToNextMarkerClicked`, null),
  (Y = C([c], Y)));
var X = (e) =>
  (0, I.jsx)(`div`, {
    className: `timelineMarker`,
    title: e.label,
    style: { left: e.pos + `%` },
    onMouseEnter: () => e.onMouseEnter(e.pos),
    onMouseLeave: e.onMouseLeave,
    onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
    children: (0, I.jsx)(`div`, {
      className: `timelineMarkerIcon`,
      children: (0, I.jsx)(ge, {}),
    }),
  });
function Fe(e) {
  let t = e.startPos,
    n = e.endPos,
    r = ``,
    i = 1;
  return (
    t < 0 && ((i = (n - t) / 10), (t = 0), (r = ` hideFront`)),
    (0, I.jsxs)(`div`, {
      className: `STV_timelineSegment` + r,
      style: { left: t + `%`, width: n - t + `%`, opacity: i },
      onClick: e.onClick,
      children: [
        (0, I.jsx)(`div`, {
          className: `STV_timelineSegmentFrontFill`,
          style: { borderColor: `rgb(` + e.color + `)` },
        }),
        (0, I.jsx)(`div`, {
          className: `STV_timelineSegmentLabel`,
          style: { color: `rgb(` + e.color + `)` },
          children: e.label,
        }),
        (0, I.jsx)(`div`, {
          className: `STV_timelineSegmentBackFill`,
          style: { borderColor: `rgb(` + e.color + `)` },
        }),
      ],
    })
  );
}
var Z = class extends F.Component {
  m_elSlider = F.createRef();
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
      ? (n.m_editorStartTime = D(a, r, n.m_editorEndTime - 5))
      : this.state.bEndMouseDown
        ? (n.m_editorEndTime = D(a, n.m_editorStartTime + 5, i))
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
        N.Timeline,
      ),
      r = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), N.Timeline),
      i = e.GetPercentOffsetFromTime(
        e.GetVideoAvailableStartTime(),
        N.Timeline,
      );
    i < 0.05 && (i = 0);
    let a = D(n, 0, 100).toFixed(1) + `%`,
      o = D(r, 0, 100).toFixed(1) + `%`,
      s = D(i, 0, 100).toFixed(1) + `%`,
      c = {},
      l = {},
      u = {},
      d = {};
    t
      ? ((d.left = a), (c.width = a), (l.width = o), (u.width = s))
      : ((d.left = o), (l.width = o), (u.width = s));
    let p = f(e.GetPlaybackTime()),
      ee = f(this.state.nHoverValue ?? 0),
      m = `STV_timelineContainer`;
    (this.state.bGrabberMouseDown && (m += ` grabberDown`),
      e.IsTimelineMapActive() && (m += ` minimapActive`));
    let h = ``;
    ((n = t ? n : r),
      n > 100
        ? (h = ` grabberOffScreenRight grabberOffscreen`)
        : n < 0 && (h = ` grabberOffScreenLeft grabberOffscreen`));
    let g = [];
    e.GetTimelineMarkers().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTime, N.Timeline);
      r < 0 ||
        r > 100 ||
        g.push(
          (0, I.jsx)(
            X,
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
    let _ = [];
    e.GetTimelineSegments().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTimeStart, N.Timeline);
      if (r > 100) return;
      let i = e.GetPercentOffsetFromTime(t.nTimeEnd, N.Timeline);
      i < 0 ||
        _.push(
          (0, I.jsx)(
            Fe,
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
    let v = e.GetPercentOffsetFromTime(e.m_editorStartTime, N.Timeline),
      y = e.GetPercentOffsetFromTime(e.m_editorEndTime, N.Timeline),
      b = this.props.bIncludeClipEditor
        ? [
            (0, I.jsx)(
              X,
              {
                pos: v,
                label: S(`#DASHPlayerControls_Start`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `start`),
              },
              `start`,
            ),
            (0, I.jsx)(
              X,
              {
                pos: y,
                label: S(`#DASHPlayerControls_End`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `end`),
              },
              `end`,
            ),
          ]
        : [];
    return (0, I.jsx)(`div`, {
      className: `videoTimelineMain`,
      tabIndex: 0,
      onKeyDown: this.OnKeyDown,
      children: (0, I.jsxs)(`div`, {
        className: m,
        children: [
          (0, I.jsx)(`div`, { className: `DialogLabel`, children: p }),
          (0, I.jsx)(`div`, {
            className: `STV_timelineSegmentsContainer`,
            children: _,
          }),
          (0, I.jsx)(`div`, {
            onMouseDown: this.OnMouseDown,
            onMouseMove: this.OnMouseHoverMove,
            onMouseLeave: this.OnMouseHoverLeave,
            ref: this.m_elSlider,
            children: (0, I.jsxs)(`div`, {
              className: `VideoTimelineSlider`,
              children: [
                (0, I.jsx)(`div`, { className: `STV_timelineValue`, style: c }),
                (0, I.jsx)(`div`, {
                  className: `STV_timelineGhostValue`,
                  style: l,
                }),
                (0, I.jsx)(`div`, {
                  className: `STV_timelineNoVideo`,
                  style: u,
                }),
                g,
                b,
                !!this.state.hoverX &&
                  (0, I.jsx)(
                    `div`,
                    {
                      style: {
                        position: `absolute`,
                        left: this.state.hoverX - 75,
                        bottom: `30px`,
                      },
                      children: (0, I.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          display: `flex`,
                          justifyContent: `center`,
                        },
                        children: [
                          this.state.thumbnailURL &&
                            (0, I.jsx)(`img`, {
                              style: { width: `150px` },
                              src: this.state.thumbnailURL,
                            }),
                          (0, I.jsx)(`span`, {
                            className: `STV_timelineGrabberValue`,
                            style: { position: `absolute`, bottom: `4px` },
                            children: ee,
                          }),
                        ],
                      }),
                    },
                    `grabbertime`,
                  ),
                (0, I.jsx)(`div`, {
                  className: `STV_timelineGrabber_Wrapper`,
                  style: d,
                  children: (0, I.jsx)(`div`, {
                    className: `STV_timelineGrabber` + h,
                    children: (0, I.jsx)(`div`, {
                      className: `STV_timelineGrabberArrow`,
                      children: (0, I.jsx)(le, {}),
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
(C([E], Z.prototype, `OnMouseDown`, null),
  C([E], Z.prototype, `OnMouseMove`, null),
  C([E], Z.prototype, `OnMouseUp`, null),
  C([E], Z.prototype, `OnKeyDown`, null),
  C([E], Z.prototype, `OnMouseHoverMove`, null),
  C([E], Z.prototype, `OnMouseHoverLeave`, null),
  C([E], Z.prototype, `AdjustHoverForClientX`, null),
  C([E], Z.prototype, `OnSegmentClick`, null),
  C([E], Z.prototype, `OnMarkerMouseEnter`, null),
  C([E], Z.prototype, `OnMarkerMouseLeave`, null),
  (Z = C([c], Z)));
var Q = class extends F.Component {
  state = { info: null };
  static getDerivedStateFromProps(e, t) {
    return (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
      ((t.info &&= (P.StopInfo(t.info), null)), e.steamID)
      ? { info: P.StartInfo(e.steamID) }
      : null;
  }
  componentWillUnmount() {
    this.state.info && P.StopInfo(this.state.info);
  }
  RenderStreamSwitcher() {
    let e = this.props.steamID,
      t = this.props.onLocalStreamChange;
    return t && j.stream[e]
      ? (0, I.jsx)(Ie, { value: e, options: j.stream, onChange: t })
      : null;
  }
  render() {
    let { info: e } = this.state;
    if (!e) return null;
    let t = ``;
    e.m_nViewerCount && (t = xe(e.m_nViewerCount));
    let n = j.bValid && j.stream && j.stream[e.m_steamIDBroadcast],
      r =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        (parseInt(e.m_strAppId) > 0 || n),
      i =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        n &&
        j.gidEvent;
    return (0, I.jsxs)(`div`, {
      className: `BroadcastDetails`,
      children: [
        !this.props.bHideThumbnail &&
          (0, I.jsx)(Te, {
            className: `broadcastDetailsThumbBlur`,
            src: e.m_strThumbnailUrl,
            draggable: !1,
            duration: 2500,
          }),
        (0, I.jsxs)(`div`, {
          className: `BroadcastDetailsHeader`,
          children: [
            e &&
              e.m_strAppTitle &&
              (0, I.jsxs)(`div`, {
                className: `displayColumn`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `Info`,
                    children: [
                      (0, I.jsx)(`span`, {
                        className: `AppTitle`,
                        children: e.m_strAppTitle,
                      }),
                      e.m_strTitle &&
                        (0, I.jsxs)(`span`, {
                          className: `BroadcastTitle`,
                          children: [`\xA0- `, e.m_strTitle],
                        }),
                      this.props.onLocalStreamChange &&
                        this.RenderStreamSwitcher(),
                    ],
                  }),
                  t &&
                    (0, I.jsxs)(`div`, {
                      className: `BroadcastDetailsHeader_ViewerCount`,
                      children: [
                        (0, I.jsx)(_e, {}),
                        se(`#Broadcast_ViewerCount`, t),
                      ],
                    }),
                ],
              }),
            n &&
              this.props.onOpenLinkInNewWindow &&
              (0, I.jsx)(`div`, {
                className: `Actions`,
                children: (0, I.jsx)(`div`, {
                  onClick: (e) => this.props.onOpenLinkInNewWindow?.(e, j.link),
                  className: `BroadcastLink`,
                  children: j.linkName,
                }),
              }),
          ],
        }),
        i && (0, I.jsx)(Ee, { gidEvent: j.gidEvent }),
        r &&
          (0, I.jsx)(u, {
            id:
              j.bValid && j.stream && j.stream[e.m_steamIDBroadcast]
                ? j.appID
                : parseInt(e.m_strAppId),
            type: `game`,
            bPreferAssetWithoutOverride: !1,
          }),
      ],
    });
  }
};
Q = C([c], Q);
var Ie = class extends F.Component {
  showContextMenu(e) {
    let { options: t, value: n, onChange: r } = this.props,
      i = Object.keys(t).map((e) =>
        (0, I.jsx)(
          pe,
          { onSelected: () => r(e), bChecked: e === n, children: S(t[e]) },
          e,
        ),
      );
    g((0, I.jsx)(w, { children: i }), e);
  }
  render() {
    let { value: e, options: t } = this.props,
      n = t[e];
    return (0, I.jsxs)(`div`, {
      className: `BroadcastLanguage`,
      onClick: this.showContextMenu,
      children: [
        (0, I.jsxs)(`span`, { children: [`\xA0- `, S(n)] }),
        (0, I.jsx)(`div`, {
          className: `ContextMenuButton`,
          children: (0, I.jsx)(ce, {}),
        }),
      ],
    });
  }
};
C([E], Ie.prototype, `showContextMenu`, null);
var $ = class extends F.Component {
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
    return (0, I.jsxs)(`div`, {
      className: `LinkOverlayContainer`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `LinkOverlayValidRegion`,
          children: [
            !this.props.editMode && this.props.linkRegions
              ? this.props.linkRegions.map((e) => {
                  let t = v(e.url);
                  return (0, I.jsx)(
                    _,
                    {
                      href: e.url,
                      bForceExternal: t,
                      bUseLinkFilter: t,
                      children: (0, I.jsx)(`div`, {
                        className: `LinkRegion`,
                        style: {
                          left: e.left + `%`,
                          top: e.top + `%`,
                          width: e.width + `%`,
                          height: e.height + `%`,
                        },
                        children: (0, I.jsxs)(`div`, {
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
                (0, I.jsx)(
                  ee,
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
              (0, I.jsx)(`div`, {
                className: `AddLinkRegion`,
                onClick: this.AddLinkRegion,
                children: S(`#SteamTV_AddLinkRegion`),
              }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `LinkOverlayInvalidRegion`,
          children: (0, I.jsx)(`div`, {
            children: S(`#SteamTV_LinkRegionReserved`),
          }),
        }),
      ],
    });
  }
};
(C([E], $.prototype, `AddLinkRegion`, null),
  C([E], $.prototype, `LoadLinkRegion`, null),
  C([E], $.prototype, `OnSaveRegions`, null),
  C([E], $.prototype, `DeleteRegion`, null),
  C([E], $.prototype, `UpdatePanel`, null),
  ($ = C([c], $)));
export { Me as default };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
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
} from "./libraries.js";
import { t as u } from "./salepreviewwidgets.js";
import { t as d } from "./throbber.js";
import { c as f } from "./dashplayer.js";
import { t as p } from "./linkregionbox.js";
import {
  Ar as m,
  Cu as h,
  Dr as g,
  Du as _,
  Ex as v,
  Go as y,
  Mb as b,
  Mc as x,
  Mr as S,
  Mu as ee,
  Nr as te,
  Ob as C,
  Or as w,
  Qo as T,
  Rx as E,
  Sc as D,
  Tu as ne,
  Uy as O,
  Vl as re,
  Zo as ie,
  br as ae,
  bt as oe,
  cs as se,
  fc as ce,
  ho as le,
  io as ue,
  jx as de,
  kb as fe,
  kr as pe,
  os as me,
  pc as he,
  qy as ge,
  rx as _e,
  ss as ve,
  wr as ye,
  yc as k,
} from "./main.js";
import { t as be } from "./salebanner.js";
import { i as A, n as j, r as M, t as N } from "./broadcastwatchstore.js";
var P = e(i()),
  F = a(),
  I = class extends P.Component {
    m_elCanvas = null;
    m_Context = null;
    m_schUpdate = new C();
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
      return (0, F.jsx)(`canvas`, {
        id: this.props.id,
        className: this.props.className,
        ref: this.BindCanvasRef,
        width: this.props.width,
        height: this.props.height,
      });
    }
  };
(b([E], I.prototype, `BindCanvasRef`, null),
  b([E], I.prototype, `updateCanvas`, null));
var xe = 500,
  Se = class extends P.Component {
    render() {
      let {
          keyExtractor: e,
          style: t,
          duration: n = xe,
          className: r,
          children: i,
          childRef: a,
          ...s
        } = this.props,
        c = { ...(t || {}), transitionDuration: `${n / 1e3}s` };
      return (0, F.jsx)(l, {
        ...s,
        className: D(`crossfade`, r),
        children: (0, F.jsx)(
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
function Ce(e) {
  let { src: t, ...n } = e,
    r = { backgroundImage: `url(${t})` },
    i = P.useRef(null);
  return (0, F.jsx)(Se, {
    style: r,
    keyExtractor: () => t,
    childRef: i,
    ...n,
    children: (0, F.jsx)(`div`, { ref: i, className: `crossfade-img` }),
  });
}
function we() {
  return (0, F.jsx)(`div`, {
    className: `STV_ReplayBanner`,
    children: O(`#DASHPlayerControls_IsReplay`),
  });
}
var Te = c((e) => {
    let t = e.video;
    if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
    let n = j.Loading,
      r = ``;
    if (t) {
      ((n = t.GetBroadcastState()), (r = t.GetBroadcastStateDescription()));
      let e = t.IsBuffering();
      (n == j.Unlocking && ((n = j.Loading), (r = ``)),
        n == j.Ready && e && ((n = j.Loading), (r = ``)));
    }
    if ((t && n != j.Error && t.GetUserInputNeeded()) || n == j.Ready)
      return null;
    let i = n == j.Loading;
    return (0, F.jsxs)(`div`, {
      className: `BroadcastVideoWatchState`,
      style: { filter: `hue-rotate(40deg)` },
      children: [
        i && (0, F.jsx)(d, {}),
        !i &&
          (0, F.jsx)(`div`, {
            className: `BroadcastVideoWatchState_Text`,
            children: r,
          }),
      ],
    });
  }),
  Ee = class extends P.Component {
    OnClick() {
      N.UserInputClickVideo(this.props.video);
    }
    render() {
      return (0, F.jsxs)(`div`, {
        className: `BroadcastVideoUserInputNeeded`,
        onClick: this.OnClick,
        children: [
          (0, F.jsx)(T, {}),
          (0, F.jsx)(`span`, {
            children: O(`#DASHPlayerControls_ClickToPlay`),
          }),
        ],
      });
    }
  };
b([E], Ee.prototype, `OnClick`, null);
var L = class extends P.Component {
  constructor(e) {
    super(e);
  }
  HideStats() {
    this.props.closeStats && this.props.closeStats();
  }
  render() {
    let e = this.props.stats;
    return (0, F.jsxs)(`div`, {
      className: `dash_video_stats`,
      children: [
        (0, F.jsx)(`button`, {
          className: `dash_stat_close_button`,
          onClick: this.HideStats,
          children: (0, F.jsx)(k, {}),
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_BufferingResolution`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBufferingResolutionToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_PlaybackResolution`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackResolutionToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_HtmlResolution`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetHTMLVideoResolutionToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_ContentServer`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetContentServerToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_StallEvents`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetStalledEventsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_FailedDownloads`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetFailedDownloadsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_TimeToFirstFrame`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetTimeToFirstFrameToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_PlaybackRate`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackRateForDisplay(),
            }),
          ],
        }),
        (0, F.jsx)(R, { stats: e }),
      ],
    });
  }
};
(b([E], L.prototype, `HideStats`, null), (L = b([c], L)));
var R = class extends P.Component {
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
        let i = O(
            e
              ? `#DASHPlayerStats_VideoBufferRange`
              : `#DASHPlayerStats_AudioBufferRange`,
            a,
          ),
          o = e
            ? t.GetBufferedVideoSegmentForDisplay(a)
            : t.GetBufferedAudioSegmentForDisplay(a);
        n.push(
          (0, F.jsxs)(
            `div`,
            {
              children: [
                i,
                ` `,
                (0, F.jsx)(`span`, {
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
      let t = O(
        e
          ? `#DASHPlayerStats_VideoNoRangeInformation`
          : `#DASHPlayerStats_AudioNoRangeInformation`,
      );
      n.push((0, F.jsx)(`div`, { children: t }, r + `none`));
    }
    return n;
  }
  render() {
    let e = this.props.stats;
    return (0, F.jsxs)(`div`, {
      className: `dash_video_quick_stats`,
      children: [
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_BytesReceived`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBytesReceivedToDisplay(),
            }),
          ],
        }),
        this.props.stats.BHasFrameInformation() &&
          (0, F.jsxs)(`div`, {
            children: [
              O(`#DASHPlayerStats_DroppedFrames`),
              ` `,
              (0, F.jsx)(`span`, {
                className: `videoStatsValue`,
                children: e.GetDroppedFramesToDisplay(),
              }),
            ],
          }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_VideoBuffered`),
            ` `,
            (0, F.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetVideoBufferedToDisplay(), ` `],
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_AudioBuffered`),
            ` `,
            (0, F.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetAudioBufferedToDisplay(), ` `],
            }),
          ],
        }),
        this.createBufferedRange(!0),
        this.createBufferedRange(!1),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_BandwidthRequired`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthRequiredToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_BandwidthVideo`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwithVideoToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_BandwidthNums`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthStatsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_DownloadNums`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetDownloadTimeStatsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_ActiveDownloads`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetActiveDownloadsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_VideoDownloadProgress`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetVideoDownloadProgressToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_DroppingFrames`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPersistentFrameDropsForDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            O(`#DASHPlayerStats_CurrentFPS`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetCurrentFPSForDisplay(),
            }),
          ],
        }),
      ],
    });
  }
};
R = b([c], R);
var z = class extends P.Component {
  m_elSettingsButton;
  m_SettingsButtonPos;
  m_elClickListener = null;
  m_elSettingsPanel = null;
  m_elSubtitlesButton = P.createRef();
  m_elSubtitlesPanel = P.createRef();
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
      ne(this.m_elSettingsPanel, e.target) ||
        this.setState({ bSettingsOpen: !1 }),
      ne(this.m_elSubtitlesPanel.current, e.target) ||
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
      s = (0, F.jsx)(
        `div`,
        { className: `settingsMenuSeparator` },
        `separator`,
      );
    if (
      (this.state.bSettingsOpen &&
        ((e = !0),
        (i = this.props.video.GetVideoRepresentations()),
        (a = i.map((e) =>
          (0, F.jsx)(
            S,
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
          (0, F.jsxs)(
            te,
            {
              onClick: this.OnShowStats,
              children: [O(`#Broadcast_VideoContext_ToggleStats`), `	`],
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
          (0, F.jsx)(
            S,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(null),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              className: `NoSubtitles`,
              bChecked: !1,
              children: O(`#Broadcast_None`),
            },
            `none`,
          ),
        ));
      for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
        let t = this.props.video.ListSubtitles()[e];
        a.push(
          (0, F.jsx)(
            S,
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
    return (0, F.jsxs)(`div`, {
      className: `STV_BroadcastSettings`,
      children: [
        c &&
          (0, F.jsx)(`div`, {
            className:
              `videoControlButton` + (c ? ` ClosedCaptionsActive` : ``),
            onClick: this.OnSubtitlesClick,
            ref: this.m_elSubtitlesButton,
            children: (0, F.jsx)(ue, {}),
          }),
        (0, F.jsx)(`div`, {
          className:
            `videoControlButton VideoSettings ` +
            (e ? ` VideoSettingsOpen` : ``),
          onClick: this.OnVideoControlClick,
          ref: this.bindSettingsButton,
          children: (0, F.jsx)(se, {}),
        }),
        (0, F.jsx)(B, { video: n }),
        r &&
          r.map((e) =>
            (0, F.jsx)(
              `div`,
              {
                className: `videoControlButton videoControlFitWidth`,
                children: e,
              },
              e.key,
            ),
          ),
        e &&
          (0, F.jsx)(`div`, {
            ref: this.BindSettingsPanel,
            className: `STV_BroadcastSettingsPanel`,
            style: {
              left: this.m_SettingsButtonPos[0],
              top: this.m_SettingsButtonPos[1],
              marginTop: o,
            },
            children: (0, F.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: a,
            }),
          }),
        t &&
          (0, F.jsx)(`div`, {
            ref: this.m_elSubtitlesPanel,
            className: `STV_BroadcastSettingsPanel SubtitlesMenu`,
            style: {
              maxHeight: `260px`,
              left: this.m_SubtitlesButtonPos[0],
              top: this.m_SubtitlesButtonPos[1],
              marginTop: o,
            },
            children: (0, F.jsx)(`div`, {
              className: `STV_BroadcastSettingsMenuItems`,
              children: a,
            }),
          }),
      ],
    });
  }
};
(b([E], z.prototype, `OnVideoControlClick`, null),
  b([E], z.prototype, `OnSubtitlesClick`, null),
  b([E], z.prototype, `OnMouseUp`, null),
  b([E], z.prototype, `bindSettingsButton`, null),
  b([E], z.prototype, `BindSettingsPanel`, null),
  b([E], z.prototype, `OnShowStats`, null));
var De = !0,
  B = class extends P.Component {
    constructor(e) {
      (super(e), s(this));
    }
    k_nHideSliderTimeout = 1500;
    m_bShowSlider = De;
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
          () => (this.m_bShowSlider = De),
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
        (0, F.jsx)(`div`, {
          className: i,
          onMouseEnter: this.OnMouseEnter,
          onMouseLeave: this.OnMouseLeave,
          children: (0, F.jsxs)(`div`, {
            className: `BroadcastVolumeControl_FixedLayout`,
            children: [
              (0, F.jsx)(`div`, {
                className: r,
                onClick: this.ToggleMute,
                children: (0, F.jsx)(he, {}),
              }),
              (0, F.jsx)(V, { video: e, onDrag: this.OnChildDrag }),
            ],
          }),
        })
      );
    }
  };
(b([t], B.prototype, `m_bShowSlider`, void 0),
  b([E], B.prototype, `ToggleMute`, null),
  b([E], B.prototype, `OnMouseEnter`, null),
  b([E], B.prototype, `OnMouseLeave`, null),
  b([E], B.prototype, `OnChildDrag`, null),
  (B = b([c], B)));
var V = class extends P.Component {
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
      r = de(t, n.left, n.right, 0, 1),
      i = v(r, 0, 1),
      a = this.props.video;
    (a.SetMute(r < 0.01), a.SetVolume(i));
  }
  render() {
    let e = this.props.video,
      t = e.GetVolume() * 100;
    e.IsMuted() && (t = 0);
    let n = { left: `${t}%` },
      r = { width: `${t}%` };
    return (0, F.jsxs)(`div`, {
      className: `BroadcastVolumeSlider`,
      onMouseDown: this.OnMouseDown,
      children: [
        (0, F.jsx)(`div`, { className: `BroadcastVolumeSlider_Track` }),
        (0, F.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Fill`,
          style: r,
        }),
        (0, F.jsx)(`div`, {
          className: `BroadcastVolumeSlider_Thumb`,
          style: n,
        }),
      ],
    });
  }
};
(b([E], V.prototype, `OnMouseDown`, null),
  b([E], V.prototype, `OnMouseMove`, null),
  b([E], V.prototype, `OnMouseUp`, null),
  b([n], V.prototype, `SetVolumeWithCoord`, null),
  (V = b([c], V)));
var H = 3200,
  U = 15,
  W = class extends P.Component {
    m_schHideControls = new C();
    m_schUnmountControls = new C();
    m_elVideo = null;
    m_elBroadcastPlayer = null;
    m_bMouseDown = !1;
    m_elMouseDown = null;
    m_listeners = new fe();
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
        (N.StopVideo(e),
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
        re
          .Get()
          .QueueAppRequest(n, { include_assets: !0, include_trailers: !0 })
          .then(() => {
            let e = re.Get().GetApp(n)?.GetAssets()?.GetMainCapsuleURL() || ``;
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
            (t = N.CreateBroadcastVideo(
              e,
              this.props.steamIDBroadcast,
              this.props.watchLocation,
              !!this.props.bWebRTC,
            ))
          : this.props.broadcastClipID
            ? e &&
              (t = N.CreateClipVideo(
                e,
                this.props.broadcastClipID,
                this.props.watchLocation,
              ))
            : this.props.nAppIDVOD &&
              e &&
              ((t = N.CreateVODVideo(
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
        this.m_schHideControls.Schedule(H, this.HideControls));
    }
    OnMouseMove(e) {
      (this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.state.bMountControls
          ? this.state.bControlsVisible ||
            this.setState({ bControlsVisible: !0 })
          : this.setState({ bMountControls: !0 }),
        this.m_schHideControls.Schedule(H, this.HideControls));
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
        (g((0, F.jsx)(pe, { children: this.GetContextMenuItems() }), e),
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
      let r = x(`${_e.STORE_BASE_URL}app/${n.m_strAppId}`);
      (this.props.onOpenLinkInNewWindow(e, r), e.stopPropagation());
    }
    GetContextMenuItems() {
      let e = [],
        t = this.state.video;
      if (!t) return e;
      let n = t.GetBroadcastInfo();
      return (
        e.push(
          (0, F.jsx)(
            w,
            {
              bChecked: this.state.bShowStats,
              onSelected: (e) => {
                this.ToggleStatsView(e);
              },
              children: O(`#Broadcast_VideoContext_ToggleStats`),
            },
            `togglestats`,
          ),
        ),
        n &&
          n.m_strAppId != `0` &&
          Number.parseInt(n.m_strAppId) != 7 &&
          e.push(
            (0, F.jsx)(
              m,
              {
                onSelected: (e) => {
                  this.ShowStorePage(e);
                },
                children: O(`#Broadcast_VideoContext_OpenStore`),
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
        (h(this.m_elBroadcastPlayer)
          ? _(this.m_elBroadcastPlayer)
          : ee(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
    }
    OnFullscreenChange(e) {
      if (!this.m_elBroadcastPlayer) return;
      let t = h(this.m_elBroadcastPlayer);
      this.setState({ bFullscreen: t });
    }
    BHideVideoControls() {
      let e = this.state.video;
      return !e || e.GetUserInputNeeded()
        ? !0
        : N.GetBroadcastState(e) == j.Error;
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
            (0, F.jsx)(
              `div`,
              {
                onClick: this.props.onTheaterMode,
                title: O(`#Broadcast_View_Theater`),
                className: `BroadcastTheaterToggle`,
              },
              `ChatPosToggle ChatTheaterToggle`,
            ),
          ),
        u.push(
          (0, F.jsx)(
            `div`,
            {
              title: O(`#Broadcast_View_Fullscreen`),
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
      return (0, F.jsxs)(`div`, {
        ref: this.BindBroadcastPlayerRef,
        className: l,
        onMouseMove: this.OnMouseMove,
        onClick: this.OnMouseMove,
        onMouseLeave: this.OnMouseLeave,
        onContextMenu: this.OnContextMenu,
        onMouseDown: this.OnMouseDown,
        children: [
          p && (0, F.jsx)(`div`, { className: `-E3lTjmAU0M-`, children: p }),
          r && (0, F.jsx)(we, {}),
          this.props.showVideoBackgroundBlur &&
            this.m_elVideo &&
            (0, F.jsx)(I, {
              className: `videoBlur`,
              elementRef: this.m_elVideo,
              updateRate: 33,
              width: 320,
              height: 180,
              reductionFactor: 10,
              blurAmount: 5,
            }),
          (0, F.jsx)(`video`, {
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
            ? (0, F.jsx)($, {
                linkRegions: this.props.linkRegions,
                editMode: !!this.props.editMode,
                onSaveLinkRegions: this.props.onSaveLinkRegions,
              })
            : null,
          this.props.linkElement,
          c &&
            (0, F.jsx)(`img`, {
              loading: `lazy`,
              className: D(`eyYzaS8MDnA-`, `BroadcastPlaceholderImg`),
              src: this.state.strInitialCapsuleImageUrl,
            }),
          d &&
            e &&
            (0, F.jsx)(G, {
              video: e,
              actions: u,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
              onShowStats: this.ToggleStatsView,
              bIncludeClipEditor: !!this.props.bIncludeClipEditor,
            }),
          f && (0, F.jsx)(ke, { onClick: this.props.onRequestClose }),
          n && s && (0, F.jsx)(L, { stats: s, closeStats: this.CloseStats }),
          (0, F.jsx)(Te, { video: e }),
          o && e && (0, F.jsx)(Ee, { video: e }),
        ],
      });
    }
  };
(b([E], W.prototype, `BindBroadcastPlayerRef`, null),
  b([E], W.prototype, `BindVideoRef`, null),
  b([E], W.prototype, `OnMouseDown`, null),
  b([E], W.prototype, `OnMouseUp`, null),
  b([E], W.prototype, `OnMouseMove`, null),
  b([E], W.prototype, `OnMouseLeave`, null),
  b([E], W.prototype, `HideControls`, null),
  b([E], W.prototype, `UmountControls`, null),
  b([E], W.prototype, `ShowStatsView`, null),
  b([E], W.prototype, `OnContextMenu`, null),
  b([E], W.prototype, `ToggleStatsView`, null),
  b([E], W.prototype, `ShowStorePage`, null),
  b([E], W.prototype, `CloseStats`, null),
  b([E], W.prototype, `OnToggleFullscreen`, null),
  b([E], W.prototype, `OnFullscreenChange`, null),
  (W = b([c], W)));
var Oe = W,
  G = class extends P.Component {
    render() {
      let { video: e } = this.props;
      if (!e) return null;
      let t = e.has_segments;
      return (0, F.jsxs)(`div`, {
        className: `videoControls`,
        children: [
          (0, F.jsx)(Q, {
            steamID: this.props.video.GetBroadcastSteamID(),
            bHideThumbnail: !0,
            bVerticalBroadcastChat: !0,
            onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
          }),
          (0, F.jsxs)(`div`, {
            className: `videoControlsBottom` + (t ? `` : ` noSegments`),
            children: [
              (0, F.jsx)(Z, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              (0, F.jsxs)(`div`, {
                className: `STV_BroadcastController`,
                children: [
                  (0, F.jsx)(`div`, {
                    className: `videoControlsButtons LeftSpacer`,
                  }),
                  (0, F.jsx)(K, { video: e }),
                  (0, F.jsx)(Ae, { video: e }),
                  (0, F.jsx)(z, {
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
G = b([c], G);
var ke = class extends P.PureComponent {
    render() {
      return this.props.onClick
        ? (0, F.jsx)(`div`, {
            className: `STV_BroadcastClose`,
            onClick: this.props.onClick,
            children: (0, F.jsx)(k, {}),
          })
        : null;
    }
  },
  K = class extends P.Component {
    OnJumpBackward() {
      this.props.video.JumpTime(-15);
    }
    OnJumpForward() {
      this.props.video.JumpTime(U);
    }
    render() {
      let e = this.props.video,
        t = e.CanSeek();
      return (0, F.jsxs)(`div`, {
        className: `videoControlsButtons PlayControls`,
        children: [
          (0, F.jsx)(J, { video: e }),
          t &&
            (0, F.jsxs)(`div`, {
              className: `videoControlButton videoControlJump controlFlip`,
              onClick: this.OnJumpBackward,
              children: [
                (0, F.jsx)(y, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                (0, F.jsx)(`div`, { className: `jumpAheadValue`, children: U }),
              ],
            }),
          (0, F.jsx)(q, { video: e }),
          t &&
            (0, F.jsxs)(`div`, {
              className: `videoControlButton videoControlJump`,
              onClick: this.OnJumpForward,
              children: [
                (0, F.jsx)(y, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                (0, F.jsx)(`div`, { className: `jumpAheadValue`, children: U }),
              ],
            }),
          t && (0, F.jsx)(Y, { video: e }),
        ],
      });
    }
  };
(b([E], K.prototype, `OnJumpBackward`, null),
  b([E], K.prototype, `OnJumpForward`, null));
var Ae = c((e) => {
    if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
    let t = (t) => {
        e.video.JumpToLiveEdge();
      },
      n = e.video.IsOnLiveEdge();
    return (0, F.jsx)(`div`, {
      className: `videoControlsButtons GoLive`,
      children: (0, F.jsxs)(`div`, {
        className:
          `videoControlButton videoControlGoLive` + (n ? ` isLiveEdge` : ``),
        onClick: n ? void 0 : t,
        children: [
          (0, F.jsx)(y, {
            bHidePreArrow: !0,
            bHidePostArrow: !0,
            bFlipHorizontal: !1,
          }),
          (0, F.jsx)(`div`, {
            className: `jumpGoLive`,
            children: O(
              n ? `#DASHPlayerControls_IsLive` : `#DASHPlayerControls_GoLive`,
            ),
          }),
        ],
      }),
    });
  }),
  q = class extends P.Component {
    OnTogglePlayPause() {
      this.props.video.TogglePlayPause();
    }
    render() {
      let e = this.props.video.IsPaused();
      return (0, F.jsx)(`div`, {
        className: `videoControlButton buttonPlayPause`,
        onClick: this.OnTogglePlayPause,
        children: e ? (0, F.jsx)(T, {}) : (0, F.jsx)(ie, {}),
      });
    }
  };
(b([E], q.prototype, `OnTogglePlayPause`, null), (q = b([c], q)));
var J = class extends P.Component {
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
    return (0, F.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker controlFlip` +
        (e ? `` : ` noMarkersOrSegments`) +
        (this.has_previous_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToPreviousMarkerClicked,
      children: (0, F.jsx)(y, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
    });
  }
};
(b([t], J.prototype, `video`, void 0),
  b([r], J.prototype, `has_previous_marker`, null),
  b([E], J.prototype, `OnJumpToPreviousMarkerClicked`, null),
  (J = b([c], J)));
var Y = class extends P.Component {
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
    return (0, F.jsx)(`div`, {
      className:
        `videoControlButton jumpToMarker` +
        (e ? `` : ` noMarkersOrSegments`) +
        (this.has_next_marker ? `` : ` noMarkersInDirection`),
      onClick: this.OnJumpToNextMarkerClicked,
      children: (0, F.jsx)(y, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
    });
  }
};
(b([t], Y.prototype, `video`, void 0),
  b([r], Y.prototype, `has_next_marker`, null),
  b([E], Y.prototype, `OnJumpToNextMarkerClicked`, null),
  (Y = b([c], Y)));
var X = (e) =>
  (0, F.jsx)(`div`, {
    className: `timelineMarker`,
    title: e.label,
    style: { left: e.pos + `%` },
    onMouseEnter: () => e.onMouseEnter(e.pos),
    onMouseLeave: e.onMouseLeave,
    onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
    children: (0, F.jsx)(`div`, {
      className: `timelineMarkerIcon`,
      children: (0, F.jsx)(ve, {}),
    }),
  });
function je(e) {
  let t = e.startPos,
    n = e.endPos,
    r = ``,
    i = 1;
  return (
    t < 0 && ((i = (n - t) / 10), (t = 0), (r = ` hideFront`)),
    (0, F.jsxs)(`div`, {
      className: `STV_timelineSegment` + r,
      style: { left: t + `%`, width: n - t + `%`, opacity: i },
      onClick: e.onClick,
      children: [
        (0, F.jsx)(`div`, {
          className: `STV_timelineSegmentFrontFill`,
          style: { borderColor: `rgb(` + e.color + `)` },
        }),
        (0, F.jsx)(`div`, {
          className: `STV_timelineSegmentLabel`,
          style: { color: `rgb(` + e.color + `)` },
          children: e.label,
        }),
        (0, F.jsx)(`div`, {
          className: `STV_timelineSegmentBackFill`,
          style: { borderColor: `rgb(` + e.color + `)` },
        }),
      ],
    })
  );
}
var Z = class extends P.Component {
  m_elSlider = P.createRef();
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
      ? (n.m_editorStartTime = v(a, r, n.m_editorEndTime - 5))
      : this.state.bEndMouseDown
        ? (n.m_editorEndTime = v(a, n.m_editorStartTime + 5, i))
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
        M.Timeline,
      ),
      r = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), M.Timeline),
      i = e.GetPercentOffsetFromTime(
        e.GetVideoAvailableStartTime(),
        M.Timeline,
      );
    i < 0.05 && (i = 0);
    let a = v(n, 0, 100).toFixed(1) + `%`,
      o = v(r, 0, 100).toFixed(1) + `%`,
      s = v(i, 0, 100).toFixed(1) + `%`,
      c = {},
      l = {},
      u = {},
      d = {};
    t
      ? ((d.left = a), (c.width = a), (l.width = o), (u.width = s))
      : ((d.left = o), (l.width = o), (u.width = s));
    let p = f(e.GetPlaybackTime()),
      m = f(this.state.nHoverValue ?? 0),
      h = `STV_timelineContainer`;
    (this.state.bGrabberMouseDown && (h += ` grabberDown`),
      e.IsTimelineMapActive() && (h += ` minimapActive`));
    let g = ``;
    ((n = t ? n : r),
      n > 100
        ? (g = ` grabberOffScreenRight grabberOffscreen`)
        : n < 0 && (g = ` grabberOffScreenLeft grabberOffscreen`));
    let _ = [];
    e.GetTimelineMarkers().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTime, M.Timeline);
      r < 0 ||
        r > 100 ||
        _.push(
          (0, F.jsx)(
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
    let y = [];
    e.GetTimelineSegments().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTimeStart, M.Timeline);
      if (r > 100) return;
      let i = e.GetPercentOffsetFromTime(t.nTimeEnd, M.Timeline);
      i < 0 ||
        y.push(
          (0, F.jsx)(
            je,
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
    let b = e.GetPercentOffsetFromTime(e.m_editorStartTime, M.Timeline),
      x = e.GetPercentOffsetFromTime(e.m_editorEndTime, M.Timeline),
      S = this.props.bIncludeClipEditor
        ? [
            (0, F.jsx)(
              X,
              {
                pos: b,
                label: O(`#DASHPlayerControls_Start`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `start`),
              },
              `start`,
            ),
            (0, F.jsx)(
              X,
              {
                pos: x,
                label: O(`#DASHPlayerControls_End`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `end`),
              },
              `end`,
            ),
          ]
        : [];
    return (0, F.jsx)(`div`, {
      className: `videoTimelineMain`,
      tabIndex: 0,
      onKeyDown: this.OnKeyDown,
      children: (0, F.jsxs)(`div`, {
        className: h,
        children: [
          (0, F.jsx)(`div`, { className: `DialogLabel`, children: p }),
          (0, F.jsx)(`div`, {
            className: `STV_timelineSegmentsContainer`,
            children: y,
          }),
          (0, F.jsx)(`div`, {
            onMouseDown: this.OnMouseDown,
            onMouseMove: this.OnMouseHoverMove,
            onMouseLeave: this.OnMouseHoverLeave,
            ref: this.m_elSlider,
            children: (0, F.jsxs)(`div`, {
              className: `VideoTimelineSlider`,
              children: [
                (0, F.jsx)(`div`, { className: `STV_timelineValue`, style: c }),
                (0, F.jsx)(`div`, {
                  className: `STV_timelineGhostValue`,
                  style: l,
                }),
                (0, F.jsx)(`div`, {
                  className: `STV_timelineNoVideo`,
                  style: u,
                }),
                _,
                S,
                !!this.state.hoverX &&
                  (0, F.jsx)(
                    `div`,
                    {
                      style: {
                        position: `absolute`,
                        left: this.state.hoverX - 75,
                        bottom: `30px`,
                      },
                      children: (0, F.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          display: `flex`,
                          justifyContent: `center`,
                        },
                        children: [
                          this.state.thumbnailURL &&
                            (0, F.jsx)(`img`, {
                              style: { width: `150px` },
                              src: this.state.thumbnailURL,
                            }),
                          (0, F.jsx)(`span`, {
                            className: `STV_timelineGrabberValue`,
                            style: { position: `absolute`, bottom: `4px` },
                            children: m,
                          }),
                        ],
                      }),
                    },
                    `grabbertime`,
                  ),
                (0, F.jsx)(`div`, {
                  className: `STV_timelineGrabber_Wrapper`,
                  style: d,
                  children: (0, F.jsx)(`div`, {
                    className: `STV_timelineGrabber` + g,
                    children: (0, F.jsx)(`div`, {
                      className: `STV_timelineGrabberArrow`,
                      children: (0, F.jsx)(me, {}),
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
(b([E], Z.prototype, `OnMouseDown`, null),
  b([E], Z.prototype, `OnMouseMove`, null),
  b([E], Z.prototype, `OnMouseUp`, null),
  b([E], Z.prototype, `OnKeyDown`, null),
  b([E], Z.prototype, `OnMouseHoverMove`, null),
  b([E], Z.prototype, `OnMouseHoverLeave`, null),
  b([E], Z.prototype, `AdjustHoverForClientX`, null),
  b([E], Z.prototype, `OnSegmentClick`, null),
  b([E], Z.prototype, `OnMarkerMouseEnter`, null),
  b([E], Z.prototype, `OnMarkerMouseLeave`, null),
  (Z = b([c], Z)));
var Q = class extends P.Component {
  state = { info: null };
  static getDerivedStateFromProps(e, t) {
    return (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
      ((t.info &&= (N.StopInfo(t.info), null)), e.steamID)
      ? { info: N.StartInfo(e.steamID) }
      : null;
  }
  componentWillUnmount() {
    this.state.info && N.StopInfo(this.state.info);
  }
  RenderStreamSwitcher() {
    let e = this.props.steamID,
      t = this.props.onLocalStreamChange;
    return t && A.stream[e]
      ? (0, F.jsx)(Me, { value: e, options: A.stream, onChange: t })
      : null;
  }
  render() {
    let { info: e } = this.state;
    if (!e) return null;
    let t = ``;
    e.m_nViewerCount && (t = oe(e.m_nViewerCount));
    let n = A.bValid && A.stream && A.stream[e.m_steamIDBroadcast],
      r =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        (parseInt(e.m_strAppId) > 0 || n),
      i =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        n &&
        A.gidEvent;
    return (0, F.jsxs)(`div`, {
      className: `BroadcastDetails`,
      children: [
        !this.props.bHideThumbnail &&
          (0, F.jsx)(Ce, {
            className: `broadcastDetailsThumbBlur`,
            src: e.m_strThumbnailUrl,
            draggable: !1,
            duration: 2500,
          }),
        (0, F.jsxs)(`div`, {
          className: `BroadcastDetailsHeader`,
          children: [
            e &&
              e.m_strAppTitle &&
              (0, F.jsxs)(`div`, {
                className: `displayColumn`,
                children: [
                  (0, F.jsxs)(`div`, {
                    className: `Info`,
                    children: [
                      (0, F.jsx)(`span`, {
                        className: `AppTitle`,
                        children: e.m_strAppTitle,
                      }),
                      e.m_strTitle &&
                        (0, F.jsxs)(`span`, {
                          className: `BroadcastTitle`,
                          children: [`\xA0- `, e.m_strTitle],
                        }),
                      this.props.onLocalStreamChange &&
                        this.RenderStreamSwitcher(),
                    ],
                  }),
                  t &&
                    (0, F.jsxs)(`div`, {
                      className: `BroadcastDetailsHeader_ViewerCount`,
                      children: [
                        (0, F.jsx)(ce, {}),
                        ge(`#Broadcast_ViewerCount`, t),
                      ],
                    }),
                ],
              }),
            n &&
              this.props.onOpenLinkInNewWindow &&
              (0, F.jsx)(`div`, {
                className: `Actions`,
                children: (0, F.jsx)(`div`, {
                  onClick: (e) => this.props.onOpenLinkInNewWindow?.(e, A.link),
                  className: `BroadcastLink`,
                  children: A.linkName,
                }),
              }),
          ],
        }),
        i && (0, F.jsx)(be, { gidEvent: A.gidEvent }),
        r &&
          (0, F.jsx)(u, {
            id:
              A.bValid && A.stream && A.stream[e.m_steamIDBroadcast]
                ? A.appID
                : parseInt(e.m_strAppId),
            type: `game`,
            bPreferAssetWithoutOverride: !1,
          }),
      ],
    });
  }
};
Q = b([c], Q);
var Me = class extends P.Component {
  showContextMenu(e) {
    let { options: t, value: n, onChange: r } = this.props,
      i = Object.keys(t).map((e) =>
        (0, F.jsx)(
          w,
          { onSelected: () => r(e), bChecked: e === n, children: O(t[e]) },
          e,
        ),
      );
    g((0, F.jsx)(pe, { children: i }), e);
  }
  render() {
    let { value: e, options: t } = this.props,
      n = t[e];
    return (0, F.jsxs)(`div`, {
      className: `BroadcastLanguage`,
      onClick: this.showContextMenu,
      children: [
        (0, F.jsxs)(`span`, { children: [`\xA0- `, O(n)] }),
        (0, F.jsx)(`div`, {
          className: `ContextMenuButton`,
          children: (0, F.jsx)(le, {}),
        }),
      ],
    });
  }
};
b([E], Me.prototype, `showContextMenu`, null);
var $ = class extends P.Component {
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
    return (0, F.jsxs)(`div`, {
      className: `LinkOverlayContainer`,
      children: [
        (0, F.jsxs)(`div`, {
          className: `LinkOverlayValidRegion`,
          children: [
            !this.props.editMode && this.props.linkRegions
              ? this.props.linkRegions.map((e) => {
                  let t = ye(e.url);
                  return (0, F.jsx)(
                    ae,
                    {
                      href: e.url,
                      bForceExternal: t,
                      bUseLinkFilter: t,
                      children: (0, F.jsx)(`div`, {
                        className: `LinkRegion`,
                        style: {
                          left: e.left + `%`,
                          top: e.top + `%`,
                          width: e.width + `%`,
                          height: e.height + `%`,
                        },
                        children: (0, F.jsxs)(`div`, {
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
                (0, F.jsx)(
                  p,
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
              (0, F.jsx)(`div`, {
                className: `AddLinkRegion`,
                onClick: this.AddLinkRegion,
                children: O(`#SteamTV_AddLinkRegion`),
              }),
          ],
        }),
        (0, F.jsx)(`div`, {
          className: `LinkOverlayInvalidRegion`,
          children: (0, F.jsx)(`div`, {
            children: O(`#SteamTV_LinkRegionReserved`),
          }),
        }),
      ],
    });
  }
};
(b([E], $.prototype, `AddLinkRegion`, null),
  b([E], $.prototype, `LoadLinkRegion`, null),
  b([E], $.prototype, `OnSaveRegions`, null),
  b([E], $.prototype, `DeleteRegion`, null),
  b([E], $.prototype, `UpdatePanel`, null),
  ($ = b([c], $)));
export { Oe as default };

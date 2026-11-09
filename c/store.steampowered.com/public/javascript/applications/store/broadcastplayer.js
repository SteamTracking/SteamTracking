import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./salepreviewwidgets.js";
import { _ } from "./throbber.js";
import { _ } from "./dashplayer.js";
import { _ } from "./linkregionbox.js";
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
  _,
} from "./main.js";
import { _ } from "./salebanner.js";
import { _, _, _, _ } from "./broadcastwatchstore.js";
var _ = _(_()),
  _ = _(),
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
      (this.m_elCanvas.width = _),
        (this.m_elCanvas.height = _),
        (this.props.blurAmount ?? 0) > 0 &&
          (_.filter = `blur(` + this.props.blurAmount + `px)`);
      let _ = () => {
        _.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
          _ > 0 && this.m_schUpdate.Schedule(_, _);
      };
      _(), (this.m_bSetupComplete = !0);
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
_([_], _.prototype, `BindCanvasRef`, null),
  _([_], _.prototype, `updateCanvas`, null);
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
      (_ = _.GetBroadcastState()), (_ = _.GetBroadcastStateDescription());
      let _ = _.IsBuffering();
      _ == _.Unlocking && ((_ = _.Loading), (_ = ``)),
        _ == _.Ready && _ && ((_ = _.Loading), (_ = ``));
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
_([_], _.prototype, `HideStats`, null), (_ = _([_], _));
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
    super(_),
      (this.state = {
        bSettingsOpen: !1,
        bSubtitlesOpen: !1,
      });
  }
  OnVideoControlClick(_) {
    this.setState({
      bSettingsOpen: !this.state.bSettingsOpen,
    }),
      (this.m_SettingsButtonPos = [
        this.m_elSettingsButton.offsetLeft,
        this.m_elSettingsButton.offsetTop,
      ]),
      (this.m_elClickListener = _.currentTarget.ownerDocument.defaultView),
      this.m_elClickListener?.addEventListener(`mouseup`, this.OnMouseUp, !0);
  }
  OnSubtitlesClick(_) {
    this.setState({
      bSubtitlesOpen: !this.state.bSubtitlesOpen,
    }),
      (this.m_SubtitlesButtonPos = [
        this.m_elSubtitlesButton.current?.offsetLeft,
        this.m_elSubtitlesButton.current?.offsetTop,
      ]),
      (this.m_elClickListener = _.currentTarget.ownerDocument.defaultView),
      this.m_elClickListener?.addEventListener(`mouseup`, this.OnMouseUp, !0);
  }
  OnMouseUp(_) {
    this.m_elClickListener?.removeEventListener(`mouseup`, this.OnMouseUp, !0),
      _(this.m_elSettingsPanel, _.target) ||
        this.setState({
          bSettingsOpen: !1,
        }),
      _(this.m_elSubtitlesPanel.current, _.target) ||
        this.setState({
          bSubtitlesOpen: !1,
        });
  }
  bindSettingsButton(_) {
    this.m_elSettingsButton = _;
  }
  BindSettingsPanel(_) {
    this.m_elSettingsPanel = _;
  }
  OnShowStats(_) {
    this.props.onShowStats(_),
      this.setState({
        bSettingsOpen: !this.state.bSettingsOpen,
      });
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
                this.props.video.SetVideoRepresentation(_),
                  this.setState({
                    bSettingsOpen: !this.state.bSettingsOpen,
                  });
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
      (_ = !0),
        (_ = []),
        _.push(
          (0, _.jsx)(
            _,
            {
              onClick: () => {
                this.props.video.SetSubtitles(null),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  });
              },
              className: `NoSubtitles`,
              bChecked: !1,
              children: _(`#Broadcast_None`),
            },
            `none`,
          ),
        );
      for (let _ = 0; _ < this.props.video.ListSubtitles().length; _++) {
        let _ = this.props.video.ListSubtitles()[_];
        _.push(
          (0, _.jsx)(
            _,
            {
              onClick: () => {
                this.props.video.SetSubtitles(_.language),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  });
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
_([_], _.prototype, `OnVideoControlClick`, null),
  _([_], _.prototype, `OnSubtitlesClick`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `bindSettingsButton`, null),
  _([_], _.prototype, `BindSettingsPanel`, null),
  _([_], _.prototype, `OnShowStats`, null);
var _ = !0,
  _ = class extends _.Component {
    constructor(_) {
      super(_), _(this);
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
      _.SetMute(!_), _.GetVolume() < 0.01 && _.SetVolume(0.5);
    }
    OnMouseEnter(_) {
      (this.m_bShowSlider = !0),
        (this.m_bMouseOver = !0),
        this.m_schHideSlider.Cancel();
    }
    OnMouseLeave(_) {
      (this.m_bMouseOver = !1), this.ScheduleHide();
    }
    OnChildDrag(_) {
      (this.m_bChildDragging = _), this.ScheduleHide();
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
_([_], _.prototype, `m_bShowSlider`, void 0),
  _([_], _.prototype, `ToggleMute`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `OnMouseLeave`, null),
  _([_], _.prototype, `OnChildDrag`, null),
  (_ = _([_], _));
var _ = class extends _.Component {
  constructor(_) {
    super(_), _(this);
  }
  m_elSlider = null;
  m_nVolumeStartOfDrag = 0;
  OnMouseDown(_) {
    let _ = _.currentTarget;
    (this.m_elSlider = _),
      (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
      this.SetVolumeWithCoord(_, _.clientX),
      _.ownerDocument.defaultView?.addEventListener(
        `mousemove`,
        this.OnMouseMove,
      ),
      _.ownerDocument.defaultView?.addEventListener(`mouseup`, this.OnMouseUp),
      this.props.onDrag(!0);
  }
  OnMouseMove(_) {
    this.m_elSlider && this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
  }
  OnMouseUp(_) {
    if (!this.m_elSlider) return;
    this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
    let _ = this.props.video;
    _.IsMuted() && _.SetVolume(this.m_nVolumeStartOfDrag),
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
      this.props.onDrag(!1);
  }
  SetVolumeWithCoord(_, _) {
    let _ = _.getBoundingClientRect(),
      _ = _(_, _.left, _.right, 0, 1),
      _ = _(_, 0, 1),
      _ = this.props.video;
    _.SetMute(_ < 0.01), _.SetVolume(_);
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
_([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `SetVolumeWithCoord`, null),
  (_ = _([_], _));
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
      super(_),
        (this.state = {
          bMountControls: !1,
          bControlsVisible: !1,
          bShowStats: !1,
          video: null,
          nResizedHeight: null,
          bFullscreen: !1,
        });
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
      !_.bMountControls && this.state.bMountControls
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
          this.BindVideoRef(this.m_elVideo);
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
      this.m_listeners.Unregister(),
        this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.StopVideo();
    }
    BindBroadcastPlayerRef(_) {
      this.m_listeners.Unregister(),
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
          ));
    }
    BindVideoRef(_) {
      let _ = null;
      this.StopVideo(),
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
        (this.m_elVideo = _);
    }
    OnMouseDown(_) {
      (this.m_bMouseDown = !0),
        (this.m_elMouseDown = _.currentTarget),
        this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        );
    }
    OnMouseUp(_) {
      (this.m_bMouseDown = !1),
        this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
          `mouseup`,
          this.OnMouseUp,
        ),
        this.m_schHideControls.Schedule(_, this.HideControls);
    }
    OnMouseMove(_) {
      this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.state.bMountControls
          ? this.state.bControlsVisible ||
            this.setState({
              bControlsVisible: !0,
            })
          : this.setState({
              bMountControls: !0,
            }),
        this.m_schHideControls.Schedule(_, this.HideControls);
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
      this.props.onOpenLinkInNewWindow(_, _), _.stopPropagation();
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
      _ || (_ += ` HidePlayerControls`),
        _ && (_ += ` VideoPaused`),
        this.state.bFullscreen && (_ += ` fullscreenVideo`),
        this.props.classes && (_ += ` ` + this.props.classes);
      let _ = [];
      !this.state.bFullscreen &&
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
        );
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
              className: `-E3lTjmAU0M-`,
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
              className: _(`eyYzaS8MDnA-`, `BroadcastPlaceholderImg`),
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
_([_], _.prototype, `BindBroadcastPlayerRef`, null),
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
  (_ = _([_], _));
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
_([_], _.prototype, `OnJumpBackward`, null),
  _([_], _.prototype, `OnJumpForward`, null);
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
_([_], _.prototype, `OnTogglePlayPause`, null), (_ = _([_], _));
var _ = class extends _.Component {
  constructor(_) {
    super(_), _(this), (this.video = _.video);
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
_([_], _.prototype, `video`, void 0),
  _([_], _.prototype, `has_previous_marker`, null),
  _([_], _.prototype, `OnJumpToPreviousMarkerClicked`, null),
  (_ = _([_], _));
var _ = class extends _.Component {
  constructor(_) {
    super(_), _(this), (this.video = _.video);
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
_([_], _.prototype, `video`, void 0),
  _([_], _.prototype, `has_next_marker`, null),
  _([_], _.prototype, `OnJumpToNextMarkerClicked`, null),
  (_ = _([_], _));
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
    super(_),
      (this.state = {
        nGrabberMouseDownTime: 0,
        bGrabberMouseDown: !1,
        nHoverValue: void 0,
        hoverX: 0,
        bStartMouseDown: !1,
        bEndMouseDown: !1,
        thumbnailURL: ``,
      });
  }
  OnMouseDown(_, _) {
    let _ = this.m_elSlider.current;
    if (_) {
      _.persist(), (this.m_rectSlider = _.getBoundingClientRect());
      let _ = {};
      _ === `start`
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
        );
    }
  }
  OnMouseMove(_) {
    this.AdjustSliderForClientX(_.clientX);
  }
  OnMouseUp(_) {
    this.state.bStartMouseDown
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
        ));
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
    (this.m_rectSlider = this.m_elSlider.current?.getBoundingClientRect()),
      this.m_rectSlider && _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
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
    this.state.bGrabberMouseDown && (_ += ` grabberDown`),
      _.IsTimelineMapActive() && (_ += ` minimapActive`);
    let _ = ``;
    (_ = _ ? _ : _),
      _ > 100
        ? (_ = ` grabberOffScreenRight grabberOffscreen`)
        : _ < 0 && (_ = ` grabberOffScreenLeft grabberOffscreen`);
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
_([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnMouseHoverMove`, null),
  _([_], _.prototype, `OnMouseHoverLeave`, null),
  _([_], _.prototype, `AdjustHoverForClientX`, null),
  _([_], _.prototype, `OnSegmentClick`, null),
  _([_], _.prototype, `OnMarkerMouseEnter`, null),
  _([_], _.prototype, `OnMarkerMouseLeave`, null),
  (_ = _([_], _));
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
    super(_),
      (this.state = {
        sizableRegion: [],
      });
  }
  async AddLinkRegion() {
    let _ = this.state.sizableRegion.length;
    this.state.sizableRegion.push({
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
      );
  }
  componentDidUpdate(_) {
    _.linkRegions.length == 0 &&
      this.props.linkRegions.forEach((_, _) => {
        this.LoadLinkRegion(_, _);
      });
  }
  async LoadLinkRegion(_, _) {
    this.state.sizableRegion.length,
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
      });
  }
  OnSaveRegions() {
    let _ = {
      links: [],
    };
    for (let _ = 0; _ < this.state.sizableRegion.length; _++) {
      let _;
      (_ = {
        left: Math.floor(this.state.sizableRegion[_].xPosPct * 100),
        top: Math.floor(this.state.sizableRegion[_].yPosPct * 100),
        width: Math.floor(this.state.sizableRegion[_].widthPct * 100),
        height: Math.floor(this.state.sizableRegion[_].heightPct * 100),
        url: this.state.sizableRegion[_].link_url,
        link_description: this.state.sizableRegion[_].link_description,
        link_index: _,
      }),
        _.links.push(_);
    }
    this.props.onSaveLinkRegions?.(_);
  }
  async DeleteRegion(_) {
    this.state.sizableRegion.splice(_, 1),
      console.log(`keys: `, this.state.sizableRegion.keys),
      this.setState(
        {
          sizableRegion: this.state.sizableRegion,
        },
        () => this.OnSaveRegions(),
      );
  }
  async UpdatePanel(_, _) {
    let _ = [...this.state.sizableRegion];
    (_[_] = _),
      this.setState(
        {
          sizableRegion: _,
        },
        () => this.OnSaveRegions(),
      );
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
_([_], _.prototype, `AddLinkRegion`, null),
  _([_], _.prototype, `LoadLinkRegion`, null),
  _([_], _.prototype, `OnSaveRegions`, null),
  _([_], _.prototype, `DeleteRegion`, null),
  _([_], _.prototype, `UpdatePanel`, null),
  (_ = _([_], _));
export { _ as default };

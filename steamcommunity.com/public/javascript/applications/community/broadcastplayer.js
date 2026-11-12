/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  C as n,
  Ft as r,
  L as i,
  Mt as a,
  P as o,
  R as s,
  j as c,
  jt as l,
  kt as u,
  ot as d,
} from "./chunk~01cfc309bf.js";
import {
  D as f,
  Ho as p,
  Uo as m,
  g as h,
  hi as g,
  p as _,
} from "./chunk~3f4314f3b4.js";
import { a as v, n as y, o as ee, r as b, t as x } from "./chunk~10c934b72c.js";
import { t as te } from "./chunk~eefd71512b.js";
import { t as ne } from "./chunk~9d71b14b50.js";
import { f as re } from "./chunk~95ecbf576c.js";
import {
  $u as ie,
  Dc as ae,
  Ds as oe,
  Ef as se,
  Gs as ce,
  Id as le,
  Ks as ue,
  Rh as S,
  Su as de,
  Tf as C,
  Ws as fe,
  Xc as w,
  Yr as pe,
  Yu as me,
  Zm as he,
  Zu as ge,
  _l as _e,
  bu as ve,
  cl as ye,
  cu as be,
  dh as T,
  ef as E,
  gl as xe,
  hl as Se,
  hm as Ce,
  im as we,
  kf as D,
  ll as O,
  mh as Te,
  od as Ee,
  ou as De,
  pu as k,
  qs as Oe,
  rf as ke,
  vc as Ae,
  ws as je,
  yu as A,
} from "./main.js";
var j = e(r());
function M(e, t) {
  var n = function (e) {
      return t && (0, j.isValidElement)(e) ? t(e) : e;
    },
    r = Object.create(null);
  return (
    e &&
      j.Children.map(e, function (e) {
        return e;
      }).forEach(function (e) {
        r[e.key] = n(e);
      }),
    r
  );
}
function Me(e, t) {
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
function N(e, t, n) {
  return n[t] == null ? e.props[t] : n[t];
}
function Ne(e, t) {
  return M(e.children, function (n) {
    return (0, j.cloneElement)(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: N(n, `appear`, e),
      enter: N(n, `enter`, e),
      exit: N(n, `exit`, e),
    });
  });
}
function Pe(e, t, n) {
  var r = M(e.children),
    i = Me(t, r);
  return (
    Object.keys(i).forEach(function (a) {
      var o = i[a];
      if ((0, j.isValidElement)(o)) {
        var s = a in t,
          c = a in r,
          l = t[a],
          u = (0, j.isValidElement)(l) && !l.props.in;
        c && (!s || u)
          ? (i[a] = (0, j.cloneElement)(o, {
              onExited: n.bind(null, o),
              in: !0,
              exit: N(o, `exit`, e),
              enter: N(o, `enter`, e),
            }))
          : !c && s && !u
            ? (i[a] = (0, j.cloneElement)(o, { in: !1 }))
            : c &&
              s &&
              (0, j.isValidElement)(l) &&
              (i[a] = (0, j.cloneElement)(o, {
                onExited: n.bind(null, o),
                in: l.props.in,
                exit: N(o, `exit`, e),
                enter: N(o, `enter`, e),
              }));
      }
    }),
    i
  );
}
var Fe =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  Ie = {
    component: `div`,
    childFactory: function (e) {
      return e;
    },
  },
  P = (function (e) {
    a(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this;
      return (
        (r.state = {
          contextValue: { isMounting: !0 },
          handleExited: r.handleExited.bind(ee(r)),
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
          children: t.firstRender ? Ne(e, r) : Pe(e, n, r),
          firstRender: !1,
        };
      }),
      (n.handleExited = function (e, t) {
        var n = M(this.props.children);
        e.key in n ||
          (e.props.onExited && e.props.onExited(t),
          this.mounted &&
            this.setState(function (t) {
              var n = l({}, t.children);
              return (delete n[e.key], { children: n });
            }));
      }),
      (n.render = function () {
        var e = this.props,
          t = e.component,
          n = e.childFactory,
          r = u(e, [`component`, `childFactory`]),
          i = this.state.contextValue,
          a = Fe(this.state.children).map(n);
        return (
          delete r.appear,
          delete r.enter,
          delete r.exit,
          t === null
            ? j.createElement(m.Provider, { value: i }, a)
            : j.createElement(
                m.Provider,
                { value: i },
                j.createElement(t, r, a),
              )
        );
      }),
      t
    );
  })(j.Component);
((P.propTypes = {}), (P.defaultProps = Ie));
var F = d(),
  I = class extends j.Component {
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
(D([S], I.prototype, `BindCanvasRef`, null),
  D([S], I.prototype, `updateCanvas`, null));
var Le = 500,
  Re = class extends j.Component {
    render() {
      let {
          keyExtractor: e,
          style: t,
          duration: n = Le,
          className: r,
          children: i,
          childRef: a,
          ...o
        } = this.props,
        s = { ...(t || {}), transitionDuration: `${n / 1e3}s` };
      return (0, F.jsx)(P, {
        ...o,
        className: de(`crossfade`, r),
        children: (0, F.jsx)(
          p,
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
function ze(e) {
  let { src: t, ...n } = e,
    r = { backgroundImage: `url(${t})` },
    i = j.useRef(null);
  return (0, F.jsx)(Re, {
    style: r,
    keyExtractor: () => t,
    childRef: i,
    ...n,
    children: (0, F.jsx)(`div`, { ref: i, className: `crossfade-img` }),
  });
}
function Be(e) {
  let { gidEvent: t } = e,
    n = _(t);
  return n ? (0, F.jsx)(h, { event: n, language: he(we.LANGUAGE) }) : null;
}
function Ve() {
  return (0, F.jsx)(`div`, {
    className: `STV_ReplayBanner`,
    children: E(`#DASHPlayerControls_IsReplay`),
  });
}
var He = n((e) => {
    let t = e.video;
    if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
    let n = y.Loading,
      r = ``;
    if (t) {
      ((n = t.GetBroadcastState()), (r = t.GetBroadcastStateDescription()));
      let e = t.IsBuffering();
      (n == y.Unlocking && ((n = y.Loading), (r = ``)),
        n == y.Ready && e && ((n = y.Loading), (r = ``)));
    }
    if ((t && n != y.Error && t.GetUserInputNeeded()) || n == y.Ready)
      return null;
    let i = n == y.Loading;
    return (0, F.jsxs)(`div`, {
      className: `BroadcastVideoWatchState`,
      style: { filter: `hue-rotate(40deg)` },
      children: [
        i && (0, F.jsx)(te, {}),
        !i &&
          (0, F.jsx)(`div`, {
            className: `BroadcastVideoWatchState_Text`,
            children: r,
          }),
      ],
    });
  }),
  Ue = class extends j.Component {
    OnClick() {
      x.UserInputClickVideo(this.props.video);
    }
    render() {
      return (0, F.jsxs)(`div`, {
        className: `BroadcastVideoUserInputNeeded`,
        onClick: this.OnClick,
        children: [
          (0, F.jsx)(O, {}),
          (0, F.jsx)(`span`, {
            children: E(`#DASHPlayerControls_ClickToPlay`),
          }),
        ],
      });
    }
  };
D([S], Ue.prototype, `OnClick`, null);
var L = class extends j.Component {
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
            E(`#DASHPlayerStats_BufferingResolution`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBufferingResolutionToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_PlaybackResolution`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPlaybackResolutionToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_HtmlResolution`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetHTMLVideoResolutionToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_ContentServer`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetContentServerToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_StallEvents`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetStalledEventsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_FailedDownloads`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetFailedDownloadsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_TimeToFirstFrame`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetTimeToFirstFrameToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_PlaybackRate`),
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
(D([S], L.prototype, `HideStats`, null), (L = D([n], L)));
var R = class extends j.Component {
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
        let i = E(
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
      let t = E(
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
            E(`#DASHPlayerStats_BytesReceived`),
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
              E(`#DASHPlayerStats_DroppedFrames`),
              ` `,
              (0, F.jsx)(`span`, {
                className: `videoStatsValue`,
                children: e.GetDroppedFramesToDisplay(),
              }),
            ],
          }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_VideoBuffered`),
            ` `,
            (0, F.jsxs)(`span`, {
              className: `videoStatsValue`,
              children: [e.GetVideoBufferedToDisplay(), ` `],
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_AudioBuffered`),
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
            E(`#DASHPlayerStats_BandwidthRequired`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthRequiredToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_BandwidthVideo`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwithVideoToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_BandwidthNums`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetBandwidthStatsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_DownloadNums`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetDownloadTimeStatsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_ActiveDownloads`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetActiveDownloadsToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_VideoDownloadProgress`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetVideoDownloadProgressToDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_DroppingFrames`),
            ` `,
            (0, F.jsx)(`span`, {
              className: `videoStatsValue`,
              children: e.GetPersistentFrameDropsForDisplay(),
            }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          children: [
            E(`#DASHPlayerStats_CurrentFPS`),
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
R = D([n], R);
var z = class extends j.Component {
  m_elSettingsButton;
  m_SettingsButtonPos;
  m_elClickListener = null;
  m_elSettingsPanel = null;
  m_elSubtitlesButton = j.createRef();
  m_elSubtitlesPanel = j.createRef();
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
      ge(this.m_elSettingsPanel, e.target) ||
        this.setState({ bSettingsOpen: !1 }),
      ge(this.m_elSubtitlesPanel.current, e.target) ||
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
            A,
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
            ve,
            {
              onClick: this.OnShowStats,
              children: [E(`#Broadcast_VideoContext_ToggleStats`), `	`],
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
            A,
            {
              onClick: () => {
                (this.props.video.SetSubtitles(null),
                  this.setState({
                    bSubtitlesOpen: !this.state.bSubtitlesOpen,
                  }));
              },
              className: `NoSubtitles`,
              bChecked: !1,
              children: E(`#Broadcast_None`),
            },
            `none`,
          ),
        ));
      for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
        let t = this.props.video.ListSubtitles()[e];
        a.push(
          (0, F.jsx)(
            A,
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
            children: (0, F.jsx)(Ae, {}),
          }),
        (0, F.jsx)(`div`, {
          className:
            `videoControlButton VideoSettings ` +
            (e ? ` VideoSettingsOpen` : ``),
          onClick: this.OnVideoControlClick,
          ref: this.bindSettingsButton,
          children: (0, F.jsx)(_e, {}),
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
(D([S], z.prototype, `OnVideoControlClick`, null),
  D([S], z.prototype, `OnSubtitlesClick`, null),
  D([S], z.prototype, `OnMouseUp`, null),
  D([S], z.prototype, `bindSettingsButton`, null),
  D([S], z.prototype, `BindSettingsPanel`, null),
  D([S], z.prototype, `OnShowStats`, null));
var We = !0,
  B = class extends j.Component {
    constructor(e) {
      (super(e), i(this));
    }
    k_nHideSliderTimeout = 1500;
    m_bShowSlider = We;
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
          () => (this.m_bShowSlider = We),
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
                children: (0, F.jsx)(be, {}),
              }),
              (0, F.jsx)(V, { video: e, onDrag: this.OnChildDrag }),
            ],
          }),
        })
      );
    }
  };
(D([s], B.prototype, `m_bShowSlider`, void 0),
  D([S], B.prototype, `ToggleMute`, null),
  D([S], B.prototype, `OnMouseEnter`, null),
  D([S], B.prototype, `OnMouseLeave`, null),
  D([S], B.prototype, `OnChildDrag`, null),
  (B = D([n], B)));
var V = class extends j.Component {
  constructor(e) {
    (super(e), i(this));
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
      r = Te(t, n.left, n.right, 0, 1),
      i = T(r, 0, 1),
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
(D([S], V.prototype, `OnMouseDown`, null),
  D([S], V.prototype, `OnMouseMove`, null),
  D([S], V.prototype, `OnMouseUp`, null),
  D([c], V.prototype, `SetVolumeWithCoord`, null),
  (V = D([n], V)));
var Ge = t({
    BroadcastDetails: () => Q,
    LinkOverlay: () => $,
    default: () => W,
  }),
  Ke = 3200,
  H = 15,
  U = class extends j.Component {
    m_schHideControls = new C();
    m_schUnmountControls = new C();
    m_elVideo = null;
    m_elBroadcastPlayer = null;
    m_bMouseDown = !1;
    m_elMouseDown = null;
    m_listeners = new se();
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
        (x.StopVideo(e),
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
        le
          .Get()
          .QueueAppRequest(n, { include_assets: !0, include_trailers: !0 })
          .then(() => {
            let e = le.Get().GetApp(n)?.GetAssets()?.GetMainCapsuleURL() || ``;
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
            (t = x.CreateBroadcastVideo(
              e,
              this.props.steamIDBroadcast,
              this.props.watchLocation,
              !!this.props.bWebRTC,
            ))
          : this.props.broadcastClipID
            ? e &&
              (t = x.CreateClipVideo(
                e,
                this.props.broadcastClipID,
                this.props.watchLocation,
              ))
            : this.props.nAppIDVOD &&
              e &&
              ((t = x.CreateVODVideo(
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
        this.m_schHideControls.Schedule(Ke, this.HideControls));
    }
    OnMouseMove(e) {
      (this.m_schHideControls.Cancel(),
        this.m_schUnmountControls.Cancel(),
        this.state.bMountControls
          ? this.state.bControlsVisible ||
            this.setState({ bControlsVisible: !0 })
          : this.setState({ bMountControls: !0 }),
        this.m_schHideControls.Schedule(Ke, this.HideControls));
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
        (fe((0, F.jsx)(ue, { children: this.GetContextMenuItems() }), e),
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
      let r = pe(`${Ce.STORE_BASE_URL}app/${n.m_strAppId}`);
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
            ce,
            {
              bChecked: this.state.bShowStats,
              onSelected: (e) => {
                this.ToggleStatsView(e);
              },
              children: E(`#Broadcast_VideoContext_ToggleStats`),
            },
            `togglestats`,
          ),
        ),
        n &&
          n.m_strAppId != `0` &&
          Number.parseInt(n.m_strAppId) != 7 &&
          e.push(
            (0, F.jsx)(
              Oe,
              {
                onSelected: (e) => {
                  this.ShowStorePage(e);
                },
                children: E(`#Broadcast_VideoContext_OpenStore`),
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
        (me(this.m_elBroadcastPlayer)
          ? ie(this.m_elBroadcastPlayer)
          : Ee(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
    }
    OnFullscreenChange(e) {
      if (!this.m_elBroadcastPlayer) return;
      let t = me(this.m_elBroadcastPlayer);
      this.setState({ bFullscreen: t });
    }
    BHideVideoControls() {
      let e = this.state.video;
      return !e || e.GetUserInputNeeded()
        ? !0
        : x.GetBroadcastState(e) == y.Error;
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
                title: E(`#Broadcast_View_Theater`),
                className: `BroadcastTheaterToggle`,
              },
              `ChatPosToggle ChatTheaterToggle`,
            ),
          ),
        u.push(
          (0, F.jsx)(
            `div`,
            {
              title: E(`#Broadcast_View_Fullscreen`),
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
          r && (0, F.jsx)(Ve, {}),
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
              className: de(`eyYzaS8MDnA-`, `BroadcastPlaceholderImg`),
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
          f && (0, F.jsx)(qe, { onClick: this.props.onRequestClose }),
          n && s && (0, F.jsx)(L, { stats: s, closeStats: this.CloseStats }),
          (0, F.jsx)(He, { video: e }),
          o && e && (0, F.jsx)(Ue, { video: e }),
        ],
      });
    }
  };
(D([S], U.prototype, `BindBroadcastPlayerRef`, null),
  D([S], U.prototype, `BindVideoRef`, null),
  D([S], U.prototype, `OnMouseDown`, null),
  D([S], U.prototype, `OnMouseUp`, null),
  D([S], U.prototype, `OnMouseMove`, null),
  D([S], U.prototype, `OnMouseLeave`, null),
  D([S], U.prototype, `HideControls`, null),
  D([S], U.prototype, `UmountControls`, null),
  D([S], U.prototype, `ShowStatsView`, null),
  D([S], U.prototype, `OnContextMenu`, null),
  D([S], U.prototype, `ToggleStatsView`, null),
  D([S], U.prototype, `ShowStorePage`, null),
  D([S], U.prototype, `CloseStats`, null),
  D([S], U.prototype, `OnToggleFullscreen`, null),
  D([S], U.prototype, `OnFullscreenChange`, null),
  (U = D([n], U)));
var W = U,
  G = class extends j.Component {
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
                  (0, F.jsx)(Je, { video: e }),
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
G = D([n], G);
var qe = class extends j.PureComponent {
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
  K = class extends j.Component {
    OnJumpBackward() {
      this.props.video.JumpTime(-15);
    }
    OnJumpForward() {
      this.props.video.JumpTime(H);
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
                (0, F.jsx)(w, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                (0, F.jsx)(`div`, { className: `jumpAheadValue`, children: H }),
              ],
            }),
          (0, F.jsx)(q, { video: e }),
          t &&
            (0, F.jsxs)(`div`, {
              className: `videoControlButton videoControlJump`,
              onClick: this.OnJumpForward,
              children: [
                (0, F.jsx)(w, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                (0, F.jsx)(`div`, { className: `jumpAheadValue`, children: H }),
              ],
            }),
          t && (0, F.jsx)(Y, { video: e }),
        ],
      });
    }
  };
(D([S], K.prototype, `OnJumpBackward`, null),
  D([S], K.prototype, `OnJumpForward`, null));
var Je = n((e) => {
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
          (0, F.jsx)(w, {
            bHidePreArrow: !0,
            bHidePostArrow: !0,
            bFlipHorizontal: !1,
          }),
          (0, F.jsx)(`div`, {
            className: `jumpGoLive`,
            children: E(
              n ? `#DASHPlayerControls_IsLive` : `#DASHPlayerControls_GoLive`,
            ),
          }),
        ],
      }),
    });
  }),
  q = class extends j.Component {
    OnTogglePlayPause() {
      this.props.video.TogglePlayPause();
    }
    render() {
      let e = this.props.video.IsPaused();
      return (0, F.jsx)(`div`, {
        className: `videoControlButton buttonPlayPause`,
        onClick: this.OnTogglePlayPause,
        children: e ? (0, F.jsx)(O, {}) : (0, F.jsx)(ye, {}),
      });
    }
  };
(D([S], q.prototype, `OnTogglePlayPause`, null), (q = D([n], q)));
var J = class extends j.Component {
  constructor(e) {
    (super(e), i(this), (this.video = e.video));
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
      children: (0, F.jsx)(w, { bHidePostArrow: !0, bFlipHorizontal: !0 }),
    });
  }
};
(D([s], J.prototype, `video`, void 0),
  D([o], J.prototype, `has_previous_marker`, null),
  D([S], J.prototype, `OnJumpToPreviousMarkerClicked`, null),
  (J = D([n], J)));
var Y = class extends j.Component {
  constructor(e) {
    (super(e), i(this), (this.video = e.video));
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
      children: (0, F.jsx)(w, { bHidePostArrow: !0, bFlipHorizontal: !1 }),
    });
  }
};
(D([s], Y.prototype, `video`, void 0),
  D([o], Y.prototype, `has_next_marker`, null),
  D([S], Y.prototype, `OnJumpToNextMarkerClicked`, null),
  (Y = D([n], Y)));
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
      children: (0, F.jsx)(xe, {}),
    }),
  });
function Ye(e) {
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
var Z = class extends j.Component {
  m_elSlider = j.createRef();
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
      ? (n.m_editorStartTime = T(a, r, n.m_editorEndTime - 5))
      : this.state.bEndMouseDown
        ? (n.m_editorEndTime = T(a, n.m_editorStartTime + 5, i))
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
        b.Timeline,
      ),
      r = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), b.Timeline),
      i = e.GetPercentOffsetFromTime(
        e.GetVideoAvailableStartTime(),
        b.Timeline,
      );
    i < 0.05 && (i = 0);
    let a = T(n, 0, 100).toFixed(1) + `%`,
      o = T(r, 0, 100).toFixed(1) + `%`,
      s = T(i, 0, 100).toFixed(1) + `%`,
      c = {},
      l = {},
      u = {},
      d = {};
    t
      ? ((d.left = a), (c.width = a), (l.width = o), (u.width = s))
      : ((d.left = o), (l.width = o), (u.width = s));
    let f = re(e.GetPlaybackTime()),
      p = re(this.state.nHoverValue ?? 0),
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
      let r = e.GetPercentOffsetFromTime(t.nTime, b.Timeline);
      r < 0 ||
        r > 100 ||
        g.push(
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
    let _ = [];
    e.GetTimelineSegments().forEach((t, n) => {
      let r = e.GetPercentOffsetFromTime(t.nTimeStart, b.Timeline);
      if (r > 100) return;
      let i = e.GetPercentOffsetFromTime(t.nTimeEnd, b.Timeline);
      i < 0 ||
        _.push(
          (0, F.jsx)(
            Ye,
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
    let v = e.GetPercentOffsetFromTime(e.m_editorStartTime, b.Timeline),
      y = e.GetPercentOffsetFromTime(e.m_editorEndTime, b.Timeline),
      ee = this.props.bIncludeClipEditor
        ? [
            (0, F.jsx)(
              X,
              {
                pos: v,
                label: E(`#DASHPlayerControls_Start`),
                onMouseEnter: this.OnMarkerMouseEnter,
                onMouseLeave: this.OnMarkerMouseLeave,
                onMouseDown: (e) => this.OnMouseDown(e, `start`),
              },
              `start`,
            ),
            (0, F.jsx)(
              X,
              {
                pos: y,
                label: E(`#DASHPlayerControls_End`),
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
        className: m,
        children: [
          (0, F.jsx)(`div`, { className: `DialogLabel`, children: f }),
          (0, F.jsx)(`div`, {
            className: `STV_timelineSegmentsContainer`,
            children: _,
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
                g,
                ee,
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
                            children: p,
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
                    className: `STV_timelineGrabber` + h,
                    children: (0, F.jsx)(`div`, {
                      className: `STV_timelineGrabberArrow`,
                      children: (0, F.jsx)(Se, {}),
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
(D([S], Z.prototype, `OnMouseDown`, null),
  D([S], Z.prototype, `OnMouseMove`, null),
  D([S], Z.prototype, `OnMouseUp`, null),
  D([S], Z.prototype, `OnKeyDown`, null),
  D([S], Z.prototype, `OnMouseHoverMove`, null),
  D([S], Z.prototype, `OnMouseHoverLeave`, null),
  D([S], Z.prototype, `AdjustHoverForClientX`, null),
  D([S], Z.prototype, `OnSegmentClick`, null),
  D([S], Z.prototype, `OnMarkerMouseEnter`, null),
  D([S], Z.prototype, `OnMarkerMouseLeave`, null),
  (Z = D([n], Z)));
var Q = class extends j.Component {
  state = { info: null };
  static getDerivedStateFromProps(e, t) {
    return (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
      ((t.info &&= (x.StopInfo(t.info), null)), e.steamID)
      ? { info: x.StartInfo(e.steamID) }
      : null;
  }
  componentWillUnmount() {
    this.state.info && x.StopInfo(this.state.info);
  }
  RenderStreamSwitcher() {
    let e = this.props.steamID,
      t = this.props.onLocalStreamChange;
    return t && v.stream[e]
      ? (0, F.jsx)(Xe, { value: e, options: v.stream, onChange: t })
      : null;
  }
  render() {
    let { info: e } = this.state;
    if (!e) return null;
    let t = ``;
    e.m_nViewerCount && (t = ne(e.m_nViewerCount));
    let n = v.bValid && v.stream && v.stream[e.m_steamIDBroadcast],
      r =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        (parseInt(e.m_strAppId) > 0 || n),
      i =
        !this.props.bHideThumbnail &&
        this.props.bVerticalBroadcastChat &&
        n &&
        v.gidEvent;
    return (0, F.jsxs)(`div`, {
      className: `BroadcastDetails`,
      children: [
        !this.props.bHideThumbnail &&
          (0, F.jsx)(ze, {
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
                        (0, F.jsx)(De, {}),
                        ke(`#Broadcast_ViewerCount`, t),
                      ],
                    }),
                ],
              }),
            n &&
              this.props.onOpenLinkInNewWindow &&
              (0, F.jsx)(`div`, {
                className: `Actions`,
                children: (0, F.jsx)(`div`, {
                  onClick: (e) => this.props.onOpenLinkInNewWindow?.(e, v.link),
                  className: `BroadcastLink`,
                  children: v.linkName,
                }),
              }),
          ],
        }),
        i && (0, F.jsx)(Be, { gidEvent: v.gidEvent }),
        r &&
          (0, F.jsx)(g, {
            id:
              v.bValid && v.stream && v.stream[e.m_steamIDBroadcast]
                ? v.appID
                : parseInt(e.m_strAppId),
            type: `game`,
            bPreferAssetWithoutOverride: !1,
          }),
      ],
    });
  }
};
Q = D([n], Q);
var Xe = class extends j.Component {
  showContextMenu(e) {
    let { options: t, value: n, onChange: r } = this.props,
      i = Object.keys(t).map((e) =>
        (0, F.jsx)(
          ce,
          { onSelected: () => r(e), bChecked: e === n, children: E(t[e]) },
          e,
        ),
      );
    fe((0, F.jsx)(ue, { children: i }), e);
  }
  render() {
    let { value: e, options: t } = this.props,
      n = t[e];
    return (0, F.jsxs)(`div`, {
      className: `BroadcastLanguage`,
      onClick: this.showContextMenu,
      children: [
        (0, F.jsxs)(`span`, { children: [`\xA0- `, E(n)] }),
        (0, F.jsx)(`div`, {
          className: `ContextMenuButton`,
          children: (0, F.jsx)(ae, {}),
        }),
      ],
    });
  }
};
D([S], Xe.prototype, `showContextMenu`, null);
var $ = class extends j.Component {
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
                  let t = oe(e.url);
                  return (0, F.jsx)(
                    je,
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
                  f,
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
                children: E(`#SteamTV_AddLinkRegion`),
              }),
          ],
        }),
        (0, F.jsx)(`div`, {
          className: `LinkOverlayInvalidRegion`,
          children: (0, F.jsx)(`div`, {
            children: E(`#SteamTV_LinkRegionReserved`),
          }),
        }),
      ],
    });
  }
};
(D([S], $.prototype, `AddLinkRegion`, null),
  D([S], $.prototype, `LoadLinkRegion`, null),
  D([S], $.prototype, `OnSaveRegions`, null),
  D([S], $.prototype, `DeleteRegion`, null),
  D([S], $.prototype, `UpdatePanel`, null),
  ($ = D([n], $)));
export { Ge as n, W as t };

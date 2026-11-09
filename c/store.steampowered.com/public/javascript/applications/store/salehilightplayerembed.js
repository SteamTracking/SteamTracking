import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./image.js";
import "./modals.js";
import { _ } from "./throbber.js";
import { _, _, _ } from "./trailertitlebar.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = `_7OxSOadMubQ-`,
  _ = `SoeJSTHTKi4-`,
  _ = `_5tpsR11QFTo-`,
  _ = `_4av218OCtYs-`,
  _ = `RylL--hTWB0-`,
  _ = `mGOBKozFlf0-`,
  _ = `r048Hv39npI-`,
  _ = `EjUPF3bt2-A-`,
  _ = `ZvA83f32Rb8-`,
  _ = `Mlx3eU2LaJ0-`,
  _ = `DSoaCiA4Ylg-`,
  _ = `kTZDgZ5dX-8-`,
  _ = `WDTUiOfZjRM-`,
  _ = `bgTVZST3FaE-`,
  _ = `B4zxAgrjjQU-`,
  _ = `ZQJlDRLSD2I-`,
  _ = `NxfxOoNRnJc-`,
  _ = `_6hGeFUDe5X0-`,
  _ = _();
function _(_) {
  let { _: _, bPopOutTrailerPlayback: _ } = _,
    { data: _ } = _(_),
    _ = _(_),
    { data: _ } = _(_),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _?.highlights?.filter((_) => !_ || _.all_ages),
    _ = _ && _?.length > 0 ? _[0] : void 0,
    _ = _.useCallback(() => {
      _ && (_ ? _(!0) : _((_) => !_));
    }, [_, _]);
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      children: (0, _.jsx)(_, {
        size: `medium`,
      }),
    });
  let _ = _
    ? (0, _.jsx)(_, {
        trailer: _,
        bPlayVideo: _,
        fnTogglePlayTrailer: _,
      })
    : null;
  return !_ && !_?.length
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            elFeaturedInCenter: _,
            trailer: _,
            _: _,
            name: _.name || ``,
          }),
          _
            ? (0, _.jsx)(_, {
                _: _,
                bShowModal: _,
                hideModal: () => _(!1),
              })
            : (0, _.jsx)(_, {
                name: _.name || ``,
                trailer: _,
                bPlayVideo: _,
                fnTogglePlayTrailer: _,
                bControls: !0,
              }),
        ],
      });
}
function _(_) {
  let {
      elFeaturedInCenter: _,
      _: _,
      name: _,
      trailer: _,
      featureElementclassName: _,
      bUseTrailerAsFirstThumb: _,
      bNoScreenShotModals: _,
    } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _(),
    _ = _(_),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(0);
  if (!_) return null;
  let _ = _ || (_ !== void 0 && _ !== -1) ? _ : 0,
    _ = [],
    _ = [];
  if (
    (_ &&
      _ &&
      (_.push(
        (0, _.jsx)(
          _,
          {
            trailer: _,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => _(0),
            onMouseLeave: () => {
              let _ = _.current;
              _ && _(_.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      _.push(
        (0, _.jsx)(
          _,
          {
            ref: _,
            name: _,
            trailer: _,
            bControls: !1,
            bPlayVideo: !0,
            startTime: _,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    _?.forEach((_, _) => {
      if ((_ || _ > 0) && _.length < 3) {
        let _ = _(_, `thumb`),
          _ = _(_, `600x338`),
          _ = _.length;
        _.push(
          (0, _.jsx)(
            `div`,
            {
              className: _({
                [_]: !0,
                [_]: !_,
              }),
              onMouseEnter: () => _(_),
              children: _
                ? (0, _.jsx)(`img`, {
                    src: _,
                    alt: _,
                  })
                : (0, _.jsx)(`button`, {
                    type: `button`,
                    className: _,
                    onClick: () => {
                      let _ = [...(_ || [])];
                      if (_.length > 0) {
                        for (let _ = 0; _ < _; ++_) {
                          let _ = _.shift();
                          _ && _.push(_);
                        }
                        _(_.map((_) => _(_, `full`)));
                      }
                    },
                    children: (0, _.jsx)(`img`, {
                      src: _,
                      alt: _,
                    }),
                  }),
            },
            _ + `_small_` + _,
          ),
        ),
          _.push(
            (0, _.jsx)(
              `div`,
              {
                className: _,
                children: (0, _.jsx)(`img`, {
                  src: _,
                  alt: _,
                }),
              },
              _ + `_big_` + _,
            ),
          );
      }
    }),
    !_ && (!_ || _.length == 0))
  )
    return null;
  let _ = _.slice(0, 3),
    _ = Array.from({
      length: Math.max(0, 3 - _.length),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _ || `_4av218OCtYs-`,
        children:
          _ && (_ === -1 || _ === void 0)
            ? (0, _.jsx)(_.Fragment, {
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _ !== void 0 && _[_],
              }),
      }),
      _.length > 0 &&
        (0, _.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => _(-1),
          children: [
            _,
            _.map((_, _) =>
              (0, _.jsx)(
                `div`,
                {
                  className: `WDTUiOfZjRM-`,
                },
                `app_${_(_)}_${_}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
    ref: _,
    name: _,
    trailer: _,
    bControls: _,
    bPlayVideo: _,
    fnTogglePlayTrailer: _,
    startTime: _,
  } = _;
  if (
    ((0, _.useEffect)(() => {
      let _ = _?.current;
      if (_ != null && _ > 0 && _) {
        let _ = () => {
          _.currentTime = _ || 0;
        };
        return (
          _.addEventListener(`loadedmetadata`, _),
          () => {
            _.removeEventListener(`loadedmetadata`, _);
          }
        );
      }
    }, [_, _]),
    !_)
  )
    return null;
  let _ = _(_, _ && `B4zxAgrjjQU-`);
  return (0, _.jsxs)(`div`, {
    className: _,
    onClick: _,
    role: `presentation`,
    children: [
      (0, _.jsx)(_, {
        name: _,
        trailerCategory: _.trailer_category,
        trailerDisplay: 1,
        mouseOver: !1,
      }),
      !!(_ && _.microtrailer) &&
        (0, _.jsx)(`video`, {
          className: `YL-tCU7ggsU-`,
          ref: _,
          controls: _,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          poster: _ != null && _ > 0 ? void 0 : _.screenshot_full,
          children: _.microtrailer?.map((_) =>
            _.IN_CLIENT && _.type == `video/mp4`
              ? null
              : (0, _.jsx)(
                  `source`,
                  {
                    src: _(_, _.filename || ``),
                    type: _.type,
                  },
                  _.filename,
                ),
          ),
        }),
      _ &&
        (0, _.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": _(`#Button_Close`),
          children: (0, _.jsx)(_, {}),
        }),
    ],
  });
}
function _(_) {
  return _.bShowModal
    ? (0, _.jsx)(_, {
        ..._,
      })
    : null;
}
function _(_) {
  let { _: _, bShowModal: _, trailerBaseID: _, hideModal: _ } = _,
    { data: _ } = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(() => {
      if (_ && _.length != 0) {
        if (_) {
          let _ = _.find((_) => _.trailer_base_id == _);
          if (_) return _;
        }
        return _[0];
      }
    }, [_, _]),
    _ = _.useId(),
    _ = _.useId(),
    {
      rgDashTrailers: _,
      rgHlsTrailers: _,
      strCaptionManufest: _,
      strScreenshot: _,
    } = (0, _.useMemo)(() => {
      if (!_)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: _, rgHlsTrailers: _ } = _(_);
      return {
        rgDashTrailers: _,
        rgHlsTrailers: _,
        strCaptionManufest: _(_),
        strScreenshot: _(_),
      };
    }, [_]);
  return !_ || !_.adaptive_trailers || _.length == 0
    ? null
    : (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsxs)(_, {
          "aria-labelledby": _(_, _),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                dashManifests: _,
                hlsManifest: _[0] || ``,
                screenshot: _,
                altText: _.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              _: _,
              style: {
                display: `none`,
              },
              children: _?.name || ``,
            }),
            (0, _.jsx)(`div`, {
              _: _,
              style: {
                display: `none`,
              },
              children: _.trailer_name,
            }),
          ],
        }),
      });
}
function _(_) {
  let { appid: _, trailerBaseID: _, bShowModal: _, hideModal: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        appid: _,
      }),
      [_],
    );
  return (0, _.jsx)(_, {
    _: _,
    trailerBaseID: _,
    bShowModal: _,
    hideModal: _,
  });
}
function _(_) {
  let {
    trailer: _,
    fnTogglePlayTrailer: _,
    bPlayVideo: _,
    onMouseEnter: _,
    onMouseLeave: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !_,
      [_]: _,
      [_]: !0,
    }),
    onClick: _,
    onMouseEnter: _,
    onMouseLeave: _,
    role: `presentation`,
    children: [
      (0, _.jsx)(`img`, {
        src: _(_),
        alt: _.trailer_name,
      }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        "aria-label": _(`#Playback_Play_Tooltip`),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `ZIwL9PunOoE-`,
  _ = `fzkUtBXYOMU-`,
  _ = `_7FOdg52DOo4-`,
  _ = `TL-9H7COXIE-`,
  _ = `M2t5cVjg3t0-`,
  _ = _(),
  _ = 16,
  _ = {
    "top-start": {
      _: `0%`,
      _: `0%`,
    },
    "top-end": {
      _: `100%`,
      _: `0%`,
    },
    "bottom-center": {
      _: `50%`,
      _: `100%`,
    },
  };
function _(_, _) {
  let _ = _ + 1;
  return (
    (_ ^= _ >>> 16),
    (_ = Math.imul(_, 2246822507)),
    (_ ^= _ >>> 13),
    (_ = Math.imul(_, 3266489909)),
    (_ ^= _ >>> 16),
    (_ >>> 0) % _
  );
}
function _(_) {
  return _(_ + 5, 100) < 20 ? 13 : 5;
}
function _(_) {
  let {
      _: _,
      _: _,
      nSize: _,
      nSeed: _,
      nGravityRadius: _,
      nGravityTravel: _,
      nWander: _,
    } = _,
    _ = _ + _ / 2,
    _ = _ + _ / 2,
    _ = Math.hypot(_, _) || 1,
    _ = Math.max(0, 1 - _ / _),
    _ = _(_ + 1, 121) - 60,
    _ = _(_ + 2, 121) - 40,
    _ = (_ / _) * _,
    _ = (_ / _) * _;
  return {
    _: _,
    _: _,
    nSize: _,
    nDX: Math.round(_ + (_ - _) * _),
    nDY: Math.round(_ + (_ - _) * _),
    nRotate: Math.round((_(_ + 3, 61) - 30) * (1 - _)),
    flDelay: -_(_ + 4, 160) / 10,
    bBright: _(_ + 6, 100) < 30,
    nWanderX: _(_ + 7, _ * 2 + 1) - _,
    nWanderY: _(_ + 8, _ * 2 + 1) - _,
    flWanderDuration: 3 + _(_ + 9, 40) / 10,
    flFlickerDuration: 2 + _(_ + 10, 30) / 10,
    flFlickerDelay: _(_ + 11, 30) / 10,
    nPixelX: _ + _(_ + 12, 25) - 12,
    nPixelY: _ + _(_ + 13, 25) - 12,
  };
}
function _(_) {
  let { rgBlocks: _, origin: _, className: _ } = _,
    { _: _, _: _ } = _[_],
    _ = (0, _.useRef)(null);
  return (
    (0, _.useLayoutEffect)(() => {
      let _ = _.current;
      if (!_) return;
      let _ = new IntersectionObserver(([_]) => {
        (_.style.setProperty(
          `--clock-offset`,
          `${(Date.now() / 1e3) % 86400}s`,
        ),
          _.style.setProperty(
            `--blocks-display`,
            _.isIntersecting ? `block` : `none`,
          ));
      });
      return (_.observe(_), () => _.disconnect());
    }, []),
    (0, _.jsxs)(`div`, {
      ref: _,
      className: (0, _.default)(_, _),
      style: {
        "--origin-x": _,
        "--origin-y": _,
        "--cycle-duration": `${_}s`,
      },
      "aria-hidden": !0,
      children: [
        _.map((_, _) =>
          (0, _.jsx)(
            `div`,
            {
              className: _,
              style: {
                "--block-x": `${_._}px`,
                "--block-y": `${_._}px`,
                "--block-size": `${_.nSize}px`,
                "--block-dx": `${_.nDX}px`,
                "--block-dy": `${_.nDY}px`,
                "--block-rotate": `${_.nRotate}deg`,
                "--block-delay": `${_.flDelay}s`,
                "--wander-x": `${_.nWanderX}px`,
                "--wander-y": `${_.nWanderY}px`,
                "--wander-duration": `${_.flWanderDuration}s`,
              },
            },
            _,
          ),
        ),
        _.filter((_) => _.bBright).map((_, _) =>
          (0, _.jsx)(
            _,
            {
              block: _,
            },
            _,
          ),
        ),
      ],
    })
  );
}
function _(_) {
  let { block: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      "--pixel-x": `${_.nPixelX}px`,
      "--pixel-y": `${_.nPixelY}px`,
      "--wander-x": `${_.nWanderX}px`,
      "--wander-y": `${_.nWanderY}px`,
      "--wander-duration": `${_.flWanderDuration}s`,
      "--flicker-duration": `${_.flFlickerDuration}s`,
      "--flicker-delay": `${_.flFlickerDelay}s`,
    },
  });
}
var _ = [
    [0, 0],
    [2, 0],
    [3, 0],
    [7, 0],
    [1, 1],
    [5, 1],
    [2, 2],
    [4, 2],
    [0, 3],
    [3, 3],
    [2, 4],
    [5, 4],
    [1, 5],
  ],
  _ = [
    [0, 0],
    [2, 0],
    [4, 0],
    [1, 1],
    [5, 1],
    [2, 2],
    [4, 2],
    [0, 3],
    [3, 3],
    [2, 4],
    [5, 4],
    [1, 5],
  ],
  _ = [
    [0, 0],
    [2, 0],
    [3, 0],
    [1, 1],
    [5, 1],
    [2, 2],
    [4, 2],
    [0, 3],
    [3, 3],
  ];
function _(_, _, _, _) {
  return _.map(([_, _], _) => {
    let _ = (_ + _) * 12,
      _ = _(_),
      _ = (_ - _) / 2;
    return _({
      _: (_ ? -(_ + 1) * _ : _ * _) + _,
      _: _ * _ + _,
      nSize: _,
      nSeed: _,
      nGravityRadius: 250,
      nGravityTravel: 40,
      nWander: 2,
    });
  });
}
var _ = {
  "corner-start": {
    rgBlocks: _(_, 25, !1, 0),
    origin: `top-start`,
  },
  "corner-end": {
    rgBlocks: _(_, 25, !0, 100),
    origin: `top-end`,
  },
  pane: {
    rgBlocks: _(_, 29, !1, 200),
    origin: `top-start`,
  },
};
function _(_) {
  let { pattern: _, className: _ } = _,
    { rgBlocks: _, origin: _ } = _[_];
  return (0, _.jsx)(_, {
    rgBlocks: _,
    origin: _,
    className: _,
  });
}
var _ = 54,
  _ = 60,
  _ = 5;
function _(_, _, _) {
  let _ = (_ + _ * _ + _) * 12,
    _ = _(_);
  return _({
    _: (_ - _ / 2) * _,
    _: -_ * _ - _,
    nSize: _,
    nSeed: _,
    nGravityRadius: 900,
    nGravityTravel: 80,
    nWander: 4,
  });
}
function _(_) {
  let _ = [],
    _ = [];
  for (let _ = 0; _ < _; _++)
    for (let _ = 0; _ < _; _++) {
      let _ = _ + _ * _ + _;
      _(_, 100) < 40 - _ * 7
        ? _.push(_(_, _, _))
        : _(_ * 7 + 3, 100) < 45 &&
          _.push({
            _: _,
            _: _,
            flDistance: Math.hypot(_ - _ / 2, _),
          });
    }
  let _ = Math.round(_.length / 10);
  _.sort((_, _) => _.flDistance - _.flDistance);
  for (let { _: _, _: _ } of _.slice(0, _)) _.push(_(_, _, _));
  return _;
}
var _ = _(0),
  _ = _(5e3);
function _() {
  return (0, _.jsx)(_, {
    rgBlocks: _,
    origin: `bottom-center`,
    className: _,
  });
}
function _() {
  let [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      let _ = () => {
          let _ = document.getElementById(`footer`);
          _ && (_(_), _.disconnect());
        },
        _ = new MutationObserver(_);
      return (
        _.observe(document.body, {
          childList: !0,
          subtree: !0,
        }),
        _(),
        () => _.disconnect()
      );
    }, []),
    _
      ? (0, _.createPortal)(
          (0, _.jsx)(_, {
            rgBlocks: _,
            origin: `bottom-center`,
            className: _,
          }),
          _,
        )
      : null
  );
}
function _(_) {
  (0, _.useEffect)(() => {
    let _ = document.getElementById(`footer`);
    if (_ && _)
      return (
        _.style.setProperty(`--footer-block-color`, _),
        () => {
          _.style.removeProperty(`--footer-block-color`);
        }
      );
  }, [_]);
}

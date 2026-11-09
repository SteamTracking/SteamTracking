import { _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _, _, _ } from "./dialogs.js";
import { _, _ } from "./react-router.js";
import { _ } from "./servicetransportprovider.js";
var _ = _(_()),
  _ = `PnqfSYRVFFE-`,
  _ = `SmIdDo8BaVc-`,
  _ = `GMLvP3ZFHIM-`,
  _ = `_6aw5qTRFKMI-`,
  _ = `e3aaQ99w4H0-`,
  _ = `IHFgWI28RyQ-`,
  _ = `A4MFF8rl-ys-`,
  _ = `adOdkeorCF8-`,
  _ = _(_()),
  _ = _(),
  _ = class {
    m_tours = {};
    m_strActiveTour = ``;
    m_storage = void 0;
    m_bReady = !1;
    constructor() {
      _(this);
    }
    async Init(_) {
      if (this.m_storage) return;
      this.m_storage = _;
      let _ = await _(_);
      (Object.keys(_ || {}).forEach((_) => {
        let _ = !!_[_];
        this.m_tours[_] = {
          ...(this.m_tours[_] || {
            stops: {},
          }),
          bSeen: _,
        };
      }),
        (this.m_bReady = !0));
    }
    UpdateStop(_, _, _, _) {
      (this.m_tours[_] ||
        (this.m_tours[_] = {
          bSeen: !1,
          stops: {},
        }),
        (this.m_tours[_].stops[_] = {
          options: _,
          elem: _,
        }));
    }
    BHasSeenTour(_) {
      return !this.m_bReady || (this.m_tours[_] && this.m_tours[_].bSeen);
    }
    GetTrackedStops(_) {
      return this.m_tours[_]?.stops || {};
    }
    ActivateTour(_) {
      (this.m_strActiveTour &&
        this.m_strActiveTour !== _ &&
        this.DismissTour(this.m_strActiveTour),
        (this.m_strActiveTour = _));
    }
    DismissTour(_) {
      this.m_tours[_] &&
        (this.MarkTourSeen(_),
        (this.m_tours[_].bSeen = !0),
        this.m_strActiveTour === _ && (this.m_strActiveTour = ``));
    }
    MarkTourSeen(_) {
      return _(this.m_storage, _, Date.now());
    }
    MarkTourUnseen(_) {
      return _(this.m_storage, _, void 0);
    }
  };
(_([_], _.prototype, `m_tours`, void 0),
  _([_], _.prototype, `m_strActiveTour`, void 0),
  _([_], _.prototype, `m_bReady`, void 0),
  _([_.bound], _.prototype, `UpdateStop`, null),
  _([_], _.prototype, `ActivateTour`, null),
  _([_], _.prototype, `DismissTour`, null));
var _ = `tour_history`;
async function _(_) {
  let _ = await _.GetObject(_);
  return !_ || typeof _ != `object` ? {} : _;
}
async function _(_, _, _) {
  let _ = await _(_);
  return _.StoreObject(_, {
    ..._,
    [_]: _,
  });
}
var _ = new _();
function _() {
  let _ = _();
  return (
    (0, _.useEffect)(() => {
      _.Init(_);
    }, [_]),
    _
  );
}
function _(_) {
  let _ = _(),
    { bShowTour: _, stopElems: _ } = _(() => ({
      bShowTour: !_.BHasSeenTour(_),
      stopElems: _.GetTrackedStops(_),
    }));
  return {
    bShowTour: _,
    stopElems: _,
    onInteraction: (0, _.useCallback)(() => _.MarkTourSeen(_), [_, _]),
    onDismiss: (0, _.useCallback)(() => _.DismissTour(_), [_, _]),
    onActivate: (0, _.useCallback)(() => _.ActivateTour(_), [_, _]),
    updateStop: _.UpdateStop,
  };
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { active: _, name: _, stops: _ } = _,
    { bShowTour: _, onInteraction: _, onDismiss: _, stopElems: _ } = _(_),
    [_, _] = (0, _.useState)(0);
  if (!_ || !_ || _ >= _.length) return null;
  let _ = () => {
      (_(_ + 1), _());
    },
    { _: _, title: _, content: _ } = _[_],
    _ = _[_];
  if (!_ || !_.elem) return null;
  let _ = _;
  return (
    Array.isArray(_) &&
      (_ = _.map((_, _) =>
        (0, _.jsx)(
          `div`,
          {
            children: _,
          },
          _,
        ),
      )),
    (0, _.jsx)(_, {
      ..._,
      children: (0, _.jsxs)(_, {
        tour: _,
        title: _,
        onRequestClose: _,
        children: [
          _,
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _.length > 1 &&
                (0, _.jsx)(`div`, {
                  className: `heY0SzmLbNE-`,
                  children: _(`#Tour_TipCount`, _ + 1, _.length),
                }),
              _ < _.length - 1
                ? (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#Button_Next`),
                  })
                : (0, _.jsx)(_, {
                    onClick: _,
                    children: _(`#Button_Done`),
                  }),
            ],
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let { elem: _, options: _, children: _ } = _,
    { ownerWindow: _ } = _(),
    _ = _.getBoundingClientRect(),
    { style: _, position: _ } = _(_, _, _.position, _.offset);
  return (0, _.createPortal)(
    (0, _.jsxs)(`div`, {
      className: _,
      style: _,
      "data-position": _,
      children: [
        (0, _.jsx)(_, {
          position: _,
          targetRect: _,
        }),
        _,
      ],
    }),
    _.document.body,
  );
}
function _(_, _, _, _ = 0) {
  let _,
    _ = _,
    _ = _ + _,
    _ = 250 + _,
    _ = _.document.body.matches(`:dir(rtl)`);
  switch (
    (_ && (_ === `left` ? (_ = `right`) : _ === `right` && (_ = `left`)),
    ((_ === `left` && _._ < _) ||
      (_ === `right` && _.innerWidth - (_._ + _.width) < _)) &&
      (_ = `below`),
    _)
  ) {
    case `left`:
      _ = {
        top: _.top,
        width: _.left - 10 - _,
        left: 10,
        minWidth: 240,
        flexDirection: `row`,
        justifyContent: `flex-end`,
      };
      break;
    case `right`:
      _ = {
        top: _.top,
        left: _.right + _,
        right: 10,
        minWidth: 240,
        flexDirection: `row`,
        justifyContent: `flex-start`,
      };
      break;
    case `above`:
      _ = {
        top: 10,
        height: _._ - 10 - _,
        left: _._,
        flexDirection: `column`,
        justifyContent: `flex-end`,
      };
      break;
    default:
      _ = _
        ? {
            top: _._ + _.height + _,
            right: _.innerWidth - _.right,
            flexDirection: `column`,
            justifyContent: `flex-start`,
          }
        : {
            top: _._ + _.height + _,
            left: _._,
            flexDirection: `column`,
            justifyContent: `flex-start`,
          };
  }
  let _ = {
    display: `flex`,
  };
  return {
    style: {
      ..._,
      ..._,
    },
    position: _,
    rect: _,
  };
}
function _(_) {
  let { tour: _, title: _, onRequestClose: _, children: _ } = _,
    { onActivate: _ } = _(_);
  return (
    (0, _.useEffect)(() => _(), [_]),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          onClick: _,
          className: _,
          children: (0, _.jsx)(_, {
            className: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    })
  );
}
function _(_) {
  let { name: _, tour: _, options: _, children: _ } = _,
    { updateStop: _ } = _(_),
    _ = (0, _.useCallback)((_) => _(_, _, _, _), [_, _, _]),
    _ = _.Children.only(_),
    _ = _(_, _.props.ref);
  return (0, _.cloneElement)(_.Children.only(_), {
    ref: _,
  });
}
function _(_) {
  let { position: _, targetRect: _ } = _;
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 28 10`,
    className: _,
    style: _(_, _),
    children: (0, _.jsx)(`polygon`, {
      points: `0,0 14,10 28,0`,
      fill: `currentColor`,
    }),
  });
}
var _ = 28,
  _ = 10;
function _(_, _) {
  let _ = {
    width: `${_}px`,
    height: `${_}px`,
  };
  switch (_) {
    case `right`:
      ((_.left = `0px`), (_.top = `${Math.max(_.height / 2 - _, _)}px`));
      break;
    case `left`:
      ((_.right = `0px`), (_.top = `${Math.max(_.height / 2 - _, _)}px`));
      break;
    case `above`:
      ((_.bottom = `-10px`),
        (_.insetInlineStart = `${Math.max(_.width / 2 - _, _)}px`));
      break;
    case `below`:
      ((_.top = `-10px`),
        (_.insetInlineStart = `${Math.max(_.width / 2 - _, _)}px`));
  }
  return _;
}

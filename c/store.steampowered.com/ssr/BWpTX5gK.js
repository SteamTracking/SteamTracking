var _ = _(_());
function _(_, _, _, _) {
  _.useEffect(() => {
    let _ = (_) => {
      _.key === _ && (_(_), _ && _.preventDefault(), _ && _.stopPropagation());
    };
    return (
      document.addEventListener(`keydown`, _),
      () => document.removeEventListener(`keydown`, _)
    );
  }, [_, _, _, _]);
}
var _ = `V7hH-aYCq0M-`,
  _ = `UOSLjnD8h20-`,
  _ = `wu6X8Agjj2Y-`,
  _ = `nn6xftge3XI-`,
  _ = `_5-Q-ICOrQkc-`,
  _ = _();
function _() {
  let [_, _] = _.useState(void 0),
    _ = _.useCallback(() => _(void 0), []);
  return [
    _,
    (0, _.jsx)(_, {
      active: _ !== void 0,
      children: (0, _.jsx)(_, {
        closeModal: _,
        rgImageURL: _,
      }),
    }),
  ];
}
function _(_) {
  let { closeModal: _, rgImageURL: _ } = _,
    [_, _] = _.useState(0),
    _ = _?.length ?? 0,
    _ = _.useCallback(() => {
      _(_ == 0 ? _ - 1 : _ - 1);
    }, [_, _]),
    _ = _.useCallback(() => {
      _ && _ + 1 >= _ ? _(0) : _(_ + 1);
    }, [_, _, _]);
  return (0, _.jsxs)(_, {
    title: _(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: _,
    bHideCloseIcon: !0,
    modalClassName: _,
    children: [
      (0, _.jsx)(_, {
        index: _,
        numElements: _?.length || 0,
        fnForward: _,
        fnBackwards: _,
        fnClose: _,
        bCircular: !0,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          className: _,
          src: _?.[_],
          alt: ``,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    index: _,
    numElements: _,
    fnForward: _,
    fnBackwards: _,
    fnClose: _,
    bCircular: _,
  } = _;
  (_(`ArrowLeft`, () => _?.(), !0, !0),
    _(`Left`, () => _?.(), !0, !0),
    _(`ArrowRight`, () => _?.(), !0, !0),
    _(`Right`, () => _?.(), !0, !0),
    _(`Escape`, () => _ && _(), !0, !0),
    _(`Esc`, () => _ && _(), !0, !0));
  let _ = _ > 1;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(
                `_5-Q-ICOrQkc-`,
                _ === 0 && !_ ? `_0Wdr1XPMMso-` : null,
              ),
              onClick: _,
              "aria-label": _(`#Carousel_Prev`),
              children: (0, _.jsx)(_, {
                angle: 270,
              }),
            }),
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(
                `_5-Q-ICOrQkc-`,
                _ === _ - 1 && !_ ? `_0Wdr1XPMMso-` : null,
              ),
              onClick: _,
              "aria-label": _(`#Carousel_Next`),
              children: (0, _.jsx)(_, {
                angle: 90,
              }),
            }),
          ],
        }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: _,
        "aria-label": _(`#Button_Close`),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
var _ = `Q9JJlcQV8xM-`,
  _ = `_8MwYeiz1aF4-`,
  _ = `eDP3QS5OD9w-`,
  _ = 1.3,
  _ = 3,
  _ = 256;
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    _ = (0, _.useRef)(null),
    [_, _] = _();
  return (
    (0, _.useEffect)(() => {
      _.naturalWidth > _.displayWidth * _ &&
        _.naturalHeight > _.displayHeight * _ &&
        _.naturalWidth > _ &&
        _.naturalWidth / _.naturalHeight < _ &&
        _(!0);
    }, [_]),
    _
      ? (0, _.jsxs)(`span`, {
          className: _,
          children: [
            _,
            (0, _.jsx)(`span`, {
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
            (0, _.jsx)(`img`, {
              ..._,
              className: _({
                ...(_.className && {
                  [_.className]: !0,
                }),
              }),
              onClick: (_) => {
                _.src && _([_.src]);
              },
            }),
          ],
        })
      : (0, _.jsx)(`img`, {
          ..._,
          ref: _,
          onLoad: (_) => {
            if (!_.currentTarget.closest(`a`) && !_()) {
              let {
                naturalWidth: _,
                naturalHeight: _,
                width: _,
                height: _,
              } = _.currentTarget;
              _({
                naturalWidth: _,
                naturalHeight: _,
                displayWidth: _,
                displayHeight: _,
              });
            }
          },
        })
  );
}
function _(_) {
  let {
      className: _,
      srcs: _,
      lazyLoad: _,
      width: _,
      height: _,
      alt: _,
      crossOrigin: _,
    } = _,
    [_, _] = _.useState(_.length),
    [_, _] = _.useState(0);
  _.useEffect(() => {
    _ != _.length && (_(_.length), _(0));
  }, [_, _.length]);
  let _ = _.useCallback(() => {
    (_.onImageError && _.onImageError(_.srcs[_]),
      _ + 1 < _.srcs.length && _(_ + 1));
  }, [_, _]);
  return _.length == 0
    ? null
    : (0, _.jsx)(`img`, {
        className: _,
        src: _[_],
        crossOrigin: _,
        onError: _,
        loading: _ ? `lazy` : void 0,
        width: _,
        height: _,
        alt: _,
      });
}
function _(_) {
  let [_, _] = _.useState(!1),
    {
      className: _,
      src: _,
      lazyLoad: _,
      width: _,
      height: _,
      alt: _,
      crossOrigin: _,
    } = _;
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#Image_ErrorTitle`, _),
          }),
          (0, _.jsx)(`ul`, {
            children: (0, _.jsx)(`li`, {
              children: _(`#Image_Error_msg1`),
            }),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#Image_Error_suggestion`),
          }),
        ],
      })
    : (0, _.jsx)(_, {
        className: _,
        src: _,
        onError: () => _(!0),
        crossOrigin: _,
        loading: _ ? `lazy` : void 0,
        width: _,
        height: _,
        alt: _,
      });
}
function _(_) {
  let {
      _: _,
      imageType: _,
      bPreferAssetWithoutOverride: _,
      strAdditionalClassName: _,
      bNoShadow: _,
    } = _,
    { storeItemAsset: _, storeItemDefaultInfo: _ } = _(_, _, _);
  if (_ === `library` || _ == `vertical`)
    return (0, _.jsx)(_, {
      _: _,
      bPreferAssetWithoutOverride: _,
      bNoShadow: _,
    });
  let _ = ``;
  switch (_) {
    case `main`:
      _ = _;
      break;
    default:
      _ = _;
  }
  if (_ === void 0 || !_)
    return (0, _.jsx)(`div`, {
      className: _(_, `CapsuleImageCtn`, _),
    });
  if (_ == null) return null;
  let _ = _(_, _ === `header`);
  return (0, _.jsx)(`div`, {
    className: _(_, `CapsuleImageCtn`, _),
    children: (0, _.jsx)(_, {
      lazyLoad: !0,
      srcs: _,
      className: _(_),
      alt: _.name,
    }),
  });
}
function _(_, _) {
  let _ = [];
  return (_ && _(_, _, _), _.filter((_) => !!_));
}
function _(_, _) {
  return {
    strStoreVerticalURL: _(_, `hero_capsule`),
    strLibraryVerticalURL: _(_, `library_capsule`),
  };
}
function _(_, _, _) {
  let _ = _(_, `header_2x`) ?? _(_, `header`),
    _ = _(_, `main_capsule_2x`) ?? _(_, `main_capsule`);
  _ ? _.push(_, _) : _.push(_, _);
}
var _ = `F-DyksbUwEM-`,
  _ = `_1NYHRT6AWnI-`;
function _(_) {
  let { bAllowOutsideOfDeck: _ } = _;
  return !_() && !_
    ? null
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { className: _, _: _ } = _,
    [_, _] = _(),
    _ = _;
  if ((_ == 0 && (_ = 1), !_)) return null;
  let _;
  return (
    _ == 4 && (_ = _),
    (0, _.jsx)(`div`, {
      className: _(_, _, _),
      children: (0, _.jsx)(_, {
        _: _,
        eHWCompat: _,
      }),
    })
  );
}
async function _() {
  let _ = _(`broadcast_available_for_page`, `application_config`);
  if (_(_)) {
    let _ = new Set();
    return (
      _.filtered.forEach((_) => {
        _.appid && _.add(_.appid);
      }),
      Array.from(_)
    );
  }
  return [];
}
var _ = class {
  constructor() {
    _(this);
  }
  accountid;
  steamid;
  appid;
  hub_popular;
  popular;
  relay_broadcast_id;
  rowversion;
  thumbnail_http_address;
  nAppIDVOD;
  title = void 0;
  viewer_count = void 0;
  whitelist_rank;
  gamedata_subtitle = void 0;
  store_title;
  left_panel;
  right_panel;
  snr;
  broadcast_chat_visibility;
  default_selection_priority = 0;
  current_selection_priority = 0;
};
(_([_], _.prototype, `title`, void 0),
  _([_], _.prototype, `viewer_count`, void 0),
  _([_], _.prototype, `gamedata_subtitle`, void 0),
  _([_], _.prototype, `current_selection_priority`, void 0));
var _ = `primary`,
  _ = `featured`,
  _ = `default_featured`,
  _ = `general`,
  _ = (function (_) {
    return (
      (_[(_.k_ePrimary = 3)] = `k_ePrimary`),
      (_[(_.k_eFeatured = 2)] = `k_eFeatured`),
      (_[(_.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (_[(_.k_eGeneral = 0)] = `k_eGeneral`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    case _:
      return 3;
    case _:
      return 2;
    case _:
      return 1;
    case _:
    default:
      return 0;
  }
}
function _(_) {
  let _ = _;
  return _ &&
    typeof _.success == `number` &&
    _.filtered &&
    Array.isArray(_.filtered) &&
    _.broadcast_chat_visibility
    ? _.filtered.length == 0 || typeof _.filtered[0].accountid == `string`
    : !1;
}
function _() {
  return _(_());
}
function _(_) {
  let { data: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0 || !_) return _(!1);
      (async () => {
        let _ = await Promise.all(
          _.filter((_) => !!_).map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
        _(
          _.some(
            (_) =>
              (_ && _.appid && _.has(_.appid)) ||
              (_?.related_items?.parent_appid &&
                _.has(_.related_items.parent_appid)),
          ),
        );
      })();
    }, [_, _, _, _]),
    _
  );
}
function _() {
  return {
    queryKey: _(),
    queryFn: async () => {
      let _ = await _();
      return new Set(_);
    },
  };
}
function _() {
  return [`BroadcastApps`];
}
var _ = `_0gJGcmwuUII-`;
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#home_page_live_broadcast`),
  });
}
function _(_) {
  let { appids: _, hide_status_banners: _, show_early_access: _ } = _,
    { data: _ } = _(),
    { data: _ } = _(),
    _ = _.length > 0 && _.every((_) => _ && _.has(_)),
    _ = _.length > 0 && _.every((_) => _ && _.has(_)),
    _ = _(_),
    _ = _ && !_,
    _ = _ && !_,
    _ = !_ && _;
  return (0, _.jsxs)(`div`, {
    className: _(_, `CapsuleDecorators`),
    children: [
      _ &&
        (0, _.jsxs)(`span`, {
          className: _(`vpJFPf5ue1U-`, `_7O54ooudUro-`),
          children: [
            (0, _.jsx)(`img`, {
              src: _(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `d4tZAxeNIU8-`,
              alt: _.Localize(`#Sale_InLibrary`),
            }),
            _.Localize(`#Sale_InLibrary`),
          ],
        }),
      _ &&
        (0, _.jsxs)(`span`, {
          className: `vpJFPf5ue1U-`,
          children: [
            (0, _.jsx)(_, {
              className: `d4tZAxeNIU8-`,
            }),
            _.Localize(`#Sale_OnWishlist`),
          ],
        }),
      _ &&
        !_ &&
        !_ &&
        (0, _.jsx)(_, {
          appids: _,
        }),
      _ && (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { appids: _ } = _;
  return _(_)
    ? (0, _.jsx)(`span`, {
        className: _(_, _),
        children: _.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0) return _(!1);
      (async () => {
        let _ = await Promise.all(
          _.map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
        _(_.some((_) => _ && _.is_early_access));
      })();
    }, [_, _, _]),
    _
  );
}
function _(_) {
  let {
      _: _,
      bPreferLibrary: _,
      bPreferAssetWithoutOverride: _,
      bNoShadow: _,
    } = _,
    _ = _ ? _ : ``,
    { storeItemDefaultInfo: _, storeItemAsset: _ } = _(_, `vertical`, _),
    [_, _] = _.useState(0);
  if (!_ || !_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = _(_, _);
  if (_ && (!_ || !_))
    return (0, _.jsxs)(`div`, {
      className: _(_, `HeroCapsuleImageContainer`),
      children: [
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
          alt: _.name,
        }),
        _.type == 4 &&
          (0, _.jsx)(`img`, {
            className: `cJI8XFiCuDs-`,
            src: `${_.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (_)
    return (0, _.jsxs)(`div`, {
      className: _(_, _, _ ? _ : ``, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
          alt: _.name,
        }),
      ],
    });
  let _ = _(_, !0),
    _ = _.length - 1,
    _ = (_) => {
      let _ = _.indexOf(_);
      _ >= _ && _ < _.length - 1 && _(_ + 1);
    };
  if (_ < _.length) {
    let _ = _[_];
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(_, {
          lazyLoad: !0,
          srcs: _,
          className: _,
          alt: _.name,
          onImageError: _,
        }),
      ],
    });
  }
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_, _, _ = !1) {
  let { data: _ } = _(_),
    { data: _ } = _(_, _),
    _;
  _ &&
    _.included_appids?.length == 1 &&
    !_(_, _) &&
    _.item_type &&
    [1, 2].includes(_.item_type) &&
    (_ = {
      appid: _.included_appids[0],
    });
  let { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _?.visible ? _ : _;
  return {
    storeItemAsset: _?.visible ? _ : _,
    storeItemDefaultInfo: _,
  };
}
function _(_, _) {
  if (!_) return !1;
  switch (_) {
    case `header`:
      return !!_.header;
    case `main`:
      return !!_.main_capsule;
    case `vertical`:
    case `library`:
      return !!_.hero_capsule || !!_.library_capsule;
    default:
      return (_(_, `Unhandled imageType: ${_}`), !1);
  }
}

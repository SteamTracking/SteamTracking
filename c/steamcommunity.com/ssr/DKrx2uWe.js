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
    _ = _(_, _, _),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _?.visible ? _ : _;
  return {
    storeItemAsset: _?.visible ? _ : _,
    storeItemDefaultInfo: _,
  };
}
function _(_, _, _) {
  if (
    _ &&
    _.included_appids?.length == 1 &&
    !_(_, _) &&
    _.item_type &&
    [1, 2].includes(_.item_type)
  )
    return {
      appid: _.included_appids[0],
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

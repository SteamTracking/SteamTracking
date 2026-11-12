import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~684e72ad45.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~2f085f1384.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(),
  _ = `Og4Odc3VLI8-`,
  _ = `oliNocjo3ok-`,
  _ = `x3qY8Eev7UU-`,
  _ = `_3lYhLNSBOpE-`,
  _ = `tyYNnQMYYyw-`,
  _ = `-WD8g17w7iA-`;
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
                `-WD8g17w7iA-`,
                _ === 0 && !_ ? `apJ9YvEIT9k-` : null,
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
                `-WD8g17w7iA-`,
                _ === _ - 1 && !_ ? `apJ9YvEIT9k-` : null,
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
var _ = `xq-I5249Blg-`,
  _ = `_-8Ur6QivGZk-`,
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

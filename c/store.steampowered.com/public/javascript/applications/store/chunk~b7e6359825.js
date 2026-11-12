import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `YAxuZ29pC9k-`,
  _ = `u0AMI7eXw6w-`,
  _ = _(),
  _ = Object.assign(_, {
    Root: _,
    Content: _,
  });
function _(_) {
  let { children: _, className: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    ..._,
    children: (0, _.jsx)(_.Content, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      onClose: _,
      className: _,
      navID: _,
      children: _,
      allowScrollBehind: _,
      onPointerDown: _,
      onPointerUp: _,
      ..._
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback((_) => {
      _ &&
        (_.showModal(),
        _.ownerDocument.defaultView &&
          _(
            _.ownerDocument.body.scrollHeight >
              _.ownerDocument.defaultView.innerHeight,
          ));
    }, []),
    _ = _.useRef(!1),
    _ = _.useCallback(
      (_) => {
        ((_.current = _.target == _.currentTarget), _?.(_));
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        (_.target != _.currentTarget && (_.current = !1), _?.(_));
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        _.target == _.currentTarget && _.current && _(`backdropclick`);
      },
      [_],
    );
  return (0, _.jsx)(_, {
    navID: _ ?? `ModalDialog`,
    onClose: _,
    children: (0, _.jsx)(`dialog`, {
      ref: _,
      className: (0, _.default)(_, !_ && _ && `egtbEvvs2Oc-`, _),
      onClose: () => _(`onclose`),
      onClick: _,
      ..._,
      onPointerDown: _,
      onPointerUp: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { navID: _, onClose: _, children: _ } = _,
    _ = _.useCallback(() => _(`cancelbutton`), [_]),
    _ = _.useRef(void 0);
  return (
    _(_, !0, !0),
    _()
      ? (0, _.jsx)(_, {
          navID: _ ?? `ModalDialog`,
          onCancelButton: _,
          modal: !0,
          navTreeRef: _,
          children: _,
        })
      : (0, _.jsx)(_.Fragment, {
          children: _,
        })
  );
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _),
    onClick: (_) => _.stopPropagation(),
    children: _,
  });
}
var _ = `sgMEGCsNg7c-`,
  _ = `zSTkW-sxkis-`,
  _ = `s682fjGpPIQ-`,
  _ = `_3FHQnSAvzY8-`;
function _(_) {
  let {
    onClose: _,
    className: _,
    navID: _,
    children: _,
    strTitle: _,
    wideMode: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: _ ?? `SimpleModalDialog`,
    ..._,
    children: (0, _.jsxs)(`div`, {
      className: (0, _.default)(_, _, _ && `GJxb9L6ppZw-`),
      children: [
        ` `,
        (0, _.jsxs)(_, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `pxN-7GRnbkY-`,
                children: _,
              }),
            (0, _.jsx)(`button`, {
              onClick: (_) => (_(`xclick`), _.preventDefault(), !1),
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    }),
  });
}

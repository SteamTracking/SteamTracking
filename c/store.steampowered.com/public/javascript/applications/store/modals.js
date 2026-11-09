import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
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
} from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = _();
function _(_) {
  let { popup: _, className: _, ..._ } = _,
    _ = _(_),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      let _ = _.current;
      if (_ && _(_, `Window.SetResizeGrip`)) {
        let _ = 0,
          _ = 0,
          _ = _.getBoundingClientRect(),
          _ = _.ownerDocument.defaultView;
        (_ &&
          _ &&
          !_ &&
          ((_ = Math.ceil(_.innerWidth - _.left)),
          (_ = Math.ceil(_.innerHeight - _.top))),
          _.SteamClient.Window.SetResizeGrip(_, _));
      }
      return () => {
        _(_, `Window.SetResizeGrip`) &&
          _.SteamClient.Window.SetResizeGrip(0, 0);
      };
    }, [_, _]),
    _
      ? null
      : (0, _.jsx)(`div`, {
          className: _(`window_resize_grip`, _),
          ref: _,
          ..._,
        })
  );
}
var _ = (_) =>
  _({
    modal: !0,
    ..._,
  });
function _(_) {
  let _ = _().ownerWindow,
    _ = _(),
    [_, _] = _.useState(() =>
      _ ||
      (_.onlyPopoutIfNeeded === !0 &&
        _.popupHeight < _.innerHeight * 0.9 &&
        _.popupWidth < _.innerWidth * 0.9 &&
        _.document.visibilityState == `visible`)
        ? `inline`
        : `popout`,
    );
  return _ === `inline`
    ? (0, _.jsx)(_, {
        active: !0,
        children: _.children,
      })
    : _ === `popout`
      ? (0, _.jsx)(_, {
          ..._,
        })
      : null;
}
function _(_) {
  let { popup: _, children: _, bFitToContent: _, className: _, ..._ } = _,
    _ = _.useCallback(
      (_) => {
        let _ = Math.ceil(_.borderBoxSize[0].inlineSize),
          _ = Math.ceil(_.borderBoxSize[0].blockSize);
        _?.SteamClient.Window.ResizeTo(_, _, !0);
      },
      [_],
    ),
    _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _(`PopupFullWindow`, _ && `FitToContent`, _),
    ref: _ ? _ : void 0,
    ..._,
    children: _,
  });
}
function _(_) {
  let {
      strName: _,
      strTitle: _,
      popupWidth: _,
      popupHeight: _,
      browserType: _,
      onDismiss: _,
      bFitToContent: _,
      refPopup: _,
      children: _,
      titleBarClassName: _,
      saveDimensionsKey: _,
    } = _,
    _ = _()?.ownerWindow,
    _ = _(),
    _ = {
      ..._(_),
      onClose: _,
    },
    _ = 0;
  (_.resizable && (_ |= _.Resizable),
    (_.minWidth || _.minHeight) && (_ |= _.ApplyBrowserScaleToDimensions),
    _.fullscreen && (_ |= _.FullScreen));
  let _ = `PopupWindow_` + (_ ? `${_}_` : ``) + _.useId(),
    { popup: _, element: _ } = _(
      _,
      {
        title: _,
        dimensions: {
          width: _,
          height: _,
        },
        html_class: `client_chat_frame fullheight ModalDialogPopup`,
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight`,
        browserType: _,
        minWidth: _.minWidth,
        minHeight: _.minHeight,
        replace_existing_popup: !0,
        center_on_window: _?.BCenterPopupsOnWindow() ? _ : void 0,
        eCreationFlags: _,
        target_browser: _?.GetBrowserInfo(),
      },
      _,
    );
  if (
    (_.useEffect(() => (_(_, _), () => _(_, void 0)), [_, _]),
    _.useEffect(() => {
      _ && (_.document.title = _ ?? _);
    }, [_, _, _]),
    !_)
  )
    return null;
  let _ = _.modal ?? _.onlyPopoutIfNeeded,
    _ = !_.resizable;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          popup: _,
        }),
      _.createPortal(
        (0, _.jsx)(_, {
          ownerWindow: _,
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsxs)(_, {
                popup: _,
                bFitToContent: _,
                onContextMenu: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                    hideMin: _,
                    hideMax: _,
                    popup: _,
                    hideActions: !_,
                  }),
                  (0, _.jsx)(_, {
                    bCenterPopupsOnWindow: _?.BCenterPopupsOnWindow(),
                    browserInfo: _?.GetBrowserInfo(),
                    children: _,
                  }),
                ],
              }),
              _.resizable &&
                !_ &&
                (0, _.jsx)(_, {
                  popup: _,
                }),
            ],
          }),
        }),
        _,
      ),
    ],
  });
}
function _(_) {
  let { popup: _ } = _,
    _ = _.useCallback(() => {
      _?.SteamClient.Window.BringToFront();
    }, [_]);
  return (
    _.useEffect(_, [_]),
    (0, _.jsx)(_, {
      active: !0,
      children: (0, _.jsx)(`div`, {
        style: {
          position: `fixed`,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        onClick: _,
      }),
    })
  );
}
function _(_) {
  let { labelledBy: _ } = _ || {},
    [_, _] = _.useState(void 0),
    _ = _.useMemo(
      () => ({
        setHeaderId: _,
      }),
      [],
    );
  return {
    headerId: _ || _,
    context: _,
  };
}
function _(_) {
  let {
      active: _,
      onDismiss: _,
      className: _,
      modalClassName: _,
      bGamepadUIScrollWithin: _,
      children: _,
      ..._
    } = _,
    { headerId: _, context: _ } = _({
      labelledBy: _[`aria-labelledby`],
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        className: _,
        bGamepadUIScrollWithin: _,
        children: (0, _.jsx)(_, {
          role: `dialog`,
          "aria-labelledby": _,
          className: _,
          ..._,
          children: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}

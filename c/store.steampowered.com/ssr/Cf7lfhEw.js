var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(),
  _ = (0, _.createContext)(null);
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { children: _ } = _,
    _ = _.Children.only(_),
    _ = (0, _.useContext)(_);
  return _
    ? _
      ? (0, _.cloneElement)(_, {
          ..._.getReferenceProps(_.props),
          ref: _(_.props.ref, _.floating.refs.setReference),
        })
      : (console.error(`<PopoverAnchor> must be a child of <PopoverRoot>.`),
        null)
    : null;
}
function _(_) {
  let { children: _, className: _, ref: _, label: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _([_, _?.floating.refs.setFloating]);
  if (!_)
    return (
      console.error(`<Popover.Positioner> must be a child of <Popover.Root>.`),
      null
    );
  if (!_.open) return null;
  let _ = _.Children.only(_),
    _ = _.Fragment;
  return (
    _.type == _.FocusManager &&
      ((_ = _.Children.only(_.props.children)), (_ = _)),
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        presentation: _.presentation,
        sizing: _.sizing,
        floatingRef: _,
        floatingProps: _.getFloatingProps(),
        floatingStyles: _.floating.floatingStyles,
        referenceElement: _.floating.elements.domReference,
        className: (0, _.default)(_(), _),
        label: _,
        children: _,
      }),
    })
  );
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { children: _ } = _,
    _ = (0, _.useContext)(_);
  _(!!_, `<Popover.Positioner> must be a child of <Popover.Root>.`);
  let _ = () => _.floating.context.onOpenChange(!1),
    _ = _.useRef(void 0);
  return (
    _(_, !0, !0),
    (0, _.jsx)(_, {
      navID: `Popover`,
      onCancelButton: _,
      modal: !0,
      navTreeRef: _,
      children: (0, _.jsx)(`div`, {
        style: {
          display: `contents`,
        },
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    })
  );
}
function _(_) {
  let { children: _ } = _,
    _ = (0, _.useContext)(_);
  return (
    _(!!_, `<Popover.Positioner> must be a child of <Popover.Root>.`),
    (0, _.jsx)(_, {
      context: _.floating.context,
      initialFocus: -1,
      returnFocus: !1,
      children: _,
    })
  );
}
function _(_) {
  let {
      open: _,
      interactions: _ = {},
      width: _,
      maxHeight: _,
      gutter: _,
      scroll: _,
    } = _,
    _ = _,
    _ = _(_.presentation),
    _ = _(_, _, _),
    _ = {
      enabled: !!_.click,
    },
    _ = typeof _.click == `function` ? _.click(_) : _,
    _ = _(_.context, _),
    _ = {
      enabled: !!_.focus,
    },
    _ = typeof _.focus == `function` ? _.focus(_) : _,
    _ = _(_.context, _),
    _ = {
      handleClose: _(),
    },
    _ = typeof _.hover == `function` ? _.hover(_) : _,
    _ = _(_.context, {
      enabled: !!_.hover,
      ..._,
    }),
    _ = _(_.context),
    { getFloatingProps: _, getReferenceProps: _ } = _([_, _, _, _]);
  return {
    floating: _,
    getFloatingProps: _,
    getReferenceProps: _,
    open: _,
    presentation: _,
    sizing: {
      width: _,
      maxHeight: _,
      gutter: _,
      scroll: _,
    },
  };
}
function _(_, _, _) {
  let { onOpenChange: _, placement: _ } = _,
    _ = _ === `anchor`;
  return _({
    open: _,
    onOpenChange: _,
    middleware: _ ? _(_) : [],
    whileElementsMounted: _ ? _ : void 0,
    placement: _ && typeof _ == `object` ? _.initial : _,
    strategy: `fixed`,
    platform: {
      ..._,
      getOffsetParent: (_) => _?.ownerDocument?.defaultView ?? window,
    },
  });
}
function _(_) {
  let { gutter: _ = 0, placement: _ } = _,
    _ = [],
    _ = _ && typeof _ == `object`;
  return (
    _ && _.offset
      ? _.push(_(_.offset))
      : (_ && _.offset !== void 0) || _.push(_(2)),
    _ && _.flip ? _.push(_(_.flip)) : (_ && _.flip !== void 0) || _.push(_()),
    _ && _.shift
      ? _.push(_(_.shift))
      : (_ && _.shift !== void 0) || _.push(_()),
    _.push(
      _({
        apply: (_) => {
          let { rects: _, elements: _, availableHeight: _ } = _,
            _ = {
              boxSizing: `border-box`,
              zIndex: `1`,
              "-webkit-app-region": `no-drag`,
            };
          switch ((_.scroll && (_.overflowY = `auto`), _.width)) {
            case `target`:
              _.width = `${_.reference.width}px`;
              break;
            case `content`:
              _.width = `${_.floating.width}px`;
              break;
            case `dropdown`: {
              let _ = _.reference.width;
              (_.floating.width > _ && _ < 200 && (_ = _.floating.width),
                (_.width = `${_}px`));
            }
          }
          typeof _.width == `function` &&
            (_.width = _.width({
              unContentWidth: _.floating.width,
              unTargetWidth: _.reference.width,
            }));
          let _ = typeof _ == `number` ? `${_}px` : `var(--spacing-${_})`;
          ((_.maxHeight =
            typeof _.maxHeight == `function`
              ? _.maxHeight({
                  unAvailableHeight: _,
                  gutter: _,
                })
              : typeof _.maxHeight == `number`
                ? `min( calc( ${_}px - ${_} ), ${_.maxHeight}px )`
                : typeof _ == `number`
                  ? `${_ - _}px`
                  : `calc( ${_}px - var(--spacing-${_}) )`),
            Object.assign(_.floating.style, _),
            _.floating.style.setProperty(`--popover-max-height`, _.maxHeight));
        },
      }),
    ),
    _
  );
}
var _ = {
  Root: _,
  Anchor: _,
  Positioner: _,
  FocusManager: _,
};

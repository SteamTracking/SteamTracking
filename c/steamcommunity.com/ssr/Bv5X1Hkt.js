var _ = _(_(), 1),
  _ = `UBjkU6geb1U-`,
  _ = `MAqUxA6kCJo-`,
  _ = _();
function _(_) {
  let { render: _, ..._ } = _;
  return _(
    _,
    (0, _.jsx)(_, {
      radius: `sm`,
      background: `dull-8`,
      className: _,
    }),
    {
      role: `listbox`,
      ..._,
    },
  );
}
function _(_) {
  let {
    selected: _,
    focused: _,
    label: _ = null,
    render: _,
    disabled: _,
    ..._
  } = _;
  return _(
    _,
    (0, _.jsx)(_, {
      focusable: !0,
      "data-selected": _ ? `true` : `false`,
      "data-focused": _ ? `true` : void 0,
      "aria-disabled": _,
      className: _,
      paddingY: `2`,
      paddingX: `3`,
    }),
    {
      role: `option`,
      ..._,
    },
    {
      selected: _,
      focused: _,
      disabled: _,
    },
  );
}
var _ = Object.assign(_, {
    Option: _,
  }),
  _ = (0, _.createContext)(null);
function _(_) {
  let { children: _, state: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { children: _ } = _,
    _ = _.Children.only(_),
    _ = (0, _.useContext)(_),
    _ = _([_?.floating.refs.setReference, _?.props.ref]);
  if (!_) return null;
  if (!_)
    return (
      console.error(
        `<PopoverListAnchor> must be a child of <PopoverListRoot>.`,
      ),
      null
    );
  let { ref: _, ..._ } = _.props;
  return (0, _.cloneElement)(_, {
    ref: _,
    ..._.getReferenceProps(_),
  });
}
function _(_) {
  let { children: _, render: _, ref: _, label: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _([_, _?.floating.refs.setFloating]);
  return _
    ? _.open
      ? (0, _.jsx)(_, {
          state: _,
          children: (0, _.jsx)(_, {
            presentation: _.presentation,
            sizing: _.sizing,
            floatingRef: _,
            floatingProps: _.getFloatingProps(),
            floatingStyles: _.floating.floatingStyles,
            referenceElement: _.floating.elements.domReference,
            label: _,
            children: (0, _.jsx)(_, {
              render: _,
              children: (0, _.jsx)(_, {
                elementsRef: _.elementsRef,
                labelsRef: _.labelsRef,
                children: _,
              }),
            }),
          }),
        })
      : null
    : (console.error(
        `<PopoverListPositioner> must be a child of <PopoverListRoot>.`,
      ),
      null);
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
  let { state: _, children: _ } = _,
    _ = () => _.floating.context.onOpenChange(!1),
    _ = _.useRef(void 0);
  return (
    _(_, !0, !0),
    (0, _.jsx)(_, {
      navID: `PopoverList`,
      onCancelButton: _,
      modal: !0,
      navTreeRef: _,
      children: _,
    })
  );
}
function _(_) {
  let { state: _, children: _ } = _;
  return (0, _.jsx)(_, {
    context: _.floating.context,
    initialFocus: _.initialFocus,
    returnFocus: !1,
    children: _,
  });
}
function _(_) {
  let {
      children: _,
      label: _,
      selected: _,
      onSelect: _,
      ref: _,
      disabled: _,
      ..._
    } = _,
    _ = (0, _.useContext)(_),
    { ref: _, index: _ } = _({
      label: _,
    }),
    _ = _([_, _]);
  if (!_)
    return (
      console.error(`<PopoverListItem> must be a child of <PopoverListRoot>.`),
      null
    );
  let _ = _ === _.activeIndex,
    _ = _ === _.selectedIndex || !!_;
  return (0, _.jsx)(_.Option, {
    ref: _,
    selected: _,
    focused: _,
    role: `option`,
    tabIndex: 0,
    ..._.getItemProps({
      onClick: _ ? void 0 : _,
      onKeyDown: (_) => {
        !_ &&
          (_.key === `Enter` || (_.key === ` ` && !_.typingRef.current)) &&
          (_(_), _.preventDefault(), _.stopPropagation());
      },
      active: _,
      selected: _,
      disabled: _,
      ..._,
    }),
    children: _,
  });
}
function _(_) {
  let {
      open: _,
      activeIndex: _,
      setActiveIndex: _,
      selectedIndex: _,
      setSelectedIndex: _,
      interactions: _ = {},
      role: _,
      width: _,
      maxHeight: _,
      gutter: _,
      scroll: _,
    } = _,
    _ = _,
    _ = _(_.presentation),
    _ = _(_, _, _),
    _ = _(_.context, {
      enabled: !!_.click,
    }),
    _ = _(_.context, {
      enabled: !!_.focus,
    }),
    _ = _(_.context),
    _ = (0, _.useRef)([]),
    _ = _(_.context, {
      listRef: _,
      activeIndex: _,
      selectedIndex: _,
      onNavigate: _,
      virtual: !!_.virtualItemFocus,
      loop: !0,
      focusItemOnOpen: !1,
    }),
    _ = (0, _.useRef)([]),
    _ = (0, _.useRef)(!1),
    _ = _(_.context, {
      enabled: !!_.typeahead,
      listRef: _,
      activeIndex: _,
      selectedIndex: _,
      onMatch: _ ? _ : _,
      onTypingChange: (_) => (_.current = _),
    }),
    _ = _(_.context, {
      role: _,
    }),
    {
      getFloatingProps: _,
      getReferenceProps: _,
      getItemProps: _,
    } = _([_, _, _, _, _, _]);
  return {
    floating: _,
    getFloatingProps: _,
    getReferenceProps: _,
    getItemProps: _,
    open: _,
    activeIndex: _,
    selectedIndex: _,
    setSelectedIndex: _,
    elementsRef: _,
    labelsRef: _,
    typingRef: _,
    initialFocus: _.virtualItemFocus ? -1 : void 0,
    presentation: _,
    sizing: {
      width: _,
      maxHeight: _,
      gutter: _,
      scroll: _,
    },
  };
}
var _ = {
  Root: _,
  Anchor: _,
  Positioner: _,
  Item: _,
};

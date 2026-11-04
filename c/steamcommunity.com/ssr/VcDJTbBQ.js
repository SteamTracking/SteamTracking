var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { suggestions: _, onTextChange: _, onSuggestionSelected: _, ..._ } = _,
    _ = _({
      onTextChange: _,
      suggestions: _,
      onSuggestionSelected: _,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    children: [
      (0, _.jsx)(_.TextInput, {
        ..._,
      }),
      (0, _.jsx)(_.Suggestions, {
        children: _.map((_, _) =>
          (0, _.jsx)(
            _.Suggestion,
            {
              value: _,
              children: _,
            },
            _ + _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { onTextChange: _, suggestions: _, onSuggestionSelected: _ } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1);
  return {
    activeIndex: _,
    setActiveIndex: _,
    open: _,
    onOpenChange: _,
    onTextChange: (0, _.useCallback)(
      (_) => {
        _ ? (_(!0), _(null)) : _(!1), _(_);
      },
      [_],
    ),
    suggestions: _,
    onSuggestionSelected: _,
  };
}
function _(_) {
  let {
      children: _,
      placement: _ = `bottom-end`,
      popoverWidth: _ = `dropdown`,
      ..._
    } = _,
    _ = _({
      ..._.state,
      width: _,
      placement: _,
      presentation: `anchor`,
      gutter: `4`,
      interactions: {
        virtualItemFocus: !0,
        focus: !0,
      },
      role: `combobox`,
      scroll: !0,
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Root, {
      state: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      state: {
        onTextChange: _,
        activeIndex: _,
        onOpenChange: _,
        setActiveIndex: _,
        suggestions: _,
        onSuggestionSelected: _,
      },
    } = _(`<Autocomplete.TextInput>`),
    _ = (_) => {
      _.key === `Enter` &&
        _ !== null &&
        _[_] &&
        (_ && _(_[_], _),
        _.defaultPrevented || _(_[_]),
        _(null),
        _(!1),
        _.preventDefault(),
        _.stopPropagation());
    },
    _ = (_) => {
      (_.key === `Home` || _.key === `End`) && _.stopPropagation();
    },
    _ = (0, _.useRef)(null);
  return (0, _.jsx)(_.Anchor, {
    children: (0, _.jsx)(_, {
      ..._,
      inputRef: _,
      onTextChange: _,
      "aria-autocomplete": `list`,
      onKeyDown: _,
      onKeyDownCapture: _,
      role: `combobox`,
    }),
  });
}
function _(_) {
  return _.Children.toArray(_.children).length === 0
    ? null
    : (0, _.jsx)(_.Positioner, {
        ..._,
        returnFocus: !1,
      });
}
function _(_) {
  let { value: _, children: _, ..._ } = _,
    {
      state: {
        onTextChange: _,
        onOpenChange: _,
        setActiveIndex: _,
        onSuggestionSelected: _,
      },
    } = _(`<Autocomplete.TextInput>`);
  return (0, _.jsx)(_.Item, {
    onSelect: (_) => {
      _ && _(_, _), _.defaultPrevented || _(_), _(null), _(!1);
    },
    ..._,
    children: _,
  });
}
var _ = Object.assign(_, {
    Root: _,
    TextInput: _,
    Suggestions: _,
    Suggestion: _,
  }),
  _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return _(_, `${_} must be used within an <Autocomplete>!`), _;
}
export { _, _ };

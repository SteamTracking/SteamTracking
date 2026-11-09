import { _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _ } from "./src.js";
import { _ } from "./dialogs.js";
import { _, _ } from "./flex.js";
import { _, _ } from "./variantdefaults.js";
import { _ } from "./text.js";
import { _, _, _, _, _, _, _, _ } from "./localization.js";
import { _ } from "./render.js";
import { _ } from "./src2.js";
import { _, _ } from "./dashboardutilities.js";
import { _, _ } from "./esm.js";
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
    _ = _.useCallback(
      (_) => {
        _.target == _.currentTarget && _(`backdropclick`);
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
var _ = `fS9t6DH7Z-U-`,
  _ = `nu0EdzsNfaM-`,
  _ = `Ti-54apdb-E-`;
function _(_) {
  let {
      children: _,
      state: _,
      placement: _ = `bottom-end`,
      popoverWidth: _ = `dropdown`,
      popoverMaxHeight: _,
      popoverPresentation: _,
      popoverLabel: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(void 0);
  (0, _.useEffect)(() => _(void 0), [_.bOpen]);
  let _ = _(),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useMemo)(
      () => _.rgFilteredOptions.findIndex((_) => _ === _.selectedValue),
      [_.selectedValue, _.rgFilteredOptions],
    ),
    _ = _({
      open: _.bOpen,
      onOpenChange: _.setOpen,
      width: _,
      maxHeight: _,
      placement: _,
      presentation: _,
      gutter: `4`,
      activeIndex: _.activeIndex,
      setActiveIndex: _.setActiveIndex,
      selectedIndex: _,
      setSelectedIndex: (_) => _.onItemSelectionChange(_.rgFilteredOptions[_]),
      interactions: {
        click: !0,
        virtualItemFocus: !_,
      },
      role: `combobox`,
      scroll: !1,
    }),
    _ = {
      ..._,
      ..._,
      focusedValue: _,
      onFocusChange: _,
      refPopover: _,
      refScrollElement: _,
      setOpen: (_) => {
        if (_) {
          let _ = null;
          ((_ = _.multiselect
            ? Array.isArray(_.selectedValue)
              ? _.selectedValue[0]
              : null
            : _.selectedValue),
            _(_),
            _.onInputChange(``));
        }
        _.setOpen(_);
      },
      onIndexSelected: (_) => {
        let _ = _.elementsRef.current;
        _ && _[_] && _[_].click();
      },
      popoverPlacement: _.floating.placement,
      popoverPresentation: _.presentation,
      popoverLabel: _,
    };
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
      refPopover: _,
      inputValue: _,
      onInputChange: _,
      activeIndex: _,
      popoverPlacement: _,
      popoverPresentation: _,
      popoverLabel: _,
      multiselect: _,
      setActiveIndex: _,
      setOpen: _,
      filterPlaceholder: _,
      onIndexSelected: _,
      refScrollElement: _,
    } = _(`<Combobox.Options>`),
    _ = (0, _.useCallback)((_) => {
      _ &&
        _.focus({
          preventScroll: !0,
        });
    }, []),
    _ = (_) => {
      _.key === `Enter` &&
        _ !== null &&
        (_(_), _ || (_(null), _(!1)), _.preventDefault(), _.stopPropagation());
    },
    _ = _ === `anchor` && _.startsWith(`top`),
    _ = (0, _.jsx)(_, {
      overflow: `auto`,
      ref: _,
      style: {
        overscrollBehavior: `contain`,
      },
      children: _.children,
    });
  return (0, _.jsx)(_.Positioner, {
    ref: _,
    label: _,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      maxHeight: `var(--popover-max-height)`,
      children: [
        _ && _,
        (0, _.jsx)(_, {
          flexShrink: `0`,
          className: _(_, _ ? _ : _),
          children: (0, _.jsx)(_, {
            margin: `3`,
            variant: `inset`,
            radius: `sm`,
            value: _,
            onTextChange: _,
            onKeyDown: _,
            onKeyDownCapture: (_) => {
              (_.key === `Home` || _.key === `End`) && _.stopPropagation();
            },
            placeholder: _,
            inputRef: _,
            autoComplete: `off`,
          }),
        }),
        !_ && _,
      ],
    }),
  });
}
var _ = (0, _.createContext)(null);
function _(_) {
  let { items: _, renderItem: _, overscan: _ = 5, ..._ } = _,
    {
      bOpen: _,
      refPopover: _,
      refScrollElement: _,
    } = _(`<ComboboxVirtualizedOptions>`),
    [_, _] = (0, _.useState)(!1),
    _ = _ && !!_.current && !!_.current;
  (0, _.useEffect)(() => {
    _ !== _ && _(_);
  }, [_, _]);
  let _ = _({
    count: _ ? _.length : Math.min(_.length, 3),
    getScrollElement: () => _.current,
    enabled: _,
    measureElement: _,
    ..._,
  });
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      value: _,
      children: (0, _.jsx)(_, {
        height: `${_.getTotalSize()}px`,
        position: `relative`,
        width: `100%`,
        children: _.getVirtualItems().map((_) => _(_[_.index], _, _)),
      }),
    }),
  });
}
function _(_) {
  let { virtualItem: _, children: _ } = _,
    _ = (0, _.useContext)(_);
  return (
    _(_, `Virtual item rendered outside of a virtualizer!`),
    (0, _.jsx)(_, {
      position: `absolute`,
      width: `100%`,
      style: {
        top: 0,
        left: 0,
        transform: `translateY(${_.start}px)`,
      },
      ref: _.measureElement,
      "data-index": _.index,
      children: _,
    })
  );
}
function _(_) {
  let { virtualItem: _, ..._ } = _;
  return (0, _.jsx)(_, {
    virtualItem: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { virtualItem: _, children: _ } = _;
  return (0, _.jsx)(_, {
    virtualItem: _,
    children: _,
  });
}
function _(_) {
  let { value: _, children: _, disabled: _ } = _,
    {
      onItemSelectionChange: _,
      selectedValue: _,
      multiselect: _,
      maxSelected: _,
    } = _(`<Combobox.Option>`),
    _ = !1,
    _ = !1;
  _
    ? ((_ = Array.isArray(_) && _.includes(_)),
      (_ = !!_ && Array.isArray(_) && _.length >= _))
    : (_ = _ === _);
  let _ = _ || (_ && !_);
  return (0, _.jsxs)(_.Item, {
    onSelect: () => _(_),
    selected: _,
    disabled: _,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          gap: `2`,
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              checked: _,
              variant: `dark`,
            }),
            _,
          ],
        }),
      !_ && _,
    ],
  });
}
function _(_) {
  let { children: _, beforeContent: _, render: _ } = _,
    {
      bOpen: _,
      setOpen: _,
      inputValue: _,
      onInputChange: _,
      selectedValue: _,
      focusedValue: _,
      refScrollElement: _,
      onItemSelectionChange: _,
      activeIndex: _,
      setActiveIndex: _,
      onFocusChange: _,
      rgFilteredOptions: _,
      onSelectionChange: _,
      multiselect: _,
      onClear: _,
      refPopover: _,
      clearable: _,
      filterPlaceholder: _,
      onIndexSelected: _,
      popoverPlacement: _,
      popoverPresentation: _,
      popoverLabel: _,
      maxSelected: _,
      variant: _,
      ..._
    } = _(`<ComboboxTrigger>`),
    _ = {
      tabIndex: 0,
      children: _,
    },
    _ = _ ? Array.isArray(_) && _.length > 0 : _ != null,
    _ = _ && _,
    _ = _
      ? (0, _.jsx)(_, {
          onClick: _,
          cursor: `pointer`,
          hitSlop: !0,
        })
      : (0, _.jsx)(_, {}),
    _ = _
      ? {
          onSecondaryButton: _,
          actionDescriptionMap: {
            [_.SECONDARY]: _.Localize(`#Clear`),
          },
        }
      : void 0,
    _ = _(`Combobox`, _),
    _ = (0, _.jsx)(_, {
      beforeContent: _,
      afterContent: _,
      hasValue: _,
      cursor: `pointer`,
      tabIndex: 0,
      variant: _,
      navProps: _,
      ..._,
    }),
    _ = _(_, _, _, void 0);
  return (0, _.jsx)(_.Anchor, {
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    ..._,
  });
}
function _(_, _) {
  if (typeof _ == `string`)
    return _.toLocaleLowerCase().includes(_.toLocaleLowerCase());
  try {
    return JSON.stringify(_)
      .toLocaleLowerCase()
      .includes(_.toLocaleLowerCase());
  } catch {}
  return (
    console.error(
      `Could not use default option filter on provided Comboxbox option. Custom filter function required.`,
    ),
    !1
  );
}
function _(_) {
  return _(_, !1);
}
function _(_, _) {
  let {
      rgOptions: _,
      filter: _ = _,
      filterPlaceholder: _,
      selectedValue: _,
      onSelectionChange: _,
      maxSelected: _,
    } = _,
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useMemo)(() => _.filter((_) => _(_, _)), [_, _, _]),
    _ = typeof _ == `number`,
    _ = _.length > 0,
    _ = (0, _.useCallback)(
      (_) => {
        (_ && !_ && _ && _(0), _(_));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        (_ || _(``), _(_));
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        (_(_), _ || _(!1));
      },
      [_, _, _],
    );
  return {
    activeIndex: _,
    setActiveIndex: _,
    rgFilteredOptions: _,
    selectedValue: _,
    onSelectionChange: _,
    onItemSelectionChange: (0, _.useCallback)(
      (_) => {
        if (!_) _(_);
        else if (!_) _([_]);
        else {
          let _ = _,
            _ = _.indexOf(_);
          if (_ === -1) _(_.concat(_));
          else return _(_.slice(0, _).concat(_.slice(_ + 1)));
        }
      },
      [_, _, _],
    ),
    onClear: (_) => {
      (_(_ ? [] : null), _?.stopPropagation(), _?.preventDefault());
    },
    inputValue: _,
    onInputChange: _,
    bOpen: _,
    setOpen: _,
    filterPlaceholder: _,
    multiselect: _,
    maxSelected: _,
  };
}
var _ = {
  Root: _,
  Option: _,
  Options: _,
  VirtualizedOptions: _,
  VirtualizedOption: _,
  VirtualizedContent: _,
  Trigger: _,
  DefaultOptionFilter: _,
  Value: _,
  Placeholder: _,
};
function _(_) {
  return _
    ? typeof _ == `string`
      ? _
      : typeof _ == `number`
        ? _.toString()
        : (console.error(
            `Could not use default option labeler on Combobox option value. Custom labeler requried`,
            _,
          ),
          ``)
    : ``;
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      filter: _,
      filterPlaceholder: _,
      placeholder: _,
      getOptionLabel: _ = _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      filter: (0, _.useCallback)((_, _) => (_ ? _(_, _) : _(_, _(_))), [_, _]),
      filterPlaceholder: _,
    }),
    _ = _ != null;
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _(_),
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgFilteredOptions.map((_) =>
          (0, _.jsx)(
            _,
            {
              value: _,
              children: _(_),
            },
            _(_),
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _);
function _(_) {
  return _(_, !0);
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      filter: _,
      filterPlaceholder: _,
      placeholder: _,
      getOptionLabel: _ = _,
      maxSelected: _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      filter: (0, _.useCallback)((_, _) => (_ ? _(_, _) : _(_, _(_))), [_, _]),
      filterPlaceholder: _,
      maxSelected: _,
    }),
    _ = Array.isArray(_) && _.length > 0,
    _ = ``;
  if (_) {
    let _ = _.map((_) => _(_));
    _ =
      `ListFormat` in Intl
        ? new Intl.ListFormat(_().strISOCode).format(_)
        : _.join(`, `);
  }
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgFilteredOptions.map((_) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _(_),
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _),
  _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return (_ || console.error(`${_} must be used within a <Combobox>!`), _);
}
function _(_) {
  let {
      rows: _ = 3,
      sizing: _ = `content`,
      resize: _ = `none`,
      ref: _,
      value: _,
      onTextChange: _,
      onChange: _,
      disabled: _,
      variant: _,
      ..._
    } = _,
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = _(`TextArea`, _),
    _ = _(),
    [_, _] = _(_),
    _ = {
      resize: _,
      fieldSizing: _,
      minHeight: _,
      maxHeight: _,
    },
    _ = _({
      ..._,
      className: (0, _.default)(_(), _()),
      style: _,
      cursor: `text`,
      disabled: _,
      variant: _,
    });
  return (0, _.jsx)(_ ? _ : `textarea`, {
    ref: _,
    ..._,
    value: _ || ``,
    onChange: _,
    readOnly: _,
    "aria-disabled": _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    noFocusRing: !0,
    ..._,
  });
}
function _(_) {
  let _ = typeof _ == `number` ? _ : _.min,
    _ = typeof _ == `number` ? void 0 : _.max;
  return [
    typeof _ == `number` ? `calc( ${_}lh + 2 * var(--spacing-1) )` : void 0,
    typeof _ == `number` ? `calc( ${_}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
var _ = _((_, _) => {
  _.exports = function _(_, _) {
    if (_ === _) return !0;
    if (_ && _ && typeof _ == `object` && typeof _ == `object`) {
      if (_.constructor !== _.constructor) return !1;
      var _, _, _;
      if (Array.isArray(_)) {
        if (((_ = _.length), _ != _.length)) return !1;
        for (_ = _; _-- !== 0;) if (!_(_[_], _[_])) return !1;
        return !0;
      }
      if (_.constructor === RegExp)
        return _.source === _.source && _.flags === _.flags;
      if (_.valueOf !== Object.prototype.valueOf)
        return _.valueOf() === _.valueOf();
      if (_.toString !== Object.prototype.toString)
        return _.toString() === _.toString();
      if (((_ = Object.keys(_)), (_ = _.length), _ !== Object.keys(_).length))
        return !1;
      for (_ = _; _-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(_, _[_])) return !1;
      for (_ = _; _-- !== 0;) {
        var _ = _[_];
        if (!_(_[_], _[_])) return !1;
      }
      return !0;
    }
    return _ !== _ && _ !== _;
  };
});

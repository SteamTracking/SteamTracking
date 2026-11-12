import { _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _, _, _ } from "./chunk~25a6634263.js";
import { _ } from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~25a66342632.js";
import { _, _ } from "./chunk~971d501580.js";
import { _, _, _, _ } from "./chunk~5f339e9a5f.js";
import { _, _ } from "./chunk~a292304e38.js";
import { _ } from "./chunk~a58194c5d9.js";
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
} from "./chunk~ecf04667fe.js";
import { _ } from "./chunk~0c46413ed4.js";
var _ = _(_(), 1),
  _ = _(),
  _ = _(_(), 1),
  _ = _({
    Color: () => _,
    HitSlop: () => _,
    "IconSize-1": () => _,
    "IconSize-2": () => _,
    "IconSize-3": () => _,
    "IconSize-4": () => _,
    "IconSize-5": () => _,
    "IconSize-6": () => _,
    "IconSize-7": () => _,
    "IconSize-8": () => _,
    "IconSize-9": () => _,
    IconSizeDefault: () => _,
    default: () => _,
  }),
  _ = `Py4CKUGbeYs-`,
  _ = `CcnpuN34m4k-`,
  _ = `_42i2I16T4iU-`,
  _ = `ZMI1sXEbQLE-`,
  _ = `CJFGcwfGWVs-`,
  _ = `EK1eBcIytP0-`,
  _ = `UK-YwUaPj-w-`,
  _ = `dUpX0I6s3ls-`,
  _ = `_4e235KgOqgQ-`,
  _ = `MFsWRuG-oYE-`,
  _ = `neq5gxHejKE-`,
  _ = `f4EiHXJjIDM-`,
  _ = {
    Color: _,
    IconSizeDefault: _,
    "IconSize-1": `_42i2I16T4iU-`,
    "IconSize-2": `ZMI1sXEbQLE-`,
    "IconSize-3": `CJFGcwfGWVs-`,
    "IconSize-4": `EK1eBcIytP0-`,
    "IconSize-5": `UK-YwUaPj-w-`,
    "IconSize-6": `dUpX0I6s3ls-`,
    "IconSize-7": `_4e235KgOqgQ-`,
    "IconSize-8": `MFsWRuG-oYE-`,
    "IconSize-9": `neq5gxHejKE-`,
    HitSlop: _,
  };
function _(_) {
  return (0, _.jsx)(`svg`, {
    ..._(_),
  });
}
var _ = [
  ..._,
  {
    prop: `size`,
    responsive: !0,
    className: (_) => _[`IconSize-${_}`],
  },
  {
    prop: `color`,
    className: _,
    cssProperty: (_) => [`--icon-color`, _(_)],
  },
  {
    prop: `hitSlop`,
    className: _,
    cssProperty: (_) => [`--hit-slop-custom`, typeof _ == `string` ? _ : ``],
  },
  _.find(({ prop: _ }) => _ === `cursor`),
];
function _(_) {
  return !_ || _[0] === `#` ? _ : _(_);
}
function _(_) {
  let { viewBox: _, ..._ } = _,
    _ = {
      className: _.size ? void 0 : _,
      ..._,
    };
  return (_ && (_.viewBox = _(_)), _(_, _));
}
function _(_) {
  if (_)
    return typeof _ == `number`
      ? `0 0 ${_} ${_}`
      : typeof _ == `string`
        ? _
        : `0 0 ${_.width} ${_.height}`;
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBox: 12,
    children: (0, _.jsx)(`path`, {
      _: `M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = `_3jpwJsAoUYI-`,
  _ = `_1ogKYNGwSuc-`;
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
});
(0, _.createContext)(null);
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
var _ = (0, _.createContext)(null);
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
  },
  _ = _({
    Clickable: () => _,
    ControlBox: () => _,
    Disabled: () => _,
    Focusable: () => _,
    Hoverable: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Variant-bare": () => _,
    "Variant-basic": () => _,
    "Variant-dim": () => _,
    "Variant-highlight": () => _,
    "Variant-inset": () => _,
    "Variant-inset-focus": () => _,
    "Variant-inset-glass": () => _,
    "Variant-underline": () => _,
    default: () => _,
  }),
  _ = `WvP1Y18EUvo-`,
  _ = `jwWjaxXPsDM-`,
  _ = `cD3sooLYRIw-`,
  _ = `D6wVVV-X5y0-`,
  _ = `DNP-2w2VuQY-`,
  _ = `_9bvc1oT8XTs-`,
  _ = `_5saG3OpKKtQ-`,
  _ = `cnHW45U8yJQ-`,
  _ = `rVesyBhAePM-`,
  _ = `k9-hKA0sTXo-`,
  _ = `SPBgilcrPoU-`,
  _ = `CUrvQemWr-k-`,
  _ = `ab1HL9HJUk8-`,
  _ = `Ln--Xddyrmk-`,
  _ = `tV5yUd0n1-I-`,
  _ = `_0OUc2St8owc-`,
  _ = {
    "Variant-basic": `WvP1Y18EUvo-`,
    "Size-3": `jwWjaxXPsDM-`,
    "Variant-inset": `cD3sooLYRIw-`,
    "Variant-inset-focus": `D6wVVV-X5y0-`,
    Focusable: _,
    "Variant-inset-glass": `_9bvc1oT8XTs-`,
    "Variant-underline": `_5saG3OpKKtQ-`,
    "Variant-dim": `cnHW45U8yJQ-`,
    "Variant-highlight": `rVesyBhAePM-`,
    "Variant-bare": `k9-hKA0sTXo-`,
    ControlBox: _,
    Hoverable: _,
    Clickable: _,
    Disabled: _,
    "Size-1": `tV5yUd0n1-I-`,
    "Size-2": `_0OUc2St8owc-`,
  };
function _(_) {
  let { children: _, beforeContent: _, afterContent: _, hasValue: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsxs)(_, {
    ..._,
    align: `center`,
    "data-has-value": !!_,
    minWidth: `0`,
    children: [
      _ &&
        (0, _.jsx)(_, {
          paddingRight: `2`,
          children: _,
        }),
      (0, _.jsx)(_, {
        flexGrow: `1`,
        minWidth: `0`,
        children: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          paddingLeft: `2`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let {
      variant: _ = `basic`,
      size: _,
      radius: _,
      focusable: _ = !0,
      hoverable: _ = !0,
      clickable: _ = !0,
      disabled: _,
      className: _,
      status: _,
      color: _,
      ..._
    } = _,
    _ = _(_),
    _ = _ === `underline` ? `none` : _;
  return _(
    {
      ..._,
      radius: _,
      "data-status": _,
      "data-dull-color": _ && _ !== `dull` ? _ : void 0,
      className: (0, _.default)(
        _,
        _ && !_ && `DNP-2w2VuQY-`,
        _ && !_ && `CUrvQemWr-k-`,
        _ && !_ && `ab1HL9HJUk8-`,
        _ && `Ln--Xddyrmk-`,
        _[`Variant-${_}`],
        _[`Size-${_}`],
        _,
      ),
    },
    _,
  );
}
var _ = {
  _: `rotate( 180, 10, 10 )`,
  left: `rotate( 90, 10, 10 )`,
  right: `rotate( 270, 10, 10 )`,
};
function _(_) {
  let { direction: _ = `down` } = _,
    _ = _[_];
  return (0, _.jsx)(_, {
    ..._,
    viewBox: 20,
    children: (0, _.jsx)(`path`, {
      transform: _,
      _: `M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBox: 16,
    children: (0, _.jsx)(`path`, {
      _: `M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = _({
    Checkbox: () => _,
    Disabled: () => _,
    Icon: () => _,
    Root: () => _,
    "Variant-dark": () => _,
    "Variant-light": () => _,
    "Variant-outline": () => _,
    default: () => _,
  }),
  _ = `rSf9Bk02W2U-`,
  _ = `cOnQpHU2Y6g-`,
  _ = `nF9VRIidlqs-`,
  _ = `UmL2HbEtBt4-`,
  _ = `W-krBS4he0U-`,
  _ = `iOKN2zGTVXQ-`,
  _ = `JYjG3daoLWk-`,
  _ = {
    Root: _,
    "Variant-light": `cOnQpHU2Y6g-`,
    "Variant-dark": `nF9VRIidlqs-`,
    "Variant-outline": `UmL2HbEtBt4-`,
    Disabled: _,
    Checkbox: _,
    Icon: _,
  };
function _(_) {
  let {
      checked: _,
      onChange: _,
      disabled: _,
      children: _,
      ref: _,
      variant: _,
      color: _,
      align: _ = `center`,
      icon: _,
      ..._
    } = _,
    _ = _ === `indeterminate`,
    _ = _ ?? (_ ? _ : _),
    _ = () => {
      _ || (_ && _(_ ? !0 : !_));
    },
    _ = (_) => {
      _ || (_.key === ` ` && (_(), _.preventDefault(), _.stopPropagation()));
    },
    _ = _(`Checkbox`, _);
  return (0, _.jsxs)(_, {
    align: _,
    ref: _,
    role: `checkbox`,
    "aria-checked": _ ? `mixed` : _,
    "data-state": _(_),
    className: (0, _.default)(_, _[`Variant-${_}`], _ && `W-krBS4he0U-`),
    onClick: _,
    tabIndex: 0,
    onKeyDown: _,
    cursor: `default`,
    "aria-disabled": _,
    "data-accent-color": _,
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _ &&
          (0, _.jsx)(_, {
            className: `JYjG3daoLWk-`,
          }),
      }),
      _,
    ],
  });
}
function _(_) {
  return _ === `indeterminate` ? _ : _ ? `checked` : `unchecked`;
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~771cf66f24.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~1330e2f002.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~49231d77ec.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~44db72c5a4.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~2777feae50.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~2e10adb49e.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~df81c6c5fc.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~45ecfc97ea.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~59ec2dd130.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~89428c5240.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~21c9ff9591.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~14d758cb29.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~d48f37f295.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~5dfbf4d6cd.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~4339dde4bc.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~2c0a4e6b9e.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~846c762b61.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~273d0a3c6d.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~b98fc44e6c.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~ce234124b9.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~e51df7f1a8.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~01c42398bb.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~e1be9be6db.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~79314b6b7e.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~942a8cfb44.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~78512764a7.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~63cd4ce11c.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~50ba23d991.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~809fd3f292.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~d56ce600a7.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~0c06f02b2f.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~b7b0d5907a.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
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
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useMemo)(
      () =>
        _.rgOptions.findIndex((_) =>
          _.multiselect ? _.selectedValue.includes(_) : _ === _.selectedValue,
        ),
      [_.selectedValue, _.rgOptions, _.multiselect],
    ),
    _ = (0, _.useRef)(null),
    _ = {
      ..._,
      ..._,
      focusedValue: _,
      onFocusChange: _,
      refPopover: _,
      popoverLabel: _,
      setOpen: (_) => {
        (_ && _(_.multiselect ? _.selectedValue[0] : _.selectedValue),
          _.setOpen(_));
      },
      focusedIndex: _,
      onFocusedIndexChange: _,
    },
    _ = _({
      open: _.bOpen,
      onOpenChange: _.setOpen,
      width: _,
      maxHeight: _,
      placement: _,
      presentation: _,
      selectedIndex: _,
      setSelectedIndex: (_) => _.onItemSelectionChange(_.rgOptions[_]),
      activeIndex: _,
      setActiveIndex: _,
      gutter: `4`,
      interactions: {
        click: !0,
        typeahead: !0,
      },
      role: `select`,
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
  let { refPopover: _, popoverLabel: _ } = _(`<Select.Options>`);
  return (0, _.jsx)(_.Positioner, {
    ref: _,
    label: _,
    children: _.children,
  });
}
function _(_) {
  let { value: _, children: _, disabled: _, ..._ } = _,
    {
      onItemSelectionChange: _,
      multiselect: _,
      selectedValue: _,
      maxSelected: _,
    } = _(`<Select.Option>`),
    _ = typeof _ == `string` ? _ : void 0,
    _ = !1,
    _ = !1;
  _
    ? ((_ = Array.isArray(_) && _.includes(_)),
      (_ = !!_ && Array.isArray(_) && _.length >= _))
    : (_ = _ === _);
  let _ = _ || (_ && !_);
  return (0, _.jsxs)(_.Item, {
    label: _,
    onSelect: () => _(_),
    selected: _,
    disabled: _,
    ..._,
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
  let { children: _, render: _ } = _,
    {
      bOpen: _,
      setOpen: _,
      selectedValue: _,
      variant: _,
      size: _,
      radius: _,
      status: _,
      color: _,
      rgOptions: _,
      multiselect: _,
      onClear: _,
      focusedValue: _,
      onFocusChange: _,
      onSelectionChange: _,
      clearable: _,
      focusedIndex: _,
      onItemSelectionChange: _,
      onFocusedIndexChange: _,
      refPopover: _,
      popoverLabel: _,
      placeholder: _,
      maxSelected: _,
      ..._
    } = _(`<SelectTrigger>`),
    _ = {
      tabIndex: 0,
      role: `combobox`,
      onClick: () => _(!_),
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
    _ = _(`Select`, _),
    _ = (0, _.jsx)(_, {
      afterContent: _,
      variant: _,
      size: _,
      radius: _,
      status: _,
      color: _,
      hasValue: _,
      tabIndex: 0,
      cursor: `pointer`,
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
function _(_) {
  return _(_, !1);
}
function _(_, _) {
  let { onSelectionChange: _, selectedValue: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(
      (_) => {
        (_(_), _ || _(!1));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        (_(_ ? [] : null), _?.stopPropagation(), _?.preventDefault());
      },
      [_, _],
    );
  return {
    onSelectionChange: _,
    onItemSelectionChange: (0, _.useCallback)(
      (_) => {
        if (!_) _(_);
        else {
          let _ = _,
            _ = _.indexOf(_);
          if (_ === -1) _(_.concat(_));
          else return _(_.slice(0, _).concat(_.slice(_ + 1)));
        }
      },
      [_, _, _],
    ),
    onClear: _,
    bOpen: _,
    setOpen: _,
    multiselect: _,
    selectedValue: _,
    ..._,
  };
}
var _ = {
  Root: _,
  Option: _,
  Options: _,
  Trigger: _,
  Value: _,
  Placeholder: _,
};
function _(_) {
  return typeof _ == `string`
    ? _
    : typeof _ == `number`
      ? _.toString()
      : (console.error(
          `Could not use default option labeler on Select option value. Custom labeler requried`,
          _,
        ),
        ``);
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: _ = _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
    }),
    _ = _ != null,
    _ = _ ? _(_) : ``;
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
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _,
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
var _ = _;
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: _ = _,
      maxSelected: _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
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
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _,
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
  return (_ || console.error(`${_} must be used within a <Select>!`), _);
}

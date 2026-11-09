import { _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _ } from "./src.js";
import { _ } from "./dialogs.js";
import { _ } from "./react-router.js";
import { _, _ } from "./flex.js";
import { _, _, _, _ } from "./layout.js";
import { _ } from "./variantdefaults.js";
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
} from "./popoversurface.js";
import { _ } from "./render.js";
var _ = _(_(), 1),
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
  },
  _ = _();
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
  }),
  _ = _(_(), 1);
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
      size: _ = `2`,
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
((_.arabic = () => _(() => import(`./baseui_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./baseui_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./baseui_bulgarian.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./baseui_czech.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./baseui_danish.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./baseui_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./baseui_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./baseui_finnish.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./baseui_french.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./baseui_german.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./baseui_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./baseui_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./baseui_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./baseui_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./baseui_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./baseui_koreana.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./baseui_latam.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./baseui_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./baseui_norwegian.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./baseui_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./baseui_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./baseui_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./baseui_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./baseui_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./baseui_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./baseui_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./baseui_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./baseui_tchinese.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./baseui_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./baseui_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./baseui_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./baseui_vietnamese.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);

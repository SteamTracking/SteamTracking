var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      children: _,
      hoverContent: _,
      nDelayShowMS: _,
      bTooltipMode: _,
      popoverProps: _,
    } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      hover: (_) => {
        let _ = {
          ..._,
          delay: {
            open: _,
            close: 0,
          },
        };
        return (
          _ &&
            (_ = {
              ..._,
              handleClose: null,
            }),
          _
        );
      },
    },
    presentation: `anchor`,
    ..._,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _,
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    ],
  });
}
var _ = _(_(), 1),
  _ = `eyl2vUlQWEs-`,
  _ = `_7mI7iawr61I-`,
  _ = `-pd7WaMaCGQ-`,
  _ = `_4-EnX-rx-Bo-`,
  _ = `_58JDtRqWywI-`,
  _ = `AN73Kps5E7k-`,
  _ = `wcV7eyn83wM-`,
  _ = `hwk3XNCq9Fo-`,
  _ = `-RNwc-KlSpA-`,
  _ = `Fp3sktsxh98-`,
  _ = `uE7SRhzps2Q-`,
  _ = `XR-wlKdotHE-`,
  _ = `_5Yw-XyYf4ao-`,
  _ = `b0nTNEz4-gE-`;
function _(_) {
  let _ = _();
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `_3fhicR1HTic-`),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    role: `heading`,
    "aria-level": 2,
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { title: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _.className),
    children: _.children,
  });
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: (0, _.default)(_, _),
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.href);
  return _.globalOnly && _.EREALM == _.k_ESteamRealmChina
    ? null
    : (0, _.jsx)(_, {
        href: _,
        className: _,
        onClick: _.onClick,
        onOKButton: _.onClick,
        focusable: _.focusable,
        children: _.children,
      });
}
function _(_) {
  let { storeItem: _, feature: _, depth: _, name: _ } = _;
  return _ && !_.visible
    ? null
    : (0, _.jsx)(_, {
        storeItem: _,
        feature: _,
        depth: _,
        className: _,
        children: _ || _?.name,
      });
}
var _ = _.memo(function (_) {
  let { handle: _, globalOnly: _ } = _,
    { data: _ } = _(),
    _ = _?.get(_);
  return _
    ? (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}${_.url_path}`,
        globalOnly: _,
        children: _.display_name,
      })
    : null;
});
function _(_) {
  return (0, _.jsx)(`hr`, {
    className: (0, _.default)(_.className, _),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: (0, _.default)(_, _),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    navEntryPreferPosition: _.MAINTAIN_X,
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { data: _ } = _(),
    _ = _?.get(_.handle);
  return _
    ? (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}${_.url_path}`,
        name: _.display_name,
        icon: _.icon,
      })
    : null;
}
function _(_) {
  let _ = _(_.href);
  return (0, _.jsxs)(_, {
    href: _,
    className: (0, _.default)(_, !!_.icon && `ON41YUlrQhE-`),
    children: [
      _.icon &&
        (0, _.jsx)(`span`, {
          className: `mET2oYICpJM-`,
          children: _.icon,
        }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _.name,
      }),
    ],
  });
}
var _ = _.createContext({
  wide: !0,
});
function _(_) {
  let _ = _.useMemo(
    () => ({
      wide: !1,
    }),
    [],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  let _ = _();
  return _.useContext(_).wide && !_;
}
function _(_) {
  let {
    href: _,
    label: _ = _(`#Menu_Popover_ViewAll`),
    globalOnly: _ = !1,
  } = _;
  return _ && _.EREALM == _.k_ESteamRealmChina
    ? null
    : (0, _.jsxs)(_, {
        className: (0, _.default)(_.className, _),
        href: _,
        children: [_, (0, _.jsx)(_, {})],
      });
}
function _(_) {
  let {
    onClick: _,
    children: _ = (0, _.jsxs)(_.Fragment, {
      children: [_(`#Menu_Popover_ViewAll`), ` `, (0, _.jsx)(_, {})],
    }),
  } = _;
  return (0, _.jsx)(_, {
    className: _,
    onClick: _,
    onOKButton: _,
    children: _,
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 7 11`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M3.41628 5.2L-6.9089e-08 1.58057L1.49186 6.52113e-08L6.4 5.2L1.49186 10.4L-3.85509e-07 8.81943L3.41628 5.2Z`,
    }),
  });
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    ..._(_, _),
    enabled: !!_,
    initialData: _ ? void 0 : [],
  });
}
function _(_, _) {
  return [`RecommendedTagsForUser`, _, _];
}
function _(_, _) {
  return {
    queryKey: _(_.country, _.language),
    queryFn: () => _(_, _),
    staleTime: 864e5,
  };
}
async function _(_, _) {
  let _ = _.Init(_);
  (_.Body().set_language(_.language),
    _.Body().set_country_code(_.country),
    _.Body().set_favor_rarer_tags(!0));
  let _ = await _.GetRecommendedTagsForUser(_, _);
  if (!_.BSuccess())
    throw `Error loading recommended tags: ${_.GetErrorMessage()}`;
  return _.Body().toObject().tags || [];
}
var _ = `_66RRnbNEtRA-`,
  _ = `aIWefynuRs8-`,
  _ = `-sD18bXsZ8Q-`,
  _ = `A8PCEoDc9TY-`,
  _ = `nJT7XJZ6aB0-`,
  _ = new URL(`assets/C3yxaFO6.png`, import.meta.url).href,
  _ = new URL(`assets/3-iTIaq7.png`, import.meta.url).href,
  _ = new URL(`assets/UEUZGJn2.png`, import.meta.url).href,
  _ = new URL(`assets/BdHLWMHt.png`, import.meta.url).href,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAetJREFUeAHtme1xwjAMhhWu/0s38Ah0g4zQDZoNoBNAN2gngE5QNiDdoBsknaBhAlcC+84EmRZ+9Ez8PnfCTiScWP5SbCIAAAAAAAAAAABki7V2xtLY4dOwPPp6F67yFSdLyounoihevAMaTgzlRccOuPMOsHQ+LcuK0qAivQFXtH9PVc8O2NWf7GVsKBHkXZT3Wwb6UquA6EaRMjuWBcs9S0nptPQ5fAb57qSl4pyJYjO7kh7w7dLGtbwJ9E2/B/gC1K6jPKhJ3AFzd20CR3imfZ1ca0OgPfGsmhKG57Rnl7acrANVy/deA13tFZoDxhTHUMJIlw8uw7y0unE2Ur9J/4+2N4aMUvjEXscc8B50/7l0fTd0m54uOgdYZ1wG+tIej6lBLIM3kTINy8ZeFB8lQxfJHxBzwBCouAElFtiyzGNGQ3aATHar34xGlDlwAGUOHECZo60Csmaulfsyqz7QdVDT8TeND4HNkXUvQIqumS6UTD0S3Jywq/qR4LlDoKOBgUmQMgcOcOlfx/aYBoZfBuWrqXR5mSm/FNtbOtxJkV2WitIgbBjZuJH9v61iNw3ytfz4g5GSk2SWtX+i4v3Bt90Q4ExN+3OAXFhI5SVThHddl5aT05KGSU37yn8QAAAAAAAAAAAAQK78AAT+RfVfmgXsAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAApNJREFUeAHtmY1xqzAMgJV3b4BsUG/weBMknaDZIBmhGyQbtBukG/Q6Ad0AOgF0gmQDVTqci49iI1MMbU/fnQ4ulpARsvwTAEVRFEVRFEVRFEVRlIEg4prkSFJhWgrrx8B3gDtCkuM8HL8aiAV8AXKe0SUnWcJ81CS3i8WihgH8gYHYyD9D+pd/JTmQlJ52Y/sxLTb9UlM5/pYkp4DuHqYCm3Ef4plkRZKR7HB4YSxafouA7gmmAsNffw/dATuhnJOjf7D2jx1tbe5gCjD8RY3HZo8ycpKltXlotXFmLa3kXbaQGnKyQT9VwG6NMrYBm5XTtvPYRxXlIbNAKM1Czg3IyJz7datt49yvoJstpAT7x/K9x65COTleU5zTfmuv7bZOW0gFytOYC9dlHGc4fKVYQVzwL6RZm+DnopSadgAqoZ14GMTWgAymhac/Djpn3iMMqyNBovYCHFr4GZS0N/gvUfwLQvgrCFUPJC8kN9B8CRYD8dlzhmajU1rh+3cSXmhtemwNjA2G53+XzGMfsxosAv3YCZ9xAwJiasA/iRKlXun5vYZxdo6lUG8tUYoJgCSFvZ3zZYYHE2irQYYo2DEBkDzwHGgzEOHLl8KUSeceP1H+YgJgBDqh9BQNIYdQxtTQzywZENKJnQVM14/YrPIkfTECHfk0KHTKFXoH12mLr2+2LTYA/Cy2NdBkj4HrlDoa4oXQD1oEXXilenHbpzT4UPS3EDMEYpFWaykG5iRiFZejc3Izch9iDljHPRdA2Z7+CInBZkldCfryAGOC/WvwClMdRHzuS9+xPGNgbOihTx5nPDwmPSsgf/eBl0/3J4nNhMJ58Rxn+qcWm4OS3Hlxvk9SfxRFURRFURRFURRFUX4NH6D9eWUSMFMJAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAARlJREFUeAHt2sGNwjAQheHn1d53S2BL2AqgA1qADugAOoAOSAtUAFQALVABdBDG4oK4gDHgJPN/0ggORglPmdhRLAEAAAC4p67ridWxbq6lEoWUwfEIar7/EML+0cFf6p6flMFdDCAJAcg5ApBzBCDnCEDOEYCcIwA5RwByjgDkHAHIOQKQcwQg5whAzrkP4Ft5ZlYblfNnNbXq6RNy38S+g53H4Oa8+im/z2mBkzogpwVGlnZ8DX1QOb9Wc2XICSAevFLLtXkWqKwWymzF3FmglCqEMI5frA1X9rHWk9p6BVxvgXF5BcTNWltd/nyxm2BJPaudXoBnAaXZqNliSyStS5L2CUbWe0Nd1gBNtLLZoRMrVAAAAODNztcA6o+RBpmkAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhFJREFUeAHt2YFRwjAUANBfJ2CEOgE4gTCBbCBOIE5AmUA3wA3UCcAJ0AnoBrrB9/9rvPPoT0nStFfDf3e53KXAb35/UwgASimllFJKKaWUOjcZBELEKXXcxtQm1HLoT2naK7X3LMs+oC88cWpbHJY9tVsI4FwBFCCnbgPVVR+qktqMKqJ0fYNTAmjyC+oeqY3AzTe1Z9PHsPSMvaYkPEEMNPkC/QWVY8M5zNFfAW3RhywxzA1EhNW6E+LkhcgagubU7cG99P7iVfkO4twCHJ/Xngn44/hXTWtCUwIO0O+jrSs7SsDMdvBCGsRq0cshDXz7TG0HxQqgN3Dph5TcUFmroFYBNHmeeEqTZ9YqkG6Ba0jTWBqUEjCHNE2lQSkBIY+9/0C8rWuLIH97gETRQlib7wWcOU2AMFZCmkppUEpAf7sr/SqlQSkBO0jTThqUEvAJaXqTBm2/BbYw7K0vXyU9AS+lA7anwBq6xb/TectqYfoSulWAL+xu5/dAbXQUKzfjncSDEOakvjAu/ry8x3hoi/fL+kXIbCM9QFyFbXvKjMfZyXWI54wyuMI4TpYivWaE8apgBbFgtTvc9sSc9hkwbAv82D3Ehu0WKq+rgeFVx3+RdbuhQwEWJpALrpqgq+GZhOD/BoNRwAlPDqvH5eFo0nszgRxawKrqNlhPOMd7MTFS3cJTSimllFJKKaWU6sYPmoOPtIp7mO8AAAAASUVORK5CYII=`,
  _ = {
    appid: 1675200,
  },
  _ = {
    appid: 1696780,
  },
  _ = {
    appid: 377490,
  },
  _ = {
    packageid: 354231,
  },
  _ = {
    appid: 4165870,
  },
  _ = {
    appid: 4165910,
  },
  _ = {
    appid: 4165890,
  },
  _ =
    `AT.AU.BE.BG.CY.CZ.DE.DK.EE.ES.FI.FR.GB.GR.HR.HU.IE.IT.LT.LU.LV.MT.NL.PL.PT.RO.SE.SI.SK.US.CA`.split(
      `.`,
    ),
  _ = [`JP`, `TW`, `HK`, `KR`];
function _(_) {
  return _.includes(_) || _.includes(_);
}
function _() {
  let { data: _ } = _(_);
  return !!_ || _.includes(_.country_code);
}
function _() {
  let _ = _();
  return (0, _.jsxs)(_, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          children: _(`#Menu_Section_Hardware`),
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `a-idH5FvWmE-`,
        }),
      (0, _.jsxs)(_, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      }),
    ],
  });
}
function _() {
  return (_(_), _(_), _(_), _(_), _(_), _(_), _(_), _(), null);
}
function _() {
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = [
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamDeck`),
      },
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamController`),
      },
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamMachine`),
      },
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamFrame`),
      },
      {
        storeItem: _,
      },
    ]
      .filter(({ storeItem: _ }) => _ && _.visible)
      .slice(0, 4);
  return (0, _.jsx)(_, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          ..._,
        },
        _.image,
      ),
    ),
  });
}
function _(_) {
  let { storeItem: _, image: _, icon: _, name: _ = _.name } = _;
  return (0, _.jsxs)(_, {
    className: _,
    storeItem: _,
    children: [
      _ &&
        (0, _.jsx)(`img`, {
          className: `xaLlWTq14MU-`,
          src: _,
          alt: _,
        }),
      _ &&
        (0, _.jsx)(`img`, {
          className: `ul7-oxiMBzo-`,
          src: _,
          alt: _,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      }),
    ],
  });
}
function _() {
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          storeItem: _,
          name: _(`#Menu_Section_Hardware_Family`),
        }),
      _ &&
        (0, _.jsx)(_, {
          storeItem: _,
        }),
      (0, _.jsx)(_, {
        storeItem: _,
        name: _(`#Menu_Section_Hardware_ValveIndex`),
      }),
      (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          handle: `greatondeck`,
        }),
      (0, _.jsx)(_, {
        handle: `vr`,
      }),
      (0, _.jsx)(_, {
        handle: `controller`,
      }),
    ],
  });
}
var _ = `-ql7Gy6zpYM-`,
  _ = `XaUglLvq38c-`,
  _ = `hR30rQ7-vWs-`,
  _ = `_4IEzXSK-SRw-`,
  _ = `EBHTztRtXvI-`,
  _ = `EeXIvUouJ-A-`,
  _ = `pLRN5w2yzas-`,
  _ = `AlN4Tc-zfOE-`;
function _(_) {
  let { data: _ } = _(_),
    _ = _(_),
    _ = _(),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: !1,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: !1,
    }),
    _ = _ && `appid` in _ ? _.appid : void 0,
    _ = _ && _ ? _.has(_) : _?.ignored,
    _ = _ && _ ? _.has(_) : _?.on_wishlist;
  if (_) return `in_cart`;
  if (_?.excluded_content_descriptorids?.length)
    return `excluded_by_preferences`;
  if (_) return `ignored`;
  if (_?.already_owned) return `in_library`;
  if (_) return `on_wishlist`;
}
function _(_) {
  switch (_) {
    case `in_cart`:
      return _(`#ItemFlag_InCart`);
    case `excluded_by_preferences`:
      return _(`#ItemFlag_ExcludedByPreferences`);
    case `ignored`:
      return _(`#ItemFlag_Ignored`);
    case `in_library`:
      return _(`#ItemFlag_InLibrary`);
    case `on_wishlist`:
      return _(`#ItemFlag_OnWishlist`);
  }
}
function _(_) {
  let { itemid: _, children: _, collapse: _ } = _,
    _ = _(_),
    _;
  switch (_) {
    case `in_cart`:
      _ = (0, _.jsx)(_, {});
      break;
    case `excluded_by_preferences`:
      _ = (0, _.jsx)(_, {});
      break;
    case `ignored`:
      _ = (0, _.jsx)(_, {});
      break;
    case `in_library`:
      _ = (0, _.jsx)(_, {});
      break;
    case `on_wishlist`:
      _ = (0, _.jsx)(_, {});
  }
  if (!_) return _;
  let { className: _, children: _, ..._ } = _.props,
    _ = (0, _.default)(_, _, _ && `-CFYcc7uPls-`);
  return _.cloneElement(
    _,
    {
      ..._,
      className: _,
    },
    _,
    _,
  );
}
function _(_) {
  let { className: _, svg: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _),
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`in_library`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`on_wishlist`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`in_cart`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`ignored`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`excluded_by_preferences`),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 14`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M14 3H1V1H14V3ZM14 6H1V8H14V6ZM14 11H1V13H14V11Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `11`,
    height: `10`,
    viewBox: `0 0 11 10`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M5.31189 0.0504065L6.54671 3.85081H10.5427L7.30988 6.19959L8.5447 10L5.31189 7.65122L2.07907 10L3.31389 6.19959L0.0810761 3.85081H4.07706L5.31189 0.0504065Z`,
      fill: `currentColor`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `11`,
    height: `11`,
    viewBox: `0 0 11 11`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M10.2758 2.45971L9.20028 6.3586C9.14883 6.55507 9.03359 6.72888 8.87266 6.85277C8.71173 6.97665 8.51421 7.04358 8.31112 7.04304H4.50695C4.309 7.04324 4.11631 6.97935 3.95769 6.86093C3.79906 6.74252 3.68303 6.57593 3.62695 6.3861L2.31 2.45971H0.611115V1.23749H2.53C2.72203 1.23785 2.9091 1.2985 3.0648 1.41089C3.2205 1.52328 3.33697 1.68173 3.39778 1.86388L3.59945 2.47499L10.2758 2.45971ZM4.58334 8.26527C4.43225 8.26527 4.28456 8.31007 4.15894 8.394C4.03332 8.47794 3.93541 8.59724 3.8776 8.73683C3.81978 8.87641 3.80465 9.03 3.83413 9.17818C3.8636 9.32636 3.93635 9.46247 4.04319 9.5693C4.15002 9.67614 4.28613 9.74889 4.43431 9.77837C4.58249 9.80784 4.73608 9.79271 4.87566 9.7349C5.01525 9.67708 5.13455 9.57917 5.21849 9.45355C5.30242 9.32793 5.34723 9.18024 5.34723 9.02915C5.34723 8.82656 5.26675 8.63226 5.12349 8.489C4.98023 8.34575 4.78593 8.26527 4.58334 8.26527ZM8.25 8.26527C8.09892 8.26527 7.95123 8.31007 7.82561 8.394C7.69999 8.47794 7.60208 8.59724 7.54426 8.73683C7.48645 8.87641 7.47132 9.03 7.50079 9.17818C7.53027 9.32636 7.60302 9.46247 7.70985 9.5693C7.81668 9.67614 7.9528 9.74889 8.10098 9.77837C8.24916 9.80784 8.40275 9.79271 8.54233 9.7349C8.68191 9.67708 8.80122 9.57917 8.88515 9.45355C8.96909 9.32793 9.01389 9.18024 9.01389 9.02915C9.01389 8.82656 8.93341 8.63226 8.79016 8.489C8.6469 8.34575 8.4526 8.26527 8.25 8.26527Z`,
      fill: `currentColor`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `11`,
    height: `10`,
    viewBox: `0 0 11 10`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M5 10C4.30833 10 3.65833 9.86875 3.05 9.60625C2.44167 9.34375 1.9125 8.9875 1.4625 8.5375C1.0125 8.0875 0.65625 7.55833 0.39375 6.95C0.13125 6.34167 0 5.69167 0 5C0 4.30833 0.13125 3.65833 0.39375 3.05C0.65625 2.44167 1.0125 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.65625 3.05 0.39375C3.65833 0.13125 4.30833 0 5 0C5.69167 0 6.34167 0.13125 6.95 0.39375C7.55833 0.65625 8.0875 1.0125 8.5375 1.4625C8.9875 1.9125 9.34375 2.44167 9.60625 3.05C9.86875 3.65833 10 4.30833 10 5C10 5.69167 9.86875 6.34167 9.60625 6.95C9.34375 7.55833 8.9875 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34375 6.95 9.60625C6.34167 9.86875 5.69167 10 5 10ZM5 9C6.11667 9 7.0625 8.6125 7.8375 7.8375C8.6125 7.0625 9 6.11667 9 5C9 3.88333 8.6125 2.9375 7.8375 2.1625C7.0625 1.3875 6.11667 1 5 1C3.88333 1 2.9375 1.3875 2.1625 2.1625C1.3875 2.9375 1 3.88333 1 5C1 6.11667 1.3875 7.0625 2.1625 7.8375C2.9375 8.6125 3.88333 9 5 9Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M7.5 5.75H2.5V4.25H7.5V5.75Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `11`,
    height: `10`,
    viewBox: `0 0 11 10`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M5 10C4.30833 10 3.65833 9.86875 3.05 9.60625C2.44167 9.34375 1.9125 8.9875 1.4625 8.5375C1.0125 8.0875 0.65625 7.55833 0.39375 6.95C0.13125 6.34167 0 5.69167 0 5C0 4.30833 0.13125 3.65833 0.39375 3.05C0.65625 2.44167 1.0125 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.65625 3.05 0.39375C3.65833 0.13125 4.30833 0 5 0C5.69167 0 6.34167 0.13125 6.95 0.39375C7.55833 0.65625 8.0875 1.0125 8.5375 1.4625C8.9875 1.9125 9.34375 2.44167 9.60625 3.05C9.86875 3.65833 10 4.30833 10 5C10 5.69167 9.86875 6.34167 9.60625 6.95C9.34375 7.55833 8.9875 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34375 6.95 9.60625C6.34167 9.86875 5.69167 10 5 10ZM5 9C6.11667 9 7.0625 8.6125 7.8375 7.8375C8.6125 7.0625 9 6.11667 9 5C9 3.88333 8.6125 2.9375 7.8375 2.1625C7.0625 1.3875 6.11667 1 5 1C3.88333 1 2.9375 1.3875 2.1625 2.1625C1.3875 2.9375 1 3.88333 1 5C1 6.11667 1.3875 7.0625 2.1625 7.8375C2.9375 8.6125 3.88333 9 5 9Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M6.36527 7.42592L2.57407 3.63473L3.63474 2.57407L7.42593 6.36526L6.36527 7.42592Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M3.63473 7.42592L7.42593 3.63473L6.36526 2.57407L2.57407 6.36526L3.63473 7.42592Z`,
        fill: `currentColor`,
      }),
    ],
  });
}

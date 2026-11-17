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

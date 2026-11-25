var _ = {
  attributeDefinitions: [
    {
      _: `float`,
      type: `bucketcontinuous`,
      label: `Wear`,
      min: 0,
      max: 1,
      buckets: [
        {
          label: `Minimal Wear`,
          max: 1,
        },
      ],
    },
    {
      _: `category`,
      type: `multiselect`,
      label: `Category`,
      options: [`StatTrak`, `Souvenir`],
    },
    {
      _: `collection`,
      type: `select`,
      label: `Collection`,
      options: [`Boring Collection`, `Cool Collection`, `Cooler Collection`],
    },
  ],
  hierarchy: {
    _: `type`,
    label: `Item Type`,
    options: [
      {
        _: `rifle`,
        label: `Rifle`,
        attributes: [`float`, `category`],
        options: [
          {
            _: `ak47`,
            label: `AK-47`,
            inheritAttributes: !0,
          },
          {
            _: `aug`,
            label: `AUG`,
            inheritAttributes: !0,
          },
          {
            _: `awp`,
            label: `AWP`,
            inheritAttributes: !0,
          },
          {
            _: `famas`,
            label: `FAMAS`,
            inheritAttributes: !0,
          },
          {
            _: `g3sg1`,
            label: `G3SG1`,
            inheritAttributes: !0,
          },
          {
            _: `galil`,
            label: `Galil AR`,
            inheritAttributes: !0,
          },
          {
            _: `m4a4`,
            label: `M4A4`,
            inheritAttributes: !0,
          },
          {
            _: `scar`,
            label: `SCAR 20`,
            inheritAttributes: !0,
          },
          {
            _: `sg553`,
            label: `SG 553`,
            inheritAttributes: !0,
          },
          {
            _: `ssg`,
            label: `SSG 08`,
            inheritAttributes: !0,
          },
          {
            _: `m4a1s`,
            label: `M4A1-S`,
            inheritAttributes: !0,
          },
        ],
      },
      {
        _: `pistol`,
        label: `Pistol`,
        attributes: [`float`, `category`],
        options: [
          {
            _: `deagle`,
            label: `Desert Eagle`,
            inheritAttributes: !0,
          },
          {
            _: `dualies`,
            label: `Dual Berretas`,
            inheritAttributes: !0,
          },
          {
            _: `fiveseven`,
            label: `Five-SeveN`,
            inheritAttributes: !0,
          },
          {
            _: `glock18`,
            label: `Glock-18`,
            inheritAttributes: !0,
          },
          {
            _: `tec9`,
            label: `Tec-9`,
            inheritAttributes: !0,
          },
          {
            _: `p2000`,
            label: `P2000`,
            inheritAttributes: !0,
          },
          {
            _: `p250`,
            label: `P250`,
            inheritAttributes: !0,
          },
          {
            _: `usps`,
            label: `USP-S`,
            inheritAttributes: !0,
          },
          {
            _: `cz75`,
            label: `CZ75-Auto`,
            inheritAttributes: !0,
          },
          {
            _: `r8`,
            label: `R8 Revolver`,
            inheritAttributes: !0,
          },
        ],
      },
      {
        _: `midtier`,
        label: `Mid-Tier`,
        attributes: [`float`, `category`],
        options: [
          {
            _: `mac10`,
            label: `MAC-10`,
            inheritAttributes: !0,
          },
          {
            _: `mp5sd`,
            label: `MP5-SD`,
            inheritAttributes: !0,
          },
          {
            _: `mp7`,
            label: `MP7`,
            inheritAttributes: !0,
          },
          {
            _: `mp9`,
            label: `MP9`,
            inheritAttributes: !0,
          },
          {
            _: `p90`,
            label: `P90`,
            inheritAttributes: !0,
          },
          {
            _: `bizon`,
            label: `PP-Bizon`,
            inheritAttributes: !0,
          },
          {
            _: `ump45`,
            label: `UMP-45`,
            inheritAttributes: !0,
          },
          {
            _: `mag7`,
            label: `MAG-7`,
            inheritAttributes: !0,
          },
          {
            _: `nova`,
            label: `Nova`,
            inheritAttributes: !0,
          },
          {
            _: `sawedoff`,
            label: `Sawed-Off`,
            inheritAttributes: !0,
          },
          {
            _: `xm1014`,
            label: `XM1014`,
            inheritAttributes: !0,
          },
          {
            _: `mac10`,
            label: `MAC-10`,
            inheritAttributes: !0,
          },
          {
            _: `m249`,
            label: `M249`,
            inheritAttributes: !0,
          },
          {
            _: `negev`,
            label: `Negev`,
            inheritAttributes: !0,
          },
        ],
      },
      {
        _: `knife`,
        label: `Knife`,
        attributes: [`float`, `category`],
        options: [
          {
            _: `bayonet`,
            label: `Bayonet`,
            inheritAttributes: !0,
          },
          {
            _: `butterfly`,
            label: `Butterfly Knife`,
            inheritAttributes: !0,
          },
          {
            _: `classic`,
            label: `Classic Knife`,
            inheritAttributes: !0,
          },
          {
            _: `falchion`,
            label: `Falchion Knife`,
            inheritAttributes: !0,
          },
          {
            _: `flip`,
            label: `Flip Knife`,
            inheritAttributes: !0,
          },
          {
            _: `gut`,
            label: `Gut Knife`,
            inheritAttributes: !0,
          },
          {
            _: `huntsman`,
            label: `Huntsman Knife`,
            inheritAttributes: !0,
          },
          {
            _: `karambit`,
            label: `Karambit`,
            inheritAttributes: !0,
          },
          {
            _: `kukri`,
            label: `Kukri Knife`,
            inheritAttributes: !0,
          },
          {
            _: `m9bayonet`,
            label: `M9 Bayonet`,
            inheritAttributes: !0,
          },
          {
            _: `navaja`,
            label: `Navaja Knife`,
            inheritAttributes: !0,
          },
          {
            _: `nomad`,
            label: `Nomad Knife`,
            inheritAttributes: !0,
          },
          {
            _: `paracord`,
            label: `Paracord Knife`,
            inheritAttributes: !0,
          },
          {
            _: `shadowdaggers`,
            label: `Shadow Daggers`,
            inheritAttributes: !0,
          },
          {
            _: `skeleton`,
            label: `Skeleton Knife`,
            inheritAttributes: !0,
          },
          {
            _: `stiletto`,
            label: `Stiletto Knife`,
            inheritAttributes: !0,
          },
          {
            _: `survival`,
            label: `Survival Knife`,
            inheritAttributes: !0,
          },
          {
            _: `talon`,
            label: `Talon Knife`,
            inheritAttributes: !0,
          },
          {
            _: `ursus`,
            label: `Ursus Knife`,
            inheritAttributes: !0,
          },
        ],
      },
      {
        _: `gloves`,
        label: `Gloves`,
        attributes: [`float`],
        options: [
          {
            _: `gloves_bloodhound`,
            label: `Bloodhound Gloves`,
            inheritAttributes: !0,
          },
          {
            _: `gloves_brokenfang`,
            label: `Broken Fang Gloves`,
            inheritAttributes: !0,
          },
          {
            _: `gloves_driver`,
            label: `Driver Gloves`,
            inheritAttributes: !0,
          },
          {
            _: `gloves_handwraps`,
            label: `Hand Wraps`,
            inheritAttributes: !0,
          },
          {
            _: `gloves_moto`,
            label: `Moto Gloves`,
            inheritAttributes: !0,
          },
          {
            _: `gloves_specialist`,
            label: `Specialist Gloves`,
            inheritAttributes: !0,
          },
          {
            _: `gloves_sport`,
            label: `Sport Gloves`,
            inheritAttributes: !0,
          },
        ],
      },
    ],
  },
};
function _(_) {
  let _,
    _ = {
      attributeDefinitions: {},
    };
  try {
    _ = JSON.parse(_);
  } catch {
    return {
      bSuccess: !1,
      strError: `Invalid JSON syntax`,
    };
  }
  if (((_ = _(_, [`attributeDefinitions`, `hierarchy`])), typeof _ == `string`))
    return {
      bSuccess: !1,
      strError: `Invalid schema root. ` + _,
    };
  if (!Array.isArray(_.attributeDefinitions))
    return {
      bSuccess: !1,
      strError: `Invalid "attributeDefinitions" property`,
    };
  for (let _ of _.attributeDefinitions) {
    let _ = _(_, [`id`, `type`, `label`]);
    if (typeof _ == `string`) {
      let _ = _ && typeof _ == `object` && typeof _._ == `string` ? _._ : null;
      return {
        bSuccess: !1,
        strError: _
          ? `Invalid attribute definition "${_}": ${_}`
          : `Invalid attribute definition: ${_}`,
      };
    }
    if (typeof _._ != `string`)
      return {
        bSuccess: !1,
        strError: `Invalid attribute definition: Non-string ID found.`,
      };
    _.attributeDefinitions[_._] = _;
  }
  let _ = _(_.hierarchy, `root`);
  return typeof _ == `string`
    ? {
        bSuccess: !1,
        strError: _,
      }
    : ((_.hierarchy = _),
      {
        bSuccess: !0,
        schema: _,
      });
}
function _(_, _) {
  let _ = _(_, [`id`, `label`]);
  if (typeof _ == `string`) return `In hierarchy "${_}": ${_}`;
  if (((_ = _ + ` | ` + _._), `options` in _)) {
    if (!Array.isArray(_.options))
      return `Expected "options" in node "${_._}" to be an array`;
    for (let _ of _.options) {
      let _ = _(_, _);
      if (typeof _ == `string`) return `In hierarchy "${_}": ${_}`;
    }
  }
  return _;
}
function _(_, _) {
  if (!_ || typeof _ != `object`) return `Not a valid object`;
  for (let _ of Object.keys(_)) if (!(_ in _)) return `Missing property "${_}"`;
  return _;
}
var _ = _(_(), 1),
  _ = _(),
  _ = _(JSON.stringify(_));
if (!_.bSuccess) throw Error(`Hardcoded CS Schema is invalid: ${_.strError}`);
var _ = _.schema;
function _(_) {
  let [_, _] = (0, _.useState)(_);
  return (0, _.jsxs)(`div`, {
    style: {
      display: `flex`,
    },
    children: [
      (0, _.jsx)(`div`, {
        style: {
          flex: 1,
        },
        children: (0, _.jsx)(_, {
          schema: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        style: {
          flex: 1,
        },
        children: (0, _.jsx)(_, {
          onChange: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { onChange: _ } = _,
    [_, _] = (0, _.useState)(JSON.stringify(_, null, `	`)),
    [_, _] = (0, _.useState)(``);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`textarea`, {
        value: _,
        onChange: (_) => _(_.target.value),
        spellCheck: !1,
        style: {
          boxSizing: `border-box`,
          width: `100%`,
          minHeight: `400px`,
        },
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`button`, {
            onClick: () => {
              if (!_) return;
              let _ = _(_);
              _.bSuccess ? (_(_.schema), _(``)) : _(_.strError);
            },
            children: `Update`,
          }),
          (0, _.jsx)(`button`, {
            onClick: () => {
              _(_);
            },
            children: `Reset`,
          }),
          (0, _.jsx)(`p`, {
            style: {
              color: `red`,
              fontSize: `12px`,
            },
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { schema: _ } = _,
    [_, _] = (0, _.useState)({
      hierarchy: [],
      attributes: {},
    }),
    { rgHierarchy: _, rgAttributes: _ } = _(_, _, _),
    _ = _.map(({ item: _, selected: _ }, _) =>
      (0, _.jsx)(
        _,
        {
          onSelect: (_) =>
            _({
              ..._,
              hierarchy: _.hierarchy.slice(0, _).concat(_),
            }),
          level: _,
          selectedValue: _,
        },
        _._,
      ),
    );
  return (0, _.jsxs)(`div`, {
    children: [
      _,
      _.map((_) => {
        let _ = _.attributeDefinitions[_];
        return _
          ? (0, _.jsx)(
              _,
              {
                definition: _,
                value: _.attributes[_],
                onChange: (_) =>
                  _({
                    ..._,
                    attributes: {
                      ..._.attributes,
                      [_]: _,
                    },
                  }),
              },
              _,
            )
          : null;
      }),
    ],
  });
}
function _(_, _, _) {
  let _ = [],
    _ = [],
    _ = _.hierarchy;
  for (let _ = 0; _ < _.hierarchy.length + 1; _++) {
    let _ = _.hierarchy[_];
    _ &&
      _.options &&
      (_.push({
        item: _,
        selected: _,
      }),
      (_ = _.options.find(({ _: _ }) => _ === _)));
  }
  for (let _ = _.length - 1; _ >= 0; _--) {
    let _ = _[_].item;
    if ((_.attributes && _.unshift(..._.attributes), !_.inheritAttributes))
      break;
  }
  return {
    rgHierarchy: _,
    rgAttributes: _,
  };
}
function _(_) {
  let { selectedValue: _, level: _, onSelect: _ } = _;
  return _.options
    ? (0, _.jsx)(`div`, {
        style: {
          display: `flex`,
          flexDirection: `row`,
          padding: `12px`,
          gap: `12px`,
        },
        children: _.options.map((_) =>
          (0, _.jsx)(
            `button`,
            {
              style: {
                backgroundColor: _._ === _ ? `red` : void 0,
              },
              onClick: () => _(_._),
              children: _.label,
            },
            _._,
          ),
        ),
      })
    : (console.error(
        `Cannot render hierarchy selector for a leaf node in the hierarchy`,
      ),
      null);
}
function _(_) {
  switch (_.definition.type) {
    case `select`:
      return (0, _.jsx)(_, {
        ..._,
      });
    case `bucketcontinuous`:
      return (0, _.jsx)(_, {
        ..._,
      });
    case `multiselect`:
      return (0, _.jsx)(_, {
        ..._,
      });
    default: {
      let _ = _.definition;
      return (console.error(`Unhandled attribute type! ${_}`), null);
    }
  }
}
function _(_) {
  let {
    definition: { min: _, max: _, buckets: _, label: _, _: _ },
    value: _,
    onChange: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`label`, {
        htmlFor: `bc_${_}`,
        children: _,
      }),
      (0, _.jsx)(`input`, {
        _: `bc_${_}`,
        type: `range`,
        min: _,
        max: _,
        step: 0.01,
        value: _,
        onChange: (_) => _(_.target.valueAsNumber),
      }),
    ],
  });
}
function _(_) {
  let {
    definition: { display: _ = `dropdown` },
  } = _;
  switch (_) {
    case `radio`:
      return (0, _.jsx)(_, {
        ..._,
      });
    default:
      return (
        _ !== `dropdown` &&
          console.error(`Unknown display type "${_}" for "select" attribute`),
        (0, _.jsx)(_, {
          ..._,
        })
      );
  }
}
function _(_) {
  let {
    definition: { options: _ },
    value: _,
    onChange: _,
  } = _;
  return (0, _.jsx)(`fieldset`, {
    children: _.map((_) =>
      (0, _.jsxs)(
        `div`,
        {
          children: [
            (0, _.jsx)(`label`, {
              htmlFor: `${_}_option`,
              children: _,
            }),
            (0, _.jsx)(`input`, {
              type: `radio`,
              value: _,
              _: `${_}_option`,
              name: _,
              checked: _ === _,
              onChange: (_) => _(_ === _ ? void 0 : _),
            }),
          ],
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let {
    definition: { options: _ },
    value: _,
    onChange: _,
  } = _;
  return (0, _.jsx)(`div`, {
    children: (0, _.jsx)(`select`, {
      onChange: (_) => _(_[_.target.selectedIndex]),
      value: _,
      children: _.map((_) =>
        (0, _.jsx)(
          `option`,
          {
            value: _,
            selected: _ === _,
            children: _,
          },
          _,
        ),
      ),
    }),
  });
}
function _(_) {
  let {
    definition: { display: _ = `check` },
  } = _;
  return (
    _ !== `check` && console.error(`Unknown display type "${_}"`),
    (0, _.jsx)(_, {
      ..._,
    })
  );
}
function _(_) {
  let {
    definition: { options: _ },
    value: _ = {},
    onChange: _,
  } = _;
  return (0, _.jsx)(`div`, {
    children: _.map((_) =>
      (0, _.jsxs)(
        `div`,
        {
          children: [
            (0, _.jsx)(`label`, {
              htmlFor: _,
              children: _,
            }),
            (0, _.jsx)(`input`, {
              _: `checkbox_${_}`,
              type: `checkbox`,
              checked: _[_],
              onChange: () =>
                _({
                  ..._,
                  option: !_[_],
                }),
            }),
          ],
        },
        _,
      ),
    ),
  });
}
var _ = _({
  Component: _,
});
function _(_) {
  return (0, _.jsx)(_, {});
}
export { _ as route };

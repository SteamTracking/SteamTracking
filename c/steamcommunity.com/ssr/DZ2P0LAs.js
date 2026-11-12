var _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
  });
function _(_) {
  let _ = _.useLoaderData(),
    _ = (_) => {
      let _ = window.location.href.replace(window.location.search, ``);
      _(_ + `?weapon=${_}`);
    },
    _ = () => {
      let _ = new URLSearchParams(window.location.search);
      _.set(`count`, (_.pageCount + 1).toString());
      let _ = window.location.href.replace(window.location.search, ``);
      _(_ + `?` + _.toString());
    },
    [_, _] = (0, _.useState)(200);
  return (0, _.jsxs)(_, {
    paddingX: `3`,
    children: [
      (0, _.jsx)(_, {
        direction: `column`,
        gap: `3`,
        marginY: `3`,
        children: _.map(({ type: _, options: _ }) =>
          (0, _.jsxs)(
            _,
            {
              align: `center`,
              wrap: `wrap`,
              gap: `3`,
              children: [
                (0, _.jsxs)(_, {
                  weight: `medium`,
                  children: [_, `:`],
                }),
                _.map(({ tag: _ }) =>
                  (0, _.jsx)(
                    _,
                    {
                      onClick: () => _(_),
                      color: _ === _.selectedWeapon ? `accent` : `dull`,
                      children: _,
                    },
                    _,
                  ),
                ),
              ],
            },
            _,
          ),
        ),
      }),
      (0, _.jsxs)(_, {
        gap: `3`,
        align: `center`,
        children: [
          (0, _.jsxs)(_, {
            _: `div`,
            marginY: `5`,
            children: [`Showing `, _.results.length, ` results`],
          }),
          _.bHasMore &&
            (0, _.jsx)(_, {
              onClick: _,
              children: `Load More`,
            }),
        ],
      }),
      (0, _.jsxs)(_, {
        gap: `3`,
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            children: `Image Size:`,
          }),
          (0, _.jsx)(_, {
            maxWidth: `300px`,
            flexGrow: `1`,
            children: (0, _.jsx)(_, {
              min: 20,
              max: 2e3,
              value: _,
              onValueChange: _,
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        wrap: `wrap`,
        gap: `3`,
        marginY: `5`,
        children: _.results.map(({ name: _, image: _ }) =>
          (0, _.jsx)(
            `img`,
            {
              title: _,
              alt: _,
              src: _,
              style: {
                height: `${_}px`,
              },
            },
            _,
          ),
        ),
      }),
    ],
  });
}
var _ = [
  {
    type: `rifle`,
    options: [
      {
        facet: `Weapon`,
        tag: `aug`,
      },
      {
        facet: `Weapon`,
        tag: `ak47`,
      },
      {
        facet: `Weapon`,
        tag: `sg556`,
      },
      {
        facet: `Weapon`,
        tag: `m4a1_silencer`,
      },
      {
        facet: `Weapon`,
        tag: `galilar`,
      },
      {
        facet: `Weapon`,
        tag: `famas`,
      },
      {
        facet: `Weapon`,
        tag: `m4a1`,
      },
    ],
  },
  {
    type: `smg`,
    options: [
      {
        facet: `Weapon`,
        tag: `bizon`,
      },
      {
        facet: `Weapon`,
        tag: `mac10`,
      },
      {
        facet: `Weapon`,
        tag: `mp7`,
      },
      {
        facet: `Weapon`,
        tag: `ump45`,
      },
      {
        facet: `Weapon`,
        tag: `mp9`,
      },
      {
        facet: `Weapon`,
        tag: `mp5sd`,
      },
      {
        facet: `Weapon`,
        tag: `p90`,
      },
    ],
  },
  {
    type: `pistol`,
    options: [
      {
        facet: `Weapon`,
        tag: `p250`,
      },
      {
        facet: `Weapon`,
        tag: `tec9`,
      },
      {
        facet: `Weapon`,
        tag: `fiveseven`,
      },
      {
        facet: `Weapon`,
        tag: `revolver`,
      },
      {
        facet: `Weapon`,
        tag: `deagle`,
      },
      {
        facet: `Weapon`,
        tag: `glock`,
      },
      {
        facet: `Weapon`,
        tag: `usp_silencer`,
      },
      {
        facet: `Weapon`,
        tag: `elite`,
      },
      {
        facet: `Weapon`,
        tag: `hkp2000`,
      },
      {
        facet: `Weapon`,
        tag: `cz75a`,
      },
    ],
  },
  {
    type: `sniper`,
    options: [
      {
        facet: `Weapon`,
        tag: `ssg08`,
      },
      {
        facet: `Weapon`,
        tag: `scar20`,
      },
      {
        facet: `Weapon`,
        tag: `g3sg1`,
      },
      {
        facet: `Weapon`,
        tag: `awp`,
      },
    ],
  },
  {
    type: `shotgun`,
    options: [
      {
        facet: `Weapon`,
        tag: `mag7`,
      },
      {
        facet: `Weapon`,
        tag: `nova`,
      },
      {
        facet: `Weapon`,
        tag: `sawedoff`,
      },
      {
        facet: `Weapon`,
        tag: `xm1014`,
      },
    ],
  },
  {
    type: `MG`,
    options: [
      {
        facet: `Weapon`,
        tag: `negev`,
      },
      {
        facet: `Weapon`,
        tag: `m249`,
      },
    ],
  },
  {
    type: `knife`,
    options: [
      {
        facet: `Weapon`,
        tag: `knife_push`,
      },
      {
        facet: `Weapon`,
        tag: `knife_survival_bowie`,
      },
      {
        facet: `Weapon`,
        tag: `knife_gypsy_jackknife`,
      },
      {
        facet: `Weapon`,
        tag: `knife_falchion`,
      },
      {
        facet: `Weapon`,
        tag: `knife_tactical`,
      },
      {
        facet: `Weapon`,
        tag: `knife_gut`,
      },
      {
        facet: `Weapon`,
        tag: `knife_kukri`,
      },
      {
        facet: `Weapon`,
        tag: `knife_canis`,
      },
      {
        facet: `Weapon`,
        tag: `knife_cord`,
      },
      {
        facet: `Weapon`,
        tag: `knife_ursus`,
      },
      {
        facet: `Weapon`,
        tag: `knife_flip`,
      },
      {
        facet: `Weapon`,
        tag: `knife_outdoor`,
      },
      {
        facet: `Weapon`,
        tag: `knife_css`,
      },
      {
        facet: `Weapon`,
        tag: `knife_skeleton`,
      },
      {
        facet: `Weapon`,
        tag: `knife_stiletto`,
      },
      {
        facet: `Weapon`,
        tag: `knife_widowmaker`,
      },
      {
        facet: `Weapon`,
        tag: `knife_butterfly`,
      },
      {
        facet: `Weapon`,
        tag: `knife_m9_bayonet`,
      },
      {
        facet: `Weapon`,
        tag: `knife_karambit`,
      },
      {
        facet: `Weapon`,
        tag: `bayonet`,
      },
    ],
  },
];
_.forEach(({ options: _ }) =>
  _.sort((_, _) => Intl.Collator().compare(_.tag, _.tag)),
);
export { _ as route };

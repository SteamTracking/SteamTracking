import { _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./dialogs.js";
import { _, _ } from "./storebrowsequerycontext.js";
import { _, _ } from "./dashboardutilities.js";
var _ = _(_());
function _(_, _) {
  if (_?.asset_url_format && typeof _[_] == `string`)
    return (
      _.BASE_URL_SHARED_CDN +
      `/store_item_assets/` +
      _.asset_url_format.replace("${FILENAME}", _[_])
    );
}
var _ = `IcywFuw-MuY-`,
  _ = `FyNxcXufxdo-`,
  _ = `QZi0FlpWjiY-`,
  _ = `Dwv4HDFQ9yI-`,
  _ = `CzD1zSZJkoM-`,
  _ = `z9z8gYERdpw-`,
  _ = `yoS9JS7gc5M-`,
  _ = `RaoE2AG7Kd0-`,
  _ = `npCO2EsQTqg-`,
  _ = `-qzow3moiJU-`,
  _ = `_9-r47MFrlOU-`,
  _ = `EWAV3iEkmAQ-`,
  _ = `OHjadihoFPE-`,
  _ = _(),
  _ = _.forwardRef((_, _) => {
    let {
      title: _,
      count: _,
      description: _,
      children: _,
      headerElement: _,
    } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      ref: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _,
                _ != null &&
                  (0, _.jsx)(`span`, {
                    className: `Gxhxft3PnpI-`,
                    children: _,
                  }),
              ],
            }),
            _,
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `OEFI4e27p2Q-`,
            children: _,
          }),
        _,
      ],
    });
  });
function _(_) {
  let _ = _.useMemo(() => _(), []);
  return (0, _.jsx)(_, {
    title: _(`#Dashboard_RecentApps_Title`),
    headerElement: (0, _.jsx)(_, {}),
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        !_.length && (0, _.jsx)(_, {}),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              app: _,
            },
            _.appid,
          ),
        ),
      ],
    }),
  });
}
function _(_) {
  let _ = _.PARTNER_BASE_URL + `apps/`;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _(`#Dashboard_RecentApps_NoRecent`),
      ` `,
      (0, _.jsxs)(`a`, {
        href: _,
        target: `_blank`,
        children: [` `, _(`#Dashboard_RecentApps_ViewAll`)],
      }),
    ],
  });
}
function _(_) {
  let _ = _.PARTNER_BASE_URL + `apps/`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`a`, {
        href: _,
        children: _(`#Dashboard_RecentApps_ViewAllShort`),
      }),
    }),
  });
}
function _(_) {
  let { app: _ } = _,
    _ = _.appid,
    { data: _ } = _({
      appid: _,
    }),
    _ = _.PARTNER_BASE_URL + `apps/landing/` + _,
    _ = _(_, `header`);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          toolTipContent: _.name,
          children: (0, _.jsx)(`div`, {
            className: `xWzcwMJs-2U-`,
            children: (0, _.jsx)(`a`, {
              href: _,
              target: `_blank`,
              children: (0, _.jsx)(`img`, {
                src: _,
              }),
            }),
          }),
        }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `eYEdaax9aY8-`,
          children: (0, _.jsx)(`a`, {
            href: _,
            target: `_blank`,
            children: _.name,
          }),
        }),
      (0, _.jsx)(_, {
        app: _,
      }),
    ],
  });
}
function _(_) {
  let { app: _ } = _,
    _ = _.appid,
    { data: _ } = _({
      appid: _,
    });
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        appType: _.type,
      }),
      (0, _.jsx)(_, {
        releaseState: _.releasestate,
        hasStoreItem: _?.visible,
      }),
    ],
  });
}
function _(_) {
  let { appType: _ } = _,
    _ = null,
    _ = null;
  return (
    _ == `Game`
      ? (_ = _(`#Dashboard_RecentApps_Game`))
      : _ == `DLC`
        ? ((_ = _(`#Dashboard_RecentApps_DLC`)), (_ = _))
        : _ == `Beta`
          ? ((_ = _(`#Dashboard_RecentApps_Playtest`)), (_ = _))
          : _ == `Demo`
            ? ((_ = _(`#Dashboard_RecentApps_Demo`)), (_ = _))
            : _ == `Music` && ((_ = _(`#Dashboard_RecentApps_Music`)), (_ = _)),
    !!_ &&
      (0, _.jsx)(`div`, {
        className: _(`HhP0AqYyACA-`, _),
        children: _,
      })
  );
}
function _(_) {
  let { releaseState: _, hasStoreItem: _ } = _,
    _ = _(_, _);
  return (
    _ != `released` &&
    (0, _.jsx)(`div`, {
      className: _(`_7hIsoSqJWdo-`),
      children: _.sText,
    })
  );
}
function _() {
  let _ = _(`rgRecentApps`, `application_config`),
    _ = _ ? Object.keys(_).map((_) => _[_]) : [],
    _ = _(`rgRecentUnreleasedApps`, `application_config`),
    _ = _ ? Object.keys(_).map((_) => _[_]) : [],
    _ = _(_, _);
  return (_.sort((_, _) => _.nOrder - _.nOrder), _);
}

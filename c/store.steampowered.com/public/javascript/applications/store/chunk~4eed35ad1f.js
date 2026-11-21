import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~f57d770d64.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `GL0tHV4bOk8-`,
  _ = `LPcYz6LIoNo-`,
  _ = `IPcip0GPG-I-`,
  _ = `GCeo-xmfx1A-`,
  _ = _(),
  _ = 6,
  _ = 1e3,
  _ = (function (_) {
    return (
      (_[(_.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (_[(_.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (_[(_.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      _
    );
  })({});
function _(_) {
  let { _: _, active: _, bIsHoverMode: _, eGrowOnActivate: _ } = _,
    { data: _ } = _(_),
    _ = _.useRef(0),
    _ = _.useRef(null);
  _.useLayoutEffect(() => {
    _ && _.current && (_.current.currentTime = _.current);
  }, [_]);
  let _ = (_) => {
      _.current = _.currentTarget.currentTime;
    },
    _ = _(_),
    _ = _ && !_ ? _ : void 0,
    _ = _(_),
    _ = _(_, !0);
  if ((_ && _.IN_MOBILE) || !_ || !_ || !_.visible) return null;
  if (_)
    return (0, _.jsx)(_, {
      _: _,
    });
  if (!_) return null;
  let _ = _.filter(_);
  if (_.length === 0)
    return _?.some(_)
      ? (0, _.jsx)(_, {
          _: _,
        })
      : _ && _.related_items?.parent_appid && (_.type == 1 || _.type == 12)
        ? (0, _.jsx)(_, {
            ..._,
            _: {
              appid: _.related_items.parent_appid,
            },
          })
        : null;
  let _;
  switch (_) {
    case 1:
      _ = _;
      break;
    case 2:
      _ = _;
  }
  let _ = _[0];
  return (0, _.jsx)(`video`, {
    className: (0, _.default)(_, _),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: _,
    playsInline: !0,
    onTimeUpdate: _,
    children: (0, _.jsx)(_, {
      trailer: _,
    }),
  });
}
function _(_) {
  return !!_.microtrailer && _.microtrailer.length > 0;
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    [_, _] = _.useState(0),
    _ = _.useMemo(
      () =>
        [...(_?.all_ages_screenshots || [])]
          .sort((_, _) => _.ordinal - _.ordinal)
          .slice(0, _),
      [_],
    );
  return (
    _(() => {
      _.length > 0 && _((_) => (_ + 1) % _.length);
    }, _),
    _.length == 0
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_, _) =>
            (0, _.jsx)(
              `img`,
              {
                className: (0, _.default)(_, _ == _ && `_8Ek7qtVBxvk-`),
                src: _(_, `600x338`),
                alt: ``,
              },
              _.filename,
            ),
          ),
        })
  );
}
function _(_) {
  let { trailer: _ } = _;
  return !_ || !_.microtrailer
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.microtrailer?.map((_) =>
          _.IN_CLIENT && _.type == `video/mp4`
            ? null
            : (0, _.jsx)(
                `source`,
                {
                  src: _(_, _.filename || ``),
                  type: _.type,
                },
                _.filename,
              ),
        ),
      });
}
function _(_, _, _) {
  let _ = _(),
    _ = _.accountid;
  return _({
    mutationKey: [`useUpdateWishlist`, _, _, _],
    mutationFn: async () => {
      if (_ == null) return;
      let _ =
          _.STORE_BASE_URL +
          `api/` +
          (_ ? `addtowishlist` : `removefromwishlist`),
        _ = new FormData();
      (_.append(`appid`, `` + _),
        _.append(`sessionid`, _()),
        _ && _.append(`snr`, _));
      let _ = await fetch(_, {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      if (!_._)
        throw Error(
          `Wishlist ${_ ? `add` : `remove`} of appid ${_} failed (${_.status})`,
        );
    },
    onMutate: () => {
      _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
    },
    onError: () => {
      _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
    },
    onSuccess: () => {
      _();
    },
  });
}
var _ = _.createContext(!1),
  _ = `100% 0px 100% 0px`,
  _ = `SaleSection_`,
  _ = (0, _.createContext)(!1);
function _() {
  return window.innerWidth ?? 1920;
}
function _() {
  return _() >= 940;
}
function _() {
  _();
  let [_, _] = (0, _.useState)(() => _());
  return (
    (0, _.useEffect)(() => {
      let _ = () => {
        _(_());
      };
      return (
        _(),
        window.addEventListener(`resize`, _),
        () => window.removeEventListener(`resize`, _)
      );
    }, []),
    _
  );
}
function _(_ = 940) {
  return _() >= _;
}
function _(_) {
  let _ = _(),
    _ = _ >= ((0, _.useContext)(_) ? 911 : 940),
    _ = _(_);
  return _
    ? {
        nMaxCapsulesPerRow: _.nMaxItemsPerRow,
        bScreenIsWide: _,
      }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(_ / _.nItemMinimumWidth), 1),
          _.nMaxItemsPerRow,
        ),
        bScreenIsWide: _,
      };
}
function _(_) {
  let _ = _(_);
  return _()
    ? _.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / _.nItemMinimumWidth), 1),
        _.nMaxItemsPerRow,
      );
}
var _ = `ewL7epZsubk-`,
  _ = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function _(_, _ = `Y`) {
  let [_, _] = _.useState(!1),
    _ = _.useCallback((_) => _(_ && !!_), [_]),
    _ = _.useCallback(
      () => (!_ || _.length === 0 ? !1 : ((window.location.href = _), !0)),
      [_],
    );
  return {
    bShowSeeMoreHint: _,
    panelProps:
      _ == `X`
        ? {
            onFocusWithin: _,
            onSecondaryButton: _,
          }
        : {
            onFocusWithin: _,
            onOptionsButton: _,
          },
  };
}
function _(_) {
  let { label: _, shown: _, button: _ = `Y` } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `lDd-amB-eCU-`),
    children: [
      _ == `X`
        ? (0, _.jsx)(_, {
            button: `X`,
            "aria-label": `X`,
          })
        : (0, _.jsx)(`img`, {
            src: _,
            alt: `Y`,
          }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
function _(_, _, _, _ = 0) {
  let _ = _(),
    _ = _.accountid;
  return _({
    mutationKey: [`useUpdateAppIgnore`, _, _, _],
    mutationFn: async () => {
      if (_ == null) return;
      let _ = _.STORE_BASE_URL + `recommended/ignorerecommendation`,
        _ = new FormData();
      (_.append(`appid`, `` + _),
        _.append(`sessionid`, _()),
        _.append(`remove`, _ ? `0` : `1`),
        _ && _.append(`snr`, _),
        _.append(`ignore_reason`, `` + _));
      let _ = await fetch(_, {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      if (!_._)
        throw Error(
          `Ignore App ${_ ? `add` : `remove`} of appid ${_} failed (${_.status})`,
        );
    },
    onMutate: () => {
      _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
    },
    onError: () => {
      _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
    },
    onSuccess: () => {
      _();
    },
  });
}

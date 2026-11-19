import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
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
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
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
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { _ } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { _, _ } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { _, _, _ } from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
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
  _,
} from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _, _, _, _, _ } from "./chunk~25756a3d72.js?contenthash=CyqjpKof";
import { _ } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { _ } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { _, _, _ } from "./library.js?contenthash=CVZWwsCP";
import { _ } from "./chunk~103fa94b69.js?contenthash=BAq6YOYj";
import { _, _, _ } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import { _ } from "./chunk~726542bc75.js?contenthash=CwUW-8V9";
import { _ } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { _ } from "./chunk~a7c5e71e12.js?contenthash=DtWBhhpP";
import { _ } from "./chunk~92931c6310.js?contenthash=C5UJ3B2Y";
import { _ } from "./chunk~7b4b9eb713.js?contenthash=B8m-xg-T";
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
} from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var _ = `rs5MCL6BI2A-`,
  _ = `iRWZX4LtE-Q-`,
  _ = `_5yccD-xlOTc-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let { name: _, trailerCategory: _, trailerDisplay: _, mouseOver: _ } = _,
    [_, _] = _.useState(!1);
  if (
    (_.useEffect(() => {
      _ != 0 && _(!0);
    }, [_]),
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      }
      if (!_) return;
      let _ = setTimeout(() => _(!1), 3e3);
      return () => clearTimeout(_);
    }, [_, _]),
    _ == null || _ == 0)
  )
    return;
  let _ = _ == 1 ? _.Localize(`#StoreTrailer_Title_TrailerPreview`) : _(_);
  return (0, _.jsx)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
    }),
    children: _.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
      _,
    ),
  });
}
var _ = _(_()),
  _ = `tYEw8zCMszM-`,
  _ = `NCpHzW0zAz4-`,
  _ = `_8LSrWZvsPDA-`,
  _ = `bUpZq7n9J9M-`,
  _ = `qXndu6aUanY-`;
function _(_) {
  let {
    className: _,
    showPriorAsActive: _,
    count: _,
    selectedIndex: _,
    fnNavigate: _,
  } = _;
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    className: _(_, _),
    children: Array.from({
      length: _,
    }).map((_, _) =>
      (0, _.jsx)(
        `div`,
        {
          className: _({
            [_]: !0,
            [_]: _ && _ < _,
            [_]: _ == _,
            [_]: !!_,
          }),
          onClick: _ ? () => _(_) : void 0,
        },
        `dot_` + _,
      ),
    ),
  });
}
function _(_) {
  let { tagid: _, language: _ = _.LANGUAGE } = _;
  return _(_, _) || String(_);
}
function _(_, _ = _.LANGUAGE) {
  let _ = _(_, _);
  return `${_.STORE_BASE_URL}tags/${_(_)}/${_}`;
}
function _(_) {
  let { tagID: _, className: _ } = _,
    _ = _(_(_));
  return (0, _.jsx)(_, {
    className: _,
    href: _,
    role: `listitem`,
    children: (0, _.jsx)(_, {
      tagid: _,
    }),
  });
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgRecommendedTags || [];
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => (_ ? await _(_, _) : []),
    staleTime: 6e5,
  };
}
function _(_) {
  return [`RecommendedTag`, _ ?? 0];
}
var _ = `_1wbMyxGnGy8-`,
  _ = `-D61WKs-ZxQ-`,
  _ = `XUHGRxAX2xY-`,
  _ = `NH1MEWmeFeg-`,
  _ = `Ef3pPDTc654-`,
  _ = `URoGnzLvPas-`,
  _ = `T-FsaU490gE-`,
  _ = `rMfcun2JSm8-`,
  _ = `YVFVQr81mPI-`,
  _ = `atnaqSRaIew-`,
  _ = `LkfujtBIcfQ-`,
  _ = `RmSUNTNiH6o-`,
  _ = `nVMhmfpEhl0-`,
  _ = `D-0yhpQ3YbY-`,
  _ = `_2J2v30O7L10-`,
  _ = `md8klOzvRXo-`,
  _ = `G80uW2Mpt6o-`,
  _ = `_4KA4WmZc39M-`,
  _ = `lnv5hodvZ5U-`;
function _(_, _) {
  _.useEffect(() => {
    if (!_ || !_.onended || !_) return;
    let _ = _.onended,
      _ = setTimeout(() => {
        _();
      }, 6e3);
    return () => clearTimeout(_);
  }, [_, _]);
}
function _(_, _) {
  _.useEffect(() => {
    if (!_) return;
    let _ = () => _(!0),
      _ = () => _(!1);
    return (
      _.addEventListener(`play`, _),
      _.addEventListener(`pause`, _),
      () => {
        (_.removeEventListener(`play`, _), _.removeEventListener(`pause`, _));
      }
    );
  }, [_, _]);
}
function _(_, _, _, _) {
  return _.useCallback(() => {
    _ == 0
      ? _(!0)
      : _ == 1 && _
        ? _.paused
          ? _.play()
          : _.pause()
        : _ == 2 && _ && (_.IsPaused() ? _.Play() : _.Pause());
  }, [_, _, _, _]);
}
function _(_, _, _, _, _, _) {
  let [_, _] = _.useState(!1);
  _.useEffect(() => {
    _ && !_
      ? _ == 1 && _ && _
        ? (_.pause(), _(!0))
        : _ == 2 && _ && _ && (_.Pause(), _(!0))
      : !_ && _ && (_ == 1 && _ ? _.play() : _ == 2 && _ && _.Play(), _(!1));
  }, [_, _, _, _, _, _, _]);
}
var _ = new _(`TrailerAppVideo`),
  _ = `bGameHighlightAutoplayDisabled`;
function _(_) {
  let {
      _: _,
      bCurrentlyActive: _,
      autoPlayCookieName: _,
      trailerBaseID: _,
      showScreenshotInsteadOfMainCap: _,
      autoplayCheckboxPosition: _,
      refTogglePlayPause: _,
      bShowAOAutoPlayWarning: _,
      ..._
    } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _(),
    _ = _(_, _, !0, _),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_),
    _ = (_ ?? !0) && _ && !_.all_ages && _ == `masked`,
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(0),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    { bCookieLoaded: _ } = _(_, _, _),
    _ = _;
  (_.useEffect(() => {
    _ && _ && _ && !_ && _(!0);
  }, [_, _, _, _]),
    _.useEffect(() => {
      _ && _ && _ && _();
    }, [_, _, _, _]));
  let _ = (_) => {
      (_(_ ?? _, String(!_), 3650), _(_), _(_));
    },
    _ = _(_, _, _, _);
  _.useEffect(() => {
    _ && (_.current = _);
  }, [_, _]);
  let _ =
    _ && _ && _.length > 0
      ? _(_[0], `600x338`)
      : _
        ? _(_, `main_capsule`)
        : void 0;
  return (0, _.jsxs)(_, {
    className: _,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: [
      (0, _.jsx)(`button`, {
        onClick: _,
        "aria-label": _.Localize(`#SaleTrailerCarousel_PlayPause`),
        children: (0, _.jsx)(`img`, {
          className: _(_, _ != 0 && void 0),
          src: _,
          alt: ``,
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          appID: _.appid,
          bAutoplayVideos: _,
          autoplayCheckboxPosition: _,
          fnSetAutoPlayVideos: _,
        }),
      (0, _.jsx)(_, {
        name: _?.name ?? ``,
        trailerCategory: _?.trailer_category,
        trailerDisplay: _,
        mouseOver: _,
      }),
      (0, _.jsx)(_, {
        eTrailerDisplay: _,
        setTrailerDisplay: _,
        featuredTrailer: _,
        fnSetMainTrailer: _,
        fnSetMicroTrailer: _,
        loadedAndActive: _ && _,
        setVideoShouldStart: _,
        bMouseOverVideo: _,
        _: _,
        fnTogglePlayPause: _,
        bAutoplayVideos: _,
        bVideoShouldStart: _,
        ..._,
      }),
      _ &&
        _ &&
        (0, _.jsxs)(`div`, {
          className: `pTTlmyp5hVo-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: _(`#StoreTrailer_AOWarning_1`),
            }),
            (0, _.jsx)(`div`, {
              className: `ERlbHjA197s-`,
              children: _(`#StoreTrailer_AOWarning_2`),
            }),
          ],
        }),
    ],
  });
}
function _(_, _) {
  let [_, _] = _.useState(!1);
  return (
    _.useEffect(() => (_ && (_(), _(!0)), () => _(!1)), [_, _]),
    {
      bCookieLoaded: _,
    }
  );
}
function _(_, _, _) {
  return _(
    _,
    _.useCallback(() => {
      let _ = _(_ ?? _);
      _(!(_ && _.toLowerCase() === `true`));
    }, [_, _]),
  );
}
function _(_) {
  let {
      _: _,
      featuredTrailer: _,
      bSkipMicroTrailer: _,
      nFadeRatio: _,
      fnPlayPause: _,
      bRequestPause: _,
      fnComplete: _,
      eTrailerDisplay: _,
      setTrailerDisplay: _,
      fnSetMainTrailer: _,
      fnSetMicroTrailer: _,
      loadedAndActive: _,
      setVideoShouldStart: _,
      fnTogglePlayPause: _,
      bAutoplayVideos: _,
      bVideoShouldStart: _,
    } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    { data: _ } = _(_),
    _ = !!_;
  (_.useEffect(() => {
    let _ = !1;
    (_ && _ && _ && (_ = _ === 0 || (_ === 1 && !_) || (_ === 2 && !_)),
      _(_),
      _?.(_ && _));
  }, [_, _, _, _, _, _, _, _]),
    _(_, _),
    _.useEffect(() => {
      _ ||
        (_(0),
        _(!1),
        _(!1),
        _ && (_.pause(), (_.currentTime = 0)),
        _ && (_.Pause(), _.SeekToStart()));
    }, [_, _, _, _]));
  let _ = _.useRef(!1);
  (_.useEffect(() => {
    if (_ && _ === 0) {
      if ((_(!0), _)) {
        if (_) {
          (_.Debug(`Starting microtrailer`), _(1));
          let _ = () => _(_, _, _);
          _ || !_
            ? _()
            : (_(!0), (_.onended = _), _(_, `microtrailer`, () => _(!1)));
        }
      } else _.Debug(`Showing image`);
    }
  }, [_, _, _, _, _, _, _, _]),
    _(_, _),
    _.useEffect(() => {
      _ || _(!1);
    }, [_, _]),
    _(!!_, _, _, _, _, _));
  let _ = (0, _.useCallback)((_) => {
    (_(_), _(_));
  }, []);
  return !_ || !_.visible || !_
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              focusable: !0,
              onClick: _,
              className: `z39v7Mbdy8s-`,
              children: (0, _.jsx)(_, {}),
            }),
          _.microtrailer &&
            (0, _.jsx)(`video`, {
              className: _(!0, _),
              ref: _,
              preload: `auto`,
              playsInline: !0,
              muted: !0,
              onClick: _,
              children: (0, _.jsx)(_, {
                trailer: _,
              }),
            }),
          (0, _.jsx)(_, {
            trailer: _,
            onRefChange: (_) => {
              (_(_), _(_));
            },
            eTrailerDisplay: _,
            fadeRatio: _,
            onPlayPauseChange: _,
            onPlaybackEnd: _,
          }),
        ],
      });
}
function _(_) {
  let {
      trailer: _,
      eTrailerDisplay: _,
      fadeRatio: _,
      onPlayPauseChange: _,
      onPlaybackEnd: _,
      onRefChange: _,
    } = _,
    [_, _] = (0, _.useState)(null);
  (0, _.useEffect)(() => {
    if (_ !== void 0 && _) {
      let _ = _.GetVolume() * _;
      _.SetVolume(_, !0);
    }
  }, [_, _]);
  let _ = _ != 2,
    _ = _(!1, _),
    _ = (0, _.useMemo)(() => _(_), [_]),
    _ = (0, _.useCallback)((_) => {
      (_(_), _(_));
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, [_]);
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        ref: _,
        dashManifests: _.rgDashTrailers,
        hlsManifest: _.rgHlsTrailers[0],
        captionManifest: _(_),
        screenshot: ``,
        altText: _.trailer_name,
        forcePause: _,
        muteWhenAutoplayBlocked: !0,
        onPlaybackEnd: _,
        onPlaybackStart: _,
        onPlayPauseChange: _,
      }),
    }),
  });
}
function _(_, _, _) {
  _.current ||
    ((_.current = !0), _.Debug(`Starting main trailer`), _(2), _.Play());
}
function _(_, _, _) {
  _.play().catch((_) => {
    (_(), _.Warning(`Failed to play ${_}: `, _));
  });
}
function _(_, _) {
  return _({
    [_]: !0,
    [_]: _ == 2,
    [_]: _ == 1,
    [_]: _ == 0,
    [_]: _,
    [_]: !_,
  });
}
function _(_) {
  let {
      appID: _,
      bAutoplayVideos: _,
      fnSetAutoPlayVideos: _,
      autoplayCheckboxPosition: _,
    } = _,
    _ = {
      [_ || `top`]: 0,
    };
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(`div`, {
      onClick: (_) => {
        (_.preventDefault(), _.stopPropagation());
      },
      className: _,
      children: (0, _.jsx)(
        _,
        {
          controlled: !0,
          checked: _,
          className: _,
          style: _,
          label: _.Localize(`#StoreTrailer_AutoPlayVideos`),
          onChange: _,
        },
        _,
      ),
    }),
  });
}
function _(_) {
  let {
      appID: _,
      trailerBaseID: _,
      focused: _,
      skipMicroTrailer: _,
      autoPlayCookieName: _,
      showAOAutoPlayWarning: _,
      showScreenshotInsteadOfMainCap: _,
      fadeRatio: _,
      fnPlayPause: _,
      refTogglePlayPause: _,
      bRequestPause: _,
      fnComplete: _,
    } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { bIsIgnored: _ } = _(_),
    { bIsWishlisted: _ } = _(_),
    { bIsWishlisted: _ } = _(_?.related_items?.parent_appid),
    [_, _] = _();
  return (0, _.jsxs)(_, {
    className: _(_, `AppVideoCtn`),
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, (_ || _) && `cIdEvZnHFHs-`),
        children: _(`#Sale_OnWishlist`),
      }),
      _ &&
        (0, _.jsx)(_, {
          eDisplay: _,
          className: `ojoUrkK-4ss-`,
          storeItemPlatform: _,
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            appID: _,
          }),
          (0, _.jsx)(
            _,
            {
              _: _,
              trailerBaseID: _,
              bCurrentlyActive: _ && !_,
              autoplayCheckboxPosition: `top`,
              autoPlayCookieName: _,
              bShowAOAutoPlayWarning: _,
              bSkipMicroTrailer: _,
              nFadeRatio: _,
              showScreenshotInsteadOfMainCap: _,
              fnPlayPause: _,
              refTogglePlayPause: _,
              bRequestPause: _,
              fnComplete: _,
            },
            _,
          ),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _(_),
    _ = _(),
    { mutateAsync: _ } = _(_, !_, _);
  return {
    bIsIgnored: _,
    fnUpdateIgnored: _,
  };
}
function _(_) {
  let { appID: _ } = _,
    _ = _(),
    { bIsIgnored: _, fnUpdateIgnored: _ } = _(_);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `cIdEvZnHFHs-`),
    children: (0, _.jsxs)(`div`, {
      className: _(_, _ && `cIdEvZnHFHs-`),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#SaleTrailerCarousel_Ignored`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#SaleTrailerCarousel_IgnoredConfirmation`),
        }),
        (0, _.jsxs)(_, {
          className: _(_, _),
          onClick: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                button: _._,
                type: _.Light,
                size: _.Medium,
              }),
            _(`#SaleTrailerCarousel_Undo`),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = !!_(_),
    _ = _(),
    { mutate: _ } = _(_, !_, _);
  return {
    bIsWishlisted: _,
    fnUpdateWishlist: _,
  };
}
function _(_) {
  let { data: _ } = _(),
    _ = _.useMemo(
      () => new Map((_ || []).map((_) => _.tagid).map((_, _) => [_, _])),
      [_],
    ),
    _ = _.useMemo(() => new Map(_.map((_, _) => [_, _])), [_]);
  return _.useMemo(
    () =>
      _.slice().sort((_, _) =>
        _.has(_) && !_.has(_)
          ? -1
          : !_.has(_) && _.has(_)
            ? 1
            : _.has(_)
              ? _.get(_) - (_.get(_) ?? 0)
              : _.get(_) - _.get(_),
      ),
    [_, _, _],
  );
}
var _ = {
    name: `trailerPrefs`,
    options: {
      path: `/`,
      secure: !0,
      maxAge: 2592e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    flVolume: 0.8,
    bMuted: !0,
  };
function _(_) {
  return _.flVolume === _.flVolume && _.bMuted === _.bMuted;
}
function _() {
  try {
    let _ = _(_);
    if (!_) return _;
    let _ = JSON.parse(_);
    return {
      flVolume: typeof _.flVolume == `number` ? _.flVolume : _.flVolume,
      bMuted: typeof _.bMuted == `boolean` ? _.bMuted : _.bMuted,
    };
  } catch {
    return _;
  }
}
function _(_) {
  _(_) || Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_) {
  let { children: _ } = _,
    [_, _] = (0, _.useState)(() => _());
  return (
    (0, _.useEffect)(() => {
      _(_);
    }, [_]),
    (0, _.jsx)(_, {
      playerVolume: _.flVolume,
      setPlayerVolume: (_) =>
        _((_) => ({
          ..._,
          flVolume: _,
        })),
      audioMuted: _.bMuted,
      setAudioMuted: (_) =>
        _((_) => ({
          ..._,
          bMuted: _,
        })),
      children: _,
    })
  );
}
function _(_) {
  return [`AppRelevanceStore`, `FriendsRecommended`, _];
}
function _(_) {
  let _ = _();
  return _({
    ..._(_, _),
    enabled: _.logged_in,
  });
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: () => _(_, _),
  };
}
function _(_) {
  return _({
    queryKey: [`AppRelevanceStore`, `StoreRelevance`, _],
    queryFn: () => _(_),
    enabled: _.logged_in,
  });
}
function _() {
  return _(`App Relevance Store Top Sellers`, {
    sort: 11,
    start: 0,
    count: 100,
  });
}
function _() {
  let { data: _ } = _();
  return _;
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_appid(_);
  let _ = await _.GetFriendsRecommendedApp(_, _),
    _ = _.GetEResult();
  if (_ == 1) return _.Body().toObject();
  throw `Error ${_} failed to call GetFriendsRecommendedApp ${_}`;
}
async function _(_) {
  let _ = {
      appid: _,
    },
    _ = {
      arrSimilarPlayedApps: [],
      bRecommendedByIR: !1,
    },
    _ = (
      await _.default.get(
        `${_.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
        {
          params: _,
          withCredentials: !0,
          timeout: 1e4,
        },
      )
    ).data;
  return (
    _ &&
      _.success == 1 &&
      (_.results.similar_played_apps &&
        (_.arrSimilarPlayedApps = _.results.similar_played_apps.map((_) => ({
          appid: _.appid,
          playtimeForever: _.playtime_forever,
        }))),
      _.results.recommended_by_ir && (_.bRecommendedByIR = !0)),
    _
  );
}
var _ = `f6ytvVy3zPE-`,
  _ = `dR6nviGksys-`,
  _ = `cHqcdcYARwo-`,
  _ = `_17ZH-YderNw-`,
  _ = `E5dDz0rMQn4-`,
  _ = `zvXifbes22U-`,
  _ = `vyD3DBFIFUc-`,
  _ = `n0EVijwEHbs-`,
  _ = `nlcoKfY7CS8-`,
  _ = `f4g-Ypg3PLw-`,
  _ = `bz0gWfRA4vo-`,
  _ = `_7Nd6h2zRP0s-`,
  _ = `fjYnq0ifPfE-`,
  _ = `kivEfnxaaMw-`,
  _ = `HX5vY-Q3jvw-`,
  _ = `_0363ELeIufA-`,
  _ = `HZwPEaho3zY-`,
  _ = `QGtGxOFRQ-w-`,
  _ = `ncEgLH6OqGs-`,
  _ = `_830jPtjL2hI-`,
  _ = `mRIBvQf4dkQ-`,
  _ = `GzKtbjDNI6o-`,
  _ = `j-P2Mge5-9c-`,
  _ = `Gcft-8jrlN4-`,
  _ = `BxLuFJsRaUQ-`,
  _ = `d6gjRWs-cbs-`,
  _ = `_5o5y8Ev8dws-`,
  _ = `sX1tnSkZalw-`,
  _ = `imhq51q87gg-`,
  _ = `yuYfj9fDIGo-`,
  _ = `-gCgopjBEis-`,
  _ = `HpPBskZI7NE-`,
  _ = `cxmUHct4Mx8-`,
  _ = `aEOWko6pl2Y-`,
  _ = `qc--Gu1VOvc-`,
  _ = `GX9fmB9rByo-`,
  _ = `_622HuKrUbVg-`,
  _ = `jddjtbg0dIU-`,
  _ = `fCsooya3i5U-`,
  _ = `naQ5--hS5ms-`,
  _ = `_9hedOZJts3E-`,
  _ = `O4OwJvlcb2o-`,
  _ = `_9fAelXUNIEs-`,
  _ = `-MiAmOisc-Q-`,
  _ = `ASoaeJU9Iow-`,
  _ = `VxsjojbvAqk-`,
  _ = `_7qeKWap2Gvc-`,
  _ = `wdv04oGNxck-`,
  _ = `Vw-KXTl20bw-`,
  _ = `pSJl-iNXTZw-`,
  _ = `oge6UIoFqiQ-`,
  _ = `sRQkEW1Z3IU-`,
  _ = `NyKGuXbQchs-`,
  _ = `u6sC2PhNZss-`,
  _ = new _(`AppRelevance`).Debug;
function _(_, _) {
  let _ = (0, _.useMemo)(
    () => _.Get().GetRecommendingCuratorsForApp(_) || [],
    [_],
  );
  return _({
    queryKey: [`RecommendingCurators`, _],
    queryFn: () =>
      Promise.all(_?.map((_) => _.LoadClanInfoForClanAccountID(_))),
    enabled: !!_ && _ && _.length > 0,
  });
}
function _(_) {
  let {
      appID: _,
      bShowAvatars: _,
      storeItem: _,
      bHideDescription: _,
      bShowCuratorInfo: _ = !1,
      bShowCreatorInfo: _,
    } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _({
      queryKey: [`SimilarPlayedAppsLoad`, _],
      queryFn: () =>
        _.Get().QueueMultipleAppRequests(
          _.data.arrSimilarPlayedApps?.map((_) => _.appid),
          {
            include_basic_info: !0,
            include_assets: !0,
          },
        ),
      enabled: _.isSuccess,
    }),
    _ = _(_, _),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _ &&
          ((_ = _.concat(
            _.GetAllFranchiseCreatorClans().map((_) => ({
              nAccountID: _,
              type: `franchise`,
            })),
          )),
          (_ = _.concat(
            _.GetAllDeveloperCreatorClans().map((_) => ({
              nAccountID: _,
              type: `developer`,
            })),
          )),
          (_ = _.concat(
            _.GetAllPublisherCreatorClans().map((_) => ({
              nAccountID: _,
              type: `publisher`,
            })),
          )),
          (_ = _.filter((_) => _.Get().BIsFollowingCurator(_.nAccountID)))),
        _
      );
    }, [_]),
    _ = _({
      queryKey: [`FollowedCreators`, _],
      queryFn: () =>
        _.LoadClanInfoForClanAccountID(_[0].nAccountID).then((_) => ({
          clanInfo: _,
          type: _[0].type,
        })),
      enabled: !!_ && _ && _.length > 0,
    }),
    _ = _({
      queryKey: [`PlayerSummaries`, _, _],
      queryFn: async () => {
        let _ = [],
          _ = [],
          _ = [],
          _ = _ ? 10 : 1;
        for (
          let _ = 0;
          _.data.accountids_recommended &&
          _ < _.data.accountids_recommended.length &&
          _ < _;
          _++
        ) {
          let _ = _.InitFromAccountID(
            _.data.accountids_recommended[_],
            _.EUNIVERSE,
          );
          _.push(_.ConvertTo64BitString());
        }
        for (
          let _ = 0;
          _.data.in_wishlist && _ < _.data.in_wishlist.length && _ < _;
          _++
        ) {
          let _ = new _(_.data.in_wishlist[_].steamid);
          _.push(_.ConvertTo64BitString());
        }
        for (let _ = 0; _.data.owns && _ < _.data.owns.length && _ < _; _++) {
          let _ = new _(_.data.owns[_].steamid);
          _.push(_.ConvertTo64BitString());
        }
        return {
          rgRecommendedFriends: _,
          rgWishlistFriends: _,
          rgOwnedFriends: _,
        };
      },
      enabled: _.isSuccess && _.isSuccess,
    });
  if (
    !_ ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading
  )
    return (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
    });
  let _ = [];
  _.isSuccess &&
    _.data.arrSimilarPlayedApps &&
    _.data.arrSimilarPlayedApps.slice(0, 2).forEach((_) => {
      let _ = _.Get().GetApp(_.appid);
      _
        ? _.push(
            (0, _.jsx)(
              _,
              {
                lifetimePlaytime: _.playtimeForever,
                storeItem: _,
              },
              _.appid,
            ),
          )
        : console.error(`Failed to load store data `, _);
    });
  let _ = _.GetItemIDs().findIndex((_) => _.appid === _),
    _ = _.data?.bRecommendedByIR,
    _ = _.length > 0,
    _ = _.data?.owns?.length,
    _ = _.data?.in_wishlist?.length,
    _ = _.data?.accountids_recommended?.length,
    _ = 0;
  return (
    _ > 0 && _++,
    _ > 0 && _++,
    _ > 0 && _++,
    _ && _++,
    _ >= 0 && _++,
    _.length > 0 && _++,
    _ && _?.data?.length && _++,
    _ && _.data && _++,
    _(`FriendsOwned: `, _, ` FriendsWishlisted: `, _, `cRecommended: `, _),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _ > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: `Hw5Md-rtn-k-`,
                children: _(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, _.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      header: _(`#DiscoveryQueue_SimilarGames`),
                      children: (0, _.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: _,
                      }),
                    }),
                  _ &&
                    !!_?.data?.length &&
                    (0, _.jsx)(_, {
                      header: _(`#ContentHub_Recommendation_Curators`),
                      children: (0, _.jsx)(`div`, {
                        className: _(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
                        children: _.data.filter(Boolean).map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              curator: _,
                            },
                            `curator_` + _.clanAccountID,
                          ),
                        ),
                      }),
                    }),
                  _ &&
                    !!_.data &&
                    (0, _.jsx)(_, {
                      creatorInfo: _.data,
                    }),
                  _ >= 0 &&
                    (0, _.jsx)(_, {
                      header: _(
                        `#DiscoveryQueue_TopSellers`,
                        _(_ + 1),
                        (0, _.jsx)(`span`, {
                          className: `wdv04oGNxck-`,
                        }),
                      ),
                    }),
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      header: _(`#DiscoveryQueue_RecommendedByIR`),
                    }),
                  (0, _.jsx)(_, {
                    bShowAvatars: _,
                    count: _.data?.accountids_recommended?.length,
                    locToken: `#DiscoveryQueue_FriendsRecommended`,
                    arrSteamIDs: _.data?.rgRecommendedFriends,
                  }),
                  (0, _.jsx)(_, {
                    bShowAvatars: _,
                    count: _.data?.owns?.length,
                    locToken: `#DiscoveryQueue_FriendsOwned`,
                    arrSteamIDs: _.data?.rgOwnedFriends,
                  }),
                  (0, _.jsx)(_, {
                    bShowAvatars: _,
                    count: _.data?.in_wishlist?.length,
                    locToken: `#DiscoveryQueue_FriendsWishlisted`,
                    arrSteamIDs: _.data?.rgWishlistFriends,
                  }),
                ],
              }),
            ],
          }),
        !_ || _ == 0
          ? (0, _.jsx)(`div`, {
              className: _(_, _ && void 0),
              children: _.GetShortDescription(),
            })
          : (0, _.jsx)(`div`, {
              "aria-label": _.GetShortDescription(),
            }),
      ],
    })
  );
}
function _(_) {
  let { creatorInfo: _ } = _;
  if (!_) return null;
  let _;
  switch (_.type) {
    case `publisher`:
      _ = `#ContentHub_Recommendation_FollowedPublisher`;
      break;
    case `developer`:
      _ = `#ContentHub_Recommendation_FollowedDeveloper`;
      break;
    case `franchise`:
      _ = `#ContentHub_Recommendation_FollowedFranchise`;
  }
  return _
    ? (0, _.jsx)(_, {
        header: _(
          _,
          (0, _.jsx)(`span`, {
            className: _,
            children: _.clanInfo?.group_name,
          }),
        ),
      })
    : null;
}
function _(_) {
  let { curator: _ } = _,
    { creatorHome: _ } = _(_?.clanAccountID);
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        href: _.GetCreatorHomeURL(null),
        children: (0, _.jsx)(`img`, {
          src: _.avatar_medium_url,
        }),
      });
}
function _(_) {
  let { lifetimePlaytime: _, storeItem: _ } = _,
    _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      _: _,
      bHidePrice: !0,
      hoverProps: {
        direction: `overlay`,
        nBodyAlignment: 1,
        style: {
          minWidth: `320px`,
          zIndex: 5e3,
        },
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        alt: _.GetName(),
        src: _.GetAssets().GetSmallCapsuleURL(),
      }),
    }),
  });
}
function _(_) {
  let { arrSteamIDs: _, count: _, locToken: _, bShowAvatars: _ } = _;
  return _
    ? _ == 1 && !_
      ? (0, _.jsx)(_, {
          header: _(
            _ + `_Single`,
            (0, _.jsx)(_, {
              steamid: _[0],
            }),
          ),
        })
      : (0, _.jsx)(_, {
          header: _(
            _,
            _,
            (0, _.jsx)(`span`, {
              className: _,
            }),
          ),
          children:
            _ &&
            _.length > 0 &&
            (0, _.jsx)(`div`, {
              className: `nd1w3QliCfE-`,
              children:
                _ == 1
                  ? (0, _.jsx)(_, {
                      steamid: _[0],
                    })
                  : (0, _.jsx)(_, {
                      arrSteamIDs: _,
                    }),
            }),
        })
    : null;
}
function _(_) {
  let { steamid: _ } = _,
    { data: _ } = _(_);
  return !_ || !_.m_bInitialized
    ? null
    : (0, _.jsx)(`span`, {
        "data-miniprofile": `s` + _.m_steamid.ConvertTo64BitString(),
        className: _,
        children: _.m_strPlayerName,
      });
}
function _(_) {
  let { arrSteamIDs: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_.Fragment, {
    children: _.map(
      ({ data: _ }) =>
        _ &&
        (0, _.jsx)(
          _,
          {
            "data-miniprofile": `s` + _.m_steamid.ConvertTo64BitString(),
            persona: _,
            size: `Small`,
            statusPosition: `right`,
          },
          _.m_steamid.ConvertTo64BitString(),
        ),
    ),
  });
}
function _(_) {
  let { steamid: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsxs)(_, {
        className: _,
        "data-miniprofile": `s` + _,
        children: [
          (0, _.jsx)(_, {
            persona: _,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, _.jsx)(_, {
            className: _,
            persona: _,
            eFriendRelationship: 3,
            bIsSelf: !1,
            strNickname: null,
            bParenthesizeNicknames: !1,
            bCompactView: !1,
            bNoMask: !0,
          }),
        ],
      })
    : null;
}
function _(_) {
  let { children: _, header: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
          _,
        ],
      }),
    ],
  });
}
var _ = {
  include_assets: !0,
  include_trailers: !0,
  include_basic_info: !0,
  include_tag_count: 20,
  include_release: !0,
  include_platforms: !0,
  include_screenshots: !0,
  include_reviews: !0,
};
new _(`DiscoveryQueueApp`).Debug;
function _(_) {
  let {
      appID: _,
      nItemHeight: _,
      nItemWidth: _,
      selected: _,
      fnFocused: _,
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      elVideo: _,
      elDetails: _,
      appAriaIDs: _,
    } = _,
    [_] = _(_, _),
    _ = _(),
    _ = _()?.ownerWindow || window,
    _ = _(_, _, _, _),
    { bIsIgnored: _, fnUpdateIgnored: _ } = _(_),
    { bIsWishlisted: _, fnUpdateWishlist: _ } = _(_),
    _ = _.useRef(null);
  if (
    (_.useEffect(() => {
      _ &&
        _.current &&
        _.current.focus({
          preventScroll: !0,
        });
    }, [_]),
    !_)
  )
    return (console.warn(`Error: missing store item for appid `, _), null);
  let _ = {
    width: _ || void 0,
    height: _ || void 0,
  };
  return (0, _.jsxs)(_, {
    "aria-labelledby": _(
      _.nameId,
      _.tagsId,
      _.reviewId,
      _.relevanceId,
      _.buttonsId,
    ),
    ref: _,
    style: _,
    className: _(_, _ && `vyD3DBFIFUc-`),
    onOptionsActionDescription: _(
      _
        ? `#DiscoveryQueue_RemoveFromWishlist`
        : `#DiscoveryQueue_AddToWishlist`,
    ),
    onOptionsButton: _,
    onOKActionDescription: _(`#DiscoveryQueue_ViewStorePage`),
    onOKButton: () => {
      _.location.href = _;
    },
    onSecondaryActionDescription: _(
      _ ? `#DiscoveryQueue_Undo` : `#DiscoveryQueue_IgnoreLink`,
    ),
    onSecondaryButton: _,
    fnScrollIntoViewHandler: () => (_(), !0),
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ && `_3ZYr-Efwvg8-`),
        children: (0, _.jsxs)(`div`, {
          className: _(_, _ && `_3ZYr-Efwvg8-`),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#DiscoveryQueue_Ignored`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, _.jsxs)(_, {
              className: _(_, _),
              onClick: _,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    button: _._,
                    type: _.Light,
                    size: _.Medium,
                  }),
                _(`#DiscoveryQueue_Undo`),
              ],
            }),
          ],
        }),
      }),
      _,
      _,
    ],
  });
}
function _(_, _, _, _) {
  let _ = _();
  return _.useMemo(() => {
    if (!_) return;
    let _ = _(_),
      _ = _ >= 0 ? `?inqueue=` + _ + (_ ? `_` + _ : ``) : ``,
      _ = _(_, _.GetStorePageURL(_) + _);
    return _(_);
  }, [_, _, _, _, _]);
}
function _(_) {
  let {
      appID: _,
      bShowMinimizedDisplay: _,
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      appAriaIDs: _,
    } = _,
    [_] = _(_, _),
    _ = _(_),
    { bIsIgnored: _, fnUpdateIgnored: _ } = _(_),
    { bIsWishlisted: _, fnUpdateWishlist: _ } = _(_),
    _ = _(_, _, _, _),
    _ = _(),
    _ = _;
  if (!_) return;
  let _ = _.GetAssets().GetLibraryCapsuleURL(),
    _ = _.GetAssets().GetHeaderURL();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsxs)(`a`, {
              className: _(`_-6qCNJHr4Z0-`),
              href: _,
              children: [
                (0, _.jsx)(`img`, {
                  className: `Q3mOh913Yuw-`,
                  src: _,
                }),
                _ &&
                  (0, _.jsx)(`img`, {
                    className: `k5tHhP269dw-`,
                    src: _,
                  }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            _: _.nameId,
            className: _,
            children: [
              (0, _.jsx)(`a`, {
                className: _(_),
                href: _,
                children: _.GetName(),
              }),
              (0, _.jsx)(_, {
                bSingleLineMode: !0,
                _: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            rgTagIDs: _.GetTagIDs(),
            ariaLabelID: _.tagsId,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            _: _.reviewId,
            children: (0, _.jsx)(_, {
              bShowTooltip: !0,
              bTruncateTotalReviews: _,
              _: _,
            }),
          }),
          (0, _.jsx)(`div`, {
            _: _.relevanceId,
            className: _,
            children: (0, _.jsx)(_, {
              bHideDescription: _,
              bShowAvatars: !_,
              storeItem: _,
              appID: _,
            }),
          }),
        ],
      }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `Ud5K2f6NQFA-`,
          children: (0, _.jsx)(`div`, {
            _: _.buttonsId,
            className: `sRPPHGX-rq4-`,
            children: (0, _.jsxs)(`div`, {
              className: `kjR6Qum8rRo-`,
              children: [
                _.BHasDemo() &&
                  (0, _.jsx)(_, {
                    _: _,
                    className: _(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, _.jsxs)(`a`, {
                  className: _(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        button: _._,
                        type: _.Light,
                        size: _.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    _(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, _.jsx)(_, {
                  toolTipContent: _(
                    _ ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, _.jsxs)(_, {
                    "aria-label": _(
                      _ ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: _(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: _,
                    children: [
                      _ &&
                        (0, _.jsx)(_, {
                          button: _._,
                          type: _.Light,
                          size: _.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {
                  toolTipContent: _(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, _.jsx)(_, {
                    "aria-label": _(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: _(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: _,
                    children: (0, _.jsx)(_, {}),
                  }),
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function _(_) {
  let { rgTagIDs: _, ariaLabelID: _ } = _,
    _ = [..._(_)].slice(0, 8);
  return (0, _.jsx)(`div`, {
    _: _,
    role: `list`,
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          className: _,
          tagID: _,
        },
        _,
      ),
    ),
  });
}
function _() {
  return {
    nameId: _.useId(),
    tagsId: _.useId(),
    reviewId: _.useId(),
    relevanceId: _.useId(),
    buttonsId: _.useId(),
  };
}
var _ = new _(`DiscoveryQueueWizard`).Debug,
  _ = 1,
  _ = 1400,
  _ = `discoveryqueue2022`;
async function _(_, _, _, _) {
  let _ = [],
    _ = !1;
  try {
    let { appids: _, exhausted: _ } = await _.Get().GetDiscoveryQueueAppsOfType(
      _,
      _,
      _,
    );
    ((_ = [..._]),
      (_ = _),
      _ && _.findIndex((_) => _ === _) === -1 && _.unshift(_),
      await _.Get().QueueMultipleAppRequests(_, {
        ..._,
        ..._,
      }));
  } catch (_) {
    console.error(`Failed getting discovery queue apps`, _);
  }
  return {
    appids: _,
    exhausted: _,
  };
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      (_.Init(_), _(!0));
    }, [_]),
    _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : null
  );
}
function _(_) {
  let {
      eStoreDiscoveryQueueType: _,
      fnCloseModal: _,
      includeAppID: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      bShowAOAutoPlayWarning: _,
    } = _,
    [_, _] = _.useState(0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(0),
    _ = _()?.ownerWindow || window,
    _ = _(_),
    [_, _] = _.useState(0),
    _ = _();
  (_(`ArrowLeft`, () => _(!1), !0, !0),
    _(`Left`, () => _(!1), !0, !0),
    _(`ArrowRight`, () => _(!0), !0, !0),
    _(`Right`, () => _(!0), !0, !0),
    _(`Escape`, () => _?.(), !0, !0),
    _(`Esc`, () => _?.(), !0, !0));
  let _ = _.useMemo(() => _.innerWidth < _, [_]),
    { fnGetDiscoveryQueue: _, rgAppIDs: _ } = _(_, _, _);
  (_.useEffect(() => {
    (_(!0), _.Get().HintLoad());
  }, []),
    _.useEffect(() => {
      let _ = _[_];
      _ != _ && (_ && _ != _ && _.AddImpression(_, _), _(_));
    }, [_, _, _, _, _]));
  let _ = (_) => {
    let _ = _(_ + (_ ? 1 : -1), 0, _.length - 1);
    _ != _ && (_(_), _(`New selected index: `, _, ` Prev selected index: `, _));
  };
  (_.useEffect(() => {
    _?.length &&
      _[_] !== _ &&
      (_((_) => _ + 1),
      _.Get()
        .SkipDiscoveryQueueItem(_[_], _, _)
        .then(() => _((_) => _ - 1)));
  }, [_, _, _, _]),
    _.useEffect(() => {
      _.length != _ && (_(_.length), _.length > _ && _[_] == _ && _(_ + 1));
    }, [_, _, _]));
  let [_] = _.useState(new Map()),
    _ = _(_, _),
    _ = !_() && _ > 0,
    _ = !_() && _ < _.length - 1,
    {
      refContainer: _,
      bIsDragging: _,
      nDragOffset: _,
      nDragSelectedOffsetIndex: _,
      handleTouchStart: _,
      handleTouchMove: _,
      handleTouchEnd: _,
    } = _((_) => _(_), _.length),
    _ = (_) => {
      _.target == _.currentTarget && (_?.(), _.stopPropagation());
    },
    _ = (_) => _(_ + _, _) && (_(_, -1, 1) || _),
    _ = _(_.STORE_BASE_URL + `explore?dq=widget`),
    _ = !_() && !_() && _ === 0,
    _ = _(_.STORE_BASE_URL + `explore/next/0`),
    _ = _[_] !== _,
    { nQueueStart: _, nCount: _ } = _(_, _);
  return (0, _.jsx)(_, {
    feature: _,
    children: (0, _.jsx)(_, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: _,
      navEntryPreferPosition: _.LAST,
      onCancelButton: () => _?.(),
      onCancelActionDescription: _(`#Button_Close`),
      children: (0, _.jsxs)(`div`, {
        className: _,
        onClick: _,
        children: [
          _.length > 0 &&
            (0, _.jsx)(_, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: _,
            }),
          (0, _.jsxs)(_, {
            "flow-children": `row`,
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: void 0,
                children: _(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, _.jsx)(_, {
                    className: _,
                    href: _(_),
                  }),
                ),
              }),
              _ &&
                (0, _.jsx)(_, {
                  className: void 0,
                  children: _(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, _.jsx)(_, {
                      className: `naQ5--hS5ms-`,
                      href: _(_),
                    }),
                  ),
                }),
              (0, _.jsx)(_, {
                className: _,
                children: (0, _.jsx)(_, {
                  focusable: !0,
                  className: _,
                  onClick: _,
                  "aria-label": _(`#Button_Close`),
                  onActivate: () => _ && _(),
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            role: `button`,
            "aria-label": _(`#Carousel_Next`),
            onClick: () => _(!1),
            className: _(_, _, _ && `_4dyYanLcAPg-`),
            children: (0, _.jsx)(_, {
              angle: 180,
            }),
          }),
          (0, _.jsx)(_, {
            role: `button`,
            "aria-label": _(`#Carousel_Prev`),
            onClick: () => _(!0),
            className: _(_, _, _ && `_4dyYanLcAPg-`),
            children: (0, _.jsx)(_, {
              angle: 0,
            }),
          }),
          (0, _.jsx)(_, {
            ref: _,
            className: _,
            focusable: !1,
            onTouchStart: _,
            onTouchMove: _,
            onTouchEnd: _,
            children: [-2, -1, 0, 1, 2].map((_) =>
              (0, _.jsx)(
                `div`,
                {
                  className: _({
                    [_]: !0,
                    [_]: _,
                    [_]: _(_),
                    [_]: _ == -2,
                    [_]: _ == -1,
                    [_]: _ == 0,
                    [_]: _ == 1,
                    [_]: _ == 2,
                    [_]: _ + _ == 0,
                  }),
                  style: {
                    "--dragOffsetX": `${_}px`,
                  },
                  children:
                    _(_) &&
                    (0, _.jsx)(_, {
                      eStoreDiscoveryQueueType: _,
                      storePageFilter: _,
                      rgAppIDs: _,
                      index: _ + _,
                      bShowMinimizedDisplay: _,
                      selectedIndex: _,
                      bPreferDemoStorePage: !!_,
                      mapViewedAppCount: _,
                      fnCloseModal: _,
                      fnLoadNextQueue: () => _(!1),
                      fnAdvance: _,
                      bSkipAppRequestPending: _ != 0,
                      showAOAutoPlayWarning: !!_,
                    }),
                },
                _ + _,
              ),
            ),
          }),
          (0, _.jsx)(_, {
            className: _(!_ && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: _,
            selectedIndex: _ - _,
          }),
        ],
      }),
    }),
  });
}
function _(_, _) {
  let _ = 0;
  for (let _ = 0; _ < _; _++) _[_] == _ && (_ = _ + 1);
  let _ = 0;
  for (let _ = _; _ < _.length; _++)
    if (_[_] == _) {
      _ = _;
      break;
    } else _ == _.length - 1 && (_ = _.length);
  let _ = _ - _;
  return {
    nQueueStart: _,
    nQueueEnd: _,
    nCount: _,
  };
}
function _(_, _) {
  let _ = _.useRef(null),
    [_, _] = _.useState(0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(0),
    _ = _.useRef(0);
  return {
    refContainer: _,
    bIsDragging: _,
    nDragOffset: _,
    nDragSelectedOffsetIndex: _,
    handleTouchStart: (_) => {
      (_(!0), (_.current = _.touches[0].clientX), _(0), _(0));
    },
    handleTouchMove: (_) => {
      if (!_) return;
      let _ = _.touches[0].clientX - _.current;
      (_(_), _(_ > 50 ? 1 : _ < -50 ? -1 : 0));
    },
    handleTouchEnd: () => {
      _ &&
        (_(!1),
        _ > 50
          ? _((_) => Math.max(_ - 1, 0))
          : _ < -50 && _((_) => Math.min(_ + 1, _ - 1)),
        _(0),
        _(0));
    },
  };
}
function _(_) {
  let {
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      rgAppIDs: _,
      index: _,
      bShowMinimizedDisplay: _,
      selectedIndex: _,
      bPreferDemoStorePage: _,
      mapViewedAppCount: _,
      fnCloseModal: _,
      fnLoadNextQueue: _,
      fnAdvance: _,
      bSkipAppRequestPending: _,
      showAOAutoPlayWarning: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _(),
    _ = () => {
      _ != _ && _(_ > _);
    },
    _ = _ === _,
    _ = _.useRef(_);
  if (
    (_.useEffect(() => {
      let _ = _.current;
      if (((_.current = _), _ && !_)) {
        _(!0);
        let _ = setTimeout(() => _(!1), 500);
        return () => {
          clearTimeout(_);
        };
      }
    }, [_]),
    _[_] == _)
  ) {
    let _ = 0;
    for (let _ = _ - 1; _ >= 0; _--) _[_] == _ && (_ += 1);
    let _ = 0;
    for (let _ = _ - 1; _ >= 0 && _[_] !== _; _--) _++;
    return (
      _.has(_) || _.set(_, _.Get().GetTotalSkippedAppsForDiscoveryQueue(_, _)),
      (0, _.createElement)(_, {
        ..._,
        key: _,
        selected: _,
        lastCard: _ == _.length - 1,
        fnLoadNextQueue: _,
        fnCloseModal: _,
        summaryCardIndex: _,
        eStoreDiscoveryQueueType: _,
        viewedAppCount: (_.get(_) || 0) + _,
        fnFocused: _,
        fnAdvance: () => _(!0),
        bSkipAppRequestPending: _,
      })
    );
  }
  let _ = _ || _.current || _;
  return (0, _.jsx)(_, {
    appAriaIDs: _,
    eStoreDiscoveryQueueType: _,
    storePageFilter: _,
    selected: _,
    appID: _[_],
    bPreferDemoStorePage: _,
    fnFocused: _,
    elVideo: (0, _.jsx)(_, {
      appID: _[_],
      focused: _,
      showAOAutoPlayWarning: _,
      fnComplete: void 0,
    }),
    elDetails: (0, _.jsx)(_, {
      appID: _[_],
      bShowMinimizedDisplay: _,
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      appAriaIDs: _,
    }),
  });
}
function _(_, _, _) {
  let [_, _] = _.useState([]),
    _ = _(`DiscoveryQueueWizard`);
  return {
    fnGetDiscoveryQueue: async (_) => {
      let { appids: _ } = await _(_, !_, _ && _, _);
      if (_ && !_.length) {
        let { appids: _ } = await _(_, !0, void 0, _);
        _ = _;
      }
      if (!_?.token?.reason) {
        let _ = [...(_ ?? []), ..._, _];
        _(_);
      }
      _(`Loaded new discovery queue apps: `, _);
    },
    rgAppIDs: _,
  };
}
function _(_) {
  let {
      eStoreDiscoveryQueueType: _,
      fnCloseModal: _,
      summaryCardIndex: _,
      lastCard: _,
      selected: _,
      fnLoadNextQueue: _,
      storePageFilter: _,
      fnDisplaySummaryReward: _,
      viewedAppCount: _,
      fnFocused: _,
      fnAdvance: _,
      bSkipAppRequestPending: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _(),
    _ = _(2, _.LANGUAGE, !1),
    [_, _] = _.useState(0),
    [_, _] = _.useState(0),
    { data: _ } = _();
  _.useEffect(() => {
    _ &&
      !_ &&
      _ &&
      _.Get()
        .HintLoad()
        .then(() => {
          _.Get()
            .LoadSkippedApps(_, _)
            .then((_) => {
              (_(_.reduce((_, _) => (_.has(_) ? _ + 1 : _), 0)),
                _(
                  _.reduce(
                    (_, _) => (_.Get().BIsGameIgnored(_) ? _ + 1 : _),
                    0,
                  ),
                ),
                _(!0));
            });
        });
  }, [_, _, _, _, _]);
  let [_, _] = _.useState(!1),
    _ = _(_, _),
    _ = _(`DiscoveryQueueSummary`),
    _ = async () => {
      _ ? _ || (_(!0), await _(), _?.token?.reason || _(!1)) : _();
    };
  return (0, _.jsxs)(_, {
    selected: _,
    fnFocused: _,
    fnOnContinue: _,
    fnCloseModal: _,
    bLoaded: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#DiscoveryQueue_SummaryTitle`),
          }),
          !_ &&
            _ &&
            _.data?.definition &&
            (0, _.jsx)(_, {
              bSkipAppRequestPending: _,
              summaryCardIdx: _,
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#DiscoveryQueue_YourStats`),
          }),
          (0, _.jsxs)(_, {
            "flow-children": `row`,
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_),
                  }),
                  (0, _.jsx)(_, {
                    className: _(_, _),
                    href: _(_.STORE_BASE_URL + `wishlist`),
                    children: _(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_),
                  }),
                  (0, _.jsx)(_, {
                    className: _(_, _),
                    href: _(_.STORE_BASE_URL + `account/notinterested`),
                    children: _(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !_ &&
            (0, _.jsxs)(_, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, _.jsx)(_, {
                  className: _(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: _,
                  children: _(`#ActionButtonLabelDone`),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    className: _(
                      _ && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: _,
                    children: _(_ ? `#Loading` : `#Button_Continue`),
                  }),
              ],
            }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_.Fragment, {
          children: !!_ && _?.(_ + 1),
        }),
    ],
  });
}
function _(_) {
  let {
      children: _,
      selected: _,
      fnOnContinue: _,
      fnCloseModal: _,
      fnFocused: _,
      bLoaded: _,
    } = _,
    _ = _(_.STORE_BASE_URL + `wishlist`),
    _ = _()?.ownerWindow || window,
    _ = () => {
      _.location.href = _(_);
    },
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _ &&
        _.current &&
        _.current.focus({
          preventScroll: !0,
        });
    }, [_]),
    (0, _.jsx)(_, {
      ref: _,
      "aria-live": `polite`,
      className: _(void 0, _, _ && `vyD3DBFIFUc-`),
      onOptionsActionDescription: _(`#DiscoveryQueue_ViewWishlist`),
      onOptionsButton: _,
      onOKActionDescription: _(`#Button_Continue`),
      onOKButton: () => {
        _();
      },
      onCancelActionDescription: _(`#ActionButtonLabelDone`),
      onCancelButton: () => _ && _(),
      fnScrollIntoViewHandler: () => (_(), !0),
      children: _
        ? _
        : (0, _.jsx)(_, {
            className: void 0,
            msDelayAppear: 200,
            size: `large`,
            position: `center`,
          }),
    })
  );
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      size: `large`,
      position: `center`,
    }),
  });
}
function _(_) {
  let { bSkipAppRequestPending: _, summaryCardIdx: _ } = _;
  return _
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        summaryCardIdx: _,
      });
}
function _(_) {
  let { summaryCardIdx: _ } = _,
    _ = _(2, _.LANGUAGE, !1, _.toString()),
    [_] = _(_?.data?.current_def?.appid, {}),
    _ = _();
  if (!_?.data?.current_def || !_?.GetName().length) return (0, _.jsx)(_, {});
  let _ = _.data.num_items_earned,
    _ = _.data.current_def.num_items_per_def,
    _ = _ - _,
    _ = (_ / _) * 100;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        nPercent: _,
        size: 70,
        strokeWidth: 12,
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(
              `#DiscoveryQueue_SaleStatus_Title${_ ? `` : `_Complete`}`,
              _(_),
              _.GetName(),
            ),
          }),
          _ > 0 &&
            (0, _.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: _(`#DiscoveryQueue_SaleStatus_Desc`, _(_), _.GetName()),
            }),
          !_ &&
            (0, _.jsx)(`a`, {
              href: _(_.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: _(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { _ as default };

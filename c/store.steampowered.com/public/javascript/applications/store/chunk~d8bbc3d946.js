import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~cd94ddba57.js";
import { _, _ } from "./chunk~38061b7abb.js";
import { _ } from "./chunk~4dd1695ad6.js";
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
} from "./main.js";
var _ = _(_()),
  _ = `tYEw8zCMszM-`,
  _ = `NCpHzW0zAz4-`,
  _ = `_8LSrWZvsPDA-`,
  _ = `bUpZq7n9J9M-`,
  _ = `qXndu6aUanY-`,
  _ = _();
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
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recommendationid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommendationid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            review_text: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            voted_up: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            is_public: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            is_in_early_access: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            received_compensation: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            comments_disabled: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            hide_in_steam_china: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            saved_hardware_id: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Update_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Update_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.saved_hardware_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            saved_hardware_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_BackfillSavedHardware_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.num_backfilled || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_backfilled: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_BackfillSavedHardware_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reaction_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reaction_type: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_LoyaltyReaction`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            ranges: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_Recommendation_Tag_Range`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recommendationid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [27, 40, 54], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommendationid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            review: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            time_created: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_updated: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            votes_up: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            votes_down: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            vote_score: {
              _: 9,
              _: _.readFloat,
              _: _.writeFloat,
            },
            language: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            comment_count: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            voted_up: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            is_public: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            moderator_hidden: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            flagged_by_developer: {
              _: 15,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report_score: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid_moderator: {
              _: 17,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_developer: {
              _: 18,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_dev_responder: {
              _: 19,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            developer_response: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            time_developer_responded: {
              _: 21,
              _: _.readUint32,
              _: _.writeUint32,
            },
            developer_flag_cleared: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            written_during_early_access: {
              _: 23,
              _: _.readBool,
              _: _.writeBool,
            },
            votes_funny: {
              _: 24,
              _: _.readUint32,
              _: _.writeUint32,
            },
            received_compensation: {
              _: 25,
              _: _.readBool,
              _: _.writeBool,
            },
            unverified_purchase: {
              _: 26,
              _: _.readBool,
              _: _.writeBool,
            },
            review_qualities: {
              _: 27,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            weighted_vote_score: {
              _: 28,
              _: _.readFloat,
              _: _.writeFloat,
            },
            moderation_note: {
              _: 29,
              _: _.readString,
              _: _.writeString,
            },
            payment_method: {
              _: 30,
              _: _.readInt32,
              _: _.writeInt32,
            },
            playtime_2weeks: {
              _: 31,
              _: _.readInt32,
              _: _.writeInt32,
            },
            playtime_forever: {
              _: 32,
              _: _.readInt32,
              _: _.writeInt32,
            },
            last_playtime: {
              _: 33,
              _: _.readInt32,
              _: _.writeInt32,
            },
            comments_disabled: {
              _: 34,
              _: _.readBool,
              _: _.writeBool,
            },
            playtime_at_review: {
              _: 35,
              _: _.readInt32,
              _: _.writeInt32,
            },
            approved_for_china: {
              _: 36,
              _: _.readBool,
              _: _.writeBool,
            },
            ban_check_result: {
              _: 37,
              _: _.readEnum,
              _: _.writeEnum,
            },
            refunded: {
              _: 38,
              _: _.readBool,
              _: _.writeBool,
            },
            account_score_spend: {
              _: 39,
              _: _.readInt32,
              _: _.writeInt32,
            },
            reactions: {
              _: 40,
              _: _,
              _: !0,
              _: !0,
            },
            ipaddress: {
              _: 41,
              _: _.readString,
              _: _.writeString,
            },
            hidden_in_steam_china: {
              _: 42,
              _: _.readBool,
              _: _.writeBool,
            },
            steam_china_location: {
              _: 43,
              _: _.readString,
              _: _.writeString,
            },
            category_ascii_pct: {
              _: 44,
              _: _.readUint32,
              _: _.writeUint32,
            },
            category_meme_pct: {
              _: 45,
              _: _.readUint32,
              _: _.writeUint32,
            },
            category_offtopic_pct: {
              _: 46,
              _: _.readUint32,
              _: _.writeUint32,
            },
            category_uninformative_pct: {
              _: 47,
              _: _.readUint32,
              _: _.writeUint32,
            },
            category_votefarming_pct: {
              _: 48,
              _: _.readUint32,
              _: _.writeUint32,
            },
            deck_playtime_at_review: {
              _: 49,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_bot_review_pct: {
              _: 50,
              _: _.readUint32,
              _: _.writeUint32,
            },
            positivity_pct: {
              _: 51,
              _: _.readUint32,
              _: _.writeUint32,
            },
            tags_with_ranges: {
              _: 54,
              _: _,
              _: !0,
              _: !0,
            },
            saved_hardware_id: {
              _: 56,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            hardware_cluster_id: {
              _: 57,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `RecommendationDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetFriendsRecommendedApp_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountids_recommended || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountids_recommended: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            accountids_not_recommended: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetFriendsRecommendedApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requests: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recommendations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommendations: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CUserReviews_GetIndividualRecommendations_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`UserReviews.Update#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.Update = _;
  function _(_, _, _) {
    return _.SendMsg(`UserReviews.BackfillSavedHardware#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.BackfillSavedHardware = _;
  function _(_, _, _) {
    return _.SendMsg(`UserReviews.GetFriendsRecommendedApp#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetFriendsRecommendedApp = _;
  function _(_, _, _) {
    return _.SendMsg(
      `UserReviews.GetIndividualRecommendations#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetIndividualRecommendations = _;
})((_ ||= {}));
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
  _ = `_-6qCNJHr4Z0-`,
  _ = `Q3mOh913Yuw-`,
  _ = `k5tHhP269dw-`,
  _ = `HZwPEaho3zY-`,
  _ = `QGtGxOFRQ-w-`,
  _ = `ncEgLH6OqGs-`,
  _ = `_830jPtjL2hI-`,
  _ = `mRIBvQf4dkQ-`,
  _ = `M9g7Z8vAw60-`,
  _ = `GzKtbjDNI6o-`,
  _ = `j-P2Mge5-9c-`,
  _ = `Gcft-8jrlN4-`,
  _ = `Ud5K2f6NQFA-`,
  _ = `sRPPHGX-rq4-`,
  _ = `BxLuFJsRaUQ-`,
  _ = `kjR6Qum8rRo-`,
  _ = `d6gjRWs-cbs-`,
  _ = `_3ZYr-Efwvg8-`,
  _ = `_5o5y8Ev8dws-`,
  _ = `sX1tnSkZalw-`,
  _ = `imhq51q87gg-`,
  _ = `yuYfj9fDIGo-`,
  _ = `a-wHbIOxF8U-`,
  _ = `-gCgopjBEis-`,
  _ = `HpPBskZI7NE-`,
  _ = `cxmUHct4Mx8-`,
  _ = `aEOWko6pl2Y-`,
  _ = `qc--Gu1VOvc-`,
  _ = `GX9fmB9rByo-`,
  _ = `_622HuKrUbVg-`,
  _ = `jddjtbg0dIU-`,
  _ = `V-tCdhirF0E-`,
  _ = `fCsooya3i5U-`,
  _ = `naQ5--hS5ms-`,
  _ = `_9hedOZJts3E-`,
  _ = `RJg7ZyjyMZk-`,
  _ = `VE8INnFzaCw-`,
  _ = `enD9-bmgGhA-`,
  _ = `_5spq1pOe-Sg-`,
  _ = `O4OwJvlcb2o-`,
  _ = `_4dyYanLcAPg-`,
  _ = `_9fAelXUNIEs-`,
  _ = `-MiAmOisc-Q-`,
  _ = `d7rsPMqqO4s-`,
  _ = `GQ2d2HGUoPA-`,
  _ = `ASoaeJU9Iow-`,
  _ = `Hw5Md-rtn-k-`,
  _ = `VxsjojbvAqk-`,
  _ = `_7qeKWap2Gvc-`,
  _ = `nd1w3QliCfE-`,
  _ = `wdv04oGNxck-`,
  _ = `Vw-KXTl20bw-`,
  _ = `RM7VDI2ue3Q-`,
  _ = `X17vOunFzrk-`,
  _ = `pSJl-iNXTZw-`,
  _ = `oge6UIoFqiQ-`,
  _ = `x7yACsfXkig-`,
  _ = `Wp-fkK6n2-I-`,
  _ = `sRQkEW1Z3IU-`,
  _ = `NyKGuXbQchs-`,
  _ = `u6sC2PhNZss-`,
  _ = {
    include_assets: !0,
    include_trailers: !0,
    include_basic_info: !0,
    include_tag_count: 20,
    include_release: !0,
    include_platforms: !0,
    include_screenshots: !0,
    include_reviews: !0,
  };

const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./chunk~035fbeff8f.js",
      "./chunk~f025431ab0.js",
      "./chunk~01cfc309bf.js",
      "./main.js",
      "../../../css/applications/store/chunk~bcf59b1f6b.css",
      "./chunk~f6ebb80c8b.js",
      "./chunk~c0f9f0eb46.js",
      "../../../css/applications/store/chunk~1dc2296506.css",
      "../../../css/applications/store/chunk~035fbeff8f.css",
    ]),
) => _.map((_) => _[_]);
import { _, _ } from "./chunk~f025431ab0.js";
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
} from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~4c13037b22.js";
import "./chunk~19394a4118.js";
import { _ } from "./chunk~cbbb6ae37c.js";
import { _ } from "./chunk~f4c928a27a.js";
import { _ } from "./chunk~af36c62e9f.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~429133cc70.js";
import { _ } from "./chunk~e70aabe4d7.js";
import { _, _, _, _, _, _, _, _ } from "./chunk~7dcf2f426f.js";
import { _ } from "./chunk~3ea79bd96d.js";
import { _ } from "./chunk~166d91af35.js";
import { _ } from "./chunk~fc8a9e4879.js";
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
import { _ } from "./chunk~d7992cfd18.js";
import { _ } from "./chunk~c20130a1f0.js";
var _ = _(),
  _ = _(_()),
  _ = class _ {
    m_SteamInterface;
    m_setMessagesSeen = new Set();
    static sm_DefaultDataRequest = {
      include_release: !0,
      include_assets: !0,
    };
    constructor(_) {
      this.m_SteamInterface = _;
    }
    static sm_Instance;
    static Init(_) {
      _.sm_Instance = new _(_);
    }
    static Get() {
      return (
        _(_.sm_Instance, `MarketingMessages store not initialized`),
        _.sm_Instance
      );
    }
    async GetMessageList(_, _ = !1) {
      if (!_.logged_in) return [];
      let _ = _.Init(_);
      (_.Body().set_country_code(_.COUNTRY),
        _.Body().set_elanguage(_(_.LANGUAGE)),
        _.Body().set_client_package_version(_.nClientPackageVersion),
        _.Body().set_operating_system(_.eOSType),
        _ && _.Body().set_include_seen_messages(!0),
        _(_),
        _(_, _.sm_DefaultDataRequest));
      let _ = await _.GetMarketingMessagesForUser(
        this.m_SteamInterface.GetServiceTransport(),
        _,
      );
      if (_.GetEResult() != 1)
        throw `Error loading marketing messages: ${_.GetEResult()}`;
      if (_)
        for (let _ of _.Body().messages()) {
          let _ = _.message().gid();
          _.already_seen() && _ && this.m_setMessagesSeen.add(_);
        }
      return _.Body().messages();
    }
    async GetSingleMessage(_, _) {
      let _ = _.Init(_);
      (_.Body().set_gid(_), _(_), _(_, _.sm_DefaultDataRequest));
      let _;
      if (
        ((_ =
          _ || _.logged_in
            ? await _.GetDisplayMarketingMessageForUser(
                this.m_SteamInterface.GetServiceTransport(),
                _,
              )
            : await _.GetDisplayMarketingMessage(
                this.m_SteamInterface.GetAnonymousServiceTransport(),
                _,
              )),
        _.GetEResult() != 1)
      )
        throw `Error loading marketing messages: ${_.GetEResult()}`;
      return _.Body().message();
    }
    MarkMessageSeen(_, _, _) {
      if (this.m_setMessagesSeen.has(_)) return;
      let _ = _.Init(_);
      (_.Body().set_gid(_),
        _.Body().set_display_index(_),
        _.Body().set_template_type(_),
        _.MarkMessageSeen(this.m_SteamInterface.GetServiceTransport(), _),
        this.m_setMessagesSeen.add(_));
    }
    BIsMessageSeen(_) {
      return this.m_setMessagesSeen.has(_);
    }
  };
function _(_) {
  if (!_) return null;
  try {
    let _ = JSON.parse(_);
    return (
      (_.use_additional_fields &&=
        _.use_additional_fields === `true` || _.use_additional_fields === 1),
      (_.use_custom_legal_text &&=
        _.use_custom_legal_text === `true` || _.use_custom_legal_text === 1),
      (_.last_asset_mtime &&= parseInt(_.last_asset_mtime)),
      (_.ll_image = _.ll_image || {}),
      _
    );
  } catch {}
  return null;
}
function _(_) {
  return `© ${new Date().getFullYear()} Valve Corporation${_ ? ` and ` + _ : ``}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
}
var _ = class {
  m_message;
  m_templateVars = void 0;
  m_associatedItemKey;
  m_rgRecommendedAppIDs;
  m_nSaleItemCount;
  constructor(_) {
    (_(this),
      (this.m_message = _),
      (this.m_templateVars = _(_.template_vars_json()) ?? {
        ll_image: {},
      }));
    let _ = _.associated_item(!1);
    ((this.m_associatedItemKey = _
      ? _({
          item_type: _.item_type(),
          _: _._(),
        })
      : void 0),
      (this.m_rgRecommendedAppIDs = _.recommended_items()
        .map((_) => _.appid())
        .filter((_) => !!_)),
      (this.m_nSaleItemCount = _.sale_item_count()));
  }
  get id() {
    return this.m_message.gid();
  }
  GetType() {
    return this.m_message.type();
  }
  static GetTypeAsLocalizedString(_) {
    switch (_) {
      case 2:
        return _(`#spotlight_weekend_deal`);
      case 11:
        return _(`#spotlight_midweek_madness`);
      case 12:
        return _(`#spotlight_daily_deal`);
      case 1:
        return _(`#msg_available_everywhere`);
      case 17:
        return _(`#msg_new_game`);
      case 3:
        return _(`#msg_prepurchase_now`);
      case 4:
        return _(`#msg_play_now`);
      case 5:
        return _(`#label_pre_load_now`);
      case 10:
        return _(`#label_just_updated`);
      case 13:
        return _(`#label_new_dlc_available`);
      case 14:
        return _(`#label_free_weekend`);
      case 15:
        return _(`#msg_on_sale_now`);
      case 16:
        return _(`#msg_play_beta_now`);
    }
    return null;
  }
  GetTemplateType() {
    return this.m_message.template_type();
  }
  GetTemplateTypeForReporting() {
    if (
      this.GetTemplateVars().custom_display &&
      this.GetTemplateVars().custom_display.startsWith(`replay`)
    )
      return 5;
    switch (this.GetTemplateVars().custom_display) {
      case `dlc_override`:
        return 4;
      case `mm_auto_render`:
        return 7;
      case `partner_event`:
        return 6;
      case `featured_video`:
        return 3;
    }
    return this.BShouldShowSaleItems() ? 8 : 1;
  }
  GetTemplateVars() {
    return this.m_templateVars;
  }
  GetLocalizedAltText(_) {
    return (
      this.m_templateVars?.localized_alt_text?.[_] ||
      this.m_templateVars?.localized_alt_text?.[_.GetELanguageFallback(_)] ||
      void 0
    );
  }
  GetTemplateImage() {
    let _ = this.m_templateVars.ll_image?.[_.LANGUAGE],
      _ = _(_.LANGUAGE);
    return (
      !_ &&
        _.LANGUAGE == _(27) &&
        ((_ = this.m_templateVars.ll_image?.LATAM), (_ = 27)),
      _ || ((_ = this.m_templateVars.ll_image?.english), (_ = 0)),
      [_?.path, _]
    );
  }
  GetTemplateBackgroundImage() {
    let _ = this.m_templateVars.background?.[_.LANGUAGE],
      _ = _(_.LANGUAGE);
    return (
      _ || ((_ = this.m_templateVars.background?.english), (_ = 0)),
      [_?.path, _]
    );
  }
  GetFeaturedVideoMP4URL() {
    return this.m_templateVars.featured_video_mp4;
  }
  GetFeaturedVideoWebMURL() {
    return this.m_templateVars.featured_video_webm;
  }
  GetFeaturedVideoAutoPlay() {
    return !!this.m_templateVars.featured_video_autoplay;
  }
  GetFeaturedVideoLoop() {
    return !!this.m_templateVars.featured_video_loop;
  }
  GetPosterImage() {
    let _ = this.m_templateVars.poster?.[_.LANGUAGE],
      _ = _(_.LANGUAGE);
    return (
      _ || ((_ = this.m_templateVars.poster?.english), (_ = 0)), [_?.path, _]
    );
  }
  GetSubtitleObj() {
    return this.m_templateVars.subtitles;
  }
  GetDLCAppIDs() {
    return (this.m_templateVars.additional_featuring ?? [])
      .map((_) => _.appid)
      .filter((_) => !!_);
  }
  GetAutoRenderWithoutAssetOverrides() {
    return !!this.m_templateVars.autorender_assets_without_overrides;
  }
  GetGID() {
    return this.m_message.gid();
  }
  SetDLCAppIDOverride(_) {
    ((this.m_templateVars.additional_featuring = _.map((_) => ({
      appid: _,
    }))),
      (this.m_templateVars.custom_display = `dlc_override`));
  }
  GetRecommendedAppIDs() {
    return this.m_rgRecommendedAppIDs;
  }
  GetSaleItemCount() {
    return this.m_nSaleItemCount;
  }
  BShouldShowSaleItems() {
    let _ = !this.GetTemplateVars().custom_display,
      _ = !!this.GetTemplateVars().sale_clan_event_gid,
      _ = this.m_rgRecommendedAppIDs.length >= 2;
    return _ && _ && _;
  }
  SetRecommendedAppIDsOverride(_) {
    this.m_rgRecommendedAppIDs = _;
  }
  OverrideCustomText(_) {
    this.m_templateVars.button_text_custom = _;
  }
  OverrideURL(_) {
    this.m_templateVars.linkurl = _;
  }
  BHasTemplateAnimatedAssets() {
    return !!this.m_templateVars.has_animated_assets;
  }
  BHasTemplateAnimatedAssetForLanguage(_) {
    let _ = _(_);
    return !!this.m_templateVars.mp4?.[_];
  }
  GetTemplateWebM(_) {
    let _ = _(_);
    return this.m_templateVars.webm?.[_]?.path;
  }
  GetTemplateWebMWithFallback(_) {
    let _ = _(_),
      _ = this.m_templateVars.webm?.[_]?.path;
    if (_) return [_, _];
    let _ = _.GetELanguageFallback(_),
      _ = _(_);
    return [this.m_templateVars.webm?.[_]?.path, _];
  }
  GetTemplateMP4(_) {
    let _ = _(_);
    return this.m_templateVars.mp4?.[_]?.path;
  }
  GetTemplateMP4WithFallback(_) {
    let _ = _(_),
      _ = this.m_templateVars.mp4?.[_]?.path;
    if (_) return [_, _];
    let _ = _.GetELanguageFallback(_),
      _ = _(_);
    return [this.m_templateVars.mp4?.[_]?.path, _];
  }
  GetLegalHTML() {
    return this.GetTemplateVars().use_custom_legal_text
      ? this.GetTemplateVars().custom_legal_text
      : _(this.GetTemplateVars().partner);
  }
  get associated_item_key() {
    return this.m_associatedItemKey;
  }
  get associated_item_appid() {
    return this.m_message.associated_item(!1)?.appid();
  }
  GetAssociatedItemProto() {
    return this.m_message.associated_item(!1);
  }
};
_([_], _.prototype, `m_templateVars`, void 0);
var _ = `^(replay)([0-9]{4})`;
function _(_) {
  return _.match(_)?.[2];
}
function _(_) {
  if (_) {
    let _ = _.match(_);
    return !!_?.[2] && !isNaN(Number(_?.[2]));
  }
  return !1;
}
function _(_, _, _) {
  let { bIncludeSeenMessages: _, ..._ } = _,
    {
      data: _,
      isLoading: _,
      isError: _,
    } = _({
      queryKey: [
        `MarketingMessages`,
        `List`,
        _,
        {
          bIncludeSeenMessages: !!_,
        },
      ],
      queryFn: () => _.GetMessageList(_, _),
      ..._,
    }),
    _ = _.useMemo(() => _?.map((_) => new _(_.message())), [_]),
    _ = _(),
    _ = _.useRef(new Set());
  return (
    _ &&
      _?.forEach((_) => {
        let _ = _._;
        if (!_ || _.current.has(_)) return;
        let _ = _.GetAssociatedItemProto();
        _ && (_(_, _.sm_DefaultDataRequest), _.current.add(_));
      }),
    {
      rgMessages: _ ? null : _,
      isError: _,
    }
  );
}
function _(_, _, _) {
  let { data: _, isError: _ } = _({
      queryKey: [`MarketingMessages`, _ ? `SinglePreivew` : `Single`, _],
      queryFn: () => _.GetSingleMessage(_, _),
      enabled: !!_,
    }),
    _ = _.useMemo(() => {
      if (_) {
        let _ = new _(_);
        if (_) {
          let _ = _(`marketingmessage_preview_config`, `application_config`);
          (_?.dlc_appid_overrides?.length &&
            _.SetDLCAppIDOverride(_.dlc_appid_overrides),
            _?.recommended_appid_overrides?.length &&
              _.SetRecommendedAppIDsOverride(_.recommended_appid_overrides));
        }
        return _;
      }
    }, [_, _]),
    _ = _(),
    _ = _.useRef(new Set()),
    _ = _?._;
  if (_ && _ && _ && !_.current.has(_)) {
    let _ = _.GetAssociatedItemProto();
    _ && (_(_, _.sm_DefaultDataRequest), _.current.add(_));
  }
  return {
    message: _,
    isError: _,
  };
}
function _(_, _, _, _, _) {
  let _ = _.Init(_);
  (_.Body().set_gid(_),
    _.Body().set_display_index(_),
    _.Body().set_template_type(_),
    _.Body().set_click_location(_),
    _.MarkMessageClicked(_, _));
}
var _ = _.createContext({
  setLegalText: void 0,
});
function _() {
  return !!_.useContext(_).setLegalText;
}
function _() {
  return _.useContext(_).setLegalText || function (_) {};
}
function _(_) {
  let [_, _] = _.useState(),
    _ = _(`BrowserView.RegisterForMessageFromParent`),
    _ = _(),
    _ = _.useMemo(
      () => ({
        setLegalText: _ && !_ ? _ : void 0,
      }),
      [_, _, _],
    );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          strLegalText: _,
        }),
      _.children,
    ],
  });
}
function _(_) {
  let { strLegalText: _ } = _,
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      ((_.current = _),
        SteamClient.BrowserView.PostMessageToParent(
          `MarketingMessageLegal`,
          _ || ``,
        ));
    }, [_]),
    _.useEffect(
      () =>
        SteamClient.BrowserView.RegisterForMessageFromParent((_) => {
          _ == `MarketingMessageDialogReady` &&
            SteamClient.BrowserView.PostMessageToParent(
              `MarketingMessageLegal`,
              _.current,
            );
        }).unregister,
      [],
    ),
    null
  );
}
function _() {
  let _ = _();
  return _.useMemo(() => {
    let _ = new URLSearchParams(_.search);
    return {
      bIncludeSeenMessages: !!_.get(`include_seen`),
      nClientPackageVersion: parseInt(_.get(`client_package_version`) || `0`),
      eOSType: parseInt(_.get(`os_type`) || `0`),
      bLowBandwidthMode: !!_.get(`low_bandwidth`),
    };
  }, [_.search]);
}
function _(_) {
  let _ = new URLSearchParams();
  return (
    _.bIncludeSeenMessages && _.append(`include_seen`, `1`),
    _.nClientPackageVersion &&
      _.append(`client_package_version`, _.nClientPackageVersion.toString()),
    _.eOSType && _.append(`os_type`, _.eOSType.toString()),
    _.bLowBandwidthMode && _.append(`low_bandwidth`, `1`),
    _.toString()
  );
}
function _(_, _, _) {
  if (!_ && _.BHasTemplateAnimatedAssets()) {
    let _ = _.GetELanguageFallback(_);
    return (
      _.BHasTemplateAnimatedAssetForLanguage(_) ||
      _.BHasTemplateAnimatedAssetForLanguage(_)
    );
  }
  return !1;
}
function _(_, _, _, _) {
  if (!_ || !_.path) return null;
  let _ = _ ? `?t=` + _ : ``;
  return _.path.startsWith(`images`)
    ? `${_.MEDIA_CDN_URL}steam/marketing/${_}/${_.path}${_}`
    : `${_.BASE_URL_SHARED_CDN}store_item_assets/mm/${_}/${_}/${_.path}${_}`;
}
function _(_) {
  let { path: _, message: _, eLanguage: _, ..._ } = _,
    _ = _.GetTemplateVars()?.last_asset_mtime,
    _ = _(_._, _, _, {
      type: `file`,
      path: _,
    }),
    _ = _.GetLocalizedAltText(_);
  return (0, _.jsx)(`img`, {
    alt: _,
    ..._,
    src: _,
  });
}
function _(_) {
  let { message: _, mp4Path: _, webmPath: _, language: _, ..._ } = _,
    _ = _.GetTemplateVars()?.last_asset_mtime,
    _ = _(_._, _, _, {
      type: `file`,
      path: _,
    }),
    _ = _(_._, _, _, {
      type: `file`,
      path: _,
    }),
    _ = (0, _.useRef)(null);
  _(_);
  let _ = (0, _.useRef)(!1),
    _ = (0, _.useCallback)(() => {
      _.current &&
        (document.visibilityState === `visible`
          ? (_.current &&= (_.current.play(), !1))
          : _.current.paused || (_.current.pause(), (_.current = !0)));
    }, []);
  return (
    _(document, `visibilitychange`, _),
    (0, _.useEffect)(() => _(), [_]),
    (0, _.jsxs)(`video`, {
      ..._,
      ref: _,
      children: [
        (0, _.jsx)(`source`, {
          src: _,
          type: `video/webm`,
        }),
        (0, _.jsx)(`source`, {
          src: _,
          type: `video/mp4`,
        }),
      ],
    })
  );
}
var _ = `_0rg7QMNy7jY-`,
  _ = `_9cacopcF0Dg-`,
  _ = `GouFTCf51tc-`,
  _ = `cwi8pT-5toI-`,
  _ = `nzSsIHRDj78-`,
  _ = `Eo8SO7ZKWuE-`,
  _ = `gxR5Tw6uJCI-`,
  _ = `L-8gGuZ07gE-`,
  _ = `_4UWrgYtZycQ-`,
  _ = `JZpXsA-Xgmo-`,
  _ = `_0b6eHRCoMso-`,
  _ = `fCMJE9GFrl4-`,
  _ = `hoF4iyYjP-8-`,
  _ = `xGRSgAVyH9M-`,
  _ = `py-AHaUAgpQ-`,
  _ = `tO2rzm85yrk-`,
  _ = `EpvEBC52J48-`,
  _ = `IiPKTi2q3ko-`,
  _ = `zwcqJ-kd93k-`,
  _ = `GpRe26KdcUA-`,
  _ = `dZQZQPAi8KY-`,
  _ = `_9eyq0UFYciQ-`,
  _ = `ZWNrPcsxXHU-`,
  _ = `jNvS4xxa-PA-`,
  _ = `ViqT-upLYlU-`;
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { isBackgroundBlur: _, bOverrideUseBackgroundImage: _ } = _,
    _ = _(),
    _ = _(_.GetTemplateVars().linkurl, 1),
    [_, _] = _ ? _.GetTemplateBackgroundImage() : _.GetTemplateImage();
  return (0, _.jsx)(_, {
    focusable: !0,
    noFocusRing: !0,
    className: _(_, _ && `_0b6eHRCoMso-`),
    onActivate: _,
    children:
      _ &&
      (0, _.jsx)(_, {
        message: _,
        path: _,
        eLanguage: _,
      }),
  });
}
function _(_) {
  let { fnOnClick: _ } = _,
    _ = _(),
    _ = _(_.LANGUAGE),
    [_, _] = _.GetTemplateMP4WithFallback(_),
    [_, _] = _.GetTemplateWebMWithFallback(_);
  return (
    _(
      _ == _,
      `GameAnimatedImageViaVideo mismatch fallback languages eLang ${_} mp4 ${_} webm ${_}`,
    ),
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        focusable: !0,
        noFocusRing: !0,
        className: _(_),
        onActivate: _,
        children: (0, _.jsx)(_, {
          muted: !0,
          autoPlay: !0,
          controls: !1,
          loop: !0,
          mp4Path: _,
          message: _,
          webmPath: _,
          language: _.IN_CLIENT ? _ : _,
        }),
      }),
    })
  );
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    _ = _ ? _(_, `main_capsule`) : void 0;
  return _
    ? (0, _.jsx)(_, {
        strImageURL: _,
      })
    : null;
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _(_, _, _),
    children: (0, _.jsx)(`img`, {
      src: _.strImageURL,
    }),
  });
}
function _(_) {
  let { strType: _, strTitle: _, bSmallTitle: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `RhkqxwedI4w-`),
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { _: _, bPreview: _, bPreferAssetWithoutOverride: _ } = _,
    { data: _ } = _(_),
    _ = _?.appid,
    _ = _(),
    { bIsOwned: _ } = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_ ?? 0),
    _ = (0, _.useMemo)(
      () =>
        _ && (!_?.playtime_forever || !_?.rtime_last_played)
          ? {
              playtime_forever: 300,
              rtime_last_played: Math.floor(Date.now() / 1e3) - 432e3,
            }
          : _,
      [_, _],
    ),
    _ = `steam://openurl/` + (_(_) ?? ``);
  _ &&
    _ &&
    (_ = _
      ? `steam://open/games/details/${_}`
      : `steam://nav/games/details/${_}`);
  let _ = _(_, 4, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        onClick: _,
        children: (0, _.jsx)(_, {
          _: _,
          bPreferLibrary: !0,
          bPreferAssetWithoutOverride: _,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              onClick: _,
              children: _?.name,
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                onClick: _,
                className: _(_, _),
                children: _(
                  _
                    ? `#EventDisplay_ViewInLibrary`
                    : `#EventDisplay_ViewStorePage`,
                ),
              }),
              !_ &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsxs)(`div`, {
                    className: `RGk4BbX6ZEc-`,
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _(`#EventDisplay_OnWishlist`),
                        }),
                      !_ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: _(`#EventDisplay_Follow`),
                        }),
                    ],
                  }),
                }),
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    !!_?.rtime_last_played &&
                      (0, _.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(`#MarketingMessages_DLC_lastplayed`),
                          }),
                          _(_.rtime_last_played),
                        ],
                      }),
                    !!_?.playtime_forever &&
                      (0, _.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(`#MarketingMessages_DLC_hours`),
                          }),
                          _(_.playtime_forever),
                        ],
                      }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _(_().GetTemplateVars().linkurl, 2);
  return (0, _.jsx)(_, {
    bHidePrice: _.bHidePrice,
    fnOnClickButton: _,
  });
}
function _(_) {
  let { bHidePrice: _, fnOnClickButton: _ } = _,
    _ = _(),
    [_, _] = _(() => [
      _.GetTemplateVars().button_text_custom || _.GetTemplateVars().button_text,
      !!_.GetTemplateVars().hide_price,
    ]),
    _ = !!(_ || _);
  return (0, _.jsxs)(`div`, {
    className: _(_, !1),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            focusable: !0,
            noFocusRing: !0,
            className: _,
            onActivate: _,
            children: _,
          }),
          !_ &&
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {}),
            }),
        ],
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _() {
  let _ = _().associated_item_key,
    { data: _ } = _(_);
  return !_ || !_.formatted_final_price
    ? (0, _.jsx)(`div`, {
        className: _,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          _: _,
        }),
      });
}
function _(_) {
  let _ = _();
  return _()
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        dangerouslySetInnerHTML: {
          __html: _.GetLegalHTML(),
        },
      });
}
function _(_) {
  let { _: _, type: _, eClickLocation: _ } = _,
    _ = _(_, _, _);
  return (0, _.jsx)(_, {
    _: _,
    type: _,
    fnOnClickOverride: (_) => {
      (_.preventDefault(), _(_));
    },
    bIsMarketingMessage: !0,
    bPreferAssetWithoutOverride: !1,
  });
}
function _(_) {
  let { capsule: _, imageType: _, eClickLocation: _ } = _,
    _ = _(_._, _.type, _);
  return (0, _.jsx)(`div`, {
    onClick: (_) => {
      (_.preventDefault(), _(_));
    },
    children: (0, _.jsx)(_, {
      capsule: _,
      imageType: _,
      bShowParentApp: !1,
      bHideStoreHover: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = _.GetTemplateVars().update_event_clan_accountid,
    _ = _.GetTemplateVars().update_event_gid,
    { eventModel: _, bLoading: _, sErrorMessage: _ } = _(_, _, _);
  return {
    message: _,
    eventModel: _,
  };
}
function _(_) {
  let { bPreview: _, bUseAnimated: _ } = _,
    { message: _, eventModel: _ } = _(_),
    { data: _ } = _(_.associated_item_key),
    _ = _(_) ?? ``,
    _ = _(_, _, 1),
    _ = _(_, _, 2);
  return (0, _.jsx)(_, {
    submethod: `partner_event`,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          _: _.associated_item_key,
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              _: _.associated_item_key,
              bPreview: _,
              bPreferAssetWithoutOverride: !1,
            }),
            (0, _.jsx)(_, {
              message: _,
              eventModel: _,
              fnOnClickButton: _,
              bUseAnimated: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          bHidePrice: !0,
          fnOnClickButton: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { message: _, fnOnClickButton: _, eventModel: _, bUseAnimated: _ } = _,
    [_, _] = _.GetTemplateImage(),
    _ = _(_.LANGUAGE);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        strType: _(`#MarketingMessages_MajorUpdate`),
        strTitle: _?.GetNameWithFallback(_),
      }),
      (0, _.jsxs)(_, {
        focusable: !0,
        noFocusRing: !0,
        className: _(_),
        onActivate: _,
        children: [
          _ &&
            !_ &&
            (0, _.jsx)(_, {
              message: _,
              path: _,
              eLanguage: _,
            }),
          _ &&
            (0, _.jsx)(_, {
              fnOnClick: _,
            }),
        ],
      }),
    ],
  });
}
function _(_, _, _) {
  let _ = _(_?.appid),
    _ = _(_(_), `partner_event`);
  if (_?.BIsVisibleEvent() && _ && _.BIsValidForRealm(_.EREALM)) {
    let _ = _();
    _.IN_CLIENT && (_ > 1726604483 || _ == 0)
      ? (_ = `steam://open/library/event/${_.appid}|${_.GID}`)
      : ((_ = `${_.STORE_BASE_URL}news/app/${_.appid}?emclan=${_.clanSteamID.ConvertTo64BitString()}&emgid=${_.GID}`),
        _.IN_CLIENT && (_ = `steam://openurl/${_}`));
  } else
    ((_ = _),
      _ && (_ += `${_.includes(`?`) ? `&` : `?`}emgid=${_.GID}`),
      _.IN_CLIENT && (_ = `steam://openurl/${_}`));
  return _(_, _, !0);
}
var _ = _(_());
function _(_) {
  let {
    isLoading: _,
    isError: _,
    data: _,
  } = _({
    queryKey: [`useDLCHubCount`, _],
    queryFn: async () => _(_),
    enabled: !!(_ && _ != 0),
  });
  return _ || _ ? null : _;
}
async function _(_) {
  let _ = `${_.STORE_BASE_URL}dlc/${_}/ajaxgetdlccount`,
    _ = {
      origin: self.origin,
    },
    _ = await _.default.get(_, {
      params: _,
      withCredentials: !1,
    });
  if (_.status !== 200 || _.data.success !== 1)
    throw Error(
      `FetchDLCCount failed: status == ${_.status}, eresult == ${_.data?.success}, err_msg == ${_.data?.err_msg}`,
    );
  return _.data.count;
}
var _ = `pSQAIYlkuZ4-`,
  _ = `qXHjnlbrVPU-`,
  _ = `DqyWvF0Nllg-`,
  _ = `V8NuqidmB8M-`,
  _ = `U6opAhfwgis-`;
function _(_) {
  let { bPreview: _ } = _,
    _ = _(),
    _ = (0, _.useMemo)(
      () =>
        _.GetDLCAppIDs().map((_) => ({
          _: _,
          type: `game`,
        })),
      [_],
    ),
    _ = _(_.associated_item_appid);
  return (
    (0, _.useEffect)(() => {
      if (_) {
        let _ = _
          ? _(`#MarketingMessages_See_Count_Items`, _)
          : _(`#MarketingMessages_See_All_Items`);
        (_.OverrideCustomText(_),
          _.OverrideURL(`${_.STORE_BASE_URL}dlc/${_.associated_item_appid}`));
      }
    }, [_, _]),
    (0, _.jsx)(_, {
      submethod: `dlc_override`,
      children: (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            _: _.associated_item_key,
          }),
          (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                _: _.associated_item_key,
                bPreview: _,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, _.jsx)(_, {
                rgDLCSaleCapsules: _,
                messageType: _.GetType(),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            bHidePrice: !0,
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let { messageType: _, itemCount: _ } = _,
    _ = _.GetTypeAsLocalizedString(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `w00lHTKEq4I-`,
          children: _,
        }),
      _ == 1
        ? (0, _.jsx)(_, {
            strDesc: _(`#MarketingMessages_DLC_desc_singular`),
          })
        : (0, _.jsx)(_, {
            strDesc: _(`#MarketingMessages_DLC_desc`),
          }),
    ],
  });
}
function _(_) {
  let { rgDLCSaleCapsules: _, messageType: _ } = _;
  return _.length >= 4
    ? (0, _.jsx)(_, {
        rgSaleCapsules: _,
        eClickLocation: 3,
        children: (0, _.jsx)(_, {
          messageType: _,
        }),
      })
    : _.length >= 3
      ? (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              messageType: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                _: _[0]._,
                type: _[0].type,
                eClickLocation: 3,
              }),
            }),
            (0, _.jsx)(_, {
              first: _[1],
              second: _[2],
              eClickLocation: 3,
            }),
          ],
        })
      : _.length >= 2
        ? (0, _.jsx)(_, {
            rgSaleCapsules: _,
            eClickLocation: 3,
            children: (0, _.jsx)(_, {
              messageType: _,
            }),
          })
        : _.length >= 1
          ? (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  messageType: _,
                  itemCount: _.length,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    capsule: _[0],
                    imageType: `main`,
                    eClickLocation: 3,
                  }),
                }),
              ],
            })
          : null;
}
function _(_) {
  let { rgSaleCapsules: _, eClickLocation: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _,
      (0, _.jsx)(_, {
        first: _[0],
        second: _[1],
        eClickLocation: _,
      }),
      (0, _.jsx)(_, {
        first: _[2],
        second: _[3],
        eClickLocation: _,
      }),
    ],
  });
}
function _(_) {
  let { rgSaleCapsules: _, eClickLocation: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          _: _[0]._,
          type: _[0].type,
          eClickLocation: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          _: _[1]._,
          type: _[1].type,
          eClickLocation: _,
        }),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.strDesc,
  });
}
function _(_) {
  let { first: _, second: _, eClickLocation: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          capsule: _,
          imageType: `header`,
          eClickLocation: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          capsule: _,
          imageType: `header`,
          eClickLocation: _,
        }),
      }),
    ],
  });
}
var _ = `_886zTtF9yKc-`,
  _ = `LC0MVsbOf8E-`,
  _ = `Eog1TAa9AWI-`;
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)(() => _.GetFeaturedVideoAutoPlay()),
    _ = (0, _.useRef)(null);
  _(_);
  let _ = _(_.GetTemplateVars().linkurl, 1),
    _ = _();
  return (0, _.jsx)(_, {
    focusable: !0,
    noFocusRing: !0,
    onActivate: (_) => (!_ && _.GetFeaturedVideoAutoPlay() ? _(_) : _(!0)),
    className: _,
    children: _
      ? (0, _.jsxs)(`video`, {
          controls: !_.GetFeaturedVideoLoop(),
          ref: _,
          muted: !0,
          autoPlay: !0,
          className: _,
          loop: _.GetFeaturedVideoLoop(),
          crossOrigin: `anonymous`,
          children: [
            (0, _.jsx)(`source`, {
              src: _(_.GetFeaturedVideoWebMURL()),
              type: `video/webm`,
            }),
            !_.IN_CLIENT &&
              (0, _.jsx)(`source`, {
                src: _(_.GetFeaturedVideoMP4URL()),
                type: `video/mp4`,
              }),
            (0, _.jsx)(_, {
              message: _,
            }),
          ],
        })
      : (0, _.jsx)(_, {
          message: _,
        }),
  });
}
function _(_) {
  let { message: _ } = _,
    _ = _.GetTemplateVars()?.last_asset_mtime,
    [_, _] = _.GetPosterImage(),
    _ = _(_._, _, _, {
      type: `file`,
      path: _,
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`img`, {
        src: _,
        className: _,
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { message: _ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = _.GetSubtitleObj(),
        _ = _.GetTemplateVars()?.last_asset_mtime,
        _ = [];
      for (let _ = 0; _ < 32; ++_) {
        if (!_.IsELanguageValidInRealm(_, _.EREALM)) continue;
        let _ = _(_);
        if (_ && _[_]) {
          let _ = _[_].path,
            _ = _(_._, _, _, {
              type: `file`,
              path: _,
            });
          _.push(
            (0, _.jsx)(
              `track`,
              {
                src: _,
                kind: `subtitles`,
                srcLang: _(_),
                default: _.LANGUAGE == _,
                label: _(`#language_selection_` + _(_)),
              },
              _._ + ` ` + _,
            ),
          );
        }
      }
      return _;
    }, [_]);
  return (0, _.jsx)(_.Fragment, {
    children: _,
  });
}
function _(_) {
  let { bLowBandwidthMode: _ } = _,
    _ = _(),
    _ = !_ && _.GetTemplateVars().custom_display === `featured_video`;
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          isBackgroundBlur: !0,
          bOverrideUseBackgroundImage: _,
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              bOverrideUseBackgroundImage: _,
            }),
            !!_ && (0, _.jsx)(_, {}),
          ],
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
function _(_) {
  let _ = _(_().GetTemplateVars().linkurl, 6);
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          isBackgroundBlur: !0,
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            fnOnClick: _,
          }),
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
var _ = _(_());
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      if (!_) return [];
      let _ = _.categories?.supported_player_categoryids?.slice(0, 1) || [];
      return (
        _.categories?.feature_categoryids?.forEach((_) => _.push(_)),
        _.categories?.controller_categoryids?.forEach((_) => _.push(_)),
        _.categories?.supported_player_categoryids
          ?.slice(1)
          .forEach((_) => _.push(_)),
        _
      );
    }, [_]);
  return !_ || _.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _(_, `SaleTagBlockCtn`),
        children:
          _?.length > 0
            ? (0, _.jsx)(`div`, {
                className: _(_, _),
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      categoryID: _,
                    },
                    `cat_` + _,
                  ),
                ),
              })
            : (0, _.jsx)(`div`, {
                children: _(`#Broadcast_None`),
              }),
      });
}
var _ = class _ {
  m_rgCategories;
  constructor() {
    this.m_rgCategories = _(`feature_categories`, `application_config`);
  }
  static g_Self = null;
  static Get() {
    return ((_.g_Self ||= new _()), _.g_Self);
  }
};
function _(_) {
  let { categoryID: _ } = _,
    _ = _.Get().m_rgCategories.find((_) => _.categoryid == _);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          toolTipContent: _.display_name,
          children: (0, _.jsx)(`div`, {
            className: _,
            style: {
              background: `url(${_.STORE_CDN_URL}${_.image_url}) no-repeat center center/cover`,
            },
          }),
        }),
      })
    : null;
}
function _(_) {
  let {
      _: _,
      fnOnClickButton: _,
      bLowBandwidthMode: _,
      bUseAssetWithoutOverride: _,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_);
  return !_ || !_
    ? (0, _.jsx)(`div`, {
        className: _(_, _),
        children: (0, _.jsx)(_, {
          size: `medium`,
        }),
      })
    : (0, _.jsx)(`div`, {
        className: _(_, _),
        children: (0, _.jsx)(_, {
          _: _,
          elFeaturedInCenter: (0, _.jsx)(_, {
            _: _,
            bUseAssetWithoutOverride: !!_,
            fnOnClickButton: _,
          }),
          trailer: _ && _.length > 0 ? _[0] : void 0,
          bUseTrailerAsFirstThumb: !_,
          bNoScreenShotModals: !0,
          name: _.name || ``,
        }),
      });
}
function _(_) {
  let { _: _, fnOnClickButton: _, bUseAssetWithoutOverride: _ } = _,
    [, _] = _(),
    { data: _ } = _(_, _),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_ || !_) return null;
  let _ = _(_, `main_capsule`);
  return (0, _.jsxs)(_, {
    focusable: !0,
    noFocusRing: !0,
    className: _,
    ..._,
    onActivate: _,
    children: [
      (0, _.jsx)(`img`, {
        className: _,
        src: _,
        alt: _.name || ``,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_),
            children: _.name || ``,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [_.short_description, ` `],
          }),
          (0, _.jsx)(_, {
            rgTagIDs: _ ? _.slice(0, 10).map((_) => _.tagid || 0) : [],
            instanceNum: 0,
            bLargeText: !0,
            bHideTitle: !0,
            bNoStoreLinks: !0,
          }),
          (0, _.jsx)(_, {
            _: _,
          }),
        ],
      }),
    ],
  });
}
var _ = `UDBCx7hHil8-`,
  _ = `IKG0vEoSOA8-`,
  _ = `n4IOVFejo90-`,
  _ = `Iw1CZshx4SI-`;
function _(_) {
  let { bPreview: _, bLowBandwidthMode: _ } = _,
    _ = _(),
    _ = _(_.GetTemplateVars().linkurl, 5),
    _ = _.associated_item_key;
  return (0, _.jsx)(_, {
    submethod: `mm-auto-render`,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          _: _,
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.GetTypeAsLocalizedString(_.GetType()),
                  }),
                  (0, _.jsx)(_, {
                    message: _,
                    _: _,
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                appid: _.associated_item_appid,
                children: (0, _.jsx)(_, {
                  _: _,
                  fnOnClickButton: _,
                  bLowBandwidthMode: _,
                  bUseAssetWithoutOverride:
                    _.GetAutoRenderWithoutAssetOverrides(),
                }),
              }),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          bHidePrice: _.GetTemplateVars().hide_price,
          fnOnClickButton: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { message: _, _: _ } = _,
    { data: _ } = _(_),
    _ = _?.free_weekend,
    [_] = _(`timezone`),
    [_] = _(`locale`);
  if (_.GetType() == 14) {
    if (_?.text)
      return (0, _.jsx)(`div`, {
        className: _,
        children: _.text,
      });
    if (_?.end_time) {
      _ && _.SetPreferredLocales([_]);
      let _ = _ || Intl.DateTimeFormat().resolvedOptions().timeZone,
        _ = _.end_time,
        _ = _.unix(_)._(_),
        _ = _.format(`z`),
        _ = _.match(/^-?\d/)
          ? `UTC${_.unix(_)._(_).format(`Z`).replace(`:00`, ``)}`
          : _,
        _ = _(_.unix(), !1, _, _);
      return (0, _.jsx)(`div`, {
        className: _,
        children: _(`#msg_free_play_until`, _),
      });
    }
    return (0, _.jsx)(`div`, {
      className: _,
      children: _(`#msg_free_play_weekend`),
    });
  }
  let _ = _.GetTemplateVars()?.autorender_subtitle_token;
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(_),
      })
    : null;
}
var _ = `OdjDhjB2yrA-`,
  _ = `YOmAhzZv9RQ-`,
  _ = `Ey3a8q2PxVE-`,
  _ = `xHACuI0ICmw-`,
  _ = {
    weekday: void 0,
    year: void 0,
    month: `short`,
    day: `numeric`,
  },
  _ = [20, 50, 100, 200, 500, 1e3, 2e3, 5e3];
function _() {
  let _ = _(),
    { sale_clan_account: _, sale_clan_event_gid: _ } = _.GetTemplateVars(),
    { eventModel: _, bLoading: _ } = _(_ ? Number(_) : void 0, _),
    _ = _(_, `capsule`, _(_.LANGUAGE)),
    _ = _.GetRecommendedAppIDs().length >= 4,
    _ = (0, _.useMemo)(
      () =>
        _.GetRecommendedAppIDs()
          .slice(0, _ ? 4 : 2)
          .map((_) => ({
            _: _,
            type: `game`,
          })),
      [_, _],
    );
  return (
    (0, _.useEffect)(() => {
      let _ = _(_.GetSaleItemCount());
      _ &&
        _.OverrideCustomText(_(`#MarketingMessages_See_AtLeast_Items`, _(_)));
    }, [_]),
    (0, _.jsx)(_, {
      submethod: `sale_items`,
      children: (0, _.jsxs)(_, {
        children: [
          _
            ? (0, _.jsx)(_, {
                strImageURL: _,
              })
            : (0, _.jsx)(_, {
                isBackgroundBlur: !0,
              }),
          (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                eventModel: _,
                strCapsuleURL: _,
                bLoading: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _
                  ? (0, _.jsx)(_, {
                      rgSaleCapsules: _,
                      eClickLocation: 5,
                      children: (0, _.jsx)(_, {
                        strDesc: _(`#MarketingMessages_SaleItems_Label`),
                      }),
                    })
                  : (0, _.jsx)(_, {
                      rgSaleCapsules: _,
                      eClickLocation: 5,
                      children: (0, _.jsx)(_, {
                        strDesc: _(`#MarketingMessages_SaleItems_Label`),
                      }),
                    }),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            bHidePrice: !0,
          }),
        ],
      }),
    })
  );
}
function _(_) {
  return _.filter((_) => _ <= (_ ?? 0)).pop();
}
function _(_) {
  let { eventModel: _, strCapsuleURL: _, bLoading: _ } = _,
    { linkurl: _ } = _().GetTemplateVars(),
    _ = _(_, 1);
  if (_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  if (!_ || !_) return (0, _.jsx)(_, {});
  let _ = _.GetNameWithFallback(_(_.LANGUAGE)),
    _ = _.endTime,
    _ = !!_ && _ > _();
  return (0, _.jsxs)(_, {
    focusable: !0,
    noFocusRing: !0,
    className: _,
    onActivate: _,
    children: [
      (0, _.jsx)(`img`, {
        className: _,
        src: _,
        alt: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            strType: _(`#MarketingMessages_SaleEvent`),
            strTitle: _,
            bSmallTitle: !0,
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `HY39mN5xR8M-`,
              children: _(`#MarketingMessages_SaleEvent_Through`, _(_, _)),
            }),
        ],
      }),
    ],
  });
}
var _ = _.createContext(null);
function _() {
  return _.useContext(_);
}
function _(_) {
  let { message: _, preview: _ } = _,
    _ = _.active !== !1,
    _ = _();
  return (
    _.useEffect(() => {
      _ && _(_.GetLegalHTML());
    }, [_, _, _]),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(_.Suspense, {
        fallback: null,
        children: (0, _.jsx)(_, {
          message: _,
          active: _,
          preview: _,
        }),
      }),
    })
  );
}
var _ = _.lazy(() =>
  _(
    () => import(`./chunk~035fbeff8f.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    import.meta.url,
  ),
);
function _(_) {
  let { message: _, active: _, preview: _ } = _,
    _ = _(_.LANGUAGE),
    { bLowBandwidthMode: _ } = _();
  if (_(_.GetTemplateVars().custom_display || ``) && _.logged_in) {
    let _ = Number(_(_.GetTemplateVars().custom_display || ``));
    return isNaN(_)
      ? null
      : (0, _.jsx)(_, {
          active: _,
          year: _,
        });
  }
  switch (_.GetTemplateVars().custom_display) {
    case `dlc_override`:
      return (0, _.jsx)(_, {
        bPreview: _,
      });
    case `partner_event`:
      return (0, _.jsx)(_, {
        bPreview: _,
        bUseAnimated: _(_, _, _),
      });
    case `mm_auto_render`:
      return (0, _.jsx)(_, {
        bPreview: _,
        bLowBandwidthMode: _,
      });
  }
  if (_.BShouldShowSaleItems()) return (0, _.jsx)(_, {});
  switch (_.GetTemplateType()) {
    case `image`:
      return _(_, _, _)
        ? (0, _.jsx)(_, {})
        : (0, _.jsx)(_, {
            bLowBandwidthMode: _,
          });
    default:
      return null;
  }
}
var _ = `Gm5nLJRXJaY-`,
  _ = `-ImanFHLAwA-`,
  _ = `ZhQhX7pr9lA-`,
  _ = `_4fnvcJcUDX8-`,
  _ = `y0FnhcY7vxo-`,
  _ = `_5sB1JM0Iyds-`,
  _ = `_1xe7rr61Sxs-`,
  _ = `YW5IYp6Si78-`,
  _ = `XcuLFgHa428-`,
  _ = `S4heXFJ-jNg-`,
  _ = `OUppgysE0Mk-`,
  _ = `GTpU6gej7zQ-`,
  _ = `yTfJh4717Do-`,
  _ = `e2IKf6YeMZ8-`,
  _ = `hwfeh9nw5U8-`,
  _ = `-dG-criVXmY-`,
  _ = `PkEcCtT0EDE-`,
  _ = `sAb-WXDAZ0o-`,
  _ = `gr2LCUjvkns-`,
  _ = 8,
  _ = _.createContext(null);
function _() {
  return _.useContext(_);
}
function _(_) {
  let { MarketingMessagesStore: _ } = _,
    _ = _(),
    { rgMessages: _, isError: _ } = _(_, _),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(0);
  _(_);
  let _ = _();
  if (
    (_.useEffect(() => {
      _ &&
        !_.length &&
        !_ &&
        (_.bIncludeSeenMessages
          ? _(!0)
          : _.replace({
              ..._.location,
              search: _({
                ..._,
                bIncludeSeenMessages: !0,
              }),
            }));
    }, [_, _, _, _]),
    _)
  )
    return (0, _.jsx)(_, {
      children: _(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: _(`#MarketingMessages_NoneAvailable`),
    });
  let _ = _.bIncludeSeenMessages ? _ : _?.slice(0, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          MarketingMessagesStore: _,
          rgMessages: _,
          iActiveMessage: _,
        }),
      }),
      (0, _.jsx)(_, {
        cMessages: _?.length,
        iMessage: _,
        setMessage: _,
      }),
    ],
  });
}
function _(_) {
  let { MarketingMessagesStore: _, rgMessages: _, iActiveMessage: _ } = _;
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _?.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              displayIndex: _,
              message: _,
              MarketingMessagesStore: _,
              active: _ == _,
              next: _ == _ + 1 || _ == _ - 1,
            },
            _._,
          ),
        ),
      })
    : (0, _.jsx)(`div`, {
        className: _(_, _),
        children: (0, _.jsx)(_, {
          size: `xxlarge`,
          msDelayAppear: 500,
        }),
      });
}
function _(_) {
  let { cMessages: _, iMessage: _, setMessage: _ } = _,
    _ = _.useCallback(() => _(_ - 1), [_, _]),
    _ = _.useCallback(() => _(_ + 1), [_, _]),
    _ = [];
  for (let _ = 0; _ < _; _++)
    _.push(
      (0, _.jsx)(
        _,
        {
          active: _ == _,
          iMessage: _,
          setMessage: _,
        },
        _,
      ),
    );
  let _ = _ > 0 ? _ : void 0,
    _ = _ < _ - 1 ? _ : void 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: void 0,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _ && `gHoA3r84Hvo-`),
              onClick: _,
              children: (0, _.jsx)(_, {
                angle: 180,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
                children: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _ && `gHoA3r84Hvo-`),
              onClick: _,
              children: (0, _.jsx)(_, {
                angle: 0,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { active: _, iMessage: _, setMessage: _ } = _,
    _ = _.useCallback(() => _(_), [_, _]);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `gHoA3r84Hvo-`),
    onClick: _,
  });
}
function _(_) {
  let { MarketingMessagesStore: _, preview: _ } = _,
    _ = _(),
    { message: _, isError: _ } = _(_, _.params.messageid, _);
  return (
    _(_),
    _
      ? (0, _.jsx)(_, {
          children: _(`#Error_ErrorCommunicatingWithNetwork`),
        })
      : _.params.messageid
        ? _
          ? (0, _.jsx)(_, {
              message: _,
              preview: _,
            })
          : null
        : (0, _.jsx)(_, {
            children: _(`#MarketingMessages_NoneAvailable`),
          })
  );
}
function _(_) {
  return (0, _.jsxs)(_, {
    style: {
      maxWidth: `400px`,
      margin: `0 auto`,
    },
    children: [
      (0, _.jsxs)(_, {
        children: [_(`#Error_Generic`), ` `],
      }),
      (0, _.jsx)(_, {
        children: _.children,
      }),
    ],
  });
}
function _(_, _, _) {
  _.useEffect(() => {
    _ && _.MarkMessageSeen(_._, _ + 1, _.GetTemplateTypeForReporting());
  }, [_, _, _]);
}
function _(_) {
  let {
      message: _,
      MarketingMessagesStore: _,
      active: _,
      next: _,
      displayIndex: _,
    } = _,
    _ = _.useRef(void 0),
    _ = _.useRef(_ || _);
  if ((_(_, _ ? _ : null, _), (_ || _) && (_.current = !0), !_.current))
    return null;
  let _ = {
    enter: _,
    enterActive: _,
    enterDone: _,
    exit: _,
    exitActive: _,
    exitDone: _,
  };
  return (0, _.jsx)(_, {
    _: _,
    nodeRef: _,
    classNames: _,
    timeout: 300,
    mountOnEnter: !_,
    unmountOnExit: !_,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(`div`, {
        className: _(_, _ && `gHoA3r84Hvo-`),
        ref: _,
        children: (0, _.jsx)(_, {
          message: _,
          active: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = _({
      queryKey: [`useGamePlaytimeInfo`, _],
      queryFn: async () => _(_, _),
      enabled: !!(_ && _ != 0),
    });
  return _.isSuccess ? _.data : null;
}
async function _(_, _) {
  let _ = _.Init(_);
  (_.Body().set_steamid(_.steamid),
    _.Body().set_appids_filter([_]),
    _.Body().set_include_played_free_games(!0),
    _.Body().set_language(_.LANGUAGE));
  let _ = await _.GetOwnedGames(_, _);
  return _.Body().games().length > 0 ? _.Body().games()[0].toObject() : {};
}
function _(_) {
  return _() && _?.startsWith(`https://store.steampowered.com/`)
    ? _.replace(`https://store.steampowered.com/`, _.STORE_BASE_URL)
    : _;
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return (
    (_ = _ === null ? 0 : _ + 1),
    (0, _.useCallback)(() => {
      _(_, _._, _, _.GetTemplateTypeForReporting(), _);
    }, [_, _, _, _])
  );
}
function _(_, _, _ = !1) {
  let _ = _(_),
    _;
  _ == 1
    ? (_ = `image`)
    : _ == 2
      ? (_ = `button`)
      : _ == 3
        ? (_ = `dlc_capsule`)
        : _ == 4
          ? (_ = `header_area`)
          : _ == 5
            ? (_ = `game_capsule`)
            : _ == 6 && (_ = `partner_event`);
  let _ = _(_(_), _);
  return (
    _ && (_ = _),
    _.startsWith(`steam://`) || (_ = `steam://openurl/${_}`),
    (0, _.useCallback)(
      (_) => {
        _();
        let _ = _(_);
        _.location.href = _;
      },
      [_, _],
    )
  );
}
function _(_, _, _) {
  let _ = _({
      item_type: _(_),
      _: _,
    }),
    { data: _ } = _(_);
  return _(_(_) ?? _.STORE_BASE_URL, _);
}
var _ = _.createContext({
  prioritized_list: !1,
});
function _(_) {
  let [_, _] = _.useState(),
    _ = _(),
    _ = _.useMemo(() => (new URLSearchParams(_.search), {}), [_.search]);
  return (
    _.useEffect(() => {
      (_(`marketingmessage_config`, `application_config`), _({}));
    }, [_]),
    _
      ? (0, _.jsxs)(_.Provider, {
          value: _,
          children: [_.children, ` `],
        })
      : null
  );
}
var _ = _({
    MarketingMessageRoutes: () => _,
    default: () => _,
  }),
  _ = {
    List: () => `${_.MarketingMessages()}list/`,
    Message: (_) => `${_.MarketingMessages()}${_}`,
    MessagePreview: (_) => `${_.MarketingMessages()}preview/${_}`,
  };
function _(_) {
  let _ = _();
  return _
    ? (0, _.jsx)(_, {
        domain: `store.steampowered.com`,
        controller: `message`,
        method: `default`,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  path: `${_.List()}`,
                  children: (0, _.jsx)(_, {
                    MarketingMessagesStore: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  path: `${_.MessagePreview(`:messageid`)}`,
                  children: (0, _.jsx)(_, {
                    MarketingMessagesStore: _,
                    preview: !0,
                  }),
                }),
                (0, _.jsx)(_, {
                  path: `${_.Message(`:messageid`)}`,
                  children: (0, _.jsx)(_, {
                    MarketingMessagesStore: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    _: `${_.List()}`,
                  }),
                }),
              ],
            }),
          }),
        }),
      })
    : null;
}
var _;
function _(_) {
  return ((_ ||= new _(_)), _);
}
function _() {
  let [_, _] = _.useState(null),
    _ = _();
  return (
    _.useEffect(() => {
      _ || _(_(_));
    }, [_, _]),
    _
  );
}
export { _ as MarketingMessageRoutes, _ as default };

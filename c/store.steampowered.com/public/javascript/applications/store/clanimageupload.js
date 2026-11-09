import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _ } from "./clanimagemodels.js";
import "./modals.js";
import { _ } from "./ajaxhooks.js";
import { _ } from "./linkregionbox.js";
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
} from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = class {
    constructor() {
      _(this);
    }
    m_mapClanToImages = new Map();
    m_mapClanImageLoadPromises = new Map();
    m_imageListChangeCallback = new Map();
    m_mapClanImageLoadState = new Map();
    m_mapImageIDToResolution = new Map();
    BHasImageResolution(_) {
      return this.m_mapImageIDToResolution.has(_.imageid);
    }
    GetImageResolution(_) {
      return this.m_mapImageIDToResolution.get(_.imageid);
    }
    SetImageResolution(_, _) {
      this.m_mapImageIDToResolution.set(_.imageid, _);
    }
    GetImageListCallbackForClanAccountIDInternal(_) {
      return (
        this.m_imageListChangeCallback.has(_) ||
          this.m_imageListChangeCallback.set(_, new _()),
        this.m_imageListChangeCallback.get(_)
      );
    }
    GetImageListCallbackForClanAccountID(_) {
      return this.GetImageListCallbackForClanAccountIDInternal(_);
    }
    m_vecClanImageDragListener = [];
    AddClanImageDragListener(_) {
      this.m_vecClanImageDragListener.indexOf(_) == -1 &&
        this.m_vecClanImageDragListener.push(_);
    }
    RemoveClanImageDragListener(_) {
      let _ = this.m_vecClanImageDragListener.indexOf(_);
      _ != -1 && this.m_vecClanImageDragListener.splice(_, 1);
    }
    GetClanImageDragListener() {
      return this.m_vecClanImageDragListener;
    }
    BHasLoadedClanImages(_) {
      return this.m_mapClanToImages.has(_.GetAccountID());
    }
    async LoadClanImages(_, _, _) {
      let _ = _.GetAccountID();
      if (_ || !this.m_mapClanImageLoadPromises.has(_)) {
        let _ = this.InternalLoadClanImages(_, _, _);
        this.m_mapClanImageLoadPromises.set(_, _);
      }
      return this.m_mapClanImageLoadPromises.get(_);
    }
    async InternalLoadClanImages(_, _, _) {
      let _ = _.GetAccountID();
      if (
        (_(_ && _ != 0, `ClanSteamID missing:` + _),
        _ && (!this.m_mapClanToImages.has(_) || _))
      ) {
        let _ = {},
          _,
          _ =
            _.COMMUNITY_BASE_URL +
            `/gid/` +
            _.ConvertTo64BitString() +
            `/getimages/`;
        if (
          ((_ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
            cancelToken: _,
          })),
          _)
        ) {
          for (let _ of _.data.images) _.clanAccountID = _;
          _(() => {
            this.m_mapClanImageLoadState.set(_, {
              loaded: !0,
            }),
              this.m_mapClanToImages.set(_, _.data.images),
              this.GetImageListCallbackForClanAccountIDInternal(_).Dispatch(
                _.data.images,
              );
          });
        }
      }
      return this.m_mapClanToImages.get(_);
    }
    GetLoadState(_) {
      return this.m_mapClanImageLoadState.get(_.GetAccountID());
    }
    GetClanImages(_) {
      return this.GetClanImagesByAccount(_.GetAccountID());
    }
    GetClanImagesByAccount(_) {
      return this.m_mapClanToImages.get(_) || [];
    }
    GetFilteredClanImages(_, _) {
      let _ = _.GetClanImages(_);
      return this.GetFilteredClanImagesList(_, _);
    }
    GetFilteredClanImagesList(_, _) {
      if (_ && _.trim().length > 0) {
        _ = _.trim().toLowerCase();
        let _ = [];
        for (let _ of _)
          _.file_name && _.file_name.toLowerCase().indexOf(_) >= 0 && _.push(_);
        return _;
      }
      return _;
    }
    GetClanImageByID(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.imageid == _) : void 0;
    }
    GetClanImageByURL(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.thumb_url == _ || _.url == _) : void 0;
    }
    GetClanImageByFile(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.file_name == _.name) : void 0;
    }
    GetClanImageByImageHash(_, _) {
      let _ = _.GetAccountID(),
        _ = this.m_mapClanToImages.get(_);
      return _ ? _.find((_) => _.image_hash == _) : void 0;
    }
    async DeleteClanImageByID(_, _) {
      let _ = {
          sessionid: _(),
          imageid: _,
        },
        _ = _.GetAccountID(),
        _ = await _.default.get(
          _.COMMUNITY_BASE_URL +
            `/gid/` +
            _.ConvertTo64BitString() +
            `/deleteimage/`,
          {
            params: _,
          },
        );
      if (!_ || _.status != 200 || _.data.success != 1) return _.data;
      let _ = this.m_mapClanToImages.get(_);
      if (_) {
        let _ = _.findIndex((_, _, _) => _.imageid == _);
        _ >= 0 &&
          (_.splice(_, 1),
          this.GetImageListCallbackForClanAccountIDInternal(_).Dispatch([
            ..._,
          ]));
      }
      return _.data;
    }
    async DeleteClanImage(_, _) {
      return this.DeleteClanImageByID(_, _.imageid);
    }
  };
_([_], _.prototype, `m_mapClanToImages`, void 0),
  _([_], _.prototype, `m_mapClanImageLoadState`, void 0);
var _ = new _();
function _(_) {
  let [_, _] = (0, _.useState)(_.GetClanImagesByAccount(_));
  return _(_.GetImageListCallbackForClanAccountID(_), _), _;
}
function _(_) {
  let _ = _.InitFromClanID(_, _.EUNIVERSE),
    _ = _(`useLoadClanImages`),
    [_, _] = (0, _.useState)(() => _.BHasLoadedClanImages(_));
  return (
    (0, _.useEffect)(() => {
      let _ = _.InitFromClanID(_, _.EUNIVERSE);
      return (
        _.BHasLoadedClanImages(_) ||
          _.LoadClanImages(_, !1, _.token).then(() => _(!0)),
        () => _.cancel()
      );
    }, [_, _]),
    _
  );
}
var _ = [`app_header_capsule`, `app_main_capsule`],
  _ = [
    `sale_header`,
    `sale_logo`,
    `capsule`,
    `product_banner`,
    `product_mobile_banner`,
    `localized_title_image`,
  ],
  _ = [`takeunder_art`, `takeunder_mobile_art`],
  _ = [
    `takeover_art`,
    `takeover_mobile_art`,
    `takeover_webm_art`,
    `takeover_mp4_art`,
    `takeover_webm_mobile_art`,
    `takeover_mp4_mobile_art`,
  ],
  _ = [`marketingmessage_art`, `marketingmessage_art_2`],
  _ = [
    `marketingmessage_art_eventcapsule`,
    `marketingmessage_art_2_eventcapsule`,
  ],
  _ = [`spotlight_art_hero`],
  _ = [..._, ..._, ..._, ..._, ..._, ..._, ..._],
  _ = 622,
  _ = 1920,
  _ = 450,
  _ = 800,
  _ = 460,
  _ = 2108,
  _ = 300,
  _ = 800,
  _ = 300,
  _ = 644,
  _ = 337,
  _ = 155,
  _ = 433,
  _ = 199;
[..._];
function _(_) {
  return Array.isArray(_) ? _[0] : _;
}
function _(_) {
  return Math.min(...(Array.isArray(_) ? _ : [_]));
}
function _(_, _) {
  return _ === void 0 ? _(_) : Array.isArray(_) ? _[_] : _;
}
var _ = [1, 3, 2, 10],
  _ = [1, 3, 2],
  _ = [1, 3],
  _ = [5, 4],
  _ = {
    capsule: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    marketingmessage_art_2_eventcapsule: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    marketingmessage_art_eventcapsule: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    spotlight: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    localized_store_app_spotlight: {
      width: 1200,
      height: 260,
      rgAcceptableTypes: _,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: _,
    },
    localized_title_image: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    background: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    email_full: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    email_centered: {
      width: _,
      height: _,
      rgAcceptableTypes: _,
    },
    broadcast_left: {
      width: [_, _],
      height: [_, _],
      rgAcceptableTypes: _,
    },
    broadcast_right: {
      width: [_, _],
      height: [_, _],
      rgAcceptableTypes: _,
    },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    product_banner: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: _,
    },
    product_mobile_banner: {
      width: 500,
      height: 160,
      rgAcceptableTypes: _,
    },
    product_banner_override: {
      width: [1200, 1100],
      height: [175, 160],
      rgAcceptableTypes: _,
    },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: _,
    },
    schedule_track_art: {
      width: 196,
      height: 92,
      rgAcceptableTypes: _,
    },
    tab_bar_background: {
      width: 1500,
      height: 100,
      rgAcceptableTypes: _,
    },
    sale_logo: {
      width: [1200, 940],
      height: [460, 460],
      rgAcceptableTypes: _,
    },
    bestofyear_banner: {
      width: 1100,
      height: 160,
      rgAcceptableTypes: _,
    },
    bestofyear_banner_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: _,
    },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: _,
    },
    localized_optin_banner: {
      width: 1e3,
      height: 150,
      rgAcceptableTypes: _,
    },
    localized_marketingmessage_webm: {
      width: 570,
      height: 600,
      rgAcceptableTypes: [5],
    },
    localized_marketingmessage_mp4: {
      width: 570,
      height: 600,
      rgAcceptableTypes: [4],
    },
    localized_partnerevent_webm: {
      width: 800,
      height: 450,
      rgAcceptableTypes: [5],
    },
    localized_partnerevent_mp4: {
      width: 800,
      height: 450,
      rgAcceptableTypes: [4],
    },
    localized_subtitles: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: [6, 7],
    },
    localized_marketingmessage_poster: {
      width: 528,
      height: 297,
      rgAcceptableTypes: [1, 3],
    },
    localized_marketingmessage_background: {
      width: 570,
      height: 600,
      rgAcceptableTypes: _,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    template_asset: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: [1, 3, 2, 10, 5, 4],
    },
    user_poll_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    sale_store_capsule_header: {
      width: 920,
      height: 430,
      rgAcceptableTypes: _,
    },
    sale_store_capsule_small: {
      width: 462,
      height: 174,
      rgAcceptableTypes: _,
    },
    sale_store_capsule_main: {
      width: 1232,
      height: 706,
      rgAcceptableTypes: _,
    },
    sale_store_capsule_vertical: {
      width: 748,
      height: 896,
      rgAcceptableTypes: _,
    },
    sale_cross_promo_background: {
      width: 940,
      height: 400,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _,
    },
    spotlight_art: {
      width: 306,
      height: 260,
      rgAcceptableTypes: _,
    },
    spotlight_art_hero: {
      width: 748,
      height: 896,
      rgAcceptableTypes: _,
    },
    old_spotlight_art: {
      width: 306,
      height: 350,
      rgAcceptableTypes: _,
    },
    marketingmessage_art: {
      width: 570,
      height: 600,
      rgAcceptableTypes: _,
    },
    marketingmessage_art_2: {
      width: 570,
      height: 600,
      rgAcceptableTypes: _,
    },
    takeover_art: {
      width: 1850,
      height: 450,
      rgAcceptableTypes: _,
    },
    takeover_webm_art: {
      width: 1850,
      height: 450,
      rgAcceptableTypes: [5],
    },
    takeover_mp4_art: {
      width: 1850,
      height: 450,
      rgAcceptableTypes: [4],
    },
    takeover_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: _,
    },
    takeover_webm_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: [5],
    },
    takeover_mp4_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: [4],
    },
    takeunder_art: {
      width: 1200,
      height: 190,
      rgAcceptableTypes: _,
    },
    takeunder_mobile_art: {
      width: 500,
      height: 160,
      rgAcceptableTypes: _,
    },
    app_header_capsule: {
      width: 920,
      height: 430,
      rgAcceptableTypes: _,
    },
    app_main_capsule: {
      width: 1232,
      height: 706,
      rgAcceptableTypes: _,
    },
  };
function _(_, _, _, _) {
  let _ = null;
  if (Array.isArray(_)) {
    if (
      ((_ = _.map((_, _) => (_ === _ ? _ : void 0)).filter(
        (_) => _ !== void 0,
      )),
      _.length <= 0)
    )
      return !1;
  } else if (_ !== _) return !1;
  if (Array.isArray(_)) {
    let _ = _.map((_, _) => (_ === _ ? _ : void 0)).filter((_) => _ !== void 0);
    if (_.length <= 0 || (_?.length && !_.some((_) => _.includes(_))))
      return !1;
  } else if (_ !== _) return !1;
  return !0;
}
function _(_, _, _, _) {
  let _ = _[_];
  return _
    ? _.bDisableEnforceDimensions
      ? !!_
      : _(_, _, _.width, _.height)
    : !1;
}
function _(_, _, _) {
  let _ = _[_];
  if (!_) return !1;
  if (_.bDisableEnforceDimensions) return !0;
  if (Array.isArray(_.width)) {
    if (_.width.filter((_) => _ < _).length == _.width.length) return !1;
  } else if (_ < _.width) return !1;
  if (Array.isArray(_.height)) {
    if (_.height.filter((_) => _ < _).length == _.height.length) return !1;
  } else if (_ < _.height) return !1;
  return !0;
}
function _(_, _) {
  return _.filter((_) => _(_, _));
}
function _(_, _) {
  return _[_].rgAcceptableTypes.includes(_);
}
var _ = `A5DZIArSiNc-`,
  _ = `VdxYwmaL6i4-`,
  _ = `_3PNPGWpNrDs-`,
  _ = _(),
  _ = class extends _.Component {
    state = {
      region: {
        xPosPct: 0,
        yPosPct: 0,
        widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
        heightPct: (this.GetDestHeight() / this.props.uploadFile.height) * 100,
      },
    };
    async OnCrop() {
      let _ = this.props.uploadFile.GetCanvasImageSource();
      _ &&
        (await _(
          this.props.uploadFile,
          _,
          (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
          (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
          (this.state.region.widthPct / 100) * this.props.uploadFile.width,
          (this.state.region.heightPct / 100) * this.props.uploadFile.height,
          this.GetDestWidth(),
          this.GetDestHeight(),
          this.props.fileType,
        )),
        this.props.closeModal?.();
    }
    UpdateCrop(_, _) {
      this.setState({
        region: _,
      });
    }
    GetDestWidth() {
      let { uploadFile: _, forceResolution: _ } = this.props;
      if (_) return _.width;
      let _ = _.GetCurrentImageOption();
      if (!_) return 0;
      let _ = _[_.artworkType].width;
      return _ ? _(_) : 0;
    }
    GetDestHeight() {
      let { uploadFile: _, forceResolution: _ } = this.props;
      if (_) return _.width;
      let _ = _.GetCurrentImageOption();
      if (!_) return 0;
      let _ = _[_.artworkType].height;
      return _ ? _(_) : 0;
    }
    GetLargestBoxThatFits(_, _, _, _) {
      let _ = _,
        _ = (_ * _) / Math.max(_, 1);
      return (
        _ > _ && ((_ = _), (_ = (_ * _) / Math.max(_, 1))),
        {
          width: _,
          height: _,
        }
      );
    }
    GetPreviewWindowStyle() {
      let { region: _ } = this.state,
        _ = this.GetLargestBoxThatFits(
          this.GetDestWidth(),
          this.GetDestHeight(),
          500,
          150,
        ),
        _ = _.width,
        _ = _.height,
        _ = 1 / Math.max(_.widthPct / 100, 1e-4),
        _ = 1 / Math.max(_.heightPct / 100, 1e-4),
        _ = (this.props.uploadFile.width * _.xPosPct) / 100,
        _ = (this.props.uploadFile.height * _.yPosPct) / 100,
        _ = (_ * _) / this.props.uploadFile.width,
        _ = (_ * _) / this.props.uploadFile.height;
      return {
        width: _,
        height: _,
        backgroundPosition: `${-_ * _}px ${-_ * _}px`,
        backgroundSize: `${100 * _}% ${100 * _}%`,
        backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
      };
    }
    render() {
      let _ = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
        _ = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
        _ = this.GetLargestBoxThatFits(
          this.props.uploadFile.width,
          this.props.uploadFile.height,
          800,
          500,
        );
      return (0, _.jsx)(_, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, _.jsxs)(`div`, {
          className: _(`DialogContent`, `_DialogCenterVertically`),
          children: [
            (0, _.jsx)(_, {
              children: _(
                `#ImageUpload_CropModalTitleDims`,
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, _.jsx)(`div`, {
              className: _(`DialogBodyText`),
              children: _(`#ImageUpload_CropModalDescription`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              style: {
                width: _.width,
                height: _.height,
              },
              children: [
                (0, _.jsx)(`img`, {
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, _.jsx)(_, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: _,
                  heightMinPct: _,
                  widthPct: _,
                  heightPct: _,
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#ImageUpload_CropPreview`),
                }),
                (0, _.jsx)(`div`, {
                  style: this.GetPreviewWindowStyle(),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              onClick: this.OnCrop,
              children: _(`#ImageUpload_CropAndContinue`),
            }),
          ],
        }),
      });
    }
  };
_([_], _.prototype, `OnCrop`, null), _([_], _.prototype, `UpdateCrop`, null);
async function _(_, _, _, _, _, _, _, _, _) {
  return new Promise((_, _) => {
    let _ = _(_);
    if (!_) {
      _(`Invalid format provided`);
      return;
    }
    let _ = document.createElement(`canvas`);
    (_.width = _),
      (_.height = _),
      _.getContext(`2d`)?.drawImage(_, _, _, _, _, 0, 0, _, _),
      _.toBlob((_) => {
        let _ = _.toDataURL(_);
        _ !== 3 && _.startsWith(`data:image/png`)
          ? _(`Unable to encode into the requested file format`)
          : _
            ? ((_.file = _(_, _.filename)),
              (_.width = _),
              (_.height = _),
              (_.dataUrl = _),
              (_.uploadTime = Date.now()),
              (_.bCropped = !0),
              _())
            : _(`Unable to apply crop into image`);
      });
  });
}
function _(_) {
  switch (_) {
    case 3:
      return `image/png`;
    case 1:
      return `image/jpeg`;
  }
}
function _(_) {
  if (
    (_.indexOf(`?`) > 0 && (_ = _.split(`?`)[0]),
    _.endsWith(`.jpg`) || _.endsWith(`.jpeg`))
  )
    return 1;
  if (_.endsWith(`.png`)) return 3;
  if (_.endsWith(`.gif`)) return 2;
  if (_.endsWith(`.mp4`)) return 4;
  if (_.endsWith(`.webm`)) return 5;
  if (_.endsWith(`.vtt`)) return 6;
  if (_.endsWith(`.srt`)) return 7;
  if (_.endsWith(`.webp`)) return 10;
}
function _(_) {
  return _ == `waiting` || _ == `uploading` || _ == `processing`;
}
var _ = class {
  m_originalSize = {
    width: 0,
    height: 0,
  };
  m_originalDataUrl = ``;
  dataUrl = void 0;
  width = 0;
  height = 0;
  status = `pending`;
  message = ``;
  language = void 0;
  file;
  filename;
  uploadTime;
  fileType;
  constructor(_, _, _, _, _) {
    _(this),
      (this.file = _),
      (this.filename = _),
      (this.fileType = _(_) ?? 0),
      (this.language = _),
      (this.uploadTime = Date.now()),
      (this.status = `pending`),
      (this.m_originalSize = _),
      (this.height = _.height),
      (this.width = _.width),
      (this.m_originalDataUrl = _),
      (this.dataUrl = _);
  }
  ResetImage() {
    (this.height = this.m_originalSize.height),
      (this.width = this.m_originalSize.width),
      (this.dataUrl = this.m_originalDataUrl);
  }
  GetImageOptionLabel() {}
};
_([_], _.prototype, `dataUrl`, void 0),
  _([_], _.prototype, `width`, void 0),
  _([_], _.prototype, `height`, void 0),
  _([_], _.prototype, `status`, void 0),
  _([_.ref], _.prototype, `message`, void 0),
  _([_], _.prototype, `language`, void 0);
var _ = 960,
  _ = 311,
  _ = 480,
  _ = 156,
  _ = class extends _ {
    m_rgImageOptions;
    m_currentImageOption = void 0;
    m_currentImageOptionKey = void 0;
    constructor(_, _, _, _, _, _) {
      super(_, _, _, _, _), _(this), (this.m_rgImageOptions = _);
    }
    IsValidAssetType(_, _) {
      let _ = 0,
        _ = 0,
        _ = !1,
        _ =
          !this.m_rgImageOptions ||
          this.m_rgImageOptions.length === 0 ||
          this.m_rgImageOptions.some(
            (_) => _.sKey == this.GetCurrentImageOption()?.sKey,
          );
      if (_) (_ = _.width), (_ = _.height), (_ = !0);
      else if (this.GetCurrentImageOption()) {
        let _ = _[this.GetCurrentImageOption().artworkType];
        _ &&
          ((_ = _.width), (_ = _.height), (_ = !_.bDisableEnforceDimensions));
      }
      let _ = this.width >= _(_) && this.height >= _(_),
        _ = _ ? _(this.width, this.height, _, _) : _,
        _ = _ && _ != this.fileType,
        _ =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? _(
                this.fileType,
                this.m_rgImageOptions?.map((_) => _.artworkType) || [],
              ).length == 0
            : !1,
        _ = !!_(this.fileType),
        _ = ``,
        _ = !1,
        _;
      return (
        _
          ? _
            ? (_ = _(`#ImageUpload_InvalidFileType`))
            : _
              ? (_ = _(`#ImageUpload_InvalidFormat`, _(_) ?? ``))
              : !_ && !_
                ? (_ = _(`#ImageUpload_InvalidResolution`, _(_), _(_)))
                : _
                  ? !_ && _
                    ? ((_ = _(`#ImageUpload_InvalidDimensions`, _(_), _(_))),
                      (_ = !0))
                    : ((Array.isArray(_) && this.width != _(_)) ||
                        (Array.isArray(_) && this.height != _(_))) &&
                      ((_ ??= []),
                      _.push(_(`#ImageUpload_PreferredDimension`, _(_), _(_))))
                  : (_ = _(`#ImageUpload_TooSmall`, _(_), _(_)))
          : (_ = _(`#ImageUpload_InvalidFormatSelected`)),
        {
          error: _,
          warnings: _,
          needsCrop: _,
          match: this.GetCurrentImageOption(),
        }
      );
    }
    BSupportsLanguages() {
      return !0;
    }
    ComputeDefaultImageOption() {
      if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0) return;
      let _ = _(
          this.fileType,
          this.m_rgImageOptions?.map((_) => _.artworkType),
        ),
        _ = _(this.width, this.height, _, !1);
      if ((_ === void 0 && (_ = _(this.width, this.height, _, !0)), _)) {
        let _ = this.m_rgImageOptions.find(
          (_) =>
            _.artworkType == _ &&
            (!_.bEnforceDimensions ||
              (_.width == this.width && _.height == this.height)),
        );
        if (_) return _;
      }
      return this.m_rgImageOptions[0];
    }
    get ImageOptions() {
      return this.m_rgImageOptions;
    }
    GetCurrentImageOptionKey() {
      return this.m_currentImageOptionKey;
    }
    GetCurrentImageOption() {
      return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
    }
    SetCurrentImageOption(_) {
      (this.m_currentImageOption = _), (this.m_currentImageOptionKey = _?.sKey);
    }
  };
_([_], _.prototype, `m_currentImageOption`, void 0),
  _([_], _.prototype, `m_currentImageOptionKey`, void 0);
var _ = class extends _ {
  bCropped = !1;
  localizedImageGroupPrimaryImage;
  media;
  constructor(_, _, _, _, _, _, _, _) {
    super(_, _, _, _, _, _),
      _(this),
      (this.media = _),
      (this.localizedImageGroupPrimaryImage = _);
  }
  IsValidAssetType(_, _) {
    return (
      (_ ??= this.localizedImageGroupPrimaryImage?.file_type),
      super.IsValidAssetType(_, _)
    );
  }
  GetCanvasImageSource() {
    return this.media;
  }
  BIsOriginalMinimumDimensions(_) {
    return _(this.media?.width ?? 0, this.media?.height ?? 0, _.artworkType);
  }
  FileTypeMatchesImageTypes(_) {
    return _(this.fileType, _.artworkType);
  }
  BIsVideo() {
    return _.includes(this.fileType);
  }
  GetResizeDimension() {
    return _(this.GetCurrentImageOption()?.artworkType);
  }
};
_([_], _.prototype, `bCropped`, void 0);
function _(_) {
  if (_ === `background`)
    return [
      {
        width: _,
        height: _,
      },
      {
        width: _,
        height: _,
      },
    ];
  if (_ === `capsule` || _ === `spotlight`)
    return [
      {
        width: _(_[_].width) / 2,
        height: _(_[_].height) / 2,
      },
    ];
}
function _(_, _, _, _ = !1) {
  if (_) {
    for (let _ of _) if (_ ? _(_, _, _) : _(_, _, _)) return _;
  }
}
var _ = class {};
function _(_, _, _) {
  let _ = _.filter((_) => {
    let _ = _.IsValidAssetType(_, _);
    return _.status === `pending` && !_.error && !_.needsCrop;
  });
  return (
    _.forEach((_) => {
      (_.status = `waiting`), (_.message = ``);
    }),
    _
  );
}
async function _(_, _, _, _, _) {
  let _ = _(_, _, _),
    _ = [];
  for (let _ of _) {
    _.status = `uploading`;
    let _ = await _(_, _.filename, _.language ?? -1, _);
    (_.status = _.bSuccess ? `success` : `failed`),
      (_.message = !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ``),
      _.push({
        bSuccess: _.bSuccess,
        image: _,
        uploadResult: _.result,
      });
  }
  return _;
}
async function _(_, _, _, _, _, _) {
  let _ = _(_, _, _),
    _ = [],
    _ = 0,
    _ = async () => {
      for (; _ < _.length; ) {
        let _ = _++,
          _ = _[_];
        _.status = `uploading`;
        let _ = await _(_, _.filename, _.language ?? -1, _);
        (_.status = _.bSuccess ? `success` : `failed`),
          (_.message = !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ``),
          (_[_] = {
            image: _,
            uploadResult: _,
          });
      }
    },
    _ = Array.from(
      {
        length: Math.floor(_),
      },
      () => _(),
    );
  return (
    await Promise.all(_),
    _.map((_) => ({
      bSuccess: _.uploadResult.bSuccess,
      image: _.image,
      uploadResult: _.uploadResult.result,
    }))
  );
}
var _ = class extends _ {
  m_cancel = void 0;
  async UploadAllImages(_, _) {
    this.m_cancel = _.default.CancelToken.source();
    let _ = this.BGetUploadsAreInSerial() ? 1 : 4,
      _,
      _ = this.UploadSingleImage.bind(this);
    return (
      (_ =
        _ > 1
          ? await _(this.GetUploadImages(), _, _, _, _, this.m_cancel.token)
          : await _(this.GetUploadImages(), _, _, _, this.m_cancel.token)),
      _
    );
  }
  CancelAllUploads() {
    this.m_cancel?.cancel(_(`#ImageUpload_CancelRequest`));
  }
};
function _(_, _, _) {
  if (((_ == null || _ == null) && (_ = _), !_ || _.length === 0)) return _;
  for (let _ of _) if (_.IsELanguageValidInRealm(_, _)) return _;
  for (let _ of _) if (_.IsELanguageValidInRealm(_, _)) return _;
  return _.includes(_.k_ESteamRealmGlobal) ? 0 : 29;
}
function _(_, _ = 0) {
  let _ = _.lastIndexOf(`.`);
  _ != -1 && (_ = _.slice(0, _).toLowerCase());
  let _ = null,
    _ = 0;
  _.endsWith(`korean`) && ((_ = 4), (_ = 6));
  for (let _ = 0; _ < 32; ++_) {
    let _ = _(_);
    if (_.length <= _) continue;
    if (_.endsWith(_) && _.length > _.length + 2) {
      let _ = _[_.length - _.length - 1];
      /\p{Alphabetic}|\p{Number}/u.test(_) || ((_ = _), (_ = _.length));
    }
    let _ = _(_);
    _.length <= _ || (_.endsWith(_) && ((_ = _), (_ = _.length)));
  }
  return {
    language: _ ?? _,
    baseFilename:
      _ > 0
        ? ((_) => _.replace(/[\s_-]+$/g, ``))(_.substring(0, _.length - _))
        : _,
  };
}
function _(_, _, _) {
  let _ = _(_.width, _),
    _ = _(_.height, _);
  return {
    sKey: `${_}_${_}x${_}`,
    width: _,
    height: _,
    bEnforceDimensions: !_.bDisableEnforceDimensions,
    artworkType: _,
    bHiddenFromDropdown: _ === `hero`,
    bDeprecated: (_ ?? 0) >= 1,
    fnGetLabelText() {
      return this.artworkType == `spotlight`
        ? _(`#EventEditor_ArtworkType_store_spotlight`)
        : _(`#EventEditor_ArtworkType_` + this.artworkType);
    },
  };
}
function _(_) {
  return _?.flatMap((_) => {
    let _ = _[_];
    if (
      (_(!!_, `Artwork Type not in Map ${_}`),
      typeof _.width == `number` && typeof _.height == `number`)
    )
      return [_(_, _)];
    {
      let _ = Math.max(
        Array.isArray(_.width) ? _.width.length : 1,
        Array.isArray(_.height) ? _.height.length : 1,
      );
      return Array.from(
        {
          length: _,
        },
        (_, _) => _(_, _, _),
      );
    }
  });
}
var _ = class extends _ {
  m_filesToUpload = _.array();
  m_filesCompleted = _.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(_, _, _, _) {
    super(),
      _(this),
      (this.m_clanSteamID = _),
      (this.m_rgImageOptions = _(_)),
      (this.m_localizedImageGroupPrimaryImage = _),
      (this.m_clanImagesV2 = _ ?? !1);
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(_, _ = 0) {
    let { language: _ } = _(_.name, _);
    return this.AddImageForLanguage(_, _);
  }
  async AddImageForLanguage(_, _) {
    if (!_(_.type) && !(_.is_support && _(_.type))) return !1;
    let _ = await _(_, _(_.type));
    if (!_) return !1;
    let _ = new _(
      _,
      _.name,
      _,
      this.m_rgImageOptions,
      _.src,
      _(_),
      _,
      this.m_localizedImageGroupPrimaryImage,
    );
    return (this.m_filesToUpload = [...this.m_filesToUpload, _]), !0;
  }
  async AddExistingClanImage(_, _ = 0) {
    let _ = _.GetHashAndExt(_);
    if (!_) return !1;
    let _ = _.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, _),
      _ = await (0, _.default)({
        url: _,
        method: `GET`,
        responseType: `blob`,
      }),
      _ = _(_.data, _.file_name);
    return await this.AddImage(_, _);
  }
  DeleteUploadImageByIndex(_) {
    this.m_filesToUpload.splice(_, 1),
      (this.m_filesToUpload = [...this.m_filesToUpload]);
  }
  DeleteUploadImage(_) {
    let _ = this.m_filesToUpload.findIndex(
      (_) => _.file == _.file && _.uploadTime == _.uploadTime,
    );
    _ >= 0 && this.DeleteUploadImageByIndex(_);
  }
  ClearImages() {
    this.m_filesToUpload = _.array();
  }
  GetFilesUploaded() {
    return this.m_filesCompleted;
  }
  GetLastErrorFile() {
    return this.m_lastError;
  }
  GetCompletedFiles() {
    return this.m_filesCompleted.length;
  }
  GetTotalFiles() {
    return this.m_filesToUpload.length;
  }
  GetFilesToUpload() {
    return this.m_filesToUpload.map((_) => _.file);
  }
  GetUploadImages() {
    return this.m_filesToUpload;
  }
  BHasError() {
    return this.m_lastError != null;
  }
  BAllDone() {
    return (
      this.m_filesCompleted.length > 0 &&
      this.m_filesCompleted.length == this.m_filesToUpload.length
    );
  }
  BIsFileCompleted(_) {
    return this.m_filesCompleted.indexOf(_) != -1;
  }
  RetryAllFailedUploads() {
    this.CancelAllUploads(), this.UploadAllImages();
  }
  async handleUploadRefresh(_) {
    await _.LoadClanImages(this.m_clanSteamID, !0, _);
  }
  BGetUploadsAreInSerial() {
    return !1;
  }
  async UploadSingleImage(_, _, _, _) {
    let _ = _.file,
      _ = _.GetCurrentImageOption(),
      _ = _.GetResizeDimension(),
      _ = new FormData();
    _.append(`clanimage`, _, _),
      _.append(`sessionid`, _()),
      this.m_clanImagesV2 && _.append(`clan_images_v2`, `1`),
      _?.artworkType && _.append(`arttype`, _.artworkType),
      _ &&
        _.length > 0 &&
        _.append(`resize`, _.map((_) => _.width + `x` + _.height).join(`,`));
    let _ = `/uploadimage/`,
      _ = this.m_localizedImageGroupPrimaryImage;
    _ &&
      ((_ = `/ajaxuploadlocalizedimage/`),
      _.append(`origimagehash`, _.image_hash),
      _.thumbnail_hash && _.append(`thumbhash`, _.thumbnail_hash),
      _.append(`extension`, `` + _.file_type),
      _.append(`language`, `` + _));
    let _ = _.split(`.`).pop()?.toLocaleLowerCase();
    (_ == `webm` || _ == `mp4`) &&
      (_.append(`video_width`, `` + _.width),
      _.append(`video_height`, `` + _.height));
    let _ =
        _.COMMUNITY_BASE_URL +
        `/gid/` +
        this.m_clanSteamID.ConvertTo64BitString() +
        _,
      _ = {
        cancelToken: _,
        withCredentials: !0,
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      },
      _,
      _ = !0;
    try {
      (_ = await _.default.post(_, _, _)), this.m_filesCompleted.push(_);
    } catch (_) {
      (_ = !1),
        (this.m_lastError = {
          file: _,
          status: _.response ? _.response.status : 500,
          message: _(_).strErrorMsg,
        }),
        (_ = _.response);
    }
    return (
      _ || (await this.handleUploadRefresh(_)),
      {
        bSuccess: _,
        result: _.data,
      }
    );
  }
};
_([_], _.prototype, `m_filesToUpload`, void 0),
  _([_], _.prototype, `m_filesCompleted`, void 0),
  _([_], _.prototype, `m_lastError`, void 0),
  _([_], _.prototype, `AddImage`, null),
  _([_], _.prototype, `AddExistingClanImage`, null),
  _([_], _.prototype, `DeleteUploadImageByIndex`, null),
  _([_], _.prototype, `DeleteUploadImage`, null),
  _([_], _.prototype, `ClearImages`, null);
var _ = class extends _ {
  constructor(_, _, _) {
    super(_, _, _, !1);
  }
};
async function _(_, _, _, _, _) {
  let _ =
      _.COMMUNITY_BASE_URL +
      `/gid/` +
      _.ConvertTo64BitString() +
      `/resizeimage/`,
    _ = new FormData();
  return (
    _.append(`imagehash`, _),
    _.append(`extension`, _),
    _.append(`resize`, _.map((_) => _.width + `x` + _.height).join(`,`)),
    _.append(`sessionid`, _()),
    (
      await _.default.post(_, _, {
        cancelToken: _,
      })
    ).data.count
  );
}
function _(_, _, _) {
  let _ = _(_ instanceof Array ? _ : [_]),
    _ = _.ConvertTo64BitString();
  return _.useMemo(() => new _(_, _, _), [_, _]);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

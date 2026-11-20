function _() {
  let _, _;
  return {
    promise: new Promise((_, _) => {
      ((_ = _), (_ = _));
    }),
    resolve: _,
    reject: _,
  };
}
function _(_, _, _, _) {
  let { tagid: _, top_n_sellers: _, store_filter_json: _ } = _,
    _ = _.min_discount_percent ?? 1,
    _ = !!_.include_packages,
    _ = !!_.include_bundles,
    _ = !!_.include_dlc;
  return {
    queryKey: [
      `DiscountedItems`,
      _ ?? 0,
      _ ?? 0,
      _ ?? ``,
      _,
      _,
      _,
      _,
      _,
      _.country,
    ],
    queryFn: async () =>
      (
        await _(`DiscountedItems`, _, _, {
          start: 0,
          count: _,
          sort: 10,
          filters: {
            released_only: !0,
            type_filters: {
              include_games: !0,
              include_packages: _,
              include_bundles: _,
              include_dlc: _,
            },
            price_filters: {
              min_discount_percent: _,
            },
            tagids_must_match: _
              ? [
                  {
                    tagids: [_],
                  },
                ]
              : void 0,
            regional_top_n_sellers: _,
            store_page_filter: _
              ? {
                  store_filters: [
                    {
                      filter_json: _,
                    },
                  ],
                }
              : void 0,
          },
        })
      ).rgItemIDs,
    staleTime: 6e5,
  };
}
var _ = 500,
  _ = 100;
function _(_, _, _, _, _, _ = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, _ ?? 0, _, _.country, _],
    queryFn: async () => {
      if (!_) return [];
      let _ = await _.fetchQuery(_(_, _)),
        _ = Array.from(_).slice(0, _);
      return _.length
        ? (
            await _(`SaleTechOwnedDLCOnSale`, _, _, {
              start: 0,
              count: _,
              sort: 10,
              filters: {
                released_only: !0,
                type_filters: {
                  include_dlc: _ === `dlc`,
                  include_music: _ === `music`,
                },
                price_filters: {
                  min_discount_percent: _,
                },
                parent_appids: _,
              },
            })
          ).rgItemIDs.flatMap((_) => (`appid` in _ ? [_.appid] : []))
        : [];
    },
    staleTime: 6e5,
  };
}
var _ = 3;
function _(_, _) {
  if (!_.is_coming_soon()) return !1;
  if (!_.min_discount_percent) return !0;
  let _ = _.best_purchase_option(!1);
  return !!_?.packageid() && (_?.discount_pct() ?? 0) >= _.min_discount_percent;
}
function _(_, _, _, _) {
  let { store_filter_json: _, min_discount_percent: _ } = _;
  return {
    queryKey: [`TopWishlistedComingSoon`, _ ?? ``, _ ?? 0, _, _.country],
    queryFn: async () => {
      let _ = new Map();
      return (
        await _(
          `TopWishlistedComingSoon`,
          _,
          _,
          {
            start: 0,
            count: _ * _,
            sort: 23,
            filters: {
              coming_soon_only: !0,
              exclude_from: [2, 4],
              type_filters: {
                include_games: !0,
                include_dlc: !0,
                include_software: !0,
                include_music: !0,
                include_hardware: !0,
              },
              price_filters: _
                ? {
                    min_discount_percent: _,
                  }
                : void 0,
              store_page_filter: _
                ? {
                    store_filters: [
                      {
                        filter_json: _,
                      },
                    ],
                  }
                : void 0,
            },
          },
          {
            data_request: {},
            cacheStoreItemData: (_) => {
              let _ = _({
                item_type: _.item_type(),
                _: _._(),
              });
              _ && _.set(_(_), _);
            },
          },
        )
      ).rgItemIDs
        .filter((_) => {
          let _ = _.get(_(_));
          return _ !== void 0 && _(_, _);
        })
        .slice(0, _);
    },
    staleTime: 6e5,
  };
}
async function _(_, _) {
  _.set(`origin`, location.origin);
  let _ = `${_.STORE_BASE_URL}saleaction/${_}?${_}`,
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success != 1) throw Error(`${_} answered EResult ${_?.success}`);
  return _;
}
async function _(_) {
  let _ = await _(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({
      compatDevice: _,
    }),
  );
  if (!_.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return _.list;
}
var _ = 3e5;
function _(_) {
  return [`PopularCompatList`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    staleTime: _,
    retry: !1,
  };
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgWishlist || [];
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 6e5,
  };
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 || _ == null ? void 0 : _.has(_);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return (_, _) => {
    _.setQueryData(_(_), (_) => {
      if (!_) return;
      let _ = new Set(_);
      if (_) for (let _ of _) _.delete(_);
      if (_) for (let _ of _) _.add(_);
      return _;
    });
  };
}
function _(_) {
  return [`AccountWishlistApps`, _ ?? 0];
}
var _ = _(_());
function _(_) {
  if (_.default.isCancel(_))
    return {
      strErrorMsg: `Action Cancelled:` + _,
      errorCode: 52,
    };
  if (_ == null)
    return {
      strErrorMsg: `Unknown Error: ` + _,
      errorCode: 2,
    };
  if (
    _.response !== void 0 &&
    _.response.data &&
    typeof _.response.data == `object`
  ) {
    if (`msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.msg,
        errorCode: _.response.data.success,
      };
    if (`err_msg` in _.response.data)
      return {
        strErrorMsg: _.response.data.err_msg,
        errorCode: _.response.data.success,
      };
    if (`message` in _.response.data)
      return {
        strErrorMsg: _.response.data.message,
        errorCode: _.response.data.success,
      };
    if (`success` in _.response.data)
      return {
        strErrorMsg: `error code: ` + _.response.data.success,
        errorCode: _.response.data.success,
      };
  } else if (typeof _.data == `object` && _.data) {
    if (`msg` in _.data)
      return {
        strErrorMsg: _.data.msg,
        errorCode: _.data.success,
      };
    if (`err_msg` in _.data)
      return {
        strErrorMsg: _.data.err_msg,
        errorCode: _.data.success,
      };
    if (`message` in _.data)
      return {
        strErrorMsg: _.data.message,
        errorCode: _.data.success,
      };
    if (`success` in _.data)
      return {
        strErrorMsg: `error code: ` + _.data.success,
        errorCode: _.data.success,
      };
  } else if (_.success !== void 0 && _.msg !== void 0)
    return {
      strErrorMsg: _.msg,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.message !== void 0)
    return {
      strErrorMsg: _.message,
      errorCode: _.success,
    };
  else if (_.success !== void 0 && _.err_msg !== void 0)
    return {
      strErrorMsg: _.err_msg,
      errorCode: _.success,
    };
  else if (typeof _ == `string` && _.length > 1024)
    (console.groupCollapsed(`GetMsgAndErrorCodeFromResponse cannot parse: `),
      console.warn(_),
      console.groupEnd());
  else if (typeof _ == `object` && _ instanceof _)
    return {
      strErrorMsg: `` + _.GetErrorMessage(),
      errorCode: _.GetEResult(),
    };
  else console.warn(`GetMsgAndErrorCodeFromResponse cannot parse: `, _);
  return typeof _ == `object` && `status` in _
    ? {
        strErrorMsg:
          `Unknown Error: ` +
          _ +
          `
Status Code:` +
          _.status,
        errorCode: 2,
      }
    : {
        strErrorMsg: `Unknown Error: ` + _,
        errorCode: 2,
      };
}
var _ = _(_(), 1);
function _(_) {
  return (0, _.useMemo)(() => _(_), [_?._, _?.type]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_) {
  if (_ && _._) {
    if (!_.type)
      return {
        appid: _._,
      };
    switch (_.type) {
      case `sub`:
        return {
          packageid: _._,
        };
      case `bundle`:
        return {
          bundleid: _._,
        };
      default:
        return {
          appid: _._,
        };
    }
  }
}
function _(_) {
  if (`appid` in _)
    return {
      _: _.appid,
      type: `game`,
    };
  if (`packageid` in _)
    return {
      _: _.packageid,
      type: `sub`,
    };
  if (`bundleid` in _)
    return {
      _: _.bundleid,
      type: `bundle`,
    };
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
var _ = _(),
  _ =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  _ = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  _ = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ];
_.filter((_) => !_.includes(_));
var _ = void 0;
function _(_) {
  return _ ? _.map((_) => (_ == `*` ? `\\*` : _)).join(`|`) : ((_ ||= _(_)), _);
}
function _(_, _ = null, _ = ` `) {
  let _ = RegExp(`\\[(` + _(_) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return _.replace(_, _);
}
function _(_, _ = null, _ = ``) {
  let _ = `\\[\\/?(?:` + _(_) + `){1,}.*?]`;
  return _.replace(new RegExp(_, `gi`), _);
}
var _ = `{STEAM_CLAN_IMAGE}`,
  _ = `{STEAM_CLAN_LOC_IMAGE}`,
  _ = `{STEAM_APP_IMAGE}`;
function _(_) {
  let _ = _.toLowerCase();
  if (_.endsWith(`.jpg`) || _.endsWith(`.jpeg`)) return `image/jpeg`;
  if (_.endsWith(`.png`)) return `image/png`;
  if (_.endsWith(`.gif`)) return `image/gif`;
  if (_.endsWith(`.mp4`)) return `video/mp4`;
  if (_.endsWith(`.webm`)) return `video/webm`;
  if (_.endsWith(`.srt`)) return `text/srt`;
  if (_.endsWith(`.vtt`)) return `text/vtt`;
  if (_.endsWith(`.webp`)) return `image/webp`;
}
function _(_) {
  switch (_) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function _(_) {
  let _ = _(),
    _ = new Image();
  return (
    (_.onload = () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadImage failed to load the image, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  let _ = _(),
    _ = document.createElement(`video`);
  return (
    (_.preload = `metadata`),
    _.addEventListener(`loadedmetadata`, () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadVideo failed to load the video, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  return _.startsWith(`image/`);
}
function _(_) {
  return _.startsWith(`video/`);
}
async function _(_, _) {
  if (_) return _(URL.createObjectURL(_));
  {
    let _ = _(),
      _ = new FileReader();
    ((_.onload = () => _.resolve(_.result ?? void 0)),
      (_.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          _.error,
        ),
          _.resolve(void 0));
      }),
      _.readAsDataURL(_));
    let _ = await _.promise;
    return _ ? _(_.toString()) : void 0;
  }
}
function _(_) {
  return _
    ? _ instanceof HTMLVideoElement
      ? {
          width: _.videoWidth,
          height: _.videoHeight,
        }
      : {
          width: _.width,
          height: _.height,
        }
    : {
        width: 0,
        height: 0,
      };
}
function _(_, _) {
  return `${_}/${_}`;
}
var _ = _.createContext({});
function _(_) {
  let { resolutions: _, children: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
RegExp(`${_.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function _(_, _, _ = 0) {
  return _(_, _, _, _());
}
function _(_, _, _ = 0, _) {
  if (!_ || _.length == 0) return null;
  if (_?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return _.ReplacementTokenToClanImageURL(_);
  if (_?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let _ = _.GetBaseURL(),
      _ = _.substring(_.length + 1),
      _ = parseInt(_.substring(0, _.indexOf(`/`))),
      _ = _.substring(_.indexOf(`/`) + 1),
      _ = _.GenerateURLFromHashAndExt(_, _);
    if (_?.[_(_, _)] === !1) return _;
    let _ = _.GetLocalizedClanImageFileNames(_, _).map(
      (_) => _ + _ + `/` + _ + `?t=` + _,
    );
    return (_.push(_), _);
  }
  return _;
}
var _ = {
    GetBaseURL() {
      return `${_.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${_.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(_) {
      return (
        (_ = _.replace(_, this.GetBaseURL())), _.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(_) {
      let _ =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          _,
        );
      return _?.groups
        ? [_.groups.filename, parseInt(_.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(_) {
      return (_.file_type == null ? null : _(_.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(_) {
      return _ ? _.image_hash + this.GetExtensionString(_) : null;
    },
    GetThumbHashAndExt(_) {
      return _ ? _.thumbnail_hash + this.GetExtensionString(_) : null;
    },
    GetHashFromHashAndExt(_) {
      let _ = _.substring(_.lastIndexOf(`.`));
      return _.substring(0, _.length - _.length);
    },
    GetExtStringFromHashAndExt(_) {
      return _.substring(_.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(_, _) {
      if (_ == null) return [];
      let _ = this.GetHashFromHashAndExt(_),
        _ = this.GetExtStringFromHashAndExt(_),
        _ = [_ + `/` + _(_) + _];
      return (_ == 4 && _.push(_ + `/` + _(_(_)) + _), _);
    },
    GenerateURLFromHashAndExt(_, _, _ = _.full) {
      return this.GenerateURLFromHashAndExtAndLang(_, _, _, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(_, _, _ = _.full, _, _) {
      _ instanceof _ && (_ = _.GetAccountID());
      let _ = this.GetBaseURL(),
        _ = _ != null && _ != -1;
      if (_ == _.full && !_) return _ + _ + `/` + _;
      {
        let _ = _.substring(_.lastIndexOf(`.`)),
          _ = _.substring(0, _.length - _.length);
        return !_ || _ == 0 || _ != `localized_image_group`
          ? _ + _ + `/` + _ + _ + _
          : _ + _ + `/` + _ + `/` + _(_(_)) + _;
      }
    },
    GetHashAndExtFromURL(_) {
      let _ = this.GetBaseURL();
      return !_?.startsWith(_) ||
        ((_ = _.substring(_.length)), _.indexOf(`/`) == -1)
        ? null
        : ((_ = _.substring(_.indexOf(`/`) + 1)), _);
    },
    GenerateEditableURLFromHashAndExt(_, _, _) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        _;
      return (_ && (_ += `&lang=` + _), _);
    },
    GetMimeType(_) {
      return _(_);
    },
    async AsyncGetImageResolution(_, _, _, _, _) {
      let _ =
          _ +
          this.GetExtensionString({
            file_type: _,
          }),
        _ = this.GenerateEditableURLFromHashAndExt(_, _);
      return await this.AsyncGetImageResolutionInternal(_, _, _);
    },
    async AsyncGetImageResolutionInternal(_, _, _) {
      let _ = _(),
        _ = new Image();
      ((_.crossOrigin = `anonymous`),
        (_.onerror = (_) => {
          let _ = {
            success: 2,
          };
          (_ ||
            ((_.err_msg =
              `Load fail on url ` + _ + ` with error: ` + _(_).strErrorMsg),
            console.error(_.err_msg)),
            (_.success = 2),
            _.resolve(_));
        }),
        (_.onload = () => {
          let _ = {
            success: 2,
          };
          ((_.width = _.width),
            (_.height = _.height),
            !(_.width > 0) || !(_.height > 0)
              ? (_(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + _,
                ),
                (_.err_msg = `No resolution reported for url ` + _),
                _.resolve(_))
              : ((_.success = 1), _.resolve(_)));
        }),
        (_.src = _),
        _.token.promise.catch(() => {
          ((_.onload = () => {}),
            (_.onerror = () => {}),
            _.resolve({
              success: 52,
            }));
        }));
      let _,
        _ = new Promise((_, _) => {
          _ = setTimeout(() => _(), 1e4);
        }),
        _;
      try {
        _ = await Promise.race([_, _.promise]);
      } catch {
        _ = {
          success: 16,
          err_msg: `We timed out processing images`,
        };
      } finally {
        clearTimeout(_);
      }
      return _;
    },
    BIsClanImageVideo(_) {
      return _.file_type == 4 || _.file_type == 5;
    },
  },
  _ = (function (_) {
    return (
      (_.full = ``),
      (_.background_main = `_960x311`),
      (_.background_mini = `_480x156`),
      (_.capsule_main = `_400x225`),
      (_.spotlight_main = `_1054x230`),
      _
    );
  })({}),
  _ = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  _ = 39049601,
  _ = 45479024,
  _ = 41316928,
  _ = _.box(void 0);
function _() {
  return _.get();
}
function _(_) {
  _(() => _.set(_));
}
function _() {
  return _.get() || Math.floor(Date.now() / 1e3);
}
function _() {
  let _ = _.get();
  return _ ? new Date(_ * 1e3) : new Date();
}
var _ = _.createContext(void 0);
function _(_) {
  let [_, _] = _.useState(_.rtServerNow),
    _ = !!_.bHoldSeed;
  return (
    _.useEffect(() => {
      _ || _(void 0);
    }, [_]),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return _.useContext(_) ?? _();
}
function _(_, _, _) {
  return _ == 45559995
    ? `charts/topnewreleases/${_}`
    : _ == 45902273
      ? `charts/bestofyear/${_}`
      : _
        ? `sale/${_}`
        : `curator/${_}/sale/${_}`;
}
function _(_, _) {
  return _(_, ``, _).startsWith(`curator/`);
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            active: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            start_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_discounts: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            grouped_vote_options: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            groups: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            internal_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            localization: {
              _: 9,
              _: _,
            },
            reveal_time: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            release_date_min: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            winner_appid: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            flag: {
              _: 13,
              _: _.readEnum,
              _: _.writeEnum,
            },
            release_date_max: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_type: {
              _: 15,
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
      return `CStore_VoteDefinition`;
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
            discount: {
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
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            groupid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            group_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            app_discounts: {
              _: 3,
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
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.title || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            title: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            title_linebreak: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            title_award: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            award_description: {
              _: 4,
              _: _.readString,
              _: _.writeString,
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
      return `CStore_VoteDefinition_Localization`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            sale_appid: {
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
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            votes: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            labor_of_love_winners: {
              _: 2,
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
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            communityitemid: {
              _: 3,
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
      return `SteamAwardsUserVote`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_appid: {
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
      return `CStore_GetUserVotes_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_votes: {
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
      return `CStore_GetUserVotes_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sale_appid: {
              _: 3,
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
      return `CStore_SetVote_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_votes: {
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
      return `CStore_SetVote_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_updated: {
              _: 3,
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
      return `CSteamAwardsNomination`;
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
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.nominations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            nominations: {
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
      return `CSteamAwards_GetUserNominations_Response`;
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
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            code: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            nominated_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            source: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CSteamAwards_Nominate_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.nominations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            nominations: {
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
      return `CSteamAwards_Nominate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
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
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.played_app || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            played_app: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            suggested_events: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            suggested_apps: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            debug_query: {
              _: 4,
              _: _.readString,
              _: _.writeString,
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
      return `CSteamAwards_GetNominationRecommendations_Response`;
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
            playtime: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_gid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 3,
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
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
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
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.generate_new || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            generate_new: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
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
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            code: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetVoteDefinitions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetVoteDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.SetVote#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.SetVote = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetUserVotes#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetUserVotes = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetOtherUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetOtherUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.Nominate#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.Nominate = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`community`, `store`],
      },
    );
  }
  _.GetNominationRecommendations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetNominationShareLink#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetNominationShareLink = _;
})((_ ||= {}));
var _ = {
  bBroadcastEnabled: !1,
  broadcastChatSetting: `hide`,
  default_broadcast_title: `#Broadcast_default_title_dev`,
  localized_broadcast_title: Array(32),
  localized_broadcast_left_image: Array(32),
  localized_broadcast_right_image: Array(32),
  broadcast_whitelist: [],
};
function _(_) {
  switch (_) {
    case 29:
    case 27:
    case 2:
    case 4:
    case 5:
    case 6:
    case 8:
    case 7:
    case 9:
    case 11:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 35:
    case 25:
    case 26:
    case 31:
    case 32:
    case 1:
    case 34:
      return !0;
  }
  return !1;
}
function _(_) {
  let _ = `#PartnerEvent_` + _,
    _ = _.Localize(_);
  return _ == _ ? _.Localize(`#PartnerEvent_Other`) : _;
}
var _ = {
  bScheduleEnabled: !1,
  scheduleEntries: [],
};
_(
  [_],
  class {
    m_eventModel;
    m_entry;
    constructor(_, _) {
      ((this.m_eventModel = _), (this.m_entry = _));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
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
  let _ = _(),
    [_, _] = (0, _.useState)(() => _.viewportWidth?.value ?? 1920);
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
var _ = (function (_) {
    return ((_.Random = `r`), (_.Personalized = `p`), _);
  })({}),
  _ = 99999,
  _ = 593110,
  _ = [_, 766, 221410];
function _(_, _ = _()) {
  let _ = 60 * _.PerDay;
  return (
    _.BIsVisibleEvent(_) &&
    _.BIsOGGEvent() &&
    (_.rtime32_last_modified ?? 0) > _ - _ &&
    !_(_)
  );
}
function _(_) {
  return _.BHasTag(`mod_reviewed`) && !_.BHasTag(`mod_require_rereview`);
}
var _ = (function (_) {
  return (
    (_[(_.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
    (_[(_.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
    (_[(_.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
    (_[(_.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
    _
  );
})({});
function _(_) {
  switch (_) {
    case `links`:
      return {
        nMaxItemsPerRow: 5,
        nItemMinimumWidth: 200,
      };
    case `itemdef`:
      return {
        nMaxItemsPerRow: 5,
        nItemMinimumWidth: 200,
      };
    case `contenthubspecials`:
      return {
        nMaxItemsPerRow: 3,
        nItemMinimumWidth: 306,
      };
    default:
      return {
        nMaxItemsPerRow: 4,
        nItemMinimumWidth: 280,
      };
  }
}
var _ = `bordered`,
  _ = (function (_) {
    return (
      (_[(_.k_EStoreFilterClauseTypeOr = 0)] = `k_EStoreFilterClauseTypeOr`),
      (_[(_.k_EStoreFilterClauseTypeAnd = 1)] = `k_EStoreFilterClauseTypeAnd`),
      (_[(_.k_EStoreFilterClauseTypeStoreTag = 2)] =
        `k_EStoreFilterClauseTypeStoreTag`),
      (_[(_.k_EStoreFilterClauseTypeFeatureTag = 3)] =
        `k_EStoreFilterClauseTypeFeatureTag`),
      (_[(_.k_EStoreFilterClauseTypeLanguage = 4)] =
        `k_EStoreFilterClauseTypeLanguage`),
      (_[(_.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
        `k_EStoreFilterClauseTypeContentDescriptor`),
      (_[(_.k_EStoreFilterClauseTypePrice = 6)] =
        `k_EStoreFilterClauseTypePrice`),
      (_[(_.k_EStoreFilterClauseTypeAppType = 7)] =
        `k_EStoreFilterClauseTypeAppType`),
      (_[(_.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
        `k_EStoreFilterClauseTypeOptInRegistrationTag`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_ESaleTagFilter = 0)] = `k_ESaleTagFilter`),
      (_[(_.k_ELanguage = 1)] = `k_ELanguage`),
      (_[(_.k_EContentDescriptor = 2)] = `k_EContentDescriptor`),
      (_[(_.k_EUserPreference = 3)] = `k_EUserPreference`),
      (_[(_.k_EPrice = 4)] = `k_EPrice`),
      (_[(_.k_EAppType = 5)] = `k_EAppType`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (_[(_.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (_[(_.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (_[(_.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (_[(_.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      _
    );
  })({});
function _(_) {
  _.section_type === `crosspromotesalepage` &&
    !_.sale_page_cross_promo_sales &&
    (_.sale_page_cross_promo_event_gid ||
      _.sale_page_cross_promo_clan_account_id ||
      _.sale_page_cross_promo_featured_app_tagid) &&
    ((_.sale_page_cross_promo_sales = [
      {
        event_gid: _.sale_page_cross_promo_event_gid,
        clan_account_id: _.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: _.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete _.sale_page_cross_promo_event_gid,
    delete _.sale_page_cross_promo_clan_account_id,
    delete _.sale_page_cross_promo_featured_app_tagid);
}
function _(_) {
  return _ && !!_.show_as_carousel && !_.enable_faceted_browsing;
}
function _(_) {
  return _.carousel_rows || 1;
}
function _(_) {
  return _.cap_section_row_count && _.cap_section_row_count > 0
    ? _.cap_section_row_count
    : _.section_type == `trailercarousel`
      ? 1
      : _.cap_section_content
        ? 4
        : 0;
}
function _(_) {
  return _?.store_filter ? JSON.stringify(_.store_filter) : void 0;
}
function _(_) {
  switch (_) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
function _(_) {
  switch (_) {
    case `items`:
    case `crosspromotesalepage`:
    case `creator_list`:
      return !0;
  }
  return !1;
}
function _(_) {
  switch (_) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
    case `events`:
    case `sale_events`:
    case `contenthubspecials`:
      return !0;
  }
  return !1;
}
function _(_, _ = !1) {
  return !_ || !_(_.section_type)
    ? !1
    : _
      ? _.sale_tag_filter?.clauses?.length
        ? !0
        : !!_.smart_section
      : !!_.smart_section && _.smart_section_type != null;
}
function _(_) {
  return _(_) ? _?.smart_section_type : void 0;
}
function _(_) {
  return (
    (_.jsondata.sale_ml_recommender_delay_hours &&
      (_.startTime ?? 0) +
        _.jsondata.sale_ml_recommender_delay_hours * _.PerHour -
        new Date().getTime() / 1e3) ??
    0
  );
}
function _(_, _, _) {
  return !_.BIsNextFest() || !_(_.section_type)
    ? !1
    : _ == _.Random || _(_) > 0;
}
function _(_, _, _) {
  return !!(_.use_random_order || _(_, _, _));
}
var _ = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function _(_) {
  _.sale_sections?.forEach((_, _) => {
    ((_.localized_label &&= _(_.localized_label, 32, null)),
      _.section_type === `trailercarousel` && (_.show_as_carousel = !1),
      _(_),
      (_.sale_sections[_] = {
        ..._,
        ..._,
      }));
  });
}
var _ = (function (_) {
  return (
    (_[(_.k_ETaggedItems = 0)] = `k_ETaggedItems`),
    (_[(_.k_EContentHub = 1)] = `k_EContentHub`),
    _
  );
})({});
function _(_) {
  return {
    arrowFill: _?.sale_carousel_arrow_color,
    arrowStyle: _?.sale_carousel_arrow_style,
    breadcrumbActiveColor: _?.sale_carousel_active_breadcrumb_color,
    breadcrumbColor: _?.sale_carousel_breadcrumb_color,
    breadcrumbStyle: _?.sale_carousel_breadcrumb_style,
  };
}
var _ = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ..._,
    ..._,
  },
  _ = `old_announce_`;
function _(_, _, _) {
  let _ = (_) => _.includes(_);
  return _(`steam_award_nomination_request`)
    ? _(`#PartnerEvent_SteamAwardNominations`)
    : _(`steam_award_vote_request`)
      ? _(`#PartnerEvent_SteamAwardVoteRequest`)
      : _(`steam_game_festival_artist_statement`)
        ? _(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : _(`steam_game_festival_office_hour`)
          ? _(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : _(`steam_game_festival_broadcast`) ||
              (_.some((_) => _?.startsWith(`sale_nextfest_`)) && _ == 11)
            ? _(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : _(`vo_marketing_message`) && _
              ? _(`#PartnerEvent_MM_MajorUpdate`)
              : _(_);
}
var _ = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  _ = [20, 31, 34],
  _ = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  _ = [_.k_ESteamRealmGlobal],
  _ = [_.k_ESteamRealmChina],
  _ = [_.k_ESteamRealmGlobal, _.k_ESteamRealmChina],
  _ = [],
  _ = class _ {
    constructor() {
      _(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new _();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = _;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(_) {
      let _ = new _(),
        _ = JSON.parse(_);
      return (
        Object.assign(_, _),
        (_.name = new Map(_.name)),
        (_.description = new Map(_.description)),
        (_.vecTags = [...(_.vecTags ?? _.tags ?? [])]),
        (_.clanSteamID = new _(_.clanSteamID)),
        _(
          _.clanSteamID && _.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + _.clanSteamID.ConvertTo64BitString(),
        ),
        _.broadcaster &&
          ((_.broadcaster = new _(_.broadcaster)),
          _(
            _.broadcaster && _.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              _.broadcaster.ConvertTo64BitString(),
          )),
        _(_.jsondata),
        _
      );
    }
    static FromCClanEventData(_, _) {
      let _ = new _();
      ((_.GID = _.gid),
        (_.clanSteamID = new _(_.clan_steamid)),
        _.name.set(_, _.event_name ?? ``),
        (_.type = _.event_type),
        (_.appid = _.appid ?? 0),
        (_.startTime = _.rtime32_start_time),
        (_.endTime = _.rtime32_end_time),
        (_.nCommentCount = _.comment_count ?? 0),
        (_.creator_steamid = _.creator_steamid),
        (_.last_update_steamid = _.last_update_steamid),
        (_.jsondata = JSON.parse(_.jsondata ?? `{}`)),
        _(_.jsondata),
        (_.rtime32_last_local_modification = _.rtime32_last_modified),
        (_.visibility_state = _.published
          ? _.hidden
            ? _.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (_.createTime = _.rtime_created),
        (_.m_nBuildID = _.build_id),
        (_.m_strBuildBranch = _.build_branch),
        (_.visibilityStartTime = _.rtime32_visibility_start),
        (_.visibilityEndTime = _.rtime32_visibility_end),
        (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
        (_.featured_app_tagid = _.featured_app_tagid),
        _.broadcaster_accountid &&
          (_.broadcaster = _.InitFromAccountID(
            _.broadcaster_accountid,
            _.EUNIVERSE,
          )),
        (_.AnnouncementGID = _.announcement_body?.gid ?? `0`));
      let _ = _.clan_steamid_original;
      return (
        _
          ? (_.clanSteamIDOriginal = new _(_))
          : _.announcement_body?.clanid &&
            (_.clanSteamIDOriginal = _.InitFromClanID(
              Number(_.announcement_body.clanid),
              _.EUNIVERSE,
            )),
        (_.postTime = _.announcement_body?.posttime),
        (_.forumTopicGID = _.forum_topic_id),
        _.name.set(_, _.announcement_body?.headline ?? ``),
        _.description.set(_, _.announcement_body?.body ?? ``),
        (_.nCommentCount = _.comment_count ?? 0),
        (_.vecTags = [...(_.announcement_body?.tags ?? [])]),
        (_.forumTopicGID = _.announcement_body?.forum_topic_id),
        (_.nVotesUp = _.announcement_body?.voteupcount ?? 0),
        (_.nVotesDown = _.announcement_body?.votedowncount ?? 0),
        _
      );
    }
    toJSON(_) {
      let _ = {};
      return (
        Object.assign(_, this),
        (_.name = Array.from(this.name)),
        (_.description = Array.from(this.description)),
        (_.vecTags = Array.from(this.vecTags)),
        (_.tags = _.vecTags),
        (_.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (_.broadcaster = this.broadcaster.ConvertTo64BitString()),
        _
      );
    }
    clone(_ = !1) {
      let _ = new _();
      if (
        ((_.GID = this.GID),
        (_.AnnouncementGID = this.AnnouncementGID),
        (_.clanSteamID = this.clanSteamID),
        (_.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (_.bOldAnnouncement = this.bOldAnnouncement),
        (_.nCommentCount = this.nCommentCount),
        (_.nVotesUp = this.nVotesUp),
        (_.nVotesDown = this.nVotesDown),
        (_.forumTopicGID = this.forumTopicGID),
        (_.comment_type = this.comment_type),
        (_.gidfeature = this.gidfeature),
        (_.gidfeature2 = this.gidfeature2),
        (_.featured_app_tagid = this.featured_app_tagid),
        (_.creator_steamid = this.creator_steamid),
        (_.last_update_steamid = this.last_update_steamid),
        (_.rtime32_last_modified = this.rtime32_last_modified),
        (_.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (_.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (_.type = this.type),
        (_.appid = this.appid),
        (_.name = new Map()),
        this.name.forEach((_, _) => {
          _.name.set(_, _);
        }),
        (_.description = new Map()),
        this.description.forEach((_, _) => {
          _.description.set(_, _);
        }),
        (_.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((_, _) => {
          _.timestamp_loc_updated.set(_, _);
        }),
        (_.createTime = this.createTime ?? 0),
        (_.startTime = this.startTime),
        (_.endTime = this.endTime),
        (_.visibilityStartTime = this.visibilityStartTime),
        (_.visibilityEndTime = this.visibilityEndTime),
        (_.postTime = this.postTime),
        (_.visibility_state = this.visibility_state),
        (_.loadedAllLanguages = this.loadedAllLanguages),
        (_.bLoaded = this.bLoaded),
        (_.broadcaster = this.broadcaster
          ? new _(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (_.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (_.vecTags = []),
        _
          ? ((_.m_nBuildID = this.m_nBuildID),
            (_.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((_) => _.vecTags.push(_)))
          : this.vecTags.forEach((_) => {
              _.includes(_) && _.vecTags.push(_);
            }),
        _.jsondata.email_setting)
      ) {
        let _ = 100;
        for (let _ of _.jsondata.email_setting.sections)
          _.unique_id || ((_.unique_id = `email_section_${_}`), _++);
      }
      return _;
    }
    GetLastReferencedSaleDayFromCapsules(_, _) {
      let _ = _;
      return (
        _?.forEach((_) => {
          _.visibility_index !== void 0 &&
            (_ =
              _ === void 0
                ? _.visibility_index
                : Math.max(_, _.visibility_index));
        }),
        _
      );
    }
    GetLastReferencedSaleDay() {
      let _;
      for (let _ of this.GetSaleSections())
        if (_.section_type === `tabs`) {
          if ((_.tabs?.length ?? 0) > 0)
            for (let _ of _.tabs ?? [])
              _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
        } else _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (_ == null || _ < (this.jsondata.sale_num_headers ?? 0)) &&
          (_ = this.jsondata.sale_num_headers),
        _
      );
    }
    GetDayIndexFromEventStart(_ = _()) {
      let _ = 0;
      (this.startTime !== void 0 &&
        _ >= this.startTime &&
        (_ = Math.floor((_ - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (_ = this.m_overrideCurrentDay));
      let _ = this.GetLastReferencedSaleDay() || 0;
      return Math.min(_, _);
    }
    GetNameWithFallback(_) {
      let _ = _.GetELanguageFallback(_);
      return this.name.get(_) || this.name.get(_);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(_) {
      return !!(
        (this.BInRealmGlobal() &&
          _.IsELanguageValidInRealm(_, _.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          _.IsELanguageValidInRealm(_, _.k_ESteamRealmChina))
      );
    }
    GetImgArray(_) {
      let _ = [];
      if (
        ((_ === `background` || _ == `localized_title_image`) &&
          (_ = this.jsondata.localized_title_image),
        _ === `capsule`)
      )
        _ = this.jsondata.localized_capsule_image;
      else if (_ === `spotlight`) _ = this.jsondata.localized_spotlight_image;
      else if (_ === `email_full` || _ === `email_centered`)
        _ = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (_ === `broadcast_left`)
        _ = this.jsondata.localized_broadcast_left_image;
      else if (_ === `broadcast_right`)
        _ = this.jsondata.localized_broadcast_right_image;
      else if (_ === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let _ = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          _ = this.jsondata.localized_per_day_sales_header?.[_];
        } else _ = this.jsondata.localized_sale_header;
      } else
        _ === `sale_logo`
          ? (_ = this.jsondata.localized_sale_logo)
          : _ === `sale_overlay`
            ? (_ = this.jsondata.localized_sale_overlay)
            : _ === `sale_cross_promo_logo`
              ? (_ = this.jsondata.localized_sale_cross_promo_logo_image)
              : _.includes(_)
                ? (_ = this.fnGetLocalizedGroupImages?.())
                : _ === `product_banner`
                  ? (_ = this.jsondata.localized_sale_product_banner)
                  : _ === `product_mobile_banner`
                    ? (_ = this.jsondata.localized_sale_product_mobile_banner)
                    : _ === `bestofyear_banner`
                      ? (_ = this.jsondata.localized_bestofyear_banner)
                      : _ === `bestofyear_banner_mobile`
                        ? (_ = this.jsondata.localized_bestofyear_banner_mobile)
                        : _ === `localized_store_app_spotlight`
                          ? (_ = this.jsondata.localized_store_app_spotlight)
                          : _ === `localized_store_app_spotlight_mobile` &&
                            (_ =
                              this.jsondata
                                .localized_store_app_spotlight_mobile);
      return _;
    }
    GetImageURL(_, _ = 0, _ = _.full) {
      let _ = this.GetImgArray(_),
        _ = _ && _.length > _ && _[_] != null;
      return _ && _[_]?.startsWith(`http`)
        ? _[_]
        : _
          ? _.GenerateURLFromHashAndExt(this.clanSteamID, _[_] ?? ``, _)
          : void 0;
    }
    GetImageHash(_, _ = 0) {
      let _ = this.GetImgArray(_);
      return _ && _.length > _ && _[_] != null
        ? _[_].substr(0, _[_].length - 4)
        : null;
    }
    GetImageHashAndExt(_, _ = 0) {
      let _ = this.GetImgArray(_);
      return _ && _.length > _ && _[_] != null ? _[_] : null;
    }
    BHasSomeImage(_) {
      let _ = this.GetImgArray(_);
      return !!_ && _.some((_) => _ != null && _.length > 0);
    }
    BHasImage(_, _) {
      let _ = this.GetImgArray(_);
      return !!_ && _.length > _ && _[_] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(_) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? _.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : _
            ? _.COMMUNITY_BASE_URL +
              `groups/` +
              _ +
              `/eventcomments/` +
              this.forumTopicGID
            : _.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(_) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(_)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let _ = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !_ || !_.BIsValid()
        ? ``
        : _.COMMUNITY_BASE_URL +
            `gid/` +
            _.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(_ = _()) {
      return _ < (this.startTime ?? 0);
    }
    BHasEventEnded(_ = _()) {
      return (this.endTime ?? 0) < _;
    }
    UpdateVoteCount(_, _) {
      _ == `up`
        ? (this.nVotesUp = _(this.nVotesUp + _, 0, 2 ** 53 - 1))
        : _ == `down` &&
          (this.nVotesDown = _(this.nVotesDown + _, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(_, _) {
      let _ = this.GetDescriptionWithFallback(_);
      if (_) {
        let _ = _.indexOf(`[img]`);
        if (_ !== -1 && _ < _) {
          _ += 5;
          let _ = _.indexOf(`[/img]`, _);
          if (_ != -1) {
            let _ = _.substring(_, _).trim();
            if (_.length != 0) return _.ReplacementTokenToClanImageURL(_);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(_, _) {
      let _ = this.GetImageURL(_, _);
      if (!_ || _.length == 0) {
        let _ = _.GetELanguageFallback(_);
        _ != _ && (_ = this.GetImageURL(_, _));
      }
      return !_ || _.length == 0;
    }
    GetDescriptionWithFallback(_) {
      let _ = _.GetELanguageFallback(_);
      return this.description.get(_) || this.description.get(_);
    }
    BIsImageSafeForAllAges(_, _, _ = {}) {
      let _ = _.GetELanguageFallback(_);
      return (
        this.GetImageURL(_, _) != null ||
        (_ != _ && this.GetImageURL(_, _) != null) ||
        (this.appid && _.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          _.clanInfo &&
          ((_.clanInfo.is_creator_home && !_.clanInfo.is_ogg) ||
            _.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(_ = _()) {
      let _ = Math.floor(_);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          _ > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            _ < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(_ = _()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > _ ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > _))
      );
    }
    BHasSubTitle(_) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        _ >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let _ = this.jsondata.localized_subtitle[_];
      return _ != null && _ != ``;
    }
    GetSubTitle(_) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        _ >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[_] || ``;
    }
    GetSubTitleWithLanguageFallback(_) {
      return this.jsondata
        ? _.GetWithFallback(this.jsondata.localized_subtitle, _)
        : ``;
    }
    GetSubTitleWithSummaryFallback(_) {
      return (
        _.GetWithFallback(this.jsondata?.localized_subtitle, _) ||
        _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_))
      );
    }
    GetSummaryWithFallback(_, _) {
      return (
        _.GetWithFallback(this.jsondata?.localized_summary, _) ||
        _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_), _)
      );
    }
    GetSummary(_) {
      return _.Get(this.jsondata?.localized_summary ?? [], _);
    }
    BHasSummary(_) {
      return !!this.GetSummary(_);
    }
    static GenerateSummaryFromText(_, _) {
      return !_ || _.trim().length == 0
        ? ``
        : ((_ = _(_, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (_ = _(_, [`p`], ` `)),
          (_ = _(_)),
          (_ = _(_)),
          _(_, _ || 180));
    }
    BHasTag(_) {
      return this.vecTags.indexOf(_) != -1;
    }
    BHasTagStartingWith(_) {
      return this.vecTags.some((_) => _?.startsWith(_));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(_) {
      if (!_) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || _.includes(this.type)) return !1;
      let _ = new Date().getTime() / 1e3;
      return !(
        (_.includes(this.type) && this.endTime && _ > this.endTime) ||
        (this.startTime && _ > this.startTime + _.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(_, _ = _()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let _ = this.endTime ? this.endTime : _ + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (_ || ((this.startTime ?? 0) - 600 <= _ && _ < _))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((_) => _.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (_) => _.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(_) {
      return (
        _.GetWithFallback(this.jsondata.localized_broadcast_title, _) ||
        _(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((_) =>
          _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(_) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(_));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(_) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          _.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          _.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let _ = this.jsondata.source_content_hub;
        return _
          ? typeof _ == `string`
            ? _.STORE_BASE_URL + `category/` + _
            : _.type == `category`
              ? _.STORE_BASE_URL + `category/` + _.category
              : _.type == `tags`
                ? _.STORE_BASE_URL + `tags/` + (_() || `en`) + `/` + _.tagid
                : _.type == `freetoplay`
                  ? _.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : _.type == `earlyaccess`
                    ? _.STORE_BASE_URL + `genre/Early%20Access/`
                    : _.STORE_BASE_URL + _.type
          : _.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let _ = this.clanSteamID.GetAccountID(),
        _ = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        _ = this.GetSaleVanity();
      return _ && _(_, _) ? _ + `sale/` + _ : _.STORE_BASE_URL + _(_, _, _);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(_, _, _, _, _, _) {
      let _ = [],
        _ = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        _ = _ + 10;
      return (
        _ &&
          _.push({
            ..._,
            section_type: `footer_self_creator_home`,
            unique_id: _++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        _ &&
          _.push({
            ..._,
            section_type: `footer_browse_more`,
            unique_id: _++,
          }),
        _ &&
          _.push(this.GenerateDynamicCreatorHomeItemBrowserSection(_++, _, _)),
        _ &&
          _.push({
            ..._,
            section_type: `footer_default_social_share`,
            unique_id: _++,
          }),
        _ &&
          _.push({
            ..._,
            section_type: `nextfest_header`,
            unique_id: _++,
          }),
        _
      );
    }
    GetSaleSectionIncludingFooterSections(_ = 0) {
      let _ = this.jsondata?.sale_show_creator,
        _ = this.jsondata.sale_browse_more_button,
        _ =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        _ = this.GetEventType() == 36,
        _ = this.BShowNextFestHeader(!0);
      return _ || _ || _ || _ || _
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, _, _),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!_, !!_, _, _, !1, _),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(_, _ = 0) {
      return _ > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, _).find(
            (_) => _.unique_id == _,
          )
        : this.jsondata.sale_sections?.find((_) => _.unique_id == _);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(_) {
      return (
        this.jsondata.sale_sections?.filter((_) => _.section_type == _) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(_) {
      let _ = this.jsondata.sale_sections?.length ?? 0;
      if (_ != 0) {
        for (let _ = 0; _ < _; ++_)
          if (this.jsondata.sale_sections[_].section_type === _)
            return this.jsondata.sale_sections[_];
      }
    }
    static AccumulateCapsuleListIDs(_, _, _, _) {
      _ &&
        _.forEach((_) => {
          _ && _.type && _.has(_.type) && (!_ || _(_._)) && _.add(_._);
        });
    }
    GetSaleItemOfType(_, _) {
      if (!this.jsondata.sale_sections) return new Set();
      let _ = new Set(_),
        _ = new Set();
      return (
        _(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((_) => {
          _.AccumulateCapsuleListIDs([_.capsule], _, _, _);
        }),
        this.jsondata.sale_sections.forEach((_) => {
          if (_(_.section_type))
            _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
          else if (_.section_type === `tabs` && _.tabs)
            for (let _ of _.tabs)
              _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
        }),
        _
      );
    }
    GetSaleItemCountOfType(_, _) {
      return this.GetSaleItemOfType(_, _).size;
    }
    GetSaleFeaturedAppsCount(_) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        _,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(_) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        _,
      );
    }
    GetSaleFeaturedBundlesCount(_) {
      return this.GetSaleItemCountOfType([`bundle`], _);
    }
    GetSaleFeaturedPackagesCount(_) {
      return this.GetSaleItemCountOfType([`sub`], _);
    }
    GetSaleFeaturedApps(_) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        _,
      );
    }
    GetSaleFeaturedAppsAndDemos(_) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        _,
      );
    }
    GetSaleFeaturedBundles(_) {
      return this.GetSaleItemOfType([`bundle`], _);
    }
    GetSaleFeaturedPackages(_) {
      return this.GetSaleItemOfType([`sub`], _);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return _(this.type);
    }
    GetCategoryAsString(_) {
      return _(this.type, this.vecTags, _);
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(_) {
      let _ = !0;
      return (
        _?.forEach((_) => {
          this.vecTags.includes(_) || (_ = !1);
        }),
        _
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? {
            type: `category`,
            category: this.jsondata.source_content_hub,
          }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(_) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[_]
        : void 0;
    }
    GetIncludedRealmList() {
      let _ = this.BInRealmGlobal(),
        _ = this.BInRealmChina();
      return (
        _(
          _ || _,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        _ && _ ? _ : _ ? _ : _ ? _ : _
      );
    }
    BIsValidForRealm(_) {
      return this.GetIncludedRealmList().includes(_);
    }
    BIsNextFest(_ = !1) {
      let _ = this.jsondata.sale_vanity_id?.toLowerCase(),
        _ = new _(this.clanSteamID).GetAccountID();
      return !(
        !_ ||
        _ != 39049601 ||
        !_.startsWith(`nextfest`) ||
        (_ && (_.endsWith(`preview`) || _.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(_) {
      return _ && _.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(_, _, _) {
      let _ = _ >= 7;
      return {
        ..._,
        section_type: `sale_item_browser`,
        unique_id: _,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: _,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            {
              loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle`,
            },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            {
              loc_token: `#Sale_Preferences`,
            },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(_([_], _.prototype, `GID`, void 0),
  _([_], _.prototype, `AnnouncementGID`, void 0),
  _([_], _.prototype, `forumTopicGID`, void 0),
  _([_], _.prototype, `type`, void 0),
  _([_], _.prototype, `appid`, void 0),
  _([_], _.prototype, `name`, void 0),
  _([_], _.prototype, `description`, void 0),
  _([_], _.prototype, `timestamp_loc_updated`, void 0),
  _([_], _.prototype, `startTime`, void 0),
  _([_], _.prototype, `endTime`, void 0),
  _([_], _.prototype, `visibilityStartTime`, void 0),
  _([_], _.prototype, `visibilityEndTime`, void 0),
  _([_], _.prototype, `m_nBuildID`, void 0),
  _([_], _.prototype, `m_strBuildBranch`, void 0),
  _([_], _.prototype, `postTime`, void 0),
  _([_], _.prototype, `visibility_state`, void 0),
  _([_], _.prototype, `broadcaster`, void 0),
  _([_], _.prototype, `jsondata`, void 0),
  _([_], _.prototype, `nCommentCount`, void 0),
  _([_], _.prototype, `nVotesUp`, void 0),
  _([_], _.prototype, `nVotesDown`, void 0),
  _([_], _.prototype, `bOldAnnouncement`, void 0),
  _([_], _.prototype, `announcementClanSteamID`, void 0),
  _([_], _.prototype, `loadedAllLanguages`, void 0),
  _([_], _.prototype, `bLoaded`, void 0),
  _([_], _.prototype, `deleteInProgress`, void 0),
  _([_], _.prototype, `vecTags`, void 0),
  _([_], _.prototype, `last_update_steamid`, void 0),
  _([_], _.prototype, `rtime32_last_modified`, void 0),
  _([_], _.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  _([_], _.prototype, `rtime32_last_local_modification`, void 0),
  _([_], _.prototype, `rtime32_moderator_reviewed`, void 0),
  _([_], _.prototype, `video_preview_type`, void 0),
  _([_], _.prototype, `video_preview_id`, void 0),
  _([_], _.prototype, `m_overrideCurrentDay`, void 0));
function _(_) {
  if (_) return _?.replace(/[()]/g, `\\$&`);
}
var _ = _({
    AlbumCoverImage: () => _,
    AlbumTitle: () => _,
    AppSummaryWidgetCtn: () => _,
    CarouselCapsuleAnimated: () => _,
    CarouselCapsuleBordered: () => _,
    CarouselDisplay: () => _,
    CarouselPage: () => _,
    CarouselSalePageCapsule: () => _,
    CarouselSalePageCapsuleTall: () => _,
    CustomStyle_together: () => _,
    DefaultCreatorCtn: () => _,
    DesktopTabs: () => _,
    DisabledBackground: () => _,
    EmptySectionPreview: () => _,
    EventSectionViewAllCtn: () => _,
    HorizontalScrollInDragForceCursor: () => _,
    Hover: () => _,
    JumpToButton: () => _,
    JumpToSection: () => _,
    JumpedTo: () => _,
    LinkCapsule: () => _,
    LoginButton: () => _,
    MobileTabSelector: () => _,
    MobileTabSelectorButton: () => _,
    MobileTabSelectorDropDown: () => _,
    MobileTabSelectorOption: () => _,
    MobileTabSelectorShortcut: () => _,
    NoTopPadding: () => _,
    SaleBackground: () => _,
    SaleBroadcastCtn: () => _,
    SaleBroadcastSection: () => _,
    SaleHeaderContainer: () => _,
    SaleNewSizing: () => _,
    SaleOuterContainer: () => _,
    SaleOuterTopMargin: () => _,
    SaleOverlay: () => _,
    SaleOverlayCtn: () => _,
    SalePageBroadcastContextHover: () => _,
    SalePageLogoSet: () => _,
    SaleSection: () => _,
    SaleSectionBackgroundImageGroupEdit: () => _,
    SaleSectionContainer: () => _,
    SaleSectionCtn: () => _,
    SaleSectionLivePreview: () => _,
    SaleSectionLoginPrompt: () => _,
    SaleSectionSubtext: () => _,
    SaleSectionTabListContainer: () => _,
    SaleSectionTabs: () => _,
    SaleSectionTitleCtn: () => _,
    SaleTabLabel: () => _,
    SaleViewAll: () => _,
    TabButton: () => _,
    TabButtonsCtn: () => _,
    TabContentsContainer: () => _,
    Visible: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    fullscreen_bg: () => _,
    fullscreen_bg_video: () => _,
    narrowWidth: () => _,
    preview_placeholder_section: () => _,
    vr_required: () => _,
    vr_supported: () => _,
  }),
  _ = `800ms`,
  _ = `500px`,
  _ = `-Zy1ltcQDkE-`,
  _ = `ITm551-Itv0-`,
  _ = `_6jskhb6YeSo-`,
  _ = `aRydKdstJes-`,
  _ = `xFBIotXKgPo-`,
  _ = `jfWdGAgh7Cw-`,
  _ = `dMS6MDahfdY-`,
  _ = `ag84bi7bqd8-`,
  _ = `INaSASY-n6Y-`,
  _ = `rd5CN9V8cCs-`,
  _ = `GsKGB2AMpCo-`,
  _ = `ZghzLtML6gI-`,
  _ = `_4XfV-vRVpXQ-`,
  _ = `ADv233Yuxvo-`,
  _ = `xHyewv1cFDQ-`,
  _ = `WViSHv787CM-`,
  _ = `vEPpcBFMdNY-`,
  _ = `qsHRF3jjmFk-`,
  _ = `_3eHSKyP5TA8-`,
  _ = `Fsjh8xcc4nM-`,
  _ = `_5-G1qgRPcWw-`,
  _ = `unm2-LhZQCg-`,
  _ = `t3zlb7Lbrro-`,
  _ = `_09PTYRlPtZw-`,
  _ = `eQlp4xOz-ds-`,
  _ = `GHZVn8ub92w-`,
  _ = `BUqnLcVWA-0-`,
  _ = `y0spD3kNo3Y-`,
  _ = `tkhpJZaNQME-`,
  _ = `Z73hKboggMI-`,
  _ = `Wv8qMEsrmW0-`,
  _ = `rbLMLmnSGGg-`,
  _ = `vY5XhaS3Ygk-`,
  _ = `mGmbnTrWldU-`,
  _ = `iQZmg-3HqBg-`,
  _ = `sHCgzOPXgGc-`,
  _ = `bGfjSCk2dUc-`,
  _ = `U-S8wbW2QPc-`,
  _ = `BGRkx7hPtdo-`,
  _ = `lDfz79FqpSQ-`,
  _ = `YVLROge2PeI-`,
  _ = `-vIjiep6nfo-`,
  _ = `aQhyXEXouGQ-`,
  _ = `BXoC-ltwYZI-`,
  _ = `_3SrnRwlpwgo-`,
  _ = `nYD6DMqC7qM-`,
  _ = `G-OnHgVMKqk-`,
  _ = `_7I7sI68LmoI-`,
  _ = `RSIUm0Uc-Xo-`,
  _ = `_8wuiTMgpKUY-`,
  _ = `_2ldq6lCnNnw-`,
  _ = `xOxOv-hs36s-`,
  _ = `jKxgeZt65lQ-`,
  _ = `fXts2vWkOIU-`,
  _ = `_1NBbE2OfC-4-`,
  _ = `Bp-h0y9U-0g-`,
  _ = `EAsD2M4HZUc-`,
  _ = `_8kJ9MPlskMM-`,
  _ = `LXHxxWUC-1g-`,
  _ = `iafTQzuTC4A-`,
  _ = {
    "duration-app-launch": `800ms`,
    narrowWidth: _,
    SaleSection: _,
    CarouselDisplay: _,
    SaleSectionCtn: _,
    NoTopPadding: _,
    SaleHeaderContainer: _,
    DisabledBackground: _,
    SaleSectionTabs: _,
    SaleViewAll: _,
    SaleSectionLoginPrompt: _,
    LoginButton: _,
    SaleSectionLivePreview: _,
    Hover: _,
    JumpedTo: _,
    JumpToSection: _,
    JumpToButton: _,
    SaleOverlayCtn: _,
    SaleOverlay: _,
    CarouselCapsuleBordered: _,
    CarouselCapsuleAnimated: _,
    AppSummaryWidgetCtn: _,
    CarouselSalePageCapsule: _,
    CarouselSalePageCapsuleTall: _,
    SaleBroadcastCtn: _,
    SaleOuterTopMargin: _,
    SaleOuterContainer: _,
    CustomStyle_together: _,
    SaleNewSizing: _,
    SalePageLogoSet: _,
    SaleBackground: _,
    SaleSectionTitleCtn: _,
    SaleSectionSubtext: _,
    SaleSectionContainer: _,
    vr_supported: _,
    vr_required: _,
    preview_placeholder_section: _,
    EmptySectionPreview: _,
    LinkCapsule: _,
    fullscreen_bg: _,
    fullscreen_bg_video: _,
    SalePageBroadcastContextHover: _,
    AlbumCoverImage: _,
    AlbumTitle: _,
    SaleSectionTabListContainer: _,
    MobileTabSelector: _,
    Visible: _,
    MobileTabSelectorButton: _,
    MobileTabSelectorShortcut: _,
    DesktopTabs: _,
    MobileTabSelectorDropDown: _,
    MobileTabSelectorOption: _,
    TabContentsContainer: _,
    HorizontalScrollInDragForceCursor: _,
    SaleBroadcastSection: _,
    CarouselPage: _,
    TabButtonsCtn: _,
    TabButton: _,
    SaleTabLabel: _,
    DefaultCreatorCtn: _,
    EventSectionViewAllCtn: _,
    SaleSectionBackgroundImageGroupEdit: _,
  },
  _ = `Y3je7h79nqo-`,
  _ = `EvA-A6anc-Y-`,
  _ = `si2rwaMlEF8-`,
  _ = `z6gX8J4oNLA-`,
  _ = `Y-e7ZAPjgPc-`,
  _ = `_17YPQd9sieQ-`,
  _ = `umiKWdQWSxU-`,
  _ = `kPoLTbyRGw4-`,
  _ = `Z7XFXVHAVIc-`,
  _ = `UQJnTans494-`,
  _ = `VFZT3kq3hWo-`,
  _ = `JSmXuJHr9F8-`,
  _ = `m-U1DKR49wc-`,
  _ = `RdFiHSeRsZo-`,
  _ = `oJgyyjdtQOI-`,
  _ = `ipmOsEvg-BE-`,
  _ = `P5x7tT5izXY-`,
  _ = `QJpMUh4ZGAo-`,
  _ = `TGMCv4-SGxA-`,
  _ = `dt8iCLdODIo-`,
  _ = `hIx3y3NuT2c-`,
  _ = `MIQ3PPPdM94-`;
function _(_, _, _) {
  return _(_, _, _)?.strTagName || void 0;
}
function _(_, _, _, _) {
  let _ = _ == 1 || _ == 3 || _ == 4,
    _ = () => {
      let _ = _(_.smart_section_creator_listid);
      return _
        ? _
          ? _(`#Sale_CreatorList_Section_Editor_title`, _)
          : _
        : null;
    };
  if (_.section_type === `items`)
    switch (_(_)) {
      case `wishlist`:
        return `#Sale_default_label_OnYourWishlist`;
      case `interactive_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `tag_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `deck_topplayed`:
        return `#Sale_TopPlayedOnDeckSection`;
      case `personalized_carousel`:
        if (_) {
          let { nSectionIndex: _, nNumSections: _ } = _(_, _);
          return _(`#Sale_PersonalizedCarousel_Section_Editor_title`, _ + 1, _);
        }
        let _ = _(_, _, _);
        if (!_ && _ == 2) {
          let { nSectionIndex: _, nNumSections: _ } = _(_, _);
          return _(`#Sale_PersonalizedCarousel_Section_Editor_title`, _ + 1, _);
        }
        return _ ? _(`#Sale_PersonalizedCarousel_Section_title`, _) : null;
      case `creator_list`:
        return _();
      case `discount_reason`:
        return _(_) ?? null;
    }
  else if (_.section_type === `tabs`) return ``;
  else if (_.section_type === `curator`) {
    if (_.curator_clan_id) {
      let _ = _.InitFromClanID(_.curator_clan_id, _.EUNIVERSE),
        _ = _.GetCreatorHome(_);
      if (_) return _(`#Sale_CuratorSection_Name`, _.GetName());
    }
    return `#Sale_CuratorSection`;
  } else if (_.section_type === `event_schedule`) return `#Sale_EventSchedule`;
  else if (_.section_type === `curator_recommendation`)
    return `#Sale_CuratorRecommendation_title`;
  else if (_.section_type === `discoveryqueue`) return `#DiscoveryQueue_Title`;
  else if (_.section_type === `sale_events`) return `#Sale_SaleEvent_Section`;
  else if (_.section_type === `calendar`) return `#Sale_SectionType_Calendar`;
  else if (_.section_type === `crosspromotesalepage` && _ == 1)
    return `#Sale_CrossPromoSale_DefaultSectionTitle`;
  else if (_.section_type === `creator_list`) return _();
  return null;
}
function _(_, _, _, _) {
  let _ = _(_, _, _, _);
  return _ === null ? null : _ && _.startsWith(`#`) ? _(_) : _;
}
function _(_, _, _, _, _, _, _, _) {
  if (!_) return ``;
  if (_.section_type === `crosspromotesalepage`) return _(_, _);
  let _ = _(_, _, _, _),
    _ = _.GetWithFallback(_.localized_label, _),
    _ =
      _ ||
      _ ||
      (_.default_label === `#Sale_default_label` ? `` : _(_.default_label)),
    _ = _.internal_section_title?.trim();
  if ((_?.length ?? 0) > 0) {
    if (_ == 3 || _ == 4)
      return _?.trim().length == 0 || _
        ? _
        : (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              ` `,
              (0, _.jsx)(_, {
                tooltip: _(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, _.jsx)(`br`, {}),
                  _,
                ),
              }),
            ],
          });
    if (_ == 1)
      return _?.trim().length == 0 || _
        ? _
        : (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              ` `,
              (0, _.jsx)(`span`, {
                children: _(`#Sale_Section_InternalTitle_Actual`, _),
              }),
            ],
          });
  }
  let _ = _.GetWithFallback(_.localized_label_image, _);
  if (!_ && _) {
    let _ = _.GenerateURLFromHashAndExt(_, _);
    return (0, _.jsx)(`img`, {
      loading: `lazy`,
      src: _,
      alt: _,
    });
  }
  return _;
}
function _(_, _, _) {
  if (_(_.section_type))
    switch (_(_)) {
      case `personalized_carousel`:
        let _ = _(_, _, _);
        return _ ? _(`#Sale_PersonalizedCarousel_Section_subtitle`, _) : null;
      case `creator_list`:
        return _(_.smart_section_creator_listid) ?? null;
    }
  return null;
}
function _(_, _, _, _) {
  let _ = _(_, _, _);
  return _ === null
    ? _.GetWithFallback(_.localized_subtitle, _) ||
        (!_.default_subtitle || _.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : _(_.default_subtitle))
    : _ && _.startsWith(`#`)
      ? _(_)
      : _;
}
function _(_, _, _) {
  return `linear-gradient(${_ ?? 0}deg, ${_ || `transparent`} 0%, ${_ || `transparent`} 100%)`;
}
function _(_) {
  return _(
    _.background_gradient_bottom,
    _.background_gradient_top,
    _.background_gradient_angle,
  );
}
function _(_, _, _) {
  if (_.disable_background)
    return {
      paddingLeft: 0,
      paddingRight: 0,
    };
  let _ = ``;
  if (_.background_image) {
    let _ = _.GenerateURLFromHashAndExt(_.clanSteamID, _.background_image);
    _ += `,url(${_})`;
  }
  return _.background_gradient_bottom ||
    _.background_gradient_top ||
    _.length > 0 ||
    _.background_repeat ||
    _.border_color ||
    _.border_width
    ? {
        backgroundImage: _(_) + _,
        backgroundRepeat: _.background_repeat,
        backgroundSize: _.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: _.border_color && _.border_width ? `solid` : void 0,
        outlineColor: _.border_color,
        outlineWidth: _.border_width ? `${_.border_width}px` : void 0,
      }
    : {};
}
function _(_, _) {
  return _
    ? _.disable_background && !_
      ? {
          paddingLeft: 0,
          paddingRight: 0,
        }
      : _.background_gradient_bottom ||
          _.background_gradient_top ||
          _.background_repeat ||
          _.border_color ||
          _.border_width
        ? {
            background: _(_),
            backgroundRepeat: _.background_repeat,
            outlineStyle: _.border_color && _.border_width ? `solid` : void 0,
            outlineColor: _.border_color,
            outlineWidth: _.border_width ? `${_.border_width}px` : void 0,
          }
        : {}
    : {};
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            visibility: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            priority: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            association_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_id: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            associated_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            start_date: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_allow: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            country_deny: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            ownership_restrictions_overridden: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            must_own_appid: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_appid: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_own_packageid: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_not_own_packageid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            must_have_launched_appid: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            additional_restrictions: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            template_vars: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            flags: {
              _: 22,
              _: _.readUint32,
              _: _.writeUint32,
            },
            creator_name: {
              _: 23,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 24,
              _: _.readString,
              _: _.writeString,
            },
            additional_restrictions_json: {
              _: 25,
              _: _.readString,
              _: _.writeString,
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
      return `CMarketingMessageProto`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_item_id: {
              _: 4,
              _: _,
            },
            associated_item: {
              _: 5,
              _: _,
            },
            associated_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            template_type: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            template_vars_json: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            recommended_items: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            sale_item_count: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recommended_items_include_dlc: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
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
      return `CDisplayMarketingMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            anonymous_user: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
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
      return `CMarketingMessages_GetActiveMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            time_next_message_age: {
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
      return `CMarketingMessages_GetActiveMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start_past_days || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_past_days: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upto_past_days: {
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
      return `CMarketingMessages_GetPastMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetPastMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_seen_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_seen_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            context: {
              _: 6,
              _: _,
            },
            data_request: {
              _: 7,
              _: _,
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.already_seen || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            already_seen: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            message: {
              _: 2,
              _: _,
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
      return `CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            elanguage: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            operating_system: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_package_version: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.has_pending_messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_pending_messages: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            pending_message_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CMarketingMessages_DoesUserHavePendingMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
              _: _,
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
      return `CMarketingMessages_GetDisplayMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
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
      return `CMarketingMessages_GetDisplayMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CMarketingMessages_MarkMessageSeen_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            display_index: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 4,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CMarketingMessages_MarkMessageClicked_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CMarketingMessages_GetMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
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
      return `CMarketingMessages_GetMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.lookup_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            lookup_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            gidlist: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            associated_id: {
              _: 6,
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
      return `CMarketingMessages_FindMarketingMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_FindMarketingMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
            },
            from_json: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
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
      return `CMarketingMessages_CreateMarketingMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CMarketingMessages_CreateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message: {
              _: 2,
              _: _,
            },
            from_json: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
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
      return `CMarketingMessages_UpdateMarketingMessage_Request`;
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
      return `CMarketingMessages_UpdateMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CMarketingMessages_DeleteMarketingMessage_Request`;
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
      return `CMarketingMessages_DeleteMarketingMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CMarketingMessages_GetMarketingMessageViewerStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            seen_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            display_index: {
              _: 4,
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
      return `CMarketingMessageHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CMarketingMessages_GetMarketingMessageViewerStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_start_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_start_time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rt_end_time: {
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
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_time_hour || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_time_hour: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clicked_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            display_index: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            template_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            click_location: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CMarketingMessageClickedHourlyStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            clicked_stats: {
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
      return `CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CMarketingMessages_GetMarketingMessageClickedStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
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
      return `CMarketingMessages_GetMarketingMessageClickedStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
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
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessages_GetPartnerReadyToPublishMessages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            partnerid: {
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
      return `CMarketingMessages_PartnerPublishMessage_Request`;
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
      return `CMarketingMessages_PartnerPublishMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            partnerid: {
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
      return `CMarketingMessages_GetPartnerMessagePreview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.message || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            message: {
              _: 1,
              _: _,
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
      return `CMarketingMessages_GetPartnerMessagePreview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
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
      return `CMarketingMessage_GetMarketingMessagesForApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessage_GetMarketingMessagesForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
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
      return `CMarketingMessage_GetMarketingMessagesForPartner_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.messages || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            messages: {
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
      return `CMarketingMessage_GetMarketingMessagesForPartner_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetActiveMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActiveMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPastMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetPastMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  _.GetMarketingMessagesForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DoesUserHavePendingMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.DoesUserHavePendingMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  _.GetDisplayMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  _.GetDisplayMarketingMessageForUser = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetDisplayMarketingMessageAdmin#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetDisplayMarketingMessageAdmin = _;
  function _(_, _) {
    return _.SendNotification(`MarketingMessages.MarkMessageSeen#1`, _(_, _), {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  _.MarkMessageSeen = _;
  function _(_, _) {
    return _.SendNotification(
      `MarketingMessages.MarkMessageClicked#1`,
      _(_, _),
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `store`],
      },
    );
  }
  _.MarkMessageClicked = _;
  function _(_, _, _) {
    return _.SendMsg(`MarketingMessages.GetMarketingMessage#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.CreateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.CreateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.UpdateMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.UpdateMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.DeleteMarketingMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.DeleteMarketingMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.FindMarketingMessages#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.FindMarketingMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageViewerStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetMarketingMessageViewerStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesViewerRangeStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetMarketingMessagesViewerRangeStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessageClickedStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetMarketingMessageClickedStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerReadyToPublishMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerReadyToPublishMessages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.PublishPartnerMessage#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.PublishPartnerMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetPartnerMessagePreview#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetPartnerMessagePreview = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForPartner#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetMarketingMessagesForPartner = _;
  function _(_, _, _) {
    return _.SendMsg(
      `MarketingMessages.GetMarketingMessagesForApps#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesForApps = _;
})((_ ||= {}));
var _ = [`app`, `sub`, `bundle`];
function _(_) {
  return _.includes(_);
}
function _(_) {
  switch (_) {
    case `sub`:
      return 1;
    case `bundle`:
      return 2;
    default:
      return 0;
  }
}
function _(_, _) {
  switch (_) {
    case 2:
      return `bundle`;
    case 1:
      return `sub`;
    default:
      switch (_) {
        case 0:
          return `game`;
        case 12:
          return `beta`;
        case 4:
          return `dlc`;
        case 1:
          return `demo`;
        case 6:
          return `software`;
        case 7:
        case 3:
          return `video`;
        case 10:
          return `hardware`;
        case 11:
          return `music`;
        case 13:
          return `tool`;
        case 2:
          return `mod`;
        case 9:
          return `episode`;
        case 8:
          return `series`;
        default:
          return `game`;
      }
  }
}
var _ = {
    eLocation: 0,
  },
  _ = _.createContext(_);
function _(_) {
  let { children: _, location: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      eLocation: _ ?? 0,
    },
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  return _().eLocation == 2;
}
function _() {
  let _ = _();
  return _.eLocation == 2 || _.eLocation == 1;
}
var _ = _.createContext(void 0);
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.nSeed,
    children: _.children,
  });
}
function _() {
  return _.useContext(_);
}
function _(_, _, _, _) {
  if (_ === void 0 || _.length <= 1 || !_(_, _, void 0)) return _;
  let _ = _(_ + (_.unique_id ?? 0));
  return _([..._], _.random_order_top_x ?? 0, _);
}
function _(_, _, _, _) {
  if (_.length <= _) return _;
  if (_ === void 0) return _.slice(0, _);
  let _ = _(_ + (_.unique_id ?? 0));
  return _([..._], 0, _).slice(0, _);
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return ((await (await fetch(_)).json()).rgRecommendedApps ?? []).map(Number);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => (_ ? _(_, _) : []),
    staleTime: 6e5,
  };
}
function _(_) {
  return [`AccountRecommendedApps`, _ ?? 0];
}
var _ = 100;
function _(_, _, _, _, _ = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, _ ?? 0, _.cacheScope ?? ``, _],
    queryFn: async () => {
      if (!_) return [];
      let _ = (await _.fetchQuery(_(_, _))).slice(0, _),
        _ = await Promise.all(
          _.map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
      return _.filter(
        (_, _) => (_[_]?.best_purchase_option?.discount_pct ?? 0) >= _,
      );
    },
    staleTime: 6e5,
  };
}
function _(_) {
  return _.section_type === `crosspromotesalepage`
    ? (_.sale_page_cross_promo_sales ?? [])
    : [];
}
function _(_) {
  return _(_).map((_) => ({
    ..._,
    sale_page_cross_promo_sales: [_],
    capsules: _.capsules ?? [],
  }));
}
function _(_) {
  return _(_)[0]?.event_gid || void 0;
}
function _(_) {
  return _(_).flatMap((_) => _.event_gid || []);
}
function _(_) {
  return _(_)[0]?.creator_clan_account_id || void 0;
}
function _(_) {
  return _(_) !== void 0;
}
function _(_) {
  return _.GetSaleSections().flatMap((_) =>
    _.disable_section || _.hide_section ? [] : _(_),
  );
}
function _(_) {
  return (
    _.section_type === `crosspromotesalepage` &&
    !!_.sale_page_cross_promo_side_by_side
  );
}
function _(_) {
  return (
    _.section_type === `crosspromotesalepage` &&
    !!_.sale_page_cross_promo_in_sale_events
  );
}
function _(_) {
  return _.GetSaleSections().filter(
    (_) => _(_) && !_.disable_section && !_.hide_section,
  );
}
function _(_) {
  let _ = _(_);
  return _.length > 0 && _.every((_) => (_.capsules?.length ?? 0) > 0);
}
function _(_, _) {
  return !_(_) || (!_(_) && !_(_)[0]?.clan_account_id)
    ? `setup`
    : _
      ? null
      : `missing`;
}
function _(_) {
  let _ = _(_)[0];
  return _?.creator_clan_account_id
    ? !!_.capsules?.length
    : !!_?.event_gid && (!!_.featured_app_tagid || !!_.capsules?.length);
}
function _(_, _) {
  if (!_.length) return `creator`;
  let _ = (_) =>
    _.every((_) => !!_ && !!_(_)?.some((_) => _.creator_clan_account_id === _));
  return _((_) => _.franchises)
    ? `franchise`
    : _((_) => _.developers)
      ? `developer`
      : _((_) => _.publishers)
        ? `publisher`
        : `creator`;
}
function _(_, _) {
  return _
    ? _(`#Sale_CrossPromoSale_SectionTitle`, _.GetNameWithFallback(_) ?? ``)
    : _(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function _(_, _) {
  let _ = _.GetWithFallback(_.localized_label, _);
  if (_) return _;
  if (_.default_label && _.default_label !== `#Sale_default_label`)
    return _(_.default_label);
}
var _ = [`logo_left`, `logo_top`, `event_capsule`],
  _ = `crosspromo_layout`;
function _(_, _, _) {
  let _ = _(_, _);
  if (_ && (_ === `logo_left` || _ === `logo_top`)) {
    if (!_.strBackgroundURL || !_.strLogoURL) return `event_capsule`;
    if (!_(_)) return _.eDesktopLayout ?? `logo_left`;
  }
  return _;
}
function _(_) {
  return _.some((_) => _ === _);
}
function _(_, _) {
  let _ = _(_) ? _ : void 0,
    _ = _.sale_page_cross_promo_layout;
  return _ ?? (_ && _ !== `sale_banner` ? _ : `event_capsule`);
}
function _(_, _) {
  let _ = _.GetELanguageFallback(_),
    _ =
      _.jsondata.localized_sale_cross_promo_logo_image?.findIndex((_) => !!_) ??
      -1;
  return (
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    (_ >= 0 ? _.GetImageURL(`sale_cross_promo_logo`, _) : void 0) ||
    _.GetImageURL(`sale_logo`, _) ||
    _.GetImageURL(`sale_logo`, _)
  );
}
function _(_) {
  return 3;
}
function _(_) {
  return !0;
}
function _(_) {
  return _ === `event_capsule`;
}
function _(_) {
  return _.type !== `sub` && _.type !== `bundle`;
}
function _(_, _, _, _) {
  let _ = [];
  for (let _ of _)
    if ((!_ || _.has(_)) && !_(_) && (_.push(_), _.length >= _)) break;
  return _;
}
function _(_, _, _, _ = new Set()) {
  for (let _ of _.GetSaleSections())
    if (!(!_(_.section_type) || (_ && !_.BIncludeSection(_))))
      for (let _ of _.capsules) _(_) && _.add(_._);
  for (let _ of _ ?? []) {
    let _ = _.capsule;
    _(_) && (!_ || _.BIncludeLinkedCapsule(_)) && _.add(_._);
  }
  return _;
}
function _(_, _, _) {
  return {
    nSaleTagID: _.BUsesContentHubForItemSource()
      ? void 0
      : _.featured_app_tagid,
    strContentHubType: _.GetContentHubType(),
    strContentHubCategory: _.GetContentHubCategory(),
    nContentHubTagID: _.GetContentHubTag(),
    bDiscountsOnly: _.BContentHubDiscountedOnly(),
    bPrioritizeDiscounts: _,
    strOptInName: _.jsondata.prune_list_optin_name,
    nOptInTagID: _.jsondata.optin_tagid,
    nPruneTagID: _.jsondata.optin_prune_tagid,
    bOptInOnly: _.jsondata.optin_only,
    nCreatorClanAccountId: _ ? _.clanSteamID.GetAccountID() : void 0,
  };
}
var _ = 4;
function _(_) {
  return _.GetSaleSections().filter(
    (_) => _(_.section_type) && _(_) === `personalized_carousel`,
  );
}
function _(_) {
  return _(_)[0];
}
function _(_) {
  if (_.appid())
    return {
      _: _.appid(),
      type: `game`,
    };
  if (_.bundleid())
    return {
      _: _.bundleid(),
      type: `bundle`,
    };
  if (_.packageid())
    return {
      _: _.packageid(),
      type: `sub`,
    };
}
function _(_, _, _, _, _, _, _) {
  let _ = _(_),
    _ = {
      rgSections: _.map((_) => ({
        eSort: _.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: _.smart_section_personalized_carousel_min_items ?? _,
        bRandomize: !!_.smart_section_personalized_carousel_randomize,
        bIncludePackages: _.smart_section_include_packages,
        bIncludeBundles: _.smart_section_include_bundles,
        bIncludeDLC: _.smart_section_include_dlc,
        nMinDiscountPercent:
          _.smart_section_min_discount_percent === void 0 ? void 0 : _(_),
      })),
      storePageFilter: _(_, !!_[0]?.prioritize_discounts, _),
      strStoreFilterJSON: _[0] ? _(_[0]) : void 0,
      strTabStoreFilterJSON: _ ? JSON.stringify(_) : void 0,
    };
  return {
    queryKey: [
      `SaleTech`,
      `PersonalizedCarousels`,
      _,
      _.country,
      _.language,
      JSON.stringify(_),
    ],
    queryFn: () => _(_, _, _, _, _),
    staleTime: 1 / 0,
  };
}
async function _(_, _, _, _, _) {
  if (!_ || _.rgSections.length === 0) return [];
  let _ = _.Init(_);
  for (let _ of _.rgSections) {
    let _ = _.Body().add_sections();
    (_.set_sort(_.eSort),
      _.set_min_items(_.nMinItems),
      _.set_randomize(_.bRandomize),
      _.set_include_packages(!!_.bIncludePackages),
      _.set_include_bundles(!!_.bIncludeBundles),
      _.set_include_dlc(_.bIncludeDLC),
      _.set_min_discount_percent(_.nMinDiscountPercent));
  }
  for (let _ of _ ?? []) {
    let _ = _.Body().add_recommended_tags();
    (_.set_tagid(_.tagid), _.set_name(_.name));
  }
  (_.Body().set_context(_(_)),
    _.Body().set_filters(_(_.storePageFilter, !1)),
    _.strStoreFilterJSON &&
      _.Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(_.strStoreFilterJSON),
    _.strTabStoreFilterJSON &&
      _.Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(_.strTabStoreFilterJSON));
  let _ = await _.GetItemsByUserRecommendedTags(_, _);
  if (_.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${_.GetEResult()}`);
  return _.Body()
    .sections()
    .map((_) => ({
      strTagName: _.tag_name() ?? ``,
      rgCapsules: _.store_item_ids().flatMap((_) => {
        let _ = _(_);
        return _ ? [_] : [];
      }),
    }));
}
function _(_, _) {
  let _ = _.GetSaleSections().filter(
    (_) => _(_.section_type) && _(_) == `personalized_carousel`,
  );
  if (_.length == 0)
    return {
      nNumSections: 0,
      nSectionIndex: -1,
    };
  let _ = _.findIndex((_) => _.unique_id == _.unique_id);
  return {
    nNumSections: _.length,
    nSectionIndex: _,
  };
}
var _ = 1778623200;
function _(_, _) {
  let _ = !1;
  return (
    _ && _.GetEventType() == 36
      ? (_ = !0)
      : _ && _ && _.is_creator_home && (_ = _(_, _)),
    _
  );
}
function _(_, _) {
  return !!_ && !!_.is_creator_home && (_.createTime ?? 0) > _;
}
function _(_) {
  return _(_) === `frame_compatibility` ? `frame` : `deck`;
}
function _(_, _) {
  let _ = _.smart_section_deck_compatibility ?? 3;
  switch (_) {
    case 3:
      return _.verifiedList ?? [];
    case 2:
      return _.playableList ?? [];
    case 1:
      return _.unsupportedList ?? [];
    case 0:
      return _.unknownList ?? [];
  }
  return (
    console.error(
      `GetAppsForSectionCompatCategory: unexpected compatibility category ${_}`,
    ),
    []
  );
}
var _ = [
    {
      nOptInTagID: 9,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: _,
      rgChildren: [
        {
          eContentDescriptor: 3,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
  ],
  _ = [
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 122,
        },
        {
          nTagID: 9,
        },
        {
          nTagID: 597,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 122,
        },
        {
          nTagID: 9,
        },
        {
          nTagID: 597,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 9,
        },
        {
          nTagID: 122,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: 597,
        },
        {
          nTagID: 599,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 21,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
  ],
  _ = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: 128,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      strAppType: `software`,
    },
    {
      strFeature: `vr`,
    },
    {
      strFeature: `mac`,
    },
  ],
  _ = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    _: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
    "xbox controller": `#ControllerSupportLabelTitle`,
    "full controller": `#Store_ControllerFilter_Xbox`,
    "ps4 controller": `#Store_ControllerFilter_PS4`,
    "ps5 controller": `#Store_ControllerFilter_PS5`,
    "remote play together": `#Sale_Tabs_TagFilter_Feature_RemotePlayTogether`,
    "steam deck verified": `#Sale_Tabs_TagFilter_Feature_SteamDeckVerified`,
  },
  _ = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: _,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: _,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: _,
    },
  ];
function _(_) {
  return _?.rgNodes
    ? _.rgNodes
    : (_.find((_) => _.strClass === _?.tag_class)?.rgNodes ?? []);
}
function _(_) {
  return _.nTagID
    ? String(_.nTagID)
    : _.nOptInTagID || _.strOptInTag
      ? `optin:` + _(_)
      : _.eContentDescriptor
        ? `descriptor:` + _.eContentDescriptor
        : _.strFeature
          ? `feature:` + _.strFeature
          : `apptype:` + _.strAppType;
}
function _(_) {
  if (_.strFeature) return _[_.strFeature];
  if (_.strAppType) return `#AppTypeLabel_` + _.strAppType;
}
function _(_) {
  if (_)
    return _.strChildKey
      ? _.strParentKey + `,` + _.strChildKey
      : _.strParentKey;
}
var _ = `tabtag`,
  _ = `tabsubtag`;
function _(_, _) {
  if (_)
    return {
      strParentKey: _,
      strChildKey: _ || void 0,
    };
}
function _(_) {
  return {
    [_]: _?.strParentKey ?? null,
    [_]: _?.strChildKey ?? null,
  };
}
function _(_, _, _) {
  if (!_) return;
  let _ = _(_(_), _.strParentKey);
  if (!_ || !_(_)) return;
  if (!_.strChildKey) return _;
  let _ = _(_.rgChildren ?? [], _.strChildKey);
  return !_ || !_(_)
    ? {
        strParentKey: _.strParentKey,
      }
    : _;
}
function _(_) {
  return _.strOptInTag ?? String(_.nOptInTagID);
}
function _(_, _) {
  return _.nOptInTagID || _.strOptInTag
    ? (_(_, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: _.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: _,
        value: _(_),
      })
    : _.nTagID
      ? {
          type: _.k_EStoreFilterClauseTypeStoreTag,
          value: _.nTagID,
        }
      : _.eContentDescriptor
        ? {
            type: _.k_EStoreFilterClauseTypeContentDescriptor,
            value: _.eContentDescriptor,
          }
        : _.strFeature
          ? {
              type: _.k_EStoreFilterClauseTypeFeatureTag,
              value: _.strFeature,
            }
          : {
              type: _.k_EStoreFilterClauseTypeAppType,
              value: _.strAppType,
            };
}
function _(_, _) {
  return _.find((_) => _(_) === _);
}
function _(_, _, _) {
  if (!_) return;
  let _ = _(_(_), _.strParentKey);
  if (!_) return;
  if (!_.strChildKey) return _(_, _);
  let _ = _(_.rgChildren ?? [], _.strChildKey);
  if (_)
    return {
      type: _.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [_(_, _), _(_, _)],
    };
}
function _() {
  let [_] = _(`tab`),
    _ = _.useCallback(
      (_, _) =>
        _({
          ..._,
          tab: String(_),
        }),
      [],
    );
  return [_(_), _];
}
function _(_) {
  return _ === null ? 0 : Number(_);
}
function _(_) {
  let [_] = _();
  return _(_, _);
}
function _(_, _) {
  let _ = _(_);
  return _.find((_) => _.unique_id === _) ?? _[0];
}
function _(_) {
  return (
    _.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((_) => !_.hide) ?? []
  );
}
function _(_, _, _, _) {
  if (!_ || _.diable_tab_id_filtering) return;
  let _ = _.jsondata.sale_opt_in_page_name || _.jsondata.prune_list_optin_name,
    _ = _(_, _.tab_tag_filter, _),
    _ =
      _.store_filter && _
        ? {
            type: _.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [_.store_filter, _],
          }
        : (_.store_filter ?? _);
  if (_) return _(_, _, _) ? _ : void 0;
}
function _(_, _, _) {
  let _ = _.GetSaleSections(),
    _ = _.findIndex((_) => _.section_type === `tabs`);
  return _ < 0 || !_[_].tabs?.includes(_) ? !1 : _.indexOf(_) > _;
}
function _(_, _) {
  let _ = _(_);
  return !_ || _ === _(_)[0] || _.diable_tab_id_filtering || !_(_, _, _)
    ? ``
    : `tabid${_.unique_id}`;
}
function _(_) {
  let _ = _.useSyncExternalStore(_, _, _);
  return [
    new URLSearchParams(_).get(_),
    _.useCallback(
      (_) =>
        _({
          [_]: _ ?? null,
        }),
      [_],
    ),
  ];
}
function _() {
  return location.search;
}
function _(_) {
  let _ = new URL(window.location.href);
  for (let [_, _] of Object.entries(_))
    _ === null ? _.searchParams.delete(_) : _.searchParams.set(_, _);
  _.href !== window.location.href && _((_) => _, _);
}
function _(_) {
  let _ = _(_),
    _ = _(),
    [_] = _(_),
    [_] = _(_),
    _ = _.useCallback(
      (_, _) =>
        _({
          ..._,
          ..._(_),
        }),
      [],
    );
  return [_(_(_, _), _?.tab_tag_filter, _), _];
}
function _() {
  let { data: _ } = _();
  return _.useMemo(() => _(_), [_]);
}
function _(_) {
  let _ = !!_.logged_in && _.EREALM !== _.k_ESteamRealmChina && _ !== void 0,
    _ = new Set(_(_));
  return (_) => !_.eContentDescriptor || (_ && !_.has(_.eContentDescriptor));
}
function _(_, _) {
  let _ = _(_),
    [_] = _(_);
  return _(_, _, _, _);
}
var _ = 50;
function _(_, _, _) {
  let { defaultInfo: _ } = _;
  switch (_.type) {
    case _.k_EStoreFilterClauseTypeStoreTag:
      return !!_.tags?.some((_) => _.tagid === _.value);
    case _.k_EStoreFilterClauseTypeFeatureTag:
      switch (_.value) {
        case `linux`:
          return !!_.platforms?.steamos_linux;
        case `mac`:
          return !!_.platforms?.mac;
        case `vr`:
          return !!_.platforms?.vr_support?.vrhmd;
        case `vr only`:
          return !!_.platforms?.vr_support?.vrhmd_only;
        case `free`:
          return !!_?.is_free;
        case `discounted`:
          return (_?.best_purchase_option?.discount_pct ?? 0) > 0;
        default:
          return !1;
      }
    case _.k_EStoreFilterClauseTypeAppType:
      return (
        (_?.item_type !== void 0 && _.type !== void 0
          ? _(_.item_type, _.type)
          : `game`) === _.value
      );
    case _.k_EStoreFilterClauseTypeLanguage: {
      let _ = _(String(_.value));
      return !!_.supportedLanguages?.some(
        (_) =>
          _.elanguage === _ && (_.supported || _.subtitles || _.full_audio),
      );
    }
    case _.k_EStoreFilterClauseTypeContentDescriptor:
      return !!_?.content_descriptorids?.some((_) => _ === _.value);
    case _.k_EStoreFilterClauseTypePrice: {
      let _ = _?.free_weekend,
        _ = !!_ && (_.start_time ?? 1 / 0) <= _ && _ <= (_.end_time ?? 0),
        _ = _?.best_purchase_option?.final_price_in_cents,
        _ = _ ? Number.parseInt(_) : 1 / 0;
      return (
        !!_?.is_free ||
        !!_?.is_free_temporarily ||
        _ ||
        _ <= Number(_.value) * 100
      );
    }
    case _.k_EStoreFilterClauseTypeOr: {
      let _ = _.rgSubexpressions?.some((_) => _(_, _, _)) ?? !1;
      return _.bNegated ? !_ : _;
    }
    case _.k_EStoreFilterClauseTypeAnd: {
      let _ = _.rgSubexpressions?.every((_) => _(_, _, _)) ?? !1;
      return _.bNegated ? !_ : _;
    }
    case _.k_EStoreFilterClauseTypeOptInRegistrationTag:
      return !!(
        _.optin &&
        _.optInRegistrationTags
          ?.find((_) => _.optin_name === _.optin)
          ?.values?.includes(String(_.value))
      );
    default:
      return !0;
  }
}
function _(_, _, _, _, _) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      _.cacheScope,
      _ && JSON.stringify(_),
      _,
      _,
    ],
    queryFn: () =>
      _(
        _,
        _,
        _,
        (_) => ({
          appid: _,
        }),
        _,
        _,
      ),
    enabled: !!(_ && _),
    staleTime: 6e5,
  };
}
function _(_, _, _, _, _) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      _.cacheScope,
      _ && JSON.stringify(_),
      _,
      _?.map(_),
    ],
    queryFn: () => _(_, _, _, (_) => _, _, _),
    enabled: !!(_ && _),
    staleTime: 6e5,
  };
}
async function _(_, _, _, _, _, _) {
  let _ = _(_, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    _ = Math.floor(Date.now() / 1e3),
    _ = [];
  for (let _ = 0; _ < _.length && _.length < _; _ += _) {
    let _ = _.slice(_, _ + _),
      _ = await Promise.all(_.map((_) => _(_, _, _(_), _)));
    _.forEach((_, _) => {
      _.length < _ && _(_, _[_], _) && _.push(_);
    });
  }
  return _;
}
function _(_, _) {
  switch (_.type) {
    case _.k_EStoreFilterClauseTypeStoreTag:
      _.bTags = !0;
      break;
    case _.k_EStoreFilterClauseTypeFeatureTag:
      _.bPlatforms = !0;
      break;
    case _.k_EStoreFilterClauseTypeLanguage:
      _.bLanguages = !0;
      break;
    case _.k_EStoreFilterClauseTypeOptInRegistrationTag:
      _.bOptInRegistrationTags = !0;
      break;
    case _.k_EStoreFilterClauseTypeOr:
    case _.k_EStoreFilterClauseTypeAnd:
      _.rgSubexpressions?.forEach((_) => _(_, _));
  }
  return _;
}
async function _(_, _, _, _) {
  let [_, _, _, _, _] = await Promise.all([
    _.fetchQuery(_(_, _)).catch(() => void 0),
    _.bTags ? _.fetchQuery(_(_, _)).catch(() => null) : null,
    _.bPlatforms ? _.fetchQuery(_(_, _)).catch(() => null) : null,
    _.bLanguages ? _.fetchQuery(_(_, _)).catch(() => null) : null,
    _.bOptInRegistrationTags ? _.fetchQuery(_(_, _)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: _,
    tags: _,
    platforms: _,
    supportedLanguages: _,
    optInRegistrationTags: _,
  };
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.count || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            count: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            additional_source_items: {
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Request`;
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            weight: {
              _: 2,
              _: _.readFloat,
              _: _.writeFloat,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response_Recommendation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.count || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            count: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            item_ids: {
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Request`;
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            weight: {
              _: 2,
              _: _.readFloat,
              _: _.writeFloat,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response_Recommendation`;
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
      return `CStoreRecommendations_GetLiveSales_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sales || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sales: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
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
      return `CStoreRecommendations_GetLiveSales_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CStoreRecommendations_GetLiveSales_Response_Sale`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendations#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetPackagePurchaseRecommendations = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendationsForItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetPackagePurchaseRecommendationsForItems = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreRecommendations.GetLiveSales#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetLiveSales = _;
})((_ ||= {}));
var _ = `saleaction/recommendeddiscounts`;
function _(_) {
  let _ = new URLSearchParams(),
    { contentHub: _ } = _;
  return (
    _ &&
      (_.set(`hub_type`, _.strHubType),
      _.strCategory && _.set(`hub_category`, _.strCategory),
      _.nTagID && _.set(`hub_tagid`, String(_.nTagID))),
    _.toString()
  );
}
async function _(_, _, _) {
  let _ = _(_),
    _ = `${_.STORE_BASE_URL}${_}${_ ? `?${_}` : ``}`,
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success !== 1 || !_.discounts)
    throw Error(`${_} answered EResult ${_?.success}`);
  return _.discounts;
}
var _ = 6e5;
function _(_, _, _, _) {
  return {
    queryKey: [
      `RecommendedDiscounts`,
      _ ?? 0,
      _.country,
      _ ? JSON.stringify(_) : null,
    ],
    queryFn: () =>
      _(_, _.country, {
        contentHub: _,
      }),
    staleTime: _,
  };
}
function _(_, _) {
  return _.rgReasonLists.find((_) => _.eReason === _)?.rgAppIDs ?? [];
}
function _(_) {
  if (_.jsondata.item_source_type !== _.k_EContentHub) return;
  let _ = _.GetContentHub();
  if (_?.type)
    return {
      strHubType: _.type,
      strCategory: _.category,
      nTagID: _.tagid,
    };
}
function _(_, _) {
  let _ = _(_),
    _ = {
      contentHub: _,
      listStoreFilter: _,
      bTabTagHub: !1,
    };
  if (!_ || _) return _;
  let _ = _(_);
  if (!_) return _;
  let _ = _(_[_.length - 1]);
  return _
    ? {
        contentHub: {
          strHubType: `tags`,
          nTagID: _,
        },
        listStoreFilter: _(_.slice(0, -1)),
        bTabTagHub: !0,
      }
    : _;
}
function _(_) {
  if (_.type !== _.k_EStoreFilterClauseTypeStoreTag || _.bNegated) return;
  let _ = Number(_.value);
  if (!(!Number.isSafeInteger(_) || _ <= 0)) return _;
}
function _(_) {
  return _.length <= 1
    ? _[0]
    : {
        type: _.k_EStoreFilterClauseTypeAnd,
        rgSubexpressions: _,
      };
}
function _(_) {
  if (_.type !== _.k_EStoreFilterClauseTypeAnd) return [_];
  if (_.bNegated || !_.rgSubexpressions?.length) return;
  let _ = [];
  for (let _ of _.rgSubexpressions) {
    let _ = _(_);
    if (!_) return;
    _.push(..._);
  }
  return _;
}
function _(_, _, _) {
  if (_)
    return _.smart_section_discount_reason === void 0
      ? []
      : _(_, _.smart_section_discount_reason).slice(0, _);
}
var _ = {
  1: `#Sale_default_label_OnYourWishlist`,
  2: `#Sale_DiscountReason_Section_FirstTimeOnSale`,
  3: `#Sale_DiscountReason_Section_LargestDiscount`,
  4: `#Sale_DiscountReason_Section_EndingSoon`,
  5: `#Sale_DiscountReason_Section_NewlyOnSale`,
  6: `#Sale_DiscountReason_Section_WellReviewed`,
  7: `#Sale_DiscountReason_Section_TopSeller`,
  8: `#Sale_DiscountReason_Section_HotDeal`,
  9: `#Sale_DiscountReason_Section_DeepDiscount`,
  10: `#Sale_DiscountReason_Section_PopularInRegion`,
};
function _(_) {
  return _.smart_section_discount_reason === void 0
    ? void 0
    : _[_.smart_section_discount_reason];
}
function _(_, _) {
  return _.BUsesContentHubForItemSource() || !!_.hide_owned_items;
}
function _(_, _, _) {
  if (!_) return !1;
  let _ = !_?.bHasHideIgnoredValue || _.bHideIgnored;
  return (_.ignored && _) ||
    (_.excluded_tagids?.length ?? 0) > 0 ||
    (_.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (_?.bHideOwned && _.already_owned) ||
    (_?.bHideWishlisted && _.on_wishlist)
    ? !0
    : _ && !!(_.already_owned || _.demo_for_owned_game);
}
function _(_) {
  return _.map((_) => _.data);
}
function _(_) {
  return _.map((_) => _.data?.visible === !1);
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _(_, _),
    _ = !!_?.bHideOwned,
    _ = !!_?.bHideWishlisted,
    _ = !!_?.bHideIgnored,
    _ = !!_?.bHasHideIgnoredValue,
    _ = _({
      queries: (_ ?? []).map((_) => {
        let _ = _(_, _(_));
        return _
          ? {
              ..._,
              enabled: !1,
            }
          : _;
      }),
      combine: _,
    }),
    _ = _({
      queries: (_ ?? []).map((_) => ({
        ..._(_, _(_)),
        enabled: !1,
      })),
      combine: _,
    });
  return (0, _.useMemo)(() => {
    if (!_)
      return {
        capsules: void 0,
        nHiddenCapsules: 0,
      };
    let _ = {
        bHideOwned: _,
        bHideWishlisted: _,
        bHideIgnored: _,
        bHasHideIgnoredValue: _,
      },
      _ = 0;
    return {
      capsules: _.filter((_, _) => {
        if (_[_]) return !1;
        let _ = _[_];
        return !_(_, _, _) || ((!_?.already_owned || _) && _++, !1);
      }),
      nHiddenCapsules: _,
    };
  }, [_, _, _, _, _, _, _, _]);
}
function _(_) {
  let { capsules: _ } = _,
    _ = _();
  return (
    _({
      queries: (_ ?? []).map((_) => _(_, _(_))),
      combine: _,
    }),
    null
  );
}
function _() {
  return null;
}
var _ = {
    popularity: {
      eType: `game`,
      bDropsOwned: !1,
    },
    wishlist: {
      eType: `game`,
      bDropsOwned: !0,
    },
    interactive_recommender: {
      eType: `game`,
      bDropsOwned: !0,
    },
    wishlist_onsale: {
      eType: `game`,
      bDropsOwned: !0,
    },
    interactive_recommender_onsale: {
      eType: `game`,
      bDropsOwned: !0,
    },
    dlc_onsale: {
      eType: `dlc`,
      bDropsOwned: !0,
    },
    dlc_music_onsale: {
      eType: `music`,
      bDropsOwned: !0,
    },
    discount_reason: {
      eType: `game`,
      bDropsOwned: !1,
    },
  },
  _ = 24,
  _ = 100,
  _ = 500;
function _(_) {
  return Math.max(1, _.smart_section_min_discount_percent ?? 1);
}
function _(_) {
  return _(_) && _[_].bDropsOwned;
}
function _(_) {
  return _ !== void 0 && _ in _;
}
function _(_, _, _, _) {
  let _ = _(_),
    _ =
      _ === `tag`
        ? {
            tagid: _.smart_section_tag,
          }
        : _ === `top_n`
          ? {
              top_n_sellers: _,
            }
          : {};
  return (
    (_.min_discount_percent = _(_)),
    (_.include_packages = _.smart_section_include_packages),
    (_.include_bundles = _.smart_section_include_bundles),
    (_.include_dlc = _.smart_section_include_dlc),
    _ && (_.store_filter_json = JSON.stringify(_)),
    _(
      _,
      _,
      _,
      _ === `tag` && _.random_from_entire_set
        ? _
        : _.smart_section_max_apps || _,
    )
  );
}
function _(_, _, _, _) {
  return _(
    _,
    _,
    {
      min_discount_percent: _.smart_section_min_discount_percent || void 0,
      store_filter_json: _ ? JSON.stringify(_) : void 0,
    },
    _(_),
  );
}
function _(_, _) {
  if (_(_)) return `manual`;
  if (_.section_type !== `items`) return;
  let _ = _(_);
  if (_.enable_faceted_browsing) return _ === void 0 ? `faceted` : void 0;
  if (_ === void 0) return `manual`;
  if (
    (_ === `deck_compatibility` || _ === `frame_compatibility`) &&
    _.smart_section_data_source === `popularity`
  )
    return `popularity`;
  if (
    ((_ === `wishlist` || _ === `interactive_recommender`) &&
      _.jsondata.item_source_type !== _.k_EContentHub) ||
    _ === `wishlist_onsale` ||
    _ === `interactive_recommender_onsale` ||
    _ === `dlc_onsale` ||
    _ === `dlc_music_onsale`
  )
    return _;
  if (_ === `tag` && _.smart_section_tag) return `tag`;
  if (_ === `top_n`) return `top_n`;
  if (_ === `all_discounted`) return `all_discounted`;
  if (_ === `topwishlisted`) return `topwishlisted`;
  if (_ === `personalized_carousel`) return `personalized_carousel`;
  if (_ === `discount_reason`) return `discount_reason`;
}
function _(_, _, _) {
  let _ = _.GetDayIndexFromEventStart(_);
  return _.capsules.filter(
    (_) => _.visibility_index === void 0 || _.visibility_index === _,
  );
}
function _(_, _, _) {
  return _(_, _, _).flatMap((_) => {
    let _ = _(_);
    return _ ? [_] : [];
  });
}
function _(_, _, _, _, _) {
  let _ = _(_),
    _ = _(_, _);
  if (_(_)) {
    let _ = _[_].eType;
    return (_.tabStoreFilter ? _.tabFilteredAppIDs : _(_, _, _, _))?.map(
      (_) => ({
        _: _,
        type: _,
      }),
    );
  }
  switch (_) {
    case `manual`: {
      let _ = _(_, _, _);
      if (!_.tabStoreFilter) return _;
      if (!_.tabFilteredItems) return;
      let _ = new Set(_.tabFilteredItems.map(_));
      return _.filter((_) => {
        let _ = _(_);
        return _ !== void 0 && _.has(_(_));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!_.discountedItems) return;
      let _ = _.discountedItems.map(_).filter((_) => !!_);
      return _ === `tag` && _.random_from_entire_set
        ? _(_, _, _, _)
        : _.slice(0, _);
    }
    case `topwishlisted`:
      return _.topWishlistedItems
        ?.map(_)
        .filter((_) => !!_)
        .slice(0, _);
    case `personalized_carousel`: {
      let _ = _(_, _, _.personalizedCarousels)?.rgCapsules;
      return _ && _(_, _).slice(0, _);
    }
    default:
      return;
  }
}
function _(_, _, _, _) {
  let _ = _(_, _);
  if (_(_))
    switch (_) {
      case `popularity`:
        return _.compatAppList && _(_, _.compatAppList).slice(0, _);
      case `wishlist`:
        return _(
          _,
          _.wishlistAppIDs,
          _(_, _.GetTaggedItems()),
          _.ownedAppIDs,
          _,
        );
      case `interactive_recommender`:
        return _(
          _,
          _.recommendedAppIDs,
          _(_, _.GetTaggedItems()),
          _.ownedAppIDs,
          _,
        );
      case `wishlist_onsale`:
        return _(_, _.wishlistOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `interactive_recommender_onsale`:
        return _(_, _.recommendedOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `dlc_onsale`:
        return _(_, _.ownedDLCOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `dlc_music_onsale`:
        return _(_, _.ownedSoundtracksOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `discount_reason`:
        return _(_, _.recommendedDiscounts, _);
      default:
        _(_, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function _(_, _) {
  if (!_.smart_section_exclude_appids?.length) return _;
  let _ = new Set(_.smart_section_exclude_appids);
  return _.filter((_) => _.type !== `game` || !_.has(_._));
}
function _(_) {
  return _.smart_section_max_apps || _;
}
function _(_, _, _) {
  if (_) return _[_(_, _).nSectionIndex] ?? null;
}
function _(_, _) {
  let _ = _(_, _) === `personalized_carousel`;
  return _(_, _(_) ?? _, _);
}
function _(_) {
  return _(_, _(_), !1);
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    { storeBrowseContext: _ } = _(),
    _ = _(_),
    [_] = _(_),
    _ = _ ? _(_, _, _, _) : void 0,
    { data: _, isSuccess: _ } = _({
      ..._(_.clanSteamID.GetAccountID(), _),
      enabled: _,
    }),
    { data: _ } = _({
      ..._(_, _, _, _(_, _), _.accountid, _),
      enabled: _ && _,
    });
  return _;
}
function _(_, _, _, _, _) {
  if (!_ || !_) return;
  let _ = new Set(_.smart_section_exclude_appids);
  return _(_, _, (_) => _.has(_) || _.has(_), _);
}
function _(_, _, _) {
  let _ = !_,
    _ = _(),
    _ = _(),
    _ = _(_, _),
    _ = _(),
    _ = _(),
    { storeBrowseContext: _, dataLoader: _ } = _(),
    _ = _(_, _),
    _ = _(_),
    _ = (0, _.useMemo)(() => _(_, _), [_, _]),
    _ = _ === `discount_reason` ? _.listStoreFilter : _,
    { data: _ } = _({
      ..._(_(_)),
      enabled: _ && _ === `popularity`,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: _ && _ === `wishlist`,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: _ && _ === `interactive_recommender`,
    }),
    { data: _ } = _({
      ..._(_, _, _.accountid, _),
      enabled: _ && _ === `wishlist_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _.accountid, _),
      enabled: _ && _ === `interactive_recommender_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _.accountid, `dlc`, _),
      enabled: _ && _ === `dlc_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _.accountid, `music`, _),
      enabled: _ && _ === `dlc_music_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _),
      enabled: _ && (_ === `tag` || _ === `top_n` || _ === `all_discounted`),
    }),
    { data: _ } = _({
      ..._(_, _, _, _),
      enabled: _ && _ === `topwishlisted`,
    }),
    _ = _(_, _),
    { data: _ } = _({
      ..._(_, _, _.accountid, _.contentHub),
      enabled: _ && _ === `discount_reason`,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: _ && _(_),
    }),
    _ = (0, _.useMemo)(
      () => ({
        compatAppList: _,
        wishlistAppIDs: _,
        recommendedAppIDs: _,
        wishlistOnSaleAppIDs: _,
        recommendedOnSaleAppIDs: _,
        ownedDLCOnSaleAppIDs: _,
        ownedSoundtracksOnSaleAppIDs: _,
        discountedItems: _,
        topWishlistedItems: _,
        personalizedCarousels: _,
        recommendedDiscounts: _,
        ownedAppIDs: _,
        tabStoreFilter: _,
      }),
      [_, _, _, _, _, _, _, _, _, _, _, _, _],
    ),
    _ = !!_ && _(_),
    _ = (0, _.useMemo)(() => (_ ? _(_, _, _, 1 / 0) : void 0), [_, _, _, _]),
    { data: _ } = _({
      ..._(_, _, _, _, _(_)),
      enabled: _ && _ && _ !== void 0,
    }),
    _ = !!_ && _ === `manual`,
    _ = (0, _.useMemo)(() => (_ ? _(_, _, _) : void 0), [_, _, _, _]),
    { data: _ } = _({
      ..._(_, _, _, _, _?.length ?? 0),
      enabled: _ && _ && _ !== void 0,
    });
  return (0, _.useMemo)(() => {
    let _ = _(
      _,
      _,
      _,
      {
        ..._,
        tabFilteredAppIDs: _,
        tabFilteredItems: _,
      },
      _,
    );
    return _ && _(_, _, _, _);
  }, [_, _, _, _, _, _, _]);
}
function _(_) {
  return (_(_.event, _.section), null);
}
function _(_, _) {
  let _ = _(),
    _ = _({
      queries: _.map((_) => {
        let _ = _(_, _);
        return _
          ? {
              ..._,
              enabled: !1,
            }
          : _;
      }),
      combine: _,
    });
  return (0, _.useMemo)(() => {
    if (_ || !_.some((_) => _ === void 0))
      return _.filter((_, _) => !_(_[_], !1));
  }, [_, _, _]);
}
function _(_) {
  return _.map((_) => _.data);
}

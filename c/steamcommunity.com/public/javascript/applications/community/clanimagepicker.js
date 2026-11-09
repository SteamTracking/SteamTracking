import { _, _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./vodquery.js";
import { _ } from "./throbber.js";
import { _, _, _ } from "./filehandling.js";
import { _ } from "./emoticonbutton.js";
import { _, _, _, _ } from "./apppartnereventspage.js";
import { _, _, _ } from "./carouselarrows.js";
import { _ } from "./storeassets.js";
import { _ } from "./rewarditemdisplay.js";
import { _, _ } from "./localdateandtime.js";
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
} from "./languagepicker.js";
import "./partnereventdialog.module.js";
import { _ } from "./storeitemhooks.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = _(),
  _ = `KPyQrAYKerM-`,
  _ = `wGsVN7BCL-8-`,
  _ = `_3k6zW2BR0Ec-`,
  _ = `ALwt1eWVvf0-`,
  _ = `_630lLH8fjII-`,
  _ = `_6lXwKbKQRZM-`,
  _ = `O2ZRoYfc1Qk-`,
  _ = `WVCDoL13yGg-`,
  _ = `pBwTyvQh7iI-`,
  _ = `lWa9AGKkKhU-`,
  _ = `_2w1L-tFibuk-`,
  _ = `FNsnxK3tYRI-`,
  _ = `XfQfXm4a0JE-`,
  _ = `_5IGBtrxnWJ0-`,
  _ = `bVbljBZi-wU-`,
  _ = `v2ki0uInhRU-`,
  _ = `_7R6l0Of6MJ0-`,
  _ = `mjoUDFuJ0D8-`,
  _ = `_4cqzz9ahZPc-`,
  _ = `_4MdgvcokN4Y-`,
  _ = `oO24eF-LkHU-`,
  _ = `_6X7TrhHGdHU-`,
  _ = `_6tosRWogfkw-`,
  _ = `czSq3Y-Vo18-`,
  _ = `geYaW-yNkbE-`,
  _ = `lhECTe0HdME-`,
  _ = `_27-voxUdjLY-`,
  _ = `yTHSTjHKUiU-`;
function _(_) {
  let _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _.current?.showModal();
    let _ = document.body.style.overflow;
    return (
      (document.body.style.overflow = `hidden`),
      () => {
        document.body.style.overflow = _;
      }
    );
  }, []);
  let _ = ``;
  typeof _.imageTitle == `string` && (_ = _.imageTitle);
  let _ =
      typeof _.prevSrc == `string`
        ? (0, _.jsx)(`img`, {
            src: _.prevSrc,
            alt: ``,
          })
        : _.prevSrc,
    _ =
      typeof _.mainSrc == `string`
        ? (0, _.jsx)(`img`, {
            src: _.mainSrc,
            alt: _,
          })
        : _.mainSrc,
    _ =
      typeof _.nextSrc == `string`
        ? (0, _.jsx)(`img`, {
            src: _.nextSrc,
            alt: ``,
          })
        : _.nextSrc,
    _ = [_, ...(_.backgroundClassName ? [_.backgroundClassName] : [])];
  return (0, _.jsxs)(`dialog`, {
    ref: _,
    className: _(..._),
    onClose: (_) => _.onCloseRequest(_),
    onKeyDown: (_) => {
      _.key === `ArrowRight` && _.nextSrc
        ? _.onMoveNextRequest(_)
        : _.key === `ArrowLeft` && _.prevSrc && _.onMovePrevRequest(_);
    },
    children: [
      _.prevSrc &&
        (0, _.jsx)(`div`, {
          className: _(`_6tosRWogfkw-`, `_3pkZtcu2gT0-`),
          children: _,
        }),
      (0, _.jsx)(`div`, {
        className: _(_, _),
        role: `presentation`,
        onClick: (_) => {
          _.target.nodeName !== `IMG` && _.onCloseRequest(_);
        },
        children: _,
      }),
      _.nextSrc &&
        (0, _.jsx)(`div`, {
          className: _(`_6tosRWogfkw-`, `_9o7P2rSt6LQ-`),
          children: _,
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.imageTitle,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _.toolbarButtons,
              (0, _.jsx)(`button`, {
                className: _,
                onClick: _.onCloseRequest,
                "aria-label": _.Localize(`#Button_Close`),
              }),
            ],
          }),
        ],
      }),
      _.prevSrc &&
        (0, _.jsx)(`button`, {
          className: `wTPZkg9t8hE-`,
          onClick: _.onMovePrevRequest,
          "aria-label": _.Localize(`#Carousel_Prev`),
        }),
      _.nextSrc &&
        (0, _.jsx)(`button`, {
          className: `M1P5xCXwbro-`,
          onClick: _.onMoveNextRequest,
          "aria-label": _.Localize(`#Carousel_Next`),
        }),
    ],
  });
}
var _ = 30;
function _(_) {
  let {
      event: _,
      imageURLOverride: _,
      bShowAssociatedApp: _,
      langOverride: _,
      onClick: _,
      eEventRount: _,
      bHidePrices: _,
      nSummaryMaxLength: _,
    } = _,
    _ = _(_.appid),
    _ = _(),
    _ = _ || _(_.LANGUAGE),
    _ = _(_ === void 0 ? _ : void 0, `capsule`, _, _.capsule_main) ?? _,
    _ = _(_ === void 0 ? _ : void 0, `capsule`, _, _.full) ?? _,
    [_, _, _, _] = _(() => [
      _.GetNameWithFallback(_) || ``,
      _.GetCategoryAsString(),
      _.GetSummaryWithFallback(_, _),
      _.GetSubTitleWithLanguageFallback(_) || ``,
    ]),
    _ = _(_.appid),
    { data: _ } = _(_),
    _ = [];
  if ((_ && _.push(_), _ && _ !== _ && _.push(_), _)) {
    let _ = _(_, `main_capsule`);
    _ && _.push(_);
  }
  let [_, _] = (0, _.useState)(_),
    _ = (_, _, _) => {
      _ >= _.length && _(void 0), _(_[_ + 1]);
    };
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let _ = _ ? _.GetStartTimeAndDateUnixSeconds() : 0,
    _ = _;
  return (
    _ && (_.length > _ || _.length > _) && (_ = void 0),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(_, {
          className: _(_, `OtherEvents_EventCtn`, _),
          eventModel: _,
          route: _ || _.k_eView,
          onClick: _,
          preferredFocus: !0,
          children: [
            (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                backgroundColor: `#ffffff`,
                backgroundImage: _ ? `url(${_(_)})` : `none`,
              },
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _(_, _ && `olyf0KJqJlE-`),
                  children: (0, _.jsx)(_, {
                    rgSources: _,
                    onIncrementalError: _,
                    className: _,
                    alt: ``,
                  }),
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(`div`, {
                        className: `AYD-9JVfXTU-`,
                        children: _,
                      }),
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      gap: `3`,
                      align: `center`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _(_, _),
                          children: _,
                        }),
                        _ > _
                          ? (0, _.jsx)(`div`, {
                              className: _(_, `UpcomingCtn`),
                              children: (0, _.jsx)(_, {
                                bSingleLine: !0,
                                dateAndTime: _.GetStartTimeAndDateUnixSeconds(),
                              }),
                            })
                          : (0, _.jsx)(_, {
                              bSingleLine: !0,
                              bOnlyDate: !0,
                              dateAndTime: _.GetStartTimeAndDateUnixSeconds(),
                            }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: _(_, _),
                      children: _,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        !!(_ && _.appid) &&
          (0, _.jsx)(_, {
            appid: _.appid,
            bHidePrice: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { appid: _, bHidePrice: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = _();
  if (!_ || !_) return null;
  let _ = _ && _.hide_discount_pct_for_compliance;
  return (0, _.jsx)(_, {
    appID: _,
    children: (0, _.jsxs)(_, {
      className: _(_, `AppCapsuleCtn`),
      ..._(_, _, _, !1),
      children: [
        (0, _.jsx)(_, {
          _: _,
          hoverProps: {
            direction: `overlay`,
            style: {
              minWidth: `320px`,
            },
          },
          children: (0, _.jsx)(`img`, {
            className: _(_, _),
            src: _(_, `small_capsule`),
            alt: _.name,
          }),
        }),
        !_ &&
          !_.is_free &&
          (0, _.jsxs)(`span`, {
            className: _(`KTGJoQErGog-`, _?.discount_pct ? `PON8X0ze5G8-` : ``),
            children: [
              !!(_?.discount_pct && _) &&
                (0, _.jsx)(`div`, {
                  className: `NqZ9uMSo13A-`,
                  children: (0, _.jsx)(_, {}),
                }),
              !(!_?.discount_pct || _) &&
                (0, _.jsx)(`span`, {
                  className: `kjiBcsaqA8o-`,
                  children: `-${_?.discount_pct}%`,
                }),
              _ &&
                _.final_price_in_cents &&
                (0, _.jsx)(`span`, {
                  className: `OySWwOLLxFc-`,
                  children: _.formatted_final_price,
                }),
            ],
          }),
      ],
    }),
  });
}
var _ = _(_()),
  _ = _(_()),
  _ = (function (_) {
    return (
      (_[(_.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (_[(_.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (_[(_.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (_[(_.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      _
    );
  })({});
function _(_, _ = !1) {
  return _
    ? `${_}/${_.clanAccountID}/${_.GetThumbHashAndExt(_)}`
    : `${_}/${_.clanAccountID}/${_.GetHashAndExt(_)}`;
}
function _(_, _, _) {
  let _ = ``,
    _ = _(_);
  if (_ == 4)
    (_ = `[video webm=`),
      _.file_type == 5 && (_ += _),
      (_ += ` mp4=`),
      _.file_type == 4 && (_ += _),
      (_ += ` autoplay=true controls=false][/video]`);
  else if (_ == 2) _ = `[img]` + _ + `[/img]`;
  else {
    let _ = _(_, !0);
    _ = `[url=` + _ + `][img]` + _ + `[/img][/url]`;
  }
  _.InsertText(_);
}
var _ = `MBOGLVBsJno-`,
  _ = `W-3Dq3-54Lg-`,
  _ = `quLSuE3pc1o-`,
  _ = `lnTEZ3RD-vc-`,
  _ = `kpa9FPV-AL0-`,
  _ = `n8uggtUd8lI-`,
  _ = `PNoxLvZvnxs-`,
  _ = `iGpmTErZND8-`,
  _ = `hAZUPjOGGxE-`,
  _ = `PThjtnwdrZw-`,
  _ = `KrfJsIy2eiY-`,
  _ = `vp8ylQevKMI-`,
  _ = `zCecNDxgRwE-`,
  _ = `wxWVRBKbQ6Y-`,
  _ = `_1hQVgn9Glyw-`,
  _ = `OQ-ETv0yIhg-`,
  _ = `wVGLukava5E-`,
  _ = `crDJadcMi8A-`,
  _ = `AmP7BU2J8Pw-`;
function _(_) {
  let { fnSetImageSearch: _ } = _,
    _ = (0, _.useRef)(null);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`input`, {
      ref: _,
      className: _,
      type: `text`,
      placeholder: _(`#ImagePicker_Search`),
      onChange: (_) => _(_.currentTarget.value),
      onKeyDown: (_) => {
        _.key == `Escape` && (_(``), _.current && (_.current.value = ``));
      },
    }),
  });
}
var _ = _.memo(function (_) {
  let {
    fileNameSearch: _,
    clanAccountID: _,
    imageInsertCallBack: _,
    fnOnExpandImage: _,
    showImageActions: _ = !0,
    InternalOpenLocalizeImageGroup: _,
  } = _;
  return (0, _.jsx)(_, {
    clanAccountID: _,
    fileNameSearch: _,
    children: (_, _) =>
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            clanImage: _,
            searchStringHilight: _,
            imageInsertCallBack: _,
            showImageActions: _,
            fnOnOpenLocalizedImageGroup: _,
            OnImageClick: _,
          },
          _.imageid,
        ),
      ),
  });
});
function _(_) {
  let { clanAccountID: _, fileNameSearch: _, children: _ } = _,
    _ = _(_),
    _ = _.trim().toLowerCase() || ``,
    _ = _.GetFilteredClanImagesList(_, _);
  if (_.length == 0) {
    let _ = _.InitFromClanID(_, _.EUNIVERSE),
      _ = _.GetLoadState(_);
    return _ && _.loaded
      ? (0, _.jsx)(
          `div`,
          {
            className: _,
            children:
              _.length > 0
                ? _(`#ImagePicker_EmptySearch`)
                : _(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : _ && _.errMsg
        ? (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _(`#ImagePicker_Error`, _.errMsg),
            },
            `ImagePicker_Result`,
          )
        : (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _(`#Loading`),
            },
            `ImagePicker_Result`,
          );
  }
  return _(_, _);
}
function _(_) {
  let {
    clanAccountID: _,
    fileNameSearch: _,
    onImageSelected: _,
    selectedItem: _,
  } = _;
  return (0, _.jsx)(_, {
    clanAccountID: _,
    fileNameSearch: _,
    children: (_) =>
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              clanImage: _,
              selected: _ == _,
              onImageSelected: _,
            },
            _.imageid,
          ),
        ),
      }),
  });
}
function _(_) {
  let {
      clanImage: _,
      searchStringHilight: _,
      imageInsertCallBack: _,
      OnImageClick: _,
      showImageActions: _,
      fnOnOpenLocalizedImageGroup: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = () => _(_, _.k_eInsertFullImage),
    _ = () => _(_, _.k_eInsertVideo),
    _ = () => _(_, _.k_eInsertThumbnail),
    _ = (_) => {
      _.url &&
        (_.dataTransfer.setData(`text`, _.url),
        _.GetClanImageDragListener().forEach((_) => {
          _(_.InitFromClanID(_.clanAccountID, _.EUNIVERSE), !0);
        }));
    },
    _ = (_) => {
      _.url &&
        _.GetClanImageDragListener().forEach((_) => {
          _(_.InitFromClanID(_.clanAccountID, _.EUNIVERSE), !1);
        });
    },
    _ = (_) => {
      _(
        (0, _.jsx)(_, {
          strTitle: _(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: _,
          onCancel: _,
          closeModal: _,
          children: (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#ImagePicker_DeleteAreYouSure`, _.file_name ?? ``),
              }),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(`div`, {
                children: _(`#ImagePicker_DeleteWarning`),
              }),
            ],
          }),
        }),
        _(_) ?? window,
      );
    },
    _ = (_) => {
      console.log(`ClanImageWrapper on delete error: ` + _),
        _(
          (0, _.jsx)(_, {
            strTitle: _(`#Error_FailureNotice`),
            strDescription: _(`#EventDisplay_DeleteEvent_Error`),
            children: (0, _.jsx)(`p`, {
              children: _,
            }),
          }),
          window,
        );
    },
    _ = () => {
      _(!0);
      let _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE);
      _.DeleteClanImage(_, _)
        .then((_) => {
          _.success != 1 && _(_(_).strErrorMsg), _(!1);
        })
        .catch((_) => {
          _(_(_).strErrorMsg), _(!1);
        });
    },
    _ = () => {},
    _ = () => {
      _ && _(_);
    },
    _ = _.file_name ? _.file_name : ``,
    _ = _(_, _, String(_.imageid), _),
    _ = _.BIsClanImageVideo(_),
    _ = _ && !_ && !_,
    _ = _ && !_ && !_,
    _ = _ && !_ && _,
    _ = _ && !_ && !_;
  return (0, _.jsx)(_, {
    placeholderHeight: `100vh`,
    className: _,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: _ ? `` : `url( '${_.thumb_url}' )`,
          },
          draggable: !0,
          onDragStart: _,
          onDragEnd: _,
          onDoubleClick: _,
          onClick: _,
          children: (0, _.jsx)(_, {
            clanImage: _,
            className: _,
          }),
        }),
        _ &&
          (0, _.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: _,
            children: _(`#ImagePicker_FullSize`),
          }),
        _ &&
          (0, _.jsx)(_, {
            size: `medium`,
            className: `_9dVXPw6twXc-`,
          }),
        _ &&
          (0, _.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: _,
            children: _(`#ImagePicker_Thumbnail`),
          }),
        _ &&
          _ &&
          (0, _.jsx)(_, {
            bDeleting: _,
            clanImage: _,
            fnOnOpenLocalizedImageGroup: _,
          }),
        _ &&
          (0, _.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: _,
            children: _(`#ImagePicker_Video`),
          }),
        !_ &&
          (0, _.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: _,
            children: (0, _.jsx)(`img`, {}),
          }),
        (0, _.jsx)(`div`, {
          className: _,
          title: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { clanImage: _, fnOnOpenLocalizedImageGroup: _, bDeleting: _ } = _,
    { data: _ } = _(_.clanAccountID);
  return _ || !_?.valve_admin
    ? null
    : (0, _.jsx)(`span`, {
        className: _(_, _),
        onClick: () => _?.(_),
        children: `(VO) ` + _(`#ImagePicker_Localized`),
      });
}
function _(_) {
  let { clanImage: _, className: _ } = _;
  return _.BIsClanImageVideo(_)
    ? (0, _.jsx)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: _,
        children: (0, _.jsx)(`source`, {
          src: _.url,
          type: `video/` + (_.file_type == 4 ? `mp4` : `webm`),
        }),
      })
    : null;
}
function _(_) {
  let { clanImage: _, onImageSelected: _, selected: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `l3B7r5zxFCQ-`),
    onClick: () => _(_, !1),
    onDoubleClick: () => _(_, !0),
    title: _.file_name,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.BIsClanImageVideo(_)
          ? (0, _.jsx)(_, {
              clanImage: _,
            })
          : (0, _.jsx)(`img`, {
              src: _.url,
              loading: `lazy`,
            }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.file_name,
      }),
    ],
  });
}
function _(_) {
  let { clanSteamID: _, closeModal: _, OnClanImageSelected: _ } = _,
    _ = _.useCallback(
      (_, _) => {
        _?.(_, _), _?.();
      },
      [_, _],
    ),
    [_, _] = _.useState(``);
  return (0, _.jsxs)(_, {
    strTitle: _(`#ImagePicker_Images`),
    strDescription: _(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: _,
    onCancel: _,
    children: [
      (0, _.jsx)(_, {
        fnSetImageSearch: _,
      }),
      (0, _.jsx)(_, {
        clanAccountID: _.GetAccountID(),
        fileNameSearch: _,
        imageInsertCallBack: _,
        showImageActions: !1,
      }),
    ],
  });
}
function _(_) {
  let { clanSteamID: _, OnClanImageSelected: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, _.jsxs)(`span`, {
            children: [_(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, _.jsx)(`input`, {
        style: {
          display: `none`,
        },
        _: `clanimagedialog`,
        type: `button`,
        onClick: (_) => {
          _(
            (0, _.jsx)(_, {
              clanSteamID: _,
              OnClanImageSelected: _,
            }),
            _(_) ?? window,
          );
        },
      }),
    ],
  });
}
var _ = class _ {
  m_curLocImageGroup = null;
  m_curLocImageGroupType = null;
  constructor() {
    _(this);
  }
  static async BDoesClanImageFileExistsOnCDNOrOrigin(_, _, _, _) {
    let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/hasclanimagefile`,
      _ = {
        image_hash_and_ext: _,
        lang: `` + _,
      };
    return (
      (
        await _.default.get(_, {
          params: _,
          cancelToken: _ && _.token,
        })
      ).data.success == 1
    );
  }
  SetPrimaryImageForImageGroup(_, _) {
    (this.m_curLocImageGroup &&
      this.m_curLocImageGroup.primaryImage.imageid == _.imageid &&
      _ == this.m_curLocImageGroupType) ||
      ((this.m_curLocImageGroup = {
        primaryImage: _,
        localized_images: [],
      }),
      (this.m_curLocImageGroupType = _),
      (this.m_curLocImageGroup.localized_images = _(
        this.m_curLocImageGroup.localized_images,
        32,
        null,
      )));
  }
  GetPrimaryImageForImageGroup() {
    return this.m_curLocImageGroup?.primaryImage;
  }
  ClearImageGroup() {
    (this.m_curLocImageGroup = null), (this.m_curLocImageGroupType = null);
  }
  GetLocalizedImageGroupForEdit() {
    return this.m_curLocImageGroup;
  }
  GetLocalizedImageGroupForEditAsURL(_, _) {
    if (this.m_curLocImageGroup) {
      let _ = this.m_curLocImageGroup.primaryImage;
      return this.m_curLocImageGroup.localized_images[_]
        ? this.m_curLocImageGroup.localized_images[_]
        : _.GenerateURLFromHashAndExt(_, _.GetHashAndExt(_) ?? ``);
    }
    return null;
  }
  async DetermineAvailableLocalizationForGroup(_) {
    if (!this.m_curLocImageGroup) return;
    let _ = this.m_curLocImageGroup.primaryImage,
      _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
      _ = _.GetHashAndExt(_) ?? ``,
      _ = [];
    for (let _ = 0; _ < 32; ++_)
      _.push(_.BDoesClanImageFileExistsOnCDNOrOrigin(_, _, _, _));
    let _ = await Promise.all(_);
    _(() => {
      for (let _ = 0; _ < 32; ++_)
        _[_] &&
          (this.m_curLocImageGroup.localized_images[_] =
            _.GenerateURLFromHashAndExtAndLang(
              _,
              _,
              _.full,
              _,
              this.m_curLocImageGroupType ?? void 0,
            ));
    });
  }
  SetLocalizedImageGroupAtLang(_, _, _) {
    this.m_curLocImageGroup &&
      (this.m_curLocImageGroup.localized_images[_] = _
        ? _.GenerateURLFromHashAndExtAndLang(
            _,
            _,
            _.full,
            _,
            this.m_curLocImageGroupType ?? void 0,
          )
        : null);
  }
  AddLocalizeImageUploaded(_, _) {
    if (!this.m_curLocImageGroup) return;
    let _ = this.m_curLocImageGroup.primaryImage;
    if (_?.image_hash == _) {
      let _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
        _ = _.GetHashAndExt(_);
      _ &&
        (this.m_curLocImageGroup.localized_images[_] =
          _.GenerateURLFromHashAndExtAndLang(
            _,
            _,
            _.full,
            _,
            this.m_curLocImageGroupType ?? void 0,
          ));
    }
  }
  GetAllLocalizedGroupImages() {
    return (
      (this.m_curLocImageGroup && this.m_curLocImageGroup.localized_images) ||
      []
    );
  }
  GetAllLocalizedGroupImageHashAndExts() {
    return this.GetAllLocalizedGroupImages()
      .filter(Boolean)
      .map((_) => _.GetHashAndExtFromURL(_));
  }
};
_([_], _.prototype, `m_curLocImageGroup`, void 0);
var _ = new _(),
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`;
function _(_, _) {
  return _ ? (_ ? !!_.valve_admin : !!(_.valve_admin || _.support_user)) : !1;
}
function _(_, _) {
  let _ = !!(_ && _.BIsClanAccount()),
    { data: _ } = _(_ ? _.GetAccountID() : 0);
  return _ && _(_, _);
}
function _(_) {
  let { clanSteamID: _, _: _ } = _;
  return _(_, _.requireAdmin)
    ? (0, _.jsx)(`div`, {
        _: _,
        className: _(_.className, _.requireAdmin ? _ : _),
        children: _.children,
      })
    : null;
}
var _ = {
    editModel: null,
    bClanImagesV2: !1,
    setClanImagesV2: void 0,
  },
  _ = _.createContext(_);
function _(_) {
  return {
    fnSnapshot: () => {
      let _ = _.GetChangeState();
      return () => _.RestoreChangeState(_);
    },
  };
}
function _(_) {
  let { children: _, editModel: _ } = _,
    { bClanImagesV2: _, setClanImagesV2: _ } = _(),
    _ = _.useMemo(() => _ && _(_), [_]);
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      editModel: _,
      bClanImagesV2: _,
      setClanImagesV2: _,
    },
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(_, {
        location: 1,
        children: _,
      }),
    }),
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  return _().editModel;
}
function _() {
  let _ = `storeUseClanImagesV2`,
    [_, _] = _.useState(() => !!localStorage.getItem(_));
  return {
    bClanImagesV2: _,
    setClanImagesV2: _.useCallback((_) => {
      _ ? localStorage.setItem(_, `1`) : localStorage.removeItem(_), _(_);
    }, []),
  };
}
function _() {
  let _ = _.useContext(_);
  return {
    bClanImagesV2: _.bClanImagesV2 && !1,
    bClanImagesV2Allowed: !1,
    setClanImagesV2: _.setClanImagesV2,
  };
}
var _ = `nicknames`;
function _(_) {
  let _ = _(),
    { data: _, isLoading: _ } = _({
      queryKey: [_],
      queryFn: async () => {
        let _ = new Map();
        if (_.logged_in) {
          let _ = _.Init(_),
            _ = (await _.GetNicknameList(_, _)).Body().toObject();
          _?.nicknames &&
            _.nicknames.length > 0 &&
            _.nicknames.forEach((_) => {
              _.accountid && _.nickname && _.set(_.accountid, _.nickname);
            });
        }
        return _;
      },
    });
  return _ ? _.get(_) : null;
}
async function _(_) {
  if (!_ || _.length == 0) return [];
  let _ = _() == `community` ? _.COMMUNITY_BASE_URL : _.STORE_BASE_URL;
  if (_.length == 1) {
    let _ = {
        accountid: _[0],
        origin: self.origin,
      },
      _ = await _.default.get(`${_}actions/ajaxgetavatarpersona`, {
        params: _,
      });
    if (!_ || _.status != 200 || _.data?.success != 1 || !_.data?.userinfo)
      throw `Load single avatar/persona failed ${_(_).strErrorMsg}`;
    return [_.data.userinfo];
  }
  {
    let _ = {
        accountids: _.join(`,`),
        origin: self.origin,
      },
      _ = await _.default.get(`${_}actions/ajaxgetmultiavatarpersona`, {
        params: _,
      });
    if (!_ || _.status != 200 || _.data?.success != 1 || !_.data?.userinfos)
      throw `Load single avatar/persona failed ${_(_).strErrorMsg}`;
    let _ = new Map();
    return (
      _.data.userinfos.forEach((_) =>
        _.set(new _(_.steamid).GetAccountID(), _),
      ),
      _.map((_) => _.get(_))
    );
  }
}
var _ = new _.default((_) => _(_), {
    cache: !1,
  }),
  _ = `avatarandpersonas`;
function _(_) {
  return [_, _];
}
function _(_) {
  let { data: _, isLoading: _ } = _({
    queryKey: _(_),
    queryFn: () => _.load(_),
  });
  return [_, _];
}
var _ = `w1edBej-iT4-`;
function _(_) {
  let {
      accountID: _,
      bHideWhenNotAvailable: _,
      bHideName: _,
      bLink: _ = !0,
    } = _,
    [_] = _(_),
    _ = _(_),
    _ = _.useMemo(() => _.InitFromAccountID(_, _.EUNIVERSE), [_]),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`;
  return (0, _.jsx)(_.Fragment, {
    children: _
      ? (0, _.jsxs)(_ ? `a` : `span`, {
          href: _ ? _ : void 0,
          children: [
            (0, _.jsx)(`img`, {
              className: _,
              src: _.avatar_url,
              "data-miniprofile": `s` + _.ConvertTo64BitString(),
            }),
            !_ &&
              (0, _.jsx)(`span`, {
                children: _ ? `${_} (${_.persona_name})` : _.persona_name,
              }),
          ],
        })
      : (0, _.jsx)(_.Fragment, {
          children:
            !_ &&
            (0, _.jsx)(`span`, {
              children: _,
            }),
        }),
  });
}
var _ = _((_, _, _) => {
    ((_, _) => {
      typeof define == `function` && define.amd
        ? define([], _)
        : typeof _ == `object` && _ !== void 0
          ? (_.exports = _())
          : (_.Papa = _());
    })(_, function _() {
      var _ =
          typeof self < `u`
            ? self
            : typeof window < `u`
              ? window
              : _ === void 0
                ? {}
                : _,
        _,
        _ = !_.document && !!_.postMessage,
        _ = _.IS_PAPA_WORKER || !1,
        _ = {},
        _ = 0,
        _ = {};
      function _(_) {
        (this._handle = null),
          (this._finished = !1),
          (this._completed = !1),
          (this._halted = !1),
          (this._input = null),
          (this._baseIndex = 0),
          (this._partialLine = ``),
          (this._rowCount = 0),
          (this._start = 0),
          (this._nextChunk = null),
          (this.isFirstChunk = !0),
          (this._completeResults = {
            data: [],
            errors: [],
            meta: {},
          }),
          function (_) {
            var _ = _(_);
            (_.chunkSize = parseInt(_.chunkSize)),
              _.step || _.chunk || (_.chunkSize = null),
              (this._handle = new _(_)),
              ((this._handle.streamer = this)._config = _);
          }.call(this, _),
          (this.parseChunk = function (_, _) {
            var _ = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < _) {
              let _ = this._config.newline;
              (_ ||=
                ((_ = this._config.quoteChar || `"`),
                this._handle.guessLineEndings(_, _))),
                (_ = [..._.split(_).slice(_)].join(_));
            }
            this.isFirstChunk &&
              _(this._config.beforeFirstChunk) &&
              (_ = this._config.beforeFirstChunk(_)) !== void 0 &&
              (_ = _),
              (this.isFirstChunk = !1),
              (this._halted = !1);
            var _ = this._partialLine + _,
              _ =
                ((this._partialLine = ``),
                this._handle.parse(_, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
              if (
                ((_ = _.meta.cursor),
                (_ =
                  (this._finished ||
                    ((this._partialLine = _.substring(_ - this._baseIndex)),
                    (this._baseIndex = _)),
                  _ && _.data && (this._rowCount += _.data.length),
                  this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview))),
                _)
              )
                _.postMessage({
                  results: _,
                  workerId: _.WORKER_ID,
                  finished: _,
                });
              else if (_(this._config.chunk) && !_) {
                if (
                  (this._config.chunk(_, this._handle),
                  this._handle.paused() || this._handle.aborted())
                )
                  return void (this._halted = !0);
                this._completeResults = _ = void 0;
              }
              return (
                this._config.step ||
                  this._config.chunk ||
                  ((this._completeResults.data =
                    this._completeResults.data.concat(_.data)),
                  (this._completeResults.errors =
                    this._completeResults.errors.concat(_.errors)),
                  (this._completeResults.meta = _.meta)),
                this._completed ||
                  !_ ||
                  !_(this._config.complete) ||
                  (_ && _.meta.aborted) ||
                  (this._config.complete(this._completeResults, this._input),
                  (this._completed = !0)),
                _ || (_ && _.meta.paused) || this._nextChunk(),
                _
              );
            }
            this._halted = !0;
          }),
          (this._sendError = function (_) {
            _(this._config.error)
              ? this._config.error(_)
              : _ &&
                this._config.error &&
                _.postMessage({
                  workerId: _.WORKER_ID,
                  error: _,
                  finished: !1,
                });
          });
      }
      function _(_) {
        var _;
        (_ ||= {}).chunkSize || (_.chunkSize = _.RemoteChunkSize),
          _.call(this, _),
          (this._nextChunk = _
            ? function () {
                this._readChunk(), this._chunkLoaded();
              }
            : function () {
                this._readChunk();
              }),
          (this.stream = function (_) {
            (this._input = _), this._nextChunk();
          }),
          (this._readChunk = function () {
            if (this._finished) this._chunkLoaded();
            else {
              if (
                ((_ = new XMLHttpRequest()),
                this._config.withCredentials &&
                  (_.withCredentials = this._config.withCredentials),
                _ ||
                  ((_.onload = _(this._chunkLoaded, this)),
                  (_.onerror = _(this._chunkError, this))),
                _.open(
                  this._config.downloadRequestBody ? `POST` : `GET`,
                  this._input,
                  !_,
                ),
                this._config.downloadRequestHeaders)
              ) {
                var _,
                  _ = this._config.downloadRequestHeaders;
                for (_ in _) _.setRequestHeader(_, _[_]);
              }
              var _;
              this._config.chunkSize &&
                ((_ = this._start + this._config.chunkSize - 1),
                _.setRequestHeader(`Range`, `bytes=` + this._start + `-` + _));
              try {
                _.send(this._config.downloadRequestBody);
              } catch (_) {
                this._chunkError(_.message);
              }
              _ && _.status === 0 && this._chunkError();
            }
          }),
          (this._chunkLoaded = function () {
            _.readyState === 4 &&
              (_.status < 200 || 400 <= _.status
                ? this._chunkError()
                : ((this._start +=
                    this._config.chunkSize || _.responseText.length),
                  (this._finished =
                    !this._config.chunkSize ||
                    this._start >=
                      ((_) =>
                        (_ = _.getResponseHeader(`Content-Range`)) === null
                          ? -1
                          : parseInt(_.substring(_.lastIndexOf(`/`) + 1)))(_)),
                  this.parseChunk(_.responseText)));
          }),
          (this._chunkError = function (_) {
            (_ = _.statusText || _), this._sendError(Error(_));
          });
      }
      function _(_) {
        (_ ||= {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
          _.call(this, _);
        var _,
          _,
          _ = typeof FileReader < `u`;
        (this.stream = function (_) {
          (this._input = _),
            (_ = _.slice || _.webkitSlice || _.mozSlice),
            _
              ? (((_ = new FileReader()).onload = _(this._chunkLoaded, this)),
                (_.onerror = _(this._chunkError, this)))
              : (_ = new FileReaderSync()),
            this._nextChunk();
        }),
          (this._nextChunk = function () {
            this._finished ||
              (this._config.preview &&
                !(this._rowCount < this._config.preview)) ||
              this._readChunk();
          }),
          (this._readChunk = function () {
            var _ = this._input,
              _ =
                (this._config.chunkSize &&
                  ((_ = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  )),
                  (_ = _.call(_, this._start, _))),
                _.readAsText(_, this._config.encoding));
            _ ||
              this._chunkLoaded({
                target: {
                  result: _,
                },
              });
          }),
          (this._chunkLoaded = function (_) {
            (this._start += this._config.chunkSize),
              (this._finished =
                !this._config.chunkSize || this._start >= this._input.size),
              this.parseChunk(_.target.result);
          }),
          (this._chunkError = function () {
            this._sendError(_.error);
          });
      }
      function _(_) {
        var _;
        _.call(this, (_ ||= {})),
          (this.stream = function (_) {
            return (_ = _), this._nextChunk();
          }),
          (this._nextChunk = function () {
            var _, _;
            if (!this._finished)
              return (
                (_ = this._config.chunkSize),
                (_ = _
                  ? ((_ = _.substring(0, _)), _.substring(_))
                  : ((_ = _), ``)),
                (this._finished = !_),
                this.parseChunk(_)
              );
          });
      }
      function _(_) {
        _.call(this, (_ ||= {}));
        var _ = [],
          _ = !0,
          _ = !1;
        (this.pause = function () {
          _.prototype.pause.apply(this, arguments), this._input.pause();
        }),
          (this.resume = function () {
            _.prototype.resume.apply(this, arguments), this._input.resume();
          }),
          (this.stream = function (_) {
            (this._input = _),
              this._input._(`data`, this._streamData),
              this._input._(`end`, this._streamEnd),
              this._input._(`error`, this._streamError);
          }),
          (this._checkIsFinished = function () {
            _ && _.length === 1 && (this._finished = !0);
          }),
          (this._nextChunk = function () {
            this._checkIsFinished(),
              _.length ? this.parseChunk(_.shift()) : (_ = !0);
          }),
          (this._streamData = _(function (_) {
            try {
              _.push(
                typeof _ == `string` ? _ : _.toString(this._config.encoding),
              ),
                _ &&
                  ((_ = !1),
                  this._checkIsFinished(),
                  this.parseChunk(_.shift()));
            } catch (_) {
              this._streamError(_);
            }
          }, this)),
          (this._streamError = _(function (_) {
            this._streamCleanUp(), this._sendError(_);
          }, this)),
          (this._streamEnd = _(function () {
            this._streamCleanUp(), (_ = !0), this._streamData(``);
          }, this)),
          (this._streamCleanUp = _(function () {
            this._input.removeListener(`data`, this._streamData),
              this._input.removeListener(`end`, this._streamEnd),
              this._input.removeListener(`error`, this._streamError);
          }, this));
      }
      function _(_) {
        var _,
          _,
          _,
          _,
          _ = 2 ** 53,
          _ = -_,
          _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
          _ =
            /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
          _ = this,
          _ = 0,
          _ = 0,
          _ = !1,
          _ = !1,
          _ = [],
          _ = {
            data: [],
            errors: [],
            meta: {},
          };
        function _(_) {
          return _.skipEmptyLines === `greedy`
            ? _.join(``).trim() === ``
            : _.length === 1 && _[0].length === 0;
        }
        function _() {
          if (
            (_ &&
              _ &&
              (_(
                `Delimiter`,
                `UndetectableDelimiter`,
                `Unable to auto-detect delimiting character; defaulted to '` +
                  _.DefaultDelimiter +
                  `'`,
              ),
              (_ = !1)),
            _.skipEmptyLines &&
              (_.data = _.data.filter(function (_) {
                return !_(_);
              })),
            _())
          ) {
            if (_) {
              if (Array.isArray(_.data[0])) {
                for (var _ = 0; _() && _ < _.data.length; _++)
                  _.data[_].forEach(_);
                _.data.splice(0, 1);
              } else _.data.forEach(_);
            }
            function _(_, _) {
              _(_.transformHeader) && (_ = _.transformHeader(_, _)), _.push(_);
            }
          }
          function _(_, _) {
            for (var _ = _.header ? {} : [], _ = 0; _ < _.length; _++) {
              var _ = _,
                _ = _[_],
                _ = ((_, _) =>
                  ((_) => (
                    _.dynamicTypingFunction &&
                      _.dynamicTyping[_] === void 0 &&
                      (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                    !0 === (_.dynamicTyping[_] || _.dynamicTyping)
                  ))(_)
                    ? _ === `true` ||
                      _ === `TRUE` ||
                      (_ !== `false` &&
                        _ !== `FALSE` &&
                        (((_) => {
                          if (
                            _.test(_) &&
                            ((_ = parseFloat(_)), _ < _ && _ < _)
                          )
                            return 1;
                        })(_)
                          ? parseFloat(_)
                          : _.test(_)
                            ? new Date(_)
                            : _ === ``
                              ? null
                              : _))
                    : _)(
                  (_ = _.header
                    ? _ >= _.length
                      ? `__parsed_extra`
                      : _[_]
                    : _),
                  (_ = _.transform ? _.transform(_, _) : _),
                );
              _ === `__parsed_extra`
                ? ((_[_] = _[_] || []), _[_].push(_))
                : (_[_] = _);
            }
            return (
              _.header &&
                (_ > _.length
                  ? _(
                      `FieldMismatch`,
                      `TooManyFields`,
                      `Too many fields: expected ` +
                        _.length +
                        ` fields but parsed ` +
                        _,
                      _ + _,
                    )
                  : _ < _.length &&
                    _(
                      `FieldMismatch`,
                      `TooFewFields`,
                      `Too few fields: expected ` +
                        _.length +
                        ` fields but parsed ` +
                        _,
                      _ + _,
                    )),
              _
            );
          }
          var _;
          _ &&
            (_.header || _.dynamicTyping || _.transform) &&
            ((_ = 1),
            !_.data.length || Array.isArray(_.data[0])
              ? ((_.data = _.data.map(_)), (_ = _.data.length))
              : (_.data = _(_.data, 0)),
            _.header && _.meta && (_.meta.fields = _),
            (_ += _));
        }
        function _() {
          return _.header && _.length === 0;
        }
        function _(_, _, _, _) {
          (_ = {
            type: _,
            code: _,
            message: _,
          }),
            _ !== void 0 && (_.row = _),
            _.errors.push(_);
        }
        _(_.step) &&
          ((_ = _.step),
          (_.step = function (_) {
            (_ = _),
              _()
                ? _()
                : (_(),
                  _.data.length !== 0 &&
                    ((_ += _.data.length),
                    _.preview && _ > _.preview
                      ? _.abort()
                      : ((_.data = _.data[0]), _(_, _))));
          })),
          (this.parse = function (_, _, _) {
            var _ = _.quoteChar || `"`,
              _ =
                ((_.newline ||= this.guessLineEndings(_, _)),
                (_ = !1),
                _.delimiter
                  ? _(_.delimiter) &&
                    ((_.delimiter = _.delimiter(_)),
                    (_.meta.delimiter = _.delimiter))
                  : ((_ = ((_, _, _, _, _) => {
                      var _, _, _, _;
                      _ ||= [`,`, `	`, `|`, `;`, _.RECORD_SEP, _.UNIT_SEP];
                      for (var _ = 0; _ < _.length; _++) {
                        for (
                          var _,
                            _ = _[_],
                            _ = 0,
                            _ = 0,
                            _ = 0,
                            _ =
                              ((_ = void 0),
                              new _({
                                comments: _,
                                delimiter: _,
                                newline: _,
                                preview: 10,
                              }).parse(_)),
                            _ = 0;
                          _ < _.data.length;
                          _++
                        )
                          _ && _(_.data[_])
                            ? _++
                            : ((_ = _.data[_].length),
                              (_ += _),
                              _ === void 0
                                ? (_ = _)
                                : 0 < _ && ((_ += Math.abs(_ - _)), (_ = _)));
                        0 < _.data.length && (_ /= _.data.length - _),
                          (_ === void 0 || _ <= _) &&
                            (_ === void 0 || _ < _) &&
                            1.99 < _ &&
                            ((_ = _), (_ = _), (_ = _));
                      }
                      return {
                        successful: !!(_.delimiter = _),
                        bestDelimiter: _,
                      };
                    })(
                      _,
                      _.newline,
                      _.skipEmptyLines,
                      _.comments,
                      _.delimitersToGuess,
                    )).successful
                      ? (_.delimiter = _.bestDelimiter)
                      : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                    (_.meta.delimiter = _.delimiter)),
                _(_));
            return (
              _.preview && _.header && _.preview++,
              (_ = _),
              (_ = new _(_)),
              (_ = _.parse(_, _, _)),
              _(),
              _
                ? {
                    meta: {
                      paused: !0,
                    },
                  }
                : _ || {
                    meta: {
                      paused: !1,
                    },
                  }
            );
          }),
          (this.paused = function () {
            return _;
          }),
          (this.pause = function () {
            (_ = !0),
              _.abort(),
              (_ = _(_.chunk) ? `` : _.substring(_.getCharIndex()));
          }),
          (this.resume = function () {
            _.streamer._halted
              ? ((_ = !1), _.streamer.parseChunk(_, !0))
              : setTimeout(_.resume, 3);
          }),
          (this.aborted = function () {
            return _;
          }),
          (this.abort = function () {
            (_ = !0),
              _.abort(),
              (_.meta.aborted = !0),
              _(_.complete) && _.complete(_),
              (_ = ``);
          }),
          (this.guessLineEndings = function (_, _) {
            _ = _.substring(0, 1048576);
            var _ = RegExp(_(_) + `([^]*?)` + _(_), `gm`),
              _ = (_ = _.replace(_, ``)).split(`\r`),
              _ = _.split(`
`),
              _ = 1 < _.length && _[0].length < _[0].length;
            if (_.length === 1 || _)
              return `
`;
            for (var _ = 0, _ = 0; _ < _.length; _++)
              _[_][0] ===
                `
` && _++;
            return _ >= _.length / 2
              ? `\r
`
              : `\r`;
          });
      }
      function _(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
      }
      function _(_) {
        var _ = (_ ||= {}).delimiter,
          _ = _.newline,
          _ = _.comments,
          _ = _.step,
          _ = _.preview,
          _ = _.fastMode,
          _ = null,
          _ = !1,
          _ = _.quoteChar == null ? `"` : _.quoteChar,
          _ = _;
        if (
          (_.escapeChar !== void 0 && (_ = _.escapeChar),
          (typeof _ != `string` || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
            (_ = `,`),
          _ === _)
        )
          throw Error(`Comment character same as delimiter`);
        !0 === _
          ? (_ = `#`)
          : (typeof _ != `string` || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
            (_ = !1),
          _ !==
            `
` &&
            _ !== `\r` &&
            _ !==
              `\r
` &&
            (_ = `
`);
        var _ = 0,
          _ = !1;
        (this.parse = function (_, _, _) {
          if (typeof _ != `string`) throw Error(`Input must be a string`);
          var _ = _.length,
            _ = _.length,
            _ = _.length,
            _ = _.length,
            _ = _(_),
            _ = [],
            _ = [],
            _ = [],
            _ = (_ = 0);
          if (!_) return _();
          if (_ || (!1 !== _ && _.indexOf(_) === -1)) {
            for (var _ = _.split(_), _ = 0; _ < _.length; _++) {
              if (((_ = _[_]), (_ += _.length), _ !== _.length - 1))
                _ += _.length;
              else if (_) return _();
              if (!_ || _.substring(0, _) !== _) {
                if (_) {
                  if (((_ = []), _(_.split(_)), _(), _)) return _();
                } else _(_.split(_));
                if (_ && _ <= _) return (_ = _.slice(0, _)), _(!0);
              }
            }
            return _();
          }
          for (
            var _ = _.indexOf(_, _),
              _ = _.indexOf(_, _),
              _ = new RegExp(_(_) + _(_), `g`),
              _ = _.indexOf(_, _);
            ;
          )
            if (_[_] === _)
              for (_ = _, _++; ; ) {
                if ((_ = _.indexOf(_, _ + 1)) === -1)
                  return (
                    _ ||
                      _.push({
                        type: `Quotes`,
                        code: `MissingQuotes`,
                        message: `Quoted field unterminated`,
                        row: _.length,
                        index: _,
                      }),
                    _()
                  );
                if (_ === _ - 1) return _(_.substring(_, _).replace(_, _));
                if (_ === _ && _[_ + 1] === _) _++;
                else if (_ === _ || _ === 0 || _[_ - 1] !== _) {
                  _ !== -1 && _ < _ + 1 && (_ = _.indexOf(_, _ + 1));
                  var _ = _(
                    (_ = _ !== -1 && _ < _ + 1 ? _.indexOf(_, _ + 1) : _) === -1
                      ? _
                      : Math.min(_, _),
                  );
                  if (_.substr(_ + 1 + _, _) === _) {
                    _.push(_.substring(_, _).replace(_, _)),
                      _[(_ = _ + 1 + _ + _)] !== _ && (_ = _.indexOf(_, _)),
                      (_ = _.indexOf(_, _)),
                      (_ = _.indexOf(_, _));
                    break;
                  }
                  if (
                    ((_ = _(_)), _.substring(_ + 1 + _, _ + 1 + _ + _) === _)
                  ) {
                    if (
                      (_.push(_.substring(_, _).replace(_, _)),
                      _(_ + 1 + _ + _),
                      (_ = _.indexOf(_, _)),
                      (_ = _.indexOf(_, _)),
                      _ && (_(), _))
                    )
                      return _();
                    if (_ && _.length >= _) return _(!0);
                    break;
                  }
                  _.push({
                    type: `Quotes`,
                    code: `InvalidQuotes`,
                    message: `Trailing quote on quoted field is malformed`,
                    row: _.length,
                    index: _,
                  }),
                    _++;
                }
              }
            else if (_ && _.length === 0 && _.substring(_, _ + _) === _) {
              if (_ === -1) return _();
              (_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _));
            } else if (_ !== -1 && (_ < _ || _ === -1))
              _.push(_.substring(_, _)), (_ = _ + _), (_ = _.indexOf(_, _));
            else {
              if (_ === -1) break;
              if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                return _();
              if (_ && _.length >= _) return _(!0);
            }
          return _();
          function _(_) {
            _.push(_), (_ = _);
          }
          function _(_) {
            var _ = 0;
            return (_ =
              _ !== -1 && (_ = _.substring(_ + 1, _)) && _.trim() === ``
                ? _.length
                : _);
          }
          function _(_) {
            return (
              _ ||
                (_ === void 0 && (_ = _.substring(_)),
                _.push(_),
                (_ = _),
                _(_),
                _ && _()),
              _()
            );
          }
          function _(_) {
            (_ = _), _(_), (_ = []), (_ = _.indexOf(_, _));
          }
          function _(_) {
            if (_.header && !_ && _.length && !_) {
              var _ = _[0],
                _ = Object.create(null),
                _ = new Set(_);
              let _ = !1;
              for (let _ = 0; _ < _.length; _++) {
                let _ = _[_];
                if (
                  _[(_ = _(_.transformHeader) ? _.transformHeader(_, _) : _)]
                ) {
                  let _,
                    _ = _[_];
                  for (; (_ = _ + `_` + _), _++, _.has(_); );
                  _.add(_),
                    (_[_] = _),
                    _[_]++,
                    (_ = !0),
                    ((_ = _ === null ? {} : _)[_] = _);
                } else (_[_] = 1), (_[_] = _);
                _.add(_);
              }
              _ && console.warn(`Duplicate headers found and renamed.`),
                (_ = !0);
            }
            return {
              data: _,
              errors: _,
              meta: {
                delimiter: _,
                linebreak: _,
                aborted: _,
                truncated: !!_,
                cursor: _ + (_ || 0),
                renamedHeaders: _,
              },
            };
          }
          function _() {
            _(_()), (_ = []), (_ = []);
          }
        }),
          (this.abort = function () {
            _ = !0;
          }),
          (this.getCharIndex = function () {
            return _;
          });
      }
      function _(_) {
        var _ = _.data,
          _ = _[_.workerId],
          _ = !1;
        if (_.error) _.userError(_.error, _.file);
        else if (_.results && _.results.data) {
          var _ = {
            abort: function () {
              (_ = !0),
                _(_.workerId, {
                  data: [],
                  errors: [],
                  meta: {
                    aborted: !0,
                  },
                });
            },
            pause: _,
            resume: _,
          };
          if (_(_.userStep)) {
            for (
              var _ = 0;
              _ < _.results.data.length &&
              (_.userStep(
                {
                  data: _.results.data[_],
                  errors: _.results.errors,
                  meta: _.results.meta,
                },
                _,
              ),
              !_);
              _++
            );
            delete _.results;
          } else
            _(_.userChunk) &&
              (_.userChunk(_.results, _, _.file), delete _.results);
        }
        _.finished && !_ && _(_.workerId, _.results);
      }
      function _(_, _) {
        var _ = _[_];
        _(_.userComplete) && _.userComplete(_), _.terminate(), delete _[_];
      }
      function _() {
        throw Error(`Not implemented.`);
      }
      function _(_) {
        if (typeof _ != `object` || !_) return _;
        var _,
          _ = Array.isArray(_) ? [] : {};
        for (_ in _) _[_] = _(_[_]);
        return _;
      }
      function _(_, _) {
        return function () {
          _.apply(_, arguments);
        };
      }
      function _(_) {
        return typeof _ == `function`;
      }
      return (
        (_.parse = function (_, _) {
          var _ = (_ ||= {}).dynamicTyping || !1;
          if (
            (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
            (_.dynamicTyping = _),
            (_.transform = !!_(_.transform) && _.transform),
            !_.worker || !_.WORKERS_SUPPORTED)
          )
            return (
              (_ = null),
              _.NODE_STREAM_INPUT,
              typeof _ == `string`
                ? ((_ = ((_) => (_.charCodeAt(0) === 65279 ? _.slice(1) : _))(
                    _,
                  )),
                  (_ = new (_.download ? _ : _)(_)))
                : !0 === _.readable && _(_.read) && _(_._)
                  ? (_ = new _(_))
                  : ((_.File && _ instanceof File) || _ instanceof Object) &&
                    (_ = new _(_)),
              _.stream(_)
            );
          ((_ = (() => {
            var _;
            return (
              !!_.WORKERS_SUPPORTED &&
              ((_ = (() => {
                var _ = _.URL || _.webkitURL || null,
                  _ = _.toString();
                return (_.BLOB_URL ||= _.createObjectURL(
                  new Blob(
                    [
                      `var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,
                      `(`,
                      _,
                      `)();`,
                    ],
                    {
                      type: `text/javascript`,
                    },
                  ),
                ));
              })()),
              ((_ = new _.Worker(_)).onmessage = _),
              (_._ = _++),
              (_[_._] = _))
            );
          })()).userStep = _.step),
            (_.userChunk = _.chunk),
            (_.userComplete = _.complete),
            (_.userError = _.error),
            (_.step = _(_.step)),
            (_.chunk = _(_.chunk)),
            (_.complete = _(_.complete)),
            (_.error = _(_.error)),
            delete _.worker,
            _.postMessage({
              input: _,
              config: _,
              workerId: _._,
            });
        }),
        (_.unparse = function (_, _) {
          var _ = !1,
            _ = !0,
            _ = `,`,
            _ = `\r
`,
            _ = `"`,
            _ = _ + _,
            _ = !1,
            _ = null,
            _ = !1,
            _ =
              ((() => {
                if (typeof _ == `object`) {
                  if (
                    (typeof _.delimiter != `string` ||
                      _.BAD_DELIMITERS.filter(function (_) {
                        return _.delimiter.indexOf(_) !== -1;
                      }).length ||
                      (_ = _.delimiter),
                    (typeof _.quotes != `boolean` &&
                      typeof _.quotes != `function` &&
                      !Array.isArray(_.quotes)) ||
                      (_ = _.quotes),
                    (typeof _.skipEmptyLines != `boolean` &&
                      typeof _.skipEmptyLines != `string`) ||
                      (_ = _.skipEmptyLines),
                    typeof _.newline == `string` && (_ = _.newline),
                    typeof _.quoteChar == `string` && (_ = _.quoteChar),
                    typeof _.header == `boolean` && (_ = _.header),
                    Array.isArray(_.columns))
                  ) {
                    if (_.columns.length === 0)
                      throw Error(`Option columns is empty`);
                    _ = _.columns;
                  }
                  _.escapeChar !== void 0 && (_ = _.escapeChar + _),
                    _.escapeFormulae instanceof RegExp
                      ? (_ = _.escapeFormulae)
                      : typeof _.escapeFormulae == `boolean` &&
                        _.escapeFormulae &&
                        (_ = /^[=+\-@\t\r].*$/);
                }
              })(),
              new RegExp(_(_), `g`));
          if ((typeof _ == `string` && (_ = JSON.parse(_)), Array.isArray(_))) {
            if (!_.length || Array.isArray(_[0])) return _(null, _, _);
            if (typeof _[0] == `object`) return _(_ || Object.keys(_[0]), _, _);
          } else if (typeof _ == `object`)
            return (
              typeof _.data == `string` && (_.data = JSON.parse(_.data)),
              Array.isArray(_.data) &&
                (_.fields || (_.fields = (_.meta && _.meta.fields) || _),
                _.fields ||
                  (_.fields = Array.isArray(_.data[0])
                    ? _.fields
                    : typeof _.data[0] == `object`
                      ? Object.keys(_.data[0])
                      : []),
                Array.isArray(_.data[0]) ||
                  typeof _.data[0] == `object` ||
                  (_.data = [_.data])),
              _(_.fields || [], _.data || [], _)
            );
          throw Error(`Unable to serialize unrecognized input`);
          function _(_, _, _) {
            var _ = ``,
              _ =
                (typeof _ == `string` && (_ = JSON.parse(_)),
                typeof _ == `string` && (_ = JSON.parse(_)),
                Array.isArray(_) && 0 < _.length),
              _ = !Array.isArray(_[0]);
            if (_ && _) {
              for (var _ = 0; _ < _.length; _++)
                0 < _ && (_ += _), (_ += _(_[_], _));
              0 < _.length && (_ += _);
            }
            for (var _ = 0; _ < _.length; _++) {
              var _ = (_ ? _ : _[_]).length,
                _ = !1,
                _ = _ ? Object.keys(_[_]).length === 0 : _[_].length === 0;
              if (
                (_ &&
                  !_ &&
                  (_ =
                    _ === `greedy`
                      ? _[_].join(``).trim() === ``
                      : _[_].length === 1 && _[_][0].length === 0),
                _ === `greedy` && _)
              ) {
                for (var _ = [], _ = 0; _ < _; _++) {
                  var _ = _ ? _[_] : _;
                  _.push(_[_][_]);
                }
                _ = _.join(``).trim() === ``;
              }
              if (!_) {
                for (var _ = 0; _ < _; _++) {
                  0 < _ && !_ && (_ += _);
                  var _ = _ && _ ? _[_] : _;
                  _ += _(_[_][_], _);
                }
                _ < _.length - 1 && (!_ || (0 < _ && !_)) && (_ += _);
              }
            }
            return _;
          }
          function _(_, _) {
            var _, _;
            return _ == null
              ? ``
              : _.constructor === Date
                ? JSON.stringify(_).slice(1, 25)
                : ((_ = !1),
                  _ &&
                    typeof _ == `string` &&
                    _.test(_) &&
                    ((_ = `'` + _), (_ = !0)),
                  (_ = _.toString().replace(_, _)),
                  (_ =
                    _ ||
                    !0 === _ ||
                    (typeof _ == `function` && _(_, _)) ||
                    (Array.isArray(_) && _[_]) ||
                    ((_, _) => {
                      for (var _ = 0; _ < _.length; _++)
                        if (-1 < _.indexOf(_[_])) return !0;
                      return !1;
                    })(_, _.BAD_DELIMITERS) ||
                    -1 < _.indexOf(_) ||
                    _.charAt(0) === ` ` ||
                    _.charAt(_.length - 1) === ` `)
                    ? _ + _ + _
                    : _);
          }
        }),
        (_.RECORD_SEP = ``),
        (_.UNIT_SEP = ``),
        (_.BYTE_ORDER_MARK = `﻿`),
        (_.BAD_DELIMITERS = [
          `\r`,
          `
`,
          `"`,
          _.BYTE_ORDER_MARK,
        ]),
        (_.WORKERS_SUPPORTED = !_ && !!_.Worker),
        (_.NODE_STREAM_INPUT = 1),
        (_.LocalChunkSize = 10485760),
        (_.RemoteChunkSize = 5242880),
        (_.DefaultDelimiter = `,`),
        (_.Parser = _),
        (_.ParserHandle = _),
        (_.NetworkStreamer = _),
        (_.FileStreamer = _),
        (_.StringStreamer = _),
        (_.ReadableStreamStreamer = _),
        _.jQuery &&
          ((_ = _.jQuery)._.parse = function (_) {
            var _ = _.config || {},
              _ = [];
            return (
              this.each(function (_) {
                if (
                  !(
                    _(this).prop(`tagName`).toUpperCase() === `INPUT` &&
                    _(this).attr(`type`).toLowerCase() === `file` &&
                    _.FileReader
                  ) ||
                  !this.files ||
                  this.files.length === 0
                )
                  return !0;
                for (var _ = 0; _ < this.files.length; _++)
                  _.push({
                    file: this.files[_],
                    inputElem: this,
                    instanceConfig: _.extend({}, _),
                  });
              }),
              _(),
              this
            );
            function _() {
              if (_.length === 0) _(_.complete) && _.complete();
              else {
                var _,
                  _,
                  _,
                  _,
                  _ = _[0];
                if (_(_.before)) {
                  var _ = _.before(_.file, _.inputElem);
                  if (typeof _ == `object`) {
                    if (_.action === `abort`)
                      return (
                        (_ = `AbortError`),
                        (_ = _.file),
                        (_ = _.inputElem),
                        (_ = _.reason),
                        void (
                          _(_.error) &&
                          _.error(
                            {
                              name: _,
                            },
                            _,
                            _,
                            _,
                          )
                        )
                      );
                    if (_.action === `skip`) return void _();
                    typeof _.config == `object` &&
                      (_.instanceConfig = _.extend(_.instanceConfig, _.config));
                  } else if (_ === `skip`) return void _();
                }
                var _ = _.instanceConfig.complete;
                (_.instanceConfig.complete = function (_) {
                  _(_) && _(_, _.file, _.inputElem), _();
                }),
                  _.parse(_.file, _.instanceConfig);
              }
            }
            function _() {
              _.splice(0, 1), _();
            }
          }),
        _ &&
          (_.onmessage = function (_) {
            (_ = _.data),
              _.WORKER_ID === void 0 && _ && (_.WORKER_ID = _.workerId),
              typeof _.input == `string`
                ? _.postMessage({
                    workerId: _.WORKER_ID,
                    results: _.parse(_.input, _.config),
                    finished: !0,
                  })
                : ((_.File && _.input instanceof File) ||
                    _.input instanceof Object) &&
                  (_ = _.parse(_.input, _.config)) &&
                  _.postMessage({
                    workerId: _.WORKER_ID,
                    results: _,
                    finished: !0,
                  });
          }),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        _
      );
    });
  }),
  _ = _(_()),
  _ = class _ {
    static ParseCSVFile(_, _) {
      return new Promise((_, _) => {
        let _ = {
          header: !0,
          skipEmptyLines: `greedy`,
          complete: _,
          error: (_) =>
            _({
              errors: [_],
            }),
          transformHeader: _,
        };
        _.default.parse(_, _);
      });
    }
    static ReadFile(_) {
      return new Promise((_, _) => {
        let _ = new FileReader();
        (_.onload = () => _(_.result ?? ``)), _.readAsText(_);
      });
    }
    static WriteFile(_, _) {
      let _ = document.createElement(`a`);
      navigator.msSaveBlob
        ? navigator.msSaveBlob(_, _)
        : (_.href = window.URL.createObjectURL(_)),
        _.setAttribute(`download`, _),
        _.click();
      try {
        document.removeChild(_);
      } catch {}
    }
    static WriteCSVToFile(_, _, _, _) {
      let _ = _
          ? _.default.unparse(
              {
                fields: _,
                data: _,
              },
              {
                header: !0,
              },
            )
          : _.default.unparse(_, {
              header: !0,
            }),
        _ = _ == 1 ? [`﻿` + _] : [_];
      _.WriteFile(
        new Blob(_, {
          type: `text/csv:charset=utf-8;`,
        }),
        _,
      );
    }
    static m_DummyValueForQuestionHack = 0;
    static WriteXMLToFile(_, _) {
      let _ = () => (this.m_DummyValueForQuestionHack ? `never returned` : `?`),
        _ =
          `<` +
          _() +
          `xml version="1.0" encoding="UTF-8" ` +
          _() +
          `>
`;
      (_ += new XMLSerializer().serializeToString(_)),
        _.WriteFile(
          new Blob([_], {
            type: `application/xml:charset=utf-8;`,
          }),
          _,
        );
    }
  };
function _(_) {
  let {
      onDropFiles: _,
      renderDesciption: _,
      elAdditonalButtons: _,
      elOverrideDragAndDropText: _,
    } = _,
    [_, _] = _(_),
    [_, _] = _(_, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, _.jsxs)(`div`, {
    ..._,
    className: _(_ ? _ : _, `DragAndDropContainer`),
    children: [
      !!_ && _(),
      (0, _.jsx)(`div`, {
        children: _ || _(`#ImagePicker_DragAndDrop`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _,
          (0, _.jsxs)(`label`, {
            onClick: _,
            children: [
              (0, _.jsxs)(`span`, {
                children: [_(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, _.jsx)(`span`, {
                className: _,
                children: _(`#selectimage_select_file`),
              }),
            ],
          }),
        ],
      }),
      _,
      _.children,
    ],
  });
}
var _ = `_5RINCHFuy0Y-`,
  _ = `GWe0Hc-fT2A-`,
  _ = `Wmeqy6nXS1Y-`,
  _ = `_698Kbr-wNSM-`,
  _ = `_4l0OY5qTFkk-`,
  _ = `_4StKqHsfdjg-`,
  _ = `dp7SyRphVOo-`,
  _ = `OoUlU8pBBN4-`;
function _(_) {
  let {
      imageUploader: _,
      fnUploadComplete: _,
      elOverrideDragAndDropText: _,
      forceResolution: _,
      elAdditonalButtons: _,
      rgRealmList: _,
    } = _,
    [_, _] = _(() => [_.GetUploadImages(), _.Get().GetCurEditLanguage()]),
    _ = _.useCallback(
      async (_) => {
        let _ = Array.from(_),
          _ = !0;
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            { language: _ } = _(_?.name, _);
          try {
            let _ = _(_, _, _);
            (_ = await _.AddImageForLanguage(_, _)),
              _ ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    _ +
                    ` file=` +
                    _.name,
                ),
                _(
                  (0, _.jsx)(_, {
                    strDescription: _(`#ImagePicker_Error`, _.name),
                  }),
                  window,
                ));
          } catch (_) {
            let _ = _(_);
            console.error(
              `ImageUploaderPanel.OnDropFiles: ` + _.strErrorMsg,
              _,
            ),
              _(
                (0, _.jsx)(_, {
                  strDescription: _(`#EventError_Code`, _.strErrorMsg ?? ``),
                }),
                window,
              );
          }
        }
        return _;
      },
      [_, _, _],
    ),
    _ = _.useMemo(
      () =>
        _ instanceof Array
          ? _
          : [
              (0, _.jsx)(
                _.Fragment,
                {
                  children: _,
                },
                `elAdditonalButtons`,
              ),
            ],
      [_],
    );
  return (
    _(() =>
      _.map((_) => ({
        _: _.GetCurrentImageOption(),
        _: _.language,
      })),
    ),
    (0, _.jsxs)(_, {
      onDropFiles: _,
      elAdditonalButtons: _,
      elOverrideDragAndDropText: _,
      children: [
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  asset: _,
                  forceResolution: _,
                  fnOnRemove: () => _.DeleteUploadImage(_),
                  languageRealms: _,
                },
                `arttabupload_` + _.filename + `_` + _.uploadTime,
              ),
            ),
          }),
        }),
        (0, _.jsx)(_, {
          imageUploader: _,
          fnOnUploadImageRequested: async () => {
            let _ = await _.UploadAllImages(_);
            _?.(_);
          },
        }),
      ],
    })
  );
}
function _(_) {
  let { imageUploader: _, fnOnUploadImageRequested: _ } = _,
    [_] = _(() => [_.GetUploadImages()]),
    _ = _.some((_) => _.status == `pending`),
    _ = _.some(
      (_) =>
        _.status == `waiting` ||
        _.status == `uploading` ||
        _.status == `processing`,
    );
  return (0, _.jsxs)(`div`, {
    style: {
      display: `flex`,
    },
    className: _,
    children: [
      !!_.length &&
        (0, _.jsx)(_, {
          style: {
            margin: `8px`,
          },
          onClick: _,
          disabled: !_,
          children: _(`#ImageUpload_Upload`),
        }),
      !!_.length &&
        (0, _.jsx)(_, {
          style: {
            margin: `8px`,
          },
          onClick: _.ClearImages,
          disabled: _,
          children: _(`#ImageUpload_Clear`),
        }),
    ],
  });
}
function _(_, _, _, _, _) {
  let _ = [];
  return (
    _.GetUploadImages().forEach((_) => {
      _.push(
        (0, _.jsx)(
          _,
          {
            asset: _,
            forceResolution: _,
            forceFileType: _,
            fnOnRemove: () => _.DeleteUploadImage(_),
            languageRealms: _,
          },
          _ + _.file + `_` + _.uploadTime,
        ),
      );
    }),
    _
  );
}
var _ = _(_);
function _(_) {
  let _ = (_) => {
      if (_ instanceof _) {
        _.ResetImage();
        let _ = window,
          _ = (0, _.jsx)(_, {
            ownerWin: _,
            uploadFile: _,
            forceResolution: _.forceResolution,
            fileType: _.forceFileType || 3,
          });
        _(_, _, `CropModal`, {
          strTitle: _(`#ImageUpload_CropModalTitle`),
        });
      } else
        console.log(
          `ImageUploadEmbeddedDialog trying to crop non image`,
          _.fileType,
          JSON.stringify(_.GetCurrentImageOption()),
        );
    },
    { asset: _, fnOnRemove: _, languageRealms: _ } = _,
    _ = _.ImageOptions?.map((_) => {
      let _ = _?.fnGetLabelText(),
        _;
      _.bEnforceDimensions && (_ += ` - ${_.width}x${_.height}`),
        _.bDeprecated &&
          ((_ += ` ${_(`#ImageUpload_Deprecated`)}`),
          (_ = _(`#ImageUpload_Deprecated_ttip`)));
      let _;
      return (
        (_.BIsOriginalMinimumDimensions(_) && _.FileTypeMatchesImageTypes(_)) ||
          (_ = _),
        {
          label: _,
          data: _,
          strOptionClass: _,
          tooltip: _,
        }
      );
    }).filter((_) => !_.data.bHiddenFromDropdown),
    _ = {
      pending: _(`#ImageUpload_Pending`),
      waiting: _(`#ImageUpload_Waiting`),
      uploading: _(`#ImageUpload_Uploading`),
      processing: _(`#ImageUpload_Processing`),
      success: _(`#ImageUpload_SuccessCard`),
      failed: _(`#ImageUpload_Failed`),
    },
    _ = _.BSupportsLanguages()
      ? _(_.GetLanguageListForRealms(_ ?? [_.k_ESteamRealmGlobal]))
      : null,
    _ = _.IsValidAssetType(_.forceResolution, _.forceFileType),
    _ = _.status == `pending`,
    _ = _[_.status];
  _.status == `pending` &&
    (_.needsCrop
      ? (_ = _(`#ImageUpload_NeedsCrop`))
      : _.error && (_ = _(`#ImageUpload_Invalid`)));
  let _,
    _ = _.GetCurrentImageOption();
  return (
    _ && (_ = _?.find((_) => _.data.sKey == _.sKey)?.data),
    (_ ||= _?.[0]?.data),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          onClick: () => _(_),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          asset: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: _,
            selectedOption: _.language,
            onChange: (_) => (_.language = _.data),
            disabled: !_,
          }),
        _ &&
          _?.length > 1 &&
          (0, _.jsx)(_, {
            label: _.GetImageOptionLabel(),
            rgOptions: _,
            selectedOption: _,
            onChange: (_) => _.SetCurrentImageOption(_.data),
            disabled: !_,
          }),
        _ &&
          _.warnings?.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: `hb0m5mPiE2A-`,
                children: _,
              },
              `warning${_}`,
            ),
          ),
        _ &&
          _.messages?.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: `CGM5a4V3nBU-`,
                children: _,
              },
              `message${_}`,
            ),
          ),
        (0, _.jsxs)(`div`, {
          className: _({
            [_]: !0,
            [_]: _.status == `failed`,
          }),
          children: [
            _,
            _(_.status) &&
              (0, _.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, _.jsx)(_, {
                  size: `small`,
                }),
              }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.message,
        }),
        _ &&
          _.error &&
          (0, _.jsx)(`div`, {
            className: `_4l0OY5qTFkk-`,
            children: _.error,
          }),
        _ &&
          _.needsCrop &&
          (0, _.jsx)(_, {
            onClick: () => _(_),
            children: _(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function _(_) {
  let { asset: _ } = _;
  return _.BIsVideo()
    ? (0, _.jsxs)(`div`, {
        className: _,
        onClick: (_) =>
          _(
            (0, _.jsx)(_, {
              asset: _,
            }),
            _(_),
          ),
        children: [
          (0, _.jsxs)(`span`, {
            className: _,
            children: [_.width, ` x `, _.height],
          }),
          (0, _.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, _.jsx)(`source`, {
              src: _.dataUrl,
            }),
          }),
        ],
      })
    : (0, _.jsx)(`div`, {
        className: _,
        style: {
          backgroundImage: `url(${_.dataUrl})`,
        },
        children: (0, _.jsxs)(`span`, {
          className: _,
          children: [_.width, ` x `, _.height],
        }),
      });
}
function _(_) {
  let { asset: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    bAlertDialog: !0,
    closeModal: _,
    bAllowFullSize: !0,
    children: (0, _.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, _.jsx)(`source`, {
        src: _.dataUrl,
      }),
    }),
  });
}
function _(_) {
  let _ = [],
    _ = [];
  for (let _ of _) {
    if (_ == 25) continue;
    let _ = _(`#Language_` + _(_));
    _.push({
      label: _,
      data: _,
    });
  }
  return (
    _.sort((_, _) => _.label.localeCompare(_.label)),
    _.forEach((_) =>
      _.push({
        label: _.label,
        data: _.data,
      }),
    ),
    _
  );
}
function _(_) {
  let {
      clanSteamID: _,
      rgSupportArtwork: _,
      localizedPrimaryImage: _,
      bAllowPreviousClanImageSelection: _,
      fnSetImageURL: _,
      rgRealmList: _,
    } = _,
    [_] = _(() => [_.Get().GetCurEditLanguage()]),
    _ = _(_, _, _),
    _ = _.uploaderOverride || _,
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      async (_, _) => {
        if (!_) {
          _(!0);
          try {
            let { language: _ } = _(_.file_name ?? ``, _),
              _ = _(_, _, _);
            await _.AddExistingClanImage(_, _);
          } catch (_) {
            let _ = _(_);
            console.error(`AddExistingClanImage: ` + _.strErrorMsg, _),
              _(
                (0, _.jsx)(_, {
                  strDescription: _(`#EventError_Code`, _.strErrorMsg ?? ``),
                }),
                window,
              );
          }
          _(!1);
        }
      },
      [_, _, _, _],
    ),
    _ = _.useMemo(
      () =>
        _
          ? [
              [
                (0, _.jsx)(
                  _,
                  {
                    clanSteamID: _,
                    OnClanImageSelected: _,
                  },
                  `clanartworkpicker`,
                ),
              ],
            ]
          : null,
      [_, _, _],
    ),
    _ = (_) => {
      for (let _ of _) {
        let _ = _.uploadResult;
        if (_?.origimagehash) {
          let _ = _(_.language, _, _);
          _.AddLocalizeImageUploaded(_.origimagehash, _);
        } else {
          let _ = _.GetClanImageByImageHash(_, _?.image_hash ?? ``),
            _ = _.image.GetCurrentImageOption();
          if (_ && _) {
            let _ = _(_.image.language, _, _);
            _(_.artworkType, _, _);
          }
        }
      }
    };
  return (0, _.jsx)(_, {
    ..._,
    imageUploader: _,
    rgRealmList: _,
    elAdditonalButtons: _
      ? [
          (0, _.jsx)(
            _,
            {
              position: `center`,
              size: `medium`,
              string: _(`#Loading`),
            },
            `throbbing`,
          ),
        ]
      : _,
    fnUploadComplete: _,
  });
}
var _ = `x0kXRDaNEsY-`,
  _ = `tggLx72V-Ck-`,
  _ = `DVwf02s2GtI-`,
  _ = `zREkqfL42-U-`,
  _ = `_7zBg1-UuADM-`,
  _ = `TMQhyilc41c-`,
  _ = `t2inDYSKOto-`,
  _ = `-FHzhwwvQvA-`,
  _ = `ZUy8iSsvilc-`,
  _ = `XRZj1OeBHRk-`,
  _ = `_2lViMA09hm4-`,
  _ = `hvd5bQPy4pQ-`,
  _ = `BTC1IyUleCA-`,
  _ = `lEWE2I7Rsj8-`,
  _ = `_12sYjoMc9wE-`,
  _ = `Y63LZFKwGXE-`,
  _ = `Ymr3nNqG0aU-`,
  _ = `c4t3b8o-GC8-`,
  _ = `_8hs8sf5-YPQ-`,
  _ = `wFigUYm29Qk-`,
  _ = `_8R-vFXPq55U-`,
  _ = `_6Wouy9o4gBY-`,
  _ = `dWdTSpaG0Wo-`,
  _ = `_0OoyXZePW7I-`,
  _ = `w0qNWg-lQUo-`,
  _ = `Hy2GxVyZVDA-`;
function _(_) {
  let {
      clanImage: _,
      closeModal: _,
      lang: _,
      fnOnArtworkLangChange: _,
      realms: _,
      fnLangHasData: _,
    } = _,
    [_, _] = (0, _.useState)(_),
    _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
    _ = _(() => _.GenerateURLFromHashAndExt(_, _.GetHashAndExt(_) ?? ``));
  return (0, _.jsx)(_, {
    strTitle: _(`#selectimage_change_artwork_lang_title`),
    strDescription: _(`#selectimage_change_artworl_lang_desc`),
    onOK: () => _?.(_, _, _),
    onCancel: _,
    closeModal: _,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _,
            src: _,
          }),
        }),
        (0, _.jsx)(_, {
          selectedLang: _,
          fnLangHasData: _,
          fnOnLanguageChanged: _,
          realms: _,
        }),
      ],
    }),
  });
}
function _(_) {
  if (!_) return _;
  let _ = _.lastIndexOf(`.`);
  return _ === -1 ? _ : _.substring(0, _);
}
var _ = `fHmTl9jH1EQ-`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function _(_) {
  let {
    clanSteamID: _,
    fnGetImageHash: _,
    fnLangHasData: _,
    fnOnRemoveImage: _,
  } = _;
  _(_.GetAccountID());
  let _ = _.useMemo(() => {
      let _ = [],
        _ = _.GetLanguageListForRealms([
          _.k_ESteamRealmGlobal,
          _.k_ESteamRealmChina,
        ]);
      for (let _ of _) {
        let _ = _(_);
        if (_) {
          let _ = _(_),
            _ = _(`#Language_` + _);
          _.push({
            lang: _,
            strLang: _,
            locLang: _,
            imgHash: _,
          });
        }
      }
      return (
        (_ = _.sort((_, _) =>
          _.locLang > _.locLang ? 1 : _.locLang < _.locLang ? -1 : 0,
        )),
        _
      );
    }, [_]),
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#selectimage_uploaded_languages`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              langData: _,
              ..._,
            },
            `lang_select_` + _.GetAccountID() + ` ` + _.strLang,
          ),
        ),
      }),
      !!_ &&
        (0, _.jsxs)(_, {
          onClick: _,
          children: [
            _(`#Sale_RemoveAll`),
            (0, _.jsx)(_, {
              tooltip: _(`#Sale_RemoveAll_Tooltip`),
            }),
          ],
        }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strTitle: _(`#Dialog_AreYouSure`),
          strDescription: _(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: _,
          onOK: () => {
            for (let _ = 0; _ < 32; _++) _ && _ && _(_) && _(_);
          },
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      clanSteamID: _,
      langData: _,
      langOverride: _,
      fnOnLanguagePreviewChange: _,
      fnOnArtworkLangChange: _,
      fnOnRemoveImage: _,
    } = _,
    [_, _] = _(() => {
      let _ = _.GetClanImageByImageHash(_, _.imgHash),
        _ = ``;
      _ &&
        (_ = _.GenerateURLFromHashAndExtAndLang(
          _,
          _.GetHashAndExt(_),
          _.full,
          _.lang,
        ));
      let _ = _;
      return _ != _.lang && (_ = _.imgHash ? _ : _), [_, _];
    });
  return (0, _.jsxs)(`div`, {
    _: _.strLang,
    className: _,
    onClick: (_) => {
      let _ = _(_.currentTarget._);
      _(_);
    },
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.locLang,
      }),
      (0, _.jsxs)(`span`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(`a`, {
              href: _,
              target: `_blank`,
              children: (0, _.jsx)(_, {
                toolTipContent: _(`#selectimage_viewimage_ttip`),
                children: _(),
              }),
            }),
          !!_ &&
            (0, _.jsx)(_, {
              ..._,
            }),
          !!_ &&
            (0, _.jsx)(_, {
              fnOnRemoveImage: _,
              langData: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      clanSteamID: _,
      langData: _,
      fnOnArtworkLangChange: _,
      fnGetImageHash: _,
      fnLangHasData: _,
      realms: _,
    } = _,
    [_, _, _] = _(),
    _ = _(() => {
      let _ = _(_.lang);
      return (
        _(
          !_ || !_.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + _,
        ),
        _.GetClanImageByImageHash(_, _)
      );
    });
  if (!_) console.error(`image does not exists on server`);
  else
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _(`#selectimage_reassign_image_ttip`),
          children: (0, _.jsx)(`img`, {
            "data-lang": _.lang,
            src: _,
            onClick: () => _(),
          }),
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              clanImage: _,
              lang: _.lang,
              fnOnArtworkLangChange: _,
              fnLangHasData: _,
              realms: _,
              closeModal: _,
            }),
          }),
        }),
      ],
    });
}
function _(_) {
  let { fnOnRemoveImage: _, langData: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _(`#selectimage_delete_image_ttip`),
        children: (0, _.jsx)(`img`, {
          "data-lang": _.lang,
          src: _,
          onClick: _,
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            strTitle: _(`#selectimage_remove_image`),
            strDescription: _(
              `#selectimage_remove_details`,
              _(`#Language_` + _(_.lang)),
            ),
            onOK: () => {
              _(_.lang);
            },
            closeModal: _,
          }),
        }),
      }),
    ],
  });
}
var _ = `dGiOZKKuxfQ-`,
  _ = `h7-04bl97uc-`,
  _ = `MhIotXf5RFA-`,
  _ = `mSMnUkR7SZM-`,
  _ = `aWAciZoU3Zo-`,
  _ = `_8AV36Rh-Ve4-`,
  _ = `lxYifi3D8mU-`,
  _ = `MwNTpeRZ8FM-`,
  _ = `RdR4GEnIG5Q-`,
  _ = `epGy6XXAGPQ-`;
function _(_) {
  let {
      event: _,
      spotlightURLOverride: _,
      fnHandleOpenEvent: _,
      fnImageFailureCallback: _,
      fnFilterImageURLsForKnownFailures: _,
      langOverride: _,
    } = _,
    _ = _(),
    _ = _.useCallback(
      (_) => {
        _.preventDefault(), _ && _(_);
      },
      [_, _],
    ),
    _ = _ || _(_.LANGUAGE),
    [_, _, _] = _(() => [
      _.GetSummaryWithFallback(_),
      _.GetNameWithFallback(_),
      _.BShowLibrarySpotlightText(),
    ]),
    _ = `spotlight`,
    _ = _.spotlight_main;
  (_.appid == 2434320 || _.EUNIVERSE == 2) &&
    ((_ = _
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (_ = _.full));
  let _ = _(_ === void 0 ? _ : void 0, _, _, _) ?? (_ === void 0 ? [] : [_]);
  _ && _ && (_ = _(_));
  let _ = _.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(`div`, {
      className: _,
      ref: _.containerRef,
      children: (0, _.jsxs)(_, {
        className: _(_, _),
        onActivate: _,
        focusable: !0,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              rgSources: _,
              onIncrementalError: (_, _, _) => _ && _(_),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                rgSources: _,
                onIncrementalError: (_, _, _) => _ && _(_),
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children:
                  _ &&
                  (0, _.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, _.jsx)(_, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: _,
                        onIncrementalError: (_, _, _) => _ && _(_),
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, _.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: _,
                          }),
                          (0, _.jsx)(`div`, {
                            className: `_9RjQ-a9Uc6o-`,
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
    }),
  });
}
var _ = `JMbtQkd0K8E-`,
  _ = `snS7KDov-nE-`,
  _ = `nvWdGclp6FI-`,
  _ = `xK18jc4N1cw-`,
  _ = `IQEedJq4bc8-`,
  _ = `fCimlPrmscM-`,
  _ = `e6k9OpDXG-Q-`,
  _ = `seprbrMSMhI-`,
  _ = `_4CNssq7QFLI-`,
  _ = `yzbYtn5vgZU-`,
  _ = `idlQxtNGVBg-`,
  _ = `mELVvJo8G3c-`,
  _ = `fF5tI3UN-YY-`;
function _(_) {
  let {
      langOverride: _,
      artworkType: _,
      fnOnLanguagePreviewChange: _,
      clanSteamID: _,
      eventModel: _,
      partnerEventStore: _,
      fnOnRemoveImage: _,
      fnOnArtworkLangChange: _,
      realms: _,
      fnLangHasData: _,
      fnGetImageHashAndExt: _,
    } = _,
    _ = _(_, _),
    _ = _ ? _.GenerateURLFromHashAndExtAndLang(_, _, _.full, _) : ``,
    [_] = _(() => [_(_, _)]);
  return _ == 0
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === `capsule` &&
            (0, _.jsx)(_, {
              imgURL: _.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: _,
            }),
          _ === `background` &&
            (0, _.jsx)(_, {
              imgURL: _.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: _,
              eventModel: _,
              partnerEventStore: _,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(_) &&
            (0, _.jsx)(_, {
              langOverride: _,
              artworkType: _,
              eventModel: _,
            }),
          (0, _.jsx)(`div`, {
            children: _(`#EventEditor_ArtworkMissing`),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === `capsule` &&
            (0, _.jsx)(_, {
              imgURL: _,
              eventModel: _,
              langOverride: _,
            }),
          _ === `background` &&
            (0, _.jsx)(_, {
              imgURL: _,
              lang: _,
              eventModel: _,
              partnerEventStore: _,
            }),
          _ === `spotlight` &&
            (0, _.jsx)(_, {
              imgURL: _,
              event: _,
              lang: _,
            }),
          _ === `localized_store_app_spotlight` &&
            (0, _.jsx)(_, {
              imgURL: _,
              event: _,
              lang: _,
            }),
          _ === `localized_store_app_spotlight_mobile` &&
            (0, _.jsx)(_, {
              imgURL: _,
              event: _,
              lang: _,
            }),
          (_ === `broadcast_left` || _ === `broadcast_right`) &&
            (0, _.jsx)(_, {
              imgURL: _,
              side: _ === `broadcast_right` ? `right` : `left`,
            }),
          _ === `sale_header` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `sale_overlay` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _.includes(_) &&
            (0, _.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: _.GetLocalizedImageGroupForEditAsURL(_, _) ?? void 0,
            }),
          _ === `product_banner` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `product_mobile_banner` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `sale_logo` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `bestofyear_banner` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `bestofyear_banner_mobile` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          (0, _.jsx)(_, {
            langOverride: _,
            clanSteamID: _,
            fnOnLanguagePreviewChange: _,
            fnOnRemoveImage: _,
            fnOnArtworkLangChange: _,
            realms: _,
            fnLangHasData: _,
            fnGetImageHash: (_) => _(_(_, _) ?? ``),
          }),
        ],
      });
}
function _(_) {
  let { artworkType: _, langOverride: _, eventModel: _ } = _,
    _ = _[_],
    _ = _.useMemo(
      () => _(_(`#EventEditor_ArtworkType_` + _), `${_.width} X ${_.height}`),
      [_.height, _.width, _],
    );
  return (0, _.jsx)(_, {
    lang: _,
    imgURL: _,
    event: _,
  });
}
function _(_, _) {
  let _ = document.createElement(`canvas`);
  (_.width = 780), (_.height = 200);
  let _ = _.getContext(`2d`);
  for (let _ = 0; _ < 200; _ += 20)
    for (let _ = 0; _ < 780; _ += 20)
      (_.fillStyle = (_ / 20 + _ / 20) % 2 == 0 ? `#a405e3ff` : `#000000`),
        _.fillRect(_, _, 20, 20);
  let _ = _.createLinearGradient(0, 0, 780, 0);
  _.addColorStop(0, `rgba(32,32,32,0.8)`),
    _.addColorStop(1, `rgba(60,60,60,0.8)`),
    (_.fillStyle = _),
    _.fillRect(0, 0, 780, 200);
  let _ = _.createRadialGradient(390, 100, 0, 390, 100, 650);
  return (
    _.addColorStop(0, `rgba(0,0,0,0)`),
    _.addColorStop(1, `rgba(0,0,0,0.6)`),
    (_.fillStyle = _),
    _.fillRect(0, 0, 780, 200),
    (_.fillStyle = `#fff`),
    (_.font = `32px Arial`),
    (_.textAlign = `center`),
    (_.textBaseline = `middle`),
    _.fillText(_, 390, 80),
    _ && ((_.font = `18px Arial`), _.fillText(_, 390, 125)),
    _.toDataURL(`image/png`)
  );
}
function _(_) {
  let { imgURL: _, eventModel: _, langOverride: _ } = _,
    _ = _();
  return (0, _.jsx)(`div`, {
    style: {
      display: `flex`,
      width: `304px`,
    },
    children: (0, _.jsx)(_, {
      event: _,
      imageURLOverride: _,
      langOverride: _ ?? _,
    }),
  });
}
function _(_) {
  let { lang: _, eventModel: _, partnerEventStore: _ } = _,
    _ = _(),
    [_, _, _, _, _] = _(() => [
      _.GetNameWithFallback(_),
      _.GetDescriptionWithFallback(_),
      _.GetSubTitleWithLanguageFallback(_),
      _.type,
      _.AnnouncementGID,
    ]),
    _ = _
      ? (0, _.jsx)(_, {
          text: _ || ``,
          showErrorInfo: !1,
          event: _,
          languageOverride: _.Get().GetCurEditLanguage(),
        })
      : _(`#selectimage_display_event_body`);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#selectimage_preview_title_1`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, `DetailPageExample`),
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`img`, {
                src: _.imgURL,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _ || _(`#selectimage_display_event_title`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _ || _(`#selectimage_display_event_subtitle`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _,
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      _ != 12 &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `y-gExtn9yi8-`,
            }),
            (0, _.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: _(`#selectimage_preview_title_2`),
            }),
            (0, _.jsx)(`div`, {
              className: _(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, _.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, _.jsx)(
                  _,
                  {
                    event: _,
                    emoticonStore: _,
                    partnerEventStore: _,
                    headerClassnames: `editor`,
                    langOverride: _,
                    bDisableBroadcastPlayer: !0,
                  },
                  _,
                ),
              }),
            }),
          ],
        }),
    ],
  });
}
var _ = (_) => {
    let [_] = _(_.event.appid, {
      include_assets: !0,
    });
    if (!_) return null;
    let _ = _.GetName(),
      _ = _.GetAssets()?.GetCommunityIconURL();
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        event: _.event,
        strDisplayName: _ ?? ``,
        gameIconUrl: _,
        spotlightURLOverride: _.imgURL,
        langOverride: _.lang,
      }),
    });
  },
  _ = (_) => {
    let _ = [
      (0, _.jsx)(
        `img`,
        {
          src: _.imgURL,
        },
        `img`,
      ),
      (0, _.jsx)(
        `div`,
        {
          className: _,
        },
        `video`,
      ),
    ];
    return (
      _.side === `right` && _.reverse(),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      })
    );
  },
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        style: {
          width: `100%`,
        },
        src: _.imgURL,
      }),
    }),
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        style: {
          width: `100%`,
        },
        src: _.imgURL,
      }),
    }),
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        style: {
          width: `100%`,
        },
        src: _.imgURL,
      }),
    });
function _(_, _) {
  let _ = 0;
  for (let _ = 0; _ < 32; ++_) (_(_, _)?.length ?? 0) > 0 && (_ += 1);
  return _;
}
var _ = `https://partner.steamgames.com/doc/store/localization#supported_languages`,
  _ = (function (_) {
    return (
      (_[(_.k_None = 0)] = `k_None`),
      (_[(_.k_Suggested = 1)] = `k_Suggested`),
      (_[(_.k_Required = 2)] = `k_Required`),
      (_[(_.k_Requested = 3)] = `k_Requested`),
      _
    );
  })({});
function _(_) {
  let {
      artworkType: _,
      headerHint: _,
      appid: _,
      fnToggleMinimize: _,
      realms: _,
      eventModel: _,
      fnLangHasData: _,
      fnGetImageHashAndExt: _,
      fnSetImageURL: _,
      partnerEventStore: _,
    } = _,
    [_] = _(_, {
      include_assets: !0,
    }),
    [_, _] = _(() => [_?.GetEventType(), _?.BHasTag(`vo_marketing_message`)]),
    _ = _ == 36,
    _ = null;
  _ === 2
    ? (_ = (0, _.jsx)(`span`, {
        style: {
          color: `#C6512B`,
        },
        children: _(`#EventEditor_Required`),
      }))
    : _ === 1
      ? (_ = (0, _.jsx)(`span`, {
          style: {
            color: `#D7BC86`,
          },
          children: _(`#EventEditor_Suggested`),
        }))
      : _ === 3 &&
        (_ = (0, _.jsx)(`span`, {
          style: {
            color: `#D7BC86`,
          },
          children: _(`#EventEditor_Requested`),
        }));
  let _ = null;
  _ === `capsule`
    ? (_ = _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_creatorhome_2`),
                ],
              }),
            ],
          })
        : (0, _.jsxs)(_.Fragment, {
            children: [
              !!_ &&
                (0, _.jsxs)(`div`, {
                  className: `GF-R3pK6u-A-`,
                  children: [
                    (0, _.jsx)(`p`, {
                      children: _(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, _.jsx)(`p`, {
                      children: (0, _.jsx)(`a`, {
                        href: `${_.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: _(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : _ === `background`
      ? (_ = (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`p`, {
            children: [
              (0, _.jsx)(`strong`, {
                children: _(`#selectimage_tip_design_title`),
              }),
              `: `,
              _(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : _ === `spotlight` || _ === `localized_store_app_spotlight`
        ? (_ = (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)(`p`, {
              children: [
                (0, _.jsx)(`strong`, {
                  children: _(`#selectimage_tip_usage_title`),
                }),
                `: `,
                _(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : _ === `localized_store_app_spotlight_mobile`
          ? (_ = (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : _ === `broadcast_left` || _ === `broadcast_right`
            ? (_ = (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)(`p`, {
                  children: _(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : _ === `sale_header`
              ? (_ = (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(`#selectimage_tip_required_title`),
                    }),
                    (0, _.jsxs)(`p`, {
                      children: [
                        (0, _.jsx)(`b`, {
                          children: _(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        _(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, _.jsxs)(`p`, {
                      children: [
                        (0, _.jsx)(`b`, {
                          children: _(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        _(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, _.jsx)(`p`, {
                      children: _(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, _.jsxs)(`p`, {
                      children: [
                        (0, _.jsx)(`b`, {
                          children: _(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, _.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: _(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`br`, {}),
                  ],
                }))
              : _ === `hero`
                ? _ &&
                  (_ = (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`p`, {
                        children: _(`#selectimage_tip_hero_1`),
                      }),
                      !_.GetAssets()?.GetLibraryHeroURL() &&
                        (0, _.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: _(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : (_ =
                    _ === `localized_image_group` ||
                    _ === `link_capsule` ||
                    _ === `sale_section_title` ||
                    _ === `schedule_track_art` ||
                    _ === `localized_background_art`
                      ? (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(`p`, {
                              children: _(`#ImagePickerLoc_Desc`),
                            }),
                            (0, _.jsx)(`p`, {
                              children: _(
                                `#ImagePickerLoc_Files`,
                                (0, _.jsx)(`a`, {
                                  href: _,
                                  target: _.IN_CLIENT ? void 0 : `_blank`,
                                  children: _(`#ImagePickerLoc_URL`),
                                }),
                              ),
                            }),
                          ],
                        })
                      : _ === `product_banner`
                        ? (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(`div`, {
                                className: _,
                                children: _(`#selectimage_tip_optional_title`),
                              }),
                              (0, _.jsxs)(`p`, {
                                children: [
                                  (0, _.jsx)(`b`, {
                                    children: _(`#selectimage_tip_usage_title`),
                                  }),
                                  `: `,
                                  _(`#selectimage_tip_sale_product_banner`),
                                ],
                              }),
                            ],
                          })
                        : _ === `product_mobile_banner` ||
                            _ === `product_banner_override` ||
                            _ === `product_mobile_banner_override`
                          ? (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(`div`, {
                                  className: _,
                                  children: _(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, _.jsxs)(`p`, {
                                  children: [
                                    (0, _.jsx)(`b`, {
                                      children: _(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    _(`#selectimage_tip_sale_product_banner`),
                                    _ === `product_mobile_banner` &&
                                      (0, _.jsxs)(`span`, {
                                        children: [
                                          `  `,
                                          _(
                                            `#selectimage_tip_sale_product_banner_mobile`,
                                          ),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            })
                          : _ === `tab_bar_background`
                            ? (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsxs)(`p`, {
                                    children: [
                                      (0, _.jsx)(`strong`, {
                                        children: _(
                                          `#selectimage_tip_design_title`,
                                        ),
                                      }),
                                      `:`,
                                      _(`#Sale_Tabs_Background_Design`),
                                    ],
                                  }),
                                  (0, _.jsxs)(`p`, {
                                    children: [
                                      (0, _.jsx)(`strong`, {
                                        children: _(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `:`,
                                      _(`#Sale_Tabs_Background_Usage`),
                                    ],
                                  }),
                                ],
                              })
                            : _ === `sale_logo`
                              ? (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)(`div`, {
                                      className: _,
                                      children: _(
                                        `#selectimage_tip_optional_title`,
                                      ),
                                    }),
                                    (0, _.jsxs)(`p`, {
                                      children: [
                                        (0, _.jsx)(`b`, {
                                          children: _(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        _(`#selectimage_tip_pageLogo`),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)(`div`, {
                                      className: _,
                                      children: _(
                                        `#selectimage_tip_required_title`,
                                      ),
                                    }),
                                    (0, _.jsxs)(`p`, {
                                      children: [
                                        (0, _.jsx)(`b`, {
                                          children: _(
                                            `#selectimage_tip_usage_title`,
                                          ),
                                        }),
                                        `: `,
                                        _(`#selectimage_tip_bestofyear`),
                                      ],
                                    }),
                                  ],
                                }));
  let _ = _[_.artworkType].width,
    _ = _[_.artworkType].height;
  return (0, _.jsxs)(`div`, {
    _: _._,
    className: _,
    children: [
      !!_.title &&
        (0, _.jsxs)(`div`, {
          className: `Y63LZFKwGXE-`,
          onDoubleClick: _,
          children: [
            _.title,
            (0, _.jsx)(`span`, {
              children: `\xA0`,
            }),
            _,
            _ &&
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)(_, {
                  toolTipContent: _(
                    _.bIsMinimized
                      ? `#Sale_Section_Maximize_Tooltip`
                      : `#Sale_Section_Minimize_Tooltip`,
                  ),
                  children: _.bIsMinimized
                    ? (0, _.jsx)(_, {})
                    : (0, _.jsx)(_, {}),
                }),
              }),
          ],
        }),
      !_.bIsMinimized &&
        (0, _.jsxs)(`div`, {
          className: _(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(_ && _) &&
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`b`, {
                    children: _(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  _(`#selectimage_tip1`, _(_), _(_)),
                ],
              }),
            !!_.strWarning &&
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`p`, {
                  className: `n7RXDTH-Wf8-`,
                  children: _.strWarning,
                }),
              }),
            _.elEventArtworkExample,
            `\xA0`,
            (0, _.jsx)(`br`, {}),
            _.elAdditionalControls,
            !!_.fnRemoveAllArtwork &&
              (0, _.jsx)(_, {
                onClick: (_) => {
                  _(
                    (0, _.jsx)(_, {
                      fnRemoveAllArtwork: _.fnRemoveAllArtwork,
                    }),
                    _(_) ?? window,
                  );
                },
                children: _(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !_.bIsMinimized &&
        (0, _.jsx)(_, {
          clanSteamID: _.clanSteamID,
          title: _.title ?? ``,
          eventModel: _,
          artworkType: _.artworkType,
          realms: _,
          appid: _,
          fnGetImageHashAndExt: _,
          fnSetImageURL: _,
          fnLangHasData: _,
          partnerEventStore: _,
        }),
    ],
  });
}
function _(_) {
  let { fnRemoveAllArtwork: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _(`#Sale_RemoveAll`),
    strDescription: _(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      _?.(), _?.();
    },
    onCancel: _,
  });
}
function _(_) {
  let {
      artworkType: _,
      realms: _,
      clanSteamID: _,
      fnLangHasData: _,
      fnGetImageHashAndExt: _,
      fnSetImageURL: _,
      eventModel: _,
      appid: _,
      partnerEventStore: _,
    } = _,
    _ = _ === `localized_image_group`,
    [_, _] = _.useState(_()),
    [_, _] = _.useState([]),
    _ = _.useCallback(
      (_, _, _) => {
        let _ = [];
        _.find((_) => _.clanImage.imageid == _.imageid)
          ? (_ = _.map((_) =>
              _.clanImage.imageid == _.imageid
                ? {
                    clanImage: _,
                    lang: _,
                  }
                : _,
            ))
          : _ &&
            (_ = _.concat({
              clanImage: _,
              lang: _,
            })),
          _(_);
      },
      [_],
    ),
    _ = _.useCallback(
      (_, _, _) => {
        _(() => {
          _(_(_, _) ?? ``) == _.image_hash && _(_, null, _),
            _(_, _, _),
            _(_, _, !1);
        });
      },
      [_, _, _, _],
    );
  return _ === `hero`
    ? (0, _.jsx)(`div`, {
        style: {
          padding: `16px`,
        },
        children: (0, _.jsx)(_, {
          style: {
            textTransform: `uppercase`,
            width: `200px`,
          },
          onClick: () =>
            window.open(
              `${_.PARTNER_BASE_URL}admin/game/editbyappid/${_}?activetab=tab_graphicalassets`,
            ),
          children: _(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(_, {
            list: _,
            fnOnArtworkLanguageChange: _,
            realms: _,
            fnLangHasData: _,
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`div`, {
              className: _(_, _),
              children: (0, _.jsx)(_, {
                eventModel: _,
                clanSteamID: _,
                fnOnLanguagePreviewChange: (_) => {
                  _ != _ && _(_);
                },
                langOverride: _,
                fnOnArtworkLangChange: _ ? null : _,
                artworkType: _,
                fnOnRemoveImage: _ ? null : (_) => _(_, null, _),
                realms: _,
                fnLangHasData: _,
                fnGetImageHashAndExt: _,
                partnerEventStore: _,
              }),
            }),
          }),
        ],
      });
}
var _ = class extends _.Component {
  ShowLangChangeDialog(_, _) {
    let {
      fnOnArtworkLanguageChange: _,
      realms: _,
      fnLangHasData: _,
    } = this.props;
    _(
      (0, _.jsx)(_, {
        clanImage: _,
        lang: _,
        fnOnArtworkLangChange: _,
        fnLangHasData: _,
        realms: _,
      }),
      window,
    );
  }
  GenerateImageMappings() {
    let _ = [],
      { list: _ } = this.props;
    return (
      _.forEach((_) => {
        let { clanImage: _, lang: _ } = _,
          _ = _(`#Language_` + _(_));
        _.push(
          (0, _.jsxs)(
            `div`,
            {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  children: _(
                    `#ImageUpload_Success_Mapping`,
                    _.file_name ?? ``,
                    _,
                  ),
                }),
                (0, _.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(_, _),
                  children: _(`#ImageUpload_Success_Mapping_Change`),
                }),
              ],
            },
            `img_lang_` + _.clanImage.imageid + `_` + _,
          ),
        );
      }),
      _
    );
  }
  render() {
    let { list: _ } = this.props;
    if (!_ || _.length == 0) return (0, _.jsx)(`div`, {});
    let _ = this.GenerateImageMappings();
    return (0, _.jsx)(`div`, {
      className: _,
      children: _,
    });
  }
};
_([_], _.prototype, `ShowLangChangeDialog`, null), (_ = _([_], _));
var _ = `_0K9D8c3MMwY-`,
  _ = `b19PwxErdL4-`,
  _ = `YHd3rTa2Hms-`,
  _ = _((_) => {
    let {
        closeModal: _,
        appid: _,
        partnerEventStore: _,
        primaryLocalizedImage: _,
        clanSteamID: _,
        fnSetImageURL: _,
        rgRealmList: _,
        fnLangHasData: _,
        fnGetImageHash: _,
      } = _,
      [_, _] = _.useState(),
      [_, _] = _.useState(!0),
      [_, _] = _.useState(),
      _ = _(() => _.default.CancelToken.source());
    _.useEffect(
      () => () => _.cancel(`LocalizedImageDialog component unmounted`),
      [_],
    );
    let _ = _.useCallback(async () => {
        try {
          let _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
            _ = await _.AsyncGetImageResolution(
              _,
              _.image_hash,
              _.file_type,
              _,
              !1,
            );
          if (_.token.reason) return;
          if (_.success != 1 || !_.width || !_.height) {
            console.error(
              `LocalizedImageDialog : failed to determine the primary image resolution. ` +
                (_.err_msg ?? ``),
            ),
              _({
                strMsg: _.err_msg,
              });
            return;
          }
          _(void 0), _(_);
        } catch (_) {
          let _ = _(_);
          console.error(`LocalizedImageDialog : ` + _.strErrorMsg, _),
            _({
              strMsg: _.strErrorMsg,
            });
        }
      }, [_, _.clanAccountID, _.file_type, _.image_hash]),
      _ = _.useCallback(async () => {
        try {
          await _.DetermineAvailableLocalizationForGroup(_),
            _.token.reason || _(!1);
        } catch (_) {
          let _ = _(_);
          console.error(`LocalizedImageDialog : ` + _.strErrorMsg, _);
        }
      }, [_]),
      _ = _.useCallback(() => _().then(_), [_, _]),
      _ = _.useCallback(() => {
        _(void 0), _();
      }, [_]);
    _.useEffect(() => {
      _ && (_.SetPrimaryImageForImageGroup(_, `localized_image_group`), _());
    }, [_, _, _]);
    let _ = !_ && _,
      _ = _ ? ` - ${_.width}x${_.height}` : ``,
      _ = _(_.file_type).slice(1),
      _ =
        _?.width && _?.height
          ? {
              width: _.width,
              height: _.height,
            }
          : void 0,
      _ = _.GenerateURLFromHashAndExt(_, _.GetHashAndExt(_));
    return (0, _.jsx)(_, {
      bAllowFullSize: !0,
      title: _(`#ImagePickerLoc_Title`),
      onCancel: _,
      closeModal: _,
      children: (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsxs)(`span`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    children: [
                      _(`#ImagePickerLoc_Default`),
                      (0, _.jsx)(_, {
                        tooltip: _(`#ImagePickerLoc_Default_Hint`),
                      }),
                    ],
                  }),
                  (0, _.jsx)(`img`, {
                    className: _,
                    src: _,
                  }),
                  (0, _.jsx)(`div`, {
                    children: _.file_name + _ + ` - ` + _,
                  }),
                ],
              }),
            }),
            !!_ &&
              (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsx)(`div`, {
                    children: _(`#Error_Message`),
                  }),
                  !!_?.strMsg &&
                    (0, _.jsx)(`div`, {
                      children: _.strMsg,
                    }),
                  (0, _.jsx)(`div`, {
                    className: `yYL-OrX9PtQ-`,
                    onClick: _,
                    children: _(`#Button_Retry`),
                  }),
                ],
              }),
            !_ &&
              !_ &&
              (0, _.jsx)(_, {
                position: `center`,
                string: _(`#Loading`),
              }),
            _ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    clanSteamID: _,
                    rgSupportArtwork: [],
                    localizedPrimaryImage: _,
                    forceResolution: _,
                    bAllowPreviousClanImageSelection: !0,
                    fnSetImageURL: _,
                    rgRealmList: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: `D-rfVSNga3g-`,
                    children: (0, _.jsx)(_, {
                      clanSteamID: _,
                      eventModel: void 0,
                      artworkType: `localized_image_group`,
                      title: _(`#ImagePickerLoc_Title`),
                      realms: _,
                      fnLangHasData: _,
                      appid: _,
                      fnGetImageHashAndExt: _,
                      fnSetImageURL: _,
                      partnerEventStore: _,
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
    });
  }),
  _ = 1,
  _ = _((_) => {
    let {
        clanSteamID: _,
        appid: _,
        imageInsertCallBack: _,
        partnerEventStore: _,
        bHideDragAndDrop: _,
        bShowLightBox: _,
        fnSetImageURL: _,
        rgRealmList: _,
        fnLangHasData: _,
        fnGetImageHash: _,
      } = _,
      [_, _] = _.useState(``),
      [_, _] = _.useState(0),
      [_, _] = _.useState(),
      [_, _] = _.useState(void 0),
      [_, _] = _.useState(!_.BHasLoadedClanImages(_)),
      [_, _] = _.useState(void 0),
      _ = _(() => _.default.CancelToken.source());
    _.useEffect(
      () => () => _.cancel(`ClanImagePicker component unmounted`),
      [_],
    );
    let _ = _(() => new Map()),
      [_, _] = (0, _.useState)(null),
      { bClanImagesV2: _ } = _(),
      _ = _.GetAccountID(),
      _ = _.useCallback(() => _.LoadClanImages(_, !1, _.token), [_, _]),
      _ = _.useCallback(async () => {
        if (!_.has(_.GetAccountID()))
          try {
            await _(), _.token.reason || _(!1);
          } catch (_) {
            let _ = _(_);
            console.error(
              `ClanImagePicker Failed: ` +
                _.strErrorMsg +
                ` errCode: ` +
                _.strErrorMsg,
            ),
              _.set(_.GetAccountID(), _.strErrorMsg),
              _.token.reason || (_(!1), _(_.strErrorMsg));
          }
      }, [_, _, _, _]);
    _.useEffect(() => {
      _ && _();
    }, [_, _]);
    let _ = _.useCallback(() => {
      _(!0), _();
    }, [_]);
    _.useEffect(() => {
      _();
    }, [_, _]);
    let _ = _.BHasLoadedClanImages(_);
    _.useEffect(() => {
      _ || _();
    }, [_, _]);
    let _ = () => {
        _(_), _(null);
      },
      _ = async (_) => {
        if (_ && _.length > 0) {
          let _ = _ ? new _(_, null) : new _(_, null);
          _(_);
          let _ = !0,
            _ = Array.from(_);
          for (let _ = 0; _ && _ < _.length; _++) {
            let _ = _[_];
            (_ = await _.AddImage(_, 0)),
              _ ||
                (console.error(
                  `ClanImagePicker.OnDropFiles: failed on i=` +
                    _ +
                    ` file=` +
                    _.name,
                ),
                _(
                  (0, _.jsx)(_, {
                    strDescription: _(`#ImagePicker_Error`, _.name),
                  }),
                  window,
                ));
          }
          return _ && (_(``), _(++_), _.UploadAllImages()), _;
        }
        return !1;
      },
      _ = (_) => {
        if (_ && _) {
          let _ = _.GetFilteredClanImages(_, _.trim().toLowerCase()),
            _ = _.findIndex((_, _, _) => _.imageid == _.imageid);
          _ >= 0 && (_(_), _(_));
        }
      },
      _ = () => {
        _(void 0), _(void 0);
      },
      _ = (_) => {
        if (_ != null) {
          let _ = _[_];
          _(),
            requestAnimationFrame(() => {
              _(_, _);
            });
        }
      },
      _ = () => {
        _(_.k_eInsertFullImage);
      },
      _ = () => {
        _(_.k_eInsertThumbnail);
      },
      _ = (_) => {
        _(
          (0, _.jsx)(_, {
            primaryLocalizedImage: _,
            appid: _,
            clanSteamID: _,
            fnSetImageURL: _,
            rgRealmList: _,
            fnLangHasData: _,
            fnGetImageHash: _,
            partnerEventStore: _,
          }),
          window,
        );
      };
    if (_)
      return (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#Error_Message`),
          }),
          (0, _.jsx)(`div`, {
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _(_),
            onClick: _,
            children: _(`#Button_Retry`),
          }),
        ],
      });
    if (_)
      return (0, _.jsx)(_, {
        position: `center`,
        string: _(`#Loading`),
      });
    let _ = _;
    return (0, _.jsxs)(`div`, {
      className: _(_),
      children: [
        (0, _.jsx)(_, {
          fnSetImageSearch: (_) => _(_),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            clanAccountID: _.GetAccountID(),
            fileNameSearch: _,
            imageInsertCallBack: _,
            fnOnExpandImage: _,
            InternalOpenLocalizeImageGroup: _,
          }),
        }),
        _ > 0 &&
          (0, _.jsx)(
            _,
            {
              uploader: _,
              onDismiss: _,
            },
            `clanimageuploaderview` + _,
          ),
        !_ &&
          (0, _.jsx)(_, {
            onDropFiles: _,
          }),
        _ != null &&
          (0, _.jsx)(_, {
            mainSrc: _[_].url,
            imageTitle: _[_].file_name,
            nextSrc: _ < _.length - 1 ? _[_ + 1].url : void 0,
            prevSrc: _ > 0 ? _[_ - 1].url : void 0,
            onMoveNextRequest: () => _(_ + 1),
            onMovePrevRequest: () => _(_ - 1),
            onCloseRequest: _,
            toolbarButtons: [
              (0, _.jsx)(
                `button`,
                {
                  className: void 0,
                  onClick: _,
                  children: _(`#ImagePicker_FullSize`),
                },
                `fullsize`,
              ),
              (0, _.jsx)(
                `button`,
                {
                  className: void 0,
                  onClick: _,
                  children: _(`#ImagePicker_Thumbnail`),
                },
                `thumbnail`,
              ),
            ],
          }),
        (0, _.jsx)(_, {}),
      ],
    });
  });
function _(_) {
  let { bClanImagesV2: _, bClanImagesV2Allowed: _, setClanImagesV2: _ } = _();
  return (0, _.jsx)(_.Fragment, {
    children:
      _ &&
      _ &&
      (0, _.jsx)(_, {
        className: `_0Ja-rgK4nrE-`,
        label: `New media conversion`,
        checked: _,
        onChange: (_) => _(_),
      }),
  });
}
function _(_) {
  let { uploader: _, onDismiss: _ } = _,
    [_, _] = _(() => [_.BAllDone(), !_.BAllDone() && !_.BHasError()]),
    _ = _.GetLastErrorFile();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsxs)(`div`, {
          className: `zUOcF2T681w-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `_8o2e76PWsg4-`,
              children: _(
                `#ImageUpload_Desc`,
                _.GetCompletedFiles(),
                _.GetTotalFiles(),
              ),
            }),
            (0, _.jsx)(`button`, {
              className: `DialogButton`,
              onClick: () => {
                _.CancelAllUploads(), _();
              },
              children: _(`#Button_Cancel`),
            }),
          ],
        }),
      _.BHasError() &&
        _ &&
        (0, _.jsxs)(`div`, {
          className: `wpM8bM9qRVU-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `c62o1ZlOdck-`,
              children: _(
                `#ImageUpload_Error`,
                _.file.name,
                _.status,
                _.message,
              ),
            }),
            (0, _.jsx)(`button`, {
              className: void 0,
              onClick: _,
              children: _(`#Button_Cancel`),
            }),
            (0, _.jsx)(`button`, {
              className: void 0,
              onClick: () => _.RetryAllFailedUploads(),
              children: _(`#Button_Retry`),
            }),
          ],
        }),
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `wpM8bM9qRVU-`,
          children: (0, _.jsx)(`div`, {
            className: `nulT7BBB8Xc-`,
            children: _(`#ImageUpload_Success`),
          }),
        }),
    ],
  });
}
export {
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
};

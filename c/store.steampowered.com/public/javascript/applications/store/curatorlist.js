import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _ } from "./salecapsuleutils.js";
import { _ } from "./saletags.js";
import { _ } from "./ostype.js";
import { _ } from "./salestoreitemutils.js";
import { _ } from "./ajaxhooks.js";
import { _ } from "./throbber.js";
import { _, _ } from "./youtubeplayer.js";
import { _ } from "./creatorhomestore.js";
import { _, _ } from "./bottomrow.js";
import { _ } from "./storeitemhooks.js";
import { _ } from "./partnereventstore.js";
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
} from "./main.js";
import { _, _, _, _ } from "./curatorliststore.js";
import { _, _, _ } from "./breadcrumbs.js";
var _ = _(_()),
  _ = _(_());
async function _(_, _) {
  let _ = _.STORE_BASE_URL + `contenthub/ajaxfilterappsbycontenthub`,
    _ = {
      hubtype: _.GetContentHubType(),
      category: _.GetContentHubCategory(),
      tagid: _.GetContentHubTag(),
      prune_list_optin_name: _.jsondata.prune_list_optin_name,
      optin_tagid: _.jsondata.optin_tagid,
      optin_prune_tagid: _.jsondata.optin_prune_tagid,
      optin_only: _.jsondata.optin_only,
      applist: _.sort().join(`,`),
    },
    _ = null,
    _ = new Set();
  try {
    let _ = await _.default.get(_, {
      params: _,
    });
    if (_?.data?.success == 1) return _.data.appids.forEach((_) => _.add(_)), _;
    _ = _(_);
  } catch (_) {
    _ = _(_);
  }
  return (
    console.error(`LoadContentHubFilteredApps failed: ` + _?.strErrorMsg, _), _
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(
      _?.BUsesContentHubForItemSource() ? new Set() : null,
    ),
    _ = _(`useFilteredAppViaContentHub`);
  return (
    (0, _.useEffect)(() => {
      _?.BUsesContentHubForItemSource() &&
        !_ &&
        _(_, _).then((_) => {
          _.token.reason || _(_);
        });
    }, [_, _.token.reason, _, _]),
    _
  );
}
var _ = `LMjlJLd09eU-`,
  _ = _(),
  _ = RegExp(`(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*`);
function _(_) {
  let _ = _.exec(_);
  return _ && _.length > 1 ? _[1] : null;
}
function _(_) {
  let {
      posterURL: _,
      videoid: _,
      muted: _,
      autoplay: _,
      bIsClipID: _,
      time: _,
      width: _,
      height: _,
    } = _,
    [_, _] = _.useState(!!_),
    _ = _ == null || _ == null ? !1 : _;
  if (_)
    return (0, _.jsxs)(`div`, {
      className: _(`YoutubePreviewContainer`, _, _.imageClassnames),
      onClick: () => _(!1),
      children: [
        (0, _.jsx)(`img`, {
          className: _(`YoutubePreviewImage`, _),
          src:
            _ ||
            _.COMMUNITY_CDN_URL +
              `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, _.jsx)(`div`, {
          className: `YoutubePreviewPlay`,
          children: (0, _.jsx)(_, {}),
        }),
      ],
    });
  let _ = _().replace(`https://`, ``),
    _ = _.indexOf(`/`);
  _ >= 0 && (_ = _.substring(0, _));
  let _ = _
    ? `https://clips.twitch.tv/embed?clip=${_}`
    : `https://player.twitch.tv/?video=${_}`;
  return (
    (_ += `&parent=${_}&autoplay=${_}&muted=${!!_}`),
    _ && (_ += `&time=${_(_)}`),
    (0, _.jsxs)(`div`, {
      className: _(`YoutubePlayer`, _),
      children: [
        (0, _.jsx)(`img`, {
          className: _(`YoutubePreviewContainer`, _, _.imageClassnames),
          src:
            _.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, _.jsx)(`iframe`, {
          src: _,
          allowFullScreen: !0,
          frameBorder: 0,
          width: _ || 460,
          height: _ || 300,
        }),
      ],
    })
  );
}
function _(_) {
  let _ = Math.floor(_ / 3600);
  _ -= _ * 60 * 60;
  let _ = Math.floor(_ / 60);
  return (_ -= _ * _), `${_}h${_}m${_}s`;
}
var _ = `ZJL8xBrL2zY-`,
  _ = `vcekW7OLx38-`,
  _ = `cjONkgdKdxs-`,
  _ = `_7EHvAH-Cqp8-`,
  _ = `neAjfYOyTWw-`,
  _ = `X-OZGk8rbxw-`,
  _ = `CDtzz-Fwpc0-`,
  _ = `HSJKBwIxxH4-`,
  _ = `zg-WTx3uDhs-`,
  _ = `b7xIE9WPJTE-`,
  _ = `f3V8-AASUnA-`,
  _ = `_0MMdXDYn6ZA-`,
  _ = `Me7GsElyNYA-`,
  _ = `vtyTYN5s4nY-`,
  _ = `H4kwsOz873U-`,
  _ = `bY4DK7YciBA-`,
  _ = `DLZ4HONMq2Y-`,
  _ = `hipnIHHLr9E-`,
  _ = `bQgGv6zgjbs-`,
  _ = `cXA4-j-l0zU-`,
  _ = `qzYG-yvQ9-o-`,
  _ = `UjfVuSwhzy8-`,
  _ = `iVT7Gst4KAQ-`,
  _ = `x-pmRKYt6Aw-`,
  _ = `_-2HaCIOBhIc-`;
function _(_) {
  let { clanInfo: _ } = _,
    { curator_link: _, curator_medium_avatar: _ } = _(
      `curator_header`,
      `application_config`,
    );
  return (0, _.jsx)(_, {
    className: `page_content_ctn`,
    "flow-children": `column`,
    autoFocus: !0,
    children: (0, _.jsxs)(`div`, {
      className: `page_content ` + _,
      children: [
        (0, _.jsx)(_, {
          className: _,
          crumbs: _(`breadcrumbs`, `application_config`),
        }),
        (0, _.jsxs)(_, {
          className: `list_header_area`,
          "flow-children": `row`,
          children: [
            (0, _.jsx)(`div`, {
              className: `curator_avatar_image`,
              children: (0, _.jsx)(_, {
                href: _,
                children: (0, _.jsx)(`img`, {
                  className: `curator_avatar`,
                  src: _,
                }),
              }),
            }),
            (0, _.jsx)(`div`, {
              className: `curator_details`,
              children: (0, _.jsx)(_, {
                className: `pageheader curator_name`,
                href: _,
                children: _(`#SteamCurator_List_Header_List`, _.group_name),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    listid: _.listid,
  });
}
function _(_) {
  let _ = parseInt(_(`curator_account_id`, `application_config`)),
    _ = _(_),
    _ = _(_?.clanSteamID, _.listid);
  if ((_(_.LANGUAGE), !_)) return null;
  let _ = _.is_ogg,
    _ = _.is_creator_home && !_.is_ogg,
    _ = _
      ? `#SteamCurator_MoreDLC`
      : _
        ? `#SteamCurator_MoreProducts`
        : `#SteamCurator_MoreReviews`;
  return (0, _.jsxs)(_, {
    feature: `curatorlistcapsule`,
    children: [
      (0, _.jsx)(_, {
        clanInfo: _,
      }),
      (0, _.jsx)(`div`, {
        className: `page_content_ctn grayscale`,
        children: (0, _.jsx)(`div`, {
          className: `page_content`,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                listDetails: _,
              }),
              _(_)
                ? (0, _.jsx)(_, {
                    listDetails: _,
                  })
                : (0, _.jsx)(_, {
                    listDetails: _,
                    rgListItems: _.apps,
                  }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`h2`, {
                    children: _(`#SteamCurator_ExploreMoreTitle`),
                  }),
                  (0, _.jsx)(_, {
                    href: _.vanity_url,
                    children: _(_, _.group_name),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { listDetails: _ } = _,
    [_, _] = (0, _.useState)(null),
    _ = new _(_.sale_clan_steamid),
    { eventModel: _ } = _(_.GetAccountID(), _.sale_clan_event_gid),
    _ = _(
      _,
      (0, _.useMemo)(
        () => (_.apps || []).map((_) => _.recommended_app.appid),
        [_],
      ),
    );
  return (
    (0, _.useEffect)(() => {
      if (_) {
        if (_.BUsesContentHubForItemSource())
          _ && _(_.apps?.filter((_) => _.has(_.recommended_app?.appid)));
        else {
          let _ = _.GetSaleFeaturedApps();
          _(_.apps?.filter((_) => _.has(_.recommended_app?.appid)));
        }
      }
    }, [_, _, _]),
    (0, _.jsx)(_, {
      listDetails: _,
      rgListItems: _,
    })
  );
}
function _(_) {
  let { listDetails: _, rgListItems: _ } = _,
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(null),
    _ = _(`CuratorAppListDisplay`);
  if (
    (_.useEffect(() => {
      _ &&
        (_(_?.length || 0),
        _.Get()
          .HintLoad()
          .then(() => {
            let _ = _.map((_) => _.recommended_app.appid);
            _.Get()
              .QueueMultipleAppRequests(_, _)
              .then(() => {
                _.token.reason ||
                  _(
                    _.filter(
                      (_) => !_(_.Get().GetApp(_.recommended_app.appid)),
                    ),
                  );
              })
              .catch(() => {
                _.token.reason || _([]);
              });
          }));
    }, [_, _]),
    _ == null)
  )
    return (0, _.jsx)(_, {
      string: _(`#Loading`),
      position: `center`,
      size: `medium`,
    });
  let _ = _.list_type == 1;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        className: _(_, _ && `qSW80bsfZvg-`),
        "flow-children": `grid`,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              item: _,
              listDetails: _,
              bAutoFocus: _ == 0,
            },
            `rec_` + _.recommended_app.appid,
          ),
        ),
      }),
      100 > _.length &&
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsxs)(`span`, {
              children: [_(`#SteamCurator_Hidden`, _ - _.length), ` `],
            }),
            (0, _.jsx)(_, {
              href: _.STORE_BASE_URL + `account/preferences/`,
              children: _(`#SteamCurator_Setting`),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { listDetails: _ } = _,
    _ = _(_),
    _ = _(`showlisttitle`, `application_config`),
    _ = _(`titleareaheight`, `application_config`),
    _ = _.list_jsondata.youtube_link && _(_.list_jsondata.youtube_link),
    _ = _.list_jsondata.youtube_link && _(_.list_jsondata.youtube_link),
    _ = _(_.LANGUAGE),
    _ = _.GetWithFallback(_.localized_flat_title, _),
    _ = _.GetWithFallback(_.localized_flat_blurb, _),
    _ = _.GetWithFallback(_.localized_flat_link, _),
    _ = _ && _.GetImageURL(_() ? `product_mobile_banner` : `product_banner`, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      !!_ &&
        (0, _.jsx)(_, {
          href: _(_),
          children: (0, _.jsx)(`img`, {
            className: `axGkuQwOueg-`,
            src: _,
          }),
        }),
      _ &&
        _ &&
        (0, _.jsx)(`div`, {
          className: `TuILqTJ3-A8-`,
          children: _,
        }),
      _ &&
        _ &&
        (0, _.jsx)(`div`, {
          className: `JICo3A7R0cg-`,
          children: _,
        }),
      _ > 0 &&
        (0, _.jsx)(`div`, {
          style: {
            height: _,
          },
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `-l7dtWCSaFg-`,
          children: (0, _.jsx)(_, {
            video: _.strVideoID,
            startSeconds: _.nStartSeconds,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            preloadYoutubeScripts: !0,
            playsInline: !0,
            imageClassnames: `_7EHvAH-Cqp8-`,
          }),
        }),
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `-l7dtWCSaFg-`,
          children: (0, _.jsx)(_, {
            videoid: _,
            posterURL: ``,
            imageClassnames: `_7EHvAH-Cqp8-`,
          }),
        }),
      _ &&
        (0, _.jsx)(_, {
          url: _,
        }),
    ],
  });
}
var _ = _((_) => {
  let { item: _, listDetails: _, bAutoFocus: _ } = _,
    _ = parseInt(_(`curator_account_id`, `application_config`)),
    _ = _(_),
    [_] = _(_?.recommended_app?.appid, {
      include_assets: !0,
      include_release: !0,
    }),
    _ = (0, _.useMemo)(
      () => ({
        _: _?.GetID(),
        type: _(_?.GetStoreItemType(), _?.GetAppType()),
      }),
      [_],
    ),
    _ = _(_);
  if (!_ || !_) return null;
  let {
      appid: _,
      link_url: _,
      blurb: _,
      time_recommended: _,
      recommendation_state: _,
    } = _.recommended_app,
    _ = _.is_creator_home && !_.is_ogg,
    _ = _.list_jsondata.app_data?.[_],
    _ = _ && _(_),
    _ = _ && _(_),
    _ = _ != `0` && _,
    _ = _.BHasDemo(),
    _ = _?.img_url,
    _ = `curator_clanid=${_.clanAccountID}&curator_listid=${_.listid}`,
    _ = _.GetStorePageURL() + `/?curator_clanid=` + _.clanAccountID;
  return (0, _.jsxs)(_, {
    className: _,
    autoFocus: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _ || _
            ? (0, _.jsx)(_, {
                strVideoID: _?.strVideoID || _,
                nStartSeconds: _?.nStartSeconds,
                _: _,
                strImgOverrideUrl: _,
                bShowDemoButton: _,
                strExtraParams: _,
                bTwitchVideo: !!_,
              })
            : (0, _.jsx)(_, {
                imageType: `header`,
                capsule: _,
                bShowDemoButton: _,
                strExtraParams: _,
                bPreferAssetWithoutOverride: !1,
              }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`a`, {
            className: _,
            href: _,
            children: _.GetName(),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                type: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children:
                  _ || !_
                    ? _(
                        `#EventModTile_ReleaseDate`,
                        _.GetFormattedSteamReleaseDate(),
                      )
                    : _(_),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `ovSTFS3FlJQ-`,
              children: _(`#SteamCurator_ReviewTextQuoted`, _),
            }),
          !!_ &&
            (0, _.jsx)(_, {
              url: _,
            }),
        ],
      }),
    ],
  });
});
function _(_) {
  let {
      strVideoID: _,
      nStartSeconds: _,
      _: _,
      strImgOverrideUrl: _,
      bShowDemoButton: _,
      strExtraParams: _,
      bTwitchVideo: _,
    } = _,
    { data: _ } = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _
          ? (0, _.jsx)(_, {
              videoid: _,
              posterURL: _ ? _(_, `header`) : void 0,
              imageClassnames: _,
              autoplay: !0,
            })
          : (0, _.jsx)(_, {
              video: _,
              startSeconds: _,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: _,
              altImg: _,
            }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              _: _,
              bShowDemoButton: _,
              nDelayShowMs: 300,
              strExtraParams: _,
              hoverProps: {
                direction: `overlay-center`,
                style: {
                  minWidth: `300px`,
                },
              },
              children: (0, _.jsx)(`img`, {
                className: _,
                src: _ ? _(_, `library_capsule`) : void 0,
              }),
            }),
          }),
          (0, _.jsx)(_, {
            _: _,
            strClassName: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  switch (_.type) {
    case 0:
      return (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCurator_Recommended`),
      });
    case 1:
      return (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCurator_NotRecommended`),
      });
    case 2:
      return (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCurator_Informational`),
      });
    default:
      return null;
  }
}
function _(_) {
  let _ = _(_.url);
  _(_) &&
    (_ =
      (_.IN_CLIENT ? `steam://openurl_external/` : ``) +
      _.COMMUNITY_BASE_URL +
      `linkfilter/?url=` +
      _);
  let _ = _(_.url),
    _ = _(_.url);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        href: _,
        rel: `noopener nofollow`,
        preferredFocus: !1,
        autoFocus: !1,
        children: _(
          _ ? `#SteamCurator_WatchFullReview` : `#SteamCurator_ReadFullReview`,
        ),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCurator_ReviewLinkHostnameBracketed`, _),
      }),
    ],
  });
}
export { _ as CuratorReviewListContainer, _ as default };

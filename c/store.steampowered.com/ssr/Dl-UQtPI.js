var _ = _(_(), 1),
  _ = _();
function _(_) {
  return (0, _.jsxs)(`a`, {
    href: _.strURL,
    className: _.Box,
    "data-modal-content-sizetofit": !!_.bSizeToFit,
    "data-appid": _.appid,
    "data-publishedfileid": _.publishedfileid,
    children: [
      (0, _.jsx)(_, {
        strURL: _.strPreviewURL,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            children: _.strTitle,
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`span`, {
              className: _.Type,
              children: _.strType,
            }),
          }),
          _.author &&
            (0, _.jsx)(_, {
              children: _.author,
            }),
          (0, _.jsx)(_, {
            children: _.strDescription,
          }),
        ],
      }),
    ],
  });
}
var _ = class extends _ {
    m_LinkFilter = _;
    m_parentNode = void 0;
    m_mapHostToComponent;
    m_globalStoreLink;
    constructor(_, _, _, _) {
      (super(_),
        (this.m_parentNode = _),
        (this.m_mapHostToComponent = _),
        (this.m_globalStoreLink = _));
    }
    AppendText(_, _ = !1) {
      let _ = _;
      if (
        (_ || this.m_parentNode?.tag == `*`) &&
        (this.m_parentNode == null || this.m_parentNode.tag != `img`)
      ) {
        let _ = this.m_LinkFilter.exec(_);
        for (; _;) {
          if (_.index > 0) {
            let _ = _.input.substring(0, _.index);
            super.AppendText(_, _);
          }
          let _ = _[0],
            _ = !1;
          if (this.m_mapHostToComponent) {
            for (let _ = 0; _ < this.m_mapHostToComponent.length; ++_)
              if (this.m_mapHostToComponent[_].urlRegExp.exec(_)) {
                ((_ = !0),
                  super.AppendNode(
                    this.m_mapHostToComponent[_].fnBBComponent(
                      _,
                      this.m_globalStoreLink,
                    ),
                  ));
                break;
              }
          }
          (_ || super.AppendNode(_(_)),
            (_ = _.input.substring(_.index + _.length)),
            (_ = this.m_LinkFilter.exec(_)));
        }
      }
      _.length > 0 && super.AppendText(_, _);
    }
  },
  _ = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  _ = class extends _ {
    m_EmoteRegex = new RegExp(_);
    AppendText(_, _ = !1) {
      let _ = _;
      if (_.length >= 3) {
        let _ = this.m_EmoteRegex.exec(_);
        for (; _;) {
          if (_.index > 0) {
            let _ = _.input.substring(0, _.index);
            super.AppendText(_, _);
          }
          let _ = _[1];
          (super.AppendNode(
            _.createElement(
              _,
              {
                emoticon: _,
              },
              [],
            ),
          ),
            (_ = _.input.substring(_.index + _.length + 2)),
            (_ = this.m_EmoteRegex.exec(_)));
        }
      }
      _.length > 0 && super.AppendText(_, _);
    }
  },
  _ = class extends _ {
    m_parentNode = void 0;
    constructor(_, _) {
      (super(_), (this.m_parentNode = _));
    }
    AppendText(_, _ = !1) {
      let _ = _;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !_(_) &&
        (_ = _(_)),
        super.AppendText(_, _));
    }
  };
function _(_) {
  let _ = _.trim();
  return (
    _.startsWith(`{STEAM_CLAN_IMAGE}`) || _.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var _ =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function _(_) {
  return _ ? _.test(_.trim()) : !1;
}
function _(_, _) {
  return _(_) ? _ : _;
}
var _ = `jIoxEkA8e8A-`;
function _(_) {
  let { inputType: _, _: _, bApplyUserContentPref: _ } = _,
    _ = _ == `bundle` ? `bundle` : _ == `sub` ? `sub` : `game`,
    _ = _(_, _),
    { data: _ } = _(_),
    { data: _, isPending: _ } = _(_ ? _ : void 0);
  if (!_) return null;
  if (_) {
    if (_) return null;
    if (_?.filter_failure == 40 || _?.filter_failure == 50) {
      let _ = `#StoreCapsule_App_Excluded`;
      switch (_) {
        case `sub`:
          _ = `#StoreCapsule_Package_Excluded`;
          break;
        case `bundle`:
          _ = `#StoreCapsule_Bundle_Excluded`;
      }
      return (0, _.jsx)(`div`, {
        className: _(_, `AppSummaryWidgetCtn`),
        children: _(
          _,
          (0, _.jsx)(`a`, {
            href: _.STORE_BASE_URL + `account/preferences/`,
          }),
        ),
      });
    }
  }
  return (0, _.jsx)(`div`, {
    className: _(_, `AppSummaryWidgetCtn`),
    children: (0, _.jsx)(_, {
      _: _,
      type: _,
      bShowDemoButton: _.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var _ =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  _ =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  _ =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function _(_, _) {
  let _ = new RegExp(_).exec(_);
  if (!_ || _.length <= 3) return;
  let _ = _[3];
  if (_)
    switch (_[1]) {
      case `gid`:
        return {
          eventGID: _,
          strClanSteamID64: _[2],
        };
      case `group`:
        return {
          eventGID: _,
          clanAccountID: Number.parseInt(_[2]),
        };
      case `groups`:
        return {
          eventGID: _,
          strGroupVanity: _[2],
        };
      default:
        return isNaN(+_[2])
          ? {
              eventGID: _,
              strOGGVanity: _[2],
            }
          : {
              eventGID: _,
              appid: Number(_[2]),
            };
    }
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _, _, _, _, _)).data ?? void 0;
}
function _(_, _, _, _, _) {
  return [`useEventImageForSizeAsArrayWithFallback`, _?.GID, _, _, _, _];
}
function _(_, _, _, _, _, _, _) {
  return {
    queryKey: _(_, _, _, _, _),
    enabled: _ && !!_.GID,
    queryFn: async () => {
      if (!_) return null;
      let _ = [];
      if (!_.BImageNeedScreenshotFallback(_, _)) {
        let _ = await _.ensureQueryData(_(_, _, _, _, _, _));
        if ((_ && _.push(_), _ != _.full)) {
          let _ = await _.ensureQueryData(_(_, _, _, _, _, _.full));
          _ && _.push(_);
        }
      }
      if (!_ && _.length == 0) {
        let _ = await _.ensureQueryData(_(_, _, _));
        _ && _.push(_);
      }
      return _;
    },
  };
}
function _({ clanSteamID: _, strVanity: _, strGroupVanity: _ }) {
  let _ = _ !== void 0 || _ !== void 0,
    { data: _, isPending: _ } = _(
      _ ? (_ ?? _ ?? ``) : ``,
      _ === void 0 ? `group` : `store`,
    );
  if (!_) return _?.GetAccountID();
  if (!_) return _?.clanAccountID ?? null;
}
function _(_) {
  let { appid: _, announcementGID: _, eventGID: _, strURL: _ } = _,
    _ = _(_),
    _ = _ === null,
    {
      data: _,
      isPending: _,
      isError: _,
    } = _(
      _
        ? void 0
        : {
            clanAccountID: _ ?? void 0,
            appid: _,
            eventGID: _,
            announcementGID: _,
          },
    ),
    _ = _(_ || _?.appid || void 0),
    { data: _ } = _(_);
  if (_ || _ || _ === null) return _(_);
  if (_ || !_) return (0, _.jsx)(_, {});
  let _ = _(_.LANGUAGE),
    _ = _.GetNameWithFallback(_),
    _ = _.GetSubTitleWithSummaryFallback(_),
    _ = _?.name,
    _ = _(_.GetStartTimeAndDateUnixSeconds());
  return (0, _.jsxs)(_, {
    eventModel: _,
    route: _.k_eView,
    className: _.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": _,
    children: [
      (0, _.jsx)(_, {
        ..._,
        event: _,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            children: [
              _(
                _.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                _ ?? ``,
              ),
              (0, _.jsx)(_, {
                children: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(`div`, {
              className: _.Type,
              children: _,
            }),
          }),
          (0, _.jsx)(_, {
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      event: _,
      fnFilterImageURLsForKnownFailures: _,
      fnImageFailureCallback: _,
    } = _,
    _ = _(_, `capsule`, _(_.LANGUAGE), _.capsule_main) ?? [];
  return (
    _ && _ && (_ = _(_)),
    (0, _.jsx)(_, {
      className: _.Preview,
      rgSources: _ ?? [],
      onIncrementalError: (_, _, _) => _ && _(_),
    })
  );
}
var _ =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  _ = [`store.steampowered.com`, `store.steamchina.com`],
  _ = [`steampowered.com`, `steamcommunity.com`],
  _ = [`steamchina.com`],
  _ = [`steam.dev`, `valve.org`];
function _(_, _) {
  return _.some((_) => _ == _ || _.endsWith(`.${_}`));
}
function _(_) {
  let _ = _(_).toLocaleLowerCase(),
    _ = _(_.STORE_BASE_URL).toLocaleLowerCase(),
    _ = _(_.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return _ == _ || _ == _
    ? !0
    : _.includes(_)
      ? _(_, _(_, _) ? _ : _)
      : _(_, [..._, ..._, ..._]);
}
function _(_) {
  if (_(_)) return _(_);
}
function _(_) {
  let _ = new RegExp(_).exec(_);
  if (!_ || _.length <= 2) return;
  let _ = _[1].toLowerCase(),
    _ = Number(_[2]);
  if (_ > 0 && _(_))
    return {
      _: _,
      strItemType: _,
      storeItemKey:
        _ == `sub`
          ? {
              packageid: _,
            }
          : _ == `bundle`
            ? {
                bundleid: _,
              }
            : {
                appid: _,
              },
    };
}
function _(_) {
  return !!_ && (_.GetEventType() == 36 || _.GetEventType() == 20);
}
function _(_) {
  let _ = _(_),
    _ = _ ? _.clanSteamID.GetAccountID() : void 0,
    { data: _, isLoading: _ } = _(_),
    { data: _, isLoading: _ } = _(_);
  if (!_) return null;
  if (!(_ || _)) return !_ || !_ || !_(_, _) ? null : (_.appids ?? []);
}
function _(_, _) {
  return _ === null || (_.length > 0 && _.every((_) => _.includes(_)));
}
function _(_, _) {
  let _ = _(_);
  if (_.appid === void 0) return !0;
  if (!(_.appid > 0)) return !1;
  if (_ !== void 0) return _(_, [_.appid]);
}
function _({ link: _, strURL: _, eventModel: _, bAnnouncement: _ }) {
  let _ = _(_, _);
  if (_ === void 0) return null;
  if (!_) return _(_, _);
  let _ =
    _.strClanSteamID64 === void 0
      ? _.clanAccountID === void 0
        ? void 0
        : _.InitFromClanID(_.clanAccountID, _.EUNIVERSE)
      : new _(_.strClanSteamID64);
  return (0, _.jsx)(_, {
    appid: _.appid,
    clanSteamID: _,
    strVanity: _.strOGGVanity,
    strGroupVanity: _.strGroupVanity,
    eventGID: _ ? void 0 : _.eventGID,
    announcementGID: _ ? _.eventGID : void 0,
    strURL: _,
  });
}
function _(_, _, _, _ = !1) {
  if (_(_)) {
    let _ = _(_, _);
    if (_)
      return (0, _.jsx)(_, {
        link: _,
        strURL: _,
        eventModel: _?.event,
        bAnnouncement: _,
      });
  }
  return _(_, _?.event);
}
function _(_, _) {
  return _(_, _, _);
}
function _(_, _) {
  return _(_, _, _);
}
function _(_, _) {
  return _(_, _, _, !0);
}
var _ = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function _(_) {
  if (!_.test(_)) return;
  let _ = _.split(`?`);
  if (_.length == 2) return new URLSearchParams(_[1]).get(`id`) ?? void 0;
}
function _(_) {
  let { sharedFileID: _ } = _,
    { data: _ } = _(_),
    _ = _.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    _ = _ ?? {
      sharedfileid: _,
      title: _(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: _ + _,
    },
    _ = _(_.url) ? _ + _.url : _.url,
    _ = _.personnaname !== void 0 && _.personnaname.length > 0;
  return (0, _.jsx)(_, {
    strURL: _,
    strTitle: _.title,
    strPreviewURL: _.previewurl,
    strType: _.type,
    strDescription: _.description,
    author:
      _ &&
      _(
        `#EventEditor_Author`,
        (0, _.jsx)(_, {
          children: _.personnaname,
        }),
      ),
    publishedfileid: _,
    appid: _.appid,
    bSizeToFit: _.bSizeToFit,
  });
}
var _ = `qa91zR2N-ho-`,
  _ = `qff3pS03HXw-`,
  _ = `q0Lfj0nHQco-`,
  _ = `JJ5GaWyqsfo-`,
  _ = `Ykm55Zj77io-`,
  _ = `gRJU1LE8qs8-`,
  _ = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function _(_) {
  return [`sketchfab_oembed`, _];
}
function _(_) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(_)}`;
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await fetch(_(_));
      if (_.status === 404) return null;
      if (!_._) throw Error(`sketchfab oembed returned ${_.status}`);
      return await _.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let { modelID: _ } = _,
    [_, _] = _.useState(!0),
    { data: _ } = _(_);
  if (_) {
    let _ = () => _(!1);
    return (0, _.jsxs)(`div`, {
      className: _,
      role: `button`,
      tabIndex: 0,
      onClick: _,
      onKeyDown: (_) => {
        (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
      },
      children: [
        _?.thumbnail_url &&
          (0, _.jsx)(`img`, {
            className: `FZykkgnumn8-`,
            src: _.thumbnail_url,
            alt: _.title,
          }),
        (0, _.jsx)(`img`, {
          className: _,
          alt: ``,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  className: _,
                  children: _(`#EventDisplay_Sketchfab`),
                }),
                _?.title &&
                  (0, _.jsxs)(`div`, {
                    children: [_.title, `\xA0`],
                  }),
              ],
            }),
            _?.author_name &&
              (0, _.jsx)(`div`, {
                className: `cuUa3Y35NC4-`,
                children: _.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`iframe`, {
      className: _,
      title: _?.title ?? _,
      src: `https://sketchfab.com/models/${encodeURIComponent(_)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var _ =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function _(_) {
  let _ = _.exec(_),
    _ = _ ? Number(_[1]) : 0;
  return _ > 0 ? _ : void 0;
}
function _(_) {
  return _(_) ? _(_) : void 0;
}
var _ = `avO0rEVvlEA-`;
function _(_) {
  let { defid: _ } = _,
    _ = _(_);
  if (!_ || !_.community_item_data) return null;
  let _ = _.appid,
    _ = _.community_item_data.item_image_large,
    _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      toolTipContent: _.community_item_data.item_description,
      children: (0, _.jsx)(`img`, {
        src: _,
        alt: _.community_item_data.item_title,
      }),
    }),
  });
}
var _ = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  _ = /twitter\.com\/(\w+)(\/?)$/i,
  _ = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  _ = /twitch\.tv\/(\w+)(\/?)$/i,
  _ =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function _() {
  return _.EREALM === _.k_ESteamRealmChina;
}
var _ = new Map();
function _() {
  let _ = _.EREALM,
    _ = _.get(_);
  return (
    _ ||
      ((_ = _()
        ? [
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
            {
              urlRegExp: new RegExp(_),
              fnBBComponent: _,
            },
          ]),
      _.set(_, _)),
    _
  );
}
function _(_) {
  return _().find((_) => !!_.urlRegExp.exec(_));
}
function _(_) {
  return _.useMemo(() => _(_), [_]);
}
function _(_, _) {
  if (_()) return null;
  let _ = new RegExp(_).exec(_);
  if (_ && _.length > 1) {
    let _ = _[1];
    if (_?.length > 0) {
      let _ =
        `https://medal.tv/clip/` +
        _ +
        `/?autoplay=0&donate=0` +
        (_ && _.event ? `&steamappid=` + _.event.appid : ``);
      return (0, _.jsx)(`iframe`, {
        className: _,
        src: _,
        title: _,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return _(_, _?.event);
}
function _(_, _) {
  let _ = new RegExp(_).exec(_);
  if (_ && _.length > 1) {
    let _ = _[1];
    if (_ && _.length > 1)
      return (0, _.jsx)(_, {
        modelID: _,
      });
  }
  return _(_, _?.event);
}
function _(_, _) {
  let _ = _(_);
  return _ === void 0
    ? _(_, _?.event)
    : (0, _.jsx)(_, {
        sharedFileID: _,
      });
}
function _(_, _) {
  let _ = _(_);
  return _
    ? (0, _.jsx)(_, {
        eventModel: _?.event,
        inputID: _._,
        inputType: _.strItemType,
        fallbackUrl: _,
      })
    : _(_, _?.event);
}
function _(_) {
  let { inputID: _, inputType: _, eventModel: _, fallbackUrl: _ } = _,
    _ = _(_, _),
    { data: _ } = _(_),
    _ = _(_),
    _;
  return (
    _ === null
      ? (_ = !0)
      : _ && _ && (_ = _(_, _.appid ? [_.appid] : (_.included_appids ?? []))),
    _ === void 0
      ? null
      : _
        ? (0, _.jsx)(_, {
            _: _,
            inputType: _,
            bApplyUserContentPref: !0,
          })
        : _(_, _)
  );
}
function _(_, _) {
  let _ = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _(_),
        children: (0, _.jsx)(_, {
          defid: _,
          url: _,
        }),
      })
    : _(_, _?.event);
}
function _(_, _) {
  return _() ? null : _(_, (0, _.jsx)(_, {}), `@`, _);
}
function _(_, _) {
  return _() ? null : _(_, (0, _.jsx)(_, {}), `#`, _);
}
function _(_, _) {
  return _() ? null : _(_, (0, _.jsx)(_, {}), void 0, _);
}
function _(_, _) {
  return _(_, (0, _.jsx)(_, {}), void 0, _);
}
function _(_, _, _, _) {
  let _,
    _ = _.endsWith(`/`) ? _.length - 1 : _.length,
    _ = _.lastIndexOf(`/`, _ - 1);
  (_ != -1 && _ + 1 < _.length && (_ = _.substring(_ + 1, _)),
    _ && _ && (_ = _ + _));
  let _ = _(_, _?.event, _ ?? _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  switch (_) {
    case `button`:
      return _(_, `LinkButton`);
    case `pill`:
      return _(_, `LinkPill`);
    default:
      return _(_, `Link`);
  }
}
function _(_, _, _) {
  let _;
  return (
    (_ == `button` || _ == `pill`) &&
      _ &&
      (_ = {
        backgroundColor: _,
      }),
    (_ == `button` || _ == `pill`) &&
      _ &&
      (_ = {
        ...(_ ?? {}),
        color: _,
      }),
    _
  );
}
function _(_, _) {
  let _ = (
    typeof _ == `string`
      ? _
      : Array.isArray(_) && _.length == 1 && typeof _[0] == `string`
        ? _[0]
        : void 0
  )?.trim();
  return !_ || !_ || _ != _.trim();
}
function _(_) {
  let _ = _(_(_.args) || _(_.args, `href`)),
    _ = _(_.args, `style`),
    _ = _(_.args, `id`),
    _ = _(_(_.args, `buttoncolor`) || _(_.args, `bgcolor`), void 0),
    _ = _(_(_.args, `labelcolor`) || _(_.args, `color`), void 0),
    _ = _(_),
    _ = _.context.event,
    _ = _(_, _.language, _?.rtime32_last_modified),
    _ = _(_(_.children, _) ? `` : (_ ?? ``));
  if (_ && _)
    return _.fnBBComponent(_, {
      event: _.context.event,
    });
  if (_ === void 0 || _ == null) return _.children || ``;
  _ = typeof _ == `string` ? _ : _[1];
  let _ = _(_, _, _);
  return typeof _ == `string` && _.length > 0 && _[0] == `#`
    ? (0, _.jsx)(_, {
        className: _,
        href: _,
        style: _,
        children: _.children,
      })
    : _ == `steam://settings/account`
      ? (0, _.jsx)(_, {
          className: _,
          href: `steam://settings/account`,
          children: _.children,
        })
      : (0, _.jsx)(_, {
          className: _,
          url: _,
          event: _.context.event,
          _: _,
          style: _,
          children: _.children,
        });
}
function _(_) {
  let _ = _(_.args, `href`),
    _ = _(_);
  return _
    ? _.fnBBComponent(_, {
        event: _.context.event,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = `ICRstR5dKek-`,
  _ = `NRWghazl1IY-`,
  _ = (function (_) {
    return (
      (_.k_TrailerAsButton = `button`),
      (_.k_TrailerAsPill = `pill`),
      (_.k_TrailerAsFull = `full`),
      (_.k_TrailerAsPoster = `poster`),
      (_.k_TrailerAsMicro = `micro`),
      _
    );
  })({});
function _(_) {
  let {
      embedStyle: _,
      appid: _,
      color: _,
      bgcolor: _,
      children: _,
      trailerBaseID: _,
      subtitles: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useMemo)(
      () => ({
        appid: _,
      }),
      [_],
    );
  switch (_) {
    case `button`:
    case `pill`:
      return (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(`button`, {
            type: `button`,
            className: _({
              [_]: _ == `pill`,
              [_]: _ == `button`,
            }),
            onClick: () => _(!0),
            style: {
              color: _,
              backgroundColor: _,
            },
            children: [(0, _.jsx)(_, {}), _ || _(`#EventEmail_WatchNow`)],
          }),
          (0, _.jsx)(_, {
            _: _,
            bShowModal: _,
            trailerBaseID: _,
            hideModal: () => _(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, _.jsx)(_, {
        ..._,
      });
  }
}
function _(_) {
  let { appid: _, trailerBaseID: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    [_, _] = (0, _.useState)(() =>
      !_ || !_ ? _(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    _ = _(_),
    _ = (0, _.useMemo)(
      () => (_ ? _.find((_) => _.trailer_base_id === _) : null),
      [_, _],
    );
  return (
    (0, _.useEffect)(() => {
      (_?.unvailable_for_country_restriction &&
        _(_(`#TrailerPlayer_CouldNotLoad`, _, _)),
        _ &&
          !_ &&
          _(_(`#TrailerPlayer_CouldNotLoad`, _.appid, _.trailerBaseID)));
    }, [
      _,
      _.appid,
      _.trailerBaseID,
      _?.unvailable_for_country_restriction,
      _,
      _,
      _,
    ]),
    _
      ? _.bIsPreviewMode
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _,
          })
        : null
      : _
        ? (0, _.jsx)(_, {
            trailerToPlay: _,
          })
        : (0, _.jsx)(_, {
            string: _(`#Loading`),
            size: `small`,
          })
  );
}
function _(_) {
  let { trailerToPlay: _ } = _,
    {
      rgDashTrailers: _,
      rgHlsTrailers: _,
      strCaptionManufest: _,
    } = (0, _.useMemo)(() => {
      let { rgDashTrailers: _, rgHlsTrailers: _ } = _(_);
      return {
        rgDashTrailers: _,
        rgHlsTrailers: _,
        strCaptionManufest: _(_),
      };
    }, [_]);
  return _?.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          dashManifests: _ || [],
          hlsManifest: (_.length > 0 && _?.[0]) || ``,
          screenshot: _(_),
          altText: _.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: _,
        }),
      });
}
function _(_) {
  let _ = _(),
    _ = _(940),
    _ = String(_(_.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, _.jsx)(_, {
    hideArrows: !_,
    hidePips: _,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: _,
    bAutoAdvance: _,
    className: _,
    children: _.children,
  });
}
var _ = `fmP7S-DynWo-`;
function _(_) {
  let { strURL: _, children: _ } = _;
  return (typeof _ == `string` ? !_(_) : _.some((_) => !_(_)))
    ? (0, _.jsx)(_, {
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let { children: _ } = _;
  return _()
    ? (0, _.jsx)(_.Fragment, {
        children: _,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(
          `#Image_Externally_Hosted_Hidden`,
          (0, _.jsx)(`a`, {
            href: _.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([
      [
        `url`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `dynamiclink`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `h1`,
        {
          Constructor: _(_, _),
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `h2`,
        {
          Constructor: _(_, _),
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `h3`,
        {
          Constructor: _(_, _),
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `quote`,
        {
          Constructor: _(_, _),
          autocloses: !1,
        },
      ],
      [
        `list`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
        },
      ],
      [
        `olist`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
        },
      ],
      [
        `*`,
        {
          Constructor: _,
          autocloses: !0,
          skipInternalNewline: !0,
        },
      ],
      [
        `p`,
        {
          Constructor: _,
          autocloses: !1,
          skipFollowingNewline: !0,
        },
      ],
      [
        `img`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `previewyoutube`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `looping_media`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `video`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `youtubeorvideo`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `trailer`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `speaker`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [
        `docimg`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `carousel`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
    ])),
    _
  );
}
function _(_) {
  let { showErrorInfo: _, event: _ } = _.context,
    _ = _(_.args, `src`) || _.children?.toString();
  ((_ ||= _(_.args)), (_ = _(_ ?? ``) || void 0));
  let _ = _(_.args, `style`) === `inline`,
    _ = _(_, _.language, _?.rtime32_last_modified);
  if (_ == null) return null;
  if (typeof _ == `string`) {
    _ = _;
    let _;
    return (
      (_ = !_(_)),
      _?.BHasTag(`auto_rssfeed`) && (_ = !1),
      _
        ? (0, _.jsx)(_, {
            className: _({
              [_]: _,
            }),
            src: _,
            crossOrigin: _ ? `anonymous` : void 0,
          })
        : ((_ = _(_)),
          (0, _.jsx)(_, {
            strURL: _,
            children: (0, _.jsx)(_, {
              className: _({
                [_]: _,
              }),
              src: _,
              crossOrigin: _ ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, _.jsx)(_, {
    strURL: _,
    children: (0, _.jsx)(_, {
      rgSources: _,
    }),
  });
}
function _(_) {
  let _ = _(_.args);
  if (_ == null || _ == null || _.length == 0) return ``;
  let _ = _.children?.toString(),
    _ = [];
  return (
    _.push(
      `${_.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${_.LANGUAGE}/${_}`,
    ),
    _.LANGUAGE != `english` &&
      _.push(`${_.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${_}`),
    (0, _.jsx)(_, {
      rgSources: _,
      alt: _,
    })
  );
}
function _(_) {
  let _ = _(_.args, `appid`, _.context.event?.appid ?? 0),
    _ = _(_.args, `trailerid`, 0),
    _ = _(_.args, `style`)?.toLocaleLowerCase() ?? _.k_TrailerAsFull;
  _ = Object.values(_).includes(_) ? _ : _.k_TrailerAsFull;
  let _ = _(_.args.color, `black`),
    _ = _(_.args.bgcolor, `white`),
    _ = _(_.args);
  return (0, _.jsx)(_, {
    appid: _,
    trailerBaseID: _,
    bIsPreviewMode: _.context.showErrorInfo,
    embedStyle: _,
    color: _,
    bgcolor: _,
    subtitles: _.rgVideoTracks,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.args, `name`),
    _ = _(_.args, `title`),
    _ = _(_.args, `company`),
    _ = _(_.args, `photo`);
  return _.context.bShowShortSpeakerInfo
    ? (0, _.jsx)(_, {
        name: _,
        title: _,
        company: _,
        photo: _,
        bio: _.children,
      })
    : (0, _.jsx)(_, {
        name: _,
        title: _,
        company: _,
        photo: _,
        bio: _.children,
      });
}
function _(_, _, _) {
  let _ = _(_, _);
  return _ === void 0 || _ == null ? _ : Number.parseInt(_);
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([...Array.from(_.entries()), ...Array.from(_().entries())])),
    _
  );
}
var _ = _.createContext(null);
function _() {
  return _.useContext(_) ?? _();
}
function _(_) {
  let _ = _(),
    _ = _.useMemo(
      () =>
        new Map([
          ...Array.from(_.entries()),
          ...Array.from(_.dictionary.entries()),
        ]),
      [_, _.dictionary],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _(_) {
  let {
      text: _,
      languageOverride: _,
      event: _,
      showErrorInfo: _,
      bShowShortSpeakerInfo: _,
    } = _,
    _ = _(),
    _ = _.useCallback(
      (_) =>
        new _(
          new _(
            new _(new _(new _()), _, _, {
              event: _,
            }),
          ),
          _,
        ),
      [_, _],
    ),
    _ = _();
  return _.useMemo(() => new _(_, _, _ || _.LANGUAGE), [_, _, _]).ParseBBCode(
    _,
    {
      showErrorInfo: _,
      event: _,
      bShowShortSpeakerInfo: _,
      bbcode: _,
    },
  );
}
var _ = _(_(), 1),
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
      return `CLoyaltyRewards_GetSummary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
              _: 1,
              _: _,
            },
            timestamp_updated: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            auditid_highwater: {
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
      return `CLoyaltyRewards_GetSummary_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.points || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_earned: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_spent: {
              _: 3,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_GetSummary_Response_Summary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            ecurrency: {
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
      return `CLoyaltyRewards_GetPointsForSpend_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.points || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_GetPointsForSpend_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            expected_points_cost: {
              _: 2,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_RedeemPoints_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_levels: {
              _: 2,
              _: 1,
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
      return `CLoyaltyRewards_RedeemPointsForBadgeLevel_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            communityitemid: {
              _: 2,
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
      return `CLoyaltyRewards_RedeemPointsToUpgradeItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bundle_community_item_ids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
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
      return `CLoyaltyRewards_RedeemPoints_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.customization_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customization_type: {
              _: 1,
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.purchaseid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            purchaseid: {
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.customization_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            customization_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            new_level: {
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request`;
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
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.serial_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            serial_number: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            controller_code: {
              _: 2,
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
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.granted_profile_modifier || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            granted_profile_modifier: {
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
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.target_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            target_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            targetid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            reactionid: {
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
      return `CLoyaltyRewards_AddReaction_Request`;
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
      return `CLoyaltyRewards_AddReaction_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.target_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            target_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            targetid: {
              _: 2,
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
      return `CLoyaltyRewards_GetReactions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionids: {
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
      return `CLoyaltyRewards_GetReactions_Response`;
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
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.total || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            total: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            user_reviews: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            ugc: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            profile: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            forum_topics: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            comments: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            total_given: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_received: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_points_given: {
              _: 9,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            total_points_received: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
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
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            given: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            received: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            points_given: {
              _: 4,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            points_received: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            purchaseable: {
              _: 6,
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
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.elanguage || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            elanguage: {
              _: 1,
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
      return `CLoyaltyRewards_GetReactionConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactions: {
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
      return `CLoyaltyRewards_GetReactionConfig_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reactionid: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            points_cost: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            points_transferred: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            valid_target_types: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            valid_ugc_types: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            purchaseable: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            localized_title: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            localized_desc: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            available_until: {
              _: 9,
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
      return `CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig`;
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
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.points_cost || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            points_cost: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upgrade_points_cost: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            purchasable_customization_types: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            upgradable_customization_types: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            max_slots_per_type: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_upgradable_level: {
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
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Response`;
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
      return `CLoyaltyRewards_GetEligibleApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
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
      return `CLoyaltyRewards_GetEligibleApps_Response`;
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
            has_items_anyone_can_purchase: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            event_app: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            hero_carousel_image: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            owned: {
              _: 5,
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
      return `CLoyaltyRewards_GetEligibleApps_Response_EligibleApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null));
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
            defid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            community_item_class: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            community_item_type: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            point_cost: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            timestamp_created: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_available: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_available_end: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            quantity: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            internal_description: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            active: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            community_item_data: {
              _: 13,
              _: _,
            },
            bundle_defids: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            usable_duration: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bundle_discount: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_free_until: {
              _: 18,
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
      return `LoyaltyRewardDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            item_title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            item_description: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            item_image_small: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            item_image_large: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm_small: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4_small: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            animated: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            badge_data: {
              _: 9,
              _: _,
              _: !0,
              _: !0,
            },
            profile_theme_id: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            tiled: {
              _: 13,
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
      return `LoyaltyRewardDefinition_CommunityItemData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.level || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            level: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            image: {
              _: 2,
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
      return `LoyaltyRewardDefinition_BadgeData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bonusid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bonusid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            points: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timestamp_start: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            timestamp_end: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            internal_description: {
              _: 7,
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
      return `LoyaltyRewardPurchaseBonus`;
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
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bonuses || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bonuses: {
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
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
          null,
        ));
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
            time_available: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_classes: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            language: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            count: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cursor: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            sort: {
              _: 7,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            sort_descending: {
              _: 8,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            reward_types: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            excluded_community_item_classes: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            definitionids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            filters: {
              _: 12,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            filter_match_all_category_tags: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            filter_match_any_category_tags: {
              _: 14,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            contains_definitionids: {
              _: 15,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            include_direct_purchase_disabled: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            excluded_content_descriptors: {
              _: 17,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_appids: {
              _: 18,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            excluded_store_tagids: {
              _: 19,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            store_tagids: {
              _: 20,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            search_term: {
              _: 21,
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
      return `CLoyaltyRewards_QueryRewardItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_cursor: {
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
      return `CLoyaltyRewards_QueryRewardItems_Response`;
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
      return `CLoyaltyRewards_BatchedQueryRewardItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.responses || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            responses: {
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
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.eresult || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eresult: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            response: {
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
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response_Response`;
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
            language: {
              _: 2,
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
      return `CLoyaltyRewards_GetEquippedProfileItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.active_definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            active_definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            inactive_definitions: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            bundle_definitions: {
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
      return `CLoyaltyRewards_GetEquippedProfileItems_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetPointsForSpend#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetPointsForSpend = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetSummary#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetSummary = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.RedeemPoints#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.RedeemPoints = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForBadgeLevel#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  _.RedeemPointsForBadgeLevel = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsToUpgradeItem#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsToUpgradeItem = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomization#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  _.RedeemPointsForProfileCustomization = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  _.RedeemPointsForProfileCustomizationUpgrade = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.RegisterForSteamDeckRewards#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RegisterForSteamDeckRewards = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.AddReaction#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.AddReaction = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetReactions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetReactions = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetReactionsSummaryForUser#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetReactionsSummaryForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetReactionConfig#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  _.GetReactionConfig = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetProfileCustomizationsConfig#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetProfileCustomizationsConfig = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.GetEligibleApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetEligibleApps = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetActivePurchaseBonuses#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  _.GetActivePurchaseBonuses = _;
  function _(_, _, _) {
    return _.SendMsg(`LoyaltyRewards.QueryRewardItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`, `store`],
    });
  }
  _.QueryRewardItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.BatchedQueryRewardItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  _.BatchedQueryRewardItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `LoyaltyRewards.GetEquippedProfileItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  _.GetEquippedProfileItems = _;
})((_ ||= {}));
async function _(_, _) {
  let { rgDefIDs: _, strCategory: _, itemClass: _ } = _,
    _ = await _.QueryRewardItems(_, {
      definitionids: _,
      community_item_classes: _ ? [_] : void 0,
      filter_match_any_category_tags: _ ? [_] : void 0,
    });
  if (!_.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + _.GetEResult());
  return _.Body().toObject().definitions ?? [];
}
var _;
function _() {
  let _ = _();
  return _
    ? _.GetAnonymousServiceTransport()
    : ((_ ||= _(new _(_.WEBAPI_BASE_URL))), _.GetAnonymousServiceTransport());
}
async function _(_) {
  return _(_(), _);
}
var _ = 36e5;
function _(_) {
  return [`LoyaltyRewardDef`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _({
          rgDefIDs: [_],
        }),
        _ = _.length == 1 ? _[0] : void 0;
      if (!_)
        throw Error(
          `Asked for point shop item ${_} and got ${_.length} items back, wanted exactly one.`,
        );
      return _;
    },
    enabled: _ > 0,
    staleTime: _,
    retry: !1,
  };
}
function _(_) {
  let { data: _ } = _(_(_));
  return _;
}

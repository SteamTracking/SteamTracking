var _ = _(_(), 1),
  _ = _(),
  _ = [`utm_source`, `utm_campaign`, `utm_medium`, `utm_term`, `utm_content`];
function _(_) {
  let _ = new URLSearchParams({
    dynamiclink: `1`,
    hidebuttons: _.bHideButtons ? `1` : `0`,
  });
  for (let _ of _) {
    let _ = _.searchParams?.get(_);
    _ && _.set(_, _);
  }
  return (0, _.jsx)(`iframe`, {
    className: _,
    src: `${_.STORE_BASE_URL}widget/${_.appid}/?${_}`,
    loading: `lazy`,
    title: `${_.appid}`,
    frameBorder: 0,
  });
}
var _ = /^\/+app\/(\d+)/i;
function _(_) {
  let _ = _.match.url.pathname.match(_)?.[1];
  return _
    ? (0, _.jsx)(_, {
        appid: parseInt(_),
        searchParams: _.match.url.searchParams,
      })
    : _.children;
}
function _() {
  return {
    site: _.k_EURLSite_Store,
    regex: _,
    component: _,
  };
}
var _ = 220;
function _(_) {
  let _ = _.useCard(_.publishedfileid);
  if (!_) return _.children;
  if (_.bBanned)
    return (0, _.jsx)(`div`, {
      className: _.Box,
      children: _.Localize(`#DynamicLink_Banned`),
    });
  let _ = ``,
    _ = _.strTitle,
    _ = _.strDescription,
    _ = !1;
  switch (_.fileType) {
    case 0:
    case 1:
      _ = _.Localize(`#DynamicLinkType_WorkshopItem`, _.strAppName);
      break;
    case 5:
      ((_ = _.Localize(`#DynamicLinkType_Screenshot`, _.strAppName)),
        (_ = _),
        (_ = ``),
        (_ = !0));
      break;
    case 3:
      ((_ = _.Localize(`#DynamicLinkType_Art`, _.strAppName)), (_ = !0));
      break;
    case 4:
      _ = _.Localize(`#DynamicLinkType_Video`, _.strAppName);
      break;
    case 9:
    case 10:
      _ = _.Localize(`#DynamicLinkType_WebGuide`, _.strAppName);
  }
  return (
    (_ = _(_(_), _)),
    (0, _.jsx)(_, {
      strURL: _.strURL,
      strTitle: _,
      strPreviewURL: _.strPreviewURL,
      strType: _,
      strDescription: _,
      author: _.author,
      publishedfileid: _.publishedfileid,
      appid: _.appid,
      bSizeToFit: _,
    })
  );
}
var _ = /^\/+sharedfiles\/filedetails/i;
function _(_) {
  function _(_) {
    let _ = _.match.url.searchParams.get(`id`);
    return _
      ? (0, _.jsx)(_, {
          publishedfileid: _,
          useCard: _,
          children: _.children,
        })
      : _.children;
  }
  return {
    site: _.k_EURLSite_Community,
    regex: _,
    fnMatch: (_) => !!_.url.searchParams.get(`id`),
    component: _,
  };
}
function _(_) {
  return `https://img.youtube.com/vi/${encodeURIComponent(_)}/0.jpg`;
}
function _(_) {
  let [_, _] = _.useState(!1);
  return _
    ? (0, _.jsx)(_, {
        strVideoID: _.strVideoID,
        bAutoPlay: !0,
      })
    : (0, _.jsxs)(`div`, {
        className: _.Box,
        role: `button`,
        tabIndex: 0,
        onClick: () => _(!0),
        onKeyDown: (_) => {
          (_.key == `Enter` || _.key == ` `) && (_.preventDefault(), _(!0));
        },
        children: [
          (0, _.jsx)(_, {
            strURL: _(_.strVideoID),
          }),
          (0, _.jsxs)(_, {
            children: [
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(`span`, {
                    className: _.Type,
                    children: _.strType,
                  }),
                  _.strTitle,
                ],
              }),
              (0, _.jsx)(_, {
                children: _.strViews,
              }),
              (0, _.jsx)(_, {
                children: _.strDescription,
              }),
            ],
          }),
        ],
      });
}
function _(_) {
  let _ =
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(_.strVideoID)}?fs=1&modestbranding=1&rel=0&playsinline=1` +
    (_.bAutoPlay ? `&autoplay=1` : ``);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`iframe`, {
      src: _,
      title: _.strVideoID,
      allowFullScreen: !0,
      frameBorder: 0,
    }),
  });
}
var _ = /^[A-Za-z0-9_-]{11}$/,
  _ = /^\/+(?:embed|shorts|v|live)\/([^/]+)/i;
function _(_, _) {
  return _ == _ || _.endsWith(`.` + _);
}
function _(_) {
  let _ = _.hostname.toLowerCase(),
    _;
  return (
    _(_, `youtube.com`) || _(_, `youtube-nocookie.com`)
      ? (_ = _.searchParams.get(`v`) ?? _.pathname.match(_)?.[1])
      : _(_, `youtu.be`) && (_ = _.pathname.slice(1)),
    _ && _.test(_) ? _ : void 0
  );
}
function _(_) {
  let { strVideoID: _, useDetails: _, children: _ } = _,
    _ = _(_);
  return !_(`youtube`) || !_
    ? _
    : (0, _.jsx)(_, {
        strVideoID: _,
        strType: _.Localize(`#DynamicLinkType_YouTubeVideo`) + `: `,
        strTitle: _.title,
        strViews: _.Localize(`#DynamicLinkType_YouTubeVideo_Views`, _(_.views)),
        strDescription: _.description,
      });
}
function _(_) {
  function _(_) {
    let _ = _(_.match.url);
    return !_ || _.EREALM == _.k_ESteamRealmChina
      ? _.children
      : (0, _.jsx)(_, {
          strVideoID: _,
          useDetails: _,
          children: _.children,
        });
  }
  return {
    site: _.k_EURLSite_None,
    fnMatch: (_) => !!_(_.url),
    component: _,
  };
}
function _(_) {
  let _ = [];
  return (
    _.useUGCDynamicLinkCard && _.push(_(_.useUGCDynamicLinkCard)),
    _.bStoreApp && _.push(_()),
    _.useYouTubeVideoDetails && _.push(_(_.useYouTubeVideoDetails)),
    _
  );
}
var _ = _(_(), 1);
function _(_) {
  return new _.default(async (_) => _([..._]), {
    cache: !0,
    maxBatchSize: 50,
  });
}
function _(_, _) {
  return {
    queryKey: [`youtube_video_details`, _, _.EREALM],
    queryFn: () => _.load(_),
    staleTime: 36e5,
  };
}
function _(_, _) {
  let _ = _(`YouTubeVideoDetailsLoader`, () => _(_));
  return _(_(_, _));
}
function _(_) {
  let _ = _(_).data,
    _ = _(_?.creator);
  if (!_) return _;
  let _ = _.app_name ?? ``,
    _ = _.file_type ?? 0,
    _ = _.title ?? ``,
    _ = _.short_description ?? ``,
    _ = _(_.data);
  return {
    strURL: _.Details(_),
    strTitle: _,
    strDescription: _,
    fileType: _,
    strAppName: _,
    strPreviewURL: _.preview_url || _(),
    author:
      _ &&
      _.LocalizeReact(
        `#EventEditor_Author`,
        (0, _.jsx)(_, {
          children: _,
        }),
      ),
    publishedfileid: _,
    appid: _.consumer_appid,
    bBanned: _.bBanned,
  };
}
function _(_) {
  return (0, _.jsx)(_, {
    publishedfileid: _.publishedfileid,
    useCard: _,
    children: _.children,
  });
}
var _ = _({
  useUGCDynamicLinkCard: _,
  bStoreApp: !0,
  useYouTubeVideoDetails: (_) =>
    _(_, (_) => _(`/shared/actions`, `GetYouTubeVideoDetails`, _)).data,
});

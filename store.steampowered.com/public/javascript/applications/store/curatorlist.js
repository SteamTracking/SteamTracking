/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, c as n, dt as r, et as i } from "./chunk~01cfc309bf.js";
import { dr as a, lr as o } from "./chunk~6b8ddcaac8.js";
import { f as s, s as c } from "./chunk~961c06e93e.js";
import { i as l } from "./chunk~2f085f1384.js";
import { t as u } from "./chunk~92931c6310.js";
import { t as d } from "./chunk~eefd71512b.js";
import { c as f } from "./chunk~7b4b9eb713.js";
import { c as p, s as m } from "./chunk~6cf3fe3e07.js";
import { n as h, t as g } from "./chunk~3ea79bd96d.js";
import { n as ee } from "./chunk~a7c5e71e12.js";
import { a as _ } from "./chunk~fc8a9e4879.js";
import {
  $y as v,
  AS as y,
  Cc as b,
  Ic as x,
  Jb as S,
  Jc as C,
  Nd as w,
  Nu as T,
  Pc as E,
  Pr as D,
  Vc as O,
  Xu as k,
  Zc as te,
  Zy as ne,
  cb as re,
  gl as A,
  gt as j,
  ib as M,
  lb as ie,
  lx as N,
  mu as ae,
  tu as P,
  vx as F,
  wb as oe,
  zv as se,
} from "./main.js";
import { a as ce, i as I, r as L, t as R } from "./chunk~86e787bf6a.js";
import { i as z, r as B, t as V } from "./chunk~7b1a6a633b.js";
var H = e(t()),
  U = e(i());
async function W(e, t) {
  let n = F.STORE_BASE_URL + `contenthub/ajaxfilterappsbycontenthub`,
    r = {
      hubtype: e.GetContentHubType(),
      category: e.GetContentHubCategory(),
      tagid: e.GetContentHubTag(),
      prune_list_optin_name: e.jsondata.prune_list_optin_name,
      optin_tagid: e.jsondata.optin_tagid,
      optin_prune_tagid: e.jsondata.optin_prune_tagid,
      optin_only: e.jsondata.optin_only,
      applist: t.sort().join(`,`),
    },
    i = null,
    a = new Set();
  try {
    let e = await U.default.get(n, { params: r });
    if (e?.data?.success == 1)
      return (e.data.appids.forEach((e) => a.add(e)), a);
    i = k(e);
  } catch (e) {
    i = k(e);
  }
  return (
    console.error(`LoadContentHubFilteredApps failed: ` + i?.strErrorMsg, i), a
  );
}
function G(e, t) {
  let [n, r] = (0, H.useState)(
      e?.BUsesContentHubForItemSource() ? new Set() : null,
    ),
    i = u(`useFilteredAppViaContentHub`);
  return (
    (0, H.useEffect)(() => {
      e?.BUsesContentHubForItemSource() &&
        !n &&
        W(e, t).then((e) => {
          i.token.reason || r(e);
        });
    }, [n, i.token.reason, e, t]),
    n
  );
}
var le = `LMjlJLd09eU-`,
  K = r(),
  ue = RegExp(`(?:https?://)?(?:www.)?twitch.tv/videos/([0-9]+)S*`);
function q(e) {
  let t = ue.exec(e);
  return t && t.length > 1 ? t[1] : null;
}
function J(e) {
  let {
      posterURL: t,
      videoid: n,
      muted: r,
      autoplay: i,
      bIsClipID: a,
      time: o,
      width: s,
      height: c,
    } = e,
    [l, u] = H.useState(!!t),
    d = i == null || i == null ? !1 : i;
  if (l)
    return (0, K.jsxs)(`div`, {
      className: E(`YoutubePreviewContainer`, z, e.imageClassnames),
      onClick: () => u(!1),
      children: [
        (0, K.jsx)(`img`, {
          className: E(`YoutubePreviewImage`, z),
          src:
            t ||
            F.COMMUNITY_CDN_URL +
              `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, K.jsx)(`div`, {
          className: `YoutubePreviewPlay`,
          children: (0, K.jsx)(b, {}),
        }),
      ],
    });
  let f = S().replace(`https://`, ``),
    p = f.indexOf(`/`);
  p >= 0 && (f = f.substring(0, p));
  let m = a
    ? `https://clips.twitch.tv/embed?clip=${n}`
    : `https://player.twitch.tv/?video=${n}`;
  return (
    (m += `&parent=${f}&autoplay=${d}&muted=${!!r}`),
    o && (m += `&time=${de(o)}`),
    (0, K.jsxs)(`div`, {
      className: E(`YoutubePlayer`, le),
      children: [
        (0, K.jsx)(`img`, {
          className: E(`YoutubePreviewContainer`, z, e.imageClassnames),
          src:
            F.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, K.jsx)(`iframe`, {
          src: m,
          allowFullScreen: !0,
          frameBorder: 0,
          width: s || 460,
          height: c || 300,
        }),
      ],
    })
  );
}
function de(e) {
  let t = Math.floor(e / 3600);
  e -= t * 60 * 60;
  let n = Math.floor(e / 60);
  return ((e -= n * e), `${t}h${n}m${e}s`);
}
var fe = `ZJL8xBrL2zY-`,
  pe = `vcekW7OLx38-`,
  me = `cjONkgdKdxs-`,
  Y = `_7EHvAH-Cqp8-`,
  he = `neAjfYOyTWw-`,
  ge = `X-OZGk8rbxw-`,
  _e = `CDtzz-Fwpc0-`,
  ve = `HSJKBwIxxH4-`,
  ye = `zg-WTx3uDhs-`,
  be = `b7xIE9WPJTE-`,
  xe = `f3V8-AASUnA-`,
  Se = `_0MMdXDYn6ZA-`,
  Ce = `Me7GsElyNYA-`,
  we = `vtyTYN5s4nY-`,
  Te = `H4kwsOz873U-`,
  Ee = `bY4DK7YciBA-`,
  De = `DLZ4HONMq2Y-`,
  Oe = `hipnIHHLr9E-`,
  ke = `bQgGv6zgjbs-`,
  Ae = `cXA4-j-l0zU-`,
  je = `qzYG-yvQ9-o-`,
  Me = `UjfVuSwhzy8-`,
  Ne = `iVT7Gst4KAQ-`,
  Pe = `x-pmRKYt6Aw-`,
  Fe = `_-2HaCIOBhIc-`;
function Ie(e) {
  let { clanInfo: t } = e,
    { curator_link: n, curator_medium_avatar: r } = N(
      `curator_header`,
      `application_config`,
    );
  return (0, K.jsx)(O, {
    className: `page_content_ctn`,
    "flow-children": `column`,
    autoFocus: !0,
    children: (0, K.jsxs)(`div`, {
      className: `page_content ` + Fe,
      children: [
        (0, K.jsx)(V, {
          className: Pe,
          crumbs: N(`breadcrumbs`, `application_config`),
        }),
        (0, K.jsxs)(O, {
          className: `list_header_area`,
          "flow-children": `row`,
          children: [
            (0, K.jsx)(`div`, {
              className: `curator_avatar_image`,
              children: (0, K.jsx)(A, {
                href: n,
                children: (0, K.jsx)(`img`, {
                  className: `curator_avatar`,
                  src: r,
                }),
              }),
            }),
            (0, K.jsx)(`div`, {
              className: `curator_details`,
              children: (0, K.jsx)(A, {
                className: `pageheader curator_name`,
                href: n,
                children: M(`#SteamCurator_List_Header_List`, t.group_name),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Le(e) {
  return (0, K.jsx)(X, { listid: e.listid });
}
function X(e) {
  let t = parseInt(N(`curator_account_id`, `application_config`)),
    n = I(t),
    r = ce(n?.clanSteamID, e.listid);
  if ((w(F.LANGUAGE), !r)) return null;
  let i = n.is_ogg,
    a = n.is_creator_home && !n.is_ogg,
    o = i
      ? `#SteamCurator_MoreDLC`
      : a
        ? `#SteamCurator_MoreProducts`
        : `#SteamCurator_MoreReviews`;
  return (0, K.jsxs)(j, {
    feature: `curatorlistcapsule`,
    children: [
      (0, K.jsx)(Ie, { clanInfo: n }),
      (0, K.jsx)(`div`, {
        className: `page_content_ctn grayscale`,
        children: (0, K.jsx)(`div`, {
          className: `page_content`,
          children: (0, K.jsxs)(`div`, {
            className: fe,
            children: [
              (0, K.jsx)(Q, { listDetails: r }),
              R(r)
                ? (0, K.jsx)(Re, { listDetails: r })
                : (0, K.jsx)(Z, { listDetails: r, rgListItems: r.apps }),
              (0, K.jsxs)(`div`, {
                className: pe,
                children: [
                  (0, K.jsx)(`h2`, {
                    children: M(`#SteamCurator_ExploreMoreTitle`),
                  }),
                  (0, K.jsx)(A, {
                    href: n.vanity_url,
                    children: ie(o, n.group_name),
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
function Re(e) {
  let { listDetails: t } = e,
    [n, r] = (0, H.useState)(null),
    i = new ne(t.sale_clan_steamid),
    { eventModel: a } = _(i.GetAccountID(), t.sale_clan_event_gid),
    o = G(
      a,
      (0, H.useMemo)(
        () => (t.apps || []).map((e) => e.recommended_app.appid),
        [t],
      ),
    );
  return (
    (0, H.useEffect)(() => {
      if (a) {
        if (a.BUsesContentHubForItemSource())
          o && r(t.apps?.filter((e) => o.has(e.recommended_app?.appid)));
        else {
          let e = a.GetSaleFeaturedApps();
          r(t.apps?.filter((t) => e.has(t.recommended_app?.appid)));
        }
      }
    }, [t, a, o]),
    (0, K.jsx)(Z, { listDetails: t, rgListItems: n })
  );
}
function Z(e) {
  let { listDetails: t, rgListItems: n } = e,
    [r, i] = (0, H.useState)(0),
    [a, o] = (0, H.useState)(null),
    l = u(`CuratorAppListDisplay`);
  if (
    (H.useEffect(() => {
      n &&
        (i(n?.length || 0),
        T.Get()
          .HintLoad()
          .then(() => {
            let e = n.map((e) => e.recommended_app.appid);
            P.Get()
              .QueueMultipleAppRequests(e, s)
              .then(() => {
                l.token.reason ||
                  o(
                    n.filter(
                      (e) => !c(P.Get().GetApp(e.recommended_app.appid)),
                    ),
                  );
              })
              .catch(() => {
                l.token.reason || o([]);
              });
          }));
    }, [n, l]),
    a == null)
  )
    return (0, K.jsx)(d, {
      string: M(`#Loading`),
      position: `center`,
      size: `medium`,
    });
  let f = t.list_type == 1;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(O, {
        className: E(he, f && `qSW80bsfZvg-`),
        "flow-children": `grid`,
        children: a.map((e, n) =>
          (0, K.jsx)(
            ze,
            { item: e, listDetails: t, bAutoFocus: n == 0 },
            `rec_` + e.recommended_app.appid,
          ),
        ),
      }),
      100 > a.length &&
        (0, K.jsxs)(`div`, {
          children: [
            (0, K.jsxs)(`span`, {
              children: [re(`#SteamCurator_Hidden`, r - a.length), ` `],
            }),
            (0, K.jsx)(A, {
              href: F.STORE_BASE_URL + `account/preferences/`,
              children: M(`#SteamCurator_Setting`),
            }),
          ],
        }),
    ],
  });
}
function Q(e) {
  let { listDetails: t } = e,
    n = L(t),
    r = N(`showlisttitle`, `application_config`),
    i = N(`titleareaheight`, `application_config`),
    a = t.list_jsondata.youtube_link && p(t.list_jsondata.youtube_link),
    o = t.list_jsondata.youtube_link && q(t.list_jsondata.youtube_link),
    s = y(F.LANGUAGE),
    c = v.GetWithFallback(t.localized_flat_title, s),
    u = v.GetWithFallback(t.localized_flat_blurb, s),
    d = v.GetWithFallback(t.localized_flat_link, s),
    m = n && n.GetImageURL(l() ? `product_mobile_banner` : `product_banner`, s);
  return (0, K.jsxs)(`div`, {
    className: me,
    children: [
      !!m &&
        (0, K.jsx)(A, {
          href: f(n),
          children: (0, K.jsx)(`img`, { className: `axGkuQwOueg-`, src: m }),
        }),
      r && c && (0, K.jsx)(`div`, { className: `TuILqTJ3-A8-`, children: c }),
      r && u && (0, K.jsx)(`div`, { className: `JICo3A7R0cg-`, children: u }),
      i > 0 && (0, K.jsx)(`div`, { style: { height: i } }),
      a &&
        (0, K.jsx)(`div`, {
          className: `-l7dtWCSaFg-`,
          children: (0, K.jsx)(B, {
            video: a.strVideoID,
            startSeconds: a.nStartSeconds,
            autoplay: !0,
            autopause: !0,
            showFullscreenBtn: !0,
            controls: !0,
            preloadYoutubeScripts: !0,
            playsInline: !0,
            imageClassnames: `_7EHvAH-Cqp8-`,
          }),
        }),
      !!o &&
        (0, K.jsx)(`div`, {
          className: `-l7dtWCSaFg-`,
          children: (0, K.jsx)(J, {
            videoid: o,
            posterURL: ``,
            imageClassnames: `_7EHvAH-Cqp8-`,
          }),
        }),
      d && (0, K.jsx)($, { url: d }),
    ],
  });
}
var ze = n((e) => {
  let { item: t, listDetails: n, bAutoFocus: r } = e,
    i = parseInt(N(`curator_account_id`, `application_config`)),
    a = I(i),
    [s] = ee(t?.recommended_app?.appid, {
      include_assets: !0,
      include_release: !0,
    }),
    c = (0, H.useMemo)(
      () => ({
        id: s?.GetID(),
        type: ae(s?.GetStoreItemType(), s?.GetAppType()),
      }),
      [s],
    ),
    l = o(c);
  if (!a || !s) return null;
  let {
      appid: u,
      link_url: d,
      blurb: f,
      time_recommended: m,
      recommendation_state: g,
    } = t.recommended_app,
    _ = a.is_creator_home && !a.is_ogg,
    v = n.list_jsondata.app_data?.[u],
    y = d && p(d),
    b = d && q(d),
    x = f != `0` && f,
    S = s.BHasDemo(),
    C = v?.img_url,
    w = `curator_clanid=${a.clanAccountID}&curator_listid=${n.listid}`,
    T = s.GetStorePageURL() + `/?curator_clanid=` + a.clanAccountID;
  return (0, K.jsxs)(O, {
    className: ge,
    autoFocus: r,
    children: [
      (0, K.jsx)(`div`, {
        className: _e,
        children:
          y || b
            ? (0, K.jsx)(Be, {
                strVideoID: y?.strVideoID || b,
                nStartSeconds: y?.nStartSeconds,
                id: l,
                strImgOverrideUrl: C,
                bShowDemoButton: S,
                strExtraParams: w,
                bTwitchVideo: !!b,
              })
            : (0, K.jsx)(h, {
                imageType: `header`,
                capsule: c,
                bShowDemoButton: S,
                strExtraParams: w,
                bPreferAssetWithoutOverride: !1,
              }),
      }),
      (0, K.jsxs)(`div`, {
        className: we,
        children: [
          (0, K.jsx)(`a`, { className: Te, href: T, children: s.GetName() }),
          (0, K.jsxs)(`div`, {
            className: Ee,
            children: [
              (0, K.jsx)(Ve, { type: g }),
              (0, K.jsx)(`div`, {
                className: Ae,
                children:
                  _ || !m
                    ? M(
                        `#EventModTile_ReleaseDate`,
                        s.GetFormattedSteamReleaseDate(),
                      )
                    : oe(m),
              }),
            ],
          }),
          !!x &&
            (0, K.jsx)(`div`, {
              className: `ovSTFS3FlJQ-`,
              children: M(`#SteamCurator_ReviewTextQuoted`, x),
            }),
          !!d && (0, K.jsx)($, { url: d }),
        ],
      }),
    ],
  });
});
function Be(e) {
  let {
      strVideoID: t,
      nStartSeconds: n,
      id: r,
      strImgOverrideUrl: i,
      bShowDemoButton: o,
      strExtraParams: s,
      bTwitchVideo: c,
    } = e,
    { data: l } = se(r);
  return (0, K.jsxs)(`div`, {
    className: ve,
    children: [
      (0, K.jsx)(`div`, {
        className: ye,
        children: c
          ? (0, K.jsx)(J, {
              videoid: t,
              posterURL: l ? x(l, `header`) : void 0,
              imageClassnames: Y,
              autoplay: !0,
            })
          : (0, K.jsx)(B, {
              video: t,
              startSeconds: n,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: Y,
              altImg: i,
            }),
      }),
      (0, K.jsxs)(`div`, {
        className: be,
        children: [
          (0, K.jsx)(`div`, {
            className: xe,
            children: (0, K.jsx)(a, {
              id: r,
              bShowDemoButton: o,
              nDelayShowMs: 300,
              strExtraParams: s,
              hoverProps: {
                direction: `overlay-center`,
                style: { minWidth: `300px` },
              },
              children: (0, K.jsx)(`img`, {
                className: Se,
                src: l ? x(l, `library_capsule`) : void 0,
              }),
            }),
          }),
          (0, K.jsx)(g, { id: r, strClassName: Ce }),
        ],
      }),
    ],
  });
}
function Ve(e) {
  switch (e.type) {
    case 0:
      return (0, K.jsx)(`div`, {
        className: De,
        children: M(`#SteamCurator_Recommended`),
      });
    case 1:
      return (0, K.jsx)(`div`, {
        className: Oe,
        children: M(`#SteamCurator_NotRecommended`),
      });
    case 2:
      return (0, K.jsx)(`div`, {
        className: ke,
        children: M(`#SteamCurator_Informational`),
      });
    default:
      return null;
  }
}
function $(e) {
  let t = C(e.url);
  D(t) &&
    (t =
      (F.IN_CLIENT ? `steam://openurl_external/` : ``) +
      F.COMMUNITY_BASE_URL +
      `linkfilter/?url=` +
      t);
  let n = te(e.url),
    r = m(e.url);
  return (0, K.jsxs)(`div`, {
    className: je,
    children: [
      (0, K.jsx)(A, {
        className: Me,
        href: t,
        rel: `noopener nofollow`,
        preferredFocus: !1,
        autoFocus: !1,
        children: M(
          r ? `#SteamCurator_WatchFullReview` : `#SteamCurator_ReadFullReview`,
        ),
      }),
      (0, K.jsx)(`div`, {
        className: Ne,
        children: M(`#SteamCurator_ReviewLinkHostnameBracketed`, n),
      }),
    ],
  });
}
export { X as CuratorReviewListContainer, Le as default };

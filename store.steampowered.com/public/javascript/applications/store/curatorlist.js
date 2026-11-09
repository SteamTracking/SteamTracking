/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r, tt as i } from "./libraries.js";
import { f as a, s as o } from "./salecapsuleutils.js";
import { et as s } from "./saletags.js";
import { i as c } from "./ostype.js";
import { f as l } from "./salestoreitemutils.js";
import { t as u } from "./ajaxhooks.js";
import { t as d } from "./throbber.js";
import { c as f, s as p } from "./youtubeplayer.js";
import { c as m } from "./creatorhomestore.js";
import { n as ee, t as h } from "./bottomrow.js";
import { n as g } from "./storeitemhooks.js";
import { a as _ } from "./partnereventstore.js";
import {
  Fu as v,
  Ic as y,
  Iy as b,
  Jb as x,
  Jy as S,
  Nb as C,
  Ry as w,
  Sc as T,
  Uy as E,
  Vl as D,
  dc as te,
  eu as ne,
  ht as O,
  kc as k,
  lb as A,
  mS as j,
  nl as M,
  qy as re,
  rx as N,
  vd as ie,
  wc as P,
  wr as ae,
  wv as oe,
  yu as se,
  zc as ce,
} from "./main.js";
import { a as F, i as I, r as L, t as R } from "./curatorliststore.js";
import { i as z, r as B, t as V } from "./breadcrumbs.js";
var H = e(t()),
  U = e(i());
async function W(e, t) {
  let n = N.STORE_BASE_URL + `contenthub/ajaxfilterappsbycontenthub`,
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
    i = v(e);
  } catch (e) {
    i = v(e);
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
  K = n(),
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
      className: T(`YoutubePreviewContainer`, z, e.imageClassnames),
      onClick: () => u(!1),
      children: [
        (0, K.jsx)(`img`, {
          className: T(`YoutubePreviewImage`, z),
          src:
            t ||
            N.COMMUNITY_CDN_URL +
              `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, K.jsx)(`div`, {
          className: `YoutubePreviewPlay`,
          children: (0, K.jsx)(te, {}),
        }),
      ],
    });
  let f = C().replace(`https://`, ``),
    p = f.indexOf(`/`);
  p >= 0 && (f = f.substring(0, p));
  let m = a
    ? `https://clips.twitch.tv/embed?clip=${n}`
    : `https://player.twitch.tv/?video=${n}`;
  return (
    (m += `&parent=${f}&autoplay=${d}&muted=${!!r}`),
    o && (m += `&time=${de(o)}`),
    (0, K.jsxs)(`div`, {
      className: T(`YoutubePlayer`, le),
      children: [
        (0, K.jsx)(`img`, {
          className: T(`YoutubePreviewContainer`, z, e.imageClassnames),
          src:
            N.COMMUNITY_CDN_URL +
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
    { curator_link: n, curator_medium_avatar: r } = x(
      `curator_header`,
      `application_config`,
    );
  return (0, K.jsx)(k, {
    className: `page_content_ctn`,
    "flow-children": `column`,
    autoFocus: !0,
    children: (0, K.jsxs)(`div`, {
      className: `page_content ` + Fe,
      children: [
        (0, K.jsx)(V, {
          className: Pe,
          crumbs: x(`breadcrumbs`, `application_config`),
        }),
        (0, K.jsxs)(k, {
          className: `list_header_area`,
          "flow-children": `row`,
          children: [
            (0, K.jsx)(`div`, {
              className: `curator_avatar_image`,
              children: (0, K.jsx)(M, {
                href: n,
                children: (0, K.jsx)(`img`, {
                  className: `curator_avatar`,
                  src: r,
                }),
              }),
            }),
            (0, K.jsx)(`div`, {
              className: `curator_details`,
              children: (0, K.jsx)(M, {
                className: `pageheader curator_name`,
                href: n,
                children: E(`#SteamCurator_List_Header_List`, t.group_name),
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
  let t = parseInt(x(`curator_account_id`, `application_config`)),
    n = I(t),
    r = F(n?.clanSteamID, e.listid);
  if ((ie(N.LANGUAGE), !r)) return null;
  let i = n.is_ogg,
    a = n.is_creator_home && !n.is_ogg,
    o = i
      ? `#SteamCurator_MoreDLC`
      : a
        ? `#SteamCurator_MoreProducts`
        : `#SteamCurator_MoreReviews`;
  return (0, K.jsxs)(O, {
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
                    children: E(`#SteamCurator_ExploreMoreTitle`),
                  }),
                  (0, K.jsx)(M, {
                    href: n.vanity_url,
                    children: S(o, n.group_name),
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
    i = new b(t.sale_clan_steamid),
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
    [s, c] = (0, H.useState)(null),
    l = u(`CuratorAppListDisplay`);
  if (
    (H.useEffect(() => {
      n &&
        (i(n?.length || 0),
        se
          .Get()
          .HintLoad()
          .then(() => {
            let e = n.map((e) => e.recommended_app.appid);
            D.Get()
              .QueueMultipleAppRequests(e, a)
              .then(() => {
                l.token.reason ||
                  c(
                    n.filter(
                      (e) => !o(D.Get().GetApp(e.recommended_app.appid)),
                    ),
                  );
              })
              .catch(() => {
                l.token.reason || c([]);
              });
          }));
    }, [n, l]),
    s == null)
  )
    return (0, K.jsx)(d, {
      string: E(`#Loading`),
      position: `center`,
      size: `medium`,
    });
  let f = t.list_type == 1;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(k, {
        className: T(he, f && `qSW80bsfZvg-`),
        "flow-children": `grid`,
        children: s.map((e, n) =>
          (0, K.jsx)(
            ze,
            { item: e, listDetails: t, bAutoFocus: n == 0 },
            `rec_` + e.recommended_app.appid,
          ),
        ),
      }),
      100 > s.length &&
        (0, K.jsxs)(`div`, {
          children: [
            (0, K.jsxs)(`span`, {
              children: [re(`#SteamCurator_Hidden`, r - s.length), ` `],
            }),
            (0, K.jsx)(M, {
              href: N.STORE_BASE_URL + `account/preferences/`,
              children: E(`#SteamCurator_Setting`),
            }),
          ],
        }),
    ],
  });
}
function Q(e) {
  let { listDetails: t } = e,
    n = L(t),
    r = x(`showlisttitle`, `application_config`),
    i = x(`titleareaheight`, `application_config`),
    a = t.list_jsondata.youtube_link && f(t.list_jsondata.youtube_link),
    o = t.list_jsondata.youtube_link && q(t.list_jsondata.youtube_link),
    s = j(N.LANGUAGE),
    l = w.GetWithFallback(t.localized_flat_title, s),
    u = w.GetWithFallback(t.localized_flat_blurb, s),
    d = w.GetWithFallback(t.localized_flat_link, s),
    p = n && n.GetImageURL(c() ? `product_mobile_banner` : `product_banner`, s);
  return (0, K.jsxs)(`div`, {
    className: me,
    children: [
      !!p &&
        (0, K.jsx)(M, {
          href: m(n),
          children: (0, K.jsx)(`img`, { className: `axGkuQwOueg-`, src: p }),
        }),
      r && l && (0, K.jsx)(`div`, { className: `TuILqTJ3-A8-`, children: l }),
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
var ze = r((e) => {
  let { item: t, listDetails: n, bAutoFocus: r } = e,
    i = parseInt(x(`curator_account_id`, `application_config`)),
    a = I(i),
    [o] = g(t?.recommended_app?.appid, {
      include_assets: !0,
      include_release: !0,
    }),
    s = (0, H.useMemo)(
      () => ({
        id: o?.GetID(),
        type: ne(o?.GetStoreItemType(), o?.GetAppType()),
      }),
      [o],
    ),
    c = l(s);
  if (!a || !o) return null;
  let {
      appid: u,
      link_url: d,
      blurb: p,
      time_recommended: m,
      recommendation_state: h,
    } = t.recommended_app,
    _ = a.is_creator_home && !a.is_ogg,
    v = n.list_jsondata.app_data?.[u],
    y = d && f(d),
    b = d && q(d),
    S = p != `0` && p,
    C = o.BHasDemo(),
    w = v?.img_url,
    T = `curator_clanid=${a.clanAccountID}&curator_listid=${n.listid}`,
    D = o.GetStorePageURL() + `/?curator_clanid=` + a.clanAccountID;
  return (0, K.jsxs)(k, {
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
                id: c,
                strImgOverrideUrl: w,
                bShowDemoButton: C,
                strExtraParams: T,
                bTwitchVideo: !!b,
              })
            : (0, K.jsx)(ee, {
                imageType: `header`,
                capsule: s,
                bShowDemoButton: C,
                strExtraParams: T,
                bPreferAssetWithoutOverride: !1,
              }),
      }),
      (0, K.jsxs)(`div`, {
        className: we,
        children: [
          (0, K.jsx)(`a`, { className: Te, href: D, children: o.GetName() }),
          (0, K.jsxs)(`div`, {
            className: Ee,
            children: [
              (0, K.jsx)(Ve, { type: h }),
              (0, K.jsx)(`div`, {
                className: Ae,
                children:
                  _ || !m
                    ? E(
                        `#EventModTile_ReleaseDate`,
                        o.GetFormattedSteamReleaseDate(),
                      )
                    : A(m),
              }),
            ],
          }),
          !!S &&
            (0, K.jsx)(`div`, {
              className: `ovSTFS3FlJQ-`,
              children: E(`#SteamCurator_ReviewTextQuoted`, S),
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
      bShowDemoButton: a,
      strExtraParams: o,
      bTwitchVideo: c,
    } = e,
    { data: l } = oe(r);
  return (0, K.jsxs)(`div`, {
    className: ve,
    children: [
      (0, K.jsx)(`div`, {
        className: ye,
        children: c
          ? (0, K.jsx)(J, {
              videoid: t,
              posterURL: l ? P(l, `header`) : void 0,
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
            children: (0, K.jsx)(s, {
              id: r,
              bShowDemoButton: a,
              nDelayShowMs: 300,
              strExtraParams: o,
              hoverProps: {
                direction: `overlay-center`,
                style: { minWidth: `300px` },
              },
              children: (0, K.jsx)(`img`, {
                className: Se,
                src: l ? P(l, `library_capsule`) : void 0,
              }),
            }),
          }),
          (0, K.jsx)(h, { id: r, strClassName: Ce }),
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
        children: E(`#SteamCurator_Recommended`),
      });
    case 1:
      return (0, K.jsx)(`div`, {
        className: Oe,
        children: E(`#SteamCurator_NotRecommended`),
      });
    case 2:
      return (0, K.jsx)(`div`, {
        className: ke,
        children: E(`#SteamCurator_Informational`),
      });
    default:
      return null;
  }
}
function $(e) {
  let t = y(e.url);
  ae(t) &&
    (t =
      (N.IN_CLIENT ? `steam://openurl_external/` : ``) +
      N.COMMUNITY_BASE_URL +
      `linkfilter/?url=` +
      t);
  let n = ce(e.url),
    r = p(e.url);
  return (0, K.jsxs)(`div`, {
    className: je,
    children: [
      (0, K.jsx)(M, {
        className: Me,
        href: t,
        rel: `noopener nofollow`,
        preferredFocus: !1,
        autoFocus: !1,
        children: E(
          r ? `#SteamCurator_WatchFullReview` : `#SteamCurator_ReadFullReview`,
        ),
      }),
      (0, K.jsx)(`div`, {
        className: Ne,
        children: E(`#SteamCurator_ReviewLinkHostnameBracketed`, n),
      }),
    ],
  });
}
export { X as CuratorReviewListContainer, Le as default };

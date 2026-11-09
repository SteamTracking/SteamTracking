/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./replay.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./main.js",
      "../../../css/applications/store/main.css",
      "./useavatarandpersona.js",
      "./localization.js",
      "../../../css/applications/store/localization.css",
      "../../../css/applications/store/replay.css",
    ]),
) => i.map((i) => d[i]);

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  B as n,
  Lt as r,
  U as i,
  V as a,
  ft as o,
  i as s,
  kt as c,
  st as l,
  tt as u,
  u as d,
} from "./libraries.js";
import {
  Bn as f,
  Or as p,
  Ot as ee,
  P as te,
  an as ne,
  gr as re,
  in as ie,
  kr as ae,
  n as oe,
  q as se,
  rn as ce,
  tt as le,
} from "./saletags.js";
import { t as m } from "./storeurl.js";
import "./appinfo.js";
import { t as ue } from "./salestoreitemutils.js";
import { t as de } from "./salepreviewwidgets.js";
import { o as fe } from "./historyutils.js";
import { t as pe } from "./throbber.js";
import { t as me } from "./moment-timezone.js";
import { n as he } from "./eventimageurlwithfallback.js";
import {
  a as ge,
  c as _e,
  f as ve,
  l as ye,
  o as be,
  p as xe,
  s as Se,
  t as Ce,
} from "./salehilightplayerembed.js";
import { n as we } from "./bottomrow.js";
import { t as Te } from "./playtime.js";
import { a as Ee } from "./partnereventstore.js";
import {
  $n as De,
  Au as Oe,
  Dv as ke,
  Ev as Ae,
  Hv as je,
  Hy as Me,
  Ib as Ne,
  Jb as Pe,
  Jc as Fe,
  Mb as Ie,
  Ml as Le,
  Nl as Re,
  Nu as ze,
  Rr as Be,
  Rv as Ve,
  Sb as He,
  Sc as h,
  Uu as Ue,
  Uy as g,
  Wc as We,
  Xi as Ge,
  Xl as Ke,
  Xs as qe,
  Z as Je,
  au as Ye,
  ax as _,
  cu as Xe,
  dc as Ze,
  du as Qe,
  fu as $e,
  hb as et,
  ht as v,
  ib as tt,
  ir as nt,
  iy as rt,
  kc as y,
  kv as b,
  lS as x,
  lu as S,
  mS as C,
  mx as w,
  nb as it,
  nl as T,
  nu as at,
  nv as ot,
  ou as st,
  qv as ct,
  qx as lt,
  qy as ut,
  rx as E,
  sr as dt,
  su as ft,
  tx as pt,
  uS as mt,
  ub as ht,
  ut as gt,
  wc as _t,
  wv as vt,
  zb as D,
  zy as O,
} from "./main.js";
import { t as yt } from "./videoautopauseonblur.js";
import { t as bt } from "./browserpage.js";
var k = e(r()),
  A = class e {
    m_SteamInterface;
    m_setMessagesSeen = new Set();
    static sm_DefaultDataRequest = { include_release: !0, include_assets: !0 };
    constructor(e) {
      this.m_SteamInterface = e;
    }
    static sm_Instance;
    static Init(t) {
      e.sm_Instance = new e(t);
    }
    static Get() {
      return (
        lt(e.sm_Instance, `MarketingMessages store not initialized`),
        e.sm_Instance
      );
    }
    async GetMessageList(t, n = !1) {
      if (!_.logged_in) return [];
      let r = w.Init(st);
      (r.Body().set_country_code(E.COUNTRY),
        r.Body().set_elanguage(C(E.LANGUAGE)),
        r.Body().set_client_package_version(t.nClientPackageVersion),
        r.Body().set_operating_system(t.eOSType),
        n && r.Body().set_include_seen_messages(!0),
        Qe(r),
        $e(r, e.sm_DefaultDataRequest));
      let i = await S.GetMarketingMessagesForUser(
        this.m_SteamInterface.GetServiceTransport(),
        r,
      );
      if (i.GetEResult() != 1)
        throw `Error loading marketing messages: ${i.GetEResult()}`;
      if (n)
        for (let e of i.Body().messages())
          e.already_seen() && this.m_setMessagesSeen.add(e.message().gid());
      return i.Body().messages();
    }
    async GetSingleMessage(t, n) {
      let r = w.Init(Ye);
      (r.Body().set_gid(t), Qe(r), $e(r, e.sm_DefaultDataRequest));
      let i;
      if (
        ((i =
          n || _.logged_in
            ? await S.GetDisplayMarketingMessageForUser(
                this.m_SteamInterface.GetServiceTransport(),
                r,
              )
            : await S.GetDisplayMarketingMessage(
                this.m_SteamInterface.GetAnonymousServiceTransport(),
                r,
              )),
        i.GetEResult() != 1)
      )
        throw `Error loading marketing messages: ${i.GetEResult()}`;
      return i.Body().message();
    }
    MarkMessageSeen(e, t, n) {
      if (this.m_setMessagesSeen.has(e)) return;
      let r = w.Init(Xe);
      (r.Body().set_gid(e),
        r.Body().set_display_index(t),
        r.Body().set_template_type(n),
        S.MarkMessageSeen(this.m_SteamInterface.GetServiceTransport(), r),
        this.m_setMessagesSeen.add(e));
    }
    BIsMessageSeen(e) {
      return this.m_setMessagesSeen.has(e);
    }
  };
function xt(e) {
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    return (
      (t.use_additional_fields &&=
        t.use_additional_fields === `true` || t.use_additional_fields === 1),
      (t.use_custom_legal_text &&=
        t.use_custom_legal_text === `true` || t.use_custom_legal_text === 1),
      (t.last_asset_mtime &&= parseInt(t.last_asset_mtime)),
      (t.ll_image = t.ll_image || {}),
      t
    );
  } catch {}
  return null;
}
function St(e) {
  return `© ${new Date().getFullYear()} Valve Corporation${e ? ` and ` + e : ``}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
}
var j = class {
  m_message;
  m_templateVars = void 0;
  m_associatedItemKey;
  m_rgRecommendedAppIDs;
  m_nSaleItemCount;
  constructor(e) {
    (c(this),
      (this.m_message = e),
      (this.m_templateVars = xt(e.template_vars_json())));
    let t = e.associated_item(!1);
    ((this.m_associatedItemKey = t
      ? ct({ item_type: t.item_type(), id: t.id() })
      : void 0),
      (this.m_rgRecommendedAppIDs = e
        .recommended_items()
        .map((e) => e.appid())
        .filter(Boolean)),
      (this.m_nSaleItemCount = e.sale_item_count()));
  }
  get id() {
    return this.m_message.gid();
  }
  GetType() {
    return this.m_message.type();
  }
  static GetTypeAsLocalizedString(e) {
    switch (e) {
      case 2:
        return g(`#spotlight_weekend_deal`);
      case 11:
        return g(`#spotlight_midweek_madness`);
      case 12:
        return g(`#spotlight_daily_deal`);
      case 1:
        return g(`#msg_available_everywhere`);
      case 17:
        return g(`#msg_new_game`);
      case 3:
        return g(`#msg_prepurchase_now`);
      case 4:
        return g(`#msg_play_now`);
      case 5:
        return g(`#label_pre_load_now`);
      case 10:
        return g(`#label_just_updated`);
      case 13:
        return g(`#label_new_dlc_available`);
      case 14:
        return g(`#label_free_weekend`);
      case 15:
        return g(`#msg_on_sale_now`);
      case 16:
        return g(`#msg_play_beta_now`);
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
  GetLocalizedAltText(e) {
    return (
      this.m_templateVars?.localized_alt_text?.[e] ||
      this.m_templateVars?.localized_alt_text?.[O.GetELanguageFallback(e)] ||
      void 0
    );
  }
  GetTemplateImage() {
    let e = this.m_templateVars.ll_image[E.LANGUAGE],
      t = C(E.LANGUAGE);
    return (
      !e &&
        E.LANGUAGE == x(27) &&
        ((e = this.m_templateVars.ll_image.LATAM), (t = 27)),
      e || ((e = this.m_templateVars.ll_image.english), (t = 0)),
      [e?.path, t]
    );
  }
  GetTemplateBackgroundImage() {
    let e = this.m_templateVars.background[E.LANGUAGE],
      t = C(E.LANGUAGE);
    return (
      e || ((e = this.m_templateVars.background.english), (t = 0)), [e?.path, t]
    );
  }
  GetFeaturedVideoMP4URL() {
    return this.m_templateVars.featured_video_mp4;
  }
  GetFeaturedVideoWebMURL() {
    return this.m_templateVars.featured_video_webm;
  }
  GetFeaturedVideoAutoPlay() {
    return this.m_templateVars.featured_video_autoplay;
  }
  GetFeaturedVideoLoop() {
    return this.m_templateVars.featured_video_loop;
  }
  GetPosterImage() {
    let e = this.m_templateVars.poster[E.LANGUAGE],
      t = C(E.LANGUAGE);
    return (
      e || ((e = this.m_templateVars.poster.english), (t = 0)), [e?.path, t]
    );
  }
  GetSubtitleObj() {
    return this.m_templateVars.subtitles;
  }
  GetDLCAppIDs() {
    return this.m_templateVars.additional_featuring
      .filter((e) => !!e.appid)
      .map((e) => e.appid);
  }
  GetAutoRenderWithoutAssetOverrides() {
    return !!this.m_templateVars.autorender_assets_without_overrides;
  }
  GetGID() {
    return this.m_message.gid();
  }
  SetDLCAppIDOverride(e) {
    ((this.m_templateVars.additional_featuring = e.map((e) => ({ appid: e }))),
      (this.m_templateVars.custom_display = `dlc_override`));
  }
  GetRecommendedAppIDs() {
    return this.m_rgRecommendedAppIDs;
  }
  GetSaleItemCount() {
    return this.m_nSaleItemCount;
  }
  BShouldShowSaleItems() {
    let e = !this.GetTemplateVars().custom_display,
      t = !!this.GetTemplateVars().sale_clan_event_gid,
      n = this.m_rgRecommendedAppIDs.length >= 2;
    return e && t && n;
  }
  SetRecommendedAppIDsOverride(e) {
    this.m_rgRecommendedAppIDs = e;
  }
  OverrideCustomText(e) {
    this.m_templateVars.button_text_custom = e;
  }
  OverrideURL(e) {
    this.m_templateVars.linkurl = e;
  }
  BHasTemplateAnimatedAssets() {
    return this.m_templateVars.has_animated_assets;
  }
  BHasTemplateAnimatedAssetForLanguage(e) {
    let t = x(e);
    return !!this.m_templateVars.mp4[t];
  }
  GetTemplateWebM(e) {
    let t = x(e);
    return this.m_templateVars.webm[t]?.path;
  }
  GetTemplateWebMWithFallback(e) {
    let t = x(e);
    if (this.m_templateVars.webm[t]?.path)
      return [this.m_templateVars.webm[t].path, e];
    let n = O.GetELanguageFallback(e),
      r = x(n);
    return [this.m_templateVars.webm[r]?.path, n];
  }
  GetTemplateMP4(e) {
    let t = x(e);
    return this.m_templateVars.mp4[t]?.path;
  }
  GetTemplateMP4WithFallback(e) {
    let t = x(e);
    if (this.m_templateVars.mp4[t]?.path)
      return [this.m_templateVars.mp4[t].path, e];
    let n = O.GetELanguageFallback(e),
      r = x(n);
    return [this.m_templateVars.mp4[r]?.path, n];
  }
  GetLegalHTML() {
    return this.GetTemplateVars().use_custom_legal_text
      ? this.GetTemplateVars().custom_legal_text
      : St(this.GetTemplateVars().partner);
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
Ie([t], j.prototype, `m_templateVars`, void 0);
var Ct = `^(replay)([0-9]{4})`;
function wt(e) {
  return e.match(Ct)?.[2];
}
function Tt(e) {
  if (e) {
    let t = e.match(Ct);
    return t?.[2] && !isNaN(Number(t?.[2]));
  }
  return !1;
}
function Et(e, t, n) {
  let { bIncludeSeenMessages: r, ...i } = t,
    {
      data: a,
      isLoading: o,
      isError: s,
    } = l({
      queryKey: [`MarketingMessages`, `List`, i, { bIncludeSeenMessages: !!r }],
      queryFn: () => e.GetMessageList(i, r),
      ...n,
    }),
    c = k.useMemo(() => a?.map((e) => new j(e.message())), [a]),
    u = ot(),
    d = k.useRef(new Set());
  return (
    u &&
      c?.forEach((e) => {
        if (d.current.has(e.id)) return;
        let t = e.GetAssociatedItemProto();
        t && (u(t, A.sm_DefaultDataRequest), d.current.add(e.id));
      }),
    { rgMessages: o ? null : c, isError: s }
  );
}
function Dt(e, t, n) {
  let { data: r, isError: i } = l({
      queryKey: [`MarketingMessages`, n ? `SinglePreivew` : `Single`, t],
      queryFn: () => e.GetSingleMessage(t, n),
      enabled: !!t,
    }),
    a = k.useMemo(() => {
      if (r) {
        let e = new j(r);
        if (n) {
          let t = Pe(`marketingmessage_preview_config`, `application_config`);
          (t?.dlc_appid_overrides?.length > 0 &&
            e.SetDLCAppIDOverride(t.dlc_appid_overrides),
            t?.recommended_appid_overrides?.length > 0 &&
              e.SetRecommendedAppIDsOverride(t.recommended_appid_overrides));
        }
        return e;
      }
    }, [r, n]),
    o = ot(),
    s = k.useRef(new Set());
  if (o && a && !s.current.has(a.id)) {
    let e = a.GetAssociatedItemProto();
    e && (o(e, A.sm_DefaultDataRequest), s.current.add(a.id));
  }
  return { message: a, isError: i };
}
function Ot(e, t, n, r, i) {
  let a = w.Init(ft);
  (a.Body().set_gid(t),
    a.Body().set_display_index(n),
    a.Body().set_template_type(r),
    a.Body().set_click_location(i),
    S.MarkMessageClicked(e, a));
}
var M = o(),
  N = k.createContext({ setLegalText: void 0 });
function kt() {
  return !!k.useContext(N).setLegalText;
}
function At() {
  return k.useContext(N).setLegalText || function (e) {};
}
function jt(e) {
  let [t, n] = k.useState(),
    r = ze(`BrowserView.RegisterForMessageFromParent`),
    i = D(),
    a = k.useMemo(() => ({ setLegalText: r && !i ? n : void 0 }), [r, n, i]);
  return (0, M.jsxs)(N.Provider, {
    value: a,
    children: [r && (0, M.jsx)(Mt, { strLegalText: t }), e.children],
  });
}
function Mt(e) {
  let { strLegalText: t } = e,
    n = k.useRef(void 0);
  return (
    k.useEffect(() => {
      ((n.current = t),
        SteamClient.BrowserView.PostMessageToParent(
          `MarketingMessageLegal`,
          t || ``,
        ));
    }, [t]),
    k.useEffect(
      () =>
        SteamClient.BrowserView.RegisterForMessageFromParent((e) => {
          e == `MarketingMessageDialogReady` &&
            SteamClient.BrowserView.PostMessageToParent(
              `MarketingMessageLegal`,
              n.current,
            );
        }).unregister,
      [],
    ),
    null
  );
}
function Nt() {
  let e = a();
  return k.useMemo(() => {
    let t = new URLSearchParams(e.search);
    return {
      bIncludeSeenMessages: !!t.get(`include_seen`),
      nClientPackageVersion: parseInt(t.get(`client_package_version`) || `0`),
      eOSType: parseInt(t.get(`os_type`) || `0`),
      bLowBandwidthMode: !!t.get(`low_bandwidth`),
    };
  }, [e.search]);
}
function Pt(e) {
  let t = new URLSearchParams();
  return (
    e.bIncludeSeenMessages && t.append(`include_seen`, `1`),
    e.nClientPackageVersion &&
      t.append(`client_package_version`, e.nClientPackageVersion.toString()),
    e.eOSType && t.append(`os_type`, e.eOSType.toString()),
    e.bLowBandwidthMode && t.append(`low_bandwidth`, `1`),
    t.toString()
  );
}
function Ft(e, t, n) {
  if (!n && e.BHasTemplateAnimatedAssets()) {
    let n = O.GetELanguageFallback(t);
    return (
      e.BHasTemplateAnimatedAssetForLanguage(t) ||
      e.BHasTemplateAnimatedAssetForLanguage(n)
    );
  }
  return !1;
}
function P(e, t, n, r) {
  if (!r || !r.path) return null;
  let i = n ? `?t=` + n : ``;
  return r.path.startsWith(`images`)
    ? `${E.MEDIA_CDN_URL}steam/marketing/${e}/${r.path}${i}`
    : `${E.BASE_URL_SHARED_CDN}store_item_assets/mm/${e}/${t}/${r.path}${i}`;
}
function It(e) {
  let { path: t, message: n, eLanguage: r, ...i } = e,
    a = n.GetTemplateVars()?.last_asset_mtime,
    o = P(n.id, r, a, { type: `file`, path: t }),
    s = n.GetLocalizedAltText(r);
  return (0, M.jsx)(`img`, { alt: s, ...i, src: o });
}
function Lt(e) {
  let { message: t, mp4Path: n, webmPath: r, language: i, ...a } = e,
    o = t.GetTemplateVars()?.last_asset_mtime,
    s = P(t.id, i, o, { type: `file`, path: r }),
    c = P(t.id, i, o, { type: `file`, path: n }),
    l = (0, k.useRef)(null);
  yt(l);
  let u = (0, k.useRef)(!1),
    d = (0, k.useCallback)(() => {
      l.current &&
        (document.visibilityState === `visible`
          ? (u.current &&= (l.current.play(), !1))
          : l.current.paused || (l.current.pause(), (u.current = !0)));
    }, []);
  return (
    Le(document, `visibilitychange`, d),
    (0, k.useEffect)(() => d(), [d]),
    (0, M.jsxs)(`video`, {
      ...a,
      ref: l,
      children: [
        (0, M.jsx)(`source`, { src: s, type: `video/webm` }),
        (0, M.jsx)(`source`, { src: c, type: `video/mp4` }),
      ],
    })
  );
}
var Rt = `_0rg7QMNy7jY-`,
  zt = `_9cacopcF0Dg-`,
  Bt = `GouFTCf51tc-`,
  Vt = `cwi8pT-5toI-`,
  Ht = `nzSsIHRDj78-`,
  Ut = `Eo8SO7ZKWuE-`,
  Wt = `gxR5Tw6uJCI-`,
  Gt = `L-8gGuZ07gE-`,
  Kt = `_4UWrgYtZycQ-`,
  qt = `JZpXsA-Xgmo-`,
  Jt = `_0b6eHRCoMso-`,
  Yt = `fCMJE9GFrl4-`,
  F = `hoF4iyYjP-8-`,
  Xt = `xGRSgAVyH9M-`,
  Zt = `py-AHaUAgpQ-`,
  Qt = `tO2rzm85yrk-`,
  $t = `EpvEBC52J48-`,
  en = `IiPKTi2q3ko-`,
  tn = `zwcqJ-kd93k-`,
  nn = `GpRe26KdcUA-`,
  rn = `dZQZQPAi8KY-`,
  an = `_9eyq0UFYciQ-`,
  on = `ZWNrPcsxXHU-`,
  sn = `jNvS4xxa-PA-`,
  cn = `ViqT-upLYlU-`;
function I(e) {
  return (0, M.jsx)(`div`, {
    className: Bt,
    children: (0, M.jsx)(`div`, { className: qt, children: e.children }),
  });
}
function L(e) {
  return (0, M.jsx)(`div`, { className: Yt, children: e.children });
}
function R(e) {
  let { isBackgroundBlur: t, bOverrideUseBackgroundImage: n } = e,
    r = Z(),
    i = $(r.GetTemplateVars().linkurl, 1),
    [a, o] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
  return (0, M.jsx)(y, {
    focusable: !0,
    noFocusRing: !0,
    className: h(F, t && `_0b6eHRCoMso-`),
    onActivate: i,
    children: a && (0, M.jsx)(It, { message: r, path: a, eLanguage: o }),
  });
}
function ln(e) {
  let { fnOnClick: t } = e,
    n = Z(),
    r = C(E.LANGUAGE),
    [i, a] = n.GetTemplateMP4WithFallback(r),
    [o, s] = n.GetTemplateWebMWithFallback(r);
  return (
    lt(
      a == s,
      `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${a} webm ${s}`,
    ),
    (0, M.jsx)(`div`, {
      className: Xt,
      children: (0, M.jsx)(y, {
        focusable: !0,
        noFocusRing: !0,
        className: h(F),
        onActivate: t,
        children: (0, M.jsx)(Lt, {
          muted: !0,
          autoPlay: !0,
          controls: !1,
          loop: !0,
          mp4Path: i,
          message: n,
          webmPath: o,
          language: E.IN_CLIENT ? s : a,
        }),
      }),
    })
  );
}
function z(e) {
  let { id: t } = e,
    { data: n } = vt(t),
    r = n ? _t(n, `main_capsule`) : void 0;
  return r ? (0, M.jsx)(un, { strImageURL: r }) : null;
}
function un(e) {
  return (0, M.jsx)(`div`, {
    className: h(F, Zt, Jt),
    children: (0, M.jsx)(`img`, { src: e.strImageURL }),
  });
}
function dn(e) {
  let { strType: t, strTitle: n, bSmallTitle: r } = e;
  return (0, M.jsxs)(M.Fragment, {
    children: [
      (0, M.jsx)(`div`, { className: Qt, children: t }),
      (0, M.jsx)(`div`, { className: h($t, r && `RhkqxwedI4w-`), children: n }),
    ],
  });
}
function B(e) {
  let { id: t, bPreview: n, bPreferAssetWithoutOverride: r } = e,
    { data: i } = b(t),
    a = i?.appid,
    o = D(),
    { bIsOwned: s } = ae(t),
    c = ee(a),
    l = te(a),
    u = Fr(a ?? 0),
    d = (0, k.useMemo)(
      () =>
        n && (!u?.playtime_forever || !u?.rtime_last_played)
          ? {
              playtime_forever: 300,
              rtime_last_played: Math.floor(Date.now() / 1e3) - 432e3,
            }
          : u,
      [u, n],
    ),
    f = `steam://openurl/` + (m(i) ?? ``);
  s &&
    a &&
    (f = o
      ? `steam://open/games/details/${a}`
      : `steam://nav/games/details/${a}`);
  let p = $(f, 4, s);
  return (0, M.jsxs)(`div`, {
    className: en,
    children: [
      (0, M.jsx)(T, {
        className: tn,
        onClick: p,
        children: (0, M.jsx)(ue, {
          id: t,
          bPreferLibrary: !0,
          bPreferAssetWithoutOverride: r,
        }),
      }),
      (0, M.jsxs)(`div`, {
        className: nn,
        children: [
          (0, M.jsx)(`div`, {
            className: rn,
            children: (0, M.jsx)(T, {
              className: an,
              onClick: p,
              children: i?.name,
            }),
          }),
          (0, M.jsxs)(`div`, {
            className: on,
            children: [
              (0, M.jsx)(T, {
                onClick: p,
                className: h(sn, cn),
                children: g(
                  s
                    ? `#EventDisplay_ViewInLibrary`
                    : `#EventDisplay_ViewStorePage`,
                ),
              }),
              !s &&
                (0, M.jsx)(M.Fragment, {
                  children: (0, M.jsxs)(`div`, {
                    className: `RGk4BbX6ZEc-`,
                    children: [
                      c &&
                        (0, M.jsx)(`span`, {
                          children: g(`#EventDisplay_OnWishlist`),
                        }),
                      !c &&
                        l &&
                        (0, M.jsx)(`span`, {
                          children: g(`#EventDisplay_Follow`),
                        }),
                    ],
                  }),
                }),
              s &&
                (0, M.jsxs)(M.Fragment, {
                  children: [
                    !!d?.rtime_last_played &&
                      (0, M.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, M.jsx)(`span`, {
                            children: g(`#MarketingMessages_DLC_lastplayed`),
                          }),
                          ht(d.rtime_last_played),
                        ],
                      }),
                    !!d?.playtime_forever &&
                      (0, M.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, M.jsx)(`span`, {
                            children: g(`#MarketingMessages_DLC_hours`),
                          }),
                          Te(d.playtime_forever),
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
function V(e) {
  let t = $(Z().GetTemplateVars().linkurl, 2);
  return (0, M.jsx)(H, { bHidePrice: e.bHidePrice, fnOnClickButton: t });
}
function H(e) {
  let { bHidePrice: t, fnOnClickButton: n } = e,
    r = Z(),
    [i, a] = d(() => [
      r.GetTemplateVars().button_text_custom || r.GetTemplateVars().button_text,
      !!r.GetTemplateVars().hide_price,
    ]),
    o = !!(t || a);
  return (0, M.jsxs)(`div`, {
    className: h(Vt, !1),
    children: [
      (0, M.jsxs)(`div`, {
        className: Ht,
        children: [
          (0, M.jsx)(y, {
            focusable: !0,
            noFocusRing: !0,
            className: Wt,
            onActivate: n,
            children: i,
          }),
          !o && (0, M.jsx)(Fe, { children: (0, M.jsx)(fn, {}) }),
        ],
      }),
      (0, M.jsx)(pn, {}),
    ],
  });
}
function fn() {
  let e = Z().associated_item_key,
    { data: t } = ke(e);
  return !t || !t.formatted_final_price
    ? (0, M.jsx)(`div`, { className: Kt })
    : (0, M.jsx)(`div`, { className: Gt, children: (0, M.jsx)(se, { id: e }) });
}
function pn(e) {
  let t = Z();
  return kt()
    ? null
    : (0, M.jsx)(`div`, {
        className: Ut,
        dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
      });
}
function U(e) {
  let { id: t, type: n, eClickLocation: r } = e,
    i = zr(t, n, r);
  return (0, M.jsx)(de, {
    id: t,
    type: n,
    fnOnClickOverride: (e) => {
      (e.preventDefault(), i(e));
    },
    bIsMarketingMessage: !0,
    bPreferAssetWithoutOverride: !1,
  });
}
function W(e) {
  let { capsule: t, imageType: n, eClickLocation: r } = e,
    i = zr(t.id, t.type, r);
  return (0, M.jsx)(`div`, {
    onClick: (e) => {
      (e.preventDefault(), i(e));
    },
    children: (0, M.jsx)(we, {
      capsule: t,
      imageType: n,
      bShowParentApp: !1,
      bHideStoreHover: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function mn(e) {
  let t = Z(),
    n = t.GetTemplateVars().update_event_clan_accountid,
    r = t.GetTemplateVars().update_event_gid,
    { eventModel: i, bLoading: a, sErrorMessage: o } = Ee(n, r, e);
  return { message: t, eventModel: i };
}
function hn(e) {
  let { bPreview: t, bUseAnimated: n } = e,
    { message: r, eventModel: i } = mn(t),
    { data: a } = b(r.associated_item_key),
    o = m(a) ?? ``,
    s = _n(i, o, 1),
    c = _n(i, o, 2);
  return (0, M.jsx)(v, {
    submethod: `partner_event`,
    children: (0, M.jsxs)(I, {
      children: [
        (0, M.jsx)(z, { id: r.associated_item_key }),
        (0, M.jsxs)(L, {
          children: [
            (0, M.jsx)(B, {
              id: r.associated_item_key,
              bPreview: t,
              bPreferAssetWithoutOverride: !1,
            }),
            (0, M.jsx)(gn, {
              message: r,
              eventModel: i,
              fnOnClickButton: s,
              bUseAnimated: n,
            }),
          ],
        }),
        (0, M.jsx)(H, { bHidePrice: !0, fnOnClickButton: c }),
      ],
    }),
  });
}
function gn(e) {
  let { message: t, fnOnClickButton: n, eventModel: r, bUseAnimated: i } = e,
    [a, o] = t.GetTemplateImage(),
    s = C(E.LANGUAGE);
  return (0, M.jsxs)(`div`, {
    className: Rt,
    children: [
      (0, M.jsx)(dn, {
        strType: g(`#MarketingMessages_MajorUpdate`),
        strTitle: r?.GetNameWithFallback(s),
      }),
      (0, M.jsxs)(y, {
        focusable: !0,
        noFocusRing: !0,
        className: h(zt),
        onActivate: n,
        children: [
          a && !i && (0, M.jsx)(It, { message: t, path: a, eLanguage: o }),
          i && (0, M.jsx)(ln, { fnOnClick: n }),
        ],
      }),
    ],
  });
}
function _n(e, t, n) {
  let r = p(e?.appid),
    i = Ue(Lr(t), `partner_event`);
  if (e?.BIsVisibleEvent() && r && e.BIsValidForRealm(E.EREALM)) {
    let n = pt();
    E.IN_CLIENT && (n > 1726604483 || n == 0)
      ? (t = `steam://open/library/event/${e.appid}|${e.GID}`)
      : ((t = `${E.STORE_BASE_URL}news/app/${e.appid}?emclan=${e.clanSteamID.ConvertTo64BitString()}&emgid=${e.GID}`),
        E.IN_CLIENT && (t = `steam://openurl/${t}`));
  } else
    ((t = i),
      e && (t += `${i.includes(`?`) ? `&` : `?`}emgid=${e.GID}`),
      E.IN_CLIENT && (t = `steam://openurl/${t}`));
  return $(t, n, !0);
}
var vn = e(u());
function yn(e) {
  let {
    isLoading: t,
    isError: n,
    data: r,
  } = l({
    queryKey: [`useDLCHubCount`, e],
    queryFn: async () => bn(e),
    enabled: !!(e && e != 0),
  });
  return t || n ? null : r;
}
async function bn(e) {
  let t = `${E.STORE_BASE_URL}dlc/${e}/ajaxgetdlccount`,
    n = { origin: self.origin },
    r = await vn.default.get(t, { params: n, withCredentials: !1 });
  if (r.status !== 200 || r.data.success !== 1)
    throw Error(
      `FetchDLCCount failed: status == ${r.status}, eresult == ${r.data?.success}, err_msg == ${r.data?.err_msg}`,
    );
  return r.data.count;
}
var G = `pSQAIYlkuZ4-`,
  xn = `qXHjnlbrVPU-`,
  K = `DqyWvF0Nllg-`,
  Sn = `V8NuqidmB8M-`,
  Cn = `U6opAhfwgis-`;
function wn(e) {
  let { bPreview: t } = e,
    n = Z(),
    r = (0, k.useMemo)(
      () => n.GetDLCAppIDs().map((e) => ({ id: e, type: `game` })),
      [n],
    ),
    i = yn(n.associated_item_appid);
  return (
    (0, k.useEffect)(() => {
      if (n) {
        let e = i
          ? ut(`#MarketingMessages_See_Count_Items`, i)
          : g(`#MarketingMessages_See_All_Items`);
        (n.OverrideCustomText(e),
          n.OverrideURL(`${E.STORE_BASE_URL}dlc/${n.associated_item_appid}`));
      }
    }, [n, i]),
    (0, M.jsx)(v, {
      submethod: `dlc_override`,
      children: (0, M.jsxs)(I, {
        children: [
          (0, M.jsx)(z, { id: n.associated_item_key }),
          (0, M.jsxs)(L, {
            children: [
              (0, M.jsx)(B, {
                id: n.associated_item_key,
                bPreview: t,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, M.jsx)(Tn, {
                rgDLCSaleCapsules: r,
                messageType: n.GetType(),
              }),
            ],
          }),
          (0, M.jsx)(V, { bHidePrice: !0 }),
        ],
      }),
    })
  );
}
function q(e) {
  let { messageType: t, itemCount: n } = e,
    r = j.GetTypeAsLocalizedString(t);
  return (0, M.jsxs)(M.Fragment, {
    children: [
      !!r && (0, M.jsx)(`div`, { className: `w00lHTKEq4I-`, children: r }),
      n == 1
        ? (0, M.jsx)(J, { strDesc: g(`#MarketingMessages_DLC_desc_singular`) })
        : (0, M.jsx)(J, { strDesc: g(`#MarketingMessages_DLC_desc`) }),
    ],
  });
}
function Tn(e) {
  let { rgDLCSaleCapsules: t, messageType: n } = e;
  return t.length >= 4
    ? (0, M.jsx)(En, {
        rgSaleCapsules: t,
        eClickLocation: 3,
        children: (0, M.jsx)(q, { messageType: n }),
      })
    : t.length >= 3
      ? (0, M.jsxs)(`div`, {
          className: G,
          children: [
            (0, M.jsx)(q, { messageType: n }),
            (0, M.jsx)(`div`, {
              className: K,
              children: (0, M.jsx)(U, {
                id: t[0].id,
                type: t[0].type,
                eClickLocation: 3,
              }),
            }),
            (0, M.jsx)(Y, { first: t[1], second: t[2], eClickLocation: 3 }),
          ],
        })
      : t.length >= 2
        ? (0, M.jsx)(Dn, {
            rgSaleCapsules: t,
            eClickLocation: 3,
            children: (0, M.jsx)(q, { messageType: n }),
          })
        : t.length >= 1
          ? (0, M.jsxs)(`div`, {
              className: G,
              children: [
                (0, M.jsx)(q, { messageType: n, itemCount: t.length }),
                (0, M.jsx)(`div`, {
                  className: Sn,
                  children: (0, M.jsx)(W, {
                    capsule: t[0],
                    imageType: `main`,
                    eClickLocation: 3,
                  }),
                }),
              ],
            })
          : null;
}
function En(e) {
  let { rgSaleCapsules: t, eClickLocation: n, children: r } = e;
  return (0, M.jsxs)(`div`, {
    className: G,
    children: [
      r,
      (0, M.jsx)(Y, { first: t[0], second: t[1], eClickLocation: n }),
      (0, M.jsx)(Y, { first: t[2], second: t[3], eClickLocation: n }),
    ],
  });
}
function Dn(e) {
  let { rgSaleCapsules: t, eClickLocation: n, children: r } = e;
  return (0, M.jsxs)(`div`, {
    className: G,
    children: [
      r,
      (0, M.jsx)(`div`, {
        className: K,
        children: (0, M.jsx)(U, {
          id: t[0].id,
          type: t[0].type,
          eClickLocation: n,
        }),
      }),
      (0, M.jsx)(`div`, {
        className: K,
        children: (0, M.jsx)(U, {
          id: t[1].id,
          type: t[1].type,
          eClickLocation: n,
        }),
      }),
    ],
  });
}
function J(e) {
  return (0, M.jsx)(`div`, { className: xn, children: e.strDesc });
}
function Y(e) {
  let { first: t, second: n, eClickLocation: r } = e;
  return (0, M.jsxs)(`div`, {
    className: Cn,
    children: [
      (0, M.jsx)(`div`, {
        className: G,
        children: (0, M.jsx)(W, {
          capsule: t,
          imageType: `header`,
          eClickLocation: r,
        }),
      }),
      (0, M.jsx)(`div`, {
        className: G,
        children: (0, M.jsx)(W, {
          capsule: n,
          imageType: `header`,
          eClickLocation: r,
        }),
      }),
    ],
  });
}
var On = `_886zTtF9yKc-`,
  kn = `LC0MVsbOf8E-`,
  An = `Eog1TAa9AWI-`;
function jn(e) {
  let t = Z(),
    [n, r] = (0, k.useState)(() => t.GetFeaturedVideoAutoPlay()),
    i = (0, k.useRef)(null);
  yt(i);
  let a = $(t.GetTemplateVars().linkurl, 1),
    o = D();
  return (0, M.jsx)(y, {
    focusable: !0,
    noFocusRing: !0,
    onActivate: (e) => (!o && t.GetFeaturedVideoAutoPlay() ? a(e) : r(!0)),
    className: On,
    children: n
      ? (0, M.jsxs)(`video`, {
          controls: !t.GetFeaturedVideoLoop(),
          ref: i,
          muted: !0,
          autoPlay: !0,
          className: An,
          loop: t.GetFeaturedVideoLoop(),
          crossOrigin: `anonymous`,
          children: [
            (0, M.jsx)(`source`, {
              src: We(t.GetFeaturedVideoWebMURL()),
              type: `video/webm`,
            }),
            !E.IN_CLIENT &&
              (0, M.jsx)(`source`, {
                src: We(t.GetFeaturedVideoMP4URL()),
                type: `video/mp4`,
              }),
            (0, M.jsx)(Nn, { message: t }),
          ],
        })
      : (0, M.jsx)(Mn, { message: t }),
  });
}
function Mn(e) {
  let { message: t } = e,
    n = t.GetTemplateVars()?.last_asset_mtime,
    [r, i] = t.GetPosterImage(),
    a = P(t.id, i, n, { type: `file`, path: r });
  return (0, M.jsxs)(M.Fragment, {
    children: [
      (0, M.jsx)(`img`, { src: a, className: kn }),
      (0, M.jsx)(Ze, {}),
    ],
  });
}
function Nn(e) {
  let { message: t } = e,
    n = (0, k.useMemo)(() => {
      let e = t.GetSubtitleObj(),
        n = t.GetTemplateVars()?.last_asset_mtime,
        r = [];
      for (let i = 0; i < 32; ++i) {
        if (!O.IsELanguageValidInRealm(i, E.EREALM)) continue;
        let a = x(i);
        if (e && e[a]) {
          let o = e[a].path,
            s = P(t.id, i, n, { type: `file`, path: o });
          r.push(
            (0, M.jsx)(
              `track`,
              {
                src: s,
                kind: `subtitles`,
                srcLang: mt(i),
                default: E.LANGUAGE == a,
                label: g(`#language_selection_` + x(i)),
              },
              t.id + ` ` + i,
            ),
          );
        }
      }
      return r;
    }, [t]);
  return (0, M.jsx)(M.Fragment, { children: n });
}
function Pn(e) {
  let { bLowBandwidthMode: t } = e,
    n = Z(),
    r = !t && n.GetTemplateVars().custom_display === `featured_video`;
  return (0, M.jsx)(v, {
    children: (0, M.jsxs)(I, {
      children: [
        (0, M.jsx)(R, { isBackgroundBlur: !0, bOverrideUseBackgroundImage: r }),
        (0, M.jsxs)(L, {
          children: [
            (0, M.jsx)(R, { bOverrideUseBackgroundImage: r }),
            !!r && (0, M.jsx)(jn, {}),
          ],
        }),
        (0, M.jsx)(V, {}),
      ],
    }),
  });
}
function Fn(e) {
  let t = $(Z().GetTemplateVars().linkurl, 6);
  return (0, M.jsx)(v, {
    children: (0, M.jsxs)(I, {
      children: [
        (0, M.jsx)(R, { isBackgroundBlur: !0 }),
        (0, M.jsx)(L, { children: (0, M.jsx)(ln, { fnOnClick: t }) }),
        (0, M.jsx)(V, {}),
      ],
    }),
  });
}
function In(e) {
  let { id: t } = e,
    { data: n } = b(t),
    r = (0, k.useMemo)(() => {
      if (!n) return [];
      let e = n.categories?.supported_player_categoryids?.slice(0, 1) || [];
      return (
        n.categories?.feature_categoryids?.forEach((t) => e.push(t)),
        n.categories?.controller_categoryids?.forEach((t) => e.push(t)),
        n.categories?.supported_player_categoryids
          ?.slice(1)
          .forEach((t) => e.push(t)),
        e
      );
    }, [n]);
  return !r || r.length == 0
    ? null
    : (0, M.jsx)(`div`, {
        className: h(f, `SaleTagBlockCtn`),
        children:
          r?.length > 0
            ? (0, M.jsx)(`div`, {
                className: h(re, ce),
                children: r.map((e) =>
                  (0, M.jsx)(Rn, { categoryID: e }, `cat_` + e),
                ),
              })
            : (0, M.jsx)(`div`, { children: g(`#Broadcast_None`) }),
      });
}
var Ln = class e {
  m_rgCategories;
  constructor() {
    this.m_rgCategories = Pe(`feature_categories`, `application_config`);
  }
  static g_Self = null;
  static Get() {
    return ((e.g_Self ||= new e()), e.g_Self);
  }
};
function Rn(e) {
  let { categoryID: t } = e,
    n = Ln.Get().m_rgCategories.find((e) => e.categoryid == t);
  return n
    ? (0, M.jsx)(`div`, {
        className: ie,
        children: (0, M.jsx)(Be, {
          toolTipContent: n.display_name,
          children: (0, M.jsx)(`div`, {
            className: ne,
            style: {
              background: `url(${E.STORE_CDN_URL}${n.image_url}) no-repeat center center/cover`,
            },
          }),
        }),
      })
    : null;
}
function zn(e) {
  let {
      id: t,
      fnOnClickButton: n,
      bLowBandwidthMode: r,
      bUseAssetWithoutOverride: i,
    } = e,
    { data: a } = Ve(t),
    { data: o } = b(t),
    s = Ke(t);
  return !a || !o
    ? (0, M.jsx)(`div`, {
        className: h(Se, ve),
        children: (0, M.jsx)(pe, { size: `medium` }),
      })
    : (0, M.jsx)(`div`, {
        className: h(Se, ve),
        children: (0, M.jsx)(Ce, {
          id: t,
          elFeaturedInCenter: (0, M.jsx)(Bn, {
            id: t,
            bUseAssetWithoutOverride: !!i,
            fnOnClickButton: n,
          }),
          trailer: s && s.length > 0 ? s[0] : void 0,
          bUseTrailerAsFirstThumb: !r,
          bNoScreenShotModals: !0,
          name: o.name || ``,
        }),
      });
}
function Bn(e) {
  let { id: t, fnOnClickButton: n, bUseAssetWithoutOverride: r } = e,
    [, i] = Re(),
    { data: a } = vt(t, r),
    { data: o } = b(t),
    { data: s } = Ae(t),
    { data: c } = je(t);
  if (!a || !s || !o) return null;
  let l = _t(a, `main_capsule`);
  return (0, M.jsxs)(y, {
    focusable: !0,
    noFocusRing: !0,
    className: ye,
    ...i,
    onActivate: n,
    children: [
      (0, M.jsx)(`img`, { className: _e, src: l, alt: o.name || `` }),
      (0, M.jsxs)(`div`, {
        className: ge,
        children: [
          (0, M.jsx)(`div`, { className: h(be), children: o.name || `` }),
          (0, M.jsxs)(`div`, {
            className: xe,
            children: [s.short_description, ` `],
          }),
          (0, M.jsx)(oe, {
            rgTagIDs: c ? c.slice(0, 10).map((e) => e.tagid || 0) : [],
            instanceNum: 0,
            bLargeText: !0,
            bHideTitle: !0,
            bNoStoreLinks: !0,
          }),
          (0, M.jsx)(In, { id: t }),
        ],
      }),
    ],
  });
}
var Vn = `UDBCx7hHil8-`,
  Hn = `IKG0vEoSOA8-`,
  Un = `n4IOVFejo90-`,
  X = `Iw1CZshx4SI-`,
  Wn = e(me());
function Gn(e) {
  let { bPreview: t, bLowBandwidthMode: n } = e,
    r = Z(),
    i = $(r.GetTemplateVars().linkurl, 5),
    a = r.associated_item_key;
  return (0, M.jsx)(v, {
    submethod: `mm-auto-render`,
    children: (0, M.jsxs)(I, {
      children: [
        (0, M.jsx)(z, { id: a }),
        (0, M.jsx)(L, {
          children: (0, M.jsxs)(`div`, {
            className: Vn,
            children: [
              (0, M.jsxs)(`div`, {
                className: Hn,
                children: [
                  (0, M.jsx)(`div`, {
                    className: Un,
                    children: j.GetTypeAsLocalizedString(r.GetType()),
                  }),
                  (0, M.jsx)(Kn, { message: r, id: a }),
                ],
              }),
              (0, M.jsx)(le, {
                appid: r.associated_item_appid,
                children: (0, M.jsx)(zn, {
                  id: a,
                  fnOnClickButton: i,
                  bLowBandwidthMode: n,
                  bUseAssetWithoutOverride:
                    r.GetAutoRenderWithoutAssetOverrides(),
                }),
              }),
            ],
          }),
        }),
        (0, M.jsx)(H, {
          bHidePrice: r.GetTemplateVars().hide_price,
          fnOnClickButton: i,
        }),
      ],
    }),
  });
}
function Kn(e) {
  let { message: t, id: n } = e,
    { data: r } = b(n),
    i = r?.free_weekend,
    [a] = fe(`timezone`),
    [o] = fe(`locale`);
  if (t.GetType() == 14) {
    if (i?.text) return (0, M.jsx)(`div`, { className: X, children: i.text });
    if (i?.end_time) {
      o && Me.SetPreferredLocales([o]);
      let e = a || Intl.DateTimeFormat().resolvedOptions().timeZone,
        t = i.end_time,
        n = Wn.unix(t).tz(e),
        r = n.format(`z`),
        s = r.match(/^-?\d/)
          ? `UTC${Wn.unix(t).tz(e).format(`Z`).replace(`:00`, ``)}`
          : r,
        c = tt(n.unix(), !1, s, a);
      return (0, M.jsx)(`div`, {
        className: X,
        children: g(`#msg_free_play_until`, c),
      });
    }
    return (0, M.jsx)(`div`, {
      className: X,
      children: g(`#msg_free_play_weekend`),
    });
  }
  let s = t.GetTemplateVars()?.autorender_subtitle_token;
  return s ? (0, M.jsx)(`div`, { className: X, children: g(s) }) : null;
}
var qn = `OdjDhjB2yrA-`,
  Jn = `YOmAhzZv9RQ-`,
  Yn = `Ey3a8q2PxVE-`,
  Xn = `xHACuI0ICmw-`,
  Zn = { weekday: void 0, year: void 0, month: `short`, day: `numeric` },
  Qn = [20, 50, 100, 200, 500, 1e3, 2e3, 5e3];
function $n() {
  let e = Z(),
    { sale_clan_account: t, sale_clan_event_gid: n } = e.GetTemplateVars(),
    { eventModel: r, bLoading: i } = Ee(t ? Number(t) : void 0, n),
    a = he(r, `capsule`, C(E.LANGUAGE)),
    o = e.GetRecommendedAppIDs().length >= 4,
    s = (0, k.useMemo)(
      () =>
        e
          .GetRecommendedAppIDs()
          .slice(0, o ? 4 : 2)
          .map((e) => ({ id: e, type: `game` })),
      [e, o],
    );
  return (
    (0, k.useEffect)(() => {
      let t = er(e.GetSaleItemCount());
      t &&
        e.OverrideCustomText(g(`#MarketingMessages_See_AtLeast_Items`, Ge(t)));
    }, [e]),
    (0, M.jsx)(v, {
      submethod: `sale_items`,
      children: (0, M.jsxs)(I, {
        children: [
          a
            ? (0, M.jsx)(un, { strImageURL: a })
            : (0, M.jsx)(R, { isBackgroundBlur: !0 }),
          (0, M.jsxs)(L, {
            children: [
              (0, M.jsx)(tr, { eventModel: r, strCapsuleURL: a, bLoading: i }),
              (0, M.jsx)(`div`, {
                className: Xn,
                children: o
                  ? (0, M.jsx)(En, {
                      rgSaleCapsules: s,
                      eClickLocation: 5,
                      children: (0, M.jsx)(J, {
                        strDesc: g(`#MarketingMessages_SaleItems_Label`),
                      }),
                    })
                  : (0, M.jsx)(Dn, {
                      rgSaleCapsules: s,
                      eClickLocation: 5,
                      children: (0, M.jsx)(J, {
                        strDesc: g(`#MarketingMessages_SaleItems_Label`),
                      }),
                    }),
              }),
            ],
          }),
          (0, M.jsx)(V, { bHidePrice: !0 }),
        ],
      }),
    })
  );
}
function er(e) {
  return Qn.filter((t) => t <= (e ?? 0)).pop();
}
function tr(e) {
  let { eventModel: t, strCapsuleURL: n, bLoading: r } = e,
    { linkurl: i } = Z().GetTemplateVars(),
    a = $(i, 1);
  if (r) return (0, M.jsx)(`div`, { className: qn });
  if (!t || !n) return (0, M.jsx)(R, {});
  let o = t.GetNameWithFallback(C(E.LANGUAGE)),
    s = t.endTime,
    c = !!s && s > et();
  return (0, M.jsxs)(y, {
    focusable: !0,
    noFocusRing: !0,
    className: qn,
    onActivate: a,
    children: [
      (0, M.jsx)(`img`, { className: Jn, src: n, alt: o }),
      (0, M.jsxs)(`div`, {
        className: Yn,
        children: [
          (0, M.jsx)(dn, {
            strType: g(`#MarketingMessages_SaleEvent`),
            strTitle: o,
            bSmallTitle: !0,
          }),
          c &&
            (0, M.jsx)(`div`, {
              className: `HY39mN5xR8M-`,
              children: g(`#MarketingMessages_SaleEvent_Through`, it(s, Zn)),
            }),
        ],
      }),
    ],
  });
}
var nr = k.createContext(null);
function Z() {
  return k.useContext(nr);
}
function rr(e) {
  let { message: t, preview: n } = e,
    r = e.active !== !1,
    i = At();
  return (
    k.useEffect(() => {
      r && i(t.GetLegalHTML());
    }, [r, t, i]),
    (0, M.jsx)(nr.Provider, {
      value: t,
      children: (0, M.jsx)(k.Suspense, {
        fallback: null,
        children: (0, M.jsx)(ar, { message: t, active: r, preview: n }),
      }),
    })
  );
}
var ir = k.lazy(() =>
  He(
    () => import(`./replay.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    import.meta.url,
  ),
);
function ar(e) {
  let { message: t, active: n, preview: r } = e,
    i = C(E.LANGUAGE),
    { bLowBandwidthMode: a } = Nt();
  if (Tt(t.GetTemplateVars().custom_display || ``) && _.logged_in) {
    let e = Number(wt(t.GetTemplateVars().custom_display || ``));
    return isNaN(e) ? null : (0, M.jsx)(ir, { active: n, year: e });
  }
  switch (t.GetTemplateVars().custom_display) {
    case `dlc_override`:
      return (0, M.jsx)(wn, { bPreview: r });
    case `partner_event`:
      return (0, M.jsx)(hn, { bPreview: r, bUseAnimated: Ft(t, i, a) });
    case `mm_auto_render`:
      return (0, M.jsx)(Gn, { bPreview: r, bLowBandwidthMode: a });
  }
  if (t.BShouldShowSaleItems()) return (0, M.jsx)($n, {});
  switch (t.GetTemplateType()) {
    case `image`:
      return Ft(t, i, a)
        ? (0, M.jsx)(Fn, {})
        : (0, M.jsx)(Pn, { bLowBandwidthMode: a });
    default:
      return null;
  }
}
var or = `Gm5nLJRXJaY-`,
  sr = `-ImanFHLAwA-`,
  cr = `ZhQhX7pr9lA-`,
  lr = `_4fnvcJcUDX8-`,
  ur = `y0FnhcY7vxo-`,
  dr = `_5sB1JM0Iyds-`,
  fr = `_1xe7rr61Sxs-`,
  pr = `YW5IYp6Si78-`,
  mr = `XcuLFgHa428-`,
  hr = `S4heXFJ-jNg-`,
  gr = `OUppgysE0Mk-`,
  _r = `GTpU6gej7zQ-`,
  vr = `yTfJh4717Do-`,
  yr = `e2IKf6YeMZ8-`,
  br = `hwfeh9nw5U8-`,
  xr = `-dG-criVXmY-`,
  Sr = `PkEcCtT0EDE-`,
  Cr = `sAb-WXDAZ0o-`,
  wr = `gr2LCUjvkns-`,
  Tr = 8,
  Er = k.createContext(null);
function Dr() {
  return k.useContext(Er);
}
function Or(e) {
  let { MarketingMessagesStore: t } = e,
    r = Nt(),
    { rgMessages: i, isError: a } = Et(t, r),
    [o, s] = k.useState(!1),
    [c, l] = k.useState(0);
  bt(or);
  let u = n();
  if (
    (k.useEffect(() => {
      i &&
        !i.length &&
        !a &&
        (r.bIncludeSeenMessages
          ? s(!0)
          : u.replace({
              ...u.location,
              search: Pt({ ...r, bIncludeSeenMessages: !0 }),
            }));
    }, [i, r, u, a]),
    a)
  )
    return (0, M.jsx)(Q, {
      children: g(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (o)
    return (0, M.jsx)(Q, { children: g(`#MarketingMessages_NoneAvailable`) });
  let d = r.bIncludeSeenMessages ? i : i?.slice(0, Tr);
  return (0, M.jsxs)(`div`, {
    className: sr,
    children: [
      (0, M.jsx)(`div`, {
        className: cr,
        children: (0, M.jsx)(kr, {
          MarketingMessagesStore: t,
          rgMessages: d,
          iActiveMessage: c,
        }),
      }),
      (0, M.jsx)(Ar, { cMessages: d?.length, iMessage: c, setMessage: l }),
    ],
  });
}
function kr(e) {
  let { MarketingMessagesStore: t, rgMessages: n, iActiveMessage: r } = e;
  return n
    ? (0, M.jsx)(`div`, {
        className: gr,
        children: n?.map((e, n) =>
          (0, M.jsx)(
            Pr,
            {
              displayIndex: n,
              message: e,
              MarketingMessagesStore: t,
              active: n == r,
              next: n == r + 1 || n == r - 1,
            },
            e.id,
          ),
        ),
      })
    : (0, M.jsx)(`div`, {
        className: h(gr, _r),
        children: (0, M.jsx)(pe, { size: `xxlarge`, msDelayAppear: 500 }),
      });
}
function Ar(e) {
  let { cMessages: t, iMessage: n, setMessage: r } = e,
    i = k.useCallback(() => r(n - 1), [r, n]),
    a = k.useCallback(() => r(n + 1), [r, n]),
    o = [];
  for (let e = 0; e < t; e++)
    o.push((0, M.jsx)(jr, { active: e == n, iMessage: e, setMessage: r }, e));
  let s = n > 0 ? i : void 0,
    c = n < t - 1 ? a : void 0;
  return (0, M.jsxs)(M.Fragment, {
    children: [
      (0, M.jsx)(`div`, { className: void 0 }),
      (0, M.jsx)(`div`, {
        className: lr,
        children: (0, M.jsxs)(`div`, {
          className: ur,
          children: [
            (0, M.jsx)(`div`, {
              className: h(dr, s && `gHoA3r84Hvo-`),
              onClick: s,
              children: (0, M.jsx)(qe, { angle: 180 }),
            }),
            (0, M.jsx)(`div`, { className: fr }),
            (0, M.jsx)(`div`, {
              className: pr,
              children: (0, M.jsx)(`div`, { className: mr, children: o }),
            }),
            (0, M.jsx)(`div`, { className: fr }),
            (0, M.jsx)(`div`, {
              className: h(dr, c && `gHoA3r84Hvo-`),
              onClick: c,
              children: (0, M.jsx)(qe, { angle: 0 }),
            }),
          ],
        }),
      }),
    ],
  });
}
function jr(e) {
  let { active: t, iMessage: n, setMessage: r } = e,
    i = k.useCallback(() => r(n), [r, n]);
  return (0, M.jsx)(`div`, {
    className: h(hr, t && `gHoA3r84Hvo-`),
    onClick: i,
  });
}
function Mr(e) {
  let { MarketingMessagesStore: t, preview: n } = e,
    r = i(),
    { message: a, isError: o } = Dt(t, r.params.messageid, n);
  return (
    bt(or),
    o
      ? (0, M.jsx)(Q, { children: g(`#Error_ErrorCommunicatingWithNetwork`) })
      : r.params.messageid
        ? a
          ? (0, M.jsx)(rr, { message: a, preview: n })
          : null
        : (0, M.jsx)(Q, { children: g(`#MarketingMessages_NoneAvailable`) })
  );
}
function Q(e) {
  return (0, M.jsxs)(nt, {
    style: { maxWidth: `400px`, margin: `0 auto` },
    children: [
      (0, M.jsxs)(dt, { children: [g(`#Error_Generic`), ` `] }),
      (0, M.jsx)(De, { children: e.children }),
    ],
  });
}
function Nr(e, t, n) {
  k.useEffect(() => {
    t && e.MarkMessageSeen(t.id, n + 1, t.GetTemplateTypeForReporting());
  }, [t, e, n]);
}
function Pr(e) {
  let {
      message: t,
      MarketingMessagesStore: n,
      active: r,
      next: i,
      displayIndex: a,
    } = e,
    o = k.useRef(void 0),
    c = k.useRef(r || i);
  if ((Nr(n, r ? t : null, a), (r || i) && (c.current = !0), !c.current))
    return null;
  let l = {
    enter: yr,
    enterActive: br,
    enterDone: xr,
    exit: Sr,
    exitActive: Cr,
    exitDone: wr,
  };
  return (0, M.jsx)(s, {
    in: r,
    nodeRef: o,
    classNames: l,
    timeout: 300,
    mountOnEnter: !i,
    unmountOnExit: !i,
    children: (0, M.jsx)(Er.Provider, {
      value: a,
      children: (0, M.jsx)(`div`, {
        className: h(vr, r && `gHoA3r84Hvo-`),
        ref: o,
        children: (0, M.jsx)(rr, { message: t, active: r }),
      }),
    }),
  });
}
function Fr(e) {
  let t = rt(),
    n = l({
      queryKey: [`useGamePlaytimeInfo`, e],
      queryFn: async () => Ir(e, t),
      enabled: !!(e && e != 0),
    });
  return n.isSuccess ? n.data : null;
}
async function Ir(e, t) {
  let n = w.Init(Je);
  (n.Body().set_steamid(_.steamid),
    n.Body().set_appids_filter([e]),
    n.Body().set_include_played_free_games(!0),
    n.Body().set_language(E.LANGUAGE));
  let r = await gt.GetOwnedGames(t, n);
  return r.Body().games().length > 0 ? r.Body().games()[0].toObject() : {};
}
function Lr(e) {
  return Ne() && e?.startsWith(`https://store.steampowered.com/`)
    ? e.replace(`https://store.steampowered.com/`, E.STORE_BASE_URL)
    : e;
}
function Rr(e) {
  let t = rt(),
    n = Z(),
    r = Dr();
  return (
    (r = r === null ? 0 : r + 1),
    (0, k.useCallback)(() => {
      Ot(t, n.id, r, n.GetTemplateTypeForReporting(), e);
    }, [t, n, r, e])
  );
}
function $(e, t, n = !1) {
  let r = Rr(t),
    i;
  t == 1
    ? (i = `image`)
    : t == 2
      ? (i = `button`)
      : t == 3
        ? (i = `dlc_capsule`)
        : t == 4
          ? (i = `header_area`)
          : t == 5
            ? (i = `game_capsule`)
            : t == 6 && (i = `partner_event`);
  let a = Ue(Lr(e), i);
  return (
    n && (a = e),
    a.startsWith(`steam://`) || (a = `steam://openurl/${a}`),
    (0, k.useCallback)(
      (e) => {
        r();
        let t = Oe(e);
        t.location.href = a;
      },
      [a, r],
    )
  );
}
function zr(e, t, n) {
  let r = ct({ item_type: at(t), id: e }),
    { data: i } = b(r);
  return $(m(i) ?? E.STORE_BASE_URL, n);
}
export { jt as a, Z as i, Or as n, A as o, Mr as r, $ as t };

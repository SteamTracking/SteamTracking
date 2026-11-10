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
  Aa as f,
  Ar as ee,
  Hi as p,
  P as te,
  ai as ne,
  ja as re,
  n as ie,
  oi as ae,
  q as oe,
  si as se,
  tt as ce,
  va as le,
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
  Ac as h,
  Av as g,
  Bb as _,
  By as v,
  Cb as De,
  Cc as y,
  Dv as Oe,
  Gc as ke,
  Jv as Ae,
  Jx as b,
  Jy as je,
  Lb as Me,
  Nb as Ne,
  Nl as Pe,
  Ov as Fe,
  Pl as Ie,
  Pu as Le,
  Tc as Re,
  Tv as ze,
  Uv as Be,
  Uy as Ve,
  Wu as He,
  Wy as x,
  Yb as Ue,
  Yc as We,
  Z as Ge,
  Zi as Ke,
  Zl as qe,
  Zs as Je,
  ab as Ye,
  ar as Xe,
  ay as Ze,
  cr as Qe,
  cu as $e,
  dS as et,
  db as tt,
  er as nt,
  fc as rt,
  fu as it,
  gb as at,
  hS as S,
  ht as C,
  hx as w,
  ix as T,
  ju as ot,
  lu as st,
  nx as ct,
  ou as lt,
  ox as E,
  pu as ut,
  rb as dt,
  rl as D,
  ru as ft,
  rv as pt,
  su as mt,
  uS as O,
  ut as ht,
  uu as k,
  zr as gt,
  zv as _t,
} from "./main.js";
import { t as vt } from "./videoautopauseonblur.js";
import { t as yt } from "./browserpage.js";
var A = e(r()),
  j = class e {
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
        b(e.sm_Instance, `MarketingMessages store not initialized`),
        e.sm_Instance
      );
    }
    async GetMessageList(t, n = !1) {
      if (!E.logged_in) return [];
      let r = w.Init(mt);
      (r.Body().set_country_code(T.COUNTRY),
        r.Body().set_elanguage(S(T.LANGUAGE)),
        r.Body().set_client_package_version(t.nClientPackageVersion),
        r.Body().set_operating_system(t.eOSType),
        n && r.Body().set_include_seen_messages(!0),
        it(r),
        ut(r, e.sm_DefaultDataRequest));
      let i = await k.GetMarketingMessagesForUser(
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
      let r = w.Init(lt);
      (r.Body().set_gid(t), it(r), ut(r, e.sm_DefaultDataRequest));
      let i;
      if (
        ((i =
          n || E.logged_in
            ? await k.GetDisplayMarketingMessageForUser(
                this.m_SteamInterface.GetServiceTransport(),
                r,
              )
            : await k.GetDisplayMarketingMessage(
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
      let r = w.Init(st);
      (r.Body().set_gid(e),
        r.Body().set_display_index(t),
        r.Body().set_template_type(n),
        k.MarkMessageSeen(this.m_SteamInterface.GetServiceTransport(), r),
        this.m_setMessagesSeen.add(e));
    }
    BIsMessageSeen(e) {
      return this.m_setMessagesSeen.has(e);
    }
  };
function bt(e) {
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
function xt(e) {
  return `© ${new Date().getFullYear()} Valve Corporation${e ? ` and ` + e : ``}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
}
var M = class {
  m_message;
  m_templateVars = void 0;
  m_associatedItemKey;
  m_rgRecommendedAppIDs;
  m_nSaleItemCount;
  constructor(e) {
    (c(this),
      (this.m_message = e),
      (this.m_templateVars = bt(e.template_vars_json())));
    let t = e.associated_item(!1);
    ((this.m_associatedItemKey = t
      ? Ae({ item_type: t.item_type(), id: t.id() })
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
        return x(`#spotlight_weekend_deal`);
      case 11:
        return x(`#spotlight_midweek_madness`);
      case 12:
        return x(`#spotlight_daily_deal`);
      case 1:
        return x(`#msg_available_everywhere`);
      case 17:
        return x(`#msg_new_game`);
      case 3:
        return x(`#msg_prepurchase_now`);
      case 4:
        return x(`#msg_play_now`);
      case 5:
        return x(`#label_pre_load_now`);
      case 10:
        return x(`#label_just_updated`);
      case 13:
        return x(`#label_new_dlc_available`);
      case 14:
        return x(`#label_free_weekend`);
      case 15:
        return x(`#msg_on_sale_now`);
      case 16:
        return x(`#msg_play_beta_now`);
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
      this.m_templateVars?.localized_alt_text?.[v.GetELanguageFallback(e)] ||
      void 0
    );
  }
  GetTemplateImage() {
    let e = this.m_templateVars.ll_image[T.LANGUAGE],
      t = S(T.LANGUAGE);
    return (
      !e &&
        T.LANGUAGE == O(27) &&
        ((e = this.m_templateVars.ll_image.LATAM), (t = 27)),
      e || ((e = this.m_templateVars.ll_image.english), (t = 0)),
      [e?.path, t]
    );
  }
  GetTemplateBackgroundImage() {
    let e = this.m_templateVars.background[T.LANGUAGE],
      t = S(T.LANGUAGE);
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
    let e = this.m_templateVars.poster[T.LANGUAGE],
      t = S(T.LANGUAGE);
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
    let t = O(e);
    return !!this.m_templateVars.mp4[t];
  }
  GetTemplateWebM(e) {
    let t = O(e);
    return this.m_templateVars.webm[t]?.path;
  }
  GetTemplateWebMWithFallback(e) {
    let t = O(e);
    if (this.m_templateVars.webm[t]?.path)
      return [this.m_templateVars.webm[t].path, e];
    let n = v.GetELanguageFallback(e),
      r = O(n);
    return [this.m_templateVars.webm[r]?.path, n];
  }
  GetTemplateMP4(e) {
    let t = O(e);
    return this.m_templateVars.mp4[t]?.path;
  }
  GetTemplateMP4WithFallback(e) {
    let t = O(e);
    if (this.m_templateVars.mp4[t]?.path)
      return [this.m_templateVars.mp4[t].path, e];
    let n = v.GetELanguageFallback(e),
      r = O(n);
    return [this.m_templateVars.mp4[r]?.path, n];
  }
  GetLegalHTML() {
    return this.GetTemplateVars().use_custom_legal_text
      ? this.GetTemplateVars().custom_legal_text
      : xt(this.GetTemplateVars().partner);
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
Ne([t], M.prototype, `m_templateVars`, void 0);
var St = `^(replay)([0-9]{4})`;
function Ct(e) {
  return e.match(St)?.[2];
}
function wt(e) {
  if (e) {
    let t = e.match(St);
    return t?.[2] && !isNaN(Number(t?.[2]));
  }
  return !1;
}
function Tt(e, t, n) {
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
    c = A.useMemo(() => a?.map((e) => new M(e.message())), [a]),
    u = pt(),
    d = A.useRef(new Set());
  return (
    u &&
      c?.forEach((e) => {
        if (d.current.has(e.id)) return;
        let t = e.GetAssociatedItemProto();
        t && (u(t, j.sm_DefaultDataRequest), d.current.add(e.id));
      }),
    { rgMessages: o ? null : c, isError: s }
  );
}
function Et(e, t, n) {
  let { data: r, isError: i } = l({
      queryKey: [`MarketingMessages`, n ? `SinglePreivew` : `Single`, t],
      queryFn: () => e.GetSingleMessage(t, n),
      enabled: !!t,
    }),
    a = A.useMemo(() => {
      if (r) {
        let e = new M(r);
        if (n) {
          let t = Ue(`marketingmessage_preview_config`, `application_config`);
          (t?.dlc_appid_overrides?.length > 0 &&
            e.SetDLCAppIDOverride(t.dlc_appid_overrides),
            t?.recommended_appid_overrides?.length > 0 &&
              e.SetRecommendedAppIDsOverride(t.recommended_appid_overrides));
        }
        return e;
      }
    }, [r, n]),
    o = pt(),
    s = A.useRef(new Set());
  if (o && a && !s.current.has(a.id)) {
    let e = a.GetAssociatedItemProto();
    e && (o(e, j.sm_DefaultDataRequest), s.current.add(a.id));
  }
  return { message: a, isError: i };
}
function Dt(e, t, n, r, i) {
  let a = w.Init($e);
  (a.Body().set_gid(t),
    a.Body().set_display_index(n),
    a.Body().set_template_type(r),
    a.Body().set_click_location(i),
    k.MarkMessageClicked(e, a));
}
var N = o(),
  P = A.createContext({ setLegalText: void 0 });
function Ot() {
  return !!A.useContext(P).setLegalText;
}
function kt() {
  return A.useContext(P).setLegalText || function (e) {};
}
function At(e) {
  let [t, n] = A.useState(),
    r = Le(`BrowserView.RegisterForMessageFromParent`),
    i = _(),
    a = A.useMemo(() => ({ setLegalText: r && !i ? n : void 0 }), [r, n, i]);
  return (0, N.jsxs)(P.Provider, {
    value: a,
    children: [r && (0, N.jsx)(jt, { strLegalText: t }), e.children],
  });
}
function jt(e) {
  let { strLegalText: t } = e,
    n = A.useRef(void 0);
  return (
    A.useEffect(() => {
      ((n.current = t),
        SteamClient.BrowserView.PostMessageToParent(
          `MarketingMessageLegal`,
          t || ``,
        ));
    }, [t]),
    A.useEffect(
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
function Mt() {
  let e = a();
  return A.useMemo(() => {
    let t = new URLSearchParams(e.search);
    return {
      bIncludeSeenMessages: !!t.get(`include_seen`),
      nClientPackageVersion: parseInt(t.get(`client_package_version`) || `0`),
      eOSType: parseInt(t.get(`os_type`) || `0`),
      bLowBandwidthMode: !!t.get(`low_bandwidth`),
    };
  }, [e.search]);
}
function Nt(e) {
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
function Pt(e, t, n) {
  if (!n && e.BHasTemplateAnimatedAssets()) {
    let n = v.GetELanguageFallback(t);
    return (
      e.BHasTemplateAnimatedAssetForLanguage(t) ||
      e.BHasTemplateAnimatedAssetForLanguage(n)
    );
  }
  return !1;
}
function F(e, t, n, r) {
  if (!r || !r.path) return null;
  let i = n ? `?t=` + n : ``;
  return r.path.startsWith(`images`)
    ? `${T.MEDIA_CDN_URL}steam/marketing/${e}/${r.path}${i}`
    : `${T.BASE_URL_SHARED_CDN}store_item_assets/mm/${e}/${t}/${r.path}${i}`;
}
function Ft(e) {
  let { path: t, message: n, eLanguage: r, ...i } = e,
    a = n.GetTemplateVars()?.last_asset_mtime,
    o = F(n.id, r, a, { type: `file`, path: t }),
    s = n.GetLocalizedAltText(r);
  return (0, N.jsx)(`img`, { alt: s, ...i, src: o });
}
function It(e) {
  let { message: t, mp4Path: n, webmPath: r, language: i, ...a } = e,
    o = t.GetTemplateVars()?.last_asset_mtime,
    s = F(t.id, i, o, { type: `file`, path: r }),
    c = F(t.id, i, o, { type: `file`, path: n }),
    l = (0, A.useRef)(null);
  vt(l);
  let u = (0, A.useRef)(!1),
    d = (0, A.useCallback)(() => {
      l.current &&
        (document.visibilityState === `visible`
          ? (u.current &&= (l.current.play(), !1))
          : l.current.paused || (l.current.pause(), (u.current = !0)));
    }, []);
  return (
    Pe(document, `visibilitychange`, d),
    (0, A.useEffect)(() => d(), [d]),
    (0, N.jsxs)(`video`, {
      ...a,
      ref: l,
      children: [
        (0, N.jsx)(`source`, { src: s, type: `video/webm` }),
        (0, N.jsx)(`source`, { src: c, type: `video/mp4` }),
      ],
    })
  );
}
var Lt = `_0rg7QMNy7jY-`,
  Rt = `_9cacopcF0Dg-`,
  zt = `GouFTCf51tc-`,
  Bt = `cwi8pT-5toI-`,
  Vt = `nzSsIHRDj78-`,
  Ht = `Eo8SO7ZKWuE-`,
  Ut = `gxR5Tw6uJCI-`,
  Wt = `L-8gGuZ07gE-`,
  Gt = `_4UWrgYtZycQ-`,
  Kt = `JZpXsA-Xgmo-`,
  qt = `_0b6eHRCoMso-`,
  Jt = `fCMJE9GFrl4-`,
  I = `hoF4iyYjP-8-`,
  Yt = `xGRSgAVyH9M-`,
  Xt = `py-AHaUAgpQ-`,
  Zt = `tO2rzm85yrk-`,
  Qt = `EpvEBC52J48-`,
  $t = `IiPKTi2q3ko-`,
  en = `zwcqJ-kd93k-`,
  tn = `GpRe26KdcUA-`,
  nn = `dZQZQPAi8KY-`,
  rn = `_9eyq0UFYciQ-`,
  an = `ZWNrPcsxXHU-`,
  on = `jNvS4xxa-PA-`,
  sn = `ViqT-upLYlU-`;
function L(e) {
  return (0, N.jsx)(`div`, {
    className: zt,
    children: (0, N.jsx)(`div`, { className: Kt, children: e.children }),
  });
}
function R(e) {
  return (0, N.jsx)(`div`, { className: Jt, children: e.children });
}
function z(e) {
  let { isBackgroundBlur: t, bOverrideUseBackgroundImage: n } = e,
    r = Z(),
    i = $(r.GetTemplateVars().linkurl, 1),
    [a, o] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
  return (0, N.jsx)(h, {
    focusable: !0,
    noFocusRing: !0,
    className: y(I, t && `_0b6eHRCoMso-`),
    onActivate: i,
    children: a && (0, N.jsx)(Ft, { message: r, path: a, eLanguage: o }),
  });
}
function cn(e) {
  let { fnOnClick: t } = e,
    n = Z(),
    r = S(T.LANGUAGE),
    [i, a] = n.GetTemplateMP4WithFallback(r),
    [o, s] = n.GetTemplateWebMWithFallback(r);
  return (
    b(
      a == s,
      `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${a} webm ${s}`,
    ),
    (0, N.jsx)(`div`, {
      className: Yt,
      children: (0, N.jsx)(h, {
        focusable: !0,
        noFocusRing: !0,
        className: y(I),
        onActivate: t,
        children: (0, N.jsx)(It, {
          muted: !0,
          autoPlay: !0,
          controls: !1,
          loop: !0,
          mp4Path: i,
          message: n,
          webmPath: o,
          language: T.IN_CLIENT ? s : a,
        }),
      }),
    })
  );
}
function B(e) {
  let { id: t } = e,
    { data: n } = ze(t),
    r = n ? Re(n, `main_capsule`) : void 0;
  return r ? (0, N.jsx)(ln, { strImageURL: r }) : null;
}
function ln(e) {
  return (0, N.jsx)(`div`, {
    className: y(I, Xt, qt),
    children: (0, N.jsx)(`img`, { src: e.strImageURL }),
  });
}
function un(e) {
  let { strType: t, strTitle: n, bSmallTitle: r } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(`div`, { className: Zt, children: t }),
      (0, N.jsx)(`div`, { className: y(Qt, r && `RhkqxwedI4w-`), children: n }),
    ],
  });
}
function dn(e) {
  let { id: t, bPreview: n, bPreferAssetWithoutOverride: r } = e,
    { data: i } = g(t),
    a = i?.appid,
    o = _(),
    { bIsOwned: s } = re(t),
    c = ee(a),
    l = te(a),
    u = Fr(a ?? 0),
    d = (0, A.useMemo)(
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
  return (0, N.jsxs)(`div`, {
    className: $t,
    children: [
      (0, N.jsx)(D, {
        className: en,
        onClick: p,
        children: (0, N.jsx)(ue, {
          id: t,
          bPreferLibrary: !0,
          bPreferAssetWithoutOverride: r,
        }),
      }),
      (0, N.jsxs)(`div`, {
        className: tn,
        children: [
          (0, N.jsx)(`div`, {
            className: nn,
            children: (0, N.jsx)(D, {
              className: rn,
              onClick: p,
              children: i?.name,
            }),
          }),
          (0, N.jsxs)(`div`, {
            className: an,
            children: [
              (0, N.jsx)(D, {
                onClick: p,
                className: y(on, sn),
                children: x(
                  s
                    ? `#EventDisplay_ViewInLibrary`
                    : `#EventDisplay_ViewStorePage`,
                ),
              }),
              !s &&
                (0, N.jsx)(N.Fragment, {
                  children: (0, N.jsxs)(`div`, {
                    className: `RGk4BbX6ZEc-`,
                    children: [
                      c &&
                        (0, N.jsx)(`span`, {
                          children: x(`#EventDisplay_OnWishlist`),
                        }),
                      !c &&
                        l &&
                        (0, N.jsx)(`span`, {
                          children: x(`#EventDisplay_Follow`),
                        }),
                    ],
                  }),
                }),
              s &&
                (0, N.jsxs)(N.Fragment, {
                  children: [
                    !!d?.rtime_last_played &&
                      (0, N.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, N.jsx)(`span`, {
                            children: x(`#MarketingMessages_DLC_lastplayed`),
                          }),
                          tt(d.rtime_last_played),
                        ],
                      }),
                    !!d?.playtime_forever &&
                      (0, N.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, N.jsx)(`span`, {
                            children: x(`#MarketingMessages_DLC_hours`),
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
  return (0, N.jsx)(H, { bHidePrice: e.bHidePrice, fnOnClickButton: t });
}
function H(e) {
  let { bHidePrice: t, fnOnClickButton: n } = e,
    r = Z(),
    [i, a] = d(() => [
      r.GetTemplateVars().button_text_custom || r.GetTemplateVars().button_text,
      !!r.GetTemplateVars().hide_price,
    ]),
    o = !!(t || a);
  return (0, N.jsxs)(`div`, {
    className: y(Bt, !1),
    children: [
      (0, N.jsxs)(`div`, {
        className: Vt,
        children: [
          (0, N.jsx)(h, {
            focusable: !0,
            noFocusRing: !0,
            className: Ut,
            onActivate: n,
            children: i,
          }),
          !o && (0, N.jsx)(We, { children: (0, N.jsx)(fn, {}) }),
        ],
      }),
      (0, N.jsx)(pn, {}),
    ],
  });
}
function fn() {
  let e = Z().associated_item_key,
    { data: t } = Fe(e);
  return !t || !t.formatted_final_price
    ? (0, N.jsx)(`div`, { className: Gt })
    : (0, N.jsx)(`div`, { className: Wt, children: (0, N.jsx)(oe, { id: e }) });
}
function pn(e) {
  let t = Z();
  return Ot()
    ? null
    : (0, N.jsx)(`div`, {
        className: Ht,
        dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
      });
}
function U(e) {
  let { id: t, type: n, eClickLocation: r } = e,
    i = zr(t, n, r);
  return (0, N.jsx)(de, {
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
  return (0, N.jsx)(`div`, {
    onClick: (e) => {
      (e.preventDefault(), i(e));
    },
    children: (0, N.jsx)(we, {
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
    { data: a } = g(r.associated_item_key),
    o = m(a) ?? ``,
    s = _n(i, o, 1),
    c = _n(i, o, 2);
  return (0, N.jsx)(C, {
    submethod: `partner_event`,
    children: (0, N.jsxs)(L, {
      children: [
        (0, N.jsx)(B, { id: r.associated_item_key }),
        (0, N.jsxs)(R, {
          children: [
            (0, N.jsx)(dn, {
              id: r.associated_item_key,
              bPreview: t,
              bPreferAssetWithoutOverride: !1,
            }),
            (0, N.jsx)(gn, {
              message: r,
              eventModel: i,
              fnOnClickButton: s,
              bUseAnimated: n,
            }),
          ],
        }),
        (0, N.jsx)(H, { bHidePrice: !0, fnOnClickButton: c }),
      ],
    }),
  });
}
function gn(e) {
  let { message: t, fnOnClickButton: n, eventModel: r, bUseAnimated: i } = e,
    [a, o] = t.GetTemplateImage(),
    s = S(T.LANGUAGE);
  return (0, N.jsxs)(`div`, {
    className: Lt,
    children: [
      (0, N.jsx)(un, {
        strType: x(`#MarketingMessages_MajorUpdate`),
        strTitle: r?.GetNameWithFallback(s),
      }),
      (0, N.jsxs)(h, {
        focusable: !0,
        noFocusRing: !0,
        className: y(Rt),
        onActivate: n,
        children: [
          a && !i && (0, N.jsx)(Ft, { message: t, path: a, eLanguage: o }),
          i && (0, N.jsx)(cn, { fnOnClick: n }),
        ],
      }),
    ],
  });
}
function _n(e, t, n) {
  let r = f(e?.appid),
    i = He(Lr(t), `partner_event`);
  if (e?.BIsVisibleEvent() && r && e.BIsValidForRealm(T.EREALM)) {
    let n = ct();
    T.IN_CLIENT && (n > 1726604483 || n == 0)
      ? (t = `steam://open/library/event/${e.appid}|${e.GID}`)
      : ((t = `${T.STORE_BASE_URL}news/app/${e.appid}?emclan=${e.clanSteamID.ConvertTo64BitString()}&emgid=${e.GID}`),
        T.IN_CLIENT && (t = `steam://openurl/${t}`));
  } else
    ((t = i),
      e && (t += `${i.includes(`?`) ? `&` : `?`}emgid=${e.GID}`),
      T.IN_CLIENT && (t = `steam://openurl/${t}`));
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
  let t = `${T.STORE_BASE_URL}dlc/${e}/ajaxgetdlccount`,
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
    r = (0, A.useMemo)(
      () => n.GetDLCAppIDs().map((e) => ({ id: e, type: `game` })),
      [n],
    ),
    i = yn(n.associated_item_appid);
  return (
    (0, A.useEffect)(() => {
      if (n) {
        let e = i
          ? je(`#MarketingMessages_See_Count_Items`, i)
          : x(`#MarketingMessages_See_All_Items`);
        (n.OverrideCustomText(e),
          n.OverrideURL(`${T.STORE_BASE_URL}dlc/${n.associated_item_appid}`));
      }
    }, [n, i]),
    (0, N.jsx)(C, {
      submethod: `dlc_override`,
      children: (0, N.jsxs)(L, {
        children: [
          (0, N.jsx)(B, { id: n.associated_item_key }),
          (0, N.jsxs)(R, {
            children: [
              (0, N.jsx)(dn, {
                id: n.associated_item_key,
                bPreview: t,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, N.jsx)(Tn, {
                rgDLCSaleCapsules: r,
                messageType: n.GetType(),
              }),
            ],
          }),
          (0, N.jsx)(V, { bHidePrice: !0 }),
        ],
      }),
    })
  );
}
function q(e) {
  let { messageType: t, itemCount: n } = e,
    r = M.GetTypeAsLocalizedString(t);
  return (0, N.jsxs)(N.Fragment, {
    children: [
      !!r && (0, N.jsx)(`div`, { className: `w00lHTKEq4I-`, children: r }),
      n == 1
        ? (0, N.jsx)(J, { strDesc: x(`#MarketingMessages_DLC_desc_singular`) })
        : (0, N.jsx)(J, { strDesc: x(`#MarketingMessages_DLC_desc`) }),
    ],
  });
}
function Tn(e) {
  let { rgDLCSaleCapsules: t, messageType: n } = e;
  return t.length >= 4
    ? (0, N.jsx)(En, {
        rgSaleCapsules: t,
        eClickLocation: 3,
        children: (0, N.jsx)(q, { messageType: n }),
      })
    : t.length >= 3
      ? (0, N.jsxs)(`div`, {
          className: G,
          children: [
            (0, N.jsx)(q, { messageType: n }),
            (0, N.jsx)(`div`, {
              className: K,
              children: (0, N.jsx)(U, {
                id: t[0].id,
                type: t[0].type,
                eClickLocation: 3,
              }),
            }),
            (0, N.jsx)(Y, { first: t[1], second: t[2], eClickLocation: 3 }),
          ],
        })
      : t.length >= 2
        ? (0, N.jsx)(Dn, {
            rgSaleCapsules: t,
            eClickLocation: 3,
            children: (0, N.jsx)(q, { messageType: n }),
          })
        : t.length >= 1
          ? (0, N.jsxs)(`div`, {
              className: G,
              children: [
                (0, N.jsx)(q, { messageType: n, itemCount: t.length }),
                (0, N.jsx)(`div`, {
                  className: Sn,
                  children: (0, N.jsx)(W, {
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
  return (0, N.jsxs)(`div`, {
    className: G,
    children: [
      r,
      (0, N.jsx)(Y, { first: t[0], second: t[1], eClickLocation: n }),
      (0, N.jsx)(Y, { first: t[2], second: t[3], eClickLocation: n }),
    ],
  });
}
function Dn(e) {
  let { rgSaleCapsules: t, eClickLocation: n, children: r } = e;
  return (0, N.jsxs)(`div`, {
    className: G,
    children: [
      r,
      (0, N.jsx)(`div`, {
        className: K,
        children: (0, N.jsx)(U, {
          id: t[0].id,
          type: t[0].type,
          eClickLocation: n,
        }),
      }),
      (0, N.jsx)(`div`, {
        className: K,
        children: (0, N.jsx)(U, {
          id: t[1].id,
          type: t[1].type,
          eClickLocation: n,
        }),
      }),
    ],
  });
}
function J(e) {
  return (0, N.jsx)(`div`, { className: xn, children: e.strDesc });
}
function Y(e) {
  let { first: t, second: n, eClickLocation: r } = e;
  return (0, N.jsxs)(`div`, {
    className: Cn,
    children: [
      (0, N.jsx)(`div`, {
        className: G,
        children: (0, N.jsx)(W, {
          capsule: t,
          imageType: `header`,
          eClickLocation: r,
        }),
      }),
      (0, N.jsx)(`div`, {
        className: G,
        children: (0, N.jsx)(W, {
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
    [n, r] = (0, A.useState)(() => t.GetFeaturedVideoAutoPlay()),
    i = (0, A.useRef)(null);
  vt(i);
  let a = $(t.GetTemplateVars().linkurl, 1),
    o = _();
  return (0, N.jsx)(h, {
    focusable: !0,
    noFocusRing: !0,
    onActivate: (e) => (!o && t.GetFeaturedVideoAutoPlay() ? a(e) : r(!0)),
    className: On,
    children: n
      ? (0, N.jsxs)(`video`, {
          controls: !t.GetFeaturedVideoLoop(),
          ref: i,
          muted: !0,
          autoPlay: !0,
          className: An,
          loop: t.GetFeaturedVideoLoop(),
          crossOrigin: `anonymous`,
          children: [
            (0, N.jsx)(`source`, {
              src: ke(t.GetFeaturedVideoWebMURL()),
              type: `video/webm`,
            }),
            !T.IN_CLIENT &&
              (0, N.jsx)(`source`, {
                src: ke(t.GetFeaturedVideoMP4URL()),
                type: `video/mp4`,
              }),
            (0, N.jsx)(Nn, { message: t }),
          ],
        })
      : (0, N.jsx)(Mn, { message: t }),
  });
}
function Mn(e) {
  let { message: t } = e,
    n = t.GetTemplateVars()?.last_asset_mtime,
    [r, i] = t.GetPosterImage(),
    a = F(t.id, i, n, { type: `file`, path: r });
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(`img`, { src: a, className: kn }),
      (0, N.jsx)(rt, {}),
    ],
  });
}
function Nn(e) {
  let { message: t } = e,
    n = (0, A.useMemo)(() => {
      let e = t.GetSubtitleObj(),
        n = t.GetTemplateVars()?.last_asset_mtime,
        r = [];
      for (let i = 0; i < 32; ++i) {
        if (!v.IsELanguageValidInRealm(i, T.EREALM)) continue;
        let a = O(i);
        if (e && e[a]) {
          let o = e[a].path,
            s = F(t.id, i, n, { type: `file`, path: o });
          r.push(
            (0, N.jsx)(
              `track`,
              {
                src: s,
                kind: `subtitles`,
                srcLang: et(i),
                default: T.LANGUAGE == a,
                label: x(`#language_selection_` + O(i)),
              },
              t.id + ` ` + i,
            ),
          );
        }
      }
      return r;
    }, [t]);
  return (0, N.jsx)(N.Fragment, { children: n });
}
function Pn(e) {
  let { bLowBandwidthMode: t } = e,
    n = Z(),
    r = !t && n.GetTemplateVars().custom_display === `featured_video`;
  return (0, N.jsx)(C, {
    children: (0, N.jsxs)(L, {
      children: [
        (0, N.jsx)(z, { isBackgroundBlur: !0, bOverrideUseBackgroundImage: r }),
        (0, N.jsxs)(R, {
          children: [
            (0, N.jsx)(z, { bOverrideUseBackgroundImage: r }),
            !!r && (0, N.jsx)(jn, {}),
          ],
        }),
        (0, N.jsx)(V, {}),
      ],
    }),
  });
}
function Fn(e) {
  let t = $(Z().GetTemplateVars().linkurl, 6);
  return (0, N.jsx)(C, {
    children: (0, N.jsxs)(L, {
      children: [
        (0, N.jsx)(z, { isBackgroundBlur: !0 }),
        (0, N.jsx)(R, { children: (0, N.jsx)(cn, { fnOnClick: t }) }),
        (0, N.jsx)(V, {}),
      ],
    }),
  });
}
function In(e) {
  let { id: t } = e,
    { data: n } = g(t),
    r = (0, A.useMemo)(() => {
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
    : (0, N.jsx)(`div`, {
        className: y(p, `SaleTagBlockCtn`),
        children:
          r?.length > 0
            ? (0, N.jsx)(`div`, {
                className: y(le, ne),
                children: r.map((e) =>
                  (0, N.jsx)(Rn, { categoryID: e }, `cat_` + e),
                ),
              })
            : (0, N.jsx)(`div`, { children: x(`#Broadcast_None`) }),
      });
}
var Ln = class e {
  m_rgCategories;
  constructor() {
    this.m_rgCategories = Ue(`feature_categories`, `application_config`);
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
    ? (0, N.jsx)(`div`, {
        className: ae,
        children: (0, N.jsx)(gt, {
          toolTipContent: n.display_name,
          children: (0, N.jsx)(`div`, {
            className: se,
            style: {
              background: `url(${T.STORE_CDN_URL}${n.image_url}) no-repeat center center/cover`,
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
    { data: a } = _t(t),
    { data: o } = g(t),
    s = qe(t);
  return !a || !o
    ? (0, N.jsx)(`div`, {
        className: y(Se, ve),
        children: (0, N.jsx)(pe, { size: `medium` }),
      })
    : (0, N.jsx)(`div`, {
        className: y(Se, ve),
        children: (0, N.jsx)(Ce, {
          id: t,
          elFeaturedInCenter: (0, N.jsx)(Bn, {
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
    [, i] = Ie(),
    { data: a } = ze(t, r),
    { data: o } = g(t),
    { data: s } = Oe(t),
    { data: c } = Be(t);
  if (!a || !s || !o) return null;
  let l = Re(a, `main_capsule`);
  return (0, N.jsxs)(h, {
    focusable: !0,
    noFocusRing: !0,
    className: ye,
    ...i,
    onActivate: n,
    children: [
      (0, N.jsx)(`img`, { className: _e, src: l, alt: o.name || `` }),
      (0, N.jsxs)(`div`, {
        className: ge,
        children: [
          (0, N.jsx)(`div`, { className: y(be), children: o.name || `` }),
          (0, N.jsxs)(`div`, {
            className: xe,
            children: [s.short_description, ` `],
          }),
          (0, N.jsx)(ie, {
            rgTagIDs: c ? c.slice(0, 10).map((e) => e.tagid || 0) : [],
            instanceNum: 0,
            bLargeText: !0,
            bHideTitle: !0,
            bNoStoreLinks: !0,
          }),
          (0, N.jsx)(In, { id: t }),
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
  return (0, N.jsx)(C, {
    submethod: `mm-auto-render`,
    children: (0, N.jsxs)(L, {
      children: [
        (0, N.jsx)(B, { id: a }),
        (0, N.jsx)(R, {
          children: (0, N.jsxs)(`div`, {
            className: Vn,
            children: [
              (0, N.jsxs)(`div`, {
                className: Hn,
                children: [
                  (0, N.jsx)(`div`, {
                    className: Un,
                    children: M.GetTypeAsLocalizedString(r.GetType()),
                  }),
                  (0, N.jsx)(Kn, { message: r, id: a }),
                ],
              }),
              (0, N.jsx)(ce, {
                appid: r.associated_item_appid,
                children: (0, N.jsx)(zn, {
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
        (0, N.jsx)(H, {
          bHidePrice: r.GetTemplateVars().hide_price,
          fnOnClickButton: i,
        }),
      ],
    }),
  });
}
function Kn(e) {
  let { message: t, id: n } = e,
    { data: r } = g(n),
    i = r?.free_weekend,
    [a] = fe(`timezone`),
    [o] = fe(`locale`);
  if (t.GetType() == 14) {
    if (i?.text) return (0, N.jsx)(`div`, { className: X, children: i.text });
    if (i?.end_time) {
      o && Ve.SetPreferredLocales([o]);
      let e = a || Intl.DateTimeFormat().resolvedOptions().timeZone,
        t = i.end_time,
        n = Wn.unix(t).tz(e),
        r = n.format(`z`),
        s = r.match(/^-?\d/)
          ? `UTC${Wn.unix(t).tz(e).format(`Z`).replace(`:00`, ``)}`
          : r,
        c = Ye(n.unix(), !1, s, a);
      return (0, N.jsx)(`div`, {
        className: X,
        children: x(`#msg_free_play_until`, c),
      });
    }
    return (0, N.jsx)(`div`, {
      className: X,
      children: x(`#msg_free_play_weekend`),
    });
  }
  let s = t.GetTemplateVars()?.autorender_subtitle_token;
  return s ? (0, N.jsx)(`div`, { className: X, children: x(s) }) : null;
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
    a = he(r, `capsule`, S(T.LANGUAGE)),
    o = e.GetRecommendedAppIDs().length >= 4,
    s = (0, A.useMemo)(
      () =>
        e
          .GetRecommendedAppIDs()
          .slice(0, o ? 4 : 2)
          .map((e) => ({ id: e, type: `game` })),
      [e, o],
    );
  return (
    (0, A.useEffect)(() => {
      let t = er(e.GetSaleItemCount());
      t &&
        e.OverrideCustomText(x(`#MarketingMessages_See_AtLeast_Items`, Ke(t)));
    }, [e]),
    (0, N.jsx)(C, {
      submethod: `sale_items`,
      children: (0, N.jsxs)(L, {
        children: [
          a
            ? (0, N.jsx)(ln, { strImageURL: a })
            : (0, N.jsx)(z, { isBackgroundBlur: !0 }),
          (0, N.jsxs)(R, {
            children: [
              (0, N.jsx)(tr, { eventModel: r, strCapsuleURL: a, bLoading: i }),
              (0, N.jsx)(`div`, {
                className: Xn,
                children: o
                  ? (0, N.jsx)(En, {
                      rgSaleCapsules: s,
                      eClickLocation: 5,
                      children: (0, N.jsx)(J, {
                        strDesc: x(`#MarketingMessages_SaleItems_Label`),
                      }),
                    })
                  : (0, N.jsx)(Dn, {
                      rgSaleCapsules: s,
                      eClickLocation: 5,
                      children: (0, N.jsx)(J, {
                        strDesc: x(`#MarketingMessages_SaleItems_Label`),
                      }),
                    }),
              }),
            ],
          }),
          (0, N.jsx)(V, { bHidePrice: !0 }),
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
  if (r) return (0, N.jsx)(`div`, { className: qn });
  if (!t || !n) return (0, N.jsx)(z, {});
  let o = t.GetNameWithFallback(S(T.LANGUAGE)),
    s = t.endTime,
    c = !!s && s > at();
  return (0, N.jsxs)(h, {
    focusable: !0,
    noFocusRing: !0,
    className: qn,
    onActivate: a,
    children: [
      (0, N.jsx)(`img`, { className: Jn, src: n, alt: o }),
      (0, N.jsxs)(`div`, {
        className: Yn,
        children: [
          (0, N.jsx)(un, {
            strType: x(`#MarketingMessages_SaleEvent`),
            strTitle: o,
            bSmallTitle: !0,
          }),
          c &&
            (0, N.jsx)(`div`, {
              className: `HY39mN5xR8M-`,
              children: x(`#MarketingMessages_SaleEvent_Through`, dt(s, Zn)),
            }),
        ],
      }),
    ],
  });
}
var nr = A.createContext(null);
function Z() {
  return A.useContext(nr);
}
function rr(e) {
  let { message: t, preview: n } = e,
    r = e.active !== !1,
    i = kt();
  return (
    A.useEffect(() => {
      r && i(t.GetLegalHTML());
    }, [r, t, i]),
    (0, N.jsx)(nr.Provider, {
      value: t,
      children: (0, N.jsx)(A.Suspense, {
        fallback: null,
        children: (0, N.jsx)(ar, { message: t, active: r, preview: n }),
      }),
    })
  );
}
var ir = A.lazy(() =>
  De(
    () => import(`./replay.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    import.meta.url,
  ),
);
function ar(e) {
  let { message: t, active: n, preview: r } = e,
    i = S(T.LANGUAGE),
    { bLowBandwidthMode: a } = Mt();
  if (wt(t.GetTemplateVars().custom_display || ``) && E.logged_in) {
    let e = Number(Ct(t.GetTemplateVars().custom_display || ``));
    return isNaN(e) ? null : (0, N.jsx)(ir, { active: n, year: e });
  }
  switch (t.GetTemplateVars().custom_display) {
    case `dlc_override`:
      return (0, N.jsx)(wn, { bPreview: r });
    case `partner_event`:
      return (0, N.jsx)(hn, { bPreview: r, bUseAnimated: Pt(t, i, a) });
    case `mm_auto_render`:
      return (0, N.jsx)(Gn, { bPreview: r, bLowBandwidthMode: a });
  }
  if (t.BShouldShowSaleItems()) return (0, N.jsx)($n, {});
  switch (t.GetTemplateType()) {
    case `image`:
      return Pt(t, i, a)
        ? (0, N.jsx)(Fn, {})
        : (0, N.jsx)(Pn, { bLowBandwidthMode: a });
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
  Er = A.createContext(null);
function Dr() {
  return A.useContext(Er);
}
function Or(e) {
  let { MarketingMessagesStore: t } = e,
    r = Mt(),
    { rgMessages: i, isError: a } = Tt(t, r),
    [o, s] = A.useState(!1),
    [c, l] = A.useState(0);
  yt(or);
  let u = n();
  if (
    (A.useEffect(() => {
      i &&
        !i.length &&
        !a &&
        (r.bIncludeSeenMessages
          ? s(!0)
          : u.replace({
              ...u.location,
              search: Nt({ ...r, bIncludeSeenMessages: !0 }),
            }));
    }, [i, r, u, a]),
    a)
  )
    return (0, N.jsx)(Q, {
      children: x(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (o)
    return (0, N.jsx)(Q, { children: x(`#MarketingMessages_NoneAvailable`) });
  let d = r.bIncludeSeenMessages ? i : i?.slice(0, Tr);
  return (0, N.jsxs)(`div`, {
    className: sr,
    children: [
      (0, N.jsx)(`div`, {
        className: cr,
        children: (0, N.jsx)(kr, {
          MarketingMessagesStore: t,
          rgMessages: d,
          iActiveMessage: c,
        }),
      }),
      (0, N.jsx)(Ar, { cMessages: d?.length, iMessage: c, setMessage: l }),
    ],
  });
}
function kr(e) {
  let { MarketingMessagesStore: t, rgMessages: n, iActiveMessage: r } = e;
  return n
    ? (0, N.jsx)(`div`, {
        className: gr,
        children: n?.map((e, n) =>
          (0, N.jsx)(
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
    : (0, N.jsx)(`div`, {
        className: y(gr, _r),
        children: (0, N.jsx)(pe, { size: `xxlarge`, msDelayAppear: 500 }),
      });
}
function Ar(e) {
  let { cMessages: t, iMessage: n, setMessage: r } = e,
    i = A.useCallback(() => r(n - 1), [r, n]),
    a = A.useCallback(() => r(n + 1), [r, n]),
    o = [];
  for (let e = 0; e < t; e++)
    o.push((0, N.jsx)(jr, { active: e == n, iMessage: e, setMessage: r }, e));
  let s = n > 0 ? i : void 0,
    c = n < t - 1 ? a : void 0;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(`div`, { className: void 0 }),
      (0, N.jsx)(`div`, {
        className: lr,
        children: (0, N.jsxs)(`div`, {
          className: ur,
          children: [
            (0, N.jsx)(`div`, {
              className: y(dr, s && `gHoA3r84Hvo-`),
              onClick: s,
              children: (0, N.jsx)(Je, { angle: 180 }),
            }),
            (0, N.jsx)(`div`, { className: fr }),
            (0, N.jsx)(`div`, {
              className: pr,
              children: (0, N.jsx)(`div`, { className: mr, children: o }),
            }),
            (0, N.jsx)(`div`, { className: fr }),
            (0, N.jsx)(`div`, {
              className: y(dr, c && `gHoA3r84Hvo-`),
              onClick: c,
              children: (0, N.jsx)(Je, { angle: 0 }),
            }),
          ],
        }),
      }),
    ],
  });
}
function jr(e) {
  let { active: t, iMessage: n, setMessage: r } = e,
    i = A.useCallback(() => r(n), [r, n]);
  return (0, N.jsx)(`div`, {
    className: y(hr, t && `gHoA3r84Hvo-`),
    onClick: i,
  });
}
function Mr(e) {
  let { MarketingMessagesStore: t, preview: n } = e,
    r = i(),
    { message: a, isError: o } = Et(t, r.params.messageid, n);
  return (
    yt(or),
    o
      ? (0, N.jsx)(Q, { children: x(`#Error_ErrorCommunicatingWithNetwork`) })
      : r.params.messageid
        ? a
          ? (0, N.jsx)(rr, { message: a, preview: n })
          : null
        : (0, N.jsx)(Q, { children: x(`#MarketingMessages_NoneAvailable`) })
  );
}
function Q(e) {
  return (0, N.jsxs)(Xe, {
    style: { maxWidth: `400px`, margin: `0 auto` },
    children: [
      (0, N.jsxs)(Qe, { children: [x(`#Error_Generic`), ` `] }),
      (0, N.jsx)(nt, { children: e.children }),
    ],
  });
}
function Nr(e, t, n) {
  A.useEffect(() => {
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
    o = A.useRef(void 0),
    c = A.useRef(r || i);
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
  return (0, N.jsx)(s, {
    in: r,
    nodeRef: o,
    classNames: l,
    timeout: 300,
    mountOnEnter: !i,
    unmountOnExit: !i,
    children: (0, N.jsx)(Er.Provider, {
      value: a,
      children: (0, N.jsx)(`div`, {
        className: y(vr, r && `gHoA3r84Hvo-`),
        ref: o,
        children: (0, N.jsx)(rr, { message: t, active: r }),
      }),
    }),
  });
}
function Fr(e) {
  let t = Ze(),
    n = l({
      queryKey: [`useGamePlaytimeInfo`, e],
      queryFn: async () => Ir(e, t),
      enabled: !!(e && e != 0),
    });
  return n.isSuccess ? n.data : null;
}
async function Ir(e, t) {
  let n = w.Init(Ge);
  (n.Body().set_steamid(E.steamid),
    n.Body().set_appids_filter([e]),
    n.Body().set_include_played_free_games(!0),
    n.Body().set_language(T.LANGUAGE));
  let r = await ht.GetOwnedGames(t, n);
  return r.Body().games().length > 0 ? r.Body().games()[0].toObject() : {};
}
function Lr(e) {
  return Me() && e?.startsWith(`https://store.steampowered.com/`)
    ? e.replace(`https://store.steampowered.com/`, T.STORE_BASE_URL)
    : e;
}
function Rr(e) {
  let t = Ze(),
    n = Z(),
    r = Dr();
  return (
    (r = r === null ? 0 : r + 1),
    (0, A.useCallback)(() => {
      Dt(t, n.id, r, n.GetTemplateTypeForReporting(), e);
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
  let a = He(Lr(e), i);
  return (
    n && (a = e),
    a.startsWith(`steam://`) || (a = `steam://openurl/${a}`),
    (0, A.useCallback)(
      (e) => {
        r();
        let t = ot(e);
        t.location.href = a;
      },
      [a, r],
    )
  );
}
function zr(e, t, n) {
  let r = Ae({ item_type: ft(t), id: e }),
    { data: i } = g(r);
  return $(m(i) ?? T.STORE_BASE_URL, n);
}
export { At as a, Z as i, Or as n, j as o, Mr as r, $ as t };

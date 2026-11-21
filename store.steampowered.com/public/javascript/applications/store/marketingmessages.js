/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chunk~035fbeff8f.js",
      "./chunk~f025431ab0.js",
      "./chunk~01cfc309bf.js",
      "./main.js",
      "../../../css/applications/store/chunk~bcf59b1f6b.css",
      "./chunk~f6ebb80c8b.js",
      "./chunk~c0f9f0eb46.js",
      "../../../css/applications/store/chunk~1dc2296506.css",
      "../../../css/applications/store/chunk~035fbeff8f.css",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  At as n,
  B as r,
  F as i,
  L as a,
  Lt as o,
  P as s,
  U as c,
  V as l,
  ft as u,
  i as d,
  kt as f,
  st as p,
  tt as ee,
  u as te,
} from "./chunk~01cfc309bf.js";
import {
  Ho as ne,
  Os as re,
  St as ie,
  Vn as ae,
  ao as oe,
  er as se,
  ks as ce,
  n as le,
  oo as ue,
  so as de,
  vs as fe,
} from "./chunk~6b8ddcaac8.js";
import { t as m } from "./chunk~4c13037b22.js";
import "./chunk~19394a4118.js";
import { n as pe } from "./chunk~cbbb6ae37c.js";
import { t as me } from "./chunk~f4c928a27a.js";
import { o as he } from "./chunk~af36c62e9f.js";
import { t as ge } from "./chunk~eefd71512b.js";
import { t as _e } from "./chunk~429133cc70.js";
import { n as ve } from "./chunk~e70aabe4d7.js";
import {
  a as ye,
  c as be,
  f as xe,
  l as Se,
  o as Ce,
  p as we,
  s as Te,
  t as Ee,
} from "./chunk~7dcf2f426f.js";
import { n as De } from "./chunk~3ea79bd96d.js";
import { t as Oe } from "./chunk~166d91af35.js";
import { a as ke } from "./chunk~fc8a9e4879.js";
import {
  $b as h,
  $y as g,
  Bc as _,
  Bv as Ae,
  CS as v,
  Fc as je,
  Gl as Me,
  Ib as Ne,
  Kb as Pe,
  Kl as Fe,
  Nc as y,
  OS as b,
  Ox as x,
  Qv as Ie,
  Rv as Le,
  Sc as Re,
  Su as S,
  Tu as ze,
  Uv as C,
  Vv as Be,
  Wu as Ve,
  Xb as He,
  Xu as w,
  Yr as Ue,
  Z as We,
  _r as Ge,
  _x as T,
  al as Ke,
  bu as qe,
  by as Je,
  cx as E,
  gb as Ye,
  gt as D,
  gv as Xe,
  hl as Ze,
  hu as Qe,
  hx as $e,
  kb as et,
  lr as tt,
  lu as nt,
  mr as rt,
  nb as it,
  ny as at,
  oa as ot,
  qu as st,
  rb as O,
  rd as ct,
  rn as lt,
  sS as ut,
  sb as dt,
  sc as ft,
  sy as pt,
  tl as mt,
  ut as ht,
  vb as gt,
  vu as _t,
  vy as vt,
  wS as yt,
  wb as bt,
  wu as xt,
  xu as St,
  yu as Ct,
  yx as k,
} from "./main.js";
import { t as wt } from "./chunk~d7992cfd18.js";
import { t as Tt } from "./chunk~c20130a1f0.js";
var A = u(),
  j = e(o()),
  M = class e {
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
        ut(e.sm_Instance, `MarketingMessages store not initialized`),
        e.sm_Instance
      );
    }
    async GetMessageList(t, n = !1) {
      if (!k.logged_in) return [];
      let r = x.Init(Ct);
      (r.Body().set_country_code(T.COUNTRY),
        r.Body().set_elanguage(b(T.LANGUAGE)),
        r.Body().set_client_package_version(t.nClientPackageVersion),
        r.Body().set_operating_system(t.eOSType),
        n && r.Body().set_include_seen_messages(!0),
        xt(r),
        ze(r, e.sm_DefaultDataRequest));
      let i = await S.GetMarketingMessagesForUser(
        this.m_SteamInterface.GetServiceTransport(),
        r,
      );
      if (i.GetEResult() != 1)
        throw `Error loading marketing messages: ${i.GetEResult()}`;
      if (n)
        for (let e of i.Body().messages()) {
          let t = e.message().gid();
          e.already_seen() && t && this.m_setMessagesSeen.add(t);
        }
      return i.Body().messages();
    }
    async GetSingleMessage(t, n) {
      let r = x.Init(_t);
      (r.Body().set_gid(t), xt(r), ze(r, e.sm_DefaultDataRequest));
      let i;
      if (
        ((i =
          n || k.logged_in
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
      let r = x.Init(St);
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
function Et(e) {
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
function Dt(e) {
  return `© ${new Date().getFullYear()} Valve Corporation${e ? ` and ` + e : ``}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
}
var N = class {
  m_message;
  m_templateVars = void 0;
  m_associatedItemKey;
  m_rgRecommendedAppIDs;
  m_nSaleItemCount;
  constructor(e) {
    (f(this),
      (this.m_message = e),
      (this.m_templateVars = Et(e.template_vars_json()) ?? { ll_image: {} }));
    let t = e.associated_item(!1);
    ((this.m_associatedItemKey = t
      ? pt({ item_type: t.item_type(), id: t.id() })
      : void 0),
      (this.m_rgRecommendedAppIDs = e
        .recommended_items()
        .map((e) => e.appid())
        .filter((e) => !!e)),
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
        return O(`#spotlight_weekend_deal`);
      case 11:
        return O(`#spotlight_midweek_madness`);
      case 12:
        return O(`#spotlight_daily_deal`);
      case 1:
        return O(`#msg_available_everywhere`);
      case 17:
        return O(`#msg_new_game`);
      case 3:
        return O(`#msg_prepurchase_now`);
      case 4:
        return O(`#msg_play_now`);
      case 5:
        return O(`#label_pre_load_now`);
      case 10:
        return O(`#label_just_updated`);
      case 13:
        return O(`#label_new_dlc_available`);
      case 14:
        return O(`#label_free_weekend`);
      case 15:
        return O(`#msg_on_sale_now`);
      case 16:
        return O(`#msg_play_beta_now`);
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
      this.m_templateVars?.localized_alt_text?.[g.GetELanguageFallback(e)] ||
      void 0
    );
  }
  GetTemplateImage() {
    let e = this.m_templateVars.ll_image?.[T.LANGUAGE],
      t = b(T.LANGUAGE);
    return (
      !e &&
        T.LANGUAGE == v(27) &&
        ((e = this.m_templateVars.ll_image?.LATAM), (t = 27)),
      e || ((e = this.m_templateVars.ll_image?.english), (t = 0)),
      [e?.path, t]
    );
  }
  GetTemplateBackgroundImage() {
    let e = this.m_templateVars.background?.[T.LANGUAGE],
      t = b(T.LANGUAGE);
    return (
      e || ((e = this.m_templateVars.background?.english), (t = 0)),
      [e?.path, t]
    );
  }
  GetFeaturedVideoMP4URL() {
    return this.m_templateVars.featured_video_mp4;
  }
  GetFeaturedVideoWebMURL() {
    return this.m_templateVars.featured_video_webm;
  }
  GetFeaturedVideoAutoPlay() {
    return !!this.m_templateVars.featured_video_autoplay;
  }
  GetFeaturedVideoLoop() {
    return !!this.m_templateVars.featured_video_loop;
  }
  GetPosterImage() {
    let e = this.m_templateVars.poster?.[T.LANGUAGE],
      t = b(T.LANGUAGE);
    return (
      e || ((e = this.m_templateVars.poster?.english), (t = 0)), [e?.path, t]
    );
  }
  GetSubtitleObj() {
    return this.m_templateVars.subtitles;
  }
  GetDLCAppIDs() {
    return (this.m_templateVars.additional_featuring ?? [])
      .map((e) => e.appid)
      .filter((e) => !!e);
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
    return !!this.m_templateVars.has_animated_assets;
  }
  BHasTemplateAnimatedAssetForLanguage(e) {
    let t = v(e);
    return !!this.m_templateVars.mp4?.[t];
  }
  GetTemplateWebM(e) {
    let t = v(e);
    return this.m_templateVars.webm?.[t]?.path;
  }
  GetTemplateWebMWithFallback(e) {
    let t = v(e),
      n = this.m_templateVars.webm?.[t]?.path;
    if (n) return [n, e];
    let r = g.GetELanguageFallback(e),
      i = v(r);
    return [this.m_templateVars.webm?.[i]?.path, r];
  }
  GetTemplateMP4(e) {
    let t = v(e);
    return this.m_templateVars.mp4?.[t]?.path;
  }
  GetTemplateMP4WithFallback(e) {
    let t = v(e),
      n = this.m_templateVars.mp4?.[t]?.path;
    if (n) return [n, e];
    let r = g.GetELanguageFallback(e),
      i = v(r);
    return [this.m_templateVars.mp4?.[i]?.path, r];
  }
  GetLegalHTML() {
    return this.GetTemplateVars().use_custom_legal_text
      ? this.GetTemplateVars().custom_legal_text
      : Dt(this.GetTemplateVars().partner);
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
Pe([n], N.prototype, `m_templateVars`, void 0);
var Ot = `^(replay)([0-9]{4})`;
function kt(e) {
  return e.match(Ot)?.[2];
}
function At(e) {
  if (e) {
    let t = e.match(Ot);
    return !!t?.[2] && !isNaN(Number(t?.[2]));
  }
  return !1;
}
function jt(e, t, n) {
  let { bIncludeSeenMessages: r, ...i } = t,
    {
      data: a,
      isLoading: o,
      isError: s,
    } = p({
      queryKey: [`MarketingMessages`, `List`, i, { bIncludeSeenMessages: !!r }],
      queryFn: () => e.GetMessageList(i, r),
      ...n,
    }),
    c = j.useMemo(() => a?.map((e) => new N(e.message())), [a]),
    l = Xe(),
    u = j.useRef(new Set());
  return (
    l &&
      c?.forEach((e) => {
        let t = e.id;
        if (!t || u.current.has(t)) return;
        let n = e.GetAssociatedItemProto();
        n && (l(n, M.sm_DefaultDataRequest), u.current.add(t));
      }),
    { rgMessages: o ? null : c, isError: s }
  );
}
function Mt(e, t, n) {
  let { data: r, isError: i } = p({
      queryKey: [`MarketingMessages`, n ? `SinglePreivew` : `Single`, t],
      queryFn: () => e.GetSingleMessage(t, n),
      enabled: !!t,
    }),
    a = j.useMemo(() => {
      if (r) {
        let e = new N(r);
        if (n) {
          let t = E(`marketingmessage_preview_config`, `application_config`);
          (t?.dlc_appid_overrides?.length &&
            e.SetDLCAppIDOverride(t.dlc_appid_overrides),
            t?.recommended_appid_overrides?.length &&
              e.SetRecommendedAppIDsOverride(t.recommended_appid_overrides));
        }
        return e;
      }
    }, [r, n]),
    o = Xe(),
    s = j.useRef(new Set()),
    c = a?.id;
  if (o && a && c && !s.current.has(c)) {
    let e = a.GetAssociatedItemProto();
    e && (o(e, M.sm_DefaultDataRequest), s.current.add(c));
  }
  return { message: a, isError: i };
}
function Nt(e, t, n, r, i) {
  let a = x.Init(qe);
  (a.Body().set_gid(t),
    a.Body().set_display_index(n),
    a.Body().set_template_type(r),
    a.Body().set_click_location(i),
    S.MarkMessageClicked(e, a));
}
var P = j.createContext({ setLegalText: void 0 });
function Pt() {
  return !!j.useContext(P).setLegalText;
}
function Ft() {
  return j.useContext(P).setLegalText || function (e) {};
}
function It(e) {
  let [t, n] = j.useState(),
    r = st(`BrowserView.RegisterForMessageFromParent`),
    i = h(),
    a = j.useMemo(() => ({ setLegalText: r && !i ? n : void 0 }), [r, n, i]);
  return (0, A.jsxs)(P.Provider, {
    value: a,
    children: [r && (0, A.jsx)(Lt, { strLegalText: t }), e.children],
  });
}
function Lt(e) {
  let { strLegalText: t } = e,
    n = j.useRef(void 0);
  return (
    j.useEffect(() => {
      ((n.current = t),
        SteamClient.BrowserView.PostMessageToParent(
          `MarketingMessageLegal`,
          t || ``,
        ));
    }, [t]),
    j.useEffect(
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
function Rt() {
  let e = l();
  return j.useMemo(() => {
    let t = new URLSearchParams(e.search);
    return {
      bIncludeSeenMessages: !!t.get(`include_seen`),
      nClientPackageVersion: parseInt(t.get(`client_package_version`) || `0`),
      eOSType: parseInt(t.get(`os_type`) || `0`),
      bLowBandwidthMode: !!t.get(`low_bandwidth`),
    };
  }, [e.search]);
}
function zt(e) {
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
function Bt(e, t, n) {
  if (!n && e.BHasTemplateAnimatedAssets()) {
    let n = g.GetELanguageFallback(t);
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
function Vt(e) {
  let { path: t, message: n, eLanguage: r, ...i } = e,
    a = n.GetTemplateVars()?.last_asset_mtime,
    o = F(n.id, r, a, { type: `file`, path: t }),
    s = n.GetLocalizedAltText(r);
  return (0, A.jsx)(`img`, { alt: s, ...i, src: o });
}
function Ht(e) {
  let { message: t, mp4Path: n, webmPath: r, language: i, ...a } = e,
    o = t.GetTemplateVars()?.last_asset_mtime,
    s = F(t.id, i, o, { type: `file`, path: r }),
    c = F(t.id, i, o, { type: `file`, path: n }),
    l = (0, j.useRef)(null);
  wt(l);
  let u = (0, j.useRef)(!1),
    d = (0, j.useCallback)(() => {
      l.current &&
        (document.visibilityState === `visible`
          ? (u.current &&= (l.current.play(), !1))
          : l.current.paused || (l.current.pause(), (u.current = !0)));
    }, []);
  return (
    Me(document, `visibilitychange`, d),
    (0, j.useEffect)(() => d(), [d]),
    (0, A.jsxs)(`video`, {
      ...a,
      ref: l,
      children: [
        (0, A.jsx)(`source`, { src: s, type: `video/webm` }),
        (0, A.jsx)(`source`, { src: c, type: `video/mp4` }),
      ],
    })
  );
}
var Ut = `_0rg7QMNy7jY-`,
  Wt = `_9cacopcF0Dg-`,
  Gt = `GouFTCf51tc-`,
  Kt = `cwi8pT-5toI-`,
  qt = `nzSsIHRDj78-`,
  Jt = `Eo8SO7ZKWuE-`,
  Yt = `gxR5Tw6uJCI-`,
  Xt = `L-8gGuZ07gE-`,
  Zt = `_4UWrgYtZycQ-`,
  Qt = `JZpXsA-Xgmo-`,
  $t = `_0b6eHRCoMso-`,
  en = `fCMJE9GFrl4-`,
  tn = `hoF4iyYjP-8-`,
  nn = `xGRSgAVyH9M-`,
  rn = `py-AHaUAgpQ-`,
  an = `tO2rzm85yrk-`,
  on = `EpvEBC52J48-`,
  sn = `IiPKTi2q3ko-`,
  cn = `zwcqJ-kd93k-`,
  ln = `GpRe26KdcUA-`,
  un = `dZQZQPAi8KY-`,
  dn = `_9eyq0UFYciQ-`,
  fn = `ZWNrPcsxXHU-`,
  pn = `jNvS4xxa-PA-`,
  mn = `ViqT-upLYlU-`;
function I(e) {
  return (0, A.jsx)(`div`, {
    className: Gt,
    children: (0, A.jsx)(`div`, { className: Qt, children: e.children }),
  });
}
function L(e) {
  return (0, A.jsx)(`div`, { className: en, children: e.children });
}
function R(e) {
  let { isBackgroundBlur: t, bOverrideUseBackgroundImage: n } = e,
    r = X(),
    i = Q(r.GetTemplateVars().linkurl, 1),
    [a, o] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
  return (0, A.jsx)(_, {
    focusable: !0,
    noFocusRing: !0,
    className: y(tn, t && `_0b6eHRCoMso-`),
    onActivate: i,
    children: a && (0, A.jsx)(Vt, { message: r, path: a, eLanguage: o }),
  });
}
function hn(e) {
  let { fnOnClick: t } = e,
    n = X(),
    r = b(T.LANGUAGE),
    [i, a] = n.GetTemplateMP4WithFallback(r),
    [o, s] = n.GetTemplateWebMWithFallback(r);
  return (
    ut(
      a == s,
      `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${a} webm ${s}`,
    ),
    (0, A.jsx)(`div`, {
      className: nn,
      children: (0, A.jsx)(_, {
        focusable: !0,
        noFocusRing: !0,
        className: y(tn),
        onActivate: t,
        children: (0, A.jsx)(Ht, {
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
function z(e) {
  let { id: t } = e,
    { data: n } = Le(t),
    r = n ? je(n, `main_capsule`) : void 0;
  return r ? (0, A.jsx)(gn, { strImageURL: r }) : null;
}
function gn(e) {
  return (0, A.jsx)(`div`, {
    className: y(tn, rn, $t),
    children: (0, A.jsx)(`img`, { src: e.strImageURL }),
  });
}
function _n(e) {
  let { strType: t, strTitle: n, bSmallTitle: r } = e;
  return (0, A.jsxs)(A.Fragment, {
    children: [
      (0, A.jsx)(`div`, { className: an, children: t }),
      (0, A.jsx)(`div`, { className: y(on, r && `RhkqxwedI4w-`), children: n }),
    ],
  });
}
function vn(e) {
  let { id: t, bPreview: n, bPreferAssetWithoutOverride: r } = e,
    { data: i } = C(t),
    a = i?.appid,
    o = h(),
    { bIsOwned: s } = ce(t),
    c = lt(a),
    l = ie(a),
    u = Hr(a ?? 0),
    d = (0, j.useMemo)(
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
  let p = Q(f, 4, s);
  return (0, A.jsxs)(`div`, {
    className: sn,
    children: [
      (0, A.jsx)(Ze, {
        className: cn,
        onClick: p,
        children: (0, A.jsx)(pe, {
          id: t,
          bPreferLibrary: !0,
          bPreferAssetWithoutOverride: r,
        }),
      }),
      (0, A.jsxs)(`div`, {
        className: ln,
        children: [
          (0, A.jsx)(`div`, {
            className: un,
            children: (0, A.jsx)(Ze, {
              className: dn,
              onClick: p,
              children: i?.name,
            }),
          }),
          (0, A.jsxs)(`div`, {
            className: fn,
            children: [
              (0, A.jsx)(Ze, {
                onClick: p,
                className: y(pn, mn),
                children: O(
                  s
                    ? `#EventDisplay_ViewInLibrary`
                    : `#EventDisplay_ViewStorePage`,
                ),
              }),
              !s &&
                (0, A.jsx)(A.Fragment, {
                  children: (0, A.jsxs)(`div`, {
                    className: `RGk4BbX6ZEc-`,
                    children: [
                      c &&
                        (0, A.jsx)(`span`, {
                          children: O(`#EventDisplay_OnWishlist`),
                        }),
                      !c &&
                        l &&
                        (0, A.jsx)(`span`, {
                          children: O(`#EventDisplay_Follow`),
                        }),
                    ],
                  }),
                }),
              s &&
                (0, A.jsxs)(A.Fragment, {
                  children: [
                    !!d?.rtime_last_played &&
                      (0, A.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, A.jsx)(`span`, {
                            children: O(`#MarketingMessages_DLC_lastplayed`),
                          }),
                          bt(d.rtime_last_played),
                        ],
                      }),
                    !!d?.playtime_forever &&
                      (0, A.jsxs)(`div`, {
                        className: `RGk4BbX6ZEc-`,
                        children: [
                          (0, A.jsx)(`span`, {
                            children: O(`#MarketingMessages_DLC_hours`),
                          }),
                          Oe(d.playtime_forever),
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
function B(e) {
  let t = Q(X().GetTemplateVars().linkurl, 2);
  return (0, A.jsx)(V, { bHidePrice: e.bHidePrice, fnOnClickButton: t });
}
function V(e) {
  let { bHidePrice: t, fnOnClickButton: n } = e,
    r = X(),
    [i, a] = te(() => [
      r.GetTemplateVars().button_text_custom || r.GetTemplateVars().button_text,
      !!r.GetTemplateVars().hide_price,
    ]),
    o = !!(t || a);
  return (0, A.jsxs)(`div`, {
    className: y(Kt, !1),
    children: [
      (0, A.jsxs)(`div`, {
        className: qt,
        children: [
          (0, A.jsx)(_, {
            focusable: !0,
            noFocusRing: !0,
            className: Yt,
            onActivate: n,
            children: i,
          }),
          !o && (0, A.jsx)(Ke, { children: (0, A.jsx)(yn, {}) }),
        ],
      }),
      (0, A.jsx)(bn, {}),
    ],
  });
}
function yn() {
  let e = X().associated_item_key,
    { data: t } = Be(e);
  return !t || !t.formatted_final_price
    ? (0, A.jsx)(`div`, { className: Zt })
    : (0, A.jsx)(`div`, { className: Xt, children: (0, A.jsx)(ae, { id: e }) });
}
function bn(e) {
  let t = X();
  return Pt()
    ? null
    : (0, A.jsx)(`div`, {
        className: Jt,
        dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
      });
}
function H(e) {
  let { id: t, type: n, eClickLocation: r } = e,
    i = Kr(t, n, r);
  return (0, A.jsx)(me, {
    id: t,
    type: n,
    fnOnClickOverride: (e) => {
      (e.preventDefault(), i(e));
    },
    bIsMarketingMessage: !0,
    bPreferAssetWithoutOverride: !1,
  });
}
function U(e) {
  let { capsule: t, imageType: n, eClickLocation: r } = e,
    i = Kr(t.id, t.type, r);
  return (0, A.jsx)(`div`, {
    onClick: (e) => {
      (e.preventDefault(), i(e));
    },
    children: (0, A.jsx)(De, {
      capsule: t,
      imageType: n,
      bShowParentApp: !1,
      bHideStoreHover: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function xn(e) {
  let t = X(),
    n = t.GetTemplateVars().update_event_clan_accountid,
    r = t.GetTemplateVars().update_event_gid,
    { eventModel: i, bLoading: a, sErrorMessage: o } = ke(n, r, e);
  return { message: t, eventModel: i };
}
function Sn(e) {
  let { bPreview: t, bUseAnimated: n } = e,
    { message: r, eventModel: i } = xn(t),
    { data: a } = C(r.associated_item_key),
    o = m(a) ?? ``,
    s = wn(i, o, 1),
    c = wn(i, o, 2);
  return (0, A.jsx)(D, {
    submethod: `partner_event`,
    children: (0, A.jsxs)(I, {
      children: [
        (0, A.jsx)(z, { id: r.associated_item_key }),
        (0, A.jsxs)(L, {
          children: [
            (0, A.jsx)(vn, {
              id: r.associated_item_key,
              bPreview: t,
              bPreferAssetWithoutOverride: !1,
            }),
            (0, A.jsx)(Cn, {
              message: r,
              eventModel: i,
              fnOnClickButton: s,
              bUseAnimated: n,
            }),
          ],
        }),
        (0, A.jsx)(V, { bHidePrice: !0, fnOnClickButton: c }),
      ],
    }),
  });
}
function Cn(e) {
  let { message: t, fnOnClickButton: n, eventModel: r, bUseAnimated: i } = e,
    [a, o] = t.GetTemplateImage(),
    s = b(T.LANGUAGE);
  return (0, A.jsxs)(`div`, {
    className: Ut,
    children: [
      (0, A.jsx)(_n, {
        strType: O(`#MarketingMessages_MajorUpdate`),
        strTitle: r?.GetNameWithFallback(s),
      }),
      (0, A.jsxs)(_, {
        focusable: !0,
        noFocusRing: !0,
        className: y(Wt),
        onActivate: n,
        children: [
          a && !i && (0, A.jsx)(Vt, { message: t, path: a, eLanguage: o }),
          i && (0, A.jsx)(hn, { fnOnClick: n }),
        ],
      }),
    ],
  });
}
function wn(e, t, n) {
  let r = re(e?.appid),
    i = ct(Wr(t), `partner_event`);
  if (e?.BIsVisibleEvent() && r && e.BIsValidForRealm(T.EREALM)) {
    let n = $e();
    T.IN_CLIENT && (n > 1726604483 || n == 0)
      ? (t = `steam://open/library/event/${e.appid}|${e.GID}`)
      : ((t = `${T.STORE_BASE_URL}news/app/${e.appid}?emclan=${e.clanSteamID.ConvertTo64BitString()}&emgid=${e.GID}`),
        T.IN_CLIENT && (t = `steam://openurl/${t}`));
  } else
    ((t = i),
      e && (t += `${i.includes(`?`) ? `&` : `?`}emgid=${e.GID}`),
      T.IN_CLIENT && (t = `steam://openurl/${t}`));
  return Q(t, n, !0);
}
var Tn = e(ee());
function En(e) {
  let {
    isLoading: t,
    isError: n,
    data: r,
  } = p({
    queryKey: [`useDLCHubCount`, e],
    queryFn: async () => Dn(e),
    enabled: !!(e && e != 0),
  });
  return t || n ? null : r;
}
async function Dn(e) {
  let t = `${T.STORE_BASE_URL}dlc/${e}/ajaxgetdlccount`,
    n = { origin: self.origin },
    r = await Tn.default.get(t, { params: n, withCredentials: !1 });
  if (r.status !== 200 || r.data.success !== 1)
    throw Error(
      `FetchDLCCount failed: status == ${r.status}, eresult == ${r.data?.success}, err_msg == ${r.data?.err_msg}`,
    );
  return r.data.count;
}
var W = `pSQAIYlkuZ4-`,
  On = `qXHjnlbrVPU-`,
  G = `DqyWvF0Nllg-`,
  kn = `V8NuqidmB8M-`,
  An = `U6opAhfwgis-`;
function jn(e) {
  let { bPreview: t } = e,
    n = X(),
    r = (0, j.useMemo)(
      () => n.GetDLCAppIDs().map((e) => ({ id: e, type: `game` })),
      [n],
    ),
    i = En(n.associated_item_appid);
  return (
    (0, j.useEffect)(() => {
      if (n) {
        let e = i
          ? dt(`#MarketingMessages_See_Count_Items`, i)
          : O(`#MarketingMessages_See_All_Items`);
        (n.OverrideCustomText(e),
          n.OverrideURL(`${T.STORE_BASE_URL}dlc/${n.associated_item_appid}`));
      }
    }, [n, i]),
    (0, A.jsx)(D, {
      submethod: `dlc_override`,
      children: (0, A.jsxs)(I, {
        children: [
          (0, A.jsx)(z, { id: n.associated_item_key }),
          (0, A.jsxs)(L, {
            children: [
              (0, A.jsx)(vn, {
                id: n.associated_item_key,
                bPreview: t,
                bPreferAssetWithoutOverride: !1,
              }),
              (0, A.jsx)(Mn, {
                rgDLCSaleCapsules: r,
                messageType: n.GetType(),
              }),
            ],
          }),
          (0, A.jsx)(B, { bHidePrice: !0 }),
        ],
      }),
    })
  );
}
function K(e) {
  let { messageType: t, itemCount: n } = e,
    r = N.GetTypeAsLocalizedString(t);
  return (0, A.jsxs)(A.Fragment, {
    children: [
      !!r && (0, A.jsx)(`div`, { className: `w00lHTKEq4I-`, children: r }),
      n == 1
        ? (0, A.jsx)(q, { strDesc: O(`#MarketingMessages_DLC_desc_singular`) })
        : (0, A.jsx)(q, { strDesc: O(`#MarketingMessages_DLC_desc`) }),
    ],
  });
}
function Mn(e) {
  let { rgDLCSaleCapsules: t, messageType: n } = e;
  return t.length >= 4
    ? (0, A.jsx)(Nn, {
        rgSaleCapsules: t,
        eClickLocation: 3,
        children: (0, A.jsx)(K, { messageType: n }),
      })
    : t.length >= 3
      ? (0, A.jsxs)(`div`, {
          className: W,
          children: [
            (0, A.jsx)(K, { messageType: n }),
            (0, A.jsx)(`div`, {
              className: G,
              children: (0, A.jsx)(H, {
                id: t[0].id,
                type: t[0].type,
                eClickLocation: 3,
              }),
            }),
            (0, A.jsx)(J, { first: t[1], second: t[2], eClickLocation: 3 }),
          ],
        })
      : t.length >= 2
        ? (0, A.jsx)(Pn, {
            rgSaleCapsules: t,
            eClickLocation: 3,
            children: (0, A.jsx)(K, { messageType: n }),
          })
        : t.length >= 1
          ? (0, A.jsxs)(`div`, {
              className: W,
              children: [
                (0, A.jsx)(K, { messageType: n, itemCount: t.length }),
                (0, A.jsx)(`div`, {
                  className: kn,
                  children: (0, A.jsx)(U, {
                    capsule: t[0],
                    imageType: `main`,
                    eClickLocation: 3,
                  }),
                }),
              ],
            })
          : null;
}
function Nn(e) {
  let { rgSaleCapsules: t, eClickLocation: n, children: r } = e;
  return (0, A.jsxs)(`div`, {
    className: W,
    children: [
      r,
      (0, A.jsx)(J, { first: t[0], second: t[1], eClickLocation: n }),
      (0, A.jsx)(J, { first: t[2], second: t[3], eClickLocation: n }),
    ],
  });
}
function Pn(e) {
  let { rgSaleCapsules: t, eClickLocation: n, children: r } = e;
  return (0, A.jsxs)(`div`, {
    className: W,
    children: [
      r,
      (0, A.jsx)(`div`, {
        className: G,
        children: (0, A.jsx)(H, {
          id: t[0].id,
          type: t[0].type,
          eClickLocation: n,
        }),
      }),
      (0, A.jsx)(`div`, {
        className: G,
        children: (0, A.jsx)(H, {
          id: t[1].id,
          type: t[1].type,
          eClickLocation: n,
        }),
      }),
    ],
  });
}
function q(e) {
  return (0, A.jsx)(`div`, { className: On, children: e.strDesc });
}
function J(e) {
  let { first: t, second: n, eClickLocation: r } = e;
  return (0, A.jsxs)(`div`, {
    className: An,
    children: [
      (0, A.jsx)(`div`, {
        className: W,
        children: (0, A.jsx)(U, {
          capsule: t,
          imageType: `header`,
          eClickLocation: r,
        }),
      }),
      (0, A.jsx)(`div`, {
        className: W,
        children: (0, A.jsx)(U, {
          capsule: n,
          imageType: `header`,
          eClickLocation: r,
        }),
      }),
    ],
  });
}
var Fn = `_886zTtF9yKc-`,
  In = `LC0MVsbOf8E-`,
  Ln = `Eog1TAa9AWI-`;
function Rn(e) {
  let t = X(),
    [n, r] = (0, j.useState)(() => t.GetFeaturedVideoAutoPlay()),
    i = (0, j.useRef)(null);
  wt(i);
  let a = Q(t.GetTemplateVars().linkurl, 1),
    o = h();
  return (0, A.jsx)(_, {
    focusable: !0,
    noFocusRing: !0,
    onActivate: (e) => (!o && t.GetFeaturedVideoAutoPlay() ? a(e) : r(!0)),
    className: Fn,
    children: n
      ? (0, A.jsxs)(`video`, {
          controls: !t.GetFeaturedVideoLoop(),
          ref: i,
          muted: !0,
          autoPlay: !0,
          className: Ln,
          loop: t.GetFeaturedVideoLoop(),
          crossOrigin: `anonymous`,
          children: [
            (0, A.jsx)(`source`, {
              src: mt(t.GetFeaturedVideoWebMURL()),
              type: `video/webm`,
            }),
            !T.IN_CLIENT &&
              (0, A.jsx)(`source`, {
                src: mt(t.GetFeaturedVideoMP4URL()),
                type: `video/mp4`,
              }),
            (0, A.jsx)(Bn, { message: t }),
          ],
        })
      : (0, A.jsx)(zn, { message: t }),
  });
}
function zn(e) {
  let { message: t } = e,
    n = t.GetTemplateVars()?.last_asset_mtime,
    [r, i] = t.GetPosterImage(),
    a = F(t.id, i, n, { type: `file`, path: r });
  return (0, A.jsxs)(A.Fragment, {
    children: [
      (0, A.jsx)(`img`, { src: a, className: In }),
      (0, A.jsx)(Re, {}),
    ],
  });
}
function Bn(e) {
  let { message: t } = e,
    n = (0, j.useMemo)(() => {
      let e = t.GetSubtitleObj(),
        n = t.GetTemplateVars()?.last_asset_mtime,
        r = [];
      for (let i = 0; i < 32; ++i) {
        if (!g.IsELanguageValidInRealm(i, T.EREALM)) continue;
        let a = v(i);
        if (e && e[a]) {
          let o = e[a].path,
            s = F(t.id, i, n, { type: `file`, path: o });
          r.push(
            (0, A.jsx)(
              `track`,
              {
                src: s,
                kind: `subtitles`,
                srcLang: yt(i),
                default: T.LANGUAGE == a,
                label: O(`#language_selection_` + v(i)),
              },
              t.id + ` ` + i,
            ),
          );
        }
      }
      return r;
    }, [t]);
  return (0, A.jsx)(A.Fragment, { children: n });
}
function Vn(e) {
  let { bLowBandwidthMode: t } = e,
    n = X(),
    r = !t && n.GetTemplateVars().custom_display === `featured_video`;
  return (0, A.jsx)(D, {
    children: (0, A.jsxs)(I, {
      children: [
        (0, A.jsx)(R, { isBackgroundBlur: !0, bOverrideUseBackgroundImage: r }),
        (0, A.jsxs)(L, {
          children: [
            (0, A.jsx)(R, { bOverrideUseBackgroundImage: r }),
            !!r && (0, A.jsx)(Rn, {}),
          ],
        }),
        (0, A.jsx)(B, {}),
      ],
    }),
  });
}
function Hn(e) {
  let t = Q(X().GetTemplateVars().linkurl, 6);
  return (0, A.jsx)(D, {
    children: (0, A.jsxs)(I, {
      children: [
        (0, A.jsx)(R, { isBackgroundBlur: !0 }),
        (0, A.jsx)(L, { children: (0, A.jsx)(hn, { fnOnClick: t }) }),
        (0, A.jsx)(B, {}),
      ],
    }),
  });
}
var Un = e(_e());
function Wn(e) {
  let { id: t } = e,
    { data: n } = C(t),
    r = (0, j.useMemo)(() => {
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
    : (0, A.jsx)(`div`, {
        className: y(ne, `SaleTagBlockCtn`),
        children:
          r?.length > 0
            ? (0, A.jsx)(`div`, {
                className: y(fe, oe),
                children: r.map((e) =>
                  (0, A.jsx)(Kn, { categoryID: e }, `cat_` + e),
                ),
              })
            : (0, A.jsx)(`div`, { children: O(`#Broadcast_None`) }),
      });
}
var Gn = class e {
  m_rgCategories;
  constructor() {
    this.m_rgCategories = E(`feature_categories`, `application_config`);
  }
  static g_Self = null;
  static Get() {
    return ((e.g_Self ||= new e()), e.g_Self);
  }
};
function Kn(e) {
  let { categoryID: t } = e,
    n = Gn.Get().m_rgCategories.find((e) => e.categoryid == t);
  return n
    ? (0, A.jsx)(`div`, {
        className: ue,
        children: (0, A.jsx)(Ue, {
          toolTipContent: n.display_name,
          children: (0, A.jsx)(`div`, {
            className: de,
            style: {
              background: `url(${T.STORE_CDN_URL}${n.image_url}) no-repeat center center/cover`,
            },
          }),
        }),
      })
    : null;
}
function qn(e) {
  let {
      id: t,
      fnOnClickButton: n,
      bLowBandwidthMode: r,
      bUseAssetWithoutOverride: i,
    } = e,
    { data: a } = Ie(t),
    { data: o } = C(t),
    s = nt(t);
  return !a || !o
    ? (0, A.jsx)(`div`, {
        className: y(Te, xe),
        children: (0, A.jsx)(ge, { size: `medium` }),
      })
    : (0, A.jsx)(`div`, {
        className: y(Te, xe),
        children: (0, A.jsx)(Ee, {
          id: t,
          elFeaturedInCenter: (0, A.jsx)(Jn, {
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
function Jn(e) {
  let { id: t, fnOnClickButton: n, bUseAssetWithoutOverride: r } = e,
    [, i] = Fe(),
    { data: a } = Le(t, r),
    { data: o } = C(t),
    { data: s } = Ae(t),
    { data: c } = at(t);
  if (!a || !s || !o) return null;
  let l = je(a, `main_capsule`);
  return (0, A.jsxs)(_, {
    focusable: !0,
    noFocusRing: !0,
    className: Se,
    ...i,
    onActivate: n,
    children: [
      (0, A.jsx)(`img`, { className: be, src: l, alt: o.name || `` }),
      (0, A.jsxs)(`div`, {
        className: ye,
        children: [
          (0, A.jsx)(`div`, { className: y(Ce), children: o.name || `` }),
          (0, A.jsxs)(`div`, {
            className: we,
            children: [s.short_description, ` `],
          }),
          (0, A.jsx)(le, {
            rgTagIDs: c ? c.slice(0, 10).map((e) => e.tagid || 0) : [],
            instanceNum: 0,
            bLargeText: !0,
            bHideTitle: !0,
            bNoStoreLinks: !0,
          }),
          (0, A.jsx)(Wn, { id: t }),
        ],
      }),
    ],
  });
}
var Yn = `UDBCx7hHil8-`,
  Xn = `IKG0vEoSOA8-`,
  Zn = `n4IOVFejo90-`,
  Y = `Iw1CZshx4SI-`;
function Qn(e) {
  let { bPreview: t, bLowBandwidthMode: n } = e,
    r = X(),
    i = Q(r.GetTemplateVars().linkurl, 5),
    a = r.associated_item_key;
  return (0, A.jsx)(D, {
    submethod: `mm-auto-render`,
    children: (0, A.jsxs)(I, {
      children: [
        (0, A.jsx)(z, { id: a }),
        (0, A.jsx)(L, {
          children: (0, A.jsxs)(`div`, {
            className: Yn,
            children: [
              (0, A.jsxs)(`div`, {
                className: Xn,
                children: [
                  (0, A.jsx)(`div`, {
                    className: Zn,
                    children: N.GetTypeAsLocalizedString(r.GetType()),
                  }),
                  (0, A.jsx)($n, { message: r, id: a }),
                ],
              }),
              (0, A.jsx)(se, {
                appid: r.associated_item_appid,
                children: (0, A.jsx)(qn, {
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
        (0, A.jsx)(V, {
          bHidePrice: r.GetTemplateVars().hide_price,
          fnOnClickButton: i,
        }),
      ],
    }),
  });
}
function $n(e) {
  let { message: t, id: n } = e,
    { data: r } = C(n),
    i = r?.free_weekend,
    [a] = he(`timezone`),
    [o] = he(`locale`);
  if (t.GetType() == 14) {
    if (i?.text) return (0, A.jsx)(`div`, { className: Y, children: i.text });
    if (i?.end_time) {
      o && it.SetPreferredLocales([o]);
      let e = a || Intl.DateTimeFormat().resolvedOptions().timeZone,
        t = i.end_time,
        n = Un.unix(t).tz(e),
        r = n.format(`z`),
        s = r.match(/^-?\d/)
          ? `UTC${Un.unix(t).tz(e).format(`Z`).replace(`:00`, ``)}`
          : r,
        c = gt(n.unix(), !1, s, a);
      return (0, A.jsx)(`div`, {
        className: Y,
        children: O(`#msg_free_play_until`, c),
      });
    }
    return (0, A.jsx)(`div`, {
      className: Y,
      children: O(`#msg_free_play_weekend`),
    });
  }
  let s = t.GetTemplateVars()?.autorender_subtitle_token;
  return s ? (0, A.jsx)(`div`, { className: Y, children: O(s) }) : null;
}
var er = `OdjDhjB2yrA-`,
  tr = `YOmAhzZv9RQ-`,
  nr = `Ey3a8q2PxVE-`,
  rr = `xHACuI0ICmw-`,
  ir = { weekday: void 0, year: void 0, month: `short`, day: `numeric` },
  ar = [20, 50, 100, 200, 500, 1e3, 2e3, 5e3];
function or() {
  let e = X(),
    { sale_clan_account: t, sale_clan_event_gid: n } = e.GetTemplateVars(),
    { eventModel: r, bLoading: i } = ke(t ? Number(t) : void 0, n),
    a = ve(r, `capsule`, b(T.LANGUAGE)),
    o = e.GetRecommendedAppIDs().length >= 4,
    s = (0, j.useMemo)(
      () =>
        e
          .GetRecommendedAppIDs()
          .slice(0, o ? 4 : 2)
          .map((e) => ({ id: e, type: `game` })),
      [e, o],
    );
  return (
    (0, j.useEffect)(() => {
      let t = sr(e.GetSaleItemCount());
      t &&
        e.OverrideCustomText(O(`#MarketingMessages_See_AtLeast_Items`, ot(t)));
    }, [e]),
    (0, A.jsx)(D, {
      submethod: `sale_items`,
      children: (0, A.jsxs)(I, {
        children: [
          a
            ? (0, A.jsx)(gn, { strImageURL: a })
            : (0, A.jsx)(R, { isBackgroundBlur: !0 }),
          (0, A.jsxs)(L, {
            children: [
              (0, A.jsx)(cr, { eventModel: r, strCapsuleURL: a, bLoading: i }),
              (0, A.jsx)(`div`, {
                className: rr,
                children: o
                  ? (0, A.jsx)(Nn, {
                      rgSaleCapsules: s,
                      eClickLocation: 5,
                      children: (0, A.jsx)(q, {
                        strDesc: O(`#MarketingMessages_SaleItems_Label`),
                      }),
                    })
                  : (0, A.jsx)(Pn, {
                      rgSaleCapsules: s,
                      eClickLocation: 5,
                      children: (0, A.jsx)(q, {
                        strDesc: O(`#MarketingMessages_SaleItems_Label`),
                      }),
                    }),
              }),
            ],
          }),
          (0, A.jsx)(B, { bHidePrice: !0 }),
        ],
      }),
    })
  );
}
function sr(e) {
  return ar.filter((t) => t <= (e ?? 0)).pop();
}
function cr(e) {
  let { eventModel: t, strCapsuleURL: n, bLoading: r } = e,
    { linkurl: i } = X().GetTemplateVars(),
    a = Q(i, 1);
  if (r) return (0, A.jsx)(`div`, { className: er });
  if (!t || !n) return (0, A.jsx)(R, {});
  let o = t.GetNameWithFallback(b(T.LANGUAGE)),
    s = t.endTime,
    c = !!s && s > et();
  return (0, A.jsxs)(_, {
    focusable: !0,
    noFocusRing: !0,
    className: er,
    onActivate: a,
    children: [
      (0, A.jsx)(`img`, { className: tr, src: n, alt: o }),
      (0, A.jsxs)(`div`, {
        className: nr,
        children: [
          (0, A.jsx)(_n, {
            strType: O(`#MarketingMessages_SaleEvent`),
            strTitle: o,
            bSmallTitle: !0,
          }),
          c &&
            (0, A.jsx)(`div`, {
              className: `HY39mN5xR8M-`,
              children: O(`#MarketingMessages_SaleEvent_Through`, Ye(s, ir)),
            }),
        ],
      }),
    ],
  });
}
var lr = j.createContext(null);
function X() {
  return j.useContext(lr);
}
function ur(e) {
  let { message: t, preview: n } = e,
    r = e.active !== !1,
    i = Ft();
  return (
    j.useEffect(() => {
      r && i(t.GetLegalHTML());
    }, [r, t, i]),
    (0, A.jsx)(lr.Provider, {
      value: t,
      children: (0, A.jsx)(j.Suspense, {
        fallback: null,
        children: (0, A.jsx)(fr, { message: t, active: r, preview: n }),
      }),
    })
  );
}
var dr = j.lazy(() =>
  Ne(
    () => import(`./chunk~035fbeff8f.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    import.meta.url,
  ),
);
function fr(e) {
  let { message: t, active: n, preview: r } = e,
    i = b(T.LANGUAGE),
    { bLowBandwidthMode: a } = Rt();
  if (At(t.GetTemplateVars().custom_display || ``) && k.logged_in) {
    let e = Number(kt(t.GetTemplateVars().custom_display || ``));
    return isNaN(e) ? null : (0, A.jsx)(dr, { active: n, year: e });
  }
  switch (t.GetTemplateVars().custom_display) {
    case `dlc_override`:
      return (0, A.jsx)(jn, { bPreview: r });
    case `partner_event`:
      return (0, A.jsx)(Sn, { bPreview: r, bUseAnimated: Bt(t, i, a) });
    case `mm_auto_render`:
      return (0, A.jsx)(Qn, { bPreview: r, bLowBandwidthMode: a });
  }
  if (t.BShouldShowSaleItems()) return (0, A.jsx)(or, {});
  switch (t.GetTemplateType()) {
    case `image`:
      return Bt(t, i, a)
        ? (0, A.jsx)(Hn, {})
        : (0, A.jsx)(Vn, { bLowBandwidthMode: a });
    default:
      return null;
  }
}
var pr = `Gm5nLJRXJaY-`,
  mr = `-ImanFHLAwA-`,
  hr = `ZhQhX7pr9lA-`,
  gr = `_4fnvcJcUDX8-`,
  _r = `y0FnhcY7vxo-`,
  vr = `_5sB1JM0Iyds-`,
  yr = `_1xe7rr61Sxs-`,
  br = `YW5IYp6Si78-`,
  xr = `XcuLFgHa428-`,
  Sr = `S4heXFJ-jNg-`,
  Cr = `OUppgysE0Mk-`,
  wr = `GTpU6gej7zQ-`,
  Tr = `yTfJh4717Do-`,
  Er = `e2IKf6YeMZ8-`,
  Dr = `hwfeh9nw5U8-`,
  Or = `-dG-criVXmY-`,
  kr = `PkEcCtT0EDE-`,
  Ar = `sAb-WXDAZ0o-`,
  jr = `gr2LCUjvkns-`,
  Mr = 8,
  Nr = j.createContext(null);
function Pr() {
  return j.useContext(Nr);
}
function Fr(e) {
  let { MarketingMessagesStore: t } = e,
    n = Rt(),
    { rgMessages: i, isError: a } = jt(t, n),
    [o, s] = j.useState(!1),
    [c, l] = j.useState(0);
  Tt(pr);
  let u = r();
  if (
    (j.useEffect(() => {
      i &&
        !i.length &&
        !a &&
        (n.bIncludeSeenMessages
          ? s(!0)
          : u.replace({
              ...u.location,
              search: zt({ ...n, bIncludeSeenMessages: !0 }),
            }));
    }, [i, n, u, a]),
    a)
  )
    return (0, A.jsx)(Z, {
      children: O(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (o)
    return (0, A.jsx)(Z, { children: O(`#MarketingMessages_NoneAvailable`) });
  let d = n.bIncludeSeenMessages ? i : i?.slice(0, Mr);
  return (0, A.jsxs)(`div`, {
    className: mr,
    children: [
      (0, A.jsx)(`div`, {
        className: hr,
        children: (0, A.jsx)(Ir, {
          MarketingMessagesStore: t,
          rgMessages: d,
          iActiveMessage: c,
        }),
      }),
      (0, A.jsx)(Lr, { cMessages: d?.length, iMessage: c, setMessage: l }),
    ],
  });
}
function Ir(e) {
  let { MarketingMessagesStore: t, rgMessages: n, iActiveMessage: r } = e;
  return n
    ? (0, A.jsx)(`div`, {
        className: Cr,
        children: n?.map((e, n) =>
          (0, A.jsx)(
            Vr,
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
    : (0, A.jsx)(`div`, {
        className: y(Cr, wr),
        children: (0, A.jsx)(ge, { size: `xxlarge`, msDelayAppear: 500 }),
      });
}
function Lr(e) {
  let { cMessages: t, iMessage: n, setMessage: r } = e,
    i = j.useCallback(() => r(n - 1), [r, n]),
    a = j.useCallback(() => r(n + 1), [r, n]),
    o = [];
  for (let e = 0; e < t; e++)
    o.push((0, A.jsx)(Rr, { active: e == n, iMessage: e, setMessage: r }, e));
  let s = n > 0 ? i : void 0,
    c = n < t - 1 ? a : void 0;
  return (0, A.jsxs)(A.Fragment, {
    children: [
      (0, A.jsx)(`div`, { className: void 0 }),
      (0, A.jsx)(`div`, {
        className: gr,
        children: (0, A.jsxs)(`div`, {
          className: _r,
          children: [
            (0, A.jsx)(`div`, {
              className: y(vr, s && `gHoA3r84Hvo-`),
              onClick: s,
              children: (0, A.jsx)(ft, { angle: 180 }),
            }),
            (0, A.jsx)(`div`, { className: yr }),
            (0, A.jsx)(`div`, {
              className: br,
              children: (0, A.jsx)(`div`, { className: xr, children: o }),
            }),
            (0, A.jsx)(`div`, { className: yr }),
            (0, A.jsx)(`div`, {
              className: y(vr, c && `gHoA3r84Hvo-`),
              onClick: c,
              children: (0, A.jsx)(ft, { angle: 0 }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Rr(e) {
  let { active: t, iMessage: n, setMessage: r } = e,
    i = j.useCallback(() => r(n), [r, n]);
  return (0, A.jsx)(`div`, {
    className: y(Sr, t && `gHoA3r84Hvo-`),
    onClick: i,
  });
}
function zr(e) {
  let { MarketingMessagesStore: t, preview: n } = e,
    r = c(),
    { message: i, isError: a } = Mt(t, r.params.messageid, n);
  return (
    Tt(pr),
    a
      ? (0, A.jsx)(Z, { children: O(`#Error_ErrorCommunicatingWithNetwork`) })
      : r.params.messageid
        ? i
          ? (0, A.jsx)(ur, { message: i, preview: n })
          : null
        : (0, A.jsx)(Z, { children: O(`#MarketingMessages_NoneAvailable`) })
  );
}
function Z(e) {
  return (0, A.jsxs)(rt, {
    style: { maxWidth: `400px`, margin: `0 auto` },
    children: [
      (0, A.jsxs)(Ge, { children: [O(`#Error_Generic`), ` `] }),
      (0, A.jsx)(tt, { children: e.children }),
    ],
  });
}
function Br(e, t, n) {
  j.useEffect(() => {
    t && e.MarkMessageSeen(t.id, n + 1, t.GetTemplateTypeForReporting());
  }, [t, e, n]);
}
function Vr(e) {
  let {
      message: t,
      MarketingMessagesStore: n,
      active: r,
      next: i,
      displayIndex: a,
    } = e,
    o = j.useRef(void 0),
    s = j.useRef(r || i);
  if ((Br(n, r ? t : null, a), (r || i) && (s.current = !0), !s.current))
    return null;
  let c = {
    enter: Er,
    enterActive: Dr,
    enterDone: Or,
    exit: kr,
    exitActive: Ar,
    exitDone: jr,
  };
  return (0, A.jsx)(d, {
    in: r,
    nodeRef: o,
    classNames: c,
    timeout: 300,
    mountOnEnter: !i,
    unmountOnExit: !i,
    children: (0, A.jsx)(Nr.Provider, {
      value: a,
      children: (0, A.jsx)(`div`, {
        className: y(Tr, r && `gHoA3r84Hvo-`),
        ref: o,
        children: (0, A.jsx)(ur, { message: t, active: r }),
      }),
    }),
  });
}
function Hr(e) {
  let t = vt(),
    n = p({
      queryKey: [`useGamePlaytimeInfo`, e],
      queryFn: async () => Ur(e, t),
      enabled: !!(e && e != 0),
    });
  return n.isSuccess ? n.data : null;
}
async function Ur(e, t) {
  let n = x.Init(We);
  (n.Body().set_steamid(k.steamid),
    n.Body().set_appids_filter([e]),
    n.Body().set_include_played_free_games(!0),
    n.Body().set_language(T.LANGUAGE));
  let r = await ht.GetOwnedGames(t, n);
  return r.Body().games().length > 0 ? r.Body().games()[0].toObject() : {};
}
function Wr(e) {
  return He() && e?.startsWith(`https://store.steampowered.com/`)
    ? e.replace(`https://store.steampowered.com/`, T.STORE_BASE_URL)
    : e;
}
function Gr(e) {
  let t = vt(),
    n = X(),
    r = Pr();
  return (
    (r = r === null ? 0 : r + 1),
    (0, j.useCallback)(() => {
      Nt(t, n.id, r, n.GetTemplateTypeForReporting(), e);
    }, [t, n, r, e])
  );
}
function Q(e, t, n = !1) {
  let r = Gr(t),
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
  let a = ct(Wr(e), i);
  return (
    n && (a = e),
    a.startsWith(`steam://`) || (a = `steam://openurl/${a}`),
    (0, j.useCallback)(
      (e) => {
        r();
        let t = Ve(e);
        t.location.href = a;
      },
      [a, r],
    )
  );
}
function Kr(e, t, n) {
  let r = pt({ item_type: Qe(t), id: e }),
    { data: i } = C(r);
  return Q(m(i) ?? T.STORE_BASE_URL, n);
}
var qr = j.createContext({ prioritized_list: !1 });
function Jr(e) {
  let [t, n] = j.useState(),
    r = l(),
    i = j.useMemo(() => (new URLSearchParams(r.search), {}), [r.search]);
  return (
    j.useEffect(() => {
      (E(`marketingmessage_config`, `application_config`), n({}));
    }, [i]),
    t
      ? (0, A.jsxs)(qr.Provider, { value: t, children: [e.children, ` `] })
      : null
  );
}
var Yr = t({ MarketingMessageRoutes: () => $, default: () => Xr }),
  $ = {
    List: () => `${w.MarketingMessages()}list/`,
    Message: (e) => `${w.MarketingMessages()}${e}`,
    MessagePreview: (e) => `${w.MarketingMessages()}preview/${e}`,
  };
function Xr(e) {
  let t = $r();
  return t
    ? (0, A.jsx)(D, {
        domain: `store.steampowered.com`,
        controller: `message`,
        method: `default`,
        children: (0, A.jsx)(Jr, {
          children: (0, A.jsx)(It, {
            children: (0, A.jsxs)(a, {
              children: [
                (0, A.jsx)(i, {
                  path: `${$.List()}`,
                  children: (0, A.jsx)(Fr, { MarketingMessagesStore: t }),
                }),
                (0, A.jsx)(i, {
                  path: `${$.MessagePreview(`:messageid`)}`,
                  children: (0, A.jsx)(zr, {
                    MarketingMessagesStore: t,
                    preview: !0,
                  }),
                }),
                (0, A.jsx)(i, {
                  path: `${$.Message(`:messageid`)}`,
                  children: (0, A.jsx)(zr, { MarketingMessagesStore: t }),
                }),
                (0, A.jsx)(i, {
                  children: (0, A.jsx)(s, { to: `${$.List()}` }),
                }),
              ],
            }),
          }),
        }),
      })
    : null;
}
var Zr;
function Qr(e) {
  return ((Zr ||= new M(e)), Zr);
}
function $r() {
  let [e, t] = j.useState(null),
    n = Je();
  return (
    j.useEffect(() => {
      e || t(Qr(n));
    }, [e, n]),
    e
  );
}
export { $ as MarketingMessageRoutes, Xr as default, Q as n, X as r, Yr as t };

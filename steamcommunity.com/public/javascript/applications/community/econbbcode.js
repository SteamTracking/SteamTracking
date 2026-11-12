/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Ft as t,
  K as n,
  W as r,
  at as i,
  ot as a,
} from "./chunk~01cfc309bf.js";
import { r as o } from "./chunk~cc40f6af5e.js";
import { t as s } from "./chunk~e53a8c8667.js";
import { t as c } from "./chunk~cfd048ddd7.js";
import { b as l, n as ee, t as u, x as te } from "./chunk~e8ef2e6942.js";
import { t as ne } from "./chunk~bdc7e21194.js";
import { t as re } from "./chunk~2e61cac879.js";
import { n as ie, t as ae } from "./chunk~8d2b90a325.js";
import { r as oe, t as se } from "./chunk~d6c6ad29fc.js";
import { a as ce, i as le, o as ue, t as de } from "./chunk~50a4210268.js";
import {
  Bt as d,
  Ct as fe,
  Em as pe,
  Kt as f,
  Lt as p,
  Nt as m,
  Td as me,
  Tp as he,
  Yt as ge,
  Zf as h,
  Zp as g,
  im as _,
  kp as _e,
  ld as ve,
  nh as ye,
  qt as v,
  sm as y,
  wt as b,
  xf as be,
  zt as x,
} from "./main.js";
import { i as S, t as xe } from "./chunk~23d4719eb3.js";
function Se(e, t) {
  return e?.public_data?.profile_url
    ? `${_.COMMUNITY_BASE_URL}id/${e.public_data.profile_url}`
    : Ce(e?.public_data?.steamid || t);
}
function Ce(e) {
  return e ? `${_.COMMUNITY_BASE_URL}profiles/${e}` : ``;
}
function C(e) {
  let { icon_url: t, icon_url_large: n } = e;
  return we(n || t);
}
function we(e) {
  return `${_.COMMUNITY_CDN_URL}economy/image/${e}`;
}
var w = e(t(), 1),
  T = a();
function Te(e) {
  let { appid: t, accessory: n } = e,
    { data: r } = X(t, { classid: n.classid, instanceid: n.instanceid || `0` }),
    i = n.description || r;
  if (!i) return null;
  let a = n.parent_relationship_properties || [],
    o = n.standalone_properties || [];
  return (0, T.jsx)(Z, {
    description: i,
    children: (0, T.jsx)(`a`, {
      className: ge(),
      href: u.Item(t, i.market_bucket_group_id || i.market_hash_name),
      children: (0, T.jsxs)(f, {
        align: `center`,
        gap: { initial: `1`, sm: `3` },
        padding: `2`,
        background: `dull-7`,
        minWidth: `0`,
        cursor: `pointer`,
        "border-radius": `2`,
        children: [
          (0, T.jsx)(l, {
            maxWidth: `48px`,
            maxHeight: `48px`,
            objectFit: `contain`,
            src: C(i),
            alt: ``,
          }),
          (0, T.jsxs)(v, {
            minWidth: `0`,
            children: [
              (0, T.jsx)(p, { lineClamp: 3, children: i.name }),
              a.map((e) =>
                (0, T.jsx)(E, { appid: t, property: e }, e.propertyid),
              ),
              o.map((e) =>
                (0, T.jsx)(E, { appid: t, property: e }, e.propertyid),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function E(e) {
  return (0, T.jsx)(M, {
    ...e,
    size: { initial: `1`, sm: `2` },
    contrast: `note`,
  });
}
function D(e, t = _.LANGUAGE) {
  let r = g(),
    a = i();
  return n({ ...O(a, r, e, t), enabled: !!e });
}
function O(e, t, n, r) {
  return {
    queryKey: [`AssetPropertySchemaMap`, n, r],
    queryFn: async () => {
      let i = await e.fetchQuery(Ee(t, n, r)),
        a = new Map();
      return (i.property_schemas.forEach((e) => a.set(e.id, e)), a);
    },
  };
}
function Ee(e, t, n) {
  return {
    queryKey: [`AssetPropertySchema`, t, n],
    queryFn: async () => {
      let r = await S.GetAssetPropertySchema(e, { appid: t, language: n });
      if (!r.BSuccess() && r.GetEResult() != 42)
        throw `Error loading asset properties for ${t}: ${r.GetErrorMessage()}`;
      return { property_schemas: r.Body().toObject().property_schemas ?? [] };
    },
  };
}
var k = {};
((k.arabic = () =>
  h(() => import(`./chunk~7613b453bc.js`), [], import.meta.url)),
  (k.brazilian = () =>
    h(() => import(`./chunk~37c8906f1f.js`), [], import.meta.url)),
  (k.bulgarian = () =>
    h(() => import(`./chunk~ecdcd246b5.js`), [], import.meta.url)),
  (k.czech = () =>
    h(() => import(`./chunk~0256c3f60a.js`), [], import.meta.url)),
  (k.danish = () =>
    h(() => import(`./chunk~4450764e1e.js`), [], import.meta.url)),
  (k.dutch = () =>
    h(() => import(`./chunk~1ae2258501.js`), [], import.meta.url)),
  (k.english = () =>
    h(() => import(`./chunk~f3f9cbe888.js`), [], import.meta.url)),
  (k.finnish = () =>
    h(() => import(`./chunk~6afbb0ea00.js`), [], import.meta.url)),
  (k.french = () =>
    h(() => import(`./chunk~9ea2d5a2ed.js`), [], import.meta.url)),
  (k.german = () =>
    h(() => import(`./chunk~e91ca08c39.js`), [], import.meta.url)),
  (k.greek = () =>
    h(() => import(`./chunk~afe55566d0.js`), [], import.meta.url)),
  (k.hungarian = () =>
    h(() => import(`./chunk~7482717cb5.js`), [], import.meta.url)),
  (k.indonesian = () =>
    h(() => import(`./chunk~86bd892986.js`), [], import.meta.url)),
  (k.italian = () =>
    h(() => import(`./chunk~f89bd07123.js`), [], import.meta.url)),
  (k.japanese = () =>
    h(() => import(`./chunk~e64835c7b5.js`), [], import.meta.url)),
  (k.koreana = () =>
    h(() => import(`./chunk~b08cd6031b.js`), [], import.meta.url)),
  (k.latam = () =>
    h(() => import(`./chunk~761d3d158c.js`), [], import.meta.url)),
  (k.malay = () =>
    h(() => import(`./chunk~091e7d40c1.js`), [], import.meta.url)),
  (k.norwegian = () =>
    h(() => import(`./chunk~4b4803b799.js`), [], import.meta.url)),
  (k.polish = () =>
    h(() => import(`./chunk~45e3403b81.js`), [], import.meta.url)),
  (k.portuguese = () =>
    h(() => import(`./chunk~117c48f703.js`), [], import.meta.url)),
  (k.romanian = () =>
    h(() => import(`./chunk~5a39ccae78.js`), [], import.meta.url)),
  (k.russian = () =>
    h(() => import(`./chunk~e1021bc419.js`), [], import.meta.url)),
  (k.sc_schinese = () =>
    h(() => import(`./chunk~cdf7bda2ff.js`), [], import.meta.url)),
  (k.schinese = () =>
    h(() => import(`./chunk~cb510e1464.js`), [], import.meta.url)),
  (k.spanish = () =>
    h(() => import(`./chunk~b3f4cde693.js`), [], import.meta.url)),
  (k.swedish = () =>
    h(() => import(`./chunk~1adcc33513.js`), [], import.meta.url)),
  (k.tchinese = () =>
    h(() => import(`./chunk~6e9690022c.js`), [], import.meta.url)),
  (k.thai = () =>
    h(() => import(`./chunk~ab8f74c71d.js`), [], import.meta.url)),
  (k.turkish = () =>
    h(() => import(`./chunk~2b2974444a.js`), [], import.meta.url)),
  (k.ukrainian = () =>
    h(() => import(`./chunk~8646b70518.js`), [], import.meta.url)),
  (k.vietnamese = () =>
    h(() => import(`./chunk~b6a98c9270.js`), [], import.meta.url)));
async function De(e) {
  if (k[e]) return await k[e]();
}
var A = be(De),
  j = A.Localize,
  Oe = { Label: Ae, Value: N };
function ke(e) {
  let { appid: t, property: n, ...r } = e,
    { data: i } = D(t),
    a = i?.get(n.propertyid);
  return !a || a.hide_from_description
    ? null
    : (0, T.jsx)(p, {
        as: `div`,
        ...r,
        children: A.LocalizeReact(
          `#ItemDescription_AssetPropertyLabelColonValue`,
          a.localized_label,
          (0, T.jsx)(p, {
            whiteSpace: `pre-wrap`,
            children: (0, T.jsx)(N, { property: n }),
          }),
        ),
      });
}
var M = Object.assign(ke, Oe);
function Ae(e) {
  let { appid: t, property: n } = e,
    { data: r } = D(t),
    i = r?.get(n.propertyid);
  return i ? i.localized_label : null;
}
function N(e) {
  let { property: t } = e;
  if (t.float_value !== void 0) {
    let e =
        typeof t.float_value == `string`
          ? parseFloat(t.float_value)
          : t.float_value,
      n = 9;
    return (
      e > 0 &&
        (e < 1e-28
          ? (n = 47)
          : e < 1e-18
            ? (n = 35)
            : e < 1e-12
              ? (n = 21)
              : e < 1e-5 && (n = 15)),
      e.toLocaleString(b(), { maximumFractionDigits: n })
    );
  }
  return t.int_value === void 0
    ? t.string_value === void 0
      ? null
      : t.string_value
    : Number(t.int_value).toLocaleString(b());
}
var P = w.createContext(void 0);
function je(e) {
  let {
      description: t,
      asset: n,
      bInteractable: r = !0,
      listingID: i,
      children: a,
    } = e,
    o = w.useMemo(
      () => ({ description: t, asset: n, bInteractable: r, listingID: i }),
      [t, n, r, i],
    );
  return (0, T.jsx)(P.Provider, { value: o, children: a });
}
function F() {
  return w.useContext(P).description;
}
function I() {
  return w.useContext(P).asset;
}
function L() {
  return w.useContext(P).bInteractable;
}
function Me() {
  return w.useContext(P).listingID;
}
function Ne(e) {
  let { action: t } = e,
    n = I();
  if (!n) return null;
  let r = t.link.match(
      /GetGooValue\(\s*'?[^']*'?\s*,\s*'?[^']*'?\s*,\s*'?(?<appid>[0-9]+)'?\s*,\s*'?(?<item_type>[0-9]+)'?\s*,\s*'?(?<border_color>[0-9]+)'?/,
    )?.groups,
    { contextid: i, assetid: a } = n;
  if (!r || !a || n?.appid != 753 || i != `6` || !r.appid || !r.item_type)
    return null;
  let { appid: o, item_type: s, border_color: c } = r;
  return (0, T.jsx)(Pe, {
    contextid: i,
    assetid: a,
    appid: parseInt(o),
    item_type: parseInt(s),
    border_color: parseInt(c),
  });
}
function Pe(e) {
  let { contextid: t, assetid: n, appid: r, item_type: i, border_color: a } = e,
    { data: o, isLoading: s } = Fe(r, i, a);
  return o === void 0 && !s
    ? null
    : (0, T.jsxs)(f, {
        background: `sky-3`,
        padding: `2`,
        gapY: `2`,
        direction: `column`,
        align: `start`,
        marginTop: `2`,
        children: [
          (0, T.jsx)(p, {
            as: `div`,
            contrast: `body`,
            children: A.LocalizeReact(
              `#ItemDescription_ThisItemIsWorthGems`,
              (0, T.jsx)(p, {
                color: `sky-11`,
                children: A.Localize(
                  `#ItemDescription_XGems`,
                  o?.toLocaleString(b()) ?? ``,
                ),
              }),
            ),
          }),
          (0, T.jsx)(x, {
            color: `green`,
            onClick: () => window.GrindIntoGoo(r, t, n),
            size: `1`,
            children: j(`#ItemDescription_TurnIntoGemsButton`),
          }),
          (0, T.jsx)(p, {
            as: `div`,
            contrast: `body`,
            children: ve(
              j(`#ItemDescription_GemDescription`),
              (0, T.jsx)(c, {
                underline: `auto`,
                color: `greyneutral-12`,
                href: `${_.COMMUNITY_BASE_URL}tradingcards/boostercreator/`,
              }),
            ),
          }),
        ],
      });
}
function Fe(e, t, r) {
  return n({
    queryKey: [`GetGooValue`, e, t, r],
    queryFn: async () => {
      let n = new URLSearchParams({
          appid: e.toString(),
          item_type: t.toString(),
          border_color: r.toString(),
        }),
        i = `${_.COMMUNITY_BASE_URL}auction/ajaxgetgoovalueforitemtype/?${n.toString()}`,
        a = await (await fetch(i, { method: `GET` })).json();
      if (`goo_value` in a) return a.goo_value;
      throw `Error querying goo value`;
    },
    retry: !1,
  });
}
var R = w.createContext({ steamidOwner: void 0 });
function z() {
  return w.useContext(R).steamidOwner;
}
function Ie(e) {
  let { steamidOwner: t, children: n } = e,
    r = w.useMemo(() => ({ steamidOwner: t }), [t]);
  return (0, T.jsx)(R.Provider, { value: r, children: n });
}
function Le() {
  let e = F(),
    t = L(),
    { actions: n } = e;
  return t ? n && (0, T.jsx)(B, { actions: n }) : null;
}
function Re() {
  let e = F(),
    t = L(),
    { owner_actions: n } = e;
  return t ? n && (0, T.jsx)(B, { actions: n }) : null;
}
function ze() {
  let e = F(),
    t = L(),
    { market_actions: n } = e;
  return t ? n && (0, T.jsx)(B, { actions: n }) : null;
}
function B(e) {
  let { actions: t } = e,
    [n, r] = w.useMemo(() => {
      let e = [],
        n = [];
      return (
        t.forEach((t, r) => {
          t.link?.startsWith(`javascript:GetGooValue`)
            ? n.push((0, T.jsx)(Ne, { action: t }, r))
            : e.push((0, T.jsx)(Be, { action: t }, r));
        }),
        [e, n]
      );
    }, [t]);
  return (0, T.jsxs)(T.Fragment, {
    children: [n && (0, T.jsx)(f, { wrap: `wrap`, gap: `2`, children: n }), r],
  });
}
function Be(e) {
  let t = z(),
    n = F(),
    r = I(),
    i = Me();
  return (0, T.jsx)(Ve, {
    ...e,
    ownerSteamID: t,
    description: n,
    asset: r,
    listingID: i,
  });
}
function Ve(e) {
  let {
      action: t,
      description: n,
      asset: r,
      ownerSteamID: i,
      listingID: a,
    } = e,
    o = V(t.link, n, r, i, a);
  if (o.startsWith(`javascript:`)) {
    let e = o.substring(11),
      n = Function(e);
    return (0, T.jsx)(x, {
      onClick: n,
      size: `1`,
      color: `dull`,
      children: t.name,
    });
  }
  return (0, T.jsx)(d, { href: o, size: `1`, color: `dull`, children: t.name });
}
function V(e, t, n, r, i) {
  let a = e
    .replace(/%assetid%/, n?.assetid ?? ``)
    .replace(/%contextid%/, n?.contextid ?? ``)
    .replace(/%owner_steamid%/, r ?? ``)
    .replace(/%listingid%/, i ?? ``);
  return (
    n?.asset_properties &&
      n.asset_properties.forEach((e) => {
        let t = ``;
        (e.float_value === void 0
          ? e.int_value === void 0
            ? e.string_value !== void 0 && (t = e.string_value)
            : (t = e.int_value.toString())
          : (t = e.float_value.toString()),
          (a = a.replace(`%propid:${e.propertyid}%`, t)));
      }),
    (a = a.replace(/%propid:[0-9]+%/, ``)),
    a
  );
}
function H(e) {
  let { description: t, asset: n, type: r = `descriptions`, ...i } = e,
    a = t[r];
  if (ee(t.appid) && a) {
    let e = !1;
    a = a.filter((t) =>
      t.name === `keychain_info` ||
      t.name === `sticker_info` ||
      (t.name === `blank` && e)
        ? !1
        : ((e = t.name === `blank`), !0),
    );
  }
  return (0, T.jsx)(f, {
    direction: `column`,
    children: a?.map((e, r) =>
      (0, T.jsx)(He, { line: e, description: t, asset: n, ...i }, r),
    ),
  });
}
function He(e) {
  let { line: t, description: n, asset: r, ...i } = e,
    a = {
      as: `div`,
      ...i,
      whiteSpace: `pre-line`,
      style: { color: t.color ? `#${t.color}` : void 0 },
    },
    o = t.value?.trim() ?? ``;
  switch (((o ||= `\xA0`), (o = V(o, n, r)), t.type)) {
    case `html`:
      return (0, T.jsx)(p, {
        ...a,
        children: (0, T.jsx)(`span`, {
          style: { display: `contents` },
          dangerouslySetInnerHTML: { __html: o },
        }),
      });
    case `bbcode`:
      return (0, T.jsx)(p, {
        ...a,
        children: (0, T.jsx)(jt, { itemDescription: n, line: t, bbcode: o }),
      });
    default:
      return (0, T.jsx)(p, { ...a, children: o });
  }
}
function U(e, t) {
  return e.name_color ? `#${e.name_color}` : t;
}
function W(e, t, n) {
  let r = typeof t?.amount == `string` ? parseInt(t.amount) : t?.amount,
    i = n || e.name;
  return (r && r > 1 ? `${fe(r)} ` : ``) + i;
}
function G(e) {
  let {
      description: t,
      asset: n,
      nameOverride: r,
      colorOverride: i,
      style: a = {},
      ...o
    } = e,
    s = i || U(t);
  return (0, T.jsx)(p, {
    contrast: `note`,
    ...o,
    style: { ...(a ?? {}), color: s },
    children: W(t, n, r),
  });
}
function Ue(e) {
  let {
      description: t,
      asset: n,
      nameOverride: r,
      colorOverride: i,
      style: a = {},
      ...o
    } = e,
    s = i || U(t);
  return (0, T.jsx)(c, {
    contrast: `note`,
    underline: `hover`,
    ...o,
    style: { ...(a ?? {}), color: s },
    children: W(t, n, r),
  });
}
var We = `KPHI633nxrg-`,
  Ge = `s0X-oxmOBU4-`;
function Ke() {
  return (0, T.jsxs)(v, {
    position: `relative`,
    title: j(`#ItemDescription_ListedItemTooltip`),
    children: [
      (0, T.jsx)(v, {
        className: Ge,
        children: j(`#ItemDescription_ListedItem`),
      }),
      (0, T.jsx)(l, {
        className: We,
        alt: j(`#ItemDescription_ListedItem`),
        src: `${_.COMMUNITY_CDN_URL}public/images/economy/listed_on_market.png`,
      }),
    ],
  });
}
function qe() {
  let e = F(),
    t = I(),
    n = L(),
    r = ie(y.country_code),
    i = !!e.sealed && e.sealed_type == 1;
  if (!e.marketable && e.sealed_type != 1) return null;
  let a = e.market_hash_name || e.market_name || e.name;
  return a
    ? (0, T.jsx)(Je, {
        eWalletCurrency: r,
        appid: e.appid,
        hashName: a,
        bCanInteract: n,
        bItemSealed: i,
        assetid: t?.assetid,
      })
    : null;
}
function Je(e) {
  let {
      eWalletCurrency: t,
      appid: n,
      hashName: r,
      bCanInteract: i,
      bItemSealed: a,
      assetid: o,
    } = e,
    { data: s, isLoading: c } = Ze(t, n, r);
  return !i && !s?.lowest_price && !s?.volume && !c
    ? null
    : a
      ? (0, T.jsx)(f, {
          background: `greyneutral-3`,
          padding: `4`,
          gapY: `3`,
          direction: `column`,
          children: (0, T.jsx)(d, {
            color: `dull`,
            href: `${_.COMMUNITY_BASE_URL}market/listings/${n}/${encodeURIComponent(r)}${o ? `?sellorderassetid=${o}` : ``}`,
            size: `1`,
            children: j(`#SellOnMarket_ViewListing`),
          }),
        })
      : (0, T.jsxs)(f, {
          background: `greyneutral-3`,
          padding: `4`,
          gapY: `3`,
          direction: `column`,
          children: [
            (0, T.jsx)(Ye, { isLoading: c, priceOverview: s }),
            i &&
              (0, T.jsx)(d, {
                size: `1`,
                color: `dull`,
                href: `${_.COMMUNITY_BASE_URL}market/listings/${n}/${encodeURIComponent(r)}`,
                children: j(`#SellOnMarket_View`),
              }),
            i && !a && (0, T.jsx)(Xe, {}),
          ],
        });
}
function Ye(e) {
  let { isLoading: t, priceOverview: n } = e;
  return !t && !n?.lowest_price && !n?.volume
    ? null
    : (0, T.jsxs)(v, {
        paddingStart: `3`,
        children: [
          (0, T.jsx)(p, {
            as: `div`,
            children: n?.lowest_price
              ? j(`#SellOnMarket_LowestPrice`, n.lowest_price)
              : `\xA0`,
          }),
          (0, T.jsx)(p, {
            as: `div`,
            children: n?.volume ? j(`#SellOnMarket_Volume`, n.volume) : `\xA0`,
          }),
        ],
      });
}
function Xe() {
  let e = z();
  return !y.logged_in || !e || e != y.steamid
    ? null
    : (0, T.jsx)(v, {
        children: (0, T.jsx)(x, {
          color: `green`,
          onClick: () => window.SellCurrentSelection(),
          size: `1`,
          children: j(`#SellOnMarket_SellThisItem`),
        }),
      });
}
function Ze(e, t, r) {
  return n(K(e, t, r));
}
function K(e, t, n) {
  return {
    queryKey: [`MarketPriceOverview`, e, t, n],
    queryFn: async () => {
      let r = new URLSearchParams({
          country: y.country_code,
          currency: e.toString(),
          appid: t.toString(),
          market_hash_name: n,
        }),
        i = `${_.COMMUNITY_BASE_URL}market/priceoverview/?${r.toString()}`;
      return await (await fetch(i, { method: `GET` })).json();
    },
  };
}
var Qe = `_1xfmrbWlObU-`,
  $e = `ggWou2cLoQ4-`;
function et() {
  return (0, T.jsxs)(v, {
    position: `relative`,
    title: j(`#ItemDescription_TradeProtectedTooltip`),
    children: [
      (0, T.jsx)(v, {
        className: $e,
        children: j(`#ItemDescription_TradeProtected`),
      }),
      (0, T.jsx)(l, {
        className: Qe,
        alt: j(`#ItemDescription_TradeProtected`),
        src: `${_.COMMUNITY_CDN_URL}public/images/economy/protected_items_badge2.png`,
      }),
    ],
  });
}
var tt = `wAh8JbvC0H0-`,
  nt = `Rtks4145anw-`,
  rt = `_8pjoM5Ojtyk-`,
  it = `bcj1tMFXpQk-`,
  at = {
    Root: je,
    Container: lt,
    Content: ut,
    Image: ft,
    Separator: pt,
    Name: mt,
    FraudWarnings: vt,
    GameInfo: ht,
    GameName: Y,
    Descriptions: st,
    Actions: Le,
    OwnerDescriptions: ct,
    OwnerActions: Re,
    MarketActions: ze,
    Tags: _t,
    AssetProperties: bt,
    AssetAccessories: xt,
    SellOnMarket: qe,
  };
function ot(e) {
  let {
    description: t,
    asset: n,
    bInteractable: r = !0,
    bIncludeMarketInfo: i = !0,
  } = e;
  return (0, T.jsx)(q.Root, {
    description: t,
    asset: n,
    bInteractable: r,
    children: (0, T.jsxs)(q.Container, {
      children: [
        (0, T.jsxs)(q.Content, {
          children: [
            (0, T.jsx)(q.Image, {}),
            (0, T.jsx)(q.Separator, {}),
            (0, T.jsx)(q.Name, {}),
            (0, T.jsx)(q.FraudWarnings, {}),
            (0, T.jsx)(q.GameInfo, {}),
            (0, T.jsx)(q.Descriptions, {}),
            (0, T.jsx)(q.AssetAccessories, {}),
            (0, T.jsx)(q.Actions, {}),
            (0, T.jsx)(q.OwnerDescriptions, {}),
            (0, T.jsx)(q.OwnerActions, {}),
            (0, T.jsx)(q.Tags, {}),
            (0, T.jsx)(q.AssetProperties, {}),
          ],
        }),
        i && (0, T.jsx)(q.SellOnMarket, {}),
      ],
    }),
  });
}
var q = Object.assign(ot, at);
function st() {
  let e = F(),
    t = I();
  return (0, T.jsx)(T.Fragment, {
    children: (0, T.jsx)(H, {
      description: e,
      asset: t,
      contrast: `body`,
      size: `3`,
    }),
  });
}
function ct() {
  let e = F(),
    t = I();
  return (0, T.jsx)(H, {
    description: e,
    asset: t,
    type: `owner_descriptions`,
    contrast: `body`,
    size: `3`,
  });
}
function lt(e) {
  let { children: t, ...n } = e,
    r = F();
  return (0, T.jsx)(f, {
    direction: `column`,
    border: `2px solid ${U(r, `#3A3A3A`)}`,
    className: tt,
    ...n,
    children: t,
  });
}
function ut(e) {
  let { children: t, ...n } = e;
  return (0, T.jsx)(f, {
    direction: `column`,
    padding: `2`,
    gapY: `2`,
    ...n,
    children: t,
  });
}
var dt = { row: `330x192`, fit: `512x512` };
function ft(e) {
  let { bAllowAnimatedIcon: t = !0, size: n = `row` } = e,
    r = F(),
    i = n == `fit`,
    a =
      `${_.COMMUNITY_CDN_URL}economy/image/${r.icon_url_large || r.icon_url}/${dt[n]}` +
      (t ? `?allow_animated=1` : ``);
  return (0, T.jsxs)(f, {
    height: i ? `100%` : `196px`,
    width: i ? `100%` : void 0,
    minHeight: `0`,
    align: `center`,
    justify: i ? `center` : `start`,
    position: `relative`,
    children: [
      (0, T.jsx)(`img`, { className: i ? nt : void 0, src: a, alt: r.name }),
      !!r.sealed &&
        r.sealed_type != 1 &&
        (0, T.jsx)(v, {
          position: `absolute`,
          style: { left: `0`, bottom: `0` },
          children: (0, T.jsx)(et, {}),
        }),
      !!r.sealed &&
        r.sealed_type == 1 &&
        (0, T.jsx)(v, {
          position: `absolute`,
          style: { left: `0`, bottom: `0` },
          children: (0, T.jsx)(Ke, {}),
        }),
    ],
  });
}
function pt() {
  return (0, T.jsx)(te, { color: `dull-10`, size: `4`, marginY: `2` });
}
function mt(e) {
  let t = F(),
    n = I();
  return (0, T.jsx)(s, {
    size: `7`,
    weight: `heavy`,
    ...e,
    children: (0, T.jsx)(G, { description: t, asset: n }),
  });
}
function J(e) {
  let t = F().appid,
    { data: n } = he({ appid: t }),
    { data: r } = _e({ appid: t }),
    i = n && n.community_icon ? re(n, `community_icon`) : void 0,
    a = ae(r);
  return {
    gameURL: e ?? (r?.visible && r?.type !== 14 ? a : void 0),
    iconURL: i,
    strName: r?.name,
  };
}
function Y(e) {
  let { gameURL: t, strName: n } = J(e.hrefGame);
  return t
    ? (0, T.jsx)(c, {
        href: t,
        size: `3`,
        contrast: `description`,
        underline: `hover`,
        children: n,
      })
    : (0, T.jsx)(p, { size: `3`, contrast: `description`, children: n });
}
function ht(e) {
  let t = F(),
    { gameURL: n, strName: r, iconURL: i } = J(e.hrefGame);
  return (0, T.jsxs)(f, {
    direction: `row`,
    gapX: `2`,
    align: `center`,
    children: [
      (0, T.jsx)(gt, {
        href: n,
        children: i
          ? (0, T.jsx)(l, { alt: r ?? ``, src: i, className: rt })
          : (0, T.jsx)(v, { className: it }),
      }),
      (0, T.jsxs)(f, {
        direction: `column`,
        children: [
          (0, T.jsx)(Y, { ...e }),
          (0, T.jsx)(p, {
            size: `3`,
            contrast: `description`,
            children: t.type,
          }),
        ],
      }),
    ],
  });
}
function gt(e) {
  let { children: t, href: n } = e;
  return n ? (0, T.jsx)(`a`, { href: n, children: t }) : t;
}
function _t() {
  let { tags: e } = F();
  return !e || !e.length
    ? null
    : (0, T.jsxs)(p, {
        size: `3`,
        contrast: `note`,
        children: [
          j(`#ItemDescription_Tags`),
          ` `,
          ` `,
          e.map((e) => e.localized_tag_name).join(`, `),
        ],
      });
}
function vt() {
  let { fraudwarnings: e } = F();
  return !e || e.length == 0
    ? null
    : (0, T.jsx)(v, {
        borderColor: `dull-6`,
        padding: `2`,
        background: `dull-4`,
        children: e.map((e, t) =>
          (0, T.jsxs)(
            p,
            {
              color: `red-9`,
              as: `div`,
              children: [
                (0, T.jsx)(yt, {
                  style: {
                    height: `1.25em`,
                    verticalAlign: `text-bottom`,
                    marginInlineEnd: `4px`,
                  },
                }),
                e,
              ],
            },
            t,
          ),
        ),
      });
}
function yt(e) {
  return (0, T.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    ...e,
    children: (0, T.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M5.37033 3.07108C6.74074 2.15541 8.35191 1.66666 10.0001 1.66666C11.0944 1.66666 12.1781 1.88221 13.1891 2.301C14.2002 2.71979 15.1188 3.33362 15.8926 4.10744C16.6665 4.88126 17.2803 5.79992 17.6991 6.81097C18.1179 7.82202 18.3334 8.90565 18.3334 10C18.3334 11.6482 17.8447 13.2593 16.929 14.6297C16.0133 16.0002 14.7118 17.0683 13.1891 17.699C11.6664 18.3297 9.99084 18.4948 8.37433 18.1732C6.75782 17.8517 5.27297 17.058 4.10753 15.8926C2.94209 14.7271 2.14842 13.2423 1.82687 11.6258C1.50533 10.0092 1.67036 8.33369 2.30109 6.81097C2.93182 5.28825 3.99992 3.98676 5.37033 3.07108ZM12.2223 5L11.389 10H8.61119L7.77786 5H12.2223ZM11.9445 13.0556C11.9445 14.1294 11.074 15 10.0001 15C8.92619 15 8.05564 14.1294 8.05564 13.0556C8.05564 11.9817 8.92619 11.1111 10.0001 11.1111C11.074 11.1111 11.9445 11.9817 11.9445 13.0556Z`,
    }),
  });
}
function bt() {
  let e = I();
  return !e || !e.asset_properties || e.asset_properties.length == 0
    ? null
    : (0, T.jsx)(f, {
        direction: `column`,
        children: e.asset_properties.map((t, n) =>
          (0, T.jsx)(M, { appid: e.appid, property: t, contrast: `note` }, n),
        ),
      });
}
function xt() {
  let e = I(),
    t = F();
  return !e || !e.asset_accessories || e.asset_accessories.length == 0
    ? null
    : (0, T.jsxs)(f, {
        direction: `column`,
        gap: `1`,
        children: [
          (0, T.jsx)(p, {
            as: `div`,
            size: `4`,
            children: j(`#ItemDescription_AccessoriesList_Title`),
          }),
          e.asset_accessories.map((e, n) =>
            (0, T.jsx)(Te, { appid: t.appid, accessory: e }, n),
          ),
        ],
      });
}
var St = e(r(), 1);
function X(e, t) {
  let r = wt(g(), e, _.LANGUAGE);
  return n(Ct(r, e, t));
}
function Ct(e, t, n) {
  let r = `${n?.classid}_${n?.instanceid}`;
  return {
    queryKey: [`AssetClassInfo`, t, r],
    queryFn: async () => e.load(r),
    enabled: !!n && !!n.classid,
  };
}
function wt(e, t, n, r = S.GetAssetClassInfo) {
  return o(`AssetClassInfo_${t}_${n}`, () => Tt(e, t, n, r));
}
function Tt(e, t, n, r = S.GetAssetClassInfo) {
  return new St.default(async (i) => {
    let a = ye.Init(xe);
    (a.Body().set_language(n),
      a.Body().set_appid(t),
      i.forEach((e) => {
        let [t, n] = e.split(`_`),
          r = a.Body().add_classes();
        (r.set_classid(t), r.set_instanceid(n));
      }));
    let o = await r(e, a);
    if (o.GetEResult() != 1)
      throw `Error loading econ items: ${o.GetErrorMessage()}`;
    return o.Body().toObject().descriptions ?? [];
  });
}
function Z(e) {
  let { children: t, ...n } = e,
    r = w.useRef(null),
    i = w.useCallback(() => `${Et}px`, []),
    a = w.useCallback((e) => {
      let t = r.current;
      if (t && e.deltaY != 0) {
        let n = t.scrollTop;
        (t.scrollBy({ top: e.deltaY }), t.scrollTop != n && e.preventDefault());
      }
    }, []),
    o = me(`wheel`, a, { passive: !1 }),
    [s, c] = w.useState(!1);
  return (0, T.jsxs)(m.Root, {
    open: s,
    onOpenChange: c,
    width: i,
    placement: `right`,
    presentation: `anchor`,
    interactions: { hover: (e) => ({ ...e, delay: 250 }) },
    children: [
      (0, T.jsx)(m.Anchor, { children: w.cloneElement(t, { ref: o }) }),
      (0, T.jsx)(m.Positioner, {
        children: (0, T.jsx)(v, {
          marginX: `2`,
          children: (0, T.jsx)(Q, { ...n, refHover: r }),
        }),
      }),
    ],
  });
}
var Et = 346;
function Q(e) {
  let { description: t, asset: n, bHideImage: r = !1, refHover: i } = e,
    a,
    o = t?.appid;
  `identifiers` in e && ((a = e.identifiers), (o = a.appid ?? o));
  let { data: s } = X(o, t ? void 0 : a),
    c = t ?? s;
  return c
    ? (0, T.jsx)(q.Root, {
        description: c,
        asset: n,
        bInteractable: !1,
        children: (0, T.jsxs)(q.Container, {
          maxHeight: `90vh`,
          overflow: `auto`,
          ref: i,
          children: [
            (0, T.jsxs)(q.Content, {
              children: [
                !r &&
                  (0, T.jsxs)(T.Fragment, {
                    children: [
                      (0, T.jsx)(q.Image, {}),
                      (0, T.jsx)(q.Separator, {}),
                    ],
                  }),
                (0, T.jsx)(q.Name, {}),
                (0, T.jsx)(q.GameInfo, {}),
                (0, T.jsx)(q.Descriptions, {}),
                (0, T.jsx)(q.AssetAccessories, {}),
                (0, T.jsx)(q.OwnerDescriptions, {}),
                (0, T.jsx)(q.Tags, {}),
                (0, T.jsx)(q.AssetProperties, {}),
              ],
            }),
            (0, T.jsx)(q.SellOnMarket, {}),
          ],
        }),
      })
    : null;
}
function Dt(e) {
  let t = e.context.itemDescription;
  if (!t.container_properties?.contained_items) return null;
  let n = t.appid,
    r = t.container_properties.contained_items;
  return (0, T.jsx)(`ul`, {
    children: r.map((e, t) =>
      (0, T.jsx)(kt, { appid: n, contained_item: e }, t),
    ),
  });
}
function Ot(e) {
  let t = e.context.itemDescription,
    n = parseInt(e.args.index || `-1`),
    r;
  t.container_properties?.contained_items &&
    n >= 0 &&
    n < t.container_properties.contained_items.length &&
    (r = t.container_properties.contained_items[n]);
  let i = t.appid,
    a = e.children?.toString(),
    o = e.context.line.color && `#${e.context.line.color}`,
    { data: s } = X(i, r);
  return r
    ? s
      ? (0, T.jsx)(
          $,
          { appid: i, description: s, nameOverride: a, colorOverride: o },
          n,
        )
      : a
        ? (0, T.jsx)(G, { description: {}, nameOverride: a, colorOverride: o })
        : null
    : null;
}
function kt(e) {
  let { appid: t, contained_item: n } = e,
    { data: r } = X(t, n);
  return r
    ? (0, T.jsx)(`li`, {
        children: (0, T.jsx)($, { appid: t, description: r }),
      })
    : null;
}
function $(e) {
  let { appid: t, description: n, nameOverride: r, colorOverride: i } = e;
  return (0, T.jsx)(Z, {
    description: n,
    children:
      n.marketable && n.market_hash_name
        ? (0, T.jsx)(Ue, {
            description: n,
            href: u.Item(t, n.market_bucket_group_id || n.market_hash_name),
            nameOverride: r,
            colorOverride: i,
          })
        : (0, T.jsx)(G, { description: n, nameOverride: r, colorOverride: i }),
  });
}
function At(e) {
  let t = parseInt(e.children?.toString() ?? `0`),
    n = pe.InitFromAccountID(t, _.EUNIVERSE).ConvertTo64BitString(),
    { data: r, isLoading: i } = ne(n);
  if (!r && i) return null;
  let a = Se(r, n);
  return (0, T.jsx)(c, {
    href: a,
    "data-miniprofile": t,
    children: r ? r.public_data.persona_name : t,
  });
}
function jt(e) {
  let { itemDescription: t, line: n, bbcode: r = `` } = e,
    i = w.useMemo(() => {
      let e = (e) => new oe(),
        t = {
          ...ue,
          ...de,
          ...ce,
          url: { Constructor: le },
          container_item_list: { Constructor: Dt },
          container_item: { Constructor: Ot },
          persona: { Constructor: At },
          date: { Constructor: Mt },
        };
      return new se(t, e, _.LANGUAGE);
    }, []),
    a = w.useMemo(() => ({ itemDescription: t, line: n }), [t, n]);
  return w.useMemo(() => i.ParseBBCode(r, a), [i, r, a]);
}
function Mt(e) {
  let t = parseInt(e.children?.toString() ?? `0`);
  return t ? new Date(t * 1e3).toLocaleString(b()) : null;
}
export { C as i, K as n, Ie as r, q as t };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  G as n,
  Pt as r,
  U as i,
  at as a,
  it as o,
} from "./chunk~01cfc309bf.js";
import { r as s } from "./chunk~cc40f6af5e.js";
import { t as c } from "./chunk~e53a8c8667.js";
import { t as l } from "./chunk~cfd048ddd7.js";
import { t as u } from "./chunk~bdc7e21194.js";
import { t as d } from "./chunk~2e61cac879.js";
import { n as f, t as ee } from "./chunk~8d2b90a325.js";
import { r as te, t as ne } from "./chunk~d6c6ad29fc.js";
import { a as re, i as ie, o as ae, t as oe } from "./chunk~50a4210268.js";
import { t as se } from "./chunk~5e5f1b9ccf.js";
import {
  Bt as p,
  Cd as ce,
  Dt as m,
  Gt as le,
  Ht as ue,
  Kt as h,
  Nt as g,
  Op as de,
  Pt as _,
  St as fe,
  Tm as pe,
  Ut as me,
  Wt as he,
  Xp as ge,
  Yf as v,
  _t as _e,
  jt as y,
  kt as ve,
  om as b,
  rm as x,
  sd as ye,
  th as be,
  vt as S,
  wp as xe,
  yf as Se,
  zt as C,
} from "./main.js";
import { i as w, t as Ce } from "./chunk~23d4719eb3.js";
var T = e(r(), 1),
  we = t({
    Separator: () => E,
    "Size-1": () => Te,
    "Size-2": () => Ee,
    "Size-3": () => De,
    "Size-4": () => Oe,
    default: () => ke,
  }),
  E = `vNNhEahPBA0-`,
  Te = `cG3Bl0aMLsI-`,
  Ee = `sTGfTmWlAtM-`,
  De = `SaUen44WwpY-`,
  Oe = `KZc7C2EnUyw-`,
  ke = {
    Separator: E,
    "Size-1": `cG3Bl0aMLsI-`,
    "Size-2": `sTGfTmWlAtM-`,
    "Size-3": `SaUen44WwpY-`,
    "Size-4": `KZc7C2EnUyw-`,
  },
  D = a();
function Ae(e) {
  let { orientation: t = `horizontal`, size: n = `1`, ...r } = e;
  return (0, D.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": t,
    ...h({ ...r, size: n, className: E }, je),
  });
}
var je = [
    ...he,
    { prop: `size`, className: (e) => we[`Size-${e}`], responsive: !0 },
    { prop: `color`, cssProperty: (e) => [`--separator-color`, le(e)] },
  ],
  Me = `TirLOrXjWHY-`,
  Ne = `_-5gZZ1l2Tv0-`;
function O(e) {
  let t = h({ ...e, className: e.className }, Pe);
  return (0, D.jsx)(`img`, { ...t });
}
var Pe = [
    ...me,
    {
      prop: `objectFit`,
      responsive: !0,
      className: Me,
      cssProperty: `--object-fit`,
    },
    {
      prop: `objectPosition`,
      responsive: !0,
      className: Ne,
      cssProperty: `--object-position`,
    },
  ],
  Fe = `_1cm7q5EIecg-`,
  Ie = `Tc4yvV-tBrk-`,
  Le = `LvN4qa-aH1Q-`,
  Re = `_3Il1fb-tnvA-`;
function ze(e) {
  return x.EUNIVERSE === 2 ? e === 710 : e === 730;
}
[
  ...[
    `weapon_knife_push`,
    `weapon_knife_survival_bowie`,
    `weapon_knife_gypsy_jackknife`,
    `weapon_knife_falchion`,
    `weapon_knife_tactical`,
    `weapon_knife_gut`,
    `weapon_knife_kukri`,
    `weapon_knife_canis`,
    `weapon_knife_cord`,
    `weapon_knife_ursus`,
    `weapon_knife_flip`,
    `weapon_knife_outdoor`,
    `weapon_knife_css`,
    `weapon_knife_skeleton`,
    `weapon_knife_stiletto`,
    `weapon_knife_widowmaker`,
    `weapon_knife_butterfly`,
    `weapon_knife_m9_bayonet`,
    `weapon_knife_karambit`,
    `weapon_bayonet`,
  ].map((e) => ({ facet: `Weapon`, tag: e })),
];
var k = [
  `CSGO_Type_Knife`,
  `CSGO_Type_Machinegun`,
  `CSGO_Type_Pistol`,
  `CSGO_Type_Rifle`,
  `CSGO_Type_SMG`,
  `CSGO_Type_Shotgun`,
  `CSGO_Type_SniperRifle`,
];
([...k],
  [...k],
  [...k],
  T.forwardRef(function (e, t) {
    let {
        img: n,
        active: r,
        children: i,
        muted: a,
        onToggle: o,
        onClear: s,
        mini: c,
        ...l
      } = e,
      u = o
        ? (e) => {
            (e.stopPropagation(), e.preventDefault(), o());
          }
        : void 0,
      d = (0, D.jsxs)(C, {
        background: `dull-8 50%`,
        flexGrow: `1`,
        align: `center`,
        paddingX: `3`,
        paddingY: `2`,
        gap: `2`,
        className: Re,
        overflow: `hidden`,
        children: [
          (0, D.jsx)(p, { flexGrow: `1`, minWidth: `0`, children: i }),
          r && s
            ? (0, D.jsx)(C, {
                align: `center`,
                justify: `center`,
                children: (0, D.jsx)(ve, { onClick: s }),
              })
            : (0, D.jsx)(fe, {}),
        ],
      }),
      f = c ? `50px` : `70px`;
    return (
      u &&
        (d = (0, D.jsxs)(D.Fragment, {
          children: [
            (0, D.jsxs)(C, {
              align: `center`,
              background: `dull-8 50%`,
              gap: `2`,
              paddingY: c ? `0` : `1`,
              paddingX: `3`,
              flexGrow: `1`,
              className: Ie,
              onClick: u,
              position: `relative`,
              "data-active": !!r,
              "data-muted": !!a,
              overflow: `hidden`,
              minWidth: `0`,
              children: [
                (0, D.jsx)(p, {
                  overflow: `hidden`,
                  position: `absolute`,
                  inset: `0`,
                  children:
                    n &&
                    (0, D.jsx)(`div`, {
                      className: `hmouwgg6-7A-`,
                      style: {
                        backgroundImage: `url("${n}")`,
                        pointerEvents: `none`,
                      },
                    }),
                }),
                n &&
                  (0, D.jsx)(O, {
                    src: n,
                    width: f,
                    height: f,
                    objectFit: `contain`,
                    zIndex: `1`,
                    alt: ``,
                  }),
                (0, D.jsx)(p, {
                  flexGrow: `1`,
                  zIndex: `1`,
                  overflow: `hidden`,
                  children: i,
                }),
              ],
            }),
            (0, D.jsx)(C, {
              background: `dull-8 50%`,
              align: `center`,
              justify: `center`,
              padding: `5`,
              "data-active": !!r,
              "data-muted": !!a,
              className: Le,
              children: (0, D.jsx)(fe, {}),
            }),
          ],
        })),
      (0, D.jsx)(C, {
        ...l,
        gap: `1`,
        flexGrow: `1`,
        ref: t,
        radius: `md`,
        className: Fe,
        position: `relative`,
        "data-active": !!r,
        "data-muted": !!a,
        children: d,
      })
    );
  }));
var A = {
  Home: (e) => j(``, e),
  AppHome: (e, t) => A.Search({ ...t, search: `appid=${e}` }),
  AdvancedSearch: (e = {}) => j(`advancedsearch`, e),
  Search: (e = {}) => j(`search`, e),
  Item: (e, t, n = {}) =>
    j(
      `listings/${e}/${encodeURIComponent(t)}${n.bucket ? `/${encodeURIComponent(n.bucket)}` : ``}`,
      n,
    ),
};
function j(e, t = {}) {
  let n = ``;
  return (
    t?.search &&
      (n = typeof t.search == `string` ? t.search : t.search.toString()),
    `${x.COMMUNITY_BASE_URL}market/${e}${n ? `?` + n : ``}`
  );
}
function M(e) {
  let { icon_url: t, icon_url_large: n } = e;
  return Be(n || t);
}
function Be(e) {
  return `${x.COMMUNITY_CDN_URL}economy/image/${e}`;
}
function Ve(e) {
  let { appid: t, accessory: n } = e,
    { data: r } = $(t, { classid: n.classid, instanceid: n.instanceid || `0` }),
    i = n.description || r;
  if (!i) return null;
  let a = n.parent_relationship_properties || [],
    o = n.standalone_properties || [];
  return (0, D.jsx)(qt, {
    description: i,
    children: (0, D.jsx)(`a`, {
      className: ue(),
      href: A.Item(t, i.market_bucket_group_id || i.market_hash_name),
      children: (0, D.jsxs)(C, {
        align: `center`,
        gap: { initial: `1`, sm: `3` },
        padding: `2`,
        background: `dull-7`,
        minWidth: `0`,
        cursor: `pointer`,
        "border-radius": `2`,
        children: [
          (0, D.jsx)(O, {
            maxWidth: `48px`,
            maxHeight: `48px`,
            objectFit: `contain`,
            src: M(i),
            alt: ``,
          }),
          (0, D.jsxs)(p, {
            minWidth: `0`,
            children: [
              (0, D.jsx)(y, { lineClamp: 3, children: i.name }),
              a.map((e) =>
                (0, D.jsx)(N, { appid: t, property: e }, e.propertyid),
              ),
              o.map((e) =>
                (0, D.jsx)(N, { appid: t, property: e }, e.propertyid),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function N(e) {
  return (0, D.jsx)(R, {
    ...e,
    size: { initial: `1`, sm: `2` },
    contrast: `note`,
  });
}
function P(e, t = x.LANGUAGE) {
  let r = ge(),
    i = o();
  return n({ ...He(i, r, e, t), enabled: !!e });
}
function He(e, t, n, r) {
  return {
    queryKey: [`AssetPropertySchemaMap`, n, r],
    queryFn: async () => {
      let i = await e.fetchQuery(Ue(t, n, r)),
        a = new Map();
      return (i.property_schemas.forEach((e) => a.set(e.id, e)), a);
    },
  };
}
function Ue(e, t, n) {
  return {
    queryKey: [`AssetPropertySchema`, t, n],
    queryFn: async () => {
      let r = await w.GetAssetPropertySchema(e, { appid: t, language: n });
      if (!r.BSuccess() && r.GetEResult() != 42)
        throw `Error loading asset properties for ${t}: ${r.GetErrorMessage()}`;
      return { property_schemas: r.Body().toObject().property_schemas ?? [] };
    },
  };
}
var F = {};
((F.arabic = () =>
  v(() => import(`./chunk~7613b453bc.js`), [], import.meta.url)),
  (F.brazilian = () =>
    v(() => import(`./chunk~37c8906f1f.js`), [], import.meta.url)),
  (F.bulgarian = () =>
    v(() => import(`./chunk~ecdcd246b5.js`), [], import.meta.url)),
  (F.czech = () =>
    v(() => import(`./chunk~0256c3f60a.js`), [], import.meta.url)),
  (F.danish = () =>
    v(() => import(`./chunk~4450764e1e.js`), [], import.meta.url)),
  (F.dutch = () =>
    v(() => import(`./chunk~1ae2258501.js`), [], import.meta.url)),
  (F.english = () =>
    v(() => import(`./chunk~f3f9cbe888.js`), [], import.meta.url)),
  (F.finnish = () =>
    v(() => import(`./chunk~6afbb0ea00.js`), [], import.meta.url)),
  (F.french = () =>
    v(() => import(`./chunk~9ea2d5a2ed.js`), [], import.meta.url)),
  (F.german = () =>
    v(() => import(`./chunk~e91ca08c39.js`), [], import.meta.url)),
  (F.greek = () =>
    v(() => import(`./chunk~afe55566d0.js`), [], import.meta.url)),
  (F.hungarian = () =>
    v(() => import(`./chunk~7482717cb5.js`), [], import.meta.url)),
  (F.indonesian = () =>
    v(() => import(`./chunk~86bd892986.js`), [], import.meta.url)),
  (F.italian = () =>
    v(() => import(`./chunk~f89bd07123.js`), [], import.meta.url)),
  (F.japanese = () =>
    v(() => import(`./chunk~e64835c7b5.js`), [], import.meta.url)),
  (F.koreana = () =>
    v(() => import(`./chunk~b08cd6031b.js`), [], import.meta.url)),
  (F.latam = () =>
    v(() => import(`./chunk~761d3d158c.js`), [], import.meta.url)),
  (F.malay = () =>
    v(() => import(`./chunk~091e7d40c1.js`), [], import.meta.url)),
  (F.norwegian = () =>
    v(() => import(`./chunk~4b4803b799.js`), [], import.meta.url)),
  (F.polish = () =>
    v(() => import(`./chunk~45e3403b81.js`), [], import.meta.url)),
  (F.portuguese = () =>
    v(() => import(`./chunk~117c48f703.js`), [], import.meta.url)),
  (F.romanian = () =>
    v(() => import(`./chunk~5a39ccae78.js`), [], import.meta.url)),
  (F.russian = () =>
    v(() => import(`./chunk~e1021bc419.js`), [], import.meta.url)),
  (F.sc_schinese = () =>
    v(() => import(`./chunk~cdf7bda2ff.js`), [], import.meta.url)),
  (F.schinese = () =>
    v(() => import(`./chunk~cb510e1464.js`), [], import.meta.url)),
  (F.spanish = () =>
    v(() => import(`./chunk~b3f4cde693.js`), [], import.meta.url)),
  (F.swedish = () =>
    v(() => import(`./chunk~1adcc33513.js`), [], import.meta.url)),
  (F.tchinese = () =>
    v(() => import(`./chunk~6e9690022c.js`), [], import.meta.url)),
  (F.thai = () =>
    v(() => import(`./chunk~ab8f74c71d.js`), [], import.meta.url)),
  (F.turkish = () =>
    v(() => import(`./chunk~2b2974444a.js`), [], import.meta.url)),
  (F.ukrainian = () =>
    v(() => import(`./chunk~8646b70518.js`), [], import.meta.url)),
  (F.vietnamese = () =>
    v(() => import(`./chunk~b6a98c9270.js`), [], import.meta.url)));
async function We(e) {
  if (F[e]) return await F[e]();
}
var I = Se(We),
  L = I.Localize,
  Ge = { Label: qe, Value: z };
function Ke(e) {
  let { appid: t, property: n, ...r } = e,
    { data: i } = P(t),
    a = i?.get(n.propertyid);
  return !a || a.hide_from_description
    ? null
    : (0, D.jsx)(y, {
        as: `div`,
        ...r,
        children: I.LocalizeReact(
          `#ItemDescription_AssetPropertyLabelColonValue`,
          a.localized_label,
          (0, D.jsx)(y, {
            whiteSpace: `pre-wrap`,
            children: (0, D.jsx)(z, { property: n }),
          }),
        ),
      });
}
var R = Object.assign(Ke, Ge);
function qe(e) {
  let { appid: t, property: n } = e,
    { data: r } = P(t),
    i = r?.get(n.propertyid);
  return i ? i.localized_label : null;
}
function z(e) {
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
      e.toLocaleString(S(), { maximumFractionDigits: n })
    );
  }
  return t.int_value === void 0
    ? t.string_value === void 0
      ? null
      : t.string_value
    : Number(t.int_value).toLocaleString(S());
}
var B = T.createContext(void 0);
function Je(e) {
  let {
      description: t,
      asset: n,
      bInteractable: r = !0,
      listingID: i,
      children: a,
    } = e,
    o = T.useMemo(
      () => ({ description: t, asset: n, bInteractable: r, listingID: i }),
      [t, n, r, i],
    );
  return (0, D.jsx)(B.Provider, { value: o, children: a });
}
function V() {
  return T.useContext(B).description;
}
function H() {
  return T.useContext(B).asset;
}
function U() {
  return T.useContext(B).bInteractable;
}
function Ye() {
  return T.useContext(B).listingID;
}
function Xe(e) {
  let { action: t } = e,
    n = H();
  if (!n) return null;
  let r = t.link.match(
      /GetGooValue\(\s*'?[^']*'?\s*,\s*'?[^']*'?\s*,\s*'?(?<appid>[0-9]+)'?\s*,\s*'?(?<item_type>[0-9]+)'?\s*,\s*'?(?<border_color>[0-9]+)'?/,
    )?.groups,
    { contextid: i, assetid: a } = n;
  if (!r || !a || n?.appid != 753 || i != `6` || !r.appid || !r.item_type)
    return null;
  let { appid: o, item_type: s, border_color: c } = r;
  return (0, D.jsx)(Ze, {
    contextid: i,
    assetid: a,
    appid: parseInt(o),
    item_type: parseInt(s),
    border_color: parseInt(c),
  });
}
function Ze(e) {
  let { contextid: t, assetid: n, appid: r, item_type: i, border_color: a } = e,
    { data: o, isLoading: s } = Qe(r, i, a);
  return o === void 0 && !s
    ? null
    : (0, D.jsxs)(C, {
        background: `sky-3`,
        padding: `2`,
        gapY: `2`,
        direction: `column`,
        align: `start`,
        marginTop: `2`,
        children: [
          (0, D.jsx)(y, {
            as: `div`,
            contrast: `body`,
            children: I.LocalizeReact(
              `#ItemDescription_ThisItemIsWorthGems`,
              (0, D.jsx)(y, {
                color: `sky-11`,
                children: I.Localize(
                  `#ItemDescription_XGems`,
                  o?.toLocaleString(S()) ?? ``,
                ),
              }),
            ),
          }),
          (0, D.jsx)(g, {
            color: `green`,
            onClick: () => window.GrindIntoGoo(r, t, n),
            size: `1`,
            children: L(`#ItemDescription_TurnIntoGemsButton`),
          }),
          (0, D.jsx)(y, {
            as: `div`,
            contrast: `body`,
            children: ye(
              L(`#ItemDescription_GemDescription`),
              (0, D.jsx)(l, {
                underline: `auto`,
                color: `greyneutral-12`,
                href: `${x.COMMUNITY_BASE_URL}tradingcards/boostercreator/`,
              }),
            ),
          }),
        ],
      });
}
function Qe(e, t, r) {
  return n({
    queryKey: [`GetGooValue`, e, t, r],
    queryFn: async () => {
      let n = new URLSearchParams({
          appid: e.toString(),
          item_type: t.toString(),
          border_color: r.toString(),
        }),
        i = `${x.COMMUNITY_BASE_URL}auction/ajaxgetgoovalueforitemtype/?${n.toString()}`,
        a = await (await fetch(i, { method: `GET` })).json();
      if (`goo_value` in a) return a.goo_value;
      throw `Error querying goo value`;
    },
    retry: !1,
  });
}
var W = T.createContext({ steamidOwner: void 0 });
function G() {
  return T.useContext(W).steamidOwner;
}
function $e(e) {
  let { steamidOwner: t, children: n } = e,
    r = T.useMemo(() => ({ steamidOwner: t }), [t]);
  return (0, D.jsx)(W.Provider, { value: r, children: n });
}
function et() {
  let e = V(),
    t = U(),
    { actions: n } = e;
  return t ? n && (0, D.jsx)(K, { actions: n }) : null;
}
function tt() {
  let e = V(),
    t = U(),
    { owner_actions: n } = e;
  return t ? n && (0, D.jsx)(K, { actions: n }) : null;
}
function nt() {
  let e = V(),
    t = U(),
    { market_actions: n } = e;
  return t ? n && (0, D.jsx)(K, { actions: n }) : null;
}
function K(e) {
  let { actions: t } = e,
    [n, r] = T.useMemo(() => {
      let e = [],
        n = [];
      return (
        t.forEach((t, r) => {
          t.link?.startsWith(`javascript:GetGooValue`)
            ? n.push((0, D.jsx)(Xe, { action: t }, r))
            : e.push((0, D.jsx)(rt, { action: t }, r));
        }),
        [e, n]
      );
    }, [t]);
  return (0, D.jsxs)(D.Fragment, {
    children: [
      n.length > 0 && (0, D.jsx)(C, { wrap: `wrap`, gap: `2`, children: n }),
      r,
    ],
  });
}
function rt(e) {
  let t = G(),
    n = V(),
    r = H(),
    i = Ye();
  return (0, D.jsx)(it, {
    ...e,
    ownerSteamID: t,
    description: n,
    asset: r,
    listingID: i,
  });
}
function it(e) {
  let {
      action: t,
      description: n,
      asset: r,
      ownerSteamID: i,
      listingID: a,
    } = e,
    o = q(t.link, n, r, i, a);
  if (o.startsWith(`javascript:`)) {
    let e = o.substring(11),
      n = Function(e);
    return (0, D.jsx)(g, {
      onClick: n,
      size: `1`,
      color: `dull`,
      children: t.name,
    });
  }
  return (0, D.jsx)(_, { href: o, size: `1`, color: `dull`, children: t.name });
}
function q(e, t, n, r, i) {
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
function J(e) {
  let { description: t, asset: n, type: r = `descriptions`, ...i } = e,
    a = t[r];
  if (ze(t.appid) && a) {
    let e = !1;
    a = a.filter((t) =>
      t.name === `keychain_info` ||
      t.name === `sticker_info` ||
      (t.name === `blank` && e)
        ? !1
        : ((e = t.name === `blank`), !0),
    );
  }
  return (0, D.jsx)(C, {
    direction: `column`,
    children: a?.map((e, r) =>
      (0, D.jsx)(at, { line: e, description: t, asset: n, ...i }, r),
    ),
  });
}
function at(e) {
  let { line: t, description: n, asset: r, ...i } = e,
    a = {
      as: `div`,
      ...i,
      whiteSpace: `pre-line`,
      style: { color: t.color ? `#${t.color}` : void 0 },
    },
    o = t.value?.trim() ?? ``;
  switch (((o ||= `\xA0`), (o = q(o, n, r)), t.type)) {
    case `html`:
      return (0, D.jsx)(y, {
        ...a,
        children: (0, D.jsx)(`span`, {
          style: { display: `contents` },
          dangerouslySetInnerHTML: { __html: o },
        }),
      });
    case `bbcode`:
      return (0, D.jsx)(y, {
        ...a,
        children: (0, D.jsx)(tn, { itemDescription: n, line: t, bbcode: o }),
      });
    default:
      return (0, D.jsx)(y, { ...a, children: o });
  }
}
function Y(e, t) {
  return e.name_color ? `#${e.name_color}` : t;
}
function X(e, t, n) {
  let r = typeof t?.amount == `string` ? parseInt(t.amount) : t?.amount,
    i = n || e.name;
  return (r && r > 1 ? `${_e(r)} ` : ``) + i;
}
function Z(e) {
  let {
      description: t,
      asset: n,
      nameOverride: r,
      colorOverride: i,
      style: a = {},
      ...o
    } = e,
    s = i || Y(t);
  return (0, D.jsx)(y, {
    contrast: `note`,
    ...o,
    style: { ...(a ?? {}), color: s },
    children: X(t, n, r),
  });
}
function ot(e) {
  let {
      description: t,
      asset: n,
      nameOverride: r,
      colorOverride: i,
      style: a = {},
      ...o
    } = e,
    s = i || Y(t);
  return (0, D.jsx)(l, {
    contrast: `note`,
    underline: `hover`,
    ...o,
    style: { ...(a ?? {}), color: s },
    children: X(t, n, r),
  });
}
var st = `KPHI633nxrg-`,
  ct = `s0X-oxmOBU4-`;
function lt() {
  return (0, D.jsxs)(p, {
    position: `relative`,
    title: L(`#ItemDescription_ListedItemTooltip`),
    children: [
      (0, D.jsx)(p, {
        className: ct,
        children: L(`#ItemDescription_ListedItem`),
      }),
      (0, D.jsx)(O, {
        className: st,
        alt: L(`#ItemDescription_ListedItem`),
        src: `${x.COMMUNITY_CDN_URL}public/images/economy/listed_on_market.png`,
      }),
    ],
  });
}
function ut() {
  let e = V(),
    t = H(),
    n = U(),
    r = f(b.country_code),
    i = !!e.sealed && e.sealed_type == 1;
  if (!e.marketable && e.sealed_type != 1) return null;
  let a = e.market_hash_name || e.market_name || e.name;
  if (!a) return null;
  let o = e.market_bucket_group_id || a;
  return (0, D.jsx)(dt, {
    eWalletCurrency: r,
    appid: e.appid,
    hashName: a,
    listingName: o,
    bCanInteract: n,
    bItemSealed: i,
    assetid: t?.assetid,
  });
}
function dt(e) {
  let {
      eWalletCurrency: t,
      appid: n,
      hashName: r,
      listingName: i,
      bCanInteract: a,
      bItemSealed: o,
      assetid: s,
    } = e,
    { data: c, isLoading: l } = mt(t, n, r);
  return !a && !c?.lowest_price && !c?.volume && !l
    ? null
    : o
      ? (0, D.jsx)(C, {
          background: `greyneutral-3`,
          padding: `4`,
          gapY: `3`,
          direction: `column`,
          children: (0, D.jsx)(_, {
            color: `dull`,
            href: `${x.COMMUNITY_BASE_URL}market/listings/${n}/${encodeURIComponent(i)}${s ? `?sellorderassetid=${s}` : ``}`,
            size: `1`,
            children: L(`#SellOnMarket_ViewListing`),
          }),
        })
      : (0, D.jsxs)(C, {
          background: `greyneutral-3`,
          padding: `4`,
          gapY: `3`,
          direction: `column`,
          children: [
            (0, D.jsx)(ft, { isLoading: l, priceOverview: c }),
            a &&
              (0, D.jsx)(_, {
                size: `1`,
                color: `dull`,
                href: `${x.COMMUNITY_BASE_URL}market/listings/${n}/${encodeURIComponent(i)}`,
                children: L(`#SellOnMarket_View`),
              }),
            a && !o && (0, D.jsx)(pt, {}),
          ],
        });
}
function ft(e) {
  let { isLoading: t, priceOverview: n } = e;
  return !t && !n?.lowest_price && !n?.volume
    ? null
    : (0, D.jsxs)(p, {
        paddingStart: `3`,
        children: [
          (0, D.jsx)(y, {
            as: `div`,
            children: n?.lowest_price
              ? L(`#SellOnMarket_LowestPrice`, n.lowest_price)
              : `\xA0`,
          }),
          (0, D.jsx)(y, {
            as: `div`,
            children: n?.volume ? L(`#SellOnMarket_Volume`, n.volume) : `\xA0`,
          }),
        ],
      });
}
function pt() {
  let e = G();
  return !b.logged_in || !e || e != b.steamid
    ? null
    : (0, D.jsx)(p, {
        children: (0, D.jsx)(g, {
          color: `green`,
          onClick: () => window.SellCurrentSelection(),
          size: `1`,
          children: L(`#SellOnMarket_SellThisItem`),
        }),
      });
}
function mt(e, t, r) {
  return n(ht(e, t, r));
}
function ht(e, t, n) {
  return {
    queryKey: [`MarketPriceOverview`, e, t, n],
    queryFn: async () => {
      let r = new URLSearchParams({
          country: b.country_code,
          currency: e.toString(),
          appid: t.toString(),
          market_hash_name: n,
        }),
        i = `${x.COMMUNITY_BASE_URL}market/priceoverview/?${r.toString()}`;
      return await (await fetch(i, { method: `GET` })).json();
    },
  };
}
var gt = `_1xfmrbWlObU-`,
  _t = `ggWou2cLoQ4-`;
function vt() {
  return (0, D.jsxs)(p, {
    position: `relative`,
    title: L(`#ItemDescription_TradeProtectedTooltip`),
    children: [
      (0, D.jsx)(p, {
        className: _t,
        children: L(`#ItemDescription_TradeProtected`),
      }),
      (0, D.jsx)(O, {
        className: gt,
        alt: L(`#ItemDescription_TradeProtected`),
        src: `${x.COMMUNITY_CDN_URL}public/images/economy/protected_items_badge2.png`,
      }),
    ],
  });
}
var yt = `wAh8JbvC0H0-`,
  bt = `Rtks4145anw-`,
  xt = `_8pjoM5Ojtyk-`,
  St = `bcj1tMFXpQk-`,
  Ct = `C9wW-Rgfrl4-`,
  wt = {
    Root: Je,
    Container: Ot,
    Content: kt,
    Image: jt,
    Separator: Mt,
    Name: Nt,
    FraudWarnings: zt,
    GameInfo: It,
    GameName: Ft,
    Descriptions: Et,
    Actions: et,
    OwnerDescriptions: Dt,
    OwnerActions: tt,
    MarketActions: nt,
    Tags: Rt,
    AssetProperties: Vt,
    AssetAccessories: Ht,
    SellOnMarket: ut,
  };
function Tt(e) {
  let {
    description: t,
    asset: n,
    bInteractable: r = !0,
    bIncludeMarketInfo: i = !0,
  } = e;
  return (0, D.jsx)(Q.Root, {
    description: t,
    asset: n,
    bInteractable: r,
    children: (0, D.jsxs)(Q.Container, {
      children: [
        (0, D.jsxs)(Q.Content, {
          children: [
            (0, D.jsx)(Q.Image, {}),
            (0, D.jsx)(Q.Separator, {}),
            (0, D.jsx)(Q.Name, {}),
            (0, D.jsx)(Q.FraudWarnings, {}),
            (0, D.jsx)(Q.GameInfo, {}),
            (0, D.jsx)(Q.Descriptions, {}),
            (0, D.jsx)(Q.AssetAccessories, {}),
            (0, D.jsx)(Q.Actions, {}),
            (0, D.jsx)(Q.OwnerDescriptions, {}),
            (0, D.jsx)(Q.OwnerActions, {}),
            (0, D.jsx)(Q.Tags, {}),
            (0, D.jsx)(Q.AssetProperties, {}),
          ],
        }),
        i && (0, D.jsx)(Q.SellOnMarket, {}),
      ],
    }),
  });
}
var Q = Object.assign(Tt, wt);
function Et() {
  let e = V(),
    t = H();
  return (0, D.jsx)(D.Fragment, {
    children: (0, D.jsx)(J, {
      description: e,
      asset: t,
      contrast: `body`,
      size: `3`,
    }),
  });
}
function Dt() {
  let e = V(),
    t = H();
  return (0, D.jsx)(J, {
    description: e,
    asset: t,
    type: `owner_descriptions`,
    contrast: `body`,
    size: `3`,
  });
}
function Ot(e) {
  let { children: t, ...n } = e,
    r = V();
  return (0, D.jsx)(C, {
    direction: `column`,
    border: `2px solid ${Y(r, `#3A3A3A`)}`,
    className: yt,
    ...n,
    children: t,
  });
}
function kt(e) {
  let { children: t, ...n } = e;
  return (0, D.jsx)(C, {
    direction: `column`,
    padding: `2`,
    gapY: `2`,
    ...n,
    children: t,
  });
}
var At = { row: `330x192`, fit: `512x512` };
function jt(e) {
  let { bAllowAnimatedIcon: t = !0, size: n = `row` } = e,
    r = V(),
    i = n == `fit`,
    a =
      `${x.COMMUNITY_CDN_URL}economy/image/${r.icon_url_large || r.icon_url}/${At[n]}` +
      (t ? `?allow_animated=1` : ``);
  return (0, D.jsxs)(C, {
    height: i ? `100%` : `196px`,
    width: i ? `100%` : void 0,
    minHeight: `0`,
    align: `center`,
    justify: i ? `center` : `start`,
    position: `relative`,
    children: [
      (0, D.jsx)(`img`, { className: i ? bt : void 0, src: a, alt: r.name }),
      !!r.sealed &&
        r.sealed_type != 1 &&
        (0, D.jsx)(p, {
          position: `absolute`,
          style: { left: `0`, bottom: `0` },
          children: (0, D.jsx)(vt, {}),
        }),
      !!r.sealed &&
        r.sealed_type == 1 &&
        (0, D.jsx)(p, {
          position: `absolute`,
          style: { left: `0`, bottom: `0` },
          children: (0, D.jsx)(lt, {}),
        }),
    ],
  });
}
function Mt() {
  return (0, D.jsx)(Ae, { color: `dull-10`, size: `4`, marginY: `2` });
}
function Nt(e) {
  let t = V(),
    n = H();
  return (0, D.jsx)(c, {
    size: `7`,
    weight: `heavy`,
    ...e,
    children: (0, D.jsx)(Z, { description: t, asset: n }),
  });
}
function Pt(e) {
  let t = V().appid,
    { data: n } = xe({ appid: t }),
    { data: r } = de({ appid: t }),
    i = n && n.community_icon ? d(n, `community_icon`) : void 0,
    a = ee(r);
  return {
    gameURL: e ?? (r?.visible && r?.type !== 14 ? a : void 0),
    iconURL: i,
    strName: r?.name,
  };
}
function Ft(e) {
  let { gameURL: t, strName: n } = Pt(e.hrefGame);
  return t
    ? (0, D.jsx)(l, {
        href: t,
        size: `3`,
        contrast: `description`,
        underline: `hover`,
        children: n,
      })
    : (0, D.jsx)(y, { size: `3`, contrast: `description`, children: n });
}
function It(e) {
  let { hrefGame: t, compact: n } = e,
    r = V(),
    { gameURL: i, strName: a, iconURL: o } = Pt(t);
  return (0, D.jsxs)(C, {
    direction: `row`,
    gapX: `2`,
    align: n ? `start` : `center`,
    children: [
      (0, D.jsx)(Lt, {
        href: i,
        children: o
          ? (0, D.jsx)(O, { alt: a ?? ``, src: o, className: n ? Ct : xt })
          : (0, D.jsx)(p, { className: n ? Ct : St }),
      }),
      (0, D.jsxs)(C, {
        direction: `column`,
        children: [
          (0, D.jsx)(Ft, { hrefGame: t }),
          (0, D.jsx)(y, {
            size: `3`,
            contrast: `description`,
            children: r.type,
          }),
        ],
      }),
    ],
  });
}
function Lt(e) {
  let { children: t, href: n } = e;
  return n ? (0, D.jsx)(`a`, { href: n, children: t }) : t;
}
function Rt() {
  let { tags: e } = V();
  return !e || !e.length
    ? null
    : (0, D.jsxs)(y, {
        size: `3`,
        contrast: `note`,
        children: [
          L(`#ItemDescription_Tags`),
          ` `,
          ` `,
          e.map((e) => e.localized_tag_name).join(`, `),
        ],
      });
}
function zt() {
  let { fraudwarnings: e } = V();
  return !e || e.length == 0
    ? null
    : (0, D.jsx)(p, {
        borderColor: `dull-6`,
        padding: `2`,
        background: `dull-4`,
        children: e.map((e, t) =>
          (0, D.jsxs)(
            y,
            {
              color: `red-9`,
              as: `div`,
              children: [
                (0, D.jsx)(Bt, {
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
function Bt(e) {
  return (0, D.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    ...e,
    children: (0, D.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M5.37033 3.07108C6.74074 2.15541 8.35191 1.66666 10.0001 1.66666C11.0944 1.66666 12.1781 1.88221 13.1891 2.301C14.2002 2.71979 15.1188 3.33362 15.8926 4.10744C16.6665 4.88126 17.2803 5.79992 17.6991 6.81097C18.1179 7.82202 18.3334 8.90565 18.3334 10C18.3334 11.6482 17.8447 13.2593 16.929 14.6297C16.0133 16.0002 14.7118 17.0683 13.1891 17.699C11.6664 18.3297 9.99084 18.4948 8.37433 18.1732C6.75782 17.8517 5.27297 17.058 4.10753 15.8926C2.94209 14.7271 2.14842 13.2423 1.82687 11.6258C1.50533 10.0092 1.67036 8.33369 2.30109 6.81097C2.93182 5.28825 3.99992 3.98676 5.37033 3.07108ZM12.2223 5L11.389 10H8.61119L7.77786 5H12.2223ZM11.9445 13.0556C11.9445 14.1294 11.074 15 10.0001 15C8.92619 15 8.05564 14.1294 8.05564 13.0556C8.05564 11.9817 8.92619 11.1111 10.0001 11.1111C11.074 11.1111 11.9445 11.9817 11.9445 13.0556Z`,
    }),
  });
}
function Vt() {
  let e = H();
  return !e || !e.asset_properties || e.asset_properties.length == 0
    ? null
    : (0, D.jsx)(C, {
        direction: `column`,
        children: e.asset_properties.map((t, n) =>
          (0, D.jsx)(R, { appid: e.appid, property: t, contrast: `note` }, n),
        ),
      });
}
function Ht() {
  let e = H(),
    t = V();
  return !e || !e.asset_accessories || e.asset_accessories.length == 0
    ? null
    : (0, D.jsxs)(C, {
        direction: `column`,
        gap: `1`,
        children: [
          (0, D.jsx)(y, {
            as: `div`,
            size: `4`,
            children: L(`#ItemDescription_AccessoriesList_Title`),
          }),
          e.asset_accessories.map((e, n) =>
            (0, D.jsx)(Ve, { appid: t.appid, accessory: e }, n),
          ),
        ],
      });
}
var Ut = e(i(), 1);
function $(e, t) {
  let r = Gt(ge(), e, x.LANGUAGE);
  return n(Wt(r, e, t));
}
function Wt(e, t, n) {
  let r = `${n?.classid}_${n?.instanceid}`;
  return {
    queryKey: [`AssetClassInfo`, t, r],
    queryFn: async () => e.load(r),
    enabled: !!n && !!n.classid,
  };
}
function Gt(e, t, n, r = w.GetAssetClassInfo) {
  return s(`AssetClassInfo_${t}_${n}`, () => Kt(e, t, n, r));
}
function Kt(e, t, n, r = w.GetAssetClassInfo) {
  return new Ut.default(async (i) => {
    let a = be.Init(Ce);
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
function qt(e) {
  let { children: t, ...n } = e,
    r = T.useRef(null),
    i = T.useCallback(() => `${Jt}px`, []),
    a = T.useCallback((e) => {
      let t = r.current;
      if (t && e.deltaY != 0) {
        let n = t.scrollTop;
        (t.scrollBy({ top: e.deltaY }), t.scrollTop != n && e.preventDefault());
      }
    }, []),
    o = ce(`wheel`, a, { passive: !1 }),
    [s, c] = T.useState(!1);
  return (0, D.jsxs)(m.Root, {
    open: s,
    onOpenChange: c,
    width: i,
    placement: `right`,
    presentation: `anchor`,
    interactions: { hover: (e) => ({ ...e, delay: 250 }) },
    children: [
      (0, D.jsx)(m.Anchor, { children: T.cloneElement(t, { ref: o }) }),
      (0, D.jsx)(m.Positioner, {
        children: (0, D.jsx)(p, {
          marginX: `2`,
          children: (0, D.jsx)(Yt, { ...n, refHover: r }),
        }),
      }),
    ],
  });
}
var Jt = 346;
function Yt(e) {
  let { description: t, asset: n, bHideImage: r = !1, refHover: i } = e,
    a,
    o = t?.appid;
  `identifiers` in e && ((a = e.identifiers), (o = a.appid ?? o));
  let { data: s } = $(o, t ? void 0 : a),
    c = t ?? s;
  return c
    ? (0, D.jsx)(Q.Root, {
        description: c,
        asset: n,
        bInteractable: !1,
        children: (0, D.jsxs)(Q.Container, {
          maxHeight: `90vh`,
          overflow: `auto`,
          ref: i,
          children: [
            (0, D.jsxs)(Q.Content, {
              children: [
                !r &&
                  (0, D.jsxs)(D.Fragment, {
                    children: [
                      (0, D.jsx)(Q.Image, {}),
                      (0, D.jsx)(Q.Separator, {}),
                    ],
                  }),
                (0, D.jsx)(Q.Name, {}),
                (0, D.jsx)(Q.GameInfo, {}),
                (0, D.jsx)(Q.Descriptions, {}),
                (0, D.jsx)(Q.AssetAccessories, {}),
                (0, D.jsx)(Q.OwnerDescriptions, {}),
                (0, D.jsx)(Q.Tags, {}),
                (0, D.jsx)(Q.AssetProperties, {}),
              ],
            }),
            (0, D.jsx)(Q.SellOnMarket, {}),
          ],
        }),
      })
    : null;
}
function Xt(e) {
  let t = e.context.itemDescription;
  if (!t.container_properties?.contained_items) return null;
  let n = t.appid,
    r = t.container_properties.contained_items;
  return (0, D.jsx)(`ul`, {
    children: r.map((e, t) =>
      (0, D.jsx)(Qt, { appid: n, contained_item: e }, t),
    ),
  });
}
function Zt(e) {
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
    { data: s } = $(i, r);
  return r
    ? s
      ? (0, D.jsx)(
          $t,
          { appid: i, description: s, nameOverride: a, colorOverride: o },
          n,
        )
      : a
        ? (0, D.jsx)(Z, { description: {}, nameOverride: a, colorOverride: o })
        : null
    : null;
}
function Qt(e) {
  let { appid: t, contained_item: n } = e,
    { data: r } = $(t, n);
  return r
    ? (0, D.jsx)(`li`, {
        children: (0, D.jsx)($t, { appid: t, description: r }),
      })
    : null;
}
function $t(e) {
  let { appid: t, description: n, nameOverride: r, colorOverride: i } = e;
  return (0, D.jsx)(qt, {
    description: n,
    children:
      n.marketable && n.market_hash_name
        ? (0, D.jsx)(ot, {
            description: n,
            href: A.Item(t, n.market_bucket_group_id || n.market_hash_name),
            nameOverride: r,
            colorOverride: i,
          })
        : (0, D.jsx)(Z, { description: n, nameOverride: r, colorOverride: i }),
  });
}
function en(e) {
  let t = parseInt(e.children?.toString() ?? `0`),
    n = pe.InitFromAccountID(t, x.EUNIVERSE).ConvertTo64BitString(),
    { data: r, isLoading: i } = u(n);
  if (!r && i) return null;
  let a = se(r, n);
  return (0, D.jsx)(l, {
    href: a,
    "data-miniprofile": t,
    children: r ? r.public_data.persona_name : t,
  });
}
function tn(e) {
  let { itemDescription: t, line: n, bbcode: r = `` } = e,
    i = T.useMemo(() => {
      let e = (e) => new te(),
        t = {
          ...ae,
          ...oe,
          ...re,
          url: { Constructor: ie },
          container_item_list: { Constructor: Xt },
          container_item: { Constructor: Zt },
          persona: { Constructor: en },
          date: { Constructor: nn },
        };
      return new ne(t, e, x.LANGUAGE);
    }, []),
    a = T.useMemo(() => ({ itemDescription: t, line: n }), [t, n]);
  return T.useMemo(() => i.ParseBBCode(r, a), [i, r, a]);
}
function nn(e) {
  let t = parseInt(e.children?.toString() ?? `0`);
  return t ? new Date(t * 1e3).toLocaleString(S()) : null;
}
export { M as i, ht as n, $e as r, Q as t };

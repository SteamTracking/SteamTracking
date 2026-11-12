/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  N as n,
  dt as r,
  ft as i,
  lt as a,
  ot as o,
  st as s,
} from "./chunk~01cfc309bf.js";
import {
  Dt as c,
  Ei as l,
  To as u,
  Vt as d,
  mo as f,
  po as p,
  wt as m,
} from "./chunk~6b8ddcaac8.js";
import { t as h } from "./chunk~b7e6359825.js";
import { n as g } from "./chunk~034b02d99f.js";
import { t as _ } from "./chunk~eefd71512b.js";
import { a as v, c as ee, r as y, u as b } from "./chunk~4180b1a25d.js";
import { r as te, t as ne } from "./chunk~c0171774da.js";
import { n as re, t as ie } from "./chunk~73f829e6f9.js";
import { t as ae } from "./chunk~5e5f1b9ccf.js";
import {
  $x as oe,
  At as se,
  Br as ce,
  Bt as le,
  Cy as ue,
  Db as x,
  Dt as de,
  Eb as S,
  Ft as fe,
  Gt as pe,
  Ht as me,
  It as he,
  Ju as ge,
  Kt as C,
  Kv as _e,
  Lt as ve,
  Mt as ye,
  Ni as be,
  Nt as xe,
  Nv as Se,
  Ob as Ce,
  Ot as we,
  Pt as Te,
  Pv as w,
  Qv as T,
  Rt as Ee,
  Ty as De,
  Ut as Oe,
  Vt as ke,
  Vv as Ae,
  Vy as E,
  Wt as je,
  Wv as Me,
  Xb as D,
  Xc as Ne,
  Xv as Pe,
  Yt as Fe,
  bt as Ie,
  ca as Le,
  cv as Re,
  dn as O,
  f as ze,
  fd as Be,
  fv as Ve,
  fy as He,
  ga as Ue,
  gn as We,
  hn as Ge,
  jc as k,
  jt as A,
  kt as Ke,
  kv as qe,
  ln as Je,
  ly as j,
  ny as Ye,
  py as Xe,
  qb as M,
  qt as N,
  s as P,
  ty as Ze,
  ua as Qe,
  un as $e,
  uv as et,
  wy as tt,
  xt as nt,
  yx as F,
  zt as I,
  zv as rt,
} from "./main.js";
var L = `giftee-hint-2`,
  it = 600;
function at() {
  let { data: e } = ot(),
    t = v(e?.nGifteeAccountID);
  return t.isLoading || !e?.nGifteeAccountID
    ? { gifteeHint: e, gifteePlayerDetails: void 0 }
    : t.data
      ? { gifteeHint: e, gifteePlayerDetails: t.data }
      : {
          gifteeHint: e,
          gifteePlayerDetails: {
            public_data: {
              steamid: E.InitFromAccountID(
                e.nGifteeAccountID,
                M.EUNIVERSE,
              ).ConvertTo64BitString(),
              persona_name: e.strPersonaName,
              sha_digest_avatar: e.rgAvatarDigest
                ? new Uint8Array(e.rgAvatarDigest)
                : void 0,
            },
          },
        };
}
function ot() {
  let e = He();
  return s({
    queryKey: [L],
    queryFn: async () => {
      let t = await e.GetObject(L);
      return t
        ? !t.rtCreated || t.rtCreated < Date.now() / 1e3 - it
          ? (await e.RemoveObject(L), null)
          : t
        : null;
    },
  });
}
function st() {
  let e = r(),
    t = He();
  return o({
    mutationFn: async (e) => {
      e
        ? await t.StoreObject(L, { ...e, rtCreated: Date.now() / 1e3 })
        : await t.RemoveObject(L);
    },
    onMutate: async (t) => {
      (await e.cancelQueries({ queryKey: [L] }),
        (t &&= { ...t, rtCreated: Date.now() / 1e3 }),
        e.setQueryData([L], t));
    },
  });
}
var R = e(t(), 1);
async function ct(e, t, n, r, i, a) {
  if (I(t)) {
    let t = F.Init(ve);
    (t.Body().set_line_item_id(n),
      t.Body().set_user_country(D.country_code),
      i && t.Body().set_gift_info(O.fromObject(i)),
      r && t.Body().set_flags(fe.fromObject(r)),
      a && t.Body().set_apply_gidcoupon(a));
    let o = await he.ModifyLineItem(e, t);
    return (
      o.BSuccess() ||
        console.warn(`Failed to update gift info: ${o.GetEResult()}`),
      [o.GetEResult(), o.Body().toObject()]
    );
  }
  {
    let a = F.Init(ye);
    (a.Body().set_gidlineitem(n),
      a.Body().set_gidshoppingcart(t.gid),
      i
        ? a.Body().set_gift_info(O.fromObject(i))
        : r?.is_gift &&
          a
            .Body()
            .set_gift_info(
              O.fromObject({ accountid_giftee: 0, email_giftee: `` }),
            ));
    let o = await Te.ModifyLineItem(e, a);
    return (
      o.BSuccess() ||
        console.warn(
          `Failed to update gift info in anonymous cart: ${o.GetEResult()}`,
        ),
      o.Body().toObject()
    );
  }
}
function lt() {
  let e = N(),
    t = j(),
    n = r(),
    i = Ke(e);
  return o({
    mutationFn: (n) =>
      ct(t, e, n.lineItemID, n.lineItemFlags, n.giftInfo, n.gidCoupon),
    onMutate: async (e) => {
      await n.cancelQueries({ queryKey: i });
      let t = n.getQueryData(i);
      return (
        n.setQueryData(i, (t) => ({
          ...(t ?? {}),
          line_items:
            t?.line_items?.map((t) =>
              t.line_item_id === e.lineItemID
                ? {
                    ...t,
                    flags: e.lineItemFlags || t.flags,
                    gift_info: e.giftInfo || t.gift_info,
                  }
                : t,
            ) ?? [],
        })),
        { previousCart: t }
      );
    },
    onSuccess: (t) => {
      `cart` in t ? A(n, e, t.cart) : se(n, e);
    },
    onError: (e, t, r) => {
      r?.previousCart && n.setQueryData(i, r.previousCart);
    },
  });
}
var z = {};
((z.arabic = () =>
  x(() => import(`./chunk~7cee05f3ac.js`), [], import.meta.url)),
  (z.brazilian = () =>
    x(() => import(`./chunk~f179f0051c.js`), [], import.meta.url)),
  (z.bulgarian = () =>
    x(() => import(`./chunk~e0a362cb2d.js`), [], import.meta.url)),
  (z.czech = () =>
    x(() => import(`./chunk~ee2f196785.js`), [], import.meta.url)),
  (z.danish = () =>
    x(() => import(`./chunk~62de726fa8.js`), [], import.meta.url)),
  (z.dutch = () =>
    x(() => import(`./chunk~6ae9700ce5.js`), [], import.meta.url)),
  (z.english = () =>
    x(() => import(`./chunk~9334e87f1a.js`), [], import.meta.url)),
  (z.finnish = () =>
    x(() => import(`./chunk~d8f81c5046.js`), [], import.meta.url)),
  (z.french = () =>
    x(() => import(`./chunk~a97f705623.js`), [], import.meta.url)),
  (z.german = () =>
    x(() => import(`./chunk~407f64ce1f.js`), [], import.meta.url)),
  (z.greek = () =>
    x(() => import(`./chunk~e78b4d303b.js`), [], import.meta.url)),
  (z.hungarian = () =>
    x(() => import(`./chunk~551560e0c8.js`), [], import.meta.url)),
  (z.indonesian = () =>
    x(() => import(`./chunk~ec6a478aac.js`), [], import.meta.url)),
  (z.italian = () =>
    x(() => import(`./chunk~ecbefccb6f.js`), [], import.meta.url)),
  (z.japanese = () =>
    x(() => import(`./chunk~1ea9d974d0.js`), [], import.meta.url)),
  (z.koreana = () =>
    x(() => import(`./chunk~dd01be5679.js`), [], import.meta.url)),
  (z.latam = () =>
    x(() => import(`./chunk~3cf6a976c0.js`), [], import.meta.url)),
  (z.malay = () =>
    x(() => import(`./chunk~ff05d37668.js`), [], import.meta.url)),
  (z.norwegian = () =>
    x(() => import(`./chunk~f4ddb387ab.js`), [], import.meta.url)),
  (z.polish = () =>
    x(() => import(`./chunk~9df483d4cc.js`), [], import.meta.url)),
  (z.portuguese = () =>
    x(() => import(`./chunk~12b9ca17e3.js`), [], import.meta.url)),
  (z.romanian = () =>
    x(() => import(`./chunk~ee6cbe56a9.js`), [], import.meta.url)),
  (z.russian = () =>
    x(() => import(`./chunk~f65c477f24.js`), [], import.meta.url)),
  (z.sc_schinese = () =>
    x(() => import(`./chunk~4fbc663433.js`), [], import.meta.url)),
  (z.schinese = () =>
    x(() => import(`./chunk~9e2989419c.js`), [], import.meta.url)),
  (z.spanish = () =>
    x(() => import(`./chunk~e4bf3c4156.js`), [], import.meta.url)),
  (z.swedish = () =>
    x(() => import(`./chunk~2b20edaf88.js`), [], import.meta.url)),
  (z.tchinese = () =>
    x(() => import(`./chunk~34d3edc4aa.js`), [], import.meta.url)),
  (z.thai = () =>
    x(() => import(`./chunk~a73053e7a4.js`), [], import.meta.url)),
  (z.turkish = () =>
    x(() => import(`./chunk~2674defa38.js`), [], import.meta.url)),
  (z.ukrainian = () =>
    x(() => import(`./chunk~d90a03c418.js`), [], import.meta.url)),
  (z.vietnamese = () =>
    x(() => import(`./chunk~3d7a718a85.js`), [], import.meta.url)));
async function ut(e) {
  if (z[e]) return await z[e]();
}
var B = Ce(ut);
function dt() {
  return Ie(B);
}
var V = i(),
  ft = R.createContext({ step: `initial`, setStep: () => {} });
function pt() {
  return (0, R.useContext)(ft);
}
function mt() {
  let e = pt();
  return [e.cartWideGiftInfo, e.onCartWideGiftInfoChange];
}
var ht = {
    include_basic_info: !0,
    include_assets: !0,
    include_platforms: !0,
    include_release: !0,
    include_included_items: !0,
  },
  gt = {
    ...ht,
    include_included_items: !0,
    include_all_purchase_options: !0,
    included_item_data_request: ht,
  };
function _t() {
  let e = j(),
    t = N(),
    [n] = mt(),
    { storeBrowseContext: r, cacheStoreItemData: i } = Re();
  return s(vt(e, t, r, n, i));
}
function vt(e, t, n, r, i) {
  return {
    queryKey: we(t, r),
    queryFn: async () => yt(e, t, n, r, gt, i),
    staleTime: 1 / 0,
    enabled: D.logged_in || !I(t),
  };
}
async function yt(e, t, n, r, i, a) {
  let o = F.Init(Je);
  (le(t) || Oe(t) || ke(t)
    ? (o.Body().set_gidshoppingcart(t.gid),
      r && o.Body().set_gift_info(O.fromObject(r)))
    : me(t) && o.Body().set_gidreplayoftransid(t.gid),
    Ze(n, o),
    i && Ye(o, i));
  let s = await $e.ValidateCart(e, o);
  if (
    (s.BSuccess() ||
      console.warn(`Failed to validate shopping cart: ${s.GetEResult()}`),
    i && a)
  )
    for (let e of s.Body().cart_items()) a(e.store_item(), i);
  return s.Body().toObject();
}
function bt() {
  let e = j(),
    t = Xe();
  return s(xt(e, t));
}
function xt(e, t) {
  return {
    queryKey: [`GetFriendsList`, t],
    queryFn: async () => {
      let t = F.Init(ie);
      return (await re.GetFriendsList(e, t))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((e) => {
          if (!e.ulfriendid()) return !1;
          let t = new E(e.ulfriendid());
          return (
            (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
            t.BIsIndividualAccount()
          );
        })
        .map((e) => e.ulfriendid());
    },
    enabled: !!t,
  };
}
var H = e(n(), 1),
  St = `uOP1ZkYNoFQ-`,
  Ct = {
    direction: `right`,
    style: { width: `320px`, height: `${(125 / 184) * 320}px` },
  };
function U(e) {
  let { name_override: t, ...n } = e,
    { data: r } = w(t ? void 0 : n),
    i = t ?? r?.name;
  return (0, V.jsx)(d, {
    id: n,
    hoverProps: Ct,
    name: i,
    className: St,
    bShowWishlistButton: !1,
    children: i,
  });
}
var wt = `_9S-gQP3e12M-`,
  Tt = `NJNFsZf9YrI-`,
  Et = `yFHYAHoPEy8-`,
  Dt = `aQXIxE2O-bw-`,
  Ot = `zE-2vFloBXg-`,
  kt = `J5uOz7I-g34-`,
  At = `a-PBsBWN7Ew-`,
  jt = `NLDpkX2-k0Y-`,
  Mt = `_6R2xLnrhkc4-`,
  Nt = `z66txPTkjOk-`,
  Pt = `haDNiI9PDxc-`,
  Ft = `-CYOytt4xeQ-`,
  It = `hL9xW9hmCcM-`,
  Lt = `NJvD2dQAdEE-`,
  W = `Q-SR0Ngi7UY-`,
  G = `g0ewCCmscXQ-`,
  Rt = `PcWMqwHyN0w-`,
  zt = `YZ2FSdnFGNg-`,
  Bt = `-gvj4rjzEMk-`,
  Vt = `-Lo4RVrld3g-`,
  Ht = `sqWiZ3b7qNM-`,
  Ut = `_2nsTn7Qpi44-`,
  Wt = `vvbx2mm1tEg-`,
  Gt = `XnArREOl6S0-`,
  Kt = `mnKMNo5wbDI-`,
  qt = `mkK-nN-gPGA-`,
  Jt = `-RJKTpjhcpU-`;
function Yt(e) {
  let { scrollable: t = !1, children: n } = e;
  return (0, V.jsx)(t ? We : k, {
    className: (0, H.default)(wt, t && `B6f9D7PKzn0-`),
    focusableIfEmpty: !0,
    children: n,
  });
}
function K(e) {
  let { text: t, children: n, className: r, noWrap: i } = e;
  return (0, V.jsx)(k, {
    "flow-children": `row`,
    className: (0, H.default)(Ft, t && `mvfriedG5SI-`, i && `JZyr8vKCuBY-`, r),
    children: n,
  });
}
var Xt = R.createContext(!1);
function q(e) {
  let { placeholder: t, className: n, children: r } = e,
    i = R.useContext(Xt);
  return (0, V.jsx)(Ge, {
    className: (0, H.default)(
      Tt,
      t && `_2oROE-3IZEQ-`,
      i && !t && `rgdhFhG-mQI-`,
      n,
    ),
    children: r,
  });
}
function J() {
  return (0, V.jsx)(q, { placeholder: !0, children: (0, V.jsx)(Y, {}) });
}
function Y() {
  return (0, V.jsx)(`div`, {
    className: Ht,
    children: (0, V.jsx)(_, {
      size: `medium`,
      position: `center`,
      msDelayAppear: 250,
    }),
  });
}
function X(e) {
  let { children: t } = e;
  return (0, V.jsx)(K, {
    text: !0,
    children: (0, V.jsx)(`div`, { className: Vt, children: t }),
  });
}
function Zt(e) {
  if (e.coupon_applied) return e.coupon_applied.discount_pct;
  let t = parseInt(e.original_price.amount_in_cents),
    n = parseInt(e.subtotal.amount_in_cents);
  return Math.min(99, Math.floor(((t - n) / t) * 100 + 0.5));
}
var Qt = (function (e) {
    return (
      (e[(e.k_ECartDisplayType_Unknown = 0)] = `k_ECartDisplayType_Unknown`),
      (e[(e.k_ECartDisplayType_Modal = 1)] = `k_ECartDisplayType_Modal`),
      (e[(e.k_ECartDisplayType_FullPage = 2)] = `k_ECartDisplayType_FullPage`),
      e
    );
  })({}),
  Z = R.createContext({
    rgCartLevelNotices: [],
    mapValidateNoticesToFootnote: new Map(),
    eDisplayType: 0,
  });
function $t(e) {
  let { validateCart: t, eDisplayType: n, children: r } = e,
    i = un(t, n);
  return (0, V.jsx)(Z.Provider, { value: i, children: r });
}
function en(e) {
  return R.useContext(Z)?.mapValidateNoticesToFootnote.get(e)?.index;
}
function tn() {
  return R.useContext(Z)?.eDisplayType ?? 0;
}
function nn(e) {
  let { lineItem: t } = e,
    n = tn(),
    { bShowValidationNotices: r } = pe();
  if (!r) return null;
  let i = [],
    a = !!t.gift_info?.accountid_giftee;
  return (
    t.errors?.duplicate_appids_in_cart?.length &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 1,
            notice_text: B.Localize(`#Cart_Error_DuplicateApps_LineItem`),
            appids: t.errors.duplicate_appids_in_cart,
          },
          `duplicate_appids`,
        ),
      ),
    i.push((0, V.jsx)(cn, { lineItem: t }, `owned_apps`)),
    t.errors?.unavailable_in_country &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 8,
            notice_text: B.Localize(`#Cart_Error_UnavailableCountry_LineItem`),
          },
          `unavailable_in_country`,
        ),
      ),
    t.errors?.adult_content_restricted &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 17,
            notice_text: B.Localize(
              `#Cart_Error_AdultContentRestricted_LineItem`,
            ),
          },
          `adult_content_restricted`,
        ),
      ),
    t.errors?.commercial_license_restricted &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 18,
            notice_text: B.Localize(
              `#Cart_Error_CommercialLicenseRestricted_LineItem`,
            ),
          },
          `commercial_license_restricted`,
        ),
      ),
    t.errors?.gift_not_valid_for_recipient_region &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 19,
            notice_text: B.Localize(`#Cart_Error_GiftRecipientInvalid`),
          },
          `gift_recipient_invalid`,
        ),
      ),
    i.push((0, V.jsx)(ln, { lineItem: t }, `coupon_notices`)),
    t.errors?.too_many_in_cart &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 14,
            notice_text: B.Localize(`#Cart_Error_TooManyInCart`),
          },
          `too_many_in_cart`,
        ),
      ),
    t.errors?.missing_must_own_appids?.length &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 16,
            notice_text: a
              ? B.Localize(`#Cart_Error_MissingMustOwnApps_GiftLineItem`)
              : B.Localize(`#Cart_Error_MissingMustOwnApps_LineItem`),
            appids: t.errors.missing_must_own_appids,
          },
          `missing_must_own_appids`,
        ),
      ),
    t.warnings?.appids_in_mastersub?.length &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 4,
            notice_text: B.Localize(`#Cart_Error_MasterSubscription_LineItem`),
            appids: t.warnings.appids_in_mastersub.flatMap((e) =>
              e.cart_appid ? [e.cart_appid] : [],
            ),
          },
          `appids_in_mastersub`,
        ),
      ),
    t.warnings?.owned_appids?.length &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 3,
            notice_text: B.Localize(`#Cart_Warning_AlreadyOwned_LineItem`),
            appids: t.warnings.owned_appids,
          },
          `owned_appids`,
        ),
      ),
    t.warnings?.owned_appids_extra_copy?.length &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 9,
            notice_text: B.Localize(`#Cart_Warning_ExtraCopies_LineItem`),
            appids: t.warnings.owned_appids_extra_copy,
          },
          `owned_appids_extra_copy`,
        ),
      ),
    t.warnings?.price_has_changed &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 10,
            notice_text: B.Localize(`#Cart_Warning_PriceChange_LineItem`),
          },
          `price_has_changed`,
        ),
      ),
    t.warnings?.non_refundable &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 5,
            notice_text: B.Localize(`#Cart_Warning_NoRefund_LineItem`),
          },
          `non_refundable`,
        ),
      ),
    t.warnings?.gift_recipient_higher_price &&
      i.push(
        (0, V.jsx)(
          Q,
          {
            purchase_state: 20,
            notice_text: B.Localize(`#Cart_Warning_RecipientHigherPrice`),
          },
          `gift_recipient_higher_price`,
        ),
      ),
    i.push((0, V.jsx)(on, { lineItem: t }, `available_cheaper`)),
    a &&
      n !== 2 &&
      i.push(
        (0, V.jsx)(
          sn,
          { nGifteeAccountID: t.gift_info.accountid_giftee },
          `non_friend_gift`,
        ),
      ),
    i
  );
}
function Q(e) {
  let { purchase_state: t, notice_text: n, appids: r } = e,
    i = en(t),
    a = tn() === 2 && !!i;
  return (0, V.jsxs)(X, {
    children: [
      n,
      a && (0, V.jsx)(`sup`, { children: i }),
      ` `,
      (0, V.jsx)(rn, { rgAppIDs: r ?? [] }),
    ],
  });
}
function rn(e) {
  let { rgAppIDs: t } = e;
  return !t || t.length == 0
    ? null
    : t.map((e, n) =>
        (0, V.jsx)(an, { appid: e, last: n >= t.length - 1 }, `${e}_${n}`),
      );
}
function an(e) {
  let { appid: t, last: n } = e,
    { data: r } = w({ appid: t });
  return r
    ? (0, V.jsxs)(V.Fragment, {
        children: [
          (0, V.jsx)(U, { appid: t, name_override: r.name }),
          !n && (0, V.jsx)(V.Fragment, { children: `, ` }),
        ],
      })
    : null;
}
function on(e) {
  let { lineItem: t } = e,
    { data: n } = Me(t.item_id),
    { data: r } = Se(t.item_id);
  if (t.gift_info?.accountid_giftee || !n || !r || Pe(n, r)) return null;
  let i = r.packageid ? { packageid: r.packageid } : { bundleid: r.bundleid };
  return (0, V.jsx)(X, {
    children: B.LocalizeReact(
      `#Cart_Warning_AvailableAtALowerPrice`,
      (0, V.jsx)(U, { ...i, name_override: r.purchase_option_name }),
    ),
  });
}
function sn(e) {
  let { nGifteeAccountID: t } = e,
    n = E.InitFromAccountID(t, M.EUNIVERSE).ConvertTo64BitString(),
    { data: r } = bt();
  return R.useMemo(() => !r || r.includes(n), [r, n]) || !D.logged_in
    ? null
    : (0, V.jsx)(X, { children: B.Localize(`#Cart_Warning_GiftToNonFriend`) });
}
function cn(e) {
  let { lineItem: t } = e;
  if (!t.errors?.owned_appids?.length) return null;
  let n = !!t.gift_info?.accountid_giftee;
  if (t.errors?.has_existing_billing_agreement)
    return (0, V.jsx)(Q, {
      purchase_state: 15,
      notice_text: B.Localize(`#Cart_Error_ExistingBillingAgreement`),
    });
  {
    let e = (t.store_item?.included_appids?.length ?? 0) > 1,
      r = B.Localize(
        n
          ? `#Cart_Error_AlreadyOwned_GiftLineItem_Game`
          : `#Cart_Error_AlreadyOwned_LineItem_Game`,
      );
    return (
      e &&
        (r = B.Localize(
          n
            ? `#Cart_Error_AlreadyOwned_GiftLineItem`
            : `#Cart_Error_AlreadyOwned_LineItem`,
        )),
      (0, V.jsx)(Q, {
        purchase_state: 2,
        notice_text: r,
        appids: e ? t.errors.owned_appids : void 0,
      })
    );
  }
}
function ln(e) {
  let { lineItem: t } = e;
  return (0, V.jsxs)(V.Fragment, {
    children: [
      t.errors?.coupon_exclusive_promo &&
        (0, V.jsx)(Q, {
          purchase_state: 13,
          notice_text: B.Localize(`#Cart_Error_CouponIsExclusivePromo`),
        }),
      t.errors?.invalid_coupon &&
        (0, V.jsx)(Q, {
          purchase_state: 11,
          notice_text: B.Localize(`#Cart_Error_CouponIsInvalid`),
        }),
      t.errors?.invalid_coupon_for_item &&
        (0, V.jsx)(Q, {
          purchase_state: 12,
          notice_text: B.Localize(`#Cart_Error_CouponIsInvalidForItem`),
        }),
    ],
  });
}
function un(e, t) {
  return R.useMemo(() => {
    let n = new Map(),
      r = new Map(),
      i = 1,
      a = (e, t) => {
        r.has(e) || r.set(e, { index: i++, footnote_text: t });
      },
      o = !1;
    e?.cart_items?.forEach((e) => {
      let t = !!e.gift_info?.accountid_giftee;
      (e.errors && (o = !0),
        e.errors?.duplicate_appids_in_cart?.length &&
          a(1, B.Localize(`#Cart_Error_DuplicateApps_FootNote`)),
        e.errors?.owned_appids?.length &&
          (e.errors?.has_existing_billing_agreement
            ? a(15, B.Localize(`#Cart_Error_ExistingBillingAgreement_FootNote`))
            : a(
                2,
                B.Localize(
                  t
                    ? `#Cart_Error_AlreadyOwned_GiftFootNote`
                    : `#Cart_Error_AlreadyOwned_FootNote`,
                ),
              )),
        e.errors?.unavailable_in_country &&
          a(8, B.Localize(`#Cart_Error_UnavailableCountry_FootNote`)),
        e.errors?.adult_content_restricted &&
          a(17, B.Localize(`#Cart_Error_AdultContentRestricted_FootNote`)),
        e.errors?.commercial_license_restricted &&
          a(18, B.Localize(`#Cart_Error_CommercialLicenseRestricted_FootNote`)),
        e.errors?.missing_must_own_appids?.length &&
          a(
            16,
            t
              ? B.Localize(`#Cart_Error_MissingMustOwnApps_FootNoteGift`)
              : B.Localize(`#Cart_Error_MissingMustOwnApps_FootNote`),
          ),
        e.warnings?.appids_in_mastersub?.length &&
          a(4, B.Localize(`#Cart_Error_MasterSubscription_FootNote`)),
        e.warnings?.price_has_changed &&
          n.set(10, B.Localize(`#Cart_Warning_PriceChange_FootNote`)));
    });
    let s = Array.from(n.values());
    return (
      o && s.unshift(B.Localize(`#Cart_CartLevelErrorNotice`)),
      {
        rgCartLevelNotices: s,
        mapValidateNoticesToFootnote: r,
        eDisplayType: t,
      }
    );
  }, [e, t]);
}
var dn = `Ph5BwsFNGeI-`,
  fn = `DITnbh5M7po-`,
  pn = `_5qeh0wu7wXY-`,
  mn = `_7ZqZOWW3Cpg-`,
  hn = `RJOUgXsXlfE-`,
  gn = `kckF4WosEgY-`,
  _n = `mmgq4IlPUK4-`,
  vn = `Da1FmLfrtGI-`,
  yn = `rD7WvZ-sx5A-`;
async function bn(e, t, n) {
  if (I(t)) {
    let t = F.Init(Ee);
    t.Body().set_line_item_id(n);
    let r = await he.RemoveItemFromCart(e, t);
    return (Be(), r.Body().toObject());
  }
  {
    let r = F.Init(xe);
    (r.Body().set_gidlineitems([n]), r.Body().set_gidshoppingcart(t.gid));
    let i = await Te.RemoveLineItems(e, r);
    return (Be(), i.Body().toObject());
  }
}
function $(e) {
  let t = j(),
    n = r(),
    i = N();
  return o({
    mutationFn: async () => await bn(t, i, e),
    onSuccess: (e) => {
      `cart` in e ? A(n, i, e.cart) : se(n, i);
    },
  });
}
function xn(e) {
  let {
      lineItems: t,
      cartValidation: n,
      bValidating: r = !1,
      renderLineItem: i = kn,
      scrollable: a = !1,
    } = e,
    [o] = R.useState(() => new Set(t.map((e) => e?.line_item_id)));
  if (!t.length) return (0, V.jsx)(wn, {});
  let s = n?.cart_items
    ? n.cart_items.reduce((e, t) => ((e[t.line_item_id] = t), e), {})
    : {};
  return (0, V.jsx)(Yt, {
    scrollable: a,
    children: t.map((e, t) =>
      e
        ? (0, V.jsx)(
            Xt.Provider,
            {
              value: !o.has(e.line_item_id),
              children: (0, V.jsx)(Ne, {
                fallback: (t) => (0, V.jsx)(Cn, { item: e, error: t }),
                children: (0, V.jsx)(Sn, {
                  item: e,
                  validatedItem: s[e.line_item_id],
                  bCartValidated: !!n && !r,
                  renderLineItem: i,
                }),
              }),
            },
            e.line_item_id || t,
          )
        : (0, V.jsx)(J, {}, t),
    ),
  });
}
function Sn(e) {
  let { item: t, validatedItem: n, bCartValidated: r, renderLineItem: i } = e,
    a = Tn(t);
  if (!a) throw `Unknown line item type (${t.type})`;
  let { data: o } = w(a),
    { data: s } = rt(a),
    { data: c } = Me(a),
    l = s ? T(s) : a;
  return (
    qe(l),
    _e(l),
    o && (!o.visible || c === null || (r && !n))
      ? (0, V.jsx)(Dn, {
          lineItemID: t.line_item_id,
          validatedItem: n,
          storeItem: o,
        })
      : !o || !s || !c || !n
        ? (0, V.jsx)(J, {})
        : (0, V.jsx)(En, {
            lineItem: t,
            validatedItem: n,
            storeItem: o,
            displayItem: s,
            purchaseOption: c,
            renderLineItem: i,
          })
  );
}
function Cn(e) {
  let { item: t, error: n } = e,
    r = $(t.line_item_id),
    i = C();
  return (0, V.jsxs)(q, {
    className: Ut,
    children: [
      (0, V.jsxs)(`div`, {
        className: Wt,
        children: [
          (0, V.jsx)(`div`, {
            className: Gt,
            children: B.Localize(`#Cart_LineItem_ErrorBoundary`),
          }),
          (0, V.jsx)(`div`, { className: Kt, children: n.message }),
        ],
      }),
      !i &&
        (0, V.jsx)(k, {
          onActivate: () => r.mutate(),
          className: `-j4iOb4uWn8-`,
          children: B.Localize(`#Cart_Remove`),
        }),
    ],
  });
}
function wn() {
  return (0, V.jsx)(q, {
    className: Ut,
    children: (0, V.jsx)(`div`, {
      className: Wt,
      children: (0, V.jsx)(`div`, {
        className: G,
        children: B.Localize(`#Cart_Empty`),
      }),
    }),
  });
}
function Tn(e) {
  let t = e.type;
  switch (t) {
    case 1:
      return { packageid: e.packageid };
    case 2:
      return { bundleid: e.bundleid };
    case 0:
      return;
    default:
      oe(t, `Unhandled type: ${t}`);
  }
}
function En(e) {
  let {
      storeItem: t,
      displayItem: n,
      lineItem: r,
      purchaseOption: i,
      validatedItem: a,
      renderLineItem: o,
    } = e,
    s = r.line_item_id,
    c = T(t),
    l = $(s),
    d = l.isPending || l.isSuccess,
    { data: f } = Ae(c),
    p = u(c),
    { data: m, isLoading: h } = te(),
    _ = R.useMemo(() => p.filter((e) => m?.has(e)), [p, m]),
    v = R.useId();
  if (h) return (0, V.jsx)(J, {});
  let ee = r.flags?.is_gift,
    y = p.length > 0 && _.length === p.length,
    b = !ee && _.length > 0 && !y;
  return o({
    lineItem: r,
    storeItem: t,
    validatedItem: a,
    children: (0, V.jsxs)(V.Fragment, {
      children: [
        d && (0, V.jsx)(Y, {}),
        (0, V.jsxs)(k, {
          className: (0, H.default)(Mt, d && `YLk5YkN8SWA-`),
          "flow-children": `row`,
          children: [
            (0, V.jsx)(`div`, {
              className: (0, H.default)(void 0, Dt),
              children: (0, V.jsx)(nt, {
                storeItem: n,
                feature: `cart-items`,
                noImpressionTracking: !0,
                className: Et,
                children: (0, V.jsx)(On, {
                  storeItem: n,
                  alt: t.name,
                  blurred: !!a.errors?.adult_content_restricted,
                }),
              }),
            }),
            (0, V.jsxs)(`div`, {
              className: Nt,
              children: [
                (0, V.jsx)(K, {
                  className: Lt,
                  children: (0, V.jsx)(`div`, {
                    className: G,
                    id: v,
                    children: t.name,
                  }),
                }),
                f?.is_coming_soon && (0, V.jsx)(jn, { storeItem: t }),
                (0, V.jsxs)(An, {
                  validatedItem: a,
                  children: [
                    (0, V.jsx)(Fn, { storeItem: t, purchaseOption: i }),
                    (0, V.jsx)(In, { purchaseOption: i }),
                    (0, V.jsx)(Rn, { storeItem: t, purchaseOption: i }),
                  ],
                }),
                (0, V.jsx)(Hn, { validatedItem: a }),
                b && (0, V.jsx)(Un, { appids: _ }),
                (0, V.jsxs)(K, {
                  className: W,
                  children: [
                    (0, V.jsx)(`div`, {
                      className: (0, H.default)(Pt, Rt),
                      children: (0, V.jsx)(g, { id: T(n) }),
                    }),
                    (0, V.jsx)(Mn, { purchaseOption: i, validatedItem: a }),
                  ],
                }),
                (0, V.jsx)(Nn, {
                  lineItem: r,
                  purchaseOption: i,
                  validatedItem: a,
                  rgAppIDs: p,
                  bAllAppsPrivate: y,
                  fnRemoveLineItem: l.mutate,
                  accessibilityId: v,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Dn(e) {
  let { lineItemID: t, validatedItem: n, storeItem: r } = e,
    i = $(t),
    a = C(),
    o = i.isPending;
  return (0, V.jsxs)(q, {
    placeholder: !0,
    children: [
      o && (0, V.jsx)(Y, {}),
      (0, V.jsxs)(k, {
        className: (0, H.default)(Mt, o && `YLk5YkN8SWA-`),
        "flow-children": `row`,
        children: [
          (0, V.jsx)(`div`, {
            className: (0, H.default)(void 0, Dt),
            children: (0, V.jsx)(nt, {
              storeItem: r,
              noImpressionTracking: !0,
              children: (0, V.jsx)(On, { storeItem: r }),
            }),
          }),
          (0, V.jsxs)(`div`, {
            className: Nt,
            children: [
              (0, V.jsx)(K, {
                className: Lt,
                children: (0, V.jsx)(`div`, {
                  className: G,
                  children: r?.name,
                }),
              }),
              !!n && (0, V.jsx)(An, { validatedItem: n }),
              !a &&
                (0, V.jsx)(K, {
                  className: `Q-SR0Ngi7UY-`,
                  children: (0, V.jsx)(k, {
                    focusable: !0,
                    onActivate: () => i.mutate(),
                    className: `JyfzQzsaL08-`,
                    children: B.Localize(`#Cart_Remove`),
                  }),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function On(e) {
  let { storeItem: t, alt: n, blurred: r } = e,
    { data: i } = qe(T(t)),
    a = `${M.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
  return (
    i?.header
      ? (a =
          M.STORE_ITEM_BASE_URL +
          i.asset_url_format.replace("${FILENAME}", i.header))
      : i?.small_capsule &&
        (a =
          M.STORE_ITEM_BASE_URL +
          i.asset_url_format.replace("${FILENAME}", i.small_capsule)),
    (0, V.jsx)(`img`, { alt: n ?? t.name, className: r ? kt : Ot, src: a })
  );
}
function kn(e) {
  return (0, V.jsx)(k, { children: (0, V.jsx)(q, { children: e.children }) });
}
function An(e) {
  let { validatedItem: t, children: n } = e;
  return (0, V.jsxs)(`div`, {
    className: W,
    children: [(0, V.jsx)(nn, { lineItem: t }), n],
  });
}
function jn(e) {
  let { storeItem: t } = e,
    { data: n } = Ae(T(t)),
    r = l(n);
  if (!n) return null;
  let i = B.Localize(`#Cart_ComingSoon`, r);
  return (
    [`text_tba`, `text_comingsoon`].includes(n.coming_soon_display) && (i = r),
    (0, V.jsx)(X, { children: i })
  );
}
function Mn(e) {
  let { purchaseOption: t, validatedItem: n } = e,
    r = Fe(t),
    i = r?.strOriginalPrice ?? t?.formatted_original_price,
    a = t?.formatted_final_price,
    o = r?.nDiscountPct ?? t?.discount_pct,
    s = n.subtotal?.amount_in_cents !== t?.final_price_in_cents;
  return (
    n.original_price &&
      n.subtotal &&
      s &&
      ((i = n.original_price.formatted_amount),
      (a = n.subtotal.formatted_amount),
      (o = Zt(n))),
    (0, V.jsx)(`div`, {
      className: jt,
      children: (0, V.jsx)(y, {
        className: Bt,
        formatted_orig_price: i,
        formatted_final_price: a,
        discount_percent: o,
        bundle_discount_percent: t.bundle_discount_pct,
        bHideDiscountPercentForCompliance: t.hide_discount_pct_for_compliance,
        bDiscountFromCoupon: !!n.coupon_discount?.amount_in_cents,
      }),
    })
  );
}
function Nn(e) {
  let {
      lineItem: t,
      purchaseOption: n,
      validatedItem: r,
      rgAppIDs: i,
      bAllAppsPrivate: a,
      fnRemoveLineItem: o,
      accessibilityId: s,
    } = e,
    l = C(),
    [u] = mt(),
    d = u?.accountid_giftee || (l ? t.gift_info?.accountid_giftee : void 0),
    f = N(),
    p = je() && !r?.restrict_add_additional_to_cart && !le(f),
    m = r.errors?.adult_content_restricted,
    h = c(t.packageid, t.bundleid, zn(n), void 0, `cart-add-additional`),
    g = R.useId(),
    _ = R.useId();
  return (0, V.jsxs)(K, {
    className: W,
    children: [
      (0, V.jsx)(`div`, {
        className: (0, H.default)(Pt, zt),
        children: d
          ? (0, V.jsx)(Pn, { recipient: d })
          : (0, V.jsx)(Vn, {
              lineItem: t,
              rgAppIDs: i,
              bAllAppsPrivate: a,
              purchaseOption: n,
            }),
      }),
      (0, V.jsxs)(`div`, {
        className: (0, H.default)(jt, At),
        children: [
          p &&
            (0, V.jsxs)(V.Fragment, {
              children: [
                (0, V.jsx)(ce, {
                  toolTipContent: B.Localize(`#Cart_LineItem_Add_Tooltip`),
                  usePointerEvents: !0,
                  children: (0, V.jsx)(k, {
                    onActivate: () => !h.isPending && h.mutate(),
                    className: `TIoqnPCGd54-`,
                    id: g,
                    "aria-labelledby": `${g} ${s}`,
                    children: B.Localize(`#Cart_Add`),
                  }),
                }),
                `|`,
              ],
            }),
          !l &&
            (0, V.jsx)(k, {
              onActivate: () => o(),
              className: `JyfzQzsaL08-`,
              id: _,
              "aria-labelledby": `${_} ${s}`,
              children: B.Localize(`#Cart_Remove`),
            }),
          m &&
            (0, V.jsxs)(V.Fragment, {
              children: [
                `| `,
                (0, V.jsx)(`a`, {
                  href: `${M.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                  className: `SWPhz00mDeg-`,
                  children: B.Localize(`#Cart_Verify`),
                }),
                ` `,
              ],
            }),
        ],
      }),
    ],
  });
}
function Pn(e) {
  let { data: t } = v(e.recipient),
    n = t?.public_data?.persona_name;
  return (0, V.jsx)(`div`, {
    className: qt,
    children: B.LocalizeReact(
      `#Cart_GiftForNotice`,
      n ? (0, V.jsx)(`span`, { className: Jt, children: n }) : ``,
    ),
  });
}
function Fn(e) {
  let { storeItem: t, purchaseOption: n } = e,
    r = !!n.requires_shipping && t.item_type === 1,
    { data: i } = m(r ? t.id : void 0);
  return i
    ? (0, V.jsx)(X, {
        children: B.Localize(`#Cart_ShippingEstimate_DeliveryDate`, b(i)),
      })
    : null;
}
function In(e) {
  let { purchaseOption: t } = e;
  if (!t.requires_shipping) return null;
  let n = D.country_code;
  return [`GB`].includes(n)
    ? (0, V.jsx)(X, {
        children: (0, V.jsx)(k, {
          children: (0, V.jsx)(`a`, {
            className: It,
            target: `_blank`,
            href: `https://www.valvesoftware.com/legal/statement-of-compliance`,
            rel: `noreferrer`,
            children: B.Localize(`#Cart_LineItem_Hardware_Compliance_Label`),
          }),
        }),
      })
    : null;
}
var Ln = {
  1: `Second`,
  2: `Minute`,
  3: `Hour`,
  4: `Day`,
  5: `Week`,
  6: `Month`,
  7: `Year`,
};
function Rn(e) {
  let { storeItem: t, purchaseOption: n } = e;
  if (t.item_type !== 1) return null;
  let r = n.recurrence_info;
  if (!r) return null;
  let i = `#Package`;
  (r.billing_agreement_type === 2 && (i = `#GameBillingPackage`),
    n.formatted_final_price && n.discount_pct && (i += `WithDiscount`));
  let a = Ln[r.renewal_time_unit],
    o = i + `CostIncludesSubscriptionBy` + a;
  return (0, V.jsx)(X, {
    children: B.Localize(
      o,
      n.formatted_final_price,
      r.formatted_renewal_price,
      r.renewal_time_period,
      n.discount_pct,
    ),
  });
}
function zn(e) {
  return e.user_can_purchase_as_gift;
}
function Bn(e) {
  return !e.is_commercial_license && !e.requires_shipping;
}
function Vn(e) {
  let { lineItem: t, rgAppIDs: n, bAllAppsPrivate: r, purchaseOption: i } = e,
    a = lt(),
    o = ne(),
    s = C(),
    { bShowPurchaseOptionPicker: c } = pe(),
    { data: l } = v(
      t.gift_info?.accountid_giftee ? t.gift_info.accountid_giftee : null,
    );
  if (!c) return null;
  let u = !zn(i) || s,
    d = !Bn(i),
    f = [{ data: `myself`, label: B.Localize(`#Cart_LineItemOptions_Myself`) }];
  if (
    (d ||
      f.push({
        data: `private`,
        label: B.Localize(`#Cart_LineItemOptions_Privately`),
        tooltip: B.Localize(`#Cart_LineItemOptions_PrivateTooltip`),
      }),
    !u)
  ) {
    let e = l?.public_data?.persona_name;
    t.gift_info?.accountid_giftee && e
      ? f.push({
          data: `gift`,
          label: B.Localize(`#Cart_LineItemOptions_GiftForPersona`, e),
        })
      : f.push({
          data: `gift`,
          label: B.Localize(`#Cart_LineItemOptions_Gift`),
        });
  }
  let p = t.flags?.is_gift ? `gift` : `myself`;
  return (
    p === `myself` && r && (p = `private`),
    f.length === 1
      ? null
      : (0, V.jsx)(be, {
          onSelectionChange: (e) => {
            if (p === e.data) return;
            let r = (e) => o.mutate({ rgAppIDs: n, bPrivate: e }),
              i = (e) =>
                a.mutate({
                  lineItemID: t.line_item_id,
                  lineItemFlags: { ...t.flags, is_gift: e },
                  giftInfo: e ? t.gift_info : void 0,
                });
            (p === `private` ? r(!1) : p === `gift` && i(!1),
              e.data === `private` ? r(!0) : e.data === `gift` && i(!0));
          },
          selectedValue: f.find((e) => e.data === p) ?? null,
          options: f,
          getOptionLabel: (e) =>
            e.tooltip
              ? (0, V.jsx)(ce, {
                  toolTipContent: e.tooltip,
                  usePointerEvents: !0,
                  children: (0, V.jsx)(`span`, { children: e.label }),
                })
              : e.label,
          size: `1`,
          placement: `bottom-start`,
        })
  );
}
var Hn = R.memo(function (e) {
  let { validatedItem: t } = e,
    n = t.included_packageids ?? [],
    r = et(),
    i = a({ queries: n.map((e) => Ve(r, { packageid: e })) }),
    o = [
      ...new Set(
        i
          .map((e) => e.data)
          .filter((e) => !!e)
          .flat(),
      ),
    ];
  return !o.length || (o.length == 1 && !t.item_id?.bundleid)
    ? null
    : (0, V.jsxs)(K, {
        text: !0,
        children: [
          (0, V.jsxs)(`span`, {
            children: [
              B.LocalizePlural(`#Cart_IncludesItems`, o.length),
              `:`,
              ` `,
            ],
          }),
          o.map((e, t) =>
            (0, V.jsxs)(
              R.Fragment,
              { children: [t > 0 && `, `, (0, V.jsx)(U, { appid: e })] },
              e,
            ),
          ),
        ],
      });
});
function Un(e) {
  let { appids: t } = e,
    n = t.map((e, t) =>
      (0, V.jsxs)(
        R.Fragment,
        { children: [t > 0 && `, `, (0, V.jsx)(U, { appid: e })] },
        e,
      ),
    );
  return (0, V.jsxs)(K, {
    children: [
      (0, V.jsxs)(`span`, {
        children: [B.Localize(`#Cart_Notice_SomeAppsPrivate`), `\xA0`],
      }),
      n,
    ],
  });
}
function Wn(e) {
  let { closeCart: t, lineItemIDs: n, bPackagesReplaced: r } = e,
    i = dt(),
    { data: a } = de(),
    { data: o, isFetching: s } = _t(),
    c = ze(n),
    l = ge(`${M.STORE_BASE_URL}cart/`);
  if (
    (R.useEffect(() => {
      c && c?.length == 0 && t();
    }, [c, t]),
    !c || !i)
  )
    return null;
  let u = B.Localize(r ? `#Cart_UpdatedYourCart` : `#Cart_AddedToYourCart`);
  return (0, V.jsx)($t, {
    validateCart: o,
    eDisplayType: Qt.k_ECartDisplayType_Modal,
    children: (0, V.jsx)(h, {
      onClose: t,
      navID: `CartModal`,
      strTitle: u,
      children: (0, V.jsxs)(k, {
        className: dn,
        "flow-children": `column`,
        children: [
          (0, V.jsx)(xn, {
            lineItems: c,
            cartValidation: o,
            bValidating: s,
            scrollable: !0,
          }),
          (0, V.jsx)(Kn, { lineItems: c, cartValidation: o }),
          (0, V.jsxs)(k, {
            className: fn,
            children: [
              (0, V.jsx)(f, {
                onClick: t,
                children: B.Localize(`#Cart_ContinueShopping`),
              }),
              (0, V.jsx)(p, {
                autoFocus: !0,
                href: l,
                children: B.Localize(
                  `#Cart_ViewMyCart`,
                  a?.line_items?.length ?? c.length,
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Gn(e) {
  let { result: t, onDismiss: n } = e;
  return dt()
    ? (0, V.jsx)(h, {
        onClose: n,
        navID: `CartErrorModal`,
        strTitle: S.Localize(`#Error_Generic`),
        children: (0, V.jsxs)(`div`, {
          className: gn,
          children: [
            (0, V.jsx)(`div`, {
              className: _n,
              children: B.Localize(`#Cart_ErrorUpdating`),
            }),
            (0, V.jsx)(`div`, {
              className: yn,
              children: t ? B.Localize(`#Cart_ErrorCode`, t) : ``,
            }),
            (0, V.jsx)(`div`, {
              className: vn,
              children: (0, V.jsx)(f, {
                autoFocus: !0,
                onClick: n,
                children: S.Localize(`#Button_Close`),
              }),
            }),
          ],
        }),
      })
    : null;
}
function Kn(e) {
  let { cartValidation: t, lineItems: n } = e,
    r = R.useRef(!1),
    [i, a] = R.useState(!1),
    { gifteeHint: o, gifteePlayerDetails: s } = at(),
    c = C(),
    l = st(),
    u = lt(),
    d = s?.public_data,
    f = t?.cart_items,
    p = !i && !!o?.nGifteeAccountID && !!d && !c && !!t?.cart_items;
  if (p) {
    let e = new Map(f.map((e) => [e.line_item_id, e]));
    p = !!n.find(
      (t) =>
        !t.gift_info?.accountid_giftee &&
        !!e.get(t.line_item_id)?.can_purchase_as_gift,
    );
  }
  if (
    (R.useEffect(() => {
      p && !r.current && (P()?.AddEvent(De), (r.current = !0));
    }, [p]),
    !p)
  )
    return null;
  let m = () => {
      (P()?.AddEvent(tt), l.mutate(null));
    },
    h = () => {
      for (let e of n)
        u.mutate({
          lineItemID: e.line_item_id,
          lineItemFlags: { is_gift: !0 },
          giftInfo: { ...e.gift_info, accountid_giftee: o.nGifteeAccountID },
          gidCoupon: e.gidcoupon_applied,
        });
      (l.mutate(o), a(!0), P()?.AddEvent(ue));
    },
    g = (0, V.jsxs)(`a`, {
      href: ae(s),
      target: `_blank`,
      rel: `noreferrer`,
      children: [
        (0, V.jsx)(ee, {
          size: `X-Small`,
          statusPosition: `right`,
          playerLinkDetails: s,
          alt: d.persona_name ?? ``,
        }),
        (0, V.jsx)(`div`, { className: hn, children: d.persona_name }),
      ],
    });
  return (0, V.jsxs)(Ue, {
    className: pn,
    align: `center`,
    gap: `3`,
    direction: `row`,
    justify: `center`,
    children: [
      (0, V.jsx)(Le, {
        as: `div`,
        align: `center`,
        className: mn,
        children: B.LocalizeReact(`#Cart_GifteeHint_Wishlist`, g),
      }),
      (0, V.jsxs)(Ue, {
        gap: `2`,
        direction: `row`,
        align: `center`,
        children: [
          (0, V.jsx)(Qe, {
            size: `1`,
            color: `dull`,
            onClick: m,
            children: S.Localize(`#Button_No`),
          }),
          (0, V.jsx)(Qe, {
            size: `1`,
            onClick: h,
            children: S.Localize(`#Button_Yes`),
          }),
        ],
      }),
    ],
  });
}
export { Gn as CartErrorModal, Wn as default };

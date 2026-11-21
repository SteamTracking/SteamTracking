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
  $n as c,
  Fs as l,
  La as u,
  Pn as d,
  Ts as f,
  jn as p,
  ws as m,
} from "./chunk~6b8ddcaac8.js";
import { t as h } from "./chunk~b7e6359825.js";
import { n as g } from "./chunk~034b02d99f.js";
import { t as _ } from "./chunk~eefd71512b.js";
import { a as v, c as ee, r as y, u as te } from "./chunk~4180b1a25d.js";
import { r as ne, t as re } from "./chunk~c0171774da.js";
import { n as ie, t as ae } from "./chunk~73f829e6f9.js";
import { t as oe } from "./chunk~5e5f1b9ccf.js";
import {
  $v as b,
  At as se,
  Bc as x,
  Bt as ce,
  Cn as le,
  Ct as ue,
  Fb as S,
  Ft as de,
  Gt as fe,
  Hi as pe,
  Ht as C,
  Hv as me,
  Ib as w,
  It as he,
  Jr as ge,
  Jt as _e,
  Jv as ve,
  Kt as ye,
  Lb as be,
  Lt as xe,
  Mt as Se,
  My as Ce,
  Nt as we,
  Ny as Te,
  Ox as T,
  Pt as Ee,
  Py as De,
  Qt as Oe,
  Rt as ke,
  Rv as Ae,
  Sn as je,
  Sy as Me,
  Ta as Ne,
  Ut as Pe,
  Uv as E,
  Vt as Fe,
  Wt as Ie,
  Xt as D,
  Xv as Le,
  Xy as O,
  Yt as k,
  _a as Re,
  _n as ze,
  _v as Be,
  al as Ve,
  ax as A,
  ay as He,
  cS as Ue,
  dy as We,
  f as Ge,
  gn as Ke,
  jt as qe,
  nx as j,
  qt as Je,
  rd as Ye,
  s as M,
  sy as N,
  ty as Xe,
  uy as Ze,
  vn as P,
  vy as F,
  wt as Qe,
  xd as $e,
  xv as et,
  xy as tt,
  ya as nt,
  yv as rt,
  zt as it,
} from "./main.js";
var I = `giftee-hint-2`,
  at = 600;
function ot() {
  let { data: e } = st(),
    t = v(e?.nGifteeAccountID);
  return t.isLoading || !e?.nGifteeAccountID
    ? { gifteeHint: e, gifteePlayerDetails: void 0 }
    : t.data
      ? { gifteeHint: e, gifteePlayerDetails: t.data }
      : {
          gifteeHint: e,
          gifteePlayerDetails: {
            public_data: {
              steamid: O.InitFromAccountID(
                e.nGifteeAccountID,
                j.EUNIVERSE,
              ).ConvertTo64BitString(),
              persona_name: e.strPersonaName,
              sha_digest_avatar: e.rgAvatarDigest
                ? new Uint8Array(e.rgAvatarDigest)
                : void 0,
            },
          },
        };
}
function st() {
  let e = tt();
  return s({
    queryKey: [I],
    queryFn: async () => {
      let t = await e.GetObject(I);
      return t
        ? !t.rtCreated || t.rtCreated < Date.now() / 1e3 - at
          ? (await e.RemoveObject(I), null)
          : t
        : null;
    },
  });
}
function ct() {
  let e = r(),
    t = tt();
  return o({
    mutationFn: async (e) => {
      e
        ? await t.StoreObject(I, { ...e, rtCreated: Date.now() / 1e3 })
        : await t.RemoveObject(I);
    },
    onMutate: async (t) => {
      (await e.cancelQueries({ queryKey: [I] }),
        (t &&= { ...t, rtCreated: Date.now() / 1e3 }),
        e.setQueryData([I], t));
    },
  });
}
var L = e(t(), 1);
async function lt(e, t, n, r, i, a) {
  if (C(t)) {
    let t = T.Init(ce);
    (t.Body().set_line_item_id(n),
      t.Body().set_user_country(A.country_code),
      i && t.Body().set_gift_info(P.fromObject(i)),
      r && t.Body().set_flags(ke.fromObject(r)),
      a && t.Body().set_apply_gidcoupon(a));
    let o = await it.ModifyLineItem(e, t);
    return (
      o.BSuccess() ||
        console.warn(`Failed to update gift info: ${o.GetEResult()}`),
      [o.GetEResult(), o.Body().toObject()]
    );
  }
  {
    let a = T.Init(de);
    (a.Body().set_gidlineitem(n),
      a.Body().set_gidshoppingcart(t.gid),
      i
        ? a.Body().set_gift_info(P.fromObject(i))
        : r?.is_gift &&
          a
            .Body()
            .set_gift_info(
              P.fromObject({ accountid_giftee: 0, email_giftee: `` }),
            ));
    let o = await xe.ModifyLineItem(e, a);
    return (
      o.BSuccess() ||
        console.warn(
          `Failed to update gift info in anonymous cart: ${o.GetEResult()}`,
        ),
      o.Body().toObject()
    );
  }
}
function ut() {
  let e = D(),
    t = F(),
    n = r(),
    i = Se(e);
  return o({
    mutationFn: (n) =>
      lt(t, e, n.lineItemID, n.lineItemFlags, n.giftInfo, n.gidCoupon),
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
      `cart` in t ? Ee(n, e, t.cart) : we(n, e);
    },
    onError: (e, t, r) => {
      r?.previousCart && n.setQueryData(i, r.previousCart);
    },
  });
}
var R = {};
((R.arabic = () =>
  w(() => import(`./chunk~7cee05f3ac.js`), [], import.meta.url)),
  (R.brazilian = () =>
    w(() => import(`./chunk~f179f0051c.js`), [], import.meta.url)),
  (R.bulgarian = () =>
    w(() => import(`./chunk~e0a362cb2d.js`), [], import.meta.url)),
  (R.czech = () =>
    w(() => import(`./chunk~ee2f196785.js`), [], import.meta.url)),
  (R.danish = () =>
    w(() => import(`./chunk~62de726fa8.js`), [], import.meta.url)),
  (R.dutch = () =>
    w(() => import(`./chunk~6ae9700ce5.js`), [], import.meta.url)),
  (R.english = () =>
    w(() => import(`./chunk~9334e87f1a.js`), [], import.meta.url)),
  (R.finnish = () =>
    w(() => import(`./chunk~d8f81c5046.js`), [], import.meta.url)),
  (R.french = () =>
    w(() => import(`./chunk~a97f705623.js`), [], import.meta.url)),
  (R.german = () =>
    w(() => import(`./chunk~407f64ce1f.js`), [], import.meta.url)),
  (R.greek = () =>
    w(() => import(`./chunk~e78b4d303b.js`), [], import.meta.url)),
  (R.hungarian = () =>
    w(() => import(`./chunk~551560e0c8.js`), [], import.meta.url)),
  (R.indonesian = () =>
    w(() => import(`./chunk~ec6a478aac.js`), [], import.meta.url)),
  (R.italian = () =>
    w(() => import(`./chunk~ecbefccb6f.js`), [], import.meta.url)),
  (R.japanese = () =>
    w(() => import(`./chunk~1ea9d974d0.js`), [], import.meta.url)),
  (R.koreana = () =>
    w(() => import(`./chunk~dd01be5679.js`), [], import.meta.url)),
  (R.latam = () =>
    w(() => import(`./chunk~3cf6a976c0.js`), [], import.meta.url)),
  (R.malay = () =>
    w(() => import(`./chunk~ff05d37668.js`), [], import.meta.url)),
  (R.norwegian = () =>
    w(() => import(`./chunk~f4ddb387ab.js`), [], import.meta.url)),
  (R.polish = () =>
    w(() => import(`./chunk~9df483d4cc.js`), [], import.meta.url)),
  (R.portuguese = () =>
    w(() => import(`./chunk~12b9ca17e3.js`), [], import.meta.url)),
  (R.romanian = () =>
    w(() => import(`./chunk~ee6cbe56a9.js`), [], import.meta.url)),
  (R.russian = () =>
    w(() => import(`./chunk~f65c477f24.js`), [], import.meta.url)),
  (R.sc_schinese = () =>
    w(() => import(`./chunk~4fbc663433.js`), [], import.meta.url)),
  (R.schinese = () =>
    w(() => import(`./chunk~9e2989419c.js`), [], import.meta.url)),
  (R.spanish = () =>
    w(() => import(`./chunk~e4bf3c4156.js`), [], import.meta.url)),
  (R.swedish = () =>
    w(() => import(`./chunk~2b20edaf88.js`), [], import.meta.url)),
  (R.tchinese = () =>
    w(() => import(`./chunk~34d3edc4aa.js`), [], import.meta.url)),
  (R.thai = () =>
    w(() => import(`./chunk~a73053e7a4.js`), [], import.meta.url)),
  (R.turkish = () =>
    w(() => import(`./chunk~2674defa38.js`), [], import.meta.url)),
  (R.ukrainian = () =>
    w(() => import(`./chunk~d90a03c418.js`), [], import.meta.url)),
  (R.vietnamese = () =>
    w(() => import(`./chunk~3d7a718a85.js`), [], import.meta.url)));
async function dt(e) {
  if (R[e]) return await R[e]();
}
var z = be(dt);
function ft() {
  return ue(z);
}
var B = i(),
  pt = L.createContext({ step: `initial`, setStep: () => {} });
function mt() {
  return (0, L.useContext)(pt);
}
function ht() {
  let e = mt();
  return [e.cartWideGiftInfo, e.onCartWideGiftInfoChange];
}
var gt = {
    include_basic_info: !0,
    include_assets: !0,
    include_platforms: !0,
    include_release: !0,
    include_included_items: !0,
  },
  _t = {
    ...gt,
    include_included_items: !0,
    include_all_purchase_options: !0,
    included_item_data_request: gt,
  };
function vt() {
  let e = F(),
    t = D(),
    [n] = ht(),
    { storeBrowseContext: r, cacheStoreItemData: i } = Be();
  return s(yt(e, t, r, n, i));
}
function yt(e, t, n, r, i) {
  return {
    queryKey: qe(t, r),
    queryFn: async () => bt(e, t, n, r, _t, i),
    staleTime: 1 / 0,
    enabled: A.logged_in || !C(t),
  };
}
async function bt(e, t, n, r, i, a) {
  let o = T.Init(Ke);
  (Pe(t) || ye(t) || Ie(t)
    ? (o.Body().set_gidshoppingcart(t.gid),
      r && o.Body().set_gift_info(P.fromObject(r)))
    : fe(t) && o.Body().set_gidreplayoftransid(t.gid),
    Ze(n, o),
    i && We(o, i));
  let s = await ze.ValidateCart(e, o);
  if (
    (s.BSuccess() ||
      console.warn(`Failed to validate shopping cart: ${s.GetEResult()}`),
    i && a)
  )
    for (let e of s.Body().cart_items()) a(e.store_item(), i);
  return s.Body().toObject();
}
function xt() {
  let e = F(),
    t = Me();
  return s(St(e, t));
}
function St(e, t) {
  return {
    queryKey: [`GetFriendsList`, t],
    queryFn: async () => {
      let t = T.Init(ae);
      return (await ie.GetFriendsList(e, t))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((e) => {
          if (!e.ulfriendid()) return !1;
          let t = new O(e.ulfriendid());
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
var V = e(n(), 1),
  Ct = `uOP1ZkYNoFQ-`,
  wt = {
    direction: `right`,
    style: { width: `320px`, height: `${(125 / 184) * 320}px` },
  };
function H(e) {
  let { name_override: t, ...n } = e,
    { data: r } = E(t ? void 0 : n),
    i = t ?? r?.name;
  return (0, B.jsx)(c, {
    id: n,
    hoverProps: wt,
    name: i,
    className: Ct,
    bShowWishlistButton: !1,
    children: i,
  });
}
var Tt = `_9S-gQP3e12M-`,
  Et = `NJNFsZf9YrI-`,
  Dt = `yFHYAHoPEy8-`,
  Ot = `aQXIxE2O-bw-`,
  kt = `zE-2vFloBXg-`,
  At = `J5uOz7I-g34-`,
  jt = `a-PBsBWN7Ew-`,
  Mt = `NLDpkX2-k0Y-`,
  Nt = `_6R2xLnrhkc4-`,
  Pt = `z66txPTkjOk-`,
  Ft = `haDNiI9PDxc-`,
  It = `-CYOytt4xeQ-`,
  Lt = `hL9xW9hmCcM-`,
  Rt = `NJvD2dQAdEE-`,
  U = `Q-SR0Ngi7UY-`,
  W = `g0ewCCmscXQ-`,
  zt = `PcWMqwHyN0w-`,
  Bt = `YZ2FSdnFGNg-`,
  Vt = `-gvj4rjzEMk-`,
  Ht = `-Lo4RVrld3g-`,
  Ut = `sqWiZ3b7qNM-`,
  Wt = `_2nsTn7Qpi44-`,
  Gt = `vvbx2mm1tEg-`,
  Kt = `XnArREOl6S0-`,
  qt = `mnKMNo5wbDI-`,
  Jt = `mkK-nN-gPGA-`,
  Yt = `-RJKTpjhcpU-`;
function Xt(e) {
  let { scrollable: t = !1, children: n } = e;
  return (0, B.jsx)(t ? le : x, {
    className: (0, V.default)(Tt, t && `B6f9D7PKzn0-`),
    focusableIfEmpty: !0,
    children: n,
  });
}
function G(e) {
  let { text: t, children: n, className: r, noWrap: i } = e;
  return (0, B.jsx)(x, {
    "flow-children": `row`,
    className: (0, V.default)(It, t && `mvfriedG5SI-`, i && `JZyr8vKCuBY-`, r),
    children: n,
  });
}
var Zt = L.createContext(!1);
function K(e) {
  let { placeholder: t, className: n, children: r } = e,
    i = L.useContext(Zt);
  return (0, B.jsx)(je, {
    className: (0, V.default)(
      Et,
      t && `_2oROE-3IZEQ-`,
      i && !t && `rgdhFhG-mQI-`,
      n,
    ),
    children: r,
  });
}
function q() {
  return (0, B.jsx)(K, { placeholder: !0, children: (0, B.jsx)(J, {}) });
}
function J() {
  return (0, B.jsx)(`div`, {
    className: Ut,
    children: (0, B.jsx)(_, {
      size: `medium`,
      position: `center`,
      msDelayAppear: 250,
    }),
  });
}
function Y(e) {
  let { children: t } = e;
  return (0, B.jsx)(G, {
    text: !0,
    children: (0, B.jsx)(`div`, { className: Ht, children: t }),
  });
}
function Qt(e) {
  if (e.coupon_applied) return e.coupon_applied.discount_pct;
  let t = parseInt(e.original_price.amount_in_cents),
    n = parseInt(e.subtotal.amount_in_cents);
  return Math.min(99, Math.floor(((t - n) / t) * 100 + 0.5));
}
var $t = (function (e) {
    return (
      (e[(e.k_ECartDisplayType_Unknown = 0)] = `k_ECartDisplayType_Unknown`),
      (e[(e.k_ECartDisplayType_Modal = 1)] = `k_ECartDisplayType_Modal`),
      (e[(e.k_ECartDisplayType_FullPage = 2)] = `k_ECartDisplayType_FullPage`),
      e
    );
  })({}),
  X = L.createContext({
    rgCartLevelNotices: [],
    mapValidateNoticesToFootnote: new Map(),
    eDisplayType: 0,
  });
function en(e) {
  let { validateCart: t, eDisplayType: n, children: r } = e,
    i = un(t, n);
  return (0, B.jsx)(X.Provider, { value: i, children: r });
}
function tn(e) {
  return L.useContext(X)?.mapValidateNoticesToFootnote.get(e)?.index;
}
function Z() {
  return L.useContext(X)?.eDisplayType ?? 0;
}
function nn(e) {
  let { lineItem: t } = e,
    n = Z(),
    { bShowValidationNotices: r } = _e();
  if (!r) return null;
  let i = [],
    a = !!t.gift_info?.accountid_giftee;
  return (
    t.errors?.duplicate_appids_in_cart?.length &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 1,
            notice_text: z.Localize(`#Cart_Error_DuplicateApps_LineItem`),
            appids: t.errors.duplicate_appids_in_cart,
          },
          `duplicate_appids`,
        ),
      ),
    i.push((0, B.jsx)(cn, { lineItem: t }, `owned_apps`)),
    t.errors?.unavailable_in_country &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 8,
            notice_text: z.Localize(`#Cart_Error_UnavailableCountry_LineItem`),
          },
          `unavailable_in_country`,
        ),
      ),
    t.errors?.adult_content_restricted &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 17,
            notice_text: z.Localize(
              `#Cart_Error_AdultContentRestricted_LineItem`,
            ),
          },
          `adult_content_restricted`,
        ),
      ),
    t.errors?.commercial_license_restricted &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 18,
            notice_text: z.Localize(
              `#Cart_Error_CommercialLicenseRestricted_LineItem`,
            ),
          },
          `commercial_license_restricted`,
        ),
      ),
    t.errors?.gift_not_valid_for_recipient_region &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 19,
            notice_text: z.Localize(`#Cart_Error_GiftRecipientInvalid`),
          },
          `gift_recipient_invalid`,
        ),
      ),
    i.push((0, B.jsx)(ln, { lineItem: t }, `coupon_notices`)),
    t.errors?.too_many_in_cart &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 14,
            notice_text: z.Localize(`#Cart_Error_TooManyInCart`),
          },
          `too_many_in_cart`,
        ),
      ),
    t.errors?.missing_must_own_appids?.length &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 16,
            notice_text: a
              ? z.Localize(`#Cart_Error_MissingMustOwnApps_GiftLineItem`)
              : z.Localize(`#Cart_Error_MissingMustOwnApps_LineItem`),
            appids: t.errors.missing_must_own_appids,
          },
          `missing_must_own_appids`,
        ),
      ),
    t.warnings?.appids_in_mastersub?.length &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 4,
            notice_text: z.Localize(`#Cart_Error_MasterSubscription_LineItem`),
            appids: t.warnings.appids_in_mastersub.flatMap((e) =>
              e.cart_appid ? [e.cart_appid] : [],
            ),
          },
          `appids_in_mastersub`,
        ),
      ),
    t.warnings?.owned_appids?.length &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 3,
            notice_text: z.Localize(`#Cart_Warning_AlreadyOwned_LineItem`),
            appids: t.warnings.owned_appids,
          },
          `owned_appids`,
        ),
      ),
    t.warnings?.owned_appids_extra_copy?.length &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 9,
            notice_text: z.Localize(`#Cart_Warning_ExtraCopies_LineItem`),
            appids: t.warnings.owned_appids_extra_copy,
          },
          `owned_appids_extra_copy`,
        ),
      ),
    t.warnings?.price_has_changed &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 10,
            notice_text: z.Localize(`#Cart_Warning_PriceChange_LineItem`),
          },
          `price_has_changed`,
        ),
      ),
    t.warnings?.non_refundable &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 5,
            notice_text: z.Localize(`#Cart_Warning_NoRefund_LineItem`),
          },
          `non_refundable`,
        ),
      ),
    t.warnings?.gift_recipient_higher_price &&
      i.push(
        (0, B.jsx)(
          Q,
          {
            purchase_state: 20,
            notice_text: z.Localize(`#Cart_Warning_RecipientHigherPrice`),
          },
          `gift_recipient_higher_price`,
        ),
      ),
    i.push((0, B.jsx)(on, { lineItem: t }, `available_cheaper`)),
    a &&
      n !== 2 &&
      i.push(
        (0, B.jsx)(
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
    i = tn(t),
    a = Z() === 2 && !!i;
  return (0, B.jsxs)(Y, {
    children: [
      n,
      a && (0, B.jsx)(`sup`, { children: i }),
      ` `,
      (0, B.jsx)(rn, { rgAppIDs: r ?? [] }),
    ],
  });
}
function rn(e) {
  let { rgAppIDs: t } = e;
  return !t || t.length == 0
    ? null
    : t.map((e, n) =>
        (0, B.jsx)(an, { appid: e, last: n >= t.length - 1 }, `${e}_${n}`),
      );
}
function an(e) {
  let { appid: t, last: n } = e,
    { data: r } = E({ appid: t });
  return r
    ? (0, B.jsxs)(B.Fragment, {
        children: [
          (0, B.jsx)(H, { appid: t, name_override: r.name }),
          !n && (0, B.jsx)(B.Fragment, { children: `, ` }),
        ],
      })
    : null;
}
function on(e) {
  let { lineItem: t } = e,
    { data: n } = b(t.item_id),
    { data: r } = me(t.item_id);
  if (t.gift_info?.accountid_giftee || !n || !r || He(n, r)) return null;
  let i = r.packageid ? { packageid: r.packageid } : { bundleid: r.bundleid };
  return (0, B.jsx)(Y, {
    children: z.LocalizeReact(
      `#Cart_Warning_AvailableAtALowerPrice`,
      (0, B.jsx)(H, { ...i, name_override: r.purchase_option_name }),
    ),
  });
}
function sn(e) {
  let { nGifteeAccountID: t } = e,
    n = O.InitFromAccountID(t, j.EUNIVERSE).ConvertTo64BitString(),
    { data: r } = xt();
  return L.useMemo(() => !r || r.includes(n), [r, n]) || !A.logged_in
    ? null
    : (0, B.jsx)(Y, { children: z.Localize(`#Cart_Warning_GiftToNonFriend`) });
}
function cn(e) {
  let { lineItem: t } = e;
  if (!t.errors?.owned_appids?.length) return null;
  let n = !!t.gift_info?.accountid_giftee;
  if (t.errors?.has_existing_billing_agreement)
    return (0, B.jsx)(Q, {
      purchase_state: 15,
      notice_text: z.Localize(`#Cart_Error_ExistingBillingAgreement`),
    });
  {
    let e = (t.store_item?.included_appids?.length ?? 0) > 1,
      r = z.Localize(
        n
          ? `#Cart_Error_AlreadyOwned_GiftLineItem_Game`
          : `#Cart_Error_AlreadyOwned_LineItem_Game`,
      );
    return (
      e &&
        (r = z.Localize(
          n
            ? `#Cart_Error_AlreadyOwned_GiftLineItem`
            : `#Cart_Error_AlreadyOwned_LineItem`,
        )),
      (0, B.jsx)(Q, {
        purchase_state: 2,
        notice_text: r,
        appids: e ? t.errors.owned_appids : void 0,
      })
    );
  }
}
function ln(e) {
  let { lineItem: t } = e;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      t.errors?.coupon_exclusive_promo &&
        (0, B.jsx)(Q, {
          purchase_state: 13,
          notice_text: z.Localize(`#Cart_Error_CouponIsExclusivePromo`),
        }),
      t.errors?.invalid_coupon &&
        (0, B.jsx)(Q, {
          purchase_state: 11,
          notice_text: z.Localize(`#Cart_Error_CouponIsInvalid`),
        }),
      t.errors?.invalid_coupon_for_item &&
        (0, B.jsx)(Q, {
          purchase_state: 12,
          notice_text: z.Localize(`#Cart_Error_CouponIsInvalidForItem`),
        }),
    ],
  });
}
function un(e, t) {
  return L.useMemo(() => {
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
          a(1, z.Localize(`#Cart_Error_DuplicateApps_FootNote`)),
        e.errors?.owned_appids?.length &&
          (e.errors?.has_existing_billing_agreement
            ? a(15, z.Localize(`#Cart_Error_ExistingBillingAgreement_FootNote`))
            : a(
                2,
                z.Localize(
                  t
                    ? `#Cart_Error_AlreadyOwned_GiftFootNote`
                    : `#Cart_Error_AlreadyOwned_FootNote`,
                ),
              )),
        e.errors?.unavailable_in_country &&
          a(8, z.Localize(`#Cart_Error_UnavailableCountry_FootNote`)),
        e.errors?.adult_content_restricted &&
          a(17, z.Localize(`#Cart_Error_AdultContentRestricted_FootNote`)),
        e.errors?.commercial_license_restricted &&
          a(18, z.Localize(`#Cart_Error_CommercialLicenseRestricted_FootNote`)),
        e.errors?.missing_must_own_appids?.length &&
          a(
            16,
            t
              ? z.Localize(`#Cart_Error_MissingMustOwnApps_FootNoteGift`)
              : z.Localize(`#Cart_Error_MissingMustOwnApps_FootNote`),
          ),
        e.warnings?.appids_in_mastersub?.length &&
          a(4, z.Localize(`#Cart_Error_MasterSubscription_FootNote`)),
        e.warnings?.price_has_changed &&
          n.set(10, z.Localize(`#Cart_Warning_PriceChange_FootNote`)));
    });
    let s = Array.from(n.values());
    return (
      o && s.unshift(z.Localize(`#Cart_CartLevelErrorNotice`)),
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
  if (C(t)) {
    let t = T.Init(Fe);
    t.Body().set_line_item_id(n);
    let r = await it.RemoveItemFromCart(e, t);
    return ($e(), r.Body().toObject());
  }
  {
    let r = T.Init(he);
    (r.Body().set_gidlineitems([n]), r.Body().set_gidshoppingcart(t.gid));
    let i = await xe.RemoveLineItems(e, r);
    return ($e(), i.Body().toObject());
  }
}
function $(e) {
  let t = F(),
    n = r(),
    i = D();
  return o({
    mutationFn: async () => await bn(t, i, e),
    onSuccess: (e) => {
      `cart` in e ? Ee(n, i, e.cart) : we(n, i);
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
    [o] = L.useState(() => new Set(t.map((e) => e?.line_item_id)));
  if (!t.length) return (0, B.jsx)(wn, {});
  let s = n?.cart_items
    ? n.cart_items.reduce((e, t) => ((e[t.line_item_id] = t), e), {})
    : {};
  return (0, B.jsx)(Xt, {
    scrollable: a,
    children: t.map((e, t) =>
      e
        ? (0, B.jsx)(
            Zt.Provider,
            {
              value: !o.has(e.line_item_id),
              children: (0, B.jsx)(Ve, {
                fallback: (t) => (0, B.jsx)(Cn, { item: e, error: t }),
                children: (0, B.jsx)(Sn, {
                  item: e,
                  validatedItem: s[e.line_item_id],
                  bCartValidated: !!n && !r,
                  renderLineItem: i,
                }),
              }),
            },
            e.line_item_id || t,
          )
        : (0, B.jsx)(q, {}, t),
    ),
  });
}
function Sn(e) {
  let { item: t, validatedItem: n, bCartValidated: r, renderLineItem: i } = e,
    a = Tn(t);
  if (!a) throw `Unknown line item type (${t.type})`;
  let { data: o } = E(a),
    { data: s } = ve(a),
    { data: c } = b(a),
    l = s ? N(s) : a;
  return (
    Ae(l),
    Xe(l),
    o && (!o.visible || c === null || (r && !n))
      ? (0, B.jsx)(Dn, {
          lineItemID: t.line_item_id,
          validatedItem: n,
          storeItem: o,
        })
      : !o || !s || !c || !n
        ? (0, B.jsx)(q, {})
        : (0, B.jsx)(En, {
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
    i = k();
  return (0, B.jsxs)(K, {
    className: Wt,
    children: [
      (0, B.jsxs)(`div`, {
        className: Gt,
        children: [
          (0, B.jsx)(`div`, {
            className: Kt,
            children: z.Localize(`#Cart_LineItem_ErrorBoundary`),
          }),
          (0, B.jsx)(`div`, { className: qt, children: n.message }),
        ],
      }),
      !i &&
        (0, B.jsx)(x, {
          onActivate: () => r.mutate(),
          className: `-j4iOb4uWn8-`,
          children: z.Localize(`#Cart_Remove`),
        }),
    ],
  });
}
function wn() {
  return (0, B.jsx)(K, {
    className: Wt,
    children: (0, B.jsx)(`div`, {
      className: Gt,
      children: (0, B.jsx)(`div`, {
        className: W,
        children: z.Localize(`#Cart_Empty`),
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
      Ue(t, `Unhandled type: ${t}`);
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
    c = N(t),
    u = $(s),
    d = u.isPending || u.isSuccess,
    { data: f } = Le(c),
    p = l(c),
    { data: m, isLoading: h } = ne(),
    _ = L.useMemo(() => p.filter((e) => m?.has(e)), [p, m]),
    v = L.useId();
  if (h) return (0, B.jsx)(q, {});
  let ee = r.flags?.is_gift,
    y = p.length > 0 && _.length === p.length,
    te = !ee && _.length > 0 && !y;
  return o({
    lineItem: r,
    storeItem: t,
    validatedItem: a,
    children: (0, B.jsxs)(B.Fragment, {
      children: [
        d && (0, B.jsx)(J, {}),
        (0, B.jsxs)(x, {
          className: (0, V.default)(Nt, d && `YLk5YkN8SWA-`),
          "flow-children": `row`,
          children: [
            (0, B.jsx)(`div`, {
              className: (0, V.default)(void 0, Ot),
              children: (0, B.jsx)(Qe, {
                storeItem: n,
                feature: `cart-items`,
                noImpressionTracking: !0,
                className: Dt,
                children: (0, B.jsx)(On, {
                  storeItem: n,
                  alt: t.name,
                  blurred: !!a.errors?.adult_content_restricted,
                }),
              }),
            }),
            (0, B.jsxs)(`div`, {
              className: Pt,
              children: [
                (0, B.jsx)(G, {
                  className: Rt,
                  children: (0, B.jsx)(`div`, {
                    className: W,
                    id: v,
                    children: t.name,
                  }),
                }),
                f?.is_coming_soon && (0, B.jsx)(jn, { storeItem: t }),
                (0, B.jsxs)(An, {
                  validatedItem: a,
                  children: [
                    (0, B.jsx)(Fn, { storeItem: t, purchaseOption: i }),
                    (0, B.jsx)(In, { purchaseOption: i }),
                    (0, B.jsx)(Rn, { storeItem: t, purchaseOption: i }),
                  ],
                }),
                (0, B.jsx)(Hn, { validatedItem: a }),
                te && (0, B.jsx)(Un, { appids: _ }),
                (0, B.jsxs)(G, {
                  className: U,
                  children: [
                    (0, B.jsx)(`div`, {
                      className: (0, V.default)(Ft, zt),
                      children: (0, B.jsx)(g, { id: N(n) }),
                    }),
                    (0, B.jsx)(Mn, { purchaseOption: i, validatedItem: a }),
                  ],
                }),
                (0, B.jsx)(Nn, {
                  lineItem: r,
                  purchaseOption: i,
                  validatedItem: a,
                  rgAppIDs: p,
                  bAllAppsPrivate: y,
                  fnRemoveLineItem: u.mutate,
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
    a = k(),
    o = i.isPending;
  return (0, B.jsxs)(K, {
    placeholder: !0,
    children: [
      o && (0, B.jsx)(J, {}),
      (0, B.jsxs)(x, {
        className: (0, V.default)(Nt, o && `YLk5YkN8SWA-`),
        "flow-children": `row`,
        children: [
          (0, B.jsx)(`div`, {
            className: (0, V.default)(void 0, Ot),
            children: (0, B.jsx)(Qe, {
              storeItem: r,
              noImpressionTracking: !0,
              children: (0, B.jsx)(On, { storeItem: r }),
            }),
          }),
          (0, B.jsxs)(`div`, {
            className: Pt,
            children: [
              (0, B.jsx)(G, {
                className: Rt,
                children: (0, B.jsx)(`div`, {
                  className: W,
                  children: r?.name,
                }),
              }),
              !!n && (0, B.jsx)(An, { validatedItem: n }),
              !a &&
                (0, B.jsx)(G, {
                  className: `Q-SR0Ngi7UY-`,
                  children: (0, B.jsx)(x, {
                    focusable: !0,
                    onActivate: () => i.mutate(),
                    className: `JyfzQzsaL08-`,
                    children: z.Localize(`#Cart_Remove`),
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
    { data: i } = Ae(N(t)),
    a = `${j.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
  return (
    i?.header
      ? (a =
          j.STORE_ITEM_BASE_URL +
          i.asset_url_format.replace("${FILENAME}", i.header))
      : i?.small_capsule &&
        (a =
          j.STORE_ITEM_BASE_URL +
          i.asset_url_format.replace("${FILENAME}", i.small_capsule)),
    (0, B.jsx)(`img`, { alt: n ?? t.name, className: r ? At : kt, src: a })
  );
}
function kn(e) {
  return (0, B.jsx)(x, { children: (0, B.jsx)(K, { children: e.children }) });
}
function An(e) {
  let { validatedItem: t, children: n } = e;
  return (0, B.jsxs)(`div`, {
    className: U,
    children: [(0, B.jsx)(nn, { lineItem: t }), n],
  });
}
function jn(e) {
  let { storeItem: t } = e,
    { data: n } = Le(N(t)),
    r = u(n);
  if (!n) return null;
  let i = z.Localize(`#Cart_ComingSoon`, r);
  return (
    [`text_tba`, `text_comingsoon`].includes(n.coming_soon_display) && (i = r),
    (0, B.jsx)(Y, { children: i })
  );
}
function Mn(e) {
  let { purchaseOption: t, validatedItem: n } = e,
    r = Oe(t),
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
      (o = Qt(n))),
    (0, B.jsx)(`div`, {
      className: Mt,
      children: (0, B.jsx)(y, {
        className: Vt,
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
    c = k(),
    [l] = ht(),
    u = l?.accountid_giftee || (c ? t.gift_info?.accountid_giftee : void 0),
    f = D(),
    p = Je() && !r?.restrict_add_additional_to_cart && !Pe(f),
    m = r.errors?.adult_content_restricted,
    h = d(t.packageid, t.bundleid, zn(n), void 0, `cart-add-additional`),
    g = L.useId(),
    _ = L.useId();
  return (0, B.jsxs)(G, {
    className: U,
    children: [
      (0, B.jsx)(`div`, {
        className: (0, V.default)(Ft, Bt),
        children: u
          ? (0, B.jsx)(Pn, { recipient: u })
          : (0, B.jsx)(Vn, {
              lineItem: t,
              rgAppIDs: i,
              bAllAppsPrivate: a,
              purchaseOption: n,
            }),
      }),
      (0, B.jsxs)(`div`, {
        className: (0, V.default)(Mt, jt),
        children: [
          p &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(ge, {
                  toolTipContent: z.Localize(`#Cart_LineItem_Add_Tooltip`),
                  usePointerEvents: !0,
                  children: (0, B.jsx)(x, {
                    onActivate: () => !h.isPending && h.mutate(),
                    className: `TIoqnPCGd54-`,
                    id: g,
                    "aria-labelledby": `${g} ${s}`,
                    children: z.Localize(`#Cart_Add`),
                  }),
                }),
                `|`,
              ],
            }),
          !c &&
            (0, B.jsx)(x, {
              onActivate: () => o(),
              className: `JyfzQzsaL08-`,
              id: _,
              "aria-labelledby": `${_} ${s}`,
              children: z.Localize(`#Cart_Remove`),
            }),
          m &&
            (0, B.jsxs)(B.Fragment, {
              children: [
                `| `,
                (0, B.jsx)(`a`, {
                  href: `${j.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                  className: `SWPhz00mDeg-`,
                  children: z.Localize(`#Cart_Verify`),
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
  return (0, B.jsx)(`div`, {
    className: Jt,
    children: z.LocalizeReact(
      `#Cart_GiftForNotice`,
      n ? (0, B.jsx)(`span`, { className: Yt, children: n }) : ``,
    ),
  });
}
function Fn(e) {
  let { storeItem: t, purchaseOption: n } = e,
    r = !!n.requires_shipping && t.item_type === 1,
    { data: i } = p(r ? t.id : void 0);
  return i
    ? (0, B.jsx)(Y, {
        children: z.Localize(`#Cart_ShippingEstimate_DeliveryDate`, te(i)),
      })
    : null;
}
function In(e) {
  let { purchaseOption: t } = e;
  if (!t.requires_shipping) return null;
  let n = A.country_code;
  return [`GB`].includes(n)
    ? (0, B.jsx)(Y, {
        children: (0, B.jsx)(x, {
          children: (0, B.jsx)(`a`, {
            className: Lt,
            target: `_blank`,
            href: `https://www.valvesoftware.com/legal/statement-of-compliance`,
            rel: `noreferrer`,
            children: z.Localize(`#Cart_LineItem_Hardware_Compliance_Label`),
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
  return (0, B.jsx)(Y, {
    children: z.Localize(
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
    a = ut(),
    o = re(),
    s = k(),
    { bShowPurchaseOptionPicker: c } = _e(),
    { data: l } = v(
      t.gift_info?.accountid_giftee ? t.gift_info.accountid_giftee : null,
    );
  if (!c) return null;
  let u = !zn(i) || s,
    d = !Bn(i),
    f = [{ data: `myself`, label: z.Localize(`#Cart_LineItemOptions_Myself`) }];
  if (
    (d ||
      f.push({
        data: `private`,
        label: z.Localize(`#Cart_LineItemOptions_Privately`),
        tooltip: z.Localize(`#Cart_LineItemOptions_PrivateTooltip`),
      }),
    !u)
  ) {
    let e = l?.public_data?.persona_name;
    t.gift_info?.accountid_giftee && e
      ? f.push({
          data: `gift`,
          label: z.Localize(`#Cart_LineItemOptions_GiftForPersona`, e),
        })
      : f.push({
          data: `gift`,
          label: z.Localize(`#Cart_LineItemOptions_Gift`),
        });
  }
  let p = t.flags?.is_gift ? `gift` : `myself`;
  return (
    p === `myself` && r && (p = `private`),
    f.length === 1
      ? null
      : (0, B.jsx)(pe, {
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
              ? (0, B.jsx)(ge, {
                  toolTipContent: e.tooltip,
                  usePointerEvents: !0,
                  children: (0, B.jsx)(`span`, { children: e.label }),
                })
              : e.label,
          size: `1`,
          placement: `bottom-start`,
        })
  );
}
var Hn = L.memo(function (e) {
  let { validatedItem: t } = e,
    n = t.included_packageids ?? [],
    r = rt(),
    i = a({ queries: n.map((e) => et(r, { packageid: e })) }),
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
    : (0, B.jsxs)(G, {
        text: !0,
        children: [
          (0, B.jsxs)(`span`, {
            children: [
              z.LocalizePlural(`#Cart_IncludesItems`, o.length),
              `:`,
              ` `,
            ],
          }),
          o.map((e, t) =>
            (0, B.jsxs)(
              L.Fragment,
              { children: [t > 0 && `, `, (0, B.jsx)(H, { appid: e })] },
              e,
            ),
          ),
        ],
      });
});
function Un(e) {
  let { appids: t } = e,
    n = t.map((e, t) =>
      (0, B.jsxs)(
        L.Fragment,
        { children: [t > 0 && `, `, (0, B.jsx)(H, { appid: e })] },
        e,
      ),
    );
  return (0, B.jsxs)(G, {
    children: [
      (0, B.jsxs)(`span`, {
        children: [z.Localize(`#Cart_Notice_SomeAppsPrivate`), `\xA0`],
      }),
      n,
    ],
  });
}
function Wn(e) {
  let { closeCart: t, lineItemIDs: n, bPackagesReplaced: r } = e,
    i = ft(),
    { data: a } = se(),
    { data: o, isFetching: s } = vt(),
    c = Ge(n),
    l = Ye(`${j.STORE_BASE_URL}cart/`);
  if (
    (L.useEffect(() => {
      c && c?.length == 0 && t();
    }, [c, t]),
    !c || !i)
  )
    return null;
  let u = z.Localize(r ? `#Cart_UpdatedYourCart` : `#Cart_AddedToYourCart`);
  return (0, B.jsx)(en, {
    validateCart: o,
    eDisplayType: $t.k_ECartDisplayType_Modal,
    children: (0, B.jsx)(h, {
      onClose: t,
      navID: `CartModal`,
      strTitle: u,
      children: (0, B.jsxs)(x, {
        className: dn,
        "flow-children": `column`,
        children: [
          (0, B.jsx)(xn, {
            lineItems: c,
            cartValidation: o,
            bValidating: s,
            scrollable: !0,
          }),
          (0, B.jsx)(Kn, { lineItems: c, cartValidation: o }),
          (0, B.jsxs)(x, {
            className: fn,
            children: [
              (0, B.jsx)(f, {
                onClick: t,
                children: z.Localize(`#Cart_ContinueShopping`),
              }),
              (0, B.jsx)(m, {
                autoFocus: !0,
                href: l,
                children: z.Localize(
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
  return ft()
    ? (0, B.jsx)(h, {
        onClose: n,
        navID: `CartErrorModal`,
        strTitle: S.Localize(`#Error_Generic`),
        children: (0, B.jsxs)(`div`, {
          className: gn,
          children: [
            (0, B.jsx)(`div`, {
              className: _n,
              children: z.Localize(`#Cart_ErrorUpdating`),
            }),
            (0, B.jsx)(`div`, {
              className: yn,
              children: t ? z.Localize(`#Cart_ErrorCode`, t) : ``,
            }),
            (0, B.jsx)(`div`, {
              className: vn,
              children: (0, B.jsx)(f, {
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
    r = L.useRef(!1),
    [i, a] = L.useState(!1),
    { gifteeHint: o, gifteePlayerDetails: s } = ot(),
    c = k(),
    l = ct(),
    u = ut(),
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
    (L.useEffect(() => {
      p && !r.current && (M()?.AddEvent(De), (r.current = !0));
    }, [p]),
    !p)
  )
    return null;
  let m = () => {
      (M()?.AddEvent(Te), l.mutate(null));
    },
    h = () => {
      for (let e of n)
        u.mutate({
          lineItemID: e.line_item_id,
          lineItemFlags: { is_gift: !0 },
          giftInfo: { ...e.gift_info, accountid_giftee: o.nGifteeAccountID },
          gidCoupon: e.gidcoupon_applied,
        });
      (l.mutate(o), a(!0), M()?.AddEvent(Ce));
    },
    g = (0, B.jsxs)(`a`, {
      href: oe(s),
      target: `_blank`,
      rel: `noreferrer`,
      children: [
        (0, B.jsx)(ee, {
          size: `X-Small`,
          statusPosition: `right`,
          playerLinkDetails: s,
          alt: d.persona_name ?? ``,
        }),
        (0, B.jsx)(`div`, { className: hn, children: d.persona_name }),
      ],
    });
  return (0, B.jsxs)(Ne, {
    className: pn,
    align: `center`,
    gap: `3`,
    direction: `row`,
    justify: `center`,
    children: [
      (0, B.jsx)(Re, {
        as: `div`,
        align: `center`,
        className: mn,
        children: z.LocalizeReact(`#Cart_GifteeHint_Wishlist`, g),
      }),
      (0, B.jsxs)(Ne, {
        gap: `2`,
        direction: `row`,
        align: `center`,
        children: [
          (0, B.jsx)(nt, {
            size: `1`,
            color: `dull`,
            onClick: m,
            children: S.Localize(`#Button_No`),
          }),
          (0, B.jsx)(nt, {
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r, st as i } from "./libraries.js";
import { t as a } from "./errors.js";
import { n as o } from "./playerlinkdetailsdataloader.js";
import {
  Dv as s,
  H as c,
  Hb as l,
  Iy as u,
  Lr as d,
  Mo as f,
  Qt as p,
  Sc as m,
  Uy as h,
  Vb as g,
  iy as _,
  ut as v,
  xb as y,
} from "./main.js";
function ee(e) {
  return h(
    `#Hardware_ShippingEstimate_Range`,
    e.estimated_delivery_soonest_business_days ?? 0,
    e.estimated_delivery_latest_business_days ?? 0,
  );
}
var b = e(t(), 1),
  x = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=`,
  S = new URL(
    `../../../images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  C = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==`;
function w(e, t) {
  return {
    queryKey: [`ProfileItemsEquipped`, t],
    async queryFn() {
      let n = await v.GetProfileItemsEquipped(e, {
        steamid: t,
        language: l.LANGUAGE,
      });
      if (n.GetEResult() != 1)
        throw (
          n.DEBUG_LogToConsole(),
          new a(n.GetEResult(), `Failed to load equipped profile items`)
        );
      return n.Body().toObject();
    },
  };
}
function T(e) {
  let t = _();
  return i(w(t, e));
}
var E = r();
function D(e) {
  let { rgSources: t, onIncrementalError: n, alt: r, ...i } = e,
    [a, o] = (0, b.useState)(0),
    s = t[a];
  return (0, E.jsx)(`img`, {
    onError: (e) => {
      (o((e) => e + 1), n?.(e, s, a));
    },
    alt: r,
    ...i,
    src: s,
  });
}
var O = e(n(), 1),
  k = `HnrHdXpIj-8-`,
  A = `zOONzPWYOt8-`,
  j = `yjeN-68tIxU-`,
  M = `CkLi--sYgjU-`,
  N = `tB4PMZSfdbY-`,
  P = `Lf05iLDlzcc-`,
  F = `OeSYpsqeoyE-`,
  I = `Y-FJgE1Y2dM-`,
  L = `lKi7DfYJqH4-`,
  R = `LveqZtfxzYc-`;
function z(e) {
  let {
      avatarURL: t,
      size: n,
      statusStyle: r,
      statusPosition: i,
      className: a,
      children: o,
      isOnline: s,
      isInGame: c,
      isWatchingBroadcast: l,
      isAwayOrSnooze: u,
      alt: d,
    } = e,
    f = [];
  return (
    t && f.push(t),
    f.push(W(n ?? `Medium`)),
    (0, E.jsxs)(`div`, {
      className: (0, O.default)(
        k,
        { [j]: !s, [M]: s, [P]: c, [I]: l, [F]: u },
        a,
      ),
      "data-size": n,
      "data-status-position": i,
      children: [
        (0, E.jsx)(`div`, { className: N, style: r }),
        (0, E.jsx)(D, {
          className: (0, O.default)(A),
          rgSources: f,
          draggable: !1,
          alt: d,
        }),
        o,
      ],
    })
  );
}
function B(e) {
  let { profileItem: t, className: n, bDisableAnimation: r, ...i } = e;
  if (!t || !t.image_small || t.image_small.length == 0) return null;
  let a = r ? t.image_large : t.image_small;
  return (
    (a ||= t.image_small),
    a.startsWith(`https://`) || (a = l.MEDIA_CDN_COMMUNITY_URL + `images/` + a),
    (0, E.jsx)(`div`, {
      className: (0, O.default)(L, n),
      ...i,
      children: (0, E.jsx)(`img`, {
        className: R,
        src: a,
        alt: ``,
        role: `presentation`,
      }),
    })
  );
}
function V(e) {
  let {
      playerLinkDetails: t,
      animatedAvatar: n,
      avatarFrame: r,
      size: i,
      ...a
    } = e,
    o = c(t.public_data?.sha_digest_avatar, i);
  return (
    n?.image_small?.length &&
      (o = l.MEDIA_CDN_COMMUNITY_URL + `images/` + n.image_small),
    (0, E.jsx)(z, {
      avatarURL: o,
      size: i,
      isOnline: t.private_data?.persona_state === 1,
      isInGame: t.private_data?.game_id !== void 0,
      isWatchingBroadcast:
        t.private_data?.watching_broadcast_accountid !== void 0,
      isAwayOrSnooze:
        t.private_data?.persona_state === 3 ||
        t.private_data?.persona_state === 4,
      ...a,
    })
  );
}
function H(e, t) {
  let [n, r] = (0, b.useState)(e !== `None`);
  return (
    (0, b.useEffect)(() => {
      if ((r(e !== `None`), e === `None` || e === `Infinite`)) return;
      let n;
      switch (e) {
        case `Short`:
          n = 2500;
          break;
        case `Medium`:
          n = 5e3;
          break;
        case `Long`:
          n = 1e4;
      }
      let i = setTimeout(() => {
        r(t);
      }, n);
      return () => {
        clearTimeout(i);
      };
    }, [e, t]),
    n
  );
}
function U(e) {
  let {
      loopDuration: t = `Infinite`,
      bParentHovered: n,
      bLimitProfileFrameAnimationTime: r,
      className: i,
      ...a
    } = e,
    [o, s] = (0, b.useState)(!1),
    c = H(t, o),
    l = T(a.playerLinkDetails.public_data.steamid);
  return (0, E.jsx)(`div`, {
    className: i,
    onMouseEnter: () => s(!0),
    onMouseLeave: () => s(!1),
    children: (0, E.jsx)(V, {
      ...a,
      animatedAvatar: c ? l.data?.animated_avatar : void 0,
      children: (0, E.jsx)(B, {
        profileItem: l.data?.avatar_frame,
        bDisableAnimation: r && !c,
      }),
    }),
  });
}
function W(e) {
  switch (e) {
    case `X-Small`:
    case `Small`:
      return g(x);
    case `Medium`:
    case `MediumLarge`:
      return g(C);
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      return g(S);
  }
}
function G(e) {
  return (
    delete e?.private_data?.account_name,
    delete e?.public_data?.account_flags,
    delete e?.public_data?.ban_expires_time,
    delete e?.public_data?.privacy_state,
    e?.public_data?.profile_state !== 1 && delete e?.private_data,
    e
  );
}
function K(e) {
  return [`PlayerLinkDetails`, e];
}
function q(e, t) {
  let n =
    typeof t == `number`
      ? u.InitFromAccountID(t, l.EUNIVERSE).ConvertTo64BitString()
      : t;
  return {
    queryKey: K(n),
    queryFn: async () => (n ? G(await e.load(n)) : null),
    enabled: !!n,
  };
}
function J(e) {
  let t = _(),
    n = o(t);
  return i(q(n, e));
}
var Y = `i-ylXYaQ9-o-`,
  X = Object.values(
    (function (e) {
      return (
        (e.k_eBlock = `block`),
        (e.k_eFinal = `final`),
        (e.k_eOriginal = `original`),
        (e.k_eReservation = `reservation`),
        e
      );
    })({}),
  );
function Z(e) {
  return X.find((t) => t === e);
}
function Q(e) {
  switch (e.display_style) {
    case `final`:
      return e.formatted_final_price
        ? (0, E.jsx)(`span`, { children: e.formatted_final_price })
        : null;
    case `original`: {
      let t = e.formatted_orig_price || e.formatted_final_price;
      return t ? (0, E.jsx)(`span`, { children: t }) : null;
    }
  }
  let t = e.display_style == `reservation`,
    n = e.bHideDiscountPercentForCompliance,
    r = e.className == `bbcode_price`,
    i = e.bundle_discount_percent || 0,
    a = !!i && (e.discount_percent || 0) > i,
    o = !!i && !a,
    s = p(!!i, a, !0);
  return (0, E.jsxs)(`span`, {
    className: m({ [Y]: !0, [e.className ?? ``]: !!e.className, [void 0]: t }),
    children: [
      !(!e.discount_percent || n) &&
        (0, E.jsx)(d, {
          bPortalToBody: !0,
          toolTipContent: e.bDiscountFromCoupon ? void 0 : y.Localize(s),
          children: (0, E.jsxs)(`span`, {
            className: m(
              `zEr0qFYkPLI-`,
              `StoreSaleDiscountBox`,
              e.bDiscountFromCoupon && `bj6o1vGfmqA-`,
              o && `Rt1g-UCUruc-`,
              a && `XbrGQilPpmM-`,
            ),
            children: [
              a &&
                (0, E.jsx)(`span`, {
                  className: `ZHX2Iz78GaQ-`,
                  children: `-${i}%`,
                }),
              `-${e.discount_percent}%`,
            ],
          }),
        }),
      !!(e.discount_percent && n) &&
        (0, E.jsx)(`div`, {
          className: m({ [void 0]: !0, bbcode_price_discount: r }),
          children: (0, E.jsx)(f, {}),
        }),
      !!e.formatted_final_price &&
        (e.discount_percent && e.formatted_orig_price
          ? (0, E.jsxs)(`div`, {
              className: m({ "BvS0aUMElHI-": !0, bbcode_price_ctn: r }),
              children: [
                (0, E.jsx)(`div`, {
                  className: m({
                    "_8k9wXjxVA-4-": !0,
                    StoreOriginalPrice: !0,
                    bbcode_price_orig: r,
                  }),
                  children: e.formatted_orig_price,
                }),
                (0, E.jsx)(`div`, {
                  className: m({
                    "Rj6X0djBIxk-": !0,
                    bbcode_price_box: r,
                    "f1Ud3-FysgI-": t,
                    bbcode_price_final: r,
                  }),
                  children: e.formatted_final_price,
                }),
              ],
            })
          : (0, E.jsx)(`div`, {
              className: m({
                "Rj6X0djBIxk-": !0,
                bbcode_price_box: r,
                "f1Ud3-FysgI-": t,
                bbcode_price_final: r,
              }),
              children: e.formatted_final_price,
            })),
    ],
  });
}
function $(e) {
  let { data: t } = s({ packageid: e.packageID });
  return t
    ? (0, E.jsx)(Q, {
        formatted_final_price: t.formatted_final_price,
        formatted_orig_price: t.formatted_original_price,
        discount_percent: t.discount_pct,
        bHideDiscountPercentForCompliance: t.hide_discount_pct_for_compliance,
        display_style: e.display_style,
        className: `bbcode_price`,
      })
    : null;
}
function te(e, t) {
  if (e?.final_price_in_cents && t?.final_price_in_cents)
    return (
      (
        100 *
        (1 -
          Number.parseInt(e.final_price_in_cents) /
            Number.parseInt(t.final_price_in_cents))
      ).toFixed(0) + `%`
    );
}
function ne(e) {
  let { data: t } = s({ packageid: e.packageID }),
    { data: n } = s({ packageid: e.compareID }),
    r = te(t, n);
  return r === void 0
    ? null
    : (0, E.jsx)(`span`, { className: void 0, children: r });
}
export {
  J as a,
  V as c,
  Z as i,
  T as l,
  ne as n,
  z as o,
  Q as r,
  U as s,
  $ as t,
  ee as u,
};

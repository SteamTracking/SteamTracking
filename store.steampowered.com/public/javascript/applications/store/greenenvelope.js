/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, u as r } from "./libraries.js";
import { n as i, t as a } from "./textfilterstore.js";
import { n as o } from "./playerstore.js";
import {
  Ac as s,
  Ao as c,
  Av as l,
  Bo as u,
  Cc as d,
  Fv as f,
  Hs as p,
  Jy as m,
  Ks as h,
  La as g,
  Ly as _,
  M as v,
  Ma as y,
  Or as b,
  Ov as x,
  P as ee,
  Po as S,
  Tc as C,
  Tv as w,
  Wu as te,
  Wy as T,
  Xc as E,
  Yy as D,
  _b as O,
  _t as ne,
  ay as k,
  cy as re,
  db as ie,
  fS as ae,
  fi as oe,
  hS as se,
  ht as ce,
  ix as A,
  j as le,
  jo as ue,
  ly as j,
  ob as de,
  ox as M,
  pS as fe,
  pi as pe,
  qs as me,
  rc as he,
  ro as ge,
  so as _e,
  tc as N,
} from "./main.js";
import { n as ve } from "./clanstore.js";
import {
  _ as ye,
  a as be,
  c as xe,
  d as Se,
  f as Ce,
  g as we,
  h as Te,
  i as Ee,
  l as De,
  m as Oe,
  n as ke,
  o as Ae,
  p as je,
  r as Me,
  s as Ne,
  t as Pe,
  u as P,
  v as Fe,
  y as Ie,
} from "./steamnotifications.js";
var F = e(t()),
  Le = `wiJqXTPU468-`,
  Re = `hioRg1nXJCQ-`,
  ze = `_0aFiUekNE6I-`,
  Be = `_6CRZVgXX8WU-`,
  Ve = `-RS5MjpS9jg-`,
  He = `VCr0rtJhkqE-`,
  Ue = `_251Yq-pwxUA-`,
  We = `L0aJl-TTCO0-`,
  Ge = `jw00MnpI46s-`,
  Ke = `yV0P89CB4mg-`,
  qe = `d2UeLuiq6xY-`,
  Je = `EJrQKVkzhjk-`,
  Ye = `M7XVUF5aHZw-`,
  Xe = `GDByqt7FPpw-`,
  Ze = `wDxGI9lKYwM-`,
  Qe = `bhbnhf7x6FA-`;
function I(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? T(t, ...n) : t;
}
function $e(e, t) {
  return F.useMemo(() => {
    if (e === void 0) return null;
    let n = Oe(e),
      r = ye(t);
    if (!n || !r) return null;
    let i =
        typeof n.displayNameLoc == `function`
          ? n.displayNameLoc(r)
          : { locString: n.displayNameLoc },
      a =
        typeof n.titleLoc == `function`
          ? n.titleLoc(r)
          : { locString: n.titleLoc },
      o =
        typeof n.bodyLoc == `function`
          ? n.bodyLoc(r)
          : { locString: n.bodyLoc },
      s = typeof n.image == `function` ? n.image(r) : n.image,
      c = typeof n.link == `function` ? n.link(r) : n.link;
    return { display_name: I(i), title: I(a), body: I(o), image: s, link: c };
  }, [t, e]);
}
function et(e, t) {
  return F.useMemo(() => {
    let n = we(e),
      r = ye(t);
    if (!n) return null;
    let i = typeof n.titleLoc == `string` ? n.titleLoc : n.titleLoc(r),
      a = typeof n.bodyLoc == `string` ? n.bodyLoc : n.bodyLoc(r),
      o = typeof n.url == `string` ? n.url : n.url(r),
      s =
        typeof n.steamidAttribute == `string`
          ? n.steamidAttribute
          : n.steamidAttribute(r);
    return { strTitleLoc: i, strBodyLoc: a, strUrl: o, steamid: r && r[s] };
  }, [t, e]);
}
function L(e) {
  return F.useMemo(() => (Ne(e.type) ? Te(e) : null), [e]);
}
var tt = `xKH6brPrFV4-`,
  nt = `TGHZjszXouA-`,
  rt = `_6e5Lw2oBEA8-`,
  it = `WRvk-2z-S7U-`,
  at = `nvOZwARKtWQ-`,
  ot = `XA47jRZ-kl4-`,
  R = `_5TOP1rhjK9g-`,
  st = `cfYT-RvHPnk-`,
  ct = `X7vR4UwyQ10-`,
  lt = `YhW9H-T-Hto-`,
  ut = `uxNRiRH0W-8-`,
  dt = `ts49d7c2wyQ-`,
  ft = `_4wHdhfSncuQ-`,
  pt = `_3GiOMfMgSIk-`,
  mt = `rnSSdvjnnIY-`,
  ht = `PqHuV1F7Sv8-`,
  gt = `YR06jcjcqq0-`,
  _t = `N-3dV6EGIb0-`,
  vt = `_8dzP2cjjs8I-`,
  yt = `_78CF9aUvUeY-`,
  bt = `iq-v-asRRbU-`,
  xt = `BIeyjH0P840-`,
  St = `rreXhb5OR24-`,
  Ct = `ohF5M-dbfvU-`,
  wt = `FSYcqMA13Ys-`,
  Tt = `oFu8pAhMtAE-`,
  Et = `dNwwI424aTg-`,
  z = n();
function Dt(e) {
  let { onActivate: t, icon: n, body: r, eUIMode: i, classNames: a } = e,
    o = t,
    c = at;
  return (
    i == 7 ? (c = _t) : i == 3 && (c = gt),
    (c = d(c, a)),
    (0, z.jsx)(s, {
      className: c,
      onActivate: o,
      children: (0, z.jsx)(`div`, {
        className: R,
        children: (0, z.jsxs)(`div`, {
          className: ft,
          children: [(0, z.jsx)(`span`, { className: ct, children: n }), r],
        }),
      }),
    })
  );
}
function Ot(e) {
  let {
    count: t,
    icon: n,
    onActivate: r,
    strBody: i,
    bAlwaysShow: a,
    eUIMode: o,
    classNames: s,
    visible: c,
  } = e;
  return !t && !a
    ? null
    : (0, z.jsx)(Dt, {
        icon: n,
        body: i,
        onActivate: r,
        eUIMode: o,
        classNames: s,
        visible: c,
      });
}
function B(e) {
  let {
      nUnread: t,
      location: n,
      eUIMode: r,
      bLoading: i,
      footer: a,
      bNewIndicator: o,
    } = e,
    [c, l] = F.useState(+!!i),
    [u, f] = F.useState(void 0);
  (F.useEffect(() => {
    c == 1 && !i ? l(2) : c == 2 && i && l(1);
  }, [c, i]),
    F.useEffect(() => {
      let e = window.setTimeout(() => l(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    F.useEffect(() => {
      t && t > 0 && u !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? f(yt)
        : !t && u == `_78CF9aUvUeY-` && f(vt);
    }, [t, n, u]));
  let p = e.onActivate;
  ((p ||= () => console.log(`Missing activate function`)),
    c == 1 && (p = void 0));
  let m = it;
  n == 4 ? (m = pt) : n == 2 ? (m = ht) : (r == 7 || r == 3) && (m = mt);
  let h = null;
  if (c != 0 && n != 2 && n != 1) {
    let e = c == 2 ? St : null;
    h = (0, z.jsxs)(`div`, {
      className: d(xt, e),
      children: [
        (0, z.jsx)(`div`, { className: d(ot, Ct) }),
        (0, z.jsxs)(`div`, {
          className: R,
          children: [
            (0, z.jsx)(`div`, { className: d(st, Tt) }),
            (0, z.jsx)(`div`, { className: d(bt, wt) }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsxs)(s, {
    onActivate: p,
    className: nt,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, z.jsxs)(`div`, {
        className: d(m, u),
        children: [
          (0, z.jsx)(`div`, { className: ot, children: e.logo }),
          e.personaStatus &&
            (0, z.jsx)(`div`, {
              className: d(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, z.jsx)(`div`, { className: R, children: e.children }),
          h,
          o && (0, z.jsx)(kt, { location: n }),
        ],
      }),
      a || null,
    ],
  });
}
function kt(e) {
  let { location: t } = e;
  return t == 3
    ? (0, z.jsx)(`div`, { className: Et, children: (0, z.jsx)(ge, {}) })
    : null;
}
function V(e) {
  let {
      icon: t,
      title: n,
      timestamp: r,
      location: i,
      fnRenderTimestamp: a,
    } = e,
    o = !!r && (i == 3 || i == 4),
    s;
  return (
    (s = i == 4 ? Mt : (a ?? Nt)),
    (0, z.jsxs)(`div`, {
      className: st,
      children: [
        (0, z.jsx)(At, { icon: t }),
        !!n && (0, z.jsx)(jt, { title: n }),
        o && s({ timestamp: r }),
      ],
    })
  );
}
function At(e) {
  return (0, z.jsxs)(z.Fragment, {
    children: [
      !!e.icon &&
        (0, z.jsx)(`div`, { className: `X7vR4UwyQ10-`, children: e.icon }),
      ` `,
    ],
  });
}
function jt(e) {
  return (0, z.jsx)(`div`, { className: lt, children: e.title });
}
function H(e) {
  let t = d(ut, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function U(e) {
  let t = d(dt, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function Mt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = de(e.timestamp);
  return (
    O(t, n) || (r = ie(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, z.jsx)(`div`, { className: rt, children: r })
  );
}
function Nt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = O(t, n) ? de(e.timestamp) : ie(e.timestamp, !1, !1, !1);
  return (0, z.jsx)(`div`, { className: rt, children: r });
}
function W(e) {
  return e == 1;
}
function Pt(e, t) {
  return F.useCallback(
    (n) => {
      (e && e(n), t && t());
    },
    [e, t],
  );
}
var Ft = `vjeKRorxqWY-`,
  It = `UWjdKshdhD8-`,
  Lt = `RZ1644uUH-k-`,
  Rt = `_5LTIC-a3DVw-`,
  zt = `BXKoUPp7c7k-`,
  Bt = `kg8VJS07NZk-`,
  Vt = `_8zZun04K77E-`,
  Ht = `rK6Z0uFfmRo-`;
function G(e) {
  let {
      onActivate: t,
      onDismiss: n,
      logo: r,
      icon: i,
      title: a,
      body: o,
      personaStatus: c,
      className: l,
      singleLineOnly: u,
      fullWidth: f,
      bodySuffix: p,
      bodySuffixToken: m,
    } = e,
    h = Pt(t, n);
  return (
    p &&
      m &&
      (o = D(
        m,
        (0, z.jsx)(`span`, { className: Vt, children: o }),
        (0, z.jsx)(`span`, { className: Ht, children: p }),
      )),
    (0, z.jsxs)(s, {
      className: d(Bt, !u && !p && `_5OrWG-2Mx14-`, l),
      onActivate: h,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, z.jsx)(`div`, { className: zt, children: r }),
        e.personaStatus &&
          (0, z.jsx)(`div`, { className: d(`f0Hsd0awDV4-`, c) }),
        (0, z.jsxs)(`div`, {
          className: d(Ft, f && `Dcsg7SLpVF8-`),
          children: [
            (0, z.jsxs)(`div`, {
              className: It,
              children: [
                !!i &&
                  (0, z.jsx)(`div`, { className: `q9vQBNOskjU-`, children: i }),
                (0, z.jsx)(`div`, { className: Lt, children: a }),
              ],
            }),
            (0, z.jsx)(`div`, {
              className: d(Rt, !!p && `Mx1dwYBxHfo-`),
              children: o,
            }),
          ],
        }),
      ],
    })
  );
}
var K = `wtEvuR05t3A-`,
  Ut = `JxEGxPRLYiU-`,
  q = `QEIVNNUa9hM-`,
  Wt = `GYEm-fQU5e0-`,
  Gt = `jkcoKzEvvVE-`,
  Kt = `Z-UOt0JU-rA-`;
function qt(e) {
  switch (e) {
    case 6:
      return (0, z.jsx)(me, {});
    case 11:
      return (0, z.jsx)(h, {});
    default:
      return (0, z.jsx)(p, {});
  }
}
function Jt(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = typeof n?.image == `number`,
    u = c ? { appid: n.image } : void 0,
    { data: d } = l(u),
    { data: f } = w(u),
    p = n?.display_name ?? ``,
    m = n?.title ?? n?.body,
    h = n?.title ? n.body : null,
    g = W(r),
    _ = u && (!d || !f),
    [v, y] = F.useState(!1),
    b = () => y(!0),
    x = null;
  if (c) x = J(f, t, g);
  else {
    let e = g ? q : K;
    x =
      n?.image && !v
        ? (0, z.jsx)(`img`, { className: e, src: n.image, onError: b })
        : t;
  }
  return g
    ? (0, z.jsx)(G, { ...e, logo: x, icon: i, title: p, body: m })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          logo: x,
          bLoading: _,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: i,
              title: p,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(H, { multiline: !h, children: m }),
            !!h && (0, z.jsx)(U, { children: h }),
            s ? (0, z.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function Yt(e) {
  let {
      displayName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = W(n),
    c = T(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? T(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : T(`#SteamNotifications_TradeOffer_Body`),
    u = T(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
    d = !t;
  return s
    ? (0, z.jsx)(G, { ...e, logo: e.logo, icon: e.icon, title: c, body: l })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          bLoading: d,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: r,
              title: c,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, z.jsx)(H, { children: l }),
            (0, z.jsx)(U, { children: u }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
var Xt = (e) => {
  let {
      location: t,
      icon: n,
      timestamp: r,
      fnRenderTimestamp: i,
      onHide: a,
    } = e,
    o = W(t),
    s = T(`#SteamNotifications_TradeReversal_Title`),
    c = T(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = T(`#SteamNotifications_TradeReversal_Description`);
  return o
    ? (0, z.jsx)(G, { ...e, logo: e.logo, icon: e.icon, title: s, body: c })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: n,
              title: s,
              timestamp: r,
              location: t,
              fnRenderTimestamp: i,
            }),
            (0, z.jsx)(H, { children: c }),
            (0, z.jsx)(U, { children: l }),
            a ? (0, z.jsx)(Y, { onHide: a }) : null,
          ],
        }),
      });
};
function Zt(e) {
  let {
      senderName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = W(n),
    c = s
      ? T(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : T(`#Notification_GiftReceived_Body`),
    l = t ? T(`#Notification_GiftReceived_Description`, t) : null,
    u = T(`#Notification_GiftReceived_Title`),
    d = !t;
  return s
    ? (0, z.jsx)(G, { ...e, logo: e.logo, icon: e.icon, title: u, body: c })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          bLoading: d,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: r,
              title: u,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, z.jsx)(H, { multiline: !l, children: c }),
            !!l && (0, z.jsx)(U, { children: l }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function Qt(e) {
  let {
      requestorName: t,
      requestorAvatarURL: n,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: l,
      fnRenderTimestamp: u,
      onHide: d,
    } = e,
    f = W(a),
    p = ``;
  t && i.state == 2
    ? (p = T(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (p = T(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (p = T(`#SteamNotifications_FriendInvite_Description`));
  let [m, h] = F.useState(!1),
    g = () => h(!0),
    _ = r;
  if (n && !m) {
    let e = i.state == 3 && a != 1,
      t = f ? q : K;
    _ = (0, z.jsxs)(s, {
      style: { position: `relative` },
      children: [
        e && (0, z.jsx)(c, { className: `A9KSdbG38mc-` }),
        (0, z.jsx)(`img`, { className: t, src: n, onError: g }),
      ],
    });
  }
  let v = t || T(`#SteamNotifications_FriendInvite_Body_Generic`),
    y = !t;
  return f
    ? (0, z.jsx)(G, {
        ...e,
        logo: _,
        icon: e.icon,
        title: T(`#Notification_FriendInvite_Title`),
        body: v,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          logo: _,
          bLoading: y,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: o,
              title: T(`#Notification_FriendInvite_Title`),
              timestamp: l,
              location: a,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(H, { multiline: !p, children: v }),
            !!p && (0, z.jsx)(U, { children: p }),
            d ? (0, z.jsx)(Y, { onHide: d }) : null,
          ],
        }),
      });
}
function $t(e) {
  let {
      itemState: t,
      fallbackLogo: n,
      data: r,
      location: i,
      icon: a,
      timestamp: o,
      appName: c,
      fnRenderTimestamp: l,
      nUnread: u,
      onHide: d,
    } = e,
    [f, p] = F.useState(!1),
    m = () => p(!0),
    h = W(i),
    g = n;
  if (t?.icon_url && !f) {
    let e = `${A.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = h ? q : K;
    g = (0, z.jsx)(s, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: r,
        style: { backgroundColor: n ?? void 0, justifyContent: `center` },
        src: e,
        onError: m,
      }),
    });
  }
  let _ = r.appid == 753,
    v = null;
  if (u !== void 0 && u > 1) {
    let e = u - 1;
    v = _
      ? T(`#Notification_Item_RollupMore_Steam`, e)
      : c
        ? T(`#Notification_Item_RollupMore_GameName`, e, c)
        : T(`#Notification_Item_RollupMore`, e);
  } else c && (v = _ ? c : T(`#Notification_Item_Single_GameName`, c));
  let y = t?.name ? t.name : T(`#Notification_Item_Body_Generic`),
    b = !t;
  if (h) {
    let t = ``;
    return (
      (t = c
        ? T(
            u > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            c,
          )
        : T(`#Notification_Item_Body_Generic`)),
      (0, z.jsx)(G, {
        ...e,
        logo: g,
        icon: e.icon,
        title: T(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, z.jsx)(X, {
    children: (0, z.jsxs)(B, {
      logo: g,
      bLoading: b,
      ...e,
      children: [
        (0, z.jsx)(V, {
          icon: a,
          title: T(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: l,
        }),
        (0, z.jsx)(H, { multiline: !v, children: y }),
        !!v && (0, z.jsx)(U, { children: v }),
        d ? (0, z.jsx)(Y, { onHide: d }) : null,
      ],
    }),
  });
}
function en(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = W(r),
    u = n.appid ? { appid: n.appid } : void 0,
    { data: d } = l(u),
    { data: f } = w(u),
    p = J(f, t, c),
    m = u && (!d || !f),
    h = ``;
  return (
    n.state == 1
      ? (h =
          c && d?.name
            ? T(`#SteamNotification_AsyncGame_Action_Short`, d.name)
            : T(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (h =
          c && d?.name
            ? T(`#SteamNotification_AsyncGame_Done_Short`, d.name)
            : T(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, z.jsx)(G, {
          ...e,
          logo: p,
          icon: e.icon,
          title: T(`#SteamNotification_AsyncGame_Title`),
          body: h,
        })
      : (0, z.jsx)(X, {
          children: (0, z.jsxs)(B, {
            logo: p,
            bLoading: m,
            ...e,
            children: [
              (0, z.jsx)(V, {
                icon: i,
                title: T(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, z.jsx)(H, { children: h }),
              (0, z.jsx)(U, { children: d?.name }),
              s ? (0, z.jsx)(Y, { onHide: s }) : null,
            ],
          }),
        })
  );
}
function tn(e) {
  let {
      title: t,
      body: n,
      logoUrl: r,
      bDataLoading: i,
      icon: a,
      onHide: o,
      location: c,
      timestamp: l,
      fnRenderTimestamp: u,
      onActivate: d,
      personaStatus: f,
    } = e,
    p = W(c),
    m = p ? q : K,
    h = (0, z.jsx)(s, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: m,
        style: { justifyContent: `center` },
        src: r,
      }),
    });
  return p
    ? (0, z.jsx)(G, {
        logo: h,
        icon: e.icon,
        title: t,
        body: n,
        onActivate: d,
        personaStatus: f,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          logo: h,
          bLoading: i,
          onActivate: d,
          personaStatus: f,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: a,
              title: t,
              timestamp: l,
              location: c,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(H, { multiline: !0, children: n }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function nn(e) {
  let {
      currentUserSteamID: t,
      fallbackLogo: n,
      postedByDisplayName: r,
      postedByAvatarURL: i,
      ownerDisplayName: a,
      data: o,
      location: s,
      icon: l,
      timestamp: u,
      fnRenderTimestamp: d,
      nUnread: f,
      appName: p,
      onHide: m,
      commentTitle: h,
      commentBody: g,
    } = e,
    _ = h,
    v = W(s),
    [y, b] = F.useState(!1),
    x = () => b(!0),
    [ee, S] = ve(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    C = be(o) ? r : null,
    w = Me(o) ? a : null;
  o.comment_type == 10
    ? (_ =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && C
            ? T(`#SteamNotifications_Comment_Your_Profile_By`, C)
            : T(`#SteamNotifications_Comment_Your_Profile`)
          : w
            ? s == 4 && C
              ? T(`#SteamNotifications_Comment_Player_Profile_By`, C, w)
              : T(`#SteamNotifications_Comment_Player_Profile`, w)
            : T(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (_ =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? p
              ? T(`#SteamNotifications_Comment_Your_Screenshot_Game`, p)
              : T(`#SteamNotifications_Comment_Your_Screenshot`)
            : p
              ? T(`#SteamNotifications_Comment_Screenshot_Game`, p)
              : T(`#SteamNotifications_Comment_Screenshot`))
      : !_ && o.json_data?.title && (_ = o.json_data.title);
  let te = null;
  o.brate_limited
    ? (_ =
        o.comment_type == 7 && o.bis_forum && g
          ? T(`#SteamNotifications_Comment_RateLimited_Forum`, g)
          : T(`#SteamNotifications_Comment_RateLimited`))
    : (te =
        o.comment_type == 7 && o.bis_forum && g
          ? (0, z.jsx)(U, {
              children: T(`#SteamNotifications_Comment_NewDiscussion`, g),
            })
          : (0, z.jsxs)(U, { children: [`"`, g, `"`] }));
  let E = T(`#SteamNotifications_Comment`),
    D = null;
  if (f !== void 0 && f > 1) {
    let e = `+` + (f - 1);
    s == 4
      ? (D = (0, z.jsx)(`div`, { className: Wt, children: e }))
      : (E = E + ` ` + e);
  }
  let O = n;
  if (!y) {
    let e = v ? q : K;
    if (i && Ee(o)) {
      let t = o.bhas_friend && s != 1;
      O = (0, z.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, z.jsx)(c, { className: `A9KSdbG38mc-` }),
          (0, z.jsx)(`img`, { className: e, src: i, onError: x }),
        ],
      });
    } else
      S?.avatar_medium_url &&
        (O = (0, z.jsx)(`img`, {
          className: e,
          src: S.avatar_medium_url,
          onError: x,
        }));
  }
  return v
    ? (0, z.jsx)(G, { ...e, logo: O, icon: e.icon, title: E, body: _ })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          logo: O,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: l,
              title: E,
              timestamp: u,
              location: s,
              fnRenderTimestamp: d,
            }),
            (0, z.jsx)(H, { children: _ }),
            te,
            D,
            m ? (0, z.jsx)(Y, { onHide: m }) : null,
          ],
        }),
      });
}
function rn(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = W(r),
    u = n.appid ? { appid: n.appid } : void 0,
    { data: d } = l(u),
    { data: f } = w(u),
    { data: p } = x(u),
    m = J(f, t, c),
    h = u && (!d || !f || !p),
    g = ``,
    _ = null;
  if (d) {
    let e = d.name ?? ``;
    ((g = e),
      n.count == 1
        ? c
          ? (g = D(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, z.jsx)(`span`, { children: e }),
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: p?.formatted_final_price,
              }),
            ))
          : (_ = D(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: p?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (g = T(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (_ = T(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (g = T(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (_ = T(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else g = T(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, z.jsx)(G, {
        ...e,
        logo: m,
        icon: e.icon,
        title: T(`#SteamNotifications_Wishlist`),
        body: g,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(B, {
          logo: m,
          bLoading: h,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: i,
              title: T(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(H, { multiline: !_, children: g }),
            !!_ && (0, z.jsx)(U, { children: _ }),
            s ? (0, z.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function J(e, t, n = !1) {
  let [r, i] = F.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, z.jsx)(s, { style: { position: `relative` }, children: t });
  let o = C(e, `community_icon`);
  return n
    ? (0, z.jsx)(s, {
        style: { position: `relative` },
        children: (0, z.jsx)(`img`, { src: o, className: q, onError: a }),
      })
    : (0, z.jsxs)(s, {
        style: { position: `relative` },
        children: [
          (0, z.jsx)(`img`, { className: d(Ut), src: o, onError: a }),
          (0, z.jsx)(`img`, {
            src: o,
            onError: a,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function Y(e) {
  return (0, z.jsx)(`div`, {
    className: Gt,
    onClick: (t) => {
      (e.onHide(), t.stopPropagation(), t.preventDefault());
    },
    onMouseDown: (e) => {
      (e.stopPropagation(), e.preventDefault());
    },
    children: (0, z.jsx)(he, {}),
  });
}
function X(e) {
  return (0, z.jsx)(`div`, { className: Kt, children: e.children });
}
var Z = null,
  an = !1;
function on() {
  return ((Z ||= new a({ BIsFriend: i() })), Z);
}
function sn() {
  let e = k(),
    t = re(),
    n = r(() => on().m_bInitialized);
  return (
    !n &&
      !an &&
      ((an = !0), Z.Init(M.accountid, e, t).finally(() => (an = !1))),
    [n, Z]
  );
}
function cn(e) {
  let t = null;
  return (xe(e) ? (t = pn) : Ae(e) ? (t = un) : Cn[e] && (t = Cn[e]), t);
}
function ln(e) {
  let { rollup: t, uimode: n, location: r } = e,
    i = cn(t.type);
  return i
    ? (0, z.jsx)(ce, {
        controller: `notification`,
        method: fe(n),
        submethod: ae(r),
        children: (0, z.jsx)(i, { ...e }),
      })
    : null;
}
function un(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = $e(t.item.notification_type, t.item.body_data),
    s = Ie(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = te(o?.link ?? `#`, s);
  return (0, z.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Jt, {
      icon: qt(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, z.jsx)(p, {}),
      location: r,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
function dn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${A.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = L(t);
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, z.jsx)(en, {
      icon: (0, z.jsx)(p, {}),
      fallbackLogo: (0, z.jsx)(g, {}),
      onActivate: s,
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
function fn(e) {
  let {
      steamid: t,
      url: n,
      strTitleLoc: r,
      strBodyLoc: i,
      rollup: a,
      onNotificationClick: s,
      location: c,
      uimode: l,
      onHide: u,
    } = e,
    { data: d } = o(t),
    f = (e) => s(() => {}, a.item, e),
    m = () => s(() => window.location.assign(n), a.item);
  if (!i) return null;
  let h = !d,
    g = T(r, d?.m_strPlayerName ?? ``),
    _ = T(i, d?.m_strPlayerName ?? ``);
  return (0, z.jsx)(`a`, {
    href: n,
    onMouseDown: f,
    children: (0, z.jsx)(tn, {
      title: g,
      body: _,
      bDataLoading: h,
      logoUrl: d?.avatar_url_medium,
      icon: (0, z.jsx)(p, {}),
      onActivate: m,
      location: c,
      eUIMode: l,
      timestamp: a.timestamp,
      nUnread: a.rgunread.length,
      bNewIndicator: P(a.item),
      onHide: u,
    }),
  });
}
function pn(e) {
  let t = et(e.rollup.type, e.rollup.item.body_data);
  if (!t) return null;
  let { strTitleLoc: n, strBodyLoc: r, strUrl: i, steamid: a } = t;
  return !a || !n || !r
    ? null
    : (0, z.jsx)(fn, {
        steamid: a,
        url: i,
        strTitleLoc: n,
        strBodyLoc: r,
        ...e,
      });
}
function mn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    s = j(),
    c = L(t),
    l = `${A.COMMUNITY_BASE_URL}profiles/${s}/tradeoffers`,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => n(() => {}, t.item, e),
    f = _.InitFromAccountID(c, A.EUNIVERSE),
    { data: m } = o(f.GetAccountID());
  return (0, z.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, z.jsx)(Yt, {
      logo: (0, z.jsx)(p, {}),
      icon: (0, z.jsx)(N, {}),
      onActivate: u,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: m?.m_strPlayerName,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
var hn = (e) => {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${A.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Xt, {
      logo: (0, z.jsx)(p, {}),
      icon: (0, z.jsx)(N, {}),
      onActivate: () => n(() => window.location.assign(o), t.item),
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
};
function gn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    s = j(),
    c = `${A.COMMUNITY_BASE_URL}profiles/${s}/inventory/#pending_gifts`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = L(t),
    f = _.InitFromAccountID(d, A.EUNIVERSE),
    { data: m } = o(f.GetAccountID());
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Zt, {
      logo: (0, z.jsx)(p, {}),
      icon: (0, z.jsx)(S, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: m?.m_strPlayerName,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
function _n(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    s = L(t),
    { data: c } = o(s.responder_steamid),
    l =
      s.package_id > 0
        ? { packageid: s.package_id }
        : { bundleid: s.bundle_id },
    { data: u } = f(l),
    d = u ? `app/${u.appid}` : ``,
    m = `${A.STORE_BASE_URL}${d}`,
    h = () => n(() => window.location.assign(m), t.item),
    g = (e) => n(() => {}, t.item, e),
    _ = !c || !u,
    v = T(`#SteamNotifications_RequestedGameAddedTitle`),
    y = u ? T(`#SteamNotifications_RequestedGameAddedBody`, u.name ?? ``) : ``;
  return (0, z.jsx)(`a`, {
    href: m,
    onMouseDown: g,
    children: (0, z.jsx)(tn, {
      title: v,
      body: y,
      bDataLoading: _,
      logoUrl: c?.avatar_url_medium,
      icon: (0, z.jsx)(p, {}),
      onActivate: h,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
function vn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = j(),
    s = k(),
    c = Fe(t.item, o, s),
    d = L(t),
    { data: f } = l(d?.appid ? { appid: d.appid } : void 0),
    m = `${A.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, z.jsx)(`a`, {
    href: m,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)($t, {
      appName: f?.name,
      icon: (0, z.jsx)(u, {}),
      fallbackLogo: (0, z.jsx)(p, {}),
      onActivate: () => n(() => window.location.assign(m), t.item),
      location: r,
      eUIMode: i,
      data: d,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      itemState: c,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
function yn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    s = j(),
    c = `${A.COMMUNITY_BASE_URL}profiles/${s}/friends/pending`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = L(t),
    { data: f } = o(d.requestorID);
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Qt, {
      fallbackLogo: (0, z.jsx)(ue, {}),
      icon: (0, z.jsx)(y, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      data: d,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: f?.avatar_url_medium,
      requestorName: f?.m_strPlayerName,
      bNewIndicator: P(t.item),
      onHide: a,
    }),
  });
}
function bn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    s = L(t),
    c = j(),
    u = A.COMMUNITY_BASE_URL + t.url,
    d = () => n(() => window.location.assign(u), t.item),
    f = (e) => {
      n(() => {}, t.item, e);
    },
    m = ke(s) ? s?.account_steam_id?.GetAccountID() : null,
    { data: h } = o(m),
    g = Pe(s) ? s?.owner_steam_id?.GetAccountID() : null,
    { data: _ } = o(g),
    v = s.json_data?.app_id ? { appid: s.json_data?.app_id } : void 0,
    { data: y } = l(v),
    [b, x] = sn(),
    ee = b ? x.FilterText(s.account_steam_id.GetAccountID(), s.title) : ``,
    S = b ? x.FilterText(s.account_steam_id.GetAccountID(), s.comment) : ``;
  return (0, z.jsx)(`a`, {
    href: u,
    onMouseDown: f,
    children: (0, z.jsx)(nn, {
      fallbackLogo: (0, z.jsx)(p, {}),
      icon: (0, z.jsx)(_e, {}),
      onActivate: d,
      location: r,
      currentUserSteamID: c,
      eUIMode: i,
      data: s,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      postedByAvatarURL: h?.avatar_url_medium,
      postedByDisplayName: h?.m_strPlayerName,
      ownerDisplayName: _?.m_strPlayerName,
      bNewIndicator: P(t.item),
      appName: y?.name,
      onHide: a,
      commentTitle: ee,
      commentBody: S,
      bLoading: !b,
    }),
  });
}
function xn(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = L(t),
    { data: s } = l({ appid: o.appid }),
    [c, u] = (0, F.useState)(``),
    d = j();
  return (
    (0, F.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return u(
          A.STORE_BASE_URL +
            `wishlist/profiles/${d}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return u(A.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      u(A.STORE_BASE_URL + `wishlist/profiles/${d}/${e}#sort=discount`);
    }, [o, s, d]),
    (0, z.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, z.jsx)(rn, {
        fallbackLogo: (0, z.jsx)(p, {}),
        icon: (0, z.jsx)(me, {}),
        onActivate: () => n(() => window.location.assign(c), t.item),
        location: r,
        data: o,
        timestamp: t.timestamp,
        nUnread: t.rgunread.length,
        eUIMode: i,
        bNewIndicator: P(t.item),
        onHide: a,
      }),
    })
  );
}
function Sn(e) {
  let { url: t, count: n, icon: r, strBody: i, eFeature: a } = e,
    o = v(a);
  return !n || o
    ? null
    : (0, z.jsx)(`a`, {
        href: t,
        className: tt,
        children: (0, z.jsx)(Ot, {
          icon: (0, z.jsx)(r, {}),
          count: n,
          onActivate: () => window.location.assign(t),
          strBody: i,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var Cn = { 3: bn, 8: xn, 5: yn, 4: vn, 2: gn, 9: mn, 12: dn, 22: _n, 29: hn },
  Q = new Ce(),
  wn = E(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    F.useEffect(() => {
      n && !Q.m_bLoaded && Q.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = k();
    (0, F.useEffect)(() => {
      (Q.setTransport(r), (window.RefreshSteamNotifications = () => Fn(r)));
    }, [r]);
    let i = $();
    return t
      ? (0, z.jsxs)(z.Fragment, {
          children: [(0, z.jsx)(Nn, {}), (0, z.jsx)(kn, {})],
        })
      : (0, z.jsx)(En, { nTotalUnviewed: i.nUnviewed });
  });
function $() {
  return r(() => ({
    notifications: Q.m_rgNotificationRollups,
    summary: Q.m_summary,
    loaded: Q.m_bLoaded,
    nUnviewed: Q.m_nUnviewed,
  }));
}
function Tn() {
  let e = $(),
    t = j(),
    { data: n } = ee(t),
    r = le(),
    i = n?.settings;
  return e.notifications.filter((e) => !De(e.type, i, r) && !Se(e.item));
}
function En(e) {
  let { nTotalUnviewed: t } = e,
    n = F.useRef(null),
    r = Tn(),
    [i, a] = F.useState(Ye);
  F.useEffect(() => {
    n.current ||
      ((n.current = b(
        (0, z.jsx)(Dn, { popupRef: n }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      n.current.Hide());
    let e = document.getElementById(`header_notification_link`);
    (e && (e.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => a(null), 2e3));
  }, []);
  let o = () => {
      n.current?.visible ||
        (n.current?.Show(),
        r.findIndex((e) => !e.item.viewed) != -1 && Q.MarkAllItemsViewed());
    },
    s = F.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, z.jsx)(ne, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, z.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: d(Ge, t ? Je : qe, i),
      children: (0, z.jsx)(pe, {
        className: Ke,
        "aria-label": T(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var Dn = (e) => {
    let { popupRef: t } = e,
      n = F.useRef(null),
      [r, i] = F.useState(!1);
    F.useEffect(() => {
      i(n.current != null && n.current?.scrollHeight > n.current?.clientHeight);
    }, [n.current?.scrollHeight, r]);
    let a = r ? void 0 : Be;
    return (0, z.jsxs)(`div`, {
      className: Le,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, z.jsx)(On, {}),
        (0, z.jsxs)(`div`, {
          className: d(ze, a),
          ref: n,
          children: [
            (0, z.jsx)(Nn, {}),
            (0, z.jsx)(jn, {}),
            (0, z.jsx)(Pn, {}),
          ],
        }),
      ],
    });
  },
  On = () => {
    let e = `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/notifications`;
    return (0, z.jsxs)(`div`, {
      className: d(Ve),
      children: [
        (0, z.jsx)(`div`, {
          className: Ue,
          children: T(`#NotificationsMenu_Title`),
        }),
        (0, z.jsx)(`a`, {
          href: e,
          children: (0, z.jsx)(`div`, {
            className: We,
            children: T(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  kn = () => {
    let e = `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/notifications`;
    return (0, z.jsx)(`div`, {
      className: d(Ve, He),
      children: (0, z.jsx)(`a`, {
        href: e,
        children: (0, z.jsx)(`div`, {
          className: We,
          children: T(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function An(e, t, n) {
  (t.read ||
    (n && n.button != 0 && n.button != 1) ||
    !t.notification_id ||
    Q.MarkItemRead(t.notification_id),
    e());
}
function jn() {
  let e = Tn();
  return e.length == 0
    ? null
    : (0, z.jsx)(`div`, {
        className: Re,
        children: e.map((e, t) =>
          (0, z.jsx)(
            ln,
            { rollup: e, onNotificationClick: An, uimode: 3, location: 3 },
            t,
          ),
        ),
      });
}
var Mn = [
  {
    fnUrl: () =>
      `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: S,
    fnLocalizeBody: (e) => m(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: y,
    fnLocalizeBody: (e) => m(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: _e,
    fnLocalizeBody: (e) => m(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: u,
    fnLocalizeBody: (e) => m(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: N,
    fnLocalizeBody: (e) => m(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${A.COMMUNITY_BASE_URL}profiles/${M.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: g,
    fnLocalizeBody: (e) => m(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: oe,
    fnLocalizeBody: (e) => m(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${A.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: h,
    fnLocalizeBody: (e) =>
      m(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${A.STORE_BASE_URL}account/familymanagement/join?ft=${M.steamid}`,
    countItem: `family_invites`,
    icon: p,
    fnLocalizeBody: (e) => m(`#Notification_FamilyInvitePinned_Body`, e),
  },
];
function Nn() {
  let e = $();
  return (0, z.jsx)(z.Fragment, {
    children: Mn.map((t) =>
      (0, z.jsx)(
        Sn,
        {
          url: t.fnUrl(),
          count: e.summary[t.countItem],
          icon: t.icon,
          strBody: t.fnLocalizeBody(e.summary[t.countItem]),
          eFeature: t.feature,
        },
        t.countItem,
      ),
    ),
  });
}
function Pn() {
  return (0, z.jsxs)(`div`, {
    className: Xe,
    children: [
      (0, z.jsx)(`div`, {
        className: Ze,
        children: T(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, z.jsx)(`div`, {
        className: Qe,
        children: T(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function Fn(e) {
  let t = null;
  try {
    t = await je(e, M.steamid, se(A.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && Q.ProcessNewNotificationPayload(t);
}
export { wn as GreenEnvelope, wn as default, $ as useSteamNotifications };

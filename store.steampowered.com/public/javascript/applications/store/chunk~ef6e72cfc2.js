/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, u as r } from "./chunk~01cfc309bf.js";
import { n as i, t as a } from "./chunk~a0dd05a569.js";
import { n as o } from "./chunk~d382bdf2cf.js";
import {
  $y as s,
  Ar as c,
  Ec as l,
  Fo as u,
  Js as d,
  Ju as f,
  Jy as p,
  M as m,
  Mo as h,
  Mv as g,
  Na as _,
  P as v,
  Pv as y,
  Qy as b,
  Ra as x,
  Us as S,
  Vo as C,
  Vy as w,
  Zc as T,
  _S as E,
  co as D,
  cx as O,
  fy as k,
  gS as ee,
  hb as te,
  hi as ne,
  ht as re,
  ic as ie,
  io as ae,
  j as oe,
  jc as A,
  jo as se,
  kv as ce,
  ly as le,
  mi as ue,
  nc as j,
  pt as de,
  py as M,
  qs as fe,
  ub as pe,
  ux as N,
  wc as P,
  xb as me,
  yS as he,
  zv as ge,
} from "./main.js";
import { n as _e } from "./chunk~437071091c.js";
import {
  _ as ve,
  a as ye,
  c as be,
  d as xe,
  f as Se,
  g as Ce,
  h as we,
  i as Te,
  l as Ee,
  m as De,
  n as Oe,
  o as ke,
  p as Ae,
  r as je,
  s as Me,
  t as Ne,
  u as F,
  v as Pe,
  y as Fe,
} from "./chunk~f169880238.js";
var I = e(t()),
  Ie = `wiJqXTPU468-`,
  Le = `hioRg1nXJCQ-`,
  Re = `_0aFiUekNE6I-`,
  ze = `_6CRZVgXX8WU-`,
  Be = `-RS5MjpS9jg-`,
  Ve = `VCr0rtJhkqE-`,
  He = `_251Yq-pwxUA-`,
  Ue = `L0aJl-TTCO0-`,
  We = `jw00MnpI46s-`,
  Ge = `yV0P89CB4mg-`,
  Ke = `d2UeLuiq6xY-`,
  qe = `EJrQKVkzhjk-`,
  Je = `M7XVUF5aHZw-`,
  Ye = `GDByqt7FPpw-`,
  Xe = `wDxGI9lKYwM-`,
  Ze = `bhbnhf7x6FA-`;
function L(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? p(t, ...n) : t;
}
function Qe(e, t) {
  return I.useMemo(() => {
    if (e === void 0) return null;
    let n = De(e),
      r = ve(t);
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
    return { display_name: L(i), title: L(a), body: L(o), image: s, link: c };
  }, [t, e]);
}
function $e(e, t) {
  return I.useMemo(() => {
    let n = Ce(e),
      r = ve(t);
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
function R(e) {
  return I.useMemo(() => (Me(e.type) ? we(e) : null), [e]);
}
var et = `xKH6brPrFV4-`,
  tt = `TGHZjszXouA-`,
  nt = `_6e5Lw2oBEA8-`,
  rt = `WRvk-2z-S7U-`,
  it = `nvOZwARKtWQ-`,
  at = `XA47jRZ-kl4-`,
  z = `_5TOP1rhjK9g-`,
  ot = `cfYT-RvHPnk-`,
  st = `X7vR4UwyQ10-`,
  ct = `YhW9H-T-Hto-`,
  lt = `uxNRiRH0W-8-`,
  ut = `ts49d7c2wyQ-`,
  dt = `_4wHdhfSncuQ-`,
  ft = `_3GiOMfMgSIk-`,
  pt = `rnSSdvjnnIY-`,
  mt = `PqHuV1F7Sv8-`,
  ht = `YR06jcjcqq0-`,
  gt = `N-3dV6EGIb0-`,
  _t = `_8dzP2cjjs8I-`,
  vt = `_78CF9aUvUeY-`,
  yt = `iq-v-asRRbU-`,
  bt = `BIeyjH0P840-`,
  xt = `rreXhb5OR24-`,
  St = `ohF5M-dbfvU-`,
  Ct = `FSYcqMA13Ys-`,
  wt = `oFu8pAhMtAE-`,
  Tt = `dNwwI424aTg-`,
  B = n();
function Et(e) {
  let { onActivate: t, icon: n, body: r, eUIMode: i, classNames: a } = e,
    o = t,
    s = it;
  return (
    i == 7 ? (s = gt) : i == 3 && (s = ht),
    (s = P(s, a)),
    (0, B.jsx)(A, {
      className: s,
      onActivate: o,
      children: (0, B.jsx)(`div`, {
        className: z,
        children: (0, B.jsxs)(`div`, {
          className: dt,
          children: [(0, B.jsx)(`span`, { className: st, children: n }), r],
        }),
      }),
    })
  );
}
function Dt(e) {
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
    : (0, B.jsx)(Et, {
        icon: n,
        body: i,
        onActivate: r,
        eUIMode: o,
        classNames: s,
        visible: c,
      });
}
function V(e) {
  let {
      nUnread: t,
      location: n,
      eUIMode: r,
      bLoading: i,
      footer: a,
      bNewIndicator: o,
    } = e,
    [s, c] = I.useState(+!!i),
    [l, u] = I.useState(void 0);
  (I.useEffect(() => {
    s == 1 && !i ? c(2) : s == 2 && i && c(1);
  }, [s, i]),
    I.useEffect(() => {
      let e = window.setTimeout(() => c(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    I.useEffect(() => {
      t && t > 0 && l !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? u(vt)
        : !t && l == `_78CF9aUvUeY-` && u(_t);
    }, [t, n, l]));
  let d = e.onActivate;
  ((d ||= () => console.log(`Missing activate function`)),
    s == 1 && (d = void 0));
  let f = rt;
  n == 4 ? (f = ft) : n == 2 ? (f = mt) : (r == 7 || r == 3) && (f = pt);
  let p = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? xt : null;
    p = (0, B.jsxs)(`div`, {
      className: P(bt, e),
      children: [
        (0, B.jsx)(`div`, { className: P(at, St) }),
        (0, B.jsxs)(`div`, {
          className: z,
          children: [
            (0, B.jsx)(`div`, { className: P(ot, wt) }),
            (0, B.jsx)(`div`, { className: P(yt, Ct) }),
          ],
        }),
      ],
    });
  }
  return (0, B.jsxs)(A, {
    onActivate: d,
    className: tt,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, B.jsxs)(`div`, {
        className: P(f, l),
        children: [
          (0, B.jsx)(`div`, { className: at, children: e.logo }),
          e.personaStatus &&
            (0, B.jsx)(`div`, {
              className: P(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, B.jsx)(`div`, { className: z, children: e.children }),
          p,
          o && (0, B.jsx)(Ot, { location: n }),
        ],
      }),
      a || null,
    ],
  });
}
function Ot(e) {
  let { location: t } = e;
  return t == 3
    ? (0, B.jsx)(`div`, { className: Tt, children: (0, B.jsx)(ae, {}) })
    : null;
}
function H(e) {
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
    (s = i == 4 ? jt : (a ?? Mt)),
    (0, B.jsxs)(`div`, {
      className: ot,
      children: [
        (0, B.jsx)(kt, { icon: t }),
        !!n && (0, B.jsx)(At, { title: n }),
        o && s({ timestamp: r }),
      ],
    })
  );
}
function kt(e) {
  return (0, B.jsxs)(B.Fragment, {
    children: [
      !!e.icon &&
        (0, B.jsx)(`div`, { className: `X7vR4UwyQ10-`, children: e.icon }),
      ` `,
    ],
  });
}
function At(e) {
  return (0, B.jsx)(`div`, { className: ct, children: e.title });
}
function U(e) {
  let t = P(lt, e.multiline && `ho1ru92H8AU-`);
  return (0, B.jsx)(`div`, { className: t, children: e.children });
}
function W(e) {
  let t = P(ut, e.multiline && `ho1ru92H8AU-`);
  return (0, B.jsx)(`div`, { className: t, children: e.children });
}
function jt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = pe(e.timestamp);
  return (
    me(t, n) || (r = te(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, B.jsx)(`div`, { className: nt, children: r })
  );
}
function Mt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = me(t, n) ? pe(e.timestamp) : te(e.timestamp, !1, !1, !1);
  return (0, B.jsx)(`div`, { className: nt, children: r });
}
function G(e) {
  return e == 1;
}
function Nt(e, t) {
  return I.useCallback(
    (n) => {
      (e && e(n), t && t());
    },
    [e, t],
  );
}
var Pt = `vjeKRorxqWY-`,
  Ft = `UWjdKshdhD8-`,
  It = `RZ1644uUH-k-`,
  Lt = `_5LTIC-a3DVw-`,
  Rt = `BXKoUPp7c7k-`,
  zt = `kg8VJS07NZk-`,
  Bt = `_8zZun04K77E-`,
  Vt = `rK6Z0uFfmRo-`;
function K(e) {
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
      fullWidth: d,
      bodySuffix: f,
      bodySuffixToken: p,
    } = e,
    m = Nt(t, n);
  return (
    f &&
      p &&
      (o = s(
        p,
        (0, B.jsx)(`span`, { className: Bt, children: o }),
        (0, B.jsx)(`span`, { className: Vt, children: f }),
      )),
    (0, B.jsxs)(A, {
      className: P(zt, !u && !f && `_5OrWG-2Mx14-`, l),
      onActivate: m,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, B.jsx)(`div`, { className: Rt, children: r }),
        e.personaStatus &&
          (0, B.jsx)(`div`, { className: P(`f0Hsd0awDV4-`, c) }),
        (0, B.jsxs)(`div`, {
          className: P(Pt, d && `Dcsg7SLpVF8-`),
          children: [
            (0, B.jsxs)(`div`, {
              className: Ft,
              children: [
                !!i &&
                  (0, B.jsx)(`div`, { className: `q9vQBNOskjU-`, children: i }),
                (0, B.jsx)(`div`, { className: It, children: a }),
              ],
            }),
            (0, B.jsx)(`div`, {
              className: P(Lt, !!f && `Mx1dwYBxHfo-`),
              children: o,
            }),
          ],
        }),
      ],
    })
  );
}
var q = `wtEvuR05t3A-`,
  Ht = `JxEGxPRLYiU-`,
  J = `QEIVNNUa9hM-`,
  Ut = `GYEm-fQU5e0-`,
  Wt = `jkcoKzEvvVE-`,
  Gt = `Z-UOt0JU-rA-`;
function Kt(e) {
  switch (e) {
    case 6:
      return (0, B.jsx)(d, {});
    case 11:
      return (0, B.jsx)(fe, {});
    default:
      return (0, B.jsx)(S, {});
  }
}
function qt(e) {
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
    l = c ? { appid: n.image } : void 0,
    { data: u } = y(l),
    { data: d } = ce(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = G(r),
    g = l && (!u || !d),
    [_, v] = I.useState(!1),
    b = () => v(!0),
    x = null;
  if (c) x = rn(d, t, h);
  else {
    let e = h ? J : q;
    x =
      n?.image && !_
        ? (0, B.jsx)(`img`, { className: e, src: n.image, onError: b })
        : t;
  }
  return h
    ? (0, B.jsx)(K, { ...e, logo: x, icon: i, title: f, body: p })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: x,
          bLoading: g,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: i,
              title: f,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, B.jsx)(U, { multiline: !m, children: p }),
            !!m && (0, B.jsx)(W, { children: m }),
            s ? (0, B.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function Jt(e) {
  let {
      displayName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = G(n),
    c = p(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? p(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : p(`#SteamNotifications_TradeOffer_Body`),
    u = p(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
    d = !t;
  return s
    ? (0, B.jsx)(K, { ...e, logo: e.logo, icon: e.icon, title: c, body: l })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          bLoading: d,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: r,
              title: c,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, B.jsx)(U, { children: l }),
            (0, B.jsx)(W, { children: u }),
            o ? (0, B.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
var Yt = (e) => {
  let {
      location: t,
      icon: n,
      timestamp: r,
      fnRenderTimestamp: i,
      onHide: a,
    } = e,
    o = G(t),
    s = p(`#SteamNotifications_TradeReversal_Title`),
    c = p(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = p(`#SteamNotifications_TradeReversal_Description`);
  return o
    ? (0, B.jsx)(K, { ...e, logo: e.logo, icon: e.icon, title: s, body: c })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: n,
              title: s,
              timestamp: r,
              location: t,
              fnRenderTimestamp: i,
            }),
            (0, B.jsx)(U, { children: c }),
            (0, B.jsx)(W, { children: l }),
            a ? (0, B.jsx)(Y, { onHide: a }) : null,
          ],
        }),
      });
};
function Xt(e) {
  let {
      senderName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = G(n),
    c = s
      ? p(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : p(`#Notification_GiftReceived_Body`),
    l = t ? p(`#Notification_GiftReceived_Description`, t) : null,
    u = p(`#Notification_GiftReceived_Title`),
    d = !t;
  return s
    ? (0, B.jsx)(K, { ...e, logo: e.logo, icon: e.icon, title: u, body: c })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          bLoading: d,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: r,
              title: u,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, B.jsx)(U, { multiline: !l, children: c }),
            !!l && (0, B.jsx)(W, { children: l }),
            o ? (0, B.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function Zt(e) {
  let {
      requestorName: t,
      requestorAvatarURL: n,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: s,
      fnRenderTimestamp: c,
      onHide: l,
    } = e,
    u = G(a),
    d = ``;
  t && i.state == 2
    ? (d = p(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = p(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = p(`#SteamNotifications_FriendInvite_Description`));
  let [f, m] = I.useState(!1),
    h = () => m(!0),
    g = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? J : q;
    g = (0, B.jsxs)(A, {
      style: { position: `relative` },
      children: [
        e && (0, B.jsx)(se, { className: `A9KSdbG38mc-` }),
        (0, B.jsx)(`img`, { className: t, src: n, onError: h }),
      ],
    });
  }
  let _ = t || p(`#SteamNotifications_FriendInvite_Body_Generic`),
    v = !t;
  return u
    ? (0, B.jsx)(K, {
        ...e,
        logo: g,
        icon: e.icon,
        title: p(`#Notification_FriendInvite_Title`),
        body: _,
      })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: g,
          bLoading: v,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: o,
              title: p(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: c,
            }),
            (0, B.jsx)(U, { multiline: !d, children: _ }),
            !!d && (0, B.jsx)(W, { children: d }),
            l ? (0, B.jsx)(Y, { onHide: l }) : null,
          ],
        }),
      });
}
function Qt(e) {
  let {
      itemState: t,
      fallbackLogo: n,
      data: r,
      location: i,
      icon: a,
      timestamp: o,
      appName: s,
      fnRenderTimestamp: c,
      nUnread: l,
      onHide: u,
    } = e,
    [d, f] = I.useState(!1),
    m = () => f(!0),
    h = G(i),
    g = n;
  if (t?.icon_url && !d) {
    let e = `${O.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = h ? J : q;
    g = (0, B.jsx)(A, {
      style: { position: `relative` },
      children: (0, B.jsx)(`img`, {
        className: r,
        style: { backgroundColor: n ?? void 0, justifyContent: `center` },
        src: e,
        onError: m,
      }),
    });
  }
  let _ = r.appid == 753,
    v = null;
  if (l !== void 0 && l > 1) {
    let e = l - 1;
    v = _
      ? p(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? p(`#Notification_Item_RollupMore_GameName`, e, s)
        : p(`#Notification_Item_RollupMore`, e);
  } else s && (v = _ ? s : p(`#Notification_Item_Single_GameName`, s));
  let y = t?.name ? t.name : p(`#Notification_Item_Body_Generic`),
    b = !t;
  if (h) {
    let t = ``;
    return (
      (t = s
        ? p(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : p(`#Notification_Item_Body_Generic`)),
      (0, B.jsx)(K, {
        ...e,
        logo: g,
        icon: e.icon,
        title: p(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, B.jsx)(X, {
    children: (0, B.jsxs)(V, {
      logo: g,
      bLoading: b,
      ...e,
      children: [
        (0, B.jsx)(H, {
          icon: a,
          title: p(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: c,
        }),
        (0, B.jsx)(U, { multiline: !v, children: y }),
        !!v && (0, B.jsx)(W, { children: v }),
        u ? (0, B.jsx)(Y, { onHide: u }) : null,
      ],
    }),
  });
}
function $t(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = G(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = y(l),
    { data: d } = ce(l),
    f = rn(d, t, c),
    m = l && (!u || !d),
    h = ``;
  return (
    n.state == 1
      ? (h =
          c && u?.name
            ? p(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : p(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (h =
          c && u?.name
            ? p(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : p(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, B.jsx)(K, {
          ...e,
          logo: f,
          icon: e.icon,
          title: p(`#SteamNotification_AsyncGame_Title`),
          body: h,
        })
      : (0, B.jsx)(X, {
          children: (0, B.jsxs)(V, {
            logo: f,
            bLoading: m,
            ...e,
            children: [
              (0, B.jsx)(H, {
                icon: i,
                title: p(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, B.jsx)(U, { children: h }),
              (0, B.jsx)(W, { children: u?.name }),
              s ? (0, B.jsx)(Y, { onHide: s }) : null,
            ],
          }),
        })
  );
}
function en(e) {
  let {
      title: t,
      body: n,
      logoUrl: r,
      bDataLoading: i,
      icon: a,
      onHide: o,
      location: s,
      timestamp: c,
      fnRenderTimestamp: l,
      onActivate: u,
      personaStatus: d,
    } = e,
    f = G(s),
    p = f ? J : q,
    m = (0, B.jsx)(A, {
      style: { position: `relative` },
      children: (0, B.jsx)(`img`, {
        className: p,
        style: { justifyContent: `center` },
        src: r,
      }),
    });
  return f
    ? (0, B.jsx)(K, {
        logo: m,
        icon: e.icon,
        title: t,
        body: n,
        onActivate: u,
        personaStatus: d,
      })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: m,
          bLoading: i,
          onActivate: u,
          personaStatus: d,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: a,
              title: t,
              timestamp: c,
              location: s,
              fnRenderTimestamp: l,
            }),
            (0, B.jsx)(U, { multiline: !0, children: n }),
            o ? (0, B.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function tn(e) {
  let {
      currentUserSteamID: t,
      fallbackLogo: n,
      postedByDisplayName: r,
      postedByAvatarURL: i,
      ownerDisplayName: a,
      data: o,
      location: s,
      icon: c,
      timestamp: l,
      fnRenderTimestamp: u,
      nUnread: d,
      appName: f,
      onHide: m,
      commentTitle: h,
      commentBody: g,
    } = e,
    _ = h,
    v = G(s),
    [y, b] = I.useState(!1),
    x = () => b(!0),
    [S, C] = _e(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    w = ye(o) ? r : null,
    T = je(o) ? a : null;
  o.comment_type == 10
    ? (_ =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && w
            ? p(`#SteamNotifications_Comment_Your_Profile_By`, w)
            : p(`#SteamNotifications_Comment_Your_Profile`)
          : T
            ? s == 4 && w
              ? p(`#SteamNotifications_Comment_Player_Profile_By`, w, T)
              : p(`#SteamNotifications_Comment_Player_Profile`, T)
            : p(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (_ =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? f
              ? p(`#SteamNotifications_Comment_Your_Screenshot_Game`, f)
              : p(`#SteamNotifications_Comment_Your_Screenshot`)
            : f
              ? p(`#SteamNotifications_Comment_Screenshot_Game`, f)
              : p(`#SteamNotifications_Comment_Screenshot`))
      : !_ && o.json_data?.title && (_ = o.json_data.title);
  let E = null;
  o.brate_limited
    ? (_ =
        o.comment_type == 7 && o.bis_forum && g
          ? p(`#SteamNotifications_Comment_RateLimited_Forum`, g)
          : p(`#SteamNotifications_Comment_RateLimited`))
    : (E =
        o.comment_type == 7 && o.bis_forum && g
          ? (0, B.jsx)(W, {
              children: p(`#SteamNotifications_Comment_NewDiscussion`, g),
            })
          : (0, B.jsxs)(W, { children: [`"`, g, `"`] }));
  let D = p(`#SteamNotifications_Comment`),
    O = null;
  if (d !== void 0 && d > 1) {
    let e = `+` + (d - 1);
    s == 4
      ? (O = (0, B.jsx)(`div`, { className: Ut, children: e }))
      : (D = D + ` ` + e);
  }
  let k = n;
  if (!y) {
    let e = v ? J : q;
    if (i && Te(o)) {
      let t = o.bhas_friend && s != 1;
      k = (0, B.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, B.jsx)(se, { className: `A9KSdbG38mc-` }),
          (0, B.jsx)(`img`, { className: e, src: i, onError: x }),
        ],
      });
    } else
      C?.avatar_medium_url &&
        (k = (0, B.jsx)(`img`, {
          className: e,
          src: C.avatar_medium_url,
          onError: x,
        }));
  }
  return v
    ? (0, B.jsx)(K, { ...e, logo: k, icon: e.icon, title: D, body: _ })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: k,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: c,
              title: D,
              timestamp: l,
              location: s,
              fnRenderTimestamp: u,
            }),
            (0, B.jsx)(U, { children: _ }),
            E,
            O,
            m ? (0, B.jsx)(Y, { onHide: m }) : null,
          ],
        }),
      });
}
function nn(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: c,
    } = e,
    l = G(r),
    u = n.appid ? { appid: n.appid } : void 0,
    { data: d } = y(u),
    { data: f } = ce(u),
    { data: m } = g(u),
    h = rn(f, t, l),
    _ = u && (!d || !f || !m),
    v = ``,
    b = null;
  if (d) {
    let e = d.name ?? ``;
    ((v = e),
      n.count == 1
        ? l
          ? (v = s(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, B.jsx)(`span`, { children: e }),
              (0, B.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: m?.formatted_final_price,
              }),
            ))
          : (b = s(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, B.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: m?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? l
            ? (v = p(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (b = p(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : l
            ? (v = p(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (b = p(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else v = p(`#SteamNotifications_Wishlist_Generic`);
  return l
    ? (0, B.jsx)(K, {
        ...e,
        logo: h,
        icon: e.icon,
        title: p(`#SteamNotifications_Wishlist`),
        body: v,
      })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: h,
          bLoading: _,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: i,
              title: p(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, B.jsx)(U, { multiline: !b, children: v }),
            !!b && (0, B.jsx)(W, { children: b }),
            c ? (0, B.jsx)(Y, { onHide: c }) : null,
          ],
        }),
      });
}
function rn(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, B.jsx)(A, { style: { position: `relative` }, children: t });
  let o = l(e, `community_icon`);
  return n
    ? (0, B.jsx)(A, {
        style: { position: `relative` },
        children: (0, B.jsx)(`img`, { src: o, className: J, onError: a }),
      })
    : (0, B.jsxs)(A, {
        style: { position: `relative` },
        children: [
          (0, B.jsx)(`img`, { className: P(Ht), src: o, onError: a }),
          (0, B.jsx)(`img`, {
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
  return (0, B.jsx)(`div`, {
    className: Wt,
    onClick: (t) => {
      (e.onHide(), t.stopPropagation(), t.preventDefault());
    },
    onMouseDown: (e) => {
      (e.stopPropagation(), e.preventDefault());
    },
    children: (0, B.jsx)(ie, {}),
  });
}
function X(e) {
  return (0, B.jsx)(`div`, { className: Gt, children: e.children });
}
var Z = null,
  an = !1;
function on() {
  return ((Z ||= new a({ BIsFriend: i() })), Z);
}
function sn() {
  let e = le(),
    t = k(),
    n = r(() => on().m_bInitialized);
  return (
    !n &&
      !an &&
      ((an = !0), Z.Init(N.accountid, e, t).finally(() => (an = !1))),
    [n, Z]
  );
}
function cn(e) {
  let t = null;
  return (be(e) ? (t = pn) : ke(e) ? (t = un) : Cn[e] && (t = Cn[e]), t);
}
function ln(e) {
  let { rollup: t, uimode: n, location: r } = e,
    i = cn(t.type);
  return i
    ? (0, B.jsx)(de, {
        controller: `notification`,
        method: E(n),
        submethod: ee(r),
        children: (0, B.jsx)(i, { ...e }),
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
    o = Qe(t.item.notification_type, t.item.body_data),
    s = Fe(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = f(o?.link ?? `#`, s);
  return (0, B.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, B.jsx)(qt, {
      icon: Kt(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, B.jsx)(S, {}),
      location: r,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: F(t.item),
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
    o = `${O.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = R(t);
  return (0, B.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, B.jsx)($t, {
      icon: (0, B.jsx)(S, {}),
      fallbackLogo: (0, B.jsx)(x, {}),
      onActivate: s,
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: F(t.item),
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
    g = p(r, d?.m_strPlayerName ?? ``),
    _ = p(i, d?.m_strPlayerName ?? ``);
  return (0, B.jsx)(`a`, {
    href: n,
    onMouseDown: f,
    children: (0, B.jsx)(en, {
      title: g,
      body: _,
      bDataLoading: h,
      logoUrl: d?.avatar_url_medium,
      icon: (0, B.jsx)(S, {}),
      onActivate: m,
      location: c,
      eUIMode: l,
      timestamp: a.timestamp,
      nUnread: a.rgunread.length,
      bNewIndicator: F(a.item),
      onHide: u,
    }),
  });
}
function pn(e) {
  let t = $e(e.rollup.type, e.rollup.item.body_data);
  if (!t) return null;
  let { strTitleLoc: n, strBodyLoc: r, strUrl: i, steamid: a } = t;
  return !a || !n || !r
    ? null
    : (0, B.jsx)(fn, {
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
    s = M(),
    c = R(t),
    l = `${O.COMMUNITY_BASE_URL}profiles/${s}/tradeoffers`,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => n(() => {}, t.item, e),
    f = w.InitFromAccountID(c, O.EUNIVERSE),
    { data: p } = o(f.GetAccountID());
  return (0, B.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, B.jsx)(Jt, {
      logo: (0, B.jsx)(S, {}),
      icon: (0, B.jsx)(j, {}),
      onActivate: u,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: p?.m_strPlayerName,
      bNewIndicator: F(t.item),
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
    o = `${O.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, B.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, B.jsx)(Yt, {
      logo: (0, B.jsx)(S, {}),
      icon: (0, B.jsx)(j, {}),
      onActivate: () => n(() => window.location.assign(o), t.item),
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: F(t.item),
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
    s = M(),
    c = `${O.COMMUNITY_BASE_URL}profiles/${s}/inventory/#pending_gifts`,
    l = () => n(() => window.location.assign(c), t.item),
    d = (e) => n(() => {}, t.item, e),
    f = R(t),
    p = w.InitFromAccountID(f, O.EUNIVERSE),
    { data: m } = o(p.GetAccountID());
  return (0, B.jsx)(`a`, {
    href: c,
    onMouseDown: d,
    children: (0, B.jsx)(Xt, {
      logo: (0, B.jsx)(S, {}),
      icon: (0, B.jsx)(u, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: m?.m_strPlayerName,
      bNewIndicator: F(t.item),
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
    s = R(t),
    { data: c } = o(s.responder_steamid),
    l =
      s.package_id > 0
        ? { packageid: s.package_id }
        : { bundleid: s.bundle_id },
    { data: u } = ge(l),
    d = u ? `app/${u.appid}` : ``,
    f = `${O.STORE_BASE_URL}${d}`,
    m = () => n(() => window.location.assign(f), t.item),
    h = (e) => n(() => {}, t.item, e),
    g = !c || !u,
    _ = p(`#SteamNotifications_RequestedGameAddedTitle`),
    v = u ? p(`#SteamNotifications_RequestedGameAddedBody`, u.name ?? ``) : ``;
  return (0, B.jsx)(`a`, {
    href: f,
    onMouseDown: h,
    children: (0, B.jsx)(en, {
      title: _,
      body: v,
      bDataLoading: g,
      logoUrl: c?.avatar_url_medium,
      icon: (0, B.jsx)(S, {}),
      onActivate: m,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: F(t.item),
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
    o = M(),
    s = le(),
    c = Pe(t.item, o, s),
    l = R(t),
    { data: u } = y(l?.appid ? { appid: l.appid } : void 0),
    d = `${O.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, B.jsx)(`a`, {
    href: d,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, B.jsx)(Qt, {
      appName: u?.name,
      icon: (0, B.jsx)(C, {}),
      fallbackLogo: (0, B.jsx)(S, {}),
      onActivate: () => n(() => window.location.assign(d), t.item),
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      itemState: c,
      bNewIndicator: F(t.item),
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
    s = M(),
    c = `${O.COMMUNITY_BASE_URL}profiles/${s}/friends/pending`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = R(t),
    { data: f } = o(d.requestorID);
  return (0, B.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, B.jsx)(Zt, {
      fallbackLogo: (0, B.jsx)(h, {}),
      icon: (0, B.jsx)(_, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      data: d,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: f?.avatar_url_medium,
      requestorName: f?.m_strPlayerName,
      bNewIndicator: F(t.item),
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
    s = R(t),
    c = M(),
    l = O.COMMUNITY_BASE_URL + t.url,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => {
      n(() => {}, t.item, e);
    },
    f = Oe(s) ? s?.account_steam_id?.GetAccountID() : null,
    { data: p } = o(f),
    m = Ne(s) ? s?.owner_steam_id?.GetAccountID() : null,
    { data: h } = o(m),
    g = s.json_data?.app_id ? { appid: s.json_data?.app_id } : void 0,
    { data: _ } = y(g),
    [v, b] = sn(),
    x = v ? b.FilterText(s.account_steam_id.GetAccountID(), s.title) : ``,
    C = v ? b.FilterText(s.account_steam_id.GetAccountID(), s.comment) : ``;
  return (0, B.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, B.jsx)(tn, {
      fallbackLogo: (0, B.jsx)(S, {}),
      icon: (0, B.jsx)(D, {}),
      onActivate: u,
      location: r,
      currentUserSteamID: c,
      eUIMode: i,
      data: s,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      postedByAvatarURL: p?.avatar_url_medium,
      postedByDisplayName: p?.m_strPlayerName,
      ownerDisplayName: h?.m_strPlayerName,
      bNewIndicator: F(t.item),
      appName: _?.name,
      onHide: a,
      commentTitle: x,
      commentBody: C,
      bLoading: !v,
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
    o = R(t),
    { data: s } = y({ appid: o.appid }),
    [c, l] = (0, I.useState)(``),
    u = M();
  return (
    (0, I.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return l(
          O.STORE_BASE_URL +
            `wishlist/profiles/${u}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return l(O.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      l(O.STORE_BASE_URL + `wishlist/profiles/${u}/${e}#sort=discount`);
    }, [o, s, u]),
    (0, B.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, B.jsx)(nn, {
        fallbackLogo: (0, B.jsx)(S, {}),
        icon: (0, B.jsx)(d, {}),
        onActivate: () => n(() => window.location.assign(c), t.item),
        location: r,
        data: o,
        timestamp: t.timestamp,
        nUnread: t.rgunread.length,
        eUIMode: i,
        bNewIndicator: F(t.item),
        onHide: a,
      }),
    })
  );
}
function Sn(e) {
  let { url: t, count: n, icon: r, strBody: i, eFeature: a } = e,
    o = m(a);
  return !n || o
    ? null
    : (0, B.jsx)(`a`, {
        href: t,
        className: et,
        children: (0, B.jsx)(Dt, {
          icon: (0, B.jsx)(r, {}),
          count: n,
          onActivate: () => window.location.assign(t),
          strBody: i,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var Cn = { 3: bn, 8: xn, 5: yn, 4: vn, 2: gn, 9: mn, 12: dn, 22: _n, 29: hn },
  Q = new Se(),
  wn = T(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !Q.m_bLoaded && Q.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = le();
    (0, I.useEffect)(() => {
      (Q.setTransport(r), (window.RefreshSteamNotifications = () => Fn(r)));
    }, [r]);
    let i = $();
    return t
      ? (0, B.jsxs)(B.Fragment, {
          children: [(0, B.jsx)(Nn, {}), (0, B.jsx)(kn, {})],
        })
      : (0, B.jsx)(En, { nTotalUnviewed: i.nUnviewed });
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
    t = M(),
    { data: n } = v(t),
    r = oe(),
    i = n?.settings;
  return e.notifications.filter((e) => !Ee(e.type, i, r) && !xe(e.item));
}
function En(e) {
  let { nTotalUnviewed: t } = e,
    n = I.useRef(null),
    r = Tn(),
    [i, a] = I.useState(Je);
  I.useEffect(() => {
    n.current ||
      ((n.current = c(
        (0, B.jsx)(Dn, { popupRef: n }),
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
    s = I.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, B.jsx)(re, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, B.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: P(We, t ? qe : Ke, i),
      children: (0, B.jsx)(ne, {
        className: Ge,
        "aria-label": p(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var Dn = (e) => {
    let { popupRef: t } = e,
      n = I.useRef(null),
      [r, i] = I.useState(!1);
    I.useEffect(() => {
      i(n.current != null && n.current?.scrollHeight > n.current?.clientHeight);
    }, [n.current?.scrollHeight, r]);
    let a = r ? void 0 : ze;
    return (0, B.jsxs)(`div`, {
      className: Ie,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, B.jsx)(On, {}),
        (0, B.jsxs)(`div`, {
          className: P(Re, a),
          ref: n,
          children: [
            (0, B.jsx)(Nn, {}),
            (0, B.jsx)(jn, {}),
            (0, B.jsx)(Pn, {}),
          ],
        }),
      ],
    });
  },
  On = () => {
    let e = `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/notifications`;
    return (0, B.jsxs)(`div`, {
      className: P(Be),
      children: [
        (0, B.jsx)(`div`, {
          className: He,
          children: p(`#NotificationsMenu_Title`),
        }),
        (0, B.jsx)(`a`, {
          href: e,
          children: (0, B.jsx)(`div`, {
            className: Ue,
            children: p(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  kn = () => {
    let e = `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/notifications`;
    return (0, B.jsx)(`div`, {
      className: P(Be, Ve),
      children: (0, B.jsx)(`a`, {
        href: e,
        children: (0, B.jsx)(`div`, {
          className: Ue,
          children: p(`#NotificationsMenu_ViewAll`),
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
    : (0, B.jsx)(`div`, {
        className: Le,
        children: e.map((e, t) =>
          (0, B.jsx)(
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
      `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: u,
    fnLocalizeBody: (e) => b(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: _,
    fnLocalizeBody: (e) => b(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: D,
    fnLocalizeBody: (e) => b(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: C,
    fnLocalizeBody: (e) => b(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: j,
    fnLocalizeBody: (e) => b(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${O.COMMUNITY_BASE_URL}profiles/${N.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: x,
    fnLocalizeBody: (e) => b(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${O.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: ue,
    fnLocalizeBody: (e) => b(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${O.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: fe,
    fnLocalizeBody: (e) =>
      b(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${O.STORE_BASE_URL}account/familymanagement/join?ft=${N.steamid}`,
    countItem: `family_invites`,
    icon: S,
    fnLocalizeBody: (e) => b(`#Notification_FamilyInvitePinned_Body`, e),
  },
];
function Nn() {
  let e = $();
  return (0, B.jsx)(B.Fragment, {
    children: Mn.map((t) =>
      (0, B.jsx)(
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
  return (0, B.jsxs)(`div`, {
    className: Ye,
    children: [
      (0, B.jsx)(`div`, {
        className: Xe,
        children: p(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, B.jsx)(`div`, {
        className: Ze,
        children: p(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function Fn(e) {
  let t = null;
  try {
    t = await Ae(e, N.steamid, he(O.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && Q.ProcessNewNotificationPayload(t);
}
export { wn as GreenEnvelope, wn as default, $ as useSteamNotifications };

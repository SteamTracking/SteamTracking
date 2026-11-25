/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, l as r } from "./chunk~01cfc309bf.js";
import { n as i, t as a } from "./chunk~a0dd05a569.js";
import { n as o } from "./chunk~d382bdf2cf.js";
import {
  $s as s,
  AS as c,
  Cy as l,
  DS as u,
  Go as d,
  Ho as f,
  Hv as p,
  Ic as m,
  Ja as h,
  Lr as g,
  M as _,
  OS as v,
  P as y,
  Pc as b,
  Sy as x,
  Tb as S,
  Ti as C,
  Ua as w,
  Vc as T,
  Vo as ee,
  Wv as E,
  Yv as D,
  Zo as O,
  Zy as te,
  bb as ne,
  bx as k,
  cb as A,
  fc as j,
  gt as re,
  ib as M,
  ic as ie,
  id as ae,
  j as oe,
  jb as se,
  lb as N,
  mc as ce,
  mo as le,
  rc as ue,
  sl as de,
  vo as fe,
  vt as pe,
  vx as P,
  wi as me,
  yy as he,
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
  if (t) return t[0] === `#` ? M(t, ...n) : t;
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
    (s = b(s, a)),
    (0, B.jsx)(T, {
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
      className: b(bt, e),
      children: [
        (0, B.jsx)(`div`, { className: b(at, St) }),
        (0, B.jsxs)(`div`, {
          className: z,
          children: [
            (0, B.jsx)(`div`, { className: b(ot, wt) }),
            (0, B.jsx)(`div`, { className: b(yt, Ct) }),
          ],
        }),
      ],
    });
  }
  return (0, B.jsxs)(T, {
    onActivate: d,
    className: tt,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, B.jsxs)(`div`, {
        className: b(f, l),
        children: [
          (0, B.jsx)(`div`, { className: at, children: e.logo }),
          e.personaStatus &&
            (0, B.jsx)(`div`, {
              className: b(`ZQ9KB1rwRQg-`, e.personaStatus),
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
    ? (0, B.jsx)(`div`, { className: Tt, children: (0, B.jsx)(le, {}) })
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
  let t = b(lt, e.multiline && `ho1ru92H8AU-`);
  return (0, B.jsx)(`div`, { className: t, children: e.children });
}
function W(e) {
  let t = b(ut, e.multiline && `ho1ru92H8AU-`);
  return (0, B.jsx)(`div`, { className: t, children: e.children });
}
function jt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = ne(e.timestamp);
  return (
    se(t, n) || (r = S(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, B.jsx)(`div`, { className: nt, children: r })
  );
}
function Mt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = se(t, n) ? ne(e.timestamp) : S(e.timestamp, !1, !1, !1);
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
      personaStatus: s,
      className: c,
      singleLineOnly: l,
      fullWidth: u,
      bodySuffix: d,
      bodySuffixToken: f,
    } = e,
    p = Nt(t, n);
  return (
    d &&
      f &&
      (o = N(
        f,
        (0, B.jsx)(`span`, { className: Bt, children: o }),
        (0, B.jsx)(`span`, { className: Vt, children: d }),
      )),
    (0, B.jsxs)(T, {
      className: b(zt, !l && !d && `_5OrWG-2Mx14-`, c),
      onActivate: p,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, B.jsx)(`div`, { className: Rt, children: r }),
        e.personaStatus &&
          (0, B.jsx)(`div`, { className: b(`f0Hsd0awDV4-`, s) }),
        (0, B.jsxs)(`div`, {
          className: b(Pt, u && `Dcsg7SLpVF8-`),
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
              className: b(Lt, !!d && `Mx1dwYBxHfo-`),
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
      return (0, B.jsx)(ie, {});
    case 11:
      return (0, B.jsx)(ue, {});
    default:
      return (0, B.jsx)(s, {});
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
    { data: u } = E(l),
    { data: d } = ge(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = G(r),
    g = l && (!u || !d),
    [_, v] = I.useState(!1),
    y = () => v(!0),
    b = null;
  if (c) b = rn(d, t, h);
  else {
    let e = h ? J : q;
    b =
      n?.image && !_
        ? (0, B.jsx)(`img`, { className: e, src: n.image, onError: y })
        : t;
  }
  return h
    ? (0, B.jsx)(K, { ...e, logo: b, icon: i, title: f, body: p })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: b,
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
    c = M(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? M(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : M(`#SteamNotifications_TradeOffer_Body`),
    u = M(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
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
    s = M(`#SteamNotifications_TradeReversal_Title`),
    c = M(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = M(`#SteamNotifications_TradeReversal_Description`);
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
      ? M(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : M(`#Notification_GiftReceived_Body`),
    l = t ? M(`#Notification_GiftReceived_Description`, t) : null,
    u = M(`#Notification_GiftReceived_Title`),
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
    ? (d = M(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = M(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = M(`#SteamNotifications_FriendInvite_Description`));
  let [f, p] = I.useState(!1),
    m = () => p(!0),
    h = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? J : q;
    h = (0, B.jsxs)(T, {
      style: { position: `relative` },
      children: [
        e && (0, B.jsx)(ee, { className: `A9KSdbG38mc-` }),
        (0, B.jsx)(`img`, { className: t, src: n, onError: m }),
      ],
    });
  }
  let g = t || M(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !t;
  return u
    ? (0, B.jsx)(K, {
        ...e,
        logo: h,
        icon: e.icon,
        title: M(`#Notification_FriendInvite_Title`),
        body: g,
      })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: h,
          bLoading: _,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: o,
              title: M(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: c,
            }),
            (0, B.jsx)(U, { multiline: !d, children: g }),
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
    p = () => f(!0),
    m = G(i),
    h = n;
  if (t?.icon_url && !d) {
    let e = `${P.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = m ? J : q;
    h = (0, B.jsx)(T, {
      style: { position: `relative` },
      children: (0, B.jsx)(`img`, {
        className: r,
        style: { backgroundColor: n ?? void 0, justifyContent: `center` },
        src: e,
        onError: p,
      }),
    });
  }
  let g = r.appid == 753,
    _ = null;
  if (l !== void 0 && l > 1) {
    let e = l - 1;
    _ = g
      ? M(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? M(`#Notification_Item_RollupMore_GameName`, e, s)
        : M(`#Notification_Item_RollupMore`, e);
  } else s && (_ = g ? s : M(`#Notification_Item_Single_GameName`, s));
  let v = t?.name ? t.name : M(`#Notification_Item_Body_Generic`),
    y = !t;
  if (m) {
    let t = ``;
    return (
      (t = s
        ? M(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : M(`#Notification_Item_Body_Generic`)),
      (0, B.jsx)(K, {
        ...e,
        logo: h,
        icon: e.icon,
        title: M(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, B.jsx)(X, {
    children: (0, B.jsxs)(V, {
      logo: h,
      bLoading: y,
      ...e,
      children: [
        (0, B.jsx)(H, {
          icon: a,
          title: M(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: c,
        }),
        (0, B.jsx)(U, { multiline: !_, children: v }),
        !!_ && (0, B.jsx)(W, { children: _ }),
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
    { data: u } = E(l),
    { data: d } = ge(l),
    f = rn(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? M(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : M(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? M(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : M(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, B.jsx)(K, {
          ...e,
          logo: f,
          icon: e.icon,
          title: M(`#SteamNotification_AsyncGame_Title`),
          body: m,
        })
      : (0, B.jsx)(X, {
          children: (0, B.jsxs)(V, {
            logo: f,
            bLoading: p,
            ...e,
            children: [
              (0, B.jsx)(H, {
                icon: i,
                title: M(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, B.jsx)(U, { children: m }),
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
    m = (0, B.jsx)(T, {
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
      onHide: p,
      commentTitle: m,
      commentBody: h,
    } = e,
    g = m,
    _ = G(s),
    [v, y] = I.useState(!1),
    b = () => y(!0),
    [x, S] = _e(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    C = ye(o) ? r : null,
    w = je(o) ? a : null;
  o.comment_type == 10
    ? (g =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && C
            ? M(`#SteamNotifications_Comment_Your_Profile_By`, C)
            : M(`#SteamNotifications_Comment_Your_Profile`)
          : w
            ? s == 4 && C
              ? M(`#SteamNotifications_Comment_Player_Profile_By`, C, w)
              : M(`#SteamNotifications_Comment_Player_Profile`, w)
            : M(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (g =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? f
              ? M(`#SteamNotifications_Comment_Your_Screenshot_Game`, f)
              : M(`#SteamNotifications_Comment_Your_Screenshot`)
            : f
              ? M(`#SteamNotifications_Comment_Screenshot_Game`, f)
              : M(`#SteamNotifications_Comment_Screenshot`))
      : !g && o.json_data?.title && (g = o.json_data.title);
  let T = null;
  o.brate_limited
    ? (g =
        o.comment_type == 7 && o.bis_forum && h
          ? M(`#SteamNotifications_Comment_RateLimited_Forum`, h)
          : M(`#SteamNotifications_Comment_RateLimited`))
    : (T =
        o.comment_type == 7 && o.bis_forum && h
          ? (0, B.jsx)(W, {
              children: M(`#SteamNotifications_Comment_NewDiscussion`, h),
            })
          : (0, B.jsxs)(W, { children: [`"`, h, `"`] }));
  let E = M(`#SteamNotifications_Comment`),
    D = null;
  if (d !== void 0 && d > 1) {
    let e = `+` + (d - 1);
    s == 4
      ? (D = (0, B.jsx)(`div`, { className: Ut, children: e }))
      : (E = E + ` ` + e);
  }
  let O = n;
  if (!v) {
    let e = _ ? J : q;
    if (i && Te(o)) {
      let t = o.bhas_friend && s != 1;
      O = (0, B.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, B.jsx)(ee, { className: `A9KSdbG38mc-` }),
          (0, B.jsx)(`img`, { className: e, src: i, onError: b }),
        ],
      });
    } else
      S?.avatar_medium_url &&
        (O = (0, B.jsx)(`img`, {
          className: e,
          src: S.avatar_medium_url,
          onError: b,
        }));
  }
  return _
    ? (0, B.jsx)(K, { ...e, logo: O, icon: e.icon, title: E, body: g })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: O,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: c,
              title: E,
              timestamp: l,
              location: s,
              fnRenderTimestamp: u,
            }),
            (0, B.jsx)(U, { children: g }),
            T,
            D,
            p ? (0, B.jsx)(Y, { onHide: p }) : null,
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
      onHide: s,
    } = e,
    c = G(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = E(l),
    { data: d } = ge(l),
    { data: f } = p(l),
    m = rn(d, t, c),
    h = l && (!u || !d || !f),
    g = ``,
    _ = null;
  if (u) {
    let e = u.name ?? ``;
    ((g = e),
      n.count == 1
        ? c
          ? (g = N(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, B.jsx)(`span`, { children: e }),
              (0, B.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
          : (_ = N(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, B.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (g = M(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (_ = M(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (g = M(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (_ = M(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else g = M(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, B.jsx)(K, {
        ...e,
        logo: m,
        icon: e.icon,
        title: M(`#SteamNotifications_Wishlist`),
        body: g,
      })
    : (0, B.jsx)(X, {
        children: (0, B.jsxs)(V, {
          logo: m,
          bLoading: h,
          ...e,
          children: [
            (0, B.jsx)(H, {
              icon: i,
              title: M(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, B.jsx)(U, { multiline: !_, children: g }),
            !!_ && (0, B.jsx)(W, { children: _ }),
            s ? (0, B.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function rn(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, B.jsx)(T, { style: { position: `relative` }, children: t });
  let o = m(e, `community_icon`);
  return n
    ? (0, B.jsx)(T, {
        style: { position: `relative` },
        children: (0, B.jsx)(`img`, { src: o, className: J, onError: a }),
      })
    : (0, B.jsxs)(T, {
        style: { position: `relative` },
        children: [
          (0, B.jsx)(`img`, { className: b(Ht), src: o, onError: a }),
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
    children: (0, B.jsx)(ce, {}),
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
  let e = he(),
    t = x(),
    n = r(() => on().m_bInitialized);
  return (
    !n &&
      !an &&
      ((an = !0), Z.Init(k.accountid, e, t).finally(() => (an = !1))),
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
    ? (0, B.jsx)(re, {
        controller: `notification`,
        method: v(n),
        submethod: u(r),
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
    c = Fe(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    l = ae(o?.link ?? `#`, c);
  return (0, B.jsx)(`a`, {
    href: o?.link ? l : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, B.jsx)(qt, {
      icon: Kt(t.type),
      onActivate: () =>
        n(() => {
          o?.link && l && window.location.assign(l);
        }, t.item),
      fallbackLogo: (0, B.jsx)(s, {}),
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
    o = `${P.COMMUNITY_BASE_URL}my/gamenotifications/`,
    c = () => n(() => window.location.assign(o), t.item),
    l = (e) => n(() => {}, t.item, e),
    u = R(t);
  return (0, B.jsx)(`a`, {
    href: o,
    onMouseDown: l,
    children: (0, B.jsx)($t, {
      icon: (0, B.jsx)(s, {}),
      fallbackLogo: (0, B.jsx)(h, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      data: u,
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
      onNotificationClick: c,
      location: l,
      uimode: u,
      onHide: d,
    } = e,
    { data: f } = o(t),
    p = (e) => c(() => {}, a.item, e),
    m = () => c(() => window.location.assign(n), a.item);
  if (!i) return null;
  let h = !f,
    g = M(r, f?.m_strPlayerName ?? ``),
    _ = M(i, f?.m_strPlayerName ?? ``);
  return (0, B.jsx)(`a`, {
    href: n,
    onMouseDown: p,
    children: (0, B.jsx)(en, {
      title: g,
      body: _,
      bDataLoading: h,
      logoUrl: f?.avatar_url_medium,
      icon: (0, B.jsx)(s, {}),
      onActivate: m,
      location: l,
      eUIMode: u,
      timestamp: a.timestamp,
      nUnread: a.rgunread.length,
      bNewIndicator: F(a.item),
      onHide: d,
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
    c = l(),
    u = R(t),
    d = `${P.COMMUNITY_BASE_URL}profiles/${c}/tradeoffers`,
    f = () => n(() => window.location.assign(d), t.item),
    p = (e) => n(() => {}, t.item, e),
    m = te.InitFromAccountID(u, P.EUNIVERSE),
    { data: h } = o(m.GetAccountID());
  return (0, B.jsx)(`a`, {
    href: d,
    onMouseDown: p,
    children: (0, B.jsx)(Jt, {
      logo: (0, B.jsx)(s, {}),
      icon: (0, B.jsx)(j, {}),
      onActivate: f,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: h?.m_strPlayerName,
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
    o = `${P.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, B.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, B.jsx)(Yt, {
      logo: (0, B.jsx)(s, {}),
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
    c = l(),
    u = `${P.COMMUNITY_BASE_URL}profiles/${c}/inventory/#pending_gifts`,
    f = () => n(() => window.location.assign(u), t.item),
    p = (e) => n(() => {}, t.item, e),
    m = R(t),
    h = te.InitFromAccountID(m, P.EUNIVERSE),
    { data: g } = o(h.GetAccountID());
  return (0, B.jsx)(`a`, {
    href: u,
    onMouseDown: p,
    children: (0, B.jsx)(Xt, {
      logo: (0, B.jsx)(s, {}),
      icon: (0, B.jsx)(d, {}),
      onActivate: f,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: g?.m_strPlayerName,
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
    c = R(t),
    { data: l } = o(c.responder_steamid),
    u =
      c.package_id > 0
        ? { packageid: c.package_id }
        : { bundleid: c.bundle_id },
    { data: d } = D(u),
    f = d ? `app/${d.appid}` : ``,
    p = `${P.STORE_BASE_URL}${f}`,
    m = () => n(() => window.location.assign(p), t.item),
    h = (e) => n(() => {}, t.item, e),
    g = !l || !d,
    _ = M(`#SteamNotifications_RequestedGameAddedTitle`),
    v = d ? M(`#SteamNotifications_RequestedGameAddedBody`, d.name ?? ``) : ``;
  return (0, B.jsx)(`a`, {
    href: p,
    onMouseDown: h,
    children: (0, B.jsx)(en, {
      title: _,
      body: v,
      bDataLoading: g,
      logoUrl: l?.avatar_url_medium,
      icon: (0, B.jsx)(s, {}),
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
    o = l(),
    c = he(),
    u = Pe(t.item, o, c),
    d = R(t),
    { data: f } = E(d?.appid ? { appid: d.appid } : void 0),
    p = `${P.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, B.jsx)(`a`, {
    href: p,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, B.jsx)(Qt, {
      appName: f?.name,
      icon: (0, B.jsx)(O, {}),
      fallbackLogo: (0, B.jsx)(s, {}),
      onActivate: () => n(() => window.location.assign(p), t.item),
      location: r,
      eUIMode: i,
      data: d,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      itemState: u,
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
    s = l(),
    c = `${P.COMMUNITY_BASE_URL}profiles/${s}/friends/pending`,
    u = () => n(() => window.location.assign(c), t.item),
    d = (e) => n(() => {}, t.item, e),
    p = R(t),
    { data: m } = o(p.requestorID);
  return (0, B.jsx)(`a`, {
    href: c,
    onMouseDown: d,
    children: (0, B.jsx)(Zt, {
      fallbackLogo: (0, B.jsx)(f, {}),
      icon: (0, B.jsx)(w, {}),
      onActivate: u,
      location: r,
      eUIMode: i,
      data: p,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: m?.avatar_url_medium,
      requestorName: m?.m_strPlayerName,
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
    c = R(t),
    u = l(),
    d = P.COMMUNITY_BASE_URL + t.url,
    f = () => n(() => window.location.assign(d), t.item),
    p = (e) => {
      n(() => {}, t.item, e);
    },
    m = Oe(c) ? c?.account_steam_id?.GetAccountID() : null,
    { data: h } = o(m),
    g = Ne(c) ? c?.owner_steam_id?.GetAccountID() : null,
    { data: _ } = o(g),
    v = c.json_data?.app_id ? { appid: c.json_data?.app_id } : void 0,
    { data: y } = E(v),
    [b, x] = sn(),
    S = b ? x.FilterText(c.account_steam_id.GetAccountID(), c.title) : ``,
    C = b ? x.FilterText(c.account_steam_id.GetAccountID(), c.comment) : ``;
  return (0, B.jsx)(`a`, {
    href: d,
    onMouseDown: p,
    children: (0, B.jsx)(tn, {
      fallbackLogo: (0, B.jsx)(s, {}),
      icon: (0, B.jsx)(fe, {}),
      onActivate: f,
      location: r,
      currentUserSteamID: u,
      eUIMode: i,
      data: c,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      postedByAvatarURL: h?.avatar_url_medium,
      postedByDisplayName: h?.m_strPlayerName,
      ownerDisplayName: _?.m_strPlayerName,
      bNewIndicator: F(t.item),
      appName: y?.name,
      onHide: a,
      commentTitle: S,
      commentBody: C,
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
    o = R(t),
    { data: c } = E({ appid: o.appid }),
    [u, d] = (0, I.useState)(``),
    f = l();
  return (
    (0, I.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return d(
          P.STORE_BASE_URL +
            `wishlist/profiles/${f}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (c) return d(P.STORE_BASE_URL + c.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      d(P.STORE_BASE_URL + `wishlist/profiles/${f}/${e}#sort=discount`);
    }, [o, c, f]),
    (0, B.jsx)(`a`, {
      href: u,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, B.jsx)(nn, {
        fallbackLogo: (0, B.jsx)(s, {}),
        icon: (0, B.jsx)(ie, {}),
        onActivate: () => n(() => window.location.assign(u), t.item),
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
    o = _(a);
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
  wn = de(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !Q.m_bLoaded && Q.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = he();
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
    t = l(),
    { data: n } = y(t),
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
      ((n.current = g(
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
  return (0, B.jsx)(pe, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, B.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: b(We, t ? qe : Ke, i),
      children: (0, B.jsx)(C, {
        className: Ge,
        "aria-label": M(`#NotificationsMenu_Title`),
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
          className: b(Re, a),
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
    let e = `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/notifications`;
    return (0, B.jsxs)(`div`, {
      className: b(Be),
      children: [
        (0, B.jsx)(`div`, {
          className: He,
          children: M(`#NotificationsMenu_Title`),
        }),
        (0, B.jsx)(`a`, {
          href: e,
          children: (0, B.jsx)(`div`, {
            className: Ue,
            children: M(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  kn = () => {
    let e = `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/notifications`;
    return (0, B.jsx)(`div`, {
      className: b(Be, Ve),
      children: (0, B.jsx)(`a`, {
        href: e,
        children: (0, B.jsx)(`div`, {
          className: Ue,
          children: M(`#NotificationsMenu_ViewAll`),
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
      `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: d,
    fnLocalizeBody: (e) => A(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: w,
    fnLocalizeBody: (e) => A(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: fe,
    fnLocalizeBody: (e) => A(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: O,
    fnLocalizeBody: (e) => A(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: j,
    fnLocalizeBody: (e) => A(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${P.COMMUNITY_BASE_URL}profiles/${k.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: h,
    fnLocalizeBody: (e) => A(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${P.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: me,
    fnLocalizeBody: (e) => A(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${P.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: ue,
    fnLocalizeBody: (e) =>
      A(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${P.STORE_BASE_URL}account/familymanagement/join?ft=${k.steamid}`,
    countItem: `family_invites`,
    icon: s,
    fnLocalizeBody: (e) => A(`#Notification_FamilyInvitePinned_Body`, e),
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
        children: M(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, B.jsx)(`div`, {
        className: Ze,
        children: M(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function Fn(e) {
  let t = null;
  try {
    t = await Ae(e, k.steamid, c(P.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && Q.ProcessNewNotificationPayload(t);
}
export { wn as GreenEnvelope, wn as default, $ as useSteamNotifications };

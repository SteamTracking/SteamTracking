/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, u as r } from "./libraries.js";
import { n as i, t as a } from "./textfilterstore.js";
import { n as o } from "./playerstore.js";
import {
  Ao as s,
  Dr as c,
  Dv as l,
  Gs as u,
  Ia as d,
  Iy as f,
  Jy as p,
  Ks as m,
  M as h,
  No as g,
  P as _,
  Pv as v,
  Sc as y,
  Uu as b,
  Uy as x,
  Vs as S,
  Yc as C,
  _t as w,
  ab as T,
  ax as E,
  cy as D,
  dS as ee,
  di as O,
  ec as k,
  fS as te,
  fi as ne,
  gb as re,
  ht as ie,
  iy as ae,
  j as oe,
  ja as se,
  kc as A,
  ko as ce,
  kv as j,
  mS as le,
  nc as ue,
  no as de,
  oo as fe,
  qy as M,
  rx as N,
  sy as pe,
  ub as me,
  wc as he,
  wv as P,
  zo as ge,
} from "./main.js";
import { n as _e } from "./clanstore.js";
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
} from "./steamnotifications.js";
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
function Qe(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? x(t, ...n) : t;
}
function $e(e, t) {
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
    return {
      display_name: Qe(i),
      title: Qe(a),
      body: Qe(o),
      image: s,
      link: c,
    };
  }, [t, e]);
}
function et(e, t) {
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
function L(e) {
  return I.useMemo(() => (Me(e.type) ? we(e) : null), [e]);
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
    s = at;
  return (
    i == 7 ? (s = _t) : i == 3 && (s = gt),
    (s = y(s, a)),
    (0, z.jsx)(A, {
      className: s,
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
        ? u(yt)
        : !t && l == `_78CF9aUvUeY-` && u(vt);
    }, [t, n, l]));
  let d = e.onActivate;
  ((d ||= () => console.log(`Missing activate function`)),
    s == 1 && (d = void 0));
  let f = it;
  n == 4 ? (f = pt) : n == 2 ? (f = ht) : (r == 7 || r == 3) && (f = mt);
  let p = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? St : null;
    p = (0, z.jsxs)(`div`, {
      className: y(xt, e),
      children: [
        (0, z.jsx)(`div`, { className: y(ot, Ct) }),
        (0, z.jsxs)(`div`, {
          className: R,
          children: [
            (0, z.jsx)(`div`, { className: y(st, Tt) }),
            (0, z.jsx)(`div`, { className: y(bt, wt) }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsxs)(A, {
    onActivate: d,
    className: nt,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, z.jsxs)(`div`, {
        className: y(f, l),
        children: [
          (0, z.jsx)(`div`, { className: ot, children: e.logo }),
          e.personaStatus &&
            (0, z.jsx)(`div`, {
              className: y(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, z.jsx)(`div`, { className: R, children: e.children }),
          p,
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
    ? (0, z.jsx)(`div`, { className: Et, children: (0, z.jsx)(de, {}) })
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
  let t = y(ut, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function U(e) {
  let t = y(dt, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function Mt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = T(e.timestamp);
  return (
    re(t, n) || (r = me(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, z.jsx)(`div`, { className: rt, children: r })
  );
}
function Nt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = re(t, n) ? T(e.timestamp) : me(e.timestamp, !1, !1, !1);
  return (0, z.jsx)(`div`, { className: rt, children: r });
}
function W(e) {
  return e == 1;
}
function Pt(e, t) {
  return I.useCallback(
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
      personaStatus: s,
      className: c,
      singleLineOnly: l,
      fullWidth: u,
      bodySuffix: d,
      bodySuffixToken: f,
    } = e,
    m = Pt(t, n);
  return (
    d &&
      f &&
      (o = p(
        f,
        (0, z.jsx)(`span`, { className: Vt, children: o }),
        (0, z.jsx)(`span`, { className: Ht, children: d }),
      )),
    (0, z.jsxs)(A, {
      className: y(Bt, !l && !d && `_5OrWG-2Mx14-`, c),
      onActivate: m,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, z.jsx)(`div`, { className: zt, children: r }),
        e.personaStatus &&
          (0, z.jsx)(`div`, { className: y(`f0Hsd0awDV4-`, s) }),
        (0, z.jsxs)(`div`, {
          className: y(Ft, u && `Dcsg7SLpVF8-`),
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
              className: y(Rt, !!d && `Mx1dwYBxHfo-`),
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
      return (0, z.jsx)(m, {});
    case 11:
      return (0, z.jsx)(u, {});
    default:
      return (0, z.jsx)(S, {});
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
    l = c ? { appid: n.image } : void 0,
    { data: u } = j(l),
    { data: d } = P(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = W(r),
    g = l && (!u || !d),
    [_, v] = I.useState(!1),
    y = () => v(!0),
    b = null;
  if (c) b = an(d, t, h);
  else {
    let e = h ? q : K;
    b =
      n?.image && !_
        ? (0, z.jsx)(`img`, { className: e, src: n.image, onError: y })
        : t;
  }
  return h
    ? (0, z.jsx)(G, { ...e, logo: b, icon: i, title: f, body: p })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: b,
          bLoading: g,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: i,
              title: f,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(H, { multiline: !m, children: p }),
            !!m && (0, z.jsx)(U, { children: m }),
            s ? (0, z.jsx)(J, { onHide: s }) : null,
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
    c = x(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? x(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : x(`#SteamNotifications_TradeOffer_Body`),
    u = x(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
    d = !t;
  return s
    ? (0, z.jsx)(G, { ...e, logo: e.logo, icon: e.icon, title: c, body: l })
    : (0, z.jsx)(Y, {
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
            o ? (0, z.jsx)(J, { onHide: o }) : null,
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
    s = x(`#SteamNotifications_TradeReversal_Title`),
    c = x(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = x(`#SteamNotifications_TradeReversal_Description`);
  return o
    ? (0, z.jsx)(G, { ...e, logo: e.logo, icon: e.icon, title: s, body: c })
    : (0, z.jsx)(Y, {
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
            a ? (0, z.jsx)(J, { onHide: a }) : null,
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
      ? x(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : x(`#Notification_GiftReceived_Body`),
    l = t ? x(`#Notification_GiftReceived_Description`, t) : null,
    u = x(`#Notification_GiftReceived_Title`),
    d = !t;
  return s
    ? (0, z.jsx)(G, { ...e, logo: e.logo, icon: e.icon, title: u, body: c })
    : (0, z.jsx)(Y, {
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
            o ? (0, z.jsx)(J, { onHide: o }) : null,
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
      timestamp: s,
      fnRenderTimestamp: c,
      onHide: l,
    } = e,
    u = W(a),
    d = ``;
  t && i.state == 2
    ? (d = x(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = x(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = x(`#SteamNotifications_FriendInvite_Description`));
  let [f, p] = I.useState(!1),
    m = () => p(!0),
    h = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? q : K;
    h = (0, z.jsxs)(A, {
      style: { position: `relative` },
      children: [
        e && (0, z.jsx)(ce, { className: `A9KSdbG38mc-` }),
        (0, z.jsx)(`img`, { className: t, src: n, onError: m }),
      ],
    });
  }
  let g = t || x(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !t;
  return u
    ? (0, z.jsx)(G, {
        ...e,
        logo: h,
        icon: e.icon,
        title: x(`#Notification_FriendInvite_Title`),
        body: g,
      })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: h,
          bLoading: _,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: o,
              title: x(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: c,
            }),
            (0, z.jsx)(H, { multiline: !d, children: g }),
            !!d && (0, z.jsx)(U, { children: d }),
            l ? (0, z.jsx)(J, { onHide: l }) : null,
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
      appName: s,
      fnRenderTimestamp: c,
      nUnread: l,
      onHide: u,
    } = e,
    [d, f] = I.useState(!1),
    p = () => f(!0),
    m = W(i),
    h = n;
  if (t?.icon_url && !d) {
    let e = `${N.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = m ? q : K;
    h = (0, z.jsx)(A, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
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
      ? x(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? x(`#Notification_Item_RollupMore_GameName`, e, s)
        : x(`#Notification_Item_RollupMore`, e);
  } else s && (_ = g ? s : x(`#Notification_Item_Single_GameName`, s));
  let v = t?.name ? t.name : x(`#Notification_Item_Body_Generic`),
    y = !t;
  if (m) {
    let t = ``;
    return (
      (t = s
        ? x(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : x(`#Notification_Item_Body_Generic`)),
      (0, z.jsx)(G, {
        ...e,
        logo: h,
        icon: e.icon,
        title: x(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, z.jsx)(Y, {
    children: (0, z.jsxs)(B, {
      logo: h,
      bLoading: y,
      ...e,
      children: [
        (0, z.jsx)(V, {
          icon: a,
          title: x(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: c,
        }),
        (0, z.jsx)(H, { multiline: !_, children: v }),
        !!_ && (0, z.jsx)(U, { children: _ }),
        u ? (0, z.jsx)(J, { onHide: u }) : null,
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
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = j(l),
    { data: d } = P(l),
    f = an(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? x(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : x(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? x(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : x(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, z.jsx)(G, {
          ...e,
          logo: f,
          icon: e.icon,
          title: x(`#SteamNotification_AsyncGame_Title`),
          body: m,
        })
      : (0, z.jsx)(Y, {
          children: (0, z.jsxs)(B, {
            logo: f,
            bLoading: p,
            ...e,
            children: [
              (0, z.jsx)(V, {
                icon: i,
                title: x(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, z.jsx)(H, { children: m }),
              (0, z.jsx)(U, { children: u?.name }),
              s ? (0, z.jsx)(J, { onHide: s }) : null,
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
      location: s,
      timestamp: c,
      fnRenderTimestamp: l,
      onActivate: u,
      personaStatus: d,
    } = e,
    f = W(s),
    p = f ? q : K,
    m = (0, z.jsx)(A, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: p,
        style: { justifyContent: `center` },
        src: r,
      }),
    });
  return f
    ? (0, z.jsx)(G, {
        logo: m,
        icon: e.icon,
        title: t,
        body: n,
        onActivate: u,
        personaStatus: d,
      })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: m,
          bLoading: i,
          onActivate: u,
          personaStatus: d,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: a,
              title: t,
              timestamp: c,
              location: s,
              fnRenderTimestamp: l,
            }),
            (0, z.jsx)(H, { multiline: !0, children: n }),
            o ? (0, z.jsx)(J, { onHide: o }) : null,
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
    _ = W(s),
    [v, y] = I.useState(!1),
    b = () => y(!0),
    [S, C] = _e(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    w = ye(o) ? r : null,
    T = je(o) ? a : null;
  o.comment_type == 10
    ? (g =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && w
            ? x(`#SteamNotifications_Comment_Your_Profile_By`, w)
            : x(`#SteamNotifications_Comment_Your_Profile`)
          : T
            ? s == 4 && w
              ? x(`#SteamNotifications_Comment_Player_Profile_By`, w, T)
              : x(`#SteamNotifications_Comment_Player_Profile`, T)
            : x(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (g =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? f
              ? x(`#SteamNotifications_Comment_Your_Screenshot_Game`, f)
              : x(`#SteamNotifications_Comment_Your_Screenshot`)
            : f
              ? x(`#SteamNotifications_Comment_Screenshot_Game`, f)
              : x(`#SteamNotifications_Comment_Screenshot`))
      : !g && o.json_data?.title && (g = o.json_data.title);
  let E = null;
  o.brate_limited
    ? (g =
        o.comment_type == 7 && o.bis_forum && h
          ? x(`#SteamNotifications_Comment_RateLimited_Forum`, h)
          : x(`#SteamNotifications_Comment_RateLimited`))
    : (E =
        o.comment_type == 7 && o.bis_forum && h
          ? (0, z.jsx)(U, {
              children: x(`#SteamNotifications_Comment_NewDiscussion`, h),
            })
          : (0, z.jsxs)(U, { children: [`"`, h, `"`] }));
  let D = x(`#SteamNotifications_Comment`),
    ee = null;
  if (d !== void 0 && d > 1) {
    let e = `+` + (d - 1);
    s == 4
      ? (ee = (0, z.jsx)(`div`, { className: Wt, children: e }))
      : (D = D + ` ` + e);
  }
  let O = n;
  if (!v) {
    let e = _ ? q : K;
    if (i && Te(o)) {
      let t = o.bhas_friend && s != 1;
      O = (0, z.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, z.jsx)(ce, { className: `A9KSdbG38mc-` }),
          (0, z.jsx)(`img`, { className: e, src: i, onError: b }),
        ],
      });
    } else
      C?.avatar_medium_url &&
        (O = (0, z.jsx)(`img`, {
          className: e,
          src: C.avatar_medium_url,
          onError: b,
        }));
  }
  return _
    ? (0, z.jsx)(G, { ...e, logo: O, icon: e.icon, title: D, body: g })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: O,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: c,
              title: D,
              timestamp: l,
              location: s,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(H, { children: g }),
            E,
            ee,
            p ? (0, z.jsx)(J, { onHide: p }) : null,
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
    { data: d } = j(u),
    { data: f } = P(u),
    { data: m } = l(u),
    h = an(f, t, c),
    g = u && (!d || !f || !m),
    _ = ``,
    v = null;
  if (d) {
    let e = d.name ?? ``;
    ((_ = e),
      n.count == 1
        ? c
          ? (_ = p(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, z.jsx)(`span`, { children: e }),
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: m?.formatted_final_price,
              }),
            ))
          : (v = p(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: m?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (_ = x(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (v = x(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (_ = x(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (v = x(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else _ = x(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, z.jsx)(G, {
        ...e,
        logo: h,
        icon: e.icon,
        title: x(`#SteamNotifications_Wishlist`),
        body: _,
      })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: h,
          bLoading: g,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: i,
              title: x(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(H, { multiline: !v, children: _ }),
            !!v && (0, z.jsx)(U, { children: v }),
            s ? (0, z.jsx)(J, { onHide: s }) : null,
          ],
        }),
      });
}
function an(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, z.jsx)(A, { style: { position: `relative` }, children: t });
  let o = he(e, `community_icon`);
  return n
    ? (0, z.jsx)(A, {
        style: { position: `relative` },
        children: (0, z.jsx)(`img`, { src: o, className: q, onError: a }),
      })
    : (0, z.jsxs)(A, {
        style: { position: `relative` },
        children: [
          (0, z.jsx)(`img`, { className: y(Ut), src: o, onError: a }),
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
function J(e) {
  return (0, z.jsx)(`div`, {
    className: Gt,
    onClick: (t) => {
      (e.onHide(), t.stopPropagation(), t.preventDefault());
    },
    onMouseDown: (e) => {
      (e.stopPropagation(), e.preventDefault());
    },
    children: (0, z.jsx)(ue, {}),
  });
}
function Y(e) {
  return (0, z.jsx)(`div`, { className: Kt, children: e.children });
}
var X = null,
  Z = !1;
function on() {
  return ((X ||= new a({ BIsFriend: i() })), X);
}
function sn() {
  let e = ae(),
    t = pe(),
    n = r(() => on().m_bInitialized);
  return (
    !n && !Z && ((Z = !0), X.Init(E.accountid, e, t).finally(() => (Z = !1))),
    [n, X]
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
    ? (0, z.jsx)(ie, {
        controller: `notification`,
        method: te(n),
        submethod: ee(r),
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
    s = Fe(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = b(o?.link ?? `#`, s);
  return (0, z.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Jt, {
      icon: qt(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, z.jsx)(S, {}),
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
    o = `${N.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = L(t);
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, z.jsx)(en, {
      icon: (0, z.jsx)(S, {}),
      fallbackLogo: (0, z.jsx)(d, {}),
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
    p = () => s(() => window.location.assign(n), a.item);
  if (!i) return null;
  let m = !d,
    h = x(r, d?.m_strPlayerName ?? ``),
    g = x(i, d?.m_strPlayerName ?? ``);
  return (0, z.jsx)(`a`, {
    href: n,
    onMouseDown: f,
    children: (0, z.jsx)(tn, {
      title: h,
      body: g,
      bDataLoading: m,
      logoUrl: d?.avatar_url_medium,
      icon: (0, z.jsx)(S, {}),
      onActivate: p,
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
    s = D(),
    c = L(t),
    l = `${N.COMMUNITY_BASE_URL}profiles/${s}/tradeoffers`,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => n(() => {}, t.item, e),
    p = f.InitFromAccountID(c, N.EUNIVERSE),
    { data: m } = o(p.GetAccountID());
  return (0, z.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, z.jsx)(Yt, {
      logo: (0, z.jsx)(S, {}),
      icon: (0, z.jsx)(k, {}),
      onActivate: u,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: m?.m_strPlayerName,
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
    o = `${N.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Xt, {
      logo: (0, z.jsx)(S, {}),
      icon: (0, z.jsx)(k, {}),
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
    s = D(),
    c = `${N.COMMUNITY_BASE_URL}profiles/${s}/inventory/#pending_gifts`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = L(t),
    p = f.InitFromAccountID(d, N.EUNIVERSE),
    { data: m } = o(p.GetAccountID());
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Zt, {
      logo: (0, z.jsx)(S, {}),
      icon: (0, z.jsx)(g, {}),
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
    s = L(t),
    { data: c } = o(s.responder_steamid),
    l =
      s.package_id > 0
        ? { packageid: s.package_id }
        : { bundleid: s.bundle_id },
    { data: u } = v(l),
    d = u ? `app/${u.appid}` : ``,
    f = `${N.STORE_BASE_URL}${d}`,
    p = () => n(() => window.location.assign(f), t.item),
    m = (e) => n(() => {}, t.item, e),
    h = !c || !u,
    g = x(`#SteamNotifications_RequestedGameAddedTitle`),
    _ = u ? x(`#SteamNotifications_RequestedGameAddedBody`, u.name ?? ``) : ``;
  return (0, z.jsx)(`a`, {
    href: f,
    onMouseDown: m,
    children: (0, z.jsx)(tn, {
      title: g,
      body: _,
      bDataLoading: h,
      logoUrl: c?.avatar_url_medium,
      icon: (0, z.jsx)(S, {}),
      onActivate: p,
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
    o = D(),
    s = ae(),
    c = Pe(t.item, o, s),
    l = L(t),
    { data: u } = j(l?.appid ? { appid: l.appid } : void 0),
    d = `${N.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, z.jsx)(`a`, {
    href: d,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)($t, {
      appName: u?.name,
      icon: (0, z.jsx)(ge, {}),
      fallbackLogo: (0, z.jsx)(S, {}),
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
    c = D(),
    l = `${N.COMMUNITY_BASE_URL}profiles/${c}/friends/pending`,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => n(() => {}, t.item, e),
    f = L(t),
    { data: p } = o(f.requestorID);
  return (0, z.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, z.jsx)(Qt, {
      fallbackLogo: (0, z.jsx)(s, {}),
      icon: (0, z.jsx)(se, {}),
      onActivate: u,
      location: r,
      eUIMode: i,
      data: f,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: p?.avatar_url_medium,
      requestorName: p?.m_strPlayerName,
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
    s = L(t),
    c = D(),
    l = N.COMMUNITY_BASE_URL + t.url,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => {
      n(() => {}, t.item, e);
    },
    f = Oe(s) ? s?.account_steam_id?.GetAccountID() : null,
    { data: p } = o(f),
    m = Ne(s) ? s?.owner_steam_id?.GetAccountID() : null,
    { data: h } = o(m),
    g = s.json_data?.app_id ? { appid: s.json_data?.app_id } : void 0,
    { data: _ } = j(g),
    [v, y] = sn(),
    b = v ? y.FilterText(s.account_steam_id.GetAccountID(), s.title) : ``,
    x = v ? y.FilterText(s.account_steam_id.GetAccountID(), s.comment) : ``;
  return (0, z.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, z.jsx)(nn, {
      fallbackLogo: (0, z.jsx)(S, {}),
      icon: (0, z.jsx)(fe, {}),
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
      commentTitle: b,
      commentBody: x,
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
    o = L(t),
    { data: s } = j({ appid: o.appid }),
    [c, l] = (0, I.useState)(``),
    u = D();
  return (
    (0, I.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return l(
          N.STORE_BASE_URL +
            `wishlist/profiles/${u}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return l(N.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      l(N.STORE_BASE_URL + `wishlist/profiles/${u}/${e}#sort=discount`);
    }, [o, s, u]),
    (0, z.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, z.jsx)(rn, {
        fallbackLogo: (0, z.jsx)(S, {}),
        icon: (0, z.jsx)(m, {}),
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
    o = h(a);
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
  Q = new Se(),
  wn = C(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !Q.m_bLoaded && Q.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = ae();
    (0, I.useEffect)(() => {
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
    t = D(),
    { data: n } = _(t),
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
    s = I.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, z.jsx)(w, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, z.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: y(We, t ? qe : Ke, i),
      children: (0, z.jsx)(ne, {
        className: Ge,
        "aria-label": x(`#NotificationsMenu_Title`),
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
    return (0, z.jsxs)(`div`, {
      className: Ie,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, z.jsx)(On, {}),
        (0, z.jsxs)(`div`, {
          className: y(Re, a),
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
    let e = `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/notifications`;
    return (0, z.jsxs)(`div`, {
      className: y(Be),
      children: [
        (0, z.jsx)(`div`, {
          className: He,
          children: x(`#NotificationsMenu_Title`),
        }),
        (0, z.jsx)(`a`, {
          href: e,
          children: (0, z.jsx)(`div`, {
            className: Ue,
            children: x(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  kn = () => {
    let e = `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/notifications`;
    return (0, z.jsx)(`div`, {
      className: y(Be, Ve),
      children: (0, z.jsx)(`a`, {
        href: e,
        children: (0, z.jsx)(`div`, {
          className: Ue,
          children: x(`#NotificationsMenu_ViewAll`),
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
        className: Le,
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
      `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: g,
    fnLocalizeBody: (e) => M(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: se,
    fnLocalizeBody: (e) => M(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: fe,
    fnLocalizeBody: (e) => M(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: ge,
    fnLocalizeBody: (e) => M(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: k,
    fnLocalizeBody: (e) => M(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${N.COMMUNITY_BASE_URL}profiles/${E.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: d,
    fnLocalizeBody: (e) => M(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${N.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: O,
    fnLocalizeBody: (e) => M(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${N.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: u,
    fnLocalizeBody: (e) =>
      M(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${N.STORE_BASE_URL}account/familymanagement/join?ft=${E.steamid}`,
    countItem: `family_invites`,
    icon: S,
    fnLocalizeBody: (e) => M(`#Notification_FamilyInvitePinned_Body`, e),
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
    className: Ye,
    children: [
      (0, z.jsx)(`div`, {
        className: Xe,
        children: x(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, z.jsx)(`div`, {
        className: Ze,
        children: x(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function Fn(e) {
  let t = null;
  try {
    t = await Ae(e, E.steamid, le(N.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && Q.ProcessNewNotificationPayload(t);
}
export { wn as GreenEnvelope, wn as default, $ as useSteamNotifications };

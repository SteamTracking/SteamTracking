/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, u as r } from "./chunk~01cfc309bf.js";
import { n as i, t as a } from "./chunk~a0dd05a569.js";
import { n as o } from "./chunk~d382bdf2cf.js";
import {
  Ab as s,
  Bc as c,
  Bo as l,
  Ci as u,
  ES as d,
  Fc as f,
  Ha as p,
  Jv as m,
  Lr as h,
  M as g,
  Nc as _,
  OS as v,
  P as y,
  Qs as b,
  Rv as x,
  Sy as S,
  TS as C,
  Uv as w,
  Vo as T,
  Vv as E,
  Wo as D,
  Xo as O,
  Xy as k,
  _o as ee,
  _x as A,
  cb as te,
  dc as ne,
  gt as re,
  j as ie,
  nc as ae,
  ol as oe,
  pc as se,
  po as ce,
  qa as le,
  rb as j,
  rc as ue,
  rd as de,
  sb as M,
  vt as fe,
  vy as N,
  wb as pe,
  wi as me,
  xy as he,
  yb as ge,
  yx as P,
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
function Qe(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? j(t, ...n) : t;
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
    (s = _(s, a)),
    (0, z.jsx)(c, {
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
    [s, l] = I.useState(+!!i),
    [u, d] = I.useState(void 0);
  (I.useEffect(() => {
    s == 1 && !i ? l(2) : s == 2 && i && l(1);
  }, [s, i]),
    I.useEffect(() => {
      let e = window.setTimeout(() => l(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    I.useEffect(() => {
      t && t > 0 && u !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? d(yt)
        : !t && u == `_78CF9aUvUeY-` && d(vt);
    }, [t, n, u]));
  let f = e.onActivate;
  ((f ||= () => console.log(`Missing activate function`)),
    s == 1 && (f = void 0));
  let p = it;
  n == 4 ? (p = pt) : n == 2 ? (p = ht) : (r == 7 || r == 3) && (p = mt);
  let m = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? St : null;
    m = (0, z.jsxs)(`div`, {
      className: _(xt, e),
      children: [
        (0, z.jsx)(`div`, { className: _(ot, Ct) }),
        (0, z.jsxs)(`div`, {
          className: R,
          children: [
            (0, z.jsx)(`div`, { className: _(st, Tt) }),
            (0, z.jsx)(`div`, { className: _(bt, wt) }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsxs)(c, {
    onActivate: f,
    className: nt,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, z.jsxs)(`div`, {
        className: _(p, u),
        children: [
          (0, z.jsx)(`div`, { className: ot, children: e.logo }),
          e.personaStatus &&
            (0, z.jsx)(`div`, {
              className: _(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, z.jsx)(`div`, { className: R, children: e.children }),
          m,
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
    ? (0, z.jsx)(`div`, { className: Et, children: (0, z.jsx)(ce, {}) })
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
  let t = _(ut, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function U(e) {
  let t = _(dt, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function Mt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = ge(e.timestamp);
  return (
    s(t, n) || (r = pe(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, z.jsx)(`div`, { className: rt, children: r })
  );
}
function Nt(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = s(t, n) ? ge(e.timestamp) : pe(e.timestamp, !1, !1, !1);
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
      className: l,
      singleLineOnly: u,
      fullWidth: d,
      bodySuffix: f,
      bodySuffixToken: p,
    } = e,
    m = Pt(t, n);
  return (
    f &&
      p &&
      (o = te(
        p,
        (0, z.jsx)(`span`, { className: Vt, children: o }),
        (0, z.jsx)(`span`, { className: Ht, children: f }),
      )),
    (0, z.jsxs)(c, {
      className: _(Bt, !u && !f && `_5OrWG-2Mx14-`, l),
      onActivate: m,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, z.jsx)(`div`, { className: zt, children: r }),
        e.personaStatus &&
          (0, z.jsx)(`div`, { className: _(`f0Hsd0awDV4-`, s) }),
        (0, z.jsxs)(`div`, {
          className: _(Ft, d && `Dcsg7SLpVF8-`),
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
              className: _(Rt, !!f && `Mx1dwYBxHfo-`),
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
      return (0, z.jsx)(ue, {});
    case 11:
      return (0, z.jsx)(ae, {});
    default:
      return (0, z.jsx)(b, {});
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
    { data: u } = w(l),
    { data: d } = x(l),
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
    c = j(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? j(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : j(`#SteamNotifications_TradeOffer_Body`),
    u = j(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
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
    s = j(`#SteamNotifications_TradeReversal_Title`),
    c = j(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = j(`#SteamNotifications_TradeReversal_Description`);
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
      ? j(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : j(`#Notification_GiftReceived_Body`),
    l = t ? j(`#Notification_GiftReceived_Description`, t) : null,
    u = j(`#Notification_GiftReceived_Title`),
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
      fnRenderTimestamp: u,
      onHide: d,
    } = e,
    f = W(a),
    p = ``;
  t && i.state == 2
    ? (p = j(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (p = j(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (p = j(`#SteamNotifications_FriendInvite_Description`));
  let [m, h] = I.useState(!1),
    g = () => h(!0),
    _ = r;
  if (n && !m) {
    let e = i.state == 3 && a != 1,
      t = f ? q : K;
    _ = (0, z.jsxs)(c, {
      style: { position: `relative` },
      children: [
        e && (0, z.jsx)(l, { className: `A9KSdbG38mc-` }),
        (0, z.jsx)(`img`, { className: t, src: n, onError: g }),
      ],
    });
  }
  let v = t || j(`#SteamNotifications_FriendInvite_Body_Generic`),
    y = !t;
  return f
    ? (0, z.jsx)(G, {
        ...e,
        logo: _,
        icon: e.icon,
        title: j(`#Notification_FriendInvite_Title`),
        body: v,
      })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: _,
          bLoading: y,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: o,
              title: j(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(H, { multiline: !p, children: v }),
            !!p && (0, z.jsx)(U, { children: p }),
            d ? (0, z.jsx)(J, { onHide: d }) : null,
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
      fnRenderTimestamp: l,
      nUnread: u,
      onHide: d,
    } = e,
    [f, p] = I.useState(!1),
    m = () => p(!0),
    h = W(i),
    g = n;
  if (t?.icon_url && !f) {
    let e = `${A.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = h ? q : K;
    g = (0, z.jsx)(c, {
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
      ? j(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? j(`#Notification_Item_RollupMore_GameName`, e, s)
        : j(`#Notification_Item_RollupMore`, e);
  } else s && (v = _ ? s : j(`#Notification_Item_Single_GameName`, s));
  let y = t?.name ? t.name : j(`#Notification_Item_Body_Generic`),
    b = !t;
  if (h) {
    let t = ``;
    return (
      (t = s
        ? j(
            u > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : j(`#Notification_Item_Body_Generic`)),
      (0, z.jsx)(G, {
        ...e,
        logo: g,
        icon: e.icon,
        title: j(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, z.jsx)(Y, {
    children: (0, z.jsxs)(B, {
      logo: g,
      bLoading: b,
      ...e,
      children: [
        (0, z.jsx)(V, {
          icon: a,
          title: j(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: l,
        }),
        (0, z.jsx)(H, { multiline: !v, children: y }),
        !!v && (0, z.jsx)(U, { children: v }),
        d ? (0, z.jsx)(J, { onHide: d }) : null,
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
    { data: u } = w(l),
    { data: d } = x(l),
    f = an(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? j(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : j(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? j(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : j(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, z.jsx)(G, {
          ...e,
          logo: f,
          icon: e.icon,
          title: j(`#SteamNotification_AsyncGame_Title`),
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
                title: j(`#SteamNotification_AsyncGame_Title`),
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
      timestamp: l,
      fnRenderTimestamp: u,
      onActivate: d,
      personaStatus: f,
    } = e,
    p = W(s),
    m = p ? q : K,
    h = (0, z.jsx)(c, {
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
    : (0, z.jsx)(Y, {
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
              location: s,
              fnRenderTimestamp: u,
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
    [y, b] = I.useState(!1),
    x = () => b(!0),
    [S, C] = _e(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    w = ye(o) ? r : null,
    T = je(o) ? a : null;
  o.comment_type == 10
    ? (_ =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && w
            ? j(`#SteamNotifications_Comment_Your_Profile_By`, w)
            : j(`#SteamNotifications_Comment_Your_Profile`)
          : T
            ? s == 4 && w
              ? j(`#SteamNotifications_Comment_Player_Profile_By`, w, T)
              : j(`#SteamNotifications_Comment_Player_Profile`, T)
            : j(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (_ =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? p
              ? j(`#SteamNotifications_Comment_Your_Screenshot_Game`, p)
              : j(`#SteamNotifications_Comment_Your_Screenshot`)
            : p
              ? j(`#SteamNotifications_Comment_Screenshot_Game`, p)
              : j(`#SteamNotifications_Comment_Screenshot`))
      : !_ && o.json_data?.title && (_ = o.json_data.title);
  let E = null;
  o.brate_limited
    ? (_ =
        o.comment_type == 7 && o.bis_forum && g
          ? j(`#SteamNotifications_Comment_RateLimited_Forum`, g)
          : j(`#SteamNotifications_Comment_RateLimited`))
    : (E =
        o.comment_type == 7 && o.bis_forum && g
          ? (0, z.jsx)(U, {
              children: j(`#SteamNotifications_Comment_NewDiscussion`, g),
            })
          : (0, z.jsxs)(U, { children: [`"`, g, `"`] }));
  let D = j(`#SteamNotifications_Comment`),
    O = null;
  if (f !== void 0 && f > 1) {
    let e = `+` + (f - 1);
    s == 4
      ? (O = (0, z.jsx)(`div`, { className: Wt, children: e }))
      : (D = D + ` ` + e);
  }
  let k = n;
  if (!y) {
    let e = v ? q : K;
    if (i && Te(o)) {
      let t = o.bhas_friend && s != 1;
      k = (0, z.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, z.jsx)(l, { className: `A9KSdbG38mc-` }),
          (0, z.jsx)(`img`, { className: e, src: i, onError: x }),
        ],
      });
    } else
      C?.avatar_medium_url &&
        (k = (0, z.jsx)(`img`, {
          className: e,
          src: C.avatar_medium_url,
          onError: x,
        }));
  }
  return v
    ? (0, z.jsx)(G, { ...e, logo: k, icon: e.icon, title: D, body: _ })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: k,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: c,
              title: D,
              timestamp: u,
              location: s,
              fnRenderTimestamp: d,
            }),
            (0, z.jsx)(H, { children: _ }),
            E,
            O,
            m ? (0, z.jsx)(J, { onHide: m }) : null,
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
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = w(l),
    { data: d } = x(l),
    { data: f } = E(l),
    p = an(d, t, c),
    m = l && (!u || !d || !f),
    h = ``,
    g = null;
  if (u) {
    let e = u.name ?? ``;
    ((h = e),
      n.count == 1
        ? c
          ? (h = te(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, z.jsx)(`span`, { children: e }),
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
          : (g = te(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, z.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (h = j(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (g = j(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (h = j(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (g = j(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else h = j(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, z.jsx)(G, {
        ...e,
        logo: p,
        icon: e.icon,
        title: j(`#SteamNotifications_Wishlist`),
        body: h,
      })
    : (0, z.jsx)(Y, {
        children: (0, z.jsxs)(B, {
          logo: p,
          bLoading: m,
          ...e,
          children: [
            (0, z.jsx)(V, {
              icon: i,
              title: j(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(H, { multiline: !g, children: h }),
            !!g && (0, z.jsx)(U, { children: g }),
            s ? (0, z.jsx)(J, { onHide: s }) : null,
          ],
        }),
      });
}
function an(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, z.jsx)(c, { style: { position: `relative` }, children: t });
  let o = f(e, `community_icon`);
  return n
    ? (0, z.jsx)(c, {
        style: { position: `relative` },
        children: (0, z.jsx)(`img`, { src: o, className: q, onError: a }),
      })
    : (0, z.jsxs)(c, {
        style: { position: `relative` },
        children: [
          (0, z.jsx)(`img`, { className: _(Ut), src: o, onError: a }),
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
    children: (0, z.jsx)(se, {}),
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
  let e = N(),
    t = he(),
    n = r(() => on().m_bInitialized);
  return (
    !n && !Z && ((Z = !0), X.Init(P.accountid, e, t).finally(() => (Z = !1))),
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
    ? (0, z.jsx)(re, {
        controller: `notification`,
        method: d(n),
        submethod: C(r),
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
    c = de(o?.link ?? `#`, s);
  return (0, z.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Jt, {
      icon: qt(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, z.jsx)(b, {}),
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
    o = `${A.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = L(t);
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, z.jsx)(en, {
      icon: (0, z.jsx)(b, {}),
      fallbackLogo: (0, z.jsx)(le, {}),
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
    h = j(r, d?.m_strPlayerName ?? ``),
    g = j(i, d?.m_strPlayerName ?? ``);
  return (0, z.jsx)(`a`, {
    href: n,
    onMouseDown: f,
    children: (0, z.jsx)(tn, {
      title: h,
      body: g,
      bDataLoading: m,
      logoUrl: d?.avatar_url_medium,
      icon: (0, z.jsx)(b, {}),
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
    s = S(),
    c = L(t),
    l = `${A.COMMUNITY_BASE_URL}profiles/${s}/tradeoffers`,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => n(() => {}, t.item, e),
    f = k.InitFromAccountID(c, A.EUNIVERSE),
    { data: p } = o(f.GetAccountID());
  return (0, z.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, z.jsx)(Yt, {
      logo: (0, z.jsx)(b, {}),
      icon: (0, z.jsx)(ne, {}),
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
    o = `${A.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Xt, {
      logo: (0, z.jsx)(b, {}),
      icon: (0, z.jsx)(ne, {}),
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
    s = S(),
    c = `${A.COMMUNITY_BASE_URL}profiles/${s}/inventory/#pending_gifts`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = L(t),
    f = k.InitFromAccountID(d, A.EUNIVERSE),
    { data: p } = o(f.GetAccountID());
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Zt, {
      logo: (0, z.jsx)(b, {}),
      icon: (0, z.jsx)(D, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: p?.m_strPlayerName,
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
    { data: u } = m(l),
    d = u ? `app/${u.appid}` : ``,
    f = `${A.STORE_BASE_URL}${d}`,
    p = () => n(() => window.location.assign(f), t.item),
    h = (e) => n(() => {}, t.item, e),
    g = !c || !u,
    _ = j(`#SteamNotifications_RequestedGameAddedTitle`),
    v = u ? j(`#SteamNotifications_RequestedGameAddedBody`, u.name ?? ``) : ``;
  return (0, z.jsx)(`a`, {
    href: f,
    onMouseDown: h,
    children: (0, z.jsx)(tn, {
      title: _,
      body: v,
      bDataLoading: g,
      logoUrl: c?.avatar_url_medium,
      icon: (0, z.jsx)(b, {}),
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
    o = S(),
    s = N(),
    c = Pe(t.item, o, s),
    l = L(t),
    { data: u } = w(l?.appid ? { appid: l.appid } : void 0),
    d = `${A.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, z.jsx)(`a`, {
    href: d,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)($t, {
      appName: u?.name,
      icon: (0, z.jsx)(O, {}),
      fallbackLogo: (0, z.jsx)(b, {}),
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
    s = S(),
    c = `${A.COMMUNITY_BASE_URL}profiles/${s}/friends/pending`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = L(t),
    { data: f } = o(d.requestorID);
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, z.jsx)(Qt, {
      fallbackLogo: (0, z.jsx)(T, {}),
      icon: (0, z.jsx)(p, {}),
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
    s = L(t),
    c = S(),
    l = A.COMMUNITY_BASE_URL + t.url,
    u = () => n(() => window.location.assign(l), t.item),
    d = (e) => {
      n(() => {}, t.item, e);
    },
    f = Oe(s) ? s?.account_steam_id?.GetAccountID() : null,
    { data: p } = o(f),
    m = Ne(s) ? s?.owner_steam_id?.GetAccountID() : null,
    { data: h } = o(m),
    g = s.json_data?.app_id ? { appid: s.json_data?.app_id } : void 0,
    { data: _ } = w(g),
    [v, y] = sn(),
    x = v ? y.FilterText(s.account_steam_id.GetAccountID(), s.title) : ``,
    C = v ? y.FilterText(s.account_steam_id.GetAccountID(), s.comment) : ``;
  return (0, z.jsx)(`a`, {
    href: l,
    onMouseDown: d,
    children: (0, z.jsx)(nn, {
      fallbackLogo: (0, z.jsx)(b, {}),
      icon: (0, z.jsx)(ee, {}),
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
    o = L(t),
    { data: s } = w({ appid: o.appid }),
    [c, l] = (0, I.useState)(``),
    u = S();
  return (
    (0, I.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return l(
          A.STORE_BASE_URL +
            `wishlist/profiles/${u}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return l(A.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      l(A.STORE_BASE_URL + `wishlist/profiles/${u}/${e}#sort=discount`);
    }, [o, s, u]),
    (0, z.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, z.jsx)(rn, {
        fallbackLogo: (0, z.jsx)(b, {}),
        icon: (0, z.jsx)(ue, {}),
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
    o = g(a);
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
  wn = oe(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !Q.m_bLoaded && Q.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = N();
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
    t = S(),
    { data: n } = y(t),
    r = ie(),
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
      ((n.current = h(
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
  return (0, z.jsx)(fe, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, z.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: _(We, t ? qe : Ke, i),
      children: (0, z.jsx)(me, {
        className: Ge,
        "aria-label": j(`#NotificationsMenu_Title`),
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
          className: _(Re, a),
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
    let e = `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/notifications`;
    return (0, z.jsxs)(`div`, {
      className: _(Be),
      children: [
        (0, z.jsx)(`div`, {
          className: He,
          children: j(`#NotificationsMenu_Title`),
        }),
        (0, z.jsx)(`a`, {
          href: e,
          children: (0, z.jsx)(`div`, {
            className: Ue,
            children: j(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  kn = () => {
    let e = `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/notifications`;
    return (0, z.jsx)(`div`, {
      className: _(Be, Ve),
      children: (0, z.jsx)(`a`, {
        href: e,
        children: (0, z.jsx)(`div`, {
          className: Ue,
          children: j(`#NotificationsMenu_ViewAll`),
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
      `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: D,
    fnLocalizeBody: (e) => M(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: p,
    fnLocalizeBody: (e) => M(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: ee,
    fnLocalizeBody: (e) => M(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: O,
    fnLocalizeBody: (e) => M(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: ne,
    fnLocalizeBody: (e) => M(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${A.COMMUNITY_BASE_URL}profiles/${P.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: le,
    fnLocalizeBody: (e) => M(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${A.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: u,
    fnLocalizeBody: (e) => M(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${A.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: ae,
    fnLocalizeBody: (e) =>
      M(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${A.STORE_BASE_URL}account/familymanagement/join?ft=${P.steamid}`,
    countItem: `family_invites`,
    icon: b,
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
        children: j(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, z.jsx)(`div`, {
        className: Ze,
        children: j(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function Fn(e) {
  let t = null;
  try {
    t = await Ae(e, P.steamid, v(A.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && Q.ProcessNewNotificationPayload(t);
}
export { wn as GreenEnvelope, wn as default, $ as useSteamNotifications };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { vt as r } from "./chunk~6b8ddcaac8.js";
import { l as i } from "./chunk~673650a653.js";
import { t as a } from "./chunk~91ae5e1167.js";
import { S as o, i as s, v as c, y as l } from "./chunk~2f8c67b4de.js";
import {
  F as u,
  I as d,
  _ as f,
  c as p,
  l as m,
  v as h,
  y as g,
} from "./chunk~3f4314f3b4.js";
import { t as _ } from "./chunk~a8b8151a67.js";
import { n as v, t as y } from "./chunk~030d1d075f.js";
import {
  Br as b,
  Cr as x,
  Jy as S,
  TS as C,
  Vr as w,
  Xb as T,
  a as E,
  jc as D,
  kn as O,
  mS as k,
  qb as A,
  r as j,
  wc as M,
  yS as N,
} from "./main.js";
import "./chunk~56e6a40e9e.js";
var P = e(t(), 1),
  F = n();
function I(e) {
  let { eventLink: t, labelOverride: n } = e,
    r = P.useRef(null),
    [i, a] = P.useState(``),
    c = () => {
      let e = r.current?.ownerDocument.defaultView;
      r.current &&
        e &&
        e.navigator.clipboard
          .writeText(r.current.value)
          .then(() => a(S(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((e) => {
            (a(S(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, e));
          });
    };
  return (0, F.jsxs)(`div`, {
    children: [
      (0, F.jsxs)(`div`, {
        className: M(l, u),
        children: [
          (0, F.jsx)(`span`, {
            className: g,
            children: S(n ?? `#EventDisplay_Share_Link`),
          }),
          (0, F.jsx)(`input`, {
            className: h,
            ref: r,
            value: t,
            readOnly: !0,
            onClick: c,
          }),
          (0, F.jsx)(D, {
            className: M(s, o, f),
            onActivate: c,
            children: (0, F.jsx)(b, {
              toolTipContent: S(`#ToolTip_CopyLinkToClipboard`),
              children: (0, F.jsx)(`img`, {
                className: p,
                src: v,
                alt: S(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, F.jsx)(`div`, { className: m, children: i }),
    ],
  });
}
var L = `l`;
function R(e) {
  let { emoticonStore: t, ...n } = e;
  return (0, F.jsx)(j, { store: t, children: (0, F.jsx)(z, { ...n }) });
}
function z(e) {
  let { eventModel: t, strEventLink: n, closeModal: o } = e,
    s = i(t),
    l = E(),
    [u, f] = P.useState(() => N(A.LANGUAGE)),
    [p, m] = P.useState(!1),
    { elDialogElement: h, fnShowLogonDialog: g } = r(
      S(`#EventDisplay_Share_NotLoggedIn_Description`),
    ),
    v = P.useMemo(() => {
      if (!n) return ``;
      let e = new URL(n);
      return (e.searchParams.set(L, k(u)), e.href);
    }, [u, n]),
    b = A.EREALM === C.k_ESteamRealmChina;
  return p
    ? (0, F.jsx)(_, {
        eventLink: n,
        appid: t.appid,
        emoticonStore: l,
        closeModal: o,
      })
    : (0, F.jsxs)(O, {
        strDescription: ``,
        strTitle: S(`#Button_Share`),
        onCancel: o,
        onOK: o,
        bAlertDialog: !0,
        modalClassName: `EventDisplay_Share_Dialog`,
        children: [
          (0, F.jsxs)(`div`, {
            className: M(c, d),
            children: [
              !b &&
                (0, F.jsxs)(F.Fragment, {
                  children: [
                    (0, F.jsxs)(`div`, {
                      className: `Cx2zVOdOEwU-`,
                      children: [
                        (0, F.jsx)(`div`, {
                          className: `rk6-75sKTfs-`,
                          children: S(`#EventDisplay_Share_LanguageLabel`),
                        }),
                        (0, F.jsx)(`div`, {
                          children: (0, F.jsx)(a, {
                            selectedLang: u,
                            fnOnLanguageChanged: f,
                          }),
                        }),
                      ],
                    }),
                    (0, F.jsxs)(`div`, {
                      className: M(`befdhdeb-HY-`, `bPmDLn-lEoc-`),
                      style: { flexWrap: `wrap` },
                      children: [
                        (0, F.jsx)(w, {
                          toolTipContent: S(`#EventDisplay_Share_OnSteam`),
                          children: (0, F.jsxs)(D, {
                            onClick: () => {
                              T.logged_in ? m(!0) : g();
                            },
                            className: M(
                              `yYL-OrX9PtQ-`,
                              `D4J8JhjevEo-`,
                              `LQrwY5m9KjE-`,
                            ),
                            children: [
                              (0, F.jsx)(`img`, {
                                className: `uPjG9NaDuUg-`,
                                src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%200%201400%201409'%20enable-background='new%200%200%201400%201409'%20xml:space='preserve'%3e%3cpath%20fill='%23FFFFFF'%20d='M698.195,10.125c-364.347,0-662.838,280.938-691.206,637.969L378.74,801.797%20c31.502-21.539,69.555-34.133,110.495-34.133c3.669,0,7.315,0.09,10.939,0.313l165.33-239.637c0-1.137-0.029-2.25-0.029-3.395%20c0-144.227,117.335-261.574,261.582-261.574c144.233,0,261.583,117.348,261.583,261.574c0,144.246-117.35,261.598-261.583,261.598%20c-1.99,0-3.95-0.047-5.926-0.09L685.341,954.688c0.119,3.074,0.23,6.191,0.23,9.297c0,108.273-88.076,196.352-196.336,196.352%20c-95.041,0-174.494-67.848-192.496-157.676L30.872,892.754c82.32,291.137,349.807,504.582,667.323,504.582%20c383.062,0,693.598-310.551,693.598-693.613C1391.793,320.664,1081.257,10.125,698.195,10.125'/%3e%3cpath%20fill='%23FFFFFF'%20d='M441.648,1062.563l-85.202-35.203c15.105,31.445,41.23,57.762,75.911,72.215%20c74.961,31.25,161.41-4.336,192.667-79.359c15.112-36.313,15.224-76.355,0.223-112.742c-14.979-36.391-43.25-64.773-79.572-79.922%20c-36.047-15.004-74.656-14.438-108.587-1.637l88.009,36.391c55.304,23.051,81.444,86.559,58.408,141.855%20C560.476,1059.457,496.944,1085.613,441.648,1062.563'/%3e%3cpath%20fill='%23FFFFFF'%20d='M1101.353,524.961c0-96.113-78.184-174.313-174.295-174.313c-96.096,0-174.294,78.199-174.294,174.313%20c0,96.102,78.198,174.277,174.294,174.277C1023.169,699.238,1101.353,621.063,1101.353,524.961%20M796.415,524.656%20c0-72.324,58.638-130.918,130.94-130.918c72.316,0,130.925,58.594,130.925,130.918c0,72.316-58.608,130.918-130.925,130.918%20C855.053,655.574,796.415,596.973,796.415,524.656'/%3e%3c/svg%3e`,
                                alt: S(`#EventDisplay_Share_OnSteam`),
                              }),
                              (0, F.jsx)(`span`, {
                                style: { whiteSpace: `nowrap` },
                                children: S(`#EventDisplay_Share_OnMyStatus`),
                              }),
                            ],
                          }),
                        }),
                        (0, F.jsx)(w, {
                          toolTipContent: S(`#EventDisplay_Share_OnFaceBook`),
                          children: (0, F.jsx)(x, {
                            href: s.strFacebookUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, F.jsx)(`img`, {
                              className: M(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=`,
                              alt: S(`#EventDisplay_Share_OnFaceBook`),
                            }),
                          }),
                        }),
                        (0, F.jsx)(w, {
                          toolTipContent: S(`#EventDisplay_Share_OnTwitter`),
                          children: (0, F.jsx)(x, {
                            href: s.strTwitterUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, F.jsx)(`img`, {
                              className: M(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC`,
                              alt: S(`#EventDisplay_Share_OnTwitter`),
                            }),
                          }),
                        }),
                        (0, F.jsx)(w, {
                          toolTipContent: S(`#EventDisplay_Share_OnReddit`),
                          children: (0, F.jsx)(x, {
                            href: s.strRedditUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, F.jsx)(`img`, {
                              className: M(`yYL-OrX9PtQ-`),
                              src: y,
                              alt: S(`#EventDisplay_Share_OnReddit`),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, F.jsx)(`div`, { className: `-znUDBPGuEA-` }),
                  ],
                }),
              (0, F.jsx)(I, { eventLink: v }),
            ],
          }),
          h,
        ],
      });
}
export { R as ShareEventDialogBody };

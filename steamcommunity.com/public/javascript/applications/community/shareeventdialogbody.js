/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, G as n, ot as r } from "./chunk~01cfc309bf.js";
import { fi as i, nt as a, ui as o } from "./chunk~3f4314f3b4.js";
import { t as s } from "./chunk~eefd71512b.js";
import { Z as c, l } from "./chunk~21cdc464a1.js";
import { n as u, t as d } from "./chunk~91ae5e1167.js";
import { t as f } from "./chunk~c55d6473b2.js";
import { t as p } from "./chunk~d382bdf2cf.js";
import { t as m } from "./chunk~f4fcdebd85.js";
import {
  Em as h,
  Km as g,
  Mi as _,
  Si as v,
  Su as y,
  Vm as b,
  Wi as x,
  Zm as S,
  _s as C,
  a as w,
  ef as T,
  im as E,
  lm as D,
  nh as O,
  s as k,
  sm as A,
  tr as j,
  ws as M,
  wu as N,
} from "./main.js";
import "./chunk~56e6a40e9e.js";
import { t as P } from "./chunk~030d1d075f.js";
var F = e(t(), 1),
  I = `j59mI0R4Mls-`,
  L = `hYzeNZ6Fv5E-`,
  R = `_7KwGD4ys9So-`,
  z = `rgEtYZWJk28-`,
  B = r();
function V(e, t) {
  return e.trim().length
    ? e +
        `

` +
        t
    : t;
}
async function H(e, t, n) {
  if (E.IN_STEAMUI) {
    let e = O.Init(v);
    (e.Body().set_appid(t), e.Body().set_status_text(n));
    let r = await _.PostStatusToFriends(f.CMInterface.GetServiceTransport(), e);
    if (r.GetEResult() != 1) throw Error(String(r.GetEResult()));
    return;
  }
  let r = new FormData();
  (r.append(`appid`, String(t ?? 0)),
    r.append(`status_text`, n),
    r.append(`sessionid`, D()));
  let i = await fetch(e + `ajaxpostuserstatus`, {
      method: `POST`,
      body: r,
      credentials: `include`,
    }),
    a;
  try {
    a = i.ok ? await i.json() : void 0;
  } catch {
    a = void 0;
  }
  if (a?.success != 1) throw Error(a?.message ?? i.statusText);
}
function U(e) {
  let { appid: t, eventLink: r, emoticonStore: i, closeModal: a } = e,
    { data: c } = p(A.steamid),
    [d, f] = F.useState(``),
    m =
      E.COMMUNITY_BASE_URL +
      `profiles/` +
      h.InitFromAccountID(A.accountid, E.EUNIVERSE).ConvertTo64BitString() +
      `/`,
    g = n({ mutationFn: () => H(m, t, V(d, r)) });
  return g.isIdle
    ? (0, B.jsx)(x, {
        strDescription: ``,
        strTitle: T(`#Button_Share`),
        onCancel: a,
        onOK: () => g.mutate(),
        strOKButtonText: T(`#Button_Post`),
        children: (0, B.jsxs)(`div`, {
          className: j,
          children: [
            (0, B.jsx)(`div`, {
              children: T(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, B.jsxs)(`div`, {
              className: y(I, j),
              children: [
                (0, B.jsxs)(`div`, {
                  children: [
                    (0, B.jsx)(`img`, {
                      className: L,
                      src: c?.avatar_url,
                      alt: ``,
                      "data-miniprofile": `s` + A.steamid,
                    }),
                    (0, B.jsx)(`div`, {
                      className: y(j),
                      children: (0, B.jsx)(u, {
                        strPlaceholder: T(
                          `#EventDisplay_Share_OnMyStatus_Placeholder`,
                        ),
                        fnGetCurText: () => d,
                        fnOnTextChange: (e) => f(e.currentTarget.value),
                        fnSetText: f,
                        emoticonStore: i,
                        bSupportHTMLImport: !1,
                        showFormatHelp: `UserStatusPublished`,
                        limitBBCode: o,
                        classNameForTextArea: R,
                        bEmbeddedInDialog: !0,
                      }),
                    }),
                  ],
                }),
                (0, B.jsx)(`div`, {
                  className: z,
                  children: (0, B.jsx)(l, { text: r }),
                }),
              ],
            }),
          ],
        }),
      })
    : (0, B.jsx)(x, {
        strDescription: ``,
        strTitle: T(`#Button_Share`),
        onCancel: a,
        onOK: a,
        bAlertDialog: !0,
        children: (0, B.jsxs)(`div`, {
          className: j,
          children: [
            (0, B.jsx)(`div`, {
              children: T(`#EventDisplay_Share_OnMyStatus_Details`),
            }),
            (0, B.jsxs)(`div`, {
              className: I,
              children: [
                g.isPending && (0, B.jsx)(s, { position: `center` }),
                g.isSuccess &&
                  (0, B.jsx)(`div`, {
                    children: T(`#EventDisplay_Share_Success`),
                  }),
                g.isError &&
                  (0, B.jsx)(`div`, {
                    children:
                      T(`#EventDisplay_Share_Failure`) +
                      `

` +
                      g.error.message,
                  }),
                g.isSuccess &&
                  (0, B.jsx)(`a`, {
                    href: m + `home`,
                    target: E.IN_CLIENT ? void 0 : `_blank`,
                    rel: `noreferrer`,
                    children: T(`#EventDisplay_Share_OpenActivityFeed`),
                  }),
              ],
            }),
          ],
        }),
      });
}
var W = `l`;
function G(e) {
  let { emoticonStore: t, ...n } = e;
  return (0, B.jsx)(w, { store: t, children: (0, B.jsx)(K, { ...n }) });
}
function K(e) {
  let { eventModel: t, strEventLink: n, closeModal: r } = e,
    o = c(t),
    s = k(),
    [l, u] = F.useState(() => S(E.LANGUAGE)),
    [f, p] = F.useState(!1),
    { elDialogElement: h, fnShowLogonDialog: _ } = i(
      T(`#EventDisplay_Share_NotLoggedIn_Description`),
    ),
    v = F.useMemo(() => {
      if (!n) return ``;
      let e = new URL(n);
      return (e.searchParams.set(W, g(l)), e.href);
    }, [l, n]),
    w = E.EREALM === b.k_ESteamRealmChina;
  return f
    ? (0, B.jsx)(U, {
        eventLink: n,
        appid: t.appid,
        emoticonStore: s,
        closeModal: r,
      })
    : (0, B.jsxs)(x, {
        strDescription: ``,
        strTitle: T(`#Button_Share`),
        onCancel: r,
        onOK: r,
        bAlertDialog: !0,
        modalClassName: `EventDisplay_Share_Dialog`,
        children: [
          (0, B.jsxs)(`div`, {
            className: y(j, a),
            children: [
              !w &&
                (0, B.jsxs)(B.Fragment, {
                  children: [
                    (0, B.jsxs)(`div`, {
                      className: `Cx2zVOdOEwU-`,
                      children: [
                        (0, B.jsx)(`div`, {
                          className: `rk6-75sKTfs-`,
                          children: T(`#EventDisplay_Share_LanguageLabel`),
                        }),
                        (0, B.jsx)(`div`, {
                          children: (0, B.jsx)(d, {
                            selectedLang: l,
                            fnOnLanguageChanged: u,
                          }),
                        }),
                      ],
                    }),
                    (0, B.jsxs)(`div`, {
                      className: y(`befdhdeb-HY-`, `bPmDLn-lEoc-`),
                      style: { flexWrap: `wrap` },
                      children: [
                        (0, B.jsx)(C, {
                          toolTipContent: T(`#EventDisplay_Share_OnSteam`),
                          children: (0, B.jsxs)(N, {
                            onClick: () => {
                              A.logged_in ? p(!0) : _();
                            },
                            className: y(
                              `yYL-OrX9PtQ-`,
                              `D4J8JhjevEo-`,
                              `LQrwY5m9KjE-`,
                            ),
                            children: [
                              (0, B.jsx)(`img`, {
                                className: `uPjG9NaDuUg-`,
                                src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%200%201400%201409'%20enable-background='new%200%200%201400%201409'%20xml:space='preserve'%3e%3cpath%20fill='%23FFFFFF'%20d='M698.195,10.125c-364.347,0-662.838,280.938-691.206,637.969L378.74,801.797%20c31.502-21.539,69.555-34.133,110.495-34.133c3.669,0,7.315,0.09,10.939,0.313l165.33-239.637c0-1.137-0.029-2.25-0.029-3.395%20c0-144.227,117.335-261.574,261.582-261.574c144.233,0,261.583,117.348,261.583,261.574c0,144.246-117.35,261.598-261.583,261.598%20c-1.99,0-3.95-0.047-5.926-0.09L685.341,954.688c0.119,3.074,0.23,6.191,0.23,9.297c0,108.273-88.076,196.352-196.336,196.352%20c-95.041,0-174.494-67.848-192.496-157.676L30.872,892.754c82.32,291.137,349.807,504.582,667.323,504.582%20c383.062,0,693.598-310.551,693.598-693.613C1391.793,320.664,1081.257,10.125,698.195,10.125'/%3e%3cpath%20fill='%23FFFFFF'%20d='M441.648,1062.563l-85.202-35.203c15.105,31.445,41.23,57.762,75.911,72.215%20c74.961,31.25,161.41-4.336,192.667-79.359c15.112-36.313,15.224-76.355,0.223-112.742c-14.979-36.391-43.25-64.773-79.572-79.922%20c-36.047-15.004-74.656-14.438-108.587-1.637l88.009,36.391c55.304,23.051,81.444,86.559,58.408,141.855%20C560.476,1059.457,496.944,1085.613,441.648,1062.563'/%3e%3cpath%20fill='%23FFFFFF'%20d='M1101.353,524.961c0-96.113-78.184-174.313-174.295-174.313c-96.096,0-174.294,78.199-174.294,174.313%20c0,96.102,78.198,174.277,174.294,174.277C1023.169,699.238,1101.353,621.063,1101.353,524.961%20M796.415,524.656%20c0-72.324,58.638-130.918,130.94-130.918c72.316,0,130.925,58.594,130.925,130.918c0,72.316-58.608,130.918-130.925,130.918%20C855.053,655.574,796.415,596.973,796.415,524.656'/%3e%3c/svg%3e`,
                                alt: T(`#EventDisplay_Share_OnSteam`),
                              }),
                              (0, B.jsx)(`span`, {
                                style: { whiteSpace: `nowrap` },
                                children: T(`#EventDisplay_Share_OnMyStatus`),
                              }),
                            ],
                          }),
                        }),
                        (0, B.jsx)(C, {
                          toolTipContent: T(`#EventDisplay_Share_OnFaceBook`),
                          children: (0, B.jsx)(M, {
                            href: o.strFacebookUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, B.jsx)(`img`, {
                              className: y(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=`,
                              alt: T(`#EventDisplay_Share_OnFaceBook`),
                            }),
                          }),
                        }),
                        (0, B.jsx)(C, {
                          toolTipContent: T(`#EventDisplay_Share_OnTwitter`),
                          children: (0, B.jsx)(M, {
                            href: o.strTwitterUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, B.jsx)(`img`, {
                              className: y(`yYL-OrX9PtQ-`),
                              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC`,
                              alt: T(`#EventDisplay_Share_OnTwitter`),
                            }),
                          }),
                        }),
                        (0, B.jsx)(C, {
                          toolTipContent: T(`#EventDisplay_Share_OnReddit`),
                          children: (0, B.jsx)(M, {
                            href: o.strRedditUrl,
                            className: `D4J8JhjevEo-`,
                            children: (0, B.jsx)(`img`, {
                              className: y(`yYL-OrX9PtQ-`),
                              src: P,
                              alt: T(`#EventDisplay_Share_OnReddit`),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, B.jsx)(`div`, { className: `-znUDBPGuEA-` }),
                  ],
                }),
              (0, B.jsx)(m, { eventLink: v }),
            ],
          }),
          h,
        ],
      });
}
export { G as ShareEventDialogBody };

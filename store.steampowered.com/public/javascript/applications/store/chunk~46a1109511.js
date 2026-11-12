/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  B as t,
  H as n,
  Lt as r,
  ft as i,
  st as a,
  tt as o,
} from "./chunk~01cfc309bf.js";
import { n as s, r as c } from "./chunk~16aefcf65f.js";
import { n as l } from "./chunk~3ea79bd96d.js";
import { n as u, t as d } from "./chunk~a7c5e71e12.js";
import { r as f } from "./chunk~a243b6a34b.js";
import {
  Ed as p,
  Jy as m,
  Ni as h,
  Qb as g,
  cx as _,
  jc as v,
  ji as ee,
  pt as y,
  ua as b,
  ux as x,
  wc as S,
} from "./main.js";
import { t as C } from "./chunk~85f65a382b.js";
var w = e(o());
function te(e, t, n, r, i) {
  return a(ne(e, t, n, r, i));
}
function ne(e, t, n, r, i) {
  return {
    queryKey: [`gamemixer`, e, t, n, r, i],
    queryFn: async () => {
      let a = {
          appids: e.join(`,`),
          appweights: t.join(`,`),
          sessionid: g(),
          selffactor: n,
          popularity: i ? 0 : r,
          scoperange: i ? 100 : 0,
          scopedecayrange: i ? 1e3 : 0,
          scopedecaystrength: i ? 20 : 0,
        },
        o = await w.default.get(
          `${_.STORE_BASE_URL}gameexplorer/exploreapplist`,
          { params: a, withCredentials: !0, timeout: 1e4 },
        );
      if (o.data)
        return Object.entries(o.data)
          .map(([e, t]) => ({ nAppID: Number(e), fDistance: Number(t) }))
          .filter((t) => t.fDistance > 0 && !e.includes(t.nAppID))
          .sort((e, t) => t.fDistance - e.fDistance);
      throw `Failed FetchAppValues`;
    },
    placeholderData: (e) => e,
  };
}
function re() {
  return a(T());
}
function T() {
  return {
    queryKey: [`gamemixerplayed`],
    queryFn: async () => {
      let e = { sessionid: g() },
        t = await w.default.get(
          `${_.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
          { params: e, withCredentials: !0, timeout: 1e4 },
        );
      if (t.data) return t.data;
      throw `Failed FetchAppValues`;
    },
    placeholderData: (e) => e,
  };
}
var E = e(r()),
  D = `NWE3szrfD3A-`,
  O = `V5XyNQcfwrE-`,
  k = `VH0u0ICJIG4-`,
  A = `S2GThvdyV8U-`,
  j = `_3V22LRI6mbQ-`,
  M = `UKRbPe4-C4Q-`,
  N = `cxGlmI0J5e0-`,
  P = `-X-jdCgRCHs-`,
  F = `FqIRlgjY9pw-`,
  I = `s-KV4sPdLCA-`,
  L = `Nqln30YFnNs-`,
  R = `MpbW2y8z-s0-`,
  z = `g3jnfK3rgTg-`,
  B = `jEXf66eOdI0-`,
  V = `vWlLBrkWQog-`,
  H = `aWV0PYYyIHk-`,
  U = `ldn4Jfom1k8-`,
  W = `Mnc8dqkuHf0-`,
  G = `EYpluha3ens-`,
  K = `HTS7LpUl0OQ-`,
  q = `XMKh62SqrNM-`,
  J = `_4IXTa2F56iI-`,
  Y = `gDkEQpJ4vME-`,
  X = `mAG3BrWx38U-`,
  ie = `XQjixtYnexw-`,
  ae = `b2P8TJ-H27k-`,
  Z = i();
function Q(e) {
  return `/gameexplorer/${e.arrSelectedAppInfos.length == 0 ? `0` : e.arrSelectedAppInfos.map((e) => e.nAppID).join()}/${e.arrSelectedAppInfos.length == 0 ? `0` : e.arrSelectedAppInfos.map((e) => e.nWeight.toFixed(0)).join()}/${e.nSelfFactor}/${e.nPopularity}/${e.bSimilar}`;
}
function oe(e) {
  let t = e.appids?.split(`,`).filter((e) => e != `0`) ?? [],
    n = e.weights?.split(`,`).filter((e) => e != `0`) ?? [];
  return {
    arrSelectedAppInfos: t
      .map((e) => Number(e))
      .map((e, t) => ({ nAppID: e, nWeight: Number(n[t]) })),
    nSelfFactor: Number(e?.selffactor ?? `0`),
    nPopularity: Number(e?.popularity ?? `0`),
    bSimilar: e?.similar == `true`,
  };
}
function se() {
  let e = oe(n()),
    [r, i] = E.useState(e),
    [a, o] = E.useState(e),
    s = t(),
    c = te(
      a.arrSelectedAppInfos.map((e) => e.nAppID),
      a.arrSelectedAppInfos.map((e) => e.nWeight),
      a.nSelfFactor,
      a.nPopularity,
      a.bSimilar,
    );
  return (0, Z.jsx)(y, {
    controller: `gameexplorer`,
    method: `default`,
    feature: `capsule`,
    children: (0, Z.jsx)(ee, {
      children: (0, Z.jsx)(v, {
        className: S(D, c.isFetching && void 0),
        children: (0, Z.jsxs)(v, {
          className: O,
          children: [
            (0, Z.jsx)(ce, {}),
            !x.steamid && (0, Z.jsx)(me, {}),
            (0, Z.jsx)(fe, {
              state: r,
              onChange: (e, t) => {
                (i(e), t && (s.push(Q(e)), o(e)));
              },
            }),
            c.data &&
              (0, Z.jsx)($, {
                arrNearApps: c.data,
                bIsPending: c.isFetching,
                fnSetApp: (e) => {
                  let t = {
                    ...a,
                    arrSelectedAppInfos: [{ nAppID: e, nWeight: 100 }],
                  };
                  (i(t), s.push(Q(t)), o(t));
                },
              }),
          ],
        }),
      }),
    }),
  });
}
function ce() {
  return (0, Z.jsxs)(v, {
    className: k,
    children: [
      (0, Z.jsx)(v, { className: A, children: `Game Explorer` }),
      (0, Z.jsx)(v, { className: j, children: `Explore and Mix Games` }),
    ],
  });
}
function le(e) {
  let [t] = u(e.selectedAppInfo.nAppID, {
    include_basic_info: !0,
    include_assets_without_overrides: !0,
  });
  if (!t) return null;
  let n = t.GetAssetsWithoutOverrides().GetMainCapsuleURL();
  return (0, Z.jsxs)(`div`, {
    className: K,
    children: [
      (0, Z.jsx)(`div`, {
        className: J,
        children: (0, Z.jsx)(b, {
          size: `1`,
          color: `red`,
          onClick: () => e.onRemove(e.selectedAppInfo.nAppID),
          children: `X`,
        }),
      }),
      (0, Z.jsx)(`img`, { className: void 0, src: n }),
      (0, Z.jsx)(`div`, {
        className: q,
        children:
          e.nNumSelected > 1 &&
          (0, Z.jsx)(s, {
            value: e.selectedAppInfo.nWeight,
            min: 0,
            max: 100,
            onValueChange: (t) =>
              e.onWeightChange(e.selectedAppInfo.nAppID, t, !1),
            onValueSettled: (t) =>
              e.onWeightChange(e.selectedAppInfo.nAppID, t, !0),
          }),
      }),
    ],
  });
}
function ue(e) {
  if (e.bSimilar) return `Similar`;
  switch (e.nPopularity) {
    case 0:
      return `Any`;
    case 40:
      return `Popular`;
    case 130:
      return `Niche`;
  }
  return ``;
}
function de(e) {
  switch (e.nSelfFactor) {
    case 0:
      return `None`;
    case 20:
      return `Some`;
    case 40:
      return `Lots`;
  }
  return ``;
}
function fe(e) {
  let [t, n] = E.useState(ue(e.state)),
    [r, i] = E.useState(de(e.state)),
    a = (t, n, r) => {
      let i = e.state.arrSelectedAppInfos.slice();
      i.find((e) => e.nAppID == t) ??
        ((n = 100 / (i.length + 1)), i.push({ nAppID: t, nWeight: n }));
      let a = !1;
      if (
        (n == -1 && ((n = 0), (i = i.filter((e) => e.nAppID != t)), (a = !0)),
        i.length > 1)
      ) {
        let o = i
            .map((e) => (e.nAppID == t ? null : e.nWeight))
            .filter((e) => e != null),
          s = o.reduce((e, t) => e + t, 0),
          c = (100 - n - s) / (i.length - +!a),
          l = o.reduce((e, t) => e + Math.max(0, t + c - 100), 0),
          u = o.reduce((e, t) => e + Math.min(0, t + c), 0);
        ((c += Math.floor(l / (i.length - 1))),
          (c += Math.floor(u / (i.length - 1))),
          (i = i.map((e) => ({
            nAppID: e.nAppID,
            nWeight:
              e.nAppID == t ? n : Math.max(0, Math.min(100, e.nWeight + c)),
          }))),
          e.onChange({ ...e.state, arrSelectedAppInfos: i }, r));
      } else e.onChange({ ...e.state, arrSelectedAppInfos: i }, r);
    },
    o = (e) => {
      a(e, 100, !0);
    },
    s = (e) => {
      a(e, -1, !0);
    },
    l = (t) => {
      switch (t) {
        case `None`:
          e.onChange({ ...e.state, nSelfFactor: 0 }, !0);
          break;
        case `Some`:
          e.onChange({ ...e.state, nSelfFactor: 20 }, !0);
          break;
        case `Lots`:
          e.onChange({ ...e.state, nSelfFactor: 40 }, !0);
      }
      i(t);
    },
    u = (t) => {
      switch (t) {
        case `Similar`:
          e.onChange({ ...e.state, nPopularity: 0, bSimilar: !0 }, !0);
          break;
        case `Any`:
          e.onChange({ ...e.state, nPopularity: 0, bSimilar: !1 }, !0);
          break;
        case `Popular`:
          e.onChange({ ...e.state, nPopularity: 40, bSimilar: !1 }, !0);
          break;
        case `Niche`:
          e.onChange({ ...e.state, nPopularity: 130, bSimilar: !1 }, !0);
      }
      n(t);
    };
  return (0, Z.jsx)(`div`, {
    className: z,
    children: (0, Z.jsxs)(`div`, {
      className: B,
      children: [
        (0, Z.jsxs)(`div`, {
          className: V,
          children: [
            e.state.arrSelectedAppInfos.length == 0 &&
              (0, Z.jsx)(`div`, {
                className: `x-xgneoVzTg-`,
                children: `Add games to start exploring`,
              }),
            e.state.arrSelectedAppInfos.map((t) =>
              (0, Z.jsx)(
                le,
                {
                  selectedAppInfo: t,
                  onWeightChange: a,
                  onRemove: s,
                  nNumSelected: e.state.arrSelectedAppInfos.length,
                },
                t.nAppID,
              ),
            ),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: M,
          children: [
            (0, Z.jsx)(_e, {
              fnSelectAppID: o,
              arrSelectedAppIDs: e.state.arrSelectedAppInfos.map(
                (e) => e.nAppID,
              ),
            }),
            (0, Z.jsx)(ve, {
              fnSelectAppID: o,
              arrSelectedAppIDs: e.state.arrSelectedAppInfos.map(
                (e) => e.nAppID,
              ),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: H,
          children: [
            (0, Z.jsxs)(`div`, {
              className: U,
              children: [
                (0, Z.jsx)(`div`, { className: W, children: `Popularity` }),
                (0, Z.jsx)(c, {
                  options: [`Similar`, `Any`, `Popular`, `Niche`],
                  value: t,
                  onValueChange: (e) => u(e),
                  radius: `sm`,
                }),
                (0, Z.jsxs)(`div`, {
                  className: G,
                  children: [
                    t == `Similar` &&
                      `Games with similar popularity to your input games`,
                    t == `Any` && `No popularity restrictions, can be noisy`,
                    t == `Popular` && `Higher popularity games`,
                    t == `Niche` && `Lower popularity games, can be noisy`,
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: U,
              children: [
                (0, Z.jsx)(`div`, { className: W, children: `Self Factor` }),
                (0, Z.jsx)(c, {
                  options: [`None`, `Some`, `Lots`],
                  value: r,
                  onValueChange: (e) => l(e),
                  radius: `sm`,
                }),
                (0, Z.jsxs)(`div`, {
                  className: G,
                  children: [
                    r == `None` && `Your game preferences are not factored in`,
                    r == `Some` &&
                      `A bit of your game preferences are mixed in`,
                    r == `Lots` &&
                      `Significantly biased towards your game preferences`,
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function pe(e) {
  let [t] = d(e.nAppID, 0, f);
  return t
    ? (0, Z.jsxs)(`div`, {
        className: X,
        children: [
          (0, Z.jsx)(l, {
            capsule: { id: e.nAppID },
            imageType: `library`,
            nWidthMultiplier: 2,
            bShowName: !1,
            bHidePlatforms: !0,
            bHidePrice: !0,
            bHideStatusBanners: !0,
            bShowIgnoreButton: !0,
            bShowDescriptionInHover: !0,
            bPreferAssetWithoutOverride: !1,
          }),
          (0, Z.jsxs)(`div`, {
            className: ie,
            children: [
              `${(e.fDistance * 100).toFixed(2)}%`,
              (0, Z.jsx)(`div`, {
                className: ae,
                children: (0, Z.jsx)(b, {
                  size: `1`,
                  color: `green`,
                  onClick: () => e.fnSetApp(e.nAppID),
                  children: `Go`,
                }),
              }),
            ],
          }),
        ],
      })
    : null;
}
function $(e) {
  return e.arrNearApps.length == 0
    ? null
    : (0, Z.jsx)(`div`, {
        className: S(Y, e.bIsPending && `r9iZqJcYbak-`),
        children: e.arrNearApps?.map((t) =>
          (0, Z.jsx)(
            pe,
            { nAppID: t.nAppID, fDistance: t.fDistance, fnSetApp: e.fnSetApp },
            t.nAppID,
          ),
        ),
      });
}
function me() {
  return (0, Z.jsxs)(v, {
    className: void 0,
    children: [
      m(`#PersonalCalendar_LoginPrompt`),
      (0, Z.jsx)(`button`, {
        onClick: C,
        className: void 0,
        children: m(`#Login_SignIn`),
      }),
    ],
  });
}
function he(e) {
  let [t] = u(e.nAppID, {
    include_basic_info: !0,
    include_assets_without_overrides: !0,
  });
  if (!t) return null;
  let n = t.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
  return (0, Z.jsxs)(`div`, {
    className: I,
    onPointerDown: () => e.onClick(e.nAppID),
    children: [
      (0, Z.jsx)(`img`, { className: L, src: n }),
      (0, Z.jsx)(`div`, { className: R, children: t.GetName() }),
    ],
  });
}
var ge = E.forwardRef(function (e, t) {
    let n = p(e.strSearch, null, 10),
      r = e.fnSetResultApps;
    return (
      E.useEffect(() => {
        r(n.data?.rgItemIDs.map((e) => e.appid));
      }, [r, n.data]),
      (0, Z.jsx)(`div`, {
        className: S(F, n.data?.rgItemIDs.length > 0 && `g6SP7v41-Kc-`),
        ref: t,
        children: n.data?.rgItemIDs
          .filter((t) => !e.arrIgnoreAppIDs.includes(t.appid))
          .map((t) =>
            (0, Z.jsx)(he, { nAppID: t.appid, onClick: e.fnClickApp }, t.appid),
          ),
      })
    );
  }),
  _e = (e) => {
    let [t, n] = E.useState(``),
      [r, i] = E.useState(0),
      [a, o] = E.useState(0),
      [s, c] = E.useState([]),
      l = E.useRef(r),
      u = E.useRef(null);
    E.useEffect(() => {
      l.current = r;
    }, [r]);
    let d = () => {
        Date.now() - l.current < 300 || (o(0), c([]));
      },
      f = (e) => {
        e != t && (n(e), i(Date.now()), setTimeout(d, 300));
      },
      p = (t) => {
        (e.fnSelectAppID(t), n(``), o(0), c([]), i(Date.now()));
      },
      m = (e) => {
        switch (e) {
          case `Enter`:
            s.length > 0 && p(s[0]);
            break;
          case `Escape`:
            n(``);
        }
      },
      h = e.arrSelectedAppIDs.length >= 3;
    return (0, Z.jsxs)(`div`, {
      className: N,
      children: [
        (0, Z.jsx)(`input`, {
          type: `text`,
          className: S(P, h && `TAlX1lcqH8Y-`),
          value: t,
          onChange: (e) => f(e.target.value),
          onKeyDown: (e) => m(e.key),
          onBlur: (e) => n(``),
          placeholder: h ? `Max three games` : `Type any game name`,
          disabled: h,
        }),
        (0, Z.jsx)(ge, {
          strSearch: t,
          nSelectedResult: a,
          fnSetResultApps: c,
          fnClickApp: p,
          arrIgnoreAppIDs: e.arrSelectedAppIDs,
          ref: u,
        }),
      ],
    });
  },
  ve = (e) => {
    let t = re().data,
      n = t?.appids ?? [];
    return (0, Z.jsx)(`div`, {
      className: void 0,
      children: (0, Z.jsx)(h, {
        options: n,
        size: `1`,
        selectedValue: 0,
        onSelectionChange: (t) => e.fnSelectAppID(t),
        getOptionLabel: (e) =>
          e == 0
            ? `Select a recent game to add it`
            : t?.names[t?.appids.indexOf(e)],
      }),
    });
  };
export { se as default };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, at as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~5412a9f1de.js";
import { t as i } from "./chunk~91ffd0567f.js";
import { n as a, t as o } from "./chunk~62cf132e0e.js";
import { n as s, r as c } from "./chunk~75db1bf948.js";
import {
  $ as l,
  B as u,
  G as d,
  Nt as f,
  Yf as p,
  b as m,
  hm as h,
  jt as g,
  tt as _,
  vf as v,
  yf as y,
  zt as b,
} from "./main.js";
var x = {};
((x.arabic = () =>
  p(() => import(`./chunk~95d786be91.js`), [], import.meta.url)),
  (x.brazilian = () =>
    p(() => import(`./chunk~dfa4978ea4.js`), [], import.meta.url)),
  (x.bulgarian = () =>
    p(() => import(`./chunk~be9cef9ce0.js`), [], import.meta.url)),
  (x.czech = () =>
    p(() => import(`./chunk~ff406c26c2.js`), [], import.meta.url)),
  (x.danish = () =>
    p(() => import(`./chunk~6faba78d92.js`), [], import.meta.url)),
  (x.dutch = () =>
    p(() => import(`./chunk~cabf7c4dda.js`), [], import.meta.url)),
  (x.english = () =>
    p(() => import(`./chunk~926d337c98.js`), [], import.meta.url)),
  (x.finnish = () =>
    p(() => import(`./chunk~d1b17adbd0.js`), [], import.meta.url)),
  (x.french = () =>
    p(() => import(`./chunk~4bf1d2292c.js`), [], import.meta.url)),
  (x.german = () =>
    p(() => import(`./chunk~065ae91bd4.js`), [], import.meta.url)),
  (x.greek = () =>
    p(() => import(`./chunk~67c921ccbb.js`), [], import.meta.url)),
  (x.hungarian = () =>
    p(() => import(`./chunk~310d1ff6b2.js`), [], import.meta.url)),
  (x.indonesian = () =>
    p(() => import(`./chunk~e71c459a7f.js`), [], import.meta.url)),
  (x.italian = () =>
    p(() => import(`./chunk~ea397e3eb7.js`), [], import.meta.url)),
  (x.japanese = () =>
    p(() => import(`./chunk~5fa3b8e767.js`), [], import.meta.url)),
  (x.koreana = () =>
    p(() => import(`./chunk~8f1c0a797a.js`), [], import.meta.url)),
  (x.latam = () =>
    p(() => import(`./chunk~da45a491dd.js`), [], import.meta.url)),
  (x.malay = () =>
    p(() => import(`./chunk~101e172848.js`), [], import.meta.url)),
  (x.norwegian = () =>
    p(() => import(`./chunk~236883e4cc.js`), [], import.meta.url)),
  (x.polish = () =>
    p(() => import(`./chunk~e76d643d11.js`), [], import.meta.url)),
  (x.portuguese = () =>
    p(() => import(`./chunk~cf8d3212f3.js`), [], import.meta.url)),
  (x.romanian = () =>
    p(() => import(`./chunk~75c2101ce6.js`), [], import.meta.url)),
  (x.russian = () =>
    p(() => import(`./chunk~5f7c391bd2.js`), [], import.meta.url)),
  (x.sc_schinese = () =>
    p(() => import(`./chunk~7703ab2410.js`), [], import.meta.url)),
  (x.schinese = () =>
    p(() => import(`./chunk~844f8c9321.js`), [], import.meta.url)),
  (x.spanish = () =>
    p(() => import(`./chunk~b4481dcece.js`), [], import.meta.url)),
  (x.swedish = () =>
    p(() => import(`./chunk~182ba78061.js`), [], import.meta.url)),
  (x.tchinese = () =>
    p(() => import(`./chunk~57e7fe1d51.js`), [], import.meta.url)),
  (x.thai = () =>
    p(() => import(`./chunk~7d99898a32.js`), [], import.meta.url)),
  (x.turkish = () =>
    p(() => import(`./chunk~5f9949cdb0.js`), [], import.meta.url)),
  (x.ukrainian = () =>
    p(() => import(`./chunk~990d663337.js`), [], import.meta.url)),
  (x.vietnamese = () =>
    p(() => import(`./chunk~6e86d06f0b.js`), [], import.meta.url)));
async function S(e) {
  if (x[e]) return await x[e]();
}
var C = y(S),
  w = `ZIf4FUEhPes-`,
  T = e(t(), 1),
  E = n(),
  D = [
    { strLabel: `Dev Reported`, nQuickTextID: 5871 },
    { strLabel: `Anti-virus Flagged`, nQuickTextID: 5872 },
    { strLabel: `General`, nQuickTextID: 5873 },
  ];
function O(e) {
  return typeof e.label == `string` ? C.Localize(e.label) : e.label.str;
}
var k = [
    { label: `#Workshop_ItemAdmin_Ban_Preset_None` },
    {
      label: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
      eModerationReason: 2,
    },
    ...D.map((e) => ({
      label: { str: `Malware: ${e.strLabel}` },
      nQuickTextID: e.nQuickTextID,
      eModerationReason: 70,
    })),
  ],
  A = [
    { label: `#Workshop_ItemAdmin_Ban_Preset_None` },
    {
      label: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason`,
    },
  ],
  j = [`copyright`, `other`],
  M = [`copyright`, `malware`, `other`],
  N = {
    copyright: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
    malware: `#Workshop_ItemAdmin_Ban_Category_Malware`,
    other: `#Workshop_ItemAdmin_Ban_Category_Other`,
  };
function P(e) {
  return l.Localize(`#moderation_ugcban_default_note`, u(e));
}
function F(e, t) {
  let n = `Details: ${e.trim()}`;
  return t.trim() ? `${n}\n -- \nPrevention: ${t.trim()}` : n;
}
var I = 1023;
function L(e) {
  return new TextEncoder().encode(e).length > I;
}
function R(e) {
  let { onReasonChange: t } = e,
    [n, r] = (0, T.useState)(``),
    [a, o] = (0, T.useState)(``),
    s = L(F(n, a)),
    c = (e, n) => {
      (r(e), o(n), t(e.trim().length > 1 ? F(e, n) : null));
    };
  return (0, E.jsxs)(b, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, E.jsx)(g, {
        children: C.Localize(`#Workshop_ItemAdmin_Ban_Category_MalwareDesc`),
      }),
      (0, E.jsx)(g, {
        children: C.Localize(`#Workshop_ItemAdmin_Ban_Category_MalwareDetails`),
      }),
      (0, E.jsx)(i, {
        value: n,
        onTextChange: (e) => c(e, a),
        maxLength: I,
        rows: 4,
        resize: `vertical`,
      }),
      (0, E.jsx)(g, {
        children: C.Localize(
          `#Workshop_ItemAdmin_Ban_Category_MalwarePrevention`,
        ),
      }),
      (0, E.jsx)(i, {
        value: a,
        onTextChange: (e) => c(n, e),
        maxLength: I,
        rows: 4,
        resize: `vertical`,
      }),
      s &&
        (0, E.jsx)(g, {
          color: `text-warning`,
          children: C.Localize(
            `#Workshop_ItemAdmin_Ban_Category_MalwareTooLong`,
          ),
        }),
    ],
  });
}
function z(e) {
  let {
      bBanned: t,
      steamIDOwner: n,
      bIsSupport: l,
      bWorkshopContent: p,
      onConfirm: h,
      onError: y,
      onClose: x,
    } = e,
    S = l && !t,
    D = !l && !t,
    [F, I] = (0, T.useState)(e.strBanReason),
    [L, z] = (0, T.useState)(null),
    [B, V] = (0, T.useState)(!1),
    [H, U] = (0, T.useState)(null),
    [W, G] = (0, T.useState)(null),
    [K, q] = (0, T.useState)(!1),
    [J, Y] = (0, T.useState)(null),
    X = a(J, n);
  (0, T.useEffect)(() => {
    X && I(X);
  }, [X]);
  let Z = t ? A : k,
    Q = C.Localize(
      t ? `#Workshop_ItemAdmin_Ban_Unset` : `#Workshop_ItemAdmin_Ban_Set`,
    ),
    $ = D && H == `malware`,
    ee = $ ? (W ?? ``) : F.trim(),
    te = $ ? W !== null : F.trim().length > 1,
    ne = !K && te && !(S && L === null) && !(D && p && H === null);
  return B
    ? (0, E.jsx)(m, {
        className: w,
        strTitle: Q,
        onClose: x,
        children: (0, E.jsx)(o, {
          reasons: d(p),
          onSelect: (e) => {
            (e !== null &&
              ((!F.trim() || (L !== null && F === P(L))) && I(P(e)), z(e)),
              V(!1));
          },
        }),
      })
    : (0, E.jsxs)(m, {
        className: w,
        strTitle: Q,
        onClose: x,
        children: [
          l &&
            (0, E.jsxs)(b, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                S &&
                  (0, E.jsxs)(b, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, E.jsx)(g, {
                        children: C.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                      }),
                      (0, E.jsx)(f, {
                        size: `1`,
                        color: `dull`,
                        onClick: () => V(!0),
                        children:
                          L === null
                            ? C.Localize(
                                `#Workshop_ItemAdmin_Ban_Reason_Unselected`,
                              )
                            : u(L),
                      }),
                    ],
                  }),
                (0, E.jsxs)(b, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, E.jsx)(g, {
                      children: C.Localize(`#Workshop_ItemAdmin_Ban_Presets`),
                    }),
                    (0, E.jsx)(_, {
                      options: Z,
                      getOptionLabel: O,
                      selectedValue: null,
                      placeholder: O(Z[0]),
                      onSelectionChange: (e) => {
                        (e.nQuickTextID === void 0 &&
                          I(e.reasonToken ? C.Localize(e.reasonToken) : ``),
                          Y(e.nQuickTextID ?? null),
                          e.eModerationReason !== void 0 &&
                            z(e.eModerationReason));
                      },
                    }),
                  ],
                }),
              ],
            }),
          D &&
            (0, E.jsxs)(b, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                (0, E.jsxs)(b, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, E.jsx)(g, {
                      children: C.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                    }),
                    (0, E.jsx)(r, {
                      options: p ? M : j,
                      getOptionLabel: (e) => C.Localize(N[e]),
                      value: H,
                      onValueChange: (e) => {
                        let t = C.Localize(
                          `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
                        );
                        (e == `copyright` && F.trim().length === 0
                          ? I(t)
                          : F === t && I(``),
                          U(e));
                      },
                    }),
                  ],
                }),
                H == `other` &&
                  (0, E.jsx)(g, {
                    children: C.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_OtherDesc`,
                    ),
                  }),
                (0, E.jsx)(`div`, {
                  hidden: !$,
                  children: (0, E.jsx)(R, { onReasonChange: G }),
                }),
              ],
            }),
          !$ &&
            (0, E.jsx)(i, {
              value: F,
              onTextChange: I,
              maxLength: 256,
              rows: 6,
              resize: `vertical`,
            }),
          (0, E.jsxs)(b, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              (0, E.jsx)(s, {
                disabled: !ne,
                onClick: () => {
                  q(!0);
                  let e = $ ? 70 : (L ?? 0);
                  Promise.resolve(h(ee, e)).then(x, (e) => {
                    (q(!1), y?.(e));
                  });
                },
                autoFocus: !0,
                children: v.Localize(`#Button_OK`),
              }),
              (0, E.jsx)(c, {
                onClick: x,
                children: (0, E.jsx)(`span`, {
                  children: v.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      });
}
function B() {
  let [e, t] = T.useState(null);
  return (
    T.useEffect(
      () => (
        (window.ShowUGCBanDialog = (e, n) => {
          t({ ...n, key: Date.now(), fnOnConfirm: e });
        }),
        () => {
          delete window.ShowUGCBanDialog;
        }
      ),
      [],
    ),
    e
      ? (0, E.jsx)(
          z,
          {
            bBanned: !1,
            strBanReason: ``,
            bIsSupport: !!h.is_support,
            bWorkshopContent: !!e.bWorkshopContent,
            onConfirm: (t, n) => e.fnOnConfirm(n, t),
            onClose: () => t(null),
          },
          e.key,
        )
      : null
  );
}
export { B as UGCBanDialogOnGlobalVariable };

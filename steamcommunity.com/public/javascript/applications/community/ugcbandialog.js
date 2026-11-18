/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~5412a9f1de.js";
import { t as i } from "./chunk~91ffd0567f.js";
import { t as a } from "./chunk~62cf132e0e.js";
import { n as o, r as s } from "./chunk~75db1bf948.js";
import {
  $ as c,
  B as l,
  Cf as u,
  G as d,
  Gt as f,
  It as p,
  Rt as m,
  b as h,
  bm as g,
  ep as _,
  rt as v,
  wf as y,
} from "./main.js";
var b = {};
((b.arabic = () =>
  _(() => import(`./chunk~95d786be91.js`), [], import.meta.url)),
  (b.brazilian = () =>
    _(() => import(`./chunk~dfa4978ea4.js`), [], import.meta.url)),
  (b.bulgarian = () =>
    _(() => import(`./chunk~be9cef9ce0.js`), [], import.meta.url)),
  (b.czech = () =>
    _(() => import(`./chunk~ff406c26c2.js`), [], import.meta.url)),
  (b.danish = () =>
    _(() => import(`./chunk~6faba78d92.js`), [], import.meta.url)),
  (b.dutch = () =>
    _(() => import(`./chunk~cabf7c4dda.js`), [], import.meta.url)),
  (b.english = () =>
    _(() => import(`./chunk~926d337c98.js`), [], import.meta.url)),
  (b.finnish = () =>
    _(() => import(`./chunk~d1b17adbd0.js`), [], import.meta.url)),
  (b.french = () =>
    _(() => import(`./chunk~4bf1d2292c.js`), [], import.meta.url)),
  (b.german = () =>
    _(() => import(`./chunk~065ae91bd4.js`), [], import.meta.url)),
  (b.greek = () =>
    _(() => import(`./chunk~67c921ccbb.js`), [], import.meta.url)),
  (b.hungarian = () =>
    _(() => import(`./chunk~310d1ff6b2.js`), [], import.meta.url)),
  (b.indonesian = () =>
    _(() => import(`./chunk~e71c459a7f.js`), [], import.meta.url)),
  (b.italian = () =>
    _(() => import(`./chunk~ea397e3eb7.js`), [], import.meta.url)),
  (b.japanese = () =>
    _(() => import(`./chunk~5fa3b8e767.js`), [], import.meta.url)),
  (b.koreana = () =>
    _(() => import(`./chunk~8f1c0a797a.js`), [], import.meta.url)),
  (b.latam = () =>
    _(() => import(`./chunk~da45a491dd.js`), [], import.meta.url)),
  (b.malay = () =>
    _(() => import(`./chunk~101e172848.js`), [], import.meta.url)),
  (b.norwegian = () =>
    _(() => import(`./chunk~236883e4cc.js`), [], import.meta.url)),
  (b.polish = () =>
    _(() => import(`./chunk~e76d643d11.js`), [], import.meta.url)),
  (b.portuguese = () =>
    _(() => import(`./chunk~cf8d3212f3.js`), [], import.meta.url)),
  (b.romanian = () =>
    _(() => import(`./chunk~75c2101ce6.js`), [], import.meta.url)),
  (b.russian = () =>
    _(() => import(`./chunk~5f7c391bd2.js`), [], import.meta.url)),
  (b.sc_schinese = () =>
    _(() => import(`./chunk~7703ab2410.js`), [], import.meta.url)),
  (b.schinese = () =>
    _(() => import(`./chunk~844f8c9321.js`), [], import.meta.url)),
  (b.spanish = () =>
    _(() => import(`./chunk~b4481dcece.js`), [], import.meta.url)),
  (b.swedish = () =>
    _(() => import(`./chunk~182ba78061.js`), [], import.meta.url)),
  (b.tchinese = () =>
    _(() => import(`./chunk~57e7fe1d51.js`), [], import.meta.url)),
  (b.thai = () =>
    _(() => import(`./chunk~7d99898a32.js`), [], import.meta.url)),
  (b.turkish = () =>
    _(() => import(`./chunk~5f9949cdb0.js`), [], import.meta.url)),
  (b.ukrainian = () =>
    _(() => import(`./chunk~990d663337.js`), [], import.meta.url)),
  (b.vietnamese = () =>
    _(() => import(`./chunk~6e86d06f0b.js`), [], import.meta.url)));
async function x(e) {
  if (b[e]) return await b[e]();
}
var S = y(x),
  C = `ZIf4FUEhPes-`,
  w = e(t(), 1),
  T = n(),
  E = [
    { labelToken: `#Workshop_ItemAdmin_Ban_Preset_None` },
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
      eModerationReason: 2,
    },
  ],
  D = [
    { labelToken: `#Workshop_ItemAdmin_Ban_Preset_None` },
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason`,
    },
  ],
  O = [`copyright`, `other`],
  k = [`copyright`, `malware`, `other`],
  A = {
    copyright: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
    malware: `#Workshop_ItemAdmin_Ban_Category_Malware`,
    other: `#Workshop_ItemAdmin_Ban_Category_Other`,
  };
function j(e) {
  return c.Localize(`#moderation_ugcban_default_note`, l(e));
}
function M(e, t) {
  let n = `Details: ${e.trim()}`;
  return t.trim() ? `${n}\n -- \nPrevention: ${t.trim()}` : n;
}
var N = 1023;
function P(e) {
  return new TextEncoder().encode(e).length > N;
}
function F(e) {
  let { onReasonChange: t } = e,
    [n, r] = (0, w.useState)(``),
    [a, o] = (0, w.useState)(``),
    s = P(M(n, a)),
    c = (e, n) => {
      (r(e), o(n), t(e.trim().length > 1 ? M(e, n) : null));
    };
  return (0, T.jsxs)(f, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, T.jsx)(p, {
        children: S.Localize(`#Workshop_ItemAdmin_Ban_Category_MalwareDesc`),
      }),
      (0, T.jsx)(p, {
        children: S.Localize(`#Workshop_ItemAdmin_Ban_Category_MalwareDetails`),
      }),
      (0, T.jsx)(i, {
        value: n,
        onTextChange: (e) => c(e, a),
        maxLength: N,
        rows: 4,
        resize: `vertical`,
      }),
      (0, T.jsx)(p, {
        children: S.Localize(
          `#Workshop_ItemAdmin_Ban_Category_MalwarePrevention`,
        ),
      }),
      (0, T.jsx)(i, {
        value: a,
        onTextChange: (e) => c(n, e),
        maxLength: N,
        rows: 4,
        resize: `vertical`,
      }),
      s &&
        (0, T.jsx)(p, {
          color: `text-warning`,
          children: S.Localize(
            `#Workshop_ItemAdmin_Ban_Category_MalwareTooLong`,
          ),
        }),
    ],
  });
}
function I(e) {
  let {
      bBanned: t,
      bIsSupport: n,
      bWorkshopContent: c,
      onConfirm: g,
      onError: _,
      onClose: y,
    } = e,
    b = n && !t,
    x = !n && !t,
    [M, N] = (0, w.useState)(e.strBanReason),
    [P, I] = (0, w.useState)(null),
    [L, R] = (0, w.useState)(!1),
    [z, B] = (0, w.useState)(null),
    [V, H] = (0, w.useState)(null),
    [U, W] = (0, w.useState)(!1),
    G = t ? D : E,
    K = S.Localize(
      t ? `#Workshop_ItemAdmin_Ban_Unset` : `#Workshop_ItemAdmin_Ban_Set`,
    ),
    q = x && z == `malware`,
    J = q ? (V ?? ``) : M.trim(),
    Y = q ? V !== null : M.trim().length > 1,
    X = !U && Y && !(b && P === null) && !(x && c && z === null);
  return L
    ? (0, T.jsx)(h, {
        className: C,
        strTitle: K,
        onClose: y,
        children: (0, T.jsx)(a, {
          reasons: d(c),
          onSelect: (e) => {
            (e !== null &&
              ((!M.trim() || (P !== null && M === j(P))) && N(j(e)), I(e)),
              R(!1));
          },
        }),
      })
    : (0, T.jsxs)(h, {
        className: C,
        strTitle: K,
        onClose: y,
        children: [
          n &&
            (0, T.jsxs)(f, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                b &&
                  (0, T.jsxs)(f, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, T.jsx)(p, {
                        children: S.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                      }),
                      (0, T.jsx)(m, {
                        size: `1`,
                        color: `dull`,
                        onClick: () => R(!0),
                        children:
                          P === null
                            ? S.Localize(
                                `#Workshop_ItemAdmin_Ban_Reason_Unselected`,
                              )
                            : l(P),
                      }),
                    ],
                  }),
                (0, T.jsxs)(f, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, T.jsx)(p, {
                      children: S.Localize(`#Workshop_ItemAdmin_Ban_Presets`),
                    }),
                    (0, T.jsx)(v, {
                      options: G,
                      getOptionLabel: (e) => S.Localize(e.labelToken),
                      selectedValue: null,
                      placeholder: S.Localize(G[0].labelToken),
                      onSelectionChange: (e) => {
                        (N(e.reasonToken ? S.Localize(e.reasonToken) : ``),
                          e.eModerationReason !== void 0 &&
                            P === null &&
                            I(e.eModerationReason));
                      },
                    }),
                  ],
                }),
              ],
            }),
          x &&
            (0, T.jsxs)(f, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                (0, T.jsxs)(f, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, T.jsx)(p, {
                      children: S.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                    }),
                    (0, T.jsx)(r, {
                      options: c ? k : O,
                      getOptionLabel: (e) => S.Localize(A[e]),
                      value: z,
                      onValueChange: (e) => {
                        let t = S.Localize(
                          `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
                        );
                        (e == `copyright` && M.trim().length === 0
                          ? N(t)
                          : M === t && N(``),
                          B(e));
                      },
                    }),
                  ],
                }),
                z == `other` &&
                  (0, T.jsx)(p, {
                    children: S.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_OtherDesc`,
                    ),
                  }),
                (0, T.jsx)(`div`, {
                  hidden: !q,
                  children: (0, T.jsx)(F, { onReasonChange: H }),
                }),
              ],
            }),
          !q &&
            (0, T.jsx)(i, {
              value: M,
              onTextChange: N,
              maxLength: 256,
              rows: 6,
              resize: `vertical`,
            }),
          (0, T.jsxs)(f, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              (0, T.jsx)(o, {
                disabled: !X,
                onClick: () => {
                  W(!0);
                  let e = q ? 70 : (P ?? 0);
                  Promise.resolve(g(J, e)).then(y, (e) => {
                    (W(!1), _?.(e));
                  });
                },
                autoFocus: !0,
                children: u.Localize(`#Button_OK`),
              }),
              (0, T.jsx)(s, {
                onClick: y,
                children: (0, T.jsx)(`span`, {
                  children: u.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      });
}
function L() {
  let [e, t] = w.useState(null);
  return (
    w.useEffect(
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
      ? (0, T.jsx)(
          I,
          {
            bBanned: !1,
            strBanReason: ``,
            bIsSupport: !!g.is_support,
            bWorkshopContent: !!e.bWorkshopContent,
            onConfirm: (t, n) => e.fnOnConfirm(n, t),
            onClose: () => t(null),
          },
          e.key,
        )
      : null
  );
}
export { L as UGCBanDialogOnGlobalVariable };

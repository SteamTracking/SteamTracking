/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  B as t,
  C as n,
  Ft as r,
  G as i,
  K as a,
  St as o,
  _t as s,
  bt as c,
  ot as l,
  xt as u,
  yt as d,
} from "./chunk~01cfc309bf.js";
import { jo as f, l as p } from "./chunk~3f4314f3b4.js";
import { t as m } from "./chunk~eefd71512b.js";
import { t as h } from "./chunk~92931c6310.js";
import { p as ee } from "./chunk~0111fcd096.js";
import { p as te, u as ne } from "./chunk~ec644f97c6.js";
import { B as g, n as re, t as ie } from "./chunk~91ae5e1167.js";
import { t as ae } from "./chunk~d382bdf2cf.js";
import { F as oe, H as se, O as ce, t as le } from "./chunk~2bb3c0c267.js";
import {
  $i as _,
  $o as ue,
  Ac as de,
  Am as fe,
  En as v,
  Er as pe,
  Gc as me,
  Gm as y,
  Hf as b,
  Hs as he,
  Ki as x,
  Kn as ge,
  Lr as _e,
  Nr as ve,
  Ou as S,
  Qo as C,
  Ts as ye,
  Tu as w,
  Vi as be,
  Wr as xe,
  Xi as Se,
  Xm as Ce,
  Xo as T,
  Zi as we,
  Zm as Te,
  _f as Ee,
  _n as De,
  as as E,
  bm as Oe,
  bs as D,
  cs as O,
  es as k,
  hr as ke,
  li as A,
  mf as Ae,
  nr as je,
  oh as Me,
  qf as Ne,
  qi as Pe,
  rf as j,
  rr as Fe,
  rs as M,
  sd as N,
  sf as Ie,
  th as Le,
  tm as Re,
  ts as ze,
  us as Be,
  vc as Ve,
  vm as P,
  xf as He,
  yf as Ue,
  ym as F,
  yn as We,
} from "./main.js";
import {
  a as I,
  c as Ge,
  d as Ke,
  f as qe,
  i as L,
  l as Je,
  n as R,
  o as z,
  r as Ye,
  s as Xe,
  t as Ze,
  u as Qe,
} from "./chunk~f17215eefb.js";
import "./chunk~bf4b546728.js";
import {
  a as $e,
  c as et,
  d as tt,
  l as nt,
  o as rt,
  s as it,
  u as at,
} from "./chunk~cbfff8c814.js";
var B = e(r()),
  V = l(),
  H = (function (e) {
    return (
      (e.k_eView = `view`),
      (e.k_eCommunityView = `communityview`),
      (e.k_eCommunityEdit = `edit`),
      (e.k_eCommunityDashboard = `dashboard`),
      (e.k_eCommunityPreview = `preview`),
      e
    );
  })({}),
  U = (e) => {
    let { route: t, faqid: n } = e,
      r = ot(t, n);
    return e.bForceRedirect
      ? (0, V.jsx)(c, { push: !0, to: r })
      : e.bForceAnchor
        ? (0, V.jsx)(`a`, {
            href: F.COMMUNITY_BASE_URL.slice(0, -1) + r,
            className: e.className,
            children: e.children,
          })
        : (0, V.jsx)(s, {
            to: r,
            className: e.className,
            children: e.children,
          });
  };
function ot(e, t) {
  let n = `/faqs/` + P.VANITY_ID + `/`;
  switch (e) {
    case `view`:
    case `communityview`:
      n += `view/` + Ye(t);
      break;
    case `edit`:
      n += `edit/` + Ye(t);
      break;
    case `dashboard`:
      n += `dashboard`;
      break;
    case `preview`:
      n += `preview/` + Ye(t);
  }
  return n;
}
var st = `-MPSvXdlKko-`,
  ct = `cWORcGrq8Es-`,
  lt = `m6ZdpHgjsqc-`,
  ut = `e6REIYO7KFM-`,
  dt = `_3i4xgyPXOJ4-`,
  ft = `_6q07lEIV9WY-`,
  pt = `AIUe9Gi45d4-`,
  mt = `-z-7-ErTm9g-`,
  W = `JDfrmBEZqt0-`,
  ht = `-cvi16WJn34-`,
  G = `ub8sEXgmuvQ-`,
  gt = `V-TyNh8QFJ4-`,
  _t = `QDo-e1DBIlg-`,
  vt = `Xi5qpSzb8OM-`,
  yt = `z7uVZ-8L0hk-`,
  bt = `mBUkTcPh-cc-`,
  xt = `tB8ue3FBvKo-`,
  St = `_0S-13uXvMfM-`,
  Ct = `JF3b8RUSLKk-`,
  wt = `bB57r4QqpPw-`,
  Tt = `KrdfO1R-kzI-`,
  Et = `TxWVgTS0TjA-`,
  Dt = `wuiS6vB9C44-`,
  Ot = `iPKa0MqEIN4-`,
  kt = `FKq-V9NUbMU-`,
  At = `UKn9j1s-T0g-`,
  jt = `-HyDiAbxcCQ-`,
  Mt = `fzBA-zORfUk-`,
  Nt = `Y8KHdIPPyhE-`,
  Pt = `y3pIr0FbFxU-`,
  Ft = `UinHRqPsVUQ-`,
  It = `KiThcBvchow-`,
  Lt = `pdvoaPVQ-YM-`,
  Rt = `z5IAmxaH35M-`,
  zt = `apTgBdnUovI-`,
  Bt = `title`,
  Vt = `content`;
function Ht(e, t) {
  let n = new tt();
  for (let r = 0; r < 32; ++r)
    (e.BHasSomeTextForLanguage(r) || t == 0) &&
      (n.SetLocalization(Bt, r, e.GetDraftTitle(r) ?? ``),
      n.SetLocalization(Vt, r, e.GetDraftContent(r) ?? ``));
  return n;
}
function Ut(e, n, r) {
  let i = new Set(),
    a = n.GetSortedTokenList();
  return (
    t(() => {
      r.forEach((t) => {
        (a.forEach((r) => {
          let i = n.GetLocalization(r, t) || ``;
          if (r === Bt) {
            let n = e.GetDraftTitle(t);
            (i || (n && n.length > 0)) && e.SetDraftTitle(t, i);
          }
          if (r === Vt) {
            let n = e.GetDraftContent(t);
            (i || (n && n.length > 0)) && e.SetDraftContent(t, i);
          }
        }),
          i.add(t));
      });
    }),
    Array.from(i)
  );
}
var Wt = (e) => {
    let { draft: t, eLanguage: n } = e;
    return (0, V.jsxs)(`div`, {
      className: je,
      children: [
        (0, V.jsx)(qt, { draft: t, eLanguage: n }),
        (0, V.jsx)(at, {
          strToolTip: j(`#FAQEditor_Loc_Import_ttip`),
          strLabel: j(`#EventEditor_Loc_Import_Short`),
          fnOnImportLocData: (e, n) => Ut(t, e, n),
        }),
      ],
    });
  },
  Gt = (e) => {
    let { draft: t } = e;
    return (0, V.jsxs)(`div`, {
      className: je,
      children: [
        (0, V.jsx)(`div`, {
          className: v,
          onClick: (e) => {
            _(
              (0, V.jsx)(Kt, { direction: `export`, draft: t, children: ` ` }),
              N(e),
            );
          },
          children: j(`#EventEditor_Loc_Export_Short`),
        }),
        (0, V.jsx)(`div`, {
          className: v,
          onClick: (e) => {
            _(
              (0, V.jsx)(Kt, { direction: `import`, draft: t, children: ` ` }),
              N(e),
            );
          },
          children: j(`#EventEditor_Loc_Import_Short`),
        }),
      ],
    });
  },
  Kt = (e) => {
    let { closeModal: t, direction: n, draft: r } = e,
      [i, a] = B.useState(!1),
      [o, s] = B.useState([]);
    i || o.length;
    let c = async () => {
        a(!0);
        try {
          n == `import`
            ? await R.Get().ImportNonEnglishDraftsFromCrowdin(r.GetFAQID(), o)
            : await R.Get().ExportEnglishDraftToCrowdin(r.GetFAQID());
        } catch (e) {
          console.error(e);
        }
        a(!1);
      },
      l = j(
        n == `import`
          ? `#EventEditor_Loc_CrowdinIntegration_ImportTitle`
          : `#EventEditor_Loc_CrowdinIntegration_ExportTitle`,
      ),
      u = j(
        n == `import`
          ? `#EventEditor_Loc_Import_Crowdin_Confirm`
          : `#EventEditor_Loc_Export_Crowdin_Confirm`,
      ),
      d =
        n == `import`
          ? (0, V.jsx)(Yt, {
              draft: r,
              rgAllLanguages: Jt,
              rgLanguagesSelected: o,
              fnSelectLanguages: s,
            })
          : null;
    return (0, V.jsx)(x, {
      className: wt,
      closeModal: t,
      strTitle: l,
      strDescription: u,
      onOK: c,
      bOKDisabled: i,
      children: i ? (0, V.jsx)(m, { position: `center` }) : d,
    });
  },
  qt = (e) => {
    let { draft: t, eLanguage: n } = e;
    return (0, V.jsx)(D, {
      toolTipContent: j(`#FAQEditor_Loc_Export_ttip`),
      children: (0, V.jsx)(`div`, {
        className: v,
        onClick: (e) => {
          _(
            (0, V.jsx)(x, {
              strTitle: j(`#EventEditor_Loc_Export`),
              bAlertDialog: !0,
              children: (0, V.jsx)(nt, {
                fnGetLocData: () => Ht(t, n),
                bShowXML: !0,
                bShowCSV: !0,
                strFileNamePrefix: `faq`,
                lang: n,
              }),
            }),
            N(e),
          );
        },
        children: j(`#EventEditor_Loc_Export_Short`),
      }),
    });
  },
  K = [
    0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11, 4, 19,
    25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
  ],
  Jt = [
    23, 6, 7, 19, 13, 14, 15, 2, 1, 24, 18, 3, 10, 4, 16, 12, 11, 22, 20, 8, 5,
    27, 17, 9, 21, 26, 28, 30, 31,
  ],
  Yt = (e) => {
    let {
        draft: t,
        rgAllLanguages: n,
        rgLanguagesSelected: r,
        fnSelectLanguages: i,
      } = e,
      a = (e, t) => {
        let n = r.includes(t);
        if (e && !n) {
          let e = r.slice();
          (e.push(t), i(e));
        } else if (!e && n) {
          let e = r.filter((e) => e !== t);
          i(e);
        }
      },
      o = (e) => {
        i(e ? n.slice() : []);
      },
      s = n
        .sort((e, t) => K[e] - K[t])
        .map((e) =>
          (0, V.jsx)(
            Xt,
            {
              draft: t,
              eLang: e,
              bInitialState: r.includes(e),
              fnOnChecked: a,
            },
            `langrow` + e + t.GetFAQID(),
          ),
        );
    return (0, V.jsxs)(V.Fragment, {
      children: [
        (0, V.jsxs)(`div`, {
          className: Tt,
          children: [
            (0, V.jsx)(`div`, {
              className: At,
              children: j(`#FAQCrowdin_LanguageHeader`),
            }),
            (0, V.jsx)(`div`, {
              className: void 0,
              children: j(`#FAQCrowdin_DraftTimestampHeader`),
            }),
          ],
        }),
        (0, V.jsx)(k, {
          className: Dt,
          label: j(`#FAQCrowdin_SelectAllCheckboxes`),
          onChange: o,
        }),
        (0, V.jsx)(`div`, {
          className: Et,
          children:
            s ?? (0, V.jsx)(`div`, { children: j(`#FAQCrowdin_NoDraftFound`) }),
        }),
      ],
    });
  },
  Xt = (e) => {
    let { draft: t, eLang: n, bInitialState: r, fnOnChecked: i } = e,
      a = t.GetLastSavedDraftVersion(n),
      o = a
        ? fe.InitFromAccountID(
            Number.parseInt(a.author_account_id),
            F.EUNIVERSE,
          )
        : null,
      { data: s } = ae(o?.GetAccountID()),
      c = a
        ? j(
            `#FAQCrowdin_SavedAtTimeByAuthor`,
            Ae(a.timestamp) +
              ` @ ` +
              Ee(a.timestamp, { bForce24HourClock: !1 }),
            s?.m_strPlayerName ?? a.author_account_id,
          )
        : j(`#FAQCrowdin_NoDraftFound`),
      l = (0, V.jsxs)(`div`, {
        className: kt,
        children: [
          (0, V.jsx)(`div`, {
            className: At,
            children: j(`#Language_` + Ce(n)),
          }),
          (0, V.jsx)(`div`, { className: void 0, children: c }),
        ],
      });
    return (0, V.jsx)(k, {
      className: Ot,
      label: l,
      checked: r,
      onChange: (e) => i(e, n),
    });
  };
function Zt(e) {
  let [t, n] = z(),
    [r, i] = B.useState(0),
    [a, o] = B.useState(!1),
    [s, c] = B.useState(!1),
    [l, u] = B.useState(null),
    d = h(`CrowdinImportDialog`),
    f = B.useRef([]),
    p = async () => {
      o(!0);
      for (let e = 0; e < t.length; e++) {
        i(e);
        let n = t[e],
          r = [];
        for (let e = 0; e < Jt.length; e += 5) {
          let t = Jt.slice(e, e + 5);
          r.push(R.Get().ImportNonEnglishDraftsFromCrowdin(n.faq_id, t, d));
        }
        (await Promise.all(r),
          R.Get().BHasLiveEnglishVersion(n.faq_id)
            ? ((f.current[e] = R.Get().GetNonEnglishDraftsToPublish(n.faq_id)),
              console.log(
                `Going to publish FAQ`,
                n.faq_id,
                f.current[e].map((e) => Ce(e)),
              ))
            : console.log(`No live english version for:`, n.faq_id));
      }
      for (let e = 0; e < f.current.length; e++) {
        let n = t[e],
          r = f.current[e];
        if (r?.length > 0) {
          i(e);
          let t = await R.Get().PublishDraftByLanguage(n.faq_id, r);
          if (d.token.reason) return;
          if (t != 1) {
            u(j(`#FAQDashboard_PublishFailed`));
            return;
          }
        }
      }
      (c(!0), o(!1));
    };
  if (l)
    return (0, V.jsx)(x, {
      strTitle: j(`#FAQDashboard_CrowdinToolTitle`),
      strDescription: l,
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      closeModal: e.closeModal,
    });
  if (s)
    return (0, V.jsx)(x, {
      strTitle: j(`#FAQDashboard_CrowdinToolTitle`),
      strDescription: j(`#FAQDashboard_PublishComplete`),
      bAlertDialog: !0,
      closeModal: e.closeModal,
    });
  let m = (100 * (r + 0.5)) / t.length,
    ee = t[r].internal_name;
  return (0, V.jsx)(Se, {
    title: j(`#FAQDashboard_CrowdinToolTitle`),
    ...e,
    onCancel: () => d.cancel(`CrowdinImportDialog cancelled`),
    children: (0, V.jsxs)(T, {
      children: [
        (0, V.jsxs)(C, {
          children: [
            j(`#FAQDashboard_CrowdinToolInstructionsWithCount`, t.length),
            (0, V.jsx)(`div`, {
              className: jt,
              children: j(`#FAQDashboard_CrowdinToolWarning`),
            }),
          ],
        }),
        (0, V.jsxs)(C, {
          children: [
            (0, V.jsx)(ue, {
              onClick: p,
              disabled: a,
              children: j(`#FAQDashboard_UpdateAllFAQsButton`),
            }),
            a && (0, V.jsx)(Qt, { nProgressPct: m, strCurrentLabel: ee }),
            f.current.length > 0 &&
              (0, V.jsx)($t, { rgUpdatedLanguagesForAllFAQs: f.current }),
          ],
        }),
      ],
    }),
  });
}
function Qt(e) {
  let { nProgressPct: t, strCurrentLabel: n } = e;
  return (0, V.jsxs)(`div`, {
    children: [
      (0, V.jsx)(`div`, {
        className: Mt,
        children: (0, V.jsx)(`div`, {
          className: Nt,
          style: { width: t + `%` },
        }),
      }),
      (0, V.jsx)(`div`, {
        className: Pt,
        children: j(`#FAQDashboard_CrowdinToolProgress`, n),
      }),
    ],
  });
}
function $t(e) {
  let { rgUpdatedLanguagesForAllFAQs: t } = e,
    [n, r] = z();
  return (0, V.jsxs)(`div`, {
    className: It,
    children: [
      (0, V.jsx)(`div`, {
        className: Lt,
        children: j(`#FAQDashboard_CrowdinToolResultsLabel`),
      }),
      t.map((e, t) => {
        let r = n[t];
        if (e.length == 0) return null;
        let i = e.map((e) => Te(e)).join(`,`);
        return (0, V.jsx)(
          `div`,
          {
            children: (0, V.jsxs)(`div`, {
              className: Rt,
              children: [
                (0, V.jsx)(D, {
                  toolTipContent: r.internal_name,
                  strTooltipClassname: ye,
                  nAllowOffscreenPx: 4e4,
                  className: zt,
                  children: r.url_code + `: `,
                }),
                (0, V.jsx)(D, {
                  toolTipContent: i,
                  strTooltipClassname: ye,
                  nAllowOffscreenPx: 4e4,
                  direction: `left`,
                  className: Ft,
                  children: i,
                }),
              ],
            }),
          },
          r.faq_id,
        );
      }),
    ],
  });
}
var en = `NBUvJ8CE384-`,
  tn = (e) => {
    let { rtTimestamp: t, bShowAsWarning: n } = e;
    if (!t)
      return (0, V.jsx)(`div`, {
        className: en,
        children: j(`#FAQDashboard_TimeNever`),
      });
    let r = Date.now() / 1e3 - t,
      i = r < 86400 ? He(r, !1, !0) : Ue(t);
    return (0, V.jsx)(ne, {
      className: n && `egvO-S9VIG4-`,
      rtFullDate: t,
      stylesmodule: te,
      children: i,
    });
  },
  nn = n((e) => {
    let [t, n] = z(),
      [r, i] = B.useState(1),
      a = t
        .map((e) => {
          let t =
              e.per_language_info.find((e) => e.language == 0)
                ?.last_update_timestamp || 0,
            n = Array.from(
              e.per_language_info.filter(
                (e) => e.language != 0 && e.last_update_timestamp >= t,
              ),
            ).length,
            r = Array.from(
              e.per_language_info.filter((e) => e.last_update_timestamp < t),
            ).length,
            i = Array.from(
              e.per_language_info.filter(
                (e) => e.last_publish_timestamp >= e.last_update_timestamp,
              ),
            ).length,
            a = Array.from(
              e.per_language_info.filter(
                (e) => e.last_publish_timestamp < e.last_update_timestamp,
              ),
            ).length;
          return [
            e.faq_id,
            e.internal_name,
            t,
            n,
            r,
            i,
            a,
            e.visible_in_global_realm,
            e.visible_in_china_realm,
          ];
        })
        .sort((e, t) => (r == 1 ? ee(e[1], t[1]) : t[r] - e[r]));
    return (
      (0, B.useEffect)(() => {
        R.Get().RemoveAllDirtyDrafts();
      }, []),
      (0, V.jsx)(`div`, {
        className: st,
        children: (0, V.jsxs)(`div`, {
          className: ct,
          children: [
            (0, V.jsx)(rn, {}),
            (0, V.jsx)(on, { eCurrentSortColumn: r, SetSortColumn: i }),
            t.length == 0 &&
              (0, V.jsx)(`div`, {
                className: `LIGmEcGSWS0-`,
                children: j(`#FAQDashboard_Empty`),
              }),
            a.map((e) => (0, V.jsx)(sn, { rgColumns: e }, e[0])),
            !n && (0, V.jsx)(m, { position: `center`, size: `xlarge` }),
          ],
        }),
      })
    );
  }),
  rn = (e) => {
    let t = B.useCallback(
        () =>
          we((0, V.jsx)(an, {}), window, {
            strTitle: j(`#FAQDashboard_CreateFAQButton`),
          }),
        [],
      ),
      n = B.useCallback(
        () =>
          we((0, V.jsx)(Zt, { bDisableBackgroundDismiss: !0 }), window, {
            strTitle: j(`#FAQDashboard_CrowdinToolTitle`),
          }),
        [],
      );
    return (0, V.jsxs)(`div`, {
      className: lt,
      children: [
        (0, V.jsx)(`div`, {
          className: ut,
          children: j(`#FAQDashboard_Header`),
        }),
        (0, V.jsxs)(`div`, {
          className: dt,
          children: [
            (0, V.jsx)(ue, {
              onClick: n,
              children: j(`#FAQDashboard_CrowdinToolButton`),
            }),
            (0, V.jsx)(Be, {
              onClick: t,
              children: j(`#FAQDashboard_CreateFAQButton`),
            }),
          ],
        }),
      ],
    });
  },
  an = (e) => {
    let [t, n] = B.useState(``);
    return (0, V.jsxs)(x, {
      onOK: () => {
        R.Get().CreateFAQ(t);
      },
      bOKDisabled: t.length == 0,
      closeModal: e.closeModal,
      className: ft,
      children: [
        (0, V.jsx)(E, { children: j(`#FAQDashboard_CreateFAQButton`) }),
        (0, V.jsx)(T, {
          children: (0, V.jsxs)(C, {
            children: [
              j(`#FAQDashboard_CreateFAQInstructions`),
              (0, V.jsx)(`input`, {
                type: `text`,
                className: pt,
                value: t,
                placeholder: j(`#FAQDashboard_NamePlaceHolder`),
                onFocus: (e) => e.target.select(),
                onChange: (e) => n(e.currentTarget.value),
                maxLength: 120,
              }),
            ],
          }),
        }),
      ],
    });
  },
  on = (e) =>
    (0, V.jsxs)(`div`, {
      className: mt,
      children: [
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_NameColumn`,
          bIsNameColumn: !0,
          eThisColumn: 1,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_DraftTimetampColumn`,
          eThisColumn: 2,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_UpdatedLanguagesColumn`,
          eThisColumn: 3,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_StaleLanguagesColumn`,
          eThisColumn: 4,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_PublishedLanguagesColumn`,
          eThisColumn: 5,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_NeedPublishColumn`,
          eThisColumn: 6,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_VisibilityColumn`,
          eThisColumn: 7,
          ...e,
        }),
        (0, V.jsx)(q, {
          strLabelLocToken: `#FAQDashboard_SteamChinaVisibilityColumn`,
          eThisColumn: 8,
          ...e,
        }),
      ],
    }),
  q = (e) => {
    let {
        strLabelLocToken: t,
        bIsNameColumn: n,
        eThisColumn: r,
        eCurrentSortColumn: i,
        SetSortColumn: a,
      } = e,
      o = w(W, gt, n ? ht : G, i == r && `_2WRHjrJZHEM-`);
    return (0, V.jsxs)(D, {
      toolTipContent: j(t + `_ttip`),
      direction: `top`,
      className: o,
      onClick: () => a(r),
      children: [
        j(t),
        (0, V.jsx)(`div`, { className: _t, children: (0, V.jsx)(de, {}) }),
      ],
    });
  },
  J = (e) => {
    let { nCount: t, nTotal: n, nGoal: r } = e;
    return (0, V.jsx)(`div`, {
      className: t == r ? xt : vt,
      children: t + ` / ` + n,
    });
  },
  Y = (e) => {
    let { bIsVisible: t } = e;
    return (0, V.jsx)(`div`, {
      className: t ? yt : bt,
      children: j(t ? `#FAQDashboard_Visible` : `#FAQDashboard_Invisible`),
    });
  },
  sn = (e) => {
    let [t, n, r, i, a, o, s, c, l] = e.rgColumns,
      u = o + s,
      d = i + a;
    return (0, V.jsxs)(U, {
      route: H.k_eCommunityEdit,
      faqid: t,
      className: St,
      children: [
        (0, V.jsx)(`div`, {
          className: w(W, ht),
          children: (0, V.jsx)(`div`, { className: Ct, children: n }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(tn, { rtTimestamp: r }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(J, { nCount: i, nTotal: d, nGoal: d }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(J, { nCount: a, nTotal: d, nGoal: 0 }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(J, { nCount: o, nTotal: u, nGoal: u }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(J, { nCount: s, nTotal: u, nGoal: 0 }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(Y, { bIsVisible: c }),
        }),
        (0, V.jsx)(`div`, {
          className: w(W, G),
          children: (0, V.jsx)(Y, { bIsVisible: l }),
        }),
      ],
    });
  },
  cn = (e) => (
    B.useEffect(
      () => (
        (window.onbeforeunload = () =>
          R.Get()
            .GetLoadedDraftObjs()
            ?.filter((e) => e.BNeedsSaving())?.length > 0
            ? j(`#EventEditor_UnsavedChanges`)
            : null),
        () => {
          window.onbeforeunload = () => {};
        }
      ),
      [],
    ),
    (0, V.jsx)(d, {
      message: (e) =>
        R.Get()
          .GetLoadedDraftObjs()
          ?.filter((e) => e.BNeedsSaving())?.length > 0 &&
        (e.pathname == $.DashboardFAQ(P.VANITY_ID) ||
          e.pathname?.startsWith($.ViewFAQ(P.VANITY_ID, ``).slice(0, -1)))
          ? j(`#EventEditor_UnsavedChanges`)
          : !0,
    })
  ),
  ln = `_5U-wyIj4ywo-`,
  un = `XM1YgomE4w0-`,
  dn = `_7H-8PdGT-o4-`,
  fn = `SU46TyPU5jI-`,
  pn = `_6-C9N7YQUn4-`,
  mn = `_0G0C7uElOA0-`,
  hn = `XBtRFvNIcDc-`,
  gn = `_68OZGlEN4jA-`,
  _n = `EbZ5bPgE88A-`,
  vn = `DWeSEuXZscA-`,
  yn = `u6ODiONWujc-`,
  bn = `vnHjs00M4YY-`,
  xn = `gvU9pno4fv8-`,
  Sn = `Wqfu7vSr7TU-`,
  Cn = `QbUjyUopYvQ-`,
  wn = `syeh3T1FQhc-`,
  Tn = (e) =>
    (0, V.jsx)(D, {
      toolTipContent: j(`#FAQEditor_DeleteAction_ttip`),
      children: (0, V.jsx)(`div`, {
        className: w(v, We),
        onClick: (t) => {
          _((0, V.jsx)(En, { draft: e.draft }), N(t));
        },
        children: j(`#FAQEditor_DeleteAction`),
      }),
    }),
  En = (e) => {
    let { draft: t } = e,
      n = () => e.closeModal && e.closeModal(),
      [r, i] = B.useState(!1),
      [a, o] = B.useState(void 0),
      s = (0, V.jsx)(`div`, { children: j(`#FAQEditor_DeleteDesc`) });
    return (
      r
        ? (s = (0, V.jsx)(m, {
            position: `center`,
            size: `medium`,
            string: j(`#FAQEditor_DeletingInProgress`),
          }))
        : a &&
          (s = (0, V.jsx)(`div`, {
            children: j(
              `Error_Description`,
              a,
              j(`#Error_GenericFailureDescription`),
            ),
          })),
      (0, V.jsx)(S, {
        children: (0, V.jsx)(he, {
          onEscKeypress: n,
          children: (0, V.jsxs)(ze, {
            children: [
              (0, V.jsx)(E, { children: j(`#FAQEditor_DeleteAction`) }),
              (0, V.jsx)(T, { children: (0, V.jsx)(C, { children: s }) }),
              (0, V.jsx)(M, {
                children: (0, V.jsx)(O, {
                  onCancel: n,
                  bOKDisabled: !!(r || a),
                  strOKText: j(`#FAQEditor_DeleteAction`),
                  strCancelText: r || a ? j(`#Button_OK`) : void 0,
                  onOK: async () => {
                    (i(!0),
                      R.Get()
                        .DeleteFAQ(t.GetFAQID())
                        .then((e) => {
                          if (e == 1) {
                            let e =
                              F.COMMUNITY_BASE_URL.substr(
                                0,
                                F.COMMUNITY_BASE_URL.length - 1,
                              ) + ot(H.k_eCommunityDashboard);
                            window.location.href = e;
                          }
                          o(e);
                        })
                        .catch((e) => {
                          let t = b(e);
                          (console.error(
                            `FAQDeleteDialog: hit error: ` + t.strErrorMsg,
                            t,
                          ),
                            o(2));
                        })
                        .finally(() => i(!1)));
                  },
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  Dn = n((e) => {
    let { draft: t, bDisabled: n } = e,
      r = t.BNeedsSaving();
    return (0, V.jsx)(D, {
      toolTipContent: j(
        r ? `#FAQPublish_SaveRequire_ttip` : `#FAQPublish_Publish_ttip`,
      ),
      children: (0, V.jsx)(`div`, {
        className: w(v, n && `rPlDZ1xmEm8-`),
        onClick: (t) => {
          n ||
            _(
              r
                ? (0, V.jsx)(Pe, {
                    strDescription: j(`#FAQPublish_SaveRequire_ttip`),
                  })
                : (0, V.jsx)(On, { draft: e.draft }),
              N(t),
            );
        },
        children: j(`#FAQPublish_Publish`),
      }),
    });
  }),
  On = (e) => {
    let { draft: t } = e,
      n = () => e.closeModal && e.closeModal(),
      [r, i] = B.useState(!1),
      [a, o] = B.useState(void 0),
      [s, c] = B.useState(void 0),
      [l, u] = Xe(t.GetFAQID()),
      [d, f] = B.useState([]),
      p = null;
    if (!u)
      p = (0, V.jsx)(m, {
        size: `small`,
        position: `center`,
        string: j(`#FAQPublish_PublishWait`),
      });
    else if (r)
      p = (0, V.jsx)(m, {
        position: `center`,
        size: `medium`,
        string: j(`#FAQPublish_Publishing`),
      });
    else if (a) p = (0, V.jsx)(`div`, { children: j(`#FAQPublish_Success`) });
    else if (s)
      p = (0, V.jsx)(`div`, {
        children: j(
          `#Error_Description`,
          s,
          j(`#Error_GenericFailureDescription`),
        ),
      });
    else if (!l)
      p = (0, V.jsx)(`div`, { children: j(`#FAQPublish_LoadError`) });
    else {
      let e = l.per_language_info
        ?.filter((e) => e.last_publish_timestamp < e.last_update_timestamp)
        .map((e) => e.language);
      p = (0, V.jsxs)(V.Fragment, {
        children: [
          (0, V.jsx)(`div`, { children: j(`#FAQPublish_Desc`) }),
          (0, V.jsx)(`br`, {}),
          (0, V.jsx)(`div`, { children: j(`#FAQPublish_Desc2`) }),
          (0, V.jsx)(`br`, {}),
          (0, V.jsx)(Yt, {
            draft: t,
            rgAllLanguages: e,
            rgLanguagesSelected: d,
            fnSelectLanguages: f,
          }),
        ],
      });
    }
    return (0, V.jsx)(S, {
      children: (0, V.jsx)(he, {
        onEscKeypress: n,
        children: (0, V.jsxs)(ze, {
          className: wt,
          children: [
            (0, V.jsx)(E, { children: j(`#FAQPublish_Publish`) }),
            (0, V.jsx)(T, { children: (0, V.jsx)(C, { children: p }) }),
            (0, V.jsx)(M, {
              children: (0, V.jsx)(O, {
                onCancel: n,
                bOKDisabled: !!(r || a || s || d.length == 0),
                strOKText: j(`#FAQPublish_Publish`),
                strCancelText: r || a || s ? j(`#Button_OK`) : void 0,
                onOK: async () => {
                  (i(!0),
                    R.Get()
                      .PublishDraftByLanguage(t.GetFAQID(), d)
                      .then((e) => {
                        (e == 1 && o(!0), c(e));
                      })
                      .catch((e) => {
                        let t = b(e);
                        (console.error(
                          `FAQPublishDialog: hit error: ` + t.strErrorMsg,
                          t,
                        ),
                          c(2));
                      })
                      .finally(() => i(!1)));
                },
              }),
            }),
          ],
        }),
      }),
    });
  },
  kn = (e) =>
    (0, V.jsx)(D, {
      toolTipContent: j(`#FAQEditor_ChangeVisible_ttip`),
      children: (0, V.jsx)(`div`, {
        className: v,
        onClick: (t) => {
          _((0, V.jsx)(An, { draft: e.draft }), N(t));
        },
        children: j(`#FAQEditor_EditVisible`),
      }),
    }),
  An = (e) => {
    let { draft: t } = e,
      n = () => e.closeModal && e.closeModal(),
      [r, i] = B.useState(!1),
      [a, o] = B.useState(void 0),
      [s, c] = B.useState(void 0),
      l = R.Get().GetFAQArticleSummary(t.GetFAQID()),
      [u, d] = B.useState(l.visible_in_global_realm),
      [f, p] = B.useState(l.visible_in_china_realm),
      h = (0, V.jsxs)(V.Fragment, {
        children: [
          (0, V.jsx)(`div`, { children: j(`#FAQEditor_ChangeVisible_Desc`) }),
          (0, V.jsx)(k, {
            label: j(`#FAQEditor_VisibleInGlobal`),
            checked: u,
            onChange: (e) => d(e),
          }),
          (0, V.jsx)(k, {
            label: j(`#FAQEditor_VisibleInChina`),
            checked: f,
            tooltip: j(`#FAQEditor_VisibleInChina_ttip`),
            onChange: (e) => p(e),
          }),
        ],
      });
    return (
      r
        ? (h = (0, V.jsx)(m, {
            position: `center`,
            size: `medium`,
            string: j(`#FAQEditor_ChangeVisible_InProgress`),
          }))
        : a
          ? (h = (0, V.jsx)(`div`, {
              children: j(`#FAQEditor_ChangeVisible_Success`),
            }))
          : s &&
            (h = (0, V.jsx)(`div`, {
              children: j(
                `Error_Description`,
                s,
                j(`#Error_GenericFailureDescription`),
              ),
            })),
      (0, V.jsx)(S, {
        children: (0, V.jsx)(he, {
          onEscKeypress: n,
          children: (0, V.jsxs)(ze, {
            children: [
              (0, V.jsx)(E, { children: j(`#FAQEditor_ChangeVisible`) }),
              (0, V.jsx)(T, { children: (0, V.jsx)(C, { children: h }) }),
              (0, V.jsx)(M, {
                children: (0, V.jsx)(O, {
                  onCancel: n,
                  bOKDisabled: !!(r || a || s),
                  strOKText: j(`#FAQEditor_ChangeVisible`),
                  strCancelText: r || a || s ? j(`#Button_OK`) : void 0,
                  onOK: async () => {
                    (i(!0),
                      R.Get()
                        .UpdateVisibility(t.GetFAQID(), u, f)
                        .then((e) => {
                          (e == 1 && o(!0), c(e));
                        })
                        .catch((e) => {
                          let t = b(e);
                          (console.error(
                            `FAQChangeVisibilityDialog: hit error: ` +
                              t.strErrorMsg,
                            t,
                          ),
                            c(2));
                        })
                        .finally(() => i(!1)));
                  },
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  jn = `blM4bFZXLIk-`,
  X = `CRU83TBl7pk-`,
  Mn = `_1uNROKtIFbo-`,
  Nn = `_5LM9I10plNM-`,
  Z = `uGWno2xQB0Y-`,
  Pn = `BgdZCSG01tM-`,
  Fn = `r1aa-W9tGrs-`,
  In = `WR5KmKIWLW0-`,
  Ln = `PL0l75ONAgc-`,
  Rn = `_8iKjymJM5Mk-`,
  zn = `_2MeFppaz7Kg-`,
  Bn = `_2yPR2ZgXFns-`,
  Vn = `cCEUdVcX5R8-`,
  Hn = `yiNao4kxF-k-`,
  Un = n((e) => {
    let { draft: t, eLanguage: n } = e,
      r = t.GetFAQID(),
      [i, a] = Xe(r);
    if (!a) return null;
    let o = i?.per_language_info?.find(
        (e) => e.language == 0,
      )?.last_update_timestamp,
      s = i?.per_language_info?.some(
        (e) => e.last_publish_timestamp < e.last_update_timestamp,
      ),
      c = i?.per_language_info
        ?.slice()
        .sort((e, t) => K[e.language] - K[t.language])
        ?.map((e) =>
          (0, V.jsx)(Gn, { info: e, rtEnglishUpdateTime: o }, e.language),
        );
    return (0, V.jsx)(S, {
      children: (0, V.jsxs)(`div`, {
        className: jn,
        children: [
          (0, V.jsxs)(`div`, {
            className: X,
            children: [
              (0, V.jsxs)(`div`, {
                className: Z,
                children: [j(`#FAQDashboard_VisibilityColumn`), ` `],
              }),
              (0, V.jsxs)(`div`, {
                className: Mn,
                children: [
                  (0, V.jsxs)(`div`, {
                    className: Pn,
                    children: [
                      (0, V.jsxs)(`div`, {
                        className: w(Fn, In),
                        children: [
                          j(`#FAQDashboard_VisibleInGlobalRealmLabel`),
                          `\xA0`,
                          (0, V.jsx)(Y, {
                            bIsVisible: i.visible_in_global_realm,
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`div`, {
                        className: w(Fn, Ln),
                        children: [
                          j(`#FAQDashboard_VisibleInChinaRealmLabel`),
                          `\xA0`,
                          (0, V.jsx)(Y, {
                            bIsVisible: i.visible_in_china_realm,
                          }),
                        ],
                      }),
                      (0, V.jsx)(`div`, {
                        className: Rn,
                        children: (0, V.jsx)(kn, { draft: t }),
                      }),
                    ],
                  }),
                  (0, V.jsxs)(`div`, {
                    className: zn,
                    children: [
                      s
                        ? (0, V.jsx)(`div`, {
                            className: Bn,
                            children: j(`#FAQStatus_DraftVersionsDesc`),
                          })
                        : (0, V.jsx)(`div`, {
                            className: Bn,
                            children: j(`#FAQStatus_NothingToPublish`),
                          }),
                      (0, V.jsx)(`div`, {
                        className: Vn,
                        children: (0, V.jsx)(Dn, { draft: t, bDisabled: !s }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: X,
            children: [
              (0, V.jsx)(`div`, {
                className: Z,
                children: j(`#FAQDashboard_LocalizationSection`),
              }),
              Oe.is_support && (0, V.jsx)(Wn, { draft: t }),
              (0, V.jsxs)(`div`, {
                className: Mn,
                children: [
                  (0, V.jsx)(`div`, {
                    className: Nn,
                    children: j(`#FAQDashboard_LocalizationSectionDesc`),
                  }),
                  (0, V.jsx)(Wt, { draft: t, eLanguage: n }),
                ],
              }),
              (0, V.jsxs)(`div`, {
                className: Mn,
                children: [
                  (0, V.jsx)(`div`, {
                    className: Nn,
                    children: j(`#EventEditor_Loc_CrowdinIntegration_Desc`),
                  }),
                  (0, V.jsx)(Gt, { draft: t }),
                ],
              }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: X,
            children: [
              (0, V.jsx)(`div`, {
                className: Z,
                children: j(`#FAQStatus_LocalizedVersionStatusHeader`),
              }),
              (0, V.jsxs)(`table`, {
                className: Hn,
                children: [
                  (0, V.jsx)(`thead`, {
                    children: (0, V.jsxs)(`tr`, {
                      children: [
                        (0, V.jsx)(`th`, { children: j(`#LanguageTitle`) }),
                        (0, V.jsx)(`th`, {
                          children: j(`#FAQStatus_LastUpdated`),
                        }),
                        (0, V.jsx)(`th`, {
                          children: j(`#FAQStatus_LastPublished`),
                        }),
                      ],
                    }),
                  }),
                  (0, V.jsx)(`tbody`, { children: c }),
                ],
              }),
            ],
          }),
          (0, V.jsx)(`div`, {
            className: X,
            children: (0, V.jsx)(Tn, { draft: t }),
          }),
        ],
      }),
    });
  }),
  Wn = n((e) => {
    let { draft: t } = e;
    Kn(t.GetFAQID());
    let n = qn(P.CLANSTEAMID, t.GetFAQID()),
      [r, i] = (0, B.useState)(-1),
      [a, o] = (0, B.useState)(!1);
    return (
      n.isSuccess &&
        n.data.crowdin_file_id &&
        `${n.data.crowdin_project_id}${n.data.crowdin_file_id}`,
      null
    );
  }),
  Gn = n((e) => {
    let { info: t, rtEnglishUpdateTime: n } = e,
      r = !!n && n > t.last_update_timestamp,
      i = t.last_update_timestamp > t.last_publish_timestamp;
    return (0, V.jsxs)(`tr`, {
      children: [
        (0, V.jsx)(`td`, { children: j(`#Language_` + Ce(t.language)) }),
        (0, V.jsx)(`td`, {
          children: (0, V.jsx)(tn, {
            rtTimestamp: t.last_update_timestamp,
            bShowAsWarning: r,
          }),
        }),
        (0, V.jsx)(`td`, {
          children: (0, V.jsx)(tn, {
            rtTimestamp: t.last_publish_timestamp,
            bShowAsWarning: i,
          }),
        }),
      ],
    });
  });
function Kn(e) {
  let t = Re();
  return i({
    mutationKey: [`fetch_faq_translation`, e],
    mutationFn: async (n) => {
      let r = Me.Init(Qe);
      return (
        r.Body().set_faq_id(e),
        r.Body().set_language(n),
        r.Body().set_steamid(P.CLANSTEAMID),
        (await qe.FetchLocalizationFromCrowdIn(t, r)).GetEResult()
      );
    },
  });
}
function qn(e, t) {
  let n = Re();
  return a({
    queryKey: [`get_faq_crowdin_metadata`, e, t],
    queryFn: async () => {
      let r = Me.Init(Ke);
      return (
        r.Body().set_faq_id(t),
        r.Body().set_steamid(e),
        (await qe.GetCrowdInMetadata(n, r)).Body().toObject()
      );
    },
  });
}
var Jn = n((e) => {
    let { draft: t } = e,
      n = t.BNeedsSaving();
    return (0, V.jsx)(`div`, {
      className: `btn_green_steamui btn_medium`,
      onClick: (t) => _((0, V.jsx)(Yn, { draft: e.draft }), N(t)),
      children: (0, V.jsxs)(`span`, {
        children: [
          !n &&
            (0, V.jsx)(`img`, {
              className: `FIGxwNiJB6c-`,
              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=`,
            }),
          j(n ? `#Button_Save` : `#Button_Saved`),
        ],
      }),
    });
  }),
  Yn = (e) => {
    let { draft: t, closeModal: n } = e,
      [r, i] = B.useState(!0),
      [a, o] = B.useState(void 0);
    B.useEffect(() => {
      (async () => {
        i(!0);
        try {
          let e = await t.SaveDrafts();
          o(e);
        } catch (e) {
          (o(2),
            console.log(
              `FAQSaveProgressDialog hit exception ` + b(e).strErrorMsg,
            ));
        } finally {
          i(!1);
        }
      })();
    }, [t]);
    let s = B.useId();
    return (0, V.jsxs)(Se, {
      "aria-labelledby": s,
      bAllowFullSize: !0,
      onCancel: n,
      closeModal: n,
      children: [
        (0, V.jsx)(E, {
          id: s,
          children: r
            ? (0, V.jsx)(`div`, { children: j(`#FAQSave_Saving`) })
            : (0, V.jsxs)(`div`, {
                children: [
                  j(a == 1 ? `#FAQSave_SaveSuccess` : `#FAQSave_Error`),
                  ` `,
                ],
              }),
        }),
        (0, V.jsx)(T, {
          children: r
            ? (0, V.jsx)(m, { size: `medium`, position: `center` })
            : (0, V.jsx)(`div`, {
                children:
                  a == 1
                    ? (0, V.jsx)(`div`, {
                        children: j(`#FAQSave_SaveSuccess_desc`),
                      })
                    : (0, V.jsx)(`div`, {
                        children: j(
                          `#Error_Description`,
                          a,
                          j(`#Error_GenericFailureDescription`),
                        ),
                      }),
              }),
        }),
        (0, V.jsx)(M, {
          children:
            !r && (0, V.jsx)(Be, { onClick: n, children: j(`#Button_OK`) }),
        }),
      ],
    });
  },
  Xn = `mZQqPWZ36ck-`,
  Zn = `sZZCyY-6QMg-`,
  Qn = n((e) => {
    let { draft: t, bPreview: n } = e,
      r = t.BHasPublished();
    return (0, V.jsx)(S, {
      children: (0, V.jsxs)(`div`, {
        className: w({ [$e]: !0, [it]: !n && !r, [rt]: !n && r, [void 0]: n }),
        children: [
          (0, V.jsx)(U, {
            route: n ? H.k_eCommunityEdit : H.k_eCommunityDashboard,
            faqid: t.GetFAQID(),
            className: v,
            children: j(
              n ? `#FAQEditor_EditFAQ` : `#EventDisplay_EventsDashBtn`,
            ),
          }),
          (0, V.jsxs)(`div`, {
            children: [
              (0, V.jsx)(`div`, {
                className: Xn,
                children: j(
                  n
                    ? `#FAQEditor_InternalName_Preview`
                    : `#FAQEditor_InternalName`,
                ),
              }),
              (0, V.jsxs)(`div`, {
                className: Zn,
                children: [
                  t.GetFAQInternalName(),
                  (0, V.jsx)(`img`, {
                    src: et,
                    onClick: (e) => _((0, V.jsx)($n, { draft: t }), N(e)),
                  }),
                ],
              }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: ge,
            children: [
              (0, V.jsx)(ie, {
                selectedLang: g.Get().GetCurEditLanguage(),
                fnOnLanguageChanged: g.Get().SetCurEditLanguage,
                fnLangHasData: t.BHasSomeTextForLanguage,
                fnIsLangSupported: (e) => !0,
                fnLastUpdateRTime: t.GetLastTimeLanguageUpdated,
                realms: [y.k_ESteamRealmGlobal, y.k_ESteamRealmChina],
              }),
              !n &&
                (0, V.jsx)(U, {
                  route: H.k_eCommunityPreview,
                  faqid: t.GetFAQID(),
                  className: `ugkEbNZ8MZc-`,
                  children: j(`#Button_Preview`),
                }),
            ],
          }),
        ],
      }),
    });
  }),
  $n = (e) => {
    let { closeModal: t, draft: n } = e,
      [r, i] = B.useState(n.GetFAQInternalName() || ``),
      [a, o] = B.useState(!1),
      [s, c] = B.useState(1),
      [l, u] = B.useState(!1);
    return (0, V.jsxs)(Se, {
      title: j(`#FAQEditor_ChangeInternalName`),
      bAllowFullSize: !0,
      onCancel: t,
      closeModal: t,
      children: [
        (0, V.jsxs)(T, {
          children: [
            (0, V.jsx)(`div`, {
              children: j(`#FAQEditor_ChangeInternalName_desc`),
            }),
            (0, V.jsx)(`input`, {
              type: `text`,
              value: r,
              placeholder: j(`#FAQEditor_ChangeInternalName`),
              onFocus: (e) => e.target.select(),
              onChange: (e) => i(e.currentTarget.value),
              maxLength: 240,
              disabled: a,
            }),
            !(!a || l) &&
              (0, V.jsx)(m, {
                string: j(`#Updating`),
                position: `center`,
                size: `medium`,
              }),
            l &&
              (0, V.jsx)(`span`, {
                children:
                  s == 1
                    ? j(`#EventDisplay_Share_Success`)
                    : j(
                        `#Error_Description`,
                        s,
                        j(`#Error_GenericFailureDescription`),
                      ),
              }),
          ],
        }),
        (0, V.jsx)(M, {
          children: (0, V.jsx)(O, {
            bOKDisabled: r.trim().length == 0 || a,
            onCancel: t,
            strCancelText: j(l ? `#Button_Close` : `#Button_Cancel`),
            onOK: async () => {
              (o(!0),
                R.Get()
                  .UpdateInternalName(n.GetFAQID(), r)
                  .then((e) => c(e))
                  .finally(() => {
                    u(!0);
                  }));
            },
          }),
        }),
      ],
    });
  },
  er = n((e) => {
    let { draft: t, eLanguage: n } = e,
      r = t.GetFAQID(),
      [i, a] = Xe(r),
      o = a && i.per_language_info.find((e) => e.language == n),
      s =
        a &&
        ((F.EREALM == y.k_ESteamRealmGlobal && i.visible_in_global_realm) ||
          (F.EREALM == y.k_ESteamRealmChina && i.visible_in_china_realm)) &&
        !!o?.last_publish_timestamp;
    return (0, V.jsx)(S, {
      children: (0, V.jsx)(`div`, {
        className: w(ve),
        children: (0, V.jsxs)(`div`, {
          className: Fe,
          style: { width: `unset`, justifyContent: `center` },
          children: [
            (0, V.jsx)(Jn, { draft: t }),
            !!s &&
              (0, V.jsx)(`div`, {
                className: `ugkEbNZ8MZc-`,
                children: (0, V.jsx)(`a`, {
                  href: F.HELP_BASE_URL + `faqs/view/` + i.url_code,
                  children: j(`#FAQEditir_ViewLiveFAQ`),
                }),
              }),
          ],
        }),
      }),
    });
  }),
  tr = n((e) => {
    let { faqid: t } = e,
      [n, r] = I(t),
      i = B.useRef(void 0);
    if (!r)
      return (0, V.jsx)(m, {
        position: `center`,
        size: `xlarge`,
        string: j(`#Loading`),
      });
    if (!n) return (0, V.jsx)(ar, { strError: j(`#FAQEditor_NoFAQFound`) });
    let a = g.Get().GetCurEditLanguage();
    return (0, V.jsxs)(`div`, {
      children: [
        (0, V.jsx)(Qn, { draft: n }),
        (0, V.jsxs)(`div`, {
          className: ln,
          children: [
            (0, V.jsx)(`div`, {
              className: un,
              children: (0, V.jsx)(Un, { draft: n, eLanguage: a }),
            }),
            (0, V.jsx)(`div`, {
              className: dn,
              children: (0, V.jsx)(`div`, {
                className: fn,
                children: (0, V.jsxs)(`div`, {
                  className: w(De, pn),
                  children: [
                    (0, V.jsxs)(`div`, {
                      className: w(ke, mn),
                      children: [
                        (0, V.jsx)(rr, { draft: n, eLanguage: a }),
                        (0, V.jsx)(ir, {
                          bbcodeEditorRef: i,
                          draft: n,
                          eLanguage: a,
                        }),
                      ],
                    }),
                    (0, V.jsx)(nr, {
                      draft: n,
                      bbcodeEditorRef: i,
                      className: w(pe, hn),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        (0, V.jsx)(er, { draft: n, eLanguage: a }),
      ],
    });
  }),
  nr = (e) => {
    let t = (0, B.useMemo)(() => new fe(P.CLANSTEAMID), []);
    if (!P.CAN_UPLOAD_IMAGES) return null;
    let { draft: n, bbcodeEditorRef: r } = e;
    return (0, V.jsx)(S, {
      children: (0, V.jsxs)(`div`, {
        className: e.className,
        children: [
          (0, V.jsx)(`div`, { children: j(`#FAQEditor_ImageTitle`) }),
          (0, V.jsx)(le, {
            bShowLightBox: !0,
            appid: void 0,
            clanSteamID: t,
            imageInsertCallBack: (e, t) => r.current && se(r?.current, e, t),
            fnSetImageURL: () => {},
            rgRealmList: n.GetIncludedRealmList(),
            fnLangHasData: n.BHasSomeTextForLanguage,
            fnGetImageHash: (e, t) => {
              if (f.includes(e)) {
                let e = oe.GetAllLocalizedGroupImages();
                return e && e.length > t && e[t] != null ? e[t] : null;
              }
              return null;
            },
            partnerEventStore: p,
          }),
        ],
      }),
    });
  },
  rr = n((e) => {
    let { draft: t, eLanguage: n } = e;
    return (0, V.jsxs)(`div`, {
      className: _n,
      children: [
        (0, V.jsx)(`div`, {
          className: gn,
          children: j(`#FAQEditor_TitleLabel`),
        }),
        (0, V.jsx)(`input`, {
          type: `text`,
          className: vn,
          value: t.GetDraftTitle(n) || ``,
          placeholder: j(`#FAQEditor_TitlePlaceHolder`),
          onFocus: (e) => e.target.select(),
          onChange: (e) => t.SetDraftTitle(n, e.currentTarget.value),
          maxLength: 120,
        }),
      ],
    });
  }),
  ir = n((e) => {
    let { draft: t, eLanguage: n, bbcodeEditorRef: r } = e;
    return (0, V.jsxs)(`div`, {
      className: bn,
      children: [
        (0, V.jsx)(`div`, {
          className: gn,
          children: j(`#FAQEditor_ContentLabel`),
        }),
        (0, V.jsx)(re, {
          ref: r,
          fnGetCurText: () => t.GetDraftContent(n) || ``,
          fnOnTextChange: (e) => t.SetDraftContent(n, e.currentTarget.value),
          fnSetText: (e) => t.SetDraftContent(n, e),
          strPlaceholder: j(`#FAQEditor_ContentPlaceHolder`),
          bSupportHTMLImport: !0,
          showFormatHelp: `PartnerEvents`,
          className: yn,
          classNameForTextArea: xn,
        }),
      ],
    });
  }),
  ar = (e) =>
    (0, V.jsxs)(`div`, {
      className: Sn,
      children: [
        (0, V.jsx)(`div`, { className: Cn, children: e.strError }),
        (0, V.jsx)(U, {
          route: H.k_eCommunityDashboard,
          className: wn,
          children: j(`#FAQEditor_GoToDashboard`),
        }),
      ],
    }),
  or = `a2UdikiVkck-`,
  sr = `YDzLB1AUc00-`,
  cr = `_8dRokwI7qvo-`,
  lr = `-LwR-Y49Qjs-`,
  ur = `V1UdW6-ZPLQ-`,
  dr = `skUGxU3Soa4-`,
  fr = `Q59fS8HNVXE-`,
  pr = `zv8yZjEH8OA-`,
  mr = `jY2BfYME35c-`,
  hr = `QM-CrfV266o-`,
  gr = (e) => {
    let {
        title: t,
        content: n,
        bIsPreview: r,
        elSideBars: i,
        version: a,
        language: o,
      } = e,
      s = be();
    return (
      B.useEffect(() => {
        let e = s?.hash?.substr(+(s?.hash?.substr(0, 1) === `#`));
        e &&
          document
            .getElementById(e)
            ?.scrollIntoView({ block: `start`, behavior: `smooth` });
      }, [s]),
      (0, V.jsxs)(`div`, {
        className: w(or, F.LANGUAGE),
        children: [
          (0, V.jsx)(`a`, {
            className: sr,
            href: `${F.HELP_BASE_URL}`,
            children: j(`#FAQViewer_SteamSupport`),
          }),
          (0, V.jsxs)(`div`, {
            className: cr,
            children: [
              (0, V.jsxs)(`div`, {
                className: w(lr),
                children: [
                  (0, V.jsx)(`div`, { className: ur }),
                  (0, V.jsxs)(`div`, {
                    className: pr,
                    children: [
                      (0, V.jsx)(`div`, {
                        className: mr,
                        role: `heading`,
                        "aria-level": 1,
                        children: t,
                      }),
                      (0, V.jsx)(`div`, {
                        className: hr,
                        children: (0, V.jsx)(Ze, {
                          text: n,
                          bShowErrorInfo: r,
                          version: a || `0`,
                          language: o,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, V.jsx)(`div`, {
                className: dr,
                children: (0, V.jsx)(`div`, { className: fr, children: i }),
              }),
            ],
          }),
        ],
      })
    );
  },
  Q = (e) => (0, V.jsx)(`div`, { className: or, children: e.children }),
  _r = `wT3kSyT1vtw-`,
  vr = `fhSy32c8EWo-`,
  yr = `zktSK2ybNbU-`,
  br = `VTYYqUrNc1w-`,
  xr = `nC9n0kLtumQ-`,
  Sr = `tJUYbVsoqiw-`,
  Cr = (e) => {
    let { faqContent: t } = e,
      [n, r] = Ge(t.faq_id, t.version, t.language);
    return R.Get().BHasFAQEdit()
      ? (0, V.jsxs)(`div`, {
          className: w(vr, _e),
          children: [
            (0, V.jsx)(`div`, {
              className: xr,
              children: j(`#FAQViewer_AdminLinks`),
            }),
            (0, V.jsx)(`div`, {
              className: _r,
              children: Ie(
                `#FAQViewer_Admin_LastUpdate`,
                n?.author_account_id
                  ? (0, V.jsx)(ce, {
                      accountID: Number.parseInt(n.author_account_id),
                    })
                  : j(`#FAQViewer_UnknownUser`),
                (0, V.jsx)(`span`, {
                  children:
                    Ae(t.timestamp) +
                    `@` +
                    Ee(t.timestamp, { bForce24HourClock: !1 }),
                }),
              ),
            }),
            (0, V.jsx)(wr, { faqContent: t }),
            (0, V.jsx)(U, {
              faqid: t.faq_id,
              route: H.k_eCommunityEdit,
              bForceAnchor: !0,
              children: j(`#FAQViewer_GotoEditor`),
            }),
          ],
        })
      : null;
  },
  wr = (e) => {
    let { faqContent: t } = e,
      [n, r] = I(t.faq_id);
    if (!n || !r || n.GetLastTimeLanguageUpdated(t.language) <= t.timestamp)
      return null;
    let i = n.GetLastSavedDraftVersion(t.language);
    return (0, V.jsx)(`div`, {
      className: _r,
      children: Ie(
        `#FAQViewer_DraftNewer`,
        (0, V.jsx)(ce, { accountID: Number.parseInt(i.author_account_id) }),
        (0, V.jsx)(`span`, {
          children:
            Ae(i.timestamp) + `@` + Ee(i.timestamp, { bForce24HourClock: !1 }),
        }),
      ),
    });
  },
  Tr = (e) =>
    (0, V.jsxs)(V.Fragment, {
      children: [
        (0, V.jsxs)(`div`, {
          className: w(vr, yr),
          children: [
            (0, V.jsx)(`div`, {
              className: br,
              children: (0, V.jsx)(me, { role: `presentation` }),
            }),
            (0, V.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, V.jsx)(`div`, {
                  className: xr,
                  children: j(`#FAQViewer_SideBar_ProblemWithSteam_Title`),
                }),
                (0, V.jsx)(`div`, {
                  children: j(`#FAQViewer_SideBar_ProblemWithSteam_Desc`),
                }),
                (0, V.jsx)(`div`, {
                  className: Sr,
                  children: (0, V.jsx)(`a`, {
                    href: F.HELP_BASE_URL,
                    className: v,
                    children: j(`#FAQViewer_SideBar_ProblemWithSteam_Link`),
                  }),
                }),
              ],
            }),
          ],
        }),
        !Ne() &&
          (0, V.jsxs)(`div`, {
            className: w(`fhSy32c8EWo-`, `dSiEYPQQjIk-`),
            children: [
              (0, V.jsx)(`div`, {
                className: `VTYYqUrNc1w-`,
                children: (0, V.jsx)(Ve, { role: `presentation` }),
              }),
              (0, V.jsxs)(`div`, {
                className: void 0,
                children: [
                  (0, V.jsx)(`div`, {
                    className: `nC9n0kLtumQ-`,
                    children: j(`#FAQViewer_SideBar_CommunityHelp_Title`),
                  }),
                  (0, V.jsx)(`div`, {
                    children: j(`#FAQViewer_SideBar_CommunityHelp_Desc`),
                  }),
                  (0, V.jsx)(`div`, {
                    className: `tJUYbVsoqiw-`,
                    children: (0, V.jsx)(`a`, {
                      href: F.COMMUNITY_BASE_URL + `discussions`,
                      className: `ugkEbNZ8MZc-`,
                      children: j(`#FAQViewer_SideBar_CommunityHelp_Link`),
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  Er = `iYNJzFiKEY4-`,
  Dr = `Pm89DunmatY-`,
  Or = `CtPNwBTPQMI-`,
  kr = (e) => {
    let { faqid: t } = e,
      [n, r] = Je(t, Le(F.LANGUAGE));
    return r
      ? n
        ? (0, V.jsx)(gr, {
            title: n.title,
            content: n.content,
            version: n.version,
            elSideBars: [
              (0, V.jsx)(Tr, { faqContent: n }, `sidebar`),
              (0, V.jsx)(Cr, { faqContent: n }, `adminbar`),
            ],
          })
        : (0, V.jsx)(Q, {
            children: (0, V.jsx)(Ar, { strError: j(`#FAQViewer_NoFAQFound`) }),
          })
      : (0, V.jsx)(Q, {
          children: (0, V.jsx)(m, {
            position: `center`,
            size: `xlarge`,
            string: j(`#Loading`),
          }),
        });
  },
  Ar = (e) => {
    let t =
      F.COMMUNITY_BASE_URL +
      (P.APPID ? `app/` + (P.VANITY_ID ?? P.APPID) : `gid/` + P.CLANSTEAMID);
    return (0, V.jsxs)(`div`, {
      className: Er,
      children: [
        (0, V.jsx)(`div`, { className: Dr, children: e.strError }),
        (0, V.jsx)(`a`, {
          className: Or,
          href: t,
          children: j(`#FAQViewer_GoToHomepage`),
        }),
      ],
    });
  },
  jr = n((e) => {
    let { faqid: t } = e,
      [n, r] = I(t),
      i = g.Get().GetCurEditLanguage();
    return r
      ? n
        ? (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(Qn, { draft: n, bPreview: !0 }),
              (0, V.jsx)(gr, {
                title: n.GetDraftTitleWithFallback(i, F.EREALM),
                content: n.GetDraftContentWithFallback(i, F.EREALM),
                version: `` + n.GetLastTimeLanguageUpdated(i),
                language: i,
              }),
              (0, V.jsx)(er, { draft: n, eLanguage: i }),
            ],
          })
        : (0, V.jsx)(Q, {
            children: (0, V.jsx)(Ar, { strError: j(`#FAQViewer_NoFAQFound`) }),
          })
      : (0, V.jsx)(Q, {
          children: (0, V.jsx)(m, {
            position: `center`,
            size: `xlarge`,
            string: j(`#Loading`),
          }),
        });
  }),
  $ = {
    ViewFAQ: (e, t) => `/faqs/${e}/view/${t}*`,
    EditFAQ: (e, t) => `/faqs/${e}/edit/${t}*`,
    DashboardFAQ: (e) => `/faqs/${e}/dashboard`,
    PreviewFAQ: (e, t) => `/faqs/${e}/preview/${t}*`,
  },
  Mr = n((e) =>
    (0, V.jsxs)(V.Fragment, {
      children: [
        (0, V.jsx)(cn, {}),
        (0, V.jsxs)(o, {
          children: [
            (0, V.jsx)(u, {
              path: $.ViewFAQ(`:vanity_str`, `:faqid`),
              render: (e) =>
                (0, V.jsx)(A, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: t } = e.match.params,
                        n = L(t);
                      return (0, V.jsx)(kr, { faqid: n });
                    },
                  },
                }),
            }),
            (0, V.jsx)(u, {
              path: $.EditFAQ(`:vanity_str`, `:faqid`),
              render: (e) =>
                (0, V.jsx)(A, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: t } = e.match.params;
                      if (t) {
                        let e = L(t);
                        return e
                          ? (0, V.jsx)(tr, { faqid: e })
                          : (0, V.jsx)(c, {
                              push: !0,
                              to: ot(H.k_eCommunityDashboard),
                            });
                      }
                      return (0, V.jsx)(nn, {});
                    },
                  },
                }),
            }),
            (0, V.jsx)(u, {
              path: $.DashboardFAQ(`:vanity_str`),
              render: (e) =>
                (0, V.jsx)(A, {
                  config: { "faqs-root": () => (0, V.jsx)(nn, {}) },
                }),
            }),
            (0, V.jsx)(u, {
              path: $.PreviewFAQ(`:vanity_str`, `:faqid`),
              render: (e) =>
                (0, V.jsx)(A, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: t } = e.match.params,
                        n = L(t);
                      return (0, V.jsx)(jr, { faqid: n });
                    },
                  },
                }),
            }),
            (0, V.jsx)(u, { component: xe }),
          ],
        }),
      ],
    }),
  );
export { $ as FAQRoutes, Mr as default };

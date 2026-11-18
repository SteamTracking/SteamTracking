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
  $o as _,
  Dn as v,
  Dr as ue,
  Es as de,
  Eu as y,
  Gr as fe,
  Hi as pe,
  Jf as me,
  Ji as he,
  Kc as ge,
  Km as b,
  Pr as _e,
  Qi as ve,
  Qm as ye,
  Rr as be,
  Sf as xe,
  Uf as x,
  Us as S,
  Zi as C,
  Zm as w,
  Zo as T,
  bf as Se,
  bm as E,
  bn as Ce,
  cd as D,
  cf as we,
  ds as Te,
  ea as O,
  es as Ee,
  gr as De,
  hf as Oe,
  if as k,
  ir as ke,
  is as A,
  jc as Ae,
  jm as je,
  ku as j,
  ls as M,
  nh as Me,
  nm as Ne,
  ns as N,
  os as P,
  qi as F,
  qn as Pe,
  rr as Fe,
  sh as Ie,
  ts as I,
  ui as L,
  vf as Le,
  vn as Re,
  xm as ze,
  xs as R,
  yc as Be,
  ym as z,
} from "./main.js";
import {
  a as Ve,
  c as He,
  d as Ue,
  f as We,
  i as Ge,
  l as Ke,
  n as B,
  o as qe,
  r as Je,
  s as Ye,
  t as Xe,
  u as Ze,
} from "./chunk~f17215eefb.js";
import "./chunk~bf4b546728.js";
import {
  a as Qe,
  c as $e,
  d as et,
  l as tt,
  o as nt,
  s as rt,
  u as it,
} from "./chunk~cbfff8c814.js";
var V = e(r()),
  H = l(),
  U = (function (e) {
    return (
      (e.k_eView = `view`),
      (e.k_eCommunityView = `communityview`),
      (e.k_eCommunityEdit = `edit`),
      (e.k_eCommunityDashboard = `dashboard`),
      (e.k_eCommunityPreview = `preview`),
      e
    );
  })({}),
  W = (e) => {
    let { route: t, faqid: n } = e,
      r = at(t, n);
    return e.bForceRedirect
      ? (0, H.jsx)(c, { push: !0, to: r })
      : e.bForceAnchor
        ? (0, H.jsx)(`a`, {
            href: E.COMMUNITY_BASE_URL.slice(0, -1) + r,
            className: e.className,
            children: e.children,
          })
        : (0, H.jsx)(s, {
            to: r,
            className: e.className,
            children: e.children,
          });
  };
function at(e, t) {
  let n = `/faqs/` + z.VANITY_ID + `/`;
  switch (e) {
    case `view`:
    case `communityview`:
      n += `view/` + Je(t);
      break;
    case `edit`:
      n += `edit/` + Je(t);
      break;
    case `dashboard`:
      n += `dashboard`;
      break;
    case `preview`:
      n += `preview/` + Je(t);
  }
  return n;
}
var ot = `-MPSvXdlKko-`,
  st = `cWORcGrq8Es-`,
  ct = `m6ZdpHgjsqc-`,
  lt = `e6REIYO7KFM-`,
  ut = `_3i4xgyPXOJ4-`,
  dt = `_6q07lEIV9WY-`,
  ft = `AIUe9Gi45d4-`,
  pt = `-z-7-ErTm9g-`,
  G = `JDfrmBEZqt0-`,
  mt = `-cvi16WJn34-`,
  K = `ub8sEXgmuvQ-`,
  ht = `V-TyNh8QFJ4-`,
  gt = `QDo-e1DBIlg-`,
  _t = `Xi5qpSzb8OM-`,
  vt = `z7uVZ-8L0hk-`,
  yt = `mBUkTcPh-cc-`,
  bt = `tB8ue3FBvKo-`,
  xt = `_0S-13uXvMfM-`,
  St = `JF3b8RUSLKk-`,
  Ct = `bB57r4QqpPw-`,
  wt = `KrdfO1R-kzI-`,
  Tt = `TxWVgTS0TjA-`,
  Et = `wuiS6vB9C44-`,
  Dt = `iPKa0MqEIN4-`,
  Ot = `FKq-V9NUbMU-`,
  kt = `UKn9j1s-T0g-`,
  At = `-HyDiAbxcCQ-`,
  jt = `fzBA-zORfUk-`,
  Mt = `Y8KHdIPPyhE-`,
  Nt = `y3pIr0FbFxU-`,
  Pt = `UinHRqPsVUQ-`,
  Ft = `KiThcBvchow-`,
  It = `pdvoaPVQ-YM-`,
  Lt = `z5IAmxaH35M-`,
  Rt = `apTgBdnUovI-`,
  zt = `title`,
  Bt = `content`;
function Vt(e, t) {
  let n = new et();
  for (let r = 0; r < 32; ++r)
    (e.BHasSomeTextForLanguage(r) || t == 0) &&
      (n.SetLocalization(zt, r, e.GetDraftTitle(r) ?? ``),
      n.SetLocalization(Bt, r, e.GetDraftContent(r) ?? ``));
  return n;
}
function Ht(e, n, r) {
  let i = new Set(),
    a = n.GetSortedTokenList();
  return (
    t(() => {
      r.forEach((t) => {
        (a.forEach((r) => {
          let i = n.GetLocalization(r, t) || ``;
          if (r === zt) {
            let n = e.GetDraftTitle(t);
            (i || (n && n.length > 0)) && e.SetDraftTitle(t, i);
          }
          if (r === Bt) {
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
var Ut = (e) => {
    let { draft: t, eLanguage: n } = e;
    return (0, H.jsxs)(`div`, {
      className: Fe,
      children: [
        (0, H.jsx)(Kt, { draft: t, eLanguage: n }),
        (0, H.jsx)(it, {
          strToolTip: k(`#FAQEditor_Loc_Import_ttip`),
          strLabel: k(`#EventEditor_Loc_Import_Short`),
          fnOnImportLocData: (e, n) => Ht(t, e, n),
        }),
      ],
    });
  },
  Wt = (e) => {
    let { draft: t } = e;
    return (0, H.jsxs)(`div`, {
      className: Fe,
      children: [
        (0, H.jsx)(`div`, {
          className: v,
          onClick: (e) => {
            O(
              (0, H.jsx)(Gt, { direction: `export`, draft: t, children: ` ` }),
              D(e),
            );
          },
          children: k(`#EventEditor_Loc_Export_Short`),
        }),
        (0, H.jsx)(`div`, {
          className: v,
          onClick: (e) => {
            O(
              (0, H.jsx)(Gt, { direction: `import`, draft: t, children: ` ` }),
              D(e),
            );
          },
          children: k(`#EventEditor_Loc_Import_Short`),
        }),
      ],
    });
  },
  Gt = (e) => {
    let { closeModal: t, direction: n, draft: r } = e,
      [i, a] = V.useState(!1),
      [o, s] = V.useState([]);
    i || o.length;
    let c = async () => {
        a(!0);
        try {
          n == `import`
            ? await B.Get().ImportNonEnglishDraftsFromCrowdin(r.GetFAQID(), o)
            : await B.Get().ExportEnglishDraftToCrowdin(r.GetFAQID());
        } catch (e) {
          console.error(e);
        }
        a(!1);
      },
      l = k(
        n == `import`
          ? `#EventEditor_Loc_CrowdinIntegration_ImportTitle`
          : `#EventEditor_Loc_CrowdinIntegration_ExportTitle`,
      ),
      u = k(
        n == `import`
          ? `#EventEditor_Loc_Import_Crowdin_Confirm`
          : `#EventEditor_Loc_Export_Crowdin_Confirm`,
      ),
      d =
        n == `import`
          ? (0, H.jsx)(Jt, {
              draft: r,
              rgAllLanguages: qt,
              rgLanguagesSelected: o,
              fnSelectLanguages: s,
            })
          : null;
    return (0, H.jsx)(F, {
      className: Ct,
      closeModal: t,
      strTitle: l,
      strDescription: u,
      onOK: c,
      bOKDisabled: i,
      children: i ? (0, H.jsx)(m, { position: `center` }) : d,
    });
  },
  Kt = (e) => {
    let { draft: t, eLanguage: n } = e;
    return (0, H.jsx)(R, {
      toolTipContent: k(`#FAQEditor_Loc_Export_ttip`),
      children: (0, H.jsx)(`div`, {
        className: v,
        onClick: (e) => {
          O(
            (0, H.jsx)(F, {
              strTitle: k(`#EventEditor_Loc_Export`),
              bAlertDialog: !0,
              children: (0, H.jsx)(tt, {
                fnGetLocData: () => Vt(t, n),
                bShowXML: !0,
                bShowCSV: !0,
                strFileNamePrefix: `faq`,
                lang: n,
              }),
            }),
            D(e),
          );
        },
        children: k(`#EventEditor_Loc_Export_Short`),
      }),
    });
  },
  q = [
    0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11, 4, 19,
    25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
  ],
  qt = [
    23, 6, 7, 19, 13, 14, 15, 2, 1, 24, 18, 3, 10, 4, 16, 12, 11, 22, 20, 8, 5,
    27, 17, 9, 21, 26, 28, 30, 31,
  ],
  Jt = (e) => {
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
        .sort((e, t) => q[e] - q[t])
        .map((e) =>
          (0, H.jsx)(
            Yt,
            {
              draft: t,
              eLang: e,
              bInitialState: r.includes(e),
              fnOnChecked: a,
            },
            `langrow` + e + t.GetFAQID(),
          ),
        );
    return (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsxs)(`div`, {
          className: wt,
          children: [
            (0, H.jsx)(`div`, {
              className: kt,
              children: k(`#FAQCrowdin_LanguageHeader`),
            }),
            (0, H.jsx)(`div`, {
              className: void 0,
              children: k(`#FAQCrowdin_DraftTimestampHeader`),
            }),
          ],
        }),
        (0, H.jsx)(I, {
          className: Et,
          label: k(`#FAQCrowdin_SelectAllCheckboxes`),
          onChange: o,
        }),
        (0, H.jsx)(`div`, {
          className: Tt,
          children:
            s ?? (0, H.jsx)(`div`, { children: k(`#FAQCrowdin_NoDraftFound`) }),
        }),
      ],
    });
  },
  Yt = (e) => {
    let { draft: t, eLang: n, bInitialState: r, fnOnChecked: i } = e,
      a = t.GetLastSavedDraftVersion(n),
      o = a
        ? je.InitFromAccountID(
            Number.parseInt(a.author_account_id),
            E.EUNIVERSE,
          )
        : null,
      { data: s } = ae(o?.GetAccountID()),
      c = a
        ? k(
            `#FAQCrowdin_SavedAtTimeByAuthor`,
            Oe(a.timestamp) +
              ` @ ` +
              Le(a.timestamp, { bForce24HourClock: !1 }),
            s?.m_strPlayerName ?? a.author_account_id,
          )
        : k(`#FAQCrowdin_NoDraftFound`),
      l = (0, H.jsxs)(`div`, {
        className: Ot,
        children: [
          (0, H.jsx)(`div`, {
            className: kt,
            children: k(`#Language_` + w(n)),
          }),
          (0, H.jsx)(`div`, { className: void 0, children: c }),
        ],
      });
    return (0, H.jsx)(I, {
      className: Dt,
      label: l,
      checked: r,
      onChange: (e) => i(e, n),
    });
  };
function Xt(e) {
  let [t, n] = qe(),
    [r, i] = V.useState(0),
    [a, o] = V.useState(!1),
    [s, c] = V.useState(!1),
    [l, u] = V.useState(null),
    d = h(`CrowdinImportDialog`),
    f = V.useRef([]),
    p = async () => {
      o(!0);
      for (let e = 0; e < t.length; e++) {
        i(e);
        let n = t[e],
          r = [];
        for (let e = 0; e < qt.length; e += 5) {
          let t = qt.slice(e, e + 5);
          r.push(B.Get().ImportNonEnglishDraftsFromCrowdin(n.faq_id, t, d));
        }
        (await Promise.all(r),
          B.Get().BHasLiveEnglishVersion(n.faq_id)
            ? ((f.current[e] = B.Get().GetNonEnglishDraftsToPublish(n.faq_id)),
              console.log(
                `Going to publish FAQ`,
                n.faq_id,
                f.current[e].map((e) => w(e)),
              ))
            : console.log(`No live english version for:`, n.faq_id));
      }
      for (let e = 0; e < f.current.length; e++) {
        let n = t[e],
          r = f.current[e];
        if (r?.length > 0) {
          i(e);
          let t = await B.Get().PublishDraftByLanguage(n.faq_id, r);
          if (d.token.reason) return;
          if (t != 1) {
            u(k(`#FAQDashboard_PublishFailed`));
            return;
          }
        }
      }
      (c(!0), o(!1));
    };
  if (l)
    return (0, H.jsx)(F, {
      strTitle: k(`#FAQDashboard_CrowdinToolTitle`),
      strDescription: l,
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      closeModal: e.closeModal,
    });
  if (s)
    return (0, H.jsx)(F, {
      strTitle: k(`#FAQDashboard_CrowdinToolTitle`),
      strDescription: k(`#FAQDashboard_PublishComplete`),
      bAlertDialog: !0,
      closeModal: e.closeModal,
    });
  let m = (100 * (r + 0.5)) / t.length,
    ee = t[r].internal_name;
  return (0, H.jsx)(C, {
    title: k(`#FAQDashboard_CrowdinToolTitle`),
    ...e,
    onCancel: () => d.cancel(`CrowdinImportDialog cancelled`),
    children: (0, H.jsxs)(T, {
      children: [
        (0, H.jsxs)(_, {
          children: [
            k(`#FAQDashboard_CrowdinToolInstructionsWithCount`, t.length),
            (0, H.jsx)(`div`, {
              className: At,
              children: k(`#FAQDashboard_CrowdinToolWarning`),
            }),
          ],
        }),
        (0, H.jsxs)(_, {
          children: [
            (0, H.jsx)(Ee, {
              onClick: p,
              disabled: a,
              children: k(`#FAQDashboard_UpdateAllFAQsButton`),
            }),
            a && (0, H.jsx)(Zt, { nProgressPct: m, strCurrentLabel: ee }),
            f.current.length > 0 &&
              (0, H.jsx)(Qt, { rgUpdatedLanguagesForAllFAQs: f.current }),
          ],
        }),
      ],
    }),
  });
}
function Zt(e) {
  let { nProgressPct: t, strCurrentLabel: n } = e;
  return (0, H.jsxs)(`div`, {
    children: [
      (0, H.jsx)(`div`, {
        className: jt,
        children: (0, H.jsx)(`div`, {
          className: Mt,
          style: { width: t + `%` },
        }),
      }),
      (0, H.jsx)(`div`, {
        className: Nt,
        children: k(`#FAQDashboard_CrowdinToolProgress`, n),
      }),
    ],
  });
}
function Qt(e) {
  let { rgUpdatedLanguagesForAllFAQs: t } = e,
    [n, r] = qe();
  return (0, H.jsxs)(`div`, {
    className: Ft,
    children: [
      (0, H.jsx)(`div`, {
        className: It,
        children: k(`#FAQDashboard_CrowdinToolResultsLabel`),
      }),
      t.map((e, t) => {
        let r = n[t];
        if (e.length == 0) return null;
        let i = e.map((e) => ye(e)).join(`,`);
        return (0, H.jsx)(
          `div`,
          {
            children: (0, H.jsxs)(`div`, {
              className: Lt,
              children: [
                (0, H.jsx)(R, {
                  toolTipContent: r.internal_name,
                  strTooltipClassname: de,
                  nAllowOffscreenPx: 4e4,
                  className: Rt,
                  children: r.url_code + `: `,
                }),
                (0, H.jsx)(R, {
                  toolTipContent: i,
                  strTooltipClassname: de,
                  nAllowOffscreenPx: 4e4,
                  direction: `left`,
                  className: Pt,
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
var $t = `NBUvJ8CE384-`,
  en = (e) => {
    let { rtTimestamp: t, bShowAsWarning: n } = e;
    if (!t)
      return (0, H.jsx)(`div`, {
        className: $t,
        children: k(`#FAQDashboard_TimeNever`),
      });
    let r = Date.now() / 1e3 - t,
      i = r < 86400 ? xe(r, !1, !0) : Se(t);
    return (0, H.jsx)(ne, {
      className: n && `egvO-S9VIG4-`,
      rtFullDate: t,
      stylesmodule: te,
      children: i,
    });
  },
  tn = n((e) => {
    let [t, n] = qe(),
      [r, i] = V.useState(1),
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
      (0, V.useEffect)(() => {
        B.Get().RemoveAllDirtyDrafts();
      }, []),
      (0, H.jsx)(`div`, {
        className: ot,
        children: (0, H.jsxs)(`div`, {
          className: st,
          children: [
            (0, H.jsx)(nn, {}),
            (0, H.jsx)(an, { eCurrentSortColumn: r, SetSortColumn: i }),
            t.length == 0 &&
              (0, H.jsx)(`div`, {
                className: `LIGmEcGSWS0-`,
                children: k(`#FAQDashboard_Empty`),
              }),
            a.map((e) => (0, H.jsx)(on, { rgColumns: e }, e[0])),
            !n && (0, H.jsx)(m, { position: `center`, size: `xlarge` }),
          ],
        }),
      })
    );
  }),
  nn = (e) => {
    let t = V.useCallback(
        () =>
          ve((0, H.jsx)(rn, {}), window, {
            strTitle: k(`#FAQDashboard_CreateFAQButton`),
          }),
        [],
      ),
      n = V.useCallback(
        () =>
          ve((0, H.jsx)(Xt, { bDisableBackgroundDismiss: !0 }), window, {
            strTitle: k(`#FAQDashboard_CrowdinToolTitle`),
          }),
        [],
      );
    return (0, H.jsxs)(`div`, {
      className: ct,
      children: [
        (0, H.jsx)(`div`, {
          className: lt,
          children: k(`#FAQDashboard_Header`),
        }),
        (0, H.jsxs)(`div`, {
          className: ut,
          children: [
            (0, H.jsx)(Ee, {
              onClick: n,
              children: k(`#FAQDashboard_CrowdinToolButton`),
            }),
            (0, H.jsx)(Te, {
              onClick: t,
              children: k(`#FAQDashboard_CreateFAQButton`),
            }),
          ],
        }),
      ],
    });
  },
  rn = (e) => {
    let [t, n] = V.useState(``);
    return (0, H.jsxs)(F, {
      onOK: () => {
        B.Get().CreateFAQ(t);
      },
      bOKDisabled: t.length == 0,
      closeModal: e.closeModal,
      className: dt,
      children: [
        (0, H.jsx)(P, { children: k(`#FAQDashboard_CreateFAQButton`) }),
        (0, H.jsx)(T, {
          children: (0, H.jsxs)(_, {
            children: [
              k(`#FAQDashboard_CreateFAQInstructions`),
              (0, H.jsx)(`input`, {
                type: `text`,
                className: ft,
                value: t,
                placeholder: k(`#FAQDashboard_NamePlaceHolder`),
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
  an = (e) =>
    (0, H.jsxs)(`div`, {
      className: pt,
      children: [
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_NameColumn`,
          bIsNameColumn: !0,
          eThisColumn: 1,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_DraftTimetampColumn`,
          eThisColumn: 2,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_UpdatedLanguagesColumn`,
          eThisColumn: 3,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_StaleLanguagesColumn`,
          eThisColumn: 4,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_PublishedLanguagesColumn`,
          eThisColumn: 5,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_NeedPublishColumn`,
          eThisColumn: 6,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_VisibilityColumn`,
          eThisColumn: 7,
          ...e,
        }),
        (0, H.jsx)(J, {
          strLabelLocToken: `#FAQDashboard_SteamChinaVisibilityColumn`,
          eThisColumn: 8,
          ...e,
        }),
      ],
    }),
  J = (e) => {
    let {
        strLabelLocToken: t,
        bIsNameColumn: n,
        eThisColumn: r,
        eCurrentSortColumn: i,
        SetSortColumn: a,
      } = e,
      o = y(G, ht, n ? mt : K, i == r && `_2WRHjrJZHEM-`);
    return (0, H.jsxs)(R, {
      toolTipContent: k(t + `_ttip`),
      direction: `top`,
      className: o,
      onClick: () => a(r),
      children: [
        k(t),
        (0, H.jsx)(`div`, { className: gt, children: (0, H.jsx)(Ae, {}) }),
      ],
    });
  },
  Y = (e) => {
    let { nCount: t, nTotal: n, nGoal: r } = e;
    return (0, H.jsx)(`div`, {
      className: t == r ? bt : _t,
      children: t + ` / ` + n,
    });
  },
  X = (e) => {
    let { bIsVisible: t } = e;
    return (0, H.jsx)(`div`, {
      className: t ? vt : yt,
      children: k(t ? `#FAQDashboard_Visible` : `#FAQDashboard_Invisible`),
    });
  },
  on = (e) => {
    let [t, n, r, i, a, o, s, c, l] = e.rgColumns,
      u = o + s,
      d = i + a;
    return (0, H.jsxs)(W, {
      route: U.k_eCommunityEdit,
      faqid: t,
      className: xt,
      children: [
        (0, H.jsx)(`div`, {
          className: y(G, mt),
          children: (0, H.jsx)(`div`, { className: St, children: n }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(en, { rtTimestamp: r }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(Y, { nCount: i, nTotal: d, nGoal: d }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(Y, { nCount: a, nTotal: d, nGoal: 0 }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(Y, { nCount: o, nTotal: u, nGoal: u }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(Y, { nCount: s, nTotal: u, nGoal: 0 }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(X, { bIsVisible: c }),
        }),
        (0, H.jsx)(`div`, {
          className: y(G, K),
          children: (0, H.jsx)(X, { bIsVisible: l }),
        }),
      ],
    });
  },
  sn = (e) => (
    V.useEffect(
      () => (
        (window.onbeforeunload = () =>
          B.Get()
            .GetLoadedDraftObjs()
            ?.filter((e) => e.BNeedsSaving())?.length > 0
            ? k(`#EventEditor_UnsavedChanges`)
            : null),
        () => {
          window.onbeforeunload = () => {};
        }
      ),
      [],
    ),
    (0, H.jsx)(d, {
      message: (e) =>
        B.Get()
          .GetLoadedDraftObjs()
          ?.filter((e) => e.BNeedsSaving())?.length > 0 &&
        (e.pathname == $.DashboardFAQ(z.VANITY_ID) ||
          e.pathname?.startsWith($.ViewFAQ(z.VANITY_ID, ``).slice(0, -1)))
          ? k(`#EventEditor_UnsavedChanges`)
          : !0,
    })
  ),
  cn = `_5U-wyIj4ywo-`,
  ln = `XM1YgomE4w0-`,
  un = `_7H-8PdGT-o4-`,
  dn = `SU46TyPU5jI-`,
  fn = `_6-C9N7YQUn4-`,
  pn = `_0G0C7uElOA0-`,
  mn = `XBtRFvNIcDc-`,
  hn = `_68OZGlEN4jA-`,
  gn = `EbZ5bPgE88A-`,
  _n = `DWeSEuXZscA-`,
  vn = `u6ODiONWujc-`,
  yn = `vnHjs00M4YY-`,
  bn = `gvU9pno4fv8-`,
  xn = `Wqfu7vSr7TU-`,
  Sn = `QbUjyUopYvQ-`,
  Cn = `syeh3T1FQhc-`,
  wn = (e) =>
    (0, H.jsx)(R, {
      toolTipContent: k(`#FAQEditor_DeleteAction_ttip`),
      children: (0, H.jsx)(`div`, {
        className: y(v, Ce),
        onClick: (t) => {
          O((0, H.jsx)(Tn, { draft: e.draft }), D(t));
        },
        children: k(`#FAQEditor_DeleteAction`),
      }),
    }),
  Tn = (e) => {
    let { draft: t } = e,
      n = () => e.closeModal && e.closeModal(),
      [r, i] = V.useState(!1),
      [a, o] = V.useState(void 0),
      s = (0, H.jsx)(`div`, { children: k(`#FAQEditor_DeleteDesc`) });
    return (
      r
        ? (s = (0, H.jsx)(m, {
            position: `center`,
            size: `medium`,
            string: k(`#FAQEditor_DeletingInProgress`),
          }))
        : a &&
          (s = (0, H.jsx)(`div`, {
            children: k(
              `Error_Description`,
              a,
              k(`#Error_GenericFailureDescription`),
            ),
          })),
      (0, H.jsx)(j, {
        children: (0, H.jsx)(S, {
          onEscKeypress: n,
          children: (0, H.jsxs)(N, {
            children: [
              (0, H.jsx)(P, { children: k(`#FAQEditor_DeleteAction`) }),
              (0, H.jsx)(T, { children: (0, H.jsx)(_, { children: s }) }),
              (0, H.jsx)(A, {
                children: (0, H.jsx)(M, {
                  onCancel: n,
                  bOKDisabled: !!(r || a),
                  strOKText: k(`#FAQEditor_DeleteAction`),
                  strCancelText: r || a ? k(`#Button_OK`) : void 0,
                  onOK: async () => {
                    (i(!0),
                      B.Get()
                        .DeleteFAQ(t.GetFAQID())
                        .then((e) => {
                          if (e == 1) {
                            let e =
                              E.COMMUNITY_BASE_URL.substr(
                                0,
                                E.COMMUNITY_BASE_URL.length - 1,
                              ) + at(U.k_eCommunityDashboard);
                            window.location.href = e;
                          }
                          o(e);
                        })
                        .catch((e) => {
                          let t = x(e);
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
  En = n((e) => {
    let { draft: t, bDisabled: n } = e,
      r = t.BNeedsSaving();
    return (0, H.jsx)(R, {
      toolTipContent: k(
        r ? `#FAQPublish_SaveRequire_ttip` : `#FAQPublish_Publish_ttip`,
      ),
      children: (0, H.jsx)(`div`, {
        className: y(v, n && `rPlDZ1xmEm8-`),
        onClick: (t) => {
          n ||
            O(
              r
                ? (0, H.jsx)(he, {
                    strDescription: k(`#FAQPublish_SaveRequire_ttip`),
                  })
                : (0, H.jsx)(Dn, { draft: e.draft }),
              D(t),
            );
        },
        children: k(`#FAQPublish_Publish`),
      }),
    });
  }),
  Dn = (e) => {
    let { draft: t } = e,
      n = () => e.closeModal && e.closeModal(),
      [r, i] = V.useState(!1),
      [a, o] = V.useState(void 0),
      [s, c] = V.useState(void 0),
      [l, u] = Ye(t.GetFAQID()),
      [d, f] = V.useState([]),
      p = null;
    if (!u)
      p = (0, H.jsx)(m, {
        size: `small`,
        position: `center`,
        string: k(`#FAQPublish_PublishWait`),
      });
    else if (r)
      p = (0, H.jsx)(m, {
        position: `center`,
        size: `medium`,
        string: k(`#FAQPublish_Publishing`),
      });
    else if (a) p = (0, H.jsx)(`div`, { children: k(`#FAQPublish_Success`) });
    else if (s)
      p = (0, H.jsx)(`div`, {
        children: k(
          `#Error_Description`,
          s,
          k(`#Error_GenericFailureDescription`),
        ),
      });
    else if (!l)
      p = (0, H.jsx)(`div`, { children: k(`#FAQPublish_LoadError`) });
    else {
      let e = l.per_language_info
        ?.filter((e) => e.last_publish_timestamp < e.last_update_timestamp)
        .map((e) => e.language);
      p = (0, H.jsxs)(H.Fragment, {
        children: [
          (0, H.jsx)(`div`, { children: k(`#FAQPublish_Desc`) }),
          (0, H.jsx)(`br`, {}),
          (0, H.jsx)(`div`, { children: k(`#FAQPublish_Desc2`) }),
          (0, H.jsx)(`br`, {}),
          (0, H.jsx)(Jt, {
            draft: t,
            rgAllLanguages: e,
            rgLanguagesSelected: d,
            fnSelectLanguages: f,
          }),
        ],
      });
    }
    return (0, H.jsx)(j, {
      children: (0, H.jsx)(S, {
        onEscKeypress: n,
        children: (0, H.jsxs)(N, {
          className: Ct,
          children: [
            (0, H.jsx)(P, { children: k(`#FAQPublish_Publish`) }),
            (0, H.jsx)(T, { children: (0, H.jsx)(_, { children: p }) }),
            (0, H.jsx)(A, {
              children: (0, H.jsx)(M, {
                onCancel: n,
                bOKDisabled: !!(r || a || s || d.length == 0),
                strOKText: k(`#FAQPublish_Publish`),
                strCancelText: r || a || s ? k(`#Button_OK`) : void 0,
                onOK: async () => {
                  (i(!0),
                    B.Get()
                      .PublishDraftByLanguage(t.GetFAQID(), d)
                      .then((e) => {
                        (e == 1 && o(!0), c(e));
                      })
                      .catch((e) => {
                        let t = x(e);
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
  On = (e) =>
    (0, H.jsx)(R, {
      toolTipContent: k(`#FAQEditor_ChangeVisible_ttip`),
      children: (0, H.jsx)(`div`, {
        className: v,
        onClick: (t) => {
          O((0, H.jsx)(kn, { draft: e.draft }), D(t));
        },
        children: k(`#FAQEditor_EditVisible`),
      }),
    }),
  kn = (e) => {
    let { draft: t } = e,
      n = () => e.closeModal && e.closeModal(),
      [r, i] = V.useState(!1),
      [a, o] = V.useState(void 0),
      [s, c] = V.useState(void 0),
      l = B.Get().GetFAQArticleSummary(t.GetFAQID()),
      [u, d] = V.useState(l.visible_in_global_realm),
      [f, p] = V.useState(l.visible_in_china_realm),
      h = (0, H.jsxs)(H.Fragment, {
        children: [
          (0, H.jsx)(`div`, { children: k(`#FAQEditor_ChangeVisible_Desc`) }),
          (0, H.jsx)(I, {
            label: k(`#FAQEditor_VisibleInGlobal`),
            checked: u,
            onChange: (e) => d(e),
          }),
          (0, H.jsx)(I, {
            label: k(`#FAQEditor_VisibleInChina`),
            checked: f,
            tooltip: k(`#FAQEditor_VisibleInChina_ttip`),
            onChange: (e) => p(e),
          }),
        ],
      });
    return (
      r
        ? (h = (0, H.jsx)(m, {
            position: `center`,
            size: `medium`,
            string: k(`#FAQEditor_ChangeVisible_InProgress`),
          }))
        : a
          ? (h = (0, H.jsx)(`div`, {
              children: k(`#FAQEditor_ChangeVisible_Success`),
            }))
          : s &&
            (h = (0, H.jsx)(`div`, {
              children: k(
                `Error_Description`,
                s,
                k(`#Error_GenericFailureDescription`),
              ),
            })),
      (0, H.jsx)(j, {
        children: (0, H.jsx)(S, {
          onEscKeypress: n,
          children: (0, H.jsxs)(N, {
            children: [
              (0, H.jsx)(P, { children: k(`#FAQEditor_ChangeVisible`) }),
              (0, H.jsx)(T, { children: (0, H.jsx)(_, { children: h }) }),
              (0, H.jsx)(A, {
                children: (0, H.jsx)(M, {
                  onCancel: n,
                  bOKDisabled: !!(r || a || s),
                  strOKText: k(`#FAQEditor_ChangeVisible`),
                  strCancelText: r || a || s ? k(`#Button_OK`) : void 0,
                  onOK: async () => {
                    (i(!0),
                      B.Get()
                        .UpdateVisibility(t.GetFAQID(), u, f)
                        .then((e) => {
                          (e == 1 && o(!0), c(e));
                        })
                        .catch((e) => {
                          let t = x(e);
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
  An = `blM4bFZXLIk-`,
  Z = `CRU83TBl7pk-`,
  jn = `_1uNROKtIFbo-`,
  Mn = `_5LM9I10plNM-`,
  Nn = `uGWno2xQB0Y-`,
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
      [i, a] = Ye(r);
    if (!a) return null;
    let o = i?.per_language_info?.find(
        (e) => e.language == 0,
      )?.last_update_timestamp,
      s = i?.per_language_info?.some(
        (e) => e.last_publish_timestamp < e.last_update_timestamp,
      ),
      c = i?.per_language_info
        ?.slice()
        .sort((e, t) => q[e.language] - q[t.language])
        ?.map((e) =>
          (0, H.jsx)(Gn, { info: e, rtEnglishUpdateTime: o }, e.language),
        );
    return (0, H.jsx)(j, {
      children: (0, H.jsxs)(`div`, {
        className: An,
        children: [
          (0, H.jsxs)(`div`, {
            className: Z,
            children: [
              (0, H.jsxs)(`div`, {
                className: Nn,
                children: [k(`#FAQDashboard_VisibilityColumn`), ` `],
              }),
              (0, H.jsxs)(`div`, {
                className: jn,
                children: [
                  (0, H.jsxs)(`div`, {
                    className: Pn,
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: y(Fn, In),
                        children: [
                          k(`#FAQDashboard_VisibleInGlobalRealmLabel`),
                          `\xA0`,
                          (0, H.jsx)(X, {
                            bIsVisible: i.visible_in_global_realm,
                          }),
                        ],
                      }),
                      (0, H.jsxs)(`div`, {
                        className: y(Fn, Ln),
                        children: [
                          k(`#FAQDashboard_VisibleInChinaRealmLabel`),
                          `\xA0`,
                          (0, H.jsx)(X, {
                            bIsVisible: i.visible_in_china_realm,
                          }),
                        ],
                      }),
                      (0, H.jsx)(`div`, {
                        className: Rn,
                        children: (0, H.jsx)(On, { draft: t }),
                      }),
                    ],
                  }),
                  (0, H.jsxs)(`div`, {
                    className: zn,
                    children: [
                      s
                        ? (0, H.jsx)(`div`, {
                            className: Bn,
                            children: k(`#FAQStatus_DraftVersionsDesc`),
                          })
                        : (0, H.jsx)(`div`, {
                            className: Bn,
                            children: k(`#FAQStatus_NothingToPublish`),
                          }),
                      (0, H.jsx)(`div`, {
                        className: Vn,
                        children: (0, H.jsx)(En, { draft: t, bDisabled: !s }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Z,
            children: [
              (0, H.jsx)(`div`, {
                className: Nn,
                children: k(`#FAQDashboard_LocalizationSection`),
              }),
              ze.is_support && (0, H.jsx)(Wn, { draft: t }),
              (0, H.jsxs)(`div`, {
                className: jn,
                children: [
                  (0, H.jsx)(`div`, {
                    className: Mn,
                    children: k(`#FAQDashboard_LocalizationSectionDesc`),
                  }),
                  (0, H.jsx)(Ut, { draft: t, eLanguage: n }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: jn,
                children: [
                  (0, H.jsx)(`div`, {
                    className: Mn,
                    children: k(`#EventEditor_Loc_CrowdinIntegration_Desc`),
                  }),
                  (0, H.jsx)(Wt, { draft: t }),
                ],
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Z,
            children: [
              (0, H.jsx)(`div`, {
                className: Nn,
                children: k(`#FAQStatus_LocalizedVersionStatusHeader`),
              }),
              (0, H.jsxs)(`table`, {
                className: Hn,
                children: [
                  (0, H.jsx)(`thead`, {
                    children: (0, H.jsxs)(`tr`, {
                      children: [
                        (0, H.jsx)(`th`, { children: k(`#LanguageTitle`) }),
                        (0, H.jsx)(`th`, {
                          children: k(`#FAQStatus_LastUpdated`),
                        }),
                        (0, H.jsx)(`th`, {
                          children: k(`#FAQStatus_LastPublished`),
                        }),
                      ],
                    }),
                  }),
                  (0, H.jsx)(`tbody`, { children: c }),
                ],
              }),
            ],
          }),
          (0, H.jsx)(`div`, {
            className: Z,
            children: (0, H.jsx)(wn, { draft: t }),
          }),
        ],
      }),
    });
  }),
  Wn = n((e) => {
    let { draft: t } = e;
    Kn(t.GetFAQID());
    let n = qn(z.CLANSTEAMID, t.GetFAQID()),
      [r, i] = (0, V.useState)(-1),
      [a, o] = (0, V.useState)(!1);
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
    return (0, H.jsxs)(`tr`, {
      children: [
        (0, H.jsx)(`td`, { children: k(`#Language_` + w(t.language)) }),
        (0, H.jsx)(`td`, {
          children: (0, H.jsx)(en, {
            rtTimestamp: t.last_update_timestamp,
            bShowAsWarning: r,
          }),
        }),
        (0, H.jsx)(`td`, {
          children: (0, H.jsx)(en, {
            rtTimestamp: t.last_publish_timestamp,
            bShowAsWarning: i,
          }),
        }),
      ],
    });
  });
function Kn(e) {
  let t = Ne();
  return i({
    mutationKey: [`fetch_faq_translation`, e],
    mutationFn: async (n) => {
      let r = Ie.Init(Ze);
      return (
        r.Body().set_faq_id(e),
        r.Body().set_language(n),
        r.Body().set_steamid(z.CLANSTEAMID),
        (await We.FetchLocalizationFromCrowdIn(t, r)).GetEResult()
      );
    },
  });
}
function qn(e, t) {
  let n = Ne();
  return a({
    queryKey: [`get_faq_crowdin_metadata`, e, t],
    queryFn: async () => {
      let r = Ie.Init(Ue);
      return (
        r.Body().set_faq_id(t),
        r.Body().set_steamid(e),
        (await We.GetCrowdInMetadata(n, r)).Body().toObject()
      );
    },
  });
}
var Jn = n((e) => {
    let { draft: t } = e,
      n = t.BNeedsSaving();
    return (0, H.jsx)(`div`, {
      className: `btn_green_steamui btn_medium`,
      onClick: (t) => O((0, H.jsx)(Yn, { draft: e.draft }), D(t)),
      children: (0, H.jsxs)(`span`, {
        children: [
          !n &&
            (0, H.jsx)(`img`, {
              className: `FIGxwNiJB6c-`,
              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=`,
            }),
          k(n ? `#Button_Save` : `#Button_Saved`),
        ],
      }),
    });
  }),
  Yn = (e) => {
    let { draft: t, closeModal: n } = e,
      [r, i] = V.useState(!0),
      [a, o] = V.useState(void 0);
    V.useEffect(() => {
      (async () => {
        i(!0);
        try {
          let e = await t.SaveDrafts();
          o(e);
        } catch (e) {
          (o(2),
            console.log(
              `FAQSaveProgressDialog hit exception ` + x(e).strErrorMsg,
            ));
        } finally {
          i(!1);
        }
      })();
    }, [t]);
    let s = V.useId();
    return (0, H.jsxs)(C, {
      "aria-labelledby": s,
      bAllowFullSize: !0,
      onCancel: n,
      closeModal: n,
      children: [
        (0, H.jsx)(P, {
          id: s,
          children: r
            ? (0, H.jsx)(`div`, { children: k(`#FAQSave_Saving`) })
            : (0, H.jsxs)(`div`, {
                children: [
                  k(a == 1 ? `#FAQSave_SaveSuccess` : `#FAQSave_Error`),
                  ` `,
                ],
              }),
        }),
        (0, H.jsx)(T, {
          children: r
            ? (0, H.jsx)(m, { size: `medium`, position: `center` })
            : (0, H.jsx)(`div`, {
                children:
                  a == 1
                    ? (0, H.jsx)(`div`, {
                        children: k(`#FAQSave_SaveSuccess_desc`),
                      })
                    : (0, H.jsx)(`div`, {
                        children: k(
                          `#Error_Description`,
                          a,
                          k(`#Error_GenericFailureDescription`),
                        ),
                      }),
              }),
        }),
        (0, H.jsx)(A, {
          children:
            !r && (0, H.jsx)(Te, { onClick: n, children: k(`#Button_OK`) }),
        }),
      ],
    });
  },
  Xn = `mZQqPWZ36ck-`,
  Zn = `sZZCyY-6QMg-`,
  Qn = n((e) => {
    let { draft: t, bPreview: n } = e,
      r = t.BHasPublished();
    return (0, H.jsx)(j, {
      children: (0, H.jsxs)(`div`, {
        className: y({ [Qe]: !0, [rt]: !n && !r, [nt]: !n && r, [void 0]: n }),
        children: [
          (0, H.jsx)(W, {
            route: n ? U.k_eCommunityEdit : U.k_eCommunityDashboard,
            faqid: t.GetFAQID(),
            className: v,
            children: k(
              n ? `#FAQEditor_EditFAQ` : `#EventDisplay_EventsDashBtn`,
            ),
          }),
          (0, H.jsxs)(`div`, {
            children: [
              (0, H.jsx)(`div`, {
                className: Xn,
                children: k(
                  n
                    ? `#FAQEditor_InternalName_Preview`
                    : `#FAQEditor_InternalName`,
                ),
              }),
              (0, H.jsxs)(`div`, {
                className: Zn,
                children: [
                  t.GetFAQInternalName(),
                  (0, H.jsx)(`img`, {
                    src: $e,
                    onClick: (e) => O((0, H.jsx)($n, { draft: t }), D(e)),
                  }),
                ],
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Pe,
            children: [
              (0, H.jsx)(ie, {
                selectedLang: g.Get().GetCurEditLanguage(),
                fnOnLanguageChanged: g.Get().SetCurEditLanguage,
                fnLangHasData: t.BHasSomeTextForLanguage,
                fnIsLangSupported: (e) => !0,
                fnLastUpdateRTime: t.GetLastTimeLanguageUpdated,
                realms: [b.k_ESteamRealmGlobal, b.k_ESteamRealmChina],
              }),
              !n &&
                (0, H.jsx)(W, {
                  route: U.k_eCommunityPreview,
                  faqid: t.GetFAQID(),
                  className: `ugkEbNZ8MZc-`,
                  children: k(`#Button_Preview`),
                }),
            ],
          }),
        ],
      }),
    });
  }),
  $n = (e) => {
    let { closeModal: t, draft: n } = e,
      [r, i] = V.useState(n.GetFAQInternalName() || ``),
      [a, o] = V.useState(!1),
      [s, c] = V.useState(1),
      [l, u] = V.useState(!1);
    return (0, H.jsxs)(C, {
      title: k(`#FAQEditor_ChangeInternalName`),
      bAllowFullSize: !0,
      onCancel: t,
      closeModal: t,
      children: [
        (0, H.jsxs)(T, {
          children: [
            (0, H.jsx)(`div`, {
              children: k(`#FAQEditor_ChangeInternalName_desc`),
            }),
            (0, H.jsx)(`input`, {
              type: `text`,
              value: r,
              placeholder: k(`#FAQEditor_ChangeInternalName`),
              onFocus: (e) => e.target.select(),
              onChange: (e) => i(e.currentTarget.value),
              maxLength: 240,
              disabled: a,
            }),
            !(!a || l) &&
              (0, H.jsx)(m, {
                string: k(`#Updating`),
                position: `center`,
                size: `medium`,
              }),
            l &&
              (0, H.jsx)(`span`, {
                children:
                  s == 1
                    ? k(`#EventDisplay_Share_Success`)
                    : k(
                        `#Error_Description`,
                        s,
                        k(`#Error_GenericFailureDescription`),
                      ),
              }),
          ],
        }),
        (0, H.jsx)(A, {
          children: (0, H.jsx)(M, {
            bOKDisabled: r.trim().length == 0 || a,
            onCancel: t,
            strCancelText: k(l ? `#Button_Close` : `#Button_Cancel`),
            onOK: async () => {
              (o(!0),
                B.Get()
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
      [i, a] = Ye(r),
      o = a && i.per_language_info.find((e) => e.language == n),
      s =
        a &&
        ((E.EREALM == b.k_ESteamRealmGlobal && i.visible_in_global_realm) ||
          (E.EREALM == b.k_ESteamRealmChina && i.visible_in_china_realm)) &&
        !!o?.last_publish_timestamp;
    return (0, H.jsx)(j, {
      children: (0, H.jsx)(`div`, {
        className: y(_e),
        children: (0, H.jsxs)(`div`, {
          className: ke,
          style: { width: `unset`, justifyContent: `center` },
          children: [
            (0, H.jsx)(Jn, { draft: t }),
            !!s &&
              (0, H.jsx)(`div`, {
                className: `ugkEbNZ8MZc-`,
                children: (0, H.jsx)(`a`, {
                  href: E.HELP_BASE_URL + `faqs/view/` + i.url_code,
                  children: k(`#FAQEditir_ViewLiveFAQ`),
                }),
              }),
          ],
        }),
      }),
    });
  }),
  tr = n((e) => {
    let { faqid: t } = e,
      [n, r] = Ve(t),
      i = V.useRef(void 0);
    if (!r)
      return (0, H.jsx)(m, {
        position: `center`,
        size: `xlarge`,
        string: k(`#Loading`),
      });
    if (!n) return (0, H.jsx)(ar, { strError: k(`#FAQEditor_NoFAQFound`) });
    let a = g.Get().GetCurEditLanguage();
    return (0, H.jsxs)(`div`, {
      children: [
        (0, H.jsx)(Qn, { draft: n }),
        (0, H.jsxs)(`div`, {
          className: cn,
          children: [
            (0, H.jsx)(`div`, {
              className: ln,
              children: (0, H.jsx)(Un, { draft: n, eLanguage: a }),
            }),
            (0, H.jsx)(`div`, {
              className: un,
              children: (0, H.jsx)(`div`, {
                className: dn,
                children: (0, H.jsxs)(`div`, {
                  className: y(Re, fn),
                  children: [
                    (0, H.jsxs)(`div`, {
                      className: y(De, pn),
                      children: [
                        (0, H.jsx)(rr, { draft: n, eLanguage: a }),
                        (0, H.jsx)(ir, {
                          bbcodeEditorRef: i,
                          draft: n,
                          eLanguage: a,
                        }),
                      ],
                    }),
                    (0, H.jsx)(nr, {
                      draft: n,
                      bbcodeEditorRef: i,
                      className: y(ue, mn),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        (0, H.jsx)(er, { draft: n, eLanguage: a }),
      ],
    });
  }),
  nr = (e) => {
    let t = (0, V.useMemo)(() => new je(z.CLANSTEAMID), []);
    if (!z.CAN_UPLOAD_IMAGES) return null;
    let { draft: n, bbcodeEditorRef: r } = e;
    return (0, H.jsx)(j, {
      children: (0, H.jsxs)(`div`, {
        className: e.className,
        children: [
          (0, H.jsx)(`div`, { children: k(`#FAQEditor_ImageTitle`) }),
          (0, H.jsx)(le, {
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
    return (0, H.jsxs)(`div`, {
      className: gn,
      children: [
        (0, H.jsx)(`div`, {
          className: hn,
          children: k(`#FAQEditor_TitleLabel`),
        }),
        (0, H.jsx)(`input`, {
          type: `text`,
          className: _n,
          value: t.GetDraftTitle(n) || ``,
          placeholder: k(`#FAQEditor_TitlePlaceHolder`),
          onFocus: (e) => e.target.select(),
          onChange: (e) => t.SetDraftTitle(n, e.currentTarget.value),
          maxLength: 120,
        }),
      ],
    });
  }),
  ir = n((e) => {
    let { draft: t, eLanguage: n, bbcodeEditorRef: r } = e;
    return (0, H.jsxs)(`div`, {
      className: yn,
      children: [
        (0, H.jsx)(`div`, {
          className: hn,
          children: k(`#FAQEditor_ContentLabel`),
        }),
        (0, H.jsx)(re, {
          ref: r,
          fnGetCurText: () => t.GetDraftContent(n) || ``,
          fnOnTextChange: (e) => t.SetDraftContent(n, e.currentTarget.value),
          fnSetText: (e) => t.SetDraftContent(n, e),
          strPlaceholder: k(`#FAQEditor_ContentPlaceHolder`),
          bSupportHTMLImport: !0,
          showFormatHelp: `PartnerEvents`,
          className: vn,
          classNameForTextArea: bn,
        }),
      ],
    });
  }),
  ar = (e) =>
    (0, H.jsxs)(`div`, {
      className: xn,
      children: [
        (0, H.jsx)(`div`, { className: Sn, children: e.strError }),
        (0, H.jsx)(W, {
          route: U.k_eCommunityDashboard,
          className: Cn,
          children: k(`#FAQEditor_GoToDashboard`),
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
      s = pe();
    return (
      V.useEffect(() => {
        let e = s?.hash?.substr(+(s?.hash?.substr(0, 1) === `#`));
        e &&
          document
            .getElementById(e)
            ?.scrollIntoView({ block: `start`, behavior: `smooth` });
      }, [s]),
      (0, H.jsxs)(`div`, {
        className: y(or, E.LANGUAGE),
        children: [
          (0, H.jsx)(`a`, {
            className: sr,
            href: `${E.HELP_BASE_URL}`,
            children: k(`#FAQViewer_SteamSupport`),
          }),
          (0, H.jsxs)(`div`, {
            className: cr,
            children: [
              (0, H.jsxs)(`div`, {
                className: y(lr),
                children: [
                  (0, H.jsx)(`div`, { className: ur }),
                  (0, H.jsxs)(`div`, {
                    className: pr,
                    children: [
                      (0, H.jsx)(`div`, {
                        className: mr,
                        role: `heading`,
                        "aria-level": 1,
                        children: t,
                      }),
                      (0, H.jsx)(`div`, {
                        className: hr,
                        children: (0, H.jsx)(Xe, {
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
              (0, H.jsx)(`div`, {
                className: dr,
                children: (0, H.jsx)(`div`, { className: fr, children: i }),
              }),
            ],
          }),
        ],
      })
    );
  },
  Q = (e) => (0, H.jsx)(`div`, { className: or, children: e.children }),
  _r = `wT3kSyT1vtw-`,
  vr = `fhSy32c8EWo-`,
  yr = `zktSK2ybNbU-`,
  br = `VTYYqUrNc1w-`,
  xr = `nC9n0kLtumQ-`,
  Sr = `tJUYbVsoqiw-`,
  Cr = (e) => {
    let { faqContent: t } = e,
      [n, r] = He(t.faq_id, t.version, t.language);
    return B.Get().BHasFAQEdit()
      ? (0, H.jsxs)(`div`, {
          className: y(vr, be),
          children: [
            (0, H.jsx)(`div`, {
              className: xr,
              children: k(`#FAQViewer_AdminLinks`),
            }),
            (0, H.jsx)(`div`, {
              className: _r,
              children: we(
                `#FAQViewer_Admin_LastUpdate`,
                n?.author_account_id
                  ? (0, H.jsx)(ce, {
                      accountID: Number.parseInt(n.author_account_id),
                    })
                  : k(`#FAQViewer_UnknownUser`),
                (0, H.jsx)(`span`, {
                  children:
                    Oe(t.timestamp) +
                    `@` +
                    Le(t.timestamp, { bForce24HourClock: !1 }),
                }),
              ),
            }),
            (0, H.jsx)(wr, { faqContent: t }),
            (0, H.jsx)(W, {
              faqid: t.faq_id,
              route: U.k_eCommunityEdit,
              bForceAnchor: !0,
              children: k(`#FAQViewer_GotoEditor`),
            }),
          ],
        })
      : null;
  },
  wr = (e) => {
    let { faqContent: t } = e,
      [n, r] = Ve(t.faq_id);
    if (!n || !r || n.GetLastTimeLanguageUpdated(t.language) <= t.timestamp)
      return null;
    let i = n.GetLastSavedDraftVersion(t.language);
    return (0, H.jsx)(`div`, {
      className: _r,
      children: we(
        `#FAQViewer_DraftNewer`,
        (0, H.jsx)(ce, { accountID: Number.parseInt(i.author_account_id) }),
        (0, H.jsx)(`span`, {
          children:
            Oe(i.timestamp) + `@` + Le(i.timestamp, { bForce24HourClock: !1 }),
        }),
      ),
    });
  },
  Tr = (e) =>
    (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsxs)(`div`, {
          className: y(vr, yr),
          children: [
            (0, H.jsx)(`div`, {
              className: br,
              children: (0, H.jsx)(ge, { role: `presentation` }),
            }),
            (0, H.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, H.jsx)(`div`, {
                  className: xr,
                  children: k(`#FAQViewer_SideBar_ProblemWithSteam_Title`),
                }),
                (0, H.jsx)(`div`, {
                  children: k(`#FAQViewer_SideBar_ProblemWithSteam_Desc`),
                }),
                (0, H.jsx)(`div`, {
                  className: Sr,
                  children: (0, H.jsx)(`a`, {
                    href: E.HELP_BASE_URL,
                    className: v,
                    children: k(`#FAQViewer_SideBar_ProblemWithSteam_Link`),
                  }),
                }),
              ],
            }),
          ],
        }),
        !me() &&
          (0, H.jsxs)(`div`, {
            className: y(`fhSy32c8EWo-`, `dSiEYPQQjIk-`),
            children: [
              (0, H.jsx)(`div`, {
                className: `VTYYqUrNc1w-`,
                children: (0, H.jsx)(Be, { role: `presentation` }),
              }),
              (0, H.jsxs)(`div`, {
                className: void 0,
                children: [
                  (0, H.jsx)(`div`, {
                    className: `nC9n0kLtumQ-`,
                    children: k(`#FAQViewer_SideBar_CommunityHelp_Title`),
                  }),
                  (0, H.jsx)(`div`, {
                    children: k(`#FAQViewer_SideBar_CommunityHelp_Desc`),
                  }),
                  (0, H.jsx)(`div`, {
                    className: `tJUYbVsoqiw-`,
                    children: (0, H.jsx)(`a`, {
                      href: E.COMMUNITY_BASE_URL + `discussions`,
                      className: `ugkEbNZ8MZc-`,
                      children: k(`#FAQViewer_SideBar_CommunityHelp_Link`),
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
      [n, r] = Ke(t, Me(E.LANGUAGE));
    return r
      ? n
        ? (0, H.jsx)(gr, {
            title: n.title,
            content: n.content,
            version: n.version,
            elSideBars: [
              (0, H.jsx)(Tr, { faqContent: n }, `sidebar`),
              (0, H.jsx)(Cr, { faqContent: n }, `adminbar`),
            ],
          })
        : (0, H.jsx)(Q, {
            children: (0, H.jsx)(Ar, { strError: k(`#FAQViewer_NoFAQFound`) }),
          })
      : (0, H.jsx)(Q, {
          children: (0, H.jsx)(m, {
            position: `center`,
            size: `xlarge`,
            string: k(`#Loading`),
          }),
        });
  },
  Ar = (e) => {
    let t =
      E.COMMUNITY_BASE_URL +
      (z.APPID ? `app/` + (z.VANITY_ID ?? z.APPID) : `gid/` + z.CLANSTEAMID);
    return (0, H.jsxs)(`div`, {
      className: Er,
      children: [
        (0, H.jsx)(`div`, { className: Dr, children: e.strError }),
        (0, H.jsx)(`a`, {
          className: Or,
          href: t,
          children: k(`#FAQViewer_GoToHomepage`),
        }),
      ],
    });
  },
  jr = n((e) => {
    let { faqid: t } = e,
      [n, r] = Ve(t),
      i = g.Get().GetCurEditLanguage();
    return r
      ? n
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(Qn, { draft: n, bPreview: !0 }),
              (0, H.jsx)(gr, {
                title: n.GetDraftTitleWithFallback(i, E.EREALM),
                content: n.GetDraftContentWithFallback(i, E.EREALM),
                version: `` + n.GetLastTimeLanguageUpdated(i),
                language: i,
              }),
              (0, H.jsx)(er, { draft: n, eLanguage: i }),
            ],
          })
        : (0, H.jsx)(Q, {
            children: (0, H.jsx)(Ar, { strError: k(`#FAQViewer_NoFAQFound`) }),
          })
      : (0, H.jsx)(Q, {
          children: (0, H.jsx)(m, {
            position: `center`,
            size: `xlarge`,
            string: k(`#Loading`),
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
    (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(sn, {}),
        (0, H.jsxs)(o, {
          children: [
            (0, H.jsx)(u, {
              path: $.ViewFAQ(`:vanity_str`, `:faqid`),
              render: (e) =>
                (0, H.jsx)(L, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: t } = e.match.params,
                        n = Ge(t);
                      return (0, H.jsx)(kr, { faqid: n });
                    },
                  },
                }),
            }),
            (0, H.jsx)(u, {
              path: $.EditFAQ(`:vanity_str`, `:faqid`),
              render: (e) =>
                (0, H.jsx)(L, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: t } = e.match.params;
                      if (t) {
                        let e = Ge(t);
                        return e
                          ? (0, H.jsx)(tr, { faqid: e })
                          : (0, H.jsx)(c, {
                              push: !0,
                              to: at(U.k_eCommunityDashboard),
                            });
                      }
                      return (0, H.jsx)(tn, {});
                    },
                  },
                }),
            }),
            (0, H.jsx)(u, {
              path: $.DashboardFAQ(`:vanity_str`),
              render: (e) =>
                (0, H.jsx)(L, {
                  config: { "faqs-root": () => (0, H.jsx)(tn, {}) },
                }),
            }),
            (0, H.jsx)(u, {
              path: $.PreviewFAQ(`:vanity_str`, `:faqid`),
              render: (e) =>
                (0, H.jsx)(L, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: t } = e.match.params,
                        n = Ge(t);
                      return (0, H.jsx)(jr, { faqid: n });
                    },
                  },
                }),
            }),
            (0, H.jsx)(u, { component: fe }),
          ],
        }),
      ],
    }),
  );
export { $ as FAQRoutes, Mr as default };

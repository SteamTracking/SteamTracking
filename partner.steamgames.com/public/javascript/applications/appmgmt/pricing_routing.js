/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { A as e, _t as t, kt as n, nt as r, on as i } from "./mobx.esm.js";
import { It as a, R as o, r as s, ut as c } from "./src.js";
import {
  At as l,
  Ht as u,
  Vt as d,
  d as f,
  nn as p,
  oa as m,
  p as h,
  pn as g,
  s as _,
  xn as v,
} from "./dialogs.js";
import { a as y, r as b } from "./react-router.js";
import { r as ee } from "./pricingguidelineobject.js";
import { i as te, r as ne, t as re } from "./react-router-dom.js";
import {
  D as x,
  E as S,
  G as C,
  I as w,
  J as ie,
  L as ae,
  M as oe,
  O as T,
  W as se,
  X as ce,
  Y as E,
  Z as le,
  b as ue,
  d as de,
  i as D,
  l as fe,
  r as O,
  u as k,
  x as A,
} from "./tabulatorutils.js";
import { r as j } from "./modals.js";
import { a as M } from "./historyutils.js";
import { t as N } from "./throbber.js";
import { a as P } from "./eventdevfeaturestore.js";
import { n as F } from "./playerstore.js";
import { c as I, r as L, s as R, u as z } from "./pricinggridcell.js";
import { t as B } from "./configdatadiag.js";
import { t as V } from "./unknownroute.js";
import { t as H } from "./importexport.js";
import { t as pe } from "./storebrowsesetup.js";
import "./shared_common.module.js";
import { n as me, t as he } from "./fancytable.js";
import {
  a as ge,
  d as _e,
  f as ve,
  l as ye,
  o as be,
  r as xe,
  s as Se,
  u as Ce,
} from "./profilestore.js";
import "./discountgridheaders.module.js";
import {
  f as we,
  g as Te,
  h as Ee,
  i as De,
  m as Oe,
  n as ke,
  p as Ae,
  r as je,
  t as Me,
  v as Ne,
  y as Pe,
} from "./saveprices.js";
var U = i(n()),
  Fe = `hrnRrC5Io1s-`,
  Ie = `m86wnh9zYfA-`,
  Le = `_4xJbb24CPFM-`,
  Re = `yIYS3vRaaok-`,
  W = `YqydI8xRHW0-`,
  ze = `_55j0rY7uj0Y-`,
  Be = `xT2DQRb-5Pk-`,
  Ve = `WRUj-LrOB9Q-`,
  He = `M9BYw5UX3Q0-`,
  Ue = `tUdsbh1Y4uw-`,
  We = i(a()),
  G = t();
function Ge(t) {
  let {
      bCompactMode: n,
      setCompactMode: r,
      rgGridData: i,
      strPackageFilter: a,
      setPackageFilter: s,
      bFilterToBelowMinPrice: c,
      setFilterToBelowMinPrice: d,
    } = t,
    f = (0, U.useMemo)(() => i.filter((e) => D(e.packageID)).length, [i]),
    h = U.useCallback(
      (e) => {
        s(e.data);
      },
      [s],
    ),
    g = U.useMemo(
      () => [
        {
          label: m(`#PricingDashboard_ShowOnlyReleasedPackages`),
          data: `released`,
        },
        { label: m(`#PricingDashboard_ShowAllPackages`), data: `all` },
        {
          label: m(`#PricingDashboard_ShowOnlyUnreleasedPackages`),
          data: `unreleased`,
        },
        {
          label: m(`#PricingDashboard_ShowOnlyChangedPackages`),
          data: `changed`,
        },
        {
          label: m(`#PricingDashboard_ShowSubmittedChanges`),
          data: `proposed`,
        },
      ],
      [],
    ),
    [_, v, y] = o();
  return (0, G.jsxs)(`div`, {
    className: Re,
    children: [
      (0, G.jsx)(l, {
        rgOptions: g,
        selectedOption: a,
        strDropDownClassName: void 0,
        onChange: h,
        contextMenuPositionOptions: { bMatchWidth: !1 },
      }),
      !!(f || c) &&
        (0, G.jsx)(`div`, {
          className: e(`YqydI8xRHW0-`, `qcPQ4JjPk1w-`),
          children: (0, G.jsx)(u, {
            checked: c,
            onChange: d,
            label: m(`#PricingDashboard_FilterToLowPrice`, f),
          }),
        }),
      (0, G.jsx)(`div`, {
        className: e(W, void 0),
        children: (0, G.jsx)(u, {
          checked: n,
          onChange: r,
          label: m(`#PricingDashboard_ShowCompactModeCheckBoxLabel`),
        }),
      }),
      (0, G.jsx)(`div`, { className: e(W), children: (0, G.jsx)(Pe, {}) }),
      (0, G.jsxs)(`div`, {
        className: e(W),
        children: [
          (0, G.jsx)(p, {
            onClick: v,
            children: m(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
          }),
          (0, G.jsx)(j, {
            active: _,
            children: (0, G.jsx)(Ae, { closeModal: y }),
          }),
        ],
      }),
    ],
  });
}
function Ke(e) {
  return e.contains_game && e.contains_dlc
    ? `BOTH`
    : e.contains_game
      ? `GAME`
      : e.contains_dlc
        ? `DLC`
        : null;
}
function qe(e, t, n) {
  let { rgSupportedPriceKeys: r } = x();
  return U.useMemo(() => {
    let i = [];
    for (let a of e) {
      let e = /^-?[0-9]+$/.test(n.strSearchStringFromURL)
        ? parseInt(n.strSearchStringFromURL)
        : 0;
      if (a.packageid !== e) {
        if (t == `changed`) {
          if (!O(a.packageid)) continue;
        } else if (t == `proposed`) {
          if (!fe(a.packageid)) continue;
        } else if (t == `released`) {
          if (!a.released) continue;
        } else if (t == `unreleased` && a.released) continue;
        if (n?.bFilterToOnlyBelowMinimumPrice && !D(a.packageid)) continue;
      }
      let o = a.grouped_app_name;
      o ||=
        a.appids.length > 1
          ? m(`#PackageGrid_MultipleBaseGamesFoundForPackage`)
          : m(`#PackageGrid_NoBaseGameFoundForPackage`);
      let s = {
        appids: a.appids.sort(),
        appName: o,
        packageID: a.packageid,
        packageName: a.package_name || ``,
        packageType: Ke(a),
        released: a.released,
      };
      for (let e of r) s[e] = e;
      i.push(s);
    }
    return i;
  }, [n, e, r, t]);
}
function Je(e) {
  let { column: t } = e,
    n = t.id,
    r = k(n),
    i = ae(n);
  return (0, G.jsxs)(`div`, {
    className: ze,
    children: [
      (0, G.jsx)(g, {
        toolTipContent: r,
        direction: `top`,
        className: void 0,
        strTooltipClassname: Ue,
        children: (0, G.jsxs)(`div`, {
          className: Be,
          children: [n, (0, G.jsx)(`span`, { className: Ve, children: r })],
        }),
      }),
      i > 0 &&
        (0, G.jsx)(we, {
          hoverKey: n,
          className: `UIjCqml5QI8-`,
          renderHover: () => (0, G.jsx)(et, { priceKey: n }),
        }),
    ],
  });
}
function Ye(e) {
  let { row: t } = e;
  return (0, G.jsx)(De, { packageID: t.original.packageID, bShowCancel: !0 });
}
function Xe() {
  return U.useMemo(
    () =>
      me().accessor(`proposalState`, {
        header: m(`#PricingDashboard_Column_PriceProposalState`),
        enableSorting: !1,
        cell: Ye,
        size: 200,
        meta: {
          strHeaderTooltip: m(
            `#PricingDashboard_Column_PriceProposalState_ttip`,
          ),
        },
      }),
    [],
  );
}
function Ze(e) {
  let t = be(),
    n = ye(),
    r = _e(),
    i = Se(),
    a = Ce(!1),
    o = Xe(),
    { rgSupportedPriceKeys: s } = x();
  return U.useMemo(() => {
    let c = [t, n, r, i, a, o];
    for (let t of s)
      c.push({
        accessorKey: t,
        size: e ? 72 : 200,
        enableSorting: !1,
        header: Je,
        cell: L,
      });
    return c;
  }, [t, n, r, i, a, o, s, e]);
}
function Qe(t) {
  let n = ue()?.length ?? 0;
  return (0, G.jsx)(`div`, {
    className: e(Fe, n > 0 && `PendingVisible`),
    children: (0, G.jsx)($e, { ...t }),
  });
}
var $e = U.memo(function (t) {
  let { packageData: n } = t,
    [r, i] = U.useState(!1),
    a = U.useRef(null),
    [o, c] = M(`filter`, `released`),
    [l, u] = M(`filter_below_min_price`, !1),
    d = new URLSearchParams(window.location.search),
    f = d.has(`pn`) ? decodeURIComponent(d.get(`pn`)) : ``,
    p = Ze(r),
    m = qe(n, o, {
      bFilterToOnlyBelowMinimumPrice: l,
      strSearchStringFromURL: f,
    }),
    h = ie(),
    g = () => h(a.current),
    _ = T(),
    v = je();
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(Ge, {
        bCompactMode: r,
        setCompactMode: i,
        rgGridData: m,
        strPackageFilter: o,
        setPackageFilter: c,
        bFilterToBelowMinPrice: l,
        setFilterToBelowMinPrice: u,
      }),
      (0, G.jsx)(`div`, {
        className: Ie,
        children: (0, G.jsx)(`div`, {
          className: e(Le, r && `CompactMode`),
          children: (0, G.jsxs)(s, {
            children: [
              (0, G.jsx)(ge, {
                fnBLocalChangesExist: _,
                fnWarnUser: v,
                children: (0, G.jsx)(he, {
                  ref: a,
                  className: (0, We.default)(He, `noGlobalButtonStyle`),
                  columns: p,
                  data: m,
                  getRowKey: (e, t) => t.packageID,
                  stickyHeader: !0,
                  nItemHeight: 43,
                  nHeaderHeight: 63,
                  overscan: 12,
                  initialExpanded: !0,
                  initialSorting: [{ id: `appName`, desc: !1 }],
                  initialColumnFilters: [{ id: `packageName`, value: f }],
                  initialGrouping: [`appName`],
                  initialColumnVisibility: { packageType: !1, appids: !1 },
                  initialColumnPinning: {
                    left: [
                      `packageID`,
                      `appName`,
                      `packageName`,
                      `proposalState`,
                      `USD`,
                    ],
                  },
                  onGroupingChange: g,
                  onVisibleRowsChange: g,
                  renderGroup: xe,
                }),
              }),
              (0, G.jsx)(`br`, {}),
            ],
          }),
        }),
      }),
    ],
  });
});
function et(e) {
  let { priceKey: t } = e,
    n = k(t),
    r = S(t);
  return (0, G.jsx)(`div`, {
    className: z,
    children: (0, G.jsx)(`div`, {
      className: I,
      children: (0, G.jsx)(`div`, {
        className: R,
        onClick: r,
        children: m(`#PricingDashboard_RevertAllCurrency`, n),
      }),
    }),
  });
}
var tt = i(P()),
  K = `dZod83AKMN0-`,
  q = `H9T48P6wKiw-`,
  J = `PlbQyglM-gI-`,
  Y = `hSs7ciUx0Yo-`,
  X = `_7i1pyd8PokY-`,
  Z = `xS20dcdZdD4-`,
  nt = `FBAkFNEPFYA-`;
function rt(e) {
  let { closeModal: t } = e,
    n = ce(),
    i = (0, tt.default)().format(`YYYY-MM-DDTHH-mm-ss`),
    a = E(),
    o = le(),
    s = `prices_all_${n}_${i}.csv`,
    c = `prices_${n}_${i}.csv`,
    l = o.length == 0;
  return (0, G.jsxs)(_, {
    bAllowFullSize: !1,
    closeModal: t,
    bAlertDialog: !0,
    strTitle: m(`#PricingDashboard_ImportExportHeader`),
    children: [
      m(`#PricingDashboard_ImportExport_GeneralInstructions`),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`a`, {
        href: r.PARTNER_BASE_URL + `doc/store/pricing/csv`,
        target: `_blank`,
        children: m(`#PricingDashboard_ImportExport_DocLink`),
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`h3`, { children: m(`#PricingDashboard_SubtitleExport`) }),
      (0, G.jsx)(`div`, {
        className: K,
        children: m(`#PricingDashboard_ImportExport_DownloadInstructions`),
      }),
      (0, G.jsxs)(`div`, {
        className: q,
        children: [
          o.length != a.length &&
            (0, G.jsxs)(`div`, {
              className: `_7i1pyd8PokY-`,
              children: [
                (0, G.jsx)(`span`, {
                  className: `xS20dcdZdD4-`,
                  children: m(
                    `#PricingDashboard_ImportExport_DownloadVisible_Desc`,
                  ),
                }),
                (0, G.jsxs)(d, {
                  className: `PlbQyglM-gI-`,
                  disabled: l,
                  onClick: () => Q(o, c),
                  children: [
                    m(`#PricingDashboard_ImportExport_DownloadVisible_Button`),
                    (0, G.jsx)(`span`, {
                      children: m(`#PricingDashboard_PackageCount`, o.length),
                    }),
                  ],
                }),
              ],
            }),
          (0, G.jsxs)(`div`, {
            className: X,
            children: [
              (0, G.jsx)(`span`, {
                className: Z,
                children: m(`#PricingDashboard_ImportExport_DownloadAll_Desc`),
              }),
              (0, G.jsxs)(d, {
                className: J,
                disabled: l,
                onClick: () => Q(a, s),
                children: [
                  m(`#PricingDashboard_ImportExport_DownloadAll_Button`),
                  (0, G.jsx)(`span`, {
                    children: m(`#PricingDashboard_PackageCount`, a.length),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`h3`, { children: m(`#PricingDashboard_SubtitleImport`) }),
      (0, G.jsx)(`div`, {
        className: K,
        children: m(`#PricingDashboard_ImportExport_UploadInstructions`),
      }),
      (0, G.jsx)(`div`, {
        className: q,
        children: (0, G.jsxs)(`div`, {
          className: X,
          children: [
            (0, G.jsx)(`span`, {
              className: Z,
              children: m(`#PricingDashboard_ImportExport_Upload_Desc`),
            }),
            (0, G.jsx)(d, {
              className: J,
              disabled: l,
              children: (0, G.jsxs)(`label`, {
                className: Y,
                htmlFor: `import-price-input`,
                children: [
                  m(`#PricingDashboard_ImportExport_Upload_Button`),
                  (0, G.jsx)(`input`, {
                    id: `import-price-input`,
                    type: `file`,
                    style: { display: `none` },
                    onChange: (e) => it(e, t),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Q(e, t) {
  let n = [],
    r = w(),
    i = [m(`#PackageGrid_Column_PackageName`), `ID`];
  for (let e of r) i.push(e);
  n.push(i);
  for (let t of e) {
    let e = [C(t), t.toString()];
    for (let n of r) {
      let r = de(t, n),
        i = r ? (r / 100).toString() : ``;
      e.push(i);
    }
    n.push(e);
  }
  H.WriteCSVToFile(n, t);
}
async function it(e, t) {
  if (e.target.files.length >= 1) {
    let n = c(e),
      r = e.target.files[0],
      i = await H.ParseCSVFile(r);
    (f((0, G.jsx)(st, { strFilename: r.name, parseResult: i }), n), t());
  }
}
function at(e, t) {
  let n = Number(e);
  return Number.isNaN(n) ? null : Math.round(n * 100);
}
function ot(e, t, n, r) {
  let i = [],
    a = new Set(t),
    o = [];
  for (let t of e.data ?? []) {
    let e = Number(t.ID);
    if (a.has(e)) {
      i.push(e);
      for (let i of n) {
        let n = t[i],
          a = !!n?.length && at(n, i);
        if (!n?.length || Number.isNaN(a)) continue;
        let s = r(e, i, a);
        s && o.push(s);
      }
    }
  }
  return { rgPriceChanges: o, nPackagesImported: i.length };
}
function st(e) {
  let { closeModal: t, strFilename: n, parseResult: r } = e,
    i = E(),
    a = w(),
    o = oe(),
    [s, c] = U.useState(null),
    [l, u] = U.useState();
  if (
    (U.useEffect(() => {
      let { rgPriceChanges: e, nPackagesImported: t } = ot(r, i, a, o);
      (c(e), u(t));
    }, [r, i, a, o]),
    s === null)
  )
    return (0, G.jsx)(N, { position: `center` });
  let d = s.length > 0,
    f = m(d ? `#PackageGrid_SaveChangesDialogButton` : `#Button_Close`);
  return (0, G.jsxs)(_, {
    strTitle: m(`#PricingDashboard_ImportExport_UploadProgressTitle`),
    strDescription: m(
      `#PricingDashboard_ImportExport_UploadProgressDetails`,
      l,
    ),
    bAlertDialog: !d,
    strOKButtonText: f,
    onOK: () => {
      d && h((0, G.jsx)(Me, {}), window);
    },
    strCancelButtonText: m(`#Button_OK`),
    closeModal: t,
    children: [
      (0, G.jsx)(`div`, {
        className: nt,
        children: m(`#PricingDashboard_ImportExport_UploadResults`, s.length),
      }),
      d && m(`#PricingDashboard_ImportExport_UploadNextStepInstructions`),
      !!r.errors?.length &&
        (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(`div`, {
              className: `pT-mBtArqF0-`,
              children: m(
                `#PricingDashboard_ImportExport_UploadErrorsHeader`,
                r.errors?.length,
              ),
            }),
            (0, G.jsx)(`div`, {
              className: `U9w68ZKRVu4-`,
              children: r.errors.map((e, t) =>
                (0, G.jsx)(
                  `div`,
                  {
                    className: void 0,
                    children: `${e.row ?? `-`} ${e.message}`,
                  },
                  `${e.message}-${t}`,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function ct(e) {
  ve(T());
  let t = se(),
    n = r.PARTNER_BASE_URL + `doc/store/pricing`,
    i = r.HELP_BASE_URL + `wizard/HelpWithPublishing?issueid=920`,
    a = A(),
    o = (0, U.useMemo)(
      () => Array.from(new Set(a.map((e) => e.submitterID))),
      [a],
    );
  return (
    F(o),
    (0, G.jsxs)(`div`, {
      className: Te,
      children: [
        (0, G.jsxs)(`div`, {
          className: Ee,
          children: [
            m(`#PricingDashboard_Title`),
            (0, G.jsx)(`div`, { className: Ne }),
            (0, G.jsxs)(`div`, {
              className: Oe,
              children: [
                (0, G.jsx)(d, {
                  onClick: (e) => h((0, G.jsx)(rt, {}), c(e)),
                  children: m(`#PricingDashboard_ImportExportButton`),
                }),
                (0, G.jsx)(d, {
                  onClick: (e) => v(e, n),
                  children: m(`#PricingDashboard_DocumentationButton`),
                }),
                (0, G.jsx)(d, {
                  onClick: (e) => v(e, i),
                  children: m(`#PricingDashboard_ContactUsButton`),
                }),
              ],
            }),
          ],
        }),
        t.length == 0 &&
          (0, G.jsx)(`div`, {
            className: `ChHauw6JZ6E-`,
            children: m(`#PricingDashboard_Error_NoPackages`),
          }),
        t.length > 0 &&
          (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(Qe, { packageData: t }),
              (0, G.jsx)(ke, { bReloadPageOnSave: !1 }),
            ],
          }),
      ],
    })
  );
}
var $ = { PricingDashboard: () => `/dashboard/:publisherid(\\d*)` };
function lt(e) {
  return (0, G.jsx)(pe, {
    children: (0, G.jsx)(ee, {
      children: (0, G.jsx)(re, {
        basename: ne() + `pricing/`,
        children: (0, G.jsxs)(y, {
          children: [
            (0, G.jsx)(b, {
              exact: !0,
              path: te.DiagData(),
              render: (e) =>
                (0, G.jsx)(B, { ...e, strConfigID: `application_config` }),
            }),
            (0, G.jsx)(b, {
              path: $.PricingDashboard(),
              render: (e) => (0, G.jsx)(ct, {}),
            }),
            (0, G.jsx)(b, { component: V }),
          ],
        }),
      }),
    }),
  });
}
export { $ as PricingRoutes, lt as default };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  j as t,
  rt as n,
  sn as r,
  vt as i,
} from "./chunk~de7f2df91c.js";
import { I as a, Pt as o, ct as s, r as c } from "./chunk~25a6634263.js";
import {
  Gt as l,
  Nt as u,
  Wt as d,
  an as f,
  gn as p,
  h as m,
  l as h,
  p as g,
  ua as _,
  wn as v,
} from "./chunk~1fa4b8f2ff.js";
import { a as y, r as b } from "./chunk~44f252525d.js";
import { r as ee } from "./chunk~fa5480ab25.js";
import { i as te, r as ne, t as re } from "./chunk~9fc22a4638.js";
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
} from "./chunk~360b8fa68b.js";
import { r as j } from "./chunk~8681f5c764.js";
import { r as M } from "./chunk~af36c62e9f.js";
import { t as N } from "./chunk~eefd71512b.js";
import { a as P } from "./chunk~0111fcd096.js";
import { n as F } from "./chunk~d382bdf2cf.js";
import { c as I, r as L, s as R, u as z } from "./chunk~55bac8fc8b.js";
import { t as B } from "./chunk~59af5622dd.js";
import { t as V } from "./chunk~58c6c52d52.js";
import { t as H } from "./chunk~f8f9713b0c.js";
import { t as pe } from "./chunk~9b35b2d482.js";
import "./chunk~166eab4331.js";
import { n as me, t as he } from "./chunk~8c0cff8a60.js";
import {
  a as ge,
  d as _e,
  f as ve,
  l as ye,
  o as be,
  r as xe,
  s as Se,
  u as Ce,
} from "./chunk~cb393b4e7b.js";
import "./chunk~e23b40d2bf.js";
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
} from "./chunk~91d759d956.js";
var U = r(e()),
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
  We = r(o()),
  G = i();
function Ge(e) {
  let {
      bCompactMode: n,
      setCompactMode: r,
      rgGridData: i,
      strPackageFilter: o,
      setPackageFilter: s,
      bFilterToBelowMinPrice: c,
      setFilterToBelowMinPrice: d,
    } = e,
    p = (0, U.useMemo)(() => i.filter((e) => D(e.packageID)).length, [i]),
    m = U.useCallback(
      (e) => {
        s(e.data);
      },
      [s],
    ),
    h = U.useMemo(
      () => [
        {
          label: _(`#PricingDashboard_ShowOnlyReleasedPackages`),
          data: `released`,
        },
        { label: _(`#PricingDashboard_ShowAllPackages`), data: `all` },
        {
          label: _(`#PricingDashboard_ShowOnlyUnreleasedPackages`),
          data: `unreleased`,
        },
        {
          label: _(`#PricingDashboard_ShowOnlyChangedPackages`),
          data: `changed`,
        },
        {
          label: _(`#PricingDashboard_ShowSubmittedChanges`),
          data: `proposed`,
        },
      ],
      [],
    ),
    [g, v, y] = a();
  return (0, G.jsxs)(`div`, {
    className: Re,
    children: [
      (0, G.jsx)(u, {
        rgOptions: h,
        selectedOption: o,
        strDropDownClassName: void 0,
        onChange: m,
        contextMenuPositionOptions: { bMatchWidth: !1 },
      }),
      !!(p || c) &&
        (0, G.jsx)(`div`, {
          className: t(`YqydI8xRHW0-`, `qcPQ4JjPk1w-`),
          children: (0, G.jsx)(l, {
            checked: c,
            onChange: d,
            label: _(`#PricingDashboard_FilterToLowPrice`, p),
          }),
        }),
      (0, G.jsx)(`div`, {
        className: t(W, void 0),
        children: (0, G.jsx)(l, {
          checked: n,
          onChange: r,
          label: _(`#PricingDashboard_ShowCompactModeCheckBoxLabel`),
        }),
      }),
      (0, G.jsx)(`div`, { className: t(W), children: (0, G.jsx)(Pe, {}) }),
      (0, G.jsxs)(`div`, {
        className: t(W),
        children: [
          (0, G.jsx)(f, {
            onClick: v,
            children: _(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
          }),
          (0, G.jsx)(j, {
            active: g,
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
          ? _(`#PackageGrid_MultipleBaseGamesFoundForPackage`)
          : _(`#PackageGrid_NoBaseGameFoundForPackage`);
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
      (0, G.jsx)(p, {
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
        header: _(`#PricingDashboard_Column_PriceProposalState`),
        enableSorting: !1,
        cell: Ye,
        size: 200,
        meta: {
          strHeaderTooltip: _(
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
function Qe(e) {
  let n = ue()?.length ?? 0;
  return (0, G.jsx)(`div`, {
    className: t(Fe, n > 0 && `PendingVisible`),
    children: (0, G.jsx)($e, { ...e }),
  });
}
var $e = U.memo(function (e) {
  let { packageData: n } = e,
    [r, i] = U.useState(!1),
    a = U.useRef(null),
    [o, s] = M(`filter`, `released`),
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
        setPackageFilter: s,
        bFilterToBelowMinPrice: l,
        setFilterToBelowMinPrice: u,
      }),
      (0, G.jsx)(`div`, {
        className: Ie,
        children: (0, G.jsx)(`div`, {
          className: t(Le, r && `CompactMode`),
          children: (0, G.jsxs)(c, {
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
        children: _(`#PricingDashboard_RevertAllCurrency`, n),
      }),
    }),
  });
}
var tt = r(P()),
  K = `dZod83AKMN0-`,
  q = `H9T48P6wKiw-`,
  J = `PlbQyglM-gI-`,
  Y = `hSs7ciUx0Yo-`,
  X = `_7i1pyd8PokY-`,
  Z = `xS20dcdZdD4-`,
  nt = `FBAkFNEPFYA-`;
function rt(e) {
  let { closeModal: t } = e,
    r = ce(),
    i = (0, tt.default)().format(`YYYY-MM-DDTHH-mm-ss`),
    a = E(),
    o = le(),
    s = `prices_all_${r}_${i}.csv`,
    c = `prices_${r}_${i}.csv`,
    l = o.length == 0;
  return (0, G.jsxs)(h, {
    bAllowFullSize: !1,
    closeModal: t,
    bAlertDialog: !0,
    strTitle: _(`#PricingDashboard_ImportExportHeader`),
    children: [
      _(`#PricingDashboard_ImportExport_GeneralInstructions`),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`a`, {
        href: n.PARTNER_BASE_URL + `doc/store/pricing/csv`,
        target: `_blank`,
        children: _(`#PricingDashboard_ImportExport_DocLink`),
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`h3`, { children: _(`#PricingDashboard_SubtitleExport`) }),
      (0, G.jsx)(`div`, {
        className: K,
        children: _(`#PricingDashboard_ImportExport_DownloadInstructions`),
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
                  children: _(
                    `#PricingDashboard_ImportExport_DownloadVisible_Desc`,
                  ),
                }),
                (0, G.jsxs)(d, {
                  className: `PlbQyglM-gI-`,
                  disabled: l,
                  onClick: () => Q(o, c),
                  children: [
                    _(`#PricingDashboard_ImportExport_DownloadVisible_Button`),
                    (0, G.jsx)(`span`, {
                      children: _(`#PricingDashboard_PackageCount`, o.length),
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
                children: _(`#PricingDashboard_ImportExport_DownloadAll_Desc`),
              }),
              (0, G.jsxs)(d, {
                className: J,
                disabled: l,
                onClick: () => Q(a, s),
                children: [
                  _(`#PricingDashboard_ImportExport_DownloadAll_Button`),
                  (0, G.jsx)(`span`, {
                    children: _(`#PricingDashboard_PackageCount`, a.length),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`h3`, { children: _(`#PricingDashboard_SubtitleImport`) }),
      (0, G.jsx)(`div`, {
        className: K,
        children: _(`#PricingDashboard_ImportExport_UploadInstructions`),
      }),
      (0, G.jsx)(`div`, {
        className: q,
        children: (0, G.jsxs)(`div`, {
          className: X,
          children: [
            (0, G.jsx)(`span`, {
              className: Z,
              children: _(`#PricingDashboard_ImportExport_Upload_Desc`),
            }),
            (0, G.jsx)(d, {
              className: J,
              disabled: l,
              children: (0, G.jsxs)(`label`, {
                className: Y,
                htmlFor: `import-price-input`,
                children: [
                  _(`#PricingDashboard_ImportExport_Upload_Button`),
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
    i = [_(`#PackageGrid_Column_PackageName`), `ID`];
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
    let n = s(e),
      r = e.target.files[0],
      i = await H.ParseCSVFile(r);
    (g((0, G.jsx)(st, { strFilename: r.name, parseResult: i }), n), t());
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
    f = _(d ? `#PackageGrid_SaveChangesDialogButton` : `#Button_Close`);
  return (0, G.jsxs)(h, {
    strTitle: _(`#PricingDashboard_ImportExport_UploadProgressTitle`),
    strDescription: _(
      `#PricingDashboard_ImportExport_UploadProgressDetails`,
      l,
    ),
    bAlertDialog: !d,
    strOKButtonText: f,
    onOK: () => {
      d && m((0, G.jsx)(Me, {}), window);
    },
    strCancelButtonText: _(`#Button_OK`),
    closeModal: t,
    children: [
      (0, G.jsx)(`div`, {
        className: nt,
        children: _(`#PricingDashboard_ImportExport_UploadResults`, s.length),
      }),
      d && _(`#PricingDashboard_ImportExport_UploadNextStepInstructions`),
      !!r.errors?.length &&
        (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(`div`, {
              className: `pT-mBtArqF0-`,
              children: _(
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
    r = n.PARTNER_BASE_URL + `doc/store/pricing`,
    i = n.HELP_BASE_URL + `wizard/HelpWithPublishing?issueid=920`,
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
            _(`#PricingDashboard_Title`),
            (0, G.jsx)(`div`, { className: Ne }),
            (0, G.jsxs)(`div`, {
              className: Oe,
              children: [
                (0, G.jsx)(d, {
                  onClick: (e) => m((0, G.jsx)(rt, {}), s(e)),
                  children: _(`#PricingDashboard_ImportExportButton`),
                }),
                (0, G.jsx)(d, {
                  onClick: (e) => v(e, r),
                  children: _(`#PricingDashboard_DocumentationButton`),
                }),
                (0, G.jsx)(d, {
                  onClick: (e) => v(e, i),
                  children: _(`#PricingDashboard_ContactUsButton`),
                }),
              ],
            }),
          ],
        }),
        t.length == 0 &&
          (0, G.jsx)(`div`, {
            className: `ChHauw6JZ6E-`,
            children: _(`#PricingDashboard_Error_NoPackages`),
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

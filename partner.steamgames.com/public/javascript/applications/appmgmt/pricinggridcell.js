/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  Q as t,
  W as n,
  X as r,
  j as i,
  rt as a,
  sn as o,
  vt as s,
} from "./chunk~de7f2df91c.js";
import { I as c, Ot as l, Pt as u, ot as d } from "./chunk~25a6634263.js";
import { n as f } from "./chunk~68b7e78d68.js";
import {
  Ha as p,
  Ua as m,
  Va as h,
  Ya as g,
  gn as _,
  hn as v,
  l as y,
  la as b,
  pr as x,
  tr as S,
  u as C,
  ua as w,
  wr as T,
  zt as E,
} from "./chunk~1fa4b8f2ff.js";
import { M as D } from "./chunk~0a99e05c44.js";
import { t as O } from "./chunk~6257ebd2d4.js";
import { n as k, t as A } from "./chunk~fa5480ab25.js";
import { n as j } from "./chunk~971d501580.js";
import { t as M } from "./chunk~baca8b8889.js";
import { n as N } from "./chunk~a58194c5d9.js";
import {
  B as P,
  R as F,
  a as ee,
  d as te,
  o as I,
  rt as ne,
  s as re,
  t as ie,
} from "./chunk~360b8fa68b.js";
import { r as ae } from "./chunk~8681f5c764.js";
import { n as oe, t as se } from "./chunk~95ecbf576c.js";
/* empty css                                     */ import { r as ce } from "./chunk~d382bdf2cf.js";
import { t as L } from "./chunk~74d773532d.js";
var R = o(e(), 1),
  le = o(u(), 1),
  ue = `hYGYOUjTOx4-`;
function de() {
  return !(
    typeof HTMLElement < `u` &&
    typeof HTMLElement.prototype == `object` &&
    `popover` in HTMLElement.prototype
  );
}
async function fe() {
  de() &&
    (
      await g(() => import(`./chunk~952edc70be.js`), [], import.meta.url)
    ).apply();
}
var z = s();
fe();
function pe(e) {
  let [t, n] = D(e, `-`);
  return t === `left` || t === `right` ? [void 0, t] : [t, n];
}
function B(e) {
  let {
      direction: t,
      ignoreHorizontal: n,
      ignoreVertical: r,
      dismissOnClick: i,
      interactionMode: a = 0,
    } = e,
    o = (0, R.useRef)(null),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(!1),
    l = (0, R.useRef)(null),
    [u, f] = (0, R.useState)(!1),
    [p, m] = (0, R.useMemo)(() => pe(t), [t]),
    h = (0, R.useCallback)(() => {
      if (!l.current || !o.current) return;
      let e = l.current.getBoundingClientRect(),
        t = o.current.getBoundingClientRect(),
        i = m,
        a = l.current.matches(`:dir(rtl)`);
      (a && (m === `left` ? (i = `right`) : m === `right` && (i = `left`)),
        o.current.style.setProperty(`--parentWidth`, `${e.width}px`),
        o.current.style.setProperty(`--parentHeight`, `${e.height}px`));
      let s = 0;
      if (!n) {
        if (t.width) {
          if (
            (i === `left` && (s = (p ? e.right : e.left) - t.width),
            i === `right`)
          ) {
            let n = p ? e.left : e.right;
            s = document.body.clientWidth - (n + t.width);
          }
          (i === void 0 &&
            (s = a
              ? e.right - t.width
              : document.body.clientWidth - (e.left + t.width)),
            (s = Math.min(s, 0)));
        }
        i === `left`
          ? p
            ? ((o.current.style.left = `unset`),
              (o.current.style.right = `${document.body.clientWidth - e.right + s}px`))
            : ((o.current.style.left = `unset`),
              (o.current.style.right = `${document.body.clientWidth - e.left + s}px`))
          : i === `right`
            ? p
              ? ((o.current.style.left = `${e.left + s}px`),
                (o.current.style.right = `unset`))
              : ((o.current.style.left = `${e.right + s}px`),
                (o.current.style.right = `unset`))
            : i === void 0 &&
              (a
                ? ((o.current.style.left = `unset`),
                  (o.current.style.right = `${document.body.clientWidth - e.right + s}px`))
                : ((o.current.style.left = `${e.left + s}px`),
                  (o.current.style.right = `unset`)));
      }
      r ||
        (p === `down`
          ? ((o.current.style.top = `${e.bottom}px`),
            (o.current.style.bottom = `unset`),
            o.current.style.setProperty(
              `--availableHeight`,
              `${document.documentElement.clientHeight - e.bottom}px`,
            ))
          : p === `up`
            ? ((o.current.style.top = `unset`),
              (o.current.style.bottom = `${document.documentElement.clientHeight - e.top}px`),
              o.current.style.setProperty(`--availableHeight`, `${e.top}px`))
            : p === void 0 &&
              ((o.current.style.top = `${e.top}px`),
              (o.current.style.bottom = `unset`),
              o.current.style.setProperty(
                `--availableHeight`,
                `${document.documentElement.clientHeight - e.top}px`,
              )));
    }, [m, n, r, p]),
    g = (0, R.useMemo)(() => {
      if (l.current) return d(l.current);
    }, [l.current]);
  (0, R.useEffect)(
    () =>
      u
        ? (o.current?.showPopover(),
          h(),
          g?.addEventListener(`scroll`, h),
          window.addEventListener(`scroll`, h),
          () => {
            (g?.removeEventListener(`scroll`, h),
              window.addEventListener(`scroll`, h));
          })
        : (window.sessionStorage.getItem(`DEBUG_StickyContextMenus`) !=
            `true` && o.current?.hidePopover(),
          () => {}),
    [u, h, g],
  );
  let _ = (0, R.useCallback)(() => {
      (h(), f(!0), (c.current = !0));
    }, [h]),
    v = (0, R.useCallback)(() => {
      ((c.current = !1), s.current || f(!1));
    }, []),
    y = (0, R.useCallback)(() => {
      ((s.current = !0), f(!0));
    }, []),
    b = (0, R.useCallback)(
      (e) => {
        o.current?.contains(e.target) && y();
      },
      [y],
    ),
    x = (0, R.useCallback)(
      (e) => {
        o.current?.contains(e.target) && y();
      },
      [y],
    ),
    S = (0, R.useCallback)(() => {
      ((s.current = !1), c.current || f(!1));
    }, []),
    C = (0, R.useCallback)(
      (e) => {
        o.current?.contains(e.target) && S();
      },
      [S],
    ),
    w = (0, R.useCallback)(() => {
      (S(), v());
    }, [S, v]),
    T = (0, R.useCallback)(
      (e) => {
        e.key === `Enter` && (e.preventDefault(), u ? v() : _());
      },
      [v, _, u],
    ),
    E = (0, R.useCallback)(
      (e) => {
        !e.currentTarget.contains(e.relatedTarget) &&
          !o.current?.contains(e.relatedTarget) &&
          v();
      },
      [v],
    ),
    D = (0, R.useCallback)(
      (e) => {
        a === 2 && _();
      },
      [a, _],
    ),
    O = (0, R.useCallback)(
      (e) => {
        let t = e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
          n = !e.relatedTarget && !s.current;
        (t || n) && (S(), f(!1));
      },
      [S],
    ),
    k = (0, R.useCallback)(
      (e) => {
        o.current?.contains(e.target) && (u && i ? w() : s.current && _());
      },
      [w, i, u, _],
    ),
    A = (0, R.useCallback)(
      (e) => {
        o.current?.contains(e.target) &&
          (e.key === `Enter` && u && i ? w() : _(),
          e.key === `Escape` && u && (w(), e.stopPropagation()));
      },
      [w, i, u, _],
    ),
    j;
  a === 0 && !u
    ? (j = (e) => {
        (e.preventDefault(), _());
      })
    : a === 1 && (j = u ? v : _);
  let M = {
      "aria-expanded": u,
      role: `button`,
      onMouseEnter: a === 0 ? _ : void 0,
      onMouseLeave: a === 0 ? v : void 0,
      onClick: j,
      ref: l,
      onKeyDown: T,
      onFocus: D,
      onBlur: E,
    },
    N = {
      popover: `manual`,
      ref: o,
      onMouseEnter: x,
      onMouseLeave: C,
      onFocus: b,
      onBlur: O,
      onClick: k,
      onKeyDown: A,
      className: ue,
    };
  return (
    (0, R.useImperativeHandle)(e.ref, () => ({ show: _, hide: v, close: w }), [
      _,
      v,
      w,
    ]),
    { isShowingMenu: u, triggerProps: M, menuProps: N, closeMenu: w }
  );
}
function V(e, t) {
  return (n) => {
    (e?.(n), t?.(n));
  };
}
function H(e) {
  let {
      direction: t,
      interactionMode: n = 0,
      ignoreHorizontal: r,
      ignoreVertical: i,
      dismissOnClick: a,
      menuTarget: o,
      className: s,
      children: c,
      renderWhenClosed: u = !0,
      ...d
    } = e,
    { isShowingMenu: f, triggerProps: h, menuProps: g, closeMenu: _ } = B(e),
    v = R.useRef(null),
    y = l(v, o.props.navRef),
    b = R.useRef(null);
  return (
    R.useEffect(() => {
      f
        ? b.current?.TakeFocus()
        : b.current?.BFocusWithin() && v.current?.TakeFocus();
    }, [f]),
    (0, z.jsxs)(z.Fragment, {
      children: [
        R.cloneElement(o, {
          ...h,
          onMouseEnter: V(o.props.onMouseEnter, h.onMouseEnter),
          onMouseLeave: V(o.props.onMouseLeave, h.onMouseLeave),
          navRef: y,
        }),
        (0, z.jsx)(p, {
          ...d,
          ...g,
          className: (0, le.default)(g.className, s),
          navRef: b,
          onCancel: _,
          onFocusWithin: (e) => !e && _(),
          childFocusDisabled: !f,
          children: (0, z.jsx)(m, { children: (u || f) && c }),
        }),
      ],
    })
  );
}
var U = (function (e) {
  return ((e.k_FreeToPlay = `freetoplay`), (e.k_Free = `free`), e);
})({});
function me(e, t) {
  return O({
    mutationKey: [`settofree`, t],
    mutationFn: async (i) => {
      let { displayOption: a, fnOnStoreSaveSucceed: o } = i;
      if (!e || !t) throw Error(`Invalid parameters provided`);
      {
        let t = new FormData();
        if (
          (t.set(`sessionid`, r()),
          t.set(`appid`, `` + e),
          t.set(
            `displaytext`,
            a == U.k_Free
              ? `#PurchaseButton_Free`
              : `#PurchaseButton_FreeToPlay`,
          ),
          !(
            await fetch(`${n.PARTNER_BASE_URL}store/ajaxupdatef2pstore`, {
              method: `POST`,
              credentials: `include`,
              body: t,
            })
          ).ok)
        )
          throw Error(L.Localize(`#FreeOnDemand_Store_Error`, e));
      }
      o && o();
      {
        let e = new FormData();
        if (
          (e.set(`sessionid`, r()),
          e.set(`action`, `save`),
          e.set(`billing_type`, `12`),
          !(
            await fetch(`${n.PARTNER_BASE_URL}store/ajaxpackagesave/${t}`, {
              method: `POST`,
              credentials: `include`,
              body: e,
            })
          ).ok)
        )
          throw Error(L.Localize(`#FreeOnDemand_Package_Error`, t));
      }
    },
  });
}
function he(e) {
  let { strButtonOverride: t, appids: n, nPackageID: r, onClick: i } = e,
    a = W(),
    [o, s, l] = c();
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(v, {
        toolTipContent: a
          ? L.Localize(`#FreeOnDemand_Button_ttip`)
          : L.Localize(`#FreeOnDemand_Button_disabled_ttip`),
        children: (0, z.jsx)(M, {
          onClick: () => {
            (i?.(), s());
          },
          color: `dull`,
          children: t || L.Localize(`#FreeOnDemand_Button`),
        }),
      }),
      (0, z.jsx)(ae, {
        active: o,
        children:
          a && n && n.length == 1
            ? (0, z.jsx)(ge, { closeModal: l, nPackageID: r, nAppID: n[0] })
            : (0, z.jsx)(_e, { closeModal: l }),
      }),
    ],
  });
}
function ge(e) {
  let { closeModal: t, nAppID: n, nPackageID: r } = e,
    [i, o] = (0, R.useState)(U.k_FreeToPlay),
    s = me(n, r),
    c = oe();
  return c.bLoading
    ? (0, z.jsx)(se, {
        state: c,
        strDialogTitle: L.Localize(`#FreeOnDemand_Title`),
        closeModal: () => {
          (window.location.replace(
            `${a.PARTNER_BASE_URL}store/packagelanding/${r}`,
          ),
            t());
        },
      })
    : (0, z.jsxs)(y, {
        strTitle: L.Localize(`#FreeOnDemand_Title`),
        strDescription: L.Localize(`#FreeOnDemand_Desc`),
        strOKButtonText: L.Localize(`#FreeOnDemand_Button_Confirm`),
        onCancel: t,
        onOK: async () => {
          try {
            (c.fnSetLoading(!0),
              c.fnSetThrobber(L.Localize(`#FreeOnDemand_Convert_Store`)),
              await s.mutateAsync({
                displayOption: i,
                fnOnStoreSaveSucceed: () => {
                  c.fnSetThrobber(L.Localize(`#FreeOnDemand_Convert_Package`));
                },
              }),
              c.fnSetSuccess(!0),
              c.fnSetStrSuccess(L.Localize(`#FreeOnDemand_ConvertSuccess`)));
          } catch (e) {
            (c.fnSetError(!0),
              c.fnSetStrError(
                e instanceof Error
                  ? e.message
                  : h.Localize(`#Error_ErrorCommunicatingWithNetwork`),
              ));
          }
        },
        children: [
          (0, z.jsx)(`br`, {}),
          (0, z.jsxs)(j, {
            paddingTop: `4`,
            children: [
              (0, z.jsx)(N, {
                size: `4`,
                children: L.Localize(`#FreeOnDemand_Radio`),
              }),
              (0, z.jsx)(j, {
                padding: `4`,
                background: `greyneutral-6`,
                radius: `sm`,
                children: (0, z.jsx)(ne, {
                  value: i,
                  options: [U.k_FreeToPlay, U.k_Free],
                  getOptionLabel: (e) =>
                    e == U.k_Free
                      ? L.Localize(`#FreeOnDemand_Radio_Free`)
                      : L.Localize(`#FreeOnDemand_Radio_FreeToPlay`),
                  onValueChange: o,
                }),
              }),
            ],
          }),
        ],
      });
}
function _e(e) {
  let { closeModal: t } = e,
    n = `${a.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
  return (0, z.jsxs)(C, {
    strTitle: L.Localize(`#FreeOnDemand_Title`),
    strDescription: L.Localize(`#FreeOnDemand_Desc_NotPermitted`),
    closeModal: t,
    children: [
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`a`, {
        href: n,
        target: `_blank`,
        rel: `noreferrer`,
        children: n,
      }),
    ],
  });
}
function W() {
  let [e] = (0, R.useState)(t(`bCanSetFree`, `application_config`));
  return e;
}
var ve = `_3K6UndZwcp4-`,
  G = `NkwNAGTfxNc-`,
  ye = `Cyr9AOaXJqQ-`,
  be = `mnGEBt7lYCc-`,
  xe = `UU5wV93Khvw-`,
  Se = `X6JiGhh9z-Y-`,
  Ce = `ffBlm-5By18-`;
function we(e) {
  let t = (0, z.jsx)(`button`, { className: ve, children: (0, z.jsx)(T, {}) });
  return (0, z.jsx)(K, { menuTarget: t, ...e });
}
function Te(e) {
  let { strButton: t, strTooltip: n } = e,
    r = (0, z.jsxs)(M, {
      onClick: () => {},
      children: [
        (0, z.jsx)(v, {
          toolTipContent: n,
          children: (0, z.jsx)(`span`, { children: t }),
        }),
        (0, z.jsx)(`div`, {
          className: i(G, `DialogDropDown_Arrow`),
          children: (0, z.jsx)(T, {}),
        }),
      ],
    });
  return (0, z.jsx)(K, { menuTarget: r, ...e });
}
function K(e) {
  let { menuTarget: t } = e,
    n = R.useRef(null);
  return (0, z.jsx)(H, {
    menuTarget: t,
    direction: `down`,
    interactionMode: 1,
    ref: n,
    children: (0, z.jsx)(Ee, { onSelect: () => n.current?.close(), ...e }),
  });
}
function Ee(e) {
  let {
      fnGetUSDPriceInCents: t,
      fnOnUpdate: n,
      strDescription: r,
      bCanSetToFree: a,
      nPackageID: o,
      onSelect: s,
      appids: c,
    } = e,
    l = k(),
    u = t();
  if (!l) return null;
  let d = l.GetUSDPricePointsInCents();
  return (0, z.jsxs)(`div`, {
    className: ye,
    children: [
      (0, z.jsx)(`div`, {
        className: be,
        children: r || L.Localize(`#PricingGuideline_Default`),
      }),
      (0, z.jsxs)(`div`, {
        className: xe,
        children: [
          a !== void 0 &&
            (0, z.jsx)(
              `div`,
              {
                className: `X6JiGhh9z-Y-`,
                children: (0, z.jsx)(he, {
                  nPackageID: o,
                  strButtonOverride: L.Localize(`#FreeOnDemand_InlineOption`),
                  appids: c,
                }),
              },
              `settofree`,
            ),
          d.map((e) =>
            (0, z.jsx)(
              `button`,
              {
                onClick: () => {
                  (s(), n(e));
                },
                className: i({ [Se]: !0, [Ce]: u == e }),
                children: f(e, 1),
              },
              e,
            ),
          ),
        ],
      }),
    ],
  });
}
var De = `vjGU82Mayj0-`,
  Oe = `_8PTPddq6sxo-`,
  ke = `rgTIIu2i7eg-`,
  Ae = `XslZzcoK48s-`,
  je = `qt1z-Zd0AzA-`,
  Me = `LgvOq0X1cko-`,
  Ne = `uHRKRyDdHdI-`,
  Pe = `mCOxvhXmWGA-`,
  Fe = `TT67blzfGUg-`,
  Ie = `CSlvnPWMgb0-`,
  q = `koOmA3AKKLk-`,
  Le = `QJXb3tYHa2s-`,
  Re = `dIR-rFd35NQ-`,
  J = `vM-4ZZonFUY-`,
  Y = null;
function ze(e) {
  Y = e;
}
function Be(e) {
  let { packageID: t, strPriceKey: n } = e,
    {
      nPriceInCents: r,
      nPublishedPriceInCents: a,
      nProposedPriceInCents: o,
      nSuggestedPriceInCents: s,
      fnSetPrice: c,
    } = P(t, n),
    { nPriceInCents: l } = P(t, `USD`),
    u = !!o && (!a || o != a),
    d = F(t),
    f = d && $(d.rtSubmitted),
    { data: p } = ce(d?.submitterID),
    m = p ? p.m_strPlayerName : d?.submitterID,
    h = d?.eState == 4;
  return (!a && !u && !s) || Y != t + n
    ? null
    : (0, z.jsxs)(`div`, {
        className: q,
        children: [
          !!a &&
            (0, z.jsxs)(_, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: w(`#PricingDashboard_CurrentPriceOnStore_ttip`),
              children: [
                (0, z.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: w(`#PricingDashboard_CurrentPriceOnStore`),
                }),
                (0, z.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: I(a, n).join(``),
                }),
                (0, z.jsx)(_, {
                  className: i(`-SR0r-VcbgY-`, a == r && `_0TfgESjlOKw-`),
                  onClick: () => c(a),
                  bDisabled: a == r,
                  toolTipContent: w(`#PricingDashboard_UseThisOldPrice_ttip`),
                  children: w(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
          u &&
            (0, z.jsxs)(_, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: h
                ? w(`#PricingDashboard_ApprovedPrice_ttip`)
                : w(`#PricingDashboard_ProposedPrice_ttip`, m, f),
              children: [
                (0, z.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: w(
                    h
                      ? `#PricingDashboard_ApprovedPrice`
                      : `#PricingDashboard_ProposedPrice`,
                  ),
                }),
                (0, z.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: I(o, n).join(``),
                }),
                (0, z.jsx)(_, {
                  className: i(`-SR0r-VcbgY-`, o == r && `_0TfgESjlOKw-`),
                  onClick: () => c(o),
                  bDisabled: o == r,
                  toolTipContent: w(`#PricingDashboard_UseThisNewPrice_ttip`),
                  children: w(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
          !!s &&
            (0, z.jsxs)(_, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: L.Localize(
                `#PricingDashboard_Method_SuggestedPrice_ttip`,
                I(l, `USD`).join(``),
              ),
              children: [
                (0, z.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: L.Localize(
                    `#PricingDashboard_Method_SuggestedPrice`,
                  ),
                }),
                (0, z.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: I(s, n).join(``),
                }),
                (0, z.jsx)(_, {
                  className: i(`-SR0r-VcbgY-`, s == r && `_0TfgESjlOKw-`),
                  onClick: () => c(s),
                  bDisabled: s == r,
                  toolTipContent: w(`#PricingDashboard_UseThisNewPrice_ttip`),
                  children: w(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
        ],
      });
}
function Ve(e) {
  let { cell: t, row: n } = e,
    r = n.original.packageID,
    i = t.getValue(),
    {
      nPriceInCents: a,
      nPublishedPriceInCents: o,
      nProposedPriceInCents: s,
      fnSetPrice: c,
    } = P(r, i),
    [l, u, d] = I(a, i),
    f = re(i),
    p = R.useRef(void 0),
    m = (e) => {
      let t = e.target.value.replace(/[^0-9]/g, ``),
        n = Number(t || 0);
      if (Number.isNaN(n)) return;
      f.bWholeUnitsOnly && (n *= 100);
      let r = 2147483647;
      (n > r && (n = r), c(n));
    },
    { strClassName: h } = Z(r, i),
    g = i == `USD`,
    _ = s ?? o;
  return (0, z.jsxs)(`div`, {
    ref: p,
    onKeyDown: ie,
    className: h,
    children: [
      a != _ && (0, z.jsx)(Q, { nPriceInCents: a, nSavedPriceInCents: _ }),
      (0, z.jsx)(`div`, { className: Oe, children: l && l }),
      (0, z.jsx)(H, {
        menuTarget: (0, z.jsx)(`div`, {
          className: je,
          children: (0, z.jsx)(E, {
            value: u,
            className: Me,
            onChange: m,
            onFocus: () => ze(r + i),
          }),
        }),
        direction: `up`,
        interactionMode: 2,
        dismissOnClick: !0,
        renderWhenClosed: !1,
        children: (0, z.jsx)(Be, { packageID: r, strPriceKey: i }),
      }),
      (0, z.jsx)(`div`, { className: ke, children: d && d }),
      g &&
        (0, z.jsx)(He, {
          packageID: r,
          appids: n.original.appids,
          bCanSetToFree: n.original.bCanSetToFree,
        }),
      (0, z.jsx)(X, { packageID: r, strPriceKey: i }),
    ],
  });
}
function He(e) {
  let { packageID: t, appids: n, bCanSetToFree: r } = e,
    { fnApplyGuidelines: i } = A(ee());
  return (0, z.jsx)(we, {
    fnGetUSDPriceInCents: () => te(t, `USD`),
    fnOnUpdate: (e) => i(t, e),
    strDescription: L.Localize(
      `#PricingDashboard_GuidelinesPickerDescription_New`,
    ),
    nPackageID: t,
    appids: n,
    bCanSetToFree: r,
  });
}
function X(e) {
  let { packageID: t, strPriceKey: n } = e,
    { strPriceWarning: r, bBadPrice: i, bShowWarningIcon: a } = Z(t, n);
  return a
    ? (0, z.jsx)(_, {
        className: Fe,
        strTooltipClassname: J,
        toolTipContent: r,
        direction: `top`,
        children: (0, z.jsx)(x, { color: i ? `rgb(194, 45, 0)` : `#e5af37` }),
      })
    : null;
}
var Ue = 2.25,
  We = 0.5;
function Z(e, t) {
  let {
      nPriceInCents: n,
      nPublishedPriceInCents: r,
      nProposedPriceInCents: a,
      nMinPriceInCents: o,
      nMaxPriceInCents: s,
      nMaxDiscountPercentage: c,
      nSuggestedPriceInCents: l,
    } = P(e, t),
    u = F(e),
    d = t == `USD`,
    f = n != (a ?? r),
    p = n < o,
    m = !!s && n > s,
    h = !!l && n > l * 2.25,
    g = !!l && n < l * 0.5,
    _ = !!l && n < l && !!c,
    v = !!l && n == l && !!c,
    y = !1;
  m
    ? (y = w(`#PricingDashboard_PriceIncreaseDisallowed`))
    : p && !f
      ? (y = w(`#PricingDashboard_PriceTooLow_Grandfathered`))
      : p
        ? (y = w(`#PricingDashboard_PriceTooLow`, I(o, t).join(``)))
        : h
          ? (y = w(
              `#PricingDashboard_PriceMuchHigherThanMethod`,
              I(l, t).join(``),
            ))
          : g && _
            ? (y = w(
                `#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount`,
                I(l, t).join(``),
                c,
              ))
            : g
              ? (y = w(
                  `#PricingDashboard_PriceMuchLowerThanMethod`,
                  I(l, t).join(``),
                ))
              : _
                ? (y = w(
                    `#PricingDashboard_PriceCheapAndLowerThanGuidelines`,
                    c,
                  ))
                : v && (y = w(`#PricingDashboard_PriceCheap`, c));
  let b = m || p,
    x = h || g,
    S = b || x || _,
    C = !f && !!a && (!r || a != r),
    T = u?.eState == 4,
    E = i(
      De,
      d && `_2jxaWr3nXmY-`,
      f && `_-58NL0goqOE-`,
      C && `gWq-S1xg768-`,
      T && `zJrzoJbAzQ4-`,
      S && `YhX-7qIsx74-`,
      x && `rVG5SliiqF4-`,
      b && `Q7bnsMFI6lE-`,
    );
  return R.useMemo(
    () => ({
      strPriceWarning: y,
      strClassName: E,
      bBadPrice: b,
      bShowSevereWarning: x,
      bShowWarningIcon: S,
    }),
    [y, E, b, x, S],
  );
}
function Q(e) {
  let { nPriceInCents: t, nSavedPriceInCents: n } = e,
    r = null,
    a = null,
    o = null,
    s = null;
  if (!n) ((r = w(`#PricingDashboard_PriceIsNew_Short`)), (s = i(Pe)));
  else {
    let e = Math.ceil((100 * (t - n)) / n),
      c = t > n;
    ((o = w(
      c
        ? `#PricingDashboard_PriceIncreaseBy`
        : `#PricingDashboard_PriceLowerBy`,
      e + `%`,
    )),
      (s = i(Ne, c && `JsrDuEwdS04-`)),
      (a = (0, z.jsx)(`div`, {
        className: Ie,
        children: (0, z.jsx)(S, { angle: c ? 0 : 180 }),
      })),
      (r = e + `%`));
  }
  return (0, z.jsxs)(_, {
    className: s,
    strTooltipClassname: J,
    toolTipContent: o,
    direction: `top`,
    children: [a, r],
  });
}
function $(e) {
  return new Date(e * 1e3).toLocaleString(b.GetPreferredLocales(), {
    weekday: `long`,
    month: `long`,
    day: `numeric`,
    hour: `numeric`,
    minute: `2-digit`,
  });
}
export {
  We as a,
  Le as c,
  Te as d,
  W as f,
  X as i,
  Ae as l,
  Q as n,
  Ue as o,
  Ve as r,
  Re as s,
  $ as t,
  q as u,
};

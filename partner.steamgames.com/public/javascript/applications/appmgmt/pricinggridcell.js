/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  U as t,
  Y as n,
  Z as r,
  _t as i,
  kt as a,
  nt as o,
  on as s,
} from "./mobx.esm.js";
import { At as c, It as l, R as u, ct as d } from "./src.js";
import { n as f } from "./usedataloader.client.js";
import {
  Ga as p,
  It as m,
  La as h,
  Ra as g,
  _r as _,
  aa as v,
  ar as y,
  c as b,
  fn as x,
  oa as S,
  pn as C,
  qn as w,
  s as T,
  za as E,
} from "./dialogs.js";
import { M as D } from "./storebrowsequerycontext.js";
import { t as O } from "./useMutation.js";
import { n as k, t as A } from "./pricingguidelineobject.js";
import { n as j } from "./flex.js";
import { t as M } from "./button.js";
import { n as N } from "./text.js";
import {
  B as P,
  R as F,
  a as ee,
  d as te,
  o as I,
  rt as ne,
  s as re,
  t as ie,
} from "./tabulatorutils.js";
import { r as ae } from "./modals.js";
import { n as oe, t as se } from "./simplesuccesserror.js";
/* empty css                                  */ import { r as ce } from "./playerstore.js";
import { t as L } from "./localization3.js";
var R = s(a(), 1),
  le = s(l(), 1),
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
    (await p(() => import(`./popover-fn.js`), [], import.meta.url)).apply();
}
var z = i();
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
      children: l,
      renderWhenClosed: u = !0,
      ...d
    } = e,
    { isShowingMenu: f, triggerProps: p, menuProps: m, closeMenu: h } = B(e),
    _ = R.useRef(null),
    v = c(_, o.props.navRef),
    y = R.useRef(null);
  return (
    R.useEffect(() => {
      f
        ? y.current?.TakeFocus()
        : y.current?.BFocusWithin() && _.current?.TakeFocus();
    }, [f]),
    (0, z.jsxs)(z.Fragment, {
      children: [
        R.cloneElement(o, {
          ...p,
          onMouseEnter: V(o.props.onMouseEnter, p.onMouseEnter),
          onMouseLeave: V(o.props.onMouseLeave, p.onMouseLeave),
          navRef: v,
        }),
        (0, z.jsx)(g, {
          ...d,
          ...m,
          className: (0, le.default)(m.className, s),
          navRef: y,
          onCancel: h,
          onFocusWithin: (e) => !e && h(),
          childFocusDisabled: !f,
          children: (0, z.jsx)(E, { children: (u || f) && l }),
        }),
      ],
    })
  );
}
var U = (function (e) {
  return ((e.k_FreeToPlay = `freetoplay`), (e.k_Free = `free`), e);
})({});
function me(e, r) {
  return O({
    mutationKey: [`settofree`, r],
    mutationFn: async (i) => {
      let { displayOption: a, fnOnStoreSaveSucceed: o } = i;
      if (!e || !r) throw Error(`Invalid parameters provided`);
      {
        let r = new FormData();
        if (
          (r.set(`sessionid`, n()),
          r.set(`appid`, `` + e),
          r.set(
            `displaytext`,
            a == U.k_Free
              ? `#PurchaseButton_Free`
              : `#PurchaseButton_FreeToPlay`,
          ),
          !(
            await fetch(`${t.PARTNER_BASE_URL}store/ajaxupdatef2pstore`, {
              method: `POST`,
              credentials: `include`,
              body: r,
            })
          ).ok)
        )
          throw Error(L.Localize(`#FreeOnDemand_Store_Error`, e));
      }
      o && o();
      {
        let e = new FormData();
        if (
          (e.set(`sessionid`, n()),
          e.set(`action`, `save`),
          e.set(`billing_type`, `12`),
          !(
            await fetch(`${t.PARTNER_BASE_URL}store/ajaxpackagesave/${r}`, {
              method: `POST`,
              credentials: `include`,
              body: e,
            })
          ).ok)
        )
          throw Error(L.Localize(`#FreeOnDemand_Package_Error`, r));
      }
    },
  });
}
function he(e) {
  let { strButtonOverride: t, appids: n, nPackageID: r, onClick: i } = e,
    a = W(),
    [o, s, c] = u();
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(x, {
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
            ? (0, z.jsx)(ge, { closeModal: c, nPackageID: r, nAppID: n[0] })
            : (0, z.jsx)(_e, { closeModal: c }),
      }),
    ],
  });
}
function ge(e) {
  let { closeModal: t, nAppID: n, nPackageID: r } = e,
    [i, a] = (0, R.useState)(U.k_FreeToPlay),
    s = me(n, r),
    c = oe();
  return c.bLoading
    ? (0, z.jsx)(se, {
        state: c,
        strDialogTitle: L.Localize(`#FreeOnDemand_Title`),
        closeModal: () => {
          (window.location.replace(
            `${o.PARTNER_BASE_URL}store/packagelanding/${r}`,
          ),
            t());
        },
      })
    : (0, z.jsxs)(T, {
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
                  onValueChange: a,
                }),
              }),
            ],
          }),
        ],
      });
}
function _e(e) {
  let { closeModal: t } = e,
    n = `${o.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
  return (0, z.jsxs)(b, {
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
  let [e] = (0, R.useState)(r(`bCanSetFree`, `application_config`));
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
  let t = (0, z.jsx)(`button`, { className: ve, children: (0, z.jsx)(_, {}) });
  return (0, z.jsx)(K, { menuTarget: t, ...e });
}
function Te(t) {
  let { strButton: n, strTooltip: r } = t,
    i = (0, z.jsxs)(M, {
      onClick: () => {},
      children: [
        (0, z.jsx)(x, {
          toolTipContent: r,
          children: (0, z.jsx)(`span`, { children: n }),
        }),
        (0, z.jsx)(`div`, {
          className: e(G, `DialogDropDown_Arrow`),
          children: (0, z.jsx)(_, {}),
        }),
      ],
    });
  return (0, z.jsx)(K, { menuTarget: i, ...t });
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
function Ee(t) {
  let {
      fnGetUSDPriceInCents: n,
      fnOnUpdate: r,
      strDescription: i,
      bCanSetToFree: a,
      nPackageID: o,
      onSelect: s,
      appids: c,
    } = t,
    l = k(),
    u = n();
  if (!l) return null;
  let d = l.GetUSDPricePointsInCents();
  return (0, z.jsxs)(`div`, {
    className: ye,
    children: [
      (0, z.jsx)(`div`, {
        className: be,
        children: i || L.Localize(`#PricingGuideline_Default`),
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
          d.map((t) =>
            (0, z.jsx)(
              `button`,
              {
                onClick: () => {
                  (s(), r(t));
                },
                className: e({ [Se]: !0, [Ce]: u == t }),
                children: f(t, 1),
              },
              t,
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
function Be(t) {
  let { packageID: n, strPriceKey: r } = t,
    {
      nPriceInCents: i,
      nPublishedPriceInCents: a,
      nProposedPriceInCents: o,
      nSuggestedPriceInCents: s,
      fnSetPrice: c,
    } = P(n, r),
    { nPriceInCents: l } = P(n, `USD`),
    u = !!o && (!a || o != a),
    d = F(n),
    f = d && $(d.rtSubmitted),
    { data: p } = ce(d?.submitterID),
    m = p ? p.m_strPlayerName : d?.submitterID,
    h = d?.eState == 4;
  return (!a && !u && !s) || Y != n + r
    ? null
    : (0, z.jsxs)(`div`, {
        className: q,
        children: [
          !!a &&
            (0, z.jsxs)(C, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: S(`#PricingDashboard_CurrentPriceOnStore_ttip`),
              children: [
                (0, z.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: S(`#PricingDashboard_CurrentPriceOnStore`),
                }),
                (0, z.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: I(a, r).join(``),
                }),
                (0, z.jsx)(C, {
                  className: e(`-SR0r-VcbgY-`, a == i && `_0TfgESjlOKw-`),
                  onClick: () => c(a),
                  bDisabled: a == i,
                  toolTipContent: S(`#PricingDashboard_UseThisOldPrice_ttip`),
                  children: S(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
          u &&
            (0, z.jsxs)(C, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: h
                ? S(`#PricingDashboard_ApprovedPrice_ttip`)
                : S(`#PricingDashboard_ProposedPrice_ttip`, m, f),
              children: [
                (0, z.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: S(
                    h
                      ? `#PricingDashboard_ApprovedPrice`
                      : `#PricingDashboard_ProposedPrice`,
                  ),
                }),
                (0, z.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: I(o, r).join(``),
                }),
                (0, z.jsx)(C, {
                  className: e(`-SR0r-VcbgY-`, o == i && `_0TfgESjlOKw-`),
                  onClick: () => c(o),
                  bDisabled: o == i,
                  toolTipContent: S(`#PricingDashboard_UseThisNewPrice_ttip`),
                  children: S(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
          !!s &&
            (0, z.jsxs)(C, {
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
                  children: I(s, r).join(``),
                }),
                (0, z.jsx)(C, {
                  className: e(`-SR0r-VcbgY-`, s == i && `_0TfgESjlOKw-`),
                  onClick: () => c(s),
                  bDisabled: s == i,
                  toolTipContent: S(`#PricingDashboard_UseThisNewPrice_ttip`),
                  children: S(`#PricingDashboard_UseThisPrice_Button`),
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
    h = (e) => {
      let t = e.target.value.replace(/[^0-9]/g, ``),
        n = Number(t || 0);
      if (Number.isNaN(n)) return;
      f.bWholeUnitsOnly && (n *= 100);
      let r = 2147483647;
      (n > r && (n = r), c(n));
    },
    { strClassName: g } = Z(r, i),
    _ = i == `USD`,
    v = s ?? o;
  return (0, z.jsxs)(`div`, {
    ref: p,
    onKeyDown: ie,
    className: g,
    children: [
      a != v && (0, z.jsx)(Q, { nPriceInCents: a, nSavedPriceInCents: v }),
      (0, z.jsx)(`div`, { className: Oe, children: l && l }),
      (0, z.jsx)(H, {
        menuTarget: (0, z.jsx)(`div`, {
          className: je,
          children: (0, z.jsx)(m, {
            value: u,
            className: Me,
            onChange: h,
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
      _ &&
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
    ? (0, z.jsx)(C, {
        className: Fe,
        strTooltipClassname: J,
        toolTipContent: r,
        direction: `top`,
        children: (0, z.jsx)(y, { color: i ? `rgb(194, 45, 0)` : `#e5af37` }),
      })
    : null;
}
var Ue = 2.25,
  We = 0.5;
function Z(t, n) {
  let {
      nPriceInCents: r,
      nPublishedPriceInCents: i,
      nProposedPriceInCents: a,
      nMinPriceInCents: o,
      nMaxPriceInCents: s,
      nMaxDiscountPercentage: c,
      nSuggestedPriceInCents: l,
    } = P(t, n),
    u = F(t),
    d = n == `USD`,
    f = r != (a ?? i),
    p = r < o,
    m = !!s && r > s,
    h = !!l && r > l * 2.25,
    g = !!l && r < l * 0.5,
    _ = !!l && r < l && !!c,
    v = !!l && r == l && !!c,
    y = !1;
  m
    ? (y = S(`#PricingDashboard_PriceIncreaseDisallowed`))
    : p && !f
      ? (y = S(`#PricingDashboard_PriceTooLow_Grandfathered`))
      : p
        ? (y = S(`#PricingDashboard_PriceTooLow`, I(o, n).join(``)))
        : h
          ? (y = S(
              `#PricingDashboard_PriceMuchHigherThanMethod`,
              I(l, n).join(``),
            ))
          : g && _
            ? (y = S(
                `#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount`,
                I(l, n).join(``),
                c,
              ))
            : g
              ? (y = S(
                  `#PricingDashboard_PriceMuchLowerThanMethod`,
                  I(l, n).join(``),
                ))
              : _
                ? (y = S(
                    `#PricingDashboard_PriceCheapAndLowerThanGuidelines`,
                    c,
                  ))
                : v && (y = S(`#PricingDashboard_PriceCheap`, c));
  let b = m || p,
    x = h || g,
    C = b || x || _,
    w = !f && !!a && (!i || a != i),
    T = u?.eState == 4,
    E = e(
      De,
      d && `_2jxaWr3nXmY-`,
      f && `_-58NL0goqOE-`,
      w && `gWq-S1xg768-`,
      T && `zJrzoJbAzQ4-`,
      C && `YhX-7qIsx74-`,
      x && `rVG5SliiqF4-`,
      b && `Q7bnsMFI6lE-`,
    );
  return R.useMemo(
    () => ({
      strPriceWarning: y,
      strClassName: E,
      bBadPrice: b,
      bShowSevereWarning: x,
      bShowWarningIcon: C,
    }),
    [y, E, b, x, C],
  );
}
function Q(t) {
  let { nPriceInCents: n, nSavedPriceInCents: r } = t,
    i = null,
    a = null,
    o = null,
    s = null;
  if (!r) ((i = S(`#PricingDashboard_PriceIsNew_Short`)), (s = e(Pe)));
  else {
    let t = Math.ceil((100 * (n - r)) / r),
      c = n > r;
    ((o = S(
      c
        ? `#PricingDashboard_PriceIncreaseBy`
        : `#PricingDashboard_PriceLowerBy`,
      t + `%`,
    )),
      (s = e(Ne, c && `JsrDuEwdS04-`)),
      (a = (0, z.jsx)(`div`, {
        className: Ie,
        children: (0, z.jsx)(w, { angle: c ? 0 : 180 }),
      })),
      (i = t + `%`));
  }
  return (0, z.jsxs)(C, {
    className: s,
    strTooltipClassname: J,
    toolTipContent: o,
    direction: `top`,
    children: [a, i],
  });
}
function $(e) {
  return new Date(e * 1e3).toLocaleString(v.GetPreferredLocales(), {
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

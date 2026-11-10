/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  Ct as n,
  Lt as r,
  ft as i,
  kt as a,
  l as o,
  u as s,
} from "./libraries.js";
import "./modals.js";
import { t as c } from "./throbber.js";
import { S as l, j as u } from "./partnereventshared.module.js";
import { h as d, p as f } from "./clanimageupload.js";
import {
  By as p,
  Cc as m,
  Kx as h,
  Nb as g,
  Pn as _,
  Qn as v,
  Rx as y,
  Wy as b,
  Yc as x,
  ar as S,
  cr as C,
  er as w,
  hS as T,
  ix as E,
  nr as D,
  ob as O,
  rr as k,
  sr as A,
  uS as j,
  ub as M,
  xS as N,
  zr as P,
  zx as F,
} from "./main.js";
var I = e(r()),
  L = i(),
  R = class e {
    m_eCurLang = T(E.LANGUAGE);
    m_rgHasData = h([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new y();
    GetCallback() {
      return this.m_callback;
    }
    GetCurEditLanguage() {
      return this.m_eCurLang;
    }
    SetCurEditLanguage(e) {
      return (
        this.m_eCurLang != e &&
        ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
      );
    }
    SetHasLanguage(e) {
      e.forEach((e, t) => {
        this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
      });
    }
    BHasLanguageData(e) {
      return this.m_rgHasData[e];
    }
    GetHasLocalizationContext() {
      return this.m_bHasLocalizationContext;
    }
    SetHasLocalizationContext(e) {
      e != this.m_bHasLocalizationContext &&
        (this.m_bHasLocalizationContext = e);
    }
    static s_globalSingletonStore;
    static Get() {
      return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
    }
    constructor() {
      a(this);
    }
  };
(g([t], R.prototype, `m_eCurLang`, void 0),
  g([t], R.prototype, `m_rgHasData`, void 0),
  g([t], R.prototype, `m_bHasLocalizationContext`, void 0),
  g([F], R.prototype, `GetCurEditLanguage`, null),
  g([F], R.prototype, `SetCurEditLanguage`, null),
  g([n.bound], R.prototype, `SetHasLanguage`, null),
  g([F], R.prototype, `BHasLanguageData`, null));
function z() {
  return s(() => R.Get().GetCurEditLanguage());
}
var B = `_1ZQxfdsiPgM-`,
  V = `NpcSqQhn8sA-`,
  H = `i0pjDy4li-A-`,
  U = `fwAY6BoxoKI-`,
  W = `d-SkXlSVK18-`,
  G = (e) => {
    let { clanSteamID: t, fnImageSelectCallBack: n } = e,
      [r, i] = (0, I.useState)(``),
      a = d(e.clanSteamID.GetAccountID()),
      o = () => e.closeModal && e.closeModal(),
      s = f.GetFilteredClanImages(t, r),
      l = (e) => {
        (n(e), o());
      };
    return (0, L.jsx)(x, {
      children: (0, L.jsx)(_, {
        onEscKeypress: o,
        children: (0, L.jsxs)(S, {
          children: [
            (0, L.jsx)(C, { children: b(`#ClanImageChooser_Title`) }),
            (0, L.jsx)(w, {
              children: (0, L.jsxs)(D, {
                children: [
                  (0, L.jsx)(`p`, { children: b(`#ClanImageChooser_Desc`) }),
                  (0, L.jsx)(v, {
                    placeholder: b(`#ClanImageChooser_Search`),
                    value: r,
                    onChange: (e) => i(e.currentTarget.value),
                  }),
                  (0, L.jsx)(`div`, {
                    className: B,
                    children: a
                      ? (0, L.jsx)(c, { size: `medium`, string: b(`#Loading`) })
                      : s.length > 0
                        ? s.map((e) =>
                            (0, L.jsx)(
                              K,
                              {
                                clanImage: e,
                                searchStringHilight: r,
                                fnImageClick: l,
                              },
                              `ci` + e.image_hash,
                            ),
                          )
                        : r.trim().length == 0
                          ? (0, L.jsx)(`div`, {
                              children: b(`#ClanImageChooser_None`),
                            })
                          : (0, L.jsx)(`div`, {
                              children: b(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, L.jsx)(A, {
              children: (0, L.jsx)(k, {
                onClick: o,
                children: b(`#Button_Cancel`),
              }),
            }),
          ],
        }),
      }),
    });
  },
  K = (e) => {
    let { clanImage: t, searchStringHilight: n, fnImageClick: r } = e,
      i = t.file_name ? t.file_name : ``,
      a = q(n, i, String(t.imageid), V);
    return (0, L.jsxs)(`div`, {
      className: H,
      children: [
        (0, L.jsx)(`div`, {
          className: U,
          style: { backgroundImage: `url( '${t.thumb_url}' )` },
          onDoubleClick: () => r(t),
        }),
        (0, L.jsx)(`div`, { className: W, title: i, children: a }),
      ],
    });
  };
function q(e, t, n, r) {
  let i = [];
  if (e.length > 0) {
    let a = t.toLocaleLowerCase();
    for (let o = 0; o < t.length;) {
      let s = a.indexOf(e, o);
      if (s < 0) {
        i.push(
          (0, L.jsx)(`span`, { children: t.substring(o) }, n + `_` + String(o)),
        );
        break;
      }
      (o < s &&
        i.push(
          (0, L.jsx)(
            `span`,
            { children: t.substring(o, s) },
            n + `_` + String(o),
          ),
        ),
        i.push(
          (0, L.jsx)(
            `span`,
            { className: r, children: t.substr(s, e.length) },
            n + `_` + String(o),
          ),
        ),
        (o = s + e.length));
    }
  } else i.push((0, L.jsx)(`span`, { children: t }, n + `_null`));
  return i;
}
var J = class extends I.Component {
  GenerateLanguageOptions() {
    let e = [],
      {
        fnFilterLanguage: t,
        fnLangHasData: n,
        fnLastUpdateRTime: r,
        fnIsLangSupported: i,
      } = this.props;
    this.props.bAllowUnsetOption &&
      e.push(
        (0, L.jsx)(
          `option`,
          { value: -1, children: b(`#language_selection_none`) },
          `langpicker_unset`,
        ),
      );
    let a = [],
      o = this.props.realms || [N.k_ESteamRealmGlobal];
    for (let e of p.GetLanguageListForRealms(o)) {
      if (t && !t(e)) continue;
      let n = j(e),
        r = b(`#Language_` + n),
        o = !!(i && i(e));
      a.push({ eLang: e, sLocName: r, bSupported: o });
    }
    a.sort((e, t) =>
      e.bSupported == t.bSupported
        ? e.sLocName.localeCompare(t.sLocName)
        : e.bSupported
          ? -1
          : 1,
    );
    let s = !1;
    for (let t of a) {
      t.bSupported != s &&
        (e.push(
          (0, L.jsx)(
            `option`,
            {
              className: u,
              disabled: !0,
              children: b(
                t.bSupported
                  ? `#LanguageGroup_Supported`
                  : `#LanguageGroup_Unsupported`,
              ),
            },
            t.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
          ),
        ),
        (s = t.bSupported));
      let i = n && n(t.eLang),
        a = r && r(t.eLang),
        o = t.sLocName;
      (a &&
        a !== 0 &&
        ((o += ` `),
        (o += b(
          `#Language_Last_Update`,
          M(a) + ` @ ` + O(a, { bForce24HourClock: !1 }),
        ))),
        e.push(
          (0, L.jsx)(
            `option`,
            {
              value: t.eLang,
              className: m({ [l]: i }, (t.bSupported, void 0)),
              children: o,
            },
            `langpicker` + t.eLang + (i ? `_hasdata` : ``),
          ),
        ));
    }
    return e;
  }
  OnLanguageChange(e) {
    let { fnOnLanguageChanged: t, selectedLang: n } = this.props,
      r = Number.parseInt(e.currentTarget.value);
    r != n && t && t(r);
  }
  render() {
    let { selectedLang: e, bDisabled: t, strTooltip: n } = this.props,
      r = this.GenerateLanguageOptions();
    return (0, L.jsx)(P, {
      toolTipContent: n,
      children: (0, L.jsx)(`select`, {
        value: e,
        onChange: this.OnLanguageChange,
        disabled: t,
        children: r,
      }),
    });
  }
};
(g([F], J.prototype, `OnLanguageChange`, null), (J = g([o], J)));
export { z as a, R as i, G as n, q as r, J as t };

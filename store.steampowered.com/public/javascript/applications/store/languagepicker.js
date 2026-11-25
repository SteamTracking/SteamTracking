/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  Ot as n,
  St as r,
  c as i,
  dt as a,
  kt as o,
  l as s,
} from "./chunk~01cfc309bf.js";
import "./chunk~8681f5c764.js";
import { t as c } from "./chunk~eefd71512b.js";
import { C as l, j as u } from "./chunk~2f8c67b4de.js";
import { h as d, p as f } from "./chunk~0be5d7b286.js";
import {
  $x as p,
  AS as m,
  IS as h,
  Pc as g,
  TS as _,
  Un as v,
  Xr as y,
  _r as b,
  bb as x,
  dr as S,
  eS as C,
  eb as w,
  fr as T,
  gr as E,
  ib as D,
  lr as O,
  mr as k,
  ol as A,
  qb as j,
  sS as M,
  sr as N,
  vx as P,
  wb as F,
} from "./main.js";
var I = e(t()),
  L = a(),
  R = class e {
    m_eCurLang = m(P.LANGUAGE);
    m_rgHasData = M([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new p();
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
      n(this);
    }
  };
(j([o], R.prototype, `m_eCurLang`, void 0),
  j([o], R.prototype, `m_rgHasData`, void 0),
  j([o], R.prototype, `m_bHasLocalizationContext`, void 0),
  j([C], R.prototype, `GetCurEditLanguage`, null),
  j([C], R.prototype, `SetCurEditLanguage`, null),
  j([r.bound], R.prototype, `SetHasLanguage`, null),
  j([C], R.prototype, `BHasLanguageData`, null));
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
    return (0, L.jsx)(A, {
      children: (0, L.jsx)(v, {
        onEscKeypress: o,
        children: (0, L.jsxs)(k, {
          children: [
            (0, L.jsx)(b, { children: D(`#ClanImageChooser_Title`) }),
            (0, L.jsx)(O, {
              children: (0, L.jsxs)(S, {
                children: [
                  (0, L.jsx)(`p`, { children: D(`#ClanImageChooser_Desc`) }),
                  (0, L.jsx)(N, {
                    placeholder: D(`#ClanImageChooser_Search`),
                    value: r,
                    onChange: (e) => i(e.currentTarget.value),
                  }),
                  (0, L.jsx)(`div`, {
                    className: B,
                    children: a
                      ? (0, L.jsx)(c, { size: `medium`, string: D(`#Loading`) })
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
                              children: D(`#ClanImageChooser_None`),
                            })
                          : (0, L.jsx)(`div`, {
                              children: D(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, L.jsx)(E, {
              children: (0, L.jsx)(T, {
                onClick: o,
                children: D(`#Button_Cancel`),
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
          { value: -1, children: D(`#language_selection_none`) },
          `langpicker_unset`,
        ),
      );
    let a = [],
      o = this.props.realms || [h.k_ESteamRealmGlobal];
    for (let e of w.GetLanguageListForRealms(o)) {
      if (t && !t(e)) continue;
      let n = _(e),
        r = D(`#Language_` + n),
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
              children: D(
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
        (o += D(
          `#Language_Last_Update`,
          F(a) + ` @ ` + x(a, { bForce24HourClock: !1 }),
        ))),
        e.push(
          (0, L.jsx)(
            `option`,
            {
              value: t.eLang,
              className: g({ [l]: i }, (t.bSupported, void 0)),
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
    return (0, L.jsx)(y, {
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
(j([C], J.prototype, `OnLanguageChange`, null), (J = j([i], J)));
export { z as a, R as i, G as n, q as r, J as t };

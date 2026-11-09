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
  $n as p,
  Gx as m,
  Jc as h,
  Lx as g,
  Mb as _,
  Nn as v,
  Rr as y,
  Rx as b,
  Sc as x,
  Uy as S,
  Zn as C,
  ab as w,
  bS as T,
  ir as E,
  lS as D,
  lb as O,
  mS as k,
  nr as A,
  or as j,
  rx as M,
  sr as N,
  tr as P,
  zy as F,
} from "./main.js";
var I = e(r()),
  L = i(),
  R = class e {
    m_eCurLang = k(M.LANGUAGE);
    m_rgHasData = m([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new g();
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
      return (e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore;
    }
    constructor() {
      a(this);
    }
  };
_([t], R.prototype, `m_eCurLang`, void 0),
  _([t], R.prototype, `m_rgHasData`, void 0),
  _([t], R.prototype, `m_bHasLocalizationContext`, void 0),
  _([b], R.prototype, `GetCurEditLanguage`, null),
  _([b], R.prototype, `SetCurEditLanguage`, null),
  _([n.bound], R.prototype, `SetHasLanguage`, null),
  _([b], R.prototype, `BHasLanguageData`, null);
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
        n(e), o();
      };
    return (0, L.jsx)(h, {
      children: (0, L.jsx)(v, {
        onEscKeypress: o,
        children: (0, L.jsxs)(E, {
          children: [
            (0, L.jsx)(N, { children: S(`#ClanImageChooser_Title`) }),
            (0, L.jsx)(p, {
              children: (0, L.jsxs)(P, {
                children: [
                  (0, L.jsx)(`p`, { children: S(`#ClanImageChooser_Desc`) }),
                  (0, L.jsx)(C, {
                    placeholder: S(`#ClanImageChooser_Search`),
                    value: r,
                    onChange: (e) => i(e.currentTarget.value),
                  }),
                  (0, L.jsx)(`div`, {
                    className: B,
                    children: a
                      ? (0, L.jsx)(c, { size: `medium`, string: S(`#Loading`) })
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
                              children: S(`#ClanImageChooser_None`),
                            })
                          : (0, L.jsx)(`div`, {
                              children: S(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, L.jsx)(j, {
              children: (0, L.jsx)(A, {
                onClick: o,
                children: S(`#Button_Cancel`),
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
    for (let o = 0; o < t.length; ) {
      let s = a.indexOf(e, o);
      if (s < 0) {
        i.push(
          (0, L.jsx)(`span`, { children: t.substring(o) }, n + `_` + String(o)),
        );
        break;
      }
      o < s &&
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
        (o = s + e.length);
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
          { value: -1, children: S(`#language_selection_none`) },
          `langpicker_unset`,
        ),
      );
    let a = [],
      o = this.props.realms || [T.k_ESteamRealmGlobal];
    for (let e of F.GetLanguageListForRealms(o)) {
      if (t && !t(e)) continue;
      let n = D(e),
        r = S(`#Language_` + n),
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
              children: S(
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
      a &&
        a !== 0 &&
        ((o += ` `),
        (o += S(
          `#Language_Last_Update`,
          O(a) + ` @ ` + w(a, { bForce24HourClock: !1 }),
        ))),
        e.push(
          (0, L.jsx)(
            `option`,
            {
              value: t.eLang,
              className: x({ [l]: i }, (t.bSupported, void 0)),
              children: o,
            },
            `langpicker` + t.eLang + (i ? `_hasdata` : ``),
          ),
        );
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
_([b], J.prototype, `OnLanguageChange`, null), (J = _([o], J));
export { z as a, R as i, G as n, q as r, J as t };

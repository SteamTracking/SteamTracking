/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  _t as n,
  j as r,
  lt as i,
  sn as a,
  vt as o,
} from "./chunk~de7f2df91c.js";
import { It as s } from "./chunk~25a6634263.js";
import {
  Na as c,
  gn as l,
  ia as u,
  ka as d,
  ua as f,
} from "./chunk~1fa4b8f2ff.js";
import { C as p, w as m } from "./chunk~44f252525d.js";
import { t as h } from "./chunk~802e967112.js";
import { D as g, b as _ } from "./chunk~2f8c67b4de.js";
var v = a(t()),
  y = o(),
  b = class extends v.Component {
    GenerateLanguageOptions() {
      let e = [],
        {
          fnFilterLanguage: t,
          fnLangHasData: a,
          fnLastUpdateRTime: o,
          fnIsLangSupported: s,
        } = this.props;
      this.props.bAllowUnsetOption &&
        e.push(
          (0, y.jsx)(
            `option`,
            { value: -1, children: f(`#language_selection_none`) },
            `langpicker_unset`,
          ),
        );
      let l = [],
        p = this.props.realms || [n.k_ESteamRealmGlobal];
      for (let e of u.GetLanguageListForRealms(p)) {
        if (t && !t(e)) continue;
        let n = i(e),
          r = f(`#Language_` + n),
          a = !!(s && s(e));
        l.push({ eLang: e, sLocName: r, bSupported: a });
      }
      l.sort((e, t) =>
        e.bSupported == t.bSupported
          ? e.sLocName.localeCompare(t.sLocName)
          : e.bSupported
            ? -1
            : 1,
      );
      let m = !1;
      for (let t of l) {
        t.bSupported != m &&
          (e.push(
            (0, y.jsx)(
              `option`,
              {
                className: g,
                disabled: !0,
                children: f(
                  t.bSupported
                    ? `#LanguageGroup_Supported`
                    : `#LanguageGroup_Unsupported`,
                ),
              },
              t.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
            ),
          ),
          (m = t.bSupported));
        let n = a && a(t.eLang),
          i = o && o(t.eLang),
          s = t.sLocName;
        (i &&
          i !== 0 &&
          ((s += ` `),
          (s += f(
            `#Language_Last_Update`,
            c(i) + ` @ ` + d(i, { bForce24HourClock: !1 }),
          ))),
          e.push(
            (0, y.jsx)(
              `option`,
              {
                value: t.eLang,
                className: r({ [_]: n }, (t.bSupported, void 0)),
                children: s,
              },
              `langpicker` + t.eLang + (n ? `_hasdata` : ``),
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
      return (0, y.jsx)(l, {
        toolTipContent: n,
        children: (0, y.jsx)(`select`, {
          value: e,
          onChange: this.OnLanguageChange,
          disabled: t,
          children: r,
        }),
      });
    }
  };
(e([s], b.prototype, `OnLanguageChange`, null), (b = e([p], b)));
function x(e) {
  let [t, n] = m(() => [
    h.Get().GetHasLocalizationContext(),
    h.Get().GetCurEditLanguage(),
  ]);
  return (0, y.jsx)(b, {
    selectedLang: n,
    fnLangHasData: h.Get().BHasLanguageData,
    fnOnLanguageChanged: h.Get().SetCurEditLanguage,
    bDisabled: !t,
    strTooltip: t ? void 0 : f(`#Localization_EditorNotInFocus`),
  });
}
function S(e) {
  let { fnLangHasData: t } = e;
  v.useEffect(
    () => (
      h.Get().SetHasLocalizationContext(!0),
      () => h.Get().SetHasLocalizationContext(!1)
    ),
    [],
  );
  let n = m(() => {
    let e = [];
    for (let n = 0; n < 32; ++n) e[n] = !!(t && t(n));
    return e;
  });
  return (
    v.useEffect(() => h.Get().SetHasLanguage(n), [n]),
    (0, y.jsx)(y.Fragment, {})
  );
}
export { b as n, x as r, S as t };

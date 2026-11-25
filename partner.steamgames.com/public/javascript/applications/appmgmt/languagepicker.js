/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  F as e,
  Pt as t,
  U as n,
  W as r,
  n as i,
  nt as a,
  r as o,
} from "./chunk~de7f2df91c.js";
import { Pt as s } from "./chunk~bd90a5fce7.js";
import {
  Aa as c,
  Pa as l,
  _n as u,
  aa as d,
  da as f,
} from "./chunk~1fa4b8f2ff.js";
import { C as p, w as m } from "./chunk~44f252525d.js";
import { D as h, b as g } from "./chunk~2f8c67b4de.js";
import { t as _ } from "./chunk~802e967112.js";
var v = t(a()),
  y = r(),
  b = class extends v.Component {
    GenerateLanguageOptions() {
      let t = [],
        {
          fnFilterLanguage: r,
          fnLangHasData: i,
          fnLastUpdateRTime: a,
          fnIsLangSupported: s,
        } = this.props;
      this.props.bAllowUnsetOption &&
        t.push(
          (0, y.jsx)(
            `option`,
            { value: -1, children: f(`#language_selection_none`) },
            `langpicker_unset`,
          ),
        );
      let u = [],
        p = this.props.realms || [n.k_ESteamRealmGlobal];
      for (let t of d.GetLanguageListForRealms(p)) {
        if (r && !r(t)) continue;
        let n = e(t),
          i = f(`#Language_` + n),
          a = !!(s && s(t));
        u.push({ eLang: t, sLocName: i, bSupported: a });
      }
      u.sort((e, t) =>
        e.bSupported == t.bSupported
          ? e.sLocName.localeCompare(t.sLocName)
          : e.bSupported
            ? -1
            : 1,
      );
      let m = !1;
      for (let e of u) {
        e.bSupported != m &&
          (t.push(
            (0, y.jsx)(
              `option`,
              {
                className: h,
                disabled: !0,
                children: f(
                  e.bSupported
                    ? `#LanguageGroup_Supported`
                    : `#LanguageGroup_Unsupported`,
                ),
              },
              e.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
            ),
          ),
          (m = e.bSupported));
        let n = i && i(e.eLang),
          r = a && a(e.eLang),
          s = e.sLocName;
        (r &&
          r !== 0 &&
          ((s += ` `),
          (s += f(
            `#Language_Last_Update`,
            l(r) + ` @ ` + c(r, { bForce24HourClock: !1 }),
          ))),
          t.push(
            (0, y.jsx)(
              `option`,
              {
                value: e.eLang,
                className: o({ [g]: n }, (e.bSupported, void 0)),
                children: s,
              },
              `langpicker` + e.eLang + (n ? `_hasdata` : ``),
            ),
          ));
      }
      return t;
    }
    OnLanguageChange(e) {
      let { fnOnLanguageChanged: t, selectedLang: n } = this.props,
        r = Number.parseInt(e.currentTarget.value);
      r != n && t && t(r);
    }
    render() {
      let { selectedLang: e, bDisabled: t, strTooltip: n } = this.props,
        r = this.GenerateLanguageOptions();
      return (0, y.jsx)(u, {
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
(i([s], b.prototype, `OnLanguageChange`, null), (b = i([p], b)));
function x(e) {
  let [t, n] = m(() => [
    _.Get().GetHasLocalizationContext(),
    _.Get().GetCurEditLanguage(),
  ]);
  return (0, y.jsx)(b, {
    selectedLang: n,
    fnLangHasData: _.Get().BHasLanguageData,
    fnOnLanguageChanged: _.Get().SetCurEditLanguage,
    bDisabled: !t,
    strTooltip: t ? void 0 : f(`#Localization_EditorNotInFocus`),
  });
}
function S(e) {
  let { fnLangHasData: t } = e;
  v.useEffect(
    () => (
      _.Get().SetHasLocalizationContext(!0),
      () => _.Get().SetHasLocalizationContext(!1)
    ),
    [],
  );
  let n = m(() => {
    let e = [];
    for (let n = 0; n < 32; ++n) e[n] = !!(t && t(n));
    return e;
  });
  return (
    v.useEffect(() => _.Get().SetHasLanguage(n), [n]),
    (0, y.jsx)(y.Fragment, {})
  );
}
export { b as n, x as r, S as t };

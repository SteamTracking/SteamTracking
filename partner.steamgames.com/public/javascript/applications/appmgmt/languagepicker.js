/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  _t as t,
  ct as n,
  gt as r,
  k as i,
  kt as a,
  on as o,
} from "./mobx.esm.js";
import { Rt as s } from "./src.js";
import { Ta as c, ea as l, ka as u, oa as d, pn as f } from "./dialogs.js";
import { C as p, w as m } from "./react-router.js";
import { t as h } from "./editorlocalizationstore.js";
import { D as g, b as _ } from "./partnereventshared.module.js";
var v = o(a()),
  y = t(),
  b = class extends v.Component {
    GenerateLanguageOptions() {
      let t = [],
        {
          fnFilterLanguage: i,
          fnLangHasData: a,
          fnLastUpdateRTime: o,
          fnIsLangSupported: s,
        } = this.props;
      this.props.bAllowUnsetOption &&
        t.push(
          (0, y.jsx)(
            `option`,
            { value: -1, children: d(`#language_selection_none`) },
            `langpicker_unset`,
          ),
        );
      let f = [],
        p = this.props.realms || [r.k_ESteamRealmGlobal];
      for (let e of l.GetLanguageListForRealms(p)) {
        if (i && !i(e)) continue;
        let t = n(e),
          r = d(`#Language_` + t),
          a = !!(s && s(e));
        f.push({ eLang: e, sLocName: r, bSupported: a });
      }
      f.sort((e, t) =>
        e.bSupported == t.bSupported
          ? e.sLocName.localeCompare(t.sLocName)
          : e.bSupported
            ? -1
            : 1,
      );
      let m = !1;
      for (let n of f) {
        n.bSupported != m &&
          (t.push(
            (0, y.jsx)(
              `option`,
              {
                className: g,
                disabled: !0,
                children: d(
                  n.bSupported
                    ? `#LanguageGroup_Supported`
                    : `#LanguageGroup_Unsupported`,
                ),
              },
              n.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
            ),
          ),
          (m = n.bSupported));
        let r = a && a(n.eLang),
          i = o && o(n.eLang),
          s = n.sLocName;
        i &&
          i !== 0 &&
          ((s += ` `),
          (s += d(
            `#Language_Last_Update`,
            u(i) + ` @ ` + c(i, { bForce24HourClock: !1 }),
          ))),
          t.push(
            (0, y.jsx)(
              `option`,
              {
                value: n.eLang,
                className: e({ [_]: r }, (n.bSupported, void 0)),
                children: s,
              },
              `langpicker` + n.eLang + (r ? `_hasdata` : ``),
            ),
          );
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
      return (0, y.jsx)(f, {
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
i([s], b.prototype, `OnLanguageChange`, null), (b = i([p], b));
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
    strTooltip: t ? void 0 : d(`#Localization_EditorNotInFocus`),
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

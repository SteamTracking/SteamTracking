/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { bf as e, wt as t } from "./main.js";
function n(e, t) {
  let n = t.bUseBinary1K ? 1024 : 1e3,
    r = n * n,
    i = r * n,
    a = i * n;
  return e > a
    ? { nNum: e / a, strPrefix: `Tera` }
    : e > i
      ? { nNum: e / i, strPrefix: `Giga` }
      : e > r
        ? { nNum: e / r, strPrefix: `Mega` }
        : e > n
          ? { nNum: e / n, strPrefix: `Kilo` }
          : { nNum: e, strPrefix: `` };
}
function r(r, i, a, o) {
  let s = i;
  s =
    typeof s == `number`
      ? {
          nDigitsAfterDecimal: i,
          bUseBinary1K: a || a === void 0,
          bValueIsInBytes: !o,
          bValueIsRate: o,
          nMinimumDigitsAfterDecimal: 0,
        }
      : {
          nDigitsAfterDecimal: 2,
          bUseBinary1K: !0,
          bValueIsInBytes: !0,
          bValueIsRate: !1,
          nMinimumDigitsAfterDecimal: 0,
          ...s,
        };
  let { nNum: c, strPrefix: l } = n(r, s),
    u = `#${l}${s.bValueIsInBytes ? `bytes` : `bits`}${s.bValueIsRate ? `_PerSecond` : ``}`;
  return e.Localize(
    u,
    c.toLocaleString(t(), {
      minimumFractionDigits: s.nMinimumDigitsAfterDecimal,
      maximumFractionDigits: s.nDigitsAfterDecimal,
    }),
  );
}
function i(e, n = 0) {
  let r;
  return (
    n && (r = { maximumFractionDigits: n }),
    e ? e.toLocaleString(t(), r) : `` + e
  );
}
export { r as n, i as t };

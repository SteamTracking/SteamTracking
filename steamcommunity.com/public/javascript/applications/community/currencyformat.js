/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = {
    0: {},
    1: { strSymbol: `$` },
    2: { strSymbol: `£` },
    3: { strSymbol: `€`, strDecimalSymbol: `,`, strThousandsSeparator: ` ` },
    4: { strSymbol: `CHF` },
    5: {
      strSymbol: `руб.`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ``,
    },
    6: {
      strSymbol: `zł`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    7: {
      strSymbol: `R$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    8: { strSymbol: `¥`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    9: {
      strSymbol: `kr`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    10: {
      strSymbol: `Rp`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    11: { strSymbol: `RM` },
    12: { strSymbol: `P` },
    13: { strSymbol: `S$` },
    14: { strSymbol: `฿` },
    15: {
      strSymbol: `₫`,
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    16: { strSymbol: `₩`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    17: {
      strSymbol: `TL`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    18: {
      strSymbol: `₴`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    19: { strSymbol: `Mex$`, bSpaceForSymbol: !0 },
    20: { strSymbol: `CDN$`, bSpaceForSymbol: !0 },
    21: { strSymbol: `A$`, bSpaceForSymbol: !0 },
    22: { strSymbol: `NZ$`, bSpaceForSymbol: !0 },
    23: { strSymbol: `¥`, bSpaceForSymbol: !0 },
    24: { strSymbol: `₹`, bSpaceForSymbol: !0, bWholeUnitsOnly: !0 },
    25: {
      strSymbol: `CLP$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    26: { strSymbol: `S/.` },
    27: {
      strSymbol: `COL$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    28: {
      strSymbol: `R`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    29: { strSymbol: `HK$`, bSpaceForSymbol: !0 },
    30: { strSymbol: `NT$`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    31: { strSymbol: `SR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    32: { strSymbol: `AED`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    33: { strSymbol: `kr`, bSpaceForSymbol: !0, bSuffixSymbol: !0 },
    34: {
      strSymbol: `ARS$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    35: { strSymbol: `₪` },
    36: { strSymbol: `Br` },
    37: {
      strSymbol: `₸`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    38: { strSymbol: `KD`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    39: { strSymbol: `QR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    40: {
      strSymbol: `₡`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    41: {
      strSymbol: `$U`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    42: { strSymbol: `лв`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    43: { strSymbol: `kn`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    44: { strSymbol: `Kč`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    45: { strSymbol: `kr.`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    46: { strSymbol: `Ft`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    47: { strSymbol: `lei`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    48: {},
  },
  t = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function n(n) {
  return { ...t, ...e[n], eCurrency: n };
}
function r(e, t) {
  return i(e, n(t));
}
function i(e, t) {
  let {
      strSymbol: n,
      bSuffixSymbol: r,
      bSpaceForSymbol: i,
      bWholeUnitsOnly: a,
      strDecimalSymbol: o,
      strThousandsSeparator: s,
    } = t,
    c = e < 0,
    l = a && e % 100 == 0;
  c && (e = -e);
  let u = [];
  for (let t = 0; t < 2; t++) l || u.push(e % 10), (e = Math.floor(e / 10));
  !l && o && u.push(o);
  let d = 0;
  do
    d++ % 3 == 0 && d > 2 && s && u.push(s),
      u.push(e % 10),
      (e = Math.floor(e / 10));
  while (e > 0);
  let f = u.reverse().join(``),
    p = i ? ` ` : ``,
    m = c ? `-` : ``;
  return r ? `${m}${f}${p}${n}` : `${m}${n}${p}${f}`;
}
export { i as n, n as r, r as t };

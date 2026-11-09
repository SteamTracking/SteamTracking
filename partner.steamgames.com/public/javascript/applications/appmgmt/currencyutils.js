/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { $t as e } from "./mobx.esm.js";
var t = [17, 34];
function n() {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 37, 38, 39, 40, 41,
  ];
}
function r() {
  return [...n(), ...t, 33, 42, 43, 44, 45, 46, 47];
}
function i() {
  return [1, 2, 3, 4];
}
function a(e) {
  switch (e?.toUpperCase()) {
    case `AE`:
      return 32;
    case `AU`:
      return 21;
    case `BR`:
      return 7;
    case `CA`:
      return 20;
    case `CH`:
    case `LI`:
      return 4;
    case `CL`:
      return 25;
    case `CN`:
    case `XC`:
      return 23;
    case `CO`:
      return 27;
    case `CR`:
      return 40;
    case `AD`:
    case `AL`:
    case `AT`:
    case `AX`:
    case `BA`:
    case `BE`:
    case `BG`:
    case `CY`:
    case `CZ`:
    case `DE`:
    case `DK`:
    case `EE`:
    case `ES`:
    case `FI`:
    case `FO`:
    case `FR`:
    case `GF`:
    case `GI`:
    case `GP`:
    case `GR`:
    case `HR`:
    case `HU`:
    case `IE`:
    case `IT`:
    case `LT`:
    case `LU`:
    case `LV`:
    case `MC`:
    case `ME`:
    case `MK`:
    case `MQ`:
    case `MT`:
    case `NC`:
    case `NL`:
    case `PF`:
    case `PT`:
    case `RE`:
    case `RO`:
    case `RS`:
    case `SE`:
    case `SI`:
    case `SJ`:
    case `SK`:
    case `SM`:
    case `VA`:
      return 3;
    case `GB`:
    case `GG`:
    case `GS`:
    case `IM`:
    case `JE`:
      return 2;
    case `HK`:
      return 29;
    case `ID`:
      return 10;
    case `IL`:
      return 35;
    case `IN`:
      return 24;
    case `JP`:
      return 8;
    case `KR`:
      return 16;
    case `KW`:
      return 38;
    case `KZ`:
      return 37;
    case `MX`:
      return 19;
    case `MY`:
      return 11;
    case `NO`:
      return 9;
    case `NZ`:
      return 22;
    case `PE`:
      return 26;
    case `PH`:
      return 12;
    case `PL`:
      return 6;
    case `QA`:
      return 39;
    case `RU`:
      return 5;
    case `SA`:
      return 31;
    case `SG`:
      return 13;
    case `TH`:
      return 14;
    case `TW`:
      return 30;
    case `UA`:
      return 18;
    case `AF`:
    case `AG`:
    case `AI`:
    case `AM`:
    case `AN`:
    case `AO`:
    case `AQ`:
    case `AR`:
    case `AS`:
    case `AW`:
    case `AZ`:
    case `BB`:
    case `BD`:
    case `BF`:
    case `BH`:
    case `BI`:
    case `BJ`:
    case `BM`:
    case `BN`:
    case `BO`:
    case `BS`:
    case `BT`:
    case `BV`:
    case `BW`:
    case `BY`:
    case `BZ`:
    case `CC`:
    case `CD`:
    case `CF`:
    case `CG`:
    case `CI`:
    case `CK`:
    case `CM`:
    case `CV`:
    case `CX`:
    case `DJ`:
    case `DM`:
    case `DO`:
    case `DZ`:
    case `EC`:
    case `EG`:
    case `EH`:
    case `ER`:
    case `ET`:
    case `FJ`:
    case `FK`:
    case `FM`:
    case `GA`:
    case `GD`:
    case `GE`:
    case `GH`:
    case `GL`:
    case `GM`:
    case `GN`:
    case `GQ`:
    case `GT`:
    case `GU`:
    case `GW`:
    case `GY`:
    case `HM`:
    case `HN`:
    case `HT`:
    case `IO`:
    case `IQ`:
    case `IS`:
    case `JM`:
    case `JO`:
    case `KE`:
    case `KG`:
    case `KH`:
    case `KI`:
    case `KM`:
    case `KN`:
    case `KY`:
    case `LA`:
    case `LB`:
    case `LC`:
    case `LK`:
    case `LR`:
    case `LS`:
    case `LY`:
    case `MA`:
    case `MD`:
    case `MG`:
    case `MH`:
    case `ML`:
    case `MM`:
    case `MN`:
    case `MO`:
    case `MP`:
    case `MR`:
    case `MS`:
    case `MU`:
    case `MV`:
    case `MW`:
    case `MZ`:
    case `NA`:
    case `NE`:
    case `NF`:
    case `NG`:
    case `NI`:
    case `NP`:
    case `NR`:
    case `NU`:
    case `OM`:
    case `PA`:
    case `PG`:
    case `PK`:
    case `PM`:
    case `PN`:
    case `PR`:
    case `PS`:
    case `PW`:
    case `PY`:
    case `RW`:
    case `SB`:
    case `SC`:
    case `SD`:
    case `SH`:
    case `SL`:
    case `SN`:
    case `SO`:
    case `SR`:
    case `ST`:
    case `SV`:
    case `SY`:
    case `SZ`:
    case `TC`:
    case `TD`:
    case `TF`:
    case `TG`:
    case `TJ`:
    case `TK`:
    case `TL`:
    case `TM`:
    case `TN`:
    case `TO`:
    case `TR`:
    case `TT`:
    case `TV`:
    case `TZ`:
    case `UG`:
    case `UM`:
    case `US`:
    case `UZ`:
    case `VC`:
    case `VE`:
    case `VG`:
    case `VI`:
    case `VU`:
    case `WF`:
    case `WS`:
    case `YE`:
    case `YT`:
    case `ZM`:
    case `ZW`:
      return 1;
    case `UY`:
      return 41;
    case `VN`:
      return 15;
    case `ZA`:
      return 28;
    default:
      return console.assert(!1, `Unhandled country code: ${e}`), 1;
  }
}
function o(e) {
  switch (e) {
    case 2:
      return `GBP`;
    case 3:
      return `EUR`;
    case 4:
      return `CHF`;
    case 5:
      return `RUB`;
    case 6:
      return `PLN`;
    case 7:
      return `BRL`;
    case 8:
      return `JPY`;
    case 9:
      return `NOK`;
    case 10:
      return `IDR`;
    case 11:
      return `MYR`;
    case 12:
      return `PHP`;
    case 13:
      return `SGD`;
    case 14:
      return `THB`;
    case 15:
      return `VND`;
    case 16:
      return `KRW`;
    case 17:
      return `TRY`;
    case 18:
      return `UAH`;
    case 19:
      return `MXN`;
    case 20:
      return `CAD`;
    case 21:
      return `AUD`;
    case 22:
      return `NZD`;
    case 23:
      return `CNY`;
    case 24:
      return `INR`;
    case 25:
      return `CLP`;
    case 26:
      return `PEN`;
    case 27:
      return `COP`;
    case 28:
      return `ZAR`;
    case 29:
      return `HKD`;
    case 30:
      return `TWD`;
    case 31:
      return `SAR`;
    case 32:
      return `AED`;
    case 33:
      return `SEK`;
    case 34:
      return `ARS`;
    case 35:
      return `ILS`;
    case 36:
      return `BYN`;
    case 37:
      return `KZT`;
    case 38:
      return `KWD`;
    case 39:
      return `QAR`;
    case 40:
      return `CRC`;
    case 41:
      return `UYU`;
    case 42:
      return `BGN`;
    case 43:
      return `HRK`;
    case 44:
      return `CZK`;
    case 45:
      return `DKK`;
    case 46:
      return `HUF`;
    case 47:
      return `RON`;
    default:
      return `USD`;
  }
}
function s(e) {
  switch (e) {
    case 1:
      return `US Dollar`;
    case 2:
      return `GB Pounds`;
    case 3:
      return `Euros`;
    case 4:
      return `Swiss Francs`;
    case 5:
      return `Russian Rubles`;
    case 6:
      return `Polish zloty`;
    case 7:
      return `Brazilian Reals`;
    case 8:
      return `Japanese Yen`;
    case 9:
      return `Norwegian Krone`;
    case 10:
      return `Indonesian Rupiah`;
    case 11:
      return `Malaysian Ringgit`;
    case 12:
      return `Philippine Peso`;
    case 13:
      return `Singapore Dollar`;
    case 14:
      return `Thai Baht`;
    case 15:
      return `Vietnamese Dong`;
    case 16:
      return `Korean Won`;
    case 17:
      return `Turkish Lira`;
    case 18:
      return `Ukrainian Hryvnia`;
    case 19:
      return `Mexican Peso`;
    case 20:
      return `Canadian Dollar`;
    case 21:
      return `Australian Dollar`;
    case 22:
      return `New Zealand Dollar`;
    case 23:
      return `Chinese Yuan`;
    case 24:
      return `Indian Rupee`;
    case 25:
      return `Chilean Peso`;
    case 26:
      return `Peruvian Sol`;
    case 27:
      return `Colombian Peso`;
    case 28:
      return `South African Rand`;
    case 29:
      return `Hong Kong Dollar`;
    case 30:
      return `Taiwanese Dollar`;
    case 31:
      return `Saudi Arabian Riyal`;
    case 32:
      return `Emirati Dirham`;
    case 33:
      return `Swedish Krona`;
    case 34:
      return `Argentine Peso`;
    case 35:
      return `Israeli New Shequel`;
    case 36:
      return `Belarusian Ruble`;
    case 37:
      return `Kazakhstani Tenge`;
    case 38:
      return `Kuwaiti Dinar`;
    case 39:
      return `Qatari Rial`;
    case 40:
      return `Costa Rican Colon`;
    case 41:
      return `Uruguayan Peso`;
    case 42:
      return `Bulgarian lev`;
    case 43:
      return `Croatian kuna`;
    case 44:
      return `Czech koruna`;
    case 45:
      return `Danish krone`;
    case 46:
      return `Hungarian forint`;
    case 47:
      return `Romanian leu`;
    default:
      return ``;
  }
}
function c(e, t = 0) {
  switch (e) {
    case 2:
      return `gbp`;
    case 3:
      return `eur`;
    case 4:
      return `chf`;
    case 5:
      return `rub`;
    case 6:
      return `pln`;
    case 7:
      return `brl`;
    case 8:
      return `jpy`;
    case 9:
      return `nok`;
    case 10:
      return `idr`;
    case 11:
      return `myr`;
    case 12:
      return `php`;
    case 13:
      return `sgd`;
    case 14:
      return `thb`;
    case 15:
      return `vnd`;
    case 16:
      return `krw`;
    case 17:
      return `try`;
    case 18:
      return `uah`;
    case 19:
      return `mxn`;
    case 20:
      return `cad`;
    case 21:
      return `aud`;
    case 22:
      return `nzd`;
    case 23:
      return `cny`;
    case 24:
      return `inr`;
    case 25:
      return `clp`;
    case 26:
      return `pen`;
    case 27:
      return `cop`;
    case 28:
      return `zar`;
    case 29:
      return `hkd`;
    case 30:
      return `twd`;
    case 31:
      return `sar`;
    case 32:
      return `aed`;
    case 33:
      return `sek`;
    case 34:
      return `ars`;
    case 35:
      return `ils`;
    case 36:
      return `byn`;
    case 37:
      return `kzt`;
    case 38:
      return `kwd`;
    case 39:
      return `qar`;
    case 40:
      return `crc`;
    case 41:
      return `uyu`;
    case 42:
      return `bgn`;
    case 43:
      return `hrk`;
    case 44:
      return `czk`;
    case 45:
      return `dkk`;
    case 46:
      return `huf`;
    case 47:
      return `ron`;
    default:
      return t == 1
        ? `usd_cis`
        : t == 2
          ? `usd_sasia`
          : t == 3
            ? `usd_latam`
            : t == 4
              ? `usd_mena`
              : `usd`;
  }
}
function l(e) {
  switch (e) {
    case 1:
      return `CIS`;
    case 2:
      return `SASIA`;
    case 3:
      return `LATAM`;
    case 4:
      return `MENA`;
  }
  return `Unknown`;
}
function u(t) {
  switch (t) {
    case `USD`:
      return 1;
    case `GBP`:
      return 2;
    case `EUR`:
      return 3;
    case `CHF`:
      return 4;
    case `RUB`:
      return 5;
    case `PLN`:
      return 6;
    case `BRL`:
      return 7;
    case `JPY`:
      return 8;
    case `NOK`:
      return 9;
    case `IDR`:
      return 10;
    case `MYR`:
      return 11;
    case `PHP`:
      return 12;
    case `SGD`:
      return 13;
    case `THB`:
      return 14;
    case `VND`:
      return 15;
    case `KRW`:
      return 16;
    case `TRY`:
      return 17;
    case `UAH`:
      return 18;
    case `MXN`:
      return 19;
    case `CAD`:
      return 20;
    case `AUD`:
      return 21;
    case `NZD`:
      return 22;
    case `CNY`:
      return 23;
    case `INR`:
      return 24;
    case `CLP`:
      return 25;
    case `PEN`:
      return 26;
    case `COP`:
      return 27;
    case `ZAR`:
      return 28;
    case `HKD`:
      return 29;
    case `TWD`:
      return 30;
    case `SAR`:
      return 31;
    case `AED`:
      return 32;
    case `SEK`:
      return 33;
    case `ARS`:
      return 34;
    case `ILS`:
      return 35;
    case `BYN`:
      return 36;
    case `KZT`:
      return 37;
    case `KWD`:
      return 38;
    case `QAR`:
      return 39;
    case `CRC`:
      return 40;
    case `UYU`:
      return 41;
    case `BGN`:
      return 42;
    case `HRK`:
      return 43;
    case `CZK`:
      return 44;
    case `DKK`:
      return 45;
    case `HUF`:
      return 46;
    case `RON`:
      return 47;
    case `USD_CIS`:
    case `USD_MENA`:
    case `USD_LATAM`:
    case `USD_SASIA`:
      return 1;
    default:
      return d(t)
        ? u(t.substring(0, 3))
        : Number.isInteger(Number(t))
          ? Number(t)
          : (e(!1, `ASCIICurrencyCodeToECurrencyCode unexpected code ${t}`), 0);
  }
}
function d(e) {
  return e.length == 6;
}
function f(e) {
  return { eCurrencyCode: u(e.slice(0, 3)), strCountryCode: e.slice(4, 6) };
}
function p(e) {
  return `${s(u(e.toUpperCase()))} (${e})`;
}
export {
  s as a,
  f as c,
  n as d,
  r as f,
  o as i,
  p as l,
  d as n,
  c as o,
  a as r,
  l as s,
  u as t,
  i as u,
};

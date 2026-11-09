/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ga as e } from "./dialogs.js";
import { D as t } from "./react-router.js";
var n = { DefaultFancyTable: `_9B0qMqxa5jA-`, NoColumnBorders: `CFDvy9hAlHM-` },
  r = {};
((r.arabic = () =>
  e(() => import(`./countries_arabic.js`), [], import.meta.url)),
  (r.brazilian = () =>
    e(() => import(`./countries_brazilian.js`), [], import.meta.url)),
  (r.bulgarian = () =>
    e(() => import(`./countries_bulgarian.js`), [], import.meta.url)),
  (r.czech = () =>
    e(() => import(`./countries_czech.js`), [], import.meta.url)),
  (r.danish = () =>
    e(() => import(`./countries_danish.js`), [], import.meta.url)),
  (r.dutch = () =>
    e(() => import(`./countries_dutch.js`), [], import.meta.url)),
  (r.english = () =>
    e(() => import(`./countries_english.js`), [], import.meta.url)),
  (r.finnish = () =>
    e(() => import(`./countries_finnish.js`), [], import.meta.url)),
  (r.french = () =>
    e(() => import(`./countries_french.js`), [], import.meta.url)),
  (r.german = () =>
    e(() => import(`./countries_german.js`), [], import.meta.url)),
  (r.greek = () =>
    e(() => import(`./countries_greek.js`), [], import.meta.url)),
  (r.hungarian = () =>
    e(() => import(`./countries_hungarian.js`), [], import.meta.url)),
  (r.indonesian = () =>
    e(() => import(`./countries_indonesian.js`), [], import.meta.url)),
  (r.italian = () =>
    e(() => import(`./countries_italian.js`), [], import.meta.url)),
  (r.japanese = () =>
    e(() => import(`./countries_japanese.js`), [], import.meta.url)),
  (r.koreana = () =>
    e(() => import(`./countries_koreana.js`), [], import.meta.url)),
  (r.latam = () =>
    e(() => import(`./countries_latam.js`), [], import.meta.url)),
  (r.malay = () =>
    e(() => import(`./countries_malay.js`), [], import.meta.url)),
  (r.norwegian = () =>
    e(() => import(`./countries_norwegian.js`), [], import.meta.url)),
  (r.polish = () =>
    e(() => import(`./countries_polish.js`), [], import.meta.url)),
  (r.portuguese = () =>
    e(() => import(`./countries_portuguese.js`), [], import.meta.url)),
  (r.romanian = () =>
    e(() => import(`./countries_romanian.js`), [], import.meta.url)),
  (r.russian = () =>
    e(() => import(`./countries_russian.js`), [], import.meta.url)),
  (r.sc_schinese = () =>
    e(() => import(`./countries_sc_schinese.js`), [], import.meta.url)),
  (r.schinese = () =>
    e(() => import(`./countries_schinese.js`), [], import.meta.url)),
  (r.spanish = () =>
    e(() => import(`./countries_spanish.js`), [], import.meta.url)),
  (r.swedish = () =>
    e(() => import(`./countries_swedish.js`), [], import.meta.url)),
  (r.tchinese = () =>
    e(() => import(`./countries_tchinese.js`), [], import.meta.url)),
  (r.thai = () => e(() => import(`./countries_thai.js`), [], import.meta.url)),
  (r.turkish = () =>
    e(() => import(`./countries_turkish.js`), [], import.meta.url)),
  (r.ukrainian = () =>
    e(() => import(`./countries_ukrainian.js`), [], import.meta.url)),
  (r.vietnamese = () =>
    e(() => import(`./countries_vietnamese.js`), [], import.meta.url)));
async function i(e) {
  if (r[e]) return await r[e]();
}
var a = t(i);
function o(e) {
  return a.Localize(`#Steam_Country_${e}`);
}
export { n, o as t };

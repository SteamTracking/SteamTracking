/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ga as e } from "./dialogs.js";
import { D as t } from "./react-router.js";
var n = {};
(n.arabic = () => e(() => import(`./pricing_arabic.js`), [], import.meta.url)),
  (n.brazilian = () =>
    e(() => import(`./pricing_brazilian.js`), [], import.meta.url)),
  (n.bulgarian = () =>
    e(() => import(`./pricing_bulgarian.js`), [], import.meta.url)),
  (n.czech = () => e(() => import(`./pricing_czech.js`), [], import.meta.url)),
  (n.danish = () =>
    e(() => import(`./pricing_danish.js`), [], import.meta.url)),
  (n.dutch = () => e(() => import(`./pricing_dutch.js`), [], import.meta.url)),
  (n.english = () =>
    e(() => import(`./pricing_english.js`), [], import.meta.url)),
  (n.finnish = () =>
    e(() => import(`./pricing_finnish.js`), [], import.meta.url)),
  (n.french = () =>
    e(() => import(`./pricing_french.js`), [], import.meta.url)),
  (n.german = () =>
    e(() => import(`./pricing_german.js`), [], import.meta.url)),
  (n.greek = () => e(() => import(`./pricing_greek.js`), [], import.meta.url)),
  (n.hungarian = () =>
    e(() => import(`./pricing_hungarian.js`), [], import.meta.url)),
  (n.indonesian = () =>
    e(() => import(`./pricing_indonesian.js`), [], import.meta.url)),
  (n.italian = () =>
    e(() => import(`./pricing_italian.js`), [], import.meta.url)),
  (n.japanese = () =>
    e(() => import(`./pricing_japanese.js`), [], import.meta.url)),
  (n.koreana = () =>
    e(() => import(`./pricing_koreana.js`), [], import.meta.url)),
  (n.latam = () => e(() => import(`./pricing_latam.js`), [], import.meta.url)),
  (n.malay = () => e(() => import(`./pricing_malay.js`), [], import.meta.url)),
  (n.norwegian = () =>
    e(() => import(`./pricing_norwegian.js`), [], import.meta.url)),
  (n.polish = () =>
    e(() => import(`./pricing_polish.js`), [], import.meta.url)),
  (n.portuguese = () =>
    e(() => import(`./pricing_portuguese.js`), [], import.meta.url)),
  (n.romanian = () =>
    e(() => import(`./pricing_romanian.js`), [], import.meta.url)),
  (n.russian = () =>
    e(() => import(`./pricing_russian.js`), [], import.meta.url)),
  (n.sc_schinese = () =>
    e(() => import(`./pricing_sc_schinese.js`), [], import.meta.url)),
  (n.schinese = () =>
    e(() => import(`./pricing_schinese.js`), [], import.meta.url)),
  (n.spanish = () =>
    e(() => import(`./pricing_spanish.js`), [], import.meta.url)),
  (n.swedish = () =>
    e(() => import(`./pricing_swedish.js`), [], import.meta.url)),
  (n.tchinese = () =>
    e(() => import(`./pricing_tchinese.js`), [], import.meta.url)),
  (n.thai = () => e(() => import(`./pricing_thai.js`), [], import.meta.url)),
  (n.turkish = () =>
    e(() => import(`./pricing_turkish.js`), [], import.meta.url)),
  (n.ukrainian = () =>
    e(() => import(`./pricing_ukrainian.js`), [], import.meta.url)),
  (n.vietnamese = () =>
    e(() => import(`./pricing_vietnamese.js`), [], import.meta.url));
async function r(e) {
  if (n[e]) return await n[e]();
}
var i = t(r);
export { i as t };

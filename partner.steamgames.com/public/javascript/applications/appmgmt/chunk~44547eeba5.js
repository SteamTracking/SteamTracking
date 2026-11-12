/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ya as e } from "./chunk~1fa4b8f2ff.js";
import { E as t } from "./chunk~44f252525d.js";
var n = { DefaultFancyTable: `_9B0qMqxa5jA-`, NoColumnBorders: `CFDvy9hAlHM-` },
  r = {};
((r.arabic = () =>
  e(() => import(`./chunk~31400681d6.js`), [], import.meta.url)),
  (r.brazilian = () =>
    e(() => import(`./chunk~b18e8f8364.js`), [], import.meta.url)),
  (r.bulgarian = () =>
    e(() => import(`./chunk~158e70ef8c.js`), [], import.meta.url)),
  (r.czech = () =>
    e(() => import(`./chunk~fd8035d5d3.js`), [], import.meta.url)),
  (r.danish = () =>
    e(() => import(`./chunk~1683ec39b1.js`), [], import.meta.url)),
  (r.dutch = () =>
    e(() => import(`./chunk~9b568303d6.js`), [], import.meta.url)),
  (r.english = () =>
    e(() => import(`./chunk~a29b3f99c4.js`), [], import.meta.url)),
  (r.finnish = () =>
    e(() => import(`./chunk~6724c6a061.js`), [], import.meta.url)),
  (r.french = () =>
    e(() => import(`./chunk~0467ed731f.js`), [], import.meta.url)),
  (r.german = () =>
    e(() => import(`./chunk~e55a81b04b.js`), [], import.meta.url)),
  (r.greek = () =>
    e(() => import(`./chunk~56d177e164.js`), [], import.meta.url)),
  (r.hungarian = () =>
    e(() => import(`./chunk~be2d74d49e.js`), [], import.meta.url)),
  (r.indonesian = () =>
    e(() => import(`./chunk~7c4c5961d8.js`), [], import.meta.url)),
  (r.italian = () =>
    e(() => import(`./chunk~3c7d4a6415.js`), [], import.meta.url)),
  (r.japanese = () =>
    e(() => import(`./chunk~809a839435.js`), [], import.meta.url)),
  (r.koreana = () =>
    e(() => import(`./chunk~e87e42740a.js`), [], import.meta.url)),
  (r.latam = () =>
    e(() => import(`./chunk~8d92491714.js`), [], import.meta.url)),
  (r.malay = () =>
    e(() => import(`./chunk~41c2e9e2ad.js`), [], import.meta.url)),
  (r.norwegian = () =>
    e(() => import(`./chunk~737d512fe2.js`), [], import.meta.url)),
  (r.polish = () =>
    e(() => import(`./chunk~cc31ab6f97.js`), [], import.meta.url)),
  (r.portuguese = () =>
    e(() => import(`./chunk~379baaa682.js`), [], import.meta.url)),
  (r.romanian = () =>
    e(() => import(`./chunk~3271a6031e.js`), [], import.meta.url)),
  (r.russian = () =>
    e(() => import(`./chunk~b6de2c5b31.js`), [], import.meta.url)),
  (r.sc_schinese = () =>
    e(() => import(`./chunk~5b03381abc.js`), [], import.meta.url)),
  (r.schinese = () =>
    e(() => import(`./chunk~2af23e11ce.js`), [], import.meta.url)),
  (r.spanish = () =>
    e(() => import(`./chunk~c834cd61b6.js`), [], import.meta.url)),
  (r.swedish = () =>
    e(() => import(`./chunk~106db14b04.js`), [], import.meta.url)),
  (r.tchinese = () =>
    e(() => import(`./chunk~d50e655c77.js`), [], import.meta.url)),
  (r.thai = () =>
    e(() => import(`./chunk~89f1628d9e.js`), [], import.meta.url)),
  (r.turkish = () =>
    e(() => import(`./chunk~bec19135d9.js`), [], import.meta.url)),
  (r.ukrainian = () =>
    e(() => import(`./chunk~fc44d7c4dd.js`), [], import.meta.url)),
  (r.vietnamese = () =>
    e(() => import(`./chunk~443a366eff.js`), [], import.meta.url)));
async function i(e) {
  if (r[e]) return await r[e]();
}
var a = t(i);
function o(e) {
  return a.Localize(`#Steam_Country_${e}`);
}
export { n, o as t };

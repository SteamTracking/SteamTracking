/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { st as t, tt as n } from "./chunk~01cfc309bf.js";
import { Jy as r, cx as i } from "./main.js";
var a = e(n()),
  o = [5, 2, 1, 4, 3];
function s(e) {
  let t = [];
  switch (e) {
    case 5:
      (t.push(2), t.push(1));
    case 1:
      t.push(4);
    case 4:
      t.push(3);
  }
  return t;
}
var c = new Map();
(c.set(2, 5), c.set(1, 5), c.set(4, 1), c.set(3, 4));
function l(e) {
  let t = [],
    n = c.get(e);
  return (n && (t.push(n), t.push(...l(n))), t);
}
function u(e) {
  return t({
    queryKey: [
      `examples_for_content_descriptor`,
      e === null ? null : e.valueOf(),
    ],
    queryFn: async () => {
      if (e === null) return [];
      let t = new URLSearchParams();
      return (
        t.append(`filter`, `examplesforcontentdescriptors`),
        t.append(`ignore_preferences`, `1`),
        t.append(`category1`, `992,994,998`),
        t.append(`descids`, e.valueOf().toString()),
        t.append(`json`, `1`),
        (
          await (0, a.default)({
            url: `${i.STORE_BASE_URL}search/results/?${t.toString()}`,
            method: `GET`,
            responseType: `json`,
          })
        ).data.items
      );
    },
  });
}
function d(e) {
  let t = null;
  switch (e) {
    case 5:
      t = `#ContentDescriptor_GeneralMatureContent`;
      break;
    case 2:
      t = `#ContentDescriptor_FrequentViolenceOrGore`;
      break;
    case 1:
      t = `#ContentDescriptor_NudityOrSexualContent`;
      break;
    case 4:
      t = `#ContentDescriptor_GratuitousNudityOrSexualContent`;
      break;
    case 3:
      t = `#ContentDescriptor_AdultOnlySexualContent`;
      break;
    default:
      throw `Invalid content descriptor.`;
  }
  return r(t);
}
function f(e, t = !1) {
  let n = ``;
  switch (e) {
    case 5:
      n += r(`#ContentDescriptor_GeneralMatureContent_Description`);
      break;
    case 2:
      n += r(`#ContentDescriptor_FrequentViolenceOrGore_Description`);
      break;
    case 1:
      n += r(`#ContentDescriptor_NudityOrSexualContent_Description`);
      break;
    case 4:
      n += r(`#ContentDescriptor_GratuitousNudityOrSexualContent_Description`);
      break;
    case 3:
      n += r(`#ContentDescriptor_AdultOnlySexualContent_Description`);
      break;
    default:
      throw `Invalid content descriptor.`;
  }
  return (
    t &&
      (e === 4 || e === 3) &&
      (n += ` ` + r(`#ContentDescriptor_Affirm18YearsOld`)),
    n
  );
}
export { o as a, d as i, s as n, u as o, f as r, l as t };

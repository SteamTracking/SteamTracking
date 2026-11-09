/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { t as e } from "./errors.js";
import { Hb as t } from "./main.js";
async function n(t, n) {
  let r = await t.json().catch(() => ``);
  if (!r || typeof r != `object`) throw new e(76, `Malformed ${n} response`);
  let i = r;
  if (i.success != 1) {
    let t = i.msg ? `: ${i.msg}` : ``;
    throw new e(i.success, `Error ${i.success} from ${n}${t}`);
  }
  return i;
}
function r(e) {
  e.set(`origin`, window.location.origin);
}
async function i(e, t, i) {
  let a = new FormData();
  Object.entries(i).forEach((e) => {
    if (Array.isArray(e[1])) for (let t of e[1]) a.append(e[0] + `[]`, t);
    else a.append(e[0], e[1]);
  });
  let o = new URL(e);
  return (
    r(o.searchParams),
    n(await fetch(o, { method: `POST`, body: a, credentials: `include` }), t)
  );
}
async function a(r, i, a) {
  if (!i) throw new e(8, `Bad appid`);
  let o = new URLSearchParams({ l: t.LANGUAGE, ...a });
  return n(
    await fetch(`${t.STORE_BASE_URL}${r}/${i}?${o.toString()}`, {
      credentials: `include`,
    }),
    r,
  );
}
export { i, a as n, n as r, r as t };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = `yFKurY5xd-8-`,
  t = `x-jXNI-s184-`,
  n = `aG-OF9IYlE8-`,
  r = `Ef8xOk5PJbg-`,
  i = `RTkq2WI2bK4-`,
  a = `_4vRcmVJ4gN8-`,
  o = `eEhfnGythD0-`,
  s = `qtB6DnXH-bs-`,
  c = `hBOvJNgGqZc-`,
  l = `tF-0HvIRqgQ-`,
  u = `_0EeL7NnvnjU-`,
  d = `L-E-bGfH1Sw-`,
  f = `-pV6HCIaaqM-`,
  p = `_4CGdt38X5eY-`,
  m = `MUbRKQFMT7E-`;
function h(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = g(e, t)),
    n
  );
}
function g(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > 1778623200;
}
export {
  n as a,
  a as c,
  o as d,
  l as f,
  d as g,
  f as h,
  t as i,
  p as l,
  m,
  u as n,
  r as o,
  c as p,
  e as r,
  i as s,
  h as t,
  s as u,
};

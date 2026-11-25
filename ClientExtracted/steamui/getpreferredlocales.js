import { Bn as e, in as t } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
function n() {
  return t().languages.map((e) => r(e.strISOCode));
}
function r(t) {
  return t.length == 2 && e.COUNTRY ? `${t}-${e.COUNTRY}` : t;
}
export { n as t };

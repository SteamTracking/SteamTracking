import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { t } from "./chunk~68b7e78d68.js?contenthash=BWLL7p8C";
import { k as n } from "./chunk~f25232ab1e.js?contenthash=jFptedFN";
import { t as r } from "./chunk~4406a7b793.js?contenthash=CjP8U_b4";
var i = e(r(), 1);
function a(e, t) {
  return new i.default(
    async (t) => {
      let r = [...t],
        i = await n.GetPlayerLinkDetails(e, { steamids: r }),
        a = new Map();
      return (
        i
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            a.set(t.public_data.steamid, t);
          }),
        r.map((e) => a.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function o(e) {
  return t(`PlayerLinkDetails`, () => a(e));
}
export { o as n, a as t };

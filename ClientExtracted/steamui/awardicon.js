import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { Ct as t, eo as n } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { t as r } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { a as i } from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import { t as a } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { on as o, sn as s } from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
var c = e(n()),
  l = `j69e3vZtBU0-`,
  u = `Zm1xh3yeapk-`,
  d = `XjD0MBkAhzY-`,
  f = `b3bQbkVwMm8-`,
  p = a();
function m(e) {
  let { reaction: n } = e,
    a = s(n.reaction_type);
  if (!a) return null;
  let c = t(`#RewardsReaction_Tooltip`, n.count || 0, a.localized_title);
  return (0, p.jsxs)(i, {
    className: r(u, l),
    toolTipContent: c,
    children: [
      (0, p.jsx)(`img`, { className: d, src: o(n.reaction_type, !1) }),
      n.count &&
        (0, p.jsx)(`div`, { className: `pzm1L8w9RaY-`, children: n.count }),
    ],
  });
}
var h = class extends c.PureComponent {
  render() {
    let e = [];
    for (let t of this.props.reactions)
      e.push((0, p.jsx)(m, { reaction: t }, t.reaction_type));
    return (0, p.jsx)(`div`, { className: f, children: e });
  }
};
export { h as AwardIconList };

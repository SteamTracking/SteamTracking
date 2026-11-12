/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  W as t,
  q as n,
  sn as r,
  vt as i,
} from "./chunk~de7f2df91c.js";
import { Nt as a } from "./chunk~1fa4b8f2ff.js";
import { a as o } from "./chunk~fa5480ab25.js";
import { k as s } from "./chunk~2f8c67b4de.js";
import { t as c } from "./chunk~74d773532d.js";
import { n as l, t as u } from "./chunk~c627bf7efa.js";
var d = r(e(), 1),
  f = i();
function p(e) {
  let { bHideTour: r, fnConversionMethodSelected: i } = e,
    {
      eConversionMethod: p,
      setConversionMethod: h,
      rgAvailableConversionMethods: g,
    } = o(),
    _ = (0, d.useMemo)(() => {
      let e = [];
      return (
        g.findIndex((e) => e == 1) >= 0 &&
          e.push({ label: c.Localize(`#ConversionMethod_Nuanced`), data: 1 }),
        g.findIndex((e) => e == 2) >= 0 &&
          e.push({ label: c.Localize(`#ConversionMethod_PPP`), data: 2 }),
        g.findIndex((e) => e == 3) >= 0 &&
          e.push({ label: c.Localize(`#ConversionMethod_FX`), data: 3 }),
        e
      );
    }, [g]);
  return _.length <= 1
    ? n.is_support
      ? (0, f.jsxs)(`div`, {
          className: s,
          children: [
            `Hiding Converison Method Widget; only have `,
            _.length,
            ` method in guideline.`,
          ],
        })
      : null
    : (0, f.jsx)(u, {
        name: `conversion_method`,
        stops: m(),
        active: r === void 0 || !r,
        children: (0, f.jsxs)(`div`, {
          children: [
            (0, f.jsx)(`div`, {
              children: c.LocalizeReact(
                `#ConversionMethod_Title`,
                (0, f.jsx)(`a`, {
                  href: `${t.PARTNER_BASE_URL}pricing/explorer`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  children: c.Localize(`#ConversionMethod_Link`),
                }),
              ),
            }),
            (0, f.jsx)(l, {
              tour: `conversion_method`,
              name: `convert_dropdown`,
              options: { position: `below`, offset: 18 },
              children: (0, f.jsx)(`div`, {
                children: (0, f.jsx)(a, {
                  rgOptions: _,
                  contextMenuPositionOptions: { bMatchWidth: !1 },
                  selectedOption: p,
                  onChange: (e) => {
                    (h(e.data), i && i(e.data));
                  },
                }),
              }),
            }),
          ],
        }),
      });
}
function m() {
  return [
    {
      id: `convert_dropdown`,
      title: c.Localize(`#Tour_ConversionMethod_Title`),
      content: [
        (0, f.jsxs)(
          `div`,
          { children: [c.Localize(`#Tour_ConversionMethod_Desc1`), ` `] },
          `convert_dropdown_1`,
        ),
        (0, f.jsxs)(
          `div`,
          {
            children: [
              c.Localize(`#Tour_ConversionMethod_Desc2`),
              `\xA0`,
              c.LocalizeReact(
                `#Tour_ConversionMethod_Desc3`,
                (0, f.jsx)(`a`, {
                  href: `${t.PARTNER_BASE_URL}pricing/explorer`,
                  children: c.Localize(`#Tour_ConversionMethod_Link`),
                }),
              ),
            ],
          },
          `convert_dropdown_1`,
        ),
      ],
    },
  ];
}
export { p as default };

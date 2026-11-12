import { _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~fa5480ab25.js";
import { _ } from "./chunk~2f8c67b4de.js";
import { _ } from "./chunk~74d773532d.js";
import { _, _ } from "./chunk~c627bf7efa.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { bHideTour: _, fnConversionMethodSelected: _ } = _,
    {
      eConversionMethod: _,
      setConversionMethod: _,
      rgAvailableConversionMethods: _,
    } = _(),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _.findIndex((_) => _ == 1) >= 0 &&
          _.push({
            label: _.Localize(`#ConversionMethod_Nuanced`),
            data: 1,
          }),
        _.findIndex((_) => _ == 2) >= 0 &&
          _.push({
            label: _.Localize(`#ConversionMethod_PPP`),
            data: 2,
          }),
        _.findIndex((_) => _ == 3) >= 0 &&
          _.push({
            label: _.Localize(`#ConversionMethod_FX`),
            data: 3,
          }),
        _
      );
    }, [_]);
  return _.length <= 1
    ? _.is_support
      ? (0, _.jsxs)(`div`, {
          className: _,
          children: [
            `Hiding Converison Method Widget; only have `,
            _.length,
            ` method in guideline.`,
          ],
        })
      : null
    : (0, _.jsx)(_, {
        name: `conversion_method`,
        stops: _(),
        active: _ === void 0 || !_,
        children: (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`div`, {
              children: _.LocalizeReact(
                `#ConversionMethod_Title`,
                (0, _.jsx)(`a`, {
                  href: `${_.PARTNER_BASE_URL}pricing/explorer`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  children: _.Localize(`#ConversionMethod_Link`),
                }),
              ),
            }),
            (0, _.jsx)(_, {
              tour: `conversion_method`,
              name: `convert_dropdown`,
              options: {
                position: `below`,
                offset: 18,
              },
              children: (0, _.jsx)(`div`, {
                children: (0, _.jsx)(_, {
                  rgOptions: _,
                  contextMenuPositionOptions: {
                    bMatchWidth: !1,
                  },
                  selectedOption: _,
                  onChange: (_) => {
                    (_(_.data), _ && _(_.data));
                  },
                }),
              }),
            }),
          ],
        }),
      });
}
function _() {
  return [
    {
      _: `convert_dropdown`,
      title: _.Localize(`#Tour_ConversionMethod_Title`),
      content: [
        (0, _.jsxs)(
          `div`,
          {
            children: [_.Localize(`#Tour_ConversionMethod_Desc1`), ` `],
          },
          `convert_dropdown_1`,
        ),
        (0, _.jsxs)(
          `div`,
          {
            children: [
              _.Localize(`#Tour_ConversionMethod_Desc2`),
              `\xA0`,
              _.LocalizeReact(
                `#Tour_ConversionMethod_Desc3`,
                (0, _.jsx)(`a`, {
                  href: `${_.PARTNER_BASE_URL}pricing/explorer`,
                  children: _.Localize(`#Tour_ConversionMethod_Link`),
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
export { _ as default };

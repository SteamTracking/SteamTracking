import "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _ } from "./storelink.js";
import { _ } from "./partnerevent.js";
import { _, _ } from "./saleghostsections.js";
import { _ } from "./carouselarrows.js";
import { _ } from "./eventbbcodeparser.module.js";
import { _ } from "./eventimageurlwithfallback.js";
import { _ } from "./lazyrenderchildren.js";
import { _ } from "./creatorhomestore.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./crosspromotesalelayouts.module.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
_();
var _ = _();
function _(_) {
  let {
      promotedSale: _,
      promotedSaleEvent: _,
      language: _,
      children: _,
      nItemsToFeature: _,
    } = _,
    _ = _(_ ? void 0 : _, _),
    _ = _ ?? _,
    _ = _?.strSaleURL,
    _ = _?.strCapsuleURL,
    _ = _?.strSummary,
    _ = _(),
    _ = _(),
    _ = _?.rtEndTime
      ? _(_.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: _,
        })
      : void 0;
  return (0, _.jsxs)(_, {
    ..._,
    className: _,
    "flow-children": `row`,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  url: _,
                  className: _,
                  bFocusable: !1,
                  children: _?.strName,
                }),
              }),
              _ &&
                (0, _.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: _(`#Sale_CrossPromoSale_NowThrough`, _),
                }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: _(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsxs)(_, {
              url: _,
              className: `oztjxXYIBAk-`,
              bFocusable: !!_,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, _.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: _,
                    }),
                  }),
              ],
            }),
          (0, _.jsx)(_, {
            nItemsToFeature: _,
            children: _,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function _(_, _) {
  let _ = _(_ ?? void 0, `capsule`, _);
  if (_)
    return {
      clanAccountID: _.clanSteamID.GetAccountID(),
      strEventGID: _.GID ?? ``,
      strName: _.GetNameWithFallback(_) ?? ``,
      rtEndTime: _.endTime || void 0,
      strSummary: _.GetSummaryWithFallback(_) || void 0,
      strCapsuleURL: _,
      strSaleURL: _(_) ?? void 0,
    };
}
function _(_) {
  let { children: _, nItemsToFeature: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: `\xA0`,
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: `\xA0`,
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
          }),
          (0, _.jsx)(_, {
            nItemsToFeature: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { children: _, nItemsToFeature: _ } = _,
    _ = _.logged_in
      ? _.Localize(`#Sale_CrossPromoSale_RecommendedFromEvent`)
      : _.LocalizePlural(
          `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
          _ ?? 0,
        );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let {
    section: _,
    bInGamepadUI: _,
    placeholderHeight: _,
    className: _,
    "flow-children": _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    placeholderHeight: _,
    className: _({
      [_]: !0,
      [_]: _(_),
      [_]: !0,
      SaleSectionForCustomCSS: !0,
      [_]: !0,
      [_]: !0,
    }),
    rootMargin: _,
    holdGamepadFocus: _,
    "flow-children": _,
    children: _,
  });
}
export { _, _ };

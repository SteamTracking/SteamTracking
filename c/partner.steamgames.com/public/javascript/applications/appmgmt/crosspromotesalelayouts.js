import { _, _, _, _ } from "./mobx.esm.js";
import { _, _, _ } from "./dialogs.js";
import { _, _ } from "./saletags.js";
import { _ } from "./eventimageurlwithfallback.js";
import { _ } from "./partnereventstore.js";
import "./partnereventutils.js";
import { _ } from "./creatorhomestore.js";
_();
var _ = `Es-UANTRhdg-`,
  _ = `FsYxDNcAXaI-`,
  _ = `cSFkUHyVW24-`,
  _ = `yT92BfNEvpw-`,
  _ = `_6jMisrq5Zfo-`,
  _ = `XBv92QzB8Xc-`,
  _ = `NjUCqxvhkHk-`,
  _ = `gxh8RxFKhr8-`,
  _ = _();
function _(_) {
  let { event: _, language: _, strSaleURL: _ } = _,
    _ = _(_, _);
  if (!_) return null;
  let _ = _
    ? {
        ..._,
        strSaleURL: _,
      }
    : _;
  return _.strSaleURL
    ? (0, _.jsx)(_, {
        className: _(_, _, _),
        "flow-children": `row`,
        children: (0, _.jsx)(_, {
          saleEvent: _,
        }),
      })
    : null;
}
function _(_) {
  let { saleEvent: _, children: _ } = _,
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
  return (0, _.jsxs)(_.Fragment, {
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
          _,
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

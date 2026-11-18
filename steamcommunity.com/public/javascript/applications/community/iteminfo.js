/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import {
  Gt as r,
  Kt as i,
  Ou as a,
  Rt as o,
  cm as s,
  rg as c,
} from "./main.js";
import { r as l, t as u } from "./chunk~bb87983663.js";
var d = e(t()),
  f = n();
function p(e) {
  let {
      name: t,
      bIsMarket: n,
      bInteractable: r = !0,
      bIncludeMarketInfo: i = !0,
      bHideActionsForUnique: o = !1,
      steamidOwner: s,
      strSelectItemAction: c,
    } = e,
    [u, p] = d.useState();
  return (
    (0, d.useEffect)(
      () => v(t, (e, t) => p(e && { description: e, asset: t })),
      [t],
    ),
    u
      ? (0, f.jsx)(l, {
          steamidOwner: s,
          children: (0, f.jsx)(a, {
            children: n
              ? (0, f.jsx)(g, {
                  description: u.description,
                  asset: u.asset,
                  bHideActionsForUnique: o,
                })
              : (0, f.jsx)(m, {
                  description: u.description,
                  asset: u.asset,
                  bInteractable: r,
                  bIncludeMarketInfo: i,
                  strSelectItemAction: c,
                }),
          }),
        })
      : null
  );
}
function m(e) {
  let {
    description: t,
    asset: n,
    bInteractable: r,
    bIncludeMarketInfo: i,
    strSelectItemAction: a,
  } = e;
  return (0, f.jsx)(u.Root, {
    description: t,
    asset: n,
    bInteractable: r,
    children: (0, f.jsxs)(u.Container, {
      children: [
        (0, f.jsxs)(u.Content, {
          children: [
            (0, f.jsx)(u.Image, {}),
            (0, f.jsx)(u.Separator, {}),
            (0, f.jsx)(u.Name, {}),
            (0, f.jsx)(u.FraudWarnings, {}),
            (0, f.jsx)(u.GameInfo, {}),
            (0, f.jsx)(u.Descriptions, {}),
            (0, f.jsx)(u.AssetAccessories, {}),
            (0, f.jsx)(u.Actions, {}),
            (0, f.jsx)(u.OwnerDescriptions, {}),
            (0, f.jsx)(u.OwnerActions, {}),
            (0, f.jsx)(u.Tags, {}),
            (0, f.jsx)(u.AssetProperties, {}),
          ],
        }),
        i && !a && (0, f.jsx)(u.SellOnMarket, {}),
        !!a && (0, f.jsx)(h, { strLabel: a }),
      ],
    }),
  });
}
function h(e) {
  let { strLabel: t } = e;
  return (0, f.jsx)(r, {
    background: `greyneutral-3`,
    padding: `4`,
    gapY: `3`,
    direction: `column`,
    children: (0, f.jsx)(i, {
      children: (0, f.jsx)(o, {
        color: `green`,
        onClick: () => window.SelectItemDialogOnSelect(),
        size: `1`,
        children: t,
      }),
    }),
  });
}
function g(e) {
  let { description: t, asset: n, bHideActionsForUnique: i } = e,
    a = !(i && !t.commodity);
  return (0, f.jsx)(u.Root, {
    description: t,
    asset: n,
    children: (0, f.jsxs)(r, {
      direction: `row`,
      align: `start`,
      gap: `4`,
      children: [
        (0, f.jsx)(r, {
          flexGrow: `1`,
          flexShrink: `1`,
          flexBasis: `0%`,
          style: { boxShadow: `0 0 14px #030303 inset`, background: `#071215` },
          radius: `sm`,
          direction: `column`,
          align: `center`,
          minHeight: `360px`,
          justify: `center`,
          children: (0, f.jsx)(u.Image, {}),
        }),
        (0, f.jsxs)(r, {
          flexGrow: `1`,
          flexShrink: `1`,
          flexBasis: `0%`,
          direction: `column`,
          gapY: `2`,
          minWidth: `0`,
          children: [
            (0, f.jsx)(u.Name, {}),
            (0, f.jsx)(u.GameInfo, {
              hrefGame: `${s.COMMUNITY_BASE_URL}market/search?appid=${t.appid ?? 0}`,
            }),
            (0, f.jsx)(u.Descriptions, {}),
            (0, f.jsx)(u.AssetAccessories, {}),
            a && (0, f.jsx)(u.MarketActions, {}),
          ],
        }),
      ],
    }),
  });
}
var _ = new Map();
function v(e, t) {
  let n = window;
  if (
    ((n.UpdateReactItemInfo ||= (e, t, n) => {
      let r = _.get(e);
      r ? r(t, n) : c(!1, `Updater not registered: ${e}`);
    }),
    n.g_mapPendingItemInfo?.has(e))
  ) {
    let { description: r, asset: i } = n.g_mapPendingItemInfo.get(e);
    (t(r, i), n.g_mapPendingItemInfo.delete(e));
  }
  return (
    _.set(e, t),
    () => {
      _.delete(e);
    }
  );
}
export { p as default };

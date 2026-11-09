/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { r, t as i } from "./econbbcode.js";
import {
  Ht as a,
  Jt as o,
  Yh as s,
  Yt as c,
  em as l,
  wu as u,
} from "./main.js";
var d = e(t()),
  f = n();
function p(e) {
  let {
      name: t,
      bIsMarket: n,
      bInteractable: i = !0,
      bIncludeMarketInfo: a = !0,
      bHideActionsForUnique: o = !1,
      steamidOwner: s,
      strSelectItemAction: c,
    } = e,
    [l, p] = d.useState();
  return (
    (0, d.useEffect)(
      () => v(t, (e, t) => p(e && { description: e, asset: t })),
      [t],
    ),
    l
      ? (0, f.jsx)(r, {
          steamidOwner: s,
          children: (0, f.jsx)(u, {
            children: n
              ? (0, f.jsx)(g, {
                  description: l.description,
                  asset: l.asset,
                  bHideActionsForUnique: o,
                })
              : (0, f.jsx)(m, {
                  description: l.description,
                  asset: l.asset,
                  bInteractable: i,
                  bIncludeMarketInfo: a,
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
    bIncludeMarketInfo: a,
    strSelectItemAction: o,
  } = e;
  return (0, f.jsx)(i.Root, {
    description: t,
    asset: n,
    bInteractable: r,
    children: (0, f.jsxs)(i.Container, {
      children: [
        (0, f.jsxs)(i.Content, {
          children: [
            (0, f.jsx)(i.Image, {}),
            (0, f.jsx)(i.Separator, {}),
            (0, f.jsx)(i.Name, {}),
            (0, f.jsx)(i.FraudWarnings, {}),
            (0, f.jsx)(i.GameInfo, {}),
            (0, f.jsx)(i.Descriptions, {}),
            (0, f.jsx)(i.AssetAccessories, {}),
            (0, f.jsx)(i.Actions, {}),
            (0, f.jsx)(i.OwnerDescriptions, {}),
            (0, f.jsx)(i.OwnerActions, {}),
            (0, f.jsx)(i.Tags, {}),
            (0, f.jsx)(i.AssetProperties, {}),
          ],
        }),
        a && !o && (0, f.jsx)(i.SellOnMarket, {}),
        !!o && (0, f.jsx)(h, { strLabel: o }),
      ],
    }),
  });
}
function h(e) {
  let { strLabel: t } = e;
  return (0, f.jsx)(o, {
    background: `greyneutral-3`,
    padding: `4`,
    gapY: `3`,
    direction: `column`,
    children: (0, f.jsx)(c, {
      children: (0, f.jsx)(a, {
        color: `green`,
        onClick: () => window.SelectItemDialogOnSelect(),
        size: `1`,
        children: t,
      }),
    }),
  });
}
function g(e) {
  let { description: t, asset: n, bHideActionsForUnique: r } = e,
    a = !(r && !t.commodity);
  return (0, f.jsx)(i.Root, {
    description: t,
    asset: n,
    children: (0, f.jsxs)(o, {
      direction: `row`,
      align: `start`,
      gap: `4`,
      children: [
        (0, f.jsx)(o, {
          flexGrow: `1`,
          flexShrink: `1`,
          flexBasis: `0%`,
          style: { boxShadow: `0 0 14px #030303 inset`, background: `#071215` },
          radius: `sm`,
          direction: `column`,
          align: `center`,
          minHeight: `360px`,
          justify: `center`,
          children: (0, f.jsx)(i.Image, {}),
        }),
        (0, f.jsxs)(o, {
          flexGrow: `1`,
          flexShrink: `1`,
          flexBasis: `0%`,
          direction: `column`,
          gapY: `2`,
          minWidth: `0`,
          children: [
            (0, f.jsx)(i.Name, {}),
            (0, f.jsx)(i.GameInfo, {
              hrefGame: `${l.COMMUNITY_BASE_URL}market/search?appid=${t.appid ?? 0}`,
            }),
            (0, f.jsx)(i.Descriptions, {}),
            (0, f.jsx)(i.AssetAccessories, {}),
            a && (0, f.jsx)(i.MarketActions, {}),
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
      r ? r(t, n) : s(!1, `Updater not registered: ${e}`);
    }),
    n.g_mapPendingItemInfo?.has(e))
  ) {
    let { description: r, asset: i } = n.g_mapPendingItemInfo.get(e);
    t(r, i), n.g_mapPendingItemInfo.delete(e);
  }
  return (
    _.set(e, t),
    () => {
      _.delete(e);
    }
  );
}
export { p as default };

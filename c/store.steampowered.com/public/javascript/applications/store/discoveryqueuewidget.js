import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import "./chunk~9e9562d60b.js";
import { _ } from "./chunk~cb3200f06e.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import { _ } from "./chunk~7401689b78.js";
import { _ } from "./chunk~237be05bcf.js";
import { _, _ } from "./chunk~65d992238f.js";
var _ = _(_()),
  _ = `dycaOmod9zw-`,
  _ = `mzAzU7-I6qg-`,
  _ = `bKJhafR0h9g-`,
  _ = `MFeNsPbs3Hc-`,
  _ = `rmgCh57vTjU-`,
  _ = `iM2I4-tfnLE-`,
  _ = `j49Ux5WEHH8-`,
  _ = `KDX5pz7nAYo-`,
  _ = `T7waTVmQ-5w-`,
  _ = `d7Oav574vtg-`,
  _ = _();
function _(_) {
  return _()
    ? (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {}),
          _.logged_in
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {
                ..._,
              }),
        ],
      })
    : null;
}
function _(_) {
  let [_, _] = _(),
    _ = _(() => _.ExcludedContentDescriptor),
    _ = _.useMemo(
      () => ({
        content_descriptors_excluded: _,
      }),
      [_],
    );
  return _
    ? null
    : (0, _.jsx)(_, {
        defaultOptions: _,
        children: _.children,
      });
}
function _(_, _) {
  let { data: _ } = _({
    queryKey: [`DiscoveryQueueLoader`, _, _],
    queryFn: async () => {
      let { appids: _, exhausted: _ } =
          await _.Get().GetDiscoveryQueueAppsOfType(_, !1, _),
        _ = {
          ..._,
          include_screenshots: !0,
        };
      return (
        await _.Get().QueueMultipleAppRequests(_ ?? [], _),
        {
          rgDiscoveryApps: _,
          exhausted: _,
        }
      );
    },
    enabled: _.logged_in,
  });
  return [_?.rgDiscoveryApps, _?.exhausted];
}
function _(_) {
  let { eStoreDiscoveryQueueType: _, strQueueDescriptionOverride: _, ..._ } = _,
    { showDiscoveryQueue: _, bQueueVisible: _ } = _(_, _),
    _ = _(),
    [_, _] = _(_, _.storePageFilter),
    _ = _ || !!_.data?.preferences?.disable_animated_marketing,
    _ = _.useCallback(() => {
      !_ && _();
    }, [_, _]),
    _ = _.useId();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      "aria-labelledby": _,
      onClick: _,
      arrDiscoveryApps: _,
      bDisableAnimation: _,
      className: _,
      children:
        !_ &&
        (0, _.jsx)(_, {
          _: _,
          strQueueDescriptionOverride: _,
        }),
    }),
  });
}
function _(_) {
  let { strQueueDescriptionOverride: _, _: _ } = _,
    _ = _ ?? _(`#DiscoveryQueue_WidgetHeader`);
  return (0, _.jsxs)(`div`, {
    _: _,
    className: _(_, `WidgetHeaderCtn`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#DiscoveryQueue_WidgetHeader_Yours`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(!0),
    _ = _.useCallback(() => {
      window.location.href = `${_.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
    }, []);
  return (0, _.jsx)(_, {
    onClick: _,
    arrDiscoveryApps: _ ? _(_) : void 0,
    children: (0, _.jsxs)(`div`, {
      className: _(_, `WidgetHeaderCtn`),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#DiscoveryQueue_WidgetHeader_Yours`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#DiscoveryQueue_WidgetHeader_LoggedOut`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#DiscoveryQueue_Error_Login_Title`),
        }),
      ],
    }),
  });
}
function _(_) {
  let { data: _ } = _(
    `DiscoveryQueueWidget`,
    {
      sort: 11,
      start: 0,
      count: 12,
      filters: {
        type_filters: {
          include_games: !0,
        },
      },
    },
    {
      ..._,
      include_screenshots: !0,
    },
    {
      reactQuery: {
        enabled: _,
        staleTime: 1 / 0,
      },
    },
  );
  return (0, _.useMemo)(() => _ && _.GetItemIDs().map((_) => _.appid), [_]);
}
function _() {
  let _ = _(2, _.LANGUAGE, !0),
    _ = _();
  if (!_.data?.definition || (_.data?.reward_items?.length ?? 0) == 0)
    return null;
  let _ = _?.data.reward_items ?? [];
  _(_);
  let _ = _.slice(0, 3),
    _ = null;
  return (
    _.logged_in &&
      !_ &&
      (_ = (0, _.jsxs)(_.Fragment, {
        children: [
          ` - `,
          (0, _.jsx)(`a`, {
            href: _.COMMUNITY_BASE_URL + `my/itemcollection`,
            children: _(`#DiscoveryQueue_SaleStatus_Link`),
          }),
        ],
      })),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          rgRewardItems: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#DiscoveryQueue_Widget_SaleDesc`),
            }),
            (0, _.jsxs)(`div`, {
              children: [
                _(
                  `#DiscoveryQueue_Widget_SaleTitle`,
                  _(_.data.definition.rtime_end_time ?? 0, !1, !1, !1, !1),
                ),
                _,
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { rgRewardItems: _ } = _,
    _ = _.map((_) => {
      if (!_.community_definition || !_.community_definition.item_name)
        return null;
      let _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_.appid}/${_.community_definition.item_image_small}`;
      return (0, _.jsx)(
        `div`,
        {
          className: _,
          children: (0, _.jsx)(`img`, {
            src: _,
          }),
        },
        _.community_definition.item_name.toString(),
      );
    });
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(_),
  });
}

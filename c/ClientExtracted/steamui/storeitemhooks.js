import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
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
  _,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { _ } from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { _ } from "./library.js?contenthash=CVZWwsCP";
var _ = _(_()),
  _ = _();
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _(_) {
  let _ = _.filled ?? !0;
  return _() ? (_ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {})) : (0, _.jsx)(_, {});
}
function _() {
  return _()
    ? (0, _.jsx)(_, {
        direction: `down`,
      })
    : (0, _.jsx)(_, {
        angle: 180,
      });
}
function _(_) {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _(_) {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        className: _.className,
      });
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        className: _.className,
      });
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {
        className: _.className,
      })
    : (0, _.jsx)(_, {
        className: _.className,
      });
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
function _() {
  return (0, _.jsx)(_, {});
}
function _() {
  return _() ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
}
var _ = _(_());
function _(_, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _();
  _.current = _;
  let [_, _] = (0, _.useState)(void 0),
    {
      include_assets: _,
      include_release: _,
      include_platforms: _,
      include_all_purchase_options: _,
      include_screenshots: _,
      include_trailers: _,
      include_ratings: _,
      include_tag_count: _,
      include_reviews: _,
      include_basic_info: _,
      include_supported_languages: _,
      include_full_description: _,
      include_included_items: _,
      include_assets_without_overrides: _,
      apply_user_filters: _,
      include_links: _,
      include_extra_details: _,
      include_optin_registration_tags: _,
    } = _;
  if (
    ((0, _.useEffect)(() => {
      let _ = {
          include_assets: _,
          include_release: _,
          include_platforms: _,
          include_all_purchase_options: _,
          include_screenshots: _,
          include_trailers: _,
          include_ratings: _,
          include_tag_count: _,
          include_reviews: _,
          include_basic_info: _,
          include_supported_languages: _,
          include_full_description: _,
          include_included_items: _,
          include_assets_without_overrides: _,
          apply_user_filters: _,
          include_links: _,
          include_extra_details: _,
          include_optin_registration_tags: _,
        },
        _ = null;
      return (
        !_ ||
          _ < 0 ||
          _.Get().BHasStoreItem(_, _, _) ||
          (_ !== void 0 && _ && _ == _.current) ||
          (_ !== _.current && (_(void 0), (_.current = _)),
          (_ = _.default.CancelToken.source()),
          _.Get()
            .QueueStoreItemRequest(_, _, _)
            .then((_) => {
              (!_?.token.reason && _.current === _ && _(_ == 1), _());
            })),
        () => _?.cancel(`useStoreItemCache: unmounting`)
      );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    !_)
  )
    return [null, 2];
  if (_ === !1 || _.Get().BIsStoreItemMissing(_, _)) return [void 0, 2];
  if (!_.Get().BHasStoreItem(_, _, _)) return [void 0, 1];
  let _ = _.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
  return _ ? [_, 3] : [null, 2];
}
function _(_, _, _) {
  return _(_, 0, _, _);
}

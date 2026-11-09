import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import { _ } from "./clanimage.js";
import { _, _ } from "./ostype.js";
import { _ } from "./salepreviewwidgets.js";
import { _ } from "./saleitemlibrarywidget.js";
import { _ } from "./saletechredirectsignin.js";
import { _ } from "./trailertitlebar.js";
import { _ } from "./trailerstate.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _();
function _(_) {
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : _()
      ? (0, _.jsx)(_, {
          ..._,
          bShowReviewSummary: !0,
        })
      : (0, _.jsx)(_, {
          ..._,
        });
}
var _ = `eNekHvzmFIU-`,
  _ = `ByLDUFOvSAw-`,
  _ = `pRJkF9pz-wk-`,
  _ = `Szw0O0yQQ6s-`,
  _ = `QRE8EAd1KB0-`,
  _ = `tkQ8DuOjbEQ-`,
  _ = `zxJrq-uqOps-`,
  _ = `otwjBnZkTxs-`,
  _ = `_5AqboO3d9Og-`,
  _ = `qNtqagKFy8w-`,
  _ = `NKeeNIZXM0E-`,
  _ = `lI4Ua914eqo-`,
  _ = `S-bqOgtMzmg-`,
  _ = _(_(), 1);
function _(_) {
  let { appid: _, strUrlOverride: _ } = _,
    _ = _(_),
    { data: _ } = _(_);
  return (
    (0, _.useEffect)(() => {
      if (_) {
        let _ = `${_.STORE_BASE_URL}${_.store_url_path}`.replace(
          `/app/`,
          _ ?? `/verified/`,
        );
        _ != window.location.href && window.history.replaceState({}, ``, _);
      }
    }, [_, _]),
    !_ || !_
      ? null
      : (0, _.jsx)(_, {
          method: `verifiedprogram`,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              _: _,
            }),
          }),
        })
  );
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    _ = `${_.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.LocalizeReact(
          `#VerifiedProgram_DeckTitle`,
          _?.name,
          (0, _.jsxs)(`span`, {
            className: _,
            children: [
              (0, _.jsx)(`img`, {
                src: _,
                alt: _.Localize(`#VerifiedProgram_DeckAlt`),
              }),
              _.Localize(`#VerifiedProgram_DeckTitle_Verified`),
            ],
          }),
        ),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.LocalizeReact(
          `#VerifiedProgram_DeckSubTitle`,
          (0, _.jsx)(_, {
            className: _,
            href: `${_.STORE_BASE_URL}greatondeck`,
            children: _.Localize(`#VerifiedProgram_GreatOnDeck`),
          }),
        ),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        _: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _(`page_content`),
        children: [
          (0, _.jsx)(_, {
            _: _,
          }),
          (0, _.jsx)(_, {
            _: _,
          }),
          (0, _.jsx)(_, {
            _: _,
          }),
          (0, _.jsx)(_, {}),
        ],
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _(_, `library_hero_2x`) ?? _(_, `library_hero`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          src: _,
          alt: ``,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          src: _,
          alt: ``,
        }),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      _: `appid` in _ ? _.appid : 0,
      type: `game`,
      bShowDeckCompatibilityDialog: !1,
      bShowDemoButton: !0,
      bAutoFocus: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function _(_) {
  let _ = _(`${_.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`, `banner`);
  return (0, _.jsx)(_, {
    href: _,
    className: _(_),
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    _ = _(_);
  if (!_) return null;
  let _ = `${_.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
    { rgDashTrailers: _, rgHlsTrailers: _ } = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_),
        children: [
          (0, _.jsx)(_, {
            children: (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                dashManifests: _,
                hlsManifest: _[0],
                screenshot: _.screenshot_full ?? _.screenshot_medium ?? ``,
                altText: _?.name ?? ``,
                muteWhenAutoplayBlocked: !0,
              }),
            }),
          }),
          (0, _.jsx)(`img`, {
            src: _,
            alt: _.Localize(`#VerifiedProgram_DeckDeviceAlt`),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#VerifiedProgram_DeckDisclaimer`),
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(_.LANGUAGE);
  return (0, _.jsx)(_, {
    language: _,
    strAltText: _.Localize(`#VerifiedProgram_DeckShopBannerAlt`),
    strImageToken: _
      ? `{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg`
      : `{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg`,
  });
}
function _(_) {
  let {
    match: {
      params: { appid: _ },
    },
  } = _;
  return (0, _.jsx)(_, {
    appid: Number.parseInt(_),
  });
}
export { _ as default };
